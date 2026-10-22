// Editable data: data/tables/CfgLuckySpin.json. No duplicate defaults here.
System.register("chunks:///_virtual/CfgLuckySpin.ts", ["cc"], function (exportModule) {
    let cclegacy;
    return {
        setters: [function (cc) { cclegacy = cc.cclegacy; }],
        execute: function () {
            cclegacy._RF.push({}, "ed4fct49zJCbqBkrPRyAKAX", "CfgLuckySpin", undefined);
            const names = ["CfgLuckySpin"];
            for (const name of names) exportModule(name, globalThis.WebGameTables[name]);
            cclegacy._RF.pop();
        }
    };
});
