System.register(
    "chunks:///_virtual/UIGetSkill.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./GameMgr.ts",
        "./UIBase.ts",
        "./CfgSkillInfo.ts",
        "./ResMgr.ts",
        "./Bundle.ts",
    ],
    function (t) {
        var i, n, e, s, r, l, o, c, a, u, f, p;
        return {
            setters: [
                function (t) {
                    i = t.inheritsLoose;
                },
                function (t) {
                    ((n = t.cclegacy),
                        (e = t._decorator),
                        (s = t.Widget),
                        (r = t.Label),
                        (l = t.Sprite),
                        (o = t.Button));
                },
                function (t) {
                    c = t.GameMgr;
                },
                function (t) {
                    a = t.UIBase;
                },
                function (t) {
                    u = t.CfgSkillInfo;
                },
                function (t) {
                    f = t.ResMgr;
                },
                function (t) {
                    p = t.Bundle;
                },
            ],
            execute: function () {
                var h;
                n._RF.push({}, "333753Gd1FCyY4QcMBJbrLh", "UIGetSkill", void 0);
                var g = e.ccclass,
                    k = e.requireComponent;
                t(
                    "UIGetSkill",
                    g("UI/UIGetSkill")(
                        (h =
                            k(s)(
                                (h = (function (t) {
                                    function n() {
                                        for (
                                            var i,
                                                n = arguments.length,
                                                e = new Array(n),
                                                s = 0;
                                            s < n;
                                            s++
                                        )
                                            e[s] = arguments[s];
                                        return (
                                            ((i =
                                                t.call.apply(
                                                    t,
                                                    [this].concat(e),
                                                ) || this).skill = null),
                                            (i.processing = !1),
                                            i
                                        );
                                    }
                                    i(n, t);
                                    var e = n.prototype;
                                    return (
                                        (e.onOpen = function (t) {
                                            ((c.Pause = !0), (this.skill = t));
                                            var i = u[this.skill];
                                            ((this.findComp(
                                                "LbTitle",
                                                r,
                                            ).string = i.name),
                                                (this.findComp(
                                                    "Icon",
                                                    l,
                                                ).spriteFrame =
                                                    f.getSpriteFrame(
                                                        p.Icon,
                                                        i.icon,
                                                    )),
                                                this.updateState());
                                        }),
                                        (e.updateState = function () {
                                            var t = c.canClaimSkill(this.skill);
                                            this.findComp(
                                                "BtnGet",
                                                o,
                                            ).interactable = t;
                                            var i = t
                                                ? "每局可免费补领1个"
                                                : "本局补领已用完";
                                            this.findComp("LbDesc", r).string =
                                                u[this.skill].desc + "\n" + i;
                                        }),
                                        (e.onClose = function () {
                                            c.Pause = !1;
                                        }),
                                        (e.onBtnGetClick = function () {
                                            var t = this;
                                            if (!this.processing) {
                                                this.processing = !0;
                                                var i = c.claimSkill(
                                                    this.skill,
                                                );
                                                i.ok
                                                    ? this.close()
                                                    : ((this.processing = !1),
                                                      this.updateState(),
                                                      "storage_error" ===
                                                          i.reason &&
                                                          c.recover(
                                                              function () {
                                                                  return c.claimSkill(
                                                                      t.skill,
                                                                  );
                                                              },
                                                              function () {
                                                                  return t.close();
                                                              },
                                                          ));
                                            }
                                        }),
                                        n
                                    );
                                })(a)),
                            ) || h),
                    ) || h,
                );
                n._RF.pop();
            },
        };
    },
);
