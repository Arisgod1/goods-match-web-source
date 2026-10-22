#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const errors = [];
const warnings = [];
let passed = 0;

function check(name, fn) {
    try {
        const detail = fn();
        passed++;
        console.log(`PASS ${name}${detail ? ` — ${detail}` : ""}`);
    } catch (error) {
        errors.push({ name, message: error.message });
        console.log(`FAIL ${name} — ${error.message}`);
    }
}

function warn(name, message) {
    warnings.push({ name, message });
    console.log(`WARN ${name} — ${message}`);
}

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

function read(file) {
    return fs.readFileSync(path.join(root, file), "utf8");
}

function json(file) {
    return JSON.parse(read(file));
}

function exists(file) {
    return fs.existsSync(path.join(root, file));
}

function walk(directory) {
    const base = path.join(root, directory);
    const result = [];
    function visit(current, prefix) {
        for (const entry of fs
            .readdirSync(current, { withFileTypes: true })
            .sort((a, b) => a.name.localeCompare(b.name, "en"))) {
            const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
            if (entry.isDirectory()) {
                visit(path.join(current, entry.name), relative);
            } else {
                result.push(`${directory}/${relative}`);
            }
        }
    }
    visit(base, "");
    return result;
}

function decodeUuid(uuid) {
    const [base, suffix] = uuid.split("@");
    if (base.length !== 22) return uuid;
    const alphabet =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let hex = base.slice(0, 2);
    for (let index = 2; index < 22; index += 2) {
        const a = alphabet.indexOf(base[index]);
        const b = alphabet.indexOf(base[index + 1]);
        if (a < 0 || b < 0) throw new Error(`Invalid compressed UUID ${uuid}`);
        hex +=
            (a >> 2).toString(16) +
            (((a & 3) << 2) | (b >> 4)).toString(16) +
            (b & 15).toString(16);
    }
    return (
        [
            hex.slice(0, 8),
            hex.slice(8, 12),
            hex.slice(12, 16),
            hex.slice(16, 20),
            hex.slice(20),
        ].join("-") + (suffix ? `@${suffix}` : "")
    );
}

const requiredFiles = [
    "index.html",
    "boot.js",
    "game/main.js",
    "game/application.js",
    "game/settings.json",
    "game/modules.json",
    "game/prerequisite.js",
    "game/bundle.js",
    "game/bundle.js.map",
    "engine/cc.js",
    "engine/import-map.json",
    "engine/system.bundle.js",
    "engine/polyfills.bundle.js",
    "engine/chunks/bundle.js",
    "data/config.json",
    "assets/main/index.js",
    "package.json",
    "README.md",
    "cocos-source.example.json",
];

check("required files", () => {
    const missing = requiredFiles.filter((file) => !exists(file));
    assert(missing.length === 0, `missing: ${missing.join(", ")}`);
    return `${requiredFiles.length} files`;
});

check("JSON files parse", () => {
    const files = [
        "package.json",
        "data/config.json",
        "game/settings.json",
        "game/modules.json",
        "game/bundle.js.map",
        "engine/import-map.json",
    ];
    for (const file of files) json(file);
    return `${files.length} files`;
});

const config = json("data/config.json");
const settings = json("game/settings.json");
const manifest = json("game/modules.json");
const importMap = json("engine/import-map.json");

check("data/config.json", () => {
    assert(config.schemaVersion === 1, "unsupported schemaVersion");
    assert(
        Array.isArray(config.tables) && config.tables.length > 0,
        "config.tables must be a non-empty array",
    );
    const button = config.home && config.home.settingsButton;
    assert(button && typeof button === "object", "home.settingsButton missing");
    for (const key of ["top", "width", "height", "horizontalCenter"]) {
        assert(
            Number.isFinite(button[key]),
            `home.settingsButton.${key} must be a number`,
        );
    }
    for (const name of config.tables) {
        assert(
            exists(`data/tables/${name}.json`),
            `missing data/tables/${name}.json`,
        );
        json(`data/tables/${name}.json`);
    }
    return `${config.tables.length} tables`;
});

const definitions = new Map();
const registry = new Set();
const uuidOwners = new Map();
const moduleContext = {
    System: {
        register(id, dependencies, declare) {
            if (typeof id !== "string")
                throw new Error("module id must be a string");
            if (definitions.has(id))
                throw new Error(`duplicate module registration: ${id}`);
            if (!Array.isArray(dependencies))
                throw new Error(`invalid dependencies for ${id}`);
            definitions.set(id, { dependencies, declare });
        },
    },
};

check("game/modules.json and module graph", () => {
    assert(Array.isArray(manifest) && manifest.length > 0, "manifest is empty");
    const ids = new Set();
    for (const item of manifest) {
        assert(
            typeof item.id === "string" && item.id.length > 0,
            "module id missing",
        );
        assert(
            typeof item.file === "string" && item.file.startsWith("game/modules/"),
            `invalid module path: ${item.file}`,
        );
        assert(!ids.has(item.id), `duplicate manifest id: ${item.id}`);
        ids.add(item.id);
        assert(exists(item.file), `missing module file: ${item.file}`);
        assert(
            ["source", "compiled", "generated"].includes(item.readability),
            `invalid readability: ${item.file}`,
        );
        if (item.source) assert(exists(item.source), `missing source: ${item.source}`);

        const source = read(item.file);
        const before = definitions.size;
        vm.runInNewContext(source, moduleContext, {
            filename: item.file,
        });
        assert(
            definitions.size === before + 1,
            `module must register exactly one definition: ${item.file}`,
        );
        assert(
            definitions.has(item.id),
            `registered id mismatch for ${item.file}`,
        );
        const uuids = [...source.matchAll(/_RF\.push\(\s*\{\}\s*,\s*"([^"]+)"/g)].map(
            (match) => match[1],
        );
        for (const uuid of uuids) {
            assert(
                !uuidOwners.has(uuid),
                `duplicate component UUID ${uuid} in ${item.file} and ${uuidOwners.get(uuid)}`,
            );
            uuidOwners.set(uuid, item.file);
            registry.add(uuid);
        }
        if (item.componentUuid) {
            assert(
                uuids.includes(item.componentUuid),
                `componentUuid mismatch for ${item.file}`,
            );
        }
    }

    for (const [id, record] of definitions) {
        for (const dependency of record.dependencies) {
            const target = dependency.startsWith("./")
                ? `chunks:///_virtual/${dependency.slice(2)}`
                : dependency;
            if (
                !definitions.has(target) &&
                ![
                    "cc",
                    "cc/env",
                    "chunks:///_virtual/rollupPluginModLoBabelHelpers.js",
                ].includes(target)
            ) {
                throw new Error(`unresolved dependency ${id} -> ${target}`);
            }
        }
    }
    return `${manifest.length} modules, ${definitions.size} definitions, ${uuidOwners.size} UUIDs`;
});

check("bundled module identities", () => {
    const bundle = read("game/bundle.js");
    for (const item of manifest) {
        const pattern = new RegExp(
            `System\\.register\\(\\s*"${item.id.replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&",
            )}"`,
            "g",
        );
        const count = (bundle.match(pattern) || []).length;
        assert(count === 1, `module ${item.id} appears ${count} times`);
    }
    const map = json("game/bundle.js.map");
    assert(map.file === "bundle.js", "source map file must be bundle.js");
    assert(
        Array.isArray(map.sources) &&
            map.sources.length === manifest.length + 1,
        "source map sources count mismatch",
    );
    assert(
        Array.isArray(map.sourcesContent) &&
            map.sourcesContent.length === map.sources.length,
        "source map sourcesContent mismatch",
    );
    return `${manifest.length} ids, ${map.sources.length} map sources`;
});

check("bundle is reproducible", () => {
    const output = execFileSync(
        process.execPath,
        [path.join(root, "tools/assemble-game.cjs"), "--check"],
        { encoding: "utf8" },
    );
    return output.trim();
});

check("readability baseline", () => {
    const files = walk("game/modules");
    const minified = walk("game").filter((file) => file.endsWith(".min.js"));
    assert(minified.length === 0, `minified files: ${minified.join(", ")}`);
    let maxLine = 0;
    for (const file of files) {
        const lines = read(file).split("\n");
        for (const line of lines) maxLine = Math.max(maxLine, line.length);
        assert(
            read(file).length > 0,
            `empty module file: ${file}`,
        );
    }
    assert(maxLine <= 1000, `module line too long: ${maxLine}`);
    const bundleLines = read("game/bundle.js").split("\n");
    const bundleMax = Math.max(...bundleLines.map((line) => line.length));
    assert(bundleMax <= 1000, `bundle line too long: ${bundleMax}`);
    const suspicious = files.filter((file) =>
        /\beval\s*\(|\bnew\s+Function\s*\(/.test(read(file)),
    );
    assert(
        suspicious.length === 0,
        `eval/Function found in: ${suspicious.join(", ")}`,
    );
    assert(exists("game/bundle.js.map"), "bundle source map missing");
    return `${files.length} modules, max line ${maxLine}, bundle max ${bundleMax}`;
});

check("engine import map", () => {
    assert(importMap.imports && importMap.imports.cc, "cc mapping missing");
    const target = path.resolve(
        root,
        "engine",
        importMap.imports.cc,
    );
    assert(fs.existsSync(target), `cc mapping target missing: ${target}`);
    return path.relative(root, target);
});

check("game/settings.json", () => {
    assert(
        settings.assets &&
            Array.isArray(settings.assets.projectBundles) &&
            settings.assets.projectBundles.length > 0,
        "assets.projectBundles missing",
    );
    assert(
        settings.screen &&
            settings.screen.designResolution &&
            settings.screen.designResolution.width === 720 &&
            settings.screen.designResolution.height === 1600,
        "design resolution must be 720x1600",
    );
    assert(
        settings.scripting &&
            Array.isArray(settings.scripting.scriptPackages),
        "scriptPackages missing",
    );
    for (const packagePath of settings.scripting.scriptPackages) {
        const resolved = path.resolve(
            path.dirname(path.join(root, "game/settings.json")),
            packagePath,
        );
        assert(
            fs.existsSync(resolved),
            `script package missing: ${packagePath}`,
        );
    }
    for (const name of settings.assets.projectBundles) {
        assert(
            exists(`assets/${name}/config.json`),
            `bundle config missing: ${name}`,
        );
    }
    return `${settings.assets.projectBundles.length} bundles, ${settings.scripting.scriptPackages.length} script packages`;
});

check("asset bundles", () => {
    const bundles = new Map();
    const identities = new Set();
    for (const name of settings.assets.projectBundles) {
        const bundle = json(`assets/${name}/config.json`);
        bundles.set(name, bundle);
        for (const uuid of bundle.uuids || []) {
            const decoded = decodeUuid(uuid);
            identities.add(decoded);
            identities.add(decoded.split("@")[0]);
        }
    }
    let packs = 0;
    let references = 0;
    let scripts = 0;
    for (const [name, bundle] of bundles) {
        const base = `assets/${name}/`;
        const importBase = bundle.importBase || "import";
        assert(
            fs.existsSync(path.join(root, base, importBase)),
            `missing import directory: ${name}`,
        );
        for (const [pack, indices] of Object.entries(bundle.packs || {})) {
            packs++;
            for (const index of indices) {
                assert(
                    Number.isInteger(index) &&
                        index >= 0 &&
                        index < bundle.uuids.length,
                    `pack index out of range: ${name}`,
                );
            }
            assert(
                fs.existsSync(
                    path.join(
                        root,
                        base,
                        importBase,
                        pack.slice(0, 2),
                        `${pack}.json`,
                    ),
                ),
                `missing asset pack: ${name}/${pack}`,
            );
        }
        for (const [index, entry] of Object.entries(bundle.paths || {})) {
            assert(
                bundle.uuids[index] && bundle.types[entry[1]],
                `invalid asset path/type: ${name}/${entry[0]}`,
            );
        }
        for (let index = 0; index < (bundle.redirect || []).length; index += 2) {
            assert(
                bundle.uuids[bundle.redirect[index]] &&
                    bundle.deps[bundle.redirect[index + 1]],
                `invalid redirect: ${name}`,
            );
        }
        const importDir = path.join(root, base, importBase);
        const files = [];
        function collect(directory) {
            for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
                const full = path.join(directory, entry.name);
                if (entry.isDirectory()) collect(full);
                else if (entry.name.endsWith(".json")) files.push(full);
            }
        }
        collect(importDir);
        for (const full of files) {
            const packed = JSON.parse(fs.readFileSync(full, "utf8"));
            if (!Array.isArray(packed) || packed[0] !== 1) continue;
            for (const uuid of Array.isArray(packed[1]) ? packed[1] : []) {
                if (typeof uuid !== "string") continue;
                references++;
                const decoded = decodeUuid(uuid);
                assert(
                    identities.has(decoded) ||
                        identities.has(decoded.split("@")[0]),
                    `unknown asset UUID ${uuid} in ${path.relative(root, full)}`,
                );
            }
            for (const klass of Array.isArray(packed[3]) ? packed[3] : []) {
                const id = Array.isArray(klass) ? klass[0] : klass;
                if (typeof id !== "string" || id.startsWith("cc.")) continue;
                scripts++;
                const allowed = new Set([
                    "RenderQueueDesc",
                    "ForwardPipeline",
                    "ShadowFlow",
                    "ShadowStage",
                    "ForwardFlow",
                    "ForwardStage",
                    "CCPropertyOverrideInfo",
                ]);
                assert(
                    registry.has(id) || allowed.has(id),
                    `unregistered serialized class ${id} in ${path.relative(root, full)}`,
                );
            }
        }
    }
    const icons = bundles.get("icon");
    assert(icons, "icon bundle missing");
    for (const key of config.skillIcons || []) {
        assert(
            Object.values(icons.paths).some(
                (entry) =>
                    entry[0] === `${key}/spriteFrame` &&
                    icons.types[entry[1]] === "cc.SpriteFrame",
            ),
            `unknown skill icon key: ${key}`,
        );
    }
    return `${bundles.size} bundles, ${packs} packs, ${references} UUID refs, ${scripts} script schemas`;
});

check("runtime paths", () => {
    const files = [
        "index.html",
        "boot.js",
        "game/main.js",
        "game/application.js",
        "game/settings.json",
        "assets/main/index.js",
    ];
    const stale = [
        "cocos-js/",
        "business/data",
        "business/config",
        "src/settings.json",
        "src/chunks",
        "src/system.bundle",
        "src/polyfills",
    ];
    for (const file of files) {
        const content = read(file);
        assert(!content.includes("file://"), `${file} contains file://`);
        assert(
            !content.includes("http://127.0.0.1") &&
                !content.includes("http://localhost"),
            `${file} contains a hardcoded localhost URL`,
        );
        for (const token of stale) {
            assert(
                !content.includes(token),
                `${file} still references ${token}`,
            );
        }
    }
    const html = read("index.html");
    for (const match of html.matchAll(/<script[^>]+src="([^"]+)"/g)) {
        const source = match[1];
        assert(
            !source.startsWith("/") && !/^[a-z]+:/i.test(source),
            `non-relative script src: ${source}`,
        );
        assert(exists(source), `missing script src: ${source}`);
    }
    return `${files.length} runtime files`;
});

check("save key", () => {
    const keys = new Set();
    for (const file of walk("game/modules")) {
        for (const match of read(file).matchAll(/hgxcds_[A-Za-z0-9_]+/g))
            keys.add(match[0]);
    }
    for (const file of walk("game/source").filter((item) => item.endsWith(".ts"))) {
        for (const match of read(file).matchAll(/hgxcds_[A-Za-z0-9_]+/g))
            keys.add(match[0]);
    }
    assert(
        keys.size === 1 && keys.has("hgxcds_game_v1"),
        `unexpected save keys: ${[...keys].join(", ")}`,
    );
    return "hgxcds_game_v1";
});

check("package scripts", () => {
    const pkg = json("package.json");
    assert(
        pkg.scripts && pkg.scripts.start && pkg.scripts.start.includes("http-server"),
        "start script must use http-server",
    );
    assert(pkg.scripts.check, "check script missing");
    assert(pkg.scripts.assemble, "assemble script missing");
    assert(
        pkg.devDependencies && pkg.devDependencies["http-server"],
        "http-server devDependency missing",
    );
    return "start/check/assemble";
});

if (exists("cocos-source.json")) {
    try {
        const source = json("cocos-source.json");
        assert(source.schemaVersion === 1, "unsupported schemaVersion");
        assert(
            source.creator && source.creator.version === "3.8.3",
            "creator.version must be 3.8.3",
        );
        assert(source.sourceProject && source.sourceProject.path, "sourceProject.path missing");
        assert(source.engine && source.engine.sourcePath, "engine.sourcePath missing");
        for (const key of ["sourceProject", "engine"]) {
            const candidate = source[key].path || source[key].sourcePath;
            if (!fs.existsSync(candidate))
                warn("cocos-source.json", `${key} path does not exist: ${candidate}`);
        }
        for (const [name, candidate] of Object.entries(
            source.referenceBuilds || {},
        )) {
            if (!fs.existsSync(candidate))
                warn("cocos-source.json", `${name} path does not exist: ${candidate}`);
        }
        passed++;
        console.log("PASS cocos-source.json — local path mapping");
    } catch (error) {
        errors.push({ name: "cocos-source.json", message: error.message });
        console.log(`FAIL cocos-source.json — ${error.message}`);
    }
} else {
    warn("cocos-source.json", "not present (optional local mapping)");
}

console.log("");
if (warnings.length) {
    console.log(`Warnings: ${warnings.length}`);
    for (const warning of warnings)
        console.log(`  - ${warning.name}: ${warning.message}`);
}
if (errors.length) {
    console.log(`Result: ${passed} passed, ${errors.length} failed`);
    process.exit(1);
}
console.log(`Result: ${passed} passed, 0 failed`);
