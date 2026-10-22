System.register("chunks:///_virtual/TimeUtil.ts", ["cc"], function (e) {
    var t;
    return {
        setters: [
            function (e) {
                t = e.cclegacy;
            },
        ],
        execute: function () {
            t._RF.push({}, "07102ahwgBFAZu9HS4Vb7oI", "TimeUtil", void 0);
            e(
                "TimeUtil",
                (function () {
                    function e() {}
                    return (
                        (e.getCurrTimeStamp = function () {
                            return Date.now();
                        }),
                        (e.getCurrTimeDate = function () {
                            return new Date(this.getCurrTimeStamp());
                        }),
                        (e.getCurWeekDay = function () {
                            var e = this.getCurrTimeDate().getDay();
                            return 0 == e ? 7 : e;
                        }),
                        (e.isSameDay = function (e, t) {
                            var r = new Date(e),
                                n = new Date(t);
                            return (
                                r.getFullYear() === n.getFullYear() &&
                                r.getMonth() === n.getMonth() &&
                                r.getDate() === n.getDate()
                            );
                        }),
                        (e.isSameWeek = function (e) {
                            for (
                                var t = this.getCurrTimeStamp(),
                                    r = this.getCurWeekDay(),
                                    n = new Date(e).toLocaleDateString(),
                                    a = 1;
                                a <= 7;
                                a++
                            )
                                if (
                                    n ==
                                    new Date(
                                        t + 24 * (a - r) * 3600 * 1e3,
                                    ).toLocaleDateString()
                                )
                                    return !0;
                            return !1;
                        }),
                        (e.getAssignTimestamp = function (e) {
                            return (
                                (e = e.replace(/-/g, "/")),
                                new Date(e).getTime()
                            );
                        }),
                        (e.formatTime_HHMMSS = function (e) {
                            var t = e / 1e3,
                                r = (
                                    Array(2).join("0") + Math.floor(t / 3600)
                                ).slice(-2),
                                n = (
                                    Array(2).join("0") +
                                    Math.floor((t % 3600) / 60)
                                ).slice(-2),
                                a = (
                                    Array(2).join("0") +
                                    (Math.floor(t) % 60)
                                ).slice(-2);
                            return "00" == r
                                ? n + ":" + a
                                : r + ":" + n + ":" + a;
                        }),
                        (e.formatTime_DDHHMMSS = function (e) {
                            var t = e / 1e3,
                                r = t % 60,
                                n = (t = Math.floor(t / 60)) % 60,
                                a = (t = Math.floor(t / 60)) % 24,
                                i = ((t = Math.floor(t / 24)), "");
                            return (
                                t > 0
                                    ? ((i = t + "天"),
                                      a > 0 && (i += a + "小时"))
                                    : (a > 0 && (i += a + "小时"),
                                      n > 0
                                          ? (i += n + "分")
                                          : a > 0 && (i += "零"),
                                      r > 0 && (i += Math.floor(r) + "秒")),
                                i
                            );
                        }),
                        e
                    );
                })(),
            );
            t._RF.pop();
        },
    };
});
