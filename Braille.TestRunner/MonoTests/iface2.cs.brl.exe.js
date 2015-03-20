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
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Int32 D.IA.Add(Int32)*/
    asm.x600000e = function IA_Add(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.5 */
        /* IL_01: ret */
        return (5|0);
    };;
    /* System.Int32 D.IA.Add2(Int32)*/
    asm.x600000f = function IA_Add2(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.6 */
        /* IL_01: ret */
        return (6|0);
    };;
    /* System.Int32 D.IB.Add(Int32)*/
    asm.x6000010 = function IB_Add(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.7 */
        /* IL_01: ret */
        return (7|0);
    };;
    /*  D..ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Int32 E.IC.Add(Int32)*/
    asm.x6000012 = function IC_Add(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.8 */
        /* IL_01: ret */
        return (8|0);
    };;
    /* System.Int32 E.IA.Add(Int32)*/
    asm.x6000013 = function IA_Add(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.s 9*/
        /* IL_02: ret */
        return (9|0);
    };;
    /* System.Int32 E.IA.Add2(Int32)*/
    asm.x6000014 = function IA_Add2(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.s 10*/
        /* IL_02: ret */
        return (10|0);
    };;
    /* System.Int32 E.IB.Add(Int32)*/
    asm.x6000015 = function IB_Add(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.s 11*/
        /* IL_02: ret */
        return (11|0);
    };;
    /*  E..ctor()*/
    asm.x6000016 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
                /* IL_02: callvirt Int32 Add2(System.Int32)*/
                /* IL_07: ldc.i4.6 */
                /* IL_08: beq.s IL_0C*/
                
                if ((((arg0.ifacemap)[t0].x600000b)())(BLR.convert_box_to_pointer_as_needed(arg0),(0|0)) === (6|0)){
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
                /* IL_13: ldc.i4.7 */
                /* IL_14: beq.s IL_18*/
                
                if ((((arg0.ifacemap)[t1].x600000c)())(BLR.convert_box_to_pointer_as_needed(arg0),(0|0)) === (7|0)){
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
    /* static System.Int32 C.Main()*/
    asm.x6000018_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.D().init)();
        (asm1.E().init)();
        asm.x6000018 = asm.x6000018_;
    };;
    asm.x6000018 = function ()
    {
        asm.x6000018_init.apply(this,arguments);
        return asm.x6000018_.apply(this,arguments);
    };;
    asm.x6000018_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.D();
        t2 = asm1.E();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = BLR.newobj(t1,asm1.x6000011,[null]);
                /* IL_06: newobj Void .ctor()*/
                /* IL_0B: pop */
                BLR.newobj(t2,asm1.x6000016,[null]);
                /* IL_0C: ldloc.0 */
                /* IL_0D: call Int32 Test(ID)*/
                /* IL_12: brfalse.s IL_16*/
                
                if ((!(asm1.x6000017(loc0)))){
                    __pos__ = 0x16;
                    continue;
                }
                /* IL_14: ldc.i4.1 */
                /* IL_15: ret */
                return (1|0);
                case 0x16:
                /* IL_16: ldc.i4.0 */
                /* IL_17: ret */
                return (0|0);
            }
        }
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
