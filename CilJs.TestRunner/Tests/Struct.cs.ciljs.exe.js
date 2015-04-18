var asm1; (function (asm)
{
    asm.FullName = "Struct.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        (asm1.S().init)();
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
        var t0;
        var t1;
        var loc0;
        var __pos__;
        t0 = asm1.S();
        t1 = (asm0)["System.Int32"]();
        loc0 = new (asm1.S())();
        __pos__ = 0x0;
        /* IL_00: ldloca.s 0*/
        /* IL_03: initobj S*/
        loc0 = new t0();
        /* IL_08: ldloca.s 0*/
        /* IL_0A: ldfld Int32 X*/
        /* IL_0F: box System.Int32*/
        /* IL_14: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': loc0.X,
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_19: ldloca.s 0*/
        /* IL_1B: ldfld Int32 Y*/
        /* IL_20: box System.Int32*/
        /* IL_25: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': loc0.Y,
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_2A: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000b = function _ctor(arg0)
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
    asm.S = CILJS.declare_type(
        "S",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"S",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.X = 0;
            this.prototype.Y = 0;
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
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
