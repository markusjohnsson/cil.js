var asm1;(function (asm)
{
    asm.FullName = "IsInstGenericSubclass.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  C`1..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000003(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000004(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  E..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000004(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000007_init = function ()
    {
        (asm1.A().init)();
        (asm1.D().init)();
        (asm1.E().init)();
        (asm1.B().init)();
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
        var t1;
        var t2;
        var t3;
        CILJS.init_base_types();
        t0 = asm1.A();
        t1 = asm1.D();
        t2 = asm1.E();
        t3 = asm1.B();
        /* IL_00: nop  */
        /* IL_01: ldnull  */
        /* IL_02: call Void Test1(C) */
        asm1.x6000009(null);
        /* IL_07: nop  */
        /* IL_08: ldnull  */
        /* IL_09: call Void Test2[A](C`1[A]) */
        (asm1.x600000a(asm1.A()))(null);
        /* IL_0E: nop  */
        /* IL_0F: call Void TestCreate[A]() */
        (asm1.x6000008(asm1.A()))();
        /* IL_14: nop  */
        /* IL_15: newobj Void .ctor() */
        /* IL_1A: call Void Test1(C) */
        asm1.x6000009(CILJS.newobj(t1,asm1.x6000005,[null]));
        /* IL_1F: nop  */
        /* IL_20: newobj Void .ctor() */
        /* IL_25: call Void Test1(C) */
        asm1.x6000009(CILJS.newobj(t2,asm1.x6000006,[null]));
        /* IL_2A: nop  */
        /* IL_2B: newobj Void .ctor() */
        /* IL_30: call Void Test2[A](C`1[A]) */
        (asm1.x600000a(asm1.A()))(CILJS.newobj(t1,asm1.x6000005,[null]));
        /* IL_35: nop  */
        /* IL_36: newobj Void .ctor() */
        /* IL_3B: call Void Test2[B](C`1[B]) */
        (asm1.x600000a(asm1.B()))(CILJS.newobj(t2,asm1.x6000006,[null]));
        /* IL_40: nop  */
        /* IL_41: ret  */
        return ;
    };
    /* static System.Void Program.TestCreate<T>()*/
    asm.x6000008_init = function (T)
    {
        return function ()
        {
            (asm1.D().init)();
            ((asm1)["C`1"](T).init)();
        };
    };;
    asm.x6000008 = function (T)
    {
        return function ()
        {
            (asm.x6000008_init(T).apply)(this,arguments);
            return (asm.x6000008_(T).apply)(this,arguments);
        };
    };;
    asm.x6000008_ = function (T)
    {
        return function TestCreate()
        {
            var t0;
            var t1;
            var t2;
            var loc0;
            t0 = asm1.D();
            t1 = T;
            t2 = (asm1)["C`1"](t1);
            /* IL_00: nop  */
            /* IL_01: newobj Void .ctor() */
            /* IL_06: castclass C`1[T] */
            /* IL_0B: stloc.0  */
            loc0 = CILJS.cast_class(CILJS.newobj(t0,asm1.x6000005,[null]),t2);
            /* IL_0C: ldloc.0  */
            /* IL_0D: call Void Test1(C) */
            asm1.x6000009(loc0);
            /* IL_12: nop  */
            /* IL_13: ldloc.0  */
            /* IL_14: call Void Test2[T](C`1[T]) */
            (asm1.x600000a(T))(loc0);
            /* IL_19: nop  */
            /* IL_1A: ret  */
            return ;
        };
    };
    /* static System.Void Program.Test1(C)*/
    asm.x6000009_init = function ()
    {
        (asm1.A().init)();
        ((asm1)["C`1"](asm1.A()).init)();
        (asm1.B().init)();
        ((asm1)["C`1"](asm1.B()).init)();
        asm.x6000009 = asm.x6000009_;
    };;
    asm.x6000009 = function (arg0)
    {
        asm.x6000009_init.apply(this,arguments);
        return asm.x6000009_.apply(this,arguments);
    };;
    asm.x6000009_ = function Test1(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        t0 = asm1.A();
        t1 = (asm1)["C`1"](t0);
        t2 = (asm0)["System.Boolean"]();
        t3 = asm1.B();
        t4 = (asm1)["C`1"](t3);
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: isinst C`1[A] */
        /* IL_07: ldnull  */
        /* IL_09: cgt.un  */
        /* IL_0A: box System.Boolean */
        /* IL_0F: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(((t1.IsInst(arg0) !== null) ? (1) : (0)),t2));
        /* IL_14: nop  */
        /* IL_15: ldarg.0  */
        /* IL_16: isinst C`1[B] */
        /* IL_1B: ldnull  */
        /* IL_1D: cgt.un  */
        /* IL_1E: box System.Boolean */
        /* IL_23: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(((t4.IsInst(arg0) !== null) ? (1) : (0)),t2));
        /* IL_28: nop  */
        /* IL_29: ldarg.0  */
        /* IL_2A: ldnull  */
        /* IL_2C: cgt.un  */
        /* IL_2D: box System.Boolean */
        /* IL_32: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(((arg0 !== null) ? (1) : (0)),t2));
        /* IL_37: nop  */
        /* IL_38: ret  */
        return ;
    };
    /* static System.Void Program.Test2<T>(C`1)*/
    asm.x600000a_init = function (T)
    {
        return function ()
        {
            (asm1.A().init)();
            ((asm1)["C`1"](asm1.A()).init)();
            (asm1.B().init)();
            ((asm1)["C`1"](asm1.B()).init)();
            asm.x600000a = asm.x600000a_;
        };
    };;
    asm.x600000a = function (T)
    {
        return function (arg0)
        {
            (asm.x600000a_init(T).apply)(this,arguments);
            return (asm.x600000a_(T).apply)(this,arguments);
        };
    };;
    asm.x600000a_ = function (T)
    {
        return function Test2(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            t0 = asm1.A();
            t1 = (asm1)["C`1"](t0);
            t2 = (asm0)["System.Boolean"]();
            t3 = asm1.B();
            t4 = (asm1)["C`1"](t3);
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: isinst C`1[A] */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: box System.Boolean */
            /* IL_0F: call Void WriteLine(System.Object) */
            asm0.x600005a(CILJS.make_box(((t1.IsInst(arg0) !== null) ? (1) : (0)),t2));
            /* IL_14: nop  */
            /* IL_15: ldarg.0  */
            /* IL_16: isinst C`1[B] */
            /* IL_1B: ldnull  */
            /* IL_1D: cgt.un  */
            /* IL_1E: box System.Boolean */
            /* IL_23: call Void WriteLine(System.Object) */
            asm0.x600005a(CILJS.make_box(((t4.IsInst(arg0) !== null) ? (1) : (0)),t2));
            /* IL_28: nop  */
            /* IL_29: ldarg.0  */
            /* IL_2A: ldnull  */
            /* IL_2C: cgt.un  */
            /* IL_2D: box System.Boolean */
            /* IL_32: call Void WriteLine(System.Object) */
            asm0.x600005a(CILJS.make_box(((arg0 !== null) ? (1) : (0)),t2));
            /* IL_37: nop  */
            /* IL_38: ldarg.0  */
            /* IL_39: ldnull  */
            /* IL_3B: cgt.un  */
            /* IL_3C: box System.Boolean */
            /* IL_41: call Void WriteLine(System.Object) */
            asm0.x600005a(CILJS.make_box(((arg0 !== null) ? (1) : (0)),t2));
            /* IL_46: nop  */
            /* IL_47: ret  */
            return ;
        };
    };
    /*  Program..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
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
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["C`1"] = CILJS.declare_type(
        "C_1",
        ["T"],
        function (T)
        {
            return asm1.C();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C`1",false,false,false,true,false,[],[],asm1.C(),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            (this.GenericArguments)["asm1.t2000005"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000005<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.D = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            (asm1.A().init)();
            return (asm1)["C`1"](asm1.A());
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm1)["C`1"](asm1.A()),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000005"] = [asm1.A()];
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.E = CILJS.declare_type(
        "E",
        [],
        function ()
        {
            (asm1.B().init)();
            return (asm1)["C`1"](asm1.B());
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"E",false,false,false,false,false,[],[],(asm1)["C`1"](asm1.B()),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000005"] = [asm1.B()];
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000007;
})(asm1 || (asm1 = {}));
