var asm1;(function (asm)
{
    asm.FullName = "Closure.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
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
    /* System.String A.get_Prop()*/
    asm.x600000a = function get_Prop(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld String <Prop>k__BackingField */
        /* IL_06: stloc.0  */
        loc0 = (arg0)["A<Prop>k__BackingField"];
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /* System.Void A.set_Prop(String)*/
    asm.x600000b = function set_Prop(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld String <Prop>k__BackingField */
        (arg0)["A<Prop>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  A..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void X.Invoke()*/
    asm.x600000e = CILJS.delegate_invoke;;
    /* System.IAsyncResult X.BeginInvoke(AsyncCallback,Object)*/
    asm.x600000f = CILJS.delegate_begin_invoke;;
    /* System.Void X.EndInvoke(IAsyncResult)*/
    asm.x6000010 = CILJS.delegate_end_invoke;;
    /*  X..ctor(Object,IntPtr)*/
    asm.x600000d = CILJS.delegate_ctor;;
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
        CILJS.init_base_types();
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
        /* IL_00: newobj Void .ctor() */
        /* IL_05: stloc.2  */
        loc2 = CILJS.newobj(t0,asm1.x6000013,[null]);
        /* IL_06: nop  Closure.cs:9:5*/
        /* IL_07: ldloc.2  Closure.cs:10:9*/
        st_04 = loc2;
        /* IL_08: newobj Void .ctor() */
        /* IL_0D: stloc.1  */
        loc1 = CILJS.newobj(t1,asm1.x600000c,[null]);
        /* IL_0E: ldloc.1  */
        st_02 = loc1;
        /* IL_0F: ldstr hello */
        st_03 = CILJS.new_string("hello");
        /* IL_14: callvirt Void set_Prop(System.String) */
        asm1.x600000b(st_02,st_03);
        /* IL_19: nop  */
        /* IL_1A: ldloc.1  */
        st_05 = loc1;
        /* IL_1B: stfld A a */
        st_04.a = st_05;
        /* IL_20: ldloc.2  */
        /* IL_21: ldnull  */
        /* IL_22: stfld A b */
        loc2.b = null;
        /* IL_27: ldloc.2  */
        /* IL_29: ldftn Void <Main>b__1() */
        /* IL_2E: newobj Void .ctor(System.Object, System.IntPtr) */
        /* IL_33: stloc.0  */
        loc0 = CILJS.newobj(t2,asm1.x600000d,[null, loc2, asm1.x6000014]);
        /* IL_34: ldloc.0  */
        /* IL_35: callvirt Void Invoke() */
        loc0._methodPtr.apply(null,((loc0._target) ? ([
                loc0._target
            ]) : ([])));
        /* IL_3A: nop  */
        /* IL_3B: ldloc.2  */
        /* IL_3C: ldfld A b */
        /* IL_41: callvirt String get_Prop() */
        /* IL_46: call Void Log(System.Object) */
        asm1.x6000001(asm1.x600000a(loc2.b));
        /* IL_4B: nop  */
        /* IL_4C: nop  Closure.cs:21:5*/
        /* IL_4D: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void <>c__DisplayClass2.<Main>b__1()*/
    asm.x6000014 = function _Main_b__1(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  Closure.cs:14:9*/
        /* IL_01: ldarg.0  */
        /* IL_02: ldarg.0  */
        /* IL_03: ldfld A a */
        /* IL_08: stfld A b */
        arg0.b = arg0.a;
        /* IL_0D: ret  Closure.cs:16707566:0*/
        return ;
    };;
    /*  <>c__DisplayClass2..ctor()*/
    asm.x6000013 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.TestLog = CILJS.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x600000a", "get_Prop"],
                    [asm1, "x600000b", "set_Prop"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
                    [asm1, "x600000e", "Invoke"],
                    [asm1, "x600000f", "BeginInvoke"],
                    [asm1, "x6000010", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            CILJS.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            CILJS.declare_virtual(this,"asm1.x6000010","asm1.x6000010");
            CILJS.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            CILJS.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Program+<>c__DisplayClass2"] = CILJS.declare_type(
        "__c__DisplayClass2",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+<>c__DisplayClass2",false,false,false,false,false,[],[
                    [asm1, "x6000014", "<Main>b__1"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.a = null;
            this.prototype.b = null;
        });
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
