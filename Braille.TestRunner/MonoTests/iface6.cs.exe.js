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
asm.x600000a = function () { 
  };
asm.x600000b = function () { 
  };
asm.x600000c = function IA_Add() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.5 */
st_00 = 5;
/* IL_01: ret */
return st_00; };
asm.x600000d = function IB_Add() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.6 */
st_00 = 6;
/* IL_01: ret */
return st_00; };
asm.x600000e = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000010 = function doom() { var __braille_args__;
 __braille_args__ = arguments;
/* IL_00: ret */
return ; };
asm.x6000011 = function Clone() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldnull */
st_00 = null;
/* IL_01: ret */
return st_00; };
asm.x6000012 = function Dispose() { var __braille_args__;
 __braille_args__ = arguments;
/* IL_00: ret */
return ; };
asm.x6000013 = function IA_Add() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.7 */
st_00 = 7;
/* IL_01: ret */
return st_00; };
asm.x6000014 = function IB_Add() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.8 */
st_00 = 8;
/* IL_01: ret */
return st_00; };
asm.x600000f = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000015 = function Test() { var __braille_args__;
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
var __braille_pos_0__;
 __braille_args__ = arguments;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldc.i4.0 */
st_01 = 0;
/* IL_02: callvirt Int32 Add(Int32)*/
st_02 = (st_00.IA.x6000009)(st_00,st_01);
/* IL_07: ldc.i4.5 */
st_03 = 5;
/* IL_08: beq.s IL_0C*/
if (st_02 === st_03){
__braille_pos_0__ = 0xC;continue;
}
/* IL_0A: ldc.i4.1 */
st_04 = 1;
/* IL_0B: ret */
return st_04;
case 0xC:
/* IL_0C: ldarg.0 */
st_05 = __braille_args__[0];
/* IL_0D: ldc.i4.0 */
st_06 = 0;
/* IL_0E: callvirt Int32 Add(Int32)*/
st_07 = (st_05.IB.x600000a)(st_05,st_06);
/* IL_13: ldc.i4.6 */
st_08 = 6;
/* IL_14: beq.s IL_18*/
if (st_07 === st_08){
__braille_pos_0__ = 0x18;continue;
}
/* IL_16: ldc.i4.1 */
st_09 = 1;
/* IL_17: ret */
return st_09;
case 0x18:
/* IL_18: ldc.i4.0 */
st_0A = 0;
/* IL_19: ret */
return st_0A;
}
} };
asm.x6000016 = function Test2() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: callvirt Void doom()*/
(st_00.IE.x600000b)(st_00);
/* IL_06: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_07: callvirt System.Object Clone()*/
st_02 = ((st_01)["System.ICloneable"].x60000c8)(st_01);
/* IL_0C: pop */
/* IL_0D: ldarg.0 */
st_03 = __braille_args__[0];
/* IL_0E: callvirt Void Dispose()*/
((st_03)["System.IDisposable"].x6000218)(st_03);
/* IL_13: ret */
return ; };
asm.x6000017 = function Main() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var loc0;
var loc1;
 __braille_args__ = arguments;
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm0.D)();
(asm0.x600000e)(result);
return result; })();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: newobj Void .ctor()*/
st_01 = (function () { var result;
 result = new (asm0.E)();
(asm0.x600000f)(result);
return result; })();
/* IL_0B: stloc.1 */
loc1 = st_01;
/* IL_0C: ldloc.1 */
st_02 = loc1;
/* IL_0D: call Int32 Test(IC)*/
st_03 = (asm0.x6000015)(st_02);
/* IL_12: pop */
/* IL_13: ldloc.1 */
st_04 = loc1;
/* IL_14: call Void Test2(IE)*/
(asm0.x6000016)(st_04);
/* IL_19: ldloc.0 */
st_05 = loc0;
/* IL_1A: call Int32 Test(IC)*/
st_06 = (asm0.x6000015)(st_05);
/* IL_1F: ret */
return st_06; };
asm.x6000018 = function _ctor() { var __braille_args__;
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
 function IA() { 
  };
IA.prototype = { 
 
};;
IA.IsValueType = false;
IA.prototype.vtable = { 
'x6000009': asm.x6000009 
};;
return IA; })();
asm.IA = self;
self = (function () { 
 function IB() { 
  };
IB.prototype = { 
 
};;
IB.IsValueType = false;
IB.prototype.vtable = { 
'x600000a': asm.x600000a 
};;
return IB; })();
asm.IB = self;
self = (function () { 
 function IC() { 
  };
IC.prototype = { 
 
};;
IC.IsValueType = false;
IC.prototype.vtable = { 
 
};;
return IC; })();
asm.IC = self;
self = (function () { 
 function IE() { 
  };
IE.prototype = { 
 
};;
IE.IsValueType = false;
IE.prototype.vtable = { 
'x600000b': asm.x600000b 
};;
return IE; })();
asm.IE = self;
self = (function () { 
 function D() { 
  };
D.prototype = { 
 
};;
D.IsValueType = false;
D.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
D.prototype.IC = { 
 
};;
D.prototype.IA = { 
'x6000009': asm.x600000c 
};;
D.prototype.IB = { 
'x600000a': asm.x600000d 
};;
return D; })();
asm.D = self;
self = (function () { 
 function E() { 
  };
E.prototype = { 
 
};;
E.IsValueType = false;
E.prototype.vtable = { 
'x6000010': asm.x6000010,
'x6000011': asm.x6000011,
'x6000012': asm.x6000012,
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
E.prototype.IE = { 
'x600000b': asm.x6000010 
};;
(E.prototype)["System.ICloneable"] = { 
'x60000c8': asm.x6000011 
};;
(E.prototype)["System.IDisposable"] = { 
'x6000218': asm.x6000012 
};;
E.prototype.IC = { 
 
};;
E.prototype.IA = { 
'x6000009': asm.x6000013 
};;
E.prototype.IB = { 
'x600000a': asm.x6000014 
};;
return E; })();
asm.E = self;
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
asm.entryPoint = asm.x6000017; })(asm0 || (asm0 = {}))