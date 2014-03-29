var asm0; (function (asm) { var self;
 
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
asm.x600000b = function Main() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var st_08;
var st_09;
var st_0A;
var st_0B;
var __braille_pos_0__;
var loc0;
var loc1;
var loc2;
 __braille_args__ = arguments;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: IKVM.Reflection.Emit.OpCode Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm0.A)();
(asm0.x6000009)(result);
return result; })();
/* IL_05: IKVM.Reflection.Emit.OpCode */
loc0 = st_00;
/* IL_06: IKVM.Reflection.Emit.OpCode Void .ctor()*/
st_01 = (function () { var result;
 result = new (asm0.B)();
(asm0.x600000a)(result);
return result; })();
/* IL_0B: IKVM.Reflection.Emit.OpCode */
loc1 = st_01;
/* IL_0C: IKVM.Reflection.Emit.OpCode hello*/
st_02 = "hello";
/* IL_11: IKVM.Reflection.Emit.OpCode */
loc2 = st_02;
/* IL_12: IKVM.Reflection.Emit.OpCode */
st_03 = loc0;
/* IL_13: IKVM.Reflection.Emit.OpCode A*/
st_04 = (st_03 instanceof asm0.A);
/* IL_18: IKVM.Reflection.Emit.OpCode IL_21*/
if (st_04){
__braille_pos_0__ = 0x21;continue;
}
/* IL_1A: IKVM.Reflection.Emit.OpCode false*/
st_05 = "false";
/* IL_1F: IKVM.Reflection.Emit.OpCode IL_26*/
__braille_pos_0__ = 0x26;
continue;
case 0x21:
/* IL_21: IKVM.Reflection.Emit.OpCode true*/
st_05 = "true";
case 0x26:
/* IL_26: IKVM.Reflection.Emit.OpCode Void Log(System.Object)*/
braille_test_log(st_05);
/* IL_2B: IKVM.Reflection.Emit.OpCode */
st_06 = loc1;
/* IL_2C: IKVM.Reflection.Emit.OpCode A*/
st_07 = (st_06 instanceof asm0.A);
/* IL_31: IKVM.Reflection.Emit.OpCode IL_3A*/
if (st_07){
__braille_pos_0__ = 0x3A;continue;
}
/* IL_33: IKVM.Reflection.Emit.OpCode false*/
st_08 = "false";
/* IL_38: IKVM.Reflection.Emit.OpCode IL_3F*/
__braille_pos_0__ = 0x3F;
continue;
case 0x3A:
/* IL_3A: IKVM.Reflection.Emit.OpCode true*/
st_08 = "true";
case 0x3F:
/* IL_3F: IKVM.Reflection.Emit.OpCode Void Log(System.Object)*/
braille_test_log(st_08);
/* IL_44: IKVM.Reflection.Emit.OpCode */
st_09 = loc2;
/* IL_45: IKVM.Reflection.Emit.OpCode A*/
st_0A = (st_09 instanceof asm0.A);
/* IL_4A: IKVM.Reflection.Emit.OpCode IL_53*/
if (st_0A){
__braille_pos_0__ = 0x53;continue;
}
/* IL_4C: IKVM.Reflection.Emit.OpCode false*/
st_0B = "false";
/* IL_51: IKVM.Reflection.Emit.OpCode IL_58*/
__braille_pos_0__ = 0x58;
continue;
case 0x53:
/* IL_53: IKVM.Reflection.Emit.OpCode true*/
st_0B = "true";
case 0x58:
/* IL_58: IKVM.Reflection.Emit.OpCode Void Log(System.Object)*/
braille_test_log(st_0B);
/* IL_5D: IKVM.Reflection.Emit.OpCode */
return ;
}
} };
asm.x600000c = function _ctor() { var __braille_args__;
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
asm.entryPoint = asm.x600000b; })(asm0 || (asm0 = {}))