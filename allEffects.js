function ws_turn(t, e, o) {
    var i = jQuery,
        n = i(this),
        r = (i("li", o), i(".ws_list", o)),
        a = i("<div>").addClass("ws_effect ws_turn").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            perspective: 500
        }).appendTo(o);
    this.go = function(s, d) {
        var p = o.height(),
            l = o.width(),
            f = {
                left: ["0% 50%", {
                    rotateY: 90,
                    translate: [0, 0, .1]
                }, {
                    left: -l
                }],
                right: ["100% 50%", {
                    rotateY: -90,
                    translate: [0, 0, .1]
                }, {
                    left: l
                }],
                up: ["50% 0%", {
                    rotateX: -90,
                    translate: [0, 0, .1]
                }, {
                    top: -p
                }],
                down: ["50% 100%", {
                    rotateX: 90,
                    translate: [0, 0, .1]
                }, {
                    top: p
                }]
            }[t.direction || ["left", "right", "down", "up"][Math.floor(4 * Math.random())]],
            u = i("<div>").css({
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                transformOrigin: f[0],
                transformStyle: "preserve-3d",
                outline: "1px solid transparent",
                zIndex: 5
            }).append(i(e.get(s)).clone()),
            h = i("<div>").css({
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                background: "#000",
                zIndex: 4
            }).append(i(e.get(d)).clone());
        a.css({
            perspectiveOrigin: f[0]
        }), t.responsive < 3 && (u.find("img").css("width", "100%"), h.find("img").css("width", "100%")), h.appendTo(a), u.appendTo(a), r.stop(!0, !0).hide().css({
            left: -s + "00%"
        });
        var c = f[2],
            w = {
                top: 0,
                left: 0
            },
            g = {
                opacity: 1
            },
            v = {
                opacity: .2
            };
        t.support.transform && (c = f[1], w = {
            rotateX: 0,
            rotateY: 0,
            translate: [0, 0, 0]
        }), wowAnimate(u, c, w, t.duration, "easeInOutQuart", function() {
            n.trigger("effectEnd"), u.remove(), h.remove()
        }), wowAnimate(h.find("img"), g, v, t.duration, "easeInOutQuart")
    }
}
jQuery.extend(jQuery.easing, {
    easeInBack: function(t, e, a, r, o, i) {
        return void 0 == i && (i = 1.70158), r * (e /= o) * e * ((i + 1) * e - i) + a
    },
    easeOutBack: function(t, e, a, r, o, i) {
        return void 0 == i && (i = 1.70158), r * ((e = e / o - 1) * e * ((i + 1) * e + i) + 1) + a
    },
    easeInBackQ: function(t, e, a, r, o) {
        var i = (e /= o) * e;
        return a + r * i * (4 * e * i - 8 * i + 8 * e - 3)
    },
    easeOutBackQ: function(t, e, a, r, o) {
        var i = (e /= o) * e;
        return a + r * (4 * i * e * i - 12 * i * i + 16 * i * e - 13 * i + 6 * e)
    },
    easeInBackQ2: function(t, e, a, r, o) {
        var i = (e /= o) * e;
        return a + r * i * (1.5 * e * i - 2.5 * i + 5 * e - 3)
    },
    easeOutBackQ2: function(t, e, a, r, o) {
        var i = (e /= o) * e;
        return a + r * (1.5 * i * e * i - 5 * i * i + 10 * i * e - 12 * i + 6.5 * e)
    }
});

function ws_shift(t, e, s) {
    var i = jQuery,
        n = i(this),
        o = (s.find("li"), s.find(".ws_list")),
        d = {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden"
        },
        a = i("<div>").addClass("ws_effect ws_shift").css(d).appendTo(s),
        f = i("<div>").css(d).css({
            display: "none",
            zIndex: 4
        }).appendTo(a),
        l = i("<div>").css(d).css({
            display: "none",
            zIndex: 3
        }).appendTo(a);
    this.go = function(d, a, h) {
        var p = s.width(),
            r = s.height();
        f.append(i(e.get(d)).clone()), l.append(i(e.get(a)).clone()), t.responsive < 3 && (f.find("img").css("width", "100%"), l.find("img").css("width", "100%")), o.stop(!0, !0).hide().css({
            left: -d + "00%"
        });
        var c = {
            left: [{
                left: -p
            }, {
                left: 0
            }],
            right: [{
                left: p
            }, {
                left: 0
            }],
            down: [{
                top: r
            }, {
                top: 0
            }],
            up: [{
                top: -r
            }, {
                top: 0
            }]
        }[t.direction || ["left", "right", "down", "up"][Math.floor(4 * Math.random())]];
        t.support.transform && (c[0].left ? c[0] = {
            translate: [c[0].left, 0, 0]
        } : c[0] = {
            translate: [0, c[0].top, 0]
        }, c[1] = {
            translate: [0, 0, 0]
        }), f.show(), l.show(), wowAnimate(f, c[0], c[1], t.duration, "easeInOutCubic", function() {
            o.show(), f.hide().html(""), l.hide().html(""), n.trigger("effectEnd")
        }), wowAnimate(l, {
            scale: 1
        }, {
            scale: .5
        }, t.duration, "easeInOutCubic")
    }
}
jQuery.extend(jQuery.easing, {
    easeInOutCubic: function(t, e, s, i, n) {
        return (e /= n / 2) < 1 ? i / 2 * e * e * e + s : i / 2 * ((e -= 2) * e * e + 2) + s
    }
});

function ws_cube_over(t, e, a) {
    function i(t, e) {
        e = e || {}; {
            var a, i = 1,
                n = e.exclude || [],
                r = document.createElement("canvas"),
                o = r.getContext("2d");
            r.width = t.naturalWidth, r.height = t.naturalHeight
        }
        o.drawImage(t, 0, 0, t.naturalWidth, t.naturalHeight);
        try {
            a = o.getImageData(e.x ? e.x : 0, e.y ? e.y : 0, e.w ? e.w : t.width, e.h ? e.h : t.height).data
        } catch (s) {
            return console.log("error:unable to access image data: " + s), "#ccc"
        }
        for (var d = (e.w ? e.w : t.width * e.h ? e.h : t.height) || a.length, c = {}, h = "", g = [], u = {
                dominant: {
                    name: "",
                    count: 0
                }
            }, p = 0; d > p;) {
            if (g[0] = a[p], g[1] = a[p + 1], g[2] = a[p + 2], h = g.join(","), c[h] = h in c ? c[h] + 1 : 1, -1 === n.indexOf(["rgb(", h, ")"].join(""))) {
                var l = c[h];
                l > u.dominant.count && (u.dominant.name = h, u.dominant.count = l)
            }
            p += 4 * i
        }
        return ["rgb(", u.dominant.name, ")"].join("")
    }
    var n = jQuery,
        r = n(this),
        o = /WOW Slider/g.test(navigator.userAgent),
        s = n(".ws_list", a),
        d = t.perspective || /MSIE|Trident/g.test(navigator.userAgent) ? 1e3 : 2e3,
        c = {
            position: "absolute",
            backgroundSize: "cover",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden"
        },
        h = /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
        g = n("<div>").css(c).css({
            transformStyle: "preserve-3d",
            perspective: h && !o ? "none" : d,
            zIndex: 8
        });
    if (n("<div>").addClass("ws_effect ws_cube_over").css(c).append(g).appendTo(a), !t.support.transform && t.fallback) return new t.fallback(t, e, a);
    var u;
    this.go = function(p, l) {
        function f(e, a, i, n) {
            e.parent().css("perspective", d);
            e.width(), e.height();
            wowAnimate(e, {
                scale: 1,
                translate: [0, 0, h && !o ? i : 0]
            }, {
                scale: .85,
                translate: [0, 0, h && !o ? i : 0]
            }, .4 * t.duration, "easeInOutBack", function() {
                wowAnimate(e, {
                    scale: .85,
                    translate: [0, 0, h && !o ? i : 0]
                }, {
                    scale: 1,
                    translate: [0, 0, h && !o ? i : 0]
                }, .4 * t.duration, t.duration - .8 * t.duration, "easeInOutBack", n)
            }), wowAnimate(a.front.item, {
                rotateY: 0,
                rotateX: 0
            }, {
                rotateY: a.front.rotateY,
                rotateX: a.front.rotateX
            }, t.duration, "easeInOutBack"), wowAnimate(a.back.item, {
                rotateY: a.back.rotateY,
                rotateX: a.back.rotateX
            }, {
                rotateY: 0,
                rotateX: 0
            }, t.duration, "easeInOutBack"), wowAnimate(a.side.item, {
                rotateY: a.side.rotateY,
                rotateX: a.side.rotateX
            }, {
                rotateY: -a.side.rotateY,
                rotateX: -a.side.rotateX
            }, t.duration, "easeInOutBack")
        }
        var w = n(e[l]);
        if (w = {
                width: w.width(),
                height: w.height(),
                marginTop: parseFloat(w.css("marginTop")),
                marginLeft: parseFloat(w.css("marginLeft"))
            }, t.support.transform && t.support.perspective) {
            u && u.stop();
            var m = a.width(),
                v = a.height(),
                b = {
                    left: [m / 2, 0, 0, 180, 0, -180],
                    right: [m / 2, 0, 0, -180, 0, 180],
                    down: [v / 2, -v / 2, 180, 0, -180, 0],
                    up: [v / 2, v / 2, -180, 0, 180, 0]
                }[t.direction || ["left", "right", "down", "up"][Math.floor(4 * Math.random())]],
                k = n("<img>").css(w),
                x = n("<img>").css(w).attr("src", e.get(p).src),
                I = n("<div>").css({
                    overflow: "hidden",
                    transformOrigin: "50% 50% -" + b[0] + "px"
                }).css(c).append(k).appendTo(g),
                O = n("<div>").css({
                    overflow: "hidden",
                    transformOrigin: "50% 50% -" + b[0] + "px"
                }).css(c).append(x).appendTo(g),
                X = n('<div class="ws_cube_side">').css({
                    transformOrigin: "50% 50% -" + b[0] + "px",
                    background: t.staticColor ? "" : i(x[0], {
                        exclude: ["0,0,0", "255,255,255"]
                    })
                }).css(c).appendTo(g);
            k.on("load", function() {
                s.hide()
            }), k.attr("src", e.get(l).src).load(), g.parent().show(), u = new f(g, {
                front: {
                    item: I,
                    rotateY: b[5],
                    rotateX: b[4]
                },
                back: {
                    item: O,
                    rotateY: b[3],
                    rotateX: b[2]
                },
                side: {
                    item: X,
                    rotateY: b[3] / 2,
                    rotateX: b[2] / 2
                }
            }, -b[0], function() {
                r.trigger("effectEnd"), g.empty().parent().hide(), u = 0
            })
        } else {
            g.css({
                position: "absolute",
                display: "none",
                zIndex: 2,
                width: "100%",
                height: "100%"
            }), g.stop(1, 1);
            var Y = !!((p - l + 1) % e.length) ^ t.revers ? "left" : "right",
                I = n("<div>").css({
                    position: "absolute",
                    left: "0%",
                    right: "auto",
                    top: 0,
                    width: "100%",
                    height: "100%"
                }).css(Y, 0).append(n(e[l]).clone().css({
                    width: 100 * w.width / a.width() + "%",
                    height: 100 * w.height / a.height() + "%",
                    marginLeft: 100 * w.marginLeft / a.width() + "%"
                })).appendTo(g),
                y = n("<div>").css({
                    position: "absolute",
                    left: "100%",
                    right: "auto",
                    top: 0,
                    width: "0%",
                    height: "100%"
                }).append(n(e[p]).clone().css({
                    width: 100 * w.width / a.width() + "%",
                    height: 100 * w.height / a.height() + "%",
                    marginLeft: 100 * w.marginLeft / a.width() + "%"
                })).appendTo(g);
            g.css({
                left: "auto",
                right: "auto",
                top: 0
            }).css(Y, 0).show(), g.show(), s.hide(), y.animate({
                width: "100%",
                left: 0
            }, t.duration, "easeInOutExpo", function() {
                n(this).remove()
            }), I.animate({
                width: 0
            }, t.duration, "easeInOutExpo", function() {
                r.trigger("effectEnd"), g.empty().hide()
            })
        }
    }
}
jQuery.extend(jQuery.easing, {
    easeInOutBack: function(t, e, a, i, n, r) {
        return void 0 == r && (r = 1.70158), (e /= n / 2) < 1 ? i / 2 * e * e * (((r *= 1.525) + 1) * e - r) + a : i / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + a
    }
});

function ws_louvers(t, e, a) {
    function n(a) {
        for (var n = {}, i = e.get(a), r = t.width / h, o = t.height, d = 0; h > d; d++) {
            var a = d % h,
                f = Math.floor(d / h);
            n[d] = s(i, {
                x: a * r,
                y: f * o,
                w: r,
                h: o
            })
        }
        return n
    }

    function i(t, e, a, n, i) {
        for (var r in e) "function" != typeof u[r] && (e[r].topEdge.css({
            width: n,
            height: t,
            background: a[r],
            transform: "rotateX(90deg) translate3d(0,-" + t / 2 + "px," + t / 2 + "px)"
        }), e[r].bottomEdge.css({
            width: n,
            height: t,
            background: a[r],
            transform: "rotateX(90deg) translate3d(0,-" + t / 2 + "px," + (-i + t / 2) + "px)"
        }), e[r].leftEdge.css({
            width: t,
            height: i,
            background: a[r],
            transform: "rotateY(90deg) translate3d(" + t / 2 + "px,0,-" + t / 2 + "px)"
        }), e[r].rightEdge.css({
            width: t,
            height: i,
            background: a[r],
            transform: "rotateY(90deg) translate3d(" + t / 2 + "px,0," + (n - t / 2) + "px)"
        }))
    }

    function r(t, e) {
        var a = 0;
        for (var n in t) "function" != typeof t[n] && function(t, n) {
            wowAnimate(function(e) {
                var a, i, r, o = "",
                    s = {};
                .5 >= e ? (a = d.easing.easeInBack(1, 2 * e, 0, 1, 1, 1).toFixed(3), i = d.easing.easeInBackQ(1, 2 * e, 0, 1, 1, 1).toFixed(3), r = d.easing.easeInBackQ2(1, 2 * e, 0, 1, 1, 1).toFixed(3), n[t].back.css("backfaceVisibility", "hidden")) : (a = d.easing.easeOutBack(1, 2 * (e - .5), 0, 1, 1, 1).toFixed(3), i = d.easing.easeOutBackQ(1, 2 * (e - .5), 0, 1, 1, 1).toFixed(3), r = d.easing.easeOutBackQ2(1, 2 * (e - .5), 0, 1, 1, 1).toFixed(3), n[t].back.css("backfaceVisibility", "visible"));
                for (var f in n[t].animate[.5 >= e ? "half" : "end"]) {
                    var h = n[t].animate[.5 >= e ? "begin" : "half"][f] || 0,
                        c = n[t].animate[.5 >= e ? "half" : "end"][f] || 0;
                    "object" != typeof c && (c = "scale" === f || "rotateX" === f || "rotateY" === f ? h + (c - h) * i : "left" === f || "top" === f ? h + (c - h) * r : h + (c - h) * a), "rotateX" === f || "rotateY" === f || "rotateZ" === f ? o += f + "(" + c + "deg) " : "scale" === f ? o += f + "(" + c + ") " : "translate3d" === f ? o += f + "(" + (h[0] + (c[0] - h[0]) * a).toFixed(3) + "px," + (h[1] + (c[1] - h[1]) * a).toFixed(3) + "px," + (h[2] + (c[2] - h[2]) * a).toFixed(3) + "px) " : s[f] = c
                }
                n[t].wrapper.css({
                    transform: "translate3d(" + (s.left ? s.left : 0).toFixed(3) + "px," + (s.top ? s.top : 0).toFixed(3) + "px,0)"
                }), delete s.left, delete s.top, o && (s.transform = o), n[t].part.css(s)
            }, 0, 1, n[t].animate.duration, n[t].animate.delay, function() {
                a++, a == n.length && e && e()
            })
        }(n, t)
    }

    function o(e, n, o, s) {
        var d = a.width(),
            f = a.height(),
            c = d / h,
            l = f,
            p = .4 * t.duration > 1e3 ? 1e3 : .4 * t.duration,
            g = .6 * t.duration,
            u = [0, 0];
        i(m, e, v[n], c, l), w.css({
            transformOrigin: d / 2 + "px " + f / 2 + "px 0",
            width: d,
            height: f
        });
        for (var b in e)
            if ("function" != typeof e[b]) {
                var k = y[b].delay * p;
                u[1] <= k && (u[0] = b, u[1] = k), e[b].part[0].ws_delay = [k, 0]
            }
        e[u[0]].part[0].ws_delay[1] = 1;
        for (var b in e)
            if ("function" != typeof e[b]) {
                {
                    var _ = e[b];
                    Math.floor(b / h)
                }
                _.animate = {
                    delay: _.part[0].ws_delay[0],
                    duration: g,
                    begin: {
                        left: 0,
                        top: 0,
                        width: c,
                        height: l,
                        scale: 1,
                        rotateX: 0,
                        rotateY: 0,
                        translate3d: [0, 0, x ? m : 0]
                    },
                    half: {
                        left: y[b].halfLeft * c,
                        top: y[b].halfTop * l,
                        scale: y[b].halfScale,
                        rotateX: y[b].rotateX / 2,
                        rotateY: y[b].rotateY / 2,
                        translate3d: [0, 0, (x ? 1 : .5) * m]
                    },
                    end: {
                        left: 0,
                        top: 0,
                        scale: 1,
                        rotateX: y[b].rotateX,
                        rotateY: y[b].rotateY,
                        translate3d: [0, 0, m]
                    }
                }, _.front.find("img").css(o), _.back.css("backfaceVisibility", "hidden").find("img").css(o), _.part.css({
                    width: _.animate.begin.width,
                    height: _.animate.begin.height,
                    left: _.animate.begin.left,
                    top: _.animate.begin.top
                })
            }
        r(e, s)
    }

    function s(t, e) {
        e = e || {}; {
            var a, n = 1,
                i = e.exclude || [],
                r = document.createElement("canvas"),
                o = r.getContext("2d");
            r.width = t.naturalWidth, r.height = t.naturalHeight
        }
        o.drawImage(t, 0, 0, t.naturalWidth, t.naturalHeight);
        try {
            a = o.getImageData(e.x ? e.x : 0, e.y ? e.y : 0, e.w ? e.w : t.width, e.h ? e.h : t.height).data
        } catch (s) {
            return console.log("error:unable to access image data: " + s), "#ccc"
        }
        for (var d = (e.w ? e.w : t.width * e.h ? e.h : t.height) || a.length, f = {}, h = "", c = [], l = {
                dominant: {
                    name: "",
                    count: 0
                }
            }, p = 0; d > p;) {
            if (c[0] = a[p], c[1] = a[p + 1], c[2] = a[p + 2], h = c.join(","), f[h] = h in f ? f[h] + 1 : 1, -1 === i.indexOf(["rgb(", h, ")"].join(""))) {
                var g = f[h];
                g > l.dominant.count && (l.dominant.name = h, l.dominant.count = g)
            }
            p += 4 * n
        }
        return ["rgb(", l.dominant.name, ")"].join("")
    }
    var d = jQuery,
        f = d(this),
        h = t.cols || 10,
        c = 2.5,
        l = 2,
        p = t.perspective || 2e3,
        g = a.find(".ws_list"),
        u = [],
        m = 5,
        v = {},
        w = d("<div>").addClass("ws_effect ws_louvers").appendTo(a),
        b = t.support.transform && t.support.transition && t.support.perspective,
        x = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/WOW Slider/g.test(navigator.userAgent),
        y = [];
    w.css({
        position: "absolute",
        top: 0,
        left: 0,
        width: a.width(),
        height: a.height(),
        transform: "translate3d(0,0,0)",
        transformOrigin: t.width / 2 + "px " + t.height / 2 + "px 0",
        perspective: p + 2e3
    }).hide();
    for (var k = 0; h > k; k++) {
        var _ = k % h,
            M = Math.floor(k / h),
            F = d("<div>").css({
                position: "absolute",
                left: 100 * _ / h + "%",
                top: 0,
                outline: "1px solid transparent",
                transformStyle: x ? "flat" : "preserve-3d",
                overflow: b ? "visible" : "hidden"
            }).appendTo(w),
            Y = d("<div>").css({
                transform: "scale(1) rotateX(0) rotateY(0) translate3d(0,0,0)",
                outline: "1px solid transparent",
                transformStyle: "preserve-3d"
            }).appendTo(F),
            B = d("<div>").addClass("ws_front_image").appendTo(Y),
            T = b ? d("<div>").addClass("ws_back_image").appendTo(Y) : 0;
        B.css({
            position: "absolute",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backfaceVisibility: "hidden",
            transform: "translate3d(0,0,0)"
        }).append(d("<img>").css({
            left: 100 * -_ + "%",
            top: 100 * -M + "%",
            position: "absolute",
            outline: "1px solid transparent"
        })), b && T.css({
            position: "absolute",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg) translate3d(0,0," + m + "px)"
        }).append(d("<img>").css({
            left: 100 * -_ + "%",
            top: 100 * -M + "%",
            position: "absolute",
            outline: "1px solid transparent"
        }));
        var E = {
            position: "absolute",
            outline: "1px solid transparent"
        };
        u[k] = {
            part: Y,
            front: B,
            back: T,
            wrapper: F,
            leftEdge: b ? d("<div>").addClass("ws_left_edge").css(E).appendTo(Y) : 0,
            rightEdge: b ? d("<div>").addClass("ws_right_edge").css(E).appendTo(Y) : 0,
            topEdge: b ? d("<div>").addClass("ws_top_edge").css(E).appendTo(Y) : 0,
            bottomEdge: b ? d("<div>").addClass("ws_bottom_edge").css(E).appendTo(Y) : 0
        }
    }
    var Q;
    this.go = function(i, r) {
        function s(t, e) {
            return Math.random() * (e - t + 1) + t
        }
        if (Q) return r;
        w.show();
        var p = d(e.get(r));
        if (p = {
                width: p.width(),
                height: p.height(),
                marginTop: parseFloat(p.css("marginTop")),
                marginLeft: parseFloat(p.css("marginLeft"))
            }, y = function() {
                var t = [0, 1],
                    e = [1.2, .8],
                    a = [.2, 0, -.2],
                    n = [180, -180];
                t = t[Math.floor(Math.random() * t.length)], e = e[Math.floor(Math.random() * e.length)], a = a[Math.floor(Math.random() * a.length)], n = n[Math.floor(Math.random() * n.length)];
                for (var i = h, r = [], o = t ? 0 : i; t ? i >= o : o >= 0; t ? o++ : o--) r.push({
                    zIndex: o - (t ? i : 0),
                    rotateY: n,
                    delay: o / i,
                    halfScale: e,
                    halfLeft: a
                });
                return r
            }(), b) {
            u[0].front.find("img").on("load", function() {
                g.hide()
            });
            for (var m in u) "function" != typeof u[m] && (u[m].front.find("img").attr("src", e.get(r).src), u[m].back.find("img").attr("src", e.get(i).src));
            v[r] || (v[r] = n(r)), Q = new o(u, r, p, function() {
                g.show(), f.trigger("effectEnd"), w.hide();
                for (var t in u) "function" != typeof u[t] && u[t].part.css({
                    transition: "",
                    transform: "rotateX(0) rotateY(0) translate3d(0,0,0)"
                });
                Q = 0
            })
        } else {
            Q = !0;
            var x = a.width(),
                k = a.height(),
                _ = x / h,
                M = k;
            w.css({
                width: x,
                height: k
            });
            var F = 0;
            for (var m in u) {
                var Y = m % h,
                    B = Math.floor(m / h);
                u[m].front.find("img").attr("src", e.get(i).src).css(p);
                var T = t.duration * (1 - Math.abs((l * c - Y * B) / (2 * h))),
                    E = s(-1, 1) > 0 ? 1 : -1;
                u[m].wrapper.css({
                    width: _,
                    height: M
                }), u[m].part.css({
                    position: "absolute",
                    top: 0,
                    left: E * _,
                    opacity: 0,
                    width: _,
                    height: M
                }).animate({
                    left: 0,
                    opacity: 1
                }, T, function() {
                    F++, F == h && (g.stop(1, 1), Q = !1, f.trigger("effectEnd"))
                })
            }
        }
    }
}
jQuery.extend(jQuery.easing, {
    easeInBack: function(t, e, a, n, i, r) {
        return void 0 == r && (r = 1.70158), n * (e /= i) * e * ((r + 1) * e - r) + a
    },
    easeOutBack: function(t, e, a, n, i, r) {
        return void 0 == r && (r = 1.70158), n * ((e = e / i - 1) * e * ((r + 1) * e + r) + 1) + a
    },
    easeInBackQ: function(t, e, a, n, i) {
        var r = (e /= i) * e;
        return a + n * r * (4 * e * r - 8 * r + 8 * e - 3)
    },
    easeOutBackQ: function(t, e, a, n, i) {
        var r = (e /= i) * e;
        return a + n * (4 * r * e * r - 12 * r * r + 16 * r * e - 13 * r + 6 * e)
    },
    easeInBackQ2: function(t, e, a, n, i) {
        var r = (e /= i) * e;
        return a + n * r * (1.5 * e * r - 2.5 * r + 5 * e - 3)
    },
    easeOutBackQ2: function(t, e, a, n, i) {
        var r = (e /= i) * e;
        return a + n * (1.5 * r * e * r - 5 * r * r + 10 * r * e - 12 * r + 6.5 * e)
    }
});

function ws_lines(d, l, m) {
    var e = jQuery;
    var f = e(this);
    var i = d.noCanvas || !document.createElement("canvas").getContext;
    var k = d.width,
        r = d.height;
    var g = e("<div>").css({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden"
    }).addClass("ws_effect ws_lines").appendTo(m);
    if (!i) {
        var b = e("<canvas>").css({
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
        }).appendTo(g);
        var o = b.get(0).getContext("2d")
    }
    var s = [
        ["rgb(187,187,187)", 0.1, 0.3],
        ["rgb(179,179,179)", 0.9, 0.8],
        ["rgb(182,182,182)", 0.68, 0.4],
        ["rgb(185,185,185)", 0.25, 0.4],
        ["rgb(204,204,204)", 0.11, 0.7],
        ["rgb(195,195,195)", 0.18, 0.1],
        ["rgb(198,198,198)", 0.4, 0.2],
        ["rgb(201,201,201)", 0.55, -0.04],
        ["rgb(211,211,211)", 0, 0.95],
        ["rgb(214,214,214)", 0.5, 0.8],
        ["rgb(217,217,217)", 0.9, 0.1]
    ];
    var a = [
        [0.5, 0.4, 0.3, 0.2, 0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5],
        [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
        [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5],
        [0.5, 0.45, 0.4, 0.35, 0.3, 0.25, 0.2, 0.15, 0.1, 0.05, 0],
        [0.7, 0.3, 0, 0.1, 0.5, 0.3, 0.4, 0.1, 0.6, 0.2, 0]
    ];
    var q = ["from-top", "from-bottom", "width-from-center", "height-from-center", "fill-half-fill-full"];
    var j = ["easeOutExpo", "easeOutCubic", "easeOutBackCubic", "easeOutBack"];
    var p = [45, -45, 0, 180, 90, -90];

    function n(h) {
        h.save();
        h.setTransform(1, 0, 0, 1, 0, 0);
        h.clearRect(0, 0, k, r);
        h.restore()
    }

    function c(G, D, I, w, C, y, z) {
        var u = k;
        var E = r;
        if (z == 45 || z == -45) {
            u = E = Math.sqrt(k * k + r * r)
        }
        if (z == 90 || z == -90) {
            u = r;
            E = k
        }
        var B = (u - k) / 2;
        var v = (E - r) / 2;
        n(G);
        for (var x = 0, A = I.length; x < A; x++) {
            var F = I[x] * (1 - D);
            var h = Math.max(0, Math.min(1, D - F));
            G.beginPath();
            G.fillStyle = s[x][0];
            if (w) {
                G.fillStyle = s[x][0].replace(/rgb/g, "rgba").replace(/\)/g, "," + Math.min(D + 0.1, 1) + ")")
            };
            var H = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            };
            switch (C) {
                case "from-top":
                    if (y && e.easing[y]) {
                        h = e.easing[y](1, h, 0, 1, 1, 1)
                    }
                    H.w = Math.ceil(0.5 + u / A);
                    H.h = E;
                    H.x = (A - x - 1) * u / A - B;
                    H.y = -1.5 * E * (1 - h) - v;
                    break;
                case "from-bottom":
                    if (y && e.easing[y]) {
                        h = e.easing[y](1, h, 0, 1, 1, 1)
                    }
                    H.w = Math.ceil(0.5 + u / A);
                    H.h = E;
                    H.x = (A - x - 1) * u / A - B;
                    H.y = 1.5 * E * (1 - h) - v;
                    break;
                case "width-from-center":
                    if (y && e.easing[y]) {
                        h = e.easing[y](1, h, 0, 1, 1, 1)
                    }
                    H.w = Math.ceil(0.5 + u / A) * h;
                    H.h = E;
                    H.x = (A - x - 1) * u / A + (1 - h) * u / A / 2 - B;
                    H.y = -v;
                    break;
                case "height-from-center":
                    if (y && e.easing[y]) {
                        h = e.easing[y](1, h, 0, 1, 1, 1)
                    }
                    H.w = Math.ceil(0.5 + u / A);
                    H.h = E * h;
                    H.x = (A - x - 1) * u / A - B;
                    H.y = (1 - h) * E / 2 - v;
                    break;
                case "fill-half-fill-full":
                    if (h < 0.5) {
                        if (y && e.easing[y]) {
                            h = e.easing[y](0.5, h, 0, 0.5, 0.5, 0.5)
                        }
                    }
                    H.w = Math.ceil(0.5 + u / A);
                    H.h = E * h;
                    H.x = (A - x - 1) * u / A - B;
                    H.y = (1 - h) * E / 2 - v;
                    break
            }
            G.fillRect(H.x, H.y, H.w, H.h)
        }
    }
    this.go = function(C, x) {
        if (i) {
            m.find(".ws_list").css("transform", "translate3d(0,0,0)").stop(true).animate({
                left: (C ? -C + "00%" : (/Safari/.test(navigator.userAgent) ? "0%" : 0))
            }, d.duration, "easeInOutExpo", function() {
                f.trigger("effectEnd")
            })
        } else {
            k = m.width();
            r = m.height();
            var w = a[Math.floor(Math.random() * (a.length))];
            var E = a[Math.floor(Math.random() * (a.length))];
            b.attr({
                width: k,
                height: r
            });
            var A = l.get(x);
            for (var y = 0, B = s.length; y < B; y++) {
                var v = Math.abs(s[y][1]),
                    h = Math.abs(s[y][2]);
                s[y][0] = t(A, {
                    x: v * k,
                    y: h * r,
                    w: 2,
                    h: 2
                }) || s[y][0]
            }
            var D = q[Math.floor(Math.random() * (q.length))];
            var z = j[Math.floor(Math.random() * (j.length))];
            var u = p[Math.floor(Math.random() * (p.length))];
            o.translate(k / 2, r / 2);
            o.rotate(u * Math.PI / 180);
            o.translate(-k / 2, -r / 2);
            wowAnimate(function(F) {
                c(o, F, w, true, D, z, u)
            }, 0, 1, d.duration / 2, function() {
                m.find(".ws_list").css({
                    left: (C ? -C + "00%" : (/Safari/.test(navigator.userAgent) ? "0%" : 0))
                });
                D = q[Math.floor(Math.random() * (q.length))];
                z = j[Math.floor(Math.random() * (j.length))];
                wowAnimate(function(F) {
                    c(o, 1 - F, E, false, D, z, u)
                }, 0, 1, d.duration / 2, d.duration * 0.15, function() {
                    n(o);
                    f.trigger("effectEnd")
                })
            })
        }
    };

    function t(D, u) {
        u = u || {};
        var F = 1,
            x = u.exclude || [],
            C;
        var z = document.createElement("canvas"),
            w = z.getContext("2d"),
            v = z.width = D.naturalWidth,
            J = z.height = D.naturalHeight;
        w.drawImage(D, 0, 0, D.naturalWidth, D.naturalHeight);
        try {
            C = w.getImageData(u.x ? u.x : 0, u.y ? u.y : 0, u.w ? u.w : D.width, u.h ? u.h : D.height)["data"]
        } catch (E) {
            return false
        }
        var y = (u.w ? u.w : D.width * u.h ? u.h : D.height) || C.length,
            A = {},
            H = "",
            G = [],
            h = {
                dominant: {
                    name: "",
                    count: 0
                }
            };
        var B = 0;
        while (B < y) {
            G[0] = C[B];
            G[1] = C[B + 1];
            G[2] = C[B + 2];
            H = G.join(",");
            if (H in A) {
                A[H] = A[H] + 1
            } else {
                A[H] = 1
            }
            if (x.indexOf(["rgb(", H, ")"].join("")) === -1) {
                var I = A[H];
                if (I > h.dominant.count) {
                    h.dominant.name = H;
                    h.dominant.count = I
                }
            }
            B += F * 4
        }
        return ["rgb(", h.dominant.name, ")"].join("")
    }
};
jQuery.extend(jQuery.easing, {
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeOutBackCubic: function(e, f, a, j, i, g) {
        var h = (f /= i) * f;
        return a + j * (-1.5 * h * f * h + 2 * h * h + 4 * h * f + -9 * h + 5.5 * f)
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    }
});

function ws_dribbles(t, e, a) {
    function n(t, e, a, n) {
        t.clearRect(0, 0, d, h);
        for (var i = 0, o = a.length; o > i; i++) {
            var c = 2 - a[i][3],
                s = a[i][2] * (1 - e),
                u = Math.max(0, Math.min(1, e * c - s));
            n && r.easing[n] && (u = r.easing[n](1, u, 0, 1, 1, 1));
            var g = d;
            1.8 >= d / h && d / h > .7 ? g *= 2 : .7 >= d / h && (g = 2 * h), t.beginPath(), t.arc((a[i][0] + (f[i][1] - a[i][0]) * u) * d, (a[i][1] + (f[i][2] - a[i][1]) * u) * h, f[i][3] * u * g, 0, 2 * Math.PI, !1), t.fillStyle = f[i][0], t.fill()
        }
    }

    function i(t, e) {
        e = e || {}; {
            var a, n = 1,
                i = e.exclude || [],
                r = document.createElement("canvas"),
                o = r.getContext("2d");
            r.width = t.naturalWidth, r.height = t.naturalHeight
        }
        o.drawImage(t, 0, 0, t.naturalWidth, t.naturalHeight);
        try {
            a = o.getImageData(e.x ? e.x : 0, e.y ? e.y : 0, e.w ? e.w : t.width, e.h ? e.h : t.height).data
        } catch (c) {
            return !1
        }
        for (var d = (e.w ? e.w : t.width * e.h ? e.h : t.height) || a.length, h = {}, s = "", u = [], g = {
                dominant: {
                    name: "",
                    count: 0
                }
            }, f = 0; d > f;) {
            if (u[0] = a[f], u[1] = a[f + 1], u[2] = a[f + 2], s = u.join(","), h[s] = s in h ? h[s] + 1 : 1, -1 === i.indexOf(["rgb(", s, ")"].join(""))) {
                var l = h[s];
                l > g.dominant.count && (g.dominant.name = s, g.dominant.count = l)
            }
            f += 4 * n
        }
        return ["rgb(", g.dominant.name, ")"].join("")
    }
    var r = jQuery,
        o = r(this),
        c = t.noCanvas || !document.createElement("canvas").getContext,
        d = t.width,
        h = t.height,
        s = r("<div>").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden"
        }).addClass("ws_effect ws_dribbles").appendTo(a);
    if (!c) var u = r("<canvas>").css({
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
        }).appendTo(s),
        g = u.get(0).getContext("2d");
    var f = [
            ["#bbbbbb", .1, .3, .18],
            ["#b3b3b3", .9, .8, .15],
            ["#b6b6b6", .68, .4, .2],
            ["#b9b9b9", .25, .4, .15],
            ["#cccccc", .11, .7, .15],
            ["#c3c3c3", .18, .1, .15],
            ["#c6c6c6", .4, .2, .15],
            ["#c9c9c9", .55, -.04, .18],
            ["#d3d3d3", 0, .95, .13],
            ["#d6d6d6", .5, .8, .22],
            ["#d9d9d9", .9, .1, .18],
            ["#eeeeee", .3, .9, .18],
            ["#e3e3e3", .93, .5, .14],
            ["#e6e6e6", .7, .9, .15]
        ],
        l = [
            [
                [.1, .3, 0, 1],
                [.9, .8, .15, .85],
                [.68, .4, 0, .9],
                [.25, .4, .21, .79],
                [.11, .7, .3, .7],
                [.18, .1, .45, .55],
                [.4, .2, 0, .75],
                [.55, -.04, .48, .52],
                [0, .95, .21, .79],
                [.5, .8, .1, .9],
                [.9, .1, .25, .75],
                [.3, .9, .18, .82],
                [.93, .5, .4, .6],
                [.7, .9, .13, .87]
            ],
            [
                [-.3, -.2, .06, 1],
                [-.1, -.3, .12, 1],
                [-.2, -.5, 0, 1],
                [-.1, -.3, .24, 1],
                [-.3, -.4, .4, 1],
                [-.5, -.1, .76, 1],
                [-.2, -.1, .62, 1],
                [-.3, -.3, .48, 1],
                [-.4, -.1, .05, 1],
                [-.5, -.2, .6, 1],
                [-.3, -.25, .75, 1],
                [-.1, -.4, .3, 1],
                [-.2, -.35, .95, 1],
                [-.15, -.25, .2, 1]
            ],
            [
                [1.3, 1.2, .06, 1],
                [1.1, 1.3, .12, 1],
                [1.2, 1.5, 0, 1],
                [1.1, 1.3, .24, 1],
                [1.3, 1.4, .4, 1],
                [1.5, 1.1, .76, 1],
                [1.2, 1.1, .62, 1],
                [1.3, 1.3, .48, 1],
                [1.4, 1.1, .05, 1],
                [1.5, 1.2, .6, 1],
                [1.3, 1.25, .75, 1],
                [1.1, 1.4, .3, 1],
                [1.2, 1.35, .95, 1],
                [1.15, 1.25, .2, 1]
            ],
            [
                [.1, 1.3, 0, 1],
                [.9, 1.34, .15, .85],
                [.68, 1.23, 0, .9],
                [.25, 1.5, .21, .79],
                [.11, 1.2, .3, .7],
                [.18, 1.4, .16, .84],
                [.4, 1.17, 0, .75],
                [.55, 1.2, 0, .52],
                [0, 1.5, .21, .79],
                [.5, 1.45, 0, .9],
                [.9, 1.34, .25, .75],
                [.3, 1.6, .18, .82],
                [.93, 1.2, .09, .91],
                [.7, 1.15, .13, .87]
            ],
            [
                [.1, -.3, 0, 1],
                [.9, -.34, .15, .85],
                [.68, -.23, 0, .9],
                [.25, -.5, .21, .79],
                [.11, -.2, .3, .7],
                [.18, -.4, .16, .84],
                [.4, -.17, 0, .75],
                [.55, -.2, 0, .52],
                [0, -.5, .21, .79],
                [.5, -.45, 0, .9],
                [.9, -.34, .25, .75],
                [.3, -.6, .18, .82],
                [.93, -.2, .09, .91],
                [.7, -.15, .13, .87]
            ],
            [
                [-.2, -.1, 0, 1],
                [1.3, 1.1, .15, .85],
                [.48, 1.4, 0, .9],
                [1.2, 1.6, .21, .79],
                [1.11, -.15, .3, .7],
                [.28, 1.3, .16, .84],
                [-.1, -.4, 0, .75],
                [.15, 1.3, 0, .52],
                [-.5, .85, .21, .79],
                [-.2, .7, 0, .9],
                [1.4, .2, .25, .75],
                [1.1, 1.5, .18, .82],
                [-.43, -.2, .09, .91],
                [.7, 1.5, .13, .87]
            ]
        ];
    this.go = function(r, s) {
        if (c) a.find(".ws_list").css("transform", "translate3d(0,0,0)").stop(!0).animate({
            left: r ? -r + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0
        }, t.duration, "easeInOutExpo", function() {
            o.trigger("effectEnd")
        });
        else {
            d = a.width(), h = a.height();
            var b = Math.floor(Math.random() * l.length),
                w = l[b],
                m = l[Math.floor(Math.random() * l.length)];
            u.attr({
                width: d,
                height: h
            });
            for (var v = e.get(0 == b ? s : r), x = 0, p = f.length; p > x; x++) {
                var M = Math.abs(f[x][1]),
                    y = Math.abs(f[x][2]);
                f[x][0] = i(v, {
                    x: M * d,
                    y: y * h,
                    w: 2,
                    h: 2
                }) || f[x][0]
            }
            wowAnimate(function(t) {
                n(g, t, w, "easeOutBackCubic")
            }, 0, 1, t.duration / 2, function() {
                a.find(".ws_list").css({
                    left: r ? -r + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0
                }), wowAnimate(function(t) {
                    n(g, 1 - t, m, "easeOutBackCubic")
                }, 0, 1, t.duration / 2, function() {
                    g.clearRect(0, 0, d, h), o.trigger("effectEnd")
                })
            })
        }
    }
}
jQuery.extend(jQuery.easing, {
    easeOutBackCubic: function(t, e, a, n, i) {
        var r = (e /= i) * e;
        return a + n * (-1.5 * r * e * r + 2 * r * r + 4 * r * e + -9 * r + 5.5 * e)
    }
});

function ws_carousel(t, e, n) {
    function i(n, i) {
        for (var a = 0; n > a; a++) {
            for (var r = i ? e.length - n + a : a; 0 > r;) r += n - e.length;
            for (; r > e.length - 1;) r -= n - e.length;
            I.push({
                item: c("<div>").append(c(e[r]).clone().css({
                    outline: "1px solid transparent"
                })).css({
                    position: "absolute",
                    overflow: "hidden",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).appendTo(x),
                id: r
            }), t.images && w.push(!t.images[r].noimage)
        }
    }

    function a() {
        var t = c(e[0]);
        t = {
            width: t.width(),
            height: t.height(),
            marginTop: parseFloat(t.css("marginTop")),
            marginLeft: parseFloat(t.css("marginLeft"))
        };
        for (var n in I) I[n].item && c(I[n].item).find("img").css(t)
    }

    function r(t) {
        t *= -1;
        var e = [];
        for (var n in I) {
            var i = v - n;
            e.push(i != t ? t - i : 0)
        }
        return e
    }

    function s(t, e, n, i) {
        wowAnimate(function(n) {
            u(t, e, n)
        }, 0, 1, n, i)
    }

    function o(t, e, n) {
        return t + (e - t) * n
    }

    function f(e, n) {
        e.css(t.support.transform ? {
            transform: "scale(" + n.scale + ") translate3d(" + n.offset + "%,0,0) rotateY(" + n.rotate + "deg)",
            zIndex: n.zIndex
        } : {
            left: 100 * (1 - n.scale) / 2 + .85 * n.offset + "%",
            top: 100 * (1 - n.scale) / 2 + "%",
            width: 100 * n.scale + "%"
        })
    }

    function u(t, e, n, i) {
        i || (n = c.easing.easeInOutQuart(1, n, 0, 1, 1, 1));
        for (var a in t) {
            var r = o(t[a], e[a], n) * m,
                s = l / 100,
                u = 0,
                d = t[a] * (t[a] > 0 ? -1 : 1),
                g = r > 0 ? -1 : 1;
            n > .5 && (d = e[a] * (e[a] > 0 ? -1 : 1)), 0 === t[a] && (s = o(h, l, n) / 100, u = o(0, g * p, n)), 0 === e[a] && (s = o(l, h, n) / 100, u = o(g * p, 0, n)), 0 !== e[a] && 0 !== t[a] && (u = g * p), f(I[a].item, {
                scale: s,
                offset: r,
                rotate: u,
                zIndex: d
            })
        }
    }
    var c = jQuery,
        d = c(this),
        g = c(".ws_list", n).css("opacity", 0),
        l = (/iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent), e.length, 70),
        h = 80,
        p = 60,
        m = 90,
        v = 2,
        w = [],
        x = c("<div>").addClass("ws_effect ws_carousel").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            perspective: 2e3
        }).appendTo(n),
        I = [];
    i(v, !0), i(e.length), i(v);
    var y = r(t.startSlide);
    s(y, y, 0), a(), c(window).on("load resize", a), this.go = function(n, i) {
        function o(e) {
            return e.find("img").attr("src", t.images[n].src)
        }
        if (a(), t.images && !w[n + v]) {
            var f = n + v;
            w[f] = !0, o(I[f].item), v > n && o(I[I.length - n].item), n + v >= e.length && o(I[n + v - e.length].item)
        }
        window.XMLHttpRequest ? (i == e.length - 1 && 0 == n && (n = i + 1), 0 == i && n == e.length - 1 && (n = -1), s(r(i), r(n), t.duration, function() {
            d.trigger("effectEnd")
        })) : g.stop(!0).animate({
            left: n ? -n + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0
        }, t.duration, "easeInOutExpo", function() {
            d.trigger("effectEnd")
        })
    }, this.step = function(t, e) {
        var n = t + (0 > e ? 1 : -1);
        0 > e && (e *= -1), u(r(t), r(n), e, !0)
    }
}
jQuery.extend(jQuery.easing, {
    easeInOutQuart: function(t, e, n, i, a) {
        return (e /= a / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
    }
});

function ws_parallax(t, s, e) {
    function a(t) {
        return Math.round(1e3 * t) / 1e3
    }
    var n = jQuery,
        r = n(this),
        o = t.parallax || .25,
        i = n("<div>").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden"
        }).addClass("ws_effect ws_parallax").appendTo(e),
        d = n("<div>").css({
            position: "absolute",
            left: 0,
            top: 0,
            overflow: "hidden",
            width: "100%",
            height: "100%",
            transform: "translate3d(0,0,0)"
        }).appendTo(i),
        f = d.clone().appendTo(i);
    this.go = function(l, p, c) {
        var h = n(s.get(p));
        h = {
            width: h.width(),
            height: h.height(),
            marginTop: h.css("marginTop"),
            marginLeft: h.css("marginLeft")
        }, c = c ? 1 : -1; {
            var g = n(s.get(p)).clone().css(h).appendTo(d),
                m = n(s.get(l)).clone().css(h).appendTo(f),
                w = e.width() || t.width;
            e.height() || t.height
        }
        wowAnimate(function(s) {
            s = n.easing.swing(s);
            var e = a(c * s * w),
                r = a(c * (-w + s * w)),
                i = a(-c * w * o * s),
                l = a(c * w * o * (1 - s));
            t.support.transform ? (d.css("transform", "translate3d(" + e + "px,0,0)"), g.css("transform", "translate3d(" + i + "px,0,0)"), f.css("transform", "translate3d(" + r + "px,0,0)"), m.css("transform", "translate3d(" + l + "px,0,0)")) : (d.css("left", e), g.css("margin-left", i), f.css("left", r), m.css("margin-left", l))
        }, 0, 1, t.duration, function() {
            i.hide(), g.remove(), m.remove(), r.trigger("effectEnd")
        })
    }
}

function ws_brick(t, e, a) {
    function r(a) {
        for (var r = {}, o = e.get(a), i = t.width / f, n = t.height / h, d = 0; f * h > d; d++) {
            var a = d % f,
                l = Math.floor(d / f);
            r[d] = s(o, {
                x: a * i,
                y: l * n,
                w: i,
                h: n
            })
        }
        return r
    }

    function o(t, e, a, r, o) {
        for (var i in e) e[i].topEdge.css({
            width: r,
            height: t,
            background: a[i],
            transform: "rotateX(90deg) translate3d(0,-" + t / 2 + "px," + t / 2 + "px)"
        }), e[i].bottomEdge.css({
            width: r,
            height: t,
            background: a[i],
            transform: "rotateX(90deg) translate3d(0,-" + t / 2 + "px," + (-o + t / 2) + "px)"
        }), e[i].leftEdge.css({
            width: t,
            height: o,
            background: a[i],
            transform: "rotateY(90deg) translate3d(" + t / 2 + "px,0,-" + t / 2 + "px)"
        }), e[i].rightEdge.css({
            width: t,
            height: o,
            background: a[i],
            transform: "rotateY(90deg) translate3d(" + t / 2 + "px,0," + (r - t / 2) + "px)"
        })
    }

    function i(t, e) {
        var a = 0;
        for (var r in t)(function(t, r) {
            wowAnimate(function(e) {
                var a, o, i, n = "",
                    s = {};
                .5 >= e ? (a = d.easing.easeInBack(1, 2 * e, 0, 1, 1, 1).toFixed(3), o = d.easing.easeInBackQ(1, 2 * e, 0, 1, 1, 1).toFixed(3), i = d.easing.easeInBackQ2(1, 2 * e, 0, 1, 1, 1).toFixed(3), r[t].back.css("backfaceVisibility", "hidden")) : (a = d.easing.easeOutBack(1, 2 * (e - .5), 0, 1, 1, 1).toFixed(3), o = d.easing.easeOutBackQ(1, 2 * (e - .5), 0, 1, 1, 1).toFixed(3), i = d.easing.easeOutBackQ2(1, 2 * (e - .5), 0, 1, 1, 1).toFixed(3), r[t].back.css("backfaceVisibility", "visible"));
                for (var l in r[t].animate[.5 >= e ? "half" : "end"]) {
                    var f = r[t].animate[.5 >= e ? "begin" : "half"][l] || 0,
                        h = r[t].animate[.5 >= e ? "half" : "end"][l] || 0;
                    "object" != typeof h && (h = "scale" === l || "rotateX" === l || "rotateY" === l ? f + (h - f) * o : "left" === l || "top" === l ? f + (h - f) * i : f + (h - f) * a), "rotateX" === l || "rotateY" === l || "rotateZ" === l ? n += l + "(" + h + "deg) " : "scale" === l ? n += l + "(" + h + ") " : "translate3d" === l ? n += l + "(" + (f[0] + (h[0] - f[0]) * a).toFixed(3) + "px," + (f[1] + (h[1] - f[1]) * a).toFixed(3) + "px," + (f[2] + (h[2] - f[2]) * a).toFixed(3) + "px) " : s[l] = h
                }
                r[t].wrapper.css({
                    transform: "translate3d(" + (s.left ? s.left : 0).toFixed(3) + "px," + (s.top ? s.top : 0).toFixed(3) + "px,0)"
                }), delete s.left, delete s.top, n && (s.transform = n), r[t].part.css(s)
            }, 0, 1, r[t].animate.duration, r[t].animate.delay, function() {
                a++, a == r.length && e && e()
            })
        })(r, t)
    }

    function n(e, r, n, s) {
        var d = a.width(),
            l = a.height(),
            c = d / f,
            p = l / h,
            g = .4 * t.duration > 1e3 ? 1e3 : .4 * t.duration,
            u = .6 * t.duration,
            m = [0, 0];
        o(v, e, x[r], c, p), w.css({
            transformOrigin: d / 2 + "px " + l / 2 + "px 0",
            width: d,
            height: l
        });
        for (var b in e) {
            var k = T[b].delay * g;
            m[1] <= k && (m[0] = b, m[1] = k), e[b].part[0].ws_delay = [k, 0]
        }
        e[m[0]].part[0].ws_delay[1] = 1;
        for (var b in e) {
            {
                var Y = e[b];
                Math.floor(b / f)
            }
            Y.animate = {
                delay: Y.part[0].ws_delay[0],
                duration: u,
                begin: {
                    left: 0,
                    top: 0,
                    width: c,
                    height: p,
                    scale: 1,
                    rotateX: 0,
                    rotateY: 0,
                    translate3d: [0, 0, y ? v : 0]
                },
                half: {
                    left: T[b].halfLeft * c,
                    top: T[b].halfTop * p,
                    scale: T[b].halfScale,
                    rotateX: T[b].rotateX / 2,
                    rotateY: T[b].rotateY / 2,
                    translate3d: [0, 0, (y ? 1 : .5) * v]
                },
                end: {
                    left: 0,
                    top: 0,
                    scale: 1,
                    rotateX: T[b].rotateX,
                    rotateY: T[b].rotateY,
                    translate3d: [0, 0, v]
                }
            }, Y.front.find("img").css(n), Y.back.css("backfaceVisibility", "hidden").find("img").css(n), Y.part.css({
                width: Y.animate.begin.width,
                height: Y.animate.begin.height,
                left: Y.animate.begin.left,
                top: Y.animate.begin.top
            })
        }
        i(e, s)
    }

    function s(t, e) {
        e = e || {}; {
            var a, r = 1,
                o = e.exclude || [],
                i = document.createElement("canvas"),
                n = i.getContext("2d");
            i.width = t.naturalWidth, i.height = t.naturalHeight
        }
        n.drawImage(t, 0, 0, t.naturalWidth, t.naturalHeight);
        try {
            a = n.getImageData(e.x ? e.x : 0, e.y ? e.y : 0, e.w ? e.w : t.width, e.h ? e.h : t.height).data
        } catch (s) {
            return console.log("error:unable to access image data: " + s), "#ccc"
        }
        for (var d = (e.w ? e.w : t.width * e.h ? e.h : t.height) || a.length, l = {}, f = "", h = [], c = {
                dominant: {
                    name: "",
                    count: 0
                }
            }, p = 0; d > p;) {
            if (h[0] = a[p], h[1] = a[p + 1], h[2] = a[p + 2], f = h.join(","), l[f] = f in l ? l[f] + 1 : 1, -1 === o.indexOf(["rgb(", f, ")"].join(""))) {
                var g = l[f];
                g > c.dominant.count && (c.dominant.name = f, c.dominant.count = g)
            }
            p += 4 * r
        }
        return ["rgb(", c.dominant.name, ")"].join("")
    }
    var d = jQuery,
        l = d(this),
        f = t.cols || 4,
        h = t.rows || 3,
        c = 2.5,
        p = 2,
        g = t.perspective || 2e3,
        u = a.find(".ws_list"),
        m = [],
        v = 30,
        x = {},
        w = d("<div>").addClass("ws_effect ws_brick").appendTo(a),
        b = t.support.transform && t.support.transition && t.support.perspective,
        y = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
        k = /Firefox/.test(navigator.userAgent),
        T = [{
            zIndex: 0,
            rotateX: 360,
            rotateZ: -360,
            rotateY: 180,
            halfScale: .5,
            halfLeft: .7,
            halfTop: .7,
            delay: .36
        }, {
            zIndex: 1,
            rotateX: -360,
            rotateZ: 360,
            rotateY: 180,
            halfScale: .5,
            halfLeft: .2,
            halfTop: .4,
            delay: .81
        }, {
            zIndex: 1,
            rotateX: 360,
            rotateZ: -360,
            rotateY: -180,
            halfScale: .5,
            halfLeft: -.2,
            halfTop: .4,
            delay: .45
        }, {
            zIndex: 0,
            rotateX: -360,
            rotateZ: 360,
            rotateY: -180,
            halfScale: .5,
            halfLeft: -.7,
            halfTop: .7,
            delay: .63
        }, {
            zIndex: 1,
            rotateX: -360,
            rotateZ: 360,
            rotateY: -180,
            halfScale: .5,
            halfLeft: .7,
            halfTop: 0,
            delay: .54
        }, {
            zIndex: 2,
            rotateX: 360,
            rotateZ: -360,
            rotateY: 180,
            halfScale: .5,
            halfLeft: .2,
            halfTop: 0,
            delay: .38
        }, {
            zIndex: 2,
            rotateX: 360,
            rotateZ: -360,
            rotateY: -180,
            halfScale: .5,
            halfLeft: -.2,
            halfTop: 0,
            delay: 0
        }, {
            zIndex: 1,
            rotateX: -360,
            rotateZ: 360,
            rotateY: 180,
            halfScale: .5,
            halfLeft: -.7,
            halfTop: 0,
            delay: .72
        }, {
            zIndex: 0,
            rotateX: -360,
            rotateZ: 360,
            rotateY: 180,
            halfScale: .5,
            halfLeft: .7,
            halfTop: -.7,
            delay: 1
        }, {
            zIndex: 1,
            rotateX: -360,
            rotateZ: 360,
            rotateY: -180,
            halfScale: .5,
            halfLeft: .2,
            halfTop: -.4,
            delay: .7
        }, {
            zIndex: 1,
            rotateX: 360,
            rotateZ: -360,
            rotateY: 180,
            halfScale: .5,
            halfLeft: -.2,
            halfTop: -.4,
            delay: .57
        }, {
            zIndex: 0,
            rotateX: 360,
            rotateZ: -360,
            rotateY: -180,
            halfScale: .5,
            halfLeft: -.7,
            halfTop: -.7,
            delay: .9
        }];
    w.css({
        position: "absolute",
        top: 0,
        left: 0,
        width: a.width(),
        height: a.height(),
        transform: "translate3d(0,0,0)",
        transformOrigin: t.width / 2 + "px " + t.height / 2 + "px 0",
        perspective: g
    }).hide();
    for (var Y = 0; f * h > Y; Y++) {
        var X = Y % f,
            I = Math.floor(Y / f),
            _ = d("<div>").css({
                position: "absolute",
                left: 100 * X / f + "%",
                top: 100 * I / h + "%",
                outline: "1px solid transparent",
                transformStyle: y || k ? "flat" : "preserve-3d",
                zIndex: T[Y].zIndex,
                overflow: b ? "visible" : "hidden"
            }).appendTo(w),
            S = d("<div>").css({
                transform: "scale(1) rotateX(0) rotateY(0) translate3d(0,0,0)",
                outline: "1px solid transparent",
                transformStyle: "preserve-3d"
            }).appendTo(_),
            L = d("<div>").addClass("ws_front_image").appendTo(S),
            z = b ? d("<div>").addClass("ws_back_image").appendTo(S) : 0;
        L.css({
            position: "absolute",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backfaceVisibility: "hidden",
            transform: "translate3d(0,0,0)"
        }).append(d("<img>").css({
            left: 100 * -X + "%",
            top: 100 * -I + "%",
            position: "absolute",
            outline: "1px solid transparent"
        })), b && z.css({
            position: "absolute",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg) translate3d(0,0," + v + "px)"
        }).append(d("<img>").css({
            left: 100 * -X + "%",
            top: 100 * -I + "%",
            position: "absolute",
            outline: "1px solid transparent"
        }));
        var F = {
            position: "absolute",
            outline: "1px solid transparent"
        };
        m[Y] = {
            part: S,
            front: L,
            back: z,
            wrapper: _,
            leftEdge: b ? d("<div>").addClass("ws_left_edge").css(F).appendTo(S) : 0,
            rightEdge: b ? d("<div>").addClass("ws_right_edge").css(F).appendTo(S) : 0,
            topEdge: b ? d("<div>").addClass("ws_top_edge").css(F).appendTo(S) : 0,
            bottomEdge: b ? d("<div>").addClass("ws_bottom_edge").css(F).appendTo(S) : 0
        }
    }
    var Z;
    this.go = function(o, i) {
        function s(t, e) {
            return Math.random() * (e - t + 1) + t
        }
        if (Z) return i;
        w.show();
        var g = d(e.get(i));
        if (g = {
                width: g.width(),
                height: g.height(),
                marginTop: parseFloat(g.css("marginTop")),
                marginLeft: parseFloat(g.css("marginLeft"))
            }, b) {
            m[0].front.find("img").on("load", function() {
                u.hide()
            });
            for (var v in m) m[v].front.find("img").attr("src", e.get(i).src), m[v].back.find("img").attr("src", e.get(o).src);
            x[i] || (x[i] = r(i)), Z = new n(m, i, g, function() {
                u.show(), l.trigger("effectEnd"), w.hide();
                for (var t in m) m[t].part.css({
                    transition: "",
                    transform: "rotateX(0) rotateY(0) translate3d(0,0,0)"
                });
                Z = 0
            })
        } else {
            Z = !0;
            var y = a.width(),
                k = a.height(),
                T = y / f,
                Y = k / h;
            w.css({
                width: y,
                height: k
            });
            var X = 0;
            for (var v in m) {
                var I = v % f,
                    _ = Math.floor(v / f);
                m[v].front.find("img").attr("src", e.get(o).src).css(g);
                var S = t.duration * (1 - Math.abs((p * c - I * _) / (2 * h * f))),
                    L = s(-1, 1) > 0 ? 1 : -1,
                    z = s(-1, 1) > 0 ? 1 : -1;
                m[v].wrapper.css({
                    width: T,
                    height: Y
                }), m[v].part.css({
                    position: "absolute",
                    top: L * Y,
                    left: z * T,
                    opacity: 0,
                    width: T,
                    height: Y
                }).animate({
                    top: 0,
                    left: 0,
                    opacity: 1
                }, S, function() {
                    X++, X == h * f && (u.stop(1, 1), Z = !1, l.trigger("effectEnd"))
                })
            }
        }
    }
}
jQuery.extend(jQuery.easing, {
    easeInBack: function(t, e, a, r, o, i) {
        return void 0 == i && (i = 1.70158), r * (e /= o) * e * ((i + 1) * e - i) + a
    },
    easeOutBack: function(t, e, a, r, o, i) {
        return void 0 == i && (i = 1.70158), r * ((e = e / o - 1) * e * ((i + 1) * e + i) + 1) + a
    },
    easeInBackQ: function(t, e, a, r, o) {
        var i = (e /= o) * e;
        return a + r * i * (4 * e * i - 8 * i + 8 * e - 3)
    },
    easeOutBackQ: function(t, e, a, r, o) {
        var i = (e /= o) * e;
        return a + r * (4 * i * e * i - 12 * i * i + 16 * i * e - 13 * i + 6 * e)
    },
    easeInBackQ2: function(t, e, a, r, o) {
        var i = (e /= o) * e;
        return a + r * i * (1.5 * e * i - 2.5 * i + 5 * e - 3)
    },
    easeOutBackQ2: function(t, e, a, r, o) {
        var i = (e /= o) * e;
        return a + r * (1.5 * i * e * i - 5 * i * i + 10 * i * e - 12 * i + 6.5 * e)
    }
});

function ws_collage(t, e, a) {
    function i(t, e, a) {
        return parseFloat(a * (e - t) + t)
    }

    function r(e, a, i) {
        var r = i * a.x,
            n = i * a.y,
            h = i * a.width,
            o = i * a.height;
        x ? (e.save(), e.translate(r + .5 * h, n + .5 * o), e.rotate(a.angle * Math.PI / 180), e.scale(a.scale, a.scale), a.img && e.drawImage(a.img, -.5 * h, -.5 * o, h, o), e.restore()) : c("<img>").attr("src", a.img).css({
            position: "absolute",
            width: 100 * h / t.width + "%",
            height: 100 * o / t.height + "%",
            left: 100 * r / t.width + "%",
            top: 100 * n / t.height + "%"
        }).appendTo(e)
    }

    function n(a, n, h, o, g, s) {
        {
            var d = M[a],
                l = M[n];
            new Date
        }
        if (x) {
            var w = c(e[n]);
            w = {
                width: w.width(),
                height: w.height(),
                marginTop: parseFloat(w.css("marginTop")),
                marginLeft: parseFloat(w.css("marginLeft"))
            }, c(T).css(w)
        }
        wowAnimate(function(e) {
            var a = 1 - 2 * e;
            if (0 > a && (a *= -1, a > 1 && (a = 1)), a = jQuery.easing.easeInOutQuad(1, a, 0, 1, 1), e = jQuery.easing.easeInOutQuad(1, e, 0, 1, 1), x) {
                q.width = o, q.height = g, T.width = o, T.height = g;
                var n = i(t.width / l.width, t.width / d.width, e),
                    s = i(.5, i(1 / l.scale, 1 / d.scale, e), a),
                    c = i(1 / l.scale, 1 / d.scale, e),
                    w = i(l.angle, d.angle, e),
                    u = h * d.width,
                    m = h * d.height,
                    v = h * i(l.x, d.x, e),
                    p = h * i(l.y, d.y, e);
                if (z && D && (q.ctx.drawImage(D, 0, 0, o, g), q.ctx.save(), q.ctx.translate(v + .5 * u, p + .5 * m), q.ctx.rotate(-w * Math.PI / 180), q.ctx.scale(c, c), q.ctx.translate(-(v + .5 * u), -(p + .5 * m)), q.ctx.transform(c, 0, 0, c, -v * c, -p * c), q.ctx.drawImage(D, -o, -g, 4 * o, 4 * g), q.ctx.restore()), q.ctx.transform(n, 0, 0, n, -v * n, -p * n), q.ctx.translate(v + .5 * u, p + .5 * m), q.ctx.rotate(-w * Math.PI / 180), q.ctx.scale(s, s), q.ctx.translate(-(v + .5 * u), -(p + .5 * m)), q.ctx.globalAlpha = i(.2, 1, a), f)
                    for (P in M) r(q.ctx, M[P], h);
                else q.ctx.drawImage(L, 0, 0);
                q.ctx.globalAlpha = 1, q.ctx.globalAlpha = i(0, 1, a), r(q.ctx, d, h), q.ctx.globalAlpha = i(1, 0, 2 * e > 1 ? 1 : 2 * e), r(q.ctx, l, h), q.ctx.globalAlpha = 1, T.ctx.drawImage(q, 0, 0)
            } else {
                var b = i(2, o / (l.width * h), a),
                    v = -h * i(l.x, d.x, e) * b,
                    p = -h * i(l.y, d.y, e) * b,
                    u = o * b,
                    m = g * b;
                T.css({
                    left: v,
                    top: p,
                    width: u,
                    height: m
                })
            }
            C.show()
        }, 0, 1, t.duration, function() {
            s()
        })
    }

    function h(t, a, i, n, o) {
        if (!(t > a || !M[t] || M[t].img)) {
            var g = new Image;
            g.onload = function() {
                M[t].img = g, i && t != o[0] && t != o[1] ? (r(n, M[t], 1), h(t + 1, a, !0, n, o)) : h(t + 1, a, !1)
            }, g.onerror = function() {
                i && t != o[0] && t != o[1] ? (r(n, M[t], 1), h(t + 1, a, !0, n, o)) : h(t + 1, a, !1)
            }, g.src = e[t].src
        }
    }

    function o(t, e, a) {
        return x ? (a.ctx.drawImage(t.get(0), 0, 0), g(a.ctx, 0, 0, a.width, a.height, e) || a.ctx.drawImage(t.get(0), 0, 0), !0) : cont
    }

    function g(t, e, a, i, r, n) {
        if (!(isNaN(n) || 1 > n)) {
            n |= 0;
            var h;
            try {
                h = t.getImageData(e, a, i, r)
            } catch (o) {
                return console.log("error:unable to access image data: " + o), !1
            }
            var g, c, d, l, f, w, x, u, m, v, p, b, I, y, M, C, A, Q, j, _, E = h.data,
                F = n + n + 1,
                O = i - 1,
                P = r - 1,
                T = n + 1,
                q = T * (T + 1) / 2,
                D = new s,
                L = D;
            for (d = 1; F > d; d++)
                if (L = L.next = new s, d == T) var N = L;
            L.next = D;
            var R = null,
                z = null;
            x = w = 0;
            var X = H[n],
                k = S[n];
            for (c = 0; r > c; c++) {
                for (y = M = C = u = m = v = 0, p = T * (A = E[w]), b = T * (Q = E[w + 1]), I = T * (j = E[w + 2]), u += q * A, m += q * Q, v += q * j, L = D, d = 0; T > d; d++) L.r = A, L.g = Q, L.b = j, L = L.next;
                for (d = 1; T > d; d++) l = w + ((d > O ? O : d) << 2), u += (L.r = A = E[l]) * (_ = T - d), m += (L.g = Q = E[l + 1]) * _, v += (L.b = j = E[l + 2]) * _, y += A, M += Q, C += j, L = L.next;
                for (R = D, z = N, g = 0; i > g; g++) E[w] = u * X >> k, E[w + 1] = m * X >> k, E[w + 2] = v * X >> k, u -= p, m -= b, v -= I, p -= R.r, b -= R.g, I -= R.b, l = x + ((l = g + n + 1) < O ? l : O) << 2, y += R.r = E[l], M += R.g = E[l + 1], C += R.b = E[l + 2], u += y, m += M, v += C, R = R.next, p += A = z.r, b += Q = z.g, I += j = z.b, y -= A, M -= Q, C -= j, z = z.next, w += 4;
                x += i
            }
            for (g = 0; i > g; g++) {
                for (M = C = y = m = v = u = 0, w = g << 2, p = T * (A = E[w]), b = T * (Q = E[w + 1]), I = T * (j = E[w + 2]), u += q * A, m += q * Q, v += q * j, L = D, d = 0; T > d; d++) L.r = A, L.g = Q, L.b = j, L = L.next;
                for (f = i, d = 1; n >= d; d++) w = f + g << 2, u += (L.r = A = E[w]) * (_ = T - d), m += (L.g = Q = E[w + 1]) * _, v += (L.b = j = E[w + 2]) * _, y += A, M += Q, C += j, L = L.next, P > d && (f += i);
                for (w = g, R = D, z = N, c = 0; r > c; c++) l = w << 2, E[l] = u * X >> k, E[l + 1] = m * X >> k, E[l + 2] = v * X >> k, u -= p, m -= b, v -= I, p -= R.r, b -= R.g, I -= R.b, l = g + ((l = c + T) < P ? l : P) * i << 2, u += y += R.r = E[l], m += M += R.g = E[l + 1], v += C += R.b = E[l + 2], R = R.next, p += A = z.r, b += Q = z.g, I += j = z.b, y -= A, M -= Q, C -= j, z = z.next, w += i
            }
            return t.putImageData(h, e, a), !0
        }
    }

    function s() {
        this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
    }
    var c = jQuery,
        d = c(this),
        l = c(".ws_list", a),
        f = t.maxQuality || !0,
        w = t.maxPreload || 20,
        x = !t.noCanvas && document.createElement("canvas").getContext,
        u = 10,
        m = !1,
        v = .3,
        p = .7,
        b = -180,
        I = 180,
        y = e.length,
        M = [],
        C = c("<div>").addClass("ws_effect ws_collage").css({
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            overflow: "hidden",
            "z-index": 8
        }).appendTo(a),
        A = 0,
        Q = 0,
        j = t.width / (Math.sqrt(y) + 1),
        _ = t.height / (Math.sqrt(y) + 1),
        E = Math.floor(t.width / j);
    for (P = 0; y > P; P++) j + A > j * E && (Q = Math.floor(j * (P + 1) / t.width) * _, A = 0), M[P] = {
        x: A,
        y: Q,
        width: j,
        height: _,
        img: null
    }, x && (M[P].scale = i(v, p, Math.random()), M[P].angle = i(b, I, Math.random())), A += parseFloat(j);
    for (var F, O, P = M.length; P; F = parseInt(Math.random() * P), O = M[--P], M[P] = M[F], M[F] = O);
    if (x) {
        var T = c("<canvas>")[0];
        T.ctx = T.getContext("2d"), T.width = C.width(), T.height = C.height();
        var q = c("<canvas>")[0];
        q.ctx = q.getContext("2d"), q.width = C.width(), q.height = C.height();
        var D = c("<canvas>")[0];
        if (D.ctx = D.getContext("2d"), D.width = C.width(), D.height = C.height(), !f) {
            var L = c("<canvas>")[0];
            L.ctx = L.getContext("2d"), L.width = C.width(), L.height = C.height()
        }
        C.append(T)
    } else {
        var T = C.clone().removeClass("ws_effect").css({
            overflow: "visible"
        });
        C.css("display", "none").append(T);
        for (P in M) M[P].img = e[P].src, r(T, M[P], 1);
        var N = y % E == "undefined" ? 0 : y % E;
        startRight = 0, bottomAddCount = 2 * E - N, rightAddCount = Math.ceil(y / E) + 1;
        for (var P = 0; bottomAddCount > P; P++) r(T, {
            img: e[P % e.length].src,
            width: j,
            height: _,
            x: j * ((N + P) % E),
            y: Q + Math.floor((N + P) / E) * _
        }, 1);
        for (var P = 0; bottomAddCount > P; P++) r(T, {
            img: e[P % e.length].src,
            width: j,
            height: _,
            x: j * E,
            y: P * _
        }, 1)
    }
    var R, z;
    this.go = function(r, g) {
        if (R) return -1;
        if (t.images && (M[r].img = e[r]), window.XMLHttpRequest) {
            if (x) {
                var s = t.width,
                    v = t.height,
                    p = 1;
                h(g, g, !1), h(r, r, !1), f ? h(2, w + 1, !1) : (L.width = s, L.height = v, h(2, w + 1, !0, L.ctx, [g, r])), z || m || (rand = Math.round(i(0, y - 1, Math.random())), D.width = C.width(), D.height = C.height(), z = o(c(e[rand]), u, D))
            } else var s = a.width(),
                v = a.height(),
                p = s / t.width;
            R = new n(r, g, p, s, v, function() {
                if (d.trigger("effectEnd"), C.hide(), R = 0, !f && x)
                    for (p in M) M[p].img = null
            })
        } else R = 0, l.stop(!0).animate({
            left: r ? -r + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0
        }, t.duration, "easeInOutExpo", function() {
            d.trigger("effectEnd")
        })
    };
    var H = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        S = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24]
}
jQuery.extend(jQuery.easing, {
    easeInOutQuad: function(t, e, a, i, r) {
        return (e /= r / 2) < 1 ? i / 2 * e * e + a : -i / 2 * (--e * (e - 2) - 1) + a
    }
});

function ws_carousel_basic(t, e, n) {
    function i(n, i) {
        for (var a = 0; n > a; a++) {
            for (var s = i ? e.length - n + a : a; 0 > s;) s += n - e.length;
            for (; s > e.length - 1;) s -= n - e.length;
            I.push({
                item: u("<div>").append(u(e[s]).clone().css({
                    outline: "1px solid transparent"
                })).css({
                    position: "absolute",
                    overflow: "hidden",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).appendTo(x),
                id: s
            }), t.images && w.push(!t.images[s].noimage)
        }
    }

    function a() {
        var t = u(e[0]);
        t = {
            width: t.width(),
            height: t.height(),
            marginTop: parseFloat(t.css("marginTop")),
            marginLeft: parseFloat(t.css("marginLeft"))
        };
        for (var n in I) I[n].item && u(I[n].item).find("img").css(t)
    }

    function s(t) {
        t *= -1;
        var e = [];
        for (var n in I) {
            var i = v - n;
            e.push(i != t ? t - i : 0)
        }
        return e
    }

    function r(t, e, n, i) {
        wowAnimate(function(n) {
            c(t, e, n)
        }, 0, 1, n, i)
    }

    function o(t, e, n) {
        return t + (e - t) * n
    }

    function f(e, n) {
        e.css(t.support.transform ? {
            transform: "scale(" + n.scale + ") translate3d(" + n.offset + "%,0,0) rotateY(" + n.rotate + "deg)",
            zIndex: n.zIndex
        } : {
            left: 100 * (1 - n.scale) / 2 + .85 * n.offset + "%",
            top: 100 * (1 - n.scale) / 2 + "%",
            width: 100 * n.scale + "%"
        })
    }

    function c(t, e, n, i) {
        i || (n = u.easing.easeInOutQuart(1, n, 0, 1, 1, 1));
        for (var a in t) {
            var s = o(t[a], e[a], n) * m,
                r = l / 100,
                c = 0,
                d = t[a] * (t[a] > 0 ? -1 : 1),
                g = s > 0 ? -1 : 1;
            n > .5 && (d = e[a] * (e[a] > 0 ? -1 : 1)), 0 === t[a] && (r = o(h, l, n) / 100, c = o(0, g * p, n)), 0 === e[a] && (r = o(l, h, n) / 100, c = o(g * p, 0, n)), 0 !== e[a] && 0 !== t[a] && (c = g * p), f(I[a].item, {
                scale: r,
                offset: s,
                rotate: c,
                zIndex: d
            })
        }
    }
    var u = jQuery,
        d = u(this),
        g = u(".ws_list", n).css("opacity", 0),
        l = (/iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent), e.length, 90),
        h = 100,
        p = 60,
        m = 90,
        v = 2,
        w = [],
        x = u("<div>").addClass("ws_effect ws_carousel_basic").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            perspective: 2e3
        }).appendTo(n),
        I = [];
    i(v, !0), i(e.length), i(v);
    var _ = s(t.startSlide);
    r(_, _, 0), a(), u(window).on("load resize", a), this.go = function(n, i) {
        function o(e) {
            return e.find("img").attr("src", t.images[n].src)
        }
        if (a(), t.images && !w[n + v]) {
            var f = n + v;
            w[f] = !0, o(I[f].item), v > n && o(I[I.length - n].item), n + v >= e.length && o(I[n + v - e.length].item)
        }
        window.XMLHttpRequest ? (i == e.length - 1 && 0 == n && (n = i + 1), 0 == i && n == e.length - 1 && (n = -1), r(s(i), s(n), t.duration, function() {
            d.trigger("effectEnd")
        })) : g.stop(!0).animate({
            left: n ? -n + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0
        }, t.duration, "easeInOutExpo", function() {
            d.trigger("effectEnd")
        })
    }, this.step = function(t, e) {
        var n = t + (0 > e ? 1 : -1);
        0 > e && (e *= -1), c(s(t), s(n), e, !0)
    }
}
jQuery.extend(jQuery.easing, {
    easeInOutQuart: function(t, e, n, i, a) {
        return (e /= a / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
    }
});

function ws_bubbles(t, n, a) {
    function e(t) {
        if ("[object Array]" === Object.prototype.toString.call(t)) return t[Math.floor(Math.random() * t.length)];
        var n, a = 0;
        for (var i in t) Math.random() < 1 / ++a && (n = i);
        return /linear|swing/g.test(n) ? e(t) : n
    }

    function i(t, n, a, e, i) {
        t.clearRect(0, 0, u, s);
        for (var r = 0, o = a.length; o > r; r++) {
            var c = Math.max(0, Math.min(1, n - a[r][3] * (1 - n)));
            i && l[i] && (c = l[i](1, c, 0, 1, 1, 1));
            var h = u;
            1.8 >= u / s && u / s > .7 ? h *= 2 : .7 >= u / s && (h = 2 * s);
            var f = a[r][2] * c * h;
            e && (f = (a[r][2] + (e[r][2] - a[r][2]) * c) * h), f = Math.max(0, f), t.beginPath(), t.arc((a[r][0] + ((e ? e[r][0] : .5) - a[r][0]) * c) * u, (a[r][1] + ((e ? e[r][1] : .5) - a[r][1]) * c) * s, f, 0, 2 * Math.PI, !1), t.fillStyle = b[r][0], t.fill()
        }
    }

    function r(t, n) {
        n = n || {}; {
            var a, e = 1,
                i = n.exclude || [],
                r = document.createElement("canvas"),
                o = r.getContext("2d");
            r.width = t.naturalWidth, r.height = t.naturalHeight
        }
        o.drawImage(t, 0, 0, t.naturalWidth, t.naturalHeight);
        try {
            a = o.getImageData(n.x ? n.x : 0, n.y ? n.y : 0, n.w ? n.w : t.width, n.h ? n.h : t.height).data
        } catch (c) {
            return !1
        }
        for (var h = (n.w ? n.w : t.width * n.h ? n.h : t.height) || a.length, u = {}, s = "", f = [], d = {
                dominant: {
                    name: "",
                    count: 0
                }
            }, g = 0; h > g;) {
            if (f[0] = a[g], f[1] = a[g + 1], f[2] = a[g + 2], s = f.join(","), u[s] = s in u ? u[s] + 1 : 1, -1 === i.indexOf(["rgb(", s, ")"].join(""))) {
                var l = u[s];
                l > d.dominant.count && (d.dominant.name = s, d.dominant.count = l)
            }
            g += 4 * e
        }
        return ["rgb(", d.dominant.name, ")"].join("")
    }
    var o = jQuery,
        c = o(this),
        h = t.noCanvas || !document.createElement("canvas").getContext,
        u = t.width,
        s = t.height,
        f = o("<div>").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden"
        }).addClass("ws_effect ws_bubbles").appendTo(a);
    if (!h) var d = o("<canvas>").css({
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
        }).appendTo(f),
        g = d.get(0).getContext("2d");
    var l = {
            easeOutBack: function(t, n, a, e, i, r) {
                return void 0 == r && (r = 1.70158), e * ((n = n / i - 1) * n * ((r + 1) * n + r) + 1) + a
            },
            easeOutBackCubic: function(t, n, a, e, i) {
                var r = (n /= i) * n;
                return a + e * (-1.5 * r * n * r + 2 * r * r + 4 * r * n + -9 * r + 5.5 * n)
            },
            easeOutCubic: function(t, n, a, e, i) {
                return e * ((n = n / i - 1) * n * n + 1) + a
            },
            easeOutExpo: function(t, n, a, e, i) {
                return n == i ? a + e : e * (-Math.pow(2, -10 * n / i) + 1) + a
            }
        },
        b = [
            ["#bbbbbb", .5, .5],
            ["#b3b3b3", .2, .2],
            ["#b6b6b6", .5, .2],
            ["#b9b9b9", .8, .2],
            ["#cccccc", .2, .8],
            ["#c3c3c3", .5, .8],
            ["#c6c6c6", .8, .8]
        ],
        w = [
            [
                [.5, .5, .7, .15],
                [.5, .5, .6, .3],
                [.5, .5, .5, .45],
                [.5, .5, .4, .6],
                [.5, .5, .3, .75],
                [.5, .5, .2, .9],
                [.5, .5, .1, 1]
            ],
            [
                [.5, .5, .7, 1],
                [.5, .5, .6, .9],
                [.5, .5, .5, .75],
                [.5, .5, .4, .6],
                [.5, .5, .3, .45],
                [.5, .5, .2, .3],
                [.5, .5, .1, .15]
            ]
        ],
        v = [
            [
                [.5, .5, 0, 1],
                [.5, .5, 0, .9],
                [.5, .5, 0, .75],
                [.5, .5, 0, .6],
                [.5, .5, 0, .45],
                [.5, .5, 0, .3],
                [.5, .5, 0, .15]
            ],
            [
                [.5, .5, 0, .15],
                [.5, .5, 0, .3],
                [.5, .5, 0, .45],
                [.5, .5, 0, .6],
                [.5, .5, 0, .75],
                [.5, .5, 0, .9],
                [.5, .5, 0, 1]
            ],
            [
                [.5, 7.5, .7, .75],
                [.5, 7.5, .6, .15],
                [.5, 7.5, .5, 1],
                [.5, 7.5, .4, .3],
                [.5, 7.5, .3, .45],
                [.5, 7.5, .2, .6],
                [.5, 7.5, .1, .9]
            ],
            [
                [.5, 7.5, .7, 1],
                [.5, 7.5, .6, .9],
                [.5, 7.5, .5, .75],
                [.5, 7.5, .4, .6],
                [.5, 7.5, .3, .45],
                [.5, 7.5, .2, .3],
                [.5, 7.5, .1, .15]
            ]
        ];
    this.go = function(o, f) {
        if (h) a.find(".ws_list").css("transform", "translate3d(0,0,0)").stop(!0).animate({
            left: o ? -o + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0
        }, t.duration, "easeInOutExpo", function() {
            c.trigger("effectEnd")
        });
        else {
            u = a.width(), s = a.height(), d.attr({
                width: u,
                height: s
            });
            for (var m = n.get(f), p = 0, x = b.length; x > p; p++) {
                var M = Math.abs(b[p][1]),
                    y = Math.abs(b[p][2]);
                b[p][0] = r(m, {
                    x: M * u,
                    y: y * s,
                    w: 2,
                    h: 2
                }) || b[p][0]
            }
            var C = e(w),
                O = e(v),
                j = e(l);
            wowAnimate(function(t) {
                i(g, t, C, 0, j)
            }, 0, 1, t.duration / 2, function() {
                a.find(".ws_list").css({
                    left: o ? -o + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0
                }), j = e(l), wowAnimate(function(t) {
                    i(g, 1 - t, O, C, j)
                }, 0, 1, t.duration / 2, function() {
                    g.clearRect(0, 0, u, s), c.trigger("effectEnd")
                })
            })
        }
    }
}

function ws_book(e, t, i) {
    function s(t, i, s, n, a, o, r, d, c, h, l) {
        numSlices = a / 2, widthScale = a / c, heightScale = (1 - o) / numSlices, t.clearRect(0, 0, l.width(), l.height());
        for (var p = 0; numSlices + widthScale > p; p++) {
            var f = r ? p * e.width / a + e.width / 2 : (numSlices - p) * e.width / a,
                g = s + (r ? 2 : -2) * p,
                u = n + h * heightScale * p / 2;
            0 > f && (f = 0), 0 > g && (g = 0), 0 > u && (u = 0), t.drawImage(i, f, 0, 2.5, e.height, g, u, 2, h * (1 - heightScale * p))
        }
        t.save(), t.beginPath(), t.moveTo(s, n), t.lineTo(s + (r ? 2 : -2) * (numSlices + widthScale), n + h * heightScale * (numSlices + widthScale) / 2), t.lineTo(s + (r ? 2 : -2) * (numSlices + widthScale), h * (1 - heightScale * (numSlices + widthScale)) + n + h * heightScale * (numSlices + widthScale) / 2), t.lineTo(s, n + h), t.closePath(), t.clip(), t.fillStyle = "rgba(0,0,0," + Math.round(100 * d) / 100 + ")", t.fillRect(0, 0, l.width(), l.height()), t.restore()
    }

    function n(e, t, i, n, a, o, r, d, g, u, m, v) {
        if (f) {
            if (!e) {
                t *= -1;
                var w = n;
                n = i, i = w, w = o, o = a, a = w
            }
            setTimeout(function() {
                i.children("img").css("opacity", l).animate({
                    opacity: 1
                }, c / 2), a.css("transform", "rotateY(" + t + "deg)").children("img").css("opacity", 1).animate({
                    opacity: l
                }, c / 2, function() {
                    a.hide(), o.show().css("transform", "rotateY(0deg)").children("img").css("opacity", l).animate({
                        opacity: 1
                    }, c / 2), n.children("img").css("opacity", 1).animate({
                        opacity: l
                    }, c / 2)
                })
            }, 0), setTimeout(v, c)
        } else if (p) {
            r.show();
            var y = (new Date, !0);
            wowAnimate(function(t) {
                var c = jQuery.easing.easeInOutQuint(1, t, 0, 1, 1),
                    p = jQuery.easing.easeInOutCubic(1, t, 0, 1, 1),
                    f = !e;
                if (.5 > t) {
                    c *= 2, p *= 2;
                    var m = a
                } else {
                    f = e, c = 2 * (1 - c), p = 2 * (1 - p);
                    var m = o
                }
                var v = r.height() * h / 2,
                    w = (1 - c) * r.width() / 2,
                    S = 1 + p * h,
                    T = r.width() / 2;
                s(i, m, T, v, w, S, f, p * l, T, r.height(), d), y && (u.show(), y = !1), n.clearRect(0, 0, g.width(), g.height()), n.fillStyle = "rgba(0,0,0," + (l - p * l) + ")", n.fillRect(f ? T : 0, 0, g.width() / 2, g.height())
            }, 0, 1, c, v)
        }
    }
    var a = jQuery,
        o = a(this),
        r = a(".ws_list", i),
        d = a("<div>").addClass("ws_effect ws_book").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        }).appendTo(i),
        c = e.duration,
        h = e.perspective || .4,
        l = e.shadow || .35,
        p = e.noCanvas || !1,
        f = e.no3d || !1,
        g = {
            domPrefixes: " Webkit Moz ms O Khtml".split(" "),
            testDom: function(e) {
                for (var t = this.domPrefixes.length; t--;)
                    if ("undefined" != typeof document.body.style[this.domPrefixes[t] + e]) return !0;
                return !1
            },
            cssTransitions: function() {
                return this.testDom("Transition")
            },
            cssTransforms3d: function() {
                var e = "undefined" != typeof document.body.style.perspectiveProperty || this.testDom("Perspective");
                if (e && /AppleWebKit/.test(navigator.userAgent)) {
                    var t = document.createElement("div"),
                        i = document.createElement("style"),
                        s = "Test3d" + Math.round(99999 * Math.random());
                    i.textContent = "@media (-webkit-transform-3d){#" + s + "{height:3px}}", document.getElementsByTagName("head")[0].appendChild(i), t.id = s, document.body.appendChild(t), e = 3 === t.offsetHeight, i.parentNode.removeChild(i), t.parentNode.removeChild(t)
                }
                return e
            },
            canvas: function() {
                return "undefined" != typeof document.createElement("canvas").getContext ? !0 : void 0
            }
        };
    f || (f = g.cssTransitions() && g.cssTransforms3d()), p || (p = g.canvas());
    var u;
    this.go = function(e, s, l) {
        if (u) return -1;
        var g = t.get(e),
            m = t.get(s);
        l = void 0 == l ? 0 == s && e != s + 1 || e == s - 1 : !l;
        var v = a("<div>").appendTo(d),
            w = a(g);
        if (w = {
                width: w.width(),
                height: w.height(),
                marginLeft: parseFloat(w.css("marginLeft")),
                marginTop: parseFloat(w.css("marginTop"))
            }, f) {
            var y = {
                background: "#000",
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                zIndex: 3,
                outline: "1px solid transparent"
            };
            perspect = i.width() * (3 - 2 * h), v.css(y).css({
                perspective: perspect,
                transform: "translate3d(0,0,0)"
            });
            var S = 90,
                T = a("<div>").css(y).css({
                    position: "relative",
                    "float": "left",
                    width: "50%",
                    overflow: "hidden"
                }).append(a("<img>").attr("src", (l ? g : m).src).css(w)).appendTo(v),
                b = a("<div>").css(y).css({
                    position: "relative",
                    "float": "left",
                    width: "50%",
                    overflow: "hidden"
                }).append(a("<img>").attr("src", (l ? m : g).src).css(w).css({
                    marginLeft: -w.width / 2
                })).appendTo(v),
                x = a("<div>").css(y).css({
                    display: l ? "block" : "none",
                    width: "50%",
                    transform: "rotateY(" + (l ? .1 : S) + "deg)",
                    transition: (l ? "ease-in " : "ease-out ") + c / 2e3 + "s",
                    transformOrigin: "right",
                    overflow: "hidden"
                }).append(a("<img>").attr("src", (l ? m : g).src).css(w)).appendTo(v),
                C = a("<div>").css(y).css({
                    display: l ? "none" : "block",
                    left: "50%",
                    width: "50%",
                    transform: "rotateY(-" + (l ? S : .1) + "deg)",
                    transition: (l ? "ease-out " : "ease-in ") + c / 2e3 + "s",
                    transformOrigin: "left",
                    overflow: "hidden"
                }).append(a("<img>").attr("src", (l ? g : m).src).css(w).css({
                    marginLeft: -w.width / 2
                })).appendTo(v)
        } else if (p) var I = a("<div>").css({
                position: "absolute",
                top: 0,
                left: l ? 0 : "50%",
                width: "50%",
                height: "100%",
                overflow: "hidden",
                zIndex: 6
            }).append(a(t.get(e)).clone().css({
                position: "absolute",
                height: "100%",
                right: l ? "auto" : 0,
                left: l ? 0 : "auto"
            })).appendTo(v).hide(),
            O = a("<div>").css({
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                zIndex: 8
            }).appendTo(v).hide(),
            k = a("<canvas>").css({
                position: "absolute",
                zIndex: 2,
                left: 0,
                top: -O.height() * h / 2
            }).attr({
                width: O.width(),
                height: O.height() * (h + 1)
            }).appendTo(O),
            P = k.clone().css({
                top: 0,
                zIndex: 1
            }).attr({
                width: O.width(),
                height: O.height()
            }).appendTo(O),
            Q = k.get(0).getContext("2d"),
            z = P.get(0).getContext("2d");
        else r.stop(!0).animate({
            left: e ? -e + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0
        }, c, "easeInOutExpo");
        if (!f && p) var T = Q,
            b = z,
            x = m,
            C = g;
        u = new n(l, S, T, b, x, C, O, k, P, I, w, function() {
            o.trigger("effectEnd"), v.remove(), u = 0
        })
    }
}
jQuery.extend(jQuery.easing, {
    easeInOutCubic: function(e, t, i, s, n) {
        return (t /= n / 2) < 1 ? s / 2 * t * t * t + i : s / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInOutQuint: function(e, t, i, s, n) {
        return (t /= n / 2) < 1 ? s / 2 * t * t * t * t * t + i : s / 2 * ((t -= 2) * t * t * t * t + 2) + i
    }
});

function ws_blur(t, i, e) {
    function n(t, i, e) {
        wowAnimate(t.css({
            visibility: "visible"
        }), {
            opacity: 0
        }, {
            opacity: 1
        }, i, e)
    }

    function a(t, i, e) {
        wowAnimate(t, {
            opacity: 1
        }, {
            opacity: 0
        }, i, e)
    }

    function r(t, i, e, n) {
        var a = (parseInt(t.parent().css("z-index")) || 0) + 1;
        if (g) {
            var r = n.getContext("2d");
            return r.drawImage(t.get(0), 0, 0, i.width, i.height), o(r, 0, 0, n.width, n.height, e) ? d(n) : 0
        }
        for (var s = d("<div></div>").css({
                position: "absolute",
                "z-index": a,
                left: 0,
                top: 0,
                display: "none"
            }).css(i).appendTo(h), c = (Math.sqrt(5) + 1) / 2, f = 1 - c / 2, u = 0; e > f * u; u++) {
            var l = Math.PI * c * u,
                p = f * u + 1,
                v = p * Math.cos(l),
                b = p * Math.sin(l);
            d(document.createElement("img")).attr("src", t.attr("src")).css({
                opacity: 1 / (u / 1.8 + 1),
                position: "absolute",
                "z-index": a,
                left: Math.round(v) + "px",
                top: Math.round(b) + "px",
                width: "100%",
                height: "100%"
            }).appendTo(s)
        }
        return s
    }

    function o(t, i, e, n, a, r) {
        if (!(isNaN(r) || 1 > r)) {
            r |= 0;
            var o;
            try {
                o = t.getImageData(i, e, n, a)
            } catch (d) {
                return console.log("error:unable to access image data: " + d), !1
            }
            var c, h, g, f, u, l, b, w, x, m, y, I, M, T, C, E, _, z, D, A, L = o.data,
                N = r + r + 1,
                j = n - 1,
                q = a - 1,
                O = r + 1,
                P = O * (O + 1) / 2,
                Q = new s,
                k = Q;
            for (g = 1; N > g; g++)
                if (k = k.next = new s, g == O) var B = k;
            k.next = Q;
            var F = null,
                G = null;
            b = l = 0;
            var H = p[r],
                J = v[r];
            for (h = 0; a > h; h++) {
                for (T = C = E = w = x = m = 0, y = O * (_ = L[l]), I = O * (z = L[l + 1]), M = O * (D = L[l + 2]), w += P * _, x += P * z, m += P * D, k = Q, g = 0; O > g; g++) k.r = _, k.g = z, k.b = D, k = k.next;
                for (g = 1; O > g; g++) f = l + ((g > j ? j : g) << 2), w += (k.r = _ = L[f]) * (A = O - g), x += (k.g = z = L[f + 1]) * A, m += (k.b = D = L[f + 2]) * A, T += _, C += z, E += D, k = k.next;
                for (F = Q, G = B, c = 0; n > c; c++) L[l] = w * H >> J, L[l + 1] = x * H >> J, L[l + 2] = m * H >> J, w -= y, x -= I, m -= M, y -= F.r, I -= F.g, M -= F.b, f = b + ((f = c + r + 1) < j ? f : j) << 2, T += F.r = L[f], C += F.g = L[f + 1], E += F.b = L[f + 2], w += T, x += C, m += E, F = F.next, y += _ = G.r, I += z = G.g, M += D = G.b, T -= _, C -= z, E -= D, G = G.next, l += 4;
                b += n
            }
            for (c = 0; n > c; c++) {
                for (C = E = T = x = m = w = 0, l = c << 2, y = O * (_ = L[l]), I = O * (z = L[l + 1]), M = O * (D = L[l + 2]), w += P * _, x += P * z, m += P * D, k = Q, g = 0; O > g; g++) k.r = _, k.g = z, k.b = D, k = k.next;
                for (u = n, g = 1; r >= g; g++) l = u + c << 2, w += (k.r = _ = L[l]) * (A = O - g), x += (k.g = z = L[l + 1]) * A, m += (k.b = D = L[l + 2]) * A, T += _, C += z, E += D, k = k.next, q > g && (u += n);
                for (l = c, F = Q, G = B, h = 0; a > h; h++) f = l << 2, L[f] = w * H >> J, L[f + 1] = x * H >> J, L[f + 2] = m * H >> J, w -= y, x -= I, m -= M, y -= F.r, I -= F.g, M -= F.b, f = c + ((f = h + O) < q ? f : q) * n << 2, w += T += F.r = L[f], x += C += F.g = L[f + 1], m += E += F.b = L[f + 2], F = F.next, y += _ = G.r, I += z = G.g, M += D = G.b, T -= _, C -= z, E -= D, G = G.next, l += n
            }
            return t.putImageData(o, i, e), !0
        }
    }

    function s() {
        this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
    }
    var d = jQuery,
        c = d(this),
        h = d("<div>").addClass("ws_effect ws_blur").css({
            position: "absolute",
            overflow: "hidden",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        }).appendTo(e),
        g = !t.noCanvas && !window.opera && !!document.createElement("canvas").getContext;
    if (g) try {
        document.createElement("canvas").getContext("2d").getImageData(0, 0, 1, 1)
    } catch (f) {
        g = 0
    }
    var u, l;
    this.go = function(o, s) {
        if (l) return -1;
        l = 1;
        var f, p = d(i.get(s)),
            v = d(i.get(o)),
            b = {
                width: p.width(),
                height: p.height(),
                marginTop: p.css("marginTop"),
                marginLeft: p.css("marginLeft")
            };
        if (g && (u || (u = '<canvas width="' + b.width + '" height="' + b.height + '"/>', u = d(u + u).css({
                "z-index": 8,
                position: "absolute",
                left: 0,
                top: 0,
                visibility: "hidden"
            }).appendTo(h)), u.css(b).attr({
                width: b.width,
                height: b.height
            }), f = r(p, b, 30, u.get(0))), g && f) {
            var w = r(v, b, 30, u.get(1));
            n(f, t.duration / 3, function() {
                e.find(".ws_list").css({
                    visibility: "hidden"
                }), a(f, t.duration / 6), n(w, t.duration / 6, function() {
                    f.css({
                        visibility: "hidden"
                    }), e.find(".ws_list").css({
                        visibility: "visible"
                    }), c.trigger("effectEnd", {
                        delay: t.duration / 2
                    }), a(w, t.duration / 2, function() {
                        l = 0
                    })
                })
            })
        } else g = 0, f = r(p, b, 8), f.fadeIn(t.duration / 3, "linear", function() {
            c.trigger("effectEnd", {
                delay: t.duration / 3
            }), f.fadeOut(t.duration / 3, "linear", function() {
                f.remove(), l = 0
            })
        })
    };
    var p = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        v = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24]
}

function ws_blinds(t, o, e) {
    for (var i = jQuery, n = i(this), s = t.parts || 3, d = i(".ws_list", e), r = i("<div>").addClass("ws_effect ws_blinds").css({
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            "z-index": 8
        }).hide().appendTo(e), l = i("<div>").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden"
        }).appendTo(r), f = [], a = document.addEventListener, h = 0; s > h; h++) f[h] = i("<div>").css({
        position: a ? "relative" : "absolute",
        display: a ? "inline-block" : "block",
        height: "100%",
        width: (100 / s + .001).toFixed(3) + "%",
        border: "none",
        margin: 0,
        overflow: "hidden",
        top: 0,
        left: a ? 0 : (100 * h / s).toFixed(3) + "%"
    }).appendTo(r);
    this.go = function(e, s, a) {
        void 0 == a && (a = s > e ? 1 : 0), r.find("img").stop(!0, !0), r.show();
        var h = i(o[s]),
            p = {
                width: h.width() || t.width,
                height: h.height() || t.height
            },
            w = h.clone().css(p).appendTo(l);
        w.from = {
            left: 0
        }, w.to = {
            left: (a ? -1 : 1) * w.width() * .5
        }, t.support.transform && (w.from = {
            translate: [w.from.left, 0, 0]
        }, w.to = {
            translate: [w.to.left, 0, 0]
        }), d.hide(), wowAnimate(w, w.from, w.to, t.duration, .1 * t.duration, "swing");
        for (var g = 0; g < f.length; g++) {
            var m = f[g],
                c = i(o[e]).clone().css({
                    position: "absolute",
                    top: 0
                }).css(p).appendTo(m);
            c.from = {
                left: (a ? 1 : -1) * c.width() - m.position().left
            }, c.to = {
                left: -m.position().left
            }, t.support.transform && (c.from = {
                translate: [c.from.left, 0, 0]
            }, c.to = {
                translate: [c.to.left, 0, 0]
            }), wowAnimate(c, c.from, c.to, t.duration / (f.length + 1) * (a ? f.length - g + 1 : g + 2), "swing", !a && g == f.length - 1 || a && !g ? function() {
                n.trigger("effectEnd"), r.hide().find("img").remove(), w.remove()
            } : !1)
        }
    }
}

function ws_blast(t, i, e) {
    function o(i, e, o, n) {
        t.support.transform && t.support.transition ? (("number" == typeof e.left || "number" == typeof e.top) && (e.transform = "translate3d(" + ("number" == typeof e.left ? e.left : 0) + "px," + ("number" == typeof e.top ? e.top : 0) + "px,0)"), delete e.left, delete e.top, e.transition = o ? "all " + o + "ms ease-in-out" : "", i.css(e), n && i.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            n(), i.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd")
        })) : (delete e.transfrom, delete e.transition, o ? i.animate(e, {
            queue: !1,
            duration: t.duration,
            complete: n ? n : 0
        }) : i.stop(1).css(e))
    }

    function n(i) {
        var e = Math.max((t.width || f.width()) / (t.height || f.height()) || 3, 3);
        l = l || Math.round(1 > e ? 3 : 3 * e), c = c || Math.round(1 > e ? 3 / e : 3);
        for (var o = 0; l * c > o; o++) {
            {
                Math.floor(o / l)
            }
            s([m[o] = document.createElement("div"), g[o] = document.createElement("div")]).css({
                position: "absolute",
                overflow: "hidden"
            }).appendTo(p).append(s("<img>").css({
                position: "absolute"
            }))
        }
        g = s(g), m = s(m), a(g, i), a(m, i, !0);
        var n = {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden"
        };
        h.css(n).append(s("<img>").css(n))
    }

    function a(i, e, n, a, r, h) {
        var p = f.width(),
            g = f.height(),
            m = {
                left: s(window).scrollLeft(),
                top: s(window).scrollTop(),
                width: s(window).width(),
                height: s(window).height()
            };
        s(i).each(function(i) {
            var w = i % l,
                u = Math.floor(i / l);
            if (n) {
                var v = d * p * (2 * Math.random() - 1) + p / 2,
                    b = d * g * (2 * Math.random() - 1) + g / 2,
                    T = f.offset();
                T.left += v, T.top += b, T.left < m.left && (v -= T.left + m.left), T.top < m.top && (b -= T.top + m.top);
                var y = m.left + m.width - T.left - p / l;
                0 > y && (v += y);
                var E = m.top + m.height - T.top - g / c;
                0 > E && (b += E)
            } else var v = p * w / l,
                b = g * u / c;
            s(this).find("img").css({
                left: -(p * w / l) + e.marginLeft,
                top: -(g * u / c) + e.marginTop,
                width: e.width,
                height: e.height
            });
            var M = {
                left: v,
                top: b,
                width: p / l,
                height: g / c
            };
            r && s.extend(M, r), a ? o(s(this), M, t.duration, 0 === i && h ? h : 0) : o(s(this), M)
        })
    }
    var s = jQuery,
        r = s(this),
        d = t.distance || 1;
    e = e;
    var f = s("<div>").addClass("ws_effect ws_blast"),
        h = s("<div>").addClass("ws_zoom").appendTo(f),
        p = s("<div>").addClass("ws_parts").appendTo(f);
    e.css({
        overflow: "visible"
    }).append(f), f.css({
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        "z-index": 8
    });
    var l = t.cols,
        c = t.rows,
        g = [],
        m = [];
    this.go = function(d, p) {
        var l = s(i[p]),
            c = {
                width: l.width(),
                height: l.height(),
                marginTop: parseFloat(l.css("marginTop")),
                marginLeft: parseFloat(l.css("marginLeft"))
            };
        g.length || n(c), g.find("img").attr("src", i.get(p).src), o(g, {
            opacity: 1,
            zIndex: 3
        }), m.find("img").attr("src", i.get(d).src), o(m, {
            opacity: 0,
            zIndex: 2
        }), h.find("img").attr("src", i.get(p).src), o(h.find("img"), {
            transform: "scale(1)"
        }), f.show();
        var w = e.find(".ws_list");
        t.fadeOut && w.fadeOut(t.duration), a(m, c, !1, !0, {
            opacity: 1
        }), a(g, c, !0, !0, {
            opacity: 0
        }, function() {
            r.trigger("effectEnd"), f.hide()
        }), o(h.find("img"), {
            transform: "scale(2)"
        }, t.duration, 0);
        var u = m;
        m = g, g = u
    }
}

function ws_basic_linear(t, e, s) {
    var i = jQuery,
        o = i(this),
        h = i("<div>").addClass("ws_effect ws_basic_linear").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden"
        }).appendTo(s),
        n = i("<div>").css({
            position: "absolute",
            display: "none",
            "z-index": 2,
            width: "200%",
            height: "100%",
            transform: "translate3d(0,0,0)"
        }).appendTo(h),
        a = i("<div>").css({
            position: "absolute",
            left: "auto",
            top: "auto",
            width: "50%",
            height: "100%",
            overflow: "hidden"
        }),
        d = a.clone();
    n.append(a, d), this.go = function(h, l, r) {
        n.stop(1, 1), r = void 0 == r ? !!((h - l + 1) % e.length) ^ t.revers ? "left" : "right" : r ? "left" : "right";
        var f = i(e[l]),
            c = {
                width: f.width() || t.width,
                height: f.height() || t.height
            };
        f.clone().css(c).appendTo(a).css(r, 0), i(e[h]).clone().css(c).appendTo(d).show(), "right" == r ? (a.css("left", "50%"), d.css("left", 0)) : (a.css("left", 0), d.css("left", "50%"));
        var p = {},
            g = {};
        p[r] = 0, g[r] = -s.width(), t.support.transform && ("right" == r && (p.left = p.right, g.left = -g.right), p = {
            translate: [p.left, 0, 0]
        }, g = {
            translate: [g.left, 0, 0]
        }), wowAnimate(n.css({
            left: "auto",
            right: "auto",
            top: 0
        }).css(r, 0).show(), p, g, t.duration, "easeInOutExpo", function() {
            o.trigger("effectEnd"), n.hide().find("div").html("")
        })
    }
}

function ws_basic(t, n, s) {
    var a = $(this);
    this.go = function(n) {
        s.find(".ws_list").css("transform", "translate3d(0,0,0)").stop(!0).animate({
            left: n ? -n + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0
        }, t.duration, "easeInOutExpo", function() {
            a.trigger("effectEnd")
        })
    }
}
