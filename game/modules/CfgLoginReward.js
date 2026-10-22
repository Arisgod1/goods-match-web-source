// Editable data: data/tables/CfgLoginReward.json. No duplicate defaults here.
System.register("chunks:///_virtual/CfgLoginReward.ts", ["cc"], function (exportModule) {
    let cclegacy;
    return {
        setters: [function (cc) { cclegacy = cc.cclegacy; }],
        execute: function () {
            cclegacy._RF.push({}, "a7a37hutLVCuY7vo6dP1uSM", "CfgLoginReward", undefined);
            const names = ["CfgLoginReward"];
            for (const name of names) exportModule(name, globalThis.WebGameTables[name]);
            cclegacy._RF.pop();
        }
    };
});
