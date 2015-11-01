var asm1;(function (asm)
{
    asm.FullName = "Reflection.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        asm1.x6000001(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  X`1..ctor()*/
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
        (asm1.A().init)();
        ((asm1)["X`1"](asm1.A()).init)();
        ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
        ((asm1)["X`1"]((asm0)["CilJs.Runtime.UnboundGenericParameter"]()).init)();
        (asm1.B().init)();
        ((asm1)["X`1"](asm1.B()).init)();
        (asm1.I2().init)();
        (asm1.I().init)();
        ((asm1)["I3`1"]((asm0)["System.Int32"]()).init)();
        ((asm1)["X`1"]((asm0)["System.Int32"]()).init)();
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
        var st_88;
        var st_89;
        var st_8A;
        var st_8B;
        var st_8C;
        var st_8D;
        var st_8E;
        var st_8F;
        var st_90;
        var st_91;
        var st_92;
        var st_93;
        var st_94;
        var st_95;
        CILJS.init_base_types();
        t0 = asm1.A();
        t1 = (asm0)["System.Object"]();
        t2 = (asm0)["System.Int32"]();
        t3 = (asm0)["System.String"]();
        t4 = (asm0)["System.Boolean"]();
        t5 = (asm1)["X`1"](t0);
        t6 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
        t7 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
        t8 = (asm1)["X`1"](t7);
        t9 = asm1.B();
        t10 = (asm1)["X`1"](t9);
        t11 = (asm0)["System.Type"]();
        t12 = asm1.I2();
        t13 = asm1.I();
        t14 = (asm1)["I3`1"](t2);
        t15 = (asm1)["X`1"](t2);
        /* IL_00: nop  */
        /* IL_01: ldtoken A */
        /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_0B: callvirt String get_Name() */
        /* IL_10: ldc.i4.0  */
        /* IL_11: newarr System.Object */
        /* IL_16: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60001a4"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),CILJS.new_array(t1,(0|0)));
        /* IL_1B: nop  */
        /* IL_1C: ldtoken System.Int32 */
        /* IL_21: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_26: callvirt String get_Name() */
        /* IL_2B: ldc.i4.0  */
        /* IL_2C: newarr System.Object */
        /* IL_31: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x60001a4"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))),CILJS.new_array(t1,(0|0)));
        /* IL_36: nop  */
        /* IL_37: ldtoken System.String */
        /* IL_3C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_41: callvirt String get_Name() */
        /* IL_46: ldc.i4.0  */
        /* IL_47: newarr System.Object */
        /* IL_4C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3)).vtable)["asm0.x60001a4"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),CILJS.new_array(t1,(0|0)));
        /* IL_51: nop  */
        /* IL_52: ldtoken System.Boolean */
        /* IL_57: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_5C: callvirt String get_Name() */
        /* IL_61: ldc.i4.0  */
        /* IL_62: newarr System.Object */
        /* IL_67: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t4)).vtable)["asm0.x60001a4"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t4))),CILJS.new_array(t1,(0|0)));
        /* IL_6C: nop  */
        /* IL_6D: ldtoken A */
        /* IL_72: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_77: callvirt String get_FullName() */
        /* IL_7C: ldc.i4.0  */
        /* IL_7D: newarr System.Object */
        /* IL_82: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x6000146"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),CILJS.new_array(t1,(0|0)));
        /* IL_87: nop  */
        /* IL_88: ldtoken System.Int32 */
        /* IL_8D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_92: callvirt String get_FullName() */
        /* IL_97: ldc.i4.0  */
        /* IL_98: newarr System.Object */
        /* IL_9D: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x6000146"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))),CILJS.new_array(t1,(0|0)));
        /* IL_A2: nop  */
        /* IL_A3: ldtoken System.String */
        /* IL_A8: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_AD: callvirt String get_FullName() */
        /* IL_B2: ldc.i4.0  */
        /* IL_B3: newarr System.Object */
        /* IL_B8: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3)).vtable)["asm0.x6000146"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),CILJS.new_array(t1,(0|0)));
        /* IL_BD: nop  */
        /* IL_BE: ldtoken System.Boolean */
        /* IL_C3: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_C8: callvirt String get_FullName() */
        /* IL_CD: ldc.i4.0  */
        /* IL_CE: newarr System.Object */
        /* IL_D3: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t4)).vtable)["asm0.x6000146"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t4))),CILJS.new_array(t1,(0|0)));
        /* IL_D8: nop  */
        /* IL_D9: ldtoken A */
        /* IL_DE: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_E3: callvirt String get_FullName() */
        /* IL_E8: ldc.i4.0  */
        /* IL_E9: newarr System.Object */
        /* IL_EE: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x6000146"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),CILJS.new_array(t1,(0|0)));
        /* IL_F3: nop  */
        /* IL_F4: newobj Void .ctor() */
        /* IL_F9: call Type GetType() */
        /* IL_FE: callvirt String get_FullName() */
        /* IL_103: ldc.i4.0  */
        /* IL_104: newarr System.Object */
        /* IL_109: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x60000f2(CILJS.newobj(t0,asm1.x6000001,[null])).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.newobj(t0,asm1.x6000001,[null]))),CILJS.new_array(t1,(0|0)));
        /* IL_10E: nop  */
        /* IL_10F: newobj Void .ctor() */
        /* IL_114: call Type GetType() */
        /* IL_119: ldtoken A */
        /* IL_11E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_123: callvirt Boolean Equals(System.Object) */
        /* IL_128: box System.Boolean */
        /* IL_12D: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(CILJS.newobj(t0,asm1.x6000001,[null])).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.newobj(t0,asm1.x6000001,[null])),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),t4));
        /* IL_132: nop  */
        /* IL_133: newobj Void .ctor() */
        /* IL_138: call Type GetType() */
        /* IL_13D: ldtoken System.String */
        /* IL_142: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_147: callvirt Boolean Equals(System.Object) */
        /* IL_14C: box System.Boolean */
        /* IL_151: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(CILJS.newobj(t0,asm1.x6000001,[null])).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.newobj(t0,asm1.x6000001,[null])),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),t4));
        /* IL_156: nop  */
        /* IL_157: ldstr  */
        /* IL_15C: call Type GetType() */
        /* IL_161: ldtoken System.String */
        /* IL_166: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_16B: callvirt Boolean Equals(System.Object) */
        /* IL_170: box System.Boolean */
        /* IL_175: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(CILJS.new_string("")).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.new_string("")),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),t4));
        /* IL_17A: nop  */
        /* IL_17B: ldstr  */
        /* IL_180: call Type GetType() */
        /* IL_185: ldtoken A */
        /* IL_18A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_18F: callvirt Boolean Equals(System.Object) */
        /* IL_194: box System.Boolean */
        /* IL_199: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(CILJS.new_string("")).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.new_string("")),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),t4));
        /* IL_19E: nop  */
        /* IL_19F: ldc.i4.1  */
        /* IL_1A0: box System.Int32 */
        /* IL_1A5: call Type GetType() */
        /* IL_1AA: ldtoken A */
        /* IL_1AF: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1B4: callvirt Boolean Equals(System.Object) */
        /* IL_1B9: box System.Boolean */
        /* IL_1BE: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(CILJS.make_box((1|0),t2)).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.make_box((1|0),t2)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),t4));
        /* IL_1C3: nop  */
        /* IL_1C4: ldc.i4.1  */
        /* IL_1C5: box System.Int32 */
        /* IL_1CA: call Type GetType() */
        /* IL_1CF: ldtoken System.Int32 */
        /* IL_1D4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1D9: callvirt Boolean Equals(System.Object) */
        /* IL_1DE: box System.Boolean */
        /* IL_1E3: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(CILJS.make_box((1|0),t2)).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.make_box((1|0),t2)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))),t4));
        /* IL_1E8: nop  */
        /* IL_1E9: ldc.i4.1  */
        /* IL_1EA: box System.Int32 */
        /* IL_1EF: call Type GetType() */
        /* IL_1F4: callvirt String get_FullName() */
        /* IL_1F9: ldc.i4.0  */
        /* IL_1FA: newarr System.Object */
        /* IL_1FF: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x60000f2(CILJS.make_box((1|0),t2)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.make_box((1|0),t2))),CILJS.new_array(t1,(0|0)));
        /* IL_204: nop  */
        /* IL_205: ldtoken A */
        /* IL_20A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_20F: callvirt String get_AssemblyQualifiedName() */
        /* IL_214: ldstr .clr */
        /* IL_219: ldstr .ciljs */
        /* IL_21E: callvirt String Replace(System.String, System.String) */
        /* IL_223: ldc.i4.0  */
        /* IL_224: newarr System.Object */
        /* IL_229: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(asm0.x600012e((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600014c"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),CILJS.new_string(".clr"),CILJS.new_string(".ciljs")),CILJS.new_array(t1,(0|0)));
        /* IL_22E: nop  */
        /* IL_22F: ldtoken X`1[A] */
        /* IL_234: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_239: callvirt String get_FullName() */
        /* IL_23E: ldstr .clr */
        /* IL_243: ldstr .ciljs */
        /* IL_248: callvirt String Replace(System.String, System.String) */
        /* IL_24D: ldc.i4.0  */
        /* IL_24E: newarr System.Object */
        /* IL_253: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(asm0.x600012e((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5)).vtable)["asm0.x6000146"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5))),CILJS.new_string(".clr"),CILJS.new_string(".ciljs")),CILJS.new_array(t1,(0|0)));
        /* IL_258: nop  */
        /* IL_259: newobj Void .ctor() */
        /* IL_25E: call Type GetType() */
        /* IL_263: callvirt String get_FullName() */
        /* IL_268: ldstr .clr */
        /* IL_26D: ldstr .ciljs */
        /* IL_272: callvirt String Replace(System.String, System.String) */
        /* IL_277: ldc.i4.0  */
        /* IL_278: newarr System.Object */
        /* IL_27D: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(asm0.x600012e((((asm0.x60000f2(CILJS.newobj(t5,asm1.x6000003,[null])).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.newobj(t5,asm1.x6000003,[null]))),CILJS.new_string(".clr"),CILJS.new_string(".ciljs")),CILJS.new_array(t1,(0|0)));
        /* IL_282: nop  */
        /* IL_283: newobj Void .ctor() */
        /* IL_288: call Type GetType() */
        /* IL_28D: ldtoken X`1[T] */
        /* IL_292: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_297: callvirt Boolean Equals(System.Object) */
        /* IL_29C: box System.Boolean */
        /* IL_2A1: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(CILJS.newobj(t5,asm1.x6000003,[null])).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.newobj(t5,asm1.x6000003,[null])),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),t4));
        /* IL_2A6: nop  */
        /* IL_2A7: newobj Void .ctor() */
        /* IL_2AC: call Type GetType() */
        /* IL_2B1: ldtoken X`1[B] */
        /* IL_2B6: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_2BB: callvirt Boolean Equals(System.Object) */
        /* IL_2C0: box System.Boolean */
        /* IL_2C5: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(CILJS.newobj(t5,asm1.x6000003,[null])).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.newobj(t5,asm1.x6000003,[null])),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t10))),t4));
        /* IL_2CA: nop  */
        /* IL_2CB: ldstr  */
        /* IL_2D0: call Type GetType() */
        /* IL_2D5: ldtoken X`1[T] */
        /* IL_2DA: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_2DF: callvirt Boolean Equals(System.Object) */
        /* IL_2E4: box System.Boolean */
        /* IL_2E9: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(CILJS.new_string("")).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.new_string("")),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),t4));
        /* IL_2EE: nop  */
        /* IL_2EF: ldtoken X`1[T] */
        st_88 = CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t8);
        /* IL_2F4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        st_8F = asm0.x6000147(st_88);
        /* IL_2F9: ldc.i4.1  */
        st_89 = (1|0);
        /* IL_2FA: newarr System.Type */
        st_8A = CILJS.new_array(t11,st_89);
        /* IL_2FF: dup  */
        st_90 = (st_8C = st_8A);
        /* IL_300: ldc.i4.0  */
        st_8D = (0|0);
        /* IL_301: ldtoken A */
        st_8B = CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0);
        /* IL_306: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        st_8E = asm0.x6000147(st_8B);
        /* IL_30B: stelem.ref  */
        CILJS.stelem_ref(st_8C,st_8D,st_8E);
        /* IL_30C: callvirt Type MakeGenericType(System.Type[]) */
        st_92 = ((st_8F.vtable)["asm0.x6000152"]())(st_8F,st_90);
        /* IL_311: ldtoken X`1[A] */
        st_91 = CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5);
        /* IL_316: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        st_93 = asm0.x6000147(st_91);
        /* IL_31B: callvirt Boolean Equals(System.Object) */
        st_94 = ((st_92.vtable)["asm0.x60000f0"]())(st_92,st_93);
        /* IL_320: box System.Boolean */
        st_95 = CILJS.make_box(st_94,t4);
        /* IL_325: call Void WriteLine(System.Object) */
        asm0.x600005a(st_95);
        /* IL_32A: nop  */
        /* IL_32B: ldtoken System.Object */
        /* IL_330: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_335: callvirt Type get_BaseType() */
        /* IL_33A: ldnull  */
        /* IL_33C: ceq  */
        /* IL_33D: box System.Boolean */
        /* IL_342: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x600014b"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))) === null) ? (1) : (0)),t4));
        /* IL_347: nop  */
        /* IL_348: ldtoken A */
        /* IL_34D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_352: callvirt Type get_BaseType() */
        /* IL_357: ldtoken System.Object */
        /* IL_35C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_361: callvirt Boolean Equals(System.Object) */
        /* IL_366: box System.Boolean */
        /* IL_36B: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(((((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600014b"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))).vtable)["asm0.x60000f0"])())((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600014b"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),t4));
        /* IL_370: nop  */
        /* IL_371: ldtoken A */
        /* IL_376: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_37B: callvirt Type get_BaseType() */
        /* IL_380: ldtoken B */
        /* IL_385: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_38A: callvirt Boolean Equals(System.Object) */
        /* IL_38F: box System.Boolean */
        /* IL_394: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(((((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600014b"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))).vtable)["asm0.x60000f0"])())((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600014b"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),t4));
        /* IL_399: nop  */
        /* IL_39A: ldtoken B */
        /* IL_39F: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3A4: callvirt Type get_BaseType() */
        /* IL_3A9: ldtoken A */
        /* IL_3AE: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3B3: callvirt Boolean Equals(System.Object) */
        /* IL_3B8: box System.Boolean */
        /* IL_3BD: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(((((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)).vtable)["asm0.x600014b"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))).vtable)["asm0.x60000f0"])())((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)).vtable)["asm0.x600014b"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),t4));
        /* IL_3C2: nop  */
        /* IL_3C3: ldtoken B */
        /* IL_3C8: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3CD: ldtoken A */
        /* IL_3D2: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3D7: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_3DC: box System.Boolean */
        /* IL_3E1: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),t4));
        /* IL_3E6: nop  */
        /* IL_3E7: ldtoken B */
        /* IL_3EC: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3F1: ldtoken B */
        /* IL_3F6: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3FB: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_400: box System.Boolean */
        /* IL_405: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),t4));
        /* IL_40A: nop  */
        /* IL_40B: ldtoken A */
        /* IL_410: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_415: ldtoken B */
        /* IL_41A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_41F: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_424: box System.Boolean */
        /* IL_429: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),t4));
        /* IL_42E: nop  */
        /* IL_42F: ldtoken A */
        /* IL_434: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_439: ldtoken A */
        /* IL_43E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_443: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_448: box System.Boolean */
        /* IL_44D: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),t4));
        /* IL_452: nop  */
        /* IL_453: ldtoken A */
        /* IL_458: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_45D: ldtoken I2 */
        /* IL_462: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_467: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_46C: box System.Boolean */
        /* IL_471: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),t4));
        /* IL_476: nop  */
        /* IL_477: ldtoken B */
        /* IL_47C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_481: ldtoken I2 */
        /* IL_486: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_48B: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_490: box System.Boolean */
        /* IL_495: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),t4));
        /* IL_49A: nop  */
        /* IL_49B: ldtoken A */
        /* IL_4A0: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4A5: ldtoken I */
        /* IL_4AA: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4AF: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_4B4: box System.Boolean */
        /* IL_4B9: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),t4));
        /* IL_4BE: nop  */
        /* IL_4BF: ldtoken B */
        /* IL_4C4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4C9: ldtoken I */
        /* IL_4CE: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4D3: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_4D8: box System.Boolean */
        /* IL_4DD: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),t4));
        /* IL_4E2: nop  */
        /* IL_4E3: ldtoken I2 */
        /* IL_4E8: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4ED: ldtoken I2 */
        /* IL_4F2: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4F7: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_4FC: box System.Boolean */
        /* IL_501: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),t4));
        /* IL_506: nop  */
        /* IL_507: ldtoken I */
        /* IL_50C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_511: ldtoken I2 */
        /* IL_516: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_51B: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_520: box System.Boolean */
        /* IL_525: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),t4));
        /* IL_52A: nop  */
        /* IL_52B: ldtoken I2 */
        /* IL_530: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_535: ldtoken B */
        /* IL_53A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_53F: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_544: box System.Boolean */
        /* IL_549: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),t4));
        /* IL_54E: nop  */
        /* IL_54F: ldtoken I */
        /* IL_554: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_559: ldtoken B */
        /* IL_55E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_563: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_568: box System.Boolean */
        /* IL_56D: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),t4));
        /* IL_572: nop  */
        /* IL_573: ldtoken I3`1[System.Int32] */
        /* IL_578: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_57D: ldtoken X`1[System.Int32] */
        /* IL_582: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_587: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_58C: box System.Boolean */
        /* IL_591: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t14)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),t4));
        /* IL_596: nop  */
        /* IL_597: ldtoken I */
        /* IL_59C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_5A1: ldtoken X`1[System.Int32] */
        /* IL_5A6: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_5AB: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_5B0: box System.Boolean */
        /* IL_5B5: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),t4));
        /* IL_5BA: nop  */
        /* IL_5BB: ldtoken I2 */
        /* IL_5C0: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_5C5: ldtoken X`1[System.Int32] */
        /* IL_5CA: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_5CF: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_5D4: box System.Boolean */
        /* IL_5D9: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),t4));
        /* IL_5DE: nop  */
        /* IL_5DF: ldtoken I */
        /* IL_5E4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_5E9: ldtoken I3`1[System.Int32] */
        /* IL_5EE: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_5F3: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_5F8: box System.Boolean */
        /* IL_5FD: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t14))),t4));
        /* IL_602: nop  */
        /* IL_603: ret  */
        return ;
    };
    /* static System.Boolean Program.IsAssignableFrom(Type,Type)*/
    asm.x6000005 = function IsAssignableFrom(arg0, arg1)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldarg.1  */
        /* IL_03: callvirt Boolean IsAssignableFrom(System.Type) */
        /* IL_08: stloc.0  */
        loc0 = ((arg0.vtable)["asm0.x6000153"]())(arg0,arg1);
        /* IL_0B: ldloc.0  */
        /* IL_0C: ret  */
        return loc0;
    };;
    /*  Program..ctor()*/
    asm.x6000006 = function _ctor(arg0)
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
            return asm1.A();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm1.I2()],
                {});
            CILJS.implement_interface(
                this,
                [asm1.I()],
                {});
        });
    (asm)["X`1"] = CILJS.declare_type(
        "X_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"X`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            (this.GenericArguments)["asm1.t2000004"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000004<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm1)["I3`1"](T), T],
                {});
            CILJS.implement_interface(
                this,
                [asm1.I()],
                {});
        });
    asm.I = CILJS.declare_type(
        "I",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
        });
    asm.I2 = CILJS.declare_type(
        "I2",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I2",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.implement_interface(
                this,
                [asm1.I()],
                null);
        });
    (asm)["I3`1"] = CILJS.declare_type(
        "I3_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I3`1",false,false,true,true,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
            CILJS.implement_interface(
                this,
                [asm1.I()],
                null);
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
    asm.entryPoint = asm.x6000004;
})(asm1 || (asm1 = {}));
