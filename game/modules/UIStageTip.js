System.register(
    "chunks:///_virtual/UIStageTip.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc", "./UIBase.ts"],
    function (t) {
        var i, n, o, e, r, s, a, p, c;
        return {
            setters: [
                function (t) {
                    i = t.inheritsLoose;
                },
                function (t) {
                    ((n = t.cclegacy),
                        (o = t._decorator),
                        (e = t.Widget),
                        (r = t.Label),
                        (s = t.UIOpacity),
                        (a = t.tween),
                        (p = t.v3));
                },
                function (t) {
                    c = t.UIBase;
                },
            ],
            execute: function () {
                var l;
                n._RF.push({}, "20f65pXklxMXLCKLZwpj4Q3", "UIStageTip", void 0);
                var u = o.ccclass,
                    h = (o.property, o.requireComponent);
                t(
                    "UIStageTip",
                    u("UI/UIStageTip")(
                        (l =
                            h(e)(
                                (l = (function (t) {
                                    function n() {
                                        for (
                                            var i,
                                                n = arguments.length,
                                                o = new Array(n),
                                                e = 0;
                                            e < n;
                                            e++
                                        )
                                            o[e] = arguments[e];
                                        return (
                                            ((i =
                                                t.call.apply(
                                                    t,
                                                    [this].concat(o),
                                                ) || this).lbTip = null),
                                            (i.arrow = null),
                                            (i.uiOpacity = null),
                                            i
                                        );
                                    }
                                    i(n, t);
                                    var o = n.prototype;
                                    return (
                                        (o.onLoad = function () {
                                            ((this.lbTip = this.findComp(
                                                "LbTip",
                                                r,
                                            )),
                                                (this.arrow =
                                                    this.findNode("Arrow")),
                                                (this.uiOpacity =
                                                    this.getComponent(s)));
                                        }),
                                        (o.onOpen = function (t) {
                                            var i = this;
                                            ((this.lbTip.string = t),
                                                a(this.lbTip.node)
                                                    .to(
                                                        0.5,
                                                        {
                                                            position: p(
                                                                0,
                                                                0,
                                                                0,
                                                            ),
                                                        },
                                                        { easing: "sineOut" },
                                                    )
                                                    .start(),
                                                a(this.arrow)
                                                    .to(10, {
                                                        position: p(850, 0),
                                                    })
                                                    .start(),
                                                a(this.uiOpacity)
                                                    .delay(2)
                                                    .to(1, { opacity: 0 })
                                                    .call(function () {
                                                        i.node.destroy();
                                                    })
                                                    .start());
                                        }),
                                        (o.onClose = function (t) {}),
                                        n
                                    );
                                })(c)),
                            ) || l),
                    ) || l,
                );
                n._RF.pop();
            },
        };
    },
);
