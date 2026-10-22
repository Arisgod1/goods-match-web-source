System.register(
    "chunks:///_virtual/CustomSprite.ts",
    ["cc", "./Debug.ts"],
    function () {
        var e, t, r, i, s;
        return {
            setters: [
                function (s) {
                    ((e = s.cclegacy),
                        (t = s.Sprite),
                        (r = s.assetManager),
                        (i = s.SpriteFrame));
                },
                function (e) {
                    s = e.Debug;
                },
            ],
            execute: function () {
                e._RF.push(
                    {},
                    "13bb9TshclOBrsQ2KwyYVbo",
                    "CustomSprite",
                    void 0,
                );
                var a = "Sprite";
                ((t.prototype.loadSpriteFrame = function (e, t) {
                    var n = this,
                        o = r.getBundle(e);
                    if (o) {
                        var u = t + "/spriteFrame",
                            c = o.get(u, i);
                        if (c) {
                            if (!this.isValid) return;
                            this.spriteFrame = c;
                        } else
                            o.load(u, i, function (e, t) {
                                if (e) s.Error(a, e.message);
                                else {
                                    if (!n.isValid) return;
                                    n.spriteFrame = t;
                                }
                            });
                    } else s.Warn(a, "bundle " + e + " not exist or loaded");
                }),
                    e._RF.pop());
            },
        };
    },
);
