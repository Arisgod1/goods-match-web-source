System.register(
    "chunks:///_virtual/EventMgr.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc"],
    function (n) {
        var t, e, o, i, r;
        return {
            setters: [
                function (n) {
                    t = n.inheritsLoose;
                },
                function (n) {
                    ((e = n.cclegacy),
                        (o = n._decorator),
                        (i = n.director),
                        (r = n.Component));
                },
            ],
            execute: function () {
                var c, s;
                e._RF.push({}, "9a7eeGxAlpJtL+cEC8eYEST", "EventMgr", void 0);
                var u = o.ccclass;
                (o.property,
                    n(
                        "EventMgr",
                        u("Manager/EventMgr")(
                            (((s = (function (n) {
                                function e() {
                                    return n.apply(this, arguments) || this;
                                }
                                return (
                                    t(e, n),
                                    (e.prototype.onLoad = function () {
                                        ((e._node = this.node),
                                            i.addPersistRootNode(this.node));
                                    }),
                                    (e.on = function (n, t, e, o) {
                                        this._node.on(n, t, e, o);
                                    }),
                                    (e.once = function (n, t, e, o) {
                                        this._node.once(n, t, e, o);
                                    }),
                                    (e.emit = function (n, t, e, o, i, r) {
                                        this._node.emit(n, t, e, o, i, r);
                                    }),
                                    (e.off = function (n, t, e, o) {
                                        this._node.off(n, t, e, o);
                                    }),
                                    (e.offAll = function (n) {
                                        this._node.targetOff(n);
                                    }),
                                    (e.has = function (n, t, e) {
                                        return this._node.hasEventListener(
                                            n,
                                            t,
                                            e,
                                        );
                                    }),
                                    e
                                );
                            })(r))._node = void 0),
                            (c = s)),
                        ) || c,
                    ));
                e._RF.pop();
            },
        };
    },
);
