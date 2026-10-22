System.register(
    "chunks:///_virtual/SkillBox.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./SkillMgr.ts",
        "./SkillType.ts",
        "./UIMgr.ts",
        "./UI.ts",
        "./EventMgr.ts",
        "./EventType.ts",
        "./ResMgr.ts",
        "./Bundle.ts",
        "./CfgSkillInfo.ts",
        "./GameMgr.ts",
        "./Shake.ts",
        "./Breath.ts",
        "./RecoveryMgr.ts",
    ],
    function (t) {
        var e,
            n,
            i,
            o,
            l,
            r,
            s,
            a,
            c,
            u,
            f,
            h,
            k,
            p,
            d,
            S,
            g,
            C,
            v,
            y,
            b,
            B,
            m,
            T,
            M,
            R;
        return {
            setters: [
                function (t) {
                    ((e = t.applyDecoratedDescriptor),
                        (n = t.inheritsLoose),
                        (i = t.initializerDefineProperty),
                        (o = t.assertThisInitialized));
                },
                function (t) {
                    ((l = t.cclegacy),
                        (r = t._decorator),
                        (s = t.Label),
                        (a = t.macro),
                        (c = t.Node),
                        (u = t.Sprite),
                        (f = t.tween),
                        (h = t.v3),
                        (k = t.Component));
                },
                function (t) {
                    p = t.SkillMgr;
                },
                function (t) {
                    d = t.SkillType;
                },
                function (t) {
                    S = t.UIMgr;
                },
                function (t) {
                    g = t.UI;
                },
                function (t) {
                    C = t.EventMgr;
                },
                function (t) {
                    v = t.EventType;
                },
                function (t) {
                    y = t.ResMgr;
                },
                function (t) {
                    b = t.Bundle;
                },
                function (t) {
                    B = t.CfgSkillInfo;
                },
                function (t) {
                    m = t.GameMgr;
                },
                function (t) {
                    T = t.Shake;
                },
                function (t) {
                    M = t.Breath;
                },
                function (t) {
                    R = t.RecoveryMgr;
                },
            ],
            execute: function () {
                var E, I, P, U, w, A, D, F, z;
                l._RF.push({}, "91afeFPhJ5NMIErfu4XaCg6", "SkillBox", void 0);
                var G = r.ccclass,
                    _ = r.property;
                t(
                    "SkillBox",
                    ((E = G("Game/SkillBox")),
                    (I = _([s])),
                    (P = _(M)),
                    (U = _(T)),
                    E(
                        ((D = e(
                            (A = (function (t) {
                                function e() {
                                    for (
                                        var e,
                                            n = arguments.length,
                                            l = new Array(n),
                                            r = 0;
                                        r < n;
                                        r++
                                    )
                                        l[r] = arguments[r];
                                    return (
                                        (e =
                                            t.call.apply(t, [this].concat(l)) ||
                                            this),
                                        i(e, "skillCntTips", D, o(e)),
                                        i(e, "tipBreath", F, o(e)),
                                        i(e, "iconShake", z, o(e)),
                                        e
                                    );
                                }
                                n(e, t);
                                var l = e.prototype;
                                return (
                                    (l.onLoad = function () {
                                        (C.on(
                                            v.UpdateSkillCnt,
                                            this.onUpdateSkillCnt,
                                            this,
                                        ),
                                            C.on(
                                                v.AddSkill,
                                                this.onAddSkill,
                                                this,
                                            ));
                                    }),
                                    (l.start = function () {
                                        for (
                                            var t = 0;
                                            t < this.skillCntTips.length;
                                            t++
                                        ) {
                                            var e = this.skillCntTips[t],
                                                n = p.skillCnt(t);
                                            ((e.string = "" + n),
                                                (e.node.parent.active = n > 0));
                                        }
                                        this.schedule(
                                            this.onCheckStuck,
                                            1,
                                            a.REPEAT_FOREVER,
                                        );
                                    }),
                                    (l.onDestroy = function () {
                                        (C.off(
                                            v.UpdateSkillCnt,
                                            this.onUpdateSkillCnt,
                                            this,
                                        ),
                                            C.off(
                                                v.AddSkill,
                                                this.onAddSkill,
                                                this,
                                            ));
                                    }),
                                    (l.onCheckStuck = function () {
                                        var t = m.isStucked;
                                        ((this.tipBreath.node.active = t),
                                            (this.tipBreath.enabled = t),
                                            (this.iconShake.enabled = t));
                                    }),
                                    (l.onUpdateSkillCnt = function (t, e) {
                                        var n = this.skillCntTips[t];
                                        ((n.string = "" + e),
                                            (n.node.parent.active = e > 0));
                                    }),
                                    (l.onAddSkill = function (t) {
                                        var e = new c();
                                        ((e.addComponent(u).spriteFrame =
                                            y.getSpriteFrame(
                                                b.Icon,
                                                B[t].icon,
                                            )),
                                            m.EffectsLayer.addChild(e));
                                        var n = this.node.children[t],
                                            i = f(e);
                                        (i.set({ scale: h(0, 0, 0) }),
                                            i.to(
                                                0.2,
                                                { scale: h(1, 1, 1) },
                                                { easing: "backOut" },
                                            ),
                                            i.delay(0.1),
                                            i.parallel(
                                                f(e).to(0.5, {
                                                    worldPosition:
                                                        n.worldPosition,
                                                }),
                                                f(e).to(0.5, {
                                                    scale: h(0.5, 0.5, 0.5),
                                                }),
                                            ),
                                            i.call(function () {
                                                (e.destroy(),
                                                    f(n)
                                                        .to(0.2, {
                                                            scale: h(
                                                                1.2,
                                                                1.2,
                                                                1,
                                                            ),
                                                        })
                                                        .to(0.2, {
                                                            scale: h(1, 1, 1),
                                                        })
                                                        .start());
                                            }),
                                            i.start());
                                    }),
                                    (l.handleSkill = function (t) {
                                        if (
                                            !(
                                                m.Pause ||
                                                m.IsRefreshing ||
                                                m.isPicking
                                            )
                                        )
                                            if (
                                                t === d.DoubleCoin &&
                                                m.IsDoubleCoinActive
                                            )
                                                S.open(g.Toast, "效果生效中");
                                            else if (p.hasSkill(t)) {
                                                var e = m.useSkill(t);
                                                e.ok ||
                                                    ("storage_error" ===
                                                    e.reason
                                                        ? m.recover(
                                                              function () {
                                                                  return m.useSkill(
                                                                      t,
                                                                      !0,
                                                                  );
                                                              },
                                                              function () {},
                                                          )
                                                        : S.open(
                                                              g.Toast,
                                                              t ===
                                                                  d.RefreshPosition
                                                                  ? "暂时无法刷新，请稍后重试"
                                                                  : R.message(
                                                                        e.reason,
                                                                    ),
                                                          ));
                                            } else
                                                m.canClaimSkill(t)
                                                    ? S.open(g.GetSkill, t)
                                                    : S.open(
                                                          g.Toast,
                                                          "本局补领已用完",
                                                      );
                                    }),
                                    (l.onBtnFreezeTimeClick = function () {
                                        this.handleSkill(d.FreezeTime);
                                    }),
                                    (l.onBtnEraseOneGroupClick = function () {
                                        this.handleSkill(d.EraseGroup);
                                    }),
                                    (l.onBtnRefreshPositionClick = function () {
                                        this.handleSkill(d.RefreshPosition);
                                    }),
                                    (l.onBtnDoubleCoinClick = function () {
                                        this.handleSkill(d.DoubleCoin);
                                    }),
                                    e
                                );
                            })(k)).prototype,
                            "skillCntTips",
                            [I],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return [];
                                },
                            },
                        )),
                        (F = e(A.prototype, "tipBreath", [P], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (z = e(A.prototype, "iconShake", [U], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (w = A)),
                    ) || w),
                );
                l._RF.pop();
            },
        };
    },
);
