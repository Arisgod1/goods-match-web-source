System.register(
    "chunks:///_virtual/PassRewardItem.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./GameMgr.ts",
        "./RewardMgr.ts",
        "./EventMgr.ts",
        "./EventType.ts",
    ],
    function (e) {
        var t, r, n, s, a, o, i, c, u, l, p, f, g;
        return {
            setters: [
                function (e) {
                    ((t = e.applyDecoratedDescriptor),
                        (r = e.inheritsLoose),
                        (n = e.initializerDefineProperty),
                        (s = e.assertThisInitialized));
                },
                function (e) {
                    ((a = e.cclegacy),
                        (o = e._decorator),
                        (i = e.ProgressBar),
                        (c = e.Label),
                        (u = e.Component));
                },
                function (e) {
                    l = e.GameMgr;
                },
                function (e) {
                    p = e.RewardMgr;
                },
                function (e) {
                    f = e.EventMgr;
                },
                function (e) {
                    g = e.EventType;
                },
            ],
            execute: function () {
                var d, h, w, P, v, y, m;
                a._RF.push(
                    {},
                    "9dcc4Z2wSFM/LXwf99wJrU6",
                    "PassRewardItem",
                    void 0,
                );
                var b = o.ccclass,
                    R = o.property;
                e(
                    "PassRewardItem",
                    ((d = b("UIItem/PassRewardItem")),
                    (h = R(i)),
                    (w = R(c)),
                    d(
                        ((y = t(
                            (v = (function (e) {
                                function t() {
                                    for (
                                        var t,
                                            r = arguments.length,
                                            a = new Array(r),
                                            o = 0;
                                        o < r;
                                        o++
                                    )
                                        a[o] = arguments[o];
                                    return (
                                        (t =
                                            e.call.apply(e, [this].concat(a)) ||
                                            this),
                                        n(t, "progressBar", y, s(t)),
                                        n(t, "lbProgress", m, s(t)),
                                        t
                                    );
                                }
                                r(t, e);
                                var a = t.prototype;
                                return (
                                    (a.onLoad = function () {
                                        f.on(
                                            g.GetPassReward,
                                            this.onUpdateState,
                                            this,
                                        );
                                    }),
                                    (a.onDestroy = function () {
                                        f.off(
                                            g.GetPassReward,
                                            this.onUpdateState,
                                            this,
                                        );
                                    }),
                                    (a.start = function () {
                                        this.onUpdateState();
                                    }),
                                    (a.onUpdateState = function () {
                                        var e = p.NextPassTarget,
                                            t = Math.min(l.CurPassedLevel, e);
                                        ((this.progressBar.progress = t / e),
                                            (this.lbProgress.string =
                                                t + "/" + e));
                                    }),
                                    t
                                );
                            })(u)).prototype,
                            "progressBar",
                            [h],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            },
                        )),
                        (m = t(v.prototype, "lbProgress", [w], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (P = v)),
                    ) || P),
                );
                a._RF.pop();
            },
        };
    },
);
