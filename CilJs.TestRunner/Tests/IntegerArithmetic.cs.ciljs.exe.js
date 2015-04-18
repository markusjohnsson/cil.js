var asm1;(function (asm)
{
    asm.FullName = "IntegerArithmetic.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        /* IL_00: nop  IntegerArithmetic.cs:6:5*/
        /* IL_01: ldc.i4.0  */
        /* IL_02: call Void X(System.Int32) */
        asm1.x600000b((0|0));
        /* IL_07: nop  */
        /* IL_08: ldc.i4.1  */
        /* IL_09: call Void X(System.Int32) */
        asm1.x600000b((1|0));
        /* IL_0E: nop  */
        /* IL_0F: ldc.i4.2  */
        /* IL_10: call Void X(System.Int32) */
        asm1.x600000b((2|0));
        /* IL_15: nop  */
        /* IL_16: ldc.i4.3  */
        /* IL_17: call Void X(System.Int32) */
        asm1.x600000b((3|0));
        /* IL_1C: nop  */
        /* IL_1D: ret  IntegerArithmetic.cs:11:5*/
        return ;
    };
    /* static System.Void Program.X(Int32)*/
    asm.x600000b = function X(arg0)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop  IntegerArithmetic.cs:14:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldc.i4.1  */
        /* IL_03: div  */
        /* IL_04: box System.Int32 */
        /* IL_09: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (arg0 / (1|0)) | (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0E: nop  */
        /* IL_0F: ldarg.0  */
        /* IL_10: ldc.i4.2  */
        /* IL_11: div  */
        /* IL_12: box System.Int32 */
        /* IL_17: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (arg0 / (2|0)) | (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_1C: nop  */
        /* IL_1D: ldarg.0  */
        /* IL_1E: ldc.i4.3  */
        /* IL_1F: div  */
        /* IL_20: box System.Int32 */
        /* IL_25: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (arg0 / (3|0)) | (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_2A: nop  */
        /* IL_2B: ret  IntegerArithmetic.cs:18:5*/
        return ;
    };;
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
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
