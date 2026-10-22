System.register("chunks:///_virtual/Bundle.ts", ["cc"], function (e) {
    var n;
    return {
        setters: [
            function (e) {
                n = e.cclegacy;
            },
        ],
        execute: function () {
            n._RF.push({}, "105baVpUGlOC7EYBCfoZ7kt", "Bundle", void 0);
            e(
                "Bundle",
                (function (e) {
                    return (
                        (e.Resources = "resources"),
                        (e.UI = "ui"),
                        (e.Game = "game"),
                        (e.Level = "level"),
                        (e.Font = "font"),
                        (e.Audio = "audio"),
                        (e.Icon = "icon"),
                        e
                    );
                })({}),
            );
            n._RF.pop();
        },
    };
});
