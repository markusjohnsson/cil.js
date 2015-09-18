var asm1;(function (asm)
{
    asm.FullName = "UnsafePointerArgument.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.SquarePtrParam(Int32*)*/
    asm.x6000001 = function SquarePtrParam(arg0)
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: stloc.0  */
        loc0 = arg0;
        /* IL_03: ldloc.0  */
        /* IL_04: ldloc.0  */
        /* IL_05: ldind.i4  */
        /* IL_06: ldarg.0  */
        /* IL_07: ldind.i4  */
        /* IL_08: mul  */
        /* IL_09: stind.i4  */
        loc0.w(loc0.r() * arg0.r());
        /* IL_0A: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000002 = function Main()
    {
        var t0;
        var loc0;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        /* IL_00: nop  */
        /* IL_01: ldc.i4.5  */
        /* IL_02: stloc.0  */
        loc0 = (5|0);
        /* IL_03: ldloca.s 0 */
        /* IL_05: conv.u  */
        /* IL_06: call Void SquarePtrParam(System.Int32*) */
        asm1.x6000001({
                'w': function (v)
                {
                    loc0 = v;
                },
                'r': function ()
                {
                    return loc0;
                }
            });
        /* IL_0B: nop  */
        /* IL_0C: ldloc.0  */
        /* IL_0D: box System.Int32 */
        /* IL_12: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': loc0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_17: nop  */
        /* IL_18: ret  */
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000002;
})(asm1 || (asm1 = {}));
