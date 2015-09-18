var asm1;(function (asm)
{
    asm.FullName = "CallGenericMethodOnGenericClass.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.Void C`1.X<T2>()*/
    asm.x6000003 = function (T2)
    {
        return function X(arg0)
        {
            var t0;
            var t1;
            var t2;
            t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000004"])[0];
            t1 = (asm0)["System.Object"]();
            t2 = T2;
            /* IL_00: nop  */
            /* IL_01: ldtoken T */
            /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
            /* IL_0B: callvirt String get_Name() */
            /* IL_10: ldc.i4.0  */
            /* IL_11: newarr System.Object */
            /* IL_16: call Void WriteLine(System.String, System.Object[]) */
            asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60001a4"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),CILJS.new_array(t1,(0|0)));
            /* IL_1B: nop  */
            /* IL_1C: ldtoken T2 */
            /* IL_21: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
            /* IL_26: callvirt String get_Name() */
            /* IL_2B: ldc.i4.0  */
            /* IL_2C: newarr System.Object */
            /* IL_31: call Void WriteLine(System.String, System.Object[]) */
            asm0.x600005b((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2)).vtable)["asm0.x60001a4"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t2))),CILJS.new_array(t1,(0|0)));
            /* IL_36: nop  */
            /* IL_37: ret  */
            return ;
        };
    };;
    /*  C`1..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000005_init = function ()
    {
        (asm1.A().init)();
        ((asm1)["C`1"](asm1.A()).init)();
        (asm1.B().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function ()
    {
        asm.x6000005_init.apply(this,arguments);
        return asm.x6000005_.apply(this,arguments);
    };;
    asm.x6000005_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc0;
        CILJS.init_base_types();
        t0 = asm1.A();
        t1 = (asm1)["C`1"](t0);
        t2 = asm1.B();
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = CILJS.newobj(t1,asm1.x6000004,[null]);
        /* IL_07: ldloc.0  */
        /* IL_08: callvirt Void X[B]() */
        (asm1.x6000003(asm1.B()))(loc0);
        /* IL_0D: nop  */
        /* IL_0E: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000006 = function _ctor(arg0)
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
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
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["C`1"] = CILJS.declare_type(
        "C_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C`1",false,false,false,true,false,[],[
                    [asm1, "x6000003", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            (this.GenericArguments)["asm1.t2000004"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000004<" + (T.GenericTypeMetadataName + ">"));
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000005;
})(asm1 || (asm1 = {}));
