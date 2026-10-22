System.register(
    "chunks:///_virtual/UIGetReward.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./CoinMgr.ts",
        "./ResMgr.ts",
        "./UIBase.ts",
        "./CoinItem.ts",
        "./CfgItem.ts",
    ],
    function (t) {
        var e, n, s, i, r, o, c, a, h, u, d, l, f, p;
        return {
            setters: [
                function (t) {
                    ((e = t.inheritsLoose), (n = t.extends));
                },
                function (t) {
                    ((s = t.cclegacy),
                        (i = t._decorator),
                        (r = t.Widget),
                        (o = t.Sprite),
                        (c = t.Label),
                        (a = t.tween),
                        (h = t.v3));
                },
                function (t) {
                    u = t.CoinMgr;
                },
                function (t) {
                    d = t.ResMgr;
                },
                function (t) {
                    l = t.UIBase;
                },
                function (t) {
                    f = t.CoinItem;
                },
                function (t) {
                    p = t.CfgItem;
                },
            ],
            execute: function () {
                var w;
                s._RF.push(
                    {},
                    "3dacejXH+FCKJvYNd+LzdQ0",
                    "UIGetReward",
                    void 0,
                );
                var g = i.ccclass,
                    C = i.requireComponent;
                t(
                    "UIGetReward",
                    g("UI/UIGetReward")(
                        (w =
                            C(r)(
                                (w = (function (t) {
                                    function s() {
                                        for (
                                            var e,
                                                n = arguments.length,
                                                s = new Array(n),
                                                i = 0;
                                            i < n;
                                            i++
                                        )
                                            s[i] = arguments[i];
                                        return (
                                            ((e =
                                                t.call.apply(
                                                    t,
                                                    [this].concat(s),
                                                ) || this).rewards = []),
                                            (e.index = 0),
                                            (e.processing = !1),
                                            (e.tw = null),
                                            e
                                        );
                                    }
                                    e(s, t);
                                    var i = s.prototype;
                                    return (
                                        (i.onOpen = function (t) {
                                            var e = this;
                                            if (
                                                ((this.rewards = (
                                                    null != t ? t : []
                                                ).map(function (t) {
                                                    return n({}, t);
                                                })),
                                                this.findComp(
                                                    "CoinItem",
                                                    f,
                                                ).init(u.CurCoin),
                                                !this.rewards.length)
                                            )
                                                return (
                                                    (this.processing = !0),
                                                    void this.scheduleOnce(
                                                        function () {
                                                            return e.close();
                                                        },
                                                    )
                                                );
                                            this.showReward();
                                        }),
                                        (i.showReward = function () {
                                            var t = this.rewards[this.index],
                                                e = p[t.itemId],
                                                n = this.findComp("Icon", o);
                                            ((n.spriteFrame = d.getSpriteFrame(
                                                e.bundle,
                                                e.icon,
                                            )),
                                                (this.findComp(
                                                    "LbCnt",
                                                    c,
                                                ).string =
                                                    "x" + t.cnt + "（已到账）"),
                                                this.tw && this.tw.stop(),
                                                (this.tw = a(n.node)
                                                    .set({ scale: h() })
                                                    .to(
                                                        0.3,
                                                        { scale: h(1, 1, 1) },
                                                        { easing: "backOut" },
                                                    )
                                                    .start()));
                                        }),
                                        (i.onBtnNormalGetClick = function () {
                                            var t = this;
                                            this.processing ||
                                                ((this.processing = !0),
                                                this.index++,
                                                this.index >=
                                                this.rewards.length
                                                    ? this.close()
                                                    : (this.showReward(),
                                                      this.scheduleOnce(
                                                          function () {
                                                              t.processing = !1;
                                                          },
                                                          0.3,
                                                      )));
                                        }),
                                        (i.onClose = function () {
                                            (this.tw && this.tw.stop(),
                                                this.unscheduleAllCallbacks());
                                        }),
                                        s
                                    );
                                })(l)),
                            ) || w),
                    ) || w,
                );
                s._RF.pop();
            },
        };
    },
);
