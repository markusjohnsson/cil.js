var asm2;(function (asm)
{
    asm.FullName = "Struct.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001_init = function ()
    {
        (asm2.S().init)();
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
        var loc0;
        CILJS.init_base_types();
        t0 = asm2.S();
        t1 = (asm0)["System.Int32"]();
        loc0 = new (asm2.S())();
        /* IL_00: ldloca.s 0 */
        /* IL_03: initobj S */
        loc0 = new t0();
        /* IL_08: ldloca.s 0 */
        /* IL_0A: ldfld Int32 X */
        /* IL_0F: box System.Int32 */
        /* IL_14: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': loc0.X,
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_19: ldloca.s 0 */
        /* IL_1B: ldfld Int32 Y */
        /* IL_20: box System.Int32 */
        /* IL_25: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': loc0.Y,
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_2A: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.S = CILJS.declare_type(
        "S",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"S",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.X = 0;
            this.prototype.Y = 0;
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
    asm.entryPoint = asm.x6000001;
})(asm2 || (asm2 = {}));