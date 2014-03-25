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
var loc0;
var loc2;
var loc1;
var loc3;
 __braille_args__ = arguments;
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new (((asm0)["A`1"])(asm0.IntWrapper))();
(asm0.x600000b)(result);
return result; })();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: ldloc.0 */
st_04 = loc0;
/* IL_07: newobj Void .ctor()*/
st_01 = (function () { var result;
 result = new (asm0.IntWrapper)();
(asm0.x600000c)(result);
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
(asm0.x600000a)(st_04,st_05);
/* IL_1B: newobj Void .ctor()*/
st_06 = (function () { var result;
 result = new (((asm0)["A`1"])(asm0.StringWrapper))();
(asm0.x600000b)(result);
return result; })();
/* IL_20: stloc.1 */
loc1 = st_06;
/* IL_21: ldloc.1 */
st_0A = loc1;
/* IL_22: newobj Void .ctor()*/
st_07 = (function () { var result;
 result = new (asm0.StringWrapper)();
(asm0.x600000d)(result);
return result; })();
/* IL_27: stloc.3 */
loc3 = st_07;
/* IL_28: ldloc.3 */
st_08 = loc3;
/* IL_29: ldstr Hello*/
st_09 = "Hello";
/* IL_2E: stfld System.String Value*/
st_08.Value = st_09;
/* IL_33: ldloc.3 */
st_0B = loc3;
/* IL_34: callvirt Void set_Prop(StringWrapper)*/
(asm0.x600000a)(st_0A,st_0B);
/* IL_39: ldloc.0 */
st_0C = loc0;
/* IL_3A: callvirt IntWrapper get_Prop()*/
st_0D = (asm0.x6000009)(st_0C);
/* IL_3F: ldfld Int32 Value*/
st_0E = st_0D.Value;
/* IL_44: box System.Int32*/
st_0F = { 
'boxed': st_0E,
'toString': function () { 
 return this.boxed; } 
};
/* IL_49: call Void Log(System.Object)*/
braille_test_log(st_0F);
/* IL_4E: ldloc.1 */
st_10 = loc1;
/* IL_4F: callvirt StringWrapper get_Prop()*/
st_11 = (asm0.x6000009)(st_10);
/* IL_54: ldfld System.String Value*/
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
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
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
asm.entryPoint = asm.x600000e; })(asm0 || (asm0 = {}))