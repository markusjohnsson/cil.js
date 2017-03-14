var asm1;(function (asm)
{
    asm.FullName = "CallGenericMethodWithClassGenericArg.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void E.Any<T>(Object,T)*/
    asm.x6000003 = function (T)
    {
        return function Any(arg0, arg1)
        {
            var t0;
            t0 = T;
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: call Void Log[T](System.Object) */
            (asm1.x6000004(T))(arg0);
            /* IL_07: nop  */
            /* IL_08: ldarg.1  */
            /* IL_09: box T */
            /* IL_0E: call Void Log[T](System.Object) */
            (asm1.x6000004(T))(CILJS.box(arg1,t0));
            /* IL_13: nop  */
            /* IL_14: ret  */
            return ;
        };
    };;
    /* static System.Void E.Log<T>(Object)*/
    asm.x6000004 = function (T)
    {
        return function Log(arg0)
        {
            var t0;
            var t1;
            t0 = T;
            t1 = (asm0)["System.Boolean"]();
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: isinst T */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: box System.Boolean */
            /* IL_0F: call Void WriteLine(System.Object) */
            asm0.x600005a(CILJS.make_box(((t0.IsInst(arg0) !== null) ? 1 : 0),t1));
            /* IL_14: nop  */
            /* IL_15: ret  */
            return ;
        };
    };;
    /*  E..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Void A`1.M(Object,T)*/
    asm.x6000006 = function M(arg0, arg1, arg2)
    {
        var t0;
        t0 = ((arg0.constructor.GenericArguments)["asm1.t2000005"])[0];
        /* IL_00: nop  */
        /* IL_01: ldarg.1  */
        /* IL_02: ldarg.2  */
        /* IL_03: call Void Any[T](System.Object, T) */
        (asm1.x6000003(((arg0.constructor.GenericArguments)["asm1.t2000005"])[0]))(arg1,arg2);
        /* IL_08: nop  */
        /* IL_09: ret  */
        return ;
    };;
    /*  A`1..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000008_init = function ()
    {
        (asm1.B().init)();
        ((asm1)["A`1"](asm1.B()).init)();
        (asm1.A().init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function ()
    {
        asm.x6000008_init();
        return asm.x6000008_();
    };;
    asm.x6000008_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc0;
        CILJS.init_base_types();
        t0 = asm1.B();
        t1 = (asm1)["A`1"](t0);
        t2 = asm1.A();
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = CILJS.newobj(t1,asm1.x6000007,[null]);
        /* IL_07: ldloc.0  */
        /* IL_08: newobj Void .ctor() */
        /* IL_0D: newobj Void .ctor() */
        /* IL_12: callvirt Void M(System.Object, B) */
        asm1.x6000006(loc0,CILJS.newobj(t2,asm1.x6000001,[null]),CILJS.newobj(t0,asm1.x6000002,[null]));
        /* IL_17: nop  */
        /* IL_18: ldloc.0  */
        /* IL_19: newobj Void .ctor() */
        /* IL_1E: newobj Void .ctor() */
        /* IL_23: callvirt Void M(System.Object, B) */
        asm1.x6000006(loc0,CILJS.newobj(t0,asm1.x6000002,[null]),CILJS.newobj(t0,asm1.x6000002,[null]));
        /* IL_28: nop  */
        /* IL_29: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000009 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function A() { c.init(); }");
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
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function B() { c.init(); }");
    asm.E = CILJS.declare_type(
        "E",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"E",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function E() { c.init(); }");
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
                    [asm1, "x6000006", "M"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            (this.GenericArguments)["asm1.t2000005"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000005<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function A_1() { c.init(); }");
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
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000008;
})(asm1 || (asm1 = {}));
if (module){
    module.exports = asm1;
}
