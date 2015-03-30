var asm1; (function (asm)
{
    asm.FullName = "IsInstInterface.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  A..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000a(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000a(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000c(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000e_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        (asm1.D().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        BLR.init_base_types();
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos__;
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        t3 = asm1.D();
        __pos__ = 0x0;
        /* IL_00: nop  IsInstInterface.cs:13:5*/
        /* IL_01: newobj Void .ctor() */
        /* IL_06: call Void TestImpl(System.Object) */
        asm1.x600000f(BLR.newobj(t0,asm1.x600000a,[null]));
        /* IL_0B: nop  */
        /* IL_0C: newobj Void .ctor() */
        /* IL_11: call Void TestImpl(System.Object) */
        asm1.x600000f(BLR.newobj(t1,asm1.x600000b,[null]));
        /* IL_16: nop  */
        /* IL_17: newobj Void .ctor() */
        /* IL_1C: call Void TestImpl(System.Object) */
        asm1.x600000f(BLR.newobj(t2,asm1.x600000c,[null]));
        /* IL_21: nop  */
        /* IL_22: newobj Void .ctor() */
        /* IL_27: call Void TestImpl(System.Object) */
        asm1.x600000f(BLR.newobj(t3,asm1.x600000d,[null]));
        /* IL_2C: nop  */
        /* IL_2D: ret  IsInstInterface.cs:18:5*/
        return ;
    };
    /* static System.Void Program.TestImpl(Object)*/
    asm.x600000f_init = function ()
    {
        (asm1.I1().init)();
        (asm1.I2().init)();
        (asm1.I3().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0)
    {
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function TestImpl(arg0)
    {
        var t0;
        var t1;
        var t2;
        var st_02;
        var st_05;
        var st_08;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        t0 = asm1.I1();
        t1 = asm1.I2();
        t2 = asm1.I3();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  IsInstInterface.cs:21:5*/
                
                /* IL_01: ldarg.0  */
                /* IL_02: isinst I1 */
                /* IL_07: brtrue.s IL_10 */
                
                if (t0.IsInst(arg0)){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_09: ldstr false */
                st_02 = BLR.new_string("false");
                /* IL_0E: br.s IL_15 */
                __pos__ = 0x15;
                continue;
                case 0x10:
                /* IL_10: ldstr true */
                st_02 = BLR.new_string("true");
                case 0x15:
                /* IL_15: nop  */
                
                /* IL_16: call Void Log(System.Object) */
                asm1.x6000001(st_02);
                /* IL_1B: nop  */
                
                /* IL_1C: ldarg.0  */
                /* IL_1D: isinst I2 */
                /* IL_22: brtrue.s IL_2B */
                
                if (t1.IsInst(arg0)){
                    __pos__ = 0x2B;
                    continue;
                }
                /* IL_24: ldstr false */
                st_05 = BLR.new_string("false");
                /* IL_29: br.s IL_30 */
                __pos__ = 0x30;
                continue;
                case 0x2B:
                /* IL_2B: ldstr true */
                st_05 = BLR.new_string("true");
                case 0x30:
                /* IL_30: nop  */
                
                /* IL_31: call Void Log(System.Object) */
                asm1.x6000001(st_05);
                /* IL_36: nop  */
                
                /* IL_37: ldarg.0  */
                /* IL_38: isinst I3 */
                /* IL_3D: brtrue.s IL_46 */
                
                if (t2.IsInst(arg0)){
                    __pos__ = 0x46;
                    continue;
                }
                /* IL_3F: ldstr false */
                st_08 = BLR.new_string("false");
                /* IL_44: br.s IL_4B */
                __pos__ = 0x4B;
                continue;
                case 0x46:
                /* IL_46: ldstr true */
                st_08 = BLR.new_string("true");
                case 0x4B:
                /* IL_4B: nop  */
                
                /* IL_4C: call Void Log(System.Object) */
                asm1.x6000001(st_08);
                /* IL_51: nop  */
                
                /* IL_52: ret  IsInstInterface.cs:25:5*/
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
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
            BLR.init_type(this,asm,"I1",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
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
            BLR.init_type(this,asm,"I2",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
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
            BLR.init_type(this,asm,"I3",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.implement_interface(
                this,
                [asm1.I2()],
                null);
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
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
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
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.I1()],
                {});
            BLR.implement_interface(
                this,
                [asm1.I2()],
                {});
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
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],asm1.A(),BLR.is_inst_default(this),Array,"asm1.t200000b");
            this.GenericTypeMetadataName = "asm1.t200000b";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.I3()],
                {});
            BLR.implement_interface(
                this,
                [asm1.I2()],
                {});
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
            BLR.init_type(this,asm,"D",false,false,false,false,false,[],[],asm1.C(),BLR.is_inst_default(this),Array,"asm1.t200000c");
            this.GenericTypeMetadataName = "asm1.t200000c";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.I2()],
                {});
            BLR.implement_interface(
                this,
                [asm1.I3()],
                {});
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000d");
            this.GenericTypeMetadataName = "asm1.t200000d";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
