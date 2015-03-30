var asm1; (function (asm)
{
    asm.FullName = "MethodInitializerBug.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  A`1..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static  A`1..cctor()*/
    asm.x600000b_init = function (T)
    {
        return function ()
        {
            ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
            ((asm1)["A`1"](T).init)();
        };
    };;
    asm.x600000b = function (T)
    {
        return function ()
        {
            (asm.x600000b_init(T).apply)(this,arguments);
            return (asm.x600000b_(T).apply)(this,arguments);
        };
    };;
    asm.x600000b_ = function (T)
    {
        return function _cctor()
        {
            var t0;
            var t1;
            var t2;
            var __pos__;
            
            if ((asm1)["A`1"](T).FieldsInitialized){
                return;
            }
            (asm1)["A`1"](T).FieldsInitialized = true;
            t0 = T;
            t1 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
            t2 = (asm1)["A`1"](t0);
            __pos__ = 0x0;
            /* IL_00: ldc.i4.0  */
            /* IL_01: newarr T */
            /* IL_06: stsfld T[] Value */
            (t2)["Value"] = BLR.new_array(t0,(0|0));
            /* IL_0B: ret  MethodInitializerBug.cs:16707566:0*/
            return ;
        };
    };
    /*  B`1..ctor()*/
    asm.x600000c_init = function ()
    {
        ((asm1)["A`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0]).init)();
    };;
    asm.x600000c = function (arg0)
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function _ctor(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0];
        t1 = (asm1)["A`1"](t0);
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: nop  MethodInitializerBug.cs:10:5*/
        (asm1.x600000b((((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0]))();
        /* IL_08: ldarg.0  */
        /* IL_09: ldsfld IKVM.Reflection.GenericFieldInstance */
        /* IL_0E: stfld T[] Value */
        arg0.Value = t1.Value;
        /* IL_13: nop  MethodInitializerBug.cs:12:5*/
        /* IL_14: ret  */
        return ;
    };
    /*  C..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
    /* static System.Void Program.Main()*/
    asm.x600000f_init = function ()
    {
        (asm1.C().init)();
        ((asm1)["B`1"](asm1.C()).init)();
        (asm1.D().init)();
        ((asm1)["B`1"](asm1.D()).init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        BLR.init_base_types();
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos__;
        t0 = asm1.C();
        t1 = (asm1)["B`1"](t0);
        t2 = asm1.D();
        t3 = (asm1)["B`1"](t2);
        __pos__ = 0x0;
        /* IL_00: nop  MethodInitializerBug.cs:21:5*/
        /* IL_01: newobj Void .ctor() */
        /* IL_06: ldfld IKVM.Reflection.GenericFieldInstance */
        /* IL_0B: callvirt Type GetType() */
        /* IL_10: callvirt String get_FullName() */
        /* IL_15: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x600000a(BLR.newobj(t1,asm1.x600000c,[null]).Value).vtable)["asm0.x60000e0"])())(asm0.x600000a(BLR.newobj(t1,asm1.x600000c,[null]).Value)));
        /* IL_1A: nop  */
        /* IL_1B: newobj Void .ctor() */
        /* IL_20: ldfld IKVM.Reflection.GenericFieldInstance */
        /* IL_25: callvirt Type GetType() */
        /* IL_2A: callvirt String get_FullName() */
        /* IL_2F: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x600000a(BLR.newobj(t3,asm1.x600000c,[null]).Value).vtable)["asm0.x60000e0"])())(asm0.x600000a(BLR.newobj(t3,asm1.x600000c,[null]).Value)));
        /* IL_34: nop  */
        /* IL_35: ret  MethodInitializerBug.cs:24:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
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
    (asm)["A`1"] = BLR.declare_type(
        "A_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.Value = null;
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["B`1"] = BLR.declare_type(
        "B_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Value = null;
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
            BLR.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            BLR.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
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
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
