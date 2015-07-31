var asm2; (function (asm)
{
    asm.FullName = "CallGenericMethodWithClassGenericArg.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
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
    /* static System.Void E.Any<T>(Object,T)*/
    asm.x6000003 = function (T)
    {
        return function Any(arg0,arg1)
        {
            var t0;
            t0 = T;
            /* IL_00: ldarg.0 */
            /* IL_01: call Void Log[T](System.Object)*/
            (asm2.x6000004(T))(arg0);
            /* IL_06: ldarg.1 */
            /* IL_07: box T*/
            /* IL_0C: call Void Log[T](System.Object)*/
            (asm2.x6000004(T))(CILJS.box(arg1,t0));
            /* IL_11: ret */
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
            /* IL_00: ldarg.0 */
            /* IL_01: isinst T*/
            /* IL_06: ldnull */
            /* IL_08: cgt.un */
            /* IL_09: box System.Boolean*/
            /* IL_0E: call Void Log(System.Object)*/
            asm1.x6000001({
                    'boxed': ((t0.IsInst(arg0) !== null) ? (1) : (0)),
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                });
            /* IL_13: ret */
            return ;
        };
    };;
    /*  E..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void A`1.M(Object,T)*/
    asm.x6000006 = function M(arg0,arg1,arg2)
    {
        var t0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm2.t2000005"])[0];
        /* IL_00: ldarg.1 */
        /* IL_01: ldarg.2 */
        /* IL_02: call Void Any[T](System.Object, T)*/
        (asm2.x6000003((((arguments)[0].constructor.GenericArguments)["asm2.t2000005"])[0]))(arg1,arg2);
        /* IL_07: ret */
        return ;
    };;
    /*  A`1..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000008_init = function ()
    {
        (asm2.B().init)();
        ((asm2)["A`1"](asm2.B()).init)();
        (asm2.A().init)();
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
        var loc0;
        CILJS.init_base_types();
        t0 = asm2.B();
        t1 = (asm2)["A`1"](t0);
        t2 = asm2.A();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t1,asm2.x6000007,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: newobj Void .ctor()*/
        /* IL_0C: newobj Void .ctor()*/
        /* IL_11: callvirt Void M(System.Object, B)*/
        asm2.x6000006(loc0,CILJS.newobj(t2,asm2.x6000001,[null]),CILJS.newobj(t0,asm2.x6000002,[null]));
        /* IL_16: ldloc.0 */
        /* IL_17: newobj Void .ctor()*/
        /* IL_1C: newobj Void .ctor()*/
        /* IL_21: callvirt Void M(System.Object, B)*/
        asm2.x6000006(loc0,CILJS.newobj(t0,asm2.x6000002,[null]),CILJS.newobj(t0,asm2.x6000002,[null]));
        /* IL_26: ret */
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
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
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
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
            CILJS.init_type(this,asm,"E",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
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
                    [asm2, "x6000006", "M"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            (this.GenericArguments)["asm2.t2000005"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000005<" + (T.GenericTypeMetadataName + ">"));
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
    asm.entryPoint = asm.x6000008;
})(asm2 || (asm2 = {}));
