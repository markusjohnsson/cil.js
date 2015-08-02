var asm2;(function (asm)
{
    asm.FullName = "CustomMethodAttributes.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm0.x600003e(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /* System.Type B.get_T()*/
    asm.x6000002 = function get_T(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld Type <T>k__BackingField */
        /* IL_06: ret  */
        return (arg0)["B<T>k__BackingField"];
    };;
    /* System.Void B.set_T(Type)*/
    asm.x6000003 = function set_T(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld Type <T>k__BackingField */
        (arg0)["B<T>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  B..ctor(Type)*/
    asm.x6000004 = function _ctor(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm0.x600003e(arg0);
        /* IL_06: ldarg.0  */
        /* IL_07: ldarg.1  */
        /* IL_08: call Void set_T(System.Type) */
        asm2.x6000003(arg0,arg1);
        /* IL_0D: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void C.M()*/
    asm.x6000006 = function M(arg0)
    {
        /* IL_00: ret  */
        return ;
    };;
    /* System.Void C.N()*/
    asm.x6000007 = function N(arg0)
    {
        /* IL_00: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000008 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000009_init = function ()
    {
        (asm2.C().init)();
        (asm2.B().init)();
        asm.x6000009 = asm.x6000009_;
    };;
    asm.x6000009 = function ()
    {
        asm.x6000009_init.apply(this,arguments);
        return asm.x6000009_.apply(this,arguments);
    };;
    asm.x6000009_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc0;
        var loc1;
        var loc2;
        CILJS.init_base_types();
        t0 = asm2.C();
        t1 = (asm0)["System.Int32"]();
        t2 = asm2.B();
        /* IL_00: ldtoken C */
        /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_0A: callvirt MethodInfo[] GetMethods() */
        /* IL_0F: stloc.0  */
        loc0 = (((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x6000157"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)));
        /* IL_10: ldloc.0  */
        /* IL_11: ldc.i4.0  */
        /* IL_12: ldelem.ref  */
        /* IL_13: ldc.i4.1  */
        /* IL_14: callvirt Object[] GetCustomAttributes(System.Boolean) */
        /* IL_19: stloc.1  */
        loc1 = (((CILJS.ldelem_ref(loc0,(0|0)).vtable)["asm0.x60001a0"])())(CILJS.ldelem_ref(loc0,(0|0)),(1|0));
        /* IL_1A: ldloc.0  */
        /* IL_1B: ldc.i4.1  */
        /* IL_1C: ldelem.ref  */
        /* IL_1D: ldc.i4.1  */
        /* IL_1E: callvirt Object[] GetCustomAttributes(System.Boolean) */
        /* IL_23: stloc.2  */
        loc2 = (((CILJS.ldelem_ref(loc0,(1|0)).vtable)["asm0.x60001a0"])())(CILJS.ldelem_ref(loc0,(1|0)),(1|0));
        /* IL_24: ldloc.1  */
        /* IL_25: ldlen  */
        /* IL_26: conv.i4  */
        /* IL_27: box System.Int32 */
        /* IL_2C: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': loc1.jsarr.length | (0|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_31: ldloc.1  */
        /* IL_32: ldc.i4.0  */
        /* IL_33: ldelem.ref  */
        /* IL_34: callvirt Type GetType() */
        /* IL_39: callvirt String get_Name() */
        /* IL_3E: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x60000f2(CILJS.ldelem_ref(loc1,(0|0))).vtable)["asm0.x60001a4"])())(asm0.x60000f2(CILJS.ldelem_ref(loc1,(0|0)))));
        /* IL_43: ldloc.2  */
        /* IL_44: ldlen  */
        /* IL_45: conv.i4  */
        /* IL_46: box System.Int32 */
        /* IL_4B: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': loc2.jsarr.length | (0|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_50: ldloc.2  */
        /* IL_51: ldc.i4.0  */
        /* IL_52: ldelem.ref  */
        /* IL_53: castclass B */
        /* IL_58: callvirt Type get_T() */
        /* IL_5D: callvirt String get_Name() */
        /* IL_62: call Void Log(System.Object) */
        asm1.x6000001((((asm2.x6000002(CILJS.cast_class(CILJS.ldelem_ref(loc2,(0|0)),t2)).vtable)["asm0.x60001a4"])())(asm2.x6000002(CILJS.cast_class(CILJS.ldelem_ref(loc2,(0|0)),t2))));
        /* IL_67: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000a = function _ctor(arg0)
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
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm2, "x6000002", "get_T"],
                    [asm2, "x6000003", "set_T"]
                ],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            (this.prototype)["B<T>k__BackingField"] = null;
        });
    asm.D = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[
                    [asm2, "x6000006", "M", [
                            [
                                asm2.A(),
                                asm2.x6000001
                            ]
                        ]],
                    [asm2, "x6000007", "N", [
                            [
                                asm2.B(),
                                asm2.x6000004,
                                [
                                    asm2.D()
                                ]
                            ]
                        ]]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000009;
})(asm2 || (asm2 = {}));
