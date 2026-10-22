System.register(
    "chunks:///_virtual/Breath.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc"],
    function (t) {
        var e, n, r, o, s, c;
        return {
            setters: [
                function (t) {
                    e = t.inheritsLoose;
                },
                function (t) {
                    ((n = t.cclegacy),
                        (r = t._decorator),
                        (o = t.tween),
                        (s = t.v3),
                        (c = t.Component));
                },
            ],
            execute: function () {
                var a;
                n._RF.push({}, "9d4c9kNag1CYLOnxCSHLbtq", "Breath", void 0);
                var i = r.ccclass;
                (r.property,
                    t(
                        "Breath",
                        i("Misc/Breath")(
                            (a = (function (t) {
                                function n() {
                                    for (
                                        var e,
                                            n = arguments.length,
                                            r = new Array(n),
                                            o = 0;
                                        o < n;
                                        o++
                                    )
                                        r[o] = arguments[o];
                                    return (
                                        ((e =
                                            t.call.apply(t, [this].concat(r)) ||
                                            this).tw = null),
                                        e
                                    );
                                }
                                e(n, t);
                                var r = n.prototype;
                                return (
                                    (r.onEnable = function () {
                                        ((this.tw = o(this.node)),
                                            this.tw
                                                .to(0.75, {
                                                    scale: s(1.1, 1.1, 1),
                                                })
                                                .to(0.75, { scale: s(1, 1, 1) })
                                                .union()
                                                .repeatForever()
                                                .start());
                                    }),
                                    (r.onDisable = function () {
                                        ((this.node.scale = s(1, 1, 1)),
                                            this.tw.stop(),
                                            (this.tw = null));
                                    }),
                                    n
                                );
                            })(c)),
                        ) || a,
                    ));
                n._RF.pop();
            },
        };
    },
);
