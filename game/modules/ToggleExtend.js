System.register(
    "chunks:///_virtual/ToggleExtend.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioMgr.ts"],
    function (e) {
        var t, n, i, o, c, r, l, s, a;
        return {
            setters: [
                function (e) {
                    ((t = e.applyDecoratedDescriptor),
                        (n = e.inheritsLoose),
                        (i = e.initializerDefineProperty),
                        (o = e.assertThisInitialized));
                },
                function (e) {
                    ((c = e.cclegacy),
                        (r = e._decorator),
                        (l = e.Toggle),
                        (s = e.Component));
                },
                function (e) {
                    a = e.AudioMgr;
                },
            ],
            execute: function () {
                var u, f, g, h, p, d, v, T;
                c._RF.push(
                    {},
                    "659835HTWVKuJmTmyMhYpAf",
                    "ToggleExtend",
                    void 0,
                );
                var k = r.ccclass,
                    S = r.property,
                    x = r.disallowMultiple,
                    y = r.requireComponent;
                e(
                    "ToggleExtend",
                    ((u = k("UIExtend/ToggleExtend")),
                    (f = x(!0)),
                    (g = y(l)),
                    (h = S({ range: [0, 1, 0.1], slide: !0 })),
                    u(
                        (p =
                            f(
                                (p =
                                    g(
                                        ((v = t(
                                            (d = (function (e) {
                                                function t() {
                                                    for (
                                                        var t,
                                                            n =
                                                                arguments.length,
                                                            c = new Array(n),
                                                            r = 0;
                                                        r < n;
                                                        r++
                                                    )
                                                        c[r] = arguments[r];
                                                    return (
                                                        (t =
                                                            e.call.apply(
                                                                e,
                                                                [this].concat(
                                                                    c,
                                                                ),
                                                            ) || this),
                                                        i(
                                                            t,
                                                            "safeTime",
                                                            v,
                                                            o(t),
                                                        ),
                                                        i(
                                                            t,
                                                            "clickSfx",
                                                            T,
                                                            o(t),
                                                        ),
                                                        (t.toggle = null),
                                                        (t.checkEvents =
                                                            void 0),
                                                        (t.isSafe = !0),
                                                        t
                                                    );
                                                }
                                                n(t, e);
                                                var c = t.prototype;
                                                return (
                                                    (c.onLoad = function () {
                                                        this.toggle =
                                                            this.getComponent(
                                                                l,
                                                            );
                                                    }),
                                                    (c.start = function () {
                                                        this.toggle.node.on(
                                                            l.EventType.TOGGLE,
                                                            this.onToggle,
                                                            this,
                                                        );
                                                    }),
                                                    (c.onToggle = function () {
                                                        (this.handleSafe(),
                                                            this.handleClickSfx());
                                                    }),
                                                    (c.handleSafe =
                                                        function () {
                                                            var e = this;
                                                            this.isSafe &&
                                                                ((this.isSafe =
                                                                    !1),
                                                                this.scheduleOnce(
                                                                    function () {
                                                                        ((e.checkEvents =
                                                                            e.toggle.checkEvents),
                                                                            (e.toggle.checkEvents =
                                                                                []),
                                                                            e.scheduleOnce(
                                                                                e.recover,
                                                                                e.safeTime,
                                                                            ));
                                                                    },
                                                                ));
                                                        }),
                                                    (c.handleClickSfx =
                                                        function () {
                                                            this.clickSfx &&
                                                                a.playSfx(
                                                                    this
                                                                        .clickSfx,
                                                                );
                                                        }),
                                                    (c.recover = function () {
                                                        ((this.isSafe = !0),
                                                            (this.toggle.checkEvents =
                                                                this.checkEvents));
                                                    }),
                                                    t
                                                );
                                            })(s)).prototype,
                                            "safeTime",
                                            [h],
                                            {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return 0.5;
                                                },
                                            },
                                        )),
                                        (T = t(d.prototype, "clickSfx", [S], {
                                            configurable: !0,
                                            enumerable: !0,
                                            writable: !0,
                                            initializer: function () {
                                                return "btnClick";
                                            },
                                        })),
                                        (p = d)),
                                    ) || p),
                            ) || p),
                    ) || p),
                );
                c._RF.pop();
            },
        };
    },
);
