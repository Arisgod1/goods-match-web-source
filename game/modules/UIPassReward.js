System.register(
    "chunks:///_virtual/UIPassReward.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./UIBase.ts",
        "./GameMgr.ts",
        "./CoinItem.ts",
        "./CoinMgr.ts",
        "./EventMgr.ts",
        "./EventType.ts",
        "./RewardMgr.ts",
        "./RecoveryMgr.ts",
        "./GameSave.ts",
        "./UI.ts",
    ],
    function (e) {
        var t, n, s, i, r, o, a, c, u, f, d, p, g, l;
        return {
            setters: [
                function (e) {
                    t = e.inheritsLoose;
                },
                function (e) {
                    ((n = e.cclegacy), (s = e._decorator), (i = e.Widget));
                },
                function (e) {
                    r = e.UIBase;
                },
                function (e) {
                    o = e.GameMgr;
                },
                function (e) {
                    a = e.CoinItem;
                },
                function (e) {
                    c = e.CoinMgr;
                },
                function (e) {
                    u = e.EventMgr;
                },
                function (e) {
                    f = e.EventType;
                },
                function (e) {
                    d = e.RewardMgr;
                },
                function (e) {
                    p = e.RecoveryMgr;
                },
                function (e) {
                    g = e.failure;
                },
                function (e) {
                    l = e.UI;
                },
            ],
            execute: function () {
                var v;
                n._RF.push(
                    {},
                    "a4299iX6cZCU5/ndRDbdW7L",
                    "UIPassReward",
                    void 0,
                );
                var h = s.ccclass,
                    C = s.requireComponent;
                e(
                    "UIPassReward",
                    h("UI/UIPassReward")(
                        (v =
                            C(i)(
                                (v = (function (e) {
                                    function n() {
                                        for (
                                            var t,
                                                n = arguments.length,
                                                s = new Array(n),
                                                i = 0;
                                            i < n;
                                            i++
                                        )
                                            s[i] = arguments[i];
                                        return (
                                            ((t =
                                                e.call.apply(
                                                    e,
                                                    [this].concat(s),
                                                ) || this).processing = !1),
                                            t
                                        );
                                    }
                                    t(n, e);
                                    var s = n.prototype;
                                    return (
                                        (s.onOpen = function () {
                                            this.updateState();
                                        }),
                                        (s.updateState = function () {
                                            this.findComp("CoinItem", a).init(
                                                c.CurCoin,
                                            );
                                            var e =
                                                o.CurPassedLevel >=
                                                d.NextPassTarget;
                                            ((this.findNode("BtnGet").active =
                                                e),
                                                (this.findNode(
                                                    "BtnContinue",
                                                ).active = !e));
                                        }),
                                        (s.onBtnCloseClick = function () {
                                            this.processing || this.close();
                                        }),
                                        (s.onBtnGetClick = function () {
                                            var e = this;
                                            if (!this.processing) {
                                                this.processing = !0;
                                                var t = function () {
                                                        return e.isValid
                                                            ? d.claimPassReward()
                                                            : g("unavailable");
                                                    },
                                                    n = function (t) {
                                                        (e.updateState(),
                                                            u.emit(
                                                                f.GetPassReward,
                                                            ),
                                                            e.open(
                                                                l.GetReward,
                                                                t,
                                                            ),
                                                            e.scheduleOnce(
                                                                function () {
                                                                    e.processing =
                                                                        !1;
                                                                },
                                                                0.3,
                                                            ));
                                                    },
                                                    s = t();
                                                s.ok
                                                    ? n(s.value)
                                                    : ((this.processing = !1),
                                                      "storage_error" ===
                                                      s.reason
                                                          ? p.retry(t, n)
                                                          : this.open(
                                                                l.Toast,
                                                                p.message(
                                                                    s.reason,
                                                                ),
                                                            ));
                                            }
                                        }),
                                        n
                                    );
                                })(r)),
                            ) || v),
                    ) || v,
                );
                n._RF.pop();
            },
        };
    },
);
