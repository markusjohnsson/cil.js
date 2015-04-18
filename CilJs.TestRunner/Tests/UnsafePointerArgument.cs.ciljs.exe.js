var asm1;(function (asm)
{
    asm.FullName = "UnsafePointerArgument.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.SquarePtrParam(Int32*)*/
    asm.x600000a = function SquarePtrParam(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  UnsafePointerArgument.cs:7:5*/
        /* IL_01: ldarg.0  UnsafePointerArgument.cs:8:9*/
        st_00 = arg0;
        /* IL_02: dup  */
        st_05 = (st_01 = st_00);
        /* IL_03: ldind.i4  */
        st_03 = st_01.r();
        /* IL_04: ldarg.0  */
        st_02 = arg0;
        /* IL_05: ldind.i4  */
        st_04 = st_02.r();
        /* IL_06: mul  */
        st_06 = (st_03 * st_04);
        /* IL_07: stind.i4  */
        st_05.w(st_06);
        /* IL_08: ret  UnsafePointerArgument.cs:9:5*/
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000b_init = function ()
    {
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function ()
    {
        CILJS.init_base_types();
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function Main()
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop  UnsafePointerArgument.cs:12:5*/
        /* IL_01: ldc.i4.5  */
        /* IL_02: stloc.0  */
        loc0 = (5|0);
        /* IL_03: ldloca.s 0 */
        /* IL_05: conv.u  */
        /* IL_06: call Void SquarePtrParam(System.Int32*) */
        asm1.x600000a({
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
        /* IL_12: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': loc0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_17: nop  */
        /* IL_18: ret  UnsafePointerArgument.cs:17:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.TestLog = CILJS.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000b;
})(asm1 || (asm1 = {}));
