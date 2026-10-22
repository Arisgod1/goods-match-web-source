// Editable data: data/tables/cfg_level.json. No duplicate defaults here.
System.register("chunks:///_virtual/cfg_level.ts", ["cc"], function (exportModule) {
    let cclegacy;
    return {
        setters: [function (cc) { cclegacy = cc.cclegacy; }],
        execute: function () {
            cclegacy._RF.push({}, "589e3TdcuNGWZgjWDycD6B7", "cfg_level", undefined);
            const names = ["cfg_level_gs","cfg_level_tp","cfg_level_ls"];
            for (const name of names) exportModule(name, globalThis.WebGameTables[name]);
            cclegacy._RF.pop();
        }
    };
});
