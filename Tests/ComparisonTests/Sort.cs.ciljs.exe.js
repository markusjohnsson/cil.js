
var asm1 = {};
var asm = asm1;
var asm0 = CILJS.find_assembly("mscorlib");
asm.FullName = "Sort.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";/* System.String Baz.get_Name()*/

asm.x6000001 = function get_Name(arg0)
{
    var t0;
    var t1;
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
    var loc1;
    var loc2;
    
    t0 = asm0["System.Object"]();
    
    t1 = asm0["System.Int32"]();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: ldfld String name */
            /* IL_07: call Boolean IsNullOrEmpty(System.String) */
            /* IL_0C: stloc.0  */
            
            loc0 = asm0.x6000103(arg0.Bazname);
            /* IL_0D: ldloc.0  */
            /* IL_0E: brfalse.s IL_21 */
            
            if ((!(loc0))){
                
                __pos__ = 0x21;
                
                continue;
            }
            /* IL_10: ldarg.0  */
            /* IL_11: call Int32 get_Age() */
            /* IL_16: stloc.1  */
            
            loc1 = asm1.x6000002(arg0);
            /* IL_17: ldloca.s 1 */
            /* IL_19: call String ToString() */
            /* IL_1E: stloc.2  */
            
            loc2 = asm0.x6000180({
                    w: function (v)
                    {
                        
                        loc1 = v;
                    },
                    r: function ()
                    {
                        
                        return loc1;
                    }
                });
            /* IL_1F: br.s IL_56 */
            
            __pos__ = 0x56;
            
            continue;
            case 0x21:
            /* IL_21: ldc.i4.4  */
            
            st_08 = 4;
            /* IL_22: newarr System.Object */
            
            st_09 = CILJS.new_array(t0,st_08);
            /* IL_27: dup  */
            
            st_0E = st_0B = st_09;
            /* IL_28: ldc.i4.0  */
            
            st_0C = 0;
            /* IL_29: ldarg.0  */
            
            st_0A = arg0;
            /* IL_2A: ldfld String name */
            
            st_0D = st_0A.Bazname;
            /* IL_2F: stelem.ref  */
            
            CILJS.stelem_ref(st_0B,st_0C,st_0D);
            /* IL_30: dup  */
            
            st_12 = st_0F = st_0E;
            /* IL_31: ldc.i4.1  */
            
            st_10 = 1;
            /* IL_32: ldstr  ( */
            
            st_11 = CILJS.new_string(" (");
            /* IL_37: stelem.ref  */
            
            CILJS.stelem_ref(st_0F,st_10,st_11);
            /* IL_38: dup  */
            
            st_18 = st_15 = st_12;
            /* IL_39: ldc.i4.2  */
            
            st_16 = 2;
            /* IL_3A: ldarg.0  */
            
            st_13 = arg0;
            /* IL_3B: call Int32 get_Age() */
            
            st_14 = asm1.x6000002(st_13);
            /* IL_40: box System.Int32 */
            
            st_17 = CILJS.make_box(st_14,t1);
            /* IL_45: stelem.ref  */
            
            CILJS.stelem_ref(st_15,st_16,st_17);
            /* IL_46: dup  */
            
            st_1C = st_19 = st_18;
            /* IL_47: ldc.i4.3  */
            
            st_1A = 3;
            /* IL_48: ldstr ) */
            
            st_1B = CILJS.new_string(")");
            /* IL_4D: stelem.ref  */
            
            CILJS.stelem_ref(st_19,st_1A,st_1B);
            /* IL_4E: call String Concat(System.Object[]) */
            
            st_1D = asm0.x60000f0(st_1C);
            /* IL_53: stloc.2  */
            
            loc2 = st_1D;
            case 0x56:
            /* IL_56: ldloc.2  */
            /* IL_57: ret  */
            
            return loc2;
        }
    }
};;/* System.Int32 Baz.get_Age()*/

asm.x6000002 = function get_Age(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: ldfld Int32 age */
    /* IL_07: ldc.i4.1  */
    /* IL_08: add  */
    /* IL_09: stloc.0  */
    
    loc0 = (arg0.Bazage + 1) | 0;
    /* IL_0C: ldloc.0  */
    /* IL_0D: ret  */
    
    return loc0;
};;/* System.Int32 Baz.GetHashCode()*/

asm.x6000004 = function GetHashCode(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call Int32 get_Age() */
    /* IL_07: ldarg.0  */
    /* IL_08: call String get_Name() */
    /* IL_0D: callvirt Int32 GetHashCode() */
    /* IL_12: xor  */
    /* IL_13: stloc.0  */
    
    loc0 = asm1.x6000002(arg0) ^ ((asm1.x6000001(arg0).vtable)["asm0.x60000ce"])(asm1.x6000001(arg0));
    /* IL_16: ldloc.0  */
    /* IL_17: ret  */
    
    return loc0;
};;/* System.Boolean Baz.Equals(Object)*/

asm.x6000005_init = function (arg0, arg1)
{
    
    (asm1.Baz().init)();
    
    asm.x6000005 = asm.x6000005_;
};;

asm.x6000005 = function (arg0, arg1)
{
    
    asm.x6000005_init(arg0,arg1);
    
    return asm.x6000005_(arg0,arg1);
};;
asm.x6000005_ = function Equals(arg0, arg1)
{
    var t0;
    var st_0F;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc1;
    var loc2;
    
    t0 = asm1.Baz();
    
    
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldarg.1  */
            /* IL_02: isinst Baz */
            /* IL_07: stloc.0  */
            
            loc0 = t0.IsInst(arg1);
            /* IL_08: ldloc.0  */
            /* IL_09: ldnull  */
            /* IL_0B: ceq  */
            /* IL_0C: stloc.1  */
            
            loc1 = ((loc0 === null) ? 1 : 0);
            /* IL_0D: ldloc.1  */
            /* IL_0E: brfalse.s IL_14 */
            
            if ((!(loc1))){
                
                __pos__ = 0x14;
                
                continue;
            }
            /* IL_10: ldc.i4.0  */
            /* IL_11: stloc.2  */
            
            loc2 = 0;
            /* IL_12: br.s IL_39 */
            
            __pos__ = 0x39;
            
            continue;
            case 0x14:
            /* IL_14: ldloc.0  */
            /* IL_15: callvirt Int32 get_Age() */
            /* IL_1A: ldarg.0  */
            /* IL_1B: call Int32 get_Age() */
            /* IL_20: bne.un.s IL_35 */
            
            if (CILJS.unsigned_value(asm1.x6000002(loc0)) != CILJS.unsigned_value(asm1.x6000002(arg0))){
                
                __pos__ = 0x35;
                
                continue;
            }
            /* IL_22: ldloc.0  */
            /* IL_23: callvirt String get_Name() */
            /* IL_28: ldarg.0  */
            /* IL_29: call String get_Name() */
            /* IL_2E: call Boolean op_Equality(System.String, System.String) */
            
            st_0F = asm0.x60000f5(asm1.x6000001(loc0),asm1.x6000001(arg0));
            /* IL_33: br.s IL_36 */
            
            __pos__ = 0x36;
            
            continue;
            case 0x35:
            /* IL_35: ldc.i4.0  */
            
            st_0F = 0;
            case 0x36:
            /* IL_36: stloc.2  */
            
            loc2 = st_0F;
            case 0x39:
            /* IL_39: ldloc.2  */
            /* IL_3A: ret  */
            
            return loc2;
        }
    }
};/* System.String Baz.ToString()*/

asm.x6000006 = function ToString(arg0)
{
    var loc0;
    /* IL_00: nop  */
    /* IL_01: ldarg.0  */
    /* IL_02: call String get_Name() */
    /* IL_07: stloc.0  */
    
    loc0 = asm1.x6000001(arg0);
    /* IL_0A: ldloc.0  */
    /* IL_0B: ret  */
    
    return loc0;
};;/*  Baz..ctor(String,Int32)*/

asm.x6000003 = function _ctor(arg0, arg1, arg2)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: nop  */
    /* IL_08: ldarg.0  */
    /* IL_09: ldarg.1  */
    /* IL_0A: stfld String name */
    
    arg0.Bazname = arg1;
    /* IL_0F: ldarg.0  */
    /* IL_10: ldarg.2  */
    /* IL_11: stfld Int32 age */
    
    arg0.Bazage = arg2;
    /* IL_16: ret  */
    
    return ;
};;/* System.Int32 ByNameDescending.Compare(Baz,Baz)*/

asm.x6000007 = function Compare(arg0, arg1, arg2)
{
    var loc0;
    var loc1;
    /* IL_00: nop  */
    /* IL_01: ldarg.1  */
    /* IL_02: callvirt String get_Name() */
    /* IL_07: ldarg.2  */
    /* IL_08: callvirt String get_Name() */
    /* IL_0D: callvirt Int32 CompareTo(System.String) */
    /* IL_12: stloc.0  */
    
    loc0 = ((asm1.x6000001(arg1).vtable)["asm0.x6000102"])(asm1.x6000001(arg1),asm1.x6000001(arg2));
    /* IL_13: ldloc.0  */
    /* IL_14: neg  */
    /* IL_15: stloc.1  */
    
    loc1 = (-(loc0));
    /* IL_18: ldloc.1  */
    /* IL_19: ret  */
    
    return loc1;
};;/*  ByNameDescending..ctor()*/

asm.x6000008 = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* System.Int32 ByName.Compare(Baz,Baz)*/

asm.x6000009 = function Compare(arg0, arg1, arg2)
{
    var loc0;
    var loc1;
    /* IL_00: nop  */
    /* IL_01: ldarg.1  */
    /* IL_02: callvirt String get_Name() */
    /* IL_07: ldarg.2  */
    /* IL_08: callvirt String get_Name() */
    /* IL_0D: callvirt Int32 CompareTo(System.String) */
    /* IL_12: stloc.0  */
    
    loc0 = ((asm1.x6000001(arg1).vtable)["asm0.x6000102"])(asm1.x6000001(arg1),asm1.x6000001(arg2));
    /* IL_13: ldloc.0  */
    /* IL_14: stloc.1  */
    
    loc1 = loc0;
    /* IL_17: ldloc.1  */
    /* IL_18: ret  */
    
    return loc1;
};;/*  ByName..ctor()*/

asm.x600000a = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;/* static Baz[] Program.CreateBazCollection()*/

asm.x600000b_init = function ()
{
    
    (asm1.Baz().init)();
    
    asm.x600000b = asm.x600000b_;
};;

asm.x600000b = function ()
{
    
    asm.x600000b_init();
    
    return asm.x600000b_();
};;
asm.x600000b_ = function CreateBazCollection()
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
    var st_1E;
    var st_1F;
    var loc0;
    
    t0 = asm1.Baz();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* IL_00: nop  */
    /* IL_01: ldc.i4.5  */
    
    st_00 = 5;
    /* IL_02: newarr Baz */
    
    st_01 = CILJS.new_array(t0,st_00);
    /* IL_07: dup  */
    
    st_07 = st_04 = st_01;
    /* IL_08: ldc.i4.0  */
    
    st_05 = 0;
    /* IL_09: ldstr jb */
    
    st_02 = CILJS.new_string("jb");
    /* IL_0E: ldc.i4.s 25 */
    
    st_03 = 25;
    /* IL_10: newobj Void .ctor(System.String, System.Int32) */
    
    st_06 = CILJS.newobj(t0,asm1.x6000003,[null, st_02, st_03]);
    /* IL_15: stelem.ref  */
    
    CILJS.stelem_ref(st_04,st_05,st_06);
    /* IL_16: dup  */
    
    st_0D = st_0A = st_07;
    /* IL_17: ldc.i4.1  */
    
    st_0B = 1;
    /* IL_18: ldstr ana */
    
    st_08 = CILJS.new_string("ana");
    /* IL_1D: ldc.i4.s 20 */
    
    st_09 = 20;
    /* IL_1F: newobj Void .ctor(System.String, System.Int32) */
    
    st_0C = CILJS.newobj(t0,asm1.x6000003,[null, st_08, st_09]);
    /* IL_24: stelem.ref  */
    
    CILJS.stelem_ref(st_0A,st_0B,st_0C);
    /* IL_25: dup  */
    
    st_13 = st_10 = st_0D;
    /* IL_26: ldc.i4.2  */
    
    st_11 = 2;
    /* IL_27: ldstr reg */
    
    st_0E = CILJS.new_string("reg");
    /* IL_2C: ldc.i4.s 28 */
    
    st_0F = 28;
    /* IL_2E: newobj Void .ctor(System.String, System.Int32) */
    
    st_12 = CILJS.newobj(t0,asm1.x6000003,[null, st_0E, st_0F]);
    /* IL_33: stelem.ref  */
    
    CILJS.stelem_ref(st_10,st_11,st_12);
    /* IL_34: dup  */
    
    st_19 = st_16 = st_13;
    /* IL_35: ldc.i4.3  */
    
    st_17 = 3;
    /* IL_36: ldstr ro */
    
    st_14 = CILJS.new_string("ro");
    /* IL_3B: ldc.i4.s 25 */
    
    st_15 = 25;
    /* IL_3D: newobj Void .ctor(System.String, System.Int32) */
    
    st_18 = CILJS.newobj(t0,asm1.x6000003,[null, st_14, st_15]);
    /* IL_42: stelem.ref  */
    
    CILJS.stelem_ref(st_16,st_17,st_18);
    /* IL_43: dup  */
    
    st_1F = st_1C = st_19;
    /* IL_44: ldc.i4.4  */
    
    st_1D = 4;
    /* IL_45: ldstr jb */
    
    st_1A = CILJS.new_string("jb");
    /* IL_4A: ldc.i4.7  */
    
    st_1B = 7;
    /* IL_4B: newobj Void .ctor(System.String, System.Int32) */
    
    st_1E = CILJS.newobj(t0,asm1.x6000003,[null, st_1A, st_1B]);
    /* IL_50: stelem.ref  */
    
    CILJS.stelem_ref(st_1C,st_1D,st_1E);
    /* IL_51: stloc.0  */
    
    loc0 = st_1F;
    /* IL_54: ldloc.0  */
    /* IL_55: ret  */
    
    return loc0;
};/* static System.Void Program.Main()*/

asm.x600000c_init = function ()
{
    
    (asm1.ByName().init)();
    
    (asm1.Baz().init)();
    
    (asm1.ByNameDescending().init)();
    
    asm.x600000c = asm.x600000c_;
};;

asm.x600000c = function ()
{
    
    asm.x600000c_init();
    
    return asm.x600000c_();
};;
asm.x600000c_ = function Main()
{
    var t0;
    var t1;
    var t2;
    var t3;
    var in_block_0;
    var __pos__;
    var loc0;
    var loc2;
    var in_block_1;
    var loc3;
    var loc1;
    var loc4;
    var loc5;
    
    CILJS.init_base_types();
    
    t0 = asm0["System.Object"]();
    
    t1 = asm1.ByName();
    
    t2 = asm1.Baz();
    
    t3 = asm1.ByNameDescending();
    
    in_block_0 = true;
    
    __pos__ = 0x0;
    
    while (in_block_0){
        
        switch (__pos__){
            case 0x0:
            /* IL_00: nop  */
            /* IL_01: ldstr Ascending */
            /* IL_06: ldc.i4.0  */
            /* IL_07: newarr System.Object */
            /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
            
            asm0.x60000a2(CILJS.new_string("Ascending"),CILJS.new_array(t0,0));
            /* IL_11: nop  */
            /* IL_12: call Baz[] CreateBazCollection() */
            /* IL_17: stloc.0  */
            
            loc0 = asm1.x600000b();
            /* IL_18: ldloc.0  */
            /* IL_19: newobj Void .ctor() */
            /* IL_1E: call Void Sort[Baz](Baz[], System.Collections.Generic.IComparer`1[Baz]) */
            
            (asm0.x6000122(asm1.Baz()))(loc0,CILJS.newobj(t1,asm1.x600000a,[null]));
            /* IL_23: nop  */
            /* IL_24: ldc.i4.0  */
            /* IL_25: stloc.2  */
            
            loc2 = 0;
            /* IL_26: br.s IL_37 */
            
            __pos__ = 0x37;
            
            continue;
            case 0x28:
            case 0x37:
            
            in_block_1 = true;
            
            if (__pos__ > 0x3F){
                
                in_block_1 = false;
            }
            
            if (__pos__ < 0x28){
                
                __pos__ = 0x28;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x28:
                    /* IL_28: nop  */
                    /* IL_29: ldloc.0  */
                    /* IL_2A: ldloc.2  */
                    /* IL_2B: ldelem.ref  */
                    /* IL_2C: call Void WriteLine(System.Object) */
                    
                    asm0.x60000a1(CILJS.ldelem_ref(loc0,loc2));
                    /* IL_31: nop  */
                    /* IL_32: nop  */
                    /* IL_33: ldloc.2  */
                    /* IL_34: ldc.i4.1  */
                    /* IL_35: add  */
                    /* IL_36: stloc.2  */
                    
                    loc2 = (loc2 + 1) | 0;
                    case 0x37:
                    /* IL_37: ldloc.2  */
                    /* IL_38: ldloc.0  */
                    /* IL_39: ldlen  */
                    /* IL_3A: conv.i4  */
                    /* IL_3C: clt  */
                    /* IL_3D: stloc.3  */
                    
                    loc3 = ((loc2 < (loc0.jsarr.length | 0)) ? 1 : 0);
                    /* IL_3E: ldloc.3  */
                    /* IL_3F: brtrue.s IL_28 */
                    
                    if (loc3){
                        
                        __pos__ = 0x28;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x37) || (__pos__ < 0x28)){
                
                continue;
            }
            /* IL_41: ldstr Descending */
            /* IL_46: ldc.i4.0  */
            /* IL_47: newarr System.Object */
            /* IL_4C: call Void WriteLine(System.String, System.Object[]) */
            
            asm0.x60000a2(CILJS.new_string("Descending"),CILJS.new_array(t0,0));
            /* IL_51: nop  */
            /* IL_52: call Baz[] CreateBazCollection() */
            /* IL_57: stloc.1  */
            
            loc1 = asm1.x600000b();
            /* IL_58: ldloc.1  */
            /* IL_59: newobj Void .ctor() */
            /* IL_5E: call Void Sort[Baz](Baz[], System.Collections.Generic.IComparer`1[Baz]) */
            
            (asm0.x6000122(asm1.Baz()))(loc1,CILJS.newobj(t3,asm1.x6000008,[null]));
            /* IL_63: nop  */
            /* IL_64: ldc.i4.0  */
            /* IL_65: stloc.s 4 */
            
            loc4 = 0;
            /* IL_67: br.s IL_7B */
            
            __pos__ = 0x7B;
            
            continue;
            case 0x69:
            case 0x7B:
            
            in_block_1 = true;
            
            if (__pos__ > 0x86){
                
                in_block_1 = false;
            }
            
            if (__pos__ < 0x69){
                
                __pos__ = 0x69;
            }
            
            while (in_block_1){
                
                switch (__pos__){
                    case 0x69:
                    /* IL_69: nop  */
                    /* IL_6A: ldloc.1  */
                    /* IL_6B: ldloc.s 4 */
                    /* IL_6D: ldelem.ref  */
                    /* IL_6E: call Void WriteLine(System.Object) */
                    
                    asm0.x60000a1(CILJS.ldelem_ref(loc1,loc4));
                    /* IL_73: nop  */
                    /* IL_74: nop  */
                    /* IL_75: ldloc.s 4 */
                    /* IL_77: ldc.i4.1  */
                    /* IL_78: add  */
                    /* IL_79: stloc.s 4 */
                    
                    loc4 = (loc4 + 1) | 0;
                    case 0x7B:
                    /* IL_7B: ldloc.s 4 */
                    /* IL_7D: ldloc.1  */
                    /* IL_7E: ldlen  */
                    /* IL_7F: conv.i4  */
                    /* IL_81: clt  */
                    /* IL_82: stloc.s 5 */
                    
                    loc5 = ((loc4 < (loc1.jsarr.length | 0)) ? 1 : 0);
                    /* IL_84: ldloc.s 5 */
                    /* IL_86: brtrue.s IL_69 */
                    
                    if (loc5){
                        
                        __pos__ = 0x69;
                        
                        continue;
                    }
                }
                
                break;
            }
            
            if ((__pos__ > 0x7B) || (__pos__ < 0x69)){
                
                continue;
            }
            /* IL_88: ret  */
            
            return ;
        }
    }
};/*  Program..ctor()*/

asm.x600000d = function _ctor(arg0)
{
    /* IL_00: ldarg.0  */
    /* IL_01: call Void .ctor() */
    /* IL_06: nop  */
    /* IL_07: ret  */
    
    return ;
};;
asm.Baz = CILJS.declare_type(
    "Baz",
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"Baz",false,false,false,false,false,[],[
                [asm1, "x6000001", "get_Name"],
                [asm1, "x6000002", "get_Age"],
                [asm1, "x6000004", "GetHashCode"],
                [asm1, "x6000005", "Equals"],
                [asm1, "x6000006", "ToString"]
            ],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
        
        this.GenericTypeMetadataName = "asm1.t2000002";
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm1,"x6000004");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm1,"x6000005");
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm1,"x6000006");
    },
    function ()
    {
        
        return function Baz()
        {
            
            Baz.init();
            
            this.Bazname = null;
            
            this.Bazage = 0;
        };
    });
asm.ByNameDescending = CILJS.declare_type(
    "ByNameDescending",
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"ByNameDescending",false,false,false,false,false,[],[
                [asm1, "x6000007", "Compare"]
            ],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
        
        this.GenericTypeMetadataName = "asm1.t2000003";
        
        CILJS.declare_virtual(this,"asm1.x6000007",asm1,"x6000007");
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
        
        CILJS.implement_interface(
            this,
            [asm0["System.Collections.Generic.IComparer`1"](asm1.Baz()), asm1.Baz()],
            [
                ["x60001d9", asm1, "x6000007"]
            ]);
    },
    function ()
    {
        
        return function ByNameDescending()
        {
            
            ByNameDescending.init();
        };
    });
asm.ByName = CILJS.declare_type(
    "ByName",
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"ByName",false,false,false,false,false,[],[
                [asm1, "x6000009", "Compare"]
            ],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
        
        this.GenericTypeMetadataName = "asm1.t2000004";
        
        CILJS.declare_virtual(this,"asm1.x6000009",asm1,"x6000009");
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
        
        CILJS.implement_interface(
            this,
            [asm0["System.Collections.Generic.IComparer`1"](asm1.Baz()), asm1.Baz()],
            [
                ["x60001d9", asm1, "x6000009"]
            ]);
    },
    function ()
    {
        
        return function ByName()
        {
            
            ByName.init();
        };
    });
asm.Program = CILJS.declare_type(
    "Program",
    [],
    function ()
    {
        
        return asm0["System.Object"]();
    },
    function ()
    {
        
        this.init = CILJS.nop;
        
        CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
        
        this.GenericTypeMetadataName = "asm1.t2000005";
        
        CILJS.declare_virtual(this,"asm0.x60000ca",asm0,"x60000ca");
        
        CILJS.declare_virtual(this,"asm0.x60000cd",asm0,"x60000cd");
        
        CILJS.declare_virtual(this,"asm0.x60000ce",asm0,"x60000ce");
    },
    function ()
    {
        
        return function Program()
        {
            
            Program.init();
        };
    });
asm.entryPoint = asm.x600000c;
CILJS.declare_assembly("Sort.cs.ciljs",asm);
if (typeof module != "undefined"){
    
    module.exports = asm1;
}
//# sourceMappingURL=Sort.cs.ciljs.exe.js.map
