var asm2;(function (asm)
{
    asm.FullName = "FieldInitializers.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001_init = function ()
    {
        (asm2.Program().init)();
        asm.x6000001 = asm.x6000001_;
    };;
    asm.x6000001 = function ()
    {
        asm.x6000001_init.apply(this,arguments);
        return asm.x6000001_.apply(this,arguments);
    };;
    asm.x6000001_ = function Main()
    {
        var t0;
        var t1;
        CILJS.init_base_types();
        t0 = asm2.Program();
        t1 = (asm0)["System.Int32"]();
        asm2.x6000003();
        /* IL_00: ldsfld Int32 X */
        /* IL_05: box System.Int32 */
        /* IL_0A: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': t0.X,
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        asm2.x6000003();
        /* IL_0F: newobj Void .ctor() */
        /* IL_14: ldfld Int32 Y */
        /* IL_19: box System.Int32 */
        /* IL_1E: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': CILJS.newobj(t0,asm2.x6000002,[null]).Y,
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_23: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldc.i4 321 */
        /* IL_06: stfld Int32 Y */
        arg0.Y = (321|0);
        /* IL_0B: ldarg.0  */
        /* IL_0C: call Void .ctor() */
        /* IL_11: ret  */
        return ;
    };;
    /* static  Program..cctor()*/
    asm.x6000003_init = function ()
    {
        (asm2.Program().init)();
        asm.x6000003 = asm.x6000003_;
    };;
    asm.x6000003 = function ()
    {
        asm.x6000003_init.apply(this,arguments);
        return asm.x6000003_.apply(this,arguments);
    };;
    asm.x6000003_ = function _cctor()
    {
        var t0;
        
        if (asm2.Program().FieldsInitialized){
            return;
        }
        asm2.Program().FieldsInitialized = true;
        t0 = asm2.Program();
        /* IL_00: ldc.i4.s 123 */
        /* IL_02: stsfld Int32 X */
        (t0)["X"] = (123|0);
        /* IL_07: ret  */
        return ;
    };
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.X = 0;
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.Y = 0;
        });
    asm.entryPoint = asm.x6000001;
})(asm2 || (asm2 = {}));
