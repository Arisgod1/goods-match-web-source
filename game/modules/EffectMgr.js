System.register("chunks:///_virtual/EffectMgr.ts", ["cc"], function (t) {
    var e, n;
    return {
        setters: [
            function (t) {
                ((e = t.cclegacy), (n = t.instantiate));
            },
        ],
        execute: function () {
            e._RF.push({}, "99a40aze3xOO67617VY8NcF", "EffectMgr", void 0);
            t(
                "EffectMgr",
                (function () {
                    function t() {}
                    return (
                        (t.create = function (t, e, c) {
                            var r = n(t);
                            return (
                                e.addChild(r),
                                c && r.setWorldPosition(c),
                                r
                            );
                        }),
                        t
                    );
                })(),
            );
            e._RF.pop();
        },
    };
});
