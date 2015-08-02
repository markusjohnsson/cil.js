var asm2; (function (asm)
{
    asm.FullName = "GenericValueTypeArgAsThis.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.M<T>(T)*/
    asm.x6000001 = function (T)
    {
        return function M(arg0)
        {
            /* IL_00: ldarga.s 0*/
            /* IL_08: callvirt Type GetType()*/
            /* IL_0D: callvirt String get_FullName()*/
            /* IL_12: call Void Log(System.Object)*/
            asm1.x6000001((((asm0.x60000f2(CILJS.box(arg0,T)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.box(arg0,T))));
            /* IL_17: ret */
            return ;
        };
    };;
    /* static System.Void Program.Main()*/
    asm.x6000002 = function Main()
    {
        var t0;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        /* IL_00: ldc.i4.s 123*/
        /* IL_02: call Void M[System.Int32](System.Int32)*/
        (asm2.x6000001((asm0)["System.Int32"]()))((123|0));
        /* IL_07: ret */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
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
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000002;
})(asm2 || (asm2 = {}));
