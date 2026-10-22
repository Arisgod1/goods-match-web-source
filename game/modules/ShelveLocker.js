System.register(
    "chunks:///_virtual/ShelveLocker.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./GameMgr.ts",
        "./EventMgr.ts",
        "./EventType.ts",
        "./ArrayUtil.ts",
        "./ResMgr.ts",
        "./Bundle.ts",
    ],
    function (t) {
        var e, n, i, r, o, s, l, a, c, u, h, p, g, f, b, v, d, y, C, m;
        return {
            setters: [
                function (t) {
                    ((e = t.applyDecoratedDescriptor),
                        (n = t.inheritsLoose),
                        (i = t.initializerDefineProperty),
                        (r = t.assertThisInitialized),
                        (o = t.createClass));
                },
                function (t) {
                    ((s = t.cclegacy),
                        (l = t._decorator),
                        (a = t.Node),
                        (c = t.Label),
                        (u = t.Sprite),
                        (h = t.tween),
                        (p = t.v3),
                        (g = t.UIOpacity),
                        (f = t.Component));
                },
                function (t) {
                    b = t.GameMgr;
                },
                function (t) {
                    v = t.EventMgr;
                },
                function (t) {
                    d = t.EventType;
                },
                function (t) {
                    y = t.ArrayUtil;
                },
                function (t) {
                    C = t.ResMgr;
                },
                function (t) {
                    m = t.Bundle;
                },
            ],
            execute: function () {
                var k, M, L, G, B, A, S, w, z, U, D;
                s._RF.push(
                    {},
                    "2b95fT+AlBNDITnn29g4dF4",
                    "ShelveLocker",
                    void 0,
                );
                var F = l.ccclass,
                    T = l.property;
                t(
                    "ShelveLocker",
                    ((k = F("Game/ShelveLocker")),
                    (M = T(a)),
                    (L = T(c)),
                    (G = T(u)),
                    (B = T(a)),
                    k(
                        ((w = e(
                            (S = (function (t) {
                                function e() {
                                    for (
                                        var e,
                                            n = arguments.length,
                                            o = new Array(n),
                                            s = 0;
                                        s < n;
                                        s++
                                    )
                                        o[s] = arguments[s];
                                    return (
                                        (e =
                                            t.call.apply(t, [this].concat(o)) ||
                                            this),
                                        i(e, "lbBg", w, r(e)),
                                        i(e, "lbCnt", z, r(e)),
                                        i(e, "glass", U, r(e)),
                                        i(e, "chain", D, r(e)),
                                        (e.unlockCnt = 0),
                                        e
                                    );
                                }
                                n(e, t);
                                var s = e.prototype;
                                return (
                                    (s.onLoad = function () {
                                        ((this.lbCnt =
                                            this.getComponentInChildren(c)),
                                            (this.glass = this.node
                                                .getChildByName("Glass")
                                                .getComponent(u)),
                                            b.shelveLockerArr.push(this),
                                            v.on(
                                                d.MergeGoods,
                                                this.onMergeGoods,
                                                this,
                                            ));
                                    }),
                                    (s.onDestroy = function () {
                                        (y.remove(b.shelveLockerArr, this),
                                            v.off(
                                                d.MergeGoods,
                                                this.onMergeGoods,
                                                this,
                                            ));
                                    }),
                                    (s.onMergeGoods = function () {
                                        this === b.shelveLockerArr[0] &&
                                            this.UnlockCnt--;
                                    }),
                                    (s.onBtnUnlockClick = function () {}),
                                    o(e, [
                                        {
                                            key: "UnlockCnt",
                                            get: function () {
                                                return this.unlockCnt;
                                            },
                                            set: function (t) {
                                                var e = this;
                                                ((this.unlockCnt = Math.max(
                                                    0,
                                                    t,
                                                )),
                                                    (this.lbCnt.string =
                                                        "" + t));
                                                var n =
                                                    1 === this.unlockCnt
                                                        ? "bl2"
                                                        : "bl1";
                                                if (
                                                    ((this.glass.spriteFrame =
                                                        C.getSpriteFrame(
                                                            m.Game,
                                                            n,
                                                            "image/",
                                                        )),
                                                    !(this.unlockCnt > 0))
                                                ) {
                                                    ((this.lbBg.active = !1),
                                                        (this.lbCnt.node.active =
                                                            !1),
                                                        (this.glass.node.active =
                                                            !1),
                                                        h(this.chain)
                                                            .by(0.5, {
                                                                position: p(
                                                                    0,
                                                                    -50,
                                                                    0,
                                                                ),
                                                            })
                                                            .start());
                                                    var i =
                                                        this.chain.addComponent(
                                                            g,
                                                        );
                                                    (h(i)
                                                        .to(0.5, { opacity: 0 })
                                                        .start(),
                                                        this.scheduleOnce(
                                                            function () {
                                                                e.node.destroy();
                                                            },
                                                            0.5,
                                                        ));
                                                }
                                            },
                                        },
                                    ]),
                                    e
                                );
                            })(f)).prototype,
                            "lbBg",
                            [M],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            },
                        )),
                        (z = e(S.prototype, "lbCnt", [L], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (U = e(S.prototype, "glass", [G], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (D = e(S.prototype, "chain", [B], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (A = S)),
                    ) || A),
                );
                s._RF.pop();
            },
        };
    },
);
