System.register(
    "chunks:///_virtual/ComboMgr.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc", "./Global.ts", "./TimeMgr.ts"],
    function (o) {
        var t, n, e, u, r;
        return {
            setters: [
                function (o) {
                    t = o.createClass;
                },
                function (o) {
                    ((n = o.cclegacy), (e = o.math));
                },
                function (o) {
                    u = o.Global;
                },
                function (o) {
                    r = o.TimeMgr;
                },
            ],
            execute: function () {
                (n._RF.push({}, "7e33dktx3hEJZh58S/WeMXj", "ComboMgr", void 0),
                    (o(
                        "ComboMgr",
                        (function () {
                            function o() {}
                            return (
                                t(o, null, [
                                    {
                                        key: "CurCombo",
                                        get: function () {
                                            return this.curCombo;
                                        },
                                        set: function (o) {
                                            ((this.curCombo = e.clamp(
                                                o,
                                                0,
                                                u.Max_Combo,
                                            )),
                                                r.delay());
                                        },
                                    },
                                ]),
                                o
                            );
                        })(),
                    ).curCombo = 0),
                    n._RF.pop());
            },
        };
    },
);
