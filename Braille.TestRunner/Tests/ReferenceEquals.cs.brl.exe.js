var asm1; (function (asm)
{
    asm.FullName = "ReferenceEquals.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Void Log(System.Object)*/
    asm.x6000001 = braille_test_log;;
    /* Void .ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void CheckEquals(T)*/
    asm.x600000d_init = function (T)
    {
        return function ()
        {
            ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
            ((asm1)["C`1"](T).init)();
            ((asm0)["System.Boolean"]().init)();
        };
    };;
    asm.x600000d = function (T)
    {
        return function (arg0)
        {
            (asm.x600000d_init(T).apply)(this,arguments);
            return (asm.x600000d_(T).apply)(this,arguments);
        };
    };;
    asm.x600000d_ = function (T)
    {
        return function CheckEquals(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            t0 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
            t1 = T;
            t2 = (asm1)["C`1"](T);
            t3 = (asm0)["System.Boolean"]();
            /* IL_00: ldsfld T t*/
            /* IL_05: box T*/
            /* IL_0A: ldarg.0 */
            /* IL_0B: box T*/
            /* IL_10: call Boolean ReferenceEquals(System.Object, System.Object)*/
            /* IL_15: box System.Boolean*/
            /* IL_1A: call Void Log(System.Object)*/
            asm1.x6000001({
                    'boxed': asm0.x6000007(BLR.box(t2.t,t1),BLR.box(arg0,t1)),
                    'type': t3,
                    'vtable': t3.prototype.vtable,
                    'ifacemap': t3.prototype.ifacemap
                });
            /* IL_1F: ret */
            return ;
        };
    };
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x600000f_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.Program().init)();
        ((asm0)["System.Boolean"]().init)();
        (asm1.B().init)();
        (asm1.A().init)();
        ((asm1)["C`1"](asm1.A()).init)();
        ((asm1)["C`1"](asm1.B()).init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var loc1;
        var loc2;
        var loc4;
        var loc0;
        var loc3;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.Program();
        t2 = (asm0)["System.Boolean"]();
        t3 = asm1.B();
        t4 = asm1.A();
        t5 = (asm1)["C`1"](asm1.A());
        t6 = (asm1)["C`1"](asm1.B());
        loc1 = new (asm1.B())();
        loc2 = new (asm1.B())();
        loc4 = new (asm1.B())();
        /* IL_00: ldsfld Object a*/
        /* IL_05: ldnull */
        /* IL_06: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_0B: box System.Boolean*/
        /* IL_10: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(t1.a,null),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_15: ldsfld B b*/
        /* IL_1A: box B*/
        /* IL_1F: ldnull */
        /* IL_20: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_25: box System.Boolean*/
        /* IL_2A: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': BLR.clone_value(t1.b),
                        'type': t3,
                        'vtable': t3.prototype.vtable,
                        'ifacemap': t3.prototype.ifacemap
                    },null),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_2F: ldsfld Object b4*/
        /* IL_34: ldnull */
        /* IL_35: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_3A: box System.Boolean*/
        /* IL_3F: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(t1.b4,null),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_44: ldnull */
        /* IL_45: ldsfld Object a*/
        /* IL_4A: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_4F: box System.Boolean*/
        /* IL_54: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(null,t1.a),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_59: ldnull */
        /* IL_5A: ldsfld B b*/
        /* IL_5F: box B*/
        /* IL_64: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_69: box System.Boolean*/
        /* IL_6E: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(null,{
                        'boxed': BLR.clone_value(t1.b),
                        'type': t3,
                        'vtable': t3.prototype.vtable,
                        'ifacemap': t3.prototype.ifacemap
                    }),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_73: ldnull */
        /* IL_74: ldsfld Object b4*/
        /* IL_79: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_7E: box System.Boolean*/
        /* IL_83: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(null,t1.b4),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_88: newobj Void .ctor()*/
        /* IL_8D: stloc.0 */
        loc0 = BLR.newobj(t4,asm1.x600000c,[null]);
        /* IL_8E: ldloc.0 */
        /* IL_8F: stsfld Object a*/
        (t1)["a"] = loc0;
        /* IL_94: ldloc.0 */
        /* IL_95: call Void CheckEquals(A)*/
        asm1.x6000010(loc0);
        /* IL_9A: newobj Void .ctor()*/
        /* IL_9F: call Void CheckEquals(A)*/
        asm1.x6000010(BLR.newobj(t4,asm1.x600000c,[null]));
        /* IL_A4: ldloca.s 1*/
        /* IL_A7: initobj B*/
        loc1 = new t3();
        /* IL_AC: ldloc.1 */
        /* IL_AD: stsfld B b*/
        (t1)["b"] = loc1;
        /* IL_B2: ldloc.1 */
        /* IL_B3: box B*/
        /* IL_B8: stsfld Object b4*/
        (t1)["b4"] = {
            'boxed': BLR.clone_value(loc1),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        };
        /* IL_BD: ldloc.1 */
        /* IL_BE: ldloc.1 */
        /* IL_BF: box B*/
        /* IL_C4: call Void CheckEquals(B, System.Object)*/
        asm1.x6000011(BLR.clone_value(loc1),{
                'boxed': BLR.clone_value(loc1),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_C9: ldloca.s 2*/
        /* IL_CC: initobj B*/
        loc2 = new t3();
        /* IL_D1: ldloc.2 */
        /* IL_D2: ldloc.2 */
        /* IL_D3: box B*/
        /* IL_D8: call Void CheckEquals(B, System.Object)*/
        asm1.x6000011(BLR.clone_value(loc2),{
                'boxed': BLR.clone_value(loc2),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_DD: ldsfld Object b4*/
        /* IL_E2: stloc.3 */
        loc3 = t1.b4;
        /* IL_E3: ldloc.3 */
        /* IL_E4: ldsfld Object b4*/
        /* IL_E9: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_EE: box System.Boolean*/
        /* IL_F3: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(loc3,t1.b4),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_F8: ldloc.1 */
        /* IL_F9: box B*/
        /* IL_FE: ldloc.1 */
        /* IL_FF: box B*/
        /* IL_104: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_109: box System.Boolean*/
        /* IL_10E: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': BLR.clone_value(loc1),
                        'type': t3,
                        'vtable': t3.prototype.vtable,
                        'ifacemap': t3.prototype.ifacemap
                    },{
                        'boxed': BLR.clone_value(loc1),
                        'type': t3,
                        'vtable': t3.prototype.vtable,
                        'ifacemap': t3.prototype.ifacemap
                    }),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_113: ldloc.1 */
        /* IL_114: box B*/
        /* IL_119: ldnull */
        /* IL_11A: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_11F: box System.Boolean*/
        /* IL_124: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': BLR.clone_value(loc1),
                        'type': t3,
                        'vtable': t3.prototype.vtable,
                        'ifacemap': t3.prototype.ifacemap
                    },null),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_129: ldloc.0 */
        /* IL_12A: stsfld IKVM.Reflection.GenericFieldInstance*/
        (t5)["t"] = loc0;
        /* IL_12F: ldloc.0 */
        /* IL_130: call Void CheckEquals(A)*/
        (asm1.x600000d(asm1.A()))(loc0);
        /* IL_135: newobj Void .ctor()*/
        /* IL_13A: call Void CheckEquals(A)*/
        (asm1.x600000d(asm1.A()))(BLR.newobj(t4,asm1.x600000c,[null]));
        /* IL_13F: ldloc.1 */
        /* IL_140: stsfld IKVM.Reflection.GenericFieldInstance*/
        (t6)["t"] = loc1;
        /* IL_145: ldloc.1 */
        /* IL_146: call Void CheckEquals(B)*/
        (asm1.x600000d(asm1.B()))(BLR.clone_value(loc1));
        /* IL_14B: ldloca.s 4*/
        /* IL_14E: initobj B*/
        loc4 = new t3();
        /* IL_153: ldloc.s 4*/
        /* IL_155: call Void CheckEquals(B)*/
        (asm1.x600000d(asm1.B()))(BLR.clone_value(loc4));
        /* IL_15A: ret */
        return ;
    };
    /* static Void CheckEquals(A)*/
    asm.x6000010_init = function ()
    {
        (asm1.Program().init)();
        ((asm0)["System.Boolean"]().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function (arg0)
    {
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function CheckEquals(arg0)
    {
        var t0;
        var t1;
        t0 = asm1.Program();
        t1 = (asm0)["System.Boolean"]();
        /* IL_00: ldsfld Object a*/
        /* IL_05: ldarg.0 */
        /* IL_06: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_0B: box System.Boolean*/
        /* IL_10: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(t0.a,arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_15: ldarg.0 */
        /* IL_16: ldsfld Object a*/
        /* IL_1B: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_20: box System.Boolean*/
        /* IL_25: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(arg0,t0.a),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_2A: ldarg.0 */
        /* IL_2B: ldnull */
        /* IL_2C: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_31: box System.Boolean*/
        /* IL_36: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(arg0,null),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_3B: ldnull */
        /* IL_3C: ldarg.0 */
        /* IL_3D: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_42: box System.Boolean*/
        /* IL_47: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(null,arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_4C: ret */
        return ;
    };
    /* static Void CheckEquals(B, System.Object)*/
    asm.x6000011_init = function ()
    {
        (asm1.Program().init)();
        (asm1.B().init)();
        ((asm0)["System.Boolean"]().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function (arg0,arg1)
    {
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function CheckEquals(arg0,arg1)
    {
        var t0;
        var t1;
        var t2;
        t0 = asm1.Program();
        t1 = asm1.B();
        t2 = (asm0)["System.Boolean"]();
        /* IL_00: ldsfld B b*/
        /* IL_05: box B*/
        /* IL_0A: ldarg.0 */
        /* IL_0B: box B*/
        /* IL_10: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_15: box System.Boolean*/
        /* IL_1A: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': BLR.clone_value(t0.b),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    },{
                        'boxed': BLR.clone_value(arg0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    }),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_1F: ldsfld B b*/
        /* IL_24: box B*/
        /* IL_29: ldarg.1 */
        /* IL_2A: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_2F: box System.Boolean*/
        /* IL_34: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': BLR.clone_value(t0.b),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    },arg1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_39: ldsfld Object b4*/
        /* IL_3E: ldarg.0 */
        /* IL_3F: box B*/
        /* IL_44: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_49: box System.Boolean*/
        /* IL_4E: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(t0.b4,{
                        'boxed': BLR.clone_value(arg0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    }),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_53: ldsfld Object b4*/
        /* IL_58: ldarg.1 */
        /* IL_59: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_5E: box System.Boolean*/
        /* IL_63: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(t0.b4,arg1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_68: ldnull */
        /* IL_69: ldarg.0 */
        /* IL_6A: box B*/
        /* IL_6F: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_74: box System.Boolean*/
        /* IL_79: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(null,{
                        'boxed': BLR.clone_value(arg0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    }),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_7E: ldnull */
        /* IL_7F: ldarg.1 */
        /* IL_80: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_85: box System.Boolean*/
        /* IL_8A: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(null,arg1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_8F: ldarg.0 */
        /* IL_90: box B*/
        /* IL_95: ldnull */
        /* IL_96: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_9B: box System.Boolean*/
        /* IL_A0: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': BLR.clone_value(arg0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    },null),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_A5: ldarg.1 */
        /* IL_A6: ldnull */
        /* IL_A7: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_AC: box System.Boolean*/
        /* IL_B1: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(arg1,null),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_B6: ldsfld Object b4*/
        /* IL_BB: ldarg.0 */
        /* IL_BC: box B*/
        /* IL_C1: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_C6: box System.Boolean*/
        /* IL_CB: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(t0.b4,{
                        'boxed': BLR.clone_value(arg0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    }),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_D0: ldsfld Object b4*/
        /* IL_D5: ldarg.1 */
        /* IL_D6: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_DB: box System.Boolean*/
        /* IL_E0: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x6000007(t0.b4,arg1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_E5: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
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
    asm.TestHelper = BLR.declare_type(
        "TestHelper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestHelper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
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
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.B = BLR.declare_type(
        "B",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["C`1"] = BLR.declare_type(
        "C_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.t = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            (this.GenericArguments)["asm1.t2000009"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000009<" + (T.GenericTypeMetadataName + ">"));
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.a = null;
            this.b = new (asm1.B())();
            this.b4 = null;
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
