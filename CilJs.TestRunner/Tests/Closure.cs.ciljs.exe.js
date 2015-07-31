var asm2; (function (asm)
{
    asm.FullName = "Closure.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.String A.get_Prop()*/
    asm.x6000001 = function get_Prop(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld String <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A<Prop>k__BackingField"];
    };;
    /* System.Void A.set_Prop(String)*/
    asm.x6000002 = function set_Prop(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <Prop>k__BackingField*/
        (arg0)["A<Prop>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  A..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void X.Invoke()*/
    asm.x6000005 = CILJS.delegate_invoke;;
    /* System.IAsyncResult X.BeginInvoke(AsyncCallback,Object)*/
    asm.x6000006 = CILJS.delegate_begin_invoke;;
    /* System.Void X.EndInvoke(IAsyncResult)*/
    asm.x6000007 = CILJS.delegate_end_invoke;;
    /*  X..ctor(Object,IntPtr)*/
    asm.x6000004 = CILJS.delegate_ctor;;
    /* static System.Void Program.Main()*/
    asm.x6000008_init = function ()
    {
        ((asm2)["Program+<>c__DisplayClass2"]().init)();
        (asm2.A().init)();
        (asm2.X().init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function ()
    {
        asm.x6000008_init.apply(this,arguments);
        return asm.x6000008_.apply(this,arguments);
    };;
    asm.x6000008_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var loc2;
        var loc1;
        var loc0;
        CILJS.init_base_types();
        t0 = (asm2)["Program+<>c__DisplayClass2"]();
        t1 = asm2.A();
        t2 = asm2.X();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.2 */
        loc2 = CILJS.newobj(t0,asm2.x600000a,[null]);
        /* IL_06: ldloc.2 */
        st_04 = loc2;
        /* IL_07: newobj Void .ctor()*/
        /* IL_0C: stloc.1 */
        loc1 = CILJS.newobj(t1,asm2.x6000003,[null]);
        /* IL_0D: ldloc.1 */
        st_02 = loc1;
        /* IL_0E: ldstr hello*/
        st_03 = CILJS.new_string("hello");
        /* IL_13: callvirt Void set_Prop(System.String)*/
        asm2.x6000002(st_02,st_03);
        /* IL_18: ldloc.1 */
        st_05 = loc1;
        /* IL_19: stfld A a*/
        st_04.a = st_05;
        /* IL_1E: ldloc.2 */
        /* IL_1F: ldnull */
        /* IL_20: stfld A b*/
        loc2.b = null;
        /* IL_25: ldloc.2 */
        /* IL_27: ldftn Void <Main>b__1()*/
        /* IL_2C: newobj Void .ctor(System.Object, System.IntPtr)*/
        /* IL_31: stloc.0 */
        loc0 = CILJS.newobj(t2,asm2.x6000004,[null, loc2, asm2.x600000b]);
        /* IL_32: ldloc.0 */
        /* IL_33: callvirt Void Invoke()*/
        loc0._methodPtr.apply(null,((loc0._target) ? ([
                loc0._target
            ]) : ([])));
        /* IL_38: ldloc.2 */
        /* IL_39: ldfld A b*/
        /* IL_3E: callvirt String get_Prop()*/
        /* IL_43: call Void Log(System.Object)*/
        asm1.x6000001(asm2.x6000001(loc2.b));
        /* IL_48: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000009 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void <>c__DisplayClass2.<Main>b__1()*/
    asm.x600000b = function _Main_b__1(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld A a*/
        /* IL_07: stfld A b*/
        arg0.b = arg0.a;
        /* IL_0C: ret */
        return ;
    };;
    /*  <>c__DisplayClass2..ctor()*/
    asm.x600000a = function _ctor(arg0)
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
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm2, "x6000001", "get_Prop"],
                    [asm2, "x6000002", "set_Prop"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            (this.prototype)["A<Prop>k__BackingField"] = null;
        });
    asm.X = CILJS.declare_type(
        "X",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[
                    [asm2, "x6000005", "Invoke"],
                    [asm2, "x6000006", "BeginInvoke"],
                    [asm2, "x6000007", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm2.x6000005","asm2.x6000005");
            CILJS.declare_virtual(this,"asm2.x6000006","asm2.x6000006");
            CILJS.declare_virtual(this,"asm2.x6000007","asm2.x6000007");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["Program+<>c__DisplayClass2"] = CILJS.declare_type(
        "__c__DisplayClass2",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+<>c__DisplayClass2",false,false,false,false,false,[],[
                    [asm2, "x600000b", "<Main>b__1"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.a = null;
            this.prototype.b = null;
        });
    asm.entryPoint = asm.x6000008;
})(asm2 || (asm2 = {}));
