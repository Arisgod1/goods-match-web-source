System.register(
    "chunks:///_virtual/UIToast.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc", "./UIBase.ts"],
    function (t) {
        var n, o, e, s, r, i;
        return {
            setters: [
                function (t) {
                    n = t.inheritsLoose;
                },
                function (t) {
                    ((o = t.cclegacy),
                        (e = t._decorator),
                        (s = t.Widget),
                        (r = t.Label));
                },
                function (t) {
                    i = t.UIBase;
                },
            ],
            execute: function () {
                var c;
                o._RF.push({}, "77689t//+dLirYhKMrlJsQa", "UIToast", void 0);
                var a = e.ccclass,
                    l = (e.property, e.requireComponent);
                t(
                    "UIToast",
                    a("UI/UIToast")(
                        (c =
                            l(s)(
                                (c = (function (t) {
                                    function o() {
                                        for (
                                            var n,
                                                o = arguments.length,
                                                e = new Array(o),
                                                s = 0;
                                            s < o;
                                            s++
                                        )
                                            e[s] = arguments[s];
                                        return (
                                            ((n =
                                                t.call.apply(
                                                    t,
                                                    [this].concat(e),
                                                ) || this).lbToast = null),
                                            n
                                        );
                                    }
                                    n(o, t);
                                    var e = o.prototype;
                                    return (
                                        (e.onLoad = function () {
                                            this.lbToast =
                                                this.getComponentInChildren(r);
                                        }),
                                        (e.onDestroy = function () {
                                            this.unscheduleAllCallbacks();
                                        }),
                                        (e.onOpen = function (t) {
                                            var n = this;
                                            ((this.lbToast.string = "" + t),
                                                this.scheduleOnce(function () {
                                                    n.node.destroy();
                                                }, 2));
                                        }),
                                        (e.onClose = function (t) {}),
                                        o
                                    );
                                })(i)),
                            ) || c),
                    ) || c,
                );
                o._RF.pop();
            },
        };
    },
);
