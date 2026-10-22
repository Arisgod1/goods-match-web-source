# 货柜消除大师 · 验证记录

## 1. 验证环境

| 项目 | 值 |
| --- | --- |
| 日期 | 2026-10-22 |
| 系统 | macOS arm64（Darwin 27.0.0） |
| Node.js | v24.18.0 |
| 静态服务 | `http-server@14.1.1`（工程 devDependency；本机未全局安装） |
| 浏览器 | 系统 Google Chrome，headless 模式 |
| 视口 | 531 × 652 CSS px，DPR 2；设计分辨率 720 × 1600，左右留黑边 |
| 验证方式 | in-app Browser 表面不可见，使用系统 Chrome headless 做真实浏览器验证；临时 Playwright-core 只用于验证，不进入工程依赖 |

## 2. 结构与构建检查

| 命令 | 结果 |
| --- | --- |
| `node tools/check.cjs` | **14 passed, 0 failed**（存在 `cocos-source.json`） |
| `npm test` | **14 passed, 0 failed** |
| `node tools/assemble-game.cjs --check` | **up to date**：96 sources，771,676 bytes |
| `node --check boot.js` / `game/main.js` / `game/application.js` / `tools/*.cjs` | 语法通过 |
| `node tools/check.cjs`（临时移走 `cocos-source.json`） | **13 passed, 0 failed, 1 warning**；缺失本地映射不影响运行 |

检查覆盖：

- 19 个必需运行文件；
- 6 个数据表与 `config.tables` 清单；
- 95 个模块、95 个 SystemJS 定义、93 个 `_RF.push` 组件 UUID；
- 95 个 bundle 模块 ID、96 个 source map sources；
- 7 个资源包、31 个 packs、198 个资源 UUID 引用、81 个序列化脚本 schema；
- 7 个 bundle 的 `projectBundles`、2 个 `scriptPackages`；
- 可读性基线：95 个模块最大行宽 125，bundle 最大行宽 133，无 `.min.js`、无 `eval`/`Function`；
- 存档键仅 `hgxcds_game_v1`；
- 运行文件无旧路径、无 `file://`、无硬编码 localhost；
- `cocos-source.json` 本机路径可读；缺失时仅告警。

## 3. 浏览器端到端验收

最终脚本：`/tmp/hgxcds-browser-check/final-acceptance.cjs`（临时验证工具，不进入工程）。  
最终证据：`docs/evidence/step-08/browser-check.json` 与 `01-home.png` 到 `10-win.png`。

| 验收项 | 结果 |
| --- | --- |
| 主页加载 | 通过；出现登录奖励弹窗，关闭后进入主页 |
| 进入第 1 关 | 通过 |
| 拖拽/三消 | 通过；多轮验收中均能完成 3 个相同商品合并，目标货架清空 |
| 技能使用 | 通过；冰冻技能数量 `3,3,3,3 → 2,3,3,3` |
| 暂停/恢复 | 通过；打开暂停 `GameMgr.Pause=true`、`UIPause` 可见；关闭后 `false`、UI 隐藏 |
| 存档刷新 | 通过；操作后 `hgxcds_game_v1` 存在，刷新后仍存在且主页可再次开始 |
| 超时 UI | 通过；`UITimeOut` 打开，`GameMgr.Pause=true`，`CanRevive=true` |
| 复活 | 通过；复活后 `Pause=false`、`CanRevive=false`、`UITimeOut` 关闭 |
| 胜利 UI | 通过；`UIWin` 打开，`GameMgr.Pause=true` |
| Console | 0 error / 0 pageerror |
| Network | 0 个 404、0 个 failed request；外部请求 0 |
| 技能/暂停/关卡操作 | 通过真实鼠标坐标点击完成 |
| 缺失 `cocos-source.json` | 通过；同一套完整流程成功，`check.cjs` 仅提示 warning |

### 超时/胜利的验证方式

- 超时：在关卡内通过 `Stage.onTimeOut()` 触发正常超时 UI 流程，再调用 `UITimeOut.onBtnYesClick()` 验证复活。
- 胜利：通过 `Stage.showWin()` 触发正常结算与 `UIWin` 展示流程。
- 这两项验证的是引擎状态到 UI/存档的真实链路；没有等待完整 3 分半自然超时，也没有手工完成整关自然通关。拖拽、技能、暂停、存档刷新均为真实 UI 操作。

## 4. 数据可编辑性验证

临时修改 `data/tables/cfg_level.json` 中 `cfg_level_tp/gs/ls` 首关 `time` 为 `999`，不重新构建 bundle，启动第 1 关：

- `globalThis.TimeItem.LeftTime` ≈ **997.8** 秒；
- 计时器显示 **16:38**；
- 恢复原数据后为 `210` 秒。

说明：修改 `data/` 后刷新/重新加载即可生效，不需要重新生成 `game/bundle.js`。验证后数据已恢复。

## 5. 验收清单

| 编号 | 验收项 | 结果 |
| --- | --- | --- |
| A1 | 目录规范 | 通过；具备 `assets/`、`boot.js`、`cocos-source*.json`、`data/`、`docs/`、`tools/`、`engine/`、`game/` |
| A2 | 直接运行 | 通过；根目录 `http-server` 可进入主页，无需构建 |
| A3 | 玩法完整 | 通过；主页、关卡、拖拽、三消、技能、暂停、超时/复活、胜利 UI、返回主页路径均验证 |
| A4 | 控制台 | 通过；最终 Chrome 运行 0 error / 0 pageerror |
| A5 | 存档 | 通过；`hgxcds_game_v1` 刷新后保留 |
| A6 | 源码可读 | 通过 L1/L2；92 个 TS 源、95 个非压缩模块、93 个 UUID 保留；L3 短局部变量缺口已记录 |
| A7 | 代码映射 | 通过；`docs/code-map.md` 覆盖 95 个模块 |
| A8 | 数据可改 | 通过；关卡时间从 210 改为 999 后计时器显示 16:38，无需重建 |
| A9 | 资源完整 | 通过；7 个资源包、31 个 packs、198 个 UUID 引用、81 个脚本 schema |
| A10 | 工具 | 通过；`check.cjs`、`assemble-game.cjs --check` |
| A11 | 本地配置 | 通过；缺少 `cocos-source.json` 仍可完整运行 |
| A12 | 对外依赖 | 通过；外部请求 0，无 CDN/API |
| A13 | 引擎锁定 | 通过；`engine/` 为 Cocos 3.8.3 |
| A14 | 路径健壮 | 通过；相对路径、无 `file://`、无硬编码 localhost |
| A15 | 分步验证 | 通过；Step 1–8 均有任务文档记录和浏览器验证证据 |

## 6. 证据索引

| 路径 | 内容 |
| --- | --- |
| `docs/evidence/step-01/` | 基线导入、主页、关卡、三消合并、刷新存档 |
| `docs/evidence/step-02/` | `engine/` 提取后的加载与拖拽 |
| `docs/evidence/step-03/` | `data/` + `boot.js` 后的三消 |
| `docs/evidence/step-04a/` | `game/` 入口、Application、settings |
| `docs/evidence/step-04b/` | 业务包切换 `game/bundle.js` |
| `docs/evidence/step-05/` | TS 源与代码映射导入后运行 |
| `docs/evidence/step-06/` | bundle/source map 重建后运行 |
| `docs/evidence/step-07/` | 校验/组装工具完成后的运行 |
| `docs/evidence/step-08/` | 最终完整验收：技能、暂停、存档、超时复活、胜利 UI |

## 7. 已知限制与说明

1. **L3 可读性缺口**：92 个有 TS 映射的模块仍是 Babel 编译产物，局部变量为编译器短名；它们不是压缩/混淆产物。`game/source/` 的 TypeScript 是权威可读源码，运行时 JS 带 source map。详见 `docs/code-map.md`。
2. **TS 不自动编译**：本轮没有 TS → `game/modules` 编译工具；修改 `game/source/**/*.ts` 不会自动改变运行时，需要手工同步或后续补工具。
3. **超时/胜利为状态触发**：UI/存档链路真实验证，但没有等待自然 3 分半超时或完整自然通关。
4. **浏览器覆盖**：使用桌面 Chrome headless，不是实体手机验收；720 × 1600 设计分辨率和页面适配已验证。WebGL `ReadPixels`、AudioContext 自动播放提示属于浏览器/引擎提示性 warning，不是失败。
5. **主包兼容 shim**：Cocos 运行时仍请求 `assets/main/index.js`，因此保留一个极小占位脚本；业务 bundle 唯一位置是 `game/bundle.js`。
6. **存档绑定 origin**：换端口/域名/隐私模式会得到不同或不可用存档。
7. **Step 1 的 3804 控制台错误**：只在最初 in-app Browser 的保留日志中出现，Step 2–8 的系统 Chrome 真实运行均为 0 error；未在最终验收复现，保留为历史观察项。

## 8. 复现命令

```sh
cd /Users/arisone/projects/游戏工场/货柜消除大师-web-source
node tools/check.cjs
node tools/assemble-game.cjs --check
http-server . -p 8080 -c-1
# 浏览器打开 http://127.0.0.1:8080/
```

完整浏览器验收由临时 Playwright-core 脚本执行；工程本身不依赖 Playwright。
