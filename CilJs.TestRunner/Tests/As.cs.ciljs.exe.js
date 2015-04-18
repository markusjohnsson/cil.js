var asm1;(function (asm)
{
    asm.FullName = "As.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
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
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000d_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        CILJS.init_base_types();
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        __pos__ = 0x0;
        /* IL_00: nop  As.cs:16:5*/
        /* IL_01: newobj Void .ctor() */
        /* IL_06: call Void AsA(System.Object) */
        asm1.x600000e(CILJS.newobj(t0,asm1.x600000a,[null]));
        /* IL_0B: nop  */
        /* IL_0C: newobj Void .ctor() */
        /* IL_11: call Void AsA(System.Object) */
        asm1.x600000e(CILJS.newobj(t1,asm1.x600000b,[null]));
        /* IL_16: nop  */
        /* IL_17: newobj Void .ctor() */
        /* IL_1C: call Void AsA(System.Object) */
        asm1.x600000e(CILJS.newobj(t2,asm1.x600000c,[null]));
        /* IL_21: nop  */
        /* IL_22: newobj Void .ctor() */
        /* IL_27: call Void As[A](System.Object) */
        (asm1.x600000f(asm1.A()))(CILJS.newobj(t0,asm1.x600000a,[null]));
        /* IL_2C: nop  */
        /* IL_2D: newobj Void .ctor() */
        /* IL_32: call Void As[A](System.Object) */
        (asm1.x600000f(asm1.A()))(CILJS.newobj(t1,asm1.x600000b,[null]));
        /* IL_37: nop  */
        /* IL_38: newobj Void .ctor() */
        /* IL_3D: call Void As[A](System.Object) */
        (asm1.x600000f(asm1.A()))(CILJS.newobj(t2,asm1.x600000c,[null]));
        /* IL_42: nop  */
        /* IL_43: newobj Void .ctor() */
        /* IL_48: call Void As[B](System.Object) */
        (asm1.x600000f(asm1.B()))(CILJS.newobj(t0,asm1.x600000a,[null]));
        /* IL_4D: nop  */
        /* IL_4E: newobj Void .ctor() */
        /* IL_53: call Void As[B](System.Object) */
        (asm1.x600000f(asm1.B()))(CILJS.newobj(t1,asm1.x600000b,[null]));
        /* IL_58: nop  */
        /* IL_59: newobj Void .ctor() */
        /* IL_5E: call Void As[B](System.Object) */
        (asm1.x600000f(asm1.B()))(CILJS.newobj(t2,asm1.x600000c,[null]));
        /* IL_63: nop  */
        /* IL_64: ret  As.cs:28:5*/
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
                /* IL_00: nop  As.cs:31:5*/
                
                /* IL_01: ldarg.0  */
                /* IL_02: isinst A */
                /* IL_07: brfalse.s IL_10 */
                
                if ((!(t0.IsInst(arg0)))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_09: ldstr not null */
                st_02 = CILJS.new_string("not null");
                /* IL_0E: br.s IL_15 */
                __pos__ = 0x15;
                continue;
                case 0x10:
                /* IL_10: ldstr null */
                st_02 = CILJS.new_string("null");
                case 0x15:
                /* IL_15: nop  */
                
                /* IL_16: call Void Log(System.Object) */
                asm1.x6000001(st_02);
                /* IL_1B: nop  */
                
                /* IL_1C: ret  As.cs:33:5*/
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
                    /* IL_00: nop  As.cs:36:5*/
                    
                    /* IL_01: ldarg.0  */
                    /* IL_02: isinst T */
                    /* IL_07: unbox.any T */
                    /* IL_0C: box T */
                    /* IL_11: brfalse.s IL_1A */
                    
                    if ((!(CILJS.box(CILJS.unbox_any(t0.IsInst(arg0),t0),t0)))){
                        __pos__ = 0x1A;
                        continue;
                    }
                    /* IL_13: ldstr not null */
                    st_04 = CILJS.new_string("not null");
                    /* IL_18: br.s IL_1F */
                    __pos__ = 0x1F;
                    continue;
                    case 0x1A:
                    /* IL_1A: ldstr null */
                    st_04 = CILJS.new_string("null");
                    case 0x1F:
                    /* IL_1F: nop  */
                    
                    /* IL_20: call Void Log(System.Object) */
                    asm1.x6000001(st_04);
                    /* IL_25: nop  */
                    
                    /* IL_26: ret  As.cs:38:5*/
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
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return new (asm1.A())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
