var asm2; (function (asm)
{
    asm.FullName = "UnsafePointerArgument.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.SquarePtrParam(Int32*)*/
    asm.x6000001 = function SquarePtrParam(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: dup */
        st_05 = (st_01 = st_00);
        /* IL_02: ldind.i4 */
        st_03 = st_01.r();
        /* IL_03: ldarg.0 */
        st_02 = arg0;
        /* IL_04: ldind.i4 */
        st_04 = st_02.r();
        /* IL_05: mul */
        st_06 = (st_03 * st_04);
        /* IL_06: stind.i4 */
        st_05.w(st_06);
        /* IL_07: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000002 = function Main()
    {
        var t0;
        var loc0;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        /* IL_00: ldc.i4.5 */
        /* IL_01: stloc.0 */
        loc0 = (5|0);
        /* IL_02: ldloca.s 0*/
        /* IL_04: conv.u */
        /* IL_05: call Void SquarePtrParam(System.Int32*)*/
        asm2.x6000001({
                'w': function (v)
                {
                    loc0 = v;
                },
                'r': function ()
                {
                    return loc0;
                }
            });
        /* IL_0A: ldloc.0 */
        /* IL_0B: box System.Int32*/
        /* IL_10: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': loc0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_15: ret */
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
            return new ((asm0)["System.Object"]())();
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
