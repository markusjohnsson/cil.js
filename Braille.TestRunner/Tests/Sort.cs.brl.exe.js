var asm1;(function (asm)
{
    asm.FullName = "Sort.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.String Baz.get_Name()*/
    asm.x600000a = function get_Name(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc2;
        var loc0;
        var loc3;
        t0 = (asm0)["System.Object"]();
        t1 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  Sort.cs:14:9*/
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld String name */
                /* IL_07: call Boolean IsNullOrEmpty(System.String) */
                /* IL_0C: ldc.i4.0  */
                /* IL_0E: ceq  */
                /* IL_0F: stloc.1  */
                loc1 = ((asm0.x60001d4(arg0.Bazname) === (0|0)) ? (1) : (0));
                /* IL_10: ldloc.1  */
                /* IL_11: brtrue.s IL_24 */
                
                if (loc1){
                    __pos__ = 0x24;
                    continue;
                }
                /* IL_13: ldarg.0  */
                /* IL_14: call Int32 get_Age() */
                /* IL_19: stloc.2  */
                loc2 = asm1.x600000b(arg0);
                /* IL_1A: ldloca.s 2 */
                /* IL_1C: call String ToString() */
                /* IL_21: stloc.0  */
                loc0 = asm0.x60000ce({
                        'w': function (v)
                        {
                            loc2 = v;
                        },
                        'r': function ()
                        {
                            return loc2;
                        }
                    });
                /* IL_22: br.s IL_5B */
                __pos__ = 0x5B;
                continue;
                case 0x24:
                /* IL_24: ldc.i4.4  */
                /* IL_25: newarr System.Object */
                /* IL_2A: stloc.3  */
                loc3 = BLR.new_array(t0,(4|0));
                /* IL_2B: ldloc.3  */
                /* IL_2C: ldc.i4.0  */
                /* IL_2D: ldarg.0  */
                /* IL_2E: ldfld String name */
                /* IL_33: stelem.ref  */
                BLR.stelem_ref(loc3,(0|0),arg0.Bazname);
                /* IL_34: ldloc.3  */
                /* IL_35: ldc.i4.1  */
                /* IL_36: ldstr  ( */
                /* IL_3B: stelem.ref  */
                BLR.stelem_ref(loc3,(1|0),BLR.new_string(" ("));
                /* IL_3C: ldloc.3  */
                /* IL_3D: ldc.i4.2  */
                /* IL_3E: ldarg.0  */
                /* IL_3F: call Int32 get_Age() */
                /* IL_44: box System.Int32 */
                /* IL_49: stelem.ref  */
                BLR.stelem_ref(loc3,(2|0),{
                        'boxed': asm1.x600000b(arg0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    });
                /* IL_4A: ldloc.3  */
                /* IL_4B: ldc.i4.3  */
                /* IL_4C: ldstr ) */
                /* IL_51: stelem.ref  */
                BLR.stelem_ref(loc3,(3|0),BLR.new_string(")"));
                /* IL_52: ldloc.3  */
                /* IL_53: call String Concat(System.Object[]) */
                /* IL_58: stloc.0  */
                loc0 = asm0.x60001c1(loc3);
                case 0x5B:
                /* IL_5B: ldloc.0  */
                /* IL_5C: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Baz.get_Age()*/
    asm.x600000b = function get_Age(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  Sort.cs:24:13*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldfld Int32 age */
        /* IL_07: ldc.i4.1  */
        /* IL_08: add  */
        /* IL_09: stloc.0  */
        loc0 = (arg0.Bazage + (1|0)) | (0|0);
        /* IL_0C: ldloc.0  */
        /* IL_0D: ret  */
        return loc0;
    };;
    /* System.Int32 Baz.GetHashCode()*/
    asm.x600000d = function GetHashCode(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  Sort.cs:34:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: call Int32 get_Age() */
        /* IL_07: ldarg.0  */
        /* IL_08: call String get_Name() */
        /* IL_0D: callvirt Int32 GetHashCode() */
        /* IL_12: xor  */
        /* IL_13: stloc.0  */
        loc0 = asm1.x600000b(arg0) ^ (((asm1.x600000a(arg0).vtable)["asm0.x6000009"])())(asm1.x600000a(arg0));
        /* IL_16: ldloc.0  */
        /* IL_17: ret  */
        return loc0;
    };;
    /* System.Boolean Baz.Equals(Object)*/
    asm.x600000e_init = function ()
    {
        (asm1.Baz().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0, arg1)
    {
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Equals(arg0, arg1)
    {
        var t0;
        var st_11;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        t0 = asm1.Baz();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  Sort.cs:39:5*/
                
                /* IL_01: ldarg.1  */
                /* IL_02: isinst Baz */
                /* IL_07: stloc.0  */
                loc0 = t0.IsInst(arg1);
                /* IL_08: ldloc.0  */
                /* IL_09: ldnull  */
                /* IL_0B: ceq  */
                /* IL_0C: ldc.i4.0  */
                /* IL_0E: ceq  */
                /* IL_0F: stloc.2  */
                loc2 = ((((loc0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_10: ldloc.2  */
                /* IL_11: brtrue.s IL_17 */
                
                if (loc2){
                    __pos__ = 0x17;
                    continue;
                }
                /* IL_13: ldc.i4.0  */
                /* IL_14: stloc.1  */
                loc1 = (0|0);
                /* IL_15: br.s IL_3D */
                __pos__ = 0x3D;
                continue;
                case 0x17:
                /* IL_17: ldloc.0  */
                /* IL_18: callvirt Int32 get_Age() */
                /* IL_1D: ldarg.0  */
                /* IL_1E: call Int32 get_Age() */
                /* IL_23: bne.un.s IL_38 */
                
                if (BLR.unsigned_value(asm1.x600000b(loc0)) != BLR.unsigned_value(asm1.x600000b(arg0))){
                    __pos__ = 0x38;
                    continue;
                }
                /* IL_25: ldloc.0  */
                /* IL_26: callvirt String get_Name() */
                /* IL_2B: ldarg.0  */
                /* IL_2C: call String get_Name() */
                /* IL_31: call Boolean op_Equality(System.String, System.String) */
                st_11 = asm0.x60001c6(asm1.x600000a(loc0),asm1.x600000a(arg0));
                /* IL_36: br.s IL_39 */
                __pos__ = 0x39;
                continue;
                case 0x38:
                /* IL_38: ldc.i4.0  */
                st_11 = (0|0);
                case 0x39:
                /* IL_39: nop  */
                
                /* IL_3A: stloc.1  */
                loc1 = st_11;
                case 0x3D:
                /* IL_3D: ldloc.1  */
                /* IL_3E: ret  */
                return loc1;
            }
        }
    };
    /* System.String Baz.ToString()*/
    asm.x600000f = function ToString(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  Sort.cs:48:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: call String get_Name() */
        /* IL_07: stloc.0  */
        loc0 = asm1.x600000a(arg0);
        /* IL_0A: ldloc.0  */
        /* IL_0B: ret  */
        return loc0;
    };;
    /*  Baz..ctor(String,Int32)*/
    asm.x600000c = function _ctor(arg0, arg1, arg2)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: nop  Sort.cs:28:5*/
        /* IL_08: ldarg.0  */
        /* IL_09: ldarg.1  */
        /* IL_0A: stfld String name */
        arg0.Bazname = arg1;
        /* IL_0F: ldarg.0  */
        /* IL_10: ldarg.2  */
        /* IL_11: stfld Int32 age */
        arg0.Bazage = arg2;
        /* IL_16: nop  Sort.cs:31:5*/
        /* IL_17: ret  */
        return ;
    };;
    /* System.Int32 ByNameDescending.Compare(Baz,Baz)*/
    asm.x6000010 = function Compare(arg0, arg1, arg2)
    {
        var __pos__;
        var loc0;
        var loc1;
        __pos__ = 0x0;
        /* IL_00: nop  Sort.cs:56:5*/
        /* IL_01: ldarg.1  */
        /* IL_02: callvirt String get_Name() */
        /* IL_07: ldarg.2  */
        /* IL_08: callvirt String get_Name() */
        /* IL_0D: callvirt Int32 CompareTo(System.String) */
        /* IL_12: stloc.0  */
        loc0 = (((asm1.x600000a(arg1).vtable)["asm0.x60001d3"])())(asm1.x600000a(arg1),asm1.x600000a(arg2));
        /* IL_13: ldloc.0  */
        /* IL_14: neg  */
        /* IL_15: stloc.1  */
        loc1 = (-(loc0));
        /* IL_18: ldloc.1  */
        /* IL_19: ret  */
        return loc1;
    };;
    /*  ByNameDescending..ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Int32 ByName.Compare(Baz,Baz)*/
    asm.x6000012 = function Compare(arg0, arg1, arg2)
    {
        var __pos__;
        var loc0;
        var loc1;
        __pos__ = 0x0;
        /* IL_00: nop  Sort.cs:65:5*/
        /* IL_01: ldarg.1  */
        /* IL_02: callvirt String get_Name() */
        /* IL_07: ldarg.2  */
        /* IL_08: callvirt String get_Name() */
        /* IL_0D: callvirt Int32 CompareTo(System.String) */
        /* IL_12: stloc.0  */
        loc0 = (((asm1.x600000a(arg1).vtable)["asm0.x60001d3"])())(asm1.x600000a(arg1),asm1.x600000a(arg2));
        /* IL_13: ldloc.0  */
        /* IL_14: stloc.1  */
        loc1 = loc0;
        /* IL_17: ldloc.1  */
        /* IL_18: ret  */
        return loc1;
    };;
    /*  ByName..ctor()*/
    asm.x6000013 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static Baz[] Program.CreateBazCollection()*/
    asm.x6000014_init = function ()
    {
        (asm1.Baz().init)();
        asm.x6000014 = asm.x6000014_;
    };;
    asm.x6000014 = function ()
    {
        asm.x6000014_init.apply(this,arguments);
        return asm.x6000014_.apply(this,arguments);
    };;
    asm.x6000014_ = function CreateBazCollection()
    {
        var t0;
        var __pos__;
        var loc1;
        var loc0;
        t0 = asm1.Baz();
        __pos__ = 0x0;
        /* IL_00: nop  Sort.cs:73:40*/
        /* IL_01: ldc.i4.5  */
        /* IL_02: newarr Baz */
        /* IL_07: stloc.1  */
        loc1 = BLR.new_array(t0,(5|0));
        /* IL_08: ldloc.1  */
        /* IL_09: ldc.i4.0  */
        /* IL_0A: ldstr jb */
        /* IL_0F: ldc.i4.s 25 */
        /* IL_11: newobj Void .ctor(System.String, System.Int32) */
        /* IL_16: stelem.ref  */
        BLR.stelem_ref(loc1,(0|0),BLR.newobj(t0,asm1.x600000c,[null, BLR.new_string("jb"), (25|0)]));
        /* IL_17: ldloc.1  */
        /* IL_18: ldc.i4.1  */
        /* IL_19: ldstr ana */
        /* IL_1E: ldc.i4.s 20 */
        /* IL_20: newobj Void .ctor(System.String, System.Int32) */
        /* IL_25: stelem.ref  */
        BLR.stelem_ref(loc1,(1|0),BLR.newobj(t0,asm1.x600000c,[null, BLR.new_string("ana"), (20|0)]));
        /* IL_26: ldloc.1  */
        /* IL_27: ldc.i4.2  */
        /* IL_28: ldstr reg */
        /* IL_2D: ldc.i4.s 28 */
        /* IL_2F: newobj Void .ctor(System.String, System.Int32) */
        /* IL_34: stelem.ref  */
        BLR.stelem_ref(loc1,(2|0),BLR.newobj(t0,asm1.x600000c,[null, BLR.new_string("reg"), (28|0)]));
        /* IL_35: ldloc.1  */
        /* IL_36: ldc.i4.3  */
        /* IL_37: ldstr ro */
        /* IL_3C: ldc.i4.s 25 */
        /* IL_3E: newobj Void .ctor(System.String, System.Int32) */
        /* IL_43: stelem.ref  */
        BLR.stelem_ref(loc1,(3|0),BLR.newobj(t0,asm1.x600000c,[null, BLR.new_string("ro"), (25|0)]));
        /* IL_44: ldloc.1  */
        /* IL_45: ldc.i4.4  */
        /* IL_46: ldstr jb */
        /* IL_4B: ldc.i4.7  */
        /* IL_4C: newobj Void .ctor(System.String, System.Int32) */
        /* IL_51: stelem.ref  */
        BLR.stelem_ref(loc1,(4|0),BLR.newobj(t0,asm1.x600000c,[null, BLR.new_string("jb"), (7|0)]));
        /* IL_52: ldloc.1  */
        /* IL_53: stloc.0  */
        loc0 = loc1;
        /* IL_56: ldloc.0  */
        /* IL_57: ret  */
        return loc0;
    };
    /* static System.Void Program.Main()*/
    asm.x6000015_init = function ()
    {
        (asm1.ByName().init)();
        (asm1.Baz().init)();
        (asm1.ByNameDescending().init)();
        asm.x6000015 = asm.x6000015_;
    };;
    asm.x6000015 = function ()
    {
        BLR.init_base_types();
        asm.x6000015_init.apply(this,arguments);
        return asm.x6000015_.apply(this,arguments);
    };;
    asm.x6000015_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc3;
        var loc2;
        t0 = asm1.ByName();
        t1 = asm1.Baz();
        t2 = asm1.ByNameDescending();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  Sort.cs:83:5*/
                
                /* IL_01: ldstr Ascending */
                /* IL_06: call Void Log(System.Object) */
                asm1.x6000001(BLR.new_string("Ascending"));
                /* IL_0B: nop  */
                
                /* IL_0C: call Baz[] CreateBazCollection() */
                /* IL_11: stloc.0  */
                loc0 = asm1.x6000014();
                /* IL_12: ldloc.0  */
                /* IL_13: newobj Void .ctor() */
                /* IL_18: call Void Sort[Baz](Baz[], System.Collections.Generic.IComparer`1[Baz]) */
                (asm0.x600017e(asm1.Baz()))(loc0,BLR.newobj(t0,asm1.x6000013,[null]));
                /* IL_1D: nop  */
                
                /* IL_1E: ldc.i4.0  */
                /* IL_1F: stloc.1  */
                loc1 = (0|0);
                /* IL_20: br.s IL_31 Sort.cs:16707566:0*/
                __pos__ = 0x31;
                continue;
                case 0x22:
                /* IL_22: nop  Sort.cs:89:9*/
                
                /* IL_23: ldloc.0  */
                /* IL_24: ldloc.1  */
                /* IL_25: ldelem.ref  */
                /* IL_26: call Void Log(System.Object) */
                asm1.x6000001(BLR.ldelem_ref(loc0,loc1));
                /* IL_2B: nop  */
                
                /* IL_2C: nop  Sort.cs:91:9*/
                
                /* IL_2D: ldloc.1  */
                /* IL_2E: ldc.i4.1  */
                /* IL_2F: add  */
                /* IL_30: stloc.1  */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x31:
                /* IL_31: ldloc.1  */
                /* IL_32: ldloc.0  */
                /* IL_33: ldlen  */
                /* IL_34: conv.i4  */
                /* IL_36: clt  */
                /* IL_37: stloc.3  */
                loc3 = ((loc1 < (loc0.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_38: ldloc.3  */
                /* IL_39: brtrue.s IL_22 */
                
                if (loc3){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_3B: ldstr Descending */
                /* IL_40: call Void Log(System.Object) */
                asm1.x6000001(BLR.new_string("Descending"));
                /* IL_45: nop  */
                
                /* IL_46: call Baz[] CreateBazCollection() */
                /* IL_4B: stloc.2  */
                loc2 = asm1.x6000014();
                /* IL_4C: ldloc.2  */
                /* IL_4D: newobj Void .ctor() */
                /* IL_52: call Void Sort[Baz](Baz[], System.Collections.Generic.IComparer`1[Baz]) */
                (asm0.x600017e(asm1.Baz()))(loc2,BLR.newobj(t2,asm1.x6000011,[null]));
                /* IL_57: nop  */
                
                /* IL_58: ldc.i4.0  */
                /* IL_59: stloc.1  */
                loc1 = (0|0);
                /* IL_5A: br.s IL_6B Sort.cs:16707566:0*/
                __pos__ = 0x6B;
                continue;
                case 0x5C:
                /* IL_5C: nop  Sort.cs:98:9*/
                
                /* IL_5D: ldloc.2  */
                /* IL_5E: ldloc.1  */
                /* IL_5F: ldelem.ref  */
                /* IL_60: call Void Log(System.Object) */
                asm1.x6000001(BLR.ldelem_ref(loc2,loc1));
                /* IL_65: nop  */
                
                /* IL_66: nop  Sort.cs:100:9*/
                
                /* IL_67: ldloc.1  */
                /* IL_68: ldc.i4.1  */
                /* IL_69: add  */
                /* IL_6A: stloc.1  */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x6B:
                /* IL_6B: ldloc.1  */
                /* IL_6C: ldloc.2  */
                /* IL_6D: ldlen  */
                /* IL_6E: conv.i4  */
                /* IL_70: clt  */
                /* IL_71: stloc.3  */
                loc3 = ((loc1 < (loc2.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_72: ldloc.3  */
                /* IL_73: brtrue.s IL_5C */
                
                if (loc3){
                    __pos__ = 0x5C;
                    continue;
                }
                /* IL_75: ret  Sort.cs:101:5*/
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000016 = function _ctor(arg0)
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
    asm.Baz = BLR.declare_type(
        "Baz",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Baz",false,false,false,false,false,[],[
                    [asm1, "x600000a", "get_Name"],
                    [asm1, "x600000b", "get_Age"],
                    [asm1, "x600000d", "GetHashCode"],
                    [asm1, "x600000e", "Equals"],
                    [asm1, "x600000f", "ToString"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000009","asm1.x600000d");
            BLR.declare_virtual(this,"asm0.x6000008","asm1.x600000e");
            BLR.declare_virtual(this,"asm0.x6000005","asm1.x600000f");
            this.prototype.Bazname = null;
            this.prototype.Bazage = 0;
        });
    asm.ByNameDescending = BLR.declare_type(
        "ByNameDescending",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"ByNameDescending",false,false,false,false,false,[],[
                    [asm1, "x6000010", "Compare"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm1.x6000010","asm1.x6000010");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IComparer`1"](asm1.Baz()), asm1.Baz()],
                {
                    'x600002f': function (){ return asm1.x6000010;}
                });
        });
    asm.ByName = BLR.declare_type(
        "ByName",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"ByName",false,false,false,false,false,[],[
                    [asm1, "x6000012", "Compare"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm1.x6000012","asm1.x6000012");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IComparer`1"](asm1.Baz()), asm1.Baz()],
                {
                    'x600002f': function (){ return asm1.x6000012;}
                });
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000015;
})(asm1 || (asm1 = {}));
