var asm1; (function (asm)
{
    asm.FullName = "Reflection.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  B..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000a(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /*  X`1..ctor()*/
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
        (asm1.A().init)();
        ((asm1)["X`1"](asm1.A()).init)();
        ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
        ((asm1)["X`1"]((asm0)["Braille.Runtime.UnboundGenericParameter"]()).init)();
        (asm1.B().init)();
        ((asm1)["X`1"](asm1.B()).init)();
        (asm1.I2().init)();
        (asm1.I().init)();
        ((asm1)["I3`1"]((asm0)["System.Int32"]()).init)();
        ((asm1)["X`1"]((asm0)["System.Int32"]()).init)();
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
        var t6;
        var t7;
        var t8;
        var t9;
        var t10;
        var t11;
        var t12;
        var t13;
        var t14;
        var t15;
        var st_6F;
        var st_70;
        var st_71;
        var st_72;
        var st_73;
        var st_74;
        var st_75;
        var st_76;
        var st_77;
        var st_78;
        var st_79;
        var __pos__;
        var loc0;
        t0 = asm1.A();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.String"]();
        t3 = (asm0)["System.Boolean"]();
        t4 = (asm1)["X`1"](t0);
        t5 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
        t6 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
        t7 = (asm1)["X`1"](t6);
        t8 = asm1.B();
        t9 = (asm1)["X`1"](t8);
        t10 = (asm0)["System.Type"]();
        t11 = (asm0)["System.Object"]();
        t12 = asm1.I2();
        t13 = asm1.I();
        t14 = (asm1)["I3`1"](t1);
        t15 = (asm1)["X`1"](t1);
        __pos__ = 0x0;
        /* IL_00: nop  Reflection.cs:16:5*/
        /* IL_01: ldtoken A */
        /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_0B: callvirt String get_Name() */
        /* IL_10: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600003e"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))));
        /* IL_15: nop  */
        /* IL_16: ldtoken System.Int32 */
        /* IL_1B: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_20: callvirt String get_Name() */
        /* IL_25: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x600003e"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))));
        /* IL_2A: nop  */
        /* IL_2B: ldtoken System.String */
        /* IL_30: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_35: callvirt String get_Name() */
        /* IL_3A: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x600003e"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))));
        /* IL_3F: nop  */
        /* IL_40: ldtoken System.Boolean */
        /* IL_45: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4A: callvirt String get_Name() */
        /* IL_4F: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t3)).vtable)["asm0.x600003e"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))));
        /* IL_54: nop  */
        /* IL_55: ldtoken A */
        /* IL_5A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_5F: callvirt String get_FullName() */
        /* IL_64: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60000e0"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))));
        /* IL_69: nop  */
        /* IL_6A: ldtoken System.Int32 */
        /* IL_6F: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_74: callvirt String get_FullName() */
        /* IL_79: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x60000e0"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))));
        /* IL_7E: nop  */
        /* IL_7F: ldtoken System.String */
        /* IL_84: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_89: callvirt String get_FullName() */
        /* IL_8E: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x60000e0"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))));
        /* IL_93: nop  */
        /* IL_94: ldtoken System.Boolean */
        /* IL_99: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_9E: callvirt String get_FullName() */
        /* IL_A3: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t3)).vtable)["asm0.x60000e0"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))));
        /* IL_A8: nop  */
        /* IL_A9: ldtoken A */
        /* IL_AE: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_B3: callvirt String get_FullName() */
        /* IL_B8: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60000e0"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))));
        /* IL_BD: nop  */
        /* IL_BE: newobj Void .ctor() */
        /* IL_C3: call Type GetType() */
        /* IL_C8: callvirt String get_FullName() */
        /* IL_CD: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x600000a(BLR.newobj(t0,asm1.x600000a,[null])).vtable)["asm0.x60000e0"])())(asm0.x600000a(BLR.newobj(t0,asm1.x600000a,[null]))));
        /* IL_D2: nop  */
        /* IL_D3: newobj Void .ctor() */
        /* IL_D8: call Type GetType() */
        /* IL_DD: ldtoken A */
        /* IL_E2: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_E7: callvirt Boolean Equals(System.Object) */
        /* IL_EC: box System.Boolean */
        /* IL_F1: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(BLR.newobj(t0,asm1.x600000a,[null])).vtable)["asm0.x6000008"])())(asm0.x600000a(BLR.newobj(t0,asm1.x600000a,[null])),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_F6: nop  */
        /* IL_F7: newobj Void .ctor() */
        /* IL_FC: call Type GetType() */
        /* IL_101: ldtoken System.String */
        /* IL_106: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_10B: callvirt Boolean Equals(System.Object) */
        /* IL_110: box System.Boolean */
        /* IL_115: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(BLR.newobj(t0,asm1.x600000a,[null])).vtable)["asm0.x6000008"])())(asm0.x600000a(BLR.newobj(t0,asm1.x600000a,[null])),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_11A: nop  */
        /* IL_11B: ldstr  */
        /* IL_120: callvirt Type GetType() */
        /* IL_125: ldtoken System.String */
        /* IL_12A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_12F: callvirt Boolean Equals(System.Object) */
        /* IL_134: box System.Boolean */
        /* IL_139: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(BLR.new_string("")).vtable)["asm0.x6000008"])())(asm0.x600000a(BLR.new_string("")),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_13E: nop  */
        /* IL_13F: ldstr  */
        /* IL_144: callvirt Type GetType() */
        /* IL_149: ldtoken A */
        /* IL_14E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_153: callvirt Boolean Equals(System.Object) */
        /* IL_158: box System.Boolean */
        /* IL_15D: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(BLR.new_string("")).vtable)["asm0.x6000008"])())(asm0.x600000a(BLR.new_string("")),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_162: nop  */
        /* IL_163: ldc.i4.1  */
        /* IL_164: box System.Int32 */
        /* IL_169: call Type GetType() */
        /* IL_16E: ldtoken A */
        /* IL_173: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_178: callvirt Boolean Equals(System.Object) */
        /* IL_17D: box System.Boolean */
        /* IL_182: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a({
                        'boxed': (1|0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    }).vtable)["asm0.x6000008"])())(asm0.x600000a({
                            'boxed': (1|0),
                            'type': t1,
                            'vtable': t1.prototype.vtable,
                            'ifacemap': t1.prototype.ifacemap
                        }),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_187: nop  */
        /* IL_188: ldc.i4.1  */
        /* IL_189: box System.Int32 */
        /* IL_18E: call Type GetType() */
        /* IL_193: ldtoken System.Int32 */
        /* IL_198: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_19D: callvirt Boolean Equals(System.Object) */
        /* IL_1A2: box System.Boolean */
        /* IL_1A7: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a({
                        'boxed': (1|0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    }).vtable)["asm0.x6000008"])())(asm0.x600000a({
                            'boxed': (1|0),
                            'type': t1,
                            'vtable': t1.prototype.vtable,
                            'ifacemap': t1.prototype.ifacemap
                        }),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_1AC: nop  */
        /* IL_1AD: ldc.i4.1  */
        /* IL_1AE: box System.Int32 */
        /* IL_1B3: call Type GetType() */
        /* IL_1B8: callvirt String get_FullName() */
        /* IL_1BD: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x600000a({
                    'boxed': (1|0),
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                }).vtable)["asm0.x60000e0"])())(asm0.x600000a({
                        'boxed': (1|0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    })));
        /* IL_1C2: nop  */
        /* IL_1C3: ldtoken A */
        /* IL_1C8: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1CD: callvirt String get_AssemblyQualifiedName() */
        /* IL_1D2: ldstr .clr */
        /* IL_1D7: ldstr .brl */
        /* IL_1DC: callvirt String Replace(System.String, System.String) */
        /* IL_1E1: call Void Log(System.Object) */
        asm1.x6000001(asm0.x60001c2((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60000e6"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),BLR.new_string(".clr"),BLR.new_string(".brl")));
        /* IL_1E6: nop  */
        /* IL_1E7: ldtoken X`1[A] */
        /* IL_1EC: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1F1: callvirt String get_FullName() */
        /* IL_1F6: ldstr .clr */
        /* IL_1FB: ldstr .brl */
        /* IL_200: callvirt String Replace(System.String, System.String) */
        /* IL_205: call Void Log(System.Object) */
        asm1.x6000001(asm0.x60001c2((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t4)).vtable)["asm0.x60000e0"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t4))),BLR.new_string(".clr"),BLR.new_string(".brl")));
        /* IL_20A: nop  */
        /* IL_20B: newobj Void .ctor() */
        /* IL_210: call Type GetType() */
        /* IL_215: callvirt String get_FullName() */
        /* IL_21A: ldstr .clr */
        /* IL_21F: ldstr .brl */
        /* IL_224: callvirt String Replace(System.String, System.String) */
        /* IL_229: call Void Log(System.Object) */
        asm1.x6000001(asm0.x60001c2((((asm0.x600000a(BLR.newobj(t4,asm1.x600000c,[null])).vtable)["asm0.x60000e0"])())(asm0.x600000a(BLR.newobj(t4,asm1.x600000c,[null]))),BLR.new_string(".clr"),BLR.new_string(".brl")));
        /* IL_22E: nop  */
        /* IL_22F: newobj Void .ctor() */
        /* IL_234: call Type GetType() */
        /* IL_239: ldtoken X`1[T] */
        /* IL_23E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_243: callvirt Boolean Equals(System.Object) */
        /* IL_248: box System.Boolean */
        /* IL_24D: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(BLR.newobj(t4,asm1.x600000c,[null])).vtable)["asm0.x6000008"])())(asm0.x600000a(BLR.newobj(t4,asm1.x600000c,[null])),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t7))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_252: nop  */
        /* IL_253: newobj Void .ctor() */
        /* IL_258: call Type GetType() */
        /* IL_25D: ldtoken X`1[B] */
        /* IL_262: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_267: callvirt Boolean Equals(System.Object) */
        /* IL_26C: box System.Boolean */
        /* IL_271: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(BLR.newobj(t4,asm1.x600000c,[null])).vtable)["asm0.x6000008"])())(asm0.x600000a(BLR.newobj(t4,asm1.x600000c,[null])),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_276: nop  */
        /* IL_277: ldstr  */
        /* IL_27C: callvirt Type GetType() */
        /* IL_281: ldtoken X`1[T] */
        /* IL_286: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_28B: callvirt Boolean Equals(System.Object) */
        /* IL_290: box System.Boolean */
        /* IL_295: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(BLR.new_string("")).vtable)["asm0.x6000008"])())(asm0.x600000a(BLR.new_string("")),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t7))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_29A: nop  */
        /* IL_29B: ldtoken X`1[T] */
        /* IL_2A0: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        st_73 = asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t7));
        /* IL_2A5: ldc.i4.1  */
        /* IL_2A6: newarr System.Type */
        /* IL_2AB: stloc.0  */
        loc0 = BLR.new_array(t10,(1|0));
        /* IL_2AC: ldloc.0  */
        st_70 = loc0;
        /* IL_2AD: ldc.i4.0  */
        st_71 = (0|0);
        /* IL_2AE: ldtoken A */
        st_6F = BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0);
        /* IL_2B3: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        st_72 = asm0.x60000e1(st_6F);
        /* IL_2B8: stelem.ref  */
        BLR.stelem_ref(st_70,st_71,st_72);
        /* IL_2B9: ldloc.0  */
        st_74 = loc0;
        /* IL_2BA: callvirt Type MakeGenericType(System.Type[]) */
        st_76 = ((st_73.vtable)["asm0.x60000ec"]())(st_73,st_74);
        /* IL_2BF: ldtoken X`1[A] */
        st_75 = BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t4);
        /* IL_2C4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        st_77 = asm0.x60000e1(st_75);
        /* IL_2C9: callvirt Boolean Equals(System.Object) */
        st_78 = ((st_76.vtable)["asm0.x6000008"]())(st_76,st_77);
        /* IL_2CE: box System.Boolean */
        st_79 = {
            'boxed': st_78,
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        };
        /* IL_2D3: call Void Log(System.Object) */
        asm1.x6000001(st_79);
        /* IL_2D8: nop  */
        /* IL_2D9: ldtoken System.Object */
        /* IL_2DE: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_2E3: callvirt Type get_BaseType() */
        /* IL_2E8: ldnull  */
        /* IL_2EA: ceq  */
        /* IL_2EB: box System.Boolean */
        /* IL_2F0: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t11)).vtable)["asm0.x60000e5"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t11))) === null) ? (1) : (0)),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_2F5: nop  */
        /* IL_2F6: ldtoken A */
        /* IL_2FB: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_300: callvirt Type get_BaseType() */
        /* IL_305: ldtoken System.Object */
        /* IL_30A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_30F: callvirt Boolean Equals(System.Object) */
        /* IL_314: box System.Boolean */
        /* IL_319: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60000e5"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))).vtable)["asm0.x6000008"])())((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60000e5"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t11))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_31E: nop  */
        /* IL_31F: ldtoken A */
        /* IL_324: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_329: callvirt Type get_BaseType() */
        /* IL_32E: ldtoken B */
        /* IL_333: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_338: callvirt Boolean Equals(System.Object) */
        /* IL_33D: box System.Boolean */
        /* IL_342: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60000e5"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))).vtable)["asm0.x6000008"])())((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60000e5"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_347: nop  */
        /* IL_348: ldtoken B */
        /* IL_34D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_352: callvirt Type get_BaseType() */
        /* IL_357: ldtoken A */
        /* IL_35C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_361: callvirt Boolean Equals(System.Object) */
        /* IL_366: box System.Boolean */
        /* IL_36B: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8)).vtable)["asm0.x60000e5"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))).vtable)["asm0.x6000008"])())((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8)).vtable)["asm0.x60000e5"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_370: nop  */
        /* IL_371: ldtoken B */
        /* IL_376: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_37B: ldtoken A */
        /* IL_380: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_385: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_38A: box System.Boolean */
        /* IL_38F: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_394: nop  */
        /* IL_395: ldtoken B */
        /* IL_39A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_39F: ldtoken B */
        /* IL_3A4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3A9: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_3AE: box System.Boolean */
        /* IL_3B3: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_3B8: nop  */
        /* IL_3B9: ldtoken A */
        /* IL_3BE: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3C3: ldtoken B */
        /* IL_3C8: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3CD: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_3D2: box System.Boolean */
        /* IL_3D7: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_3DC: nop  */
        /* IL_3DD: ldtoken A */
        /* IL_3E2: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3E7: ldtoken A */
        /* IL_3EC: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3F1: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_3F6: box System.Boolean */
        /* IL_3FB: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_400: nop  */
        /* IL_401: ldtoken A */
        /* IL_406: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_40B: ldtoken I2 */
        /* IL_410: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_415: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_41A: box System.Boolean */
        /* IL_41F: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_424: nop  */
        /* IL_425: ldtoken B */
        /* IL_42A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_42F: ldtoken I2 */
        /* IL_434: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_439: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_43E: box System.Boolean */
        /* IL_443: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_448: nop  */
        /* IL_449: ldtoken A */
        /* IL_44E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_453: ldtoken I */
        /* IL_458: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_45D: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_462: box System.Boolean */
        /* IL_467: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_46C: nop  */
        /* IL_46D: ldtoken B */
        /* IL_472: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_477: ldtoken I */
        /* IL_47C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_481: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_486: box System.Boolean */
        /* IL_48B: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_490: nop  */
        /* IL_491: ldtoken I2 */
        /* IL_496: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_49B: ldtoken I2 */
        /* IL_4A0: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4A5: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_4AA: box System.Boolean */
        /* IL_4AF: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t12)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_4B4: nop  */
        /* IL_4B5: ldtoken I */
        /* IL_4BA: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4BF: ldtoken I2 */
        /* IL_4C4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4C9: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_4CE: box System.Boolean */
        /* IL_4D3: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_4D8: nop  */
        /* IL_4D9: ldtoken I2 */
        /* IL_4DE: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4E3: ldtoken B */
        /* IL_4E8: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4ED: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_4F2: box System.Boolean */
        /* IL_4F7: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t12)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_4FC: nop  */
        /* IL_4FD: ldtoken I */
        /* IL_502: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_507: ldtoken B */
        /* IL_50C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_511: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_516: box System.Boolean */
        /* IL_51B: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_520: nop  */
        /* IL_521: ldtoken I3`1[System.Int32] */
        /* IL_526: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_52B: ldtoken X`1[System.Int32] */
        /* IL_530: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_535: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_53A: box System.Boolean */
        /* IL_53F: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t14)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_544: nop  */
        /* IL_545: ldtoken I */
        /* IL_54A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_54F: ldtoken X`1[System.Int32] */
        /* IL_554: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_559: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_55E: box System.Boolean */
        /* IL_563: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_568: nop  */
        /* IL_569: ldtoken I2 */
        /* IL_56E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_573: ldtoken X`1[System.Int32] */
        /* IL_578: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_57D: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_582: box System.Boolean */
        /* IL_587: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t12)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_58C: nop  */
        /* IL_58D: ldtoken I */
        /* IL_592: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_597: ldtoken I3`1[System.Int32] */
        /* IL_59C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_5A1: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_5A6: box System.Boolean */
        /* IL_5AB: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t14))),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_5B0: nop  */
        /* IL_5B1: ret  Reflection.cs:72:5*/
        return ;
    };
    /* static System.Boolean Program.IsAssignableFrom(Type,Type)*/
    asm.x600000e = function IsAssignableFrom(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  Reflection.cs:75:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldarg.1  */
        /* IL_03: callvirt Boolean IsAssignableFrom(System.Type) */
        /* IL_08: stloc.0  */
        loc0 = ((arg0.vtable)["asm0.x60000ed"]())(arg0,arg1);
        /* IL_0B: ldloc.0  */
        /* IL_0C: ret  */
        return loc0;
    };;
    /*  Program..ctor()*/
    asm.x600000f = function _ctor(arg0)
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
            BLR.init_type(this,asm,"I",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
        });
    asm.I2 = BLR.declare_type(
        "I2",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I2",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.implement_interface(
                this,
                [asm1.I()],
                null);
        });
    asm.B = BLR.declare_type(
        "B",
        [],
        function ()
        {
            return new (asm1.A())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.I2()],
                {});
            BLR.implement_interface(
                this,
                [asm1.I()],
                {});
        });
    (asm)["I3`1"] = BLR.declare_type(
        "I3_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I3`1",false,false,true,true,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t200000a");
            (this.GenericArguments)["asm1.t200000a"] = [T];
            this.GenericTypeMetadataName = ("asm1.t200000a<" + (T.GenericTypeMetadataName + ">"));
            BLR.implement_interface(
                this,
                [asm1.I()],
                null);
        });
    (asm)["X`1"] = BLR.declare_type(
        "X_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"X`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000b");
            (this.GenericArguments)["asm1.t200000b"] = [T];
            this.GenericTypeMetadataName = ("asm1.t200000b<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm1)["I3`1"](T), T],
                {});
            BLR.implement_interface(
                this,
                [asm1.I()],
                {});
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
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
