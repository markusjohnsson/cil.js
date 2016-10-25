var asm1;(function (asm)
{
    asm.FullName = "TypedArrays.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        CILJS.init_base_types();
        /* IL_00: nop  */
        /* IL_01: call Void TestUInt8() */
        asm1.x6000003();
        /* IL_06: nop  */
        /* IL_07: call Void TestInt8() */
        asm1.x6000002();
        /* IL_0C: nop  */
        /* IL_0D: call Void TestUInt16() */
        asm1.x6000005();
        /* IL_12: nop  */
        /* IL_13: call Void TestInt16() */
        asm1.x6000004();
        /* IL_18: nop  */
        /* IL_19: call Void TestUInt32() */
        asm1.x6000007();
        /* IL_1E: nop  */
        /* IL_1F: call Void TestInt32() */
        asm1.x6000006();
        /* IL_24: nop  */
        /* IL_25: ret  */
        return ;
    };;
    /* static System.Void Program.TestInt8()*/
    asm.x6000002 = function TestInt8()
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var in_block_1;
        var loc3;
        t0 = (asm0)["System.SByte"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.3  */
                /* IL_02: newarr System.SByte */
                /* IL_07: stloc.0  */
                loc0 = CILJS.new_array(t0,(3|0));
                /* IL_08: ldloc.0  */
                /* IL_09: ldc.i4.0  */
                /* IL_0A: ldc.i4.s 251 */
                /* IL_0C: stelem.i1  */
                (loc0.jsarr)[(0|0)] = (-5|0);
                /* IL_0D: ldloc.0  */
                /* IL_0E: ldc.i4.1  */
                /* IL_0F: ldc.i4.6  */
                /* IL_10: stelem.i1  */
                (loc0.jsarr)[(1|0)] = (6|0);
                /* IL_11: ldloc.0  */
                /* IL_12: ldc.i4.2  */
                /* IL_13: ldc.i4.7  */
                /* IL_14: stelem.i1  */
                (loc0.jsarr)[(2|0)] = (7|0);
                /* IL_15: nop  */
                
                /* IL_16: ldloc.0  */
                /* IL_17: stloc.1  */
                loc1 = loc0;
                /* IL_18: ldc.i4.0  */
                /* IL_19: stloc.2  */
                loc2 = (0|0);
                /* IL_1A: br.s IL_30 */
                __pos__ = 0x30;
                continue;
                case 0x1C:
                case 0x30:
                in_block_1 = true;
                
                if (__pos__ > 0x34){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x1C){
                    __pos__ = 0x1C;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x1C:
                        /* IL_1C: ldloc.1  */
                        /* IL_1D: ldloc.2  */
                        /* IL_1E: ldelem.i1  */
                        /* IL_1F: stloc.3  */
                        loc3 = (loc1.jsarr)[loc2];
                        /* IL_20: ldloc.3  */
                        /* IL_21: box System.SByte */
                        /* IL_26: call Void WriteLine(System.Object) */
                        asm0.x600005a(CILJS.make_box(loc3,t0));
                        /* IL_2B: nop  */
                        
                        /* IL_2C: ldloc.2  */
                        /* IL_2D: ldc.i4.1  */
                        /* IL_2E: add  */
                        /* IL_2F: stloc.2  */
                        loc2 = (loc2 + (1|0)) | (0|0);
                        case 0x30:
                        /* IL_30: ldloc.2  */
                        /* IL_31: ldloc.1  */
                        /* IL_32: ldlen  */
                        /* IL_33: conv.i4  */
                        /* IL_34: blt.s IL_1C */
                        
                        if (loc2 < (loc1.jsarr.length | (0|0))){
                            __pos__ = 0x1C;
                            continue;
                        }
                    }
                    break;
                }
                
                if ((__pos__ > 0x30) || (__pos__ < 0x1C)){
                    continue;
                }
                /* IL_36: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Program.TestUInt8()*/
    asm.x6000003 = function TestUInt8()
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var in_block_1;
        var loc3;
        t0 = (asm0)["System.Byte"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.3  */
                /* IL_02: newarr System.Byte */
                /* IL_07: stloc.0  */
                loc0 = CILJS.new_array(t0,(3|0));
                /* IL_08: ldloc.0  */
                /* IL_09: ldc.i4.0  */
                /* IL_0A: ldc.i4.5  */
                /* IL_0B: stelem.i1  */
                (loc0.jsarr)[(0|0)] = (5|0);
                /* IL_0C: ldloc.0  */
                /* IL_0D: ldc.i4.1  */
                /* IL_0E: ldc.i4.6  */
                /* IL_0F: stelem.i1  */
                (loc0.jsarr)[(1|0)] = (6|0);
                /* IL_10: ldloc.0  */
                /* IL_11: ldc.i4.2  */
                /* IL_12: ldc.i4.7  */
                /* IL_13: stelem.i1  */
                (loc0.jsarr)[(2|0)] = (7|0);
                /* IL_14: nop  */
                
                /* IL_15: ldloc.0  */
                /* IL_16: stloc.1  */
                loc1 = loc0;
                /* IL_17: ldc.i4.0  */
                /* IL_18: stloc.2  */
                loc2 = (0|0);
                /* IL_19: br.s IL_2F */
                __pos__ = 0x2F;
                continue;
                case 0x1B:
                case 0x2F:
                in_block_1 = true;
                
                if (__pos__ > 0x33){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x1B){
                    __pos__ = 0x1B;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x1B:
                        /* IL_1B: ldloc.1  */
                        /* IL_1C: ldloc.2  */
                        /* IL_1D: ldelem.u1  */
                        /* IL_1E: stloc.3  */
                        loc3 = (loc1.jsarr)[loc2];
                        /* IL_1F: ldloc.3  */
                        /* IL_20: box System.Byte */
                        /* IL_25: call Void WriteLine(System.Object) */
                        asm0.x600005a(CILJS.make_box(loc3,t0));
                        /* IL_2A: nop  */
                        
                        /* IL_2B: ldloc.2  */
                        /* IL_2C: ldc.i4.1  */
                        /* IL_2D: add  */
                        /* IL_2E: stloc.2  */
                        loc2 = (loc2 + (1|0)) | (0|0);
                        case 0x2F:
                        /* IL_2F: ldloc.2  */
                        /* IL_30: ldloc.1  */
                        /* IL_31: ldlen  */
                        /* IL_32: conv.i4  */
                        /* IL_33: blt.s IL_1B */
                        
                        if (loc2 < (loc1.jsarr.length | (0|0))){
                            __pos__ = 0x1B;
                            continue;
                        }
                    }
                    break;
                }
                
                if ((__pos__ > 0x2F) || (__pos__ < 0x1B)){
                    continue;
                }
                /* IL_35: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Program.TestInt16()*/
    asm.x6000004 = function TestInt16()
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var in_block_1;
        var loc3;
        t0 = (asm0)["System.Int16"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.3  */
                /* IL_02: newarr System.Int16 */
                /* IL_07: stloc.0  */
                loc0 = CILJS.new_array(t0,(3|0));
                /* IL_08: ldloc.0  */
                /* IL_09: ldc.i4.0  */
                /* IL_0A: ldc.i4.s 251 */
                /* IL_0C: stelem.i2  */
                (loc0.jsarr)[(0|0)] = (-5|0);
                /* IL_0D: ldloc.0  */
                /* IL_0E: ldc.i4.1  */
                /* IL_0F: ldc.i4.6  */
                /* IL_10: stelem.i2  */
                (loc0.jsarr)[(1|0)] = (6|0);
                /* IL_11: ldloc.0  */
                /* IL_12: ldc.i4.2  */
                /* IL_13: ldc.i4.7  */
                /* IL_14: stelem.i2  */
                (loc0.jsarr)[(2|0)] = (7|0);
                /* IL_15: nop  */
                
                /* IL_16: ldloc.0  */
                /* IL_17: stloc.1  */
                loc1 = loc0;
                /* IL_18: ldc.i4.0  */
                /* IL_19: stloc.2  */
                loc2 = (0|0);
                /* IL_1A: br.s IL_30 */
                __pos__ = 0x30;
                continue;
                case 0x1C:
                case 0x30:
                in_block_1 = true;
                
                if (__pos__ > 0x34){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x1C){
                    __pos__ = 0x1C;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x1C:
                        /* IL_1C: ldloc.1  */
                        /* IL_1D: ldloc.2  */
                        /* IL_1E: ldelem.i2  */
                        /* IL_1F: stloc.3  */
                        loc3 = (loc1.jsarr)[loc2];
                        /* IL_20: ldloc.3  */
                        /* IL_21: box System.Int16 */
                        /* IL_26: call Void WriteLine(System.Object) */
                        asm0.x600005a(CILJS.make_box(loc3,t0));
                        /* IL_2B: nop  */
                        
                        /* IL_2C: ldloc.2  */
                        /* IL_2D: ldc.i4.1  */
                        /* IL_2E: add  */
                        /* IL_2F: stloc.2  */
                        loc2 = (loc2 + (1|0)) | (0|0);
                        case 0x30:
                        /* IL_30: ldloc.2  */
                        /* IL_31: ldloc.1  */
                        /* IL_32: ldlen  */
                        /* IL_33: conv.i4  */
                        /* IL_34: blt.s IL_1C */
                        
                        if (loc2 < (loc1.jsarr.length | (0|0))){
                            __pos__ = 0x1C;
                            continue;
                        }
                    }
                    break;
                }
                
                if ((__pos__ > 0x30) || (__pos__ < 0x1C)){
                    continue;
                }
                /* IL_36: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Program.TestUInt16()*/
    asm.x6000005 = function TestUInt16()
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var in_block_1;
        var loc3;
        t0 = (asm0)["System.UInt16"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.3  */
                /* IL_02: newarr System.UInt16 */
                /* IL_07: stloc.0  */
                loc0 = CILJS.new_array(t0,(3|0));
                /* IL_08: ldloc.0  */
                /* IL_09: ldc.i4.0  */
                /* IL_0A: ldc.i4.5  */
                /* IL_0B: stelem.i2  */
                (loc0.jsarr)[(0|0)] = (5|0);
                /* IL_0C: ldloc.0  */
                /* IL_0D: ldc.i4.1  */
                /* IL_0E: ldc.i4.6  */
                /* IL_0F: stelem.i2  */
                (loc0.jsarr)[(1|0)] = (6|0);
                /* IL_10: ldloc.0  */
                /* IL_11: ldc.i4.2  */
                /* IL_12: ldc.i4.7  */
                /* IL_13: stelem.i2  */
                (loc0.jsarr)[(2|0)] = (7|0);
                /* IL_14: nop  */
                
                /* IL_15: ldloc.0  */
                /* IL_16: stloc.1  */
                loc1 = loc0;
                /* IL_17: ldc.i4.0  */
                /* IL_18: stloc.2  */
                loc2 = (0|0);
                /* IL_19: br.s IL_2F */
                __pos__ = 0x2F;
                continue;
                case 0x1B:
                case 0x2F:
                in_block_1 = true;
                
                if (__pos__ > 0x33){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x1B){
                    __pos__ = 0x1B;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x1B:
                        /* IL_1B: ldloc.1  */
                        /* IL_1C: ldloc.2  */
                        /* IL_1D: ldelem.u2  */
                        /* IL_1E: stloc.3  */
                        loc3 = (loc1.jsarr)[loc2];
                        /* IL_1F: ldloc.3  */
                        /* IL_20: box System.UInt16 */
                        /* IL_25: call Void WriteLine(System.Object) */
                        asm0.x600005a(CILJS.make_box(loc3,t0));
                        /* IL_2A: nop  */
                        
                        /* IL_2B: ldloc.2  */
                        /* IL_2C: ldc.i4.1  */
                        /* IL_2D: add  */
                        /* IL_2E: stloc.2  */
                        loc2 = (loc2 + (1|0)) | (0|0);
                        case 0x2F:
                        /* IL_2F: ldloc.2  */
                        /* IL_30: ldloc.1  */
                        /* IL_31: ldlen  */
                        /* IL_32: conv.i4  */
                        /* IL_33: blt.s IL_1B */
                        
                        if (loc2 < (loc1.jsarr.length | (0|0))){
                            __pos__ = 0x1B;
                            continue;
                        }
                    }
                    break;
                }
                
                if ((__pos__ > 0x2F) || (__pos__ < 0x1B)){
                    continue;
                }
                /* IL_35: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Program.TestInt32()*/
    asm.x6000006 = function TestInt32()
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var in_block_1;
        var loc3;
        t0 = (asm0)["System.Int32"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.3  */
                /* IL_02: newarr System.Int32 */
                /* IL_07: stloc.0  */
                loc0 = CILJS.new_array(t0,(3|0));
                /* IL_08: ldloc.0  */
                /* IL_09: ldc.i4.0  */
                /* IL_0A: ldc.i4.s 251 */
                /* IL_0C: stelem.i4  */
                (loc0.jsarr)[(0|0)] = (-5|0);
                /* IL_0D: ldloc.0  */
                /* IL_0E: ldc.i4.1  */
                /* IL_0F: ldc.i4.6  */
                /* IL_10: stelem.i4  */
                (loc0.jsarr)[(1|0)] = (6|0);
                /* IL_11: ldloc.0  */
                /* IL_12: ldc.i4.2  */
                /* IL_13: ldc.i4.7  */
                /* IL_14: stelem.i4  */
                (loc0.jsarr)[(2|0)] = (7|0);
                /* IL_15: nop  */
                
                /* IL_16: ldloc.0  */
                /* IL_17: stloc.1  */
                loc1 = loc0;
                /* IL_18: ldc.i4.0  */
                /* IL_19: stloc.2  */
                loc2 = (0|0);
                /* IL_1A: br.s IL_30 */
                __pos__ = 0x30;
                continue;
                case 0x1C:
                case 0x30:
                in_block_1 = true;
                
                if (__pos__ > 0x34){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x1C){
                    __pos__ = 0x1C;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x1C:
                        /* IL_1C: ldloc.1  */
                        /* IL_1D: ldloc.2  */
                        /* IL_1E: ldelem.i4  */
                        /* IL_1F: stloc.3  */
                        loc3 = (loc1.jsarr)[loc2];
                        /* IL_20: ldloc.3  */
                        /* IL_21: box System.Int32 */
                        /* IL_26: call Void WriteLine(System.Object) */
                        asm0.x600005a(CILJS.make_box(loc3,t0));
                        /* IL_2B: nop  */
                        
                        /* IL_2C: ldloc.2  */
                        /* IL_2D: ldc.i4.1  */
                        /* IL_2E: add  */
                        /* IL_2F: stloc.2  */
                        loc2 = (loc2 + (1|0)) | (0|0);
                        case 0x30:
                        /* IL_30: ldloc.2  */
                        /* IL_31: ldloc.1  */
                        /* IL_32: ldlen  */
                        /* IL_33: conv.i4  */
                        /* IL_34: blt.s IL_1C */
                        
                        if (loc2 < (loc1.jsarr.length | (0|0))){
                            __pos__ = 0x1C;
                            continue;
                        }
                    }
                    break;
                }
                
                if ((__pos__ > 0x30) || (__pos__ < 0x1C)){
                    continue;
                }
                /* IL_36: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Program.TestUInt32()*/
    asm.x6000007 = function TestUInt32()
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var in_block_1;
        var loc3;
        t0 = (asm0)["System.UInt32"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.3  */
                /* IL_02: newarr System.UInt32 */
                /* IL_07: stloc.0  */
                loc0 = CILJS.new_array(t0,(3|0));
                /* IL_08: ldloc.0  */
                /* IL_09: ldc.i4.0  */
                /* IL_0A: ldc.i4.5  */
                /* IL_0B: stelem.i4  */
                (loc0.jsarr)[(0|0)] = (5|0);
                /* IL_0C: ldloc.0  */
                /* IL_0D: ldc.i4.1  */
                /* IL_0E: ldc.i4.6  */
                /* IL_0F: stelem.i4  */
                (loc0.jsarr)[(1|0)] = (6|0);
                /* IL_10: ldloc.0  */
                /* IL_11: ldc.i4.2  */
                /* IL_12: ldc.i4.7  */
                /* IL_13: stelem.i4  */
                (loc0.jsarr)[(2|0)] = (7|0);
                /* IL_14: nop  */
                
                /* IL_15: ldloc.0  */
                /* IL_16: stloc.1  */
                loc1 = loc0;
                /* IL_17: ldc.i4.0  */
                /* IL_18: stloc.2  */
                loc2 = (0|0);
                /* IL_19: br.s IL_2F */
                __pos__ = 0x2F;
                continue;
                case 0x1B:
                case 0x2F:
                in_block_1 = true;
                
                if (__pos__ > 0x33){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x1B){
                    __pos__ = 0x1B;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x1B:
                        /* IL_1B: ldloc.1  */
                        /* IL_1C: ldloc.2  */
                        /* IL_1D: ldelem.u4  */
                        /* IL_1E: stloc.3  */
                        loc3 = (loc1.jsarr)[loc2];
                        /* IL_1F: ldloc.3  */
                        /* IL_20: box System.UInt32 */
                        /* IL_25: call Void WriteLine(System.Object) */
                        asm0.x600005a(CILJS.make_box(loc3,t0));
                        /* IL_2A: nop  */
                        
                        /* IL_2B: ldloc.2  */
                        /* IL_2C: ldc.i4.1  */
                        /* IL_2D: add  */
                        /* IL_2E: stloc.2  */
                        loc2 = (loc2 + (1|0)) | (0|0);
                        case 0x2F:
                        /* IL_2F: ldloc.2  */
                        /* IL_30: ldloc.1  */
                        /* IL_31: ldlen  */
                        /* IL_32: conv.i4  */
                        /* IL_33: blt.s IL_1B */
                        
                        if (loc2 < (loc1.jsarr.length | (0|0))){
                            __pos__ = 0x1B;
                            continue;
                        }
                    }
                    break;
                }
                
                if ((__pos__ > 0x2F) || (__pos__ < 0x1B)){
                    continue;
                }
                /* IL_35: ret  */
                return ;
            }
        }
    };;
    /*  Program..ctor()*/
    asm.x6000008 = function _ctor(arg0)
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
if (module){
    module.exports = asm1;
}
