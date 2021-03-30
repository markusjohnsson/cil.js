
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "PrimitiveCompareTo.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.Main()*/

asm.x6000001 = function Main()
{
    var t0;
    var t1;
    var t2;
    
    CILJS.init_base_types();
    
    t0 = asm0["System.Byte"]();
    
    t1 = asm0["System.SByte"]();
    
    t2 = asm0["System.Boolean"]();
    /* IL_00: nop  */
    /* IL_01: ldc.i4.0  */
    /* IL_02: box System.Byte */
    /* IL_07: ldc.i4.0  */
    /* IL_08: box System.Byte */
    /* IL_0D: call Void Test(System.IComparable, System.IComparable) */
    
    asm1.x6000002(CILJS.make_box(0,t0),CILJS.make_box(0,t0));
    /* IL_12: nop  */
    /* IL_13: ldc.i4.0  */
    /* IL_14: box System.Byte */
    /* IL_19: ldc.i4.1  */
    /* IL_1A: box System.Byte */
    /* IL_1F: call Void Test(System.IComparable, System.IComparable) */
    
    asm1.x6000002(CILJS.make_box(0,t0),CILJS.make_box(1,t0));
    /* IL_24: nop  */
    /* IL_25: ldc.i4.0  */
    /* IL_26: box System.SByte */
    /* IL_2B: ldc.i4.0  */
    /* IL_2C: box System.SByte */
    /* IL_31: call Void Test(System.IComparable, System.IComparable) */
    
    asm1.x6000002(CILJS.make_box(0,t1),CILJS.make_box(0,t1));
    /* IL_36: nop  */
    /* IL_37: ldc.i4.0  */
    /* IL_38: box System.SByte */
    /* IL_3D: ldc.i4.1  */
    /* IL_3E: box System.SByte */
    /* IL_43: call Void Test(System.IComparable, System.IComparable) */
    
    asm1.x6000002(CILJS.make_box(0,t1),CILJS.make_box(1,t1));
    /* IL_48: nop  */
    /* IL_49: ldc.i4.0  */
    /* IL_4A: box System.SByte */
    /* IL_4F: ldc.i4.0  */
    /* IL_50: box System.SByte */
    /* IL_55: call Void Test(System.IComparable, System.IComparable) */
    
    asm1.x6000002(CILJS.make_box(0,t1),CILJS.make_box(0,t1));
    /* IL_5A: nop  */
    /* IL_5B: ldc.i4.0  */
    /* IL_5C: box System.SByte */
    /* IL_61: ldc.i4.0  */
    /* IL_62: box System.SByte */
    /* IL_67: call Void Test(System.IComparable, System.IComparable) */
    
    asm1.x6000002(CILJS.make_box(0,t1),CILJS.make_box(0,t1));
    /* IL_6C: nop  */
    /* IL_6D: ldc.i4.1  */
    /* IL_6E: box System.Boolean */
    /* IL_73: ldc.i4.1  */
    /* IL_74: box System.Boolean */
    /* IL_79: call Void Test(System.IComparable, System.IComparable) */
    
    asm1.x6000002(CILJS.make_box(1,t2),CILJS.make_box(1,t2));
    /* IL_7E: nop  */
    /* IL_7F: ldc.i4.1  */
    /* IL_80: box System.Boolean */
    /* IL_85: ldc.i4.0  */
    /* IL_86: box System.Boolean */
    /* IL_8B: call Void Test(System.IComparable, System.IComparable) */
    
    asm1.x6000002(CILJS.make_box(1,t2),CILJS.make_box(0,t2));
    /* IL_90: nop  */
    /* IL_91: ldc.i4.0  */
    /* IL_92: box System.Boolean */
    /* IL_97: ldc.i4.1  */
    /* IL_98: box System.Boolean */
    /* IL_9D: call Void Test(System.IComparable, System.IComparable) */
    
    asm1.x6000002(CILJS.make_box(0,t2),CILJS.make_box(1,t2));
    /* IL_A2: nop  */
    /* IL_A3: ldc.i4.0  */
    /* IL_A4: box System.Boolean */
    /* IL_A9: ldc.i4.0  */
    /* IL_AA: box System.Boolean */
    /* IL_AF: call Void Test(System.IComparable, System.IComparable) */
    
    asm1.x6000002(CILJS.make_box(0,t2),CILJS.make_box(0,t2));
    /* IL_B4: nop  */
    /* IL_B5: ret  */
    
    return ;
};;/* static System.Void Program.Test(IComparable,IComparable)*/

asm.x6000002_init = function (arg0, arg1)
{
    
    (asm0["System.IComparable"]().init)();
    
    asm.x6000002 = asm.x6000002_;
};;

asm.x6000002 = function (arg0, arg1)
{
    
    asm.x6000002_init(arg0,arg1);
    
    return asm.x6000002_(arg0,arg1);
};;
asm.x6000002_ = function Test(arg0, arg1)
{
    var t0;
    var t1;
    var t2;
    var in_block_0;
    var __pos__;
    var in_block_1;
    var __error_handled_1__;
    var loc0;
    
    t0 = asm0["System.IComparable"]();
    
    t1 = asm0["System.Int32"]();
    
    t2 = asm0["System.Object"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            
            try {
                
                in_block_1 = true;
                
                if (__pos__ < 0x1){
                    
                    __pos__ = 0x1;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x1:
                        /* IL_01: nop  */
                        /* IL_02: ldarg.0  */
                        /* IL_03: ldarg.1  */
                        /* IL_04: callvirt Int32 CompareTo(System.Object) */
                        /* IL_09: box System.Int32 */
                        /* IL_0E: call Void WriteLine(System.Object) */
                        
                        asm0.x6000072(CILJS.make_box(((arg0.ifacemap)[t0].x60000da)(CILJS.convert_box_to_pointer_as_needed(arg0),arg1),t1));
                        /* IL_13: nop  */
                        /* IL_14: nop  */
                        /* IL_15: leave.s IL_3F */
                        
                        in_block_1 = false;
                        
                        __pos__ = 0x3F;
                        
                        continue;
                    }
                }
            }
            
            catch (__error__) {
                
                __error_handled_1__ = false;
                
                if ((!(__error_handled_1__)) && (__error__ instanceof asm0["System.Exception"]())){
                    
                    in_block_1 = true;
                    
                    if (__pos__ < 0x17){
                        
                        __pos__ = 0x17;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x17:
                            
                            st_04 = __error__;
                            
                            __error_handled_1__ = true;
                            /* IL_17: stloc.0  */
                            
                            loc0 = st_04;
                            /* IL_18: nop  */
                            /* IL_19: ldstr threw */
                            /* IL_1E: ldc.i4.0  */
                            /* IL_1F: newarr System.Object */
                            /* IL_24: call Void WriteLine(System.String, System.Object[]) */
                            
                            asm0.x6000073(CILJS.new_string("threw"),CILJS.new_array(t2,0));
                            /* IL_29: nop  */
                            /* IL_2A: ldloc.0  */
                            /* IL_2B: callvirt String get_Message() */
                            /* IL_30: ldc.i4.0  */
                            /* IL_31: newarr System.Object */
                            /* IL_36: call Void WriteLine(System.String, System.Object[]) */
                            
                            asm0.x6000073((loc0.vtable)["asm0.x600007a"](loc0),CILJS.new_array(t2,0));
                            /* IL_3B: nop  */
                            /* IL_3C: nop  */
                            /* IL_3D: leave.s IL_3F */
                            
                            in_block_1 = false;
                            
                            __pos__ = 0x3F;
                            
                            continue;
                        }
                    }
                }
                
                if ((!(__error_handled_1__))){
                    
                    throw __error__;
                }
            }
            
            continue;
            case 0x3F:
            /* IL_3F: ret  */
            
            return ;
        }
    }
};/*  Program..ctor()*/

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
asm.entryPoint = asm.x6000001;
CILJS.declare_assembly("PrimitiveCompareTo.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=PrimitiveCompareTo.cs.ciljs.exe.js.map
