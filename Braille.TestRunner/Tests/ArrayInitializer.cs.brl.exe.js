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
        ((asm0)["System.Int32"]().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function GetIntArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = (asm0)["System.Int32"]();
        /* IL_00: ldc.i4.s 9*/
        st_00 = (9|0);
        /* IL_02: newarr System.Int32*/
        st_01 = BLR.new_array(t0,st_00);
        /* IL_07: dup */
        st_04 = (st_02 = st_01);
        /* IL_08: ldtoken __StaticArrayInitTypeSize=36 $$method0x600000c-1*/
        st_03 = BLR.new_handle((asm0)["System.RuntimeFieldHandle"](),{
                'type': (asm1)["<PrivateImplementationDetails>{8CDE9989-0611-4482-9CB0-36EB227000E7}"](),
                'field': "$$method0x600000c-1"
            });
        /* IL_0D: call Void InitializeArray(System.Array, System.RuntimeFieldHandle)*/
        asm0.x600011f(st_02,st_03);
        /* IL_12: ret */
        return st_04;
    };
    /* static UInt32[] GetUIntArray()*/
    asm.x600000d_init = function ()
    {
        ((asm0)["System.UInt32"]().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function GetUIntArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = (asm0)["System.UInt32"]();
        /* IL_00: ldc.i4.s 9*/
        st_00 = (9|0);
        /* IL_02: newarr System.UInt32*/
        st_01 = BLR.new_array(t0,st_00);
        /* IL_07: dup */
        st_04 = (st_02 = st_01);
        /* IL_08: ldtoken __StaticArrayInitTypeSize=36 $$method0x600000d-1*/
        st_03 = BLR.new_handle((asm0)["System.RuntimeFieldHandle"](),{
                'type': (asm1)["<PrivateImplementationDetails>{8CDE9989-0611-4482-9CB0-36EB227000E7}"](),
                'field': "$$method0x600000d-1"
            });
        /* IL_0D: call Void InitializeArray(System.Array, System.RuntimeFieldHandle)*/
        asm0.x600011f(st_02,st_03);
        /* IL_12: ret */
        return st_04;
    };
    /* static Byte[] GetByteArray()*/
    asm.x600000e_init = function ()
    {
        ((asm0)["System.Byte"]().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function GetByteArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = (asm0)["System.Byte"]();
        /* IL_00: ldc.i4.7 */
        st_00 = (7|0);
        /* IL_01: newarr System.Byte*/
        st_01 = BLR.new_array(t0,st_00);
        /* IL_06: dup */
        st_04 = (st_02 = st_01);
        /* IL_07: ldtoken __StaticArrayInitTypeSize=7 $$method0x600000e-1*/
        st_03 = BLR.new_handle((asm0)["System.RuntimeFieldHandle"](),{
                'type': (asm1)["<PrivateImplementationDetails>{8CDE9989-0611-4482-9CB0-36EB227000E7}"](),
                'field': "$$method0x600000e-1"
            });
        /* IL_0C: call Void InitializeArray(System.Array, System.RuntimeFieldHandle)*/
        asm0.x600011f(st_02,st_03);
        /* IL_11: ret */
        return st_04;
    };
    /* static Void Main()*/
    asm.x600000f_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        ((asm0)["System.Int32"]().init)();
        ((asm0)["System.UInt32"]().init)();
        ((asm0)["System.Byte"]().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        t0 = (asm0)["System.ValueType"]();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.UInt32"]();
        t3 = (asm0)["System.Byte"]();
        /* IL_00: call Int32[] GetIntArray()*/
        /* IL_05: call Void Print[System.Int32](System.Int32[])*/
        (asm1.x6000010((asm0)["System.Int32"]()))(asm1.x600000c());
        /* IL_0A: call UInt32[] GetUIntArray()*/
        /* IL_0F: call Void Print[System.UInt32](System.UInt32[])*/
        (asm1.x6000010((asm0)["System.UInt32"]()))(asm1.x600000d());
        /* IL_14: call Byte[] GetByteArray()*/
        /* IL_19: call Void Print[System.Byte](System.Byte[])*/
        (asm1.x6000010((asm0)["System.Byte"]()))(asm1.x600000e());
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
                    asm1.x6000001(BLR.box((arg0.jsarr)[loc0],t0));
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
    asm.TestLog = BLR.declare_type(
        "TestLog",
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
    asm.TestHelper = BLR.declare_type(
        "TestHelper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestHelper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Program = BLR.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["<PrivateImplementationDetails>{8CDE9989-0611-4482-9CB0-36EB227000E7}"] = BLR.declare_type(
        "_PrivateImplementationDetails__8CDE9989_0611_4482_9CB0_36EB227000E7_",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"<PrivateImplementationDetails>{8CDE9989-0611-4482-9CB0-36EB227000E7}",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            (this)["$$method0x600000c-1"] = [0, 0, 0, 0, 8, 0, 0, 0, 252, 255, 255, 255, 5, 0, 0, 0, 255, 255, 255, 255, 6, 0, 0, 0, 244, 1, 0, 0, 255, 255, 255, 127, 0, 0, 0, 128];
            (this)["$$method0x600000d-1"] = [0, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 6, 0, 0, 0, 244, 1, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0];
            (this)["$$method0x600000e-1"] = [0, 8, 4, 5, 1, 255, 0];
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["<PrivateImplementationDetails>{8CDE9989-0611-4482-9CB0-36EB227000E7}+__StaticArrayInitTypeSize=36"] = BLR.declare_type(
        "__StaticArrayInitTypeSize_36",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"<PrivateImplementationDetails>{8CDE9989-0611-4482-9CB0-36EB227000E7}+__StaticArrayInitTypeSize=36",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["<PrivateImplementationDetails>{8CDE9989-0611-4482-9CB0-36EB227000E7}+__StaticArrayInitTypeSize=7"] = BLR.declare_type(
        "__StaticArrayInitTypeSize_7",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"<PrivateImplementationDetails>{8CDE9989-0611-4482-9CB0-36EB227000E7}+__StaticArrayInitTypeSize=7",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
