var asm2; (function (asm)
{
    asm.FullName = "iface4.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Int32 Base.IVehicle.Start()*/
    asm.x6000005 = function IVehicle_Start(arg0)
    {
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
    };;
    /* System.Int32 Base.Stop()*/
    asm.x6000006 = function Stop(arg0)
    {
        /* IL_00: ldc.i4.2 */
        /* IL_01: ret */
        return (2|0);
    };;
    /* System.Int32 Base.Turn()*/
    asm.x6000007 = function Turn(arg0)
    {
        /* IL_00: ldc.i4.3 */
        /* IL_01: ret */
        return (3|0);
    };;
    /* System.Int32 Base.Walk()*/
    asm.x6000008 = function Walk(arg0)
    {
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
    };;
    /*  Base..ctor()*/
    asm.x6000009 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Int32 Derived1.Turn()*/
    asm.x600000a = function Turn(arg0)
    {
        /* IL_00: ldc.i4.4 */
        /* IL_01: ret */
        return (4|0);
    };;
    /*  Derived1..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000009(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* System.Int32 Derived2.Stop()*/
    asm.x600000c = function Stop(arg0)
    {
        /* IL_00: ldc.i4.6 */
        /* IL_01: ret */
        return (6|0);
    };;
    /* System.Int32 Derived2.IVehicle.Start()*/
    asm.x600000d = function IVehicle_Start(arg0)
    {
        /* IL_00: ldc.i4.5 */
        /* IL_01: ret */
        return (5|0);
    };;
    /* System.Int32 Derived2.IVehicle.Turn()*/
    asm.x600000e = function IVehicle_Turn(arg0)
    {
        /* IL_00: ldc.i4.7 */
        /* IL_01: ret */
        return (7|0);
    };;
    /* System.Int32 Derived2.Turn()*/
    asm.x600000f = function Turn(arg0)
    {
        /* IL_00: ldc.i4.8 */
        /* IL_01: ret */
        return (8|0);
    };;
    /*  Derived2..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000009(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  Derived3..ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x600000b(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static System.Int32 Test.Main()*/
    asm.x6000012_init = function ()
    {
        (asm2.Derived1().init)();
        (asm2.Derived2().init)();
        (asm2.Derived3().init)();
        (asm2.Base().init)();
        (asm2.IVehicle().init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function ()
    {
        asm.x6000012_init.apply(this,arguments);
        return asm.x6000012_.apply(this,arguments);
    };;
    asm.x6000012_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        CILJS.init_base_types();
        t0 = asm2.Derived1();
        t1 = asm2.Derived2();
        t2 = asm2.Derived3();
        t3 = asm2.Base();
        t4 = asm2.IVehicle();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = CILJS.newobj(t0,asm2.x600000b,[null]);
                /* IL_06: newobj Void .ctor()*/
                /* IL_0B: stloc.1 */
                loc1 = CILJS.newobj(t1,asm2.x6000010,[null]);
                /* IL_0C: newobj Void .ctor()*/
                /* IL_11: stloc.2 */
                loc2 = CILJS.newobj(t2,asm2.x6000011,[null]);
                /* IL_12: ldloc.1 */
                /* IL_13: stloc.3 */
                loc3 = loc1;
                /* IL_14: newobj Void .ctor()*/
                /* IL_19: stloc.s 4*/
                loc4 = CILJS.newobj(t3,asm2.x6000009,[null]);
                /* IL_1B: ldloc.0 */
                /* IL_1C: callvirt Int32 Turn()*/
                /* IL_21: ldc.i4.4 */
                /* IL_22: beq.s IL_26*/
                
                if (((loc0.vtable)["asm2.x6000007"]())(loc0) === (4|0)){
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
                
                if ((((loc0.ifacemap)[t4].x6000003)())(loc0) === (4|0)){
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
                
                if (((loc1.vtable)["asm2.x6000007"]())(loc1) === (8|0)){
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
                
                if ((((loc1.ifacemap)[t4].x6000003)())(loc1) === (7|0)){
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
                
                if (((loc3.vtable)["asm2.x6000007"]())(loc3) === (8|0)){
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
                
                if ((((loc3.ifacemap)[t4].x6000003)())(loc3) === (7|0)){
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
                
                if ((((loc4.ifacemap)[t4].x6000002)())(loc4) === (2|0)){
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
                
                if ((((loc0.ifacemap)[t4].x6000002)())(loc0) === (2|0)){
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
                
                if ((((loc1.ifacemap)[t4].x6000002)())(loc1) === (6|0)){
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
                
                if (((loc2.vtable)["asm2.x6000008"]())(loc2) === (1|0)){
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
    asm.x6000013 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.IVehicle = CILJS.declare_type(
        "IVehicle",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IVehicle",false,false,true,false,false,[],[
                    [asm2, "x6000001", "Start"],
                    [asm2, "x6000002", "Stop"],
                    [asm2, "x6000003", "Turn"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
            CILJS.declare_virtual(this,"asm2.x6000003","asm2.x6000003");
        });
    asm.IWalker = CILJS.declare_type(
        "IWalker",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IWalker",false,false,true,false,false,[],[
                    [asm2, "x6000004", "Walk"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm2.x6000004","asm2.x6000004");
        });
    asm.Base = CILJS.declare_type(
        "Base",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Base",false,false,false,false,false,[],[
                    [asm2, "x6000006", "Stop"],
                    [asm2, "x6000007", "Turn"],
                    [asm2, "x6000008", "Walk"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm2.x6000005","asm2.x6000005");
            CILJS.declare_virtual(this,"asm2.x6000006","asm2.x6000006");
            CILJS.declare_virtual(this,"asm2.x6000007","asm2.x6000007");
            CILJS.declare_virtual(this,"asm2.x6000008","asm2.x6000008");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.IVehicle()],
                {
                    'x6000001': function (){ return asm2.x6000005;},
                    'x6000002': function (){ return asm2.x6000006;},
                    'x6000003': function (){ return asm2.x6000007;}
                });
        });
    asm.Derived1 = CILJS.declare_type(
        "Derived1",
        [],
        function ()
        {
            return new (asm2.Base())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Derived1",false,false,false,false,false,[],[
                    [asm2, "x600000a", "Turn"]
                ],asm2.Base(),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm2.x6000007","asm2.x600000a");
            CILJS.declare_virtual(this,"asm2.x6000006","asm2.x6000006");
            CILJS.declare_virtual(this,"asm2.x6000008","asm2.x6000008");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.IVehicle()],
                {
                    'x6000001': function (){ return asm2.x6000005;},
                    'x6000002': function (){ return asm2.x6000006;},
                    'x6000003': function (){ return asm2.x600000a;}
                });
        });
    asm.Derived2 = CILJS.declare_type(
        "Derived2",
        [],
        function ()
        {
            return new (asm2.Base())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Derived2",false,false,false,false,false,[],[
                    [asm2, "x600000c", "Stop"],
                    [asm2, "x600000f", "Turn"]
                ],asm2.Base(),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm2.x600000c","asm2.x600000c");
            CILJS.declare_virtual(this,"asm2.x600000d","asm2.x600000d");
            CILJS.declare_virtual(this,"asm2.x600000e","asm2.x600000e");
            CILJS.declare_virtual(this,"asm2.x6000007","asm2.x600000f");
            CILJS.declare_virtual(this,"asm2.x6000006","asm2.x6000006");
            CILJS.declare_virtual(this,"asm2.x6000008","asm2.x6000008");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.IVehicle()],
                {
                    'x6000001': function (){ return asm2.x600000d;},
                    'x6000002': function (){ return asm2.x600000c;},
                    'x6000003': function (){ return asm2.x600000e;}
                });
        });
    asm.Derived3 = CILJS.declare_type(
        "Derived3",
        [],
        function ()
        {
            return new (asm2.Derived1())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Derived3",false,false,false,false,false,[],[],asm2.Derived1(),CILJS.is_inst_default(this),Array,"asm2.t2000007");
            this.GenericTypeMetadataName = "asm2.t2000007";
            CILJS.declare_virtual(this,"asm2.x6000007","asm2.x600000a");
            CILJS.declare_virtual(this,"asm2.x6000006","asm2.x6000006");
            CILJS.declare_virtual(this,"asm2.x6000008","asm2.x6000008");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.IWalker()],
                {
                    'x6000004': function (){ return asm2.x6000008;}
                });
            CILJS.implement_interface(
                this,
                [asm2.IVehicle()],
                {
                    'x6000001': function (){ return asm2.x6000005;},
                    'x6000002': function (){ return asm2.x6000006;},
                    'x6000003': function (){ return asm2.x600000a;}
                });
        });
    asm.Test = CILJS.declare_type(
        "Test",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Test",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000008");
            this.GenericTypeMetadataName = "asm2.t2000008";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000012;
})(asm2 || (asm2 = {}));
