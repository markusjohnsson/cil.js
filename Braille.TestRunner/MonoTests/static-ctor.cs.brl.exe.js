var asm0; (function (asm) { 
 
function clone_value(v) {
    if (v == null) return v;
    if (typeof v === 'number') return v;
    if (typeof v === 'function') return v;
    if (!v.constructor.IsValueType) return v;
    var result = new v.constructor();
//    var result = {};
    for (var p in v) {
        if (v.hasOwnProperty(p))
            result[p] = clone_value(v[p]);
    }
    return result;
}

function box(v, type) {
    if (v === null)
        return v;
    
    if (type.IsNullable) {
        if (v.has_value)
            return box(v.value, type.GenericArguments[0]);
        else
            return null;
    }

    if (!type.IsValueType)
        return v;
    
    return {
        'boxed': v,
        'vtable': type.prototype.vtable
    };
}

function unbox(o, type) {
    return o.boxed;
}

function unbox_any(o, type) {
    if (type.IsNullable) {
        var result = new type();
        if (o !== null) {
            result.value = o.boxed;
            result.has_value = true;
        }
        return result;
    }
    
    if (type.IsValueType)
        return o.boxed;
    else
        return o;
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

function new_string(str) {
    var r = new (asm0['System.String']())();
    r.jsstr = str;
    return r;
}

function new_array(type, length) {
    var r = new (asm0['System.Array`1'](type))();
    r.type = type;
    r.jsarr = new Array(length);
    return r;
}
;
asm.x6000003 = function ToString(arg0) { var st_00;
var st_01;
var loc0;
 /* IL_00: nop */
/* IL_01: ldstr System.Object*/
st_00 = new_string("System.Object");
/* IL_06: stloc.0 */
loc0 = st_00;
/* IL_09: ldloc.0 */
st_01 = loc0;
/* IL_0A: ret */
return st_01; };
asm.x6000004 = function GetHashCode(arg0) { var st_00;
var st_01;
var loc0;
 /* IL_00: nop */
/* IL_01: ldc.i4.0 */
st_00 = 0;
/* IL_02: stloc.0 */
loc0 = st_00;
/* IL_05: ldloc.0 */
st_01 = loc0;
/* IL_06: ret */
return st_01; };
asm.x6000005 = function ToJavaScriptString(arg0) { var st_00;
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
var loc1;
var loc0;
 __braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldnull */
st_01 = null;
/* IL_04: ceq */
st_02 = (st_00 === st_01) ? (1) : (0);
/* IL_05: ldc.i4.0 */
st_03 = 0;
/* IL_07: ceq */
st_04 = (st_02 === st_03) ? (1) : (0);
/* IL_08: stloc.1 */
loc1 = st_04;
/* IL_09: ldloc.1 */
st_05 = loc1;
/* IL_0A: brtrue.s IL_19*/
if (st_05){
__braille_pos_0__ = 0x19;continue;
}
/* IL_0C: ldstr */
st_06 = new_string("");
/* IL_11: ldfld Object jsstr*/
st_07 = st_06.jsstr;
/* IL_16: stloc.0 */
loc0 = st_07;
/* IL_17: br.s IL_27*/
__braille_pos_0__ = 0x27;
continue;
case 0x19:
/* IL_19: ldarg.0 */
st_08 = arg0;
/* IL_1A: callvirt String ToString()*/
st_09 = ((st_08.vtable)["asm0.x6000003"])(st_08);
/* IL_1F: ldfld Object jsstr*/
st_0A = st_09.jsstr;
/* IL_24: stloc.0 */
loc0 = st_0A;
case 0x27:
/* IL_27: ldloc.0 */
st_0B = loc0;
/* IL_28: ret */
return st_0B;
}
} };
asm.ToJavaScriptString = asm.x6000005;
asm.x6000006 = function ReferenceEquals(arg0,arg1) { var st_00;
var st_01;
var st_02;
var st_03;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldarg.1 */
st_01 = arg1;
/* IL_03: call Boolean ReferenceEqualsImpl(System.Object, System.Object)*/
st_02 = (function (a, b) { return Number(a === b); })(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x6000007 = function Equals(arg0,arg1) { var st_00;
var st_01;
var st_02;
var st_03;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldarg.1 */
st_01 = arg1;
/* IL_03: call Boolean ReferenceEquals(System.Object, System.Object)*/
st_02 = (asm0.x6000006)(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x6000008 = function GetType(arg0) { var st_00;
var st_01;
var st_02;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: call Type GetTypeImpl(System.Object)*/
st_01 = (function (o) { return o.constructor; })(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000009 = function _ctor(arg0) { var __braille_pos_0__;
 __braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: br.s IL_02*/
__braille_pos_0__ = 0x2;
continue;
case 0x2:
/* IL_02: ret */
return ;
}
} };
asm.x600000a_init = function () { 
 (((asm0)["System.Exception"])().init)();
asm.x600000a = asm.x600000a_; };
asm.x600000a = function (arg0,arg1) { 
 (asm.x600000a_init.apply)(this,arguments);
return (asm.x600000a.apply)(this,arguments); };
asm.x600000a_ = function Combine(arg0,arg1) { var t0;
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
var st_17;
var st_16;
var st_18;
var st_19;
var st_1A;
var st_1B;
var st_1C;
var st_1D;
var st_1E;
var st_1F;
var st_20;
var __braille_pos_0__;
var loc1;
var loc0;
 t0 = ((asm0)["System.Exception"])();
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldnull */
st_01 = null;
/* IL_04: ceq */
st_02 = (st_00 === st_01) ? (1) : (0);
/* IL_05: ldc.i4.0 */
st_03 = 0;
/* IL_07: ceq */
st_04 = (st_02 === st_03) ? (1) : (0);
/* IL_08: stloc.1 */
loc1 = st_04;
/* IL_09: ldloc.1 */
st_05 = loc1;
/* IL_0A: brtrue.s IL_20*/
if (st_05){
__braille_pos_0__ = 0x20;continue;
}
/* IL_0C: nop */

/* IL_0D: ldarg.1 */
st_06 = arg1;
/* IL_0E: ldnull */
st_07 = null;
/* IL_10: ceq */
st_08 = (st_06 === st_07) ? (1) : (0);
/* IL_11: ldc.i4.0 */
st_09 = 0;
/* IL_13: ceq */
st_0A = (st_08 === st_09) ? (1) : (0);
/* IL_14: stloc.1 */
loc1 = st_0A;
/* IL_15: ldloc.1 */
st_0B = loc1;
/* IL_16: brtrue.s IL_1C*/
if (st_0B){
__braille_pos_0__ = 0x1C;continue;
}
/* IL_18: ldnull */
st_0C = null;
/* IL_19: stloc.0 */
loc0 = st_0C;
/* IL_1A: br.s IL_56*/
__braille_pos_0__ = 0x56;
continue;
case 0x1C:
/* IL_1C: ldarg.1 */
st_0D = arg1;
/* IL_1D: stloc.0 */
loc0 = st_0D;
/* IL_1E: br.s IL_56*/
__braille_pos_0__ = 0x56;
continue;
case 0x20:
/* IL_20: ldarg.1 */
st_0E = arg1;
/* IL_21: ldnull */
st_0F = null;
/* IL_23: ceq */
st_10 = (st_0E === st_0F) ? (1) : (0);
/* IL_24: ldc.i4.0 */
st_11 = 0;
/* IL_26: ceq */
st_12 = (st_10 === st_11) ? (1) : (0);
/* IL_27: stloc.1 */
loc1 = st_12;
/* IL_28: ldloc.1 */
st_13 = loc1;
/* IL_29: brtrue.s IL_2F*/
if (st_13){
__braille_pos_0__ = 0x2F;continue;
}
/* IL_2B: ldarg.0 */
st_14 = arg0;
/* IL_2C: stloc.0 */
loc0 = st_14;
/* IL_2D: br.s IL_56*/
__braille_pos_0__ = 0x56;
continue;
case 0x2F:
/* IL_2F: ldarg.0 */
st_15 = arg0;
/* IL_30: callvirt Type GetType()*/
st_17 = (asm0.x6000008)(st_15);
/* IL_35: ldarg.1 */
st_16 = arg1;
/* IL_36: callvirt Type GetType()*/
st_18 = (asm0.x6000008)(st_16);
/* IL_3C: ceq */
st_19 = (st_17 === st_18) ? (1) : (0);
/* IL_3D: stloc.1 */
loc1 = st_19;
/* IL_3E: ldloc.1 */
st_1A = loc1;
/* IL_3F: brtrue.s IL_4C*/
if (st_1A){
__braille_pos_0__ = 0x4C;continue;
}
/* IL_41: ldstr Incompatible delegate types*/
st_1B = new_string("Incompatible delegate types");
/* IL_46: newobj Void .ctor(System.String)*/
st_1C = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000064)(result,st_1B);
return result; })(t0);
/* IL_4B: throw */
throw st_1C;
case 0x4C:
/* IL_4C: ldarg.0 */
st_1D = arg0;
/* IL_4D: ldarg.1 */
st_1E = arg1;
/* IL_4E: callvirt Delegate CombineImpl(System.Delegate)*/
st_1F = ((st_1D.vtable)["asm0.x600000d"])(st_1D,st_1E);
/* IL_53: stloc.0 */
loc0 = st_1F;
case 0x56:
/* IL_56: ldloc.0 */
st_20 = loc0;
/* IL_57: ret */
return st_20;
}
} };
asm.x600000b_init = function () { 
 (((asm0)["System.Exception"])().init)();
asm.x600000b = asm.x600000b_; };
asm.x600000b = function (arg0,arg1) { 
 (asm.x600000b_init.apply)(this,arguments);
return (asm.x600000b.apply)(this,arguments); };
asm.x600000b_ = function Remove(arg0,arg1) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var st_09;
var st_08;
var st_0A;
var st_0B;
var st_0C;
var st_0D;
var st_0E;
var st_0F;
var st_10;
var st_11;
var st_12;
var __braille_pos_0__;
var loc1;
var loc0;
 t0 = ((asm0)["System.Exception"])();
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.1 */
st_00 = arg1;
/* IL_02: ldnull */
st_01 = null;
/* IL_04: ceq */
st_02 = (st_00 === st_01) ? (1) : (0);
/* IL_05: ldc.i4.0 */
st_03 = 0;
/* IL_07: ceq */
st_04 = (st_02 === st_03) ? (1) : (0);
/* IL_08: stloc.1 */
loc1 = st_04;
/* IL_09: ldloc.1 */
st_05 = loc1;
/* IL_0A: brtrue.s IL_10*/
if (st_05){
__braille_pos_0__ = 0x10;continue;
}
/* IL_0C: ldarg.0 */
st_06 = arg0;
/* IL_0D: stloc.0 */
loc0 = st_06;
/* IL_0E: br.s IL_37*/
__braille_pos_0__ = 0x37;
continue;
case 0x10:
/* IL_10: ldarg.0 */
st_07 = arg0;
/* IL_11: callvirt Type GetType()*/
st_09 = (asm0.x6000008)(st_07);
/* IL_16: ldarg.1 */
st_08 = arg1;
/* IL_17: callvirt Type GetType()*/
st_0A = (asm0.x6000008)(st_08);
/* IL_1D: ceq */
st_0B = (st_09 === st_0A) ? (1) : (0);
/* IL_1E: stloc.1 */
loc1 = st_0B;
/* IL_1F: ldloc.1 */
st_0C = loc1;
/* IL_20: brtrue.s IL_2D*/
if (st_0C){
__braille_pos_0__ = 0x2D;continue;
}
/* IL_22: ldstr Incompatible delegate types*/
st_0D = new_string("Incompatible delegate types");
/* IL_27: newobj Void .ctor(System.String)*/
st_0E = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000064)(result,st_0D);
return result; })(t0);
/* IL_2C: throw */
throw st_0E;
case 0x2D:
/* IL_2D: ldarg.0 */
st_0F = arg0;
/* IL_2E: ldarg.1 */
st_10 = arg1;
/* IL_2F: callvirt Delegate RemoveImpl(System.Delegate)*/
st_11 = ((st_0F.vtable)["asm0.x600000c"])(st_0F,st_10);
/* IL_34: stloc.0 */
loc0 = st_11;
case 0x37:
/* IL_37: ldloc.0 */
st_12 = loc0;
/* IL_38: ret */
return st_12;
}
} };
asm.x600000c_init = function () { 
 (((asm0)["System.NotImplementedException"])().init)();
asm.x600000c = asm.x600000c_; };
asm.x600000c = function (arg0,arg1) { 
 (asm.x600000c_init.apply)(this,arguments);
return (asm.x600000c.apply)(this,arguments); };
asm.x600000c_ = function RemoveImpl(arg0,arg1) { var t0;
var st_00;
 t0 = ((asm0)["System.NotImplementedException"])();
/* IL_00: nop */
/* IL_01: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000080)(result);
return result; })(t0);
/* IL_06: throw */
throw st_00; };
asm.x600000d_init = function () { 
 (((asm0)["System.NotImplementedException"])().init)();
asm.x600000d = asm.x600000d_; };
asm.x600000d = function (arg0,arg1) { 
 (asm.x600000d_init.apply)(this,arguments);
return (asm.x600000d.apply)(this,arguments); };
asm.x600000d_ = function CombineImpl(arg0,arg1) { var t0;
var st_00;
 t0 = ((asm0)["System.NotImplementedException"])();
/* IL_00: nop */
/* IL_01: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000080)(result);
return result; })(t0);
/* IL_06: throw */
throw st_00; };
asm.x600000e = function op_Equality(arg0,arg1) { var st_00;
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
var st_16;
var st_15;
var st_17;
var st_18;
var st_19;
var st_1A;
var st_1B;
var st_1D;
var st_1C;
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
var st_28;
var st_29;
var st_2A;
var st_2B;
var st_2F;
var st_2C;
var st_2D;
var st_2E;
var st_30;
var st_31;
var st_32;
var st_33;
var st_34;
var st_35;
var st_36;
var st_37;
var st_38;
var st_39;
var st_3A;
var st_3B;
var st_3C;
var st_3D;
var st_3E;
var st_3F;
var st_40;
var st_41;
var st_42;
var st_43;
var st_44;
var st_48;
var st_45;
var st_46;
var st_47;
var st_49;
var st_4A;
var st_4B;
var st_4C;
var st_4D;
var st_4E;
var st_4F;
var st_50;
var st_51;
var st_52;
var st_53;
var __braille_pos_0__;
var loc0;
var loc1;
var loc6;
var loc5;
var loc2;
var loc3;
var loc4;
 __braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: castclass System.MulticastDelegate*/
st_01 = st_00;
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_08: ldarg.1 */
st_02 = arg1;
/* IL_09: castclass System.MulticastDelegate*/
st_03 = st_02;
/* IL_0E: stloc.1 */
loc1 = st_03;
/* IL_0F: ldloc.0 */
st_04 = loc0;
/* IL_10: ldnull */
st_05 = null;
/* IL_12: ceq */
st_06 = (st_04 === st_05) ? (1) : (0);
/* IL_13: ldc.i4.0 */
st_07 = 0;
/* IL_15: ceq */
st_08 = (st_06 === st_07) ? (1) : (0);
/* IL_16: stloc.s 6*/
loc6 = st_08;
/* IL_18: ldloc.s 6*/
st_09 = loc6;
/* IL_1A: brtrue.s IL_27*/
if (st_09){
__braille_pos_0__ = 0x27;continue;
}
/* IL_1C: ldloc.1 */
st_0A = loc1;
/* IL_1D: ldnull */
st_0B = null;
/* IL_1F: ceq */
st_0C = (st_0A === st_0B) ? (1) : (0);
/* IL_20: stloc.s 5*/
loc5 = st_0C;
/* IL_22: br IL_112*/
__braille_pos_0__ = 0x112;
continue;
case 0x27:
/* IL_27: ldloc.1 */
st_0D = loc1;
/* IL_28: ldnull */
st_0E = null;
/* IL_2A: ceq */
st_0F = (st_0D === st_0E) ? (1) : (0);
/* IL_2B: ldc.i4.0 */
st_10 = 0;
/* IL_2D: ceq */
st_11 = (st_0F === st_10) ? (1) : (0);
/* IL_2E: stloc.s 6*/
loc6 = st_11;
/* IL_30: ldloc.s 6*/
st_12 = loc6;
/* IL_32: brtrue.s IL_3C*/
if (st_12){
__braille_pos_0__ = 0x3C;continue;
}
/* IL_34: ldc.i4.0 */
st_13 = 0;
/* IL_35: stloc.s 5*/
loc5 = st_13;
/* IL_37: br IL_112*/
__braille_pos_0__ = 0x112;
continue;
case 0x3C:
/* IL_3C: ldloc.0 */
st_14 = loc0;
/* IL_3D: ldfld Object _methodPtr*/
st_16 = st_14._methodPtr;
/* IL_42: ldloc.1 */
st_15 = loc1;
/* IL_43: ldfld Object _methodPtr*/
st_17 = st_15._methodPtr;
/* IL_48: call Boolean ReferenceEquals(System.Object, System.Object)*/
st_18 = (asm0.x6000006)(st_16,st_17);
/* IL_4D: stloc.s 6*/
loc6 = st_18;
/* IL_4F: ldloc.s 6*/
st_19 = loc6;
/* IL_51: brtrue.s IL_5B*/
if (st_19){
__braille_pos_0__ = 0x5B;continue;
}
/* IL_53: ldc.i4.0 */
st_1A = 0;
/* IL_54: stloc.s 5*/
loc5 = st_1A;
/* IL_56: br IL_112*/
__braille_pos_0__ = 0x112;
continue;
case 0x5B:
/* IL_5B: ldloc.0 */
st_1B = loc0;
/* IL_5C: ldfld Object _target*/
st_1D = st_1B._target;
/* IL_61: ldloc.1 */
st_1C = loc1;
/* IL_62: ldfld Object _target*/
st_1E = st_1C._target;
/* IL_67: call Boolean ReferenceEquals(System.Object, System.Object)*/
st_1F = (asm0.x6000006)(st_1D,st_1E);
/* IL_6C: stloc.s 6*/
loc6 = st_1F;
/* IL_6E: ldloc.s 6*/
st_20 = loc6;
/* IL_70: brtrue.s IL_7A*/
if (st_20){
__braille_pos_0__ = 0x7A;continue;
}
/* IL_72: ldc.i4.0 */
st_21 = 0;
/* IL_73: stloc.s 5*/
loc5 = st_21;
/* IL_75: br IL_112*/
__braille_pos_0__ = 0x112;
continue;
case 0x7A:
/* IL_7A: ldloc.0 */
st_22 = loc0;
/* IL_7B: ldfld Delegate[] _invocationList*/
st_23 = st_22._invocationList;
/* IL_80: brfalse.s IL_8D*/
if ((!st_23)){
__braille_pos_0__ = 0x8D;continue;
}
/* IL_82: ldloc.1 */
st_24 = loc1;
/* IL_83: ldfld Delegate[] _invocationList*/
st_25 = st_24._invocationList;
/* IL_88: ldnull */
st_26 = null;
/* IL_8A: ceq */
st_27 = (st_25 === st_26) ? (1) : (0);
/* IL_8B: br.s IL_8E*/
__braille_pos_0__ = 0x8E;
continue;
case 0x8D:
/* IL_8D: ldc.i4.1 */
st_27 = 1;
case 0x8E:
/* IL_8E: nop */

/* IL_8F: stloc.s 6*/
loc6 = st_27;
/* IL_91: ldloc.s 6*/
st_28 = loc6;
/* IL_93: brtrue.s IL_F9*/
if (st_28){
__braille_pos_0__ = 0xF9;continue;
}
/* IL_95: nop */

/* IL_96: ldloc.0 */
st_29 = loc0;
/* IL_97: ldfld Delegate[] _invocationList*/
st_2A = st_29._invocationList;
/* IL_9C: ldlen */
st_2B = st_2A.jsarr.length;
/* IL_9D: conv.i4 */
st_2F = st_2B;
/* IL_9E: ldloc.1 */
st_2C = loc1;
/* IL_9F: ldfld Delegate[] _invocationList*/
st_2D = st_2C._invocationList;
/* IL_A4: ldlen */
st_2E = st_2D.jsarr.length;
/* IL_A5: conv.i4 */
st_30 = st_2E;
/* IL_A7: ceq */
st_31 = (st_2F === st_30) ? (1) : (0);
/* IL_A8: stloc.s 6*/
loc6 = st_31;
/* IL_AA: ldloc.s 6*/
st_32 = loc6;
/* IL_AC: brtrue.s IL_B3*/
if (st_32){
__braille_pos_0__ = 0xB3;continue;
}
/* IL_AE: ldc.i4.0 */
st_33 = 0;
/* IL_AF: stloc.s 5*/
loc5 = st_33;
/* IL_B1: br.s IL_112*/
__braille_pos_0__ = 0x112;
continue;
case 0xB3:
/* IL_B3: ldc.i4.0 */
st_34 = 0;
/* IL_B4: stloc.2 */
loc2 = st_34;
/* IL_B5: br.s IL_E3*/
__braille_pos_0__ = 0xE3;
continue;
case 0xB7:
/* IL_B7: nop */

/* IL_B8: ldloc.0 */
st_35 = loc0;
/* IL_B9: ldfld Delegate[] _invocationList*/
st_36 = st_35._invocationList;
/* IL_BE: ldloc.2 */
st_37 = loc2;
/* IL_BF: ldelem.ref */
st_38 = (st_36.jsarr)[st_37];
/* IL_C0: stloc.3 */
loc3 = st_38;
/* IL_C1: ldloc.1 */
st_39 = loc1;
/* IL_C2: ldfld Delegate[] _invocationList*/
st_3A = st_39._invocationList;
/* IL_C7: ldloc.2 */
st_3B = loc2;
/* IL_C8: ldelem.ref */
st_3C = (st_3A.jsarr)[st_3B];
/* IL_C9: stloc.s 4*/
loc4 = st_3C;
/* IL_CB: ldloc.3 */
st_3D = loc3;
/* IL_CC: ldloc.s 4*/
st_3E = loc4;
/* IL_CE: call Boolean op_Equality(System.Delegate, System.Delegate)*/
st_3F = (asm0.x600000e)(st_3D,st_3E);
/* IL_D3: stloc.s 6*/
loc6 = st_3F;
/* IL_D5: ldloc.s 6*/
st_40 = loc6;
/* IL_D7: brtrue.s IL_DE*/
if (st_40){
__braille_pos_0__ = 0xDE;continue;
}
/* IL_D9: ldc.i4.0 */
st_41 = 0;
/* IL_DA: stloc.s 5*/
loc5 = st_41;
/* IL_DC: br.s IL_112*/
__braille_pos_0__ = 0x112;
continue;
case 0xDE:
/* IL_DE: nop */

/* IL_DF: ldloc.2 */
st_42 = loc2;
/* IL_E0: ldc.i4.1 */
st_43 = 1;
/* IL_E1: add */
st_44 = (st_42 + st_43);
/* IL_E2: stloc.2 */
loc2 = st_44;
case 0xE3:
/* IL_E3: ldloc.2 */
st_48 = loc2;
/* IL_E4: ldloc.0 */
st_45 = loc0;
/* IL_E5: ldfld Delegate[] _invocationList*/
st_46 = st_45._invocationList;
/* IL_EA: ldlen */
st_47 = st_46.jsarr.length;
/* IL_EB: conv.i4 */
st_49 = st_47;
/* IL_ED: clt */
st_4A = (st_48 < st_49) ? (1) : (0);
/* IL_EE: stloc.s 6*/
loc6 = st_4A;
/* IL_F0: ldloc.s 6*/
st_4B = loc6;
/* IL_F2: brtrue.s IL_B7*/
if (st_4B){
__braille_pos_0__ = 0xB7;continue;
}
/* IL_F4: ldc.i4.1 */
st_4C = 1;
/* IL_F5: stloc.s 5*/
loc5 = st_4C;
/* IL_F7: br.s IL_112*/
__braille_pos_0__ = 0x112;
continue;
case 0xF9:
/* IL_F9: ldloc.0 */
st_4D = loc0;
/* IL_FA: ldfld Delegate[] _invocationList*/
st_4E = st_4D._invocationList;
/* IL_FF: brtrue.s IL_10C*/
if (st_4E){
__braille_pos_0__ = 0x10C;continue;
}
/* IL_101: ldloc.1 */
st_4F = loc1;
/* IL_102: ldfld Delegate[] _invocationList*/
st_50 = st_4F._invocationList;
/* IL_107: ldnull */
st_51 = null;
/* IL_109: ceq */
st_52 = (st_50 === st_51) ? (1) : (0);
/* IL_10A: br.s IL_10D*/
__braille_pos_0__ = 0x10D;
continue;
case 0x10C:
/* IL_10C: ldc.i4.0 */
st_52 = 0;
case 0x10D:
/* IL_10D: nop */

/* IL_10E: stloc.s 5*/
loc5 = st_52;
case 0x112:
/* IL_112: ldloc.s 5*/
st_53 = loc5;
/* IL_114: ret */
return st_53;
}
} };
asm.x600000f = function op_Inequality(arg0,arg1) { var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldarg.1 */
st_01 = arg1;
/* IL_03: call Boolean op_Equality(System.Delegate, System.Delegate)*/
st_02 = (asm0.x600000e)(st_00,st_01);
/* IL_08: ldc.i4.0 */
st_03 = 0;
/* IL_0A: ceq */
st_04 = (st_02 === st_03) ? (1) : (0);
/* IL_0B: stloc.0 */
loc0 = st_04;
/* IL_0E: ldloc.0 */
st_05 = loc0;
/* IL_0F: ret */
return st_05; };
asm.x6000010 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000012_init = function () { 
 (((asm0)["System.Delegate"])().init)();
asm.x6000012 = asm.x6000012_; };
asm.x6000012 = function (arg0,arg1) { 
 (asm.x6000012_init.apply)(this,arguments);
return (asm.x6000012.apply)(this,arguments); };
asm.x6000012_ = function CombineImpl(arg0,arg1) { var t0;
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
var st_10;
var st_11;
var st_0D;
var st_0E;
var st_0F;
var st_12;
var st_13;
var st_14;
var st_15;
var st_19;
var st_16;
var st_17;
var st_18;
var st_1A;
var st_1B;
var st_1C;
var st_21;
var st_1D;
var st_1E;
var st_1F;
var st_20;
var st_22;
var st_23;
var st_24;
var st_25;
var st_26;
var st_27;
var st_28;
var st_29;
var st_2A;
var st_2B;
var st_2C;
var st_2D;
var st_2E;
var __braille_pos_0__;
var loc3;
var loc0;
var loc1;
var loc2;
 t0 = ((asm0)["System.Delegate"])();
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld Delegate[] _invocationList*/
st_01 = st_00._invocationList;
/* IL_07: ldnull */
st_02 = null;
/* IL_09: ceq */
st_03 = (st_01 === st_02) ? (1) : (0);
/* IL_0A: stloc.3 */
loc3 = st_03;
/* IL_0B: ldloc.3 */
st_04 = loc3;
/* IL_0C: brtrue.s IL_4C*/
if (st_04){
__braille_pos_0__ = 0x4C;continue;
}
/* IL_0E: nop */

/* IL_0F: ldarg.0 */
st_05 = arg0;
/* IL_10: ldfld Delegate[] _invocationList*/
st_06 = st_05._invocationList;
/* IL_15: ldlen */
st_07 = st_06.jsarr.length;
/* IL_16: conv.i4 */
st_08 = st_07;
/* IL_17: ldc.i4.1 */
st_09 = 1;
/* IL_18: add */
st_0A = (st_08 + st_09);
/* IL_19: newarr System.Delegate*/
st_0B = new_array(t0,st_0A);
/* IL_1E: stloc.0 */
loc0 = st_0B;
/* IL_1F: ldc.i4.0 */
st_0C = 0;
/* IL_20: stloc.1 */
loc1 = st_0C;
/* IL_21: br.s IL_32*/
__braille_pos_0__ = 0x32;
continue;
case 0x23:
/* IL_23: ldloc.0 */
st_10 = loc0;
/* IL_24: ldloc.1 */
st_11 = loc1;
/* IL_25: ldarg.0 */
st_0D = arg0;
/* IL_26: ldfld Delegate[] _invocationList*/
st_0E = st_0D._invocationList;
/* IL_2B: ldloc.1 */
st_0F = loc1;
/* IL_2C: ldelem.ref */
st_12 = (st_0E.jsarr)[st_0F];
/* IL_2D: stelem.ref */
(st_10.jsarr)[st_11] = st_12;
/* IL_2E: ldloc.1 */
st_13 = loc1;
/* IL_2F: ldc.i4.1 */
st_14 = 1;
/* IL_30: add */
st_15 = (st_13 + st_14);
/* IL_31: stloc.1 */
loc1 = st_15;
case 0x32:
/* IL_32: ldloc.1 */
st_19 = loc1;
/* IL_33: ldarg.0 */
st_16 = arg0;
/* IL_34: ldfld Delegate[] _invocationList*/
st_17 = st_16._invocationList;
/* IL_39: ldlen */
st_18 = st_17.jsarr.length;
/* IL_3A: conv.i4 */
st_1A = st_18;
/* IL_3C: clt */
st_1B = (st_19 < st_1A) ? (1) : (0);
/* IL_3D: stloc.3 */
loc3 = st_1B;
/* IL_3E: ldloc.3 */
st_1C = loc3;
/* IL_3F: brtrue.s IL_23*/
if (st_1C){
__braille_pos_0__ = 0x23;continue;
}
/* IL_41: ldloc.0 */
st_21 = loc0;
/* IL_42: ldloc.0 */
st_1D = loc0;
/* IL_43: ldlen */
st_1E = st_1D.jsarr.length;
/* IL_44: conv.i4 */
st_1F = st_1E;
/* IL_45: ldc.i4.1 */
st_20 = 1;
/* IL_46: sub */
st_22 = (st_1F - st_20);
/* IL_47: ldarg.1 */
st_23 = arg1;
/* IL_48: stelem.ref */
(st_21.jsarr)[st_22] = st_23;
/* IL_49: nop */

/* IL_4A: br.s IL_5D*/
__braille_pos_0__ = 0x5D;
continue;
case 0x4C:
/* IL_4C: nop */

/* IL_4D: ldc.i4.2 */
st_24 = 2;
/* IL_4E: newarr System.Delegate*/
st_25 = new_array(t0,st_24);
/* IL_53: stloc.0 */
loc0 = st_25;
/* IL_54: ldloc.0 */
st_26 = loc0;
/* IL_55: ldc.i4.0 */
st_27 = 0;
/* IL_56: ldarg.0 */
st_28 = arg0;
/* IL_57: stelem.ref */
(st_26.jsarr)[st_27] = st_28;
/* IL_58: ldloc.0 */
st_29 = loc0;
/* IL_59: ldc.i4.1 */
st_2A = 1;
/* IL_5A: ldarg.1 */
st_2B = arg1;
/* IL_5B: stelem.ref */
(st_29.jsarr)[st_2A] = st_2B;
/* IL_5C: nop */

case 0x5D:
/* IL_5D: ldloc.0 */
st_2C = loc0;
/* IL_5E: call Delegate CreateMulticast(System.Delegate[])*/
st_2D = (
            function (list) { 

                var f = function () {
                    var result;
                    var arr = list.jsarr;
                    for (var i=0; i<arr.length; i++) {
                        var delegate = arr[i];
                        var m = delegate._methodPtr;
                        var t = delegate._target;
                        var args = [];
                        if (t != null)
                            args.push(t);
                        for (var j=1; j<arguments.length; j++)
                            args.push(arguments[j]);
                        result = m.apply(null, args)
                    }
                    return result;
                };
                
                var md = new list.jsarr[0].constructor();
                md._methodPtr = f;
                md._invocationList = list;
                return md;
            }
            )(st_2C);
/* IL_63: stloc.2 */
loc2 = st_2D;
/* IL_66: ldloc.2 */
st_2E = loc2;
/* IL_67: ret */
return st_2E;
}
} };
asm.x6000013_init = function () { 
 (((asm0)["System.Delegate"])().init)();
asm.x6000013 = asm.x6000013_; };
asm.x6000013 = function (arg0,arg1) { 
 (asm.x6000013_init.apply)(this,arguments);
return (asm.x6000013.apply)(this,arguments); };
asm.x6000013_ = function RemoveImpl(arg0,arg1) { var t0;
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
var st_23;
var st_20;
var st_21;
var st_22;
var st_24;
var st_25;
var st_26;
var st_27;
var st_28;
var st_29;
var st_2A;
var st_2B;
var st_2C;
var st_2D;
var st_2E;
var st_2F;
var st_30;
var st_31;
var st_32;
var st_33;
var st_34;
var st_35;
var st_36;
var st_37;
var st_38;
var st_39;
var st_3A;
var st_3B;
var st_3C;
var st_3D;
var st_3E;
var st_3F;
var st_40;
var st_41;
var st_42;
var st_43;
var st_44;
var st_48;
var st_45;
var st_46;
var st_47;
var st_49;
var st_4A;
var st_4B;
var st_4C;
var st_4D;
var st_4E;
var st_4F;
var st_50;
var st_51;
var st_52;
var st_53;
var st_54;
var st_55;
var st_56;
var st_57;
var st_58;
var st_60;
var st_59;
var st_5A;
var st_61;
var st_5B;
var st_5C;
var st_5D;
var st_5E;
var st_5F;
var st_62;
var st_63;
var st_64;
var st_65;
var st_69;
var st_66;
var st_67;
var st_68;
var st_6A;
var st_6B;
var st_6C;
var st_6D;
var st_6E;
var st_6F;
var __braille_pos_0__;
var loc5;
var loc4;
var loc0;
var loc1;
var loc2;
var loc3;
 t0 = ((asm0)["System.Delegate"])();
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld Delegate[] _invocationList*/
st_01 = st_00._invocationList;
/* IL_07: ldnull */
st_02 = null;
/* IL_09: ceq */
st_03 = (st_01 === st_02) ? (1) : (0);
/* IL_0A: ldc.i4.0 */
st_04 = 0;
/* IL_0C: ceq */
st_05 = (st_03 === st_04) ? (1) : (0);
/* IL_0D: stloc.s 5*/
loc5 = st_05;
/* IL_0F: ldloc.s 5*/
st_06 = loc5;
/* IL_11: brtrue.s IL_34*/
if (st_06){
__braille_pos_0__ = 0x34;continue;
}
/* IL_13: nop */

/* IL_14: ldarg.1 */
st_07 = arg1;
/* IL_15: ldarg.0 */
st_08 = arg0;
/* IL_16: call Boolean op_Equality(System.Delegate, System.Delegate)*/
st_09 = (asm0.x600000e)(st_07,st_08);
/* IL_1B: ldc.i4.0 */
st_0A = 0;
/* IL_1D: ceq */
st_0B = (st_09 === st_0A) ? (1) : (0);
/* IL_1E: stloc.s 5*/
loc5 = st_0B;
/* IL_20: ldloc.s 5*/
st_0C = loc5;
/* IL_22: brtrue.s IL_2C*/
if (st_0C){
__braille_pos_0__ = 0x2C;continue;
}
/* IL_24: ldnull */
st_0D = null;
/* IL_25: stloc.s 4*/
loc4 = st_0D;
/* IL_27: br IL_11B*/
__braille_pos_0__ = 0x11B;
continue;
case 0x2C:
/* IL_2C: ldarg.0 */
st_0E = arg0;
/* IL_2D: stloc.s 4*/
loc4 = st_0E;
/* IL_2F: br IL_11B*/
__braille_pos_0__ = 0x11B;
continue;
case 0x34:
/* IL_34: nop */

/* IL_35: ldc.i4.0 */
st_0F = 0;
/* IL_36: stloc.0 */
loc0 = st_0F;
/* IL_37: ldc.i4.0 */
st_10 = 0;
/* IL_38: stloc.1 */
loc1 = st_10;
/* IL_39: br.s IL_5A*/
__braille_pos_0__ = 0x5A;
continue;
case 0x3B:
/* IL_3B: ldarg.0 */
st_11 = arg0;
/* IL_3C: ldfld Delegate[] _invocationList*/
st_12 = st_11._invocationList;
/* IL_41: ldloc.1 */
st_13 = loc1;
/* IL_42: ldelem.ref */
st_14 = (st_12.jsarr)[st_13];
/* IL_43: ldarg.1 */
st_15 = arg1;
/* IL_44: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
st_16 = (asm0.x600000f)(st_14,st_15);
/* IL_49: ldc.i4.0 */
st_17 = 0;
/* IL_4B: ceq */
st_18 = (st_16 === st_17) ? (1) : (0);
/* IL_4C: stloc.s 5*/
loc5 = st_18;
/* IL_4E: ldloc.s 5*/
st_19 = loc5;
/* IL_50: brtrue.s IL_56*/
if (st_19){
__braille_pos_0__ = 0x56;continue;
}
/* IL_52: ldloc.0 */
st_1A = loc0;
/* IL_53: ldc.i4.1 */
st_1B = 1;
/* IL_54: add */
st_1C = (st_1A + st_1B);
/* IL_55: stloc.0 */
loc0 = st_1C;
case 0x56:
/* IL_56: ldloc.1 */
st_1D = loc1;
/* IL_57: ldc.i4.1 */
st_1E = 1;
/* IL_58: add */
st_1F = (st_1D + st_1E);
/* IL_59: stloc.1 */
loc1 = st_1F;
case 0x5A:
/* IL_5A: ldloc.1 */
st_23 = loc1;
/* IL_5B: ldarg.0 */
st_20 = arg0;
/* IL_5C: ldfld Delegate[] _invocationList*/
st_21 = st_20._invocationList;
/* IL_61: ldlen */
st_22 = st_21.jsarr.length;
/* IL_62: conv.i4 */
st_24 = st_22;
/* IL_64: clt */
st_25 = (st_23 < st_24) ? (1) : (0);
/* IL_65: stloc.s 5*/
loc5 = st_25;
/* IL_67: ldloc.s 5*/
st_26 = loc5;
/* IL_69: brtrue.s IL_3B*/
if (st_26){
__braille_pos_0__ = 0x3B;continue;
}
/* IL_6B: ldloc.0 */
st_27 = loc0;
/* IL_6C: ldc.i4.0 */
st_28 = 0;
/* IL_6E: ceq */
st_29 = (st_27 === st_28) ? (1) : (0);
/* IL_6F: ldc.i4.0 */
st_2A = 0;
/* IL_71: ceq */
st_2B = (st_29 === st_2A) ? (1) : (0);
/* IL_72: stloc.s 5*/
loc5 = st_2B;
/* IL_74: ldloc.s 5*/
st_2C = loc5;
/* IL_76: brtrue.s IL_80*/
if (st_2C){
__braille_pos_0__ = 0x80;continue;
}
/* IL_78: ldnull */
st_2D = null;
/* IL_79: stloc.s 4*/
loc4 = st_2D;
/* IL_7B: br IL_11B*/
__braille_pos_0__ = 0x11B;
continue;
case 0x80:
/* IL_80: ldloc.0 */
st_2E = loc0;
/* IL_81: ldc.i4.1 */
st_2F = 1;
/* IL_83: ceq */
st_30 = (st_2E === st_2F) ? (1) : (0);
/* IL_84: ldc.i4.0 */
st_31 = 0;
/* IL_86: ceq */
st_32 = (st_30 === st_31) ? (1) : (0);
/* IL_87: stloc.s 5*/
loc5 = st_32;
/* IL_89: ldloc.s 5*/
st_33 = loc5;
/* IL_8B: brtrue.s IL_C9*/
if (st_33){
__braille_pos_0__ = 0xC9;continue;
}
/* IL_8D: ldc.i4.0 */
st_34 = 0;
/* IL_8E: stloc.1 */
loc1 = st_34;
/* IL_8F: br.s IL_B8*/
__braille_pos_0__ = 0xB8;
continue;
case 0x91:
/* IL_91: ldarg.0 */
st_35 = arg0;
/* IL_92: ldfld Delegate[] _invocationList*/
st_36 = st_35._invocationList;
/* IL_97: ldloc.1 */
st_37 = loc1;
/* IL_98: ldelem.ref */
st_38 = (st_36.jsarr)[st_37];
/* IL_99: ldarg.1 */
st_39 = arg1;
/* IL_9A: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
st_3A = (asm0.x600000f)(st_38,st_39);
/* IL_9F: ldc.i4.0 */
st_3B = 0;
/* IL_A1: ceq */
st_3C = (st_3A === st_3B) ? (1) : (0);
/* IL_A2: stloc.s 5*/
loc5 = st_3C;
/* IL_A4: ldloc.s 5*/
st_3D = loc5;
/* IL_A6: brtrue.s IL_B4*/
if (st_3D){
__braille_pos_0__ = 0xB4;continue;
}
/* IL_A8: ldarg.0 */
st_3E = arg0;
/* IL_A9: ldfld Delegate[] _invocationList*/
st_3F = st_3E._invocationList;
/* IL_AE: ldloc.1 */
st_40 = loc1;
/* IL_AF: ldelem.ref */
st_41 = (st_3F.jsarr)[st_40];
/* IL_B0: stloc.s 4*/
loc4 = st_41;
/* IL_B2: br.s IL_11B*/
__braille_pos_0__ = 0x11B;
continue;
case 0xB4:
/* IL_B4: ldloc.1 */
st_42 = loc1;
/* IL_B5: ldc.i4.1 */
st_43 = 1;
/* IL_B6: add */
st_44 = (st_42 + st_43);
/* IL_B7: stloc.1 */
loc1 = st_44;
case 0xB8:
/* IL_B8: ldloc.1 */
st_48 = loc1;
/* IL_B9: ldarg.0 */
st_45 = arg0;
/* IL_BA: ldfld Delegate[] _invocationList*/
st_46 = st_45._invocationList;
/* IL_BF: ldlen */
st_47 = st_46.jsarr.length;
/* IL_C0: conv.i4 */
st_49 = st_47;
/* IL_C2: clt */
st_4A = (st_48 < st_49) ? (1) : (0);
/* IL_C3: stloc.s 5*/
loc5 = st_4A;
/* IL_C5: ldloc.s 5*/
st_4B = loc5;
/* IL_C7: brtrue.s IL_91*/
if (st_4B){
__braille_pos_0__ = 0x91;continue;
}
case 0xC9:
/* IL_C9: ldloc.0 */
st_4C = loc0;
/* IL_CA: newarr System.Delegate*/
st_4D = new_array(t0,st_4C);
/* IL_CF: stloc.2 */
loc2 = st_4D;
/* IL_D0: ldc.i4.0 */
st_4E = 0;
/* IL_D1: stloc.1 */
loc1 = st_4E;
/* IL_D2: ldc.i4.0 */
st_4F = 0;
/* IL_D3: stloc.3 */
loc3 = st_4F;
/* IL_D4: br.s IL_100*/
__braille_pos_0__ = 0x100;
continue;
case 0xD6:
/* IL_D6: ldarg.0 */
st_50 = arg0;
/* IL_D7: ldfld Delegate[] _invocationList*/
st_51 = st_50._invocationList;
/* IL_DC: ldloc.1 */
st_52 = loc1;
/* IL_DD: ldelem.ref */
st_53 = (st_51.jsarr)[st_52];
/* IL_DE: ldarg.1 */
st_54 = arg1;
/* IL_DF: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
st_55 = (asm0.x600000f)(st_53,st_54);
/* IL_E4: ldc.i4.0 */
st_56 = 0;
/* IL_E6: ceq */
st_57 = (st_55 === st_56) ? (1) : (0);
/* IL_E7: stloc.s 5*/
loc5 = st_57;
/* IL_E9: ldloc.s 5*/
st_58 = loc5;
/* IL_EB: brtrue.s IL_FC*/
if (st_58){
__braille_pos_0__ = 0xFC;continue;
}
/* IL_ED: ldloc.2 */
st_60 = loc2;
/* IL_EE: ldloc.3 */
st_59 = loc3;
/* IL_EF: dup */
st_61 = (st_5A = st_59);
/* IL_F0: ldc.i4.1 */
st_5B = 1;
/* IL_F1: add */
st_5C = (st_5A + st_5B);
/* IL_F2: stloc.3 */
loc3 = st_5C;
/* IL_F3: ldarg.0 */
st_5D = arg0;
/* IL_F4: ldfld Delegate[] _invocationList*/
st_5E = st_5D._invocationList;
/* IL_F9: ldloc.1 */
st_5F = loc1;
/* IL_FA: ldelem.ref */
st_62 = (st_5E.jsarr)[st_5F];
/* IL_FB: stelem.ref */
(st_60.jsarr)[st_61] = st_62;
case 0xFC:
/* IL_FC: ldloc.1 */
st_63 = loc1;
/* IL_FD: ldc.i4.1 */
st_64 = 1;
/* IL_FE: add */
st_65 = (st_63 + st_64);
/* IL_FF: stloc.1 */
loc1 = st_65;
case 0x100:
/* IL_100: ldloc.1 */
st_69 = loc1;
/* IL_101: ldarg.0 */
st_66 = arg0;
/* IL_102: ldfld Delegate[] _invocationList*/
st_67 = st_66._invocationList;
/* IL_107: ldlen */
st_68 = st_67.jsarr.length;
/* IL_108: conv.i4 */
st_6A = st_68;
/* IL_10A: clt */
st_6B = (st_69 < st_6A) ? (1) : (0);
/* IL_10B: stloc.s 5*/
loc5 = st_6B;
/* IL_10D: ldloc.s 5*/
st_6C = loc5;
/* IL_10F: brtrue.s IL_D6*/
if (st_6C){
__braille_pos_0__ = 0xD6;continue;
}
/* IL_111: ldloc.2 */
st_6D = loc2;
/* IL_112: call Delegate CreateMulticast(System.Delegate[])*/
st_6E = (
            function (list) { 

                var f = function () {
                    var result;
                    var arr = list.jsarr;
                    for (var i=0; i<arr.length; i++) {
                        var delegate = arr[i];
                        var m = delegate._methodPtr;
                        var t = delegate._target;
                        var args = [];
                        if (t != null)
                            args.push(t);
                        for (var j=1; j<arguments.length; j++)
                            args.push(arguments[j]);
                        result = m.apply(null, args)
                    }
                    return result;
                };
                
                var md = new list.jsarr[0].constructor();
                md._methodPtr = f;
                md._invocationList = list;
                return md;
            }
            )(st_6D);
/* IL_117: stloc.s 4*/
loc4 = st_6E;
case 0x11B:
/* IL_11B: ldloc.s 4*/
st_6F = loc4;
/* IL_11D: ret */
return st_6F;
}
} };
asm.x6000014 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000010)(st_00);
/* IL_06: ret */
return ; };
asm.x6000015 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: ret */
return ; };
asm.x6000016_init = function () { 
 (((asm0)["System.EventArgs"])().init)();
asm.x6000016 = asm.x6000016_; };
asm.x6000016 = function () { 
 (asm.x6000016_init.apply)(this,arguments);
return (asm.x6000016.apply)(this,arguments); };
asm.x6000016_ = function _cctor() { var t0;
var st_00;
 t0 = ((asm0)["System.EventArgs"])();
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000015)(result);
return result; })(t0);
/* IL_05: stsfld EventArgs Empty*/
(t0)["Empty"] = st_00;
/* IL_0A: ret */
return ; };
asm.x6000018 = function Invoke() { 
 
                                            var m = arguments[0]._methodPtr;
                                            var t = arguments[0]._target;
                                            if (t != null)
                                                arguments[0] = t;
                                            else
                                                arguments = Array.prototype.slice.call(arguments, 1);
                                            return m.apply(null, arguments); };
asm.x6000017 = function ctor() { 
 arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];; };
asm.x600001a = function get_Length(arg0) { var st_00;
var st_01;
var st_02;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: call Int32 GetLengthImpl(System.Object)*/
st_01 = (function(o) { return o.jsarr.length; })(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x600001d = function GetValue(arg0,arg1) { var st_00;
var st_01;
var st_02;
var st_03;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldarg.1 */
st_01 = arg1;
/* IL_03: call Object GetValueImpl(System.Object, System.Int32)*/
st_02 = (function(o, i) { return box(o.jsarr[i], o.type); })(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x600001e = function GetEnumerator(arg0) { var st_00;
var st_01;
var st_02;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: callvirt IEnumerator GetEnumeratorImpl()*/
st_01 = ((st_00.vtable)["asm0.x600001f"])(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000020 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000023_init = function () { 
 (((asm0)["System.Array`1+ArrayEnumerator"])(((arguments)[0].constructor.GenericArguments)[0]).init)();
asm.x6000023 = asm.x6000023_; };
asm.x6000023 = function (arg0) { 
 (asm.x6000023_init.apply)(this,arguments);
return (asm.x6000023.apply)(this,arguments); };
asm.x6000023_ = function GetEnumerator(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var loc0;
 t0 = ((asm0)["System.Array`1+ArrayEnumerator"])(((arguments)[0].constructor.GenericArguments)[0]);
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: newobj Void .ctor(System.Array`1[T])*/
st_01 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x600002c)(result,st_00);
return result; })(t0);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000024 = function GetEnumeratorImpl(arg0) { var st_00;
var st_01;
var st_02;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: call IEnumerator`1 GetEnumerator()*/
st_01 = (asm0.x6000023)(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000025 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000020)(st_00);
/* IL_06: ret */
return ; };
asm.x600002d = function get_Current(arg0) { var st_00;
var st_02;
var st_01;
var st_03;
var st_04;
var st_05;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld Array`1 source*/
st_02 = st_00.source;
/* IL_07: ldarg.0 */
st_01 = arg0;
/* IL_08: ldfld Int32 index*/
st_03 = st_01.index;
/* IL_0D: callvirt T GetTypedValue(System.Int32)*/
st_04 = st_02.jsarr[st_03];
/* IL_12: stloc.0 */
loc0 = st_04;
/* IL_15: ldloc.0 */
st_05 = loc0;
/* IL_16: ret */
return st_05; };
asm.x600002e = function MoveNext(arg0) { var st_00;
var st_01;
var st_04;
var st_02;
var st_03;
var st_05;
var st_06;
var st_08;
var st_07;
var st_09;
var st_0A;
var st_0B;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: dup */
st_04 = (st_01 = st_00);
/* IL_03: ldfld Int32 index*/
st_02 = st_01.index;
/* IL_08: ldc.i4.1 */
st_03 = 1;
/* IL_09: add */
st_05 = (st_02 + st_03);
/* IL_0A: stfld Int32 index*/
st_04.index = st_05;
/* IL_0F: ldarg.0 */
st_06 = arg0;
/* IL_10: ldfld Int32 index*/
st_08 = st_06.index;
/* IL_15: ldarg.0 */
st_07 = arg0;
/* IL_16: ldfld Int32 length*/
st_09 = st_07.length;
/* IL_1C: clt */
st_0A = (st_08 < st_09) ? (1) : (0);
/* IL_1D: stloc.0 */
loc0 = st_0A;
/* IL_20: ldloc.0 */
st_0B = loc0;
/* IL_21: ret */
return st_0B; };
asm.x600002f = function System_Collections_IEnumerator_get_Current(arg0) { var st_00;
var st_01;
var st_02;
var st_03;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: call T get_Current()*/
st_01 = (asm0.x600002d)(st_00);
/* IL_07: box T*/
st_02 = box(st_01,((arguments)[0].constructor.GenericArguments)[0]);
/* IL_0C: stloc.0 */
loc0 = st_02;
/* IL_0F: ldloc.0 */
st_03 = loc0;
/* IL_10: ret */
return st_03; };
asm.x6000030 = function Reset(arg0) { var st_00;
var st_01;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldc.i4.m1 */
st_01 = -1;
/* IL_03: stfld Int32 index*/
st_00.index = st_01;
/* IL_08: ret */
return ; };
asm.x6000031 = function Dispose(arg0) { 
 /* IL_00: nop */
/* IL_01: ret */
return ; };
asm.x600002c = function _ctor(arg0,arg1) { var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_06;
var st_05;
var st_07;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: ldarg.0 */
st_01 = arg0;
/* IL_09: ldarg.1 */
st_02 = arg1;
/* IL_0A: stfld Array`1 source*/
st_01.source = st_02;
/* IL_0F: ldarg.0 */
st_03 = arg0;
/* IL_10: ldc.i4.m1 */
st_04 = -1;
/* IL_11: stfld Int32 index*/
st_03.index = st_04;
/* IL_16: ldarg.0 */
st_06 = arg0;
/* IL_17: ldarg.1 */
st_05 = arg1;
/* IL_18: callvirt Int32 get_Length()*/
st_07 = (asm0.x600001a)(st_05);
/* IL_1D: stfld Int32 length*/
st_06.length = st_07;
/* IL_22: nop */
/* IL_23: ret */
return ; };
asm.x6000032 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000033 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000032)(st_00);
/* IL_06: ret */
return ; };
asm.x6000034 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000035 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000034)(st_00);
/* IL_06: ret */
return ; };
asm.x6000036 = function _ctor(arg0,arg1) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000032)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: ret */
return ; };
asm.x6000038 = function get_HasValue(arg0) { var st_00;
var st_01;
var st_02;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld Boolean has_value*/
st_01 = (st_00.r)().has_value;
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000039_init = function () { 
 (((asm0)["System.InvalidOperationException"])().init)();
asm.x6000039 = asm.x6000039_; };
asm.x6000039 = function (arg0) { 
 (asm.x6000039_init.apply)(this,arguments);
return (asm.x6000039.apply)(this,arguments); };
asm.x6000039_ = function get_Value(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var __braille_pos_0__;
var loc1;
var loc0;
 t0 = ((asm0)["System.InvalidOperationException"])();
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld Boolean has_value*/
st_01 = (st_00.r)().has_value;
/* IL_07: stloc.1 */
loc1 = st_01;
/* IL_08: ldloc.1 */
st_02 = loc1;
/* IL_09: brtrue.s IL_16*/
if (st_02){
__braille_pos_0__ = 0x16;continue;
}
/* IL_0B: ldstr Nullable object must have a value.*/
st_03 = new_string("Nullable object must have a value.");
/* IL_10: newobj Void .ctor(System.String)*/
st_04 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000067)(result,st_03);
return result; })(t0);
/* IL_15: throw */
throw st_04;
case 0x16:
/* IL_16: ldarg.0 */
st_05 = arg0;
/* IL_17: ldfld T value*/
st_06 = (st_05.r)().value;
/* IL_1C: stloc.0 */
loc0 = st_06;
/* IL_1F: ldloc.0 */
st_07 = loc0;
/* IL_20: ret */
return st_07;
}
} };
asm.x600003a_init = function () { 
 (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]).init)();
asm.x600003a = asm.x600003a_; };
asm.x600003a = function (arg0,arg1) { 
 (asm.x600003a_init.apply)(this,arguments);
return (asm.x600003a.apply)(this,arguments); };
asm.x600003a_ = function Equals(arg0,arg1) { var t0;
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
var st_11;
var st_10;
var st_12;
var st_13;
var st_14;
var __braille_pos_0__;
var loc1;
var loc0;
 t0 = ((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]);
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.1 */
st_00 = arg1;
/* IL_02: ldnull */
st_01 = null;
/* IL_04: ceq */
st_02 = (st_00 === st_01) ? (1) : (0);
/* IL_05: ldc.i4.0 */
st_03 = 0;
/* IL_07: ceq */
st_04 = (st_02 === st_03) ? (1) : (0);
/* IL_08: stloc.1 */
loc1 = st_04;
/* IL_09: ldloc.1 */
st_05 = loc1;
/* IL_0A: brtrue.s IL_18*/
if (st_05){
__braille_pos_0__ = 0x18;continue;
}
/* IL_0C: ldarg.0 */
st_06 = arg0;
/* IL_0D: ldfld Boolean has_value*/
st_07 = (st_06.r)().has_value;
/* IL_12: ldc.i4.0 */
st_08 = 0;
/* IL_14: ceq */
st_09 = (st_07 === st_08) ? (1) : (0);
/* IL_15: stloc.0 */
loc0 = st_09;
/* IL_16: br.s IL_38*/
__braille_pos_0__ = 0x38;
continue;
case 0x18:
/* IL_18: ldarg.1 */
st_0A = arg1;
/* IL_19: isinst System.Nullable`1[T]*/
st_0B = (t0.IsInst)(st_0A);
/* IL_1E: ldnull */
st_0C = null;
/* IL_20: cgt.un */
st_0D = (st_0B > st_0C) ? (1) : (0);
/* IL_21: stloc.1 */
loc1 = st_0D;
/* IL_22: ldloc.1 */
st_0E = loc1;
/* IL_23: brtrue.s IL_29*/
if (st_0E){
__braille_pos_0__ = 0x29;continue;
}
/* IL_25: ldc.i4.0 */
st_0F = 0;
/* IL_26: stloc.0 */
loc0 = st_0F;
/* IL_27: br.s IL_38*/
__braille_pos_0__ = 0x38;
continue;
case 0x29:
/* IL_29: ldarg.0 */
st_11 = arg0;
/* IL_2A: ldarg.1 */
st_10 = arg1;
/* IL_2B: unbox.any System.Nullable`1[T]*/
st_12 = unbox_any(st_10,t0);
/* IL_30: call Boolean Equals(System.Nullable`1[T])*/
st_13 = (asm0.x600003b)(st_11,clone_value(st_12));
/* IL_35: stloc.0 */
loc0 = st_13;
case 0x38:
/* IL_38: ldloc.0 */
st_14 = loc0;
/* IL_39: ret */
return st_14;
}
} };
asm.x600003b = function Equals(arg0,arg1) { var st_00;
var st_02;
var st_01;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var st_08;
var st_09;
var st_0A;
var st_0B;
var st_0E;
var st_0C;
var st_0D;
var st_0F;
var st_10;
var st_11;
var __braille_pos_0__;
var loc1;
var loc0;
 __braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarga.s 1*/
st_00 = { 
'w': function () { 
 arg1 = (arguments)[0]; },
'r': function () { 
 return arg1; } 
};
/* IL_03: ldfld Boolean has_value*/
st_02 = (st_00.r)().has_value;
/* IL_08: ldarg.0 */
st_01 = arg0;
/* IL_09: ldfld Boolean has_value*/
st_03 = (st_01.r)().has_value;
/* IL_0F: ceq */
st_04 = (st_02 === st_03) ? (1) : (0);
/* IL_10: stloc.1 */
loc1 = st_04;
/* IL_11: ldloc.1 */
st_05 = loc1;
/* IL_12: brtrue.s IL_18*/
if (st_05){
__braille_pos_0__ = 0x18;continue;
}
/* IL_14: ldc.i4.0 */
st_06 = 0;
/* IL_15: stloc.0 */
loc0 = st_06;
/* IL_16: br.s IL_46*/
__braille_pos_0__ = 0x46;
continue;
case 0x18:
/* IL_18: ldarg.0 */
st_07 = arg0;
/* IL_19: ldfld Boolean has_value*/
st_08 = (st_07.r)().has_value;
/* IL_1E: stloc.1 */
loc1 = st_08;
/* IL_1F: ldloc.1 */
st_09 = loc1;
/* IL_20: brtrue.s IL_26*/
if (st_09){
__braille_pos_0__ = 0x26;continue;
}
/* IL_22: ldc.i4.1 */
st_0A = 1;
/* IL_23: stloc.0 */
loc0 = st_0A;
/* IL_24: br.s IL_46*/
__braille_pos_0__ = 0x46;
continue;
case 0x26:
/* IL_26: ldarga.s 1*/
st_0B = { 
'w': function () { 
 arg1 = (arguments)[0]; },
'r': function () { 
 return arg1; } 
};
/* IL_28: ldflda T value*/
st_0E = { 
'w': function () { 
 (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0]; },
'r': function () { 
 return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"]; } 
};
/* IL_2D: ldarg.0 */
st_0C = arg0;
/* IL_2E: ldfld T value*/
st_0D = (st_0C.r)().value;
/* IL_33: box T*/
st_0F = box(st_0D,(((arguments)[0].r)().constructor.GenericArguments)[0]);
/* IL_3E: callvirt Boolean Equals(System.Object)*/
/* ignoring prefixes constrained.*/
st_10 = ((st_0E.vtable)["asm0.x6000007"])(st_0E,st_0F);
/* IL_43: stloc.0 */
loc0 = st_10;
case 0x46:
/* IL_46: ldloc.0 */
st_11 = loc0;
/* IL_47: ret */
return st_11;
}
} };
asm.x600003c = function GetHashCode(arg0) { var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var __braille_pos_0__;
var loc1;
var loc0;
 __braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld Boolean has_value*/
st_01 = (st_00.r)().has_value;
/* IL_07: stloc.1 */
loc1 = st_01;
/* IL_08: ldloc.1 */
st_02 = loc1;
/* IL_09: brtrue.s IL_0F*/
if (st_02){
__braille_pos_0__ = 0xF;continue;
}
/* IL_0B: ldc.i4.0 */
st_03 = 0;
/* IL_0C: stloc.0 */
loc0 = st_03;
/* IL_0D: br.s IL_23*/
__braille_pos_0__ = 0x23;
continue;
case 0xF:
/* IL_0F: ldarg.0 */
st_04 = arg0;
/* IL_10: ldflda T value*/
st_05 = { 
'w': function () { 
 (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0]; },
'r': function () { 
 return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"]; } 
};
/* IL_1B: callvirt Int32 GetHashCode()*/
/* ignoring prefixes constrained.*/
st_06 = ((st_05.vtable)["asm0.x6000004"])(st_05);
/* IL_20: stloc.0 */
loc0 = st_06;
case 0x23:
/* IL_23: ldloc.0 */
st_07 = loc0;
/* IL_24: ret */
return st_07;
}
} };
asm.x600003d = function GetValueOrDefault(arg0) { var st_00;
var st_01;
var st_02;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld T value*/
st_01 = (st_00.r)().value;
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x600003e = function GetValueOrDefault(arg0,arg1) { var st_00;
var st_01;
var st_03;
var st_02;
var st_04;
var __braille_pos_0__;
var loc0;
 __braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld Boolean has_value*/
st_01 = (st_00.r)().has_value;
/* IL_07: brtrue.s IL_0C*/
if (st_01){
__braille_pos_0__ = 0xC;continue;
}
/* IL_09: ldarg.1 */
st_03 = arg1;
/* IL_0A: br.s IL_12*/
__braille_pos_0__ = 0x12;
continue;
case 0xC:
/* IL_0C: ldarg.0 */
st_02 = arg0;
/* IL_0D: ldfld T value*/
st_03 = (st_02.r)().value;
case 0x12:
/* IL_12: nop */

/* IL_13: stloc.0 */
loc0 = st_03;
/* IL_16: ldloc.0 */
st_04 = loc0;
/* IL_17: ret */
return st_04;
}
} };
asm.x600003f_init = function () { 
 (((asm0)["System.String"])().init)();
asm.x600003f = asm.x600003f_; };
asm.x600003f = function (arg0) { 
 (asm.x600003f_init.apply)(this,arguments);
return (asm.x600003f.apply)(this,arguments); };
asm.x600003f_ = function ToString(arg0) { var t0;
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
var __braille_pos_0__;
var loc1;
var loc0;
 t0 = ((asm0)["System.String"])();
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld Boolean has_value*/
st_01 = (st_00.r)().has_value;
/* IL_07: ldc.i4.0 */
st_02 = 0;
/* IL_09: ceq */
st_03 = (st_01 === st_02) ? (1) : (0);
/* IL_0A: stloc.1 */
loc1 = st_03;
/* IL_0B: ldloc.1 */
st_04 = loc1;
/* IL_0C: brtrue.s IL_22*/
if (st_04){
__braille_pos_0__ = 0x22;continue;
}
/* IL_0E: ldarg.0 */
st_05 = arg0;
/* IL_0F: ldflda T value*/
st_06 = { 
'w': function () { 
 (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0]; },
'r': function () { 
 return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"]; } 
};
/* IL_1A: callvirt String ToString()*/
/* ignoring prefixes constrained.*/
st_07 = ((st_06.vtable)["asm0.x6000003"])(st_06);
/* IL_1F: stloc.0 */
loc0 = st_07;
/* IL_20: br.s IL_2A*/
__braille_pos_0__ = 0x2A;
continue;
case 0x22:
/* IL_22: ldsfld String Empty*/
st_08 = t0.Empty;
/* IL_27: stloc.0 */
loc0 = st_08;
case 0x2A:
/* IL_2A: ldloc.0 */
st_09 = loc0;
/* IL_2B: ret */
return st_09;
}
} };
asm.x6000040_init = function (T) { 
 return function () { 
 (((asm0)["System.Nullable`1"])(T).init)();
asm.x6000040 = asm.x6000040_; }; };
asm.x6000040 = function (T) { 
 return function (arg0) { 
 ((asm.x6000040_init)(T).apply)(this,arguments);
return ((asm.x6000040)(T).apply)(this,arguments); }; };
asm.x6000040_ = function (T) { 
 return function op_Implicit(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var loc0;
 t0 = ((asm0)["System.Nullable`1"])(T);
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: newobj Void .ctor(T)*/
st_01 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000037)({ 
'w': function () { 
 result = (arguments)[0]; },
'r': function () { 
 return result; } 
},clone_value(st_00));
return result; })(t0);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; }; };
asm.x6000041 = function (T) { 
 return function op_Explicit(arg0) { var st_00;
var st_01;
var st_02;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarga.s 0*/
st_00 = { 
'w': function () { 
 arg0 = (arguments)[0]; },
'r': function () { 
 return arg0; } 
};
/* IL_03: call T get_Value()*/
st_01 = (asm0.x6000039)(st_00);
/* IL_08: stloc.0 */
loc0 = st_01;
/* IL_0B: ldloc.0 */
st_02 = loc0;
/* IL_0C: ret */
return st_02; }; };
asm.x6000042 = function (T) { 
 return function Box(arg0) { var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var __braille_pos_0__;
var loc1;
var loc0;
 __braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarga.s 0*/
st_00 = { 
'w': function () { 
 arg0 = (arguments)[0]; },
'r': function () { 
 return arg0; } 
};
/* IL_03: ldfld Boolean has_value*/
st_01 = (st_00.r)().has_value;
/* IL_08: stloc.1 */
loc1 = st_01;
/* IL_09: ldloc.1 */
st_02 = loc1;
/* IL_0A: brtrue.s IL_10*/
if (st_02){
__braille_pos_0__ = 0x10;continue;
}
/* IL_0C: ldnull */
st_03 = null;
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_0E: br.s IL_1F*/
__braille_pos_0__ = 0x1F;
continue;
case 0x10:
/* IL_10: ldarga.s 0*/
st_04 = { 
'w': function () { 
 arg0 = (arguments)[0]; },
'r': function () { 
 return arg0; } 
};
/* IL_12: ldfld T value*/
st_05 = (st_04.r)().value;
/* IL_17: box T*/
st_06 = box(st_05,T);
/* IL_1C: stloc.0 */
loc0 = st_06;
case 0x1F:
/* IL_1F: ldloc.0 */
st_07 = loc0;
/* IL_20: ret */
return st_07;
}
} }; };
asm.x6000043_init = function (T) { 
 return function () { 
 (((asm0)["System.Nullable`1"])(T).init)();
asm.x6000043 = asm.x6000043_; }; };
asm.x6000043 = function (T) { 
 return function (arg0) { 
 ((asm.x6000043_init)(T).apply)(this,arguments);
return ((asm.x6000043)(T).apply)(this,arguments); }; };
asm.x6000043_ = function (T) { 
 return function Unbox(arg0) { var t0;
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
var __braille_pos_0__;
var loc1;
var loc0;
 t0 = ((asm0)["System.Nullable`1"])(T);
loc2 = new (((asm0)["System.Nullable`1"])(T))();
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldnull */
st_01 = null;
/* IL_04: ceq */
st_02 = (st_00 === st_01) ? (1) : (0);
/* IL_05: ldc.i4.0 */
st_03 = 0;
/* IL_07: ceq */
st_04 = (st_02 === st_03) ? (1) : (0);
/* IL_08: stloc.1 */
loc1 = st_04;
/* IL_09: ldloc.1 */
st_05 = loc1;
/* IL_0A: brtrue.s IL_18*/
if (st_05){
__braille_pos_0__ = 0x18;continue;
}
/* IL_0C: ldloca.s 2*/
st_06 = { 
'w': function () { 
 loc2 = (arguments)[0]; },
'r': function () { 
 return loc2; } 
};
/* IL_0F: initobj System.Nullable`1[T]*/
(t0.IsValueType) ? ((st_06.w)(new t0())) : (null);
/* IL_14: ldloc.2 */
st_07 = loc2;
/* IL_15: stloc.0 */
loc0 = st_07;
/* IL_16: br.s IL_26*/
__braille_pos_0__ = 0x26;
continue;
case 0x18:
/* IL_18: ldarg.0 */
st_08 = arg0;
/* IL_19: unbox.any T*/
st_09 = unbox_any(st_08,T);
/* IL_1E: newobj Void .ctor(T)*/
st_0A = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000037)({ 
'w': function () { 
 result = (arguments)[0]; },
'r': function () { 
 return result; } 
},clone_value(st_09));
return result; })(t0);
/* IL_23: stloc.0 */
loc0 = st_0A;
case 0x26:
/* IL_26: ldloc.0 */
st_0B = loc0;
/* IL_27: ret */
return st_0B;
}
} }; };
asm.x6000037 = function _ctor(arg0,arg1) { var st_00;
var st_01;
var st_02;
var st_03;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldc.i4.1 */
st_01 = 1;
/* IL_03: stfld Boolean has_value*/
(st_00.r)().has_value = st_01;
/* IL_08: ldarg.0 */
st_02 = arg0;
/* IL_09: ldarg.1 */
st_03 = arg1;
/* IL_0A: stfld T value*/
(st_02.r)().value = st_03;
/* IL_0F: ret */
return ; };
asm.x6000044 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000032)(st_00);
/* IL_06: ret */
return ; };
asm.x6000048_init = function () { 
 (((asm0)["System.Exception"])().init)();
asm.x6000048 = asm.x6000048_; };
asm.x6000048 = function (arg0,arg1) { 
 (asm.x6000048_init.apply)(this,arguments);
return (asm.x6000048.apply)(this,arguments); };
asm.x6000048_ = function get_Chars(arg0,arg1) { var t0;
var st_00;
var st_01;
 t0 = ((asm0)["System.Exception"])();
/* IL_00: nop */
/* IL_01: ldstr Not implemented.*/
st_00 = new_string("Not implemented.");
/* IL_06: newobj Void .ctor(System.String)*/
st_01 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000064)(result,st_00);
return result; })(t0);
/* IL_0B: throw */
throw st_01; };
asm.x6000049_init = function () { 
 (((asm0)["System.String"])().init)();
asm.x6000049 = asm.x6000049_; };
asm.x6000049 = function (arg0,arg1) { 
 (asm.x6000049_init.apply)(this,arguments);
return (asm.x6000049.apply)(this,arguments); };
asm.x6000049_ = function Concat(arg0,arg1) { var t0;
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
var loc1;
var loc0;
 t0 = ((asm0)["System.String"])();
/* IL_00: nop */
/* IL_01: ldc.i4.2 */
st_00 = 2;
/* IL_02: newarr System.String*/
st_01 = new_array(t0,st_00);
/* IL_07: stloc.1 */
loc1 = st_01;
/* IL_08: ldloc.1 */
st_02 = loc1;
/* IL_09: ldc.i4.0 */
st_03 = 0;
/* IL_0A: ldarg.0 */
st_04 = arg0;
/* IL_0B: stelem.ref */
(st_02.jsarr)[st_03] = st_04;
/* IL_0C: ldloc.1 */
st_05 = loc1;
/* IL_0D: ldc.i4.1 */
st_06 = 1;
/* IL_0E: ldarg.1 */
st_07 = arg1;
/* IL_0F: stelem.ref */
(st_05.jsarr)[st_06] = st_07;
/* IL_10: ldloc.1 */
st_08 = loc1;
/* IL_11: call String ConcatImpl(System.String[])*/
st_09 = (function () { return new_string(String.prototype.concat.apply('', arguments)); })(st_08);
/* IL_16: stloc.0 */
loc0 = st_09;
/* IL_19: ldloc.0 */
st_0A = loc0;
/* IL_1A: ret */
return st_0A; };
asm.x600004a_init = function () { 
 (((asm0)["System.String"])().init)();
asm.x600004a = asm.x600004a_; };
asm.x600004a = function (arg0,arg1) { 
 (asm.x600004a_init.apply)(this,arguments);
return (asm.x600004a.apply)(this,arguments); };
asm.x600004a_ = function Concat(arg0,arg1) { var t0;
var st_00;
var st_01;
var st_03;
var st_04;
var st_02;
var st_05;
var st_07;
var st_08;
var st_06;
var st_09;
var st_0A;
var st_0B;
var st_0C;
var loc1;
var loc0;
 t0 = ((asm0)["System.String"])();
/* IL_00: nop */
/* IL_01: ldc.i4.2 */
st_00 = 2;
/* IL_02: newarr System.String*/
st_01 = new_array(t0,st_00);
/* IL_07: stloc.1 */
loc1 = st_01;
/* IL_08: ldloc.1 */
st_03 = loc1;
/* IL_09: ldc.i4.0 */
st_04 = 0;
/* IL_0A: ldarg.0 */
st_02 = arg0;
/* IL_0B: callvirt String ToString()*/
st_05 = ((st_02.vtable)["asm0.x6000003"])(st_02);
/* IL_10: stelem.ref */
(st_03.jsarr)[st_04] = st_05;
/* IL_11: ldloc.1 */
st_07 = loc1;
/* IL_12: ldc.i4.1 */
st_08 = 1;
/* IL_13: ldarg.1 */
st_06 = arg1;
/* IL_14: callvirt String ToString()*/
st_09 = ((st_06.vtable)["asm0.x6000003"])(st_06);
/* IL_19: stelem.ref */
(st_07.jsarr)[st_08] = st_09;
/* IL_1A: ldloc.1 */
st_0A = loc1;
/* IL_1B: call String ConcatImpl(System.String[])*/
st_0B = (function () { return new_string(String.prototype.concat.apply('', arguments)); })(st_0A);
/* IL_20: stloc.0 */
loc0 = st_0B;
/* IL_23: ldloc.0 */
st_0C = loc0;
/* IL_24: ret */
return st_0C; };
asm.x600004b = function Concat(arg0) { var st_00;
var st_01;
var st_02;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: call String ConcatImpl(System.String[])*/
st_01 = (function () { return new_string(String.prototype.concat.apply('', arguments)); })(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x600004c_init = function () { 
 (((asm0)["System.Exception"])().init)();
asm.x600004c = asm.x600004c_; };
asm.x600004c = function (arg0) { 
 (asm.x600004c_init.apply)(this,arguments);
return (asm.x600004c.apply)(this,arguments); };
asm.x600004c_ = function Concat(arg0) { var t0;
var st_00;
var st_01;
 t0 = ((asm0)["System.Exception"])();
/* IL_00: nop */
/* IL_01: ldstr Not implemented*/
st_00 = new_string("Not implemented");
/* IL_06: newobj Void .ctor(System.String)*/
st_01 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000064)(result,st_00);
return result; })(t0);
/* IL_0B: throw */
throw st_01; };
asm.x600004d = function get_Length(arg0) { var st_00;
var st_01;
var st_02;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: call Int32 GetLengthImpl(System.Object)*/
st_01 = (function(o) { return o.jsstr.length; })(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x600004e = function ToString(arg0) { var st_00;
var st_01;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: stloc.0 */
loc0 = st_00;
/* IL_05: ldloc.0 */
st_01 = loc0;
/* IL_06: ret */
return st_01; };
asm.x600004f = function op_Inequality(arg0,arg1) { var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldarg.1 */
st_01 = arg1;
/* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
st_02 = (function(a, b) { return a.jsstr === b.jsstr; })(st_00,st_01);
/* IL_08: ldc.i4.0 */
st_03 = 0;
/* IL_0A: ceq */
st_04 = (st_02 === st_03) ? (1) : (0);
/* IL_0B: stloc.0 */
loc0 = st_04;
/* IL_0E: ldloc.0 */
st_05 = loc0;
/* IL_0F: ret */
return st_05; };
asm.x6000050 = function op_Equality(arg0,arg1) { var st_00;
var st_01;
var st_02;
var st_03;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldarg.1 */
st_01 = arg1;
/* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
st_02 = (function(a, b) { return a.jsstr === b.jsstr; })(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x6000051 = function Equals(arg0,arg1) { var st_00;
var st_01;
var st_02;
var st_03;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldarg.1 */
st_01 = arg1;
/* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
st_02 = (function(a, b) { return a.jsstr === b.jsstr; })(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x6000052 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000053_init = function () { 
 (((asm0)["System.String"])().init)();
asm.x6000053 = asm.x6000053_; };
asm.x6000053 = function () { 
 (asm.x6000053_init.apply)(this,arguments);
return (asm.x6000053.apply)(this,arguments); };
asm.x6000053_ = function _cctor() { var t0;
var st_00;
 t0 = ((asm0)["System.String"])();
/* IL_00: ldstr */
st_00 = new_string("");
/* IL_05: stsfld String Empty*/
(t0)["Empty"] = st_00;
/* IL_0A: ret */
return ; };
asm.x6000055 = function get_MemberName(arg0) { var st_00;
var st_01;
var st_02;
var loc0;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld String member_name*/
st_01 = st_00.System_ReflectionDefaultMemberAttributemember_name;
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000054 = function _ctor(arg0,arg1) { var st_00;
var st_01;
var st_02;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000032)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: ldarg.0 */
st_01 = arg0;
/* IL_09: ldarg.1 */
st_02 = arg1;
/* IL_0A: stfld String member_name*/
st_01.System_ReflectionDefaultMemberAttributemember_name = st_02;
/* IL_0F: nop */
/* IL_10: ret */
return ; };
asm.x6000057 = function get_ValidOn(arg0) { var st_00;
var st_01;
var st_02;
var loc0;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldfld AttributeTargets <ValidOn>k__BackingField*/
st_01 = (st_00)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x6000058 = function set_ValidOn(arg0,arg1) { var st_00;
var st_01;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldarg.1 */
st_01 = arg1;
/* IL_02: stfld AttributeTargets <ValidOn>k__BackingField*/
(st_00)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x6000059 = function get_Inherited(arg0) { var st_00;
var st_01;
var st_02;
var loc0;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldfld Boolean <Inherited>k__BackingField*/
st_01 = (st_00)["SystemAttributeUsageAttribute<Inherited>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x600005a = function set_Inherited(arg0,arg1) { var st_00;
var st_01;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldarg.1 */
st_01 = arg1;
/* IL_02: stfld Boolean <Inherited>k__BackingField*/
(st_00)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x6000056 = function _ctor(arg0,arg1) { var st_00;
var st_01;
var st_02;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000032)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: ldarg.0 */
st_01 = arg0;
/* IL_09: ldarg.1 */
st_02 = arg1;
/* IL_0A: call Void set_ValidOn(System.AttributeTargets)*/
(asm0.x6000058)(st_01,clone_value(st_02));
/* IL_0F: nop */
/* IL_10: nop */
/* IL_11: ret */
return ; };
asm.x600005b = function ToString(arg0) { var st_00;
var st_01;
var st_02;
var st_03;
var __braille_pos_0__;
var loc0;
 __braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.i1 */
st_01 = st_00.boxed;
/* IL_03: brtrue.s IL_0C*/
if (st_01){
__braille_pos_0__ = 0xC;continue;
}
/* IL_05: ldstr False*/
st_02 = new_string("False");
/* IL_0A: br.s IL_11*/
__braille_pos_0__ = 0x11;
continue;
case 0xC:
/* IL_0C: ldstr True*/
st_02 = new_string("True");
case 0x11:
/* IL_11: nop */

/* IL_12: stloc.0 */
loc0 = st_02;
/* IL_15: ldloc.0 */
st_03 = loc0;
/* IL_16: ret */
return st_03;
}
} };
asm.x600005c_init = function () { 
 (((asm0)["System.Byte"])().init)();
asm.x600005c = asm.x600005c_; };
asm.x600005c = function (arg0) { 
 (asm.x600005c_init.apply)(this,arguments);
return (asm.x600005c.apply)(this,arguments); };
asm.x600005c_ = function ToString(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var loc0;
 t0 = ((asm0)["System.Byte"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.u1 */
st_01 = st_00.boxed;
/* IL_03: box System.Byte*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x600005d_init = function () { 
 (((asm0)["System.Char"])().init)();
asm.x600005d = asm.x600005d_; };
asm.x600005d = function (arg0) { 
 (asm.x600005d_init.apply)(this,arguments);
return (asm.x600005d.apply)(this,arguments); };
asm.x600005d_ = function ToString(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var loc0;
 t0 = ((asm0)["System.Char"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.u2 */
st_01 = st_00.boxed;
/* IL_03: box System.Char*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String ToStringImpl(System.Object)*/
st_03 = (function(o) { return new_string(String.fromCharCode(o.boxed)); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000060 = function WriteLine(arg0) { var st_00;
var st_01;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: callvirt String ToString()*/
st_01 = ((st_00.vtable)["asm0.x6000003"])(st_00);
/* IL_07: call Void WriteLineImpl(System.String)*/
((function (o) { console.log(o.jsstr); }))(st_01);
/* IL_0C: nop */
/* IL_0D: ret */
return ; };
asm.x6000061 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000062_init = function () { 
 (((asm0)["System.Double"])().init)();
asm.x6000062 = asm.x6000062_; };
asm.x6000062 = function (arg0) { 
 (asm.x6000062_init.apply)(this,arguments);
return (asm.x6000062.apply)(this,arguments); };
asm.x6000062_ = function ToString(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var loc0;
 t0 = ((asm0)["System.Double"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.r8 */
st_01 = st_00.boxed;
/* IL_03: box System.Double*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000065 = function get_Message(arg0) { var st_00;
var st_01;
var st_02;
var loc0;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldfld String <Message>k__BackingField*/
st_01 = (st_00)["SystemException<Message>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x6000066 = function set_Message(arg0,arg1) { var st_00;
var st_01;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldarg.1 */
st_01 = arg1;
/* IL_02: stfld String <Message>k__BackingField*/
(st_00)["SystemException<Message>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x6000063 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: ret */
return ; };
asm.x6000064 = function _ctor(arg0,arg1) { var st_00;
var st_01;
var st_02;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: ldarg.0 */
st_01 = arg0;
/* IL_09: ldarg.1 */
st_02 = arg1;
/* IL_0A: call Void set_Message(System.String)*/
(asm0.x6000066)(st_01,st_02);
/* IL_0F: nop */
/* IL_10: nop */
/* IL_11: ret */
return ; };
asm.x6000067 = function _ctor(arg0,arg1) { var st_00;
var st_01;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldarg.1 */
st_01 = arg1;
/* IL_02: call Void .ctor(System.String)*/
(asm0.x6000064)(st_00,st_01);
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: nop */
/* IL_0A: ret */
return ; };
asm.x6000068 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000032)(st_00);
/* IL_06: ret */
return ; };
asm.x600006a_init = function () { 
 (((asm0)["System.Int16"])().init)();
asm.x600006a = asm.x600006a_; };
asm.x600006a = function (arg0) { 
 (asm.x600006a_init.apply)(this,arguments);
return (asm.x600006a.apply)(this,arguments); };
asm.x600006a_ = function ToString(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var loc0;
 t0 = ((asm0)["System.Int16"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.i2 */
st_01 = st_00.boxed;
/* IL_03: box System.Int16*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x600006b_init = function () { 
 (((asm0)["System.Int32"])().init)();
asm.x600006b = asm.x600006b_; };
asm.x600006b = function (arg0) { 
 (asm.x600006b_init.apply)(this,arguments);
return (asm.x600006b.apply)(this,arguments); };
asm.x600006b_ = function ToString(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var loc0;
 t0 = ((asm0)["System.Int32"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.i4 */
st_01 = st_00.boxed;
/* IL_03: box System.Int32*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x600006d_init = function () { 
 (((asm0)["System.Int64"])().init)();
asm.x600006d = asm.x600006d_; };
asm.x600006d = function (arg0) { 
 (asm.x600006d_init.apply)(this,arguments);
return (asm.x600006d.apply)(this,arguments); };
asm.x600006d_ = function ToString(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var loc0;
 t0 = ((asm0)["System.Int64"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.i8 */
st_01 = st_00.boxed;
/* IL_03: box System.Int64*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x600006e_init = function () { 
 (((asm0)["System.IntPtr"])().init)();
asm.x600006e = asm.x600006e_; };
asm.x600006e = function (arg0) { 
 (asm.x600006e_init.apply)(this,arguments);
return (asm.x600006e.apply)(this,arguments); };
asm.x600006e_ = function ToString(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var loc0;
 t0 = ((asm0)["System.IntPtr"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldobj System.IntPtr*/
st_01 = st_00;
/* IL_07: box System.IntPtr*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_0C: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_11: stloc.0 */
loc0 = st_03;
/* IL_14: ldloc.0 */
st_04 = loc0;
/* IL_15: ret */
return st_04; };
asm.x600006f_init = function () { 
 (((asm0)["System.Double"])().init)();
asm.x600006f = asm.x600006f_; };
asm.x600006f = function (arg0) { 
 (asm.x600006f_init.apply)(this,arguments);
return (asm.x600006f.apply)(this,arguments); };
asm.x600006f_ = function Sqrt(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var loc0;
 t0 = ((asm0)["System.Double"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: box System.Double*/
st_01 = { 
'boxed': st_00,
'vtable': t0.prototype.vtable 
};
/* IL_07: call Double SqrtImpl(System.Object)*/
st_02 = (function(o) { return Math.sqrt(o.boxed); })(st_01);
/* IL_0C: stloc.0 */
loc0 = st_02;
/* IL_0F: ldloc.0 */
st_03 = loc0;
/* IL_10: ret */
return st_03; };
asm.x6000070_init = function () { 
 (((asm0)["System.Double"])().init)();
asm.x6000070 = asm.x6000070_; };
asm.x6000070 = function (arg0) { 
 (asm.x6000070_init.apply)(this,arguments);
return (asm.x6000070.apply)(this,arguments); };
asm.x6000070_ = function Floor(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var loc0;
 t0 = ((asm0)["System.Double"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: box System.Double*/
st_01 = { 
'boxed': st_00,
'vtable': t0.prototype.vtable 
};
/* IL_07: call Double FloorImpl(System.Object)*/
st_02 = (function(o) { return Math.floor(o.boxed); })(st_01);
/* IL_0C: stloc.0 */
loc0 = st_02;
/* IL_0F: ldloc.0 */
st_03 = loc0;
/* IL_10: ret */
return st_03; };
asm.x6000071_init = function () { 
 (((asm0)["System.Double"])().init)();
asm.x6000071 = asm.x6000071_; };
asm.x6000071 = function (arg0,arg1) { 
 (asm.x6000071_init.apply)(this,arguments);
return (asm.x6000071.apply)(this,arguments); };
asm.x6000071_ = function Pow(arg0,arg1) { var t0;
var st_00;
var st_02;
var st_01;
var st_03;
var st_04;
var st_05;
var loc0;
 t0 = ((asm0)["System.Double"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: box System.Double*/
st_02 = { 
'boxed': st_00,
'vtable': t0.prototype.vtable 
};
/* IL_07: ldarg.1 */
st_01 = arg1;
/* IL_08: box System.Double*/
st_03 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_0D: call Double PowImpl(System.Object, System.Object)*/
st_04 = (function(a, b) { return Math.pow(a.boxed, b.boxed); })(st_02,st_03);
/* IL_12: stloc.0 */
loc0 = st_04;
/* IL_15: ldloc.0 */
st_05 = loc0;
/* IL_16: ret */
return st_05; };
asm.x6000075 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000076 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000032)(st_00);
/* IL_06: ret */
return ; };
asm.x6000077_init = function () { 
 (((asm0)["System.SByte"])().init)();
asm.x6000077 = asm.x6000077_; };
asm.x6000077 = function (arg0) { 
 (asm.x6000077_init.apply)(this,arguments);
return (asm.x6000077.apply)(this,arguments); };
asm.x6000077_ = function ToString(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var loc0;
 t0 = ((asm0)["System.SByte"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.i1 */
st_01 = st_00.boxed;
/* IL_03: box System.SByte*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000078_init = function () { 
 (((asm0)["System.Single"])().init)();
asm.x6000078 = asm.x6000078_; };
asm.x6000078 = function (arg0) { 
 (asm.x6000078_init.apply)(this,arguments);
return (asm.x6000078.apply)(this,arguments); };
asm.x6000078_ = function ToString(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var loc0;
 t0 = ((asm0)["System.Single"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.r4 */
st_01 = st_00.boxed;
/* IL_03: box System.Single*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000079 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600007a_init = function () { 
 (((asm0)["System.UInt16"])().init)();
asm.x600007a = asm.x600007a_; };
asm.x600007a = function (arg0) { 
 (asm.x600007a_init.apply)(this,arguments);
return (asm.x600007a.apply)(this,arguments); };
asm.x600007a_ = function ToString(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var loc0;
 t0 = ((asm0)["System.UInt16"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.u2 */
st_01 = st_00.boxed;
/* IL_03: box System.UInt16*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x600007b_init = function () { 
 (((asm0)["System.UInt32"])().init)();
asm.x600007b = asm.x600007b_; };
asm.x600007b = function (arg0) { 
 (asm.x600007b_init.apply)(this,arguments);
return (asm.x600007b.apply)(this,arguments); };
asm.x600007b_ = function ToString(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var loc0;
 t0 = ((asm0)["System.UInt32"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.u4 */
st_01 = st_00.boxed;
/* IL_03: box System.UInt32*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x600007c_init = function () { 
 (((asm0)["System.UInt64"])().init)();
asm.x600007c = asm.x600007c_; };
asm.x600007c = function (arg0) { 
 (asm.x600007c_init.apply)(this,arguments);
return (asm.x600007c.apply)(this,arguments); };
asm.x600007c_ = function ToString(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var loc0;
 t0 = ((asm0)["System.UInt64"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.i8 */
st_01 = st_00.boxed;
/* IL_03: box System.UInt64*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x600007d_init = function () { 
 (((asm0)["System.UIntPtr"])().init)();
asm.x600007d = asm.x600007d_; };
asm.x600007d = function (arg0) { 
 (asm.x600007d_init.apply)(this,arguments);
return (asm.x600007d.apply)(this,arguments); };
asm.x600007d_ = function ToString(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var loc0;
 t0 = ((asm0)["System.UIntPtr"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldobj System.UIntPtr*/
st_01 = st_00;
/* IL_07: box System.UIntPtr*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_0C: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_11: stloc.0 */
loc0 = st_03;
/* IL_14: ldloc.0 */
st_04 = loc0;
/* IL_15: ret */
return st_04; };
asm.x600007e = function _ctor(arg0) { var st_00;
var st_01;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldstr Operation not supported*/
st_01 = new_string("Operation not supported");
/* IL_06: call Void .ctor(System.String)*/
(asm0.x6000064)(st_00,st_01);
/* IL_0B: nop */
/* IL_0C: nop */
/* IL_0D: nop */
/* IL_0E: ret */
return ; };
asm.x600007f = function _ctor(arg0,arg1) { var st_00;
var st_01;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldarg.1 */
st_01 = arg1;
/* IL_02: call Void .ctor(System.String)*/
(asm0.x6000064)(st_00,st_01);
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: nop */
/* IL_0A: ret */
return ; };
asm.x6000080 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000063)(st_00);
/* IL_06: ret */
return ; };
asm.x6000081 = function get_CurrentManagedThreadId() { var st_00;
var st_01;
var loc0;
 /* IL_00: nop */
/* IL_01: ldc.i4.0 */
st_00 = 0;
/* IL_02: stloc.0 */
loc0 = st_00;
/* IL_05: ldloc.0 */
st_01 = loc0;
/* IL_06: ret */
return st_01; };
asm.x6000083 = function Invoke() { 
 
                                            var m = arguments[0]._methodPtr;
                                            var t = arguments[0]._target;
                                            if (t != null)
                                                arguments[0] = t;
                                            else
                                                arguments = Array.prototype.slice.call(arguments, 1);
                                            return m.apply(null, arguments); };
asm.x6000082 = function ctor() { 
 arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];; };
asm.x600008f = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000090 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000032)(st_00);
/* IL_06: ret */
return ; };
asm.x6000091 = function _ctor(arg0,arg1) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000032)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: ret */
return ; };
asm.x6000092 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000032)(st_00);
/* IL_06: ret */
return ; };
(asm)["System.Object"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function $$Object() { 
 ($$Object.init)();
this.constructor = $$Object; };
$$Object.init = function () { 
 if (initialized){
return;
}
initialized = true;
$$Object.Interfaces = [  ];
$$Object.IsInst = function (t) { return t instanceof $$Object; };
$$Object.IsValueType = false;
$$Object.IsPrimitive = false;
$$Object.IsNullable = false;
$$Object.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
$$Object.prototype = { 
 
};;
c = $$Object;
ct = c;
return c; }; })();
(asm)["System.Delegate"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Delegate() { 
 (Delegate.init)();
this.constructor = Delegate; };
Delegate.init = function () { 
 if (initialized){
return;
}
initialized = true;
Delegate.Interfaces = [  ];
Delegate.IsInst = function (t) { return t instanceof Delegate; };
Delegate.IsValueType = false;
Delegate.IsPrimitive = false;
Delegate.IsNullable = false;
Delegate.prototype._methodPtr = null;
Delegate.prototype._target = null;
Delegate.prototype.vtable = { 
'asm0.x600000c': asm0.x600000c,
'asm0.x600000d': asm0.x600000d,
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Delegate.prototype = new (((asm0)["System.Object"])())();;
c = Delegate;
ct = c;
return c; }; })();
(asm)["System.MulticastDelegate"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function MulticastDelegate() { 
 (MulticastDelegate.init)();
this.constructor = MulticastDelegate; };
MulticastDelegate.init = function () { 
 if (initialized){
return;
}
initialized = true;
MulticastDelegate.Interfaces = [  ];
MulticastDelegate.IsInst = function (t) { return t instanceof MulticastDelegate; };
MulticastDelegate.IsValueType = false;
MulticastDelegate.IsPrimitive = false;
MulticastDelegate.IsNullable = false;
MulticastDelegate.prototype._invocationList = null;
MulticastDelegate.prototype._methodPtr = null;
MulticastDelegate.prototype._target = null;
MulticastDelegate.prototype.vtable = { 
'asm0.x600000d': asm0.x6000012,
'asm0.x600000c': asm0.x6000013,
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
MulticastDelegate.prototype = new (((asm0)["System.Delegate"])())();;
c = MulticastDelegate;
ct = c;
return c; }; })();
(asm)["System.EventArgs"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function EventArgs() { 
 (EventArgs.init)();
this.constructor = EventArgs; };
EventArgs.init = function () { 
 if (initialized){
return;
}
initialized = true;
EventArgs.Empty = null;
EventArgs.Interfaces = [  ];
EventArgs.IsInst = function (t) { return t instanceof EventArgs; };
EventArgs.IsValueType = false;
EventArgs.IsPrimitive = false;
EventArgs.IsNullable = false;
(asm0.x6000016)();
EventArgs.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
EventArgs.prototype = new (((asm0)["System.Object"])())();;
c = EventArgs;
ct = c;
return c; }; })();
(asm)["System.EventHandler"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function EventHandler() { 
 (EventHandler.init)();
this.constructor = EventHandler; };
EventHandler.init = function () { 
 if (initialized){
return;
}
initialized = true;
EventHandler.Interfaces = [  ];
EventHandler.IsInst = function (t) { return t instanceof EventHandler; };
EventHandler.IsValueType = false;
EventHandler.IsPrimitive = false;
EventHandler.IsNullable = false;
EventHandler.prototype._invocationList = null;
EventHandler.prototype._methodPtr = null;
EventHandler.prototype._target = null;
EventHandler.prototype.vtable = { 
'asm0.x6000018': asm0.x6000018,
'asm0.x600000d': asm0.x6000012,
'asm0.x600000c': asm0.x6000013,
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
EventHandler.prototype = { 
 
};;
c = EventHandler;
ct = c;
return c; }; })();
(asm)["System.Collections.IEnumerable"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function IEnumerable() { 
 (IEnumerable.init)();
this.constructor = IEnumerable; };
IEnumerable.init = function () { 
 if (initialized){
return;
}
initialized = true;
IEnumerable.Interfaces = [  ];
IEnumerable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerable) != -1; };
IEnumerable.IsValueType = false;
IEnumerable.IsPrimitive = false;
IEnumerable.IsNullable = false;
IEnumerable.prototype.vtable = { 
'asm0.x6000019': asm0.x6000019 
}; };
IEnumerable.prototype = { 
 
};;
c = IEnumerable;
ct = c;
return c; }; })();
(asm)["System.Array"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Array() { 
 (Array.init)();
this.constructor = Array; };
Array.init = function () { 
 if (initialized){
return;
}
initialized = true;
Array.Interfaces = [ ((asm0)["System.Collections.IEnumerable"])() ];
Array.IsInst = function (t) { return t instanceof Array; };
Array.IsValueType = false;
Array.IsPrimitive = false;
Array.IsNullable = false;
Array.prototype.type = null;
Array.prototype.jsarr = null;
Array.prototype.vtable = { 
'asm0.x600001e': asm0.x600001e,
'asm0.x600001f': asm0.x600001f,
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
};
(Array.prototype)[((asm0)["System.Collections.IEnumerable"])()] = { 
'x6000019': asm0.x600001e 
}; };
Array.prototype = new (((asm0)["System.Object"])())();;
c = Array;
ct = c;
return c; }; })();
(asm)["System.Collections.Generic.IEnumerable`1"] = (function () { var ct;
 ct = { 
 
};
return function (T) { var c;
var initialized;
 c = tree_get([ T ],ct);
if (c){
return c;
}
initialized = false;;
function IEnumerable_1() { 
 (IEnumerable_1.init)();
this.constructor = IEnumerable_1; };
IEnumerable_1.init = function () { 
 if (initialized){
return;
}
initialized = true;
IEnumerable_1.Interfaces = [ ((asm0)["System.Collections.IEnumerable"])() ];
IEnumerable_1.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerable_1) != -1; };
IEnumerable_1.IsValueType = false;
IEnumerable_1.IsPrimitive = false;
IEnumerable_1.IsNullable = false;
IEnumerable_1.GenericArguments = [ T ];
IEnumerable_1.prototype.vtable = { 
'asm0.x6000021': asm0.x6000021 
}; };
IEnumerable_1.prototype = { 
 
};;
c = IEnumerable_1;
tree_set([ T ],ct,c);
return c; }; })();
(asm)["System.Array`1"] = (function () { var ct;
 ct = { 
 
};
return function (T) { var c;
var initialized;
 c = tree_get([ T ],ct);
if (c){
return c;
}
initialized = false;;
function Array_1() { 
 (Array_1.init)();
this.constructor = Array_1; };
Array_1.init = function () { 
 if (initialized){
return;
}
initialized = true;
Array_1.Interfaces = [ ((asm0)["System.Collections.Generic.IEnumerable`1"])(T),((asm0)["System.Collections.IEnumerable"])() ];
Array_1.IsInst = function (t) { return t instanceof Array_1; };
Array_1.IsValueType = false;
Array_1.IsPrimitive = false;
Array_1.IsNullable = false;
Array_1.GenericArguments = [ T ];
Array_1.prototype.type = null;
Array_1.prototype.jsarr = null;
Array_1.prototype.vtable = { 
'asm0.x6000023': asm0.x6000023,
'asm0.x600001f': asm0.x6000024,
'asm0.x600001e': asm0.x600001e,
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
};
(Array_1.prototype)[((asm0)["System.Collections.Generic.IEnumerable`1"])(T)] = { 
'x6000021': asm0.x6000023 
};
(Array_1.prototype)[((asm0)["System.Collections.IEnumerable"])()] = { 
'x6000019': asm0.x600001e 
}; };
Array_1.prototype = new (((asm0)["System.Array"])())();;
c = Array_1;
tree_set([ T ],ct,c);
return c; }; })();
(asm)["System.IDisposable"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function IDisposable() { 
 (IDisposable.init)();
this.constructor = IDisposable; };
IDisposable.init = function () { 
 if (initialized){
return;
}
initialized = true;
IDisposable.Interfaces = [  ];
IDisposable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IDisposable) != -1; };
IDisposable.IsValueType = false;
IDisposable.IsPrimitive = false;
IDisposable.IsNullable = false;
IDisposable.prototype.vtable = { 
'asm0.x6000026': asm0.x6000026 
}; };
IDisposable.prototype = { 
 
};;
c = IDisposable;
ct = c;
return c; }; })();
(asm)["System.Collections.IEnumerator"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function IEnumerator() { 
 (IEnumerator.init)();
this.constructor = IEnumerator; };
IEnumerator.init = function () { 
 if (initialized){
return;
}
initialized = true;
IEnumerator.Interfaces = [ ((asm0)["System.IDisposable"])() ];
IEnumerator.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerator) != -1; };
IEnumerator.IsValueType = false;
IEnumerator.IsPrimitive = false;
IEnumerator.IsNullable = false;
IEnumerator.prototype.vtable = { 
'asm0.x6000027': asm0.x6000027,
'asm0.x6000028': asm0.x6000028,
'asm0.x6000029': asm0.x6000029 
}; };
IEnumerator.prototype = { 
 
};;
c = IEnumerator;
ct = c;
return c; }; })();
(asm)["System.Collections.Generic.IEnumerator`1"] = (function () { var ct;
 ct = { 
 
};
return function (T) { var c;
var initialized;
 c = tree_get([ T ],ct);
if (c){
return c;
}
initialized = false;;
function IEnumerator_1() { 
 (IEnumerator_1.init)();
this.constructor = IEnumerator_1; };
IEnumerator_1.init = function () { 
 if (initialized){
return;
}
initialized = true;
IEnumerator_1.Interfaces = [ ((asm0)["System.Collections.IEnumerator"])(),((asm0)["System.IDisposable"])() ];
IEnumerator_1.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerator_1) != -1; };
IEnumerator_1.IsValueType = false;
IEnumerator_1.IsPrimitive = false;
IEnumerator_1.IsNullable = false;
IEnumerator_1.GenericArguments = [ T ];
IEnumerator_1.prototype.vtable = { 
'asm0.x600002a': asm0.x600002a,
'asm0.x600002b': asm0.x600002b 
}; };
IEnumerator_1.prototype = { 
 
};;
c = IEnumerator_1;
tree_set([ T ],ct,c);
return c; }; })();
(asm)["System.Array`1+ArrayEnumerator"] = (function () { var ct;
 ct = { 
 
};
return function (T) { var c;
var initialized;
 c = tree_get([ T ],ct);
if (c){
return c;
}
initialized = false;;
function ArrayEnumerator() { 
 (ArrayEnumerator.init)();
this.constructor = ArrayEnumerator; };
ArrayEnumerator.init = function () { 
 if (initialized){
return;
}
initialized = true;
ArrayEnumerator.Interfaces = [ ((asm0)["System.Collections.Generic.IEnumerator`1"])(T),((asm0)["System.Collections.IEnumerator"])(),((asm0)["System.IDisposable"])() ];
ArrayEnumerator.IsInst = function (t) { return t instanceof ArrayEnumerator; };
ArrayEnumerator.IsValueType = false;
ArrayEnumerator.IsPrimitive = false;
ArrayEnumerator.IsNullable = false;
ArrayEnumerator.GenericArguments = [ T ];
ArrayEnumerator.prototype.index = 0;
ArrayEnumerator.prototype.length = 0;
ArrayEnumerator.prototype.source = null;
ArrayEnumerator.prototype.vtable = { 
'asm0.x600002d': asm0.x600002d,
'asm0.x600002e': asm0.x600002e,
'asm0.x600002f': asm0.x600002f,
'asm0.x6000030': asm0.x6000030,
'asm0.x6000031': asm0.x6000031,
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
};
(ArrayEnumerator.prototype)[((asm0)["System.Collections.Generic.IEnumerator`1"])(T)] = { 
'x600002a': asm0.x600002d,
'x600002b': asm0.x600002e 
};
(ArrayEnumerator.prototype)[((asm0)["System.Collections.IEnumerator"])()] = { 
'x6000027': asm0.x600002f,
'x6000028': asm0.x600002e,
'x6000029': asm0.x6000030 
};
(ArrayEnumerator.prototype)[((asm0)["System.IDisposable"])()] = { 
'x6000026': asm0.x6000031 
}; };
ArrayEnumerator.prototype = new (((asm0)["System.Object"])())();;
c = ArrayEnumerator;
tree_set([ T ],ct,c);
return c; }; })();
(asm)["System.Attribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Attribute() { 
 (Attribute.init)();
this.constructor = Attribute; };
Attribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
Attribute.Interfaces = [  ];
Attribute.IsInst = function (t) { return t instanceof Attribute; };
Attribute.IsValueType = false;
Attribute.IsPrimitive = false;
Attribute.IsNullable = false;
Attribute.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Attribute.prototype = new (((asm0)["System.Object"])())();;
c = Attribute;
ct = c;
return c; }; })();
(asm)["System.Diagnostics.DebuggerStepThroughAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function DebuggerStepThroughAttribute() { 
 (DebuggerStepThroughAttribute.init)();
this.constructor = DebuggerStepThroughAttribute; };
DebuggerStepThroughAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
DebuggerStepThroughAttribute.Interfaces = [  ];
DebuggerStepThroughAttribute.IsInst = function (t) { return t instanceof DebuggerStepThroughAttribute; };
DebuggerStepThroughAttribute.IsValueType = false;
DebuggerStepThroughAttribute.IsPrimitive = false;
DebuggerStepThroughAttribute.IsNullable = false;
DebuggerStepThroughAttribute.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
DebuggerStepThroughAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = DebuggerStepThroughAttribute;
ct = c;
return c; }; })();
(asm)["System.ValueType"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function ValueType() { 
 (ValueType.init)();
this.constructor = ValueType; };
ValueType.init = function () { 
 if (initialized){
return;
}
initialized = true;
ValueType.Interfaces = [  ];
ValueType.IsInst = function (t) { return t instanceof ValueType; };
ValueType.IsValueType = false;
ValueType.IsPrimitive = false;
ValueType.IsNullable = false;
ValueType.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
ValueType.prototype = new (((asm0)["System.Object"])())();;
c = ValueType;
ct = c;
return c; }; })();
(asm)["System.Enum"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Enum() { 
 (Enum.init)();
this.constructor = Enum; };
Enum.init = function () { 
 if (initialized){
return;
}
initialized = true;
Enum.Interfaces = [  ];
Enum.IsInst = function (t) { return t instanceof Enum; };
Enum.IsValueType = false;
Enum.IsPrimitive = false;
Enum.IsNullable = false;
Enum.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Enum.prototype = { 
 
};;
c = Enum;
ct = c;
return c; }; })();
(asm)["System.AttributeTargets"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function AttributeTargets() { 
 (AttributeTargets.init)();
this.constructor = AttributeTargets; };
AttributeTargets.init = function () { 
 if (initialized){
return;
}
initialized = true;
AttributeTargets.Assembly = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Module = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Class = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Struct = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Enum = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Constructor = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Method = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Property = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Field = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Event = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Interface = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Parameter = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Delegate = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.ReturnValue = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.GenericParameter = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.All = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Interfaces = [  ];
AttributeTargets.IsInst = function (t) { return t instanceof AttributeTargets; };
AttributeTargets.IsValueType = true;
AttributeTargets.IsPrimitive = false;
AttributeTargets.IsNullable = false;
AttributeTargets.prototype.value__ = 0;
AttributeTargets.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
AttributeTargets.prototype = new (((asm0)["System.Enum"])())();;
c = AttributeTargets;
ct = c;
return c; }; })();
(asm)["System.ComVisibleAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function ComVisibleAttribute() { 
 (ComVisibleAttribute.init)();
this.constructor = ComVisibleAttribute; };
ComVisibleAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
ComVisibleAttribute.Interfaces = [  ];
ComVisibleAttribute.IsInst = function (t) { return t instanceof ComVisibleAttribute; };
ComVisibleAttribute.IsValueType = false;
ComVisibleAttribute.IsPrimitive = false;
ComVisibleAttribute.IsNullable = false;
ComVisibleAttribute.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
ComVisibleAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = ComVisibleAttribute;
ct = c;
return c; }; })();
(asm)["System.Nullable`1"] = (function () { var ct;
 ct = { 
 
};
return function (T) { var c;
var initialized;
 c = tree_get([ T ],ct);
if (c){
return c;
}
initialized = false;;
function Nullable_1() { 
 (Nullable_1.init)();
this.constructor = Nullable_1; };
Nullable_1.init = function () { 
 if (initialized){
return;
}
initialized = true;
Nullable_1.Interfaces = [  ];
Nullable_1.IsInst = function (t) { return t instanceof Nullable_1; };
Nullable_1.IsValueType = true;
Nullable_1.IsPrimitive = false;
Nullable_1.IsNullable = true;
Nullable_1.GenericArguments = [ T ];
Nullable_1.prototype.value = (T.IsValueType) ? ((T.IsPrimitive) ? (0) : (new T())) : (null);
Nullable_1.prototype.has_value = false;
Nullable_1.prototype.vtable = { 
'asm0.x6000007': asm0.x600003a,
'asm0.x6000004': asm0.x600003c,
'asm0.x6000003': asm0.x600003f 
}; };
Nullable_1.prototype = { 
 
};;
c = Nullable_1;
tree_set([ T ],ct,c);
return c; }; })();
(asm)["System.SerializableAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function SerializableAttribute() { 
 (SerializableAttribute.init)();
this.constructor = SerializableAttribute; };
SerializableAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
SerializableAttribute.Interfaces = [  ];
SerializableAttribute.IsInst = function (t) { return t instanceof SerializableAttribute; };
SerializableAttribute.IsValueType = false;
SerializableAttribute.IsPrimitive = false;
SerializableAttribute.IsNullable = false;
SerializableAttribute.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
SerializableAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = SerializableAttribute;
ct = c;
return c; }; })();
(asm)["System.String"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function $$String() { 
 ($$String.init)();
this.constructor = $$String; };
$$String.init = function () { 
 if (initialized){
return;
}
initialized = true;
$$String.Empty = null;
$$String.Interfaces = [  ];
$$String.IsInst = function (t) { return t instanceof $$String; };
$$String.IsValueType = false;
$$String.IsPrimitive = false;
$$String.IsNullable = false;
(asm0.x6000053)();
$$String.prototype.jsstr = null;
$$String.prototype.vtable = { 
'asm0.x6000003': asm0.x600004e,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
$$String.prototype = new (((asm0)["System.Object"])())();;
c = $$String;
ct = c;
return c; }; })();
(asm)["System.Reflection.DefaultMemberAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function DefaultMemberAttribute() { 
 (DefaultMemberAttribute.init)();
this.constructor = DefaultMemberAttribute; };
DefaultMemberAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
DefaultMemberAttribute.Interfaces = [  ];
DefaultMemberAttribute.IsInst = function (t) { return t instanceof DefaultMemberAttribute; };
DefaultMemberAttribute.IsValueType = false;
DefaultMemberAttribute.IsPrimitive = false;
DefaultMemberAttribute.IsNullable = false;
DefaultMemberAttribute.prototype.System_ReflectionDefaultMemberAttributemember_name = null;
DefaultMemberAttribute.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
DefaultMemberAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = DefaultMemberAttribute;
ct = c;
return c; }; })();
(asm)["System.AttributeUsageAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function AttributeUsageAttribute() { 
 (AttributeUsageAttribute.init)();
this.constructor = AttributeUsageAttribute; };
AttributeUsageAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
AttributeUsageAttribute.Interfaces = [  ];
AttributeUsageAttribute.IsInst = function (t) { return t instanceof AttributeUsageAttribute; };
AttributeUsageAttribute.IsValueType = false;
AttributeUsageAttribute.IsPrimitive = false;
AttributeUsageAttribute.IsNullable = false;
(AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = new (((asm0)["System.AttributeTargets"])())();
(AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = false;
AttributeUsageAttribute.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
AttributeUsageAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = AttributeUsageAttribute;
ct = c;
return c; }; })();
(asm)["System.Boolean"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function $$Boolean() { 
 ($$Boolean.init)();
this.constructor = $$Boolean; };
$$Boolean.init = function () { 
 if (initialized){
return;
}
initialized = true;
$$Boolean.Interfaces = [  ];
$$Boolean.IsInst = function (t) { return t instanceof $$Boolean; };
$$Boolean.IsValueType = true;
$$Boolean.IsPrimitive = true;
$$Boolean.IsNullable = false;
$$Boolean.prototype.vtable = { 
'asm0.x6000003': asm0.x600005b,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
$$Boolean.prototype = { 
 
};;
c = $$Boolean;
ct = c;
return c; }; })();
(asm)["System.Byte"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Byte() { 
 (Byte.init)();
this.constructor = Byte; };
Byte.init = function () { 
 if (initialized){
return;
}
initialized = true;
Byte.Interfaces = [  ];
Byte.IsInst = function (t) { return t instanceof Byte; };
Byte.IsValueType = true;
Byte.IsPrimitive = true;
Byte.IsNullable = false;
Byte.prototype.vtable = { 
'asm0.x6000003': asm0.x600005c,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Byte.prototype = { 
 
};;
c = Byte;
ct = c;
return c; }; })();
(asm)["System.Char"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Char() { 
 (Char.init)();
this.constructor = Char; };
Char.init = function () { 
 if (initialized){
return;
}
initialized = true;
Char.MinValue = 0;
Char.MaxValue = 0;
Char.Interfaces = [  ];
Char.IsInst = function (t) { return t instanceof Char; };
Char.IsValueType = true;
Char.IsPrimitive = true;
Char.IsNullable = false;
Char.prototype.vtable = { 
'asm0.x6000003': asm0.x600005d,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Char.prototype = { 
 
};;
c = Char;
ct = c;
return c; }; })();
(asm)["System.Console"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Console() { 
 (Console.init)();
this.constructor = Console; };
Console.init = function () { 
 if (initialized){
return;
}
initialized = true;
Console.Interfaces = [  ];
Console.IsInst = function (t) { return t instanceof Console; };
Console.IsValueType = false;
Console.IsPrimitive = false;
Console.IsNullable = false;
Console.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Console.prototype = new (((asm0)["System.Object"])())();;
c = Console;
ct = c;
return c; }; })();
(asm)["System.Double"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Double() { 
 (Double.init)();
this.constructor = Double; };
Double.init = function () { 
 if (initialized){
return;
}
initialized = true;
Double.Epsilon = 0;
Double.MaxValue = 0;
Double.MinValue = 0;
Double.NaN = 0;
Double.NegativeInfinity = 0;
Double.PositiveInfinity = 0;
Double.Interfaces = [  ];
Double.IsInst = function (t) { return t instanceof Double; };
Double.IsValueType = true;
Double.IsPrimitive = true;
Double.IsNullable = false;
Double.prototype.vtable = { 
'asm0.x6000003': asm0.x6000062,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Double.prototype = { 
 
};;
c = Double;
ct = c;
return c; }; })();
(asm)["System.Exception"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Exception() { 
 (Exception.init)();
this.constructor = Exception; };
Exception.init = function () { 
 if (initialized){
return;
}
initialized = true;
Exception.Interfaces = [  ];
Exception.IsInst = function (t) { return t instanceof Exception; };
Exception.IsValueType = false;
Exception.IsPrimitive = false;
Exception.IsNullable = false;
(Exception.prototype)["SystemException<Message>k__BackingField"] = null;
Exception.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Exception.prototype = new (((asm0)["System.Object"])())();;
c = Exception;
ct = c;
return c; }; })();
(asm)["System.InvalidOperationException"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function InvalidOperationException() { 
 (InvalidOperationException.init)();
this.constructor = InvalidOperationException; };
InvalidOperationException.init = function () { 
 if (initialized){
return;
}
initialized = true;
InvalidOperationException.Interfaces = [  ];
InvalidOperationException.IsInst = function (t) { return t instanceof InvalidOperationException; };
InvalidOperationException.IsValueType = false;
InvalidOperationException.IsPrimitive = false;
InvalidOperationException.IsNullable = false;
InvalidOperationException.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
InvalidOperationException.prototype = new (((asm0)["System.Exception"])())();;
c = InvalidOperationException;
ct = c;
return c; }; })();
(asm)["System.FlagsAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function FlagsAttribute() { 
 (FlagsAttribute.init)();
this.constructor = FlagsAttribute; };
FlagsAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
FlagsAttribute.Interfaces = [  ];
FlagsAttribute.IsInst = function (t) { return t instanceof FlagsAttribute; };
FlagsAttribute.IsValueType = false;
FlagsAttribute.IsPrimitive = false;
FlagsAttribute.IsNullable = false;
FlagsAttribute.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
FlagsAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = FlagsAttribute;
ct = c;
return c; }; })();
(asm)["System.ICloneable"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function ICloneable() { 
 (ICloneable.init)();
this.constructor = ICloneable; };
ICloneable.init = function () { 
 if (initialized){
return;
}
initialized = true;
ICloneable.Interfaces = [  ];
ICloneable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(ICloneable) != -1; };
ICloneable.IsValueType = false;
ICloneable.IsPrimitive = false;
ICloneable.IsNullable = false;
ICloneable.prototype.vtable = { 
'asm0.x6000069': asm0.x6000069 
}; };
ICloneable.prototype = { 
 
};;
c = ICloneable;
ct = c;
return c; }; })();
(asm)["System.Int16"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Int16() { 
 (Int16.init)();
this.constructor = Int16; };
Int16.init = function () { 
 if (initialized){
return;
}
initialized = true;
Int16.Interfaces = [  ];
Int16.IsInst = function (t) { return t instanceof Int16; };
Int16.IsValueType = true;
Int16.IsPrimitive = true;
Int16.IsNullable = false;
Int16.prototype.vtable = { 
'asm0.x6000003': asm0.x600006a,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Int16.prototype = { 
 
};;
c = Int16;
ct = c;
return c; }; })();
(asm)["System.Int32"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Int32() { 
 (Int32.init)();
this.constructor = Int32; };
Int32.init = function () { 
 if (initialized){
return;
}
initialized = true;
Int32.Interfaces = [  ];
Int32.IsInst = function (t) { return t instanceof Int32; };
Int32.IsValueType = true;
Int32.IsPrimitive = true;
Int32.IsNullable = false;
Int32.prototype.vtable = { 
'asm0.x6000003': asm0.x600006b,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Int32.prototype = { 
 
};;
c = Int32;
ct = c;
return c; }; })();
(asm)["System.InternalFormatting"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function InternalFormatting() { 
 (InternalFormatting.init)();
this.constructor = InternalFormatting; };
InternalFormatting.init = function () { 
 if (initialized){
return;
}
initialized = true;
InternalFormatting.Interfaces = [  ];
InternalFormatting.IsInst = function (t) { return t instanceof InternalFormatting; };
InternalFormatting.IsValueType = false;
InternalFormatting.IsPrimitive = false;
InternalFormatting.IsNullable = false;
InternalFormatting.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
InternalFormatting.prototype = new (((asm0)["System.Object"])())();;
c = InternalFormatting;
ct = c;
return c; }; })();
(asm)["System.Int64"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Int64() { 
 (Int64.init)();
this.constructor = Int64; };
Int64.init = function () { 
 if (initialized){
return;
}
initialized = true;
Int64.Interfaces = [  ];
Int64.IsInst = function (t) { return t instanceof Int64; };
Int64.IsValueType = true;
Int64.IsPrimitive = true;
Int64.IsNullable = false;
Int64.prototype.vtable = { 
'asm0.x6000003': asm0.x600006d,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Int64.prototype = { 
 
};;
c = Int64;
ct = c;
return c; }; })();
(asm)["System.IntPtr"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function IntPtr() { 
 (IntPtr.init)();
this.constructor = IntPtr; };
IntPtr.init = function () { 
 if (initialized){
return;
}
initialized = true;
IntPtr.Interfaces = [  ];
IntPtr.IsInst = function (t) { return t instanceof IntPtr; };
IntPtr.IsValueType = true;
IntPtr.IsPrimitive = true;
IntPtr.IsNullable = false;
IntPtr.prototype.vtable = { 
'asm0.x6000003': asm0.x600006e,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
IntPtr.prototype = { 
 
};;
c = IntPtr;
ct = c;
return c; }; })();
(asm)["System.Math"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Math() { 
 (Math.init)();
this.constructor = Math; };
Math.init = function () { 
 if (initialized){
return;
}
initialized = true;
Math.PI = 0;
Math.Interfaces = [  ];
Math.IsInst = function (t) { return t instanceof Math; };
Math.IsValueType = false;
Math.IsPrimitive = false;
Math.IsNullable = false;
Math.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Math.prototype = new (((asm0)["System.Object"])())();;
c = Math;
ct = c;
return c; }; })();
(asm)["System.ParamArrayAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function ParamArrayAttribute() { 
 (ParamArrayAttribute.init)();
this.constructor = ParamArrayAttribute; };
ParamArrayAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
ParamArrayAttribute.Interfaces = [  ];
ParamArrayAttribute.IsInst = function (t) { return t instanceof ParamArrayAttribute; };
ParamArrayAttribute.IsValueType = false;
ParamArrayAttribute.IsPrimitive = false;
ParamArrayAttribute.IsNullable = false;
ParamArrayAttribute.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
ParamArrayAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = ParamArrayAttribute;
ct = c;
return c; }; })();
(asm)["System.RuntimeFieldHandle"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function RuntimeFieldHandle() { 
 (RuntimeFieldHandle.init)();
this.constructor = RuntimeFieldHandle; };
RuntimeFieldHandle.init = function () { 
 if (initialized){
return;
}
initialized = true;
RuntimeFieldHandle.Interfaces = [  ];
RuntimeFieldHandle.IsInst = function (t) { return t instanceof RuntimeFieldHandle; };
RuntimeFieldHandle.IsValueType = true;
RuntimeFieldHandle.IsPrimitive = false;
RuntimeFieldHandle.IsNullable = false;
RuntimeFieldHandle.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
RuntimeFieldHandle.prototype = { 
 
};;
c = RuntimeFieldHandle;
ct = c;
return c; }; })();
(asm)["System.RuntimeTypeHandle"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function RuntimeTypeHandle() { 
 (RuntimeTypeHandle.init)();
this.constructor = RuntimeTypeHandle; };
RuntimeTypeHandle.init = function () { 
 if (initialized){
return;
}
initialized = true;
RuntimeTypeHandle.Interfaces = [  ];
RuntimeTypeHandle.IsInst = function (t) { return t instanceof RuntimeTypeHandle; };
RuntimeTypeHandle.IsValueType = true;
RuntimeTypeHandle.IsPrimitive = false;
RuntimeTypeHandle.IsNullable = false;
RuntimeTypeHandle.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
RuntimeTypeHandle.prototype = { 
 
};;
c = RuntimeTypeHandle;
ct = c;
return c; }; })();
(asm)["System.SByte"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function SByte() { 
 (SByte.init)();
this.constructor = SByte; };
SByte.init = function () { 
 if (initialized){
return;
}
initialized = true;
SByte.Interfaces = [  ];
SByte.IsInst = function (t) { return t instanceof SByte; };
SByte.IsValueType = true;
SByte.IsPrimitive = true;
SByte.IsNullable = false;
SByte.prototype.vtable = { 
'asm0.x6000003': asm0.x6000077,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
SByte.prototype = { 
 
};;
c = SByte;
ct = c;
return c; }; })();
(asm)["System.Single"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Single() { 
 (Single.init)();
this.constructor = Single; };
Single.init = function () { 
 if (initialized){
return;
}
initialized = true;
Single.Interfaces = [  ];
Single.IsInst = function (t) { return t instanceof Single; };
Single.IsValueType = true;
Single.IsPrimitive = true;
Single.IsNullable = false;
Single.prototype.vtable = { 
'asm0.x6000003': asm0.x6000078,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Single.prototype = { 
 
};;
c = Single;
ct = c;
return c; }; })();
(asm)["System.Type"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Type() { 
 (Type.init)();
this.constructor = Type; };
Type.init = function () { 
 if (initialized){
return;
}
initialized = true;
Type.Interfaces = [  ];
Type.IsInst = function (t) { return t instanceof Type; };
Type.IsValueType = false;
Type.IsPrimitive = false;
Type.IsNullable = false;
Type.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Type.prototype = new (((asm0)["System.Object"])())();;
c = Type;
ct = c;
return c; }; })();
(asm)["System.UInt16"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function UInt16() { 
 (UInt16.init)();
this.constructor = UInt16; };
UInt16.init = function () { 
 if (initialized){
return;
}
initialized = true;
UInt16.Interfaces = [  ];
UInt16.IsInst = function (t) { return t instanceof UInt16; };
UInt16.IsValueType = true;
UInt16.IsPrimitive = true;
UInt16.IsNullable = false;
UInt16.prototype.vtable = { 
'asm0.x6000003': asm0.x600007a,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
UInt16.prototype = { 
 
};;
c = UInt16;
ct = c;
return c; }; })();
(asm)["System.UInt32"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function UInt32() { 
 (UInt32.init)();
this.constructor = UInt32; };
UInt32.init = function () { 
 if (initialized){
return;
}
initialized = true;
UInt32.Interfaces = [  ];
UInt32.IsInst = function (t) { return t instanceof UInt32; };
UInt32.IsValueType = true;
UInt32.IsPrimitive = true;
UInt32.IsNullable = false;
UInt32.prototype.vtable = { 
'asm0.x6000003': asm0.x600007b,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
UInt32.prototype = { 
 
};;
c = UInt32;
ct = c;
return c; }; })();
(asm)["System.UInt64"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function UInt64() { 
 (UInt64.init)();
this.constructor = UInt64; };
UInt64.init = function () { 
 if (initialized){
return;
}
initialized = true;
UInt64.Interfaces = [  ];
UInt64.IsInst = function (t) { return t instanceof UInt64; };
UInt64.IsValueType = true;
UInt64.IsPrimitive = true;
UInt64.IsNullable = false;
UInt64.prototype.vtable = { 
'asm0.x6000003': asm0.x600007c,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
UInt64.prototype = { 
 
};;
c = UInt64;
ct = c;
return c; }; })();
(asm)["System.UIntPtr"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function UIntPtr() { 
 (UIntPtr.init)();
this.constructor = UIntPtr; };
UIntPtr.init = function () { 
 if (initialized){
return;
}
initialized = true;
UIntPtr.Interfaces = [  ];
UIntPtr.IsInst = function (t) { return t instanceof UIntPtr; };
UIntPtr.IsValueType = true;
UIntPtr.IsPrimitive = true;
UIntPtr.IsNullable = false;
UIntPtr.prototype.vtable = { 
'asm0.x6000003': asm0.x600007d,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
UIntPtr.prototype = { 
 
};;
c = UIntPtr;
ct = c;
return c; }; })();
(asm)["System.Void"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Void() { 
 (Void.init)();
this.constructor = Void; };
Void.init = function () { 
 if (initialized){
return;
}
initialized = true;
Void.Interfaces = [  ];
Void.IsInst = function (t) { return t instanceof Void; };
Void.IsValueType = true;
Void.IsPrimitive = false;
Void.IsNullable = false;
Void.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Void.prototype = { 
 
};;
c = Void;
ct = c;
return c; }; })();
(asm)["System.NotSupportedException"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function NotSupportedException() { 
 (NotSupportedException.init)();
this.constructor = NotSupportedException; };
NotSupportedException.init = function () { 
 if (initialized){
return;
}
initialized = true;
NotSupportedException.Interfaces = [  ];
NotSupportedException.IsInst = function (t) { return t instanceof NotSupportedException; };
NotSupportedException.IsValueType = false;
NotSupportedException.IsPrimitive = false;
NotSupportedException.IsNullable = false;
NotSupportedException.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
NotSupportedException.prototype = new (((asm0)["System.Exception"])())();;
c = NotSupportedException;
ct = c;
return c; }; })();
(asm)["System.NotImplementedException"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function NotImplementedException() { 
 (NotImplementedException.init)();
this.constructor = NotImplementedException; };
NotImplementedException.init = function () { 
 if (initialized){
return;
}
initialized = true;
NotImplementedException.Interfaces = [  ];
NotImplementedException.IsInst = function (t) { return t instanceof NotImplementedException; };
NotImplementedException.IsValueType = false;
NotImplementedException.IsPrimitive = false;
NotImplementedException.IsNullable = false;
NotImplementedException.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
NotImplementedException.prototype = new (((asm0)["System.Exception"])())();;
c = NotImplementedException;
ct = c;
return c; }; })();
(asm)["System.Environment"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Environment() { 
 (Environment.init)();
this.constructor = Environment; };
Environment.init = function () { 
 if (initialized){
return;
}
initialized = true;
Environment.Interfaces = [  ];
Environment.IsInst = function (t) { return t instanceof Environment; };
Environment.IsValueType = false;
Environment.IsPrimitive = false;
Environment.IsNullable = false;
Environment.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Environment.prototype = new (((asm0)["System.Object"])())();;
c = Environment;
ct = c;
return c; }; })();
(asm)["System.Func`2"] = (function () { var ct;
 ct = { 
 
};
return function (T,TResult) { var c;
var initialized;
 c = tree_get([ T,TResult ],ct);
if (c){
return c;
}
initialized = false;;
function Func_2() { 
 (Func_2.init)();
this.constructor = Func_2; };
Func_2.init = function () { 
 if (initialized){
return;
}
initialized = true;
Func_2.Interfaces = [  ];
Func_2.IsInst = function (t) { return t instanceof Func_2; };
Func_2.IsValueType = false;
Func_2.IsPrimitive = false;
Func_2.IsNullable = false;
Func_2.GenericArguments = [ T,TResult ];
Func_2.prototype._invocationList = null;
Func_2.prototype._methodPtr = null;
Func_2.prototype._target = null;
Func_2.prototype.vtable = { 
'asm0.x6000083': asm0.x6000083,
'asm0.x600000d': asm0.x6000012,
'asm0.x600000c': asm0.x6000013,
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Func_2.prototype = { 
 
};;
c = Func_2;
tree_set([ T,TResult ],ct,c);
return c; }; })();
(asm)["System.Diagnostics.Debugger"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Debugger() { 
 (Debugger.init)();
this.constructor = Debugger; };
Debugger.init = function () { 
 if (initialized){
return;
}
initialized = true;
Debugger.Interfaces = [  ];
Debugger.IsInst = function (t) { return t instanceof Debugger; };
Debugger.IsValueType = false;
Debugger.IsPrimitive = false;
Debugger.IsNullable = false;
Debugger.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Debugger.prototype = new (((asm0)["System.Object"])())();;
c = Debugger;
ct = c;
return c; }; })();
(asm)["System.Runtime.InteropServices.OutAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function OutAttribute() { 
 (OutAttribute.init)();
this.constructor = OutAttribute; };
OutAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
OutAttribute.Interfaces = [  ];
OutAttribute.IsInst = function (t) { return t instanceof OutAttribute; };
OutAttribute.IsValueType = false;
OutAttribute.IsPrimitive = false;
OutAttribute.IsNullable = false;
OutAttribute.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
OutAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = OutAttribute;
ct = c;
return c; }; })();
(asm)["System.Runtime.CompilerServices.IndexerNameAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function IndexerNameAttribute() { 
 (IndexerNameAttribute.init)();
this.constructor = IndexerNameAttribute; };
IndexerNameAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
IndexerNameAttribute.Interfaces = [  ];
IndexerNameAttribute.IsInst = function (t) { return t instanceof IndexerNameAttribute; };
IndexerNameAttribute.IsValueType = false;
IndexerNameAttribute.IsPrimitive = false;
IndexerNameAttribute.IsNullable = false;
IndexerNameAttribute.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
IndexerNameAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = IndexerNameAttribute;
ct = c;
return c; }; })();
(asm)["System.Runtime.CompilerServices.ExtensionAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function ExtensionAttribute() { 
 (ExtensionAttribute.init)();
this.constructor = ExtensionAttribute; };
ExtensionAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
ExtensionAttribute.Interfaces = [  ];
ExtensionAttribute.IsInst = function (t) { return t instanceof ExtensionAttribute; };
ExtensionAttribute.IsValueType = false;
ExtensionAttribute.IsPrimitive = false;
ExtensionAttribute.IsNullable = false;
ExtensionAttribute.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
ExtensionAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = ExtensionAttribute;
ct = c;
return c; }; })(); })(asm0 || (asm0 = {}));
var asm1; (function (asm) { 
 
function clone_value(v) {
    if (v == null) return v;
    if (typeof v === 'number') return v;
    if (typeof v === 'function') return v;
    if (!v.constructor.IsValueType) return v;
    var result = new v.constructor();
//    var result = {};
    for (var p in v) {
        if (v.hasOwnProperty(p))
            result[p] = clone_value(v[p]);
    }
    return result;
}

function box(v, type) {
    if (v === null)
        return v;
    
    if (type.IsNullable) {
        if (v.has_value)
            return box(v.value, type.GenericArguments[0]);
        else
            return null;
    }

    if (!type.IsValueType)
        return v;
    
    return {
        'boxed': v,
        'vtable': type.prototype.vtable
    };
}

function unbox(o, type) {
    return o.boxed;
}

function unbox_any(o, type) {
    if (type.IsNullable) {
        var result = new type();
        if (o !== null) {
            result.value = o.boxed;
            result.has_value = true;
        }
        return result;
    }
    
    if (type.IsValueType)
        return o.boxed;
    else
        return o;
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

function new_string(str) {
    var r = new (asm0['System.String']())();
    r.jsstr = str;
    return r;
}

function new_array(type, length) {
    var r = new (asm0['System.Array`1'](type))();
    r.type = type;
    r.jsarr = new Array(length);
    return r;
}
;
asm.x6000002 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000b = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000c_init = function () { 
 ((asm1.test)().init)();
asm.x600000c = asm.x600000c_; };
asm.x600000c = function () { 
 (asm.x600000c_init.apply)(this,arguments);
return (asm.x600000c.apply)(this,arguments); };
asm.x600000c_ = function _cctor() { var t0;
var st_00;
 t0 = (asm1.test)();
/* IL_00: ldc.i4.1 */
st_00 = 1;
/* IL_01: stsfld Int32 global*/
(t0)["global"] = st_00;
/* IL_06: ret */
return ; };
asm.x600000d = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000e = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm1.x600000d)(st_00);
/* IL_06: ret */
return ; };
asm.x600000f = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm1.x600000e)(st_00);
/* IL_06: ret */
return ; };
asm.x6000010_init = function () { 
 ((asm1.Z)().init)();
((asm1.test)().init)();
asm.x6000010 = asm.x6000010_; };
asm.x6000010 = function () { 
 (asm.x6000010_init.apply)(this,arguments);
return (asm.x6000010.apply)(this,arguments); };
asm.x6000010_ = function Main() { var t0;
var t1;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var __braille_pos_0__;
 t0 = (asm1.Z)();
t1 = (asm1.test)();
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new ((arguments)[0])();
(asm1.x600000f)(result);
return result; })(t0);
/* IL_05: pop */

/* IL_06: ldsfld Int32 global*/
st_01 = t1.global;
/* IL_0B: ldc.i4.1 */
st_02 = 1;
/* IL_0C: beq.s IL_1A*/
if (st_01 === st_02){
__braille_pos_0__ = 0x1A;continue;
}
/* IL_0E: ldstr Error*/
st_03 = new_string("Error");
/* IL_13: call Void Log(System.Object)*/
(braille_test_log)(st_03);
/* IL_18: ldc.i4.1 */
st_04 = 1;
/* IL_19: ret */
return st_04;
case 0x1A:
/* IL_1A: ldstr Ok*/
st_05 = new_string("Ok");
/* IL_1F: call Void Log(System.Object)*/
(braille_test_log)(st_05);
/* IL_24: ldc.i4.0 */
st_06 = 0;
/* IL_25: ret */
return st_06;
}
} };
asm.x6000011 = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.TestLog = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function TestLog() { 
 (TestLog.init)();
this.constructor = TestLog; };
TestLog.init = function () { 
 if (initialized){
return;
}
initialized = true;
TestLog.Interfaces = [  ];
TestLog.IsInst = function (t) { return t instanceof TestLog; };
TestLog.IsValueType = false;
TestLog.IsPrimitive = false;
TestLog.IsNullable = false;
TestLog.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
TestLog.prototype = new (((asm0)["System.Object"])())();;
c = TestLog;
ct = c;
return c; }; })();
asm.TestHelper = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function TestHelper() { 
 (TestHelper.init)();
this.constructor = TestHelper; };
TestHelper.init = function () { 
 if (initialized){
return;
}
initialized = true;
TestHelper.Interfaces = [  ];
TestHelper.IsInst = function (t) { return t instanceof TestHelper; };
TestHelper.IsValueType = false;
TestHelper.IsPrimitive = false;
TestHelper.IsNullable = false;
TestHelper.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
TestHelper.prototype = new (((asm0)["System.Object"])())();;
c = TestHelper;
ct = c;
return c; }; })();
asm.X = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function X() { 
 (X.init)();
this.constructor = X; };
X.init = function () { 
 if (initialized){
return;
}
initialized = true;
X.Interfaces = [  ];
X.IsInst = function (t) { return t instanceof X; };
X.IsValueType = false;
X.IsPrimitive = false;
X.IsNullable = false;
(asm1.x600000c)();
X.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
X.prototype = new (((asm0)["System.Object"])())();;
c = X;
ct = c;
return c; }; })();
asm.Y = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Y() { 
 (Y.init)();
this.constructor = Y; };
Y.init = function () { 
 if (initialized){
return;
}
initialized = true;
Y.Interfaces = [  ];
Y.IsInst = function (t) { return t instanceof Y; };
Y.IsValueType = false;
Y.IsPrimitive = false;
Y.IsNullable = false;
Y.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Y.prototype = new ((asm1.X)())();;
c = Y;
ct = c;
return c; }; })();
asm.Z = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Z() { 
 (Z.init)();
this.constructor = Z; };
Z.init = function () { 
 if (initialized){
return;
}
initialized = true;
Z.Interfaces = [  ];
Z.IsInst = function (t) { return t instanceof Z; };
Z.IsValueType = false;
Z.IsPrimitive = false;
Z.IsNullable = false;
Z.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
Z.prototype = new ((asm1.Y)())();;
c = Z;
ct = c;
return c; }; })();
asm.test = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function test() { 
 (test.init)();
this.constructor = test; };
test.init = function () { 
 if (initialized){
return;
}
initialized = true;
test.global = 0;
test.Interfaces = [  ];
test.IsInst = function (t) { return t instanceof test; };
test.IsValueType = false;
test.IsPrimitive = false;
test.IsNullable = false;
test.prototype.vtable = { 
'asm0.x6000003': asm0.x6000003,
'asm0.x6000004': asm0.x6000004,
'asm0.x6000007': asm0.x6000007 
}; };
test.prototype = new (((asm0)["System.Object"])())();;
c = test;
ct = c;
return c; }; })();
asm.entryPoint = asm.x6000010; })(asm1 || (asm1 = {}));
