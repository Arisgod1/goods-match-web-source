System.register(
    "chunks:///_virtual/CoinMgr.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemMgr.ts"],
    function (n) {
        var t, e, r;
        return {
            setters: [
                function (n) {
                    t = n.createClass;
                },
                function (n) {
                    e = n.cclegacy;
                },
                function (n) {
                    r = n.ItemMgr;
                },
            ],
            execute: function () {
                e._RF.push({}, "dad9e++GnNNAq62LJJad40y", "CoinMgr", void 0);
                n(
                    "CoinMgr",
                    (function () {
                        function n() {}
                        return (
                            t(n, null, [
                                {
                                    key: "CurCoin",
                                    get: function () {
                                        return r.getCnt(0);
                                    },
                                },
                            ]),
                            n
                        );
                    })(),
                );
                e._RF.pop();
            },
        };
    },
);
