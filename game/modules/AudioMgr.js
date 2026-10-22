System.register(
    "chunks:///_virtual/AudioMgr.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./Debug.ts",
        "./ResMgr.ts",
        "./Setting.ts",
    ],
    function (i) {
        var o, t, n, u, e, s, a, r, c, d, g;
        return {
            setters: [
                function (i) {
                    ((o = i.inheritsLoose), (t = i.createClass));
                },
                function (i) {
                    ((n = i.cclegacy),
                        (u = i._decorator),
                        (e = i.AudioSource),
                        (s = i.game),
                        (a = i.Game),
                        (r = i.Component));
                },
                function (i) {
                    c = i.Debug;
                },
                function (i) {
                    d = i.ResMgr;
                },
                function (i) {
                    g = i.Setting;
                },
            ],
            execute: function () {
                var l, h;
                n._RF.push({}, "79432KzY8JGh7M/c0pay+I1", "AudioMgr", void 0);
                var p = u.ccclass,
                    m = (u.property, u.requireComponent),
                    f = "AudioMgr";
                i(
                    "AudioMgr",
                    p("Manager/AudioMgr")(
                        (l =
                            m(e)(
                                (((h = (function (i) {
                                    function n() {
                                        return i.apply(this, arguments) || this;
                                    }
                                    o(n, i);
                                    var u = n.prototype;
                                    return (
                                        (u.onLoad = function () {
                                            ((globalThis.AudioMgr = n),
                                                (n.audio =
                                                    this.getComponent(e)),
                                                s.on(
                                                    a.EVENT_HIDE,
                                                    this.onHide,
                                                    this,
                                                ),
                                                s.on(
                                                    a.EVENT_SHOW,
                                                    this.onShow,
                                                    this,
                                                ));
                                        }),
                                        (u.onHide = function () {
                                            (n.pauseBgm(),
                                                c.Log(f, "进入后台"));
                                        }),
                                        (u.onShow = function () {
                                            (n.resumeBgm(),
                                                c.Log(f, "回到前台"));
                                        }),
                                        (n.playBgm = function (i, o, t) {
                                            if (
                                                (void 0 === o && (o = 1),
                                                void 0 === t && (t = !0),
                                                i && (this.curBgm = i),
                                                g.BgmEnabled)
                                            ) {
                                                var n = d.getRes(
                                                    this.bundleName,
                                                    this.curBgm,
                                                );
                                                n &&
                                                    (this.audio.stop(),
                                                    (this.audio.clip = n),
                                                    (this.audio.loop = t),
                                                    (this.audio.volume = o),
                                                    this.audio.play());
                                            }
                                        }),
                                        (n.pauseBgm = function () {
                                            g.BgmEnabled && this.audio.pause();
                                        }),
                                        (n.resumeBgm = function () {
                                            g.BgmEnabled && this.audio.play();
                                        }),
                                        (n.stopBgm = function () {
                                            (this.audio.stop(),
                                                (this.audio.clip = null));
                                        }),
                                        (n.playSfx = function (i, o) {
                                            if (
                                                (void 0 === o && (o = 1),
                                                g.SfxEnabled)
                                            ) {
                                                var t = d.getRes(
                                                    this.bundleName,
                                                    i,
                                                );
                                                t &&
                                                    this.audio.playOneShot(
                                                        t,
                                                        o,
                                                    );
                                            }
                                        }),
                                        t(n, null, [
                                            {
                                                key: "Audio",
                                                get: function () {
                                                    return this.audio;
                                                },
                                            },
                                            {
                                                key: "CurBgm",
                                                get: function () {
                                                    return this.curBgm;
                                                },
                                            },
                                        ]),
                                        n
                                    );
                                })(r)).audio = void 0),
                                (h.curBgm = null),
                                (h.bundleName = "audio"),
                                (l = h)),
                            ) || l),
                    ) || l,
                );
                n._RF.pop();
            },
        };
    },
);
