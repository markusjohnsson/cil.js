var asm1; (function (asm)
{
    asm.FullName = "Conv.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
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
        /* IL_00: ldarg.0 */
        /* IL_01: conv.i4 */
        /* IL_02: box System.Int32*/
        /* IL_07: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': BLR.to_number_signed(arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0C: ldarg.0 */
        /* IL_0D: conv.u4 */
        /* IL_0E: box System.UInt32*/
        /* IL_13: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': BLR.to_number_signed(arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_18: ldarg.0 */
        /* IL_19: box System.Int64*/
        /* IL_1E: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': arg0,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_23: ldarg.0 */
        /* IL_24: box System.UInt64*/
        /* IL_29: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': arg0,
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_2E: ldarg.0 */
        /* IL_2F: conv.r8 */
        /* IL_30: box System.Double*/
        /* IL_35: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': BLR.to_number_signed(arg0),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_3A: ret */
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
        /* IL_00: ldarg.0 */
        /* IL_01: conv.i4 */
        /* IL_02: box System.Int32*/
        /* IL_07: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': BLR.to_number_signed(arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0C: ldarg.0 */
        /* IL_0D: conv.u4 */
        /* IL_0E: box System.UInt32*/
        /* IL_13: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': BLR.to_number_signed(arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_18: ldarg.0 */
        /* IL_19: box System.Int64*/
        /* IL_1E: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': arg0,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_23: ldarg.0 */
        /* IL_24: box System.UInt64*/
        /* IL_29: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': arg0,
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_2E: ldarg.0 */
        /* IL_2F: conv.r.un */
        /* IL_30: conv.r8 */
        /* IL_31: box System.Double*/
        /* IL_36: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': BLR.to_number_unsigned(arg0),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_3B: ret */
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
        /* IL_00: ldarg.0 */
        /* IL_01: box System.Int32*/
        /* IL_06: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': arg0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0B: ldarg.0 */
        /* IL_0C: box System.UInt32*/
        /* IL_11: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': arg0,
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_16: ldarg.0 */
        /* IL_17: conv.i8 */
        /* IL_18: box System.Int64*/
        /* IL_1D: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': BLR.conv_i8(arg0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_22: ldarg.0 */
        /* IL_23: conv.i8 */
        /* IL_24: box System.UInt64*/
        /* IL_29: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': BLR.conv_i8(arg0),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_2E: ldarg.0 */
        /* IL_2F: conv.r8 */
        /* IL_30: box System.Double*/
        /* IL_35: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': arg0,
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_3A: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000d_init = function ()
    {
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        BLR.init_base_types();
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Main()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.1 */
        /* IL_01: conv.i8 */
        /* IL_02: call Void Test(System.Int64)*/
        asm1.x600000a(BLR.conv_i8((1|0)));
        /* IL_07: ldc.i4.m1 */
        /* IL_08: conv.i8 */
        /* IL_09: call Void Test(System.Int64)*/
        asm1.x600000a(BLR.conv_i8((-1|0)));
        /* IL_0E: ldc.i4.1 */
        /* IL_0F: conv.i8 */
        /* IL_10: call Void Test(System.UInt64)*/
        asm1.x600000b(BLR.conv_i8((1|0)));
        /* IL_15: ldc.i4.1 */
        /* IL_16: call Void Test(System.Int32)*/
        asm1.x600000c((1|0));
        /* IL_1B: ldc.i4.m1 */
        /* IL_1C: call Void Test(System.Int32)*/
        asm1.x600000c((-1|0));
        /* IL_21: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = BLR.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Program = BLR.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
