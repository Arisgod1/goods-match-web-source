System.register(
  "chunks:///_virtual/CfgSkillInfo.ts",
  ["cc"],
  function (exportModule) {
    let cclegacy;
    return {
      setters: [
        function (cc) {
          cclegacy = cc.cclegacy;
        },
      ],
      execute: function () {
        cclegacy._RF.push(
          {},
          "25e99peI09FgoTilgJMTZp7",
          "CfgSkillInfo",
          undefined,
        );
        const config = globalThis.WebGameConfig;
        const names = ["冰冻道具", "灯泡道具", "转换道具", "星星道具"];
        const descriptions = [
          `冰冻时间${config.gameplay.Freeze_Time}秒`,
          "立即消除三组物品",
          "重置所有物品的位置",
          `获得星星双倍${config.gameplay.Double_Coin_Duration}秒`,
        ];
        exportModule(
          "CfgSkillInfo",
          names.map((name, id) => ({
            id,
            name,
            desc: descriptions[id],
            icon: config.skillIcons[id],
          })),
        );
        cclegacy._RF.pop();
      },
    };
  },
);
