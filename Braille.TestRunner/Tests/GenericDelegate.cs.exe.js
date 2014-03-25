var asm0; (function (asm) { var self;
 
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
asm.x6000001 = function () { 
  };
asm.x6000002 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000003 = function () { 
  };
asm.x6000005 = function () { 
  };
asm.x6000006 = function () { 
  };
asm.x6000004 = function () { 
  };
asm.x6000007 = function () { 
  };
asm.x6000008 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000a = function Invoke() { 
 return arguments[0]._methodPtr.apply(arguments[0]._target, Array(arguments).shift()); };
asm.x600000b = function () { 
  };
asm.x600000c = function () { 
  };
asm.x6000009 = function ctor() { 
 arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];; };
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
/* IL_06: ret */
return ; };
asm.x600000f = function Main() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var __braille_pos_0__;
 __braille_args__ = arguments;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: ldsfld MFunc`2[IntWrapper,StringWrapper] CS$<>9__CachedAnonymousMethodDelegate2*/
st_00 = (asm0.Program)["CS$<>9__CachedAnonymousMethodDelegate2"];
/* IL_05: brtrue.s IL_18*/
if (st_00){
__braille_pos_0__ = 0x18;continue;
}
/* IL_07: ldnull */
st_01 = null;
/* IL_09: ldftn StringWrapper <Main>b__1(IntWrapper)*/
st_02 = asm0.x6000012;
/* IL_0E: newobj Void .ctor(System.Object, IntPtr)*/
st_03 = (function () { var result;
 result = new (((asm0)["MFunc`2"])(asm0.IntWrapper,asm0.StringWrapper))();
(asm0.x6000009)(result,st_01,st_02);
return result; })();
/* IL_13: stsfld MFunc`2[IntWrapper,StringWrapper] CS$<>9__CachedAnonymousMethodDelegate2*/
(asm0.Program)["CS$<>9__CachedAnonymousMethodDelegate2"] = st_03;
case 0x18:
/* IL_18: ldsfld MFunc`2[IntWrapper,StringWrapper] CS$<>9__CachedAnonymousMethodDelegate2*/
st_04 = (asm0.Program)["CS$<>9__CachedAnonymousMethodDelegate2"];
/* IL_1D: call Void CallDelegate(MFunc`2[IntWrapper,StringWrapper])*/
(asm0.x6000010)(st_04);
/* IL_22: ret */
return ;
}
} };
asm.x6000010 = function CallDelegate() { var __braille_args__;
var st_03;
var st_00;
var st_01;
var st_02;
var st_04;
var st_05;
var st_06;
var loc0;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_03 = __braille_args__[0];
/* IL_01: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm0.IntWrapper)();
(asm0.x600000d)(result);
return result; })();
/* IL_06: stloc.0 */
loc0 = st_00;
/* IL_07: ldloc.0 */
st_01 = loc0;
/* IL_08: ldc.i4.s 123*/
st_02 = 123;
/* IL_0A: stfld Int32 Value*/
st_01.Value = st_02;
/* IL_0F: ldloc.0 */
st_04 = loc0;
/* IL_10: callvirt StringWrapper Invoke(IntWrapper)*/
st_05 = (st_03.vtable.x600000a)(st_03,st_04);
/* IL_15: ldfld System.String Value*/
st_06 = st_05.Value;
/* IL_1A: call Void Log(System.Object)*/
braille_test_log(st_06);
/* IL_1F: ret */
return ; };
asm.x6000012 = function _Main_b__1() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var loc0;
 __braille_args__ = arguments;
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm0.StringWrapper)();
(asm0.x600000e)(result);
return result; })();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: ldloc.0 */
st_01 = loc0;
/* IL_07: ldstr Result*/
st_02 = "Result";
/* IL_0C: stfld System.String Value*/
st_01.Value = st_02;
/* IL_11: ldloc.0 */
st_03 = loc0;
/* IL_12: ret */
return st_03; };
asm.x6000011 = function _ctor() { var __braille_args__;
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
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
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
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return TestHelper; })();
asm.TestHelper = self;
self = (function () { var ct;
 ct = { 
 
};
return function (T,TResult) { var c;
 c = tree_get([ T,TResult ],ct);
if (c){
return c;
}
function MFunc_2() { 
  };
MFunc_2.prototype = { 
 
};;
MFunc_2.IsValueType = false;
MFunc_2.prototype._target = null;;
MFunc_2.prototype._methodBase = null;;
MFunc_2.prototype._methodPtr = 0;;
MFunc_2.prototype._methodPtrAux = 0;;
MFunc_2.prototype.vtable = { 
'x600000a': asm.x600000a,
'x600000b': asm.x600000b,
'x600000c': asm.x600000c,
'x60000e5': asm.x60000fe,
'x6000003': asm.x60000ff,
'x60000d1': asm.x6000105,
'x6000006': asm.x6000108,
'x60000d9': asm.x60000d9,
'x6000002': asm.x6000002 
};;
(MFunc_2.prototype)["System.ICloneable"] = { 
'x60000c8': asm.x60000d9 
};;
(MFunc_2.prototype)["System.Runtime.Serialization.ISerializable"] = { 
'x600000d': asm.x60000fe 
};;
c = MFunc_2;
tree_set([ T,TResult ],ct,c);
return c; }; })();
(asm)["MFunc`2"] = self;
self = (function () { 
 function IntWrapper() { 
  };
IntWrapper.prototype = { 
 
};;
IntWrapper.IsValueType = false;
IntWrapper.prototype.Value = 0;;
IntWrapper.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
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
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
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
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return Program; })();
asm.Program = self;
asm.entryPoint = asm.x600000f; })(asm0 || (asm0 = {}))