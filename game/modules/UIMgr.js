System.register(
    "chunks:///_virtual/UIMgr.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./Debug.ts",
        "./UIType.ts",
        "./EventMgr.ts",
        "./EventType.ts",
        "./ResMgr.ts",
        "./UIBase.ts",
        "./Bundle.ts",
    ],
    function (t) {
        var e, n, i, o, s, r, p, a, u, c, l, h, d, U, f, g, _, I, y;
        return {
            setters: [
                function (t) {
                    ((e = t.applyDecoratedDescriptor),
                        (n = t.inheritsLoose),
                        (i = t.initializerDefineProperty),
                        (o = t.assertThisInitialized),
                        (s = t.asyncToGenerator),
                        (r = t.regeneratorRuntime));
                },
                function (t) {
                    ((p = t.cclegacy),
                        (a = t._decorator),
                        (u = t.Node),
                        (c = t.Component),
                        (l = t.instantiate),
                        (h = t.isValid));
                },
                function (t) {
                    d = t.Debug;
                },
                function (t) {
                    U = t.UIType;
                },
                function (t) {
                    f = t.EventMgr;
                },
                function (t) {
                    g = t.EventType;
                },
                function (t) {
                    _ = t.ResMgr;
                },
                function (t) {
                    I = t.UIBase;
                },
                function (t) {
                    y = t.Bundle;
                },
            ],
            execute: function () {
                var v, M, k, b, x, S;
                p._RF.push({}, "2c522MGUX1PWKPa7gjqU4Ab", "UIMgr", void 0);
                var T = a.ccclass,
                    m = a.property,
                    O = "UIMgr";
                t(
                    "UIMgr",
                    ((v = T("Manager/UIMgr")),
                    (M = m(u)),
                    v(
                        (((S = (function (t) {
                            function e() {
                                for (
                                    var e,
                                        n = arguments.length,
                                        s = new Array(n),
                                        r = 0;
                                    r < n;
                                    r++
                                )
                                    s[r] = arguments[r];
                                return (
                                    (e =
                                        t.call.apply(t, [this].concat(s)) ||
                                        this),
                                    i(e, "popUpMask", x, o(e)),
                                    e
                                );
                            }
                            return (
                                n(e, t),
                                (e.prototype.onLoad = function () {
                                    ((globalThis.UIMgr = e),
                                        (e._inst = this),
                                        (e._node = this.node),
                                        e.init());
                                }),
                                (e.init = function () {
                                    (f.on(g.OpenUI, this.open, this),
                                        f.on(g.CloseUI, this.close, this));
                                }),
                                (e.open = (function () {
                                    var t = s(
                                        r().mark(function t(e, n, i) {
                                            var o, s, p, a, u, c, f, g;
                                            return r().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch (
                                                            (t.prev = t.next)
                                                        ) {
                                                            case 0:
                                                                if (
                                                                    !this.isOpened(
                                                                        e,
                                                                    )
                                                                ) {
                                                                    t.next = 3;
                                                                    break;
                                                                }
                                                                return (
                                                                    d.Warn(
                                                                        O,
                                                                        e +
                                                                            "已经打开",
                                                                    ),
                                                                    t.abrupt(
                                                                        "return",
                                                                    )
                                                                );
                                                            case 3:
                                                                if (
                                                                    ((p =
                                                                        null !=
                                                                        (o =
                                                                            null ==
                                                                            i
                                                                                ? void 0
                                                                                : i.uiBundle)
                                                                            ? o
                                                                            : y.UI),
                                                                    _.isLoaded(
                                                                        p,
                                                                        e,
                                                                    ))
                                                                ) {
                                                                    t.next = 8;
                                                                    break;
                                                                }
                                                                return (
                                                                    (t.next = 8),
                                                                    _.loadRes(
                                                                        p,
                                                                        e,
                                                                    )
                                                                );
                                                            case 8:
                                                                if (
                                                                    (a =
                                                                        _.getRes(
                                                                            p,
                                                                            e,
                                                                        ))
                                                                ) {
                                                                    t.next = 12;
                                                                    break;
                                                                }
                                                                return (
                                                                    d.Error(
                                                                        O,
                                                                        e +
                                                                            "不存在",
                                                                    ),
                                                                    t.abrupt(
                                                                        "return",
                                                                    )
                                                                );
                                                            case 12:
                                                                ((u = l(a)),
                                                                    (c =
                                                                        u.getComponent(
                                                                            I,
                                                                        )),
                                                                    d.Log(
                                                                        O,
                                                                        "打开" +
                                                                            e,
                                                                    ),
                                                                    (f =
                                                                        null !=
                                                                        (s =
                                                                            null ==
                                                                            i
                                                                                ? void 0
                                                                                : i.uiType)
                                                                            ? s
                                                                            : c.uiType),
                                                                    this._node.children[
                                                                        f
                                                                    ].addChild(
                                                                        u,
                                                                    ),
                                                                    c.onOpen(n),
                                                                    f ===
                                                                        U.PopUp &&
                                                                        ((g =
                                                                            u.getSiblingIndex()),
                                                                        (this._inst.popUpMask.active =
                                                                            !0),
                                                                        this._inst.popUpMask.setSiblingIndex(
                                                                            g -
                                                                                1,
                                                                        ),
                                                                        this._popUpStack.push(
                                                                            e,
                                                                        )),
                                                                    f ===
                                                                    U.Toast
                                                                        ? (h(
                                                                              this
                                                                                  ._toast,
                                                                          ) &&
                                                                              this._toast.destroy(),
                                                                          (this._toast =
                                                                              u))
                                                                        : (this._openedUI[
                                                                              e
                                                                          ] =
                                                                              c));
                                                            case 21:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this,
                                            );
                                        }),
                                    );
                                    return function (e, n, i) {
                                        return t.apply(this, arguments);
                                    };
                                })()),
                                (e.close = function (t, e) {
                                    if (this.isOpened(t)) {
                                        var n = this._openedUI[t];
                                        if (
                                            (d.Log(O, "关闭" + t),
                                            n.uiType === U.PopUp)
                                        ) {
                                            var i = this._popUpStack.indexOf(t);
                                            if (
                                                (this._popUpStack.splice(i, 1),
                                                this._popUpStack.length <= 0)
                                            )
                                                this._inst.popUpMask.active =
                                                    !1;
                                            else {
                                                var o =
                                                        this._popUpStack[
                                                            this._popUpStack
                                                                .length - 1
                                                        ],
                                                    s =
                                                        this._openedUI[
                                                            o
                                                        ].node.getSiblingIndex();
                                                this._inst.popUpMask.setSiblingIndex(
                                                    Math.max(0, s),
                                                );
                                            }
                                        }
                                        (n.onClose(e),
                                            delete this._openedUI[t],
                                            n.node.destroy());
                                    }
                                }),
                                (e.get = function (t) {
                                    return this._openedUI[t];
                                }),
                                (e.isOpened = function (t) {
                                    return this._openedUI.hasOwnProperty(t);
                                }),
                                e
                            );
                        })(c))._inst = null),
                        (S._node = null),
                        (S._openedUI = {}),
                        (S._popUpStack = []),
                        (S._toast = null),
                        (x = e((b = S).prototype, "popUpMask", [M], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (k = b)),
                    ) || k),
                );
                p._RF.pop();
            },
        };
    },
);
