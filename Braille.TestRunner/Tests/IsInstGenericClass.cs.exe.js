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
asm.x600000b = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000c = function (T) { 
 return function Test() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var __braille_pos_0__;
 __braille_args__ = arguments;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: isinst T*/
st_01 = (st_00 instanceof T);
/* IL_06: brtrue.s IL_0F*/
if (st_01){
__braille_pos_0__ = 0xF;continue;
}
/* IL_08: ldstr false*/
st_02 = "false";
/* IL_0D: br.s IL_14*/
__braille_pos_0__ = 0x14;
continue;
case 0xF:
/* IL_0F: ldstr true*/
st_02 = "true";
case 0x14:
/* IL_14: call Void Log(System.Object)*/
braille_test_log(st_02);
/* IL_19: ret */
return ;
}
} }; };
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
var st_01;
var st_02;
var st_03;
 __braille_args__ = arguments;
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm0.A)();
(asm0.x6000009)(result);
return result; })();
/* IL_05: call Void Test(System.Object)*/
((asm0.x600000c)(asm0.A))(st_00);
/* IL_0A: newobj Void .ctor()*/
st_01 = (function () { var result;
 result = new (asm0.B)();
(asm0.x600000a)(result);
return result; })();
/* IL_0F: call Void Test(System.Object)*/
((asm0.x600000c)(asm0.A))(st_01);
/* IL_14: newobj Void .ctor()*/
st_02 = (function () { var result;
 result = new (asm0.C)();
(asm0.x600000b)(result);
return result; })();
/* IL_19: call Void Test(System.Object)*/
((asm0.x600000c)(asm0.A))(st_02);
/* IL_1E: ldnull */
st_03 = null;
/* IL_1F: call Void Test(System.Object)*/
((asm0.x600000c)(asm0.A))(st_03);
/* IL_24: ret */
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
self = (function () { 
 function A() { 
  };
A.prototype = { 
 
};;
A.IsValueType = false;
A.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return A; })();
asm.A = self;
self = (function () { 
 function B() { 
  };
B.prototype = new (asm.A)();;
B.IsValueType = false;
B.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return B; })();
asm.B = self;
self = (function () { 
 function C() { 
  };
C.prototype = { 
 
};;
C.IsValueType = false;
C.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return C; })();
asm.C = self;
self = (function () { var ct;
 ct = { 
 
};
return function (T) { var c;
 c = tree_get([ T ],ct);
if (c){
return c;
}
function D_1() { 
  };
D_1.prototype = { 
 
};;
D_1.IsValueType = false;
D_1.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
c = D_1;
tree_set([ T ],ct,c);
return c; }; })();
(asm)["D`1"] = self;
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