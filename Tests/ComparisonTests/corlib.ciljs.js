
var asm0 = {};
var asm = asm0;
asm.FullName = "mscorlib, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/*  InvalidOperationException..ctor()*/

asm.x6000001 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldstr Operation is not valid due to the current state of the object */
    /* IL_06: call Void .ctor(System.String) */
    
    asm0.x6000076(arg0,CILJS.newString("Operation is not valid due to the current state of the object"));
    /* IL_0B: nop  */
    /* IL_0C: nop  */
    /* IL_0D: ret  */
    
    return ;
};;/*  InvalidOperationException..ctor(Exception)*/

asm.x6000002 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldstr Operation is not valid due to the current state of the object */
    /* IL_06: ldarg.1  */
    /* IL_07: call Void .ctor(System.String, System.Exception) */
    
    asm0.x6000077(arg0,CILJS.newString("Operation is not valid due to the current state of the object"),arg1);
    /* IL_0C: nop  */
    /* IL_0D: nop  */
    /* IL_0E: ret  */
    
    return ;
};;/*  InvalidOperationException..ctor(String,Exception)*/

asm.x6000003 = function _ctor(arg0, arg1, arg2)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: ldarg.2  */
    /* IL_03: call Void .ctor(System.String, System.Exception) */
    
    asm0.x6000077(arg0,arg1,arg2);
    /* IL_08: nop  */
    /* IL_09: nop  */
    /* IL_0A: ret  */
    
    return ;
};;/*  InvalidOperationException..ctor(String)*/

asm.x6000004 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: call Void .ctor(System.String) */
    
    asm0.x6000076(arg0,arg1);
    /* IL_07: nop  */
    /* IL_08: nop  */
    /* IL_09: ret  */
    
    return ;
};;/* System.String Int64.ToString()*/

asm.x6000005_init = function (arg0)
{
    
    (asm0["CilJs.JavaScript.String"]().init)();
    
    asm.x6000005 = asm.x6000005_;
};;

asm.x6000005 = function (arg0)
{
    
    asm.x6000005_init(arg0);
    
    return asm.x6000005_(arg0);
};;
asm.x6000005_ = function ToString(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    var loc4;
    var in_block_1;
    var loc5;
    var loc6;
    var loc7;
    var loc8;
    
    t0 = asm0["CilJs.JavaScript.String"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.i8  */
            /* IL_03: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_04: ldc.i4.s 10 */
            /* IL_06: conv.i8  */
            /* IL_07: stloc.1  */
            
            loc1 = CILJS.convI8(10);
            
            asm0.x60001f5();
            /* IL_08: ldsfld String Emtpy */
            /* IL_0D: stloc.2  */
            
            loc2 = t0.Emtpy;
            
            asm0.x60001f5();
            /* IL_0E: ldsfld String Emtpy */
            /* IL_13: stloc.3  */
            
            loc3 = t0.Emtpy;
            /* IL_14: ldloc.0  */
            /* IL_15: ldc.i4.0  */
            /* IL_16: conv.i8  */
            /* IL_18: clt  */
            /* IL_19: stloc.s 4 */
            
            loc4 = asm0.Int64_LessThan(loc0,CILJS.convI8(0));
            /* IL_1B: ldloc.s 4 */
            /* IL_1D: brfalse.s IL_29 */
            
            if ((!(loc4))){
                
                __pos__ = 0x29;
                
                continue;
            }
            /* IL_1F: nop  */
            /* IL_20: ldc.i4.s 45 */
            /* IL_22: call String FromCharCode(System.Char) */
            /* IL_27: stloc.3  */
            
            loc3 = String.fromCharCode(45);
            /* IL_28: nop  */
            case 0x29:
            case 0x40:
            
            in_block_1 = true;
            
            if (__pos__ < 0x29){
                
                __pos__ = 0x29;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x29:
                    /* IL_29: nop  */
                    /* IL_2A: ldloc.0  */
                    /* IL_2B: ldloc.1  */
                    /* IL_2C: rem  */
                    /* IL_2D: stloc.s 5 */
                    
                    loc5 = asm0.Int64_Modulus(loc0,loc1);
                    /* IL_2F: ldloc.s 5 */
                    /* IL_31: ldc.i4.0  */
                    /* IL_32: conv.i8  */
                    /* IL_34: clt  */
                    /* IL_35: stloc.s 6 */
                    
                    loc6 = asm0.Int64_LessThan(loc5,CILJS.convI8(0));
                    /* IL_37: ldloc.s 6 */
                    /* IL_39: brfalse.s IL_40 */
                    
                    if ((!(loc6))){
                        
                        __pos__ = 0x40;
                        
                        continue;
                    }
                    /* IL_3B: ldloc.s 5 */
                    /* IL_3D: neg  */
                    /* IL_3E: stloc.s 5 */
                    
                    loc5 = asm0.Int64_UnaryNegation(loc5);
                    case 0x40:
                    /* IL_40: ldloc.s 5 */
                    /* IL_42: call String GetLowString(System.Int64) */
                    /* IL_47: ldloc.2  */
                    /* IL_48: call String op_Addition(CilJs.JavaScript.String, CilJs.JavaScript.String) */
                    /* IL_4D: stloc.2  */
                    
                    loc2 = loc5[0].toString() + loc2;
                    /* IL_4E: ldloc.0  */
                    /* IL_4F: ldloc.1  */
                    /* IL_50: div  */
                    /* IL_51: stloc.0  */
                    
                    loc0 = asm0.Int64_Division(loc0,loc1);
                    /* IL_52: nop  */
                    /* IL_53: ldloc.0  */
                    /* IL_54: ldc.i4.0  */
                    /* IL_55: conv.i8  */
                    /* IL_57: cgt.un  */
                    /* IL_58: stloc.s 7 */
                    
                    loc7 = asm0.UInt64_GreaterThan(loc0,CILJS.convI8(0));
                    /* IL_5A: ldloc.s 7 */
                    /* IL_5C: brtrue.s IL_29 */
                    
                    if (loc7){
                        
                        __pos__ = 0x29;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x40) || (__pos__ < 0x29)){
                
                continue;
            }
            /* IL_5E: ldloc.3  */
            /* IL_5F: ldloc.2  */
            /* IL_60: call String op_Addition(CilJs.JavaScript.String, CilJs.JavaScript.String) */
            /* IL_65: call String op_Explicit(CilJs.JavaScript.String) */
            /* IL_6A: stloc.s 8 */
            
            loc8 = CILJS.newString(loc3 + loc2);
            /* IL_6E: ldloc.s 8 */
            /* IL_70: ret  */
            
            return loc8;
        }
    }
};/* System.Int32 Int64.GetHashCode()*/

asm.x6000006 = function GetHashCode(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i8  */
    /* IL_03: call Int32 GetLow(System.Int64) */
    /* IL_08: stloc.0  */
    
    loc0 = arg0.r()[0];
    /* IL_0B: ldloc.0  */
    /* IL_0C: ret  */
    
    return loc0;
};;/* static System.Int64 Int64.op_Addition(Int64,Int64)*/

asm.x6000009 = 
            function XInt64_Addition(lhs, rhs) 
            {
                var x = new Uint16Array(lhs.buffer);
                var y = new Uint16Array(rhs.buffer);                

                var a = (x[0] + y[0]) | 0;
                var o1 = (a & 0xff0000) >> 16;
                var b = (o1 + x[1] + y[1]) | 0;
                var o2 = (b & 0xff0000) >> 16;
                var c = (o2 + x[2] + y[2]) | 0;
                var o3 = (c & 0xff0000) >> 16;
                var d = (o3 + x[3] + y[3]) | 0;

                return new Uint32Array(new Uint16Array([a & 0xffff, b & 0xffff, c & 0xffff, d & 0xffff]).buffer);
            };;
asm.XInt64_Addition = asm.x6000009;/* static System.Int64 Int64.op_Subtraction(Int64,Int64)*/

asm.x600000a = 
            function XInt64_Subtraction(lhs, rhs) 
            {
                if (lhs[0] >= rhs[0] && rhs[1] == 0)
                    return new Uint32Array([lhs[0]-rhs[0], lhs[1]]);

                var x = new Uint16Array(lhs.buffer);
                var y = new Uint16Array(rhs.buffer);

                var a = (x[0] - y[0]) | 0;
                var u = 0;
                if (a < 0) { a = 0x10000 + a; u = -1; }

                var b = (u + ((x[1] - y[1]) | 0)) | 0;
                u = 0;
                if (b < 0) { b = 0x10000 + b; u = -1; }

                var c = (u + ((x[2] - y[2]) | 0)) | 0;
                u = 0;
                if (c < 0) { c = 0x10000 + c; u = -1; }

                var d = (u + ((x[3] - y[3]) | 0)) | 0;
                if (d < 0) { d = 0x10000 + d; }
                
                return new Uint32Array(new Uint16Array([a & 0xffff, b & 0xffff, c & 0xffff, d & 0xffff]).buffer);
            };;
asm.XInt64_Subtraction = asm.x600000a;/* static System.Int64 Int64.op_BitwiseOr(Int64,Int64)*/

asm.x600000b = 
            function XInt64_BitwiseOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] | rhs[0], lhs[1] | rhs[1]]);
            }
            ;;
asm.XInt64_BitwiseOr = asm.x600000b;/* static System.Int64 Int64.op_BitwiseAnd(Int64,Int64)*/

asm.x600000c = 
            function XInt64_BitwiseAnd(lhs, rhs) 
            {
                return new Uint32Array([lhs[0] & rhs[0], lhs[1] & rhs[1]]);
            }
            ;;
asm.XInt64_BitwiseAnd = asm.x600000c;/* static System.Int64 Int64.op_ExclusiveOr(Int64,Int64)*/

asm.x600000d = 
            function XInt64_ExclusiveOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] ^ rhs[0], lhs[1] ^ rhs[1]]);
            }
            ;;
asm.XInt64_ExclusiveOr = asm.x600000d;/* static System.Int64 Int64.op_OnesComplement(Int64)*/

asm.x600000e = 
            function XInt64_OnesComplement(a)
            {
                return new Uint32Array([~a[0], ~a[1]]);
            }
            ;;
asm.XInt64_OnesComplement = asm.x600000e;/* static System.Int64 Int64.op_LeftShift(Int64,Int32)*/

asm.x600000f = 
            function XInt64_LeftShift(lhs, n)
            {
                n = n & 0x3f;

                var maxShift = 8;
                if (n > maxShift) {
                    return asm0.XInt64_LeftShift(
                           asm0.XInt64_LeftShift(lhs, maxShift), n - maxShift);
                }
          
                var x = new Uint16Array(lhs.buffer);

                var a = (x[0] << n);
                var b = (x[1] << n) | ((a >>> 16) & 0xffff);
                var c = (x[2] << n) | ((b >>> 16) & 0xffff);
                var d = (x[3] << n) | ((c >>> 16) & 0xffff);

                return new Uint32Array(new Uint16Array([a & 0xffff, b & 0xffff, c & 0xffff, d & 0xffff]).buffer);
            }
            ;;
asm.XInt64_LeftShift = asm.x600000f;/* static System.Int64 Int64.op_Equality(Int64,Int64)*/

asm.x6000010 = 
            function XInt64_Equality(lhs, rhs)
            {
                return (lhs[0] === rhs[0] && lhs[1] === rhs[1]) ? 1 : 0;
            }
            ;;
asm.XInt64_Equality = asm.x6000010;/* static System.Int64 Int64.op_Inequality(Int64,Int64)*/

asm.x6000011 = 
            function XInt64_Inequality(lhs, rhs)
            {
                return (lhs[0] !== rhs[0] && lhs[1] !== rhs[1]) ? 1 : 0;
            }
            ;;
asm.XInt64_Inequality = asm.x6000011;/* static System.Int64 Int64.op_Decrement(Int64)*/

asm.x6000012 = function op_Decrement(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldc.i4.1  */
    /* IL_03: conv.i8  */
    /* IL_04: sub  */
    /* IL_05: stloc.0  */
    
    loc0 = asm0.XInt64_Subtraction(arg0,CILJS.convI8(1));
    /* IL_08: ldloc.0  */
    /* IL_09: ret  */
    
    return loc0;
};;
asm.XInt64_Decrement = asm.x6000012;/* static System.Int64 Int64.op_Increment(Int64)*/

asm.x6000013 = function op_Increment(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldc.i4.1  */
    /* IL_03: conv.i8  */
    /* IL_04: add  */
    /* IL_05: stloc.0  */
    
    loc0 = asm0.XInt64_Addition(arg0,CILJS.convI8(1));
    /* IL_08: ldloc.0  */
    /* IL_09: ret  */
    
    return loc0;
};;
asm.XInt64_Increment = asm.x6000013;/* static System.Int64 Int64.op_RightShift(Int64,Int32)*/

asm.x6000014 = 
            function Int64_RightShift(a, n) {
                // Int64 (signed) uses arithmetic shift, UIn64 (unsigned) uses logical shift

                if (n === 0) {
                    var result2 = a;
                } else if (n > 32) {
                    result2 = asm0.Int64_RightShift(asm0.Int64_RightShift(a, 32), n - 32);
                } else {
                    var unsignedShift = asm0.UInt64_RightShift(a, n);

                    if (asm0.Int64_isNegative(a)) {
                        var outshift = asm0.UInt64_RightShift(new Uint32Array([0xffffff, 0xffffff]), n);
                        var inshift = asm0.XInt64_LeftShift(outshift, 64 - n);
                        var uresult = asm0.UInt64_BitwiseOr(unsignedShift, inshift);
                    } else {
                        uresult = unsignedShift;
                    }
                    result2 = uresult;
                }
                return result2;
            };;
asm.Int64_RightShift = asm.x6000014;/* static System.Int64 Int64.op_Division(Int64,Int32)*/

asm.x6000015 = 
            function Int64_Division(n, d) {
                if (d[0] === 0 && d[1] === 0)
                    throw new Error("System.DivideByZeroException");

                if (asm0.Int64_isNegative(d))
                    return asm0.Int64_Division(
                      asm0.Int64_UnaryNegation(n), asm0.Int64_UnaryNegation(d));

                else if (asm0.Int64_isNegative(n)) {
                    if (asm0.XInt64_Equality(asm0.Int64_UnaryNegation(n), n)) { 
                        n = asm0.XInt64_Addition(n, d);
                        return asm0.XInt64_Subtraction(
                            asm0.Int64_UnaryNegation(asm0.Int64_Division(asm0.Int64_UnaryNegation(n), d)),
                            new Uint32Array([1, 0]));
                    }
                    else {
                        return asm0.Int64_UnaryNegation(asm0.Int64_Division(asm0.Int64_UnaryNegation(n), d));
                    }
                }
                else
                    return asm0.UInt64_Division(n, d);
            };;
asm.Int64_Division = asm.x6000015;/* static System.Int64 Int64.op_Modulus(Int64,Int32)*/

asm.x6000016 = 
            function Int64_Modulus(n, d) {
                if (d[0] === 0 && d[1] === 0)
                    throw new Error("System.DivideByZeroException");

                if (asm0.Int64_isNegative(d)) {
                    return asm0.Int64_Modulus(
                      n, asm0.Int64_UnaryNegation(d));
                }
                else if (asm0.Int64_isNegative(n)) {
                    if (asm0.XInt64_Equality(asm0.Int64_UnaryNegation(n), n)) { 
                        n = asm0.XInt64_Addition(n, d);
                    }
                    return asm0.Int64_UnaryNegation(asm0.Int64_Modulus(asm0.Int64_UnaryNegation(n), d));
                }
                else
                    return asm0.UInt64_Modulus(n, d);
            };;
asm.Int64_Modulus = asm.x6000016;/* static System.Boolean Int64.op_GreaterThan(Int64,Int64)*/

asm.x6000017 = 
            function Int64_GreaterThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_GreaterThan(a, b);
                else
                    return bn ? 1 : 0;
            };;
asm.Int64_GreaterThan = asm.x6000017;/* static System.Boolean Int64.op_LessThan(Int64,Int64)*/

asm.x6000018 = 
            function Int64_LessThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_LessThan(a, b);
                else
                    return an ? 1 : 0;
            };;
asm.Int64_LessThan = asm.x6000018;/* static System.Int64 Int64.op_UnaryNegation(Int64)*/

asm.x6000019 = 
            function Int64_UnaryNegation (a) {
                var complement = asm0.XInt64_Subtraction(new Uint32Array([0xffffffff, 0xffffffff]), a);
                return asm0.XInt64_Addition(complement, new Uint32Array([1, 0]));
            };;
asm.Int64_UnaryNegation = asm.x6000019;/* static System.Boolean Int64.isNegative(Int64)*/

asm.x600001a = 
            function isNegative(n) {
                return asm0.UInt64_GreaterThan(n, [0xffffffff, 0x7fffffff]);
            };;
asm.Int64_isNegative = asm.x600001a;/* System.Int32 Int64.CompareTo(Object)*/

asm.x600001b = function CompareTo(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: unbox.any System.Int64 */
    /* IL_08: call Int32 CompareTo(System.Int64) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x600001c(arg0,CILJS.unboxAny(arg1,asm0["System.Int64"]()));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 Int64.CompareTo(Int64)*/

asm.x600001c = function CompareTo(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.i8  */
            /* IL_03: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_04: ldloc.0  */
            /* IL_05: ldarg.1  */
            /* IL_07: clt  */
            /* IL_08: stloc.1  */
            
            loc1 = asm0.Int64_LessThan(loc0,arg1);
            /* IL_09: ldloc.1  */
            /* IL_0A: brfalse.s IL_10 */
            
            if ((!(loc1))){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_0C: ldc.i4.m1  */
            /* IL_0D: stloc.2  */
            
            loc2 = -1;
            /* IL_0E: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x10:
            /* IL_10: ldloc.0  */
            /* IL_11: ldarg.1  */
            /* IL_13: cgt  */
            /* IL_14: stloc.3  */
            
            loc3 = asm0.Int64_GreaterThan(loc0,arg1);
            /* IL_15: ldloc.3  */
            /* IL_16: brfalse.s IL_1C */
            
            if ((!(loc3))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_18: ldc.i4.1  */
            /* IL_19: stloc.2  */
            
            loc2 = 1;
            /* IL_1A: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x1C:
            /* IL_1C: ldc.i4.0  */
            /* IL_1D: stloc.2  */
            
            loc2 = 0;
            case 0x20:
            /* IL_20: ldloc.2  */
            /* IL_21: ret  */
            
            return loc2;
        }
    }
};;/* System.Boolean Int64.Equals(Object)*/

asm.x600001d = function Equals(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.Int64"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: isinst System.Int64 */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: ldc.i4.0  */
            /* IL_0C: ceq  */
            /* IL_0D: stloc.0  */
            
            loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_0E: ldloc.0  */
            /* IL_0F: brfalse.s IL_15 */
            
            if ((!(loc0))){
                
                __pos__ = 0x15;
                
                continue;
            }
            /* IL_11: ldc.i4.0  */
            /* IL_12: stloc.1  */
            
            loc1 = 0;
            /* IL_13: br.s IL_24 */
            
            __pos__ = 0x24;
            
            continue;
            case 0x15:
            /* IL_15: ldarg.0  */
            /* IL_16: ldarg.1  */
            /* IL_17: unbox.any System.Int64 */
            /* IL_1C: call Boolean Equals(System.Int64) */
            /* IL_21: stloc.1  */
            
            loc1 = asm0.x600001e(arg0,CILJS.unboxAny(arg1,t0));
            case 0x24:
            /* IL_24: ldloc.1  */
            /* IL_25: ret  */
            
            return loc1;
        }
    }
};;/* System.Boolean Int64.Equals(Int64)*/

asm.x600001e = function Equals(arg0, arg1)
{
    var loc0;
    var loc1;
    var loc2;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i8  */
    /* IL_03: stloc.0  */
    
    loc0 = arg0.r();
    /* IL_04: ldarg.1  */
    /* IL_05: stloc.1  */
    
    loc1 = arg1;
    /* IL_06: ldloc.0  */
    /* IL_07: ldloc.1  */
    /* IL_09: ceq  */
    /* IL_0A: stloc.2  */
    
    loc2 = asm0.XInt64_Equality(loc0,loc1);
    /* IL_0D: ldloc.2  */
    /* IL_0E: ret  */
    
    return loc2;
};;/* System.String Char.ToString()*/

asm.x600001f = function ToString(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Char"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.u2  */
    /* IL_03: box System.Char */
    /* IL_08: call String ToStringImpl(System.Object) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x6000020(CILJS.makeBox(arg0.r(),t0));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* static System.String Char.ToStringImpl(Object)*/

asm.x6000020 = function(o) { return CILJS.newString(String.fromCharCode(o.boxed)); };;/* static System.Boolean Char.IsDigit(Char)*/

asm.x6000021 = function(o) { return (48 <= o.boxed && o.boxed <= 57) ? 1 : 0; };;/*  SystemException..ctor()*/

asm.x6000022 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldstr A system exception has occurred. */
    /* IL_06: call String GetText(System.String) */
    /* IL_0B: call Void .ctor(System.String) */
    
    asm0.x6000076(arg0,asm0.x600015a(CILJS.newString("A system exception has occurred.")));
    /* IL_10: nop  */
    /* IL_11: nop  */
    /* IL_12: ldarg.0  */
    /* IL_13: ldc.i4 -2146233087 */
    /* IL_18: call Void set_HResult(System.Int32) */
    
    asm0.x6000079(arg0,-2146233087);
    /* IL_1D: nop  */
    /* IL_1E: ret  */
    
    return ;
};;/*  SystemException..ctor(String)*/

asm.x6000023 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: call Void .ctor(System.String) */
    
    asm0.x6000076(arg0,arg1);
    /* IL_07: nop  */
    /* IL_08: nop  */
    /* IL_09: ldarg.0  */
    /* IL_0A: ldc.i4 -2146233087 */
    /* IL_0F: call Void set_HResult(System.Int32) */
    
    asm0.x6000079(arg0,-2146233087);
    /* IL_14: nop  */
    /* IL_15: ret  */
    
    return ;
};;/*  SystemException..ctor(String,Exception)*/

asm.x6000024 = function _ctor(arg0, arg1, arg2)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: ldarg.2  */
    /* IL_03: call Void .ctor(System.String, System.Exception) */
    
    asm0.x6000077(arg0,arg1,arg2);
    /* IL_08: nop  */
    /* IL_09: nop  */
    /* IL_0A: ldarg.0  */
    /* IL_0B: ldc.i4 -2146233087 */
    /* IL_10: call Void set_HResult(System.Int32) */
    
    asm0.x6000079(arg0,-2146233087);
    /* IL_15: nop  */
    /* IL_16: ret  */
    
    return ;
};;/* System.String Single.ToString()*/

asm.x6000025 = function ToString(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Single"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.r4  */
    /* IL_03: box System.Single */
    /* IL_08: call String SignedPrimitiveToString(System.Object) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x600002f(CILJS.makeBox(arg0.r(),t0));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 Single.CompareTo(Object)*/

asm.x6000026 = function CompareTo(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: unbox.any System.Single */
    /* IL_08: call Int32 CompareTo(System.Single) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x6000027(arg0,CILJS.unboxAny(arg1,asm0["System.Single"]()));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 Single.CompareTo(Single)*/

asm.x6000027 = function CompareTo(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.r4  */
            /* IL_03: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_04: ldloc.0  */
            /* IL_05: ldarg.1  */
            /* IL_07: clt  */
            /* IL_08: stloc.1  */
            
            loc1 = ((loc0 < arg1) ? 1 : 0);
            /* IL_09: ldloc.1  */
            /* IL_0A: brfalse.s IL_10 */
            
            if ((!(loc1))){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_0C: ldc.i4.m1  */
            /* IL_0D: stloc.2  */
            
            loc2 = -1;
            /* IL_0E: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x10:
            /* IL_10: ldloc.0  */
            /* IL_11: ldarg.1  */
            /* IL_13: cgt  */
            /* IL_14: stloc.3  */
            
            loc3 = ((loc0 > arg1) ? 1 : 0);
            /* IL_15: ldloc.3  */
            /* IL_16: brfalse.s IL_1C */
            
            if ((!(loc3))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_18: ldc.i4.1  */
            /* IL_19: stloc.2  */
            
            loc2 = 1;
            /* IL_1A: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x1C:
            /* IL_1C: ldc.i4.0  */
            /* IL_1D: stloc.2  */
            
            loc2 = 0;
            case 0x20:
            /* IL_20: ldloc.2  */
            /* IL_21: ret  */
            
            return loc2;
        }
    }
};;/* System.Object RuntimeFieldHandle.get_Value()*/

asm.x6000028 = function get_Value(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld Object value */
    /* IL_07: stloc.0  */
    
    loc0 = arg0.r().value;
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* System.String UInt16.ToString()*/

asm.x6000029 = function ToString(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.UInt16"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.u2  */
    /* IL_03: box System.UInt16 */
    /* IL_08: ldc.i4.s 16 */
    /* IL_0A: call String UnsignedPrimitiveToString(System.Object, System.Int32) */
    /* IL_0F: stloc.0  */
    
    loc0 = asm0.x6000030(CILJS.makeBox(arg0.r(),t0),16);
    /* IL_12: ldloc.0  */
    /* IL_13: ret  */
    
    return loc0;
};;/* System.Int32 UInt16.CompareTo(Object)*/

asm.x600002a = function CompareTo(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: unbox.any System.UInt16 */
    /* IL_08: call Int32 CompareTo(System.UInt16) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x600002b(arg0,CILJS.unboxAny(arg1,asm0["System.UInt16"]()));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 UInt16.CompareTo(UInt16)*/

asm.x600002b = function CompareTo(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.u2  */
            /* IL_03: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_04: ldloc.0  */
            /* IL_05: ldarg.1  */
            /* IL_07: clt  */
            /* IL_08: stloc.1  */
            
            loc1 = ((loc0 < arg1) ? 1 : 0);
            /* IL_09: ldloc.1  */
            /* IL_0A: brfalse.s IL_10 */
            
            if ((!(loc1))){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_0C: ldc.i4.m1  */
            /* IL_0D: stloc.2  */
            
            loc2 = -1;
            /* IL_0E: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x10:
            /* IL_10: ldloc.0  */
            /* IL_11: ldarg.1  */
            /* IL_13: cgt  */
            /* IL_14: stloc.3  */
            
            loc3 = ((loc0 > arg1) ? 1 : 0);
            /* IL_15: ldloc.3  */
            /* IL_16: brfalse.s IL_1C */
            
            if ((!(loc3))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_18: ldc.i4.1  */
            /* IL_19: stloc.2  */
            
            loc2 = 1;
            /* IL_1A: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x1C:
            /* IL_1C: ldc.i4.0  */
            /* IL_1D: stloc.2  */
            
            loc2 = 0;
            case 0x20:
            /* IL_20: ldloc.2  */
            /* IL_21: ret  */
            
            return loc2;
        }
    }
};;/* System.Boolean UInt16.Equals(UInt16)*/

asm.x600002c = function Equals(arg0, arg1)
{
    var loc0;
    var loc1;
    var loc2;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.u2  */
    /* IL_03: stloc.0  */
    
    loc0 = arg0.r();
    /* IL_04: ldarg.1  */
    /* IL_05: stloc.1  */
    
    loc1 = arg1;
    /* IL_06: ldloc.0  */
    /* IL_07: ldloc.1  */
    /* IL_09: ceq  */
    /* IL_0A: stloc.2  */
    
    loc2 = ((loc0 === loc1) ? 1 : 0);
    /* IL_0D: ldloc.2  */
    /* IL_0E: ret  */
    
    return loc2;
};;/* System.Boolean UInt16.Equals(Object)*/

asm.x600002d = function Equals(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.UInt16"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: isinst System.UInt16 */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: ldc.i4.0  */
            /* IL_0C: ceq  */
            /* IL_0D: stloc.0  */
            
            loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_0E: ldloc.0  */
            /* IL_0F: brfalse.s IL_15 */
            
            if ((!(loc0))){
                
                __pos__ = 0x15;
                
                continue;
            }
            /* IL_11: ldc.i4.0  */
            /* IL_12: stloc.1  */
            
            loc1 = 0;
            /* IL_13: br.s IL_1F */
            
            __pos__ = 0x1F;
            
            continue;
            case 0x15:
            /* IL_15: ldarg.0  */
            /* IL_16: ldarg.1  */
            /* IL_17: call Boolean Equals(System.Object) */
            /* IL_1C: stloc.1  */
            
            loc1 = asm0.x600002d(arg0,arg1);
            case 0x1F:
            /* IL_1F: ldloc.1  */
            /* IL_20: ret  */
            
            return loc1;
        }
    }
};;/* System.Int32 UInt16.GetHashCode()*/

asm.x600002e = function GetHashCode(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.u2  */
    /* IL_03: stloc.0  */
    
    loc0 = arg0.r();
    /* IL_06: ldloc.0  */
    /* IL_07: ret  */
    
    return loc0;
};;/* static System.String InternalFormatting.SignedPrimitiveToString(Object)*/

asm.x600002f = function(o) { return CILJS.newString(o.boxed.toString()); };;/* static System.String InternalFormatting.UnsignedPrimitiveToString(Object,Int32)*/

asm.x6000030 = 
            function(o, size) {
                var b = o.boxed;
                if (b < 0) {
                    var max = 0xffffffff >>> (32 - size);
                    b = max + (b + 1);
                }
                return CILJS.newString(b.toString());
            };;/*  EventArgs..ctor()*/

asm.x6000031 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/* static  EventArgs..cctor()*/

asm.x6000032_init = function ()
{
    
    (asm0["System.EventArgs"]().init)();
    
    asm.x6000032 = asm.x6000032_;
};;

asm.x6000032 = function ()
{
    
    asm.x6000032_init();
    
    return asm.x6000032_();
};;
asm.x6000032_ = function _cctor()
{
    var t0;
    
    if (asm0["System.EventArgs"]().FieldsInitialized){
        
        return;
    }
    
    asm0["System.EventArgs"]().FieldsInitialized = true;
    
    t0 = asm0["System.EventArgs"]();
    
    asm0.x6000032();
    /* IL_00: newobj Void .ctor() */
    /* IL_05: stsfld EventArgs Empty */
    
    t0.Empty = CILJS.newobj(t0,asm0.x6000031,[null]);
    /* IL_0A: ret  */
    
    return ;
};/* System.String UInt32.ToString()*/

asm.x6000033 = function ToString(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.UInt32"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.u4  */
    /* IL_03: box System.UInt32 */
    /* IL_08: ldc.i4.s 32 */
    /* IL_0A: call String UnsignedPrimitiveToString(System.Object, System.Int32) */
    /* IL_0F: stloc.0  */
    
    loc0 = asm0.x6000030(CILJS.makeBox(arg0.r(),t0),32);
    /* IL_12: ldloc.0  */
    /* IL_13: ret  */
    
    return loc0;
};;/* System.Boolean UInt32.Equals(Object)*/

asm.x6000034 = function Equals(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc2;
    var loc3;
    var loc0;
    var loc1;
    
    t0 = asm0["System.UInt32"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: isinst System.UInt32 */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: ldc.i4.0  */
            /* IL_0C: ceq  */
            /* IL_0D: stloc.2  */
            
            loc2 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_0E: ldloc.2  */
            /* IL_0F: brfalse.s IL_15 */
            
            if ((!(loc2))){
                
                __pos__ = 0x15;
                
                continue;
            }
            /* IL_11: ldc.i4.0  */
            /* IL_12: stloc.3  */
            
            loc3 = 0;
            /* IL_13: br.s IL_26 */
            
            __pos__ = 0x26;
            
            continue;
            case 0x15:
            /* IL_15: ldarg.0  */
            /* IL_16: ldind.u4  */
            /* IL_17: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_18: ldarg.1  */
            /* IL_19: unbox.any System.UInt32 */
            /* IL_1E: stloc.1  */
            
            loc1 = CILJS.unboxAny(arg1,t0);
            /* IL_1F: ldloc.0  */
            /* IL_20: ldloc.1  */
            /* IL_22: ceq  */
            /* IL_23: stloc.3  */
            
            loc3 = ((loc0 === loc1) ? 1 : 0);
            case 0x26:
            /* IL_26: ldloc.3  */
            /* IL_27: ret  */
            
            return loc3;
        }
    }
};;/* System.Int32 UInt32.GetHashCode()*/

asm.x6000035 = function GetHashCode(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.u4  */
    /* IL_03: stloc.0  */
    
    loc0 = arg0.r();
    /* IL_06: ldloc.0  */
    /* IL_07: ret  */
    
    return loc0;
};;/* System.Int32 UInt32.CompareTo(Object)*/

asm.x6000036 = function CompareTo(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: unbox.any System.UInt32 */
    /* IL_08: call Int32 CompareTo(System.UInt32) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x6000037(arg0,CILJS.unboxAny(arg1,asm0["System.UInt32"]()));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 UInt32.CompareTo(UInt32)*/

asm.x6000037 = function CompareTo(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.u4  */
            /* IL_03: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_04: ldloc.0  */
            /* IL_05: ldarg.1  */
            /* IL_07: clt.un  */
            /* IL_08: stloc.1  */
            
            loc1 = ((CILJS.unsignedValue(loc0) < CILJS.unsignedValue(arg1)) ? 1 : 0);
            /* IL_09: ldloc.1  */
            /* IL_0A: brfalse.s IL_10 */
            
            if ((!(loc1))){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_0C: ldc.i4.m1  */
            /* IL_0D: stloc.2  */
            
            loc2 = -1;
            /* IL_0E: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x10:
            /* IL_10: ldloc.0  */
            /* IL_11: ldarg.1  */
            /* IL_13: cgt.un  */
            /* IL_14: stloc.3  */
            
            loc3 = ((CILJS.unsignedValue(loc0) > CILJS.unsignedValue(arg1)) ? 1 : 0);
            /* IL_15: ldloc.3  */
            /* IL_16: brfalse.s IL_1C */
            
            if ((!(loc3))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_18: ldc.i4.1  */
            /* IL_19: stloc.2  */
            
            loc2 = 1;
            /* IL_1A: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x1C:
            /* IL_1C: ldc.i4.0  */
            /* IL_1D: stloc.2  */
            
            loc2 = 0;
            case 0x20:
            /* IL_20: ldloc.2  */
            /* IL_21: ret  */
            
            return loc2;
        }
    }
};;/*  FlagsAttribute..ctor()*/

asm.x6000038 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Delegate Delegate.Combine(Delegate,Delegate)*/

asm.x6000039 = function Combine(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    var loc4;
    
    t0 = asm0["System.Exception"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldnull  */
            /* IL_04: ceq  */
            /* IL_05: stloc.0  */
            
            loc0 = ((arg0 === null) ? 1 : 0);
            /* IL_06: ldloc.0  */
            /* IL_07: brfalse.s IL_1A */
            
            if ((!(loc0))){
                
                __pos__ = 0x1A;
                
                continue;
            }
            /* IL_09: nop  */
            /* IL_0A: ldarg.1  */
            /* IL_0B: ldnull  */
            /* IL_0D: ceq  */
            /* IL_0E: stloc.1  */
            
            loc1 = ((arg1 === null) ? 1 : 0);
            /* IL_0F: ldloc.1  */
            /* IL_10: brfalse.s IL_16 */
            
            if ((!(loc1))){
                
                __pos__ = 0x16;
                
                continue;
            }
            /* IL_12: ldnull  */
            /* IL_13: stloc.2  */
            
            loc2 = null;
            /* IL_14: br.s IL_52 */
            
            __pos__ = 0x52;
            
            continue;
            case 0x16:
            /* IL_16: ldarg.1  */
            /* IL_17: stloc.2  */
            
            loc2 = arg1;
            /* IL_18: br.s IL_52 */
            
            __pos__ = 0x52;
            
            continue;
            case 0x1A:
            /* IL_1A: ldarg.1  */
            /* IL_1B: ldnull  */
            /* IL_1D: ceq  */
            /* IL_1E: stloc.3  */
            
            loc3 = ((arg1 === null) ? 1 : 0);
            /* IL_1F: ldloc.3  */
            /* IL_20: brfalse.s IL_26 */
            
            if ((!(loc3))){
                
                __pos__ = 0x26;
                
                continue;
            }
            /* IL_22: ldarg.0  */
            /* IL_23: stloc.2  */
            
            loc2 = arg0;
            /* IL_24: br.s IL_52 */
            
            __pos__ = 0x52;
            
            continue;
            case 0x26:
            /* IL_26: ldarg.0  */
            /* IL_27: callvirt Type GetType() */
            /* IL_2C: ldarg.1  */
            /* IL_2D: callvirt Type GetType() */
            /* IL_33: ceq  */
            /* IL_34: ldc.i4.0  */
            /* IL_36: ceq  */
            /* IL_37: stloc.s 4 */
            
            loc4 = ((((asm0.x60000a0(arg0) === asm0.x60000a0(arg1)) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_39: ldloc.s 4 */
            /* IL_3B: brfalse.s IL_48 */
            
            if ((!(loc4))){
                
                __pos__ = 0x48;
                
                continue;
            }
            /* IL_3D: ldstr Incompatible delegate types */
            /* IL_42: newobj Void .ctor(System.String) */
            /* IL_47: throw  */
            
            throw CILJS.newobj(t0,asm0.x6000076,[null, CILJS.newString("Incompatible delegate types")]);
            case 0x48:
            /* IL_48: ldarg.0  */
            /* IL_49: ldarg.1  */
            /* IL_4A: callvirt Delegate CombineImpl(System.Delegate) */
            /* IL_4F: stloc.2  */
            
            loc2 = (arg0.vtable)["asm0.x600003c"](arg0,arg1);
            case 0x52:
            /* IL_52: ldloc.2  */
            /* IL_53: ret  */
            
            return loc2;
        }
    }
};;/* static System.Delegate Delegate.Remove(Delegate,Delegate)*/

asm.x600003a = function Remove(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    
    t0 = asm0["System.Exception"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: ldnull  */
            /* IL_04: ceq  */
            /* IL_05: stloc.0  */
            
            loc0 = ((arg1 === null) ? 1 : 0);
            /* IL_06: ldloc.0  */
            /* IL_07: brfalse.s IL_0D */
            
            if ((!(loc0))){
                
                __pos__ = 0xD;
                
                continue;
            }
            /* IL_09: ldarg.0  */
            /* IL_0A: stloc.1  */
            
            loc1 = arg0;
            /* IL_0B: br.s IL_37 */
            
            __pos__ = 0x37;
            
            continue;
            case 0xD:
            /* IL_0D: ldarg.0  */
            /* IL_0E: callvirt Type GetType() */
            /* IL_13: ldarg.1  */
            /* IL_14: callvirt Type GetType() */
            /* IL_1A: ceq  */
            /* IL_1B: ldc.i4.0  */
            /* IL_1D: ceq  */
            /* IL_1E: stloc.2  */
            
            loc2 = ((((asm0.x60000a0(arg0) === asm0.x60000a0(arg1)) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_1F: ldloc.2  */
            /* IL_20: brfalse.s IL_2D */
            
            if ((!(loc2))){
                
                __pos__ = 0x2D;
                
                continue;
            }
            /* IL_22: ldstr Incompatible delegate types */
            /* IL_27: newobj Void .ctor(System.String) */
            /* IL_2C: throw  */
            
            throw CILJS.newobj(t0,asm0.x6000076,[null, CILJS.newString("Incompatible delegate types")]);
            case 0x2D:
            /* IL_2D: ldarg.0  */
            /* IL_2E: ldarg.1  */
            /* IL_2F: callvirt Delegate RemoveImpl(System.Delegate) */
            /* IL_34: stloc.1  */
            
            loc1 = (arg0.vtable)["asm0.x600003b"](arg0,arg1);
            case 0x37:
            /* IL_37: ldloc.1  */
            /* IL_38: ret  */
            
            return loc1;
        }
    }
};;/* System.Delegate Delegate.RemoveImpl(Delegate)*/

asm.x600003b_init = function (arg0, arg1)
{
    
    (asm0["System.NotImplementedException"]().init)();
    
    asm.x600003b = asm.x600003b_;
};;

asm.x600003b = function (arg0, arg1)
{
    
    asm.x600003b_init(arg0,arg1);
    
    return asm.x600003b_(arg0,arg1);
};;
asm.x600003b_ = function RemoveImpl(arg0, arg1)
{
    var t0;
    
    t0 = asm0["System.NotImplementedException"]();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: throw  */
    
    throw CILJS.newobj(t0,asm0.x6000070,[null]);
};/* System.Delegate Delegate.CombineImpl(Delegate)*/

asm.x600003c_init = function (arg0, arg1)
{
    
    (asm0["System.NotImplementedException"]().init)();
    
    asm.x600003c = asm.x600003c_;
};;

asm.x600003c = function (arg0, arg1)
{
    
    asm.x600003c_init(arg0,arg1);
    
    return asm.x600003c_(arg0,arg1);
};;
asm.x600003c_ = function CombineImpl(arg0, arg1)
{
    var t0;
    
    t0 = asm0["System.NotImplementedException"]();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: throw  */
    
    throw CILJS.newobj(t0,asm0.x6000070,[null]);
};/* System.Boolean Delegate.Equals(Object)*/

asm.x600003d = function Equals(arg0, arg1)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Delegate"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: isinst System.Delegate */
    /* IL_08: call Boolean op_Equality(System.Delegate, System.Delegate) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x600003e(arg0,t0.IsInst(arg1));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* static System.Boolean Delegate.op_Equality(Delegate,Delegate)*/

asm.x600003e_init = function (arg0, arg1)
{
    
    (asm0["System.MulticastDelegate"]().init)();
    
    asm.x600003e = asm.x600003e_;
};;

asm.x600003e = function (arg0, arg1)
{
    
    asm.x600003e_init(arg0,arg1);
    
    return asm.x600003e_(arg0,arg1);
};;
asm.x600003e_ = function op_Equality(arg0, arg1)
{
    var t0;
    var st_27;
    var st_56;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    var loc4;
    var loc5;
    var loc6;
    var loc7;
    var loc8;
    var loc9;
    var in_block_1;
    var loc10;
    var loc11;
    var loc12;
    var loc13;
    
    t0 = asm0["System.MulticastDelegate"]();
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: castclass System.MulticastDelegate */
            /* IL_07: stloc.0  */
            
            loc0 = arg0;
            /* IL_08: ldarg.1  */
            /* IL_09: castclass System.MulticastDelegate */
            /* IL_0E: stloc.1  */
            
            loc1 = arg1;
            /* IL_0F: ldloc.0  */
            /* IL_10: ldnull  */
            /* IL_12: ceq  */
            /* IL_13: stloc.2  */
            
            loc2 = ((loc0 === null) ? 1 : 0);
            /* IL_14: ldloc.2  */
            /* IL_15: brfalse.s IL_21 */
            
            if ((!(loc2))){
                
                __pos__ = 0x21;
                
                continue;
            }
            /* IL_17: ldloc.1  */
            /* IL_18: ldnull  */
            /* IL_1A: ceq  */
            /* IL_1B: stloc.3  */
            
            loc3 = ((loc1 === null) ? 1 : 0);
            /* IL_1C: br IL_10E */
            
            __pos__ = 0x10E;
            
            continue;
            case 0x21:
            /* IL_21: ldloc.1  */
            /* IL_22: ldnull  */
            /* IL_24: ceq  */
            /* IL_25: stloc.s 4 */
            
            loc4 = ((loc1 === null) ? 1 : 0);
            /* IL_27: ldloc.s 4 */
            /* IL_29: brfalse.s IL_32 */
            
            if ((!(loc4))){
                
                __pos__ = 0x32;
                
                continue;
            }
            /* IL_2B: ldc.i4.0  */
            /* IL_2C: stloc.3  */
            
            loc3 = 0;
            /* IL_2D: br IL_10E */
            
            __pos__ = 0x10E;
            
            continue;
            case 0x32:
            /* IL_32: ldloc.0  */
            /* IL_33: ldfld Object _methodPtr */
            /* IL_38: ldloc.1  */
            /* IL_39: ldfld Object _methodPtr */
            /* IL_3F: ceq  */
            /* IL_40: ldc.i4.0  */
            /* IL_42: ceq  */
            /* IL_43: stloc.s 5 */
            
            loc5 = ((((loc0._methodPtr === loc1._methodPtr) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_45: ldloc.s 5 */
            /* IL_47: brfalse.s IL_50 */
            
            if ((!(loc5))){
                
                __pos__ = 0x50;
                
                continue;
            }
            /* IL_49: ldc.i4.0  */
            /* IL_4A: stloc.3  */
            
            loc3 = 0;
            /* IL_4B: br IL_10E */
            
            __pos__ = 0x10E;
            
            continue;
            case 0x50:
            /* IL_50: ldloc.0  */
            /* IL_51: ldfld Object _target */
            /* IL_56: ldloc.1  */
            /* IL_57: ldfld Object _target */
            /* IL_5D: ceq  */
            /* IL_5E: ldc.i4.0  */
            /* IL_60: ceq  */
            /* IL_61: stloc.s 6 */
            
            loc6 = ((((loc0._target === loc1._target) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_63: ldloc.s 6 */
            /* IL_65: brfalse.s IL_6E */
            
            if ((!(loc6))){
                
                __pos__ = 0x6E;
                
                continue;
            }
            /* IL_67: ldc.i4.0  */
            /* IL_68: stloc.3  */
            
            loc3 = 0;
            /* IL_69: br IL_10E */
            
            __pos__ = 0x10E;
            
            continue;
            case 0x6E:
            /* IL_6E: ldloc.0  */
            /* IL_6F: ldfld Delegate[] _invocationList */
            /* IL_74: brfalse.s IL_81 */
            
            if ((!(loc0._invocationList))){
                
                __pos__ = 0x81;
                
                continue;
            }
            /* IL_76: ldloc.1  */
            /* IL_77: ldfld Delegate[] _invocationList */
            /* IL_7C: ldnull  */
            /* IL_7E: cgt.un  */
            
            st_27 = ((loc1._invocationList !== null) ? 1 : 0);
            /* IL_7F: br.s IL_82 */
            
            __pos__ = 0x82;
            
            continue;
            case 0x81:
            /* IL_81: ldc.i4.0  */
            
            st_27 = 0;
            case 0x82:
            /* IL_82: stloc.s 7 */
            
            loc7 = st_27;
            /* IL_84: ldloc.s 7 */
            /* IL_86: brfalse.s IL_F7 */
            
            if ((!(loc7))){
                
                __pos__ = 0xF7;
                
                continue;
            }
            /* IL_88: nop  */
            /* IL_89: ldloc.0  */
            /* IL_8A: ldfld Delegate[] _invocationList */
            /* IL_8F: ldlen  */
            /* IL_90: conv.i4  */
            /* IL_91: ldloc.1  */
            /* IL_92: ldfld Delegate[] _invocationList */
            /* IL_97: ldlen  */
            /* IL_98: conv.i4  */
            /* IL_9A: ceq  */
            /* IL_9B: ldc.i4.0  */
            /* IL_9D: ceq  */
            /* IL_9E: stloc.s 8 */
            
            loc8 = (((((loc0._invocationList.jsarr.length | 0) === (loc1._invocationList.jsarr.length | 0)) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_A0: ldloc.s 8 */
            /* IL_A2: brfalse.s IL_A8 */
            
            if ((!(loc8))){
                
                __pos__ = 0xA8;
                
                continue;
            }
            /* IL_A4: ldc.i4.0  */
            /* IL_A5: stloc.3  */
            
            loc3 = 0;
            /* IL_A6: br.s IL_10E */
            
            __pos__ = 0x10E;
            
            continue;
            case 0xA8:
            /* IL_A8: ldc.i4.0  */
            /* IL_A9: stloc.s 9 */
            
            loc9 = 0;
            /* IL_AB: br.s IL_E1 */
            
            __pos__ = 0xE1;
            
            continue;
            case 0xAD:
            case 0xDA:
            case 0xE1:
            
            in_block_1 = true;
            
            if (__pos__ < 0xAD){
                
                __pos__ = 0xAD;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0xAD:
                    /* IL_AD: nop  */
                    /* IL_AE: ldloc.0  */
                    /* IL_AF: ldfld Delegate[] _invocationList */
                    /* IL_B4: ldloc.s 9 */
                    /* IL_B6: ldelem.ref  */
                    /* IL_B7: stloc.s 10 */
                    
                    loc10 = CILJS.ldelemRef(loc0._invocationList,loc9);
                    /* IL_B9: ldloc.1  */
                    /* IL_BA: ldfld Delegate[] _invocationList */
                    /* IL_BF: ldloc.s 9 */
                    /* IL_C1: ldelem.ref  */
                    /* IL_C2: stloc.s 11 */
                    
                    loc11 = CILJS.ldelemRef(loc1._invocationList,loc9);
                    /* IL_C4: ldloc.s 10 */
                    /* IL_C6: ldloc.s 11 */
                    /* IL_C8: call Boolean op_Equality(System.Delegate, System.Delegate) */
                    /* IL_CD: ldc.i4.0  */
                    /* IL_CF: ceq  */
                    /* IL_D0: stloc.s 12 */
                    
                    loc12 = ((asm0.x600003e(loc10,loc11) === 0) ? 1 : 0);
                    /* IL_D2: ldloc.s 12 */
                    /* IL_D4: brfalse.s IL_DA */
                    
                    if ((!(loc12))){
                        
                        __pos__ = 0xDA;
                        
                        continue;
                    }
                    /* IL_D6: ldc.i4.0  */
                    /* IL_D7: stloc.3  */
                    
                    loc3 = 0;
                    /* IL_D8: br.s IL_10E */
                    
                    __pos__ = 0x10E;
                    
                    continue;
                    case 0xDA:
                    /* IL_DA: nop  */
                    /* IL_DB: ldloc.s 9 */
                    /* IL_DD: ldc.i4.1  */
                    /* IL_DE: add  */
                    /* IL_DF: stloc.s 9 */
                    
                    loc9 = (loc9 + 1) | 0;
                    case 0xE1:
                    /* IL_E1: ldloc.s 9 */
                    /* IL_E3: ldloc.0  */
                    /* IL_E4: ldfld Delegate[] _invocationList */
                    /* IL_E9: ldlen  */
                    /* IL_EA: conv.i4  */
                    /* IL_EC: clt  */
                    /* IL_ED: stloc.s 13 */
                    
                    loc13 = ((loc9 < (loc0._invocationList.jsarr.length | 0)) ? 1 : 0);
                    /* IL_EF: ldloc.s 13 */
                    /* IL_F1: brtrue.s IL_AD */
                    
                    if (loc13){
                        
                        __pos__ = 0xAD;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0xE1) || (__pos__ < 0xAD)){
                
                continue;
            }
            /* IL_F3: ldc.i4.1  */
            /* IL_F4: stloc.3  */
            
            loc3 = 1;
            /* IL_F5: br.s IL_10E */
            
            __pos__ = 0x10E;
            
            continue;
            case 0xF7:
            /* IL_F7: ldloc.0  */
            /* IL_F8: ldfld Delegate[] _invocationList */
            /* IL_FD: brtrue.s IL_10A */
            
            if (loc0._invocationList){
                
                __pos__ = 0x10A;
                
                continue;
            }
            /* IL_FF: ldloc.1  */
            /* IL_100: ldfld Delegate[] _invocationList */
            /* IL_105: ldnull  */
            /* IL_107: ceq  */
            
            st_56 = ((loc1._invocationList === null) ? 1 : 0);
            /* IL_108: br.s IL_10B */
            
            __pos__ = 0x10B;
            
            continue;
            case 0x10A:
            /* IL_10A: ldc.i4.0  */
            
            st_56 = 0;
            case 0x10B:
            /* IL_10B: stloc.3  */
            
            loc3 = st_56;
            case 0x10E:
            /* IL_10E: ldloc.3  */
            /* IL_10F: ret  */
            
            return loc3;
        }
    }
};/* static System.Boolean Delegate.op_Inequality(Delegate,Delegate)*/

asm.x600003f = function op_Inequality(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: call Boolean op_Equality(System.Delegate, System.Delegate) */
    /* IL_08: ldc.i4.0  */
    /* IL_0A: ceq  */
    /* IL_0B: stloc.0  */
    
    loc0 = ((asm0.x600003e(arg0,arg1) === 0) ? 1 : 0);
    /* IL_0E: ldloc.0  */
    /* IL_0F: ret  */
    
    return loc0;
};;/* System.Int32 Delegate.GetHashCode()*/

asm.x6000040 = function GetHashCode(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call Int32 GetHashCode() */
    /* IL_07: stloc.0  */
    
    loc0 = asm0.x600009f(arg0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* static System.Object Delegate.GetJsFunction(Delegate)*/

asm.x6000042 = function GetJsFunction(arg0)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld Object _target */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: stloc.0  */
            
            loc0 = ((arg0._target !== null) ? 1 : 0);
            /* IL_0B: ldloc.0  */
            /* IL_0C: brfalse.s IL_22 */
            
            if ((!(loc0))){
                
                __pos__ = 0x22;
                
                continue;
            }
            /* IL_0E: ldarg.0  */
            /* IL_0F: ldfld Object _methodPtr */
            /* IL_14: ldarg.0  */
            /* IL_15: ldfld Object _target */
            /* IL_1A: call Object GetJsFunction(System.Object, System.Object) */
            /* IL_1F: stloc.1  */
            
            loc1 = (
            function () {{ 
                var args = Array.prototype.slice.apply(arguments);
                args.unshift(arg0._target);
                return arg0._methodPtr.apply(null, args);
            }});
            /* IL_20: br.s IL_2B */
            
            __pos__ = 0x2B;
            
            continue;
            case 0x22:
            /* IL_22: ldarg.0  */
            /* IL_23: ldfld Object _methodPtr */
            /* IL_28: stloc.1  */
            
            loc1 = arg0._methodPtr;
            case 0x2B:
            /* IL_2B: ldloc.1  */
            /* IL_2C: ret  */
            
            return loc1;
        }
    }
};;/*  Delegate..ctor()*/

asm.x6000043 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Type Type.GetTypeFromHandle(RuntimeTypeHandle)*/

asm.x6000045 = function GetTypeFromHandle(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call Type GetRuntimeTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_07: stloc.0  */
    
    loc0 = asm0.x6000193(CILJS.cloneValue(arg0));
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* System.Boolean Type.IsSubclassOf(Type)*/

asm.x6000046 = function IsSubclassOf(arg0, arg1)
{
    var st_03;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var in_block_1;
    var loc3;
    var loc4;
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: brfalse.s IL_0A */
            
            if ((!(arg1))){
                
                __pos__ = 0xA;
                
                continue;
            }
            /* IL_04: ldarg.1  */
            /* IL_05: ldarg.0  */
            /* IL_07: ceq  */
            
            st_03 = ((arg1 === arg0) ? 1 : 0);
            /* IL_08: br.s IL_0B */
            
            __pos__ = 0xB;
            
            continue;
            case 0xA:
            /* IL_0A: ldc.i4.1  */
            
            st_03 = 1;
            case 0xB:
            /* IL_0B: stloc.0  */
            
            loc0 = st_03;
            /* IL_0C: ldloc.0  */
            /* IL_0D: brfalse.s IL_13 */
            
            if ((!(loc0))){
                
                __pos__ = 0x13;
                
                continue;
            }
            /* IL_0F: ldc.i4.0  */
            /* IL_10: stloc.1  */
            
            loc1 = 0;
            /* IL_11: br.s IL_3D */
            
            __pos__ = 0x3D;
            
            continue;
            case 0x13:
            /* IL_13: ldarg.0  */
            /* IL_14: callvirt Type get_BaseType() */
            /* IL_19: stloc.2  */
            
            loc2 = (arg0.vtable)["asm0.x6000049"](arg0);
            /* IL_1A: br.s IL_2F */
            
            __pos__ = 0x2F;
            
            continue;
            case 0x1C:
            case 0x28:
            case 0x2F:
            
            in_block_1 = true;
            
            if (__pos__ < 0x1C){
                
                __pos__ = 0x1C;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x1C:
                    /* IL_1C: ldloc.2  */
                    /* IL_1D: ldarg.1  */
                    /* IL_1F: ceq  */
                    /* IL_20: stloc.3  */
                    
                    loc3 = ((loc2 === arg1) ? 1 : 0);
                    /* IL_21: ldloc.3  */
                    /* IL_22: brfalse.s IL_28 */
                    
                    if ((!(loc3))){
                        
                        __pos__ = 0x28;
                        
                        continue;
                    }
                    /* IL_24: ldc.i4.1  */
                    /* IL_25: stloc.1  */
                    
                    loc1 = 1;
                    /* IL_26: br.s IL_3D */
                    
                    __pos__ = 0x3D;
                    
                    continue;
                    case 0x28:
                    /* IL_28: ldloc.2  */
                    /* IL_29: callvirt Type get_BaseType() */
                    /* IL_2E: stloc.2  */
                    
                    loc2 = (loc2.vtable)["asm0.x6000049"](loc2);
                    case 0x2F:
                    /* IL_2F: ldloc.2  */
                    /* IL_30: ldnull  */
                    /* IL_32: cgt.un  */
                    /* IL_33: stloc.s 4 */
                    
                    loc4 = ((loc2 !== null) ? 1 : 0);
                    /* IL_35: ldloc.s 4 */
                    /* IL_37: brtrue.s IL_1C */
                    
                    if (loc4){
                        
                        __pos__ = 0x1C;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x2F) || (__pos__ < 0x1C)){
                
                continue;
            }
            /* IL_39: ldc.i4.0  */
            /* IL_3A: stloc.1  */
            
            loc1 = 0;
            case 0x3D:
            /* IL_3D: ldloc.1  */
            /* IL_3E: ret  */
            
            return loc1;
        }
    }
};;/* System.Boolean Type.get_IsEnum()*/

asm.x6000047 = function get_IsEnum(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Enum"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldtoken System.Enum */
    /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
    /* IL_0C: callvirt Boolean IsSubclassOf(System.Type) */
    /* IL_11: stloc.0  */
    
    loc0 = (arg0.vtable)["asm0.x6000046"](arg0,asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)));
    /* IL_14: ldloc.0  */
    /* IL_15: ret  */
    
    return loc0;
};;/*  Type..ctor()*/

asm.x6000057 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x60001cb(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.AttributeTargets AttributeUsageAttribute.get_ValidOn()*/

asm.x6000059 = function get_ValidOn(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld AttributeTargets <ValidOn>k__BackingField */
    /* IL_06: ret  */
    
    return arg0["SystemAttributeUsageAttribute<ValidOn>k__BackingField"];
};;/* System.Void AttributeUsageAttribute.set_ValidOn(AttributeTargets)*/

asm.x600005a = function set_ValidOn(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: stfld AttributeTargets <ValidOn>k__BackingField */
    
    arg0["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = arg1;
    /* IL_07: ret  */
    
    return ;
};;/* System.Boolean AttributeUsageAttribute.get_Inherited()*/

asm.x600005b = function get_Inherited(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld Boolean <Inherited>k__BackingField */
    /* IL_06: ret  */
    
    return arg0["SystemAttributeUsageAttribute<Inherited>k__BackingField"];
};;/* System.Void AttributeUsageAttribute.set_Inherited(Boolean)*/

asm.x600005c = function set_Inherited(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: stfld Boolean <Inherited>k__BackingField */
    
    arg0["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = arg1;
    /* IL_07: ret  */
    
    return ;
};;/* System.Boolean AttributeUsageAttribute.get_AllowMultiple()*/

asm.x600005d = function get_AllowMultiple(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld Boolean <AllowMultiple>k__BackingField */
    /* IL_06: ret  */
    
    return arg0["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"];
};;/* System.Void AttributeUsageAttribute.set_AllowMultiple(Boolean)*/

asm.x600005e = function set_AllowMultiple(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: stfld Boolean <AllowMultiple>k__BackingField */
    
    arg0["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"] = arg1;
    /* IL_07: ret  */
    
    return ;
};;/*  AttributeUsageAttribute..ctor(AttributeTargets)*/

asm.x6000058 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: ldarg.1  */
    /* IL_0A: call Void set_ValidOn(System.AttributeTargets) */
    
    asm0.x600005a(arg0,CILJS.cloneValue(arg1));
    /* IL_0F: nop  */
    /* IL_10: ret  */
    
    return ;
};;/* System.Object RuntimeTypeHandle.get_Value()*/

asm.x600005f = function get_Value(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld Object value */
    /* IL_07: stloc.0  */
    
    loc0 = arg0.r().value;
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* System.String Boolean.ToString()*/

asm.x6000060 = function ToString(arg0)
{
    var st_02;
    var in_block_0;
    var __pos__;
    var loc0;
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.u1  */
            /* IL_03: brtrue.s IL_0C */
            
            if (arg0.r()){
                
                __pos__ = 0xC;
                
                continue;
            }
            /* IL_05: ldstr False */
            
            st_02 = CILJS.newString("False");
            /* IL_0A: br.s IL_11 */
            
            __pos__ = 0x11;
            
            continue;
            case 0xC:
            /* IL_0C: ldstr True */
            
            st_02 = CILJS.newString("True");
            case 0x11:
            /* IL_11: stloc.0  */
            
            loc0 = st_02;
            /* IL_14: ldloc.0  */
            /* IL_15: ret  */
            
            return loc0;
        }
    }
};;/* System.Int32 Boolean.GetHashCode()*/

asm.x6000061 = function GetHashCode(arg0)
{
    var st_02;
    var in_block_0;
    var __pos__;
    var loc0;
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.u1  */
            /* IL_03: brtrue.s IL_08 */
            
            if (arg0.r()){
                
                __pos__ = 0x8;
                
                continue;
            }
            /* IL_05: ldc.i4.0  */
            
            st_02 = 0;
            /* IL_06: br.s IL_09 */
            
            __pos__ = 0x9;
            
            continue;
            case 0x8:
            /* IL_08: ldc.i4.1  */
            
            st_02 = 1;
            case 0x9:
            /* IL_09: stloc.0  */
            
            loc0 = st_02;
            /* IL_0C: ldloc.0  */
            /* IL_0D: ret  */
            
            return loc0;
        }
    }
};;/* System.Boolean Boolean.Equals(Boolean)*/

asm.x6000062 = function Equals(arg0, arg1)
{
    var loc0;
    var loc1;
    var loc2;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.u1  */
    /* IL_03: stloc.0  */
    
    loc0 = arg0.r();
    /* IL_04: ldarg.1  */
    /* IL_05: stloc.1  */
    
    loc1 = arg1;
    /* IL_06: ldloc.0  */
    /* IL_07: ldloc.1  */
    /* IL_09: ceq  */
    /* IL_0A: stloc.2  */
    
    loc2 = ((loc0 === loc1) ? 1 : 0);
    /* IL_0D: ldloc.2  */
    /* IL_0E: ret  */
    
    return loc2;
};;/* System.Boolean Boolean.Equals(Object)*/

asm.x6000063 = function Equals(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.Boolean"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: isinst System.Boolean */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: ldc.i4.0  */
            /* IL_0C: ceq  */
            /* IL_0D: stloc.0  */
            
            loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_0E: ldloc.0  */
            /* IL_0F: brfalse.s IL_15 */
            
            if ((!(loc0))){
                
                __pos__ = 0x15;
                
                continue;
            }
            /* IL_11: ldc.i4.0  */
            /* IL_12: stloc.1  */
            
            loc1 = 0;
            /* IL_13: br.s IL_24 */
            
            __pos__ = 0x24;
            
            continue;
            case 0x15:
            /* IL_15: ldarg.0  */
            /* IL_16: ldarg.1  */
            /* IL_17: unbox.any System.Boolean */
            /* IL_1C: call Boolean Equals(System.Boolean) */
            /* IL_21: stloc.1  */
            
            loc1 = asm0.x6000062(arg0,CILJS.unboxAny(arg1,t0));
            case 0x24:
            /* IL_24: ldloc.1  */
            /* IL_25: ret  */
            
            return loc1;
        }
    }
};;/* System.Int32 Boolean.CompareTo(Object)*/

asm.x6000064 = function CompareTo(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: unbox.any System.Boolean */
    /* IL_08: call Int32 CompareTo(System.Boolean) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x6000065(arg0,CILJS.unboxAny(arg1,asm0["System.Boolean"]()));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 Boolean.CompareTo(Boolean)*/

asm.x6000065 = function CompareTo(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.u1  */
            /* IL_03: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_04: ldloc.0  */
            /* IL_05: ldarg.1  */
            /* IL_07: ceq  */
            /* IL_08: stloc.1  */
            
            loc1 = ((loc0 === arg1) ? 1 : 0);
            /* IL_09: ldloc.1  */
            /* IL_0A: brfalse.s IL_10 */
            
            if ((!(loc1))){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_0C: ldc.i4.0  */
            /* IL_0D: stloc.2  */
            
            loc2 = 0;
            /* IL_0E: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x10:
            /* IL_10: ldloc.0  */
            /* IL_11: ldc.i4.0  */
            /* IL_13: ceq  */
            /* IL_14: stloc.3  */
            
            loc3 = ((loc0 === 0) ? 1 : 0);
            /* IL_15: ldloc.3  */
            /* IL_16: brfalse.s IL_1C */
            
            if ((!(loc3))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_18: ldc.i4.m1  */
            /* IL_19: stloc.2  */
            
            loc2 = -1;
            /* IL_1A: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x1C:
            /* IL_1C: ldc.i4.1  */
            /* IL_1D: stloc.2  */
            
            loc2 = 1;
            case 0x20:
            /* IL_20: ldloc.2  */
            /* IL_21: ret  */
            
            return loc2;
        }
    }
};;/* System.String SByte.ToString()*/

asm.x6000066 = function ToString(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.SByte"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i1  */
    /* IL_03: box System.SByte */
    /* IL_08: call String SignedPrimitiveToString(System.Object) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x600002f(CILJS.makeBox(arg0.r(),t0));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 SByte.CompareTo(Object)*/

asm.x6000067 = function CompareTo(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: unbox.any System.SByte */
    /* IL_08: call Int32 CompareTo(System.SByte) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x6000068(arg0,CILJS.unboxAny(arg1,asm0["System.SByte"]()));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 SByte.CompareTo(SByte)*/

asm.x6000068 = function CompareTo(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.i1  */
            /* IL_03: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_04: ldloc.0  */
            /* IL_05: ldarg.1  */
            /* IL_07: clt  */
            /* IL_08: stloc.1  */
            
            loc1 = ((loc0 < arg1) ? 1 : 0);
            /* IL_09: ldloc.1  */
            /* IL_0A: brfalse.s IL_10 */
            
            if ((!(loc1))){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_0C: ldc.i4.m1  */
            /* IL_0D: stloc.2  */
            
            loc2 = -1;
            /* IL_0E: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x10:
            /* IL_10: ldloc.0  */
            /* IL_11: ldarg.1  */
            /* IL_13: cgt  */
            /* IL_14: stloc.3  */
            
            loc3 = ((loc0 > arg1) ? 1 : 0);
            /* IL_15: ldloc.3  */
            /* IL_16: brfalse.s IL_1C */
            
            if ((!(loc3))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_18: ldc.i4.1  */
            /* IL_19: stloc.2  */
            
            loc2 = 1;
            /* IL_1A: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x1C:
            /* IL_1C: ldc.i4.0  */
            /* IL_1D: stloc.2  */
            
            loc2 = 0;
            case 0x20:
            /* IL_20: ldloc.2  */
            /* IL_21: ret  */
            
            return loc2;
        }
    }
};;/* System.Boolean SByte.Equals(SByte)*/

asm.x6000069 = function Equals(arg0, arg1)
{
    var loc0;
    var loc1;
    var loc2;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i1  */
    /* IL_03: stloc.0  */
    
    loc0 = arg0.r();
    /* IL_04: ldarg.1  */
    /* IL_05: stloc.1  */
    
    loc1 = arg1;
    /* IL_06: ldloc.0  */
    /* IL_07: ldloc.1  */
    /* IL_09: ceq  */
    /* IL_0A: stloc.2  */
    
    loc2 = ((loc0 === loc1) ? 1 : 0);
    /* IL_0D: ldloc.2  */
    /* IL_0E: ret  */
    
    return loc2;
};;/* System.Boolean SByte.Equals(Object)*/

asm.x600006a = function Equals(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.SByte"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: isinst System.SByte */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: ldc.i4.0  */
            /* IL_0C: ceq  */
            /* IL_0D: stloc.0  */
            
            loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_0E: ldloc.0  */
            /* IL_0F: brfalse.s IL_15 */
            
            if ((!(loc0))){
                
                __pos__ = 0x15;
                
                continue;
            }
            /* IL_11: ldc.i4.0  */
            /* IL_12: stloc.1  */
            
            loc1 = 0;
            /* IL_13: br.s IL_24 */
            
            __pos__ = 0x24;
            
            continue;
            case 0x15:
            /* IL_15: ldarg.0  */
            /* IL_16: ldarg.1  */
            /* IL_17: unbox.any System.SByte */
            /* IL_1C: call Boolean Equals(System.SByte) */
            /* IL_21: stloc.1  */
            
            loc1 = asm0.x6000069(arg0,CILJS.unboxAny(arg1,t0));
            case 0x24:
            /* IL_24: ldloc.1  */
            /* IL_25: ret  */
            
            return loc1;
        }
    }
};;/* System.Int32 SByte.GetHashCode()*/

asm.x600006b = function GetHashCode(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i1  */
    /* IL_03: stloc.0  */
    
    loc0 = arg0.r();
    /* IL_06: ldloc.0  */
    /* IL_07: ret  */
    
    return loc0;
};;/* static System.Object Activator.CreateInstance(Type)*/

asm.x600006d = function CreateInstance(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call Object CreateInstanceImpl(System.Type) */
    /* IL_07: stloc.0  */
    
    loc0 = (new (arg0.ctor)());
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* static T Activator.CreateInstance<T>()*/

asm.x600006e = function (T)
{
    
    return function CreateInstance()
    {
        var t0;
        var loc0;
        
        t0 = T;
        /* IL_00: nop  */
        /* IL_01: ldtoken T */
        /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_0B: call Object CreateInstance(System.Type) */
        /* IL_10: unbox.any T */
        /* IL_15: stloc.0  */
        
        loc0 = CILJS.unboxAny(asm0.x600006d(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))),t0);
        /* IL_18: ldloc.0  */
        /* IL_19: ret  */
        
        return loc0;
    };
};;/*  NotImplementedException..ctor()*/

asm.x6000070 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000075(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void Console.WriteLine(Object)*/

asm.x6000072 = function WriteLine(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    
    t0 = asm0["System.String"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldnull  */
            /* IL_04: ceq  */
            /* IL_05: stloc.0  */
            
            loc0 = ((arg0 === null) ? 1 : 0);
            /* IL_06: ldloc.0  */
            /* IL_07: brfalse.s IL_16 */
            
            if ((!(loc0))){
                
                __pos__ = 0x16;
                
                continue;
            }
            
            asm0.x60000d6();
            /* IL_09: ldsfld String Empty */
            /* IL_0E: call Void WriteLineImpl(System.String) */
            
            CILJS.consoleWriteLine(t0.Empty);
            /* IL_13: nop  */
            /* IL_14: br.s IL_22 */
            
            __pos__ = 0x22;
            
            continue;
            case 0x16:
            /* IL_16: ldarg.0  */
            /* IL_17: callvirt String ToString() */
            /* IL_1C: call Void WriteLineImpl(System.String) */
            
            CILJS.consoleWriteLine((arg0.vtable)["asm0.x600009b"](CILJS.convertBoxToPointerAsNeeded(arg0)));
            /* IL_21: nop  */
            case 0x22:
            /* IL_22: ret  */
            
            return ;
        }
    }
};;/* static System.Void Console.WriteLine(String,Object[])*/

asm.x6000073 = function WriteLine(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    
    t0 = asm0["System.String"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldnull  */
            /* IL_04: ceq  */
            /* IL_05: stloc.0  */
            
            loc0 = ((arg0 === null) ? 1 : 0);
            /* IL_06: ldloc.0  */
            /* IL_07: brfalse.s IL_16 */
            
            if ((!(loc0))){
                
                __pos__ = 0x16;
                
                continue;
            }
            
            asm0.x60000d6();
            /* IL_09: ldsfld String Empty */
            /* IL_0E: call Void WriteLineImpl(System.String) */
            
            CILJS.consoleWriteLine(t0.Empty);
            /* IL_13: nop  */
            /* IL_14: br.s IL_23 */
            
            __pos__ = 0x23;
            
            continue;
            case 0x16:
            /* IL_16: ldarg.0  */
            /* IL_17: ldarg.1  */
            /* IL_18: call String Format(System.String, System.Object[]) */
            /* IL_1D: call Void WriteLineImpl(System.String) */
            
            CILJS.consoleWriteLine(asm0.x60000cd(arg0,arg1));
            /* IL_22: nop  */
            case 0x23:
            /* IL_23: ret  */
            
            return ;
        }
    }
};;/*  Console..ctor()*/

asm.x6000074 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Int32 Exception.get_HResult()*/

asm.x6000078 = function get_HResult(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld Int32 <HResult>k__BackingField */
    /* IL_06: ret  */
    
    return arg0["SystemException<HResult>k__BackingField"];
};;/* System.Void Exception.set_HResult(Int32)*/

asm.x6000079 = function set_HResult(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: stfld Int32 <HResult>k__BackingField */
    
    arg0["SystemException<HResult>k__BackingField"] = arg1;
    /* IL_07: ret  */
    
    return ;
};;/* System.String Exception.get_Message()*/

asm.x600007a = function get_Message(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld String <Message>k__BackingField */
    /* IL_06: ret  */
    
    return arg0["SystemException<Message>k__BackingField"];
};;/* System.Void Exception.set_Message(String)*/

asm.x600007b = function set_Message(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: stfld String <Message>k__BackingField */
    
    arg0["SystemException<Message>k__BackingField"] = arg1;
    /* IL_07: ret  */
    
    return ;
};;/* System.String Exception.ToString()*/

asm.x600007c = function ToString(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: callvirt String get_Message() */
    /* IL_07: stloc.0  */
    
    loc0 = (arg0.vtable)["asm0.x600007a"](arg0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* System.Exception Exception.get_InnerException()*/

asm.x600007d = function get_InnerException(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld Exception <InnerException>k__BackingField */
    /* IL_06: ret  */
    
    return arg0["SystemException<InnerException>k__BackingField"];
};;/* System.Void Exception.set_InnerException(Exception)*/

asm.x600007e = function set_InnerException(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: stfld Exception <InnerException>k__BackingField */
    
    arg0["SystemException<InnerException>k__BackingField"] = arg1;
    /* IL_07: ret  */
    
    return ;
};;/*  Exception..ctor()*/

asm.x6000075 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: call Void init(System.Exception) */
    
    arg0.stack = new Error().stack;
    /* IL_0E: nop  */
    /* IL_0F: ret  */
    
    return ;
};;/*  Exception..ctor(String)*/

asm.x6000076 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000075(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: ldarg.1  */
    /* IL_0A: callvirt Void set_Message(System.String) */
    
    (arg0.vtable)["asm0.x600007b"](arg0,arg1);
    /* IL_0F: nop  */
    /* IL_10: ret  */
    
    return ;
};;/*  Exception..ctor(String,Exception)*/

asm.x6000077 = function _ctor(arg0, arg1, arg2)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000075(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: ldarg.1  */
    /* IL_0A: callvirt Void set_Message(System.String) */
    
    (arg0.vtable)["asm0.x600007b"](arg0,arg1);
    /* IL_0F: nop  */
    /* IL_10: ldarg.0  */
    /* IL_11: ldarg.2  */
    /* IL_12: call Void set_InnerException(System.Exception) */
    
    asm0.x600007e(arg0,arg2);
    /* IL_17: nop  */
    /* IL_18: ret  */
    
    return ;
};;/*  Attribute..ctor()*/

asm.x6000080 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Void GC.KeepAlive(Object)*/

asm.x6000081 = function KeepAlive(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/* static System.Void GC.SuppressFinalize(Object)*/

asm.x6000082 = function SuppressFinalize(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/* System.String IntPtr.ToString()*/

asm.x6000083_init = function (arg0)
{
    
    (asm0["System.IntPtr"]().init)();
    
    asm.x6000083 = asm.x6000083_;
};;

asm.x6000083 = function (arg0)
{
    
    asm.x6000083_init(arg0);
    
    return asm.x6000083_(arg0);
};;
asm.x6000083_ = function ToString(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.IntPtr"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i  */
    /* IL_03: box System.IntPtr */
    /* IL_08: call String SignedPrimitiveToString(System.Object) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x600002f(CILJS.makeBox(arg0.r(),t0));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};/* System.Boolean Nullable`1.get_HasValue()*/

asm.x6000085 = function get_HasValue(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld Boolean has_value */
    /* IL_07: stloc.0  */
    
    loc0 = arg0.r().has_value;
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* T Nullable`1.get_Value()*/

asm.x6000086_init = function (arg0)
{
    
    (asm0["System.InvalidOperationException"]().init)();
    
    asm.x6000086 = asm.x6000086_;
};;

asm.x6000086 = function (arg0)
{
    
    asm.x6000086_init(arg0);
    
    return asm.x6000086_(arg0);
};;
asm.x6000086_ = function get_Value(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.InvalidOperationException"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld Boolean has_value */
            /* IL_07: ldc.i4.0  */
            /* IL_09: ceq  */
            /* IL_0A: stloc.0  */
            
            loc0 = ((arg0.r().has_value === 0) ? 1 : 0);
            /* IL_0B: ldloc.0  */
            /* IL_0C: brfalse.s IL_19 */
            
            if ((!(loc0))){
                
                __pos__ = 0x19;
                
                continue;
            }
            /* IL_0E: ldstr Nullable object must have a value. */
            /* IL_13: newobj Void .ctor(System.String) */
            /* IL_18: throw  */
            
            throw CILJS.newobj(t0,asm0.x6000004,[null, CILJS.newString("Nullable object must have a value.")]);
            case 0x19:
            /* IL_19: ldarg.0  */
            /* IL_1A: ldfld T value */
            /* IL_1F: stloc.1  */
            
            loc1 = CILJS.cloneValue(arg0.r().value);
            /* IL_22: ldloc.1  */
            /* IL_23: ret  */
            
            return loc1;
        }
    }
};/* System.Boolean Nullable`1.Equals(Object)*/

asm.x6000087_init = function (arg0, arg1)
{
    
    (asm0["CilJs.Runtime.UnboundGenericParameter"]().init)();
    
    (asm0["System.Nullable`1"](((arg0.r().constructor.GenericArguments)["asm0.t200001d"])[0]).init)();
};;

asm.x6000087 = function (arg0, arg1)
{
    
    asm.x6000087_init(arg0,arg1);
    
    return asm.x6000087_(arg0,arg1);
};;
asm.x6000087_ = function Equals(arg0, arg1)
{
    var t0;
    var t1;
    var t2;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    
    t0 = asm0["CilJs.Runtime.UnboundGenericParameter"]();
    
    t1 = ((arg0.r().constructor.GenericArguments)["asm0.t200001d"])[0];
    
    t2 = asm0["System.Nullable`1"](t1);
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: ldnull  */
            /* IL_04: ceq  */
            /* IL_05: stloc.0  */
            
            loc0 = ((arg1 === null) ? 1 : 0);
            /* IL_06: ldloc.0  */
            /* IL_07: brfalse.s IL_15 */
            
            if ((!(loc0))){
                
                __pos__ = 0x15;
                
                continue;
            }
            /* IL_09: ldarg.0  */
            /* IL_0A: ldfld Boolean has_value */
            /* IL_0F: ldc.i4.0  */
            /* IL_11: ceq  */
            /* IL_12: stloc.1  */
            
            loc1 = ((arg0.r().has_value === 0) ? 1 : 0);
            /* IL_13: br.s IL_38 */
            
            __pos__ = 0x38;
            
            continue;
            case 0x15:
            /* IL_15: ldarg.1  */
            /* IL_16: isinst System.Nullable`1[T] */
            /* IL_1B: ldnull  */
            /* IL_1D: cgt.un  */
            /* IL_1E: ldc.i4.0  */
            /* IL_20: ceq  */
            /* IL_21: stloc.2  */
            
            loc2 = ((((t2.IsInst(arg1) !== null) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_22: ldloc.2  */
            /* IL_23: brfalse.s IL_29 */
            
            if ((!(loc2))){
                
                __pos__ = 0x29;
                
                continue;
            }
            /* IL_25: ldc.i4.0  */
            /* IL_26: stloc.1  */
            
            loc1 = 0;
            /* IL_27: br.s IL_38 */
            
            __pos__ = 0x38;
            
            continue;
            case 0x29:
            /* IL_29: ldarg.0  */
            /* IL_2A: ldarg.1  */
            /* IL_2B: unbox.any System.Nullable`1[T] */
            /* IL_30: call Boolean Equals(System.Nullable`1[T]) */
            /* IL_35: stloc.1  */
            
            loc1 = asm0.x6000088(arg0,CILJS.cloneValue(CILJS.unboxAny(arg1,t2)));
            case 0x38:
            /* IL_38: ldloc.1  */
            /* IL_39: ret  */
            
            return loc1;
        }
    }
};/* System.Boolean Nullable`1.Equals(Nullable`1)*/

asm.x6000088 = function Equals(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    
    t0 = ((arg0.r().constructor.GenericArguments)["asm0.t200001d"])[0];
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: ldfld Boolean has_value */
            /* IL_07: ldarg.0  */
            /* IL_08: ldfld Boolean has_value */
            /* IL_0E: ceq  */
            /* IL_0F: ldc.i4.0  */
            /* IL_11: ceq  */
            /* IL_12: stloc.0  */
            
            loc0 = ((((arg1.has_value === arg0.r().has_value) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_13: ldloc.0  */
            /* IL_14: brfalse.s IL_1A */
            
            if ((!(loc0))){
                
                __pos__ = 0x1A;
                
                continue;
            }
            /* IL_16: ldc.i4.0  */
            /* IL_17: stloc.1  */
            
            loc1 = 0;
            /* IL_18: br.s IL_4B */
            
            __pos__ = 0x4B;
            
            continue;
            case 0x1A:
            /* IL_1A: ldarg.0  */
            /* IL_1B: ldfld Boolean has_value */
            /* IL_20: ldc.i4.0  */
            /* IL_22: ceq  */
            /* IL_23: stloc.2  */
            
            loc2 = ((arg0.r().has_value === 0) ? 1 : 0);
            /* IL_24: ldloc.2  */
            /* IL_25: brfalse.s IL_2B */
            
            if ((!(loc2))){
                
                __pos__ = 0x2B;
                
                continue;
            }
            /* IL_27: ldc.i4.1  */
            /* IL_28: stloc.1  */
            
            loc1 = 1;
            /* IL_29: br.s IL_4B */
            
            __pos__ = 0x4B;
            
            continue;
            case 0x2B:
            /* IL_2B: ldarga.s 1 */
            /* IL_2D: ldflda T value */
            /* IL_32: ldarg.0  */
            /* IL_33: ldfld T value */
            /* IL_38: box T */
            /* IL_43: callvirt Boolean Equals(System.Object) */
            /* IL_48: stloc.1  */
            
            loc1 = ((arg1.value.vtable || t0.prototype.vtable)["asm0.x600009e"])(CILJS.dereferencePointerAsNeeded({
                        w: function (v)
                        {
                            
                            arg1.value = v;
                        },
                        r: function ()
                        {
                            
                            return arg1.value;
                        }
                    }),CILJS.box(arg0.r().value,t0));
            case 0x4B:
            /* IL_4B: ldloc.1  */
            /* IL_4C: ret  */
            
            return loc1;
        }
    }
};;/* System.Int32 Nullable`1.GetHashCode()*/

asm.x6000089 = function GetHashCode(arg0)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld Boolean has_value */
            /* IL_07: ldc.i4.0  */
            /* IL_09: ceq  */
            /* IL_0A: stloc.0  */
            
            loc0 = ((arg0.r().has_value === 0) ? 1 : 0);
            /* IL_0B: ldloc.0  */
            /* IL_0C: brfalse.s IL_12 */
            
            if ((!(loc0))){
                
                __pos__ = 0x12;
                
                continue;
            }
            /* IL_0E: ldc.i4.0  */
            /* IL_0F: stloc.1  */
            
            loc1 = 0;
            /* IL_10: br.s IL_26 */
            
            __pos__ = 0x26;
            
            continue;
            case 0x12:
            /* IL_12: ldarg.0  */
            /* IL_13: ldflda T value */
            /* IL_1E: callvirt Int32 GetHashCode() */
            /* IL_23: stloc.1  */
            
            loc1 = ((arg0.r().value.vtable || ((arg0.r().constructor.GenericArguments)["asm0.t200001d"])[0].prototype.vtable)["asm0.x600009f"])(CILJS.dereferencePointerAsNeeded({
                        w: function (v)
                        {
                            
                            arg0.r().value = v;
                        },
                        r: function ()
                        {
                            
                            return arg0.r().value;
                        }
                    }));
            case 0x26:
            /* IL_26: ldloc.1  */
            /* IL_27: ret  */
            
            return loc1;
        }
    }
};;/* T Nullable`1.GetValueOrDefault()*/

asm.x600008a = function GetValueOrDefault(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld T value */
    /* IL_07: stloc.0  */
    
    loc0 = CILJS.cloneValue(arg0.r().value);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* T Nullable`1.GetValueOrDefault(T)*/

asm.x600008b = function GetValueOrDefault(arg0, arg1)
{
    var st_02;
    var st_03;
    var in_block_0;
    var __pos__;
    var loc0;
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld Boolean has_value */
            /* IL_07: brtrue.s IL_0C */
            
            if (arg0.r().has_value){
                
                __pos__ = 0xC;
                
                continue;
            }
            /* IL_09: ldarg.1  */
            
            st_03 = arg1;
            /* IL_0A: br.s IL_12 */
            
            __pos__ = 0x12;
            
            continue;
            case 0xC:
            /* IL_0C: ldarg.0  */
            
            st_02 = arg0;
            /* IL_0D: ldfld T value */
            
            st_03 = st_02.r().value;
            case 0x12:
            /* IL_12: stloc.0  */
            
            loc0 = CILJS.cloneValue(st_03);
            /* IL_15: ldloc.0  */
            /* IL_16: ret  */
            
            return loc0;
        }
    }
};;/* System.String Nullable`1.ToString()*/

asm.x600008c = function ToString(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.String"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld Boolean has_value */
            /* IL_07: stloc.0  */
            
            loc0 = arg0.r().has_value;
            /* IL_08: ldloc.0  */
            /* IL_09: brfalse.s IL_1F */
            
            if ((!(loc0))){
                
                __pos__ = 0x1F;
                
                continue;
            }
            /* IL_0B: ldarg.0  */
            /* IL_0C: ldflda T value */
            /* IL_17: callvirt String ToString() */
            /* IL_1C: stloc.1  */
            
            loc1 = ((arg0.r().value.vtable || ((arg0.r().constructor.GenericArguments)["asm0.t200001d"])[0].prototype.vtable)["asm0.x600009b"])(CILJS.dereferencePointerAsNeeded({
                        w: function (v)
                        {
                            
                            arg0.r().value = v;
                        },
                        r: function ()
                        {
                            
                            return arg0.r().value;
                        }
                    }));
            /* IL_1D: br.s IL_27 */
            
            __pos__ = 0x27;
            
            continue;
            case 0x1F:
            
            asm0.x60000d6();
            /* IL_1F: ldsfld String Empty */
            /* IL_24: stloc.1  */
            
            loc1 = t0.Empty;
            case 0x27:
            /* IL_27: ldloc.1  */
            /* IL_28: ret  */
            
            return loc1;
        }
    }
};;/* static System.Nullable`1[T] Nullable`1.op_Implicit(T)*/

asm.x600008d_init = function (T)
{
    
    return function (arg0)
    {
        
        (asm0["CilJs.Runtime.UnboundGenericParameter"]().init)();
        
        (asm0["System.Nullable`1"](T).init)();
    };
};;

asm.x600008d = function (T)
{
    
    return function (arg0)
    {
        
        (asm.x600008d_init(T))(arg0);
        
        return (asm.x600008d_(T))(arg0);
    };
};;
asm.x600008d_ = function (T)
{
    
    return function op_Implicit(arg0)
    {
        var t0;
        var t1;
        var t2;
        var loc0;
        
        t0 = asm0["CilJs.Runtime.UnboundGenericParameter"]();
        
        t1 = T;
        
        t2 = asm0["System.Nullable`1"](t1);
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: newobj Void .ctor(T) */
        /* IL_07: stloc.0  */
        
        loc0 = CILJS.cloneValue(CILJS.newobj(t2,asm0.x6000084,[null, CILJS.cloneValue(arg0)]));
        /* IL_0A: ldloc.0  */
        /* IL_0B: ret  */
        
        return loc0;
    };
};/* static T Nullable`1.op_Explicit(Nullable`1)*/

asm.x600008e = function (T)
{
    
    return function op_Explicit(arg0)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldarga.s 0 */
        /* IL_03: call T get_Value() */
        /* IL_08: stloc.0  */
        
        loc0 = CILJS.cloneValue(asm0.x6000086({
                    w: function (v)
                    {
                        
                        arg0 = v;
                    },
                    r: function ()
                    {
                        
                        return arg0;
                    }
                }));
        /* IL_0B: ldloc.0  */
        /* IL_0C: ret  */
        
        return loc0;
    };
};;/* static System.Object Nullable`1.Box(Nullable`1)*/

asm.x600008f = function (T)
{
    
    return function Box(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        
        t0 = T;
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Boolean has_value */
                /* IL_07: ldc.i4.0  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.0  */
                
                loc0 = ((arg0.has_value === 0) ? 1 : 0);
                /* IL_0B: ldloc.0  */
                /* IL_0C: brfalse.s IL_12 */
                
                if ((!(loc0))){
                    
                    __pos__ = 0x12;
                    
                    continue;
                }
                /* IL_0E: ldnull  */
                /* IL_0F: stloc.1  */
                
                loc1 = null;
                /* IL_10: br.s IL_20 */
                
                __pos__ = 0x20;
                
                continue;
                case 0x12:
                /* IL_12: ldarg.0  */
                /* IL_13: ldfld T value */
                /* IL_18: box T */
                /* IL_1D: stloc.1  */
                
                loc1 = CILJS.box(arg0.value,t0);
                case 0x20:
                /* IL_20: ldloc.1  */
                /* IL_21: ret  */
                
                return loc1;
            }
        }
    };
};;/* static System.Nullable`1[T] Nullable`1.Unbox(Object)*/

asm.x6000090_init = function (T)
{
    
    return function (arg0)
    {
        
        (asm0["CilJs.Runtime.UnboundGenericParameter"]().init)();
        
        (asm0["System.Nullable`1"](T).init)();
    };
};;

asm.x6000090 = function (T)
{
    
    return function (arg0)
    {
        
        (asm.x6000090_init(T))(arg0);
        
        return (asm.x6000090_(T))(arg0);
    };
};;
asm.x6000090_ = function (T)
{
    
    return function Unbox(arg0)
    {
        var t0;
        var t1;
        var t2;
        var loc1;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc2;
        
        t0 = asm0["CilJs.Runtime.UnboundGenericParameter"]();
        
        t1 = T;
        
        t2 = asm0["System.Nullable`1"](t1);
        
        loc1 = new (asm0["System.Nullable`1"](T))();
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldarg.0  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.0  */
                
                loc0 = ((arg0 === null) ? 1 : 0);
                /* IL_06: ldloc.0  */
                /* IL_07: brfalse.s IL_15 */
                
                if ((!(loc0))){
                    
                    __pos__ = 0x15;
                    
                    continue;
                }
                /* IL_09: ldloca.s 1 */
                /* IL_0C: initobj System.Nullable`1[T] */
                
                loc1 = new t2();
                /* IL_11: ldloc.1  */
                /* IL_12: stloc.2  */
                
                loc2 = CILJS.cloneValue(loc1);
                /* IL_13: br.s IL_23 */
                
                __pos__ = 0x23;
                
                continue;
                case 0x15:
                /* IL_15: ldarg.0  */
                /* IL_16: unbox.any T */
                /* IL_1B: newobj Void .ctor(T) */
                /* IL_20: stloc.2  */
                
                loc2 = CILJS.cloneValue(CILJS.newobj(t2,asm0.x6000084,[null, CILJS.cloneValue(CILJS.unboxAny(arg0,t1))]));
                case 0x23:
                /* IL_23: ldloc.2  */
                /* IL_24: ret  */
                
                return loc2;
            }
        }
    };
};/*  Nullable`1..ctor(T)*/

asm.x6000084 = function _ctor(arg0, arg1)
{
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldc.i4.1  */
    /* IL_03: stfld Boolean has_value */
    
    arg0.r().has_value = 1;
    /* IL_08: ldarg.0  */
    /* IL_09: ldarg.1  */
    /* IL_0A: stfld T value */
    
    arg0.r().value = arg1;
    /* IL_0F: ret  */
    
    return ;
};;/*  InvalidCastException..ctor()*/

asm.x6000091 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldstr Cannot cast from source type to destination type. */
    /* IL_06: call Void .ctor(System.String) */
    
    asm0.x6000076(arg0,CILJS.newString("Cannot cast from source type to destination type."));
    /* IL_0B: nop  */
    /* IL_0C: nop  */
    /* IL_0D: ret  */
    
    return ;
};;/* System.Void EventHandler.Invoke(Object,EventArgs)*/

asm.x6000093 = CILJS.delegateInvoke;;/* System.IAsyncResult EventHandler.BeginInvoke(Object,EventArgs,AsyncCallback,Object)*/

asm.x6000094 = CILJS.delegateBeginInvoke;;/* System.Void EventHandler.EndInvoke(IAsyncResult)*/

asm.x6000095 = CILJS.delegateEndInvoke;;/*  EventHandler..ctor(Object,IntPtr)*/

asm.x6000092 = CILJS.delegateCtor;;/* static System.Boolean Object.ReferenceEqualsImpl(Object,Object)*/

asm.x6000097 = function (a, b) { return Number(a === b); };;/* static System.Int32 Object.GetHashCode(Object)*/

asm.x6000098 = function (o) { return o.hash || (o.hash = CILJS.next_hash++); };;/* System.Object Object.toString()*/

asm.x600009a = function () { return asm0.ToJavaScriptString(this); };;/* System.String Object.ToString()*/

asm.x600009b = function ToString(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldstr System.Object */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newString("System.Object");
    /* IL_09: ldloc.0  */
    /* IL_0A: ret  */
    
    return loc0;
};;/* static System.Object Object.ToJavaScriptString(Object)*/

asm.x600009c = function ToJavaScriptString(arg0)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldnull  */
            /* IL_04: ceq  */
            /* IL_05: stloc.0  */
            
            loc0 = ((arg0 === null) ? 1 : 0);
            /* IL_06: ldloc.0  */
            /* IL_07: brfalse.s IL_16 */
            
            if ((!(loc0))){
                
                __pos__ = 0x16;
                
                continue;
            }
            /* IL_09: ldstr  */
            /* IL_0E: ldfld String jsstr */
            /* IL_13: stloc.1  */
            
            loc1 = CILJS.newString("").jsstr;
            /* IL_14: br.s IL_33 */
            
            __pos__ = 0x33;
            
            continue;
            case 0x16:
            /* IL_16: nop  */
            /* IL_17: ldarg.0  */
            /* IL_18: callvirt String ToString() */
            /* IL_1D: stloc.2  */
            
            loc2 = (arg0.vtable)["asm0.x600009b"](CILJS.convertBoxToPointerAsNeeded(arg0));
            /* IL_1E: ldloc.2  */
            /* IL_1F: ldnull  */
            /* IL_21: ceq  */
            /* IL_22: stloc.3  */
            
            loc3 = ((loc2 === null) ? 1 : 0);
            /* IL_23: ldloc.3  */
            /* IL_24: brfalse.s IL_2A */
            
            if ((!(loc3))){
                
                __pos__ = 0x2A;
                
                continue;
            }
            /* IL_26: ldnull  */
            /* IL_27: stloc.1  */
            
            loc1 = null;
            /* IL_28: br.s IL_33 */
            
            __pos__ = 0x33;
            
            continue;
            case 0x2A:
            /* IL_2A: ldloc.2  */
            /* IL_2B: ldfld String jsstr */
            /* IL_30: stloc.1  */
            
            loc1 = loc2.jsstr;
            case 0x33:
            /* IL_33: ldloc.1  */
            /* IL_34: ret  */
            
            return loc1;
        }
    }
};;
asm.ToJavaScriptString = asm.x600009c;/* static System.Boolean Object.ReferenceEquals(Object,Object)*/

asm.x600009d = function ReferenceEquals(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: call Boolean ReferenceEqualsImpl(System.Object, System.Object) */
    /* IL_08: stloc.0  */
    
    loc0 = asm0.x6000097(arg0,arg1);
    /* IL_0B: ldloc.0  */
    /* IL_0C: ret  */
    
    return loc0;
};;/* System.Boolean Object.Equals(Object)*/

asm.x600009e = function Equals(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_04: ceq  */
    /* IL_05: stloc.0  */
    
    loc0 = ((arg0 === arg1) ? 1 : 0);
    /* IL_08: ldloc.0  */
    /* IL_09: ret  */
    
    return loc0;
};;/* System.Int32 Object.GetHashCode()*/

asm.x600009f = function GetHashCode(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call Int32 GetHashCode(System.Object) */
    /* IL_07: stloc.0  */
    
    loc0 = asm0.x6000098(arg0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* System.Type Object.GetType()*/

asm.x60000a0 = function GetType(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call Type GetType(System.Object) */
    /* IL_07: stloc.0  */
    
    loc0 = asm0.x6000192(arg0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* static System.Boolean Object.Equals(Object,Object)*/

asm.x60000a1 = function Equals(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldarg.1  */
            /* IL_04: ceq  */
            /* IL_05: stloc.0  */
            
            loc0 = ((arg0 === arg1) ? 1 : 0);
            /* IL_06: ldloc.0  */
            /* IL_07: brfalse.s IL_0D */
            
            if ((!(loc0))){
                
                __pos__ = 0xD;
                
                continue;
            }
            /* IL_09: ldc.i4.1  */
            /* IL_0A: stloc.1  */
            
            loc1 = 1;
            /* IL_0B: br.s IL_23 */
            
            __pos__ = 0x23;
            
            continue;
            case 0xD:
            /* IL_0D: ldarg.0  */
            /* IL_0E: ldnull  */
            /* IL_10: ceq  */
            /* IL_11: stloc.2  */
            
            loc2 = ((arg0 === null) ? 1 : 0);
            /* IL_12: ldloc.2  */
            /* IL_13: brfalse.s IL_19 */
            
            if ((!(loc2))){
                
                __pos__ = 0x19;
                
                continue;
            }
            /* IL_15: ldc.i4.0  */
            /* IL_16: stloc.1  */
            
            loc1 = 0;
            /* IL_17: br.s IL_23 */
            
            __pos__ = 0x23;
            
            continue;
            case 0x19:
            /* IL_19: ldarg.0  */
            /* IL_1A: ldarg.1  */
            /* IL_1B: callvirt Boolean Equals(System.Object) */
            /* IL_20: stloc.1  */
            
            loc1 = (arg0.vtable)["asm0.x600009e"](CILJS.convertBoxToPointerAsNeeded(arg0),arg1);
            case 0x23:
            /* IL_23: ldloc.1  */
            /* IL_24: ret  */
            
            return loc1;
        }
    }
};;/*  Object..ctor()*/

asm.x6000096 = function _ctor(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/* static System.Int64 Math.Max(Int64,Int64)*/

asm.x60000a6 = function Max(arg0, arg1)
{
    var st_02;
    var in_block_0;
    var __pos__;
    var loc0;
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldarg.1  */
            /* IL_03: bgt.s IL_08 */
            
            if (asm0.Int64_GreaterThan(arg0,arg1)){
                
                __pos__ = 0x8;
                
                continue;
            }
            /* IL_05: ldarg.1  */
            
            st_02 = arg1;
            /* IL_06: br.s IL_09 */
            
            __pos__ = 0x9;
            
            continue;
            case 0x8:
            /* IL_08: ldarg.0  */
            
            st_02 = arg0;
            case 0x9:
            /* IL_09: stloc.0  */
            
            loc0 = st_02;
            /* IL_0C: ldloc.0  */
            /* IL_0D: ret  */
            
            return loc0;
        }
    }
};;/* static System.Int64 Math.Min(Int64,Int64)*/

asm.x60000aa = function Min(arg0, arg1)
{
    var st_02;
    var in_block_0;
    var __pos__;
    var loc0;
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldarg.1  */
            /* IL_03: blt.s IL_08 */
            
            if (asm0.Int64_LessThan(arg0,arg1)){
                
                __pos__ = 0x8;
                
                continue;
            }
            /* IL_05: ldarg.1  */
            
            st_02 = arg1;
            /* IL_06: br.s IL_09 */
            
            __pos__ = 0x9;
            
            continue;
            case 0x8:
            /* IL_08: ldarg.0  */
            
            st_02 = arg0;
            case 0x9:
            /* IL_09: stloc.0  */
            
            loc0 = st_02;
            /* IL_0C: ldloc.0  */
            /* IL_0D: ret  */
            
            return loc0;
        }
    }
};;/*  Math..ctor()*/

asm.x60000ad = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Type Enum.GetUnderlyingType(Type)*/

asm.x60000ae_init = function (arg0)
{
    
    (asm0["System.InvalidOperationException"]().init)();
    
    asm.x60000ae = asm.x60000ae_;
};;

asm.x60000ae = function (arg0)
{
    
    asm.x60000ae_init(arg0);
    
    return asm.x60000ae_(arg0);
};;
asm.x60000ae_ = function GetUnderlyingType(arg0)
{
    var t0;
    var t1;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.InvalidOperationException"]();
    
    t1 = asm0["System.Int32"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: callvirt Boolean get_IsEnum() */
            /* IL_07: ldc.i4.0  */
            /* IL_09: ceq  */
            /* IL_0A: stloc.0  */
            
            loc0 = ((asm0.x6000047(arg0) === 0) ? 1 : 0);
            /* IL_0B: ldloc.0  */
            /* IL_0C: brfalse.s IL_14 */
            
            if ((!(loc0))){
                
                __pos__ = 0x14;
                
                continue;
            }
            /* IL_0E: newobj Void .ctor() */
            /* IL_13: throw  */
            
            throw CILJS.newobj(t0,asm0.x6000001,[null]);
            case 0x14:
            /* IL_14: ldtoken System.Int32 */
            /* IL_19: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
            /* IL_1E: stloc.1  */
            
            loc1 = asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t1));
            /* IL_21: ldloc.1  */
            /* IL_22: ret  */
            
            return loc1;
        }
    }
};/*  Enum..ctor()*/

asm.x60000af = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x600011b(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Delegate MulticastDelegate.CreateMulticast(Delegate[])*/

asm.x60000b0 = 
            function (list) { 

                var f = function () {
                    var result;
                    var arr = list.jsarr;
                    for (var i=0; i<arr.length; i++) {
                        var delegate = arr[i];
                        var m = delegate._methodPtr;
                        var t = delegate._target;
                        var args = [];
                        if (t != null)
                            args.push(t);
                        for (var j=1; j<arguments.length; j++)
                            args.push(arguments[j]);
                        result = m.apply(null, args)
                    }
                    return result;
                };
                
                var md = new list.jsarr[0].constructor();
                md._methodPtr = f;
                md._invocationList = list;
                return md;
            }
            ;;/* System.Delegate MulticastDelegate.CombineImpl(Delegate)*/

asm.x60000b1 = function CombineImpl(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc1;
    var loc0;
    var loc2;
    var in_block_1;
    var loc3;
    var loc4;
    
    t0 = asm0["System.Delegate"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld Delegate[] _invocationList */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: stloc.1  */
            
            loc1 = ((arg0._invocationList !== null) ? 1 : 0);
            /* IL_0B: ldloc.1  */
            /* IL_0C: brfalse.s IL_4C */
            
            if ((!(loc1))){
                
                __pos__ = 0x4C;
                
                continue;
            }
            /* IL_0E: nop  */
            /* IL_0F: ldarg.0  */
            /* IL_10: ldfld Delegate[] _invocationList */
            /* IL_15: ldlen  */
            /* IL_16: conv.i4  */
            /* IL_17: ldc.i4.1  */
            /* IL_18: add  */
            /* IL_19: newarr System.Delegate */
            /* IL_1E: stloc.0  */
            
            loc0 = CILJS.newArray(t0,((arg0._invocationList.jsarr.length | 0) + 1) | 0);
            /* IL_1F: ldc.i4.0  */
            /* IL_20: stloc.2  */
            
            loc2 = 0;
            /* IL_21: br.s IL_32 */
            
            __pos__ = 0x32;
            
            continue;
            case 0x23:
            case 0x32:
            
            in_block_1 = true;
            
            if (__pos__ < 0x23){
                
                __pos__ = 0x23;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x23:
                    /* IL_23: ldloc.0  */
                    /* IL_24: ldloc.2  */
                    /* IL_25: ldarg.0  */
                    /* IL_26: ldfld Delegate[] _invocationList */
                    /* IL_2B: ldloc.2  */
                    /* IL_2C: ldelem.ref  */
                    /* IL_2D: stelem.ref  */
                    
                    CILJS.stelemRef(loc0,loc2,CILJS.ldelemRef(arg0._invocationList,loc2));
                    /* IL_2E: ldloc.2  */
                    /* IL_2F: ldc.i4.1  */
                    /* IL_30: add  */
                    /* IL_31: stloc.2  */
                    
                    loc2 = (loc2 + 1) | 0;
                    case 0x32:
                    /* IL_32: ldloc.2  */
                    /* IL_33: ldarg.0  */
                    /* IL_34: ldfld Delegate[] _invocationList */
                    /* IL_39: ldlen  */
                    /* IL_3A: conv.i4  */
                    /* IL_3C: clt  */
                    /* IL_3D: stloc.3  */
                    
                    loc3 = ((loc2 < (arg0._invocationList.jsarr.length | 0)) ? 1 : 0);
                    /* IL_3E: ldloc.3  */
                    /* IL_3F: brtrue.s IL_23 */
                    
                    if (loc3){
                        
                        __pos__ = 0x23;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x32) || (__pos__ < 0x23)){
                
                continue;
            }
            /* IL_41: ldloc.0  */
            /* IL_42: ldloc.0  */
            /* IL_43: ldlen  */
            /* IL_44: conv.i4  */
            /* IL_45: ldc.i4.1  */
            /* IL_46: sub  */
            /* IL_47: ldarg.1  */
            /* IL_48: stelem.ref  */
            
            CILJS.stelemRef(loc0,((loc0.jsarr.length | 0) - 1) | 0,arg1);
            /* IL_49: nop  */
            /* IL_4A: br.s IL_5D */
            
            __pos__ = 0x5D;
            
            continue;
            case 0x4C:
            /* IL_4C: nop  */
            /* IL_4D: ldc.i4.2  */
            /* IL_4E: newarr System.Delegate */
            /* IL_53: stloc.0  */
            
            loc0 = CILJS.newArray(t0,2);
            /* IL_54: ldloc.0  */
            /* IL_55: ldc.i4.0  */
            /* IL_56: ldarg.0  */
            /* IL_57: stelem.ref  */
            
            CILJS.stelemRef(loc0,0,arg0);
            /* IL_58: ldloc.0  */
            /* IL_59: ldc.i4.1  */
            /* IL_5A: ldarg.1  */
            /* IL_5B: stelem.ref  */
            
            CILJS.stelemRef(loc0,1,arg1);
            /* IL_5C: nop  */
            case 0x5D:
            /* IL_5D: ldloc.0  */
            /* IL_5E: call Delegate CreateMulticast(System.Delegate[]) */
            /* IL_63: stloc.s 4 */
            
            loc4 = asm0.x60000b0(loc0);
            /* IL_67: ldloc.s 4 */
            /* IL_69: ret  */
            
            return loc4;
        }
    }
};;/* System.Delegate MulticastDelegate.RemoveImpl(Delegate)*/

asm.x60000b2 = function RemoveImpl(arg0, arg1)
{
    var t0;
    var st_4B;
    var st_4C;
    var st_4D;
    var st_4E;
    var st_4F;
    var st_50;
    var st_51;
    var st_52;
    var st_53;
    var st_54;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    var loc5;
    var in_block_1;
    var loc6;
    var loc7;
    var loc8;
    var loc9;
    var loc10;
    var loc11;
    var loc12;
    var loc4;
    var loc13;
    var loc14;
    var loc15;
    var loc16;
    
    t0 = asm0["System.Delegate"]();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld Delegate[] _invocationList */
            /* IL_07: ldnull  */
            /* IL_09: ceq  */
            /* IL_0A: stloc.0  */
            
            loc0 = ((arg0._invocationList === null) ? 1 : 0);
            /* IL_0B: ldloc.0  */
            /* IL_0C: brfalse.s IL_28 */
            
            if ((!(loc0))){
                
                __pos__ = 0x28;
                
                continue;
            }
            /* IL_0E: nop  */
            /* IL_0F: ldarg.1  */
            /* IL_10: ldarg.0  */
            /* IL_11: call Boolean op_Equality(System.Delegate, System.Delegate) */
            /* IL_16: stloc.1  */
            
            loc1 = asm0.x600003e(arg1,arg0);
            /* IL_17: ldloc.1  */
            /* IL_18: brfalse.s IL_21 */
            
            if ((!(loc1))){
                
                __pos__ = 0x21;
                
                continue;
            }
            /* IL_1A: ldnull  */
            /* IL_1B: stloc.2  */
            
            loc2 = null;
            /* IL_1C: br IL_114 */
            
            __pos__ = 0x114;
            
            continue;
            case 0x21:
            /* IL_21: ldarg.0  */
            /* IL_22: stloc.2  */
            
            loc2 = arg0;
            /* IL_23: br IL_114 */
            
            __pos__ = 0x114;
            
            continue;
            case 0x28:
            /* IL_28: nop  */
            /* IL_29: ldc.i4.0  */
            /* IL_2A: stloc.3  */
            
            loc3 = 0;
            /* IL_2B: ldc.i4.0  */
            /* IL_2C: stloc.s 5 */
            
            loc5 = 0;
            /* IL_2E: br.s IL_4F */
            
            __pos__ = 0x4F;
            
            continue;
            case 0x30:
            case 0x49:
            case 0x4F:
            
            in_block_1 = true;
            
            if (__pos__ < 0x30){
                
                __pos__ = 0x30;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x30:
                    /* IL_30: ldarg.0  */
                    /* IL_31: ldfld Delegate[] _invocationList */
                    /* IL_36: ldloc.s 5 */
                    /* IL_38: ldelem.ref  */
                    /* IL_39: ldarg.1  */
                    /* IL_3A: call Boolean op_Inequality(System.Delegate, System.Delegate) */
                    /* IL_3F: stloc.s 6 */
                    
                    loc6 = asm0.x600003f(CILJS.ldelemRef(arg0._invocationList,loc5),arg1);
                    /* IL_41: ldloc.s 6 */
                    /* IL_43: brfalse.s IL_49 */
                    
                    if ((!(loc6))){
                        
                        __pos__ = 0x49;
                        
                        continue;
                    }
                    /* IL_45: ldloc.3  */
                    /* IL_46: ldc.i4.1  */
                    /* IL_47: add  */
                    /* IL_48: stloc.3  */
                    
                    loc3 = (loc3 + 1) | 0;
                    case 0x49:
                    /* IL_49: ldloc.s 5 */
                    /* IL_4B: ldc.i4.1  */
                    /* IL_4C: add  */
                    /* IL_4D: stloc.s 5 */
                    
                    loc5 = (loc5 + 1) | 0;
                    case 0x4F:
                    /* IL_4F: ldloc.s 5 */
                    /* IL_51: ldarg.0  */
                    /* IL_52: ldfld Delegate[] _invocationList */
                    /* IL_57: ldlen  */
                    /* IL_58: conv.i4  */
                    /* IL_5A: clt  */
                    /* IL_5B: stloc.s 7 */
                    
                    loc7 = ((loc5 < (arg0._invocationList.jsarr.length | 0)) ? 1 : 0);
                    /* IL_5D: ldloc.s 7 */
                    /* IL_5F: brtrue.s IL_30 */
                    
                    if (loc7){
                        
                        __pos__ = 0x30;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x4F) || (__pos__ < 0x30)){
                
                continue;
            }
            /* IL_61: ldloc.3  */
            /* IL_62: ldc.i4.0  */
            /* IL_64: ceq  */
            /* IL_65: stloc.s 8 */
            
            loc8 = ((loc3 === 0) ? 1 : 0);
            /* IL_67: ldloc.s 8 */
            /* IL_69: brfalse.s IL_72 */
            
            if ((!(loc8))){
                
                __pos__ = 0x72;
                
                continue;
            }
            /* IL_6B: ldnull  */
            /* IL_6C: stloc.2  */
            
            loc2 = null;
            /* IL_6D: br IL_114 */
            
            __pos__ = 0x114;
            
            continue;
            case 0x72:
            /* IL_72: ldloc.3  */
            /* IL_73: ldc.i4.1  */
            /* IL_75: ceq  */
            /* IL_76: stloc.s 9 */
            
            loc9 = ((loc3 === 1) ? 1 : 0);
            /* IL_78: ldloc.s 9 */
            /* IL_7A: brfalse.s IL_BA */
            
            if ((!(loc9))){
                
                __pos__ = 0xBA;
                
                continue;
            }
            /* IL_7C: ldc.i4.0  */
            /* IL_7D: stloc.s 10 */
            
            loc10 = 0;
            /* IL_7F: br.s IL_A8 */
            
            __pos__ = 0xA8;
            
            continue;
            case 0x81:
            case 0xA2:
            case 0xA8:
            
            in_block_1 = true;
            
            if (__pos__ < 0x81){
                
                __pos__ = 0x81;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x81:
                    /* IL_81: ldarg.0  */
                    /* IL_82: ldfld Delegate[] _invocationList */
                    /* IL_87: ldloc.s 10 */
                    /* IL_89: ldelem.ref  */
                    /* IL_8A: ldarg.1  */
                    /* IL_8B: call Boolean op_Inequality(System.Delegate, System.Delegate) */
                    /* IL_90: stloc.s 11 */
                    
                    loc11 = asm0.x600003f(CILJS.ldelemRef(arg0._invocationList,loc10),arg1);
                    /* IL_92: ldloc.s 11 */
                    /* IL_94: brfalse.s IL_A2 */
                    
                    if ((!(loc11))){
                        
                        __pos__ = 0xA2;
                        
                        continue;
                    }
                    /* IL_96: ldarg.0  */
                    /* IL_97: ldfld Delegate[] _invocationList */
                    /* IL_9C: ldloc.s 10 */
                    /* IL_9E: ldelem.ref  */
                    /* IL_9F: stloc.2  */
                    
                    loc2 = CILJS.ldelemRef(arg0._invocationList,loc10);
                    /* IL_A0: br.s IL_114 */
                    
                    __pos__ = 0x114;
                    
                    continue;
                    case 0xA2:
                    /* IL_A2: ldloc.s 10 */
                    /* IL_A4: ldc.i4.1  */
                    /* IL_A5: add  */
                    /* IL_A6: stloc.s 10 */
                    
                    loc10 = (loc10 + 1) | 0;
                    case 0xA8:
                    /* IL_A8: ldloc.s 10 */
                    /* IL_AA: ldarg.0  */
                    /* IL_AB: ldfld Delegate[] _invocationList */
                    /* IL_B0: ldlen  */
                    /* IL_B1: conv.i4  */
                    /* IL_B3: clt  */
                    /* IL_B4: stloc.s 12 */
                    
                    loc12 = ((loc10 < (arg0._invocationList.jsarr.length | 0)) ? 1 : 0);
                    /* IL_B6: ldloc.s 12 */
                    /* IL_B8: brtrue.s IL_81 */
                    
                    if (loc12){
                        
                        __pos__ = 0x81;
                        
                        continue;
                    }
                }
                
                break;
            }
            case 0xBA:
            /* IL_BA: ldloc.3  */
            /* IL_BB: newarr System.Delegate */
            /* IL_C0: stloc.s 4 */
            
            loc4 = CILJS.newArray(t0,loc3);
            /* IL_C2: ldc.i4.0  */
            /* IL_C3: stloc.s 13 */
            
            loc13 = 0;
            /* IL_C5: ldc.i4.0  */
            /* IL_C6: stloc.s 14 */
            
            loc14 = 0;
            /* IL_C8: br.s IL_F8 */
            
            __pos__ = 0xF8;
            
            continue;
            case 0xCA:
            case 0xF2:
            case 0xF8:
            
            in_block_1 = true;
            
            if (__pos__ < 0xCA){
                
                __pos__ = 0xCA;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0xCA:
                    /* IL_CA: ldarg.0  */
                    /* IL_CB: ldfld Delegate[] _invocationList */
                    /* IL_D0: ldloc.s 13 */
                    /* IL_D2: ldelem.ref  */
                    /* IL_D3: ldarg.1  */
                    /* IL_D4: call Boolean op_Inequality(System.Delegate, System.Delegate) */
                    /* IL_D9: stloc.s 15 */
                    
                    loc15 = asm0.x600003f(CILJS.ldelemRef(arg0._invocationList,loc13),arg1);
                    /* IL_DB: ldloc.s 15 */
                    /* IL_DD: brfalse.s IL_F2 */
                    
                    if ((!(loc15))){
                        
                        __pos__ = 0xF2;
                        
                        continue;
                    }
                    /* IL_DF: ldloc.s 4 */
                    
                    st_52 = loc4;
                    /* IL_E1: ldloc.s 14 */
                    
                    st_4B = loc14;
                    /* IL_E3: dup  */
                    
                    st_53 = st_4C = st_4B;
                    /* IL_E4: ldc.i4.1  */
                    
                    st_4D = 1;
                    /* IL_E5: add  */
                    
                    st_4E = (st_4C + st_4D) | 0;
                    /* IL_E6: stloc.s 14 */
                    
                    loc14 = st_4E;
                    /* IL_E8: ldarg.0  */
                    
                    st_4F = arg0;
                    /* IL_E9: ldfld Delegate[] _invocationList */
                    
                    st_50 = st_4F._invocationList;
                    /* IL_EE: ldloc.s 13 */
                    
                    st_51 = loc13;
                    /* IL_F0: ldelem.ref  */
                    
                    st_54 = CILJS.ldelemRef(st_50,st_51);
                    /* IL_F1: stelem.ref  */
                    
                    CILJS.stelemRef(st_52,st_53,st_54);
                    case 0xF2:
                    /* IL_F2: ldloc.s 13 */
                    /* IL_F4: ldc.i4.1  */
                    /* IL_F5: add  */
                    /* IL_F6: stloc.s 13 */
                    
                    loc13 = (loc13 + 1) | 0;
                    case 0xF8:
                    /* IL_F8: ldloc.s 13 */
                    /* IL_FA: ldarg.0  */
                    /* IL_FB: ldfld Delegate[] _invocationList */
                    /* IL_100: ldlen  */
                    /* IL_101: conv.i4  */
                    /* IL_103: clt  */
                    /* IL_104: stloc.s 16 */
                    
                    loc16 = ((loc13 < (arg0._invocationList.jsarr.length | 0)) ? 1 : 0);
                    /* IL_106: ldloc.s 16 */
                    /* IL_108: brtrue.s IL_CA */
                    
                    if (loc16){
                        
                        __pos__ = 0xCA;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0xF8) || (__pos__ < 0xCA)){
                
                continue;
            }
            /* IL_10A: ldloc.s 4 */
            /* IL_10C: call Delegate CreateMulticast(System.Delegate[]) */
            /* IL_111: stloc.2  */
            
            loc2 = asm0.x60000b0(loc4);
            case 0x114:
            /* IL_114: ldloc.2  */
            /* IL_115: ret  */
            
            return loc2;
        }
    }
};;/*  MulticastDelegate..ctor()*/

asm.x60000b3 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000043(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Int32 String.GetLengthImpl(Object)*/

asm.x60000b4 = function(o) { return o.jsstr.length; };;/* static System.Boolean String.EqualsImpl(String,String)*/

asm.x60000b5 = function(a, b) { return a.jsstr === b.jsstr ? 1 : 0; };;/* static System.String String.ConcatImpl(String[])*/

asm.x60000b6 = function (args) { return CILJS.newString(String.prototype.concat.apply('', args.jsarr)); };;/* static System.Char String.GetChar(String,Int32)*/

asm.x60000b7 = function (s, i) { return s.jsstr.charCodeAt(i); };;/* static System.String String.ReplaceImpl(String,String,String)*/

asm.x60000b8 = function replaceAll(s, find, replace) {
                        function escapeRegExp(s2) {
                            return s2.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
                        }
                      return CILJS.newString(s.jsstr.replace(new RegExp(escapeRegExp(find.jsstr), 'g'), replace.jsstr));
                    };;/* System.Char String.get_Chars(Int32)*/

asm.x60000b9 = function get_Chars(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: call Char GetChar(System.String, System.Int32) */
    /* IL_08: stloc.0  */
    
    loc0 = asm0.x60000b7(arg0,arg1);
    /* IL_0B: ldloc.0  */
    /* IL_0C: ret  */
    
    return loc0;
};;/* static System.String String.Concat(String,String)*/

asm.x60000bb = function Concat(arg0, arg1)
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
    var loc0;
    
    t0 = asm0["System.String"]();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldc.i4.2  */
    
    st_00 = 2;
    /* IL_02: newarr System.String */
    
    st_01 = CILJS.newArray(t0,st_00);
    /* IL_07: dup  */
    
    st_05 = st_02 = st_01;
    /* IL_08: ldc.i4.0  */
    
    st_03 = 0;
    /* IL_09: ldarg.0  */
    
    st_04 = arg0;
    /* IL_0A: stelem.ref  */
    
    CILJS.stelemRef(st_02,st_03,st_04);
    /* IL_0B: dup  */
    
    st_09 = st_06 = st_05;
    /* IL_0C: ldc.i4.1  */
    
    st_07 = 1;
    /* IL_0D: ldarg.1  */
    
    st_08 = arg1;
    /* IL_0E: stelem.ref  */
    
    CILJS.stelemRef(st_06,st_07,st_08);
    /* IL_0F: call String ConcatImpl(System.String[]) */
    
    st_0A = asm0.x60000b6(st_09);
    /* IL_14: stloc.0  */
    
    loc0 = st_0A;
    /* IL_17: ldloc.0  */
    /* IL_18: ret  */
    
    return loc0;
};;/* static System.String String.Concat(Object,Object,Object)*/

asm.x60000bc = function Concat(arg0, arg1, arg2)
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
    var st_0E;
    var st_0F;
    var st_10;
    var st_11;
    var st_12;
    var st_13;
    var st_14;
    var st_15;
    var st_16;
    var st_17;
    var st_18;
    var st_19;
    var st_1A;
    var st_1B;
    var st_1C;
    var st_1D;
    var in_block_0;
    var __pos__;
    var loc0;
    
    t0 = asm0["System.String"]();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            
            st_00 = arg0;
            /* IL_02: dup  */
            
            st_03 = st_02 = st_01 = st_00;
            /* IL_03: brtrue.s IL_0B */
            
            if (st_01){
                
                __pos__ = 0xB;
                
                continue;
            }
            /* IL_05: pop  */
            
            asm0.x60000d6();
            /* IL_06: ldsfld String Empty */
            
            st_03 = t0.Empty;
            case 0xB:
            /* IL_0B: starg.s 0 */
            
            arg0 = st_03;
            /* IL_0D: ldarg.1  */
            
            st_04 = arg1;
            /* IL_0E: dup  */
            
            st_07 = st_06 = st_05 = st_04;
            /* IL_0F: brtrue.s IL_17 */
            
            if (st_05){
                
                __pos__ = 0x17;
                
                continue;
            }
            /* IL_11: pop  */
            
            asm0.x60000d6();
            /* IL_12: ldsfld String Empty */
            
            st_07 = t0.Empty;
            case 0x17:
            /* IL_17: starg.s 1 */
            
            arg1 = st_07;
            /* IL_19: ldarg.2  */
            
            st_08 = arg2;
            /* IL_1A: dup  */
            
            st_0B = st_0A = st_09 = st_08;
            /* IL_1B: brtrue.s IL_23 */
            
            if (st_09){
                
                __pos__ = 0x23;
                
                continue;
            }
            /* IL_1D: pop  */
            
            asm0.x60000d6();
            /* IL_1E: ldsfld String Empty */
            
            st_0B = t0.Empty;
            case 0x23:
            /* IL_23: starg.s 2 */
            
            arg2 = st_0B;
            /* IL_25: ldc.i4.3  */
            
            st_0C = 3;
            /* IL_26: newarr System.String */
            
            st_0D = CILJS.newArray(t0,st_0C);
            /* IL_2B: dup  */
            
            st_12 = st_0F = st_0D;
            /* IL_2C: ldc.i4.0  */
            
            st_10 = 0;
            /* IL_2D: ldarg.0  */
            
            st_0E = arg0;
            /* IL_2E: callvirt String ToString() */
            
            st_11 = (st_0E.vtable)["asm0.x600009b"](CILJS.convertBoxToPointerAsNeeded(st_0E));
            /* IL_33: stelem.ref  */
            
            CILJS.stelemRef(st_0F,st_10,st_11);
            /* IL_34: dup  */
            
            st_17 = st_14 = st_12;
            /* IL_35: ldc.i4.1  */
            
            st_15 = 1;
            /* IL_36: ldarg.1  */
            
            st_13 = arg1;
            /* IL_37: callvirt String ToString() */
            
            st_16 = (st_13.vtable)["asm0.x600009b"](CILJS.convertBoxToPointerAsNeeded(st_13));
            /* IL_3C: stelem.ref  */
            
            CILJS.stelemRef(st_14,st_15,st_16);
            /* IL_3D: dup  */
            
            st_1C = st_19 = st_17;
            /* IL_3E: ldc.i4.2  */
            
            st_1A = 2;
            /* IL_3F: ldarg.2  */
            
            st_18 = arg2;
            /* IL_40: callvirt String ToString() */
            
            st_1B = (st_18.vtable)["asm0.x600009b"](CILJS.convertBoxToPointerAsNeeded(st_18));
            /* IL_45: stelem.ref  */
            
            CILJS.stelemRef(st_19,st_1A,st_1B);
            /* IL_46: call String ConcatImpl(System.String[]) */
            
            st_1D = asm0.x60000b6(st_1C);
            /* IL_4B: stloc.0  */
            
            loc0 = st_1D;
            /* IL_4E: ldloc.0  */
            /* IL_4F: ret  */
            
            return loc0;
        }
    }
};;/* static System.String String.Concat(String,String,String)*/

asm.x60000bd = function Concat(arg0, arg1, arg2)
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
    var st_0E;
    var loc0;
    
    t0 = asm0["System.String"]();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldc.i4.3  */
    
    st_00 = 3;
    /* IL_02: newarr System.String */
    
    st_01 = CILJS.newArray(t0,st_00);
    /* IL_07: dup  */
    
    st_05 = st_02 = st_01;
    /* IL_08: ldc.i4.0  */
    
    st_03 = 0;
    /* IL_09: ldarg.0  */
    
    st_04 = arg0;
    /* IL_0A: stelem.ref  */
    
    CILJS.stelemRef(st_02,st_03,st_04);
    /* IL_0B: dup  */
    
    st_09 = st_06 = st_05;
    /* IL_0C: ldc.i4.1  */
    
    st_07 = 1;
    /* IL_0D: ldarg.1  */
    
    st_08 = arg1;
    /* IL_0E: stelem.ref  */
    
    CILJS.stelemRef(st_06,st_07,st_08);
    /* IL_0F: dup  */
    
    st_0D = st_0A = st_09;
    /* IL_10: ldc.i4.2  */
    
    st_0B = 2;
    /* IL_11: ldarg.2  */
    
    st_0C = arg2;
    /* IL_12: stelem.ref  */
    
    CILJS.stelemRef(st_0A,st_0B,st_0C);
    /* IL_13: call String ConcatImpl(System.String[]) */
    
    st_0E = asm0.x60000b6(st_0D);
    /* IL_18: stloc.0  */
    
    loc0 = st_0E;
    /* IL_1B: ldloc.0  */
    /* IL_1C: ret  */
    
    return loc0;
};;/* static System.String String.Concat(String,String,String,String)*/

asm.x60000be = function Concat(arg0, arg1, arg2, arg3)
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
    var st_0E;
    var st_0F;
    var st_10;
    var st_11;
    var st_12;
    var loc0;
    
    t0 = asm0["System.String"]();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldc.i4.4  */
    
    st_00 = 4;
    /* IL_02: newarr System.String */
    
    st_01 = CILJS.newArray(t0,st_00);
    /* IL_07: dup  */
    
    st_05 = st_02 = st_01;
    /* IL_08: ldc.i4.0  */
    
    st_03 = 0;
    /* IL_09: ldarg.0  */
    
    st_04 = arg0;
    /* IL_0A: stelem.ref  */
    
    CILJS.stelemRef(st_02,st_03,st_04);
    /* IL_0B: dup  */
    
    st_09 = st_06 = st_05;
    /* IL_0C: ldc.i4.1  */
    
    st_07 = 1;
    /* IL_0D: ldarg.1  */
    
    st_08 = arg1;
    /* IL_0E: stelem.ref  */
    
    CILJS.stelemRef(st_06,st_07,st_08);
    /* IL_0F: dup  */
    
    st_0D = st_0A = st_09;
    /* IL_10: ldc.i4.2  */
    
    st_0B = 2;
    /* IL_11: ldarg.2  */
    
    st_0C = arg2;
    /* IL_12: stelem.ref  */
    
    CILJS.stelemRef(st_0A,st_0B,st_0C);
    /* IL_13: dup  */
    
    st_11 = st_0E = st_0D;
    /* IL_14: ldc.i4.3  */
    
    st_0F = 3;
    /* IL_15: ldarg.3  */
    
    st_10 = arg3;
    /* IL_16: stelem.ref  */
    
    CILJS.stelemRef(st_0E,st_0F,st_10);
    /* IL_17: call String ConcatImpl(System.String[]) */
    
    st_12 = asm0.x60000b6(st_11);
    /* IL_1C: stloc.0  */
    
    loc0 = st_12;
    /* IL_1F: ldloc.0  */
    /* IL_20: ret  */
    
    return loc0;
};;/* static System.String String.Concat(Object,Object)*/

asm.x60000bf = function Concat(arg0, arg1)
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
    var st_0E;
    var st_0F;
    var st_10;
    var st_11;
    var st_12;
    var st_13;
    var st_14;
    var in_block_0;
    var __pos__;
    var loc0;
    
    t0 = asm0["System.String"]();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            
            st_00 = arg0;
            /* IL_02: dup  */
            
            st_03 = st_02 = st_01 = st_00;
            /* IL_03: brtrue.s IL_0B */
            
            if (st_01){
                
                __pos__ = 0xB;
                
                continue;
            }
            /* IL_05: pop  */
            
            asm0.x60000d6();
            /* IL_06: ldsfld String Empty */
            
            st_03 = t0.Empty;
            case 0xB:
            /* IL_0B: starg.s 0 */
            
            arg0 = st_03;
            /* IL_0D: ldarg.1  */
            
            st_04 = arg1;
            /* IL_0E: dup  */
            
            st_07 = st_06 = st_05 = st_04;
            /* IL_0F: brtrue.s IL_17 */
            
            if (st_05){
                
                __pos__ = 0x17;
                
                continue;
            }
            /* IL_11: pop  */
            
            asm0.x60000d6();
            /* IL_12: ldsfld String Empty */
            
            st_07 = t0.Empty;
            case 0x17:
            /* IL_17: starg.s 1 */
            
            arg1 = st_07;
            /* IL_19: ldc.i4.2  */
            
            st_08 = 2;
            /* IL_1A: newarr System.String */
            
            st_09 = CILJS.newArray(t0,st_08);
            /* IL_1F: dup  */
            
            st_0E = st_0B = st_09;
            /* IL_20: ldc.i4.0  */
            
            st_0C = 0;
            /* IL_21: ldarg.0  */
            
            st_0A = arg0;
            /* IL_22: callvirt String ToString() */
            
            st_0D = (st_0A.vtable)["asm0.x600009b"](CILJS.convertBoxToPointerAsNeeded(st_0A));
            /* IL_27: stelem.ref  */
            
            CILJS.stelemRef(st_0B,st_0C,st_0D);
            /* IL_28: dup  */
            
            st_13 = st_10 = st_0E;
            /* IL_29: ldc.i4.1  */
            
            st_11 = 1;
            /* IL_2A: ldarg.1  */
            
            st_0F = arg1;
            /* IL_2B: callvirt String ToString() */
            
            st_12 = (st_0F.vtable)["asm0.x600009b"](CILJS.convertBoxToPointerAsNeeded(st_0F));
            /* IL_30: stelem.ref  */
            
            CILJS.stelemRef(st_10,st_11,st_12);
            /* IL_31: call String ConcatImpl(System.String[]) */
            
            st_14 = asm0.x60000b6(st_13);
            /* IL_36: stloc.0  */
            
            loc0 = st_14;
            /* IL_39: ldloc.0  */
            /* IL_3A: ret  */
            
            return loc0;
        }
    }
};;/* static System.String String.Concat(String[])*/

asm.x60000c0 = function Concat(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call String ConcatImpl(System.String[]) */
    /* IL_07: stloc.0  */
    
    loc0 = asm0.x60000b6(arg0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* static System.String String.Concat(Object[])*/

asm.x60000c1 = function Concat(arg0)
{
    var t0;
    var st_05;
    var st_06;
    var st_07;
    var st_08;
    var st_09;
    var st_0A;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var in_block_1;
    var loc2;
    var loc3;
    var loc4;
    
    t0 = asm0["System.String"]();
    
    
    
    
    
    
    
    
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldlen  */
            /* IL_03: conv.i4  */
            /* IL_04: newarr System.String */
            /* IL_09: stloc.0  */
            
            loc0 = CILJS.newArray(t0,arg0.jsarr.length | 0);
            /* IL_0A: ldc.i4.0  */
            /* IL_0B: stloc.1  */
            
            loc1 = 0;
            /* IL_0C: br.s IL_2A */
            
            __pos__ = 0x2A;
            
            continue;
            case 0xE:
            case 0x1B:
            case 0x2A:
            
            in_block_1 = true;
            
            if (__pos__ < 0xE){
                
                __pos__ = 0xE;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0xE:
                    /* IL_0E: nop  */
                    /* IL_0F: ldarg.0  */
                    
                    st_05 = arg0;
                    /* IL_10: ldloc.1  */
                    
                    st_06 = loc1;
                    /* IL_11: ldelem.ref  */
                    
                    st_07 = CILJS.ldelemRef(st_05,st_06);
                    /* IL_12: dup  */
                    
                    st_0A = st_09 = st_08 = st_07;
                    /* IL_13: brtrue.s IL_1B */
                    
                    if (st_08){
                        
                        __pos__ = 0x1B;
                        
                        continue;
                    }
                    /* IL_15: pop  */
                    
                    asm0.x60000d6();
                    /* IL_16: ldsfld String Empty */
                    
                    st_0A = t0.Empty;
                    case 0x1B:
                    /* IL_1B: stloc.2  */
                    
                    loc2 = st_0A;
                    /* IL_1C: ldloc.0  */
                    /* IL_1D: ldloc.1  */
                    /* IL_1E: ldloc.2  */
                    /* IL_1F: callvirt String ToString() */
                    /* IL_24: stelem.ref  */
                    
                    CILJS.stelemRef(loc0,loc1,(loc2.vtable)["asm0.x600009b"](CILJS.convertBoxToPointerAsNeeded(loc2)));
                    /* IL_25: nop  */
                    /* IL_26: ldloc.1  */
                    /* IL_27: ldc.i4.1  */
                    /* IL_28: add  */
                    /* IL_29: stloc.1  */
                    
                    loc1 = (loc1 + 1) | 0;
                    case 0x2A:
                    /* IL_2A: ldloc.1  */
                    /* IL_2B: ldarg.0  */
                    /* IL_2C: ldlen  */
                    /* IL_2D: conv.i4  */
                    /* IL_2F: clt  */
                    /* IL_30: stloc.3  */
                    
                    loc3 = ((loc1 < (arg0.jsarr.length | 0)) ? 1 : 0);
                    /* IL_31: ldloc.3  */
                    /* IL_32: brtrue.s IL_0E */
                    
                    if (loc3){
                        
                        __pos__ = 0xE;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x2A) || (__pos__ < 0xE)){
                
                continue;
            }
            /* IL_34: ldloc.0  */
            /* IL_35: call String Concat(System.String[]) */
            /* IL_3A: stloc.s 4 */
            
            loc4 = asm0.x60000c0(loc0);
            /* IL_3E: ldloc.s 4 */
            /* IL_40: ret  */
            
            return loc4;
        }
    }
};;/* System.String String.Replace(String,String)*/

asm.x60000c2 = function Replace(arg0, arg1, arg2)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: ldarg.2  */
    /* IL_04: call String ReplaceImpl(System.String, System.String, System.String) */
    /* IL_09: stloc.0  */
    
    loc0 = asm0.x60000b8(arg0,arg1,arg2);
    /* IL_0C: ldloc.0  */
    /* IL_0D: ret  */
    
    return loc0;
};;/* System.Int32 String.get_Length()*/

asm.x60000c3 = function get_Length(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call Int32 GetLengthImpl(System.Object) */
    /* IL_07: stloc.0  */
    
    loc0 = asm0.x60000b4(arg0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* System.String String.ToString()*/

asm.x60000c4 = function ToString(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: stloc.0  */
    
    loc0 = arg0;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/* static System.Boolean String.op_Inequality(String,String)*/

asm.x60000c5 = function op_Inequality(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: call Boolean op_Equality(System.String, System.String) */
    /* IL_08: ldc.i4.0  */
    /* IL_0A: ceq  */
    /* IL_0B: stloc.0  */
    
    loc0 = ((asm0.x60000c6(arg0,arg1) === 0) ? 1 : 0);
    /* IL_0E: ldloc.0  */
    /* IL_0F: ret  */
    
    return loc0;
};;/* static System.Boolean String.op_Equality(String,String)*/

asm.x60000c6 = function op_Equality(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldnull  */
            /* IL_04: ceq  */
            /* IL_05: stloc.0  */
            
            loc0 = ((arg0 === null) ? 1 : 0);
            /* IL_06: ldloc.0  */
            /* IL_07: brfalse.s IL_10 */
            
            if ((!(loc0))){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_09: ldarg.1  */
            /* IL_0A: ldnull  */
            /* IL_0C: ceq  */
            /* IL_0D: stloc.1  */
            
            loc1 = ((arg1 === null) ? 1 : 0);
            /* IL_0E: br.s IL_26 */
            
            __pos__ = 0x26;
            
            continue;
            case 0x10:
            /* IL_10: ldarg.1  */
            /* IL_11: ldnull  */
            /* IL_13: ceq  */
            /* IL_14: stloc.2  */
            
            loc2 = ((arg1 === null) ? 1 : 0);
            /* IL_15: ldloc.2  */
            /* IL_16: brfalse.s IL_1C */
            
            if ((!(loc2))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_18: ldc.i4.0  */
            /* IL_19: stloc.1  */
            
            loc1 = 0;
            /* IL_1A: br.s IL_26 */
            
            __pos__ = 0x26;
            
            continue;
            case 0x1C:
            /* IL_1C: ldarg.0  */
            /* IL_1D: ldarg.1  */
            /* IL_1E: call Boolean EqualsImpl(System.String, System.String) */
            /* IL_23: stloc.1  */
            
            loc1 = asm0.x60000b5(arg0,arg1);
            case 0x26:
            /* IL_26: ldloc.1  */
            /* IL_27: ret  */
            
            return loc1;
        }
    }
};;/* System.Boolean String.Equals(String)*/

asm.x60000c7 = function Equals(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: ldnull  */
            /* IL_04: ceq  */
            /* IL_05: stloc.0  */
            
            loc0 = ((arg1 === null) ? 1 : 0);
            /* IL_06: ldloc.0  */
            /* IL_07: brfalse.s IL_0D */
            
            if ((!(loc0))){
                
                __pos__ = 0xD;
                
                continue;
            }
            /* IL_09: ldc.i4.0  */
            /* IL_0A: stloc.1  */
            
            loc1 = 0;
            /* IL_0B: br.s IL_17 */
            
            __pos__ = 0x17;
            
            continue;
            case 0xD:
            /* IL_0D: ldarg.0  */
            /* IL_0E: ldarg.1  */
            /* IL_0F: call Boolean EqualsImpl(System.String, System.String) */
            /* IL_14: stloc.1  */
            
            loc1 = asm0.x60000b5(arg0,arg1);
            case 0x17:
            /* IL_17: ldloc.1  */
            /* IL_18: ret  */
            
            return loc1;
        }
    }
};;/* System.Boolean String.Equals(Object)*/

asm.x60000c8 = function Equals(arg0, arg1)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.String"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: isinst System.String */
    /* IL_08: call Boolean Equals(System.String) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x60000c7(arg0,t0.IsInst(arg1));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* static System.Int32 String.GetHashCodeImpl(String)*/

asm.x60000c9 = 
            function (o) {
                var str = o.jsstr;
                var length = str.length;
                var h = 0;
                for (var i = 0; i < length; i += 1)
                    h = (h << 5) - h + str.charCodeAt(i);
                return h;
            };;/* System.Int32 String.GetHashCode()*/

asm.x60000ca = function GetHashCode(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call Int32 GetHashCodeImpl(System.String) */
    /* IL_07: stloc.0  */
    
    loc0 = asm0.x60000c9(arg0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* static System.Int32 String.CompareOrdinal(String,String)*/

asm.x60000cb = 
            function (a, b) {
                if (a.jsstr < b.jsstr)
                    return -1;

                if (a.jsstr > b.jsstr)
                    return 1;

                return 0;
            }
            ;;/* static System.Int32 String.Compare(String,String)*/

asm.x60000cc = function Compare(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: call Int32 CompareOrdinal(System.String, System.String) */
    /* IL_08: stloc.0  */
    
    loc0 = asm0.x60000cb(arg0,arg1);
    /* IL_0B: ldloc.0  */
    /* IL_0C: ret  */
    
    return loc0;
};;/* static System.String String.Format(String,Object[])*/

asm.x60000cd = function Format(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var in_block_1;
    var loc1;
    var loc2;
    var loc3;
    var loc4;
    
    t0 = asm0["System.String"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldc.i4.0  */
            /* IL_02: stloc.0  */
            
            loc0 = 0;
            /* IL_03: br.s IL_41 */
            
            __pos__ = 0x41;
            
            continue;
            case 0x5:
            case 0x18:
            case 0x41:
            
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
                    /* IL_1E: ldloca.s 0 */
                    /* IL_20: call String ToString() */
                    /* IL_25: ldstr } */
                    /* IL_2A: call String Concat(System.String, System.String, System.String) */
                    /* IL_2F: ldloc.1  */
                    /* IL_30: callvirt String ToString() */
                    /* IL_35: callvirt String Replace(System.String, System.String) */
                    /* IL_3A: starg.s 0 */
                    
                    arg0 = asm0.x60000c2(arg0,asm0.x60000bd(CILJS.newString("{"),asm0.x6000151({
                                    w: function (v)
                                    {
                                        
                                        loc0 = v;
                                    },
                                    r: function ()
                                    {
                                        
                                        return loc0;
                                    }
                                }),CILJS.newString("}")),(loc1.vtable)["asm0.x600009b"](CILJS.convertBoxToPointerAsNeeded(loc1)));
                    /* IL_3C: nop  */
                    /* IL_3D: ldloc.0  */
                    /* IL_3E: ldc.i4.1  */
                    /* IL_3F: add  */
                    /* IL_40: stloc.0  */
                    
                    loc0 = (loc0 + 1) | 0;
                    case 0x41:
                    /* IL_41: ldloc.0  */
                    /* IL_42: ldarg.1  */
                    /* IL_43: ldlen  */
                    /* IL_44: conv.i4  */
                    /* IL_46: clt  */
                    /* IL_47: stloc.3  */
                    
                    loc3 = ((loc0 < (arg1.jsarr.length | 0)) ? 1 : 0);
                    /* IL_48: ldloc.3  */
                    /* IL_49: brtrue.s IL_05 */
                    
                    if (loc3){
                        
                        __pos__ = 0x5;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x41) || (__pos__ < 0x5)){
                
                continue;
            }
            /* IL_4B: ldarg.0  */
            /* IL_4C: stloc.s 4 */
            
            loc4 = arg0;
            /* IL_50: ldloc.s 4 */
            /* IL_52: ret  */
            
            return loc4;
        }
    }
};;/* static System.String String.ToLowerImpl(String)*/

asm.x60000ce = function(v) { return CILJS.newString(v.jsstr.toLowerCase()); } ;;/* System.String String.ToLower()*/

asm.x60000cf = function ToLower(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call String ToLowerImpl(System.String) */
    /* IL_07: stloc.0  */
    
    loc0 = asm0.x60000ce(arg0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* static System.String String.ToUpperImpl(String)*/

asm.x60000d0 = function(v) { return CILJS.newString(v.jsstr.toUpperCase()); } ;;/* System.String String.ToUpper()*/

asm.x60000d1 = function ToUpper(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call String ToUpperImpl(System.String) */
    /* IL_07: stloc.0  */
    
    loc0 = asm0.x60000d0(arg0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* System.Int32 String.CompareTo(String)*/

asm.x60000d3 = function CompareTo(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: ldnull  */
            /* IL_04: ceq  */
            /* IL_05: stloc.0  */
            
            loc0 = ((arg1 === null) ? 1 : 0);
            /* IL_06: ldloc.0  */
            /* IL_07: brfalse.s IL_0D */
            
            if ((!(loc0))){
                
                __pos__ = 0xD;
                
                continue;
            }
            /* IL_09: ldc.i4.1  */
            /* IL_0A: stloc.1  */
            
            loc1 = 1;
            /* IL_0B: br.s IL_17 */
            
            __pos__ = 0x17;
            
            continue;
            case 0xD:
            /* IL_0D: ldarg.0  */
            /* IL_0E: ldarg.1  */
            /* IL_0F: call Int32 CompareToImpl(System.String, System.String) */
            /* IL_14: stloc.1  */
            
            loc1 = (arg0.jsstr.localeCompare(arg1.jsstr));
            case 0x17:
            /* IL_17: ldloc.1  */
            /* IL_18: ret  */
            
            return loc1;
        }
    }
};;/* static System.Boolean String.IsNullOrEmpty(String)*/

asm.x60000d4 = function IsNullOrEmpty(arg0)
{
    var t0;
    var st_03;
    var in_block_0;
    var __pos__;
    var loc0;
    
    t0 = asm0["System.String"]();
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: brfalse.s IL_11 */
            
            if ((!(arg0))){
                
                __pos__ = 0x11;
                
                continue;
            }
            
            asm0.x60000d6();
            /* IL_04: ldarg.0  */
            /* IL_05: ldsfld String Empty */
            /* IL_0A: call Boolean op_Equality(System.String, System.String) */
            
            st_03 = asm0.x60000c6(arg0,t0.Empty);
            /* IL_0F: br.s IL_12 */
            
            __pos__ = 0x12;
            
            continue;
            case 0x11:
            /* IL_11: ldc.i4.1  */
            
            st_03 = 1;
            case 0x12:
            /* IL_12: stloc.0  */
            
            loc0 = st_03;
            /* IL_15: ldloc.0  */
            /* IL_16: ret  */
            
            return loc0;
        }
    }
};;/*  String..ctor()*/

asm.x60000d5 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static  String..cctor()*/

asm.x60000d6 = function _cctor()
{
    var t0;
    
    if (asm0["System.String"]().FieldsInitialized){
        
        return;
    }
    
    asm0["System.String"]().FieldsInitialized = true;
    
    t0 = asm0["System.String"]();
    /* IL_00: ldstr  */
    /* IL_05: stsfld String Empty */
    
    t0.Empty = CILJS.newString("");
    /* IL_0A: ret  */
    
    return ;
};;/* System.String Double.ToString()*/

asm.x60000d7 = function ToString(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Double"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.r8  */
    /* IL_03: box System.Double */
    /* IL_08: call String SignedPrimitiveToString(System.Object) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x600002f(CILJS.makeBox(arg0.r(),t0));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 Double.CompareTo(Object)*/

asm.x60000d8 = function CompareTo(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: unbox.any System.Double */
    /* IL_08: call Int32 CompareTo(System.Double) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x60000d9(arg0,CILJS.unboxAny(arg1,asm0["System.Double"]()));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 Double.CompareTo(Double)*/

asm.x60000d9 = function CompareTo(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.r8  */
            /* IL_03: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_04: ldloc.0  */
            /* IL_05: ldarg.1  */
            /* IL_07: clt  */
            /* IL_08: stloc.1  */
            
            loc1 = ((loc0 < arg1) ? 1 : 0);
            /* IL_09: ldloc.1  */
            /* IL_0A: brfalse.s IL_10 */
            
            if ((!(loc1))){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_0C: ldc.i4.m1  */
            /* IL_0D: stloc.2  */
            
            loc2 = -1;
            /* IL_0E: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x10:
            /* IL_10: ldloc.0  */
            /* IL_11: ldarg.1  */
            /* IL_13: cgt  */
            /* IL_14: stloc.3  */
            
            loc3 = ((loc0 > arg1) ? 1 : 0);
            /* IL_15: ldloc.3  */
            /* IL_16: brfalse.s IL_1C */
            
            if ((!(loc3))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_18: ldc.i4.1  */
            /* IL_19: stloc.2  */
            
            loc2 = 1;
            /* IL_1A: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x1C:
            /* IL_1C: ldc.i4.0  */
            /* IL_1D: stloc.2  */
            
            loc2 = 0;
            case 0x20:
            /* IL_20: ldloc.2  */
            /* IL_21: ret  */
            
            return loc2;
        }
    }
};;/*  ParamArrayAttribute..ctor()*/

asm.x60000dc = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Boolean Predicate`1.Invoke(T)*/

asm.x60000df = CILJS.delegateInvoke;;/* System.IAsyncResult Predicate`1.BeginInvoke(T,AsyncCallback,Object)*/

asm.x60000e0 = CILJS.delegateBeginInvoke;;/* System.Boolean Predicate`1.EndInvoke(IAsyncResult)*/

asm.x60000e1 = CILJS.delegateEndInvoke;;/*  Predicate`1..ctor(Object,IntPtr)*/

asm.x60000de = CILJS.delegateCtor;;/* System.Int32 Array.get_Length()*/

asm.x60000e2 = function get_Length(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call Int32 GetLengthImpl(System.Object) */
    /* IL_07: stloc.0  */
    
    loc0 = asm0.x60000e4(arg0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* System.Int64 Array.get_LongLength()*/

asm.x60000e3 = function get_LongLength(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call Int32 get_Length() */
    /* IL_07: conv.i8  */
    /* IL_08: stloc.0  */
    
    loc0 = CILJS.convI8(asm0.x60000e2(arg0));
    /* IL_0B: ldloc.0  */
    /* IL_0C: ret  */
    
    return loc0;
};;/* static System.Int32 Array.GetLengthImpl(Object)*/

asm.x60000e4 = function(o) { return o.jsarr.length; };;/* static System.Object Array.GetValueImpl(Object,Int32)*/

asm.x60000e5 = function(o, i) { return CILJS.box(o.jsarr[i], o.etype); };;/* static T[] Array.FromJsArray<T>(Object)*/

asm.x60000e6 = 
            function (T) {
                return function FromJsArray(arr) {
                    var r = new (asm['System.Array`1'](T))();
                    r.etype = T;
                    r.jsarr = arr;
                    return r;
                };
            };;/* System.Object Array.GetValue(Int32)*/

asm.x60000e7 = function GetValue(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: call Object GetValueImpl(System.Object, System.Int32) */
    /* IL_08: stloc.0  */
    
    loc0 = asm0.x60000e5(arg0,arg1);
    /* IL_0B: ldloc.0  */
    /* IL_0C: ret  */
    
    return loc0;
};;/* System.Collections.IEnumerator Array.GetEnumerator()*/

asm.x60000e8 = function GetEnumerator(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: callvirt IEnumerator GetEnumeratorImpl() */
    /* IL_07: stloc.0  */
    
    loc0 = (arg0.vtable)["asm0.x60000e9"](arg0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* static System.Void Array.Clear<T>(T[],Int32,Int32)*/

asm.x60000ea = function (T)
{
    
    return function Clear(arg0, arg1, arg2)
    {
        var t0;
        var loc0;
        var in_block_0;
        var __pos__;
        var loc1;
        var in_block_1;
        var loc2;
        
        t0 = T;
        
        loc0 = T.Default;
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldloca.s 0 */
                /* IL_04: initobj T */
                
                loc0 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? 0 : (new t0()))) : (null));
                /* IL_09: ldarg.1  */
                /* IL_0A: stloc.1  */
                
                loc1 = arg1;
                /* IL_0B: br.s IL_19 */
                
                __pos__ = 0x19;
                
                continue;
                case 0xD:
                case 0x19:
                
                in_block_1 = true;
                
                if (__pos__ < 0xD){
                    
                    __pos__ = 0xD;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0xD:
                        /* IL_0D: ldarg.0  */
                        /* IL_0E: ldloc.1  */
                        /* IL_0F: ldloc.0  */
                        /* IL_10: stelem T */
                        
                        (arg0.jsarr)[loc1] = loc0;
                        /* IL_15: ldloc.1  */
                        /* IL_16: ldc.i4.1  */
                        /* IL_17: add  */
                        /* IL_18: stloc.1  */
                        
                        loc1 = (loc1 + 1) | 0;
                        case 0x19:
                        /* IL_19: ldloc.1  */
                        /* IL_1A: ldarg.0  */
                        /* IL_1B: ldlen  */
                        /* IL_1C: conv.i4  */
                        /* IL_1E: clt  */
                        /* IL_1F: stloc.2  */
                        
                        loc2 = ((loc1 < (arg0.jsarr.length | 0)) ? 1 : 0);
                        /* IL_20: ldloc.2  */
                        /* IL_21: brtrue.s IL_0D */
                        
                        if (loc2){
                            
                            __pos__ = 0xD;
                            
                            continue;
                        }
                    }
                    
                    break;
                }
                
                if ((__pos__ > 0x19) || (__pos__ < 0xD)){
                    
                    continue;
                }
                /* IL_23: ret  */
                
                return ;
            }
        }
    };
};;/* static System.Int32 Array.IndexOf<T>(T[],T,Int32,Int32)*/

asm.x60000eb_init = function (T)
{
    
    return function (arg0, arg1, arg2, arg3)
    {
        
        (asm0["System.Collections.IEqualityComparer"]().init)();
        
        asm.x60000eb = asm.x60000eb_;
    };
};;

asm.x60000eb = function (T)
{
    
    return function (arg0, arg1, arg2, arg3)
    {
        
        (asm.x60000eb_init(T))(arg0,arg1,arg2,arg3);
        
        return (asm.x60000eb_(T))(arg0,arg1,arg2,arg3);
    };
};;
asm.x60000eb_ = function (T)
{
    
    return function IndexOf(arg0, arg1, arg2, arg3)
    {
        var t0;
        var t1;
        var t2;
        var st_14;
        var in_block_0;
        var __pos__;
        var loc2;
        var loc3;
        var loc0;
        var loc1;
        var loc4;
        var in_block_1;
        var loc5;
        var loc6;
        var loc7;
        
        t0 = asm0["System.Exception"]();
        
        t1 = T;
        
        t2 = asm0["System.Collections.IEqualityComparer"]();
        
        
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldarg.0  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.2  */
                
                loc2 = ((arg0 === null) ? 1 : 0);
                /* IL_06: ldloc.2  */
                /* IL_07: brfalse.s IL_14 */
                
                if ((!(loc2))){
                    
                    __pos__ = 0x14;
                    
                    continue;
                }
                /* IL_09: ldstr array */
                /* IL_0E: newobj Void .ctor(System.String) */
                /* IL_13: throw  */
                
                throw CILJS.newobj(t0,asm0.x6000076,[null, CILJS.newString("array")]);
                case 0x14:
                /* IL_14: ldarg.3  */
                /* IL_15: ldc.i4.0  */
                /* IL_16: blt.s IL_2A */
                
                if (arg3 < 0){
                    
                    __pos__ = 0x2A;
                    
                    continue;
                }
                /* IL_18: ldarg.2  */
                /* IL_19: ldc.i4.0  */
                /* IL_1A: blt.s IL_2A */
                
                if (arg2 < 0){
                    
                    __pos__ = 0x2A;
                    
                    continue;
                }
                /* IL_1C: ldarg.2  */
                /* IL_1D: ldc.i4.1  */
                /* IL_1E: sub  */
                /* IL_1F: ldarg.0  */
                /* IL_20: ldlen  */
                /* IL_21: conv.i4  */
                /* IL_22: ldc.i4.1  */
                /* IL_23: sub  */
                /* IL_24: ldarg.3  */
                /* IL_25: sub  */
                /* IL_27: cgt  */
                
                st_14 = ((((arg2 - 1) | 0) > (((((arg0.jsarr.length | 0) - 1) | 0) - arg3) | 0)) ? 1 : 0);
                /* IL_28: br.s IL_2B */
                
                __pos__ = 0x2B;
                
                continue;
                case 0x2A:
                /* IL_2A: ldc.i4.1  */
                
                st_14 = 1;
                case 0x2B:
                /* IL_2B: stloc.3  */
                
                loc3 = st_14;
                /* IL_2C: ldloc.3  */
                /* IL_2D: brfalse.s IL_35 */
                
                if ((!(loc3))){
                    
                    __pos__ = 0x35;
                    
                    continue;
                }
                /* IL_2F: newobj Void .ctor() */
                /* IL_34: throw  */
                
                throw CILJS.newobj(t0,asm0.x6000075,[null]);
                case 0x35:
                /* IL_35: ldarg.2  */
                /* IL_36: ldarg.3  */
                /* IL_37: add  */
                /* IL_38: stloc.0  */
                
                loc0 = (arg2 + arg3) | 0;
                /* IL_39: ldtoken T */
                /* IL_3E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_43: call IEqualityComparer GetDefaultEqualityComparer(System.Type) */
                /* IL_48: stloc.1  */
                
                loc1 = asm.GetDefaultEqualityComparer(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t1)).ctor)();
                /* IL_49: ldarg.2  */
                /* IL_4A: stloc.s 4 */
                
                loc4 = arg2;
                /* IL_4C: br.s IL_7B */
                
                __pos__ = 0x7B;
                
                continue;
                case 0x4E:
                case 0x74:
                case 0x7B:
                
                in_block_1 = true;
                
                if (__pos__ < 0x4E){
                    
                    __pos__ = 0x4E;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x4E:
                        /* IL_4E: nop  */
                        /* IL_4F: ldloc.1  */
                        /* IL_50: ldarg.0  */
                        /* IL_51: ldloc.s 4 */
                        /* IL_53: call T UnsafeLoad[T](T[], System.Int32) */
                        /* IL_58: box T */
                        /* IL_5D: ldarg.1  */
                        /* IL_5E: box T */
                        /* IL_63: callvirt Boolean Equals(System.Object, System.Object) */
                        /* IL_68: stloc.s 5 */
                        
                        loc5 = ((loc1.ifacemap)[t2].x600017e)(CILJS.convertBoxToPointerAsNeeded(loc1),CILJS.box((arg0.jsarr[loc4]),t1),CILJS.box(arg1,t1));
                        /* IL_6A: ldloc.s 5 */
                        /* IL_6C: brfalse.s IL_74 */
                        
                        if ((!(loc5))){
                            
                            __pos__ = 0x74;
                            
                            continue;
                        }
                        /* IL_6E: ldloc.s 4 */
                        /* IL_70: stloc.s 6 */
                        
                        loc6 = loc4;
                        /* IL_72: br.s IL_8B */
                        
                        __pos__ = 0x8B;
                        
                        continue;
                        case 0x74:
                        /* IL_74: nop  */
                        /* IL_75: ldloc.s 4 */
                        /* IL_77: ldc.i4.1  */
                        /* IL_78: add  */
                        /* IL_79: stloc.s 4 */
                        
                        loc4 = (loc4 + 1) | 0;
                        case 0x7B:
                        /* IL_7B: ldloc.s 4 */
                        /* IL_7D: ldloc.0  */
                        /* IL_7F: clt  */
                        /* IL_80: stloc.s 7 */
                        
                        loc7 = ((loc4 < loc0) ? 1 : 0);
                        /* IL_82: ldloc.s 7 */
                        /* IL_84: brtrue.s IL_4E */
                        
                        if (loc7){
                            
                            __pos__ = 0x4E;
                            
                            continue;
                        }
                    }
                    
                    break;
                }
                
                if ((__pos__ > 0x7B) || (__pos__ < 0x4E)){
                    
                    continue;
                }
                /* IL_86: ldc.i4.m1  */
                /* IL_87: stloc.s 6 */
                
                loc6 = -1;
                case 0x8B:
                /* IL_8B: ldloc.s 6 */
                /* IL_8D: ret  */
                
                return loc6;
            }
        }
    };
};/* static System.Exception Array.GetException(String)*/

asm.x60000ec = 
            function (classname) { 
                var t = asm1[classname]();
                return new t(); 
            };;/* static System.Void Array.Copy(Array,Int32,Array,Int32,Int32)*/

asm.x60000ed = function Copy(arg0, arg1, arg2, arg3, arg4)
{
    var st_2E;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    var loc4;
    var loc5;
    var loc6;
    var loc7;
    var in_block_1;
    var loc8;
    var loc9;
    var loc10;
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldnull  */
            /* IL_04: ceq  */
            /* IL_05: stloc.0  */
            
            loc0 = ((arg0 === null) ? 1 : 0);
            /* IL_06: ldloc.0  */
            /* IL_07: brfalse.s IL_14 */
            
            if ((!(loc0))){
                
                __pos__ = 0x14;
                
                continue;
            }
            /* IL_09: ldstr System.ArgumentNullException */
            /* IL_0E: call Exception GetException(System.String) */
            /* IL_13: throw  */
            
            throw asm0.x60000ec(CILJS.newString("System.ArgumentNullException"));
            case 0x14:
            /* IL_14: ldarg.2  */
            /* IL_15: ldnull  */
            /* IL_17: ceq  */
            /* IL_18: stloc.1  */
            
            loc1 = ((arg2 === null) ? 1 : 0);
            /* IL_19: ldloc.1  */
            /* IL_1A: brfalse.s IL_27 */
            
            if ((!(loc1))){
                
                __pos__ = 0x27;
                
                continue;
            }
            /* IL_1C: ldstr System.ArgumentNullException */
            /* IL_21: call Exception GetException(System.String) */
            /* IL_26: throw  */
            
            throw asm0.x60000ec(CILJS.newString("System.ArgumentNullException"));
            case 0x27:
            /* IL_27: ldarg.1  */
            /* IL_28: ldc.i4.0  */
            /* IL_2A: clt  */
            /* IL_2B: stloc.2  */
            
            loc2 = ((arg1 < 0) ? 1 : 0);
            /* IL_2C: ldloc.2  */
            /* IL_2D: brfalse.s IL_3A */
            
            if ((!(loc2))){
                
                __pos__ = 0x3A;
                
                continue;
            }
            /* IL_2F: ldstr System.ArgumentOutOfRangeException */
            /* IL_34: call Exception GetException(System.String) */
            /* IL_39: throw  */
            
            throw asm0.x60000ec(CILJS.newString("System.ArgumentOutOfRangeException"));
            case 0x3A:
            /* IL_3A: ldarg.3  */
            /* IL_3B: ldc.i4.0  */
            /* IL_3D: clt  */
            /* IL_3E: stloc.3  */
            
            loc3 = ((arg3 < 0) ? 1 : 0);
            /* IL_3F: ldloc.3  */
            /* IL_40: brfalse.s IL_4D */
            
            if ((!(loc3))){
                
                __pos__ = 0x4D;
                
                continue;
            }
            /* IL_42: ldstr System.ArgumentOutOfRangeException */
            /* IL_47: call Exception GetException(System.String) */
            /* IL_4C: throw  */
            
            throw asm0.x60000ec(CILJS.newString("System.ArgumentOutOfRangeException"));
            case 0x4D:
            /* IL_4D: ldarg.1  */
            /* IL_4E: ldarg.0  */
            /* IL_4F: callvirt Int32 get_Length() */
            /* IL_54: ldarg.s 4 */
            /* IL_56: sub  */
            /* IL_58: cgt  */
            /* IL_59: stloc.s 4 */
            
            loc4 = ((arg1 > ((asm0.x60000e2(arg0) - arg4) | 0)) ? 1 : 0);
            /* IL_5B: ldloc.s 4 */
            /* IL_5D: brfalse.s IL_6A */
            
            if ((!(loc4))){
                
                __pos__ = 0x6A;
                
                continue;
            }
            /* IL_5F: ldstr System.ArgumentException */
            /* IL_64: call Exception GetException(System.String) */
            /* IL_69: throw  */
            
            throw asm0.x60000ec(CILJS.newString("System.ArgumentException"));
            case 0x6A:
            /* IL_6A: ldarg.3  */
            /* IL_6B: ldarg.2  */
            /* IL_6C: callvirt Int32 get_Length() */
            /* IL_71: ldarg.s 4 */
            /* IL_73: sub  */
            /* IL_75: cgt  */
            /* IL_76: stloc.s 5 */
            
            loc5 = ((arg3 > ((asm0.x60000e2(arg2) - arg4) | 0)) ? 1 : 0);
            /* IL_78: ldloc.s 5 */
            /* IL_7A: brfalse.s IL_88 */
            
            if ((!(loc5))){
                
                __pos__ = 0x88;
                
                continue;
            }
            /* IL_7C: nop  */
            /* IL_7D: ldstr System.ArgumentException */
            /* IL_82: call Exception GetException(System.String) */
            /* IL_87: throw  */
            
            throw asm0.x60000ec(CILJS.newString("System.ArgumentException"));
            case 0x88:
            /* IL_88: ldarg.0  */
            /* IL_89: ldarg.2  */
            /* IL_8A: bne.un.s IL_92 */
            
            if (CILJS.unsignedValue(arg0) != CILJS.unsignedValue(arg2)){
                
                __pos__ = 0x92;
                
                continue;
            }
            /* IL_8C: ldarg.1  */
            /* IL_8D: ldarg.3  */
            /* IL_8F: cgt  */
            
            st_2E = ((arg1 > arg3) ? 1 : 0);
            /* IL_90: br.s IL_93 */
            
            __pos__ = 0x93;
            
            continue;
            case 0x92:
            /* IL_92: ldc.i4.1  */
            
            st_2E = 1;
            case 0x93:
            /* IL_93: stloc.s 6 */
            
            loc6 = st_2E;
            /* IL_95: ldloc.s 6 */
            /* IL_97: brfalse.s IL_CB */
            
            if ((!(loc6))){
                
                __pos__ = 0xCB;
                
                continue;
            }
            /* IL_99: nop  */
            /* IL_9A: ldc.i4.0  */
            /* IL_9B: stloc.s 7 */
            
            loc7 = 0;
            /* IL_9D: br.s IL_BC */
            
            __pos__ = 0xBC;
            
            continue;
            case 0x9F:
            case 0xBC:
            
            in_block_1 = true;
            
            if (__pos__ < 0x9F){
                
                __pos__ = 0x9F;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x9F:
                    /* IL_9F: nop  */
                    /* IL_A0: ldarg.2  */
                    /* IL_A1: ldarg.0  */
                    /* IL_A2: ldarg.1  */
                    /* IL_A3: ldloc.s 7 */
                    /* IL_A5: add  */
                    /* IL_A6: callvirt Object GetValue(System.Int32) */
                    /* IL_AB: ldarg.3  */
                    /* IL_AC: ldloc.s 7 */
                    /* IL_AE: add  */
                    /* IL_AF: callvirt Void SetValue(System.Object, System.Int32) */
                    
                    asm0.x6000106(arg2,asm0.x60000e7(arg0,(arg1 + loc7) | 0),(arg3 + loc7) | 0);
                    /* IL_B4: nop  */
                    /* IL_B5: nop  */
                    /* IL_B6: ldloc.s 7 */
                    /* IL_B8: ldc.i4.1  */
                    /* IL_B9: add  */
                    /* IL_BA: stloc.s 7 */
                    
                    loc7 = (loc7 + 1) | 0;
                    case 0xBC:
                    /* IL_BC: ldloc.s 7 */
                    /* IL_BE: ldarg.s 4 */
                    /* IL_C1: clt  */
                    /* IL_C2: stloc.s 8 */
                    
                    loc8 = ((loc7 < arg4) ? 1 : 0);
                    /* IL_C4: ldloc.s 8 */
                    /* IL_C6: brtrue.s IL_9F */
                    
                    if (loc8){
                        
                        __pos__ = 0x9F;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0xBC) || (__pos__ < 0x9F)){
                
                continue;
            }
            /* IL_C8: nop  */
            /* IL_C9: br.s IL_100 */
            
            __pos__ = 0x100;
            
            continue;
            case 0xCB:
            /* IL_CB: nop  */
            /* IL_CC: ldarg.s 4 */
            /* IL_CE: ldc.i4.1  */
            /* IL_CF: sub  */
            /* IL_D0: stloc.s 9 */
            
            loc9 = (arg4 - 1) | 0;
            /* IL_D2: br.s IL_F1 */
            
            __pos__ = 0xF1;
            
            continue;
            case 0xD4:
            case 0xF1:
            
            in_block_1 = true;
            
            if (__pos__ < 0xD4){
                
                __pos__ = 0xD4;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0xD4:
                    /* IL_D4: nop  */
                    /* IL_D5: ldarg.2  */
                    /* IL_D6: ldarg.0  */
                    /* IL_D7: ldarg.1  */
                    /* IL_D8: ldloc.s 9 */
                    /* IL_DA: add  */
                    /* IL_DB: callvirt Object GetValue(System.Int32) */
                    /* IL_E0: ldarg.3  */
                    /* IL_E1: ldloc.s 9 */
                    /* IL_E3: add  */
                    /* IL_E4: callvirt Void SetValue(System.Object, System.Int32) */
                    
                    asm0.x6000106(arg2,asm0.x60000e7(arg0,(arg1 + loc9) | 0),(arg3 + loc9) | 0);
                    /* IL_E9: nop  */
                    /* IL_EA: nop  */
                    /* IL_EB: ldloc.s 9 */
                    /* IL_ED: ldc.i4.1  */
                    /* IL_EE: sub  */
                    /* IL_EF: stloc.s 9 */
                    
                    loc9 = (loc9 - 1) | 0;
                    case 0xF1:
                    /* IL_F1: ldloc.s 9 */
                    /* IL_F3: ldc.i4.0  */
                    /* IL_F5: clt  */
                    /* IL_F6: ldc.i4.0  */
                    /* IL_F8: ceq  */
                    /* IL_F9: stloc.s 10 */
                    
                    loc10 = ((((loc9 < 0) ? 1 : 0) === 0) ? 1 : 0);
                    /* IL_FB: ldloc.s 10 */
                    /* IL_FD: brtrue.s IL_D4 */
                    
                    if (loc10){
                        
                        __pos__ = 0xD4;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0xF1) || (__pos__ < 0xD4)){
                
                continue;
            }
            /* IL_FF: nop  */
            case 0x100:
            /* IL_100: ret  */
            
            return ;
        }
    }
};;/* static System.Int32 Array.GetIndex<T>(T[],Int32,Int32,Predicate`1)*/

asm.x60000ee = function (T)
{
    
    return function GetIndex(arg0, arg1, arg2, arg3)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var in_block_1;
        var loc2;
        var loc3;
        var loc4;
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldarg.1  */
                /* IL_02: ldarg.2  */
                /* IL_03: add  */
                /* IL_04: stloc.0  */
                
                loc0 = (arg1 + arg2) | 0;
                /* IL_05: ldarg.1  */
                /* IL_06: stloc.1  */
                
                loc1 = arg1;
                /* IL_07: br.s IL_24 */
                
                __pos__ = 0x24;
                
                continue;
                case 0x9:
                case 0x1F:
                case 0x24:
                
                in_block_1 = true;
                
                if (__pos__ < 0x9){
                    
                    __pos__ = 0x9;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x9:
                        /* IL_09: nop  */
                        /* IL_0A: ldarg.3  */
                        /* IL_0B: ldarg.0  */
                        /* IL_0C: ldloc.1  */
                        /* IL_0D: ldelem T */
                        /* IL_12: callvirt Boolean Invoke(T) */
                        /* IL_17: stloc.2  */
                        
                        loc2 = ((arg3._target) ? (arg3._methodPtr(arg3._target,(arg0.jsarr)[loc1])) : (arg3._methodPtr((arg0.jsarr)[loc1])));
                        /* IL_18: ldloc.2  */
                        /* IL_19: brfalse.s IL_1F */
                        
                        if ((!(loc2))){
                            
                            __pos__ = 0x1F;
                            
                            continue;
                        }
                        /* IL_1B: ldloc.1  */
                        /* IL_1C: stloc.3  */
                        
                        loc3 = loc1;
                        /* IL_1D: br.s IL_32 */
                        
                        __pos__ = 0x32;
                        
                        continue;
                        case 0x1F:
                        /* IL_1F: nop  */
                        /* IL_20: ldloc.1  */
                        /* IL_21: ldc.i4.1  */
                        /* IL_22: add  */
                        /* IL_23: stloc.1  */
                        
                        loc1 = (loc1 + 1) | 0;
                        case 0x24:
                        /* IL_24: ldloc.1  */
                        /* IL_25: ldloc.0  */
                        /* IL_27: clt  */
                        /* IL_28: stloc.s 4 */
                        
                        loc4 = ((loc1 < loc0) ? 1 : 0);
                        /* IL_2A: ldloc.s 4 */
                        /* IL_2C: brtrue.s IL_09 */
                        
                        if (loc4){
                            
                            __pos__ = 0x9;
                            
                            continue;
                        }
                    }
                    
                    break;
                }
                
                if ((__pos__ > 0x24) || (__pos__ < 0x9)){
                    
                    continue;
                }
                /* IL_2E: ldc.i4.m1  */
                /* IL_2F: stloc.3  */
                
                loc3 = -1;
                case 0x32:
                /* IL_32: ldloc.3  */
                /* IL_33: ret  */
                
                return loc3;
            }
        }
    };
};;/* static System.Int32 Array.GetLastIndex<T>(T[],Int32,Int32,Predicate`1)*/

asm.x60000ef = function (T)
{
    
    return function GetLastIndex(arg0, arg1, arg2, arg3)
    {
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var in_block_0;
        var __pos__;
        var loc0;
        var in_block_1;
        var loc1;
        var loc2;
        var loc3;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldarg.1  */
                /* IL_02: ldarg.2  */
                /* IL_03: add  */
                /* IL_04: stloc.0  */
                
                loc0 = (arg1 + arg2) | 0;
                /* IL_05: br.s IL_22 */
                
                __pos__ = 0x22;
                
                continue;
                case 0x7:
                case 0x21:
                case 0x22:
                
                in_block_1 = true;
                
                if (__pos__ < 0x7){
                    
                    __pos__ = 0x7;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x7:
                        /* IL_07: nop  */
                        /* IL_08: ldarg.3  */
                        
                        st_09 = arg3;
                        /* IL_09: ldarg.0  */
                        
                        st_07 = arg0;
                        /* IL_0A: ldloc.0  */
                        
                        st_03 = loc0;
                        /* IL_0B: ldc.i4.1  */
                        
                        st_04 = 1;
                        /* IL_0C: sub  */
                        
                        st_05 = (st_03 - st_04) | 0;
                        /* IL_0D: dup  */
                        
                        st_08 = st_06 = st_05;
                        /* IL_0E: stloc.0  */
                        
                        loc0 = st_06;
                        /* IL_0F: ldelem T */
                        
                        st_0A = (st_07.jsarr)[st_08];
                        /* IL_14: callvirt Boolean Invoke(T) */
                        
                        st_0B = ((st_09._target) ? (st_09._methodPtr(st_09._target,st_0A)) : (st_09._methodPtr(st_0A)));
                        /* IL_19: stloc.1  */
                        
                        loc1 = st_0B;
                        /* IL_1A: ldloc.1  */
                        /* IL_1B: brfalse.s IL_21 */
                        
                        if ((!(loc1))){
                            
                            __pos__ = 0x21;
                            
                            continue;
                        }
                        /* IL_1D: ldloc.0  */
                        /* IL_1E: stloc.2  */
                        
                        loc2 = loc0;
                        /* IL_1F: br.s IL_31 */
                        
                        __pos__ = 0x31;
                        
                        continue;
                        case 0x21:
                        /* IL_21: nop  */
                        case 0x22:
                        /* IL_22: ldloc.0  */
                        /* IL_23: ldarg.1  */
                        /* IL_25: ceq  */
                        /* IL_26: ldc.i4.0  */
                        /* IL_28: ceq  */
                        /* IL_29: stloc.3  */
                        
                        loc3 = ((((loc0 === arg1) ? 1 : 0) === 0) ? 1 : 0);
                        /* IL_2A: ldloc.3  */
                        /* IL_2B: brtrue.s IL_07 */
                        
                        if (loc3){
                            
                            __pos__ = 0x7;
                            
                            continue;
                        }
                    }
                    
                    break;
                }
                
                if ((__pos__ > 0x22) || (__pos__ < 0x7)){
                    
                    continue;
                }
                /* IL_2D: ldc.i4.m1  */
                /* IL_2E: stloc.2  */
                
                loc2 = -1;
                case 0x31:
                /* IL_31: ldloc.2  */
                /* IL_32: ret  */
                
                return loc2;
            }
        }
    };
};;/* static System.Int32 Array.LastIndexOf<T>(T[],T,Int32,Int32)*/

asm.x60000f0_init = function (T)
{
    
    return function (arg0, arg1, arg2, arg3)
    {
        
        (asm0["System.Collections.IEqualityComparer"]().init)();
        
        asm.x60000f0 = asm.x60000f0_;
    };
};;

asm.x60000f0 = function (T)
{
    
    return function (arg0, arg1, arg2, arg3)
    {
        
        (asm.x60000f0_init(T))(arg0,arg1,arg2,arg3);
        
        return (asm.x60000f0_(T))(arg0,arg1,arg2,arg3);
    };
};;
asm.x60000f0_ = function (T)
{
    
    return function LastIndexOf(arg0, arg1, arg2, arg3)
    {
        var t0;
        var t1;
        var st_1A;
        var in_block_0;
        var __pos__;
        var loc1;
        var loc2;
        var loc0;
        var loc3;
        var in_block_1;
        var loc4;
        var loc5;
        var loc6;
        
        t0 = T;
        
        t1 = asm0["System.Collections.IEqualityComparer"]();
        
        
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldarg.0  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.1  */
                
                loc1 = ((arg0 === null) ? 1 : 0);
                /* IL_06: ldloc.1  */
                /* IL_07: brfalse.s IL_14 */
                
                if ((!(loc1))){
                    
                    __pos__ = 0x14;
                    
                    continue;
                }
                /* IL_09: ldstr System.ArgumentNullException */
                /* IL_0E: call Exception GetException(System.String) */
                /* IL_13: throw  */
                
                throw asm0.x60000ec(CILJS.newString("System.ArgumentNullException"));
                case 0x14:
                /* IL_14: ldarg.3  */
                /* IL_15: ldc.i4.0  */
                /* IL_16: blt.s IL_3A */
                
                if (arg3 < 0){
                    
                    __pos__ = 0x3A;
                    
                    continue;
                }
                /* IL_18: ldarg.2  */
                /* IL_19: ldarg.0  */
                /* IL_1A: ldc.i4.0  */
                /* IL_1B: callvirt Int32 GetLowerBound(System.Int32) */
                /* IL_20: blt.s IL_3A */
                
                if (arg2 < asm0.x60000fe(arg0,0)){
                    
                    __pos__ = 0x3A;
                    
                    continue;
                }
                /* IL_22: ldarg.2  */
                /* IL_23: ldarg.0  */
                /* IL_24: ldlen  */
                /* IL_25: conv.i4  */
                /* IL_26: ldc.i4.1  */
                /* IL_27: sub  */
                /* IL_28: bgt.s IL_3A */
                
                if (arg2 > (((arg0.jsarr.length | 0) - 1) | 0)){
                    
                    __pos__ = 0x3A;
                    
                    continue;
                }
                /* IL_2A: ldarg.2  */
                /* IL_2B: ldarg.3  */
                /* IL_2C: sub  */
                /* IL_2D: ldc.i4.1  */
                /* IL_2E: add  */
                /* IL_2F: ldarg.0  */
                /* IL_30: ldc.i4.0  */
                /* IL_31: callvirt Int32 GetLowerBound(System.Int32) */
                /* IL_37: clt  */
                
                st_1A = ((((((arg2 - arg3) | 0) + 1) | 0) < asm0.x60000fe(arg0,0)) ? 1 : 0);
                /* IL_38: br.s IL_3B */
                
                __pos__ = 0x3B;
                
                continue;
                case 0x3A:
                /* IL_3A: ldc.i4.1  */
                
                st_1A = 1;
                case 0x3B:
                /* IL_3B: stloc.2  */
                
                loc2 = st_1A;
                /* IL_3C: ldloc.2  */
                /* IL_3D: brfalse.s IL_4A */
                
                if ((!(loc2))){
                    
                    __pos__ = 0x4A;
                    
                    continue;
                }
                /* IL_3F: ldstr System.ArgumentOutOfRangeException */
                /* IL_44: call Exception GetException(System.String) */
                /* IL_49: throw  */
                
                throw asm0.x60000ec(CILJS.newString("System.ArgumentOutOfRangeException"));
                case 0x4A:
                /* IL_4A: ldtoken T */
                /* IL_4F: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_54: call IEqualityComparer GetDefaultEqualityComparer(System.Type) */
                /* IL_59: stloc.0  */
                
                loc0 = asm.GetDefaultEqualityComparer(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)).ctor)();
                /* IL_5A: ldarg.2  */
                /* IL_5B: stloc.3  */
                
                loc3 = arg2;
                /* IL_5C: br.s IL_87 */
                
                __pos__ = 0x87;
                
                continue;
                case 0x5E:
                case 0x82:
                case 0x87:
                
                in_block_1 = true;
                
                if (__pos__ < 0x5E){
                    
                    __pos__ = 0x5E;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x5E:
                        /* IL_5E: nop  */
                        /* IL_5F: ldloc.0  */
                        /* IL_60: ldarg.0  */
                        /* IL_61: ldloc.3  */
                        /* IL_62: ldelem T */
                        /* IL_67: box T */
                        /* IL_6C: ldarg.1  */
                        /* IL_6D: box T */
                        /* IL_72: callvirt Boolean Equals(System.Object, System.Object) */
                        /* IL_77: stloc.s 4 */
                        
                        loc4 = ((loc0.ifacemap)[t1].x600017e)(CILJS.convertBoxToPointerAsNeeded(loc0),CILJS.box((arg0.jsarr)[loc3],t0),CILJS.box(arg1,t0));
                        /* IL_79: ldloc.s 4 */
                        /* IL_7B: brfalse.s IL_82 */
                        
                        if ((!(loc4))){
                            
                            __pos__ = 0x82;
                            
                            continue;
                        }
                        /* IL_7D: ldloc.3  */
                        /* IL_7E: stloc.s 5 */
                        
                        loc5 = loc3;
                        /* IL_80: br.s IL_9D */
                        
                        __pos__ = 0x9D;
                        
                        continue;
                        case 0x82:
                        /* IL_82: nop  */
                        /* IL_83: ldloc.3  */
                        /* IL_84: ldc.i4.1  */
                        /* IL_85: sub  */
                        /* IL_86: stloc.3  */
                        
                        loc3 = (loc3 - 1) | 0;
                        case 0x87:
                        /* IL_87: ldloc.3  */
                        /* IL_88: ldarg.2  */
                        /* IL_89: ldarg.3  */
                        /* IL_8A: sub  */
                        /* IL_8B: ldc.i4.1  */
                        /* IL_8C: add  */
                        /* IL_8E: clt  */
                        /* IL_8F: ldc.i4.0  */
                        /* IL_91: ceq  */
                        /* IL_92: stloc.s 6 */
                        
                        loc6 = ((((loc3 < ((((arg2 - arg3) | 0) + 1) | 0)) ? 1 : 0) === 0) ? 1 : 0);
                        /* IL_94: ldloc.s 6 */
                        /* IL_96: brtrue.s IL_5E */
                        
                        if (loc6){
                            
                            __pos__ = 0x5E;
                            
                            continue;
                        }
                    }
                    
                    break;
                }
                
                if ((__pos__ > 0x87) || (__pos__ < 0x5E)){
                    
                    continue;
                }
                /* IL_98: ldc.i4.m1  */
                /* IL_99: stloc.s 5 */
                
                loc5 = -1;
                case 0x9D:
                /* IL_9D: ldloc.s 5 */
                /* IL_9F: ret  */
                
                return loc5;
            }
        }
    };
};/* static System.Void Array.Sort<T>(T[],Object)*/

asm.x60000f1 =  function (T) {
            return function Sort(array, comparison) {
                function swap(items, firstIndex, secondIndex){
                    var temp = items[firstIndex];
                    items[firstIndex] = items[secondIndex];
                    items[secondIndex] = temp;
                }

                function partition(items, left, right) {

                    var pivot   = items[Math.floor((right + left) / 2)],
                        i       = left,
                        j       = right;

                    while (i <= j) {
                        
                        while (comparison(items[i], pivot) < 0)
                            i++;
                        while (comparison(items[j], pivot) > 0)
                            j--;

                        if (i <= j) {
                            swap(items, i, j);
                            i++;
                            j--;
                        }
                    }

                    return i;
                }

                function quickSort(items, left, right) {
                    var index;

                    if (items.length > 1) {
                        index = partition(items, left, right);

                        if (left < index - 1)
                            quickSort(items, left, index - 1);

                        if (index < right)
                            quickSort(items, index, right);
                    }

                    return items;
                }

                quickSort(array.jsarr, 0, array.jsarr.length - 1);
            } }
            ;;/* static System.Void Array.Sort<T>(T[],Int32,Int32)*/

asm.x60000f2_init = function (T)
{
    
    return function (arg0, arg1, arg2)
    {
        
        (asm0["System.Collections.Generic.IComparer`1"](T).init)();
        
        (asm0["System.InvalidOperationException"]().init)();
    };
};;

asm.x60000f2 = function (T)
{
    
    return function (arg0, arg1, arg2)
    {
        
        (asm.x60000f2_init(T))(arg0,arg1,arg2);
        
        return (asm.x60000f2_(T))(arg0,arg1,arg2);
    };
};;
asm.x60000f2_ = function (T)
{
    
    return function Sort(arg0, arg1, arg2)
    {
        var t0;
        var t1;
        var t2;
        var in_block_0;
        var __pos__;
        var in_block_1;
        var loc0;
        var __error_handled_1__;
        var loc1;
        
        t0 = T;
        
        t1 = asm0["System.Collections.Generic.IComparer`1"](t0);
        
        t2 = asm0["System.InvalidOperationException"]();
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                try {
                    
                    in_block_1 = true;
                    
                    if (__pos__ < 0x1){
                        
                        __pos__ = 0x1;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x1:
                            /* IL_01: nop  */
                            /* IL_02: ldtoken T */
                            /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                            /* IL_0C: call IComparer GetComparer(System.Type) */
                            /* IL_11: call IComparer`1 UnsafeCast[System.Collections.Generic.IComparer`1[T]](System.Object) */
                            /* IL_16: stloc.0  */
                            
                            loc0 = asm.GetDefaultComparer(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)).ctor)();
                            /* IL_17: ldarg.0  */
                            /* IL_18: ldc.i4.0  */
                            /* IL_19: ldarg.2  */
                            /* IL_1A: ldloc.0  */
                            /* IL_1B: call Void Sort[T](T[], System.Int32, System.Int32, System.Collections.Generic.IComparer`1[T]) */
                            
                            (asm0.x60000f5(T))(arg0,0,arg2,loc0);
                            /* IL_20: nop  */
                            /* IL_21: nop  */
                            /* IL_22: leave.s IL_32 */
                            
                            in_block_1 = false;
                            
                            __pos__ = 0x32;
                            
                            continue;
                        }
                    }
                }
                
                catch (__error__) {
                    
                    __error_handled_1__ = false;
                    
                    if ((!(__error_handled_1__)) && (__error__ instanceof asm0["System.Exception"]())){
                        
                        in_block_1 = true;
                        
                        if (__pos__ < 0x24){
                            
                            __pos__ = 0x24;
                        }
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x24:
                                
                                st_08 = __error__;
                                
                                __error_handled_1__ = true;
                                /* IL_24: stloc.1  */
                                
                                loc1 = st_08;
                                /* IL_25: nop  */
                                /* IL_26: ldstr Failed to sort the array.  */
                                /* IL_2B: ldloc.1  */
                                /* IL_2C: newobj Void .ctor(System.String, System.Exception) */
                                /* IL_31: throw  */
                                
                                throw CILJS.newobj(t2,asm0.x6000003,[null, CILJS.newString("Failed to sort the array. "), loc1]);
                            }
                        }
                    }
                    
                    if ((!(__error_handled_1__))){
                        
                        throw __error__;
                    }
                }
                
                continue;
                case 0x32:
                /* IL_32: ret  */
                
                return ;
            }
        }
    };
};/* static System.Void Array.Sort<T>(T[],IComparer`1)*/

asm.x60000f3 = function (T)
{
    
    return function Sort(arg0, arg1)
    {
        var t0;
        
        t0 = T;
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldc.i4.0  */
        /* IL_03: ldarg.0  */
        /* IL_04: ldlen  */
        /* IL_05: conv.i4  */
        /* IL_06: ldarg.1  */
        /* IL_07: call Void Sort[T](T[], System.Int32, System.Int32, System.Collections.Generic.IComparer`1[T]) */
        
        (asm0.x60000f5(T))(arg0,0,arg0.jsarr.length | 0,arg1);
        /* IL_0C: nop  */
        /* IL_0D: ret  */
        
        return ;
    };
};;/* static System.Void Array.SortImpl<T>(T[],Int32,Comparison`1)*/

asm.x60000f4 = function (T)
{
    
    return function SortImpl(arg0, arg1, arg2)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        
        t0 = T;
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldarg.0  */
                /* IL_02: ldlen  */
                /* IL_03: conv.i4  */
                /* IL_04: stloc.0  */
                
                loc0 = arg0.jsarr.length | 0;
                /* IL_05: ldarg.1  */
                /* IL_06: ldloc.0  */
                /* IL_08: clt  */
                /* IL_09: stloc.1  */
                
                loc1 = ((arg1 < loc0) ? 1 : 0);
                /* IL_0A: ldloc.1  */
                /* IL_0B: brfalse.s IL_1C */
                
                if ((!(loc1))){
                    
                    __pos__ = 0x1C;
                    
                    continue;
                }
                /* IL_0D: nop  */
                /* IL_0E: ldarg.0  */
                /* IL_0F: ldarg.1  */
                /* IL_10: ldarg.0  */
                /* IL_11: ldlen  */
                /* IL_12: conv.i4  */
                /* IL_13: ldarg.1  */
                /* IL_14: sub  */
                /* IL_15: call Void Splice(System.Object, System.Int32, System.Int32) */
                
                asm0.x60000f7(arg0,arg1,((arg0.jsarr.length | 0) - arg1) | 0);
                /* IL_1A: nop  */
                /* IL_1B: nop  */
                case 0x1C:
                /* IL_1C: ldarg.0  */
                /* IL_1D: ldarg.2  */
                /* IL_1E: call Object GetJsFunction(System.Delegate) */
                /* IL_23: call Void Sort[T](T[], System.Object) */
                
                (asm0.x60000f1(T))(arg0,asm0.x6000042(arg2));
                /* IL_28: nop  */
                /* IL_29: ret  */
                
                return ;
            }
        }
    };
};;/* static System.Void Array.Sort<T>(T[],Int32,Int32,IComparer`1)*/

asm.x60000f5_init = function (T)
{
    
    return function (arg0, arg1, arg2, arg3)
    {
        
        (asm0["System.Array+<>c__DisplayClass23_0`1"](T).init)();
        
        (asm0["System.NotImplementedException"]().init)();
        
        (asm0["System.Comparison`1"](T).init)();
    };
};;

asm.x60000f5 = function (T)
{
    
    return function (arg0, arg1, arg2, arg3)
    {
        
        (asm.x60000f5_init(T))(arg0,arg1,arg2,arg3);
        
        return (asm.x60000f5_(T))(arg0,arg1,arg2,arg3);
    };
};;
asm.x60000f5_ = function (T)
{
    
    return function Sort(arg0, arg1, arg2, arg3)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        
        t0 = T;
        
        t1 = asm0["System.Array+<>c__DisplayClass23_0`1"](t0);
        
        t2 = asm0["System.NotImplementedException"]();
        
        t3 = asm0["System.Comparison`1"](t0);
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor() */
                /* IL_05: stloc.0  */
                
                loc0 = CILJS.newobj(t1,asm0.x60001fd,[null]);
                /* IL_06: ldloc.0  */
                /* IL_07: ldarg.3  */
                /* IL_08: stfld Managed.Reflection.GenericFieldInstance */
                
                loc0.comparer = arg3;
                /* IL_0D: nop  */
                /* IL_0E: ldarg.1  */
                /* IL_0F: ldc.i4.0  */
                /* IL_11: cgt.un  */
                /* IL_12: stloc.1  */
                
                loc1 = ((CILJS.unsignedValue(arg1) > CILJS.unsignedValue(0)) ? 1 : 0);
                /* IL_13: ldloc.1  */
                /* IL_14: brfalse.s IL_1C */
                
                if ((!(loc1))){
                    
                    __pos__ = 0x1C;
                    
                    continue;
                }
                /* IL_16: newobj Void .ctor() */
                /* IL_1B: throw  */
                
                throw CILJS.newobj(t2,asm0.x6000070,[null]);
                case 0x1C:
                /* IL_1C: ldarg.0  */
                /* IL_1D: ldarg.2  */
                /* IL_1E: ldloc.0  */
                /* IL_20: ldftn Int32 <Sort>b__0(T, T) */
                /* IL_25: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_2A: call Void SortImpl[T](T[], System.Int32, System.Comparison`1[T]) */
                
                (asm0.x60000f4(T))(arg0,arg2,CILJS.newobj(t3,asm0.x6000125,[null, loc0, asm0.x60001fe]));
                /* IL_2F: nop  */
                /* IL_30: ret  */
                
                return ;
            }
        }
    };
};/* static System.Void Array.Combine(Object,Object)*/

asm.x60000f6 = 
            function (a, b) {
                a.jsarr = a.jsarr.concat(b);
            }
            ;;/* static System.Void Array.Splice(Object,Int32,Int32)*/

asm.x60000f7 = 
            function (array, index, howMany) {
                    array.jsarr.splice(index, howMany);
            }
            ;;/* static System.Void Array.Reverse(Array,Int32,Int32)*/

asm.x60000f9 = function Reverse(arg0, arg1, arg2)
{
    var st_04;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var in_block_1;
    var loc3;
    var loc4;
    var loc5;
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: brtrue.s IL_0F */
            
            if (arg1){
                
                __pos__ = 0xF;
                
                continue;
            }
            /* IL_04: ldarg.2  */
            /* IL_05: ldarg.0  */
            /* IL_06: callvirt Int32 get_Length() */
            /* IL_0C: clt  */
            
            st_04 = ((arg2 < asm0.x60000e2(arg0)) ? 1 : 0);
            /* IL_0D: br.s IL_10 */
            
            __pos__ = 0x10;
            
            continue;
            case 0xF:
            /* IL_0F: ldc.i4.1  */
            
            st_04 = 1;
            case 0x10:
            /* IL_10: stloc.0  */
            
            loc0 = st_04;
            /* IL_11: ldloc.0  */
            /* IL_12: brfalse.s IL_5A */
            
            if ((!(loc0))){
                
                __pos__ = 0x5A;
                
                continue;
            }
            /* IL_14: nop  */
            /* IL_15: ldarg.1  */
            /* IL_16: stloc.1  */
            
            loc1 = arg1;
            /* IL_17: ldarg.1  */
            /* IL_18: ldarg.2  */
            /* IL_19: add  */
            /* IL_1A: ldc.i4.1  */
            /* IL_1B: sub  */
            /* IL_1C: stloc.2  */
            
            loc2 = (((arg1 + arg2) | 0) - 1) | 0;
            /* IL_1D: br.s IL_4D */
            
            __pos__ = 0x4D;
            
            continue;
            case 0x1F:
            case 0x4D:
            
            in_block_1 = true;
            
            if (__pos__ < 0x1F){
                
                __pos__ = 0x1F;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x1F:
                    /* IL_1F: nop  */
                    /* IL_20: ldarg.0  */
                    /* IL_21: ldloc.1  */
                    /* IL_22: callvirt Object GetValue(System.Int32) */
                    /* IL_27: stloc.3  */
                    
                    loc3 = asm0.x60000e7(arg0,loc1);
                    /* IL_28: ldarg.0  */
                    /* IL_29: ldloc.2  */
                    /* IL_2A: callvirt Object GetValue(System.Int32) */
                    /* IL_2F: stloc.s 4 */
                    
                    loc4 = asm0.x60000e7(arg0,loc2);
                    /* IL_31: ldarg.0  */
                    /* IL_32: ldloc.s 4 */
                    /* IL_34: ldloc.1  */
                    /* IL_35: callvirt Void SetValue(System.Object, System.Int32) */
                    
                    asm0.x6000106(arg0,loc4,loc1);
                    /* IL_3A: nop  */
                    /* IL_3B: ldarg.0  */
                    /* IL_3C: ldloc.3  */
                    /* IL_3D: ldloc.2  */
                    /* IL_3E: callvirt Void SetValue(System.Object, System.Int32) */
                    
                    asm0.x6000106(arg0,loc3,loc2);
                    /* IL_43: nop  */
                    /* IL_44: ldloc.1  */
                    /* IL_45: ldc.i4.1  */
                    /* IL_46: add  */
                    /* IL_47: stloc.1  */
                    
                    loc1 = (loc1 + 1) | 0;
                    /* IL_48: ldloc.2  */
                    /* IL_49: ldc.i4.1  */
                    /* IL_4A: sub  */
                    /* IL_4B: stloc.2  */
                    
                    loc2 = (loc2 - 1) | 0;
                    /* IL_4C: nop  */
                    case 0x4D:
                    /* IL_4D: ldloc.1  */
                    /* IL_4E: ldloc.2  */
                    /* IL_50: clt  */
                    /* IL_51: stloc.s 5 */
                    
                    loc5 = ((loc1 < loc2) ? 1 : 0);
                    /* IL_53: ldloc.s 5 */
                    /* IL_55: brtrue.s IL_1F */
                    
                    if (loc5){
                        
                        __pos__ = 0x1F;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x4D) || (__pos__ < 0x1F)){
                
                continue;
            }
            /* IL_57: nop  */
            /* IL_58: br.s IL_63 */
            
            __pos__ = 0x63;
            
            continue;
            case 0x5A:
            /* IL_5A: nop  */
            /* IL_5B: ldarg.0  */
            /* IL_5C: call Void Reverse(System.Array) */
            
            (Array.prototype.reverse.apply(arg0.jsarr));
            /* IL_61: nop  */
            /* IL_62: nop  */
            case 0x63:
            /* IL_63: ret  */
            
            return ;
        }
    }
};;/* static System.Void Array.Copy<T>(T[],T[],Int32)*/

asm.x60000fd = function (T)
{
    
    return function Copy(arg0, arg1, arg2)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var in_block_1;
        var loc1;
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldc.i4.0  */
                /* IL_02: stloc.0  */
                
                loc0 = 0;
                /* IL_03: br.s IL_19 */
                
                __pos__ = 0x19;
                
                continue;
                case 0x5:
                case 0x19:
                
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
                        /* IL_08: ldarg.0  */
                        /* IL_09: ldloc.0  */
                        /* IL_0A: ldelem T */
                        /* IL_0F: stelem T */
                        
                        (arg1.jsarr)[loc0] = (arg0.jsarr)[loc0];
                        /* IL_14: nop  */
                        /* IL_15: ldloc.0  */
                        /* IL_16: ldc.i4.1  */
                        /* IL_17: add  */
                        /* IL_18: stloc.0  */
                        
                        loc0 = (loc0 + 1) | 0;
                        case 0x19:
                        /* IL_19: ldloc.0  */
                        /* IL_1A: ldarg.2  */
                        /* IL_1C: clt  */
                        /* IL_1D: stloc.1  */
                        
                        loc1 = ((loc0 < arg2) ? 1 : 0);
                        /* IL_1E: ldloc.1  */
                        /* IL_1F: brtrue.s IL_05 */
                        
                        if (loc1){
                            
                            __pos__ = 0x5;
                            
                            continue;
                        }
                    }
                    
                    break;
                }
                
                if ((__pos__ > 0x19) || (__pos__ < 0x5)){
                    
                    continue;
                }
                /* IL_21: ret  */
                
                return ;
            }
        }
    };
};;/* System.Int32 Array.GetLowerBound(Int32)*/

asm.x60000fe = function GetLowerBound(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.0  */
    /* IL_02: stloc.0  */
    
    loc0 = 0;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/* System.Int32 Array.get_Rank()*/

asm.x60000ff = function get_Rank(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.1  */
    /* IL_02: stloc.0  */
    
    loc0 = 1;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/* static System.Void Array.Resize<T>(T[]&,Int32)*/

asm.x6000100 = function (T)
{
    
    return function Resize(arg0, arg1)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var loc4;
        var loc5;
        var loc0;
        var loc1;
        var loc6;
        var loc2;
        var loc3;
        var loc7;
        var in_block_1;
        var loc8;
        
        t0 = asm0["System.Exception"]();
        
        t1 = T;
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldarg.1  */
                /* IL_02: ldc.i4.0  */
                /* IL_04: clt  */
                /* IL_05: stloc.s 4 */
                
                loc4 = ((arg1 < 0) ? 1 : 0);
                /* IL_07: ldloc.s 4 */
                /* IL_09: brfalse.s IL_16 */
                
                if ((!(loc4))){
                    
                    __pos__ = 0x16;
                    
                    continue;
                }
                /* IL_0B: ldstr Argument out of range */
                /* IL_10: newobj Void .ctor(System.String) */
                /* IL_15: throw  */
                
                throw CILJS.newobj(t0,asm0.x6000076,[null, CILJS.newString("Argument out of range")]);
                case 0x16:
                /* IL_16: ldarg.0  */
                /* IL_17: ldind.ref  */
                /* IL_18: ldnull  */
                /* IL_1A: ceq  */
                /* IL_1B: stloc.s 5 */
                
                loc5 = ((arg0.r() === null) ? 1 : 0);
                /* IL_1D: ldloc.s 5 */
                /* IL_1F: brfalse.s IL_2C */
                
                if ((!(loc5))){
                    
                    __pos__ = 0x2C;
                    
                    continue;
                }
                /* IL_21: nop  */
                /* IL_22: ldarg.0  */
                /* IL_23: ldarg.1  */
                /* IL_24: newarr T */
                /* IL_29: stind.ref  */
                
                arg0.w(CILJS.newArray(t1,arg1));
                /* IL_2A: br.s IL_78 */
                
                __pos__ = 0x78;
                
                continue;
                case 0x2C:
                /* IL_2C: ldarg.0  */
                /* IL_2D: ldind.ref  */
                /* IL_2E: stloc.0  */
                
                loc0 = arg0.r();
                /* IL_2F: ldloc.0  */
                /* IL_30: ldlen  */
                /* IL_31: conv.i4  */
                /* IL_32: stloc.1  */
                
                loc1 = loc0.jsarr.length | 0;
                /* IL_33: ldloc.1  */
                /* IL_34: ldarg.1  */
                /* IL_36: ceq  */
                /* IL_37: stloc.s 6 */
                
                loc6 = ((loc1 === arg1) ? 1 : 0);
                /* IL_39: ldloc.s 6 */
                /* IL_3B: brfalse.s IL_3F */
                
                if ((!(loc6))){
                    
                    __pos__ = 0x3F;
                    
                    continue;
                }
                /* IL_3D: br.s IL_78 */
                
                __pos__ = 0x78;
                
                continue;
                case 0x3F:
                /* IL_3F: ldarg.1  */
                /* IL_40: newarr T */
                /* IL_45: stloc.2  */
                
                loc2 = CILJS.newArray(t1,arg1);
                /* IL_46: ldarg.1  */
                /* IL_47: ldloc.1  */
                /* IL_48: call Int32 Min(System.Int32, System.Int32) */
                /* IL_4D: stloc.3  */
                
                loc3 = Math.min(arg1, loc1);
                /* IL_4E: ldc.i4.0  */
                /* IL_4F: stloc.s 7 */
                
                loc7 = 0;
                /* IL_51: br.s IL_6A */
                
                __pos__ = 0x6A;
                
                continue;
                case 0x53:
                case 0x6A:
                
                in_block_1 = true;
                
                if (__pos__ < 0x53){
                    
                    __pos__ = 0x53;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x53:
                        /* IL_53: ldloc.2  */
                        /* IL_54: ldloc.s 7 */
                        /* IL_56: ldloc.0  */
                        /* IL_57: ldloc.s 7 */
                        /* IL_59: call T UnsafeLoad[T](T[], System.Int32) */
                        /* IL_5E: call T UnsafeStore[T](T[], System.Int32, T) */
                        /* IL_63: pop  */
                        
                        (loc2.jsarr[loc7] = (loc0.jsarr[loc7]));
                        /* IL_64: ldloc.s 7 */
                        /* IL_66: ldc.i4.1  */
                        /* IL_67: add  */
                        /* IL_68: stloc.s 7 */
                        
                        loc7 = (loc7 + 1) | 0;
                        case 0x6A:
                        /* IL_6A: ldloc.s 7 */
                        /* IL_6C: ldloc.3  */
                        /* IL_6E: clt  */
                        /* IL_6F: stloc.s 8 */
                        
                        loc8 = ((loc7 < loc3) ? 1 : 0);
                        /* IL_71: ldloc.s 8 */
                        /* IL_73: brtrue.s IL_53 */
                        
                        if (loc8){
                            
                            __pos__ = 0x53;
                            
                            continue;
                        }
                    }
                    
                    break;
                }
                
                if ((__pos__ > 0x6A) || (__pos__ < 0x53)){
                    
                    continue;
                }
                /* IL_75: ldarg.0  */
                /* IL_76: ldloc.2  */
                /* IL_77: stind.ref  */
                
                arg0.w(loc2);
                case 0x78:
                /* IL_78: ret  */
                
                return ;
            }
        }
    };
};;/* static System.Int32 Array.BinarySearch<T>(T[],Int32,Int32,T)*/

asm.x6000103 = function (T)
{
    
    return function BinarySearch(arg0, arg1, arg2, arg3)
    {
        var t0;
        var loc0;
        
        t0 = T;
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldarg.1  */
        /* IL_03: ldarg.2  */
        /* IL_04: ldarg.3  */
        /* IL_05: ldnull  */
        /* IL_06: call Int32 BinarySearch[T](T[], System.Int32, System.Int32, T, System.Collections.Generic.IComparer`1[T]) */
        /* IL_0B: stloc.0  */
        
        loc0 = (asm0.x6000104(T))(arg0,arg1,arg2,arg3,null);
        /* IL_0E: ldloc.0  */
        /* IL_0F: ret  */
        
        return loc0;
    };
};;/* static System.Int32 Array.BinarySearch<T>(T[],Int32,Int32,T,IComparer`1)*/

asm.x6000104_init = function (T)
{
    
    return function (arg0, arg1, arg2, arg3, arg4)
    {
        
        (asm0["System.Collections.Generic.IComparer`1"](T).init)();
    };
};;

asm.x6000104 = function (T)
{
    
    return function (arg0, arg1, arg2, arg3, arg4)
    {
        
        (asm.x6000104_init(T))(arg0,arg1,arg2,arg3,arg4);
        
        return (asm.x6000104_(T))(arg0,arg1,arg2,arg3,arg4);
    };
};;
asm.x6000104_ = function (T)
{
    
    return function BinarySearch(arg0, arg1, arg2, arg3, arg4)
    {
        var t0;
        var t1;
        var t2;
        var in_block_0;
        var __pos__;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        var loc7;
        var loc0;
        var loc1;
        var loc2;
        var in_block_1;
        var loc8;
        var loc9;
        var loc10;
        var loc11;
        var loc12;
        var __error_handled_1__;
        var loc13;
        
        t0 = asm0["System.Exception"]();
        
        t1 = T;
        
        t2 = asm0["System.Collections.Generic.IComparer`1"](t1);
        
        in_block_0 = true;
        
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                /* IL_01: ldarg.0  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.3  */
                
                loc3 = ((arg0 === null) ? 1 : 0);
                /* IL_06: ldloc.3  */
                /* IL_07: brfalse.s IL_14 */
                
                if ((!(loc3))){
                    
                    __pos__ = 0x14;
                    
                    continue;
                }
                /* IL_09: ldstr array */
                /* IL_0E: newobj Void .ctor(System.String) */
                /* IL_13: throw  */
                
                throw CILJS.newobj(t0,asm0.x6000076,[null, CILJS.newString("array")]);
                case 0x14:
                /* IL_14: ldarg.1  */
                /* IL_15: ldc.i4.0  */
                /* IL_17: clt  */
                /* IL_18: stloc.s 4 */
                
                loc4 = ((arg1 < 0) ? 1 : 0);
                /* IL_1A: ldloc.s 4 */
                /* IL_1C: brfalse.s IL_29 */
                
                if ((!(loc4))){
                    
                    __pos__ = 0x29;
                    
                    continue;
                }
                /* IL_1E: ldstr index is less than the lower bound of array. */
                /* IL_23: newobj Void .ctor(System.String) */
                /* IL_28: throw  */
                
                throw CILJS.newobj(t0,asm0.x6000076,[null, CILJS.newString("index is less than the lower bound of array.")]);
                case 0x29:
                /* IL_29: ldarg.2  */
                /* IL_2A: ldc.i4.0  */
                /* IL_2C: clt  */
                /* IL_2D: stloc.s 5 */
                
                loc5 = ((arg2 < 0) ? 1 : 0);
                /* IL_2F: ldloc.s 5 */
                /* IL_31: brfalse.s IL_3E */
                
                if ((!(loc5))){
                    
                    __pos__ = 0x3E;
                    
                    continue;
                }
                /* IL_33: ldstr Value has to be >= 0. */
                /* IL_38: newobj Void .ctor(System.String) */
                /* IL_3D: throw  */
                
                throw CILJS.newobj(t0,asm0.x6000076,[null, CILJS.newString("Value has to be >= 0.")]);
                case 0x3E:
                /* IL_3E: ldarg.1  */
                /* IL_3F: ldarg.0  */
                /* IL_40: ldlen  */
                /* IL_41: conv.i4  */
                /* IL_42: ldarg.2  */
                /* IL_43: sub  */
                /* IL_45: cgt  */
                /* IL_46: stloc.s 6 */
                
                loc6 = ((arg1 > (((arg0.jsarr.length | 0) - arg2) | 0)) ? 1 : 0);
                /* IL_48: ldloc.s 6 */
                /* IL_4A: brfalse.s IL_57 */
                
                if ((!(loc6))){
                    
                    __pos__ = 0x57;
                    
                    continue;
                }
                /* IL_4C: ldstr index and length do not specify a valid range in array. */
                /* IL_51: newobj Void .ctor(System.String) */
                /* IL_56: throw  */
                
                throw CILJS.newobj(t0,asm0.x6000076,[null, CILJS.newString("index and length do not specify a valid range in array.")]);
                case 0x57:
                /* IL_57: ldarg.s 4 */
                /* IL_59: ldnull  */
                /* IL_5B: ceq  */
                /* IL_5C: stloc.s 7 */
                
                loc7 = ((arg4 === null) ? 1 : 0);
                /* IL_5E: ldloc.s 7 */
                /* IL_60: brfalse.s IL_78 */
                
                if ((!(loc7))){
                    
                    __pos__ = 0x78;
                    
                    continue;
                }
                /* IL_62: ldtoken T */
                /* IL_67: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_6C: call IComparer GetComparer(System.Type) */
                /* IL_71: call IComparer`1 UnsafeCast[System.Collections.Generic.IComparer`1[T]](System.Object) */
                /* IL_76: starg.s 4 */
                
                arg4 = asm.GetDefaultComparer(asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t1)).ctor)();
                case 0x78:
                /* IL_78: ldarg.1  */
                /* IL_79: stloc.0  */
                
                loc0 = arg1;
                /* IL_7A: ldarg.1  */
                /* IL_7B: ldarg.2  */
                /* IL_7C: add  */
                /* IL_7D: ldc.i4.1  */
                /* IL_7E: sub  */
                /* IL_7F: stloc.1  */
                
                loc1 = (((arg1 + arg2) | 0) - 1) | 0;
                /* IL_80: ldc.i4.0  */
                /* IL_81: stloc.2  */
                
                loc2 = 0;
                
                try {
                    
                    in_block_1 = true;
                    
                    if (__pos__ < 0x82){
                        
                        __pos__ = 0x82;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x82:
                            /* IL_82: nop  */
                            /* IL_83: br.s IL_C7 */
                            
                            __pos__ = 0xC7;
                            
                            continue;
                            case 0x85:
                            /* IL_85: nop  */
                            /* IL_86: ldloc.0  */
                            /* IL_87: ldloc.1  */
                            /* IL_88: ldloc.0  */
                            /* IL_89: sub  */
                            /* IL_8A: ldc.i4.2  */
                            /* IL_8B: div  */
                            /* IL_8C: add  */
                            /* IL_8D: stloc.s 8 */
                            
                            loc8 = (loc0 + ((((loc1 - loc0) | 0) / 2) | 0)) | 0;
                            /* IL_8F: ldarg.s 4 */
                            /* IL_91: ldarg.0  */
                            /* IL_92: ldloc.s 8 */
                            /* IL_94: ldelem T */
                            /* IL_99: ldarg.3  */
                            /* IL_9A: callvirt Int32 Compare(T, T) */
                            /* IL_9F: stloc.2  */
                            
                            loc2 = (((arg4.ifacemap)[t2])[t1].x600018c)(CILJS.convertBoxToPointerAsNeeded(arg4),(arg0.jsarr)[loc8],arg3);
                            /* IL_A0: ldloc.2  */
                            /* IL_A1: ldc.i4.0  */
                            /* IL_A3: ceq  */
                            /* IL_A4: stloc.s 9 */
                            
                            loc9 = ((loc2 === 0) ? 1 : 0);
                            /* IL_A6: ldloc.s 9 */
                            /* IL_A8: brfalse.s IL_B0 */
                            
                            if ((!(loc9))){
                                
                                __pos__ = 0xB0;
                                
                                continue;
                            }
                            /* IL_AA: ldloc.s 8 */
                            /* IL_AC: stloc.s 10 */
                            
                            loc10 = loc8;
                            /* IL_AE: leave.s IL_ED */
                            
                            in_block_1 = false;
                            
                            __pos__ = 0xED;
                            
                            continue;
                            case 0xB0:
                            /* IL_B0: ldloc.2  */
                            /* IL_B1: ldc.i4.0  */
                            /* IL_B3: cgt  */
                            /* IL_B4: stloc.s 11 */
                            
                            loc11 = ((loc2 > 0) ? 1 : 0);
                            /* IL_B6: ldloc.s 11 */
                            /* IL_B8: brfalse.s IL_C1 */
                            
                            if ((!(loc11))){
                                
                                __pos__ = 0xC1;
                                
                                continue;
                            }
                            /* IL_BA: ldloc.s 8 */
                            /* IL_BC: ldc.i4.1  */
                            /* IL_BD: sub  */
                            /* IL_BE: stloc.1  */
                            
                            loc1 = (loc8 - 1) | 0;
                            /* IL_BF: br.s IL_C6 */
                            
                            __pos__ = 0xC6;
                            
                            continue;
                            case 0xC1:
                            /* IL_C1: ldloc.s 8 */
                            /* IL_C3: ldc.i4.1  */
                            /* IL_C4: add  */
                            /* IL_C5: stloc.0  */
                            
                            loc0 = (loc8 + 1) | 0;
                            case 0xC6:
                            /* IL_C6: nop  */
                            case 0xC7:
                            /* IL_C7: ldloc.0  */
                            /* IL_C8: ldloc.1  */
                            /* IL_CA: cgt  */
                            /* IL_CB: ldc.i4.0  */
                            /* IL_CD: ceq  */
                            /* IL_CE: stloc.s 12 */
                            
                            loc12 = ((((loc0 > loc1) ? 1 : 0) === 0) ? 1 : 0);
                            /* IL_D0: ldloc.s 12 */
                            /* IL_D2: brtrue.s IL_85 */
                            
                            if (loc12){
                                
                                __pos__ = 0x85;
                                
                                continue;
                            }
                            /* IL_D4: nop  */
                            /* IL_D5: leave.s IL_E7 */
                            
                            in_block_1 = false;
                            
                            __pos__ = 0xE7;
                            
                            continue;
                        }
                    }
                }
                
                catch (__error__) {
                    
                    __error_handled_1__ = false;
                    
                    if ((!(__error_handled_1__)) && (__error__ instanceof asm0["System.Exception"]())){
                        
                        in_block_1 = true;
                        
                        if (__pos__ < 0xD7){
                            
                            __pos__ = 0xD7;
                        }
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0xD7:
                                
                                st_4D = __error__;
                                
                                __error_handled_1__ = true;
                                /* IL_D7: stloc.s 13 */
                                
                                loc13 = st_4D;
                                /* IL_D9: nop  */
                                /* IL_DA: ldstr Comparer threw an exception. */
                                /* IL_DF: ldloc.s 13 */
                                /* IL_E1: newobj Void .ctor(System.String, System.Exception) */
                                /* IL_E6: throw  */
                                
                                throw CILJS.newobj(t0,asm0.x6000077,[null, CILJS.newString("Comparer threw an exception."), loc13]);
                            }
                        }
                    }
                    
                    if ((!(__error_handled_1__))){
                        
                        throw __error__;
                    }
                }
                
                continue;
                case 0xE7:
                /* IL_E7: ldloc.0  */
                /* IL_E8: not  */
                /* IL_E9: stloc.s 10 */
                
                loc10 = (~(loc0));
                case 0xED:
                /* IL_ED: ldloc.s 10 */
                /* IL_EF: ret  */
                
                return loc10;
            }
        }
    };
};/* static System.Array Array.CreateInstance(Type,Int32)*/

asm.x6000105 = function (elementType, length) { return CILJS.newArray(elementType.ctor, length); };;/* System.Void Array.SetValue(Object,Int32)*/

asm.x6000106 = CILJS.arraySetValue;;/*  Array..ctor()*/

asm.x6000107 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Collections.Generic.IEnumerator`1[T] Array`1.GetEnumerator()*/

asm.x6000109_init = function (arg0)
{
    
    (asm0["System.Array`1+ArrayEnumerator"](((arg0.constructor.GenericArguments)["asm0.t200002d"])[0]).init)();
};;

asm.x6000109 = function (arg0)
{
    
    asm.x6000109_init(arg0);
    
    return asm.x6000109_(arg0);
};;
asm.x6000109_ = function GetEnumerator(arg0)
{
    var t0;
    var t1;
    var loc0;
    
    t0 = ((arg0.constructor.GenericArguments)["asm0.t200002d"])[0];
    
    t1 = asm0["System.Array`1+ArrayEnumerator"](t0);
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: newobj Void .ctor(System.Array`1[T]) */
    /* IL_07: stloc.0  */
    
    loc0 = CILJS.newobj(t1,asm0.x60001ff,[null, arg0]);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};/* System.Collections.IEnumerator Array`1.GetEnumeratorImpl()*/

asm.x600010a = function GetEnumeratorImpl(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call IEnumerator`1 GetEnumerator() */
    /* IL_07: stloc.0  */
    
    loc0 = asm0.x6000109(arg0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* System.Int32 Array`1.System.Collections.Generic.ICollection<T>.get_Count()*/

asm.x600010b = function System_Collections_Generic_ICollection_T__get_Count(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call Int32 get_Length() */
    /* IL_07: stloc.0  */
    
    loc0 = asm0.x60000e2(arg0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* System.Boolean Array`1.System.Collections.Generic.ICollection<T>.get_IsReadOnly()*/

asm.x600010c = function System_Collections_Generic_ICollection_T__get_IsReadOnly(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.1  */
    /* IL_02: stloc.0  */
    
    loc0 = 1;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/* System.Void Array`1.System.Collections.Generic.ICollection<T>.Add(T)*/

asm.x600010d_init = function (arg0, arg1)
{
    
    (asm0["System.NotSupportedException"]().init)();
    
    asm.x600010d = asm.x600010d_;
};;

asm.x600010d = function (arg0, arg1)
{
    
    asm.x600010d_init(arg0,arg1);
    
    return asm.x600010d_(arg0,arg1);
};;
asm.x600010d_ = function System_Collections_Generic_ICollection_T__Add(arg0, arg1)
{
    var t0;
    
    t0 = asm0["System.NotSupportedException"]();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: throw  */
    
    throw CILJS.newobj(t0,asm0.x6000134,[null]);
};/* System.Void Array`1.System.Collections.Generic.ICollection<T>.Clear()*/

asm.x600010e_init = function (arg0)
{
    
    (asm0["System.NotSupportedException"]().init)();
    
    asm.x600010e = asm.x600010e_;
};;

asm.x600010e = function (arg0)
{
    
    asm.x600010e_init(arg0);
    
    return asm.x600010e_(arg0);
};;
asm.x600010e_ = function System_Collections_Generic_ICollection_T__Clear(arg0)
{
    var t0;
    
    t0 = asm0["System.NotSupportedException"]();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: throw  */
    
    throw CILJS.newobj(t0,asm0.x6000134,[null]);
};/* System.Boolean Array`1.System.Collections.Generic.ICollection<T>.Contains(T)*/

asm.x600010f_init = function (arg0, arg1)
{
    
    (asm0["System.Array`1"](((arg0.constructor.GenericArguments)["asm0.t200002d"])[0]).init)();
};;

asm.x600010f = function (arg0, arg1)
{
    
    asm.x600010f_init(arg0,arg1);
    
    return asm.x600010f_(arg0,arg1);
};;
asm.x600010f_ = function System_Collections_Generic_ICollection_T__Contains(arg0, arg1)
{
    var t0;
    var t1;
    var loc0;
    
    t0 = ((arg0.constructor.GenericArguments)["asm0.t200002d"])[0];
    
    t1 = asm0["System.Array`1"](t0);
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: castclass T[] */
    /* IL_07: ldarg.1  */
    /* IL_08: ldc.i4.0  */
    /* IL_09: ldarg.0  */
    /* IL_0A: call Int32 get_Length() */
    /* IL_0F: call Int32 IndexOf[T](T[], T, System.Int32, System.Int32) */
    /* IL_14: ldc.i4.m1  */
    /* IL_16: ceq  */
    /* IL_17: ldc.i4.0  */
    /* IL_19: ceq  */
    /* IL_1A: stloc.0  */
    
    loc0 = (((((asm0.x60000eb(((arg0.constructor.GenericArguments)["asm0.t200002d"])[0]))(CILJS.castClass(arg0,t1),arg1,0,asm0.x60000e2(arg0)) === -1) ? 1 : 0) === 0) ? 1 : 0);
    /* IL_1D: ldloc.0  */
    /* IL_1E: ret  */
    
    return loc0;
};/* System.Void Array`1.System.Collections.Generic.ICollection<T>.CopyTo(T[],Int32)*/

asm.x6000110_init = function (arg0, arg1, arg2)
{
    
    (asm0["System.Array`1"](((arg0.constructor.GenericArguments)["asm0.t200002d"])[0]).init)();
};;

asm.x6000110 = function (arg0, arg1, arg2)
{
    
    asm.x6000110_init(arg0,arg1,arg2);
    
    return asm.x6000110_(arg0,arg1,arg2);
};;
asm.x6000110_ = function System_Collections_Generic_ICollection_T__CopyTo(arg0, arg1, arg2)
{
    var t0;
    var t1;
    var in_block_0;
    var __pos__;
    var loc2;
    var loc0;
    var loc1;
    var loc3;
    var loc4;
    var in_block_1;
    var loc5;
    
    t0 = ((arg0.constructor.GenericArguments)["asm0.t200002d"])[0];
    
    t1 = asm0["System.Array`1"](t0);
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.2  */
            /* IL_02: ldarg.0  */
            /* IL_03: call Int32 get_Length() */
            /* IL_08: ldarg.1  */
            /* IL_09: ldlen  */
            /* IL_0A: conv.i4  */
            /* IL_0B: sub  */
            /* IL_0D: clt  */
            /* IL_0E: stloc.2  */
            
            loc2 = ((arg2 < ((asm0.x60000e2(arg0) - (arg1.jsarr.length | 0)) | 0)) ? 1 : 0);
            /* IL_0F: ldloc.2  */
            /* IL_10: brfalse.s IL_1D */
            
            if ((!(loc2))){
                
                __pos__ = 0x1D;
                
                continue;
            }
            /* IL_12: ldstr System.ArgumentException */
            /* IL_17: call Exception GetException(System.String) */
            /* IL_1C: throw  */
            
            throw asm0.x60000ec(CILJS.newString("System.ArgumentException"));
            case 0x1D:
            /* IL_1D: ldarg.0  */
            /* IL_1E: call Int32 get_Length() */
            /* IL_23: stloc.0  */
            
            loc0 = asm0.x60000e2(arg0);
            /* IL_24: ldarg.0  */
            /* IL_25: castclass T[] */
            /* IL_2A: stloc.1  */
            
            loc1 = CILJS.castClass(arg0,t1);
            /* IL_2B: ldc.i4.0  */
            /* IL_2C: stloc.3  */
            
            loc3 = 0;
            /* IL_2D: ldarg.2  */
            /* IL_2E: stloc.s 4 */
            
            loc4 = arg2;
            /* IL_30: br.s IL_4D */
            
            __pos__ = 0x4D;
            
            continue;
            case 0x32:
            case 0x4D:
            
            in_block_1 = true;
            
            if (__pos__ < 0x32){
                
                __pos__ = 0x32;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x32:
                    /* IL_32: nop  */
                    /* IL_33: ldarg.1  */
                    /* IL_34: ldloc.s 4 */
                    /* IL_36: ldloc.1  */
                    /* IL_37: ldloc.3  */
                    /* IL_38: ldelem T */
                    /* IL_3D: stelem T */
                    
                    (arg1.jsarr)[loc4] = (loc1.jsarr)[loc3];
                    /* IL_42: nop  */
                    /* IL_43: ldloc.s 4 */
                    /* IL_45: ldc.i4.1  */
                    /* IL_46: add  */
                    /* IL_47: stloc.s 4 */
                    
                    loc4 = (loc4 + 1) | 0;
                    /* IL_49: ldloc.3  */
                    /* IL_4A: ldc.i4.1  */
                    /* IL_4B: add  */
                    /* IL_4C: stloc.3  */
                    
                    loc3 = (loc3 + 1) | 0;
                    case 0x4D:
                    /* IL_4D: ldloc.3  */
                    /* IL_4E: ldloc.0  */
                    /* IL_50: clt  */
                    /* IL_51: stloc.s 5 */
                    
                    loc5 = ((loc3 < loc0) ? 1 : 0);
                    /* IL_53: ldloc.s 5 */
                    /* IL_55: brtrue.s IL_32 */
                    
                    if (loc5){
                        
                        __pos__ = 0x32;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x4D) || (__pos__ < 0x32)){
                
                continue;
            }
            /* IL_57: ret  */
            
            return ;
        }
    }
};/* System.Boolean Array`1.System.Collections.Generic.ICollection<T>.Remove(T)*/

asm.x6000111_init = function (arg0, arg1)
{
    
    (asm0["System.NotSupportedException"]().init)();
    
    asm.x6000111 = asm.x6000111_;
};;

asm.x6000111 = function (arg0, arg1)
{
    
    asm.x6000111_init(arg0,arg1);
    
    return asm.x6000111_(arg0,arg1);
};;
asm.x6000111_ = function System_Collections_Generic_ICollection_T__Remove(arg0, arg1)
{
    var t0;
    
    t0 = asm0["System.NotSupportedException"]();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: throw  */
    
    throw CILJS.newobj(t0,asm0.x6000134,[null]);
};/*  Array`1..ctor()*/

asm.x6000112 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000107(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.String Byte.ToString()*/

asm.x6000113 = function ToString(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Byte"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.u1  */
    /* IL_03: box System.Byte */
    /* IL_08: ldc.i4.8  */
    /* IL_09: call String UnsignedPrimitiveToString(System.Object, System.Int32) */
    /* IL_0E: stloc.0  */
    
    loc0 = asm0.x6000030(CILJS.makeBox(arg0.r(),t0),8);
    /* IL_11: ldloc.0  */
    /* IL_12: ret  */
    
    return loc0;
};;/* System.Int32 Byte.CompareTo(Object)*/

asm.x6000114 = function CompareTo(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: unbox.any System.Byte */
    /* IL_08: call Int32 CompareTo(System.Byte) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x6000115(arg0,CILJS.unboxAny(arg1,asm0["System.Byte"]()));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 Byte.CompareTo(Byte)*/

asm.x6000115 = function CompareTo(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.u1  */
            /* IL_03: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_04: ldloc.0  */
            /* IL_05: ldarg.1  */
            /* IL_07: clt  */
            /* IL_08: stloc.1  */
            
            loc1 = ((loc0 < arg1) ? 1 : 0);
            /* IL_09: ldloc.1  */
            /* IL_0A: brfalse.s IL_10 */
            
            if ((!(loc1))){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_0C: ldc.i4.m1  */
            /* IL_0D: stloc.2  */
            
            loc2 = -1;
            /* IL_0E: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x10:
            /* IL_10: ldloc.0  */
            /* IL_11: ldarg.1  */
            /* IL_13: cgt  */
            /* IL_14: stloc.3  */
            
            loc3 = ((loc0 > arg1) ? 1 : 0);
            /* IL_15: ldloc.3  */
            /* IL_16: brfalse.s IL_1C */
            
            if ((!(loc3))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_18: ldc.i4.1  */
            /* IL_19: stloc.2  */
            
            loc2 = 1;
            /* IL_1A: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x1C:
            /* IL_1C: ldc.i4.0  */
            /* IL_1D: stloc.2  */
            
            loc2 = 0;
            case 0x20:
            /* IL_20: ldloc.2  */
            /* IL_21: ret  */
            
            return loc2;
        }
    }
};;/* System.Boolean Byte.Equals(Byte)*/

asm.x6000116 = function Equals(arg0, arg1)
{
    var loc0;
    var loc1;
    var loc2;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.u1  */
    /* IL_03: stloc.0  */
    
    loc0 = arg0.r();
    /* IL_04: ldarg.1  */
    /* IL_05: stloc.1  */
    
    loc1 = arg1;
    /* IL_06: ldloc.0  */
    /* IL_07: ldloc.1  */
    /* IL_09: ceq  */
    /* IL_0A: stloc.2  */
    
    loc2 = ((loc0 === loc1) ? 1 : 0);
    /* IL_0D: ldloc.2  */
    /* IL_0E: ret  */
    
    return loc2;
};;/* System.Boolean Byte.Equals(Object)*/

asm.x6000117 = function Equals(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.Byte"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: isinst System.Byte */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: ldc.i4.0  */
            /* IL_0C: ceq  */
            /* IL_0D: stloc.0  */
            
            loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_0E: ldloc.0  */
            /* IL_0F: brfalse.s IL_15 */
            
            if ((!(loc0))){
                
                __pos__ = 0x15;
                
                continue;
            }
            /* IL_11: ldc.i4.0  */
            /* IL_12: stloc.1  */
            
            loc1 = 0;
            /* IL_13: br.s IL_24 */
            
            __pos__ = 0x24;
            
            continue;
            case 0x15:
            /* IL_15: ldarg.0  */
            /* IL_16: ldarg.1  */
            /* IL_17: unbox.any System.Byte */
            /* IL_1C: call Boolean Equals(System.Byte) */
            /* IL_21: stloc.1  */
            
            loc1 = asm0.x6000116(arg0,CILJS.unboxAny(arg1,t0));
            case 0x24:
            /* IL_24: ldloc.1  */
            /* IL_25: ret  */
            
            return loc1;
        }
    }
};;/* System.Int32 Byte.GetHashCode()*/

asm.x6000118 = function GetHashCode(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.u1  */
    /* IL_03: stloc.0  */
    
    loc0 = arg0.r();
    /* IL_06: ldloc.0  */
    /* IL_07: ret  */
    
    return loc0;
};;/* System.Boolean ValueType.Equals(Object)*/

asm.x6000119 = function Equals(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: call Boolean ValueTypeEquals(System.Object, System.Object) */
    /* IL_08: stloc.0  */
    
    loc0 = CILJS.valueEquals(arg0.r(), arg1.boxed);
    /* IL_0B: ldloc.0  */
    /* IL_0C: ret  */
    
    return loc0;
};;/*  ValueType..ctor()*/

asm.x600011b = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* TResult Func`2.Invoke(T)*/

asm.x600011d = CILJS.delegateInvoke;;/* System.IAsyncResult Func`2.BeginInvoke(T,AsyncCallback,Object)*/

asm.x600011e = CILJS.delegateBeginInvoke;;/* TResult Func`2.EndInvoke(IAsyncResult)*/

asm.x600011f = CILJS.delegateEndInvoke;;/*  Func`2..ctor(Object,IntPtr)*/

asm.x600011c = CILJS.delegateCtor;;/* System.Void AsyncCallback.Invoke(IAsyncResult)*/

asm.x6000121 = CILJS.delegateInvoke;;/* System.IAsyncResult AsyncCallback.BeginInvoke(IAsyncResult,AsyncCallback,Object)*/

asm.x6000122 = CILJS.delegateBeginInvoke;;/* System.Void AsyncCallback.EndInvoke(IAsyncResult)*/

asm.x6000123 = CILJS.delegateEndInvoke;;/*  AsyncCallback..ctor(Object,IntPtr)*/

asm.x6000120 = CILJS.delegateCtor;;/*  NullReferenceException..ctor()*/

asm.x6000124 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000022(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Int32 Comparison`1.Invoke(T,T)*/

asm.x6000126 = CILJS.delegateInvoke;;/* System.IAsyncResult Comparison`1.BeginInvoke(T,T,AsyncCallback,Object)*/

asm.x6000127 = CILJS.delegateBeginInvoke;;/* System.Int32 Comparison`1.EndInvoke(IAsyncResult)*/

asm.x6000128 = CILJS.delegateEndInvoke;;/*  Comparison`1..ctor(Object,IntPtr)*/

asm.x6000125 = CILJS.delegateCtor;;/* static System.IAsyncResult AsyncResult.CreateAsyncResult()*/

asm.x600012d_init = function ()
{
    
    (asm0["System.AsyncResult"]().init)();
    
    asm.x600012d = asm.x600012d_;
};;

asm.x600012d = function ()
{
    
    asm.x600012d_init();
    
    return asm.x600012d_();
};;
asm.x600012d_ = function CreateAsyncResult()
{
    var t0;
    var loc0;
    
    t0 = asm0["System.AsyncResult"]();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newobj(t0,asm0.x6000132,[null]);
    /* IL_09: ldloc.0  */
    /* IL_0A: ret  */
    
    return loc0;
};
asm.CreateAsyncResult = asm.x600012d;/* System.Boolean AsyncResult.get_IsCompleted()*/

asm.x600012e = function get_IsCompleted(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.1  */
    /* IL_02: stloc.0  */
    
    loc0 = 1;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/* System.Threading.WaitHandle AsyncResult.get_AsyncWaitHandle()*/

asm.x600012f = function get_AsyncWaitHandle(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldnull  */
    /* IL_02: stloc.0  */
    
    loc0 = null;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/* System.Object AsyncResult.get_AsyncState()*/

asm.x6000130 = function get_AsyncState(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld Object asyncState */
    /* IL_07: stloc.0  */
    
    loc0 = arg0.asyncState;
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* System.Boolean AsyncResult.get_CompletedSynchronously()*/

asm.x6000131 = function get_CompletedSynchronously(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.1  */
    /* IL_02: stloc.0  */
    
    loc0 = 1;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/*  AsyncResult..ctor()*/

asm.x6000132 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  NotSupportedException..ctor()*/

asm.x6000134 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldstr Operation not supported */
    /* IL_06: call Void .ctor(System.String) */
    
    asm0.x6000076(arg0,CILJS.newString("Operation not supported"));
    /* IL_0B: nop  */
    /* IL_0C: nop  */
    /* IL_0D: ret  */
    
    return ;
};;/*  NotSupportedException..ctor(String)*/

asm.x6000135 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldarg.1  */
    /* IL_02: call Void .ctor(System.String) */
    
    asm0.x6000076(arg0,arg1);
    /* IL_07: nop  */
    /* IL_08: nop  */
    /* IL_09: ret  */
    
    return ;
};;/* System.String UIntPtr.ToString()*/

asm.x6000136_init = function (arg0)
{
    
    (asm0["System.UIntPtr"]().init)();
    
    asm.x6000136 = asm.x6000136_;
};;

asm.x6000136 = function (arg0)
{
    
    asm.x6000136_init(arg0);
    
    return asm.x6000136_(arg0);
};;
asm.x6000136_ = function ToString(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.UIntPtr"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i  */
    /* IL_03: box System.UIntPtr */
    /* IL_08: call String SignedPrimitiveToString(System.Object) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x600002f(CILJS.makeBox(arg0.r(),t0));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};/*  DivideByZeroException..ctor()*/

asm.x6000137 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000075(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.String UInt64.ToString()*/

asm.x6000138 = function ToString(arg0)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var in_block_1;
    var loc3;
    var loc4;
    var loc5;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.i8  */
            /* IL_03: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_04: ldc.i4.s 10 */
            /* IL_06: conv.i8  */
            /* IL_07: stloc.1  */
            
            loc1 = CILJS.convI8(10);
            /* IL_08: ldstr  */
            /* IL_0D: stloc.2  */
            
            loc2 = CILJS.newString("");
            case 0xE:
            
            in_block_1 = true;
            
            if (__pos__ < 0xE){
                
                __pos__ = 0xE;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0xE:
                    /* IL_0E: nop  */
                    /* IL_0F: ldloc.0  */
                    /* IL_10: ldloc.1  */
                    /* IL_11: rem.un  */
                    /* IL_12: stloc.3  */
                    
                    loc3 = asm0.UInt64_Modulus(loc0,loc1);
                    /* IL_13: ldloc.3  */
                    /* IL_14: call String GetLowString(System.UInt64) */
                    /* IL_19: ldloc.2  */
                    /* IL_1A: call String Concat(System.String, System.String) */
                    /* IL_1F: stloc.2  */
                    
                    loc2 = asm0.x60000bb(CILJS.newString(loc3[0].toString()),loc2);
                    /* IL_20: ldloc.0  */
                    /* IL_21: ldloc.1  */
                    /* IL_22: div.un  */
                    /* IL_23: stloc.0  */
                    
                    loc0 = asm0.UInt64_Division(loc0,loc1);
                    /* IL_24: nop  */
                    /* IL_25: ldloc.0  */
                    /* IL_26: ldc.i4.0  */
                    /* IL_27: conv.i8  */
                    /* IL_29: cgt.un  */
                    /* IL_2A: stloc.s 4 */
                    
                    loc4 = asm0.UInt64_GreaterThan(loc0,CILJS.convI8(0));
                    /* IL_2C: ldloc.s 4 */
                    /* IL_2E: brtrue.s IL_0E */
                    
                    if (loc4){
                        
                        __pos__ = 0xE;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0xE) || (__pos__ < 0xE)){
                
                continue;
            }
            /* IL_30: ldloc.2  */
            /* IL_31: stloc.s 5 */
            
            loc5 = loc2;
            /* IL_35: ldloc.s 5 */
            /* IL_37: ret  */
            
            return loc5;
        }
    }
};;/* static System.UInt64 UInt64.op_RightShift(UInt64,Int32)*/

asm.x600013a = 
            function UInt64_RightShift(a, n) {
                n = n & 0x3f;

                var maxShift = 8;
                if (n > maxShift) {
                    return asm0.UInt64_RightShift(
                        asm0.UInt64_RightShift(a, maxShift), n - maxShift);
                }

                var m = (1 << n) - 1;

                var br = (a[1] & m) << (32 - n);
                var bt = a[1] >>> n;
                var at = a[0] >>> n;

                return new Uint32Array([ at | br, bt ]);
            };;
asm.UInt64_RightShift = asm.x600013a;/* static System.UInt64 UInt64.op_Division(UInt64,UInt64)*/

asm.x600013b = 
            function UInt64_Division(n, d) {

                if (d[0] == 0 && d[1] == 0)
                    throw new Error('System.DivideByZeroException');
      
                var q = new Uint32Array([0, 0]);
                var r = new Uint32Array([0, 0]);

                for (var i = 63; i >= 0; i--) {
                    r = asm0.XInt64_LeftShift(r, 1);

                    var li = i < 32 ? 0 : 1;
                    var s = (i - 32 * li);

                    r[0] |= (n[li] & (1 << s)) >>> s;

                    if (asm0.UInt64_GreaterThanOrEqual(r, d)) {
                        r = asm0.XInt64_Subtraction(r, d);
                        q[li] |= 1 << s;
                    }
                }

                return q;    
            };;
asm.UInt64_Division = asm.x600013b;/* static System.UInt64 UInt64.op_Multiply(UInt64,UInt64)*/

asm.x600013c = 
            function XInt64_Multiplication(a, b) {
                if (a[0] == 0 && a[1] == 0)
                    return a;

                if (b[0] == 0 && b[1] == 0)
                    return b;

                if (asm0.UInt64_GreaterThan(a, b))
                    return asm0.XInt64_Multiplication(b, a);

                var s = new Uint32Array([0, 0]);

                if ((a[0] & 1) == 1) {
                    s[0] = b[0];
                    s[1] = b[1];
                }

                var l = new Uint32Array([1, 0]);

                while (!asm0.XInt64_Equality(a, l)) {
                    a = asm0.UInt64_RightShift(a, 1);
                    b = asm0.XInt64_LeftShift(b, 1);

                    if ((a[0] & 1) == 1)
                        s = asm0.XInt64_Addition(b, s);
                }

                return s;
            };;
asm.XInt64_Multiplication = asm.x600013c;/* static System.Boolean UInt64.op_GreaterThanOrEqual(UInt64,UInt64)*/

asm.x600013d = 
            function UInt64_GreaterThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] >= b[0] ? 1: 0;
            };;
asm.UInt64_GreaterThanOrEqual = asm.x600013d;/* static System.Boolean UInt64.op_LessThanOrEqual(UInt64,UInt64)*/

asm.x600013e = 
            function UInt64_LessThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] <= b[0] ? 1: 0;
            };;
asm.UInt64_LessThanOrEqual = asm.x600013e;/* static System.Boolean UInt64.op_GreaterThan(UInt64,UInt64)*/

asm.x600013f = 
            function UInt64_GreaterThan (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] > b[0] ? 1: 0;
            };;
asm.UInt64_GreaterThan = asm.x600013f;/* static System.Boolean UInt64.op_LessThan(UInt64,UInt64)*/

asm.x6000140 = 
            function UInt64_LessThan(a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] < b[0] ? 1: 0;
            };;
asm.UInt64_LessThan = asm.x6000140;/* static System.UInt64 UInt64.op_Modulus(UInt64,UInt64)*/

asm.x6000141 = 
            function UInt64_Modulus (n, d) {
                var greaterThanOrEqual = asm0.UInt64_GreaterThanOrEqual,
                    subtraction = asm0.XInt64_Subtraction,
                    leftShift = asm0.XInt64_LeftShift;

                if (d[0] == 0 && d[1] == 0)
                    throw new Error("System.DivideByZeroException");

                var r = new Uint32Array([0, 0]);

                for (var i = 63; i >= 0; i--) {
                    r = leftShift(r, 1);

                    var li = i < 32 ? 0 : 1;
                    var s = (i - 32 * li);

                    r[0] |= (n[li] & (1 << s)) >>> s;

                    if (greaterThanOrEqual(r, d)) {
                        r = subtraction(r, d);
                    }
                }

                return r;
            };;
asm.UInt64_Modulus = asm.x6000141;/* System.Int32 UInt64.GetHashCode()*/

asm.x6000142 = function GetHashCode(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i8  */
    /* IL_03: call Int32 GetLow(System.UInt64) */
    /* IL_08: stloc.0  */
    
    loc0 = arg0.r()[0];
    /* IL_0B: ldloc.0  */
    /* IL_0C: ret  */
    
    return loc0;
};;/* System.Int32 UInt64.CompareTo(Object)*/

asm.x6000144 = function CompareTo(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: unbox.any System.UInt64 */
    /* IL_08: call Int32 CompareTo(System.UInt64) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x6000145(arg0,CILJS.unboxAny(arg1,asm0["System.UInt64"]()));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 UInt64.CompareTo(UInt64)*/

asm.x6000145 = function CompareTo(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.i8  */
            /* IL_03: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_04: ldloc.0  */
            /* IL_05: ldarg.1  */
            /* IL_07: clt.un  */
            /* IL_08: stloc.1  */
            
            loc1 = asm0.UInt64_LessThan(loc0,arg1);
            /* IL_09: ldloc.1  */
            /* IL_0A: brfalse.s IL_10 */
            
            if ((!(loc1))){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_0C: ldc.i4.m1  */
            /* IL_0D: stloc.2  */
            
            loc2 = -1;
            /* IL_0E: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x10:
            /* IL_10: ldloc.0  */
            /* IL_11: ldarg.1  */
            /* IL_13: cgt.un  */
            /* IL_14: stloc.3  */
            
            loc3 = asm0.UInt64_GreaterThan(loc0,arg1);
            /* IL_15: ldloc.3  */
            /* IL_16: brfalse.s IL_1C */
            
            if ((!(loc3))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_18: ldc.i4.1  */
            /* IL_19: stloc.2  */
            
            loc2 = 1;
            /* IL_1A: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x1C:
            /* IL_1C: ldc.i4.0  */
            /* IL_1D: stloc.2  */
            
            loc2 = 0;
            case 0x20:
            /* IL_20: ldloc.2  */
            /* IL_21: ret  */
            
            return loc2;
        }
    }
};;/* System.Boolean UInt64.Equals(Object)*/

asm.x6000146 = function Equals(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.UInt64"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: isinst System.UInt64 */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: ldc.i4.0  */
            /* IL_0C: ceq  */
            /* IL_0D: stloc.0  */
            
            loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_0E: ldloc.0  */
            /* IL_0F: brfalse.s IL_15 */
            
            if ((!(loc0))){
                
                __pos__ = 0x15;
                
                continue;
            }
            /* IL_11: ldc.i4.0  */
            /* IL_12: stloc.1  */
            
            loc1 = 0;
            /* IL_13: br.s IL_24 */
            
            __pos__ = 0x24;
            
            continue;
            case 0x15:
            /* IL_15: ldarg.0  */
            /* IL_16: ldarg.1  */
            /* IL_17: unbox.any System.UInt64 */
            /* IL_1C: call Boolean Equals(System.UInt64) */
            /* IL_21: stloc.1  */
            
            loc1 = asm0.x6000147(arg0,CILJS.unboxAny(arg1,t0));
            case 0x24:
            /* IL_24: ldloc.1  */
            /* IL_25: ret  */
            
            return loc1;
        }
    }
};;/* System.Boolean UInt64.Equals(UInt64)*/

asm.x6000147 = function Equals(arg0, arg1)
{
    var loc0;
    var loc1;
    var loc2;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i8  */
    /* IL_03: stloc.0  */
    
    loc0 = arg0.r();
    /* IL_04: ldarg.1  */
    /* IL_05: stloc.1  */
    
    loc1 = arg1;
    /* IL_06: ldloc.0  */
    /* IL_07: ldloc.1  */
    /* IL_09: ceq  */
    /* IL_0A: stloc.2  */
    
    loc2 = asm0.XInt64_Equality(loc0,loc1);
    /* IL_0D: ldloc.2  */
    /* IL_0E: ret  */
    
    return loc2;
};;/*  SerializableAttribute..ctor()*/

asm.x6000148 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Int32 Environment.get_CurrentManagedThreadId()*/

asm.x6000149 = function get_CurrentManagedThreadId()
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.0  */
    /* IL_02: stloc.0  */
    
    loc0 = 0;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/* static System.String Environment.get_NewLine()*/

asm.x600014a = function get_NewLine()
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldstr */
    /*  */
    /* IL_06: stloc.0  */
    
    loc0 = CILJS.newString("\\n");
    /* IL_09: ldloc.0  */
    /* IL_0A: ret  */
    
    return loc0;
};;/* System.String Int16.ToString()*/

asm.x600014b = function ToString(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Int16"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i2  */
    /* IL_03: box System.Int16 */
    /* IL_08: call String SignedPrimitiveToString(System.Object) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x600002f(CILJS.makeBox(arg0.r(),t0));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 Int16.CompareTo(Object)*/

asm.x600014c = function CompareTo(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: unbox.any System.Int16 */
    /* IL_08: call Int32 CompareTo(System.Int16) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x600014d(arg0,CILJS.unboxAny(arg1,asm0["System.Int16"]()));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 Int16.CompareTo(Int16)*/

asm.x600014d = function CompareTo(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.i2  */
            /* IL_03: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_04: ldloc.0  */
            /* IL_05: ldarg.1  */
            /* IL_07: clt  */
            /* IL_08: stloc.1  */
            
            loc1 = ((loc0 < arg1) ? 1 : 0);
            /* IL_09: ldloc.1  */
            /* IL_0A: brfalse.s IL_10 */
            
            if ((!(loc1))){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_0C: ldc.i4.m1  */
            /* IL_0D: stloc.2  */
            
            loc2 = -1;
            /* IL_0E: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x10:
            /* IL_10: ldloc.0  */
            /* IL_11: ldarg.1  */
            /* IL_13: cgt  */
            /* IL_14: stloc.3  */
            
            loc3 = ((loc0 > arg1) ? 1 : 0);
            /* IL_15: ldloc.3  */
            /* IL_16: brfalse.s IL_1C */
            
            if ((!(loc3))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_18: ldc.i4.1  */
            /* IL_19: stloc.2  */
            
            loc2 = 1;
            /* IL_1A: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x1C:
            /* IL_1C: ldc.i4.0  */
            /* IL_1D: stloc.2  */
            
            loc2 = 0;
            case 0x20:
            /* IL_20: ldloc.2  */
            /* IL_21: ret  */
            
            return loc2;
        }
    }
};;/* System.Boolean Int16.Equals(Int16)*/

asm.x600014e = function Equals(arg0, arg1)
{
    var loc0;
    var loc1;
    var loc2;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i2  */
    /* IL_03: stloc.0  */
    
    loc0 = arg0.r();
    /* IL_04: ldarg.1  */
    /* IL_05: stloc.1  */
    
    loc1 = arg1;
    /* IL_06: ldloc.0  */
    /* IL_07: ldloc.1  */
    /* IL_09: ceq  */
    /* IL_0A: stloc.2  */
    
    loc2 = ((loc0 === loc1) ? 1 : 0);
    /* IL_0D: ldloc.2  */
    /* IL_0E: ret  */
    
    return loc2;
};;/* System.Boolean Int16.Equals(Object)*/

asm.x600014f = function Equals(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.Int16"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: isinst System.Int16 */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: ldc.i4.0  */
            /* IL_0C: ceq  */
            /* IL_0D: stloc.0  */
            
            loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_0E: ldloc.0  */
            /* IL_0F: brfalse.s IL_15 */
            
            if ((!(loc0))){
                
                __pos__ = 0x15;
                
                continue;
            }
            /* IL_11: ldc.i4.0  */
            /* IL_12: stloc.1  */
            
            loc1 = 0;
            /* IL_13: br.s IL_24 */
            
            __pos__ = 0x24;
            
            continue;
            case 0x15:
            /* IL_15: ldarg.0  */
            /* IL_16: ldarg.1  */
            /* IL_17: unbox.any System.Int16 */
            /* IL_1C: call Boolean Equals(System.Int16) */
            /* IL_21: stloc.1  */
            
            loc1 = asm0.x600014e(arg0,CILJS.unboxAny(arg1,t0));
            case 0x24:
            /* IL_24: ldloc.1  */
            /* IL_25: ret  */
            
            return loc1;
        }
    }
};;/* System.Int32 Int16.GetHashCode()*/

asm.x6000150 = function GetHashCode(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i2  */
    /* IL_03: stloc.0  */
    
    loc0 = arg0.r();
    /* IL_06: ldloc.0  */
    /* IL_07: ret  */
    
    return loc0;
};;/* System.String Int32.ToString()*/

asm.x6000151 = function ToString(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Int32"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i4  */
    /* IL_03: box System.Int32 */
    /* IL_08: call String SignedPrimitiveToString(System.Object) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x600002f(CILJS.makeBox(arg0.r(),t0));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.String Int32.ToString(String)*/

asm.x6000153_init = function (arg0, arg1)
{
    
    (asm0["System.NotSupportedException"]().init)();
    
    asm.x6000153 = asm.x6000153_;
};;

asm.x6000153 = function (arg0, arg1)
{
    
    asm.x6000153_init(arg0,arg1);
    
    return asm.x6000153_(arg0,arg1);
};;
asm.x6000153_ = function ToString(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    
    t0 = asm0["System.NotSupportedException"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.i4  */
            /* IL_03: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_04: ldarg.1  */
            /* IL_05: ldstr X */
            /* IL_0A: call Boolean op_Equality(System.String, System.String) */
            /* IL_0F: stloc.1  */
            
            loc1 = asm0.x60000c6(arg1,CILJS.newString("X"));
            /* IL_10: ldloc.1  */
            /* IL_11: brfalse.s IL_1C */
            
            if ((!(loc1))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_13: ldloc.0  */
            /* IL_14: call String toHex(System.Int32) */
            /* IL_19: stloc.2  */
            
            loc2 = CILJS.newString(loc0.toString(16));
            /* IL_1A: br.s IL_22 */
            
            __pos__ = 0x22;
            
            continue;
            case 0x1C:
            /* IL_1C: newobj Void .ctor() */
            /* IL_21: throw  */
            
            throw CILJS.newobj(t0,asm0.x6000134,[null]);
            case 0x22:
            /* IL_22: ldloc.2  */
            /* IL_23: ret  */
            
            return loc2;
        }
    }
};/* System.Int32 Int32.CompareTo(Object)*/

asm.x6000154 = function CompareTo(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: unbox.any System.Int32 */
    /* IL_08: call Int32 CompareTo(System.Int32) */
    /* IL_0D: stloc.0  */
    
    loc0 = asm0.x6000155(arg0,CILJS.unboxAny(arg1,asm0["System.Int32"]()));
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/* System.Int32 Int32.CompareTo(Int32)*/

asm.x6000155 = function CompareTo(arg0, arg1)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldind.i4  */
            /* IL_03: stloc.0  */
            
            loc0 = arg0.r();
            /* IL_04: ldloc.0  */
            /* IL_05: ldarg.1  */
            /* IL_07: clt  */
            /* IL_08: stloc.1  */
            
            loc1 = ((loc0 < arg1) ? 1 : 0);
            /* IL_09: ldloc.1  */
            /* IL_0A: brfalse.s IL_10 */
            
            if ((!(loc1))){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_0C: ldc.i4.m1  */
            /* IL_0D: stloc.2  */
            
            loc2 = -1;
            /* IL_0E: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x10:
            /* IL_10: ldloc.0  */
            /* IL_11: ldarg.1  */
            /* IL_13: cgt  */
            /* IL_14: stloc.3  */
            
            loc3 = ((loc0 > arg1) ? 1 : 0);
            /* IL_15: ldloc.3  */
            /* IL_16: brfalse.s IL_1C */
            
            if ((!(loc3))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_18: ldc.i4.1  */
            /* IL_19: stloc.2  */
            
            loc2 = 1;
            /* IL_1A: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x1C:
            /* IL_1C: ldc.i4.0  */
            /* IL_1D: stloc.2  */
            
            loc2 = 0;
            case 0x20:
            /* IL_20: ldloc.2  */
            /* IL_21: ret  */
            
            return loc2;
        }
    }
};;/* System.Boolean Int32.Equals(Object)*/

asm.x6000156 = function Equals(arg0, arg1)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.Int32"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: isinst System.Int32 */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: ldc.i4.0  */
            /* IL_0C: ceq  */
            /* IL_0D: stloc.0  */
            
            loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === 0) ? 1 : 0);
            /* IL_0E: ldloc.0  */
            /* IL_0F: brfalse.s IL_15 */
            
            if ((!(loc0))){
                
                __pos__ = 0x15;
                
                continue;
            }
            /* IL_11: ldc.i4.0  */
            /* IL_12: stloc.1  */
            
            loc1 = 0;
            /* IL_13: br.s IL_24 */
            
            __pos__ = 0x24;
            
            continue;
            case 0x15:
            /* IL_15: ldarg.0  */
            /* IL_16: ldarg.1  */
            /* IL_17: unbox.any System.Int32 */
            /* IL_1C: call Boolean Equals(System.Int32) */
            /* IL_21: stloc.1  */
            
            loc1 = asm0.x6000157(arg0,CILJS.unboxAny(arg1,t0));
            case 0x24:
            /* IL_24: ldloc.1  */
            /* IL_25: ret  */
            
            return loc1;
        }
    }
};;/* System.Boolean Int32.Equals(Int32)*/

asm.x6000157 = function Equals(arg0, arg1)
{
    var loc0;
    var loc1;
    var loc2;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i4  */
    /* IL_03: stloc.0  */
    
    loc0 = arg0.r();
    /* IL_04: ldarg.1  */
    /* IL_05: stloc.1  */
    
    loc1 = arg1;
    /* IL_06: ldloc.0  */
    /* IL_07: ldloc.1  */
    /* IL_09: ceq  */
    /* IL_0A: stloc.2  */
    
    loc2 = ((loc0 === loc1) ? 1 : 0);
    /* IL_0D: ldloc.2  */
    /* IL_0E: ret  */
    
    return loc2;
};;/* System.Int32 Int32.GetHashCode()*/

asm.x6000158 = function GetHashCode(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldind.i4  */
    /* IL_03: stloc.0  */
    
    loc0 = arg0.r();
    /* IL_06: ldloc.0  */
    /* IL_07: ret  */
    
    return loc0;
};;/* static System.String Locale.GetText(String)*/

asm.x600015a = function GetText(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: stloc.0  */
    
    loc0 = arg0;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/*  DebuggerStepThroughAttribute..ctor()*/

asm.x600015b = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  Debugger..ctor()*/

asm.x600015d = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void AutoResetEvent.Close()*/

asm.x600015f = function Close(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/* System.Void AutoResetEvent.WaitOne()*/

asm.x6000160 = function WaitOne(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/* System.Void AutoResetEvent.Set()*/

asm.x6000161 = function Set(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/*  AutoResetEvent..ctor(Boolean)*/

asm.x600015e = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/* static System.Threading.Thread Thread.get_CurrentThread()*/

asm.x6000162_init = function ()
{
    
    (asm0["System.Threading.Thread"]().init)();
    
    asm.x6000162 = asm.x6000162_;
};;

asm.x6000162 = function ()
{
    
    asm.x6000162_init();
    
    return asm.x6000162_();
};;
asm.x6000162_ = function get_CurrentThread()
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Threading.Thread"]();
    /* IL_00: nop  */
    
    asm0.x6000166();
    /* IL_01: ldsfld Thread currentThread */
    /* IL_06: stloc.0  */
    
    loc0 = t0.currentThread;
    /* IL_09: ldloc.0  */
    /* IL_0A: ret  */
    
    return loc0;
};/* System.Boolean Thread.get_IsThreadPoolThread()*/

asm.x6000163 = function get_IsThreadPoolThread(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.0  */
    /* IL_02: stloc.0  */
    
    loc0 = 0;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/* static System.Void Thread.Sleep(Int64)*/

asm.x6000164 = function Sleep(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/*  Thread..ctor()*/

asm.x6000165 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static  Thread..cctor()*/

asm.x6000166_init = function ()
{
    
    (asm0["System.Threading.Thread"]().init)();
    
    asm.x6000166 = asm.x6000166_;
};;

asm.x6000166 = function ()
{
    
    asm.x6000166_init();
    
    return asm.x6000166_();
};;
asm.x6000166_ = function _cctor()
{
    var t0;
    
    if (asm0["System.Threading.Thread"]().FieldsInitialized){
        
        return;
    }
    
    asm0["System.Threading.Thread"]().FieldsInitialized = true;
    
    t0 = asm0["System.Threading.Thread"]();
    
    asm0.x6000166();
    /* IL_00: newobj Void .ctor() */
    /* IL_05: stsfld Thread currentThread */
    
    t0.currentThread = CILJS.newobj(t0,asm0.x6000165,[null]);
    /* IL_0A: ret  */
    
    return ;
};/* static System.Void Monitor.Enter(Object)*/

asm.x6000167 = function Enter(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/* static System.Void Monitor.Exit(Object)*/

asm.x6000168 = function Exit(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/* System.Boolean WaitHandle.WaitOne(Int32)*/

asm.x6000169 = function WaitOne(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldc.i4.1  */
    /* IL_02: stloc.0  */
    
    loc0 = 1;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/*  WaitHandle..ctor()*/

asm.x600016a = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  InAttribute..ctor()*/

asm.x600016c = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  OutAttribute..ctor()*/

asm.x600016d = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  ExtensionAttribute..ctor()*/

asm.x600016e = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.String InternalsVisibleToAttribute.get_AssemblyName()*/

asm.x6000170 = function get_AssemblyName(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld String assemblyName */
    /* IL_07: stloc.0  */
    
    loc0 = arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName;
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* System.Boolean InternalsVisibleToAttribute.get_AllInternalsVisible()*/

asm.x6000171 = function get_AllInternalsVisible(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld Boolean allInternalsVisible */
    /* IL_07: stloc.0  */
    
    loc0 = arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible;
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/* System.Void InternalsVisibleToAttribute.set_AllInternalsVisible(Boolean)*/

asm.x6000172 = function set_AllInternalsVisible(arg0, arg1)
{
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.1  */
    /* IL_03: stfld Boolean allInternalsVisible */
    
    arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = arg1;
    /* IL_08: ret  */
    
    return ;
};;/*  InternalsVisibleToAttribute..ctor(String)*/

asm.x600016f = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldc.i4.1  */
    /* IL_02: stfld Boolean allInternalsVisible */
    
    arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = 1;
    /* IL_07: ldarg.0  */
    /* IL_08: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_0D: nop  */
    /* IL_0E: nop  */
    /* IL_0F: ldarg.0  */
    /* IL_10: ldarg.1  */
    /* IL_11: stfld String assemblyName */
    
    arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName = arg1;
    /* IL_16: ret  */
    
    return ;
};;/* static System.Void RuntimeHelpers.InitializeArrayImpl(Array,RuntimeFieldHandle)*/

asm.x6000173 = 
            function (arr, handle) {
                handle.value.type();
                var data = new Int8Array(handle.value.type[handle.value.field]);
                arr.jsarr = new arr.etype.ArrayType(data.buffer);   
            }
            ;;/* static System.Void RuntimeHelpers.InitializeArray(Array,RuntimeFieldHandle)*/

asm.x6000175_init = function (arg0, arg1)
{
    
    (asm0["System.Array`1"](asm0["System.Int64"]()).init)();
    
    (asm0["System.Array`1"](asm0["System.UInt64"]()).init)();
    
    asm.x6000175 = asm.x6000175_;
};;

asm.x6000175 = function (arg0, arg1)
{
    
    asm.x6000175_init(arg0,arg1);
    
    return asm.x6000175_(arg0,arg1);
};;
asm.x6000175_ = function InitializeArray(arg0, arg1)
{
    var t0;
    var t1;
    var t2;
    var t3;
    var t4;
    var st_05;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    var loc4;
    var in_block_1;
    var loc5;
    
    t0 = asm0["System.Int64"]();
    
    t1 = asm0["System.Array`1"](t0);
    
    t2 = asm0["System.UInt64"]();
    
    t3 = asm0["System.Array`1"](t2);
    
    t4 = asm0["System.UInt32"]();
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: isinst System.Int64[] */
            /* IL_07: brtrue.s IL_14 */
            
            if (t1.IsInst(arg0)){
                
                __pos__ = 0x14;
                
                continue;
            }
            /* IL_09: ldarg.0  */
            /* IL_0A: isinst System.UInt64[] */
            /* IL_0F: ldnull  */
            /* IL_11: cgt.un  */
            
            st_05 = ((t3.IsInst(arg0) !== null) ? 1 : 0);
            /* IL_12: br.s IL_15 */
            
            __pos__ = 0x15;
            
            continue;
            case 0x14:
            /* IL_14: ldc.i4.1  */
            
            st_05 = 1;
            case 0x15:
            /* IL_15: stloc.0  */
            
            loc0 = st_05;
            /* IL_16: ldloc.0  */
            /* IL_17: brfalse.s IL_65 */
            
            if ((!(loc0))){
                
                __pos__ = 0x65;
                
                continue;
            }
            /* IL_19: nop  */
            /* IL_1A: ldarg.0  */
            /* IL_1B: castclass System.Int64[] */
            /* IL_20: stloc.1  */
            
            loc1 = CILJS.castClass(arg0,t1);
            /* IL_21: ldc.i4.0  */
            /* IL_22: newarr System.UInt32 */
            /* IL_27: stloc.2  */
            
            loc2 = CILJS.newArray(t4,0);
            /* IL_28: ldloc.2  */
            /* IL_29: ldarg.1  */
            /* IL_2A: call Void InitializeArrayImpl(System.Array, System.RuntimeFieldHandle) */
            
            asm0.x6000173(loc2,CILJS.cloneValue(arg1));
            /* IL_2F: nop  */
            /* IL_30: ldc.i4.0  */
            /* IL_31: stloc.3  */
            
            loc3 = 0;
            /* IL_32: ldc.i4.0  */
            /* IL_33: stloc.s 4 */
            
            loc4 = 0;
            /* IL_35: br.s IL_53 */
            
            __pos__ = 0x53;
            
            continue;
            case 0x37:
            case 0x53:
            
            in_block_1 = true;
            
            if (__pos__ < 0x37){
                
                __pos__ = 0x37;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x37:
                    /* IL_37: ldloc.1  */
                    /* IL_38: ldloc.3  */
                    /* IL_39: ldloc.2  */
                    /* IL_3A: ldloc.s 4 */
                    /* IL_3C: ldelem.u4  */
                    /* IL_3D: ldloc.2  */
                    /* IL_3E: ldloc.s 4 */
                    /* IL_40: ldc.i4.1  */
                    /* IL_41: add  */
                    /* IL_42: ldelem.u4  */
                    /* IL_43: call Int64 Make(System.UInt32, System.UInt32) */
                    /* IL_48: stelem.i8  */
                    
                    (loc1.jsarr)[loc3] = new Uint32Array([(loc2.jsarr)[loc4],(loc2.jsarr)[(loc4 + 1) | 0]]);
                    /* IL_49: ldloc.3  */
                    /* IL_4A: ldc.i4.1  */
                    /* IL_4B: add  */
                    /* IL_4C: stloc.3  */
                    
                    loc3 = (loc3 + 1) | 0;
                    /* IL_4D: ldloc.s 4 */
                    /* IL_4F: ldc.i4.2  */
                    /* IL_50: add  */
                    /* IL_51: stloc.s 4 */
                    
                    loc4 = (loc4 + 2) | 0;
                    case 0x53:
                    /* IL_53: ldloc.3  */
                    /* IL_54: ldarg.0  */
                    /* IL_55: callvirt Int32 get_Length() */
                    /* IL_5B: clt  */
                    /* IL_5C: stloc.s 5 */
                    
                    loc5 = ((loc3 < asm0.x60000e2(arg0)) ? 1 : 0);
                    /* IL_5E: ldloc.s 5 */
                    /* IL_60: brtrue.s IL_37 */
                    
                    if (loc5){
                        
                        __pos__ = 0x37;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x53) || (__pos__ < 0x37)){
                
                continue;
            }
            /* IL_62: nop  */
            /* IL_63: br.s IL_6F */
            
            __pos__ = 0x6F;
            
            continue;
            case 0x65:
            /* IL_65: nop  */
            /* IL_66: ldarg.0  */
            /* IL_67: ldarg.1  */
            /* IL_68: call Void InitializeArrayImpl(System.Array, System.RuntimeFieldHandle) */
            
            asm0.x6000173(arg0,CILJS.cloneValue(arg1));
            /* IL_6D: nop  */
            /* IL_6E: nop  */
            case 0x6F:
            /* IL_6F: ret  */
            
            return ;
        }
    }
};/*  RuntimeHelpers..ctor()*/

asm.x6000176 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  IndexerNameAttribute..ctor(String)*/

asm.x6000177 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/* System.Runtime.CompilerServices.MethodImplOptions MethodImplAttribute.get_Value()*/

asm.x600017b = function get_Value(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld MethodImplOptions _val */
    /* IL_07: stloc.0  */
    
    loc0 = CILJS.cloneValue(arg0.System_Runtime_CompilerServicesMethodImplAttribute_val);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/*  MethodImplAttribute..ctor()*/

asm.x6000178 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/*  MethodImplAttribute..ctor(Int16)*/

asm.x6000179 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: ldarg.1  */
    /* IL_0A: stfld MethodImplOptions _val */
    
    arg0.System_Runtime_CompilerServicesMethodImplAttribute_val = arg1;
    /* IL_0F: ret  */
    
    return ;
};;/*  MethodImplAttribute..ctor(MethodImplOptions)*/

asm.x600017a = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: ldarg.1  */
    /* IL_0A: stfld MethodImplOptions _val */
    
    arg0.System_Runtime_CompilerServicesMethodImplAttribute_val = arg1;
    /* IL_0F: ret  */
    
    return ;
};;/* static System.Reflection.TypeInfo+constructor TypeInfo.GetConstructor(Object)*/

asm.x600018e = function (o) { return o.type || o.constructor; };;/* static System.Type TypeInfo.GetInstance(constructor)*/

asm.x6000191_init = function (arg0)
{
    
    (asm0["System.Reflection.TypeInfo"]().init)();
    
    asm.x6000191 = asm.x6000191_;
};;

asm.x6000191 = function (arg0)
{
    
    asm.x6000191_init(arg0);
    
    return asm.x6000191_(arg0);
};;
asm.x6000191_ = function GetInstance(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.Reflection.TypeInfo"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld Type TypeInstance */
            /* IL_07: call Boolean IsUndefined(System.Object) */
            /* IL_0C: stloc.0  */
            
            loc0 = asm0.x60001ee(arg0.TypeInstance);
            /* IL_0D: ldloc.0  */
            /* IL_0E: brfalse.s IL_1C */
            
            if ((!(loc0))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_10: ldarg.0  */
            /* IL_11: ldarg.0  */
            /* IL_12: newobj Void .ctor(System.Reflection.TypeInfo+constructor) */
            /* IL_17: stfld Type TypeInstance */
            
            arg0.TypeInstance = CILJS.newobj(t0,asm0.x600018f,[null, arg0]);
            case 0x1C:
            /* IL_1C: ldarg.0  */
            /* IL_1D: ldfld Type TypeInstance */
            /* IL_22: stloc.1  */
            
            loc1 = arg0.TypeInstance;
            /* IL_25: ldloc.1  */
            /* IL_26: ret  */
            
            return loc1;
        }
    }
};
asm.GetReflectionType = asm.x6000191;/* static System.Type TypeInfo.GetType(Object)*/

asm.x6000192 = function GetType(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call constructor GetConstructor(System.Object) */
    /* IL_07: call Type GetInstance(System.Reflection.TypeInfo+constructor) */
    /* IL_0C: stloc.0  */
    
    loc0 = asm0.x6000191(asm0.x600018e(arg0));
    /* IL_0F: ldloc.0  */
    /* IL_10: ret  */
    
    return loc0;
};;/* static System.Type TypeInfo.GetRuntimeTypeFromHandle(RuntimeTypeHandle)*/

asm.x6000193_init = function (arg0)
{
    
    (asm0["System.Reflection.TypeInfo+constructor"]().init)();
    
    asm.x6000193 = asm.x6000193_;
};;

asm.x6000193 = function (arg0)
{
    
    asm.x6000193_init(arg0);
    
    return asm.x6000193_(arg0);
};;
asm.x6000193_ = function GetRuntimeTypeFromHandle(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Reflection.TypeInfo+constructor"]();
    /* IL_00: nop  */
    /* IL_01: ldarga.s 0 */
    /* IL_03: ldfld Object value */
    /* IL_08: call constructor UnsafeCast[System.Reflection.TypeInfo+constructor](System.Object) */
    /* IL_0D: call Type GetInstance(System.Reflection.TypeInfo+constructor) */
    /* IL_12: stloc.0  */
    
    loc0 = asm0.x6000191(arg0.value);
    /* IL_15: ldloc.0  */
    /* IL_16: ret  */
    
    return loc0;
};/* System.Reflection.Assembly TypeInfo.get_Assembly()*/

asm.x6000194 = function get_Assembly(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld constructor ctor */
    /* IL_07: ldfld jsAsm Assembly */
    /* IL_0C: call Assembly GetInstance(System.Reflection.Assembly+jsAsm) */
    /* IL_11: stloc.0  */
    
    loc0 = asm0.x60001cd(arg0.ctor.Assembly);
    /* IL_14: ldloc.0  */
    /* IL_15: ret  */
    
    return loc0;
};;/* System.String TypeInfo.get_FullName()*/

asm.x6000195 = function get_FullName(arg0)
{
    var t0;
    var st_13;
    var in_block_0;
    var __pos__;
    var loc1;
    var loc2;
    var loc0;
    var loc3;
    var loc4;
    var loc5;
    var in_block_1;
    var loc6;
    
    t0 = asm0["System.Array"]();
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldtoken System.Array */
            /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
            /* IL_0C: callvirt Boolean IsSubclassOf(System.Type) */
            /* IL_11: stloc.1  */
            
            loc1 = (arg0.vtable)["asm0.x6000046"](arg0,asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)));
            /* IL_12: ldloc.1  */
            /* IL_13: brfalse.s IL_31 */
            
            if ((!(loc1))){
                
                __pos__ = 0x31;
                
                continue;
            }
            /* IL_15: nop  */
            /* IL_16: ldarg.0  */
            /* IL_17: callvirt Type GetElementType() */
            /* IL_1C: callvirt String get_FullName() */
            /* IL_21: ldstr [] */
            /* IL_26: call String Concat(System.String, System.String) */
            /* IL_2B: stloc.2  */
            
            loc2 = asm0.x60000bb((((arg0.vtable)["asm0.x6000054"](arg0).vtable)["asm0.x6000044"])((arg0.vtable)["asm0.x6000054"](arg0)),CILJS.newString("[]"));
            /* IL_2C: br IL_B4 */
            
            __pos__ = 0xB4;
            
            continue;
            case 0x31:
            /* IL_31: ldarg.0  */
            /* IL_32: ldfld constructor ctor */
            /* IL_37: ldfld Object FullName */
            /* IL_3C: call String FromJsString(System.Object) */
            /* IL_41: stloc.0  */
            
            loc0 = CILJS.newString(arg0.ctor.FullName);
            /* IL_42: ldarg.0  */
            /* IL_43: callvirt Boolean get_IsGenericType() */
            /* IL_48: brfalse.s IL_55 */
            
            if ((!((arg0.vtable)["asm0.x600004b"](arg0)))){
                
                __pos__ = 0x55;
                
                continue;
            }
            /* IL_4A: ldarg.0  */
            /* IL_4B: callvirt Boolean get_IsGenericTypeDefinition() */
            /* IL_50: ldc.i4.0  */
            /* IL_52: ceq  */
            
            st_13 = (((arg0.vtable)["asm0.x600004d"](arg0) === 0) ? 1 : 0);
            /* IL_53: br.s IL_56 */
            
            __pos__ = 0x56;
            
            continue;
            case 0x55:
            /* IL_55: ldc.i4.0  */
            
            st_13 = 0;
            case 0x56:
            /* IL_56: stloc.3  */
            
            loc3 = st_13;
            /* IL_57: ldloc.3  */
            /* IL_58: brfalse.s IL_B0 */
            
            if ((!(loc3))){
                
                __pos__ = 0xB0;
                
                continue;
            }
            /* IL_5A: nop  */
            /* IL_5B: ldloc.0  */
            /* IL_5C: ldstr [ */
            /* IL_61: call String Concat(System.String, System.String) */
            /* IL_66: stloc.0  */
            
            loc0 = asm0.x60000bb(loc0,CILJS.newString("["));
            /* IL_67: ldarg.0  */
            /* IL_68: callvirt Type[] GetGenericArguments() */
            /* IL_6D: stloc.s 4 */
            
            loc4 = (arg0.vtable)["asm0.x600004e"](arg0);
            /* IL_6F: ldc.i4.0  */
            /* IL_70: stloc.s 5 */
            
            loc5 = 0;
            /* IL_72: br.s IL_95 */
            
            __pos__ = 0x95;
            
            continue;
            case 0x74:
            case 0x95:
            
            in_block_1 = true;
            
            if (__pos__ < 0x74){
                
                __pos__ = 0x74;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x74:
                    /* IL_74: ldloc.0  */
                    /* IL_75: ldstr [ */
                    /* IL_7A: ldloc.s 4 */
                    /* IL_7C: ldloc.s 5 */
                    /* IL_7E: ldelem.ref  */
                    /* IL_7F: callvirt String get_AssemblyQualifiedName() */
                    /* IL_84: ldstr ] */
                    /* IL_89: call String Concat(System.String, System.String, System.String, System.String) */
                    /* IL_8E: stloc.0  */
                    
                    loc0 = asm0.x60000be(loc0,CILJS.newString("["),((CILJS.ldelemRef(loc4,loc5).vtable)["asm0.x600004a"])(CILJS.ldelemRef(loc4,loc5)),CILJS.newString("]"));
                    /* IL_8F: ldloc.s 5 */
                    /* IL_91: ldc.i4.1  */
                    /* IL_92: add  */
                    /* IL_93: stloc.s 5 */
                    
                    loc5 = (loc5 + 1) | 0;
                    case 0x95:
                    /* IL_95: ldloc.s 5 */
                    /* IL_97: ldloc.s 4 */
                    /* IL_99: ldlen  */
                    /* IL_9A: conv.i4  */
                    /* IL_9C: clt  */
                    /* IL_9D: stloc.s 6 */
                    
                    loc6 = ((loc5 < (loc4.jsarr.length | 0)) ? 1 : 0);
                    /* IL_9F: ldloc.s 6 */
                    /* IL_A1: brtrue.s IL_74 */
                    
                    if (loc6){
                        
                        __pos__ = 0x74;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x95) || (__pos__ < 0x74)){
                
                continue;
            }
            /* IL_A3: ldloc.0  */
            /* IL_A4: ldstr ] */
            /* IL_A9: call String Concat(System.String, System.String) */
            /* IL_AE: stloc.0  */
            
            loc0 = asm0.x60000bb(loc0,CILJS.newString("]"));
            /* IL_AF: nop  */
            case 0xB0:
            /* IL_B0: ldloc.0  */
            /* IL_B1: stloc.2  */
            
            loc2 = loc0;
            case 0xB4:
            /* IL_B4: ldloc.2  */
            /* IL_B5: ret  */
            
            return loc2;
        }
    }
};;/* System.String TypeInfo.get_AssemblyQualifiedName()*/

asm.x6000196 = function get_AssemblyQualifiedName(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: callvirt String get_FullName() */
    /* IL_07: ldstr ,  */
    /* IL_0C: ldarg.0  */
    /* IL_0D: callvirt Assembly get_Assembly() */
    /* IL_12: callvirt String get_FullName() */
    /* IL_17: call String Concat(System.String, System.String, System.String) */
    /* IL_1C: stloc.0  */
    
    loc0 = asm0.x60000bd((arg0.vtable)["asm0.x6000044"](arg0),CILJS.newString(", "),asm0.x60001ce((arg0.vtable)["asm0.x6000048"](arg0)));
    /* IL_1F: ldloc.0  */
    /* IL_20: ret  */
    
    return loc0;
};;/* System.Boolean TypeInfo.Equals(Object)*/

asm.x6000197_init = function (arg0, arg1)
{
    
    (asm0["System.Reflection.TypeInfo"]().init)();
    
    asm.x6000197 = asm.x6000197_;
};;

asm.x6000197 = function (arg0, arg1)
{
    
    asm.x6000197_init(arg0,arg1);
    
    return asm.x6000197_(arg0,arg1);
};;
asm.x6000197_ = function Equals(arg0, arg1)
{
    var t0;
    var loc0;
    var loc1;
    
    t0 = asm0["System.Reflection.TypeInfo"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.1  */
    /* IL_02: isinst System.Reflection.TypeInfo */
    /* IL_07: stloc.0  */
    
    loc0 = t0.IsInst(arg1);
    /* IL_08: ldarg.0  */
    /* IL_09: ldfld constructor ctor */
    /* IL_0E: ldloc.0  */
    /* IL_0F: ldfld constructor ctor */
    /* IL_15: ceq  */
    /* IL_16: stloc.1  */
    
    loc1 = ((arg0.ctor === loc0.ctor) ? 1 : 0);
    /* IL_19: ldloc.1  */
    /* IL_1A: ret  */
    
    return loc1;
};/* System.Int32 TypeInfo.GetHashCode()*/

asm.x6000198 = function GetHashCode(arg0)
{
    var t0;
    var t1;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.Int32"]();
    
    t1 = asm0["System.Boolean"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld constructor ctor */
            /* IL_07: ldfld Int32 Hash */
            /* IL_0C: box System.Int32 */
            /* IL_11: call Boolean UnsafeCast[System.Boolean](System.Object) */
            /* IL_16: ldc.i4.0  */
            /* IL_18: ceq  */
            /* IL_19: stloc.0  */
            
            loc0 = ((CILJS.makeBox(arg0.ctor.Hash,t0) === 0) ? 1 : 0);
            /* IL_1A: ldloc.0  */
            /* IL_1B: brfalse.s IL_2E */
            
            if ((!(loc0))){
                
                __pos__ = 0x2E;
                
                continue;
            }
            /* IL_1D: ldarg.0  */
            /* IL_1E: ldfld constructor ctor */
            /* IL_23: ldarg.0  */
            /* IL_24: call Int32 GetHashCode() */
            /* IL_29: stfld Int32 Hash */
            
            arg0.ctor.Hash = asm0.x600009f(arg0);
            case 0x2E:
            /* IL_2E: ldarg.0  */
            /* IL_2F: ldfld constructor ctor */
            /* IL_34: ldfld Int32 Hash */
            /* IL_39: stloc.1  */
            
            loc1 = arg0.ctor.Hash;
            /* IL_3C: ldloc.1  */
            /* IL_3D: ret  */
            
            return loc1;
        }
    }
};;/* System.Object[] TypeInfo.GetCustomAttributes(Boolean)*/

asm.x6000199 = function GetCustomAttributes(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld constructor ctor */
    /* IL_07: ldfld Array CustomAttributes */
    /* IL_0C: call Object[] GetCustomAttributesImpl(System.Object) */
    /* IL_11: stloc.0  */
    
    loc0 = asm0.x60001c9(arg0.ctor.CustomAttributes);
    /* IL_14: ldloc.0  */
    /* IL_15: ret  */
    
    return loc0;
};;/* System.Collections.Generic.IEnumerable`1[System.Reflection.CustomAttributeData] TypeInfo.get_CustomAttributes()*/

asm.x600019a_init = function (arg0)
{
    
    (asm0["System.Reflection.TypeInfo+<get_CustomAttributes>d__18"]().init)();
    
    asm.x600019a = asm.x600019a_;
};;

asm.x600019a = function (arg0)
{
    
    asm.x600019a_init(arg0);
    
    return asm.x600019a_(arg0);
};;
asm.x600019a_ = function get_CustomAttributes(arg0)
{
    var t0;
    var loc0;
    var loc1;
    
    t0 = asm0["System.Reflection.TypeInfo+<get_CustomAttributes>d__18"]();
    /* IL_00: ldc.i4.s 254 */
    /* IL_02: newobj Void .ctor(System.Int32) */
    /* IL_07: stloc.0  */
    
    loc0 = CILJS.newobj(t0,asm0.x6000206,[null, -2]);
    /* IL_08: ldloc.0  */
    /* IL_09: ldarg.0  */
    /* IL_0A: stfld TypeInfo <>4__this */
    
    loc0["<>4__this"] = arg0;
    /* IL_0F: ldloc.0  */
    /* IL_10: stloc.1  */
    
    loc1 = loc0;
    /* IL_11: ldloc.1  */
    /* IL_12: ret  */
    
    return loc1;
};/* System.Object[] TypeInfo.GetCustomAttributes(Type,Boolean)*/

asm.x600019b_init = function (arg0, arg1, arg2)
{
    
    (asm0["System.NotImplementedException"]().init)();
    
    asm.x600019b = asm.x600019b_;
};;

asm.x600019b = function (arg0, arg1, arg2)
{
    
    asm.x600019b_init(arg0,arg1,arg2);
    
    return asm.x600019b_(arg0,arg1,arg2);
};;
asm.x600019b_ = function GetCustomAttributes(arg0, arg1, arg2)
{
    var t0;
    
    t0 = asm0["System.NotImplementedException"]();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: throw  */
    
    throw CILJS.newobj(t0,asm0.x6000070,[null]);
};/* System.Boolean TypeInfo.IsDefined(Type,Boolean)*/

asm.x600019c_init = function (arg0, arg1, arg2)
{
    
    (asm0["System.NotImplementedException"]().init)();
    
    asm.x600019c = asm.x600019c_;
};;

asm.x600019c = function (arg0, arg1, arg2)
{
    
    asm.x600019c_init(arg0,arg1,arg2);
    
    return asm.x600019c_(arg0,arg1,arg2);
};;
asm.x600019c_ = function IsDefined(arg0, arg1, arg2)
{
    var t0;
    
    t0 = asm0["System.NotImplementedException"]();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: throw  */
    
    throw CILJS.newobj(t0,asm0.x6000070,[null]);
};/* System.Boolean TypeInfo.get_IsInterface()*/

asm.x600019d = function get_IsInterface(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld constructor ctor */
    /* IL_07: ldfld Boolean IsInterface */
    /* IL_0C: call Boolean op_Explicit(CilJs.JavaScript.Boolean) */
    /* IL_11: stloc.0  */
    
    loc0 = (arg0.ctor.IsInterface ? 1 : 0);
    /* IL_14: ldloc.0  */
    /* IL_15: ret  */
    
    return loc0;
};;/* System.Boolean TypeInfo.get_IsGenericType()*/

asm.x600019e = function get_IsGenericType(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld constructor ctor */
    /* IL_07: ldfld Boolean IsGenericTypeDefinition */
    /* IL_0C: call Boolean op_Explicit(CilJs.JavaScript.Boolean) */
    /* IL_11: stloc.0  */
    
    loc0 = (arg0.ctor.IsGenericTypeDefinition ? 1 : 0);
    /* IL_14: ldloc.0  */
    /* IL_15: ret  */
    
    return loc0;
};;/* System.Boolean TypeInfo.get_IsGenericTypeDefinition()*/

asm.x600019f_init = function (arg0)
{
    
    (asm0["System.Reflection.TypeInfo+constructor"]().init)();
    
    asm.x600019f = asm.x600019f_;
};;

asm.x600019f = function (arg0)
{
    
    asm.x600019f_init(arg0);
    
    return asm.x600019f_(arg0);
};;
asm.x600019f_ = function get_IsGenericTypeDefinition(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc2;
    var loc3;
    var loc0;
    var loc1;
    var loc4;
    
    t0 = asm0["System.Reflection.TypeInfo+constructor"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld constructor ctor */
            /* IL_07: ldfld Boolean IsGenericTypeDefinition */
            /* IL_0C: call Boolean op_Explicit(CilJs.JavaScript.Boolean) */
            /* IL_11: ldc.i4.0  */
            /* IL_13: ceq  */
            /* IL_14: stloc.2  */
            
            loc2 = (((arg0.ctor.IsGenericTypeDefinition ? 1 : 0) === 0) ? 1 : 0);
            /* IL_15: ldloc.2  */
            /* IL_16: brfalse.s IL_1C */
            
            if ((!(loc2))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_18: ldc.i4.0  */
            /* IL_19: stloc.3  */
            
            loc3 = 0;
            /* IL_1A: br.s IL_6D */
            
            __pos__ = 0x6D;
            
            continue;
            case 0x1C:
            /* IL_1C: ldarg.0  */
            /* IL_1D: ldfld constructor ctor */
            /* IL_22: ldfld Object GenericArguments */
            /* IL_27: ldarg.0  */
            /* IL_28: ldfld constructor ctor */
            /* IL_2D: ldfld String MetadataName */
            /* IL_32: call String op_Explicit(CilJs.JavaScript.String) */
            /* IL_37: call Object ObjectLookup(System.Object, System.String) */
            /* IL_3C: ldc.i4.0  */
            /* IL_3D: call Object ArrayLookup(System.Object, System.Int32) */
            /* IL_42: stloc.0  */
            
            loc0 = ((arg0.ctor.GenericArguments[CILJS.newString(arg0.ctor.MetadataName).jsstr])[0]);
            /* IL_43: ldloc.0  */
            /* IL_44: call constructor UnsafeCast[System.Reflection.TypeInfo+constructor](System.Object) */
            /* IL_49: stloc.1  */
            
            loc1 = loc0;
            /* IL_4A: ldloc.1  */
            /* IL_4B: ldfld Object FullName */
            /* IL_50: call String FromJsString(System.Object) */
            /* IL_55: ldstr CilJs.Runtime.UnboundGenericParameter */
            /* IL_5A: call Boolean op_Equality(System.String, System.String) */
            /* IL_5F: stloc.s 4 */
            
            loc4 = asm0.x60000c6(CILJS.newString(loc1.FullName),CILJS.newString("CilJs.Runtime.UnboundGenericParameter"));
            /* IL_61: ldloc.s 4 */
            /* IL_63: brfalse.s IL_69 */
            
            if ((!(loc4))){
                
                __pos__ = 0x69;
                
                continue;
            }
            /* IL_65: ldc.i4.1  */
            /* IL_66: stloc.3  */
            
            loc3 = 1;
            /* IL_67: br.s IL_6D */
            
            __pos__ = 0x6D;
            
            continue;
            case 0x69:
            /* IL_69: ldc.i4.0  */
            /* IL_6A: stloc.3  */
            
            loc3 = 0;
            case 0x6D:
            /* IL_6D: ldloc.3  */
            /* IL_6E: ret  */
            
            return loc3;
        }
    }
};/* System.Type TypeInfo.MakeGenericType(Type[])*/

asm.x60001a0_init = function (arg0, arg1)
{
    
    (asm0["System.InvalidOperationException"]().init)();
    
    (asm0["System.Reflection.TypeInfo"]().init)();
    
    (asm0["System.Reflection.TypeInfo+constructor"]().init)();
    
    asm.x60001a0 = asm.x60001a0_;
};;

asm.x60001a0 = function (arg0, arg1)
{
    
    asm.x60001a0_init(arg0,arg1);
    
    return asm.x60001a0_(arg0,arg1);
};;
asm.x60001a0_ = function MakeGenericType(arg0, arg1)
{
    var t0;
    var t1;
    var t2;
    var in_block_0;
    var __pos__;
    var loc3;
    var loc0;
    var loc4;
    var in_block_1;
    var loc5;
    var loc1;
    var loc2;
    var loc6;
    
    t0 = asm0["System.InvalidOperationException"]();
    
    t1 = asm0["System.Reflection.TypeInfo"]();
    
    t2 = asm0["System.Reflection.TypeInfo+constructor"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: callvirt Boolean get_IsGenericTypeDefinition() */
            /* IL_07: ldc.i4.0  */
            /* IL_09: ceq  */
            /* IL_0A: stloc.3  */
            
            loc3 = (((arg0.vtable)["asm0.x600004d"](arg0) === 0) ? 1 : 0);
            /* IL_0B: ldloc.3  */
            /* IL_0C: brfalse.s IL_14 */
            
            if ((!(loc3))){
                
                __pos__ = 0x14;
                
                continue;
            }
            /* IL_0E: newobj Void .ctor() */
            /* IL_13: throw  */
            
            throw CILJS.newobj(t0,asm0.x6000001,[null]);
            case 0x14:
            /* IL_14: call Array New() */
            /* IL_19: stloc.0  */
            
            loc0 = [];
            /* IL_1A: ldc.i4.0  */
            /* IL_1B: stloc.s 4 */
            
            loc4 = 0;
            /* IL_1D: br.s IL_3C */
            
            __pos__ = 0x3C;
            
            continue;
            case 0x1F:
            case 0x3C:
            
            in_block_1 = true;
            
            if (__pos__ < 0x1F){
                
                __pos__ = 0x1F;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x1F:
                    /* IL_1F: ldloc.0  */
                    /* IL_20: ldloc.s 4 */
                    /* IL_22: ldarg.1  */
                    /* IL_23: ldloc.s 4 */
                    /* IL_25: ldelem.ref  */
                    /* IL_26: castclass System.Reflection.TypeInfo */
                    /* IL_2B: ldfld constructor ctor */
                    /* IL_30: callvirt Void set_Item(System.Int32, System.Object) */
                    
                    loc0[loc4] = CILJS.castClass(CILJS.ldelemRef(arg1,loc4),t1).ctor;
                    /* IL_35: nop  */
                    /* IL_36: ldloc.s 4 */
                    /* IL_38: ldc.i4.1  */
                    /* IL_39: add  */
                    /* IL_3A: stloc.s 4 */
                    
                    loc4 = (loc4 + 1) | 0;
                    case 0x3C:
                    /* IL_3C: ldloc.s 4 */
                    /* IL_3E: ldarg.1  */
                    /* IL_3F: ldlen  */
                    /* IL_40: conv.i4  */
                    /* IL_42: clt  */
                    /* IL_43: stloc.s 5 */
                    
                    loc5 = ((loc4 < (arg1.jsarr.length | 0)) ? 1 : 0);
                    /* IL_45: ldloc.s 5 */
                    /* IL_47: brtrue.s IL_1F */
                    
                    if (loc5){
                        
                        __pos__ = 0x1F;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x3C) || (__pos__ < 0x1F)){
                
                continue;
            }
            /* IL_49: ldarg.0  */
            /* IL_4A: ldfld constructor ctor */
            /* IL_4F: ldfld jsAsm Assembly */
            /* IL_54: ldarg.0  */
            /* IL_55: callvirt String get_FullName() */
            /* IL_5A: call Object ObjectLookup(System.Object, System.String) */
            /* IL_5F: stloc.1  */
            
            loc1 = (arg0.ctor.Assembly[(arg0.vtable)["asm0.x6000044"](arg0).jsstr]);
            /* IL_60: ldloc.1  */
            /* IL_61: ldnull  */
            /* IL_62: ldloc.0  */
            /* IL_63: call Object Apply(System.Object, System.Object, CilJs.JavaScript.Array) */
            /* IL_68: stloc.2  */
            
            loc2 = (loc1.apply(null, loc0));
            /* IL_69: ldloc.2  */
            /* IL_6A: call constructor UnsafeCast[System.Reflection.TypeInfo+constructor](System.Object) */
            /* IL_6F: call Type GetInstance(System.Reflection.TypeInfo+constructor) */
            /* IL_74: stloc.s 6 */
            
            loc6 = asm0.x6000191(loc2);
            /* IL_78: ldloc.s 6 */
            /* IL_7A: ret  */
            
            return loc6;
        }
    }
};/* System.Type[] TypeInfo.GetGenericArguments()*/

asm.x60001a1_init = function (arg0)
{
    
    (asm0["System.Reflection.TypeInfo+constructor"]().init)();
    
    asm.x60001a1 = asm.x60001a1_;
};;

asm.x60001a1 = function (arg0)
{
    
    asm.x60001a1_init(arg0);
    
    return asm.x60001a1_(arg0);
};;
asm.x60001a1_ = function GetGenericArguments(arg0)
{
    var t0;
    var t1;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var in_block_1;
    var loc3;
    var loc4;
    
    t0 = asm0["System.Reflection.TypeInfo+constructor"]();
    
    t1 = asm0["System.Type"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld constructor ctor */
            /* IL_07: ldfld Object GenericArguments */
            /* IL_0C: ldarg.0  */
            /* IL_0D: ldfld constructor ctor */
            /* IL_12: ldfld String MetadataName */
            /* IL_17: call String op_Explicit(CilJs.JavaScript.String) */
            /* IL_1C: call Object ObjectLookup(System.Object, System.String) */
            /* IL_21: call constructor[] FromJsArray[System.Reflection.TypeInfo+constructor](System.Object) */
            /* IL_26: stloc.0  */
            
            loc0 = (asm0.x60000e6(asm0["System.Reflection.TypeInfo+constructor"]()))((arg0.ctor.GenericArguments[CILJS.newString(arg0.ctor.MetadataName).jsstr]));
            /* IL_27: ldloc.0  */
            /* IL_28: ldlen  */
            /* IL_29: conv.i4  */
            /* IL_2A: newarr System.Type */
            /* IL_2F: stloc.1  */
            
            loc1 = CILJS.newArray(t1,loc0.jsarr.length | 0);
            /* IL_30: ldc.i4.0  */
            /* IL_31: stloc.2  */
            
            loc2 = 0;
            /* IL_32: br.s IL_43 */
            
            __pos__ = 0x43;
            
            continue;
            case 0x34:
            case 0x43:
            
            in_block_1 = true;
            
            if (__pos__ < 0x34){
                
                __pos__ = 0x34;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x34:
                    /* IL_34: ldloc.1  */
                    /* IL_35: ldloc.2  */
                    /* IL_36: ldloc.0  */
                    /* IL_37: ldloc.2  */
                    /* IL_38: ldelem.ref  */
                    /* IL_39: call Type GetInstance(System.Reflection.TypeInfo+constructor) */
                    /* IL_3E: stelem.ref  */
                    
                    CILJS.stelemRef(loc1,loc2,asm0.x6000191(CILJS.ldelemRef(loc0,loc2)));
                    /* IL_3F: ldloc.2  */
                    /* IL_40: ldc.i4.1  */
                    /* IL_41: add  */
                    /* IL_42: stloc.2  */
                    
                    loc2 = (loc2 + 1) | 0;
                    case 0x43:
                    /* IL_43: ldloc.2  */
                    /* IL_44: ldloc.0  */
                    /* IL_45: ldlen  */
                    /* IL_46: conv.i4  */
                    /* IL_48: clt  */
                    /* IL_49: stloc.3  */
                    
                    loc3 = ((loc2 < (loc0.jsarr.length | 0)) ? 1 : 0);
                    /* IL_4A: ldloc.3  */
                    /* IL_4B: brtrue.s IL_34 */
                    
                    if (loc3){
                        
                        __pos__ = 0x34;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x43) || (__pos__ < 0x34)){
                
                continue;
            }
            /* IL_4D: ldloc.1  */
            /* IL_4E: stloc.s 4 */
            
            loc4 = loc1;
            /* IL_52: ldloc.s 4 */
            /* IL_54: ret  */
            
            return loc4;
        }
    }
};/* System.Type TypeInfo.get_BaseType()*/

asm.x60001a2 = function get_BaseType(arg0)
{
    var st_08;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld constructor ctor */
            /* IL_07: ldfld constructor BaseType */
            /* IL_0C: call Boolean IsUndefined(System.Object) */
            /* IL_11: brtrue.s IL_23 */
            
            if (asm0.x60001ee(arg0.ctor.BaseType)){
                
                __pos__ = 0x23;
                
                continue;
            }
            /* IL_13: ldarg.0  */
            /* IL_14: ldfld constructor ctor */
            /* IL_19: ldfld constructor BaseType */
            /* IL_1E: ldnull  */
            /* IL_20: ceq  */
            
            st_08 = ((arg0.ctor.BaseType === null) ? 1 : 0);
            /* IL_21: br.s IL_24 */
            
            __pos__ = 0x24;
            
            continue;
            case 0x23:
            /* IL_23: ldc.i4.1  */
            
            st_08 = 1;
            case 0x24:
            /* IL_24: stloc.0  */
            
            loc0 = st_08;
            /* IL_25: ldloc.0  */
            /* IL_26: brfalse.s IL_2C */
            
            if ((!(loc0))){
                
                __pos__ = 0x2C;
                
                continue;
            }
            /* IL_28: ldnull  */
            /* IL_29: stloc.1  */
            
            loc1 = null;
            /* IL_2A: br.s IL_3F */
            
            __pos__ = 0x3F;
            
            continue;
            case 0x2C:
            /* IL_2C: ldarg.0  */
            /* IL_2D: ldfld constructor ctor */
            /* IL_32: ldfld constructor BaseType */
            /* IL_37: call Type GetInstance(System.Reflection.TypeInfo+constructor) */
            /* IL_3C: stloc.1  */
            
            loc1 = asm0.x6000191(arg0.ctor.BaseType);
            case 0x3F:
            /* IL_3F: ldloc.1  */
            /* IL_40: ret  */
            
            return loc1;
        }
    }
};;/* System.Type[] TypeInfo.GetInterfaces()*/

asm.x60001a3_init = function (arg0)
{
    
    (asm0["System.Reflection.TypeInfo+constructor"]().init)();
    
    asm.x60001a3 = asm.x60001a3_;
};;

asm.x60001a3 = function (arg0)
{
    
    asm.x60001a3_init(arg0);
    
    return asm.x60001a3_(arg0);
};;
asm.x60001a3_ = function GetInterfaces(arg0)
{
    var t0;
    var t1;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var in_block_1;
    var loc3;
    var loc4;
    
    t0 = asm0["System.Reflection.TypeInfo+constructor"]();
    
    t1 = asm0["System.Type"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld constructor ctor */
            /* IL_07: ldfld Object Interfaces */
            /* IL_0C: call constructor[] FromJsArray[System.Reflection.TypeInfo+constructor](System.Object) */
            /* IL_11: stloc.0  */
            
            loc0 = (asm0.x60000e6(asm0["System.Reflection.TypeInfo+constructor"]()))(arg0.ctor.Interfaces);
            /* IL_12: ldloc.0  */
            /* IL_13: ldlen  */
            /* IL_14: conv.i4  */
            /* IL_15: newarr System.Type */
            /* IL_1A: stloc.1  */
            
            loc1 = CILJS.newArray(t1,loc0.jsarr.length | 0);
            /* IL_1B: ldc.i4.0  */
            /* IL_1C: stloc.2  */
            
            loc2 = 0;
            /* IL_1D: br.s IL_2E */
            
            __pos__ = 0x2E;
            
            continue;
            case 0x1F:
            case 0x2E:
            
            in_block_1 = true;
            
            if (__pos__ < 0x1F){
                
                __pos__ = 0x1F;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x1F:
                    /* IL_1F: ldloc.1  */
                    /* IL_20: ldloc.2  */
                    /* IL_21: ldloc.0  */
                    /* IL_22: ldloc.2  */
                    /* IL_23: ldelem.ref  */
                    /* IL_24: call Type GetInstance(System.Reflection.TypeInfo+constructor) */
                    /* IL_29: stelem.ref  */
                    
                    CILJS.stelemRef(loc1,loc2,asm0.x6000191(CILJS.ldelemRef(loc0,loc2)));
                    /* IL_2A: ldloc.2  */
                    /* IL_2B: ldc.i4.1  */
                    /* IL_2C: add  */
                    /* IL_2D: stloc.2  */
                    
                    loc2 = (loc2 + 1) | 0;
                    case 0x2E:
                    /* IL_2E: ldloc.2  */
                    /* IL_2F: ldloc.0  */
                    /* IL_30: ldlen  */
                    /* IL_31: conv.i4  */
                    /* IL_33: clt  */
                    /* IL_34: stloc.3  */
                    
                    loc3 = ((loc2 < (loc0.jsarr.length | 0)) ? 1 : 0);
                    /* IL_35: ldloc.3  */
                    /* IL_36: brtrue.s IL_1F */
                    
                    if (loc3){
                        
                        __pos__ = 0x1F;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x2E) || (__pos__ < 0x1F)){
                
                continue;
            }
            /* IL_38: ldloc.1  */
            /* IL_39: stloc.s 4 */
            
            loc4 = loc1;
            /* IL_3D: ldloc.s 4 */
            /* IL_3F: ret  */
            
            return loc4;
        }
    }
};/* System.Boolean TypeInfo.IsAssignableFrom(Type)*/

asm.x60001a4 = function IsAssignableFrom(arg0, arg1)
{
    var t0;
    var st_14;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    var loc4;
    var loc5;
    var loc6;
    var loc7;
    var in_block_1;
    var loc8;
    var loc9;
    
    t0 = asm0["System.Object"]();
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: ldnull  */
            /* IL_04: ceq  */
            /* IL_05: stloc.0  */
            
            loc0 = ((arg1 === null) ? 1 : 0);
            /* IL_06: ldloc.0  */
            /* IL_07: brfalse.s IL_10 */
            
            if ((!(loc0))){
                
                __pos__ = 0x10;
                
                continue;
            }
            /* IL_09: ldc.i4.0  */
            /* IL_0A: stloc.1  */
            
            loc1 = 0;
            /* IL_0B: br IL_9B */
            
            __pos__ = 0x9B;
            
            continue;
            case 0x10:
            /* IL_10: ldarg.0  */
            /* IL_11: ldarg.1  */
            /* IL_12: callvirt Boolean Equals(System.Object) */
            /* IL_17: stloc.2  */
            
            loc2 = (arg0.vtable)["asm0.x600009e"](arg0,arg1);
            /* IL_18: ldloc.2  */
            /* IL_19: brfalse.s IL_1F */
            
            if ((!(loc2))){
                
                __pos__ = 0x1F;
                
                continue;
            }
            /* IL_1B: ldc.i4.1  */
            /* IL_1C: stloc.1  */
            
            loc1 = 1;
            /* IL_1D: br.s IL_9B */
            
            __pos__ = 0x9B;
            
            continue;
            case 0x1F:
            /* IL_1F: ldarg.1  */
            /* IL_20: ldarg.0  */
            /* IL_21: callvirt Boolean IsSubclassOf(System.Type) */
            /* IL_26: stloc.3  */
            
            loc3 = (arg1.vtable)["asm0.x6000046"](arg1,arg0);
            /* IL_27: ldloc.3  */
            /* IL_28: brfalse.s IL_2E */
            
            if ((!(loc3))){
                
                __pos__ = 0x2E;
                
                continue;
            }
            /* IL_2A: ldc.i4.1  */
            /* IL_2B: stloc.1  */
            
            loc1 = 1;
            /* IL_2C: br.s IL_9B */
            
            __pos__ = 0x9B;
            
            continue;
            case 0x2E:
            /* IL_2E: ldarg.1  */
            /* IL_2F: callvirt Boolean get_IsInterface() */
            /* IL_34: brfalse.s IL_48 */
            
            if ((!((arg1.vtable)["asm0.x600004c"](arg1)))){
                
                __pos__ = 0x48;
                
                continue;
            }
            /* IL_36: ldarg.0  */
            /* IL_37: ldtoken System.Object */
            /* IL_3C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
            /* IL_41: callvirt Boolean Equals(System.Object) */
            
            st_14 = (arg0.vtable)["asm0.x600009e"](arg0,asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)));
            /* IL_46: br.s IL_49 */
            
            __pos__ = 0x49;
            
            continue;
            case 0x48:
            /* IL_48: ldc.i4.0  */
            
            st_14 = 0;
            case 0x49:
            /* IL_49: stloc.s 4 */
            
            loc4 = st_14;
            /* IL_4B: ldloc.s 4 */
            /* IL_4D: brfalse.s IL_53 */
            
            if ((!(loc4))){
                
                __pos__ = 0x53;
                
                continue;
            }
            /* IL_4F: ldc.i4.1  */
            /* IL_50: stloc.1  */
            
            loc1 = 1;
            /* IL_51: br.s IL_9B */
            
            __pos__ = 0x9B;
            
            continue;
            case 0x53:
            /* IL_53: ldarg.0  */
            /* IL_54: callvirt Boolean get_IsInterface() */
            /* IL_59: stloc.s 5 */
            
            loc5 = (arg0.vtable)["asm0.x600004c"](arg0);
            /* IL_5B: ldloc.s 5 */
            /* IL_5D: brfalse.s IL_97 */
            
            if ((!(loc5))){
                
                __pos__ = 0x97;
                
                continue;
            }
            /* IL_5F: nop  */
            /* IL_60: ldarg.1  */
            /* IL_61: callvirt Type[] GetInterfaces() */
            /* IL_66: stloc.s 6 */
            
            loc6 = (arg1.vtable)["asm0.x600004f"](arg1);
            /* IL_68: ldc.i4.0  */
            /* IL_69: stloc.s 7 */
            
            loc7 = 0;
            /* IL_6B: br.s IL_88 */
            
            __pos__ = 0x88;
            
            continue;
            case 0x6D:
            case 0x82:
            case 0x88:
            
            in_block_1 = true;
            
            if (__pos__ < 0x6D){
                
                __pos__ = 0x6D;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x6D:
                    /* IL_6D: ldarg.0  */
                    /* IL_6E: ldloc.s 6 */
                    /* IL_70: ldloc.s 7 */
                    /* IL_72: ldelem.ref  */
                    /* IL_73: callvirt Boolean IsAssignableFrom(System.Type) */
                    /* IL_78: stloc.s 8 */
                    
                    loc8 = (arg0.vtable)["asm0.x6000051"](arg0,CILJS.ldelemRef(loc6,loc7));
                    /* IL_7A: ldloc.s 8 */
                    /* IL_7C: brfalse.s IL_82 */
                    
                    if ((!(loc8))){
                        
                        __pos__ = 0x82;
                        
                        continue;
                    }
                    /* IL_7E: ldc.i4.1  */
                    /* IL_7F: stloc.1  */
                    
                    loc1 = 1;
                    /* IL_80: br.s IL_9B */
                    
                    __pos__ = 0x9B;
                    
                    continue;
                    case 0x82:
                    /* IL_82: ldloc.s 7 */
                    /* IL_84: ldc.i4.1  */
                    /* IL_85: add  */
                    /* IL_86: stloc.s 7 */
                    
                    loc7 = (loc7 + 1) | 0;
                    case 0x88:
                    /* IL_88: ldloc.s 7 */
                    /* IL_8A: ldloc.s 6 */
                    /* IL_8C: ldlen  */
                    /* IL_8D: conv.i4  */
                    /* IL_8F: clt  */
                    /* IL_90: stloc.s 9 */
                    
                    loc9 = ((loc7 < (loc6.jsarr.length | 0)) ? 1 : 0);
                    /* IL_92: ldloc.s 9 */
                    /* IL_94: brtrue.s IL_6D */
                    
                    if (loc9){
                        
                        __pos__ = 0x6D;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x88) || (__pos__ < 0x6D)){
                
                continue;
            }
            /* IL_96: nop  */
            case 0x97:
            /* IL_97: ldc.i4.0  */
            /* IL_98: stloc.1  */
            
            loc1 = 0;
            case 0x9B:
            /* IL_9B: ldloc.1  */
            /* IL_9C: ret  */
            
            return loc1;
        }
    }
};;/* static System.String TypeInfo.GetName(String)*/

asm.x60001a5 = 
            function (s) {
                var idx = s.jsstr.lastIndexOf('.');
                return CILJS.newString(s.jsstr.substring(idx + 1));
            }
            ;;/* System.String TypeInfo.get_Name()*/

asm.x60001a6 = function get_Name(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc1;
    var loc2;
    var loc0;
    
    t0 = asm0["System.Array"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldtoken System.Array */
            /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
            /* IL_0C: callvirt Boolean IsSubclassOf(System.Type) */
            /* IL_11: stloc.1  */
            
            loc1 = (arg0.vtable)["asm0.x6000046"](arg0,asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0)));
            /* IL_12: ldloc.1  */
            /* IL_13: brfalse.s IL_2E */
            
            if ((!(loc1))){
                
                __pos__ = 0x2E;
                
                continue;
            }
            /* IL_15: nop  */
            /* IL_16: ldarg.0  */
            /* IL_17: callvirt Type GetElementType() */
            /* IL_1C: callvirt String get_Name() */
            /* IL_21: ldstr [] */
            /* IL_26: call String Concat(System.String, System.String) */
            /* IL_2B: stloc.2  */
            
            loc2 = asm0.x60000bb((((arg0.vtable)["asm0.x6000054"](arg0).vtable)["asm0.x60001ca"])((arg0.vtable)["asm0.x6000054"](arg0)),CILJS.newString("[]"));
            /* IL_2C: br.s IL_48 */
            
            __pos__ = 0x48;
            
            continue;
            case 0x2E:
            /* IL_2E: ldarg.0  */
            /* IL_2F: ldfld constructor ctor */
            /* IL_34: ldfld Object FullName */
            /* IL_39: call String FromJsString(System.Object) */
            /* IL_3E: stloc.0  */
            
            loc0 = CILJS.newString(arg0.ctor.FullName);
            /* IL_3F: ldloc.0  */
            /* IL_40: call String GetName(System.String) */
            /* IL_45: stloc.2  */
            
            loc2 = asm0.x60001a5(loc0);
            case 0x48:
            /* IL_48: ldloc.2  */
            /* IL_49: ret  */
            
            return loc2;
        }
    }
};;/* System.Boolean TypeInfo.get_IsValueType()*/

asm.x60001a7 = function get_IsValueType(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld constructor ctor */
    /* IL_07: ldfld Boolean IsValueType */
    /* IL_0C: call Boolean op_Explicit(CilJs.JavaScript.Boolean) */
    /* IL_11: stloc.0  */
    
    loc0 = (arg0.ctor.IsValueType ? 1 : 0);
    /* IL_14: ldloc.0  */
    /* IL_15: ret  */
    
    return loc0;
};;/* System.Boolean TypeInfo.get_IsPrimitive()*/

asm.x60001a8 = function get_IsPrimitive(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld constructor ctor */
    /* IL_07: ldfld Boolean IsPrimitive */
    /* IL_0C: call Boolean op_Explicit(CilJs.JavaScript.Boolean) */
    /* IL_11: stloc.0  */
    
    loc0 = (arg0.ctor.IsPrimitive ? 1 : 0);
    /* IL_14: ldloc.0  */
    /* IL_15: ret  */
    
    return loc0;
};;/* System.Type TypeInfo.GetElementType()*/

asm.x60001a9 = function GetElementType(arg0)
{
    var t0;
    var t1;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.Array"]();
    
    t1 = asm0["System.Exception"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldtoken System.Array */
            /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
            /* IL_0C: callvirt Boolean IsSubclassOf(System.Type) */
            /* IL_11: ldc.i4.0  */
            /* IL_13: ceq  */
            /* IL_14: stloc.0  */
            
            loc0 = (((arg0.vtable)["asm0.x6000046"](arg0,asm0.x6000045(CILJS.newHandle(asm0["System.RuntimeTypeHandle"](),t0))) === 0) ? 1 : 0);
            /* IL_15: ldloc.0  */
            /* IL_16: brfalse.s IL_23 */
            
            if ((!(loc0))){
                
                __pos__ = 0x23;
                
                continue;
            }
            /* IL_18: ldstr Invalid operation */
            /* IL_1D: newobj Void .ctor(System.String) */
            /* IL_22: throw  */
            
            throw CILJS.newobj(t1,asm0.x6000076,[null, CILJS.newString("Invalid operation")]);
            case 0x23:
            /* IL_23: ldarg.0  */
            /* IL_24: callvirt Type[] GetGenericArguments() */
            /* IL_29: ldc.i4.0  */
            /* IL_2A: ldelem.ref  */
            /* IL_2B: stloc.1  */
            
            loc1 = CILJS.ldelemRef((arg0.vtable)["asm0.x600004e"](arg0),0);
            /* IL_2E: ldloc.1  */
            /* IL_2F: ret  */
            
            return loc1;
        }
    }
};;/* System.Reflection.MethodInfo[] TypeInfo.GetMethods()*/

asm.x60001aa_init = function (arg0)
{
    
    (asm0["System.Reflection.MethodInfo"]().init)();
    
    (asm0["CilJs.JavaScript.Array"]().init)();
    
    asm.x60001aa = asm.x60001aa_;
};;

asm.x60001aa = function (arg0)
{
    
    asm.x60001aa_init(arg0);
    
    return asm.x60001aa_(arg0);
};;
asm.x60001aa_ = function GetMethods(arg0)
{
    var t0;
    var t1;
    var st_03;
    var st_04;
    var st_05;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    var loc3;
    var loc4;
    var loc5;
    var in_block_1;
    var loc6;
    var loc7;
    var loc8;
    var loc9;
    
    t0 = asm0["System.Reflection.MethodInfo"]();
    
    t1 = asm0["CilJs.JavaScript.Array"]();
    
    
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: callvirt Type get_BaseType() */
            /* IL_07: brtrue.s IL_11 */
            
            if ((arg0.vtable)["asm0.x6000049"](arg0)){
                
                __pos__ = 0x11;
                
                continue;
            }
            /* IL_09: ldc.i4.0  */
            /* IL_0A: newarr System.Reflection.MethodInfo */
            
            st_05 = CILJS.newArray(t0,0);
            /* IL_0F: br.s IL_1C */
            
            __pos__ = 0x1C;
            
            continue;
            case 0x11:
            /* IL_11: ldarg.0  */
            
            st_03 = arg0;
            /* IL_12: callvirt Type get_BaseType() */
            
            st_04 = (st_03.vtable)["asm0.x6000049"](st_03);
            /* IL_17: callvirt MethodInfo[] GetMethods() */
            
            st_05 = (st_04.vtable)["asm0.x6000055"](st_04);
            case 0x1C:
            /* IL_1C: stloc.0  */
            
            loc0 = st_05;
            /* IL_1D: ldloc.0  */
            /* IL_1E: ldlen  */
            /* IL_1F: conv.i4  */
            /* IL_20: ldarg.0  */
            /* IL_21: ldfld constructor ctor */
            /* IL_26: ldfld Array Methods */
            /* IL_2B: callvirt Int32 get_Length() */
            /* IL_30: add  */
            /* IL_31: stloc.1  */
            
            loc1 = ((loc0.jsarr.length | 0) + arg0.ctor.Methods.length) | 0;
            /* IL_32: ldarg.0  */
            /* IL_33: ldfld constructor ctor */
            /* IL_38: ldfld Array Methods */
            /* IL_3D: callvirt Int32 get_Length() */
            /* IL_42: stloc.2  */
            
            loc2 = arg0.ctor.Methods.length;
            /* IL_43: ldloc.0  */
            /* IL_44: ldlen  */
            /* IL_45: conv.i4  */
            /* IL_46: stloc.3  */
            
            loc3 = loc0.jsarr.length | 0;
            /* IL_47: ldloc.1  */
            /* IL_48: newarr System.Reflection.MethodInfo */
            /* IL_4D: stloc.s 4 */
            
            loc4 = CILJS.newArray(t0,loc1);
            /* IL_4F: ldc.i4.0  */
            /* IL_50: stloc.s 5 */
            
            loc5 = 0;
            /* IL_52: br.s IL_7D */
            
            __pos__ = 0x7D;
            
            continue;
            case 0x54:
            case 0x7D:
            
            in_block_1 = true;
            
            if (__pos__ < 0x54){
                
                __pos__ = 0x54;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x54:
                    /* IL_54: nop  */
                    /* IL_55: ldloc.s 4 */
                    /* IL_57: ldloc.s 5 */
                    /* IL_59: ldarg.0  */
                    /* IL_5A: ldfld constructor ctor */
                    /* IL_5F: ldfld Array Methods */
                    /* IL_64: ldloc.s 5 */
                    /* IL_66: callvirt Object get_Item(System.Int32) */
                    /* IL_6B: call Array UnsafeCast[CilJs.JavaScript.Array](System.Object) */
                    /* IL_70: call MethodInfo GetInstance(CilJs.JavaScript.Array) */
                    /* IL_75: stelem.ref  */
                    
                    CILJS.stelemRef(loc4,loc5,asm0.x60001ba(arg0.ctor.Methods[loc5]));
                    /* IL_76: nop  */
                    /* IL_77: ldloc.s 5 */
                    /* IL_79: ldc.i4.1  */
                    /* IL_7A: add  */
                    /* IL_7B: stloc.s 5 */
                    
                    loc5 = (loc5 + 1) | 0;
                    case 0x7D:
                    /* IL_7D: ldloc.s 5 */
                    /* IL_7F: ldloc.2  */
                    /* IL_81: clt  */
                    /* IL_82: stloc.s 6 */
                    
                    loc6 = ((loc5 < loc2) ? 1 : 0);
                    /* IL_84: ldloc.s 6 */
                    /* IL_86: brtrue.s IL_54 */
                    
                    if (loc6){
                        
                        __pos__ = 0x54;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x7D) || (__pos__ < 0x54)){
                
                continue;
            }
            /* IL_88: ldc.i4.0  */
            /* IL_89: stloc.s 7 */
            
            loc7 = 0;
            /* IL_8B: br.s IL_A0 */
            
            __pos__ = 0xA0;
            
            continue;
            case 0x8D:
            case 0xA0:
            
            in_block_1 = true;
            
            if (__pos__ < 0x8D){
                
                __pos__ = 0x8D;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x8D:
                    /* IL_8D: nop  */
                    /* IL_8E: ldloc.s 4 */
                    /* IL_90: ldloc.s 7 */
                    /* IL_92: ldloc.2  */
                    /* IL_93: add  */
                    /* IL_94: ldloc.0  */
                    /* IL_95: ldloc.s 7 */
                    /* IL_97: ldelem.ref  */
                    /* IL_98: stelem.ref  */
                    
                    CILJS.stelemRef(loc4,(loc7 + loc2) | 0,CILJS.ldelemRef(loc0,loc7));
                    /* IL_99: nop  */
                    /* IL_9A: ldloc.s 7 */
                    /* IL_9C: ldc.i4.1  */
                    /* IL_9D: add  */
                    /* IL_9E: stloc.s 7 */
                    
                    loc7 = (loc7 + 1) | 0;
                    case 0xA0:
                    /* IL_A0: ldloc.s 7 */
                    /* IL_A2: ldloc.3  */
                    /* IL_A4: clt  */
                    /* IL_A5: stloc.s 8 */
                    
                    loc8 = ((loc7 < loc3) ? 1 : 0);
                    /* IL_A7: ldloc.s 8 */
                    /* IL_A9: brtrue.s IL_8D */
                    
                    if (loc8){
                        
                        __pos__ = 0x8D;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0xA0) || (__pos__ < 0x8D)){
                
                continue;
            }
            /* IL_AB: ldloc.s 4 */
            /* IL_AD: stloc.s 9 */
            
            loc9 = loc4;
            /* IL_B1: ldloc.s 9 */
            /* IL_B3: ret  */
            
            return loc9;
        }
    }
};/* System.Boolean TypeInfo.IsInstanceOfType(Object)*/

asm.x60001ac = function IsInstanceOfType(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.1  */
    /* IL_02: ldarg.0  */
    /* IL_03: ldfld constructor ctor */
    /* IL_08: call Boolean IsInstanceOfTypeImpl(System.Object, System.Object) */
    /* IL_0D: stloc.0  */
    
    loc0 = (arg0.ctor.IsInst(arg1) ? 1: 0);
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};;/*  TypeInfo..ctor(constructor)*/

asm.x600018f = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000057(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: ldarg.1  */
    /* IL_0A: stfld constructor ctor */
    
    arg0.ctor = arg1;
    /* IL_0F: ldarg.1  */
    /* IL_10: call Void init(System.Reflection.TypeInfo+constructor) */
    
    arg1.init();
    /* IL_15: nop  */
    /* IL_16: ret  */
    
    return ;
};;/*  AssemblyCompanyAttribute..ctor(Object)*/

asm.x60001ad = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/*  AssemblyConfigurationAttribute..ctor(Object)*/

asm.x60001ae = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/*  AssemblyFileVersionAttribute..ctor(Object)*/

asm.x60001af = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/*  AssemblyInformationalVersionAttribute..ctor(Object)*/

asm.x60001b0 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/*  AssemblyTitleAttribute..ctor(Object)*/

asm.x60001b1 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/*  AssemblyVersionAttribute..ctor(Object)*/

asm.x60001b2 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/*  AssemblyProductAttribute..ctor(Object)*/

asm.x60001b3 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/* System.String DefaultMemberAttribute.get_MemberName()*/

asm.x60001b5 = function get_MemberName(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld String member_name */
    /* IL_07: stloc.0  */
    
    loc0 = arg0.System_ReflectionDefaultMemberAttributemember_name;
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/*  DefaultMemberAttribute..ctor(String)*/

asm.x60001b4 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x6000080(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: ldarg.1  */
    /* IL_0A: stfld String member_name */
    
    arg0.System_ReflectionDefaultMemberAttributemember_name = arg1;
    /* IL_0F: ret  */
    
    return ;
};;/* static System.Reflection.MethodInfo MethodInfo.GetInstance(Array)*/

asm.x60001ba_init = function (arg0)
{
    
    (asm0["System.Reflection.MethodInfo"]().init)();
    
    asm.x60001ba = asm.x60001ba_;
};;

asm.x60001ba = function (arg0)
{
    
    asm.x60001ba_init(arg0);
    
    return asm.x60001ba_(arg0);
};;
asm.x60001ba_ = function GetInstance(arg0)
{
    var t0;
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    var loc0;
    
    t0 = asm0["System.Reflection.MethodInfo"]();
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    
    st_00 = CILJS.newobj(t0,asm0.x60001b9,[null]);
    /* IL_06: dup  */
    
    st_03 = st_01 = st_00;
    /* IL_07: ldarg.0  */
    
    st_02 = arg0;
    /* IL_08: stfld Array methodData */
    
    st_01.System_ReflectionMethodInfomethodData = st_02;
    /* IL_0D: stloc.0  */
    
    loc0 = st_03;
    /* IL_10: ldloc.0  */
    /* IL_11: ret  */
    
    return loc0;
};/* System.Object[] MethodInfo.GetCustomAttributes(Boolean)*/

asm.x60001bb = function GetCustomAttributes(arg0, arg1)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld Array methodData */
    /* IL_07: ldc.i4.3  */
    /* IL_08: callvirt Object get_Item(System.Int32) */
    /* IL_0D: call Object[] GetCustomAttributesImpl(System.Object) */
    /* IL_12: stloc.0  */
    
    loc0 = asm0.x60001c9(arg0.System_ReflectionMethodInfomethodData[3]);
    /* IL_15: ldloc.0  */
    /* IL_16: ret  */
    
    return loc0;
};;/* System.Object[] MethodInfo.GetCustomAttributes(Type,Boolean)*/

asm.x60001bc_init = function (arg0, arg1, arg2)
{
    
    (asm0["System.NotImplementedException"]().init)();
    
    asm.x60001bc = asm.x60001bc_;
};;

asm.x60001bc = function (arg0, arg1, arg2)
{
    
    asm.x60001bc_init(arg0,arg1,arg2);
    
    return asm.x60001bc_(arg0,arg1,arg2);
};;
asm.x60001bc_ = function GetCustomAttributes(arg0, arg1, arg2)
{
    var t0;
    
    t0 = asm0["System.NotImplementedException"]();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: throw  */
    
    throw CILJS.newobj(t0,asm0.x6000070,[null]);
};/* System.Boolean MethodInfo.IsDefined(Type,Boolean)*/

asm.x60001bd_init = function (arg0, arg1, arg2)
{
    
    (asm0["System.NotImplementedException"]().init)();
    
    asm.x60001bd = asm.x60001bd_;
};;

asm.x60001bd = function (arg0, arg1, arg2)
{
    
    asm.x60001bd_init(arg0,arg1,arg2);
    
    return asm.x60001bd_(arg0,arg1,arg2);
};;
asm.x60001bd_ = function IsDefined(arg0, arg1, arg2)
{
    var t0;
    
    t0 = asm0["System.NotImplementedException"]();
    /* IL_00: nop  */
    /* IL_01: newobj Void .ctor() */
    /* IL_06: throw  */
    
    throw CILJS.newobj(t0,asm0.x6000070,[null]);
};/* System.Collections.Generic.IEnumerable`1[System.Reflection.CustomAttributeData] MethodInfo.get_CustomAttributes()*/

asm.x60001be_init = function (arg0)
{
    
    (asm0["System.Reflection.MethodInfo+<get_CustomAttributes>d__7"]().init)();
    
    asm.x60001be = asm.x60001be_;
};;

asm.x60001be = function (arg0)
{
    
    asm.x60001be_init(arg0);
    
    return asm.x60001be_(arg0);
};;
asm.x60001be_ = function get_CustomAttributes(arg0)
{
    var t0;
    var loc0;
    var loc1;
    
    t0 = asm0["System.Reflection.MethodInfo+<get_CustomAttributes>d__7"]();
    /* IL_00: ldc.i4.s 254 */
    /* IL_02: newobj Void .ctor(System.Int32) */
    /* IL_07: stloc.0  */
    
    loc0 = CILJS.newobj(t0,asm0.x600020f,[null, -2]);
    /* IL_08: ldloc.0  */
    /* IL_09: ldarg.0  */
    /* IL_0A: stfld MethodInfo <>4__this */
    
    loc0["<>4__this"] = arg0;
    /* IL_0F: ldloc.0  */
    /* IL_10: stloc.1  */
    
    loc1 = loc0;
    /* IL_11: ldloc.1  */
    /* IL_12: ret  */
    
    return loc1;
};/* System.String MethodInfo.get_Name()*/

asm.x60001bf_init = function (arg0)
{
    
    (asm0["CilJs.JavaScript.String"]().init)();
    
    asm.x60001bf = asm.x60001bf_;
};;

asm.x60001bf = function (arg0)
{
    
    asm.x60001bf_init(arg0);
    
    return asm.x60001bf_(arg0);
};;
asm.x60001bf_ = function get_Name(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["CilJs.JavaScript.String"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld Array methodData */
    /* IL_07: ldc.i4.2  */
    /* IL_08: callvirt Object get_Item(System.Int32) */
    /* IL_0D: call String UnsafeCast[CilJs.JavaScript.String](System.Object) */
    /* IL_12: call String op_Explicit(CilJs.JavaScript.String) */
    /* IL_17: stloc.0  */
    
    loc0 = CILJS.newString(arg0.System_ReflectionMethodInfomethodData[2]);
    /* IL_1A: ldloc.0  */
    /* IL_1B: ret  */
    
    return loc0;
};/* System.Object MethodInfo.Invoke(Object,Object[])*/

asm.x60001c0 = function Invoke(arg0, arg1, arg2)
{
    var loc0;
    var loc1;
    var loc2;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld Array methodData */
    /* IL_07: ldc.i4.0  */
    /* IL_08: callvirt Object get_Item(System.Int32) */
    /* IL_0D: stloc.0  */
    
    loc0 = arg0.System_ReflectionMethodInfomethodData[0];
    /* IL_0E: ldarg.0  */
    /* IL_0F: ldfld Array methodData */
    /* IL_14: ldc.i4.1  */
    /* IL_15: callvirt Object get_Item(System.Int32) */
    /* IL_1A: stloc.1  */
    
    loc1 = arg0.System_ReflectionMethodInfomethodData[1];
    /* IL_1B: ldloc.0  */
    /* IL_1C: ldloc.1  */
    /* IL_1D: ldarg.1  */
    /* IL_1E: ldarg.2  */
    /* IL_1F: call Object InvokeImpl(System.Object, System.Object, System.Object, System.Object[]) */
    /* IL_24: stloc.2  */
    
    loc2 = asm0.x60001c1(loc0,loc1,arg1,arg2);
    /* IL_27: ldloc.2  */
    /* IL_28: ret  */
    
    return loc2;
};;/* static System.Object MethodInfo.InvokeImpl(Object,Object,Object,Object[])*/

asm.x60001c1 = 
            function InvokeImpl(assembly, method, obj, parameters) {
                var args = [obj].concat(parameters.jsarr);
                return assembly[method].apply(null, args);
            }
            ;;/*  MethodInfo..ctor()*/

asm.x60001b9 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    
    asm0.x60001cb(arg0);
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/* System.Type CustomAttributeData.get_AttributeType()*/

asm.x60001c3_init = function (arg0)
{
    
    (asm0["System.Reflection.TypeInfo+constructor"]().init)();
    
    asm.x60001c3 = asm.x60001c3_;
};;

asm.x60001c3 = function (arg0)
{
    
    asm.x60001c3_init(arg0);
    
    return asm.x60001c3_(arg0);
};;
asm.x60001c3_ = function get_AttributeType(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Reflection.TypeInfo+constructor"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld Array raw */
    /* IL_07: ldc.i4.0  */
    /* IL_08: callvirt Object get_Item(System.Int32) */
    /* IL_0D: call constructor UnsafeCast[System.Reflection.TypeInfo+constructor](System.Object) */
    /* IL_12: call Type GetInstance(System.Reflection.TypeInfo+constructor) */
    /* IL_17: stloc.0  */
    
    loc0 = asm0.x6000191(arg0.System_ReflectionCustomAttributeDataraw[0]);
    /* IL_1A: ldloc.0  */
    /* IL_1B: ret  */
    
    return loc0;
};/*  CustomAttributeData..ctor(Array)*/

asm.x60001c2 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: ldarg.1  */
    /* IL_0A: stfld Array raw */
    
    arg0.System_ReflectionCustomAttributeDataraw = arg1;
    /* IL_0F: ret  */
    
    return ;
};;/* static System.Reflection.TypeInfo IntrospectionExtensions.GetTypeInfo(Type)*/

asm.x60001c4_init = function (arg0)
{
    
    (asm0["System.Reflection.TypeInfo"]().init)();
    
    asm.x60001c4 = asm.x60001c4_;
};;

asm.x60001c4 = function (arg0)
{
    
    asm.x60001c4_init(arg0);
    
    return asm.x60001c4_(arg0);
};;
asm.x60001c4_ = function GetTypeInfo(arg0)
{
    var t0;
    var loc0;
    
    t0 = asm0["System.Reflection.TypeInfo"]();
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: castclass System.Reflection.TypeInfo */
    /* IL_07: stloc.0  */
    
    loc0 = CILJS.castClass(arg0,t0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};/* System.Collections.Generic.IEnumerable`1[System.Reflection.CustomAttributeData] MemberInfo.get_CustomAttributes()*/

asm.x60001c7 = function get_CustomAttributes(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldnull  */
    /* IL_02: stloc.0  */
    
    loc0 = null;
    /* IL_05: ldloc.0  */
    /* IL_06: ret  */
    
    return loc0;
};;/* static System.Object[] MemberInfo.GetCustomAttributesImpl(Object)*/

asm.x60001c9 = 
            function (ca) {
                ca = ca || [];
                var r = CILJS.newArray(asm0['System.Object'], ca.length);
                for (var i=0; i<ca.length; i++) {
                    var attr_type = ca[i][0];
                    var attr_ctor = ca[i][1];
                    var attr_ctor_args_data = ca[i][2];
                    var attr = new attr_type();
                    var attr_ctor_args = [attr];
                    if (attr_ctor_args_data) {
                        for (var j=0; j<attr_ctor_args_data.length; j++) {
                            var d = attr_ctor_args_data[j];
                            if (typeof d === 'function') {
                                d(); // init type
                                d = asm0.GetReflectionType(d);
                            }
                            attr_ctor_args.push(d);
                        }
                    }
                    attr_ctor.apply(null, attr_ctor_args);
                    r.jsarr[i] = attr;
                }
                return r;
            }
            ;;/*  MemberInfo..ctor()*/

asm.x60001cb = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Reflection.Assembly Assembly.GetInstance(jsAsm)*/

asm.x60001cd_init = function (arg0)
{
    
    (asm0["System.Reflection.Assembly"]().init)();
    
    asm.x60001cd = asm.x60001cd_;
};;

asm.x60001cd = function (arg0)
{
    
    asm.x60001cd_init(arg0);
    
    return asm.x60001cd_(arg0);
};;
asm.x60001cd_ = function GetInstance(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    
    t0 = asm0["System.Reflection.Assembly"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld Assembly ManagedInstance */
            /* IL_07: call Boolean IsUndefined(System.Object) */
            /* IL_0C: stloc.0  */
            
            loc0 = asm0.x60001ee(arg0.ManagedInstance);
            /* IL_0D: ldloc.0  */
            /* IL_0E: brfalse.s IL_1C */
            
            if ((!(loc0))){
                
                __pos__ = 0x1C;
                
                continue;
            }
            /* IL_10: ldarg.0  */
            /* IL_11: ldarg.0  */
            /* IL_12: newobj Void .ctor(System.Reflection.Assembly+jsAsm) */
            /* IL_17: stfld Assembly ManagedInstance */
            
            arg0.ManagedInstance = CILJS.newobj(t0,asm0.x60001cc,[null, arg0]);
            case 0x1C:
            /* IL_1C: ldarg.0  */
            /* IL_1D: ldfld Assembly ManagedInstance */
            /* IL_22: stloc.1  */
            
            loc1 = arg0.ManagedInstance;
            /* IL_25: ldloc.1  */
            /* IL_26: ret  */
            
            return loc1;
        }
    }
};/* System.String Assembly.get_FullName()*/

asm.x60001ce = function get_FullName(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld jsAsm rawAsm */
    /* IL_07: ldfld Object FullName */
    /* IL_0C: call String FromJsString(System.Object) */
    /* IL_11: stloc.0  */
    
    loc0 = CILJS.newString(arg0.System_ReflectionAssemblyrawAsm.FullName);
    /* IL_14: ldloc.0  */
    /* IL_15: ret  */
    
    return loc0;
};;/*  Assembly..ctor(jsAsm)*/

asm.x60001cc = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: ldarg.1  */
    /* IL_0A: stfld jsAsm rawAsm */
    
    arg0.System_ReflectionAssemblyrawAsm = arg1;
    /* IL_0F: ret  */
    
    return ;
};;/*  UnboundGenericParameter..ctor()*/

asm.x60001d0 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static System.Object Marshal.get_Null()*/

asm.x60001de = function get_Null()
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: call Object null_impl() */
    /* IL_06: stloc.0  */
    
    loc0 = null;
    /* IL_09: ldloc.0  */
    /* IL_0A: ret  */
    
    return loc0;
};;/* static System.Boolean Object.IsUndefined(Object)*/

asm.x60001ee = function (o) { return o === void 0; };;/*  Object..ctor()*/

asm.x60001ef = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/*  String..ctor()*/

asm.x60001f0 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/* static  String..cctor()*/

asm.x60001f5_init = function ()
{
    
    (asm0["CilJs.JavaScript.String"]().init)();
    
    asm.x60001f5 = asm.x60001f5_;
};;

asm.x60001f5 = function ()
{
    
    asm.x60001f5_init();
    
    return asm.x60001f5_();
};;
asm.x60001f5_ = function _cctor()
{
    var t0;
    
    if (asm0["CilJs.JavaScript.String"]().FieldsInitialized){
        
        return;
    }
    
    asm0["CilJs.JavaScript.String"]().FieldsInitialized = true;
    
    t0 = asm0["CilJs.JavaScript.String"]();
    /* IL_00: call String GetEmpty() */
    /* IL_05: stsfld String Emtpy */
    
    t0.Emtpy = "";
    /* IL_0A: ret  */
    
    return ;
};/* System.Collections.Generic.IEnumerator`1[System.Object] Array.GetEnumerator()*/

asm.x60001fb_init = function (arg0)
{
    
    (asm0["CilJs.JavaScript.Array+<GetEnumerator>d__7"]().init)();
    
    asm.x60001fb = asm.x60001fb_;
};;

asm.x60001fb = function (arg0)
{
    
    asm.x60001fb_init(arg0);
    
    return asm.x60001fb_(arg0);
};;
asm.x60001fb_ = function GetEnumerator(arg0)
{
    var t0;
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    
    t0 = asm0["CilJs.JavaScript.Array+<GetEnumerator>d__7"]();
    
    
    
    
    
    
    
    
    
    
    /* IL_00: ldc.i4.0  */
    
    st_00 = 0;
    /* IL_01: newobj Void .ctor(System.Int32) */
    
    st_01 = CILJS.newobj(t0,asm0.x6000219,[null, st_00]);
    /* IL_06: dup  */
    
    st_04 = st_02 = st_01;
    /* IL_07: ldarg.0  */
    
    st_03 = arg0;
    /* IL_08: stfld Array <>4__this */
    
    st_02["<>4__this"] = st_03;
    /* IL_0D: ret  */
    
    return st_04;
};/* System.Collections.Generic.IEnumerable`1[System.Object] Array.AsEnumerable()*/

asm.x60001fc_init = function (arg0)
{
    
    (asm0["CilJs.JavaScript.Array+<AsEnumerable>d__8"]().init)();
    
    asm.x60001fc = asm.x60001fc_;
};;

asm.x60001fc = function (arg0)
{
    
    asm.x60001fc_init(arg0);
    
    return asm.x60001fc_(arg0);
};;
asm.x60001fc_ = function AsEnumerable(arg0)
{
    var t0;
    var st_00;
    var st_01;
    var st_02;
    var st_03;
    var st_04;
    
    t0 = asm0["CilJs.JavaScript.Array+<AsEnumerable>d__8"]();
    
    
    
    
    
    
    
    
    
    
    /* IL_00: ldc.i4.s 254 */
    
    st_00 = -2;
    /* IL_02: newobj Void .ctor(System.Int32) */
    
    st_01 = CILJS.newobj(t0,asm0.x600021f,[null, st_00]);
    /* IL_07: dup  */
    
    st_04 = st_02 = st_01;
    /* IL_08: ldarg.0  */
    
    st_03 = arg0;
    /* IL_09: stfld Array <>4__this */
    
    st_02["<>4__this"] = st_03;
    /* IL_0E: ret  */
    
    return st_04;
};/*  Array..ctor()*/

asm.x60001f6 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ret  */
    
    return ;
};;/* System.Int32 <>c__DisplayClass23_0`1.<Sort>b__0(T,T)*/

asm.x60001fe_init = function (arg0, arg1, arg2)
{
    
    (asm0["System.Collections.Generic.IComparer`1"](((arg0.constructor.GenericArguments)["asm0.t2000076"])[0]).init)();
};;

asm.x60001fe = function (arg0, arg1, arg2)
{
    
    asm.x60001fe_init(arg0,arg1,arg2);
    
    return asm.x60001fe_(arg0,arg1,arg2);
};;
asm.x60001fe_ = function _Sort_b__0(arg0, arg1, arg2)
{
    var t0;
    var t1;
    
    t0 = ((arg0.constructor.GenericArguments)["asm0.t2000076"])[0];
    
    t1 = asm0["System.Collections.Generic.IComparer`1"](t0);
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld IComparer`1 comparer */
    /* IL_06: ldarg.1  */
    /* IL_07: ldarg.2  */
    /* IL_08: callvirt Int32 Compare(T, T) */
    /* IL_0D: ret  */
    
    return (((arg0.comparer.ifacemap)[t1])[t0].x600018c)(CILJS.convertBoxToPointerAsNeeded(arg0.comparer),arg1,arg2);
};/*  <>c__DisplayClass23_0`1..ctor()*/

asm.x60001fd = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* T ArrayEnumerator.get_Current()*/

asm.x6000200 = function get_Current(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld Array`1 source */
    /* IL_07: ldarg.0  */
    /* IL_08: ldfld Int32 index */
    /* IL_0D: callvirt T GetTypedValue(System.Int32) */
    /* IL_12: stloc.0  */
    
    loc0 = arg0.source.jsarr[arg0.index];
    /* IL_15: ldloc.0  */
    /* IL_16: ret  */
    
    return loc0;
};;/* System.Boolean ArrayEnumerator.MoveNext()*/

asm.x6000201 = function MoveNext(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldarg.0  */
    /* IL_03: ldfld Int32 index */
    /* IL_08: ldc.i4.1  */
    /* IL_09: add  */
    /* IL_0A: stfld Int32 index */
    
    arg0.index = ((arg0.index + 1) | 0);
    /* IL_0F: ldarg.0  */
    /* IL_10: ldfld Int32 index */
    /* IL_15: ldarg.0  */
    /* IL_16: ldfld Int32 length */
    /* IL_1C: clt  */
    /* IL_1D: stloc.0  */
    
    loc0 = ((arg0.index < arg0.length) ? 1 : 0);
    /* IL_20: ldloc.0  */
    /* IL_21: ret  */
    
    return loc0;
};;/* System.Object ArrayEnumerator.System.Collections.IEnumerator.get_Current()*/

asm.x6000202 = function System_Collections_IEnumerator_get_Current(arg0)
{
    var t0;
    var loc0;
    
    t0 = ((arg0.constructor.GenericArguments)["asm0.t2000077"])[0];
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call T get_Current() */
    /* IL_07: box T */
    /* IL_0C: stloc.0  */
    
    loc0 = CILJS.box(asm0.x6000200(arg0),t0);
    /* IL_0F: ldloc.0  */
    /* IL_10: ret  */
    
    return loc0;
};;/* System.Void ArrayEnumerator.Reset()*/

asm.x6000203 = function Reset(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldc.i4.m1  */
    /* IL_03: stfld Int32 index */
    
    arg0.index = -1;
    /* IL_08: ret  */
    
    return ;
};;/* System.Void ArrayEnumerator.Dispose()*/

asm.x6000204 = function Dispose(arg0)
{
    /* IL_00: nop  */
    /* IL_01: ret  */
    
    return ;
};;/*  ArrayEnumerator..ctor(Array`1)*/

asm.x60001ff = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: ldarg.1  */
    /* IL_0A: stfld Array`1 source */
    
    arg0.source = arg1;
    /* IL_0F: ldarg.0  */
    /* IL_10: ldc.i4.m1  */
    /* IL_11: stfld Int32 index */
    
    arg0.index = -1;
    /* IL_16: ldarg.0  */
    /* IL_17: ldarg.1  */
    /* IL_18: callvirt Int32 get_Length() */
    /* IL_1D: stfld Int32 length */
    
    arg0.length = asm0.x60000e2(arg1);
    /* IL_22: ret  */
    
    return ;
};;/*  constructor..ctor()*/

asm.x6000205 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void <get_CustomAttributes>d__18.System.IDisposable.Dispose()*/

asm.x6000207 = function System_IDisposable_Dispose(arg0)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var in_block_1;
    var __finally_continuation_1__;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: ldarg.0  */
            /* IL_01: ldfld Int32 <>1__state */
            /* IL_06: stloc.0  */
            
            loc0 = arg0["System_Reflection_get_CustomAttributes_d__18<>1__state"];
            /* IL_07: ldloc.0  */
            /* IL_08: ldc.i4.s 253 */
            /* IL_0A: beq.s IL_20 */
            
            if (loc0 === -3){
                
                __pos__ = 0x20;
                
                continue;
            }
            /* IL_0E: ldloc.0  */
            /* IL_0F: ldc.i4.1  */
            /* IL_10: beq.s IL_20 */
            
            if (loc0 === 1){
                
                __pos__ = 0x20;
                
                continue;
            }
            /* IL_12: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x14:
            /* IL_14: nop  */
            
            try {
                
                in_block_1 = true;
                
                __finally_continuation_1__ = __pos__;
                
                if (__pos__ < 0x15){
                    
                    __pos__ = 0x15;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x15:
                        /* IL_15: leave.s IL_1E */
                        
                        in_block_1 = false;
                        
                        __pos__ = 0x1E;
                        
                        continue;
                    }
                }
            }
            
            finally {
                
                in_block_1 = true;
                
                __finally_continuation_1__ = __pos__;
                
                __pos__ = 0x17;
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x17:
                        /* IL_17: ldarg.0  */
                        /* IL_18: call Void <>m__Finally1() */
                        
                        asm0.x6000209(arg0);
                        /* IL_1D: endfinally  */
                        
                        in_block_1 = false;
                        
                        __pos__ = __finally_continuation_1__;
                        
                        continue;
                    }
                    
                    break;
                }
            }
            
            continue;
            case 0x1E:
            /* IL_1E: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x20:
            /* IL_20: ret  */
            
            return ;
        }
    }
};;/* System.Boolean <get_CustomAttributes>d__18.MoveNext()*/

asm.x6000208_init = function (arg0)
{
    
    (asm0["System.Collections.Generic.IEnumerator`1"](asm0["System.Object"]()).init)();
    
    (asm0["CilJs.JavaScript.Array"]().init)();
    
    (asm0["System.Reflection.CustomAttributeData"]().init)();
    
    (asm0["System.Collections.IEnumerator"]().init)();
    
    asm.x6000208 = asm.x6000208_;
};;

asm.x6000208 = function (arg0)
{
    
    asm.x6000208_init(arg0);
    
    return asm.x6000208_(arg0);
};;
asm.x6000208_ = function MoveNext(arg0)
{
    var t0;
    var t1;
    var t2;
    var t3;
    var t4;
    var in_block_0;
    var __pos__;
    var in_block_1;
    var loc1;
    var loc0;
    var __error_handled_1__;
    
    t0 = asm0["System.Object"]();
    
    t1 = asm0["System.Collections.Generic.IEnumerator`1"](t0);
    
    t2 = asm0["CilJs.JavaScript.Array"]();
    
    t3 = asm0["System.Reflection.CustomAttributeData"]();
    
    t4 = asm0["System.Collections.IEnumerator"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            
            try {
                
                in_block_1 = true;
                
                if (__pos__ < 0x0){
                    
                    __pos__ = 0x0;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x0:
                        /* IL_00: ldarg.0  */
                        /* IL_01: ldfld Int32 <>1__state */
                        /* IL_06: stloc.1  */
                        
                        loc1 = arg0["System_Reflection_get_CustomAttributes_d__18<>1__state"];
                        /* IL_07: ldloc.1  */
                        /* IL_08: brfalse.s IL_1D */
                        
                        if ((!(loc1))){
                            
                            __pos__ = 0x1D;
                            
                            continue;
                        }
                        /* IL_0C: ldloc.1  */
                        /* IL_0D: ldc.i4.1  */
                        /* IL_0E: beq.s IL_7E */
                        
                        if (loc1 === 1){
                            
                            __pos__ = 0x7E;
                            
                            continue;
                        }
                        /* IL_10: br.s IL_16 */
                        
                        __pos__ = 0x16;
                        
                        continue;
                        case 0x12:
                        /* IL_12: br.s IL_1D */
                        
                        __pos__ = 0x1D;
                        
                        continue;
                        case 0x14:
                        /* IL_14: br.s IL_7E */
                        
                        __pos__ = 0x7E;
                        
                        continue;
                        case 0x16:
                        /* IL_16: ldc.i4.0  */
                        /* IL_17: stloc.0  */
                        
                        loc0 = 0;
                        /* IL_18: leave IL_B5 */
                        
                        in_block_1 = false;
                        
                        __pos__ = 0xB5;
                        
                        continue;
                        case 0x1D:
                        /* IL_1D: ldarg.0  */
                        /* IL_1E: ldc.i4.m1  */
                        /* IL_1F: stfld Int32 <>1__state */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__18<>1__state"] = -1;
                        /* IL_24: nop  */
                        /* IL_25: nop  */
                        /* IL_26: ldarg.0  */
                        /* IL_27: ldarg.0  */
                        /* IL_28: ldfld TypeInfo <>4__this */
                        /* IL_2D: ldfld constructor ctor */
                        /* IL_32: ldfld Array CustomAttributes */
                        /* IL_37: callvirt IEnumerator`1 GetEnumerator() */
                        /* IL_3C: stfld IEnumerator`1 <>s__1 */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__18<>s__1"] = asm0.x60001fb(arg0["<>4__this"].ctor.CustomAttributes);
                        /* IL_41: ldarg.0  */
                        /* IL_42: ldc.i4.s 253 */
                        /* IL_44: stfld Int32 <>1__state */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__18<>1__state"] = -3;
                        /* IL_49: br.s IL_8E */
                        
                        __pos__ = 0x8E;
                        
                        continue;
                        case 0x4B:
                        /* IL_4B: ldarg.0  */
                        /* IL_4C: ldarg.0  */
                        /* IL_4D: ldfld IEnumerator`1 <>s__1 */
                        /* IL_52: callvirt Object get_Current() */
                        /* IL_57: stfld Object <rawAttribData>5__2 */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__18<rawAttribData>5__2"] = (((arg0["System_Reflection_get_CustomAttributes_d__18<>s__1"].ifacemap)[t1])[t0].x600018d)(CILJS.convertBoxToPointerAsNeeded(arg0["System_Reflection_get_CustomAttributes_d__18<>s__1"]));
                        /* IL_5C: nop  */
                        /* IL_5D: ldarg.0  */
                        /* IL_5E: ldarg.0  */
                        /* IL_5F: ldfld Object <rawAttribData>5__2 */
                        /* IL_64: call Array UnsafeCast[CilJs.JavaScript.Array](System.Object) */
                        /* IL_69: newobj Void .ctor(CilJs.JavaScript.Array) */
                        /* IL_6E: stfld CustomAttributeData <>2__current */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__18<>2__current"] = CILJS.newobj(t3,asm0.x60001c2,[null, arg0["System_Reflection_get_CustomAttributes_d__18<rawAttribData>5__2"]]);
                        /* IL_73: ldarg.0  */
                        /* IL_74: ldc.i4.1  */
                        /* IL_75: stfld Int32 <>1__state */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__18<>1__state"] = 1;
                        /* IL_7A: ldc.i4.1  */
                        /* IL_7B: stloc.0  */
                        
                        loc0 = 1;
                        /* IL_7C: leave.s IL_B5 */
                        
                        in_block_1 = false;
                        
                        __pos__ = 0xB5;
                        
                        continue;
                        case 0x7E:
                        /* IL_7E: ldarg.0  */
                        /* IL_7F: ldc.i4.s 253 */
                        /* IL_81: stfld Int32 <>1__state */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__18<>1__state"] = -3;
                        /* IL_86: nop  */
                        /* IL_87: ldarg.0  */
                        /* IL_88: ldnull  */
                        /* IL_89: stfld Object <rawAttribData>5__2 */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__18<rawAttribData>5__2"] = null;
                        case 0x8E:
                        /* IL_8E: ldarg.0  */
                        /* IL_8F: ldfld IEnumerator`1 <>s__1 */
                        /* IL_94: callvirt Boolean MoveNext() */
                        /* IL_99: brtrue.s IL_4B */
                        
                        if (((arg0["System_Reflection_get_CustomAttributes_d__18<>s__1"].ifacemap)[t4].x6000182)(CILJS.convertBoxToPointerAsNeeded(arg0["System_Reflection_get_CustomAttributes_d__18<>s__1"]))){
                            
                            __pos__ = 0x4B;
                            
                            continue;
                        }
                        /* IL_9B: ldarg.0  */
                        /* IL_9C: call Void <>m__Finally1() */
                        
                        asm0.x6000209(arg0);
                        /* IL_A1: nop  */
                        /* IL_A2: ldarg.0  */
                        /* IL_A3: ldnull  */
                        /* IL_A4: stfld IEnumerator`1 <>s__1 */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__18<>s__1"] = null;
                        /* IL_A9: ldc.i4.0  */
                        /* IL_AA: stloc.0  */
                        
                        loc0 = 0;
                        /* IL_AB: leave.s IL_B5 */
                        
                        in_block_1 = false;
                        
                        __pos__ = 0xB5;
                        
                        continue;
                    }
                }
            }
            
            catch (__error__) {
                
                __error_handled_1__ = false;
                
                if ((!(__error_handled_1__))){
                    
                    throw __error__;
                }
                
                if (__error_handled_1__ === false){
                    
                    in_block_1 = true;
                    
                    if (__pos__ < 0xAD){
                        
                        __pos__ = 0xAD;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0xAD:
                            /* IL_AD: ldarg.0  */
                            /* IL_AE: call Void System.IDisposable.Dispose() */
                            
                            asm0.x6000207(arg0);
                            /* IL_B3: nop  */
                            /* IL_B4: endfinally  */
                            
                            in_block_1 = false;
                            
                            __pos__ = __finally_continuation_1__;
                            
                            continue;
                            
                            throw __error__;
                        }
                    }
                }
            }
            
            continue;
            case 0xB5:
            /* IL_B5: ldloc.0  */
            /* IL_B6: ret  */
            
            return loc0;
        }
    }
};/* System.Void <get_CustomAttributes>d__18.<>m__Finally1()*/

asm.x6000209 = function __m__Finally1(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    
    t0 = asm0["System.IDisposable"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: ldarg.0  */
            /* IL_01: ldc.i4.m1  */
            /* IL_02: stfld Int32 <>1__state */
            
            arg0["System_Reflection_get_CustomAttributes_d__18<>1__state"] = -1;
            /* IL_07: ldarg.0  */
            /* IL_08: ldfld IEnumerator`1 <>s__1 */
            /* IL_0D: brfalse.s IL_1B */
            
            if ((!(arg0["System_Reflection_get_CustomAttributes_d__18<>s__1"]))){
                
                __pos__ = 0x1B;
                
                continue;
            }
            /* IL_0F: ldarg.0  */
            /* IL_10: ldfld IEnumerator`1 <>s__1 */
            /* IL_15: callvirt Void Dispose() */
            
            ((arg0["System_Reflection_get_CustomAttributes_d__18<>s__1"].ifacemap)[t0].x60000dd)(CILJS.convertBoxToPointerAsNeeded(arg0["System_Reflection_get_CustomAttributes_d__18<>s__1"]));
            /* IL_1A: nop  */
            case 0x1B:
            /* IL_1B: ret  */
            
            return ;
        }
    }
};;/* System.Reflection.CustomAttributeData <get_CustomAttributes>d__18.System.Collections.Generic.IEnumerator<System.Reflection.CustomAttributeData>.get_Current()*/

asm.x600020a = function System_Collections_Generic_IEnumerator_System_Reflection_CustomAttributeData__get_Current(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld CustomAttributeData <>2__current */
    /* IL_06: ret  */
    
    return arg0["System_Reflection_get_CustomAttributes_d__18<>2__current"];
};;/* System.Void <get_CustomAttributes>d__18.System.Collections.IEnumerator.Reset()*/

asm.x600020b_init = function (arg0)
{
    
    (asm0["System.NotSupportedException"]().init)();
    
    asm.x600020b = asm.x600020b_;
};;

asm.x600020b = function (arg0)
{
    
    asm.x600020b_init(arg0);
    
    return asm.x600020b_(arg0);
};;
asm.x600020b_ = function System_Collections_IEnumerator_Reset(arg0)
{
    var t0;
    
    t0 = asm0["System.NotSupportedException"]();
    /* IL_00: newobj Void .ctor() */
    /* IL_05: throw  */
    
    throw CILJS.newobj(t0,asm0.x6000134,[null]);
};/* System.Object <get_CustomAttributes>d__18.System.Collections.IEnumerator.get_Current()*/

asm.x600020c = function System_Collections_IEnumerator_get_Current(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld CustomAttributeData <>2__current */
    /* IL_06: ret  */
    
    return arg0["System_Reflection_get_CustomAttributes_d__18<>2__current"];
};;/* System.Collections.Generic.IEnumerator`1[System.Reflection.CustomAttributeData] <get_CustomAttributes>d__18.System.Collections.Generic.IEnumerable<System.Reflection.CustomAttributeData>.GetEnumerator()*/

asm.x600020d_init = function (arg0)
{
    
    (asm0["System.Reflection.TypeInfo+<get_CustomAttributes>d__18"]().init)();
    
    asm.x600020d = asm.x600020d_;
};;

asm.x600020d = function (arg0)
{
    
    asm.x600020d_init(arg0);
    
    return asm.x600020d_(arg0);
};;
asm.x600020d_ = function System_Collections_Generic_IEnumerable_System_Reflection_CustomAttributeData__GetEnumerator(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    
    t0 = asm0["System.Reflection.TypeInfo+<get_CustomAttributes>d__18"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: ldarg.0  */
            /* IL_01: ldfld Int32 <>1__state */
            /* IL_06: ldc.i4.s 254 */
            /* IL_08: bne.un.s IL_22 */
            
            if (CILJS.unsignedValue(arg0["System_Reflection_get_CustomAttributes_d__18<>1__state"]) != CILJS.unsignedValue(-2)){
                
                __pos__ = 0x22;
                
                continue;
            }
            /* IL_0A: ldarg.0  */
            /* IL_0B: ldfld Int32 <>l__initialThreadId */
            /* IL_10: call Int32 get_CurrentManagedThreadId() */
            /* IL_15: bne.un.s IL_22 */
            
            if (CILJS.unsignedValue(arg0["System_Reflection_get_CustomAttributes_d__18<>l__initialThreadId"]) != CILJS.unsignedValue(asm0.x6000149())){
                
                __pos__ = 0x22;
                
                continue;
            }
            /* IL_17: ldarg.0  */
            /* IL_18: ldc.i4.0  */
            /* IL_19: stfld Int32 <>1__state */
            
            arg0["System_Reflection_get_CustomAttributes_d__18<>1__state"] = 0;
            /* IL_1E: ldarg.0  */
            /* IL_1F: stloc.0  */
            
            loc0 = arg0;
            /* IL_20: br.s IL_35 */
            
            __pos__ = 0x35;
            
            continue;
            case 0x22:
            /* IL_22: ldc.i4.0  */
            /* IL_23: newobj Void .ctor(System.Int32) */
            /* IL_28: stloc.0  */
            
            loc0 = CILJS.newobj(t0,asm0.x6000206,[null, 0]);
            /* IL_29: ldloc.0  */
            /* IL_2A: ldarg.0  */
            /* IL_2B: ldfld TypeInfo <>4__this */
            /* IL_30: stfld TypeInfo <>4__this */
            
            loc0["<>4__this"] = arg0["<>4__this"];
            case 0x35:
            /* IL_35: ldloc.0  */
            /* IL_36: ret  */
            
            return loc0;
        }
    }
};/* System.Collections.IEnumerator <get_CustomAttributes>d__18.System.Collections.IEnumerable.GetEnumerator()*/

asm.x600020e = function System_Collections_IEnumerable_GetEnumerator(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call IEnumerator`1 System.Collections.Generic.IEnumerable<System.Reflection.CustomAttributeData>.GetEnumerator() */
    /* IL_06: ret  */
    
    return asm0.x600020d(arg0);
};;/*  <get_CustomAttributes>d__18..ctor(Int32)*/

asm.x6000206 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ldarg.0  */
    /* IL_08: ldarg.1  */
    /* IL_09: stfld Int32 <>1__state */
    
    arg0["System_Reflection_get_CustomAttributes_d__18<>1__state"] = arg1;
    /* IL_0E: ldarg.0  */
    /* IL_0F: call Int32 get_CurrentManagedThreadId() */
    /* IL_14: stfld Int32 <>l__initialThreadId */
    
    arg0["System_Reflection_get_CustomAttributes_d__18<>l__initialThreadId"] = asm0.x6000149();
    /* IL_19: ret  */
    
    return ;
};;/* System.Void <get_CustomAttributes>d__7.System.IDisposable.Dispose()*/

asm.x6000210 = function System_IDisposable_Dispose(arg0)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var in_block_1;
    var __finally_continuation_1__;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: ldarg.0  */
            /* IL_01: ldfld Int32 <>1__state */
            /* IL_06: stloc.0  */
            
            loc0 = arg0["System_Reflection_get_CustomAttributes_d__7<>1__state"];
            /* IL_07: ldloc.0  */
            /* IL_08: ldc.i4.s 253 */
            /* IL_0A: beq.s IL_20 */
            
            if (loc0 === -3){
                
                __pos__ = 0x20;
                
                continue;
            }
            /* IL_0E: ldloc.0  */
            /* IL_0F: ldc.i4.1  */
            /* IL_10: beq.s IL_20 */
            
            if (loc0 === 1){
                
                __pos__ = 0x20;
                
                continue;
            }
            /* IL_12: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x14:
            /* IL_14: nop  */
            
            try {
                
                in_block_1 = true;
                
                __finally_continuation_1__ = __pos__;
                
                if (__pos__ < 0x15){
                    
                    __pos__ = 0x15;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x15:
                        /* IL_15: leave.s IL_1E */
                        
                        in_block_1 = false;
                        
                        __pos__ = 0x1E;
                        
                        continue;
                    }
                }
            }
            
            finally {
                
                in_block_1 = true;
                
                __finally_continuation_1__ = __pos__;
                
                __pos__ = 0x17;
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x17:
                        /* IL_17: ldarg.0  */
                        /* IL_18: call Void <>m__Finally1() */
                        
                        asm0.x6000212(arg0);
                        /* IL_1D: endfinally  */
                        
                        in_block_1 = false;
                        
                        __pos__ = __finally_continuation_1__;
                        
                        continue;
                    }
                    
                    break;
                }
            }
            
            continue;
            case 0x1E:
            /* IL_1E: br.s IL_20 */
            
            __pos__ = 0x20;
            
            continue;
            case 0x20:
            /* IL_20: ret  */
            
            return ;
        }
    }
};;/* System.Boolean <get_CustomAttributes>d__7.MoveNext()*/

asm.x6000211_init = function (arg0)
{
    
    (asm0["CilJs.JavaScript.Array"]().init)();
    
    (asm0["System.Collections.Generic.IEnumerator`1"](asm0["System.Object"]()).init)();
    
    (asm0["System.Reflection.CustomAttributeData"]().init)();
    
    (asm0["System.Collections.IEnumerator"]().init)();
    
    asm.x6000211 = asm.x6000211_;
};;

asm.x6000211 = function (arg0)
{
    
    asm.x6000211_init(arg0);
    
    return asm.x6000211_(arg0);
};;
asm.x6000211_ = function MoveNext(arg0)
{
    var t0;
    var t1;
    var t2;
    var t3;
    var t4;
    var in_block_0;
    var __pos__;
    var in_block_1;
    var loc1;
    var loc0;
    var __error_handled_1__;
    
    t0 = asm0["CilJs.JavaScript.Array"]();
    
    t1 = asm0["System.Object"]();
    
    t2 = asm0["System.Collections.Generic.IEnumerator`1"](t1);
    
    t3 = asm0["System.Reflection.CustomAttributeData"]();
    
    t4 = asm0["System.Collections.IEnumerator"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            
            try {
                
                in_block_1 = true;
                
                if (__pos__ < 0x0){
                    
                    __pos__ = 0x0;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x0:
                        /* IL_00: ldarg.0  */
                        /* IL_01: ldfld Int32 <>1__state */
                        /* IL_06: stloc.1  */
                        
                        loc1 = arg0["System_Reflection_get_CustomAttributes_d__7<>1__state"];
                        /* IL_07: ldloc.1  */
                        /* IL_08: brfalse.s IL_1D */
                        
                        if ((!(loc1))){
                            
                            __pos__ = 0x1D;
                            
                            continue;
                        }
                        /* IL_0C: ldloc.1  */
                        /* IL_0D: ldc.i4.1  */
                        /* IL_0E: beq.s IL_90 */
                        
                        if (loc1 === 1){
                            
                            __pos__ = 0x90;
                            
                            continue;
                        }
                        /* IL_10: br.s IL_16 */
                        
                        __pos__ = 0x16;
                        
                        continue;
                        case 0x12:
                        /* IL_12: br.s IL_1D */
                        
                        __pos__ = 0x1D;
                        
                        continue;
                        case 0x14:
                        /* IL_14: br.s IL_90 */
                        
                        __pos__ = 0x90;
                        
                        continue;
                        case 0x16:
                        /* IL_16: ldc.i4.0  */
                        /* IL_17: stloc.0  */
                        
                        loc0 = 0;
                        /* IL_18: leave IL_C7 */
                        
                        in_block_1 = false;
                        
                        __pos__ = 0xC7;
                        
                        continue;
                        case 0x1D:
                        /* IL_1D: ldarg.0  */
                        /* IL_1E: ldc.i4.m1  */
                        /* IL_1F: stfld Int32 <>1__state */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__7<>1__state"] = -1;
                        /* IL_24: nop  */
                        /* IL_25: ldarg.0  */
                        /* IL_26: ldarg.0  */
                        /* IL_27: ldfld MethodInfo <>4__this */
                        /* IL_2C: ldfld Array methodData */
                        /* IL_31: ldc.i4.3  */
                        /* IL_32: callvirt Object get_Item(System.Int32) */
                        /* IL_37: call Array UnsafeCast[CilJs.JavaScript.Array](System.Object) */
                        /* IL_3C: stfld Array <attributes>5__1 */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__7<attributes>5__1"] = arg0["<>4__this"].System_ReflectionMethodInfomethodData[3];
                        /* IL_41: nop  */
                        /* IL_42: ldarg.0  */
                        /* IL_43: ldarg.0  */
                        /* IL_44: ldfld Array <attributes>5__1 */
                        /* IL_49: callvirt IEnumerator`1 GetEnumerator() */
                        /* IL_4E: stfld IEnumerator`1 <>s__2 */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__7<>s__2"] = asm0.x60001fb(arg0["System_Reflection_get_CustomAttributes_d__7<attributes>5__1"]);
                        /* IL_53: ldarg.0  */
                        /* IL_54: ldc.i4.s 253 */
                        /* IL_56: stfld Int32 <>1__state */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__7<>1__state"] = -3;
                        /* IL_5B: br.s IL_A0 */
                        
                        __pos__ = 0xA0;
                        
                        continue;
                        case 0x5D:
                        /* IL_5D: ldarg.0  */
                        /* IL_5E: ldarg.0  */
                        /* IL_5F: ldfld IEnumerator`1 <>s__2 */
                        /* IL_64: callvirt Object get_Current() */
                        /* IL_69: stfld Object <rawAttribData>5__3 */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__7<rawAttribData>5__3"] = (((arg0["System_Reflection_get_CustomAttributes_d__7<>s__2"].ifacemap)[t2])[t1].x600018d)(CILJS.convertBoxToPointerAsNeeded(arg0["System_Reflection_get_CustomAttributes_d__7<>s__2"]));
                        /* IL_6E: nop  */
                        /* IL_6F: ldarg.0  */
                        /* IL_70: ldarg.0  */
                        /* IL_71: ldfld Object <rawAttribData>5__3 */
                        /* IL_76: call Array UnsafeCast[CilJs.JavaScript.Array](System.Object) */
                        /* IL_7B: newobj Void .ctor(CilJs.JavaScript.Array) */
                        /* IL_80: stfld CustomAttributeData <>2__current */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__7<>2__current"] = CILJS.newobj(t3,asm0.x60001c2,[null, arg0["System_Reflection_get_CustomAttributes_d__7<rawAttribData>5__3"]]);
                        /* IL_85: ldarg.0  */
                        /* IL_86: ldc.i4.1  */
                        /* IL_87: stfld Int32 <>1__state */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__7<>1__state"] = 1;
                        /* IL_8C: ldc.i4.1  */
                        /* IL_8D: stloc.0  */
                        
                        loc0 = 1;
                        /* IL_8E: leave.s IL_C7 */
                        
                        in_block_1 = false;
                        
                        __pos__ = 0xC7;
                        
                        continue;
                        case 0x90:
                        /* IL_90: ldarg.0  */
                        /* IL_91: ldc.i4.s 253 */
                        /* IL_93: stfld Int32 <>1__state */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__7<>1__state"] = -3;
                        /* IL_98: nop  */
                        /* IL_99: ldarg.0  */
                        /* IL_9A: ldnull  */
                        /* IL_9B: stfld Object <rawAttribData>5__3 */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__7<rawAttribData>5__3"] = null;
                        case 0xA0:
                        /* IL_A0: ldarg.0  */
                        /* IL_A1: ldfld IEnumerator`1 <>s__2 */
                        /* IL_A6: callvirt Boolean MoveNext() */
                        /* IL_AB: brtrue.s IL_5D */
                        
                        if (((arg0["System_Reflection_get_CustomAttributes_d__7<>s__2"].ifacemap)[t4].x6000182)(CILJS.convertBoxToPointerAsNeeded(arg0["System_Reflection_get_CustomAttributes_d__7<>s__2"]))){
                            
                            __pos__ = 0x5D;
                            
                            continue;
                        }
                        /* IL_AD: ldarg.0  */
                        /* IL_AE: call Void <>m__Finally1() */
                        
                        asm0.x6000212(arg0);
                        /* IL_B3: nop  */
                        /* IL_B4: ldarg.0  */
                        /* IL_B5: ldnull  */
                        /* IL_B6: stfld IEnumerator`1 <>s__2 */
                        
                        arg0["System_Reflection_get_CustomAttributes_d__7<>s__2"] = null;
                        /* IL_BB: ldc.i4.0  */
                        /* IL_BC: stloc.0  */
                        
                        loc0 = 0;
                        /* IL_BD: leave.s IL_C7 */
                        
                        in_block_1 = false;
                        
                        __pos__ = 0xC7;
                        
                        continue;
                    }
                }
            }
            
            catch (__error__) {
                
                __error_handled_1__ = false;
                
                if ((!(__error_handled_1__))){
                    
                    throw __error__;
                }
                
                if (__error_handled_1__ === false){
                    
                    in_block_1 = true;
                    
                    if (__pos__ < 0xBF){
                        
                        __pos__ = 0xBF;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0xBF:
                            /* IL_BF: ldarg.0  */
                            /* IL_C0: call Void System.IDisposable.Dispose() */
                            
                            asm0.x6000210(arg0);
                            /* IL_C5: nop  */
                            /* IL_C6: endfinally  */
                            
                            in_block_1 = false;
                            
                            __pos__ = __finally_continuation_1__;
                            
                            continue;
                            
                            throw __error__;
                        }
                    }
                }
            }
            
            continue;
            case 0xC7:
            /* IL_C7: ldloc.0  */
            /* IL_C8: ret  */
            
            return loc0;
        }
    }
};/* System.Void <get_CustomAttributes>d__7.<>m__Finally1()*/

asm.x6000212 = function __m__Finally1(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    
    t0 = asm0["System.IDisposable"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: ldarg.0  */
            /* IL_01: ldc.i4.m1  */
            /* IL_02: stfld Int32 <>1__state */
            
            arg0["System_Reflection_get_CustomAttributes_d__7<>1__state"] = -1;
            /* IL_07: ldarg.0  */
            /* IL_08: ldfld IEnumerator`1 <>s__2 */
            /* IL_0D: brfalse.s IL_1B */
            
            if ((!(arg0["System_Reflection_get_CustomAttributes_d__7<>s__2"]))){
                
                __pos__ = 0x1B;
                
                continue;
            }
            /* IL_0F: ldarg.0  */
            /* IL_10: ldfld IEnumerator`1 <>s__2 */
            /* IL_15: callvirt Void Dispose() */
            
            ((arg0["System_Reflection_get_CustomAttributes_d__7<>s__2"].ifacemap)[t0].x60000dd)(CILJS.convertBoxToPointerAsNeeded(arg0["System_Reflection_get_CustomAttributes_d__7<>s__2"]));
            /* IL_1A: nop  */
            case 0x1B:
            /* IL_1B: ret  */
            
            return ;
        }
    }
};;/* System.Reflection.CustomAttributeData <get_CustomAttributes>d__7.System.Collections.Generic.IEnumerator<System.Reflection.CustomAttributeData>.get_Current()*/

asm.x6000213 = function System_Collections_Generic_IEnumerator_System_Reflection_CustomAttributeData__get_Current(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld CustomAttributeData <>2__current */
    /* IL_06: ret  */
    
    return arg0["System_Reflection_get_CustomAttributes_d__7<>2__current"];
};;/* System.Void <get_CustomAttributes>d__7.System.Collections.IEnumerator.Reset()*/

asm.x6000214_init = function (arg0)
{
    
    (asm0["System.NotSupportedException"]().init)();
    
    asm.x6000214 = asm.x6000214_;
};;

asm.x6000214 = function (arg0)
{
    
    asm.x6000214_init(arg0);
    
    return asm.x6000214_(arg0);
};;
asm.x6000214_ = function System_Collections_IEnumerator_Reset(arg0)
{
    var t0;
    
    t0 = asm0["System.NotSupportedException"]();
    /* IL_00: newobj Void .ctor() */
    /* IL_05: throw  */
    
    throw CILJS.newobj(t0,asm0.x6000134,[null]);
};/* System.Object <get_CustomAttributes>d__7.System.Collections.IEnumerator.get_Current()*/

asm.x6000215 = function System_Collections_IEnumerator_get_Current(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld CustomAttributeData <>2__current */
    /* IL_06: ret  */
    
    return arg0["System_Reflection_get_CustomAttributes_d__7<>2__current"];
};;/* System.Collections.Generic.IEnumerator`1[System.Reflection.CustomAttributeData] <get_CustomAttributes>d__7.System.Collections.Generic.IEnumerable<System.Reflection.CustomAttributeData>.GetEnumerator()*/

asm.x6000216_init = function (arg0)
{
    
    (asm0["System.Reflection.MethodInfo+<get_CustomAttributes>d__7"]().init)();
    
    asm.x6000216 = asm.x6000216_;
};;

asm.x6000216 = function (arg0)
{
    
    asm.x6000216_init(arg0);
    
    return asm.x6000216_(arg0);
};;
asm.x6000216_ = function System_Collections_Generic_IEnumerable_System_Reflection_CustomAttributeData__GetEnumerator(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    
    t0 = asm0["System.Reflection.MethodInfo+<get_CustomAttributes>d__7"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: ldarg.0  */
            /* IL_01: ldfld Int32 <>1__state */
            /* IL_06: ldc.i4.s 254 */
            /* IL_08: bne.un.s IL_22 */
            
            if (CILJS.unsignedValue(arg0["System_Reflection_get_CustomAttributes_d__7<>1__state"]) != CILJS.unsignedValue(-2)){
                
                __pos__ = 0x22;
                
                continue;
            }
            /* IL_0A: ldarg.0  */
            /* IL_0B: ldfld Int32 <>l__initialThreadId */
            /* IL_10: call Int32 get_CurrentManagedThreadId() */
            /* IL_15: bne.un.s IL_22 */
            
            if (CILJS.unsignedValue(arg0["System_Reflection_get_CustomAttributes_d__7<>l__initialThreadId"]) != CILJS.unsignedValue(asm0.x6000149())){
                
                __pos__ = 0x22;
                
                continue;
            }
            /* IL_17: ldarg.0  */
            /* IL_18: ldc.i4.0  */
            /* IL_19: stfld Int32 <>1__state */
            
            arg0["System_Reflection_get_CustomAttributes_d__7<>1__state"] = 0;
            /* IL_1E: ldarg.0  */
            /* IL_1F: stloc.0  */
            
            loc0 = arg0;
            /* IL_20: br.s IL_35 */
            
            __pos__ = 0x35;
            
            continue;
            case 0x22:
            /* IL_22: ldc.i4.0  */
            /* IL_23: newobj Void .ctor(System.Int32) */
            /* IL_28: stloc.0  */
            
            loc0 = CILJS.newobj(t0,asm0.x600020f,[null, 0]);
            /* IL_29: ldloc.0  */
            /* IL_2A: ldarg.0  */
            /* IL_2B: ldfld MethodInfo <>4__this */
            /* IL_30: stfld MethodInfo <>4__this */
            
            loc0["<>4__this"] = arg0["<>4__this"];
            case 0x35:
            /* IL_35: ldloc.0  */
            /* IL_36: ret  */
            
            return loc0;
        }
    }
};/* System.Collections.IEnumerator <get_CustomAttributes>d__7.System.Collections.IEnumerable.GetEnumerator()*/

asm.x6000217 = function System_Collections_IEnumerable_GetEnumerator(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call IEnumerator`1 System.Collections.Generic.IEnumerable<System.Reflection.CustomAttributeData>.GetEnumerator() */
    /* IL_06: ret  */
    
    return asm0.x6000216(arg0);
};;/*  <get_CustomAttributes>d__7..ctor(Int32)*/

asm.x600020f = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ldarg.0  */
    /* IL_08: ldarg.1  */
    /* IL_09: stfld Int32 <>1__state */
    
    arg0["System_Reflection_get_CustomAttributes_d__7<>1__state"] = arg1;
    /* IL_0E: ldarg.0  */
    /* IL_0F: call Int32 get_CurrentManagedThreadId() */
    /* IL_14: stfld Int32 <>l__initialThreadId */
    
    arg0["System_Reflection_get_CustomAttributes_d__7<>l__initialThreadId"] = asm0.x6000149();
    /* IL_19: ret  */
    
    return ;
};;/*  jsAsm..ctor()*/

asm.x6000218 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Void <GetEnumerator>d__7.System.IDisposable.Dispose()*/

asm.x600021a = function System_IDisposable_Dispose(arg0)
{
    /* IL_00: ret  */
    
    return ;
};;/* System.Boolean <GetEnumerator>d__7.MoveNext()*/

asm.x600021b = function MoveNext(arg0)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var in_block_1;
    var loc1;
    var loc2;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: ldarg.0  */
            /* IL_01: ldfld Int32 <>1__state */
            /* IL_06: stloc.0  */
            
            loc0 = arg0["CilJs_JavaScript_GetEnumerator_d__7<>1__state"];
            /* IL_07: ldloc.0  */
            /* IL_08: brfalse.s IL_18 */
            
            if ((!(loc0))){
                
                __pos__ = 0x18;
                
                continue;
            }
            /* IL_0C: ldloc.0  */
            /* IL_0D: ldc.i4.1  */
            /* IL_0E: beq.s IL_56 */
            
            if (loc0 === 1){
                
                __pos__ = 0x56;
                
                continue;
            }
            /* IL_10: br.s IL_16 */
            
            __pos__ = 0x16;
            
            continue;
            case 0x12:
            /* IL_12: br.s IL_18 */
            
            __pos__ = 0x18;
            
            continue;
            case 0x14:
            /* IL_14: br.s IL_56 */
            
            __pos__ = 0x56;
            
            continue;
            case 0x16:
            /* IL_16: ldc.i4.0  */
            /* IL_17: ret  */
            
            return 0;
            case 0x18:
            /* IL_18: ldarg.0  */
            /* IL_19: ldc.i4.m1  */
            /* IL_1A: stfld Int32 <>1__state */
            
            arg0["CilJs_JavaScript_GetEnumerator_d__7<>1__state"] = -1;
            /* IL_1F: nop  */
            /* IL_20: ldarg.0  */
            /* IL_21: ldarg.0  */
            /* IL_22: ldfld Array <>4__this */
            /* IL_27: stfld Array <a>5__1 */
            
            arg0["CilJs_JavaScript_GetEnumerator_d__7<a>5__1"] = arg0["<>4__this"];
            /* IL_2C: ldarg.0  */
            /* IL_2D: ldc.i4.0  */
            /* IL_2E: stfld Int32 <i>5__2 */
            
            arg0["CilJs_JavaScript_GetEnumerator_d__7<i>5__2"] = 0;
            /* IL_33: br.s IL_6E */
            
            __pos__ = 0x6E;
            
            continue;
            case 0x35:
            case 0x56:
            case 0x6E:
            
            in_block_1 = true;
            
            if (__pos__ < 0x35){
                
                __pos__ = 0x35;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x35:
                    /* IL_35: nop  */
                    /* IL_36: ldarg.0  */
                    /* IL_37: ldarg.0  */
                    /* IL_38: ldfld Array <a>5__1 */
                    /* IL_3D: ldarg.0  */
                    /* IL_3E: ldfld Int32 <i>5__2 */
                    /* IL_43: callvirt Object get_Item(System.Int32) */
                    /* IL_48: stfld Object <>2__current */
                    
                    arg0["CilJs_JavaScript_GetEnumerator_d__7<>2__current"] = arg0["CilJs_JavaScript_GetEnumerator_d__7<a>5__1"][arg0["CilJs_JavaScript_GetEnumerator_d__7<i>5__2"]];
                    /* IL_4D: ldarg.0  */
                    /* IL_4E: ldc.i4.1  */
                    /* IL_4F: stfld Int32 <>1__state */
                    
                    arg0["CilJs_JavaScript_GetEnumerator_d__7<>1__state"] = 1;
                    /* IL_54: ldc.i4.1  */
                    /* IL_55: ret  */
                    
                    return 1;
                    case 0x56:
                    /* IL_56: ldarg.0  */
                    /* IL_57: ldc.i4.m1  */
                    /* IL_58: stfld Int32 <>1__state */
                    
                    arg0["CilJs_JavaScript_GetEnumerator_d__7<>1__state"] = -1;
                    /* IL_5D: nop  */
                    /* IL_5E: ldarg.0  */
                    /* IL_5F: ldfld Int32 <i>5__2 */
                    /* IL_64: stloc.1  */
                    
                    loc1 = arg0["CilJs_JavaScript_GetEnumerator_d__7<i>5__2"];
                    /* IL_65: ldarg.0  */
                    /* IL_66: ldloc.1  */
                    /* IL_67: ldc.i4.1  */
                    /* IL_68: add  */
                    /* IL_69: stfld Int32 <i>5__2 */
                    
                    arg0["CilJs_JavaScript_GetEnumerator_d__7<i>5__2"] = ((loc1 + 1) | 0);
                    case 0x6E:
                    /* IL_6E: ldarg.0  */
                    /* IL_6F: ldfld Int32 <i>5__2 */
                    /* IL_74: ldarg.0  */
                    /* IL_75: ldfld Array <a>5__1 */
                    /* IL_7A: callvirt Int32 get_Length() */
                    /* IL_80: clt  */
                    /* IL_81: stloc.2  */
                    
                    loc2 = ((arg0["CilJs_JavaScript_GetEnumerator_d__7<i>5__2"] < arg0["CilJs_JavaScript_GetEnumerator_d__7<a>5__1"].length) ? 1 : 0);
                    /* IL_82: ldloc.2  */
                    /* IL_83: brtrue.s IL_35 */
                    
                    if (loc2){
                        
                        __pos__ = 0x35;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x6E) || (__pos__ < 0x35)){
                
                continue;
            }
            /* IL_85: ldc.i4.0  */
            /* IL_86: ret  */
            
            return 0;
        }
    }
};;/* System.Object <GetEnumerator>d__7.System.Collections.Generic.IEnumerator<System.Object>.get_Current()*/

asm.x600021c = function System_Collections_Generic_IEnumerator_System_Object__get_Current(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld Object <>2__current */
    /* IL_06: ret  */
    
    return arg0["CilJs_JavaScript_GetEnumerator_d__7<>2__current"];
};;/* System.Void <GetEnumerator>d__7.System.Collections.IEnumerator.Reset()*/

asm.x600021d_init = function (arg0)
{
    
    (asm0["System.NotSupportedException"]().init)();
    
    asm.x600021d = asm.x600021d_;
};;

asm.x600021d = function (arg0)
{
    
    asm.x600021d_init(arg0);
    
    return asm.x600021d_(arg0);
};;
asm.x600021d_ = function System_Collections_IEnumerator_Reset(arg0)
{
    var t0;
    
    t0 = asm0["System.NotSupportedException"]();
    /* IL_00: newobj Void .ctor() */
    /* IL_05: throw  */
    
    throw CILJS.newobj(t0,asm0.x6000134,[null]);
};/* System.Object <GetEnumerator>d__7.System.Collections.IEnumerator.get_Current()*/

asm.x600021e = function System_Collections_IEnumerator_get_Current(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld Object <>2__current */
    /* IL_06: ret  */
    
    return arg0["CilJs_JavaScript_GetEnumerator_d__7<>2__current"];
};;/*  <GetEnumerator>d__7..ctor(Int32)*/

asm.x6000219 = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ldarg.0  */
    /* IL_08: ldarg.1  */
    /* IL_09: stfld Int32 <>1__state */
    
    arg0["CilJs_JavaScript_GetEnumerator_d__7<>1__state"] = arg1;
    /* IL_0E: ret  */
    
    return ;
};;/* System.Void <AsEnumerable>d__8.System.IDisposable.Dispose()*/

asm.x6000220 = function System_IDisposable_Dispose(arg0)
{
    /* IL_00: ret  */
    
    return ;
};;/* System.Boolean <AsEnumerable>d__8.MoveNext()*/

asm.x6000221 = function MoveNext(arg0)
{
    var in_block_0;
    var __pos__;
    var loc0;
    var in_block_1;
    var loc1;
    var loc2;
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: ldarg.0  */
            /* IL_01: ldfld Int32 <>1__state */
            /* IL_06: stloc.0  */
            
            loc0 = arg0["CilJs_JavaScript_AsEnumerable_d__8<>1__state"];
            /* IL_07: ldloc.0  */
            /* IL_08: brfalse.s IL_18 */
            
            if ((!(loc0))){
                
                __pos__ = 0x18;
                
                continue;
            }
            /* IL_0C: ldloc.0  */
            /* IL_0D: ldc.i4.1  */
            /* IL_0E: beq.s IL_56 */
            
            if (loc0 === 1){
                
                __pos__ = 0x56;
                
                continue;
            }
            /* IL_10: br.s IL_16 */
            
            __pos__ = 0x16;
            
            continue;
            case 0x12:
            /* IL_12: br.s IL_18 */
            
            __pos__ = 0x18;
            
            continue;
            case 0x14:
            /* IL_14: br.s IL_56 */
            
            __pos__ = 0x56;
            
            continue;
            case 0x16:
            /* IL_16: ldc.i4.0  */
            /* IL_17: ret  */
            
            return 0;
            case 0x18:
            /* IL_18: ldarg.0  */
            /* IL_19: ldc.i4.m1  */
            /* IL_1A: stfld Int32 <>1__state */
            
            arg0["CilJs_JavaScript_AsEnumerable_d__8<>1__state"] = -1;
            /* IL_1F: nop  */
            /* IL_20: ldarg.0  */
            /* IL_21: ldarg.0  */
            /* IL_22: ldfld Array <>4__this */
            /* IL_27: stfld Array <a>5__1 */
            
            arg0["CilJs_JavaScript_AsEnumerable_d__8<a>5__1"] = arg0["<>4__this"];
            /* IL_2C: ldarg.0  */
            /* IL_2D: ldc.i4.0  */
            /* IL_2E: stfld Int32 <i>5__2 */
            
            arg0["CilJs_JavaScript_AsEnumerable_d__8<i>5__2"] = 0;
            /* IL_33: br.s IL_6E */
            
            __pos__ = 0x6E;
            
            continue;
            case 0x35:
            case 0x56:
            case 0x6E:
            
            in_block_1 = true;
            
            if (__pos__ < 0x35){
                
                __pos__ = 0x35;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x35:
                    /* IL_35: nop  */
                    /* IL_36: ldarg.0  */
                    /* IL_37: ldarg.0  */
                    /* IL_38: ldfld Array <a>5__1 */
                    /* IL_3D: ldarg.0  */
                    /* IL_3E: ldfld Int32 <i>5__2 */
                    /* IL_43: callvirt Object get_Item(System.Int32) */
                    /* IL_48: stfld Object <>2__current */
                    
                    arg0["CilJs_JavaScript_AsEnumerable_d__8<>2__current"] = arg0["CilJs_JavaScript_AsEnumerable_d__8<a>5__1"][arg0["CilJs_JavaScript_AsEnumerable_d__8<i>5__2"]];
                    /* IL_4D: ldarg.0  */
                    /* IL_4E: ldc.i4.1  */
                    /* IL_4F: stfld Int32 <>1__state */
                    
                    arg0["CilJs_JavaScript_AsEnumerable_d__8<>1__state"] = 1;
                    /* IL_54: ldc.i4.1  */
                    /* IL_55: ret  */
                    
                    return 1;
                    case 0x56:
                    /* IL_56: ldarg.0  */
                    /* IL_57: ldc.i4.m1  */
                    /* IL_58: stfld Int32 <>1__state */
                    
                    arg0["CilJs_JavaScript_AsEnumerable_d__8<>1__state"] = -1;
                    /* IL_5D: nop  */
                    /* IL_5E: ldarg.0  */
                    /* IL_5F: ldfld Int32 <i>5__2 */
                    /* IL_64: stloc.1  */
                    
                    loc1 = arg0["CilJs_JavaScript_AsEnumerable_d__8<i>5__2"];
                    /* IL_65: ldarg.0  */
                    /* IL_66: ldloc.1  */
                    /* IL_67: ldc.i4.1  */
                    /* IL_68: add  */
                    /* IL_69: stfld Int32 <i>5__2 */
                    
                    arg0["CilJs_JavaScript_AsEnumerable_d__8<i>5__2"] = ((loc1 + 1) | 0);
                    case 0x6E:
                    /* IL_6E: ldarg.0  */
                    /* IL_6F: ldfld Int32 <i>5__2 */
                    /* IL_74: ldarg.0  */
                    /* IL_75: ldfld Array <a>5__1 */
                    /* IL_7A: callvirt Int32 get_Length() */
                    /* IL_80: clt  */
                    /* IL_81: stloc.2  */
                    
                    loc2 = ((arg0["CilJs_JavaScript_AsEnumerable_d__8<i>5__2"] < arg0["CilJs_JavaScript_AsEnumerable_d__8<a>5__1"].length) ? 1 : 0);
                    /* IL_82: ldloc.2  */
                    /* IL_83: brtrue.s IL_35 */
                    
                    if (loc2){
                        
                        __pos__ = 0x35;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x6E) || (__pos__ < 0x35)){
                
                continue;
            }
            /* IL_85: ldc.i4.0  */
            /* IL_86: ret  */
            
            return 0;
        }
    }
};;/* System.Object <AsEnumerable>d__8.System.Collections.Generic.IEnumerator<System.Object>.get_Current()*/

asm.x6000222 = function System_Collections_Generic_IEnumerator_System_Object__get_Current(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld Object <>2__current */
    /* IL_06: ret  */
    
    return arg0["CilJs_JavaScript_AsEnumerable_d__8<>2__current"];
};;/* System.Void <AsEnumerable>d__8.System.Collections.IEnumerator.Reset()*/

asm.x6000223_init = function (arg0)
{
    
    (asm0["System.NotSupportedException"]().init)();
    
    asm.x6000223 = asm.x6000223_;
};;

asm.x6000223 = function (arg0)
{
    
    asm.x6000223_init(arg0);
    
    return asm.x6000223_(arg0);
};;
asm.x6000223_ = function System_Collections_IEnumerator_Reset(arg0)
{
    var t0;
    
    t0 = asm0["System.NotSupportedException"]();
    /* IL_00: newobj Void .ctor() */
    /* IL_05: throw  */
    
    throw CILJS.newobj(t0,asm0.x6000134,[null]);
};/* System.Object <AsEnumerable>d__8.System.Collections.IEnumerator.get_Current()*/

asm.x6000224 = function System_Collections_IEnumerator_get_Current(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: ldfld Object <>2__current */
    /* IL_06: ret  */
    
    return arg0["CilJs_JavaScript_AsEnumerable_d__8<>2__current"];
};;/* System.Collections.Generic.IEnumerator`1[System.Object] <AsEnumerable>d__8.System.Collections.Generic.IEnumerable<System.Object>.GetEnumerator()*/

asm.x6000225_init = function (arg0)
{
    
    (asm0["CilJs.JavaScript.Array+<AsEnumerable>d__8"]().init)();
    
    asm.x6000225 = asm.x6000225_;
};;

asm.x6000225 = function (arg0)
{
    
    asm.x6000225_init(arg0);
    
    return asm.x6000225_(arg0);
};;
asm.x6000225_ = function System_Collections_Generic_IEnumerable_System_Object__GetEnumerator(arg0)
{
    var t0;
    var in_block_0;
    var __pos__;
    var loc0;
    
    t0 = asm0["CilJs.JavaScript.Array+<AsEnumerable>d__8"]();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: ldarg.0  */
            /* IL_01: ldfld Int32 <>1__state */
            /* IL_06: ldc.i4.s 254 */
            /* IL_08: bne.un.s IL_22 */
            
            if (CILJS.unsignedValue(arg0["CilJs_JavaScript_AsEnumerable_d__8<>1__state"]) != CILJS.unsignedValue(-2)){
                
                __pos__ = 0x22;
                
                continue;
            }
            /* IL_0A: ldarg.0  */
            /* IL_0B: ldfld Int32 <>l__initialThreadId */
            /* IL_10: call Int32 get_CurrentManagedThreadId() */
            /* IL_15: bne.un.s IL_22 */
            
            if (CILJS.unsignedValue(arg0["CilJs_JavaScript_AsEnumerable_d__8<>l__initialThreadId"]) != CILJS.unsignedValue(asm0.x6000149())){
                
                __pos__ = 0x22;
                
                continue;
            }
            /* IL_17: ldarg.0  */
            /* IL_18: ldc.i4.0  */
            /* IL_19: stfld Int32 <>1__state */
            
            arg0["CilJs_JavaScript_AsEnumerable_d__8<>1__state"] = 0;
            /* IL_1E: ldarg.0  */
            /* IL_1F: stloc.0  */
            
            loc0 = arg0;
            /* IL_20: br.s IL_35 */
            
            __pos__ = 0x35;
            
            continue;
            case 0x22:
            /* IL_22: ldc.i4.0  */
            /* IL_23: newobj Void .ctor(System.Int32) */
            /* IL_28: stloc.0  */
            
            loc0 = CILJS.newobj(t0,asm0.x600021f,[null, 0]);
            /* IL_29: ldloc.0  */
            /* IL_2A: ldarg.0  */
            /* IL_2B: ldfld Array <>4__this */
            /* IL_30: stfld Array <>4__this */
            
            loc0["<>4__this"] = arg0["<>4__this"];
            case 0x35:
            /* IL_35: ldloc.0  */
            /* IL_36: ret  */
            
            return loc0;
        }
    }
};/* System.Collections.IEnumerator <AsEnumerable>d__8.System.Collections.IEnumerable.GetEnumerator()*/

asm.x6000226 = function System_Collections_IEnumerable_GetEnumerator(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call IEnumerator`1 System.Collections.Generic.IEnumerable<System.Object>.GetEnumerator() */
    /* IL_06: ret  */
    
    return asm0.x6000225(arg0);
};;/*  <AsEnumerable>d__8..ctor(Int32)*/

asm.x600021f = function _ctor(arg0, arg1)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ldarg.0  */
    /* IL_08: ldarg.1  */
    /* IL_09: stfld Int32 <>1__state */
    
    arg0["CilJs_JavaScript_AsEnumerable_d__8<>1__state"] = arg1;
    /* IL_0E: ldarg.0  */
    /* IL_0F: call Int32 get_CurrentManagedThreadId() */
    /* IL_14: stfld Int32 <>l__initialThreadId */
    
    arg0["CilJs_JavaScript_AsEnumerable_d__8<>l__initialThreadId"] = asm0.x6000149();
    /* IL_19: ret  */
    
    return ;
};;
asm["System.Void"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Void",true,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm0.t2000002",new (asm0["System.Void"]())());
        
        type.TypeMetadataName = "asm0.t2000002";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Void()
        {
            
            Void.init();
        };
    });
asm["System.InvalidOperationException"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Exception"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.InvalidOperationException",false,false,false,false,false,[],[],asm0["System.Exception"](),CILJS.isInstDefault(type),Array,"asm0.t2000003",null);
        
        type.TypeMetadataName = "asm0.t2000003";
        
        CILJS.declareVirtual(type,"asm0.x600007a",asm0,"x600007a");
        
        CILJS.declareVirtual(type,"asm0.x600007b",asm0,"x600007b");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600007c");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function InvalidOperationException()
        {
            
            InvalidOperationException.init();
        };
    });
asm["System.Int64"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Int64",true,true,false,false,false,[],[
                [asm0, "x6000005", "ToString"],
                [asm0, "x6000006", "GetHashCode"],
                [asm0, "x600001b", "CompareTo"],
                [asm0, "x600001c", "CompareTo"],
                [asm0, "x600001d", "Equals"],
                [asm0, "x600001e", "Equals"]
            ],asm0["System.ValueType"](),CILJS.isInstPrimitive(type),Array,"asm0.t2000004",0);
        
        type.MaxValue = 0;
        
        type.MinValue = 0;
        
        type.TypeMetadataName = "asm0.t2000004";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x6000005");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000006");
        
        CILJS.declareVirtual(type,"asm0.x600001b",asm0,"x600001b");
        
        CILJS.declareVirtual(type,"asm0.x600001c",asm0,"x600001c");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600001d");
        
        CILJS.declareVirtual(type,"asm0.x600001e",asm0,"x600001e");
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable`1"](asm0["System.Int64"]()), asm0["System.Int64"]()],
            [
                ["x60000db", asm0, "x600001c"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable"]()],
            [
                ["x60000da", asm0, "x600001b"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IEquatable`1"](asm0["System.Int64"]()), asm0["System.Int64"]()],
            [
                ["x6000133", asm0, "x600001e"]
            ]);
    },
    function ()
    {
        
        return function Int64()
        {
            
            Int64.init();
        };
    });
asm["System.Char"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Char",true,true,false,false,false,[],[
                [asm0, "x600001f", "ToString"]
            ],asm0["System.ValueType"](),CILJS.isInstPrimitive(type),Uint16Array,"asm0.t2000005",0);
        
        type.MinValue = 0;
        
        type.MaxValue = 0;
        
        type.TypeMetadataName = "asm0.t2000005";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600001f");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Char()
        {
            
            Char.init();
        };
    });
asm["System.SystemException"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Exception"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.SystemException",false,false,false,false,false,[],[],asm0["System.Exception"](),CILJS.isInstDefault(type),Array,"asm0.t2000006",null);
        
        type.Result = 0;
        
        type.TypeMetadataName = "asm0.t2000006";
        
        CILJS.declareVirtual(type,"asm0.x600007a",asm0,"x600007a");
        
        CILJS.declareVirtual(type,"asm0.x600007b",asm0,"x600007b");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600007c");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function SystemException()
        {
            
            SystemException.init();
        };
    });
asm["System.Single"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Single",true,true,false,false,false,[],[
                [asm0, "x6000025", "ToString"],
                [asm0, "x6000026", "CompareTo"],
                [asm0, "x6000027", "CompareTo"]
            ],asm0["System.ValueType"](),CILJS.isInstPrimitive(type),Float32Array,"asm0.t2000007",0);
        
        type.MinValue = 0;
        
        type.Epsilon = 0;
        
        type.MaxValue = 0;
        
        type.PositiveInfinity = 0;
        
        type.NegativeInfinity = 0;
        
        type.NaN = 0;
        
        type.TypeMetadataName = "asm0.t2000007";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x6000025");
        
        CILJS.declareVirtual(type,"asm0.x6000026",asm0,"x6000026");
        
        CILJS.declareVirtual(type,"asm0.x6000027",asm0,"x6000027");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable`1"](asm0["System.Single"]()), asm0["System.Single"]()],
            [
                ["x60000db", asm0, "x6000027"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable"]()],
            [
                ["x60000da", asm0, "x6000026"]
            ]);
    },
    function ()
    {
        
        return function Single()
        {
            
            Single.init();
        };
    });
asm["System.RuntimeFieldHandle"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.RuntimeFieldHandle",true,false,false,false,false,[],[
                [asm0, "x6000028", "get_Value"]
            ],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm0.t2000008",new (asm0["System.RuntimeFieldHandle"]())());
        
        type.TypeMetadataName = "asm0.t2000008";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function RuntimeFieldHandle()
        {
            
            RuntimeFieldHandle.init();
            
            this.value = null;
        };
    });
asm["System.UInt16"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.UInt16",true,true,false,false,false,[],[
                [asm0, "x6000029", "ToString"],
                [asm0, "x600002a", "CompareTo"],
                [asm0, "x600002b", "CompareTo"],
                [asm0, "x600002c", "Equals"],
                [asm0, "x600002d", "Equals"],
                [asm0, "x600002e", "GetHashCode"]
            ],asm0["System.ValueType"](),CILJS.isInstPrimitive(type),Uint16Array,"asm0.t2000009",0);
        
        type.MaxValue = 0;
        
        type.MinValue = 0;
        
        type.TypeMetadataName = "asm0.t2000009";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x6000029");
        
        CILJS.declareVirtual(type,"asm0.x600002a",asm0,"x600002a");
        
        CILJS.declareVirtual(type,"asm0.x600002b",asm0,"x600002b");
        
        CILJS.declareVirtual(type,"asm0.x600002c",asm0,"x600002c");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600002d");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600002e");
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable`1"](asm0["System.UInt16"]()), asm0["System.UInt16"]()],
            [
                ["x60000db", asm0, "x600002b"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable"]()],
            [
                ["x60000da", asm0, "x600002a"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IEquatable`1"](asm0["System.UInt16"]()), asm0["System.UInt16"]()],
            [
                ["x6000133", asm0, "x600002c"]
            ]);
    },
    function ()
    {
        
        return function UInt16()
        {
            
            UInt16.init();
        };
    });
asm["System.InternalFormatting"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.InternalFormatting",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t200000a",null);
        
        type.TypeMetadataName = "asm0.t200000a";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function InternalFormatting()
        {
            
            InternalFormatting.init();
        };
    });
asm["System.Decimal"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Decimal",true,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm0.t200000b",new (asm0["System.Decimal"]())());
        
        type.TypeMetadataName = "asm0.t200000b";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Decimal()
        {
            
            Decimal.init();
        };
    });
asm["System.EventArgs"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.EventArgs",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t200000c",null);
        
        type.Empty = null;
        
        type.TypeMetadataName = "asm0.t200000c";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function EventArgs()
        {
            
            EventArgs.init();
        };
    });
asm["System.UInt32"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.UInt32",true,true,false,false,false,[],[
                [asm0, "x6000033", "ToString"],
                [asm0, "x6000034", "Equals"],
                [asm0, "x6000035", "GetHashCode"],
                [asm0, "x6000036", "CompareTo"],
                [asm0, "x6000037", "CompareTo"]
            ],asm0["System.ValueType"](),CILJS.isInstPrimitive(type),Uint32Array,"asm0.t200000d",0);
        
        type.MaxValue = 0;
        
        type.MinValue = 0;
        
        type.TypeMetadataName = "asm0.t200000d";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x6000033");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000034");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000035");
        
        CILJS.declareVirtual(type,"asm0.x6000036",asm0,"x6000036");
        
        CILJS.declareVirtual(type,"asm0.x6000037",asm0,"x6000037");
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable`1"](asm0["System.UInt32"]()), asm0["System.UInt32"]()],
            [
                ["x60000db", asm0, "x6000037"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable"]()],
            [
                ["x60000da", asm0, "x6000036"]
            ]);
    },
    function ()
    {
        
        return function UInt32()
        {
            
            UInt32.init();
        };
    });
asm["System.FlagsAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.FlagsAttribute",false,false,false,false,false,[
                [
                    asm0["System.AttributeUsageAttribute"](),
                    asm0.x6000058,
                    [
                        16
                    ],
                    {
                        Inherited: [
                            asm0["System.Boolean"](),
                            false
                        ]
                    }
                ]
            ],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t200000e",null);
        
        type.TypeMetadataName = "asm0.t200000e";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function FlagsAttribute()
        {
            
            FlagsAttribute.init();
        };
    });
asm["System.Delegate"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Delegate",false,false,false,false,false,[],[
                [asm0, "x600003d", "Equals"],
                [asm0, "x6000040", "GetHashCode"]
            ],asm0["System.Object"](),CILJS.isInstDelegate(type),Array,"asm0.t200000f",null);
        
        type.TypeMetadataName = "asm0.t200000f";
        
        CILJS.declareVirtual(type,"asm0.x600003b",asm0,"x600003b");
        
        CILJS.declareVirtual(type,"asm0.x600003c",asm0,"x600003c");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600003d");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000040");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
    },
    function ()
    {
        
        return function Delegate()
        {
            
            Delegate.init();
            
            this._methodPtr = null;
            
            this._target = null;
        };
    });
asm["System.Type"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Reflection.MemberInfo"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Type",false,false,false,false,false,[],[
                [asm0, "x6000044", "get_FullName"],
                [asm0, "x6000046", "IsSubclassOf"],
                [asm0, "x6000047", "get_IsEnum"],
                [asm0, "x6000048", "get_Assembly"],
                [asm0, "x6000049", "get_BaseType"],
                [asm0, "x600004a", "get_AssemblyQualifiedName"],
                [asm0, "x600004b", "get_IsGenericType"],
                [asm0, "x600004c", "get_IsInterface"],
                [asm0, "x600004d", "get_IsGenericTypeDefinition"],
                [asm0, "x600004e", "GetGenericArguments"],
                [asm0, "x600004f", "GetInterfaces"],
                [asm0, "x6000050", "MakeGenericType"],
                [asm0, "x6000051", "IsAssignableFrom"],
                [asm0, "x6000052", "get_IsValueType"],
                [asm0, "x6000053", "get_IsPrimitive"],
                [asm0, "x6000054", "GetElementType"],
                [asm0, "x6000055", "GetMethods"],
                [asm0, "x6000056", "IsInstanceOfType"]
            ],asm0["System.Reflection.MemberInfo"](),CILJS.isInstDefault(type),Array,"asm0.t2000010",null);
        
        type.TypeMetadataName = "asm0.t2000010";
        
        CILJS.declareVirtual(type,"asm0.x6000044",asm0,"x6000044");
        
        CILJS.declareVirtual(type,"asm0.x6000046",asm0,"x6000046");
        
        CILJS.declareVirtual(type,"asm0.x6000048",asm0,"x6000048");
        
        CILJS.declareVirtual(type,"asm0.x6000049",asm0,"x6000049");
        
        CILJS.declareVirtual(type,"asm0.x600004a",asm0,"x600004a");
        
        CILJS.declareVirtual(type,"asm0.x600004b",asm0,"x600004b");
        
        CILJS.declareVirtual(type,"asm0.x600004c",asm0,"x600004c");
        
        CILJS.declareVirtual(type,"asm0.x600004d",asm0,"x600004d");
        
        CILJS.declareVirtual(type,"asm0.x600004e",asm0,"x600004e");
        
        CILJS.declareVirtual(type,"asm0.x600004f",asm0,"x600004f");
        
        CILJS.declareVirtual(type,"asm0.x6000050",asm0,"x6000050");
        
        CILJS.declareVirtual(type,"asm0.x6000051",asm0,"x6000051");
        
        CILJS.declareVirtual(type,"asm0.x6000052",asm0,"x6000052");
        
        CILJS.declareVirtual(type,"asm0.x6000053",asm0,"x6000053");
        
        CILJS.declareVirtual(type,"asm0.x6000054",asm0,"x6000054");
        
        CILJS.declareVirtual(type,"asm0.x6000055",asm0,"x6000055");
        
        CILJS.declareVirtual(type,"asm0.x6000056",asm0,"x6000056");
        
        CILJS.declareVirtual(type,"asm0.x60001c5",asm0,"x60001c5");
        
        CILJS.declareVirtual(type,"asm0.x60001c6",asm0,"x60001c6");
        
        CILJS.declareVirtual(type,"asm0.x60001c7",asm0,"x60001c7");
        
        CILJS.declareVirtual(type,"asm0.x60001c8",asm0,"x60001c8");
        
        CILJS.declareVirtual(type,"asm0.x60001ca",asm0,"x60001ca");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm0["System.Reflection.ICustomAttributeProvider"]()],
            [
                ["x60001b6", asm0, "x60001c5"],
                ["x60001b7", asm0, "x60001c6"],
                ["x60001b8", asm0, "x60001c8"]
            ]);
    },
    function ()
    {
        
        return function Type()
        {
            
            Type.init();
        };
    });
asm["System.AttributeUsageAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.AttributeUsageAttribute",false,false,false,false,false,[
                [
                    asm0["System.AttributeUsageAttribute"](),
                    asm0.x6000058,
                    [
                        4
                    ],
                    {
                        Inherited: [
                            asm0["System.Boolean"](),
                            true
                        ]
                    }
                ]
            ],[
                [asm0, "x6000059", "get_ValidOn"],
                [asm0, "x600005b", "get_Inherited"],
                [asm0, "x600005c", "set_Inherited"],
                [asm0, "x600005d", "get_AllowMultiple"],
                [asm0, "x600005e", "set_AllowMultiple"]
            ],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t2000011",null);
        
        type.TypeMetadataName = "asm0.t2000011";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function AttributeUsageAttribute()
        {
            
            AttributeUsageAttribute.init();
            
            this["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = new (asm0["System.AttributeTargets"]())();
            
            this["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = 0;
            
            this["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"] = 0;
        };
    });
asm["System.RuntimeTypeHandle"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.RuntimeTypeHandle",true,false,false,false,false,[],[
                [asm0, "x600005f", "get_Value"]
            ],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm0.t2000012",new (asm0["System.RuntimeTypeHandle"]())());
        
        type.TypeMetadataName = "asm0.t2000012";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function RuntimeTypeHandle()
        {
            
            RuntimeTypeHandle.init();
            
            this.value = null;
        };
    });
asm["System.Boolean"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Boolean",true,true,false,false,false,[],[
                [asm0, "x6000060", "ToString"],
                [asm0, "x6000061", "GetHashCode"],
                [asm0, "x6000062", "Equals"],
                [asm0, "x6000063", "Equals"],
                [asm0, "x6000064", "CompareTo"],
                [asm0, "x6000065", "CompareTo"]
            ],asm0["System.ValueType"](),CILJS.isInstPrimitive(type),Array,"asm0.t2000013",0);
        
        type.TypeMetadataName = "asm0.t2000013";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x6000060");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000061");
        
        CILJS.declareVirtual(type,"asm0.x6000062",asm0,"x6000062");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000063");
        
        CILJS.declareVirtual(type,"asm0.x6000064",asm0,"x6000064");
        
        CILJS.declareVirtual(type,"asm0.x6000065",asm0,"x6000065");
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable`1"](asm0["System.Boolean"]()), asm0["System.Boolean"]()],
            [
                ["x60000db", asm0, "x6000065"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable"]()],
            [
                ["x60000da", asm0, "x6000064"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IEquatable`1"](asm0["System.Boolean"]()), asm0["System.Boolean"]()],
            [
                ["x6000133", asm0, "x6000062"]
            ]);
    },
    function ()
    {
        
        return function $$Boolean()
        {
            
            $$Boolean.init();
        };
    });
asm["System.SByte"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.SByte",true,true,false,false,false,[],[
                [asm0, "x6000066", "ToString"],
                [asm0, "x6000067", "CompareTo"],
                [asm0, "x6000068", "CompareTo"],
                [asm0, "x6000069", "Equals"],
                [asm0, "x600006a", "Equals"],
                [asm0, "x600006b", "GetHashCode"]
            ],asm0["System.ValueType"](),CILJS.isInstPrimitive(type),Int8Array,"asm0.t2000014",0);
        
        type.MinValue = 0;
        
        type.MaxValue = 0;
        
        type.TypeMetadataName = "asm0.t2000014";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x6000066");
        
        CILJS.declareVirtual(type,"asm0.x6000067",asm0,"x6000067");
        
        CILJS.declareVirtual(type,"asm0.x6000068",asm0,"x6000068");
        
        CILJS.declareVirtual(type,"asm0.x6000069",asm0,"x6000069");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600006a");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600006b");
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable`1"](asm0["System.SByte"]()), asm0["System.SByte"]()],
            [
                ["x60000db", asm0, "x6000068"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable"]()],
            [
                ["x60000da", asm0, "x6000067"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IEquatable`1"](asm0["System.SByte"]()), asm0["System.SByte"]()],
            [
                ["x6000133", asm0, "x6000069"]
            ]);
    },
    function ()
    {
        
        return function SByte()
        {
            
            SByte.init();
        };
    });
asm["System.ICloneable"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.ICloneable",false,false,true,false,false,[],[
                [asm0, "x600006c", "Clone"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t2000015",null);
        
        type.TypeMetadataName = "asm0.t2000015";
        
        CILJS.declareVirtual(type,"asm0.x600006c",asm0,"x600006c");
    },
    function ()
    {
        
        return function ICloneable()
        {
            
            ICloneable.init();
        };
    });
asm["System.Activator"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Activator",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000016",null);
        
        type.TypeMetadataName = "asm0.t2000016";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Activator()
        {
            
            Activator.init();
        };
    });
asm["System.NotImplementedException"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Exception"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.NotImplementedException",false,false,false,false,false,[],[],asm0["System.Exception"](),CILJS.isInstDefault(type),Array,"asm0.t2000017",null);
        
        type.TypeMetadataName = "asm0.t2000017";
        
        CILJS.declareVirtual(type,"asm0.x600007a",asm0,"x600007a");
        
        CILJS.declareVirtual(type,"asm0.x600007b",asm0,"x600007b");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600007c");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function NotImplementedException()
        {
            
            NotImplementedException.init();
        };
    });
asm["System.Console"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Console",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000018",null);
        
        type.TypeMetadataName = "asm0.t2000018";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Console()
        {
            
            Console.init();
        };
    });
asm["System.Exception"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Exception",false,false,false,false,false,[],[
                [asm0, "x6000078", "get_HResult"],
                [asm0, "x600007a", "get_Message"],
                [asm0, "x600007b", "set_Message"],
                [asm0, "x600007c", "ToString"],
                [asm0, "x600007d", "get_InnerException"],
                [asm0, "x600007e", "set_InnerException"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000019",null);
        
        type.TypeMetadataName = "asm0.t2000019";
        
        CILJS.declareVirtual(type,"asm0.x600007a",asm0,"x600007a");
        
        CILJS.declareVirtual(type,"asm0.x600007b",asm0,"x600007b");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600007c");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Exception()
        {
            
            Exception.init();
            
            this["SystemException<HResult>k__BackingField"] = 0;
            
            this["SystemException<Message>k__BackingField"] = null;
            
            this["SystemException<InnerException>k__BackingField"] = null;
        };
    });
asm["System.Attribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Attribute",false,false,false,false,false,[
                [
                    asm0["System.AttributeUsageAttribute"](),
                    asm0.x6000058,
                    [
                        32767
                    ]
                ]
            ],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t200001a",null);
        
        type.TypeMetadataName = "asm0.t200001a";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Attribute()
        {
            
            Attribute.init();
        };
    });
asm["System.GC"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.GC",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t200001b",null);
        
        type.TypeMetadataName = "asm0.t200001b";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function GC()
        {
            
            GC.init();
        };
    });
asm["System.IntPtr"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.IntPtr",true,true,false,false,false,[],[
                [asm0, "x6000083", "ToString"]
            ],asm0["System.ValueType"](),CILJS.isInstPrimitive(type),Array,"asm0.t200001c",0);
        
        type.TypeMetadataName = "asm0.t200001c";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x6000083");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function IntPtr()
        {
            
            IntPtr.init();
        };
    });
asm["System.Nullable`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return {};
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Nullable`1",true,false,false,true,true,[
                [
                    asm0["System.Diagnostics.DebuggerStepThroughAttribute"](),
                    asm0.x600015b
                ]
            ],[
                [asm0, "x6000085", "get_HasValue"],
                [asm0, "x6000086", "get_Value"],
                [asm0, "x6000087", "Equals"],
                [asm0, "x6000089", "GetHashCode"],
                [asm0, "x600008a", "GetValueOrDefault"],
                [asm0, "x600008b", "GetValueOrDefault"],
                [asm0, "x600008c", "ToString"]
            ],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm0.t200001d",new (asm0["System.Nullable`1"](asm0["CilJs.Runtime.UnboundGenericParameter"]()))());
        
        (type.GenericArguments)["asm0.t200001d"] = [T];
        
        type.TypeMetadataName = ("asm0.t200001d<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000087");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000089");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600008c");
    },
    function (T)
    {
        
        return function Nullable_1()
        {
            
            Nullable_1.init();
            
            this.value = T.Default;
            
            this.has_value = 0;
        };
    });
asm["System.InvalidCastException"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Exception"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.InvalidCastException",false,false,false,false,false,[],[],asm0["System.Exception"](),CILJS.isInstDefault(type),Array,"asm0.t200001e",null);
        
        type.TypeMetadataName = "asm0.t200001e";
        
        CILJS.declareVirtual(type,"asm0.x600007a",asm0,"x600007a");
        
        CILJS.declareVirtual(type,"asm0.x600007b",asm0,"x600007b");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600007c");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function InvalidCastException()
        {
            
            InvalidCastException.init();
        };
    });
asm["System.EventHandler"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.EventHandler",false,false,false,false,false,[],[
                [asm0, "x6000093", "Invoke"],
                [asm0, "x6000094", "BeginInvoke"],
                [asm0, "x6000095", "EndInvoke"]
            ],asm0["System.MulticastDelegate"](),CILJS.isInstDefault(type),Array,"asm0.t200001f",null);
        
        type.TypeMetadataName = "asm0.t200001f";
        
        CILJS.declareVirtual(type,"asm0.x6000093",asm0,"x6000093");
        
        CILJS.declareVirtual(type,"asm0.x6000094",asm0,"x6000094");
        
        CILJS.declareVirtual(type,"asm0.x6000095",asm0,"x6000095");
        
        CILJS.declareVirtual(type,"asm0.x600003c",asm0,"x60000b1");
        
        CILJS.declareVirtual(type,"asm0.x600003b",asm0,"x60000b2");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600003d");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000040");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
    },
    function ()
    {
        
        return function EventHandler()
        {
            
            EventHandler.init();
            
            this._invocationList = null;
            
            this._methodPtr = null;
            
            this._target = null;
        };
    });
asm["System.AttributeTargets"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Enum"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.AttributeTargets",true,false,false,false,false,[
                [
                    asm0["System.FlagsAttribute"](),
                    asm0.x6000038
                ]
            ],[],asm0["System.Enum"](),CILJS.isInstValueType(type),Array,"asm0.t2000020",new (asm0["System.AttributeTargets"]())());
        
        type.Assembly = new (asm0["System.AttributeTargets"]())();
        
        type.Module = new (asm0["System.AttributeTargets"]())();
        
        type.Class = new (asm0["System.AttributeTargets"]())();
        
        type.Struct = new (asm0["System.AttributeTargets"]())();
        
        type.Enum = new (asm0["System.AttributeTargets"]())();
        
        type.Constructor = new (asm0["System.AttributeTargets"]())();
        
        type.Method = new (asm0["System.AttributeTargets"]())();
        
        type.Property = new (asm0["System.AttributeTargets"]())();
        
        type.Field = new (asm0["System.AttributeTargets"]())();
        
        type.Event = new (asm0["System.AttributeTargets"]())();
        
        type.Interface = new (asm0["System.AttributeTargets"]())();
        
        type.Parameter = new (asm0["System.AttributeTargets"]())();
        
        type.Delegate = new (asm0["System.AttributeTargets"]())();
        
        type.ReturnValue = new (asm0["System.AttributeTargets"]())();
        
        type.GenericParameter = new (asm0["System.AttributeTargets"]())();
        
        type.All = new (asm0["System.AttributeTargets"]())();
        
        type.TypeMetadataName = "asm0.t2000020";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function AttributeTargets()
        {
            
            AttributeTargets.init();
            
            this.value__ = 0;
        };
    });
asm["System.Object"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Object",false,false,false,false,false,[],[
                [asm0, "x600009b", "ToString"],
                [asm0, "x600009e", "Equals"],
                [asm0, "x600009f", "GetHashCode"],
                [asm0, "x60000a0", "GetType"]
            ],null,CILJS.isInstDefault(type),Array,"asm0.t2000021",null);
        
        type.TypeMetadataName = "asm0.t2000021";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        type.prototype.toString = asm0.x600009a;
    },
    function ()
    {
        
        return function $$Object()
        {
            
            $$Object.init();
        };
    });
asm["System.Math"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Math",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000022",null);
        
        type.E = 0;
        
        type.PI = 0;
        
        type.TypeMetadataName = "asm0.t2000022";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Math()
        {
            
            Math.init();
        };
    });
asm["System.Enum"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Enum",false,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.isInstDefault(type),Array,"asm0.t2000023",null);
        
        type.TypeMetadataName = "asm0.t2000023";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Enum()
        {
            
            Enum.init();
        };
    });
asm["System.MulticastDelegate"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Delegate"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.MulticastDelegate",false,false,false,false,false,[],[],asm0["System.Delegate"](),CILJS.isInstDelegate(type),Array,"asm0.t2000024",null);
        
        type.TypeMetadataName = "asm0.t2000024";
        
        CILJS.declareVirtual(type,"asm0.x600003c",asm0,"x60000b1");
        
        CILJS.declareVirtual(type,"asm0.x600003b",asm0,"x60000b2");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600003d");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000040");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
    },
    function ()
    {
        
        return function MulticastDelegate()
        {
            
            MulticastDelegate.init();
            
            this._invocationList = null;
            
            this._methodPtr = null;
            
            this._target = null;
        };
    });
asm["System.String"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.String",false,false,false,false,false,[
                [
                    asm0["System.Reflection.DefaultMemberAttribute"](),
                    asm0.x60001b4,
                    [
                        CILJS.newString("Chars")
                    ]
                ]
            ],[
                [asm0, "x60000b9", "get_Chars"],
                [asm0, "x60000c2", "Replace"],
                [asm0, "x60000c3", "get_Length"],
                [asm0, "x60000c4", "ToString"],
                [asm0, "x60000c7", "Equals"],
                [asm0, "x60000c8", "Equals"],
                [asm0, "x60000ca", "GetHashCode"],
                [asm0, "x60000cf", "ToLower"],
                [asm0, "x60000d1", "ToUpper"],
                [asm0, "x60000d3", "CompareTo"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000025",null);
        
        type.Empty = null;
        
        type.TypeMetadataName = "asm0.t2000025";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x60000c4");
        
        CILJS.declareVirtual(type,"asm0.x60000c7",asm0,"x60000c7");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x60000c8");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x60000ca");
        
        CILJS.declareVirtual(type,"asm0.x60000d3",asm0,"x60000d3");
        
        CILJS.implementInterface(
            type,
            [asm0["System.IEquatable`1"](asm0["System.String"]()), asm0["System.String"]()],
            [
                ["x6000133", asm0, "x60000c7"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable`1"](asm0["System.String"]()), asm0["System.String"]()],
            [
                ["x60000db", asm0, "x60000d3"]
            ]);
    },
    function ()
    {
        
        return function $$String()
        {
            
            $$String.init();
            
            this.jsstr = null;
        };
    });
asm["System.Double"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Double",true,true,false,false,false,[],[
                [asm0, "x60000d7", "ToString"],
                [asm0, "x60000d8", "CompareTo"],
                [asm0, "x60000d9", "CompareTo"]
            ],asm0["System.ValueType"](),CILJS.isInstPrimitive(type),Float64Array,"asm0.t2000026",0);
        
        type.Epsilon = 0;
        
        type.MaxValue = 0;
        
        type.MinValue = 0;
        
        type.NaN = 0;
        
        type.NegativeInfinity = 0;
        
        type.PositiveInfinity = 0;
        
        type.TypeMetadataName = "asm0.t2000026";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x60000d7");
        
        CILJS.declareVirtual(type,"asm0.x60000d8",asm0,"x60000d8");
        
        CILJS.declareVirtual(type,"asm0.x60000d9",asm0,"x60000d9");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable`1"](asm0["System.Double"]()), asm0["System.Double"]()],
            [
                ["x60000db", asm0, "x60000d9"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable"]()],
            [
                ["x60000da", asm0, "x60000d8"]
            ]);
    },
    function ()
    {
        
        return function Double()
        {
            
            Double.init();
        };
    });
asm["System.IComparable"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.IComparable",false,false,true,false,false,[],[
                [asm0, "x60000da", "CompareTo"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t2000027",null);
        
        type.TypeMetadataName = "asm0.t2000027";
        
        CILJS.declareVirtual(type,"asm0.x60000da",asm0,"x60000da");
    },
    function ()
    {
        
        return function IComparable()
        {
            
            IComparable.init();
        };
    });
asm["System.IComparable`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return {};
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.IComparable`1",false,false,true,true,false,[],[
                [asm0, "x60000db", "CompareTo"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t2000028",null);
        
        (type.GenericArguments)["asm0.t2000028"] = [T];
        
        type.TypeMetadataName = ("asm0.t2000028<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x60000db",asm0,"x60000db");
    },
    function (T)
    {
        
        return function IComparable_1()
        {
            
            IComparable_1.init();
        };
    });
asm["System.ParamArrayAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.ParamArrayAttribute",false,false,false,false,false,[],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t2000029",null);
        
        type.TypeMetadataName = "asm0.t2000029";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function ParamArrayAttribute()
        {
            
            ParamArrayAttribute.init();
        };
    });
asm["System.IDisposable"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.IDisposable",false,false,true,false,false,[],[
                [asm0, "x60000dd", "Dispose"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t200002a",null);
        
        type.TypeMetadataName = "asm0.t200002a";
        
        CILJS.declareVirtual(type,"asm0.x60000dd",asm0,"x60000dd");
    },
    function ()
    {
        
        return function IDisposable()
        {
            
            IDisposable.init();
        };
    });
asm["System.Predicate`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return {};
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Predicate`1",false,false,false,true,false,[],[
                [asm0, "x60000df", "Invoke"],
                [asm0, "x60000e0", "BeginInvoke"],
                [asm0, "x60000e1", "EndInvoke"]
            ],asm0["System.MulticastDelegate"](),CILJS.isInstDefault(type),Array,"asm0.t200002b",null);
        
        (type.GenericArguments)["asm0.t200002b"] = [T];
        
        type.TypeMetadataName = ("asm0.t200002b<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x60000df",asm0,"x60000df");
        
        CILJS.declareVirtual(type,"asm0.x60000e0",asm0,"x60000e0");
        
        CILJS.declareVirtual(type,"asm0.x60000e1",asm0,"x60000e1");
        
        CILJS.declareVirtual(type,"asm0.x600003c",asm0,"x60000b1");
        
        CILJS.declareVirtual(type,"asm0.x600003b",asm0,"x60000b2");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600003d");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000040");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
    },
    function (T)
    {
        
        return function Predicate_1()
        {
            
            Predicate_1.init();
            
            this._invocationList = null;
            
            this._methodPtr = null;
            
            this._target = null;
        };
    });
asm["System.Array"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Array",false,false,false,false,false,[],[
                [asm0, "x60000e2", "get_Length"],
                [asm0, "x60000e3", "get_LongLength"],
                [asm0, "x60000e7", "GetValue"],
                [asm0, "x60000e8", "GetEnumerator"],
                [asm0, "x6000106", "SetValue", []]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t200002c",null);
        
        type.TypeMetadataName = "asm0.t200002c";
        
        CILJS.declareVirtual(type,"asm0.x60000e8",asm0,"x60000e8");
        
        CILJS.declareVirtual(type,"asm0.x60000e9",asm0,"x60000e9");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.IEnumerable"]()],
            [
                ["x600017d", asm0, "x60000e8"]
            ]);
    },
    function ()
    {
        
        return function Array()
        {
            
            Array.init();
            
            this.etype = null;
            
            this.jsarr = null;
        };
    });
asm["System.Array`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return asm0["System.Array"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Array`1",false,false,false,true,false,[],[
                [asm0, "x6000109", "GetEnumerator"]
            ],asm0["System.Array"](),CILJS.isInstArray(T),Array,"asm0.t200002d",null);
        
        (type.GenericArguments)["asm0.t200002d"] = [T];
        
        type.TypeMetadataName = ("asm0.t200002d<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x6000109",asm0,"x6000109");
        
        CILJS.declareVirtual(type,"asm0.x60000e9",asm0,"x600010a");
        
        CILJS.declareVirtual(type,"asm0.x600010b",asm0,"x600010b");
        
        CILJS.declareVirtual(type,"asm0.x600010c",asm0,"x600010c");
        
        CILJS.declareVirtual(type,"asm0.x600010d",asm0,"x600010d");
        
        CILJS.declareVirtual(type,"asm0.x600010e",asm0,"x600010e");
        
        CILJS.declareVirtual(type,"asm0.x600010f",asm0,"x600010f");
        
        CILJS.declareVirtual(type,"asm0.x6000110",asm0,"x6000110");
        
        CILJS.declareVirtual(type,"asm0.x6000111",asm0,"x6000111");
        
        CILJS.declareVirtual(type,"asm0.x60000e8",asm0,"x60000e8");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.Generic.IEnumerable`1"](T), T],
            [
                ["x6000184", asm0, "x6000109"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.IEnumerable"]()],
            [
                ["x600017d", asm0, "x60000e8"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.Generic.ICollection`1"](T), T],
            [
                ["x6000185", asm0, "x600010b"],
                ["x6000186", asm0, "x600010c"],
                ["x6000187", asm0, "x600010d"],
                ["x6000188", asm0, "x600010e"],
                ["x6000189", asm0, "x600010f"],
                ["x600018a", asm0, "x6000110"],
                ["x600018b", asm0, "x6000111"]
            ]);
    },
    function (T)
    {
        
        return function Array_1()
        {
            
            Array_1.init();
            
            this.etype = null;
            
            this.jsarr = null;
        };
    });
asm["System.Byte"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Byte",true,true,false,false,false,[],[
                [asm0, "x6000113", "ToString"],
                [asm0, "x6000114", "CompareTo"],
                [asm0, "x6000115", "CompareTo"],
                [asm0, "x6000116", "Equals"],
                [asm0, "x6000117", "Equals"],
                [asm0, "x6000118", "GetHashCode"]
            ],asm0["System.ValueType"](),CILJS.isInstPrimitive(type),Uint8Array,"asm0.t200002e",0);
        
        type.MinValue = 0;
        
        type.MaxValue = 0;
        
        type.TypeMetadataName = "asm0.t200002e";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x6000113");
        
        CILJS.declareVirtual(type,"asm0.x6000114",asm0,"x6000114");
        
        CILJS.declareVirtual(type,"asm0.x6000115",asm0,"x6000115");
        
        CILJS.declareVirtual(type,"asm0.x6000116",asm0,"x6000116");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000117");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000118");
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable`1"](asm0["System.Byte"]()), asm0["System.Byte"]()],
            [
                ["x60000db", asm0, "x6000115"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable"]()],
            [
                ["x60000da", asm0, "x6000114"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IEquatable`1"](asm0["System.Byte"]()), asm0["System.Byte"]()],
            [
                ["x6000133", asm0, "x6000116"]
            ]);
    },
    function ()
    {
        
        return function Byte()
        {
            
            Byte.init();
        };
    });
asm["System.ValueType"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.ValueType",false,false,false,false,false,[],[
                [asm0, "x6000119", "Equals"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t200002f",null);
        
        type.TypeMetadataName = "asm0.t200002f";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function ValueType()
        {
            
            ValueType.init();
        };
    });
asm["System.Func`2"] = CILJS.declareType(
    ["T", "TResult"],
    function (T, TResult)
    {
        
        return {};
    },
    function (type, T, TResult)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Func`2",false,false,false,true,false,[],[
                [asm0, "x600011d", "Invoke"],
                [asm0, "x600011e", "BeginInvoke"],
                [asm0, "x600011f", "EndInvoke"]
            ],asm0["System.MulticastDelegate"](),CILJS.isInstDefault(type),Array,"asm0.t2000030",null);
        
        (type.GenericArguments)["asm0.t2000030"] = [T, TResult];
        
        type.TypeMetadataName = ("asm0.t2000030<" + ((T.TypeMetadataName + TResult.TypeMetadataName) + ">"));
        
        CILJS.declareVirtual(type,"asm0.x600011d",asm0,"x600011d");
        
        CILJS.declareVirtual(type,"asm0.x600011e",asm0,"x600011e");
        
        CILJS.declareVirtual(type,"asm0.x600011f",asm0,"x600011f");
        
        CILJS.declareVirtual(type,"asm0.x600003c",asm0,"x60000b1");
        
        CILJS.declareVirtual(type,"asm0.x600003b",asm0,"x60000b2");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600003d");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000040");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
    },
    function (T, TResult)
    {
        
        return function Func_2()
        {
            
            Func_2.init();
            
            this._invocationList = null;
            
            this._methodPtr = null;
            
            this._target = null;
        };
    });
asm["System.AsyncCallback"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.AsyncCallback",false,false,false,false,false,[],[
                [asm0, "x6000121", "Invoke"],
                [asm0, "x6000122", "BeginInvoke"],
                [asm0, "x6000123", "EndInvoke"]
            ],asm0["System.MulticastDelegate"](),CILJS.isInstDefault(type),Array,"asm0.t2000031",null);
        
        type.TypeMetadataName = "asm0.t2000031";
        
        CILJS.declareVirtual(type,"asm0.x6000121",asm0,"x6000121");
        
        CILJS.declareVirtual(type,"asm0.x6000122",asm0,"x6000122");
        
        CILJS.declareVirtual(type,"asm0.x6000123",asm0,"x6000123");
        
        CILJS.declareVirtual(type,"asm0.x600003c",asm0,"x60000b1");
        
        CILJS.declareVirtual(type,"asm0.x600003b",asm0,"x60000b2");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600003d");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000040");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
    },
    function ()
    {
        
        return function AsyncCallback()
        {
            
            AsyncCallback.init();
            
            this._invocationList = null;
            
            this._methodPtr = null;
            
            this._target = null;
        };
    });
asm["System.NullReferenceException"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.SystemException"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.NullReferenceException",false,false,false,false,false,[],[],asm0["System.SystemException"](),CILJS.isInstDefault(type),Array,"asm0.t2000032",null);
        
        type.TypeMetadataName = "asm0.t2000032";
        
        CILJS.declareVirtual(type,"asm0.x600007a",asm0,"x600007a");
        
        CILJS.declareVirtual(type,"asm0.x600007b",asm0,"x600007b");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600007c");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function NullReferenceException()
        {
            
            NullReferenceException.init();
        };
    });
asm["System.Comparison`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return {};
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Comparison`1",false,false,false,true,false,[],[
                [asm0, "x6000126", "Invoke"],
                [asm0, "x6000127", "BeginInvoke"],
                [asm0, "x6000128", "EndInvoke"]
            ],asm0["System.MulticastDelegate"](),CILJS.isInstDefault(type),Array,"asm0.t2000033",null);
        
        (type.GenericArguments)["asm0.t2000033"] = [T];
        
        type.TypeMetadataName = ("asm0.t2000033<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x6000126",asm0,"x6000126");
        
        CILJS.declareVirtual(type,"asm0.x6000127",asm0,"x6000127");
        
        CILJS.declareVirtual(type,"asm0.x6000128",asm0,"x6000128");
        
        CILJS.declareVirtual(type,"asm0.x600003c",asm0,"x60000b1");
        
        CILJS.declareVirtual(type,"asm0.x600003b",asm0,"x60000b2");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600003d");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000040");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
    },
    function (T)
    {
        
        return function Comparison_1()
        {
            
            Comparison_1.init();
            
            this._invocationList = null;
            
            this._methodPtr = null;
            
            this._target = null;
        };
    });
asm["System.IAsyncResult"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.IAsyncResult",false,false,true,false,false,[],[
                [asm0, "x6000129", "get_IsCompleted"],
                [asm0, "x600012a", "get_AsyncWaitHandle"],
                [asm0, "x600012b", "get_AsyncState"],
                [asm0, "x600012c", "get_CompletedSynchronously"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t2000034",null);
        
        type.TypeMetadataName = "asm0.t2000034";
        
        CILJS.declareVirtual(type,"asm0.x6000129",asm0,"x6000129");
        
        CILJS.declareVirtual(type,"asm0.x600012a",asm0,"x600012a");
        
        CILJS.declareVirtual(type,"asm0.x600012b",asm0,"x600012b");
        
        CILJS.declareVirtual(type,"asm0.x600012c",asm0,"x600012c");
    },
    function ()
    {
        
        return function IAsyncResult()
        {
            
            IAsyncResult.init();
        };
    });
asm["System.AsyncResult"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.AsyncResult",false,false,false,false,false,[],[
                [asm0, "x600012e", "get_IsCompleted"],
                [asm0, "x600012f", "get_AsyncWaitHandle"],
                [asm0, "x6000130", "get_AsyncState"],
                [asm0, "x6000131", "get_CompletedSynchronously"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000035",null);
        
        type.TypeMetadataName = "asm0.t2000035";
        
        CILJS.declareVirtual(type,"asm0.x600012e",asm0,"x600012e");
        
        CILJS.declareVirtual(type,"asm0.x600012f",asm0,"x600012f");
        
        CILJS.declareVirtual(type,"asm0.x6000130",asm0,"x6000130");
        
        CILJS.declareVirtual(type,"asm0.x6000131",asm0,"x6000131");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm0["System.IAsyncResult"]()],
            [
                ["x6000129", asm0, "x600012e"],
                ["x600012a", asm0, "x600012f"],
                ["x600012b", asm0, "x6000130"],
                ["x600012c", asm0, "x6000131"]
            ]);
    },
    function ()
    {
        
        return function AsyncResult()
        {
            
            AsyncResult.init();
            
            this.asyncState = null;
            
            this.result = null;
        };
    });
asm["System.IEquatable`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return {};
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.IEquatable`1",false,false,true,true,false,[],[
                [asm0, "x6000133", "Equals"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t2000036",null);
        
        (type.GenericArguments)["asm0.t2000036"] = [T];
        
        type.TypeMetadataName = ("asm0.t2000036<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x6000133",asm0,"x6000133");
    },
    function (T)
    {
        
        return function IEquatable_1()
        {
            
            IEquatable_1.init();
        };
    });
asm["System.NotSupportedException"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Exception"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.NotSupportedException",false,false,false,false,false,[],[],asm0["System.Exception"](),CILJS.isInstDefault(type),Array,"asm0.t2000037",null);
        
        type.TypeMetadataName = "asm0.t2000037";
        
        CILJS.declareVirtual(type,"asm0.x600007a",asm0,"x600007a");
        
        CILJS.declareVirtual(type,"asm0.x600007b",asm0,"x600007b");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600007c");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function NotSupportedException()
        {
            
            NotSupportedException.init();
        };
    });
asm["System.UIntPtr"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.UIntPtr",true,true,false,false,false,[],[
                [asm0, "x6000136", "ToString"]
            ],asm0["System.ValueType"](),CILJS.isInstPrimitive(type),Array,"asm0.t2000038",0);
        
        type.TypeMetadataName = "asm0.t2000038";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x6000136");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function UIntPtr()
        {
            
            UIntPtr.init();
        };
    });
asm["System.DivideByZeroException"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Exception"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.DivideByZeroException",false,false,false,false,false,[],[],asm0["System.Exception"](),CILJS.isInstDefault(type),Array,"asm0.t2000039",null);
        
        type.TypeMetadataName = "asm0.t2000039";
        
        CILJS.declareVirtual(type,"asm0.x600007a",asm0,"x600007a");
        
        CILJS.declareVirtual(type,"asm0.x600007b",asm0,"x600007b");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600007c");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function DivideByZeroException()
        {
            
            DivideByZeroException.init();
        };
    });
asm["System.UInt64"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.UInt64",true,true,false,false,false,[],[
                [asm0, "x6000138", "ToString"],
                [asm0, "x6000142", "GetHashCode"],
                [asm0, "x6000144", "CompareTo"],
                [asm0, "x6000145", "CompareTo"],
                [asm0, "x6000146", "Equals"],
                [asm0, "x6000147", "Equals"]
            ],asm0["System.ValueType"](),CILJS.isInstPrimitive(type),Array,"asm0.t200003a",0);
        
        type.MinValue = 0;
        
        type.MaxValue = 0;
        
        type.TypeMetadataName = "asm0.t200003a";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x6000138");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000142");
        
        CILJS.declareVirtual(type,"asm0.x6000144",asm0,"x6000144");
        
        CILJS.declareVirtual(type,"asm0.x6000145",asm0,"x6000145");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000146");
        
        CILJS.declareVirtual(type,"asm0.x6000147",asm0,"x6000147");
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable`1"](asm0["System.UInt64"]()), asm0["System.UInt64"]()],
            [
                ["x60000db", asm0, "x6000145"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable"]()],
            [
                ["x60000da", asm0, "x6000144"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IEquatable`1"](asm0["System.UInt64"]()), asm0["System.UInt64"]()],
            [
                ["x6000133", asm0, "x6000147"]
            ]);
    },
    function ()
    {
        
        return function UInt64()
        {
            
            UInt64.init();
        };
    });
asm["System.SerializableAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.SerializableAttribute",false,false,false,false,false,[
                [
                    asm0["System.AttributeUsageAttribute"](),
                    asm0.x6000058,
                    [
                        4124
                    ],
                    {
                        Inherited: [
                            asm0["System.Boolean"](),
                            false
                        ]
                    }
                ]
            ],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t200003b",null);
        
        type.TypeMetadataName = "asm0.t200003b";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function SerializableAttribute()
        {
            
            SerializableAttribute.init();
        };
    });
asm["System.Environment"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Environment",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t200003c",null);
        
        type.TypeMetadataName = "asm0.t200003c";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Environment()
        {
            
            Environment.init();
        };
    });
asm["System.Int16"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Int16",true,true,false,false,false,[],[
                [asm0, "x600014b", "ToString"],
                [asm0, "x600014c", "CompareTo"],
                [asm0, "x600014d", "CompareTo"],
                [asm0, "x600014e", "Equals"],
                [asm0, "x600014f", "Equals"],
                [asm0, "x6000150", "GetHashCode"]
            ],asm0["System.ValueType"](),CILJS.isInstPrimitive(type),Int16Array,"asm0.t200003d",0);
        
        type.TypeMetadataName = "asm0.t200003d";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600014b");
        
        CILJS.declareVirtual(type,"asm0.x600014c",asm0,"x600014c");
        
        CILJS.declareVirtual(type,"asm0.x600014d",asm0,"x600014d");
        
        CILJS.declareVirtual(type,"asm0.x600014e",asm0,"x600014e");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600014f");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000150");
        
        CILJS.implementInterface(
            type,
            [asm0["System.IEquatable`1"](asm0["System.Int16"]()), asm0["System.Int16"]()],
            [
                ["x6000133", asm0, "x600014e"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable"]()],
            [
                ["x60000da", asm0, "x600014c"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable`1"](asm0["System.Int16"]()), asm0["System.Int16"]()],
            [
                ["x60000db", asm0, "x600014d"]
            ]);
    },
    function ()
    {
        
        return function Int16()
        {
            
            Int16.init();
        };
    });
asm["System.Int32"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Int32",true,true,false,false,false,[],[
                [asm0, "x6000151", "ToString"],
                [asm0, "x6000153", "ToString"],
                [asm0, "x6000154", "CompareTo"],
                [asm0, "x6000155", "CompareTo"],
                [asm0, "x6000156", "Equals"],
                [asm0, "x6000157", "Equals"],
                [asm0, "x6000158", "GetHashCode"]
            ],asm0["System.ValueType"](),CILJS.isInstPrimitive(type),Int32Array,"asm0.t200003e",0);
        
        type.MaxValue = 0;
        
        type.MinValue = 0;
        
        type.TypeMetadataName = "asm0.t200003e";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x6000151");
        
        CILJS.declareVirtual(type,"asm0.x6000154",asm0,"x6000154");
        
        CILJS.declareVirtual(type,"asm0.x6000155",asm0,"x6000155");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000156");
        
        CILJS.declareVirtual(type,"asm0.x6000157",asm0,"x6000157");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000158");
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable`1"](asm0["System.Int32"]()), asm0["System.Int32"]()],
            [
                ["x60000db", asm0, "x6000155"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IComparable"]()],
            [
                ["x60000da", asm0, "x6000154"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IEquatable`1"](asm0["System.Int32"]()), asm0["System.Int32"]()],
            [
                ["x6000133", asm0, "x6000157"]
            ]);
    },
    function ()
    {
        
        return function Int32()
        {
            
            Int32.init();
        };
    });
asm["System.Locale"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Locale",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t200003f",null);
        
        type.TypeMetadataName = "asm0.t200003f";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Locale()
        {
            
            Locale.init();
        };
    });
asm["System.Diagnostics.DebuggerStepThroughAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Diagnostics.DebuggerStepThroughAttribute",false,false,false,false,false,[
                [
                    asm0["System.AttributeUsageAttribute"](),
                    asm0.x6000058,
                    [
                        108
                    ],
                    {
                        Inherited: [
                            asm0["System.Boolean"](),
                            false
                        ]
                    }
                ]
            ],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t2000040",null);
        
        type.TypeMetadataName = "asm0.t2000040";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function DebuggerStepThroughAttribute()
        {
            
            DebuggerStepThroughAttribute.init();
        };
    });
asm["System.Diagnostics.Debugger"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Diagnostics.Debugger",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000041",null);
        
        type.TypeMetadataName = "asm0.t2000041";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Debugger()
        {
            
            Debugger.init();
        };
    });
asm["System.Threading.AutoResetEvent"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Threading.AutoResetEvent",false,false,false,false,false,[],[
                [asm0, "x600015f", "Close"],
                [asm0, "x6000160", "WaitOne"],
                [asm0, "x6000161", "Set"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000042",null);
        
        type.TypeMetadataName = "asm0.t2000042";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function AutoResetEvent()
        {
            
            AutoResetEvent.init();
        };
    });
asm["System.Threading.Thread"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Threading.Thread",false,false,false,false,false,[],[
                [asm0, "x6000163", "get_IsThreadPoolThread"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000043",null);
        
        type.currentThread = null;
        
        type.TypeMetadataName = "asm0.t2000043";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Thread()
        {
            
            Thread.init();
        };
    });
asm["System.Threading.Monitor"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Threading.Monitor",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000044",null);
        
        type.TypeMetadataName = "asm0.t2000044";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Monitor()
        {
            
            Monitor.init();
        };
    });
asm["System.Threading.WaitHandle"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Threading.WaitHandle",false,false,false,false,false,[],[
                [asm0, "x6000169", "WaitOne"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000045",null);
        
        type.TypeMetadataName = "asm0.t2000045";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function WaitHandle()
        {
            
            WaitHandle.init();
        };
    });
asm["System.Runtime.InteropServices.InAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Runtime.InteropServices.InAttribute",false,false,false,false,false,[],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t2000047",null);
        
        type.TypeMetadataName = "asm0.t2000047";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function InAttribute()
        {
            
            InAttribute.init();
        };
    });
asm["System.Runtime.InteropServices.OutAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Runtime.InteropServices.OutAttribute",false,false,false,false,false,[],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t2000048",null);
        
        type.TypeMetadataName = "asm0.t2000048";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function OutAttribute()
        {
            
            OutAttribute.init();
        };
    });
asm["System.Runtime.CompilerServices.ExtensionAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Runtime.CompilerServices.ExtensionAttribute",false,false,false,false,false,[
                [
                    asm0["System.AttributeUsageAttribute"](),
                    asm0.x6000058,
                    [
                        64
                    ],
                    {
                        Inherited: [
                            asm0["System.Boolean"](),
                            true
                        ]
                    }
                ]
            ],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t2000049",null);
        
        type.TypeMetadataName = "asm0.t2000049";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function ExtensionAttribute()
        {
            
            ExtensionAttribute.init();
        };
    });
asm["System.Runtime.CompilerServices.InternalsVisibleToAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Runtime.CompilerServices.InternalsVisibleToAttribute",false,false,false,false,false,[
                [
                    asm0["System.AttributeUsageAttribute"](),
                    asm0.x6000058,
                    [
                        1
                    ],
                    {
                        Inherited: [
                            asm0["System.Boolean"](),
                            false
                        ],
                        AllowMultiple: [
                            asm0["System.Boolean"](),
                            true
                        ]
                    }
                ]
            ],[
                [asm0, "x6000170", "get_AssemblyName"],
                [asm0, "x6000171", "get_AllInternalsVisible"],
                [asm0, "x6000172", "set_AllInternalsVisible"]
            ],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t200004a",null);
        
        type.TypeMetadataName = "asm0.t200004a";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function InternalsVisibleToAttribute()
        {
            
            InternalsVisibleToAttribute.init();
            
            this.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName = null;
            
            this.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = 0;
        };
    });
asm["System.Runtime.CompilerServices.RuntimeHelpers"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Runtime.CompilerServices.RuntimeHelpers",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t200004b",null);
        
        type.TypeMetadataName = "asm0.t200004b";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function RuntimeHelpers()
        {
            
            RuntimeHelpers.init();
        };
    });
asm["System.Runtime.CompilerServices.IndexerNameAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Runtime.CompilerServices.IndexerNameAttribute",false,false,false,false,false,[
                [
                    asm0["System.AttributeUsageAttribute"](),
                    asm0.x6000058,
                    [
                        128
                    ],
                    {
                        Inherited: [
                            asm0["System.Boolean"](),
                            true
                        ]
                    }
                ]
            ],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t200004c",null);
        
        type.TypeMetadataName = "asm0.t200004c";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function IndexerNameAttribute()
        {
            
            IndexerNameAttribute.init();
        };
    });
asm["System.Runtime.CompilerServices.MethodImplOptions"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Enum"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Runtime.CompilerServices.MethodImplOptions",true,false,false,false,false,[
                [
                    asm0["System.FlagsAttribute"](),
                    asm0.x6000038
                ]
            ],[],asm0["System.Enum"](),CILJS.isInstValueType(type),Array,"asm0.t200004d",new (asm0["System.Runtime.CompilerServices.MethodImplOptions"]())());
        
        type.Unmanaged = new (asm0["System.Runtime.CompilerServices.MethodImplOptions"]())();
        
        type.ForwardRef = new (asm0["System.Runtime.CompilerServices.MethodImplOptions"]())();
        
        type.InternalCall = new (asm0["System.Runtime.CompilerServices.MethodImplOptions"]())();
        
        type.Synchronized = new (asm0["System.Runtime.CompilerServices.MethodImplOptions"]())();
        
        type.NoInlining = new (asm0["System.Runtime.CompilerServices.MethodImplOptions"]())();
        
        type.PreserveSig = new (asm0["System.Runtime.CompilerServices.MethodImplOptions"]())();
        
        type.NoOptimization = new (asm0["System.Runtime.CompilerServices.MethodImplOptions"]())();
        
        type.TypeMetadataName = "asm0.t200004d";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function MethodImplOptions()
        {
            
            MethodImplOptions.init();
            
            this.value__ = 0;
        };
    });
asm["System.Runtime.CompilerServices.MethodImplAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Runtime.CompilerServices.MethodImplAttribute",false,false,false,false,false,[
                [
                    asm0["System.AttributeUsageAttribute"](),
                    asm0.x6000058,
                    [
                        96
                    ],
                    {
                        Inherited: [
                            asm0["System.Boolean"](),
                            false
                        ]
                    }
                ]
            ],[
                [asm0, "x600017b", "get_Value"]
            ],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t200004e",null);
        
        type.TypeMetadataName = "asm0.t200004e";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function MethodImplAttribute()
        {
            
            MethodImplAttribute.init();
            
            this.System_Runtime_CompilerServicesMethodImplAttribute_val = new (asm0["System.Runtime.CompilerServices.MethodImplOptions"]())();
            
            this.MethodCodeType = new (asm0["System.Runtime.CompilerServices.MethodCodeType"]())();
        };
    });
asm["System.Runtime.CompilerServices.MethodCodeType"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Enum"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Runtime.CompilerServices.MethodCodeType",true,false,false,false,false,[],[],asm0["System.Enum"](),CILJS.isInstValueType(type),Array,"asm0.t200004f",new (asm0["System.Runtime.CompilerServices.MethodCodeType"]())());
        
        type.IL = new (asm0["System.Runtime.CompilerServices.MethodCodeType"]())();
        
        type.Native = new (asm0["System.Runtime.CompilerServices.MethodCodeType"]())();
        
        type.OPTIL = new (asm0["System.Runtime.CompilerServices.MethodCodeType"]())();
        
        type.Runtime = new (asm0["System.Runtime.CompilerServices.MethodCodeType"]())();
        
        type.TypeMetadataName = "asm0.t200004f";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function MethodCodeType()
        {
            
            MethodCodeType.init();
            
            this.value__ = 0;
        };
    });
asm["System.Collections.IEnumerable"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Collections.IEnumerable",false,false,true,false,false,[],[
                [asm0, "x600017d", "GetEnumerator"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t2000051",null);
        
        type.TypeMetadataName = "asm0.t2000051";
        
        CILJS.declareVirtual(type,"asm0.x600017d",asm0,"x600017d");
    },
    function ()
    {
        
        return function IEnumerable()
        {
            
            IEnumerable.init();
        };
    });
asm["System.Collections.IEqualityComparer"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Collections.IEqualityComparer",false,false,true,false,false,[],[
                [asm0, "x600017e", "Equals"],
                [asm0, "x600017f", "GetHashCode"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t2000052",null);
        
        type.TypeMetadataName = "asm0.t2000052";
        
        CILJS.declareVirtual(type,"asm0.x600017e",asm0,"x600017e");
        
        CILJS.declareVirtual(type,"asm0.x600017f",asm0,"x600017f");
    },
    function ()
    {
        
        return function IEqualityComparer()
        {
            
            IEqualityComparer.init();
        };
    });
asm["System.Collections.IComparer"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Collections.IComparer",false,false,true,false,false,[],[
                [asm0, "x6000180", "Compare"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t2000053",null);
        
        type.TypeMetadataName = "asm0.t2000053";
        
        CILJS.declareVirtual(type,"asm0.x6000180",asm0,"x6000180");
    },
    function ()
    {
        
        return function IComparer()
        {
            
            IComparer.init();
        };
    });
asm["System.Collections.IEnumerator"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Collections.IEnumerator",false,false,true,false,false,[],[
                [asm0, "x6000181", "get_Current"],
                [asm0, "x6000182", "MoveNext"],
                [asm0, "x6000183", "Reset"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t2000054",null);
        
        type.TypeMetadataName = "asm0.t2000054";
        
        CILJS.declareVirtual(type,"asm0.x6000181",asm0,"x6000181");
        
        CILJS.declareVirtual(type,"asm0.x6000182",asm0,"x6000182");
        
        CILJS.declareVirtual(type,"asm0.x6000183",asm0,"x6000183");
    },
    function ()
    {
        
        return function IEnumerator()
        {
            
            IEnumerator.init();
        };
    });
asm["System.Collections.Generic.IEnumerable`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return {};
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Collections.Generic.IEnumerable`1",false,false,true,true,false,[],[
                [asm0, "x6000184", "GetEnumerator"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t2000055",null);
        
        (type.GenericArguments)["asm0.t2000055"] = [T];
        
        type.TypeMetadataName = ("asm0.t2000055<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x6000184",asm0,"x6000184");
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.IEnumerable"]()],
            null);
    },
    function (T)
    {
        
        return function IEnumerable_1()
        {
            
            IEnumerable_1.init();
        };
    });
asm["System.Collections.Generic.ICollection`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return {};
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Collections.Generic.ICollection`1",false,false,true,true,false,[],[
                [asm0, "x6000185", "get_Count"],
                [asm0, "x6000186", "get_IsReadOnly"],
                [asm0, "x6000187", "Add"],
                [asm0, "x6000188", "Clear"],
                [asm0, "x6000189", "Contains"],
                [asm0, "x600018a", "CopyTo"],
                [asm0, "x600018b", "Remove"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t2000056",null);
        
        (type.GenericArguments)["asm0.t2000056"] = [T];
        
        type.TypeMetadataName = ("asm0.t2000056<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x6000185",asm0,"x6000185");
        
        CILJS.declareVirtual(type,"asm0.x6000186",asm0,"x6000186");
        
        CILJS.declareVirtual(type,"asm0.x6000187",asm0,"x6000187");
        
        CILJS.declareVirtual(type,"asm0.x6000188",asm0,"x6000188");
        
        CILJS.declareVirtual(type,"asm0.x6000189",asm0,"x6000189");
        
        CILJS.declareVirtual(type,"asm0.x600018a",asm0,"x600018a");
        
        CILJS.declareVirtual(type,"asm0.x600018b",asm0,"x600018b");
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.Generic.IEnumerable`1"](T), T],
            null);
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.IEnumerable"]()],
            null);
    },
    function (T)
    {
        
        return function ICollection_1()
        {
            
            ICollection_1.init();
        };
    });
asm["System.Collections.Generic.IComparer`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return {};
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Collections.Generic.IComparer`1",false,false,true,true,false,[],[
                [asm0, "x600018c", "Compare"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t2000057",null);
        
        (type.GenericArguments)["asm0.t2000057"] = [T];
        
        type.TypeMetadataName = ("asm0.t2000057<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x600018c",asm0,"x600018c");
    },
    function (T)
    {
        
        return function IComparer_1()
        {
            
            IComparer_1.init();
        };
    });
asm["System.Collections.Generic.IEnumerator`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return {};
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Collections.Generic.IEnumerator`1",false,false,true,true,false,[],[
                [asm0, "x600018d", "get_Current"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t2000058",null);
        
        (type.GenericArguments)["asm0.t2000058"] = [T];
        
        type.TypeMetadataName = ("asm0.t2000058<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x600018d",asm0,"x600018d");
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.IEnumerator"]()],
            null);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IDisposable"]()],
            null);
    },
    function (T)
    {
        
        return function IEnumerator_1()
        {
            
            IEnumerator_1.init();
        };
    });
asm["System.Reflection.TypeInfo"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Type"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.TypeInfo",false,false,false,false,false,[],[
                [asm0, "x6000194", "get_Assembly"],
                [asm0, "x6000195", "get_FullName"],
                [asm0, "x6000196", "get_AssemblyQualifiedName"],
                [asm0, "x6000197", "Equals"],
                [asm0, "x6000198", "GetHashCode"],
                [asm0, "x6000199", "GetCustomAttributes"],
                [asm0, "x600019a", "get_CustomAttributes"],
                [asm0, "x600019b", "GetCustomAttributes"],
                [asm0, "x600019c", "IsDefined"],
                [asm0, "x600019d", "get_IsInterface"],
                [asm0, "x600019e", "get_IsGenericType"],
                [asm0, "x600019f", "get_IsGenericTypeDefinition"],
                [asm0, "x60001a0", "MakeGenericType"],
                [asm0, "x60001a1", "GetGenericArguments"],
                [asm0, "x60001a2", "get_BaseType"],
                [asm0, "x60001a3", "GetInterfaces"],
                [asm0, "x60001a4", "IsAssignableFrom"],
                [asm0, "x60001a6", "get_Name"],
                [asm0, "x60001a7", "get_IsValueType"],
                [asm0, "x60001a8", "get_IsPrimitive"],
                [asm0, "x60001a9", "GetElementType"],
                [asm0, "x60001aa", "GetMethods"],
                [asm0, "x60001ac", "IsInstanceOfType"]
            ],asm0["System.Type"](),CILJS.isInstDefault(type),Array,"asm0.t2000059",null);
        
        type.TypeMetadataName = "asm0.t2000059";
        
        CILJS.declareVirtual(type,"asm0.x6000048",asm0,"x6000194");
        
        CILJS.declareVirtual(type,"asm0.x6000044",asm0,"x6000195");
        
        CILJS.declareVirtual(type,"asm0.x600004a",asm0,"x6000196");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000197");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x6000198");
        
        CILJS.declareVirtual(type,"asm0.x60001c5",asm0,"x6000199");
        
        CILJS.declareVirtual(type,"asm0.x60001c7",asm0,"x600019a");
        
        CILJS.declareVirtual(type,"asm0.x60001c6",asm0,"x600019b");
        
        CILJS.declareVirtual(type,"asm0.x60001c8",asm0,"x600019c");
        
        CILJS.declareVirtual(type,"asm0.x600004c",asm0,"x600019d");
        
        CILJS.declareVirtual(type,"asm0.x600004b",asm0,"x600019e");
        
        CILJS.declareVirtual(type,"asm0.x600004d",asm0,"x600019f");
        
        CILJS.declareVirtual(type,"asm0.x6000050",asm0,"x60001a0");
        
        CILJS.declareVirtual(type,"asm0.x600004e",asm0,"x60001a1");
        
        CILJS.declareVirtual(type,"asm0.x6000049",asm0,"x60001a2");
        
        CILJS.declareVirtual(type,"asm0.x600004f",asm0,"x60001a3");
        
        CILJS.declareVirtual(type,"asm0.x6000051",asm0,"x60001a4");
        
        CILJS.declareVirtual(type,"asm0.x60001ca",asm0,"x60001a6");
        
        CILJS.declareVirtual(type,"asm0.x6000052",asm0,"x60001a7");
        
        CILJS.declareVirtual(type,"asm0.x6000053",asm0,"x60001a8");
        
        CILJS.declareVirtual(type,"asm0.x6000054",asm0,"x60001a9");
        
        CILJS.declareVirtual(type,"asm0.x6000055",asm0,"x60001aa");
        
        CILJS.declareVirtual(type,"asm0.x6000056",asm0,"x60001ac");
        
        CILJS.declareVirtual(type,"asm0.x6000046",asm0,"x6000046");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.implementInterface(
            type,
            [asm0["System.Reflection.ICustomAttributeProvider"]()],
            [
                ["x60001b6", asm0, "x6000199"],
                ["x60001b7", asm0, "x600019b"],
                ["x60001b8", asm0, "x600019c"]
            ]);
    },
    function ()
    {
        
        return function TypeInfo()
        {
            
            TypeInfo.init();
            
            this.ctor = null;
        };
    });
asm["System.Reflection.AssemblyCompanyAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.AssemblyCompanyAttribute",false,false,false,false,false,[],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t200005a",null);
        
        type.TypeMetadataName = "asm0.t200005a";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function AssemblyCompanyAttribute()
        {
            
            AssemblyCompanyAttribute.init();
        };
    });
asm["System.Reflection.AssemblyConfigurationAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.AssemblyConfigurationAttribute",false,false,false,false,false,[],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t200005b",null);
        
        type.TypeMetadataName = "asm0.t200005b";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function AssemblyConfigurationAttribute()
        {
            
            AssemblyConfigurationAttribute.init();
        };
    });
asm["System.Reflection.AssemblyFileVersionAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.AssemblyFileVersionAttribute",false,false,false,false,false,[],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t200005c",null);
        
        type.TypeMetadataName = "asm0.t200005c";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function AssemblyFileVersionAttribute()
        {
            
            AssemblyFileVersionAttribute.init();
        };
    });
asm["System.Reflection.AssemblyInformationalVersionAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.AssemblyInformationalVersionAttribute",false,false,false,false,false,[],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t200005d",null);
        
        type.TypeMetadataName = "asm0.t200005d";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function AssemblyInformationalVersionAttribute()
        {
            
            AssemblyInformationalVersionAttribute.init();
        };
    });
asm["System.Reflection.AssemblyTitleAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.AssemblyTitleAttribute",false,false,false,false,false,[],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t200005e",null);
        
        type.TypeMetadataName = "asm0.t200005e";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function AssemblyTitleAttribute()
        {
            
            AssemblyTitleAttribute.init();
        };
    });
asm["System.Reflection.AssemblyVersionAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.AssemblyVersionAttribute",false,false,false,false,false,[],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t200005f",null);
        
        type.TypeMetadataName = "asm0.t200005f";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function AssemblyVersionAttribute()
        {
            
            AssemblyVersionAttribute.init();
        };
    });
asm["System.Reflection.AssemblyProductAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.AssemblyProductAttribute",false,false,false,false,false,[],[],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t2000060",null);
        
        type.TypeMetadataName = "asm0.t2000060";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function AssemblyProductAttribute()
        {
            
            AssemblyProductAttribute.init();
        };
    });
asm["System.Reflection.DefaultMemberAttribute"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Attribute"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.DefaultMemberAttribute",false,false,false,false,false,[
                [
                    asm0["System.AttributeUsageAttribute"](),
                    asm0.x6000058,
                    [
                        1036
                    ]
                ]
            ],[
                [asm0, "x60001b5", "get_MemberName"]
            ],asm0["System.Attribute"](),CILJS.isInstDefault(type),Array,"asm0.t2000061",null);
        
        type.TypeMetadataName = "asm0.t2000061";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function DefaultMemberAttribute()
        {
            
            DefaultMemberAttribute.init();
            
            this.System_ReflectionDefaultMemberAttributemember_name = null;
        };
    });
asm["System.Reflection.ICustomAttributeProvider"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.ICustomAttributeProvider",false,false,true,false,false,[],[
                [asm0, "x60001b6", "GetCustomAttributes"],
                [asm0, "x60001b7", "GetCustomAttributes"],
                [asm0, "x60001b8", "IsDefined"]
            ],null,CILJS.isInstInterface(type),Array,"asm0.t2000062",null);
        
        type.TypeMetadataName = "asm0.t2000062";
        
        CILJS.declareVirtual(type,"asm0.x60001b6",asm0,"x60001b6");
        
        CILJS.declareVirtual(type,"asm0.x60001b7",asm0,"x60001b7");
        
        CILJS.declareVirtual(type,"asm0.x60001b8",asm0,"x60001b8");
    },
    function ()
    {
        
        return function ICustomAttributeProvider()
        {
            
            ICustomAttributeProvider.init();
        };
    });
asm["System.Reflection.MethodInfo"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Reflection.MemberInfo"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.MethodInfo",false,false,false,false,false,[],[
                [asm0, "x60001bb", "GetCustomAttributes"],
                [asm0, "x60001bc", "GetCustomAttributes"],
                [asm0, "x60001bd", "IsDefined"],
                [asm0, "x60001be", "get_CustomAttributes"],
                [asm0, "x60001bf", "get_Name"],
                [asm0, "x60001c0", "Invoke"]
            ],asm0["System.Reflection.MemberInfo"](),CILJS.isInstDefault(type),Array,"asm0.t2000063",null);
        
        type.TypeMetadataName = "asm0.t2000063";
        
        CILJS.declareVirtual(type,"asm0.x60001c5",asm0,"x60001bb");
        
        CILJS.declareVirtual(type,"asm0.x60001c6",asm0,"x60001bc");
        
        CILJS.declareVirtual(type,"asm0.x60001c8",asm0,"x60001bd");
        
        CILJS.declareVirtual(type,"asm0.x60001c7",asm0,"x60001be");
        
        CILJS.declareVirtual(type,"asm0.x60001ca",asm0,"x60001bf");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm0["System.Reflection.ICustomAttributeProvider"]()],
            [
                ["x60001b6", asm0, "x60001bb"],
                ["x60001b7", asm0, "x60001bc"],
                ["x60001b8", asm0, "x60001bd"]
            ]);
    },
    function ()
    {
        
        return function MethodInfo()
        {
            
            MethodInfo.init();
            
            this.System_ReflectionMethodInfomethodData = null;
        };
    });
asm["System.Reflection.CustomAttributeData"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.CustomAttributeData",false,false,false,false,false,[],[
                [asm0, "x60001c3", "get_AttributeType"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000064",null);
        
        type.TypeMetadataName = "asm0.t2000064";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function CustomAttributeData()
        {
            
            CustomAttributeData.init();
            
            this.System_ReflectionCustomAttributeDataraw = null;
        };
    });
asm["System.Reflection.IntrospectionExtensions"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.IntrospectionExtensions",false,false,false,false,false,[
                [
                    asm0["System.Runtime.CompilerServices.ExtensionAttribute"](),
                    asm0.x600016e
                ]
            ],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000065",null);
        
        type.TypeMetadataName = "asm0.t2000065";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function IntrospectionExtensions()
        {
            
            IntrospectionExtensions.init();
        };
    });
asm["System.Reflection.MemberInfo"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.MemberInfo",false,false,false,false,false,[],[
                [asm0, "x60001c5", "GetCustomAttributes"],
                [asm0, "x60001c6", "GetCustomAttributes"],
                [asm0, "x60001c7", "get_CustomAttributes"],
                [asm0, "x60001c8", "IsDefined"],
                [asm0, "x60001ca", "get_Name"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000066",null);
        
        type.TypeMetadataName = "asm0.t2000066";
        
        CILJS.declareVirtual(type,"asm0.x60001c5",asm0,"x60001c5");
        
        CILJS.declareVirtual(type,"asm0.x60001c6",asm0,"x60001c6");
        
        CILJS.declareVirtual(type,"asm0.x60001c7",asm0,"x60001c7");
        
        CILJS.declareVirtual(type,"asm0.x60001c8",asm0,"x60001c8");
        
        CILJS.declareVirtual(type,"asm0.x60001ca",asm0,"x60001ca");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm0["System.Reflection.ICustomAttributeProvider"]()],
            [
                ["x60001b6", asm0, "x60001c5"],
                ["x60001b7", asm0, "x60001c6"],
                ["x60001b8", asm0, "x60001c8"]
            ]);
    },
    function ()
    {
        
        return function MemberInfo()
        {
            
            MemberInfo.init();
        };
    });
asm["System.Reflection.Assembly"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.Assembly",false,false,false,false,false,[],[
                [asm0, "x60001ce", "get_FullName"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000067",null);
        
        type.TypeMetadataName = "asm0.t2000067";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Assembly()
        {
            
            Assembly.init();
            
            this.System_ReflectionAssemblyrawAsm = null;
        };
    });
asm["CilJs.Runtime.UnboundGenericParameter"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"CilJs.Runtime.UnboundGenericParameter",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000069",null);
        
        type.TypeMetadataName = "asm0.t2000069";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function UnboundGenericParameter()
        {
            
            UnboundGenericParameter.init();
        };
    });
asm["CilJs.Runtime.InteropServices.Marshal"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"CilJs.Runtime.InteropServices.Marshal",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000070",null);
        
        type.TypeMetadataName = "asm0.t2000070";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Marshal()
        {
            
            Marshal.init();
        };
    });
asm["CilJs.JavaScript.Number"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"CilJs.JavaScript.Number",true,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm0.t2000071",new (asm0["CilJs.JavaScript.Number"]())());
        
        type.TypeMetadataName = "asm0.t2000071";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function $$Number()
        {
            
            $$Number.init();
        };
    });
asm["CilJs.JavaScript.Boolean"] = CILJS.declareType(
    [],
    function ()
    {
        
        return {};
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"CilJs.JavaScript.Boolean",true,false,false,false,false,[],[],asm0["System.ValueType"](),CILJS.isInstValueType(type),Array,"asm0.t2000072",new (asm0["CilJs.JavaScript.Boolean"]())());
        
        type.TypeMetadataName = "asm0.t2000072";
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x6000119");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function $$Boolean()
        {
            
            $$Boolean.init();
        };
    });
asm["CilJs.JavaScript.Object"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"CilJs.JavaScript.Object",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000073",null);
        
        type.TypeMetadataName = "asm0.t2000073";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function $$Object()
        {
            
            $$Object.init();
        };
    });
asm["CilJs.JavaScript.String"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"CilJs.JavaScript.String",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000074",null);
        
        type.Emtpy = null;
        
        type.TypeMetadataName = "asm0.t2000074";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function $$String()
        {
            
            $$String.init();
        };
    });
asm["CilJs.JavaScript.Array"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"CilJs.JavaScript.Array",false,false,false,false,false,[
                [
                    asm0["System.Reflection.DefaultMemberAttribute"](),
                    asm0.x60001b4,
                    [
                        CILJS.newString("Item")
                    ]
                ]
            ],[
                [asm0, "x60001f8", "get_Length", []],
                [asm0, "x60001f9", "get_Item", []],
                [asm0, "x60001fa", "set_Item", []],
                [asm0, "x60001fb", "GetEnumerator"],
                [asm0, "x60001fc", "AsEnumerable"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000075",null);
        
        type.TypeMetadataName = "asm0.t2000075";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function Array()
        {
            
            Array.init();
        };
    });
asm["System.Array+<>c__DisplayClass23_0`1"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return asm0["System.Object"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Array+<>c__DisplayClass23_0`1",false,false,false,true,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000076",null);
        
        (type.GenericArguments)["asm0.t2000076"] = [T];
        
        type.TypeMetadataName = ("asm0.t2000076<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function (T)
    {
        
        return function __c__DisplayClass23_0_1()
        {
            
            __c__DisplayClass23_0_1.init();
            
            this.comparer = null;
        };
    });
asm["System.Array`1+ArrayEnumerator"] = CILJS.declareType(
    ["T"],
    function (T)
    {
        
        return asm0["System.Object"]();
    },
    function (type, T)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Array`1+ArrayEnumerator",false,false,false,true,false,[],[
                [asm0, "x6000200", "get_Current"],
                [asm0, "x6000201", "MoveNext"],
                [asm0, "x6000203", "Reset"],
                [asm0, "x6000204", "Dispose"]
            ],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000077",null);
        
        (type.GenericArguments)["asm0.t2000077"] = [T];
        
        type.TypeMetadataName = ("asm0.t2000077<" + (T.TypeMetadataName + ">"));
        
        CILJS.declareVirtual(type,"asm0.x6000200",asm0,"x6000200");
        
        CILJS.declareVirtual(type,"asm0.x6000201",asm0,"x6000201");
        
        CILJS.declareVirtual(type,"asm0.x6000202",asm0,"x6000202");
        
        CILJS.declareVirtual(type,"asm0.x6000203",asm0,"x6000203");
        
        CILJS.declareVirtual(type,"asm0.x6000204",asm0,"x6000204");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.Generic.IEnumerator`1"](T), T],
            [
                ["x600018d", asm0, "x6000200"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.IEnumerator"]()],
            [
                ["x6000181", asm0, "x6000202"],
                ["x6000182", asm0, "x6000201"],
                ["x6000183", asm0, "x6000203"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IDisposable"]()],
            [
                ["x60000dd", asm0, "x6000204"]
            ]);
    },
    function (T)
    {
        
        return function ArrayEnumerator()
        {
            
            ArrayEnumerator.init();
            
            this.index = 0;
            
            this.length = 0;
            
            this.source = null;
        };
    });
asm["System.Reflection.TypeInfo+constructor"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.TypeInfo+constructor",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000078",null);
        
        type.TypeMetadataName = "asm0.t2000078";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function constructor()
        {
            
            constructor.init();
            
            this.FullName = null;
            
            this.BaseType = null;
            
            this.Assembly = null;
            
            this.CustomAttributes = null;
            
            this.Methods = null;
            
            this.TypeInstance = null;
            
            this.Hash = 0;
            
            this.IsGenericTypeDefinition = new (asm0["CilJs.JavaScript.Boolean"]())();
            
            this.IsInterface = new (asm0["CilJs.JavaScript.Boolean"]())();
            
            this.IsValueType = new (asm0["CilJs.JavaScript.Boolean"]())();
            
            this.IsPrimitive = new (asm0["CilJs.JavaScript.Boolean"]())();
            
            this.GenericArguments = null;
            
            this.Interfaces = null;
            
            this.MetadataName = null;
        };
    });
asm["System.Reflection.TypeInfo+<get_CustomAttributes>d__18"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.TypeInfo+<get_CustomAttributes>d__18",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t2000079",null);
        
        type.TypeMetadataName = "asm0.t2000079";
        
        CILJS.declareVirtual(type,"asm0.x6000207",asm0,"x6000207");
        
        CILJS.declareVirtual(type,"asm0.x6000208",asm0,"x6000208");
        
        CILJS.declareVirtual(type,"asm0.x600020a",asm0,"x600020a");
        
        CILJS.declareVirtual(type,"asm0.x600020b",asm0,"x600020b");
        
        CILJS.declareVirtual(type,"asm0.x600020c",asm0,"x600020c");
        
        CILJS.declareVirtual(type,"asm0.x600020d",asm0,"x600020d");
        
        CILJS.declareVirtual(type,"asm0.x600020e",asm0,"x600020e");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.Generic.IEnumerable`1"](asm0["System.Reflection.CustomAttributeData"]()), asm0["System.Reflection.CustomAttributeData"]()],
            [
                ["x6000184", asm0, "x600020d"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.IEnumerable"]()],
            [
                ["x600017d", asm0, "x600020e"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.Generic.IEnumerator`1"](asm0["System.Reflection.CustomAttributeData"]()), asm0["System.Reflection.CustomAttributeData"]()],
            [
                ["x600018d", asm0, "x600020a"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.IEnumerator"]()],
            [
                ["x6000181", asm0, "x600020c"],
                ["x6000182", asm0, "x6000208"],
                ["x6000183", asm0, "x600020b"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IDisposable"]()],
            [
                ["x60000dd", asm0, "x6000207"]
            ]);
    },
    function ()
    {
        
        return function _get_CustomAttributes_d__18()
        {
            
            _get_CustomAttributes_d__18.init();
            
            this["System_Reflection_get_CustomAttributes_d__18<>1__state"] = 0;
            
            this["System_Reflection_get_CustomAttributes_d__18<>2__current"] = null;
            
            this["System_Reflection_get_CustomAttributes_d__18<>l__initialThreadId"] = 0;
            
            this["<>4__this"] = null;
            
            this["System_Reflection_get_CustomAttributes_d__18<>s__1"] = null;
            
            this["System_Reflection_get_CustomAttributes_d__18<rawAttribData>5__2"] = null;
        };
    });
asm["System.Reflection.MethodInfo+<get_CustomAttributes>d__7"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.MethodInfo+<get_CustomAttributes>d__7",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t200007a",null);
        
        type.TypeMetadataName = "asm0.t200007a";
        
        CILJS.declareVirtual(type,"asm0.x6000210",asm0,"x6000210");
        
        CILJS.declareVirtual(type,"asm0.x6000211",asm0,"x6000211");
        
        CILJS.declareVirtual(type,"asm0.x6000213",asm0,"x6000213");
        
        CILJS.declareVirtual(type,"asm0.x6000214",asm0,"x6000214");
        
        CILJS.declareVirtual(type,"asm0.x6000215",asm0,"x6000215");
        
        CILJS.declareVirtual(type,"asm0.x6000216",asm0,"x6000216");
        
        CILJS.declareVirtual(type,"asm0.x6000217",asm0,"x6000217");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.Generic.IEnumerable`1"](asm0["System.Reflection.CustomAttributeData"]()), asm0["System.Reflection.CustomAttributeData"]()],
            [
                ["x6000184", asm0, "x6000216"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.IEnumerable"]()],
            [
                ["x600017d", asm0, "x6000217"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.Generic.IEnumerator`1"](asm0["System.Reflection.CustomAttributeData"]()), asm0["System.Reflection.CustomAttributeData"]()],
            [
                ["x600018d", asm0, "x6000213"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.IEnumerator"]()],
            [
                ["x6000181", asm0, "x6000215"],
                ["x6000182", asm0, "x6000211"],
                ["x6000183", asm0, "x6000214"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IDisposable"]()],
            [
                ["x60000dd", asm0, "x6000210"]
            ]);
    },
    function ()
    {
        
        return function _get_CustomAttributes_d__7()
        {
            
            _get_CustomAttributes_d__7.init();
            
            this["System_Reflection_get_CustomAttributes_d__7<>1__state"] = 0;
            
            this["System_Reflection_get_CustomAttributes_d__7<>2__current"] = null;
            
            this["System_Reflection_get_CustomAttributes_d__7<>l__initialThreadId"] = 0;
            
            this["<>4__this"] = null;
            
            this["System_Reflection_get_CustomAttributes_d__7<attributes>5__1"] = null;
            
            this["System_Reflection_get_CustomAttributes_d__7<>s__2"] = null;
            
            this["System_Reflection_get_CustomAttributes_d__7<rawAttribData>5__3"] = null;
        };
    });
asm["System.Reflection.Assembly+jsAsm"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"System.Reflection.Assembly+jsAsm",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t200007b",null);
        
        type.TypeMetadataName = "asm0.t200007b";
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
    },
    function ()
    {
        
        return function jsAsm()
        {
            
            jsAsm.init();
            
            this.FullName = null;
            
            this.ManagedInstance = null;
        };
    });
asm["CilJs.JavaScript.Array+<GetEnumerator>d__7"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"CilJs.JavaScript.Array+<GetEnumerator>d__7",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t200007c",null);
        
        type.TypeMetadataName = "asm0.t200007c";
        
        CILJS.declareVirtual(type,"asm0.x600021a",asm0,"x600021a");
        
        CILJS.declareVirtual(type,"asm0.x600021b",asm0,"x600021b");
        
        CILJS.declareVirtual(type,"asm0.x600021c",asm0,"x600021c");
        
        CILJS.declareVirtual(type,"asm0.x600021d",asm0,"x600021d");
        
        CILJS.declareVirtual(type,"asm0.x600021e",asm0,"x600021e");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.Generic.IEnumerator`1"](asm0["System.Object"]()), asm0["System.Object"]()],
            [
                ["x600018d", asm0, "x600021c"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.IEnumerator"]()],
            [
                ["x6000181", asm0, "x600021e"],
                ["x6000182", asm0, "x600021b"],
                ["x6000183", asm0, "x600021d"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IDisposable"]()],
            [
                ["x60000dd", asm0, "x600021a"]
            ]);
    },
    function ()
    {
        
        return function _GetEnumerator_d__7()
        {
            
            _GetEnumerator_d__7.init();
            
            this["CilJs_JavaScript_GetEnumerator_d__7<>1__state"] = 0;
            
            this["CilJs_JavaScript_GetEnumerator_d__7<>2__current"] = null;
            
            this["<>4__this"] = null;
            
            this["CilJs_JavaScript_GetEnumerator_d__7<a>5__1"] = null;
            
            this["CilJs_JavaScript_GetEnumerator_d__7<i>5__2"] = 0;
        };
    });
asm["CilJs.JavaScript.Array+<AsEnumerable>d__8"] = CILJS.declareType(
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function (type)
    {
        
        type.init = CILJS.nop;
        
        CILJS.initType(type,asm,"CilJs.JavaScript.Array+<AsEnumerable>d__8",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.isInstDefault(type),Array,"asm0.t200007d",null);
        
        type.TypeMetadataName = "asm0.t200007d";
        
        CILJS.declareVirtual(type,"asm0.x6000220",asm0,"x6000220");
        
        CILJS.declareVirtual(type,"asm0.x6000221",asm0,"x6000221");
        
        CILJS.declareVirtual(type,"asm0.x6000222",asm0,"x6000222");
        
        CILJS.declareVirtual(type,"asm0.x6000223",asm0,"x6000223");
        
        CILJS.declareVirtual(type,"asm0.x6000224",asm0,"x6000224");
        
        CILJS.declareVirtual(type,"asm0.x6000225",asm0,"x6000225");
        
        CILJS.declareVirtual(type,"asm0.x6000226",asm0,"x6000226");
        
        CILJS.declareVirtual(type,"asm0.x600009b",asm0,"x600009b");
        
        CILJS.declareVirtual(type,"asm0.x600009e",asm0,"x600009e");
        
        CILJS.declareVirtual(type,"asm0.x600009f",asm0,"x600009f");
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.Generic.IEnumerable`1"](asm0["System.Object"]()), asm0["System.Object"]()],
            [
                ["x6000184", asm0, "x6000225"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.IEnumerable"]()],
            [
                ["x600017d", asm0, "x6000226"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.Generic.IEnumerator`1"](asm0["System.Object"]()), asm0["System.Object"]()],
            [
                ["x600018d", asm0, "x6000222"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.Collections.IEnumerator"]()],
            [
                ["x6000181", asm0, "x6000224"],
                ["x6000182", asm0, "x6000221"],
                ["x6000183", asm0, "x6000223"]
            ]);
        
        CILJS.implementInterface(
            type,
            [asm0["System.IDisposable"]()],
            [
                ["x60000dd", asm0, "x6000220"]
            ]);
    },
    function ()
    {
        
        return function _AsEnumerable_d__8()
        {
            
            _AsEnumerable_d__8.init();
            
            this["CilJs_JavaScript_AsEnumerable_d__8<>1__state"] = 0;
            
            this["CilJs_JavaScript_AsEnumerable_d__8<>2__current"] = null;
            
            this["CilJs_JavaScript_AsEnumerable_d__8<>l__initialThreadId"] = 0;
            
            this["<>4__this"] = null;
            
            this["CilJs_JavaScript_AsEnumerable_d__8<a>5__1"] = null;
            
            this["CilJs_JavaScript_AsEnumerable_d__8<i>5__2"] = 0;
        };
    });
CILJS.declareAssembly("mscorlib",asm);
if (typeof module != "undefined"){
    
    module.exports = asm0;
}
//# sourceMappingURL=corlib.ciljs.js.map
