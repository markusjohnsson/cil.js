var asm1; (function (asm)
{
    asm.FullName = "StringEquality.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static System.Void Program.Cmp(String)*/
    asm.x600000a_init = function ()
    {
        ((asm0)["System.Boolean"]().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function (arg0)
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Cmp(arg0)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Hello World*/
        /* IL_06: call Boolean op_Equality(System.String, System.String)*/
        /* IL_0B: box System.Boolean*/
        /* IL_10: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x600018f(arg0,BLR.new_string("Hello World")),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_15: ldarg.0 */
        /* IL_16: ldstr Hello World*/
        /* IL_1B: callvirt Boolean Equals(System.String)*/
        /* IL_20: box System.Boolean*/
        /* IL_25: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((arg0.vtable)["asm0.x6000190"]())(arg0,BLR.new_string("Hello World")),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_2A: ldstr Hello World*/
        /* IL_2F: ldarg.0 */
        /* IL_30: callvirt Boolean Equals(System.String)*/
        /* IL_35: box System.Boolean*/
        /* IL_3A: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((BLR.new_string("Hello World").vtable)["asm0.x6000190"])())(BLR.new_string("Hello World"),arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_3F: ret */
        return ;
    };
    /* static System.Void Program.Main()*/
    asm.x600000b_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function ()
    {
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function Main()
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.ValueType"]();
        __pos__ = 0x0;
        /* IL_00: ldstr Hello World*/
        /* IL_05: call Void Cmp(System.String)*/
        asm1.x600000a(BLR.new_string("Hello World"));
        /* IL_0A: ldstr Hello, World*/
        /* IL_0F: call Void Cmp(System.String)*/
        asm1.x600000a(BLR.new_string("Hello, World"));
        /* IL_14: ldstr Hello*/
        /* IL_19: call Void Cmp(System.String)*/
        asm1.x600000a(BLR.new_string("Hello"));
        /* IL_1E: ret */
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
    asm.entryPoint = asm.x600000b;
})(asm1 || (asm1 = {}));
