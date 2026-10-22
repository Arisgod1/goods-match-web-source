System.register("chunks:///_virtual/CustomNode.ts", ["cc"], function () {
    var t, e, n;
    return {
        setters: [
            function (o) {
                ((t = o.cclegacy), (e = o.Node), (n = o.UITransform));
            },
        ],
        execute: function () {
            (t._RF.push({}, "459b6g6Dx1Jl6l5jtUn6El1", "CustomNode", void 0),
                Object.defineProperty(e.prototype, "uiTrans", {
                    get: function () {
                        return this.getComponent(n);
                    },
                }),
                t._RF.pop());
        },
    };
});
