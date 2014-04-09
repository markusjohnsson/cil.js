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
((asm0)["System.Exception"].init)();
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
((asm0)["System.Exception"].init)();
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
((asm0)["System.Exception"].init)();
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
((asm0)["System.Exception"].init)();
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
((asm0)["System.Exception"].init)();
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
(Object.init)();
}
this.constructor = Object; };
Object.init = function () { 
 initialized = true;
Object.Interfaces = [  ];
Object.IsInst = function (t) { return t instanceof Object; };
Object.IsValueType = false;
Object.prototype.vtable = { 
'x6000001': asm.x6000001 
}; };
Object.prototype = { 
 
};;
return Object; })();
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
'x6000001': asm.x6000001 
}; };
Attribute.prototype = { 
 
};;
return Attribute; })();
(asm)["System.Attribute"] = self;
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
DefaultMemberAttribute.prototype.member_name = null;
DefaultMemberAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
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
(Array.prototype)["<Length>k__BackingField"] = 0;
Array.prototype.vtable = { 
'x6000001': asm.x6000001 
}; };
Array.prototype = { 
 
};;
return Array; })();
(asm)["System.Array"] = self;
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
'x6000001': asm.x6000001 
}; };
ValueType.prototype = { 
 
};;
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
}; };
AttributeTargets.prototype = new ((asm0)["System.Enum"])();;
return AttributeTargets; })();
(asm)["System.AttributeTargets"] = self;
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
(AttributeUsageAttribute.prototype)["<ValidOn>k__BackingField"] = new ((asm0)["System.AttributeTargets"])();
(AttributeUsageAttribute.prototype)["<Inherited>k__BackingField"] = false;
AttributeUsageAttribute.prototype.vtable = { 
'x6000001': asm.x6000001 
}; };
AttributeUsageAttribute.prototype = new ((asm0)["System.Attribute"])();;
return AttributeUsageAttribute; })();
(asm)["System.AttributeUsageAttribute"] = self;
self = (function () { var initialized;
 initialized = false;;
function Boolean() { 
 if (!initialized){
(Boolean.init)();
}
this.constructor = Boolean; };
Boolean.init = function () { 
 initialized = true;
Boolean.Interfaces = [  ];
Boolean.IsInst = function (t) { return t instanceof Boolean; };
Boolean.IsValueType = true;
Boolean.prototype.vtable = { 
'x6000001': asm.x6000001 
}; };
Boolean.prototype = { 
 
};;
return Boolean; })();
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
}; };
Console.prototype = { 
 
};;
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
'x6000001': asm.x6000001 
}; };
Delegate.prototype = { 
 
};;
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
'x6000001': asm.x6000001 
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
(Exception.prototype)["<Message>k__BackingField"] = null;
Exception.prototype.vtable = { 
'x6000001': asm.x6000001 
}; };
Exception.prototype = { 
 
};;
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
'x6000001': asm.x6000001 
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
'x6000017': asm.x6000017 
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
'x6000018': asm.x6000018 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
}; };
Math.prototype = { 
 
};;
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
}; };
Single.prototype = { 
 
};;
return Single; })();
(asm)["System.Single"] = self;
self = (function () { var initialized;
 initialized = false;;
function String() { 
 if (!initialized){
(String.init)();
}
this.constructor = String; };
String.init = function () { 
 initialized = true;
String.Interfaces = [  ];
String.IsInst = function (t) { return t instanceof String; };
String.IsValueType = false;
(String.prototype)["<Length>k__BackingField"] = 0;
String.prototype.vtable = { 
'x6000001': asm.x6000001 
}; };
String.prototype = { 
 
};;
return String; })();
(asm)["System.String"] = self;
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
'x6000001': asm.x6000001 
}; };
Type.prototype = { 
 
};;
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
}; };
Void.prototype = { 
 
};;
return Void; })();
(asm)["System.Void"] = self;
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
'x6000001': asm.x6000001 
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
asm.x600000d = function IVehicle_Start() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.1 */
st_00 = 1;
/* IL_01: ret */
return st_00; };
asm.x600000e = function Stop() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.2 */
st_00 = 2;
/* IL_01: ret */
return st_00; };
asm.x600000f = function Turn() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.3 */
st_00 = 3;
/* IL_01: ret */
return st_00; };
asm.x6000010 = function Walk() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.1 */
st_00 = 1;
/* IL_01: ret */
return st_00; };
asm.x6000011 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000012 = function Turn() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.4 */
st_00 = 4;
/* IL_01: ret */
return st_00; };
asm.x6000013 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm1.x6000011)(st_00);
/* IL_06: ret */
return ; };
asm.x6000014 = function Stop() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.6 */
st_00 = 6;
/* IL_01: ret */
return st_00; };
asm.x6000015 = function IVehicle_Start() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.5 */
st_00 = 5;
/* IL_01: ret */
return st_00; };
asm.x6000016 = function IVehicle_Turn() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.7 */
st_00 = 7;
/* IL_01: ret */
return st_00; };
asm.x6000017 = function Turn() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.8 */
st_00 = 8;
/* IL_01: ret */
return st_00; };
asm.x6000018 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm1.x6000011)(st_00);
/* IL_06: ret */
return ; };
asm.x6000019 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm1.x6000013)(st_00);
/* IL_06: ret */
return ; };
asm.x600001a = function Main() { var __braille_args__;
var loc0;
var loc1;
var loc2;
var loc3;
var loc4;
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
var st_28;
var st_29;
var st_2A;
var st_2B;
var st_2C;
var st_2D;
var __braille_pos_0__;
 __braille_args__ = arguments;
(asm1.Derived1.init)();
(asm1.Derived2.init)();
(asm1.Derived3.init)();
(asm1.Base.init)();
loc0 = null;
loc1 = null;
loc2 = null;
loc3 = null;
loc4 = null;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm1.Derived1)();
(asm1.x6000013)(result);
return result; })();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: newobj Void .ctor()*/
st_01 = (function () { var result;
 result = new (asm1.Derived2)();
(asm1.x6000018)(result);
return result; })();
/* IL_0B: stloc.1 */
loc1 = st_01;
/* IL_0C: newobj Void .ctor()*/
st_02 = (function () { var result;
 result = new (asm1.Derived3)();
(asm1.x6000019)(result);
return result; })();
/* IL_11: stloc.2 */
loc2 = st_02;
/* IL_12: ldloc.1 */
st_03 = loc1;
/* IL_13: stloc.3 */
loc3 = st_03;
/* IL_14: newobj Void .ctor()*/
st_04 = (function () { var result;
 result = new (asm1.Base)();
(asm1.x6000011)(result);
return result; })();
/* IL_19: stloc.s 4*/
loc4 = st_04;
/* IL_1B: ldloc.0 */
st_05 = loc0;
/* IL_1C: callvirt Int32 Turn()*/
st_06 = (st_05.vtable.x600000f)(st_05);
/* IL_21: ldc.i4.4 */
st_07 = 4;
/* IL_22: beq.s IL_26*/
if (st_06 === st_07){
__braille_pos_0__ = 0x26;continue;
}
/* IL_24: ldc.i4.1 */
st_08 = 1;
/* IL_25: ret */
return st_08;
case 0x26:
/* IL_26: ldloc.0 */
st_09 = loc0;
/* IL_27: callvirt Int32 Turn()*/
st_0A = (st_09.IVehicle.x600000b)(st_09);
/* IL_2C: ldc.i4.4 */
st_0B = 4;
/* IL_2D: beq.s IL_31*/
if (st_0A === st_0B){
__braille_pos_0__ = 0x31;continue;
}
/* IL_2F: ldc.i4.2 */
st_0C = 2;
/* IL_30: ret */
return st_0C;
case 0x31:
/* IL_31: ldloc.1 */
st_0D = loc1;
/* IL_32: callvirt Int32 Turn()*/
st_0E = (st_0D.vtable.x600000f)(st_0D);
/* IL_37: ldc.i4.8 */
st_0F = 8;
/* IL_38: beq.s IL_3D*/
if (st_0E === st_0F){
__braille_pos_0__ = 0x3D;continue;
}
/* IL_3A: ldc.i4.s 10*/
st_10 = 10;
/* IL_3C: ret */
return st_10;
case 0x3D:
/* IL_3D: ldloc.1 */
st_11 = loc1;
/* IL_3E: callvirt Int32 Turn()*/
st_12 = (st_11.IVehicle.x600000b)(st_11);
/* IL_43: ldc.i4.7 */
st_13 = 7;
/* IL_44: beq.s IL_48*/
if (st_12 === st_13){
__braille_pos_0__ = 0x48;continue;
}
/* IL_46: ldc.i4.3 */
st_14 = 3;
/* IL_47: ret */
return st_14;
case 0x48:
/* IL_48: ldloc.3 */
st_15 = loc3;
/* IL_49: callvirt Int32 Turn()*/
st_16 = (st_15.vtable.x600000f)(st_15);
/* IL_4E: ldc.i4.8 */
st_17 = 8;
/* IL_4F: beq.s IL_53*/
if (st_16 === st_17){
__braille_pos_0__ = 0x53;continue;
}
/* IL_51: ldc.i4.4 */
st_18 = 4;
/* IL_52: ret */
return st_18;
case 0x53:
/* IL_53: ldloc.3 */
st_19 = loc3;
/* IL_54: callvirt Int32 Turn()*/
st_1A = (st_19.IVehicle.x600000b)(st_19);
/* IL_59: ldc.i4.7 */
st_1B = 7;
/* IL_5A: beq.s IL_5E*/
if (st_1A === st_1B){
__braille_pos_0__ = 0x5E;continue;
}
/* IL_5C: ldc.i4.5 */
st_1C = 5;
/* IL_5D: ret */
return st_1C;
case 0x5E:
/* IL_5E: ldloc.s 4*/
st_1D = loc4;
/* IL_60: callvirt Int32 Stop()*/
st_1E = (st_1D.IVehicle.x600000a)(st_1D);
/* IL_65: ldc.i4.2 */
st_1F = 2;
/* IL_66: beq.s IL_6A*/
if (st_1E === st_1F){
__braille_pos_0__ = 0x6A;continue;
}
/* IL_68: ldc.i4.6 */
st_20 = 6;
/* IL_69: ret */
return st_20;
case 0x6A:
/* IL_6A: ldloc.0 */
st_21 = loc0;
/* IL_6B: callvirt Int32 Stop()*/
st_22 = (st_21.IVehicle.x600000a)(st_21);
/* IL_70: ldc.i4.2 */
st_23 = 2;
/* IL_71: beq.s IL_75*/
if (st_22 === st_23){
__braille_pos_0__ = 0x75;continue;
}
/* IL_73: ldc.i4.7 */
st_24 = 7;
/* IL_74: ret */
return st_24;
case 0x75:
/* IL_75: ldloc.1 */
st_25 = loc1;
/* IL_76: callvirt Int32 Stop()*/
st_26 = (st_25.IVehicle.x600000a)(st_25);
/* IL_7B: ldc.i4.6 */
st_27 = 6;
/* IL_7C: beq.s IL_80*/
if (st_26 === st_27){
__braille_pos_0__ = 0x80;continue;
}
/* IL_7E: ldc.i4.8 */
st_28 = 8;
/* IL_7F: ret */
return st_28;
case 0x80:
/* IL_80: ldloc.2 */
st_29 = loc2;
/* IL_81: callvirt Int32 Walk()*/
st_2A = (st_29.vtable.x6000010)(st_29);
/* IL_86: ldc.i4.1 */
st_2B = 1;
/* IL_87: beq.s IL_8C*/
if (st_2A === st_2B){
__braille_pos_0__ = 0x8C;continue;
}
/* IL_89: ldc.i4.s 9*/
st_2C = 9;
/* IL_8B: ret */
return st_2C;
case 0x8C:
/* IL_8C: ldc.i4.0 */
st_2D = 0;
/* IL_8D: ret */
return st_2D;
}
} };
asm.x600001b = function _ctor() { var __braille_args__;
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
'x6000001': asm.x6000001 
}; };
TestLog.prototype = { 
 
};;
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
'x6000001': asm.x6000001 
}; };
TestHelper.prototype = { 
 
};;
return TestHelper; })();
asm.TestHelper = self;
self = (function () { var initialized;
 initialized = false;;
function IVehicle() { 
 if (!initialized){
(IVehicle.init)();
}
this.constructor = IVehicle; };
IVehicle.init = function () { 
 initialized = true;
IVehicle.Interfaces = [  ];
IVehicle.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IVehicle) != -1; };
IVehicle.IsValueType = false;
IVehicle.prototype.vtable = { 
'x6000009': asm.x6000009,
'x600000a': asm.x600000a,
'x600000b': asm.x600000b 
}; };
IVehicle.prototype = { 
 
};;
return IVehicle; })();
asm.IVehicle = self;
self = (function () { var initialized;
 initialized = false;;
function IWalker() { 
 if (!initialized){
(IWalker.init)();
}
this.constructor = IWalker; };
IWalker.init = function () { 
 initialized = true;
IWalker.Interfaces = [  ];
IWalker.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IWalker) != -1; };
IWalker.IsValueType = false;
IWalker.prototype.vtable = { 
'x600000c': asm.x600000c 
}; };
IWalker.prototype = { 
 
};;
return IWalker; })();
asm.IWalker = self;
self = (function () { var initialized;
 initialized = false;;
function Base() { 
 if (!initialized){
(Base.init)();
}
this.constructor = Base; };
Base.init = function () { 
 initialized = true;
Base.Interfaces = [ asm1.IVehicle ];
Base.IsInst = function (t) { return t instanceof Base; };
Base.IsValueType = false;
Base.prototype.vtable = { 
'x600000e': asm.x600000e,
'x600000f': asm.x600000f,
'x6000010': asm.x6000010,
'x6000001': asm.x6000001 
};
Base.prototype.IVehicle = { 
'x6000009': asm.x600000d,
'x600000a': asm.x600000e,
'x600000b': asm.x600000f 
}; };
Base.prototype = { 
 
};;
return Base; })();
asm.Base = self;
self = (function () { var initialized;
 initialized = false;;
function Derived1() { 
 if (!initialized){
(Derived1.init)();
}
this.constructor = Derived1; };
Derived1.init = function () { 
 initialized = true;
Derived1.Interfaces = [ asm1.IVehicle ];
Derived1.IsInst = function (t) { return t instanceof Derived1; };
Derived1.IsValueType = false;
Derived1.prototype.vtable = { 
'x600000f': asm.x6000012,
'x600000e': asm.x600000e,
'x6000010': asm.x6000010,
'x6000001': asm.x6000001 
};
Derived1.prototype.IVehicle = { 
'x6000009': asm.x600000d,
'x600000a': asm.x600000e,
'x600000b': asm.x6000012 
}; };
Derived1.prototype = new (asm1.Base)();;
return Derived1; })();
asm.Derived1 = self;
self = (function () { var initialized;
 initialized = false;;
function Derived2() { 
 if (!initialized){
(Derived2.init)();
}
this.constructor = Derived2; };
Derived2.init = function () { 
 initialized = true;
Derived2.Interfaces = [ asm1.IVehicle ];
Derived2.IsInst = function (t) { return t instanceof Derived2; };
Derived2.IsValueType = false;
Derived2.prototype.vtable = { 
'x6000014': asm.x6000014,
'x600000f': asm.x6000017,
'x600000e': asm.x600000e,
'x6000010': asm.x6000010,
'x6000001': asm.x6000001 
};
Derived2.prototype.IVehicle = { 
'x6000009': asm.x6000015,
'x600000a': asm.x6000014,
'x600000b': asm.x6000016 
}; };
Derived2.prototype = new (asm1.Base)();;
return Derived2; })();
asm.Derived2 = self;
self = (function () { var initialized;
 initialized = false;;
function Derived3() { 
 if (!initialized){
(Derived3.init)();
}
this.constructor = Derived3; };
Derived3.init = function () { 
 initialized = true;
Derived3.Interfaces = [ asm1.IWalker,asm1.IVehicle ];
Derived3.IsInst = function (t) { return t instanceof Derived3; };
Derived3.IsValueType = false;
Derived3.prototype.vtable = { 
'x600000f': asm.x6000012,
'x600000e': asm.x600000e,
'x6000010': asm.x6000010,
'x6000001': asm.x6000001 
};
Derived3.prototype.IWalker = { 
'x600000c': asm.x6000010 
};
Derived3.prototype.IVehicle = { 
'x6000009': asm.x600000d,
'x600000a': asm.x600000e,
'x600000b': asm.x6000012 
}; };
Derived3.prototype = new (asm1.Derived1)();;
return Derived3; })();
asm.Derived3 = self;
self = (function () { var initialized;
 initialized = false;;
function Test() { 
 if (!initialized){
(Test.init)();
}
this.constructor = Test; };
Test.init = function () { 
 initialized = true;
Test.Interfaces = [  ];
Test.IsInst = function (t) { return t instanceof Test; };
Test.IsValueType = false;
Test.prototype.vtable = { 
'x6000001': asm.x6000001 
}; };
Test.prototype = { 
 
};;
return Test; })();
asm.Test = self;
asm.entryPoint = asm.x600001a; })(asm1 || (asm1 = {}));
