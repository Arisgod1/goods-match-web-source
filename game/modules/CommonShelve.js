System.register(
    "chunks:///_virtual/CommonShelve.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./GameMgr.ts",
        "./ResMgr.ts",
        "./Bundle.ts",
        "./Goods.ts",
        "./EventMgr.ts",
        "./EventType.ts",
        "./ArrayUtil.ts",
        "./ShelveBase.ts",
        "./Global.ts",
    ],
    function (e) {
        var t, o, r, n, s, i, a, l, h, c, d, u, f, y, p, v, g, G, m, M, C;
        return {
            setters: [
                function (e) {
                    ((t = e.applyDecoratedDescriptor),
                        (o = e.inheritsLoose),
                        (r = e.initializerDefineProperty),
                        (n = e.assertThisInitialized),
                        (s = e.createClass));
                },
                function (e) {
                    ((i = e.cclegacy),
                        (a = e._decorator),
                        (l = e.Node),
                        (h = e.macro),
                        (c = e.v3),
                        (d = e.Vec3),
                        (u = e.instantiate));
                },
                function (e) {
                    f = e.GameMgr;
                },
                function (e) {
                    y = e.ResMgr;
                },
                function (e) {
                    p = e.Bundle;
                },
                function (e) {
                    v = e.Goods;
                },
                function (e) {
                    g = e.EventMgr;
                },
                function (e) {
                    G = e.EventType;
                },
                function (e) {
                    m = e.ArrayUtil;
                },
                function (e) {
                    M = e.ShelveBase;
                },
                function (e) {
                    C = e.Global;
                },
            ],
            execute: function () {
                var I, S, R, E, P;
                i._RF.push(
                    {},
                    "a681aMn/NVED75E5Qcqy+AM",
                    "CommonShelve",
                    void 0,
                );
                var b = a.ccclass,
                    A = a.property;
                e(
                    "CommonShelve",
                    ((I = b("Game/CommonShelve")),
                    (S = A([l])),
                    I(
                        ((P = t(
                            (E = (function (e) {
                                function t() {
                                    for (
                                        var t,
                                            o = arguments.length,
                                            s = new Array(o),
                                            i = 0;
                                        i < o;
                                        i++
                                    )
                                        s[i] = arguments[i];
                                    return (
                                        (t =
                                            e.call.apply(e, [this].concat(s)) ||
                                            this),
                                        r(t, "layers", P, n(t)),
                                        (t.layer0GoodsMap = new Map()),
                                        t
                                    );
                                }
                                o(t, e);
                                var i = t.prototype;
                                return (
                                    (i.onLoad = function () {
                                        (e.prototype.onLoad.call(this),
                                            f.shelveArr.push(this));
                                    }),
                                    (i.start = function () {
                                        (e.prototype.start.call(this),
                                            this.init(),
                                            this.schedule(
                                                this.onTrySupplyGoods,
                                                0.25,
                                                h.REPEAT_FOREVER,
                                            ),
                                            this.schedule(
                                                this.onCheckMerge,
                                                0.15,
                                                h.REPEAT_FOREVER,
                                            ));
                                    }),
                                    (i.init = function (e) {
                                        (void 0 === e && (e = 0),
                                            this.createLayerGoods(0, e),
                                            this.createLayerGoods(1, e));
                                    }),
                                    (i.createLayerGoods = function (e, t) {
                                        var o;
                                        void 0 === t && (t = 0);
                                        var r =
                                            null != (o = f.goodsData[this.id])
                                                ? o
                                                : {};
                                        for (var n in r)
                                            if (
                                                Object.prototype.hasOwnProperty.call(
                                                    r,
                                                    n,
                                                )
                                            ) {
                                                var s = r[n];
                                                if (s.length <= 0) continue;
                                                var i = s.shift();
                                                if (!v.isValidId(i)) continue;
                                                var a = this.createGoods(
                                                    i,
                                                    Number(n),
                                                    e,
                                                );
                                                null == a || a.bounce(t);
                                            }
                                    }),
                                    (i.onTrySupplyGoods = function () {
                                        if (!f.Pause && !f.IsRefreshing) {
                                            var e = this.layers[0],
                                                t = this.layers[1];
                                            if (e.children.length <= 0)
                                                for (
                                                    var o =
                                                            this.layers[1].getComponentsInChildren(
                                                                v,
                                                            ),
                                                        r = 0;
                                                    r < o.length;
                                                    r++
                                                ) {
                                                    var n = o[r],
                                                        s =
                                                            n.node.getPosition();
                                                    ((n.Layer = 0),
                                                        n.node.setParent(e),
                                                        (s.y -= C.Goods_Offset),
                                                        n.node.setPosition(s),
                                                        this.layer0GoodsMap.set(
                                                            n.Slot,
                                                            n.Id,
                                                        ),
                                                        null == n ||
                                                            n.bounce());
                                                }
                                            t.children.length <= 0 &&
                                                this.createLayerGoods(1, 0);
                                        }
                                    }),
                                    (i.getSlot = function (e) {
                                        for (
                                            var t = [],
                                                o =
                                                    (0.5 * this.uiTrans.width) /
                                                    3,
                                                r = [
                                                    c(-o, 0, 0),
                                                    c(0, 0, 0),
                                                    c(o, 0, 0),
                                                ],
                                                n = 0;
                                            n < r.length;
                                            n++
                                        ) {
                                            var s = r[n],
                                                i = d.distance(e, s);
                                            t.push({ slotId: n, dis: i });
                                        }
                                        t.sort(function (e, t) {
                                            return e.dis - t.dis;
                                        });
                                        for (var a = 0; a < t.length; a++) {
                                            var l = t[a].slotId;
                                            if (!this.isSlotOccupied(l))
                                                return l;
                                        }
                                        return -1;
                                    }),
                                    (i.createGoods = function (e, t, o) {
                                        if (!v.isValidId(e)) return null;
                                        var r = y.getRes(p.Game, "Goods"),
                                            n = u(r),
                                            s = n.getComponent(v),
                                            i = this.layers[o],
                                            a = c();
                                        return (
                                            (a.x =
                                                ((t - 1) *
                                                    (this.uiTrans.width - 10)) /
                                                3),
                                            (a.y = o * C.Goods_Offset),
                                            i.addChild(n),
                                            n.setPosition(a),
                                            (s.Id = e),
                                            (s.Layer = o),
                                            (s.Slot = t),
                                            0 === o &&
                                                this.layer0GoodsMap.set(t, e),
                                            s
                                        );
                                    }),
                                    (i.isSlotOccupied = function (e) {
                                        return this.layer0GoodsMap.has(e);
                                    }),
                                    (i.isAllSlotOccupied = function () {
                                        return 3 === this.layer0GoodsMap.size;
                                    }),
                                    (i.placeGoods = function (e, t) {
                                        var o = this.createGoods(e, t, 0);
                                        null == o || o.bounce();
                                    }),
                                    (i.onPlaceGoods = function () {
                                        for (
                                            var e =
                                                    this.layers[0].getComponentsInChildren(
                                                        v,
                                                    ),
                                                t = 0;
                                            t < e.length;
                                            t++
                                        ) {
                                            var o = e[t];
                                            o.Visible ||
                                                (o.node.destroy(),
                                                this.layer0GoodsMap.delete(
                                                    o.Slot,
                                                ));
                                        }
                                    }),
                                    (i.onCheckMerge = function () {
                                        if (
                                            !f.Pause &&
                                            !f.IsRefreshing &&
                                            !(this.layer0GoodsMap.size < 3)
                                        ) {
                                            var e =
                                                this.layers[0].getComponentsInChildren(
                                                    v,
                                                );
                                            if (
                                                3 === e.length &&
                                                !e.some(function (e) {
                                                    return (
                                                        !e.Visible ||
                                                        e.isRemoving
                                                    );
                                                })
                                            )
                                                if (m.isAllSame(e, "Id")) {
                                                    for (
                                                        var t = 0;
                                                        t < e.length;
                                                        t++
                                                    ) {
                                                        e[t].remove();
                                                    }
                                                    (this.layer0GoodsMap.clear(),
                                                        g.emit(
                                                            G.MergeGoods,
                                                            this.node.getWorldPosition(),
                                                        ));
                                                }
                                        }
                                    }),
                                    (i.clear = function () {
                                        this.layer0GoodsMap.clear();
                                        for (
                                            var e = 0;
                                            e < this.layers.length;
                                            e++
                                        ) {
                                            this.layers[e].destroyAllChildren();
                                        }
                                    }),
                                    (i.removeGoods = function (e) {
                                        var t = e.Layer,
                                            o = e.Slot;
                                        (0 === t &&
                                            this.layer0GoodsMap.delete(o),
                                            e.remove());
                                    }),
                                    s(t, [
                                        {
                                            key: "isEmpty",
                                            get: function () {
                                                return (
                                                    0 === this.GoodsIdArr.length
                                                );
                                            },
                                        },
                                        {
                                            key: "GoodsIdArr",
                                            get: function () {
                                                for (
                                                    var e = [], t = 0;
                                                    t < this.layers.length;
                                                    t++
                                                )
                                                    for (
                                                        var o =
                                                                this.layers[
                                                                    t
                                                                ].getComponentsInChildren(
                                                                    v,
                                                                ),
                                                            r = 0;
                                                        r < o.length;
                                                        r++
                                                    ) {
                                                        var n = o[r];
                                                        n.isRemoving ||
                                                            e.push(n.Id);
                                                    }
                                                return e;
                                            },
                                        },
                                        {
                                            key: "GoodsInfo",
                                            get: function () {
                                                for (
                                                    var e = {}, t = 0;
                                                    t < this.layers.length;
                                                    t++
                                                ) {
                                                    var o = this.layers[t];
                                                    e.hasOwnProperty(t) ||
                                                        (e[t] = {});
                                                    for (
                                                        var r =
                                                                o.getComponentsInChildren(
                                                                    v,
                                                                ),
                                                            n = 0;
                                                        n < r.length;
                                                        n++
                                                    ) {
                                                        var s = r[n];
                                                        if (!s.isRemoving) {
                                                            var i = s.Slot;
                                                            s.Id;
                                                            e[t][i] = s;
                                                        }
                                                    }
                                                }
                                                return e;
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })(M)).prototype,
                            "layers",
                            [S],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return [];
                                },
                            },
                        )),
                        (R = E)),
                    ) || R),
                );
                i._RF.pop();
            },
        };
    },
);
