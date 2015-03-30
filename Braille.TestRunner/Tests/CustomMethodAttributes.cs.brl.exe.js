var asm1; (function (asm)
{
    asm.FullName = "CustomMethodAttributes.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        asm0.x6000048(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /* System.Type B.get_T()*/
    asm.x600000b = function get_T(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld Type <T>k__BackingField */
        /* IL_06: stloc.0  */
        loc0 = (arg0)["B<T>k__BackingField"];
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /* System.Void B.set_T(Type)*/
    asm.x600000c = function set_T(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld Type <T>k__BackingField */
        (arg0)["B<T>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  B..ctor(Type)*/
    asm.x600000d = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm0.x6000048(arg0);
        /* IL_06: nop  */
        /* IL_07: nop  CustomMethodAttributes.cs:11:5*/
        /* IL_08: ldarg.0  */
        /* IL_09: ldarg.1  */
        /* IL_0A: call Void set_T(System.Type) */
        asm1.x600000c(arg0,arg1);
        /* IL_0F: nop  */
        /* IL_10: nop  CustomMethodAttributes.cs:13:5*/
        /* IL_11: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void C.M()*/
    asm.x600000f = function M(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  CustomMethodAttributes.cs:23:21*/
        /* IL_01: ret  CustomMethodAttributes.cs:23:23*/
        return ;
    };;
    /* System.Void C.N()*/
    asm.x6000010 = function N(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  CustomMethodAttributes.cs:26:21*/
        /* IL_01: ret  CustomMethodAttributes.cs:26:23*/
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000012_init = function ()
    {
        (asm1.C().init)();
        (asm1.B().init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function ()
    {
        BLR.init_base_types();
        asm.x6000012_init.apply(this,arguments);
        return asm.x6000012_.apply(this,arguments);
    };;
    asm.x6000012_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        t0 = asm1.C();
        t1 = (asm0)["System.Int32"]();
        t2 = asm1.B();
        __pos__ = 0x0;
        /* IL_00: nop  CustomMethodAttributes.cs:32:5*/
        /* IL_01: ldtoken C */
        /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_0B: callvirt MethodInfo[] GetMethods() */
        /* IL_10: stloc.0  */
        loc0 = (((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60000f1"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)));
        /* IL_11: ldloc.0  */
        /* IL_12: ldc.i4.0  */
        /* IL_13: ldelem.ref  */
        /* IL_14: ldc.i4.1  */
        /* IL_15: callvirt Object[] GetCustomAttributes(System.Boolean) */
        /* IL_1A: stloc.1  */
        loc1 = (((BLR.ldelem_ref(loc0,(0|0)).vtable)["asm0.x600003a"])())(BLR.ldelem_ref(loc0,(0|0)),(1|0));
        /* IL_1B: ldloc.0  */
        /* IL_1C: ldc.i4.1  */
        /* IL_1D: ldelem.ref  */
        /* IL_1E: ldc.i4.1  */
        /* IL_1F: callvirt Object[] GetCustomAttributes(System.Boolean) */
        /* IL_24: stloc.2  */
        loc2 = (((BLR.ldelem_ref(loc0,(1|0)).vtable)["asm0.x600003a"])())(BLR.ldelem_ref(loc0,(1|0)),(1|0));
        /* IL_25: ldloc.1  */
        /* IL_26: ldlen  */
        /* IL_27: conv.i4  */
        /* IL_28: box System.Int32 */
        /* IL_2D: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': loc1.jsarr.length | (0|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_32: nop  */
        /* IL_33: ldloc.1  */
        /* IL_34: ldc.i4.0  */
        /* IL_35: ldelem.ref  */
        /* IL_36: callvirt Type GetType() */
        /* IL_3B: callvirt String get_Name() */
        /* IL_40: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x600000a(BLR.ldelem_ref(loc1,(0|0))).vtable)["asm0.x600003e"])())(asm0.x600000a(BLR.ldelem_ref(loc1,(0|0)))));
        /* IL_45: nop  */
        /* IL_46: ldloc.2  */
        /* IL_47: ldlen  */
        /* IL_48: conv.i4  */
        /* IL_49: box System.Int32 */
        /* IL_4E: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': loc2.jsarr.length | (0|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_53: nop  */
        /* IL_54: ldloc.2  */
        /* IL_55: ldc.i4.0  */
        /* IL_56: ldelem.ref  */
        /* IL_57: castclass B */
        /* IL_5C: callvirt Type get_T() */
        /* IL_61: callvirt String get_Name() */
        /* IL_66: call Void Log(System.Object) */
        asm1.x6000001((((asm1.x600000b(BLR.cast_class(BLR.ldelem_ref(loc2,(0|0)),t2)).vtable)["asm0.x600003e"])())(asm1.x600000b(BLR.cast_class(BLR.ldelem_ref(loc2,(0|0)),t2))));
        /* IL_6B: nop  */
        /* IL_6C: ret  CustomMethodAttributes.cs:43:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000013 = function _ctor(arg0)
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
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.B = BLR.declare_type(
        "B",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm1, "x600000b", "get_T"],
                    [asm1, "x600000c", "set_T"]
                ],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            (this.prototype)["B<T>k__BackingField"] = null;
        });
    asm.D = BLR.declare_type(
        "D",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[
                    [asm1, "x600000f", "M", [
                            [
                                asm1.A(),
                                asm1.x600000a
                            ]
                        ]],
                    [asm1, "x6000010", "N", [
                            [
                                asm1.B(),
                                asm1.x600000d,
                                [
                                    asm1.D()
                                ]
                            ]
                        ]]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000012;
})(asm1 || (asm1 = {}));
