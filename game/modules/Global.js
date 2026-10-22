// Shared parameters come from one editable input, loaded before Cocos starts.
// Level_Time remains round-local mutable state assigned by GameMgr from level data.
System.register(
  "chunks:///_virtual/Global.ts",
  ["cc"],
  function (exportModule) {
    let cclegacy;
    return {
      setters: [
        function (cc) {
          cclegacy = cc.cclegacy;
        },
      ],
      execute: function () {
        cclegacy._RF.push({}, "8b9a7NpOe9NkL6FuWN5ugvn", "Global", undefined);
        class Global {}
        Object.assign(Global, globalThis.WebGameConfig.gameplay);
        // Isolate the live inventory defaults from the configuration document.
        Global.Default_Item = { ...Global.Default_Item };
        Global.Level_Time = 0;
        exportModule("Global", Global);
        cclegacy._RF.pop();
      },
    };
  },
);
