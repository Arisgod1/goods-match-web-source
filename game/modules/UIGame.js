System.register(
    "chunks:///_virtual/UIGame.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./UIBase.ts",
        "./UI.ts",
        "./GameMgr.ts",
        "./CoinItem.ts",
        "./CoinMgr.ts",
        "./EventType.ts",
        "./EventMgr.ts",
        "./AudioMgr.ts",
    ],
    function (n) {
        var t, o, e, i, s, r, c, u, a, l, f, g, m, d, h, p;
        return {
            setters: [
                function (n) {
                    t = n.inheritsLoose;
                },
                function (n) {
                    ((o = n.cclegacy),
                        (e = n._decorator),
                        (i = n.Widget),
                        (s = n.Label),
                        (r = n.math),
                        (c = n.tween),
                        (u = n.isValid));
                },
                function (n) {
                    a = n.UIBase;
                },
                function (n) {
                    l = n.UI;
                },
                function (n) {
                    f = n.GameMgr;
                },
                function (n) {
                    g = n.CoinItem;
                },
                function (n) {
                    m = n.CoinMgr;
                },
                function (n) {
                    d = n.EventType;
                },
                function (n) {
                    h = n.EventMgr;
                },
                function (n) {
                    p = n.AudioMgr;
                },
            ],
            execute: function () {
                var I;
                o._RF.push({}, "5a290LFtFJJ5ZYlc/D14Koe", "UIGame", void 0);
                var v = e.ccclass,
                    C = (e.property, e.requireComponent);
                n(
                    "UIGame",
                    v("UI/UIGame")(
                        (I =
                            C(i)(
                                (I = (function (n) {
                                    function o() {
                                        for (
                                            var t,
                                                o = arguments.length,
                                                e = new Array(o),
                                                i = 0;
                                            i < o;
                                            i++
                                        )
                                            e[i] = arguments[i];
                                        return (
                                            ((t =
                                                n.call.apply(
                                                    n,
                                                    [this].concat(e),
                                                ) || this).lbLevel = null),
                                            (t.coinItem = null),
                                            t
                                        );
                                    }
                                    t(o, n);
                                    var e = o.prototype;
                                    return (
                                        (e.onLoad = function () {
                                            ((this.lbLevel = this.findComp(
                                                "SettingItem/LbLevel",
                                                s,
                                            )),
                                                (this.coinItem = this.findComp(
                                                    "CoinItem",
                                                    g,
                                                )));
                                        }),
                                        (e.onEnable = function () {
                                            h.on(
                                                d.MergeGoods,
                                                this.onMergeGoods,
                                                this,
                                            );
                                        }),
                                        (e.onDisable = function () {
                                            h.off(
                                                d.MergeGoods,
                                                this.onMergeGoods,
                                                this,
                                            );
                                        }),
                                        (e.onOpen = function (n) {
                                            ((this.lbLevel.string =
                                                "第" + (f.CurLevel + 1) + "关"),
                                                this.coinItem.init(m.CurCoin),
                                                p.playBgm(
                                                    "游戏内音乐" +
                                                        r.randomRangeInt(0, 3),
                                                ));
                                        }),
                                        (e.onClose = function (n) {}),
                                        (e.onBtnSettingClick = function () {
                                            this.open(l.Pause);
                                        }),
                                        (e.onMergeGoods = function (n) {
                                            this.coinItem.updateCoin(
                                                m.CurCoin,
                                                !1,
                                            );
                                            var t =
                                                this.coinItem.createFlyCoin();
                                            t.setWorldPosition(n);
                                            var o = c(t);
                                            (o.to(
                                                0.5,
                                                {
                                                    worldPosition:
                                                        this.coinItem.node
                                                            .worldPosition,
                                                },
                                                { easing: "sineOut" },
                                            ),
                                                o.call(function () {
                                                    u(t) && t.destroy();
                                                }),
                                                o.start());
                                        }),
                                        o
                                    );
                                })(a)),
                            ) || I),
                    ) || I,
                );
                o._RF.pop();
            },
        };
    },
);
