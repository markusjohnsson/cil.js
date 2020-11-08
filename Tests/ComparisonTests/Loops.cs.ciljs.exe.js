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
        var in_block_1;
        var loc1;
        var loc2;
        var loc3;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldc.i4.1  */
                /* IL_02: stloc.0  */
                loc0 = 1;
                /* IL_03: br.s IL_1F */
                __pos__ = 0x1F;
                continue;
                case 0x5:
                case 0x10:
                case 0x1A:
                case 0x1F:
                in_block_1 = true;
                
                if (__pos__ > 0x21){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x5){
                    __pos__ = 0x5;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x5:
                        /* IL_05: nop  */
                        /* IL_06: ldloc.0  */
                        /* IL_07: ldc.i4.2  */
                        /* IL_09: cgt  */
                        /* IL_0A: stloc.1  */
                        loc1 = ((loc0 > 2) ? 1 : 0);
                        /* IL_0B: ldloc.1  */
                        /* IL_0C: brfalse.s IL_10 */
                        
                        if ((!(loc1))){
                            __pos__ = 0x10;
                            continue;
                        }
                        /* IL_0E: br.s IL_23 */
                        __pos__ = 0x23;
                        continue;
                        case 0x10:
                        /* IL_10: ldloc.0  */
                        /* IL_11: ldc.i4.3  */
                        /* IL_13: cgt  */
                        /* IL_14: stloc.2  */
                        loc2 = ((loc0 > 3) ? 1 : 0);
                        /* IL_15: ldloc.2  */
                        /* IL_16: brfalse.s IL_1A */
                        
                        if ((!(loc2))){
                            __pos__ = 0x1A;
                            continue;
                        }
                        /* IL_18: br.s IL_23 */
                        __pos__ = 0x23;
                        continue;
                        case 0x1A:
                        /* IL_1A: ldloc.0  */
                        /* IL_1B: ldc.i4.1  */
                        /* IL_1C: add  */
                        /* IL_1D: stloc.0  */
                        loc0 = (loc0 + 1) | 0;
                        /* IL_1E: nop  */
                        case 0x1F:
                        /* IL_1F: ldc.i4.1  */
                        /* IL_20: stloc.3  */
                        loc3 = 1;
                        /* IL_21: br.s IL_05 */
                        __pos__ = 0x5;
                        continue;
                    }
                    break;
                }
                case 0x23:
                /* IL_23: ret  */
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
        var in_block_1;
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
                loc0 = 1;
                /* IL_03: br.s IL_29 */
                __pos__ = 0x29;
                continue;
                case 0x5:
                case 0x14:
                case 0x1E:
                case 0x28:
                case 0x29:
                in_block_1 = true;
                
                if (__pos__ > 0x2C){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x5){
                    __pos__ = 0x5;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x5:
                        /* IL_05: nop  */
                        /* IL_06: ldloc.0  */
                        /* IL_07: ldc.i4.1  */
                        /* IL_08: add  */
                        /* IL_09: stloc.0  */
                        loc0 = (loc0 + 1) | 0;
                        /* IL_0A: ldloc.0  */
                        /* IL_0B: ldc.i4.4  */
                        /* IL_0D: ceq  */
                        /* IL_0E: stloc.1  */
                        loc1 = ((loc0 === 4) ? 1 : 0);
                        /* IL_0F: ldloc.1  */
                        /* IL_10: brfalse.s IL_14 */
                        
                        if ((!(loc1))){
                            __pos__ = 0x14;
                            continue;
                        }
                        /* IL_12: br.s IL_2E */
                        __pos__ = 0x2E;
                        continue;
                        case 0x14:
                        /* IL_14: ldloc.0  */
                        /* IL_15: ldc.i4.2  */
                        /* IL_17: cgt  */
                        /* IL_18: stloc.2  */
                        loc2 = ((loc0 > 2) ? 1 : 0);
                        /* IL_19: ldloc.2  */
                        /* IL_1A: brfalse.s IL_1E */
                        
                        if ((!(loc2))){
                            __pos__ = 0x1E;
                            continue;
                        }
                        /* IL_1C: br.s IL_29 */
                        __pos__ = 0x29;
                        continue;
                        case 0x1E:
                        /* IL_1E: ldloc.0  */
                        /* IL_1F: ldc.i4.3  */
                        /* IL_21: cgt  */
                        /* IL_22: stloc.3  */
                        loc3 = ((loc0 > 3) ? 1 : 0);
                        /* IL_23: ldloc.3  */
                        /* IL_24: brfalse.s IL_28 */
                        
                        if ((!(loc3))){
                            __pos__ = 0x28;
                            continue;
                        }
                        /* IL_26: br.s IL_29 */
                        __pos__ = 0x29;
                        continue;
                        case 0x28:
                        /* IL_28: nop  */
                        case 0x29:
                        /* IL_29: ldc.i4.1  */
                        /* IL_2A: stloc.s 4 */
                        loc4 = 1;
                        /* IL_2C: br.s IL_05 */
                        __pos__ = 0x5;
                        continue;
                    }
                    break;
                }
                case 0x2E:
                /* IL_2E: ret  */
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
        var in_block_1;
        var loc2;
        var loc1;
        var in_block_2;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        var loc7;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldc.i4.1  */
                /* IL_02: stloc.0  */
                loc0 = 1;
                /* IL_03: br.s IL_46 */
                __pos__ = 0x46;
                continue;
                case 0x5:
                case 0x10:
                case 0x14:
                case 0x1F:
                case 0x2B:
                case 0x30:
                case 0x35:
                case 0x41:
                case 0x46:
                in_block_1 = true;
                
                if (__pos__ > 0x49){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x5){
                    __pos__ = 0x5;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x5:
                        /* IL_05: nop  */
                        /* IL_06: ldloc.0  */
                        /* IL_07: ldc.i4.2  */
                        /* IL_09: cgt  */
                        /* IL_0A: stloc.2  */
                        loc2 = ((loc0 > 2) ? 1 : 0);
                        /* IL_0B: ldloc.2  */
                        /* IL_0C: brfalse.s IL_10 */
                        
                        if ((!(loc2))){
                            __pos__ = 0x10;
                            continue;
                        }
                        /* IL_0E: br.s IL_4B */
                        __pos__ = 0x4B;
                        continue;
                        case 0x10:
                        /* IL_10: ldc.i4.1  */
                        /* IL_11: stloc.1  */
                        loc1 = 1;
                        /* IL_12: br.s IL_30 */
                        __pos__ = 0x30;
                        continue;
                        case 0x14:
                        case 0x1F:
                        case 0x2B:
                        case 0x30:
                        in_block_2 = true;
                        
                        if (__pos__ > 0x33){
                            in_block_2 = false;
                        }
                        
                        if (__pos__ < 0x14){
                            __pos__ = 0x14;
                        }
                        
                        while (in_block_2){
                            
                            switch (__pos__){
                                case 0x14:
                                /* IL_14: nop  */
                                /* IL_15: ldloc.1  */
                                /* IL_16: ldc.i4.2  */
                                /* IL_18: cgt  */
                                /* IL_19: stloc.3  */
                                loc3 = ((loc1 > 2) ? 1 : 0);
                                /* IL_1A: ldloc.3  */
                                /* IL_1B: brfalse.s IL_1F */
                                
                                if ((!(loc3))){
                                    __pos__ = 0x1F;
                                    continue;
                                }
                                /* IL_1D: br.s IL_35 */
                                __pos__ = 0x35;
                                continue;
                                case 0x1F:
                                /* IL_1F: ldloc.1  */
                                /* IL_20: ldc.i4.3  */
                                /* IL_22: cgt  */
                                /* IL_23: stloc.s 4 */
                                loc4 = ((loc1 > 3) ? 1 : 0);
                                /* IL_25: ldloc.s 4 */
                                /* IL_27: brfalse.s IL_2B */
                                
                                if ((!(loc4))){
                                    __pos__ = 0x2B;
                                    continue;
                                }
                                /* IL_29: br.s IL_35 */
                                __pos__ = 0x35;
                                continue;
                                case 0x2B:
                                /* IL_2B: ldloc.1  */
                                /* IL_2C: ldc.i4.1  */
                                /* IL_2D: add  */
                                /* IL_2E: stloc.1  */
                                loc1 = (loc1 + 1) | 0;
                                /* IL_2F: nop  */
                                case 0x30:
                                /* IL_30: ldc.i4.1  */
                                /* IL_31: stloc.s 5 */
                                loc5 = 1;
                                /* IL_33: br.s IL_14 */
                                __pos__ = 0x14;
                                continue;
                            }
                            break;
                        }
                        case 0x35:
                        /* IL_35: ldloc.0  */
                        /* IL_36: ldc.i4.3  */
                        /* IL_38: cgt  */
                        /* IL_39: stloc.s 6 */
                        loc6 = ((loc0 > 3) ? 1 : 0);
                        /* IL_3B: ldloc.s 6 */
                        /* IL_3D: brfalse.s IL_41 */
                        
                        if ((!(loc6))){
                            __pos__ = 0x41;
                            continue;
                        }
                        /* IL_3F: br.s IL_4B */
                        __pos__ = 0x4B;
                        continue;
                        case 0x41:
                        /* IL_41: ldloc.0  */
                        /* IL_42: ldc.i4.1  */
                        /* IL_43: add  */
                        /* IL_44: stloc.0  */
                        loc0 = (loc0 + 1) | 0;
                        /* IL_45: nop  */
                        case 0x46:
                        /* IL_46: ldc.i4.1  */
                        /* IL_47: stloc.s 7 */
                        loc7 = 1;
                        /* IL_49: br.s IL_05 */
                        __pos__ = 0x5;
                        continue;
                    }
                    break;
                }
                case 0x4B:
                /* IL_4B: ret  */
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
            return asm0["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
if (typeof module != "undefined"){
    module.exports = asm1;
}
//# sourceMappingURL=Loops.cs.ciljs.exe.js.map
