var asm1;(function (asm)
{
    asm.FullName = "MethodInitializerBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A`1..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static  A`1..cctor()*/
    asm.x6000002_init = function (T)
    {
        return function ()
        {
            ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
            ((asm1)["A`1"](T).init)();
        };
    };;
    asm.x6000002 = function (T)
    {
        return function ()
        {
            (asm.x6000002_init(T))();
            return (asm.x6000002_(T))();
        };
    };;
    asm.x6000002_ = function (T)
    {
        return function _cctor()
        {
            var t0;
            var t1;
            var t2;
            
            if ((asm1)["A`1"](T).FieldsInitialized){
                return;
            }
            (asm1)["A`1"](T).FieldsInitialized = true;
            t0 = T;
            t1 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
            t2 = (asm1)["A`1"](t0);
            /* IL_00: ldc.i4.0  */
            /* IL_01: newarr T */
            /* IL_06: stsfld T[] Value */
            t2.Value = CILJS.new_array(t0,(0|0));
            /* IL_0B: ret  */
            return ;
        };
    };
    /*  B`1..ctor()*/
    asm.x6000003_init = function (arg0)
    {
        ((asm1)["A`1"](((arg0.constructor.GenericArguments)["asm1.t2000003"])[0]).init)();
    };;
    asm.x6000003 = function (arg0)
    {
        asm.x6000003_init(arg0);
        return asm.x6000003_(arg0);
    };;
    asm.x6000003_ = function _ctor(arg0)
    {
        var t0;
        var t1;
        t0 = ((arg0.constructor.GenericArguments)["asm1.t2000003"])[0];
        t1 = (asm1)["A`1"](t0);
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: nop  */
        (asm1.x6000002(((arg0.constructor.GenericArguments)["asm1.t2000003"])[0]))();
        /* IL_08: ldarg.0  */
        /* IL_09: ldsfld IKVM.Reflection.GenericFieldInstance */
        /* IL_0E: stfld T[] Value */
        arg0.Value = t1.Value;
        /* IL_13: ret  */
        return ;
    };
    /*  C..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
    /* static System.Void Program.Main()*/
    asm.x6000006_init = function ()
    {
        (asm1.C().init)();
        ((asm1)["B`1"](asm1.C()).init)();
        (asm1.D().init)();
        ((asm1)["B`1"](asm1.D()).init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function ()
    {
        asm.x6000006_init();
        return asm.x6000006_();
    };;
    asm.x6000006_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        CILJS.init_base_types();
        t0 = asm1.C();
        t1 = (asm1)["B`1"](t0);
        t2 = (asm0)["System.Object"]();
        t3 = asm1.D();
        t4 = (asm1)["B`1"](t3);
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        /* IL_06: ldfld IKVM.Reflection.GenericFieldInstance */
        /* IL_0B: callvirt Type GetType() */
        /* IL_10: callvirt String get_FullName() */
        /* IL_15: ldc.i4.0  */
        /* IL_16: newarr System.Object */
        /* IL_1B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x60000f2(CILJS.newobj(t1,asm1.x6000003,[null]).Value).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.newobj(t1,asm1.x6000003,[null]).Value)),CILJS.new_array(t2,(0|0)));
        /* IL_20: nop  */
        /* IL_21: newobj Void .ctor() */
        /* IL_26: ldfld IKVM.Reflection.GenericFieldInstance */
        /* IL_2B: callvirt Type GetType() */
        /* IL_30: callvirt String get_FullName() */
        /* IL_35: ldc.i4.0  */
        /* IL_36: newarr System.Object */
        /* IL_3B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((((asm0.x60000f2(CILJS.newobj(t4,asm1.x6000003,[null]).Value).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.newobj(t4,asm1.x6000003,[null]).Value)),CILJS.new_array(t2,(0|0)));
        /* IL_40: nop  */
        /* IL_41: ret  */
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
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.Value = null;
            (this.GenericArguments)["asm1.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function A_1() { c.init(); }");
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
            CILJS.init_type(this,asm,"B`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            (this.GenericArguments)["asm1.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function B_1() { c.init();this.Value = null }");
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function C() { c.init(); }");
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
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function D() { c.init(); }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006",null);
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000006;
})(asm1 || (asm1 = {}));
