var asm1;(function (asm)
{
    asm.FullName = "IsInstGenericMethod.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static System.Void Program.Test<T>(Object)*/
    asm.x6000004 = function (T)
    {
        return function Test(arg0)
        {
            var t0;
            var t1;
            var st_02;
            var st_03;
            var st_04;
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
                    /* IL_06: brtrue.s IL_0F */
                    
                    if (t0.IsInst(arg0)){
                        __pos__ = 0xF;
                        continue;
                    }
                    /* IL_08: ldstr false */
                    st_03 = CILJS.new_string("false");
                    /* IL_0D: br.s IL_14 */
                    __pos__ = 0x14;
                    continue;
                    case 0xF:
                    /* IL_0F: ldstr true */
                    st_03 = CILJS.new_string("true");
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
    };;
    /* static System.Void Program.Main()*/
    asm.x6000005_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
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
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: call Void Test[A](System.Object) */
        (asm1.x6000004(asm1.A()))(CILJS.newobj(t0,asm1.x6000001,[null]));
        /* IL_0A: newobj Void .ctor() */
        /* IL_0F: call Void Test[A](System.Object) */
        (asm1.x6000004(asm1.A()))(CILJS.newobj(t1,asm1.x6000002,[null]));
        /* IL_14: newobj Void .ctor() */
        /* IL_19: call Void Test[A](System.Object) */
        (asm1.x6000004(asm1.A()))(CILJS.newobj(t2,asm1.x6000003,[null]));
        /* IL_1E: ldnull  */
        /* IL_1F: call Void Test[A](System.Object) */
        (asm1.x6000004(asm1.A()))(null);
        /* IL_24: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000006 = function _ctor(arg0)
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
    asm.entryPoint = asm.x6000005;
})(asm1 || (asm1 = {}));
