
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "IsInstValueType.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static I Program.Get()*/

asm.x6000001_init = function ()
{
    
    (asm1.A().init)();
    
    asm.x6000001 = asm.x6000001_;
};;

asm.x6000001 = function ()
{
    
    asm.x6000001_init();
    
    return asm.x6000001_();
};;
asm.x6000001_ = function Get()
{
    var t0;
    var loc0;
    var loc1;
    
    t0 = asm1.A();
    
    loc0 = new (asm1.A())();
    /* IL_00: nop  */
    /* IL_01: ldloca.s 0 */
    /* IL_04: initobj A */
    
    loc0 = new t0();
    /* IL_09: ldloc.0  */
    /* IL_0A: box A */
    /* IL_0F: stloc.1  */
    
    loc1 = CILJS.make_box(CILJS.clone_value(loc0),t0);
    /* IL_12: ldloc.1  */
    /* IL_13: ret  */
    
    return loc1;
};/* static System.Void Program.Main()*/

asm.x6000002 = function Main()
{
    
    CILJS.init_base_types();
    /* IL_00: nop  */
    /* IL_01: call I Get() */
    /* IL_06: call Void Test(I) */
    
    asm1.x6000003(asm1.x6000001());
    /* IL_0B: nop  */
    /* IL_0C: ldnull  */
    /* IL_0D: call Void Test(I) */
    
    asm1.x6000003(null);
    /* IL_12: nop  */
    /* IL_13: ret  */
    
    return ;
};;/* static System.Void Program.Test(I)*/

asm.x6000003_init = function (arg0)
{
    
    (asm1.A().init)();
    
    asm.x6000003 = asm.x6000003_;
};;

asm.x6000003 = function (arg0)
{
    
    asm.x6000003_init(arg0);
    
    return asm.x6000003_(arg0);
};;
asm.x6000003_ = function Test(arg0)
{
    var t0;
    var t1;
    
    t0 = asm1.A();
    
    t1 = asm0["System.Boolean"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: isinst A */
    /* IL_07: ldnull  */
    /* IL_09: cgt.un  */
    /* IL_0A: box System.Boolean */
    /* IL_0F: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box(((t0.IsInst(arg0) !== null) ? 1 : 0),t1));
    /* IL_14: nop  */
    /* IL_15: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.I = CILJS.declare_type(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"I",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
    },
    function ()
    {
        
        return function I()
        {
            
            I.init();
        };
    });
asm.A = CILJS.declare_type(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"A",true,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.is_inst_value_type(type),Array,"asm1.t2000003",new (asm1.A())());
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x6000148");
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
        
        CILJS.implement_interface(
            type,
            [asm1.I()],
            []);
    },
    function ()
    {
        
        return function A()
        {
            
            A.init();
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
asm.entryPoint = asm.x6000002;
CILJS.declare_assembly("IsInstValueType.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=IsInstValueType.cs.ciljs.exe.js.map
