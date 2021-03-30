
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "Strings.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.String A.get_X()*/

asm.x6000001 = function get_X(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld String <X>k__BackingField */
    /* IL_06: ret  */
    
    return arg0["A<X>k__BackingField"];
};;/* System.Void A.set_X(String)*/

asm.x6000002 = function set_X(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: stfld String <X>k__BackingField */
    
    arg0["A<X>k__BackingField"] = arg1;
    /* IL_07: ret  */
    
    return ;
};;/*  A..ctor()*/

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
    
    (asm1.A().init)();
    
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
    var t2;
    var loc0;
    
    CILJS.init_base_types();
    
    t0 = asm0["System.Object"]();
    
    t1 = asm1.A();
    
    t2 = asm0["System.Int32"]();
    /* IL_00: nop  */
    /* IL_01: call String GetString() */
    /* IL_06: ldc.i4.0  */
    /* IL_07: newarr System.Object */
    /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(asm1.x6000006(),CILJS.new_array(t0,0));
    /* IL_11: nop  */
    /* IL_12: newobj Void .ctor() */
    /* IL_17: stloc.0  */
    
    loc0 = CILJS.newobj(t1,asm1.x6000003,[null]);
    /* IL_18: ldloc.0  */
    /* IL_19: ldstr 300 */
    /* IL_1E: callvirt Void set_X(System.String) */
    
    asm1.x6000002(loc0,CILJS.new_string("300"));
    /* IL_23: nop  */
    /* IL_24: ldloc.0  */
    /* IL_25: callvirt String get_X() */
    /* IL_2A: ldc.i4.0  */
    /* IL_2B: newarr System.Object */
    /* IL_30: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(loc0["A<X>k__BackingField"],CILJS.new_array(t0,0));
    /* IL_35: nop  */
    /* IL_36: ldloc.0  */
    /* IL_37: callvirt String get_X() */
    /* IL_3C: call String IsString(System.Object) */
    /* IL_41: ldc.i4.0  */
    /* IL_42: newarr System.Object */
    /* IL_47: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(asm1.x6000005(loc0["A<X>k__BackingField"]),CILJS.new_array(t0,0));
    /* IL_4C: nop  */
    /* IL_4D: ldstr 123456789 */
    /* IL_52: call Int32 get_Length() */
    /* IL_57: box System.Int32 */
    /* IL_5C: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.make_box(asm0.x60000c3(CILJS.new_string("123456789")),t2));
    /* IL_61: nop  */
    /* IL_62: ret  */
    
    return ;
};/* static System.String Program.IsString(Object)*/

asm.x6000005 = function IsString(arg0)
{
    var t0;
    var st_02;
    var in_block_0;
    var __pos__;
    var loc0;
    
    t0 = asm0["System.String"]();
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: isinst System.String */
            /* IL_07: brtrue.s IL_10 */
            
            if (t0.IsInst(arg0)){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_09: ldstr false */
            
            st_02 = CILJS.new_string("false");
            /* IL_0E: br.s IL_15 */
            
            __pos__ = 0x15;
            
            continue;
            case 0x10:
            /* IL_10: ldstr true */
            
            st_02 = CILJS.new_string("true");
            case 0x15:
            /* IL_15: stloc.0  */
            
            loc0 = st_02;
            /* IL_18: ldloc.0  */
            /* IL_19: ret  */
            
            return loc0;
        }
    }
};;/* static System.String Program.GetString()*/

asm.x6000006 = function GetString()
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldstr Hello */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.new_string("Hello");
    /* IL_09: ldloc.0  */
    /* IL_0A: ret  */
    
    return loc0;
};;/*  Program..ctor()*/

asm.x6000007 = function _ctor(arg0)
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
        
        CILJS.init_type(type,asm,"A",false,false,false,false,false,[],[
                [asm1, "x6000001", "get_X"],
                [asm1, "x6000002", "set_X"]
            ],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declare_virtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declare_virtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declare_virtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function A()
        {
            
            A.init();
            
            this["A<X>k__BackingField"] = null;
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
CILJS.declare_assembly("Strings.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=Strings.cs.ciljs.exe.js.map
