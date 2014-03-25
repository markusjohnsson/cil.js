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
asm.x6000001 = function () { 
  };
asm.x6000002 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000003 = function () { 
  };
asm.x6000005 = function () { 
  };
asm.x6000006 = function () { 
  };
asm.x6000004 = function () { 
  };
asm.x6000007 = function () { 
  };
asm.x6000008 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000009 = function () { 
  };
asm.x600000a = function TestMono_IBase_Do() { var __braille_args__;
var st_01;
var st_00;
var st_02;
var st_03;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.1 */
st_01 = 1;
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: callvirt Int32 Do()*/
st_02 = (st_00.vtable.x600000b)(st_00);
/* IL_07: add */
st_03 = (st_01 + st_02);
/* IL_08: ret */
return st_03; };
asm.x600000b = function Do() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.1 */
st_00 = 1;
/* IL_01: ret */
return st_00; };
asm.x600000c = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000d = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x600000c)(st_00);
/* IL_06: ret */
return ; };
asm.x600000e = function Main() { var __braille_args__;
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
var st_0C;
var st_0D;
var st_0E;
var st_0F;
var st_10;
var st_11;
var st_12;
var st_13;
var st_14;
var st_15;
var st_16;
var __braille_pos_0__;
var loc0;
var loc1;
var loc2;
var loc3;
 __braille_args__ = arguments;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new ((asm0)["TestMono.Derived"])();
(asm0.x600000d)(result);
return result; })();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: ldloc.0 */
st_01 = loc0;
/* IL_07: callvirt Int32 Do()*/
st_02 = ((st_01)["TestMono.IBase"].x6000009)(st_01);
/* IL_0C: ldc.i4.2 */
st_03 = 2;
/* IL_0D: beq.s IL_11*/
if (st_02 === st_03){
__braille_pos_0__ = 0x11;continue;
}
/* IL_0F: ldc.i4.1 */
st_04 = 1;
/* IL_10: ret */
return st_04;
case 0x11:
/* IL_11: ldloc.0 */
st_05 = loc0;
/* IL_12: stloc.1 */
loc1 = st_05;
/* IL_13: ldloc.1 */
st_06 = loc1;
/* IL_14: callvirt Int32 Do()*/
st_07 = ((st_06)["TestMono.IBase"].x6000009)(st_06);
/* IL_19: ldc.i4.2 */
st_08 = 2;
/* IL_1A: beq.s IL_1E*/
if (st_07 === st_08){
__braille_pos_0__ = 0x1E;continue;
}
/* IL_1C: ldc.i4.2 */
st_09 = 2;
/* IL_1D: ret */
return st_09;
case 0x1E:
/* IL_1E: ldloc.0 */
st_0A = loc0;
/* IL_1F: castclass TestMono.Derived*/
st_0B = st_0A;
/* IL_24: stloc.2 */
loc2 = st_0B;
/* IL_25: ldloc.2 */
st_0C = loc2;
/* IL_26: callvirt Int32 Do()*/
st_0D = (st_0C.vtable.x600000b)(st_0C);
/* IL_2B: ldc.i4.1 */
st_0E = 1;
/* IL_2C: beq.s IL_30*/
if (st_0D === st_0E){
__braille_pos_0__ = 0x30;continue;
}
/* IL_2E: ldc.i4.3 */
st_0F = 3;
/* IL_2F: ret */
return st_0F;
case 0x30:
/* IL_30: ldloc.0 */
st_10 = loc0;
/* IL_31: castclass TestMono.Base*/
st_11 = st_10;
/* IL_36: stloc.3 */
loc3 = st_11;
/* IL_37: ldloc.3 */
st_12 = loc3;
/* IL_38: callvirt Int32 Do()*/
st_13 = (st_12.vtable.x600000b)(st_12);
/* IL_3D: ldc.i4.1 */
st_14 = 1;
/* IL_3E: beq.s IL_42*/
if (st_13 === st_14){
__braille_pos_0__ = 0x42;continue;
}
/* IL_40: ldc.i4.4 */
st_15 = 4;
/* IL_41: ret */
return st_15;
case 0x42:
/* IL_42: ldc.i4.0 */
st_16 = 0;
/* IL_43: ret */
return st_16;
}
} };
asm.x600000f = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
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
 function IBase() { 
  };
IBase.prototype = { 
 
};;
IBase.IsValueType = false;
IBase.prototype.vtable = { 
'x6000009': asm.x6000009 
};;
return IBase; })();
(asm)["TestMono.IBase"] = self;
self = (function () { 
 function IDerived() { 
  };
IDerived.prototype = { 
 
};;
IDerived.IsValueType = false;
IDerived.prototype.vtable = { 
 
};;
return IDerived; })();
(asm)["TestMono.IDerived"] = self;
self = (function () { 
 function Base() { 
  };
Base.prototype = { 
 
};;
Base.IsValueType = false;
Base.prototype.vtable = { 
'x600000b': asm.x600000b,
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
(Base.prototype)["TestMono.IBase"] = { 
'x6000009': asm.x600000a 
};;
return Base; })();
(asm)["TestMono.Base"] = self;
self = (function () { 
 function Derived() { 
  };
Derived.prototype = new ((asm)["TestMono.Base"])();;
Derived.IsValueType = false;
Derived.prototype.vtable = { 
'x600000b': asm.x600000b,
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
(Derived.prototype)["TestMono.IBase"] = { 
'x6000009': asm.x600000a 
};;
(Derived.prototype)["TestMono.IDerived"] = { 
 
};;
return Derived; })();
(asm)["TestMono.Derived"] = self;
self = (function () { 
 function Class1() { 
  };
Class1.prototype = { 
 
};;
Class1.IsValueType = false;
Class1.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return Class1; })();
(asm)["TestMono.Class1"] = self;
asm.entryPoint = asm.x600000e; })(asm0 || (asm0 = {}))