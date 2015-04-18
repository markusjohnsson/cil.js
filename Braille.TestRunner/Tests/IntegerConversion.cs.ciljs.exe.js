var asm1; (function (asm)
{
    asm.FullName = "IntegerConversion.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000a_init = function ()
    {
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        CILJS.init_base_types();
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.r8 2*/
        /* IL_09: call Void Test(System.Double)*/
        asm1.x600000b((+2));
        /* IL_0E: ldc.r8 3*/
        /* IL_17: call Void Test(System.Double)*/
        asm1.x600000b((+3));
        /* IL_1C: ldc.r8 4*/
        /* IL_25: call Void Test(System.Double)*/
        asm1.x600000b((+4));
        /* IL_2A: ldc.r8 8*/
        /* IL_33: call Void Test(System.Double)*/
        asm1.x600000b((+8));
        /* IL_38: ret */
        return ;
    };
    /* static System.Void Program.Test(Double)*/
    asm.x600000b = function Test(arg0)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
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
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
