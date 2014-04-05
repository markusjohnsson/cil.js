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
asm.x6000009 = function Main() { var __braille_args__;
 __braille_args__ = arguments;
/* IL_00: ret */
return ; };
asm.x600000a = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000b = function Append() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.1 */
st_00 = __braille_args__[1];
/* IL_01: call Void Log(System.Object)*/
braille_test_log(st_00);
/* IL_06: ret */
return ; };
asm.x600000c = function Append() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.1 */
st_00 = __braille_args__[1];
/* IL_01: box System.Char*/
st_01 = { 
'boxed': cloneValue(st_00),
'toString': function () { 
 return this.boxed; } 
};
/* IL_06: call Void Log(System.Object)*/
braille_test_log(st_01);
/* IL_0B: ret */
return ; };
asm.x600000d = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000e = function Convert() { var __braille_args__;
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
var st_1A;
var st_17;
var st_18;
var st_19;
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
var st_28;
var st_26;
var st_27;
var st_29;
var st_2A;
var st_2B;
var st_2C;
var st_2E;
var st_2D;
var st_2F;
var st_30;
var st_31;
var st_32;
var st_33;
var __braille_pos_0__;
var __braille_switch_value__;
var __braille_jmp__;
 __braille_args__ = arguments;
loc0 = null;
loc1 = 0;
loc2 = 0;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm1.S)();
(asm1.x600000d)(result);
return result; })();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: ldloc.0 */
st_01 = loc0;
/* IL_07: ldc.i4.s 34*/
st_02 = 34;
/* IL_09: callvirt Void Append(System.Char)*/
(asm1.x600000c)(st_01,cloneValue(st_02));
/* IL_0E: ldc.i4.0 */
st_03 = 0;
/* IL_0F: stloc.1 */
loc1 = st_03;
/* IL_10: br IL_DB*/
__braille_pos_0__ = 0xDB;
continue;
case 0x15:
/* IL_15: ldarg.0 */
st_04 = __braille_args__[0];
/* IL_16: ldloc.1 */
st_05 = loc1;
/* IL_17: callvirt Char get_Chars(System.Int32)*/
st_06 = (asm0.x600001c)(st_04,cloneValue(st_05));
/* IL_1C: stloc.2 */
loc2 = st_06;
/* IL_1D: ldloc.2 */
st_07 = loc2;
/* IL_1E: ldc.i4.s 13*/
st_08 = 13;
/* IL_20: bgt.s IL_48*/
if (st_07 > st_08){
__braille_pos_0__ = 0x48;continue;
}
/* IL_22: ldloc.2 */
st_09 = loc2;
/* IL_23: ldc.i4.0 */
st_0A = 0;
/* IL_24: beq.s IL_89*/
if (st_09 === st_0A){
__braille_pos_0__ = 0x89;continue;
}
/* IL_26: ldloc.2 */
st_0B = loc2;
/* IL_27: ldc.i4.s 9*/
st_0C = 9;
/* IL_29: sub */
st_0D = (st_0B - st_0C);
/* IL_2A: switch System.Int32[]*/
__braille_switch_value__ = st_0D;
if (__braille_switch_value__ >= 0x5){
__braille_pos_0__ = 0x43;continue;
}
__braille_jmp__ = [ 0x53,0x60,0x87,0x87,0x6D ];
__braille_pos_0__ = (0x43 + (__braille_jmp__)[__braille_switch_value__]);
continue;
case 0x43:
/* IL_43: br IL_CA*/
__braille_pos_0__ = 0xCA;
continue;
case 0x48:
/* IL_48: ldloc.2 */
st_0E = loc2;
/* IL_49: ldc.i4.s 34*/
st_0F = 34;
/* IL_4B: beq.s IL_BD*/
if (st_0E === st_0F){
__braille_pos_0__ = 0xBD;continue;
}
/* IL_4D: ldloc.2 */
st_10 = loc2;
/* IL_4E: ldc.i4.s 92*/
st_11 = 92;
/* IL_50: beq.s IL_68*/
if (st_10 === st_11){
__braille_pos_0__ = 0x68;continue;
}
/* IL_52: ldloc.2 */
st_12 = loc2;
/* IL_53: ldc.i4 8232*/
st_13 = 8232;
/* IL_58: sub */
st_14 = (st_12 - st_13);
/* IL_59: switch System.Int32[]*/
__braille_switch_value__ = st_14;
if (__braille_switch_value__ >= 0x2){
__braille_pos_0__ = 0x66;continue;
}
__braille_jmp__ = [ 0xF,0xF ];
__braille_pos_0__ = (0x66 + (__braille_jmp__)[__braille_switch_value__]);
continue;
case 0x66:
/* IL_66: br.s IL_CA*/
__braille_pos_0__ = 0xCA;
continue;
case 0x68:
/* IL_68: ldloc.0 */
st_15 = loc0;
/* IL_69: ldstr \\*/
st_16 = "\\\\";
/* IL_6E: callvirt Void Append(System.String)*/
(asm1.x600000b)(st_15,st_16);
/* IL_73: br.s IL_D7*/
__braille_pos_0__ = 0xD7;
continue;
case 0x75:
/* IL_75: ldloc.0 */
st_1A = loc0;
/* IL_76: ldarg.0 */
st_17 = __braille_args__[0];
/* IL_77: ldloc.1 */
st_18 = loc1;
/* IL_78: callvirt Char get_Chars(System.Int32)*/
st_19 = (asm0.x600001c)(st_17,cloneValue(st_18));
/* IL_7D: call String EscapeChar(System.Char)*/
st_1B = (asm1.x600000f)(cloneValue(st_19));
/* IL_82: callvirt Void Append(System.String)*/
(asm1.x600000b)(st_1A,st_1B);
/* IL_87: br.s IL_D7*/
__braille_pos_0__ = 0xD7;
continue;
case 0x89:
/* IL_89: ldloc.0 */
st_1C = loc0;
/* IL_8A: ldstr \0*/
st_1D = "\\0";
/* IL_8F: callvirt Void Append(System.String)*/
(asm1.x600000b)(st_1C,st_1D);
/* IL_94: br.s IL_D7*/
__braille_pos_0__ = 0xD7;
continue;
case 0x96:
/* IL_96: ldloc.0 */
st_1E = loc0;
/* IL_97: ldstr \t*/
st_1F = "\\t";
/* IL_9C: callvirt Void Append(System.String)*/
(asm1.x600000b)(st_1E,st_1F);
/* IL_A1: br.s IL_D7*/
__braille_pos_0__ = 0xD7;
continue;
case 0xA3:
/* IL_A3: ldloc.0 */
st_20 = loc0;
/* IL_A4: ldstr \n*/
st_21 = "\\n";
/* IL_A9: callvirt Void Append(System.String)*/
(asm1.x600000b)(st_20,st_21);
/* IL_AE: br.s IL_D7*/
__braille_pos_0__ = 0xD7;
continue;
case 0xB0:
/* IL_B0: ldloc.0 */
st_22 = loc0;
/* IL_B1: ldstr \r*/
st_23 = "\\r";
/* IL_B6: callvirt Void Append(System.String)*/
(asm1.x600000b)(st_22,st_23);
/* IL_BB: br.s IL_D7*/
__braille_pos_0__ = 0xD7;
continue;
case 0xBD:
/* IL_BD: ldloc.0 */
st_24 = loc0;
/* IL_BE: ldstr \"*/
st_25 = "\\\"";
/* IL_C3: callvirt Void Append(System.String)*/
(asm1.x600000b)(st_24,st_25);
/* IL_C8: br.s IL_D7*/
__braille_pos_0__ = 0xD7;
continue;
case 0xCA:
/* IL_CA: ldloc.0 */
st_28 = loc0;
/* IL_CB: ldarg.0 */
st_26 = __braille_args__[0];
/* IL_CC: ldloc.1 */
st_27 = loc1;
/* IL_CD: callvirt Char get_Chars(System.Int32)*/
st_29 = (asm0.x600001c)(st_26,cloneValue(st_27));
/* IL_D2: callvirt Void Append(System.Char)*/
(asm1.x600000c)(st_28,cloneValue(st_29));
case 0xD7:
/* IL_D7: ldloc.1 */
st_2A = loc1;
/* IL_D8: ldc.i4.1 */
st_2B = 1;
/* IL_D9: add */
st_2C = (st_2A + st_2B);
/* IL_DA: stloc.1 */
loc1 = st_2C;
case 0xDB:
/* IL_DB: ldloc.1 */
st_2E = loc1;
/* IL_DC: ldarg.0 */
st_2D = __braille_args__[0];
/* IL_DD: callvirt Int32 get_Length()*/
st_2F = (asm0.x6000021)(st_2D);
/* IL_E2: blt IL_15*/
if (st_2E < st_2F){
__braille_pos_0__ = 0x15;continue;
}
/* IL_E7: ldloc.0 */
st_30 = loc0;
/* IL_E8: ldc.i4.s 34*/
st_31 = 34;
/* IL_EA: callvirt Void Append(System.Char)*/
(asm1.x600000c)(st_30,cloneValue(st_31));
/* IL_EF: ldloc.0 */
st_32 = loc0;
/* IL_F0: callvirt String ToString()*/
st_33 = (st_32.vtable.x6000001)(st_32);
/* IL_F5: ret */
return st_33;
}
} };
asm.x600000f = function EscapeChar() { var __braille_args__;
var st_01;
var st_00;
var st_02;
var st_03;
 __braille_args__ = arguments;
/* IL_00: ldstr \u*/
st_01 = "\\u";
/* IL_05: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_06: box System.Int32*/
st_02 = { 
'boxed': cloneValue(st_00),
'toString': function () { 
 return this.boxed; } 
};
/* IL_0B: call String Concat(System.Object, System.Object)*/
st_03 = (asm0.x600001e)(st_01,st_02);
/* IL_10: ret */
return st_03; };
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
function Program() { 
 if (!initialized){
initialized = true;Program.IsValueType = false;Program.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
Program.prototype = { 
 
};;
return Program; })();
asm.Program = self;
self = (function () { var initialized;
 initialized = false;;
function S() { 
 if (!initialized){
initialized = true;S.IsValueType = false;S.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
S.prototype = { 
 
};;
return S; })();
asm.S = self;
self = (function () { var initialized;
 initialized = false;;
function CSStringConverter() { 
 if (!initialized){
initialized = true;CSStringConverter.IsValueType = false;CSStringConverter.prototype.vtable = { 
'x6000001': asm.x6000001 
};
} };
CSStringConverter.prototype = { 
 
};;
return CSStringConverter; })();
asm.CSStringConverter = self;
asm.entryPoint = asm.x6000009; })(asm1 || (asm1 = {}));
