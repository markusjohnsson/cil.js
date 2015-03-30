var asm1; (function (asm)
{
    asm.FullName = "ArrayInitializer.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Int32[] Program.GetIntArray()*/
    asm.x600000a = function GetIntArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop  ArrayInitializer.cs:5:5*/
        /* IL_01: ldc.i4.s 9 ArrayInitializer.cs:6:9*/
        st_00 = (9|0);
        /* IL_03: newarr System.Int32 */
        st_01 = BLR.new_array(t0,st_00);
        /* IL_08: dup  */
        st_04 = (st_02 = st_01);
        /* IL_09: ldtoken __StaticArrayInitTypeSize=36 $$method0x600000a-1 */
        st_03 = BLR.new_handle((asm0)["System.RuntimeFieldHandle"](),{
                'type': (asm1)["<PrivateImplementationDetails>{DC45ED9E-742D-40BD-B830-FCD204F7A6CF}"](),
                'field': "$$method0x600000a-1"
            });
        /* IL_0E: call Void InitializeArray(System.Array, System.RuntimeFieldHandle) */
        asm0.x6000161(st_02,st_03);
        /* IL_13: stloc.0  */
        loc0 = st_04;
        /* IL_16: ldloc.0  */
        /* IL_17: ret  */
        return loc0;
    };;
    /* static System.UInt32[] Program.GetUIntArray()*/
    asm.x600000b = function GetUIntArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.UInt32"]();
        __pos__ = 0x0;
        /* IL_00: nop  ArrayInitializer.cs:10:5*/
        /* IL_01: ldc.i4.s 9 ArrayInitializer.cs:11:9*/
        st_00 = (9|0);
        /* IL_03: newarr System.UInt32 */
        st_01 = BLR.new_array(t0,st_00);
        /* IL_08: dup  */
        st_04 = (st_02 = st_01);
        /* IL_09: ldtoken __StaticArrayInitTypeSize=36 $$method0x600000b-1 */
        st_03 = BLR.new_handle((asm0)["System.RuntimeFieldHandle"](),{
                'type': (asm1)["<PrivateImplementationDetails>{DC45ED9E-742D-40BD-B830-FCD204F7A6CF}"](),
                'field': "$$method0x600000b-1"
            });
        /* IL_0E: call Void InitializeArray(System.Array, System.RuntimeFieldHandle) */
        asm0.x6000161(st_02,st_03);
        /* IL_13: stloc.0  */
        loc0 = st_04;
        /* IL_16: ldloc.0  */
        /* IL_17: ret  */
        return loc0;
    };;
    /* static System.Byte[] Program.GetByteArray()*/
    asm.x600000c = function GetByteArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Byte"]();
        __pos__ = 0x0;
        /* IL_00: nop  ArrayInitializer.cs:15:5*/
        /* IL_01: ldc.i4.7  ArrayInitializer.cs:16:9*/
        st_00 = (7|0);
        /* IL_02: newarr System.Byte */
        st_01 = BLR.new_array(t0,st_00);
        /* IL_07: dup  */
        st_04 = (st_02 = st_01);
        /* IL_08: ldtoken __StaticArrayInitTypeSize=7 $$method0x600000c-1 */
        st_03 = BLR.new_handle((asm0)["System.RuntimeFieldHandle"](),{
                'type': (asm1)["<PrivateImplementationDetails>{DC45ED9E-742D-40BD-B830-FCD204F7A6CF}"](),
                'field': "$$method0x600000c-1"
            });
        /* IL_0D: call Void InitializeArray(System.Array, System.RuntimeFieldHandle) */
        asm0.x6000161(st_02,st_03);
        /* IL_12: stloc.0  */
        loc0 = st_04;
        /* IL_15: ldloc.0  */
        /* IL_16: ret  */
        return loc0;
    };;
    /* static System.Int64[] Program.GetLongArray()*/
    asm.x600000d = function GetLongArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Int64"]();
        __pos__ = 0x0;
        /* IL_00: nop  ArrayInitializer.cs:20:5*/
        /* IL_01: ldc.i4.s 9 ArrayInitializer.cs:21:9*/
        st_00 = (9|0);
        /* IL_03: newarr System.Int64 */
        st_01 = BLR.new_array(t0,st_00);
        /* IL_08: dup  */
        st_04 = (st_02 = st_01);
        /* IL_09: ldtoken __StaticArrayInitTypeSize=72 $$method0x600000d-1 */
        st_03 = BLR.new_handle((asm0)["System.RuntimeFieldHandle"](),{
                'type': (asm1)["<PrivateImplementationDetails>{DC45ED9E-742D-40BD-B830-FCD204F7A6CF}"](),
                'field': "$$method0x600000d-1"
            });
        /* IL_0E: call Void InitializeArray(System.Array, System.RuntimeFieldHandle) */
        asm0.x6000161(st_02,st_03);
        /* IL_13: stloc.0  */
        loc0 = st_04;
        /* IL_16: ldloc.0  */
        /* IL_17: ret  */
        return loc0;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000e_init = function ()
    {
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        BLR.init_base_types();
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos__;
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.UInt32"]();
        t2 = (asm0)["System.Byte"]();
        t3 = (asm0)["System.Int64"]();
        __pos__ = 0x0;
        /* IL_00: nop  ArrayInitializer.cs:25:5*/
        /* IL_01: call Int32[] GetIntArray() */
        /* IL_06: call Void Print[System.Int32](System.Int32[]) */
        (asm1.x600000f((asm0)["System.Int32"]()))(asm1.x600000a());
        /* IL_0B: nop  */
        /* IL_0C: call UInt32[] GetUIntArray() */
        /* IL_11: call Void Print[System.UInt32](System.UInt32[]) */
        (asm1.x600000f((asm0)["System.UInt32"]()))(asm1.x600000b());
        /* IL_16: nop  */
        /* IL_17: call Byte[] GetByteArray() */
        /* IL_1C: call Void Print[System.Byte](System.Byte[]) */
        (asm1.x600000f((asm0)["System.Byte"]()))(asm1.x600000c());
        /* IL_21: nop  */
        /* IL_22: call Int64[] GetLongArray() */
        /* IL_27: call Void Print[System.Int64](System.Int64[]) */
        (asm1.x600000f((asm0)["System.Int64"]()))(asm1.x600000d());
        /* IL_2C: nop  */
        /* IL_2D: ret  ArrayInitializer.cs:30:5*/
        return ;
    };
    /* static System.Void Program.Print<T>(T[])*/
    asm.x600000f = function (T)
    {
        return function Print(arg0)
        {
            var t0;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc0;
            var loc1;
            t0 = T;
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  ArrayInitializer.cs:33:5*/
                    
                    /* IL_01: ldc.i4.0  */
                    /* IL_02: stloc.0  */
                    loc0 = (0|0);
                    /* IL_03: br.s IL_1B ArrayInitializer.cs:16707566:0*/
                    __pos__ = 0x1B;
                    continue;
                    case 0x5:
                    /* IL_05: ldarg.0  */
                    /* IL_06: ldloc.0  */
                    /* IL_07: ldelem T */
                    /* IL_0C: box T */
                    /* IL_11: call Void Log(System.Object) */
                    asm1.x6000001(BLR.box((arg0.jsarr)[loc0],t0));
                    /* IL_16: nop  */
                    
                    /* IL_17: ldloc.0  */
                    /* IL_18: ldc.i4.1  */
                    /* IL_19: add  */
                    /* IL_1A: stloc.0  */
                    loc0 = (loc0 + (1|0)) | (0|0);
                    case 0x1B:
                    /* IL_1B: ldloc.0  */
                    /* IL_1C: ldarg.0  */
                    /* IL_1D: ldlen  */
                    /* IL_1E: conv.i4  */
                    /* IL_20: clt  */
                    /* IL_21: stloc.1  */
                    loc1 = ((loc0 < (arg0.jsarr.length | (0|0))) ? (1) : (0));
                    /* IL_22: ldloc.1  */
                    /* IL_23: brtrue.s IL_05 */
                    
                    if (loc1){
                        __pos__ = 0x5;
                        continue;
                    }
                    /* IL_25: ret  ArrayInitializer.cs:36:5*/
                    return ;
                }
            }
        };
    };;
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["<PrivateImplementationDetails>{DC45ED9E-742D-40BD-B830-FCD204F7A6CF}"] = BLR.declare_type(
        "_PrivateImplementationDetails__DC45ED9E_742D_40BD_B830_FCD204F7A6CF_",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"<PrivateImplementationDetails>{DC45ED9E-742D-40BD-B830-FCD204F7A6CF}",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            (this)["$$method0x600000a-1"] = [0, 0, 0, 0, 8, 0, 0, 0, 252, 255, 255, 255, 5, 0, 0, 0, 255, 255, 255, 255, 6, 0, 0, 0, 244, 1, 0, 0, 255, 255, 255, 127, 0, 0, 0, 128];
            (this)["$$method0x600000b-1"] = [0, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 6, 0, 0, 0, 244, 1, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0];
            (this)["$$method0x600000c-1"] = [0, 8, 4, 5, 1, 255, 0];
            (this)["$$method0x600000d-1"] = [0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 244, 1, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 127, 0, 0, 0, 0, 0, 0, 0, 128];
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["<PrivateImplementationDetails>{DC45ED9E-742D-40BD-B830-FCD204F7A6CF}+__StaticArrayInitTypeSize=36"] = BLR.declare_type(
        "__StaticArrayInitTypeSize_36",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"<PrivateImplementationDetails>{DC45ED9E-742D-40BD-B830-FCD204F7A6CF}+__StaticArrayInitTypeSize=36",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["<PrivateImplementationDetails>{DC45ED9E-742D-40BD-B830-FCD204F7A6CF}+__StaticArrayInitTypeSize=7"] = BLR.declare_type(
        "__StaticArrayInitTypeSize_7",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"<PrivateImplementationDetails>{DC45ED9E-742D-40BD-B830-FCD204F7A6CF}+__StaticArrayInitTypeSize=7",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["<PrivateImplementationDetails>{DC45ED9E-742D-40BD-B830-FCD204F7A6CF}+__StaticArrayInitTypeSize=72"] = BLR.declare_type(
        "__StaticArrayInitTypeSize_72",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"<PrivateImplementationDetails>{DC45ED9E-742D-40BD-B830-FCD204F7A6CF}+__StaticArrayInitTypeSize=72",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
