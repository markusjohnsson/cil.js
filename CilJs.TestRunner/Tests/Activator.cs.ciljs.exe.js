var asm2; (function (asm)
{
    asm.FullName = "Activator.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Int32 A.X()*/
    asm.x6000001 = function X(arg0)
    {
        /* IL_00: ldc.i4.s 123*/
        /* IL_02: ret */
        return (123|0);
    };;
    /*  A..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000003_init = function ()
    {
        (asm2.A().init)();
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
        var t2;
        var loc0;
        CILJS.init_base_types();
        t0 = asm2.A();
        t1 = (asm0)["System.Boolean"]();
        t2 = (asm0)["System.Int32"]();
        /* IL_00: ldtoken A*/
        /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_0A: call Object CreateInstance(System.Type)*/
        /* IL_0F: castclass A*/
        /* IL_14: stloc.0 */
        loc0 = CILJS.cast_class(asm0.x6000002(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),t0);
        /* IL_15: ldtoken A*/
        /* IL_1A: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_1F: ldloc.0 */
        /* IL_20: callvirt Type GetType()*/
        /* IL_25: callvirt Boolean Equals(System.Object)*/
        /* IL_2A: box System.Boolean*/
        /* IL_2F: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60000f0"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),asm0.x60000f2(loc0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_34: ldloc.0 */
        /* IL_35: callvirt Int32 X()*/
        /* IL_3A: box System.Int32*/
        /* IL_3F: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm2.x6000001(loc0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_44: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
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
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm2, "x6000001", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000003;
})(asm2 || (asm2 = {}));
