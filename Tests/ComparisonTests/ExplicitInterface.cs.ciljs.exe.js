
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "ExplicitInterface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.Main()*/

asm.x6000001_init = function ()
{
    
    (asm1["Program+X"]().init)();
    
    (asm1["Program+C"]().init)();
    
    asm.x6000001 = asm.x6000001_;
};;

asm.x6000001 = function ()
{
    
    asm.x6000001_init();
    
    return asm.x6000001_();
};;
asm.x6000001_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var loc0;
    var loc1;
    
    CILJS.initBaseTypes();
    
    t0 = asm1["Program+X"]();
    
    t1 = asm1["Program+C"]();
    
    t2 = asm0["System.Int32"]();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newobj(t0,asm1.x6000008,[null]);
    /* IL_07: newobj Void .ctor() */
    /* IL_0C: stloc.1  */
    
    loc1 = CILJS.newobj(t1,asm1.x6000006,[null]);
    /* IL_0D: ldloc.0  */
    /* IL_0E: ldloc.1  */
    /* IL_0F: callvirt Void F[System.Int32](Program+I`1[System.Int32]) */
    
    (asm1.x6000007(asm0["System.Int32"]()))(loc0,loc1);
    /* IL_14: nop  */
    /* IL_15: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void C.Program.I<System.Int32>.M()*/

asm.x6000004 = function Program_I_System_Int32__M(arg0)
{
    var t0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldstr int */
    /* IL_06: ldc.i4.0  */
    /* IL_07: newarr System.Object */
    /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(CILJS.newString("int"),CILJS.newArray(t0,0));
    /* IL_11: nop  */
    /* IL_12: ret  */
    
    return ;
};;/* System.Void C.Program.I<System.String>.M()*/

asm.x6000005 = function Program_I_System_String__M(arg0)
{
    var t0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldstr string */
    /* IL_06: ldc.i4.0  */
    /* IL_07: newarr System.Object */
    /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(CILJS.newString("string"),CILJS.newArray(t0,0));
    /* IL_11: nop  */
    /* IL_12: ret  */
    
    return ;
};;/*  C..ctor()*/

asm.x6000006 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void X.F<T>(I`1)*/

asm.x6000007_init = function (T)
{
    
    return function (arg0, arg1)
    {
        
        (asm1["Program+I`1"](T).init)();
    };
};;

asm.x6000007 = function (T)
{
    
    return function (arg0, arg1)
    {
        
        (asm.x6000007_init(T))(arg0,arg1);
        
        return (asm.x6000007_(T))(arg0,arg1);
    };
};;
asm.x6000007_ = function (T)
{
    
    return function F(arg0, arg1)
    {
        var t0;
        var t1;
        
        t0 = T;
        
        t1 = asm1["Program+I`1"](t0);
        /* IL_00: nop  */
        /* IL_01: ldarg.1  */
        /* IL_02: callvirt Void M() */
        
        (((arg1.ifacemap)[t1])[t0].x6000003)(CILJS.convertBoxToPointerAsNeeded(arg1));
        /* IL_07: nop  */
        /* IL_08: ret  */
        
        return ;
    };
};/*  X..ctor()*/

asm.x6000008 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.Program = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
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
asm["Program+I`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return {};
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program+I`1",false,false,true,true,false,[],[
                [asm1, "x6000003", "M"]
            ],null,CILJS.isInstInterface(type),Array,"asm1.t2000003",null);
        
        (type.GenericArguments)["asm1.t2000003"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000003<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm1.x6000003",asm1,"x6000003");
    },
    function (T)
    {
        
        return function I_1()
        {
            
            I_1.init();
        };
    });
asm["Program+C"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program+C",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declareVirtual(type,"asm1.x6000004",asm1,"x6000004");
        
        CILJS.declareVirtual(type,"asm1.x6000005",asm1,"x6000005");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm1["Program+I`1"](asm0["System.Int32"]()), asm0["System.Int32"]()],
            [
                ["x6000003", asm1, "x6000004"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm1["Program+I`1"](asm0["System.String"]()), asm0["System.String"]()],
            [
                ["x6000003", asm1, "x6000005"]
            ]);
    },
    function ()
    {
        
        return function C()
        {
            
            C.init();
        };
    });
asm["Program+X"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program+X",false,false,false,false,false,[],[
                [asm1, "x6000007", "F"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000005",null);
        
        type.TypeMetadataName = "asm1.t2000005";
        
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
asm.entryPoint = asm.x6000001;
CILJS.declareAssembly("ExplicitInterface.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=ExplicitInterface.cs.ciljs.exe.js.map
