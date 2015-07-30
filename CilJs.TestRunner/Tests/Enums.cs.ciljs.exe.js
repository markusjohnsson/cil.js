var asm2; (function (asm)
{
    asm.FullName = "Enums.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        var t0;
        var loc0;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        /* IL_00: ldc.i4.0 */
        /* IL_01: stloc.0 */
        loc0 = (0|0);
        /* IL_02: ldloc.0 */
        /* IL_03: box System.Int32*/
        /* IL_08: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': loc0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0D: ldc.i4.0 */
        /* IL_0E: stloc.0 */
        loc0 = (0|0);
        /* IL_0F: ldloc.0 */
        /* IL_10: box System.Int32*/
        /* IL_15: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': loc0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_1A: ldc.i4.1 */
        /* IL_1B: stloc.0 */
        loc0 = (1|0);
        /* IL_1C: ldloc.0 */
        /* IL_1D: box System.Int32*/
        /* IL_22: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': loc0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_27: ldc.i4.2 */
        /* IL_28: stloc.0 */
        loc0 = (2|0);
        /* IL_29: ldloc.0 */
        /* IL_2A: box System.Int32*/
        /* IL_2F: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': loc0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_34: ret */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.X = CILJS.declare_type(
        "X",
        [],
        function ()
        {
            return new ((asm0)["System.Enum"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"X",true,false,false,false,false,[],[],(asm0)["System.Enum"](),CILJS.is_inst_value_type(this),Array,"asm2.t2000002");
            this.A = new (asm2.X())();
            this.B = new (asm2.X())();
            this.C = new (asm2.X())();
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.value__ = 0;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm2 || (asm2 = {}));
