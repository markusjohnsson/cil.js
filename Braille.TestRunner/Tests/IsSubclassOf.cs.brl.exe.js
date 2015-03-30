var asm1; (function (asm)
{
    asm.FullName = "IsSubclassOf.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
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
    /*  B..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000a(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000b(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000e_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        (asm1.D().init)();
        (asm1.I().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        BLR.init_base_types();
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var t7;
        var __pos__;
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        t3 = asm1.D();
        t4 = (asm0)["System.Int32"]();
        t5 = (asm0)["System.UInt32"]();
        t6 = (asm0)["System.Object"]();
        t7 = asm1.I();
        __pos__ = 0x0;
        /* IL_00: nop  IsSubclassOf.cs:14:5*/
        /* IL_01: newobj Void .ctor() */
        /* IL_06: call Void Test(System.Object) */
        asm1.x600000f(BLR.newobj(t0,asm1.x600000a,[null]));
        /* IL_0B: nop  */
        /* IL_0C: newobj Void .ctor() */
        /* IL_11: call Void Test(System.Object) */
        asm1.x600000f(BLR.newobj(t1,asm1.x600000b,[null]));
        /* IL_16: nop  */
        /* IL_17: newobj Void .ctor() */
        /* IL_1C: call Void Test(System.Object) */
        asm1.x600000f(BLR.newobj(t2,asm1.x600000c,[null]));
        /* IL_21: nop  */
        /* IL_22: newobj Void .ctor() */
        /* IL_27: call Void Test(System.Object) */
        asm1.x600000f(BLR.newobj(t3,asm1.x600000d,[null]));
        /* IL_2C: nop  */
        /* IL_2D: ldc.i4.s 123 */
        /* IL_2F: box System.Int32 */
        /* IL_34: call Void Test(System.Object) */
        asm1.x600000f({
                'boxed': (123|0),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_39: nop  */
        /* IL_3A: ldc.i4 -555 */
        /* IL_3F: box System.Int32 */
        /* IL_44: call Void Test(System.Object) */
        asm1.x600000f({
                'boxed': (-555|0),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_49: nop  */
        /* IL_4A: ldc.i4.0  */
        /* IL_4B: newarr System.Int32 */
        /* IL_50: call Void Test(System.Object) */
        asm1.x600000f(BLR.new_array(t4,(0|0)));
        /* IL_55: nop  */
        /* IL_56: ldc.i4.0  */
        /* IL_57: newarr System.UInt32 */
        /* IL_5C: call Void Test(System.Object) */
        asm1.x600000f(BLR.new_array(t5,(0|0)));
        /* IL_61: nop  */
        /* IL_62: ldc.i4.0  */
        /* IL_63: newarr System.Object */
        /* IL_68: call Void Test(System.Object) */
        asm1.x600000f(BLR.new_array(t6,(0|0)));
        /* IL_6D: nop  */
        /* IL_6E: ldc.i4.0  */
        /* IL_6F: newarr A */
        /* IL_74: call Void Test(System.Object) */
        asm1.x600000f(BLR.new_array(t0,(0|0)));
        /* IL_79: nop  */
        /* IL_7A: ldc.i4.0  */
        /* IL_7B: newarr B */
        /* IL_80: call Void Test(System.Object) */
        asm1.x600000f(BLR.new_array(t1,(0|0)));
        /* IL_85: nop  */
        /* IL_86: ldc.i4.0  */
        /* IL_87: newarr C */
        /* IL_8C: call Void Test(System.Object) */
        asm1.x600000f(BLR.new_array(t2,(0|0)));
        /* IL_91: nop  */
        /* IL_92: ldc.i4.0  */
        /* IL_93: newarr D */
        /* IL_98: call Void Test(System.Object) */
        asm1.x600000f(BLR.new_array(t3,(0|0)));
        /* IL_9D: nop  */
        /* IL_9E: ldc.i4.0  */
        /* IL_9F: newarr I */
        /* IL_A4: call Void Test(System.Object) */
        asm1.x600000f(BLR.new_array(t7,(0|0)));
        /* IL_A9: nop  */
        /* IL_AA: ret  IsSubclassOf.cs:29:5*/
        return ;
    };
    /* static System.Void Program.Test(Object)*/
    asm.x600000f_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        (asm1.D().init)();
        (asm1.I().init)();
        ((asm0)["System.Array`1"]((asm0)["System.Int32"]()).init)();
        ((asm0)["System.Array`1"]((asm0)["System.Object"]()).init)();
        ((asm0)["System.Array`1"]((asm0)["System.ValueType"]()).init)();
        ((asm0)["System.Array`1"](asm1.A()).init)();
        ((asm0)["System.Array`1"](asm1.B()).init)();
        ((asm0)["System.Array`1"](asm1.C()).init)();
        ((asm0)["System.Array`1"](asm1.D()).init)();
        ((asm0)["System.Array`1"](asm1.I()).init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0)
    {
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Test(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var t7;
        var t8;
        var t9;
        var t10;
        var t11;
        var t12;
        var t13;
        var t14;
        var t15;
        var t16;
        var t17;
        var __pos__;
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.Boolean"]();
        t2 = (asm0)["System.Object"]();
        t3 = (asm0)["System.ValueType"]();
        t4 = asm1.A();
        t5 = asm1.B();
        t6 = asm1.C();
        t7 = asm1.D();
        t8 = asm1.I();
        t9 = (asm0)["System.Array"]();
        t10 = (asm0)["System.Array`1"](t0);
        t11 = (asm0)["System.Array`1"](t2);
        t12 = (asm0)["System.Array`1"](t3);
        t13 = (asm0)["System.Array`1"](t4);
        t14 = (asm0)["System.Array`1"](t5);
        t15 = (asm0)["System.Array`1"](t6);
        t16 = (asm0)["System.Array`1"](t7);
        t17 = (asm0)["System.Array`1"](t8);
        __pos__ = 0x0;
        /* IL_00: nop  IsSubclassOf.cs:32:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: callvirt Type GetType() */
        /* IL_07: callvirt String get_Name() */
        /* IL_0C: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x600000a(arg0).vtable)["asm0.x600003e"])())(asm0.x600000a(arg0)));
        /* IL_11: nop  */
        /* IL_12: ldarg.0  */
        /* IL_13: callvirt Type GetType() */
        /* IL_18: ldtoken System.Int32 */
        /* IL_1D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_22: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_27: box System.Boolean */
        /* IL_2C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_31: nop  */
        /* IL_32: ldarg.0  */
        /* IL_33: callvirt Type GetType() */
        /* IL_38: ldtoken System.Object */
        /* IL_3D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_42: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_47: box System.Boolean */
        /* IL_4C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_51: nop  */
        /* IL_52: ldarg.0  */
        /* IL_53: callvirt Type GetType() */
        /* IL_58: ldtoken System.ValueType */
        /* IL_5D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_62: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_67: box System.Boolean */
        /* IL_6C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_71: nop  */
        /* IL_72: ldarg.0  */
        /* IL_73: callvirt Type GetType() */
        /* IL_78: ldtoken A */
        /* IL_7D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_82: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_87: box System.Boolean */
        /* IL_8C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t4))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_91: nop  */
        /* IL_92: ldarg.0  */
        /* IL_93: callvirt Type GetType() */
        /* IL_98: ldtoken B */
        /* IL_9D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_A2: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_A7: box System.Boolean */
        /* IL_AC: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t5))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_B1: nop  */
        /* IL_B2: ldarg.0  */
        /* IL_B3: callvirt Type GetType() */
        /* IL_B8: ldtoken C */
        /* IL_BD: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_C2: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_C7: box System.Boolean */
        /* IL_CC: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t6))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_D1: nop  */
        /* IL_D2: ldarg.0  */
        /* IL_D3: callvirt Type GetType() */
        /* IL_D8: ldtoken D */
        /* IL_DD: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_E2: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_E7: box System.Boolean */
        /* IL_EC: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t7))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_F1: nop  */
        /* IL_F2: ldarg.0  */
        /* IL_F3: callvirt Type GetType() */
        /* IL_F8: ldtoken I */
        /* IL_FD: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_102: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_107: box System.Boolean */
        /* IL_10C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_111: nop  */
        /* IL_112: ldarg.0  */
        /* IL_113: callvirt Type GetType() */
        /* IL_118: ldtoken System.Array */
        /* IL_11D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_122: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_127: box System.Boolean */
        /* IL_12C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_131: nop  */
        /* IL_132: ldarg.0  */
        /* IL_133: callvirt Type GetType() */
        /* IL_138: ldtoken System.Int32[] */
        /* IL_13D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_142: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_147: box System.Boolean */
        /* IL_14C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t10))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_151: nop  */
        /* IL_152: ldarg.0  */
        /* IL_153: callvirt Type GetType() */
        /* IL_158: ldtoken System.Object[] */
        /* IL_15D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_162: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_167: box System.Boolean */
        /* IL_16C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t11))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_171: nop  */
        /* IL_172: ldarg.0  */
        /* IL_173: callvirt Type GetType() */
        /* IL_178: ldtoken System.ValueType[] */
        /* IL_17D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_182: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_187: box System.Boolean */
        /* IL_18C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_191: nop  */
        /* IL_192: ldarg.0  */
        /* IL_193: callvirt Type GetType() */
        /* IL_198: ldtoken A[] */
        /* IL_19D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1A2: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1A7: box System.Boolean */
        /* IL_1AC: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1B1: nop  */
        /* IL_1B2: ldarg.0  */
        /* IL_1B3: callvirt Type GetType() */
        /* IL_1B8: ldtoken B[] */
        /* IL_1BD: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1C2: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1C7: box System.Boolean */
        /* IL_1CC: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t14))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1D1: nop  */
        /* IL_1D2: ldarg.0  */
        /* IL_1D3: callvirt Type GetType() */
        /* IL_1D8: ldtoken C[] */
        /* IL_1DD: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1E2: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1E7: box System.Boolean */
        /* IL_1EC: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1F1: nop  */
        /* IL_1F2: ldarg.0  */
        /* IL_1F3: callvirt Type GetType() */
        /* IL_1F8: ldtoken D[] */
        /* IL_1FD: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_202: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_207: box System.Boolean */
        /* IL_20C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t16))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_211: nop  */
        /* IL_212: ldarg.0  */
        /* IL_213: callvirt Type GetType() */
        /* IL_218: ldtoken I[] */
        /* IL_21D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_222: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_227: box System.Boolean */
        /* IL_22C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000e2"])())(asm0.x600000a(arg0),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t17))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_231: nop  */
        /* IL_232: ret  IsSubclassOf.cs:53:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
    asm.I = BLR.declare_type(
        "I",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
        });
    asm.B = BLR.declare_type(
        "B",
        [],
        function ()
        {
            return new (asm1.A())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.I()],
                {});
        });
    asm.C = BLR.declare_type(
        "C",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.D = BLR.declare_type(
        "D",
        [],
        function ()
        {
            return new (asm1.B())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"D",false,false,false,false,false,[],[],asm1.B(),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.I()],
                {});
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000b");
            this.GenericTypeMetadataName = "asm1.t200000b";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
