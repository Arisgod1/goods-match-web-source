System.register(
    "chunks:///_virtual/LabelTick.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc"],
    function (e) {
        var i, t, r, u, n, s, l, a, c;
        return {
            setters: [
                function (e) {
                    ((i = e.applyDecoratedDescriptor),
                        (t = e.inheritsLoose),
                        (r = e.initializerDefineProperty),
                        (u = e.assertThisInitialized));
                },
                function (e) {
                    ((n = e.cclegacy),
                        (s = e._decorator),
                        (l = e.Label),
                        (a = e.CCInteger),
                        (c = e.Component));
                },
            ],
            execute: function () {
                var h, o, b, f, p, m, d, N;
                n._RF.push({}, "51142RfrX9DBphTxuZVxIcR", "LabelTick", void 0);
                var x = s.ccclass,
                    g = s.property,
                    v = s.requireComponent;
                e(
                    "LabelTick",
                    ((h = x("UIExtend/LabelTick")),
                    (o = v(l)),
                    (b = g(a)),
                    h(
                        (f =
                            o(
                                ((m = i(
                                    (p = (function (e) {
                                        function i() {
                                            for (
                                                var i,
                                                    t = arguments.length,
                                                    n = new Array(t),
                                                    s = 0;
                                                s < t;
                                                s++
                                            )
                                                n[s] = arguments[s];
                                            return (
                                                (i =
                                                    e.call.apply(
                                                        e,
                                                        [this].concat(n),
                                                    ) || this),
                                                r(i, "prefix", m, u(i)),
                                                r(i, "suffix", d, u(i)),
                                                r(i, "decimalPlaces", N, u(i)),
                                                (i.label = null),
                                                (i.curNumber = 0),
                                                (i.intervalPerUpdate = 0),
                                                (i.finalNumber = 0),
                                                i
                                            );
                                        }
                                        t(i, e);
                                        var n = i.prototype;
                                        return (
                                            (n.onLoad = function () {
                                                this.label =
                                                    this.getComponent(l);
                                            }),
                                            (n.onEnable = function () {}),
                                            (n.onDisable = function () {
                                                this.unscheduleAllCallbacks();
                                            }),
                                            (n.init = function (e) {
                                                ((this.curNumber = e),
                                                    (this.label.string =
                                                        "" +
                                                        this.prefix +
                                                        this.curNumber.toFixed(
                                                            this.decimalPlaces,
                                                        ) +
                                                        this.suffix));
                                            }),
                                            (n.tickLabel = function (e, i) {
                                                (void 0 === i && (i = 0.5),
                                                    this.curNumber === e
                                                        ? ((this.curNumber = e),
                                                          (this.finalNumber =
                                                              e),
                                                          (this.label.string =
                                                              "" +
                                                              this.prefix +
                                                              this.finalNumber.toFixed(
                                                                  this
                                                                      .decimalPlaces,
                                                              ) +
                                                              this.suffix))
                                                        : ((this.finalNumber =
                                                              e),
                                                          (this.intervalPerUpdate =
                                                              (e -
                                                                  this
                                                                      .curNumber) /
                                                              (33 * i)),
                                                          this.unschedule(
                                                              this
                                                                  .updateForNumber,
                                                          ),
                                                          this.schedule(
                                                              this
                                                                  .updateForNumber,
                                                              0.03,
                                                          ),
                                                          (this.label.string =
                                                              "" +
                                                              this.prefix +
                                                              this.curNumber.toFixed(
                                                                  this
                                                                      .decimalPlaces,
                                                              ) +
                                                              this.suffix)));
                                            }),
                                            (n.updateForNumber = function (e) {
                                                ((this.curNumber +=
                                                    this.intervalPerUpdate),
                                                    ((this.intervalPerUpdate >
                                                        0 &&
                                                        this.curNumber >
                                                            this.finalNumber) ||
                                                        (this
                                                            .intervalPerUpdate <
                                                            0 &&
                                                            this.curNumber <
                                                                this
                                                                    .finalNumber)) &&
                                                        ((this.curNumber =
                                                            this.finalNumber),
                                                        this.unschedule(
                                                            this
                                                                .updateForNumber,
                                                        )),
                                                    (this.label.string =
                                                        "" +
                                                        this.prefix +
                                                        this.curNumber.toFixed(
                                                            this.decimalPlaces,
                                                        ) +
                                                        this.suffix));
                                            }),
                                            (n.stop = function () {
                                                (this.unschedule(
                                                    this.updateForNumber,
                                                ),
                                                    (this.curNumber = null),
                                                    (this.finalNumber = null));
                                            }),
                                            i
                                        );
                                    })(c)).prototype,
                                    "prefix",
                                    [g],
                                    {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return "";
                                        },
                                    },
                                )),
                                (d = i(p.prototype, "suffix", [g], {
                                    configurable: !0,
                                    enumerable: !0,
                                    writable: !0,
                                    initializer: function () {
                                        return "";
                                    },
                                })),
                                (N = i(p.prototype, "decimalPlaces", [b], {
                                    configurable: !0,
                                    enumerable: !0,
                                    writable: !0,
                                    initializer: function () {
                                        return 0;
                                    },
                                })),
                                (f = p)),
                            ) || f),
                    ) || f),
                );
                n._RF.pop();
            },
        };
    },
);
