var asm1;(function (asm)
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
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        st_00 = arg0;
        /* IL_02: dup  */
        st_05 = st_01 = st_00;
        /* IL_03: ldind.i4  */
        st_03 = st_01.r();
        /* IL_04: ldarg.0  */
        st_02 = arg0;
        /* IL_05: ldind.i4  */
        st_04 = st_02.r();
        /* IL_06: mul  */
        st_06 = st_03 * st_04;
        /* IL_07: stind.i4  */
        st_05.w(st_06);
        /* IL_08: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000002 = function Main()
    {
        var t0;
        var loc0;
        CILJS.init_base_types();
        t0 = asm0["System.Int32"]();
        /* IL_00: nop  */
        /* IL_01: ldc.i4.5  */
        /* IL_02: stloc.0  */
        loc0 = 5;
        /* IL_03: ldloca.s 0 */
        /* IL_05: conv.u  */
        /* IL_06: call Void SquarePtrParam(System.Int32*) */
        asm1.x6000001({
                w: function (v)
                {
                    loc0 = v;
                },
                r: function ()
                {
                    return loc0;
                }
            });
        /* IL_0B: nop  */
        /* IL_0C: ldloc.0  */
        /* IL_0D: box System.Int32 */
        /* IL_12: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(loc0,t0));
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
    asm.entryPoint = asm.x6000002;
})(asm1 || (asm1 = {}));
if (typeof module != "undefined"){
    module.exports = asm1;
}
//# sourceMappingURL=UnsafePointerArgument.cs.ciljs.exe.js.map
