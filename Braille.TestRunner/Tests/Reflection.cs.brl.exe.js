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
        asm1.x600000a(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  X`1..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000d_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.A().init)();
        ((asm0)["System.Int32"]().init)();
        ((asm0)["System.String"]().init)();
        ((asm0)["System.Boolean"]().init)();
        ((asm1)["X`1"](asm1.A()).init)();
        ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
        ((asm1)["X`1"]((asm0)["Braille.Runtime.UnboundGenericParameter"]()).init)();
        (asm1.B().init)();
        ((asm1)["X`1"](asm1.B()).init)();
        ((asm0)["System.Type"]().init)();
        ((asm0)["System.Object"]().init)();
        (asm1.I2().init)();
        (asm1.I().init)();
        ((asm1)["I3`1"]((asm0)["System.Int32"]()).init)();
        ((asm1)["X`1"]((asm0)["System.Int32"]()).init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
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
        var t16;
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
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.A();
        t2 = (asm0)["System.Int32"]();
        t3 = (asm0)["System.String"]();
        t4 = (asm0)["System.Boolean"]();
        t5 = (asm1)["X`1"](t1);
        t6 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
        t7 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
        t8 = (asm1)["X`1"](t7);
        t9 = asm1.B();
        t10 = (asm1)["X`1"](t9);
        t11 = (asm0)["System.Type"]();
        t12 = (asm0)["System.Object"]();
        t13 = asm1.I2();
        t14 = asm1.I();
        t15 = (asm1)["I3`1"](t2);
        t16 = (asm1)["X`1"](t2);
        __pos__ = 0x0;
        /* IL_00: ldtoken A*/
        /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_0A: callvirt String get_Name()*/
        /* IL_0F: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x600003e"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))));
        /* IL_14: ldtoken System.Int32*/
        /* IL_19: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_1E: callvirt String get_Name()*/
        /* IL_23: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x600003e"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))));
        /* IL_28: ldtoken System.String*/
        /* IL_2D: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_32: callvirt String get_Name()*/
        /* IL_37: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t3)).vtable)["asm0.x600003e"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))));
        /* IL_3C: ldtoken System.Boolean*/
        /* IL_41: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_46: callvirt String get_Name()*/
        /* IL_4B: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t4)).vtable)["asm0.x600003e"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t4))));
        /* IL_50: ldtoken A*/
        /* IL_55: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_5A: callvirt String get_FullName()*/
        /* IL_5F: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x60000d7"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))));
        /* IL_64: ldtoken System.Int32*/
        /* IL_69: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_6E: callvirt String get_FullName()*/
        /* IL_73: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x60000d7"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))));
        /* IL_78: ldtoken System.String*/
        /* IL_7D: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_82: callvirt String get_FullName()*/
        /* IL_87: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t3)).vtable)["asm0.x60000d7"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))));
        /* IL_8C: ldtoken System.Boolean*/
        /* IL_91: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_96: callvirt String get_FullName()*/
        /* IL_9B: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t4)).vtable)["asm0.x60000d7"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t4))));
        /* IL_A0: ldtoken A*/
        /* IL_A5: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_AA: callvirt String get_FullName()*/
        /* IL_AF: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x60000d7"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))));
        /* IL_B4: newobj Void .ctor()*/
        /* IL_B9: call Type GetType()*/
        /* IL_BE: callvirt String get_FullName()*/
        /* IL_C3: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x600000a(BLR.newobj(t1,asm1.x600000a,[null])).vtable)["asm0.x60000d7"])())(asm0.x600000a(BLR.newobj(t1,asm1.x600000a,[null]))));
        /* IL_C8: newobj Void .ctor()*/
        /* IL_CD: call Type GetType()*/
        /* IL_D2: ldtoken A*/
        /* IL_D7: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_DC: callvirt Boolean Equals(System.Object)*/
        /* IL_E1: box System.Boolean*/
        /* IL_E6: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(BLR.newobj(t1,asm1.x600000a,[null])).vtable)["asm0.x6000008"])())(asm0.x600000a(BLR.newobj(t1,asm1.x600000a,[null])),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_EB: newobj Void .ctor()*/
        /* IL_F0: call Type GetType()*/
        /* IL_F5: ldtoken System.String*/
        /* IL_FA: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_FF: callvirt Boolean Equals(System.Object)*/
        /* IL_104: box System.Boolean*/
        /* IL_109: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(BLR.newobj(t1,asm1.x600000a,[null])).vtable)["asm0.x6000008"])())(asm0.x600000a(BLR.newobj(t1,asm1.x600000a,[null])),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_10E: ldstr */
        /* IL_113: callvirt Type GetType()*/
        /* IL_118: ldtoken System.String*/
        /* IL_11D: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_122: callvirt Boolean Equals(System.Object)*/
        /* IL_127: box System.Boolean*/
        /* IL_12C: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(BLR.new_string("")).vtable)["asm0.x6000008"])())(asm0.x600000a(BLR.new_string("")),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_131: ldstr */
        /* IL_136: callvirt Type GetType()*/
        /* IL_13B: ldtoken A*/
        /* IL_140: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_145: callvirt Boolean Equals(System.Object)*/
        /* IL_14A: box System.Boolean*/
        /* IL_14F: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(BLR.new_string("")).vtable)["asm0.x6000008"])())(asm0.x600000a(BLR.new_string("")),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_154: ldc.i4.1 */
        /* IL_155: box System.Int32*/
        /* IL_15A: call Type GetType()*/
        /* IL_15F: ldtoken A*/
        /* IL_164: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_169: callvirt Boolean Equals(System.Object)*/
        /* IL_16E: box System.Boolean*/
        /* IL_173: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a({
                        'boxed': (1|0),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    }).vtable)["asm0.x6000008"])())(asm0.x600000a({
                            'boxed': (1|0),
                            'type': t2,
                            'vtable': t2.prototype.vtable,
                            'ifacemap': t2.prototype.ifacemap
                        }),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_178: ldc.i4.1 */
        /* IL_179: box System.Int32*/
        /* IL_17E: call Type GetType()*/
        /* IL_183: ldtoken System.Int32*/
        /* IL_188: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_18D: callvirt Boolean Equals(System.Object)*/
        /* IL_192: box System.Boolean*/
        /* IL_197: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a({
                        'boxed': (1|0),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    }).vtable)["asm0.x6000008"])())(asm0.x600000a({
                            'boxed': (1|0),
                            'type': t2,
                            'vtable': t2.prototype.vtable,
                            'ifacemap': t2.prototype.ifacemap
                        }),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_19C: ldc.i4.1 */
        /* IL_19D: box System.Int32*/
        /* IL_1A2: call Type GetType()*/
        /* IL_1A7: callvirt String get_FullName()*/
        /* IL_1AC: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x600000a({
                    'boxed': (1|0),
                    'type': t2,
                    'vtable': t2.prototype.vtable,
                    'ifacemap': t2.prototype.ifacemap
                }).vtable)["asm0.x60000d7"])())(asm0.x600000a({
                        'boxed': (1|0),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    })));
        /* IL_1B1: ldtoken A*/
        /* IL_1B6: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_1BB: callvirt String get_AssemblyQualifiedName()*/
        /* IL_1C0: ldstr .clr*/
        /* IL_1C5: ldstr .brl*/
        /* IL_1CA: callvirt String Replace(System.String, System.String)*/
        /* IL_1CF: call Void Log(System.Object)*/
        asm1.x6000001(asm0.x60001b3((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x60000dd"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),BLR.new_string(".clr"),BLR.new_string(".brl")));
        /* IL_1D4: ldtoken X`1[A]*/
        /* IL_1D9: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_1DE: callvirt String get_FullName()*/
        /* IL_1E3: ldstr .clr*/
        /* IL_1E8: ldstr .brl*/
        /* IL_1ED: callvirt String Replace(System.String, System.String)*/
        /* IL_1F2: call Void Log(System.Object)*/
        asm1.x6000001(asm0.x60001b3((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t5)).vtable)["asm0.x60000d7"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t5))),BLR.new_string(".clr"),BLR.new_string(".brl")));
        /* IL_1F7: newobj Void .ctor()*/
        /* IL_1FC: call Type GetType()*/
        /* IL_201: callvirt String get_FullName()*/
        /* IL_206: ldstr .clr*/
        /* IL_20B: ldstr .brl*/
        /* IL_210: callvirt String Replace(System.String, System.String)*/
        /* IL_215: call Void Log(System.Object)*/
        asm1.x6000001(asm0.x60001b3((((asm0.x600000a(BLR.newobj(t5,asm1.x600000c,[null])).vtable)["asm0.x60000d7"])())(asm0.x600000a(BLR.newobj(t5,asm1.x600000c,[null]))),BLR.new_string(".clr"),BLR.new_string(".brl")));
        /* IL_21A: newobj Void .ctor()*/
        /* IL_21F: call Type GetType()*/
        /* IL_224: ldtoken X`1[T]*/
        /* IL_229: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_22E: callvirt Boolean Equals(System.Object)*/
        /* IL_233: box System.Boolean*/
        /* IL_238: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(BLR.newobj(t5,asm1.x600000c,[null])).vtable)["asm0.x6000008"])())(asm0.x600000a(BLR.newobj(t5,asm1.x600000c,[null])),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_23D: newobj Void .ctor()*/
        /* IL_242: call Type GetType()*/
        /* IL_247: ldtoken X`1[B]*/
        /* IL_24C: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_251: callvirt Boolean Equals(System.Object)*/
        /* IL_256: box System.Boolean*/
        /* IL_25B: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(BLR.newobj(t5,asm1.x600000c,[null])).vtable)["asm0.x6000008"])())(asm0.x600000a(BLR.newobj(t5,asm1.x600000c,[null])),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t10))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_260: ldstr */
        /* IL_265: callvirt Type GetType()*/
        /* IL_26A: ldtoken X`1[T]*/
        /* IL_26F: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_274: callvirt Boolean Equals(System.Object)*/
        /* IL_279: box System.Boolean*/
        /* IL_27E: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(BLR.new_string("")).vtable)["asm0.x6000008"])())(asm0.x600000a(BLR.new_string("")),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_283: ldtoken X`1[T]*/
        /* IL_288: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        st_73 = asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8));
        /* IL_28D: ldc.i4.1 */
        /* IL_28E: newarr System.Type*/
        /* IL_293: stloc.0 */
        loc0 = BLR.new_array(t11,(1|0));
        /* IL_294: ldloc.0 */
        st_70 = loc0;
        /* IL_295: ldc.i4.0 */
        st_71 = (0|0);
        /* IL_296: ldtoken A*/
        st_6F = BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1);
        /* IL_29B: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        st_72 = asm0.x60000d8(st_6F);
        /* IL_2A0: stelem.ref */
        BLR.stelem_ref(st_70,st_71,st_72);
        /* IL_2A1: ldloc.0 */
        st_74 = loc0;
        /* IL_2A2: callvirt Type MakeGenericType(System.Type[])*/
        st_76 = ((st_73.vtable)["asm0.x60000e3"]())(st_73,st_74);
        /* IL_2A7: ldtoken X`1[A]*/
        st_75 = BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t5);
        /* IL_2AC: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        st_77 = asm0.x60000d8(st_75);
        /* IL_2B1: callvirt Boolean Equals(System.Object)*/
        st_78 = ((st_76.vtable)["asm0.x6000008"]())(st_76,st_77);
        /* IL_2B6: box System.Boolean*/
        st_79 = {
            'boxed': st_78,
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        };
        /* IL_2BB: call Void Log(System.Object)*/
        asm1.x6000001(st_79);
        /* IL_2C0: ldtoken System.Object*/
        /* IL_2C5: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_2CA: callvirt Type get_BaseType()*/
        /* IL_2CF: ldnull */
        /* IL_2D1: ceq */
        /* IL_2D2: box System.Boolean*/
        /* IL_2D7: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t12)).vtable)["asm0.x60000dc"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))) === null) ? (1) : (0)),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_2DC: ldtoken A*/
        /* IL_2E1: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_2E6: callvirt Type get_BaseType()*/
        /* IL_2EB: ldtoken System.Object*/
        /* IL_2F0: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_2F5: callvirt Boolean Equals(System.Object)*/
        /* IL_2FA: box System.Boolean*/
        /* IL_2FF: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x60000dc"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))).vtable)["asm0.x6000008"])())((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x60000dc"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_304: ldtoken A*/
        /* IL_309: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_30E: callvirt Type get_BaseType()*/
        /* IL_313: ldtoken B*/
        /* IL_318: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_31D: callvirt Boolean Equals(System.Object)*/
        /* IL_322: box System.Boolean*/
        /* IL_327: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x60000dc"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))).vtable)["asm0.x6000008"])())((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x60000dc"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_32C: ldtoken B*/
        /* IL_331: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_336: callvirt Type get_BaseType()*/
        /* IL_33B: ldtoken A*/
        /* IL_340: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_345: callvirt Boolean Equals(System.Object)*/
        /* IL_34A: box System.Boolean*/
        /* IL_34F: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)).vtable)["asm0.x60000dc"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))).vtable)["asm0.x6000008"])())((((asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)).vtable)["asm0.x60000dc"])())(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_354: ldtoken B*/
        /* IL_359: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_35E: ldtoken A*/
        /* IL_363: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_368: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_36D: box System.Boolean*/
        /* IL_372: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_377: ldtoken B*/
        /* IL_37C: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_381: ldtoken B*/
        /* IL_386: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_38B: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_390: box System.Boolean*/
        /* IL_395: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_39A: ldtoken A*/
        /* IL_39F: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_3A4: ldtoken B*/
        /* IL_3A9: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_3AE: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_3B3: box System.Boolean*/
        /* IL_3B8: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_3BD: ldtoken A*/
        /* IL_3C2: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_3C7: ldtoken A*/
        /* IL_3CC: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_3D1: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_3D6: box System.Boolean*/
        /* IL_3DB: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_3E0: ldtoken A*/
        /* IL_3E5: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_3EA: ldtoken I2*/
        /* IL_3EF: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_3F4: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_3F9: box System.Boolean*/
        /* IL_3FE: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_403: ldtoken B*/
        /* IL_408: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_40D: ldtoken I2*/
        /* IL_412: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_417: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_41C: box System.Boolean*/
        /* IL_421: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_426: ldtoken A*/
        /* IL_42B: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_430: ldtoken I*/
        /* IL_435: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_43A: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_43F: box System.Boolean*/
        /* IL_444: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t14))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_449: ldtoken B*/
        /* IL_44E: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_453: ldtoken I*/
        /* IL_458: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_45D: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_462: box System.Boolean*/
        /* IL_467: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t14))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_46C: ldtoken I2*/
        /* IL_471: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_476: ldtoken I2*/
        /* IL_47B: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_480: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_485: box System.Boolean*/
        /* IL_48A: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_48F: ldtoken I*/
        /* IL_494: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_499: ldtoken I2*/
        /* IL_49E: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_4A3: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_4A8: box System.Boolean*/
        /* IL_4AD: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t14)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_4B2: ldtoken I2*/
        /* IL_4B7: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_4BC: ldtoken B*/
        /* IL_4C1: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_4C6: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_4CB: box System.Boolean*/
        /* IL_4D0: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_4D5: ldtoken I*/
        /* IL_4DA: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_4DF: ldtoken B*/
        /* IL_4E4: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_4E9: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_4EE: box System.Boolean*/
        /* IL_4F3: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t14)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_4F8: ldtoken I3`1[System.Int32]*/
        /* IL_4FD: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_502: ldtoken X`1[System.Int32]*/
        /* IL_507: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_50C: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_511: box System.Boolean*/
        /* IL_516: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t15)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t16))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_51B: ldtoken I*/
        /* IL_520: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_525: ldtoken X`1[System.Int32]*/
        /* IL_52A: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_52F: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_534: box System.Boolean*/
        /* IL_539: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t14)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t16))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_53E: ldtoken I2*/
        /* IL_543: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_548: ldtoken X`1[System.Int32]*/
        /* IL_54D: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_552: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_557: box System.Boolean*/
        /* IL_55C: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t16))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_561: ldtoken I*/
        /* IL_566: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_56B: ldtoken I3`1[System.Int32]*/
        /* IL_570: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_575: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_57A: box System.Boolean*/
        /* IL_57F: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000e(asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t14)),asm0.x60000d8(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_584: ret */
        return ;
    };
    /* static System.Boolean Program.IsAssignableFrom(Type,Type)*/
    asm.x600000e = function IsAssignableFrom(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: callvirt Boolean IsAssignableFrom(System.Type)*/
        /* IL_07: ret */
        return ((arg0.vtable)["asm0.x60000e4"]())(arg0,arg1);
    };;
    /*  Program..ctor()*/
    asm.x600000f = function _ctor(arg0)
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
