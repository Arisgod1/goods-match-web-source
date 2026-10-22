System.register(
    "chunks:///_virtual/UIRecovery.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./UIBase.ts",
        "./GameMgr.ts",
        "./RecoveryMgr.ts",
    ],
    function (t) {
        var n, e, o, i, s, r, c, a, u;
        return {
            setters: [
                function (t) {
                    n = t.inheritsLoose;
                },
                function (t) {
                    ((e = t.cclegacy),
                        (o = t._decorator),
                        (i = t.Widget),
                        (s = t.Label),
                        (r = t.Button));
                },
                function (t) {
                    c = t.UIBase;
                },
                function (t) {
                    a = t.GameMgr;
                },
                function (t) {
                    u = t.RecoveryMgr;
                },
            ],
            execute: function () {
                var h;
                e._RF.push({}, "4121fz7NshJL6r1eiDKgdIv", "UIRecovery", void 0);
                var l = o.ccclass,
                    p = o.requireComponent;
                t(
                    "UIRecovery",
                    l("UI/UIRecovery")(
                        (h =
                            p(i)(
                                (h = (function (t) {
                                    function e() {
                                        for (
                                            var n,
                                                e = arguments.length,
                                                o = new Array(e),
                                                i = 0;
                                            i < e;
                                            i++
                                        )
                                            o[i] = arguments[i];
                                        return (
                                            ((n =
                                                t.call.apply(
                                                    t,
                                                    [this].concat(o),
                                                ) || this).options = null),
                                            (n.processing = !1),
                                            (n.previousPause = !1),
                                            (n.roundId = 0),
                                            n
                                        );
                                    }
                                    n(e, t);
                                    var o = e.prototype;
                                    return (
                                        (o.onOpen = function (t) {
                                            ((this.options = t),
                                                (this.previousPause = a.Pause),
                                                (this.roundId = a.roundId),
                                                (a.Pause = !0),
                                                (this.findComp(
                                                    "LbTitle",
                                                    s,
                                                ).string = t.title),
                                                (this.findComp(
                                                    "LbDesc",
                                                    s,
                                                ).string = t.message));
                                            for (var n = 0; n < 3; n++) {
                                                var e = this.findNode(
                                                    "BtnAction" + n,
                                                );
                                                ((e.active =
                                                    n < t.actions.length),
                                                    e.active &&
                                                        (this.findComp(
                                                            "BtnAction" +
                                                                n +
                                                                "/ActionLabel",
                                                            s,
                                                        ).string =
                                                            t.actions[
                                                                n
                                                            ].label));
                                            }
                                        }),
                                        (o.execute = function (t) {
                                            if (
                                                !this.processing &&
                                                this.options.actions[t]
                                            ) {
                                                this.processing = !0;
                                                for (
                                                    var n = 0;
                                                    n <
                                                    this.options.actions.length;
                                                    n++
                                                )
                                                    this.findComp(
                                                        "BtnAction" + n,
                                                        r,
                                                    ).interactable = !1;
                                                var e,
                                                    o = this.options.actions[t];
                                                try {
                                                    e = o.run();
                                                } catch (t) {
                                                    e = {
                                                        ok: !1,
                                                        reason: "storage_error",
                                                    };
                                                }
                                                if (e.ok)
                                                    (this.close(),
                                                        null == o.onSuccess ||
                                                            o.onSuccess(
                                                                e.value,
                                                            ));
                                                else {
                                                    ((this.processing = !1),
                                                        (this.findComp(
                                                            "LbDesc",
                                                            s,
                                                        ).string = u.message(
                                                            e.reason,
                                                        )));
                                                    for (
                                                        var i = 0;
                                                        i <
                                                        this.options.actions
                                                            .length;
                                                        i++
                                                    )
                                                        this.findComp(
                                                            "BtnAction" + i,
                                                            r,
                                                        ).interactable = !0;
                                                }
                                            }
                                        }),
                                        (o.onBtnPrimaryClick = function () {
                                            this.execute(0);
                                        }),
                                        (o.onBtnSecondaryClick = function () {
                                            this.execute(1);
                                        }),
                                        (o.onBtnTertiaryClick = function () {
                                            this.execute(2);
                                        }),
                                        (o.onClose = function () {
                                            a.roundId === this.roundId &&
                                                (a.Pause = this.previousPause);
                                        }),
                                        e
                                    );
                                })(c)),
                            ) || h),
                    ) || h,
                );
                e._RF.pop();
            },
        };
    },
);
