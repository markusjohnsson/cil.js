var asm1;(function (asm)
{
    asm.FullName = "iface7.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.Int32 Base.TestMono.IBase.Do()*/
    asm.x600000b = function TestMono_IBase_Do(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface7.cs:17:9*/
        /* IL_01: ldc.i4.1  */
        /* IL_02: ldarg.0  */
        /* IL_03: callvirt Int32 Do() */
        /* IL_08: add  */
        /* IL_09: stloc.0  */
        loc0 = ((1|0) + ((arg0.vtable)["asm1.x600000c"]())(arg0)) | (0|0);
        /* IL_0C: ldloc.0  */
        /* IL_0D: ret  */
        return loc0;
    };;
    /* System.Int32 Base.Do()*/
    asm.x600000c = function Do(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface7.cs:21:9*/
        /* IL_01: ldc.i4.1  */
        /* IL_02: stloc.0  */
        loc0 = (1|0);
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /*  Base..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  Derived..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000d(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Int32 Class1.Main(String[])*/
    asm.x600000f_init = function ()
    {
        ((asm1)["TestMono.Derived"]().init)();
        ((asm1)["TestMono.IBase"]().init)();
        ((asm1)["TestMono.Base"]().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0)
    {
        BLR.init_base_types();
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Main(arg0)
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc5;
        var loc4;
        var loc1;
        var loc2;
        var loc3;
        t0 = (asm1)["TestMono.Derived"]();
        t1 = (asm1)["TestMono.IBase"]();
        t2 = (asm1)["TestMono.Base"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  iface7.cs:33:9*/
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: stloc.0  */
                loc0 = BLR.newobj(t0,asm1.x600000e,[null]);
                /* IL_07: ldloc.0  */
                /* IL_08: callvirt Int32 Do() */
                /* IL_0D: ldc.i4.2  */
                /* IL_0F: ceq  */
                /* IL_10: stloc.s 5 */
                loc5 = (((((loc0.ifacemap)[t1].x600000a)())(BLR.convert_box_to_pointer_as_needed(loc0)) === (2|0)) ? (1) : (0));
                /* IL_12: ldloc.s 5 */
                /* IL_14: brtrue.s IL_1B */
                
                if (loc5){
                    __pos__ = 0x1B;
                    continue;
                }
                /* IL_16: ldc.i4.1  */
                /* IL_17: stloc.s 4 */
                loc4 = (1|0);
                /* IL_19: br.s IL_6C */
                __pos__ = 0x6C;
                continue;
                case 0x1B:
                /* IL_1B: ldloc.0  */
                /* IL_1C: stloc.1  */
                loc1 = loc0;
                /* IL_1D: ldloc.1  */
                /* IL_1E: callvirt Int32 Do() */
                /* IL_23: ldc.i4.2  */
                /* IL_25: ceq  */
                /* IL_26: stloc.s 5 */
                loc5 = (((((loc1.ifacemap)[t1].x600000a)())(BLR.convert_box_to_pointer_as_needed(loc1)) === (2|0)) ? (1) : (0));
                /* IL_28: ldloc.s 5 */
                /* IL_2A: brtrue.s IL_31 */
                
                if (loc5){
                    __pos__ = 0x31;
                    continue;
                }
                /* IL_2C: ldc.i4.2  */
                /* IL_2D: stloc.s 4 */
                loc4 = (2|0);
                /* IL_2F: br.s IL_6C */
                __pos__ = 0x6C;
                continue;
                case 0x31:
                /* IL_31: ldloc.0  */
                /* IL_32: castclass TestMono.Derived */
                /* IL_37: stloc.2  */
                loc2 = BLR.cast_class(loc0,t0);
                /* IL_38: ldloc.2  */
                /* IL_39: callvirt Int32 Do() */
                /* IL_3E: ldc.i4.1  */
                /* IL_40: ceq  */
                /* IL_41: stloc.s 5 */
                loc5 = ((((loc2.vtable)["asm1.x600000c"]())(loc2) === (1|0)) ? (1) : (0));
                /* IL_43: ldloc.s 5 */
                /* IL_45: brtrue.s IL_4C */
                
                if (loc5){
                    __pos__ = 0x4C;
                    continue;
                }
                /* IL_47: ldc.i4.3  */
                /* IL_48: stloc.s 4 */
                loc4 = (3|0);
                /* IL_4A: br.s IL_6C */
                __pos__ = 0x6C;
                continue;
                case 0x4C:
                /* IL_4C: ldloc.0  */
                /* IL_4D: castclass TestMono.Base */
                /* IL_52: stloc.3  */
                loc3 = BLR.cast_class(loc0,t2);
                /* IL_53: ldloc.3  */
                /* IL_54: callvirt Int32 Do() */
                /* IL_59: ldc.i4.1  */
                /* IL_5B: ceq  */
                /* IL_5C: stloc.s 5 */
                loc5 = ((((loc3.vtable)["asm1.x600000c"]())(loc3) === (1|0)) ? (1) : (0));
                /* IL_5E: ldloc.s 5 */
                /* IL_60: brtrue.s IL_67 */
                
                if (loc5){
                    __pos__ = 0x67;
                    continue;
                }
                /* IL_62: ldc.i4.4  */
                /* IL_63: stloc.s 4 */
                loc4 = (4|0);
                /* IL_65: br.s IL_6C */
                __pos__ = 0x6C;
                continue;
                case 0x67:
                /* IL_67: ldc.i4.0  */
                /* IL_68: stloc.s 4 */
                loc4 = (0|0);
                case 0x6C:
                /* IL_6C: ldloc.s 4 */
                /* IL_6E: ret  */
                return loc4;
            }
        }
    };
    /*  Class1..ctor()*/
    asm.x6000010 = function _ctor(arg0)
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
    (asm)["TestMono.IBase"] = BLR.declare_type(
        "IBase",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestMono.IBase",false,false,true,false,false,[],[
                    [asm1, "x600000a", "Do"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
        });
    (asm)["TestMono.IDerived"] = BLR.declare_type(
        "IDerived",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestMono.IDerived",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.implement_interface(
                this,
                [(asm1)["TestMono.IBase"]()],
                null);
        });
    (asm)["TestMono.Base"] = BLR.declare_type(
        "Base",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestMono.Base",false,false,false,false,false,[],[
                    [asm1, "x600000c", "Do"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm1)["TestMono.IBase"]()],
                {
                    'x600000a': function (){ return asm1.x600000b;}
                });
        });
    (asm)["TestMono.Derived"] = BLR.declare_type(
        "Derived",
        [],
        function ()
        {
            return new ((asm1)["TestMono.Base"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestMono.Derived",false,false,false,false,false,[],[],(asm1)["TestMono.Base"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm1)["TestMono.IDerived"]()],
                {});
            BLR.implement_interface(
                this,
                [(asm1)["TestMono.IBase"]()],
                {
                    'x600000a': function (){ return asm1.x600000b;}
                });
        });
    (asm)["TestMono.Class1"] = BLR.declare_type(
        "Class1",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestMono.Class1",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
