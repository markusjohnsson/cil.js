var asm2;(function (asm)
{
    asm.FullName = "ReferenceEquals.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void C`1.CheckEquals(T)*/
    asm.x6000002_init = function (T)
    {
        return function ()
        {
            ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
            ((asm2)["C`1"](T).init)();
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
            t2 = (asm2)["C`1"](t1);
            t3 = (asm0)["System.Boolean"]();
            /* IL_00: ldsfld T t */
            /* IL_05: box T */
            /* IL_0A: ldarg.0  */
            /* IL_0B: box T */
            /* IL_10: call Boolean ReferenceEquals(System.Object, System.Object) */
            /* IL_15: box System.Boolean */
            /* IL_1A: call Void Log(System.Object) */
            asm1.x6000001({
                    'boxed': asm0.x60000ef(CILJS.box(t2.t,t1),CILJS.box(arg0,t1)),
                    'type': t3,
                    'vtable': t3.prototype.vtable,
                    'ifacemap': t3.prototype.ifacemap
                });
            /* IL_1F: ret  */
            return ;
        };
    };
    /*  C`1..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000004_init = function ()
    {
        (asm2.Program().init)();
        (asm2.B().init)();
        (asm2.A().init)();
        ((asm2)["C`1"](asm2.A()).init)();
        ((asm2)["C`1"](asm2.B()).init)();
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
        t0 = asm2.Program();
        t1 = (asm0)["System.Boolean"]();
        t2 = asm2.B();
        t3 = asm2.A();
        t4 = (asm2)["C`1"](t3);
        t5 = (asm2)["C`1"](t2);
        loc1 = new (asm2.B())();
        loc2 = new (asm2.B())();
        loc4 = new (asm2.B())();
        /* IL_00: ldsfld Object a */
        /* IL_05: ldnull  */
        /* IL_06: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_0B: box System.Boolean */
        /* IL_10: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(t0.a,null),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_15: ldsfld B b */
        /* IL_1A: box B */
        /* IL_1F: ldnull  */
        /* IL_20: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_25: box System.Boolean */
        /* IL_2A: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef({
                        'boxed': CILJS.clone_value(t0.b),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    },null),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_2F: ldsfld Object b4 */
        /* IL_34: ldnull  */
        /* IL_35: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_3A: box System.Boolean */
        /* IL_3F: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(t0.b4,null),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_44: ldnull  */
        /* IL_45: ldsfld Object a */
        /* IL_4A: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_4F: box System.Boolean */
        /* IL_54: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(null,t0.a),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_59: ldnull  */
        /* IL_5A: ldsfld B b */
        /* IL_5F: box B */
        /* IL_64: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_69: box System.Boolean */
        /* IL_6E: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(null,{
                        'boxed': CILJS.clone_value(t0.b),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    }),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_73: ldnull  */
        /* IL_74: ldsfld Object b4 */
        /* IL_79: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_7E: box System.Boolean */
        /* IL_83: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(null,t0.b4),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_88: newobj Void .ctor() */
        /* IL_8D: stloc.0  */
        loc0 = CILJS.newobj(t3,asm2.x6000001,[null]);
        /* IL_8E: ldloc.0  */
        /* IL_8F: stsfld Object a */
        (t0)["a"] = loc0;
        /* IL_94: ldloc.0  */
        /* IL_95: call Void CheckEquals(A) */
        asm2.x6000005(loc0);
        /* IL_9A: newobj Void .ctor() */
        /* IL_9F: call Void CheckEquals(A) */
        asm2.x6000005(CILJS.newobj(t3,asm2.x6000001,[null]));
        /* IL_A4: ldloca.s 1 */
        /* IL_A7: initobj B */
        loc1 = new t2();
        /* IL_AC: ldloc.1  */
        /* IL_AD: stsfld B b */
        (t0)["b"] = loc1;
        /* IL_B2: ldloc.1  */
        /* IL_B3: box B */
        /* IL_B8: stsfld Object b4 */
        (t0)["b4"] = {
            'boxed': CILJS.clone_value(loc1),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        };
        /* IL_BD: ldloc.1  */
        /* IL_BE: ldloc.1  */
        /* IL_BF: box B */
        /* IL_C4: call Void CheckEquals(B, System.Object) */
        asm2.x6000006(CILJS.clone_value(loc1),{
                'boxed': CILJS.clone_value(loc1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_C9: ldloca.s 2 */
        /* IL_CC: initobj B */
        loc2 = new t2();
        /* IL_D1: ldloc.2  */
        /* IL_D2: ldloc.2  */
        /* IL_D3: box B */
        /* IL_D8: call Void CheckEquals(B, System.Object) */
        asm2.x6000006(CILJS.clone_value(loc2),{
                'boxed': CILJS.clone_value(loc2),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_DD: ldsfld Object b4 */
        /* IL_E2: stloc.3  */
        loc3 = t0.b4;
        /* IL_E3: ldloc.3  */
        /* IL_E4: ldsfld Object b4 */
        /* IL_E9: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_EE: box System.Boolean */
        /* IL_F3: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(loc3,t0.b4),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_F8: ldloc.1  */
        /* IL_F9: box B */
        /* IL_FE: ldloc.1  */
        /* IL_FF: box B */
        /* IL_104: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_109: box System.Boolean */
        /* IL_10E: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef({
                        'boxed': CILJS.clone_value(loc1),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    },{
                        'boxed': CILJS.clone_value(loc1),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    }),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_113: ldloc.1  */
        /* IL_114: box B */
        /* IL_119: ldnull  */
        /* IL_11A: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_11F: box System.Boolean */
        /* IL_124: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef({
                        'boxed': CILJS.clone_value(loc1),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    },null),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_129: ldloc.0  */
        /* IL_12A: stsfld IKVM.Reflection.GenericFieldInstance */
        (t4)["t"] = loc0;
        /* IL_12F: ldloc.0  */
        /* IL_130: call Void CheckEquals(A) */
        (asm2.x6000002(asm2.A()))(loc0);
        /* IL_135: newobj Void .ctor() */
        /* IL_13A: call Void CheckEquals(A) */
        (asm2.x6000002(asm2.A()))(CILJS.newobj(t3,asm2.x6000001,[null]));
        /* IL_13F: ldloc.1  */
        /* IL_140: stsfld IKVM.Reflection.GenericFieldInstance */
        (t5)["t"] = loc1;
        /* IL_145: ldloc.1  */
        /* IL_146: call Void CheckEquals(B) */
        (asm2.x6000002(asm2.B()))(CILJS.clone_value(loc1));
        /* IL_14B: ldloca.s 4 */
        /* IL_14E: initobj B */
        loc4 = new t2();
        /* IL_153: ldloc.s 4 */
        /* IL_155: call Void CheckEquals(B) */
        (asm2.x6000002(asm2.B()))(CILJS.clone_value(loc4));
        /* IL_15A: ret  */
        return ;
    };
    /* static System.Void Program.CheckEquals(A)*/
    asm.x6000005_init = function ()
    {
        (asm2.Program().init)();
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
        t0 = asm2.Program();
        t1 = (asm0)["System.Boolean"]();
        /* IL_00: ldsfld Object a */
        /* IL_05: ldarg.0  */
        /* IL_06: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_0B: box System.Boolean */
        /* IL_10: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(t0.a,arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_15: ldarg.0  */
        /* IL_16: ldsfld Object a */
        /* IL_1B: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_20: box System.Boolean */
        /* IL_25: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(arg0,t0.a),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_2A: ldarg.0  */
        /* IL_2B: ldnull  */
        /* IL_2C: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_31: box System.Boolean */
        /* IL_36: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(arg0,null),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_3B: ldnull  */
        /* IL_3C: ldarg.0  */
        /* IL_3D: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_42: box System.Boolean */
        /* IL_47: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(null,arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_4C: ret  */
        return ;
    };
    /* static System.Void Program.CheckEquals(B,Object)*/
    asm.x6000006_init = function ()
    {
        (asm2.Program().init)();
        (asm2.B().init)();
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
        t0 = asm2.Program();
        t1 = asm2.B();
        t2 = (asm0)["System.Boolean"]();
        /* IL_00: ldsfld B b */
        /* IL_05: box B */
        /* IL_0A: ldarg.0  */
        /* IL_0B: box B */
        /* IL_10: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_15: box System.Boolean */
        /* IL_1A: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef({
                        'boxed': CILJS.clone_value(t0.b),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    },{
                        'boxed': CILJS.clone_value(arg0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    }),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_1F: ldsfld B b */
        /* IL_24: box B */
        /* IL_29: ldarg.1  */
        /* IL_2A: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_2F: box System.Boolean */
        /* IL_34: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef({
                        'boxed': CILJS.clone_value(t0.b),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    },arg1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_39: ldsfld Object b4 */
        /* IL_3E: ldarg.0  */
        /* IL_3F: box B */
        /* IL_44: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_49: box System.Boolean */
        /* IL_4E: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(t0.b4,{
                        'boxed': CILJS.clone_value(arg0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    }),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_53: ldsfld Object b4 */
        /* IL_58: ldarg.1  */
        /* IL_59: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_5E: box System.Boolean */
        /* IL_63: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(t0.b4,arg1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_68: ldnull  */
        /* IL_69: ldarg.0  */
        /* IL_6A: box B */
        /* IL_6F: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_74: box System.Boolean */
        /* IL_79: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(null,{
                        'boxed': CILJS.clone_value(arg0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    }),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_7E: ldnull  */
        /* IL_7F: ldarg.1  */
        /* IL_80: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_85: box System.Boolean */
        /* IL_8A: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(null,arg1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_8F: ldarg.0  */
        /* IL_90: box B */
        /* IL_95: ldnull  */
        /* IL_96: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_9B: box System.Boolean */
        /* IL_A0: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef({
                        'boxed': CILJS.clone_value(arg0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    },null),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_A5: ldarg.1  */
        /* IL_A6: ldnull  */
        /* IL_A7: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_AC: box System.Boolean */
        /* IL_B1: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(arg1,null),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_B6: ldsfld Object b4 */
        /* IL_BB: ldarg.0  */
        /* IL_BC: box B */
        /* IL_C1: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_C6: box System.Boolean */
        /* IL_CB: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(t0.b4,{
                        'boxed': CILJS.clone_value(arg0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    }),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_D0: ldsfld Object b4 */
        /* IL_D5: ldarg.1  */
        /* IL_D6: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_DB: box System.Boolean */
        /* IL_E0: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x60000ef(t0.b4,arg1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_E5: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
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
            CILJS.init_type(this,asm,"B",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
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
            CILJS.init_type(this,asm,"C`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.t = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            (this.GenericArguments)["asm2.t2000004"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000004<" + (T.GenericTypeMetadataName + ">"));
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.a = null;
            this.b = new (asm2.B())();
            this.b4 = null;
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000004;
})(asm2 || (asm2 = {}));
