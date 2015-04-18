var asm1; (function (asm)
{
    asm.FullName = "Activator.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.Int32 A.X()*/
    asm.x600000a = function X(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.s 123*/
        /* IL_02: ret */
        return (123|0);
    };;
    /*  A..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000c_init = function ()
    {
        (asm1.A().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        CILJS.init_base_types();
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var loc0;
        t0 = asm1.A();
        t1 = (asm0)["System.Boolean"]();
        t2 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: ldtoken A*/
        /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_0A: call Object CreateInstance(System.Type)*/
        /* IL_0F: castclass A*/
        /* IL_14: stloc.0 */
        loc0 = CILJS.cast_class(asm0.x6000060(asm0.x60000e1(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),t0);
        /* IL_15: ldtoken A*/
        /* IL_1A: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_1F: ldloc.0 */
        /* IL_20: callvirt Type GetType()*/
        /* IL_25: callvirt Boolean Equals(System.Object)*/
        /* IL_2A: box System.Boolean*/
        /* IL_2F: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x60000e1(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x6000008"])())(asm0.x60000e1(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),asm0.x600000a(loc0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_34: ldloc.0 */
        /* IL_35: callvirt Int32 X()*/
        /* IL_3A: box System.Int32*/
        /* IL_3F: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000a(loc0),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_44: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000d = function _ctor(arg0)
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
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x600000a", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
