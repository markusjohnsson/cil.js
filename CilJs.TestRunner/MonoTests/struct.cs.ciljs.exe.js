var asm1; (function (asm)
{
    asm.FullName = "struct.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
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
    /* static Point Point.get_zerop()*/
    asm.x600000b = function get_zerop()
    {
        var loc0;
        var __pos__;
        loc0 = new (asm1.Point())();
        __pos__ = 0x0;
        /* IL_00: ldloca.s 0*/
        /* IL_02: ldc.i4.0 */
        /* IL_03: ldc.i4.0 */
        /* IL_04: call Void .ctor(System.Int32, System.Int32)*/
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
        /* IL_09: ldloca.s 0*/
        /* IL_0B: ldc.i4.0 */
        /* IL_0C: stfld Int32 z*/
        loc0.z = (0|0);
        /* IL_11: ldloc.0 */
        /* IL_12: ret */
        return loc0;
    };;
    /* static System.Int32 Point.struct_param(Point)*/
    asm.x600000c = function struct_param(arg0)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarga.s 0*/
                /* IL_02: ldfld Int32 x*/
                /* IL_07: ldarga.s 0*/
                /* IL_09: ldfld Int32 y*/
                /* IL_0E: bne.un.s IL_29*/
                
                if (CILJS.unsigned_value(arg0.x) != CILJS.unsigned_value(arg0.y)){
                    __pos__ = 0x29;
                    continue;
                }
                /* IL_10: ldarga.s 0*/
                /* IL_12: ldfld Int32 y*/
                /* IL_17: ldarga.s 0*/
                /* IL_19: ldfld Int32 z*/
                /* IL_1E: bne.un.s IL_29*/
                
                if (CILJS.unsigned_value(arg0.y) != CILJS.unsigned_value(arg0.z)){
                    __pos__ = 0x29;
                    continue;
                }
                /* IL_20: ldarga.s 0*/
                /* IL_22: ldfld Int32 z*/
                /* IL_27: brfalse.s IL_2B*/
                
                if ((!(arg0.z))){
                    __pos__ = 0x2B;
                    continue;
                }
                case 0x29:
                /* IL_29: ldc.i4.1 */
                /* IL_2A: ret */
                return (1|0);
                case 0x2B:
                /* IL_2B: ldarga.s 0*/
                /* IL_2D: ldc.i4.1 */
                /* IL_2E: stfld Int32 x*/
                arg0.x = (1|0);
                /* IL_33: ldarga.s 0*/
                /* IL_35: ldc.i4.2 */
                /* IL_36: stfld Int32 y*/
                arg0.y = (2|0);
                /* IL_3B: ldarga.s 0*/
                /* IL_3D: ldc.i4.3 */
                /* IL_3E: stfld Int32 z*/
                arg0.z = (3|0);
                /* IL_43: ldc.i4.0 */
                /* IL_44: ret */
                return (0|0);
            }
        }
    };;
    /*  Point..ctor(Int32,Int32)*/
    asm.x600000a = function _ctor(arg0,arg1,arg2)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Int32 x*/
        arg0.r().x = arg1;
        /* IL_07: ldarg.0 */
        /* IL_08: ldarg.2 */
        /* IL_09: stfld Int32 y*/
        arg0.r().y = arg2;
        /* IL_0E: ldarg.0 */
        /* IL_0F: ldc.i4.5 */
        /* IL_10: stfld Int32 z*/
        arg0.r().z = (5|0);
        /* IL_15: ret */
        return ;
    };;
    /* static System.Int32 test.Main()*/
    asm.x600000d_init = function ()
    {
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        CILJS.init_base_types();
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Main()
    {
        var loc0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc2;
        loc0 = new (asm1.Point())();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldloca.s 0*/
                /* IL_02: ldc.i4.s 10*/
                /* IL_04: ldc.i4.s 20*/
                /* IL_06: call Void .ctor(System.Int32, System.Int32)*/
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
                /* IL_0B: ldloc.0 */
                /* IL_0C: stloc.1 */
                loc1 = loc0;
                /* IL_0D: ldloca.s 1*/
                /* IL_0F: ldfld Int32 x*/
                /* IL_14: ldc.i4.s 10*/
                /* IL_16: beq.s IL_1A*/
                
                if (loc1.x === (10|0)){
                    __pos__ = 0x1A;
                    continue;
                }
                /* IL_18: ldc.i4.1 */
                /* IL_19: ret */
                return (1|0);
                case 0x1A:
                /* IL_1A: ldloca.s 1*/
                /* IL_1C: ldfld Int32 y*/
                /* IL_21: ldc.i4.s 20*/
                /* IL_23: beq.s IL_27*/
                
                if (loc1.y === (20|0)){
                    __pos__ = 0x27;
                    continue;
                }
                /* IL_25: ldc.i4.2 */
                /* IL_26: ret */
                return (2|0);
                case 0x27:
                /* IL_27: ldloca.s 1*/
                /* IL_29: ldfld Int32 z*/
                /* IL_2E: ldc.i4.5 */
                /* IL_2F: beq.s IL_33*/
                
                if (loc1.z === (5|0)){
                    __pos__ = 0x33;
                    continue;
                }
                /* IL_31: ldc.i4.3 */
                /* IL_32: ret */
                return (3|0);
                case 0x33:
                /* IL_33: ldloca.s 0*/
                /* IL_35: ldfld Int32 x*/
                /* IL_3A: ldc.i4.s 10*/
                /* IL_3C: beq.s IL_40*/
                
                if (loc0.x === (10|0)){
                    __pos__ = 0x40;
                    continue;
                }
                /* IL_3E: ldc.i4.4 */
                /* IL_3F: ret */
                return (4|0);
                case 0x40:
                /* IL_40: ldloca.s 0*/
                /* IL_42: ldfld Int32 y*/
                /* IL_47: ldc.i4.s 20*/
                /* IL_49: beq.s IL_4D*/
                
                if (loc0.y === (20|0)){
                    __pos__ = 0x4D;
                    continue;
                }
                /* IL_4B: ldc.i4.5 */
                /* IL_4C: ret */
                return (5|0);
                case 0x4D:
                /* IL_4D: ldloca.s 0*/
                /* IL_4F: ldfld Int32 z*/
                /* IL_54: ldc.i4.5 */
                /* IL_55: beq.s IL_59*/
                
                if (loc0.z === (5|0)){
                    __pos__ = 0x59;
                    continue;
                }
                /* IL_57: ldc.i4.6 */
                /* IL_58: ret */
                return (6|0);
                case 0x59:
                /* IL_59: ldloca.s 0*/
                /* IL_5B: ldc.i4.7 */
                /* IL_5C: stfld Int32 z*/
                loc0.z = (7|0);
                /* IL_61: ldloca.s 0*/
                /* IL_63: ldfld Int32 z*/
                /* IL_68: ldc.i4.7 */
                /* IL_69: beq.s IL_6D*/
                
                if (loc0.z === (7|0)){
                    __pos__ = 0x6D;
                    continue;
                }
                /* IL_6B: ldc.i4.7 */
                /* IL_6C: ret */
                return (7|0);
                case 0x6D:
                /* IL_6D: ldloca.s 1*/
                /* IL_6F: ldfld Int32 x*/
                /* IL_74: ldc.i4.s 10*/
                /* IL_76: beq.s IL_7A*/
                
                if (loc1.x === (10|0)){
                    __pos__ = 0x7A;
                    continue;
                }
                /* IL_78: ldc.i4.8 */
                /* IL_79: ret */
                return (8|0);
                case 0x7A:
                /* IL_7A: call Point get_zerop()*/
                /* IL_7F: stloc.2 */
                loc2 = asm1.x600000b();
                /* IL_80: ldloca.s 2*/
                /* IL_82: ldfld Int32 x*/
                /* IL_87: ldloca.s 2*/
                /* IL_89: ldfld Int32 y*/
                /* IL_8E: bne.un.s IL_A9*/
                
                if (CILJS.unsigned_value(loc2.x) != CILJS.unsigned_value(loc2.y)){
                    __pos__ = 0xA9;
                    continue;
                }
                /* IL_90: ldloca.s 2*/
                /* IL_92: ldfld Int32 y*/
                /* IL_97: ldloca.s 2*/
                /* IL_99: ldfld Int32 z*/
                /* IL_9E: bne.un.s IL_A9*/
                
                if (CILJS.unsigned_value(loc2.y) != CILJS.unsigned_value(loc2.z)){
                    __pos__ = 0xA9;
                    continue;
                }
                /* IL_A0: ldloca.s 2*/
                /* IL_A2: ldfld Int32 z*/
                /* IL_A7: brfalse.s IL_AC*/
                
                if ((!(loc2.z))){
                    __pos__ = 0xAC;
                    continue;
                }
                case 0xA9:
                /* IL_A9: ldc.i4.s 9*/
                /* IL_AB: ret */
                return (9|0);
                case 0xAC:
                /* IL_AC: ldloc.2 */
                /* IL_AD: call Int32 struct_param(Point)*/
                /* IL_B2: brfalse.s IL_B7*/
                
                if ((!(asm1.x600000c(CILJS.clone_value(loc2))))){
                    __pos__ = 0xB7;
                    continue;
                }
                /* IL_B4: ldc.i4.s 10*/
                /* IL_B6: ret */
                return (10|0);
                case 0xB7:
                /* IL_B7: ldloca.s 2*/
                /* IL_B9: ldfld Int32 x*/
                /* IL_BE: ldloca.s 2*/
                /* IL_C0: ldfld Int32 y*/
                /* IL_C5: bne.un.s IL_E0*/
                
                if (CILJS.unsigned_value(loc2.x) != CILJS.unsigned_value(loc2.y)){
                    __pos__ = 0xE0;
                    continue;
                }
                /* IL_C7: ldloca.s 2*/
                /* IL_C9: ldfld Int32 y*/
                /* IL_CE: ldloca.s 2*/
                /* IL_D0: ldfld Int32 z*/
                /* IL_D5: bne.un.s IL_E0*/
                
                if (CILJS.unsigned_value(loc2.y) != CILJS.unsigned_value(loc2.z)){
                    __pos__ = 0xE0;
                    continue;
                }
                /* IL_D7: ldloca.s 2*/
                /* IL_D9: ldfld Int32 z*/
                /* IL_DE: brfalse.s IL_E3*/
                
                if ((!(loc2.z))){
                    __pos__ = 0xE3;
                    continue;
                }
                case 0xE0:
                /* IL_E0: ldc.i4.s 11*/
                /* IL_E2: ret */
                return (11|0);
                case 0xE3:
                /* IL_E3: ldc.i4.0 */
                /* IL_E4: ret */
                return (0|0);
            }
        }
    };
    /*  test..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
            CILJS.init_type(this,asm,"Point",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.x = 0;
            this.prototype.y = 0;
            this.prototype.z = 0;
        });
    asm.test = CILJS.declare_type(
        "test",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"test",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
