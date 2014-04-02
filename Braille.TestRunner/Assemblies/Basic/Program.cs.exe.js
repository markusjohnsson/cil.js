var asm0;
(function (a) {
    var c; a.x6000002 = function () { }; a.x6000008 = function () { }; a.x6000009 = function () { braille_test_log("Hello from assembly A") }; a.x600000a = function () { }; c = function () { function b() { } b.prototype = {}; b.IsValueType = !1; b.prototype.vtable = { x6000002: a.x6000002, x6000003: a.x6000003, x6000006: a.x6000006 }; return b }(); a.TestLog = c; c = function () { function b() { } b.prototype = {}; b.IsValueType = !1; b.prototype.vtable = { x6000002: a.x6000002, x6000003: a.x6000003, x6000006: a.x6000006 }; return b }(); a.TestHelper = c; c = function () {
        function b() { } b.prototype =
        {}; b.IsValueType = !1; b.prototype.vtable = { x6000002: a.x6000002, x6000003: a.x6000003, x6000006: a.x6000006 }; return b
    }(); a.A = c
})(asm0 || (asm0 = {})); var asm1;
(function (a) {
    var c; a.x6000002 = function () { }; a.x6000008 = function () { }; a.x6000009 = function () { var a; a = new asm0.A; asm0.x600000a(a); asm0.x6000009(a) }; a.x600000a = function () { }; c = function () { function b() { } b.prototype = {}; b.IsValueType = !1; b.prototype.vtable = { x6000002: a.x6000002, x6000003: a.x6000003, x6000006: a.x6000006 }; return b }(); a.TestLog = c; c = function () { function b() { } b.prototype = {}; b.IsValueType = !1; b.prototype.vtable = { x6000002: a.x6000002, x6000003: a.x6000003, x6000006: a.x6000006 }; return b }(); a.TestHelper = c; c = function () {
        function b() { }
        b.prototype = {}; b.IsValueType = !1; b.prototype.vtable = { x6000002: a.x6000002, x6000003: a.x6000003, x6000006: a.x6000006 }; return b
    }(); a.Program = c; a.entryPoint = a.x6000009
})(asm1 || (asm1 = {})); asm1.entryPoint();