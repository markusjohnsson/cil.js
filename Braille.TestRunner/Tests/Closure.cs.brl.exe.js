var asm1; (function (asm)
{
    asm.FullName = "Closure.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.String A.get_Prop()*/
    asm.x600000a = function get_Prop(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld String <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A<Prop>k__BackingField"];
    };;
    /* System.Void A.set_Prop(String)*/
    asm.x600000b = function set_Prop(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <Prop>k__BackingField*/
        (arg0)["A<Prop>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  A..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void X.Invoke()*/
    asm.x600000e = BLR.delegate_invoke;;
    /* System.IAsyncResult X.BeginInvoke(AsyncCallback,Object)*/
    asm.x600000f = BLR.delegate_begin_invoke;;
    /* System.Void X.EndInvoke(IAsyncResult)*/
    asm.x6000010 = BLR.delegate_end_invoke;;
    /*  X..ctor(Object,IntPtr)*/
    asm.x600000d = BLR.delegate_ctor;;
    /* static System.Void Program.Main()*/
    asm.x6000011_init = function ()
    {
        ((asm1)["Program+<>c__DisplayClass2"]().init)();
        (asm1.A().init)();
        (asm1.X().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        BLR.init_base_types();
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var __pos__;
        var loc2;
        var loc1;
        var loc0;
        t0 = (asm1)["Program+<>c__DisplayClass2"]();
        t1 = asm1.A();
        t2 = asm1.X();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.2 */
        loc2 = BLR.newobj(t0,asm1.x6000013,[null]);
        /* IL_06: ldloc.2 */
        st_04 = loc2;
        /* IL_07: newobj Void .ctor()*/
        /* IL_0C: stloc.1 */
        loc1 = BLR.newobj(t1,asm1.x600000c,[null]);
        /* IL_0D: ldloc.1 */
        st_02 = loc1;
        /* IL_0E: ldstr hello*/
        st_03 = BLR.new_string("hello");
        /* IL_13: callvirt Void set_Prop(System.String)*/
        asm1.x600000b(st_02,st_03);
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
        loc0 = BLR.newobj(t2,asm1.x600000d,[null, loc2, asm1.x6000014]);
        /* IL_32: ldloc.0 */
        /* IL_33: callvirt Void Invoke()*/
        loc0._methodPtr.apply(null,((loc0._target) ? ([
                loc0._target
            ]) : ([])));
        /* IL_38: ldloc.2 */
        /* IL_39: ldfld A b*/
        /* IL_3E: callvirt String get_Prop()*/
        /* IL_43: call Void Log(System.Object)*/
        asm1.x6000001(asm1.x600000a(loc2.b));
        /* IL_48: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void <>c__DisplayClass2.<Main>b__1()*/
    asm.x6000014 = function _Main_b__1(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld A a*/
        /* IL_07: stfld A b*/
        arg0.b = arg0.a;
        /* IL_0C: ret */
        return ;
    };;
    /*  <>c__DisplayClass2..ctor()*/
    asm.x6000013 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x600000a", "get_Prop"],
                    [asm1, "x600000b", "set_Prop"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            (this.prototype)["A<Prop>k__BackingField"] = null;
        });
    asm.X = BLR.declare_type(
        "X",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"X",false,false,false,false,false,[],[
                    [asm1, "x600000e", "Invoke"],
                    [asm1, "x600000f", "BeginInvoke"],
                    [asm1, "x6000010", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm1.x6000010","asm1.x6000010");
            BLR.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            BLR.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Program+<>c__DisplayClass2"] = BLR.declare_type(
        "__c__DisplayClass2",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program+<>c__DisplayClass2",false,false,false,false,false,[],[
                    [asm1, "x6000014", "<Main>b__1"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.a = null;
            this.prototype.b = null;
        });
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
