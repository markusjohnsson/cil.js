var asm1;(function (asm)
{
    asm.FullName = "FieldInitializers.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001_init = function ()
    {
        (asm1.Program().init)();
        asm.x6000001 = asm.x6000001_;
    };;
    asm.x6000001 = function ()
    {
        asm.x6000001_init();
        return asm.x6000001_();
    };;
    asm.x6000001_ = function Main()
    {
        var t0;
        var t1;
        CILJS.init_base_types();
        t0 = asm1.Program();
        t1 = asm0["System.Int32"]();
        /* IL_00: nop  */
        asm1.x6000003();
        /* IL_01: ldsfld Int32 X */
        /* IL_06: box System.Int32 */
        /* IL_0B: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(t0.X,t1));
        /* IL_10: nop  */
        asm1.x6000003();
        /* IL_11: newobj Void .ctor() */
        /* IL_16: ldfld Int32 Y */
        /* IL_1B: box System.Int32 */
        /* IL_20: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(CILJS.newobj(t0,asm1.x6000002,[null]).Y,t1));
        /* IL_25: nop  */
        /* IL_26: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldc.i4 321 */
        /* IL_06: stfld Int32 Y */
        arg0.Y = 321;
        /* IL_0B: ldarg.0  */
        /* IL_0C: call Void .ctor() */
        /* IL_11: nop  */
        /* IL_12: ret  */
        return ;
    };;
    /* static  Program..cctor()*/
    asm.x6000003_init = function ()
    {
        (asm1.Program().init)();
        asm.x6000003 = asm.x6000003_;
    };;
    asm.x6000003 = function ()
    {
        asm.x6000003_init();
        return asm.x6000003_();
    };;
    asm.x6000003_ = function _cctor()
    {
        var t0;
        
        if (asm1.Program().FieldsInitialized){
            return;
        }
        asm1.Program().FieldsInitialized = true;
        t0 = asm1.Program();
        /* IL_00: ldc.i4.s 123 */
        /* IL_02: stsfld Int32 X */
        t0.X = 123;
        /* IL_07: ret  */
        return ;
    };
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return asm0["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.X = 0;
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init();this.Y = 0 }");
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
if (typeof module != "undefined"){
    module.exports = asm1;
}
//# sourceMappingURL=FieldInitializers.cs.ciljs.exe.js.map
