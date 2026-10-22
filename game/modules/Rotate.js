System.register(
    "chunks:///_virtual/Rotate.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc"],
    function (e) {
        var t, r, o, n, i, a, c;
        return {
            setters: [
                function (e) {
                    ((t = e.applyDecoratedDescriptor),
                        (r = e.inheritsLoose),
                        (o = e.initializerDefineProperty),
                        (n = e.assertThisInitialized));
                },
                function (e) {
                    ((i = e.cclegacy), (a = e._decorator), (c = e.Component));
                },
            ],
            execute: function () {
                var s, u, p;
                i._RF.push({}, "6b9acTOKxRPKb2/9uu/YoaF", "Rotate", void 0);
                var l = a.ccclass,
                    f = a.property;
                e(
                    "Rotate",
                    l("Misc/Rotate")(
                        ((p = t(
                            (u = (function (e) {
                                function t() {
                                    for (
                                        var t,
                                            r = arguments.length,
                                            i = new Array(r),
                                            a = 0;
                                        a < r;
                                        a++
                                    )
                                        i[a] = arguments[a];
                                    return (
                                        (t =
                                            e.call.apply(e, [this].concat(i)) ||
                                            this),
                                        o(t, "rotate_speed", p, n(t)),
                                        t
                                    );
                                }
                                return (
                                    r(t, e),
                                    (t.prototype.update = function (e) {
                                        this.node.angle +=
                                            this.rotate_speed * e;
                                    }),
                                    t
                                );
                            })(c)).prototype,
                            "rotate_speed",
                            [f],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return 10;
                                },
                            },
                        )),
                        (s = u)),
                    ) || s,
                );
                i._RF.pop();
            },
        };
    },
);
