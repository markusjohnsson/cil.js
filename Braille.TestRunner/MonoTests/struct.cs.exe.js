var g;
(function (f) {
    function k(b) { if ("number" === typeof b) return b; if ("function" === typeof b) return b; var c = {}, d; for (d in b) b.hasOwnProperty(d) && (c[d] = b[d]); return c } var h; f.k = function () { }; f.l = function () { }; f.f = function () { var b; b = new g.b; g.d(k({ w: function (c) { b = c }, r: function () { return b } }), k(0), k(0)); b.z = 0; return b }; f.g = function () {
        var b, c, d; b = arguments; for (c = 0; 0 <= c;) switch (c) {
            case 0: c = { w: function (a) { b[0] = a }, r: function () { return b[0] } }; c = c.a().x; d = { w: function (a) { b[0] = a }, r: function () { return b[0] } }; d = d.a().y; if (c !=
            d) { c = 41; continue } c = { w: function (a) { b[0] = a }, r: function () { return b[0] } }; c = c.a().y; d = { w: function (a) { b[0] = a }, r: function () { return b[0] } }; d = d.a().z; if (c != d) { c = 41; continue } c = { w: function (a) { b[0] = a }, r: function () { return b[0] } }; c = c.a().z; if (!c) { c = 43; continue } case 41: return 1; case 43: return c = { w: function (a) { b[0] = a }, r: function () { return b[0] } }, c.a().x = 1, c = { w: function (a) { b[0] = a }, r: function () { return b[0] } }, c.a().y = 2, c = { w: function (a) { b[0] = a }, r: function () { return b[0] } }, c.a().z = 3, 0
        }
    }; f.d = function () {
        var b; b = arguments;
        b[0].a().x = b[1]; b[0].a().y = b[2]; b[0].a().z = 5
    }; f.h = function () {
        var b, c, d, a, e; b = new g.b; c = new g.b; d = new g.b; for (a = 0; 0 <= a;) switch (a) {
            case 0: a = { w: function (a) { b = a }, r: function () { return b } }; g.d(k(a), k(10), k(20)); c = a = b; a = { w: function (a) { c = a }, r: function () { return c } }; a = a.a().x; if (10 === a) { a = 26; continue } return 1; case 26: a = { w: function (a) { c = a }, r: function () { return c } }; a = a.a().y; if (20 === a) { a = 39; continue } return 2; case 39: a = { w: function (a) { c = a }, r: function () { return c } }; a = a.a().z; if (5 === a) { a = 51; continue } return 3; case 51: a =
            { w: function (a) { b = a }, r: function () { return b } }; a = a.a().x; if (10 === a) { a = 64; continue } return 4; case 64: a = { w: function (a) { b = a }, r: function () { return b } }; a = a.a().y; if (20 === a) { a = 77; continue } return 5; case 77: a = { w: function (a) { b = a }, r: function () { return b } }; a = a.a().z; if (5 === a) { a = 89; continue } return 6; case 89: a = { w: function (a) { b = a }, r: function () { return b } }; a.a().z = 7; a = { w: function (a) { b = a }, r: function () { return b } }; a = a.a().z; if (7 === a) { a = 109; continue } return 7; case 109: a = { w: function (a) { c = a }, r: function () { return c } }; a = a.a().x;
                if (10 === a) { a = 122; continue } return 8; case 122: d = a = g.f(); a = { w: function (a) { d = a }, r: function () { return d } }; a = a.a().x; e = { w: function (a) { d = a }, r: function () { return d } }; e = e.a().y; if (a != e) { a = 169; continue } a = { w: function (a) { d = a }, r: function () { return d } }; a = a.a().y; e = { w: function (a) { d = a }, r: function () { return d } }; e = e.a().z; if (a != e) { a = 169; continue } a = { w: function (a) { d = a }, r: function () { return d } }; a = a.a().z; if (!a) { a = 172; continue } case 169: return 9; case 172: a = d; a = g.g(k(a)); if (!a) { a = 183; continue } return 10; case 183: a = {
                    w: function (a) {
                        d =
                        a
                    }, r: function () { return d }
                }; a = a.a().x; e = { w: function (a) { d = a }, r: function () { return d } }; e = e.a().y; if (a != e) { a = 224; continue } a = { w: function (a) { d = a }, r: function () { return d } }; a = a.a().y; e = { w: function (a) { d = a }, r: function () { return d } }; e = e.a().z; if (a != e) { a = 224; continue } a = { w: function (a) { d = a }, r: function () { return d } }; a = a.a().z; if (!a) { a = 227; continue } case 224: return 11; case 227: return 0
        }
    }; f.m = function () { }; h = function () { function b() { } b.prototype = {}; b.c = !1; return b }(); f.j = h; h = function () {
        function b() { } b.prototype = {}; b.c = !1;
        return b
    }(); f.i = h; h = function () { function b() { } b.prototype = {}; b.c = !0; b.prototype.x = 0; b.prototype.y = 0; b.prototype.z = 0; return b }(); f.b = h; h = function () { function b() { } b.prototype = {}; b.c = !1; return b }(); f.test = h; f.e = f.h
})(g || (g = {})); asm.e();