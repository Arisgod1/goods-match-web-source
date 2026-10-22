System.register(
    "chunks:///_virtual/GameMgr.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./ResMgr.ts",
        "./Bundle.ts",
        "./EventMgr.ts",
        "./EventType.ts",
        "./ShelveLocker.ts",
        "./Mode.ts",
        "./AudioMgr.ts",
        "./SkillType.ts",
        "./SkillMgr.ts",
        "./ItemMgr.ts",
        "./RewardMgr.ts",
        "./GameSave.ts",
        "./RecoveryMgr.ts",
        "./UIMgr.ts",
        "./UI.ts",
    ],
    function (e) {
        var t,
            i,
            n,
            o,
            s,
            r,
            l,
            u,
            d,
            a,
            c,
            h,
            v,
            g,
            f,
            p,
            k,
            S,
            m,
            y,
            _,
            G,
            M,
            A,
            C,
            R,
            I,
            P,
            b;
        return {
            setters: [
                function (e) {
                    ((t = e.inheritsLoose), (i = e.createClass));
                },
                function (e) {
                    ((n = e.cclegacy),
                        (o = e._decorator),
                        (s = e.Node),
                        (r = e.instantiate),
                        (l = e.Sprite),
                        (u = e.UITransform),
                        (d = e.v3),
                        (a = e.isValid),
                        (c = e.Component));
                },
                function (e) {
                    h = e.ResMgr;
                },
                function (e) {
                    v = e.Bundle;
                },
                function (e) {
                    g = e.EventMgr;
                },
                function (e) {
                    f = e.EventType;
                },
                function (e) {
                    p = e.ShelveLocker;
                },
                function (e) {
                    ((k = e.Mode), (S = e.ModeName));
                },
                function (e) {
                    m = e.AudioMgr;
                },
                function (e) {
                    y = e.SkillType;
                },
                function (e) {
                    _ = e.SkillMgr;
                },
                function (e) {
                    G = e.ItemMgr;
                },
                function (e) {
                    M = e.RewardMgr;
                },
                function (e) {
                    ((A = e.failure), (C = e.success), (R = e.GameSave));
                },
                function (e) {
                    I = e.RecoveryMgr;
                },
                function (e) {
                    P = e.UIMgr;
                },
                function (e) {
                    b = e.UI;
                },
            ],
            execute: function () {
                var T, U;
                n._RF.push({}, "fc7ab3uDQZMAr967dLrCODL", "GameMgr", void 0);
                var L = o.ccclass;
                (o.property,
                    e(
                        "GameMgr",
                        L("Manager/GameMgr")(
                            (((U = (function (e) {
                                function n() {
                                    return e.apply(this, arguments) || this;
                                }
                                (t(n, e),
                                    (n.registerStage = function (e) {
                                        this.activeStage = e;
                                    }),
                                    (n.unregisterStage = function (e) {
                                        this.activeStage === e &&
                                            (this.activeStage = null);
                                    }),
                                    (n.isCurrentRound = function (e) {
                                        return (
                                            this.roundActive &&
                                            e === this.roundId
                                        );
                                    }),
                                    (n.canClaimSkill = function (e) {
                                        return (
                                            this.roundActive &&
                                            Number.isInteger(e) &&
                                            e >= 0 &&
                                            e < 4 &&
                                            !this.claimedSkills.has(e) &&
                                            !_.hasSkill(e) &&
                                            !this.IsRefreshing &&
                                            !this.isPicking &&
                                            !(
                                                e === y.DoubleCoin &&
                                                this.IsDoubleCoinActive
                                            )
                                        );
                                    }),
                                    (n.claimSkill = function (e) {
                                        if (!this.canClaimSkill(e))
                                            return A("unavailable");
                                        var t = G.tryApplyRewards([
                                            { itemId: _.getSkillId(e), cnt: 1 },
                                        ]);
                                        return t.ok
                                            ? (this.claimedSkills.add(e),
                                              _.animateAdded(e),
                                              C())
                                            : t;
                                    }),
                                    (n.useSkill = function (e, t) {
                                        if (
                                            (void 0 === t && (t = !1),
                                            !Number.isInteger(e) ||
                                                e < 0 ||
                                                e > 3 ||
                                                !this.roundActive ||
                                                (this.Pause && !t) ||
                                                this.isPicking ||
                                                !this.activeStage)
                                        )
                                            return A("unavailable");
                                        var i =
                                            this.activeStage.prepareSkill(e);
                                        if (!i.ok) return A(i.reason);
                                        var n = _.getSkillId(e);
                                        if (n < 0 || G.getCnt(n) <= 0)
                                            return A("unavailable");
                                        var o = R.transact(function (e) {
                                            return e.items[n] <= 0
                                                ? A("unavailable")
                                                : (e.items[n]--, C());
                                        });
                                        if (!o.ok) return o;
                                        var s = [
                                            f.UseSkillFreezeTime,
                                            f.UseSkillEraseGroup,
                                            f.UseSkillRefreshPosition,
                                            f.UseSkillDoubleCoin,
                                        ];
                                        return (g.emit(s[e], i.value), C());
                                    }),
                                    (n.tryRevive = function () {
                                        return (
                                            !!this.CanRevive &&
                                            ((this.reviveUsed = !0), !0)
                                        );
                                    }),
                                    (n.settleRound = function () {
                                        var e = this;
                                        if (!this.roundActive)
                                            return A("unavailable");
                                        this.pendingWin ||
                                            (this.pendingWin = M.rollWinReward(
                                                this.CurLevel,
                                            ));
                                        var t = this.pendingWin;
                                        if (!t) return A("invalid_config");
                                        var i = R.transact(function (i) {
                                            var n = G.applyTo(i, [
                                                { itemId: 0, cnt: t.amount },
                                            ]);
                                            return n.ok
                                                ? (i.levels[e.mode]++,
                                                  e.mode === k.tp &&
                                                      i.levels[0] >= 15 &&
                                                      !i.unlockedModes.includes(
                                                          k.gs,
                                                      ) &&
                                                      i.unlockedModes.push(
                                                          k.gs,
                                                      ),
                                                  e.mode === k.gs &&
                                                      i.levels[1] >= 10 &&
                                                      !i.unlockedModes.includes(
                                                          k.ls,
                                                      ) &&
                                                      i.unlockedModes.push(
                                                          k.ls,
                                                      ),
                                                  C(t))
                                                : A(n.reason);
                                        });
                                        return i.ok
                                            ? ((this.roundResult = t),
                                              (this.pendingWin = null),
                                              (this.roundActive = !1),
                                              (this.Pause = !0),
                                              i)
                                            : i;
                                    }),
                                    (n.recover = function (e, t, i) {
                                        var n = this,
                                            o = this.roundId;
                                        I.show({
                                            title: "保存未完成",
                                            message:
                                                null != i
                                                    ? i
                                                    : "本次操作未保存，请重试或离开本局。",
                                            actions: [
                                                {
                                                    label: "重试保存",
                                                    run: function () {
                                                        return n.isCurrentRound(
                                                            o,
                                                        )
                                                            ? e()
                                                            : A("unavailable");
                                                    },
                                                    onSuccess: t,
                                                },
                                                {
                                                    label: "重新挑战",
                                                    run: function () {
                                                        return C();
                                                    },
                                                    onSuccess: function () {
                                                        (n.closeRoundPopups(),
                                                            n.startGame());
                                                    },
                                                },
                                                {
                                                    label: "返回首页",
                                                    run: function () {
                                                        return C();
                                                    },
                                                    onSuccess: function () {
                                                        (n.closeRoundPopups(),
                                                            n.quitGame(),
                                                            P.open(b.Main));
                                                    },
                                                },
                                            ],
                                        });
                                    }),
                                    (n.closeRoundPopups = function () {
                                        for (
                                            var e = 0,
                                                t = [
                                                    b.GetSkill,
                                                    b.TimeOut,
                                                    b.Pause,
                                                    b.Win,
                                                ];
                                            e < t.length;
                                            e++
                                        ) {
                                            var i = t[e];
                                            P.close(i);
                                        }
                                    }));
                                var o = n.prototype;
                                return (
                                    (o.onLoad = function () {
                                        ((globalThis.GameMgr = n),
                                            (n._inst = this),
                                            (n._node = this.node),
                                            this.node.on(
                                                s.EventType.TOUCH_MOVE,
                                                this.onTouchMove,
                                                this,
                                            ),
                                            this.node.on(
                                                s.EventType.TOUCH_END,
                                                this.onTouchFinish,
                                                this,
                                            ),
                                            this.node.on(
                                                s.EventType.TOUCH_CANCEL,
                                                this.onTouchFinish,
                                                this,
                                            ));
                                    }),
                                    (n.unlockMode = function (e) {
                                        return R.transact(function (t) {
                                            return (
                                                t.unlockedModes.includes(e) ||
                                                    t.unlockedModes.push(e),
                                                C()
                                            );
                                        });
                                    }),
                                    (n.createStage = function () {
                                        var e = h.getRes(v.Game, "Stage"),
                                            t = r(e);
                                        this._node.addChild(t);
                                    }),
                                    (n.startGame = function () {
                                        var e = this;
                                        this.reset();
                                        var t = ++this.roundId;
                                        ((this.leavingHome = !1),
                                            (this.activeStage = null),
                                            (this.pendingWin = null),
                                            this.claimedSkills.clear(),
                                            (this.reviveUsed = !1),
                                            (this.roundResult = null),
                                            (this.roundActive = !0),
                                            (this.Pause = !1),
                                            this._node.destroyAllChildren(),
                                            this._inst.scheduleOnce(
                                                function () {
                                                    e.isCurrentRound(t) &&
                                                        e.createStage();
                                                },
                                            ));
                                    }),
                                    (n.quitGame = function () {
                                        (this.roundId++,
                                            (this.roundActive = !1),
                                            (this.roundResult = null),
                                            (this.pendingWin = null),
                                            (this.activeStage = null),
                                            this.claimedSkills.clear(),
                                            (this.reviveUsed = !1),
                                            (this.Pause = !1),
                                            this._node.destroyAllChildren(),
                                            this.reset());
                                    }),
                                    (n.pick = function (e, t) {
                                        var i;
                                        if (
                                            !this.roundActive ||
                                            this.Pause ||
                                            this.isPicking ||
                                            (null != (i = this.activeStage) &&
                                                i.isBusy)
                                        )
                                            return !1;
                                        ((this._pickedGoods = e),
                                            (this._holdGoods = new s()),
                                            (this._holdGoods.addComponent(
                                                l,
                                            ).spriteFrame = e.Sp.spriteFrame),
                                            this.EffectsLayer.addChild(
                                                this._holdGoods,
                                            ),
                                            this._holdGoods.setWorldScale(
                                                e.Sp.node.worldScale,
                                            ),
                                            (t.y += 80));
                                        var n = this._holdGoods.parent
                                            .getComponent(u)
                                            .convertToNodeSpaceAR(
                                                d(t.x, t.y, 0),
                                            );
                                        return (
                                            this._holdGoods.setPosition(n),
                                            m.playSfx("点击消除物"),
                                            !0
                                        );
                                    }),
                                    (n.release = function () {
                                        if (
                                            a(this._holdGoods) &&
                                            this._pickedGoods
                                        )
                                            if (
                                                a(this._pickedGoods.node) &&
                                                !this._pickedGoods.isRemoving
                                            ) {
                                                for (
                                                    var e = !1,
                                                        t =
                                                            this._holdGoods.getWorldPosition(),
                                                        i = 0;
                                                    i < this.shelveArr.length;
                                                    i++
                                                ) {
                                                    var n = this.shelveArr[i];
                                                    if (
                                                        !n.getComponentInChildren(
                                                            p,
                                                        )
                                                    ) {
                                                        var o =
                                                                n.getComponent(
                                                                    u,
                                                                ),
                                                            s =
                                                                o.convertToNodeSpaceAR(
                                                                    t,
                                                                );
                                                        if (
                                                            s.x >=
                                                                -o.width *
                                                                    o.anchorX &&
                                                            s.x <
                                                                o.width *
                                                                    (1 -
                                                                        o.anchorX) &&
                                                            s.y >=
                                                                -o.height *
                                                                    o.anchorY &&
                                                            s.y <
                                                                o.height *
                                                                    (1 -
                                                                        o.anchorY)
                                                        ) {
                                                            var r =
                                                                n.getSlot(s);
                                                            if (
                                                                r < 0 ||
                                                                n.isSlotOccupied(
                                                                    r,
                                                                )
                                                            )
                                                                break;
                                                            var l =
                                                                this
                                                                    ._pickedGoods
                                                                    .Id;
                                                            (n.placeGoods(l, r),
                                                                (e = !0));
                                                            break;
                                                        }
                                                    }
                                                }
                                                (e
                                                    ? g.emit(f.PlaceGoods)
                                                    : (this._pickedGoods.Visible =
                                                          !0),
                                                    (this._pickedGoods = null),
                                                    this._holdGoods.destroy(),
                                                    (this._holdGoods = null),
                                                    m.playSfx("放下消除物"));
                                            } else this.cancelPick();
                                    }),
                                    (n.cancelPick = function () {
                                        var e;
                                        (a(
                                            null == (e = this._pickedGoods)
                                                ? void 0
                                                : e.node,
                                        ) && (this._pickedGoods.Visible = !0),
                                            a(this._holdGoods) &&
                                                this._holdGoods.destroy(),
                                            (this._pickedGoods = null),
                                            (this._holdGoods = null));
                                    }),
                                    (o.onTouchMove = function (e) {
                                        var t = n._holdGoods;
                                        if (a(t)) {
                                            var i = e.getUILocation();
                                            i.y += 80;
                                            var o = t.parent
                                                .getComponent(u)
                                                .convertToNodeSpaceAR(
                                                    d(i.x, i.y, 0),
                                                );
                                            t.setPosition(o);
                                        }
                                    }),
                                    (o.onTouchFinish = function (e) {
                                        a(n._holdGoods) && n.release();
                                    }),
                                    (n.reset = function () {
                                        ((this._pickedGoods = null),
                                            (this._holdGoods = null),
                                            (this.shelveArr = []),
                                            (this.shelveLockerArr = []),
                                            (this.goodsArr = []),
                                            (this.goodsData = {}));
                                    }),
                                    (n.isModeUnlocked = function (e) {
                                        var t, i;
                                        return (
                                            null !=
                                                (t =
                                                    null == (i = R.Data)
                                                        ? void 0
                                                        : i.unlockedModes.includes(
                                                              e,
                                                          )) && t
                                        );
                                    }),
                                    i(n, null, [
                                        {
                                            key: "Stage",
                                            get: function () {
                                                return this._node.children[0];
                                            },
                                        },
                                        {
                                            key: "CurLevel",
                                            get: function () {
                                                var e, t;
                                                return null !=
                                                    (e =
                                                        null == (t = R.Data)
                                                            ? void 0
                                                            : t.levels[
                                                                  this.mode
                                                              ])
                                                    ? e
                                                    : 0;
                                            },
                                        },
                                        {
                                            key: "CurPassedLevel",
                                            get: function () {
                                                var e, t;
                                                return null !=
                                                    (e =
                                                        null == (t = R.Data)
                                                            ? void 0
                                                            : t.levels.reduce(
                                                                  function (
                                                                      e,
                                                                      t,
                                                                  ) {
                                                                      return (
                                                                          e + t
                                                                      );
                                                                  },
                                                                  0,
                                                              ))
                                                    ? e
                                                    : 0;
                                            },
                                        },
                                        {
                                            key: "isHardLevel",
                                            get: function () {
                                                return (
                                                    (this.CurLevel + 1) % 5 == 0
                                                );
                                            },
                                        },
                                        {
                                            key: "EffectsLayer",
                                            get: function () {
                                                var e, t;
                                                return null !=
                                                    (e =
                                                        null ==
                                                        (t = this.activeStage)
                                                            ? void 0
                                                            : t.effectsLayer)
                                                    ? e
                                                    : this.Stage;
                                            },
                                        },
                                        {
                                            key: "IsDoubleCoinActive",
                                            get: function () {
                                                var e, t;
                                                return (
                                                    null !=
                                                        (e =
                                                            null ==
                                                            (t =
                                                                this
                                                                    .activeStage)
                                                                ? void 0
                                                                : t.DoubleCoinActive) &&
                                                    e
                                                );
                                            },
                                        },
                                        {
                                            key: "IsRefreshing",
                                            get: function () {
                                                var e, t;
                                                return (
                                                    null !=
                                                        (e =
                                                            null ==
                                                            (t =
                                                                this
                                                                    .activeStage)
                                                                ? void 0
                                                                : t.isBusy) && e
                                                );
                                            },
                                        },
                                        {
                                            key: "CanRevive",
                                            get: function () {
                                                return (
                                                    this.roundActive &&
                                                    !this.reviveUsed
                                                );
                                            },
                                        },
                                        {
                                            key: "Pause",
                                            get: function () {
                                                return this.pause;
                                            },
                                            set: function (e) {
                                                ((this.pause = e),
                                                    g.emit(f.Pause, e));
                                            },
                                        },
                                        {
                                            key: "isPicking",
                                            get: function () {
                                                return !!this._pickedGoods;
                                            },
                                        },
                                        {
                                            key: "isModeAllUnlocked",
                                            get: function () {
                                                var e, t;
                                                return (
                                                    (null !=
                                                    (e =
                                                        null == (t = R.Data)
                                                            ? void 0
                                                            : t.unlockedModes
                                                                  .length)
                                                        ? e
                                                        : 0) >= S.length
                                                );
                                            },
                                        },
                                        {
                                            key: "isStucked",
                                            get: function () {
                                                for (
                                                    var e = 0;
                                                    e < this.shelveArr.length;
                                                    e++
                                                ) {
                                                    if (
                                                        !this.shelveArr[
                                                            e
                                                        ].isAllSlotOccupied()
                                                    )
                                                        return !1;
                                                }
                                                return !0;
                                            },
                                        },
                                    ]),
                                    n
                                );
                            })(c))._inst = null),
                            (U._node = null),
                            (U.mode = k.tp),
                            (U._pickedGoods = null),
                            (U._holdGoods = null),
                            (U.shelveArr = []),
                            (U.shelveLockerArr = []),
                            (U.goodsArr = []),
                            (U.goodsData = {}),
                            (U.roundId = 0),
                            (U.leavingHome = !1),
                            (U.claimedSkills = new Set()),
                            (U.reviveUsed = !1),
                            (U.roundActive = !1),
                            (U.roundResult = null),
                            (U.pendingWin = null),
                            (U.activeStage = null),
                            (U.pause = !1),
                            (T = U)),
                        ) || T,
                    ));
                n._RF.pop();
            },
        };
    },
);
