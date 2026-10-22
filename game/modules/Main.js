System.register(
    "chunks:///_virtual/Main.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./UI.ts",
        "./Bundle.ts",
        "./ResMgr.ts",
        "./UIMgr.ts",
    ],
    function (n) {
        var e, t, r, o, u, i, s, c, a, l, p, f;
        return {
            setters: [
                function (n) {
                    ((e = n.inheritsLoose),
                        (t = n.asyncToGenerator),
                        (r = n.regeneratorRuntime));
                },
                function (n) {
                    ((o = n.cclegacy),
                        (u = n._decorator),
                        (i = n.Component),
                        (s = n.view),
                        (c = n.ResolutionPolicy));
                },
                function (n) {
                    a = n.UI;
                },
                function (n) {
                    l = n.Bundle;
                },
                function (n) {
                    p = n.ResMgr;
                },
                function (n) {
                    f = n.UIMgr;
                },
            ],
            execute: function () {
                var d;
                o._RF.push({}, "92bdbvKAAdD+ZRAMRSW3Jtb", "Main", void 0);
                var R = u.ccclass;
                (u.property,
                    n(
                        "Main",
                        R("Scene/Main")(
                            (d = (function (n) {
                                function o() {
                                    return n.apply(this, arguments) || this;
                                }
                                return (
                                    e(o, n),
                                    (o.prototype.start = (function () {
                                        var n = t(
                                            r().mark(function n() {
                                                return r().wrap(function (n) {
                                                    for (;;)
                                                        switch (
                                                            (n.prev = n.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    s.setResolutionPolicy(
                                                                        c.SHOW_ALL,
                                                                    ),
                                                                    (n.next = 3),
                                                                    p.loadDir(
                                                                        l.Resources,
                                                                    )
                                                                );
                                                            case 3:
                                                                f.open(
                                                                    a.Loading,
                                                                    null,
                                                                    {
                                                                        uiBundle:
                                                                            l.Resources,
                                                                    },
                                                                );
                                                            case 4:
                                                            case "end":
                                                                return n.stop();
                                                        }
                                                }, n);
                                            }),
                                        );
                                        return function () {
                                            return n.apply(this, arguments);
                                        };
                                    })()),
                                    o
                                );
                            })(i)),
                        ) || d,
                    ));
                o._RF.pop();
            },
        };
    },
);
