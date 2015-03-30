var asm1; (function (asm)
{
    asm.FullName = "IntegerConversion.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        /* IL_00: nop  IntegerConversion.cs:6:5*/
        /* IL_01: ldc.r8 2 */
        /* IL_0A: call Void Test(System.Double) */
        asm1.x600000b((+2));
        /* IL_0F: nop  */
        /* IL_10: ldc.r8 3 */
        /* IL_19: call Void Test(System.Double) */
        asm1.x600000b((+3));
        /* IL_1E: nop  */
        /* IL_1F: ldc.r8 4 */
        /* IL_28: call Void Test(System.Double) */
        asm1.x600000b((+4));
        /* IL_2D: nop  */
        /* IL_2E: ldc.r8 8 */
        /* IL_37: call Void Test(System.Double) */
        asm1.x600000b((+8));
        /* IL_3C: nop  */
        /* IL_3D: ret  IntegerConversion.cs:11:5*/
        return ;
    };
    /* static System.Void Program.Test(Double)*/
    asm.x600000b = function Test(arg0)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        /* IL_00: nop  IntegerConversion.cs:14:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: call Double Sqrt(System.Double) */
        /* IL_07: conv.i4  */
        /* IL_08: ldc.i4.1  */
        /* IL_0A: ceq  */
        /* IL_0B: box System.Boolean */
        /* IL_10: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((Math.sqrt(arg0) | (0|0)) === (1|0)) ? (1) : (0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_15: nop  */
        /* IL_16: ldarg.0  */
        /* IL_17: call Double Sqrt(System.Double) */
        /* IL_1C: conv.i4  */
        /* IL_1D: ldc.i4.2  */
        /* IL_1F: ceq  */
        /* IL_20: box System.Boolean */
        /* IL_25: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((Math.sqrt(arg0) | (0|0)) === (2|0)) ? (1) : (0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_2A: nop  */
        /* IL_2B: ldarg.0  */
        /* IL_2C: call Double Sqrt(System.Double) */
        /* IL_31: conv.i4  */
        /* IL_32: ldc.i4.3  */
        /* IL_34: ceq  */
        /* IL_35: box System.Boolean */
        /* IL_3A: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((Math.sqrt(arg0) | (0|0)) === (3|0)) ? (1) : (0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_3F: nop  */
        /* IL_40: ret  IntegerConversion.cs:18:5*/
        return ;
    };;
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
