var asm1;(function (asm)
{
    asm.FullName = "ReferenceEquals.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void C`1.CheckEquals(T)*/
    asm.x6000002_init = function (T)
    {
        return function ()
        {
            ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
            ((asm1)["C`1"](T).init)();
        };
    };;
    asm.x6000002 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000002_init(T).apply)(this,arguments);
            return (asm.x6000002_(T).apply)(this,arguments);
        };
    };;
    asm.x6000002_ = function (T)
    {
        return function CheckEquals(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            t0 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
            t1 = T;
            t2 = (asm1)["C`1"](t1);
            t3 = (asm0)["System.Boolean"]();
            /* IL_00: nop  */
            /* IL_01: ldsfld T t */
            /* IL_06: box T */
            /* IL_0B: ldarg.0  */
            /* IL_0C: box T */
            /* IL_12: ceq  */
            /* IL_13: box System.Boolean */
            /* IL_18: call Void WriteLine(System.Object) */
            asm0.x600005a({
                    'boxed': ((CILJS.box(t2.t,t1) === CILJS.box(arg0,t1)) ? (1) : (0)),
                    'type': t3,
                    'vtable': t3.prototype.vtable,
                    'ifacemap': t3.prototype.ifacemap
                });
            /* IL_1D: nop  */
            /* IL_1E: ret  */
            return ;
        };
    };
    /*  C`1..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000004_init = function ()
    {
        (asm1.Program().init)();
        (asm1.B().init)();
        (asm1.A().init)();
        ((asm1)["C`1"](asm1.A()).init)();
        ((asm1)["C`1"](asm1.B()).init)();
        asm.x6000004 = asm.x6000004_;
    };;
    asm.x6000004 = function ()
    {
        asm.x6000004_init.apply(this,arguments);
        return asm.x6000004_.apply(this,arguments);
    };;
    asm.x6000004_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var loc1;
        var loc2;
        var loc4;
        var loc0;
        var loc3;
        CILJS.init_base_types();
        t0 = asm1.Program();
        t1 = (asm0)["System.Boolean"]();
        t2 = asm1.B();
        t3 = asm1.A();
        t4 = (asm1)["C`1"](t3);
        t5 = (asm1)["C`1"](t2);
        loc1 = new (asm1.B())();
        loc2 = new (asm1.B())();
        loc4 = new (asm1.B())();
        /* IL_00: nop  */
        /* IL_01: ldsfld Object a */
        /* IL_06: ldnull  */
        /* IL_08: ceq  */
        /* IL_09: box System.Boolean */
        /* IL_0E: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((t0.a === null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_13: nop  */
        /* IL_14: ldsfld B b */
        /* IL_19: box B */
        /* IL_1E: ldnull  */
        /* IL_20: ceq  */
        /* IL_21: box System.Boolean */
        /* IL_26: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (({
                    'boxed': CILJS.clone_value(t0.b),
                    'type': t2,
                    'vtable': t2.prototype.vtable,
                    'ifacemap': t2.prototype.ifacemap
                } === null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_2B: nop  */
        /* IL_2C: ldsfld Object b4 */
        /* IL_31: ldnull  */
        /* IL_33: ceq  */
        /* IL_34: box System.Boolean */
        /* IL_39: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((t0.b4 === null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_3E: nop  */
        /* IL_3F: ldsfld Object a */
        /* IL_44: ldnull  */
        /* IL_46: ceq  */
        /* IL_47: box System.Boolean */
        /* IL_4C: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((t0.a === null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_51: nop  */
        /* IL_52: ldsfld B b */
        /* IL_57: box B */
        /* IL_5C: ldnull  */
        /* IL_5E: ceq  */
        /* IL_5F: box System.Boolean */
        /* IL_64: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (({
                    'boxed': CILJS.clone_value(t0.b),
                    'type': t2,
                    'vtable': t2.prototype.vtable,
                    'ifacemap': t2.prototype.ifacemap
                } === null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_69: nop  */
        /* IL_6A: ldsfld Object b4 */
        /* IL_6F: ldnull  */
        /* IL_71: ceq  */
        /* IL_72: box System.Boolean */
        /* IL_77: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((t0.b4 === null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_7C: nop  */
        /* IL_7D: newobj Void .ctor() */
        /* IL_82: stloc.0  */
        loc0 = CILJS.newobj(t3,asm1.x6000001,[null]);
        /* IL_83: ldloc.0  */
        /* IL_84: stsfld Object a */
        (t0)["a"] = loc0;
        /* IL_89: ldloc.0  */
        /* IL_8A: call Void CheckEquals(A) */
        asm1.x6000005(loc0);
        /* IL_8F: nop  */
        /* IL_90: newobj Void .ctor() */
        /* IL_95: call Void CheckEquals(A) */
        asm1.x6000005(CILJS.newobj(t3,asm1.x6000001,[null]));
        /* IL_9A: nop  */
        /* IL_9B: ldloca.s 1 */
        /* IL_9E: initobj B */
        loc1 = new t2();
        /* IL_A3: ldloc.1  */
        /* IL_A4: stsfld B b */
        (t0)["b"] = loc1;
        /* IL_A9: ldloc.1  */
        /* IL_AA: box B */
        /* IL_AF: stsfld Object b4 */
        (t0)["b4"] = {
            'boxed': CILJS.clone_value(loc1),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        };
        /* IL_B4: ldloc.1  */
        /* IL_B5: ldloc.1  */
        /* IL_B6: box B */
        /* IL_BB: call Void CheckEquals(B, System.Object) */
        asm1.x6000006(CILJS.clone_value(loc1),{
                'boxed': CILJS.clone_value(loc1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_C0: nop  */
        /* IL_C1: ldloca.s 2 */
        /* IL_C4: initobj B */
        loc2 = new t2();
        /* IL_C9: ldloc.2  */
        /* IL_CA: ldloc.2  */
        /* IL_CB: box B */
        /* IL_D0: call Void CheckEquals(B, System.Object) */
        asm1.x6000006(CILJS.clone_value(loc2),{
                'boxed': CILJS.clone_value(loc2),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_D5: nop  */
        /* IL_D6: ldsfld Object b4 */
        /* IL_DB: stloc.3  */
        loc3 = t0.b4;
        /* IL_DC: ldloc.3  */
        /* IL_DD: ldsfld Object b4 */
        /* IL_E3: ceq  */
        /* IL_E4: box System.Boolean */
        /* IL_E9: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((loc3 === t0.b4) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_EE: nop  */
        /* IL_EF: ldloc.1  */
        /* IL_F0: box B */
        /* IL_F5: ldloc.1  */
        /* IL_F6: box B */
        /* IL_FC: ceq  */
        /* IL_FD: box System.Boolean */
        /* IL_102: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (({
                    'boxed': CILJS.clone_value(loc1),
                    'type': t2,
                    'vtable': t2.prototype.vtable,
                    'ifacemap': t2.prototype.ifacemap
                } === {
                    'boxed': CILJS.clone_value(loc1),
                    'type': t2,
                    'vtable': t2.prototype.vtable,
                    'ifacemap': t2.prototype.ifacemap
                }) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_107: nop  */
        /* IL_108: ldloc.1  */
        /* IL_109: box B */
        /* IL_10E: ldnull  */
        /* IL_110: ceq  */
        /* IL_111: box System.Boolean */
        /* IL_116: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (({
                    'boxed': CILJS.clone_value(loc1),
                    'type': t2,
                    'vtable': t2.prototype.vtable,
                    'ifacemap': t2.prototype.ifacemap
                } === null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_11B: nop  */
        /* IL_11C: ldloc.0  */
        /* IL_11D: stsfld IKVM.Reflection.GenericFieldInstance */
        (t4)["t"] = loc0;
        /* IL_122: ldloc.0  */
        /* IL_123: call Void CheckEquals(A) */
        (asm1.x6000002(asm1.A()))(loc0);
        /* IL_128: nop  */
        /* IL_129: newobj Void .ctor() */
        /* IL_12E: call Void CheckEquals(A) */
        (asm1.x6000002(asm1.A()))(CILJS.newobj(t3,asm1.x6000001,[null]));
        /* IL_133: nop  */
        /* IL_134: ldloc.1  */
        /* IL_135: stsfld IKVM.Reflection.GenericFieldInstance */
        (t5)["t"] = loc1;
        /* IL_13A: ldloc.1  */
        /* IL_13B: call Void CheckEquals(B) */
        (asm1.x6000002(asm1.B()))(CILJS.clone_value(loc1));
        /* IL_140: nop  */
        /* IL_141: ldloca.s 4 */
        /* IL_144: initobj B */
        loc4 = new t2();
        /* IL_149: ldloc.s 4 */
        /* IL_14B: call Void CheckEquals(B) */
        (asm1.x6000002(asm1.B()))(CILJS.clone_value(loc4));
        /* IL_150: nop  */
        /* IL_151: ret  */
        return ;
    };
    /* static System.Void Program.CheckEquals(A)*/
    asm.x6000005_init = function ()
    {
        (asm1.Program().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function (arg0)
    {
        asm.x6000005_init.apply(this,arguments);
        return asm.x6000005_.apply(this,arguments);
    };;
    asm.x6000005_ = function CheckEquals(arg0)
    {
        var t0;
        var t1;
        t0 = asm1.Program();
        t1 = (asm0)["System.Boolean"]();
        /* IL_00: nop  */
        /* IL_01: ldsfld Object a */
        /* IL_06: ldarg.0  */
        /* IL_08: ceq  */
        /* IL_09: box System.Boolean */
        /* IL_0E: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((t0.a === arg0) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_13: nop  */
        /* IL_14: ldarg.0  */
        /* IL_15: ldsfld Object a */
        /* IL_1B: ceq  */
        /* IL_1C: box System.Boolean */
        /* IL_21: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((arg0 === t0.a) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_26: nop  */
        /* IL_27: ldarg.0  */
        /* IL_28: ldnull  */
        /* IL_2A: ceq  */
        /* IL_2B: box System.Boolean */
        /* IL_30: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((arg0 === null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_35: nop  */
        /* IL_36: ldarg.0  */
        /* IL_37: ldnull  */
        /* IL_39: ceq  */
        /* IL_3A: box System.Boolean */
        /* IL_3F: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((arg0 === null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_44: nop  */
        /* IL_45: ret  */
        return ;
    };
    /* static System.Void Program.CheckEquals(B,Object)*/
    asm.x6000006_init = function ()
    {
        (asm1.Program().init)();
        (asm1.B().init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function (arg0, arg1)
    {
        asm.x6000006_init.apply(this,arguments);
        return asm.x6000006_.apply(this,arguments);
    };;
    asm.x6000006_ = function CheckEquals(arg0, arg1)
    {
        var t0;
        var t1;
        var t2;
        t0 = asm1.Program();
        t1 = asm1.B();
        t2 = (asm0)["System.Boolean"]();
        /* IL_00: nop  */
        /* IL_01: ldsfld B b */
        /* IL_06: box B */
        /* IL_0B: ldarg.0  */
        /* IL_0C: box B */
        /* IL_12: ceq  */
        /* IL_13: box System.Boolean */
        /* IL_18: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (({
                    'boxed': CILJS.clone_value(t0.b),
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                } === {
                    'boxed': CILJS.clone_value(arg0),
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                }) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_1D: nop  */
        /* IL_1E: ldsfld B b */
        /* IL_23: box B */
        /* IL_28: ldarg.1  */
        /* IL_2A: ceq  */
        /* IL_2B: box System.Boolean */
        /* IL_30: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (({
                    'boxed': CILJS.clone_value(t0.b),
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                } === arg1) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_35: nop  */
        /* IL_36: ldsfld Object b4 */
        /* IL_3B: ldarg.0  */
        /* IL_3C: box B */
        /* IL_42: ceq  */
        /* IL_43: box System.Boolean */
        /* IL_48: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((t0.b4 === {
                    'boxed': CILJS.clone_value(arg0),
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                }) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_4D: nop  */
        /* IL_4E: ldsfld Object b4 */
        /* IL_53: ldarg.1  */
        /* IL_55: ceq  */
        /* IL_56: box System.Boolean */
        /* IL_5B: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((t0.b4 === arg1) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_60: nop  */
        /* IL_61: ldarg.0  */
        /* IL_62: box B */
        /* IL_67: ldnull  */
        /* IL_69: ceq  */
        /* IL_6A: box System.Boolean */
        /* IL_6F: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (({
                    'boxed': CILJS.clone_value(arg0),
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                } === null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_74: nop  */
        /* IL_75: ldarg.1  */
        /* IL_76: ldnull  */
        /* IL_78: ceq  */
        /* IL_79: box System.Boolean */
        /* IL_7E: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((arg1 === null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_83: nop  */
        /* IL_84: ldarg.0  */
        /* IL_85: box B */
        /* IL_8A: ldnull  */
        /* IL_8C: ceq  */
        /* IL_8D: box System.Boolean */
        /* IL_92: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (({
                    'boxed': CILJS.clone_value(arg0),
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                } === null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_97: nop  */
        /* IL_98: ldarg.1  */
        /* IL_99: ldnull  */
        /* IL_9B: ceq  */
        /* IL_9C: box System.Boolean */
        /* IL_A1: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((arg1 === null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_A6: nop  */
        /* IL_A7: ldsfld Object b4 */
        /* IL_AC: ldarg.0  */
        /* IL_AD: box B */
        /* IL_B3: ceq  */
        /* IL_B4: box System.Boolean */
        /* IL_B9: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((t0.b4 === {
                    'boxed': CILJS.clone_value(arg0),
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                }) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_BE: nop  */
        /* IL_BF: ldsfld Object b4 */
        /* IL_C4: ldarg.1  */
        /* IL_C6: ceq  */
        /* IL_C7: box System.Boolean */
        /* IL_CC: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((t0.b4 === arg1) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_D1: nop  */
        /* IL_D2: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
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
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["C`1"] = CILJS.declare_type(
        "C_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.t = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            (this.GenericArguments)["asm1.t2000004"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000004<" + (T.GenericTypeMetadataName + ">"));
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.a = null;
            this.b = new (asm1.B())();
            this.b4 = null;
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000004;
})(asm1 || (asm1 = {}));
