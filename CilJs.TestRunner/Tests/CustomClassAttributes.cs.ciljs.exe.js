var asm1;(function (asm)
{
    asm.FullName = "CustomClassAttributes.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm0.x600003e(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.String A2.get_P()*/
    asm.x6000003 = function get_P(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld String <P>k__BackingField */
        /* IL_06: ret  */
        return (arg0)["A2<P>k__BackingField"];
    };;
    /* System.Void A2.set_P(String)*/
    asm.x6000004 = function set_P(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld String <P>k__BackingField */
        (arg0)["A2<P>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  A2..ctor(String)*/
    asm.x6000005 = function _ctor(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm0.x600003e(arg0);
        /* IL_06: ldarg.0  */
        /* IL_07: ldarg.1  */
        /* IL_08: call Void set_P(System.String) */
        asm1.x6000004(arg0,arg1);
        /* IL_0D: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main(String[])*/
    asm.x6000008_init = function ()
    {
        (asm1.B().init)();
        (asm1.A().init)();
        (asm1.C().init)();
        (asm1.A2().init)();
        (asm1.D().init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function (arg0)
    {
        asm.x6000008_init.apply(this,arguments);
        return asm.x6000008_.apply(this,arguments);
    };;
    asm.x6000008_ = function Main(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var t7;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        CILJS.init_base_types();
        t0 = asm1.B();
        t1 = (asm0)["System.Int32"]();
        t2 = asm1.A();
        t3 = (asm0)["System.Boolean"]();
        t4 = (asm0)["System.Object"]();
        t5 = asm1.C();
        t6 = asm1.A2();
        t7 = asm1.D();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldtoken B */
                /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_0A: ldc.i4.1  */
                /* IL_0B: callvirt Object[] GetCustomAttributes(System.Boolean) */
                /* IL_10: stloc.0  */
                loc0 = (((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60001a0"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),(1|0));
                /* IL_11: ldloc.0  */
                /* IL_12: ldlen  */
                /* IL_13: conv.i4  */
                /* IL_14: box System.Int32 */
                /* IL_19: call Void WriteLine(System.Object) */
                asm0.x600005a({
                        'boxed': loc0.jsarr.length | (0|0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    });
                /* IL_1E: ldc.i4.0  */
                /* IL_1F: stloc.1  */
                loc1 = (0|0);
                /* IL_20: br.s IL_5F */
                __pos__ = 0x5F;
                continue;
                case 0x22:
                /* IL_22: ldtoken A */
                /* IL_27: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_2C: ldloc.0  */
                /* IL_2D: ldloc.1  */
                /* IL_2E: ldelem.ref  */
                /* IL_2F: callvirt Type GetType() */
                /* IL_34: callvirt Boolean Equals(System.Object) */
                /* IL_39: box System.Boolean */
                /* IL_3E: call Void WriteLine(System.Object) */
                asm0.x600005a({
                        'boxed': (((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x60000f0"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)),asm0.x60000f2(CILJS.ldelem_ref(loc0,loc1))),
                        'type': t3,
                        'vtable': t3.prototype.vtable,
                        'ifacemap': t3.prototype.ifacemap
                    });
                /* IL_43: ldloc.0  */
                /* IL_44: ldloc.1  */
                /* IL_45: ldelem.ref  */
                /* IL_46: callvirt Type GetType() */
                /* IL_4B: callvirt String get_FullName() */
                /* IL_50: ldc.i4.0  */
                /* IL_51: newarr System.Object */
                /* IL_56: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b((((asm0.x60000f2(CILJS.ldelem_ref(loc0,loc1)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.ldelem_ref(loc0,loc1))),CILJS.new_array(t4,(0|0)));
                /* IL_5B: ldloc.1  */
                /* IL_5C: ldc.i4.1  */
                /* IL_5D: add  */
                /* IL_5E: stloc.1  */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x5F:
                /* IL_5F: ldloc.1  */
                /* IL_60: ldloc.0  */
                /* IL_61: ldlen  */
                /* IL_62: conv.i4  */
                /* IL_63: blt.s IL_22 */
                
                if (loc1 < (loc0.jsarr.length | (0|0))){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_65: ldtoken C */
                /* IL_6A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_6F: ldc.i4.1  */
                /* IL_70: callvirt Object[] GetCustomAttributes(System.Boolean) */
                /* IL_75: stloc.2  */
                loc2 = (((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5)).vtable)["asm0.x60001a0"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5)),(1|0));
                /* IL_76: ldloc.2  */
                /* IL_77: ldc.i4.0  */
                /* IL_78: ldelem.ref  */
                /* IL_79: castclass A2 */
                /* IL_7E: callvirt String get_P() */
                /* IL_83: ldc.i4.0  */
                /* IL_84: newarr System.Object */
                /* IL_89: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(asm1.x6000003(CILJS.cast_class(CILJS.ldelem_ref(loc2,(0|0)),t6)),CILJS.new_array(t4,(0|0)));
                /* IL_8E: ldtoken D */
                /* IL_93: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_98: ldc.i4.1  */
                /* IL_99: callvirt Object[] GetCustomAttributes(System.Boolean) */
                /* IL_9E: stloc.3  */
                loc3 = (((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t7)).vtable)["asm0.x60001a0"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t7)),(1|0));
                /* IL_9F: ldloc.3  */
                /* IL_A0: ldlen  */
                /* IL_A1: conv.i4  */
                /* IL_A2: box System.Int32 */
                /* IL_A7: call Void WriteLine(System.Object) */
                asm0.x600005a({
                        'boxed': loc3.jsarr.length | (0|0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    });
                /* IL_AC: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000009 = function _ctor(arg0)
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
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[
                    [
                        asm1.A(),
                        asm1.x6000001
                    ]
                ],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.A2 = CILJS.declare_type(
        "A2",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A2",false,false,false,false,false,[],[
                    [asm1, "x6000003", "get_P"],
                    [asm1, "x6000004", "set_P"]
                ],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            (this.prototype)["A2<P>k__BackingField"] = null;
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[
                    [
                        asm1.A2(),
                        asm1.x6000005,
                        [
                            CILJS.new_string("xyz")
                        ]
                    ]
                ],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
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
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000008;
})(asm1 || (asm1 = {}));
