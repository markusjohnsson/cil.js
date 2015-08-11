var asm1;(function (asm)
{
    asm.FullName = "As.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000001(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000004_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        asm.x6000004 = asm.x6000004_;
    };;
    asm.x6000004 = function ()
    {
        asm.x6000004_init.apply(this,arguments);
        return asm.x6000004_.apply(this,arguments);
    };;
    asm.x6000004_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        CILJS.init_base_types();
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: call Void AsA(System.Object) */
        asm1.x6000005(CILJS.newobj(t0,asm1.x6000001,[null]));
        /* IL_0A: newobj Void .ctor() */
        /* IL_0F: call Void AsA(System.Object) */
        asm1.x6000005(CILJS.newobj(t1,asm1.x6000002,[null]));
        /* IL_14: newobj Void .ctor() */
        /* IL_19: call Void AsA(System.Object) */
        asm1.x6000005(CILJS.newobj(t2,asm1.x6000003,[null]));
        /* IL_1E: newobj Void .ctor() */
        /* IL_23: call Void As[A](System.Object) */
        (asm1.x6000006(asm1.A()))(CILJS.newobj(t0,asm1.x6000001,[null]));
        /* IL_28: newobj Void .ctor() */
        /* IL_2D: call Void As[A](System.Object) */
        (asm1.x6000006(asm1.A()))(CILJS.newobj(t1,asm1.x6000002,[null]));
        /* IL_32: newobj Void .ctor() */
        /* IL_37: call Void As[A](System.Object) */
        (asm1.x6000006(asm1.A()))(CILJS.newobj(t2,asm1.x6000003,[null]));
        /* IL_3C: newobj Void .ctor() */
        /* IL_41: call Void As[B](System.Object) */
        (asm1.x6000006(asm1.B()))(CILJS.newobj(t0,asm1.x6000001,[null]));
        /* IL_46: newobj Void .ctor() */
        /* IL_4B: call Void As[B](System.Object) */
        (asm1.x6000006(asm1.B()))(CILJS.newobj(t1,asm1.x6000002,[null]));
        /* IL_50: newobj Void .ctor() */
        /* IL_55: call Void As[B](System.Object) */
        (asm1.x6000006(asm1.B()))(CILJS.newobj(t2,asm1.x6000003,[null]));
        /* IL_5A: ret  */
        return ;
    };
    /* static System.Void Program.AsA(Object)*/
    asm.x6000005_init = function ()
    {
        (asm1.A().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function (arg0)
    {
        asm.x6000005_init.apply(this,arguments);
        return asm.x6000005_.apply(this,arguments);
    };;
    asm.x6000005_ = function AsA(arg0)
    {
        var t0;
        var t1;
        var st_02;
        var st_03;
        var st_04;
        var in_block_0;
        var __pos__;
        t0 = asm1.A();
        t1 = (asm0)["System.Object"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: isinst A */
                /* IL_06: brfalse.s IL_0F */
                
                if ((!(t0.IsInst(arg0)))){
                    __pos__ = 0xF;
                    continue;
                }
                /* IL_08: ldstr not null */
                st_03 = CILJS.new_string("not null");
                /* IL_0D: br.s IL_14 */
                __pos__ = 0x14;
                continue;
                case 0xF:
                /* IL_0F: ldstr null */
                st_03 = CILJS.new_string("null");
                case 0x14:
                /* IL_14: ldc.i4.0  */
                st_02 = (0|0);
                /* IL_15: newarr System.Object */
                st_04 = CILJS.new_array(t1,st_02);
                /* IL_1A: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(st_03,st_04);
                /* IL_1F: ret  */
                return ;
            }
        }
    };
    /* static System.Void Program.As<T>(Object)*/
    asm.x6000006 = function (T)
    {
        return function As(arg0)
        {
            var t0;
            var t1;
            var st_04;
            var st_05;
            var st_06;
            var in_block_0;
            var __pos__;
            t0 = T;
            t1 = (asm0)["System.Object"]();
            in_block_0 = true;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: ldarg.0  */
                    /* IL_01: isinst T */
                    /* IL_06: unbox.any T */
                    /* IL_0B: box T */
                    /* IL_10: brfalse.s IL_19 */
                    
                    if ((!(CILJS.box(CILJS.unbox_any(t0.IsInst(arg0),t0),t0)))){
                        __pos__ = 0x19;
                        continue;
                    }
                    /* IL_12: ldstr not null */
                    st_05 = CILJS.new_string("not null");
                    /* IL_17: br.s IL_1E */
                    __pos__ = 0x1E;
                    continue;
                    case 0x19:
                    /* IL_19: ldstr null */
                    st_05 = CILJS.new_string("null");
                    case 0x1E:
                    /* IL_1E: ldc.i4.0  */
                    st_04 = (0|0);
                    /* IL_1F: newarr System.Object */
                    st_06 = CILJS.new_array(t1,st_04);
                    /* IL_24: call Void WriteLine(System.String, System.Object[]) */
                    asm0.x600005b(st_05,st_06);
                    /* IL_29: ret  */
                    return ;
                }
            }
        };
    };;
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return asm1.A();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000004;
})(asm1 || (asm1 = {}));
