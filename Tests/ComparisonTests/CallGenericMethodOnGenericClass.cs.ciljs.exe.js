
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "CallGenericMethodOnGenericClass.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/*  A..ctor()*/

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
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void C`1.X<T2>()*/

asm.x6000003 = function (T2)
{
    
    return function X(arg0)
    {
        var t0;
        var t1;
        var t2;
        
        t0 = ((arg0.constructor.GenericArguments)["asm1.t2000004"])[0];
        
        t1 = asm0["System.Object"]();
        
        t2 = T2;
        /* IL_00: nop  */
        /* IL_01: ldtoken T */
        /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_0B: callvirt String get_Name() */
        /* IL_10: ldc.i4.0  */
        /* IL_11: newarr System.Object */
        /* IL_16: call Void WriteLine(System.String, System.Object[]) */
        
        asm0.x60000a2(((asm0.x6000074(CILJS.new_handle(asm0["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60001c5"])(asm0.x6000074(CILJS.new_handle(asm0["System.RuntimeTypeHandle"](),t0))),CILJS.new_array(t1,0));
        /* IL_1B: nop  */
        /* IL_1C: ldtoken T2 */
        /* IL_21: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_26: callvirt String get_Name() */
        /* IL_2B: ldc.i4.0  */
        /* IL_2C: newarr System.Object */
        /* IL_31: call Void WriteLine(System.String, System.Object[]) */
        
        asm0.x60000a2(((asm0.x6000074(CILJS.new_handle(asm0["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x60001c5"])(asm0.x6000074(CILJS.new_handle(asm0["System.RuntimeTypeHandle"](),t2))),CILJS.new_array(t1,0));
        /* IL_36: nop  */
        /* IL_37: ret  */
        
        return ;
    };
};;/*  C`1..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000005_init = function ()
{
    
    (asm1.A().init)();
    
    (asm1["C`1"](asm1.A()).init)();
    
    (asm1.B().init)();
    
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
    var loc0;
    
    CILJS.init_base_types();
    
    t0 = asm1.A();
    
    t1 = asm1["C`1"](t0);
    
    t2 = asm1.B();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newobj(t1,asm1.x6000004,[null]);
    /* IL_07: ldloc.0  */
    /* IL_08: callvirt Void X[B]() */
    
    (asm1.x6000003(asm1.B()))(loc0);
    /* IL_0D: nop  */
    /* IL_0E: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000006 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.A = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"A",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function A()
        {
            
            A.init();
        };
    });
asm.B = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"B",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function B()
        {
            
            B.init();
        };
    });
asm["C`1"] = CILJS.declare_type(
    ["T"],
    function (T)
    {
        
        return asm0["System.Object"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"C`1",false,false,false,true,false,[],[
                [asm1, "x6000003", "X"]
            ],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000004",null);
        
        (type.GenericArguments)["asm1.t2000004"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000004<" + (T.TypeMetadataName + ">"));
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function (T)
    {
        
        return function C_1()
        {
            
            C_1.init();
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
        
        CILJS.init_type(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000005",null);
        
        type.TypeMetadataName = "asm1.t2000005";
        
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
asm.entryPoint = asm.x6000005;
CILJS.declare_assembly("CallGenericMethodOnGenericClass.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=CallGenericMethodOnGenericClass.cs.ciljs.exe.js.map
