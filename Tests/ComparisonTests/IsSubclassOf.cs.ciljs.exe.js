var asm1;(function (asm)
{
    asm.FullName = "IsSubclassOf.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000001(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000002(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000005_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        (asm1.D().init)();
        (asm1.I().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function ()
    {
        asm.x6000005_init();
        return asm.x6000005_();
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
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        t3 = asm1.D();
        t4 = (asm0)["System.Int32"]();
        t5 = (asm0)["System.UInt32"]();
        t6 = (asm0)["System.Object"]();
        t7 = asm1.I();
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        /* IL_06: call Void Test(System.Object) */
        asm1.x6000006(CILJS.newobj(t0,asm1.x6000001,[null]));
        /* IL_0B: nop  */
        /* IL_0C: newobj Void .ctor() */
        /* IL_11: call Void Test(System.Object) */
        asm1.x6000006(CILJS.newobj(t1,asm1.x6000002,[null]));
        /* IL_16: nop  */
        /* IL_17: newobj Void .ctor() */
        /* IL_1C: call Void Test(System.Object) */
        asm1.x6000006(CILJS.newobj(t2,asm1.x6000003,[null]));
        /* IL_21: nop  */
        /* IL_22: newobj Void .ctor() */
        /* IL_27: call Void Test(System.Object) */
        asm1.x6000006(CILJS.newobj(t3,asm1.x6000004,[null]));
        /* IL_2C: nop  */
        /* IL_2D: ldc.i4.s 123 */
        /* IL_2F: box System.Int32 */
        /* IL_34: call Void Test(System.Object) */
        asm1.x6000006(CILJS.make_box((123|0),t4));
        /* IL_39: nop  */
        /* IL_3A: ldc.i4 -555 */
        /* IL_3F: box System.Int32 */
        /* IL_44: call Void Test(System.Object) */
        asm1.x6000006(CILJS.make_box((-555|0),t4));
        /* IL_49: nop  */
        /* IL_4A: ldc.i4.0  */
        /* IL_4B: newarr System.Int32 */
        /* IL_50: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t4,(0|0)));
        /* IL_55: nop  */
        /* IL_56: ldc.i4.0  */
        /* IL_57: newarr System.UInt32 */
        /* IL_5C: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t5,(0|0)));
        /* IL_61: nop  */
        /* IL_62: ldc.i4.0  */
        /* IL_63: newarr System.Object */
        /* IL_68: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t6,(0|0)));
        /* IL_6D: nop  */
        /* IL_6E: ldc.i4.0  */
        /* IL_6F: newarr A */
        /* IL_74: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t0,(0|0)));
        /* IL_79: nop  */
        /* IL_7A: ldc.i4.0  */
        /* IL_7B: newarr B */
        /* IL_80: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t1,(0|0)));
        /* IL_85: nop  */
        /* IL_86: ldc.i4.0  */
        /* IL_87: newarr C */
        /* IL_8C: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t2,(0|0)));
        /* IL_91: nop  */
        /* IL_92: ldc.i4.0  */
        /* IL_93: newarr D */
        /* IL_98: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t3,(0|0)));
        /* IL_9D: nop  */
        /* IL_9E: ldc.i4.0  */
        /* IL_9F: newarr I */
        /* IL_A4: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t7,(0|0)));
        /* IL_A9: nop  */
        /* IL_AA: ret  */
        return ;
    };
    /* static System.Void Program.Test(Object)*/
    asm.x6000006_init = function (arg0)
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
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function (arg0)
    {
        asm.x6000006_init(arg0);
        return asm.x6000006_(arg0);
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
        t0 = (asm0)["System.Object"]();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.Boolean"]();
        t3 = (asm0)["System.ValueType"]();
        t4 = asm1.A();
        t5 = asm1.B();
        t6 = asm1.C();
        t7 = asm1.D();
        t8 = asm1.I();
        t9 = (asm0)["System.Array"]();
        t10 = (asm0)["System.Array`1"](t1);
        t11 = (asm0)["System.Array`1"](t0);
        t12 = (asm0)["System.Array`1"](t3);
        t13 = (asm0)["System.Array`1"](t4);
        t14 = (asm0)["System.Array`1"](t5);
        t15 = (asm0)["System.Array`1"](t6);
        t16 = (asm0)["System.Array`1"](t7);
        t17 = (asm0)["System.Array`1"](t8);
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: callvirt Type GetType() */
        /* IL_07: callvirt String get_Name() */
        /* IL_0C: ldc.i4.0  */
        /* IL_0D: newarr System.Object */
        /* IL_12: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x60000f2(arg0).vtable)["asm0.x60001a4"])())(asm0.x60000f2(arg0)),CILJS.new_array(t0,(0|0)));
        /* IL_17: nop  */
        /* IL_18: ldarg.0  */
        /* IL_19: callvirt Type GetType() */
        /* IL_1E: ldtoken System.Int32 */
        /* IL_23: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_28: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_2D: box System.Boolean */
        /* IL_32: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),t2));
        /* IL_37: nop  */
        /* IL_38: ldarg.0  */
        /* IL_39: callvirt Type GetType() */
        /* IL_3E: ldtoken System.Object */
        /* IL_43: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_48: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_4D: box System.Boolean */
        /* IL_52: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),t2));
        /* IL_57: nop  */
        /* IL_58: ldarg.0  */
        /* IL_59: callvirt Type GetType() */
        /* IL_5E: ldtoken System.ValueType */
        /* IL_63: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_68: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_6D: box System.Boolean */
        /* IL_72: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),t2));
        /* IL_77: nop  */
        /* IL_78: ldarg.0  */
        /* IL_79: callvirt Type GetType() */
        /* IL_7E: ldtoken A */
        /* IL_83: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_88: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_8D: box System.Boolean */
        /* IL_92: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t4))),t2));
        /* IL_97: nop  */
        /* IL_98: ldarg.0  */
        /* IL_99: callvirt Type GetType() */
        /* IL_9E: ldtoken B */
        /* IL_A3: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_A8: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_AD: box System.Boolean */
        /* IL_B2: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5))),t2));
        /* IL_B7: nop  */
        /* IL_B8: ldarg.0  */
        /* IL_B9: callvirt Type GetType() */
        /* IL_BE: ldtoken C */
        /* IL_C3: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_C8: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_CD: box System.Boolean */
        /* IL_D2: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t6))),t2));
        /* IL_D7: nop  */
        /* IL_D8: ldarg.0  */
        /* IL_D9: callvirt Type GetType() */
        /* IL_DE: ldtoken D */
        /* IL_E3: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_E8: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_ED: box System.Boolean */
        /* IL_F2: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t7))),t2));
        /* IL_F7: nop  */
        /* IL_F8: ldarg.0  */
        /* IL_F9: callvirt Type GetType() */
        /* IL_FE: ldtoken I */
        /* IL_103: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_108: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_10D: box System.Boolean */
        /* IL_112: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),t2));
        /* IL_117: nop  */
        /* IL_118: ldarg.0  */
        /* IL_119: callvirt Type GetType() */
        /* IL_11E: ldtoken System.Array */
        /* IL_123: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_128: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_12D: box System.Boolean */
        /* IL_132: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),t2));
        /* IL_137: nop  */
        /* IL_138: ldarg.0  */
        /* IL_139: callvirt Type GetType() */
        /* IL_13E: ldtoken System.Int32[] */
        /* IL_143: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_148: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_14D: box System.Boolean */
        /* IL_152: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t10))),t2));
        /* IL_157: nop  */
        /* IL_158: ldarg.0  */
        /* IL_159: callvirt Type GetType() */
        /* IL_15E: ldtoken System.Object[] */
        /* IL_163: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_168: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_16D: box System.Boolean */
        /* IL_172: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t11))),t2));
        /* IL_177: nop  */
        /* IL_178: ldarg.0  */
        /* IL_179: callvirt Type GetType() */
        /* IL_17E: ldtoken System.ValueType[] */
        /* IL_183: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_188: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_18D: box System.Boolean */
        /* IL_192: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),t2));
        /* IL_197: nop  */
        /* IL_198: ldarg.0  */
        /* IL_199: callvirt Type GetType() */
        /* IL_19E: ldtoken A[] */
        /* IL_1A3: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1A8: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1AD: box System.Boolean */
        /* IL_1B2: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),t2));
        /* IL_1B7: nop  */
        /* IL_1B8: ldarg.0  */
        /* IL_1B9: callvirt Type GetType() */
        /* IL_1BE: ldtoken B[] */
        /* IL_1C3: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1C8: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1CD: box System.Boolean */
        /* IL_1D2: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t14))),t2));
        /* IL_1D7: nop  */
        /* IL_1D8: ldarg.0  */
        /* IL_1D9: callvirt Type GetType() */
        /* IL_1DE: ldtoken C[] */
        /* IL_1E3: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1E8: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1ED: box System.Boolean */
        /* IL_1F2: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),t2));
        /* IL_1F7: nop  */
        /* IL_1F8: ldarg.0  */
        /* IL_1F9: callvirt Type GetType() */
        /* IL_1FE: ldtoken D[] */
        /* IL_203: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_208: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_20D: box System.Boolean */
        /* IL_212: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t16))),t2));
        /* IL_217: nop  */
        /* IL_218: ldarg.0  */
        /* IL_219: callvirt Type GetType() */
        /* IL_21E: ldtoken I[] */
        /* IL_223: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_228: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_22D: box System.Boolean */
        /* IL_232: call Void WriteLine(System.Object) */
        asm0.x600005a(CILJS.make_box((((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t17))),t2));
        /* IL_237: nop  */
        /* IL_238: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function A() { c.init(); }");
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
            CILJS.init_type(this,asm,"I",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
        },
        "function I() { c.init(); }");
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return asm1.A();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm1.I()],
                {});
        },
        "function B() { c.init(); }");
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function C() { c.init(); }");
    asm.D = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return asm1.B();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],asm1.B(),CILJS.is_inst_default(this),Array,"asm1.t2000006",null);
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm1.I()],
                {});
        },
        "function D() { c.init(); }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007",null);
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000005;
})(asm1 || (asm1 = {}));
