
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "NestedFinallyBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.Main()*/

asm.x6000001 = function Main()
{
    var t0;
    var in_block_0;
    var __pos__;
    var in_block_1;
    var __finally_continuation_1__;
    var loc0;
    var loc1;
    var in_block_2;
    var __finally_continuation_2__;
    var loc2;
    var loc3;
    var loc4;
    
    CILJS.initBaseTypes();
    
    t0 = asm0["System.Object"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            
            try {
                
                in_block_1 = true;
                
                __finally_continuation_1__ = __pos__;
                
                if (__pos__ < 0x1){
                    
                    __pos__ = 0x1;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x1:
                        /* IL_01: nop  */
                        /* IL_02: call Int32 Get() */
                        /* IL_07: ldc.i4.0  */
                        /* IL_09: cgt.un  */
                        /* IL_0A: stloc.0  */
                        
                        loc0 = ((CILJS.unsignedValue(asm1.x6000002()) > CILJS.unsignedValue(0)) ? 1 : 0);
                        /* IL_0B: ldloc.0  */
                        /* IL_0C: brfalse.s IL_A5 */
                        
                        if ((!(loc0))){
                            
                            __pos__ = 0xA5;
                            
                            continue;
                        }
                        /* IL_0E: call Int32 Get() */
                        /* IL_13: stloc.1  */
                        
                        loc1 = asm1.x6000002();
                        /* IL_14: ldloca.s 1 */
                        /* IL_16: call String ToString() */
                        /* IL_1B: ldc.i4.0  */
                        /* IL_1C: newarr System.Object */
                        /* IL_21: call Void WriteLine(System.String, System.Object[]) */
                        
                        asm0.x6000073(asm0.x6000151({
                                    w: function (v)
                                    {
                                        
                                        loc1 = v;
                                    },
                                    r: function ()
                                    {
                                        
                                        return loc1;
                                    }
                                }),CILJS.newArray(t0,0));
                        /* IL_26: nop  */
                        case 0x27:
                        /* IL_27: nop  */
                        /* IL_28: leave.s IL_A5 */
                        
                        in_block_1 = false;
                        
                        __pos__ = 0xA5;
                        
                        continue;
                    }
                }
            }
            
            finally {
                
                in_block_1 = true;
                
                __finally_continuation_1__ = __pos__;
                
                __pos__ = 0x2A;
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x2A:
                        /* IL_2A: nop  */
                        
                        try {
                            
                            in_block_2 = true;
                            
                            __finally_continuation_2__ = __pos__;
                            
                            if (__pos__ < 0x2B){
                                
                                __pos__ = 0x2B;
                            }
                            
                            while (in_block_2){
                                
                                switch (__pos__){
                                    case 0x2B:
                                    /* IL_2B: nop  */
                                    /* IL_2C: call Int32 Get() */
                                    /* IL_31: ldc.i4.0  */
                                    /* IL_33: cgt.un  */
                                    /* IL_34: stloc.2  */
                                    
                                    loc2 = ((CILJS.unsignedValue(asm1.x6000002()) > CILJS.unsignedValue(0)) ? 1 : 0);
                                    /* IL_35: ldloc.2  */
                                    /* IL_36: brfalse.s IL_7C */
                                    
                                    if ((!(loc2))){
                                        
                                        __pos__ = 0x7C;
                                        
                                        continue;
                                    }
                                    /* IL_38: call Int32 Get() */
                                    /* IL_3D: stloc.1  */
                                    
                                    loc1 = asm1.x6000002();
                                    /* IL_3E: ldloca.s 1 */
                                    /* IL_40: call String ToString() */
                                    /* IL_45: ldc.i4.0  */
                                    /* IL_46: newarr System.Object */
                                    /* IL_4B: call Void WriteLine(System.String, System.Object[]) */
                                    
                                    asm0.x6000073(asm0.x6000151({
                                                w: function (v)
                                                {
                                                    
                                                    loc1 = v;
                                                },
                                                r: function ()
                                                {
                                                    
                                                    return loc1;
                                                }
                                            }),CILJS.newArray(t0,0));
                                    /* IL_50: nop  */
                                    case 0x51:
                                    /* IL_51: nop  */
                                    /* IL_52: leave.s IL_7C */
                                    
                                    in_block_2 = false;
                                    
                                    __pos__ = 0x7C;
                                    
                                    continue;
                                }
                            }
                        }
                        
                        finally {
                            
                            in_block_2 = true;
                            
                            __finally_continuation_2__ = __pos__;
                            
                            __pos__ = 0x54;
                            
                            while (in_block_2){
                                
                                switch (__pos__){
                                    case 0x54:
                                    /* IL_54: nop  */
                                    /* IL_55: call Int32 Get() */
                                    /* IL_5A: ldc.i4.0  */
                                    /* IL_5C: cgt.un  */
                                    /* IL_5D: stloc.3  */
                                    
                                    loc3 = ((CILJS.unsignedValue(asm1.x6000002()) > CILJS.unsignedValue(0)) ? 1 : 0);
                                    /* IL_5E: ldloc.3  */
                                    /* IL_5F: brfalse.s IL_7A */
                                    
                                    if ((!(loc3))){
                                        
                                        __pos__ = 0x7A;
                                        
                                        continue;
                                    }
                                    /* IL_61: call Int32 Get() */
                                    /* IL_66: stloc.1  */
                                    
                                    loc1 = asm1.x6000002();
                                    /* IL_67: ldloca.s 1 */
                                    /* IL_69: call String ToString() */
                                    /* IL_6E: ldc.i4.0  */
                                    /* IL_6F: newarr System.Object */
                                    /* IL_74: call Void WriteLine(System.String, System.Object[]) */
                                    
                                    asm0.x6000073(asm0.x6000151({
                                                w: function (v)
                                                {
                                                    
                                                    loc1 = v;
                                                },
                                                r: function ()
                                                {
                                                    
                                                    return loc1;
                                                }
                                            }),CILJS.newArray(t0,0));
                                    /* IL_79: nop  */
                                    case 0x7A:
                                    /* IL_7A: nop  */
                                    /* IL_7B: endfinally  */
                                    
                                    in_block_2 = false;
                                    
                                    __pos__ = __finally_continuation_2__;
                                    
                                    continue;
                                }
                                
                                break;
                            }
                        }
                        
                        continue;
                        case 0x7C:
                        /* IL_7C: call Int32 Get() */
                        /* IL_81: ldc.i4.0  */
                        /* IL_83: cgt.un  */
                        /* IL_84: stloc.s 4 */
                        
                        loc4 = ((CILJS.unsignedValue(asm1.x6000002()) > CILJS.unsignedValue(0)) ? 1 : 0);
                        /* IL_86: ldloc.s 4 */
                        /* IL_88: brfalse.s IL_A3 */
                        
                        if ((!(loc4))){
                            
                            __pos__ = 0xA3;
                            
                            continue;
                        }
                        /* IL_8A: call Int32 Get() */
                        /* IL_8F: stloc.1  */
                        
                        loc1 = asm1.x6000002();
                        /* IL_90: ldloca.s 1 */
                        /* IL_92: call String ToString() */
                        /* IL_97: ldc.i4.0  */
                        /* IL_98: newarr System.Object */
                        /* IL_9D: call Void WriteLine(System.String, System.Object[]) */
                        
                        asm0.x6000073(asm0.x6000151({
                                    w: function (v)
                                    {
                                        
                                        loc1 = v;
                                    },
                                    r: function ()
                                    {
                                        
                                        return loc1;
                                    }
                                }),CILJS.newArray(t0,0));
                        /* IL_A2: nop  */
                        case 0xA3:
                        /* IL_A3: nop  */
                        /* IL_A4: endfinally  */
                        
                        in_block_1 = false;
                        
                        __pos__ = __finally_continuation_1__;
                        
                        continue;
                    }
                    
                    break;
                }
            }
            
            continue;
            case 0xA5:
            /* IL_A5: ret  */
            
            return ;
        }
    }
};;/* static System.Int32 Program.Get()*/

asm.x6000002 = function Get()
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.1  */
    /* IL_02: stloc.0  */
    
    loc0 = 1;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/*  Program..ctor()*/

asm.x6000003 = function _ctor(arg0)
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
asm.entryPoint = asm.x6000001;
CILJS.declareAssembly("NestedFinallyBug.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=NestedFinallyBug.cs.ciljs.exe.js.map
