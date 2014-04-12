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

function new_string(str) {
    var r = new asm0['System.String']();
    r.jsstr = str;
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
asm.x6000003 = function ToJavaScriptString() { var __braille_args__;
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
/* IL_02: callvirt String ToString()*/
st_01 = (st_00.vtable.x6000002)(st_00);
/* IL_07: ldfld Object jsstr*/
st_02 = st_01.jsstr;
/* IL_0C: stloc.0 */
loc0 = st_02;
/* IL_0F: ldloc.0 */
st_03 = loc0;
/* IL_10: ret */
return st_03; };
asm.ToJavaScriptString = asm.x6000003;
asm.x6000004 = function ReferenceEquals() { var __braille_args__;
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
asm.x6000005 = function _ctor() { var __braille_args__;
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
asm.x6000006 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000007 = function _ctor() { var __braille_args__;
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
(asm0.x6000007)(st_00);
/* IL_06: ret */
return ; };
asm.x600000c = function get_Chars() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
((asm0)["System.Exception"].init)();
/* IL_00: nop */
/* IL_01: ldstr Direct call not supported.*/
st_00 = new_string("Direct call not supported.");
/* IL_06: newobj Void .ctor(System.String)*/
st_01 = (function () { var result;
 result = new ((asm0)["System.Exception"])();
(asm0.x6000025)(result,st_00);
return result; })();
/* IL_0B: throw */
throw st_01; };
asm.x600000d = function Concat() { var __braille_args__;
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
st_01 = [  ];
/* IL_07: stloc.1 */
loc1 = st_01;
/* IL_08: ldloc.1 */
st_02 = loc1;
/* IL_09: ldc.i4.0 */
st_03 = 0;
/* IL_0A: ldarg.0 */
st_04 = __braille_args__[0];
/* IL_0B: stelem.ref */
(st_02)[st_03] = st_04;
/* IL_0C: ldloc.1 */
st_05 = loc1;
/* IL_0D: ldc.i4.1 */
st_06 = 1;
/* IL_0E: ldarg.1 */
st_07 = __braille_args__[1];
/* IL_0F: stelem.ref */
(st_05)[st_06] = st_07;
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
asm.x600000e = function Concat() { var __braille_args__;
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
st_01 = [  ];
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
(st_03)[st_04] = st_05;
/* IL_11: ldloc.1 */
st_07 = loc1;
/* IL_12: ldc.i4.1 */
st_08 = 1;
/* IL_13: ldarg.1 */
st_06 = __braille_args__[1];
/* IL_14: callvirt String ToString()*/
st_09 = (st_06.vtable.x6000002)(st_06);
/* IL_19: stelem.ref */
(st_07)[st_08] = st_09;
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
asm.x600000f = function Concat() { var __braille_args__;
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
asm.x6000010 = function Concat() { var __braille_args__;
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
(asm0.x6000025)(result,st_00);
return result; })();
/* IL_0B: throw */
throw st_01; };
asm.x6000011 = function get_Length() { var __braille_args__;
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
asm.x6000012 = function ToString() { var __braille_args__;
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
asm.x6000013 = function op_Inequality() { var __braille_args__;
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
asm.x6000014 = function op_Equality() { var __braille_args__;
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
asm.x6000015 = function Equals() { var __braille_args__;
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
asm.x6000016 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000018 = function get_MemberName() { var __braille_args__;
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
asm.x6000017 = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000006)(st_00);
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
asm.x6000019 = function get_Length() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = 0;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld Int32 <Length>k__BackingField*/
st_01 = (st_00)["SystemArray<Length>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x600001a = function set_Length() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: stfld Int32 <Length>k__BackingField*/
(st_00)["SystemArray<Length>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x600001b = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600001d = function get_ValidOn() { var __braille_args__;
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
asm.x600001e = function set_ValidOn() { var __braille_args__;
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
asm.x600001f = function get_Inherited() { var __braille_args__;
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
asm.x6000020 = function set_Inherited() { var __braille_args__;
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
asm.x600001c = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000006)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_09: ldarg.1 */
st_02 = __braille_args__[1];
/* IL_0A: call Void set_ValidOn(System.AttributeTargets)*/
(asm0.x600001e)(st_01,cloneValue(st_02));
/* IL_0F: nop */
/* IL_10: nop */
/* IL_11: ret */
return ; };
asm.x6000021 = function WriteLine() { var __braille_args__;
 __braille_args__ = arguments;
/* IL_00: nop */
/* IL_01: ret */
return ; };
asm.x6000022 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000023 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000026 = function get_Message() { var __braille_args__;
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
asm.x6000027 = function set_Message() { var __braille_args__;
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
asm.x6000024 = function _ctor() { var __braille_args__;
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
asm.x6000025 = function _ctor() { var __braille_args__;
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
(asm0.x6000027)(st_01,st_02);
/* IL_0F: nop */
/* IL_10: nop */
/* IL_11: ret */
return ; };
asm.x6000028 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000006)(st_00);
/* IL_06: ret */
return ; };
asm.x600002b = function ToString() { var __braille_args__;
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
'boxed': cloneValue(st_01),
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
asm.x600002d = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600002e = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000023)(st_00);
/* IL_06: ret */
return ; };
asm.x600002f = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000006)(st_00);
/* IL_06: ret */
return ; };
asm.x6000030 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600003b = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600003c = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000006)(st_00);
/* IL_06: ret */
return ; };
asm.x600003d = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000006)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: ret */
return ; };
asm.x600003e = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000006)(st_00);
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
$$Object.prototype.vtable = { 
'x6000002': asm0.x6000002 
}; };
$$Object.prototype = { 
 
};;
return $$Object; })();
(asm)["System.Object"] = self;
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
Attribute.prototype.vtable = { 
'x6000002': asm0.x6000002 
}; };
Attribute.prototype = new ((asm0)["System.Object"])();;
return Attribute; })();
(asm)["System.Attribute"] = self;
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
ValueType.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
Enum.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
AttributeTargets.prototype.value__ = 0;
AttributeTargets.prototype.vtable = { 
'x6000002': asm0.x6000002 
}; };
AttributeTargets.prototype = new ((asm0)["System.Enum"])();;
return AttributeTargets; })();
(asm)["System.AttributeTargets"] = self;
self = (function () { var initialized;
 initialized = false;;
function $$String() { 
 if (!initialized){
($$String.init)();
}
this.constructor = $$String; };
$$String.init = function () { 
 initialized = true;
$$String.Interfaces = [  ];
$$String.IsInst = function (t) { return t instanceof $$String; };
$$String.IsValueType = false;
$$String.prototype.jsstr = null;
$$String.prototype.vtable = { 
'x6000002': asm0.x6000012 
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
DefaultMemberAttribute.prototype.System_ReflectionDefaultMemberAttributemember_name = null;
DefaultMemberAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002 
}; };
DefaultMemberAttribute.prototype = new ((asm0)["System.Attribute"])();;
return DefaultMemberAttribute; })();
(asm)["System.Reflection.DefaultMemberAttribute"] = self;
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
(Array.prototype)["SystemArray<Length>k__BackingField"] = 0;
Array.prototype.vtable = { 
'x6000002': asm0.x6000002 
}; };
Array.prototype = new ((asm0)["System.Object"])();;
return Array; })();
(asm)["System.Array"] = self;
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
(AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = new ((asm0)["System.AttributeTargets"])();
(AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = false;
AttributeUsageAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
$$Boolean.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
Byte.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
Char.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
Console.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
Delegate.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
Double.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
(Exception.prototype)["SystemException<Message>k__BackingField"] = null;
Exception.prototype.vtable = { 
'x6000002': asm0.x6000002 
}; };
Exception.prototype = new ((asm0)["System.Object"])();;
return Exception; })();
(asm)["System.Exception"] = self;
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
FlagsAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
IDisposable.prototype.vtable = { 
'x6000029': asm0.x6000029 
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
ICloneable.prototype.vtable = { 
'x600002a': asm0.x600002a 
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
Int16.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
Int32.prototype.vtable = { 
'x6000002': asm0.x600002b 
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
Int64.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
IntPtr.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
Math.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
MulticastDelegate.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
ParamArrayAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
RuntimeFieldHandle.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
RuntimeTypeHandle.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
SByte.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
Single.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
Type.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
UInt16.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
UInt32.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
UInt64.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
UIntPtr.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
Void.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
Debugger.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
OutAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
IndexerNameAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
TargetFrameworkAttribute.prototype.vtable = { 
'x6000002': asm0.x6000002 
}; };
TargetFrameworkAttribute.prototype = new ((asm0)["System.Attribute"])();;
return TargetFrameworkAttribute; })();
(asm)["System.Runtime.Versioning.TargetFrameworkAttribute"] = self; })(asm0 || (asm0 = {}));
var asm1; (function (asm) { var self;
 
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

function new_string(str) {
    var r = new asm0['System.String']();
    r.jsstr = str;
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
asm.x600000c = function GetEnumerator() { var __braille_args__;
var loc0;
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
 __braille_args__ = arguments;
((asm0)["System.Int32"].init)();
(asm1.Iter.init)();
loc0 = null;
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
 result = new (asm1.Iter)();
(asm1.x600000e)(result,st_11);
return result; })();
/* IL_21: ret */
return st_12; };
asm.x600000d = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000f = function MoveNext() { var __braille_args__;
var loc0;
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
 __braille_args__ = arguments;
loc0 = 0;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: dup */
st_06 = (st_01 = _b_dup_1 = st_00);
/* IL_02: ldfld Int32 i*/
st_02 = st_01.Iteri;
/* IL_07: ldc.i4.1 */
st_03 = 1;
/* IL_08: add */
st_04 = (st_02 + st_03);
/* IL_09: dup */
st_07 = (st_05 = _b_dup_9 = st_04);
/* IL_0A: stloc.0 */
loc0 = st_05;
/* IL_0B: stfld Int32 i*/
st_06.Iteri = st_07;
/* IL_10: ldloc.0 */
st_0B = loc0;
/* IL_11: ldarg.0 */
st_08 = __braille_args__[0];
/* IL_12: ldfld Int32[] nums*/
st_09 = st_08.Iternums;
/* IL_17: ldlen */
st_0A = st_09.length;
/* IL_18: conv.i4 */
st_0C = st_0A;
/* IL_1A: clt */
st_0D = (st_0B < st_0C) ? (1) : (0);
/* IL_1B: ret */
return st_0D; };
asm.x6000010 = function get_Current() { var __braille_args__;
var st_00;
var st_02;
var st_01;
var st_03;
var st_04;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld Int32[] nums*/
st_02 = st_00.Iternums;
/* IL_06: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_07: ldfld Int32 i*/
st_03 = st_01.Iteri;
/* IL_0C: ldelem.i4 */
st_04 = (st_02)[st_03];
/* IL_0D: ret */
return st_04; };
asm.x600000e = function _ctor() { var __braille_args__;
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
st_00.Iteri = st_01;
/* IL_07: ldarg.0 */
st_02 = __braille_args__[0];
/* IL_08: call Void .ctor()*/
/* IL_0D: ldarg.0 */
st_03 = __braille_args__[0];
/* IL_0E: ldarg.1 */
st_04 = __braille_args__[1];
/* IL_0F: stfld Int32[] nums*/
st_03.Iternums = st_04;
/* IL_14: ret */
return ; };
asm.x6000011 = function Main() { var __braille_args__;
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
 __braille_args__ = arguments;
(asm1.A.init)();
((asm0)["System.Int32"].init)();
loc0 = null;
loc1 = 0;
loc2 = null;
loc3 = null;
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm1.A)();
(asm1.x600000d)(result);
return result; })();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: ldloc.0 */
st_01 = loc0;
/* IL_07: callvirt Iter GetEnumerator()*/
st_02 = (asm1.x600000c)(st_01);
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
st_04 = (asm1.x6000010)(st_03);
/* IL_15: stloc.1 */
loc1 = st_04;
/* IL_16: ldloc.1 */
st_05 = loc1;
/* IL_17: box System.Int32*/
st_06 = { 
'boxed': cloneValue(st_05),
'vtable': (asm0)["System.Int32"].prototype.vtable 
};
/* IL_1C: call Void Log(System.Object)*/
braille_test_log(st_06);
case 0x21:
/* IL_21: ldloc.2 */
st_07 = loc2;
/* IL_22: callvirt Boolean MoveNext()*/
st_08 = (asm1.x600000f)(st_07);
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
asm.x6000012 = function _ctor() { var __braille_args__;
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
TestLog.prototype.vtable = { 
'x6000002': asm0.x6000002 
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
TestHelper.prototype.vtable = { 
'x6000002': asm0.x6000002 
}; };
TestHelper.prototype = new ((asm0)["System.Object"])();;
return TestHelper; })();
asm.TestHelper = self;
self = (function () { var initialized;
 initialized = false;;
function A() { 
 if (!initialized){
(A.init)();
}
this.constructor = A; };
A.init = function () { 
 initialized = true;
A.Interfaces = [  ];
A.IsInst = function (t) { return t instanceof A; };
A.IsValueType = false;
A.prototype.vtable = { 
'x6000002': asm0.x6000002 
}; };
A.prototype = new ((asm0)["System.Object"])();;
return A; })();
asm.A = self;
self = (function () { var initialized;
 initialized = false;;
function Iter() { 
 if (!initialized){
(Iter.init)();
}
this.constructor = Iter; };
Iter.init = function () { 
 initialized = true;
Iter.Interfaces = [  ];
Iter.IsInst = function (t) { return t instanceof Iter; };
Iter.IsValueType = false;
Iter.prototype.Iteri = 0;
Iter.prototype.Iternums = null;
Iter.prototype.vtable = { 
'x6000002': asm0.x6000002 
}; };
Iter.prototype = new ((asm0)["System.Object"])();;
return Iter; })();
asm.Iter = self;
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
Program.prototype.vtable = { 
'x6000002': asm0.x6000002 
}; };
Program.prototype = new ((asm0)["System.Object"])();;
return Program; })();
asm.Program = self;
asm.entryPoint = asm.x6000011; })(asm1 || (asm1 = {}));
