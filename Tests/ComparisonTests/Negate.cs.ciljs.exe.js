var asm1;(function (asm)
{
    asm.FullName = "Negate.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        CILJS.init_base_types();
        /* IL_00: nop  */
        /* IL_01: ldc.i4.s 123 */
        /* IL_03: call Void Neg(System.Int32) */
        asm1.x6000002(123);
        /* IL_08: nop  */
        /* IL_09: ldc.i4.s 133 */
        /* IL_0B: call Void Neg(System.Int32) */
        asm1.x6000002(-123);
        /* IL_10: nop  */
        /* IL_11: ldc.i4 444123 */
        /* IL_16: call Void Neg(System.Int32) */
        asm1.x6000002(444123);
        /* IL_1B: nop  */
        /* IL_1C: ldc.i4 -518495 */
        /* IL_21: call Void Neg(System.Int32) */
        asm1.x6000002(-518495);
        /* IL_26: nop  */
        /* IL_27: ldc.r8 123 */
        /* IL_30: call Void Neg(System.Double) */
        asm1.x6000003(123);
        /* IL_35: nop  */
        /* IL_36: ldc.r8 -123 */
        /* IL_3F: call Void Neg(System.Double) */
        asm1.x6000003(-123);
        /* IL_44: nop  */
        /* IL_45: ldc.r8 444123 */
        /* IL_4E: call Void Neg(System.Double) */
        asm1.x6000003(444123);
        /* IL_53: nop  */
        /* IL_54: ldc.r8 -518495 */
        /* IL_5D: call Void Neg(System.Double) */
        asm1.x6000003(-518495);
        /* IL_62: nop  */
        /* IL_63: ret  */
        return ;
    };;
    /* static System.Void Program.Neg(Int32)*/
    asm.x6000002 = function Neg(arg0)
    {
        var t0;
        t0 = asm0["System.Int32"]();
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: neg  */
        /* IL_03: box System.Int32 */
        /* IL_08: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box((-(arg0)),t0));
        /* IL_0D: nop  */
        /* IL_0E: ret  */
        return ;
    };;
    /* static System.Void Program.Neg(Double)*/
    asm.x6000003 = function Neg(arg0)
    {
        var t0;
        t0 = asm0["System.Double"]();
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: neg  */
        /* IL_03: box System.Double */
        /* IL_08: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box((-(arg0)),t0));
        /* IL_0D: nop  */
        /* IL_0E: ret  */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
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
            return asm0["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],asm0["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
if (typeof module != "undefined"){
    module.exports = asm1;
}
//# sourceMappingURL=Negate.cs.ciljs.exe.js.map
