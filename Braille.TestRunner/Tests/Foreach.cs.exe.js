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
asm.x6000009 = function GetEnumerator() { var __braille_args__;
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
var loc0;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.5 */
st_00 = 5;
/* IL_01: newarr System.Int32*/
st_01 = [  ];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_07: ldloc.0 */
st_02 = loc0;
/* IL_08: ldc.i4.0 */
st_03 = 0;
/* IL_09: ldc.i4.0 */
st_04 = 0;
/* IL_0A: stelem.i4 */
(st_02)[st_03] = st_04;
/* IL_0B: ldloc.0 */
st_05 = loc0;
/* IL_0C: ldc.i4.1 */
st_06 = 1;
/* IL_0D: ldc.i4.1 */
st_07 = 1;
/* IL_0E: stelem.i4 */
(st_05)[st_06] = st_07;
/* IL_0F: ldloc.0 */
st_08 = loc0;
/* IL_10: ldc.i4.2 */
st_09 = 2;
/* IL_11: ldc.i4.2 */
st_0A = 2;
/* IL_12: stelem.i4 */
(st_08)[st_09] = st_0A;
/* IL_13: ldloc.0 */
st_0B = loc0;
/* IL_14: ldc.i4.3 */
st_0C = 3;
/* IL_15: ldc.i4.4 */
st_0D = 4;
/* IL_16: stelem.i4 */
(st_0B)[st_0C] = st_0D;
/* IL_17: ldloc.0 */
st_0E = loc0;
/* IL_18: ldc.i4.4 */
st_0F = 4;
/* IL_19: ldc.i4.8 */
st_10 = 8;
/* IL_1A: stelem.i4 */
(st_0E)[st_0F] = st_10;
/* IL_1B: ldloc.0 */
st_11 = loc0;
/* IL_1C: newobj Void .ctor(System.Int32[])*/
st_12 = (function () { var result;
 result = new (asm0.Iter)();
(asm0.x600000b)(result,st_11);
return result; })();
/* IL_21: ret */
return st_12; };
asm.x600000a = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000c = function MoveNext() { var __braille_args__;
var st_00;
var st_01;
var st_06;
var st_02;
var st_03;
var st_04;
var st_05;
var st_07;
var st_0B;
var st_08;
var st_09;
var st_0A;
var st_0C;
var st_0D;
var _b_dup_1;
var _b_dup_9;
var loc0;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: dup */
st_06 = (st_01 = _b_dup_1 = st_00);
/* IL_02: ldfld Int32 i*/
st_02 = st_01.i;
/* IL_07: ldc.i4.1 */
st_03 = 1;
/* IL_08: add */
st_04 = (st_02 + st_03);
/* IL_09: dup */
st_07 = (st_05 = _b_dup_9 = st_04);
/* IL_0A: stloc.0 */
loc0 = st_05;
/* IL_0B: stfld Int32 i*/
st_06.i = st_07;
/* IL_10: ldloc.0 */
st_0B = loc0;
/* IL_11: ldarg.0 */
st_08 = __braille_args__[0];
/* IL_12: ldfld Int32[] nums*/
st_09 = st_08.nums;
/* IL_17: ldlen */
st_0A = st_09.length;
/* IL_18: conv.i4 */
st_0C = st_0A;
/* IL_1A: clt */
st_0D = (st_0B < st_0C) ? (1) : (0);
/* IL_1B: ret */
return st_0D; };
asm.x600000d = function get_Current() { var __braille_args__;
var st_00;
var st_02;
var st_01;
var st_03;
var st_04;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld Int32[] nums*/
st_02 = st_00.nums;
/* IL_06: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_07: ldfld Int32 i*/
st_03 = st_01.i;
/* IL_0C: ldelem.i4 */
st_04 = (st_02)[st_03];
/* IL_0D: ret */
return st_04; };
asm.x600000b = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldc.i4.m1 */
st_01 = -1;
/* IL_02: stfld Int32 i*/
st_00.i = st_01;
/* IL_07: ldarg.0 */
st_02 = __braille_args__[0];
/* IL_08: call Void .ctor()*/
/* IL_0D: ldarg.0 */
st_03 = __braille_args__[0];
/* IL_0E: ldarg.1 */
st_04 = __braille_args__[1];
/* IL_0F: stfld Int32[] nums*/
st_03.nums = st_04;
/* IL_14: ret */
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
var loc0;
var loc2;
 __braille_args__ = arguments;
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm0.A)();
(asm0.x600000a)(result);
return result; })();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: ldloc.0 */
st_01 = loc0;
/* IL_07: callvirt Iter GetEnumerator()*/
st_02 = (asm0.x6000009)(st_01);
/* IL_0C: stloc.2 */
loc2 = st_02;
try {
__braille_pos_1__ = 0x0;
while (__braille_pos_1__ >= 0){
switch (__braille_pos_1__) {
case 0x0:
/* IL_0D: br.s IL_21*/
__braille_pos_1__ = 0x21;
continue;
case 0xF:
/* IL_0F: ldloc.2 */
st_03 = loc2;
/* IL_10: callvirt Int32 get_Current()*/
st_04 = (asm0.x600000d)(st_03);
/* IL_15: stloc.1 */
loc1 = st_04;
/* IL_16: ldloc.1 */
st_05 = loc1;
/* IL_17: box System.Int32*/
st_06 = { 
'boxed': cloneValue(st_05),
'toString': function () { 
 return this.boxed; } 
};
/* IL_1C: call Void Log(System.Object)*/
braille_test_log(st_06);
case 0x21:
/* IL_21: ldloc.2 */
st_07 = loc2;
/* IL_22: callvirt Boolean MoveNext()*/
st_08 = (asm0.x600000c)(st_07);
/* IL_27: brtrue.s IL_0F*/
if (st_08){
__braille_pos_1__ = 0xF;continue;
}
/* IL_29: leave.s IL_3C*/
__braille_pos_1__ = -1;
break;
}
}
}catch (e) {}
/* IL_3C: ret */
return ; };
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
 function Iter() { 
  };
Iter.prototype = { 
 
};;
Iter.IsValueType = false;
Iter.prototype.i = 0;;
Iter.prototype.nums = null;;
Iter.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return Iter; })();
asm.Iter = self;
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
asm.entryPoint = asm.x600000e; })(asm0 || (asm0 = {}))