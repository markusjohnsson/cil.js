var asm1;(function (asm)
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
        asm1.x6000001(arg0);
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
        asm1.x6000002(arg0);
        /* IL_06: ret  */
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
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        t3 = asm1.D();
        t4 = (asm0)["System.Int32"]();
        t5 = (asm0)["System.UInt32"]();
        t6 = (asm0)["System.Object"]();
        t7 = asm1.I();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: call Void Test(System.Object) */
        asm1.x6000006(CILJS.newobj(t0,asm1.x6000001,[null]));
        /* IL_0A: newobj Void .ctor() */
        /* IL_0F: call Void Test(System.Object) */
        asm1.x6000006(CILJS.newobj(t1,asm1.x6000002,[null]));
        /* IL_14: newobj Void .ctor() */
        /* IL_19: call Void Test(System.Object) */
        asm1.x6000006(CILJS.newobj(t2,asm1.x6000003,[null]));
        /* IL_1E: newobj Void .ctor() */
        /* IL_23: call Void Test(System.Object) */
        asm1.x6000006(CILJS.newobj(t3,asm1.x6000004,[null]));
        /* IL_28: ldc.i4.s 123 */
        /* IL_2A: box System.Int32 */
        /* IL_2F: call Void Test(System.Object) */
        asm1.x6000006({
                'boxed': (123|0),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_34: ldc.i4 -555 */
        /* IL_39: box System.Int32 */
        /* IL_3E: call Void Test(System.Object) */
        asm1.x6000006({
                'boxed': (-555|0),
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_43: ldc.i4.0  */
        /* IL_44: newarr System.Int32 */
        /* IL_49: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t4,(0|0)));
        /* IL_4E: ldc.i4.0  */
        /* IL_4F: newarr System.UInt32 */
        /* IL_54: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t5,(0|0)));
        /* IL_59: ldc.i4.0  */
        /* IL_5A: newarr System.Object */
        /* IL_5F: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t6,(0|0)));
        /* IL_64: ldc.i4.0  */
        /* IL_65: newarr A */
        /* IL_6A: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t0,(0|0)));
        /* IL_6F: ldc.i4.0  */
        /* IL_70: newarr B */
        /* IL_75: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t1,(0|0)));
        /* IL_7A: ldc.i4.0  */
        /* IL_7B: newarr C */
        /* IL_80: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t2,(0|0)));
        /* IL_85: ldc.i4.0  */
        /* IL_86: newarr D */
        /* IL_8B: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t3,(0|0)));
        /* IL_90: ldc.i4.0  */
        /* IL_91: newarr I */
        /* IL_96: call Void Test(System.Object) */
        asm1.x6000006(CILJS.new_array(t7,(0|0)));
        /* IL_9B: ret  */
        return ;
    };
    /* static System.Void Program.Test(Object)*/
    asm.x6000006_init = function ()
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
        /* IL_00: ldarg.0  */
        /* IL_01: callvirt Type GetType() */
        /* IL_06: callvirt String get_Name() */
        /* IL_0B: ldc.i4.0  */
        /* IL_0C: newarr System.Object */
        /* IL_11: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x60000f2(arg0).vtable)["asm0.x60001a4"])())(asm0.x60000f2(arg0)),CILJS.new_array(t0,(0|0)));
        /* IL_16: ldarg.0  */
        /* IL_17: callvirt Type GetType() */
        /* IL_1C: ldtoken System.Int32 */
        /* IL_21: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_26: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_2B: box System.Boolean */
        /* IL_30: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_35: ldarg.0  */
        /* IL_36: callvirt Type GetType() */
        /* IL_3B: ldtoken System.Object */
        /* IL_40: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_45: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_4A: box System.Boolean */
        /* IL_4F: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_54: ldarg.0  */
        /* IL_55: callvirt Type GetType() */
        /* IL_5A: ldtoken System.ValueType */
        /* IL_5F: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_64: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_69: box System.Boolean */
        /* IL_6E: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t3))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_73: ldarg.0  */
        /* IL_74: callvirt Type GetType() */
        /* IL_79: ldtoken A */
        /* IL_7E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_83: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_88: box System.Boolean */
        /* IL_8D: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t4))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_92: ldarg.0  */
        /* IL_93: callvirt Type GetType() */
        /* IL_98: ldtoken B */
        /* IL_9D: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_A2: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_A7: box System.Boolean */
        /* IL_AC: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_B1: ldarg.0  */
        /* IL_B2: callvirt Type GetType() */
        /* IL_B7: ldtoken C */
        /* IL_BC: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_C1: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_C6: box System.Boolean */
        /* IL_CB: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t6))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_D0: ldarg.0  */
        /* IL_D1: callvirt Type GetType() */
        /* IL_D6: ldtoken D */
        /* IL_DB: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_E0: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_E5: box System.Boolean */
        /* IL_EA: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t7))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_EF: ldarg.0  */
        /* IL_F0: callvirt Type GetType() */
        /* IL_F5: ldtoken I */
        /* IL_FA: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_FF: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_104: box System.Boolean */
        /* IL_109: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t8))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_10E: ldarg.0  */
        /* IL_10F: callvirt Type GetType() */
        /* IL_114: ldtoken System.Array */
        /* IL_119: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_11E: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_123: box System.Boolean */
        /* IL_128: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t9))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_12D: ldarg.0  */
        /* IL_12E: callvirt Type GetType() */
        /* IL_133: ldtoken System.Int32[] */
        /* IL_138: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_13D: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_142: box System.Boolean */
        /* IL_147: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t10))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_14C: ldarg.0  */
        /* IL_14D: callvirt Type GetType() */
        /* IL_152: ldtoken System.Object[] */
        /* IL_157: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_15C: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_161: box System.Boolean */
        /* IL_166: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t11))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_16B: ldarg.0  */
        /* IL_16C: callvirt Type GetType() */
        /* IL_171: ldtoken System.ValueType[] */
        /* IL_176: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_17B: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_180: box System.Boolean */
        /* IL_185: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t12))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_18A: ldarg.0  */
        /* IL_18B: callvirt Type GetType() */
        /* IL_190: ldtoken A[] */
        /* IL_195: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_19A: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_19F: box System.Boolean */
        /* IL_1A4: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t13))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_1A9: ldarg.0  */
        /* IL_1AA: callvirt Type GetType() */
        /* IL_1AF: ldtoken B[] */
        /* IL_1B4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1B9: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1BE: box System.Boolean */
        /* IL_1C3: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t14))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_1C8: ldarg.0  */
        /* IL_1C9: callvirt Type GetType() */
        /* IL_1CE: ldtoken C[] */
        /* IL_1D3: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1D8: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1DD: box System.Boolean */
        /* IL_1E2: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t15))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_1E7: ldarg.0  */
        /* IL_1E8: callvirt Type GetType() */
        /* IL_1ED: ldtoken D[] */
        /* IL_1F2: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_1F7: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_1FC: box System.Boolean */
        /* IL_201: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t16))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_206: ldarg.0  */
        /* IL_207: callvirt Type GetType() */
        /* IL_20C: ldtoken I[] */
        /* IL_211: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_216: callvirt Boolean IsSubclassOf(System.Type) */
        /* IL_21B: box System.Boolean */
        /* IL_220: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (((asm0.x60000f2(arg0).vtable)["asm0.x6000148"])())(asm0.x60000f2(arg0),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t17))),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_225: ret  */
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
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
            CILJS.init_type(this,asm,"I",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
        });
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
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm1.I()],
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
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
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],asm1.B(),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm1.I()],
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000005;
})(asm1 || (asm1 = {}));
