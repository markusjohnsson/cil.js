var asm1;(function (asm)
{
    asm.FullName = "ValueTypeEquality.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
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
    /*  C..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000b_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        (asm1.Program().init)();
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function ()
    {
        CILJS.init_base_types();
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        var loc7;
        var loc8;
        var loc9;
        var loc10;
        var loc11;
        var loc12;
        var loc13;
        var loc14;
        var loc15;
        var loc16;
        var loc17;
        var loc18;
        var loc19;
        var loc20;
        var loc21;
        var loc22;
        var loc23;
        var loc24;
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
        var __pos__;
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        t3 = asm1.Program();
        loc0 = new (asm1.A())();
        loc1 = new (asm1.A())();
        loc2 = new (asm1.A())();
        loc3 = new (asm1.B())();
        loc4 = new (asm1.A())();
        loc5 = new (asm1.B())();
        loc6 = new (asm1.A())();
        loc7 = new (asm1.B())();
        loc8 = new (asm1.A())();
        loc9 = new (asm1.B())();
        loc10 = new (asm1.A())();
        loc11 = new (asm1.B())();
        loc12 = new (asm1.A())();
        loc13 = new (asm1.B())();
        loc14 = new (asm1.A())();
        loc15 = new (asm1.B())();
        loc16 = new (asm1.A())();
        loc17 = new (asm1.B())();
        loc18 = new (asm1.A())();
        loc19 = new (asm1.B())();
        loc20 = new (asm1.A())();
        loc21 = new (asm1.B())();
        loc22 = new (asm1.A())();
        loc23 = new (asm1.A())();
        loc24 = new (asm1.B())();
        __pos__ = 0x0;
        /* IL_00: nop  ValueTypeEquality.cs:24:5*/
        /* IL_01: ldloca.s 23 */
        /* IL_04: initobj A */
        loc23 = new t0();
        /* IL_09: ldloc.s 23 */
        /* IL_0B: call Void TestA(A) */
        asm1.x600000c(CILJS.clone_value(loc23));
        /* IL_10: nop  */
        /* IL_11: ldloca.s 0 */
        /* IL_14: initobj A */
        loc0 = new t0();
        /* IL_19: ldloca.s 0 */
        /* IL_1B: ldc.i4.0  */
        /* IL_1C: stfld Int32 x */
        loc0.x = (0|0);
        /* IL_21: ldloc.0  */
        /* IL_22: call Void TestA(A) */
        asm1.x600000c(CILJS.clone_value(loc0));
        /* IL_27: nop  */
        /* IL_28: ldloca.s 1 */
        /* IL_2B: initobj A */
        loc1 = new t0();
        /* IL_30: ldloca.s 1 */
        /* IL_32: ldc.i4.s 123 */
        /* IL_34: stfld Int32 x */
        loc1.x = (123|0);
        /* IL_39: ldloc.1  */
        /* IL_3A: call Void TestA(A) */
        asm1.x600000c(CILJS.clone_value(loc1));
        /* IL_3F: nop  */
        /* IL_40: ldloca.s 2 */
        /* IL_43: initobj A */
        loc2 = new t0();
        /* IL_48: ldloca.s 2 */
        /* IL_4A: ldc.i4 321 */
        /* IL_4F: stfld Int32 x */
        loc2.x = (321|0);
        /* IL_54: ldloc.2  */
        /* IL_55: call Void TestA(A) */
        asm1.x600000c(CILJS.clone_value(loc2));
        /* IL_5A: nop  */
        /* IL_5B: ldloca.s 23 */
        /* IL_5E: initobj A */
        loc23 = new t0();
        /* IL_63: ldloc.s 23 */
        /* IL_65: call Void TestA(A) */
        asm1.x600000c(CILJS.clone_value(loc23));
        /* IL_6A: nop  */
        /* IL_6B: ldloca.s 24 */
        /* IL_6E: initobj B */
        loc24 = new t1();
        /* IL_73: ldloc.s 24 */
        /* IL_75: ldfld A a */
        /* IL_7A: call Void TestA(A) */
        asm1.x600000c(CILJS.clone_value(loc24.a));
        /* IL_7F: nop  */
        /* IL_80: newobj Void .ctor() */
        /* IL_85: stsfld C c1 */
        (t3)["c1"] = CILJS.newobj(t2,asm1.x600000a,[null]);
        /* IL_8A: ldloca.s 24 */
        /* IL_8D: initobj B */
        loc24 = new t1();
        /* IL_92: ldloc.s 24 */
        /* IL_94: call Void TestB(B) */
        asm1.x600000d(CILJS.clone_value(loc24));
        /* IL_99: nop  */
        /* IL_9A: ldloca.s 3 */
        /* IL_9D: initobj B */
        loc3 = new t1();
        /* IL_A2: ldloca.s 3 */
        st_1A = {
            'w': function (v)
            {
                loc3 = v;
            },
            'r': function ()
            {
                return loc3;
            }
        };
        /* IL_A4: ldloca.s 4 */
        /* IL_A7: initobj A */
        loc4 = new t0();
        /* IL_AC: ldloca.s 4 */
        st_18 = {
            'w': function (v)
            {
                loc4 = v;
            },
            'r': function ()
            {
                return loc4;
            }
        };
        /* IL_AE: ldc.i4.s 123 */
        st_19 = (123|0);
        /* IL_B0: stfld Int32 x */
        st_18.r().x = st_19;
        /* IL_B5: ldloc.s 4 */
        st_1B = loc4;
        /* IL_B7: stfld A a */
        st_1A.r().a = st_1B;
        /* IL_BC: ldloc.3  */
        /* IL_BD: call Void TestB(B) */
        asm1.x600000d(CILJS.clone_value(loc3));
        /* IL_C2: nop  */
        /* IL_C3: ldloca.s 5 */
        /* IL_C6: initobj B */
        loc5 = new t1();
        /* IL_CB: ldloca.s 5 */
        st_21 = {
            'w': function (v)
            {
                loc5 = v;
            },
            'r': function ()
            {
                return loc5;
            }
        };
        /* IL_CD: ldloca.s 6 */
        /* IL_D0: initobj A */
        loc6 = new t0();
        /* IL_D5: ldloca.s 6 */
        st_1F = {
            'w': function (v)
            {
                loc6 = v;
            },
            'r': function ()
            {
                return loc6;
            }
        };
        /* IL_D7: ldc.i4.s 123 */
        st_20 = (123|0);
        /* IL_D9: stfld Int32 x */
        st_1F.r().x = st_20;
        /* IL_DE: ldloc.s 6 */
        st_22 = loc6;
        /* IL_E0: stfld A a */
        st_21.r().a = st_22;
        /* IL_E5: ldloca.s 5 */
        /* IL_E7: ldnull  */
        /* IL_E8: stfld C c */
        loc5.c = null;
        /* IL_ED: ldloc.s 5 */
        /* IL_EF: call Void TestB(B) */
        asm1.x600000d(CILJS.clone_value(loc5));
        /* IL_F4: nop  */
        /* IL_F5: ldloca.s 7 */
        /* IL_F8: initobj B */
        loc7 = new t1();
        /* IL_FD: ldloca.s 7 */
        st_2A = {
            'w': function (v)
            {
                loc7 = v;
            },
            'r': function ()
            {
                return loc7;
            }
        };
        /* IL_FF: ldloca.s 8 */
        /* IL_102: initobj A */
        loc8 = new t0();
        /* IL_107: ldloca.s 8 */
        st_28 = {
            'w': function (v)
            {
                loc8 = v;
            },
            'r': function ()
            {
                return loc8;
            }
        };
        /* IL_109: ldc.i4.s 123 */
        st_29 = (123|0);
        /* IL_10B: stfld Int32 x */
        st_28.r().x = st_29;
        /* IL_110: ldloc.s 8 */
        st_2B = loc8;
        /* IL_112: stfld A a */
        st_2A.r().a = st_2B;
        /* IL_117: ldloca.s 7 */
        /* IL_119: ldsfld C c1 */
        /* IL_11E: stfld C c */
        loc7.c = t3.c1;
        /* IL_123: ldloc.s 7 */
        /* IL_125: call Void TestB(B) */
        asm1.x600000d(CILJS.clone_value(loc7));
        /* IL_12A: nop  */
        /* IL_12B: ldloca.s 9 */
        /* IL_12E: initobj B */
        loc9 = new t1();
        /* IL_133: ldloca.s 9 */
        st_33 = {
            'w': function (v)
            {
                loc9 = v;
            },
            'r': function ()
            {
                return loc9;
            }
        };
        /* IL_135: ldloca.s 10 */
        /* IL_138: initobj A */
        loc10 = new t0();
        /* IL_13D: ldloca.s 10 */
        st_31 = {
            'w': function (v)
            {
                loc10 = v;
            },
            'r': function ()
            {
                return loc10;
            }
        };
        /* IL_13F: ldc.i4.s 123 */
        st_32 = (123|0);
        /* IL_141: stfld Int32 x */
        st_31.r().x = st_32;
        /* IL_146: ldloc.s 10 */
        st_34 = loc10;
        /* IL_148: stfld A a */
        st_33.r().a = st_34;
        /* IL_14D: ldloca.s 9 */
        /* IL_14F: ldsfld C c2 */
        /* IL_154: stfld C c */
        loc9.c = t3.c2;
        /* IL_159: ldloc.s 9 */
        /* IL_15B: call Void TestB(B) */
        asm1.x600000d(CILJS.clone_value(loc9));
        /* IL_160: nop  */
        /* IL_161: ldloca.s 11 */
        /* IL_164: initobj B */
        loc11 = new t1();
        /* IL_169: ldloca.s 11 */
        st_3C = {
            'w': function (v)
            {
                loc11 = v;
            },
            'r': function ()
            {
                return loc11;
            }
        };
        /* IL_16B: ldloca.s 12 */
        /* IL_16E: initobj A */
        loc12 = new t0();
        /* IL_173: ldloca.s 12 */
        st_3A = {
            'w': function (v)
            {
                loc12 = v;
            },
            'r': function ()
            {
                return loc12;
            }
        };
        /* IL_175: ldc.i4.s 123 */
        st_3B = (123|0);
        /* IL_177: stfld Int32 x */
        st_3A.r().x = st_3B;
        /* IL_17C: ldloc.s 12 */
        st_3D = loc12;
        /* IL_17E: stfld A a */
        st_3C.r().a = st_3D;
        /* IL_183: ldloca.s 11 */
        /* IL_185: newobj Void .ctor() */
        /* IL_18A: stfld C c */
        loc11.c = CILJS.newobj(t2,asm1.x600000a,[null]);
        /* IL_18F: ldloc.s 11 */
        /* IL_191: call Void TestB(B) */
        asm1.x600000d(CILJS.clone_value(loc11));
        /* IL_196: nop  */
        /* IL_197: ldloca.s 13 */
        /* IL_19A: initobj B */
        loc13 = new t1();
        /* IL_19F: ldloca.s 13 */
        st_45 = {
            'w': function (v)
            {
                loc13 = v;
            },
            'r': function ()
            {
                return loc13;
            }
        };
        /* IL_1A1: ldloca.s 14 */
        /* IL_1A4: initobj A */
        loc14 = new t0();
        /* IL_1A9: ldloca.s 14 */
        st_43 = {
            'w': function (v)
            {
                loc14 = v;
            },
            'r': function ()
            {
                return loc14;
            }
        };
        /* IL_1AB: ldc.i4.s 22 */
        st_44 = (22|0);
        /* IL_1AD: stfld Int32 x */
        st_43.r().x = st_44;
        /* IL_1B2: ldloc.s 14 */
        st_46 = loc14;
        /* IL_1B4: stfld A a */
        st_45.r().a = st_46;
        /* IL_1B9: ldloc.s 13 */
        /* IL_1BB: call Void TestB(B) */
        asm1.x600000d(CILJS.clone_value(loc13));
        /* IL_1C0: nop  */
        /* IL_1C1: ldloca.s 15 */
        /* IL_1C4: initobj B */
        loc15 = new t1();
        /* IL_1C9: ldloca.s 15 */
        st_4C = {
            'w': function (v)
            {
                loc15 = v;
            },
            'r': function ()
            {
                return loc15;
            }
        };
        /* IL_1CB: ldloca.s 16 */
        /* IL_1CE: initobj A */
        loc16 = new t0();
        /* IL_1D3: ldloca.s 16 */
        st_4A = {
            'w': function (v)
            {
                loc16 = v;
            },
            'r': function ()
            {
                return loc16;
            }
        };
        /* IL_1D5: ldc.i4.s 22 */
        st_4B = (22|0);
        /* IL_1D7: stfld Int32 x */
        st_4A.r().x = st_4B;
        /* IL_1DC: ldloc.s 16 */
        st_4D = loc16;
        /* IL_1DE: stfld A a */
        st_4C.r().a = st_4D;
        /* IL_1E3: ldloca.s 15 */
        /* IL_1E5: ldnull  */
        /* IL_1E6: stfld C c */
        loc15.c = null;
        /* IL_1EB: ldloc.s 15 */
        /* IL_1ED: call Void TestB(B) */
        asm1.x600000d(CILJS.clone_value(loc15));
        /* IL_1F2: nop  */
        /* IL_1F3: ldloca.s 17 */
        /* IL_1F6: initobj B */
        loc17 = new t1();
        /* IL_1FB: ldloca.s 17 */
        st_55 = {
            'w': function (v)
            {
                loc17 = v;
            },
            'r': function ()
            {
                return loc17;
            }
        };
        /* IL_1FD: ldloca.s 18 */
        /* IL_200: initobj A */
        loc18 = new t0();
        /* IL_205: ldloca.s 18 */
        st_53 = {
            'w': function (v)
            {
                loc18 = v;
            },
            'r': function ()
            {
                return loc18;
            }
        };
        /* IL_207: ldc.i4.s 22 */
        st_54 = (22|0);
        /* IL_209: stfld Int32 x */
        st_53.r().x = st_54;
        /* IL_20E: ldloc.s 18 */
        st_56 = loc18;
        /* IL_210: stfld A a */
        st_55.r().a = st_56;
        /* IL_215: ldloca.s 17 */
        /* IL_217: ldsfld C c1 */
        /* IL_21C: stfld C c */
        loc17.c = t3.c1;
        /* IL_221: ldloc.s 17 */
        /* IL_223: call Void TestB(B) */
        asm1.x600000d(CILJS.clone_value(loc17));
        /* IL_228: nop  */
        /* IL_229: ldloca.s 19 */
        /* IL_22C: initobj B */
        loc19 = new t1();
        /* IL_231: ldloca.s 19 */
        st_5E = {
            'w': function (v)
            {
                loc19 = v;
            },
            'r': function ()
            {
                return loc19;
            }
        };
        /* IL_233: ldloca.s 20 */
        /* IL_236: initobj A */
        loc20 = new t0();
        /* IL_23B: ldloca.s 20 */
        st_5C = {
            'w': function (v)
            {
                loc20 = v;
            },
            'r': function ()
            {
                return loc20;
            }
        };
        /* IL_23D: ldc.i4.s 22 */
        st_5D = (22|0);
        /* IL_23F: stfld Int32 x */
        st_5C.r().x = st_5D;
        /* IL_244: ldloc.s 20 */
        st_5F = loc20;
        /* IL_246: stfld A a */
        st_5E.r().a = st_5F;
        /* IL_24B: ldloca.s 19 */
        /* IL_24D: ldsfld C c2 */
        /* IL_252: stfld C c */
        loc19.c = t3.c2;
        /* IL_257: ldloc.s 19 */
        /* IL_259: call Void TestB(B) */
        asm1.x600000d(CILJS.clone_value(loc19));
        /* IL_25E: nop  */
        /* IL_25F: ldloca.s 21 */
        /* IL_262: initobj B */
        loc21 = new t1();
        /* IL_267: ldloca.s 21 */
        st_67 = {
            'w': function (v)
            {
                loc21 = v;
            },
            'r': function ()
            {
                return loc21;
            }
        };
        /* IL_269: ldloca.s 22 */
        /* IL_26C: initobj A */
        loc22 = new t0();
        /* IL_271: ldloca.s 22 */
        st_65 = {
            'w': function (v)
            {
                loc22 = v;
            },
            'r': function ()
            {
                return loc22;
            }
        };
        /* IL_273: ldc.i4.s 22 */
        st_66 = (22|0);
        /* IL_275: stfld Int32 x */
        st_65.r().x = st_66;
        /* IL_27A: ldloc.s 22 */
        st_68 = loc22;
        /* IL_27C: stfld A a */
        st_67.r().a = st_68;
        /* IL_281: ldloca.s 21 */
        /* IL_283: newobj Void .ctor() */
        /* IL_288: stfld C c */
        loc21.c = CILJS.newobj(t2,asm1.x600000a,[null]);
        /* IL_28D: ldloc.s 21 */
        /* IL_28F: call Void TestB(B) */
        asm1.x600000d(CILJS.clone_value(loc21));
        /* IL_294: nop  */
        /* IL_295: ret  ValueTypeEquality.cs:44:5*/
        return ;
    };
    /* static System.Void Program.TestA(A)*/
    asm.x600000c_init = function ()
    {
        (asm1.A().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function (arg0)
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function TestA(arg0)
    {
        var t0;
        var t1;
        var loc1;
        var loc2;
        var loc3;
        var __pos__;
        var loc0;
        t0 = asm1.A();
        t1 = (asm0)["System.Boolean"]();
        loc1 = new (asm1.A())();
        loc2 = new (asm1.A())();
        loc3 = new (asm1.A())();
        __pos__ = 0x0;
        /* IL_00: nop  ValueTypeEquality.cs:47:5*/
        /* IL_01: ldloca.s 3 */
        /* IL_04: initobj A */
        loc3 = new t0();
        /* IL_09: ldloca.s 3 */
        /* IL_0B: ldc.i4 321 */
        /* IL_10: stfld Int32 x */
        loc3.x = (321|0);
        /* IL_15: ldloc.3  */
        /* IL_16: stloc.0  */
        loc0 = loc3;
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
        /* IL_3F: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((arg0.vtable || t0.prototype.vtable)["asm0.x6000008"])())({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    },{
                        'boxed': CILJS.clone_value(loc0),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    }),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_44: nop  */
        /* IL_45: ldarga.s 0 */
        /* IL_47: ldloc.1  */
        /* IL_48: box A */
        /* IL_53: callvirt Boolean Equals(System.Object) */
        /* IL_58: box System.Boolean */
        /* IL_5D: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((arg0.vtable || t0.prototype.vtable)["asm0.x6000008"])())({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    },{
                        'boxed': CILJS.clone_value(loc1),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    }),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_62: nop  */
        /* IL_63: ldarga.s 0 */
        /* IL_65: ldloc.2  */
        /* IL_66: box A */
        /* IL_71: callvirt Boolean Equals(System.Object) */
        /* IL_76: box System.Boolean */
        /* IL_7B: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((arg0.vtable || t0.prototype.vtable)["asm0.x6000008"])())({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    },{
                        'boxed': CILJS.clone_value(loc2),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    }),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_80: nop  */
        /* IL_81: ldarg.0  */
        /* IL_82: box A */
        /* IL_87: ldloc.0  */
        /* IL_88: box A */
        /* IL_8D: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_92: box System.Boolean */
        /* IL_97: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': CILJS.clone_value(arg0),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    },{
                        'boxed': CILJS.clone_value(loc0),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    }),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_9C: nop  */
        /* IL_9D: ldarg.0  */
        /* IL_9E: box A */
        /* IL_A3: ldloc.1  */
        /* IL_A4: box A */
        /* IL_A9: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_AE: box System.Boolean */
        /* IL_B3: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': CILJS.clone_value(arg0),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    },{
                        'boxed': CILJS.clone_value(loc1),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    }),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_B8: nop  */
        /* IL_B9: ldarg.0  */
        /* IL_BA: box A */
        /* IL_BF: ldloc.2  */
        /* IL_C0: box A */
        /* IL_C5: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_CA: box System.Boolean */
        /* IL_CF: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': CILJS.clone_value(arg0),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    },{
                        'boxed': CILJS.clone_value(loc2),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    }),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_D4: nop  */
        /* IL_D5: ret  ValueTypeEquality.cs:57:5*/
        return ;
    };
    /* static System.Void Program.TestB(B)*/
    asm.x600000d_init = function ()
    {
        (asm1.B().init)();
        (asm1.A().init)();
        (asm1.Program().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0)
    {
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function TestB(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc1;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_0A;
        var st_0B;
        var st_0C;
        var st_0D;
        var __pos__;
        var loc0;
        var loc2;
        t0 = asm1.B();
        t1 = asm1.A();
        t2 = asm1.Program();
        t3 = (asm0)["System.Boolean"]();
        loc1 = new (asm1.B())();
        loc3 = new (asm1.B())();
        loc4 = new (asm1.A())();
        loc5 = new (asm1.B())();
        loc6 = new (asm1.A())();
        __pos__ = 0x0;
        /* IL_00: nop  ValueTypeEquality.cs:60:5*/
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
        loc0 = loc3;
        /* IL_25: ldloca.s 1 */
        /* IL_28: initobj B */
        loc1 = new t0();
        /* IL_2D: ldloca.s 5 */
        /* IL_30: initobj B */
        loc5 = new t0();
        /* IL_35: ldloca.s 5 */
        st_0C = {
            'w': function (v)
            {
                loc5 = v;
            },
            'r': function ()
            {
                return loc5;
            }
        };
        /* IL_37: ldloca.s 6 */
        /* IL_3A: initobj A */
        loc6 = new t1();
        /* IL_3F: ldloca.s 6 */
        st_0A = {
            'w': function (v)
            {
                loc6 = v;
            },
            'r': function ()
            {
                return loc6;
            }
        };
        /* IL_41: ldc.i4.s 22 */
        st_0B = (22|0);
        /* IL_43: stfld Int32 x */
        st_0A.r().x = st_0B;
        /* IL_48: ldloc.s 6 */
        st_0D = loc6;
        /* IL_4A: stfld A a */
        st_0C.r().a = st_0D;
        /* IL_4F: ldloca.s 5 */
        /* IL_51: ldsfld C c1 */
        /* IL_56: stfld C c */
        loc5.c = t2.c1;
        /* IL_5B: ldloc.s 5 */
        /* IL_5D: stloc.2  */
        loc2 = loc5;
        /* IL_5E: ldarga.s 0 */
        /* IL_60: ldloc.0  */
        /* IL_61: box B */
        /* IL_6C: callvirt Boolean Equals(System.Object) */
        /* IL_71: box System.Boolean */
        /* IL_76: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((arg0.vtable || t0.prototype.vtable)["asm0.x6000008"])())({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    },{
                        'boxed': CILJS.clone_value(loc0),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    }),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_7B: nop  */
        /* IL_7C: ldarga.s 0 */
        /* IL_7E: ldloc.1  */
        /* IL_7F: box B */
        /* IL_8A: callvirt Boolean Equals(System.Object) */
        /* IL_8F: box System.Boolean */
        /* IL_94: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((arg0.vtable || t0.prototype.vtable)["asm0.x6000008"])())({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    },{
                        'boxed': CILJS.clone_value(loc1),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    }),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_99: nop  */
        /* IL_9A: ldarga.s 0 */
        /* IL_9C: ldloc.2  */
        /* IL_9D: box B */
        /* IL_A8: callvirt Boolean Equals(System.Object) */
        /* IL_AD: box System.Boolean */
        /* IL_B2: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((arg0.vtable || t0.prototype.vtable)["asm0.x6000008"])())({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    },{
                        'boxed': CILJS.clone_value(loc2),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    }),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_B7: nop  */
        /* IL_B8: ldarg.0  */
        /* IL_B9: box B */
        /* IL_BE: ldloc.0  */
        /* IL_BF: box B */
        /* IL_C4: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_C9: box System.Boolean */
        /* IL_CE: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': CILJS.clone_value(arg0),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    },{
                        'boxed': CILJS.clone_value(loc0),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    }),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_D3: nop  */
        /* IL_D4: ldarg.0  */
        /* IL_D5: box B */
        /* IL_DA: ldloc.1  */
        /* IL_DB: box B */
        /* IL_E0: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_E5: box System.Boolean */
        /* IL_EA: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': CILJS.clone_value(arg0),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    },{
                        'boxed': CILJS.clone_value(loc1),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    }),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_EF: nop  */
        /* IL_F0: ldarg.0  */
        /* IL_F1: box B */
        /* IL_F6: ldloc.2  */
        /* IL_F7: box B */
        /* IL_FC: call Boolean ReferenceEquals(System.Object, System.Object) */
        /* IL_101: box System.Boolean */
        /* IL_106: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': asm0.x6000007({
                        'boxed': CILJS.clone_value(arg0),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    },{
                        'boxed': CILJS.clone_value(loc2),
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    }),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_10B: nop  */
        /* IL_10C: ret  ValueTypeEquality.cs:71:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.TestLog = CILJS.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
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
            CILJS.init_type(this,asm,"A",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.x = 0;
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
            CILJS.init_type(this,asm,"B",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.a = new (asm1.A())();
            this.prototype.c = null;
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.c1 = null;
            this.c2 = null;
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000b;
})(asm1 || (asm1 = {}));
