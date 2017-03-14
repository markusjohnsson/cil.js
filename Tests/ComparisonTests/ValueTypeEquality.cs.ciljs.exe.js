var asm1;(function (asm)
{
    asm.FullName = "ValueTypeEquality.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  C..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000002_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        (asm1.Program().init)();
        asm.x6000002 = asm.x6000002_;
    };;
    asm.x6000002 = function ()
    {
        asm.x6000002_init();
        return asm.x6000002_();
    };;
    asm.x6000002_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc0;
        var loc1;
        var st_18;
        var st_19;
        var st_1A;
        var st_1B;
        var st_1F;
        var st_20;
        var st_21;
        var st_22;
        var st_28;
        var st_29;
        var st_2A;
        var st_2B;
        var st_31;
        var st_32;
        var st_33;
        var st_34;
        var st_3A;
        var st_3B;
        var st_3C;
        var st_3D;
        var st_43;
        var st_44;
        var st_45;
        var st_46;
        var st_4A;
        var st_4B;
        var st_4C;
        var st_4D;
        var st_53;
        var st_54;
        var st_55;
        var st_56;
        var st_5C;
        var st_5D;
        var st_5E;
        var st_5F;
        var st_65;
        var st_66;
        var st_67;
        var st_68;
        CILJS.init_base_types();
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        t3 = asm1.Program();
        loc0 = new (asm1.A())();
        loc1 = new (asm1.B())();
        /* IL_00: nop  */
        /* IL_01: ldloca.s 0 */
        /* IL_04: initobj A */
        loc0 = new t0();
        /* IL_09: ldloc.0  */
        /* IL_0A: call Void TestA(A) */
        asm1.x6000003(CILJS.clone_value(loc0));
        /* IL_0F: nop  */
        /* IL_10: ldloca.s 0 */
        /* IL_13: initobj A */
        loc0 = new t0();
        /* IL_18: ldloca.s 0 */
        /* IL_1A: ldc.i4.0  */
        /* IL_1B: stfld Int32 x */
        loc0.x = (0|0);
        /* IL_20: ldloc.0  */
        /* IL_21: call Void TestA(A) */
        asm1.x6000003(CILJS.clone_value(loc0));
        /* IL_26: nop  */
        /* IL_27: ldloca.s 0 */
        /* IL_2A: initobj A */
        loc0 = new t0();
        /* IL_2F: ldloca.s 0 */
        /* IL_31: ldc.i4.s 123 */
        /* IL_33: stfld Int32 x */
        loc0.x = (123|0);
        /* IL_38: ldloc.0  */
        /* IL_39: call Void TestA(A) */
        asm1.x6000003(CILJS.clone_value(loc0));
        /* IL_3E: nop  */
        /* IL_3F: ldloca.s 0 */
        /* IL_42: initobj A */
        loc0 = new t0();
        /* IL_47: ldloca.s 0 */
        /* IL_49: ldc.i4 321 */
        /* IL_4E: stfld Int32 x */
        loc0.x = (321|0);
        /* IL_53: ldloc.0  */
        /* IL_54: call Void TestA(A) */
        asm1.x6000003(CILJS.clone_value(loc0));
        /* IL_59: nop  */
        /* IL_5A: ldloca.s 0 */
        /* IL_5D: initobj A */
        loc0 = new t0();
        /* IL_62: ldloc.0  */
        /* IL_63: call Void TestA(A) */
        asm1.x6000003(CILJS.clone_value(loc0));
        /* IL_68: nop  */
        /* IL_69: ldloca.s 1 */
        /* IL_6C: initobj B */
        loc1 = new t1();
        /* IL_71: ldloc.1  */
        /* IL_72: ldfld A a */
        /* IL_77: call Void TestA(A) */
        asm1.x6000003(CILJS.clone_value(loc1.a));
        /* IL_7C: nop  */
        /* IL_7D: newobj Void .ctor() */
        /* IL_82: stsfld C c1 */
        t3.c1 = CILJS.newobj(t2,asm1.x6000001,[null]);
        /* IL_87: ldloca.s 1 */
        /* IL_8A: initobj B */
        loc1 = new t1();
        /* IL_8F: ldloc.1  */
        /* IL_90: call Void TestB(B) */
        asm1.x6000004(CILJS.clone_value(loc1));
        /* IL_95: nop  */
        /* IL_96: ldloca.s 1 */
        /* IL_99: initobj B */
        loc1 = new t1();
        /* IL_9E: ldloca.s 1 */
        st_1A = {
            'w': function (v)
            {
                loc1 = v;
            },
            'r': function ()
            {
                return loc1;
            }
        };
        /* IL_A0: ldloca.s 0 */
        /* IL_A3: initobj A */
        loc0 = new t0();
        /* IL_A8: ldloca.s 0 */
        st_18 = {
            'w': function (v)
            {
                loc0 = v;
            },
            'r': function ()
            {
                return loc0;
            }
        };
        /* IL_AA: ldc.i4.s 123 */
        st_19 = (123|0);
        /* IL_AC: stfld Int32 x */
        st_18.r().x = st_19;
        /* IL_B1: ldloc.0  */
        st_1B = loc0;
        /* IL_B2: stfld A a */
        st_1A.r().a = st_1B;
        /* IL_B7: ldloc.1  */
        /* IL_B8: call Void TestB(B) */
        asm1.x6000004(CILJS.clone_value(loc1));
        /* IL_BD: nop  */
        /* IL_BE: ldloca.s 1 */
        /* IL_C1: initobj B */
        loc1 = new t1();
        /* IL_C6: ldloca.s 1 */
        st_21 = {
            'w': function (v)
            {
                loc1 = v;
            },
            'r': function ()
            {
                return loc1;
            }
        };
        /* IL_C8: ldloca.s 0 */
        /* IL_CB: initobj A */
        loc0 = new t0();
        /* IL_D0: ldloca.s 0 */
        st_1F = {
            'w': function (v)
            {
                loc0 = v;
            },
            'r': function ()
            {
                return loc0;
            }
        };
        /* IL_D2: ldc.i4.s 123 */
        st_20 = (123|0);
        /* IL_D4: stfld Int32 x */
        st_1F.r().x = st_20;
        /* IL_D9: ldloc.0  */
        st_22 = loc0;
        /* IL_DA: stfld A a */
        st_21.r().a = st_22;
        /* IL_DF: ldloca.s 1 */
        /* IL_E1: ldnull  */
        /* IL_E2: stfld C c */
        loc1.c = null;
        /* IL_E7: ldloc.1  */
        /* IL_E8: call Void TestB(B) */
        asm1.x6000004(CILJS.clone_value(loc1));
        /* IL_ED: nop  */
        /* IL_EE: ldloca.s 1 */
        /* IL_F1: initobj B */
        loc1 = new t1();
        /* IL_F6: ldloca.s 1 */
        st_2A = {
            'w': function (v)
            {
                loc1 = v;
            },
            'r': function ()
            {
                return loc1;
            }
        };
        /* IL_F8: ldloca.s 0 */
        /* IL_FB: initobj A */
        loc0 = new t0();
        /* IL_100: ldloca.s 0 */
        st_28 = {
            'w': function (v)
            {
                loc0 = v;
            },
            'r': function ()
            {
                return loc0;
            }
        };
        /* IL_102: ldc.i4.s 123 */
        st_29 = (123|0);
        /* IL_104: stfld Int32 x */
        st_28.r().x = st_29;
        /* IL_109: ldloc.0  */
        st_2B = loc0;
        /* IL_10A: stfld A a */
        st_2A.r().a = st_2B;
        /* IL_10F: ldloca.s 1 */
        /* IL_111: ldsfld C c1 */
        /* IL_116: stfld C c */
        loc1.c = t3.c1;
        /* IL_11B: ldloc.1  */
        /* IL_11C: call Void TestB(B) */
        asm1.x6000004(CILJS.clone_value(loc1));
        /* IL_121: nop  */
        /* IL_122: ldloca.s 1 */
        /* IL_125: initobj B */
        loc1 = new t1();
        /* IL_12A: ldloca.s 1 */
        st_33 = {
            'w': function (v)
            {
                loc1 = v;
            },
            'r': function ()
            {
                return loc1;
            }
        };
        /* IL_12C: ldloca.s 0 */
        /* IL_12F: initobj A */
        loc0 = new t0();
        /* IL_134: ldloca.s 0 */
        st_31 = {
            'w': function (v)
            {
                loc0 = v;
            },
            'r': function ()
            {
                return loc0;
            }
        };
        /* IL_136: ldc.i4.s 123 */
        st_32 = (123|0);
        /* IL_138: stfld Int32 x */
        st_31.r().x = st_32;
        /* IL_13D: ldloc.0  */
        st_34 = loc0;
        /* IL_13E: stfld A a */
        st_33.r().a = st_34;
        /* IL_143: ldloca.s 1 */
        /* IL_145: ldsfld C c2 */
        /* IL_14A: stfld C c */
        loc1.c = t3.c2;
        /* IL_14F: ldloc.1  */
        /* IL_150: call Void TestB(B) */
        asm1.x6000004(CILJS.clone_value(loc1));
        /* IL_155: nop  */
        /* IL_156: ldloca.s 1 */
        /* IL_159: initobj B */
        loc1 = new t1();
        /* IL_15E: ldloca.s 1 */
        st_3C = {
            'w': function (v)
            {
                loc1 = v;
            },
            'r': function ()
            {
                return loc1;
            }
        };
        /* IL_160: ldloca.s 0 */
        /* IL_163: initobj A */
        loc0 = new t0();
        /* IL_168: ldloca.s 0 */
        st_3A = {
            'w': function (v)
            {
                loc0 = v;
            },
            'r': function ()
            {
                return loc0;
            }
        };
        /* IL_16A: ldc.i4.s 123 */
        st_3B = (123|0);
        /* IL_16C: stfld Int32 x */
        st_3A.r().x = st_3B;
        /* IL_171: ldloc.0  */
        st_3D = loc0;
        /* IL_172: stfld A a */
        st_3C.r().a = st_3D;
        /* IL_177: ldloca.s 1 */
        /* IL_179: newobj Void .ctor() */
        /* IL_17E: stfld C c */
        loc1.c = CILJS.newobj(t2,asm1.x6000001,[null]);
        /* IL_183: ldloc.1  */
        /* IL_184: call Void TestB(B) */
        asm1.x6000004(CILJS.clone_value(loc1));
        /* IL_189: nop  */
        /* IL_18A: ldloca.s 1 */
        /* IL_18D: initobj B */
        loc1 = new t1();
        /* IL_192: ldloca.s 1 */
        st_45 = {
            'w': function (v)
            {
                loc1 = v;
            },
            'r': function ()
            {
                return loc1;
            }
        };
        /* IL_194: ldloca.s 0 */
        /* IL_197: initobj A */
        loc0 = new t0();
        /* IL_19C: ldloca.s 0 */
        st_43 = {
            'w': function (v)
            {
                loc0 = v;
            },
            'r': function ()
            {
                return loc0;
            }
        };
        /* IL_19E: ldc.i4.s 22 */
        st_44 = (22|0);
        /* IL_1A0: stfld Int32 x */
        st_43.r().x = st_44;
        /* IL_1A5: ldloc.0  */
        st_46 = loc0;
        /* IL_1A6: stfld A a */
        st_45.r().a = st_46;
        /* IL_1AB: ldloc.1  */
        /* IL_1AC: call Void TestB(B) */
        asm1.x6000004(CILJS.clone_value(loc1));
        /* IL_1B1: nop  */
        /* IL_1B2: ldloca.s 1 */
        /* IL_1B5: initobj B */
        loc1 = new t1();
        /* IL_1BA: ldloca.s 1 */
        st_4C = {
            'w': function (v)
            {
                loc1 = v;
            },
            'r': function ()
            {
                return loc1;
            }
        };
        /* IL_1BC: ldloca.s 0 */
        /* IL_1BF: initobj A */
        loc0 = new t0();
        /* IL_1C4: ldloca.s 0 */
        st_4A = {
            'w': function (v)
            {
                loc0 = v;
            },
            'r': function ()
            {
                return loc0;
            }
        };
        /* IL_1C6: ldc.i4.s 22 */
        st_4B = (22|0);
        /* IL_1C8: stfld Int32 x */
        st_4A.r().x = st_4B;
        /* IL_1CD: ldloc.0  */
        st_4D = loc0;
        /* IL_1CE: stfld A a */
        st_4C.r().a = st_4D;
        /* IL_1D3: ldloca.s 1 */
        /* IL_1D5: ldnull  */
        /* IL_1D6: stfld C c */
        loc1.c = null;
        /* IL_1DB: ldloc.1  */
        /* IL_1DC: call Void TestB(B) */
        asm1.x6000004(CILJS.clone_value(loc1));
        /* IL_1E1: nop  */
        /* IL_1E2: ldloca.s 1 */
        /* IL_1E5: initobj B */
        loc1 = new t1();
        /* IL_1EA: ldloca.s 1 */
        st_55 = {
            'w': function (v)
            {
                loc1 = v;
            },
            'r': function ()
            {
                return loc1;
            }
        };
        /* IL_1EC: ldloca.s 0 */
        /* IL_1EF: initobj A */
        loc0 = new t0();
        /* IL_1F4: ldloca.s 0 */
        st_53 = {
            'w': function (v)
            {
                loc0 = v;
            },
            'r': function ()
            {
                return loc0;
            }
        };
        /* IL_1F6: ldc.i4.s 22 */
        st_54 = (22|0);
        /* IL_1F8: stfld Int32 x */
        st_53.r().x = st_54;
        /* IL_1FD: ldloc.0  */
        st_56 = loc0;
        /* IL_1FE: stfld A a */
        st_55.r().a = st_56;
        /* IL_203: ldloca.s 1 */
        /* IL_205: ldsfld C c1 */
        /* IL_20A: stfld C c */
        loc1.c = t3.c1;
        /* IL_20F: ldloc.1  */
        /* IL_210: call Void TestB(B) */
        asm1.x6000004(CILJS.clone_value(loc1));
        /* IL_215: nop  */
        /* IL_216: ldloca.s 1 */
        /* IL_219: initobj B */
        loc1 = new t1();
        /* IL_21E: ldloca.s 1 */
        st_5E = {
            'w': function (v)
            {
                loc1 = v;
            },
            'r': function ()
            {
                return loc1;
            }
        };
        /* IL_220: ldloca.s 0 */
        /* IL_223: initobj A */
        loc0 = new t0();
        /* IL_228: ldloca.s 0 */
        st_5C = {
            'w': function (v)
            {
                loc0 = v;
            },
            'r': function ()
            {
                return loc0;
            }
        };
        /* IL_22A: ldc.i4.s 22 */
        st_5D = (22|0);
        /* IL_22C: stfld Int32 x */
        st_5C.r().x = st_5D;
        /* IL_231: ldloc.0  */
        st_5F = loc0;
        /* IL_232: stfld A a */
        st_5E.r().a = st_5F;
        /* IL_237: ldloca.s 1 */
        /* IL_239: ldsfld C c2 */
        /* IL_23E: stfld C c */
        loc1.c = t3.c2;
        /* IL_243: ldloc.1  */
        /* IL_244: call Void TestB(B) */
        asm1.x6000004(CILJS.clone_value(loc1));
        /* IL_249: nop  */
        /* IL_24A: ldloca.s 1 */
        /* IL_24D: initobj B */
        loc1 = new t1();
        /* IL_252: ldloca.s 1 */
        st_67 = {
            'w': function (v)
            {
                loc1 = v;
            },
            'r': function ()
            {
                return loc1;
            }
        };
        /* IL_254: ldloca.s 0 */
        /* IL_257: initobj A */
        loc0 = new t0();
        /* IL_25C: ldloca.s 0 */
        st_65 = {
            'w': function (v)
            {
                loc0 = v;
            },
            'r': function ()
            {
                return loc0;
            }
        };
        /* IL_25E: ldc.i4.s 22 */
        st_66 = (22|0);
        /* IL_260: stfld Int32 x */
        st_65.r().x = st_66;
        /* IL_265: ldloc.0  */
        st_68 = loc0;
        /* IL_266: stfld A a */
        st_67.r().a = st_68;
        /* IL_26B: ldloca.s 1 */
        /* IL_26D: newobj Void .ctor() */
        /* IL_272: stfld C c */
        loc1.c = CILJS.newobj(t2,asm1.x6000001,[null]);
        /* IL_277: ldloc.1  */
        /* IL_278: call Void TestB(B) */
        asm1.x6000004(CILJS.clone_value(loc1));
        /* IL_27D: nop  */
        /* IL_27E: ret  */
        return ;
    };
    /* static System.Void Program.TestA(A)*/
    asm.x6000003_init = function (arg0)
    {
        (asm1.A().init)();
        asm.x6000003 = asm.x6000003_;
    };;
    asm.x6000003 = function (arg0)
    {
        asm.x6000003_init(arg0);
        return asm.x6000003_(arg0);
    };;
    asm.x6000003_ = function TestA(arg0)
    {
        var t0;
        var t1;
        var loc1;
        var loc2;
        var loc3;
        var loc0;
        t0 = asm1.A();
        t1 = (asm0)["System.Boolean"]();
        loc1 = new (asm1.A())();
        loc2 = new (asm1.A())();
        loc3 = new (asm1.A())();
        /* IL_00: nop  */
        /* IL_01: ldloca.s 3 */
        /* IL_04: initobj A */
        loc3 = new t0();
        /* IL_09: ldloca.s 3 */
        /* IL_0B: ldc.i4 321 */
        /* IL_10: stfld Int32 x */
        loc3.x = (321|0);
        /* IL_15: ldloc.3  */
        /* IL_16: stloc.0  */
        loc0 = CILJS.clone_value(loc3);
        /* IL_17: ldloca.s 1 */
        /* IL_1A: initobj A */
        loc1 = new t0();
        /* IL_1F: ldloca.s 2 */
        /* IL_22: initobj A */
        loc2 = new t0();
        /* IL_27: ldarga.s 0 */
        /* IL_29: ldloc.0  */
        /* IL_2A: box A */
        /* IL_35: callvirt Boolean Equals(System.Object) */
        /* IL_3A: box System.Boolean */
        /* IL_3F: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((arg0.vtable || t0.prototype.vtable)["asm0.x60000f1"])())({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    },CILJS.make_box(CILJS.clone_value(loc0),t0)),t1));
        /* IL_44: nop  */
        /* IL_45: ldarga.s 0 */
        /* IL_47: ldloc.1  */
        /* IL_48: box A */
        /* IL_53: callvirt Boolean Equals(System.Object) */
        /* IL_58: box System.Boolean */
        /* IL_5D: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((arg0.vtable || t0.prototype.vtable)["asm0.x60000f1"])())({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    },CILJS.make_box(CILJS.clone_value(loc1),t0)),t1));
        /* IL_62: nop  */
        /* IL_63: ldarga.s 0 */
        /* IL_65: ldloc.2  */
        /* IL_66: box A */
        /* IL_71: callvirt Boolean Equals(System.Object) */
        /* IL_76: box System.Boolean */
        /* IL_7B: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((arg0.vtable || t0.prototype.vtable)["asm0.x60000f1"])())({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    },CILJS.make_box(CILJS.clone_value(loc2),t0)),t1));
        /* IL_80: nop  */
        /* IL_81: ldarg.0  */
        /* IL_82: box A */
        /* IL_87: ldloc.0  */
        /* IL_88: box A */
        /* IL_8E: ceq  */
        /* IL_8F: box System.Boolean */
        /* IL_94: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(((CILJS.make_box(CILJS.clone_value(arg0),t0) === CILJS.make_box(CILJS.clone_value(loc0),t0)) ? 1 : 0),t1));
        /* IL_99: nop  */
        /* IL_9A: ldarg.0  */
        /* IL_9B: box A */
        /* IL_A0: ldloc.1  */
        /* IL_A1: box A */
        /* IL_A7: ceq  */
        /* IL_A8: box System.Boolean */
        /* IL_AD: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(((CILJS.make_box(CILJS.clone_value(arg0),t0) === CILJS.make_box(CILJS.clone_value(loc1),t0)) ? 1 : 0),t1));
        /* IL_B2: nop  */
        /* IL_B3: ldarg.0  */
        /* IL_B4: box A */
        /* IL_B9: ldloc.2  */
        /* IL_BA: box A */
        /* IL_C0: ceq  */
        /* IL_C1: box System.Boolean */
        /* IL_C6: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(((CILJS.make_box(CILJS.clone_value(arg0),t0) === CILJS.make_box(CILJS.clone_value(loc2),t0)) ? 1 : 0),t1));
        /* IL_CB: nop  */
        /* IL_CC: ret  */
        return ;
    };
    /* static System.Void Program.TestB(B)*/
    asm.x6000004_init = function (arg0)
    {
        (asm1.B().init)();
        (asm1.A().init)();
        (asm1.Program().init)();
        asm.x6000004 = asm.x6000004_;
    };;
    asm.x6000004 = function (arg0)
    {
        asm.x6000004_init(arg0);
        return asm.x6000004_(arg0);
    };;
    asm.x6000004_ = function TestB(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc1;
        var loc3;
        var loc4;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_0A;
        var st_0B;
        var st_0C;
        var st_0D;
        var loc0;
        var loc2;
        t0 = asm1.B();
        t1 = asm1.A();
        t2 = asm1.Program();
        t3 = (asm0)["System.Boolean"]();
        loc1 = new (asm1.B())();
        loc3 = new (asm1.B())();
        loc4 = new (asm1.A())();
        /* IL_00: nop  */
        /* IL_01: ldloca.s 3 */
        /* IL_04: initobj B */
        loc3 = new t0();
        /* IL_09: ldloca.s 3 */
        st_04 = {
            'w': function (v)
            {
                loc3 = v;
            },
            'r': function ()
            {
                return loc3;
            }
        };
        /* IL_0B: ldloca.s 4 */
        /* IL_0E: initobj A */
        loc4 = new t1();
        /* IL_13: ldloca.s 4 */
        st_02 = {
            'w': function (v)
            {
                loc4 = v;
            },
            'r': function ()
            {
                return loc4;
            }
        };
        /* IL_15: ldc.i4.s 123 */
        st_03 = (123|0);
        /* IL_17: stfld Int32 x */
        st_02.r().x = st_03;
        /* IL_1C: ldloc.s 4 */
        st_05 = loc4;
        /* IL_1E: stfld A a */
        st_04.r().a = st_05;
        /* IL_23: ldloc.3  */
        /* IL_24: stloc.0  */
        loc0 = CILJS.clone_value(loc3);
        /* IL_25: ldloca.s 1 */
        /* IL_28: initobj B */
        loc1 = new t0();
        /* IL_2D: ldloca.s 3 */
        /* IL_30: initobj B */
        loc3 = new t0();
        /* IL_35: ldloca.s 3 */
        st_0C = {
            'w': function (v)
            {
                loc3 = v;
            },
            'r': function ()
            {
                return loc3;
            }
        };
        /* IL_37: ldloca.s 4 */
        /* IL_3A: initobj A */
        loc4 = new t1();
        /* IL_3F: ldloca.s 4 */
        st_0A = {
            'w': function (v)
            {
                loc4 = v;
            },
            'r': function ()
            {
                return loc4;
            }
        };
        /* IL_41: ldc.i4.s 22 */
        st_0B = (22|0);
        /* IL_43: stfld Int32 x */
        st_0A.r().x = st_0B;
        /* IL_48: ldloc.s 4 */
        st_0D = loc4;
        /* IL_4A: stfld A a */
        st_0C.r().a = st_0D;
        /* IL_4F: ldloca.s 3 */
        /* IL_51: ldsfld C c1 */
        /* IL_56: stfld C c */
        loc3.c = t2.c1;
        /* IL_5B: ldloc.3  */
        /* IL_5C: stloc.2  */
        loc2 = CILJS.clone_value(loc3);
        /* IL_5D: ldarga.s 0 */
        /* IL_5F: ldloc.0  */
        /* IL_60: box B */
        /* IL_6B: callvirt Boolean Equals(System.Object) */
        /* IL_70: box System.Boolean */
        /* IL_75: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((arg0.vtable || t0.prototype.vtable)["asm0.x60000f1"])())({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    },CILJS.make_box(CILJS.clone_value(loc0),t0)),t3));
        /* IL_7A: nop  */
        /* IL_7B: ldarga.s 0 */
        /* IL_7D: ldloc.1  */
        /* IL_7E: box B */
        /* IL_89: callvirt Boolean Equals(System.Object) */
        /* IL_8E: box System.Boolean */
        /* IL_93: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((arg0.vtable || t0.prototype.vtable)["asm0.x60000f1"])())({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    },CILJS.make_box(CILJS.clone_value(loc1),t0)),t3));
        /* IL_98: nop  */
        /* IL_99: ldarga.s 0 */
        /* IL_9B: ldloc.2  */
        /* IL_9C: box B */
        /* IL_A7: callvirt Boolean Equals(System.Object) */
        /* IL_AC: box System.Boolean */
        /* IL_B1: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((arg0.vtable || t0.prototype.vtable)["asm0.x60000f1"])())({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    },CILJS.make_box(CILJS.clone_value(loc2),t0)),t3));
        /* IL_B6: nop  */
        /* IL_B7: ldarg.0  */
        /* IL_B8: box B */
        /* IL_BD: ldloc.0  */
        /* IL_BE: box B */
        /* IL_C4: ceq  */
        /* IL_C5: box System.Boolean */
        /* IL_CA: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(((CILJS.make_box(CILJS.clone_value(arg0),t0) === CILJS.make_box(CILJS.clone_value(loc0),t0)) ? 1 : 0),t3));
        /* IL_CF: nop  */
        /* IL_D0: ldarg.0  */
        /* IL_D1: box B */
        /* IL_D6: ldloc.1  */
        /* IL_D7: box B */
        /* IL_DD: ceq  */
        /* IL_DE: box System.Boolean */
        /* IL_E3: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(((CILJS.make_box(CILJS.clone_value(arg0),t0) === CILJS.make_box(CILJS.clone_value(loc1),t0)) ? 1 : 0),t3));
        /* IL_E8: nop  */
        /* IL_E9: ldarg.0  */
        /* IL_EA: box B */
        /* IL_EF: ldloc.2  */
        /* IL_F0: box B */
        /* IL_F6: ceq  */
        /* IL_F7: box System.Boolean */
        /* IL_FC: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box(((CILJS.make_box(CILJS.clone_value(arg0),t0) === CILJS.make_box(CILJS.clone_value(loc2),t0)) ? 1 : 0),t3));
        /* IL_101: nop  */
        /* IL_102: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000005 = function _ctor(arg0)
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
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000002",new (asm1.A())());
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000158");
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function A() { c.init();this.x = 0 }");
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
            CILJS.init_type(this,asm,"B",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000003",new (asm1.B())());
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000158");
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function B() { c.init();this.a = new (asm1.A())();this.c = null }");
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function C() { c.init(); }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this.c1 = null;
            this.c2 = null;
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000002;
})(asm1 || (asm1 = {}));
if (module){
    module.exports = asm1;
}
