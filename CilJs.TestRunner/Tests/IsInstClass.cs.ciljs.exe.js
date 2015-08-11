var asm1;(function (asm)
{
    asm.FullName = "IsInstClass.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static System.Void Program.Main()*/
    asm.x6000003_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
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
        t0 = asm1.A();
        t1 = asm1.B();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: call Void Isa(System.Object) */
        asm1.x6000004(CILJS.newobj(t0,asm1.x6000001,[null]));
        /* IL_0A: newobj Void .ctor() */
        /* IL_0F: call Void Isa(System.Object) */
        asm1.x6000004(CILJS.newobj(t1,asm1.x6000002,[null]));
        /* IL_14: ldstr hello */
        /* IL_19: call Void Isa(System.Object) */
        asm1.x6000004(CILJS.new_string("hello"));
        /* IL_1E: ret  */
        return ;
    };
    /* static System.Void Program.Isa(Object)*/
    asm.x6000004_init = function ()
    {
        (asm1.A().init)();
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
    /*  Program..ctor()*/
    asm.x6000005 = function _ctor(arg0)
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000003;
})(asm1 || (asm1 = {}));
