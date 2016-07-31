var asm1;(function (asm)
{
    asm.FullName = "Loops.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        CILJS.init_base_types();
        /* IL_00: nop  */
        /* IL_01: call Void Break() */
        asm1.x6000002();
        /* IL_06: nop  */
        /* IL_07: call Void Continue() */
        asm1.x6000003();
        /* IL_0C: nop  */
        /* IL_0D: call Void Nested() */
        asm1.x6000004();
        /* IL_12: nop  */
        /* IL_13: ret  */
        return ;
    };;
    /* static System.Void Program.Break()*/
    asm.x6000002 = function Break()
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.1  */
                /* IL_02: stloc.0  */
                loc0 = (1|0);
                /* IL_03: br.s IL_21 */
                __pos__ = 0x21;
                continue;
                case 0x5:
                /* IL_05: nop  */
                
                /* IL_06: ldloc.0  */
                /* IL_07: ldc.i4.2  */
                /* IL_09: cgt  */
                /* IL_0A: stloc.1  */
                loc1 = ((loc0 > (2|0)) ? 1 : 0);
                /* IL_0B: ldloc.1  */
                /* IL_0C: brfalse.s IL_10 */
                
                if ((!(loc1))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0E: br.s IL_26 */
                __pos__ = 0x26;
                continue;
                case 0x10:
                /* IL_10: ldloc.0  */
                /* IL_11: ldc.i4.3  */
                /* IL_13: cgt  */
                /* IL_14: stloc.2  */
                loc2 = ((loc0 > (3|0)) ? 1 : 0);
                /* IL_15: ldloc.2  */
                /* IL_16: brfalse.s IL_1A */
                
                if ((!(loc2))){
                    __pos__ = 0x1A;
                    continue;
                }
                /* IL_18: br.s IL_26 */
                __pos__ = 0x26;
                continue;
                case 0x1A:
                /* IL_1A: ldloc.0  */
                /* IL_1B: stloc.3  */
                loc3 = loc0;
                /* IL_1C: ldloc.3  */
                /* IL_1D: ldc.i4.1  */
                /* IL_1E: add  */
                /* IL_1F: stloc.0  */
                loc0 = (loc3 + (1|0)) | (0|0);
                /* IL_20: nop  */
                
                case 0x21:
                /* IL_21: ldc.i4.1  */
                /* IL_22: stloc.s 4 */
                loc4 = (1|0);
                /* IL_24: br.s IL_05 */
                __pos__ = 0x5;
                continue;
                case 0x26:
                /* IL_26: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Program.Continue()*/
    asm.x6000003 = function Continue()
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.1  */
                /* IL_02: stloc.0  */
                loc0 = (1|0);
                /* IL_03: br.s IL_2D */
                __pos__ = 0x2D;
                continue;
                case 0x5:
                /* IL_05: nop  */
                
                /* IL_06: ldloc.0  */
                /* IL_07: stloc.1  */
                loc1 = loc0;
                /* IL_08: ldloc.1  */
                /* IL_09: ldc.i4.1  */
                /* IL_0A: add  */
                /* IL_0B: stloc.0  */
                loc0 = (loc1 + (1|0)) | (0|0);
                /* IL_0C: ldloc.0  */
                /* IL_0D: ldc.i4.4  */
                /* IL_0F: ceq  */
                /* IL_10: stloc.2  */
                loc2 = ((loc0 === (4|0)) ? 1 : 0);
                /* IL_11: ldloc.2  */
                /* IL_12: brfalse.s IL_16 */
                
                if ((!(loc2))){
                    __pos__ = 0x16;
                    continue;
                }
                /* IL_14: br.s IL_32 */
                __pos__ = 0x32;
                continue;
                case 0x16:
                /* IL_16: ldloc.0  */
                /* IL_17: ldc.i4.2  */
                /* IL_19: cgt  */
                /* IL_1A: stloc.3  */
                loc3 = ((loc0 > (2|0)) ? 1 : 0);
                /* IL_1B: ldloc.3  */
                /* IL_1C: brfalse.s IL_20 */
                
                if ((!(loc3))){
                    __pos__ = 0x20;
                    continue;
                }
                /* IL_1E: br.s IL_2D */
                __pos__ = 0x2D;
                continue;
                case 0x20:
                /* IL_20: ldloc.0  */
                /* IL_21: ldc.i4.3  */
                /* IL_23: cgt  */
                /* IL_24: stloc.s 4 */
                loc4 = ((loc0 > (3|0)) ? 1 : 0);
                /* IL_26: ldloc.s 4 */
                /* IL_28: brfalse.s IL_2C */
                
                if ((!(loc4))){
                    __pos__ = 0x2C;
                    continue;
                }
                /* IL_2A: br.s IL_2D */
                __pos__ = 0x2D;
                continue;
                case 0x2C:
                /* IL_2C: nop  */
                
                case 0x2D:
                /* IL_2D: ldc.i4.1  */
                /* IL_2E: stloc.s 5 */
                loc5 = (1|0);
                /* IL_30: br.s IL_05 */
                __pos__ = 0x5;
                continue;
                case 0x32:
                /* IL_32: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Program.Nested()*/
    asm.x6000004 = function Nested()
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc2;
        var loc1;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        var loc7;
        var loc8;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.1  */
                /* IL_02: stloc.0  */
                loc0 = (1|0);
                /* IL_03: br.s IL_4E */
                __pos__ = 0x4E;
                continue;
                case 0x5:
                /* IL_05: nop  */
                
                /* IL_06: ldloc.0  */
                /* IL_07: ldc.i4.2  */
                /* IL_09: cgt  */
                /* IL_0A: stloc.2  */
                loc2 = ((loc0 > (2|0)) ? 1 : 0);
                /* IL_0B: ldloc.2  */
                /* IL_0C: brfalse.s IL_10 */
                
                if ((!(loc2))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0E: br.s IL_53 */
                __pos__ = 0x53;
                continue;
                case 0x10:
                /* IL_10: ldc.i4.1  */
                /* IL_11: stloc.1  */
                loc1 = (1|0);
                /* IL_12: br.s IL_34 */
                __pos__ = 0x34;
                continue;
                case 0x14:
                /* IL_14: nop  */
                
                /* IL_15: ldloc.1  */
                /* IL_16: ldc.i4.2  */
                /* IL_18: cgt  */
                /* IL_19: stloc.3  */
                loc3 = ((loc1 > (2|0)) ? 1 : 0);
                /* IL_1A: ldloc.3  */
                /* IL_1B: brfalse.s IL_1F */
                
                if ((!(loc3))){
                    __pos__ = 0x1F;
                    continue;
                }
                /* IL_1D: br.s IL_39 */
                __pos__ = 0x39;
                continue;
                case 0x1F:
                /* IL_1F: ldloc.1  */
                /* IL_20: ldc.i4.3  */
                /* IL_22: cgt  */
                /* IL_23: stloc.s 4 */
                loc4 = ((loc1 > (3|0)) ? 1 : 0);
                /* IL_25: ldloc.s 4 */
                /* IL_27: brfalse.s IL_2B */
                
                if ((!(loc4))){
                    __pos__ = 0x2B;
                    continue;
                }
                /* IL_29: br.s IL_39 */
                __pos__ = 0x39;
                continue;
                case 0x2B:
                /* IL_2B: ldloc.1  */
                /* IL_2C: stloc.s 5 */
                loc5 = loc1;
                /* IL_2E: ldloc.s 5 */
                /* IL_30: ldc.i4.1  */
                /* IL_31: add  */
                /* IL_32: stloc.1  */
                loc1 = (loc5 + (1|0)) | (0|0);
                /* IL_33: nop  */
                
                case 0x34:
                /* IL_34: ldc.i4.1  */
                /* IL_35: stloc.s 6 */
                loc6 = (1|0);
                /* IL_37: br.s IL_14 */
                __pos__ = 0x14;
                continue;
                case 0x39:
                /* IL_39: ldloc.0  */
                /* IL_3A: ldc.i4.3  */
                /* IL_3C: cgt  */
                /* IL_3D: stloc.s 7 */
                loc7 = ((loc0 > (3|0)) ? 1 : 0);
                /* IL_3F: ldloc.s 7 */
                /* IL_41: brfalse.s IL_45 */
                
                if ((!(loc7))){
                    __pos__ = 0x45;
                    continue;
                }
                /* IL_43: br.s IL_53 */
                __pos__ = 0x53;
                continue;
                case 0x45:
                /* IL_45: ldloc.0  */
                /* IL_46: stloc.s 5 */
                loc5 = loc0;
                /* IL_48: ldloc.s 5 */
                /* IL_4A: ldc.i4.1  */
                /* IL_4B: add  */
                /* IL_4C: stloc.0  */
                loc0 = (loc5 + (1|0)) | (0|0);
                /* IL_4D: nop  */
                
                case 0x4E:
                /* IL_4E: ldc.i4.1  */
                /* IL_4F: stloc.s 8 */
                loc8 = (1|0);
                /* IL_51: br.s IL_05 */
                __pos__ = 0x5;
                continue;
                case 0x53:
                /* IL_53: ret  */
                return ;
            }
        }
    };;
    /*  Program..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
