var asm2; (function (asm)
{
    asm.FullName = "GenericClassBasics.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* T A`1.get_Prop()*/
    asm.x6000001 = function get_Prop(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld T <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A_1<Prop>k__BackingField"];
    };;
    /* System.Void A`1.set_Prop(T)*/
    asm.x6000002 = function set_Prop(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld T <Prop>k__BackingField*/
        (arg0)["A_1<Prop>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  A`1..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  IntWrapper..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  StringWrapper..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000006_init = function ()
    {
        (asm2.IntWrapper().init)();
        ((asm2)["A`1"](asm2.IntWrapper()).init)();
        (asm2.StringWrapper().init)();
        ((asm2)["A`1"](asm2.StringWrapper()).init)();
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
        t0 = asm2.IntWrapper();
        t1 = (asm2)["A`1"](t0);
        t2 = asm2.StringWrapper();
        t3 = (asm2)["A`1"](t2);
        t4 = (asm0)["System.Int32"]();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t1,asm2.x6000003,[null]);
        /* IL_06: ldloc.0 */
        st_04 = loc0;
        /* IL_07: newobj Void .ctor()*/
        /* IL_0C: stloc.2 */
        loc2 = CILJS.newobj(t0,asm2.x6000004,[null]);
        /* IL_0D: ldloc.2 */
        st_02 = loc2;
        /* IL_0E: ldc.i4.s 123*/
        st_03 = (123|0);
        /* IL_10: stfld Int32 Value*/
        st_02.Value = st_03;
        /* IL_15: ldloc.2 */
        st_05 = loc2;
        /* IL_16: callvirt Void set_Prop(IntWrapper)*/
        asm2.x6000002(st_04,st_05);
        /* IL_1B: newobj Void .ctor()*/
        /* IL_20: stloc.1 */
        loc1 = CILJS.newobj(t3,asm2.x6000003,[null]);
        /* IL_21: ldloc.1 */
        st_0A = loc1;
        /* IL_22: newobj Void .ctor()*/
        /* IL_27: stloc.3 */
        loc3 = CILJS.newobj(t2,asm2.x6000005,[null]);
        /* IL_28: ldloc.3 */
        st_08 = loc3;
        /* IL_29: ldstr Hello*/
        st_09 = CILJS.new_string("Hello");
        /* IL_2E: stfld String Value*/
        st_08.Value = st_09;
        /* IL_33: ldloc.3 */
        st_0B = loc3;
        /* IL_34: callvirt Void set_Prop(StringWrapper)*/
        asm2.x6000002(st_0A,st_0B);
        /* IL_39: ldloc.0 */
        /* IL_3A: callvirt IntWrapper get_Prop()*/
        /* IL_3F: ldfld Int32 Value*/
        /* IL_44: box System.Int32*/
        /* IL_49: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm2.x6000001(loc0).Value,
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_4E: ldloc.1 */
        /* IL_4F: callvirt StringWrapper get_Prop()*/
        /* IL_54: ldfld String Value*/
        /* IL_59: call Void Log(System.Object)*/
        asm1.x6000001(asm2.x6000001(loc1).Value);
        /* IL_5E: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    (asm)["A`1"] = CILJS.declare_type(
        "A_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[
                    [asm2, "x6000001", "get_Prop"],
                    [asm2, "x6000002", "set_Prop"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            (this.GenericArguments)["asm2.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000002<" + (T.GenericTypeMetadataName + ">"));
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
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IntWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
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
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"StringWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
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
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000006;
})(asm2 || (asm2 = {}));
