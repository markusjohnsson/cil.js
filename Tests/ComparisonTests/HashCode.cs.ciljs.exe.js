
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "HashCode.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/*  A..ctor()*/

asm.x6000001 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000002_init = function ()
{
    
    (asm1.A().init)();
    
    asm.x6000002 = asm.x6000002_;
};;

asm.x6000002 = function ()
{
    
    asm.x6000002_init();
    
    return asm.x6000002_();
};;
asm.x6000002_ = function Main()
{
    var t0;
    var t1;
    var loc0;
    var loc1;
    var loc2;
    
    CILJS.init_base_types();
    
    t0 = asm1.A();
    
    t1 = asm0["System.Boolean"]();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newobj(t0,asm1.x6000001,[null]);
    /* IL_07: ldloc.0  */
    /* IL_08: callvirt Int32 GetHashCode() */
    /* IL_0D: stloc.1  */
    
    loc1 = (loc0.vtable)["asm0.x60000ce"](loc0);
    /* IL_0E: ldloc.1  */
    /* IL_0F: ldc.i4.0  */
    /* IL_11: cgt.un  */
    /* IL_12: box System.Boolean */
    /* IL_17: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box(((CILJS.unsigned_value(loc1) > CILJS.unsigned_value(0)) ? 1 : 0),t1));
    /* IL_1C: nop  */
    /* IL_1D: ldloc.1  */
    /* IL_1E: ldloc.0  */
    /* IL_1F: callvirt Int32 GetHashCode() */
    /* IL_25: ceq  */
    /* IL_26: box System.Boolean */
    /* IL_2B: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box(((loc1 === (loc0.vtable)["asm0.x60000ce"](loc0)) ? 1 : 0),t1));
    /* IL_30: nop  */
    /* IL_31: newobj Void .ctor() */
    /* IL_36: stloc.2  */
    
    loc2 = CILJS.newobj(t0,asm1.x6000001,[null]);
    /* IL_37: ldloc.2  */
    /* IL_38: callvirt Int32 GetHashCode() */
    /* IL_3D: ldloc.2  */
    /* IL_3E: callvirt Int32 GetHashCode() */
    /* IL_44: ceq  */
    /* IL_45: box System.Boolean */
    /* IL_4A: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box((((loc2.vtable)["asm0.x60000ce"](loc2) === (loc2.vtable)["asm0.x60000ce"](loc2)) ? 1 : 0),t1));
    /* IL_4F: nop  */
    /* IL_50: ldloc.2  */
    /* IL_51: callvirt Int32 GetHashCode() */
    /* IL_56: ldloc.0  */
    /* IL_57: callvirt Int32 GetHashCode() */
    /* IL_5D: ceq  */
    /* IL_5E: ldc.i4.0  */
    /* IL_60: ceq  */
    /* IL_61: box System.Boolean */
    /* IL_66: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box((((((loc2.vtable)["asm0.x60000ce"](loc2) === (loc0.vtable)["asm0.x60000ce"](loc0)) ? 1 : 0) === 0) ? 1 : 0),t1));
    /* IL_6B: nop  */
    /* IL_6C: ldstr hello */
    /* IL_71: call Void TestString(System.String) */
    
    asm1.x6000003(CILJS.new_string("hello"));
    /* IL_76: nop  */
    /* IL_77: ret  */
    
    return ;
};/* static System.Void Program.TestString(String)*/

asm.x6000003 = function TestString(arg0)
{
    var t0;
    var loc0;
    var loc1;
    
    t0 = asm0["System.Boolean"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldstr  world */
    /* IL_07: call String Concat(System.String, System.String) */
    /* IL_0C: stloc.0  */
    
    loc0 = asm0.x60000ea(arg0,CILJS.new_string(" world"));
    /* IL_0D: ldstr hello world */
    /* IL_12: stloc.1  */
    
    loc1 = CILJS.new_string("hello world");
    /* IL_13: ldloc.0  */
    /* IL_14: callvirt Int32 GetHashCode() */
    /* IL_19: ldloc.1  */
    /* IL_1A: callvirt Int32 GetHashCode() */
    /* IL_20: ceq  */
    /* IL_21: box System.Boolean */
    /* IL_26: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box((((loc0.vtable)["asm0.x60000ce"](loc0) === (loc1.vtable)["asm0.x60000ce"](loc1)) ? 1 : 0),t0));
    /* IL_2B: nop  */
    /* IL_2C: ldloc.0  */
    /* IL_2D: callvirt Int32 GetHashCode() */
    /* IL_32: ldarg.0  */
    /* IL_33: callvirt Int32 GetHashCode() */
    /* IL_39: ceq  */
    /* IL_3A: box System.Boolean */
    /* IL_3F: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box((((loc0.vtable)["asm0.x60000ce"](loc0) === (arg0.vtable)["asm0.x60000ce"](arg0)) ? 1 : 0),t0));
    /* IL_44: nop  */
    /* IL_45: ret  */
    
    return ;
};;/*  Program..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.A = CILJS.declare_type(
    "A",
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
        
        this.GenericTypeMetadataName = "asm1.t2000002";
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function A()
        {
            
            A.init();
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
asm.entryPoint = asm.x6000002;
CILJS.declare_assembly("HashCode.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=HashCode.cs.ciljs.exe.js.map
