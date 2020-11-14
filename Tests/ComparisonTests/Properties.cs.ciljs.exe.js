
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "Properties.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.Int32 X.get_Y()*/

asm.x6000001 = function get_Y(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld Int32 <Y>k__BackingField */
    /* IL_06: ret  */
    
    return arg0["X<Y>k__BackingField"];
};;/* System.Void X.set_Y(Int32)*/

asm.x6000002 = function set_Y(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: stfld Int32 <Y>k__BackingField */
    
    arg0["X<Y>k__BackingField"] = arg1;
    /* IL_07: ret  */
    
    return ;
};;/*  X..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000004_init = function ()
{
    
    (asm1.X().init)();
    
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
    
    t0 = asm1.X();
    
    t1 = asm0["System.Int32"]();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newobj(t0,asm1.x6000003,[null]);
    /* IL_07: ldloc.0  */
    /* IL_08: ldc.i4.s 123 */
    /* IL_0A: callvirt Void set_Y(System.Int32) */
    
    asm1.x6000002(loc0,123);
    /* IL_0F: nop  */
    /* IL_10: ldloc.0  */
    /* IL_11: callvirt Int32 get_Y() */
    /* IL_16: box System.Int32 */
    /* IL_1B: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box(loc0["X<Y>k__BackingField"],t1));
    /* IL_20: nop  */
    /* IL_21: ret  */
    
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
asm.X = CILJS.declare_type(
    "X",
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[
                [asm1, "x6000001", "get_Y"],
                [asm1, "x6000002", "set_Y"]
            ],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
        
        this.GenericTypeMetadataName = "asm1.t2000002";
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function X()
        {
            
            X.init();
            
            this["X<Y>k__BackingField"] = 0;
        };
    });
asm.Program = CILJS.declare_type(
    "Program",
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
        
        this.GenericTypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function Program()
        {
            
            Program.init();
        };
    });
asm.entryPoint = asm.x6000004;
CILJS.declare_assembly("Properties.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=Properties.cs.ciljs.exe.js.map
