
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "PrimitiveEquals.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.Main()*/

asm.x6000001 = function Main()
{
    var t0;
    var t1;
    var t2;
    var t3;
    
    CILJS.init_base_types();
    
    t0 = asm0["System.Byte"]();
    
    t1 = asm0["System.Int32"]();
    
    t2 = asm0["System.SByte"]();
    
    t3 = asm0["System.Boolean"]();
    /* IL_00: nop  */
    /* IL_01: ldc.i4.0  */
    /* IL_02: box System.Byte */
    /* IL_07: ldc.i4.0  */
    /* IL_08: box System.Byte */
    /* IL_0D: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(0,t0),CILJS.make_box(0,t0));
    /* IL_12: nop  */
    /* IL_13: ldc.i4.0  */
    /* IL_14: box System.Byte */
    /* IL_19: ldc.i4.1  */
    /* IL_1A: box System.Byte */
    /* IL_1F: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(0,t0),CILJS.make_box(1,t0));
    /* IL_24: nop  */
    /* IL_25: ldc.i4.1  */
    /* IL_26: box System.Byte */
    /* IL_2B: ldc.i4.1  */
    /* IL_2C: box System.Int32 */
    /* IL_31: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(1,t0),CILJS.make_box(1,t1));
    /* IL_36: nop  */
    /* IL_37: ldc.i4.0  */
    /* IL_38: box System.Byte */
    /* IL_3D: ldc.i4.0  */
    /* IL_3E: box System.SByte */
    /* IL_43: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(0,t0),CILJS.make_box(0,t2));
    /* IL_48: nop  */
    /* IL_49: ldc.i4.0  */
    /* IL_4A: box System.SByte */
    /* IL_4F: ldc.i4.0  */
    /* IL_50: box System.Byte */
    /* IL_55: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(0,t2),CILJS.make_box(0,t0));
    /* IL_5A: nop  */
    /* IL_5B: ldc.i4.0  */
    /* IL_5C: box System.SByte */
    /* IL_61: ldc.i4.1  */
    /* IL_62: box System.Byte */
    /* IL_67: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(0,t2),CILJS.make_box(1,t0));
    /* IL_6C: nop  */
    /* IL_6D: ldc.i4.1  */
    /* IL_6E: box System.SByte */
    /* IL_73: ldc.i4 1000 */
    /* IL_78: box System.Int32 */
    /* IL_7D: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(1,t2),CILJS.make_box(1000,t1));
    /* IL_82: nop  */
    /* IL_83: ldc.i4.0  */
    /* IL_84: box System.SByte */
    /* IL_89: ldc.i4.0  */
    /* IL_8A: box System.SByte */
    /* IL_8F: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(0,t2),CILJS.make_box(0,t2));
    /* IL_94: nop  */
    /* IL_95: ldc.i4 255 */
    /* IL_9A: box System.Byte */
    /* IL_9F: ldc.i4.m1  */
    /* IL_A0: box System.SByte */
    /* IL_A5: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(255,t0),CILJS.make_box(-1,t2));
    /* IL_AA: nop  */
    /* IL_AB: ldc.i4.0  */
    /* IL_AC: box System.SByte */
    /* IL_B1: ldc.i4.1  */
    /* IL_B2: box System.Byte */
    /* IL_B7: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(0,t2),CILJS.make_box(1,t0));
    /* IL_BC: nop  */
    /* IL_BD: ldc.i4.1  */
    /* IL_BE: box System.SByte */
    /* IL_C3: ldc.i4 1000 */
    /* IL_C8: box System.Int32 */
    /* IL_CD: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(1,t2),CILJS.make_box(1000,t1));
    /* IL_D2: nop  */
    /* IL_D3: ldc.i4.0  */
    /* IL_D4: box System.SByte */
    /* IL_D9: ldc.i4.0  */
    /* IL_DA: box System.SByte */
    /* IL_DF: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(0,t2),CILJS.make_box(0,t2));
    /* IL_E4: nop  */
    /* IL_E5: ldc.i4.1  */
    /* IL_E6: box System.Boolean */
    /* IL_EB: ldc.i4.1  */
    /* IL_EC: box System.Boolean */
    /* IL_F1: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(1,t3),CILJS.make_box(1,t3));
    /* IL_F6: nop  */
    /* IL_F7: ldc.i4.1  */
    /* IL_F8: box System.Boolean */
    /* IL_FD: ldc.i4.0  */
    /* IL_FE: box System.Boolean */
    /* IL_103: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(1,t3),CILJS.make_box(0,t3));
    /* IL_108: nop  */
    /* IL_109: ldc.i4.0  */
    /* IL_10A: box System.Boolean */
    /* IL_10F: ldc.i4.1  */
    /* IL_110: box System.Boolean */
    /* IL_115: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(0,t3),CILJS.make_box(1,t3));
    /* IL_11A: nop  */
    /* IL_11B: ldc.i4.0  */
    /* IL_11C: box System.Boolean */
    /* IL_121: ldc.i4.0  */
    /* IL_122: box System.Boolean */
    /* IL_127: call Void Test(System.Object, System.Object) */
    
    asm1.x6000002(CILJS.make_box(0,t3),CILJS.make_box(0,t3));
    /* IL_12C: nop  */
    /* IL_12D: ret  */
    
    return ;
};;/* static System.Void Program.Test(Object,Object)*/

asm.x6000002 = function Test(arg0, arg1)
{
    var t0;
    
    t0 = asm0["System.Boolean"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: callvirt Boolean Equals(System.Object) */
    /* IL_08: box System.Boolean */
    /* IL_0D: call Void WriteLine(System.Object) */
    
    asm0.x60000a1(CILJS.make_box((arg0.vtable)["asm0.x60000cd"](CILJS.convert_box_to_pointer_as_needed(arg0),arg1),t0));
    /* IL_12: nop  */
    /* IL_13: ret  */
    
    return ;
};;/*  Program..ctor()*/

asm.x6000003 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.Program = CILJS.declare_type(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.init_type(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
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
CILJS.declare_assembly("PrimitiveEquals.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=PrimitiveEquals.cs.ciljs.exe.js.map
