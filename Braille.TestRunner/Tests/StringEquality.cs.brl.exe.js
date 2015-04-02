var asm1;(function (asm)
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
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Cmp(String)*/
    asm.x600000a = function Cmp(arg0)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        /* IL_00: nop  StringEquality.cs:5:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldstr Hello World */
        /* IL_07: call Boolean op_Equality(System.String, System.String) */
        /* IL_0C: box System.Boolean */
        /* IL_11: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60001c6(arg0,BLR.new_string("Hello World")),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_16: nop  */
        /* IL_17: ldarg.0  */
        /* IL_18: ldstr Hello World */
        /* IL_1D: callvirt Boolean Equals(System.String) */
        /* IL_22: box System.Boolean */
        /* IL_27: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((arg0.vtable)["asm0.x60001c7"]())(arg0,BLR.new_string("Hello World")),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_2C: nop  */
        /* IL_2D: ldstr Hello World */
        /* IL_32: ldarg.0  */
        /* IL_33: callvirt Boolean Equals(System.String) */
        /* IL_38: box System.Boolean */
        /* IL_3D: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((BLR.new_string("Hello World").vtable)["asm0.x60001c7"])())(BLR.new_string("Hello World"),arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_42: nop  */
        /* IL_43: ret  StringEquality.cs:9:5*/
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000b_init = function ()
    {
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function ()
    {
        BLR.init_base_types();
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function Main()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  StringEquality.cs:12:5*/
        /* IL_01: ldstr Hello World */
        /* IL_06: call Void Cmp(System.String) */
        asm1.x600000a(BLR.new_string("Hello World"));
        /* IL_0B: nop  */
        /* IL_0C: ldstr Hello, World */
        /* IL_11: call Void Cmp(System.String) */
        asm1.x600000a(BLR.new_string("Hello, World"));
        /* IL_16: nop  */
        /* IL_17: ldstr Hello */
        /* IL_1C: call Void Cmp(System.String) */
        asm1.x600000a(BLR.new_string("Hello"));
        /* IL_21: nop  */
        /* IL_22: ret  StringEquality.cs:16:5*/
        return ;
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
