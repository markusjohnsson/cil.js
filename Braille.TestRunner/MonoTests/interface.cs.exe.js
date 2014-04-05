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
asm.x6000001 = function ToString() { var __braille_args__;
var loc0;
var st_00;
var st_01;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: nop */
/* IL_01: ldstr System.Object*/
st_00 = "System.Object";
/* IL_06: stloc.0 */
loc0 = st_00;
/* IL_09: ldloc.0 */
st_01 = loc0;
/* IL_0A: ret */
return st_01; };
asm.x6000002 = function _ctor() { var __braille_args__;
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
asm.x6000003 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000005 = function get_MemberName() { var __braille_args__;
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
st_01 = st_00.member_name;
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000004 = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000003)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_09: ldarg.1 */
st_02 = __braille_args__[1];
/* IL_0A: stfld String member_name*/
st_01.member_name = st_02;
/* IL_0F: nop */
/* IL_10: ret */
return ; };
asm.x6000006 = function get_Length() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = 0;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld Int32 <Length>k__BackingField*/
st_01 = (st_00)["<Length>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x6000007 = function set_Length() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: stfld Int32 <Length>k__BackingField*/
(st_00)["<Length>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x6000008 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000009 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000a = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000009)(st_00);
/* IL_06: ret */
return ; };
asm.x600000c = function get_ValidOn() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = new ((asm0)["System.AttributeTargets"])();
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld AttributeTargets <ValidOn>k__BackingField*/
st_01 = (st_00)["<ValidOn>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x600000d = function set_ValidOn() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: stfld AttributeTargets <ValidOn>k__BackingField*/
(st_00)["<ValidOn>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x600000e = function get_Inherited() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = false;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld Boolean <Inherited>k__BackingField*/
st_01 = (st_00)["<Inherited>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x600000f = function set_Inherited() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: stfld Boolean <Inherited>k__BackingField*/
(st_00)["<Inherited>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x600000b = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000003)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_09: ldarg.1 */
st_02 = __braille_args__[1];
/* IL_0A: call Void set_ValidOn(System.AttributeTargets)*/
(asm0.x600000d)(st_01,cloneValue(st_02));
/* IL_0F: nop */
/* IL_10: nop */
/* IL_11: ret */
return ; };
asm.x6000010 = function WriteLine() { var __braille_args__;
 __braille_args__ = arguments;
/* IL_00: nop */
/* IL_01: ret */
return ; };
asm.x6000011 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000012 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000014 = function get_Message() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = null;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld String <Message>k__BackingField*/
st_01 = (st_00)["<Message>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x6000015 = function set_Message() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: stfld String <Message>k__BackingField*/
(st_00)["<Message>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x6000013 = function _ctor() { var __braille_args__;
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
(asm0.x6000015)(st_01,st_02);
/* IL_0F: nop */
/* IL_10: nop */
/* IL_11: ret */
return ; };
asm.x6000016 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000003)(st_00);
/* IL_06: ret */
return ; };
asm.x6000019 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600001a = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000012)(st_00);
/* IL_06: ret */
return ; };
asm.x600001b = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000003)(st_00);
/* IL_06: ret */
return ; };
asm.x600001c = function get_Chars() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: nop */
/* IL_01: ldstr Direct call not supported.*/
st_00 = "Direct call not supported.";
/* IL_06: newobj Void .ctor(System.String)*/
st_01 = (function () { var result;
 result = new ((asm0)["System.Exception"])();
(asm0.x6000013)(result,st_00);
return result; })();
/* IL_0B: throw */
throw st_01; };
asm.x600001d = function Concat() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: nop */
/* IL_01: ldstr Not implemented.*/
st_00 = "Not implemented.";
/* IL_06: newobj Void .ctor(System.String)*/
st_01 = (function () { var result;
 result = new ((asm0)["System.Exception"])();
(asm0.x6000013)(result,st_00);
return result; })();
/* IL_0B: throw */
throw st_01; };
asm.x600001e = function Concat() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: nop */
/* IL_01: ldstr Not implemented.*/
st_00 = "Not implemented.";
/* IL_06: newobj Void .ctor(System.String)*/
st_01 = (function () { var result;
 result = new ((asm0)["System.Exception"])();
(asm0.x6000013)(result,st_00);
return result; })();
/* IL_0B: throw */
throw st_01; };
asm.x600001f = function Concat() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: nop */
/* IL_01: ldstr Not implemented.*/
st_00 = "Not implemented.";
/* IL_06: newobj Void .ctor(System.String)*/
st_01 = (function () { var result;
 result = new ((asm0)["System.Exception"])();
(asm0.x6000013)(result,st_00);
return result; })();
/* IL_0B: throw */
throw st_01; };
asm.x6000020 = function Concat() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: nop */
/* IL_01: ldstr Not implemented.*/
st_00 = "Not implemented.";
/* IL_06: newobj Void .ctor(System.String)*/
st_01 = (function () { var result;
 result = new ((asm0)["System.Exception"])();
(asm0.x6000013)(result,st_00);
return result; })();
/* IL_0B: throw */
throw st_01; };
asm.x6000021 = function get_Length() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
loc0 = 0;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld Int32 <Length>k__BackingField*/
st_01 = (st_00)["<Length>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x6000022 = function set_Length() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: stfld Int32 <Length>k__BackingField*/
(st_00)["<Length>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x6000023 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000024 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000025 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000003)(st_00);
/* IL_06: ret */
return ; };
asm.x6000026 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000003)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: ret */
return ; };
asm.x6000027 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000003)(st_00);
/* IL_06: ret */
return ; };
self = (function () { var initialized;
 initialized = false;;
function Object() { 
 if (!initialized){
initialized = true;Object.IsValueType = false;Object.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Object.prototype = { 
 
};;
return Object; })();
(asm)["System.Object"] = self;
self = (function () { var initialized;
 initialized = false;;
function Attribute() { 
 if (!initialized){
initialized = true;Attribute.IsValueType = false;Attribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Attribute.prototype = { 
 
};;
return Attribute; })();
(asm)["System.Attribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function DefaultMemberAttribute() { 
 if (!initialized){
initialized = true;DefaultMemberAttribute.IsValueType = false;DefaultMemberAttribute.prototype.member_name = null;DefaultMemberAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
DefaultMemberAttribute.prototype = new ((asm0)["System.Attribute"])();;
return DefaultMemberAttribute; })();
(asm)["System.Reflection.DefaultMemberAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function Array() { 
 if (!initialized){
initialized = true;Array.IsValueType = false;(Array.prototype)["<Length>k__BackingField"] = 0;Array.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Array.prototype = { 
 
};;
return Array; })();
(asm)["System.Array"] = self;
self = (function () { var initialized;
 initialized = false;;
function ValueType() { 
 if (!initialized){
initialized = true;ValueType.IsValueType = false;ValueType.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
ValueType.prototype = { 
 
};;
return ValueType; })();
(asm)["System.ValueType"] = self;
self = (function () { var initialized;
 initialized = false;;
function Enum() { 
 if (!initialized){
initialized = true;Enum.IsValueType = false;Enum.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Enum.prototype = { 
 
};;
return Enum; })();
(asm)["System.Enum"] = self;
self = (function () { var initialized;
 initialized = false;;
function AttributeTargets() { 
 if (!initialized){
initialized = true;AttributeTargets.Assembly = new ((asm0)["System.AttributeTargets"])();AttributeTargets.Module = new ((asm0)["System.AttributeTargets"])();AttributeTargets.Class = new ((asm0)["System.AttributeTargets"])();AttributeTargets.Struct = new ((asm0)["System.AttributeTargets"])();AttributeTargets.Enum = new ((asm0)["System.AttributeTargets"])();AttributeTargets.Constructor = new ((asm0)["System.AttributeTargets"])();AttributeTargets.Method = new ((asm0)["System.AttributeTargets"])();AttributeTargets.Property = new ((asm0)["System.AttributeTargets"])();AttributeTargets.Field = new ((asm0)["System.AttributeTargets"])();AttributeTargets.Event = new ((asm0)["System.AttributeTargets"])();AttributeTargets.Interface = new ((asm0)["System.AttributeTargets"])();AttributeTargets.Parameter = new ((asm0)["System.AttributeTargets"])();AttributeTargets.Delegate = new ((asm0)["System.AttributeTargets"])();AttributeTargets.ReturnValue = new ((asm0)["System.AttributeTargets"])();AttributeTargets.GenericParameter = new ((asm0)["System.AttributeTargets"])();AttributeTargets.All = new ((asm0)["System.AttributeTargets"])();AttributeTargets.IsValueType = true;AttributeTargets.prototype.value__ = 0;AttributeTargets.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
AttributeTargets.prototype = new ((asm0)["System.Enum"])();;
return AttributeTargets; })();
(asm)["System.AttributeTargets"] = self;
self = (function () { var initialized;
 initialized = false;;
function AttributeUsageAttribute() { 
 if (!initialized){
initialized = true;AttributeUsageAttribute.IsValueType = false;(AttributeUsageAttribute.prototype)["<ValidOn>k__BackingField"] = new ((asm0)["System.AttributeTargets"])();(AttributeUsageAttribute.prototype)["<Inherited>k__BackingField"] = false;AttributeUsageAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
AttributeUsageAttribute.prototype = new ((asm0)["System.Attribute"])();;
return AttributeUsageAttribute; })();
(asm)["System.AttributeUsageAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function Boolean() { 
 if (!initialized){
initialized = true;Boolean.IsValueType = true;Boolean.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Boolean.prototype = { 
 
};;
return Boolean; })();
(asm)["System.Boolean"] = self;
self = (function () { var initialized;
 initialized = false;;
function Byte() { 
 if (!initialized){
initialized = true;Byte.IsValueType = true;Byte.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Byte.prototype = { 
 
};;
return Byte; })();
(asm)["System.Byte"] = self;
self = (function () { var initialized;
 initialized = false;;
function Char() { 
 if (!initialized){
initialized = true;Char.MinValue = 0;Char.MaxValue = 0;Char.IsValueType = true;Char.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Char.prototype = { 
 
};;
return Char; })();
(asm)["System.Char"] = self;
self = (function () { var initialized;
 initialized = false;;
function Console() { 
 if (!initialized){
initialized = true;Console.IsValueType = false;Console.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Console.prototype = { 
 
};;
return Console; })();
(asm)["System.Console"] = self;
self = (function () { var initialized;
 initialized = false;;
function Delegate() { 
 if (!initialized){
initialized = true;Delegate.IsValueType = false;Delegate.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Delegate.prototype = { 
 
};;
return Delegate; })();
(asm)["System.Delegate"] = self;
self = (function () { var initialized;
 initialized = false;;
function Double() { 
 if (!initialized){
initialized = true;Double.IsValueType = true;Double.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Double.prototype = { 
 
};;
return Double; })();
(asm)["System.Double"] = self;
self = (function () { var initialized;
 initialized = false;;
function Exception() { 
 if (!initialized){
initialized = true;Exception.IsValueType = false;(Exception.prototype)["<Message>k__BackingField"] = null;Exception.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Exception.prototype = { 
 
};;
return Exception; })();
(asm)["System.Exception"] = self;
self = (function () { var initialized;
 initialized = false;;
function FlagsAttribute() { 
 if (!initialized){
initialized = true;FlagsAttribute.IsValueType = false;FlagsAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
FlagsAttribute.prototype = new ((asm0)["System.Attribute"])();;
return FlagsAttribute; })();
(asm)["System.FlagsAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function IDisposable() { 
 if (!initialized){
initialized = true;IDisposable.IsValueType = false;IDisposable.prototype.vtable = { 
'x6000017': asm.x6000017 
};
} };
IDisposable.prototype = { 
 
};;
return IDisposable; })();
(asm)["System.IDisposable"] = self;
self = (function () { var initialized;
 initialized = false;;
function ICloneable() { 
 if (!initialized){
initialized = true;ICloneable.IsValueType = false;ICloneable.prototype.vtable = { 
'x6000018': asm.x6000018 
};
} };
ICloneable.prototype = { 
 
};;
return ICloneable; })();
(asm)["System.ICloneable"] = self;
self = (function () { var initialized;
 initialized = false;;
function Int16() { 
 if (!initialized){
initialized = true;Int16.IsValueType = true;Int16.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Int16.prototype = { 
 
};;
return Int16; })();
(asm)["System.Int16"] = self;
self = (function () { var initialized;
 initialized = false;;
function Int32() { 
 if (!initialized){
initialized = true;Int32.IsValueType = true;Int32.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Int32.prototype = { 
 
};;
return Int32; })();
(asm)["System.Int32"] = self;
self = (function () { var initialized;
 initialized = false;;
function Int64() { 
 if (!initialized){
initialized = true;Int64.IsValueType = true;Int64.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Int64.prototype = { 
 
};;
return Int64; })();
(asm)["System.Int64"] = self;
self = (function () { var initialized;
 initialized = false;;
function IntPtr() { 
 if (!initialized){
initialized = true;IntPtr.IsValueType = true;IntPtr.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
IntPtr.prototype = { 
 
};;
return IntPtr; })();
(asm)["System.IntPtr"] = self;
self = (function () { var initialized;
 initialized = false;;
function Math() { 
 if (!initialized){
initialized = true;Math.PI = 0;Math.IsValueType = false;Math.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Math.prototype = { 
 
};;
return Math; })();
(asm)["System.Math"] = self;
self = (function () { var initialized;
 initialized = false;;
function MulticastDelegate() { 
 if (!initialized){
initialized = true;MulticastDelegate.IsValueType = false;MulticastDelegate.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
MulticastDelegate.prototype = new ((asm0)["System.Delegate"])();;
return MulticastDelegate; })();
(asm)["System.MulticastDelegate"] = self;
self = (function () { var initialized;
 initialized = false;;
function ParamArrayAttribute() { 
 if (!initialized){
initialized = true;ParamArrayAttribute.IsValueType = false;ParamArrayAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
ParamArrayAttribute.prototype = new ((asm0)["System.Attribute"])();;
return ParamArrayAttribute; })();
(asm)["System.ParamArrayAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function RuntimeFieldHandle() { 
 if (!initialized){
initialized = true;RuntimeFieldHandle.IsValueType = true;RuntimeFieldHandle.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
RuntimeFieldHandle.prototype = { 
 
};;
return RuntimeFieldHandle; })();
(asm)["System.RuntimeFieldHandle"] = self;
self = (function () { var initialized;
 initialized = false;;
function RuntimeTypeHandle() { 
 if (!initialized){
initialized = true;RuntimeTypeHandle.IsValueType = true;RuntimeTypeHandle.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
RuntimeTypeHandle.prototype = { 
 
};;
return RuntimeTypeHandle; })();
(asm)["System.RuntimeTypeHandle"] = self;
self = (function () { var initialized;
 initialized = false;;
function SByte() { 
 if (!initialized){
initialized = true;SByte.IsValueType = true;SByte.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
SByte.prototype = { 
 
};;
return SByte; })();
(asm)["System.SByte"] = self;
self = (function () { var initialized;
 initialized = false;;
function Single() { 
 if (!initialized){
initialized = true;Single.IsValueType = true;Single.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Single.prototype = { 
 
};;
return Single; })();
(asm)["System.Single"] = self;
self = (function () { var initialized;
 initialized = false;;
function String() { 
 if (!initialized){
initialized = true;String.IsValueType = false;(String.prototype)["<Length>k__BackingField"] = 0;String.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
String.prototype = { 
 
};;
return String; })();
(asm)["System.String"] = self;
self = (function () { var initialized;
 initialized = false;;
function Type() { 
 if (!initialized){
initialized = true;Type.IsValueType = false;Type.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Type.prototype = { 
 
};;
return Type; })();
(asm)["System.Type"] = self;
self = (function () { var initialized;
 initialized = false;;
function UInt16() { 
 if (!initialized){
initialized = true;UInt16.IsValueType = true;UInt16.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
UInt16.prototype = { 
 
};;
return UInt16; })();
(asm)["System.UInt16"] = self;
self = (function () { var initialized;
 initialized = false;;
function UInt32() { 
 if (!initialized){
initialized = true;UInt32.IsValueType = true;UInt32.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
UInt32.prototype = { 
 
};;
return UInt32; })();
(asm)["System.UInt32"] = self;
self = (function () { var initialized;
 initialized = false;;
function UInt64() { 
 if (!initialized){
initialized = true;UInt64.IsValueType = true;UInt64.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
UInt64.prototype = { 
 
};;
return UInt64; })();
(asm)["System.UInt64"] = self;
self = (function () { var initialized;
 initialized = false;;
function UIntPtr() { 
 if (!initialized){
initialized = true;UIntPtr.IsValueType = true;UIntPtr.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
UIntPtr.prototype = { 
 
};;
return UIntPtr; })();
(asm)["System.UIntPtr"] = self;
self = (function () { var initialized;
 initialized = false;;
function Void() { 
 if (!initialized){
initialized = true;Void.IsValueType = true;Void.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Void.prototype = { 
 
};;
return Void; })();
(asm)["System.Void"] = self;
self = (function () { var initialized;
 initialized = false;;
function IEnumerable() { 
 if (!initialized){
initialized = true;IEnumerable.IsValueType = false;IEnumerable.prototype.vtable = { 
 
};
} };
IEnumerable.prototype = { 
 
};;
return IEnumerable; })();
(asm)["System.Collections.IEnumerable"] = self;
self = (function () { var initialized;
 initialized = false;;
function IEnumerator() { 
 if (!initialized){
initialized = true;IEnumerator.IsValueType = false;IEnumerator.prototype.vtable = { 
 
};
} };
IEnumerator.prototype = { 
 
};;
return IEnumerator; })();
(asm)["System.Collections.IEnumerator"] = self;
self = (function () { var initialized;
 initialized = false;;
function OutAttribute() { 
 if (!initialized){
initialized = true;OutAttribute.IsValueType = false;OutAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
OutAttribute.prototype = new ((asm0)["System.Attribute"])();;
return OutAttribute; })();
(asm)["System.Runtime.InteropServices.OutAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function IndexerNameAttribute() { 
 if (!initialized){
initialized = true;IndexerNameAttribute.IsValueType = false;IndexerNameAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
IndexerNameAttribute.prototype = new ((asm0)["System.Attribute"])();;
return IndexerNameAttribute; })();
(asm)["System.Runtime.CompilerServices.IndexerNameAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function TargetFrameworkAttribute() { 
 if (!initialized){
initialized = true;TargetFrameworkAttribute.IsValueType = false;TargetFrameworkAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
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
asm.x600000a = function Area() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.r8 0*/
st_00 = 0;
/* IL_09: ret */
return st_00; };
asm.x600000b = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
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
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld Int32 w*/
st_01 = st_00.w;
/* IL_06: conv.r8 */
st_04 = st_01;
/* IL_07: ldarg.0 */
st_02 = __braille_args__[0];
/* IL_08: ldfld Int32 h*/
st_03 = st_02.h;
/* IL_0D: conv.r8 */
st_05 = st_03;
/* IL_0E: mul */
st_06 = (st_04 * st_05);
/* IL_0F: ret */
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
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm1.x600000b)(st_00);
/* IL_06: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_07: ldarg.1 */
st_02 = __braille_args__[1];
/* IL_08: stfld Int32 x*/
st_01.x = st_02;
/* IL_0D: ldarg.0 */
st_03 = __braille_args__[0];
/* IL_0E: ldarg.2 */
st_04 = __braille_args__[2];
/* IL_0F: stfld Int32 y*/
st_03.y = st_04;
/* IL_14: ldarg.0 */
st_05 = __braille_args__[0];
/* IL_15: ldarg.3 */
st_06 = __braille_args__[3];
/* IL_16: stfld Int32 w*/
st_05.w = st_06;
/* IL_1B: ldarg.0 */
st_07 = __braille_args__[0];
/* IL_1C: ldarg.s 4*/
st_08 = __braille_args__[4];
/* IL_1E: stfld Int32 h*/
st_07.h = st_08;
/* IL_23: ret */
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
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld Int32 r*/
st_02 = st_00.r;
/* IL_06: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_07: ldfld Int32 r*/
st_03 = st_01.r;
/* IL_0C: mul */
st_04 = (st_02 * st_03);
/* IL_0D: conv.r8 */
st_05 = st_04;
/* IL_0E: ldc.r8 3,14159265359*/
st_06 = 3.14159265359;
/* IL_17: mul */
st_07 = (st_05 * st_06);
/* IL_18: ret */
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
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm1.x600000b)(st_00);
/* IL_06: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_07: ldarg.1 */
st_02 = __braille_args__[1];
/* IL_08: stfld Int32 x*/
st_01.x = st_02;
/* IL_0D: ldarg.0 */
st_03 = __braille_args__[0];
/* IL_0E: ldarg.2 */
st_04 = __braille_args__[2];
/* IL_0F: stfld Int32 y*/
st_03.y = st_04;
/* IL_14: ldarg.0 */
st_05 = __braille_args__[0];
/* IL_15: ldarg.3 */
st_06 = __braille_args__[3];
/* IL_16: stfld Int32 r*/
st_05.r = st_06;
/* IL_1B: ret */
return ; };
asm.x6000010 = function Main() { var __braille_args__;
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
 __braille_args__ = arguments;
loc0 = null;
loc1 = null;
loc2 = 0;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: ldc.i4.0 */
st_00 = 0;
/* IL_01: ldc.i4.0 */
st_01 = 0;
/* IL_02: ldc.i4.s 10*/
st_02 = 10;
/* IL_04: ldc.i4.s 20*/
st_03 = 20;
/* IL_06: newobj Void .ctor(System.Int32, System.Int32, System.Int32, System.Int32)*/
st_04 = (function () { var result;
 result = new ((asm1)["Obj.Rect"])();
(asm1.x600000c)(result,cloneValue(st_00),cloneValue(st_01),cloneValue(st_02),cloneValue(st_03));
return result; })();
/* IL_0B: stloc.0 */
loc0 = st_04;
/* IL_0C: ldc.i4.0 */
st_05 = 0;
/* IL_0D: ldc.i4.0 */
st_06 = 0;
/* IL_0E: ldc.i4.s 20*/
st_07 = 20;
/* IL_10: newobj Void .ctor(System.Int32, System.Int32, System.Int32)*/
st_08 = (function () { var result;
 result = new ((asm1)["Obj.Circle"])();
(asm1.x600000e)(result,cloneValue(st_05),cloneValue(st_06),cloneValue(st_07));
return result; })();
/* IL_15: stloc.1 */
loc1 = st_08;
/* IL_16: ldloc.0 */
st_09 = loc0;
/* IL_17: callvirt Double Area()*/
st_0B = (st_09.vtable.x600000a)(st_09);
/* IL_1C: ldloc.1 */
st_0A = loc1;
/* IL_1D: callvirt Double Area()*/
st_0C = (st_0A.vtable.x600000a)(st_0A);
/* IL_22: add */
st_0D = (st_0B + st_0C);
/* IL_23: stloc.2 */
loc2 = st_0D;
/* IL_24: ldloc.2 */
st_0E = loc2;
/* IL_25: ldc.r8 0*/
st_0F = 0;
/* IL_2E: beq.s IL_32*/
if (st_0E === st_0F){
__braille_pos_0__ = 0x32;continue;
}
/* IL_30: ldc.i4.1 */
st_10 = 1;
/* IL_31: ret */
return st_10;
case 0x32:
/* IL_32: ldloc.0 */
st_11 = loc0;
/* IL_33: castclass Obj.Rect*/
st_12 = st_11;
/* IL_38: callvirt Double Area()*/
st_15 = (asm1.x600000d)(st_12);
/* IL_3D: ldloc.1 */
st_13 = loc1;
/* IL_3E: castclass Obj.Circle*/
st_14 = st_13;
/* IL_43: callvirt Double Area()*/
st_16 = (asm1.x600000f)(st_14);
/* IL_48: add */
st_17 = (st_15 + st_16);
/* IL_49: stloc.2 */
loc2 = st_17;
/* IL_4A: ldloc.2 */
st_18 = loc2;
/* IL_4B: ldc.r8 1456,637061436*/
st_19 = 1456.637061436;
/* IL_54: sub */
st_1A = (st_18 - st_19);
/* IL_55: ldc.r8 1E-06*/
st_1B = 1E-06;
/* IL_5E: ble.un.s IL_62*/
if (st_1A <= st_1B){
__braille_pos_0__ = 0x62;continue;
}
/* IL_60: ldc.i4.2 */
st_1C = 2;
/* IL_61: ret */
return st_1C;
case 0x62:
/* IL_62: ldloc.0 */
st_1D = loc0;
/* IL_63: callvirt Double Area()*/
st_1F = ((st_1D)["Obj.Measurable"].x6000009)(st_1D);
/* IL_68: ldloc.1 */
st_1E = loc1;
/* IL_69: callvirt Double Area()*/
st_20 = ((st_1E)["Obj.Measurable"].x6000009)(st_1E);
/* IL_6E: add */
st_21 = (st_1F + st_20);
/* IL_6F: stloc.2 */
loc2 = st_21;
/* IL_70: ldloc.2 */
st_22 = loc2;
/* IL_71: ldc.r8 0*/
st_23 = 0;
/* IL_7A: beq.s IL_7E*/
if (st_22 === st_23){
__braille_pos_0__ = 0x7E;continue;
}
/* IL_7C: ldc.i4.3 */
st_24 = 3;
/* IL_7D: ret */
return st_24;
case 0x7E:
/* IL_7E: ldc.i4.0 */
st_25 = 0;
/* IL_7F: ret */
return st_25;
}
} };
asm.x6000011 = function _ctor() { var __braille_args__;
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
initialized = true;TestLog.IsValueType = false;TestLog.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
TestLog.prototype = { 
 
};;
return TestLog; })();
asm.TestLog = self;
self = (function () { var initialized;
 initialized = false;;
function TestHelper() { 
 if (!initialized){
initialized = true;TestHelper.IsValueType = false;TestHelper.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
TestHelper.prototype = { 
 
};;
return TestHelper; })();
asm.TestHelper = self;
self = (function () { var initialized;
 initialized = false;;
function Measurable() { 
 if (!initialized){
initialized = true;Measurable.IsValueType = false;Measurable.prototype.vtable = { 
'x6000009': asm.x6000009 
};
} };
Measurable.prototype = { 
 
};;
return Measurable; })();
(asm)["Obj.Measurable"] = self;
self = (function () { var initialized;
 initialized = false;;
function Obj() { 
 if (!initialized){
initialized = true;Obj.IsValueType = false;Obj.prototype.vtable = { 
'x600000a': asm.x600000a,
'x6000001': asm.x6000001 
};(Obj.prototype)["Obj.Measurable"] = { 
'x6000009': asm.x600000a 
};
} };
Obj.prototype = { 
 
};;
return Obj; })();
(asm)["Obj.Obj"] = self;
self = (function () { var initialized;
 initialized = false;;
function Rect() { 
 if (!initialized){
initialized = true;Rect.IsValueType = false;Rect.prototype.x = 0;Rect.prototype.y = 0;Rect.prototype.w = 0;Rect.prototype.h = 0;Rect.prototype.vtable = { 
'x600000a': asm.x600000a,
'x6000001': asm.x6000001 
};(Rect.prototype)["Obj.Measurable"] = { 
'x6000009': asm.x600000a 
};
} };
Rect.prototype = new ((asm1)["Obj.Obj"])();;
return Rect; })();
(asm)["Obj.Rect"] = self;
self = (function () { var initialized;
 initialized = false;;
function Circle() { 
 if (!initialized){
initialized = true;Circle.IsValueType = false;Circle.prototype.x = 0;Circle.prototype.y = 0;Circle.prototype.r = 0;Circle.prototype.vtable = { 
'x600000a': asm.x600000a,
'x6000001': asm.x6000001 
};(Circle.prototype)["Obj.Measurable"] = { 
'x6000009': asm.x600000a 
};
} };
Circle.prototype = new ((asm1)["Obj.Obj"])();;
return Circle; })();
(asm)["Obj.Circle"] = self;
self = (function () { var initialized;
 initialized = false;;
function Test() { 
 if (!initialized){
initialized = true;Test.IsValueType = false;Test.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Test.prototype = { 
 
};;
return Test; })();
(asm)["Obj.Test"] = self;
asm.entryPoint = asm.x6000010; })(asm1 || (asm1 = {}));
