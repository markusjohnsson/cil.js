var asm1;(function (asm)
{
    asm.FullName = "Reflection.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000001(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /*  X`1..ctor()*/
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
        var loc0;
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
        /* IL_00: ldtoken A */
        /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_0A: callvirt String get_Name() */
        /* IL_0F: ldc.i4.0  */
        /* IL_10: newarr System.Object */
        /* IL_15: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60001a4"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),CILJS.new_array(t1,(0|0)));
        /* IL_1A: ldtoken System.Int32 */
        /* IL_1F: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_24: callvirt String get_Name() */
        /* IL_29: ldc.i4.0  */
        /* IL_2A: newarr System.Object */
        /* IL_2F: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x60001a4"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))),CILJS.new_array(t1,(0|0)));
        /* IL_34: ldtoken System.String */
        /* IL_39: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3E: callvirt String get_Name() */
        /* IL_43: ldc.i4.0  */
        /* IL_44: newarr System.Object */
        /* IL_49: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3)).vtable)["asm0.x60001a4"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),CILJS.new_array(t1,(0|0)));
        /* IL_4E: ldtoken System.Boolean */
        /* IL_53: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_58: callvirt String get_Name() */
        /* IL_5D: ldc.i4.0  */
        /* IL_5E: newarr System.Object */
        /* IL_63: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t4)).vtable)["asm0.x60001a4"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t4))),CILJS.new_array(t1,(0|0)));
        /* IL_68: ldtoken A */
        /* IL_6D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_72: callvirt String get_FullName() */
        /* IL_77: ldc.i4.0  */
        /* IL_78: newarr System.Object */
        /* IL_7D: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x6000146"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),CILJS.new_array(t1,(0|0)));
        /* IL_82: ldtoken System.Int32 */
        /* IL_87: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_8C: callvirt String get_FullName() */
        /* IL_91: ldc.i4.0  */
        /* IL_92: newarr System.Object */
        /* IL_97: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x6000146"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))),CILJS.new_array(t1,(0|0)));
        /* IL_9C: ldtoken System.String */
        /* IL_A1: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_A6: callvirt String get_FullName() */
        /* IL_AB: ldc.i4.0  */
        /* IL_AC: newarr System.Object */
        /* IL_B1: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3)).vtable)["asm0.x6000146"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),CILJS.new_array(t1,(0|0)));
        /* IL_B6: ldtoken System.Boolean */
        /* IL_BB: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_C0: callvirt String get_FullName() */
        /* IL_C5: ldc.i4.0  */
        /* IL_C6: newarr System.Object */
        /* IL_CB: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t4)).vtable)["asm0.x6000146"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t4))),CILJS.new_array(t1,(0|0)));
        /* IL_D0: ldtoken A */
        /* IL_D5: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_DA: callvirt String get_FullName() */
        /* IL_DF: ldc.i4.0  */
        /* IL_E0: newarr System.Object */
        /* IL_E5: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x6000146"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),CILJS.new_array(t1,(0|0)));
        /* IL_EA: newobj Void .ctor() */
        /* IL_EF: call Type GetType() */
        /* IL_F4: callvirt String get_FullName() */
        /* IL_F9: ldc.i4.0  */
        /* IL_FA: newarr System.Object */
        /* IL_FF: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x60000f2(CILJS.newobj(t0,asm1.x6000001,[null])).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.newobj(t0,asm1.x6000001,[null]))),CILJS.new_array(t1,(0|0)));
        /* IL_104: newobj Void .ctor() */
        /* IL_109: call Type GetType() */
        /* IL_10E: ldtoken A */
        /* IL_113: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_118: callvirt Boolean Equals(System.Object) */
        /* IL_11D: box System.Boolean */
        /* IL_122: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(CILJS.newobj(t0,asm1.x6000001,[null])).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.newobj(t0,asm1.x6000001,[null])),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_127: newobj Void .ctor() */
        /* IL_12C: call Type GetType() */
        /* IL_131: ldtoken System.String */
        /* IL_136: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_13B: callvirt Boolean Equals(System.Object) */
        /* IL_140: box System.Boolean */
        /* IL_145: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(CILJS.newobj(t0,asm1.x6000001,[null])).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.newobj(t0,asm1.x6000001,[null])),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_14A: ldstr  */
        /* IL_14F: callvirt Type GetType() */
        /* IL_154: ldtoken System.String */
        /* IL_159: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_15E: callvirt Boolean Equals(System.Object) */
        /* IL_163: box System.Boolean */
        /* IL_168: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(CILJS.new_string("")).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.new_string("")),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_16D: ldstr  */
        /* IL_172: callvirt Type GetType() */
        /* IL_177: ldtoken A */
        /* IL_17C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_181: callvirt Boolean Equals(System.Object) */
        /* IL_186: box System.Boolean */
        /* IL_18B: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(CILJS.new_string("")).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.new_string("")),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_190: ldc.i4.1  */
        /* IL_191: box System.Int32 */
        /* IL_196: call Type GetType() */
        /* IL_19B: ldtoken A */
        /* IL_1A0: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1A5: callvirt Boolean Equals(System.Object) */
        /* IL_1AA: box System.Boolean */
        /* IL_1AF: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2({
                        'boxed': (1|0),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    }).vtable)["asm0.x60000f0"])())(asm0.x60000f2({
                            'boxed': (1|0),
                            'type': t2,
                            'vtable': t2.prototype.vtable,
                            'ifacemap': t2.prototype.ifacemap
                        }),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_1B4: ldc.i4.1  */
        /* IL_1B5: box System.Int32 */
        /* IL_1BA: call Type GetType() */
        /* IL_1BF: ldtoken System.Int32 */
        /* IL_1C4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1C9: callvirt Boolean Equals(System.Object) */
        /* IL_1CE: box System.Boolean */
        /* IL_1D3: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2({
                        'boxed': (1|0),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    }).vtable)["asm0.x60000f0"])())(asm0.x60000f2({
                            'boxed': (1|0),
                            'type': t2,
                            'vtable': t2.prototype.vtable,
                            'ifacemap': t2.prototype.ifacemap
                        }),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_1D8: ldc.i4.1  */
        /* IL_1D9: box System.Int32 */
        /* IL_1DE: call Type GetType() */
        /* IL_1E3: callvirt String get_FullName() */
        /* IL_1E8: ldc.i4.0  */
        /* IL_1E9: newarr System.Object */
        /* IL_1EE: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x60000f2({
                    'boxed': (1|0),
                    'type': t2,
                    'vtable': t2.prototype.vtable,
                    'ifacemap': t2.prototype.ifacemap
                }).vtable)["asm0.x6000146"])())(asm0.x60000f2({
                        'boxed': (1|0),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    })),CILJS.new_array(t1,(0|0)));
        /* IL_1F3: ldtoken A */
        /* IL_1F8: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1FD: callvirt String get_AssemblyQualifiedName() */
        /* IL_202: ldstr .clr */
        /* IL_207: ldstr .ciljs */
        /* IL_20C: callvirt String Replace(System.String, System.String) */
        /* IL_211: ldc.i4.0  */
        /* IL_212: newarr System.Object */
        /* IL_217: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(asm0.x600012e((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600014c"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),CILJS.new_string(".clr"),CILJS.new_string(".ciljs")),CILJS.new_array(t1,(0|0)));
        /* IL_21C: ldtoken X`1[A] */
        /* IL_221: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_226: callvirt String get_FullName() */
        /* IL_22B: ldstr .clr */
        /* IL_230: ldstr .ciljs */
        /* IL_235: callvirt String Replace(System.String, System.String) */
        /* IL_23A: ldc.i4.0  */
        /* IL_23B: newarr System.Object */
        /* IL_240: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(asm0.x600012e((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5)).vtable)["asm0.x6000146"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5))),CILJS.new_string(".clr"),CILJS.new_string(".ciljs")),CILJS.new_array(t1,(0|0)));
        /* IL_245: newobj Void .ctor() */
        /* IL_24A: call Type GetType() */
        /* IL_24F: callvirt String get_FullName() */
        /* IL_254: ldstr .clr */
        /* IL_259: ldstr .ciljs */
        /* IL_25E: callvirt String Replace(System.String, System.String) */
        /* IL_263: ldc.i4.0  */
        /* IL_264: newarr System.Object */
        /* IL_269: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(asm0.x600012e((((asm0.x60000f2(CILJS.newobj(t5,asm1.x6000003,[null])).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.newobj(t5,asm1.x6000003,[null]))),CILJS.new_string(".clr"),CILJS.new_string(".ciljs")),CILJS.new_array(t1,(0|0)));
        /* IL_26E: newobj Void .ctor() */
        /* IL_273: call Type GetType() */
        /* IL_278: ldtoken X`1[T] */
        /* IL_27D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_282: callvirt Boolean Equals(System.Object) */
        /* IL_287: box System.Boolean */
        /* IL_28C: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(CILJS.newobj(t5,asm1.x6000003,[null])).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.newobj(t5,asm1.x6000003,[null])),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_291: newobj Void .ctor() */
        /* IL_296: call Type GetType() */
        /* IL_29B: ldtoken X`1[B] */
        /* IL_2A0: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_2A5: callvirt Boolean Equals(System.Object) */
        /* IL_2AA: box System.Boolean */
        /* IL_2AF: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(CILJS.newobj(t5,asm1.x6000003,[null])).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.newobj(t5,asm1.x6000003,[null])),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t10))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_2B4: ldstr  */
        /* IL_2B9: callvirt Type GetType() */
        /* IL_2BE: ldtoken X`1[T] */
        /* IL_2C3: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_2C8: callvirt Boolean Equals(System.Object) */
        /* IL_2CD: box System.Boolean */
        /* IL_2D2: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(CILJS.new_string("")).vtable)["asm0.x60000f0"])())(asm0.x60000f2(CILJS.new_string("")),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_2D7: ldtoken X`1[T] */
        /* IL_2DC: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        st_8F = asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t8));
        /* IL_2E1: ldc.i4.1  */
        /* IL_2E2: newarr System.Type */
        /* IL_2E7: stloc.0  */
        loc0 = CILJS.new_array(t11,(1|0));
        /* IL_2E8: ldloc.0  */
        st_8C = loc0;
        /* IL_2E9: ldc.i4.0  */
        st_8D = (0|0);
        /* IL_2EA: ldtoken A */
        st_8B = CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0);
        /* IL_2EF: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        st_8E = asm0.x6000147(st_8B);
        /* IL_2F4: stelem.ref  */
        CILJS.stelem_ref(st_8C,st_8D,st_8E);
        /* IL_2F5: ldloc.0  */
        st_90 = loc0;
        /* IL_2F6: callvirt Type MakeGenericType(System.Type[]) */
        st_92 = ((st_8F.vtable)["asm0.x6000152"]())(st_8F,st_90);
        /* IL_2FB: ldtoken X`1[A] */
        st_91 = CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5);
        /* IL_300: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        st_93 = asm0.x6000147(st_91);
        /* IL_305: callvirt Boolean Equals(System.Object) */
        st_94 = ((st_92.vtable)["asm0.x60000f0"]())(st_92,st_93);
        /* IL_30A: box System.Boolean */
        st_95 = {
            'boxed': st_94,
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        };
        /* IL_30F: call Void WriteLine(System.Object) */
        asm0.x600005a(st_95);
        /* IL_314: ldtoken System.Object */
        /* IL_319: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_31E: callvirt Type get_BaseType() */
        /* IL_323: ldnull  */
        /* IL_325: ceq  */
        /* IL_326: box System.Boolean */
        /* IL_32B: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x600014b"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))) === null) ? (1) : (0)),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_330: ldtoken A */
        /* IL_335: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_33A: callvirt Type get_BaseType() */
        /* IL_33F: ldtoken System.Object */
        /* IL_344: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_349: callvirt Boolean Equals(System.Object) */
        /* IL_34E: box System.Boolean */
        /* IL_353: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600014b"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))).vtable)["asm0.x60000f0"])())((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600014b"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_358: ldtoken A */
        /* IL_35D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_362: callvirt Type get_BaseType() */
        /* IL_367: ldtoken B */
        /* IL_36C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_371: callvirt Boolean Equals(System.Object) */
        /* IL_376: box System.Boolean */
        /* IL_37B: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600014b"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))).vtable)["asm0.x60000f0"])())((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600014b"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_380: ldtoken B */
        /* IL_385: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_38A: callvirt Type get_BaseType() */
        /* IL_38F: ldtoken A */
        /* IL_394: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_399: callvirt Boolean Equals(System.Object) */
        /* IL_39E: box System.Boolean */
        /* IL_3A3: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)).vtable)["asm0.x600014b"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))).vtable)["asm0.x60000f0"])())((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)).vtable)["asm0.x600014b"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_3A8: ldtoken B */
        /* IL_3AD: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3B2: ldtoken A */
        /* IL_3B7: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3BC: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_3C1: box System.Boolean */
        /* IL_3C6: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_3CB: ldtoken B */
        /* IL_3D0: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3D5: ldtoken B */
        /* IL_3DA: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3DF: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_3E4: box System.Boolean */
        /* IL_3E9: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_3EE: ldtoken A */
        /* IL_3F3: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3F8: ldtoken B */
        /* IL_3FD: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_402: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_407: box System.Boolean */
        /* IL_40C: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_411: ldtoken A */
        /* IL_416: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_41B: ldtoken A */
        /* IL_420: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_425: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_42A: box System.Boolean */
        /* IL_42F: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_434: ldtoken A */
        /* IL_439: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_43E: ldtoken I2 */
        /* IL_443: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_448: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_44D: box System.Boolean */
        /* IL_452: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_457: ldtoken B */
        /* IL_45C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_461: ldtoken I2 */
        /* IL_466: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_46B: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_470: box System.Boolean */
        /* IL_475: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_47A: ldtoken A */
        /* IL_47F: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_484: ldtoken I */
        /* IL_489: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_48E: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_493: box System.Boolean */
        /* IL_498: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_49D: ldtoken B */
        /* IL_4A2: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4A7: ldtoken I */
        /* IL_4AC: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4B1: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_4B6: box System.Boolean */
        /* IL_4BB: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_4C0: ldtoken I2 */
        /* IL_4C5: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4CA: ldtoken I2 */
        /* IL_4CF: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4D4: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_4D9: box System.Boolean */
        /* IL_4DE: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_4E3: ldtoken I */
        /* IL_4E8: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4ED: ldtoken I2 */
        /* IL_4F2: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_4F7: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_4FC: box System.Boolean */
        /* IL_501: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_506: ldtoken I2 */
        /* IL_50B: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_510: ldtoken B */
        /* IL_515: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_51A: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_51F: box System.Boolean */
        /* IL_524: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_529: ldtoken I */
        /* IL_52E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_533: ldtoken B */
        /* IL_538: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_53D: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_542: box System.Boolean */
        /* IL_547: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_54C: ldtoken I3`1[System.Int32] */
        /* IL_551: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_556: ldtoken X`1[System.Int32] */
        /* IL_55B: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_560: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_565: box System.Boolean */
        /* IL_56A: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t14)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_56F: ldtoken I */
        /* IL_574: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_579: ldtoken X`1[System.Int32] */
        /* IL_57E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_583: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_588: box System.Boolean */
        /* IL_58D: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_592: ldtoken I2 */
        /* IL_597: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_59C: ldtoken X`1[System.Int32] */
        /* IL_5A1: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_5A6: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_5AB: box System.Boolean */
        /* IL_5B0: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_5B5: ldtoken I */
        /* IL_5BA: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_5BF: ldtoken I3`1[System.Int32] */
        /* IL_5C4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_5C9: call Boolean IsAssignableFrom(System.Type, System.Type) */
        /* IL_5CE: box System.Boolean */
        /* IL_5D3: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000005(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t14))),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_5D8: ret  */
        return ;
    };
    /* static System.Boolean Program.IsAssignableFrom(Type,Type)*/
    asm.x6000005 = function IsAssignableFrom(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: callvirt Boolean IsAssignableFrom(System.Type) */
        /* IL_07: ret  */
        return ((arg0.vtable)["asm0.x6000153"]())(arg0,arg1);
    };;
    /*  Program..ctor()*/
    asm.x6000006 = function _ctor(arg0)
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"I",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
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
            CILJS.init_type(this,asm,"I2",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.implement_interface(
                this,
                [asm1.I()],
                null);
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
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
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
            CILJS.init_type(this,asm,"I3`1",false,false,true,true,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
            CILJS.implement_interface(
                this,
                [asm1.I()],
                null);
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
            CILJS.init_type(this,asm,"X`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
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
