var asm2;(function (asm)
{
    asm.FullName = "GenericMethodOnInterfaceBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A`1.X<T2>(String)*/
    asm.x6000002 = function (T2)
    {
        return function X(arg0, arg1)
        {
            var t0;
            t0 = T2;
            /* IL_00: ldtoken T2 */
            /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
            /* IL_0A: callvirt String get_FullName() */
            /* IL_0F: call Void Log(System.Object) */
            asm1.x6000001((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x6000146"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))));
            /* IL_14: ldarg.1  */
            /* IL_15: call Void Log(System.Object) */
            asm1.x6000001(arg1);
            /* IL_1A: ret  */
            return ;
        };
    };;
    /*  A`1..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  X..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  Y..ctor()*/
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
        (asm2.X().init)();
        ((asm2)["A`1"](asm2.X()).init)();
        (asm2.Y().init)();
        ((asm2)["I`1"](asm2.X()).init)();
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
        var loc0;
        CILJS.init_base_types();
        t0 = asm2.X();
        t1 = (asm2)["A`1"](t0);
        t2 = asm2.Y();
        t3 = (asm2)["I`1"](t0);
        /* IL_00: newobj Void .ctor() */
        /* IL_05: stloc.0  */
        loc0 = CILJS.newobj(t1,asm2.x6000003,[null]);
        /* IL_06: ldloc.0  */
        /* IL_07: ldstr test1 */
        /* IL_0C: callvirt Void X[Y](System.String) */
        (((loc0.vtable)["asm2.x6000002"]())(asm2.Y()))(loc0,CILJS.new_string("test1"));
        /* IL_11: ldloc.0  */
        /* IL_12: ldstr test2 */
        /* IL_17: callvirt Void X[Y](System.String) */
        (((((loc0.ifacemap)[t3])[t0].x6000001)())(asm2.Y()))(loc0,CILJS.new_string("test2"));
        /* IL_1C: ret  */
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
    (asm)["I`1"] = CILJS.declare_type(
        "I_1",
        ["T1"],
        function (T1)
        {
            return {};
        },
        function (T1)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I`1",false,false,true,true,false,[],[
                    [asm2, "x6000001", "X"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            (this.GenericArguments)["asm2.t2000002"] = [T1];
            this.GenericTypeMetadataName = ("asm2.t2000002<" + (T1.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
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
                    [asm2, "x6000002", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            (this.GenericArguments)["asm2.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm2)["I`1"](T), T],
                {
                    'x6000001': function (){ return asm2.x6000002;}
                });
        });
    asm.X = CILJS.declare_type(
        "X",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.Y = CILJS.declare_type(
        "Y",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Y",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
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
