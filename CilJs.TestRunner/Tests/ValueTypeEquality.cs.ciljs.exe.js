var asm2; (function (asm)
{
    asm.FullName = "ValueTypeEquality.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  C..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000002_init = function ()
    {
        (asm2.A().init)();
        (asm2.B().init)();
        (asm2.C().init)();
        (asm2.Program().init)();
        asm.x6000002 = asm.x6000002_;
    };;
    asm.x6000002 = function ()
    {
        asm.x6000002_init.apply(this,arguments);
        return asm.x6000002_.apply(this,arguments);
    };;
    asm.x6000002_ = function Main()
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
        var loc25;
        var loc26;
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
        t0 = asm2.A();
        t1 = asm2.B();
        t2 = asm2.C();
        t3 = asm2.Program();
        loc0 = new (asm2.A())();
        loc1 = new (asm2.A())();
        loc2 = new (asm2.A())();
        loc3 = new (asm2.B())();
        loc4 = new (asm2.A())();
        loc5 = new (asm2.B())();
        loc6 = new (asm2.A())();
        loc7 = new (asm2.B())();
        loc8 = new (asm2.A())();
        loc9 = new (asm2.B())();
        loc10 = new (asm2.A())();
        loc11 = new (asm2.B())();
        loc12 = new (asm2.A())();
        loc13 = new (asm2.B())();
        loc14 = new (asm2.A())();
        loc15 = new (asm2.B())();
        loc16 = new (asm2.A())();
        loc17 = new (asm2.B())();
        loc18 = new (asm2.A())();
        loc19 = new (asm2.B())();
        loc20 = new (asm2.A())();
        loc21 = new (asm2.B())();
        loc22 = new (asm2.A())();
        loc23 = new (asm2.A())();
        loc24 = new (asm2.A())();
        loc25 = new (asm2.B())();
        loc26 = new (asm2.B())();
        /* IL_00: ldloca.s 23*/
        /* IL_03: initobj A*/
        loc23 = new t0();
        /* IL_08: ldloc.s 23*/
        /* IL_0A: call Void TestA(A)*/
        asm2.x6000003(CILJS.clone_value(loc23));
        /* IL_0F: ldloca.s 0*/
        /* IL_12: initobj A*/
        loc0 = new t0();
        /* IL_17: ldloca.s 0*/
        /* IL_19: ldc.i4.0 */
        /* IL_1A: stfld Int32 x*/
        loc0.x = (0|0);
        /* IL_1F: ldloc.0 */
        /* IL_20: call Void TestA(A)*/
        asm2.x6000003(CILJS.clone_value(loc0));
        /* IL_25: ldloca.s 1*/
        /* IL_28: initobj A*/
        loc1 = new t0();
        /* IL_2D: ldloca.s 1*/
        /* IL_2F: ldc.i4.s 123*/
        /* IL_31: stfld Int32 x*/
        loc1.x = (123|0);
        /* IL_36: ldloc.1 */
        /* IL_37: call Void TestA(A)*/
        asm2.x6000003(CILJS.clone_value(loc1));
        /* IL_3C: ldloca.s 2*/
        /* IL_3F: initobj A*/
        loc2 = new t0();
        /* IL_44: ldloca.s 2*/
        /* IL_46: ldc.i4 321*/
        /* IL_4B: stfld Int32 x*/
        loc2.x = (321|0);
        /* IL_50: ldloc.2 */
        /* IL_51: call Void TestA(A)*/
        asm2.x6000003(CILJS.clone_value(loc2));
        /* IL_56: ldloca.s 24*/
        /* IL_59: initobj A*/
        loc24 = new t0();
        /* IL_5E: ldloc.s 24*/
        /* IL_60: call Void TestA(A)*/
        asm2.x6000003(CILJS.clone_value(loc24));
        /* IL_65: ldloca.s 25*/
        /* IL_68: initobj B*/
        loc25 = new t1();
        /* IL_6D: ldloc.s 25*/
        /* IL_6F: ldfld A a*/
        /* IL_74: call Void TestA(A)*/
        asm2.x6000003(CILJS.clone_value(loc25.a));
        /* IL_79: newobj Void .ctor()*/
        /* IL_7E: stsfld C c1*/
        (t3)["c1"] = CILJS.newobj(t2,asm2.x6000001,[null]);
        /* IL_83: ldloca.s 26*/
        /* IL_86: initobj B*/
        loc26 = new t1();
        /* IL_8B: ldloc.s 26*/
        /* IL_8D: call Void TestB(B)*/
        asm2.x6000004(CILJS.clone_value(loc26));
        /* IL_92: ldloca.s 3*/
        /* IL_95: initobj B*/
        loc3 = new t1();
        /* IL_9A: ldloca.s 3*/
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
        /* IL_9C: ldloca.s 4*/
        /* IL_9F: initobj A*/
        loc4 = new t0();
        /* IL_A4: ldloca.s 4*/
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
        /* IL_A6: ldc.i4.s 123*/
        st_19 = (123|0);
        /* IL_A8: stfld Int32 x*/
        st_18.r().x = st_19;
        /* IL_AD: ldloc.s 4*/
        st_1B = loc4;
        /* IL_AF: stfld A a*/
        st_1A.r().a = st_1B;
        /* IL_B4: ldloc.3 */
        /* IL_B5: call Void TestB(B)*/
        asm2.x6000004(CILJS.clone_value(loc3));
        /* IL_BA: ldloca.s 5*/
        /* IL_BD: initobj B*/
        loc5 = new t1();
        /* IL_C2: ldloca.s 5*/
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
        /* IL_C4: ldloca.s 6*/
        /* IL_C7: initobj A*/
        loc6 = new t0();
        /* IL_CC: ldloca.s 6*/
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
        /* IL_CE: ldc.i4.s 123*/
        st_20 = (123|0);
        /* IL_D0: stfld Int32 x*/
        st_1F.r().x = st_20;
        /* IL_D5: ldloc.s 6*/
        st_22 = loc6;
        /* IL_D7: stfld A a*/
        st_21.r().a = st_22;
        /* IL_DC: ldloca.s 5*/
        /* IL_DE: ldnull */
        /* IL_DF: stfld C c*/
        loc5.c = null;
        /* IL_E4: ldloc.s 5*/
        /* IL_E6: call Void TestB(B)*/
        asm2.x6000004(CILJS.clone_value(loc5));
        /* IL_EB: ldloca.s 7*/
        /* IL_EE: initobj B*/
        loc7 = new t1();
        /* IL_F3: ldloca.s 7*/
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
        /* IL_F5: ldloca.s 8*/
        /* IL_F8: initobj A*/
        loc8 = new t0();
        /* IL_FD: ldloca.s 8*/
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
        /* IL_FF: ldc.i4.s 123*/
        st_29 = (123|0);
        /* IL_101: stfld Int32 x*/
        st_28.r().x = st_29;
        /* IL_106: ldloc.s 8*/
        st_2B = loc8;
        /* IL_108: stfld A a*/
        st_2A.r().a = st_2B;
        /* IL_10D: ldloca.s 7*/
        /* IL_10F: ldsfld C c1*/
        /* IL_114: stfld C c*/
        loc7.c = t3.c1;
        /* IL_119: ldloc.s 7*/
        /* IL_11B: call Void TestB(B)*/
        asm2.x6000004(CILJS.clone_value(loc7));
        /* IL_120: ldloca.s 9*/
        /* IL_123: initobj B*/
        loc9 = new t1();
        /* IL_128: ldloca.s 9*/
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
        /* IL_12A: ldloca.s 10*/
        /* IL_12D: initobj A*/
        loc10 = new t0();
        /* IL_132: ldloca.s 10*/
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
        /* IL_134: ldc.i4.s 123*/
        st_32 = (123|0);
        /* IL_136: stfld Int32 x*/
        st_31.r().x = st_32;
        /* IL_13B: ldloc.s 10*/
        st_34 = loc10;
        /* IL_13D: stfld A a*/
        st_33.r().a = st_34;
        /* IL_142: ldloca.s 9*/
        /* IL_144: ldsfld C c2*/
        /* IL_149: stfld C c*/
        loc9.c = t3.c2;
        /* IL_14E: ldloc.s 9*/
        /* IL_150: call Void TestB(B)*/
        asm2.x6000004(CILJS.clone_value(loc9));
        /* IL_155: ldloca.s 11*/
        /* IL_158: initobj B*/
        loc11 = new t1();
        /* IL_15D: ldloca.s 11*/
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
        /* IL_15F: ldloca.s 12*/
        /* IL_162: initobj A*/
        loc12 = new t0();
        /* IL_167: ldloca.s 12*/
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
        /* IL_169: ldc.i4.s 123*/
        st_3B = (123|0);
        /* IL_16B: stfld Int32 x*/
        st_3A.r().x = st_3B;
        /* IL_170: ldloc.s 12*/
        st_3D = loc12;
        /* IL_172: stfld A a*/
        st_3C.r().a = st_3D;
        /* IL_177: ldloca.s 11*/
        /* IL_179: newobj Void .ctor()*/
        /* IL_17E: stfld C c*/
        loc11.c = CILJS.newobj(t2,asm2.x6000001,[null]);
        /* IL_183: ldloc.s 11*/
        /* IL_185: call Void TestB(B)*/
        asm2.x6000004(CILJS.clone_value(loc11));
        /* IL_18A: ldloca.s 13*/
        /* IL_18D: initobj B*/
        loc13 = new t1();
        /* IL_192: ldloca.s 13*/
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
        /* IL_194: ldloca.s 14*/
        /* IL_197: initobj A*/
        loc14 = new t0();
        /* IL_19C: ldloca.s 14*/
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
        /* IL_19E: ldc.i4.s 22*/
        st_44 = (22|0);
        /* IL_1A0: stfld Int32 x*/
        st_43.r().x = st_44;
        /* IL_1A5: ldloc.s 14*/
        st_46 = loc14;
        /* IL_1A7: stfld A a*/
        st_45.r().a = st_46;
        /* IL_1AC: ldloc.s 13*/
        /* IL_1AE: call Void TestB(B)*/
        asm2.x6000004(CILJS.clone_value(loc13));
        /* IL_1B3: ldloca.s 15*/
        /* IL_1B6: initobj B*/
        loc15 = new t1();
        /* IL_1BB: ldloca.s 15*/
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
        /* IL_1BD: ldloca.s 16*/
        /* IL_1C0: initobj A*/
        loc16 = new t0();
        /* IL_1C5: ldloca.s 16*/
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
        /* IL_1C7: ldc.i4.s 22*/
        st_4B = (22|0);
        /* IL_1C9: stfld Int32 x*/
        st_4A.r().x = st_4B;
        /* IL_1CE: ldloc.s 16*/
        st_4D = loc16;
        /* IL_1D0: stfld A a*/
        st_4C.r().a = st_4D;
        /* IL_1D5: ldloca.s 15*/
        /* IL_1D7: ldnull */
        /* IL_1D8: stfld C c*/
        loc15.c = null;
        /* IL_1DD: ldloc.s 15*/
        /* IL_1DF: call Void TestB(B)*/
        asm2.x6000004(CILJS.clone_value(loc15));
        /* IL_1E4: ldloca.s 17*/
        /* IL_1E7: initobj B*/
        loc17 = new t1();
        /* IL_1EC: ldloca.s 17*/
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
        /* IL_1EE: ldloca.s 18*/
        /* IL_1F1: initobj A*/
        loc18 = new t0();
        /* IL_1F6: ldloca.s 18*/
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
        /* IL_1F8: ldc.i4.s 22*/
        st_54 = (22|0);
        /* IL_1FA: stfld Int32 x*/
        st_53.r().x = st_54;
        /* IL_1FF: ldloc.s 18*/
        st_56 = loc18;
        /* IL_201: stfld A a*/
        st_55.r().a = st_56;
        /* IL_206: ldloca.s 17*/
        /* IL_208: ldsfld C c1*/
        /* IL_20D: stfld C c*/
        loc17.c = t3.c1;
        /* IL_212: ldloc.s 17*/
        /* IL_214: call Void TestB(B)*/
        asm2.x6000004(CILJS.clone_value(loc17));
        /* IL_219: ldloca.s 19*/
        /* IL_21C: initobj B*/
        loc19 = new t1();
        /* IL_221: ldloca.s 19*/
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
        /* IL_223: ldloca.s 20*/
        /* IL_226: initobj A*/
        loc20 = new t0();
        /* IL_22B: ldloca.s 20*/
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
        /* IL_22D: ldc.i4.s 22*/
        st_5D = (22|0);
        /* IL_22F: stfld Int32 x*/
        st_5C.r().x = st_5D;
        /* IL_234: ldloc.s 20*/
        st_5F = loc20;
        /* IL_236: stfld A a*/
        st_5E.r().a = st_5F;
        /* IL_23B: ldloca.s 19*/
        /* IL_23D: ldsfld C c2*/
        /* IL_242: stfld C c*/
        loc19.c = t3.c2;
        /* IL_247: ldloc.s 19*/
        /* IL_249: call Void TestB(B)*/
        asm2.x6000004(CILJS.clone_value(loc19));
        /* IL_24E: ldloca.s 21*/
        /* IL_251: initobj B*/
        loc21 = new t1();
        /* IL_256: ldloca.s 21*/
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
        /* IL_258: ldloca.s 22*/
        /* IL_25B: initobj A*/
        loc22 = new t0();
        /* IL_260: ldloca.s 22*/
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
        /* IL_262: ldc.i4.s 22*/
        st_66 = (22|0);
        /* IL_264: stfld Int32 x*/
        st_65.r().x = st_66;
        /* IL_269: ldloc.s 22*/
        st_68 = loc22;
        /* IL_26B: stfld A a*/
        st_67.r().a = st_68;
        /* IL_270: ldloca.s 21*/
        /* IL_272: newobj Void .ctor()*/
        /* IL_277: stfld C c*/
        loc21.c = CILJS.newobj(t2,asm2.x6000001,[null]);
        /* IL_27C: ldloc.s 21*/
        /* IL_27E: call Void TestB(B)*/
        asm2.x6000004(CILJS.clone_value(loc21));
        /* IL_283: ret */
        return ;
    };
    /* static System.Void Program.TestA(A)*/
    asm.x6000003_init = function ()
    {
        (asm2.A().init)();
        asm.x6000003 = asm.x6000003_;
    };;
    asm.x6000003 = function (arg0)
    {
        asm.x6000003_init.apply(this,arguments);
        return asm.x6000003_.apply(this,arguments);
    };;
    asm.x6000003_ = function TestA(arg0)
    {
        var t0;
        var t1;
        var loc1;
        var loc2;
        var loc3;
        var loc0;
        t0 = asm2.A();
        t1 = (asm0)["System.Boolean"]();
        loc1 = new (asm2.A())();
        loc2 = new (asm2.A())();
        loc3 = new (asm2.A())();
        /* IL_00: ldloca.s 3*/
        /* IL_03: initobj A*/
        loc3 = new t0();
        /* IL_08: ldloca.s 3*/
        /* IL_0A: ldc.i4 321*/
        /* IL_0F: stfld Int32 x*/
        loc3.x = (321|0);
        /* IL_14: ldloc.3 */
        /* IL_15: stloc.0 */
        loc0 = loc3;
        /* IL_16: ldloca.s 1*/
        /* IL_19: initobj A*/
        loc1 = new t0();
        /* IL_1E: ldloca.s 2*/
        /* IL_21: initobj A*/
        loc2 = new t0();
        /* IL_26: ldarga.s 0*/
        /* IL_28: ldloc.0 */
        /* IL_29: box A*/
        /* IL_34: callvirt Boolean Equals(System.Object)*/
        /* IL_39: box System.Boolean*/
        /* IL_3E: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((arg0.vtable || t0.prototype.vtable)["asm0.x60000f0"])())({
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
        /* IL_43: ldarga.s 0*/
        /* IL_45: ldloc.1 */
        /* IL_46: box A*/
        /* IL_51: callvirt Boolean Equals(System.Object)*/
        /* IL_56: box System.Boolean*/
        /* IL_5B: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((arg0.vtable || t0.prototype.vtable)["asm0.x60000f0"])())({
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
        /* IL_60: ldarga.s 0*/
        /* IL_62: ldloc.2 */
        /* IL_63: box A*/
        /* IL_6E: callvirt Boolean Equals(System.Object)*/
        /* IL_73: box System.Boolean*/
        /* IL_78: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((arg0.vtable || t0.prototype.vtable)["asm0.x60000f0"])())({
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
        /* IL_7D: ldarg.0 */
        /* IL_7E: box A*/
        /* IL_83: ldloc.0 */
        /* IL_84: box A*/
        /* IL_89: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_8E: box System.Boolean*/
        /* IL_93: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x60000ef({
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
        /* IL_98: ldarg.0 */
        /* IL_99: box A*/
        /* IL_9E: ldloc.1 */
        /* IL_9F: box A*/
        /* IL_A4: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_A9: box System.Boolean*/
        /* IL_AE: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x60000ef({
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
        /* IL_B3: ldarg.0 */
        /* IL_B4: box A*/
        /* IL_B9: ldloc.2 */
        /* IL_BA: box A*/
        /* IL_BF: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_C4: box System.Boolean*/
        /* IL_C9: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x60000ef({
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
        /* IL_CE: ret */
        return ;
    };
    /* static System.Void Program.TestB(B)*/
    asm.x6000004_init = function ()
    {
        (asm2.B().init)();
        (asm2.A().init)();
        (asm2.Program().init)();
        asm.x6000004 = asm.x6000004_;
    };;
    asm.x6000004 = function (arg0)
    {
        asm.x6000004_init.apply(this,arguments);
        return asm.x6000004_.apply(this,arguments);
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
        var loc0;
        var loc2;
        t0 = asm2.B();
        t1 = asm2.A();
        t2 = asm2.Program();
        t3 = (asm0)["System.Boolean"]();
        loc1 = new (asm2.B())();
        loc3 = new (asm2.B())();
        loc4 = new (asm2.A())();
        loc5 = new (asm2.B())();
        loc6 = new (asm2.A())();
        /* IL_00: ldloca.s 3*/
        /* IL_03: initobj B*/
        loc3 = new t0();
        /* IL_08: ldloca.s 3*/
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
        /* IL_0A: ldloca.s 4*/
        /* IL_0D: initobj A*/
        loc4 = new t1();
        /* IL_12: ldloca.s 4*/
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
        /* IL_14: ldc.i4.s 123*/
        st_03 = (123|0);
        /* IL_16: stfld Int32 x*/
        st_02.r().x = st_03;
        /* IL_1B: ldloc.s 4*/
        st_05 = loc4;
        /* IL_1D: stfld A a*/
        st_04.r().a = st_05;
        /* IL_22: ldloc.3 */
        /* IL_23: stloc.0 */
        loc0 = loc3;
        /* IL_24: ldloca.s 1*/
        /* IL_27: initobj B*/
        loc1 = new t0();
        /* IL_2C: ldloca.s 5*/
        /* IL_2F: initobj B*/
        loc5 = new t0();
        /* IL_34: ldloca.s 5*/
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
        /* IL_36: ldloca.s 6*/
        /* IL_39: initobj A*/
        loc6 = new t1();
        /* IL_3E: ldloca.s 6*/
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
        /* IL_40: ldc.i4.s 22*/
        st_0B = (22|0);
        /* IL_42: stfld Int32 x*/
        st_0A.r().x = st_0B;
        /* IL_47: ldloc.s 6*/
        st_0D = loc6;
        /* IL_49: stfld A a*/
        st_0C.r().a = st_0D;
        /* IL_4E: ldloca.s 5*/
        /* IL_50: ldsfld C c1*/
        /* IL_55: stfld C c*/
        loc5.c = t2.c1;
        /* IL_5A: ldloc.s 5*/
        /* IL_5C: stloc.2 */
        loc2 = loc5;
        /* IL_5D: ldarga.s 0*/
        /* IL_5F: ldloc.0 */
        /* IL_60: box B*/
        /* IL_6B: callvirt Boolean Equals(System.Object)*/
        /* IL_70: box System.Boolean*/
        /* IL_75: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((arg0.vtable || t0.prototype.vtable)["asm0.x60000f0"])())({
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
        /* IL_7A: ldarga.s 0*/
        /* IL_7C: ldloc.1 */
        /* IL_7D: box B*/
        /* IL_88: callvirt Boolean Equals(System.Object)*/
        /* IL_8D: box System.Boolean*/
        /* IL_92: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((arg0.vtable || t0.prototype.vtable)["asm0.x60000f0"])())({
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
        /* IL_97: ldarga.s 0*/
        /* IL_99: ldloc.2 */
        /* IL_9A: box B*/
        /* IL_A5: callvirt Boolean Equals(System.Object)*/
        /* IL_AA: box System.Boolean*/
        /* IL_AF: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((arg0.vtable || t0.prototype.vtable)["asm0.x60000f0"])())({
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
        /* IL_B4: ldarg.0 */
        /* IL_B5: box B*/
        /* IL_BA: ldloc.0 */
        /* IL_BB: box B*/
        /* IL_C0: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_C5: box System.Boolean*/
        /* IL_CA: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x60000ef({
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
        /* IL_CF: ldarg.0 */
        /* IL_D0: box B*/
        /* IL_D5: ldloc.1 */
        /* IL_D6: box B*/
        /* IL_DB: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_E0: box System.Boolean*/
        /* IL_E5: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x60000ef({
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
        /* IL_EA: ldarg.0 */
        /* IL_EB: box B*/
        /* IL_F0: ldloc.2 */
        /* IL_F1: box B*/
        /* IL_F6: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_FB: box System.Boolean*/
        /* IL_100: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x60000ef({
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
        /* IL_105: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
            CILJS.init_type(this,asm,"A",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"B",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.a = new (asm2.A())();
            this.prototype.c = null;
        });
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
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
            this.c1 = null;
            this.c2 = null;
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000002;
})(asm2 || (asm2 = {}));
