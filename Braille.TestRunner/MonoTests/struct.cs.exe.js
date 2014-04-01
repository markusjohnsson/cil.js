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
asm.x600000a = function get_zerop() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
 __braille_args__ = arguments;
loc0 = new (asm0.Point)();
/* IL_00: ldloca.s 0*/
st_00 = { 
'w': function () { 
 loc0 = (arguments)[0]; },
'r': function () { 
 return loc0; } 
};
/* IL_02: ldc.i4.0 */
st_01 = 0;
/* IL_03: ldc.i4.0 */
st_02 = 0;
/* IL_04: call Void .ctor(System.Int32, System.Int32)*/
(asm0.x6000009)(cloneValue(st_00),cloneValue(st_01),cloneValue(st_02));
/* IL_09: ldloca.s 0*/
st_03 = { 
'w': function () { 
 loc0 = (arguments)[0]; },
'r': function () { 
 return loc0; } 
};
/* IL_0B: ldc.i4.0 */
st_04 = 0;
/* IL_0C: stfld Int32 z*/
(st_03.r)().z = st_04;
/* IL_11: ldloc.0 */
st_05 = loc0;
/* IL_12: ret */
return st_05; };
asm.x600000b = function struct_param() { var __braille_args__;
var st_00;
var st_02;
var st_01;
var st_03;
var st_04;
var st_06;
var st_05;
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
var __braille_pos_0__;
 __braille_args__ = arguments;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: ldarga.s 0*/
st_00 = { 
'w': function () { 
 __braille_args__[0] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[0]; } 
};
/* IL_02: ldfld Int32 x*/
st_02 = (st_00.r)().x;
/* IL_07: ldarga.s 0*/
st_01 = { 
'w': function () { 
 __braille_args__[0] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[0]; } 
};
/* IL_09: ldfld Int32 y*/
st_03 = (st_01.r)().y;
/* IL_0E: bne.un.s IL_29*/
if (st_02 != st_03){
__braille_pos_0__ = 0x29;continue;
}
/* IL_10: ldarga.s 0*/
st_04 = { 
'w': function () { 
 __braille_args__[0] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[0]; } 
};
/* IL_12: ldfld Int32 y*/
st_06 = (st_04.r)().y;
/* IL_17: ldarga.s 0*/
st_05 = { 
'w': function () { 
 __braille_args__[0] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[0]; } 
};
/* IL_19: ldfld Int32 z*/
st_07 = (st_05.r)().z;
/* IL_1E: bne.un.s IL_29*/
if (st_06 != st_07){
__braille_pos_0__ = 0x29;continue;
}
/* IL_20: ldarga.s 0*/
st_08 = { 
'w': function () { 
 __braille_args__[0] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[0]; } 
};
/* IL_22: ldfld Int32 z*/
st_09 = (st_08.r)().z;
/* IL_27: brfalse.s IL_2B*/
if ((!st_09)){
__braille_pos_0__ = 0x2B;continue;
}
case 0x29:
/* IL_29: ldc.i4.1 */
st_0A = 1;
/* IL_2A: ret */
return st_0A;
case 0x2B:
/* IL_2B: ldarga.s 0*/
st_0B = { 
'w': function () { 
 __braille_args__[0] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[0]; } 
};
/* IL_2D: ldc.i4.1 */
st_0C = 1;
/* IL_2E: stfld Int32 x*/
(st_0B.r)().x = st_0C;
/* IL_33: ldarga.s 0*/
st_0D = { 
'w': function () { 
 __braille_args__[0] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[0]; } 
};
/* IL_35: ldc.i4.2 */
st_0E = 2;
/* IL_36: stfld Int32 y*/
(st_0D.r)().y = st_0E;
/* IL_3B: ldarga.s 0*/
st_0F = { 
'w': function () { 
 __braille_args__[0] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[0]; } 
};
/* IL_3D: ldc.i4.3 */
st_10 = 3;
/* IL_3E: stfld Int32 z*/
(st_0F.r)().z = st_10;
/* IL_43: ldc.i4.0 */
st_11 = 0;
/* IL_44: ret */
return st_11;
}
} };
asm.x6000009 = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: stfld Int32 x*/
(st_00.r)().x = st_01;
/* IL_07: ldarg.0 */
st_02 = __braille_args__[0];
/* IL_08: ldarg.2 */
st_03 = __braille_args__[2];
/* IL_09: stfld Int32 y*/
(st_02.r)().y = st_03;
/* IL_0E: ldarg.0 */
st_04 = __braille_args__[0];
/* IL_0F: ldc.i4.5 */
st_05 = 5;
/* IL_10: stfld Int32 z*/
(st_04.r)().z = st_05;
/* IL_15: ret */
return ; };
asm.x600000c = function Main() { var __braille_args__;
var loc0;
var loc1;
var loc2;
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
var st_19;
var st_1A;
var st_1B;
var st_1C;
var st_1D;
var st_1E;
var st_1F;
var st_20;
var st_21;
var st_22;
var st_23;
var st_24;
var st_25;
var st_26;
var st_27;
var st_29;
var st_28;
var st_2A;
var st_2B;
var st_2D;
var st_2C;
var st_2E;
var st_2F;
var st_30;
var st_31;
var st_32;
var st_33;
var st_34;
var st_35;
var st_37;
var st_36;
var st_38;
var st_39;
var st_3B;
var st_3A;
var st_3C;
var st_3D;
var st_3E;
var st_3F;
var st_40;
var __braille_pos_0__;
 __braille_args__ = arguments;
loc0 = new (asm0.Point)();
loc1 = new (asm0.Point)();
loc2 = new (asm0.Point)();
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: ldloca.s 0*/
st_00 = { 
'w': function () { 
 loc0 = (arguments)[0]; },
'r': function () { 
 return loc0; } 
};
/* IL_02: ldc.i4.s 10*/
st_01 = 10;
/* IL_04: ldc.i4.s 20*/
st_02 = 20;
/* IL_06: call Void .ctor(System.Int32, System.Int32)*/
(asm0.x6000009)(cloneValue(st_00),cloneValue(st_01),cloneValue(st_02));
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: stloc.1 */
loc1 = st_03;
/* IL_0D: ldloca.s 1*/
st_04 = { 
'w': function () { 
 loc1 = (arguments)[0]; },
'r': function () { 
 return loc1; } 
};
/* IL_0F: ldfld Int32 x*/
st_05 = (st_04.r)().x;
/* IL_14: ldc.i4.s 10*/
st_06 = 10;
/* IL_16: beq.s IL_1A*/
if (st_05 === st_06){
__braille_pos_0__ = 0x1A;continue;
}
/* IL_18: ldc.i4.1 */
st_07 = 1;
/* IL_19: ret */
return st_07;
case 0x1A:
/* IL_1A: ldloca.s 1*/
st_08 = { 
'w': function () { 
 loc1 = (arguments)[0]; },
'r': function () { 
 return loc1; } 
};
/* IL_1C: ldfld Int32 y*/
st_09 = (st_08.r)().y;
/* IL_21: ldc.i4.s 20*/
st_0A = 20;
/* IL_23: beq.s IL_27*/
if (st_09 === st_0A){
__braille_pos_0__ = 0x27;continue;
}
/* IL_25: ldc.i4.2 */
st_0B = 2;
/* IL_26: ret */
return st_0B;
case 0x27:
/* IL_27: ldloca.s 1*/
st_0C = { 
'w': function () { 
 loc1 = (arguments)[0]; },
'r': function () { 
 return loc1; } 
};
/* IL_29: ldfld Int32 z*/
st_0D = (st_0C.r)().z;
/* IL_2E: ldc.i4.5 */
st_0E = 5;
/* IL_2F: beq.s IL_33*/
if (st_0D === st_0E){
__braille_pos_0__ = 0x33;continue;
}
/* IL_31: ldc.i4.3 */
st_0F = 3;
/* IL_32: ret */
return st_0F;
case 0x33:
/* IL_33: ldloca.s 0*/
st_10 = { 
'w': function () { 
 loc0 = (arguments)[0]; },
'r': function () { 
 return loc0; } 
};
/* IL_35: ldfld Int32 x*/
st_11 = (st_10.r)().x;
/* IL_3A: ldc.i4.s 10*/
st_12 = 10;
/* IL_3C: beq.s IL_40*/
if (st_11 === st_12){
__braille_pos_0__ = 0x40;continue;
}
/* IL_3E: ldc.i4.4 */
st_13 = 4;
/* IL_3F: ret */
return st_13;
case 0x40:
/* IL_40: ldloca.s 0*/
st_14 = { 
'w': function () { 
 loc0 = (arguments)[0]; },
'r': function () { 
 return loc0; } 
};
/* IL_42: ldfld Int32 y*/
st_15 = (st_14.r)().y;
/* IL_47: ldc.i4.s 20*/
st_16 = 20;
/* IL_49: beq.s IL_4D*/
if (st_15 === st_16){
__braille_pos_0__ = 0x4D;continue;
}
/* IL_4B: ldc.i4.5 */
st_17 = 5;
/* IL_4C: ret */
return st_17;
case 0x4D:
/* IL_4D: ldloca.s 0*/
st_18 = { 
'w': function () { 
 loc0 = (arguments)[0]; },
'r': function () { 
 return loc0; } 
};
/* IL_4F: ldfld Int32 z*/
st_19 = (st_18.r)().z;
/* IL_54: ldc.i4.5 */
st_1A = 5;
/* IL_55: beq.s IL_59*/
if (st_19 === st_1A){
__braille_pos_0__ = 0x59;continue;
}
/* IL_57: ldc.i4.6 */
st_1B = 6;
/* IL_58: ret */
return st_1B;
case 0x59:
/* IL_59: ldloca.s 0*/
st_1C = { 
'w': function () { 
 loc0 = (arguments)[0]; },
'r': function () { 
 return loc0; } 
};
/* IL_5B: ldc.i4.7 */
st_1D = 7;
/* IL_5C: stfld Int32 z*/
(st_1C.r)().z = st_1D;
/* IL_61: ldloca.s 0*/
st_1E = { 
'w': function () { 
 loc0 = (arguments)[0]; },
'r': function () { 
 return loc0; } 
};
/* IL_63: ldfld Int32 z*/
st_1F = (st_1E.r)().z;
/* IL_68: ldc.i4.7 */
st_20 = 7;
/* IL_69: beq.s IL_6D*/
if (st_1F === st_20){
__braille_pos_0__ = 0x6D;continue;
}
/* IL_6B: ldc.i4.7 */
st_21 = 7;
/* IL_6C: ret */
return st_21;
case 0x6D:
/* IL_6D: ldloca.s 1*/
st_22 = { 
'w': function () { 
 loc1 = (arguments)[0]; },
'r': function () { 
 return loc1; } 
};
/* IL_6F: ldfld Int32 x*/
st_23 = (st_22.r)().x;
/* IL_74: ldc.i4.s 10*/
st_24 = 10;
/* IL_76: beq.s IL_7A*/
if (st_23 === st_24){
__braille_pos_0__ = 0x7A;continue;
}
/* IL_78: ldc.i4.8 */
st_25 = 8;
/* IL_79: ret */
return st_25;
case 0x7A:
/* IL_7A: call Point get_zerop()*/
st_26 = (asm0.x600000a)();
/* IL_7F: stloc.2 */
loc2 = st_26;
/* IL_80: ldloca.s 2*/
st_27 = { 
'w': function () { 
 loc2 = (arguments)[0]; },
'r': function () { 
 return loc2; } 
};
/* IL_82: ldfld Int32 x*/
st_29 = (st_27.r)().x;
/* IL_87: ldloca.s 2*/
st_28 = { 
'w': function () { 
 loc2 = (arguments)[0]; },
'r': function () { 
 return loc2; } 
};
/* IL_89: ldfld Int32 y*/
st_2A = (st_28.r)().y;
/* IL_8E: bne.un.s IL_A9*/
if (st_29 != st_2A){
__braille_pos_0__ = 0xA9;continue;
}
/* IL_90: ldloca.s 2*/
st_2B = { 
'w': function () { 
 loc2 = (arguments)[0]; },
'r': function () { 
 return loc2; } 
};
/* IL_92: ldfld Int32 y*/
st_2D = (st_2B.r)().y;
/* IL_97: ldloca.s 2*/
st_2C = { 
'w': function () { 
 loc2 = (arguments)[0]; },
'r': function () { 
 return loc2; } 
};
/* IL_99: ldfld Int32 z*/
st_2E = (st_2C.r)().z;
/* IL_9E: bne.un.s IL_A9*/
if (st_2D != st_2E){
__braille_pos_0__ = 0xA9;continue;
}
/* IL_A0: ldloca.s 2*/
st_2F = { 
'w': function () { 
 loc2 = (arguments)[0]; },
'r': function () { 
 return loc2; } 
};
/* IL_A2: ldfld Int32 z*/
st_30 = (st_2F.r)().z;
/* IL_A7: brfalse.s IL_AC*/
if ((!st_30)){
__braille_pos_0__ = 0xAC;continue;
}
case 0xA9:
/* IL_A9: ldc.i4.s 9*/
st_31 = 9;
/* IL_AB: ret */
return st_31;
case 0xAC:
/* IL_AC: ldloc.2 */
st_32 = loc2;
/* IL_AD: call Int32 struct_param(Point)*/
st_33 = (asm0.x600000b)(cloneValue(st_32));
/* IL_B2: brfalse.s IL_B7*/
if ((!st_33)){
__braille_pos_0__ = 0xB7;continue;
}
/* IL_B4: ldc.i4.s 10*/
st_34 = 10;
/* IL_B6: ret */
return st_34;
case 0xB7:
/* IL_B7: ldloca.s 2*/
st_35 = { 
'w': function () { 
 loc2 = (arguments)[0]; },
'r': function () { 
 return loc2; } 
};
/* IL_B9: ldfld Int32 x*/
st_37 = (st_35.r)().x;
/* IL_BE: ldloca.s 2*/
st_36 = { 
'w': function () { 
 loc2 = (arguments)[0]; },
'r': function () { 
 return loc2; } 
};
/* IL_C0: ldfld Int32 y*/
st_38 = (st_36.r)().y;
/* IL_C5: bne.un.s IL_E0*/
if (st_37 != st_38){
__braille_pos_0__ = 0xE0;continue;
}
/* IL_C7: ldloca.s 2*/
st_39 = { 
'w': function () { 
 loc2 = (arguments)[0]; },
'r': function () { 
 return loc2; } 
};
/* IL_C9: ldfld Int32 y*/
st_3B = (st_39.r)().y;
/* IL_CE: ldloca.s 2*/
st_3A = { 
'w': function () { 
 loc2 = (arguments)[0]; },
'r': function () { 
 return loc2; } 
};
/* IL_D0: ldfld Int32 z*/
st_3C = (st_3A.r)().z;
/* IL_D5: bne.un.s IL_E0*/
if (st_3B != st_3C){
__braille_pos_0__ = 0xE0;continue;
}
/* IL_D7: ldloca.s 2*/
st_3D = { 
'w': function () { 
 loc2 = (arguments)[0]; },
'r': function () { 
 return loc2; } 
};
/* IL_D9: ldfld Int32 z*/
st_3E = (st_3D.r)().z;
/* IL_DE: brfalse.s IL_E3*/
if ((!st_3E)){
__braille_pos_0__ = 0xE3;continue;
}
case 0xE0:
/* IL_E0: ldc.i4.s 11*/
st_3F = 11;
/* IL_E2: ret */
return st_3F;
case 0xE3:
/* IL_E3: ldc.i4.0 */
st_40 = 0;
/* IL_E4: ret */
return st_40;
}
} };
asm.x600000d = function _ctor() { var __braille_args__;
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
 function Point() { 
  };
Point.prototype = { 
 
};;
Point.IsValueType = true;
Point.prototype.x = 0;;
Point.prototype.y = 0;;
Point.prototype.z = 0;;
Point.prototype.vtable = { 
'x6000003': asm.x6000056,
'x6000006': asm.x6000057,
'x6000002': asm.x6000059 
};;
return Point; })();
asm.Point = self;
self = (function () { 
 function test() { 
  };
test.prototype = { 
 
};;
test.IsValueType = false;
test.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return test; })();
asm.test = self;
asm.entryPoint = asm.x600000c; })(asm0 || (asm0 = {}))