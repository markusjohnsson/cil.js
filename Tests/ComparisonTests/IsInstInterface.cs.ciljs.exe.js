
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "IsInstInterface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/*  A..ctor()*/

asm.x6000001 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  B..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm1.x6000001(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  C..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm1.x6000001(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  D..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm1.x6000003(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000005_init = function ()
{
    
    (asm1.A().init)();
    
    (asm1.B().init)();
    
    (asm1.C().init)();
    
    (asm1.D().init)();
    
    asm.x6000005 = asm.x6000005_;
};;

asm.x6000005 = function ()
{
    
    asm.x6000005_init();
    
    return asm.x6000005_();
};;
asm.x6000005_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var t3;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.A();
    
    t1 = asm1.B();
    
    t2 = asm1.C();
    
    t3 = asm1.D();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: call Void TestImpl(System.Object) */
    
    asm1.x6000006(CILJS.newobj(t0,asm1.x6000001,[null]));
    /* IL_0B: nop  */
    /* IL_0C: newobj Void .ctor() */
    /* IL_11: call Void TestImpl(System.Object) */
    
    asm1.x6000006(CILJS.newobj(t1,asm1.x6000002,[null]));
    /* IL_16: nop  */
    /* IL_17: newobj Void .ctor() */
    /* IL_1C: call Void TestImpl(System.Object) */
    
    asm1.x6000006(CILJS.newobj(t2,asm1.x6000003,[null]));
    /* IL_21: nop  */
    /* IL_22: newobj Void .ctor() */
    /* IL_27: call Void TestImpl(System.Object) */
    
    asm1.x6000006(CILJS.newobj(t3,asm1.x6000004,[null]));
    /* IL_2C: nop  */
    /* IL_2D: ret  */
    
    return ;
};/* static System.Void Program.TestImpl(Object)*/

asm.x6000006_init = function (arg0)
{
    
    (asm1.I1().init)();
    
    (asm1.I2().init)();
    
    (asm1.I3().init)();
    
    asm.x6000006 = asm.x6000006_;
};;

asm.x6000006 = function (arg0)
{
    
    asm.x6000006_init(arg0);
    
    return asm.x6000006_(arg0);
};;
asm.x6000006_ = function TestImpl(arg0)
{
    var t0;
    var t1;
    var t2;
    var t3;
    var st_02;
    var st_03;
    var st_04;
    var st_07;
    var st_08;
    var st_09;
    var st_0C;
    var st_0D;
    var st_0E;
    var in_block_0;
    var __pos__;
    
    t0 = asm1.I1();
    
    t1 = asm0["System.Object"]();
    
    t2 = asm1.I2();
    
    t3 = asm1.I3();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: isinst I1 */
            /* IL_07: brtrue.s IL_10 */
            
            if (t0.IsInst(arg0)){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_09: ldstr false */
            
            st_03 = CILJS.newString("false");
            /* IL_0E: br.s IL_15 */
            
            __pos__ = 0x15;
            
            continue;
            case 0x10:
            /* IL_10: ldstr true */
            
            st_03 = CILJS.newString("true");
            case 0x15:
            /* IL_15: ldc.i4.0  */
            
            st_02 = 0;
            /* IL_16: newarr System.Object */
            
            st_04 = CILJS.newArray(t1,st_02);
            /* IL_1B: call Void WriteLine(System.String, System.Object[]) */
            
            asm0.x6000073(st_03,st_04);
            /* IL_20: nop  */
            /* IL_21: ldarg.0  */
            /* IL_22: isinst I2 */
            /* IL_27: brtrue.s IL_30 */
            
            if (t2.IsInst(arg0)){
                
                __pos__ = 0x30;
                
                continue;
            }
            /* IL_29: ldstr false */
            
            st_08 = CILJS.newString("false");
            /* IL_2E: br.s IL_35 */
            
            __pos__ = 0x35;
            
            continue;
            case 0x30:
            /* IL_30: ldstr true */
            
            st_08 = CILJS.newString("true");
            case 0x35:
            /* IL_35: ldc.i4.0  */
            
            st_07 = 0;
            /* IL_36: newarr System.Object */
            
            st_09 = CILJS.newArray(t1,st_07);
            /* IL_3B: call Void WriteLine(System.String, System.Object[]) */
            
            asm0.x6000073(st_08,st_09);
            /* IL_40: nop  */
            /* IL_41: ldarg.0  */
            /* IL_42: isinst I3 */
            /* IL_47: brtrue.s IL_50 */
            
            if (t3.IsInst(arg0)){
                
                __pos__ = 0x50;
                
                continue;
            }
            /* IL_49: ldstr false */
            
            st_0D = CILJS.newString("false");
            /* IL_4E: br.s IL_55 */
            
            __pos__ = 0x55;
            
            continue;
            case 0x50:
            /* IL_50: ldstr true */
            
            st_0D = CILJS.newString("true");
            case 0x55:
            /* IL_55: ldc.i4.0  */
            
            st_0C = 0;
            /* IL_56: newarr System.Object */
            
            st_0E = CILJS.newArray(t1,st_0C);
            /* IL_5B: call Void WriteLine(System.String, System.Object[]) */
            
            asm0.x6000073(st_0D,st_0E);
            /* IL_60: nop  */
            /* IL_61: ret  */
            
            return ;
        }
    }
};/*  Program..ctor()*/

asm.x6000007 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.I1 = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"I1",false,false,true,false,false,[],[],null,CILJS.isInstInterface(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
    },
    function ()
    {
        
        return function I1()
        {
            
            I1.init();
        };
    });
asm.I2 = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"I2",false,false,true,false,false,[],[],null,CILJS.isInstInterface(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
    },
    function ()
    {
        
        return function I2()
        {
            
            I2.init();
        };
    });
asm.I3 = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"I3",false,false,true,false,false,[],[],null,CILJS.isInstInterface(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.implementInterface(
            type,
            [asm1.I2()],
            null);
    },
    function ()
    {
        
        return function I3()
        {
            
            I3.init();
        };
    });
asm.A = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"A",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000005",null);
        
        type.TypeMetadataName = "asm1.t2000005";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function A()
        {
            
            A.init();
        };
    });
asm.B = CILJS.declareType(
    [],
    function ()
    {
        
        return asm1.A();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"B",false,false,false,false,false,[],[],asm1.A(),CILJS.isInstDefault(type),Array,"asm1.t2000006",null);
        
        type.TypeMetadataName = "asm1.t2000006";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm1.I1()],
            []);
        
        CILJS.implementInterface(
            type,
            [asm1.I2()],
            []);
    },
    function ()
    {
        
        return function B()
        {
            
            B.init();
        };
    });
asm.C = CILJS.declareType(
    [],
    function ()
    {
        
        return asm1.A();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"C",false,false,false,false,false,[],[],asm1.A(),CILJS.isInstDefault(type),Array,"asm1.t2000007",null);
        
        type.TypeMetadataName = "asm1.t2000007";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm1.I3()],
            []);
        
        CILJS.implementInterface(
            type,
            [asm1.I2()],
            []);
    },
    function ()
    {
        
        return function C()
        {
            
            C.init();
        };
    });
asm.D = CILJS.declareType(
    [],
    function ()
    {
        
        return asm1.C();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"D",false,false,false,false,false,[],[],asm1.C(),CILJS.isInstDefault(type),Array,"asm1.t2000008",null);
        
        type.TypeMetadataName = "asm1.t2000008";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm1.I2()],
            []);
        
        CILJS.implementInterface(
            type,
            [asm1.I3()],
            []);
    },
    function ()
    {
        
        return function D()
        {
            
            D.init();
        };
    });
asm.Program = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000009",null);
        
        type.TypeMetadataName = "asm1.t2000009";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Program()
        {
            
            Program.init();
        };
    });
asm.entryPoint = asm.x6000005;
CILJS.declareAssembly("IsInstInterface.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=IsInstInterface.cs.ciljs.exe.js.map
