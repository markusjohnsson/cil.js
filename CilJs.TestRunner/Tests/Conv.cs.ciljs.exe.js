var asm1;(function (asm)
{
    asm.FullName = "Conv.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static System.Void Program.Test(Int64)*/
    asm.x600000a = function Test(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var __pos__;
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.UInt32"]();
        t2 = (asm0)["System.Int64"]();
        t3 = (asm0)["System.UInt64"]();
        t4 = (asm0)["System.Double"]();
        __pos__ = 0x0;
        /* IL_00: nop  Conv.cs:5:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: conv.i4  */
        /* IL_03: box System.Int32 */
        /* IL_08: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': CILJS.to_number_signed(arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0D: nop  */
        /* IL_0E: ldarg.0  */
        /* IL_0F: conv.u4  */
        /* IL_10: box System.UInt32 */
        /* IL_15: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': CILJS.to_number_signed(arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1A: nop  */
        /* IL_1B: ldarg.0  */
        /* IL_1C: box System.Int64 */
        /* IL_21: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': arg0,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_26: nop  */
        /* IL_27: ldarg.0  */
        /* IL_28: box System.UInt64 */
        /* IL_2D: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': arg0,
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_32: nop  */
        /* IL_33: ldarg.0  */
        /* IL_34: conv.r8  */
        /* IL_35: box System.Double */
        /* IL_3A: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': CILJS.to_number_signed(arg0),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_3F: nop  */
        /* IL_40: ret  Conv.cs:11:5*/
        return ;
    };;
    /* static System.Void Program.Test(UInt64)*/
    asm.x600000b = function Test(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var __pos__;
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.UInt32"]();
        t2 = (asm0)["System.Int64"]();
        t3 = (asm0)["System.UInt64"]();
        t4 = (asm0)["System.Double"]();
        __pos__ = 0x0;
        /* IL_00: nop  Conv.cs:14:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: conv.i4  */
        /* IL_03: box System.Int32 */
        /* IL_08: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': CILJS.to_number_signed(arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0D: nop  */
        /* IL_0E: ldarg.0  */
        /* IL_0F: conv.u4  */
        /* IL_10: box System.UInt32 */
        /* IL_15: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': CILJS.to_number_signed(arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1A: nop  */
        /* IL_1B: ldarg.0  */
        /* IL_1C: box System.Int64 */
        /* IL_21: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': arg0,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_26: nop  */
        /* IL_27: ldarg.0  */
        /* IL_28: box System.UInt64 */
        /* IL_2D: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': arg0,
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_32: nop  */
        /* IL_33: ldarg.0  */
        /* IL_34: conv.r.un  */
        /* IL_35: conv.r8  */
        /* IL_36: box System.Double */
        /* IL_3B: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': CILJS.to_number_unsigned(arg0),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_40: nop  */
        /* IL_41: ret  Conv.cs:20:5*/
        return ;
    };;
    /* static System.Void Program.Test(Int32)*/
    asm.x600000c = function Test(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var __pos__;
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.UInt32"]();
        t2 = (asm0)["System.Int64"]();
        t3 = (asm0)["System.UInt64"]();
        t4 = (asm0)["System.Double"]();
        __pos__ = 0x0;
        /* IL_00: nop  Conv.cs:23:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: box System.Int32 */
        /* IL_07: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': arg0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0C: nop  */
        /* IL_0D: ldarg.0  */
        /* IL_0E: box System.UInt32 */
        /* IL_13: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': arg0,
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_18: nop  */
        /* IL_19: ldarg.0  */
        /* IL_1A: conv.i8  */
        /* IL_1B: box System.Int64 */
        /* IL_20: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': CILJS.conv_i8(arg0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_25: nop  */
        /* IL_26: ldarg.0  */
        /* IL_27: conv.i8  */
        /* IL_28: box System.UInt64 */
        /* IL_2D: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': CILJS.conv_i8(arg0),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_32: nop  */
        /* IL_33: ldarg.0  */
        /* IL_34: conv.r8  */
        /* IL_35: box System.Double */
        /* IL_3A: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': arg0,
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_3F: nop  */
        /* IL_40: ret  Conv.cs:29:5*/
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000d_init = function ()
    {
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        CILJS.init_base_types();
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Main()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  Conv.cs:32:5*/
        /* IL_01: ldc.i4.1  */
        /* IL_02: conv.i8  */
        /* IL_03: call Void Test(System.Int64) */
        asm1.x600000a(CILJS.conv_i8((1|0)));
        /* IL_08: nop  */
        /* IL_09: ldc.i4.m1  */
        /* IL_0A: conv.i8  */
        /* IL_0B: call Void Test(System.Int64) */
        asm1.x600000a(CILJS.conv_i8((-1|0)));
        /* IL_10: nop  */
        /* IL_11: ldc.i4.1  */
        /* IL_12: conv.i8  */
        /* IL_13: call Void Test(System.UInt64) */
        asm1.x600000b(CILJS.conv_i8((1|0)));
        /* IL_18: nop  */
        /* IL_19: ldc.i4.1  */
        /* IL_1A: call Void Test(System.Int32) */
        asm1.x600000c((1|0));
        /* IL_1F: nop  */
        /* IL_20: ldc.i4.m1  */
        /* IL_21: call Void Test(System.Int32) */
        asm1.x600000c((-1|0));
        /* IL_26: nop  */
        /* IL_27: ret  Conv.cs:40:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000e = function _ctor(arg0)
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
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
