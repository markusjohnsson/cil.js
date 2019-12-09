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
        asm0.x60000a2(((asm0.x60000cf(arg0).vtable)["asm0.x60001c5"])(asm0.x60000cf(arg0)),CILJS.new_array(t0,(0|0)));
        /* IL_17: nop  */
        /* IL_18: ldarg.0  */
        /* IL_19: callvirt Type GetType() */
        /* IL_1E: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_23: ldtoken System.Int32 */
        /* IL_28: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_2D: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_32: box System.Boolean */
        /* IL_37: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),t2));
        /* IL_3C: nop  */
        /* IL_3D: ldarg.0  */
        /* IL_3E: callvirt Type GetType() */
        /* IL_43: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_48: ldtoken System.Object */
        /* IL_4D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_52: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_57: box System.Boolean */
        /* IL_5C: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),t2));
        /* IL_61: nop  */
        /* IL_62: ldarg.0  */
        /* IL_63: callvirt Type GetType() */
        /* IL_68: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_6D: ldtoken System.ValueType */
        /* IL_72: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_77: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_7C: box System.Boolean */
        /* IL_81: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),t2));
        /* IL_86: nop  */
        /* IL_87: ldarg.0  */
        /* IL_88: callvirt Type GetType() */
        /* IL_8D: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_92: ldtoken A */
        /* IL_97: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_9C: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_A1: box System.Boolean */
        /* IL_A6: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t4))),t2));
        /* IL_AB: nop  */
        /* IL_AC: ldarg.0  */
        /* IL_AD: callvirt Type GetType() */
        /* IL_B2: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_B7: ldtoken B */
        /* IL_BC: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_C1: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_C6: box System.Boolean */
        /* IL_CB: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5))),t2));
        /* IL_D0: nop  */
        /* IL_D1: ldarg.0  */
        /* IL_D2: callvirt Type GetType() */
        /* IL_D7: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_DC: ldtoken C */
        /* IL_E1: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_E6: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_EB: box System.Boolean */
        /* IL_F0: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t6))),t2));
        /* IL_F5: nop  */
        /* IL_F6: ldarg.0  */
        /* IL_F7: callvirt Type GetType() */
        /* IL_FC: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_101: ldtoken D */
        /* IL_106: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_10B: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_110: box System.Boolean */
        /* IL_115: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t7))),t2));
        /* IL_11A: nop  */
        /* IL_11B: ldarg.0  */
        /* IL_11C: callvirt Type GetType() */
        /* IL_121: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_126: ldtoken I */
        /* IL_12B: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_130: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_135: box System.Boolean */
        /* IL_13A: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),t2));
        /* IL_13F: nop  */
        /* IL_140: ldarg.0  */
        /* IL_141: callvirt Type GetType() */
        /* IL_146: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_14B: ldtoken System.Array */
        /* IL_150: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_155: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_15A: box System.Boolean */
        /* IL_15F: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),t2));
        /* IL_164: nop  */
        /* IL_165: ldarg.0  */
        /* IL_166: callvirt Type GetType() */
        /* IL_16B: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_170: ldtoken System.Int32[] */
        /* IL_175: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_17A: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_17F: box System.Boolean */
        /* IL_184: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t10))),t2));
        /* IL_189: nop  */
        /* IL_18A: ldarg.0  */
        /* IL_18B: callvirt Type GetType() */
        /* IL_190: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_195: ldtoken System.Object[] */
        /* IL_19A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_19F: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1A4: box System.Boolean */
        /* IL_1A9: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t11))),t2));
        /* IL_1AE: nop  */
        /* IL_1AF: ldarg.0  */
        /* IL_1B0: callvirt Type GetType() */
        /* IL_1B5: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_1BA: ldtoken System.ValueType[] */
        /* IL_1BF: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1C4: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1C9: box System.Boolean */
        /* IL_1CE: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),t2));
        /* IL_1D3: nop  */
        /* IL_1D4: ldarg.0  */
        /* IL_1D5: callvirt Type GetType() */
        /* IL_1DA: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_1DF: ldtoken A[] */
        /* IL_1E4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1E9: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1EE: box System.Boolean */
        /* IL_1F3: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),t2));
        /* IL_1F8: nop  */
        /* IL_1F9: ldarg.0  */
        /* IL_1FA: callvirt Type GetType() */
        /* IL_1FF: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_204: ldtoken B[] */
        /* IL_209: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_20E: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_213: box System.Boolean */
        /* IL_218: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t14))),t2));
        /* IL_21D: nop  */
        /* IL_21E: ldarg.0  */
        /* IL_21F: callvirt Type GetType() */
        /* IL_224: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_229: ldtoken C[] */
        /* IL_22E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_233: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_238: box System.Boolean */
        /* IL_23D: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),t2));
        /* IL_242: nop  */
        /* IL_243: ldarg.0  */
        /* IL_244: callvirt Type GetType() */
        /* IL_249: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_24E: ldtoken D[] */
        /* IL_253: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_258: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_25D: box System.Boolean */
        /* IL_262: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t16))),t2));
        /* IL_267: nop  */
        /* IL_268: ldarg.0  */
        /* IL_269: callvirt Type GetType() */
        /* IL_26E: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_273: ldtoken I[] */
        /* IL_278: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_27D: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_282: box System.Boolean */
        /* IL_287: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box(((asm0.x60001bf(asm0.x60000cf(arg0)).vtable)["asm0.x6000075"])(asm0.x60001bf(asm0.x60000cf(arg0)),asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t17))),t2));
        /* IL_28C: nop  */
        /* IL_28D: ret  */
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
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
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
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
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
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
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
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
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
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000005;
})(asm1 || (asm1 = {}));
if (module){
    module.exports = asm1;
}
