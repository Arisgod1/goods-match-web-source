# 货柜消除大师 · 二次创作与编辑指南

## 1. 启动与自检

```sh
# 启动静态服务
http-server . -p 8080 -c-1
# 或
npm install
npm start

# 结构、资源、模块和可读性检查
npm test

# 重新生成业务包
node tools/assemble-game.cjs
node tools/assemble-game.cjs --check
```

浏览器打开 `http://127.0.0.1:8080/`。不要使用 `file://`；不要直接在 `index.html` 中打开。

## 2. 修改表数据和玩法参数

### 2.1 表数据

编辑：

```text
data/tables/cfg_level.json       关卡
data/tables/cfg_icon.json        商品/图标
data/tables/cfg_passReward.json  过关奖励
data/tables/CfgLoginReward.json  登录奖励
data/tables/CfgLuckySpin.json    幸运转盘
data/tables/CfgCombo.json        连击
```

要求：

- 保持 JSON 合法、UTF-8、2 空格缩进、结尾换行。
- 不要改字段名、枚举值和奖励字段语义，除非同时理解对应模块。
- 改完刷新页面即可生效，不需要重新生成 bundle。
- 不要在 `game/modules/cfg_*.js` 中再复制一份表数据；数据唯一来源是 `data/tables/`。

### 2.2 玩法参数

编辑 `data/config.json`：

- `home.settingsButton`：主页设置按钮位置/尺寸；
- `gameplay`：默认商品、金币、冰冻/复活时间、超时提醒、连击上限等；
- `skillIcons`：技能图标资源键；
- `tables`：启动时加载的表清单。

如果新增表名，必须同时在 `data/tables/` 放入同名 JSON，否则 `boot.js` 会启动失败并在页面上显示失败 URL。

## 3. 修改运行模块

当前运行时可编辑源码是：

```text
game/modules/*.js
```

流程：

1. 修改目标模块。
2. 运行 `node tools/assemble-game.cjs` 重新生成 `game/bundle.js` 和 `game/bundle.js.map`。
3. 刷新浏览器验证。
4. 运行 `node tools/check.cjs` 确认模块图、UUID 和资源引用没有断。

必须保持：

- 模块的 `System.register` ID 不变；
- 类名、导出名、`ccclass` 名称、序列化属性名不变；
- `_RF.push` 组件 UUID 不变；
- 不把代码压缩、混淆或改成 `.min.js`；
- 不直接编辑 `game/bundle.js`。

## 4. 修改原始 TypeScript

`game/source/**/*.ts` 是 92 个原始业务脚本，是阅读、模型训练和语义查证的第一来源。

当前注意：

- 本轮没有提供 TS → `game/modules/*.js` 的编译工具。
- 只改 `game/source/` 不会自动改变运行时；需要后续编译工具，或手工同步到 `game/modules/`。
- 如果只是改注释、文档或阅读代码，不影响运行。
- 如果要改游戏行为，优先改 `game/modules/*.js` 并重新组装 bundle；同时把对应 TS 作为语义参考。

后续若引入 TS 编译工具，应保持相同的模块 ID、组件 UUID 和序列化字段，并在 `docs/code-map.md` 中登记。

## 5. 替换图片、音频和资源

- `assets/icon/native/`：图标；
- `assets/game/native/`：玩法图片/图集；
- `assets/ui/native/`：界面图片；
- `assets/audio/native/`：音乐和音效；
- `assets/resources/native/`：预加载资源。

原则：

- 尽量保持文件名/UUID 和引用关系不变；替换同尺寸/同用途资源最安全。
- 不要手改 `assets/*/import/` 和 `native/` 中的序列化结构。
- Prefab、场景、图集结构改动应回到原始 Creator 工程，重新导出后再替换。
- `assets/main/index.js` 是 Cocos 主包兼容占位脚本，不是业务资源入口。

## 6. 存档与调试

- 存档键：`hgxcds_game_v1`。
- 浏览器 DevTools → Application → Local Storage 可查看/清除。
- 存档绑定 origin；换端口、换域名或使用隐私模式会得到不同/不可用存档。
- 主页“清除存档”按钮会走应用内确认流程；不要用脚本绕过确认。
- 调试时先确认 Console 没有 404、模块注册错误或未捕获异常。

## 7. 修改后验证

```sh
node tools/check.cjs
node tools/assemble-game.cjs --check
```

浏览器至少验证：

1. 主页能加载；
2. 能进入关卡；
3. 改动的功能路径可用；
4. 刷新后存档仍存在；
5. Console 无新增错误，Network 无 404。

## 8. 常见问题

| 现象 | 排查 |
| --- | --- |
| 页面白屏/启动失败提示 | 看提示中的 URL/HTTP 状态；检查 `data/` 文件是否存在 |
| 模块缺失或组件不挂载 | 运行 `node tools/check.cjs`；确认 `game/modules.json` 和 `game/bundle.js` 已同步 |
| 改了 JS 但页面没变化 | 是否执行了 `node tools/assemble-game.cjs`；是否强制刷新/禁用缓存 |
| 改了 TS 但页面没变化 | 当前 TS 不参与运行；需要同步到 `game/modules/` 或等待编译工具 |
| 资源 404 | 检查 `assets/<bundle>/config.json` 与 `native/`/`import/` 路径；不要改 UUID |
| 存档丢失 | 检查是否换了端口/域名/隐私模式；确认键仍是 `hgxcds_game_v1` |
| 音频没声音 | 先点击页面产生用户手势；浏览器自动播放策略限制 |
| `cocos-source.json` 缺失 | 不影响运行；复制 `cocos-source.example.json` 填写本机路径即可 |

## 9. 禁止事项

- 不要把 `build/web-mobile` 的压缩 bundle 当作业务源码。
- 不要手改 `game/bundle.js`、`game/bundle.js.map` 或 `assets/main/index.js`。
- 不要改组件 UUID、模块 ID、`ccclass` 名称和序列化字段名。
- 不要引入外部 CDN、广告、支付、登录或统计 SDK。
- 不要用 `file://` 运行，也不要把绝对本机路径写进运行时文件。
