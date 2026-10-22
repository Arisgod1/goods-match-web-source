System.register("chunks:///_virtual/Mode.ts", ["cc"], function (e) {
    var t;
    return {
        setters: [
            function (e) {
                t = e.cclegacy;
            },
        ],
        execute: function () {
            t._RF.push({}, "51e1axOM+VCwrP9FDuFyide", "Mode", void 0);
            (e(
                "Mode",
                (function (e) {
                    return (
                        (e[(e.tp = 0)] = "tp"),
                        (e[(e.gs = 1)] = "gs"),
                        (e[(e.ls = 2)] = "ls"),
                        e
                    );
                })({}),
            ),
                e("ModeName", ["tp", "gs", "ls"]));
            t._RF.pop();
        },
    };
});
