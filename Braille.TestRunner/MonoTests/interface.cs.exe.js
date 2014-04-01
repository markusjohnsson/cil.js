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
asm.x600000a = function Area() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode 0*/
st_00 = 0;
/* IL_09: IKVM.Reflection.Emit.OpCode */
return st_00; };
asm.x600000b = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x600000d = function Area() { var __braille_args__;
var st_00;
var st_01;
var st_04;
var st_02;
var st_03;
var st_05;
var st_06;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Int32 w*/
st_01 = st_00.w;
/* IL_06: IKVM.Reflection.Emit.OpCode */
st_04 = st_01;
/* IL_07: IKVM.Reflection.Emit.OpCode */
st_02 = __braille_args__[0];
/* IL_08: IKVM.Reflection.Emit.OpCode Int32 h*/
st_03 = st_02.h;
/* IL_0D: IKVM.Reflection.Emit.OpCode */
st_05 = st_03;
/* IL_0E: IKVM.Reflection.Emit.OpCode */
st_06 = (st_04 * st_05);
/* IL_0F: IKVM.Reflection.Emit.OpCode */
return st_06; };
asm.x600000c = function _ctor() { var __braille_args__;
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
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
(asm0.x600000b)(st_00);
/* IL_06: IKVM.Reflection.Emit.OpCode */
st_01 = __braille_args__[0];
/* IL_07: IKVM.Reflection.Emit.OpCode */
st_02 = __braille_args__[1];
/* IL_08: IKVM.Reflection.Emit.OpCode Int32 x*/
st_01.x = st_02;
/* IL_0D: IKVM.Reflection.Emit.OpCode */
st_03 = __braille_args__[0];
/* IL_0E: IKVM.Reflection.Emit.OpCode */
st_04 = __braille_args__[2];
/* IL_0F: IKVM.Reflection.Emit.OpCode Int32 y*/
st_03.y = st_04;
/* IL_14: IKVM.Reflection.Emit.OpCode */
st_05 = __braille_args__[0];
/* IL_15: IKVM.Reflection.Emit.OpCode */
st_06 = __braille_args__[3];
/* IL_16: IKVM.Reflection.Emit.OpCode Int32 w*/
st_05.w = st_06;
/* IL_1B: IKVM.Reflection.Emit.OpCode */
st_07 = __braille_args__[0];
/* IL_1C: IKVM.Reflection.Emit.OpCode 4*/
st_08 = __braille_args__[4];
/* IL_1E: IKVM.Reflection.Emit.OpCode Int32 h*/
st_07.h = st_08;
/* IL_23: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x600000f = function Area() { var __braille_args__;
var st_00;
var st_02;
var st_01;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Int32 r*/
st_02 = st_00.r;
/* IL_06: IKVM.Reflection.Emit.OpCode */
st_01 = __braille_args__[0];
/* IL_07: IKVM.Reflection.Emit.OpCode Int32 r*/
st_03 = st_01.r;
/* IL_0C: IKVM.Reflection.Emit.OpCode */
st_04 = (st_02 * st_03);
/* IL_0D: IKVM.Reflection.Emit.OpCode */
st_05 = st_04;
/* IL_0E: IKVM.Reflection.Emit.OpCode 3,14159265358979*/
st_06 = 3.14159265358979;
/* IL_17: IKVM.Reflection.Emit.OpCode */
st_07 = (st_05 * st_06);
/* IL_18: IKVM.Reflection.Emit.OpCode */
return st_07; };
asm.x600000e = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
(asm0.x600000b)(st_00);
/* IL_06: IKVM.Reflection.Emit.OpCode */
st_01 = __braille_args__[0];
/* IL_07: IKVM.Reflection.Emit.OpCode */
st_02 = __braille_args__[1];
/* IL_08: IKVM.Reflection.Emit.OpCode Int32 x*/
st_01.x = st_02;
/* IL_0D: IKVM.Reflection.Emit.OpCode */
st_03 = __braille_args__[0];
/* IL_0E: IKVM.Reflection.Emit.OpCode */
st_04 = __braille_args__[2];
/* IL_0F: IKVM.Reflection.Emit.OpCode Int32 y*/
st_03.y = st_04;
/* IL_14: IKVM.Reflection.Emit.OpCode */
st_05 = __braille_args__[0];
/* IL_15: IKVM.Reflection.Emit.OpCode */
st_06 = __braille_args__[3];
/* IL_16: IKVM.Reflection.Emit.OpCode Int32 r*/
st_05.r = st_06;
/* IL_1B: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x6000010 = function Main() { var __braille_args__;
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
var st_0B;
var st_0A;
var st_0C;
var st_0D;
var st_0E;
var st_0F;
var st_10;
var st_11;
var st_12;
var st_15;
var st_13;
var st_14;
var st_16;
var st_17;
var st_18;
var st_19;
var st_1A;
var st_1B;
var st_1C;
var st_1D;
var st_1F;
var st_1E;
var st_20;
var st_21;
var st_22;
var st_23;
var st_24;
var st_25;
var __braille_pos_0__;
var loc0;
var loc1;
var loc2;
 __braille_args__ = arguments;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = 0;
/* IL_01: IKVM.Reflection.Emit.OpCode */
st_01 = 0;
/* IL_02: IKVM.Reflection.Emit.OpCode 10*/
st_02 = 10;
/* IL_04: IKVM.Reflection.Emit.OpCode 20*/
st_03 = 20;
/* IL_06: IKVM.Reflection.Emit.OpCode Void .ctor(System.Int32, System.Int32, System.Int32, System.Int32)*/
st_04 = (function () { var result;
 result = new ((asm0)["Obj.Rect"])();
(asm0.x600000c)(result,cloneValue(st_00),cloneValue(st_01),cloneValue(st_02),cloneValue(st_03));
return result; })();
/* IL_0B: IKVM.Reflection.Emit.OpCode */
loc0 = st_04;
/* IL_0C: IKVM.Reflection.Emit.OpCode */
st_05 = 0;
/* IL_0D: IKVM.Reflection.Emit.OpCode */
st_06 = 0;
/* IL_0E: IKVM.Reflection.Emit.OpCode 20*/
st_07 = 20;
/* IL_10: IKVM.Reflection.Emit.OpCode Void .ctor(System.Int32, System.Int32, System.Int32)*/
st_08 = (function () { var result;
 result = new ((asm0)["Obj.Circle"])();
(asm0.x600000e)(result,cloneValue(st_05),cloneValue(st_06),cloneValue(st_07));
return result; })();
/* IL_15: IKVM.Reflection.Emit.OpCode */
loc1 = st_08;
/* IL_16: IKVM.Reflection.Emit.OpCode */
st_09 = loc0;
/* IL_17: IKVM.Reflection.Emit.OpCode Double Area()*/
st_0B = (st_09.vtable.x600000a)(st_09);
/* IL_1C: IKVM.Reflection.Emit.OpCode */
st_0A = loc1;
/* IL_1D: IKVM.Reflection.Emit.OpCode Double Area()*/
st_0C = (st_0A.vtable.x600000a)(st_0A);
/* IL_22: IKVM.Reflection.Emit.OpCode */
st_0D = (st_0B + st_0C);
/* IL_23: IKVM.Reflection.Emit.OpCode */
loc2 = st_0D;
/* IL_24: IKVM.Reflection.Emit.OpCode */
st_0E = loc2;
/* IL_25: IKVM.Reflection.Emit.OpCode 0*/
st_0F = 0;
/* IL_2E: IKVM.Reflection.Emit.OpCode IL_32*/
if (st_0E === st_0F){
__braille_pos_0__ = 0x32;continue;
}
/* IL_30: IKVM.Reflection.Emit.OpCode */
st_10 = 1;
/* IL_31: IKVM.Reflection.Emit.OpCode */
return st_10;
case 0x32:
/* IL_32: IKVM.Reflection.Emit.OpCode */
st_11 = loc0;
/* IL_33: IKVM.Reflection.Emit.OpCode Obj.Rect*/
st_12 = st_11;
/* IL_38: IKVM.Reflection.Emit.OpCode Double Area()*/
st_15 = (asm0.x600000d)(st_12);
/* IL_3D: IKVM.Reflection.Emit.OpCode */
st_13 = loc1;
/* IL_3E: IKVM.Reflection.Emit.OpCode Obj.Circle*/
st_14 = st_13;
/* IL_43: IKVM.Reflection.Emit.OpCode Double Area()*/
st_16 = (asm0.x600000f)(st_14);
/* IL_48: IKVM.Reflection.Emit.OpCode */
st_17 = (st_15 + st_16);
/* IL_49: IKVM.Reflection.Emit.OpCode */
loc2 = st_17;
/* IL_4A: IKVM.Reflection.Emit.OpCode */
st_18 = loc2;
/* IL_4B: IKVM.Reflection.Emit.OpCode 1456,63706143592*/
st_19 = 1456.63706143592;
/* IL_54: IKVM.Reflection.Emit.OpCode */
st_1A = (st_18 - st_19);
/* IL_55: IKVM.Reflection.Emit.OpCode 1E-06*/
st_1B = 1E-06;
/* IL_5E: IKVM.Reflection.Emit.OpCode IL_62*/
if (st_1A <= st_1B){
__braille_pos_0__ = 0x62;continue;
}
/* IL_60: IKVM.Reflection.Emit.OpCode */
st_1C = 2;
/* IL_61: IKVM.Reflection.Emit.OpCode */
return st_1C;
case 0x62:
/* IL_62: IKVM.Reflection.Emit.OpCode */
st_1D = loc0;
/* IL_63: IKVM.Reflection.Emit.OpCode Double Area()*/
st_1F = ((st_1D)["Obj.Measurable"].x6000009)(st_1D);
/* IL_68: IKVM.Reflection.Emit.OpCode */
st_1E = loc1;
/* IL_69: IKVM.Reflection.Emit.OpCode Double Area()*/
st_20 = ((st_1E)["Obj.Measurable"].x6000009)(st_1E);
/* IL_6E: IKVM.Reflection.Emit.OpCode */
st_21 = (st_1F + st_20);
/* IL_6F: IKVM.Reflection.Emit.OpCode */
loc2 = st_21;
/* IL_70: IKVM.Reflection.Emit.OpCode */
st_22 = loc2;
/* IL_71: IKVM.Reflection.Emit.OpCode 0*/
st_23 = 0;
/* IL_7A: IKVM.Reflection.Emit.OpCode IL_7E*/
if (st_22 === st_23){
__braille_pos_0__ = 0x7E;continue;
}
/* IL_7C: IKVM.Reflection.Emit.OpCode */
st_24 = 3;
/* IL_7D: IKVM.Reflection.Emit.OpCode */
return st_24;
case 0x7E:
/* IL_7E: IKVM.Reflection.Emit.OpCode */
st_25 = 0;
/* IL_7F: IKVM.Reflection.Emit.OpCode */
return st_25;
}
} };
asm.x6000011 = function _ctor() { var __braille_args__;
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
 function Measurable() { 
  };
Measurable.prototype = { 
 
};;
Measurable.IsValueType = false;
Measurable.prototype.vtable = { 
'x6000009': asm.x6000009 
};;
return Measurable; })();
(asm)["Obj.Measurable"] = self;
self = (function () { 
 function Obj() { 
  };
Obj.prototype = { 
 
};;
Obj.IsValueType = false;
Obj.prototype.vtable = { 
'x600000a': asm.x600000a,
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
(Obj.prototype)["Obj.Measurable"] = { 
'x6000009': asm.x600000a 
};;
return Obj; })();
(asm)["Obj.Obj"] = self;
self = (function () { 
 function Rect() { 
  };
Rect.prototype = new ((asm)["Obj.Obj"])();;
Rect.IsValueType = false;
Rect.prototype.x = 0;;
Rect.prototype.y = 0;;
Rect.prototype.w = 0;;
Rect.prototype.h = 0;;
Rect.prototype.vtable = { 
'x600000a': asm.x600000a,
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
(Rect.prototype)["Obj.Measurable"] = { 
'x6000009': asm.x600000a 
};;
return Rect; })();
(asm)["Obj.Rect"] = self;
self = (function () { 
 function Circle() { 
  };
Circle.prototype = new ((asm)["Obj.Obj"])();;
Circle.IsValueType = false;
Circle.prototype.x = 0;;
Circle.prototype.y = 0;;
Circle.prototype.r = 0;;
Circle.prototype.vtable = { 
'x600000a': asm.x600000a,
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
(Circle.prototype)["Obj.Measurable"] = { 
'x6000009': asm.x600000a 
};;
return Circle; })();
(asm)["Obj.Circle"] = self;
self = (function () { 
 function Test() { 
  };
Test.prototype = { 
 
};;
Test.IsValueType = false;
Test.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return Test; })();
(asm)["Obj.Test"] = self;
asm.entryPoint = asm.x6000010; })(asm0 || (asm0 = {}))