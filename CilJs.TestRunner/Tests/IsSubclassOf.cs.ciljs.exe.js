var asm2;(function (asm)
{
    asm.FullName = "IsSubclassOf.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm2.x6000001(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm2.x6000002(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000005_init = function ()
    {
        (asm2.A().init)();
        (asm2.B().init)();
        (asm2.C().init)();
        (asm2.D().init)();
        (asm2.I().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function ()
    {
        asm.x6000005_init.apply(this,arguments);
        return asm.x6000005_.apply(this,arguments);
    };;
    asm.x6000005_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var t7;
        CILJS.init_base_types();
        t0 = asm2.A();
        t1 = asm2.B();
        t2 = asm2.C();
        t3 = asm2.D();
        t4 = (asm0)["System.Int32"]();
        t5 = (asm0)["System.UInt32"]();
        t6 = (asm0)["System.Object"]();
        t7 = asm2.I();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: call Void Test(System.Object) */
        asm2.x6000006(CILJS.newobj(t0,asm2.x6000001,[null]));
        /* IL_0A: newobj Void .ctor() */
        /* IL_0F: call Void Test(System.Object) */
        asm2.x6000006(CILJS.newobj(t1,asm2.x6000002,[null]));
        /* IL_14: newobj Void .ctor() */
        /* IL_19: call Void Test(System.Object) */
        asm2.x6000006(CILJS.newobj(t2,asm2.x6000003,[null]));
        /* IL_1E: newobj Void .ctor() */
        /* IL_23: call Void Test(System.Object) */
        asm2.x6000006(CILJS.newobj(t3,asm2.x6000004,[null]));
        /* IL_28: ldc.i4.s 123 */
        /* IL_2A: box System.Int32 */
        /* IL_2F: call Void Test(System.Object) */
        asm2.x6000006({
                'boxed': (123|0),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_34: ldc.i4 -555 */
        /* IL_39: box System.Int32 */
        /* IL_3E: call Void Test(System.Object) */
        asm2.x6000006({
                'boxed': (-555|0),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_43: ldc.i4.0  */
        /* IL_44: newarr System.Int32 */
        /* IL_49: call Void Test(System.Object) */
        asm2.x6000006(CILJS.new_array(t4,(0|0)));
        /* IL_4E: ldc.i4.0  */
        /* IL_4F: newarr System.UInt32 */
        /* IL_54: call Void Test(System.Object) */
        asm2.x6000006(CILJS.new_array(t5,(0|0)));
        /* IL_59: ldc.i4.0  */
        /* IL_5A: newarr System.Object */
        /* IL_5F: call Void Test(System.Object) */
        asm2.x6000006(CILJS.new_array(t6,(0|0)));
        /* IL_64: ldc.i4.0  */
        /* IL_65: newarr A */
        /* IL_6A: call Void Test(System.Object) */
        asm2.x6000006(CILJS.new_array(t0,(0|0)));
        /* IL_6F: ldc.i4.0  */
        /* IL_70: newarr B */
        /* IL_75: call Void Test(System.Object) */
        asm2.x6000006(CILJS.new_array(t1,(0|0)));
        /* IL_7A: ldc.i4.0  */
        /* IL_7B: newarr C */
        /* IL_80: call Void Test(System.Object) */
        asm2.x6000006(CILJS.new_array(t2,(0|0)));
        /* IL_85: ldc.i4.0  */
        /* IL_86: newarr D */
        /* IL_8B: call Void Test(System.Object) */
        asm2.x6000006(CILJS.new_array(t3,(0|0)));
        /* IL_90: ldc.i4.0  */
        /* IL_91: newarr I */
        /* IL_96: call Void Test(System.Object) */
        asm2.x6000006(CILJS.new_array(t7,(0|0)));
        /* IL_9B: ret  */
        return ;
    };
    /* static System.Void Program.Test(Object)*/
    asm.x6000006_init = function ()
    {
        (asm2.A().init)();
        (asm2.B().init)();
        (asm2.C().init)();
        (asm2.D().init)();
        (asm2.I().init)();
        ((asm0)["System.Array`1"]((asm0)["System.Int32"]()).init)();
        ((asm0)["System.Array`1"]((asm0)["System.Object"]()).init)();
        ((asm0)["System.Array`1"]((asm0)["System.ValueType"]()).init)();
        ((asm0)["System.Array`1"](asm2.A()).init)();
        ((asm0)["System.Array`1"](asm2.B()).init)();
        ((asm0)["System.Array`1"](asm2.C()).init)();
        ((asm0)["System.Array`1"](asm2.D()).init)();
        ((asm0)["System.Array`1"](asm2.I()).init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function (arg0)
    {
        asm.x6000006_init.apply(this,arguments);
        return asm.x6000006_.apply(this,arguments);
    };;
    asm.x6000006_ = function Test(arg0)
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
        t4 = asm2.A();
        t5 = asm2.B();
        t6 = asm2.C();
        t7 = asm2.D();
        t8 = asm2.I();
        t9 = (asm0)["System.Array"]();
        t10 = (asm0)["System.Array`1"](t0);
        t11 = (asm0)["System.Array`1"](t2);
        t12 = (asm0)["System.Array`1"](t3);
        t13 = (asm0)["System.Array`1"](t4);
        t14 = (asm0)["System.Array`1"](t5);
        t15 = (asm0)["System.Array`1"](t6);
        t16 = (asm0)["System.Array`1"](t7);
        t17 = (asm0)["System.Array`1"](t8);
        /* IL_00: ldarg.0  */
        /* IL_01: callvirt Type GetType() */
        /* IL_06: callvirt String get_Name() */
        /* IL_0B: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x60000f2(arg0).vtable)["asm0.x60001a4"])())(asm0.x60000f2(arg0)));
        /* IL_10: ldarg.0  */
        /* IL_11: callvirt Type GetType() */
        /* IL_16: ldtoken System.Int32 */
        /* IL_1B: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_20: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_25: box System.Boolean */
        /* IL_2A: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_2F: ldarg.0  */
        /* IL_30: callvirt Type GetType() */
        /* IL_35: ldtoken System.Object */
        /* IL_3A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_3F: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_44: box System.Boolean */
        /* IL_49: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_4E: ldarg.0  */
        /* IL_4F: callvirt Type GetType() */
        /* IL_54: ldtoken System.ValueType */
        /* IL_59: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_5E: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_63: box System.Boolean */
        /* IL_68: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_6D: ldarg.0  */
        /* IL_6E: callvirt Type GetType() */
        /* IL_73: ldtoken A */
        /* IL_78: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_7D: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_82: box System.Boolean */
        /* IL_87: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t4))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_8C: ldarg.0  */
        /* IL_8D: callvirt Type GetType() */
        /* IL_92: ldtoken B */
        /* IL_97: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_9C: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_A1: box System.Boolean */
        /* IL_A6: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_AB: ldarg.0  */
        /* IL_AC: callvirt Type GetType() */
        /* IL_B1: ldtoken C */
        /* IL_B6: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_BB: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_C0: box System.Boolean */
        /* IL_C5: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t6))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_CA: ldarg.0  */
        /* IL_CB: callvirt Type GetType() */
        /* IL_D0: ldtoken D */
        /* IL_D5: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_DA: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_DF: box System.Boolean */
        /* IL_E4: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t7))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_E9: ldarg.0  */
        /* IL_EA: callvirt Type GetType() */
        /* IL_EF: ldtoken I */
        /* IL_F4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_F9: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_FE: box System.Boolean */
        /* IL_103: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_108: ldarg.0  */
        /* IL_109: callvirt Type GetType() */
        /* IL_10E: ldtoken System.Array */
        /* IL_113: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_118: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_11D: box System.Boolean */
        /* IL_122: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_127: ldarg.0  */
        /* IL_128: callvirt Type GetType() */
        /* IL_12D: ldtoken System.Int32[] */
        /* IL_132: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_137: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_13C: box System.Boolean */
        /* IL_141: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t10))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_146: ldarg.0  */
        /* IL_147: callvirt Type GetType() */
        /* IL_14C: ldtoken System.Object[] */
        /* IL_151: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_156: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_15B: box System.Boolean */
        /* IL_160: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t11))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_165: ldarg.0  */
        /* IL_166: callvirt Type GetType() */
        /* IL_16B: ldtoken System.ValueType[] */
        /* IL_170: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_175: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_17A: box System.Boolean */
        /* IL_17F: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_184: ldarg.0  */
        /* IL_185: callvirt Type GetType() */
        /* IL_18A: ldtoken A[] */
        /* IL_18F: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_194: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_199: box System.Boolean */
        /* IL_19E: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1A3: ldarg.0  */
        /* IL_1A4: callvirt Type GetType() */
        /* IL_1A9: ldtoken B[] */
        /* IL_1AE: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1B3: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1B8: box System.Boolean */
        /* IL_1BD: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t14))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1C2: ldarg.0  */
        /* IL_1C3: callvirt Type GetType() */
        /* IL_1C8: ldtoken C[] */
        /* IL_1CD: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1D2: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1D7: box System.Boolean */
        /* IL_1DC: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1E1: ldarg.0  */
        /* IL_1E2: callvirt Type GetType() */
        /* IL_1E7: ldtoken D[] */
        /* IL_1EC: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1F1: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1F6: box System.Boolean */
        /* IL_1FB: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t16))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_200: ldarg.0  */
        /* IL_201: callvirt Type GetType() */
        /* IL_206: ldtoken I[] */
        /* IL_20B: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_210: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_215: box System.Boolean */
        /* IL_21A: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t17))),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_21F: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.I = CILJS.declare_type(
        "I",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return asm2.A();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm2.A(),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.I()],
                {});
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.D = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return asm2.B();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],asm2.B(),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm2.I()],
                {});
        });
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000007");
            this.GenericTypeMetadataName = "asm2.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000005;
})(asm2 || (asm2 = {}));
