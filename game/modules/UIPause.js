System.register(
    "chunks:///_virtual/UIPause.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./UIBase.ts",
        "./GameMgr.ts",
        "./Switcher.ts",
        "./Setting.ts",
        "./RecoveryMgr.ts",
        "./GameSave.ts",
        "./AudioMgr.ts",
        "./TransMgr.ts",
        "./UI.ts",
    ],
    function (n) {
        var t, e, s, i, r, a, o, c, u, f, l, g, h, d, m;
        return {
            setters: [
                function (n) {
                    ((t = n.inheritsLoose),
                        (e = n.asyncToGenerator),
                        (s = n.regeneratorRuntime));
                },
                function (n) {
                    ((i = n.cclegacy), (r = n._decorator), (a = n.Widget));
                },
                function (n) {
                    o = n.UIBase;
                },
                function (n) {
                    c = n.GameMgr;
                },
                function (n) {
                    u = n.Switcher;
                },
                function (n) {
                    f = n.Setting;
                },
                function (n) {
                    l = n.RecoveryMgr;
                },
                function (n) {
                    g = n.failure;
                },
                function (n) {
                    h = n.AudioMgr;
                },
                function (n) {
                    d = n.TransMgr;
                },
                function (n) {
                    m = n.UI;
                },
            ],
            execute: function () {
                var p;
                i._RF.push({}, "c45adto9B5CUrySVMJAHfZl", "UIPause", void 0);
                var S = r.ccclass,
                    B = (r.property, r.requireComponent);
                n(
                    "UIPause",
                    S("UI/UIPause")(
                        (p =
                            B(a)(
                                (p = (function (n) {
                                    function i() {
                                        for (
                                            var t,
                                                e = arguments.length,
                                                s = new Array(e),
                                                i = 0;
                                            i < e;
                                            i++
                                        )
                                            s[i] = arguments[i];
                                        return (
                                            ((t =
                                                n.call.apply(
                                                    n,
                                                    [this].concat(s),
                                                ) || this).swBgm = null),
                                            (t.swSfx = null),
                                            t
                                        );
                                    }
                                    t(i, n);
                                    var r = i.prototype;
                                    return (
                                        (r.onLoad = function () {
                                            ((this.swBgm = this.findComp(
                                                "SwBgm",
                                                u,
                                            )),
                                                (this.swSfx = this.findComp(
                                                    "SwSfx",
                                                    u,
                                                )));
                                        }),
                                        (r.onOpen = function (n) {
                                            ((c.Pause = !0),
                                                (this.swBgm.IsOn =
                                                    f.BgmEnabled),
                                                (this.swSfx.IsOn =
                                                    f.SfxEnabled));
                                        }),
                                        (r.onClose = function (n) {
                                            c.Pause = !1;
                                        }),
                                        (r.onBtnCloseClick = function () {
                                            this.close();
                                        }),
                                        (r.onBtnRestartClick = (function () {
                                            var n = e(
                                                s().mark(function n() {
                                                    return s().wrap(
                                                        function (n) {
                                                            for (;;)
                                                                switch (
                                                                    (n.prev =
                                                                        n.next)
                                                                ) {
                                                                    case 0:
                                                                        return (
                                                                            (n.next = 2),
                                                                            d.Inst.fadeIn()
                                                                        );
                                                                    case 2:
                                                                        (c.startGame(),
                                                                            this.close(),
                                                                            d.Inst.fadeOut());
                                                                    case 5:
                                                                    case "end":
                                                                        return n.stop();
                                                                }
                                                        },
                                                        n,
                                                        this,
                                                    );
                                                }),
                                            );
                                            return function () {
                                                return n.apply(this, arguments);
                                            };
                                        })()),
                                        (r.onBtnBackClick = (function () {
                                            var n = e(
                                                s().mark(function n() {
                                                    return s().wrap(
                                                        function (n) {
                                                            for (;;)
                                                                switch (
                                                                    (n.prev =
                                                                        n.next)
                                                                ) {
                                                                    case 0:
                                                                        return (
                                                                            (n.next = 2),
                                                                            d.Inst.fadeIn()
                                                                        );
                                                                    case 2:
                                                                        (c.quitGame(),
                                                                            this.close(),
                                                                            this.open(
                                                                                m.Main,
                                                                            ),
                                                                            d.Inst.fadeOut());
                                                                    case 6:
                                                                    case "end":
                                                                        return n.stop();
                                                                }
                                                        },
                                                        n,
                                                        this,
                                                    );
                                                }),
                                            );
                                            return function () {
                                                return n.apply(this, arguments);
                                            };
                                        })()),
                                        (r.changeSetting = function (n) {
                                            var t = this,
                                                e =
                                                    "bgmEnabled" === n
                                                        ? !f.BgmEnabled
                                                        : !f.SfxEnabled,
                                                s = function () {
                                                    return t.isValid
                                                        ? f.set(n, e)
                                                        : g("unavailable");
                                                },
                                                i = function () {
                                                    ((t.swBgm.IsOn =
                                                        f.BgmEnabled),
                                                        (t.swSfx.IsOn =
                                                            f.SfxEnabled),
                                                        "bgmEnabled" === n &&
                                                            (f.BgmEnabled
                                                                ? h.playBgm()
                                                                : h.stopBgm()));
                                                };
                                            s().ok
                                                ? i()
                                                : ((this.swBgm.IsOn =
                                                      f.BgmEnabled),
                                                  (this.swSfx.IsOn =
                                                      f.SfxEnabled),
                                                  l.retry(s, i));
                                        }),
                                        (r.onSwBgmClick = function () {
                                            this.changeSetting("bgmEnabled");
                                        }),
                                        (r.onSwSfxClick = function () {
                                            this.changeSetting("sfxEnabled");
                                        }),
                                        i
                                    );
                                })(o)),
                            ) || p),
                    ) || p,
                );
                i._RF.pop();
            },
        };
    },
);
