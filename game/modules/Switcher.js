System.register(
    "chunks:///_virtual/Switcher.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc"],
    function (t) {
        var e, n, r, i, o, c, s, u, a, l;
        return {
            setters: [
                function (t) {
                    ((e = t.applyDecoratedDescriptor),
                        (n = t.inheritsLoose),
                        (r = t.initializerDefineProperty),
                        (i = t.assertThisInitialized),
                        (o = t.createClass));
                },
                function (t) {
                    ((c = t.cclegacy),
                        (s = t._decorator),
                        (u = t.Button),
                        (a = t.Node),
                        (l = t.Component));
                },
            ],
            execute: function () {
                var p, f, h, y, d, O, b, g, v;
                c._RF.push({}, "4772djXcEtGA6kLkEpQOZ0P", "Switcher", void 0);
                var w = s.ccclass,
                    _ = s.property,
                    I = s.requireComponent,
                    m = s.executeInEditMode;
                t(
                    "Switcher",
                    ((p = w("UIExtend/Switcher")),
                    (f = I(u)),
                    (h = m(!0)),
                    (y = _(a)),
                    (d = _(a)),
                    p(
                        (O =
                            f(
                                (O =
                                    h(
                                        ((g = e(
                                            (b = (function (t) {
                                                function e() {
                                                    for (
                                                        var e,
                                                            n =
                                                                arguments.length,
                                                            o = new Array(n),
                                                            c = 0;
                                                        c < n;
                                                        c++
                                                    )
                                                        o[c] = arguments[c];
                                                    return (
                                                        (e =
                                                            t.call.apply(
                                                                t,
                                                                [this].concat(
                                                                    o,
                                                                ),
                                                            ) || this),
                                                        r(e, "on", g, i(e)),
                                                        r(e, "off", v, i(e)),
                                                        (e._isOn = !0),
                                                        e
                                                    );
                                                }
                                                return (
                                                    n(e, t),
                                                    o(e, [
                                                        {
                                                            key: "IsOn",
                                                            get: function () {
                                                                return this
                                                                    ._isOn;
                                                            },
                                                            set: function (t) {
                                                                ((this._isOn =
                                                                    t),
                                                                    this.on &&
                                                                        (this.on.active =
                                                                            t),
                                                                    this.off &&
                                                                        (this.off.active =
                                                                            !t));
                                                            },
                                                        },
                                                    ]),
                                                    e
                                                );
                                            })(l)).prototype,
                                            "on",
                                            [y],
                                            {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return null;
                                                },
                                            },
                                        )),
                                        (v = e(b.prototype, "off", [d], {
                                            configurable: !0,
                                            enumerable: !0,
                                            writable: !0,
                                            initializer: function () {
                                                return null;
                                            },
                                        })),
                                        e(
                                            b.prototype,
                                            "IsOn",
                                            [_],
                                            Object.getOwnPropertyDescriptor(
                                                b.prototype,
                                                "IsOn",
                                            ),
                                            b.prototype,
                                        ),
                                        (O = b)),
                                    ) || O),
                            ) || O),
                    ) || O),
                );
                c._RF.pop();
            },
        };
    },
);
