
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "GenericInherit.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.Type A`1.Get()*/

asm.x6000001 = function Get(arg0)
{
    var t0;
    var loc0;
    
    t0 = ((arg0.constructor.GenericArguments)["asm1.t2000002"])[0];
    /* IL_00: nop  */
    /* IL_01: ldtoken T */
    /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_0B: stloc.0  */
    
    loc0 = asm0.x6000045(CILJS.new_handle(asm0["System.RuntimeTypeHandle"](),t0));
    /* IL_0E: ldloc.0  */
    /* IL_0F: ret  */
    
    return loc0;
};;/*  A`1..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  B..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm1.x6000002(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000004_init = function ()
{
    
    (asm1.B().init)();
    
    asm.x6000004 = asm.x6000004_;
};;

asm.x6000004 = function ()
{
    
    asm.x6000004_init();
    
    return asm.x6000004_();
};;
asm.x6000004_ = function Main()
{
    var t0;
    var t1;
    var loc0;
    
    CILJS.init_base_types();
    
    t0 = asm1.B();
    
    t1 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newobj(t0,asm1.x6000003,[null]);
    /* IL_07: ldloc.0  */
    /* IL_08: callvirt Type Get() */
    /* IL_0D: callvirt String get_Name() */
    /* IL_12: ldc.i4.0  */
    /* IL_13: newarr System.Object */
    /* IL_18: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(((asm1.x6000001(loc0).vtable)["asm0.x60001ca"])(asm1.x6000001(loc0)),CILJS.new_array(t1,0));
    /* IL_1D: nop  */
    /* IL_1E: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000005 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
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
        
        CILJS.init_type(type,asm,"A`1",false,false,false,true,false,[],[
                [asm1, "x6000001", "Get"]
            ],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000002",null);
        
        (type.GenericArguments)["asm1.t2000002"] = [T];
        
        type.TypeMetadataName = ("asm1.t2000002<" + (T.TypeMetadataName + ">"));
        
        CILJS.declare_virtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declare_virtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declare_virtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function (T)
    {
        
        return function A_1()
        {
            
            A_1.init();
        };
    });
asm.B = CILJS.declare_type(
    [],
    function ()
    {
        
        (asm0["System.Int32"]().init)();
        
        return asm1["A`1"](asm0["System.Int32"]());
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"B",false,false,false,false,false,[],[],asm1["A`1"](asm0["System.Int32"]()),CILJS.is_inst_default(type),Array,"asm1.t2000003",null);
        
        (type.GenericArguments)["asm1.t2000002"] = [asm0["System.Int32"]()];
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declare_virtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declare_virtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function B()
        {
            
            B.init();
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
        
        CILJS.init_type(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declare_virtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declare_virtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declare_virtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Program()
        {
            
            Program.init();
        };
    });
asm.entryPoint = asm.x6000004;
CILJS.declare_assembly("GenericInherit.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=GenericInherit.cs.ciljs.exe.js.map
