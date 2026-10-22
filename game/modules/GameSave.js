System.register(
    "chunks:///_virtual/GameSave.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./Global.ts",
        "./EventMgr.ts",
        "./EventType.ts",
    ],
    function (e) {
        var t, r, n, s, a, i, u;
        return {
            setters: [
                function (e) {
                    ((t = e.createClass), (r = e.extends));
                },
                function (e) {
                    ((n = e.cclegacy), (s = e.sys));
                },
                function (e) {
                    a = e.Global;
                },
                function (e) {
                    i = e.EventMgr;
                },
                function (e) {
                    u = e.EventType;
                },
            ],
            execute: function () {
                function l(e) {
                    return { ok: !0, value: e };
                }
                function o(e) {
                    return { ok: !1, reason: e };
                }
                (e({ failure: o, success: l }),
                    n._RF.push(
                        {},
                        "e8276cE4S9Hg4dt+KdeZgcN",
                        "GameSave",
                        void 0,
                    ));
                var c = e(
                    "GameSave",
                    (function () {
                        function e() {}
                        return (
                            (e.defaults = function () {
                                return {
                                    version: 1,
                                    items: r({}, a.Default_Item),
                                    levels: [0, 0, 0],
                                    unlockedModes: [0],
                                    dailyClaimDate: null,
                                    lastPassReward: 0,
                                    settings: {
                                        sfxEnabled: !0,
                                        bgmEnabled: !0,
                                        vibrateEnabled: !0,
                                    },
                                };
                            }),
                            (e.valid = function (e) {
                                var t = function (e) {
                                        return (
                                            Number.isSafeInteger(e) && e >= 0
                                        );
                                    },
                                    r = null == e ? void 0 : e.dailyClaimDate,
                                    n =
                                        null === r ||
                                        ("string" == typeof r &&
                                            /^\d{4}-\d{2}-\d{2}$/.test(r) &&
                                            Number.isFinite(
                                                Date.parse(r + "T00:00:00Z"),
                                            ) &&
                                            new Date(r + "T00:00:00Z")
                                                .toISOString()
                                                .slice(0, 10) === r);
                                return (
                                    !!e &&
                                    1 === e.version &&
                                    !!e.items &&
                                    [0, 1, 2, 3, 4].every(function (r) {
                                        return t(e.items[r]);
                                    }) &&
                                    e.items[0] <= 9999999 &&
                                    Array.isArray(e.levels) &&
                                    3 === e.levels.length &&
                                    e.levels.every(t) &&
                                    Array.isArray(e.unlockedModes) &&
                                    e.unlockedModes.includes(0) &&
                                    e.unlockedModes.every(function (e) {
                                        return (
                                            Number.isInteger(e) &&
                                            e >= 0 &&
                                            e < 3
                                        );
                                    }) &&
                                    new Set(e.unlockedModes).size ===
                                        e.unlockedModes.length &&
                                    n &&
                                    t(e.lastPassReward) &&
                                    e.lastPassReward % 5 == 0 &&
                                    e.lastPassReward <=
                                        e.levels.reduce(function (e, t) {
                                            return e + t;
                                        }, 0) &&
                                    !!e.settings &&
                                    [
                                        "sfxEnabled",
                                        "bgmEnabled",
                                        "vibrateEnabled",
                                    ].every(function (t) {
                                        return (
                                            "boolean" == typeof e.settings[t]
                                        );
                                    })
                                );
                            }),
                            (e.init = function () {
                                if (this.state) return l();
                                var e, t;
                                try {
                                    e = s.localStorage.getItem(this.Key);
                                } catch (e) {
                                    return o("storage_error");
                                }
                                if (null === e) return this.createNew();
                                try {
                                    t = JSON.parse(e);
                                } catch (e) {
                                    return o("corrupt_save");
                                }
                                return this.valid(t)
                                    ? ((this.state = t), l())
                                    : o("corrupt_save");
                            }),
                            (e.createNew = function () {
                                var e = this.defaults();
                                try {
                                    s.localStorage.setItem(
                                        this.Key,
                                        JSON.stringify(e),
                                    );
                                } catch (e) {
                                    return o("storage_error");
                                }
                                return ((this.state = e), l());
                            }),
                            (e.reset = function () {
                                var e = this;
                                return this.transact(function (t) {
                                    return (
                                        Object.assign(t, e.defaults()),
                                        l()
                                    );
                                });
                            }),
                            (e.transact = function (e) {
                                var t = this.Data;
                                if (!t) return o("storage_error");
                                var r = e(t);
                                if (!r.ok) return r;
                                if (!this.valid(t)) return o("invalid_config");
                                try {
                                    s.localStorage.setItem(
                                        this.Key,
                                        JSON.stringify(t),
                                    );
                                } catch (e) {
                                    return o("storage_error");
                                }
                                var n = this.state;
                                ((this.state = t),
                                    t.items[0] !== n.items[0] &&
                                        i.emit(u.UpdateCoin, t.items[0], !1));
                                for (var a = 1; a <= 4; a++)
                                    t.items[a] !== n.items[a] &&
                                        i.emit(
                                            u.UpdateSkillCnt,
                                            a - 1,
                                            t.items[a],
                                        );
                                return (
                                    JSON.stringify(t.unlockedModes) !==
                                        JSON.stringify(n.unlockedModes) &&
                                        i.emit(u.ModeUnlocked),
                                    r
                                );
                            }),
                            t(e, null, [
                                {
                                    key: "Data",
                                    get: function () {
                                        return this.state
                                            ? JSON.parse(
                                                  JSON.stringify(this.state),
                                              )
                                            : null;
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                );
                ((c.Key = "hgxcds_game_v1"), (c.state = null), n._RF.pop());
            },
        };
    },
);
