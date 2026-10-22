System.register(
    "chunks:///_virtual/BoardLayout.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc"],
    function (t) {
        var o, a, r, e;
        return {
            setters: [
                function (t) {
                    o = t.createForOfIteratorHelperLoose;
                },
                function (t) {
                    ((a = t.cclegacy), (r = t.UITransform), (e = t.v3));
                },
            ],
            execute: function () {
                (t({
                    boundsInSpace: function (t, a, n) {
                        void 0 === n && (n = new Map());
                        var i = {
                            left: 1 / 0,
                            right: -1 / 0,
                            bottom: 1 / 0,
                            top: -1 / 0,
                        };
                        return (
                            (function h(c) {
                                var f = c.getComponent(r);
                                if (f)
                                    for (
                                        var l = 0,
                                            u = [
                                                -f.width * f.anchorX,
                                                f.width * (1 - f.anchorX),
                                            ];
                                        l < u.length;
                                        l++
                                    )
                                        for (
                                            var m = u[l],
                                                v = 0,
                                                s = [
                                                    -f.height * f.anchorY,
                                                    f.height * (1 - f.anchorY),
                                                ];
                                            v < s.length;
                                            v++
                                        ) {
                                            for (
                                                var d = s[v],
                                                    p = f.convertToWorldSpaceAR(
                                                        e(m, d, 0),
                                                    ),
                                                    x = c;
                                                x;
                                                x = x.parent
                                            ) {
                                                var M = n.get(x);
                                                if (M) {
                                                    var g = x.worldPosition,
                                                        y =
                                                            M /
                                                            Math.max(
                                                                Math.abs(
                                                                    x.scale.x,
                                                                ),
                                                                0.001,
                                                            ),
                                                        b =
                                                            M /
                                                            Math.max(
                                                                Math.abs(
                                                                    x.scale.y,
                                                                ),
                                                                0.001,
                                                            );
                                                    ((p.x =
                                                        g.x + (p.x - g.x) * y),
                                                        (p.y =
                                                            g.y +
                                                            (p.y - g.y) * b));
                                                }
                                                if (x === t) break;
                                            }
                                            var F = a.convertToNodeSpaceAR(p);
                                            ((i.left = Math.min(i.left, F.x)),
                                                (i.right = Math.max(
                                                    i.right,
                                                    F.x,
                                                )),
                                                (i.bottom = Math.min(
                                                    i.bottom,
                                                    F.y,
                                                )),
                                                (i.top = Math.max(i.top, F.y)));
                                        }
                                for (
                                    var w, B = o(c.children);
                                    !(w = B()).done;

                                ) {
                                    h(w.value);
                                }
                            })(t),
                            i
                        );
                    },
                    fitBoard: function (t, o, a, r) {
                        void 0 === r && (r = 100);
                        var e = Math.max(0, a.right - a.left),
                            n = Math.max(0, a.top - a.bottom),
                            i = t > 0 && o > 0 ? Math.min(1, e / t, n / o) : 0,
                            h = (o * i) / 2;
                        return {
                            scale: i,
                            x: (a.left + a.right) / 2,
                            y: Math.max(a.bottom + h, Math.min(r, a.top - h)),
                        };
                    },
                    needsPortraitFrame: function (t, o) {
                        return t > 0 && o > 0 && (o / t) * 720 < 960;
                    },
                }),
                    a._RF.push(
                        {},
                        "9dbeaZIJelOvqqzCxidFVcN",
                        "BoardLayout",
                        void 0,
                    ),
                    a._RF.pop());
            },
        };
    },
);
