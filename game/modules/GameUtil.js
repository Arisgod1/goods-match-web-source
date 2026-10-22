System.register("chunks:///_virtual/GameUtil.ts", ["cc"], function (t) {
    var e, c, n;
    return {
        setters: [
            function (t) {
                ((e = t.cclegacy), (c = t.sys), (n = t.game));
            },
        ],
        execute: function () {
            e._RF.push({}, "b956eqLejpFnJDRlZtO5TSN", "GameUtil", void 0);
            t(
                "GameUtil",
                (function () {
                    function t() {}
                    return (
                        (t.exit = function () {
                            switch (c.platform) {
                                case c.Platform.MOBILE_BROWSER:
                                case c.Platform.DESKTOP_BROWSER:
                                case c.Platform.ANDROID:
                                    n.end();
                            }
                        }),
                        t
                    );
                })(),
            );
            e._RF.pop();
        },
    };
});
