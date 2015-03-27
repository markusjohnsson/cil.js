var asm1; (function (asm)
{
    asm.FullName = "HashCode.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
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
    /*  A..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000b_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.A().init)();
        ((asm0)["System.Boolean"]().init)();
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function ()
    {
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.A();
        t2 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = BLR.newobj(t1,asm1.x600000a,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: callvirt Int32 GetHashCode()*/
        /* IL_0C: stloc.1 */
        loc1 = ((loc0.vtable)["asm0.x6000009"]())(loc0);
        /* IL_0D: ldloc.1 */
        /* IL_0E: ldc.i4.0 */
        /* IL_10: ceq */
        /* IL_11: ldc.i4.0 */
        /* IL_13: ceq */
        /* IL_14: box System.Boolean*/
        /* IL_19: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((loc1 === (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_1E: ldloc.1 */
        /* IL_1F: ldloc.0 */
        /* IL_20: callvirt Int32 GetHashCode()*/
        /* IL_26: ceq */
        /* IL_27: box System.Boolean*/
        /* IL_2C: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((loc1 === ((loc0.vtable)["asm0.x6000009"]())(loc0)) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_31: newobj Void .ctor()*/
        /* IL_36: stloc.2 */
        loc2 = BLR.newobj(t1,asm1.x600000a,[null]);
        /* IL_37: ldloc.2 */
        /* IL_38: callvirt Int32 GetHashCode()*/
        /* IL_3D: ldloc.2 */
        /* IL_3E: callvirt Int32 GetHashCode()*/
        /* IL_44: ceq */
        /* IL_45: box System.Boolean*/
        /* IL_4A: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((loc2.vtable)["asm0.x6000009"]())(loc2) === ((loc2.vtable)["asm0.x6000009"]())(loc2)) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_4F: ldloc.2 */
        /* IL_50: callvirt Int32 GetHashCode()*/
        /* IL_55: ldloc.0 */
        /* IL_56: callvirt Int32 GetHashCode()*/
        /* IL_5C: ceq */
        /* IL_5D: ldc.i4.0 */
        /* IL_5F: ceq */
        /* IL_60: box System.Boolean*/
        /* IL_65: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((((loc2.vtable)["asm0.x6000009"]())(loc2) === ((loc0.vtable)["asm0.x6000009"]())(loc0)) ? (1) : (0)) === (0|0)) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_6A: ldstr hello*/
        /* IL_6F: call Void TestString(System.String)*/
        asm1.x600000c(BLR.new_string("hello"));
        /* IL_74: ret */
        return ;
    };
    /* static System.Void Program.TestString(String)*/
    asm.x600000c_init = function ()
    {
        ((asm0)["System.Boolean"]().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function (arg0)
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function TestString(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr  world*/
        /* IL_06: call String Concat(System.String, System.String)*/
        /* IL_0B: stloc.0 */
        loc0 = asm0.x60001ac(arg0,BLR.new_string(" world"));
        /* IL_0C: ldstr hello world*/
        /* IL_11: stloc.1 */
        loc1 = BLR.new_string("hello world");
        /* IL_12: ldloc.0 */
        /* IL_13: callvirt Int32 GetHashCode()*/
        /* IL_18: ldloc.1 */
        /* IL_19: callvirt Int32 GetHashCode()*/
        /* IL_1F: ceq */
        /* IL_20: box System.Boolean*/
        /* IL_25: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((loc0.vtable)["asm0.x6000009"]())(loc0) === ((loc1.vtable)["asm0.x6000009"]())(loc1)) ? (1) : (0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_2A: ldloc.0 */
        /* IL_2B: callvirt Int32 GetHashCode()*/
        /* IL_30: ldarg.0 */
        /* IL_31: callvirt Int32 GetHashCode()*/
        /* IL_37: ceq */
        /* IL_38: box System.Boolean*/
        /* IL_3D: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((((loc0.vtable)["asm0.x6000009"]())(loc0) === ((arg0.vtable)["asm0.x6000009"]())(arg0)) ? (1) : (0)),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_42: ret */
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
    asm.TestLog = BLR.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.A = BLR.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Program = BLR.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000b;
})(asm1 || (asm1 = {}));
