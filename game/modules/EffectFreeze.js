System.register(
    "chunks:///_virtual/EffectFreeze.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./Global.ts",
        "./EventType.ts",
        "./EventMgr.ts",
        "./AudioMgr.ts",
    ],
    function (e) {
        var t, n, o, i, s, r, c, u, f;
        return {
            setters: [
                function (e) {
                    t = e.inheritsLoose;
                },
                function (e) {
                    ((n = e.cclegacy),
                        (o = e._decorator),
                        (i = e.isValid),
                        (s = e.Component));
                },
                function (e) {
                    r = e.Global;
                },
                function (e) {
                    c = e.EventType;
                },
                function (e) {
                    u = e.EventMgr;
                },
                function (e) {
                    f = e.AudioMgr;
                },
            ],
            execute: function () {
                var l;
                n._RF.push(
                    {},
                    "9e7aexhG2pDCacTPHtgSOhx",
                    "EffectFreeze",
                    void 0,
                );
                var a = o.ccclass;
                (o.property,
                    e(
                        "EffectFreeze",
                        a("Game/EffectFreeze")(
                            (l = (function (e) {
                                function n() {
                                    return e.apply(this, arguments) || this;
                                }
                                t(n, e);
                                var o = n.prototype;
                                return (
                                    (o.onLoad = function () {
                                        u.on(
                                            c.UseSkillFreezeTime,
                                            this.onRemove,
                                            this,
                                        );
                                    }),
                                    (o.onDestroy = function () {
                                        (u.off(
                                            c.UseSkillFreezeTime,
                                            this.onRemove,
                                            this,
                                        ),
                                            this.unscheduleAllCallbacks());
                                    }),
                                    (o.start = function () {
                                        (this.scheduleOnce(
                                            this.onRemove,
                                            r.Freeze_Time,
                                        ),
                                            f.playSfx("冰冻道具"));
                                    }),
                                    (o.onRemove = function () {
                                        i(this.node) && this.node.destroy();
                                    }),
                                    n
                                );
                            })(s)),
                        ) || l,
                    ));
                n._RF.pop();
            },
        };
    },
);
