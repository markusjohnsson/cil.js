var asm1; (function (asm)
{
    asm.FullName = "ArrayInitializer.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static Int32[] GetIntArray()*/
    asm.x600000c_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        (asm.x600000c_init.apply)(this,arguments);
        return (asm.x600000c_.apply)(this,arguments);
    };;
    asm.x600000c_ = function GetIntArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = ((asm0)["System.Int32"])();
        /* IL_00: ldc.i4.s 9*/
        st_00 = (9|0);
        /* IL_02: newarr System.Int32*/
        st_01 = (BLR.new_array)(t0,st_00);
        /* IL_07: dup */
        st_04 = (st_02 = st_01);
        /* IL_08: ldtoken __StaticArrayInitTypeSize=36 $$method0x600000c-1*/
        st_03 = (BLR.new_handle)(((asm0)["System.RuntimeFieldHandle"])(),{
            'type': ((asm1)["<PrivateImplementationDetails>{A427CDA9-EB8A-4941-A684-165E6D882D7F}"])(),
            'field': "$$method0x600000c-1"
        });
        /* IL_0D: call Void InitializeArray(System.Array, System.RuntimeFieldHandle)*/
        (asm0.x600011d)(st_02,st_03);
        /* IL_12: ret */
        return st_04;
    };
    /* static UInt32[] GetUIntArray()*/
    asm.x600000d_init = function ()
    {
        (((asm0)["System.UInt32"])().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        (asm.x600000d_init.apply)(this,arguments);
        return (asm.x600000d_.apply)(this,arguments);
    };;
    asm.x600000d_ = function GetUIntArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = ((asm0)["System.UInt32"])();
        /* IL_00: ldc.i4.s 9*/
        st_00 = (9|0);
        /* IL_02: newarr System.UInt32*/
        st_01 = (BLR.new_array)(t0,st_00);
        /* IL_07: dup */
        st_04 = (st_02 = st_01);
        /* IL_08: ldtoken __StaticArrayInitTypeSize=36 $$method0x600000d-1*/
        st_03 = (BLR.new_handle)(((asm0)["System.RuntimeFieldHandle"])(),{
            'type': ((asm1)["<PrivateImplementationDetails>{A427CDA9-EB8A-4941-A684-165E6D882D7F}"])(),
            'field': "$$method0x600000d-1"
        });
        /* IL_0D: call Void InitializeArray(System.Array, System.RuntimeFieldHandle)*/
        (asm0.x600011d)(st_02,st_03);
        /* IL_12: ret */
        return st_04;
    };
    /* static Byte[] GetByteArray()*/
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
    asm.x600000e_ = function GetByteArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = ((asm0)["System.Byte"])();
        /* IL_00: ldc.i4.7 */
        st_00 = (7|0);
        /* IL_01: newarr System.Byte*/
        st_01 = (BLR.new_array)(t0,st_00);
        /* IL_06: dup */
        st_04 = (st_02 = st_01);
        /* IL_07: ldtoken __StaticArrayInitTypeSize=7 $$method0x600000e-1*/
        st_03 = (BLR.new_handle)(((asm0)["System.RuntimeFieldHandle"])(),{
            'type': ((asm1)["<PrivateImplementationDetails>{A427CDA9-EB8A-4941-A684-165E6D882D7F}"])(),
            'field': "$$method0x600000e-1"
        });
        /* IL_0C: call Void InitializeArray(System.Array, System.RuntimeFieldHandle)*/
        (asm0.x600011d)(st_02,st_03);
        /* IL_11: ret */
        return st_04;
    };
    /* static Void Main()*/
    asm.x600000f_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.UInt32"])().init)();
        (((asm0)["System.Byte"])().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        t0 = ((asm0)["System.Int32"])();
        t1 = ((asm0)["System.UInt32"])();
        t2 = ((asm0)["System.Byte"])();
        /* IL_00: call Int32[] GetIntArray()*/
        /* IL_05: call Void Print[System.Int32](System.Int32[])*/
        ((asm1.x6000010)(((asm0)["System.Int32"])()))((asm1.x600000c)());
        /* IL_0A: call UInt32[] GetUIntArray()*/
        /* IL_0F: call Void Print[System.UInt32](System.UInt32[])*/
        ((asm1.x6000010)(((asm0)["System.UInt32"])()))((asm1.x600000d)());
        /* IL_14: call Byte[] GetByteArray()*/
        /* IL_19: call Void Print[System.Byte](System.Byte[])*/
        ((asm1.x6000010)(((asm0)["System.Byte"])()))((asm1.x600000e)());
        /* IL_1E: ret */
        return ;
    };
    /* static Void Print[T](T[])*/
    asm.x6000010 = function (T)
    {
        return function Print(arg0)
        {
            var t0;
            var __pos_0__;
            var loc0;
            t0 = T;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: ldc.i4.0 */
                    /* IL_01: stloc.0 */
                    loc0 = (0|0);
                    /* IL_02: br.s IL_19*/
                    __pos_0__ = 0x19;
                    continue;
                    case 0x4:
                    /* IL_04: ldarg.0 */
                    /* IL_05: ldloc.0 */
                    /* IL_06: ldelem T*/
                    /* IL_0B: box T*/
                    /* IL_10: call Void Log(System.Object)*/
                    (asm1.x6000001)((BLR.box)((arg0.jsarr)[loc0],t0));
                    /* IL_15: ldloc.0 */
                    /* IL_16: ldc.i4.1 */
                    /* IL_17: add */
                    /* IL_18: stloc.0 */
                    loc0 = (loc0 + (1|0)) | (0|0);
                    case 0x19:
                    /* IL_19: ldloc.0 */
                    /* IL_1A: ldarg.0 */
                    /* IL_1B: ldlen */
                    /* IL_1C: conv.i4 */
                    /* IL_1D: blt.s IL_04*/
                    
                    if (loc0 < (arg0.jsarr.length | (0|0))){
                        __pos_0__ = 0x4;
                        continue;
                    }
                    /* IL_1F: ret */
                    return ;
                }
            }
        };
    };;
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function TestLog()
            {
                (TestLog.init)();
                this.constructor = TestLog;
            };
            c = TestLog;
            ct = c;
            TestLog.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(TestLog,"TestLog",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(TestLog),Array,"asm1.t2000002");
                TestLog.Interfaces = [];
                (BLR.declare_virtual)(TestLog,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(TestLog,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(TestLog,"asm0.x6000009","asm0.x6000009");
            };
            TestLog.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.TestHelper = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function TestHelper()
            {
                (TestHelper.init)();
                this.constructor = TestHelper;
            };
            c = TestHelper;
            ct = c;
            TestHelper.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(TestHelper,"TestHelper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(TestHelper),Array,"asm1.t2000006");
                TestHelper.Interfaces = [];
                (BLR.declare_virtual)(TestHelper,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(TestHelper,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(TestHelper,"asm0.x6000009","asm0.x6000009");
            };
            TestHelper.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.Program = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function Program()
            {
                (Program.init)();
                this.constructor = Program;
            };
            c = Program;
            ct = c;
            Program.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(Program),Array,"asm1.t2000007");
                Program.Interfaces = [];
                (BLR.declare_virtual)(Program,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Program,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["<PrivateImplementationDetails>{A427CDA9-EB8A-4941-A684-165E6D882D7F}"] = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function _PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_()
            {
                (_PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_.init)();
                this.constructor = _PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_;
            };
            c = _PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_;
            ct = c;
            _PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(_PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_,"<PrivateImplementationDetails>{A427CDA9-EB8A-4941-A684-165E6D882D7F}",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(_PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_),Array,"asm1.t2000008");
                (_PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_)["$$method0x600000c-1"] = [
                    0,
                    0,
                    0,
                    0,
                    8,
                    0,
                    0,
                    0,
                    252,
                    255,
                    255,
                    255,
                    5,
                    0,
                    0,
                    0,
                    255,
                    255,
                    255,
                    255,
                    6,
                    0,
                    0,
                    0,
                    244,
                    1,
                    0,
                    0,
                    255,
                    255,
                    255,
                    127,
                    0,
                    0,
                    0,
                    128
                ];
                (_PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_)["$$method0x600000d-1"] = [
                    0,
                    0,
                    0,
                    0,
                    8,
                    0,
                    0,
                    0,
                    4,
                    0,
                    0,
                    0,
                    5,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    6,
                    0,
                    0,
                    0,
                    244,
                    1,
                    0,
                    0,
                    255,
                    255,
                    255,
                    255,
                    0,
                    0,
                    0,
                    0
                ];
                (_PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_)["$$method0x600000e-1"] = [
                    0,
                    8,
                    4,
                    5,
                    1,
                    255,
                    0
                ];
                _PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_.Interfaces = [];
                (BLR.declare_virtual)(_PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(_PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(_PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_,"asm0.x6000009","asm0.x6000009");
            };
            _PrivateImplementationDetails__A427CDA9_EB8A_4941_A684_165E6D882D7F_.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["<PrivateImplementationDetails>{A427CDA9-EB8A-4941-A684-165E6D882D7F}+__StaticArrayInitTypeSize=36"] = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function __StaticArrayInitTypeSize_36()
            {
                (__StaticArrayInitTypeSize_36.init)();
                this.constructor = __StaticArrayInitTypeSize_36;
            };
            c = __StaticArrayInitTypeSize_36;
            ct = c;
            __StaticArrayInitTypeSize_36.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(__StaticArrayInitTypeSize_36,"<PrivateImplementationDetails>{A427CDA9-EB8A-4941-A684-165E6D882D7F}+__StaticArrayInitTypeSize=36",asm,true,false,false,false,false,[],[],((asm0)["System.ValueType"])(),(BLR.is_inst_default)(__StaticArrayInitTypeSize_36),Array,"asm1.t2000009");
                __StaticArrayInitTypeSize_36.Interfaces = [];
                (BLR.declare_virtual)(__StaticArrayInitTypeSize_36,"asm0.x6000008","asm0.x6000016");
                (BLR.declare_virtual)(__StaticArrayInitTypeSize_36,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(__StaticArrayInitTypeSize_36,"asm0.x6000009","asm0.x6000009");
            };
            __StaticArrayInitTypeSize_36.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["<PrivateImplementationDetails>{A427CDA9-EB8A-4941-A684-165E6D882D7F}+__StaticArrayInitTypeSize=7"] = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function __StaticArrayInitTypeSize_7()
            {
                (__StaticArrayInitTypeSize_7.init)();
                this.constructor = __StaticArrayInitTypeSize_7;
            };
            c = __StaticArrayInitTypeSize_7;
            ct = c;
            __StaticArrayInitTypeSize_7.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(__StaticArrayInitTypeSize_7,"<PrivateImplementationDetails>{A427CDA9-EB8A-4941-A684-165E6D882D7F}+__StaticArrayInitTypeSize=7",asm,true,false,false,false,false,[],[],((asm0)["System.ValueType"])(),(BLR.is_inst_default)(__StaticArrayInitTypeSize_7),Array,"asm1.t200000a");
                __StaticArrayInitTypeSize_7.Interfaces = [];
                (BLR.declare_virtual)(__StaticArrayInitTypeSize_7,"asm0.x6000008","asm0.x6000016");
                (BLR.declare_virtual)(__StaticArrayInitTypeSize_7,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(__StaticArrayInitTypeSize_7,"asm0.x6000009","asm0.x6000009");
            };
            __StaticArrayInitTypeSize_7.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
