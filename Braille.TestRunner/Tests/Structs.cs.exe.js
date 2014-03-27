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
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
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
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x6000009 = function Main() { var __braille_args__;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x600000a = function Mutate() { var __braille_args__;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode 0*/
st_00 = { 
'w': function () { 
 __braille_args__[0] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[0]; } 
};
/* IL_02: IKVM.Reflection.Emit.OpCode 999*/
st_01 = 999;
/* IL_07: IKVM.Reflection.Emit.OpCode Int32 Value*/
(st_00.r)().Value = st_01;
/* IL_0C: IKVM.Reflection.Emit.OpCode */
st_02 = __braille_args__[0];
/* IL_0D: IKVM.Reflection.Emit.OpCode Void Print(A)*/
(asm0.x600000b)(st_02);
/* IL_12: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x600000b = function Print() { var __braille_args__;
var st_00;
var st_01;
var st_02;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode 0*/
st_00 = { 
'w': function () { 
 __braille_args__[0] = (arguments)[0]; },
'r': function () { 
 return __braille_args__[0]; } 
};
/* IL_02: IKVM.Reflection.Emit.OpCode Int32 Value*/
st_01 = (st_00.r)().Value;
/* IL_07: IKVM.Reflection.Emit.OpCode System.Int32*/
st_02 = { 
'boxed': st_01,
'toString': function () { 
 return this.boxed; } 
};
/* IL_0C: IKVM.Reflection.Emit.OpCode Void Log(System.Object)*/
braille_test_log(st_02);
/* IL_11: IKVM.Reflection.Emit.OpCode */
return ; };
asm.x600000c = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: IKVM.Reflection.Emit.OpCode */
st_00 = __braille_args__[0];
/* IL_01: IKVM.Reflection.Emit.OpCode Void .ctor()*/
/* IL_06: IKVM.Reflection.Emit.OpCode */
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
A.IsValueType = true;
A.prototype.Value = 0;;
A.prototype.vtable = { 
'x6000003': asm.x6000056,
'x6000006': asm.x6000057,
'x6000002': asm.x6000059 
};;
return A; })();
asm.A = self;
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
asm.entryPoint = asm.x6000009; })(asm0 || (asm0 = {}))