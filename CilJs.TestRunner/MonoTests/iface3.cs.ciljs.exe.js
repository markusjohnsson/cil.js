var asm2; (function (asm)
{
    asm.FullName = "iface3.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Int32 Base.ICommon.DoIt()*/
    asm.x6000002 = function ICommon_DoIt(arg0)
    {
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
    };;
    /* System.Int32 Base.DoIt()*/
    asm.x6000003 = function DoIt(arg0)
    {
        /* IL_00: ldc.i4.2 */
        /* IL_01: ret */
        return (2|0);
    };;
    /*  Base..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Int32 Derived.ICommon.DoIt()*/
    asm.x6000005 = function ICommon_DoIt(arg0)
    {
        /* IL_00: ldc.i4.3 */
        /* IL_01: ret */
        return (3|0);
    };;
    /* System.Int32 Derived.DoIt()*/
    asm.x6000006 = function DoIt(arg0)
    {
        /* IL_00: ldc.i4.4 */
        /* IL_01: ret */
        return (4|0);
    };;
    /*  Derived..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000004(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* System.Int32 ReallyDerived.DoIt()*/
    asm.x6000008 = function DoIt(arg0)
    {
        /* IL_00: ldc.i4.5 */
        /* IL_01: ret */
        return (5|0);
    };;
    /*  ReallyDerived..ctor()*/
    asm.x6000009 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000007(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static System.Int32 Test.Main()*/
    asm.x600000a_init = function ()
    {
        (asm2.ReallyDerived().init)();
        (asm2.ICommon().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        CILJS.init_base_types();
        t0 = asm2.ReallyDerived();
        t1 = asm2.ICommon();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = CILJS.newobj(t0,asm2.x6000009,[null]);
                /* IL_06: ldloc.0 */
                /* IL_07: stloc.1 */
                loc1 = loc0;
                /* IL_08: ldloc.0 */
                /* IL_09: stloc.2 */
                loc2 = loc0;
                /* IL_0A: ldloc.0 */
                /* IL_0B: stloc.3 */
                loc3 = loc0;
                /* IL_0C: ldloc.0 */
                /* IL_0D: callvirt Int32 DoIt()*/
                /* IL_12: ldc.i4.5 */
                /* IL_13: beq.s IL_17*/
                
                if (((loc0.vtable)["asm2.x6000006"]())(loc0) === (5|0)){
                    __pos__ = 0x17;
                    continue;
                }
                /* IL_15: ldc.i4.1 */
                /* IL_16: ret */
                return (1|0);
                case 0x17:
                /* IL_17: ldloc.0 */
                /* IL_18: callvirt Int32 DoIt()*/
                /* IL_1D: ldc.i4.3 */
                /* IL_1E: beq.s IL_22*/
                
                if ((((loc0.ifacemap)[t1].x6000001)())(loc0) === (3|0)){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_20: ldc.i4.2 */
                /* IL_21: ret */
                return (2|0);
                case 0x22:
                /* IL_22: ldloc.1 */
                /* IL_23: callvirt Int32 DoIt()*/
                /* IL_28: ldc.i4.5 */
                /* IL_29: beq.s IL_2D*/
                
                if (((loc1.vtable)["asm2.x6000006"]())(loc1) === (5|0)){
                    __pos__ = 0x2D;
                    continue;
                }
                /* IL_2B: ldc.i4.3 */
                /* IL_2C: ret */
                return (3|0);
                case 0x2D:
                /* IL_2D: ldloc.2 */
                /* IL_2E: callvirt Int32 DoIt()*/
                /* IL_33: ldc.i4.2 */
                /* IL_34: beq.s IL_38*/
                
                if (((loc2.vtable)["asm2.x6000003"]())(loc2) === (2|0)){
                    __pos__ = 0x38;
                    continue;
                }
                /* IL_36: ldc.i4.4 */
                /* IL_37: ret */
                return (4|0);
                case 0x38:
                /* IL_38: ldloc.3 */
                /* IL_39: callvirt Int32 DoIt()*/
                /* IL_3E: ldc.i4.3 */
                /* IL_3F: beq.s IL_43*/
                
                if ((((loc3.ifacemap)[t1].x6000001)())(CILJS.convert_box_to_pointer_as_needed(loc3)) === (3|0)){
                    __pos__ = 0x43;
                    continue;
                }
                /* IL_41: ldc.i4.5 */
                /* IL_42: ret */
                return (5|0);
                case 0x43:
                /* IL_43: ldc.i4.0 */
                /* IL_44: ret */
                return (0|0);
            }
        }
    };
    /*  Test..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.ICommon = CILJS.declare_type(
        "ICommon",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"ICommon",false,false,true,false,false,[],[
                    [asm2, "x6000001", "DoIt"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
        });
    asm.Base = CILJS.declare_type(
        "Base",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Base",false,false,false,false,false,[],[
                    [asm2, "x6000003", "DoIt"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
            CILJS.declare_virtual(this,"asm2.x6000003","asm2.x6000003");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.ICommon()],
                {
                    'x6000001': function (){ return asm2.x6000002;}
                });
        });
    asm.Derived = CILJS.declare_type(
        "Derived",
        [],
        function ()
        {
            return asm2.Base();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Derived",false,false,false,false,false,[],[
                    [asm2, "x6000006", "DoIt"]
                ],asm2.Base(),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm2.x6000005","asm2.x6000005");
            CILJS.declare_virtual(this,"asm2.x6000006","asm2.x6000006");
            CILJS.declare_virtual(this,"asm2.x6000003","asm2.x6000003");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.ICommon()],
                {
                    'x6000001': function (){ return asm2.x6000005;}
                });
        });
    asm.ReallyDerived = CILJS.declare_type(
        "ReallyDerived",
        [],
        function ()
        {
            return asm2.Derived();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"ReallyDerived",false,false,false,false,false,[],[
                    [asm2, "x6000008", "DoIt"]
                ],asm2.Derived(),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm2.x6000006","asm2.x6000008");
            CILJS.declare_virtual(this,"asm2.x6000003","asm2.x6000003");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.ICommon()],
                {
                    'x6000001': function (){ return asm2.x6000005;}
                });
        });
    asm.Test = CILJS.declare_type(
        "Test",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Test",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x600000a;
})(asm2 || (asm2 = {}));
