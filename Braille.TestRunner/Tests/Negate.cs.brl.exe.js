var asm1; (function (asm)
{
    asm.FullName = "Negate.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
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
        BLR.init_base_types();
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  Negate.cs:5:5*/
        /* IL_01: ldc.i4.s 123 */
        /* IL_03: call Void Neg(System.Int32) */
        asm1.x600000b((123|0));
        /* IL_08: nop  */
        /* IL_09: ldc.i4.s 133 */
        /* IL_0B: call Void Neg(System.Int32) */
        asm1.x600000b((-123|0));
        /* IL_10: nop  */
        /* IL_11: ldc.i4 444123 */
        /* IL_16: call Void Neg(System.Int32) */
        asm1.x600000b((444123|0));
        /* IL_1B: nop  */
        /* IL_1C: ldc.i4 -518495 */
        /* IL_21: call Void Neg(System.Int32) */
        asm1.x600000b((-518495|0));
        /* IL_26: nop  */
        /* IL_27: ldc.r8 123 */
        /* IL_30: call Void Neg(System.Double) */
        asm1.x600000c((+123));
        /* IL_35: nop  */
        /* IL_36: ldc.r8 -123 */
        /* IL_3F: call Void Neg(System.Double) */
        asm1.x600000c((+-123));
        /* IL_44: nop  */
        /* IL_45: ldc.r8 444123 */
        /* IL_4E: call Void Neg(System.Double) */
        asm1.x600000c((+444123));
        /* IL_53: nop  */
        /* IL_54: ldc.r8 -518495 */
        /* IL_5D: call Void Neg(System.Double) */
        asm1.x600000c((+-518495));
        /* IL_62: nop  */
        /* IL_63: ret  Negate.cs:14:5*/
        return ;
    };
    /* static System.Void Program.Neg(Int32)*/
    asm.x600000b = function Neg(arg0)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop  Negate.cs:17:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: neg  */
        /* IL_03: box System.Int32 */
        /* IL_08: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (-(arg0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0D: nop  */
        /* IL_0E: ret  Negate.cs:19:5*/
        return ;
    };;
    /* static System.Void Program.Neg(Double)*/
    asm.x600000c = function Neg(arg0)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.Double"]();
        __pos__ = 0x0;
        /* IL_00: nop  Negate.cs:22:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: neg  */
        /* IL_03: box System.Double */
        /* IL_08: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (-(arg0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0D: nop  */
        /* IL_0E: ret  Negate.cs:24:5*/
        return ;
    };;
    /*  Program..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
