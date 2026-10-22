# 货柜消除大师 · 架构与运行链路

## 1. 定位

这是一个独立的 Cocos Creator 3.8.3 Web Source 工程：

- 不依赖 Creator 编辑器、`library/`、`temp/` 或原始 TypeScript 工程的构建缓存。
- 运行只需要静态 HTTP 服务和浏览器；不需要服务端 API。
- `engine/` 是固定 Cocos 运行时，`game/` 是业务源码与运行包，`data/` 是配置，`assets/` 是资源包。
- `game/source/` 的 92 个 TypeScript 是语义权威；`game/modules/` 的 95 个 JS 是当前运行产物。

## 2. 目录边界

| 目录/文件 | 职责 | 是否手改 |
| --- | --- | --- |
| `index.html`、`style.css`、`favicon.svg` | 页面外壳与 Canvas 容器 | 是 |
| `boot.js` | 加载 `data/`，设置全局数据，导入 `game/main.js` | 是 |
| `engine/` | Cocos 3.8.3、SystemJS、Polyfills、Babel 辅助包 | 否（固定运行时） |
| `game/main.js` | SystemJS 入口，创建 Application 并启动 | 是（谨慎） |
| `game/application.js` | Cocos Application 适配器，指向 `game/settings.json` | 是（谨慎） |
| `game/settings.json` | 启动场景、资源包、分辨率、scriptPackages | 是（谨慎） |
| `game/modules/*.js` | 95 个运行模块 | 是 |
| `game/modules.json` | 模块清单、TS 映射、UUID、可读性元数据 | 是（建议由工具生成） |
| `game/prerequisite.js` | SystemJS 虚拟入口注册 | 是（谨慎） |
| `game/bundle.js`、`game/bundle.js.map` | 由 modules 组装出的运行包与 source map | **否（生成）** |
| `game/source/**/*.ts` | 92 个原始 TypeScript | 是（语义权威） |
| `data/config.json`、`data/tables/*.json` | 可编辑配置与表数据 | 是 |
| `assets/<bundle>/` | Cocos 资源包、`native/`、`import/`、`config.json` | 资源可换，序列化结构谨慎 |
| `assets/main/index.js` | Cocos 主包预加载兼容占位脚本 | **否（占位）** |
| `tools/assemble-game.cjs` | 从 modules 重建 bundle 与 map | 是 |
| `tools/check.cjs` | 结构、资源、可读性校验 | 是 |
| `cocos-source.json` | 本机 Creator/原始工程路径映射 | 本地，不提交 |
| `cocos-source.example.json` | 路径映射模板 | 是 |
| `docs/` | 需求、计划、架构、代码映射、编辑、验收 | 是 |

## 3. 启动链路

```text
index.html
  ├─ engine/polyfills.bundle.js
  ├─ engine/system.bundle.js
  ├─ engine/import-map.json        (cc -> ./cc.js)
  └─ boot.js
       ├─ fetch data/config.json
       ├─ fetch data/tables/<config.tables>.json
       ├─ globalThis.WebGameConfig
       ├─ globalThis.WebGameTables
       └─ System.import("./game/main.js")
            ├─ ./application.js
            └─ cc
                 ├─ Application.init(engine)
                 └─ Application.start()
                      ├─ settingsPath = game/settings.json
                      ├─ scriptPackages:
                      │    ../engine/chunks/bundle.js
                      │    ../game/bundle.js
                      ├─ assets/* 资源包
                      └─ main.scene -> ... -> 主页/关卡
```

### 关键点

1. `boot.js` 先加载数据，再启动引擎，避免业务模块在 `WebGameConfig`/`WebGameTables` 未就绪时执行。
2. `engine/import-map.json` 把 `cc` 映射到 `engine/cc.js`。
3. `game/settings.json` 的 `scriptPackages` 先加载引擎辅助包，再加载 `game/bundle.js`。
4. `game/bundle.js` 外层是 SystemJS 模块，`execute` 中注册 95 个业务模块和 `prerequisite.js`。
5. Cocos 仍会请求 `assets/main/index.js`；该文件是一个极小兼容占位脚本，不注册业务模块、不复制 bundle。业务模块由 `game/bundle.js` 统一注册。
6. `assets/main/config.json` 的 `hasPreloadScript` 保持 `true` 以匹配占位脚本；`scriptPackages` 在主包预加载之前完成模块注册。
7. 引擎启动 `db://assets/scenes/main.scene`，场景/Prefab 通过组件 UUID 找到已注册的类。

## 4. 模块系统

- 每个运行模块是一个 `System.register("chunks:///_virtual/<Name>.ts", [...], ...)`。
- `game/modules.json` 是模块清单与映射：
  - `id`：SystemJS 模块 ID；
  - `file`：运行模块路径；
  - `source`：原始 TS 路径；
  - `className`、`componentUuid`：组件名与 `_RF.push` UUID；
  - `readability`：`source`（有权威 TS 源）、`compiled`（无独立源，保留产物）、`generated`（Web/运行时生成）；
  - `notes`：数据适配、Web 适配等说明。
- 95 个模块中：
  - 92 个有原始 TS 映射；
  - `WebLayout` 是 Web 适配模块；
  - `debug-view-runtime-control` 是 Cocos 调试视图模块；
  - `main` 是 `chunks:///_virtual/main` 虚拟入口。
- `game/prerequisite.js` 注册 `virtual:///prerequisite-imports/main`，指向 `chunks:///_virtual/main`。
- 组件 UUID、模块 ID、`ccclass` 名称和序列化属性名是场景/Prefab 引用的一部分，不能随意改。

## 5. 数据流

- `data/config.json` 是玩法参数入口：主页按钮、技能时间、金币、连击等。
- `data/tables/*.json` 是关卡、商品、奖励、登录奖励、幸运转盘和连击表。
- `boot.js` 只按 `config.tables` 加载表文件，合并到 `WebGameTables`；不读取 `business/` 或其他旧路径。
- `game/modules/cfg_*.js` 是轻量读取适配层；运行时表数据唯一来源是 `data/tables/`。
- 修改 `data/` 后刷新页面即可生效，不需要重建 bundle。

## 6. 资源包

`game/settings.json` 的 `assets.projectBundles` 包含 7 个包：

```text
internal, audio, icon, resources, main, game, ui
```

每个包保留：

```text
assets/<name>/config.json
assets/<name>/index.js
assets/<name>/import/
assets/<name>/native/   (如有)
```

- `assets/main/index.js` 是兼容占位脚本，不是业务包。
- `assets/main/index.js.map` 已迁移为 `game/bundle.js.map`。
- `assets/*/config.json` 中的 UUID、`packs`、`versions`、`redirect` 属于 Cocos 序列化数据，不要手改。
- 结构性修改（Prefab、场景、图集）应回到原始 Creator 工程完成。

## 7. 存档

- 唯一键：`hgxcds_game_v1`。
- 通过 `GameSave` 事务写入，失败时保留旧数据并走重试/恢复流程。
- 存档绑定站点 origin；换端口或域名会得到独立存档。
- 不读取旧浏览器存储键，不做跨设备同步。

## 8. 可读性与构建

| 层级 | 内容 | 状态 |
| --- | --- | --- |
| L1 源码 | `game/source/**/*.ts`，92 个原始 TS | 完整 |
| L2 运行 | `game/modules/*.js`，95 个非压缩模块 | 完整；公开名称/UUID 保留 |
| L3 逐行 | 生成 JS 的局部变量有意义命名 | 部分；92 个模块仍有编译器短名，已记录缺口 |

- `node tools/assemble-game.cjs` 生成 `game/bundle.js` 与 `game/bundle.js.map`。
- `node tools/assemble-game.cjs --check` 校验生成结果是否与提交版本一致。
- `node tools/check.cjs` 校验文件、模块图、资源包、UUID、可读性、存档键和本地路径。
- 业务代码禁止压缩/混淆；引擎 `cc.js` 是固定第三方运行时，允许保留上游格式。

## 9. 本地路径映射

`cocos-source.json` 只用于本机追溯：

```text
creator.appPath       Cocos Creator 3.8.3
sourceProject.path    原始 code/ 工程
engine.sourcePath     引擎源码
referenceBuilds       web-mobile / web-editable-source
```

- 真实文件被 `.gitignore` 忽略。
- `cocos-source.example.json` 提交模板。
- `boot.js`、`game/`、`engine/` 运行时不读取该文件；缺失不影响启动。

## 10. 运行约束

- 入口必须是 HTTP(S)，不能用 `file://`。
- 所有运行时路径为相对路径，不硬编码 localhost 或绝对文件路径。
- 不需要 Creator、Node 服务端或数据库；`npm start` 只是 `http-server` 的包装。
- 浏览器音频自动播放策略、WebGL 性能和存档 origin 限制属于浏览器行为。
