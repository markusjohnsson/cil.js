var asm1; (function (asm)
{
    asm.FullName = "IsInstInterface.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Void .ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x600000c(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x600000c(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x600000e(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000010_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        (asm1.D().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.A();
        t2 = asm1.B();
        t3 = asm1.C();
        t4 = asm1.D();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: call Void TestImpl(System.Object)*/
        asm1.x6000011(BLR.newobj(t1,asm1.x600000c,[null]));
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: call Void TestImpl(System.Object)*/
        asm1.x6000011(BLR.newobj(t2,asm1.x600000d,[null]));
        /* IL_14: newobj Void .ctor()*/
        /* IL_19: call Void TestImpl(System.Object)*/
        asm1.x6000011(BLR.newobj(t3,asm1.x600000e,[null]));
        /* IL_1E: newobj Void .ctor()*/
        /* IL_23: call Void TestImpl(System.Object)*/
        asm1.x6000011(BLR.newobj(t4,asm1.x600000f,[null]));
        /* IL_28: ret */
        return ;
    };
    /* static Void TestImpl(System.Object)*/
    asm.x6000011_init = function ()
    {
        (asm1.I1().init)();
        (asm1.I2().init)();
        (asm1.I3().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function (arg0)
    {
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function TestImpl(arg0)
    {
        var t0;
        var t1;
        var t2;
        var st_02;
        var st_05;
        var st_08;
        var __pos_0__;
        t0 = asm1.I1();
        t1 = asm1.I2();
        t2 = asm1.I3();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: isinst I1*/
                /* IL_06: brtrue.s IL_0F*/
                
                if (t0.IsInst(arg0)){
                    __pos_0__ = 0xF;
                    continue;
                }
                /* IL_08: ldstr false*/
                st_02 = BLR.new_string("false");
                /* IL_0D: br.s IL_14*/
                __pos_0__ = 0x14;
                continue;
                case 0xF:
                /* IL_0F: ldstr true*/
                st_02 = BLR.new_string("true");
                case 0x14:
                /* IL_14: call Void Log(System.Object)*/
                asm1.x6000001(st_02);
                /* IL_19: ldarg.0 */
                /* IL_1A: isinst I2*/
                /* IL_1F: brtrue.s IL_28*/
                
                if (t1.IsInst(arg0)){
                    __pos_0__ = 0x28;
                    continue;
                }
                /* IL_21: ldstr false*/
                st_05 = BLR.new_string("false");
                /* IL_26: br.s IL_2D*/
                __pos_0__ = 0x2D;
                continue;
                case 0x28:
                /* IL_28: ldstr true*/
                st_05 = BLR.new_string("true");
                case 0x2D:
                /* IL_2D: call Void Log(System.Object)*/
                asm1.x6000001(st_05);
                /* IL_32: ldarg.0 */
                /* IL_33: isinst I3*/
                /* IL_38: brtrue.s IL_41*/
                
                if (t2.IsInst(arg0)){
                    __pos_0__ = 0x41;
                    continue;
                }
                /* IL_3A: ldstr false*/
                st_08 = BLR.new_string("false");
                /* IL_3F: br.s IL_46*/
                __pos_0__ = 0x46;
                continue;
                case 0x41:
                /* IL_41: ldstr true*/
                st_08 = BLR.new_string("true");
                case 0x46:
                /* IL_46: call Void Log(System.Object)*/
                asm1.x6000001(st_08);
                /* IL_4B: ret */
                return ;
            }
        }
    };
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
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
    asm.I1 = BLR.declare_type(
        "I1",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I1",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000007");
            this.Interfaces = [];
        });
    asm.I2 = BLR.declare_type(
        "I2",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I2",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000008");
            this.Interfaces = [];
        });
    asm.I3 = BLR.declare_type(
        "I3",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I3",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000009");
            this.Interfaces = [
                asm1.I2()
            ];
        });
    asm.A = BLR.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.Interfaces = [];
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.B = BLR.declare_type(
        "B",
        [],
        function ()
        {
            return new (asm1.A())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),BLR.is_inst_default(this),Array,"asm1.t200000b");
            this.Interfaces = [
                asm1.I1(),
                asm1.I2()
            ];
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,[asm1.I1()],{});
            BLR.implement_interface(this,[asm1.I2()],{});
        });
    asm.C = BLR.declare_type(
        "C",
        [],
        function ()
        {
            return new (asm1.A())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],asm1.A(),BLR.is_inst_default(this),Array,"asm1.t200000c");
            this.Interfaces = [
                asm1.I3(),
                asm1.I2()
            ];
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,[asm1.I3()],{});
            BLR.implement_interface(this,[asm1.I2()],{});
        });
    asm.D = BLR.declare_type(
        "D",
        [],
        function ()
        {
            return new (asm1.C())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"D",false,false,false,false,false,[],[],asm1.C(),BLR.is_inst_default(this),Array,"asm1.t200000d");
            this.Interfaces = [
                asm1.I2(),
                asm1.I3()
            ];
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,[asm1.I2()],{});
            BLR.implement_interface(this,[asm1.I3()],{});
        });
    asm.Program = BLR.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000e");
            this.Interfaces = [];
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
