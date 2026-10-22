System.register(
    "chunks:///_virtual/ComboBox.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./Global.ts",
        "./CfgCombo.ts",
        "./GameMgr.ts",
        "./ResMgr.ts",
        "./Bundle.ts",
    ],
    function (o) {
        var t, r, e, s, i, n, a, c, u, l, p, b, m, C, f, g, h, d, y, B, v;
        return {
            setters: [
                function (o) {
                    ((t = o.applyDecoratedDescriptor),
                        (r = o.inheritsLoose),
                        (e = o.initializerDefineProperty),
                        (s = o.assertThisInitialized),
                        (i = o.createClass));
                },
                function (o) {
                    ((n = o.cclegacy),
                        (a = o._decorator),
                        (c = o.ProgressBar),
                        (u = o.Label),
                        (l = o.math),
                        (p = o.Node),
                        (b = o.Sprite),
                        (m = o.UIOpacity),
                        (C = o.tween),
                        (f = o.v3),
                        (g = o.Component));
                },
                function (o) {
                    h = o.Global;
                },
                function (o) {
                    d = o.CfgCombo;
                },
                function (o) {
                    y = o.GameMgr;
                },
                function (o) {
                    B = o.ResMgr;
                },
                function (o) {
                    v = o.Bundle;
                },
            ],
            execute: function () {
                var x, G, M, F, w, P, _;
                n._RF.push({}, "75d5bkvGiFM3oYCJK1pcaui", "ComboBox", void 0);
                var k = a.ccclass,
                    z = a.property;
                o(
                    "ComboBox",
                    ((x = k("Game/ComboBox")),
                    (G = z(c)),
                    (M = z(u)),
                    x(
                        ((P = t(
                            (w = (function (o) {
                                function t() {
                                    for (
                                        var t,
                                            r = arguments.length,
                                            i = new Array(r),
                                            n = 0;
                                        n < r;
                                        n++
                                    )
                                        i[n] = arguments[n];
                                    return (
                                        (t =
                                            o.call.apply(o, [this].concat(i)) ||
                                            this),
                                        e(t, "progressBar", P, s(t)),
                                        e(t, "lbCombo", _, s(t)),
                                        (t.curCombo = 0),
                                        (t.speed = 0),
                                        t
                                    );
                                }
                                r(t, o);
                                var n = t.prototype;
                                return (
                                    (n.start = function () {
                                        this.CurCombo = 0;
                                    }),
                                    (n.update = function (o) {
                                        y.Pause ||
                                            this.curCombo <= 0 ||
                                            ((this.progressBar.progress =
                                                l.clamp(
                                                    this.progressBar.progress -
                                                        this.speed * o,
                                                    0,
                                                    1,
                                                )),
                                            this.progressBar.progress <= 0 &&
                                                (this.CurCombo = 0));
                                    }),
                                    (n.createFloatText = function (o) {
                                        var t = new p(),
                                            r = t.addComponent(b),
                                            e = t.addComponent(m),
                                            s = d[this.curCombo].icon;
                                        if (s) {
                                            ((r.spriteFrame = B.getSpriteFrame(
                                                v.Game,
                                                s,
                                            )),
                                                y.EffectsLayer.addChild(t),
                                                t.setWorldPosition(o));
                                            var i = C(t);
                                            (i.set({ scale: f(0.5, 0.5, 1) }),
                                                i.to(
                                                    0.5,
                                                    { scale: f(1, 1, 1) },
                                                    { easing: "backOut" },
                                                ),
                                                i.by(
                                                    0.5,
                                                    { position: f(0, 50, 0) },
                                                    { easing: "sineOut" },
                                                ),
                                                i.call(function () {
                                                    t.destroy();
                                                }),
                                                i.start(),
                                                C(e)
                                                    .delay(0.5)
                                                    .to(
                                                        0.5,
                                                        { opacity: 0 },
                                                        { easing: "sineOut" },
                                                    )
                                                    .start());
                                        }
                                    }),
                                    i(t, [
                                        {
                                            key: "CurCombo",
                                            get: function () {
                                                return this.curCombo;
                                            },
                                            set: function (o) {
                                                if (
                                                    ((this.curCombo = l.clamp(
                                                        o,
                                                        0,
                                                        h.Max_Combo,
                                                    )),
                                                    (this.node.active =
                                                        this.curCombo > 0),
                                                    !(this.curCombo <= 0))
                                                ) {
                                                    this.lbCombo.string =
                                                        "x" + this.curCombo;
                                                    var t =
                                                        d[this.curCombo]
                                                            .durarion;
                                                    ((this.speed = 1 / t),
                                                        (this.progressBar.progress = 1));
                                                }
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })(g)).prototype,
                            "progressBar",
                            [G],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            },
                        )),
                        (_ = t(w.prototype, "lbCombo", [M], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (F = w)),
                    ) || F),
                );
                n._RF.pop();
            },
        };
    },
);
