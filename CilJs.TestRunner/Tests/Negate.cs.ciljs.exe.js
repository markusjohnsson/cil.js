var asm2; (function (asm)
{
    asm.FullName = "Negate.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        CILJS.init_base_types();
        /* IL_00: ldc.i4.s 123*/
        /* IL_02: call Void Neg(System.Int32)*/
        asm2.x6000002((123|0));
        /* IL_07: ldc.i4.s 133*/
        /* IL_09: call Void Neg(System.Int32)*/
        asm2.x6000002((-123|0));
        /* IL_0E: ldc.i4 444123*/
        /* IL_13: call Void Neg(System.Int32)*/
        asm2.x6000002((444123|0));
        /* IL_18: ldc.i4 -518495*/
        /* IL_1D: call Void Neg(System.Int32)*/
        asm2.x6000002((-518495|0));
        /* IL_22: ldc.r8 123*/
        /* IL_2B: call Void Neg(System.Double)*/
        asm2.x6000003((+123));
        /* IL_30: ldc.r8 -123*/
        /* IL_39: call Void Neg(System.Double)*/
        asm2.x6000003((+-123));
        /* IL_3E: ldc.r8 444123*/
        /* IL_47: call Void Neg(System.Double)*/
        asm2.x6000003((+444123));
        /* IL_4C: ldc.r8 -518495*/
        /* IL_55: call Void Neg(System.Double)*/
        asm2.x6000003((+-518495));
        /* IL_5A: ret */
        return ;
    };;
    /* static System.Void Program.Neg(Int32)*/
    asm.x6000002 = function Neg(arg0)
    {
        var t0;
        t0 = (asm0)["System.Int32"]();
        /* IL_00: ldarg.0 */
        /* IL_01: neg */
        /* IL_02: box System.Int32*/
        /* IL_07: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (-(arg0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0C: ret */
        return ;
    };;
    /* static System.Void Program.Neg(Double)*/
    asm.x6000003 = function Neg(arg0)
    {
        var t0;
        t0 = (asm0)["System.Double"]();
        /* IL_00: ldarg.0 */
        /* IL_01: neg */
        /* IL_02: box System.Double*/
        /* IL_07: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (-(arg0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0C: ret */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
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
    asm.entryPoint = asm.x6000001;
})(asm2 || (asm2 = {}));
