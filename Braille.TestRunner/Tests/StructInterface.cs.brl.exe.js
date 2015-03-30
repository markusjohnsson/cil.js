var asm1; (function (asm)
{
    asm.FullName = "StructInterface.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.Void S.Foo()*/
    asm.x600000b = function Foo(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  StructInterface.cs:9:23*/
        /* IL_01: ldstr Foo */
        /* IL_06: call Void Log(System.Object) */
        asm1.x6000001(BLR.new_string("Foo"));
        /* IL_0B: nop  */
        /* IL_0C: ret  StructInterface.cs:9:45*/
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000c_init = function ()
    {
        (asm1.S().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        BLR.init_base_types();
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var loc0;
        var __pos__;
        var loc1;
        t0 = asm1.S();
        loc0 = new (asm1.S())();
        __pos__ = 0x0;
        /* IL_00: nop  StructInterface.cs:15:5*/
        /* IL_01: ldloca.s 0 */
        /* IL_04: initobj S */
        loc0 = new t0();
        /* IL_09: ldloc.0  */
        /* IL_0A: box S */
        /* IL_0F: stloc.1  */
        loc1 = {
            'boxed': BLR.clone_value(loc0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        };
        /* IL_10: ldloc.1  */
        /* IL_11: call Void Run(I) */
        asm1.x600000d(loc1);
        /* IL_16: nop  */
        /* IL_17: ret  StructInterface.cs:19:5*/
        return ;
    };
    /* static System.Void Program.Run(I)*/
    asm.x600000d_init = function ()
    {
        (asm1.I().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0)
    {
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Run(arg0)
    {
        var t0;
        var __pos__;
        t0 = asm1.I();
        __pos__ = 0x0;
        /* IL_00: nop  StructInterface.cs:22:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: callvirt Void Foo() */
        (((arg0.ifacemap)[t0].x600000a)())(BLR.convert_box_to_pointer_as_needed(arg0));
        /* IL_07: nop  */
        /* IL_08: ret  StructInterface.cs:24:5*/
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
    asm.I = BLR.declare_type(
        "I",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I",false,false,true,false,false,[],[
                    [asm1, "x600000a", "Foo"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
        });
    asm.S = BLR.declare_type(
        "S",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"S",true,false,false,false,false,[],[
                    [asm1, "x600000b", "Foo"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.I()],
                {
                    'x600000a': function (){ return asm1.x600000b;}
                });
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
