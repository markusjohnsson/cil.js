
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "ArrayInitializer.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Int32[] Program.GetIntArray()*/

asm.x6000001 = function GetIntArray()
{
    var t0;
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    var loc0;
    
    t0 = asm0["System.Int32"]();
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldc.i4.s 9 */
    
    st_00 = 9;
    /* IL_03: newarr System.Int32 */
    
    st_01 = CILJS.newArray(t0,st_00);
    /* IL_08: dup  */
    
    st_04 = st_02 = st_01;
    /* IL_09: ldtoken __StaticArrayInitTypeSize=36 F9B1568FE79B0488527D985DE5FF2A8E9CF0B9D0 */
    
    st_03 = CILJS.newHandle(asm0["System.RuntimeFieldHandle"](),{
            type: asm1["<PrivateImplementationDetails>"](),
            field: "F9B1568FE79B0488527D985DE5FF2A8E9CF0B9D0"
        });
    /* IL_0E: call Void InitializeArray(System.Array, System.RuntimeFieldHandle) */
    
    asm0.x6000175(st_02,st_03);
    /* IL_13: stloc.0  */
    
    loc0 = st_04;
    /* IL_16: ldloc.0  */
    /* IL_17: ret  */
    
    return loc0;
};;/* static System.UInt32[] Program.GetUIntArray()*/

asm.x6000002 = function GetUIntArray()
{
    var t0;
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    var loc0;
    
    t0 = asm0["System.UInt32"]();
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldc.i4.s 9 */
    
    st_00 = 9;
    /* IL_03: newarr System.UInt32 */
    
    st_01 = CILJS.newArray(t0,st_00);
    /* IL_08: dup  */
    
    st_04 = st_02 = st_01;
    /* IL_09: ldtoken __StaticArrayInitTypeSize=36 A76BEC1B9479B9E910C8CE8D84FFF8345F6EC5B5 */
    
    st_03 = CILJS.newHandle(asm0["System.RuntimeFieldHandle"](),{
            type: asm1["<PrivateImplementationDetails>"](),
            field: "A76BEC1B9479B9E910C8CE8D84FFF8345F6EC5B5"
        });
    /* IL_0E: call Void InitializeArray(System.Array, System.RuntimeFieldHandle) */
    
    asm0.x6000175(st_02,st_03);
    /* IL_13: stloc.0  */
    
    loc0 = st_04;
    /* IL_16: ldloc.0  */
    /* IL_17: ret  */
    
    return loc0;
};;/* static System.Byte[] Program.GetByteArray()*/

asm.x6000003 = function GetByteArray()
{
    var t0;
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    var loc0;
    
    t0 = asm0["System.Byte"]();
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldc.i4.7  */
    
    st_00 = 7;
    /* IL_02: newarr System.Byte */
    
    st_01 = CILJS.newArray(t0,st_00);
    /* IL_07: dup  */
    
    st_04 = st_02 = st_01;
    /* IL_08: ldtoken __StaticArrayInitTypeSize=7 62A74763762F66F6206022431BFD7DB5CDA6A815 */
    
    st_03 = CILJS.newHandle(asm0["System.RuntimeFieldHandle"](),{
            type: asm1["<PrivateImplementationDetails>"](),
            field: "62A74763762F66F6206022431BFD7DB5CDA6A815"
        });
    /* IL_0D: call Void InitializeArray(System.Array, System.RuntimeFieldHandle) */
    
    asm0.x6000175(st_02,st_03);
    /* IL_12: stloc.0  */
    
    loc0 = st_04;
    /* IL_15: ldloc.0  */
    /* IL_16: ret  */
    
    return loc0;
};;/* static System.Int64[] Program.GetLongArray()*/

asm.x6000004 = function GetLongArray()
{
    var t0;
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    var loc0;
    
    t0 = asm0["System.Int64"]();
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldc.i4.s 9 */
    
    st_00 = 9;
    /* IL_03: newarr System.Int64 */
    
    st_01 = CILJS.newArray(t0,st_00);
    /* IL_08: dup  */
    
    st_04 = st_02 = st_01;
    /* IL_09: ldtoken __StaticArrayInitTypeSize=72 445907C2EF4F26A3A6554D214D569220C5EC1808 */
    
    st_03 = CILJS.newHandle(asm0["System.RuntimeFieldHandle"](),{
            type: asm1["<PrivateImplementationDetails>"](),
            field: "445907C2EF4F26A3A6554D214D569220C5EC1808"
        });
    /* IL_0E: call Void InitializeArray(System.Array, System.RuntimeFieldHandle) */
    
    asm0.x6000175(st_02,st_03);
    /* IL_13: stloc.0  */
    
    loc0 = st_04;
    /* IL_16: ldloc.0  */
    /* IL_17: ret  */
    
    return loc0;
};;/* static System.Void Program.Main()*/

asm.x6000005 = function Main()
{
    var t0;
    var t1;
    var t2;
    var t3;
    
    CILJS.initBaseTypes();
    
    t0 = asm0["System.Int32"]();
    
    t1 = asm0["System.UInt32"]();
    
    t2 = asm0["System.Byte"]();
    
    t3 = asm0["System.Int64"]();
    /* IL_00: nop  */
    /* IL_01: call Int32[] GetIntArray() */
    /* IL_06: call Void Print[System.Int32](System.Int32[]) */
    
    (asm1.x6000006(asm0["System.Int32"]()))(asm1.x6000001());
    /* IL_0B: nop  */
    /* IL_0C: call UInt32[] GetUIntArray() */
    /* IL_11: call Void Print[System.UInt32](System.UInt32[]) */
    
    (asm1.x6000006(asm0["System.UInt32"]()))(asm1.x6000002());
    /* IL_16: nop  */
    /* IL_17: call Byte[] GetByteArray() */
    /* IL_1C: call Void Print[System.Byte](System.Byte[]) */
    
    (asm1.x6000006(asm0["System.Byte"]()))(asm1.x6000003());
    /* IL_21: nop  */
    /* IL_22: call Int64[] GetLongArray() */
    /* IL_27: call Void Print[System.Int64](System.Int64[]) */
    
    (asm1.x6000006(asm0["System.Int64"]()))(asm1.x6000004());
    /* IL_2C: nop  */
    /* IL_2D: ret  */
    
    return ;
};;/* static System.Void Program.Print<T>(T[])*/

asm.x6000006 = function (T)
{
    
    return function Print(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var in_block_1;
        var loc1;
        
        t0 = T;
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldc.i4.0  */
                /* IL_02: stloc.0  */
                
                loc0 = 0;
                /* IL_03: br.s IL_1B */
                
                __pos__ = 0x1B;
                
                continue;
                case 0x5:
                case 0x1B:
                
                in_block_1 = true;
                
                if (__pos__ < 0x5){
                    
                    __pos__ = 0x5;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x5:
                        /* IL_05: ldarg.0  */
                        /* IL_06: ldloc.0  */
                        /* IL_07: ldelem T */
                        /* IL_0C: box T */
                        /* IL_11: call Void WriteLine(System.Object) */
                        
                        asm0.x6000072(CILJS.box((arg0.jsarr)[loc0],t0));
                        /* IL_16: nop  */
                        /* IL_17: ldloc.0  */
                        /* IL_18: ldc.i4.1  */
                        /* IL_19: add  */
                        /* IL_1A: stloc.0  */
                        
                        loc0 = (loc0 + 1) | 0;
                        case 0x1B:
                        /* IL_1B: ldloc.0  */
                        /* IL_1C: ldarg.0  */
                        /* IL_1D: ldlen  */
                        /* IL_1E: conv.i4  */
                        /* IL_20: clt  */
                        /* IL_21: stloc.1  */
                        
                        loc1 = ((loc0 < (arg0.jsarr.length | 0)) ? 1 : 0);
                        /* IL_22: ldloc.1  */
                        /* IL_23: brtrue.s IL_05 */
                        
                        if (loc1){
                            
                            __pos__ = 0x5;
                            
                            continue;
                        }
                    }
                    
                    break;
                }
                
                if ((__pos__ > 0x1B) || (__pos__ < 0x5)){
                    
                    continue;
                }
                /* IL_25: ret  */
                
                return ;
            }
        }
    };
};;/*  Program..ctor()*/

asm.x6000007 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.Program = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Program()
        {
            
            Program.init();
        };
    });
asm["<PrivateImplementationDetails>"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"<PrivateImplementationDetails>",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type["445907C2EF4F26A3A6554D214D569220C5EC1808"] = [0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 244, 1, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 127, 0, 0, 0, 0, 0, 0, 0, 128];
        
        type["62A74763762F66F6206022431BFD7DB5CDA6A815"] = [0, 8, 4, 5, 1, 255, 0];
        
        type.A76BEC1B9479B9E910C8CE8D84FFF8345F6EC5B5 = [0, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 6, 0, 0, 0, 244, 1, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0];
        
        type.F9B1568FE79B0488527D985DE5FF2A8E9CF0B9D0 = [0, 0, 0, 0, 8, 0, 0, 0, 252, 255, 255, 255, 5, 0, 0, 0, 255, 255, 255, 255, 6, 0, 0, 0, 244, 1, 0, 0, 255, 255, 255, 127, 0, 0, 0, 128];
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function _PrivateImplementationDetails_()
        {
            
            _PrivateImplementationDetails_.init();
        };
    });
asm["<PrivateImplementationDetails>+__StaticArrayInitTypeSize=7"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"<PrivateImplementationDetails>+__StaticArrayInitTypeSize=7",true,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm1.t2000004",new (asm1["<PrivateImplementationDetails>+__StaticArrayInitTypeSize=7"]())());
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function __StaticArrayInitTypeSize_7()
        {
            
            __StaticArrayInitTypeSize_7.init();
        };
    });
asm["<PrivateImplementationDetails>+__StaticArrayInitTypeSize=36"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"<PrivateImplementationDetails>+__StaticArrayInitTypeSize=36",true,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm1.t2000005",new (asm1["<PrivateImplementationDetails>+__StaticArrayInitTypeSize=36"]())());
        
        type.TypeMetadataName = "asm1.t2000005";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function __StaticArrayInitTypeSize_36()
        {
            
            __StaticArrayInitTypeSize_36.init();
        };
    });
asm["<PrivateImplementationDetails>+__StaticArrayInitTypeSize=72"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"<PrivateImplementationDetails>+__StaticArrayInitTypeSize=72",true,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm1.t2000006",new (asm1["<PrivateImplementationDetails>+__StaticArrayInitTypeSize=72"]())());
        
        type.TypeMetadataName = "asm1.t2000006";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function __StaticArrayInitTypeSize_72()
        {
            
            __StaticArrayInitTypeSize_72.init();
        };
    });
asm.entryPoint = asm.x6000005;
CILJS.declareAssembly("ArrayInitializer.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=ArrayInitializer.cs.ciljs.exe.js.map
