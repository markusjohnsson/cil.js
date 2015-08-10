var asm2;(function (asm)
{
    asm.FullName = "ArrayInitializer.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Int32[] Program.GetIntArray()*/
    asm.x6000001 = function GetIntArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = (asm0)["System.Int32"]();
        /* IL_00: ldc.i4.s 9 */
        st_00 = (9|0);
        /* IL_02: newarr System.Int32 */
        st_01 = CILJS.new_array(t0,st_00);
        /* IL_07: dup  */
        st_04 = (st_02 = st_01);
        /* IL_08: ldtoken __StaticArrayInitTypeSize=36 $$method0x6000001-1 */
        st_03 = CILJS.new_handle((asm0)["System.RuntimeFieldHandle"](),{
                'type': (asm2)["<PrivateImplementationDetails>{8067C0AC-C470-47BC-ABAA-F69E2B6905DE}"](),
                'field': "$$method0x6000001-1"
            });
        /* IL_0D: call Void InitializeArray(System.Array, System.RuntimeFieldHandle) */
        asm0.x6000196(st_02,st_03);
        /* IL_12: ret  */
        return st_04;
    };;
    /* static System.UInt32[] Program.GetUIntArray()*/
    asm.x6000002 = function GetUIntArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = (asm0)["System.UInt32"]();
        /* IL_00: ldc.i4.s 9 */
        st_00 = (9|0);
        /* IL_02: newarr System.UInt32 */
        st_01 = CILJS.new_array(t0,st_00);
        /* IL_07: dup  */
        st_04 = (st_02 = st_01);
        /* IL_08: ldtoken __StaticArrayInitTypeSize=36 $$method0x6000002-1 */
        st_03 = CILJS.new_handle((asm0)["System.RuntimeFieldHandle"](),{
                'type': (asm2)["<PrivateImplementationDetails>{8067C0AC-C470-47BC-ABAA-F69E2B6905DE}"](),
                'field': "$$method0x6000002-1"
            });
        /* IL_0D: call Void InitializeArray(System.Array, System.RuntimeFieldHandle) */
        asm0.x6000196(st_02,st_03);
        /* IL_12: ret  */
        return st_04;
    };;
    /* static System.Byte[] Program.GetByteArray()*/
    asm.x6000003 = function GetByteArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = (asm0)["System.Byte"]();
        /* IL_00: ldc.i4.7  */
        st_00 = (7|0);
        /* IL_01: newarr System.Byte */
        st_01 = CILJS.new_array(t0,st_00);
        /* IL_06: dup  */
        st_04 = (st_02 = st_01);
        /* IL_07: ldtoken __StaticArrayInitTypeSize=7 $$method0x6000003-1 */
        st_03 = CILJS.new_handle((asm0)["System.RuntimeFieldHandle"](),{
                'type': (asm2)["<PrivateImplementationDetails>{8067C0AC-C470-47BC-ABAA-F69E2B6905DE}"](),
                'field': "$$method0x6000003-1"
            });
        /* IL_0C: call Void InitializeArray(System.Array, System.RuntimeFieldHandle) */
        asm0.x6000196(st_02,st_03);
        /* IL_11: ret  */
        return st_04;
    };;
    /* static System.Int64[] Program.GetLongArray()*/
    asm.x6000004 = function GetLongArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = (asm0)["System.Int64"]();
        /* IL_00: ldc.i4.s 9 */
        st_00 = (9|0);
        /* IL_02: newarr System.Int64 */
        st_01 = CILJS.new_array(t0,st_00);
        /* IL_07: dup  */
        st_04 = (st_02 = st_01);
        /* IL_08: ldtoken __StaticArrayInitTypeSize=72 $$method0x6000004-1 */
        st_03 = CILJS.new_handle((asm0)["System.RuntimeFieldHandle"](),{
                'type': (asm2)["<PrivateImplementationDetails>{8067C0AC-C470-47BC-ABAA-F69E2B6905DE}"](),
                'field': "$$method0x6000004-1"
            });
        /* IL_0D: call Void InitializeArray(System.Array, System.RuntimeFieldHandle) */
        asm0.x6000196(st_02,st_03);
        /* IL_12: ret  */
        return st_04;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000005 = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.UInt32"]();
        t2 = (asm0)["System.Byte"]();
        t3 = (asm0)["System.Int64"]();
        /* IL_00: call Int32[] GetIntArray() */
        /* IL_05: call Void Print[System.Int32](System.Int32[]) */
        (asm2.x6000006((asm0)["System.Int32"]()))(asm2.x6000001());
        /* IL_0A: call UInt32[] GetUIntArray() */
        /* IL_0F: call Void Print[System.UInt32](System.UInt32[]) */
        (asm2.x6000006((asm0)["System.UInt32"]()))(asm2.x6000002());
        /* IL_14: call Byte[] GetByteArray() */
        /* IL_19: call Void Print[System.Byte](System.Byte[]) */
        (asm2.x6000006((asm0)["System.Byte"]()))(asm2.x6000003());
        /* IL_1E: call Int64[] GetLongArray() */
        /* IL_23: call Void Print[System.Int64](System.Int64[]) */
        (asm2.x6000006((asm0)["System.Int64"]()))(asm2.x6000004());
        /* IL_28: ret  */
        return ;
    };;
    /* static System.Void Program.Print<T>(T[])*/
    asm.x6000006 = function (T)
    {
        return function Print(arg0)
        {
            var t0;
            var in_block_0;
            var __pos__;
            var loc0;
            t0 = T;
            in_block_0 = true;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: ldc.i4.0  */
                    /* IL_01: stloc.0  */
                    loc0 = (0|0);
                    /* IL_02: br.s IL_19 */
                    __pos__ = 0x19;
                    continue;
                    case 0x4:
                    /* IL_04: ldarg.0  */
                    /* IL_05: ldloc.0  */
                    /* IL_06: ldelem T */
                    /* IL_0B: box T */
                    /* IL_10: call Void Log(System.Object) */
                    asm1.x6000001(CILJS.box((arg0.jsarr)[loc0],t0));
                    /* IL_15: ldloc.0  */
                    /* IL_16: ldc.i4.1  */
                    /* IL_17: add  */
                    /* IL_18: stloc.0  */
                    loc0 = (loc0 + (1|0)) | (0|0);
                    case 0x19:
                    /* IL_19: ldloc.0  */
                    /* IL_1A: ldarg.0  */
                    /* IL_1B: ldlen  */
                    /* IL_1C: conv.i4  */
                    /* IL_1D: blt.s IL_04 */
                    
                    if (loc0 < (arg0.jsarr.length | (0|0))){
                        __pos__ = 0x4;
                        continue;
                    }
                    /* IL_1F: ret  */
                    return ;
                }
            }
        };
    };;
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["<PrivateImplementationDetails>{8067C0AC-C470-47BC-ABAA-F69E2B6905DE}"] = CILJS.declare_type(
        "_PrivateImplementationDetails__8067C0AC_C470_47BC_ABAA_F69E2B6905DE_",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"<PrivateImplementationDetails>{8067C0AC-C470-47BC-ABAA-F69E2B6905DE}",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            (this)["$$method0x6000001-1"] = [0, 0, 0, 0, 8, 0, 0, 0, 252, 255, 255, 255, 5, 0, 0, 0, 255, 255, 255, 255, 6, 0, 0, 0, 244, 1, 0, 0, 255, 255, 255, 127, 0, 0, 0, 128];
            (this)["$$method0x6000002-1"] = [0, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 6, 0, 0, 0, 244, 1, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0];
            (this)["$$method0x6000003-1"] = [0, 8, 4, 5, 1, 255, 0];
            (this)["$$method0x6000004-1"] = [0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 244, 1, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 127, 0, 0, 0, 0, 0, 0, 0, 128];
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["<PrivateImplementationDetails>{8067C0AC-C470-47BC-ABAA-F69E2B6905DE}+__StaticArrayInitTypeSize=36"] = CILJS.declare_type(
        "__StaticArrayInitTypeSize_36",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"<PrivateImplementationDetails>{8067C0AC-C470-47BC-ABAA-F69E2B6905DE}+__StaticArrayInitTypeSize=36",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["<PrivateImplementationDetails>{8067C0AC-C470-47BC-ABAA-F69E2B6905DE}+__StaticArrayInitTypeSize=7"] = CILJS.declare_type(
        "__StaticArrayInitTypeSize_7",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"<PrivateImplementationDetails>{8067C0AC-C470-47BC-ABAA-F69E2B6905DE}+__StaticArrayInitTypeSize=7",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["<PrivateImplementationDetails>{8067C0AC-C470-47BC-ABAA-F69E2B6905DE}+__StaticArrayInitTypeSize=72"] = CILJS.declare_type(
        "__StaticArrayInitTypeSize_72",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"<PrivateImplementationDetails>{8067C0AC-C470-47BC-ABAA-F69E2B6905DE}+__StaticArrayInitTypeSize=72",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm2.t2000006");
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000005;
})(asm2 || (asm2 = {}));
