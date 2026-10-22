System.register(
    "chunks:///_virtual/RecoveryMgr.ts",
    ["cc", "./EventMgr.ts", "./EventType.ts", "./UI.ts", "./GameSave.ts"],
    function (e) {
        var n, t, c, r, i;
        return {
            setters: [
                function (e) {
                    n = e.cclegacy;
                },
                function (e) {
                    t = e.EventMgr;
                },
                function (e) {
                    c = e.EventType;
                },
                function (e) {
                    r = e.UI;
                },
                function (e) {
                    i = e.success;
                },
            ],
            execute: function () {
                n._RF.push(
                    {},
                    "78b3bfzHvVJpo8cicf+bJeK",
                    "RecoveryMgr",
                    void 0,
                );
                e(
                    "RecoveryMgr",
                    (function () {
                        function e() {}
                        return (
                            (e.message = function (e) {
                                var n;
                                return null !=
                                    (n = {
                                        storage_error: "无法保存进度，请重试。",
                                        corrupt_save:
                                            "存档无法读取，可重试或新建存档。",
                                        insufficient_coins:
                                            "星星币不足，消除商品或通关可获得。",
                                        invalid_config:
                                            "当前配置异常，请返回后重试。",
                                        unavailable: "当前无法执行此操作。",
                                    }[e])
                                    ? n
                                    : "操作未完成，请重试。";
                            }),
                            (e.show = function (e) {
                                t.emit(c.OpenUI, r.Recovery, e);
                            }),
                            (e.retry = function (e, n, t) {
                                (void 0 === t && (t = "无法保存进度，请重试。"),
                                    this.show({
                                        title: "操作未完成",
                                        message: t,
                                        actions: [
                                            {
                                                label: "重试保存",
                                                run: e,
                                                onSuccess: n,
                                            },
                                            {
                                                label: "返回",
                                                run: function () {
                                                    return i();
                                                },
                                            },
                                        ],
                                    }));
                            }),
                            e
                        );
                    })(),
                );
                n._RF.pop();
            },
        };
    },
);
