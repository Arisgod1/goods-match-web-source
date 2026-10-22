System.register(
    "chunks:///_virtual/UITimeOut.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./UIBase.ts",
        "./EventMgr.ts",
        "./EventType.ts",
        "./TransMgr.ts",
        "./GameMgr.ts",
        "./UI.ts",
        "./AudioMgr.ts",
    ],
    function (e) {
        var n, t, r, s, i, o, a, c, u, f, p, l, v, h;
        return {
            setters: [
                function (e) {
                    ((n = e.inheritsLoose),
                        (t = e.asyncToGenerator),
                        (r = e.regeneratorRuntime));
                },
                function (e) {
                    ((s = e.cclegacy),
                        (i = e._decorator),
                        (o = e.Widget),
                        (a = e.Label));
                },
                function (e) {
                    c = e.UIBase;
                },
                function (e) {
                    u = e.EventMgr;
                },
                function (e) {
                    f = e.EventType;
                },
                function (e) {
                    p = e.TransMgr;
                },
                function (e) {
                    l = e.GameMgr;
                },
                function (e) {
                    v = e.UI;
                },
                function (e) {
                    h = e.AudioMgr;
                },
            ],
            execute: function () {
                var g;
                s._RF.push({}, "519a2XuJHhPCIqfzNnvXoyr", "UITimeOut", void 0);
                var m = i.ccclass,
                    I = i.requireComponent;
                e(
                    "UITimeOut",
                    m("UI/UITimeOut")(
                        (g =
                            I(o)(
                                (g = (function (e) {
                                    function s() {
                                        for (
                                            var n,
                                                t = arguments.length,
                                                r = new Array(t),
                                                s = 0;
                                            s < t;
                                            s++
                                        )
                                            r[s] = arguments[s];
                                        return (
                                            ((n =
                                                e.call.apply(
                                                    e,
                                                    [this].concat(r),
                                                ) || this).processing = !1),
                                            n
                                        );
                                    }
                                    n(s, e);
                                    var i = s.prototype;
                                    return (
                                        (i.onOpen = function () {
                                            ((l.Pause = !0),
                                                h.playSfx("通关失败"),
                                                (this.findComp(
                                                    "Label",
                                                    a,
                                                ).string = l.CanRevive
                                                    ? "本局可免费续玩一次，增加60秒"
                                                    : "本局续玩已用完，可免费重新挑战"),
                                                (this.findComp(
                                                    "BtnYes/ActionLabel",
                                                    a,
                                                ).string = l.CanRevive
                                                    ? "免费续玩"
                                                    : "重新挑战"));
                                        }),
                                        (i.onClose = function () {
                                            l.Pause = !1;
                                        }),
                                        (i.onBtnCloseClick = (function () {
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
                                                                                .processing
                                                                        ) {
                                                                            e.next = 2;
                                                                            break;
                                                                        }
                                                                        return e.abrupt(
                                                                            "return",
                                                                        );
                                                                    case 2:
                                                                        return (
                                                                            (this.processing =
                                                                                !0),
                                                                            (e.next = 5),
                                                                            p.Inst.fadeIn()
                                                                        );
                                                                    case 5:
                                                                        (this.close(),
                                                                            l.quitGame(),
                                                                            this.open(
                                                                                v.Main,
                                                                            ),
                                                                            p.Inst.fadeOut());
                                                                    case 9:
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
                                        (i.onBtnYesClick = (function () {
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
                                                                                .processing
                                                                        ) {
                                                                            e.next = 2;
                                                                            break;
                                                                        }
                                                                        return e.abrupt(
                                                                            "return",
                                                                        );
                                                                    case 2:
                                                                        if (
                                                                            ((this.processing =
                                                                                !0),
                                                                            !l.tryRevive())
                                                                        ) {
                                                                            e.next = 8;
                                                                            break;
                                                                        }
                                                                        (this.close(),
                                                                            u.emit(
                                                                                f.Revive,
                                                                            ),
                                                                            (e.next = 13));
                                                                        break;
                                                                    case 8:
                                                                        return (
                                                                            (e.next = 10),
                                                                            p.Inst.fadeIn()
                                                                        );
                                                                    case 10:
                                                                        (l.startGame(),
                                                                            this.close(),
                                                                            p.Inst.fadeOut());
                                                                    case 13:
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
                                        s
                                    );
                                })(c)),
                            ) || g),
                    ) || g,
                );
                s._RF.pop();
            },
        };
    },
);
