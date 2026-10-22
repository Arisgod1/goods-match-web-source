System.register(
    "chunks:///_virtual/UILoginReward.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./UIBase.ts",
        "./UI.ts",
        "./RewardMgr.ts",
        "./RecoveryMgr.ts",
        "./GameSave.ts",
    ],
    function (n) {
        var e, t, o, r, i, s, a, c, l, u;
        return {
            setters: [
                function (n) {
                    e = n.inheritsLoose;
                },
                function (n) {
                    ((t = n.cclegacy),
                        (o = n._decorator),
                        (r = n.Widget),
                        (i = n.Button));
                },
                function (n) {
                    s = n.UIBase;
                },
                function (n) {
                    a = n.UI;
                },
                function (n) {
                    c = n.RewardMgr;
                },
                function (n) {
                    l = n.RecoveryMgr;
                },
                function (n) {
                    u = n.failure;
                },
            ],
            execute: function () {
                var f;
                t._RF.push(
                    {},
                    "097caW3VFlD54SnGMMx5aKh",
                    "UILoginReward",
                    void 0,
                );
                var g = o.ccclass,
                    p = o.requireComponent;
                n(
                    "UILoginReward",
                    g("UI/UILoginReward")(
                        (f =
                            p(r)(
                                (f = (function (n) {
                                    function t() {
                                        for (
                                            var e,
                                                t = arguments.length,
                                                o = new Array(t),
                                                r = 0;
                                            r < t;
                                            r++
                                        )
                                            o[r] = arguments[r];
                                        return (
                                            ((e =
                                                n.call.apply(
                                                    n,
                                                    [this].concat(o),
                                                ) || this).processing = !1),
                                            e
                                        );
                                    }
                                    e(t, n);
                                    var o = t.prototype;
                                    return (
                                        (o.onOpen = function () {
                                            this.findComp(
                                                "BtnGetAll",
                                                i,
                                            ).interactable = c.canClaimDaily();
                                        }),
                                        (o.onBtnCloseClick = function () {
                                            this.processing || this.close();
                                        }),
                                        (o.onBtnGetAllClick = function () {
                                            var n = this;
                                            if (!this.processing) {
                                                this.processing = !0;
                                                var e = function () {
                                                        return n.isValid
                                                            ? c.claimDaily()
                                                            : u("unavailable");
                                                    },
                                                    t = function (e) {
                                                        (n.close(),
                                                            n.open(
                                                                a.GetReward,
                                                                e,
                                                            ));
                                                    },
                                                    o = e();
                                                o.ok
                                                    ? t(o.value)
                                                    : ((this.processing = !1),
                                                      "storage_error" ===
                                                      o.reason
                                                          ? l.retry(e, t)
                                                          : (this.close(),
                                                            this.open(
                                                                a.Toast,
                                                                l.message(
                                                                    o.reason,
                                                                ),
                                                            )));
                                            }
                                        }),
                                        t
                                    );
                                })(s)),
                            ) || f),
                    ) || f,
                );
                t._RF.pop();
            },
        };
    },
);
