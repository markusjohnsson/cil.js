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
asm.x6000009 = function get_Prop() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld T <Prop>k__BackingField*/
st_01 = (st_00)["<Prop>k__BackingField"];
/* IL_06: ret */
return st_01; };
asm.x600000a = function set_Prop() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: stfld T <Prop>k__BackingField*/
(st_00)["<Prop>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x600000b = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
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
asm.x600000e = function Main() { var __braille_args__;
var loc0;
var loc1;
var loc2;
var loc3;
var st_00;
var st_04;
var st_01;
var st_02;
var st_03;
var st_05;
var st_06;
var st_0A;
var st_07;
var st_08;
var st_09;
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
loc1 = null;
loc2 = null;
loc3 = null;
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new (((asm1)["A`1"])(asm1.IntWrapper))();
(asm1.x600000b)(result);
return result; })();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: ldloc.0 */
st_04 = loc0;
/* IL_07: newobj Void .ctor()*/
st_01 = (function () { var result;
 result = new (asm1.IntWrapper)();
(asm1.x600000c)(result);
return result; })();
/* IL_0C: stloc.2 */
loc2 = st_01;
/* IL_0D: ldloc.2 */
st_02 = loc2;
/* IL_0E: ldc.i4.s 123*/
st_03 = 123;
/* IL_10: stfld Int32 Value*/
st_02.Value = st_03;
/* IL_15: ldloc.2 */
st_05 = loc2;
/* IL_16: callvirt Void set_Prop(IntWrapper)*/
(asm1.x600000a)(st_04,st_05);
/* IL_1B: newobj Void .ctor()*/
st_06 = (function () { var result;
 result = new (((asm1)["A`1"])(asm1.StringWrapper))();
(asm1.x600000b)(result);
return result; })();
/* IL_20: stloc.1 */
loc1 = st_06;
/* IL_21: ldloc.1 */
st_0A = loc1;
/* IL_22: newobj Void .ctor()*/
st_07 = (function () { var result;
 result = new (asm1.StringWrapper)();
(asm1.x600000d)(result);
return result; })();
/* IL_27: stloc.3 */
loc3 = st_07;
/* IL_28: ldloc.3 */
st_08 = loc3;
/* IL_29: ldstr Hello*/
st_09 = "Hello";
/* IL_2E: stfld String Value*/
st_08.Value = st_09;
/* IL_33: ldloc.3 */
st_0B = loc3;
/* IL_34: callvirt Void set_Prop(StringWrapper)*/
(asm1.x600000a)(st_0A,st_0B);
/* IL_39: ldloc.0 */
st_0C = loc0;
/* IL_3A: callvirt IntWrapper get_Prop()*/
st_0D = (asm1.x6000009)(st_0C);
/* IL_3F: ldfld Int32 Value*/
st_0E = st_0D.Value;
/* IL_44: box System.Int32*/
st_0F = { 
'boxed': cloneValue(st_0E),
'toString': function () { 
 return this.boxed; } 
};
/* IL_49: call Void Log(System.Object)*/
braille_test_log(st_0F);
/* IL_4E: ldloc.1 */
st_10 = loc1;
/* IL_4F: callvirt StringWrapper get_Prop()*/
st_11 = (asm1.x6000009)(st_10);
/* IL_54: ldfld String Value*/
st_12 = st_11.Value;
/* IL_59: call Void Log(System.Object)*/
braille_test_log(st_12);
/* IL_5E: ret */
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
self = (function () { var ct;
 ct = { 
 
};
return function (T) { var c;
 c = tree_get([ T ],ct);
if (c){
return c;
}
function A_1() { 
  };
A_1.prototype = { 
 
};;
A_1.IsValueType = false;
(A_1.prototype)["<Prop>k__BackingField"] = null;;
A_1.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
c = A_1;
tree_set([ T ],ct,c);
return c; }; })();
(asm)["A`1"] = self;
self = (function () { 
 function IntWrapper() { 
  };
IntWrapper.prototype = { 
 
};;
IntWrapper.IsValueType = false;
IntWrapper.prototype.Value = 0;;
IntWrapper.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return IntWrapper; })();
asm.IntWrapper = self;
self = (function () { 
 function StringWrapper() { 
  };
StringWrapper.prototype = { 
 
};;
StringWrapper.IsValueType = false;
StringWrapper.prototype.Value = null;;
StringWrapper.prototype.vtable = { 
'x6000001': asm.x6000001 
};;
return StringWrapper; })();
asm.StringWrapper = self;
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
