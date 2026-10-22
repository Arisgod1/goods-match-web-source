System.register(
    "chunks:///_virtual/ResMgr.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./ArrayUtil.ts",
        "./Debug.ts",
    ],
    function (e) {
        var r, n, t, a, o, s, i;
        return {
            setters: [
                function (e) {
                    ((r = e.createClass),
                        (n = e.asyncToGenerator),
                        (t = e.regeneratorRuntime));
                },
                function (e) {
                    ((a = e.cclegacy), (o = e.assetManager));
                },
                function (e) {
                    s = e.ArrayUtil;
                },
                function (e) {
                    i = e.Debug;
                },
            ],
            execute: function () {
                a._RF.push({}, "18c3dVw309B54avl/M3OpJz", "ResMgr", void 0);
                var u = "ResMgr";
                ((e(
                    "ResMgr",
                    (function () {
                        function e() {}
                        return (
                            (e.loadBundle = function (e, r) {
                                return (
                                    void 0 === r && (r = null),
                                    new Promise(function (n, t) {
                                        var a = Date.now();
                                        o.getBundle(e)
                                            ? (i.Warn(
                                                  u,
                                                  "资源包" +
                                                      e +
                                                      "已加载,无需重复加载",
                                              ),
                                              n(o.getBundle(e)))
                                            : (i.Log(
                                                  u,
                                                  "资源包" + e + "开始加载",
                                              ),
                                              o.loadBundle(e, function (o, s) {
                                                  if (o)
                                                      (i.Error(
                                                          u,
                                                          "资源包" +
                                                              e +
                                                              "加载失败 err:" +
                                                              o,
                                                      ),
                                                          t(o));
                                                  else {
                                                      var d = Date.now();
                                                      (i.Log(
                                                          u,
                                                          "资源包" +
                                                              e +
                                                              "加载完毕,用时" +
                                                              (d - a) +
                                                              "ms",
                                                      ),
                                                          r && r(s),
                                                          n(s));
                                                  }
                                              }));
                                    })
                                );
                            }),
                            (e.preloadDir = (function () {
                                var e = n(
                                    t().mark(function e(r, n) {
                                        var a;
                                        return t().wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                (void 0 === n &&
                                                                    (n = "./"),
                                                                (a =
                                                                    o.getBundle(
                                                                        r,
                                                                    )))
                                                            ) {
                                                                e.next = 6;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 5),
                                                                this.loadBundle(
                                                                    r,
                                                                )
                                                            );
                                                        case 5:
                                                            a = e.sent;
                                                        case 6:
                                                            return e.abrupt(
                                                                "return",
                                                                new Promise(
                                                                    function (
                                                                        e,
                                                                        t,
                                                                    ) {
                                                                        i.Log(
                                                                            u,
                                                                            "开始预加载资源包" +
                                                                                r +
                                                                                "下的文件夹" +
                                                                                n,
                                                                        );
                                                                        var o =
                                                                            Date.now();
                                                                        a.preloadDir(
                                                                            n,
                                                                            function (
                                                                                a,
                                                                                s,
                                                                            ) {
                                                                                if (
                                                                                    a
                                                                                )
                                                                                    (i.Error(
                                                                                        u,
                                                                                        "资源包" +
                                                                                            r +
                                                                                            "下的文件夹" +
                                                                                            n +
                                                                                            "预加载失败,err:" +
                                                                                            a,
                                                                                    ),
                                                                                        t(
                                                                                            a,
                                                                                        ));
                                                                                else {
                                                                                    var d =
                                                                                        Date.now();
                                                                                    (i.Log(
                                                                                        u,
                                                                                        "资源包" +
                                                                                            r +
                                                                                            "下的文件夹" +
                                                                                            n +
                                                                                            "预加载完毕,用时" +
                                                                                            (d -
                                                                                                o) +
                                                                                            "ms",
                                                                                    ),
                                                                                        e());
                                                                                }
                                                                            },
                                                                        );
                                                                    },
                                                                ),
                                                            );
                                                        case 7:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                        );
                                    }),
                                );
                                return function (r, n) {
                                    return e.apply(this, arguments);
                                };
                            })()),
                            (e.loadDir = (function () {
                                var e = n(
                                    t().mark(function e(r, n, a) {
                                        var d,
                                            f = this;
                                        return t().wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                (void 0 === n &&
                                                                    (n = "./"),
                                                                void 0 === a &&
                                                                    (a = !1),
                                                                (d =
                                                                    o.getBundle(
                                                                        r,
                                                                    )))
                                                            ) {
                                                                e.next = 7;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 6),
                                                                this.loadBundle(
                                                                    r,
                                                                )
                                                            );
                                                        case 6:
                                                            d = e.sent;
                                                        case 7:
                                                            return e.abrupt(
                                                                "return",
                                                                new Promise(
                                                                    function (
                                                                        e,
                                                                        t,
                                                                    ) {
                                                                        i.Log(
                                                                            u,
                                                                            "开始加载资源包" +
                                                                                r +
                                                                                "下的文件夹" +
                                                                                n,
                                                                        );
                                                                        var o =
                                                                            Date.now();
                                                                        d.loadDir(
                                                                            n,
                                                                            function (
                                                                                d,
                                                                                l,
                                                                            ) {
                                                                                if (
                                                                                    d
                                                                                )
                                                                                    (i.Error(
                                                                                        u,
                                                                                        "资源包" +
                                                                                            r +
                                                                                            "下的文件夹" +
                                                                                            n +
                                                                                            "加载失败,err:" +
                                                                                            d,
                                                                                    ),
                                                                                        t(
                                                                                            d,
                                                                                        ));
                                                                                else {
                                                                                    if (
                                                                                        a
                                                                                    ) {
                                                                                        f._loadedRefRes.hasOwnProperty(
                                                                                            r,
                                                                                        ) ||
                                                                                            (f._loadedRefRes[
                                                                                                r
                                                                                            ] =
                                                                                                []);
                                                                                        for (
                                                                                            var c = 0;
                                                                                            c <
                                                                                            l.length;
                                                                                            c++
                                                                                        ) {
                                                                                            var v =
                                                                                                l[
                                                                                                    c
                                                                                                ];
                                                                                            s.has(
                                                                                                f
                                                                                                    ._loadedRefRes[
                                                                                                    r
                                                                                                ],
                                                                                                v,
                                                                                            ) ||
                                                                                                (f._loadedRefRes[
                                                                                                    r
                                                                                                ].push(
                                                                                                    v,
                                                                                                ),
                                                                                                v.addRef());
                                                                                        }
                                                                                    }
                                                                                    var R =
                                                                                        Date.now();
                                                                                    (i.Log(
                                                                                        u,
                                                                                        "资源包" +
                                                                                            r +
                                                                                            "下的文件夹" +
                                                                                            n +
                                                                                            "加载完毕,用时" +
                                                                                            (R -
                                                                                                o) +
                                                                                            "ms",
                                                                                    ),
                                                                                        e());
                                                                                }
                                                                            },
                                                                        );
                                                                    },
                                                                ),
                                                            );
                                                        case 8:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                        );
                                    }),
                                );
                                return function (r, n, t) {
                                    return e.apply(this, arguments);
                                };
                            })()),
                            (e.loadRes = (function () {
                                var e = n(
                                    t().mark(function e(r, n, a, d) {
                                        var f,
                                            l = this;
                                        return t().wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                (void 0 === a &&
                                                                    (a = ""),
                                                                void 0 === d &&
                                                                    (d = !1),
                                                                (f =
                                                                    o.getBundle(
                                                                        r,
                                                                    )))
                                                            ) {
                                                                e.next = 7;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 6),
                                                                this.loadBundle(
                                                                    r,
                                                                )
                                                            );
                                                        case 6:
                                                            f = e.sent;
                                                        case 7:
                                                            return e.abrupt(
                                                                "return",
                                                                new Promise(
                                                                    function (
                                                                        e,
                                                                        t,
                                                                    ) {
                                                                        var o =
                                                                            a +
                                                                            n;
                                                                        i.Log(
                                                                            u,
                                                                            "开始加载资源包" +
                                                                                r +
                                                                                "下的文件" +
                                                                                o,
                                                                        );
                                                                        var c =
                                                                            Date.now();
                                                                        f.load(
                                                                            o,
                                                                            function (
                                                                                n,
                                                                                a,
                                                                            ) {
                                                                                if (
                                                                                    n
                                                                                )
                                                                                    (i.Error(
                                                                                        u,
                                                                                        "资源包" +
                                                                                            r +
                                                                                            "下的文件" +
                                                                                            o +
                                                                                            "加载失败,err:" +
                                                                                            n,
                                                                                    ),
                                                                                        t(
                                                                                            n,
                                                                                        ));
                                                                                else {
                                                                                    var f =
                                                                                        Date.now();
                                                                                    (d &&
                                                                                        (l._loadedRefRes.hasOwnProperty(
                                                                                            r,
                                                                                        ) ||
                                                                                            (l._loadedRefRes[
                                                                                                r
                                                                                            ] =
                                                                                                []),
                                                                                        s.has(
                                                                                            l
                                                                                                ._loadedRefRes[
                                                                                                r
                                                                                            ],
                                                                                            a,
                                                                                        ) ||
                                                                                            (l._loadedRefRes[
                                                                                                r
                                                                                            ].push(
                                                                                                a,
                                                                                            ),
                                                                                            a.addRef())),
                                                                                        i.Log(
                                                                                            u,
                                                                                            "资源包" +
                                                                                                r +
                                                                                                "下的文件" +
                                                                                                o +
                                                                                                "加载完毕,用时" +
                                                                                                (f -
                                                                                                    c) +
                                                                                                "ms",
                                                                                        ),
                                                                                        e(
                                                                                            a,
                                                                                        ));
                                                                                }
                                                                            },
                                                                        );
                                                                    },
                                                                ),
                                                            );
                                                        case 8:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                        );
                                    }),
                                );
                                return function (r, n, t, a) {
                                    return e.apply(this, arguments);
                                };
                            })()),
                            (e.getRes = function (e, r, n) {
                                void 0 === n && (n = "");
                                var t = o.getBundle(e);
                                if (!t)
                                    return (
                                        i.Error(
                                            u,
                                            "资源包" +
                                                e +
                                                "暂未加载,无法获取资源" +
                                                r,
                                        ),
                                        null
                                    );
                                var a = n + r,
                                    s = t.get(a);
                                return (s || i.Warn(u, "资源获取失败", a), s);
                            }),
                            (e.isLoaded = function (e, r, n) {
                                void 0 === n && (n = "");
                                var t = o.getBundle(e);
                                if (!t)
                                    return (
                                        i.Error(u, "资源包" + e + "暂未加载"),
                                        !1
                                    );
                                var a = n + r;
                                return !!t.get(a);
                            }),
                            (e.release = function (e) {
                                if (this._loadedRefRes.hasOwnProperty(e)) {
                                    for (
                                        var r = this._loadedRefRes[e],
                                            n = r.length,
                                            t = 0;
                                        t < n;
                                        t++
                                    ) {
                                        var a = r[t];
                                        a.isValid
                                            ? a.decRef()
                                            : i.Warn(
                                                  this.name,
                                                  "忽略无效资源," +
                                                      a.name +
                                                      ":" +
                                                      a.uuid,
                                              );
                                    }
                                    (delete this._loadedRefRes[e],
                                        i.Log(
                                            this.name,
                                            "释放资源包" +
                                                e +
                                                "中的" +
                                                n +
                                                "个资源",
                                        ));
                                } else
                                    i.Warn(
                                        this.name,
                                        "暂未记录资源包" +
                                            e +
                                            "中任何资源，无需释放",
                                    );
                            }),
                            (e.getSpriteFrame = function (e, r, n) {
                                return (
                                    void 0 === n && (n = ""),
                                    this.getRes(e, r + "/spriteFrame", n)
                                );
                            }),
                            r(e, null, [
                                {
                                    key: "Assets",
                                    get: function () {
                                        return o.assets;
                                    },
                                },
                                {
                                    key: "LoadedRes",
                                    get: function () {
                                        return this._loadedRefRes;
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                )._loadedRefRes = {}),
                    a._RF.pop());
            },
        };
    },
);
