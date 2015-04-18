var asm1;(function (asm)
{
    asm.FullName = "GenericInterface2.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  A..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void C.I<A>.Print()*/
    asm.x600000d = function I_A__Print(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  GenericInterface2.cs:13:5*/
        /* IL_01: ldstr A */
        /* IL_06: call Void Log(System.Object) */
        asm1.x6000001(CILJS.new_string("A"));
        /* IL_0B: nop  */
        /* IL_0C: ret  GenericInterface2.cs:15:5*/
        return ;
    };;
    /* System.Void C.I<B>.Print()*/
    asm.x600000e = function I_B__Print(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  GenericInterface2.cs:18:5*/
        /* IL_01: ldstr B */
        /* IL_06: call Void Log(System.Object) */
        asm1.x6000001(CILJS.new_string("B"));
        /* IL_0B: nop  */
        /* IL_0C: ret  GenericInterface2.cs:20:5*/
        return ;
    };;
    /*  C..ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000010_init = function ()
    {
        (asm1.C().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        CILJS.init_base_types();
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = asm1.C();
        __pos__ = 0x0;
        /* IL_00: nop  GenericInterface2.cs:26:5*/
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x600000f,[null]);
        /* IL_07: ldloc.0  */
        /* IL_08: call Void PrintA(I`1[A]) */
        asm1.x6000011(loc0);
        /* IL_0D: nop  */
        /* IL_0E: ldloc.0  */
        /* IL_0F: call Void PrintB(I`1[B]) */
        asm1.x6000012(loc0);
        /* IL_14: nop  */
        /* IL_15: ret  GenericInterface2.cs:30:5*/
        return ;
    };
    /* static System.Void Program.PrintA(I`1)*/
    asm.x6000011_init = function ()
    {
        (asm1.A().init)();
        ((asm1)["I`1"](asm1.A()).init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function (arg0)
    {
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function PrintA(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        t0 = asm1.A();
        t1 = (asm1)["I`1"](t0);
        __pos__ = 0x0;
        /* IL_00: nop  GenericInterface2.cs:33:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: callvirt Void Print() */
        ((((arg0.ifacemap)[t1])[t0].x600000a)())(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_07: nop  */
        /* IL_08: ret  GenericInterface2.cs:35:5*/
        return ;
    };
    /* static System.Void Program.PrintB(I`1)*/
    asm.x6000012_init = function ()
    {
        (asm1.B().init)();
        ((asm1)["I`1"](asm1.B()).init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function (arg0)
    {
        asm.x6000012_init.apply(this,arguments);
        return asm.x6000012_.apply(this,arguments);
    };;
    asm.x6000012_ = function PrintB(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        t0 = asm1.B();
        t1 = (asm1)["I`1"](t0);
        __pos__ = 0x0;
        /* IL_00: nop  GenericInterface2.cs:38:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: callvirt Void Print() */
        ((((arg0.ifacemap)[t1])[t0].x600000a)())(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_07: nop  */
        /* IL_08: ret  GenericInterface2.cs:40:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000013 = function _ctor(arg0)
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
    (asm)["I`1"] = CILJS.declare_type(
        "I_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I`1",false,false,true,true,false,[],[
                    [asm1, "x600000a", "Print"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
        });
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            CILJS.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [(asm1)["I`1"](asm1.A()), asm1.A()],
                {
                    'x600000a': function (){ return asm1.x600000d;}
                });
            CILJS.implement_interface(
                this,
                [(asm1)["I`1"](asm1.B()), asm1.B()],
                {
                    'x600000a': function (){ return asm1.x600000e;}
                });
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
