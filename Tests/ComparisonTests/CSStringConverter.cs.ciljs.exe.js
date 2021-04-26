
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "CSStringConverter.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.Main()*/

asm.x6000001 = function Main()
{
    
    CILJS.initBaseTypes();
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/*  Program..ctor()*/

asm.x6000002 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void S.Append(String)*/

asm.x6000003 = function Append(arg0, arg1)
{
    var t0;
    
    t0 = asm0["System.Object"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.1  */
    /* IL_02: ldc.i4.0  */
    /* IL_03: newarr System.Object */
    /* IL_08: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(arg1,CILJS.newArray(t0,0));
    /* IL_0D: nop  */
    /* IL_0E: ret  */
    
    return ;
};;/* System.Void S.Append(Char)*/

asm.x6000004 = function Append(arg0, arg1)
{
    var t0;
    
    t0 = asm0["System.Char"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.1  */
    /* IL_02: box System.Char */
    /* IL_07: call Void WriteLine(System.Object) */
    
    asm0.x6000072(CILJS.makeBox(arg1,t0));
    /* IL_0C: nop  */
    /* IL_0D: ret  */
    
    return ;
};;/*  S..ctor()*/

asm.x6000005 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.String CSStringConverter.Convert(String)*/

asm.x6000006_init = function (arg0)
{
    
    (asm1.S().init)();
    
    asm.x6000006 = asm.x6000006_;
};;

asm.x6000006 = function (arg0)
{
    
    asm.x6000006_init(arg0);
    
    return asm.x6000006_(arg0);
};;
asm.x6000006_ = function Convert(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var __switch_value__;
    var __jmp__;
    var loc3;
    var loc4;
    
    t0 = asm1.S();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: newobj Void .ctor() */
            /* IL_06: stloc.0  */
            
            loc0 = CILJS.newobj(t0,asm1.x6000005,[null]);
            /* IL_07: ldloc.0  */
            /* IL_08: ldc.i4.s 34 */
            /* IL_0A: callvirt Void Append(System.Char) */
            
            asm1.x6000004(loc0,34);
            /* IL_0F: nop  */
            /* IL_10: ldc.i4.0  */
            /* IL_11: stloc.1  */
            
            loc1 = 0;
            /* IL_12: br IL_EC */
            
            __pos__ = 0xEC;
            
            continue;
            case 0x17:
            /* IL_17: nop  */
            /* IL_18: ldarg.0  */
            /* IL_19: ldloc.1  */
            /* IL_1A: callvirt Char get_Chars(System.Int32) */
            /* IL_1F: stloc.2  */
            
            loc2 = asm0.x60000b9(arg0,loc1);
            /* IL_20: ldloc.2  */
            /* IL_21: ldc.i4.s 34 */
            /* IL_23: bgt.un.s IL_53 */
            
            if (CILJS.unsignedValue(loc2) > CILJS.unsignedValue(34)){
                
                __pos__ = 0x53;
                
                continue;
            }
            /* IL_25: ldloc.2  */
            /* IL_26: brfalse.s IL_91 */
            
            if ((!(loc2))){
                
                __pos__ = 0x91;
                
                continue;
            }
            /* IL_2A: ldloc.2  */
            /* IL_2B: ldc.i4.s 9 */
            /* IL_2D: sub  */
            /* IL_2E: switch System.Int32[] */
            
            __switch_value__ = CILJS.unsignedValue((loc2 - 9) | 0);
            
            if (__switch_value__ >= 0x5){
                
                __pos__ = 0x47;
                
                continue;
            }
            
            __jmp__ = [
                0x58,
                0x66,
                0x90,
                0x90,
                0x74
            ];
            
            __pos__ = (0x47 + __jmp__[__switch_value__]);
            
            continue;
            case 0x49:
            /* IL_49: ldloc.2  */
            /* IL_4A: ldc.i4.s 34 */
            /* IL_4C: beq.s IL_C9 */
            
            if (loc2 === 34){
                
                __pos__ = 0xC9;
                
                continue;
            }
            /* IL_4E: br IL_D7 */
            
            __pos__ = 0xD7;
            
            continue;
            case 0x53:
            /* IL_53: ldloc.2  */
            /* IL_54: ldc.i4.s 92 */
            /* IL_56: beq.s IL_6E */
            
            if (loc2 === 92){
                
                __pos__ = 0x6E;
                
                continue;
            }
            /* IL_5A: ldloc.2  */
            /* IL_5B: ldc.i4 8232 */
            /* IL_60: beq.s IL_7C */
            
            if (loc2 === 8232){
                
                __pos__ = 0x7C;
                
                continue;
            }
            /* IL_64: ldloc.2  */
            /* IL_65: ldc.i4 8233 */
            /* IL_6A: beq.s IL_7C */
            
            if (loc2 === 8233){
                
                __pos__ = 0x7C;
                
                continue;
            }
            /* IL_6C: br.s IL_D7 */
            
            __pos__ = 0xD7;
            
            continue;
            case 0x6E:
            /* IL_6E: ldloc.0  */
            /* IL_6F: ldstr \\ */
            /* IL_74: callvirt Void Append(System.String) */
            
            asm1.x6000003(loc0,CILJS.newString("\\\\"));
            /* IL_79: nop  */
            /* IL_7A: br.s IL_E7 */
            
            __pos__ = 0xE7;
            
            continue;
            case 0x7C:
            /* IL_7C: ldloc.0  */
            /* IL_7D: ldarg.0  */
            /* IL_7E: ldloc.1  */
            /* IL_7F: callvirt Char get_Chars(System.Int32) */
            /* IL_84: call String EscapeChar(System.Char) */
            /* IL_89: callvirt Void Append(System.String) */
            
            asm1.x6000003(loc0,asm1.x6000007(asm0.x60000b9(arg0,loc1)));
            /* IL_8E: nop  */
            /* IL_8F: br.s IL_E7 */
            
            __pos__ = 0xE7;
            
            continue;
            case 0x91:
            /* IL_91: ldloc.0  */
            /* IL_92: ldstr \0 */
            /* IL_97: callvirt Void Append(System.String) */
            
            asm1.x6000003(loc0,CILJS.newString("\\0"));
            /* IL_9C: nop  */
            /* IL_9D: br.s IL_E7 */
            
            __pos__ = 0xE7;
            
            continue;
            case 0x9F:
            /* IL_9F: ldloc.0  */
            /* IL_A0: ldstr \t */
            /* IL_A5: callvirt Void Append(System.String) */
            
            asm1.x6000003(loc0,CILJS.newString("\\t"));
            /* IL_AA: nop  */
            /* IL_AB: br.s IL_E7 */
            
            __pos__ = 0xE7;
            
            continue;
            case 0xAD:
            /* IL_AD: ldloc.0  */
            /* IL_AE: ldstr \n */
            /* IL_B3: callvirt Void Append(System.String) */
            
            asm1.x6000003(loc0,CILJS.newString("\\n"));
            /* IL_B8: nop  */
            /* IL_B9: br.s IL_E7 */
            
            __pos__ = 0xE7;
            
            continue;
            case 0xBB:
            /* IL_BB: ldloc.0  */
            /* IL_BC: ldstr \r */
            /* IL_C1: callvirt Void Append(System.String) */
            
            asm1.x6000003(loc0,CILJS.newString("\\r"));
            /* IL_C6: nop  */
            /* IL_C7: br.s IL_E7 */
            
            __pos__ = 0xE7;
            
            continue;
            case 0xC9:
            /* IL_C9: ldloc.0  */
            /* IL_CA: ldstr \" */
            /* IL_CF: callvirt Void Append(System.String) */
            
            asm1.x6000003(loc0,CILJS.newString("\\\""));
            /* IL_D4: nop  */
            /* IL_D5: br.s IL_E7 */
            
            __pos__ = 0xE7;
            
            continue;
            case 0xD7:
            /* IL_D7: ldloc.0  */
            /* IL_D8: ldarg.0  */
            /* IL_D9: ldloc.1  */
            /* IL_DA: callvirt Char get_Chars(System.Int32) */
            /* IL_DF: callvirt Void Append(System.Char) */
            
            asm1.x6000004(loc0,asm0.x60000b9(arg0,loc1));
            /* IL_E4: nop  */
            case 0xE7:
            /* IL_E7: nop  */
            /* IL_E8: ldloc.1  */
            /* IL_E9: ldc.i4.1  */
            /* IL_EA: add  */
            /* IL_EB: stloc.1  */
            
            loc1 = (loc1 + 1) | 0;
            case 0xEC:
            /* IL_EC: ldloc.1  */
            /* IL_ED: ldarg.0  */
            /* IL_EE: callvirt Int32 get_Length() */
            /* IL_F4: clt  */
            /* IL_F5: stloc.3  */
            
            loc3 = ((loc1 < asm0.x60000c3(arg0)) ? 1 : 0);
            /* IL_F6: ldloc.3  */
            /* IL_F7: brtrue IL_17 */
            
            if (loc3){
                
                __pos__ = 0x17;
                
                continue;
            }
            /* IL_FC: ldloc.0  */
            /* IL_FD: ldc.i4.s 34 */
            /* IL_FF: callvirt Void Append(System.Char) */
            
            asm1.x6000004(loc0,34);
            /* IL_104: nop  */
            /* IL_105: ldloc.0  */
            /* IL_106: callvirt String ToString() */
            /* IL_10B: stloc.s 4 */
            
            loc4 = (loc0.vtable)["asm0.x600009b"](loc0);
            /* IL_10F: ldloc.s 4 */
            /* IL_111: ret  */
            
            return loc4;
        }
    }
};/* static System.String CSStringConverter.EscapeChar(Char)*/

asm.x6000007 = function EscapeChar(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Int32"]();
    /* IL_00: nop  */
    /* IL_01: ldstr \u */
    /* IL_06: ldarg.0  */
    /* IL_07: box System.Int32 */
    /* IL_0C: call String Concat(System.Object, System.Object) */
    /* IL_11: stloc.0  */
    
    loc0 = asm0.x60000bf(CILJS.newString("\\u"),CILJS.makeBox(arg0,t0));
    /* IL_14: ldloc.0  */
    /* IL_15: ret  */
    
    return loc0;
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
asm.S = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"S",false,false,false,false,false,[],[
                [asm1, "x6000003", "Append"],
                [asm1, "x6000004", "Append"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000003",null);
        
        type.TypeMetadataName = "asm1.t2000003";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function S()
        {
            
            S.init();
        };
    });
asm.CSStringConverter = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"CSStringConverter",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm1.t2000004",null);
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function CSStringConverter()
        {
            
            CSStringConverter.init();
        };
    });
asm.entryPoint = asm.x6000001;
CILJS.declareAssembly("CSStringConverter.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=CSStringConverter.cs.ciljs.exe.js.map
