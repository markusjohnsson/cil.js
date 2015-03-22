var asm1; (function (asm)
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
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.String Baz.get_Name()*/
    asm.x600000a_init = function ()
    {
        ((asm0)["System.Object"]().init)();
        ((asm0)["System.Int32"]().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function (arg0)
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function get_Name(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Object"]();
        t1 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldfld String name*/
                /* IL_06: call Boolean IsNullOrEmpty(System.String)*/
                /* IL_0B: brfalse.s IL_1C*/
                
                if ((!(asm0.x600019a(arg0.Bazname)))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_0D: ldarg.0 */
                /* IL_0E: call Int32 get_Age()*/
                /* IL_13: stloc.0 */
                loc0 = asm1.x600000b(arg0);
                /* IL_14: ldloca.s 0*/
                /* IL_16: call String ToString()*/
                /* IL_1B: ret */
                return asm0.x60000a3({
                        'w': function (v)
                        {
                            loc0 = v;
                        },
                        'r': function ()
                        {
                            return loc0;
                        }
                    });
                case 0x1C:
                /* IL_1C: ldc.i4.4 */
                /* IL_1D: newarr System.Object*/
                /* IL_22: stloc.1 */
                loc1 = BLR.new_array(t0,(4|0));
                /* IL_23: ldloc.1 */
                /* IL_24: ldc.i4.0 */
                /* IL_25: ldarg.0 */
                /* IL_26: ldfld String name*/
                /* IL_2B: stelem.ref */
                BLR.stelem_ref(loc1,(0|0),arg0.Bazname);
                /* IL_2C: ldloc.1 */
                /* IL_2D: ldc.i4.1 */
                /* IL_2E: ldstr  (*/
                /* IL_33: stelem.ref */
                BLR.stelem_ref(loc1,(1|0),BLR.new_string(" ("));
                /* IL_34: ldloc.1 */
                /* IL_35: ldc.i4.2 */
                /* IL_36: ldarg.0 */
                /* IL_37: call Int32 get_Age()*/
                /* IL_3C: box System.Int32*/
                /* IL_41: stelem.ref */
                BLR.stelem_ref(loc1,(2|0),{
                        'boxed': asm1.x600000b(arg0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    });
                /* IL_42: ldloc.1 */
                /* IL_43: ldc.i4.3 */
                /* IL_44: ldstr )*/
                /* IL_49: stelem.ref */
                BLR.stelem_ref(loc1,(3|0),BLR.new_string(")"));
                /* IL_4A: ldloc.1 */
                /* IL_4B: call String Concat(System.Object[])*/
                /* IL_50: ret */
                return asm0.x6000187(loc1);
            }
        }
    };
    /* System.Int32 Baz.get_Age()*/
    asm.x600000b = function get_Age(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 age*/
        /* IL_06: ldc.i4.1 */
        /* IL_07: add */
        /* IL_08: ret */
        return (arg0.Bazage + (1|0)) | (0|0);
    };;
    /* System.Int32 Baz.GetHashCode()*/
    asm.x600000d = function GetHashCode(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Int32 get_Age()*/
        /* IL_06: ldarg.0 */
        /* IL_07: call String get_Name()*/
        /* IL_0C: callvirt Int32 GetHashCode()*/
        /* IL_11: xor */
        /* IL_12: ret */
        return asm1.x600000b(arg0) ^ (((asm1.x600000a(arg0).vtable)["asm0.x6000009"])())(asm1.x600000a(arg0));
    };;
    /* System.Boolean Baz.Equals(Object)*/
    asm.x600000e_init = function ()
    {
        (asm1.Baz().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0,arg1)
    {
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        t0 = asm1.Baz();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.1 */
                /* IL_01: isinst Baz*/
                /* IL_06: stloc.0 */
                loc0 = t0.IsInst(arg1);
                /* IL_07: ldloc.0 */
                /* IL_08: brtrue.s IL_0C*/
                
                if (loc0){
                    __pos__ = 0xC;
                    continue;
                }
                /* IL_0A: ldc.i4.0 */
                /* IL_0B: ret */
                return (0|0);
                case 0xC:
                /* IL_0C: ldloc.0 */
                /* IL_0D: callvirt Int32 get_Age()*/
                /* IL_12: ldarg.0 */
                /* IL_13: call Int32 get_Age()*/
                /* IL_18: bne.un.s IL_2C*/
                
                if (BLR.unsigned_value(asm1.x600000b(loc0)) != BLR.unsigned_value(asm1.x600000b(arg0))){
                    __pos__ = 0x2C;
                    continue;
                }
                /* IL_1A: ldloc.0 */
                /* IL_1B: callvirt String get_Name()*/
                /* IL_20: ldarg.0 */
                /* IL_21: call String get_Name()*/
                /* IL_26: call Boolean op_Equality(System.String, System.String)*/
                /* IL_2B: ret */
                return asm0.x600018c(asm1.x600000a(loc0),asm1.x600000a(arg0));
                case 0x2C:
                /* IL_2C: ldc.i4.0 */
                /* IL_2D: ret */
                return (0|0);
            }
        }
    };
    /* System.String Baz.ToString()*/
    asm.x600000f = function ToString(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call String get_Name()*/
        /* IL_06: ret */
        return asm1.x600000a(arg0);
    };;
    /*  Baz..ctor(String,Int32)*/
    asm.x600000c = function _ctor(arg0,arg1,arg2)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld String name*/
        arg0.Bazname = arg1;
        /* IL_0D: ldarg.0 */
        /* IL_0E: ldarg.2 */
        /* IL_0F: stfld Int32 age*/
        arg0.Bazage = arg2;
        /* IL_14: ret */
        return ;
    };;
    /* System.Int32 ByNameDescending.Compare(Baz,Baz)*/
    asm.x6000010 = function Compare(arg0,arg1,arg2)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.1 */
        /* IL_01: callvirt String get_Name()*/
        /* IL_06: ldarg.2 */
        /* IL_07: callvirt String get_Name()*/
        /* IL_0C: callvirt Int32 CompareTo(System.String)*/
        /* IL_11: stloc.0 */
        loc0 = (((asm1.x600000a(arg1).vtable)["asm0.x6000199"])())(asm1.x600000a(arg1),asm1.x600000a(arg2));
        /* IL_12: ldloc.0 */
        /* IL_13: neg */
        /* IL_14: ret */
        return (-(loc0));
    };;
    /*  ByNameDescending..ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Int32 ByName.Compare(Baz,Baz)*/
    asm.x6000012 = function Compare(arg0,arg1,arg2)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.1 */
        /* IL_01: callvirt String get_Name()*/
        /* IL_06: ldarg.2 */
        /* IL_07: callvirt String get_Name()*/
        /* IL_0C: callvirt Int32 CompareTo(System.String)*/
        /* IL_11: stloc.0 */
        loc0 = (((asm1.x600000a(arg1).vtable)["asm0.x6000199"])())(asm1.x600000a(arg1),asm1.x600000a(arg2));
        /* IL_12: ldloc.0 */
        /* IL_13: ret */
        return loc0;
    };;
    /*  ByName..ctor()*/
    asm.x6000013 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
        var loc0;
        t0 = asm1.Baz();
        __pos__ = 0x0;
        /* IL_00: ldc.i4.5 */
        /* IL_01: newarr Baz*/
        /* IL_06: stloc.0 */
        loc0 = BLR.new_array(t0,(5|0));
        /* IL_07: ldloc.0 */
        /* IL_08: ldc.i4.0 */
        /* IL_09: ldstr jb*/
        /* IL_0E: ldc.i4.s 25*/
        /* IL_10: newobj Void .ctor(System.String, System.Int32)*/
        /* IL_15: stelem.ref */
        BLR.stelem_ref(loc0,(0|0),BLR.newobj(t0,asm1.x600000c,[null, BLR.new_string("jb"), (25|0)]));
        /* IL_16: ldloc.0 */
        /* IL_17: ldc.i4.1 */
        /* IL_18: ldstr ana*/
        /* IL_1D: ldc.i4.s 20*/
        /* IL_1F: newobj Void .ctor(System.String, System.Int32)*/
        /* IL_24: stelem.ref */
        BLR.stelem_ref(loc0,(1|0),BLR.newobj(t0,asm1.x600000c,[null, BLR.new_string("ana"), (20|0)]));
        /* IL_25: ldloc.0 */
        /* IL_26: ldc.i4.2 */
        /* IL_27: ldstr reg*/
        /* IL_2C: ldc.i4.s 28*/
        /* IL_2E: newobj Void .ctor(System.String, System.Int32)*/
        /* IL_33: stelem.ref */
        BLR.stelem_ref(loc0,(2|0),BLR.newobj(t0,asm1.x600000c,[null, BLR.new_string("reg"), (28|0)]));
        /* IL_34: ldloc.0 */
        /* IL_35: ldc.i4.3 */
        /* IL_36: ldstr ro*/
        /* IL_3B: ldc.i4.s 25*/
        /* IL_3D: newobj Void .ctor(System.String, System.Int32)*/
        /* IL_42: stelem.ref */
        BLR.stelem_ref(loc0,(3|0),BLR.newobj(t0,asm1.x600000c,[null, BLR.new_string("ro"), (25|0)]));
        /* IL_43: ldloc.0 */
        /* IL_44: ldc.i4.4 */
        /* IL_45: ldstr jb*/
        /* IL_4A: ldc.i4.7 */
        /* IL_4B: newobj Void .ctor(System.String, System.Int32)*/
        /* IL_50: stelem.ref */
        BLR.stelem_ref(loc0,(4|0),BLR.newobj(t0,asm1.x600000c,[null, BLR.new_string("jb"), (7|0)]));
        /* IL_51: ldloc.0 */
        /* IL_52: ret */
        return loc0;
    };
    /* static System.Void Program.Main()*/
    asm.x6000015_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.ByName().init)();
        (asm1.Baz().init)();
        (asm1.ByNameDescending().init)();
        asm.x6000015 = asm.x6000015_;
    };;
    asm.x6000015 = function ()
    {
        asm.x6000015_init.apply(this,arguments);
        return asm.x6000015_.apply(this,arguments);
    };;
    asm.x6000015_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.ByName();
        t2 = asm1.Baz();
        t3 = asm1.ByNameDescending();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldstr Ascending*/
                /* IL_05: call Void Log(System.Object)*/
                asm1.x6000001(BLR.new_string("Ascending"));
                /* IL_0A: call Baz[] CreateBazCollection()*/
                /* IL_0F: stloc.0 */
                loc0 = asm1.x6000014();
                /* IL_10: ldloc.0 */
                /* IL_11: newobj Void .ctor()*/
                /* IL_16: call Void Sort[Baz](Baz[], System.Collections.Generic.IComparer`1[Baz])*/
                (asm0.x6000144(asm1.Baz()))(loc0,BLR.newobj(t1,asm1.x6000013,[null]));
                /* IL_1B: ldc.i4.0 */
                /* IL_1C: stloc.1 */
                loc1 = (0|0);
                /* IL_1D: br.s IL_2B*/
                __pos__ = 0x2B;
                continue;
                case 0x1F:
                /* IL_1F: ldloc.0 */
                /* IL_20: ldloc.1 */
                /* IL_21: ldelem.ref */
                /* IL_22: call Void Log(System.Object)*/
                asm1.x6000001(BLR.ldelem_ref(loc0,loc1));
                /* IL_27: ldloc.1 */
                /* IL_28: ldc.i4.1 */
                /* IL_29: add */
                /* IL_2A: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x2B:
                /* IL_2B: ldloc.1 */
                /* IL_2C: ldloc.0 */
                /* IL_2D: ldlen */
                /* IL_2E: conv.i4 */
                /* IL_2F: blt.s IL_1F*/
                
                if (loc1 < (loc0.jsarr.length | (0|0))){
                    __pos__ = 0x1F;
                    continue;
                }
                /* IL_31: ldstr Descending*/
                /* IL_36: call Void Log(System.Object)*/
                asm1.x6000001(BLR.new_string("Descending"));
                /* IL_3B: call Baz[] CreateBazCollection()*/
                /* IL_40: stloc.2 */
                loc2 = asm1.x6000014();
                /* IL_41: ldloc.2 */
                /* IL_42: newobj Void .ctor()*/
                /* IL_47: call Void Sort[Baz](Baz[], System.Collections.Generic.IComparer`1[Baz])*/
                (asm0.x6000144(asm1.Baz()))(loc2,BLR.newobj(t3,asm1.x6000011,[null]));
                /* IL_4C: ldc.i4.0 */
                /* IL_4D: stloc.3 */
                loc3 = (0|0);
                /* IL_4E: br.s IL_5C*/
                __pos__ = 0x5C;
                continue;
                case 0x50:
                /* IL_50: ldloc.2 */
                /* IL_51: ldloc.3 */
                /* IL_52: ldelem.ref */
                /* IL_53: call Void Log(System.Object)*/
                asm1.x6000001(BLR.ldelem_ref(loc2,loc3));
                /* IL_58: ldloc.3 */
                /* IL_59: ldc.i4.1 */
                /* IL_5A: add */
                /* IL_5B: stloc.3 */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x5C:
                /* IL_5C: ldloc.3 */
                /* IL_5D: ldloc.2 */
                /* IL_5E: ldlen */
                /* IL_5F: conv.i4 */
                /* IL_60: blt.s IL_50*/
                
                if (loc3 < (loc2.jsarr.length | (0|0))){
                    __pos__ = 0x50;
                    continue;
                }
                /* IL_62: ret */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000016 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
