System.register(
    "chunks:///_virtual/CustomComponent.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc", "./Debug.ts"],
    function () {
        var e, t, n, o, r, i, a, s, u, c;
        return {
            setters: [
                function (n) {
                    ((e = n.asyncToGenerator), (t = n.regeneratorRuntime));
                },
                function (e) {
                    ((n = e.cclegacy),
                        (o = e.Component),
                        (r = e.find),
                        (i = e.UITransform),
                        (a = e.assetManager),
                        (s = e.Prefab),
                        (u = e.instantiate));
                },
                function (e) {
                    c = e.Debug;
                },
            ],
            execute: function () {
                n._RF.push(
                    {},
                    "7ae38OhjMRHuoq4SZegyA3K",
                    "CustomComponent",
                    void 0,
                );
                var p = "Component";
                ((o.prototype.findNode = function (e, t) {
                    return (t || (t = this.node), r(e, t));
                }),
                    (o.prototype.findComp = function (e, t, n) {
                        n || (n = this.node);
                        var o = r(e, n);
                        return null == o ? void 0 : o.getComponent(t);
                    }),
                    (o.prototype.instantiate = e(
                        t().mark(function e(n, o, r) {
                            var i = this;
                            return t().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return e.abrupt(
                                                "return",
                                                new Promise(function (e, t) {
                                                    r || (r = i.node);
                                                    var d = a.getBundle(n);
                                                    if (!d)
                                                        return (
                                                            c.Warn(
                                                                p,
                                                                "bundle " +
                                                                    n +
                                                                    " not exist or loaded",
                                                            ),
                                                            void t()
                                                        );
                                                    var f = Date.now(),
                                                        l = d.get(o, s),
                                                        m = null;
                                                    l
                                                        ? ((m = u(l)),
                                                          r.addChild(m),
                                                          c.Log(
                                                              p,
                                                              "prefab " +
                                                                  o +
                                                                  " instantiate success, cost " +
                                                                  (Date.now() -
                                                                      f) +
                                                                  " ms",
                                                          ),
                                                          e(m))
                                                        : d.load(
                                                              o,
                                                              s,
                                                              function (n, a) {
                                                                  if (n) t();
                                                                  else {
                                                                      if (
                                                                          !i.isValid
                                                                      )
                                                                          return;
                                                                      ((m =
                                                                          u(a)),
                                                                          r.addChild(
                                                                              m,
                                                                          ),
                                                                          c.Log(
                                                                              p,
                                                                              "prefab " +
                                                                                  o +
                                                                                  " instantiate success, cost " +
                                                                                  (Date.now() -
                                                                                      f) +
                                                                                  " ms",
                                                                          ),
                                                                          e(m));
                                                                  }
                                                              },
                                                          );
                                                }),
                                            );
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        }),
                    )),
                    Object.defineProperty(o.prototype, "uiTrans", {
                        get: function () {
                            return this.node.getComponent(i);
                        },
                    }),
                    n._RF.pop());
            },
        };
    },
);
