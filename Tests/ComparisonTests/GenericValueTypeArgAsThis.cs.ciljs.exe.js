var asm1;(function (asm)
{
    asm.FullName = "GenericValueTypeArgAsThis.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.M<T>(T)*/
    asm.x6000001 = function (T)
    {
        return function M(arg0)
        {
            var t0;
            t0 = (asm0)["System.Object"]();
            /* IL_00: nop  */
            /* IL_01: ldarga.s 0 */
            /* IL_09: callvirt Type GetType() */
            /* IL_0E: callvirt String get_FullName() */
            /* IL_13: ldc.i4.0  */
            /* IL_14: newarr System.Object */
            /* IL_19: call Void WriteLine(System.String, System.Object[]) */
            asm0.x60000a2(((asm0.x60000cf(CILJS.box(arg0,T)).vtable)["asm0.x6000073"])(asm0.x60000cf(CILJS.box(arg0,T))),CILJS.new_array(t0,(0|0)));
            /* IL_1E: nop  */
            /* IL_1F: ret  */
            return ;
        };
    };;
    /* static System.Void Program.Main()*/
    asm.x6000002 = function Main()
    {
        var t0;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        /* IL_00: nop  */
        /* IL_01: ldc.i4.s 123 */
        /* IL_03: call Void M[System.Int32](System.Int32) */
        (asm1.x6000001((asm0)["System.Int32"]()))((123|0));
        /* IL_08: nop  */
        /* IL_09: ret  */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000002;
})(asm1 || (asm1 = {}));
if (module){
    module.exports = asm1;
}
