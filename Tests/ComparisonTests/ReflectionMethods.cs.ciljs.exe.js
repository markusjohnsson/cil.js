
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "ReflectionMethods.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.Void A.X()*/

asm.x6000001 = function X(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/* System.Void A.Y()*/

asm.x6000002 = function Y(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/* System.Void A.Z()*/

asm.x6000003 = function Z(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/*  A..ctor()*/

asm.x6000004 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Program.Sort(MethodInfo[])*/

asm.x6000005 = function Sort(arg0)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var in_block_1;
    var loc1;
    var in_block_2;
    var loc2;
    var loc3;
    var loc4;
    var loc5;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldc.i4.0  */
            /* IL_02: stloc.0  */
            
            loc0 = 0;
            /* IL_03: br.s IL_55 */
            
            __pos__ = 0x55;
            
            continue;
            case 0x5:
            case 0xA:
            case 0x3D:
            case 0x42:
            case 0x55:
            
            in_block_1 = true;
            
            if (__pos__ < 0x5){
                
                __pos__ = 0x5;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x5:
                    /* IL_05: nop  */
                    /* IL_06: ldc.i4.0  */
                    /* IL_07: stloc.1  */
                    
                    loc1 = 0;
                    /* IL_08: br.s IL_42 */
                    
                    __pos__ = 0x42;
                    
                    continue;
                    case 0xA:
                    case 0x3D:
                    case 0x42:
                    
                    in_block_2 = true;
                    
                    if (__pos__ < 0xA){
                        
                        __pos__ = 0xA;
                    }
                    
                    while (in_block_2){
                        
                        switch (__pos__){
                            case 0xA:
                            /* IL_0A: nop  */
                            /* IL_0B: ldarg.0  */
                            /* IL_0C: ldloc.1  */
                            /* IL_0D: ldelem.ref  */
                            /* IL_0E: callvirt String get_Name() */
                            /* IL_13: ldarg.0  */
                            /* IL_14: ldloc.1  */
                            /* IL_15: ldc.i4.1  */
                            /* IL_16: add  */
                            /* IL_17: ldelem.ref  */
                            /* IL_18: callvirt String get_Name() */
                            /* IL_1D: callvirt Int32 CompareTo(System.String) */
                            /* IL_22: ldc.i4.0  */
                            /* IL_24: cgt  */
                            /* IL_25: stloc.2  */
                            
                            loc2 = ((((((CILJS.ldelemRef(arg0,loc1).vtable)["asm0.x60001ca"])(CILJS.ldelemRef(arg0,loc1)).vtable)["asm0.x60000d3"])(((CILJS.ldelemRef(arg0,loc1).vtable)["asm0.x60001ca"])(CILJS.ldelemRef(arg0,loc1)),((CILJS.ldelemRef(arg0,(loc1 + 1) | 0).vtable)["asm0.x60001ca"])(CILJS.ldelemRef(arg0,(loc1 + 1) | 0))) > 0) ? 1 : 0);
                            /* IL_26: ldloc.2  */
                            /* IL_27: brfalse.s IL_3D */
                            
                            if ((!(loc2))){
                                
                                __pos__ = 0x3D;
                                
                                continue;
                            }
                            /* IL_29: nop  */
                            /* IL_2A: ldarg.0  */
                            /* IL_2B: ldloc.1  */
                            /* IL_2C: ldc.i4.1  */
                            /* IL_2D: add  */
                            /* IL_2E: ldelem.ref  */
                            /* IL_2F: stloc.3  */
                            
                            loc3 = CILJS.ldelemRef(arg0,(loc1 + 1) | 0);
                            /* IL_30: ldarg.0  */
                            /* IL_31: ldloc.1  */
                            /* IL_32: ldc.i4.1  */
                            /* IL_33: add  */
                            /* IL_34: ldarg.0  */
                            /* IL_35: ldloc.1  */
                            /* IL_36: ldelem.ref  */
                            /* IL_37: stelem.ref  */
                            
                            CILJS.stelemRef(arg0,(loc1 + 1) | 0,CILJS.ldelemRef(arg0,loc1));
                            /* IL_38: ldarg.0  */
                            /* IL_39: ldloc.1  */
                            /* IL_3A: ldloc.3  */
                            /* IL_3B: stelem.ref  */
                            
                            CILJS.stelemRef(arg0,loc1,loc3);
                            /* IL_3C: nop  */
                            case 0x3D:
                            /* IL_3D: nop  */
                            /* IL_3E: ldloc.1  */
                            /* IL_3F: ldc.i4.1  */
                            /* IL_40: add  */
                            /* IL_41: stloc.1  */
                            
                            loc1 = (loc1 + 1) | 0;
                            case 0x42:
                            /* IL_42: ldloc.1  */
                            /* IL_43: ldarg.0  */
                            /* IL_44: ldlen  */
                            /* IL_45: conv.i4  */
                            /* IL_46: ldc.i4.1  */
                            /* IL_47: sub  */
                            /* IL_49: clt  */
                            /* IL_4A: stloc.s 4 */
                            
                            loc4 = ((loc1 < (((arg0.jsarr.length | 0) - 1) | 0)) ? 1 : 0);
                            /* IL_4C: ldloc.s 4 */
                            /* IL_4E: brtrue.s IL_0A */
                            
                            if (loc4){
                                
                                __pos__ = 0xA;
                                
                                continue;
                            }
                        }
                        
                        break;
                    }
                    
                    if ((__pos__ > 0x42) || (__pos__ < 0xA)){
                        
                        continue;
                    }
                    /* IL_50: nop  */
                    /* IL_51: ldloc.0  */
                    /* IL_52: ldc.i4.1  */
                    /* IL_53: add  */
                    /* IL_54: stloc.0  */
                    
                    loc0 = (loc0 + 1) | 0;
                    case 0x55:
                    /* IL_55: ldloc.0  */
                    /* IL_56: ldarg.0  */
                    /* IL_57: ldlen  */
                    /* IL_58: conv.i4  */
                    /* IL_5A: clt  */
                    /* IL_5B: stloc.s 5 */
                    
                    loc5 = ((loc0 < (arg0.jsarr.length | 0)) ? 1 : 0);
                    /* IL_5D: ldloc.s 5 */
                    /* IL_5F: brtrue.s IL_05 */
                    
                    if (loc5){
                        
                        __pos__ = 0x5;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x55) || (__pos__ < 0x5)){
                
                continue;
            }
            /* IL_61: ret  */
            
            return ;
        }
    }
};;/* static System.Void Program.Main()*/

asm.x6000006_init = function ()
{
    
    (asm1.A().init)();
    
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
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    var in_block_1;
    var loc4;
    
    CILJS.initBaseTypes();
    
    t0 = asm1.A();
    
    t1 = asm0["System.Object"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldtoken A */
            /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
            /* IL_0B: stloc.0  */
            
            loc0 = asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0));
            /* IL_0C: ldloc.0  */
            /* IL_0D: call TypeInfo GetTypeInfo(System.Type) */
            /* IL_12: callvirt MethodInfo[] GetMethods() */
            /* IL_17: stloc.1  */
            
            loc1 = ((asm0.x60001c4(loc0).vtable)["asm0.x6000055"])(asm0.x60001c4(loc0));
            /* IL_18: ldloc.1  */
            /* IL_19: call Void Sort(System.Reflection.MethodInfo[]) */
            
            asm1.x6000005(loc1);
            /* IL_1E: nop  */
            /* IL_1F: nop  */
            /* IL_20: ldloc.1  */
            /* IL_21: stloc.2  */
            
            loc2 = loc1;
            /* IL_22: ldc.i4.0  */
            /* IL_23: stloc.3  */
            
            loc3 = 0;
            /* IL_24: br.s IL_42 */
            
            __pos__ = 0x42;
            
            continue;
            case 0x26:
            case 0x42:
            
            in_block_1 = true;
            
            if (__pos__ < 0x26){
                
                __pos__ = 0x26;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x26:
                    /* IL_26: ldloc.2  */
                    /* IL_27: ldloc.3  */
                    /* IL_28: ldelem.ref  */
                    /* IL_29: stloc.s 4 */
                    
                    loc4 = CILJS.ldelemRef(loc2,loc3);
                    /* IL_2B: ldloc.s 4 */
                    /* IL_2D: callvirt String get_Name() */
                    /* IL_32: ldc.i4.0  */
                    /* IL_33: newarr System.Object */
                    /* IL_38: call Void WriteLine(System.String, System.Object[]) */
                    
                    asm0.x6000073((loc4.vtable)["asm0.x60001ca"](loc4),CILJS.newArray(t1,0));
                    /* IL_3D: nop  */
                    /* IL_3E: ldloc.3  */
                    /* IL_3F: ldc.i4.1  */
                    /* IL_40: add  */
                    /* IL_41: stloc.3  */
                    
                    loc3 = (loc3 + 1) | 0;
                    case 0x42:
                    /* IL_42: ldloc.3  */
                    /* IL_43: ldloc.2  */
                    /* IL_44: ldlen  */
                    /* IL_45: conv.i4  */
                    /* IL_46: blt.s IL_26 */
                    
                    if (loc3 < (loc2.jsarr.length | 0)){
                        
                        __pos__ = 0x26;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x42) || (__pos__ < 0x26)){
                
                continue;
            }
            /* IL_48: ret  */
            
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
                [asm1, "x6000001", "X"],
                [asm1, "x6000002", "Y"],
                [asm1, "x6000003", "Z"]
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
asm.Program = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
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
CILJS.declareAssembly("ReflectionMethods.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=ReflectionMethods.cs.ciljs.exe.js.map
