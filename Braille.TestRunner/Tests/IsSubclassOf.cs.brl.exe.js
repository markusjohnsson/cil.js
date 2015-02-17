var asm1; (function (asm)
{
    asm.FullName = "IsSubclassOf.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Void Log(System.Object)*/
    asm.x6000001 = braille_test_log;;
    /* Void .ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x600000c(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x600000d(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000010_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        ((asm0)["System.Int32"]().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var t1;
        t0 = (asm0)["System.ValueType"]();
        t1 = (asm0)["System.Int32"]();
        /* IL_00: ldc.i4.0 */
        /* IL_01: newarr System.Int32*/
        /* IL_06: call Void Test(System.Object)*/
        asm1.x6000011(BLR.new_array(t1,(0|0)));
        /* IL_0B: ret */
        return ;
    };
    /* static Void Test(System.Object)*/
    asm.x6000011_init = function ()
    {
        ((asm0)["System.Int32"]().init)();
        ((asm0)["System.Boolean"]().init)();
        ((asm0)["System.Object"]().init)();
        ((asm0)["System.ValueType"]().init)();
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        (asm1.D().init)();
        (asm1.I().init)();
        ((asm0)["System.Array"]().init)();
        ((asm0)["System.Array`1"]((asm0)["System.Int32"]()).init)();
        ((asm0)["System.Array`1"]((asm0)["System.Object"]()).init)();
        ((asm0)["System.Array`1"]((asm0)["System.ValueType"]()).init)();
        ((asm0)["System.Array`1"](asm1.A()).init)();
        ((asm0)["System.Array`1"](asm1.B()).init)();
        ((asm0)["System.Array`1"](asm1.C()).init)();
        ((asm0)["System.Array`1"](asm1.D()).init)();
        ((asm0)["System.Array`1"](asm1.I()).init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function (arg0)
    {
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function Test(arg0)
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
        t10 = (asm0)["System.Array`1"]((asm0)["System.Int32"]());
        t11 = (asm0)["System.Array`1"]((asm0)["System.Object"]());
        t12 = (asm0)["System.Array`1"]((asm0)["System.ValueType"]());
        t13 = (asm0)["System.Array`1"](asm1.A());
        t14 = (asm0)["System.Array`1"](asm1.B());
        t15 = (asm0)["System.Array`1"](asm1.C());
        t16 = (asm0)["System.Array`1"](asm1.D());
        t17 = (asm0)["System.Array`1"](asm1.I());
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt Type GetType()*/
        /* IL_06: callvirt String get_Name()*/
        /* IL_0B: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x600000a(arg0).vtable)["asm0.x600003e"])())(asm0.x600000a(arg0)));
        /* IL_10: ldarg.0 */
        /* IL_11: callvirt Type GetType()*/
        /* IL_16: ldtoken System.Int32*/
        /* IL_1B: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_20: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_25: box System.Boolean*/
        /* IL_2A: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_2F: ldarg.0 */
        /* IL_30: callvirt Type GetType()*/
        /* IL_35: ldtoken System.Object*/
        /* IL_3A: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_3F: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_44: box System.Boolean*/
        /* IL_49: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_4E: ldarg.0 */
        /* IL_4F: callvirt Type GetType()*/
        /* IL_54: ldtoken System.ValueType*/
        /* IL_59: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_5E: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_63: box System.Boolean*/
        /* IL_68: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_6D: ldarg.0 */
        /* IL_6E: callvirt Type GetType()*/
        /* IL_73: ldtoken A*/
        /* IL_78: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_7D: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_82: box System.Boolean*/
        /* IL_87: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t4))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_8C: ldarg.0 */
        /* IL_8D: callvirt Type GetType()*/
        /* IL_92: ldtoken B*/
        /* IL_97: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_9C: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_A1: box System.Boolean*/
        /* IL_A6: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t5))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_AB: ldarg.0 */
        /* IL_AC: callvirt Type GetType()*/
        /* IL_B1: ldtoken C*/
        /* IL_B6: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_BB: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_C0: box System.Boolean*/
        /* IL_C5: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t6))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_CA: ldarg.0 */
        /* IL_CB: callvirt Type GetType()*/
        /* IL_D0: ldtoken D*/
        /* IL_D5: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_DA: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_DF: box System.Boolean*/
        /* IL_E4: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t7))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_E9: ldarg.0 */
        /* IL_EA: callvirt Type GetType()*/
        /* IL_EF: ldtoken I*/
        /* IL_F4: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_F9: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_FE: box System.Boolean*/
        /* IL_103: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_108: ldarg.0 */
        /* IL_109: callvirt Type GetType()*/
        /* IL_10E: ldtoken System.Array*/
        /* IL_113: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_118: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_11D: box System.Boolean*/
        /* IL_122: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_127: ldarg.0 */
        /* IL_128: callvirt Type GetType()*/
        /* IL_12D: ldtoken System.Int32[]*/
        /* IL_132: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_137: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_13C: box System.Boolean*/
        /* IL_141: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t10))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_146: ldarg.0 */
        /* IL_147: callvirt Type GetType()*/
        /* IL_14C: ldtoken System.Object[]*/
        /* IL_151: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_156: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_15B: box System.Boolean*/
        /* IL_160: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t11))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_165: ldarg.0 */
        /* IL_166: callvirt Type GetType()*/
        /* IL_16B: ldtoken System.ValueType[]*/
        /* IL_170: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_175: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_17A: box System.Boolean*/
        /* IL_17F: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_184: ldarg.0 */
        /* IL_185: callvirt Type GetType()*/
        /* IL_18A: ldtoken A[]*/
        /* IL_18F: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_194: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_199: box System.Boolean*/
        /* IL_19E: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1A3: ldarg.0 */
        /* IL_1A4: callvirt Type GetType()*/
        /* IL_1A9: ldtoken B[]*/
        /* IL_1AE: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_1B3: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_1B8: box System.Boolean*/
        /* IL_1BD: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t14))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1C2: ldarg.0 */
        /* IL_1C3: callvirt Type GetType()*/
        /* IL_1C8: ldtoken C[]*/
        /* IL_1CD: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_1D2: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_1D7: box System.Boolean*/
        /* IL_1DC: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1E1: ldarg.0 */
        /* IL_1E2: callvirt Type GetType()*/
        /* IL_1E7: ldtoken D[]*/
        /* IL_1EC: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_1F1: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_1F6: box System.Boolean*/
        /* IL_1FB: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t16))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_200: ldarg.0 */
        /* IL_201: callvirt Type GetType()*/
        /* IL_206: ldtoken I[]*/
        /* IL_20B: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_210: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_215: box System.Boolean*/
        /* IL_21A: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (((asm0.x600000a(arg0).vtable)["asm0.x60000b0"])())(asm0.x600000a(arg0),asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t17))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_21F: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
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
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.TestHelper = BLR.declare_type(
        "TestHelper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestHelper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
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
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
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
            BLR.init_type(this,asm,"I",false,false,true,false,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000008");
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
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),BLR.is_inst_default(this),Array,"asm1.t2000009");
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
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
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
            BLR.init_type(this,asm,"D",false,false,false,false,false,[],[],asm1.B(),BLR.is_inst_default(this),Array,"asm1.t200000b");
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000c");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
