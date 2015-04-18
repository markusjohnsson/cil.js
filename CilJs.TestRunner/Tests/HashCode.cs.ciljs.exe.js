var asm1;(function (asm)
{
    asm.FullName = "HashCode.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  A..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000b_init = function ()
    {
        (asm1.A().init)();
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
        var t1;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        t0 = asm1.A();
        t1 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        /* IL_00: nop  HashCode.cs:7:5*/
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x600000a,[null]);
        /* IL_07: ldloc.0  */
        /* IL_08: callvirt Int32 GetHashCode() */
        /* IL_0D: stloc.1  */
        loc1 = ((loc0.vtable)["asm0.x6000009"]())(loc0);
        /* IL_0E: ldloc.1  */
        /* IL_0F: ldc.i4.0  */
        /* IL_11: ceq  */
        /* IL_12: ldc.i4.0  */
        /* IL_14: ceq  */
        /* IL_15: box System.Boolean */
        /* IL_1A: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((((loc1 === (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1F: nop  */
        /* IL_20: ldloc.1  */
        /* IL_21: ldloc.0  */
        /* IL_22: callvirt Int32 GetHashCode() */
        /* IL_28: ceq  */
        /* IL_29: box System.Boolean */
        /* IL_2E: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((loc1 === ((loc0.vtable)["asm0.x6000009"]())(loc0)) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_33: nop  */
        /* IL_34: newobj Void .ctor() */
        /* IL_39: stloc.2  */
        loc2 = CILJS.newobj(t0,asm1.x600000a,[null]);
        /* IL_3A: ldloc.2  */
        /* IL_3B: callvirt Int32 GetHashCode() */
        /* IL_40: ldloc.2  */
        /* IL_41: callvirt Int32 GetHashCode() */
        /* IL_47: ceq  */
        /* IL_48: box System.Boolean */
        /* IL_4D: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((((loc2.vtable)["asm0.x6000009"]())(loc2) === ((loc2.vtable)["asm0.x6000009"]())(loc2)) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_52: nop  */
        /* IL_53: ldloc.2  */
        /* IL_54: callvirt Int32 GetHashCode() */
        /* IL_59: ldloc.0  */
        /* IL_5A: callvirt Int32 GetHashCode() */
        /* IL_60: ceq  */
        /* IL_61: ldc.i4.0  */
        /* IL_63: ceq  */
        /* IL_64: box System.Boolean */
        /* IL_69: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((((((loc2.vtable)["asm0.x6000009"]())(loc2) === ((loc0.vtable)["asm0.x6000009"]())(loc0)) ? (1) : (0)) === (0|0)) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_6E: nop  */
        /* IL_6F: ldstr hello */
        /* IL_74: call Void TestString(System.String) */
        asm1.x600000c(CILJS.new_string("hello"));
        /* IL_79: nop  */
        /* IL_7A: ret  HashCode.cs:18:5*/
        return ;
    };
    /* static System.Void Program.TestString(String)*/
    asm.x600000c = function TestString(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        /* IL_00: nop  HashCode.cs:21:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldstr  world */
        /* IL_07: call String Concat(System.String, System.String) */
        /* IL_0C: stloc.0  */
        loc0 = asm0.x60001bb(arg0,CILJS.new_string(" world"));
        /* IL_0D: ldstr hello world */
        /* IL_12: stloc.1  */
        loc1 = CILJS.new_string("hello world");
        /* IL_13: ldloc.0  */
        /* IL_14: callvirt Int32 GetHashCode() */
        /* IL_19: ldloc.1  */
        /* IL_1A: callvirt Int32 GetHashCode() */
        /* IL_20: ceq  */
        /* IL_21: box System.Boolean */
        /* IL_26: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((((loc0.vtable)["asm0.x6000009"]())(loc0) === ((loc1.vtable)["asm0.x6000009"]())(loc1)) ? (1) : (0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_2B: nop  */
        /* IL_2C: ldloc.0  */
        /* IL_2D: callvirt Int32 GetHashCode() */
        /* IL_32: ldarg.0  */
        /* IL_33: callvirt Int32 GetHashCode() */
        /* IL_39: ceq  */
        /* IL_3A: box System.Boolean */
        /* IL_3F: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((((loc0.vtable)["asm0.x6000009"]())(loc0) === ((arg0.vtable)["asm0.x6000009"]())(arg0)) ? (1) : (0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_44: nop  */
        /* IL_45: ret  HashCode.cs:27:5*/
        return ;
    };;
    /*  Program..ctor()*/
    asm.x600000d = function _ctor(arg0)
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
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
    asm.entryPoint = asm.x600000b;
})(asm1 || (asm1 = {}));
