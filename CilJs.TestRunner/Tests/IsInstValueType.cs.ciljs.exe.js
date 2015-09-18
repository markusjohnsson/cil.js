var asm1;(function (asm)
{
    asm.FullName = "IsInstValueType.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static A Program.Get()*/
    asm.x6000001_init = function ()
    {
        (asm1.A().init)();
        asm.x6000001 = asm.x6000001_;
    };;
    asm.x6000001 = function ()
    {
        asm.x6000001_init.apply(this,arguments);
        return asm.x6000001_.apply(this,arguments);
    };;
    asm.x6000001_ = function Get()
    {
        var t0;
        var loc0;
        var loc1;
        t0 = asm1.A();
        loc0 = new (asm1.A())();
        /* IL_00: nop  */
        /* IL_01: ldloca.s 0 */
        /* IL_04: initobj A */
        loc0 = new t0();
        /* IL_09: ldloc.0  */
        /* IL_0A: stloc.1  */
        loc1 = loc0;
        /* IL_0D: ldloc.1  */
        /* IL_0E: ret  */
        return loc1;
    };
    /* static System.Void Program.Main()*/
    asm.x6000002_init = function ()
    {
        (asm1.A().init)();
        asm.x6000002 = asm.x6000002_;
    };;
    asm.x6000002 = function ()
    {
        asm.x6000002_init.apply(this,arguments);
        return asm.x6000002_.apply(this,arguments);
    };;
    asm.x6000002_ = function Main()
    {
        var t0;
        var t1;
        var loc0;
        CILJS.init_base_types();
        t0 = asm1.A();
        t1 = (asm0)["System.Boolean"]();
        /* IL_00: nop  */
        /* IL_01: call A Get() */
        /* IL_06: box A */
        /* IL_0B: stloc.0  */
        loc0 = {
            'boxed': CILJS.clone_value(asm1.x6000001()),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        };
        /* IL_0C: ldloc.0  */
        /* IL_0D: isinst A */
        /* IL_12: ldnull  */
        /* IL_14: cgt.un  */
        /* IL_15: box System.Boolean */
        /* IL_1A: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': ((t0.IsInst(loc0) !== null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1F: nop  */
        /* IL_20: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    asm.I = CILJS.declare_type(
        "I",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
        });
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm1.I()],
                {});
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
    asm.entryPoint = asm.x6000002;
})(asm1 || (asm1 = {}));
