var asm1; (function (asm)
{
    asm.FullName = "iface2.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    asm.x6000010 = function IA_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.5 */
        /* IL_01: ret */
        return (5|0);
    };;
    /* Int32 IA.Add2(System.Int32)*/
    asm.x6000011 = function IA_Add2(arg0,arg1)
    {
        /* IL_00: ldc.i4.6 */
        /* IL_01: ret */
        return (6|0);
    };;
    /* Int32 IB.Add(System.Int32)*/
    asm.x6000012 = function IB_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.7 */
        /* IL_01: ret */
        return (7|0);
    };;
    /* Void .ctor()*/
    asm.x6000013 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Int32 IC.Add(System.Int32)*/
    asm.x6000014 = function IC_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.8 */
        /* IL_01: ret */
        return (8|0);
    };;
    /* Int32 IA.Add(System.Int32)*/
    asm.x6000015 = function IA_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.s 9*/
        /* IL_02: ret */
        return (9|0);
    };;
    /* Int32 IA.Add2(System.Int32)*/
    asm.x6000016 = function IA_Add2(arg0,arg1)
    {
        /* IL_00: ldc.i4.s 10*/
        /* IL_02: ret */
        return (10|0);
    };;
    /* Int32 IB.Add(System.Int32)*/
    asm.x6000017 = function IB_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.s 11*/
        /* IL_02: ret */
        return (11|0);
    };;
    /* Void .ctor()*/
    asm.x6000018 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Int32 Test(ID)*/
    asm.x6000019_init = function ()
    {
        (asm1.IA().init)();
        (asm1.IB().init)();
        asm.x6000019 = asm.x6000019_;
    };;
    asm.x6000019 = function (arg0)
    {
        asm.x6000019_init.apply(this,arguments);
        return asm.x6000019_.apply(this,arguments);
    };;
    asm.x6000019_ = function Test(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        t0 = asm1.IA();
        t1 = asm1.IB();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldc.i4.0 */
                /* IL_02: callvirt Int32 Add2(System.Int32)*/
                /* IL_07: ldc.i4.6 */
                /* IL_08: beq.s IL_0C*/
                
                if ((((arg0.ifacemap)[t0].x600000d)())(BLR.convert_box_to_pointer_as_needed(arg0),(0|0)) === (6|0)){
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
                /* IL_13: ldc.i4.7 */
                /* IL_14: beq.s IL_18*/
                
                if ((((arg0.ifacemap)[t1].x600000e)())(BLR.convert_box_to_pointer_as_needed(arg0),(0|0)) === (7|0)){
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
    /* static Int32 Main()*/
    asm.x600001a_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.D().init)();
        (asm1.E().init)();
        asm.x600001a = asm.x600001a_;
    };;
    asm.x600001a = function ()
    {
        asm.x600001a_init.apply(this,arguments);
        return asm.x600001a_.apply(this,arguments);
    };;
    asm.x600001a_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos_0__;
        var loc0;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.D();
        t2 = asm1.E();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = BLR.newobj(t1,asm1.x6000013,[null]);
                /* IL_06: newobj Void .ctor()*/
                /* IL_0B: pop */
                BLR.newobj(t2,asm1.x6000018,[null]);
                /* IL_0C: ldloc.0 */
                /* IL_0D: call Int32 Test(ID)*/
                /* IL_12: brfalse.s IL_16*/
                
                if ((!(asm1.x6000019(loc0)))){
                    __pos_0__ = 0x16;
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
    /* Void .ctor()*/
    asm.x600001b = function _ctor(arg0)
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
            this.Interfaces = [];
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
            this.Interfaces = [];
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
                    [asm1, "x600000c", "Add"],
                    [asm1, "x600000d", "Add2"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000007");
            this.Interfaces = [];
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            BLR.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
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
                    [asm1, "x600000e", "Add"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000008");
            this.Interfaces = [];
            BLR.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
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
                    [asm1, "x600000f", "Add"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000009");
            this.Interfaces = [];
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
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
            BLR.init_type(this,asm,"ID",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t200000a");
            this.Interfaces = [
                asm1.IA(),
                asm1.IB()
            ];
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
            BLR.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000b");
            this.Interfaces = [
                asm1.ID(),
                asm1.IA(),
                asm1.IB()
            ];
            BLR.declare_virtual(this,"asm1.x6000010","asm1.x6000010");
            BLR.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            BLR.declare_virtual(this,"asm1.x6000012","asm1.x6000012");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,[asm1.ID()],{});
            BLR.implement_interface(this,[asm1.IA()],{
                    'x600000c': function (){ return asm1.x6000010;},
                    'x600000d': function (){ return asm1.x6000011;}
                });
            BLR.implement_interface(this,[asm1.IB()],{
                    'x600000e': function (){ return asm1.x6000012;}
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
            BLR.init_type(this,asm,"E",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000c");
            this.Interfaces = [
                asm1.IC(),
                asm1.ID(),
                asm1.IA(),
                asm1.IB()
            ];
            BLR.declare_virtual(this,"asm1.x6000014","asm1.x6000014");
            BLR.declare_virtual(this,"asm1.x6000015","asm1.x6000015");
            BLR.declare_virtual(this,"asm1.x6000016","asm1.x6000016");
            BLR.declare_virtual(this,"asm1.x6000017","asm1.x6000017");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,[asm1.IC()],{
                    'x600000f': function (){ return asm1.x6000014;}
                });
            BLR.implement_interface(this,[asm1.ID()],{});
            BLR.implement_interface(this,[asm1.IA()],{
                    'x600000c': function (){ return asm1.x6000015;},
                    'x600000d': function (){ return asm1.x6000016;}
                });
            BLR.implement_interface(this,[asm1.IB()],{
                    'x600000e': function (){ return asm1.x6000017;}
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
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000d");
            this.Interfaces = [];
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600001a;
})(asm1 || (asm1 = {}));
