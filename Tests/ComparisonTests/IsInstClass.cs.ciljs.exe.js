var asm1;(function (asm)
{
    asm.FullName = "IsInstClass.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000001(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
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
        asm.x6000003_init();
        return asm.x6000003_();
    };;
    asm.x6000003_ = function Main()
    {
        var t0;
        var t1;
        CILJS.init_base_types();
        t0 = asm1.A();
        t1 = asm1.B();
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        /* IL_06: call Void Isa(System.Object) */
        asm1.x6000004(CILJS.newobj(t0,asm1.x6000001,[null]));
        /* IL_0B: nop  */
        /* IL_0C: newobj Void .ctor() */
        /* IL_11: call Void Isa(System.Object) */
        asm1.x6000004(CILJS.newobj(t1,asm1.x6000002,[null]));
        /* IL_16: nop  */
        /* IL_17: ldstr hello */
        /* IL_1C: call Void Isa(System.Object) */
        asm1.x6000004(CILJS.new_string("hello"));
        /* IL_21: nop  */
        /* IL_22: ret  */
        return ;
    };
    /* static System.Void Program.Isa(Object)*/
    asm.x6000004_init = function (arg0)
    {
        (asm1.A().init)();
        asm.x6000004 = asm.x6000004_;
    };;
    asm.x6000004 = function (arg0)
    {
        asm.x6000004_init(arg0);
        return asm.x6000004_(arg0);
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
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: isinst A */
                /* IL_07: brtrue.s IL_10 */
                
                if (t0.IsInst(arg0)){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_09: ldstr false */
                st_03 = CILJS.new_string("false");
                /* IL_0E: br.s IL_15 */
                __pos__ = 0x15;
                continue;
                case 0x10:
                /* IL_10: ldstr true */
                st_03 = CILJS.new_string("true");
                case 0x15:
                /* IL_15: ldc.i4.0  */
                st_02 = (0|0);
                /* IL_16: newarr System.Object */
                st_04 = CILJS.new_array(t1,st_02);
                /* IL_1B: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(st_03,st_04);
                /* IL_20: nop  */
                
                /* IL_21: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function A() { c.init(); }");
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
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function B() { c.init(); }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000003;
})(asm1 || (asm1 = {}));
if (module){
    module.exports = asm1;
}