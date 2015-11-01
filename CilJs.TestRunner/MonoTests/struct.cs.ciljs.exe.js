var asm1;(function (asm)
{
    asm.FullName = "struct.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static Point Point.get_zerop()*/
    asm.x6000002 = function get_zerop()
    {
        var loc0;
        var loc1;
        loc0 = new (asm1.Point())();
        /* IL_00: nop  */
        /* IL_01: ldloca.s 0 */
        /* IL_03: ldc.i4.0  */
        /* IL_04: ldc.i4.0  */
        /* IL_05: call Void .ctor(System.Int32, System.Int32) */
        asm1.x6000001({
                'w': function (v)
                {
                    loc0 = v;
                },
                'r': function ()
                {
                    return loc0;
                }
            },(0|0),(0|0));
        /* IL_0A: ldloca.s 0 */
        /* IL_0C: ldc.i4.0  */
        /* IL_0D: stfld Int32 z */
        loc0.z = (0|0);
        /* IL_12: ldloc.0  */
        /* IL_13: stloc.1  */
        loc1 = CILJS.clone_value(loc0);
        /* IL_16: ldloc.1  */
        /* IL_17: ret  */
        return loc1;
    };;
    /* static System.Int32 Point.struct_param(Point)*/
    asm.x6000003 = function struct_param(arg0)
    {
        var st_0B;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Int32 x */
                /* IL_07: ldarg.0  */
                /* IL_08: ldfld Int32 y */
                /* IL_0D: bne.un.s IL_28 */
                
                if (CILJS.unsigned_value(arg0.x) != CILJS.unsigned_value(arg0.y)){
                    __pos__ = 0x28;
                    continue;
                }
                /* IL_0F: ldarg.0  */
                /* IL_10: ldfld Int32 y */
                /* IL_15: ldarg.0  */
                /* IL_16: ldfld Int32 z */
                /* IL_1B: bne.un.s IL_28 */
                
                if (CILJS.unsigned_value(arg0.y) != CILJS.unsigned_value(arg0.z)){
                    __pos__ = 0x28;
                    continue;
                }
                /* IL_1D: ldarg.0  */
                /* IL_1E: ldfld Int32 z */
                /* IL_23: ldc.i4.0  */
                /* IL_25: cgt.un  */
                st_0B = ((CILJS.unsigned_value(arg0.z) > CILJS.unsigned_value((0|0))) ? (1) : (0));
                /* IL_26: br.s IL_29 */
                __pos__ = 0x29;
                continue;
                case 0x28:
                /* IL_28: ldc.i4.1  */
                st_0B = (1|0);
                case 0x29:
                /* IL_29: stloc.0  */
                loc0 = st_0B;
                /* IL_2A: ldloc.0  */
                /* IL_2B: brfalse.s IL_31 */
                
                if ((!(loc0))){
                    __pos__ = 0x31;
                    continue;
                }
                /* IL_2D: ldc.i4.1  */
                /* IL_2E: stloc.1  */
                loc1 = (1|0);
                /* IL_2F: br.s IL_4D */
                __pos__ = 0x4D;
                continue;
                case 0x31:
                /* IL_31: ldarga.s 0 */
                /* IL_33: ldc.i4.1  */
                /* IL_34: stfld Int32 x */
                arg0.x = (1|0);
                /* IL_39: ldarga.s 0 */
                /* IL_3B: ldc.i4.2  */
                /* IL_3C: stfld Int32 y */
                arg0.y = (2|0);
                /* IL_41: ldarga.s 0 */
                /* IL_43: ldc.i4.3  */
                /* IL_44: stfld Int32 z */
                arg0.z = (3|0);
                /* IL_49: ldc.i4.0  */
                /* IL_4A: stloc.1  */
                loc1 = (0|0);
                case 0x4D:
                /* IL_4D: ldloc.1  */
                /* IL_4E: ret  */
                return loc1;
            }
        }
    };;
    /*  Point..ctor(Int32,Int32)*/
    asm.x6000001 = function _ctor(arg0, arg1, arg2)
    {
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldarg.1  */
        /* IL_03: stfld Int32 x */
        arg0.r().x = arg1;
        /* IL_08: ldarg.0  */
        /* IL_09: ldarg.2  */
        /* IL_0A: stfld Int32 y */
        arg0.r().y = arg2;
        /* IL_0F: ldarg.0  */
        /* IL_10: ldc.i4.5  */
        /* IL_11: stfld Int32 z */
        arg0.r().z = (5|0);
        /* IL_16: ret  */
        return ;
    };;
    /* static System.Int32 test.Main()*/
    asm.x6000004 = function Main()
    {
        var loc0;
        var st_52;
        var st_66;
        var in_block_0;
        var __pos__;
        var loc1;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        var loc7;
        var loc8;
        var loc9;
        var loc10;
        var loc11;
        var loc2;
        var loc12;
        var loc13;
        var loc14;
        CILJS.init_base_types();
        loc0 = new (asm1.Point())();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldloca.s 0 */
                /* IL_03: ldc.i4.s 10 */
                /* IL_05: ldc.i4.s 20 */
                /* IL_07: call Void .ctor(System.Int32, System.Int32) */
                asm1.x6000001({
                        'w': function (v)
                        {
                            loc0 = v;
                        },
                        'r': function ()
                        {
                            return loc0;
                        }
                    },(10|0),(20|0));
                /* IL_0C: ldloc.0  */
                /* IL_0D: stloc.1  */
                loc1 = CILJS.clone_value(loc0);
                /* IL_0E: ldloc.1  */
                /* IL_0F: ldfld Int32 x */
                /* IL_14: ldc.i4.s 10 */
                /* IL_17: ceq  */
                /* IL_18: ldc.i4.0  */
                /* IL_1A: ceq  */
                /* IL_1B: stloc.3  */
                loc3 = ((((loc1.x === (10|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1C: ldloc.3  */
                /* IL_1D: brfalse.s IL_27 */
                
                if ((!(loc3))){
                    __pos__ = 0x27;
                    continue;
                }
                /* IL_1F: ldc.i4.1  */
                /* IL_20: stloc.s 4 */
                loc4 = (1|0);
                /* IL_22: br IL_171 */
                __pos__ = 0x171;
                continue;
                case 0x27:
                /* IL_27: ldloc.1  */
                /* IL_28: ldfld Int32 y */
                /* IL_2D: ldc.i4.s 20 */
                /* IL_30: ceq  */
                /* IL_31: ldc.i4.0  */
                /* IL_33: ceq  */
                /* IL_34: stloc.s 5 */
                loc5 = ((((loc1.y === (20|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_36: ldloc.s 5 */
                /* IL_38: brfalse.s IL_42 */
                
                if ((!(loc5))){
                    __pos__ = 0x42;
                    continue;
                }
                /* IL_3A: ldc.i4.2  */
                /* IL_3B: stloc.s 4 */
                loc4 = (2|0);
                /* IL_3D: br IL_171 */
                __pos__ = 0x171;
                continue;
                case 0x42:
                /* IL_42: ldloc.1  */
                /* IL_43: ldfld Int32 z */
                /* IL_48: ldc.i4.5  */
                /* IL_4A: ceq  */
                /* IL_4B: ldc.i4.0  */
                /* IL_4D: ceq  */
                /* IL_4E: stloc.s 6 */
                loc6 = ((((loc1.z === (5|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_50: ldloc.s 6 */
                /* IL_52: brfalse.s IL_5C */
                
                if ((!(loc6))){
                    __pos__ = 0x5C;
                    continue;
                }
                /* IL_54: ldc.i4.3  */
                /* IL_55: stloc.s 4 */
                loc4 = (3|0);
                /* IL_57: br IL_171 */
                __pos__ = 0x171;
                continue;
                case 0x5C:
                /* IL_5C: ldloc.0  */
                /* IL_5D: ldfld Int32 x */
                /* IL_62: ldc.i4.s 10 */
                /* IL_65: ceq  */
                /* IL_66: ldc.i4.0  */
                /* IL_68: ceq  */
                /* IL_69: stloc.s 7 */
                loc7 = ((((loc0.x === (10|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_6B: ldloc.s 7 */
                /* IL_6D: brfalse.s IL_77 */
                
                if ((!(loc7))){
                    __pos__ = 0x77;
                    continue;
                }
                /* IL_6F: ldc.i4.4  */
                /* IL_70: stloc.s 4 */
                loc4 = (4|0);
                /* IL_72: br IL_171 */
                __pos__ = 0x171;
                continue;
                case 0x77:
                /* IL_77: ldloc.0  */
                /* IL_78: ldfld Int32 y */
                /* IL_7D: ldc.i4.s 20 */
                /* IL_80: ceq  */
                /* IL_81: ldc.i4.0  */
                /* IL_83: ceq  */
                /* IL_84: stloc.s 8 */
                loc8 = ((((loc0.y === (20|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_86: ldloc.s 8 */
                /* IL_88: brfalse.s IL_92 */
                
                if ((!(loc8))){
                    __pos__ = 0x92;
                    continue;
                }
                /* IL_8A: ldc.i4.5  */
                /* IL_8B: stloc.s 4 */
                loc4 = (5|0);
                /* IL_8D: br IL_171 */
                __pos__ = 0x171;
                continue;
                case 0x92:
                /* IL_92: ldloc.0  */
                /* IL_93: ldfld Int32 z */
                /* IL_98: ldc.i4.5  */
                /* IL_9A: ceq  */
                /* IL_9B: ldc.i4.0  */
                /* IL_9D: ceq  */
                /* IL_9E: stloc.s 9 */
                loc9 = ((((loc0.z === (5|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_A0: ldloc.s 9 */
                /* IL_A2: brfalse.s IL_AC */
                
                if ((!(loc9))){
                    __pos__ = 0xAC;
                    continue;
                }
                /* IL_A4: ldc.i4.6  */
                /* IL_A5: stloc.s 4 */
                loc4 = (6|0);
                /* IL_A7: br IL_171 */
                __pos__ = 0x171;
                continue;
                case 0xAC:
                /* IL_AC: ldloca.s 0 */
                /* IL_AE: ldc.i4.7  */
                /* IL_AF: stfld Int32 z */
                loc0.z = (7|0);
                /* IL_B4: ldloc.0  */
                /* IL_B5: ldfld Int32 z */
                /* IL_BA: ldc.i4.7  */
                /* IL_BC: ceq  */
                /* IL_BD: ldc.i4.0  */
                /* IL_BF: ceq  */
                /* IL_C0: stloc.s 10 */
                loc10 = ((((loc0.z === (7|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_C2: ldloc.s 10 */
                /* IL_C4: brfalse.s IL_CE */
                
                if ((!(loc10))){
                    __pos__ = 0xCE;
                    continue;
                }
                /* IL_C6: ldc.i4.7  */
                /* IL_C7: stloc.s 4 */
                loc4 = (7|0);
                /* IL_C9: br IL_171 */
                __pos__ = 0x171;
                continue;
                case 0xCE:
                /* IL_CE: ldloc.1  */
                /* IL_CF: ldfld Int32 x */
                /* IL_D4: ldc.i4.s 10 */
                /* IL_D7: ceq  */
                /* IL_D8: ldc.i4.0  */
                /* IL_DA: ceq  */
                /* IL_DB: stloc.s 11 */
                loc11 = ((((loc1.x === (10|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_DD: ldloc.s 11 */
                /* IL_DF: brfalse.s IL_E9 */
                
                if ((!(loc11))){
                    __pos__ = 0xE9;
                    continue;
                }
                /* IL_E1: ldc.i4.8  */
                /* IL_E2: stloc.s 4 */
                loc4 = (8|0);
                /* IL_E4: br IL_171 */
                __pos__ = 0x171;
                continue;
                case 0xE9:
                /* IL_E9: call Point get_zerop() */
                /* IL_EE: stloc.2  */
                loc2 = CILJS.clone_value(asm1.x6000002());
                /* IL_EF: ldloc.2  */
                /* IL_F0: ldfld Int32 x */
                /* IL_F5: ldloc.2  */
                /* IL_F6: ldfld Int32 y */
                /* IL_FB: bne.un.s IL_116 */
                
                if (CILJS.unsigned_value(loc2.x) != CILJS.unsigned_value(loc2.y)){
                    __pos__ = 0x116;
                    continue;
                }
                /* IL_FD: ldloc.2  */
                /* IL_FE: ldfld Int32 y */
                /* IL_103: ldloc.2  */
                /* IL_104: ldfld Int32 z */
                /* IL_109: bne.un.s IL_116 */
                
                if (CILJS.unsigned_value(loc2.y) != CILJS.unsigned_value(loc2.z)){
                    __pos__ = 0x116;
                    continue;
                }
                /* IL_10B: ldloc.2  */
                /* IL_10C: ldfld Int32 z */
                /* IL_111: ldc.i4.0  */
                /* IL_113: cgt.un  */
                st_52 = ((CILJS.unsigned_value(loc2.z) > CILJS.unsigned_value((0|0))) ? (1) : (0));
                /* IL_114: br.s IL_117 */
                __pos__ = 0x117;
                continue;
                case 0x116:
                /* IL_116: ldc.i4.1  */
                st_52 = (1|0);
                case 0x117:
                /* IL_117: stloc.s 12 */
                loc12 = st_52;
                /* IL_119: ldloc.s 12 */
                /* IL_11B: brfalse.s IL_123 */
                
                if ((!(loc12))){
                    __pos__ = 0x123;
                    continue;
                }
                /* IL_11D: ldc.i4.s 9 */
                /* IL_11F: stloc.s 4 */
                loc4 = (9|0);
                /* IL_121: br.s IL_171 */
                __pos__ = 0x171;
                continue;
                case 0x123:
                /* IL_123: ldloc.2  */
                /* IL_124: call Int32 struct_param(Point) */
                /* IL_129: ldc.i4.0  */
                /* IL_12B: cgt.un  */
                /* IL_12C: stloc.s 13 */
                loc13 = ((CILJS.unsigned_value(asm1.x6000003(CILJS.clone_value(loc2))) > CILJS.unsigned_value((0|0))) ? (1) : (0));
                /* IL_12E: ldloc.s 13 */
                /* IL_130: brfalse.s IL_138 */
                
                if ((!(loc13))){
                    __pos__ = 0x138;
                    continue;
                }
                /* IL_132: ldc.i4.s 10 */
                /* IL_134: stloc.s 4 */
                loc4 = (10|0);
                /* IL_136: br.s IL_171 */
                __pos__ = 0x171;
                continue;
                case 0x138:
                /* IL_138: ldloc.2  */
                /* IL_139: ldfld Int32 x */
                /* IL_13E: ldloc.2  */
                /* IL_13F: ldfld Int32 y */
                /* IL_144: bne.un.s IL_15F */
                
                if (CILJS.unsigned_value(loc2.x) != CILJS.unsigned_value(loc2.y)){
                    __pos__ = 0x15F;
                    continue;
                }
                /* IL_146: ldloc.2  */
                /* IL_147: ldfld Int32 y */
                /* IL_14C: ldloc.2  */
                /* IL_14D: ldfld Int32 z */
                /* IL_152: bne.un.s IL_15F */
                
                if (CILJS.unsigned_value(loc2.y) != CILJS.unsigned_value(loc2.z)){
                    __pos__ = 0x15F;
                    continue;
                }
                /* IL_154: ldloc.2  */
                /* IL_155: ldfld Int32 z */
                /* IL_15A: ldc.i4.0  */
                /* IL_15C: cgt.un  */
                st_66 = ((CILJS.unsigned_value(loc2.z) > CILJS.unsigned_value((0|0))) ? (1) : (0));
                /* IL_15D: br.s IL_160 */
                __pos__ = 0x160;
                continue;
                case 0x15F:
                /* IL_15F: ldc.i4.1  */
                st_66 = (1|0);
                case 0x160:
                /* IL_160: stloc.s 14 */
                loc14 = st_66;
                /* IL_162: ldloc.s 14 */
                /* IL_164: brfalse.s IL_16C */
                
                if ((!(loc14))){
                    __pos__ = 0x16C;
                    continue;
                }
                /* IL_166: ldc.i4.s 11 */
                /* IL_168: stloc.s 4 */
                loc4 = (11|0);
                /* IL_16A: br.s IL_171 */
                __pos__ = 0x171;
                continue;
                case 0x16C:
                /* IL_16C: ldc.i4.0  */
                /* IL_16D: stloc.s 4 */
                loc4 = (0|0);
                case 0x171:
                /* IL_171: ldloc.s 4 */
                /* IL_173: ret  */
                return loc4;
            }
        }
    };;
    /*  test..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    asm.Point = CILJS.declare_type(
        "Point",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Point",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.x = 0;
            this.prototype.y = 0;
            this.prototype.z = 0;
        });
    asm.test = CILJS.declare_type(
        "test",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"test",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000004;
})(asm1 || (asm1 = {}));
