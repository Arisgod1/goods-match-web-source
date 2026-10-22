# 货柜消除大师 · Web Source 落地计划与任务文档

| 项目 | 内容 |
| --- | --- |
| 文档版本 | v0.1 |
| 日期 | 2026-10-22 |
| 状态 | Step 0–8 完成；交付完成 |
| 关联文档 | [需求文档](requirements.md) |
| 目标目录 | `/Users/arisone/projects/游戏工场/货柜消除大师-web-source` |
| 输入工程 | `/Users/arisone/projects/游戏工场/货柜消除大师/code` |

本文档是落地过程的**唯一任务进度台账**。每一步开始、完成或阻塞时都必须更新对应记录；未完成浏览器验证的步骤不得标记为“已完成”，也不得进入下一步。

## 1. 执行原则

1. **每一步都保持可运行**：不把工程留在半迁移、启动失败或资源断链的状态。上一步验证通过后才开始下一步。
2. **每步结束必须更新本文档**：填写状态、改动文件、执行命令、浏览器验证结果、Console/Network 摘要、遗留问题和下一步。
3. **每步结束必须真实打开浏览器验证**：用 `http-server` 启动工程，实际访问页面；不能只看脚本输出或静态文件结构。
4. **不以测试为导向写代码**：实现按真实行为和可读性组织，不为测试引入额外接口、mock、依赖注入或测试专用分支；`tools/check.cjs` 只作为结构和完整性护栏。
5. **行为等价优先**：迁移阶段除路径适配、启动适配和可读性整理外，不改玩法、数值、UI 结构和存档语义。
6. **小步提交/可回退**：建议在 Step 1 初始化本地 Git（不推送），每步验证通过后提交；若不使用 Git，则在每步前保留上一版目录副本。
7. **保护输入工程**：`code/` 只读使用，不修改、不清理、不覆盖其构建产物。

## 2. 环境与常用命令

```sh
# 启动（推荐使用新端口避免缓存）
http-server . -p 8080 -c-1

# 或通过 package.json
npm start

# 结构与完整性校验（Step 7 后可用）
node tools/check.cjs

# 重新生成 game/bundle.js（Step 7 后可用）
node tools/assemble-game.cjs

# 只检查 bundle 是否与模块一致
node tools/assemble-game.cjs --check
```

浏览器验证统一检查：

- 页面是否到达该步骤预期的状态（引擎启动、主页、关卡等）。
- Console 是否有未捕获异常、模块解析失败、资源 404。
- Network 是否有失败请求，路径是否来自新目录而不是旧目录。
- 关键画面截图保存到 `docs/evidence/step-XX/`，并在本文档记录路径；体积过大时只保留关键截图。

## 3. 步骤总览

| 步骤 | 名称 | 目标 | 浏览器验证重点 | 状态 |
| --- | --- | --- | --- | --- |
| Step 0 | 需求与计划基线 | 明确目标、目录、验收与流程 | 无运行工程，N/A | 已完成 |
| Step 1 | 导入可运行基线 | 把可编辑 Web 包作为安全基线放进目标目录 | 主页可开、可玩一关、无 404 | 已完成 |
| Step 2 | 提取 engine/ | 分离 Cocos 运行时，修正入口与 import map | 引擎从 `engine/` 加载，玩法不变 | 已完成 |
| Step 3 | 提取 data/ 与 boot.js | 分离配置/表数据，建立独立启动器 | 数据从 `data/` 加载，玩法不变 | 已完成 |
| Step 4A | 提取 game/ 入口 | 迁移 `main.js`、`application.js`、`settings.json` | 入口从 `game/` 加载，玩法不变 | 已完成 |
| Step 4B | 提取 game/ 业务包 | 迁移 modules、modules.json、bundle | 业务包从 `game/bundle.js` 加载，玩法不变 | 已完成 |
| Step 5 | 导入原始 TS 与映射 | `game/source/`、modules 元数据、code-map 骨架 | 运行时不变；不请求 TS 源文件 | 已完成 |
| Step 6 | 可读性整理 | 非压缩、公开名称、source map、缺口记录 | 业务包可读且玩法不变 | 已完成 |
| Step 7 | 工具与工程脚本 | `check.cjs`、`assemble-game.cjs`、npm 脚本 | 校验通过，页面仍可玩 | 已完成 |
| Step 8 | 文档收口与完整验收 | 架构/编辑/验证文档，完整流程验收 | 端到端流程、存档、缺失 cocos-source | 已完成 |

## 4. 步骤详情

### Step 0：需求与计划基线

**目标**：把目标、目录规范、可读性标准、验收标准和执行方式固化成文档。

**已完成**：

- 编写 `docs/requirements.md`。
- 编写本文件 `docs/implementation-plan.md`。
- 明确三项口径：`game/` 可读源码 + `engine/` 固定运行时；`cocos-source.json` 本地路径映射；本轮包含校验脚本，不含浏览器自动化和发布打包。
- 明确两条工作原则：不以测试为导向写代码；每步更新任务文档并做真实浏览器验证。

**浏览器验证**：N/A（当前只有文档，没有运行工程）。

**退出条件**：用户评审通过需求与计划。

---

### Step 1：导入可运行基线

**目标**：先把 `code/build/web-editable-source-20261021` 的运行时完整复制到目标目录，得到一个和当前 Web 版行为一致的可用基线。后续所有目录重构都在“可运行”前提下进行。

**输入**：

- `code/build/web-editable-source-20261021/`

**建议复制的运行时条目**：

```text
index.html
index.js
application.js
style.css
favicon.svg
src/
cocos-js/
assets/
business/
```

**不要复制**：

- `node_modules/`、`tests/`、`tools/`、`docs/`、`README.md`、`AGENTS.md`
- `source-manifest.json`、`package.json`、`package-lock.json`（本工程另行建立）
- 任何 `.DS_Store`

**新增文件**：

- `package.json`：先放 `http-server` 和 `start` 脚本。
- `.gitignore`：`node_modules/`、`cocos-source.json`、`.DS_Store`、日志文件。
- `README.md`：先写“临时基线，目录重构中”的说明，Step 8 再完善。
- `docs/evidence/step-01/`：保存基线截图。

**关键动作**：

1. 复制运行时条目到目标根目录，保持原相对路径不变。
2. 执行 `http-server . -p 8080 -c-1`。
3. 用浏览器打开首页，完成一次“主页 → 开始关卡 → 一次消除”的冒烟。
4. 记录 Console 和 Network；保存截图。
5. 更新本文档 Step 1 记录。

**浏览器验证**：

- 预期：游戏进入主页；可以开始一关并完成至少一次消除；无资源 404、无模块解析失败。
- 如果基线本身不可运行，先解决基线问题，不进入 Step 2。

**退出条件**：

- 基线可玩。
- 本文档 Step 1 记录完整。
- 已保存至少一张主页或关卡截图。

---

### Step 2：提取 `engine/`

**目标**：把 Cocos 运行时和 SystemJS/Polyfills/Babel 辅助包从临时目录移动到 `engine/`，并修正入口引用。

**改动**：

- `cocos-js/` → `engine/`
- `src/system.bundle.js` → `engine/system.bundle.js`
- `src/polyfills.bundle.js` → `engine/polyfills.bundle.js`
- `src/import-map.json` → `engine/import-map.json`
- `src/chunks/` → `engine/chunks/`
- `src/settings.json` 暂时保留在 `src/`，只更新其中的 `scriptPackages` 路径。
- `index.html` 改为引用 `engine/polyfills.bundle.js`、`engine/system.bundle.js`、`engine/import-map.json`。
- `engine/import-map.json` 的 `cc` 映射改为 `"./cc.js"`。

**暂不移动**：

- `business/`、`index.js`、`application.js`、`assets/`、`src/settings.json` 保持原位，避免一次改太多。

**浏览器验证**：

- 预期：游戏行为和 Step 1 一致。
- Network 中引擎文件从 `engine/` 加载，不再请求 `cocos-js/` 或旧的 `src/system.bundle.js`。
- Console 无新增错误。

**退出条件**：

- 游戏可玩，引擎路径全部切换到 `engine/`。
- 本文档 Step 2 记录完整。

---

### Step 3：提取 `data/` 与 `boot.js`

**目标**：把配置和表数据从 `business/` 移到 `data/`，用独立 `boot.js` 负责加载数据并启动游戏。

**改动**：

- `business/config.json` → `data/config.json`
- `business/data/*.json` → `data/tables/*.json`
- 新建 `boot.js`，以 `business/bootstrap.js` 为参考：
  - 读取 `data/config.json`；
  - 按 `config.tables` 加载 `data/tables/<name>.json`；
  - 设置 `globalThis.WebGameConfig` 和 `globalThis.WebGameTables`；
  - 启动入口暂仍导入根目录 `./index.js`。
- `index.html` 改为加载 `boot.js`，不再直接加载 `business/bootstrap.js`。
- 暂时保留 `business/modules/`、`business/modules.json`、`business/prerequisite.js`、根目录 `index.js` 和 `application.js`。

**浏览器验证**：

- 预期：主页和关卡正常；Network 中配置/表数据来自 `data/`；Console 无新增错误。
- 修改一个明显的数值（例如主页设置按钮位置或某个奖励值），刷新后确认生效，再恢复；验证数据确实从 `data/` 读取。

**退出条件**：

- 数据路径完成切换，游戏可玩。
- 本文档 Step 3 记录完整。

---

### Step 4A：提取 `game/` 入口

**目标**：把游戏入口、Application 适配器和 settings 移到 `game/`，把 `boot.js` 的启动目标改为 `game/main.js`。

**改动**：

- 根目录 `index.js` → `game/main.js`
- 根目录 `application.js` → `game/application.js`
- `src/settings.json` → `game/settings.json`
- `boot.js` 改为 `System.import("./game/main.js")`
- `game/main.js` 改为导入 `./application.js`
- `game/application.js` 的 `settingsPath` 改为 `"game/settings.json"`
- `game/settings.json` 的 `scriptPackages` 暂保持指向 `../engine/chunks/bundle.js`；业务包仍由 `assets/main/index.js` 预加载。

**浏览器验证**：

- 预期：游戏行为不变；入口从 `game/main.js` 加载；`game/settings.json` 被请求。
- Console 无模块解析错误；Network 无旧 `index.js`/`application.js` 请求。

**退出条件**：

- 入口和设置完成迁移，游戏可玩。
- 本文档 Step 4A 记录完整。

---

### Step 4B：提取 `game/` 业务包

**目标**：把业务模块、模块清单和运行包统一放到 `game/`，并让 `game/bundle.js` 成为唯一业务运行包。

**改动**：

- `business/modules/*.js` → `game/modules/*.js`
- `business/modules.json` → `game/modules.json`
- `business/prerequisite.js` → `game/prerequisite.js`
- 生成 `game/bundle.js`（先以 `assets/main/index.js` 为基线，后续由 `assemble-game.cjs` 重建）
- 生成 `game/bundle.js.map`
- `game/settings.json` 的 `scriptPackages` 改为：
  - `"../engine/chunks/bundle.js"`
  - `"../game/bundle.js"`
- `assets/main/config.json` 的 `hasPreloadScript` 改为 `false`
- 删除或移走 `assets/main/index.js`。如果实测 Cocos 主包仍要求预加载脚本，则只保留一行生成的转接代码导入 `../../game/bundle.js`，不得复制业务代码。
- 更新 `game/modules.json` 中 `file` 路径为 `game/modules/...`。

**浏览器验证**：

- 预期：游戏行为不变；Network 中业务包只从 `game/bundle.js` 加载；`assets/main/index.js` 不再承载完整业务代码。
- 重点检查：组件脚本是否正常注册、Prefab 是否正常挂载、关卡是否能进入。
- 如果主包预加载脚本顺序有问题，记录现象并采用转接方案，仍以浏览器实测为准。

**已知问题复核**：

- Step 1 基线存在 12 次 Cocos Error 3804（`getComponent: Type must be non-nil`）。Step 4B 迁移后必须复查：如果仍存在，记录触发模块/节点并尝试定位；如果暂时无法修复，保留现场并在 Step 8 作为已知问题记录，不得直接忽略。

**退出条件**：

- 业务包唯一位置为 `game/bundle.js`。
- 游戏可玩，组件和资源无断链。
- 本文档 Step 4B 记录完整。

---

### Step 5：导入原始 TypeScript 与代码映射

**目标**：把原始 `code/assets/scripts/` 的 TypeScript 复制到 `game/source/`，建立 TS ↔ JS ↔ UUID 映射，满足模型训练和二次创作的可读性要求。

**改动**：

- 复制 `code/assets/scripts/**/*.ts` → `game/source/**/*.ts`，保留目录层级，排除 `.meta`。
- 扩展 `game/modules.json` 条目：
  - `id`
  - `file`
  - `source`（对应 TS 路径）
  - `className`
  - `componentUuid`（可从 `.meta`/现有构建映射整理）
  - `bundle`
  - `readability`（`source` / `compiled` / `generated`）
  - `notes`
- 创建 `docs/code-map.md` 骨架：先覆盖核心模块（Main、GameMgr、Goods、UI、Reward、Save 等），再逐步补全。
- `game/source/config/cfg_*.ts` 保留作参考；运行时数据仍以 `data/tables/` 为准。
- 95 个模块与 92 个 TS 的差异要显式处理：
  - `WebLayout`：Web 适配模块，`source` 置空或指向新增说明，标记 `generated`；
  - `debug-view-runtime-control`：运行时辅助，标记 `generated`；
  - 虚拟 `main`：`prerequisite.js` 的注册入口，标记 `generated`；
  - 其余 92 个模块建立 TS 映射。

**浏览器验证**：

- 预期：运行时行为不变；Network 不请求 `game/source/` 下的 TS 文件（源码不参与运行）。
- 检查 `game/source` 目录中原始 TS 数量和目录结构。

**退出条件**：

- `game/source/` 完整可用。
- `game/modules.json` 至少包含全部模块的 `id`/`file`/`source`/`readability`。
- `docs/code-map.md` 骨架建立。
- 本文档 Step 5 记录完整。

---

### Step 6：可读性整理

**目标**：把 `game/modules/` 和 `game/bundle.js` 整理到“非压缩、非混淆、可追溯”的基线，并记录暂时无法逐行还原的模块。

**改动**：

- 检查每个 `game/modules/*.js`：
  - 文件头加生成/来源说明；
  - 保留类名、导出名、`ccclass`、序列化字段、模块 ID、`_RF.push` UUID；
  - 禁止出现单行超长压缩代码；
  - 尽量把可还原的短局部变量改成有意义命名；无法还原的标记为 `compiled` 并写入缺口清单。
- 生成 `game/bundle.js` 和 `game/bundle.js.map`。
- 更新 `docs/code-map.md` 的缺口清单。
- 更新 `game/modules.json` 的 `readability` 字段。

**浏览器验证**：

- 预期：玩法与 Step 5 一致；业务包从 `game/bundle.js` 加载；无 404/模块注册错误。
- 在 DevTools Sources 中确认 `game/bundle.js` 可读，source map 可定位到模块。

**退出条件**：

- `game/` 下无 `.min.js`、无压缩单行业务代码。
- 所有 `compiled` 模块都有缺口记录。
- 本文档 Step 6 记录完整。

---

### Step 7：工具与工程脚本

**目标**：补齐 `tools/check.cjs`、`tools/assemble-game.cjs`、npm 脚本和基础工程文件，使工程可自检、可重建 bundle。

**改动**：

- 编写 `tools/check.cjs`，覆盖需求文档第 13.2 节检查项。
- 编写 `tools/assemble-game.cjs`，支持生成和 `--check`。
- `package.json` 增加 `start`、`check`、`assemble`、`test` 脚本，锁定 `http-server` 版本。
- 生成 `package-lock.json`。
- 完善 `.gitignore` 和 `README.md` 的启动/目录说明。
- 运行 `node tools/check.cjs`，修复发现的问题。
- 运行 `node tools/assemble-game.cjs --check`，确认 bundle 与模块一致。

**浏览器验证**：

- 预期：工具执行不改变运行行为；页面仍可玩。
- 检查 Console/Network 无新增错误。

**退出条件**：

- `node tools/check.cjs` 退出码 0（或只剩已记录的缺口警告）。
- `assemble --check` 通过。
- 本文档 Step 7 记录完整。

---

### Step 8：文档收口与完整验收

**目标**：完成所有交付文档，执行端到端人工验收，记录最终结果。

**改动**：

- 完成 `docs/architecture.md`：启动链路、模块系统、资源包、数据流、存档。
- 完成 `docs/code-map.md`：覆盖全部业务模块和主要组件 UUID。
- 完成 `docs/editing.md`：改数据、改模块、换资源、重新生成 bundle 的步骤与约束。
- 编写 `docs/validation.md`：环境、步骤、结果、已知警告和限制。
- 完善 `README.md`。
- 更新本文档 Step 8 记录和最终状态。

**浏览器验证（完整流程）**：

1. `http-server . -p 8080 -c-1` 启动。
2. 首页 → 开始关卡 → 消除 → 使用技能 → 暂停/恢复 → 胜利或超时 → 复活/结算 → 返回主页。
3. 刷新页面，确认 `hgxcds_game_v1` 存档保留。
4. 临时移走 `cocos-source.json`，刷新，确认仍可启动。
5. 检查 Console 无未捕获异常；Network 无 404、无外部请求。复核 Step 1 记录的 12 次 Cocos Error 3804，确认已修复或在 `docs/validation.md` 中列为已知问题并说明影响。
6. 缩放/竖屏检查，确认 720 × 1600 布局可操作。
7. 保存关键截图到 `docs/evidence/step-08/`，填写 `docs/validation.md`。

**退出条件**：

- 需求文档 A1–A15 全部通过，或未通过项明确记录原因和后续计划。
- 本文档所有步骤状态为“已完成”或有明确阻塞说明。
- 工程根目录 `http-server` 可直接运行。

## 5. 每步任务记录模板

每次更新本文档时，在“当前执行记录”中追加：

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

## 6. 当前执行记录

### Step 0：需求与计划基线

- 状态：已完成
- 开始/完成时间：2026-10-22
- 改动文件：
  - `docs/requirements.md`
  - `docs/implementation-plan.md`
- 执行命令：无（纯文档阶段）
- 浏览器验证：N/A
- 遗留问题：
  - 待评审：`game/source` 是否保留 `config/cfg_*.ts` 作参考。
  - 待评审：下一轮是否引入 TS → modules 编译工具。
  - 待评审：Cocos 业务包加载方式（`scriptPackages` 直载 vs. main 包转接）需在 Step 4B 用浏览器实测决定。
- 下一步：Step 1 导入可运行基线。

### Step 1：导入可运行基线

- 状态：已完成
- 开始/完成时间：2026-10-22 13:10–13:14 CST
- 改动文件：
  - 从 `code/build/web-editable-source-20261021/` 复制运行时：`index.html`、`index.js`、`application.js`、`style.css`、`favicon.svg`、`src/`、`cocos-js/`、`assets/`、`business/`
  - 新增：`package.json`、`package-lock.json`、`.gitignore`、`README.md`
  - 新增：`docs/evidence/step-01/01-home.png` 等 7 张验证截图
  - `node_modules/` 为本地依赖目录，已加入 `.gitignore`
- 执行命令：
  - `rsync -a --exclude='.DS_Store' <baseline>/<entry> ./`
  - `npm install`（安装 `http-server@14.1.1`，共 48 个包，0 vulnerabilities）
  - `./node_modules/.bin/http-server . -p 8080 -c-1`
- 浏览器验证：
  - URL：`http://127.0.0.1:8080/`
  - 预期：基线主页可开；可开始第 1 关；可完成一次消除；无资源 404。
  - 实际：主页加载并出现登录奖励弹窗；关闭后进入第 1 关；将右侧货架的 id=27 商品拖到中间货架，再将顶层 id=32 商品拖到右侧货架，三个 id=32 合并消除，星星数从 0 变为 1，连击显示 X1；刷新后回到主页，星星数仍为 1，存档未丢失。
  - Console：存在 12 次 `Error 3804`（Cocos `getComponent: Type must be non-nil`，调用栈落在 `cocos-js/cc.js` / `arms-rum-browser.js`）；无未捕获异常、无模块解析失败。该问题在基线阶段已存在，先登记，Step 4B/Step 8 复核并决定修复或记录为已知问题。
  - Network 404：无。共 288 个请求，全部 200；包含 HTML、CSS、JS、JSON、PNG/JPG、MP3/WAV、WASM。
  - 截图：`docs/evidence/step-01/01-home.png`（登录奖励弹窗）、`02-home-after-close.png`（主页）、`04-level-start.png`（第 1 关）、`05-after-drag.png`（第一次拖拽后）、`06-after-merge.png`（三消合并、星星 1、连击 X1）、`07-home-reload.png`（刷新后存档保留）。
- 遗留问题：
  - 全局 `http-server` 未安装；已改为工程内 `http-server@14.1.1`，`npm start` 可用。若用户机器已全局安装，则 `http-server . -p 8080 -c-1` 可直接运行。
  - 12 次 Cocos Error 3804 待定位；不影响当前玩法和资源加载，但最终验收前必须修复或明确记录。
  - 根目录原有 `.DS_Store` 未删除，已加入 `.gitignore`。
- 下一步：Step 2 提取 `engine/`，修正入口与 import map，然后重新启动/刷新浏览器验证。

### Step 2：提取 `engine/`

- 状态：已完成
- 开始/完成时间：2026-10-22 13:17–13:22 CST
- 改动文件：
  - `cocos-js/` → `engine/`
  - `src/system.bundle.js`、`src/polyfills.bundle.js`、`src/import-map.json` → `engine/`
  - `src/chunks/` → `engine/chunks/`
  - `index.html` 改为引用 `engine/polyfills.bundle.js`、`engine/system.bundle.js`、`engine/import-map.json`
  - `engine/import-map.json` 的 `cc` 映射改为 `./cc.js`
  - `src/settings.json` 的 `scriptPackages` 改为 `../engine/chunks/bundle.js`
  - 新增 `docs/evidence/step-02/01-home.png`、`02-home-after-close.png`、`03-level.png`、`04-after-interaction.png`、`browser-check.json`
  - `src/` 暂时只保留 `settings.json`
- 执行命令：
  - `mv cocos-js engine`
  - `mv src/system.bundle.js src/polyfills.bundle.js src/import-map.json engine/`
  - `mv src/chunks engine/chunks`
  - 临时 Playwright-core + 系统 Chrome headless 验证（脚本在 `/tmp/hgxcds-browser-check/check.cjs`，不加入工程依赖）
- 浏览器验证：
  - URL：`http://127.0.0.1:8080/`
  - 说明：in-app Browser 表面变为 hidden，渲染和截图被暂停；改用系统 Chrome headless 做真实浏览器验证，仍访问同一 `http-server`。
  - 预期：主页、登录奖励、第 1 关可进入；引擎资源全部来自 `engine/`；无旧路径请求；无 404。
  - 实际：主页加载，关闭登录奖励，进入第 1 关；完成一次跨货架拖拽（右侧货架 id=28 移到上层货架），右侧货架 layer0 从 `[11,28,8]` 变为 `[11,8]`，上层从 `[28,11]` 变为 `[28,11,28]`，拖拽/放置链路正常。
  - Console：headless Chrome 本次 0 error / 0 warning / 0 pageerror；Step 1 的 12 次 3804 未在本轮复现。
  - Network 404：0；`engineLoaded=8`，`oldCocos=0`，`oldSrc=0`；`settings.json` 仍从 `src/settings.json` 加载（Step 4A 再迁）。
  - 截图：`docs/evidence/step-02/01-home.png`、`02-home-after-close.png`、`03-level.png`、`04-after-interaction.png`；详细请求/货架状态见 `docs/evidence/step-02/browser-check.json`。
- 遗留问题：
  - Step 1 的 12 次 Cocos 3804 在本次 headless Chrome 未复现；后续 Step 3+ 继续观察，最终在 Step 4B/8 复核。
  - 本轮随机关卡没有出现可立即三消的布局；已完成一次有效拖拽验证交互，三消合并在 Step 1 已完整验证。
  - in-app Browser 当前仍不可见；后续优先重试 in-app Browser，不可用时继续用系统 Chrome headless 并记录。
- 下一步：Step 3 提取 `data/` 与 `boot.js`，然后重新做浏览器验证。

### Step 3：提取 `data/` 与 `boot.js`

- 状态：已完成
- 开始/完成时间：2026-10-22 13:24–13:28 CST
- 改动文件：
  - `business/config.json` → `data/config.json`
  - `business/data/*.json` → `data/tables/*.json`
  - 新建 `boot.js`：读取 `data/config.json` 和 `config.tables` 对应的表，设置 `WebGameConfig` / `WebGameTables`，再导入 `./index.js`；失败提示包含 URL/HTTP 状态
  - `index.html` 改为加载 `boot.js`
  - 6 个 `cfg_*` 模块顶部注释从 `business/data/` 改为 `data/tables/`
  - 删除已无引用的 `business/bootstrap.js`；`business/` 暂时只保留 `modules/`、`modules.json`、`prerequisite.js`
  - 新增 `docs/evidence/step-03/01-home.png`、`02-home-after-close.png`、`03-level.png`、`04-after-interaction.png`、`browser-check.json`
- 执行命令：
  - `mkdir -p data/tables`
  - `mv business/config.json data/config.json`
  - `mv business/data/*.json data/tables/`
  - Python 将 `data/` 下 JSON 统一为 UTF-8、2 空格缩进、结尾换行
  - `node --check boot.js`
  - 临时 Playwright-core + 系统 Chrome headless 验证（脚本在 `/tmp/hgxcds-browser-check/check-step3.cjs`，不加入工程依赖）
- 浏览器验证：
  - URL：`http://127.0.0.1:8080/`
  - 预期：数据从 `data/` 加载；旧 `business/config.json`、`business/data/` 不再请求；主页/关卡/拖拽/三消正常。
  - 实际：主页 → 关闭登录奖励 → 第 1 关；两次拖拽（先把阻挡商品移到上层，再把重复商品移到中间货架）后中间货架清空，星星 0→1，连击 X1，三消合并成功。
  - Console：0 error / 0 warning / 0 pageerror。
  - Network 404：0；`bootLoaded=1`，`dataConfigLoaded=1`，`dataTablesLoaded=6`，`oldBusinessData=0`，`oldCocos=0`，`oldSrc=0`。
  - 截图：`docs/evidence/step-03/01-home.png`、`02-home-after-close.png`、`03-level.png`、`04-after-interaction.png`；详细数据见 `browser-check.json`。
- 遗留问题：
  - in-app Browser 仍不可见；本轮继续使用系统 Chrome headless 验证。
  - Step 1 的 12 次 3804 在 Step 2/3 headless 运行中未复现；Step 4B/8 继续复核。
  - `business/` 目录仍保留业务模块，Step 4A/4B 会迁入 `game/`。
- 下一步：Step 4A 提取 `game/` 入口、Application 和 settings。

### Step 4A：提取 `game/` 入口

- 状态：已完成
- 开始/完成时间：2026-10-22 13:29–13:30 CST
- 改动文件：
  - `index.js` → `game/main.js`
  - `application.js` → `game/application.js`
  - `src/settings.json` → `game/settings.json`；`src/` 目录删除
  - `boot.js` 改为导入 `./game/main.js`
  - `game/application.js` 的 `settingsPath` 改为 `game/settings.json`
  - `game/settings.json` 的 `scriptPackages` 保持 `../engine/chunks/bundle.js`
  - 新增 `docs/evidence/step-04a/01-home.png`、`02-home-after-close.png`、`03-level.png`、`04-after-interaction.png`、`browser-check.json`
- 执行命令：
  - `mkdir -p game`
  - `mv index.js game/main.js`
  - `mv application.js game/application.js`
  - `mv src/settings.json game/settings.json`
  - `rmdir src`
  - 临时 Playwright-core + 系统 Chrome headless 验证（脚本在 `/tmp/hgxcds-browser-check/check-step4a.cjs`，不加入工程依赖）
- 浏览器验证：
  - URL：`http://127.0.0.1:8080/`
  - 说明：in-app Browser 仍不可见，继续使用系统 Chrome headless。
  - 预期：主页、登录奖励、第 1 关可进入；`game/main.js`、`game/application.js`、`game/settings.json` 被加载；根目录旧 `index.js`/`application.js` 与 `src/settings.json` 不再请求；业务包仍从 `assets/main/index.js` 预加载。
  - 实际：主页加载，关闭登录奖励，进入第 1 关；完成一次跨货架拖拽，货架状态变化，游戏可玩。
  - Console：0 error / 0 warning / 0 pageerror。
  - Network 404：0；`gameMainLoaded=1`、`gameApplicationLoaded=1`、`gameSettingsLoaded=1`、`businessBundleLoaded=1`、`engineLoaded=8`、`dataConfigLoaded=1`、`dataTablesLoaded=6`；`oldRootEntry=0`、`oldSrcSettings=0`、`oldBusinessData=0`、`oldCocos=0`、`oldSrc=0`。
  - 截图：`docs/evidence/step-04a/01-home.png`、`02-home-after-close.png`、`03-level.png`、`04-after-interaction.png`；详细数据见 `browser-check.json`。
- 遗留问题：
  - Step 4A 随机关卡没有出现可立即三消的布局；已完成一次有效拖拽验证交互；三消合并在 Step 3 已完整验证。
  - `business/` 仍保留 95 个业务模块、`modules.json`、`prerequisite.js`；Step 4B 迁入 `game/` 并切换 `game/bundle.js`。
  - in-app Browser 仍不可见；后续继续用系统 Chrome headless 并记录。
- 下一步：Step 4B 提取 `game/` 业务包，切换 `game/bundle.js`，复核组件注册和主包加载顺序。

### Step 4B：提取 `game/` 业务包

- 状态：已完成
- 开始/完成时间：2026-10-22 13:45–13:50 CST
- 改动文件：
  - `business/modules/` → `game/modules/`（95 个模块）
  - `business/modules.json` → `game/modules.json`，95 个 `file` 路径改为 `game/modules/...`
  - `business/prerequisite.js` → `game/prerequisite.js`
  - `assets/main/index.js` → `game/bundle.js`，`assets/main/index.js.map` → `game/bundle.js.map`
  - `game/bundle.js` 增加 SystemJS 外层包装，使其可作为 `scriptPackages` 模块被导入；顶部注明生成文件
  - `game/settings.json` 的 `scriptPackages` 改为 `["../engine/chunks/bundle.js", "../game/bundle.js"]`
  - `assets/main/index.js` 改为极小兼容占位脚本，不复制业务代码；`hasPreloadScript` 保持 `true`
  - `business/` 目录删除
  - 新增 `docs/evidence/step-04b/*.png` 与 `browser-check.json`
- 执行命令：
  - `mv business/modules game/modules`、`mv business/modules.json game/modules.json`、`mv business/prerequisite.js game/prerequisite.js`
  - `mv assets/main/index.js game/bundle.js`、`mv assets/main/index.js.map game/bundle.js.map`
  - Python 更新 modules 路径、bundle 尾部 map 引用、map 的 `file`/`sources`
  - Python 为 `game/bundle.js` 加 SystemJS 外层包装
  - `node --check game/bundle.js`
  - 临时 Playwright-core + 系统 Chrome headless 验证
- 浏览器验证：
  - 过程：先把 `game/bundle.js` 直接加入 `scriptPackages`，启动报 `r[1] is not a function`；原因是原始 bundle 只是一组顶层 `System.register`，不是 SystemJS 模块。加外层包装后，主包又因 `assets/main/index.js` 被运行时强制请求而 404；补极小兼容占位脚本后启动成功。
  - 预期：业务包只从 `game/bundle.js` 加载；各 `game/modules/*.js` 不被逐个请求；主页/关卡/拖拽/三消正常。
  - 实际：主页 → 关闭登录奖励 → 第 1 关；一次拖拽完成三消，上层货架清空，游戏可玩。
  - Console：0 error / 0 pageerror；仅有 WebGL ReadPixels/AudioContext 的浏览器提示性 warning。
  - Network 404：0；`gameBundleLoaded=1`、`mainPreload=1`（兼容 shim）、`gameModuleFiles=0`；`oldBusinessData=0`、`oldRootEntry=0`、`oldSrcSettings=0`、`oldCocos=0`、`oldSrc=0`。
  - 截图：`docs/evidence/step-04b/01-home.png`、`02-home-after-close.png`、`03-level.png`、`04-after-interaction.png`；详细数据见 `browser-check.json`。
- 关键决策：
  - Cocos 运行时始终请求主包的 `index.js`，`hasPreloadScript:false` 不能阻止该请求；因此保留一个 2 行兼容占位脚本是当前最稳妥方案。
  - 业务模块唯一可编辑来源是 `game/modules/`；`game/bundle.js` 是生成文件；`assets/main/index.js` 不是业务代码。
- 遗留问题：
  - `game/bundle.js.map` 的 sourcesContent 仍是旧内容，Step 6 用组装工具重新生成。
  - 95 个模块仍为 Babel 编译产物，Step 6 记录可读性缺口并做非压缩/映射检查。
  - in-app Browser 仍不可见，继续使用系统 Chrome headless。
- 下一步：Step 5 导入原始 TypeScript、扩展 modules 元数据、生成 code-map 骨架。

### Step 5：导入原始 TS 与代码映射

- 状态：已完成
- 开始/完成时间：2026-10-22 13:50–13:52 CST
- 改动文件：
  - `code/assets/scripts/**/*.ts` → `game/source/**/*.ts`（92 个，0 个 `.meta`）
  - `game/modules.json` 扩展字段：`source`、`className`、`componentUuid`、`bundle`、`readability`、`notes`
  - 95 个模块中：92 个有 TS 映射，3 个为生成/辅助模块，93 个提取到 `_RF.push` 组件 UUID；无重复模块 ID、无重复组件 UUID、无缺失源文件
  - 新增 `docs/code-map.md`：全量 95 行映射、核心模块说明、生成模块说明、可读性缺口、资源包说明
  - 新增 `docs/evidence/step-05/*.png` 与 `browser-check.json`
- 执行命令：
  - `rsync` 只复制 `.ts` 到 `game/source/`
  - 临时 Python 脚本生成 `game/modules.json` 元数据与 `docs/code-map.md`
  - Python 静态校验：95 个 ID 唯一、93 个 UUID 唯一、所有 `file`/`source` 存在
  - 临时 Playwright-core + 系统 Chrome headless 验证
- 浏览器验证：
  - 预期：运行时行为不变；`game/source/` 与 `game/modules.json` 不参与运行，不应产生网络请求。
  - 实际：主页 → 关闭登录奖励 → 第 1 关；两次拖拽后中间货架清空，三消成功，星星 1，连击 X1。
  - Console：0 error / 0 pageerror；Network 404：0；`sourceFiles=0`、`modulesManifest=0`、`gameBundleLoaded=1`、`mainPreload=1`、`gameModuleFiles=0`。
  - 截图：`docs/evidence/step-05/01-home.png`、`02-home-after-close.png`、`03-level.png`、`04-after-interaction.png`；详细数据见 `browser-check.json`。
- 遗留问题：
  - 92 个运行时模块仍是 Babel 编译产物，局部变量为编译器短名；`docs/code-map.md` 已记录 L3 缺口，Step 6 重建 bundle/source map 并做非压缩检查。
  - in-app Browser 仍不可见，继续使用系统 Chrome headless。
- 下一步：Step 6 可读性整理与 bundle 重建。

### Step 6：可读性整理与 bundle 重建

- 状态：已完成
- 开始/完成时间：2026-10-22 13:52–13:53 CST
- 改动文件：
  - 新增 `tools/assemble-game.cjs`：无第三方依赖，读取 `game/modules.json` 和 `game/prerequisite.js`，生成带 SystemJS 外层包装的 `game/bundle.js` 与 source map，支持 `--check`
  - 重新生成 `game/bundle.js`（771,676 bytes，13,507 行）和 `game/bundle.js.map`（96 个 sources，含 sourcesContent）
  - 更新 `docs/code-map.md` 的“可读性与构建检查（Step 6）”
  - 新增 `docs/evidence/step-06/*.png` 与 `browser-check.json`
- 执行命令：
  - `node tools/assemble-game.cjs`
  - `node --check game/bundle.js`
  - `node tools/assemble-game.cjs --check`
  - Python 统计模块/bundle 行宽、模块 ID、组件 UUID、eval/min.js
  - 临时 Playwright-core + 系统 Chrome headless 验证
- 可读性检查：
  - 95 个模块共 13,382 行，最大行宽 125，平均行宽 < 160；无 `.min.js`、无 `eval`/`Function`。
  - bundle 13,507 行，最大行宽 133，平均 56.1；95 个模块 ID 各出现一次；93 个组件 UUID 各出现一次。
  - `game/bundle.js.map` 含 96 个 sources 与 sourcesContent；`assemble-game.cjs --check` 通过。
- 浏览器验证：
  - 预期：重建 bundle 后玩法不变；组件注册、关卡加载和拖拽正常；无 404。
  - 实际：主页 → 关闭登录奖励 → 第 1 关；完成一次跨货架拖拽，游戏可玩。本轮随机布局没有出现可立即三消的组合，三消合并在 Step 5 已验证。
  - Console：0 error / 0 pageerror；Network 404：0；`gameBundleLoaded=1`、`mainPreload=1`、`gameModuleFiles=0`、`sourceFiles=0`、`modulesManifest=0`。
  - 截图：`docs/evidence/step-06/01-home.png`、`02-home-after-close.png`、`03-level.png`、`04-after-interaction.png`；详细数据见 `browser-check.json`。
- 遗留问题：
  - 92 个有 TS 映射的模块仍使用 Babel 短局部变量名，属于已记录的 L3 缺口；TS 源码是权威可读源码，运行产物非压缩且带 source map。
  - in-app Browser 仍不可见，继续使用系统 Chrome headless。
- 下一步：Step 7 编写 `tools/check.cjs`，完善 package 脚本、`cocos-source.json`/example，并运行结构与完整性校验。

### Step 7：工具、package 脚本与 cocos-source

- 状态：已完成
- 开始/完成时间：2026-10-22 13:53–13:54 CST
- 改动文件：
  - 新增 `tools/check.cjs`，覆盖必需文件、JSON、配置表、模块图、bundle 一致性、可读性、import map、settings、资源包、运行路径、存档键、npm 脚本和 `cocos-source.json`
  - 完善 `package.json` 脚本：`start`、`check`、`assemble`、`test`
  - 新增 `cocos-source.example.json`（提交模板）和 `cocos-source.json`（本地真实路径，已由 `.gitignore` 忽略）
  - 新增 `docs/evidence/step-07/*.png` 与 `browser-check.json`
- 执行命令：
  - `node tools/check.cjs`
  - `npm test`
  - 临时 Playwright-core + 系统 Chrome headless 验证
- 校验结果：
  - `node tools/check.cjs`：14 项全部 PASS，0 failed。
  - 覆盖：19 个必需文件、6 个 JSON、6 个数据表、95 个模块/95 个定义/93 个 UUID、95 个 bundle ID、96 个 map sources、7 个资源包、31 个 packs、198 个 UUID 引用、81 个脚本 schema、存档键 `hgxcds_game_v1`。
  - `bundle is reproducible` 通过；`game/bundle.js` 与 `game/bundle.js.map` 与组装工具一致。
- 浏览器验证：
  - URL：`http://127.0.0.1:8080/`
  - 实际：主页 → 关闭登录奖励 → 第 1 关；两次拖拽后目标货架完成三消并清空，游戏可玩。
  - Console：0 error / 0 pageerror；Network 404：0；`gameBundleLoaded=1`、`mainPreload=1`、`gameModuleFiles=0`、`sourceFiles=0`、`modulesManifest=0`。
  - 截图：`docs/evidence/step-07/01-home.png`、`02-home-after-close.png`、`03-level.png`、`04-after-interaction.png`；详细数据见 `browser-check.json`。
- 遗留问题：
  - `cocos-source.json` 是本机路径，不能提交；其他开发者复制 `cocos-source.example.json` 后填写。
  - 最终文档 `architecture.md`、`editing.md`、`validation.md` 仍待 Step 8 完成。
- 下一步：Step 8 完成文档收口、最终完整验收和交付总结。

### Step 8：文档收口与完整验收

- 状态：已完成
- 开始/完成时间：2026-10-22 13:54–14:02 CST
- 改动文件：
  - 新增 `docs/architecture.md`：目录边界、启动链路、模块系统、数据/资源/存档、可读性、本地路径映射
  - 新增 `docs/editing.md`：数据、JS 模块、TS 源、资源、存档的修改流程与约束
  - 新增 `docs/validation.md`：环境、结构校验、浏览器验收、数据编辑验证、A1–A15、已知限制
  - 更新 `README.md`：最终启动、校验、目录和文档入口
  - 更新 `docs/implementation-plan.md`：全部步骤完成
  - 新增 `docs/evidence/step-08/01-home.png` 到 `10-win.png`、`browser-check.json`
- 最终结构检查：
  - `node tools/check.cjs`：14 passed / 0 failed。
  - `npm test`：14 passed / 0 failed。
  - `node tools/assemble-game.cjs --check`：96 sources / 771,676 bytes，up to date。
  - `boot.js`、`game/main.js`、`game/application.js`、`tools/*.cjs` 语法检查通过。
  - 临时移走 `cocos-source.json` 后：check 13 passed / 0 failed / 1 warning；完整浏览器验收仍通过。
- 浏览器完整验收：
  - 主页 → 关闭登录奖励 → 第 1 关 → 拖拽三消；技能 `3,3,3,3 → 2,3,3,3`。
  - 暂停打开 `Pause=true`、`UIPause` 可见；关闭 `Pause=false`、UI 隐藏。
  - 操作后 `hgxcds_game_v1` 存在；刷新后仍存在且可再次开始。
  - 超时 UI 打开、`CanRevive=true`；复活后 `Pause=false`、`CanRevive=false`、UI 关闭。
  - 胜利 `UIWin` 打开、`Pause=true`。
  - Console 0 error / 0 pageerror；Network 0 个 404 / failed；外部请求 0。
  - 数据编辑验证：首关 time 210→999，`TimeItem.LeftTime≈997.8`，显示 `16:38`；恢复为 210。
- 已知限制：
  - 92 个模块仍有 Babel 短局部变量名（L3 缺口）；TS 源是权威可读源码。
  - 超时/胜利通过 Stage 状态方法触发正常 UI 链路，未等待自然超时或完整自然通关。
  - 桌面 Chrome headless 验证，不是实体手机验收。
  - `assets/main/index.js` 是 Cocos 主包兼容占位脚本，不含业务代码。
- 最终状态：**交付完成**。工程根目录执行 `http-server` 即可运行；结构、数据、资源、源码映射、存档和主要玩法流程均已验证。

## 7. 回退与风险管理

- **回退点**：每步浏览器验证通过后，保留一个可用状态。建议使用本地 Git 提交；不使用 Git 时，在每步开始前复制上一版目录副本。
- **不跨步修复**：如果 Step N 验证失败，不进入 Step N+1；先定位并修复，或回退到 Step N-1 的可用状态。
- **不破坏输入**：`code/` 只读；所有构建产物、缓存和临时文件都不写回 `code/`。
- **高风险点**：
  - Step 4B：`assets/main/index.js` 预加载脚本移除后，组件注册和主包加载顺序可能变化。优先实测；必要时使用一行转接脚本。
  - Step 5/6：TS 与 JS 双轨漂移；以 `code-map.md` 和 `modules.json` 记录映射，缺口必须可见。
  - Step 6：短局部变量还原可能引入行为差异；每次整理后必须重新跑完整冒烟，不能只做静态检查。
- **失败处理**：保留失败现象、Console 错误和 Network 请求；在本文档记录后再修改，避免丢失线索。

## 8. 完成定义

一个步骤只有在以下条件全部满足时才算完成：

1. 计划中的改动已完成，且没有留下临时占位或不可运行的中间状态。
2. `http-server` 能启动当前工程，浏览器能打开并达到该步骤预期状态。
3. Console 无新增未处理错误；Network 无新增 404/失败请求。
4. 本文档对应记录已填写（状态、改动、命令、验证结果、截图/摘要、遗留问题）。
5. 下一步的输入已就绪，且不会覆盖或破坏上一步的可用状态。
