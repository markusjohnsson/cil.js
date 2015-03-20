var asm1; (function (asm)
{
    asm.FullName = "As.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  A..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  B..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x600000a(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  C..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000d_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos__;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.A();
        t2 = asm1.B();
        t3 = asm1.C();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: call Void AsA(System.Object)*/
        asm1.x600000e(BLR.newobj(t1,asm1.x600000a,[null]));
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: call Void AsA(System.Object)*/
        asm1.x600000e(BLR.newobj(t2,asm1.x600000b,[null]));
        /* IL_14: newobj Void .ctor()*/
        /* IL_19: call Void AsA(System.Object)*/
        asm1.x600000e(BLR.newobj(t3,asm1.x600000c,[null]));
        /* IL_1E: newobj Void .ctor()*/
        /* IL_23: call Void As[A](System.Object)*/
        (asm1.x600000f(asm1.A()))(BLR.newobj(t1,asm1.x600000a,[null]));
        /* IL_28: newobj Void .ctor()*/
        /* IL_2D: call Void As[A](System.Object)*/
        (asm1.x600000f(asm1.A()))(BLR.newobj(t2,asm1.x600000b,[null]));
        /* IL_32: newobj Void .ctor()*/
        /* IL_37: call Void As[A](System.Object)*/
        (asm1.x600000f(asm1.A()))(BLR.newobj(t3,asm1.x600000c,[null]));
        /* IL_3C: newobj Void .ctor()*/
        /* IL_41: call Void As[B](System.Object)*/
        (asm1.x600000f(asm1.B()))(BLR.newobj(t1,asm1.x600000a,[null]));
        /* IL_46: newobj Void .ctor()*/
        /* IL_4B: call Void As[B](System.Object)*/
        (asm1.x600000f(asm1.B()))(BLR.newobj(t2,asm1.x600000b,[null]));
        /* IL_50: newobj Void .ctor()*/
        /* IL_55: call Void As[B](System.Object)*/
        (asm1.x600000f(asm1.B()))(BLR.newobj(t3,asm1.x600000c,[null]));
        /* IL_5A: ret */
        return ;
    };
    /* static System.Void Program.AsA(Object)*/
    asm.x600000e_init = function ()
    {
        (asm1.A().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0)
    {
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function AsA(arg0)
    {
        var t0;
        var st_02;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        t0 = asm1.A();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: isinst A*/
                /* IL_06: brfalse.s IL_0F*/
                
                if ((!(t0.IsInst(arg0)))){
                    __pos__ = 0xF;
                    continue;
                }
                /* IL_08: ldstr not null*/
                st_02 = BLR.new_string("not null");
                /* IL_0D: br.s IL_14*/
                __pos__ = 0x14;
                continue;
                case 0xF:
                /* IL_0F: ldstr null*/
                st_02 = BLR.new_string("null");
                case 0x14:
                /* IL_14: call Void Log(System.Object)*/
                asm1.x6000001(st_02);
                /* IL_19: ret */
                return ;
            }
        }
    };
    /* static System.Void Program.As<T>(Object)*/
    asm.x600000f = function (T)
    {
        return function As(arg0)
        {
            var t0;
            var st_04;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            t0 = T;
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: ldarg.0 */
                    /* IL_01: isinst T*/
                    /* IL_06: unbox.any T*/
                    /* IL_0B: box T*/
                    /* IL_10: brfalse.s IL_19*/
                    
                    if ((!(BLR.box(BLR.unbox_any(t0.IsInst(arg0),t0),t0)))){
                        __pos__ = 0x19;
                        continue;
                    }
                    /* IL_12: ldstr not null*/
                    st_04 = BLR.new_string("not null");
                    /* IL_17: br.s IL_1E*/
                    __pos__ = 0x1E;
                    continue;
                    case 0x19:
                    /* IL_19: ldstr null*/
                    st_04 = BLR.new_string("null");
                    case 0x1E:
                    /* IL_1E: call Void Log(System.Object)*/
                    asm1.x6000001(st_04);
                    /* IL_23: ret */
                    return ;
                }
            }
        };
    };;
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
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
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
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
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
