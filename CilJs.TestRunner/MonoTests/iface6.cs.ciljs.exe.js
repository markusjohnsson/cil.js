var asm1; (function (asm)
{
    asm.FullName = "iface6.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
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
    /* System.Int32 D.IA.Add(Int32)*/
    asm.x600000d = function IA_Add(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.5 */
        /* IL_01: ret */
        return (5|0);
    };;
    /* System.Int32 D.IB.Add(Int32)*/
    asm.x600000e = function IB_Add(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.6 */
        /* IL_01: ret */
        return (6|0);
    };;
    /*  D..ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void E.doom()*/
    asm.x6000011 = function doom(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ret */
        return ;
    };;
    /* System.Object E.Clone()*/
    asm.x6000012 = function Clone(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* System.Void E.Dispose()*/
    asm.x6000013 = function Dispose(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ret */
        return ;
    };;
    /* System.Int32 E.IA.Add(Int32)*/
    asm.x6000014 = function IA_Add(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.7 */
        /* IL_01: ret */
        return (7|0);
    };;
    /* System.Int32 E.IB.Add(Int32)*/
    asm.x6000015 = function IB_Add(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.8 */
        /* IL_01: ret */
        return (8|0);
    };;
    /*  E..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Int32 C.Test(IC)*/
    asm.x6000016_init = function ()
    {
        (asm1.IA().init)();
        (asm1.IB().init)();
        asm.x6000016 = asm.x6000016_;
    };;
    asm.x6000016 = function (arg0)
    {
        asm.x6000016_init.apply(this,arguments);
        return asm.x6000016_.apply(this,arguments);
    };;
    asm.x6000016_ = function Test(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        t0 = asm1.IA();
        t1 = asm1.IB();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldc.i4.0 */
                /* IL_02: callvirt Int32 Add(System.Int32)*/
                /* IL_07: ldc.i4.5 */
                /* IL_08: beq.s IL_0C*/
                
                if ((((arg0.ifacemap)[t0].x600000a)())(CILJS.convert_box_to_pointer_as_needed(arg0),(0|0)) === (5|0)){
                    __pos__ = 0xC;
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
                
                if ((((arg0.ifacemap)[t1].x600000b)())(CILJS.convert_box_to_pointer_as_needed(arg0),(0|0)) === (6|0)){
                    __pos__ = 0x18;
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
    /* static System.Void C.Test2(IE)*/
    asm.x6000017_init = function ()
    {
        (asm1.IE().init)();
        ((asm0)["System.ICloneable"]().init)();
        ((asm0)["System.IDisposable"]().init)();
        asm.x6000017 = asm.x6000017_;
    };;
    asm.x6000017 = function (arg0)
    {
        asm.x6000017_init.apply(this,arguments);
        return asm.x6000017_.apply(this,arguments);
    };;
    asm.x6000017_ = function Test2(arg0)
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        t0 = asm1.IE();
        t1 = (asm0)["System.ICloneable"]();
        t2 = (asm0)["System.IDisposable"]();
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt Void doom()*/
        (((arg0.ifacemap)[t0].x600000c)())(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_06: ldarg.0 */
        /* IL_07: callvirt Object Clone()*/
        /* IL_0C: pop */
        (((arg0.ifacemap)[t1].x60000c6)())(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_0D: ldarg.0 */
        /* IL_0E: callvirt Void Dispose()*/
        (((arg0.ifacemap)[t2].x60000c7)())(CILJS.convert_box_to_pointer_as_needed(arg0));
        /* IL_13: ret */
        return ;
    };
    /* static System.Int32 C.Main()*/
    asm.x6000018_init = function ()
    {
        (asm1.D().init)();
        (asm1.E().init)();
        asm.x6000018 = asm.x6000018_;
    };;
    asm.x6000018 = function ()
    {
        CILJS.init_base_types();
        asm.x6000018_init.apply(this,arguments);
        return asm.x6000018_.apply(this,arguments);
    };;
    asm.x6000018_ = function Main()
    {
        var t0;
        var t1;
        var __pos__;
        var loc0;
        var loc1;
        t0 = asm1.D();
        t1 = asm1.E();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t0,asm1.x600000f,[null]);
        /* IL_06: newobj Void .ctor()*/
        /* IL_0B: stloc.1 */
        loc1 = CILJS.newobj(t1,asm1.x6000010,[null]);
        /* IL_0C: ldloc.1 */
        /* IL_0D: call Int32 Test(IC)*/
        /* IL_12: pop */
        asm1.x6000016(loc1);
        /* IL_13: ldloc.1 */
        /* IL_14: call Void Test2(IE)*/
        asm1.x6000017(loc1);
        /* IL_19: ldloc.0 */
        /* IL_1A: call Int32 Test(IC)*/
        /* IL_1F: ret */
        return asm1.x6000016(loc0);
    };
    /*  C..ctor()*/
    asm.x6000019 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = CILJS.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.IA = CILJS.declare_type(
        "IA",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IA",false,false,true,false,false,[],[
                    [asm1, "x600000a", "Add"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
        });
    asm.IB = CILJS.declare_type(
        "IB",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IB",false,false,true,false,false,[],[
                    [asm1, "x600000b", "Add"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
        });
    asm.IC = CILJS.declare_type(
        "IC",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IC",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.implement_interface(
                this,
                [asm1.IA()],
                null);
            CILJS.implement_interface(
                this,
                [asm1.IB()],
                null);
        });
    asm.IE = CILJS.declare_type(
        "IE",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IE",false,false,true,false,false,[],[
                    [asm1, "x600000c", "doom"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            CILJS.implement_interface(
                this,
                [(asm0)["System.ICloneable"]()],
                null);
            CILJS.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                null);
        });
    asm.D = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            CILJS.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            CILJS.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [asm1.IC()],
                {});
            CILJS.implement_interface(
                this,
                [asm1.IA()],
                {
                    'x600000a': function (){ return asm1.x600000d;}
                });
            CILJS.implement_interface(
                this,
                [asm1.IB()],
                {
                    'x600000b': function (){ return asm1.x600000e;}
                });
        });
    asm.E = CILJS.declare_type(
        "E",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"E",false,false,false,false,false,[],[
                    [asm1, "x6000011", "doom"],
                    [asm1, "x6000012", "Clone"],
                    [asm1, "x6000013", "Dispose"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000b");
            this.GenericTypeMetadataName = "asm1.t200000b";
            CILJS.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            CILJS.declare_virtual(this,"asm1.x6000012","asm1.x6000012");
            CILJS.declare_virtual(this,"asm1.x6000013","asm1.x6000013");
            CILJS.declare_virtual(this,"asm1.x6000014","asm1.x6000014");
            CILJS.declare_virtual(this,"asm1.x6000015","asm1.x6000015");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [asm1.IE()],
                {
                    'x600000c': function (){ return asm1.x6000011;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.ICloneable"]()],
                {
                    'x60000c6': function (){ return asm1.x6000012;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x60000c7': function (){ return asm1.x6000013;}
                });
            CILJS.implement_interface(
                this,
                [asm1.IC()],
                {});
            CILJS.implement_interface(
                this,
                [asm1.IA()],
                {
                    'x600000a': function (){ return asm1.x6000014;}
                });
            CILJS.implement_interface(
                this,
                [asm1.IB()],
                {
                    'x600000b': function (){ return asm1.x6000015;}
                });
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000c");
            this.GenericTypeMetadataName = "asm1.t200000c";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000018;
})(asm1 || (asm1 = {}));
