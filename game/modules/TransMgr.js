System.register(
    "chunks:///_virtual/TransMgr.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc"],
    function (t) {
        var e, n, r, i, a, o, c, s, g, l, u, h;
        return {
            setters: [
                function (t) {
                    ((e = t.applyDecoratedDescriptor),
                        (n = t.inheritsLoose),
                        (r = t.initializerDefineProperty),
                        (i = t.assertThisInitialized),
                        (a = t.createClass));
                },
                function (t) {
                    ((o = t.cclegacy),
                        (c = t._decorator),
                        (s = t.UITransform),
                        (g = t.Node),
                        (l = t.v3),
                        (u = t.tween),
                        (h = t.Component));
                },
            ],
            execute: function () {
                var f, p, T, v, b, d, y, U, O, m;
                o._RF.push({}, "88497k+5f9KULRgNBBQ+4rG", "TransMgr", void 0);
                var w = c.ccclass,
                    H = c.property;
                t(
                    "TransMgr",
                    ((f = w("Manager/TransMgr")),
                    (p = H(s)),
                    (T = H(s)),
                    (v = H(g)),
                    f(
                        (((m = (function (t) {
                            function e() {
                                for (
                                    var e,
                                        n = arguments.length,
                                        a = new Array(n),
                                        o = 0;
                                    o < n;
                                    o++
                                )
                                    a[o] = arguments[o];
                                return (
                                    (e =
                                        t.call.apply(t, [this].concat(a)) ||
                                        this),
                                    r(e, "gc1UiTrans", y, i(e)),
                                    r(e, "gc2UiTrans", U, i(e)),
                                    r(e, "logo", O, i(e)),
                                    (e.gc1OrgHeight = 0),
                                    (e.gc2OrgHeight = 0),
                                    e
                                );
                            }
                            n(e, t);
                            var o = e.prototype;
                            return (
                                (o.onLoad = function () {
                                    ((e.inst = this),
                                        (this.gc1OrgHeight =
                                            this.gc1UiTrans.height),
                                        (this.gc2OrgHeight =
                                            this.gc2UiTrans.height),
                                        (this.node.active = !1));
                                }),
                                (o.fadeIn = function () {
                                    var t = this;
                                    return new Promise(function (e, n) {
                                        ((t.node.active = !0),
                                            t.logo.setScale(l(0, 0, 1)),
                                            u(t.logo)
                                                .delay(0.2)
                                                .to(
                                                    0.5,
                                                    { scale: l(1, 1, 1) },
                                                    { easing: "backOut" },
                                                )
                                                .start(),
                                            u(t.gc1UiTrans)
                                                .set({ height: 0 })
                                                .to(0.2, {
                                                    height: t.gc1OrgHeight,
                                                })
                                                .start());
                                        var r = u(t.gc2UiTrans);
                                        (r.set({ height: 0 }),
                                            r.to(
                                                1,
                                                { height: t.gc2OrgHeight },
                                                { easing: "cubicOut" },
                                            ),
                                            r.call(function () {
                                                e();
                                            }),
                                            r.start());
                                    });
                                }),
                                (o.fadeOut = function () {
                                    var t = this;
                                    return new Promise(function (e, n) {
                                        (u(t.logo)
                                            .to(
                                                0.5,
                                                { scale: l() },
                                                { easing: "backIn" },
                                            )
                                            .start(),
                                            u(t.gc1UiTrans)
                                                .delay(0.8)
                                                .to(0.2, { height: 0 })
                                                .start());
                                        var r = u(t.gc2UiTrans);
                                        (r.to(
                                            1,
                                            { height: 0 },
                                            { easing: "cubicIn" },
                                        ),
                                            r.call(function () {
                                                ((t.node.active = !1), e());
                                            }),
                                            r.start());
                                    });
                                }),
                                a(e, null, [
                                    {
                                        key: "Inst",
                                        get: function () {
                                            return this.inst;
                                        },
                                    },
                                ]),
                                e
                            );
                        })(h)).inst = null),
                        (y = e((d = m).prototype, "gc1UiTrans", [p], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (U = e(d.prototype, "gc2UiTrans", [T], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (O = e(d.prototype, "logo", [v], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (b = d)),
                    ) || b),
                );
                o._RF.pop();
            },
        };
    },
);
