var asm0; (function (asm) { var self;
 
function cloneValue(v) {
    if (typeof v === 'number') return v;
    if (typeof v === 'function') return v;
    var result = {};
    for (var p in v) {
        if (v.hasOwnProperty(p))
            result[p] = v[p];
    }
    return result;
}

function tree_get(a, s) {
    if (a.length == 0) return s;
    var c = s[a[0]];
    return c && tree_get(a.slice(1), c);
}

function tree_set(a, s, v) {
    if (a.length == 1) {
        s[a[0]] = v;
    }
    else {
        var c = s[a[0]];
        if (!c) s[a[0]] = c = {};
        tree_set(a.slice(1), c, v);
    }
}
;
asm.x6000002 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x6000008 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x6000009 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x600000a = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
(asm0.x6000009)(st_00);
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x600000b = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x600000c = function Main() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var st_08;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm0.A)();
(asm0.x6000009)(result);
return result; })();
/* IL_05: IKVM.Reflection.Emit.OpCode Void AsA(System.Object)*/
(asm0.x600000d)(st_00);
/* IL_0A: IKVM.Reflection.Emit.OpCode Void .ctor()*/
st_01 = (function () { var result;
 result = new (asm0.B)();
(asm0.x600000a)(result);
return result; })();
/* IL_0F: IKVM.Reflection.Emit.OpCode Void AsA(System.Object)*/
(asm0.x600000d)(st_01);
/* IL_14: IKVM.Reflection.Emit.OpCode Void .ctor()*/
st_02 = (function () { var result;
 result = new (asm0.C)();
(asm0.x600000b)(result);
return result; })();
/* IL_19: IKVM.Reflection.Emit.OpCode Void AsA(System.Object)*/
(asm0.x600000d)(st_02);
/* IL_1E: IKVM.Reflection.Emit.OpCode Void .ctor()*/
st_03 = (function () { var result;
 result = new (asm0.A)();
(asm0.x6000009)(result);
return result; })();
/* IL_23: IKVM.Reflection.Emit.OpCode Void As[A](System.Object)*/
((asm0.x600000e)(asm0.A))(st_03);
/* IL_28: IKVM.Reflection.Emit.OpCode Void .ctor()*/
st_04 = (function () { var result;
 result = new (asm0.B)();
(asm0.x600000a)(result);
return result; })();
/* IL_2D: IKVM.Reflection.Emit.OpCode Void As[A](System.Object)*/
((asm0.x600000e)(asm0.A))(st_04);
/* IL_32: IKVM.Reflection.Emit.OpCode Void .ctor()*/
st_05 = (function () { var result;
 result = new (asm0.C)();
(asm0.x600000b)(result);
return result; })();
/* IL_37: IKVM.Reflection.Emit.OpCode Void As[A](System.Object)*/
((asm0.x600000e)(asm0.A))(st_05);
/* IL_3C: IKVM.Reflection.Emit.OpCode Void .ctor()*/
st_06 = (function () { var result;
 result = new (asm0.A)();
(asm0.x6000009)(result);
return result; })();
/* IL_41: IKVM.Reflection.Emit.OpCode Void As[B](System.Object)*/
((asm0.x600000e)(asm0.B))(st_06);
/* IL_46: IKVM.Reflection.Emit.OpCode Void .ctor()*/
st_07 = (function () { var result;
 result = new (asm0.B)();
(asm0.x600000a)(result);
return result; })();
/* IL_4B: IKVM.Reflection.Emit.OpCode Void As[B](System.Object)*/
((asm0.x600000e)(asm0.B))(st_07);
/* IL_50: IKVM.Reflection.Emit.OpCode Void .ctor()*/
st_08 = (function () { var result;
 result = new (asm0.C)();
(asm0.x600000b)(result);
return result; })();
/* IL_55: IKVM.Reflection.Emit.OpCode Void As[B](System.Object)*/
((asm0.x600000e)(asm0.B))(st_08);
/* IL_5A: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x600000d = function AsA() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var __braille_pos_0__;
 __braille_args__ = arguments;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode A*/
st_01 = (st_00 instanceof asm0.A);
/* IL_06: IKVM.Reflection.Emit.OpCode IL_0F*/
if ((!st_01)){
__braille_pos_0__ = 0xF;continue;
}
/* IL_08: IKVM.Reflection.Emit.OpCode not null*/
st_02 = "not null";
/* IL_0D: IKVM.Reflection.Emit.OpCode IL_14*/
__braille_pos_0__ = 0x14;
continue;
case 0xF:
/* IL_0F: IKVM.Reflection.Emit.OpCode null*/
st_02 = "null";
case 0x14:
/* IL_14: IKVM.Reflection.Emit.OpCode Void Log(System.Object)*/
braille_test_log(st_02);
/* IL_19: IKVM.Reflection.Emit.OpCode */
return ;
}
} };
asm.x600000e = function (T) { 
 return function As() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var __braille_pos_0__;
 __braille_args__ = arguments;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode T*/
st_01 = (st_00 instanceof T);
/* IL_06: IKVM.Reflection.Emit.OpCode T*/
st_02 = (st_01.boxed || st_01);
/* IL_0B: IKVM.Reflection.Emit.OpCode T*/
st_03 = (T.IsValueType) ? ({ 
'boxed': cloneValue(st_02),
'toString': function () { 
 return this.boxed; } 
}) : (st_02);
/* IL_10: IKVM.Reflection.Emit.OpCode IL_19*/
if ((!st_03)){
__braille_pos_0__ = 0x19;continue;
}
/* IL_12: IKVM.Reflection.Emit.OpCode not null*/
st_04 = "not null";
/* IL_17: IKVM.Reflection.Emit.OpCode IL_1E*/
__braille_pos_0__ = 0x1E;
continue;
case 0x19:
/* IL_19: IKVM.Reflection.Emit.OpCode null*/
st_04 = "null";
case 0x1E:
/* IL_1E: IKVM.Reflection.Emit.OpCode Void Log(System.Object)*/
braille_test_log(st_04);
/* IL_23: IKVM.Reflection.Emit.OpCode */
return ;
}
} }; };
asm.x600000f = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
self = (function () { 
 function TestLog() { 
  };
TestLog.prototype = { 
 
};;
TestLog.IsValueType = false;
TestLog.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return TestLog; })();
asm.TestLog = self;
self = (function () { 
 function TestHelper() { 
  };
TestHelper.prototype = { 
 
};;
TestHelper.IsValueType = false;
TestHelper.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return TestHelper; })();
asm.TestHelper = self;
self = (function () { 
 function A() { 
  };
A.prototype = { 
 
};;
A.IsValueType = false;
A.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return A; })();
asm.A = self;
self = (function () { 
 function B() { 
  };
B.prototype = new (asm.A)();;
B.IsValueType = false;
B.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return B; })();
asm.B = self;
self = (function () { 
 function C() { 
  };
C.prototype = { 
 
};;
C.IsValueType = false;
C.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return C; })();
asm.C = self;
self = (function () { 
 function Program() { 
  };
Program.prototype = { 
 
};;
Program.IsValueType = false;
Program.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return Program; })();
asm.Program = self;
asm.entryPoint = asm.x600000c; })(asm0 || (asm0 = {}))