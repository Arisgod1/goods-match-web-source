System.register(
    "chunks:///_virtual/ItemMgr.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./CfgItem.ts",
        "./GameSave.ts",
    ],
    function (e) {
        var t, n, r, i, u, o;
        return {
            setters: [
                function (e) {
                    t = e.createForOfIteratorHelperLoose;
                },
                function (e) {
                    n = e.cclegacy;
                },
                function (e) {
                    r = e.CfgItem;
                },
                function (e) {
                    ((i = e.GameSave), (u = e.failure), (o = e.success));
                },
            ],
            execute: function () {
                n._RF.push({}, "8a5f49UPdhHBq9JLMhh6us4", "ItemMgr", void 0);
                e(
                    "ItemMgr",
                    (function () {
                        function e() {}
                        return (
                            (e.getCnt = function (e) {
                                var t, n;
                                return null !=
                                    (t =
                                        null == (n = i.Data)
                                            ? void 0
                                            : n.items[e])
                                    ? t
                                    : 0;
                            }),
                            (e.getType = function (e) {
                                var t;
                                return null == (t = r[e]) ? void 0 : t.type;
                            }),
                            (e.applyTo = function (e, n, i) {
                                if (
                                    (void 0 === i && (i = 0),
                                    !Number.isSafeInteger(i) ||
                                        i < 0 ||
                                        !n.length ||
                                        n.some(function (e) {
                                            return (
                                                !Number.isInteger(e.itemId) ||
                                                !r[e.itemId] ||
                                                !Number.isSafeInteger(e.cnt) ||
                                                e.cnt <= 0
                                            );
                                        }))
                                )
                                    return u("invalid_config");
                                if (e.items[0] < i)
                                    return u("insufficient_coins");
                                e.items[0] -= i;
                                for (var c, s = t(n); !(c = s()).done; ) {
                                    var a = c.value;
                                    e.items[a.itemId] += a.cnt;
                                }
                                return (
                                    (e.items[0] = Math.min(
                                        9999999,
                                        e.items[0],
                                    )),
                                    o()
                                );
                            }),
                            (e.tryApplyRewards = function (e, t) {
                                var n = this;
                                return (
                                    void 0 === t && (t = 0),
                                    i.transact(function (r) {
                                        return n.applyTo(r, e, t);
                                    })
                                );
                            }),
                            e
                        );
                    })(),
                );
                n._RF.pop();
            },
        };
    },
);
