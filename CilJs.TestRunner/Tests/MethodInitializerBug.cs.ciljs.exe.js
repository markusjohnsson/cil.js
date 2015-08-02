var asm2;(function (asm)
{
    asm.FullName = "MethodInitializerBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A`1..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static  A`1..cctor()*/
    asm.x6000002_init = function (T)
    {
        return function ()
        {
            ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
            ((asm2)["A`1"](T).init)();
        };
    };;
    asm.x6000002 = function (T)
    {
        return function ()
        {
            (asm.x6000002_init(T).apply)(this,arguments);
            return (asm.x6000002_(T).apply)(this,arguments);
        };
    };;
    asm.x6000002_ = function (T)
    {
        return function _cctor()
        {
            var t0;
            var t1;
            var t2;
            
            if ((asm2)["A`1"](T).FieldsInitialized){
                return;
            }
            (asm2)["A`1"](T).FieldsInitialized = true;
            t0 = T;
            t1 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
            t2 = (asm2)["A`1"](t0);
            /* IL_00: ldc.i4.0  */
            /* IL_01: newarr T */
            /* IL_06: stsfld T[] Value */
            (t2)["Value"] = CILJS.new_array(t0,(0|0));
            /* IL_0B: ret  */
            return ;
        };
    };
    /*  B`1..ctor()*/
    asm.x6000003_init = function ()
    {
        ((asm2)["A`1"]((((arguments)[0].constructor.GenericArguments)["asm2.t2000003"])[0]).init)();
    };;
    asm.x6000003 = function (arg0)
    {
        asm.x6000003_init.apply(this,arguments);
        return asm.x6000003_.apply(this,arguments);
    };;
    asm.x6000003_ = function _ctor(arg0)
    {
        var t0;
        var t1;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm2.t2000003"])[0];
        t1 = (asm2)["A`1"](t0);
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        (asm2.x6000002((((arguments)[0].constructor.GenericArguments)["asm2.t2000003"])[0]))();
        /* IL_06: ldarg.0  */
        /* IL_07: ldsfld IKVM.Reflection.GenericFieldInstance */
        /* IL_0C: stfld T[] Value */
        arg0.Value = t1.Value;
        /* IL_11: ret  */
        return ;
    };
    /*  C..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
    /* static System.Void Program.Main()*/
    asm.x6000006_init = function ()
    {
        (asm2.C().init)();
        ((asm2)["B`1"](asm2.C()).init)();
        (asm2.D().init)();
        ((asm2)["B`1"](asm2.D()).init)();
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
        CILJS.init_base_types();
        t0 = asm2.C();
        t1 = (asm2)["B`1"](t0);
        t2 = asm2.D();
        t3 = (asm2)["B`1"](t2);
        /* IL_00: newobj Void .ctor() */
        /* IL_05: ldfld IKVM.Reflection.GenericFieldInstance */
        /* IL_0A: callvirt Type GetType() */
        /* IL_0F: callvirt String get_FullName() */
        /* IL_14: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x60000f2(CILJS.newobj(t1,asm2.x6000003,[null]).Value).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.newobj(t1,asm2.x6000003,[null]).Value)));
        /* IL_19: newobj Void .ctor() */
        /* IL_1E: ldfld IKVM.Reflection.GenericFieldInstance */
        /* IL_23: callvirt Type GetType() */
        /* IL_28: callvirt String get_FullName() */
        /* IL_2D: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x60000f2(CILJS.newobj(t3,asm2.x6000003,[null]).Value).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.newobj(t3,asm2.x6000003,[null]).Value)));
        /* IL_32: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.Value = null;
            (this.GenericArguments)["asm2.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["B`1"] = CILJS.declare_type(
        "B_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            (this.GenericArguments)["asm2.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.Value = null;
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
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
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
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
    asm.entryPoint = asm.x6000006;
})(asm2 || (asm2 = {}));
