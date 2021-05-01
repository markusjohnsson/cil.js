
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "ValueTypeEquality.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.Int32 C.get_V()*/

asm.x6000001 = function get_V(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld Int32 <V>k__BackingField */
    /* IL_06: ret  */
    
    return arg0["C<V>k__BackingField"];
};;/* System.Void C.set_V(Int32)*/

asm.x6000002 = function set_V(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: stfld Int32 <V>k__BackingField */
    
    arg0["C<V>k__BackingField"] = arg1;
    /* IL_07: ret  */
    
    return ;
};;/* System.Boolean C.Equals(Object)*/

asm.x6000003_init = function (arg0, arg1)
{
    
    (asm1.C().init)();
    
    asm.x6000003 = asm.x6000003_;
};;

asm.x6000003 = function (arg0, arg1)
{
    
    asm.x6000003_init(arg0,arg1);
    
    return asm.x6000003_(arg0,arg1);
};;
asm.x6000003_ = function Equals(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    
    t0 = asm1.C();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: isinst C */
            /* IL_07: stloc.0  */
            
            loc0 = t0.IsInst(arg1);
            /* IL_08: ldloc.0  */
            /* IL_09: ldnull  */
            /* IL_0B: ceq  */
            /* IL_0C: stloc.1  */
            
            loc1 = ((loc0 === null) ? 1 : 0);
            /* IL_0D: ldloc.1  */
            /* IL_0E: brfalse.s IL_14 */
            
            if ((!(loc1))){
                
                __pos__ = 0x14;
                
                continue;
            }
            /* IL_10: ldc.i4.0  */
            /* IL_11: stloc.2  */
            
            loc2 = 0;
            /* IL_12: br.s IL_25 */
            
            __pos__ = 0x25;
            
            continue;
            case 0x14:
            /* IL_14: ldarg.0  */
            /* IL_15: call Int32 get_V() */
            /* IL_1A: ldloc.0  */
            /* IL_1B: callvirt Int32 get_V() */
            /* IL_21: ceq  */
            /* IL_22: stloc.2  */
            
            loc2 = ((asm1.x6000001(arg0) === loc0["C<V>k__BackingField"]) ? 1 : 0);
            case 0x25:
            /* IL_25: ldloc.2  */
            /* IL_26: ret  */
            
            return loc2;
        }
    }
};/*  C..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Boolean M.Equals(Object)*/

asm.x6000005 = function Equals(arg0, arg1)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldstr Called */
    /* IL_06: ldc.i4.0  */
    /* IL_07: newarr System.Object */
    /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(CILJS.newString("Called"),CILJS.newArray(t0,0));
    /* IL_11: nop  */
    /* IL_12: ldc.i4.0  */
    /* IL_13: stloc.0  */
    
    loc0 = 0;
    /* IL_16: ldloc.0  */
    /* IL_17: ret  */
    
    return loc0;
};;/* static System.Void Program.Main()*/

asm.x6000006_init = function ()
{
    
    (asm1.A().init)();
    
    (asm1.B().init)();
    
    (asm1.C().init)();
    
    (asm1.Program().init)();
    
    (asm1.M().init)();
    
    asm.x6000006 = asm.x6000006_;
};;

asm.x6000006 = function ()
{
    
    asm.x6000006_init();
    
    return asm.x6000006_();
};;
asm.x6000006_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var t3;
    var t4;
    var t5;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    var st_14;
    var st_15;
    var st_16;
    var st_17;
    var st_1C;
    var st_1D;
    var st_1E;
    var st_1F;
    var st_23;
    var st_24;
    var st_25;
    var st_26;
    var st_2C;
    var st_2D;
    var st_2E;
    var st_2F;
    var st_35;
    var st_36;
    var st_37;
    var st_38;
    var st_3E;
    var st_3F;
    var st_40;
    var st_41;
    var st_47;
    var st_48;
    var st_49;
    var st_4A;
    var st_50;
    var st_51;
    var st_52;
    var st_53;
    var st_57;
    var st_58;
    var st_59;
    var st_5A;
    var st_60;
    var st_61;
    var st_62;
    var st_63;
    var st_69;
    var st_6A;
    var st_6B;
    var st_6C;
    var st_72;
    var st_73;
    var st_74;
    var st_75;
    var st_7B;
    var st_7C;
    var st_7D;
    var st_7E;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.A();
    
    t1 = asm1.B();
    
    t2 = asm1.C();
    
    t3 = asm1.Program();
    
    t4 = asm1.M();
    
    t5 = asm0["System.Boolean"]();
    
    loc0 = new (asm1.M())();
    
    loc1 = new (asm1.M())();
    
    loc2 = new (asm1.A())();
    
    loc3 = new (asm1.B())();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldloca.s 2 */
    /* IL_04: initobj A */
    
    loc2 = new t0();
    /* IL_09: ldloc.2  */
    /* IL_0A: call Void TestA(A) */
    
    asm1.x6000007(CILJS.cloneValue(loc2));
    /* IL_0F: nop  */
    /* IL_10: ldloca.s 2 */
    /* IL_13: initobj A */
    
    loc2 = new t0();
    /* IL_18: ldloca.s 2 */
    /* IL_1A: ldc.i4.0  */
    /* IL_1B: stfld Int32 x */
    
    loc2.x = 0;
    /* IL_20: ldloc.2  */
    /* IL_21: call Void TestA(A) */
    
    asm1.x6000007(CILJS.cloneValue(loc2));
    /* IL_26: nop  */
    /* IL_27: ldloca.s 2 */
    /* IL_2A: initobj A */
    
    loc2 = new t0();
    /* IL_2F: ldloca.s 2 */
    /* IL_31: ldc.i4.s 123 */
    /* IL_33: stfld Int32 x */
    
    loc2.x = 123;
    /* IL_38: ldloc.2  */
    /* IL_39: call Void TestA(A) */
    
    asm1.x6000007(CILJS.cloneValue(loc2));
    /* IL_3E: nop  */
    /* IL_3F: ldloca.s 2 */
    /* IL_42: initobj A */
    
    loc2 = new t0();
    /* IL_47: ldloca.s 2 */
    /* IL_49: ldc.i4 321 */
    /* IL_4E: stfld Int32 x */
    
    loc2.x = 321;
    /* IL_53: ldloc.2  */
    /* IL_54: call Void TestA(A) */
    
    asm1.x6000007(CILJS.cloneValue(loc2));
    /* IL_59: nop  */
    /* IL_5A: ldloca.s 2 */
    /* IL_5D: initobj A */
    
    loc2 = new t0();
    /* IL_62: ldloc.2  */
    /* IL_63: call Void TestA(A) */
    
    asm1.x6000007(CILJS.cloneValue(loc2));
    /* IL_68: nop  */
    /* IL_69: ldloca.s 3 */
    /* IL_6C: initobj B */
    
    loc3 = new t1();
    /* IL_71: ldloc.3  */
    /* IL_72: ldfld A a */
    /* IL_77: call Void TestA(A) */
    
    asm1.x6000007(CILJS.cloneValue(loc3.a));
    /* IL_7C: nop  */
    /* IL_7D: newobj Void .ctor() */
    /* IL_82: stsfld C c1 */
    
    t3.c1 = CILJS.newobj(t2,asm1.x6000004,[null]);
    /* IL_87: newobj Void .ctor() */
    
    st_14 = CILJS.newobj(t2,asm1.x6000004,[null]);
    /* IL_8C: dup  */
    
    st_17 = st_15 = st_14;
    /* IL_8D: ldc.i4.2  */
    
    st_16 = 2;
    /* IL_8E: callvirt Void set_V(System.Int32) */
    
    asm1.x6000002(st_15,st_16);
    /* IL_93: nop  */
    /* IL_94: stsfld C c3 */
    
    t3.c3 = st_17;
    /* IL_99: ldloca.s 3 */
    /* IL_9C: initobj B */
    
    loc3 = new t1();
    /* IL_A1: ldloc.3  */
    /* IL_A2: call Void TestB(B) */
    
    asm1.x6000008(CILJS.cloneValue(loc3));
    /* IL_A7: nop  */
    /* IL_A8: ldloca.s 3 */
    /* IL_AB: initobj B */
    
    loc3 = new t1();
    /* IL_B0: ldloca.s 3 */
    
    st_1E = {
        w: function (v)
        {
            
            loc3 = v;
        },
        r: function ()
        {
            
            return loc3;
        }
    };
    /* IL_B2: ldloca.s 2 */
    /* IL_B5: initobj A */
    
    loc2 = new t0();
    /* IL_BA: ldloca.s 2 */
    
    st_1C = {
        w: function (v)
        {
            
            loc2 = v;
        },
        r: function ()
        {
            
            return loc2;
        }
    };
    /* IL_BC: ldc.i4.s 123 */
    
    st_1D = 123;
    /* IL_BE: stfld Int32 x */
    
    st_1C.r().x = st_1D;
    /* IL_C3: ldloc.2  */
    
    st_1F = loc2;
    /* IL_C4: stfld A a */
    
    st_1E.r().a = st_1F;
    /* IL_C9: ldloc.3  */
    /* IL_CA: call Void TestB(B) */
    
    asm1.x6000008(CILJS.cloneValue(loc3));
    /* IL_CF: nop  */
    /* IL_D0: ldloca.s 3 */
    /* IL_D3: initobj B */
    
    loc3 = new t1();
    /* IL_D8: ldloca.s 3 */
    
    st_25 = {
        w: function (v)
        {
            
            loc3 = v;
        },
        r: function ()
        {
            
            return loc3;
        }
    };
    /* IL_DA: ldloca.s 2 */
    /* IL_DD: initobj A */
    
    loc2 = new t0();
    /* IL_E2: ldloca.s 2 */
    
    st_23 = {
        w: function (v)
        {
            
            loc2 = v;
        },
        r: function ()
        {
            
            return loc2;
        }
    };
    /* IL_E4: ldc.i4.s 123 */
    
    st_24 = 123;
    /* IL_E6: stfld Int32 x */
    
    st_23.r().x = st_24;
    /* IL_EB: ldloc.2  */
    
    st_26 = loc2;
    /* IL_EC: stfld A a */
    
    st_25.r().a = st_26;
    /* IL_F1: ldloca.s 3 */
    /* IL_F3: ldnull  */
    /* IL_F4: stfld C c */
    
    loc3.c = null;
    /* IL_F9: ldloc.3  */
    /* IL_FA: call Void TestB(B) */
    
    asm1.x6000008(CILJS.cloneValue(loc3));
    /* IL_FF: nop  */
    /* IL_100: ldloca.s 3 */
    /* IL_103: initobj B */
    
    loc3 = new t1();
    /* IL_108: ldloca.s 3 */
    
    st_2E = {
        w: function (v)
        {
            
            loc3 = v;
        },
        r: function ()
        {
            
            return loc3;
        }
    };
    /* IL_10A: ldloca.s 2 */
    /* IL_10D: initobj A */
    
    loc2 = new t0();
    /* IL_112: ldloca.s 2 */
    
    st_2C = {
        w: function (v)
        {
            
            loc2 = v;
        },
        r: function ()
        {
            
            return loc2;
        }
    };
    /* IL_114: ldc.i4.s 123 */
    
    st_2D = 123;
    /* IL_116: stfld Int32 x */
    
    st_2C.r().x = st_2D;
    /* IL_11B: ldloc.2  */
    
    st_2F = loc2;
    /* IL_11C: stfld A a */
    
    st_2E.r().a = st_2F;
    /* IL_121: ldloca.s 3 */
    /* IL_123: ldsfld C c1 */
    /* IL_128: stfld C c */
    
    loc3.c = t3.c1;
    /* IL_12D: ldloc.3  */
    /* IL_12E: call Void TestB(B) */
    
    asm1.x6000008(CILJS.cloneValue(loc3));
    /* IL_133: nop  */
    /* IL_134: ldloca.s 3 */
    /* IL_137: initobj B */
    
    loc3 = new t1();
    /* IL_13C: ldloca.s 3 */
    
    st_37 = {
        w: function (v)
        {
            
            loc3 = v;
        },
        r: function ()
        {
            
            return loc3;
        }
    };
    /* IL_13E: ldloca.s 2 */
    /* IL_141: initobj A */
    
    loc2 = new t0();
    /* IL_146: ldloca.s 2 */
    
    st_35 = {
        w: function (v)
        {
            
            loc2 = v;
        },
        r: function ()
        {
            
            return loc2;
        }
    };
    /* IL_148: ldc.i4.s 123 */
    
    st_36 = 123;
    /* IL_14A: stfld Int32 x */
    
    st_35.r().x = st_36;
    /* IL_14F: ldloc.2  */
    
    st_38 = loc2;
    /* IL_150: stfld A a */
    
    st_37.r().a = st_38;
    /* IL_155: ldloca.s 3 */
    /* IL_157: ldsfld C c2 */
    /* IL_15C: stfld C c */
    
    loc3.c = t3.c2;
    /* IL_161: ldloc.3  */
    /* IL_162: call Void TestB(B) */
    
    asm1.x6000008(CILJS.cloneValue(loc3));
    /* IL_167: nop  */
    /* IL_168: ldloca.s 3 */
    /* IL_16B: initobj B */
    
    loc3 = new t1();
    /* IL_170: ldloca.s 3 */
    
    st_40 = {
        w: function (v)
        {
            
            loc3 = v;
        },
        r: function ()
        {
            
            return loc3;
        }
    };
    /* IL_172: ldloca.s 2 */
    /* IL_175: initobj A */
    
    loc2 = new t0();
    /* IL_17A: ldloca.s 2 */
    
    st_3E = {
        w: function (v)
        {
            
            loc2 = v;
        },
        r: function ()
        {
            
            return loc2;
        }
    };
    /* IL_17C: ldc.i4.s 123 */
    
    st_3F = 123;
    /* IL_17E: stfld Int32 x */
    
    st_3E.r().x = st_3F;
    /* IL_183: ldloc.2  */
    
    st_41 = loc2;
    /* IL_184: stfld A a */
    
    st_40.r().a = st_41;
    /* IL_189: ldloca.s 3 */
    /* IL_18B: ldsfld C c3 */
    /* IL_190: stfld C c */
    
    loc3.c = t3.c3;
    /* IL_195: ldloc.3  */
    /* IL_196: call Void TestB(B) */
    
    asm1.x6000008(CILJS.cloneValue(loc3));
    /* IL_19B: nop  */
    /* IL_19C: ldloca.s 3 */
    /* IL_19F: initobj B */
    
    loc3 = new t1();
    /* IL_1A4: ldloca.s 3 */
    
    st_49 = {
        w: function (v)
        {
            
            loc3 = v;
        },
        r: function ()
        {
            
            return loc3;
        }
    };
    /* IL_1A6: ldloca.s 2 */
    /* IL_1A9: initobj A */
    
    loc2 = new t0();
    /* IL_1AE: ldloca.s 2 */
    
    st_47 = {
        w: function (v)
        {
            
            loc2 = v;
        },
        r: function ()
        {
            
            return loc2;
        }
    };
    /* IL_1B0: ldc.i4.s 123 */
    
    st_48 = 123;
    /* IL_1B2: stfld Int32 x */
    
    st_47.r().x = st_48;
    /* IL_1B7: ldloc.2  */
    
    st_4A = loc2;
    /* IL_1B8: stfld A a */
    
    st_49.r().a = st_4A;
    /* IL_1BD: ldloca.s 3 */
    /* IL_1BF: newobj Void .ctor() */
    /* IL_1C4: stfld C c */
    
    loc3.c = CILJS.newobj(t2,asm1.x6000004,[null]);
    /* IL_1C9: ldloc.3  */
    /* IL_1CA: call Void TestB(B) */
    
    asm1.x6000008(CILJS.cloneValue(loc3));
    /* IL_1CF: nop  */
    /* IL_1D0: ldloca.s 3 */
    /* IL_1D3: initobj B */
    
    loc3 = new t1();
    /* IL_1D8: ldloca.s 3 */
    
    st_52 = {
        w: function (v)
        {
            
            loc3 = v;
        },
        r: function ()
        {
            
            return loc3;
        }
    };
    /* IL_1DA: ldloca.s 2 */
    /* IL_1DD: initobj A */
    
    loc2 = new t0();
    /* IL_1E2: ldloca.s 2 */
    
    st_50 = {
        w: function (v)
        {
            
            loc2 = v;
        },
        r: function ()
        {
            
            return loc2;
        }
    };
    /* IL_1E4: ldc.i4.s 22 */
    
    st_51 = 22;
    /* IL_1E6: stfld Int32 x */
    
    st_50.r().x = st_51;
    /* IL_1EB: ldloc.2  */
    
    st_53 = loc2;
    /* IL_1EC: stfld A a */
    
    st_52.r().a = st_53;
    /* IL_1F1: ldloc.3  */
    /* IL_1F2: call Void TestB(B) */
    
    asm1.x6000008(CILJS.cloneValue(loc3));
    /* IL_1F7: nop  */
    /* IL_1F8: ldloca.s 3 */
    /* IL_1FB: initobj B */
    
    loc3 = new t1();
    /* IL_200: ldloca.s 3 */
    
    st_59 = {
        w: function (v)
        {
            
            loc3 = v;
        },
        r: function ()
        {
            
            return loc3;
        }
    };
    /* IL_202: ldloca.s 2 */
    /* IL_205: initobj A */
    
    loc2 = new t0();
    /* IL_20A: ldloca.s 2 */
    
    st_57 = {
        w: function (v)
        {
            
            loc2 = v;
        },
        r: function ()
        {
            
            return loc2;
        }
    };
    /* IL_20C: ldc.i4.s 22 */
    
    st_58 = 22;
    /* IL_20E: stfld Int32 x */
    
    st_57.r().x = st_58;
    /* IL_213: ldloc.2  */
    
    st_5A = loc2;
    /* IL_214: stfld A a */
    
    st_59.r().a = st_5A;
    /* IL_219: ldloca.s 3 */
    /* IL_21B: ldnull  */
    /* IL_21C: stfld C c */
    
    loc3.c = null;
    /* IL_221: ldloc.3  */
    /* IL_222: call Void TestB(B) */
    
    asm1.x6000008(CILJS.cloneValue(loc3));
    /* IL_227: nop  */
    /* IL_228: ldloca.s 3 */
    /* IL_22B: initobj B */
    
    loc3 = new t1();
    /* IL_230: ldloca.s 3 */
    
    st_62 = {
        w: function (v)
        {
            
            loc3 = v;
        },
        r: function ()
        {
            
            return loc3;
        }
    };
    /* IL_232: ldloca.s 2 */
    /* IL_235: initobj A */
    
    loc2 = new t0();
    /* IL_23A: ldloca.s 2 */
    
    st_60 = {
        w: function (v)
        {
            
            loc2 = v;
        },
        r: function ()
        {
            
            return loc2;
        }
    };
    /* IL_23C: ldc.i4.s 22 */
    
    st_61 = 22;
    /* IL_23E: stfld Int32 x */
    
    st_60.r().x = st_61;
    /* IL_243: ldloc.2  */
    
    st_63 = loc2;
    /* IL_244: stfld A a */
    
    st_62.r().a = st_63;
    /* IL_249: ldloca.s 3 */
    /* IL_24B: ldsfld C c1 */
    /* IL_250: stfld C c */
    
    loc3.c = t3.c1;
    /* IL_255: ldloc.3  */
    /* IL_256: call Void TestB(B) */
    
    asm1.x6000008(CILJS.cloneValue(loc3));
    /* IL_25B: nop  */
    /* IL_25C: ldloca.s 3 */
    /* IL_25F: initobj B */
    
    loc3 = new t1();
    /* IL_264: ldloca.s 3 */
    
    st_6B = {
        w: function (v)
        {
            
            loc3 = v;
        },
        r: function ()
        {
            
            return loc3;
        }
    };
    /* IL_266: ldloca.s 2 */
    /* IL_269: initobj A */
    
    loc2 = new t0();
    /* IL_26E: ldloca.s 2 */
    
    st_69 = {
        w: function (v)
        {
            
            loc2 = v;
        },
        r: function ()
        {
            
            return loc2;
        }
    };
    /* IL_270: ldc.i4.s 22 */
    
    st_6A = 22;
    /* IL_272: stfld Int32 x */
    
    st_69.r().x = st_6A;
    /* IL_277: ldloc.2  */
    
    st_6C = loc2;
    /* IL_278: stfld A a */
    
    st_6B.r().a = st_6C;
    /* IL_27D: ldloca.s 3 */
    /* IL_27F: ldsfld C c2 */
    /* IL_284: stfld C c */
    
    loc3.c = t3.c2;
    /* IL_289: ldloc.3  */
    /* IL_28A: call Void TestB(B) */
    
    asm1.x6000008(CILJS.cloneValue(loc3));
    /* IL_28F: nop  */
    /* IL_290: ldloca.s 3 */
    /* IL_293: initobj B */
    
    loc3 = new t1();
    /* IL_298: ldloca.s 3 */
    
    st_74 = {
        w: function (v)
        {
            
            loc3 = v;
        },
        r: function ()
        {
            
            return loc3;
        }
    };
    /* IL_29A: ldloca.s 2 */
    /* IL_29D: initobj A */
    
    loc2 = new t0();
    /* IL_2A2: ldloca.s 2 */
    
    st_72 = {
        w: function (v)
        {
            
            loc2 = v;
        },
        r: function ()
        {
            
            return loc2;
        }
    };
    /* IL_2A4: ldc.i4.s 123 */
    
    st_73 = 123;
    /* IL_2A6: stfld Int32 x */
    
    st_72.r().x = st_73;
    /* IL_2AB: ldloc.2  */
    
    st_75 = loc2;
    /* IL_2AC: stfld A a */
    
    st_74.r().a = st_75;
    /* IL_2B1: ldloca.s 3 */
    /* IL_2B3: ldsfld C c3 */
    /* IL_2B8: stfld C c */
    
    loc3.c = t3.c3;
    /* IL_2BD: ldloc.3  */
    /* IL_2BE: call Void TestB(B) */
    
    asm1.x6000008(CILJS.cloneValue(loc3));
    /* IL_2C3: nop  */
    /* IL_2C4: ldloca.s 3 */
    /* IL_2C7: initobj B */
    
    loc3 = new t1();
    /* IL_2CC: ldloca.s 3 */
    
    st_7D = {
        w: function (v)
        {
            
            loc3 = v;
        },
        r: function ()
        {
            
            return loc3;
        }
    };
    /* IL_2CE: ldloca.s 2 */
    /* IL_2D1: initobj A */
    
    loc2 = new t0();
    /* IL_2D6: ldloca.s 2 */
    
    st_7B = {
        w: function (v)
        {
            
            loc2 = v;
        },
        r: function ()
        {
            
            return loc2;
        }
    };
    /* IL_2D8: ldc.i4.s 22 */
    
    st_7C = 22;
    /* IL_2DA: stfld Int32 x */
    
    st_7B.r().x = st_7C;
    /* IL_2DF: ldloc.2  */
    
    st_7E = loc2;
    /* IL_2E0: stfld A a */
    
    st_7D.r().a = st_7E;
    /* IL_2E5: ldloca.s 3 */
    /* IL_2E7: newobj Void .ctor() */
    /* IL_2EC: stfld C c */
    
    loc3.c = CILJS.newobj(t2,asm1.x6000004,[null]);
    /* IL_2F1: ldloc.3  */
    /* IL_2F2: call Void TestB(B) */
    
    asm1.x6000008(CILJS.cloneValue(loc3));
    /* IL_2F7: nop  */
    /* IL_2F8: ldloca.s 0 */
    /* IL_2FA: ldloc.1  */
    /* IL_2FB: box M */
    /* IL_306: callvirt Boolean Equals(System.Object) */
    /* IL_30B: box System.Boolean */
    /* IL_310: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((loc0.vtable || t4.prototype.vtable)["asm0.x600009e"])({
                    w: function (v)
                    {
                        
                        loc0 = v;
                    },
                    r: function ()
                    {
                        
                        return loc0;
                    }
                },CILJS.makeBox(CILJS.cloneValue(loc1),t4)),t5));
    /* IL_315: nop  */
    /* IL_316: ret  */
    
    return ;
};/* static System.Void Program.TestA(A)*/

asm.x6000007_init = function (arg0)
{
    
    (asm1.A().init)();
    
    asm.x6000007 = asm.x6000007_;
};;

asm.x6000007 = function (arg0)
{
    
    asm.x6000007_init(arg0);
    
    return asm.x6000007_(arg0);
};;
asm.x6000007_ = function TestA(arg0)
{
    var t0;
    var t1;
    var loc1;
    var loc2;
    var loc3;
    var loc0;
    
    t0 = asm1.A();
    
    t1 = asm0["System.Boolean"]();
    
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
    
    loc3.x = 321;
    /* IL_15: ldloc.3  */
    /* IL_16: stloc.0  */
    
    loc0 = CILJS.cloneValue(loc3);
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
    
    asm0.x6000072(CILJS.makeBox(((arg0.vtable || t0.prototype.vtable)["asm0.x600009e"])({
                    w: function (v)
                    {
                        
                        arg0 = v;
                    },
                    r: function ()
                    {
                        
                        return arg0;
                    }
                },CILJS.makeBox(CILJS.cloneValue(loc0),t0)),t1));
    /* IL_44: nop  */
    /* IL_45: ldarga.s 0 */
    /* IL_47: ldloc.1  */
    /* IL_48: box A */
    /* IL_53: callvirt Boolean Equals(System.Object) */
    /* IL_58: box System.Boolean */
    /* IL_5D: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((arg0.vtable || t0.prototype.vtable)["asm0.x600009e"])({
                    w: function (v)
                    {
                        
                        arg0 = v;
                    },
                    r: function ()
                    {
                        
                        return arg0;
                    }
                },CILJS.makeBox(CILJS.cloneValue(loc1),t0)),t1));
    /* IL_62: nop  */
    /* IL_63: ldarga.s 0 */
    /* IL_65: ldloc.2  */
    /* IL_66: box A */
    /* IL_71: callvirt Boolean Equals(System.Object) */
    /* IL_76: box System.Boolean */
    /* IL_7B: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((arg0.vtable || t0.prototype.vtable)["asm0.x600009e"])({
                    w: function (v)
                    {
                        
                        arg0 = v;
                    },
                    r: function ()
                    {
                        
                        return arg0;
                    }
                },CILJS.makeBox(CILJS.cloneValue(loc2),t0)),t1));
    /* IL_80: nop  */
    /* IL_81: ldarg.0  */
    /* IL_82: box A */
    /* IL_87: ldloc.0  */
    /* IL_88: box A */
    /* IL_8E: ceq  */
    /* IL_8F: box System.Boolean */
    /* IL_94: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((CILJS.makeBox(CILJS.cloneValue(arg0),t0) === CILJS.makeBox(CILJS.cloneValue(loc0),t0)) ? 1 : 0),t1));
    /* IL_99: nop  */
    /* IL_9A: ldarg.0  */
    /* IL_9B: box A */
    /* IL_A0: ldloc.1  */
    /* IL_A1: box A */
    /* IL_A7: ceq  */
    /* IL_A8: box System.Boolean */
    /* IL_AD: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((CILJS.makeBox(CILJS.cloneValue(arg0),t0) === CILJS.makeBox(CILJS.cloneValue(loc1),t0)) ? 1 : 0),t1));
    /* IL_B2: nop  */
    /* IL_B3: ldarg.0  */
    /* IL_B4: box A */
    /* IL_B9: ldloc.2  */
    /* IL_BA: box A */
    /* IL_C0: ceq  */
    /* IL_C1: box System.Boolean */
    /* IL_C6: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((CILJS.makeBox(CILJS.cloneValue(arg0),t0) === CILJS.makeBox(CILJS.cloneValue(loc2),t0)) ? 1 : 0),t1));
    /* IL_CB: nop  */
    /* IL_CC: ret  */
    
    return ;
};/* static System.Void Program.TestB(B)*/

asm.x6000008_init = function (arg0)
{
    
    (asm1.B().init)();
    
    (asm1.A().init)();
    
    (asm1.Program().init)();
    
    asm.x6000008 = asm.x6000008_;
};;

asm.x6000008 = function (arg0)
{
    
    asm.x6000008_init(arg0);
    
    return asm.x6000008_(arg0);
};;
asm.x6000008_ = function TestB(arg0)
{
    var t0;
    var t1;
    var t2;
    var t3;
    var loc1;
    var loc4;
    var loc5;
    var st_02;
    var st_03;
    var st_04;
    var st_05;
    var st_0A;
    var st_0B;
    var st_0C;
    var st_0D;
    var st_13;
    var st_14;
    var st_15;
    var st_16;
    var loc0;
    var loc2;
    var loc3;
    
    t0 = asm1.B();
    
    t1 = asm1.A();
    
    t2 = asm1.Program();
    
    t3 = asm0["System.Boolean"]();
    
    loc1 = new (asm1.B())();
    
    loc4 = new (asm1.B())();
    
    loc5 = new (asm1.A())();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldloca.s 4 */
    /* IL_04: initobj B */
    
    loc4 = new t0();
    /* IL_09: ldloca.s 4 */
    
    st_04 = {
        w: function (v)
        {
            
            loc4 = v;
        },
        r: function ()
        {
            
            return loc4;
        }
    };
    /* IL_0B: ldloca.s 5 */
    /* IL_0E: initobj A */
    
    loc5 = new t1();
    /* IL_13: ldloca.s 5 */
    
    st_02 = {
        w: function (v)
        {
            
            loc5 = v;
        },
        r: function ()
        {
            
            return loc5;
        }
    };
    /* IL_15: ldc.i4.s 123 */
    
    st_03 = 123;
    /* IL_17: stfld Int32 x */
    
    st_02.r().x = st_03;
    /* IL_1C: ldloc.s 5 */
    
    st_05 = loc5;
    /* IL_1E: stfld A a */
    
    st_04.r().a = st_05;
    /* IL_23: ldloc.s 4 */
    /* IL_25: stloc.0  */
    
    loc0 = CILJS.cloneValue(loc4);
    /* IL_26: ldloca.s 1 */
    /* IL_29: initobj B */
    
    loc1 = new t0();
    /* IL_2E: ldloca.s 4 */
    /* IL_31: initobj B */
    
    loc4 = new t0();
    /* IL_36: ldloca.s 4 */
    
    st_0C = {
        w: function (v)
        {
            
            loc4 = v;
        },
        r: function ()
        {
            
            return loc4;
        }
    };
    /* IL_38: ldloca.s 5 */
    /* IL_3B: initobj A */
    
    loc5 = new t1();
    /* IL_40: ldloca.s 5 */
    
    st_0A = {
        w: function (v)
        {
            
            loc5 = v;
        },
        r: function ()
        {
            
            return loc5;
        }
    };
    /* IL_42: ldc.i4.s 22 */
    
    st_0B = 22;
    /* IL_44: stfld Int32 x */
    
    st_0A.r().x = st_0B;
    /* IL_49: ldloc.s 5 */
    
    st_0D = loc5;
    /* IL_4B: stfld A a */
    
    st_0C.r().a = st_0D;
    /* IL_50: ldloca.s 4 */
    /* IL_52: ldsfld C c1 */
    /* IL_57: stfld C c */
    
    loc4.c = t2.c1;
    /* IL_5C: ldloc.s 4 */
    /* IL_5E: stloc.2  */
    
    loc2 = CILJS.cloneValue(loc4);
    /* IL_5F: ldloca.s 4 */
    /* IL_62: initobj B */
    
    loc4 = new t0();
    /* IL_67: ldloca.s 4 */
    
    st_15 = {
        w: function (v)
        {
            
            loc4 = v;
        },
        r: function ()
        {
            
            return loc4;
        }
    };
    /* IL_69: ldloca.s 5 */
    /* IL_6C: initobj A */
    
    loc5 = new t1();
    /* IL_71: ldloca.s 5 */
    
    st_13 = {
        w: function (v)
        {
            
            loc5 = v;
        },
        r: function ()
        {
            
            return loc5;
        }
    };
    /* IL_73: ldc.i4.s 22 */
    
    st_14 = 22;
    /* IL_75: stfld Int32 x */
    
    st_13.r().x = st_14;
    /* IL_7A: ldloc.s 5 */
    
    st_16 = loc5;
    /* IL_7C: stfld A a */
    
    st_15.r().a = st_16;
    /* IL_81: ldloca.s 4 */
    /* IL_83: ldsfld C c3 */
    /* IL_88: stfld C c */
    
    loc4.c = t2.c3;
    /* IL_8D: ldloc.s 4 */
    /* IL_8F: stloc.3  */
    
    loc3 = CILJS.cloneValue(loc4);
    /* IL_90: ldarga.s 0 */
    /* IL_92: ldloc.0  */
    /* IL_93: box B */
    /* IL_9E: callvirt Boolean Equals(System.Object) */
    /* IL_A3: box System.Boolean */
    /* IL_A8: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((arg0.vtable || t0.prototype.vtable)["asm0.x600009e"])({
                    w: function (v)
                    {
                        
                        arg0 = v;
                    },
                    r: function ()
                    {
                        
                        return arg0;
                    }
                },CILJS.makeBox(CILJS.cloneValue(loc0),t0)),t3));
    /* IL_AD: nop  */
    /* IL_AE: ldarga.s 0 */
    /* IL_B0: ldloc.1  */
    /* IL_B1: box B */
    /* IL_BC: callvirt Boolean Equals(System.Object) */
    /* IL_C1: box System.Boolean */
    /* IL_C6: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((arg0.vtable || t0.prototype.vtable)["asm0.x600009e"])({
                    w: function (v)
                    {
                        
                        arg0 = v;
                    },
                    r: function ()
                    {
                        
                        return arg0;
                    }
                },CILJS.makeBox(CILJS.cloneValue(loc1),t0)),t3));
    /* IL_CB: nop  */
    /* IL_CC: ldarga.s 0 */
    /* IL_CE: ldloc.2  */
    /* IL_CF: box B */
    /* IL_DA: callvirt Boolean Equals(System.Object) */
    /* IL_DF: box System.Boolean */
    /* IL_E4: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((arg0.vtable || t0.prototype.vtable)["asm0.x600009e"])({
                    w: function (v)
                    {
                        
                        arg0 = v;
                    },
                    r: function ()
                    {
                        
                        return arg0;
                    }
                },CILJS.makeBox(CILJS.cloneValue(loc2),t0)),t3));
    /* IL_E9: nop  */
    /* IL_EA: ldarga.s 0 */
    /* IL_EC: ldloc.3  */
    /* IL_ED: box B */
    /* IL_F8: callvirt Boolean Equals(System.Object) */
    /* IL_FD: box System.Boolean */
    /* IL_102: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((arg0.vtable || t0.prototype.vtable)["asm0.x600009e"])({
                    w: function (v)
                    {
                        
                        arg0 = v;
                    },
                    r: function ()
                    {
                        
                        return arg0;
                    }
                },CILJS.makeBox(CILJS.cloneValue(loc3),t0)),t3));
    /* IL_107: nop  */
    /* IL_108: ldarg.0  */
    /* IL_109: box B */
    /* IL_10E: ldloc.0  */
    /* IL_10F: box B */
    /* IL_115: ceq  */
    /* IL_116: box System.Boolean */
    /* IL_11B: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((CILJS.makeBox(CILJS.cloneValue(arg0),t0) === CILJS.makeBox(CILJS.cloneValue(loc0),t0)) ? 1 : 0),t3));
    /* IL_120: nop  */
    /* IL_121: ldarg.0  */
    /* IL_122: box B */
    /* IL_127: ldloc.1  */
    /* IL_128: box B */
    /* IL_12E: ceq  */
    /* IL_12F: box System.Boolean */
    /* IL_134: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((CILJS.makeBox(CILJS.cloneValue(arg0),t0) === CILJS.makeBox(CILJS.cloneValue(loc1),t0)) ? 1 : 0),t3));
    /* IL_139: nop  */
    /* IL_13A: ldarg.0  */
    /* IL_13B: box B */
    /* IL_140: ldloc.2  */
    /* IL_141: box B */
    /* IL_147: ceq  */
    /* IL_148: box System.Boolean */
    /* IL_14D: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((CILJS.makeBox(CILJS.cloneValue(arg0),t0) === CILJS.makeBox(CILJS.cloneValue(loc2),t0)) ? 1 : 0),t3));
    /* IL_152: nop  */
    /* IL_153: ldarg.0  */
    /* IL_154: box B */
    /* IL_159: ldloc.3  */
    /* IL_15A: box B */
    /* IL_160: ceq  */
    /* IL_161: box System.Boolean */
    /* IL_166: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(((CILJS.makeBox(CILJS.cloneValue(arg0),t0) === CILJS.makeBox(CILJS.cloneValue(loc3),t0)) ? 1 : 0),t3));
    /* IL_16B: nop  */
    /* IL_16C: ret  */
    
    return ;
};/*  Program..ctor()*/

asm.x6000009 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.A = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"A",true,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm1.t2000002",new (asm1.A())());
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function A()
        {
            
            A.init();
            
            this.x = 0;
        };
    });
asm.B = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"B",true,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm1.t2000003",new (asm1.B())());
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function B()
        {
            
            B.init();
            
            this.a = new (asm1.A())();
            
            this.c = null;
        };
    });
asm.C = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"C",false,false,false,false,false,[],[
                [asm1, "x6000001", "get_V"],
                [asm1, "x6000002", "set_V"],
                [asm1, "x6000003", "Equals"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm1,"x6000003");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function C()
        {
            
            C.init();
            
            this["C<V>k__BackingField"] = 0;
        };
    });
asm.M = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"M",true,false,false,false,false,[],[
                [asm1, "x6000005", "Equals"]
            ],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm1.t2000005",new (asm1.M())());
        
        type.TypeMetadataName = "asm1.t2000005";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm1,"x6000005");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function M()
        {
            
            M.init();
        };
    });
asm.Program = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000006",null);
        
        type.c1 = null;
        
        type.c2 = null;
        
        type.c3 = null;
        
        type.TypeMetadataName = "asm1.t2000006";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Program()
        {
            
            Program.init();
        };
    });
asm.entryPoint = asm.x6000006;
CILJS.declareAssembly("ValueTypeEquality.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=ValueTypeEquality.cs.ciljs.exe.js.map
