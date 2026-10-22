System.register(
    "chunks:///_virtual/UILuckySpin.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./UIBase.ts",
        "./CoinItem.ts",
        "./CoinMgr.ts",
        "./UI.ts",
        "./AudioMgr.ts",
        "./RewardMgr.ts",
        "./RecoveryMgr.ts",
        "./GameSave.ts",
    ],
    function (n) {
        var i, t, e, o, s, a, r, c, u, l, p, f, h, d, g, C;
        return {
            setters: [
                function (n) {
                    i = n.inheritsLoose;
                },
                function (n) {
                    ((t = n.cclegacy),
                        (e = n._decorator),
                        (o = n.Widget),
                        (s = n.math),
                        (a = n.Button),
                        (r = n.Toggle),
                        (c = n.tween));
                },
                function (n) {
                    u = n.UIBase;
                },
                function (n) {
                    l = n.CoinItem;
                },
                function (n) {
                    p = n.CoinMgr;
                },
                function (n) {
                    f = n.UI;
                },
                function (n) {
                    h = n.AudioMgr;
                },
                function (n) {
                    d = n.RewardMgr;
                },
                function (n) {
                    g = n.RecoveryMgr;
                },
                function (n) {
                    C = n.failure;
                },
            ],
            execute: function () {
                var m;
                t._RF.push(
                    {},
                    "e07d7Xty35CRJ9f9kca17D7",
                    "UILuckySpin",
                    void 0,
                );
                var v = e.ccclass,
                    y = e.requireComponent;
                n(
                    "UILuckySpin",
                    v("UI/UILuckySpin")(
                        (m =
                            y(o)(
                                (m = (function (n) {
                                    function t() {
                                        for (
                                            var i,
                                                t = arguments.length,
                                                e = new Array(t),
                                                o = 0;
                                            o < t;
                                            o++
                                        )
                                            e[o] = arguments[o];
                                        return (
                                            ((i =
                                                n.call.apply(
                                                    n,
                                                    [this].concat(e),
                                                ) || this).spinning = !1),
                                            (i.tw = null),
                                            i
                                        );
                                    }
                                    i(t, n);
                                    var e = t.prototype;
                                    return (
                                        (e.onOpen = function () {
                                            this.findComp("CoinItem", l).init(
                                                p.CurCoin,
                                            );
                                        }),
                                        (e.onBtnSpinClick = function () {
                                            var n = this;
                                            if (!this.spinning) {
                                                this.spinning = !0;
                                                var i =
                                                        this.findNode(
                                                            "ZhuanPan",
                                                        ).angle -
                                                        (720 +
                                                            60 *
                                                                s.randomRangeInt(
                                                                    0,
                                                                    6,
                                                                )),
                                                    t = Math.round(
                                                        (6 + (i % 360) / 60) %
                                                            6,
                                                    ),
                                                    e = function () {
                                                        return n.isValid
                                                            ? d.claimSpinReward(
                                                                  t,
                                                              )
                                                            : C("unavailable");
                                                    },
                                                    o = function (t) {
                                                        return n.playSpin(i, t);
                                                    },
                                                    a = e();
                                                a.ok
                                                    ? o(a.value)
                                                    : ((this.spinning = !1),
                                                      "storage_error" ===
                                                      a.reason
                                                          ? g.retry(e, o)
                                                          : this.open(
                                                                f.Toast,
                                                                g.message(
                                                                    a.reason,
                                                                ),
                                                            ));
                                            }
                                        }),
                                        (e.playSpin = function (n, i) {
                                            var t = this;
                                            this.spinning = !0;
                                            var e = this.findNode("ZhuanPan");
                                            (this.findComp(
                                                "CoinItem",
                                                l,
                                            ).updateCoin(p.CurCoin, !1),
                                                (this.findComp(
                                                    "BtnSpin",
                                                    a,
                                                ).interactable = !1),
                                                (this.findComp(
                                                    "BtnClose",
                                                    a,
                                                ).interactable = !1),
                                                h.playSfx("抽奖转盘"));
                                            var o = this.findComp("Lights", r);
                                            (this.schedule(
                                                function () {
                                                    o.isChecked = !o.isChecked;
                                                },
                                                0.25,
                                                10,
                                            ),
                                                (this.tw = c(e)
                                                    .to(
                                                        3,
                                                        { angle: n },
                                                        { easing: "sineInOut" },
                                                    )
                                                    .call(function () {
                                                        ((t.findComp(
                                                            "BtnSpin",
                                                            a,
                                                        ).interactable = !0),
                                                            (t.findComp(
                                                                "BtnClose",
                                                                a,
                                                            ).interactable =
                                                                !0),
                                                            t.open(
                                                                f.GetReward,
                                                                i,
                                                            ),
                                                            t.scheduleOnce(
                                                                function () {
                                                                    t.spinning =
                                                                        !1;
                                                                },
                                                            ));
                                                    })
                                                    .start()));
                                        }),
                                        (e.onBtnCloseClick = function () {
                                            this.spinning || this.close();
                                        }),
                                        (e.onClose = function () {
                                            (this.tw && this.tw.stop(),
                                                this.unscheduleAllCallbacks());
                                        }),
                                        t
                                    );
                                })(u)),
                            ) || m),
                    ) || m,
                );
                t._RF.pop();
            },
        };
    },
);
