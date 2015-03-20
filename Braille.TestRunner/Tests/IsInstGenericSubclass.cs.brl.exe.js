var asm1; (function (asm)
{
    asm.FullName = "IsInstGenericSubclass.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  A..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  B..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  C..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  C`1..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x600000c(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  D..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x600000d(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  E..ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x600000d(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000010_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.A().init)();
        (asm1.D().init)();
        (asm1.E().init)();
        (asm1.B().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var __pos__;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.A();
        t2 = asm1.D();
        t3 = asm1.E();
        t4 = asm1.B();
        __pos__ = 0x0;
        /* IL_00: call Void TestCreate[A]()*/
        (asm1.x6000011(asm1.A()))();
        /* IL_05: newobj Void .ctor()*/
        /* IL_0A: call Void Test1(C)*/
        asm1.x6000012(BLR.newobj(t2,asm1.x600000e,[null]));
        /* IL_0F: newobj Void .ctor()*/
        /* IL_14: call Void Test1(C)*/
        asm1.x6000012(BLR.newobj(t3,asm1.x600000f,[null]));
        /* IL_19: newobj Void .ctor()*/
        /* IL_1E: call Void Test2[A](C`1[A])*/
        (asm1.x6000013(asm1.A()))(BLR.newobj(t2,asm1.x600000e,[null]));
        /* IL_23: newobj Void .ctor()*/
        /* IL_28: call Void Test2[B](C`1[B])*/
        (asm1.x6000013(asm1.B()))(BLR.newobj(t3,asm1.x600000f,[null]));
        /* IL_2D: ret */
        return ;
    };
    /* static System.Void Program.TestCreate<T>()*/
    asm.x6000011_init = function (T)
    {
        return function ()
        {
            (asm1.D().init)();
            ((asm1)["C`1"](T).init)();
        };
    };;
    asm.x6000011 = function (T)
    {
        return function ()
        {
            (asm.x6000011_init(T).apply)(this,arguments);
            return (asm.x6000011_(T).apply)(this,arguments);
        };
    };;
    asm.x6000011_ = function (T)
    {
        return function TestCreate()
        {
            var t0;
            var t1;
            var t2;
            var __pos__;
            var loc0;
            t0 = asm1.D();
            t1 = T;
            t2 = (asm1)["C`1"](t1);
            __pos__ = 0x0;
            /* IL_00: newobj Void .ctor()*/
            /* IL_05: castclass C`1[T]*/
            /* IL_0A: stloc.0 */
            loc0 = BLR.cast_class(BLR.newobj(t0,asm1.x600000e,[null]),t2);
            /* IL_0B: ldloc.0 */
            /* IL_0C: call Void Test1(C)*/
            asm1.x6000012(loc0);
            /* IL_11: ldloc.0 */
            /* IL_12: call Void Test2[T](C`1[T])*/
            (asm1.x6000013(T))(loc0);
            /* IL_17: ret */
            return ;
        };
    };
    /* static System.Void Program.Test1(C)*/
    asm.x6000012_init = function ()
    {
        (asm1.A().init)();
        ((asm1)["C`1"](asm1.A()).init)();
        ((asm0)["System.Boolean"]().init)();
        (asm1.B().init)();
        ((asm1)["C`1"](asm1.B()).init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function (arg0)
    {
        asm.x6000012_init.apply(this,arguments);
        return asm.x6000012_.apply(this,arguments);
    };;
    asm.x6000012_ = function Test1(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var __pos__;
        t0 = asm1.A();
        t1 = (asm1)["C`1"](t0);
        t2 = (asm0)["System.Boolean"]();
        t3 = asm1.B();
        t4 = (asm1)["C`1"](t3);
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: isinst C`1[A]*/
        /* IL_06: ldnull */
        /* IL_08: cgt.un */
        /* IL_09: box System.Boolean*/
        /* IL_0E: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((t1.IsInst(arg0) !== null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_13: ldarg.0 */
        /* IL_14: isinst C`1[B]*/
        /* IL_19: ldnull */
        /* IL_1B: cgt.un */
        /* IL_1C: box System.Boolean*/
        /* IL_21: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((t4.IsInst(arg0) !== null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_26: ldarg.0 */
        /* IL_27: ldnull */
        /* IL_29: ceq */
        /* IL_2A: ldc.i4.0 */
        /* IL_2C: ceq */
        /* IL_2D: box System.Boolean*/
        /* IL_32: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_37: ret */
        return ;
    };
    /* static System.Void Program.Test2<T>(C`1)*/
    asm.x6000013_init = function (T)
    {
        return function ()
        {
            (asm1.A().init)();
            ((asm1)["C`1"](asm1.A()).init)();
            ((asm0)["System.Boolean"]().init)();
            (asm1.B().init)();
            ((asm1)["C`1"](asm1.B()).init)();
            asm.x6000013 = asm.x6000013_;
        };
    };;
    asm.x6000013 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000013_init(T).apply)(this,arguments);
            return (asm.x6000013_(T).apply)(this,arguments);
        };
    };;
    asm.x6000013_ = function (T)
    {
        return function Test2(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            var __pos__;
            t0 = asm1.A();
            t1 = (asm1)["C`1"](t0);
            t2 = (asm0)["System.Boolean"]();
            t3 = asm1.B();
            t4 = (asm1)["C`1"](t3);
            __pos__ = 0x0;
            /* IL_00: ldarg.0 */
            /* IL_01: isinst C`1[A]*/
            /* IL_06: ldnull */
            /* IL_08: cgt.un */
            /* IL_09: box System.Boolean*/
            /* IL_0E: call Void Log(System.Object)*/
            asm1.x6000001({
                    'boxed': ((t1.IsInst(arg0) !== null) ? (1) : (0)),
                    'type': t2,
                    'vtable': t2.prototype.vtable,
                    'ifacemap': t2.prototype.ifacemap
                });
            /* IL_13: ldarg.0 */
            /* IL_14: isinst C`1[B]*/
            /* IL_19: ldnull */
            /* IL_1B: cgt.un */
            /* IL_1C: box System.Boolean*/
            /* IL_21: call Void Log(System.Object)*/
            asm1.x6000001({
                    'boxed': ((t4.IsInst(arg0) !== null) ? (1) : (0)),
                    'type': t2,
                    'vtable': t2.prototype.vtable,
                    'ifacemap': t2.prototype.ifacemap
                });
            /* IL_26: ldarg.0 */
            /* IL_27: ldnull */
            /* IL_29: ceq */
            /* IL_2A: ldc.i4.0 */
            /* IL_2C: ceq */
            /* IL_2D: box System.Boolean*/
            /* IL_32: call Void Log(System.Object)*/
            asm1.x6000001({
                    'boxed': ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0)),
                    'type': t2,
                    'vtable': t2.prototype.vtable,
                    'ifacemap': t2.prototype.ifacemap
                });
            /* IL_37: ldarg.0 */
            /* IL_38: ldnull */
            /* IL_3A: ceq */
            /* IL_3B: ldc.i4.0 */
            /* IL_3D: ceq */
            /* IL_3E: box System.Boolean*/
            /* IL_43: call Void Log(System.Object)*/
            asm1.x6000001({
                    'boxed': ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0)),
                    'type': t2,
                    'vtable': t2.prototype.vtable,
                    'ifacemap': t2.prototype.ifacemap
                });
            /* IL_48: ret */
            return ;
        };
    };
    /*  Program..ctor()*/
    asm.x6000014 = function _ctor(arg0)
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
    asm.A = BLR.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.B = BLR.declare_type(
        "B",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.C = BLR.declare_type(
        "C",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["C`1"] = BLR.declare_type(
        "C_1",
        ["T"],
        function (T)
        {
            return new (asm1.C())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C`1",false,false,false,true,false,[],[],asm1.C(),BLR.is_inst_default(this),Array,"asm1.t2000009");
            (this.GenericArguments)["asm1.t2000009"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000009<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.D = BLR.declare_type(
        "D",
        [],
        function ()
        {
            (asm1.A().init)();
            return new ((asm1)["C`1"](asm1.A()))();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm1)["C`1"](asm1.A()),BLR.is_inst_default(this),Array,"asm1.t200000a");
            (this.GenericArguments)["asm1.t2000009"] = [asm1.A()];
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.E = BLR.declare_type(
        "E",
        [],
        function ()
        {
            (asm1.B().init)();
            return new ((asm1)["C`1"](asm1.B()))();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"E",false,false,false,false,false,[],[],(asm1)["C`1"](asm1.B()),BLR.is_inst_default(this),Array,"asm1.t200000b");
            (this.GenericArguments)["asm1.t2000009"] = [asm1.B()];
            this.GenericTypeMetadataName = "asm1.t200000b";
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000c");
            this.GenericTypeMetadataName = "asm1.t200000c";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
