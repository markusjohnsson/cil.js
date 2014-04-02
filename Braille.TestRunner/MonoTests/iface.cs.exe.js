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
asm.x600000a = function WriteIt() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.s 33*/
st_00 = 33;
/* IL_02: ret */
return st_00; };
asm.x600000b = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000c = function Main() { var __braille_args__;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var __braille_pos_0__;
 __braille_args__ = arguments;
loc0 = null;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm0.RealWriter)();
(asm0.x600000b)(result);
return result; })();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: ldloc.0 */
st_01 = loc0;
/* IL_07: callvirt Int32 WriteIt()*/
st_02 = (st_01.IHelloWorldWriter.x6000009)(st_01);
/* IL_0C: ldc.i4.s 33*/
st_03 = 33;
/* IL_0E: beq.s IL_12*/
if (st_02 === st_03){
__braille_pos_0__ = 0x12;continue;
}
/* IL_10: ldc.i4.1 */
st_04 = 1;
/* IL_11: ret */
return st_04;
case 0x12:
/* IL_12: ldc.i4.0 */
st_05 = 0;
/* IL_13: ret */
return st_05;
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
 function IHelloWorldWriter() { 
  };
IHelloWorldWriter.prototype = { 
 
};;
IHelloWorldWriter.IsValueType = false;
IHelloWorldWriter.prototype.vtable = { 
'x6000009': asm.x6000009 
};;
return IHelloWorldWriter; })();
asm.IHelloWorldWriter = self;
self = (function () { 
 function RealWriter() { 
  };
RealWriter.prototype = { 
 
};;
RealWriter.IsValueType = false;
RealWriter.prototype.vtable = { 
'x600000a': asm.x600000a,
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
RealWriter.prototype.IHelloWorldWriter = { 
'x6000009': asm.x600000a 
};;
return RealWriter; })();
asm.RealWriter = self;
self = (function () { 
 function ProjectName() { 
  };
ProjectName.prototype = { 
 
};;
ProjectName.IsValueType = false;
ProjectName.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return ProjectName; })();
asm.ProjectName = self;
asm.entryPoint = asm.x600000c; })(asm0 || (asm0 = {}));
