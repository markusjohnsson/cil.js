
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "CallGenericMethod.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* T A`1.get_Prop()*/

asm.x6000003 = function get_Prop(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld T <Prop>k__BackingField */
    /* IL_06: ret  */
    
    return arg0["A_1<Prop>k__BackingField"];
};;/* System.Void A`1.set_Prop(T)*/

asm.x6000004 = function set_Prop(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: stfld T <Prop>k__BackingField */
    
    arg0["A_1<Prop>k__BackingField"] = arg1;
    /* IL_07: ret  */
    
    return ;
};;/*  A`1..ctor()*/

asm.x6000005 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000006 = function Main()
{
    var t0;
    var t1;
    
    CILJS.initBaseTypes();
    
    t0 = asm0["System.Int32"]();
    
    t1 = asm0["System.String"]();
    /* IL_00: nop  */
    /* IL_01: ldc.i4.s 123 */
    /* IL_03: call Void Y[System.Int32](System.Int32) */
    
    (asm1.x6000007(asm0["System.Int32"]()))(123);
    /* IL_08: nop  */
    /* IL_09: ldstr Hello */
    /* IL_0E: call Void Y[System.String](System.String) */
    
    (asm1.x6000007(asm0["System.String"]()))(CILJS.newString("Hello"));
    /* IL_13: nop  */
    /* IL_14: ret  */
    
    return ;
};;/* static System.Void Program.Y<T>(T)*/

asm.x6000007_init = function (T)
{
    
    return function (arg0)
    {
        
        (asm1["A`1"](T).init)();
    };
};;

asm.x6000007 = function (T)
{
    
    return function (arg0)
    {
        
        (asm.x6000007_init(T))(arg0);
        
        return (asm.x6000007_(T))(arg0);
    };
};;
asm.x6000007_ = function (T)
{
    
    return function Y(arg0)
    {
        var t0;
        var t1;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        
        t0 = T;
        
        t1 = asm1["A`1"](t0);
        
        
        
        
        
        
        
        
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        
        st_00 = CILJS.newobj(t1,asm1.x6000005,[null]);
        /* IL_06: dup  */
        
        st_03 = st_01 = st_00;
        /* IL_07: ldarg.0  */
        
        st_02 = arg0;
        /* IL_08: callvirt Void set_Prop(T) */
        
        (st_01.vtable)["asm1.x6000004"](st_01,st_02);
        /* IL_0D: nop  */
        /* IL_0E: call Void X[T](I`1[T]) */
        
        (asm1.x6000008(T))(st_03);
        /* IL_13: nop  */
        /* IL_14: ret  */
        
        return ;
    };
};/* static System.Void Program.X<T>(I`1)*/

asm.x6000008_init = function (T)
{
    
    return function (arg0)
    {
        
        (asm1["I`1"](T).init)();
    };
};;

asm.x6000008 = function (T)
{
    
    return function (arg0)
    {
        
        (asm.x6000008_init(T))(arg0);
        
        return (asm.x6000008_(T))(arg0);
    };
};;
asm.x6000008_ = function (T)
{
    
    return function X(arg0)
    {
        var t0;
        var t1;
        
        t0 = T;
        
        t1 = asm1["I`1"](t0);
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: callvirt T get_Prop() */
        /* IL_07: box T */
        /* IL_0C: call Void WriteLine(System.Object) */
        
        asm0.x6000072(CILJS.box((((arg0.ifacemap)[t1])[t0].x6000001)(CILJS.convertBoxToPointerAsNeeded(arg0)),t0));
        /* IL_11: nop  */
        /* IL_12: ret  */
        
        return ;
    };
};/*  Program..ctor()*/

asm.x6000009 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm["I`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return {};
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"I`1",false,false,true,true,false,[],[
                [asm1, "x6000001", "get_Prop"],
                [asm1, "x6000002", "set_Prop"]
            ],null,CILJS.isInstInterface(type),Array,"asm1.t2000002",null);
        
        (type.GenericArguments)["asm1.t2000002"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000002<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm1.x6000001",asm1,"x6000001");
        
        CILJS.declareVirtual(type,"asm1.x6000002",asm1,"x6000002");
    },
    function (T)
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
                [asm1, "x6000003", "get_Prop"],
                [asm1, "x6000004", "set_Prop"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        (type.GenericArguments)["asm1.t2000003"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000003<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm1.x6000003",asm1,"x6000003");
        
        CILJS.declareVirtual(type,"asm1.x6000004",asm1,"x6000004");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm1["I`1"](T), T],
            [
                ["x6000001", asm1, "x6000003"],
                ["x6000002", asm1, "x6000004"]
            ]);
    },
    function (T)
    {
        
        return function A_1()
        {
            
            A_1.init();
            
            this["A_1<Prop>k__BackingField"] = T.Default;
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
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
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
CILJS.declareAssembly("CallGenericMethod.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=CallGenericMethod.cs.ciljs.exe.js.map
