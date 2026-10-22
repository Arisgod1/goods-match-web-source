System.register(
    "chunks:///_virtual/UIBase.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./UIType.ts",
        "./EventMgr.ts",
        "./EventType.ts",
    ],
    function (e) {
        var n, t, i, o, c, r, s, u, a, l, p, f;
        return {
            setters: [
                function (e) {
                    ((n = e.applyDecoratedDescriptor),
                        (t = e.inheritsLoose),
                        (i = e.initializerDefineProperty),
                        (o = e.assertThisInitialized));
                },
                function (e) {
                    ((c = e.cclegacy),
                        (r = e._decorator),
                        (s = e.Widget),
                        (u = e.Enum),
                        (a = e.Component));
                },
                function (e) {
                    l = e.UIType;
                },
                function (e) {
                    p = e.EventMgr;
                },
                function (e) {
                    f = e.EventType;
                },
            ],
            execute: function () {
                var y, d, h, v, m;
                c._RF.push({}, "111f5/XxgFNRZIz42m+GGGf", "UIBase", void 0);
                r.ccclass;
                var g = r.property,
                    E = r.requireComponent;
                e(
                    "UIBase",
                    ((y = E(s)),
                    (d = g({ type: u(l) })),
                    y(
                        ((m = n(
                            (v = (function (e) {
                                function n() {
                                    for (
                                        var n,
                                            t = arguments.length,
                                            c = new Array(t),
                                            r = 0;
                                        r < t;
                                        r++
                                    )
                                        c[r] = arguments[r];
                                    return (
                                        (n =
                                            e.call.apply(e, [this].concat(c)) ||
                                            this),
                                        i(n, "uiType", m, o(n)),
                                        n
                                    );
                                }
                                t(n, e);
                                var c = n.prototype;
                                return (
                                    (c.onOpen = function (e) {}),
                                    (c.onClose = function (e) {}),
                                    (c.open = function (e, n, t) {
                                        p.emit(f.OpenUI, e, n, t);
                                    }),
                                    (c.delayOpen = function (e, n, t, i) {
                                        this.scheduleOnce(
                                            this.open.bind(this, n, t, i),
                                            e,
                                        );
                                    }),
                                    (c.close = function (e, n) {
                                        (e || (e = this.node.name),
                                            p.emit(f.CloseUI, e, n));
                                    }),
                                    (c.delayClose = function (e, n, t) {
                                        this.scheduleOnce(
                                            this.close.bind(this, n, t),
                                            e,
                                        );
                                    }),
                                    (c.bindClick = function (e, n, t, i, o) {
                                        var c = new a.EventHandler();
                                        ((c.target = n),
                                            (c.component = t),
                                            (c.handler = i),
                                            (c.customEventData = o),
                                            (e.clickEvents = [c]));
                                    }),
                                    (c.unbindClick = function (e) {
                                        e.clickEvents = [];
                                    }),
                                    n
                                );
                            })(a)).prototype,
                            "uiType",
                            [d],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return l.Common;
                                },
                            },
                        )),
                        (h = v)),
                    ) || h),
                );
                c._RF.pop();
            },
        };
    },
);
