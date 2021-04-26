
var CILJS = require("../CilJs.Runtime/Runtime");
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.findAssembly("mscorlib");
asm.FullName = "Loops.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* static System.Void Program.Main()*/

asm.x6000001 = function Main()
{
    var t0;
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    var st_05;
    var st_06;
    var st_07;
    var st_08;
    var st_09;
    var st_0A;
    var st_0B;
    var st_0C;
    var st_0D;
    
    CILJS.initBaseTypes();
    
    t0 = asm0["System.Object"]();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: call Void Break() */
    
    asm1.x6000002();
    /* IL_06: nop  */
    /* IL_07: call Void Continue() */
    
    asm1.x6000003();
    /* IL_0C: nop  */
    /* IL_0D: call Void Nested() */
    
    asm1.x6000004();
    /* IL_12: nop  */
    /* IL_13: call Void Gotos() */
    
    asm1.x6000005();
    /* IL_18: nop  */
    /* IL_19: call Void For() */
    
    asm1.x6000006();
    /* IL_1E: nop  */
    /* IL_1F: call Void Foreach() */
    
    asm1.x6000007();
    /* IL_24: nop  */
    /* IL_25: ldstr {0}: {1} */
    
    st_09 = CILJS.newString("{0}: {1}");
    /* IL_2A: ldc.i4.2  */
    
    st_00 = 2;
    /* IL_2B: newarr System.Object */
    
    st_01 = CILJS.newArray(t0,st_00);
    /* IL_30: dup  */
    
    st_05 = st_02 = st_01;
    /* IL_31: ldc.i4.0  */
    
    st_03 = 0;
    /* IL_32: ldstr hey */
    
    st_04 = CILJS.newString("hey");
    /* IL_37: stelem.ref  */
    
    CILJS.stelemRef(st_02,st_03,st_04);
    /* IL_38: dup  */
    
    st_0A = st_06 = st_05;
    /* IL_39: ldc.i4.1  */
    
    st_07 = 1;
    /* IL_3A: ldstr ho */
    
    st_08 = CILJS.newString("ho");
    /* IL_3F: stelem.ref  */
    
    CILJS.stelemRef(st_06,st_07,st_08);
    /* IL_40: call String Format(System.String, System.Object[]) */
    
    st_0C = asm1.x6000008(st_09,st_0A);
    /* IL_45: ldc.i4.0  */
    
    st_0B = 0;
    /* IL_46: newarr System.Object */
    
    st_0D = CILJS.newArray(t0,st_0B);
    /* IL_4B: call Void WriteLine(System.String, System.Object[]) */
    
    asm0.x6000073(st_0C,st_0D);
    /* IL_50: nop  */
    /* IL_51: ret  */
    
    return ;
};;/* static System.Void Program.Break()*/

asm.x6000002 = function Break()
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var in_block_1;
    var loc1;
    var loc2;
    var loc3;
    
    t0 = asm0["System.Int32"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldc.i4.1  */
            /* IL_02: stloc.0  */
            
            loc0 = 1;
            /* IL_03: br.s IL_1F */
            
            __pos__ = 0x1F;
            
            continue;
            case 0x5:
            case 0x10:
            case 0x1A:
            case 0x1F:
            
            in_block_1 = true;
            
            if (__pos__ < 0x5){
                
                __pos__ = 0x5;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x5:
                    /* IL_05: nop  */
                    /* IL_06: ldloc.0  */
                    /* IL_07: ldc.i4.2  */
                    /* IL_09: cgt  */
                    /* IL_0A: stloc.1  */
                    
                    loc1 = ((loc0 > 2) ? 1 : 0);
                    /* IL_0B: ldloc.1  */
                    /* IL_0C: brfalse.s IL_10 */
                    
                    if ((!(loc1))){
                        
                        __pos__ = 0x10;
                        
                        continue;
                    }
                    /* IL_0E: br.s IL_23 */
                    
                    __pos__ = 0x23;
                    
                    continue;
                    case 0x10:
                    /* IL_10: ldloc.0  */
                    /* IL_11: ldc.i4.3  */
                    /* IL_13: cgt  */
                    /* IL_14: stloc.2  */
                    
                    loc2 = ((loc0 > 3) ? 1 : 0);
                    /* IL_15: ldloc.2  */
                    /* IL_16: brfalse.s IL_1A */
                    
                    if ((!(loc2))){
                        
                        __pos__ = 0x1A;
                        
                        continue;
                    }
                    /* IL_18: br.s IL_23 */
                    
                    __pos__ = 0x23;
                    
                    continue;
                    case 0x1A:
                    /* IL_1A: ldloc.0  */
                    /* IL_1B: ldc.i4.1  */
                    /* IL_1C: add  */
                    /* IL_1D: stloc.0  */
                    
                    loc0 = (loc0 + 1) | 0;
                    /* IL_1E: nop  */
                    case 0x1F:
                    /* IL_1F: ldc.i4.1  */
                    /* IL_20: stloc.3  */
                    
                    loc3 = 1;
                    /* IL_21: br.s IL_05 */
                    
                    __pos__ = 0x5;
                    
                    continue;
                }
                
                break;
            }
            case 0x23:
            /* IL_23: ldloc.0  */
            /* IL_24: box System.Int32 */
            /* IL_29: call Void WriteLine(System.Object) */
            
            asm0.x6000072(CILJS.makeBox(loc0,t0));
            /* IL_2E: nop  */
            /* IL_2F: ret  */
            
            return ;
        }
    }
};;/* static System.Void Program.Continue()*/

asm.x6000003 = function Continue()
{
    var in_block_0;
    var __pos__;
    var loc0;
    var in_block_1;
    var loc1;
    var loc2;
    var loc3;
    var loc4;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldc.i4.1  */
            /* IL_02: stloc.0  */
            
            loc0 = 1;
            /* IL_03: br.s IL_29 */
            
            __pos__ = 0x29;
            
            continue;
            case 0x5:
            case 0x14:
            case 0x1E:
            case 0x28:
            case 0x29:
            
            in_block_1 = true;
            
            if (__pos__ < 0x5){
                
                __pos__ = 0x5;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x5:
                    /* IL_05: nop  */
                    /* IL_06: ldloc.0  */
                    /* IL_07: ldc.i4.1  */
                    /* IL_08: add  */
                    /* IL_09: stloc.0  */
                    
                    loc0 = (loc0 + 1) | 0;
                    /* IL_0A: ldloc.0  */
                    /* IL_0B: ldc.i4.4  */
                    /* IL_0D: ceq  */
                    /* IL_0E: stloc.1  */
                    
                    loc1 = ((loc0 === 4) ? 1 : 0);
                    /* IL_0F: ldloc.1  */
                    /* IL_10: brfalse.s IL_14 */
                    
                    if ((!(loc1))){
                        
                        __pos__ = 0x14;
                        
                        continue;
                    }
                    /* IL_12: br.s IL_2E */
                    
                    __pos__ = 0x2E;
                    
                    continue;
                    case 0x14:
                    /* IL_14: ldloc.0  */
                    /* IL_15: ldc.i4.2  */
                    /* IL_17: cgt  */
                    /* IL_18: stloc.2  */
                    
                    loc2 = ((loc0 > 2) ? 1 : 0);
                    /* IL_19: ldloc.2  */
                    /* IL_1A: brfalse.s IL_1E */
                    
                    if ((!(loc2))){
                        
                        __pos__ = 0x1E;
                        
                        continue;
                    }
                    /* IL_1C: br.s IL_29 */
                    
                    __pos__ = 0x29;
                    
                    continue;
                    case 0x1E:
                    /* IL_1E: ldloc.0  */
                    /* IL_1F: ldc.i4.3  */
                    /* IL_21: cgt  */
                    /* IL_22: stloc.3  */
                    
                    loc3 = ((loc0 > 3) ? 1 : 0);
                    /* IL_23: ldloc.3  */
                    /* IL_24: brfalse.s IL_28 */
                    
                    if ((!(loc3))){
                        
                        __pos__ = 0x28;
                        
                        continue;
                    }
                    /* IL_26: br.s IL_29 */
                    
                    __pos__ = 0x29;
                    
                    continue;
                    case 0x28:
                    /* IL_28: nop  */
                    case 0x29:
                    /* IL_29: ldc.i4.1  */
                    /* IL_2A: stloc.s 4 */
                    
                    loc4 = 1;
                    /* IL_2C: br.s IL_05 */
                    
                    __pos__ = 0x5;
                    
                    continue;
                }
                
                break;
            }
            case 0x2E:
            /* IL_2E: ret  */
            
            return ;
        }
    }
};;/* static System.Void Program.Nested()*/

asm.x6000004 = function Nested()
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var in_block_1;
    var loc2;
    var loc1;
    var in_block_2;
    var loc3;
    var loc4;
    var loc5;
    var loc6;
    var loc7;
    
    t0 = asm0["System.Int32"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldc.i4.1  */
            /* IL_02: stloc.0  */
            
            loc0 = 1;
            /* IL_03: br.s IL_52 */
            
            __pos__ = 0x52;
            
            continue;
            case 0x5:
            case 0x10:
            case 0x14:
            case 0x1F:
            case 0x2B:
            case 0x30:
            case 0x35:
            case 0x41:
            case 0x52:
            
            in_block_1 = true;
            
            if (__pos__ < 0x5){
                
                __pos__ = 0x5;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x5:
                    /* IL_05: nop  */
                    /* IL_06: ldloc.0  */
                    /* IL_07: ldc.i4.2  */
                    /* IL_09: cgt  */
                    /* IL_0A: stloc.2  */
                    
                    loc2 = ((loc0 > 2) ? 1 : 0);
                    /* IL_0B: ldloc.2  */
                    /* IL_0C: brfalse.s IL_10 */
                    
                    if ((!(loc2))){
                        
                        __pos__ = 0x10;
                        
                        continue;
                    }
                    /* IL_0E: br.s IL_57 */
                    
                    __pos__ = 0x57;
                    
                    continue;
                    case 0x10:
                    /* IL_10: ldc.i4.1  */
                    /* IL_11: stloc.1  */
                    
                    loc1 = 1;
                    /* IL_12: br.s IL_30 */
                    
                    __pos__ = 0x30;
                    
                    continue;
                    case 0x14:
                    case 0x1F:
                    case 0x2B:
                    case 0x30:
                    
                    in_block_2 = true;
                    
                    if (__pos__ < 0x14){
                        
                        __pos__ = 0x14;
                    }
                    
                    while (in_block_2){
                        
                        switch (__pos__){
                            case 0x14:
                            /* IL_14: nop  */
                            /* IL_15: ldloc.1  */
                            /* IL_16: ldc.i4.2  */
                            /* IL_18: cgt  */
                            /* IL_19: stloc.3  */
                            
                            loc3 = ((loc1 > 2) ? 1 : 0);
                            /* IL_1A: ldloc.3  */
                            /* IL_1B: brfalse.s IL_1F */
                            
                            if ((!(loc3))){
                                
                                __pos__ = 0x1F;
                                
                                continue;
                            }
                            /* IL_1D: br.s IL_35 */
                            
                            __pos__ = 0x35;
                            
                            continue;
                            case 0x1F:
                            /* IL_1F: ldloc.1  */
                            /* IL_20: ldc.i4.3  */
                            /* IL_22: cgt  */
                            /* IL_23: stloc.s 4 */
                            
                            loc4 = ((loc1 > 3) ? 1 : 0);
                            /* IL_25: ldloc.s 4 */
                            /* IL_27: brfalse.s IL_2B */
                            
                            if ((!(loc4))){
                                
                                __pos__ = 0x2B;
                                
                                continue;
                            }
                            /* IL_29: br.s IL_35 */
                            
                            __pos__ = 0x35;
                            
                            continue;
                            case 0x2B:
                            /* IL_2B: ldloc.1  */
                            /* IL_2C: ldc.i4.1  */
                            /* IL_2D: add  */
                            /* IL_2E: stloc.1  */
                            
                            loc1 = (loc1 + 1) | 0;
                            /* IL_2F: nop  */
                            case 0x30:
                            /* IL_30: ldc.i4.1  */
                            /* IL_31: stloc.s 5 */
                            
                            loc5 = 1;
                            /* IL_33: br.s IL_14 */
                            
                            __pos__ = 0x14;
                            
                            continue;
                        }
                        
                        break;
                    }
                    case 0x35:
                    /* IL_35: ldloc.0  */
                    /* IL_36: ldc.i4.3  */
                    /* IL_38: cgt  */
                    /* IL_39: stloc.s 6 */
                    
                    loc6 = ((loc0 > 3) ? 1 : 0);
                    /* IL_3B: ldloc.s 6 */
                    /* IL_3D: brfalse.s IL_41 */
                    
                    if ((!(loc6))){
                        
                        __pos__ = 0x41;
                        
                        continue;
                    }
                    /* IL_3F: br.s IL_57 */
                    
                    __pos__ = 0x57;
                    
                    continue;
                    case 0x41:
                    /* IL_41: ldloc.0  */
                    /* IL_42: ldc.i4.1  */
                    /* IL_43: add  */
                    /* IL_44: stloc.0  */
                    
                    loc0 = (loc0 + 1) | 0;
                    /* IL_45: ldloc.1  */
                    /* IL_46: box System.Int32 */
                    /* IL_4B: call Void WriteLine(System.Object) */
                    
                    asm0.x6000072(CILJS.makeBox(loc1,t0));
                    /* IL_50: nop  */
                    /* IL_51: nop  */
                    case 0x52:
                    /* IL_52: ldc.i4.1  */
                    /* IL_53: stloc.s 7 */
                    
                    loc7 = 1;
                    /* IL_55: br.s IL_05 */
                    
                    __pos__ = 0x5;
                    
                    continue;
                }
                
                break;
            }
            case 0x57:
            /* IL_57: ldloc.0  */
            /* IL_58: box System.Int32 */
            /* IL_5D: call Void WriteLine(System.Object) */
            
            asm0.x6000072(CILJS.makeBox(loc0,t0));
            /* IL_62: nop  */
            /* IL_63: ret  */
            
            return ;
        }
    }
};;/* static System.Void Program.Gotos()*/

asm.x6000005 = function Gotos()
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var in_block_1;
    var loc1;
    
    t0 = asm0["System.Int32"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldc.i4.0  */
            /* IL_02: stloc.0  */
            
            loc0 = 0;
            case 0x3:
            
            in_block_1 = true;
            
            if (__pos__ < 0x3){
                
                __pos__ = 0x3;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x3:
                    /* IL_03: nop  */
                    /* IL_04: ldloc.0  */
                    /* IL_05: ldc.i4.1  */
                    /* IL_06: add  */
                    /* IL_07: stloc.0  */
                    
                    loc0 = (loc0 + 1) | 0;
                    /* IL_08: ldloc.0  */
                    /* IL_09: box System.Int32 */
                    /* IL_0E: call Void WriteLine(System.Object) */
                    
                    asm0.x6000072(CILJS.makeBox(loc0,t0));
                    /* IL_13: nop  */
                    /* IL_14: ldloc.0  */
                    /* IL_15: ldc.i4.4  */
                    /* IL_17: clt  */
                    /* IL_18: stloc.1  */
                    
                    loc1 = ((loc0 < 4) ? 1 : 0);
                    /* IL_19: ldloc.1  */
                    /* IL_1A: brfalse.s IL_1E */
                    
                    if ((!(loc1))){
                        
                        __pos__ = 0x1E;
                        
                        continue;
                    }
                    /* IL_1C: br.s IL_03 */
                    
                    __pos__ = 0x3;
                    
                    continue;
                }
                
                break;
            }
            case 0x1E:
            /* IL_1E: ldloc.0  */
            /* IL_1F: box System.Int32 */
            /* IL_24: call Void WriteLine(System.Object) */
            
            asm0.x6000072(CILJS.makeBox(loc0,t0));
            /* IL_29: nop  */
            /* IL_2A: ret  */
            
            return ;
        }
    }
};;/* static System.Void Program.For()*/

asm.x6000006 = function For()
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var in_block_1;
    var loc1;
    
    t0 = asm0["System.Int32"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldc.i4.0  */
            /* IL_02: stloc.0  */
            
            loc0 = 0;
            /* IL_03: br.s IL_17 */
            
            __pos__ = 0x17;
            
            continue;
            case 0x5:
            case 0x17:
            
            in_block_1 = true;
            
            if (__pos__ < 0x5){
                
                __pos__ = 0x5;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x5:
                    /* IL_05: nop  */
                    /* IL_06: ldloc.0  */
                    /* IL_07: box System.Int32 */
                    /* IL_0C: call Void WriteLine(System.Object) */
                    
                    asm0.x6000072(CILJS.makeBox(loc0,t0));
                    /* IL_11: nop  */
                    /* IL_12: nop  */
                    /* IL_13: ldloc.0  */
                    /* IL_14: ldc.i4.1  */
                    /* IL_15: add  */
                    /* IL_16: stloc.0  */
                    
                    loc0 = (loc0 + 1) | 0;
                    case 0x17:
                    /* IL_17: ldloc.0  */
                    /* IL_18: ldc.i4.s 10 */
                    /* IL_1B: clt  */
                    /* IL_1C: stloc.1  */
                    
                    loc1 = ((loc0 < 10) ? 1 : 0);
                    /* IL_1D: ldloc.1  */
                    /* IL_1E: brtrue.s IL_05 */
                    
                    if (loc1){
                        
                        __pos__ = 0x5;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x17) || (__pos__ < 0x5)){
                
                continue;
            }
            /* IL_20: ret  */
            
            return ;
        }
    }
};;/* static System.Void Program.Foreach()*/

asm.x6000007 = function Foreach()
{
    var t0;
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var in_block_1;
    var loc2;
    
    t0 = asm0["System.Int32"]();
    
    
    
    
    
    
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: nop  */
            /* IL_02: ldc.i4.4  */
            
            st_00 = 4;
            /* IL_03: newarr System.Int32 */
            
            st_01 = CILJS.newArray(t0,st_00);
            /* IL_08: dup  */
            
            st_04 = st_02 = st_01;
            /* IL_09: ldtoken __StaticArrayInitTypeSize=16 06B17887F64970E95A04BC2186B36B19E7B495ED */
            
            st_03 = CILJS.newHandle(asm0["System.RuntimeFieldHandle"](),{
                    type: asm1["<PrivateImplementationDetails>"](),
                    field: "06B17887F64970E95A04BC2186B36B19E7B495ED"
                });
            /* IL_0E: call Void InitializeArray(System.Array, System.RuntimeFieldHandle) */
            
            asm0.x6000175(st_02,st_03);
            /* IL_13: stloc.0  */
            
            loc0 = st_04;
            /* IL_14: ldc.i4.0  */
            /* IL_15: stloc.1  */
            
            loc1 = 0;
            /* IL_16: br.s IL_2E */
            
            __pos__ = 0x2E;
            
            continue;
            case 0x18:
            case 0x2E:
            
            in_block_1 = true;
            
            if (__pos__ < 0x18){
                
                __pos__ = 0x18;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x18:
                    /* IL_18: ldloc.0  */
                    /* IL_19: ldloc.1  */
                    /* IL_1A: ldelem.i4  */
                    /* IL_1B: stloc.2  */
                    
                    loc2 = (loc0.jsarr)[loc1];
                    /* IL_1C: nop  */
                    /* IL_1D: ldloc.2  */
                    /* IL_1E: box System.Int32 */
                    /* IL_23: call Void WriteLine(System.Object) */
                    
                    asm0.x6000072(CILJS.makeBox(loc2,t0));
                    /* IL_28: nop  */
                    /* IL_29: nop  */
                    /* IL_2A: ldloc.1  */
                    /* IL_2B: ldc.i4.1  */
                    /* IL_2C: add  */
                    /* IL_2D: stloc.1  */
                    
                    loc1 = (loc1 + 1) | 0;
                    case 0x2E:
                    /* IL_2E: ldloc.1  */
                    /* IL_2F: ldloc.0  */
                    /* IL_30: ldlen  */
                    /* IL_31: conv.i4  */
                    /* IL_32: blt.s IL_18 */
                    
                    if (loc1 < (loc0.jsarr.length | 0)){
                        
                        __pos__ = 0x18;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x2E) || (__pos__ < 0x18)){
                
                continue;
            }
            /* IL_34: ret  */
            
            return ;
        }
    }
};;/* static System.String Program.Format(String,Object[])*/

asm.x6000008 = function Format(arg0, arg1)
{
    var t0;
    var t1;
    var in_block_0;
    var __pos__;
    var loc0;
    var in_block_1;
    var loc1;
    var loc2;
    var loc3;
    var loc4;
    
    t0 = asm0["System.String"]();
    
    t1 = asm0["System.Int32"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldc.i4.0  */
            /* IL_02: stloc.0  */
            
            loc0 = 0;
            /* IL_03: br.s IL_40 */
            
            __pos__ = 0x40;
            
            continue;
            case 0x5:
            case 0x18:
            case 0x40:
            
            in_block_1 = true;
            
            if (__pos__ < 0x5){
                
                __pos__ = 0x5;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x5:
                    /* IL_05: nop  */
                    /* IL_06: ldarg.1  */
                    /* IL_07: ldloc.0  */
                    /* IL_08: ldelem.ref  */
                    /* IL_09: stloc.1  */
                    
                    loc1 = CILJS.ldelemRef(arg1,loc0);
                    /* IL_0A: ldloc.1  */
                    /* IL_0B: ldnull  */
                    /* IL_0D: ceq  */
                    /* IL_0E: stloc.2  */
                    
                    loc2 = ((loc1 === null) ? 1 : 0);
                    /* IL_0F: ldloc.2  */
                    /* IL_10: brfalse.s IL_18 */
                    
                    if ((!(loc2))){
                        
                        __pos__ = 0x18;
                        
                        continue;
                    }
                    
                    asm0.x60000d6();
                    /* IL_12: ldsfld String Empty */
                    /* IL_17: stloc.1  */
                    
                    loc1 = t0.Empty;
                    case 0x18:
                    /* IL_18: ldarg.0  */
                    /* IL_19: ldstr { */
                    /* IL_1E: ldloc.0  */
                    /* IL_1F: box System.Int32 */
                    /* IL_24: ldstr } */
                    /* IL_29: call String Concat(System.Object, System.Object, System.Object) */
                    /* IL_2E: ldloc.1  */
                    /* IL_2F: callvirt String ToString() */
                    /* IL_34: callvirt String Replace(System.String, System.String) */
                    /* IL_39: starg.s 0 */
                    
                    arg0 = asm0.x60000c2(arg0,asm0.x60000bc(CILJS.newString("{"),CILJS.makeBox(loc0,t1),CILJS.newString("}")),(loc1.vtable)["asm0.x600009b"](CILJS.convertBoxToPointerAsNeeded(loc1)));
                    /* IL_3B: nop  */
                    /* IL_3C: ldloc.0  */
                    /* IL_3D: ldc.i4.1  */
                    /* IL_3E: add  */
                    /* IL_3F: stloc.0  */
                    
                    loc0 = (loc0 + 1) | 0;
                    case 0x40:
                    /* IL_40: ldloc.0  */
                    /* IL_41: ldarg.1  */
                    /* IL_42: ldlen  */
                    /* IL_43: conv.i4  */
                    /* IL_45: clt  */
                    /* IL_46: stloc.3  */
                    
                    loc3 = ((loc0 < (arg1.jsarr.length | 0)) ? 1 : 0);
                    /* IL_47: ldloc.3  */
                    /* IL_48: brtrue.s IL_05 */
                    
                    if (loc3){
                        
                        __pos__ = 0x5;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x40) || (__pos__ < 0x5)){
                
                continue;
            }
            /* IL_4A: ldarg.0  */
            /* IL_4B: stloc.s 4 */
            
            loc4 = arg0;
            /* IL_4F: ldloc.s 4 */
            /* IL_51: ret  */
            
            return loc4;
        }
    }
};;/*  Program..ctor()*/

asm.x6000009 = function _ctor(arg0)
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
        
        type["06B17887F64970E95A04BC2186B36B19E7B495ED"] = [6, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0];
        
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
asm["<PrivateImplementationDetails>+__StaticArrayInitTypeSize=16"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"<PrivateImplementationDetails>+__StaticArrayInitTypeSize=16",true,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm1.t2000004",new (asm1["<PrivateImplementationDetails>+__StaticArrayInitTypeSize=16"]())());
        
        type.TypeMetadataName = "asm1.t2000004";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function __StaticArrayInitTypeSize_16()
        {
            
            __StaticArrayInitTypeSize_16.init();
        };
    });
asm.entryPoint = asm.x6000001;
CILJS.declareAssembly("Loops.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=Loops.cs.ciljs.exe.js.map
