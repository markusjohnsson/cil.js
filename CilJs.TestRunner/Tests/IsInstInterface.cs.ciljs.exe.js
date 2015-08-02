var asm2; (function (asm)
{
    asm.FullName = "IsInstInterface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000001(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000001(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000003(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000005_init = function ()
    {
        (asm2.A().init)();
        (asm2.B().init)();
        (asm2.C().init)();
        (asm2.D().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function ()
    {
        asm.x6000005_init.apply(this,arguments);
        return asm.x6000005_.apply(this,arguments);
    };;
    asm.x6000005_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        CILJS.init_base_types();
        t0 = asm2.A();
        t1 = asm2.B();
        t2 = asm2.C();
        t3 = asm2.D();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: call Void TestImpl(System.Object)*/
        asm2.x6000006(CILJS.newobj(t0,asm2.x6000001,[null]));
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: call Void TestImpl(System.Object)*/
        asm2.x6000006(CILJS.newobj(t1,asm2.x6000002,[null]));
        /* IL_14: newobj Void .ctor()*/
        /* IL_19: call Void TestImpl(System.Object)*/
        asm2.x6000006(CILJS.newobj(t2,asm2.x6000003,[null]));
        /* IL_1E: newobj Void .ctor()*/
        /* IL_23: call Void TestImpl(System.Object)*/
        asm2.x6000006(CILJS.newobj(t3,asm2.x6000004,[null]));
        /* IL_28: ret */
        return ;
    };
    /* static System.Void Program.TestImpl(Object)*/
    asm.x6000006_init = function ()
    {
        (asm2.I1().init)();
        (asm2.I2().init)();
        (asm2.I3().init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function (arg0)
    {
        asm.x6000006_init.apply(this,arguments);
        return asm.x6000006_.apply(this,arguments);
    };;
    asm.x6000006_ = function TestImpl(arg0)
    {
        var t0;
        var t1;
        var t2;
        var st_02;
        var st_05;
        var st_08;
        var in_block_0;
        var __pos__;
        t0 = asm2.I1();
        t1 = asm2.I2();
        t2 = asm2.I3();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: isinst I1*/
                /* IL_06: brtrue.s IL_0F*/
                
                if (t0.IsInst(arg0)){
                    __pos__ = 0xF;
                    continue;
                }
                /* IL_08: ldstr false*/
                st_02 = CILJS.new_string("false");
                /* IL_0D: br.s IL_14*/
                __pos__ = 0x14;
                continue;
                case 0xF:
                /* IL_0F: ldstr true*/
                st_02 = CILJS.new_string("true");
                case 0x14:
                /* IL_14: call Void Log(System.Object)*/
                asm1.x6000001(st_02);
                /* IL_19: ldarg.0 */
                /* IL_1A: isinst I2*/
                /* IL_1F: brtrue.s IL_28*/
                
                if (t1.IsInst(arg0)){
                    __pos__ = 0x28;
                    continue;
                }
                /* IL_21: ldstr false*/
                st_05 = CILJS.new_string("false");
                /* IL_26: br.s IL_2D*/
                __pos__ = 0x2D;
                continue;
                case 0x28:
                /* IL_28: ldstr true*/
                st_05 = CILJS.new_string("true");
                case 0x2D:
                /* IL_2D: call Void Log(System.Object)*/
                asm1.x6000001(st_05);
                /* IL_32: ldarg.0 */
                /* IL_33: isinst I3*/
                /* IL_38: brtrue.s IL_41*/
                
                if (t2.IsInst(arg0)){
                    __pos__ = 0x41;
                    continue;
                }
                /* IL_3A: ldstr false*/
                st_08 = CILJS.new_string("false");
                /* IL_3F: br.s IL_46*/
                __pos__ = 0x46;
                continue;
                case 0x41:
                /* IL_41: ldstr true*/
                st_08 = CILJS.new_string("true");
                case 0x46:
                /* IL_46: call Void Log(System.Object)*/
                asm1.x6000001(st_08);
                /* IL_4B: ret */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.I1 = CILJS.declare_type(
        "I1",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I1",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
        });
    asm.I2 = CILJS.declare_type(
        "I2",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I2",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
        });
    asm.I3 = CILJS.declare_type(
        "I3",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I3",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.implement_interface(
                this,
                [asm2.I2()],
                null);
        });
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return asm2.A();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm2.A(),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.I1()],
                {});
            CILJS.implement_interface(
                this,
                [asm2.I2()],
                {});
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return asm2.A();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],asm2.A(),CILJS.is_inst_default(this),Array,"asm2.t2000007");
            this.GenericTypeMetadataName = "asm2.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.I3()],
                {});
            CILJS.implement_interface(
                this,
                [asm2.I2()],
                {});
        });
    asm.D = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return asm2.C();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],asm2.C(),CILJS.is_inst_default(this),Array,"asm2.t2000008");
            this.GenericTypeMetadataName = "asm2.t2000008";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.I2()],
                {});
            CILJS.implement_interface(
                this,
                [asm2.I3()],
                {});
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000009");
            this.GenericTypeMetadataName = "asm2.t2000009";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000005;
})(asm2 || (asm2 = {}));
