var asm2; (function (asm)
{
    asm.FullName = "CustomClassAttributes.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x600003e(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.String A2.get_P()*/
    asm.x6000003 = function get_P(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld String <P>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A2<P>k__BackingField"];
    };;
    /* System.Void A2.set_P(String)*/
    asm.x6000004 = function set_P(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <P>k__BackingField*/
        (arg0)["A2<P>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  A2..ctor(String)*/
    asm.x6000005 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x600003e(arg0);
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: call Void set_P(System.String)*/
        asm2.x6000004(arg0,arg1);
        /* IL_0D: ret */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main(String[])*/
    asm.x6000008_init = function ()
    {
        (asm2.B().init)();
        (asm2.A().init)();
        (asm2.C().init)();
        (asm2.A2().init)();
        (asm2.D().init)();
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
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        CILJS.init_base_types();
        t0 = asm2.B();
        t1 = (asm0)["System.Int32"]();
        t2 = asm2.A();
        t3 = (asm0)["System.Boolean"]();
        t4 = asm2.C();
        t5 = asm2.A2();
        t6 = asm2.D();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldtoken B*/
                /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_0A: ldc.i4.1 */
                /* IL_0B: callvirt Object[] GetCustomAttributes(System.Boolean)*/
                /* IL_10: stloc.0 */
                loc0 = (((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60001a0"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)),(1|0));
                /* IL_11: ldloc.0 */
                /* IL_12: ldlen */
                /* IL_13: conv.i4 */
                /* IL_14: box System.Int32*/
                /* IL_19: call Void Log(System.Object)*/
                asm1.x6000001({
                        'boxed': loc0.jsarr.length | (0|0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    });
                /* IL_1E: ldc.i4.0 */
                /* IL_1F: stloc.1 */
                loc1 = (0|0);
                /* IL_20: br.s IL_59*/
                __pos__ = 0x59;
                continue;
                case 0x22:
                /* IL_22: ldtoken A*/
                /* IL_27: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_2C: ldloc.0 */
                /* IL_2D: ldloc.1 */
                /* IL_2E: ldelem.ref */
                /* IL_2F: callvirt Type GetType()*/
                /* IL_34: callvirt Boolean Equals(System.Object)*/
                /* IL_39: box System.Boolean*/
                /* IL_3E: call Void Log(System.Object)*/
                asm1.x6000001({
                        'boxed': (((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x60000f0"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)),asm0.x60000f2(CILJS.ldelem_ref(loc0,loc1))),
                        'type': t3,
                        'vtable': t3.prototype.vtable,
                        'ifacemap': t3.prototype.ifacemap
                    });
                /* IL_43: ldloc.0 */
                /* IL_44: ldloc.1 */
                /* IL_45: ldelem.ref */
                /* IL_46: callvirt Type GetType()*/
                /* IL_4B: callvirt String get_FullName()*/
                /* IL_50: call Void Log(System.Object)*/
                asm1.x6000001((((asm0.x60000f2(CILJS.ldelem_ref(loc0,loc1)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.ldelem_ref(loc0,loc1))));
                /* IL_55: ldloc.1 */
                /* IL_56: ldc.i4.1 */
                /* IL_57: add */
                /* IL_58: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x59:
                /* IL_59: ldloc.1 */
                /* IL_5A: ldloc.0 */
                /* IL_5B: ldlen */
                /* IL_5C: conv.i4 */
                /* IL_5D: blt.s IL_22*/
                
                if (loc1 < (loc0.jsarr.length | (0|0))){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_5F: ldtoken C*/
                /* IL_64: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_69: ldc.i4.1 */
                /* IL_6A: callvirt Object[] GetCustomAttributes(System.Boolean)*/
                /* IL_6F: stloc.2 */
                loc2 = (((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t4)).vtable)["asm0.x60001a0"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t4)),(1|0));
                /* IL_70: ldloc.2 */
                /* IL_71: ldc.i4.0 */
                /* IL_72: ldelem.ref */
                /* IL_73: castclass A2*/
                /* IL_78: callvirt String get_P()*/
                /* IL_7D: call Void Log(System.Object)*/
                asm1.x6000001(asm2.x6000003(CILJS.cast_class(CILJS.ldelem_ref(loc2,(0|0)),t5)));
                /* IL_82: ldtoken D*/
                /* IL_87: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_8C: ldc.i4.1 */
                /* IL_8D: callvirt Object[] GetCustomAttributes(System.Boolean)*/
                /* IL_92: stloc.3 */
                loc3 = (((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t6)).vtable)["asm0.x60001a0"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t6)),(1|0));
                /* IL_93: ldloc.3 */
                /* IL_94: ldlen */
                /* IL_95: conv.i4 */
                /* IL_96: box System.Int32*/
                /* IL_9B: call Void Log(System.Object)*/
                asm1.x6000001({
                        'boxed': loc3.jsarr.length | (0|0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    });
                /* IL_A0: ret */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000009 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
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
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[
                    [
                        asm2.A(),
                        asm2.x6000001
                    ]
                ],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.A2 = CILJS.declare_type(
        "A2",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A2",false,false,false,false,false,[],[
                    [asm2, "x6000003", "get_P"],
                    [asm2, "x6000004", "set_P"]
                ],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
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
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[
                    [
                        asm2.A2(),
                        asm2.x6000005,
                        [
                            CILJS.new_string("xyz")
                        ]
                    ]
                ],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
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
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
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
    asm.entryPoint = asm.x6000008;
})(asm2 || (asm2 = {}));
