System.register(
    "chunks:///_virtual/Floaty.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc"],
    function (t) {
        var e, r, o, i, n, a, l, s, c;
        return {
            setters: [
                function (t) {
                    ((e = t.applyDecoratedDescriptor),
                        (r = t.inheritsLoose),
                        (o = t.initializerDefineProperty),
                        (i = t.assertThisInitialized));
                },
                function (t) {
                    ((n = t.cclegacy),
                        (a = t._decorator),
                        (l = t.tween),
                        (s = t.v3),
                        (c = t.Component));
                },
            ],
            execute: function () {
                var f, u, p, h;
                n._RF.push({}, "eaa9aoMVFhCBY75R+3rE22h", "Floaty", void 0);
                var y = a.ccclass,
                    v = a.property;
                t(
                    "Floaty",
                    y("Misc/Floaty")(
                        ((p = e(
                            (u = (function (t) {
                                function e() {
                                    for (
                                        var e,
                                            r = arguments.length,
                                            n = new Array(r),
                                            a = 0;
                                        a < r;
                                        a++
                                    )
                                        n[a] = arguments[a];
                                    return (
                                        (e =
                                            t.call.apply(t, [this].concat(n)) ||
                                            this),
                                        o(e, "floatInterval", p, i(e)),
                                        o(e, "floatOffset", h, i(e)),
                                        e
                                    );
                                }
                                return (
                                    r(e, t),
                                    (e.prototype.start = function () {
                                        l(this.node)
                                            .sequence(
                                                l(this.node).by(
                                                    this.floatInterval,
                                                    {
                                                        position: s(
                                                            0,
                                                            this.floatOffset,
                                                            0,
                                                        ),
                                                    },
                                                ),
                                                l(this.node).by(
                                                    this.floatInterval,
                                                    {
                                                        position: s(
                                                            0,
                                                            -this.floatOffset,
                                                            0,
                                                        ),
                                                    },
                                                ),
                                            )
                                            .repeatForever()
                                            .start();
                                    }),
                                    e
                                );
                            })(c)).prototype,
                            "floatInterval",
                            [v],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return 0.5;
                                },
                            },
                        )),
                        (h = e(u.prototype, "floatOffset", [v], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return 10;
                            },
                        })),
                        (f = u)),
                    ) || f,
                );
                n._RF.pop();
            },
        };
    },
);
