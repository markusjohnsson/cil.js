var asm1; (function (asm)
{
    asm.FullName = "IsInstGenericMethod.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
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
    /* static System.Void Program.Test<T>(Object)*/
    asm.x600000d = function (T)
    {
        return function Test(arg0)
        {
            var t0;
            var st_02;
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
                    /* IL_19: ret */
                    return ;
                }
            }
        };
    };;
    /* static System.Void Program.Main()*/
    asm.x600000e_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        CILJS.init_base_types();
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: call Void Test[A](System.Object)*/
        (asm1.x600000d(asm1.A()))(CILJS.newobj(t0,asm1.x600000a,[null]));
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: call Void Test[A](System.Object)*/
        (asm1.x600000d(asm1.A()))(CILJS.newobj(t1,asm1.x600000b,[null]));
        /* IL_14: newobj Void .ctor()*/
        /* IL_19: call Void Test[A](System.Object)*/
        (asm1.x600000d(asm1.A()))(CILJS.newobj(t2,asm1.x600000c,[null]));
        /* IL_1E: ldnull */
        /* IL_1F: call Void Test[A](System.Object)*/
        (asm1.x600000d(asm1.A()))(null);
        /* IL_24: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
