var asm2; (function (asm)
{
    asm.FullName = "IntegerConversion.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        CILJS.init_base_types();
        /* IL_00: ldc.r8 2*/
        /* IL_09: call Void Test(System.Double)*/
        asm2.x6000002((+2));
        /* IL_0E: ldc.r8 3*/
        /* IL_17: call Void Test(System.Double)*/
        asm2.x6000002((+3));
        /* IL_1C: ldc.r8 4*/
        /* IL_25: call Void Test(System.Double)*/
        asm2.x6000002((+4));
        /* IL_2A: ldc.r8 8*/
        /* IL_33: call Void Test(System.Double)*/
        asm2.x6000002((+8));
        /* IL_38: ret */
        return ;
    };;
    /* static System.Void Program.Test(Double)*/
    asm.x6000002 = function Test(arg0)
    {
        var t0;
        t0 = (asm0)["System.Boolean"]();
        /* IL_00: ldarg.0 */
        /* IL_01: call Double Sqrt(System.Double)*/
        /* IL_06: conv.i4 */
        /* IL_07: ldc.i4.1 */
        /* IL_09: ceq */
        /* IL_0A: box System.Boolean*/
        /* IL_0F: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((Math.sqrt(arg0) | (0|0)) === (1|0)) ? (1) : (0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_14: ldarg.0 */
        /* IL_15: call Double Sqrt(System.Double)*/
        /* IL_1A: conv.i4 */
        /* IL_1B: ldc.i4.2 */
        /* IL_1D: ceq */
        /* IL_1E: box System.Boolean*/
        /* IL_23: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((Math.sqrt(arg0) | (0|0)) === (2|0)) ? (1) : (0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_28: ldarg.0 */
        /* IL_29: call Double Sqrt(System.Double)*/
        /* IL_2E: conv.i4 */
        /* IL_2F: ldc.i4.3 */
        /* IL_31: ceq */
        /* IL_32: box System.Boolean*/
        /* IL_37: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((Math.sqrt(arg0) | (0|0)) === (3|0)) ? (1) : (0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_3C: ret */
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
    asm.entryPoint = asm.x6000001;
})(asm2 || (asm2 = {}));
