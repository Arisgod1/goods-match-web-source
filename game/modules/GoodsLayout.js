System.register(
    "chunks:///_virtual/GoodsLayout.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc", "./ArrayUtil.ts"],
    function (r) {
        var n, t, e;
        return {
            setters: [
                function (r) {
                    n = r.createForOfIteratorHelperLoose;
                },
                function (r) {
                    t = r.cclegacy;
                },
                function (r) {
                    e = r.ArrayUtil;
                },
            ],
            execute: function () {
                function u(r, n) {
                    return Number.isInteger(r) && r > 0 && r <= n;
                }
                function o(r, n) {
                    var t = {};
                    return (
                        r
                            .filter(function (r) {
                                return u(r, n);
                            })
                            .forEach(function (r) {
                                var n;
                                t[r] = (null != (n = t[r]) ? n : 0) + 1;
                            }),
                        JSON.stringify(
                            Object.keys(t)
                                .sort(function (r, n) {
                                    return Number(r) - Number(n);
                                })
                                .map(function (r) {
                                    return [Number(r), t[r]];
                                }),
                        )
                    );
                }
                (r({
                    distributeGoods: function (r, t, l) {
                        if (
                            !Number.isInteger(l) ||
                            l <= 0 ||
                            new Set(
                                r.map(function (r) {
                                    return r.id;
                                }),
                            ).size !== r.length
                        )
                            return null;
                        var i = t.filter(function (r) {
                            return u(r, l);
                        });
                        e.shuffle(i);
                        for (var f, a = {}, s = n(r); !(f = s()).done; ) {
                            var c = f.value;
                            a[c.id] = c.small
                                ? { 0: [] }
                                : { 0: [], 1: [], 2: [] };
                        }
                        for (
                            var h,
                                v = n(
                                    r.filter(function (r) {
                                        return r.small;
                                    }),
                                );
                            !(h = v()).done;

                        )
                            for (var d = h.value, g = 0; g < 3; g++) {
                                var m;
                                a[d.id][0].push(
                                    null != (m = i.shift()) ? m : -1,
                                );
                            }
                        for (
                            var p,
                                b = [],
                                y = n(
                                    r.filter(function (r) {
                                        return !r.small;
                                    }),
                                );
                            !(p = y()).done;

                        )
                            for (var N = p.value, I = 0; I < 3; I++)
                                b.push({ shelf: N.id, slot: I });
                        if (i.length && !b.length) return null;
                        var L,
                            O = function () {
                                var r = i.length,
                                    n = b.map(function (r, n) {
                                        return n;
                                    });
                                e.shuffle(n);
                                var t =
                                        b.length <= 6
                                            ? 2
                                            : 4 + Math.floor(2 * Math.random()),
                                    u = new Set(
                                        n.slice(0, Math.max(1, b.length - t)),
                                    );
                                if (
                                    (b.forEach(function (r, n) {
                                        var t;
                                        return a[r.shelf][r.slot].push(
                                            u.has(n) && null != (t = i.shift())
                                                ? t
                                                : -1,
                                        );
                                    }),
                                    r === i.length)
                                )
                                    return { v: null };
                            };
                        for (; i.length; ) if ((L = O())) return L.v;
                        var j = [];
                        return (
                            Object.values(a).forEach(function (r) {
                                return Object.values(r).forEach(function (r) {
                                    return j.push.apply(j, r);
                                });
                            }),
                            o(t, l) === o(j, l) ? a : null
                        );
                    },
                    goodsCounts: o,
                    validGoodsId: u,
                }),
                    t._RF.push(
                        {},
                        "4bc68I7UmZAv6HiiVXcJyRL",
                        "GoodsLayout",
                        void 0,
                    ),
                    t._RF.pop());
            },
        };
    },
);
