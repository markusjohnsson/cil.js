
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "Foreach.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* Iter A.GetEnumerator()*/

asm.x6000001_init = function (arg0)
{
    
    (asm1.Iter().init)();
    
    asm.x6000001 = asm.x6000001_;
};;

asm.x6000001 = function (arg0)
{
    
    asm.x6000001_init(arg0);
    
    return asm.x6000001_(arg0);
};;
asm.x6000001_ = function GetEnumerator(arg0)
{
    var t0;
    var t1;
    var loc0;
    var loc1;
    
    t0 = asm0["System.Int32"]();
    
    t1 = asm1.Iter();
    /* IL_00: nop  */
    /* IL_01: ldc.i4.5  */
    /* IL_02: newarr System.Int32 */
    /* IL_07: stloc.0  */
    
    loc0 = CILJS.newArray(t0,5);
    /* IL_08: ldloc.0  */
    /* IL_09: ldc.i4.0  */
    /* IL_0A: ldc.i4.0  */
    /* IL_0B: stelem.i4  */
    
    (loc0.jsarr)[0] = 0;
    /* IL_0C: ldloc.0  */
    /* IL_0D: ldc.i4.1  */
    /* IL_0E: ldc.i4.1  */
    /* IL_0F: stelem.i4  */
    
    (loc0.jsarr)[1] = 1;
    /* IL_10: ldloc.0  */
    /* IL_11: ldc.i4.2  */
    /* IL_12: ldc.i4.2  */
    /* IL_13: stelem.i4  */
    
    (loc0.jsarr)[2] = 2;
    /* IL_14: ldloc.0  */
    /* IL_15: ldc.i4.3  */
    /* IL_16: ldc.i4.4  */
    /* IL_17: stelem.i4  */
    
    (loc0.jsarr)[3] = 4;
    /* IL_18: ldloc.0  */
    /* IL_19: ldc.i4.4  */
    /* IL_1A: ldc.i4.8  */
    /* IL_1B: stelem.i4  */
    
    (loc0.jsarr)[4] = 8;
    /* IL_1C: ldloc.0  */
    /* IL_1D: newobj Void .ctor(System.Int32[]) */
    /* IL_22: stloc.1  */
    
    loc1 = CILJS.newobj(t1,asm1.x6000003,[null, loc0]);
    /* IL_25: ldloc.1  */
    /* IL_26: ret  */
    
    return loc1;
};/*  A..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Boolean Iter.MoveNext()*/

asm.x6000004 = function MoveNext(arg0)
{
    var st_04;
    var st_05;
    var loc0;
    var loc1;
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    
    st_04 = arg0;
    /* IL_02: ldarg.0  */
    /* IL_03: ldfld Int32 i */
    /* IL_08: ldc.i4.1  */
    /* IL_09: add  */
    /* IL_0A: stloc.0  */
    
    loc0 = (arg0.Iteri + 1) | 0;
    /* IL_0B: ldloc.0  */
    
    st_05 = loc0;
    /* IL_0C: stfld Int32 i */
    
    st_04.Iteri = st_05;
    /* IL_11: ldloc.0  */
    /* IL_12: ldarg.0  */
    /* IL_13: ldfld Int32[] nums */
    /* IL_18: ldlen  */
    /* IL_19: conv.i4  */
    /* IL_1B: clt  */
    /* IL_1C: stloc.1  */
    
    loc1 = ((loc0 < (arg0.Iternums.jsarr.length | 0)) ? 1 : 0);
    /* IL_1F: ldloc.1  */
    /* IL_20: ret  */
    
    return loc1;
};;/* System.Int32 Iter.get_Current()*/

asm.x6000005 = function get_Current(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld Int32[] nums */
    /* IL_07: ldarg.0  */
    /* IL_08: ldfld Int32 i */
    /* IL_0D: ldelem.i4  */
    /* IL_0E: stloc.0  */
    
    loc0 = (arg0.Iternums.jsarr)[arg0.Iteri];
    /* IL_11: ldloc.0  */
    /* IL_12: ret  */
    
    return loc0;
};;/*  Iter..ctor(Int32[])*/

asm.x6000003 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldc.i4.m1  */
    /* IL_02: stfld Int32 i */
    
    arg0.Iteri = -1;
    /* IL_07: ldarg.0  */
    /* IL_08: call Void .ctor() */
    /* IL_0D: nop  */
    /* IL_0E: nop  */
    /* IL_0F: ldarg.0  */
    /* IL_10: ldarg.1  */
    /* IL_11: stfld Int32[] nums */
    
    arg0.Iternums = arg1;
    /* IL_16: ret  */
    
    return ;
};;/* static System.Void Program.Main()*/

asm.x6000006_init = function ()
{
    
    (asm1.A().init)();
    
    (asm0["System.IDisposable"]().init)();
    
    asm.x6000006 = asm.x6000006_;
};;

asm.x6000006 = function ()
{
    
    asm.x6000006_init();
    
    return asm.x6000006_();
};;
asm.x6000006_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var in_block_1;
    var __finally_continuation_1__;
    var loc2;
    var loc3;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.A();
    
    t1 = asm0["System.Int32"]();
    
    t2 = asm0["System.IDisposable"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: newobj Void .ctor() */
            /* IL_06: stloc.0  */
            
            loc0 = CILJS.newobj(t0,asm1.x6000002,[null]);
            /* IL_07: nop  */
            /* IL_08: ldloc.0  */
            /* IL_09: callvirt Iter GetEnumerator() */
            /* IL_0E: stloc.1  */
            
            loc1 = asm1.x6000001(loc0);
            
            try {
                
                in_block_1 = true;
                
                __finally_continuation_1__ = __pos__;
                
                if (__pos__ < 0xF){
                    
                    __pos__ = 0xF;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0xF:
                        /* IL_0F: br.s IL_26 */
                        
                        __pos__ = 0x26;
                        
                        continue;
                        case 0x11:
                        /* IL_11: ldloc.1  */
                        /* IL_12: callvirt Int32 get_Current() */
                        /* IL_17: stloc.2  */
                        
                        loc2 = asm1.x6000005(loc1);
                        /* IL_18: nop  */
                        /* IL_19: ldloc.2  */
                        /* IL_1A: box System.Int32 */
                        /* IL_1F: call Void WriteLine(System.Object) */
                        
                        asm0.x6000072(CILJS.makeBox(loc2,t1));
                        /* IL_24: nop  */
                        /* IL_25: nop  */
                        case 0x26:
                        /* IL_26: ldloc.1  */
                        /* IL_27: callvirt Boolean MoveNext() */
                        /* IL_2C: brtrue.s IL_11 */
                        
                        if (asm1.x6000004(loc1)){
                            
                            __pos__ = 0x11;
                            
                            continue;
                        }
                        /* IL_2E: leave.s IL_42 */
                        
                        in_block_1 = false;
                        
                        __pos__ = 0x42;
                        
                        continue;
                    }
                }
            }
            
            finally {
                
                in_block_1 = true;
                
                __finally_continuation_1__ = __pos__;
                
                __pos__ = 0x30;
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x30:
                        /* IL_30: ldloc.1  */
                        /* IL_31: isinst System.IDisposable */
                        /* IL_36: stloc.3  */
                        
                        loc3 = t2.IsInst(loc1);
                        /* IL_37: ldloc.3  */
                        /* IL_38: brfalse.s IL_41 */
                        
                        if ((!(loc3))){
                            
                            __pos__ = 0x41;
                            
                            continue;
                        }
                        /* IL_3A: ldloc.3  */
                        /* IL_3B: callvirt Void Dispose() */
                        
                        ((loc3.ifacemap)[t2].x60000dd)(CILJS.convertBoxToPointerAsNeeded(loc3));
                        /* IL_40: nop  */
                        case 0x41:
                        /* IL_41: endfinally  */
                        
                        in_block_1 = false;
                        
                        __pos__ = __finally_continuation_1__;
                        
                        continue;
                    }
                    
                    break;
                }
            }
            
            continue;
            case 0x42:
            /* IL_42: ret  */
            
            return ;
        }
    }
};/*  Program..ctor()*/

asm.x6000007 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.A = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"A",false,false,false,false,false,[],[
                [asm1, "x6000001", "GetEnumerator"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000002",null);
        
        type.TypeMetadataName = "asm1.t2000002";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function A()
        {
            
            A.init();
        };
    });
asm.Iter = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Iter",false,false,false,false,false,[],[
                [asm1, "x6000004", "MoveNext"],
                [asm1, "x6000005", "get_Current"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Iter()
        {
            
            Iter.init();
            
            this.Iteri = 0;
            
            this.Iternums = null;
        };
    });
asm.Program = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
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
asm.entryPoint = asm.x6000006;
CILJS.declareAssembly("Foreach.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=Foreach.cs.ciljs.exe.js.map
