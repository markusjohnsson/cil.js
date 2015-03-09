var asm1; (function (asm)
{
    asm.FullName = "Negate.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000a_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
    {
        var t0;
        t0 = (asm0)["System.ValueType"]();
        /* IL_00: ldc.i4.s 123*/
        /* IL_02: call Void Neg(System.Int32)*/
        asm1.x600000b((123|0));
        /* IL_07: ldc.i4.s 133*/
        /* IL_09: call Void Neg(System.Int32)*/
        asm1.x600000b((-123|0));
        /* IL_0E: ldc.i4 444123*/
        /* IL_13: call Void Neg(System.Int32)*/
        asm1.x600000b((444123|0));
        /* IL_18: ldc.i4 -518495*/
        /* IL_1D: call Void Neg(System.Int32)*/
        asm1.x600000b((-518495|0));
        /* IL_22: ldc.r8 123*/
        /* IL_2B: call Void Neg(System.Double)*/
        asm1.x600000c((+123));
        /* IL_30: ldc.r8 -123*/
        /* IL_39: call Void Neg(System.Double)*/
        asm1.x600000c((+-123));
        /* IL_3E: ldc.r8 444123*/
        /* IL_47: call Void Neg(System.Double)*/
        asm1.x600000c((+444123));
        /* IL_4C: ldc.r8 -518495*/
        /* IL_55: call Void Neg(System.Double)*/
        asm1.x600000c((+-518495));
        /* IL_5A: ret */
        return ;
    };
    /* static System.Void Program.Neg(Int32)*/
    asm.x600000b_init = function ()
    {
        ((asm0)["System.Int32"]().init)();
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function (arg0)
    {
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function Neg(arg0)
    {
        var t0;
        t0 = (asm0)["System.Int32"]();
        /* IL_00: ldarg.0 */
        /* IL_01: neg */
        /* IL_02: box System.Int32*/
        /* IL_07: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (-(arg0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0C: ret */
        return ;
    };
    /* static System.Void Program.Neg(Double)*/
    asm.x600000c_init = function ()
    {
        ((asm0)["System.Double"]().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function (arg0)
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Neg(arg0)
    {
        var t0;
        t0 = (asm0)["System.Double"]();
        /* IL_00: ldarg.0 */
        /* IL_01: neg */
        /* IL_02: box System.Double*/
        /* IL_07: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (-(arg0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0C: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
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
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
