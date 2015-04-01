var asm1;(function (asm) 
{
    asm.FullName = "struct.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    
    /*static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    
    /* TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    
    /*static Point Point.get_zerop()*/
    asm.x600000b = function get_zerop() 
    {
        var loc0;
        var __pos__;
        var loc1;
        loc0 = new (asm1.Point())();
        __pos__ = 0x0;
        
        /*IL_00: nop  struct.cs:13:5*/
        
        
        /*IL_01: ldloca.s 0 */
        /*IL_03: ldc.i4.0  */
        /*IL_04: ldc.i4.0  */
        /*IL_05: call Void .ctor(System.Int32, System.Int32) */
        asm1.x600000a({
                'w': function (v) 
                {
                    loc0 = v;
                },
                'r': function () 
                {
                    return loc0;
                }
            },(0|0),(0|0));
        
        /*IL_0A: nop  */
        
        
        /*IL_0B: ldloca.s 0 */
        /*IL_0D: ldc.i4.0  */
        /*IL_0E: stfld Int32 z */
        loc0.z = (0|0);
        
        /*IL_13: ldloc.0  */
        /*IL_14: stloc.1  */
        loc1 = loc0;
        
        /*IL_17: ldloc.1  */
        /*IL_18: ret  */
        return loc1;
    };;
    
    /*static System.Int32 Point.struct_param(Point)*/
    asm.x600000c = function struct_param(arg0) 
    {
        var st_0B;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        ;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  struct.cs:19:5*/
                
                
                /*IL_01: ldarga.s 0 */
                /*IL_03: ldfld Int32 x */
                /*IL_08: ldarga.s 0 */
                /*IL_0A: ldfld Int32 y */
                /*IL_0F: bne.un.s IL_2D */
                
                if(BLR.unsigned_value(arg0.x) != BLR.unsigned_value(arg0.y)){
                    __pos__ = 0x2D;
                    continue;
                }
                
                /*IL_11: ldarga.s 0 */
                /*IL_13: ldfld Int32 y */
                /*IL_18: ldarga.s 0 */
                /*IL_1A: ldfld Int32 z */
                /*IL_1F: bne.un.s IL_2D */
                
                if(BLR.unsigned_value(arg0.y) != BLR.unsigned_value(arg0.z)){
                    __pos__ = 0x2D;
                    continue;
                }
                
                /*IL_21: ldarga.s 0 */
                /*IL_23: ldfld Int32 z */
                /*IL_28: ldc.i4.0  */
                /*IL_2A: ceq  */
                st_0B = ((arg0.z === (0|0))?(1):(0));
                
                /*IL_2B: br.s IL_2E */
                __pos__ = 0x2E;
                continue;
                case 0x2D:
                
                /*IL_2D: ldc.i4.0  */
                st_0B = (0|0);
                case 0x2E:
                
                /*IL_2E: nop  */
                
                
                /*IL_2F: stloc.1  */
                loc1 = st_0B;
                
                /*IL_30: ldloc.1  */
                /*IL_31: brtrue.s IL_37 */
                
                if(loc1){
                    __pos__ = 0x37;
                    continue;
                }
                
                /*IL_33: ldc.i4.1  */
                /*IL_34: stloc.0  */
                loc0 = (1|0);
                
                /*IL_35: br.s IL_53 */
                __pos__ = 0x53;
                continue;
                case 0x37:
                
                /*IL_37: ldarga.s 0 */
                /*IL_39: ldc.i4.1  */
                /*IL_3A: stfld Int32 x */
                arg0.x = (1|0);
                
                /*IL_3F: ldarga.s 0 */
                /*IL_41: ldc.i4.2  */
                /*IL_42: stfld Int32 y */
                arg0.y = (2|0);
                
                /*IL_47: ldarga.s 0 */
                /*IL_49: ldc.i4.3  */
                /*IL_4A: stfld Int32 z */
                arg0.z = (3|0);
                
                /*IL_4F: ldc.i4.0  */
                /*IL_50: stloc.0  */
                loc0 = (0|0);
                case 0x53:
                
                /*IL_53: ldloc.0  */
                /*IL_54: ret  */
                return loc0;
            }
        }
    };;
    
    /* Point..ctor(Int32,Int32)*/
    asm.x600000a = function _ctor(arg0, arg1, arg2) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: nop  struct.cs:7:5*/
        
        
        /*IL_01: ldarg.0  */
        /*IL_02: ldarg.1  */
        /*IL_03: stfld Int32 x */
        arg0.r().x = arg1;
        
        /*IL_08: ldarg.0  */
        /*IL_09: ldarg.2  */
        /*IL_0A: stfld Int32 y */
        arg0.r().y = arg2;
        
        /*IL_0F: ldarg.0  */
        /*IL_10: ldc.i4.5  */
        /*IL_11: stfld Int32 z */
        arg0.r().z = (5|0);
        
        /*IL_16: ret  struct.cs:11:5*/
        return ;
    };;
    
    /*static System.Int32 test.Main()*/
    asm.x600000d_init = function () 
    {
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
        var loc0;
        var st_42;
        var st_56;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc4;
        var loc3;
        var loc2;
        loc0 = new (asm1.Point())();
        ;
        ;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  struct.cs:33:5*/
                
                
                /*IL_01: ldloca.s 0 */
                /*IL_03: ldc.i4.s 10 */
                /*IL_05: ldc.i4.s 20 */
                /*IL_07: call Void .ctor(System.Int32, System.Int32) */
                asm1.x600000a({
                        'w': function (v) 
                        {
                            loc0 = v;
                        },
                        'r': function () 
                        {
                            return loc0;
                        }
                    },(10|0),(20|0));
                
                /*IL_0C: nop  */
                
                
                /*IL_0D: ldloc.0  */
                /*IL_0E: stloc.1  */
                loc1 = loc0;
                
                /*IL_0F: ldloca.s 1 */
                /*IL_11: ldfld Int32 x */
                /*IL_16: ldc.i4.s 10 */
                /*IL_19: ceq  */
                /*IL_1A: stloc.s 4 */
                loc4 = ((loc1.x === (10|0))?(1):(0));
                
                /*IL_1C: ldloc.s 4 */
                /*IL_1E: brtrue.s IL_27 */
                
                if(loc4){
                    __pos__ = 0x27;
                    continue;
                }
                
                /*IL_20: ldc.i4.1  */
                /*IL_21: stloc.3  */
                loc3 = (1|0);
                
                /*IL_22: br IL_164 */
                __pos__ = 0x164;
                continue;
                case 0x27:
                
                /*IL_27: ldloca.s 1 */
                /*IL_29: ldfld Int32 y */
                /*IL_2E: ldc.i4.s 20 */
                /*IL_31: ceq  */
                /*IL_32: stloc.s 4 */
                loc4 = ((loc1.y === (20|0))?(1):(0));
                
                /*IL_34: ldloc.s 4 */
                /*IL_36: brtrue.s IL_3F */
                
                if(loc4){
                    __pos__ = 0x3F;
                    continue;
                }
                
                /*IL_38: ldc.i4.2  */
                /*IL_39: stloc.3  */
                loc3 = (2|0);
                
                /*IL_3A: br IL_164 */
                __pos__ = 0x164;
                continue;
                case 0x3F:
                
                /*IL_3F: ldloca.s 1 */
                /*IL_41: ldfld Int32 z */
                /*IL_46: ldc.i4.5  */
                /*IL_48: ceq  */
                /*IL_49: stloc.s 4 */
                loc4 = ((loc1.z === (5|0))?(1):(0));
                
                /*IL_4B: ldloc.s 4 */
                /*IL_4D: brtrue.s IL_56 */
                
                if(loc4){
                    __pos__ = 0x56;
                    continue;
                }
                
                /*IL_4F: ldc.i4.3  */
                /*IL_50: stloc.3  */
                loc3 = (3|0);
                
                /*IL_51: br IL_164 */
                __pos__ = 0x164;
                continue;
                case 0x56:
                
                /*IL_56: ldloca.s 0 */
                /*IL_58: ldfld Int32 x */
                /*IL_5D: ldc.i4.s 10 */
                /*IL_60: ceq  */
                /*IL_61: stloc.s 4 */
                loc4 = ((loc0.x === (10|0))?(1):(0));
                
                /*IL_63: ldloc.s 4 */
                /*IL_65: brtrue.s IL_6E */
                
                if(loc4){
                    __pos__ = 0x6E;
                    continue;
                }
                
                /*IL_67: ldc.i4.4  */
                /*IL_68: stloc.3  */
                loc3 = (4|0);
                
                /*IL_69: br IL_164 */
                __pos__ = 0x164;
                continue;
                case 0x6E:
                
                /*IL_6E: ldloca.s 0 */
                /*IL_70: ldfld Int32 y */
                /*IL_75: ldc.i4.s 20 */
                /*IL_78: ceq  */
                /*IL_79: stloc.s 4 */
                loc4 = ((loc0.y === (20|0))?(1):(0));
                
                /*IL_7B: ldloc.s 4 */
                /*IL_7D: brtrue.s IL_86 */
                
                if(loc4){
                    __pos__ = 0x86;
                    continue;
                }
                
                /*IL_7F: ldc.i4.5  */
                /*IL_80: stloc.3  */
                loc3 = (5|0);
                
                /*IL_81: br IL_164 */
                __pos__ = 0x164;
                continue;
                case 0x86:
                
                /*IL_86: ldloca.s 0 */
                /*IL_88: ldfld Int32 z */
                /*IL_8D: ldc.i4.5  */
                /*IL_8F: ceq  */
                /*IL_90: stloc.s 4 */
                loc4 = ((loc0.z === (5|0))?(1):(0));
                
                /*IL_92: ldloc.s 4 */
                /*IL_94: brtrue.s IL_9D */
                
                if(loc4){
                    __pos__ = 0x9D;
                    continue;
                }
                
                /*IL_96: ldc.i4.6  */
                /*IL_97: stloc.3  */
                loc3 = (6|0);
                
                /*IL_98: br IL_164 */
                __pos__ = 0x164;
                continue;
                case 0x9D:
                
                /*IL_9D: ldloca.s 0 */
                /*IL_9F: ldc.i4.7  */
                /*IL_A0: stfld Int32 z */
                loc0.z = (7|0);
                
                /*IL_A5: ldloca.s 0 */
                /*IL_A7: ldfld Int32 z */
                /*IL_AC: ldc.i4.7  */
                /*IL_AE: ceq  */
                /*IL_AF: stloc.s 4 */
                loc4 = ((loc0.z === (7|0))?(1):(0));
                
                /*IL_B1: ldloc.s 4 */
                /*IL_B3: brtrue.s IL_BC */
                
                if(loc4){
                    __pos__ = 0xBC;
                    continue;
                }
                
                /*IL_B5: ldc.i4.7  */
                /*IL_B6: stloc.3  */
                loc3 = (7|0);
                
                /*IL_B7: br IL_164 */
                __pos__ = 0x164;
                continue;
                case 0xBC:
                
                /*IL_BC: ldloca.s 1 */
                /*IL_BE: ldfld Int32 x */
                /*IL_C3: ldc.i4.s 10 */
                /*IL_C6: ceq  */
                /*IL_C7: stloc.s 4 */
                loc4 = ((loc1.x === (10|0))?(1):(0));
                
                /*IL_C9: ldloc.s 4 */
                /*IL_CB: brtrue.s IL_D4 */
                
                if(loc4){
                    __pos__ = 0xD4;
                    continue;
                }
                
                /*IL_CD: ldc.i4.8  */
                /*IL_CE: stloc.3  */
                loc3 = (8|0);
                
                /*IL_CF: br IL_164 */
                __pos__ = 0x164;
                continue;
                case 0xD4:
                
                /*IL_D4: call Point get_zerop() */
                /*IL_D9: stloc.2  */
                loc2 = asm1.x600000b();
                
                /*IL_DA: ldloca.s 2 */
                /*IL_DC: ldfld Int32 x */
                /*IL_E1: ldloca.s 2 */
                /*IL_E3: ldfld Int32 y */
                /*IL_E8: bne.un.s IL_106 */
                
                if(BLR.unsigned_value(loc2.x) != BLR.unsigned_value(loc2.y)){
                    __pos__ = 0x106;
                    continue;
                }
                
                /*IL_EA: ldloca.s 2 */
                /*IL_EC: ldfld Int32 y */
                /*IL_F1: ldloca.s 2 */
                /*IL_F3: ldfld Int32 z */
                /*IL_F8: bne.un.s IL_106 */
                
                if(BLR.unsigned_value(loc2.y) != BLR.unsigned_value(loc2.z)){
                    __pos__ = 0x106;
                    continue;
                }
                
                /*IL_FA: ldloca.s 2 */
                /*IL_FC: ldfld Int32 z */
                /*IL_101: ldc.i4.0  */
                /*IL_103: ceq  */
                st_42 = ((loc2.z === (0|0))?(1):(0));
                
                /*IL_104: br.s IL_107 */
                __pos__ = 0x107;
                continue;
                case 0x106:
                
                /*IL_106: ldc.i4.0  */
                st_42 = (0|0);
                case 0x107:
                
                /*IL_107: nop  */
                
                
                /*IL_108: stloc.s 4 */
                loc4 = st_42;
                
                /*IL_10A: ldloc.s 4 */
                /*IL_10C: brtrue.s IL_113 */
                
                if(loc4){
                    __pos__ = 0x113;
                    continue;
                }
                
                /*IL_10E: ldc.i4.s 9 */
                /*IL_110: stloc.3  */
                loc3 = (9|0);
                
                /*IL_111: br.s IL_164 */
                __pos__ = 0x164;
                continue;
                case 0x113:
                
                /*IL_113: ldloc.2  */
                /*IL_114: call Int32 struct_param(Point) */
                /*IL_119: ldc.i4.0  */
                /*IL_11B: ceq  */
                /*IL_11C: stloc.s 4 */
                loc4 = ((asm1.x600000c(BLR.clone_value(loc2)) === (0|0))?(1):(0));
                
                /*IL_11E: ldloc.s 4 */
                /*IL_120: brtrue.s IL_127 */
                
                if(loc4){
                    __pos__ = 0x127;
                    continue;
                }
                
                /*IL_122: ldc.i4.s 10 */
                /*IL_124: stloc.3  */
                loc3 = (10|0);
                
                /*IL_125: br.s IL_164 */
                __pos__ = 0x164;
                continue;
                case 0x127:
                
                /*IL_127: ldloca.s 2 */
                /*IL_129: ldfld Int32 x */
                /*IL_12E: ldloca.s 2 */
                /*IL_130: ldfld Int32 y */
                /*IL_135: bne.un.s IL_153 */
                
                if(BLR.unsigned_value(loc2.x) != BLR.unsigned_value(loc2.y)){
                    __pos__ = 0x153;
                    continue;
                }
                
                /*IL_137: ldloca.s 2 */
                /*IL_139: ldfld Int32 y */
                /*IL_13E: ldloca.s 2 */
                /*IL_140: ldfld Int32 z */
                /*IL_145: bne.un.s IL_153 */
                
                if(BLR.unsigned_value(loc2.y) != BLR.unsigned_value(loc2.z)){
                    __pos__ = 0x153;
                    continue;
                }
                
                /*IL_147: ldloca.s 2 */
                /*IL_149: ldfld Int32 z */
                /*IL_14E: ldc.i4.0  */
                /*IL_150: ceq  */
                st_56 = ((loc2.z === (0|0))?(1):(0));
                
                /*IL_151: br.s IL_154 */
                __pos__ = 0x154;
                continue;
                case 0x153:
                
                /*IL_153: ldc.i4.0  */
                st_56 = (0|0);
                case 0x154:
                
                /*IL_154: nop  */
                
                
                /*IL_155: stloc.s 4 */
                loc4 = st_56;
                
                /*IL_157: ldloc.s 4 */
                /*IL_159: brtrue.s IL_160 */
                
                if(loc4){
                    __pos__ = 0x160;
                    continue;
                }
                
                /*IL_15B: ldc.i4.s 11 */
                /*IL_15D: stloc.3  */
                loc3 = (11|0);
                
                /*IL_15E: br.s IL_164 */
                __pos__ = 0x164;
                continue;
                case 0x160:
                
                /*IL_160: ldc.i4.0  */
                /*IL_161: stloc.3  */
                loc3 = (0|0);
                case 0x164:
                
                /*IL_164: ldloc.3  */
                /*IL_165: ret  */
                return loc3;
            }
        }
    };
    
    /* test..ctor()*/
    asm.x600000e = function _ctor(arg0) 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: ldarg.0  */
        /*IL_01: call Void .ctor() */
        
        
        /*IL_06: ret  */
        return ;
    };;
    asm.TestLog = BLR.declare_type("TestLog",
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
    asm.Point = BLR.declare_type("Point",
        [],
        function () 
        {
            return {};
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Point",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.x = 0;
            this.prototype.y = 0;
            this.prototype.z = 0;
        });
    asm.test = BLR.declare_type("test",
        [],
        function () 
        {
            return new ((asm0)["System.Object"]())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"test",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));