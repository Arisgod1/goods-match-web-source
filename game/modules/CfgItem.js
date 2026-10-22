System.register(
    "chunks:///_virtual/CfgItem.ts",
    ["cc", "./Bundle.ts", "./ItemType.ts", "./SkillType.ts"],
    function (e) {
        var i, n, t, l;
        return {
            setters: [
                function (e) {
                    i = e.cclegacy;
                },
                function (e) {
                    n = e.Bundle;
                },
                function (e) {
                    t = e.ItemType;
                },
                function (e) {
                    l = e.SkillType;
                },
            ],
            execute: function () {
                i._RF.push({}, "2ef25I11RRIUrJ+H0hYm0Ro", "CfgItem", void 0);
                e("CfgItem", [
                    {
                        id: 0,
                        name: "星星币",
                        type: t.Coin,
                        bundle: n.Icon,
                        icon: "item/icon_xxb",
                    },
                    {
                        id: 1,
                        name: "冰冻道具",
                        type: t.Skill,
                        skillType: l.FreezeTime,
                        bundle: n.Icon,
                        icon: globalThis.WebGameConfig.skillIcons[0],
                    },
                    {
                        id: 2,
                        name: "灯泡道具",
                        type: t.Skill,
                        skillType: l.EraseGroup,
                        bundle: n.Icon,
                        icon: globalThis.WebGameConfig.skillIcons[1],
                    },
                    {
                        id: 3,
                        name: "转换道具",
                        type: t.Skill,
                        skillType: l.RefreshPosition,
                        bundle: n.Icon,
                        icon: globalThis.WebGameConfig.skillIcons[2],
                    },
                    {
                        id: 4,
                        name: "星星道具",
                        type: t.Skill,
                        skillType: l.DoubleCoin,
                        bundle: n.Icon,
                        icon: globalThis.WebGameConfig.skillIcons[3],
                    },
                ]);
                i._RF.pop();
            },
        };
    },
);
