var asm1;(function (asm)
{
    asm.FullName = "CustomMethodAttributes.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm0.x600003e(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
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
        /* IL_06: nop  */
        /* IL_07: nop  */
        /* IL_08: ldarg.0  */
        /* IL_09: ldarg.1  */
        /* IL_0A: call Void set_T(System.Type) */
        asm1.x6000003(arg0,arg1);
        /* IL_0F: nop  */
        /* IL_10: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Void C.M()*/
    asm.x6000006 = function M(arg0)
    {
        /* IL_00: nop  */
        /* IL_01: ret  */
        return ;
    };;
    /* System.Void C.N()*/
    asm.x6000007 = function N(arg0)
    {
        /* IL_00: nop  */
        /* IL_01: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000008 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000009_init = function ()
    {
        (asm1.C().init)();
        (asm1.B().init)();
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
        var t3;
        var loc0;
        var loc1;
        var loc2;
        CILJS.init_base_types();
        t0 = asm1.C();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.Object"]();
        t3 = asm1.B();
        /* IL_00: nop  */
        /* IL_01: ldtoken C */
        /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_0B: callvirt MethodInfo[] GetMethods() */
        /* IL_10: stloc.0  */
        loc0 = (((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x6000157"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)));
        /* IL_11: ldloc.0  */
        /* IL_12: ldc.i4.0  */
        /* IL_13: ldelem.ref  */
        /* IL_14: ldc.i4.1  */
        /* IL_15: callvirt Object[] GetCustomAttributes(System.Boolean) */
        /* IL_1A: stloc.1  */
        loc1 = (((CILJS.ldelem_ref(loc0,(0|0)).vtable)["asm0.x60001a0"])())(CILJS.ldelem_ref(loc0,(0|0)),(1|0));
        /* IL_1B: ldloc.0  */
        /* IL_1C: ldc.i4.1  */
        /* IL_1D: ldelem.ref  */
        /* IL_1E: ldc.i4.1  */
        /* IL_1F: callvirt Object[] GetCustomAttributes(System.Boolean) */
        /* IL_24: stloc.2  */
        loc2 = (((CILJS.ldelem_ref(loc0,(1|0)).vtable)["asm0.x60001a0"])())(CILJS.ldelem_ref(loc0,(1|0)),(1|0));
        /* IL_25: ldloc.1  */
        /* IL_26: ldlen  */
        /* IL_27: conv.i4  */
        /* IL_28: box System.Int32 */
        /* IL_2D: call Void WriteLine(System.Object) */
        asm0.x600005a({
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
        /* IL_40: ldc.i4.0  */
        /* IL_41: newarr System.Object */
        /* IL_46: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x60000f2(CILJS.ldelem_ref(loc1,(0|0))).vtable)["asm0.x60001a4"])())(asm0.x60000f2(CILJS.ldelem_ref(loc1,(0|0)))),CILJS.new_array(t2,(0|0)));
        /* IL_4B: nop  */
        /* IL_4C: ldloc.2  */
        /* IL_4D: ldlen  */
        /* IL_4E: conv.i4  */
        /* IL_4F: box System.Int32 */
        /* IL_54: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': loc2.jsarr.length | (0|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_59: nop  */
        /* IL_5A: ldloc.2  */
        /* IL_5B: ldc.i4.0  */
        /* IL_5C: ldelem.ref  */
        /* IL_5D: castclass B */
        /* IL_62: callvirt Type get_T() */
        /* IL_67: callvirt String get_Name() */
        /* IL_6C: ldc.i4.0  */
        /* IL_6D: newarr System.Object */
        /* IL_72: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(((((CILJS.cast_class(CILJS.ldelem_ref(loc2,(0|0)),t3))["B<T>k__BackingField"].vtable)["asm0.x60001a4"])())((CILJS.cast_class(CILJS.ldelem_ref(loc2,(0|0)),t3))["B<T>k__BackingField"]),CILJS.new_array(t2,(0|0)));
        /* IL_77: nop  */
        /* IL_78: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000a = function _ctor(arg0)
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
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
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
                    [asm1, "x6000002", "get_T"],
                    [asm1, "x6000003", "set_T"]
                ],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
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
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
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
                    [asm1, "x6000006", "M", [
                            [
                                asm1.A(),
                                asm1.x6000001
                            ]
                        ]],
                    [asm1, "x6000007", "N", [
                            [
                                asm1.B(),
                                asm1.x6000004,
                                [
                                    asm1.D()
                                ]
                            ]
                        ]]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000009;
})(asm1 || (asm1 = {}));
