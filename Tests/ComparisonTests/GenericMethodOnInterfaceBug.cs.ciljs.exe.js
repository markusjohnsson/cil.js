
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "GenericMethodOnInterfaceBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.Void A`1.X<T2>(String)*/

asm.x6000002 = function (T2)
{
    
    return function X(arg0, arg1)
    {
        var t0;
        var t1;
        
        t0 = T2;
        
        t1 = asm0["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldtoken T2 */
        /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_0B: callvirt String get_FullName() */
        /* IL_10: ldc.i4.0  */
        /* IL_11: newarr System.Object */
        /* IL_16: call Void WriteLine(System.String, System.Object[]) */
        
        asm0.x6000073(((asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x6000044"])(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))),CILJS.newArray(t1,0));
        /* IL_1B: nop  */
        /* IL_1C: ldarg.1  */
        /* IL_1D: ldc.i4.0  */
        /* IL_1E: newarr System.Object */
        /* IL_23: call Void WriteLine(System.String, System.Object[]) */
        
        asm0.x6000073(arg1,CILJS.newArray(t1,0));
        /* IL_28: nop  */
        /* IL_29: ret  */
        
        return ;
    };
};;/*  A`1..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  X..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  Y..ctor()*/

asm.x6000005 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000006_init = function ()
{
    
    (asm1.X().init)();
    
    (asm1["A`1"](asm1.X()).init)();
    
    (asm1.Y().init)();
    
    (asm1["I`1"](asm1.X()).init)();
    
    asm.x6000006 = asm.x6000006_;
};;

asm.x6000006 = function ()
{
    
    asm.x6000006_init();
    
    return asm.x6000006_();
};;
asm.x6000006_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var t3;
    var loc0;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.X();
    
    t1 = asm1["A`1"](t0);
    
    t2 = asm1.Y();
    
    t3 = asm1["I`1"](t0);
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newobj(t1,asm1.x6000003,[null]);
    /* IL_07: ldloc.0  */
    /* IL_08: ldstr test1 */
    /* IL_0D: callvirt Void X[Y](System.String) */
    
    ((loc0.vtable)["asm1.x6000002"](asm1.Y()))(loc0,CILJS.newString("test1"));
    /* IL_12: nop  */
    /* IL_13: ldloc.0  */
    /* IL_14: ldstr test2 */
    /* IL_19: callvirt Void X[Y](System.String) */
    
    ((((loc0.ifacemap)[t3])[t0].x6000001)(asm1.Y()))(loc0,CILJS.newString("test2"));
    /* IL_1E: nop  */
    /* IL_1F: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000007 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm["I`1"] = CILJS.declareType(
    ["T1"],
    function (T1)
    {
        
        return {};
    },
    function (type, T1)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"I`1",false,false,true,true,false,[],[
                [asm1, "x6000001", "X"]
            ],null,CILJS.isInstInterface(type),Array,"asm1.t2000002",null);
        
        (type.GenericArguments)["asm1.t2000002"] = [T1];
        
        type.TypeMetadataName = ("asm1.t2000002<" + (T1.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm1.x6000001",asm1,"x6000001");
    },
    function (T1)
    {
        
        return function I_1()
        {
            
            I_1.init();
        };
    });
asm["A`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return asm0["System.Object"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"A`1",false,false,false,true,false,[],[
                [asm1, "x6000002", "X"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        (type.GenericArguments)["asm1.t2000003"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000003<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm1.x6000002",asm1,"x6000002");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm1["I`1"](T), T],
            [
                ["x6000001", asm1, "x6000002"]
            ]);
    },
    function (T)
    {
        
        return function A_1()
        {
            
            A_1.init();
        };
    });
asm.X = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"X",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function X()
        {
            
            X.init();
        };
    });
asm.Y = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Y",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000005",null);
        
        type.TypeMetadataName = "asm1.t2000005";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Y()
        {
            
            Y.init();
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
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000006",null);
        
        type.TypeMetadataName = "asm1.t2000006";
        
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
asm.entryPoint = asm.x6000006;
CILJS.declareAssembly("GenericMethodOnInterfaceBug.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=GenericMethodOnInterfaceBug.cs.ciljs.exe.js.map
