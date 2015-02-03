var asm1; (function (asm)
{
    asm.FullName = "iface6.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Int32 IA.Add(System.Int32)*/
    asm.x600000f = function IA_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.5 */
        /* IL_01: ret */
        return (5|0);
    };;
    /* Int32 IB.Add(System.Int32)*/
    asm.x6000010 = function IB_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.6 */
        /* IL_01: ret */
        return (6|0);
    };;
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void doom()*/
    asm.x6000013 = function doom(arg0)
    {
        /* IL_00: ret */
        return ;
    };;
    /* Object Clone()*/
    asm.x6000014 = function Clone(arg0)
    {
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* Void Dispose()*/
    asm.x6000015 = function Dispose(arg0)
    {
        /* IL_00: ret */
        return ;
    };;
    /* Int32 IA.Add(System.Int32)*/
    asm.x6000016 = function IA_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.7 */
        /* IL_01: ret */
        return (7|0);
    };;
    /* Int32 IB.Add(System.Int32)*/
    asm.x6000017 = function IB_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.8 */
        /* IL_01: ret */
        return (8|0);
    };;
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Int32 Test(IC)*/
    asm.x6000018_init = function ()
    {
        ((asm1.IA)().init)();
        ((asm1.IB)().init)();
        asm.x6000018 = asm.x6000018_;
    };;
    asm.x6000018 = function (arg0)
    {
        (asm.x6000018_init.apply)(this,arguments);
        return (asm.x6000018_.apply)(this,arguments);
    };;
    asm.x6000018_ = function Test(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        t0 = (asm1.IA)();
        t1 = (asm1.IB)();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldc.i4.0 */
                /* IL_02: callvirt Int32 Add(System.Int32)*/
                /* IL_07: ldc.i4.5 */
                /* IL_08: beq.s IL_0C*/
                
                if ((((arg0.ifacemap)[t0].x600000c)())((BLR.convert_box_to_pointer_as_needed)(arg0),(0|0)) === (5|0)){
                    __pos_0__ = 0xC;
                    continue;
                }
                /* IL_0A: ldc.i4.1 */
                /* IL_0B: ret */
                return (1|0);
                case 0xC:
                /* IL_0C: ldarg.0 */
                /* IL_0D: ldc.i4.0 */
                /* IL_0E: callvirt Int32 Add(System.Int32)*/
                /* IL_13: ldc.i4.6 */
                /* IL_14: beq.s IL_18*/
                
                if ((((arg0.ifacemap)[t1].x600000d)())((BLR.convert_box_to_pointer_as_needed)(arg0),(0|0)) === (6|0)){
                    __pos_0__ = 0x18;
                    continue;
                }
                /* IL_16: ldc.i4.1 */
                /* IL_17: ret */
                return (1|0);
                case 0x18:
                /* IL_18: ldc.i4.0 */
                /* IL_19: ret */
                return (0|0);
            }
        }
    };
    /* static Void Test2(IE)*/
    asm.x6000019_init = function ()
    {
        ((asm1.IE)().init)();
        (((asm0)["System.ICloneable"])().init)();
        (((asm0)["System.IDisposable"])().init)();
        asm.x6000019 = asm.x6000019_;
    };;
    asm.x6000019 = function (arg0)
    {
        (asm.x6000019_init.apply)(this,arguments);
        return (asm.x6000019_.apply)(this,arguments);
    };;
    asm.x6000019_ = function Test2(arg0)
    {
        var t0;
        var t1;
        var t2;
        t0 = (asm1.IE)();
        t1 = ((asm0)["System.ICloneable"])();
        t2 = ((asm0)["System.IDisposable"])();
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt Void doom()*/
        (((arg0.ifacemap)[t0].x600000e)())((BLR.convert_box_to_pointer_as_needed)(arg0));
        /* IL_06: ldarg.0 */
        /* IL_07: callvirt Object Clone()*/
        /* IL_0C: pop */
        (((arg0.ifacemap)[t1].x600008e)())((BLR.convert_box_to_pointer_as_needed)(arg0));
        /* IL_0D: ldarg.0 */
        /* IL_0E: callvirt Void Dispose()*/
        (((arg0.ifacemap)[t2].x600008f)())((BLR.convert_box_to_pointer_as_needed)(arg0));
        /* IL_13: ret */
        return ;
    };
    /* static Int32 Main()*/
    asm.x600001a_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        ((asm1.D)().init)();
        ((asm1.E)().init)();
        asm.x600001a = asm.x600001a_;
    };;
    asm.x600001a = function ()
    {
        (asm.x600001a_init.apply)(this,arguments);
        return (asm.x600001a_.apply)(this,arguments);
    };;
    asm.x600001a_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc0;
        var loc1;
        t0 = ((asm0)["System.ValueType"])();
        t1 = (asm1.D)();
        t2 = (asm1.E)();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = (BLR.newobj)(t1,asm1.x6000011,[
            null
        ]);
        /* IL_06: newobj Void .ctor()*/
        /* IL_0B: stloc.1 */
        loc1 = (BLR.newobj)(t2,asm1.x6000012,[
            null
        ]);
        /* IL_0C: ldloc.1 */
        /* IL_0D: call Int32 Test(IC)*/
        /* IL_12: pop */
        (asm1.x6000018)(loc1);
        /* IL_13: ldloc.1 */
        /* IL_14: call Void Test2(IE)*/
        (asm1.x6000019)(loc1);
        /* IL_19: ldloc.0 */
        /* IL_1A: call Int32 Test(IC)*/
        /* IL_1F: ret */
        return (asm1.x6000018)(loc0);
    };
    /* Void .ctor()*/
    asm.x600001b = function _ctor(arg0)
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
    asm.IA = (BLR.declare_type)("IA",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"IA",asm,false,false,true,false,false,[],[
            [
                asm1,
                "x600000c",
                "Add"
            ]
        ],null,(BLR.is_inst_interface)(this),Array,"asm1.t2000007");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm1.x600000c","asm1.x600000c");
    },function ()
    {
        return {};
    },[]);
    asm.IB = (BLR.declare_type)("IB",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"IB",asm,false,false,true,false,false,[],[
            [
                asm1,
                "x600000d",
                "Add"
            ]
        ],null,(BLR.is_inst_interface)(this),Array,"asm1.t2000008");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm1.x600000d","asm1.x600000d");
    },function ()
    {
        return {};
    },[]);
    asm.IC = (BLR.declare_type)("IC",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"IC",asm,false,false,true,false,false,[],[],null,(BLR.is_inst_interface)(this),Array,"asm1.t2000009");
        this.Interfaces = [
            (asm1.IA)(),
            (asm1.IB)()
        ];
    },function ()
    {
        return {};
    },[]);
    asm.IE = (BLR.declare_type)("IE",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"IE",asm,false,false,true,false,false,[],[
            [
                asm1,
                "x600000e",
                "doom"
            ]
        ],null,(BLR.is_inst_interface)(this),Array,"asm1.t200000a");
        this.Interfaces = [
            ((asm0)["System.ICloneable"])(),
            ((asm0)["System.IDisposable"])()
        ];
        (BLR.declare_virtual)(this,"asm1.x600000e","asm1.x600000e");
    },function ()
    {
        return {};
    },[]);
    asm.D = (BLR.declare_type)("D",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"D",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t200000b");
        this.Interfaces = [
            (asm1.IC)(),
            (asm1.IA)(),
            (asm1.IB)()
        ];
        (BLR.declare_virtual)(this,"asm1.x600000f","asm1.x600000f");
        (BLR.declare_virtual)(this,"asm1.x6000010","asm1.x6000010");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        (BLR.tree_set)([
            (asm1.IC)()
        ],this.prototype.ifacemap,{});
        (BLR.tree_set)([
            (asm1.IA)()
        ],this.prototype.ifacemap,{
            'x600000c': function ()
            {
                return asm1.x600000f;
            }
        });
        (BLR.tree_set)([
            (asm1.IB)()
        ],this.prototype.ifacemap,{
            'x600000d': function ()
            {
                return asm1.x6000010;
            }
        });
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.E = (BLR.declare_type)("E",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"E",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x6000013",
                "doom"
            ],
            [
                asm1,
                "x6000014",
                "Clone"
            ],
            [
                asm1,
                "x6000015",
                "Dispose"
            ]
        ],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t200000c");
        this.Interfaces = [
            (asm1.IE)(),
            ((asm0)["System.ICloneable"])(),
            ((asm0)["System.IDisposable"])(),
            (asm1.IC)(),
            (asm1.IA)(),
            (asm1.IB)()
        ];
        (BLR.declare_virtual)(this,"asm1.x6000013","asm1.x6000013");
        (BLR.declare_virtual)(this,"asm1.x6000014","asm1.x6000014");
        (BLR.declare_virtual)(this,"asm1.x6000015","asm1.x6000015");
        (BLR.declare_virtual)(this,"asm1.x6000016","asm1.x6000016");
        (BLR.declare_virtual)(this,"asm1.x6000017","asm1.x6000017");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        (BLR.tree_set)([
            (asm1.IE)()
        ],this.prototype.ifacemap,{
            'x600000e': function ()
            {
                return asm1.x6000013;
            }
        });
        (BLR.tree_set)([
            ((asm0)["System.ICloneable"])()
        ],this.prototype.ifacemap,{
            'x600008e': function ()
            {
                return asm1.x6000014;
            }
        });
        (BLR.tree_set)([
            ((asm0)["System.IDisposable"])()
        ],this.prototype.ifacemap,{
            'x600008f': function ()
            {
                return asm1.x6000015;
            }
        });
        (BLR.tree_set)([
            (asm1.IC)()
        ],this.prototype.ifacemap,{});
        (BLR.tree_set)([
            (asm1.IA)()
        ],this.prototype.ifacemap,{
            'x600000c': function ()
            {
                return asm1.x6000016;
            }
        });
        (BLR.tree_set)([
            (asm1.IB)()
        ],this.prototype.ifacemap,{
            'x600000d': function ()
            {
                return asm1.x6000017;
            }
        });
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.C = (BLR.declare_type)("C",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"C",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t200000d");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x600001a;
})(asm1 || (asm1 = {}));
