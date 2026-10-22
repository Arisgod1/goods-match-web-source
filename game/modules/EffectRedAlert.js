System.register(
    "chunks:///_virtual/EffectRedAlert.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./EventMgr.ts",
        "./EventType.ts",
        "./Global.ts",
        "./AudioMgr.ts",
    ],
    function (t) {
        var e, i, n, o, r, c, u, s, l, a, f;
        return {
            setters: [
                function (t) {
                    e = t.inheritsLoose;
                },
                function (t) {
                    ((i = t.cclegacy),
                        (n = t._decorator),
                        (o = t.UIOpacity),
                        (r = t.tween),
                        (c = t.isValid),
                        (u = t.Component));
                },
                function (t) {
                    s = t.EventMgr;
                },
                function (t) {
                    l = t.EventType;
                },
                function (t) {
                    a = t.Global;
                },
                function (t) {
                    f = t.AudioMgr;
                },
            ],
            execute: function () {
                var p;
                i._RF.push(
                    {},
                    "b7f21+tVI1AOoD8l7luTPtj",
                    "EffectRedAlert",
                    void 0,
                );
                var h = n.ccclass;
                (n.property,
                    t(
                        "EffectRedAlert",
                        h("Game/EffectRedAlert")(
                            (p = (function (t) {
                                function i() {
                                    for (
                                        var e,
                                            i = arguments.length,
                                            n = new Array(i),
                                            o = 0;
                                        o < i;
                                        o++
                                    )
                                        n[o] = arguments[o];
                                    return (
                                        ((e =
                                            t.call.apply(t, [this].concat(n)) ||
                                            this).uiOpacity = null),
                                        e
                                    );
                                }
                                e(i, t);
                                var n = i.prototype;
                                return (
                                    (n.onLoad = function () {
                                        ((this.uiOpacity =
                                            this.getComponent(o)),
                                            s.on(
                                                l.TimeOutAlert,
                                                this.onTimeOutAlert,
                                                this,
                                            ));
                                    }),
                                    (n.onDestroy = function () {
                                        s.off(
                                            l.TimeOutAlert,
                                            this.onTimeOutAlert,
                                            this,
                                        );
                                    }),
                                    (n.start = function () {
                                        var t = r(this.uiOpacity);
                                        (t.sequence(
                                            r(this.uiOpacity).to(0.5, {
                                                opacity: 0,
                                            }),
                                            r(this.uiOpacity).to(0.5, {
                                                opacity: 255,
                                            }),
                                        ),
                                            t.repeatForever(),
                                            t.start(),
                                            this.scheduleOnce(
                                                this.onTimeOutAlert,
                                                a.Time_Out_Alert_Time,
                                            ),
                                            f.playSfx("倒计时"));
                                    }),
                                    (n.onTimeOutAlert = function () {
                                        (this.unscheduleAllCallbacks(),
                                            c(this.node) &&
                                                this.node.destroy());
                                    }),
                                    i
                                );
                            })(u)),
                        ) || p,
                    ));
                i._RF.pop();
            },
        };
    },
);
