System.register(
    "chunks:///_virtual/UILoading.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./UIBase.ts",
        "./Bundle.ts",
        "./ResMgr.ts",
        "./UI.ts",
        "./GameSave.ts",
        "./RecoveryMgr.ts",
    ],
    function (e) {
        var n, t, r, o, s, i, a, u, c, l, d, h, p, f, g, m, v, y, B, C, I;
        return {
            setters: [
                function (e) {
                    ((n = e.inheritsLoose),
                        (t = e.asyncToGenerator),
                        (r = e.regeneratorRuntime));
                },
                function (e) {
                    ((o = e.cclegacy),
                        (s = e._decorator),
                        (i = e.Widget),
                        (a = e.Node),
                        (u = e.UITransform),
                        (c = e.Label),
                        (l = e.Color),
                        (d = e.Button),
                        (h = e.math),
                        (p = e.ProgressBar),
                        (f = e.macro));
                },
                function (e) {
                    g = e.UIBase;
                },
                function (e) {
                    m = e.Bundle;
                },
                function (e) {
                    v = e.ResMgr;
                },
                function (e) {
                    y = e.UI;
                },
                function (e) {
                    ((B = e.GameSave), (C = e.success));
                },
                function (e) {
                    I = e.RecoveryMgr;
                },
            ],
            execute: function () {
                var R;
                o._RF.push({}, "463adtvr1NIE7o+HgOS2qHr", "UILoading", void 0);
                var L = s.ccclass,
                    w = (s.property, s.requireComponent);
                e(
                    "UILoading",
                    L("UI/UILoading")(
                        (R =
                            w(i)(
                                (R = (function (e) {
                                    function o() {
                                        for (
                                            var n,
                                                t = arguments.length,
                                                r = new Array(t),
                                                o = 0;
                                            o < t;
                                            o++
                                        )
                                            r[o] = arguments[o];
                                        return (
                                            ((n =
                                                e.call.apply(
                                                    e,
                                                    [this].concat(r),
                                                ) || this).progressBar = null),
                                            (n.loaded = !1),
                                            (n.loading = !1),
                                            (n.retryNode = null),
                                            n
                                        );
                                    }
                                    n(o, e);
                                    var s = o.prototype;
                                    return (
                                        (s.onLoad = (function () {
                                            var e = t(
                                                r().mark(function e() {
                                                    return r().wrap(
                                                        function (e) {
                                                            for (;;)
                                                                switch (
                                                                    (e.prev =
                                                                        e.next)
                                                                ) {
                                                                    case 0:
                                                                        this.progressBar =
                                                                            this.getComponentInChildren(
                                                                                p,
                                                                            );
                                                                    case 1:
                                                                    case "end":
                                                                        return e.stop();
                                                                }
                                                        },
                                                        e,
                                                        this,
                                                    );
                                                }),
                                            );
                                            return function () {
                                                return e.apply(this, arguments);
                                            };
                                        })()),
                                        (s.start = (function () {
                                            var e = t(
                                                r().mark(function e() {
                                                    return r().wrap(
                                                        function (e) {
                                                            for (;;)
                                                                switch (
                                                                    (e.prev =
                                                                        e.next)
                                                                ) {
                                                                    case 0:
                                                                        return (
                                                                            (e.next = 2),
                                                                            this.loadResources()
                                                                        );
                                                                    case 2:
                                                                    case "end":
                                                                        return e.stop();
                                                                }
                                                        },
                                                        e,
                                                        this,
                                                    );
                                                }),
                                            );
                                            return function () {
                                                return e.apply(this, arguments);
                                            };
                                        })()),
                                        (s.loadResources = (function () {
                                            var e = t(
                                                r().mark(function e() {
                                                    return r().wrap(
                                                        function (e) {
                                                            for (;;)
                                                                switch (
                                                                    (e.prev =
                                                                        e.next)
                                                                ) {
                                                                    case 0:
                                                                        if (
                                                                            !this
                                                                                .loading &&
                                                                            !this
                                                                                .loaded &&
                                                                            this
                                                                                .isValid
                                                                        ) {
                                                                            e.next = 2;
                                                                            break;
                                                                        }
                                                                        return e.abrupt(
                                                                            "return",
                                                                        );
                                                                    case 2:
                                                                        return (
                                                                            (this.loading =
                                                                                !0),
                                                                            this
                                                                                .retryNode &&
                                                                                (this.retryNode.active =
                                                                                    !1),
                                                                            (this.progressBar.progress = 0),
                                                                            this.schedule(
                                                                                this
                                                                                    .updateProgress,
                                                                                0.25,
                                                                                f.REPEAT_FOREVER,
                                                                            ),
                                                                            (e.prev = 6),
                                                                            (e.next = 9),
                                                                            this.loadBundle()
                                                                        );
                                                                    case 9:
                                                                        return (
                                                                            (e.next = 11),
                                                                            this.loadRes()
                                                                        );
                                                                    case 11:
                                                                        (this
                                                                            .isValid &&
                                                                            (this.loaded =
                                                                                !0),
                                                                            (e.next = 17));
                                                                        break;
                                                                    case 14:
                                                                        ((e.prev = 14),
                                                                            (e.t0 =
                                                                                e.catch(
                                                                                    6,
                                                                                )),
                                                                            this
                                                                                .isValid &&
                                                                                (this.unschedule(
                                                                                    this
                                                                                        .updateProgress,
                                                                                ),
                                                                                this.showLoadFailure()));
                                                                    case 17:
                                                                        return (
                                                                            (e.prev = 17),
                                                                            (this.loading =
                                                                                !1),
                                                                            e.finish(
                                                                                17,
                                                                            )
                                                                        );
                                                                    case 20:
                                                                    case "end":
                                                                        return e.stop();
                                                                }
                                                        },
                                                        e,
                                                        this,
                                                        [[6, 14, 17, 20]],
                                                    );
                                                }),
                                            );
                                            return function () {
                                                return e.apply(this, arguments);
                                            };
                                        })()),
                                        (s.showLoadFailure = function () {
                                            if (!this.retryNode) {
                                                var e = (this.retryNode = new a(
                                                    "LoadingRetry",
                                                ));
                                                ((e.layer = this.node.layer),
                                                    this.node.addChild(e),
                                                    e
                                                        .addComponent(u)
                                                        .setContentSize(
                                                            640,
                                                            110,
                                                        ));
                                                var n = e.addComponent(c);
                                                ((n.string =
                                                    "资源加载失败，请检查网络\n【点击重试】"),
                                                    (n.fontSize = 28),
                                                    (n.lineHeight = 42),
                                                    (n.color = new l(
                                                        40,
                                                        40,
                                                        80,
                                                        255,
                                                    )));
                                                var t = e.addComponent(i);
                                                ((t.isAlignBottom = !0),
                                                    (t.bottom = 230),
                                                    (t.isAlignHorizontalCenter =
                                                        !0),
                                                    (t.alignMode =
                                                        i.AlignMode.ALWAYS),
                                                    t.updateAlignment(),
                                                    e.addComponent(d),
                                                    e.on(
                                                        d.EventType.CLICK,
                                                        this.loadResources,
                                                        this,
                                                    ));
                                            }
                                            this.retryNode.active = !0;
                                        }),
                                        (s.onOpen = function (e) {}),
                                        (s.onClose = function (e) {
                                            this.unscheduleAllCallbacks();
                                        }),
                                        (s.loadBundle = function () {
                                            return Promise.all([
                                                v.loadBundle(m.Icon),
                                                v.loadBundle(m.Audio),
                                                v.loadBundle(m.Game),
                                                v.loadBundle(m.UI),
                                            ]);
                                        }),
                                        (s.loadRes = function () {
                                            return Promise.all([
                                                v.loadDir(m.Icon),
                                                v.loadDir(m.Audio),
                                                v.loadDir(m.Game),
                                                v.loadDir(m.UI),
                                            ]);
                                        }),
                                        (s.updateProgress = function () {
                                            var e = h.randomRange(0.1, 0.3);
                                            ((this.progressBar.progress =
                                                Math.min(
                                                    this.progressBar.progress +
                                                        e,
                                                    0.9,
                                                )),
                                                this.loaded &&
                                                    ((this.progressBar.progress = 1),
                                                    this.unschedule(
                                                        this.updateProgress,
                                                    ),
                                                    this.onLoadCompleted()));
                                        }),
                                        (s.onLoadCompleted = function () {
                                            var e = this,
                                                n = function () {
                                                    e.scheduleOnce(function () {
                                                        (e.close(),
                                                            e.open(y.Main));
                                                    });
                                                },
                                                t = B.init();
                                            t.ok
                                                ? n()
                                                : I.show({
                                                      title: "无法加载进度",
                                                      message: I.message(
                                                          t.reason,
                                                      ),
                                                      actions: [
                                                          {
                                                              label: "重试读取",
                                                              run: function () {
                                                                  return B.init();
                                                              },
                                                              onSuccess: n,
                                                          },
                                                          {
                                                              label: "新建存档",
                                                              run: function () {
                                                                  return C();
                                                              },
                                                              onSuccess:
                                                                  function () {
                                                                      return I.show(
                                                                          {
                                                                              title: "新建存档",
                                                                              message:
                                                                                  "将重置新版游戏进度、金币和道具，确定继续吗？",
                                                                              actions:
                                                                                  [
                                                                                      {
                                                                                          label: "确定新建",
                                                                                          run: function () {
                                                                                              return B.createNew();
                                                                                          },
                                                                                          onSuccess:
                                                                                              n,
                                                                                      },
                                                                                      {
                                                                                          label: "返回",
                                                                                          run: function () {
                                                                                              return C();
                                                                                          },
                                                                                          onSuccess:
                                                                                              function () {
                                                                                                  return e.onLoadCompleted();
                                                                                              },
                                                                                      },
                                                                                  ],
                                                                          },
                                                                      );
                                                                  },
                                                          },
                                                      ],
                                                  });
                                        }),
                                        o
                                    );
                                })(g)),
                            ) || R),
                    ) || R,
                );
                o._RF.pop();
            },
        };
    },
);
