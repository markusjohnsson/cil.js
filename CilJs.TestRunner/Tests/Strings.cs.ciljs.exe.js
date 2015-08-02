var asm2; (function (asm)
{
    asm.FullName = "Strings.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.String A.get_X()*/
    asm.x6000001 = function get_X(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld String <X>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A<X>k__BackingField"];
    };;
    /* System.Void A.set_X(String)*/
    asm.x6000002 = function set_X(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <X>k__BackingField*/
        (arg0)["A<X>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  A..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000004_init = function ()
    {
        (asm2.A().init)();
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
        var loc0;
        CILJS.init_base_types();
        t0 = asm2.A();
        t1 = (asm0)["System.Int32"]();
        /* IL_00: call String GetString()*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(asm2.x6000006());
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: stloc.0 */
        loc0 = CILJS.newobj(t0,asm2.x6000003,[null]);
        /* IL_10: ldloc.0 */
        /* IL_11: ldstr 300*/
        /* IL_16: callvirt Void set_X(System.String)*/
        asm2.x6000002(loc0,CILJS.new_string("300"));
        /* IL_1B: ldloc.0 */
        /* IL_1C: callvirt String get_X()*/
        /* IL_21: call Void Log(System.Object)*/
        asm1.x6000001(asm2.x6000001(loc0));
        /* IL_26: ldloc.0 */
        /* IL_27: callvirt String get_X()*/
        /* IL_2C: call String IsString(System.Object)*/
        /* IL_31: call Void Log(System.Object)*/
        asm1.x6000001(asm2.x6000005(asm2.x6000001(loc0)));
        /* IL_36: ldstr 123456789*/
        /* IL_3B: callvirt Int32 get_Length()*/
        /* IL_40: box System.Int32*/
        /* IL_45: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm0.x600012f(CILJS.new_string("123456789")),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_4A: ret */
        return ;
    };
    /* static System.String Program.IsString(Object)*/
    asm.x6000005 = function IsString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.String"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: isinst System.String*/
                /* IL_06: brtrue.s IL_0E*/
                
                if (t0.IsInst(arg0)){
                    __pos__ = 0xE;
                    continue;
                }
                /* IL_08: ldstr false*/
                /* IL_0D: ret */
                return CILJS.new_string("false");
                case 0xE:
                /* IL_0E: ldstr true*/
                /* IL_13: ret */
                return CILJS.new_string("true");
            }
        }
    };;
    /* static System.String Program.GetString()*/
    asm.x6000006 = function GetString()
    {
        /* IL_00: ldstr Hello*/
        /* IL_05: ret */
        return CILJS.new_string("Hello");
    };;
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm2, "x6000001", "get_X"],
                    [asm2, "x6000002", "set_X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            (this.prototype)["A<X>k__BackingField"] = null;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000004;
})(asm2 || (asm2 = {}));
