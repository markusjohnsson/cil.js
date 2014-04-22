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
asm.x6000003 = function ToString() { var __braille_args__;
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
asm.x6000004 = function GetHashCode() { var __braille_args__;
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
asm.x6000005 = function ToJavaScriptString() { var __braille_args__;
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
st_09 = (st_08.vtable.x6000003)(st_08);
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
asm.x6000006 = function ReferenceEquals() { var __braille_args__;
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
st_02 = (function (a, b) { return a === b; })(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x6000007 = function Equals() { var __braille_args__;
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
st_02 = (asm0.x6000006)(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x6000008 = function GetType() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: call Type GetTypeImpl(System.Object)*/
st_01 = (function (o) { return o.constructor; })(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000009 = function _ctor() { var __braille_args__;
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
asm.x600000b = function get_Length() { var __braille_args__;
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
st_01 = (function(o) { return o.jsarr.length; })(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x600000e = function GetValue() { var __braille_args__;
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
st_02 = (function(o, i) { return box(o.jsarr[i], o.type); })(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x600000f = function GetEnumerator() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: callvirt IEnumerator GetEnumeratorImpl()*/
st_01 = (st_00.vtable.x6000010)(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000011 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000013 = function () { 
 (((asm0)["System.Array`1+<GetEnumerator>d__0"])(((arguments)[0].constructor.GenericArguments)[0]).init)();
asm.x6000013 = asm.x6000013_;
return (asm.x6000013.apply)(this,arguments); };
asm.x6000013_ = function GetEnumerator() { var __braille_args__;
var loc0;
var loc1;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
 __braille_args__ = arguments;
loc0 = null;
loc1 = null;
/* IL_00: ldc.i4.0 */
st_00 = 0;
/* IL_01: newobj Void .ctor(System.Int32)*/
st_01 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000085)(result,st_00);
return result; })(((asm0)["System.Array`1+<GetEnumerator>d__0"])(((arguments)[0].constructor.GenericArguments)[0]));
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_07: ldloc.0 */
st_02 = loc0;
/* IL_08: ldarg.0 */
st_03 = __braille_args__[0];
/* IL_09: stfld IKVM.Reflection.GenericFieldInstance*/
(st_02)["<>4__this"] = st_03;
/* IL_0E: ldloc.0 */
st_04 = loc0;
/* IL_0F: stloc.1 */
loc1 = st_04;
/* IL_12: ldloc.1 */
st_05 = loc1;
/* IL_13: ret */
return st_05; };
asm.x6000014 = function GetEnumeratorImpl() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: call IEnumerator`1 GetEnumerator()*/
st_01 = (asm0.x6000013)(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000015 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000011)(st_00);
/* IL_06: ret */
return ; };
asm.x6000016 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000017 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: ret */
return ; };
asm.x6000018 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000019 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000018)(st_00);
/* IL_06: ret */
return ; };
asm.x600001a = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: ret */
return ; };
asm.x600001c = function get_HasValue() { var __braille_args__;
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
asm.x600001d = function () { 
 (((asm0)["System.InvalidOperationException"])().init)();
asm.x600001d = asm.x600001d_;
return (asm.x600001d.apply)(this,arguments); };
asm.x600001d_ = function get_Value() { var __braille_args__;
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
 result = new ((arguments)[0])();
(asm0.x600004c)(result,st_03);
return result; })(((asm0)["System.InvalidOperationException"])());
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
asm.x600001e = function () { 
 (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]).init)();
asm.x600001e = asm.x600001e_;
return (asm.x600001e.apply)(this,arguments); };
asm.x600001e_ = function Equals() { var __braille_args__;
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
st_0B = (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]).IsInst)(st_0A);
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
st_12 = unbox_any(st_10,((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]));
/* IL_30: call Boolean Equals(System.Nullable`1[T])*/
st_13 = (asm0.x600001f)(st_11,clone_value(st_12));
/* IL_35: stloc.0 */
loc0 = st_13;
case 0x38:
/* IL_38: ldloc.0 */
st_14 = loc0;
/* IL_39: ret */
return st_14;
}
} };
asm.x600001f = function () { 
 asm.x600001f = asm.x600001f_;
return (asm.x600001f.apply)(this,arguments); };
asm.x600001f_ = function Equals() { var __braille_args__;
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
 (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0]; },
'r': function () { 
 return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"]; } 
};
/* IL_2D: ldarg.0 */
st_0C = __braille_args__[0];
/* IL_2E: ldfld T value*/
st_0D = (st_0C.r)().value;
/* IL_33: box T*/
st_0F = box(st_0D,(((arguments)[0].r)().constructor.GenericArguments)[0]);
/* IL_3E: callvirt Boolean Equals(System.Object)*/
/* ignoring prefixes constrained.*/
st_10 = (st_0E.vtable.x6000007)(st_0E,st_0F);
/* IL_43: stloc.0 */
loc0 = st_10;
case 0x46:
/* IL_46: ldloc.0 */
st_11 = loc0;
/* IL_47: ret */
return st_11;
}
} };
asm.x6000020 = function GetHashCode() { var __braille_args__;
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
 (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0]; },
'r': function () { 
 return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"]; } 
};
/* IL_1B: callvirt Int32 GetHashCode()*/
/* ignoring prefixes constrained.*/
st_06 = (st_05.vtable.x6000004)(st_05);
/* IL_20: stloc.0 */
loc0 = st_06;
case 0x23:
/* IL_23: ldloc.0 */
st_07 = loc0;
/* IL_24: ret */
return st_07;
}
} };
asm.x6000021 = function GetValueOrDefault() { var __braille_args__;
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
asm.x6000022 = function GetValueOrDefault() { var __braille_args__;
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
asm.x6000023 = function () { 
 (((asm0)["System.String"])().init)();
asm.x6000023 = asm.x6000023_;
return (asm.x6000023.apply)(this,arguments); };
asm.x6000023_ = function ToString() { var __braille_args__;
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
 (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0]; },
'r': function () { 
 return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"]; } 
};
/* IL_1A: callvirt String ToString()*/
/* ignoring prefixes constrained.*/
st_07 = (st_06.vtable.x6000003)(st_06);
/* IL_1F: stloc.0 */
loc0 = st_07;
/* IL_20: br.s IL_2A*/
__braille_pos_0__ = 0x2A;
continue;
case 0x22:
/* IL_22: ldsfld String Empty*/
st_08 = ((asm0)["System.String"])().Empty;
/* IL_27: stloc.0 */
loc0 = st_08;
case 0x2A:
/* IL_2A: ldloc.0 */
st_09 = loc0;
/* IL_2B: ret */
return st_09;
}
} };
asm.x6000024 = function (T) { 
 return function () { 
 (((asm0)["System.Nullable`1"])(T).init)();
asm.x6000024 = asm.x6000024_;
return ((asm.x6000024)(T).apply)(this,arguments); }; };
asm.x6000024_ = function (T) { 
 return function op_Implicit() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = new (((asm0)["System.Nullable`1"])(T))();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: newobj Void .ctor(T)*/
st_01 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x600001b)({ 
'w': function () { 
 result = (arguments)[0]; },
'r': function () { 
 return result; } 
},clone_value(st_00));
return result; })(((asm0)["System.Nullable`1"])(T));
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; }; };
asm.x6000025 = function (T) { 
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
st_01 = (asm0.x600001d)(st_00);
/* IL_08: stloc.0 */
loc0 = st_01;
/* IL_0B: ldloc.0 */
st_02 = loc0;
/* IL_0C: ret */
return st_02; }; };
asm.x6000026 = function (T) { 
 return function () { 
 asm.x6000026 = asm.x6000026_;
return ((asm.x6000026)(T).apply)(this,arguments); }; };
asm.x6000026_ = function (T) { 
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
asm.x6000027 = function (T) { 
 return function () { 
 (((asm0)["System.Nullable`1"])(T).init)();
asm.x6000027 = asm.x6000027_;
return ((asm.x6000027)(T).apply)(this,arguments); }; };
asm.x6000027_ = function (T) { 
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
loc0 = new (((asm0)["System.Nullable`1"])(T))();
loc1 = false;
loc2 = new (((asm0)["System.Nullable`1"])(T))();
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
(((asm0)["System.Nullable`1"])(T).IsValueType) ? ((st_06.w)(new (((asm0)["System.Nullable`1"])(T))())) : (null);
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
st_09 = unbox_any(st_08,T);
/* IL_1E: newobj Void .ctor(T)*/
st_0A = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x600001b)({ 
'w': function () { 
 result = (arguments)[0]; },
'r': function () { 
 return result; } 
},clone_value(st_09));
return result; })(((asm0)["System.Nullable`1"])(T));
/* IL_23: stloc.0 */
loc0 = st_0A;
case 0x26:
/* IL_26: ldloc.0 */
st_0B = loc0;
/* IL_27: ret */
return st_0B;
}
} }; };
asm.x600001b = function _ctor() { var __braille_args__;
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
asm.x6000028 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: ret */
return ; };
asm.x600002c = function () { 
 (((asm0)["System.Exception"])().init)();
asm.x600002c = asm.x600002c_;
return (asm.x600002c.apply)(this,arguments); };
asm.x600002c_ = function get_Chars() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: nop */
/* IL_01: ldstr Not implemented.*/
st_00 = new_string("Not implemented.");
/* IL_06: newobj Void .ctor(System.String)*/
st_01 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000049)(result,st_00);
return result; })(((asm0)["System.Exception"])());
/* IL_0B: throw */
throw st_01; };
asm.x600002d = function () { 
 (((asm0)["System.String"])().init)();
asm.x600002d = asm.x600002d_;
return (asm.x600002d.apply)(this,arguments); };
asm.x600002d_ = function Concat() { var __braille_args__;
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
loc0 = null;
loc1 = null;
/* IL_00: nop */
/* IL_01: ldc.i4.2 */
st_00 = 2;
/* IL_02: newarr System.String*/
st_01 = new_array(((asm0)["System.String"])(),st_00);
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
st_09 = (function () { return new_string(String.prototype.concat.apply('', arguments)); })(st_08);
/* IL_16: stloc.0 */
loc0 = st_09;
/* IL_19: ldloc.0 */
st_0A = loc0;
/* IL_1A: ret */
return st_0A; };
asm.x600002e = function () { 
 (((asm0)["System.String"])().init)();
asm.x600002e = asm.x600002e_;
return (asm.x600002e.apply)(this,arguments); };
asm.x600002e_ = function Concat() { var __braille_args__;
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
loc0 = null;
loc1 = null;
/* IL_00: nop */
/* IL_01: ldc.i4.2 */
st_00 = 2;
/* IL_02: newarr System.String*/
st_01 = new_array(((asm0)["System.String"])(),st_00);
/* IL_07: stloc.1 */
loc1 = st_01;
/* IL_08: ldloc.1 */
st_03 = loc1;
/* IL_09: ldc.i4.0 */
st_04 = 0;
/* IL_0A: ldarg.0 */
st_02 = __braille_args__[0];
/* IL_0B: callvirt String ToString()*/
st_05 = (st_02.vtable.x6000003)(st_02);
/* IL_10: stelem.ref */
(st_03.jsarr)[st_04] = st_05;
/* IL_11: ldloc.1 */
st_07 = loc1;
/* IL_12: ldc.i4.1 */
st_08 = 1;
/* IL_13: ldarg.1 */
st_06 = __braille_args__[1];
/* IL_14: callvirt String ToString()*/
st_09 = (st_06.vtable.x6000003)(st_06);
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
asm.x600002f = function Concat() { var __braille_args__;
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
st_01 = (function () { return new_string(String.prototype.concat.apply('', arguments)); })(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000030 = function () { 
 (((asm0)["System.Exception"])().init)();
asm.x6000030 = asm.x6000030_;
return (asm.x6000030.apply)(this,arguments); };
asm.x6000030_ = function Concat() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: nop */
/* IL_01: ldstr Not implemented*/
st_00 = new_string("Not implemented");
/* IL_06: newobj Void .ctor(System.String)*/
st_01 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000049)(result,st_00);
return result; })(((asm0)["System.Exception"])());
/* IL_0B: throw */
throw st_01; };
asm.x6000031 = function get_Length() { var __braille_args__;
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
st_01 = (function(o) { return o.jsstr.length; })(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000032 = function ToString() { var __braille_args__;
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
asm.x6000033 = function op_Inequality() { var __braille_args__;
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
asm.x6000034 = function op_Equality() { var __braille_args__;
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
st_02 = (function(a, b) { return a.jsstr === b.jsstr; })(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x6000035 = function Equals() { var __braille_args__;
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
st_02 = (function(a, b) { return a.jsstr === b.jsstr; })(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x6000036 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000037 = function () { 
 (((asm0)["System.String"])().init)();
asm.x6000037 = asm.x6000037_;
return (asm.x6000037.apply)(this,arguments); };
asm.x6000037_ = function _cctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldstr */
st_00 = new_string("");
/* IL_05: stsfld String Empty*/
(((asm0)["System.String"])())["Empty"] = st_00;
/* IL_0A: ret */
return ; };
asm.x6000039 = function get_MemberName() { var __braille_args__;
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
asm.x6000038 = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
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
asm.x600003b = function get_ValidOn() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = new (((asm0)["System.AttributeTargets"])())();
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
asm.x600003c = function set_ValidOn() { var __braille_args__;
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
asm.x600003d = function get_Inherited() { var __braille_args__;
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
asm.x600003e = function set_Inherited() { var __braille_args__;
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
asm.x600003a = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_09: ldarg.1 */
st_02 = __braille_args__[1];
/* IL_0A: call Void set_ValidOn(System.AttributeTargets)*/
(asm0.x600003c)(st_01,clone_value(st_02));
/* IL_0F: nop */
/* IL_10: nop */
/* IL_11: ret */
return ; };
asm.x600003f = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var __braille_pos_0__;
 __braille_args__ = arguments;
loc0 = null;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
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
asm.x6000040 = function () { 
 (((asm0)["System.Byte"])().init)();
asm.x6000040 = asm.x6000040_;
return (asm.x6000040.apply)(this,arguments); };
asm.x6000040_ = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldind.u1 */
st_01 = st_00.boxed;
/* IL_03: box System.Byte*/
st_02 = { 
'boxed': st_01,
'vtable': ((asm0)["System.Byte"])().prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000041 = function () { 
 (((asm0)["System.Char"])().init)();
asm.x6000041 = asm.x6000041_;
return (asm.x6000041.apply)(this,arguments); };
asm.x6000041_ = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldind.u2 */
st_01 = st_00.boxed;
/* IL_03: box System.Char*/
st_02 = { 
'boxed': st_01,
'vtable': ((asm0)["System.Char"])().prototype.vtable 
};
/* IL_08: call String ToStringImpl(System.Object)*/
st_03 = (function(o) { return new_string(String.fromCharCode(o.boxed)); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000044 = function WriteLine() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: callvirt String ToString()*/
st_01 = (st_00.vtable.x6000003)(st_00);
/* IL_07: call Void WriteLineImpl(System.String)*/
((function (o) { console.log(o.jsstr); }))(st_01);
/* IL_0C: nop */
/* IL_0D: ret */
return ; };
asm.x6000045 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
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
asm.x6000047 = function () { 
 (((asm0)["System.Double"])().init)();
asm.x6000047 = asm.x6000047_;
return (asm.x6000047.apply)(this,arguments); };
asm.x6000047_ = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldind.r8 */
st_01 = st_00.boxed;
/* IL_03: box System.Double*/
st_02 = { 
'boxed': st_01,
'vtable': ((asm0)["System.Double"])().prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x600004a = function get_Message() { var __braille_args__;
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
asm.x600004b = function set_Message() { var __braille_args__;
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
asm.x6000048 = function _ctor() { var __braille_args__;
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
asm.x6000049 = function _ctor() { var __braille_args__;
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
(asm0.x600004b)(st_01,st_02);
/* IL_0F: nop */
/* IL_10: nop */
/* IL_11: ret */
return ; };
asm.x600004c = function _ctor() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: call Void .ctor(System.String)*/
(asm0.x6000049)(st_00,st_01);
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: nop */
/* IL_0A: ret */
return ; };
asm.x600004d = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: ret */
return ; };
asm.x6000050 = function () { 
 (((asm0)["System.Int16"])().init)();
asm.x6000050 = asm.x6000050_;
return (asm.x6000050.apply)(this,arguments); };
asm.x6000050_ = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldind.i2 */
st_01 = st_00.boxed;
/* IL_03: box System.Int16*/
st_02 = { 
'boxed': st_01,
'vtable': ((asm0)["System.Int16"])().prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000051 = function () { 
 (((asm0)["System.Int32"])().init)();
asm.x6000051 = asm.x6000051_;
return (asm.x6000051.apply)(this,arguments); };
asm.x6000051_ = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldind.i4 */
st_01 = st_00.boxed;
/* IL_03: box System.Int32*/
st_02 = { 
'boxed': st_01,
'vtable': ((asm0)["System.Int32"])().prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000053 = function () { 
 (((asm0)["System.Int64"])().init)();
asm.x6000053 = asm.x6000053_;
return (asm.x6000053.apply)(this,arguments); };
asm.x6000053_ = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldind.i8 */
st_01 = st_00.boxed;
/* IL_03: box System.Int64*/
st_02 = { 
'boxed': st_01,
'vtable': ((asm0)["System.Int64"])().prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000054 = function () { 
 (((asm0)["System.IntPtr"])().init)();
asm.x6000054 = asm.x6000054_;
return (asm.x6000054.apply)(this,arguments); };
asm.x6000054_ = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldobj System.IntPtr*/
st_01 = st_00;
/* IL_07: box System.IntPtr*/
st_02 = { 
'boxed': st_01,
'vtable': ((asm0)["System.IntPtr"])().prototype.vtable 
};
/* IL_0C: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_11: stloc.0 */
loc0 = st_03;
/* IL_14: ldloc.0 */
st_04 = loc0;
/* IL_15: ret */
return st_04; };
asm.x6000055 = function () { 
 (((asm0)["System.Double"])().init)();
asm.x6000055 = asm.x6000055_;
return (asm.x6000055.apply)(this,arguments); };
asm.x6000055_ = function Sqrt() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 __braille_args__ = arguments;
loc0 = 0;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: box System.Double*/
st_01 = { 
'boxed': st_00,
'vtable': ((asm0)["System.Double"])().prototype.vtable 
};
/* IL_07: call Double SqrtImpl(System.Object)*/
st_02 = (function(o) { return Math.sqrt(o.boxed); })(st_01);
/* IL_0C: stloc.0 */
loc0 = st_02;
/* IL_0F: ldloc.0 */
st_03 = loc0;
/* IL_10: ret */
return st_03; };
asm.x6000056 = function () { 
 (((asm0)["System.Double"])().init)();
asm.x6000056 = asm.x6000056_;
return (asm.x6000056.apply)(this,arguments); };
asm.x6000056_ = function Floor() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 __braille_args__ = arguments;
loc0 = 0;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: box System.Double*/
st_01 = { 
'boxed': st_00,
'vtable': ((asm0)["System.Double"])().prototype.vtable 
};
/* IL_07: call Double FloorImpl(System.Object)*/
st_02 = (function(o) { return Math.floor(o.boxed); })(st_01);
/* IL_0C: stloc.0 */
loc0 = st_02;
/* IL_0F: ldloc.0 */
st_03 = loc0;
/* IL_10: ret */
return st_03; };
asm.x6000057 = function () { 
 (((asm0)["System.Double"])().init)();
asm.x6000057 = asm.x6000057_;
return (asm.x6000057.apply)(this,arguments); };
asm.x6000057_ = function Pow() { var __braille_args__;
var loc0;
var st_00;
var st_02;
var st_01;
var st_03;
var st_04;
var st_05;
 __braille_args__ = arguments;
loc0 = 0;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: box System.Double*/
st_02 = { 
'boxed': st_00,
'vtable': ((asm0)["System.Double"])().prototype.vtable 
};
/* IL_07: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_08: box System.Double*/
st_03 = { 
'boxed': st_01,
'vtable': ((asm0)["System.Double"])().prototype.vtable 
};
/* IL_0D: call Double PowImpl(System.Object, System.Object)*/
st_04 = (function(a, b) { return Math.pow(a.boxed, b.boxed); })(st_02,st_03);
/* IL_12: stloc.0 */
loc0 = st_04;
/* IL_15: ldloc.0 */
st_05 = loc0;
/* IL_16: ret */
return st_05; };
asm.x600005b = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600005c = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000046)(st_00);
/* IL_06: ret */
return ; };
asm.x600005d = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: ret */
return ; };
asm.x600005e = function () { 
 (((asm0)["System.SByte"])().init)();
asm.x600005e = asm.x600005e_;
return (asm.x600005e.apply)(this,arguments); };
asm.x600005e_ = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldind.i1 */
st_01 = st_00.boxed;
/* IL_03: box System.SByte*/
st_02 = { 
'boxed': st_01,
'vtable': ((asm0)["System.SByte"])().prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x600005f = function () { 
 (((asm0)["System.Single"])().init)();
asm.x600005f = asm.x600005f_;
return (asm.x600005f.apply)(this,arguments); };
asm.x600005f_ = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldind.r4 */
st_01 = st_00.boxed;
/* IL_03: box System.Single*/
st_02 = { 
'boxed': st_01,
'vtable': ((asm0)["System.Single"])().prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000060 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000061 = function () { 
 (((asm0)["System.UInt16"])().init)();
asm.x6000061 = asm.x6000061_;
return (asm.x6000061.apply)(this,arguments); };
asm.x6000061_ = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldind.u2 */
st_01 = st_00.boxed;
/* IL_03: box System.UInt16*/
st_02 = { 
'boxed': st_01,
'vtable': ((asm0)["System.UInt16"])().prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000062 = function () { 
 (((asm0)["System.UInt32"])().init)();
asm.x6000062 = asm.x6000062_;
return (asm.x6000062.apply)(this,arguments); };
asm.x6000062_ = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldind.u4 */
st_01 = st_00.boxed;
/* IL_03: box System.UInt32*/
st_02 = { 
'boxed': st_01,
'vtable': ((asm0)["System.UInt32"])().prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000063 = function () { 
 (((asm0)["System.UInt64"])().init)();
asm.x6000063 = asm.x6000063_;
return (asm.x6000063.apply)(this,arguments); };
asm.x6000063_ = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldind.i8 */
st_01 = st_00.boxed;
/* IL_03: box System.UInt64*/
st_02 = { 
'boxed': st_01,
'vtable': ((asm0)["System.UInt64"])().prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000064 = function () { 
 (((asm0)["System.UIntPtr"])().init)();
asm.x6000064 = asm.x6000064_;
return (asm.x6000064.apply)(this,arguments); };
asm.x6000064_ = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_02: ldobj System.UIntPtr*/
st_01 = st_00;
/* IL_07: box System.UIntPtr*/
st_02 = { 
'boxed': st_01,
'vtable': ((asm0)["System.UIntPtr"])().prototype.vtable 
};
/* IL_0C: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_11: stloc.0 */
loc0 = st_03;
/* IL_14: ldloc.0 */
st_04 = loc0;
/* IL_15: ret */
return st_04; };
asm.x6000065 = function _ctor() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldstr Operation not supported*/
st_01 = new_string("Operation not supported");
/* IL_06: call Void .ctor(System.String)*/
(asm0.x6000049)(st_00,st_01);
/* IL_0B: nop */
/* IL_0C: nop */
/* IL_0D: nop */
/* IL_0E: ret */
return ; };
asm.x6000066 = function _ctor() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: call Void .ctor(System.String)*/
(asm0.x6000049)(st_00,st_01);
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: nop */
/* IL_0A: ret */
return ; };
asm.x6000067 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000048)(st_00);
/* IL_06: ret */
return ; };
asm.x6000068 = function get_CurrentManagedThreadId() { var __braille_args__;
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
asm.x600006a = function Invoke() { 
 
                                            var m = arguments[0]._methodPtr;
                                            var t = arguments[0]._target;
                                            if (t != null)
                                                arguments[0] = t;
                                            else
                                                arguments = Array.prototype.slice.call(arguments, 1);
                                            return m.apply(null, arguments); };
asm.x6000069 = function ctor() { 
 arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];; };
asm.x6000076 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600007c = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: ret */
return ; };
asm.x600007d = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: ret */
return ; };
asm.x600007e = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: ret */
return ; };
asm.x6000080 = function MoveNext() { var __braille_args__;
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
var st_0C;
var st_07;
var st_09;
var st_08;
var st_0A;
var st_0B;
var st_0D;
var st_0E;
var st_0F;
var st_10;
var st_11;
var st_12;
var st_13;
var st_14;
var st_17;
var st_15;
var st_16;
var st_18;
var st_19;
var st_1C;
var st_1A;
var st_1B;
var st_1D;
var st_1E;
var st_1F;
var st_20;
var st_21;
var __braille_pos_0__;
var __braille_switch_value__;
var __braille_jmp__;
 __braille_args__ = arguments;
loc0 = false;
loc1 = 0;
loc2 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld Int32 <>1__state*/
st_01 = (st_00)["System_GetEnumerator_d__0<>1__state"];
/* IL_06: stloc.1 */
loc1 = st_01;
/* IL_07: ldloc.1 */
st_02 = loc1;
/* IL_08: switch System.Int32[]*/
__braille_switch_value__ = st_02;
if (__braille_switch_value__ >= 0x2){
__braille_pos_0__ = 0x15;continue;
}
__braille_jmp__ = [ 0x4,0x2 ];
__braille_pos_0__ = (0x15 + (__braille_jmp__)[__braille_switch_value__]);
continue;
case 0x15:
/* IL_15: br.s IL_1B*/
__braille_pos_0__ = 0x1B;
continue;
case 0x17:
/* IL_17: br.s IL_55*/
__braille_pos_0__ = 0x55;
continue;
case 0x19:
/* IL_19: br.s IL_1D*/
__braille_pos_0__ = 0x1D;
continue;
case 0x1B:
/* IL_1B: br.s IL_82*/
__braille_pos_0__ = 0x82;
continue;
case 0x1D:
/* IL_1D: ldarg.0 */
st_03 = __braille_args__[0];
/* IL_1E: ldc.i4.m1 */
st_04 = -1;
/* IL_1F: stfld Int32 <>1__state*/
(st_03)["System_GetEnumerator_d__0<>1__state"] = st_04;
/* IL_24: nop */

/* IL_25: ldarg.0 */
st_05 = __braille_args__[0];
/* IL_26: ldc.i4.0 */
st_06 = 0;
/* IL_27: stfld Int32 <i>5__1*/
(st_05)["<i>5__1"] = st_06;
/* IL_2C: br.s IL_6A*/
__braille_pos_0__ = 0x6A;
continue;
case 0x2E:
/* IL_2E: ldarg.0 */
st_0C = __braille_args__[0];
/* IL_2F: ldarg.0 */
st_07 = __braille_args__[0];
/* IL_30: ldfld Array`1 <>4__this*/
st_09 = (st_07)["<>4__this"];
/* IL_35: ldarg.0 */
st_08 = __braille_args__[0];
/* IL_36: ldfld Int32 <i>5__1*/
st_0A = (st_08)["<i>5__1"];
/* IL_3B: call Object GetValue(System.Int32)*/
st_0B = (asm0.x600000e)(st_09,st_0A);
/* IL_40: unbox.any T*/
st_0D = unbox_any(st_0B,((arguments)[0].constructor.GenericArguments)[0]);
/* IL_45: stfld T <>2__current*/
(st_0C)["System_GetEnumerator_d__0<>2__current"] = st_0D;
/* IL_4A: ldarg.0 */
st_0E = __braille_args__[0];
/* IL_4B: ldc.i4.1 */
st_0F = 1;
/* IL_4C: stfld Int32 <>1__state*/
(st_0E)["System_GetEnumerator_d__0<>1__state"] = st_0F;
/* IL_51: ldc.i4.1 */
st_10 = 1;
/* IL_52: stloc.0 */
loc0 = st_10;
/* IL_53: br.s IL_86*/
__braille_pos_0__ = 0x86;
continue;
case 0x55:
/* IL_55: ldarg.0 */
st_11 = __braille_args__[0];
/* IL_56: ldc.i4.m1 */
st_12 = -1;
/* IL_57: stfld Int32 <>1__state*/
(st_11)["System_GetEnumerator_d__0<>1__state"] = st_12;
/* IL_5C: ldarg.0 */
st_13 = __braille_args__[0];
/* IL_5D: dup */
st_17 = (st_14 = st_13);
/* IL_5E: ldfld Int32 <i>5__1*/
st_15 = (st_14)["<i>5__1"];
/* IL_63: ldc.i4.1 */
st_16 = 1;
/* IL_64: add */
st_18 = (st_15 + st_16);
/* IL_65: stfld Int32 <i>5__1*/
(st_17)["<i>5__1"] = st_18;
case 0x6A:
/* IL_6A: ldarg.0 */
st_19 = __braille_args__[0];
/* IL_6B: ldfld Int32 <i>5__1*/
st_1C = (st_19)["<i>5__1"];
/* IL_70: ldarg.0 */
st_1A = __braille_args__[0];
/* IL_71: ldfld Array`1 <>4__this*/
st_1B = (st_1A)["<>4__this"];
/* IL_76: call Int32 get_Length()*/
st_1D = (asm0.x600000b)(st_1B);
/* IL_7C: clt */
st_1E = (st_1C < st_1D) ? (1) : (0);
/* IL_7D: stloc.2 */
loc2 = st_1E;
/* IL_7E: ldloc.2 */
st_1F = loc2;
/* IL_7F: brtrue.s IL_2E*/
if (st_1F){
__braille_pos_0__ = 0x2E;continue;
}
/* IL_81: nop */

case 0x82:
/* IL_82: ldc.i4.0 */
st_20 = 0;
/* IL_83: stloc.0 */
loc0 = st_20;
case 0x86:
/* IL_86: ldloc.0 */
st_21 = loc0;
/* IL_87: ret */
return st_21;
}
} };
asm.x6000081 = function System_Collections_Generic_IEnumerator_T__get_Current() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = (((arguments)[0].constructor.GenericArguments)[0].IsValueType) ? ((((arguments)[0].constructor.GenericArguments)[0].IsPrimitive) ? (0) : (new (((arguments)[0].constructor.GenericArguments)[0])())) : (null);
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld T <>2__current*/
st_01 = (st_00)["System_GetEnumerator_d__0<>2__current"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x6000082 = function () { 
 (((asm0)["System.NotSupportedException"])().init)();
asm.x6000082 = asm.x6000082_;
return (asm.x6000082.apply)(this,arguments); };
asm.x6000082_ = function System_Collections_IEnumerator_Reset() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000065)(result);
return result; })(((asm0)["System.NotSupportedException"])());
/* IL_05: throw */
throw st_00; };
asm.x6000083 = function System_IDisposable_Dispose() { var __braille_args__;
 __braille_args__ = arguments;
/* IL_00: nop */
/* IL_01: ret */
return ; };
asm.x6000084 = function () { 
 asm.x6000084 = asm.x6000084_;
return (asm.x6000084.apply)(this,arguments); };
asm.x6000084_ = function System_Collections_IEnumerator_get_Current() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld T <>2__current*/
st_01 = (st_00)["System_GetEnumerator_d__0<>2__current"];
/* IL_06: box T*/
st_02 = box(st_01,((arguments)[0].constructor.GenericArguments)[0]);
/* IL_0B: stloc.0 */
loc0 = st_02;
/* IL_0E: ldloc.0 */
st_03 = loc0;
/* IL_0F: ret */
return st_03; };
asm.x6000085 = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_07: ldarg.1 */
st_02 = __braille_args__[1];
/* IL_08: stfld Int32 <>1__state*/
(st_01)["System_GetEnumerator_d__0<>1__state"] = st_02;
/* IL_0D: ret */
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
$$Object.prototype = { 
 
};;
c = $$Object;
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
'x600000a': asm0.x600000a 
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
'x600000f': asm0.x600000f,
'x6000010': asm0.x6000010,
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
};
(Array.prototype)[((asm0)["System.Collections.IEnumerable"])()] = { 
'x600000a': asm0.x600000f 
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
'x6000012': asm0.x6000012 
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
'x6000013': asm0.x6000013,
'x6000010': asm0.x6000014,
'x600000f': asm0.x600000f,
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
};
(Array_1.prototype)[((asm0)["System.Collections.Generic.IEnumerable`1"])(T)] = { 
'x6000012': asm0.x6000013 
};
(Array_1.prototype)[((asm0)["System.Collections.IEnumerable"])()] = { 
'x600000a': asm0.x600000f 
}; };
Array_1.prototype = new (((asm0)["System.Array"])())();;
c = Array_1;
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000007': asm0.x600001e,
'x6000004': asm0.x6000020,
'x6000003': asm0.x6000023 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
(asm0.x6000037)();
$$String.prototype.jsstr = null;
$$String.prototype.vtable = { 
'x6000003': asm0.x6000032,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x600003f,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000040,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000041,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Console.prototype = new (((asm0)["System.Object"])())();;
c = Console;
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
Delegate.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Delegate.prototype = new (((asm0)["System.Object"])())();;
c = Delegate;
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
'x6000003': asm0.x6000047,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
FlagsAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = FlagsAttribute;
ct = c;
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
'x600004e': asm0.x600004e 
}; };
IDisposable.prototype = { 
 
};;
c = IDisposable;
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
'x600004f': asm0.x600004f 
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
'x6000003': asm0.x6000050,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000051,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000053,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000054,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Math.prototype = new (((asm0)["System.Object"])())();;
c = Math;
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
MulticastDelegate.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
MulticastDelegate.prototype = new (((asm0)["System.Delegate"])())();;
c = MulticastDelegate;
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x600005e,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x600005f,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000061,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000062,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000063,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000064,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
Func_2.prototype.vtable = { 
'x600006a': asm0.x600006a,
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Debugger.prototype = new (((asm0)["System.Object"])())();;
c = Debugger;
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
'x6000077': asm0.x6000077,
'x6000078': asm0.x6000078,
'x6000079': asm0.x6000079 
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
'x600007a': asm0.x600007a,
'x600007b': asm0.x600007b 
}; };
IEnumerator_1.prototype = { 
 
};;
c = IEnumerator_1;
tree_set([ T ],ct,c);
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
ExtensionAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = ExtensionAttribute;
ct = c;
return c; }; })();
(asm)["System.Array`1+<GetEnumerator>d__0"] = (function () { var ct;
 ct = { 
 
};
return function (T) { var c;
var initialized;
 c = tree_get([ T ],ct);
if (c){
return c;
}
initialized = false;;
function _GetEnumerator_d__0() { 
 (_GetEnumerator_d__0.init)();
this.constructor = _GetEnumerator_d__0; };
_GetEnumerator_d__0.init = function () { 
 if (initialized){
return;
}
initialized = true;
_GetEnumerator_d__0.Interfaces = [ ((asm0)["System.Collections.Generic.IEnumerator`1"])(T),((asm0)["System.Collections.IEnumerator"])(),((asm0)["System.IDisposable"])() ];
_GetEnumerator_d__0.IsInst = function (t) { return t instanceof _GetEnumerator_d__0; };
_GetEnumerator_d__0.IsValueType = false;
_GetEnumerator_d__0.IsPrimitive = false;
_GetEnumerator_d__0.IsNullable = false;
_GetEnumerator_d__0.GenericArguments = [ T ];
(_GetEnumerator_d__0.prototype)["System_GetEnumerator_d__0<>2__current"] = (T.IsValueType) ? ((T.IsPrimitive) ? (0) : (new T())) : (null);
(_GetEnumerator_d__0.prototype)["System_GetEnumerator_d__0<>1__state"] = 0;
(_GetEnumerator_d__0.prototype)["<>4__this"] = null;
(_GetEnumerator_d__0.prototype)["<i>5__1"] = 0;
_GetEnumerator_d__0.prototype.vtable = { 
'x6000080': asm0.x6000080,
'x6000081': asm0.x6000081,
'x6000082': asm0.x6000082,
'x6000083': asm0.x6000083,
'x6000084': asm0.x6000084,
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
};
(_GetEnumerator_d__0.prototype)[((asm0)["System.Collections.Generic.IEnumerator`1"])(T)] = { 
'x600007a': asm0.x6000081,
'x600007b': asm0.x6000080 
};
(_GetEnumerator_d__0.prototype)[((asm0)["System.Collections.IEnumerator"])()] = { 
'x6000077': asm0.x6000084,
'x6000078': asm0.x6000080,
'x6000079': asm0.x6000082 
};
(_GetEnumerator_d__0.prototype)[((asm0)["System.IDisposable"])()] = { 
'x600004e': asm0.x6000083 
}; };
_GetEnumerator_d__0.prototype = new (((asm0)["System.Object"])())();;
c = _GetEnumerator_d__0;
tree_set([ T ],ct,c);
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
asm.x600000d = function ICommon_DoIt() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.1 */
st_00 = 1;
/* IL_01: ret */
return st_00; };
asm.x600000e = function DoIt() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.2 */
st_00 = 2;
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
asm.x6000010 = function ICommon_DoIt() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.3 */
st_00 = 3;
/* IL_01: ret */
return st_00; };
asm.x6000011 = function DoIt() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.4 */
st_00 = 4;
/* IL_01: ret */
return st_00; };
asm.x6000012 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm1.x600000f)(st_00);
/* IL_06: ret */
return ; };
asm.x6000013 = function DoIt() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.5 */
st_00 = 5;
/* IL_01: ret */
return st_00; };
asm.x6000014 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm1.x6000012)(st_00);
/* IL_06: ret */
return ; };
asm.x6000015 = function () { 
 ((asm1.ReallyDerived)().init)();
asm.x6000015 = asm.x6000015_;
return (asm.x6000015.apply)(this,arguments); };
asm.x6000015_ = function Main() { var __braille_args__;
var loc0;
var loc1;
var loc2;
var loc3;
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
 __braille_args__ = arguments;
loc0 = null;
loc1 = null;
loc2 = null;
loc3 = null;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new ((arguments)[0])();
(asm1.x6000014)(result);
return result; })((asm1.ReallyDerived)());
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
st_05 = (st_04.vtable.x6000011)(st_04);
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
st_09 = ((st_08)[(asm1.ICommon)()].x600000c)(st_08);
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
st_0D = (st_0C.vtable.x6000011)(st_0C);
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
st_11 = (st_10.vtable.x600000e)(st_10);
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
st_15 = ((st_14)[(asm1.ICommon)()].x600000c)(st_14);
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
asm.x6000016 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
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
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
TestHelper.prototype = new (((asm0)["System.Object"])())();;
c = TestHelper;
ct = c;
return c; }; })();
asm.ICommon = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function ICommon() { 
 (ICommon.init)();
this.constructor = ICommon; };
ICommon.init = function () { 
 if (initialized){
return;
}
initialized = true;
ICommon.Interfaces = [  ];
ICommon.IsInst = function (t) { return t.constructor.Interfaces.indexOf(ICommon) != -1; };
ICommon.IsValueType = false;
ICommon.IsPrimitive = false;
ICommon.IsNullable = false;
ICommon.prototype.vtable = { 
'x600000c': asm1.x600000c 
}; };
ICommon.prototype = { 
 
};;
c = ICommon;
ct = c;
return c; }; })();
asm.Base = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Base() { 
 (Base.init)();
this.constructor = Base; };
Base.init = function () { 
 if (initialized){
return;
}
initialized = true;
Base.Interfaces = [ (asm1.ICommon)() ];
Base.IsInst = function (t) { return t instanceof Base; };
Base.IsValueType = false;
Base.IsPrimitive = false;
Base.IsNullable = false;
Base.prototype.vtable = { 
'x600000d': asm1.x600000d,
'x600000e': asm1.x600000e,
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
};
(Base.prototype)[(asm1.ICommon)()] = { 
'x600000c': asm1.x600000d 
}; };
Base.prototype = new (((asm0)["System.Object"])())();;
c = Base;
ct = c;
return c; }; })();
asm.Derived = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Derived() { 
 (Derived.init)();
this.constructor = Derived; };
Derived.init = function () { 
 if (initialized){
return;
}
initialized = true;
Derived.Interfaces = [ (asm1.ICommon)() ];
Derived.IsInst = function (t) { return t instanceof Derived; };
Derived.IsValueType = false;
Derived.IsPrimitive = false;
Derived.IsNullable = false;
Derived.prototype.vtable = { 
'x6000010': asm1.x6000010,
'x6000011': asm1.x6000011,
'x600000e': asm1.x600000e,
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
};
(Derived.prototype)[(asm1.ICommon)()] = { 
'x600000c': asm1.x6000010 
}; };
Derived.prototype = new ((asm1.Base)())();;
c = Derived;
ct = c;
return c; }; })();
asm.ReallyDerived = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function ReallyDerived() { 
 (ReallyDerived.init)();
this.constructor = ReallyDerived; };
ReallyDerived.init = function () { 
 if (initialized){
return;
}
initialized = true;
ReallyDerived.Interfaces = [ (asm1.ICommon)() ];
ReallyDerived.IsInst = function (t) { return t instanceof ReallyDerived; };
ReallyDerived.IsValueType = false;
ReallyDerived.IsPrimitive = false;
ReallyDerived.IsNullable = false;
ReallyDerived.prototype.vtable = { 
'x6000011': asm1.x6000013,
'x600000e': asm1.x600000e,
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
};
(ReallyDerived.prototype)[(asm1.ICommon)()] = { 
'x600000c': asm1.x6000010 
}; };
ReallyDerived.prototype = new ((asm1.Derived)())();;
c = ReallyDerived;
ct = c;
return c; }; })();
asm.Test = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Test() { 
 (Test.init)();
this.constructor = Test; };
Test.init = function () { 
 if (initialized){
return;
}
initialized = true;
Test.Interfaces = [  ];
Test.IsInst = function (t) { return t instanceof Test; };
Test.IsValueType = false;
Test.IsPrimitive = false;
Test.IsNullable = false;
Test.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Test.prototype = new (((asm0)["System.Object"])())();;
c = Test;
ct = c;
return c; }; })();
asm.entryPoint = asm.x6000015; })(asm1 || (asm1 = {}));
