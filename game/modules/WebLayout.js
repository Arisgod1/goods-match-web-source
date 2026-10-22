// Runs when the home UI opens, after prefab instantiation and before rendering.
// Keep Widget alignment responsive; change margins rather than overriding positions.
System.register(
  "chunks:///_virtual/WebLayout.js",
  ["cc"],
  function (exportModule) {
    let Widget, UITransform;
    return {
      setters: [
        function (cc) {
          Widget = cc.Widget;
          UITransform = cc.UITransform;
        },
      ],
      execute: function () {
        exportModule("applyHomeLayout", function applyHomeLayout(home) {
          const node = home.getChildByName("BtnSetting");
          if (!node) throw new Error("UIMain/BtnSetting is missing");
          const widget = node.getComponent(Widget);
          const transform = node.getComponent(UITransform);
          if (!widget || !transform)
            throw new Error("Settings button components are missing");
          const button = globalThis.WebGameConfig.home.settingsButton;
          transform.setContentSize(button.width, button.height);
          widget.horizontalCenter = button.horizontalCenter;
          widget.top = button.top;
          widget.updateAlignment();
        });
      },
    };
  },
);
