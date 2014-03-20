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
asm.x6000006 = function Add() { var __braille_args__;
 __braille_args__ = arguments; };
asm.x6000007 = function Add2() { var __braille_args__;
 __braille_args__ = arguments; };
asm.x6000008 = function Add() { var __braille_args__;
 __braille_args__ = arguments; };
asm.x6000009 = function Add() { var __braille_args__;
 __braille_args__ = arguments; };
asm.x600000a = function IA_Add() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.5 */
st_00 = 5;
/* IL_01: ret */
return st_00; };
asm.x600000b = function IA_Add2() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.6 */
st_00 = 6;
/* IL_01: ret */
return st_00; };
asm.x600000c = function IB_Add() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.7 */
st_00 = 7;
/* IL_01: ret */
return st_00; };
asm.x600000d = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm.x6000001)(st_00);
/* IL_06: ret */
return ; };
asm.x600000e = function IC_Add() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.8 */
st_00 = 8;
/* IL_01: ret */
return st_00; };
asm.x600000f = function IA_Add() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.s 9*/
st_00 = 9;
/* IL_02: ret */
return st_00; };
asm.x6000010 = function IA_Add2() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.s 10*/
st_00 = 10;
/* IL_02: ret */
return st_00; };
asm.x6000011 = function IB_Add() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.s 11*/
st_00 = 11;
/* IL_02: ret */
return st_00; };
asm.x6000012 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm.x6000001)(st_00);
/* IL_06: ret */
return ; };
asm.x6000013 = function Test() { var __braille_args__;
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
var __braille_pos_0__;
 __braille_args__ = arguments;
__braille_pos_0__ = 0x0;
while (true){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: ldc.i4.0 */
st_01 = 0;
/* IL_02: callvirt Int32 Add2(Int32)*/
st_02 = (st_00.IA.x6000007)(st_00,st_01);
/* IL_07: ldc.i4.6 */
st_03 = 6;
/* IL_08: beq.s IL_0C*/
if (st_02 === st_03){
__braille_pos_0__ = 0xC;continue;
}
/* IL_0A: ldc.i4.1 */
st_04 = 1;
/* IL_0B: ret */
return st_04;
case 0xC:
/* IL_0C: ldarg.0 */
st_05 = __braille_args__[0];
/* IL_0D: ldc.i4.0 */
st_06 = 0;
/* IL_0E: callvirt Int32 Add(Int32)*/
st_07 = (st_05.IB.x6000008)(st_05,st_06);
/* IL_13: ldc.i4.7 */
st_08 = 7;
/* IL_14: beq.s IL_18*/
if (st_07 === st_08){
__braille_pos_0__ = 0x18;continue;
}
/* IL_16: ldc.i4.1 */
st_09 = 1;
/* IL_17: ret */
return st_09;
case 0x18:
/* IL_18: ldc.i4.0 */
st_0A = 0;
/* IL_19: ret */
return st_0A;
}
} };
asm.x6000014 = function Main() { var __braille_args__;
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
st_00 = new (asm.D)();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: newobj Void .ctor()*/
st_01 = new (asm.E)();
/* IL_0B: pop */

/* IL_0C: ldloc.0 */
st_02 = loc0;
/* IL_0D: call Int32 Test(ID)*/
st_03 = (asm.x6000013)(st_02);
/* IL_12: brfalse.s IL_16*/
if ((!st_03)){
__braille_pos_0__ = 0x16;continue;
}
/* IL_14: ldc.i4.1 */
st_04 = 1;
/* IL_15: ret */
return st_04;
case 0x16:
/* IL_16: ldc.i4.0 */
st_05 = 0;
/* IL_17: ret */
return st_05;
}
} };
asm.x6000015 = function _ctor() { var __braille_args__;
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
 function IA() { 
  };
IA.prototype = { 
'vtable': { 
'x6000006': asm.x6000006,
'x6000007': asm.x6000007 
} 
};
return IA; })();
asm.IA = self;
self = (function () { 
 function IB() { 
  };
IB.prototype = { 
'vtable': { 
'x6000008': asm.x6000008 
} 
};
return IB; })();
asm.IB = self;
self = (function () { 
 function IC() { 
  };
IC.prototype = { 
'vtable': { 
'x6000009': asm.x6000009 
} 
};
return IC; })();
asm.IC = self;
self = (function () { 
 function ID() { 
  };
ID.prototype = { 
'vtable': { 
 
} 
};
return ID; })();
asm.ID = self;
self = (function () { 
 function D() { 
  };
D.prototype = { 
'vtable': { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
},
'ID': { 
 
},
'IA': { 
'x6000006': asm.x600000a,
'x6000007': asm.x600000b 
},
'IB': { 
'x6000008': asm.x600000c 
} 
};
return D; })();
asm.D = self;
self = (function () { 
 function E() { 
  };
E.prototype = { 
'vtable': { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
},
'IC': { 
'x6000009': asm.x600000e 
},
'ID': { 
 
},
'IA': { 
'x6000006': asm.x600000f,
'x6000007': asm.x6000010 
},
'IB': { 
'x6000008': asm.x6000011 
} 
};
return E; })();
asm.E = self;
self = (function () { 
 function C() { 
  };
C.prototype = { 
'vtable': { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
} 
};
return C; })();
asm.C = self;
asm.entryPoint = asm.x6000014; })(asm || (asm = {}))