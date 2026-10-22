System.register("chunks:///_virtual/ObjUtil.ts", ["cc"], function (t) {
    var n;
    return {
        setters: [
            function (t) {
                n = t.cclegacy;
            },
        ],
        execute: function () {
            n._RF.push({}, "f8d2eYTnyVHsraF02+wD5vV", "ObjUtil", void 0);
            t(
                "ObjUtil",
                (function () {
                    function t() {}
                    return (
                        (t.has = function (t, n) {
                            return !!t && t.hasOwnProperty(n);
                        }),
                        (t.get = function (t, n, r) {
                            return t && t.hasOwnProperty(n) ? t[n] : r;
                        }),
                        t
                    );
                })(),
            );
            n._RF.pop();
        },
    };
});
