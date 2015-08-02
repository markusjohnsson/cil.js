var asm2; (function (asm)
{
    asm.FullName = "IsInstGenericMethod.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Test<T>(Object)*/
    asm.x6000004 = function (T)
    {
        return function Test(arg0)
        {
            var t0;
            var st_02;
            var in_block_0;
            var __pos__;
            t0 = T;
            in_block_0 = true;
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
    asm.x6000005_init = function ()
    {
        (asm2.A().init)();
        (asm2.B().init)();
        (asm2.C().init)();
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
        CILJS.init_base_types();
        t0 = asm2.A();
        t1 = asm2.B();
        t2 = asm2.C();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: call Void Test[A](System.Object)*/
        (asm2.x6000004(asm2.A()))(CILJS.newobj(t0,asm2.x6000001,[null]));
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: call Void Test[A](System.Object)*/
        (asm2.x6000004(asm2.A()))(CILJS.newobj(t1,asm2.x6000002,[null]));
        /* IL_14: newobj Void .ctor()*/
        /* IL_19: call Void Test[A](System.Object)*/
        (asm2.x6000004(asm2.A()))(CILJS.newobj(t2,asm2.x6000003,[null]));
        /* IL_1E: ldnull */
        /* IL_1F: call Void Test[A](System.Object)*/
        (asm2.x6000004(asm2.A()))(null);
        /* IL_24: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
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
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm2.A(),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000005;
})(asm2 || (asm2 = {}));
