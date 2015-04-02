var asm1;(function (asm)
{
    asm.FullName = "iface6.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.Int32 D.IA.Add(Int32)*/
    asm.x600000d = function IA_Add(arg0, arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface6.cs:23:5*/
        /* IL_01: ldc.i4.5  */
        /* IL_02: stloc.0  */
        loc0 = (5|0);
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /* System.Int32 D.IB.Add(Int32)*/
    asm.x600000e = function IB_Add(arg0, arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface6.cs:28:5*/
        /* IL_01: ldc.i4.6  */
        /* IL_02: stloc.0  */
        loc0 = (6|0);
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /*  D..ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void E.doom()*/
    asm.x6000011 = function doom(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  iface6.cs:39:5*/
        /* IL_03: ret  iface6.cs:41:5*/
        return ;
    };;
    /* System.Object E.Clone()*/
    asm.x6000012 = function Clone(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface6.cs:43:5*/
        /* IL_01: ldnull  */
        /* IL_02: stloc.0  */
        loc0 = null;
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /* System.Void E.Dispose()*/
    asm.x6000013 = function Dispose(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  iface6.cs:46:27*/
        /* IL_01: ret  iface6.cs:46:29*/
        return ;
    };;
    /* System.Int32 E.IA.Add(Int32)*/
    asm.x6000014 = function IA_Add(arg0, arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface6.cs:48:5*/
        /* IL_01: ldc.i4.7  */
        /* IL_02: stloc.0  */
        loc0 = (7|0);
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /* System.Int32 E.IB.Add(Int32)*/
    asm.x6000015 = function IB_Add(arg0, arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface6.cs:53:5*/
        /* IL_01: ldc.i4.8  */
        /* IL_02: stloc.0  */
        loc0 = (8|0);
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /*  E..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: nop  iface6.cs:36:5*/
        /* IL_08: nop  iface6.cs:37:5*/
        /* IL_09: ret  */
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
        var loc1;
        var loc0;
        t0 = asm1.IA();
        t1 = asm1.IB();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  iface6.cs:61:5*/
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldc.i4.0  */
                /* IL_03: callvirt Int32 Add(System.Int32) */
                /* IL_08: ldc.i4.5  */
                /* IL_0A: ceq  */
                /* IL_0B: stloc.1  */
                loc1 = (((((arg0.ifacemap)[t0].x600000a)())(BLR.convert_box_to_pointer_as_needed(arg0),(0|0)) === (5|0)) ? (1) : (0));
                /* IL_0C: ldloc.1  */
                /* IL_0D: brtrue.s IL_13 */
                
                if (loc1){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.1  */
                /* IL_10: stloc.0  */
                loc0 = (1|0);
                /* IL_11: br.s IL_29 */
                __pos__ = 0x29;
                continue;
                case 0x13:
                /* IL_13: ldarg.0  */
                /* IL_14: ldc.i4.0  */
                /* IL_15: callvirt Int32 Add(System.Int32) */
                /* IL_1A: ldc.i4.6  */
                /* IL_1C: ceq  */
                /* IL_1D: stloc.1  */
                loc1 = (((((arg0.ifacemap)[t1].x600000b)())(BLR.convert_box_to_pointer_as_needed(arg0),(0|0)) === (6|0)) ? (1) : (0));
                /* IL_1E: ldloc.1  */
                /* IL_1F: brtrue.s IL_25 */
                
                if (loc1){
                    __pos__ = 0x25;
                    continue;
                }
                /* IL_21: ldc.i4.1  */
                /* IL_22: stloc.0  */
                loc0 = (1|0);
                /* IL_23: br.s IL_29 */
                __pos__ = 0x29;
                continue;
                case 0x25:
                /* IL_25: ldc.i4.0  */
                /* IL_26: stloc.0  */
                loc0 = (0|0);
                case 0x29:
                /* IL_29: ldloc.0  */
                /* IL_2A: ret  */
                return loc0;
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
        var loc0;
        t0 = asm1.IE();
        t1 = (asm0)["System.ICloneable"]();
        t2 = (asm0)["System.IDisposable"]();
        __pos__ = 0x0;
        /* IL_00: nop  iface6.cs:74:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: callvirt Void doom() */
        (((arg0.ifacemap)[t0].x600000c)())(BLR.convert_box_to_pointer_as_needed(arg0));
        /* IL_07: nop  */
        /* IL_08: ldarg.0  */
        /* IL_09: callvirt Object Clone() */
        /* IL_0E: stloc.0  */
        loc0 = (((arg0.ifacemap)[t1].x60000c6)())(BLR.convert_box_to_pointer_as_needed(arg0));
        /* IL_0F: ldarg.0  */
        /* IL_10: callvirt Void Dispose() */
        (((arg0.ifacemap)[t2].x60000c7)())(BLR.convert_box_to_pointer_as_needed(arg0));
        /* IL_15: nop  */
        /* IL_16: ret  iface6.cs:78:5*/
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
        BLR.init_base_types();
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
        var loc2;
        var loc3;
        t0 = asm1.D();
        t1 = asm1.E();
        __pos__ = 0x0;
        /* IL_00: nop  iface6.cs:81:5*/
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = BLR.newobj(t0,asm1.x600000f,[null]);
        /* IL_07: newobj Void .ctor() */
        /* IL_0C: stloc.1  */
        loc1 = BLR.newobj(t1,asm1.x6000010,[null]);
        /* IL_0D: ldloc.1  */
        /* IL_0E: call Int32 Test(IC) */
        /* IL_13: stloc.2  */
        loc2 = asm1.x6000016(loc1);
        /* IL_14: ldloc.1  */
        /* IL_15: call Void Test2(IE) */
        asm1.x6000017(loc1);
        /* IL_1A: nop  */
        /* IL_1B: ldloc.0  */
        /* IL_1C: call Int32 Test(IC) */
        /* IL_21: stloc.3  */
        loc3 = asm1.x6000016(loc0);
        /* IL_24: ldloc.3  */
        /* IL_25: ret  */
        return loc3;
    };
    /*  C..ctor()*/
    asm.x6000019 = function _ctor(arg0)
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
    asm.IA = BLR.declare_type(
        "IA",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"IA",false,false,true,false,false,[],[
                    [asm1, "x600000a", "Add"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
        });
    asm.IB = BLR.declare_type(
        "IB",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"IB",false,false,true,false,false,[],[
                    [asm1, "x600000b", "Add"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
        });
    asm.IC = BLR.declare_type(
        "IC",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"IC",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.implement_interface(
                this,
                [asm1.IA()],
                null);
            BLR.implement_interface(
                this,
                [asm1.IB()],
                null);
        });
    asm.IE = BLR.declare_type(
        "IE",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"IE",false,false,true,false,false,[],[
                    [asm1, "x600000c", "doom"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            BLR.implement_interface(
                this,
                [(asm0)["System.ICloneable"]()],
                null);
            BLR.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                null);
        });
    asm.D = BLR.declare_type(
        "D",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            BLR.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.IC()],
                {});
            BLR.implement_interface(
                this,
                [asm1.IA()],
                {
                    'x600000a': function (){ return asm1.x600000d;}
                });
            BLR.implement_interface(
                this,
                [asm1.IB()],
                {
                    'x600000b': function (){ return asm1.x600000e;}
                });
        });
    asm.E = BLR.declare_type(
        "E",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"E",false,false,false,false,false,[],[
                    [asm1, "x6000011", "doom"],
                    [asm1, "x6000012", "Clone"],
                    [asm1, "x6000013", "Dispose"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000b");
            this.GenericTypeMetadataName = "asm1.t200000b";
            BLR.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            BLR.declare_virtual(this,"asm1.x6000012","asm1.x6000012");
            BLR.declare_virtual(this,"asm1.x6000013","asm1.x6000013");
            BLR.declare_virtual(this,"asm1.x6000014","asm1.x6000014");
            BLR.declare_virtual(this,"asm1.x6000015","asm1.x6000015");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.IE()],
                {
                    'x600000c': function (){ return asm1.x6000011;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.ICloneable"]()],
                {
                    'x60000c6': function (){ return asm1.x6000012;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x60000c7': function (){ return asm1.x6000013;}
                });
            BLR.implement_interface(
                this,
                [asm1.IC()],
                {});
            BLR.implement_interface(
                this,
                [asm1.IA()],
                {
                    'x600000a': function (){ return asm1.x6000014;}
                });
            BLR.implement_interface(
                this,
                [asm1.IB()],
                {
                    'x600000b': function (){ return asm1.x6000015;}
                });
        });
    asm.C = BLR.declare_type(
        "C",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000c");
            this.GenericTypeMetadataName = "asm1.t200000c";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000018;
})(asm1 || (asm1 = {}));
