System.register(
    "chunks:///_virtual/Goods.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./GameMgr.ts",
        "./ResMgr.ts",
        "./Bundle.ts",
        "./EffectMgr.ts",
        "./Mode.ts",
        "./cfg_icon.ts",
    ],
    function (t) {
        var e,
            i,
            n,
            s,
            o,
            r,
            c,
            a,
            l,
            u,
            p,
            h,
            f,
            g,
            d,
            y,
            v,
            m,
            T,
            b,
            S,
            _,
            I,
            M;
        return {
            setters: [
                function (t) {
                    ((e = t.applyDecoratedDescriptor),
                        (i = t.inheritsLoose),
                        (n = t.initializerDefineProperty),
                        (s = t.assertThisInitialized),
                        (o = t.createClass));
                },
                function (t) {
                    ((r = t.cclegacy),
                        (c = t._decorator),
                        (a = t.Prefab),
                        (l = t.UIOpacity),
                        (u = t.Sprite),
                        (p = t.Node),
                        (h = t.tween),
                        (f = t.v3),
                        (g = t.Color),
                        (d = t.color),
                        (y = t.Component));
                },
                function (t) {
                    v = t.GameMgr;
                },
                function (t) {
                    m = t.ResMgr;
                },
                function (t) {
                    T = t.Bundle;
                },
                function (t) {
                    b = t.EffectMgr;
                },
                function (t) {
                    S = t.Mode;
                },
                function (t) {
                    ((_ = t.cfg_icon_tp),
                        (I = t.cfg_icon_gs),
                        (M = t.cfg_icon_ls));
                },
            ],
            execute: function () {
                var R, k, C, F, O;
                r._RF.push({}, "11c98MJgY1AT7pHyH/0IZ9r", "Goods", void 0);
                var P = c.ccclass,
                    E = c.property;
                t(
                    "Goods",
                    ((R = P("Game/Goods")),
                    (k = E(a)),
                    R(
                        ((O = e(
                            (F = (function (t) {
                                function e() {
                                    for (
                                        var e,
                                            i = arguments.length,
                                            o = new Array(i),
                                            r = 0;
                                        r < i;
                                        r++
                                    )
                                        o[r] = arguments[r];
                                    return (
                                        ((e =
                                            t.call.apply(t, [this].concat(o)) ||
                                            this).uiOpacity = null),
                                        (e.sp = null),
                                        n(e, "parMergePre", O, s(e)),
                                        (e.isRemoving = !1),
                                        (e.visible = !0),
                                        (e.id = 0),
                                        (e.layer = 0),
                                        (e.slot = 0),
                                        e
                                    );
                                }
                                (i(e, t),
                                    (e.isValidId = function (t) {
                                        var e = [_, I, M][v.mode];
                                        return (
                                            Number.isInteger(t) &&
                                            t > 0 &&
                                            !(
                                                null == e ||
                                                !e.some(function (e) {
                                                    return e.id === t;
                                                })
                                            )
                                        );
                                    }));
                                var r = e.prototype;
                                return (
                                    (r.onLoad = function () {
                                        ((this.uiOpacity =
                                            this.getComponent(l)),
                                            (this.sp =
                                                this.getComponentInChildren(u)),
                                            this.node.on(
                                                p.EventType.TOUCH_START,
                                                this.onTouchStart,
                                                this,
                                            ));
                                    }),
                                    (r.onDestroy = function () {
                                        this.node.off(
                                            p.EventType.TOUCH_START,
                                            this.onTouchStart,
                                            this,
                                        );
                                    }),
                                    (r.onTouchStart = function (t) {
                                        if (
                                            0 === this.layer &&
                                            !this.isRemoving &&
                                            !v.isPicking
                                        ) {
                                            var e = t.getUILocation();
                                            v.pick(this, e) &&
                                                (this.Visible = !1);
                                        }
                                    }),
                                    (r.remove = function () {
                                        var t = this;
                                        if (!this.isRemoving) {
                                            ((this.isRemoving = !0),
                                                this.node.off(
                                                    p.EventType.TOUCH_START,
                                                    this.onTouchStart,
                                                    this,
                                                ));
                                            var e = h(this.sp.node);
                                            (e.to(0.15, {
                                                scale: f(1.1, 0.9, 1),
                                            }),
                                                e.to(0.15, {
                                                    scale: f(0.9, 1.1, 1),
                                                }),
                                                e.call(function () {
                                                    if (0 === t.layer) {
                                                        var e =
                                                            t.node.getWorldPosition();
                                                        ((e.y -= 30),
                                                            b.create(
                                                                t.parMergePre,
                                                                v.EffectsLayer,
                                                                e,
                                                            ));
                                                    }
                                                    t.node.destroy();
                                                }),
                                                e.start());
                                        }
                                    }),
                                    (r.bounce = function (t) {
                                        (void 0 === t && (t = 0),
                                            h(this.sp.node)
                                                .delay(t)
                                                .to(0.1, {
                                                    scale: f(0.9, 1.1, 1),
                                                })
                                                .to(0.1, {
                                                    scale: f(1.1, 0.9, 1),
                                                })
                                                .to(0.1, { scale: f(1, 1, 1) })
                                                .start());
                                    }),
                                    o(e, [
                                        {
                                            key: "Sp",
                                            get: function () {
                                                return this.sp;
                                            },
                                        },
                                        {
                                            key: "Visible",
                                            get: function () {
                                                return this.visible;
                                            },
                                            set: function (t) {
                                                ((this.visible = t),
                                                    (this.uiOpacity =
                                                        this.getComponent(l)),
                                                    (this.uiOpacity.opacity =
                                                        this.visible
                                                            ? 255
                                                            : 0));
                                            },
                                        },
                                        {
                                            key: "Id",
                                            get: function () {
                                                return this.id;
                                            },
                                            set: function (t) {
                                                if (e.isValidId(t))
                                                    switch (
                                                        ((this.id = t), v.mode)
                                                    ) {
                                                        case S.tp:
                                                            this.sp.spriteFrame =
                                                                m.getSpriteFrame(
                                                                    T.Icon,
                                                                    "tp" + t,
                                                                    "tp/",
                                                                );
                                                            break;
                                                        case S.gs:
                                                            this.sp.spriteFrame =
                                                                m.getSpriteFrame(
                                                                    T.Icon,
                                                                    "gs" + t,
                                                                    "gs/",
                                                                );
                                                            break;
                                                        case S.ls:
                                                            this.sp.spriteFrame =
                                                                m.getSpriteFrame(
                                                                    T.Icon,
                                                                    "ls" + t,
                                                                    "ls/",
                                                                );
                                                    }
                                                else this.node.destroy();
                                            },
                                        },
                                        {
                                            key: "Layer",
                                            get: function () {
                                                return this.layer;
                                            },
                                            set: function (t) {
                                                this.layer = t;
                                                var e = 0 === this.layer;
                                                this.sp.color = e
                                                    ? g.WHITE
                                                    : d(100, 100, 100, 255);
                                            },
                                        },
                                        {
                                            key: "Slot",
                                            get: function () {
                                                return this.slot;
                                            },
                                            set: function (t) {
                                                this.slot = t;
                                            },
                                        },
                                    ]),
                                    e
                                );
                            })(y)).prototype,
                            "parMergePre",
                            [k],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            },
                        )),
                        (C = F)),
                    ) || C),
                );
                r._RF.pop();
            },
        };
    },
);
