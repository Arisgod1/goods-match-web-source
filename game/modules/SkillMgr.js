System.register(
    "chunks:///_virtual/SkillMgr.ts",
    ["cc", "./CfgItem.ts", "./ItemMgr.ts", "./EventMgr.ts", "./EventType.ts"],
    function (t) {
        var n, i, e, u, l;
        return {
            setters: [
                function (t) {
                    n = t.cclegacy;
                },
                function (t) {
                    i = t.CfgItem;
                },
                function (t) {
                    e = t.ItemMgr;
                },
                function (t) {
                    u = t.EventMgr;
                },
                function (t) {
                    l = t.EventType;
                },
            ],
            execute: function () {
                n._RF.push({}, "504d35+dRRDg7MeOuS5p6nZ", "SkillMgr", void 0);
                t(
                    "SkillMgr",
                    (function () {
                        function t() {}
                        return (
                            (t.getSkillId = function (t) {
                                var n, e;
                                return null !=
                                    (n =
                                        null ==
                                        (e = i.find(function (n) {
                                            return n.skillType === t;
                                        }))
                                            ? void 0
                                            : e.id)
                                    ? n
                                    : -1;
                            }),
                            (t.skillCnt = function (t) {
                                return e.getCnt(this.getSkillId(t));
                            }),
                            (t.hasSkill = function (t) {
                                return this.skillCnt(t) > 0;
                            }),
                            (t.animateAdded = function (t) {
                                u.emit(l.AddSkill, t);
                            }),
                            t
                        );
                    })(),
                );
                n._RF.pop();
            },
        };
    },
);
