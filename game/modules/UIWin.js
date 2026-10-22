System.register(
    "chunks:///_virtual/UIWin.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./GameMgr.ts",
        "./AudioMgr.ts",
        "./CoinMgr.ts",
        "./UI.ts",
        "./UIBase.ts",
        "./CoinItem.ts",
        "./TransMgr.ts",
    ],
    function (t) {
        var n, e, s, i, r, o, a, u, c, f, p, h, l, d, g, m, I, C;
        return {
            setters: [
                function (t) {
                    ((n = t.inheritsLoose),
                        (e = t.asyncToGenerator),
                        (s = t.regeneratorRuntime));
                },
                function (t) {
                    ((i = t.cclegacy),
                        (r = t._decorator),
                        (o = t.Widget),
                        (a = t.Label),
                        (u = t.math),
                        (c = t.tween),
                        (f = t.v3),
                        (p = t.Button));
                },
                function (t) {
                    h = t.GameMgr;
                },
                function (t) {
                    l = t.AudioMgr;
                },
                function (t) {
                    d = t.CoinMgr;
                },
                function (t) {
                    g = t.UI;
                },
                function (t) {
                    m = t.UIBase;
                },
                function (t) {
                    I = t.CoinItem;
                },
                function (t) {
                    C = t.TransMgr;
                },
            ],
            execute: function () {
                var v;
                i._RF.push({}, "53080JFSltPuag+WxVvfmJN", "UIWin", void 0);
                var B = r.ccclass,
                    x = r.requireComponent;
                t(
                    "UIWin",
                    B("UI/UIWin")(
                        (v =
                            x(o)(
                                (v = (function (t) {
                                    function i() {
                                        for (
                                            var n,
                                                e = arguments.length,
                                                s = new Array(e),
                                                i = 0;
                                            i < e;
                                            i++
                                        )
                                            s[i] = arguments[i];
                                        return (
                                            ((n =
                                                t.call.apply(
                                                    t,
                                                    [this].concat(s),
                                                ) || this).ready = !1),
                                            (n.processing = !1),
                                            (n.tw = null),
                                            n
                                        );
                                    }
                                    n(i, t);
                                    var r = i.prototype;
                                    return (
                                        (r.onOpen = function (t) {
                                            var n = this;
                                            if (t) {
                                                (l.stopBgm(),
                                                    l.playSfx("通关成功"),
                                                    (h.Pause = !0),
                                                    this.setButtons(!1),
                                                    this.findComp(
                                                        "CoinItem",
                                                        I,
                                                    ).init(d.CurCoin),
                                                    (this.findComp(
                                                        "LbCoin",
                                                        a,
                                                    ).string = "x" + t.amount));
                                                var e =
                                                        this.findNode(
                                                            "Pointer",
                                                        ),
                                                    s = [
                                                        [-120, -74],
                                                        [-72, -18],
                                                        [-17, 29],
                                                        [32, 86],
                                                        [90, 120],
                                                    ][t.slotIndex],
                                                    i = u.randomRangeInt(
                                                        s[0],
                                                        s[1],
                                                    );
                                                this.tw = c(e)
                                                    .to(0.5, {
                                                        position: f(120, -25),
                                                    })
                                                    .to(0.5, {
                                                        position: f(-120, -25),
                                                    })
                                                    .to(
                                                        0.35,
                                                        { position: f(i, -25) },
                                                        { easing: "sineOut" },
                                                    )
                                                    .call(function () {
                                                        ((n.ready = !0),
                                                            n.setButtons(!0));
                                                    })
                                                    .start();
                                            } else
                                                this.scheduleOnce(function () {
                                                    return n.close();
                                                });
                                        }),
                                        (r.setButtons = function (t) {
                                            ((this.findComp(
                                                "BtnNext",
                                                p,
                                            ).interactable = t),
                                                (this.findComp(
                                                    "BtnClose",
                                                    p,
                                                ).interactable = t));
                                        }),
                                        (r.onClose = function () {
                                            (this.tw && this.tw.stop(),
                                                (h.Pause = !1));
                                        }),
                                        (r.onBtnNextClick = (function () {
                                            var t = e(
                                                s().mark(function t() {
                                                    return s().wrap(
                                                        function (t) {
                                                            for (;;)
                                                                switch (
                                                                    (t.prev =
                                                                        t.next)
                                                                ) {
                                                                    case 0:
                                                                        if (
                                                                            this
                                                                                .ready &&
                                                                            !this
                                                                                .processing
                                                                        ) {
                                                                            t.next = 2;
                                                                            break;
                                                                        }
                                                                        return t.abrupt(
                                                                            "return",
                                                                        );
                                                                    case 2:
                                                                        return (
                                                                            (this.processing =
                                                                                !0),
                                                                            this.setButtons(
                                                                                !1,
                                                                            ),
                                                                            (t.next = 6),
                                                                            C.Inst.fadeIn()
                                                                        );
                                                                    case 6:
                                                                        (h.startGame(),
                                                                            this.close(),
                                                                            C.Inst.fadeOut());
                                                                    case 9:
                                                                    case "end":
                                                                        return t.stop();
                                                                }
                                                        },
                                                        t,
                                                        this,
                                                    );
                                                }),
                                            );
                                            return function () {
                                                return t.apply(this, arguments);
                                            };
                                        })()),
                                        (r.onBtnCloseClick = (function () {
                                            var t = e(
                                                s().mark(function t() {
                                                    return s().wrap(
                                                        function (t) {
                                                            for (;;)
                                                                switch (
                                                                    (t.prev =
                                                                        t.next)
                                                                ) {
                                                                    case 0:
                                                                        if (
                                                                            this
                                                                                .ready &&
                                                                            !this
                                                                                .processing
                                                                        ) {
                                                                            t.next = 2;
                                                                            break;
                                                                        }
                                                                        return t.abrupt(
                                                                            "return",
                                                                        );
                                                                    case 2:
                                                                        return (
                                                                            (this.processing =
                                                                                !0),
                                                                            this.setButtons(
                                                                                !1,
                                                                            ),
                                                                            (t.next = 6),
                                                                            C.Inst.fadeIn()
                                                                        );
                                                                    case 6:
                                                                        (this.close(),
                                                                            h.quitGame(),
                                                                            this.open(
                                                                                g.Main,
                                                                            ),
                                                                            C.Inst.fadeOut());
                                                                    case 10:
                                                                    case "end":
                                                                        return t.stop();
                                                                }
                                                        },
                                                        t,
                                                        this,
                                                    );
                                                }),
                                            );
                                            return function () {
                                                return t.apply(this, arguments);
                                            };
                                        })()),
                                        i
                                    );
                                })(m)),
                            ) || v),
                    ) || v,
                );
                i._RF.pop();
            },
        };
    },
);
