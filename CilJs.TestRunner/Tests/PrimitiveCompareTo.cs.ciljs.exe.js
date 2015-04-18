var asm1; (function (asm)
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
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
        /* IL_00: ldc.i4.0 */
        /* IL_01: box System.Byte*/
        /* IL_06: ldc.i4.0 */
        /* IL_07: box System.Byte*/
        /* IL_0C: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_11: ldc.i4.0 */
        /* IL_12: box System.Byte*/
        /* IL_17: ldc.i4.1 */
        /* IL_18: box System.Byte*/
        /* IL_1D: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_22: ldc.i4.1 */
        /* IL_23: box System.Byte*/
        /* IL_28: ldc.i4.1 */
        /* IL_29: box System.Int32*/
        /* IL_2E: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_33: ldc.i4.0 */
        /* IL_34: box System.Byte*/
        /* IL_39: ldc.i4.0 */
        /* IL_3A: box System.SByte*/
        /* IL_3F: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_44: ldc.i4.0 */
        /* IL_45: box System.SByte*/
        /* IL_4A: ldc.i4.0 */
        /* IL_4B: box System.Byte*/
        /* IL_50: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_55: ldc.i4.0 */
        /* IL_56: box System.SByte*/
        /* IL_5B: ldc.i4.1 */
        /* IL_5C: box System.Byte*/
        /* IL_61: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_66: ldc.i4.1 */
        /* IL_67: box System.SByte*/
        /* IL_6C: ldc.i4 1000*/
        /* IL_71: box System.Int32*/
        /* IL_76: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_7B: ldc.i4.0 */
        /* IL_7C: box System.SByte*/
        /* IL_81: ldc.i4.0 */
        /* IL_82: box System.SByte*/
        /* IL_87: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_8C: ldc.i4 255*/
        /* IL_91: box System.Byte*/
        /* IL_96: ldc.i4.m1 */
        /* IL_97: box System.SByte*/
        /* IL_9C: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_A1: ldc.i4.0 */
        /* IL_A2: box System.SByte*/
        /* IL_A7: ldc.i4.1 */
        /* IL_A8: box System.Byte*/
        /* IL_AD: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_B2: ldc.i4.1 */
        /* IL_B3: box System.SByte*/
        /* IL_B8: ldc.i4 1000*/
        /* IL_BD: box System.Int32*/
        /* IL_C2: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_C7: ldc.i4.0 */
        /* IL_C8: box System.SByte*/
        /* IL_CD: ldc.i4.0 */
        /* IL_CE: box System.SByte*/
        /* IL_D3: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_D8: ldc.i4.1 */
        /* IL_D9: box System.Boolean*/
        /* IL_DE: ldc.i4.1 */
        /* IL_DF: box System.Boolean*/
        /* IL_E4: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_E9: ldc.i4.1 */
        /* IL_EA: box System.Boolean*/
        /* IL_EF: ldc.i4.0 */
        /* IL_F0: box System.Boolean*/
        /* IL_F5: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_FA: ldc.i4.0 */
        /* IL_FB: box System.Boolean*/
        /* IL_100: ldc.i4.1 */
        /* IL_101: box System.Boolean*/
        /* IL_106: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_10B: ldc.i4.0 */
        /* IL_10C: box System.Boolean*/
        /* IL_111: ldc.i4.0 */
        /* IL_112: box System.Boolean*/
        /* IL_117: call Void Test(System.IComparable, System.IComparable)*/
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
        /* IL_11C: ret */
        return ;
    };
    /* static System.Void Program.Test(IComparable,IComparable)*/
    asm.x600000b_init = function ()
    {
        ((asm0)["System.IComparable"]().init)();
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function (arg0,arg1)
    {
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function Test(arg0,arg1)
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
                
                try {
                    /* IL_00: ldarg.0 */
                    /* IL_01: ldarg.1 */
                    /* IL_02: callvirt Int32 CompareTo(System.Object)*/
                    /* IL_07: box System.Int32*/
                    /* IL_0C: call Void Log(System.Object)*/
                    asm1.x6000001({
                            'boxed': (((arg0.ifacemap)[t0].x600007e)())(CILJS.convert_box_to_pointer_as_needed(arg0),arg1),
                            'type': t1,
                            'vtable': t1.prototype.vtable,
                            'ifacemap': t1.prototype.ifacemap
                        });
                    /* IL_11: leave.s IL_20*/
                    in_block_1 = false;
                    __pos__ = 0x20;
                }
                
                catch (__error__){
                    __error_handled_1__ = false;
                    
                    if ((!(__error_handled_1__)) && (__error__ instanceof (asm0)["System.Object"]())){
                        st_04 = __error__;
                        __error_handled_1__ = true;
                        /* IL_13: pop */
                        
                        /* IL_14: ldstr threw*/
                        /* IL_19: call Void Log(System.Object)*/
                        asm1.x6000001(CILJS.new_string("threw"));
                        /* IL_1E: leave.s IL_20*/
                        in_block_1 = false;
                        __pos__ = 0x20;
                    }
                    
                    if ((!(__error_handled_1__))){
                        throw __error__;
                    }
                }
                break;
                case 0x20:
                /* IL_20: ret */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
