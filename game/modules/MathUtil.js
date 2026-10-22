System.register("chunks:///_virtual/MathUtil.ts", ["cc"], function (n) {
    var t, e;
    return {
        setters: [
            function (n) {
                ((t = n.cclegacy), (e = n.math));
            },
        ],
        execute: function () {
            t._RF.push({}, "c0d0eKNUodPMpvHFwYAailX", "MathUtil", void 0);
            n(
                "MathUtil",
                (function () {
                    function n() {}
                    return (
                        (n.IsInRange = function (n, t, e) {
                            return !(n < t) && !(n > e);
                        }),
                        (n.randWeight = function (n) {
                            if (
                                null == n ||
                                !n.length ||
                                n.some(function (n) {
                                    return !Number.isFinite(n) || n < 0;
                                })
                            )
                                return -1;
                            var t = n.reduce(function (n, t) {
                                return n + t;
                            }, 0);
                            if (!Number.isFinite(t) || t <= 0) return -1;
                            for (
                                var r = e.randomRange(0, t), i = 0;
                                i < n.length;
                                i++
                            ) {
                                if (n[i] > 0 && r < n[i]) return i;
                                r -= n[i];
                            }
                            return -1;
                        }),
                        n
                    );
                })(),
            );
            t._RF.pop();
        },
    };
});
