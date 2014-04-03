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
asm.x600000b = function get_ValidOn() { var __braille_args__;
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
asm.x600000c = function set_ValidOn() { var __braille_args__;
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
asm.x600000d = function get_Inherited() { var __braille_args__;
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
asm.x600000e = function set_Inherited() { var __braille_args__;
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
asm.x600000a = function _ctor() { var __braille_args__;
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
(asm0.x600000c)(st_01,cloneValue(st_02));
/* IL_0F: nop */
/* IL_10: nop */
/* IL_11: ret */
return ; };
asm.x600000f = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
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
self = (function () { 
 function Object() { 
  };
Object.prototype = { 
 
};;
Object.IsValueType = false;
Object.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Object; })();
(asm)["System.Object"] = self;
self = (function () { 
 function Attribute() { 
  };
Attribute.prototype = { 
 
};;
Attribute.IsValueType = false;
Attribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Attribute; })();
(asm)["System.Attribute"] = self;
self = (function () { 
 function DefaultMemberAttribute() { 
  };
DefaultMemberAttribute.prototype = new ((asm)["System.Attribute"])();;
DefaultMemberAttribute.IsValueType = false;
DefaultMemberAttribute.prototype.member_name = null;;
DefaultMemberAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return DefaultMemberAttribute; })();
(asm)["System.Reflection.DefaultMemberAttribute"] = self;
self = (function () { 
 function Array() { 
  };
Array.prototype = { 
 
};;
Array.IsValueType = false;
(Array.prototype)["<Length>k__BackingField"] = 0;;
Array.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Array; })();
(asm)["System.Array"] = self;
self = (function () { 
 function Enum() { 
  };
Enum.prototype = { 
 
};;
Enum.IsValueType = false;
Enum.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Enum; })();
(asm)["System.Enum"] = self;
self = (function () { 
 function AttributeTargets() { 
  };
AttributeTargets.prototype = new ((asm)["System.Enum"])();;
AttributeTargets.IsValueType = true;
AttributeTargets.prototype.value__ = 0;;
AttributeTargets.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return AttributeTargets; })();
(asm)["System.AttributeTargets"] = self;
self = (function () { 
 function AttributeUsageAttribute() { 
  };
AttributeUsageAttribute.prototype = new ((asm)["System.Attribute"])();;
AttributeUsageAttribute.IsValueType = false;
(AttributeUsageAttribute.prototype)["<ValidOn>k__BackingField"] = new ((asm0)["System.AttributeTargets"])();;
(AttributeUsageAttribute.prototype)["<Inherited>k__BackingField"] = false;;
AttributeUsageAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return AttributeUsageAttribute; })();
(asm)["System.AttributeUsageAttribute"] = self;
self = (function () { 
 function ValueType() { 
  };
ValueType.prototype = { 
 
};;
ValueType.IsValueType = false;
ValueType.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return ValueType; })();
(asm)["System.ValueType"] = self;
self = (function () { 
 function Boolean() { 
  };
Boolean.prototype = { 
 
};;
Boolean.IsValueType = true;
Boolean.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Boolean; })();
(asm)["System.Boolean"] = self;
self = (function () { 
 function Byte() { 
  };
Byte.prototype = { 
 
};;
Byte.IsValueType = true;
Byte.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Byte; })();
(asm)["System.Byte"] = self;
self = (function () { 
 function Char() { 
  };
Char.prototype = { 
 
};;
Char.IsValueType = true;
Char.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Char; })();
(asm)["System.Char"] = self;
self = (function () { 
 function Console() { 
  };
Console.prototype = { 
 
};;
Console.IsValueType = false;
Console.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Console; })();
(asm)["System.Console"] = self;
self = (function () { 
 function Delegate() { 
  };
Delegate.prototype = { 
 
};;
Delegate.IsValueType = false;
Delegate.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Delegate; })();
(asm)["System.Delegate"] = self;
self = (function () { 
 function Double() { 
  };
Double.prototype = { 
 
};;
Double.IsValueType = true;
Double.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Double; })();
(asm)["System.Double"] = self;
self = (function () { 
 function Exception() { 
  };
Exception.prototype = { 
 
};;
Exception.IsValueType = false;
(Exception.prototype)["<Message>k__BackingField"] = null;;
Exception.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Exception; })();
(asm)["System.Exception"] = self;
self = (function () { 
 function FlagsAttribute() { 
  };
FlagsAttribute.prototype = new ((asm)["System.Attribute"])();;
FlagsAttribute.IsValueType = false;
FlagsAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return FlagsAttribute; })();
(asm)["System.FlagsAttribute"] = self;
self = (function () { 
 function IDisposable() { 
  };
IDisposable.prototype = { 
 
};;
IDisposable.IsValueType = false;
IDisposable.prototype.vtable = { 
'x6000017': asm.x6000017 
};;
return IDisposable; })();
(asm)["System.IDisposable"] = self;
self = (function () { 
 function ICloneable() { 
  };
ICloneable.prototype = { 
 
};;
ICloneable.IsValueType = false;
ICloneable.prototype.vtable = { 
'x6000018': asm.x6000018 
};;
return ICloneable; })();
(asm)["System.ICloneable"] = self;
self = (function () { 
 function Int16() { 
  };
Int16.prototype = { 
 
};;
Int16.IsValueType = true;
Int16.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Int16; })();
(asm)["System.Int16"] = self;
self = (function () { 
 function Int32() { 
  };
Int32.prototype = { 
 
};;
Int32.IsValueType = true;
Int32.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Int32; })();
(asm)["System.Int32"] = self;
self = (function () { 
 function Int64() { 
  };
Int64.prototype = { 
 
};;
Int64.IsValueType = true;
Int64.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Int64; })();
(asm)["System.Int64"] = self;
self = (function () { 
 function IntPtr() { 
  };
IntPtr.prototype = { 
 
};;
IntPtr.IsValueType = true;
IntPtr.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return IntPtr; })();
(asm)["System.IntPtr"] = self;
self = (function () { 
 function Math() { 
  };
Math.prototype = { 
 
};;
Math.IsValueType = false;
Math.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Math; })();
(asm)["System.Math"] = self;
self = (function () { 
 function MulticastDelegate() { 
  };
MulticastDelegate.prototype = new ((asm)["System.Delegate"])();;
MulticastDelegate.IsValueType = false;
MulticastDelegate.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return MulticastDelegate; })();
(asm)["System.MulticastDelegate"] = self;
self = (function () { 
 function ParamArrayAttribute() { 
  };
ParamArrayAttribute.prototype = new ((asm)["System.Attribute"])();;
ParamArrayAttribute.IsValueType = false;
ParamArrayAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return ParamArrayAttribute; })();
(asm)["System.ParamArrayAttribute"] = self;
self = (function () { 
 function RuntimeFieldHandle() { 
  };
RuntimeFieldHandle.prototype = { 
 
};;
RuntimeFieldHandle.IsValueType = true;
RuntimeFieldHandle.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return RuntimeFieldHandle; })();
(asm)["System.RuntimeFieldHandle"] = self;
self = (function () { 
 function RuntimeTypeHandle() { 
  };
RuntimeTypeHandle.prototype = { 
 
};;
RuntimeTypeHandle.IsValueType = true;
RuntimeTypeHandle.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return RuntimeTypeHandle; })();
(asm)["System.RuntimeTypeHandle"] = self;
self = (function () { 
 function SByte() { 
  };
SByte.prototype = { 
 
};;
SByte.IsValueType = true;
SByte.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return SByte; })();
(asm)["System.SByte"] = self;
self = (function () { 
 function Single() { 
  };
Single.prototype = { 
 
};;
Single.IsValueType = true;
Single.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Single; })();
(asm)["System.Single"] = self;
self = (function () { 
 function String() { 
  };
String.prototype = { 
 
};;
String.IsValueType = false;
(String.prototype)["<Length>k__BackingField"] = 0;;
String.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return String; })();
(asm)["System.String"] = self;
self = (function () { 
 function Type() { 
  };
Type.prototype = { 
 
};;
Type.IsValueType = false;
Type.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Type; })();
(asm)["System.Type"] = self;
self = (function () { 
 function UInt16() { 
  };
UInt16.prototype = { 
 
};;
UInt16.IsValueType = true;
UInt16.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return UInt16; })();
(asm)["System.UInt16"] = self;
self = (function () { 
 function UInt32() { 
  };
UInt32.prototype = { 
 
};;
UInt32.IsValueType = true;
UInt32.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return UInt32; })();
(asm)["System.UInt32"] = self;
self = (function () { 
 function UInt64() { 
  };
UInt64.prototype = { 
 
};;
UInt64.IsValueType = true;
UInt64.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return UInt64; })();
(asm)["System.UInt64"] = self;
self = (function () { 
 function UIntPtr() { 
  };
UIntPtr.prototype = { 
 
};;
UIntPtr.IsValueType = true;
UIntPtr.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return UIntPtr; })();
(asm)["System.UIntPtr"] = self;
self = (function () { 
 function Void() { 
  };
Void.prototype = { 
 
};;
Void.IsValueType = true;
Void.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return Void; })();
(asm)["System.Void"] = self;
self = (function () { 
 function IEnumerable() { 
  };
IEnumerable.prototype = { 
 
};;
IEnumerable.IsValueType = false;
IEnumerable.prototype.vtable = { 
 
};;
return IEnumerable; })();
(asm)["System.Collections.IEnumerable"] = self;
self = (function () { 
 function IEnumerator() { 
  };
IEnumerator.prototype = { 
 
};;
IEnumerator.IsValueType = false;
IEnumerator.prototype.vtable = { 
 
};;
return IEnumerator; })();
(asm)["System.Collections.IEnumerator"] = self;
self = (function () { 
 function OutAttribute() { 
  };
OutAttribute.prototype = new ((asm)["System.Attribute"])();;
OutAttribute.IsValueType = false;
OutAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return OutAttribute; })();
(asm)["System.Runtime.InteropServices.OutAttribute"] = self;
self = (function () { 
 function IndexerNameAttribute() { 
  };
IndexerNameAttribute.prototype = new ((asm)["System.Attribute"])();;
IndexerNameAttribute.IsValueType = false;
IndexerNameAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return IndexerNameAttribute; })();
(asm)["System.Runtime.CompilerServices.IndexerNameAttribute"] = self;
self = (function () { 
 function TargetFrameworkAttribute() { 
  };
TargetFrameworkAttribute.prototype = new ((asm)["System.Attribute"])();;
TargetFrameworkAttribute.IsValueType = false;
TargetFrameworkAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
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
asm.x600000a = function get_zerop() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
 __braille_args__ = arguments;
loc0 = new (asm1.Point)();
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
(asm1.x6000009)(cloneValue(st_00),cloneValue(st_01),cloneValue(st_02));
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
loc0 = new (asm1.Point)();
loc1 = new (asm1.Point)();
loc2 = new (asm1.Point)();
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
(asm1.x6000009)(cloneValue(st_00),cloneValue(st_01),cloneValue(st_02));
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
st_26 = (asm1.x600000a)();
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
st_33 = (asm1.x600000b)(cloneValue(st_32));
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
};;
return test; })();
asm.test = self;
asm.entryPoint = asm.x600000c; })(asm1 || (asm1 = {}));
