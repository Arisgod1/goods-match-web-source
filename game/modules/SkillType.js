System.register("chunks:///_virtual/SkillType.ts", ["cc"], function (e) {
    var i;
    return {
        setters: [
            function (e) {
                i = e.cclegacy;
            },
        ],
        execute: function () {
            i._RF.push({}, "33fdaV78DhHR7dAPW9O4uUX", "SkillType", void 0);
            (e(
                "SkillType",
                (function (e) {
                    return (
                        (e[(e.FreezeTime = 0)] = "FreezeTime"),
                        (e[(e.EraseGroup = 1)] = "EraseGroup"),
                        (e[(e.RefreshPosition = 2)] = "RefreshPosition"),
                        (e[(e.DoubleCoin = 3)] = "DoubleCoin"),
                        e
                    );
                })({}),
            ),
                e("SkillName", [
                    "冰冻道具",
                    "灯泡道具",
                    "转换道具",
                    "星星道具",
                ]));
            i._RF.pop();
        },
    };
});
