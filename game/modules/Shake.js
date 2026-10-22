System.register(
    "chunks:///_virtual/Shake.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc"],
    function (e) {
        var t, n, i, a, r, s, l, o;
        return {
            setters: [
                function (e) {
                    ((t = e.applyDecoratedDescriptor),
                        (n = e.inheritsLoose),
                        (i = e.initializerDefineProperty),
                        (a = e.assertThisInitialized));
                },
                function (e) {
                    ((r = e.cclegacy),
                        (s = e._decorator),
                        (l = e.tween),
                        (o = e.Component));
                },
            ],
            execute: function () {
                var h, c, u, p, g;
                r._RF.push({}, "2840flXNXFIw61GRpqk0Yl7", "Shake", void 0);
                var k = s.ccclass,
                    d = s.property;
                e(
                    "Shake",
                    k("Misc/Shake")(
                        ((u = t(
                            (c = (function (e) {
                                function t() {
                                    for (
                                        var t,
                                            n = arguments.length,
                                            r = new Array(n),
                                            s = 0;
                                        s < n;
                                        s++
                                    )
                                        r[s] = arguments[s];
                                    return (
                                        (t =
                                            e.call.apply(e, [this].concat(r)) ||
                                            this),
                                        i(t, "shakeAngle", u, a(t)),
                                        i(t, "shakeInterval", p, a(t)),
                                        i(t, "delay", g, a(t)),
                                        (t.tw = null),
                                        t
                                    );
                                }
                                n(t, e);
                                var r = t.prototype;
                                return (
                                    (r.onEnable = function () {
                                        ((this.tw = l(this.node)),
                                            this.tw
                                                .sequence(
                                                    l(this.node).delay(
                                                        this.delay,
                                                    ),
                                                    l(this.node).to(
                                                        this.shakeInterval,
                                                        {
                                                            angle: this
                                                                .shakeAngle,
                                                        },
                                                    ),
                                                    l(this.node).to(
                                                        this.shakeInterval,
                                                        {
                                                            angle: -this
                                                                .shakeAngle,
                                                        },
                                                    ),
                                                    l(this.node).to(
                                                        this.shakeInterval,
                                                        {
                                                            angle: this
                                                                .shakeAngle,
                                                        },
                                                    ),
                                                    l(this.node).to(
                                                        this.shakeInterval,
                                                        {
                                                            angle: -this
                                                                .shakeAngle,
                                                        },
                                                    ),
                                                    l(this.node).to(
                                                        this.shakeInterval,
                                                        { angle: 0 },
                                                    ),
                                                )
                                                .repeatForever()
                                                .start());
                                    }),
                                    (r.onDisable = function () {
                                        ((this.node.angle = 0),
                                            this.tw.stop(),
                                            (this.tw = null));
                                    }),
                                    t
                                );
                            })(o)).prototype,
                            "shakeAngle",
                            [d],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return 15;
                                },
                            },
                        )),
                        (p = t(c.prototype, "shakeInterval", [d], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return 0.1;
                            },
                        })),
                        (g = t(c.prototype, "delay", [d], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return 2;
                            },
                        })),
                        (h = c)),
                    ) || h,
                );
                r._RF.pop();
            },
        };
    },
);
