# 货柜消除大师 · Web Source 需求文档

| 项目 | 内容 |
| --- | --- |
| 文档版本 | v0.1 |
| 日期 | 2026-10-22 |
| 状态 | 已实现并验收（2026-10-22，Step 8 完成） |
| 目标目录 | `/Users/arisone/projects/游戏工场/货柜消除大师-web-source` |
| 输入工程 | `/Users/arisone/projects/游戏工场/货柜消除大师/code` |
| 参考形态 | 截图中的 `daluosi` 工程（本机无该目录，仅按目录截图对齐） |
| 本轮交付 | 可运行 Web 工程 + 需求文档 + 校验脚本；不含浏览器自动化与发布打包 |

## 1. 背景

`货柜消除大师` 是一个 Cocos Creator **3.8.3** + TypeScript 的 720 × 1600 竖屏货柜三消游戏。原始工程保留了完整的 TypeScript 源码、场景、Prefab、美术资源和配置工作簿，同时也存在 `build/web-mobile`（压缩 Web 构建）和 `build/web-editable-source-20261021`（可读性较高的独立 Web 工程）两份构建材料。

本次工作不是继续维护 Creator 工程，也不是把游戏改写成原生 Canvas，而是把现有游戏整理成一个**独立的、结构清晰的 Web 源码工程**：不依赖 Cocos Creator、不需要构建即可启动，直接用静态 HTTP 服务（优先 `http-server`）在浏览器中运行。

最终用途是**模型训练与二次创作**。因此，代码不能只有压缩或混淆后的构建产物，必须保留可读、可检索、可修改的源码结构，并让数据、资源、引擎和业务代码的边界清晰。

## 2. 目标

### 2.1 总目标

在目标目录中建立一个符合以下标准的 Web Source 工程：

1. **可直接运行**：在工程根目录执行 `http-server`，浏览器打开地址即可游玩，不需要 Creator、不需要先执行构建命令。
2. **结构对齐**：目录形态与参考工程一致，包含 `assets/`、`boot.js`、`cocos-source.json`、`cocos-source.example.json`、`data/`、`docs/`、`tools/`，并补充 `engine/`、`game/`、`index.html`、`package.json` 等运行必需项。
3. **源码可读**：业务代码以原始 TypeScript 为权威源码；运行时 JS 必须非压缩、非混淆，保留公开名称，并提供源码映射。
4. **数据可改**：关卡、奖励、商品、连击等表数据集中到 `data/`，改 JSON 后刷新页面即可生效。
5. **资源可追溯**：Cocos 资源包、UUID、Prefab/场景引用关系保持稳定，不因目录重排而断链。
6. **可验证**：提供无第三方依赖的校验脚本，检查启动文件、模块清单、资源完整性、数据引用和可读性基线。

### 2.2 成功标准

满足以下条件即视为本轮成功：

- `http-server . -p 8080 -c-1` 从工程根目录启动后，首页可加载并进入游戏主页。
- 游戏可完成一次完整流程：开始关卡、消除、使用技能、暂停/恢复、胜利或超时、复活/结算、返回主页。
- 浏览器控制台没有因资源 404、模块解析失败或启动异常产生的错误。
- 刷新页面后，`hgxcds_game_v1` 存档仍然生效。
- `game/source/` 保留原始 TypeScript 业务源码；`game/modules/` 与 `game/bundle.js` 不是压缩产物。
- `docs/code-map.md` 能回答“某个 TS 文件对应哪个 JS 模块、组件 UUID、资源包和运行时职责”。
- `node tools/check.cjs` 通过；缺少 `cocos-source.json` 不影响运行。

### 2.3 已确认口径

2026-10-22 已确认以下三项，本文档按此编写：

1. **代码形态**：`game/` 使用可读业务源码，`engine/` 使用固定 Cocos 3.8.3 运行时；不把引擎源码展开到本工程，也不以压缩构建作为业务源码。
2. **`cocos-source.json` 语义**：本地路径映射。真实文件不提交，`cocos-source.example.json` 提供模板；运行时读取不到它也必须正常启动。
3. **本轮范围**：可运行工程 + 需求文档 + 校验脚本；浏览器自动化回归与发布打包留到后续阶段。

## 3. 使用场景

### 3.1 模型训练

- 以 `game/source/` 的 TypeScript 和 `game/modules/` 的可读 JS 作为代码语料。
- 以 `data/` 的 JSON 作为配置/关卡数据语料。
- 以 `modules.json`、`docs/code-map.md` 作为机器可读的代码索引。
- 保留原始类名、方法名、组件名、配置字段名，避免训练数据被无意义的短标识符污染。

### 3.2 二次创作

- 修改 `data/tables/*.json` 调整关卡、奖励、商品和连击。
- 修改 `data/config.json` 调整主页按钮、技能时间、金币等参数。
- 修改 `game/modules/*.js`（本轮运行时可编辑源码），再执行 `tools/assemble-game.cjs` 生成可运行的 `game/bundle.js`。
- 阅读 `game/source/` 的 TypeScript 理解原始语义；若要让 TS 改动进入运行时，需要后续的 TS → modules 编译工具，本轮不提供。
- 替换 `assets/*/native/` 下的图片和音频；结构复杂的 Prefab/图集改动仍建议回到原始 Creator 工程完成。
- 不需要理解 Creator 工程结构即可进行 Web 侧修改。

### 3.3 静态试玩与分发

- 将工程根目录（或后续生成的发布目录）放到任意静态 HTTP 服务下即可试玩。
- 不依赖服务端 API，不依赖数据库，不加载外部 CDN 资源。

## 4. 输入材料与现状

| 输入 | 位置 | 规模/说明 | 在本次工作中的用途 |
| --- | --- | --- | --- |
| 原始 Creator 工程 | `code/` | Cocos 3.8.3，含 92 个业务 TS 文件、场景、Prefab、资源、工作簿 | 作为语义权威与 `game/source/` 的来源 |
| 压缩 Web 构建 | `code/build/web-mobile/` | 约 7.8 MB，含压缩业务 bundle、引擎和资源 | 作为“能跑”的行为基线，不作为最终源码 |
| 可编辑 Web 工程 | `code/build/web-editable-source-20261021/` | 约 10 MB，95 个模块、独立资源、数据 JSON、工具与文档 | 目录迁移和启动链路的主要参考 |
| Web 构建模板 | `code/build-templates/` | 自定义 `index.html`、`application.js` 外壳 | 入口页面和 Cocos Application 适配参考 |
| 迁移文档 | `code/docs/` | 架构、二次开发、Web 迁移、自动化、验证记录 | 约束、已知限制和验证方法参考 |

现状要点：

- `web-mobile/src/chunks/bundle.js` 是压缩业务代码，不能作为 `web-source` 的最终 `game/` 内容。
- `web-editable-source` 已经把业务拆成 95 个可读模块，并提取了 `business/data/*.json`，是本次迁移的最佳起点；但其中部分模块仍是 Babel 编译产物，局部变量被压缩成单字母，只能作为行为基线，不能单独作为“可读源码”交付。
- 原始 `code/assets/scripts/` 中的 92 个 TypeScript 文件是业务语义的最权威来源，应完整进入 `game/source/`。
- 接收时目标工作区为空目录（仅 `.DS_Store`）；截至本文档完成只新增了 `docs/requirements.md`，尚未初始化运行工程。

## 5. 术语

- **固定运行时**：随工程分发的 Cocos 3.8.3 Web 引擎文件（`engine/cc.js` 等），不要求二次构建，允许保留上游发布格式。
- **业务源码**：`game/source/` 下的 TypeScript，以及 `game/modules/` 下与之一一对应的可读 JS。
- **业务 bundle**：由 `game/modules/*.js` 按 `modules.json` 顺序拼接而成的 `game/bundle.js`，是浏览器实际加载的 SystemJS 包。
- **资源包（Bundle）**：Cocos 的 `internal`、`main`、`game`、`ui`、`icon`、`audio`、`resources` 等资源集合，目录内包含 `config.json`、`index.js`、`native/`、`import/`。
- **表数据**：从配置工作簿导出、供运行时读取的 JSON，如 `cfg_level.json`、`cfg_icon.json`。
- **骨架/外壳**：`index.html`、`style.css`、`boot.js` 等与具体玩法无关的启动文件。

## 6. 范围

### 6.1 本轮包含

1. 建立目标目录与基础文件：`index.html`、`boot.js`、`style.css`、`favicon.svg`、`package.json`、`package-lock.json`、`README.md`、`.gitignore`。
2. 迁移固定运行时到 `engine/`，并修正 import map 与启动路径。
3. 迁移资源包到 `assets/`，保持 Bundle 名称、UUID、`config.json`、`native/`、`import/` 结构稳定。
4. 提取配置和表数据到 `data/`，保持 JSON 可读、稳定排序。
5. 迁移 95 个业务模块到 `game/modules/`，生成 `game/bundle.js` 和 source map；同时复制 92 个原始 TS 文件到 `game/source/`。
6. 实现独立启动链路：`index.html` → `boot.js` → 数据加载 → `game/main.js` → Cocos 引擎 → 场景。
7. 编写 `tools/check.cjs`（结构与完整性校验）和 `tools/assemble-game.cjs`（从模块重新生成 bundle）。
8. 编写 `docs/requirements.md`、`docs/architecture.md`、`docs/code-map.md`、`docs/editing.md`、`docs/validation.md`。
9. 编写并持续更新 `docs/implementation-plan.md`，每一步完成后记录改动、命令和浏览器验证结果。
10. 人工完成一次 `http-server` 启动和完整玩法冒烟验证。

### 6.2 本轮不包含

- Playwright 或其他浏览器自动化回归；本轮以人工试玩和控制台检查为准。
- 生成发布目录、压缩包、release manifest 或部署流水线。
- 重新构建 Cocos 引擎源码；`engine/` 使用现成 3.8.3 运行时。
- 把游戏改写为原生 Canvas、WebGL 手写渲染或非 Cocos 架构。
- 新增广告、支付、登录、排行榜、云存档或任何服务端接口。
- 大规模改造玩法、UI、美术或数值；本轮以“等价迁移”为主。
- 承诺把所有 Babel 编译产物重写成手写风格的 TypeScript；以原始 TS 为可读源码，JS 作为运行产物。

## 7. 目录规范

目标目录如下。标注“生成”的文件不得手改；标注“本地”的文件不提交。

```text
货柜消除大师-web-source/
├── index.html                       # 入口页面，只负责加载引擎外壳和 boot.js
├── boot.js                          # 启动器：加载 data/，再启动 game/main.js
├── cocos-source.json                # 本地路径映射（不提交，.gitignore）
├── cocos-source.example.json        # 路径映射模板（提交）
├── package.json                     # http-server、check、assemble 脚本
├── package-lock.json                # 锁定依赖版本
├── README.md                        # 快速启动、目录说明、编辑入口
├── .gitignore                       # 忽略 node_modules、cocos-source.json 等
├── style.css                        # 页面外壳样式
├── favicon.svg                      # 站点图标
│
├── engine/                          # 固定 Cocos 3.8.3 Web 运行时
│   ├── cc.js
│   ├── import-map.json              # "cc" -> "./cc.js"
│   ├── polyfills.bundle.js
│   ├── system.bundle.js
│   ├── chunks/bundle.js             # Babel/运行时辅助包
│   ├── meshopt_decoder.*.js
│   └── runtime-lock.json            # 版本、文件哈希（可选但建议）
│
├── game/                            # 业务源码与运行包
│   ├── main.js                      # SystemJS 入口：创建 Application 并启动
│   ├── application.js               # Cocos Application 适配器
│   ├── bundle.js                    # 生成：modules 拼接后的可读运行包
│   ├── bundle.js.map                # 生成：source map
│   ├── modules.json                 # 模块清单与代码映射元数据
│   ├── prerequisite.js              # SystemJS 预置注册
│   ├── settings.json                # 启动场景、资源包、分辨率、scriptPackages
│   ├── modules/                     # 95 个可读 SystemJS 业务模块
│   │   ├── Main.js
│   │   ├── Goods.js
│   │   └── ...
│   └── source/                      # 原始 TypeScript 业务源码（92 个文件）
│       ├── game/
│       ├── manager/
│       ├── ui/
│       ├── uiItem/
│       ├── uiExtend/
│       ├── scriptBase/
│       ├── dto/
│       ├── enum/
│       ├── util/
│       ├── misc/
│       ├── custom_engine/
│       └── config/                  # 原始生成的 cfg_*.ts，仅供参考
│
├── data/                            # 配置与表数据（运行时可改）
│   ├── config.json                  # 主页、玩法、技能、金币等参数
│   └── tables/
│       ├── cfg_level.json
│       ├── cfg_icon.json
│       ├── cfg_passReward.json
│       ├── CfgLoginReward.json
│       ├── CfgLuckySpin.json
│       └── CfgCombo.json
│
├── assets/                          # Cocos Web 资源包
│   ├── internal/
│   ├── main/                        # 不再存放业务 bundle 副本
│   ├── game/
│   ├── ui/
│   ├── icon/
│   ├── audio/
│   └── resources/
│       └── （每个包含 config.json、index.js、native/、import/）
│
├── tools/
│   ├── check.cjs                    # 结构与完整性校验
│   └── assemble-game.cjs            # 从 game/modules 重新生成 game/bundle.js
│
└── docs/
    ├── requirements.md              # 本文档
    ├── architecture.md              # 启动链路、模块系统、资源与数据流
    ├── code-map.md                  # TS ↔ JS ↔ UUID ↔ 资源包映射
    ├── editing.md                   # 数据、代码、资源的修改方法与约束
    └── validation.md                # 人工验收记录与已知问题
```

### 7.1 目录职责边界

- `engine/` 只放引擎和 SystemJS/Babel 辅助运行时，不放业务代码。
- `game/` 只放业务代码、业务 bundle、模块清单和启动适配，不放图片/音频/关卡 JSON。
- `data/` 是表数据的唯一运行时来源；`game/modules/cfg_*.js` 只能作为读取适配层，不得重复内嵌整份表数据。
- `assets/` 只放 Cocos 资源包及资源元数据；不手改 `import/` 与 `native/` 中的二进制/序列化内容。
- `tools/` 只放可重复执行的校验和组装脚本，不参与页面运行。
- `docs/` 放人类可读文档；`game/modules.json` 放机器可读索引。

## 8. 启动链路

### 8.1 正常启动顺序

1. 浏览器请求 `index.html`。
2. 依次加载：
   - `engine/polyfills.bundle.js`
   - `engine/system.bundle.js`
   - `engine/import-map.json`（`cc` → `./cc.js`）
3. 加载 `boot.js`。
4. `boot.js` 以相对路径请求 `data/config.json`，校验 `schemaVersion`，再按 `config.tables` 逐个加载 `data/tables/<name>.json`。
5. `boot.js` 把配置与表数据挂到全局约定对象（沿用现有可编辑包的契约）：
   - `globalThis.WebGameConfig`
   - `globalThis.WebGameTables`
6. `boot.js` 通过 SystemJS 导入 `./game/main.js`。
7. `game/main.js` 加载 `./application.js` 和 `cc`，创建 `Application`，调用 `init(engine)` 与 `start()`。
8. `application.js` 使用 `game/settings.json` 作为设置路径；`settings.json` 的 `scriptPackages` 按“先辅助运行时、后业务包”的顺序加载 `../engine/chunks/bundle.js` 与 `../game/bundle.js`。
9. 引擎加载 `assets/` 下声明的资源包，启动 `main.scene`，进入游戏主页。

### 8.2 启动失败处理

- 任一 `data/` 文件加载失败时，`boot.js` 必须在页面上显示中文错误提示，包含失败 URL 和 HTTP 状态，不能只留白屏。
- `game/main.js`、`game/bundle.js` 或引擎加载失败时，保留控制台可定位的错误，并由 `boot.js` 的兜底逻辑显示提示。
- 错误提示不得覆盖或污染游戏 Canvas 的正常布局；启动成功后移除。

### 8.3 路径约束

- 所有运行时路径必须是相对路径，禁止 `file://`、绝对文件路径和硬编码的 localhost 端口。
- 工程必须支持从站点根目录运行；同时尽量支持部署在子目录（如 `/games/hgxcds/`），不得依赖固定的 `/` 根路径。
- `index.html` 不内联业务逻辑；启动逻辑集中在 `boot.js`。
- `boot.js` 不读取 `cocos-source.json`，该文件只供 `tools/` 使用。

## 9. 可读性与源码保真要求

这是本次迁移的核心要求，优先级高于“目录看起来像参考工程”。

### 9.1 权威源码与运行时编辑入口

- `game/source/` 必须包含原始 `code/assets/scripts/` 下的业务 TypeScript，保留原文件名、目录层级、类名、方法名、属性名、装饰器和中文注释。
- `game/source/` 是模型训练、语义检索和二次创作阅读的语义权威。
- 95 个运行模块中，92 个对应原始 TS；`WebLayout` 是 Web 适配模块，`debug-view-runtime-control` 和虚拟 `main` 属于运行时/构建辅助。后三者需要在 `modules.json` 中标记 `generated` 或在 `notes` 说明来源，不强行映射到不存在的 TS 文件。
- 本轮运行时的可编辑入口是 `game/modules/*.js`（可读、非压缩）；`tools/assemble-game.cjs` 只把它们拼接成 `game/bundle.js`，不编译 TypeScript。
- TS 改动要进入运行时，需要后续增加 TS → modules 的编译工具，或在 `game/modules/` 中手工同步；本轮必须接受“TS 是语义参考、JS modules 是运行时编辑入口”的双轨关系，并由 `docs/code-map.md` 降低漂移风险。
- `game/source/config/` 中的 `cfg_*.ts` 属于工作簿导出产物，保留作参考；运行时表数据以 `data/tables/*.json` 为准。
- 不把 `.meta` 文件放进 `game/source/`；组件 UUID 和 Prefab 引用记录在 `docs/code-map.md` 与 `game/modules.json` 中。

### 9.2 运行时 JS 底线

`game/modules/*.js` 和 `game/bundle.js` 必须满足：

- **非压缩**：不得使用 `web-mobile` 的压缩 bundle，不得出现 `.min.js`、单行超长代码、无换行打包。
- **非混淆**：保留类名、导出名、`ccclass` 名称、序列化属性名、模块 ID 和 `_RF.push` 组件 UUID；不得改写这些标识。
- **可追溯**：`game/bundle.js` 附带 `game/bundle.js.map`；每个模块尽量附带模块级 source map。
- **单一来源**：`game/bundle.js` 由 `game/modules/*.js` 生成，不得手工维护第二份业务代码。
- **可重建**：执行 `node tools/assemble-game.cjs` 后，`game/bundle.js` 应与提交版本一致（内容哈希可验证）。

说明：Cocos 固定运行时 `engine/cc.js` 是第三方发布文件，允许保留上游压缩格式；可读性要求针对 `game/` 业务代码，不要求重写引擎。

### 9.3 可读性分级

| 级别 | 要求 | 本轮验收 |
| --- | --- | --- |
| L1 源码级 | `game/source/` 完整保留原始 TS，命名和注释可读 | 必须通过 |
| L2 运行级 | `game/modules/`、`game/bundle.js` 非压缩，公开名称保留，带 source map | 必须通过 |
| L3 逐行级 | 生成 JS 的局部变量也尽量保持有意义命名，接近手写风格 | 目标；未达成模块记入缺口清单，不得压缩/混淆 |

### 9.4 缺口记录

如果某个模块暂时只能使用 Babel 编译产物（例如局部变量已被压缩成单字母），必须：

- 在 `game/modules.json` 中标记 `"readability": "compiled"`；
- 在 `docs/code-map.md` 中列出该模块、对应 TS 文件、无法自动重建的原因；
- 保证该模块仍然非压缩、公开名称保留、可被 source map 追溯到 TS；
- 不以“现有可编辑包能跑”为理由跳过记录。

最终目标是缺口清单为空；本轮至少做到“无压缩、无混淆、有 TS 权威源码、有映射”。

### 9.5 数据与文本格式

- JSON 使用 UTF-8、无 BOM、2 空格缩进、稳定的键顺序；结尾保留换行。
- TypeScript 使用 4 空格缩进；保持与原始文件一致的引号和分号风格。
- 生成文件在文件头注明生成器和“不要手改”，例如：
  `// Generated by tools/assemble-game.cjs. Edit game/modules or game/source instead.`
- 不引入 emoji 或与业务无关的装饰性内容。

### 9.6 代码风格与测试边界

**不以测试为导向编写代码。** 代码首先服务于真实行为、可读性和二次创作，而不是为了让测试通过。

具体要求：

- 不采用测试先行（TDD）来设计模块结构；不为了测试引入接口层、依赖注入、mock 容器、测试专用分支或额外抽象。
- 不追求测试覆盖率； `tools/check.cjs` 的定位是结构、完整性、路径和可读性护栏，不是驱动代码设计的测试套件。
- 允许为真实系统边界写少量校验（例如数据文件能否解析、资源引用是否存在、bundle 是否可重建），但不为内部实现细节搭建测试脚手架。
- 不把“校验脚本通过”当作功能完成标准；功能是否完成，以 `http-server` 启动后浏览器中的实际表现为准。
- 代码保持直白：优先使用清晰的类、函数和数据流，避免为假设中的未来需求增加抽象层。
- 迁移阶段以行为等价为先；除可读性整理和启动适配外，不顺手重构业务逻辑。

### 9.7 分步落地与浏览器验证

- 落地过程拆成可独立验证的步骤，具体见 `docs/implementation-plan.md`。
- **每一步完成后必须做两件事**：
  1. 更新 `docs/implementation-plan.md`：状态、改动文件、执行命令、浏览器验证结果、Console/Network 摘要、遗留问题。
  2. 启动 `http-server`，用浏览器实际打开当前工程，验证该步骤的预期状态；记录 URL、结果和截图（截图放 `docs/evidence/step-XX/`，体积过大时只保留关键截图）。
- 每一步结束时工程必须处于可运行状态；不允许把“下一步再修”的断裂状态留给后续步骤。
- 上一步浏览器验证未通过时，不进入下一步；先修复或回退到上一个可用状态。
- 浏览器验证除了看画面，还要检查 Console 错误和 Network 404/模块加载失败；早期步骤即使还没有完整玩法和 UI，也要验证该步骤应出现的引擎/页面状态。
- 任务文档的每一步记录模板：

```text
### Step N：<名称>
- 状态：待开始 / 进行中 / 已完成 / 阻塞
- 开始/完成时间：
- 改动文件：
- 执行命令：
- 浏览器验证：
  - URL：
  - 预期：
  - 实际：
  - Console：
  - Network 404：
  - 截图：
- 遗留问题：
- 下一步：
```

## 10. 功能与兼容性要求

### 10.1 玩法等价

迁移后必须与当前 `web-mobile` 的行为一致，至少覆盖：

- 启动加载、资源预加载、主页展示。
- 关卡开始、货架/商品生成、拖拽/点击消除、连击。
- 冰冻、双倍、复活等现有技能与道具。
- 暂停/恢复、超时提醒、失败/胜利结算。
- 登录奖励、幸运轮盘、过关奖励、金币变化。
- 设置面板、音量/音效开关（若现有版本存在）。
- 返回主页、重新开始、存档读取。

不要求逐帧一致，但不得改变数值、关卡、奖励、UI 结构和存档语义。

### 10.2 分辨率与适配

- 设计分辨率保持 720 × 1600 竖屏。
- `exactFitScreen: true`，保持现有 `settings.json` 的屏幕策略。
- 桌面浏览器窗口缩放、手机竖屏、横屏短屏下不得出现 Canvas 被裁切到无法操作的情况；沿用现有 `WebLayout` 适配逻辑。

### 10.3 存档

- 唯一存档键为 `hgxcds_game_v1`。
- 不读取旧浏览器存储键，不增加迁移逻辑。
- 存档绑定站点 origin；更换端口或域名会得到独立存档，这是预期行为。
- 不实现云存档、账号同步或跨设备迁移。

### 10.4 网络与外部依赖

- 运行时不请求任何外部 API、CDN、统计或广告服务。
- 所有资源、脚本、数据均从工程目录内相对加载。
- 不引入登录、支付、排行榜、分享 SDK。
- 允许浏览器自身行为（如音频策略、隐私模式限制），但不得因此白屏或崩溃。

### 10.5 浏览器与服务器

- 目标浏览器：现代 Chrome、Edge、Safari（桌面与移动端）。
- 不使用 IE 专属特性，不依赖 `file://`。
- 首选 `http-server`；`package.json` 提供 `npm start` 包装，同时保证全局安装的 `http-server` 直接执行也能运行。
- 服务器必须正确返回 `.js`、`.json`、`.wasm`（如有）、图片和音频的 MIME；`http-server` 默认满足。
- 开发时使用 `-c-1` 关闭缓存；生产缓存策略不在本轮范围。

## 11. 数据与资源要求

### 11.1 数据

- `data/config.json` 保留现有 `schemaVersion`、`home`、`gameplay`、`skillIcons`、`tables` 等字段。
- `config.tables` 中列出的每个表必须存在于 `data/tables/`，名称与内容一致。
- 表数据不得在 JS 中再复制一份；`cfg_*.js` 模块只做读取和类型适配。
- 数据键名、枚举值、奖励字段保持与现有版本一致，避免存档和逻辑错位。
- 修改数据后刷新即可生效，不需要重新构建 bundle。

### 11.2 资源包

- 保留 7 个资源包：`internal`、`main`、`game`、`ui`、`icon`、`audio`、`resources`。
- 每个包保留 `config.json`、`index.js`、`native/`、`import/` 的现有结构。
- 不改写 `config.json` 中的 UUID、`packs`、`versions`、`redirect` 等序列化字段，除非有明确工具和回归验证。
- `assets/main/index.js` 不再存放 650 KB 业务 bundle 副本；业务 bundle 唯一位置为 `game/bundle.js`。
  - `game/settings.json` 的 `scripting.scriptPackages` 加载 `../engine/chunks/bundle.js` 和 `../game/bundle.js`。
  - 实测 Cocos 运行时仍会请求 `assets/main/index.js`；因此保留一个极小的兼容占位脚本，它不注册业务模块、不复制 bundle。业务模块由 `game/bundle.js` 的外层 SystemJS 包装统一注册。
  - `assets/main/config.json` 的 `hasPreloadScript` 保持 `true` 以匹配占位脚本；兼容脚本在 `scriptPackages` 之后加载，不影响组件注册。
- 图片、音频、图集、Prefab 的二进制/序列化内容不手工编辑；结构性修改回到原始 Creator 工程完成后再导出。

## 12. `cocos-source.json` 规范

### 12.1 定位

`cocos-source.json` / `cocos-source.example.json` 采用“**本地路径映射**”语义：

- 真实文件 `cocos-source.json` 只存在于开发者本机，记录 Creator、原始工程、引擎源码和参考构建的位置。
- `cocos-source.json` 必须加入 `.gitignore`，不得包含在交付包或公开仓库中。
- `cocos-source.example.json` 提交到工程，使用占位路径，供其他开发者复制填写。
- 运行时（`index.html`、`boot.js`、`game/`、`engine/`）**不读取** `cocos-source.json`；缺少该文件不影响 `http-server` 启动。
- `tools/check.cjs` 如果发现该文件，校验其 schema 和路径是否存在；缺失时只提示，不失败。

### 12.2 建议 schema

```json
{
  "schemaVersion": 1,
  "creator": {
    "version": "3.8.3",
    "appPath": "/Applications/Cocos/Creator/3.8.3/CocosCreator.app"
  },
  "sourceProject": {
    "path": "/absolute/path/to/货柜消除大师/code"
  },
  "engine": {
    "version": "3.8.3",
    "sourcePath": "/absolute/path/to/cocos-engine"
  },
  "referenceBuilds": {
    "webMobile": "/absolute/path/to/code/build/web-mobile",
    "webEditableSource": "/absolute/path/to/code/build/web-editable-source-20261021"
  }
}
```

### 12.3 使用方式

- `tools/check.cjs` 可用它核对引擎版本、原始 TS 数量和参考构建是否存在。
- 后续如需“从原始工程重新同步源码”，可增加 `tools/sync-source.cjs`，但本轮不实现。
- 任何工具都不得把绝对路径写入 `game/`、`data/` 或 `assets/` 的运行文件。

## 13. 工具与校验

### 13.1 `package.json` 脚本

```json
{
  "scripts": {
    "start": "http-server . -p 8080 -c-1",
    "check": "node tools/check.cjs",
    "assemble": "node tools/assemble-game.cjs",
    "test": "node tools/check.cjs"
  },
  "devDependencies": {
    "http-server": "14.1.1"
  }
}
```

- 版本号在实现时锁定并写入 `package-lock.json`。
- 运行游戏不需要 `npm install`，只要机器上有全局 `http-server`；`npm start` 只是便捷入口。
- `tools/*.cjs` 只使用 Node 内置模块，不依赖 `node_modules`，确保离线可校验。

### 13.2 `tools/check.cjs`

必须检查：

1. 必需文件存在：`index.html`、`boot.js`、`game/main.js`、`game/application.js`、`game/bundle.js`、`game/settings.json`、`engine/cc.js`、`engine/import-map.json`、`data/config.json`、`package.json`。
2. `data/config.json` 的 `tables` 列表完整，每个表文件存在且是合法 JSON。
3. `game/modules.json` 中每个条目：
   - `id` 唯一；
   - `file` 存在且位于 `game/modules/`；
   - 文件内 System.register 的模块 ID 与 `id` 一致；
   - `game/bundle.js` 包含该模块且只包含一次；
   - 依赖可解析（`cc`、`cc/env`、`./...`、辅助模块）。
4. `game/bundle.js` 由 `modules.json` + 模块内容按顺序生成；重新执行组装后哈希一致。
5. `engine/import-map.json` 的 `cc` 映射指向存在的文件。
6. `game/settings.json` 的 `projectBundles` 与 `assets/<bundle>/config.json` 一一对应；每个 bundle 的 `config.json` 合法。
7. `assets/*/config.json` 中引用的 `native/`、`import/` 文件存在；`packs` 索引不越界。
8. 存档键检查：业务代码只使用 `hgxcds_game_v1`，不出现旧键读取。
9. 路径检查：运行文件不包含绝对文件路径、`file://`、`localhost` 硬编码；`index.html` 使用相对路径。
10. 可读性检查（启发式）：
    - 不允许 `game/` 下存在 `.min.js`；
    - `game/modules/*.js` 单行最大长度不超过 1000 字符，平均行长度不超过 160 字符；
    - `game/bundle.js` 必须有 `bundle.js.map`；
    - `game/source/` 至少包含原始业务 TS 的主要目录和文件；
    - 输出可读性缺口清单。
11. `cocos-source.json` 如果存在，校验 schema 与路径；不存在则输出提示。
12. 输出汇总：通过/失败项、缺失文件、模块数量、资源包数量、可读性缺口数量；退出码 0/1。

### 13.3 `tools/assemble-game.cjs`

- 读取 `game/modules.json`，按顺序拼接 `game/modules/*.js` 和 `game/prerequisite.js`。
- 生成 `game/bundle.js` 和逐行 source map；文件头写明生成器。
- 不压缩、不混淆、不改变模块 ID 和组件 UUID。
- 支持 `--check` 模式：只验证生成结果是否与现有 `game/bundle.js` 一致，不写文件。
- 不复制 `assets/`，不调用 Creator，不执行网络请求。

### 13.4 人工验收清单（本轮）

因为本轮不含浏览器自动化，至少人工完成：

1. 在工程根目录执行 `http-server . -p 8080 -c-1`。
2. 打开 `http://127.0.0.1:8080/`，确认主页出现。
3. 打开开发者工具 Console，确认无资源 404、模块解析失败、启动异常。
4. 开始一关，完成消除、技能、暂停/恢复、胜利或超时、结算、返回主页。
5. 刷新页面，确认金币/进度/关卡等存档仍在。
6. 临时移走 `cocos-source.json`，刷新，确认游戏仍能启动。
7. 停止服务，确认运行不依赖 `code/`、Creator 或任何外部路径。

## 14. 文档交付

| 文档 | 内容 |
| --- | --- |
| `README.md` | 快速启动、目录说明、编辑入口、常见问题 |
| `docs/requirements.md` | 本文档：目标、范围、目录、验收标准 |
| `docs/architecture.md` | 启动链路、模块系统、资源包、数据流、存档 |
| `docs/code-map.md` | TS ↔ JS ↔ 模块 ID ↔ 组件 UUID ↔ 资源包映射；可读性缺口 |
| `docs/editing.md` | 修改数据、代码、资源的步骤与约束；禁止事项 |
| `docs/implementation-plan.md` | 分步落地计划、任务状态、每步改动与浏览器验证记录 |
| `docs/validation.md` | 环境、人工验收步骤、结果、已知警告和限制 |

文档要求：

- 中文为主，命令和路径使用代码块。
- 不写与代码现状不符的“已完成”结论；验证结果必须可复现。
- 明确哪些文件是生成的、哪些是手改的、哪些是只读的。

## 15. 验收标准

| 编号 | 验收项 | 通过条件 |
| --- | --- | --- |
| A1 | 目录规范 | 具备本文第 7 节列出的必需目录和文件 |
| A2 | 直接运行 | 根目录 `http-server` 启动后可进入主页，无需构建 |
| A3 | 玩法完整 | 第 13.4 节人工流程全部通过 |
| A4 | 控制台 | 无资源 404、模块解析失败、未捕获异常 |
| A5 | 存档 | `hgxcds_game_v1` 在刷新后保留；无旧键读取 |
| A6 | 源码可读 | `game/source/` 完整；`game/modules/`、`game/bundle.js` 非压缩且公开名称保留 |
| A7 | 代码映射 | `docs/code-map.md` 覆盖全部业务模块，UUID 与资源包可查 |
| A8 | 数据可改 | 修改 `data/tables/*.json` 后刷新生效，无需重建 bundle |
| A9 | 资源完整 | `check.cjs` 的资源包/引用检查全部通过 |
| A10 | 工具 | `node tools/check.cjs` 退出码 0；`assemble --check` 通过 |
| A11 | 本地配置 | 缺少 `cocos-source.json` 不影响运行；example 文件可复制使用 |
| A12 | 对外依赖 | 运行时不请求外部 API/CDN，不依赖 Creator/Node |
| A13 | 引擎锁定 | `engine/` 为 Cocos 3.8.3，版本和来源记录在文档/`runtime-lock.json` |
| A14 | 路径健壮 | 不依赖绝对路径和固定端口；`index.html` 使用相对路径 |
| A15 | 分步验证 | 每一步都有 `implementation-plan.md` 更新记录和真实浏览器验证结果；未验证不进入下一步 |

## 16. 约束、风险与待确认项

### 16.1 已知约束

- Cocos 的 Prefab、场景、图集和 `import/` 数据是序列化格式，不适合直接手改；结构性修改应回到原始 Creator 工程。
- 组件注册 UUID、`_RF.push` 标识、`ccclass` 名称和序列化字段名不能随意改，否则场景/Prefab 引用会断。
- 引擎 `cc.js` 是第三方固定运行时，允许压缩；业务代码不适用该例外。
- 存档绑定 origin，换端口/域名会得到新存档。
- 浏览器音频自动播放策略可能要求用户先交互；这属于浏览器行为，不是迁移缺陷。
- 原始 TS 使用 Creator 装饰器；脱离 Creator 的“可读 JS 生成”需要额外处理组件注册，不能简单用普通 `tsc` 直接替换。

### 16.2 主要风险

| 风险 | 影响 | 缓解 |
| --- | --- | --- |
| 现有可编辑模块局部变量被压缩 | 可读性不达标 | 以原始 TS 为权威源码；JS 非压缩、保留公开名称、加 source map；记录缺口 |
| 业务 bundle 迁移到 `game/` 后 Cocos 主包加载顺序变化 | 启动黑屏/组件未注册 | 先用 `scriptPackages` 方案冒烟；必要时保留 `assets/main/index.js` 一行转接 |
| 资源 UUID/路径重排导致 404 | 场景/图片/音频缺失 | 保持 `assets/` 结构与 `settings.json` 的 bundle 名不变；`check.cjs` 校验引用 |
| 绝对路径混入运行文件 | 换机器无法运行 | 校验脚本扫描；`cocos-source.json` 仅本地、运行时禁用 |
| 数据与 `cfg_*.ts` 重复 | 改一处不生效 | `data/` 为唯一运行时来源；`cfg_*.ts` 标记参考；校验表清单 |
| TS 与运行时 JS 双轨漂移 | TS 改动未进入运行时，阅读与行为不一致 | `docs/code-map.md` + `modules.json` 建立映射；校验模块数量/清单；后续增加 TS → modules 编译工具 |
| 本轮不做自动化回归 | 人工遗漏 | 按第 13.4 节逐项验收；后续补 Playwright |

### 16.3 已决策项与后续项

1. **Cocos 业务包加载方式**：已采用 `settings.json` 的 `scriptPackages` 加载 `game/bundle.js`；bundle 加 SystemJS 外层包装；`assets/main/index.js` 保留为极小兼容占位脚本，不承载业务代码。已用真实浏览器验证。
2. **`game/source` 是否包含 `config/cfg_*.ts`**：保留作参考；运行时数据以 `data/tables/` 为准。
3. **L3 逐行可读**：L1/L2 已验证；L3 的 Babel 短局部变量缺口已记录在 `docs/code-map.md` 和 `docs/validation.md`，作为后续改善项，不阻塞本轮验收。
4. **`http-server` 端口**：默认 8080；可用 `http-server . -p 8081` 或 `npm start -- -p 8081`。
5. **TS → modules 编译工具**：本轮未实现；运行时编辑入口仍是 `game/modules/*.js`，TS 修改需手工同步或后续补工具。
6. **缺失 `cocos-source.json`**：已验证不影响运行；`tools/check.cjs` 仅输出 warning。

## 17. 里程碑

| 阶段 | 内容 | 完成标志 |
| --- | --- | --- |
| M0 | 需求确认（本文档） | 需求评审通过 |
| M1 | 工程骨架 | `index.html`、`boot.js`、`engine/`、`package.json` 就位，能启动到空白/主页 |
| M2 | 数据与资源 | `data/`、`assets/` 迁移完成，`check.cjs` 资源检查通过 |
| M3 | 业务代码 | `game/source`、`game/modules`、`game/bundle.js` 迁移/生成完成，游戏可玩 |
| M4 | 可读性与映射 | `docs/code-map.md` 覆盖全部模块，非压缩校验通过 |
| M5 | 验收 | 第 13.4 节人工流程通过，`docs/validation.md` 记录结果 |
| M6（后续） | 自动化与发布 | 浏览器回归、发布目录、manifest、部署脚本 |

> 本轮已完成 M0–M5；M6 作为后续可选工作。最终验证见 `docs/validation.md`。

## 附录 A：源文件映射

| 源位置 | 目标位置 | 处理方式 |
| --- | --- | --- |
| `code/build/web-editable-source-20261021/index.html` | `index.html` | 改为引用 `engine/` 与 `boot.js` |
| `.../application.js` | `game/application.js` | 修改 `settingsPath` 为 `game/settings.json` |
| `.../index.js` | `game/main.js` | 保持 SystemJS 入口逻辑 |
| `.../business/bootstrap.js` | `boot.js` | 改为加载 `data/`，再导入 `game/main.js` |
| `.../business/config.json` | `data/config.json` | 原样迁移，格式化 |
| `.../business/data/*.json` | `data/tables/*.json` | 原样迁移，格式化 |
| `.../business/modules.json` | `game/modules.json` | 扩展 source/UUID/readability 元数据 |
| `.../business/modules/*.js` | `game/modules/*.js` | 迁移并做可读性处理 |
| `.../business/prerequisite.js` | `game/prerequisite.js` | 原样迁移 |
| `.../src/settings.json` | `game/settings.json` | 调整 `scriptPackages` 路径 |
| `.../src/system.bundle.js` | `engine/system.bundle.js` | 原样迁移 |
| `.../src/polyfills.bundle.js` | `engine/polyfills.bundle.js` | 原样迁移 |
| `.../src/chunks/bundle.js` | `engine/chunks/bundle.js` | 原样迁移 |
| `.../src/import-map.json` | `engine/import-map.json` | 改为 `"cc": "./cc.js"` |
| `.../cocos-js/*` | `engine/*` | 迁移 `cc.js` 与 meshopt 文件 |
| `.../assets/*` | `assets/*` | 保留 Bundle 结构与 UUID |
| `.../assets/main/index.js` | `game/bundle.js` | 作为生成基线，后续由 assemble 重建 |
| `code/assets/scripts/**/*.ts` | `game/source/**/*.ts` | 复制原始 TS，排除 `.meta` |
| `code/build/web-mobile/*` | 不直接进入 `game/` | 仅用于行为对照；压缩产物禁止作为业务源码 |

## 附录 B：`cocos-source.example.json` 草案

```json
{
  "schemaVersion": 1,
  "creator": {
    "version": "3.8.3",
    "appPath": "/Applications/Cocos/Creator/3.8.3/CocosCreator.app"
  },
  "sourceProject": {
    "path": "/absolute/path/to/货柜消除大师/code"
  },
  "engine": {
    "version": "3.8.3",
    "sourcePath": "/absolute/path/to/cocos-engine"
  },
  "referenceBuilds": {
    "webMobile": "/absolute/path/to/code/build/web-mobile",
    "webEditableSource": "/absolute/path/to/code/build/web-editable-source-20261021"
  }
}
```

## 附录 C：`game/modules.json` 条目草案

```json
{
  "id": "chunks:///_virtual/Goods.ts",
  "file": "game/modules/Goods.js",
  "source": "game/source/game/Goods.ts",
  "className": "Goods",
  "componentUuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "bundle": "game",
  "readability": "source",
  "notes": ""
}
```

- `readability` 取值：`source`（可由 TS 直接生成/手写）、`compiled`（保留编译产物，已记录缺口）、`generated`（数据/配置生成）。
- 额外字段不参与 bundle 拼接顺序；顺序仍以数组顺序为准。
