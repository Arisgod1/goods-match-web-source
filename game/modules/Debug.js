System.register("chunks:///_virtual/Debug.ts", ["cc"], function (n) {
    var r;
    return {
        setters: [
            function (n) {
                r = n.cclegacy;
            },
        ],
        execute: function () {
            r._RF.push({}, "24152lr7B5ApJuM1SRUJV/V", "Debug", void 0);
            n(
                "Debug",
                (function () {
                    function n() {}
                    return (
                        (n.Log = function (n) {
                            for (
                                var r,
                                    e = arguments.length,
                                    o = new Array(e > 1 ? e - 1 : 0),
                                    c = 1;
                                c < e;
                                c++
                            )
                                o[c - 1] = arguments[c];
                            (r = console).log.apply(
                                r,
                                [n + " --\x3e "].concat(o),
                            );
                        }),
                        (n.Warn = function (n) {
                            for (
                                var r,
                                    e = arguments.length,
                                    o = new Array(e > 1 ? e - 1 : 0),
                                    c = 1;
                                c < e;
                                c++
                            )
                                o[c - 1] = arguments[c];
                            (r = console).warn.apply(
                                r,
                                [n + " --\x3e "].concat(o),
                            );
                        }),
                        (n.Error = function (n) {
                            for (
                                var r,
                                    e = arguments.length,
                                    o = new Array(e > 1 ? e - 1 : 0),
                                    c = 1;
                                c < e;
                                c++
                            )
                                o[c - 1] = arguments[c];
                            (r = console).error.apply(
                                r,
                                [n + " --\x3e "].concat(o),
                            );
                        }),
                        n
                    );
                })(),
            );
            r._RF.pop();
        },
    };
});
