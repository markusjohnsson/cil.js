var asm; (function (asm) { var self;
 asm.x6000001 = function Log() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void WriteLine(System.Object)*/
(asm.x60009a2)(st_00);
/* IL_06: ret */
return ; };
asm.x6000002 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm.x6000001)(st_00);
/* IL_06: ret */
return ; };
asm.x6000004 = function get_Function() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldfld System.String <Function>k__BackingField*/
st_01 = (st_00)["<Function>k__BackingField"];
/* IL_06: ret */
return st_01; };
asm.x6000005 = function set_Function() { var __braille_args__;
var st_00;
var st_01;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldarg.1 */
st_01 = __braille_args__[1];
/* IL_02: stfld System.String <Function>k__BackingField*/
(st_00)["<Function>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x6000003 = function _ctor() { var __braille_args__;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm.x60007a5)(st_00);
/* IL_06: ldarg.0 */
st_01 = __braille_args__[0];
/* IL_07: ldarg.1 */
st_02 = __braille_args__[1];
/* IL_08: call Void set_Function(System.String)*/
(asm.x6000005)(st_01,st_02);
/* IL_0D: ret */
return ; };
asm.x6000006 = function WriteIt() { var __braille_args__;
 __braille_args__ = arguments; };
asm.x6000007 = function WriteIt() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.s 33*/
st_00 = 33;
/* IL_02: ret */
return st_00; };
asm.x6000008 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm.x6000001)(st_00);
/* IL_06: ret */
return ; };
asm.x6000009 = function Main() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var __braille_pos_0__;
var loc0;
 __braille_args__ = arguments;
__braille_pos_0__ = 0x0;
while (true){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: newobj Void .ctor()*/
st_00 = new (asm.RealWriter)();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: ldloc.0 */
st_01 = loc0;
/* IL_07: callvirt Int32 WriteIt()*/
st_02 = (st_01.IHelloWorldWriter.x6000006)(st_01);
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
asm.x600000a = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm.x6000001)(st_00);
/* IL_06: ret */
return ; };
self = (function () { 
 function TestLog() { 
  };
TestLog.prototype = { 
'vtable': { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
} 
};
return TestLog; })();
asm.TestLog = self;
self = (function () { 
 function JsImportAttribute() { 
  };
JsImportAttribute.prototype = { 
'<Function>k__BackingField': null,
'vtable': { 
'x6000003': asm.x60007a6,
'x6000006': asm.x60007a7,
'x60007a8': asm.x60007a8,
'x60007a9': asm.x60007a9,
'x60007aa': asm.x60007aa,
'x6000002': asm.x6000002 
},
'System.Runtime.InteropServices._Attribute': { 
'x6000781': asm.x60007ab,
'x6000782': asm.x60007ac,
'x6000783': asm.x60007ad,
'x6000784': asm.x60007ae 
} 
};
return JsImportAttribute; })();
asm.JsImportAttribute = self;
self = (function () { 
 function IHelloWorldWriter() { 
  };
IHelloWorldWriter.prototype = { 
'vtable': { 
'x6000006': asm.x6000006 
} 
};
return IHelloWorldWriter; })();
asm.IHelloWorldWriter = self;
self = (function () { 
 function RealWriter() { 
  };
RealWriter.prototype = { 
'vtable': { 
'x6000007': asm.x6000007,
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
},
'IHelloWorldWriter': { 
'x6000006': asm.x6000007 
} 
};
return RealWriter; })();
asm.RealWriter = self;
self = (function () { 
 function ProjectName() { 
  };
ProjectName.prototype = { 
'vtable': { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
} 
};
return ProjectName; })();
asm.ProjectName = self;
asm.entryPoint = asm.x6000009; })(asm || (asm = {}))