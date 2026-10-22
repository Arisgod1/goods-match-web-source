System.register("chunks:///_virtual/ItemType.ts", ["cc"], function (e) {
    var t;
    return {
        setters: [
            function (e) {
                t = e.cclegacy;
            },
        ],
        execute: function () {
            t._RF.push({}, "41e94mhPxZNyIeHSVzn2TyK", "ItemType", void 0);
            e(
                "ItemType",
                (function (e) {
                    return (
                        (e[(e.Coin = 0)] = "Coin"),
                        (e[(e.Skill = 1)] = "Skill"),
                        (e[(e.Collection = 2)] = "Collection"),
                        e
                    );
                })({}),
            );
            t._RF.pop();
        },
    };
});
