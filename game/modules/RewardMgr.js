System.register(
    "chunks:///_virtual/RewardMgr.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./CfgLoginReward.ts",
        "./CfgLuckySpin.ts",
        "./cfg_passReward.ts",
        "./Global.ts",
        "./MathUtil.ts",
        "./GameSave.ts",
        "./ItemMgr.ts",
    ],
    function (t) {
        var n, a, e, r, i, u, l, o, c, s, d;
        return {
            setters: [
                function (t) {
                    n = t.createClass;
                },
                function (t) {
                    a = t.cclegacy;
                },
                function (t) {
                    e = t.CfgLoginReward;
                },
                function (t) {
                    r = t.CfgLuckySpin;
                },
                function (t) {
                    i = t.CfgPassReward;
                },
                function (t) {
                    u = t.Global;
                },
                function (t) {
                    l = t.MathUtil;
                },
                function (t) {
                    ((o = t.GameSave), (c = t.failure), (s = t.success));
                },
                function (t) {
                    d = t.ItemMgr;
                },
            ],
            execute: function () {
                a._RF.push({}, "e9b11WOJXRM353UWyH5IdTr", "RewardMgr", void 0);
                t(
                    "RewardMgr",
                    (function () {
                        function t() {}
                        return (
                            (t.day = function (t) {
                                var n = new Date(t);
                                return (
                                    n.getFullYear() +
                                    "-" +
                                    ("0" + (n.getMonth() + 1)).slice(-2) +
                                    "-" +
                                    ("0" + n.getDate()).slice(-2)
                                );
                            }),
                            (t.canClaimDaily = function (t) {
                                return (
                                    void 0 === t && (t = Date.now()),
                                    !!o.Data &&
                                        o.Data.dailyClaimDate !== this.day(t)
                                );
                            }),
                            (t.claimDaily = function (t) {
                                void 0 === t && (t = Date.now());
                                var n = this.day(t),
                                    a = e.map(function (t) {
                                        return { itemId: t.itemId, cnt: t.cnt };
                                    });
                                return o.transact(function (t) {
                                    if (t.dailyClaimDate === n)
                                        return c("unavailable");
                                    var e = d.applyTo(t, a);
                                    return e.ok
                                        ? ((t.dailyClaimDate = n), s(a))
                                        : c(e.reason);
                                });
                            }),
                            (t.claimPassReward = function () {
                                var t = l.randWeight(
                                        i.map(function (t) {
                                            return t.weight;
                                        }),
                                    ),
                                    n = i[t];
                                if (!n) return c("invalid_config");
                                var a = [{ itemId: n.itemId, cnt: n.cnt }];
                                return o.transact(function (t) {
                                    var n = t.lastPassReward + 5;
                                    if (
                                        t.levels.reduce(function (t, n) {
                                            return t + n;
                                        }, 0) < n
                                    )
                                        return c("unavailable");
                                    var e = d.applyTo(t, a);
                                    return e.ok
                                        ? ((t.lastPassReward = n), s(a))
                                        : c(e.reason);
                                });
                            }),
                            (t.claimSpinReward = function (t) {
                                var n = r[t];
                                if (!Number.isInteger(t) || !n)
                                    return c("invalid_config");
                                var a = [{ itemId: n.itemId, cnt: n.cnt }],
                                    e = d.tryApplyRewards(
                                        a,
                                        u.Lucky_Spin_Coin_Cost,
                                    );
                                return e.ok ? s(a) : c(e.reason);
                            }),
                            (t.rollWinReward = function (t) {
                                var n = l.randWeight([5, 1, 1, 1, 1]);
                                if (n < 0) return null;
                                var a = [2, 3, 5, 3, 4][n];
                                return {
                                    slotIndex: n,
                                    multiplier: a,
                                    amount:
                                        (u.Normal_Level_Coin_Default_Cnt +
                                            t * u.Normal_Level_Coin_Add_Cnt) *
                                        a,
                                };
                            }),
                            n(t, null, [
                                {
                                    key: "NextPassTarget",
                                    get: function () {
                                        var t, n;
                                        return (
                                            (null !=
                                            (t =
                                                null == (n = o.Data)
                                                    ? void 0
                                                    : n.lastPassReward)
                                                ? t
                                                : 0) + 5
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(),
                );
                a._RF.pop();
            },
        };
    },
);
