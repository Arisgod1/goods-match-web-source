System.register(
    "chunks:///_virtual/MainItem.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./Mode.ts",
        "./GameMgr.ts",
        "./TransMgr.ts",
        "./UIMgr.ts",
        "./UI.ts",
        "./RecoveryMgr.ts",
    ],
    function (t) {
        var n, e, r, i, o, a, c, u, s, l, p, f, d, m, h, g, y;
        return {
            setters: [
                function (t) {
                    ((n = t.applyDecoratedDescriptor),
                        (e = t.inheritsLoose),
                        (r = t.initializerDefineProperty),
                        (i = t.assertThisInitialized),
                        (o = t.asyncToGenerator),
                        (a = t.regeneratorRuntime));
                },
                function (t) {
                    ((c = t.cclegacy),
                        (u = t._decorator),
                        (s = t.Node),
                        (l = t.Enum),
                        (p = t.Component));
                },
                function (t) {
                    f = t.Mode;
                },
                function (t) {
                    d = t.GameMgr;
                },
                function (t) {
                    m = t.TransMgr;
                },
                function (t) {
                    h = t.UIMgr;
                },
                function (t) {
                    g = t.UI;
                },
                function (t) {
                    y = t.RecoveryMgr;
                },
            ],
            execute: function () {
                var M, v, b, I, k, U, S;
                c._RF.push({}, "c23355pf51HnrCLBl2fKRjQ", "MainItem", void 0);
                var B = u.ccclass,
                    C = u.property;
                t(
                    "MainItem",
                    ((M = B("UIItem/MainItem")),
                    (v = C(s)),
                    (b = C({ type: l(f) })),
                    M(
                        ((U = n(
                            (k = (function (t) {
                                function n() {
                                    for (
                                        var n,
                                            e = arguments.length,
                                            o = new Array(e),
                                            a = 0;
                                        a < e;
                                        a++
                                    )
                                        o[a] = arguments[a];
                                    return (
                                        (n =
                                            t.call.apply(t, [this].concat(o)) ||
                                            this),
                                        r(n, "tip", U, i(n)),
                                        r(n, "mode", S, i(n)),
                                        (n.btnStart = null),
                                        (n.btnUnlock = null),
                                        n
                                    );
                                }
                                e(n, t);
                                var c = n.prototype;
                                return (
                                    (c.onLoad = function () {
                                        ((this.btnStart =
                                            this.node.getChildByName(
                                                "BtnStart",
                                            )),
                                            (this.btnUnlock =
                                                this.node.getChildByName(
                                                    "BtnUnlock",
                                                )));
                                    }),
                                    (c.start = function () {
                                        this.updateState();
                                    }),
                                    (c.updateState = function () {
                                        ((this.tip.active = !1),
                                            (this.btnUnlock.active = !1));
                                    }),
                                    (c.onBtnStartClick = (function () {
                                        var t = o(
                                            a().mark(function t() {
                                                return a().wrap(
                                                    function (t) {
                                                        for (;;)
                                                            switch (
                                                                (t.prev =
                                                                    t.next)
                                                            ) {
                                                                case 0:
                                                                    if (
                                                                        !d.leavingHome
                                                                    ) {
                                                                        t.next = 2;
                                                                        break;
                                                                    }
                                                                    return t.abrupt(
                                                                        "return",
                                                                    );
                                                                case 2:
                                                                    return (
                                                                        (d.leavingHome =
                                                                            !0),
                                                                        (t.next = 5),
                                                                        m.Inst.fadeIn()
                                                                    );
                                                                case 5:
                                                                    (m.Inst.fadeOut(),
                                                                        h.close(
                                                                            g.Main,
                                                                        ),
                                                                        (d.mode =
                                                                            this.mode),
                                                                        d.startGame());
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
                                    (c.onBtnUnlockClick = function () {
                                        var t = this,
                                            n = function () {
                                                return d.unlockMode(t.mode);
                                            };
                                        n().ok
                                            ? this.updateState()
                                            : y.retry(n, function () {
                                                  return t.updateState();
                                              });
                                    }),
                                    n
                                );
                            })(p)).prototype,
                            "tip",
                            [v],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            },
                        )),
                        (S = n(k.prototype, "mode", [b], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return f.tp;
                            },
                        })),
                        (I = k)),
                    ) || I),
                );
                c._RF.pop();
            },
        };
    },
);
