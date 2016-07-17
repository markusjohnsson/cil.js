var asm1;(function (asm)
{
    asm.FullName = "Loops.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        CILJS.init_base_types();
        /* IL_00: nop  */
        /* IL_01: ret  */
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
                case 0x10:
                case 0x1A:
                case 0x21:
                in_block_1 = true;
                
                if (__pos__ > 0x24){
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
                    }
                    break;
                }
                
                if ((__pos__ > 0x21) || (__pos__ < 0x5)){
                    continue;
                }
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
                loc0 = (1|0);
                /* IL_03: br.s IL_21 */
                __pos__ = 0x21;
                continue;
                case 0x5:
                case 0x10:
                case 0x1A:
                case 0x21:
                in_block_1 = true;
                
                if (__pos__ > 0x24){
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
                        loc1 = ((loc0 > (2|0)) ? 1 : 0);
                        /* IL_0B: ldloc.1  */
                        /* IL_0C: brfalse.s IL_10 */
                        
                        if ((!(loc1))){
                            __pos__ = 0x10;
                            continue;
                        }
                        /* IL_0E: br.s IL_21 */
                        __pos__ = 0x21;
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
                        /* IL_18: br.s IL_21 */
                        __pos__ = 0x21;
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
                    }
                    break;
                }
                
                if ((__pos__ > 0x21) || (__pos__ < 0x5)){
                    continue;
                }
            }
        }
    };;
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
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
