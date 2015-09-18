var asm1;(function (asm)
{
    asm.FullName = "GenericClassBasics.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* T A`1.get_Prop()*/
    asm.x6000001 = function get_Prop(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld T <Prop>k__BackingField */
        /* IL_06: ret  */
        return (arg0)["A_1<Prop>k__BackingField"];
    };;
    /* System.Void A`1.set_Prop(T)*/
    asm.x6000002 = function set_Prop(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld T <Prop>k__BackingField */
        (arg0)["A_1<Prop>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  A`1..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  IntWrapper..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  StringWrapper..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000006_init = function ()
    {
        (asm1.IntWrapper().init)();
        ((asm1)["A`1"](asm1.IntWrapper()).init)();
        (asm1.StringWrapper().init)();
        ((asm1)["A`1"](asm1.StringWrapper()).init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function ()
    {
        asm.x6000006_init.apply(this,arguments);
        return asm.x6000006_.apply(this,arguments);
    };;
    asm.x6000006_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var loc0;
        var loc2;
        var loc1;
        var loc3;
        CILJS.init_base_types();
        t0 = asm1.IntWrapper();
        t1 = (asm1)["A`1"](t0);
        t2 = asm1.StringWrapper();
        t3 = (asm1)["A`1"](t2);
        t4 = (asm0)["System.Int32"]();
        t5 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = CILJS.newobj(t1,asm1.x6000003,[null]);
        /* IL_07: ldloc.0  */
        st_04 = loc0;
        /* IL_08: newobj Void .ctor() */
        /* IL_0D: stloc.2  */
        loc2 = CILJS.newobj(t0,asm1.x6000004,[null]);
        /* IL_0E: ldloc.2  */
        st_02 = loc2;
        /* IL_0F: ldc.i4.s 123 */
        st_03 = (123|0);
        /* IL_11: stfld Int32 Value */
        st_02.Value = st_03;
        /* IL_16: ldloc.2  */
        st_05 = loc2;
        /* IL_17: callvirt Void set_Prop(IntWrapper) */
        asm1.x6000002(st_04,st_05);
        /* IL_1C: nop  */
        /* IL_1D: newobj Void .ctor() */
        /* IL_22: stloc.1  */
        loc1 = CILJS.newobj(t3,asm1.x6000003,[null]);
        /* IL_23: ldloc.1  */
        st_0A = loc1;
        /* IL_24: newobj Void .ctor() */
        /* IL_29: stloc.3  */
        loc3 = CILJS.newobj(t2,asm1.x6000005,[null]);
        /* IL_2A: ldloc.3  */
        st_08 = loc3;
        /* IL_2B: ldstr Hello */
        st_09 = CILJS.new_string("Hello");
        /* IL_30: stfld String Value */
        st_08.Value = st_09;
        /* IL_35: ldloc.3  */
        st_0B = loc3;
        /* IL_36: callvirt Void set_Prop(StringWrapper) */
        asm1.x6000002(st_0A,st_0B);
        /* IL_3B: nop  */
        /* IL_3C: ldloc.0  */
        /* IL_3D: callvirt IntWrapper get_Prop() */
        /* IL_42: ldfld Int32 Value */
        /* IL_47: box System.Int32 */
        /* IL_4C: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': asm1.x6000001(loc0).Value,
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_51: nop  */
        /* IL_52: ldloc.1  */
        /* IL_53: callvirt StringWrapper get_Prop() */
        /* IL_58: ldfld String Value */
        /* IL_5D: ldc.i4.0  */
        /* IL_5E: newarr System.Object */
        /* IL_63: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(asm1.x6000001(loc1).Value,CILJS.new_array(t5,(0|0)));
        /* IL_68: nop  */
        /* IL_69: ret  */
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
    (asm)["A`1"] = CILJS.declare_type(
        "A_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[
                    [asm1, "x6000001", "get_Prop"],
                    [asm1, "x6000002", "set_Prop"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            (this.GenericArguments)["asm1.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            (this.prototype)["A_1<Prop>k__BackingField"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
        });
    asm.IntWrapper = CILJS.declare_type(
        "IntWrapper",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IntWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.Value = 0;
        });
    asm.StringWrapper = CILJS.declare_type(
        "StringWrapper",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"StringWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.Value = null;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000006;
})(asm1 || (asm1 = {}));
