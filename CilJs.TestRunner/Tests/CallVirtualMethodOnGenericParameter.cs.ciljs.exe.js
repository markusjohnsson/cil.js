var asm2; (function (asm)
{
    asm.FullName = "CallVirtualMethodOnGenericParameter.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A.M()*/
    asm.x6000001 = function M(arg0)
    {
        /* IL_00: ldstr A*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("A"));
        /* IL_0A: ret */
        return ;
    };;
    /*  A..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void B.M()*/
    asm.x6000003 = function M(arg0)
    {
        /* IL_00: ldstr B*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("B"));
        /* IL_0A: ret */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000002(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.X<T>(T)*/
    asm.x6000005 = function (T)
    {
        return function X(arg0)
        {
            /* IL_00: ldarga.s 0*/
            /* IL_08: callvirt Void M()*/
            /* warning: ignoring prefixes constrained.*/
            (((arg0.vtable || T.prototype.vtable)["asm2.x6000001"])())(CILJS.dereference_pointer_as_needed({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    }));
            /* IL_0D: ret */
            return ;
        };
    };;
    /* static System.Void Program.Main()*/
    asm.x6000006_init = function ()
    {
        (asm2.A().init)();
        (asm2.B().init)();
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
        CILJS.init_base_types();
        t0 = asm2.A();
        t1 = asm2.B();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: call Void X[A](A)*/
        (asm2.x6000005(asm2.A()))(CILJS.newobj(t0,asm2.x6000002,[null]));
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: call Void X[B](B)*/
        (asm2.x6000005(asm2.B()))(CILJS.newobj(t1,asm2.x6000004,[null]));
        /* IL_14: newobj Void .ctor()*/
        /* IL_19: call Void X[A](A)*/
        (asm2.x6000005(asm2.A()))(CILJS.newobj(t1,asm2.x6000004,[null]));
        /* IL_1E: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
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
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm2, "x6000001", "M"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return new (asm2.A())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm2, "x6000003", "M"]
                ],asm2.A(),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000003");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000006;
})(asm2 || (asm2 = {}));
