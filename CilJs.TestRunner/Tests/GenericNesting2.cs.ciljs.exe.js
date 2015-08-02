var asm2; (function (asm)
{
    asm.FullName = "GenericNesting2.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A`1..ctor()*/
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
    /* System.Void C.Foo(T)*/
    asm.x6000003 = function Foo(arg0,arg1)
    {
        var t0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm2.t2000004"])[0];
        /* IL_00: ldarg.1 */
        /* IL_01: box T*/
        /* IL_06: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.box(arg1,t0));
        /* IL_0B: ldarga.s 1*/
        /* IL_13: callvirt Type GetType()*/
        /* IL_18: callvirt String get_FullName()*/
        /* IL_1D: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x60000f2(CILJS.box(arg1,t0)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.box(arg1,t0))));
        /* IL_22: ret */
        return ;
    };;
    /* static System.Void C.Bar(T)*/
    asm.x6000004 = function (T)
    {
        return function Bar(arg0)
        {
            var t0;
            t0 = T;
            /* IL_00: ldarg.0 */
            /* IL_01: box T*/
            /* IL_06: call Void Log(System.Object)*/
            asm1.x6000001(CILJS.box(arg0,t0));
            /* IL_0B: ldarga.s 0*/
            /* IL_13: callvirt Type GetType()*/
            /* IL_18: callvirt String get_FullName()*/
            /* IL_1D: call Void Log(System.Object)*/
            asm1.x6000001((((asm0.x60000f2(CILJS.box(arg0,t0)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.box(arg0,t0))));
            /* IL_22: ret */
            return ;
        };
    };;
    /* static System.Void C.Baz<T2>(T,T2)*/
    asm.x6000005 = function (T,T2)
    {
        return function Baz(arg0,arg1)
        {
            var t0;
            var t1;
            t0 = T;
            t1 = T2;
            /* IL_00: ldarg.0 */
            /* IL_01: box T*/
            /* IL_06: call Void Log(System.Object)*/
            asm1.x6000001(CILJS.box(arg0,t0));
            /* IL_0B: ldarg.1 */
            /* IL_0C: box T2*/
            /* IL_11: call Void Log(System.Object)*/
            asm1.x6000001(CILJS.box(arg1,t1));
            /* IL_16: ldarga.s 0*/
            /* IL_1E: callvirt Type GetType()*/
            /* IL_23: callvirt String get_FullName()*/
            /* IL_28: call Void Log(System.Object)*/
            asm1.x6000001((((asm0.x60000f2(CILJS.box(arg0,t0)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.box(arg0,t0))));
            /* IL_2D: ldarga.s 1*/
            /* IL_35: callvirt Type GetType()*/
            /* IL_3A: callvirt String get_FullName()*/
            /* IL_3F: call Void Log(System.Object)*/
            asm1.x6000001((((asm0.x60000f2(CILJS.box(arg1,t1)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.box(arg1,t1))));
            /* IL_44: ret */
            return ;
        };
    };;
    /* System.Void C.Buz<T2>(T,T2)*/
    asm.x6000006 = function (T2)
    {
        return function Buz(arg0,arg1,arg2)
        {
            var t0;
            var t1;
            t0 = (((arguments)[0].constructor.GenericArguments)["asm2.t2000004"])[0];
            t1 = T2;
            /* IL_00: ldarg.1 */
            /* IL_01: box T*/
            /* IL_06: call Void Log(System.Object)*/
            asm1.x6000001(CILJS.box(arg1,t0));
            /* IL_0B: ldarg.2 */
            /* IL_0C: box T2*/
            /* IL_11: call Void Log(System.Object)*/
            asm1.x6000001(CILJS.box(arg2,t1));
            /* IL_16: ldarga.s 1*/
            /* IL_1E: callvirt Type GetType()*/
            /* IL_23: callvirt String get_FullName()*/
            /* IL_28: call Void Log(System.Object)*/
            asm1.x6000001((((asm0.x60000f2(CILJS.box(arg1,t0)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.box(arg1,t0))));
            /* IL_2D: ldarga.s 2*/
            /* IL_35: callvirt Type GetType()*/
            /* IL_3A: callvirt String get_FullName()*/
            /* IL_3F: call Void Log(System.Object)*/
            asm1.x6000001((((asm0.x60000f2(CILJS.box(arg2,t1)).vtable)["asm0.x6000146"])())(asm0.x60000f2(CILJS.box(arg2,t1))));
            /* IL_44: ret */
            return ;
        };
    };;
    /*  C..ctor()*/
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
        ((asm2)["A`1+B+C"]((asm0)["System.Int32"]()).init)();
        ((asm2)["A`1+B+C"]((asm0)["System.String"]()).init)();
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
        var t3;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        t1 = (asm2)["A`1+B+C"](t0);
        t2 = (asm0)["System.String"]();
        t3 = (asm2)["A`1+B+C"](t2);
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: ldc.i4.s 123*/
        /* IL_07: call Void Foo(System.Int32)*/
        asm2.x6000003(CILJS.newobj(t1,asm2.x6000007,[null]),(123|0));
        /* IL_0C: newobj Void .ctor()*/
        /* IL_11: ldstr A*/
        /* IL_16: call Void Foo(System.String)*/
        asm2.x6000003(CILJS.newobj(t3,asm2.x6000007,[null]),CILJS.new_string("A"));
        /* IL_1B: ldc.i4.s 123*/
        /* IL_1D: call Void Bar(System.Int32)*/
        (asm2.x6000004((asm0)["System.Int32"]()))((123|0));
        /* IL_22: ldstr B*/
        /* IL_27: call Void Bar(System.String)*/
        (asm2.x6000004((asm0)["System.String"]()))(CILJS.new_string("B"));
        /* IL_2C: ldc.i4.s 123*/
        /* IL_2E: ldstr C*/
        /* IL_33: call Void Baz[System.String](System.Int32, System.String)*/
        (asm2.x6000005((asm0)["System.Int32"](),(asm0)["System.String"]()))((123|0),CILJS.new_string("C"));
        /* IL_38: newobj Void .ctor()*/
        /* IL_3D: ldstr C*/
        /* IL_42: ldc.i4 321*/
        /* IL_47: call Void Buz[System.Int32](System.String, System.Int32)*/
        (asm2.x6000006((asm0)["System.Int32"]()))(CILJS.newobj(t3,asm2.x6000007,[null]),CILJS.new_string("C"),(321|0));
        /* IL_4C: ret */
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
            (this.GenericArguments)["asm2.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["A`1+B"] = CILJS.declare_type(
        "B",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1+B",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            (this.GenericArguments)["asm2.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["A`1+B+C"] = CILJS.declare_type(
        "C",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1+B+C",false,false,false,true,false,[],[
                    [asm2, "x6000003", "Foo"],
                    [asm2, "x6000006", "Buz"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            (this.GenericArguments)["asm2.t2000004"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000004<" + (T.GenericTypeMetadataName + ">"));
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000008;
})(asm2 || (asm2 = {}));
