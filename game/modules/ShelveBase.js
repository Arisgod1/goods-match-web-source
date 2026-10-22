System.register(
    "chunks:///_virtual/ShelveBase.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./EventType.ts",
        "./EventMgr.ts",
    ],
    function (n) {
        var t, e, o, c, i, r, s;
        return {
            setters: [
                function (n) {
                    ((t = n.inheritsLoose), (e = n.createClass));
                },
                function (n) {
                    ((o = n.cclegacy), (c = n._decorator), (i = n.Component));
                },
                function (n) {
                    r = n.EventType;
                },
                function (n) {
                    s = n.EventMgr;
                },
            ],
            execute: function () {
                var u;
                o._RF.push({}, "04238mGxFJID6A6C9vG2iZQ", "ShelveBase", void 0);
                var l = c.ccclass;
                (c.property,
                    n(
                        "ShelveBase",
                        l("ScriptBase/ShelveBase")(
                            (u = (function (n) {
                                function o() {
                                    for (
                                        var t,
                                            e = arguments.length,
                                            o = new Array(e),
                                            c = 0;
                                        c < e;
                                        c++
                                    )
                                        o[c] = arguments[c];
                                    return (
                                        ((t =
                                            n.call.apply(n, [this].concat(o)) ||
                                            this).id = 0),
                                        t
                                    );
                                }
                                t(o, n);
                                var c = o.prototype;
                                return (
                                    (c.onLoad = function () {
                                        ((this.id =
                                            this.node.getSiblingIndex()),
                                            s.on(
                                                r.PlaceGoods,
                                                this.onPlaceGoods,
                                                this,
                                            ));
                                    }),
                                    (c.start = function () {}),
                                    (c.onDestroy = function () {
                                        (this.unscheduleAllCallbacks(),
                                            s.off(
                                                r.PlaceGoods,
                                                this.onPlaceGoods,
                                                this,
                                            ));
                                    }),
                                    (c.init = function (n) {}),
                                    (c.getSlot = function (n) {
                                        return 0;
                                    }),
                                    (c.onPlaceGoods = function () {}),
                                    (c.isSlotOccupied = function (n) {
                                        return !1;
                                    }),
                                    (c.isAllSlotOccupied = function () {
                                        return !1;
                                    }),
                                    (c.createGoods = function (n, t, e) {}),
                                    (c.placeGoods = function (n, t) {}),
                                    (c.createLayerGoods = function (n, t) {}),
                                    (c.removeGoods = function (n) {}),
                                    (c.clear = function () {}),
                                    e(o, [
                                        {
                                            key: "Id",
                                            get: function () {
                                                return this.id;
                                            },
                                        },
                                        {
                                            key: "isEmpty",
                                            get: function () {
                                                return !1;
                                            },
                                        },
                                        {
                                            key: "GoodsIdArr",
                                            get: function () {
                                                return [];
                                            },
                                        },
                                        {
                                            key: "GoodsInfo",
                                            get: function () {
                                                return null;
                                            },
                                        },
                                    ]),
                                    o
                                );
                            })(i)),
                        ) || u,
                    ));
                o._RF.pop();
            },
        };
    },
);
