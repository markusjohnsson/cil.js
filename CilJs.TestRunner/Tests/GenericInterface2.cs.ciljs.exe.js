var asm2; (function (asm)
{
    asm.FullName = "GenericInterface2.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void C.I<A>.Print()*/
    asm.x6000004 = function I_A__Print(arg0)
    {
        /* IL_00: ldstr A*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("A"));
        /* IL_0A: ret */
        return ;
    };;
    /* System.Void C.I<B>.Print()*/
    asm.x6000005 = function I_B__Print(arg0)
    {
        /* IL_00: ldstr B*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("B"));
        /* IL_0A: ret */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000007_init = function ()
    {
        (asm2.C().init)();
        asm.x6000007 = asm.x6000007_;
    };;
    asm.x6000007 = function ()
    {
        asm.x6000007_init.apply(this,arguments);
        return asm.x6000007_.apply(this,arguments);
    };;
    asm.x6000007_ = function Main()
    {
        var t0;
        var loc0;
        CILJS.init_base_types();
        t0 = asm2.C();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t0,asm2.x6000006,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: call Void PrintA(I`1[A])*/
        asm2.x6000008(loc0);
        /* IL_0C: ldloc.0 */
        /* IL_0D: call Void PrintB(I`1[B])*/
        asm2.x6000009(loc0);
        /* IL_12: ret */
        return ;
    };
    /* static System.Void Program.PrintA(I`1)*/
    asm.x6000008_init = function ()
    {
        (asm2.A().init)();
        ((asm2)["I`1"](asm2.A()).init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function (arg0)
    {
        asm.x6000008_init.apply(this,arguments);
        return asm.x6000008_.apply(this,arguments);
    };;
    asm.x6000008_ = function PrintA(arg0)
    {
        var t0;
        var t1;
        t0 = asm2.A();
        t1 = (asm2)["I`1"](t0);
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt Void Print()*/
        ((((arg0.ifacemap)[t1])[t0].x6000001)())(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_06: ret */
        return ;
    };
    /* static System.Void Program.PrintB(I`1)*/
    asm.x6000009_init = function ()
    {
        (asm2.B().init)();
        ((asm2)["I`1"](asm2.B()).init)();
        asm.x6000009 = asm.x6000009_;
    };;
    asm.x6000009 = function (arg0)
    {
        asm.x6000009_init.apply(this,arguments);
        return asm.x6000009_.apply(this,arguments);
    };;
    asm.x6000009_ = function PrintB(arg0)
    {
        var t0;
        var t1;
        t0 = asm2.B();
        t1 = (asm2)["I`1"](t0);
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt Void Print()*/
        ((((arg0.ifacemap)[t1])[t0].x6000001)())(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_06: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
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
                    [asm2, "x6000001", "Print"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            (this.GenericArguments)["asm2.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
        });
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm2.x6000004","asm2.x6000004");
            CILJS.declare_virtual(this,"asm2.x6000005","asm2.x6000005");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm2)["I`1"](asm2.A()), asm2.A()],
                {
                    'x6000001': function (){ return asm2.x6000004;}
                });
            CILJS.implement_interface(
                this,
                [(asm2)["I`1"](asm2.B()), asm2.B()],
                {
                    'x6000001': function (){ return asm2.x6000005;}
                });
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000007;
})(asm2 || (asm2 = {}));
