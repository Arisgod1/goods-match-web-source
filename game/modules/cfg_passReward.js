// Editable data: data/tables/cfg_passReward.json. No duplicate defaults here.
System.register("chunks:///_virtual/cfg_passReward.ts", ["cc"], function (exportModule) {
    let cclegacy;
    return {
        setters: [function (cc) { cclegacy = cc.cclegacy; }],
        execute: function () {
            cclegacy._RF.push({}, "d2576gg+39CgpNSYy24NLn8", "cfg_passReward", undefined);
            const names = ["CfgPassReward"];
            for (const name of names) exportModule(name, globalThis.WebGameTables[name]);
            cclegacy._RF.pop();
        }
    };
});
