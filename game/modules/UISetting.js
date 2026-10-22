System.register(
    "chunks:///_virtual/UISetting.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./UIBase.ts",
        "./Switcher.ts",
        "./Setting.ts",
        "./RecoveryMgr.ts",
        "./GameSave.ts",
        "./AudioMgr.ts",
    ],
    function (n) {
        var t, e, i, s, o, c, a, r, l, u;
        return {
            setters: [
                function (n) {
                    t = n.inheritsLoose;
                },
                function (n) {
                    ((e = n.cclegacy), (i = n._decorator), (s = n.Widget));
                },
                function (n) {
                    o = n.UIBase;
                },
                function (n) {
                    c = n.Switcher;
                },
                function (n) {
                    a = n.Setting;
                },
                function (n) {
                    r = n.RecoveryMgr;
                },
                function (n) {
                    l = n.failure;
                },
                function (n) {
                    u = n.AudioMgr;
                },
            ],
            execute: function () {
                var g;
                e._RF.push({}, "1688935OTdLTa7kX+us2P+o", "UISetting", void 0);
                var f = i.ccclass,
                    S = (i.property, i.requireComponent);
                n(
                    "UISetting",
                    f("UI/UISetting")(
                        (g =
                            S(s)(
                                (g = (function (n) {
                                    function e() {
                                        for (
                                            var t,
                                                e = arguments.length,
                                                i = new Array(e),
                                                s = 0;
                                            s < e;
                                            s++
                                        )
                                            i[s] = arguments[s];
                                        return (
                                            ((t =
                                                n.call.apply(
                                                    n,
                                                    [this].concat(i),
                                                ) || this).swBgm = null),
                                            (t.swSfx = null),
                                            t
                                        );
                                    }
                                    t(e, n);
                                    var i = e.prototype;
                                    return (
                                        (i.onLoad = function () {
                                            ((this.swBgm = this.findComp(
                                                "SwBgm",
                                                c,
                                            )),
                                                (this.swSfx = this.findComp(
                                                    "SwSfx",
                                                    c,
                                                )));
                                        }),
                                        (i.onOpen = function (n) {
                                            ((this.swBgm.IsOn = a.BgmEnabled),
                                                (this.swSfx.IsOn =
                                                    a.SfxEnabled));
                                        }),
                                        (i.onClose = function (n) {}),
                                        (i.onBtnCloseClick = function () {
                                            this.close();
                                        }),
                                        (i.changeSetting = function (n) {
                                            var t = this,
                                                e =
                                                    "bgmEnabled" === n
                                                        ? !a.BgmEnabled
                                                        : !a.SfxEnabled,
                                                i = function () {
                                                    return t.isValid
                                                        ? a.set(n, e)
                                                        : l("unavailable");
                                                },
                                                s = function () {
                                                    ((t.swBgm.IsOn =
                                                        a.BgmEnabled),
                                                        (t.swSfx.IsOn =
                                                            a.SfxEnabled),
                                                        "bgmEnabled" === n &&
                                                            (a.BgmEnabled
                                                                ? u.playBgm()
                                                                : u.stopBgm()));
                                                };
                                            i().ok
                                                ? s()
                                                : ((this.swBgm.IsOn =
                                                      a.BgmEnabled),
                                                  (this.swSfx.IsOn =
                                                      a.SfxEnabled),
                                                  r.retry(i, s));
                                        }),
                                        (i.onSwBgmClick = function () {
                                            this.changeSetting("bgmEnabled");
                                        }),
                                        (i.onSwSfxClick = function () {
                                            this.changeSetting("sfxEnabled");
                                        }),
                                        e
                                    );
                                })(o)),
                            ) || g),
                    ) || g,
                );
                e._RF.pop();
            },
        };
    },
);
