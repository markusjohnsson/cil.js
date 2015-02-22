var asm1; (function (asm)
{
    asm.FullName = "iface7.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Void Log(System.Object)*/
    asm.x6000001 = braille_test_log;;
    /* Void .ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Int32 TestMono.IBase.Do()*/
    asm.x600000d = function TestMono_IBase_Do(arg0)
    {
        /* IL_00: ldc.i4.1 */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt Int32 Do()*/
        /* IL_07: add */
        /* IL_08: ret */
        return ((1|0) + ((arg0.vtable)["asm1.x600000e"]())(arg0)) | (0|0);
    };;
    /* Int32 Do()*/
    asm.x600000e = function Do(arg0)
    {
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x600000f(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static Int32 Main(System.String[])*/
    asm.x6000011_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        ((asm1)["TestMono.Derived"]().init)();
        ((asm1)["TestMono.IBase"]().init)();
        ((asm1)["TestMono.Base"]().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function (arg0)
    {
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function Main(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        t0 = (asm0)["System.ValueType"]();
        t1 = (asm1)["TestMono.Derived"]();
        t2 = (asm1)["TestMono.IBase"]();
        t3 = (asm1)["TestMono.Base"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = BLR.newobj(t1,asm1.x6000010,[null]);
                /* IL_06: ldloc.0 */
                /* IL_07: callvirt Int32 Do()*/
                /* IL_0C: ldc.i4.2 */
                /* IL_0D: beq.s IL_11*/
                
                if ((((loc0.ifacemap)[t2].x600000c)())(BLR.convert_box_to_pointer_as_needed(loc0)) === (2|0)){
                    __pos_0__ = 0x11;
                    continue;
                }
                /* IL_0F: ldc.i4.1 */
                /* IL_10: ret */
                return (1|0);
                case 0x11:
                /* IL_11: ldloc.0 */
                /* IL_12: stloc.1 */
                loc1 = loc0;
                /* IL_13: ldloc.1 */
                /* IL_14: callvirt Int32 Do()*/
                /* IL_19: ldc.i4.2 */
                /* IL_1A: beq.s IL_1E*/
                
                if ((((loc1.ifacemap)[t2].x600000c)())(BLR.convert_box_to_pointer_as_needed(loc1)) === (2|0)){
                    __pos_0__ = 0x1E;
                    continue;
                }
                /* IL_1C: ldc.i4.2 */
                /* IL_1D: ret */
                return (2|0);
                case 0x1E:
                /* IL_1E: ldloc.0 */
                /* IL_1F: castclass TestMono.Derived*/
                /* IL_24: stloc.2 */
                loc2 = BLR.cast_class(loc0,t1);
                /* IL_25: ldloc.2 */
                /* IL_26: callvirt Int32 Do()*/
                /* IL_2B: ldc.i4.1 */
                /* IL_2C: beq.s IL_30*/
                
                if (((loc2.vtable)["asm1.x600000e"]())(loc2) === (1|0)){
                    __pos_0__ = 0x30;
                    continue;
                }
                /* IL_2E: ldc.i4.3 */
                /* IL_2F: ret */
                return (3|0);
                case 0x30:
                /* IL_30: ldloc.0 */
                /* IL_31: castclass TestMono.Base*/
                /* IL_36: stloc.3 */
                loc3 = BLR.cast_class(loc0,t3);
                /* IL_37: ldloc.3 */
                /* IL_38: callvirt Int32 Do()*/
                /* IL_3D: ldc.i4.1 */
                /* IL_3E: beq.s IL_42*/
                
                if (((loc3.vtable)["asm1.x600000e"]())(loc3) === (1|0)){
                    __pos_0__ = 0x42;
                    continue;
                }
                /* IL_40: ldc.i4.4 */
                /* IL_41: ret */
                return (4|0);
                case 0x42:
                /* IL_42: ldc.i4.0 */
                /* IL_43: ret */
                return (0|0);
            }
        }
    };
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
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
    asm.TestHelper = BLR.declare_type(
        "TestHelper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestHelper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
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
                    [asm1, "x600000c", "Do"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
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
            BLR.init_type(this,asm,"TestMono.IDerived",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
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
                    [asm1, "x600000e", "Do"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            BLR.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm1)["TestMono.IBase"]()],
                {
                    'x600000c': function (){ return asm1.x600000d;}
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
            BLR.init_type(this,asm,"TestMono.Derived",false,false,false,false,false,[],[],(asm1)["TestMono.Base"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
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
                    'x600000c': function (){ return asm1.x600000d;}
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
            BLR.init_type(this,asm,"TestMono.Class1",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000b");
            this.GenericTypeMetadataName = "asm1.t200000b";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
