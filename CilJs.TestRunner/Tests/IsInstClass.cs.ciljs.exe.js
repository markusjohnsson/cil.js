var asm2; (function (asm)
{
    asm.FullName = "IsInstClass.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static System.Void Program.Main()*/
    asm.x6000003_init = function ()
    {
        (asm2.A().init)();
        (asm2.B().init)();
        asm.x6000003 = asm.x6000003_;
    };;
    asm.x6000003 = function ()
    {
        asm.x6000003_init.apply(this,arguments);
        return asm.x6000003_.apply(this,arguments);
    };;
    asm.x6000003_ = function Main()
    {
        var t0;
        var t1;
        CILJS.init_base_types();
        t0 = asm2.A();
        t1 = asm2.B();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: call Void Isa(System.Object)*/
        asm2.x6000004(CILJS.newobj(t0,asm2.x6000001,[null]));
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: call Void Isa(System.Object)*/
        asm2.x6000004(CILJS.newobj(t1,asm2.x6000002,[null]));
        /* IL_14: ldstr hello*/
        /* IL_19: call Void Isa(System.Object)*/
        asm2.x6000004(CILJS.new_string("hello"));
        /* IL_1E: ret */
        return ;
    };
    /* static System.Void Program.Isa(Object)*/
    asm.x6000004_init = function ()
    {
        (asm2.A().init)();
        asm.x6000004 = asm.x6000004_;
    };;
    asm.x6000004 = function (arg0)
    {
        asm.x6000004_init.apply(this,arguments);
        return asm.x6000004_.apply(this,arguments);
    };;
    asm.x6000004_ = function Isa(arg0)
    {
        var t0;
        var st_02;
        var in_block_0;
        var __pos__;
        t0 = asm2.A();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: isinst A*/
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
    /*  Program..ctor()*/
    asm.x6000005 = function _ctor(arg0)
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000003;
})(asm2 || (asm2 = {}));
