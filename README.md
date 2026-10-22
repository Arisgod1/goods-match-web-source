# 货柜消除大师 · Web Source

独立的 Cocos Creator 3.8.3 Web Source 工程。运行时不需要 Creator、不需要构建，直接在工程根目录启动静态服务即可游玩。

## 快速启动

```sh
# 已全局安装 http-server 时
http-server . -p 8080 -c-1

# 或使用工程内依赖
npm install
npm start
```

浏览器打开 `http://127.0.0.1:8080/`。不要使用 `file://`。

## 校验与构建包

```sh
npm test                       # 结构、资源、模块图、可读性校验
node tools/assemble-game.cjs   # 从 game/modules 重新生成 bundle 与 source map
node tools/assemble-game.cjs --check
```

## 目录

```text
index.html / style.css / boot.js      页面外壳与数据启动器
engine/                               Cocos 3.8.3 固定运行时
game/main.js / application.js         启动入口与 Cocos Application 适配
game/settings.json                    场景、资源包、scriptPackages、720×1600
game/modules/ + modules.json          95 个运行模块与模块/TS/UUID 映射
game/source/                          92 个原始 TypeScript 业务源码
game/bundle.js + bundle.js.map        生成文件（不要手改）
data/config.json + data/tables/       玩法参数与关卡/奖励/商品表
assets/                               Cocos 资源包；main/index.js 为兼容占位
tools/check.cjs                       结构与完整性校验
tools/assemble-game.cjs               bundle 组装器
cocos-source.example.json             本机路径映射模板（真实 cocos-source.json 不提交）
docs/                                 需求、计划、架构、代码映射、编辑、验证
```

## 验证摘要

- `node tools/check.cjs`：**14 passed / 0 failed**（不含本地 `cocos-source.json` 时为 13 passed + 1 warning）。
- `node tools/assemble-game.cjs --check`：96 sources，bundle up to date。
- 浏览器完整验收：主页、关卡、拖拽三消、技能、暂停/恢复、存档刷新、超时复活、胜利 UI 全部通过。
- Console 0 error / 0 pageerror；Network 0 个 404 / failed；外部请求 0。
- 数据编辑验证：首关时间从 210 改为 999 后计时器显示 `16:38`，无需重建 bundle。

## 文档

- [需求文档](docs/requirements.md)
- [执行计划与任务记录](docs/implementation-plan.md)
- [架构与运行链路](docs/architecture.md)
- [代码映射](docs/code-map.md)
- [二次创作与编辑指南](docs/editing.md)
- [验证记录](docs/validation.md)

## 已知限制

- 92 个运行模块仍是 Babel 编译产物，局部变量为编译器短名；`game/source/` 的 TypeScript 是权威可读源码，运行时 JS 非压缩且带 source map。
- 本轮没有 TS → `game/modules` 自动编译工具；修改 `game/source/` 后需手工同步，或后续补工具。
- Prefab、场景、图集等结构性资源修改仍需回到原始 Creator 工程。
- 存档键为 `hgxcds_game_v1`，绑定站点 origin；换端口/域名会得到独立存档。
- `assets/main/index.js` 是 Cocos 主包预加载兼容占位脚本，不承载业务代码；业务包唯一位置是 `game/bundle.js`。
