
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "Enums.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.Main()*/

asm.x6000001 = function Main()
{
    var t0;
    var loc0;
    
    CILJS.init_base_types();
    
    t0 = asm0["System.Int32"]();
    /* IL_00: nop  */
    /* IL_01: ldc.i4.0  */
    /* IL_02: stloc.0  */
    
    loc0 = 0;
    /* IL_03: ldloc.0  */
    /* IL_04: box System.Int32 */
    /* IL_09: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box(loc0,t0));
    /* IL_0E: nop  */
    /* IL_0F: ldc.i4.0  */
    /* IL_10: stloc.0  */
    
    loc0 = 0;
    /* IL_11: ldloc.0  */
    /* IL_12: box System.Int32 */
    /* IL_17: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box(loc0,t0));
    /* IL_1C: nop  */
    /* IL_1D: ldc.i4.1  */
    /* IL_1E: stloc.0  */
    
    loc0 = 1;
    /* IL_1F: ldloc.0  */
    /* IL_20: box System.Int32 */
    /* IL_25: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box(loc0,t0));
    /* IL_2A: nop  */
    /* IL_2B: ldc.i4.2  */
    /* IL_2C: stloc.0  */
    
    loc0 = 2;
    /* IL_2D: ldloc.0  */
    /* IL_2E: box System.Int32 */
    /* IL_33: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box(loc0,t0));
    /* IL_38: nop  */
    /* IL_39: ret  */
    
    return ;
};;/*  Program..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.X = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Enum"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"X",true,false,false,false,false,[],[],asm0["System.Enum"](),CILJS.is_inst_value_type(type),Array,"asm1.t2000002",new (asm1.X())());
        
        type.A = new (asm1.X())();
        
        type.B = new (asm1.X())();
        
        type.C = new (asm1.X())();
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declare_virtual(type,"asm0.x60000cd",asm0,"x6000148");
        
        CILJS.declare_virtual(type,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(type,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function X()
        {
            
            X.init();
            
            this.value__ = 0;
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
asm.entryPoint = asm.x6000001;
CILJS.declare_assembly("Enums.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=Enums.cs.ciljs.exe.js.map
