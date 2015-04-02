var asm1;(function (asm)
{
    asm.FullName = "ReferenceEquals.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  A..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void C`1.CheckEquals(T)*/
    asm.x600000b_init = function (T)
    {
        return function ()
        {
            ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
            ((asm1)["C`1"](T).init)();
        };
    };;
    asm.x600000b = function (T)
    {
        return function (arg0)
        {
            (asm.x600000b_init(T).apply)(this,arguments);
            return (asm.x600000b_(T).apply)(this,arguments);
        };
    };;
    asm.x600000b_ = function (T)
    {
        return function CheckEquals(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var __pos__;
            t0 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
            t1 = T;
            t2 = (asm1)["C`1"](t1);
            t3 = (asm0)["System.Boolean"]();
            __pos__ = 0x0;
            /* IL_00: nop  ReferenceEquals.cs:11:5*/
            /* IL_01: ldsfld T t */
            /* IL_06: box T */
            /* IL_0B: ldarg.0  */
            /* IL_0C: box T */
            /* IL_11: call Boolean ReferenceEquals(System.Object, System.Object) */
            /* IL_16: box System.Boolean */
            /* IL_1B: call Void Log(System.Object) */
            asm1.x6000001({
                    'boxed': asm0.x6000007(BLR.box(t2.t,t1),BLR.box(arg0,t1)),
                    'type': t3,
                    'vtable': t3.prototype.vtable,
                    'ifacemap': t3.prototype.ifacemap
                });
            /* IL_20: nop  */
            /* IL_21: ret  ReferenceEquals.cs:13:5*/
            return ;
        };
    };
    /*  C`1..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000d_init = function ()
    {
        (asm1.Program().init)();
        (asm1.B().init)();
        (asm1.A().init)();
        ((asm1)["C`1"](asm1.A()).init)();
        ((asm1)["C`1"](asm1.B()).init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        BLR.init_base_types();
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Main()
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
        var __pos__;
        var loc0;
        var loc3;
        t0 = asm1.Program();
        t1 = (asm0)["System.Boolean"]();
        t2 = asm1.B();
        t3 = asm1.A();
        t4 = (asm1)["C`1"](t3);
        t5 = (asm1)["C`1"](t2);
        loc1 = new (asm1.B())();
        loc2 = new (asm1.B())();
        loc4 = new (asm1.B())();
        __pos__ = 0x0;
        /* IL_00: nop  ReferenceEquals.cs:23:5*/
        /* IL_01: ldsfld Object a */
        /* IL_06: ldnull  */
        /* IL_07: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_0C: box System.Boolean */
        /* IL_11: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007(t0.a,null),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_16: nop  */
        /* IL_17: ldsfld B b */
        /* IL_1C: box B */
        /* IL_21: ldnull  */
        /* IL_22: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_27: box System.Boolean */
        /* IL_2C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': BLR.clone_value(t0.b),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    },null),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_31: nop  */
        /* IL_32: ldsfld Object b4 */
        /* IL_37: ldnull  */
        /* IL_38: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_3D: box System.Boolean */
        /* IL_42: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007(t0.b4,null),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_47: nop  */
        /* IL_48: ldnull  */
        /* IL_49: ldsfld Object a */
        /* IL_4E: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_53: box System.Boolean */
        /* IL_58: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007(null,t0.a),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_5D: nop  */
        /* IL_5E: ldnull  */
        /* IL_5F: ldsfld B b */
        /* IL_64: box B */
        /* IL_69: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_6E: box System.Boolean */
        /* IL_73: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007(null,{
                        'boxed': BLR.clone_value(t0.b),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    }),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_78: nop  */
        /* IL_79: ldnull  */
        /* IL_7A: ldsfld Object b4 */
        /* IL_7F: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_84: box System.Boolean */
        /* IL_89: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007(null,t0.b4),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_8E: nop  */
        /* IL_8F: newobj Void .ctor() */
        /* IL_94: stloc.0  */
        loc0 = BLR.newobj(t3,asm1.x600000a,[null]);
        /* IL_95: ldloc.0  */
        /* IL_96: stsfld Object a */
        (t0)["a"] = loc0;
        /* IL_9B: ldloc.0  */
        /* IL_9C: call Void CheckEquals(A) */
        asm1.x600000e(loc0);
        /* IL_A1: nop  */
        /* IL_A2: newobj Void .ctor() */
        /* IL_A7: call Void CheckEquals(A) */
        asm1.x600000e(BLR.newobj(t3,asm1.x600000a,[null]));
        /* IL_AC: nop  */
        /* IL_AD: ldloca.s 1 */
        /* IL_B0: initobj B */
        loc1 = new t2();
        /* IL_B5: ldloc.1  */
        /* IL_B6: stsfld B b */
        (t0)["b"] = loc1;
        /* IL_BB: ldloc.1  */
        /* IL_BC: box B */
        /* IL_C1: stsfld Object b4 */
        (t0)["b4"] = {
            'boxed': BLR.clone_value(loc1),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        };
        /* IL_C6: ldloc.1  */
        /* IL_C7: ldloc.1  */
        /* IL_C8: box B */
        /* IL_CD: call Void CheckEquals(B, System.Object) */
        asm1.x600000f(BLR.clone_value(loc1),{
                'boxed': BLR.clone_value(loc1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_D2: nop  */
        /* IL_D3: ldloca.s 2 */
        /* IL_D6: initobj B */
        loc2 = new t2();
        /* IL_DB: ldloc.2  */
        /* IL_DC: ldloc.2  */
        /* IL_DD: box B */
        /* IL_E2: call Void CheckEquals(B, System.Object) */
        asm1.x600000f(BLR.clone_value(loc2),{
                'boxed': BLR.clone_value(loc2),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_E7: nop  */
        /* IL_E8: ldsfld Object b4 */
        /* IL_ED: stloc.3  */
        loc3 = t0.b4;
        /* IL_EE: ldloc.3  */
        /* IL_EF: ldsfld Object b4 */
        /* IL_F4: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_F9: box System.Boolean */
        /* IL_FE: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007(loc3,t0.b4),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_103: nop  */
        /* IL_104: ldloc.1  */
        /* IL_105: box B */
        /* IL_10A: ldloc.1  */
        /* IL_10B: box B */
        /* IL_110: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_115: box System.Boolean */
        /* IL_11A: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': BLR.clone_value(loc1),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    },{
                        'boxed': BLR.clone_value(loc1),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    }),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_11F: nop  */
        /* IL_120: ldloc.1  */
        /* IL_121: box B */
        /* IL_126: ldnull  */
        /* IL_127: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_12C: box System.Boolean */
        /* IL_131: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': BLR.clone_value(loc1),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    },null),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_136: nop  */
        /* IL_137: ldloc.0  */
        /* IL_138: stsfld IKVM.Reflection.GenericFieldInstance */
        (t4)["t"] = loc0;
        /* IL_13D: ldloc.0  */
        /* IL_13E: call Void CheckEquals(A) */
        (asm1.x600000b(asm1.A()))(loc0);
        /* IL_143: nop  */
        /* IL_144: newobj Void .ctor() */
        /* IL_149: call Void CheckEquals(A) */
        (asm1.x600000b(asm1.A()))(BLR.newobj(t3,asm1.x600000a,[null]));
        /* IL_14E: nop  */
        /* IL_14F: ldloc.1  */
        /* IL_150: stsfld IKVM.Reflection.GenericFieldInstance */
        (t5)["t"] = loc1;
        /* IL_155: ldloc.1  */
        /* IL_156: call Void CheckEquals(B) */
        (asm1.x600000b(asm1.B()))(BLR.clone_value(loc1));
        /* IL_15B: nop  */
        /* IL_15C: ldloca.s 4 */
        /* IL_15F: initobj B */
        loc4 = new t2();
        /* IL_164: ldloc.s 4 */
        /* IL_166: call Void CheckEquals(B) */
        (asm1.x600000b(asm1.B()))(BLR.clone_value(loc4));
        /* IL_16B: nop  */
        /* IL_16C: ret  ReferenceEquals.cs:55:5*/
        return ;
    };
    /* static System.Void Program.CheckEquals(A)*/
    asm.x600000e_init = function ()
    {
        (asm1.Program().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0)
    {
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function CheckEquals(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        t0 = asm1.Program();
        t1 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        /* IL_00: nop  ReferenceEquals.cs:58:5*/
        /* IL_01: ldsfld Object a */
        /* IL_06: ldarg.0  */
        /* IL_07: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_0C: box System.Boolean */
        /* IL_11: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007(t0.a,arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_16: nop  */
        /* IL_17: ldarg.0  */
        /* IL_18: ldsfld Object a */
        /* IL_1D: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_22: box System.Boolean */
        /* IL_27: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007(arg0,t0.a),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_2C: nop  */
        /* IL_2D: ldarg.0  */
        /* IL_2E: ldnull  */
        /* IL_2F: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_34: box System.Boolean */
        /* IL_39: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007(arg0,null),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_3E: nop  */
        /* IL_3F: ldnull  */
        /* IL_40: ldarg.0  */
        /* IL_41: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_46: box System.Boolean */
        /* IL_4B: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007(null,arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_50: nop  */
        /* IL_51: ret  ReferenceEquals.cs:63:5*/
        return ;
    };
    /* static System.Void Program.CheckEquals(B,Object)*/
    asm.x600000f_init = function ()
    {
        (asm1.Program().init)();
        (asm1.B().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0, arg1)
    {
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function CheckEquals(arg0, arg1)
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        t0 = asm1.Program();
        t1 = asm1.B();
        t2 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        /* IL_00: nop  ReferenceEquals.cs:66:5*/
        /* IL_01: ldsfld B b */
        /* IL_06: box B */
        /* IL_0B: ldarg.0  */
        /* IL_0C: box B */
        /* IL_11: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_16: box System.Boolean */
        /* IL_1B: call Void Log(System.Object) */
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
        /* IL_20: nop  */
        /* IL_21: ldsfld B b */
        /* IL_26: box B */
        /* IL_2B: ldarg.1  */
        /* IL_2C: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_31: box System.Boolean */
        /* IL_36: call Void Log(System.Object) */
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
        /* IL_3B: nop  */
        /* IL_3C: ldsfld Object b4 */
        /* IL_41: ldarg.0  */
        /* IL_42: box B */
        /* IL_47: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_4C: box System.Boolean */
        /* IL_51: call Void Log(System.Object) */
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
        /* IL_56: nop  */
        /* IL_57: ldsfld Object b4 */
        /* IL_5C: ldarg.1  */
        /* IL_5D: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_62: box System.Boolean */
        /* IL_67: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007(t0.b4,arg1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_6C: nop  */
        /* IL_6D: ldnull  */
        /* IL_6E: ldarg.0  */
        /* IL_6F: box B */
        /* IL_74: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_79: box System.Boolean */
        /* IL_7E: call Void Log(System.Object) */
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
        /* IL_83: nop  */
        /* IL_84: ldnull  */
        /* IL_85: ldarg.1  */
        /* IL_86: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_8B: box System.Boolean */
        /* IL_90: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007(null,arg1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_95: nop  */
        /* IL_96: ldarg.0  */
        /* IL_97: box B */
        /* IL_9C: ldnull  */
        /* IL_9D: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_A2: box System.Boolean */
        /* IL_A7: call Void Log(System.Object) */
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
        /* IL_AC: nop  */
        /* IL_AD: ldarg.1  */
        /* IL_AE: ldnull  */
        /* IL_AF: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_B4: box System.Boolean */
        /* IL_B9: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007(arg1,null),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_BE: nop  */
        /* IL_BF: ldsfld Object b4 */
        /* IL_C4: ldarg.0  */
        /* IL_C5: box B */
        /* IL_CA: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_CF: box System.Boolean */
        /* IL_D4: call Void Log(System.Object) */
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
        /* IL_D9: nop  */
        /* IL_DA: ldsfld Object b4 */
        /* IL_DF: ldarg.1  */
        /* IL_E0: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_E5: box System.Boolean */
        /* IL_EA: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007(t0.b4,arg1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_EF: nop  */
        /* IL_F0: ret  ReferenceEquals.cs:78:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
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
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
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
            BLR.init_type(this,asm,"C`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.t = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            (this.GenericArguments)["asm1.t2000008"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000008<" + (T.GenericTypeMetadataName + ">"));
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.a = null;
            this.b = new (asm1.B())();
            this.b4 = null;
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
