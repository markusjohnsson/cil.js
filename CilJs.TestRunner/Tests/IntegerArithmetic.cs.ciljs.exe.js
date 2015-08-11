var asm1;(function (asm)
{
    asm.FullName = "IntegerArithmetic.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        CILJS.init_base_types();
        /* IL_00: ldc.i4.0  */
        /* IL_01: call Void X(System.Int32) */
        asm1.x6000002((0|0));
        /* IL_06: ldc.i4.1  */
        /* IL_07: call Void X(System.Int32) */
        asm1.x6000002((1|0));
        /* IL_0C: ldc.i4.2  */
        /* IL_0D: call Void X(System.Int32) */
        asm1.x6000002((2|0));
        /* IL_12: ldc.i4.3  */
        /* IL_13: call Void X(System.Int32) */
        asm1.x6000002((3|0));
        /* IL_18: ret  */
        return ;
    };;
    /* static System.Void Program.X(Int32)*/
    asm.x6000002 = function X(arg0)
    {
        var t0;
        t0 = (asm0)["System.Int32"]();
        /* IL_00: ldarg.0  */
        /* IL_01: ldc.i4.1  */
        /* IL_02: div  */
        /* IL_03: box System.Int32 */
        /* IL_08: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (arg0 / (1|0)) | (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0D: ldarg.0  */
        /* IL_0E: ldc.i4.2  */
        /* IL_0F: div  */
        /* IL_10: box System.Int32 */
        /* IL_15: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (arg0 / (2|0)) | (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_1A: ldarg.0  */
        /* IL_1B: ldc.i4.3  */
        /* IL_1C: div  */
        /* IL_1D: box System.Int32 */
        /* IL_22: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (arg0 / (3|0)) | (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_27: ret  */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
