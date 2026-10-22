System.register(
    "chunks:///_virtual/CoinItem.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./Bundle.ts",
        "./EventType.ts",
        "./AudioMgr.ts",
        "./EventMgr.ts",
        "./ResMgr.ts",
        "./LabelTick.ts",
        "./CoinMgr.ts",
    ],
    function (t) {
        var i, n, e, o, s, c, r, a, u, l, h, d, f, p, C, m, g, v, y, I;
        return {
            setters: [
                function (t) {
                    ((i = t.applyDecoratedDescriptor),
                        (n = t.inheritsLoose),
                        (e = t.initializerDefineProperty),
                        (o = t.assertThisInitialized),
                        (s = t.createClass));
                },
                function (t) {
                    ((c = t.cclegacy),
                        (r = t._decorator),
                        (a = t.math),
                        (u = t.tween),
                        (l = t.v3),
                        (h = t.Node),
                        (d = t.Sprite),
                        (f = t.Component));
                },
                function (t) {
                    p = t.Bundle;
                },
                function (t) {
                    C = t.EventType;
                },
                function (t) {
                    m = t.AudioMgr;
                },
                function (t) {
                    g = t.EventMgr;
                },
                function (t) {
                    v = t.ResMgr;
                },
                function (t) {
                    y = t.LabelTick;
                },
                function (t) {
                    I = t.CoinMgr;
                },
            ],
            execute: function () {
                var b, k, S, w, M;
                c._RF.push({}, "c3b43fuycJEPLI1Et7usH3D", "CoinItem", void 0);
                var T = r.ccclass,
                    H = r.property;
                t(
                    "CoinItem",
                    ((b = T("UIItem/CoinItem")),
                    (k = H(y)),
                    b(
                        ((M = i(
                            (w = (function (t) {
                                function i() {
                                    for (
                                        var i,
                                            n = arguments.length,
                                            s = new Array(n),
                                            c = 0;
                                        c < n;
                                        c++
                                    )
                                        s[c] = arguments[c];
                                    return (
                                        (i =
                                            t.call.apply(t, [this].concat(s)) ||
                                            this),
                                        e(i, "labelTick", M, o(i)),
                                        (i.coin = 0),
                                        i
                                    );
                                }
                                n(i, t);
                                var c = i.prototype;
                                return (
                                    (c.onLoad = function () {
                                        (g.emit(C.CoinItemShow, this),
                                            g.on(
                                                C.CoinItemShow,
                                                this.onShow,
                                                this,
                                            ),
                                            g.on(
                                                C.CoinItemHide,
                                                this.onHide,
                                                this,
                                            ),
                                            g.on(
                                                C.UpdateCoin,
                                                this.updateCoin,
                                                this,
                                            ));
                                    }),
                                    (c.onDisable = function () {
                                        this.unscheduleAllCallbacks();
                                    }),
                                    (c.onDestroy = function () {
                                        (g.emit(C.CoinItemHide, this),
                                            this.unscheduleAllCallbacks(),
                                            g.off(
                                                C.UpdateCoin,
                                                this.updateCoin,
                                                this,
                                            ),
                                            g.off(
                                                C.CoinItemShow,
                                                this.onShow,
                                                this,
                                            ),
                                            g.off(
                                                C.CoinItemHide,
                                                this.onHide,
                                                this,
                                            ));
                                    }),
                                    (c.onShow = function (t) {
                                        this !== t && (this.node.active = !1);
                                    }),
                                    (c.onHide = function (t) {
                                        this !== t &&
                                            ((this.node.active = !0),
                                            this.init(I.CurCoin));
                                    }),
                                    (c.init = function (t) {
                                        ((this.coin = t),
                                            this.labelTick.init(t));
                                    }),
                                    (c.updateCoin = function (t, i) {
                                        var n = this;
                                        if (
                                            (void 0 === i && (i = !0),
                                            this.node.active)
                                        ) {
                                            ((this.coin = t),
                                                this.labelTick.tickLabel(t));
                                            i &&
                                                (m.playSfx("获得金币"),
                                                this.schedule(
                                                    function () {
                                                        var t =
                                                                n.createFlyCoin(),
                                                            i =
                                                                a.randomRangeInt(
                                                                    -50,
                                                                    50,
                                                                ),
                                                            e =
                                                                a.randomRangeInt(
                                                                    -100,
                                                                    -50,
                                                                ),
                                                            o = u(t);
                                                        (o.to(
                                                            0.5,
                                                            {
                                                                position: l(
                                                                    i,
                                                                    e,
                                                                ),
                                                            },
                                                            {
                                                                easing: "cubicOut",
                                                            },
                                                        ),
                                                            o.to(
                                                                1,
                                                                {
                                                                    position:
                                                                        n.node
                                                                            .position,
                                                                },
                                                                {
                                                                    easing: "backIn",
                                                                },
                                                            ),
                                                            o.call(function () {
                                                                (m.playSfx(
                                                                    "获得金币1",
                                                                ),
                                                                    t.destroy());
                                                            }),
                                                            o.start());
                                                    },
                                                    0.1,
                                                    5,
                                                ));
                                        }
                                    }),
                                    (c.createFlyCoin = function () {
                                        var t = new h();
                                        return (
                                            (t.addComponent(d).spriteFrame =
                                                v.getSpriteFrame(
                                                    p.UI,
                                                    "xingxing",
                                                    "common/",
                                                )),
                                            this.node.parent.addChild(t),
                                            t
                                        );
                                    }),
                                    s(i, [
                                        {
                                            key: "Coin",
                                            get: function () {
                                                return this.coin;
                                            },
                                        },
                                    ]),
                                    i
                                );
                            })(f)).prototype,
                            "labelTick",
                            [k],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            },
                        )),
                        (S = w)),
                    ) || S),
                );
                c._RF.pop();
            },
        };
    },
);
