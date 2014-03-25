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
asm.x6000009 = function Main() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
 __braille_args__ = arguments;
/* IL_00: ldloca.s 0*/
st_00 = { 
'w': function () { 
 loc0 = (arguments)[0]; },
'r': function () { 
 return loc0; } 
};
/* IL_03: initobj S*/
(st_00.w)(new (asm0.S)());
/* IL_08: ldloca.s 0*/
st_01 = { 
'w': function () { 
 loc0 = (arguments)[0]; },
'r': function () { 
 return loc0; } 
};
/* IL_0A: ldfld Int32 X*/
st_02 = (st_01.r)().X;
/* IL_0F: box System.Int32*/
st_03 = { 
'boxed': st_02,
'toString': function () { 
 return this.boxed; } 
};
/* IL_14: call Void Log(System.Object)*/
braille_test_log(st_03);
/* IL_19: ldloca.s 0*/
st_04 = { 
'w': function () { 
 loc0 = (arguments)[0]; },
'r': function () { 
 return loc0; } 
};
/* IL_1B: ldfld Int32 Y*/
st_05 = (st_04.r)().Y;
/* IL_20: box System.Int32*/
st_06 = { 
'boxed': st_05,
'toString': function () { 
 return this.boxed; } 
};
/* IL_25: call Void Log(System.Object)*/
braille_test_log(st_06);
/* IL_2A: ret */
return ; };
asm.x600000a = function _ctor() { var __braille_args__;
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
 function S() { 
  };
S.prototype = { 
 
};;
S.IsValueType = true;
S.prototype.X = 0;;
S.prototype.Y = 0;;
S.prototype.vtable = { 
'x6000003': asm.x6000056,
'x6000006': asm.x6000057,
'x6000002': asm.x6000059 
};;
return S; })();
asm.S = self;
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