var asm1;(function (asm)
{
    asm.FullName = "PrimitiveCompareTo.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000a_init = function ()
    {
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        CILJS.init_base_types();
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos__;
        t0 = (asm0)["System.Byte"]();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.SByte"]();
        t3 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        /* IL_00: nop  PrimitiveCompareTo.cs:6:5*/
        /* IL_01: ldc.i4.0  */
        /* IL_02: box System.Byte */
        /* IL_07: ldc.i4.0  */
        /* IL_08: box System.Byte */
        /* IL_0D: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },{
                'boxed': (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_12: nop  */
        /* IL_13: ldc.i4.0  */
        /* IL_14: box System.Byte */
        /* IL_19: ldc.i4.1  */
        /* IL_1A: box System.Byte */
        /* IL_1F: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },{
                'boxed': (1|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_24: nop  */
        /* IL_25: ldc.i4.1  */
        /* IL_26: box System.Byte */
        /* IL_2B: ldc.i4.1  */
        /* IL_2C: box System.Int32 */
        /* IL_31: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (1|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },{
                'boxed': (1|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_36: nop  */
        /* IL_37: ldc.i4.0  */
        /* IL_38: box System.Byte */
        /* IL_3D: ldc.i4.0  */
        /* IL_3E: box System.SByte */
        /* IL_43: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },{
                'boxed': (0|0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_48: nop  */
        /* IL_49: ldc.i4.0  */
        /* IL_4A: box System.SByte */
        /* IL_4F: ldc.i4.0  */
        /* IL_50: box System.Byte */
        /* IL_55: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (0|0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            },{
                'boxed': (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_5A: nop  */
        /* IL_5B: ldc.i4.0  */
        /* IL_5C: box System.SByte */
        /* IL_61: ldc.i4.1  */
        /* IL_62: box System.Byte */
        /* IL_67: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (0|0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            },{
                'boxed': (1|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_6C: nop  */
        /* IL_6D: ldc.i4.1  */
        /* IL_6E: box System.SByte */
        /* IL_73: ldc.i4 1000 */
        /* IL_78: box System.Int32 */
        /* IL_7D: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (1|0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            },{
                'boxed': (1000|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_82: nop  */
        /* IL_83: ldc.i4.0  */
        /* IL_84: box System.SByte */
        /* IL_89: ldc.i4.0  */
        /* IL_8A: box System.SByte */
        /* IL_8F: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (0|0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            },{
                'boxed': (0|0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_94: nop  */
        /* IL_95: ldc.i4 255 */
        /* IL_9A: box System.Byte */
        /* IL_9F: ldc.i4.m1  */
        /* IL_A0: box System.SByte */
        /* IL_A5: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (255|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },{
                'boxed': (-1|0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_AA: nop  */
        /* IL_AB: ldc.i4.0  */
        /* IL_AC: box System.SByte */
        /* IL_B1: ldc.i4.1  */
        /* IL_B2: box System.Byte */
        /* IL_B7: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (0|0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            },{
                'boxed': (1|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_BC: nop  */
        /* IL_BD: ldc.i4.1  */
        /* IL_BE: box System.SByte */
        /* IL_C3: ldc.i4 1000 */
        /* IL_C8: box System.Int32 */
        /* IL_CD: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (1|0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            },{
                'boxed': (1000|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_D2: nop  */
        /* IL_D3: ldc.i4.0  */
        /* IL_D4: box System.SByte */
        /* IL_D9: ldc.i4.0  */
        /* IL_DA: box System.SByte */
        /* IL_DF: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (0|0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            },{
                'boxed': (0|0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_E4: nop  */
        /* IL_E5: ldc.i4.1  */
        /* IL_E6: box System.Boolean */
        /* IL_EB: ldc.i4.1  */
        /* IL_EC: box System.Boolean */
        /* IL_F1: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (1|0),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            },{
                'boxed': (1|0),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_F6: nop  */
        /* IL_F7: ldc.i4.1  */
        /* IL_F8: box System.Boolean */
        /* IL_FD: ldc.i4.0  */
        /* IL_FE: box System.Boolean */
        /* IL_103: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (1|0),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            },{
                'boxed': (0|0),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_108: nop  */
        /* IL_109: ldc.i4.0  */
        /* IL_10A: box System.Boolean */
        /* IL_10F: ldc.i4.1  */
        /* IL_110: box System.Boolean */
        /* IL_115: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (0|0),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            },{
                'boxed': (1|0),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_11A: nop  */
        /* IL_11B: ldc.i4.0  */
        /* IL_11C: box System.Boolean */
        /* IL_121: ldc.i4.0  */
        /* IL_122: box System.Boolean */
        /* IL_127: call Void Test(System.IComparable, System.IComparable) */
        asm1.x600000b({
                'boxed': (0|0),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            },{
                'boxed': (0|0),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_12C: nop  */
        /* IL_12D: ret  PrimitiveCompareTo.cs:26:5*/
        return ;
    };
    /* static System.Void Program.Test(IComparable,IComparable)*/
    asm.x600000b_init = function ()
    {
        ((asm0)["System.IComparable"]().init)();
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function (arg0, arg1)
    {
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function Test(arg0, arg1)
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var __error_handled_1__;
        t0 = (asm0)["System.IComparable"]();
        t1 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  PrimitiveCompareTo.cs:29:5*/
                
                
                try {
                    /* IL_01: nop  PrimitiveCompareTo.cs:31:9*/
                    
                    /* IL_02: ldarg.0  */
                    /* IL_03: ldarg.1  */
                    /* IL_04: callvirt Int32 CompareTo(System.Object) */
                    /* IL_09: box System.Int32 */
                    /* IL_0E: call Void Log(System.Object) */
                    asm1.x6000001({
                            'boxed': (((arg0.ifacemap)[t0].x600007e)())(CILJS.convert_box_to_pointer_as_needed(arg0),arg1),
                            'type': t1,
                            'vtable': t1.prototype.vtable,
                            'ifacemap': t1.prototype.ifacemap
                        });
                    /* IL_13: nop  */
                    
                    /* IL_14: nop  PrimitiveCompareTo.cs:33:9*/
                    
                    /* IL_15: leave.s IL_27 PrimitiveCompareTo.cs:16707566:0*/
                    in_block_1 = false;
                    __pos__ = 0x27;
                }
                
                catch (__error__) {
                    __error_handled_1__ = false;
                    
                    if ((!(__error_handled_1__)) && (__error__ instanceof (asm0)["System.Object"]())){
                        st_04 = __error__;
                        __error_handled_1__ = true;
                        /* IL_17: pop  PrimitiveCompareTo.cs:34:9*/
                        
                        /* IL_18: nop  PrimitiveCompareTo.cs:35:9*/
                        
                        /* IL_19: ldstr threw */
                        /* IL_1E: call Void Log(System.Object) */
                        asm1.x6000001(CILJS.new_string("threw"));
                        /* IL_23: nop  */
                        
                        /* IL_24: nop  PrimitiveCompareTo.cs:37:9*/
                        
                        /* IL_25: leave.s IL_27 PrimitiveCompareTo.cs:16707566:0*/
                        in_block_1 = false;
                        __pos__ = 0x27;
                    }
                    
                    if ((!(__error_handled_1__))){
                        throw __error__;
                    }
                }
                break;
                case 0x27:
                /* IL_27: nop  PrimitiveCompareTo.cs:16707566:0*/
                
                /* IL_28: ret  PrimitiveCompareTo.cs:38:5*/
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.TestLog = CILJS.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
