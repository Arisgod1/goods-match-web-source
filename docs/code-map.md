# 货柜消除大师 · 代码映射

本文档由 `game/modules.json` 与 `game/source/` 生成，用于回答：

- 某个运行模块对应哪个 TypeScript 源文件；
- 模块的 SystemJS ID、组件 UUID、可读性状态；
- 哪些模块是 Web 适配/运行时辅助，没有原始 TS。

机器可读索引是 `game/modules.json`；人工阅读入口是 `game/source/`。

## 汇总

- 运行模块：**95** 个。
- 有原始 TS 映射：**92** 个。
- 生成/辅助模块：**3** 个。
- 提取到 `_RF.push` 组件 UUID：**93** 个。

> 运行 JS 目前仍是 Babel 编译产物：非压缩、公开名称保留，但部分局部变量为编译器短名。 `game/source/` 的 TypeScript 是模型训练和二次创作的权威可读源码； 运行时 JS 的逐行可读性缺口在 Step 6 记录并逐步改善。

`readability` 语义：`source` 表示有权威 TS 源可追溯；`compiled` 表示没有独立可读源、只能保留编译产物；`generated` 表示 Web/运行时生成模块。当前 92 个 `source` 模块的运行 JS 仍是 Babel 产物，`source` 不等于逐行手写可读。

## 核心模块

| 模块 | 职责 |
| --- | --- |
| `Main.js` | 场景入口与启动流程 |
| `GameMgr.js` | 回合状态、暂停、拖拽拾取与放置 |
| `Goods.js` | 商品节点、拾取、回弹与消除动画 |
| `CommonShelve.js` / `ShelveBase.js` | 货架槽位、放置与三消检查 |
| `UIMgr.js` | UI 打开/关闭与生命周期 |
| `UIMain.js` | 主页界面与登录奖励、商店入口 |
| `RewardMgr.js` / `CoinMgr.js` | 奖励、金币和结算 |
| `GameSave.js` | `hgxcds_game_v1` 存档事务 |
| `TimeMgr.js` | 关卡计时、超时提醒 |
| `AudioMgr.js` | 背景音乐与音效 |
| `WebLayout.js` | Web 主页设置按钮/响应式布局适配 |

## 全量映射

| 模块 | SystemJS ID | JS 文件 | TS 源文件 | 组件 UUID | 可读性 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| ArrayUtil | `chunks:///_virtual/ArrayUtil.ts` | `game/modules/ArrayUtil.js` | `game/source/util/ArrayUtil.ts` | `4ec22SiSCtIH5tIfhLB1ntc` | source | - |
| AudioMgr | `chunks:///_virtual/AudioMgr.ts` | `game/modules/AudioMgr.js` | `game/source/manager/AudioMgr.ts` | `79432KzY8JGh7M/c0pay+I1` | source | - |
| BoardLayout | `chunks:///_virtual/BoardLayout.ts` | `game/modules/BoardLayout.js` | `game/source/game/BoardLayout.ts` | `9dbeaZIJelOvqqzCxidFVcN` | source | - |
| Breath | `chunks:///_virtual/Breath.ts` | `game/modules/Breath.js` | `game/source/misc/Breath.ts` | `9d4c9kNag1CYLOnxCSHLbtq` | source | - |
| BtnExtend | `chunks:///_virtual/BtnExtend.ts` | `game/modules/BtnExtend.js` | `game/source/uiExtend/BtnExtend.ts` | `e858boYmuRNtaUbAZS8rSGo` | source | - |
| Bundle | `chunks:///_virtual/Bundle.ts` | `game/modules/Bundle.js` | `game/source/enum/Bundle.ts` | `105baVpUGlOC7EYBCfoZ7kt` | source | - |
| cfg_icon | `chunks:///_virtual/cfg_icon.ts` | `game/modules/cfg_icon.js` | `game/source/config/cfg_icon.ts` | `032eaaUB05H+6HPhAqADpKu` | source | 数据适配模块，运行时数据在 data/tables/ |
| cfg_level | `chunks:///_virtual/cfg_level.ts` | `game/modules/cfg_level.js` | `game/source/config/cfg_level.ts` | `589e3TdcuNGWZgjWDycD6B7` | source | 数据适配模块，运行时数据在 data/tables/ |
| cfg_passReward | `chunks:///_virtual/cfg_passReward.ts` | `game/modules/cfg_passReward.js` | `game/source/config/cfg_passReward.ts` | `d2576gg+39CgpNSYy24NLn8` | source | 数据适配模块，运行时数据在 data/tables/ |
| CfgCombo | `chunks:///_virtual/CfgCombo.ts` | `game/modules/CfgCombo.js` | `game/source/config/CfgCombo.ts` | `060b37UrIZGjLWVUacodUnI` | source | 数据适配模块，运行时数据在 data/tables/ |
| CfgItem | `chunks:///_virtual/CfgItem.ts` | `game/modules/CfgItem.js` | `game/source/config/CfgItem.ts` | `2ef25I11RRIUrJ+H0hYm0Ro` | source | - |
| CfgLoginReward | `chunks:///_virtual/CfgLoginReward.ts` | `game/modules/CfgLoginReward.js` | `game/source/config/CfgLoginReward.ts` | `a7a37hutLVCuY7vo6dP1uSM` | source | 数据适配模块，运行时数据在 data/tables/ |
| CfgLuckySpin | `chunks:///_virtual/CfgLuckySpin.ts` | `game/modules/CfgLuckySpin.js` | `game/source/config/CfgLuckySpin.ts` | `ed4fct49zJCbqBkrPRyAKAX` | source | 数据适配模块，运行时数据在 data/tables/ |
| CfgSkillInfo | `chunks:///_virtual/CfgSkillInfo.ts` | `game/modules/CfgSkillInfo.js` | `game/source/config/CfgSkillInfo.ts` | `25e99peI09FgoTilgJMTZp7` | source | - |
| CoinItem | `chunks:///_virtual/CoinItem.ts` | `game/modules/CoinItem.js` | `game/source/uiItem/CoinItem.ts` | `c3b43fuycJEPLI1Et7usH3D` | source | - |
| CoinMgr | `chunks:///_virtual/CoinMgr.ts` | `game/modules/CoinMgr.js` | `game/source/manager/CoinMgr.ts` | `dad9e++GnNNAq62LJJad40y` | source | - |
| ComboBox | `chunks:///_virtual/ComboBox.ts` | `game/modules/ComboBox.js` | `game/source/game/ComboBox.ts` | `75d5bkvGiFM3oYCJK1pcaui` | source | - |
| ComboMgr | `chunks:///_virtual/ComboMgr.ts` | `game/modules/ComboMgr.js` | `game/source/manager/ComboMgr.ts` | `7e33dktx3hEJZh58S/WeMXj` | source | - |
| CommonShelve | `chunks:///_virtual/CommonShelve.ts` | `game/modules/CommonShelve.js` | `game/source/game/CommonShelve.ts` | `a681aMn/NVED75E5Qcqy+AM` | source | - |
| CustomComponent | `chunks:///_virtual/CustomComponent.ts` | `game/modules/CustomComponent.js` | `game/source/custom_engine/CustomComponent.ts` | `7ae38OhjMRHuoq4SZegyA3K` | source | - |
| CustomNode | `chunks:///_virtual/CustomNode.ts` | `game/modules/CustomNode.js` | `game/source/custom_engine/CustomNode.ts` | `459b6g6Dx1Jl6l5jtUn6El1` | source | - |
| CustomSprite | `chunks:///_virtual/CustomSprite.ts` | `game/modules/CustomSprite.js` | `game/source/custom_engine/CustomSprite.ts` | `13bb9TshclOBrsQ2KwyYVbo` | source | - |
| debug-view-runtime-control | `chunks:///_virtual/debug-view-runtime-control.ts` | `game/modules/debug-view-runtime-control.js` | - | `b2bd1+njXxJxaFY3ymm06WU` | generated | Cocos 调试视图运行时模块；无原始 TS 对应文件 |
| Debug | `chunks:///_virtual/Debug.ts` | `game/modules/Debug.js` | `game/source/util/Debug.ts` | `24152lr7B5ApJuM1SRUJV/V` | source | - |
| DtoIconCfg | `chunks:///_virtual/DtoIconCfg.ts` | `game/modules/DtoIconCfg.js` | `game/source/dto/DtoIconCfg.ts` | `653c59U1OJLW6iZPU6MlFj6` | source | - |
| DtoIconData | `chunks:///_virtual/DtoIconData.ts` | `game/modules/DtoIconData.js` | `game/source/dto/DtoIconData.ts` | `f65592eRapGr7LbjHBnpASv` | source | - |
| DtoItem | `chunks:///_virtual/DtoItem.ts` | `game/modules/DtoItem.js` | `game/source/dto/DtoItem.ts` | `bb0abRdj4JHJ5cBJHqC60Pg` | source | - |
| DtoLevelCfg | `chunks:///_virtual/DtoLevelCfg.ts` | `game/modules/DtoLevelCfg.js` | `game/source/dto/DtoLevelCfg.ts` | `0f4bdwzf71MN4qMqBDPCF95` | source | - |
| DtoLevelData | `chunks:///_virtual/DtoLevelData.ts` | `game/modules/DtoLevelData.js` | `game/source/dto/DtoLevelData.ts` | `f9945j9F5lO9o1YtpeS08F7` | source | - |
| DtoPassReward | `chunks:///_virtual/DtoPassReward.ts` | `game/modules/DtoPassReward.js` | `game/source/dto/DtoPassReward.ts` | `93fb6FVmrxD4amnZOdFWZ9V` | source | - |
| DtoReward | `chunks:///_virtual/DtoReward.ts` | `game/modules/DtoReward.js` | `game/source/dto/DtoReward.ts` | `858f0EjULFKeZbkcqeyYP2/` | source | - |
| DtoUI | `chunks:///_virtual/DtoUI.ts` | `game/modules/DtoUI.js` | `game/source/dto/DtoUI.ts` | `865caVG9sJJx43oQLndbIh/` | source | - |
| EffectFreeze | `chunks:///_virtual/EffectFreeze.ts` | `game/modules/EffectFreeze.js` | `game/source/game/EffectFreeze.ts` | `9e7aexhG2pDCacTPHtgSOhx` | source | - |
| EffectMgr | `chunks:///_virtual/EffectMgr.ts` | `game/modules/EffectMgr.js` | `game/source/manager/EffectMgr.ts` | `99a40aze3xOO67617VY8NcF` | source | - |
| EffectRedAlert | `chunks:///_virtual/EffectRedAlert.ts` | `game/modules/EffectRedAlert.js` | `game/source/game/EffectRedAlert.ts` | `b7f21+tVI1AOoD8l7luTPtj` | source | - |
| EventMgr | `chunks:///_virtual/EventMgr.ts` | `game/modules/EventMgr.js` | `game/source/manager/EventMgr.ts` | `9a7eeGxAlpJtL+cEC8eYEST` | source | - |
| EventType | `chunks:///_virtual/EventType.ts` | `game/modules/EventType.js` | `game/source/enum/EventType.ts` | `c7fa9QGmtBBIYbVwCza1OPL` | source | - |
| Floaty | `chunks:///_virtual/Floaty.ts` | `game/modules/Floaty.js` | `game/source/misc/Floaty.ts` | `eaa9aoMVFhCBY75R+3rE22h` | source | - |
| GameMgr | `chunks:///_virtual/GameMgr.ts` | `game/modules/GameMgr.js` | `game/source/manager/GameMgr.ts` | `fc7ab3uDQZMAr967dLrCODL` | source | - |
| GameSave | `chunks:///_virtual/GameSave.ts` | `game/modules/GameSave.js` | `game/source/manager/GameSave.ts` | `e8276cE4S9Hg4dt+KdeZgcN` | source | - |
| GameUtil | `chunks:///_virtual/GameUtil.ts` | `game/modules/GameUtil.js` | `game/source/util/GameUtil.ts` | `b956eqLejpFnJDRlZtO5TSN` | source | - |
| Global | `chunks:///_virtual/Global.ts` | `game/modules/Global.js` | `game/source/Global.ts` | `8b9a7NpOe9NkL6FuWN5ugvn` | source | - |
| Goods | `chunks:///_virtual/Goods.ts` | `game/modules/Goods.js` | `game/source/game/Goods.ts` | `11c98MJgY1AT7pHyH/0IZ9r` | source | - |
| GoodsLayout | `chunks:///_virtual/GoodsLayout.ts` | `game/modules/GoodsLayout.js` | `game/source/game/GoodsLayout.ts` | `4bc68I7UmZAv6HiiVXcJyRL` | source | - |
| InputBlock | `chunks:///_virtual/InputBlock.ts` | `game/modules/InputBlock.js` | `game/source/misc/InputBlock.ts` | `9b7dfe7eXxHR4G7BQOM8lL3` | source | - |
| ItemMgr | `chunks:///_virtual/ItemMgr.ts` | `game/modules/ItemMgr.js` | `game/source/manager/ItemMgr.ts` | `8a5f49UPdhHBq9JLMhh6us4` | source | - |
| ItemType | `chunks:///_virtual/ItemType.ts` | `game/modules/ItemType.js` | `game/source/enum/ItemType.ts` | `41e94mhPxZNyIeHSVzn2TyK` | source | - |
| LabelTick | `chunks:///_virtual/LabelTick.ts` | `game/modules/LabelTick.js` | `game/source/uiExtend/LabelTick.ts` | `51142RfrX9DBphTxuZVxIcR` | source | - |
| main | `chunks:///_virtual/main` | `game/modules/main` | - | - | generated | SystemJS 虚拟入口；由 prerequisite.js 注册 |
| Main | `chunks:///_virtual/Main.ts` | `game/modules/Main.js` | `game/source/Main.ts` | `92bdbvKAAdD+ZRAMRSW3Jtb` | source | - |
| MainItem | `chunks:///_virtual/MainItem.ts` | `game/modules/MainItem.js` | `game/source/uiItem/MainItem.ts` | `c23355pf51HnrCLBl2fKRjQ` | source | - |
| MathUtil | `chunks:///_virtual/MathUtil.ts` | `game/modules/MathUtil.js` | `game/source/util/MathUtil.ts` | `c0d0eKNUodPMpvHFwYAailX` | source | - |
| Mode | `chunks:///_virtual/Mode.ts` | `game/modules/Mode.js` | `game/source/enum/Mode.ts` | `51e1axOM+VCwrP9FDuFyide` | source | - |
| ObjUtil | `chunks:///_virtual/ObjUtil.ts` | `game/modules/ObjUtil.js` | `game/source/util/ObjUtil.ts` | `f8d2eYTnyVHsraF02+wD5vV` | source | - |
| PassRewardItem | `chunks:///_virtual/PassRewardItem.ts` | `game/modules/PassRewardItem.js` | `game/source/uiItem/PassRewardItem.ts` | `9dcc4Z2wSFM/LXwf99wJrU6` | source | - |
| RecoveryMgr | `chunks:///_virtual/RecoveryMgr.ts` | `game/modules/RecoveryMgr.js` | `game/source/manager/RecoveryMgr.ts` | `78b3bfzHvVJpo8cicf+bJeK` | source | - |
| ResMgr | `chunks:///_virtual/ResMgr.ts` | `game/modules/ResMgr.js` | `game/source/manager/ResMgr.ts` | `18c3dVw309B54avl/M3OpJz` | source | - |
| RewardMgr | `chunks:///_virtual/RewardMgr.ts` | `game/modules/RewardMgr.js` | `game/source/manager/RewardMgr.ts` | `e9b11WOJXRM353UWyH5IdTr` | source | - |
| Rotate | `chunks:///_virtual/Rotate.ts` | `game/modules/Rotate.js` | `game/source/misc/Rotate.ts` | `6b9acTOKxRPKb2/9uu/YoaF` | source | - |
| Setting | `chunks:///_virtual/Setting.ts` | `game/modules/Setting.js` | `game/source/Setting.ts` | `0e05aoaPd5CY4kLpLQPu/rr` | source | - |
| Shake | `chunks:///_virtual/Shake.ts` | `game/modules/Shake.js` | `game/source/misc/Shake.ts` | `2840flXNXFIw61GRpqk0Yl7` | source | - |
| ShelveBase | `chunks:///_virtual/ShelveBase.ts` | `game/modules/ShelveBase.js` | `game/source/scriptBase/ShelveBase.ts` | `04238mGxFJID6A6C9vG2iZQ` | source | - |
| ShelveLocker | `chunks:///_virtual/ShelveLocker.ts` | `game/modules/ShelveLocker.js` | `game/source/game/ShelveLocker.ts` | `2b95fT+AlBNDITnn29g4dF4` | source | - |
| ShelveType | `chunks:///_virtual/ShelveType.ts` | `game/modules/ShelveType.js` | `game/source/enum/ShelveType.ts` | `d2131w1y1xCTZl85kBVVdmb` | source | - |
| SkillBox | `chunks:///_virtual/SkillBox.ts` | `game/modules/SkillBox.js` | `game/source/game/SkillBox.ts` | `91afeFPhJ5NMIErfu4XaCg6` | source | - |
| SkillMgr | `chunks:///_virtual/SkillMgr.ts` | `game/modules/SkillMgr.js` | `game/source/manager/SkillMgr.ts` | `504d35+dRRDg7MeOuS5p6nZ` | source | - |
| SkillType | `chunks:///_virtual/SkillType.ts` | `game/modules/SkillType.js` | `game/source/enum/SkillType.ts` | `33fdaV78DhHR7dAPW9O4uUX` | source | - |
| SmallShelve | `chunks:///_virtual/SmallShelve.ts` | `game/modules/SmallShelve.js` | `game/source/game/SmallShelve.ts` | `92a17HsV4RFPph7yMxO3f4E` | source | - |
| Stage | `chunks:///_virtual/Stage.ts` | `game/modules/Stage.js` | `game/source/game/Stage.ts` | `c58abNYUNtGTaELPAn63nuw` | source | - |
| Switcher | `chunks:///_virtual/Switcher.ts` | `game/modules/Switcher.js` | `game/source/uiExtend/Switcher.ts` | `4772djXcEtGA6kLkEpQOZ0P` | source | - |
| TimeItem | `chunks:///_virtual/TimeItem.ts` | `game/modules/TimeItem.js` | `game/source/uiItem/TimeItem.ts` | `593ddSYq4ZHBoj/JdZW6MVk` | source | - |
| TimeMgr | `chunks:///_virtual/TimeMgr.ts` | `game/modules/TimeMgr.js` | `game/source/manager/TimeMgr.ts` | `9a36f5tW91Gnp7BUUKYgzAc` | source | - |
| TimeUtil | `chunks:///_virtual/TimeUtil.ts` | `game/modules/TimeUtil.js` | `game/source/util/TimeUtil.ts` | `07102ahwgBFAZu9HS4Vb7oI` | source | - |
| ToggleExtend | `chunks:///_virtual/ToggleExtend.ts` | `game/modules/ToggleExtend.js` | `game/source/uiExtend/ToggleExtend.ts` | `659835HTWVKuJmTmyMhYpAf` | source | - |
| TransMgr | `chunks:///_virtual/TransMgr.ts` | `game/modules/TransMgr.js` | `game/source/manager/TransMgr.ts` | `88497k+5f9KULRgNBBQ+4rG` | source | - |
| UI | `chunks:///_virtual/UI.ts` | `game/modules/UI.js` | `game/source/enum/UI.ts` | `c8a08FNqdVHerPY3SIR/1mx` | source | - |
| UIBase | `chunks:///_virtual/UIBase.ts` | `game/modules/UIBase.js` | `game/source/scriptBase/UIBase.ts` | `111f5/XxgFNRZIz42m+GGGf` | source | - |
| UIGame | `chunks:///_virtual/UIGame.ts` | `game/modules/UIGame.js` | `game/source/ui/UIGame.ts` | `5a290LFtFJJ5ZYlc/D14Koe` | source | - |
| UIGetReward | `chunks:///_virtual/UIGetReward.ts` | `game/modules/UIGetReward.js` | `game/source/ui/UIGetReward.ts` | `3dacejXH+FCKJvYNd+LzdQ0` | source | - |
| UIGetSkill | `chunks:///_virtual/UIGetSkill.ts` | `game/modules/UIGetSkill.js` | `game/source/ui/UIGetSkill.ts` | `333753Gd1FCyY4QcMBJbrLh` | source | - |
| UILoading | `chunks:///_virtual/UILoading.ts` | `game/modules/UILoading.js` | `game/source/ui/UILoading.ts` | `463adtvr1NIE7o+HgOS2qHr` | source | - |
| UILoginReward | `chunks:///_virtual/UILoginReward.ts` | `game/modules/UILoginReward.js` | `game/source/ui/UILoginReward.ts` | `097caW3VFlD54SnGMMx5aKh` | source | - |
| UILuckySpin | `chunks:///_virtual/UILuckySpin.ts` | `game/modules/UILuckySpin.js` | `game/source/ui/UILuckySpin.ts` | `e07d7Xty35CRJ9f9kca17D7` | source | - |
| UIMain | `chunks:///_virtual/UIMain.ts` | `game/modules/UIMain.js` | `game/source/ui/UIMain.ts` | `42a4bWaBc5LXqIzmJWG7ZBL` | source | - |
| UIMgr | `chunks:///_virtual/UIMgr.ts` | `game/modules/UIMgr.js` | `game/source/manager/UIMgr.ts` | `2c522MGUX1PWKPa7gjqU4Ab` | source | - |
| UIPassReward | `chunks:///_virtual/UIPassReward.ts` | `game/modules/UIPassReward.js` | `game/source/ui/UIPassReward.ts` | `a4299iX6cZCU5/ndRDbdW7L` | source | - |
| UIPause | `chunks:///_virtual/UIPause.ts` | `game/modules/UIPause.js` | `game/source/ui/UIPause.ts` | `c45adto9B5CUrySVMJAHfZl` | source | - |
| UIRecovery | `chunks:///_virtual/UIRecovery.ts` | `game/modules/UIRecovery.js` | `game/source/ui/UIRecovery.ts` | `4121fz7NshJL6r1eiDKgdIv` | source | - |
| UISetting | `chunks:///_virtual/UISetting.ts` | `game/modules/UISetting.js` | `game/source/ui/UISetting.ts` | `1688935OTdLTa7kX+us2P+o` | source | - |
| UIStageTip | `chunks:///_virtual/UIStageTip.ts` | `game/modules/UIStageTip.js` | `game/source/ui/UIStageTip.ts` | `20f65pXklxMXLCKLZwpj4Q3` | source | - |
| UITimeOut | `chunks:///_virtual/UITimeOut.ts` | `game/modules/UITimeOut.js` | `game/source/ui/UITimeOut.ts` | `519a2XuJHhPCIqfzNnvXoyr` | source | - |
| UIToast | `chunks:///_virtual/UIToast.ts` | `game/modules/UIToast.js` | `game/source/ui/UIToast.ts` | `77689t//+dLirYhKMrlJsQa` | source | - |
| UIType | `chunks:///_virtual/UIType.ts` | `game/modules/UIType.js` | `game/source/enum/UIType.ts` | `5e880vRZzdPbr6TDMq95Hni` | source | - |
| UIWin | `chunks:///_virtual/UIWin.ts` | `game/modules/UIWin.js` | `game/source/ui/UIWin.ts` | `53080JFSltPuag+WxVvfmJN` | source | - |
| WebLayout | `chunks:///_virtual/WebLayout.js` | `game/modules/WebLayout.js` | - | - | generated | Web 适配模块；无原始 TS 对应文件 |

## 生成/辅助模块说明

- `WebLayout`：为 Web 主页布局新增的适配模块，没有原始 Creator TS 对应文件。
- `debug-view-runtime-control`：Cocos 调试视图运行时模块，随构建产物带入。
- `main`：`chunks:///_virtual/main` 虚拟入口，由 `game/prerequisite.js` 注册。

## 可读性与构建检查（Step 6）

- 95 个模块共 13,382 行，最大行宽 125，平均行宽小于 160；无 `.min.js`、无 `eval`/`Function`。
- `game/bundle.js` 由 95 个模块 + `prerequisite.js` 组装，共 13,507 行，最大行宽 133，平均 56.1 行宽。
- 95 个模块 ID 在 bundle 中各出现一次；93 个 `_RF.push` 组件 UUID 全部保留且各出现一次。
- `game/bundle.js.map` 含 96 个 sources 和 sourcesContent；`node tools/assemble-game.cjs --check` 可校验一致性。
- **L3 缺口**：92 个有 TS 映射的模块仍使用 Babel 生成的短局部变量名；它们**不是**压缩/混淆产物，公开类名、模块 ID、`_RF.push` UUID 和序列化字段均保留。原始 TS 是 L1 可读源码；运行时 JS 是 L2 运行产物，逐行可读性逐步改善。
- 如果后续要把某个模块提升到 L3（逐行可读），应在 `game/modules.json` 的 `notes` 中记录，并在 `docs/validation.md` 保留验证结果。

## 资源包说明

`bundle` 字段暂为空：业务脚本是全局脚本包，不归属于 `assets/game`、`assets/ui` 等单一资源包。Prefab/场景对脚本组件的引用由组件 UUID 和 Cocos 资源包共同决定。
