! function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [
        function(a, b, c) {}, {}
    ],
    2: [
        function(a, b, c) {
            /*!
Copyright (c) 2013 Derek Petersen https://github.com/tuxracer/touchclick MIT License
*/
            var d, e, f, g, h, i, j, k, l, m, n, o, p;
            d = "function" == typeof jQuery ? jQuery : a("jquery"), e = "touchactive", l = !1, k = 10, j = 0, m = {
                x: null,
                y: null
            }, g = function(a) {
                var b, c, d;
                return b = null != (c = a.originalEvent) && null != (d = c.touches) ? d[0] : void 0, b ? {
                    x: b.pageX,
                    y: b.pageY
                } : void 0
            }, i = function(a) {
                var b, c;
                return b = Math.round((new Date).getTime() / 1e3), c = b - j, a.type.match("touchstart|touchmove|touchend") && (j = b), 3 > c && a.type.match("mouse")
            }, h = function(a) {
                var b, c;
                return b = d(a), c = b.closest('*[data-touchclick="true"]'), c.length ? c : b
            }, p = function(a) {
                return m = g(a), i(a) ? void 0 : h(a.target).addClass(e)
            }, o = function(a) {
                var b;
                return b = g(a), !b || Math.abs(b.x - m.x) > k || Math.abs(b.y - m.y) > k ? h(a.target).removeClass(e) : void 0
            }, n = function(a) {
                var b;
                return b = h(a.target), b.hasClass(e) && !i(a) ? (a.type = "touchclick", b.trigger(a).removeClass(e)) : void 0
            }, f = function(a) {
                var b;
                return b = d(this), l && b[a]("click", function(a) {
                    return a.preventDefault()
                }), window.navigator.pointerEnabled ? (b[a]("pointerdown", p), b[a]("pointerup", n)) : (b[a]("touchstart mousedown", p), b[a]("touchmove mouseout", o), b[a]("touchend mouseup", n))
            }, d.event.special.touchclick = {
                setup: function() {
                    return f.call(this, "on")
                },
                teardown: function() {
                    return f.call(this, "off")
                }
            }
        }, {
            jquery: 1
        }
    ]
}, {}, [2]);