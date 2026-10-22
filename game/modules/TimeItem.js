System.register(
    "chunks:///_virtual/TimeItem.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./TimeUtil.ts",
        "./EventMgr.ts",
        "./EventType.ts",
        "./GameMgr.ts",
        "./Debug.ts",
        "./Global.ts",
    ],
    function (e) {
        var t, i, s, n, o, l, r, h, m, a, f, u, T, c, _, p, v, z, g;
        return {
            setters: [
                function (e) {
                    ((t = e.applyDecoratedDescriptor),
                        (i = e.inheritsLoose),
                        (s = e.initializerDefineProperty),
                        (n = e.assertThisInitialized),
                        (o = e.createClass));
                },
                function (e) {
                    ((l = e.cclegacy),
                        (r = e._decorator),
                        (h = e.Node),
                        (m = e.Label),
                        (a = e.tween),
                        (f = e.v3),
                        (u = e.Color),
                        (T = e.Component));
                },
                function (e) {
                    c = e.TimeUtil;
                },
                function (e) {
                    _ = e.EventMgr;
                },
                function (e) {
                    p = e.EventType;
                },
                function (e) {
                    v = e.GameMgr;
                },
                function (e) {
                    z = e.Debug;
                },
                function (e) {
                    g = e.Global;
                },
            ],
            execute: function () {
                var d, b, R, w, y;
                l._RF.push({}, "593ddSYq4ZHBoj/JdZW6MVk", "TimeItem", void 0);
                var L = r.ccclass,
                    I = r.property,
                    M = "TimeItem";
                e(
                    "TimeItem",
                    ((d = L("UIItem/TimeItem")),
                    (b = I(h)),
                    d(
                        ((y = t(
                            (w = (function (e) {
                                function t() {
                                    for (
                                        var t,
                                            i = arguments.length,
                                            o = new Array(i),
                                            l = 0;
                                        l < i;
                                        l++
                                    )
                                        o[l] = arguments[l];
                                    return (
                                        (t =
                                            e.call.apply(e, [this].concat(o)) ||
                                            this),
                                        s(t, "nz", y, n(t)),
                                        (t._label = null),
                                        (t.leftTime = 0),
                                        (t._freezeTime = 0),
                                        (t._freeze = !1),
                                        (t._pause = !1),
                                        (t._tw = null),
                                        t
                                    );
                                }
                                i(t, e);
                                var l = t.prototype;
                                return (
                                    (l.onLoad = function () {
                                        ((this._label =
                                            this.getComponentInChildren(m)),
                                            (globalThis.TimeItem = this),
                                            _.on(p.Revive, this.onRevive, this),
                                            _.on(
                                                p.UseSkillFreezeTime,
                                                this.onUseSkillFreeze,
                                                this,
                                            ),
                                            _.on(
                                                p.TimeReset,
                                                this.onTimeReset,
                                                this,
                                            ));
                                    }),
                                    (l.onDestroy = function () {
                                        (_.off(p.Revive, this.onRevive, this),
                                            _.off(
                                                p.UseSkillFreezeTime,
                                                this.onUseSkillFreeze,
                                                this,
                                            ),
                                            _.off(
                                                p.TimeReset,
                                                this.onTimeReset,
                                                this,
                                            ));
                                    }),
                                    (l.update = function (e) {
                                        if (
                                            !this._pause &&
                                            !v.Pause &&
                                            -1 !== g.Level_Time
                                        )
                                            if (this._freeze)
                                                ((this._freezeTime -= e),
                                                    this._freezeTime <= 0 &&
                                                        ((this._freeze = !1),
                                                        z.Log(M, "结束冰冻")));
                                            else {
                                                var t = this.leftTime;
                                                ((this.LeftTime -= e),
                                                    t > g.Time_Out_Alert_Time &&
                                                        this.leftTime <=
                                                            g.Time_Out_Alert_Time &&
                                                        (_.emit(p.TimeOutAlert),
                                                        this._tw &&
                                                            this._tw.stop(),
                                                        (this._tw = a(this.nz)
                                                            .sequence(
                                                                a(this.nz).to(
                                                                    0.5,
                                                                    {
                                                                        scale: f(
                                                                            1.2,
                                                                            1.2,
                                                                            1,
                                                                        ),
                                                                    },
                                                                ),
                                                                a(this.nz).to(
                                                                    0.5,
                                                                    {
                                                                        scale: f(
                                                                            1,
                                                                            1,
                                                                            1,
                                                                        ),
                                                                    },
                                                                ),
                                                            )
                                                            .repeatForever()
                                                            .start())),
                                                    this.leftTime <= 0 &&
                                                        ((this._pause = !0),
                                                        _.emit(p.TimeOut)));
                                            }
                                    }),
                                    (l.onTimeReset = function () {
                                        ((this._pause = !1),
                                            (this.LeftTime = g.Level_Time),
                                            (this.nz.scale = f(1, 1, 1)),
                                            this._tw &&
                                                (this._tw.stop(),
                                                (this._tw = null)));
                                    }),
                                    (l.onRevive = function () {
                                        ((this._pause = !1),
                                            (this.LeftTime = g.Revive_Add_Time),
                                            (this.nz.scale = f(1, 1, 1)),
                                            this._tw &&
                                                (this._tw.stop(),
                                                (this._tw = null)));
                                    }),
                                    (l.onUseSkillFreeze = function () {
                                        ((this._freeze = !0),
                                            (this._freezeTime = g.Freeze_Time),
                                            z.Log(M, "开始冰冻"));
                                    }),
                                    o(t, [
                                        {
                                            key: "LeftTime",
                                            get: function () {
                                                return this.leftTime;
                                            },
                                            set: function (e) {
                                                ((this.leftTime = Math.max(
                                                    e,
                                                    0,
                                                )),
                                                    _.emit(
                                                        p.TimeTick,
                                                        this.leftTime,
                                                    ),
                                                    (this._label.string =
                                                        c.formatTime_HHMMSS(
                                                            1e3 *
                                                                Math.round(
                                                                    this
                                                                        .leftTime,
                                                                ),
                                                        )),
                                                    (this._label.color =
                                                        this.leftTime <= 5
                                                            ? u.RED
                                                            : u.WHITE));
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })(T)).prototype,
                            "nz",
                            [b],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            },
                        )),
                        (R = w)),
                    ) || R),
                );
                l._RF.pop();
            },
        };
    },
);
