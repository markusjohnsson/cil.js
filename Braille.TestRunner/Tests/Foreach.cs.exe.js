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
asm.x6000009 = function GetEnumerator() { var __braille_args__;
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
(asm1.x600000b)(result,st_11);
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
loc0 = null;
loc1 = 0;
loc2 = null;
loc3 = null;
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm1.A)();
(asm1.x600000a)(result);
return result; })();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: ldloc.0 */
st_01 = loc0;
/* IL_07: callvirt Iter GetEnumerator()*/
st_02 = (asm1.x6000009)(st_01);
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
st_04 = (asm1.x600000d)(st_03);
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
st_08 = (asm1.x600000c)(st_07);
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
 function A() { 
  };
A.prototype = { 
 
};;
A.IsValueType = false;
A.prototype.vtable = { 
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
};;
return Program; })();
asm.Program = self;
asm.entryPoint = asm.x600000e; })(asm1 || (asm1 = {}));
