var asm1;(function (asm)
{
    asm.FullName = "FieldInitializers.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000a_init = function ()
    {
        (asm1.Program().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        CILJS.init_base_types();
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
    {
        var t0;
        var t1;
        var __pos__;
        t0 = asm1.Program();
        t1 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop  FieldInitializers.cs:8:5*/
        asm1.x600000c();
        /* IL_01: ldsfld Int32 X */
        /* IL_06: box System.Int32 */
        /* IL_0B: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': t0.X,
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_10: nop  */
        asm1.x600000c();
        /* IL_11: newobj Void .ctor() */
        /* IL_16: ldfld Int32 Y */
        /* IL_1B: box System.Int32 */
        /* IL_20: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': CILJS.newobj(t0,asm1.x600000b,[null]).Y,
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_25: nop  */
        /* IL_26: ret  FieldInitializers.cs:11:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldc.i4 321 */
        /* IL_06: stfld Int32 Y */
        arg0.Y = (321|0);
        /* IL_0B: ldarg.0  */
        /* IL_0C: call Void .ctor() */
        /* IL_11: nop  */
        /* IL_12: ret  */
        return ;
    };;
    /* static  Program..cctor()*/
    asm.x600000c_init = function ()
    {
        (asm1.Program().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function _cctor()
    {
        var t0;
        var __pos__;
        
        if (asm1.Program().FieldsInitialized){
            return;
        }
        asm1.Program().FieldsInitialized = true;
        t0 = asm1.Program();
        __pos__ = 0x0;
        /* IL_00: ldc.i4.s 123 */
        /* IL_02: stsfld Int32 X */
        (t0)["X"] = (123|0);
        /* IL_07: ret  FieldInitializers.cs:16707566:0*/
        return ;
    };
    asm.TestLog = CILJS.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.X = 0;
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Y = 0;
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
