var asm1; (function (asm)
{
    asm.FullName = "iface2.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    asm.x600000e = function IA_Add(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface2.cs:23:5*/
        /* IL_01: ldc.i4.5  */
        /* IL_02: stloc.0  */
        loc0 = (5|0);
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /* System.Int32 D.IA.Add2(Int32)*/
    asm.x600000f = function IA_Add2(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface2.cs:28:5*/
        /* IL_01: ldc.i4.6  */
        /* IL_02: stloc.0  */
        loc0 = (6|0);
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /* System.Int32 D.IB.Add(Int32)*/
    asm.x6000010 = function IB_Add(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface2.cs:33:5*/
        /* IL_01: ldc.i4.7  */
        /* IL_02: stloc.0  */
        loc0 = (7|0);
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /*  D..ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Int32 E.IC.Add(Int32)*/
    asm.x6000012 = function IC_Add(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface2.cs:42:5*/
        /* IL_01: ldc.i4.8  */
        /* IL_02: stloc.0  */
        loc0 = (8|0);
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /* System.Int32 E.IA.Add(Int32)*/
    asm.x6000013 = function IA_Add(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface2.cs:47:5*/
        /* IL_01: ldc.i4.s 9 */
        /* IL_03: stloc.0  */
        loc0 = (9|0);
        /* IL_06: ldloc.0  */
        /* IL_07: ret  */
        return loc0;
    };;
    /* System.Int32 E.IA.Add2(Int32)*/
    asm.x6000014 = function IA_Add2(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface2.cs:52:5*/
        /* IL_01: ldc.i4.s 10 */
        /* IL_03: stloc.0  */
        loc0 = (10|0);
        /* IL_06: ldloc.0  */
        /* IL_07: ret  */
        return loc0;
    };;
    /* System.Int32 E.IB.Add(Int32)*/
    asm.x6000015 = function IB_Add(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface2.cs:57:5*/
        /* IL_01: ldc.i4.s 11 */
        /* IL_03: stloc.0  */
        loc0 = (11|0);
        /* IL_06: ldloc.0  */
        /* IL_07: ret  */
        return loc0;
    };;
    /*  E..ctor()*/
    asm.x6000016 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Int32 C.Test(ID)*/
    asm.x6000017_init = function ()
    {
        (asm1.IA().init)();
        (asm1.IB().init)();
        asm.x6000017 = asm.x6000017_;
    };;
    asm.x6000017 = function (arg0)
    {
        asm.x6000017_init.apply(this,arguments);
        return asm.x6000017_.apply(this,arguments);
    };;
    asm.x6000017_ = function Test(arg0)
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
                /* IL_00: nop  iface2.cs:66:5*/
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldc.i4.0  */
                /* IL_03: callvirt Int32 Add2(System.Int32) */
                /* IL_08: ldc.i4.6  */
                /* IL_0A: ceq  */
                /* IL_0B: stloc.1  */
                loc1 = (((((arg0.ifacemap)[t0].x600000b)())(BLR.convert_box_to_pointer_as_needed(arg0),(0|0)) === (6|0)) ? (1) : (0));
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
                /* IL_1A: ldc.i4.7  */
                /* IL_1C: ceq  */
                /* IL_1D: stloc.1  */
                loc1 = (((((arg0.ifacemap)[t1].x600000c)())(BLR.convert_box_to_pointer_as_needed(arg0),(0|0)) === (7|0)) ? (1) : (0));
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
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc3;
        var loc2;
        t0 = asm1.D();
        t1 = asm1.E();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  iface2.cs:79:5*/
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: stloc.0  */
                loc0 = BLR.newobj(t0,asm1.x6000011,[null]);
                /* IL_07: newobj Void .ctor() */
                /* IL_0C: stloc.1  */
                loc1 = BLR.newobj(t1,asm1.x6000016,[null]);
                /* IL_0D: ldloc.0  */
                /* IL_0E: call Int32 Test(ID) */
                /* IL_13: ldc.i4.0  */
                /* IL_15: ceq  */
                /* IL_16: stloc.3  */
                loc3 = ((asm1.x6000017(loc0) === (0|0)) ? (1) : (0));
                /* IL_17: ldloc.3  */
                /* IL_18: brtrue.s IL_1E */
                
                if (loc3){
                    __pos__ = 0x1E;
                    continue;
                }
                /* IL_1A: ldc.i4.1  */
                /* IL_1B: stloc.2  */
                loc2 = (1|0);
                /* IL_1C: br.s IL_22 */
                __pos__ = 0x22;
                continue;
                case 0x1E:
                /* IL_1E: ldc.i4.0  */
                /* IL_1F: stloc.2  */
                loc2 = (0|0);
                case 0x22:
                /* IL_22: ldloc.2  */
                /* IL_23: ret  */
                return loc2;
            }
        }
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
                    [asm1, "x600000a", "Add"],
                    [asm1, "x600000b", "Add2"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
            BLR.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
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
                    [asm1, "x600000c", "Add"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
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
            BLR.init_type(this,asm,"IC",false,false,true,false,false,[],[
                    [asm1, "x600000d", "Add"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
        });
    asm.ID = BLR.declare_type(
        "ID",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"ID",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.implement_interface(
                this,
                [asm1.IA()],
                null);
            BLR.implement_interface(
                this,
                [asm1.IB()],
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
            BLR.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm1.x6000010","asm1.x6000010");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.ID()],
                {});
            BLR.implement_interface(
                this,
                [asm1.IA()],
                {
                    'x600000a': function (){ return asm1.x600000e;},
                    'x600000b': function (){ return asm1.x600000f;}
                });
            BLR.implement_interface(
                this,
                [asm1.IB()],
                {
                    'x600000c': function (){ return asm1.x6000010;}
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
            BLR.init_type(this,asm,"E",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000b");
            this.GenericTypeMetadataName = "asm1.t200000b";
            BLR.declare_virtual(this,"asm1.x6000012","asm1.x6000012");
            BLR.declare_virtual(this,"asm1.x6000013","asm1.x6000013");
            BLR.declare_virtual(this,"asm1.x6000014","asm1.x6000014");
            BLR.declare_virtual(this,"asm1.x6000015","asm1.x6000015");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.IC()],
                {
                    'x600000d': function (){ return asm1.x6000012;}
                });
            BLR.implement_interface(
                this,
                [asm1.ID()],
                {});
            BLR.implement_interface(
                this,
                [asm1.IA()],
                {
                    'x600000a': function (){ return asm1.x6000013;},
                    'x600000b': function (){ return asm1.x6000014;}
                });
            BLR.implement_interface(
                this,
                [asm1.IB()],
                {
                    'x600000c': function (){ return asm1.x6000015;}
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
