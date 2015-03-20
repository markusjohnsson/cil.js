var asm1; (function (asm)
{
    asm.FullName = "iface4.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.Int32 Base.IVehicle.Start()*/
    asm.x600000e = function IVehicle_Start(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
    };;
    /* System.Int32 Base.Stop()*/
    asm.x600000f = function Stop(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.2 */
        /* IL_01: ret */
        return (2|0);
    };;
    /* System.Int32 Base.Turn()*/
    asm.x6000010 = function Turn(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.3 */
        /* IL_01: ret */
        return (3|0);
    };;
    /* System.Int32 Base.Walk()*/
    asm.x6000011 = function Walk(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
    };;
    /*  Base..ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Int32 Derived1.Turn()*/
    asm.x6000013 = function Turn(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.4 */
        /* IL_01: ret */
        return (4|0);
    };;
    /*  Derived1..ctor()*/
    asm.x6000014 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x6000012(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* System.Int32 Derived2.Stop()*/
    asm.x6000015 = function Stop(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.6 */
        /* IL_01: ret */
        return (6|0);
    };;
    /* System.Int32 Derived2.IVehicle.Start()*/
    asm.x6000016 = function IVehicle_Start(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.5 */
        /* IL_01: ret */
        return (5|0);
    };;
    /* System.Int32 Derived2.IVehicle.Turn()*/
    asm.x6000017 = function IVehicle_Turn(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.7 */
        /* IL_01: ret */
        return (7|0);
    };;
    /* System.Int32 Derived2.Turn()*/
    asm.x6000018 = function Turn(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.8 */
        /* IL_01: ret */
        return (8|0);
    };;
    /*  Derived2..ctor()*/
    asm.x6000019 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x6000012(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  Derived3..ctor()*/
    asm.x600001a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x6000014(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static System.Int32 Test.Main()*/
    asm.x600001b_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.Derived1().init)();
        (asm1.Derived2().init)();
        (asm1.Derived3().init)();
        (asm1.Base().init)();
        (asm1.IVehicle().init)();
        asm.x600001b = asm.x600001b_;
    };;
    asm.x600001b = function ()
    {
        asm.x600001b_init.apply(this,arguments);
        return asm.x600001b_.apply(this,arguments);
    };;
    asm.x600001b_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.Derived1();
        t2 = asm1.Derived2();
        t3 = asm1.Derived3();
        t4 = asm1.Base();
        t5 = asm1.IVehicle();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = BLR.newobj(t1,asm1.x6000014,[null]);
                /* IL_06: newobj Void .ctor()*/
                /* IL_0B: stloc.1 */
                loc1 = BLR.newobj(t2,asm1.x6000019,[null]);
                /* IL_0C: newobj Void .ctor()*/
                /* IL_11: stloc.2 */
                loc2 = BLR.newobj(t3,asm1.x600001a,[null]);
                /* IL_12: ldloc.1 */
                /* IL_13: stloc.3 */
                loc3 = loc1;
                /* IL_14: newobj Void .ctor()*/
                /* IL_19: stloc.s 4*/
                loc4 = BLR.newobj(t4,asm1.x6000012,[null]);
                /* IL_1B: ldloc.0 */
                /* IL_1C: callvirt Int32 Turn()*/
                /* IL_21: ldc.i4.4 */
                /* IL_22: beq.s IL_26*/
                
                if (((loc0.vtable)["asm1.x6000010"]())(loc0) === (4|0)){
                    __pos__ = 0x26;
                    continue;
                }
                /* IL_24: ldc.i4.1 */
                /* IL_25: ret */
                return (1|0);
                case 0x26:
                /* IL_26: ldloc.0 */
                /* IL_27: callvirt Int32 Turn()*/
                /* IL_2C: ldc.i4.4 */
                /* IL_2D: beq.s IL_31*/
                
                if ((((loc0.ifacemap)[t5].x600000c)())(loc0) === (4|0)){
                    __pos__ = 0x31;
                    continue;
                }
                /* IL_2F: ldc.i4.2 */
                /* IL_30: ret */
                return (2|0);
                case 0x31:
                /* IL_31: ldloc.1 */
                /* IL_32: callvirt Int32 Turn()*/
                /* IL_37: ldc.i4.8 */
                /* IL_38: beq.s IL_3D*/
                
                if (((loc1.vtable)["asm1.x6000010"]())(loc1) === (8|0)){
                    __pos__ = 0x3D;
                    continue;
                }
                /* IL_3A: ldc.i4.s 10*/
                /* IL_3C: ret */
                return (10|0);
                case 0x3D:
                /* IL_3D: ldloc.1 */
                /* IL_3E: callvirt Int32 Turn()*/
                /* IL_43: ldc.i4.7 */
                /* IL_44: beq.s IL_48*/
                
                if ((((loc1.ifacemap)[t5].x600000c)())(loc1) === (7|0)){
                    __pos__ = 0x48;
                    continue;
                }
                /* IL_46: ldc.i4.3 */
                /* IL_47: ret */
                return (3|0);
                case 0x48:
                /* IL_48: ldloc.3 */
                /* IL_49: callvirt Int32 Turn()*/
                /* IL_4E: ldc.i4.8 */
                /* IL_4F: beq.s IL_53*/
                
                if (((loc3.vtable)["asm1.x6000010"]())(loc3) === (8|0)){
                    __pos__ = 0x53;
                    continue;
                }
                /* IL_51: ldc.i4.4 */
                /* IL_52: ret */
                return (4|0);
                case 0x53:
                /* IL_53: ldloc.3 */
                /* IL_54: callvirt Int32 Turn()*/
                /* IL_59: ldc.i4.7 */
                /* IL_5A: beq.s IL_5E*/
                
                if ((((loc3.ifacemap)[t5].x600000c)())(loc3) === (7|0)){
                    __pos__ = 0x5E;
                    continue;
                }
                /* IL_5C: ldc.i4.5 */
                /* IL_5D: ret */
                return (5|0);
                case 0x5E:
                /* IL_5E: ldloc.s 4*/
                /* IL_60: callvirt Int32 Stop()*/
                /* IL_65: ldc.i4.2 */
                /* IL_66: beq.s IL_6A*/
                
                if ((((loc4.ifacemap)[t5].x600000b)())(loc4) === (2|0)){
                    __pos__ = 0x6A;
                    continue;
                }
                /* IL_68: ldc.i4.6 */
                /* IL_69: ret */
                return (6|0);
                case 0x6A:
                /* IL_6A: ldloc.0 */
                /* IL_6B: callvirt Int32 Stop()*/
                /* IL_70: ldc.i4.2 */
                /* IL_71: beq.s IL_75*/
                
                if ((((loc0.ifacemap)[t5].x600000b)())(loc0) === (2|0)){
                    __pos__ = 0x75;
                    continue;
                }
                /* IL_73: ldc.i4.7 */
                /* IL_74: ret */
                return (7|0);
                case 0x75:
                /* IL_75: ldloc.1 */
                /* IL_76: callvirt Int32 Stop()*/
                /* IL_7B: ldc.i4.6 */
                /* IL_7C: beq.s IL_80*/
                
                if ((((loc1.ifacemap)[t5].x600000b)())(loc1) === (6|0)){
                    __pos__ = 0x80;
                    continue;
                }
                /* IL_7E: ldc.i4.8 */
                /* IL_7F: ret */
                return (8|0);
                case 0x80:
                /* IL_80: ldloc.2 */
                /* IL_81: callvirt Int32 Walk()*/
                /* IL_86: ldc.i4.1 */
                /* IL_87: beq.s IL_8C*/
                
                if (((loc2.vtable)["asm1.x6000011"]())(loc2) === (1|0)){
                    __pos__ = 0x8C;
                    continue;
                }
                /* IL_89: ldc.i4.s 9*/
                /* IL_8B: ret */
                return (9|0);
                case 0x8C:
                /* IL_8C: ldc.i4.0 */
                /* IL_8D: ret */
                return (0|0);
            }
        }
    };
    /*  Test..ctor()*/
    asm.x600001c = function _ctor(arg0)
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
    asm.IVehicle = BLR.declare_type(
        "IVehicle",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"IVehicle",false,false,true,false,false,[],[
                    [asm1, "x600000a", "Start"],
                    [asm1, "x600000b", "Stop"],
                    [asm1, "x600000c", "Turn"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
            BLR.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
        });
    asm.IWalker = BLR.declare_type(
        "IWalker",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"IWalker",false,false,true,false,false,[],[
                    [asm1, "x600000d", "Walk"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
        });
    asm.Base = BLR.declare_type(
        "Base",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Base",false,false,false,false,false,[],[
                    [asm1, "x600000f", "Stop"],
                    [asm1, "x6000010", "Turn"],
                    [asm1, "x6000011", "Walk"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm1.x6000010","asm1.x6000010");
            BLR.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.IVehicle()],
                {
                    'x600000a': function (){ return asm1.x600000e;},
                    'x600000b': function (){ return asm1.x600000f;},
                    'x600000c': function (){ return asm1.x6000010;}
                });
        });
    asm.Derived1 = BLR.declare_type(
        "Derived1",
        [],
        function ()
        {
            return new (asm1.Base())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Derived1",false,false,false,false,false,[],[
                    [asm1, "x6000013", "Turn"]
                ],asm1.Base(),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm1.x6000010","asm1.x6000013");
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.IVehicle()],
                {
                    'x600000a': function (){ return asm1.x600000e;},
                    'x600000b': function (){ return asm1.x600000f;},
                    'x600000c': function (){ return asm1.x6000013;}
                });
        });
    asm.Derived2 = BLR.declare_type(
        "Derived2",
        [],
        function ()
        {
            return new (asm1.Base())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Derived2",false,false,false,false,false,[],[
                    [asm1, "x6000015", "Stop"],
                    [asm1, "x6000018", "Turn"]
                ],asm1.Base(),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm1.x6000015","asm1.x6000015");
            BLR.declare_virtual(this,"asm1.x6000016","asm1.x6000016");
            BLR.declare_virtual(this,"asm1.x6000017","asm1.x6000017");
            BLR.declare_virtual(this,"asm1.x6000010","asm1.x6000018");
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.IVehicle()],
                {
                    'x600000a': function (){ return asm1.x6000016;},
                    'x600000b': function (){ return asm1.x6000015;},
                    'x600000c': function (){ return asm1.x6000017;}
                });
        });
    asm.Derived3 = BLR.declare_type(
        "Derived3",
        [],
        function ()
        {
            return new (asm1.Derived1())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Derived3",false,false,false,false,false,[],[],asm1.Derived1(),BLR.is_inst_default(this),Array,"asm1.t200000b");
            this.GenericTypeMetadataName = "asm1.t200000b";
            BLR.declare_virtual(this,"asm1.x6000010","asm1.x6000013");
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.IWalker()],
                {
                    'x600000d': function (){ return asm1.x6000011;}
                });
            BLR.implement_interface(
                this,
                [asm1.IVehicle()],
                {
                    'x600000a': function (){ return asm1.x600000e;},
                    'x600000b': function (){ return asm1.x600000f;},
                    'x600000c': function (){ return asm1.x6000013;}
                });
        });
    asm.Test = BLR.declare_type(
        "Test",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Test",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000c");
            this.GenericTypeMetadataName = "asm1.t200000c";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600001b;
})(asm1 || (asm1 = {}));
