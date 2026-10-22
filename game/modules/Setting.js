System.register(
    "chunks:///_virtual/Setting.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameSave.ts"],
    function (n) {
        var t, e, u, a;
        return {
            setters: [
                function (n) {
                    t = n.createClass;
                },
                function (n) {
                    e = n.cclegacy;
                },
                function (n) {
                    ((u = n.GameSave), (a = n.success));
                },
            ],
            execute: function () {
                e._RF.push({}, "0e05aoaPd5CY4kLpLQPu/rr", "Setting", void 0);
                n(
                    "Setting",
                    (function () {
                        function n() {}
                        return (
                            (n.set = function (n, t) {
                                return u.transact(function (e) {
                                    return ((e.settings[n] = t), a());
                                });
                            }),
                            t(n, null, [
                                {
                                    key: "VibrateEnabled",
                                    get: function () {
                                        var n, t;
                                        return (
                                            null ==
                                                (n =
                                                    null == (t = u.Data)
                                                        ? void 0
                                                        : t.settings
                                                              .vibrateEnabled) ||
                                            n
                                        );
                                    },
                                },
                                {
                                    key: "SfxEnabled",
                                    get: function () {
                                        var n, t;
                                        return (
                                            null ==
                                                (n =
                                                    null == (t = u.Data)
                                                        ? void 0
                                                        : t.settings
                                                              .sfxEnabled) || n
                                        );
                                    },
                                },
                                {
                                    key: "BgmEnabled",
                                    get: function () {
                                        var n, t;
                                        return (
                                            null ==
                                                (n =
                                                    null == (t = u.Data)
                                                        ? void 0
                                                        : t.settings
                                                              .bgmEnabled) || n
                                        );
                                    },
                                },
                            ]),
                            n
                        );
                    })(),
                );
                e._RF.pop();
            },
        };
    },
);
