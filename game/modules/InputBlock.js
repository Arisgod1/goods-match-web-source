System.register(
    "chunks:///_virtual/InputBlock.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc"],
    function (t) {
        var n, e, i, c, o, s;
        return {
            setters: [
                function (t) {
                    ((n = t.inheritsLoose), (e = t.createClass));
                },
                function (t) {
                    ((i = t.cclegacy),
                        (c = t._decorator),
                        (o = t.BlockInputEvents),
                        (s = t.Component));
                },
            ],
            execute: function () {
                var u, l;
                i._RF.push({}, "9b7dfe7eXxHR4G7BQOM8lL3", "InputBlock", void 0);
                var r = c.ccclass,
                    p = c.requireComponent,
                    a = c.disallowMultiple;
                t(
                    "InputBlock",
                    r("Misc/InputBlock")(
                        (u =
                            a(!0)(
                                (u =
                                    p(o)(
                                        (((l = (function (t) {
                                            function i() {
                                                return (
                                                    t.apply(this, arguments) ||
                                                    this
                                                );
                                            }
                                            return (
                                                n(i, t),
                                                (i.prototype.onLoad =
                                                    function () {
                                                        ((i._inst = this),
                                                            (i.Active = !1));
                                                    }),
                                                (i.setActive = function (t) {
                                                    (this._inst.unscheduleAllCallbacks(),
                                                        (this.Active = !0),
                                                        this._inst.scheduleOnce(
                                                            function () {
                                                                i.Active = !1;
                                                            },
                                                            t,
                                                        ));
                                                }),
                                                e(i, null, [
                                                    {
                                                        key: "Active",
                                                        set: function (t) {
                                                            this._inst.node.active =
                                                                t;
                                                        },
                                                    },
                                                ]),
                                                i
                                            );
                                        })(s))._inst = void 0),
                                        (u = l)),
                                    ) || u),
                            ) || u),
                    ) || u,
                );
                i._RF.pop();
            },
        };
    },
);
