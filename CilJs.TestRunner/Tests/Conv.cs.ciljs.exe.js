var asm1;(function (asm)
{
    asm.FullName = "Conv.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Test(Int64)*/
    asm.x6000001 = function Test(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.UInt32"]();
        t2 = (asm0)["System.Int64"]();
        t3 = (asm0)["System.UInt64"]();
        t4 = (asm0)["System.Double"]();
        /* IL_00: ldarg.0  */
        /* IL_01: conv.i4  */
        /* IL_02: box System.Int32 */
        /* IL_07: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': CILJS.to_number_signed(arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0C: ldarg.0  */
        /* IL_0D: conv.u4  */
        /* IL_0E: box System.UInt32 */
        /* IL_13: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': CILJS.to_number_signed(arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_18: ldarg.0  */
        /* IL_19: box System.Int64 */
        /* IL_1E: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': arg0,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_23: ldarg.0  */
        /* IL_24: box System.UInt64 */
        /* IL_29: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': arg0,
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_2E: ldarg.0  */
        /* IL_2F: conv.r8  */
        /* IL_30: box System.Double */
        /* IL_35: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': CILJS.to_number_signed(arg0),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_3A: ret  */
        return ;
    };;
    /* static System.Void Program.Test(UInt64)*/
    asm.x6000002 = function Test(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.UInt32"]();
        t2 = (asm0)["System.Int64"]();
        t3 = (asm0)["System.UInt64"]();
        t4 = (asm0)["System.Double"]();
        /* IL_00: ldarg.0  */
        /* IL_01: conv.i4  */
        /* IL_02: box System.Int32 */
        /* IL_07: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': CILJS.to_number_signed(arg0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0C: ldarg.0  */
        /* IL_0D: conv.u4  */
        /* IL_0E: box System.UInt32 */
        /* IL_13: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': CILJS.to_number_signed(arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_18: ldarg.0  */
        /* IL_19: box System.Int64 */
        /* IL_1E: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': arg0,
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_23: ldarg.0  */
        /* IL_24: box System.UInt64 */
        /* IL_29: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': arg0,
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_2E: ldarg.0  */
        /* IL_2F: conv.r.un  */
        /* IL_30: conv.r8  */
        /* IL_31: box System.Double */
        /* IL_36: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': CILJS.to_number_unsigned(arg0),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_3B: ret  */
        return ;
    };;
    /* static System.Void Program.Test(Int32)*/
    asm.x6000003 = function Test(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.UInt32"]();
        t2 = (asm0)["System.Int64"]();
        t3 = (asm0)["System.UInt64"]();
        t4 = (asm0)["System.Double"]();
        /* IL_00: ldarg.0  */
        /* IL_01: box System.Int32 */
        /* IL_06: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': arg0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0B: ldarg.0  */
        /* IL_0C: box System.UInt32 */
        /* IL_11: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': arg0,
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_16: ldarg.0  */
        /* IL_17: conv.i8  */
        /* IL_18: box System.Int64 */
        /* IL_1D: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': CILJS.conv_i8(arg0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_22: ldarg.0  */
        /* IL_23: conv.i8  */
        /* IL_24: box System.UInt64 */
        /* IL_29: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': CILJS.conv_i8(arg0),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
        /* IL_2E: ldarg.0  */
        /* IL_2F: conv.r8  */
        /* IL_30: box System.Double */
        /* IL_35: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': arg0,
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_3A: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000004 = function Main()
    {
        CILJS.init_base_types();
        /* IL_00: ldc.i4.1  */
        /* IL_01: conv.i8  */
        /* IL_02: call Void Test(System.Int64) */
        asm1.x6000001(CILJS.conv_i8((1|0)));
        /* IL_07: ldc.i4.m1  */
        /* IL_08: conv.i8  */
        /* IL_09: call Void Test(System.Int64) */
        asm1.x6000001(CILJS.conv_i8((-1|0)));
        /* IL_0E: ldc.i4.1  */
        /* IL_0F: conv.i8  */
        /* IL_10: call Void Test(System.UInt64) */
        asm1.x6000002(CILJS.conv_i8((1|0)));
        /* IL_15: ldc.i4.1  */
        /* IL_16: call Void Test(System.Int32) */
        asm1.x6000003((1|0));
        /* IL_1B: ldc.i4.m1  */
        /* IL_1C: call Void Test(System.Int32) */
        asm1.x6000003((-1|0));
        /* IL_21: ret  */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000005 = function _ctor(arg0)
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
    asm.entryPoint = asm.x6000004;
})(asm1 || (asm1 = {}));
