System.register(
    "chunks:///_virtual/Stage.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./GameMgr.ts",
        "./ArrayUtil.ts",
        "./ShelveLocker.ts",
        "./ShelveBase.ts",
        "./CommonShelve.ts",
        "./SmallShelve.ts",
        "./UIMgr.ts",
        "./UI.ts",
        "./Mode.ts",
        "./cfg_level.ts",
        "./cfg_icon.ts",
        "./ResMgr.ts",
        "./Bundle.ts",
        "./Global.ts",
        "./EventMgr.ts",
        "./EventType.ts",
        "./ComboBox.ts",
        "./Goods.ts",
        "./AudioMgr.ts",
        "./SkillType.ts",
        "./GameSave.ts",
        "./ItemMgr.ts",
        "./GoodsLayout.ts",
        "./BoardLayout.ts",
    ],
    function (e) {
        var t,
            o,
            i,
            n,
            r,
            s,
            l,
            a,
            u,
            h,
            c,
            f,
            d,
            v,
            p,
            g,
            m,
            y,
            b,
            C,
            S,
            k,
            B,
            A,
            P,
            L,
            R,
            I,
            x,
            G,
            w,
            O,
            T,
            _,
            D,
            U,
            M,
            E,
            z,
            F,
            W,
            j,
            N,
            q,
            H,
            Q,
            V,
            K,
            Y,
            X,
            Z,
            J;
        return {
            setters: [
                function (e) {
                    ((t = e.applyDecoratedDescriptor),
                        (o = e.inheritsLoose),
                        (i = e.initializerDefineProperty),
                        (n = e.assertThisInitialized),
                        (r = e.createForOfIteratorHelperLoose),
                        (s = e.createClass));
                },
                function (e) {
                    ((l = e.cclegacy),
                        (a = e._decorator),
                        (u = e.Sprite),
                        (h = e.Node),
                        (c = e.Prefab),
                        (f = e.view),
                        (d = e.KeyCode),
                        (v = e.macro),
                        (p = e.ResolutionPolicy),
                        (g = e.UITransform),
                        (m = e.instantiate),
                        (y = e.math),
                        (b = e.Component),
                        (C = e.Widget));
                },
                function (e) {
                    S = e.GameMgr;
                },
                function (e) {
                    k = e.ArrayUtil;
                },
                function (e) {
                    B = e.ShelveLocker;
                },
                function (e) {
                    A = e.ShelveBase;
                },
                function (e) {
                    P = e.CommonShelve;
                },
                function (e) {
                    L = e.SmallShelve;
                },
                function (e) {
                    R = e.UIMgr;
                },
                function (e) {
                    I = e.UI;
                },
                function (e) {
                    ((x = e.ModeName), (G = e.Mode));
                },
                function (e) {
                    ((w = e.cfg_level_ls),
                        (O = e.cfg_level_gs),
                        (T = e.cfg_level_tp));
                },
                function (e) {
                    ((_ = e.cfg_icon_ls),
                        (D = e.cfg_icon_gs),
                        (U = e.cfg_icon_tp));
                },
                function (e) {
                    M = e.ResMgr;
                },
                function (e) {
                    E = e.Bundle;
                },
                function (e) {
                    z = e.Global;
                },
                function (e) {
                    F = e.EventMgr;
                },
                function (e) {
                    W = e.EventType;
                },
                function (e) {
                    j = e.ComboBox;
                },
                function (e) {
                    N = e.Goods;
                },
                function (e) {
                    q = e.AudioMgr;
                },
                function (e) {
                    H = e.SkillType;
                },
                function (e) {
                    ((Q = e.failure), (V = e.success));
                },
                function (e) {
                    K = e.ItemMgr;
                },
                function (e) {
                    Y = e.distributeGoods;
                },
                function (e) {
                    ((X = e.needsPortraitFrame),
                        (Z = e.boundsInSpace),
                        (J = e.fitBoard));
                },
            ],
            execute: function () {
                var $,
                    ee,
                    te,
                    oe,
                    ie,
                    ne,
                    re,
                    se,
                    le,
                    ae,
                    ue,
                    he,
                    ce,
                    fe,
                    de,
                    ve,
                    pe,
                    ge,
                    me;
                l._RF.push({}, "c58abNYUNtGTaELPAn63nuw", "Stage", void 0);
                var ye = a.ccclass,
                    be = a.property;
                e(
                    "Stage",
                    (($ = ye("Game/Stage")),
                    (ee = be(u)),
                    (te = be(h)),
                    (oe = be(h)),
                    (ie = be(h)),
                    (ne = be(j)),
                    (re = be(h)),
                    (se = be(c)),
                    (le = be(c)),
                    $(
                        ((he = t(
                            (ue = (function (e) {
                                function t() {
                                    for (
                                        var t,
                                            o = arguments.length,
                                            r = new Array(o),
                                            s = 0;
                                        s < o;
                                        s++
                                    )
                                        r[s] = arguments[s];
                                    return (
                                        (t =
                                            e.call.apply(e, [this].concat(r)) ||
                                            this),
                                        i(t, "bg", he, n(t)),
                                        i(t, "shelveBox", ce, n(t)),
                                        i(t, "effectsLayer", fe, n(t)),
                                        i(t, "skillBox", de, n(t)),
                                        i(t, "comboBox", ve, n(t)),
                                        i(t, "tip", pe, n(t)),
                                        i(t, "shelveLockerPre", ge, n(t)),
                                        i(t, "shelvePreArr", me, n(t)),
                                        (t.levelCfg = null),
                                        (t.levelData = null),
                                        (t.iconCfg = null),
                                        (t.shelveArr = []),
                                        (t.doubleCoinLeft = 0),
                                        (t.roundId = 0),
                                        (t.disposed = !1),
                                        (t.winRecovery = !1),
                                        (t.layoutQueued = !1),
                                        (t.boardReady = !1),
                                        (t.originalPolicy = null),
                                        (t.letterboxed = !1),
                                        (t.isBusy = !1),
                                        t
                                    );
                                }
                                o(t, e);
                                var l = t.prototype;
                                return (
                                    (l.onLoad = function () {
                                        ((this.originalPolicy =
                                            f.getResolutionPolicy()),
                                            (this.roundId = S.roundId),
                                            S.registerStage(this),
                                            this.node.on(
                                                h.EventType.SIZE_CHANGED,
                                                this.queueBoardLayout,
                                                this,
                                            ),
                                            f.on(
                                                "canvas-resize",
                                                this.queueBoardLayout,
                                                this,
                                            ));
                                        var e = "bg_" + x[S.mode];
                                        ((this.bg.spriteFrame =
                                            M.getSpriteFrame(
                                                E.Game,
                                                e,
                                                "image/",
                                            )),
                                            F.on(
                                                W.MergeGoods,
                                                this.onMergeGoods,
                                                this,
                                            ),
                                            F.on(
                                                W.TimeOut,
                                                this.onTimeOut,
                                                this,
                                            ),
                                            F.on(
                                                W.TimeOutAlert,
                                                this.onTimeOutAlert,
                                                this,
                                            ),
                                            F.on(
                                                W.UseSkillFreezeTime,
                                                this.onUseSkillFreezeTime,
                                                this,
                                            ),
                                            F.on(
                                                W.UseSkillDoubleCoin,
                                                this.onUseDoubleCoin,
                                                this,
                                            ),
                                            F.on(
                                                W.UseSkillRefreshPosition,
                                                this.onUseRefreshPos,
                                                this,
                                            ),
                                            F.on(
                                                W.UseSkillEraseGroup,
                                                this.onUseEraseGroup,
                                                this,
                                            ));
                                    }),
                                    (l.onPreviewKey = function (e) {
                                        e.keyCode !== d.KEY_Q ||
                                            S.Pause ||
                                            this.disposed ||
                                            !S.isCurrentRound(this.roundId) ||
                                            this.showWin();
                                    }),
                                    (l.onDestroy = function () {
                                        ((this.disposed = !0),
                                            this.node.off(
                                                h.EventType.SIZE_CHANGED,
                                                this.queueBoardLayout,
                                                this,
                                            ),
                                            f.off(
                                                "canvas-resize",
                                                this.queueBoardLayout,
                                                this,
                                            ),
                                            this.letterboxed &&
                                                ((this.letterboxed = !1),
                                                f.setResolutionPolicy(
                                                    this.originalPolicy,
                                                )),
                                            (this.isBusy = !1),
                                            (this.doubleCoinLeft = 0),
                                            S.unregisterStage(this),
                                            R.close(I.Game),
                                            this.unscheduleAllCallbacks(),
                                            F.off(
                                                W.MergeGoods,
                                                this.onMergeGoods,
                                                this,
                                            ),
                                            F.off(
                                                W.TimeOut,
                                                this.onTimeOut,
                                                this,
                                            ),
                                            F.off(
                                                W.TimeOutAlert,
                                                this.onTimeOutAlert,
                                                this,
                                            ),
                                            F.off(
                                                W.UseSkillFreezeTime,
                                                this.onUseSkillFreezeTime,
                                                this,
                                            ),
                                            F.off(
                                                W.UseSkillDoubleCoin,
                                                this.onUseDoubleCoin,
                                                this,
                                            ),
                                            F.off(
                                                W.UseSkillRefreshPosition,
                                                this.onUseRefreshPos,
                                                this,
                                            ),
                                            F.off(
                                                W.UseSkillEraseGroup,
                                                this.onUseEraseGroup,
                                                this,
                                            ));
                                    }),
                                    (l.update = function (e) {
                                        !S.Pause &&
                                            S.isCurrentRound(this.roundId) &&
                                            (this.doubleCoinLeft = Math.max(
                                                0,
                                                this.doubleCoinLeft - e,
                                            ));
                                    }),
                                    (l.prepareSkill = function (e) {
                                        if (
                                            this.disposed ||
                                            this.isBusy ||
                                            !S.isCurrentRound(this.roundId)
                                        )
                                            return Q("unavailable");
                                        if (
                                            e === H.DoubleCoin &&
                                            this.doubleCoinLeft > 0
                                        )
                                            return Q("unavailable");
                                        if (e !== H.RefreshPosition) return V();
                                        for (
                                            var t = [].concat(S.goodsArr),
                                                o = 0,
                                                i = Object.values(S.goodsData);
                                            o < i.length;
                                            o++
                                        )
                                            for (
                                                var n = i[o],
                                                    s = 0,
                                                    l = Object.values(n);
                                                s < l.length;
                                                s++
                                            ) {
                                                var a = l[s];
                                                t.push.apply(t, a);
                                            }
                                        for (
                                            var u, h = r(this.shelveArr);
                                            !(u = h()).done;

                                        ) {
                                            var c = u.value;
                                            t.push.apply(t, c.GoodsIdArr);
                                        }
                                        var f = Y(
                                            this.layoutShelves(),
                                            t,
                                            this.iconCfg.length,
                                        );
                                        return f ? V(f) : Q("invalid_config");
                                    }),
                                    (l.layoutShelves = function () {
                                        return this.shelveArr
                                            .filter(function (e) {
                                                return (
                                                    e instanceof P ||
                                                    e instanceof L
                                                );
                                            })
                                            .map(function (e) {
                                                return {
                                                    id: e.Id,
                                                    small: e instanceof L,
                                                };
                                            });
                                    }),
                                    (l.start = function () {
                                        switch (
                                            (R.open(I.Game),
                                            (this.tip.active =
                                                S.mode === G.tp &&
                                                0 === S.CurLevel),
                                            this.scheduleOnce(function () {
                                                S.isHardLevel &&
                                                    R.open(
                                                        I.StageTip,
                                                        "难度飙升",
                                                    );
                                            }, 1),
                                            S.mode)
                                        ) {
                                            case G.tp:
                                                ((this.levelCfg = T),
                                                    (this.iconCfg = U));
                                                break;
                                            case G.gs:
                                                ((this.levelCfg = O),
                                                    (this.iconCfg = D));
                                                break;
                                            case G.ls:
                                                ((this.levelCfg = w),
                                                    (this.iconCfg = _));
                                        }
                                        S.CurLevel >= this.levelCfg.length
                                            ? (this.levelData = k.pickItem(
                                                  this.levelCfg,
                                              ))
                                            : (this.levelData =
                                                  this.levelCfg[S.CurLevel]);
                                        var e = this.levelData.shelveMap,
                                            t = this.levelData.group,
                                            o = this.levelData.lockCnt,
                                            i = this.levelData.GoodsTypeCnt;
                                        ((z.Level_Time = this.levelData.time),
                                            F.emit(W.TimeReset),
                                            this.createShelves(e),
                                            this.createShelveLockers(o),
                                            this.createGoodsArr(t, i),
                                            this.createGoodsData()
                                                ? ((this.boardReady = !0),
                                                  this.queueBoardLayout(),
                                                  this.schedule(
                                                      this.onCheckWin,
                                                      0.5,
                                                      v.REPEAT_FOREVER,
                                                  ))
                                                : S.recover(
                                                      function () {
                                                          return Q(
                                                              "invalid_config",
                                                          );
                                                      },
                                                      function () {},
                                                      "关卡货架配置异常，可重新挑战或返回首页。",
                                                  ));
                                    }),
                                    (l.queueBoardLayout = function () {
                                        this.disposed ||
                                            !this.boardReady ||
                                            this.layoutQueued ||
                                            ((this.layoutQueued = !0),
                                            S.cancelPick(),
                                            this.scheduleOnce(
                                                this.applyBoardLayout,
                                            ));
                                    }),
                                    (l.updateViewportPolicy = function () {
                                        var e = f.getFrameSize(),
                                            t = X(e.width, e.height);
                                        t !== this.letterboxed &&
                                            (this.originalPolicy ||
                                                (this.originalPolicy =
                                                    f.getResolutionPolicy()),
                                            (this.letterboxed = t),
                                            f.setResolutionPolicy(
                                                t
                                                    ? p.SHOW_ALL
                                                    : this.originalPolicy,
                                            ));
                                    }),
                                    (l.applyBoardLayout = function () {
                                        var e;
                                        if (
                                            !this.disposed &&
                                            S.isCurrentRound(this.roundId)
                                        ) {
                                            this.updateViewportPolicy();
                                            var t =
                                                    null == (e = R.get(I.Game))
                                                        ? void 0
                                                        : e.node,
                                                o = this.node.getComponent(g),
                                                i = function e(t) {
                                                    var o = t.getComponent(C);
                                                    null != o &&
                                                        o.enabled &&
                                                        o.updateAlignment();
                                                    for (
                                                        var i,
                                                            n = r(t.children);
                                                        !(i = n()).done;

                                                    ) {
                                                        e(i.value);
                                                    }
                                                };
                                            (i(this.node), t && i(t));
                                            for (
                                                var n,
                                                    s = new Map(),
                                                    l = r(
                                                        this.skillBox.children,
                                                    );
                                                !(n = l()).done;

                                            ) {
                                                var a = n.value;
                                                s.set(a, 1.2);
                                            }
                                            var u = o.height * (1 - o.anchorY);
                                            if (t)
                                                for (
                                                    var h = 0,
                                                        c = [
                                                            "SettingItem",
                                                            "TimeItem",
                                                            "CoinItem",
                                                        ];
                                                    h < c.length;
                                                    h++
                                                ) {
                                                    var f = c[h],
                                                        d = t.getChildByName(f);
                                                    if (d) {
                                                        var v =
                                                            d.getChildByName(
                                                                "nz",
                                                            );
                                                        (v && s.set(v, 1.2),
                                                            (u = Math.min(
                                                                u,
                                                                Z(d, o, s)
                                                                    .bottom,
                                                            )));
                                                    }
                                                }
                                            var p = Math.max(
                                                    Z(this.skillBox, o, s).top,
                                                    Z(this.comboBox.node, o)
                                                        .top,
                                                ),
                                                m = {
                                                    left:
                                                        -o.width * o.anchorX +
                                                        24,
                                                    right:
                                                        o.width *
                                                            (1 - o.anchorX) -
                                                        24,
                                                    bottom: p + 24,
                                                    top: u - 24,
                                                },
                                                y =
                                                    this.shelveBox.getComponent(
                                                        g,
                                                    ),
                                                b = J(y.width, y.height, m);
                                            (this.shelveBox.setScale(
                                                b.scale,
                                                b.scale,
                                                1,
                                            ),
                                                this.shelveBox.setPosition(
                                                    b.x,
                                                    b.y,
                                                    0,
                                                ),
                                                (this.layoutQueued = !1));
                                        } else this.layoutQueued = !1;
                                    }),
                                    (l.createShelves = function (e) {
                                        var t = e.length,
                                            o = e[0].length,
                                            i = this.shelveBox.getComponent(g);
                                        ((i.width = 230 * o + 0 * (o - 1)),
                                            (i.height = 145 * t + 0 * (t - 1)));
                                        for (var n = 0; n < e.length; n++)
                                            for (
                                                var r = 0;
                                                r < e[n].length;
                                                r++
                                            ) {
                                                var s = e[n][r],
                                                    l = this.shelvePreArr[s],
                                                    a = m(l);
                                                this.shelveBox.addChild(a);
                                            }
                                        this.shelveArr =
                                            this.shelveBox.getComponentsInChildren(
                                                A,
                                            );
                                    }),
                                    (l.createShelveLockers = function (e) {
                                        if (!(e <= 0))
                                            for (
                                                var t = k.pickItems(
                                                        this.shelveArr,
                                                        e,
                                                        !0,
                                                    ),
                                                    o = 0;
                                                o < t.length;
                                                o++
                                            ) {
                                                var i = t[o],
                                                    n = m(this.shelveLockerPre);
                                                (i.node.addChild(n),
                                                    (n.getComponent(
                                                        B,
                                                    ).UnlockCnt =
                                                        y.randomRangeInt(
                                                            3,
                                                            6,
                                                        )));
                                            }
                                    }),
                                    (l.createGoodsArr = function (e, t) {
                                        var o = k.pickIndexs(
                                            this.iconCfg,
                                            t,
                                            !0,
                                        );
                                        S.goodsArr = [];
                                        for (var i = 0; i < e; i++) {
                                            var n = k.pickItem(o) + 1;
                                            S.goodsArr.push(n, n, n);
                                        }
                                        k.shuffle(S.goodsArr);
                                    }),
                                    (l.createGoodsData = function () {
                                        var e = Y(
                                            this.layoutShelves(),
                                            S.goodsArr,
                                            this.iconCfg.length,
                                        );
                                        return (
                                            !!e &&
                                            ((S.goodsData = e),
                                            (S.goodsArr = []),
                                            !0)
                                        );
                                    }),
                                    (l.showWin = function () {
                                        var e = this;
                                        if (
                                            !this.winRecovery &&
                                            !this.disposed &&
                                            S.isCurrentRound(this.roundId)
                                        ) {
                                            var t = function (t) {
                                                    ((e.winRecovery = !1),
                                                        e.unschedule(
                                                            e.onCheckWin,
                                                        ),
                                                        R.open(I.Win, t));
                                                },
                                                o = S.settleRound();
                                            o.ok
                                                ? t(o.value)
                                                : ((this.winRecovery = !0),
                                                  S.recover(
                                                      function () {
                                                          return S.settleRound();
                                                      },
                                                      t,
                                                      "通关结果尚未保存。重试将保留本次倍率，或选择重新挑战、返回首页。",
                                                  ));
                                        }
                                    }),
                                    (l.onCheckWin = function () {
                                        S.Pause ||
                                            (this.checkWin() &&
                                                (this.isBusy ||
                                                    this.showWin()));
                                    }),
                                    (l.checkWin = function () {
                                        if (
                                            S.goodsArr.some(function (e) {
                                                return N.isValidId(e);
                                            })
                                        )
                                            return !1;
                                        for (
                                            var e = 0,
                                                t = Object.values(S.goodsData);
                                            e < t.length;
                                            e++
                                        ) {
                                            var o = t[e];
                                            if (
                                                Object.values(o).some(
                                                    function (e) {
                                                        return e.some(
                                                            function (e) {
                                                                return N.isValidId(
                                                                    e,
                                                                );
                                                            },
                                                        );
                                                    },
                                                )
                                            )
                                                return !1;
                                        }
                                        for (
                                            var i = 0;
                                            i < this.shelveArr.length;
                                            i++
                                        ) {
                                            if (!this.shelveArr[i].isEmpty)
                                                return !1;
                                        }
                                        return !0;
                                    }),
                                    (l.onTimeOut = function () {
                                        this.checkWin() || R.open(I.TimeOut);
                                    }),
                                    (l.onTimeOutAlert = function () {
                                        var e = M.getRes(
                                                E.Game,
                                                "EffectRedAlert",
                                            ),
                                            t = m(e);
                                        this.effectsLayer.addChild(t);
                                    }),
                                    (l.onUseSkillFreezeTime = function () {
                                        var e = M.getRes(
                                                E.Game,
                                                "EffectFreeze",
                                            ),
                                            t = m(e);
                                        this.effectsLayer.addChild(t);
                                    }),
                                    (l.onMergeGoods = function (e) {
                                        (this.comboBox.CurCombo++,
                                            q.playSfx(
                                                "bomb_" +
                                                    this.comboBox.CurCombo,
                                            ));
                                        var t =
                                                this.doubleCoinLeft > 0
                                                    ? 2 * this.comboBox.CurCombo
                                                    : this.comboBox.CurCombo,
                                            o = function () {
                                                return K.tryApplyRewards([
                                                    { itemId: 0, cnt: t },
                                                ]);
                                            };
                                        (o().ok || S.recover(o, function () {}),
                                            this.comboBox.createFloatText(e));
                                    }),
                                    (l.onUseDoubleCoin = function () {
                                        this.doubleCoinLeft > 0 ||
                                            (q.playSfx("星星道具"),
                                            (this.doubleCoinLeft =
                                                z.Double_Coin_Duration));
                                    }),
                                    (l.onUseRefreshPos = function (e) {
                                        var t = this;
                                        if (
                                            e &&
                                            !this.isBusy &&
                                            !this.disposed &&
                                            S.isCurrentRound(this.roundId)
                                        ) {
                                            ((this.isBusy = !0),
                                                q.playSfx("转换道具"));
                                            for (
                                                var o, i = r(this.shelveArr);
                                                !(o = i()).done;

                                            ) {
                                                o.value.clear();
                                            }
                                            ((S.goodsData = e),
                                                (S.goodsArr = []));
                                            var n = this.roundId;
                                            this.scheduleOnce(function () {
                                                if (
                                                    !t.disposed &&
                                                    S.isCurrentRound(n)
                                                ) {
                                                    for (
                                                        var e,
                                                            o = r(t.shelveArr);
                                                        !(e = o()).done;

                                                    ) {
                                                        e.value.init();
                                                    }
                                                    t.scheduleOnce(function () {
                                                        !t.disposed &&
                                                            S.isCurrentRound(
                                                                n,
                                                            ) &&
                                                            (t.isBusy = !1);
                                                    }, 0.5);
                                                }
                                            });
                                        }
                                    }),
                                    (l.onUseEraseGroup = function () {
                                        q.playSfx("灯泡道具");
                                        for (
                                            var e = {}, t = 0;
                                            t < this.shelveArr.length;
                                            t++
                                        ) {
                                            var o = this.shelveArr[t].GoodsInfo;
                                            for (var i in o)
                                                if (
                                                    Object.prototype.hasOwnProperty.call(
                                                        o,
                                                        i,
                                                    )
                                                )
                                                    for (var n in o[i])
                                                        if (
                                                            Object.prototype.hasOwnProperty.call(
                                                                o[i],
                                                                n,
                                                            )
                                                        ) {
                                                            var r = o[i][n],
                                                                s = r.Id;
                                                            (e.hasOwnProperty(
                                                                s,
                                                            ) || (e[s] = []),
                                                                e[s].push(r));
                                                        }
                                            for (var l in e)
                                                Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    l,
                                                ) && k.shuffle(e[l]);
                                        }
                                        var a = {};
                                        for (var u in e)
                                            Object.prototype.hasOwnProperty.call(
                                                e,
                                                u,
                                            ) &&
                                                e[u].length >= 3 &&
                                                (a[u] = e[u]);
                                        var h = {},
                                            c = 0;
                                        for (var f in a)
                                            if (
                                                Object.prototype.hasOwnProperty.call(
                                                    a,
                                                    f,
                                                ) &&
                                                ((h[f] = a[f]), ++c >= 3)
                                            )
                                                break;
                                        for (var d in h)
                                            if (
                                                Object.prototype.hasOwnProperty.call(
                                                    h,
                                                    d,
                                                )
                                            )
                                                for (
                                                    var v = h[d],
                                                        p = k.pickItems(
                                                            v,
                                                            3,
                                                            !0,
                                                        ),
                                                        g = 0;
                                                    g < p.length;
                                                    g++
                                                ) {
                                                    var m = p[g],
                                                        y =
                                                            m.node.parent.parent.getComponent(
                                                                A,
                                                            );
                                                    y && y.removeGoods(m);
                                                }
                                    }),
                                    s(t, [
                                        {
                                            key: "DoubleCoinActive",
                                            get: function () {
                                                return this.doubleCoinLeft > 0;
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })(b)).prototype,
                            "bg",
                            [ee],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            },
                        )),
                        (ce = t(ue.prototype, "shelveBox", [te], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (fe = t(ue.prototype, "effectsLayer", [oe], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (de = t(ue.prototype, "skillBox", [ie], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (ve = t(ue.prototype, "comboBox", [ne], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (pe = t(ue.prototype, "tip", [re], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (ge = t(ue.prototype, "shelveLockerPre", [se], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (me = t(ue.prototype, "shelvePreArr", [le], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return [];
                            },
                        })),
                        (ae = ue)),
                    ) || ae),
                );
                l._RF.pop();
            },
        };
    },
);
