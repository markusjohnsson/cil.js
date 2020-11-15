
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "GenericCallvirtBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.Void A`1.Y<TResult>()*/

asm.x6000001 = function (TResult)
{
    
    return function Y(arg0)
    {
        var t0;
        var t1;
        
        t0 = TResult;
        
        t1 = asm0["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldtoken TResult */
        /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_0B: callvirt String get_Name() */
        /* IL_10: ldc.i4.0  */
        /* IL_11: newarr System.Object */
        /* IL_16: call Void WriteLine(System.String, System.Object[]) */
        
        asm0.x60000a2(((asm0.x6000074(CILJS.new_handle(asm0["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60001c5"])(asm0.x6000074(CILJS.new_handle(asm0["System.RuntimeTypeHandle"](),t0))),CILJS.new_array(t1,0));
        /* IL_1B: nop  */
        /* IL_1C: ret  */
        
        return ;
    };
};;/*  A`1..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000003_init = function ()
{
    
    (asm1["A`1"](asm0["System.String"]()).init)();
    
    (asm1["A`1+B"](asm0["System.String"]()).init)();
    
    asm.x6000003 = asm.x6000003_;
};;

asm.x6000003 = function ()
{
    
    asm.x6000003_init();
    
    return asm.x6000003_();
};;
asm.x6000003_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var loc0;
    
    CILJS.init_base_types();
    
    t0 = asm0["System.String"]();
    
    t1 = asm1["A`1"](t0);
    
    t2 = asm1["A`1+B"](t0);
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: newobj Void .ctor(A`1[System.String]) */
    /* IL_0B: stloc.0  */
    
    loc0 = CILJS.newobj(t2,asm1.x6000005,[null, CILJS.newobj(t1,asm1.x6000002,[null])]);
    /* IL_0C: ldloc.0  */
    /* IL_0D: callvirt Void X() */
    
    asm1.x6000006(loc0);
    /* IL_12: nop  */
    /* IL_13: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void B.X()*/

asm.x6000006 = function X(arg0)
{
    var t0;
    
    t0 = ((arg0.constructor.GenericArguments)["asm1.t2000004"])[0];
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld A`1 a */
    /* IL_07: callvirt Void Y[T]() */
    
    (asm1.x6000001(((arg0.constructor.GenericArguments)["asm1.t2000004"])[0]))(arg0.Ba);
    /* IL_0C: nop  */
    /* IL_0D: ret  */
    
    return ;
};;/*  B..ctor(A`1)*/

asm.x6000005 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: ldarg.1  */
    /* IL_0A: stfld A`1 a */
    
    arg0.Ba = arg1;
    /* IL_0F: ret  */
    
    return ;
};;
asm["A`1"] = CILJS.declare_type(
    ["T"],
    function (T)
    {
        
        return asm0["System.Object"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"A`1",false,false,false,true,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000002",null);
        
        (type.GenericArguments)["asm1.t2000002"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000002<" + (T.TypeMetadataName + ">"));
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function (T)
    {
        
        return function A_1()
        {
            
            A_1.init();
        };
    });
asm.Program = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function Program()
        {
            
            Program.init();
        };
    });
asm["A`1+B"] = CILJS.declare_type(
    ["T"],
    function (T)
    {
        
        return asm0["System.Object"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"A`1+B",false,false,false,true,false,[],[
                [asm1, "x6000006", "X"]
            ],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000004",null);
        
        (type.GenericArguments)["asm1.t2000004"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000004<" + (T.TypeMetadataName + ">"));
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function (T)
    {
        
        return function B()
        {
            
            B.init();
            
            this.Ba = null;
        };
    });
asm.entryPoint = asm.x6000003;
CILJS.declare_assembly("GenericCallvirtBug.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=GenericCallvirtBug.cs.ciljs.exe.js.map
