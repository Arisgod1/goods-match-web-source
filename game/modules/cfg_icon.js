// Editable data: data/tables/cfg_icon.json. No duplicate defaults here.
System.register("chunks:///_virtual/cfg_icon.ts", ["cc"], function (exportModule) {
    let cclegacy;
    return {
        setters: [function (cc) { cclegacy = cc.cclegacy; }],
        execute: function () {
            cclegacy._RF.push({}, "032eaaUB05H+6HPhAqADpKu", "cfg_icon", undefined);
            const names = ["cfg_icon_tp","cfg_icon_gs","cfg_icon_ls"];
            for (const name of names) exportModule(name, globalThis.WebGameTables[name]);
            cclegacy._RF.pop();
        }
    };
});
