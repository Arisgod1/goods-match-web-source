System.register(
    "chunks:///_virtual/SmallShelve.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./Bundle.ts",
        "./ResMgr.ts",
        "./Goods.ts",
        "./GameMgr.ts",
        "./ShelveBase.ts",
        "./Global.ts",
    ],
    function (e) {
        var t, o, r, s, n, i, a, l, d, h, c, u, y, p, f, v, g, G;
        return {
            setters: [
                function (e) {
                    ((t = e.applyDecoratedDescriptor),
                        (o = e.inheritsLoose),
                        (r = e.initializerDefineProperty),
                        (s = e.assertThisInitialized),
                        (n = e.createClass));
                },
                function (e) {
                    ((i = e.cclegacy),
                        (a = e._decorator),
                        (l = e.ProgressBar),
                        (d = e.Node),
                        (h = e.macro),
                        (c = e.instantiate),
                        (u = e.v3));
                },
                function (e) {
                    y = e.Bundle;
                },
                function (e) {
                    p = e.ResMgr;
                },
                function (e) {
                    f = e.Goods;
                },
                function (e) {
                    v = e.GameMgr;
                },
                function (e) {
                    g = e.ShelveBase;
                },
                function (e) {
                    G = e.Global;
                },
            ],
            execute: function () {
                var m, I, M, S, b, C, P;
                i._RF.push(
                    {},
                    "92a17HsV4RFPph7yMxO3f4E",
                    "SmallShelve",
                    void 0,
                );
                var L = a.ccclass,
                    R = a.property;
                e(
                    "SmallShelve",
                    ((m = L("Game/SmallShelve")),
                    (I = R(l)),
                    (M = R([d])),
                    m(
                        ((C = t(
                            (b = (function (e) {
                                function t() {
                                    for (
                                        var t,
                                            o = arguments.length,
                                            n = new Array(o),
                                            i = 0;
                                        i < o;
                                        i++
                                    )
                                        n[i] = arguments[i];
                                    return (
                                        (t =
                                            e.call.apply(e, [this].concat(n)) ||
                                            this),
                                        r(t, "progressBar", C, s(t)),
                                        r(t, "layers", P, s(t)),
                                        (t.layerGoodsMap = new Map()),
                                        t
                                    );
                                }
                                o(t, e);
                                var i = t.prototype;
                                return (
                                    (i.onLoad = function () {
                                        (e.prototype.onLoad.call(this),
                                            v.shelveArr.push(this),
                                            (globalThis.smallShelve = this));
                                    }),
                                    (i.start = function () {
                                        (e.prototype.start.call(this),
                                            this.init(),
                                            this.schedule(
                                                this.onTrySupplyGoods,
                                                0.25,
                                                h.REPEAT_FOREVER,
                                            ));
                                    }),
                                    (i.init = function (e) {
                                        (void 0 === e && (e = 0),
                                            this.createLayerGoods(0, e),
                                            this.createLayerGoods(1, e),
                                            this.createLayerGoods(2, e));
                                    }),
                                    (i.onTrySupplyGoods = function () {
                                        if (!v.Pause && !v.IsRefreshing) {
                                            for (var e = 0; e < 3; e++) {
                                                if (
                                                    !this.layers[
                                                        e
                                                    ].getComponentInChildren(
                                                        f,
                                                    ) &&
                                                    2 !== e
                                                ) {
                                                    var t = e + 1,
                                                        o =
                                                            this.layers[
                                                                t
                                                            ].getComponentInChildren(
                                                                f,
                                                            );
                                                    if (o) {
                                                        var r =
                                                            o.node.getPosition();
                                                        ((o.Layer = e),
                                                            o.node.setParent(
                                                                this.layers[e],
                                                            ),
                                                            (r.y -=
                                                                G.Goods_Offset),
                                                            o.node.setPosition(
                                                                r,
                                                            ),
                                                            this.layerGoodsMap.delete(
                                                                t,
                                                            ),
                                                            this.layerGoodsMap.set(
                                                                e,
                                                                o.Id,
                                                            ),
                                                            o.bounce());
                                                    }
                                                }
                                            }
                                            this.progressBar.progress =
                                                this.layerGoodsMap.size / 3;
                                        }
                                    }),
                                    (i.createGoods = function (e, t, o) {
                                        if (!f.isValidId(e)) return null;
                                        var r = p.getRes(y.Game, "Goods"),
                                            s = c(r),
                                            n = s.getComponent(f),
                                            i = this.layers[o],
                                            a = u();
                                        return (
                                            (a.y = o * G.Goods_Offset),
                                            i.addChild(s),
                                            s.setPosition(a),
                                            (n.Id = e),
                                            (n.Layer = o),
                                            (n.Slot = t),
                                            this.layerGoodsMap.set(o, e),
                                            n
                                        );
                                    }),
                                    (i.createLayerGoods = function (e, t) {
                                        var o;
                                        void 0 === t && (t = 0);
                                        var r =
                                            null != (o = v.goodsData[this.id])
                                                ? o
                                                : {};
                                        for (var s in r)
                                            if (
                                                Object.prototype.hasOwnProperty.call(
                                                    r,
                                                    s,
                                                )
                                            ) {
                                                var n = r[s];
                                                if (n.length <= 0) continue;
                                                var i = n.shift();
                                                if (!f.isValidId(i)) continue;
                                                var a = this.createGoods(
                                                    i,
                                                    Number(s),
                                                    e,
                                                );
                                                null == a || a.bounce(t);
                                            }
                                    }),
                                    (i.placeGoods = function (e, t) {
                                        this.layerGoodsMap.clear();
                                        for (var o = [], r = 0; r < 2; r++) {
                                            var s =
                                                this.layers[
                                                    r
                                                ].getComponentInChildren(f);
                                            if (!s) break;
                                            o.push(s);
                                        }
                                        for (var n = 0; n < o.length; n++) {
                                            var i = o[n],
                                                a = i.node.getPosition(),
                                                l = n + 1;
                                            ((i.Layer = l),
                                                i.node.setParent(
                                                    this.layers[l],
                                                ),
                                                (a.y += G.Goods_Offset),
                                                i.node.setPosition(a),
                                                this.layerGoodsMap.set(
                                                    l,
                                                    i.Id,
                                                ));
                                        }
                                        var d = this.createGoods(e, 0, 0);
                                        null == d || d.bounce();
                                    }),
                                    (i.onPlaceGoods = function () {
                                        var e =
                                            this.layers[0].getComponentInChildren(
                                                f,
                                            );
                                        e &&
                                            !e.Visible &&
                                            (e.node.destroy(),
                                            this.layerGoodsMap.delete(0));
                                    }),
                                    (i.isSlotOccupied = function (e) {
                                        var t =
                                            this.layers[0].getComponentInChildren(
                                                f,
                                            );
                                        return (
                                            !(!t || !1 !== t.Visible) ||
                                            this.layerGoodsMap.size >= 3
                                        );
                                    }),
                                    (i.isAllSlotOccupied = function () {
                                        return 3 === this.layerGoodsMap.size;
                                    }),
                                    (i.getSlot = function (e) {
                                        return 0;
                                    }),
                                    (i.clear = function () {
                                        this.layerGoodsMap.clear();
                                        for (
                                            var e = 0;
                                            e < this.layers.length;
                                            e++
                                        ) {
                                            this.layers[e].destroyAllChildren();
                                        }
                                    }),
                                    (i.removeGoods = function (e) {
                                        (this.layerGoodsMap.delete(e.Layer),
                                            e.remove());
                                    }),
                                    n(t, [
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
                                                                    f,
                                                                ),
                                                            r = 0;
                                                        r < o.length;
                                                        r++
                                                    ) {
                                                        var s = o[r];
                                                        s.isRemoving ||
                                                            e.push(s.Id);
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
                                                                    f,
                                                                ),
                                                            s = 0;
                                                        s < r.length;
                                                        s++
                                                    ) {
                                                        var n = r[s];
                                                        if (!n.isRemoving) {
                                                            var i = n.Slot;
                                                            n.Id;
                                                            e[t][i] = n;
                                                        }
                                                    }
                                                }
                                                return e;
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })(g)).prototype,
                            "progressBar",
                            [I],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            },
                        )),
                        (P = t(b.prototype, "layers", [M], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return [];
                            },
                        })),
                        (S = b)),
                    ) || S),
                );
                i._RF.pop();
            },
        };
    },
);
