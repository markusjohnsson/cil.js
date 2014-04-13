var asm0; (function (asm) { var self;
 
function clone_value(v) {
    if (typeof v === 'number') return v;
    if (typeof v === 'function') return v;
    var result = {};
    for (var p in v) {
        if (v.hasOwnProperty(p))
            result[p] = v[p];
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
    var r = new asm0['System.String']();
    r.jsstr = str;
    return r;
}

function new_array(type, length) {
    var r = new asm0['System.Array']();
    r.type = type;
    r.jsarr = new Array(length);
    return r;
}
;
asm.x6000002 = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldstr System.Object*/
st_00 = new_string("System.Object");
/* IL_06: stloc.0 */
loc0 = st_00;
/* IL_09: ldloc.0 */
st_01 = loc0;
/* IL_0A: ret */
return st_01; };
asm.x6000003 = function GetHashCode() { var __braille_args__;
var loc0;
var st_00;
var st_01;
 __braille_args__ = arguments;
loc0 = 0;
/* IL_00: nop */
/* IL_01: ldc.i4.0 */
st_00 = 0;
/* IL_02: stloc.0 */
loc0 = st_00;
/* IL_05: ldloc.0 */
st_01 = loc0;
/* IL_06: ret */
return st_01; };
asm.x6000004 = function ToJavaScriptString() { var __braille_args__;
var loc0;
var loc1;
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
 __braille_args__ = arguments;
loc0 = null;
loc1 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
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
st_08 = __braille_args__[0];
/* IL_1A: callvirt String ToString()*/
st_09 = (st_08.vtable.x6000002)(st_08);
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
asm.ToJavaScriptString = asm.x6000004;
asm.x6000005 = function ReferenceEquals() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 __braille_args__ = arguments;
loc0 = false;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_03: call Boolean ReferenceEqualsImpl(System.Object, System.Object)*/
st_02 = function (a, b) { return a === b; }(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x6000006 = function Equals() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 __braille_args__ = arguments;
loc0 = false;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_03: call Boolean ReferenceEquals(System.Object, System.Object)*/
st_02 = (asm0.x6000005)(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x6000007 = function _ctor() { var __braille_args__;
var __braille_pos_0__;
 __braille_args__ = arguments;
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
asm.x6000008 = function get_Length() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = 0;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: call Int32 GetLengthImpl(System.Object)*/
st_01 = function(o) { return o.jsarr.length; }(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x600000b = function GetValue() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_03: call Object GetValueImpl(System.Object, System.Int32)*/
st_02 = function(o, i) { return box(o.jsarr[i], o.type); }(st_00,clone_value(st_01));
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
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
/* IL_06: ret */
return ; };
asm.x600000e = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x600000d)(st_00);
/* IL_06: ret */
return ; };
asm.x600000f = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000010 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x600000f)(st_00);
/* IL_06: ret */
return ; };
asm.x6000011 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x600000d)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: ret */
return ; };
asm.x6000013 = function get_HasValue() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = false;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldfld Boolean has_value*/
st_01 = (st_00.r)().has_value;
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000014 = function get_Value() { var __braille_args__;
var loc0;
var loc1;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var __braille_pos_0__;
 __braille_args__ = arguments;
((asm0)["System.InvalidOperationException"].init)();
loc0 = ((((arguments)[0].r)().constructor.GenericArguments)[0].IsValueType) ? (((((arguments)[0].r)().constructor.GenericArguments)[0].IsPrimitive) ? (0) : (new ((((arguments)[0].r)().constructor.GenericArguments)[0])())) : (null);
loc1 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
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
 result = new ((asm0)["System.InvalidOperationException"])();
(asm0.x600003d)(result,st_03);
return result; })();
/* IL_15: throw */
throw st_04;
case 0x16:
/* IL_16: ldarg.0 */
st_05 = __braille_args__[0];
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
asm.x6000015 = function Equals() { var __braille_args__;
var loc0;
var loc1;
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
 __braille_args__ = arguments;
((((arguments)[0].r)().constructor.GenericArguments)[0].init)();
((asm0)["System.Nullable`1"].init)();
loc0 = false;
loc1 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.1 */
st_00 = __braille_args__[1];
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
st_06 = __braille_args__[0];
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
st_0A = __braille_args__[1];
/* IL_19: isinst System.Nullable`1[T]*/
st_0B = ((asm0)["System.Nullable`1"].IsInst)(st_0A);
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
st_11 = __braille_args__[0];
/* IL_2A: ldarg.1 */
st_10 = __braille_args__[1];
/* IL_2B: unbox.any System.Nullable`1[T]*/
st_12 = (st_10.boxed || st_10);
/* IL_30: call Boolean Equals(System.Nullable`1[T])*/
st_13 = (asm0.x6000016)(clone_value(st_11),clone_value(st_12));
/* IL_35: stloc.0 */
loc0 = st_13;
case 0x38:
/* IL_38: ldloc.0 */
st_14 = loc0;
/* IL_39: ret */
return st_14;
}
} };
asm.x6000016 = function Equals() { var __braille_args__;
var loc0;
var loc1;
var st_00;
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
 __braille_args__ = arguments;
((((arguments)[0].r)().constructor.GenericArguments)[0].init)();
loc0 = false;
loc1 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarga.s 1*/
st_00 = { 
'w': function () { 
 __braille_args__[1] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[1]; } 
};
/* IL_03: ldfld Boolean has_value*/
st_02 = (st_00.r)().has_value;
/* IL_08: ldarg.0 */
st_01 = __braille_args__[0];
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
st_07 = __braille_args__[0];
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
 __braille_args__[1] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[1]; } 
};
/* IL_28: ldflda T value*/
st_0E = { 
'w': function () { 
 ((asm0)["System.Nullable`1"])["value"] = (arguments)[0]; },
'r': function () { 
 return ((asm0)["System.Nullable`1"])["value"]; } 
};
/* IL_2D: ldarg.0 */
st_0C = __braille_args__[0];
/* IL_2E: ldfld T value*/
st_0D = (st_0C.r)().value;
/* IL_33: box T*/
st_0F = box(st_0D,(((arguments)[0].r)().constructor.GenericArguments)[0]);
/* IL_3E: callvirt Boolean Equals(System.Object)*/
/* ignoring prefixes constrained.*/
st_10 = (clone_value(st_0E).vtable.x6000006)(clone_value(st_0E),st_0F);
/* IL_43: stloc.0 */
loc0 = st_10;
case 0x46:
/* IL_46: ldloc.0 */
st_11 = loc0;
/* IL_47: ret */
return st_11;
}
} };
asm.x6000017 = function GetHashCode() { var __braille_args__;
var loc0;
var loc1;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var __braille_pos_0__;
 __braille_args__ = arguments;
loc0 = 0;
loc1 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
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
st_04 = __braille_args__[0];
/* IL_10: ldflda T value*/
st_05 = { 
'w': function () { 
 ((asm0)["System.Nullable`1"])["value"] = (arguments)[0]; },
'r': function () { 
 return ((asm0)["System.Nullable`1"])["value"]; } 
};
/* IL_1B: callvirt Int32 GetHashCode()*/
/* ignoring prefixes constrained.*/
st_06 = (clone_value(st_05).vtable.x6000003)(clone_value(st_05));
/* IL_20: stloc.0 */
loc0 = st_06;
case 0x23:
/* IL_23: ldloc.0 */
st_07 = loc0;
/* IL_24: ret */
return st_07;
}
} };
asm.x6000018 = function GetValueOrDefault() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = ((((arguments)[0].r)().constructor.GenericArguments)[0].IsValueType) ? (((((arguments)[0].r)().constructor.GenericArguments)[0].IsPrimitive) ? (0) : (new ((((arguments)[0].r)().constructor.GenericArguments)[0])())) : (null);
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldfld T value*/
st_01 = (st_00.r)().value;
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000019 = function GetValueOrDefault() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_03;
var st_02;
var st_04;
var __braille_pos_0__;
 __braille_args__ = arguments;
loc0 = ((((arguments)[0].r)().constructor.GenericArguments)[0].IsValueType) ? (((((arguments)[0].r)().constructor.GenericArguments)[0].IsPrimitive) ? (0) : (new ((((arguments)[0].r)().constructor.GenericArguments)[0])())) : (null);
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldfld Boolean has_value*/
st_01 = (st_00.r)().has_value;
/* IL_07: brtrue.s IL_0C*/
if (st_01){
__braille_pos_0__ = 0xC;continue;
}
/* IL_09: ldarg.1 */
st_03 = __braille_args__[1];
/* IL_0A: br.s IL_12*/
__braille_pos_0__ = 0x12;
continue;
case 0xC:
/* IL_0C: ldarg.0 */
st_02 = __braille_args__[0];
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
asm.x600001a = function ToString() { var __braille_args__;
var loc0;
var loc1;
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
 __braille_args__ = arguments;
((asm0)["System.String"].init)();
loc0 = null;
loc1 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
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
st_05 = __braille_args__[0];
/* IL_0F: ldflda T value*/
st_06 = { 
'w': function () { 
 ((asm0)["System.Nullable`1"])["value"] = (arguments)[0]; },
'r': function () { 
 return ((asm0)["System.Nullable`1"])["value"]; } 
};
/* IL_1A: callvirt String ToString()*/
/* ignoring prefixes constrained.*/
st_07 = (clone_value(st_06).vtable.x6000002)(clone_value(st_06));
/* IL_1F: stloc.0 */
loc0 = st_07;
/* IL_20: br.s IL_2A*/
__braille_pos_0__ = 0x2A;
continue;
case 0x22:
/* IL_22: ldsfld String Empty*/
st_08 = (asm0)["System.String"].Empty;
/* IL_27: stloc.0 */
loc0 = st_08;
case 0x2A:
/* IL_2A: ldloc.0 */
st_09 = loc0;
/* IL_2B: ret */
return st_09;
}
} };
asm.x600001b = function (T) { 
 return function op_Implicit() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
(T.init)();
((asm0)["System.Nullable`1"].init)();
loc0 = new ((asm0)["System.Nullable`1"])();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: newobj Void .ctor(T)*/
st_01 = (function () { var result;
 result = new ((asm0)["System.Nullable`1"])();
(asm0.x6000012)({ 
'w': function () { 
 result = (arguments)[0]; },
'r': function () { 
 return result; } 
},clone_value(st_00));
return result; })();
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; }; };
asm.x600001c = function (T) { 
 return function op_Explicit() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = (T.IsValueType) ? ((T.IsPrimitive) ? (0) : (new T())) : (null);
/* IL_00: nop */
/* IL_01: ldarga.s 0*/
st_00 = { 
'w': function () { 
 __braille_args__[0] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[0]; } 
};
/* IL_03: call T get_Value()*/
st_01 = (asm0.x6000014)(clone_value(st_00));
/* IL_08: stloc.0 */
loc0 = st_01;
/* IL_0B: ldloc.0 */
st_02 = loc0;
/* IL_0C: ret */
return st_02; }; };
asm.x600001d = function (T) { 
 return function Box() { var __braille_args__;
var loc0;
var loc1;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var __braille_pos_0__;
 __braille_args__ = arguments;
(T.init)();
loc0 = null;
loc1 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarga.s 0*/
st_00 = { 
'w': function () { 
 __braille_args__[0] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[0]; } 
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
 __braille_args__[0] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[0]; } 
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
asm.x600001e = function (T) { 
 return function Unbox() { var __braille_args__;
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
var __braille_pos_0__;
 __braille_args__ = arguments;
(T.init)();
((asm0)["System.Nullable`1"].init)();
(T.init)();
((asm0)["System.Nullable`1"].init)();
loc0 = new ((asm0)["System.Nullable`1"])();
loc1 = false;
loc2 = new ((asm0)["System.Nullable`1"])();
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
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
(st_06.w)(new ((asm0)["System.Nullable`1"])());
/* IL_14: ldloc.2 */
st_07 = loc2;
/* IL_15: stloc.0 */
loc0 = st_07;
/* IL_16: br.s IL_26*/
__braille_pos_0__ = 0x26;
continue;
case 0x18:
/* IL_18: ldarg.0 */
st_08 = __braille_args__[0];
/* IL_19: unbox.any T*/
st_09 = (st_08.boxed || st_08);
/* IL_1E: newobj Void .ctor(T)*/
st_0A = (function () { var result;
 result = new ((asm0)["System.Nullable`1"])();
(asm0.x6000012)({ 
'w': function () { 
 result = (arguments)[0]; },
'r': function () { 
 return result; } 
},clone_value(st_09));
return result; })();
/* IL_23: stloc.0 */
loc0 = st_0A;
case 0x26:
/* IL_26: ldloc.0 */
st_0B = loc0;
/* IL_27: ret */
return st_0B;
}
} }; };
asm.x6000012 = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
 __braille_args__ = arguments;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldc.i4.1 */
st_01 = 1;
/* IL_03: stfld Boolean has_value*/
(st_00.r)().has_value = st_01;
/* IL_08: ldarg.0 */
st_02 = __braille_args__[0];
/* IL_09: ldarg.1 */
st_03 = __braille_args__[1];
/* IL_0A: stfld T value*/
(st_02.r)().value = st_03;
/* IL_0F: ret */
return ; };
asm.x600001f = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x600000d)(st_00);
/* IL_06: ret */
return ; };
asm.x6000023 = function get_Chars() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
((asm0)["System.Exception"].init)();
/* IL_00: nop */
/* IL_01: ldstr Not implemented.*/
st_00 = new_string("Not implemented.");
/* IL_06: newobj Void .ctor(System.String)*/
st_01 = (function () { var result;
 result = new ((asm0)["System.Exception"])();
(asm0.x600003a)(result,st_00);
return result; })();
/* IL_0B: throw */
throw st_01; };
asm.x6000024 = function Concat() { var __braille_args__;
var loc0;
var loc1;
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
 __braille_args__ = arguments;
((asm0)["System.String"].init)();
loc0 = null;
loc1 = null;
/* IL_00: nop */
/* IL_01: ldc.i4.2 */
st_00 = 2;
/* IL_02: newarr System.String*/
st_01 = new_array((asm0)["System.String"],st_00);
/* IL_07: stloc.1 */
loc1 = st_01;
/* IL_08: ldloc.1 */
st_02 = loc1;
/* IL_09: ldc.i4.0 */
st_03 = 0;
/* IL_0A: ldarg.0 */
st_04 = __braille_args__[0];
/* IL_0B: stelem.ref */
(st_02.jsarr)[st_03] = st_04;
/* IL_0C: ldloc.1 */
st_05 = loc1;
/* IL_0D: ldc.i4.1 */
st_06 = 1;
/* IL_0E: ldarg.1 */
st_07 = __braille_args__[1];
/* IL_0F: stelem.ref */
(st_05.jsarr)[st_06] = st_07;
/* IL_10: ldloc.1 */
st_08 = loc1;
/* IL_11: call String ConcatImpl(System.String[])*/
st_09 = function () { return new_string(String.prototype.concat.apply('', arguments)); }(st_08);
/* IL_16: stloc.0 */
loc0 = st_09;
/* IL_19: ldloc.0 */
st_0A = loc0;
/* IL_1A: ret */
return st_0A; };
asm.x6000025 = function Concat() { var __braille_args__;
var loc0;
var loc1;
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
 __braille_args__ = arguments;
((asm0)["System.String"].init)();
loc0 = null;
loc1 = null;
/* IL_00: nop */
/* IL_01: ldc.i4.2 */
st_00 = 2;
/* IL_02: newarr System.String*/
st_01 = new_array((asm0)["System.String"],st_00);
/* IL_07: stloc.1 */
loc1 = st_01;
/* IL_08: ldloc.1 */
st_03 = loc1;
/* IL_09: ldc.i4.0 */
st_04 = 0;
/* IL_0A: ldarg.0 */
st_02 = __braille_args__[0];
/* IL_0B: callvirt String ToString()*/
st_05 = (st_02.vtable.x6000002)(st_02);
/* IL_10: stelem.ref */
(st_03.jsarr)[st_04] = st_05;
/* IL_11: ldloc.1 */
st_07 = loc1;
/* IL_12: ldc.i4.1 */
st_08 = 1;
/* IL_13: ldarg.1 */
st_06 = __braille_args__[1];
/* IL_14: callvirt String ToString()*/
st_09 = (st_06.vtable.x6000002)(st_06);
/* IL_19: stelem.ref */
(st_07.jsarr)[st_08] = st_09;
/* IL_1A: ldloc.1 */
st_0A = loc1;
/* IL_1B: call String ConcatImpl(System.String[])*/
st_0B = function () { return new_string(String.prototype.concat.apply('', arguments)); }(st_0A);
/* IL_20: stloc.0 */
loc0 = st_0B;
/* IL_23: ldloc.0 */
st_0C = loc0;
/* IL_24: ret */
return st_0C; };
asm.x6000026 = function Concat() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: call String ConcatImpl(System.String[])*/
st_01 = function () { return new_string(String.prototype.concat.apply('', arguments)); }(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000027 = function Concat() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
((asm0)["System.Exception"].init)();
/* IL_00: nop */
/* IL_01: ldstr Not implemented*/
st_00 = new_string("Not implemented");
/* IL_06: newobj Void .ctor(System.String)*/
st_01 = (function () { var result;
 result = new ((asm0)["System.Exception"])();
(asm0.x600003a)(result,st_00);
return result; })();
/* IL_0B: throw */
throw st_01; };
asm.x6000028 = function get_Length() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = 0;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: call Int32 GetLengthImpl(System.Object)*/
st_01 = function(o) { return o.jsstr.length; }(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000029 = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: stloc.0 */
loc0 = st_00;
/* IL_05: ldloc.0 */
st_01 = loc0;
/* IL_06: ret */
return st_01; };
asm.x600002a = function op_Inequality() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
 __braille_args__ = arguments;
loc0 = false;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
st_02 = function(a, b) { return a.jsstr === b.jsstr; }(st_00,st_01);
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
asm.x600002b = function op_Equality() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 __braille_args__ = arguments;
loc0 = false;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
st_02 = function(a, b) { return a.jsstr === b.jsstr; }(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x600002c = function Equals() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 __braille_args__ = arguments;
loc0 = false;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
st_02 = function(a, b) { return a.jsstr === b.jsstr; }(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x600002d = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600002e = function _cctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
((asm0)["System.String"].init)();
/* IL_00: ldstr */
st_00 = new_string("");
/* IL_05: stsfld String Empty*/
((asm0)["System.String"])["Empty"] = st_00;
/* IL_0A: ret */
return ; };
asm.x6000030 = function get_MemberName() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldfld String member_name*/
st_01 = st_00.System_ReflectionDefaultMemberAttributemember_name;
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x600002f = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x600000d)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_09: ldarg.1 */
st_02 = __braille_args__[1];
/* IL_0A: stfld String member_name*/
st_01.System_ReflectionDefaultMemberAttributemember_name = st_02;
/* IL_0F: nop */
/* IL_10: ret */
return ; };
asm.x6000032 = function get_ValidOn() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = new ((asm0)["System.AttributeTargets"])();
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld AttributeTargets <ValidOn>k__BackingField*/
st_01 = (st_00)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x6000033 = function set_ValidOn() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: stfld AttributeTargets <ValidOn>k__BackingField*/
(st_00)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x6000034 = function get_Inherited() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = false;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld Boolean <Inherited>k__BackingField*/
st_01 = (st_00)["SystemAttributeUsageAttribute<Inherited>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x6000035 = function set_Inherited() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: stfld Boolean <Inherited>k__BackingField*/
(st_00)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x6000031 = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x600000d)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_09: ldarg.1 */
st_02 = __braille_args__[1];
/* IL_0A: call Void set_ValidOn(System.AttributeTargets)*/
(asm0.x6000033)(st_01,clone_value(st_02));
/* IL_0F: nop */
/* IL_10: nop */
/* IL_11: ret */
return ; };
asm.x6000036 = function WriteLine() { var __braille_args__;
 __braille_args__ = arguments;
/* IL_00: nop */
/* IL_01: ret */
return ; };
asm.x6000037 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000038 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600003b = function get_Message() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld String <Message>k__BackingField*/
st_01 = (st_00)["SystemException<Message>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x600003c = function set_Message() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: stfld String <Message>k__BackingField*/
(st_00)["SystemException<Message>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x6000039 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: ret */
return ; };
asm.x600003a = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_09: ldarg.1 */
st_02 = __braille_args__[1];
/* IL_0A: call Void set_Message(System.String)*/
(asm0.x600003c)(st_01,st_02);
/* IL_0F: nop */
/* IL_10: nop */
/* IL_11: ret */
return ; };
asm.x600003d = function _ctor() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: call Void .ctor(System.String)*/
(asm0.x600003a)(st_00,st_01);
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: nop */
/* IL_0A: ret */
return ; };
asm.x600003e = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x600000d)(st_00);
/* IL_06: ret */
return ; };
asm.x6000041 = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
((asm0)["System.Int32"].init)();
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldind.i4 */
st_01 = st_00.boxed;
/* IL_03: box System.Int32*/
st_02 = { 
'boxed': clone_value(st_01),
'vtable': (asm0)["System.Int32"].prototype.vtable 
};
/* IL_08: call String ToStringImpl(System.Object)*/
st_03 = function(o) { return new_string(o.boxed.toString()); }(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000043 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000044 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000038)(st_00);
/* IL_06: ret */
return ; };
asm.x6000045 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x600000d)(st_00);
/* IL_06: ret */
return ; };
asm.x6000046 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000051 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000052 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x600000d)(st_00);
/* IL_06: ret */
return ; };
asm.x6000053 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x600000d)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: ret */
return ; };
asm.x6000054 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x600000d)(st_00);
/* IL_06: ret */
return ; };
self = (function () { var initialized;
 initialized = false;;
function $$Object() { 
 if (!initialized){
($$Object.init)();
}
this.constructor = $$Object; };
$$Object.init = function () { 
 initialized = true;
$$Object.Interfaces = [  ];
$$Object.IsInst = function (t) { return t instanceof $$Object; };
$$Object.IsValueType = false;
$$Object.IsPrimitive = false;
$$Object.IsNullable = false;
$$Object.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
$$Object.prototype = { 
 
};;
return $$Object; })();
(asm)["System.Object"] = self;
self = (function () { var initialized;
 initialized = false;;
function Array() { 
 if (!initialized){
(Array.init)();
}
this.constructor = Array; };
Array.init = function () { 
 initialized = true;
Array.Interfaces = [  ];
Array.IsInst = function (t) { return t instanceof Array; };
Array.IsValueType = false;
Array.IsPrimitive = false;
Array.IsNullable = false;
Array.prototype.type = null;
Array.prototype.jsarr = null;
Array.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Array.prototype = new ((asm0)["System.Object"])();;
return Array; })();
(asm)["System.Array"] = self;
self = (function () { var initialized;
 initialized = false;;
function Attribute() { 
 if (!initialized){
(Attribute.init)();
}
this.constructor = Attribute; };
Attribute.init = function () { 
 initialized = true;
Attribute.Interfaces = [  ];
Attribute.IsInst = function (t) { return t instanceof Attribute; };
Attribute.IsValueType = false;
Attribute.IsPrimitive = false;
Attribute.IsNullable = false;
Attribute.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Attribute.prototype = new ((asm0)["System.Object"])();;
return Attribute; })();
(asm)["System.Attribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function DebuggerStepThroughAttribute() { 
 if (!initialized){
(DebuggerStepThroughAttribute.init)();
}
this.constructor = DebuggerStepThroughAttribute; };
DebuggerStepThroughAttribute.init = function () { 
 initialized = true;
DebuggerStepThroughAttribute.Interfaces = [  ];
DebuggerStepThroughAttribute.IsInst = function (t) { return t instanceof DebuggerStepThroughAttribute; };
DebuggerStepThroughAttribute.IsValueType = false;
DebuggerStepThroughAttribute.IsPrimitive = false;
DebuggerStepThroughAttribute.IsNullable = false;
DebuggerStepThroughAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
DebuggerStepThroughAttribute.prototype = new ((asm0)["System.Attribute"])();;
return DebuggerStepThroughAttribute; })();
(asm)["System.Diagnostics.DebuggerStepThroughAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function ValueType() { 
 if (!initialized){
(ValueType.init)();
}
this.constructor = ValueType; };
ValueType.init = function () { 
 initialized = true;
ValueType.Interfaces = [  ];
ValueType.IsInst = function (t) { return t instanceof ValueType; };
ValueType.IsValueType = false;
ValueType.IsPrimitive = false;
ValueType.IsNullable = false;
ValueType.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
ValueType.prototype = new ((asm0)["System.Object"])();;
return ValueType; })();
(asm)["System.ValueType"] = self;
self = (function () { var initialized;
 initialized = false;;
function Enum() { 
 if (!initialized){
(Enum.init)();
}
this.constructor = Enum; };
Enum.init = function () { 
 initialized = true;
Enum.Interfaces = [  ];
Enum.IsInst = function (t) { return t instanceof Enum; };
Enum.IsValueType = false;
Enum.IsPrimitive = false;
Enum.IsNullable = false;
Enum.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Enum.prototype = { 
 
};;
return Enum; })();
(asm)["System.Enum"] = self;
self = (function () { var initialized;
 initialized = false;;
function AttributeTargets() { 
 if (!initialized){
(AttributeTargets.init)();
}
this.constructor = AttributeTargets; };
AttributeTargets.init = function () { 
 initialized = true;
AttributeTargets.Assembly = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.Module = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.Class = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.Struct = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.Enum = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.Constructor = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.Method = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.Property = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.Field = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.Event = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.Interface = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.Parameter = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.Delegate = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.ReturnValue = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.GenericParameter = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.All = new ((asm0)["System.AttributeTargets"])();
AttributeTargets.Interfaces = [  ];
AttributeTargets.IsInst = function (t) { return t instanceof AttributeTargets; };
AttributeTargets.IsValueType = true;
AttributeTargets.IsPrimitive = false;
AttributeTargets.IsNullable = false;
AttributeTargets.prototype.value__ = 0;
AttributeTargets.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
AttributeTargets.prototype = new ((asm0)["System.Enum"])();;
return AttributeTargets; })();
(asm)["System.AttributeTargets"] = self;
self = (function () { var initialized;
 initialized = false;;
function ComVisibleAttribute() { 
 if (!initialized){
(ComVisibleAttribute.init)();
}
this.constructor = ComVisibleAttribute; };
ComVisibleAttribute.init = function () { 
 initialized = true;
ComVisibleAttribute.Interfaces = [  ];
ComVisibleAttribute.IsInst = function (t) { return t instanceof ComVisibleAttribute; };
ComVisibleAttribute.IsValueType = false;
ComVisibleAttribute.IsPrimitive = false;
ComVisibleAttribute.IsNullable = false;
ComVisibleAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
ComVisibleAttribute.prototype = new ((asm0)["System.Attribute"])();;
return ComVisibleAttribute; })();
(asm)["System.ComVisibleAttribute"] = self;
self = (function () { var ct;
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
 if (!initialized){
(Nullable_1.init)();
}
this.constructor = Nullable_1; };
Nullable_1.init = function () { 
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
'x6000006': asm0.x6000015,
'x6000003': asm0.x6000017,
'x6000002': asm0.x600001a 
}; };
Nullable_1.prototype = { 
 
};;
c = Nullable_1;
tree_set([ T ],ct,c);
return c; }; })();
(asm)["System.Nullable`1"] = self;
self = (function () { var initialized;
 initialized = false;;
function SerializableAttribute() { 
 if (!initialized){
(SerializableAttribute.init)();
}
this.constructor = SerializableAttribute; };
SerializableAttribute.init = function () { 
 initialized = true;
SerializableAttribute.Interfaces = [  ];
SerializableAttribute.IsInst = function (t) { return t instanceof SerializableAttribute; };
SerializableAttribute.IsValueType = false;
SerializableAttribute.IsPrimitive = false;
SerializableAttribute.IsNullable = false;
SerializableAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
SerializableAttribute.prototype = new ((asm0)["System.Attribute"])();;
return SerializableAttribute; })();
(asm)["System.SerializableAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function $$String() { 
 if (!initialized){
($$String.init)();
}
this.constructor = $$String; };
$$String.init = function () { 
 initialized = true;
$$String.Empty = null;
$$String.Interfaces = [  ];
$$String.IsInst = function (t) { return t instanceof $$String; };
$$String.IsValueType = false;
$$String.IsPrimitive = false;
$$String.IsNullable = false;
$$String.prototype.jsstr = null;
$$String.prototype.vtable = { 
'x6000002': asm0.x6000029,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
$$String.prototype = new ((asm0)["System.Object"])();;
return $$String; })();
(asm)["System.String"] = self;
self = (function () { var initialized;
 initialized = false;;
function DefaultMemberAttribute() { 
 if (!initialized){
(DefaultMemberAttribute.init)();
}
this.constructor = DefaultMemberAttribute; };
DefaultMemberAttribute.init = function () { 
 initialized = true;
DefaultMemberAttribute.Interfaces = [  ];
DefaultMemberAttribute.IsInst = function (t) { return t instanceof DefaultMemberAttribute; };
DefaultMemberAttribute.IsValueType = false;
DefaultMemberAttribute.IsPrimitive = false;
DefaultMemberAttribute.IsNullable = false;
DefaultMemberAttribute.prototype.System_ReflectionDefaultMemberAttributemember_name = null;
DefaultMemberAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
DefaultMemberAttribute.prototype = new ((asm0)["System.Attribute"])();;
return DefaultMemberAttribute; })();
(asm)["System.Reflection.DefaultMemberAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function AttributeUsageAttribute() { 
 if (!initialized){
(AttributeUsageAttribute.init)();
}
this.constructor = AttributeUsageAttribute; };
AttributeUsageAttribute.init = function () { 
 initialized = true;
AttributeUsageAttribute.Interfaces = [  ];
AttributeUsageAttribute.IsInst = function (t) { return t instanceof AttributeUsageAttribute; };
AttributeUsageAttribute.IsValueType = false;
AttributeUsageAttribute.IsPrimitive = false;
AttributeUsageAttribute.IsNullable = false;
(AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = new ((asm0)["System.AttributeTargets"])();
(AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = false;
AttributeUsageAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
AttributeUsageAttribute.prototype = new ((asm0)["System.Attribute"])();;
return AttributeUsageAttribute; })();
(asm)["System.AttributeUsageAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function $$Boolean() { 
 if (!initialized){
($$Boolean.init)();
}
this.constructor = $$Boolean; };
$$Boolean.init = function () { 
 initialized = true;
$$Boolean.Interfaces = [  ];
$$Boolean.IsInst = function (t) { return t instanceof $$Boolean; };
$$Boolean.IsValueType = true;
$$Boolean.IsPrimitive = true;
$$Boolean.IsNullable = false;
$$Boolean.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
$$Boolean.prototype = { 
 
};;
return $$Boolean; })();
(asm)["System.Boolean"] = self;
self = (function () { var initialized;
 initialized = false;;
function Byte() { 
 if (!initialized){
(Byte.init)();
}
this.constructor = Byte; };
Byte.init = function () { 
 initialized = true;
Byte.Interfaces = [  ];
Byte.IsInst = function (t) { return t instanceof Byte; };
Byte.IsValueType = true;
Byte.IsPrimitive = true;
Byte.IsNullable = false;
Byte.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Byte.prototype = { 
 
};;
return Byte; })();
(asm)["System.Byte"] = self;
self = (function () { var initialized;
 initialized = false;;
function Char() { 
 if (!initialized){
(Char.init)();
}
this.constructor = Char; };
Char.init = function () { 
 initialized = true;
Char.MinValue = 0;
Char.MaxValue = 0;
Char.Interfaces = [  ];
Char.IsInst = function (t) { return t instanceof Char; };
Char.IsValueType = true;
Char.IsPrimitive = true;
Char.IsNullable = false;
Char.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Char.prototype = { 
 
};;
return Char; })();
(asm)["System.Char"] = self;
self = (function () { var initialized;
 initialized = false;;
function Console() { 
 if (!initialized){
(Console.init)();
}
this.constructor = Console; };
Console.init = function () { 
 initialized = true;
Console.Interfaces = [  ];
Console.IsInst = function (t) { return t instanceof Console; };
Console.IsValueType = false;
Console.IsPrimitive = false;
Console.IsNullable = false;
Console.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Console.prototype = new ((asm0)["System.Object"])();;
return Console; })();
(asm)["System.Console"] = self;
self = (function () { var initialized;
 initialized = false;;
function Delegate() { 
 if (!initialized){
(Delegate.init)();
}
this.constructor = Delegate; };
Delegate.init = function () { 
 initialized = true;
Delegate.Interfaces = [  ];
Delegate.IsInst = function (t) { return t instanceof Delegate; };
Delegate.IsValueType = false;
Delegate.IsPrimitive = false;
Delegate.IsNullable = false;
Delegate.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Delegate.prototype = new ((asm0)["System.Object"])();;
return Delegate; })();
(asm)["System.Delegate"] = self;
self = (function () { var initialized;
 initialized = false;;
function Double() { 
 if (!initialized){
(Double.init)();
}
this.constructor = Double; };
Double.init = function () { 
 initialized = true;
Double.Interfaces = [  ];
Double.IsInst = function (t) { return t instanceof Double; };
Double.IsValueType = true;
Double.IsPrimitive = true;
Double.IsNullable = false;
Double.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Double.prototype = { 
 
};;
return Double; })();
(asm)["System.Double"] = self;
self = (function () { var initialized;
 initialized = false;;
function Exception() { 
 if (!initialized){
(Exception.init)();
}
this.constructor = Exception; };
Exception.init = function () { 
 initialized = true;
Exception.Interfaces = [  ];
Exception.IsInst = function (t) { return t instanceof Exception; };
Exception.IsValueType = false;
Exception.IsPrimitive = false;
Exception.IsNullable = false;
(Exception.prototype)["SystemException<Message>k__BackingField"] = null;
Exception.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Exception.prototype = new ((asm0)["System.Object"])();;
return Exception; })();
(asm)["System.Exception"] = self;
self = (function () { var initialized;
 initialized = false;;
function InvalidOperationException() { 
 if (!initialized){
(InvalidOperationException.init)();
}
this.constructor = InvalidOperationException; };
InvalidOperationException.init = function () { 
 initialized = true;
InvalidOperationException.Interfaces = [  ];
InvalidOperationException.IsInst = function (t) { return t instanceof InvalidOperationException; };
InvalidOperationException.IsValueType = false;
InvalidOperationException.IsPrimitive = false;
InvalidOperationException.IsNullable = false;
InvalidOperationException.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
InvalidOperationException.prototype = new ((asm0)["System.Exception"])();;
return InvalidOperationException; })();
(asm)["System.InvalidOperationException"] = self;
self = (function () { var initialized;
 initialized = false;;
function FlagsAttribute() { 
 if (!initialized){
(FlagsAttribute.init)();
}
this.constructor = FlagsAttribute; };
FlagsAttribute.init = function () { 
 initialized = true;
FlagsAttribute.Interfaces = [  ];
FlagsAttribute.IsInst = function (t) { return t instanceof FlagsAttribute; };
FlagsAttribute.IsValueType = false;
FlagsAttribute.IsPrimitive = false;
FlagsAttribute.IsNullable = false;
FlagsAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
FlagsAttribute.prototype = new ((asm0)["System.Attribute"])();;
return FlagsAttribute; })();
(asm)["System.FlagsAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function IDisposable() { 
 if (!initialized){
(IDisposable.init)();
}
this.constructor = IDisposable; };
IDisposable.init = function () { 
 initialized = true;
IDisposable.Interfaces = [  ];
IDisposable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IDisposable) != -1; };
IDisposable.IsValueType = false;
IDisposable.IsPrimitive = false;
IDisposable.IsNullable = false;
IDisposable.prototype.vtable = { 
'x600003f': asm0.x600003f 
}; };
IDisposable.prototype = { 
 
};;
return IDisposable; })();
(asm)["System.IDisposable"] = self;
self = (function () { var initialized;
 initialized = false;;
function ICloneable() { 
 if (!initialized){
(ICloneable.init)();
}
this.constructor = ICloneable; };
ICloneable.init = function () { 
 initialized = true;
ICloneable.Interfaces = [  ];
ICloneable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(ICloneable) != -1; };
ICloneable.IsValueType = false;
ICloneable.IsPrimitive = false;
ICloneable.IsNullable = false;
ICloneable.prototype.vtable = { 
'x6000040': asm0.x6000040 
}; };
ICloneable.prototype = { 
 
};;
return ICloneable; })();
(asm)["System.ICloneable"] = self;
self = (function () { var initialized;
 initialized = false;;
function Int16() { 
 if (!initialized){
(Int16.init)();
}
this.constructor = Int16; };
Int16.init = function () { 
 initialized = true;
Int16.Interfaces = [  ];
Int16.IsInst = function (t) { return t instanceof Int16; };
Int16.IsValueType = true;
Int16.IsPrimitive = true;
Int16.IsNullable = false;
Int16.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Int16.prototype = { 
 
};;
return Int16; })();
(asm)["System.Int16"] = self;
self = (function () { var initialized;
 initialized = false;;
function Int32() { 
 if (!initialized){
(Int32.init)();
}
this.constructor = Int32; };
Int32.init = function () { 
 initialized = true;
Int32.Interfaces = [  ];
Int32.IsInst = function (t) { return t instanceof Int32; };
Int32.IsValueType = true;
Int32.IsPrimitive = true;
Int32.IsNullable = false;
Int32.prototype.vtable = { 
'x6000002': asm0.x6000041,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Int32.prototype = { 
 
};;
return Int32; })();
(asm)["System.Int32"] = self;
self = (function () { var initialized;
 initialized = false;;
function Int64() { 
 if (!initialized){
(Int64.init)();
}
this.constructor = Int64; };
Int64.init = function () { 
 initialized = true;
Int64.Interfaces = [  ];
Int64.IsInst = function (t) { return t instanceof Int64; };
Int64.IsValueType = true;
Int64.IsPrimitive = true;
Int64.IsNullable = false;
Int64.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Int64.prototype = { 
 
};;
return Int64; })();
(asm)["System.Int64"] = self;
self = (function () { var initialized;
 initialized = false;;
function IntPtr() { 
 if (!initialized){
(IntPtr.init)();
}
this.constructor = IntPtr; };
IntPtr.init = function () { 
 initialized = true;
IntPtr.Interfaces = [  ];
IntPtr.IsInst = function (t) { return t instanceof IntPtr; };
IntPtr.IsValueType = true;
IntPtr.IsPrimitive = true;
IntPtr.IsNullable = false;
IntPtr.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
IntPtr.prototype = { 
 
};;
return IntPtr; })();
(asm)["System.IntPtr"] = self;
self = (function () { var initialized;
 initialized = false;;
function Math() { 
 if (!initialized){
(Math.init)();
}
this.constructor = Math; };
Math.init = function () { 
 initialized = true;
Math.PI = 0;
Math.Interfaces = [  ];
Math.IsInst = function (t) { return t instanceof Math; };
Math.IsValueType = false;
Math.IsPrimitive = false;
Math.IsNullable = false;
Math.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Math.prototype = new ((asm0)["System.Object"])();;
return Math; })();
(asm)["System.Math"] = self;
self = (function () { var initialized;
 initialized = false;;
function MulticastDelegate() { 
 if (!initialized){
(MulticastDelegate.init)();
}
this.constructor = MulticastDelegate; };
MulticastDelegate.init = function () { 
 initialized = true;
MulticastDelegate.Interfaces = [  ];
MulticastDelegate.IsInst = function (t) { return t instanceof MulticastDelegate; };
MulticastDelegate.IsValueType = false;
MulticastDelegate.IsPrimitive = false;
MulticastDelegate.IsNullable = false;
MulticastDelegate.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
MulticastDelegate.prototype = new ((asm0)["System.Delegate"])();;
return MulticastDelegate; })();
(asm)["System.MulticastDelegate"] = self;
self = (function () { var initialized;
 initialized = false;;
function ParamArrayAttribute() { 
 if (!initialized){
(ParamArrayAttribute.init)();
}
this.constructor = ParamArrayAttribute; };
ParamArrayAttribute.init = function () { 
 initialized = true;
ParamArrayAttribute.Interfaces = [  ];
ParamArrayAttribute.IsInst = function (t) { return t instanceof ParamArrayAttribute; };
ParamArrayAttribute.IsValueType = false;
ParamArrayAttribute.IsPrimitive = false;
ParamArrayAttribute.IsNullable = false;
ParamArrayAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
ParamArrayAttribute.prototype = new ((asm0)["System.Attribute"])();;
return ParamArrayAttribute; })();
(asm)["System.ParamArrayAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function RuntimeFieldHandle() { 
 if (!initialized){
(RuntimeFieldHandle.init)();
}
this.constructor = RuntimeFieldHandle; };
RuntimeFieldHandle.init = function () { 
 initialized = true;
RuntimeFieldHandle.Interfaces = [  ];
RuntimeFieldHandle.IsInst = function (t) { return t instanceof RuntimeFieldHandle; };
RuntimeFieldHandle.IsValueType = true;
RuntimeFieldHandle.IsPrimitive = false;
RuntimeFieldHandle.IsNullable = false;
RuntimeFieldHandle.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
RuntimeFieldHandle.prototype = { 
 
};;
return RuntimeFieldHandle; })();
(asm)["System.RuntimeFieldHandle"] = self;
self = (function () { var initialized;
 initialized = false;;
function RuntimeTypeHandle() { 
 if (!initialized){
(RuntimeTypeHandle.init)();
}
this.constructor = RuntimeTypeHandle; };
RuntimeTypeHandle.init = function () { 
 initialized = true;
RuntimeTypeHandle.Interfaces = [  ];
RuntimeTypeHandle.IsInst = function (t) { return t instanceof RuntimeTypeHandle; };
RuntimeTypeHandle.IsValueType = true;
RuntimeTypeHandle.IsPrimitive = false;
RuntimeTypeHandle.IsNullable = false;
RuntimeTypeHandle.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
RuntimeTypeHandle.prototype = { 
 
};;
return RuntimeTypeHandle; })();
(asm)["System.RuntimeTypeHandle"] = self;
self = (function () { var initialized;
 initialized = false;;
function SByte() { 
 if (!initialized){
(SByte.init)();
}
this.constructor = SByte; };
SByte.init = function () { 
 initialized = true;
SByte.Interfaces = [  ];
SByte.IsInst = function (t) { return t instanceof SByte; };
SByte.IsValueType = true;
SByte.IsPrimitive = true;
SByte.IsNullable = false;
SByte.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
SByte.prototype = { 
 
};;
return SByte; })();
(asm)["System.SByte"] = self;
self = (function () { var initialized;
 initialized = false;;
function Single() { 
 if (!initialized){
(Single.init)();
}
this.constructor = Single; };
Single.init = function () { 
 initialized = true;
Single.Interfaces = [  ];
Single.IsInst = function (t) { return t instanceof Single; };
Single.IsValueType = true;
Single.IsPrimitive = true;
Single.IsNullable = false;
Single.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Single.prototype = { 
 
};;
return Single; })();
(asm)["System.Single"] = self;
self = (function () { var initialized;
 initialized = false;;
function Type() { 
 if (!initialized){
(Type.init)();
}
this.constructor = Type; };
Type.init = function () { 
 initialized = true;
Type.Interfaces = [  ];
Type.IsInst = function (t) { return t instanceof Type; };
Type.IsValueType = false;
Type.IsPrimitive = false;
Type.IsNullable = false;
Type.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Type.prototype = new ((asm0)["System.Object"])();;
return Type; })();
(asm)["System.Type"] = self;
self = (function () { var initialized;
 initialized = false;;
function UInt16() { 
 if (!initialized){
(UInt16.init)();
}
this.constructor = UInt16; };
UInt16.init = function () { 
 initialized = true;
UInt16.Interfaces = [  ];
UInt16.IsInst = function (t) { return t instanceof UInt16; };
UInt16.IsValueType = true;
UInt16.IsPrimitive = true;
UInt16.IsNullable = false;
UInt16.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
UInt16.prototype = { 
 
};;
return UInt16; })();
(asm)["System.UInt16"] = self;
self = (function () { var initialized;
 initialized = false;;
function UInt32() { 
 if (!initialized){
(UInt32.init)();
}
this.constructor = UInt32; };
UInt32.init = function () { 
 initialized = true;
UInt32.Interfaces = [  ];
UInt32.IsInst = function (t) { return t instanceof UInt32; };
UInt32.IsValueType = true;
UInt32.IsPrimitive = true;
UInt32.IsNullable = false;
UInt32.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
UInt32.prototype = { 
 
};;
return UInt32; })();
(asm)["System.UInt32"] = self;
self = (function () { var initialized;
 initialized = false;;
function UInt64() { 
 if (!initialized){
(UInt64.init)();
}
this.constructor = UInt64; };
UInt64.init = function () { 
 initialized = true;
UInt64.Interfaces = [  ];
UInt64.IsInst = function (t) { return t instanceof UInt64; };
UInt64.IsValueType = true;
UInt64.IsPrimitive = true;
UInt64.IsNullable = false;
UInt64.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
UInt64.prototype = { 
 
};;
return UInt64; })();
(asm)["System.UInt64"] = self;
self = (function () { var initialized;
 initialized = false;;
function UIntPtr() { 
 if (!initialized){
(UIntPtr.init)();
}
this.constructor = UIntPtr; };
UIntPtr.init = function () { 
 initialized = true;
UIntPtr.Interfaces = [  ];
UIntPtr.IsInst = function (t) { return t instanceof UIntPtr; };
UIntPtr.IsValueType = true;
UIntPtr.IsPrimitive = true;
UIntPtr.IsNullable = false;
UIntPtr.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
UIntPtr.prototype = { 
 
};;
return UIntPtr; })();
(asm)["System.UIntPtr"] = self;
self = (function () { var initialized;
 initialized = false;;
function Void() { 
 if (!initialized){
(Void.init)();
}
this.constructor = Void; };
Void.init = function () { 
 initialized = true;
Void.Interfaces = [  ];
Void.IsInst = function (t) { return t instanceof Void; };
Void.IsValueType = true;
Void.IsPrimitive = false;
Void.IsNullable = false;
Void.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Void.prototype = { 
 
};;
return Void; })();
(asm)["System.Void"] = self;
self = (function () { var initialized;
 initialized = false;;
function Debugger() { 
 if (!initialized){
(Debugger.init)();
}
this.constructor = Debugger; };
Debugger.init = function () { 
 initialized = true;
Debugger.Interfaces = [  ];
Debugger.IsInst = function (t) { return t instanceof Debugger; };
Debugger.IsValueType = false;
Debugger.IsPrimitive = false;
Debugger.IsNullable = false;
Debugger.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Debugger.prototype = new ((asm0)["System.Object"])();;
return Debugger; })();
(asm)["System.Diagnostics.Debugger"] = self;
self = (function () { var initialized;
 initialized = false;;
function IEnumerable() { 
 if (!initialized){
(IEnumerable.init)();
}
this.constructor = IEnumerable; };
IEnumerable.init = function () { 
 initialized = true;
IEnumerable.Interfaces = [  ];
IEnumerable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerable) != -1; };
IEnumerable.IsValueType = false;
IEnumerable.IsPrimitive = false;
IEnumerable.IsNullable = false;
IEnumerable.prototype.vtable = { 
 
}; };
IEnumerable.prototype = { 
 
};;
return IEnumerable; })();
(asm)["System.Collections.IEnumerable"] = self;
self = (function () { var initialized;
 initialized = false;;
function IEnumerator() { 
 if (!initialized){
(IEnumerator.init)();
}
this.constructor = IEnumerator; };
IEnumerator.init = function () { 
 initialized = true;
IEnumerator.Interfaces = [  ];
IEnumerator.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerator) != -1; };
IEnumerator.IsValueType = false;
IEnumerator.IsPrimitive = false;
IEnumerator.IsNullable = false;
IEnumerator.prototype.vtable = { 
 
}; };
IEnumerator.prototype = { 
 
};;
return IEnumerator; })();
(asm)["System.Collections.IEnumerator"] = self;
self = (function () { var initialized;
 initialized = false;;
function OutAttribute() { 
 if (!initialized){
(OutAttribute.init)();
}
this.constructor = OutAttribute; };
OutAttribute.init = function () { 
 initialized = true;
OutAttribute.Interfaces = [  ];
OutAttribute.IsInst = function (t) { return t instanceof OutAttribute; };
OutAttribute.IsValueType = false;
OutAttribute.IsPrimitive = false;
OutAttribute.IsNullable = false;
OutAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
OutAttribute.prototype = new ((asm0)["System.Attribute"])();;
return OutAttribute; })();
(asm)["System.Runtime.InteropServices.OutAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function IndexerNameAttribute() { 
 if (!initialized){
(IndexerNameAttribute.init)();
}
this.constructor = IndexerNameAttribute; };
IndexerNameAttribute.init = function () { 
 initialized = true;
IndexerNameAttribute.Interfaces = [  ];
IndexerNameAttribute.IsInst = function (t) { return t instanceof IndexerNameAttribute; };
IndexerNameAttribute.IsValueType = false;
IndexerNameAttribute.IsPrimitive = false;
IndexerNameAttribute.IsNullable = false;
IndexerNameAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
IndexerNameAttribute.prototype = new ((asm0)["System.Attribute"])();;
return IndexerNameAttribute; })();
(asm)["System.Runtime.CompilerServices.IndexerNameAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function TargetFrameworkAttribute() { 
 if (!initialized){
(TargetFrameworkAttribute.init)();
}
this.constructor = TargetFrameworkAttribute; };
TargetFrameworkAttribute.init = function () { 
 initialized = true;
TargetFrameworkAttribute.Interfaces = [  ];
TargetFrameworkAttribute.IsInst = function (t) { return t instanceof TargetFrameworkAttribute; };
TargetFrameworkAttribute.IsValueType = false;
TargetFrameworkAttribute.IsPrimitive = false;
TargetFrameworkAttribute.IsNullable = false;
TargetFrameworkAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
TargetFrameworkAttribute.prototype = new ((asm0)["System.Attribute"])();;
return TargetFrameworkAttribute; })();
(asm)["System.Runtime.Versioning.TargetFrameworkAttribute"] = self; })(asm0 || (asm0 = {}));
var asm1; (function (asm) { var self;
 
function clone_value(v) {
    if (typeof v === 'number') return v;
    if (typeof v === 'function') return v;
    var result = {};
    for (var p in v) {
        if (v.hasOwnProperty(p))
            result[p] = v[p];
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
    var r = new asm0['System.String']();
    r.jsstr = str;
    return r;
}

function new_array(type, length) {
    var r = new asm0['System.Array']();
    r.type = type;
    r.jsarr = new Array(length);
    return r;
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
asm.x600000b = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000c = function Callee() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldstr Called!*/
st_00 = new_string("Called!");
/* IL_05: call Void Log(System.Object)*/
braille_test_log(st_00);
/* IL_0A: ret */
return ; };
asm.x600000d = function Main() { var __braille_args__;
 __braille_args__ = arguments;
/* IL_00: call Void Callee()*/
(asm1.x600000c)();
/* IL_05: ret */
return ; };
asm.x600000e = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
self = (function () { var initialized;
 initialized = false;;
function TestLog() { 
 if (!initialized){
(TestLog.init)();
}
this.constructor = TestLog; };
TestLog.init = function () { 
 initialized = true;
TestLog.Interfaces = [  ];
TestLog.IsInst = function (t) { return t instanceof TestLog; };
TestLog.IsValueType = false;
TestLog.IsPrimitive = false;
TestLog.IsNullable = false;
TestLog.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
TestLog.prototype = new ((asm0)["System.Object"])();;
return TestLog; })();
asm.TestLog = self;
self = (function () { var initialized;
 initialized = false;;
function TestHelper() { 
 if (!initialized){
(TestHelper.init)();
}
this.constructor = TestHelper; };
TestHelper.init = function () { 
 initialized = true;
TestHelper.Interfaces = [  ];
TestHelper.IsInst = function (t) { return t instanceof TestHelper; };
TestHelper.IsValueType = false;
TestHelper.IsPrimitive = false;
TestHelper.IsNullable = false;
TestHelper.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
TestHelper.prototype = new ((asm0)["System.Object"])();;
return TestHelper; })();
asm.TestHelper = self;
self = (function () { var initialized;
 initialized = false;;
function Program() { 
 if (!initialized){
(Program.init)();
}
this.constructor = Program; };
Program.init = function () { 
 initialized = true;
Program.Interfaces = [  ];
Program.IsInst = function (t) { return t instanceof Program; };
Program.IsValueType = false;
Program.IsPrimitive = false;
Program.IsNullable = false;
Program.prototype.vtable = { 
'x6000002': asm0.x6000002,
'x6000003': asm0.x6000003,
'x6000006': asm0.x6000006 
}; };
Program.prototype = new ((asm0)["System.Object"])();;
return Program; })();
asm.Program = self;
asm.entryPoint = asm.x600000d; })(asm1 || (asm1 = {}));
