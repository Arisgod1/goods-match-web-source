// Home lifecycle and clear-save confirmation. Serialized name/registration ID are stable.
System.register(
  "chunks:///_virtual/UIMain.ts",
  [
    "cc",
    "./UIBase.ts",
    "./UI.ts",
    "./GameMgr.ts",
    "./CoinItem.ts",
    "./CoinMgr.ts",
    "./AudioMgr.ts",
    "./RewardMgr.ts",
    "./UIMgr.ts",
    "./GameSave.ts",
    "./RecoveryMgr.ts",
    "./Mode.ts",
    "./WebLayout.js",
  ],
  function (exportModule) {
    let cc, UIBase, UI, GameMgr, CoinItem, CoinMgr, AudioMgr, RewardMgr, UIMgr;
    let GameSave, success, failure, RecoveryMgr, Mode, applyHomeLayout;
    return {
      setters: [
        (module) => {
          cc = module;
        },
        (module) => {
          UIBase = module.UIBase;
        },
        (module) => {
          UI = module.UI;
        },
        (module) => {
          GameMgr = module.GameMgr;
        },
        (module) => {
          CoinItem = module.CoinItem;
        },
        (module) => {
          CoinMgr = module.CoinMgr;
        },
        (module) => {
          AudioMgr = module.AudioMgr;
        },
        (module) => {
          RewardMgr = module.RewardMgr;
        },
        (module) => {
          UIMgr = module.UIMgr;
        },
        (module) => {
          GameSave = module.GameSave;
          success = module.success;
          failure = module.failure;
        },
        (module) => {
          RecoveryMgr = module.RecoveryMgr;
        },
        (module) => {
          Mode = module.Mode;
        },
        (module) => {
          applyHomeLayout = module.applyHomeLayout;
        },
      ],
      execute: function () {
        cc.cclegacy._RF.push(
          {},
          "42a4bWaBc5LXqIzmJWG7ZBL",
          "UIMain",
          undefined,
        );
        class UIMain extends UIBase {
          constructor(...args) {
            super(...args);
            this.pageView = null;
            this.coinItem = null;
            this.hand = null;
          }
          onLoad() {
            this.pageView = this.findComp("PageView", cc.PageView);
            this.coinItem = this.findComp("CoinItem", CoinItem);
            this.hand = this.findNode("Tip/Hand");
          }
          start() {
            cc.tween(this.hand)
              .to(1, { position: cc.v3(200, 0, 0) })
              .to(1, { position: cc.v3(-200, 0, 0) })
              .union()
              .repeatForever()
              .start();
          }
          onOpen() {
            applyHomeLayout(this.node);
            GameMgr.leavingHome = false;
            this.pageView.scrollToPage(GameMgr.mode, 0);
            this.coinItem.init(CoinMgr.CurCoin);
            AudioMgr.playBgm("主界面音乐");
            this.scheduleOnce(() => {
              if (
                !GameMgr.leavingHome &&
                UIMgr.get(UI.Main) === this &&
                !UIMgr.get(UI.Recovery) &&
                RewardMgr.canClaimDaily()
              ) {
                this.open(UI.LoginReward);
              }
            });
          }
          onClose() {
            this.unscheduleAllCallbacks();
          }
          onBtnClearSaveClick() {
            if (GameMgr.leavingHome || UIMgr.get(UI.Main) !== this) return;
            RecoveryMgr.show({
              title: "清除存档？",
              message:
                "将重置关卡进度、金币、道具、奖励领取记录和设置。此操作无法撤销，确定清除吗？",
              actions: [
                { label: "取消", run: () => success() },
                {
                  label: "确定清除",
                  run: () =>
                    this.isValid &&
                    !GameMgr.leavingHome &&
                    UIMgr.get(UI.Main) === this
                      ? GameSave.reset()
                      : failure("unavailable"),
                  onSuccess: () => {
                    GameMgr.mode = Mode.tp;
                    UIMgr.close(UI.Main);
                    UIMgr.open(UI.Main);
                    UIMgr.open(UI.Toast, "存档已清除");
                  },
                },
              ],
            });
          }
          onBtnSettingClick() {
            this.open(UI.Setting);
          }
          onBtnLuckySpinClick() {
            this.open(UI.LuckySpin);
          }
          onBtnPassRewardClick() {
            this.open(UI.PassReward);
          }
        }
        const withWidget =
          cc._decorator.requireComponent(cc.Widget)(UIMain) || UIMain;
        const registered =
          cc._decorator.ccclass("UI/UIMain")(withWidget) || withWidget;
        exportModule("UIMain", registered);
        cc.cclegacy._RF.pop();
      },
    };
  },
);
