System.register(
    "chunks:///_virtual/TimeMgr.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc"],
    function (t) {
        var e, n, r, i, s, o, c;
        return {
            setters: [
                function (t) {
                    ((e = t.inheritsLoose),
                        (n = t.asyncToGenerator),
                        (r = t.regeneratorRuntime));
                },
                function (t) {
                    ((i = t.cclegacy),
                        (s = t._decorator),
                        (o = t.director),
                        (c = t.Component));
                },
            ],
            execute: function () {
                var a, u;
                i._RF.push({}, "9a36f5tW91Gnp7BUUKYgzAc", "TimeMgr", void 0);
                var p = s.ccclass;
                (s.property,
                    t(
                        "TimeMgr",
                        p("Manager/TimeMgr")(
                            (((u = (function (t) {
                                function i() {
                                    return t.apply(this, arguments) || this;
                                }
                                return (
                                    e(i, t),
                                    (i.prototype.onLoad = function () {
                                        ((i._inst = this),
                                            o.addPersistRootNode(this.node));
                                    }),
                                    (i.delay = (function () {
                                        var t = n(
                                            r().mark(function t(e) {
                                                var n = this;
                                                return r().wrap(function (t) {
                                                    for (;;)
                                                        switch (
                                                            (t.prev = t.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    void 0 ===
                                                                        e &&
                                                                        (e = 0),
                                                                    t.abrupt(
                                                                        "return",
                                                                        new Promise(
                                                                            function (
                                                                                t,
                                                                                r,
                                                                            ) {
                                                                                n._inst.scheduleOnce(
                                                                                    function () {
                                                                                        t();
                                                                                    },
                                                                                    e,
                                                                                );
                                                                            },
                                                                        ),
                                                                    )
                                                                );
                                                            case 2:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                }, t);
                                            }),
                                        );
                                        return function (e) {
                                            return t.apply(this, arguments);
                                        };
                                    })()),
                                    (i.setTimer = function (t, e, n) {
                                        var r = this;
                                        void 0 === n && (n = 1);
                                        var i = 0,
                                            s = this.nextId++;
                                        s > 1e4 && (s = 0);
                                        var o = function () {
                                            (t && t(),
                                                ++i >= n && r.clearTimer(s));
                                        };
                                        return (
                                            this._timerMap.set(s, o),
                                            this._inst.schedule(o, e, n),
                                            s
                                        );
                                    }),
                                    (i.clearTimer = function (t) {
                                        this._timerMap.has(t) &&
                                            (this._inst.unschedule(
                                                this._timerMap.get(t),
                                            ),
                                            this._timerMap.delete(t));
                                    }),
                                    i
                                );
                            })(c))._inst = null),
                            (u._timerMap = new Map()),
                            (u.nextId = 0),
                            (a = u)),
                        ) || a,
                    ));
                i._RF.pop();
            },
        };
    },
);
