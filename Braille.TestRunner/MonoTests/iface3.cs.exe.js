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
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000008 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000a = function ICommon_DoIt() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.1 */
st_00 = 1;
/* IL_01: ret */
return st_00; };
asm.x600000b = function DoIt() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.2 */
st_00 = 2;
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
asm.x600000d = function ICommon_DoIt() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.3 */
st_00 = 3;
/* IL_01: ret */
return st_00; };
asm.x600000e = function DoIt() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.4 */
st_00 = 4;
/* IL_01: ret */
return st_00; };
asm.x600000f = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x600000c)(st_00);
/* IL_06: ret */
return ; };
asm.x6000010 = function DoIt() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.5 */
st_00 = 5;
/* IL_01: ret */
return st_00; };
asm.x6000011 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x600000f)(st_00);
/* IL_06: ret */
return ; };
asm.x6000012 = function Main() { var __braille_args__;
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
var st_17;
var st_18;
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
 result = new (asm0.ReallyDerived)();
(asm0.x6000011)(result);
return result; })();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: ldloc.0 */
st_01 = loc0;
/* IL_07: stloc.1 */
loc1 = st_01;
/* IL_08: ldloc.0 */
st_02 = loc0;
/* IL_09: stloc.2 */
loc2 = st_02;
/* IL_0A: ldloc.0 */
st_03 = loc0;
/* IL_0B: stloc.3 */
loc3 = st_03;
/* IL_0C: ldloc.0 */
st_04 = loc0;
/* IL_0D: callvirt Int32 DoIt()*/
st_05 = (st_04.vtable.x600000e)(st_04);
/* IL_12: ldc.i4.5 */
st_06 = 5;
/* IL_13: beq.s IL_17*/
if (st_05 === st_06){
__braille_pos_0__ = 0x17;continue;
}
/* IL_15: ldc.i4.1 */
st_07 = 1;
/* IL_16: ret */
return st_07;
case 0x17:
/* IL_17: ldloc.0 */
st_08 = loc0;
/* IL_18: callvirt Int32 DoIt()*/
st_09 = (st_08.ICommon.x6000009)(st_08);
/* IL_1D: ldc.i4.3 */
st_0A = 3;
/* IL_1E: beq.s IL_22*/
if (st_09 === st_0A){
__braille_pos_0__ = 0x22;continue;
}
/* IL_20: ldc.i4.2 */
st_0B = 2;
/* IL_21: ret */
return st_0B;
case 0x22:
/* IL_22: ldloc.1 */
st_0C = loc1;
/* IL_23: callvirt Int32 DoIt()*/
st_0D = (st_0C.vtable.x600000e)(st_0C);
/* IL_28: ldc.i4.5 */
st_0E = 5;
/* IL_29: beq.s IL_2D*/
if (st_0D === st_0E){
__braille_pos_0__ = 0x2D;continue;
}
/* IL_2B: ldc.i4.3 */
st_0F = 3;
/* IL_2C: ret */
return st_0F;
case 0x2D:
/* IL_2D: ldloc.2 */
st_10 = loc2;
/* IL_2E: callvirt Int32 DoIt()*/
st_11 = (st_10.vtable.x600000b)(st_10);
/* IL_33: ldc.i4.2 */
st_12 = 2;
/* IL_34: beq.s IL_38*/
if (st_11 === st_12){
__braille_pos_0__ = 0x38;continue;
}
/* IL_36: ldc.i4.4 */
st_13 = 4;
/* IL_37: ret */
return st_13;
case 0x38:
/* IL_38: ldloc.3 */
st_14 = loc3;
/* IL_39: callvirt Int32 DoIt()*/
st_15 = (st_14.ICommon.x6000009)(st_14);
/* IL_3E: ldc.i4.3 */
st_16 = 3;
/* IL_3F: beq.s IL_43*/
if (st_15 === st_16){
__braille_pos_0__ = 0x43;continue;
}
/* IL_41: ldc.i4.5 */
st_17 = 5;
/* IL_42: ret */
return st_17;
case 0x43:
/* IL_43: ldc.i4.0 */
st_18 = 0;
/* IL_44: ret */
return st_18;
}
} };
asm.x6000013 = function _ctor() { var __braille_args__;
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
 function ICommon() { 
  };
ICommon.prototype = { 
 
};;
ICommon.IsValueType = false;
ICommon.prototype.vtable = { 
'x6000009': asm.x6000009 
};;
return ICommon; })();
asm.ICommon = self;
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
Base.prototype.ICommon = { 
'x6000009': asm.x600000a 
};;
return Base; })();
asm.Base = self;
self = (function () { 
 function Derived() { 
  };
Derived.prototype = new (asm.Base)();;
Derived.IsValueType = false;
Derived.prototype.vtable = { 
'x600000e': asm.x600000e,
'x600000b': asm.x600000b,
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
Derived.prototype.ICommon = { 
'x6000009': asm.x600000d 
};;
return Derived; })();
asm.Derived = self;
self = (function () { 
 function ReallyDerived() { 
  };
ReallyDerived.prototype = new (asm.Derived)();;
ReallyDerived.IsValueType = false;
ReallyDerived.prototype.vtable = { 
'x600000e': asm.x6000010,
'x600000b': asm.x600000b,
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
ReallyDerived.prototype.ICommon = { 
'x6000009': asm.x600000d 
};;
return ReallyDerived; })();
asm.ReallyDerived = self;
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
asm.Test = self;
asm.entryPoint = asm.x6000012; })(asm0 || (asm0 = {}))