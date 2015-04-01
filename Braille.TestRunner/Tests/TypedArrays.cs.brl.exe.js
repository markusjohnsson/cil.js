var asm1;(function (asm) 
{
    asm.FullName = "TypedArrays.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    
    /*static System.Void Program.Main()*/
    asm.x600000a_init = function () 
    {
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function () 
    {
        BLR.init_base_types();
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main() 
    {
        var __pos__;
        __pos__ = 0x0;
        
        /*IL_00: nop  TypedArrays.cs:4:5*/
        
        
        /*IL_01: call Void TestUInt8() TypedArrays.cs:5:9*/
        asm1.x600000c();
        
        /*IL_06: nop  */
        
        
        /*IL_07: call Void TestInt8() TypedArrays.cs:6:9*/
        asm1.x600000b();
        
        /*IL_0C: nop  */
        
        
        /*IL_0D: call Void TestUInt16() TypedArrays.cs:7:9*/
        asm1.x600000e();
        
        /*IL_12: nop  */
        
        
        /*IL_13: call Void TestInt16() TypedArrays.cs:8:9*/
        asm1.x600000d();
        
        /*IL_18: nop  */
        
        
        /*IL_19: call Void TestUInt32() TypedArrays.cs:9:9*/
        asm1.x6000010();
        
        /*IL_1E: nop  */
        
        
        /*IL_1F: call Void TestInt32() TypedArrays.cs:10:9*/
        asm1.x600000f();
        
        /*IL_24: nop  */
        
        
        /*IL_25: ret  TypedArrays.cs:12:5*/
        return ;
    };
    
    /*static System.Void Program.TestInt8()*/
    asm.x600000b = function TestInt8() 
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc3;
        var loc1;
        var loc4;
        t0 = (asm0)["System.SByte"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  TypedArrays.cs:15:5*/
                
                
                /*IL_01: ldc.i4.3  */
                /*IL_02: newarr System.SByte */
                /*IL_07: stloc.0  */
                loc0 = BLR.new_array(t0,(3|0));
                
                /*IL_08: ldloc.0  */
                /*IL_09: ldc.i4.0  */
                /*IL_0A: ldc.i4.s 251 */
                /*IL_0C: stelem.i1  */
                (loc0.jsarr)[(0|0)] = (-5|0);
                
                /*IL_0D: ldloc.0  */
                /*IL_0E: ldc.i4.1  */
                /*IL_0F: ldc.i4.6  */
                /*IL_10: stelem.i1  */
                (loc0.jsarr)[(1|0)] = (6|0);
                
                /*IL_11: ldloc.0  */
                /*IL_12: ldc.i4.2  */
                /*IL_13: ldc.i4.7  */
                /*IL_14: stelem.i1  */
                (loc0.jsarr)[(2|0)] = (7|0);
                
                /*IL_15: nop  TypedArrays.cs:20:9*/
                
                
                /*IL_16: ldloc.0  */
                /*IL_17: stloc.2  */
                loc2 = loc0;
                
                /*IL_18: ldc.i4.0  */
                /*IL_19: stloc.3  */
                loc3 = (0|0);
                
                /*IL_1A: br.s IL_30 */
                __pos__ = 0x30;
                continue;
                case 0x1C:
                
                /*IL_1C: ldloc.2  */
                /*IL_1D: ldloc.3  */
                /*IL_1E: ldelem.i1  */
                /*IL_1F: stloc.1  */
                loc1 = (loc2.jsarr)[loc3];
                
                /*IL_20: ldloc.1  */
                /*IL_21: box System.SByte */
                /*IL_26: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': loc1,
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    });
                
                /*IL_2B: nop  */
                
                
                /*IL_2C: ldloc.3  */
                /*IL_2D: ldc.i4.1  */
                /*IL_2E: add  */
                /*IL_2F: stloc.3  */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x30:
                
                /*IL_30: ldloc.3  */
                /*IL_31: ldloc.2  */
                /*IL_32: ldlen  */
                /*IL_33: conv.i4  */
                /*IL_35: clt  */
                /*IL_36: stloc.s 4 */
                loc4 = ((loc3 < (loc2.jsarr.length | (0|0)))?(1):(0));
                
                /*IL_38: ldloc.s 4 */
                /*IL_3A: brtrue.s IL_1C */
                
                if(loc4){
                    __pos__ = 0x1C;
                    continue;
                }
                
                /*IL_3C: ret  TypedArrays.cs:22:5*/
                return ;
            }
        }
    };;
    
    /*static System.Void Program.TestUInt8()*/
    asm.x600000c = function TestUInt8() 
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc3;
        var loc1;
        var loc4;
        t0 = (asm0)["System.Byte"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  TypedArrays.cs:25:5*/
                
                
                /*IL_01: ldc.i4.3  */
                /*IL_02: newarr System.Byte */
                /*IL_07: stloc.0  */
                loc0 = BLR.new_array(t0,(3|0));
                
                /*IL_08: ldloc.0  */
                /*IL_09: ldc.i4.0  */
                /*IL_0A: ldc.i4.5  */
                /*IL_0B: stelem.i1  */
                (loc0.jsarr)[(0|0)] = (5|0);
                
                /*IL_0C: ldloc.0  */
                /*IL_0D: ldc.i4.1  */
                /*IL_0E: ldc.i4.6  */
                /*IL_0F: stelem.i1  */
                (loc0.jsarr)[(1|0)] = (6|0);
                
                /*IL_10: ldloc.0  */
                /*IL_11: ldc.i4.2  */
                /*IL_12: ldc.i4.7  */
                /*IL_13: stelem.i1  */
                (loc0.jsarr)[(2|0)] = (7|0);
                
                /*IL_14: nop  TypedArrays.cs:30:9*/
                
                
                /*IL_15: ldloc.0  */
                /*IL_16: stloc.2  */
                loc2 = loc0;
                
                /*IL_17: ldc.i4.0  */
                /*IL_18: stloc.3  */
                loc3 = (0|0);
                
                /*IL_19: br.s IL_2F */
                __pos__ = 0x2F;
                continue;
                case 0x1B:
                
                /*IL_1B: ldloc.2  */
                /*IL_1C: ldloc.3  */
                /*IL_1D: ldelem.u1  */
                /*IL_1E: stloc.1  */
                loc1 = (loc2.jsarr)[loc3];
                
                /*IL_1F: ldloc.1  */
                /*IL_20: box System.Byte */
                /*IL_25: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': loc1,
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    });
                
                /*IL_2A: nop  */
                
                
                /*IL_2B: ldloc.3  */
                /*IL_2C: ldc.i4.1  */
                /*IL_2D: add  */
                /*IL_2E: stloc.3  */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x2F:
                
                /*IL_2F: ldloc.3  */
                /*IL_30: ldloc.2  */
                /*IL_31: ldlen  */
                /*IL_32: conv.i4  */
                /*IL_34: clt  */
                /*IL_35: stloc.s 4 */
                loc4 = ((loc3 < (loc2.jsarr.length | (0|0)))?(1):(0));
                
                /*IL_37: ldloc.s 4 */
                /*IL_39: brtrue.s IL_1B */
                
                if(loc4){
                    __pos__ = 0x1B;
                    continue;
                }
                
                /*IL_3B: ret  TypedArrays.cs:32:5*/
                return ;
            }
        }
    };;
    
    /*static System.Void Program.TestInt16()*/
    asm.x600000d = function TestInt16() 
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc3;
        var loc1;
        var loc4;
        t0 = (asm0)["System.Int16"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  TypedArrays.cs:35:5*/
                
                
                /*IL_01: ldc.i4.3  */
                /*IL_02: newarr System.Int16 */
                /*IL_07: stloc.0  */
                loc0 = BLR.new_array(t0,(3|0));
                
                /*IL_08: ldloc.0  */
                /*IL_09: ldc.i4.0  */
                /*IL_0A: ldc.i4.s 251 */
                /*IL_0C: stelem.i2  */
                (loc0.jsarr)[(0|0)] = (-5|0);
                
                /*IL_0D: ldloc.0  */
                /*IL_0E: ldc.i4.1  */
                /*IL_0F: ldc.i4.6  */
                /*IL_10: stelem.i2  */
                (loc0.jsarr)[(1|0)] = (6|0);
                
                /*IL_11: ldloc.0  */
                /*IL_12: ldc.i4.2  */
                /*IL_13: ldc.i4.7  */
                /*IL_14: stelem.i2  */
                (loc0.jsarr)[(2|0)] = (7|0);
                
                /*IL_15: nop  TypedArrays.cs:40:9*/
                
                
                /*IL_16: ldloc.0  */
                /*IL_17: stloc.2  */
                loc2 = loc0;
                
                /*IL_18: ldc.i4.0  */
                /*IL_19: stloc.3  */
                loc3 = (0|0);
                
                /*IL_1A: br.s IL_30 */
                __pos__ = 0x30;
                continue;
                case 0x1C:
                
                /*IL_1C: ldloc.2  */
                /*IL_1D: ldloc.3  */
                /*IL_1E: ldelem.i2  */
                /*IL_1F: stloc.1  */
                loc1 = (loc2.jsarr)[loc3];
                
                /*IL_20: ldloc.1  */
                /*IL_21: box System.Int16 */
                /*IL_26: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': loc1,
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    });
                
                /*IL_2B: nop  */
                
                
                /*IL_2C: ldloc.3  */
                /*IL_2D: ldc.i4.1  */
                /*IL_2E: add  */
                /*IL_2F: stloc.3  */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x30:
                
                /*IL_30: ldloc.3  */
                /*IL_31: ldloc.2  */
                /*IL_32: ldlen  */
                /*IL_33: conv.i4  */
                /*IL_35: clt  */
                /*IL_36: stloc.s 4 */
                loc4 = ((loc3 < (loc2.jsarr.length | (0|0)))?(1):(0));
                
                /*IL_38: ldloc.s 4 */
                /*IL_3A: brtrue.s IL_1C */
                
                if(loc4){
                    __pos__ = 0x1C;
                    continue;
                }
                
                /*IL_3C: ret  TypedArrays.cs:42:5*/
                return ;
            }
        }
    };;
    
    /*static System.Void Program.TestUInt16()*/
    asm.x600000e = function TestUInt16() 
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc3;
        var loc1;
        var loc4;
        t0 = (asm0)["System.UInt16"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  TypedArrays.cs:45:5*/
                
                
                /*IL_01: ldc.i4.3  */
                /*IL_02: newarr System.UInt16 */
                /*IL_07: stloc.0  */
                loc0 = BLR.new_array(t0,(3|0));
                
                /*IL_08: ldloc.0  */
                /*IL_09: ldc.i4.0  */
                /*IL_0A: ldc.i4.5  */
                /*IL_0B: stelem.i2  */
                (loc0.jsarr)[(0|0)] = (5|0);
                
                /*IL_0C: ldloc.0  */
                /*IL_0D: ldc.i4.1  */
                /*IL_0E: ldc.i4.6  */
                /*IL_0F: stelem.i2  */
                (loc0.jsarr)[(1|0)] = (6|0);
                
                /*IL_10: ldloc.0  */
                /*IL_11: ldc.i4.2  */
                /*IL_12: ldc.i4.7  */
                /*IL_13: stelem.i2  */
                (loc0.jsarr)[(2|0)] = (7|0);
                
                /*IL_14: nop  TypedArrays.cs:50:9*/
                
                
                /*IL_15: ldloc.0  */
                /*IL_16: stloc.2  */
                loc2 = loc0;
                
                /*IL_17: ldc.i4.0  */
                /*IL_18: stloc.3  */
                loc3 = (0|0);
                
                /*IL_19: br.s IL_2F */
                __pos__ = 0x2F;
                continue;
                case 0x1B:
                
                /*IL_1B: ldloc.2  */
                /*IL_1C: ldloc.3  */
                /*IL_1D: ldelem.u2  */
                /*IL_1E: stloc.1  */
                loc1 = (loc2.jsarr)[loc3];
                
                /*IL_1F: ldloc.1  */
                /*IL_20: box System.UInt16 */
                /*IL_25: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': loc1,
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    });
                
                /*IL_2A: nop  */
                
                
                /*IL_2B: ldloc.3  */
                /*IL_2C: ldc.i4.1  */
                /*IL_2D: add  */
                /*IL_2E: stloc.3  */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x2F:
                
                /*IL_2F: ldloc.3  */
                /*IL_30: ldloc.2  */
                /*IL_31: ldlen  */
                /*IL_32: conv.i4  */
                /*IL_34: clt  */
                /*IL_35: stloc.s 4 */
                loc4 = ((loc3 < (loc2.jsarr.length | (0|0)))?(1):(0));
                
                /*IL_37: ldloc.s 4 */
                /*IL_39: brtrue.s IL_1B */
                
                if(loc4){
                    __pos__ = 0x1B;
                    continue;
                }
                
                /*IL_3B: ret  TypedArrays.cs:52:5*/
                return ;
            }
        }
    };;
    
    /*static System.Void Program.TestInt32()*/
    asm.x600000f = function TestInt32() 
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc3;
        var loc1;
        var loc4;
        t0 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  TypedArrays.cs:55:5*/
                
                
                /*IL_01: ldc.i4.3  */
                /*IL_02: newarr System.Int32 */
                /*IL_07: stloc.0  */
                loc0 = BLR.new_array(t0,(3|0));
                
                /*IL_08: ldloc.0  */
                /*IL_09: ldc.i4.0  */
                /*IL_0A: ldc.i4.s 251 */
                /*IL_0C: stelem.i4  */
                (loc0.jsarr)[(0|0)] = (-5|0);
                
                /*IL_0D: ldloc.0  */
                /*IL_0E: ldc.i4.1  */
                /*IL_0F: ldc.i4.6  */
                /*IL_10: stelem.i4  */
                (loc0.jsarr)[(1|0)] = (6|0);
                
                /*IL_11: ldloc.0  */
                /*IL_12: ldc.i4.2  */
                /*IL_13: ldc.i4.7  */
                /*IL_14: stelem.i4  */
                (loc0.jsarr)[(2|0)] = (7|0);
                
                /*IL_15: nop  TypedArrays.cs:60:9*/
                
                
                /*IL_16: ldloc.0  */
                /*IL_17: stloc.2  */
                loc2 = loc0;
                
                /*IL_18: ldc.i4.0  */
                /*IL_19: stloc.3  */
                loc3 = (0|0);
                
                /*IL_1A: br.s IL_30 */
                __pos__ = 0x30;
                continue;
                case 0x1C:
                
                /*IL_1C: ldloc.2  */
                /*IL_1D: ldloc.3  */
                /*IL_1E: ldelem.i4  */
                /*IL_1F: stloc.1  */
                loc1 = (loc2.jsarr)[loc3];
                
                /*IL_20: ldloc.1  */
                /*IL_21: box System.Int32 */
                /*IL_26: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': loc1,
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    });
                
                /*IL_2B: nop  */
                
                
                /*IL_2C: ldloc.3  */
                /*IL_2D: ldc.i4.1  */
                /*IL_2E: add  */
                /*IL_2F: stloc.3  */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x30:
                
                /*IL_30: ldloc.3  */
                /*IL_31: ldloc.2  */
                /*IL_32: ldlen  */
                /*IL_33: conv.i4  */
                /*IL_35: clt  */
                /*IL_36: stloc.s 4 */
                loc4 = ((loc3 < (loc2.jsarr.length | (0|0)))?(1):(0));
                
                /*IL_38: ldloc.s 4 */
                /*IL_3A: brtrue.s IL_1C */
                
                if(loc4){
                    __pos__ = 0x1C;
                    continue;
                }
                
                /*IL_3C: ret  TypedArrays.cs:62:5*/
                return ;
            }
        }
    };;
    
    /*static System.Void Program.TestUInt32()*/
    asm.x6000010 = function TestUInt32() 
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc3;
        var loc1;
        var loc4;
        t0 = (asm0)["System.UInt32"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                /*IL_00: nop  TypedArrays.cs:65:5*/
                
                
                /*IL_01: ldc.i4.3  */
                /*IL_02: newarr System.UInt32 */
                /*IL_07: stloc.0  */
                loc0 = BLR.new_array(t0,(3|0));
                
                /*IL_08: ldloc.0  */
                /*IL_09: ldc.i4.0  */
                /*IL_0A: ldc.i4.5  */
                /*IL_0B: stelem.i4  */
                (loc0.jsarr)[(0|0)] = (5|0);
                
                /*IL_0C: ldloc.0  */
                /*IL_0D: ldc.i4.1  */
                /*IL_0E: ldc.i4.6  */
                /*IL_0F: stelem.i4  */
                (loc0.jsarr)[(1|0)] = (6|0);
                
                /*IL_10: ldloc.0  */
                /*IL_11: ldc.i4.2  */
                /*IL_12: ldc.i4.7  */
                /*IL_13: stelem.i4  */
                (loc0.jsarr)[(2|0)] = (7|0);
                
                /*IL_14: nop  TypedArrays.cs:70:9*/
                
                
                /*IL_15: ldloc.0  */
                /*IL_16: stloc.2  */
                loc2 = loc0;
                
                /*IL_17: ldc.i4.0  */
                /*IL_18: stloc.3  */
                loc3 = (0|0);
                
                /*IL_19: br.s IL_2F */
                __pos__ = 0x2F;
                continue;
                case 0x1B:
                
                /*IL_1B: ldloc.2  */
                /*IL_1C: ldloc.3  */
                /*IL_1D: ldelem.u4  */
                /*IL_1E: stloc.1  */
                loc1 = (loc2.jsarr)[loc3];
                
                /*IL_1F: ldloc.1  */
                /*IL_20: box System.UInt32 */
                /*IL_25: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': loc1,
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    });
                
                /*IL_2A: nop  */
                
                
                /*IL_2B: ldloc.3  */
                /*IL_2C: ldc.i4.1  */
                /*IL_2D: add  */
                /*IL_2E: stloc.3  */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x2F:
                
                /*IL_2F: ldloc.3  */
                /*IL_30: ldloc.2  */
                /*IL_31: ldlen  */
                /*IL_32: conv.i4  */
                /*IL_34: clt  */
                /*IL_35: stloc.s 4 */
                loc4 = ((loc3 < (loc2.jsarr.length | (0|0)))?(1):(0));
                
                /*IL_37: ldloc.s 4 */
                /*IL_39: brtrue.s IL_1B */
                
                if(loc4){
                    __pos__ = 0x1B;
                    continue;
                }
                
                /*IL_3B: ret  TypedArrays.cs:72:5*/
                return ;
            }
        }
    };;
    
    /* Program..ctor()*/
    asm.x6000011 = function _ctor(arg0) 
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
    asm.Program = BLR.declare_type("Program",
        [],
        function () 
        {
            return new ((asm0)["System.Object"]())();
        },
        function () 
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));