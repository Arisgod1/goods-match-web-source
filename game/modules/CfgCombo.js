// Editable data: data/tables/CfgCombo.json. No duplicate defaults here.
System.register("chunks:///_virtual/CfgCombo.ts", ["cc"], function (exportModule) {
    let cclegacy;
    return {
        setters: [function (cc) { cclegacy = cc.cclegacy; }],
        execute: function () {
            cclegacy._RF.push({}, "060b37UrIZGjLWVUacodUnI", "CfgCombo", undefined);
            const names = ["CfgCombo"];
            for (const name of names) exportModule(name, globalThis.WebGameTables[name]);
            cclegacy._RF.pop();
        }
    };
});
