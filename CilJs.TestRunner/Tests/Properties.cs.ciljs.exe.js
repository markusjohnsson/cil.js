var asm2; (function (asm)
{
    asm.FullName = "Properties.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Int32 X.get_Y()*/
    asm.x6000001 = function get_Y(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 <Y>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["X<Y>k__BackingField"];
    };;
    /* System.Void X.set_Y(Int32)*/
    asm.x6000002 = function set_Y(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Int32 <Y>k__BackingField*/
        (arg0)["X<Y>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  X..ctor()*/
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
        (asm2.X().init)();
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
        t0 = asm2.X();
        t1 = (asm0)["System.Int32"]();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t0,asm2.x6000003,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: ldc.i4.s 123*/
        /* IL_09: callvirt Void set_Y(System.Int32)*/
        asm2.x6000002(loc0,(123|0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: callvirt Int32 get_Y()*/
        /* IL_14: box System.Int32*/
        /* IL_19: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm2.x6000001(loc0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1E: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.X = CILJS.declare_type(
        "X",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[
                    [asm2, "x6000001", "get_Y"],
                    [asm2, "x6000002", "set_Y"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            (this.prototype)["X<Y>k__BackingField"] = 0;
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
