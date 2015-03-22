var asm1; (function (asm)
{
    asm.FullName = "Char.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        var __pos__;
        t0 = (asm0)["System.ValueType"]();
        __pos__ = 0x0;
        /* IL_00: ldstr hello world*/
        /* IL_05: call Void Log(System.String)*/
        asm1.x600000b(BLR.new_string("hello world"));
        /* IL_0A: ldstr xyzw*/
        /* IL_0F: call Void Log(System.String)*/
        asm1.x600000b(BLR.new_string("xyzw"));
        /* IL_14: ldstr 1234*/
        /* IL_19: call Void Log(System.String)*/
        asm1.x600000b(BLR.new_string("1234"));
        /* IL_1E: ret */
        return ;
    };
    /* static System.Void Program.Log(String)*/
    asm.x600000b_init = function ()
    {
        ((asm0)["System.Char"]().init)();
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function (arg0)
    {
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function Log(arg0)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.Char"]();
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.0 */
        /* IL_02: callvirt Char get_Chars(System.Int32)*/
        /* IL_07: box System.Char*/
        /* IL_0C: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000182(arg0,(0|0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_11: ldarg.0 */
        /* IL_12: ldc.i4.1 */
        /* IL_13: callvirt Char get_Chars(System.Int32)*/
        /* IL_18: box System.Char*/
        /* IL_1D: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000182(arg0,(1|0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_22: ldarg.0 */
        /* IL_23: ldc.i4.2 */
        /* IL_24: callvirt Char get_Chars(System.Int32)*/
        /* IL_29: box System.Char*/
        /* IL_2E: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000182(arg0,(2|0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_33: ldarg.0 */
        /* IL_34: ldc.i4.3 */
        /* IL_35: callvirt Char get_Chars(System.Int32)*/
        /* IL_3A: box System.Char*/
        /* IL_3F: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000182(arg0,(3|0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_44: ret */
        return ;
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
