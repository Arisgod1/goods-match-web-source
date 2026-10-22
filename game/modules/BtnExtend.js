System.register(
    "chunks:///_virtual/BtnExtend.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./AudioMgr.ts",
        "./EventType.ts",
        "./UIMgr.ts",
    ],
    function (t) {
        var e, n, i, o, c, r, l, s, a, u, f, h;
        return {
            setters: [
                function (t) {
                    ((e = t.applyDecoratedDescriptor),
                        (n = t.inheritsLoose),
                        (i = t.initializerDefineProperty),
                        (o = t.assertThisInitialized));
                },
                function (t) {
                    ((c = t.cclegacy),
                        (r = t._decorator),
                        (l = t.Button),
                        (s = t.Node),
                        (a = t.Component));
                },
                function (t) {
                    u = t.AudioMgr;
                },
                function (t) {
                    f = t.EventType;
                },
                function (t) {
                    h = t.UIMgr;
                },
            ],
            execute: function () {
                var p, b, d, S, v, k, m, y, g, E, x;
                c._RF.push({}, "e858boYmuRNtaUbAZS8rSGo", "BtnExtend", void 0);
                var U = r.ccclass,
                    I = r.property,
                    T = r.disallowMultiple,
                    z = r.requireComponent;
                t(
                    "BtnExtend",
                    ((p = U("UIExtend/BtnExtend")),
                    (b = T(!0)),
                    (d = z(l)),
                    (S = I({ range: [0, 1, 0.1], slide: !0 })),
                    p(
                        (v =
                            b(
                                (v =
                                    d(
                                        ((m = e(
                                            (k = (function (t) {
                                                function e() {
                                                    for (
                                                        var e,
                                                            n =
                                                                arguments.length,
                                                            c = new Array(n),
                                                            r = 0;
                                                        r < n;
                                                        r++
                                                    )
                                                        c[r] = arguments[r];
                                                    return (
                                                        (e =
                                                            t.call.apply(
                                                                t,
                                                                [this].concat(
                                                                    c,
                                                                ),
                                                            ) || this),
                                                        i(
                                                            e,
                                                            "safeTime",
                                                            m,
                                                            o(e),
                                                        ),
                                                        i(
                                                            e,
                                                            "zoomScale",
                                                            y,
                                                            o(e),
                                                        ),
                                                        i(
                                                            e,
                                                            "clickSfx",
                                                            g,
                                                            o(e),
                                                        ),
                                                        i(e, "openUI", E, o(e)),
                                                        i(
                                                            e,
                                                            "closeUI",
                                                            x,
                                                            o(e),
                                                        ),
                                                        (e.btn = null),
                                                        (e.clickEvents =
                                                            void 0),
                                                        (e.isSafe = !0),
                                                        e
                                                    );
                                                }
                                                n(e, t);
                                                var c = e.prototype;
                                                return (
                                                    (c.onLoad = function () {
                                                        ((this.btn =
                                                            this.getComponent(
                                                                l,
                                                            )),
                                                            (this.btn.zoomScale =
                                                                this.zoomScale),
                                                            this.btn.node.on(
                                                                s.EventType
                                                                    .TOUCH_START,
                                                                this
                                                                    .onTouchStart,
                                                                this,
                                                            ),
                                                            this.btn.node.on(
                                                                f.Click,
                                                                this.onClick,
                                                                this,
                                                            ));
                                                    }),
                                                    (c.onTouchStart =
                                                        function () {
                                                            this.handleClickSfx();
                                                        }),
                                                    (c.onClick = function () {
                                                        (this.handleSafe(),
                                                            this.openUI &&
                                                                h.open(
                                                                    this.openUI,
                                                                ),
                                                            this.closeUI &&
                                                                h.close(
                                                                    this
                                                                        .closeUI,
                                                                ));
                                                    }),
                                                    (c.handleSafe =
                                                        function () {
                                                            var t = this;
                                                            this.isSafe &&
                                                                ((this.isSafe =
                                                                    !1),
                                                                (this.clickEvents =
                                                                    this.btn.clickEvents),
                                                                (this.btn.clickEvents =
                                                                    []),
                                                                this.scheduleOnce(
                                                                    function () {
                                                                        ((t.isSafe =
                                                                            !0),
                                                                            (t.btn.clickEvents =
                                                                                t.clickEvents));
                                                                    },
                                                                    this
                                                                        .safeTime,
                                                                ));
                                                        }),
                                                    (c.handleClickSfx =
                                                        function () {
                                                            this.clickSfx &&
                                                                u.playSfx(
                                                                    this
                                                                        .clickSfx,
                                                                );
                                                        }),
                                                    e
                                                );
                                            })(a)).prototype,
                                            "safeTime",
                                            [S],
                                            {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return 0.5;
                                                },
                                            },
                                        )),
                                        (y = e(k.prototype, "zoomScale", [I], {
                                            configurable: !0,
                                            enumerable: !0,
                                            writable: !0,
                                            initializer: function () {
                                                return 1.1;
                                            },
                                        })),
                                        (g = e(k.prototype, "clickSfx", [I], {
                                            configurable: !0,
                                            enumerable: !0,
                                            writable: !0,
                                            initializer: function () {
                                                return "btnClick";
                                            },
                                        })),
                                        (E = e(k.prototype, "openUI", [I], {
                                            configurable: !0,
                                            enumerable: !0,
                                            writable: !0,
                                            initializer: function () {
                                                return "";
                                            },
                                        })),
                                        (x = e(k.prototype, "closeUI", [I], {
                                            configurable: !0,
                                            enumerable: !0,
                                            writable: !0,
                                            initializer: function () {
                                                return "";
                                            },
                                        })),
                                        (v = k)),
                                    ) || v),
                            ) || v),
                    ) || v),
                );
                c._RF.pop();
            },
        };
    },
);
