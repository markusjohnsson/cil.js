var asm1; (function (asm)
{
    asm.FullName = "TypedArrays.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Void Log(System.Object)*/
    asm.x6000001 = braille_test_log;;
    /* Void .ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x600000c_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        (asm.x600000c_init.apply)(this,arguments);
        return (asm.x600000c_.apply)(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        t0 = ((asm0)["System.ValueType"])();
        /* IL_00: call Void TestUInt8()*/
        (asm1.x600000e)();
        /* IL_05: call Void TestInt8()*/
        (asm1.x600000d)();
        /* IL_0A: call Void TestUInt16()*/
        (asm1.x6000010)();
        /* IL_0F: call Void TestInt16()*/
        (asm1.x600000f)();
        /* IL_14: call Void TestUInt32()*/
        (asm1.x6000012)();
        /* IL_19: call Void TestInt32()*/
        (asm1.x6000011)();
        /* IL_1E: ret */
        return ;
    };
    /* static Void TestInt8()*/
    asm.x600000d_init = function ()
    {
        (((asm0)["System.SByte"])().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        (asm.x600000d_init.apply)(this,arguments);
        return (asm.x600000d_.apply)(this,arguments);
    };;
    asm.x600000d_ = function TestInt8()
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc2;
        var loc3;
        var loc1;
        t0 = ((asm0)["System.SByte"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldc.i4.3 */
                /* IL_01: newarr System.SByte*/
                /* IL_06: stloc.0 */
                loc0 = (BLR.new_array)(t0,(3|0));
                /* IL_07: ldloc.0 */
                /* IL_08: ldc.i4.0 */
                /* IL_09: ldc.i4.s 251*/
                /* IL_0B: stelem.i1 */
                (loc0.jsarr)[(0|0)] = (-5|0);
                /* IL_0C: ldloc.0 */
                /* IL_0D: ldc.i4.1 */
                /* IL_0E: ldc.i4.6 */
                /* IL_0F: stelem.i1 */
                (loc0.jsarr)[(1|0)] = (6|0);
                /* IL_10: ldloc.0 */
                /* IL_11: ldc.i4.2 */
                /* IL_12: ldc.i4.7 */
                /* IL_13: stelem.i1 */
                (loc0.jsarr)[(2|0)] = (7|0);
                /* IL_14: ldloc.0 */
                /* IL_15: stloc.2 */
                loc2 = loc0;
                /* IL_16: ldc.i4.0 */
                /* IL_17: stloc.3 */
                loc3 = (0|0);
                /* IL_18: br.s IL_2D*/
                __pos_0__ = 0x2D;
                continue;
                case 0x1A:
                /* IL_1A: ldloc.2 */
                /* IL_1B: ldloc.3 */
                /* IL_1C: ldelem.i1 */
                /* IL_1D: stloc.1 */
                loc1 = (loc2.jsarr)[loc3];
                /* IL_1E: ldloc.1 */
                /* IL_1F: box System.SByte*/
                /* IL_24: call Void Log(System.Object)*/
                (asm1.x6000001)({
                    'boxed': loc1,
                    'type': t0,
                    'vtable': t0.prototype.vtable,
                    'ifacemap': t0.prototype.ifacemap
                });
                /* IL_29: ldloc.3 */
                /* IL_2A: ldc.i4.1 */
                /* IL_2B: add */
                /* IL_2C: stloc.3 */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x2D:
                /* IL_2D: ldloc.3 */
                /* IL_2E: ldloc.2 */
                /* IL_2F: ldlen */
                /* IL_30: conv.i4 */
                /* IL_31: blt.s IL_1A*/
                
                if (loc3 < (loc2.jsarr.length | (0|0))){
                    __pos_0__ = 0x1A;
                    continue;
                }
                /* IL_33: ret */
                return ;
            }
        }
    };
    /* static Void TestUInt8()*/
    asm.x600000e_init = function ()
    {
        (((asm0)["System.Byte"])().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e_.apply)(this,arguments);
    };;
    asm.x600000e_ = function TestUInt8()
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc2;
        var loc3;
        var loc1;
        t0 = ((asm0)["System.Byte"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldc.i4.3 */
                /* IL_01: newarr System.Byte*/
                /* IL_06: stloc.0 */
                loc0 = (BLR.new_array)(t0,(3|0));
                /* IL_07: ldloc.0 */
                /* IL_08: ldc.i4.0 */
                /* IL_09: ldc.i4.5 */
                /* IL_0A: stelem.i1 */
                (loc0.jsarr)[(0|0)] = (5|0);
                /* IL_0B: ldloc.0 */
                /* IL_0C: ldc.i4.1 */
                /* IL_0D: ldc.i4.6 */
                /* IL_0E: stelem.i1 */
                (loc0.jsarr)[(1|0)] = (6|0);
                /* IL_0F: ldloc.0 */
                /* IL_10: ldc.i4.2 */
                /* IL_11: ldc.i4.7 */
                /* IL_12: stelem.i1 */
                (loc0.jsarr)[(2|0)] = (7|0);
                /* IL_13: ldloc.0 */
                /* IL_14: stloc.2 */
                loc2 = loc0;
                /* IL_15: ldc.i4.0 */
                /* IL_16: stloc.3 */
                loc3 = (0|0);
                /* IL_17: br.s IL_2C*/
                __pos_0__ = 0x2C;
                continue;
                case 0x19:
                /* IL_19: ldloc.2 */
                /* IL_1A: ldloc.3 */
                /* IL_1B: ldelem.u1 */
                /* IL_1C: stloc.1 */
                loc1 = (loc2.jsarr)[loc3];
                /* IL_1D: ldloc.1 */
                /* IL_1E: box System.Byte*/
                /* IL_23: call Void Log(System.Object)*/
                (asm1.x6000001)({
                    'boxed': loc1,
                    'type': t0,
                    'vtable': t0.prototype.vtable,
                    'ifacemap': t0.prototype.ifacemap
                });
                /* IL_28: ldloc.3 */
                /* IL_29: ldc.i4.1 */
                /* IL_2A: add */
                /* IL_2B: stloc.3 */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x2C:
                /* IL_2C: ldloc.3 */
                /* IL_2D: ldloc.2 */
                /* IL_2E: ldlen */
                /* IL_2F: conv.i4 */
                /* IL_30: blt.s IL_19*/
                
                if (loc3 < (loc2.jsarr.length | (0|0))){
                    __pos_0__ = 0x19;
                    continue;
                }
                /* IL_32: ret */
                return ;
            }
        }
    };
    /* static Void TestInt16()*/
    asm.x600000f_init = function ()
    {
        (((asm0)["System.Int16"])().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function TestInt16()
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc2;
        var loc3;
        var loc1;
        t0 = ((asm0)["System.Int16"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldc.i4.3 */
                /* IL_01: newarr System.Int16*/
                /* IL_06: stloc.0 */
                loc0 = (BLR.new_array)(t0,(3|0));
                /* IL_07: ldloc.0 */
                /* IL_08: ldc.i4.0 */
                /* IL_09: ldc.i4.s 251*/
                /* IL_0B: stelem.i2 */
                (loc0.jsarr)[(0|0)] = (-5|0);
                /* IL_0C: ldloc.0 */
                /* IL_0D: ldc.i4.1 */
                /* IL_0E: ldc.i4.6 */
                /* IL_0F: stelem.i2 */
                (loc0.jsarr)[(1|0)] = (6|0);
                /* IL_10: ldloc.0 */
                /* IL_11: ldc.i4.2 */
                /* IL_12: ldc.i4.7 */
                /* IL_13: stelem.i2 */
                (loc0.jsarr)[(2|0)] = (7|0);
                /* IL_14: ldloc.0 */
                /* IL_15: stloc.2 */
                loc2 = loc0;
                /* IL_16: ldc.i4.0 */
                /* IL_17: stloc.3 */
                loc3 = (0|0);
                /* IL_18: br.s IL_2D*/
                __pos_0__ = 0x2D;
                continue;
                case 0x1A:
                /* IL_1A: ldloc.2 */
                /* IL_1B: ldloc.3 */
                /* IL_1C: ldelem.i2 */
                /* IL_1D: stloc.1 */
                loc1 = (loc2.jsarr)[loc3];
                /* IL_1E: ldloc.1 */
                /* IL_1F: box System.Int16*/
                /* IL_24: call Void Log(System.Object)*/
                (asm1.x6000001)({
                    'boxed': loc1,
                    'type': t0,
                    'vtable': t0.prototype.vtable,
                    'ifacemap': t0.prototype.ifacemap
                });
                /* IL_29: ldloc.3 */
                /* IL_2A: ldc.i4.1 */
                /* IL_2B: add */
                /* IL_2C: stloc.3 */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x2D:
                /* IL_2D: ldloc.3 */
                /* IL_2E: ldloc.2 */
                /* IL_2F: ldlen */
                /* IL_30: conv.i4 */
                /* IL_31: blt.s IL_1A*/
                
                if (loc3 < (loc2.jsarr.length | (0|0))){
                    __pos_0__ = 0x1A;
                    continue;
                }
                /* IL_33: ret */
                return ;
            }
        }
    };
    /* static Void TestUInt16()*/
    asm.x6000010_init = function ()
    {
        (((asm0)["System.UInt16"])().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        (asm.x6000010_init.apply)(this,arguments);
        return (asm.x6000010_.apply)(this,arguments);
    };;
    asm.x6000010_ = function TestUInt16()
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc2;
        var loc3;
        var loc1;
        t0 = ((asm0)["System.UInt16"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldc.i4.3 */
                /* IL_01: newarr System.UInt16*/
                /* IL_06: stloc.0 */
                loc0 = (BLR.new_array)(t0,(3|0));
                /* IL_07: ldloc.0 */
                /* IL_08: ldc.i4.0 */
                /* IL_09: ldc.i4.5 */
                /* IL_0A: stelem.i2 */
                (loc0.jsarr)[(0|0)] = (5|0);
                /* IL_0B: ldloc.0 */
                /* IL_0C: ldc.i4.1 */
                /* IL_0D: ldc.i4.6 */
                /* IL_0E: stelem.i2 */
                (loc0.jsarr)[(1|0)] = (6|0);
                /* IL_0F: ldloc.0 */
                /* IL_10: ldc.i4.2 */
                /* IL_11: ldc.i4.7 */
                /* IL_12: stelem.i2 */
                (loc0.jsarr)[(2|0)] = (7|0);
                /* IL_13: ldloc.0 */
                /* IL_14: stloc.2 */
                loc2 = loc0;
                /* IL_15: ldc.i4.0 */
                /* IL_16: stloc.3 */
                loc3 = (0|0);
                /* IL_17: br.s IL_2C*/
                __pos_0__ = 0x2C;
                continue;
                case 0x19:
                /* IL_19: ldloc.2 */
                /* IL_1A: ldloc.3 */
                /* IL_1B: ldelem.u2 */
                /* IL_1C: stloc.1 */
                loc1 = (loc2.jsarr)[loc3];
                /* IL_1D: ldloc.1 */
                /* IL_1E: box System.UInt16*/
                /* IL_23: call Void Log(System.Object)*/
                (asm1.x6000001)({
                    'boxed': loc1,
                    'type': t0,
                    'vtable': t0.prototype.vtable,
                    'ifacemap': t0.prototype.ifacemap
                });
                /* IL_28: ldloc.3 */
                /* IL_29: ldc.i4.1 */
                /* IL_2A: add */
                /* IL_2B: stloc.3 */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x2C:
                /* IL_2C: ldloc.3 */
                /* IL_2D: ldloc.2 */
                /* IL_2E: ldlen */
                /* IL_2F: conv.i4 */
                /* IL_30: blt.s IL_19*/
                
                if (loc3 < (loc2.jsarr.length | (0|0))){
                    __pos_0__ = 0x19;
                    continue;
                }
                /* IL_32: ret */
                return ;
            }
        }
    };
    /* static Void TestInt32()*/
    asm.x6000011_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        (asm.x6000011_init.apply)(this,arguments);
        return (asm.x6000011_.apply)(this,arguments);
    };;
    asm.x6000011_ = function TestInt32()
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc2;
        var loc3;
        var loc1;
        t0 = ((asm0)["System.Int32"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldc.i4.3 */
                /* IL_01: newarr System.Int32*/
                /* IL_06: stloc.0 */
                loc0 = (BLR.new_array)(t0,(3|0));
                /* IL_07: ldloc.0 */
                /* IL_08: ldc.i4.0 */
                /* IL_09: ldc.i4.s 251*/
                /* IL_0B: stelem.i4 */
                (loc0.jsarr)[(0|0)] = (-5|0);
                /* IL_0C: ldloc.0 */
                /* IL_0D: ldc.i4.1 */
                /* IL_0E: ldc.i4.6 */
                /* IL_0F: stelem.i4 */
                (loc0.jsarr)[(1|0)] = (6|0);
                /* IL_10: ldloc.0 */
                /* IL_11: ldc.i4.2 */
                /* IL_12: ldc.i4.7 */
                /* IL_13: stelem.i4 */
                (loc0.jsarr)[(2|0)] = (7|0);
                /* IL_14: ldloc.0 */
                /* IL_15: stloc.2 */
                loc2 = loc0;
                /* IL_16: ldc.i4.0 */
                /* IL_17: stloc.3 */
                loc3 = (0|0);
                /* IL_18: br.s IL_2D*/
                __pos_0__ = 0x2D;
                continue;
                case 0x1A:
                /* IL_1A: ldloc.2 */
                /* IL_1B: ldloc.3 */
                /* IL_1C: ldelem.i4 */
                /* IL_1D: stloc.1 */
                loc1 = (loc2.jsarr)[loc3];
                /* IL_1E: ldloc.1 */
                /* IL_1F: box System.Int32*/
                /* IL_24: call Void Log(System.Object)*/
                (asm1.x6000001)({
                    'boxed': loc1,
                    'type': t0,
                    'vtable': t0.prototype.vtable,
                    'ifacemap': t0.prototype.ifacemap
                });
                /* IL_29: ldloc.3 */
                /* IL_2A: ldc.i4.1 */
                /* IL_2B: add */
                /* IL_2C: stloc.3 */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x2D:
                /* IL_2D: ldloc.3 */
                /* IL_2E: ldloc.2 */
                /* IL_2F: ldlen */
                /* IL_30: conv.i4 */
                /* IL_31: blt.s IL_1A*/
                
                if (loc3 < (loc2.jsarr.length | (0|0))){
                    __pos_0__ = 0x1A;
                    continue;
                }
                /* IL_33: ret */
                return ;
            }
        }
    };
    /* static Void TestUInt32()*/
    asm.x6000012_init = function ()
    {
        (((asm0)["System.UInt32"])().init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function ()
    {
        (asm.x6000012_init.apply)(this,arguments);
        return (asm.x6000012_.apply)(this,arguments);
    };;
    asm.x6000012_ = function TestUInt32()
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc2;
        var loc3;
        var loc1;
        t0 = ((asm0)["System.UInt32"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldc.i4.3 */
                /* IL_01: newarr System.UInt32*/
                /* IL_06: stloc.0 */
                loc0 = (BLR.new_array)(t0,(3|0));
                /* IL_07: ldloc.0 */
                /* IL_08: ldc.i4.0 */
                /* IL_09: ldc.i4.5 */
                /* IL_0A: stelem.i4 */
                (loc0.jsarr)[(0|0)] = (5|0);
                /* IL_0B: ldloc.0 */
                /* IL_0C: ldc.i4.1 */
                /* IL_0D: ldc.i4.6 */
                /* IL_0E: stelem.i4 */
                (loc0.jsarr)[(1|0)] = (6|0);
                /* IL_0F: ldloc.0 */
                /* IL_10: ldc.i4.2 */
                /* IL_11: ldc.i4.7 */
                /* IL_12: stelem.i4 */
                (loc0.jsarr)[(2|0)] = (7|0);
                /* IL_13: ldloc.0 */
                /* IL_14: stloc.2 */
                loc2 = loc0;
                /* IL_15: ldc.i4.0 */
                /* IL_16: stloc.3 */
                loc3 = (0|0);
                /* IL_17: br.s IL_2C*/
                __pos_0__ = 0x2C;
                continue;
                case 0x19:
                /* IL_19: ldloc.2 */
                /* IL_1A: ldloc.3 */
                /* IL_1B: ldelem.u4 */
                /* IL_1C: stloc.1 */
                loc1 = (loc2.jsarr)[loc3];
                /* IL_1D: ldloc.1 */
                /* IL_1E: box System.UInt32*/
                /* IL_23: call Void Log(System.Object)*/
                (asm1.x6000001)({
                    'boxed': loc1,
                    'type': t0,
                    'vtable': t0.prototype.vtable,
                    'ifacemap': t0.prototype.ifacemap
                });
                /* IL_28: ldloc.3 */
                /* IL_29: ldc.i4.1 */
                /* IL_2A: add */
                /* IL_2B: stloc.3 */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x2C:
                /* IL_2C: ldloc.3 */
                /* IL_2D: ldloc.2 */
                /* IL_2E: ldlen */
                /* IL_2F: conv.i4 */
                /* IL_30: blt.s IL_19*/
                
                if (loc3 < (loc2.jsarr.length | (0|0))){
                    __pos_0__ = 0x19;
                    continue;
                }
                /* IL_32: ret */
                return ;
            }
        }
    };
    /* Void .ctor()*/
    asm.x6000013 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = (BLR.declare_type)("TestLog",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"TestLog",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000002");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.TestHelper = (BLR.declare_type)("TestHelper",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"TestHelper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000006");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.Program = (BLR.declare_type)("Program",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000007");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
