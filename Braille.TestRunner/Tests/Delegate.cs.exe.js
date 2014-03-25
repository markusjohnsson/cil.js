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
asm.x600000d = function X() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldstr RESULT!*/
st_00 = "RESULT!";
/* IL_05: ret */
return st_00; };
asm.x600000e = function Main() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var loc0;
 __braille_args__ = arguments;
/* IL_00: ldnull */
st_00 = null;
/* IL_02: ldftn System.String X(Int32)*/
st_01 = asm0.x600000d;
/* IL_07: newobj Void .ctor(System.Object, IntPtr)*/
st_02 = (function () { var result;
 result = new (asm0.Foo)();
(asm0.x6000009)(result,st_00,st_01);
return result; })();
/* IL_0C: stloc.0 */
loc0 = st_02;
/* IL_0D: ldloc.0 */
st_03 = loc0;
/* IL_0E: call Void CallDelegate(Foo)*/
(asm0.x600000f)(st_03);
/* IL_13: ret */
return ; };
asm.x600000f = function CallDelegate() { var __braille_args__;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldc.i4.s 123*/
st_01 = 123;
/* IL_03: callvirt System.String Invoke(Int32)*/
st_02 = (st_00.vtable.x600000a)(st_00,st_01);
/* IL_08: call Void Log(System.Object)*/
braille_test_log(st_02);
/* IL_0D: ret */
return ; };
asm.x6000010 = function _ctor() { var __braille_args__;
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
self = (function () { 
 function Foo() { 
  };
Foo.prototype = { 
 
};;
Foo.IsValueType = false;
Foo.prototype._target = null;;
Foo.prototype._methodBase = null;;
Foo.prototype._methodPtr = 0;;
Foo.prototype._methodPtrAux = 0;;
Foo.prototype.vtable = { 
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
(Foo.prototype)["System.ICloneable"] = { 
'x60000c8': asm.x60000d9 
};;
(Foo.prototype)["System.Runtime.Serialization.ISerializable"] = { 
'x600000d': asm.x60000fe 
};;
return Foo; })();
asm.Foo = self;
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
asm.entryPoint = asm.x600000e; })(asm0 || (asm0 = {}))