System.register("chunks:///_virtual/ArrayUtil.ts", ["cc"], function (r) {
    var n;
    return {
        setters: [
            function (r) {
                n = r.cclegacy;
            },
        ],
        execute: function () {
            n._RF.push({}, "4ec22SiSCtIH5tIfhLB1ntc", "ArrayUtil", void 0);
            var t = r(
                "ArrayUtil",
                (function () {
                    function r() {}
                    return (
                        (r.has = function (r, n) {
                            return (
                                !!r && !(r.length <= 0) && -1 != r.indexOf(n)
                            );
                        }),
                        (r.shuffle = function (r) {
                            if (r && !(r.length <= 1))
                                for (var n = r.length - 1; n > 0; n--) {
                                    var t = Math.floor(Math.random() * (n + 1)),
                                        e = [r[t], r[n]];
                                    ((r[n] = e[0]), (r[t] = e[1]));
                                }
                        }),
                        (r.remove = function (r, n) {
                            if (!r) return !1;
                            if (r.length <= 0) return !1;
                            var t = r.indexOf(n);
                            if (-1 === t) return !1;
                            r.splice(t, 1);
                        }),
                        (r.removeMultiIdx = function (r, n) {
                            if (!n) return r;
                            if (n.length <= 0) return r;
                            for (
                                var t = [], e = new Set(n), i = 0;
                                i < r.length;
                                i++
                            )
                                e.has(i) || t.push(r[i]);
                            return t;
                        }),
                        (r.pickItem = function (r) {
                            return r
                                ? r.length <= 0
                                    ? null
                                    : r[Math.floor(Math.random() * r.length)]
                                : null;
                        }),
                        (r.pickIndex = function (r) {
                            return r
                                ? r.length <= 0
                                    ? null
                                    : Math.floor(Math.random() * r.length)
                                : null;
                        }),
                        (r.pickItems = function (r, n, t) {
                            if ((void 0 === t && (t = !1), !r)) return null;
                            if (r.length <= 0) return null;
                            var e = [];
                            if (t) {
                                for (var i = [].concat(r), u = 0; u < n; u++) {
                                    var l = this.pickIndex(i),
                                        f = i[l];
                                    if (
                                        (e.push(f),
                                        i.splice(l, 1),
                                        i.length <= 0)
                                    )
                                        break;
                                }
                                return e;
                            }
                            for (var o = 0; o < n; o++) {
                                var a = this.pickItem(r);
                                e.push(a);
                            }
                            return e;
                        }),
                        (r.pickIndexs = function (r, n, t) {
                            if ((void 0 === t && (t = !1), !r)) return null;
                            if (r.length <= 0) return null;
                            var e = [];
                            if (t) {
                                for (var i = [].concat(r), u = 0; u < n; u++) {
                                    var l = this.pickIndex(i);
                                    if (
                                        (e.push(l),
                                        i.splice(l, 1),
                                        i.length <= 0)
                                    )
                                        break;
                                }
                                return e;
                            }
                            for (var f = 0; f < n; f++) {
                                var o = this.pickIndex(r);
                                e.push(o);
                            }
                            return e;
                        }),
                        (r.removeSame = function (r, n, t) {
                            t ||
                                (t = function (r, n) {
                                    return r === n;
                                });
                            for (
                                var e = [], i = [], u = 1, l = 1;
                                l < r.length;
                                l++
                            ) {
                                if (t(r[l], r[l - 1])) {
                                    if (++u >= n) {
                                        var f = [];
                                        e.push(f);
                                        for (var o = 0; o < n; o++) {
                                            var a = l + o - u + 1;
                                            (f.push(a), i.push(a));
                                        }
                                    }
                                } else u = 1;
                            }
                            return {
                                removeIdxArr: e,
                                arr: (r = this.removeMultiIdx(r, i)),
                            };
                        }),
                        (r.isAllSame = function (r, n) {
                            return n
                                ? r.every(function (t) {
                                      return t[n] === r[0][n];
                                  })
                                : r.every(function (n) {
                                      return n === r[0];
                                  });
                        }),
                        r
                    );
                })(),
            );
            ((globalThis.ArrayUtil = t), n._RF.pop());
        },
    };
});
