var asm1; (function (asm)
{
    asm.FullName = "Structs.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        (asm1.A().init)();
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
        var t0;
        var loc0;
        var __pos__;
        t0 = asm1.A();
        loc0 = new (asm1.A())();
        __pos__ = 0x0;
        /* IL_00: nop  Structs.cs:10:5*/
        /* IL_01: ldloca.s 0 */
        /* IL_04: initobj A */
        loc0 = new t0();
        /* IL_09: ldloca.s 0 */
        /* IL_0B: ldc.i4 123456789 */
        /* IL_10: stfld Int32 Value */
        loc0.Value = (123456789|0);
        /* IL_15: ldloc.0  */
        /* IL_16: call Void Print(A) */
        asm1.x600000c(BLR.clone_value(loc0));
        /* IL_1B: nop  */
        /* IL_1C: ldloc.0  */
        /* IL_1D: call Void Mutate(A) */
        asm1.x600000b(BLR.clone_value(loc0));
        /* IL_22: nop  */
        /* IL_23: ldloc.0  */
        /* IL_24: call Void Print(A) */
        asm1.x600000c(BLR.clone_value(loc0));
        /* IL_29: nop  */
        /* IL_2A: ret  Structs.cs:17:5*/
        return ;
    };
    /* static System.Void Program.Mutate(A)*/
    asm.x600000b = function Mutate(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  Structs.cs:20:5*/
        /* IL_01: ldarga.s 0 */
        /* IL_03: ldc.i4 999 */
        /* IL_08: stfld Int32 Value */
        arg0.Value = (999|0);
        /* IL_0D: ldarg.0  */
        /* IL_0E: call Void Print(A) */
        asm1.x600000c(BLR.clone_value(arg0));
        /* IL_13: nop  */
        /* IL_14: ret  Structs.cs:23:5*/
        return ;
    };;
    /* static System.Void Program.Print(A)*/
    asm.x600000c = function Print(arg0)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop  Structs.cs:26:5*/
        /* IL_01: ldarga.s 0 */
        /* IL_03: ldfld Int32 Value */
        /* IL_08: box System.Int32 */
        /* IL_0D: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': arg0.Value,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_12: nop  */
        /* IL_13: ret  Structs.cs:28:5*/
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
    asm.A = BLR.declare_type(
        "A",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Value = 0;
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
