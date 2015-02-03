var asm1; (function (asm)
{
    asm.FullName = "iface3.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Int32 ICommon.DoIt()*/
    asm.x600000d = function ICommon_DoIt(arg0)
    {
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
    };;
    /* Int32 DoIt()*/
    asm.x600000e = function DoIt(arg0)
    {
        /* IL_00: ldc.i4.2 */
        /* IL_01: ret */
        return (2|0);
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Int32 ICommon.DoIt()*/
    asm.x6000010 = function ICommon_DoIt(arg0)
    {
        /* IL_00: ldc.i4.3 */
        /* IL_01: ret */
        return (3|0);
    };;
    /* Int32 DoIt()*/
    asm.x6000011 = function DoIt(arg0)
    {
        /* IL_00: ldc.i4.4 */
        /* IL_01: ret */
        return (4|0);
    };;
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000f)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Int32 DoIt()*/
    asm.x6000013 = function DoIt(arg0)
    {
        /* IL_00: ldc.i4.5 */
        /* IL_01: ret */
        return (5|0);
    };;
    /* Void .ctor()*/
    asm.x6000014 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x6000012)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static Int32 Main()*/
    asm.x6000015_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        ((asm1.ReallyDerived)().init)();
        ((asm1.ICommon)().init)();
        asm.x6000015 = asm.x6000015_;
    };;
    asm.x6000015 = function ()
    {
        (asm.x6000015_init.apply)(this,arguments);
        return (asm.x6000015_.apply)(this,arguments);
    };;
    asm.x6000015_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        t0 = ((asm0)["System.ValueType"])();
        t1 = (asm1.ReallyDerived)();
        t2 = (asm1.ICommon)();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = (BLR.newobj)(t1,asm1.x6000014,[
                    null
                ]);
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
                
                if ((((loc0.vtable)["asm1.x6000011"])())(loc0) === (5|0)){
                    __pos_0__ = 0x17;
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
                
                if ((((loc0.ifacemap)[t2].x600000c)())(loc0) === (3|0)){
                    __pos_0__ = 0x22;
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
                
                if ((((loc1.vtable)["asm1.x6000011"])())(loc1) === (5|0)){
                    __pos_0__ = 0x2D;
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
                
                if ((((loc2.vtable)["asm1.x600000e"])())(loc2) === (2|0)){
                    __pos_0__ = 0x38;
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
                
                if ((((loc3.ifacemap)[t2].x600000c)())((BLR.convert_box_to_pointer_as_needed)(loc3)) === (3|0)){
                    __pos_0__ = 0x43;
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
    /* Void .ctor()*/
    asm.x6000016 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = (BLR.declare_type)("TestLog",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"TestLog",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000002");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.TestHelper = (BLR.declare_type)("TestHelper",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"TestHelper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000006");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.ICommon = (BLR.declare_type)("ICommon",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"ICommon",asm,false,false,true,false,false,[],[
            [
                asm1,
                "x600000c",
                "DoIt"
            ]
        ],null,(BLR.is_inst_interface)(this),Array,"asm1.t2000007");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm1.x600000c","asm1.x600000c");
    },function ()
    {
        return {};
    },[]);
    asm.Base = (BLR.declare_type)("Base",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Base",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x600000e",
                "DoIt"
            ]
        ],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000008");
        this.Interfaces = [
            (asm1.ICommon)()
        ];
        (BLR.declare_virtual)(this,"asm1.x600000d","asm1.x600000d");
        (BLR.declare_virtual)(this,"asm1.x600000e","asm1.x600000e");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        (BLR.tree_set)([
            (asm1.ICommon)()
        ],this.prototype.ifacemap,{
            'x600000c': function ()
            {
                return asm1.x600000d;
            }
        });
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.Derived = (BLR.declare_type)("Derived",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Derived",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x6000011",
                "DoIt"
            ]
        ],(asm1.Base)(),(BLR.is_inst_default)(this),Array,"asm1.t2000009");
        this.Interfaces = [
            (asm1.ICommon)()
        ];
        (BLR.declare_virtual)(this,"asm1.x6000010","asm1.x6000010");
        (BLR.declare_virtual)(this,"asm1.x6000011","asm1.x6000011");
        (BLR.declare_virtual)(this,"asm1.x600000e","asm1.x600000e");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        (BLR.tree_set)([
            (asm1.ICommon)()
        ],this.prototype.ifacemap,{
            'x600000c': function ()
            {
                return asm1.x6000010;
            }
        });
    },function ()
    {
        return new ((asm1.Base)())();
    },[]);
    asm.ReallyDerived = (BLR.declare_type)("ReallyDerived",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"ReallyDerived",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x6000013",
                "DoIt"
            ]
        ],(asm1.Derived)(),(BLR.is_inst_default)(this),Array,"asm1.t200000a");
        this.Interfaces = [
            (asm1.ICommon)()
        ];
        (BLR.declare_virtual)(this,"asm1.x6000011","asm1.x6000013");
        (BLR.declare_virtual)(this,"asm1.x600000e","asm1.x600000e");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        (BLR.tree_set)([
            (asm1.ICommon)()
        ],this.prototype.ifacemap,{
            'x600000c': function ()
            {
                return asm1.x6000010;
            }
        });
    },function ()
    {
        return new ((asm1.Derived)())();
    },[]);
    asm.Test = (BLR.declare_type)("Test",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Test",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t200000b");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x6000015;
})(asm1 || (asm1 = {}));
