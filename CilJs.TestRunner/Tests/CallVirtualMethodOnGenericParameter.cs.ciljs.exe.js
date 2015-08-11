var asm1;(function (asm)
{
    asm.FullName = "CallVirtualMethodOnGenericParameter.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A.M()*/
    asm.x6000001 = function M(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: ldstr A */
        /* IL_05: ldc.i4.0  */
        /* IL_06: newarr System.Object */
        /* IL_0B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("A"),CILJS.new_array(t0,(0|0)));
        /* IL_10: ret  */
        return ;
    };;
    /*  A..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void B.M()*/
    asm.x6000003 = function M(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: ldstr B */
        /* IL_05: ldc.i4.0  */
        /* IL_06: newarr System.Object */
        /* IL_0B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("B"),CILJS.new_array(t0,(0|0)));
        /* IL_10: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000002(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.X<T>(T)*/
    asm.x6000005 = function (T)
    {
        return function X(arg0)
        {
            /* IL_00: ldarga.s 0 */
            /* IL_08: callvirt Void M() */
            /* warning: ignoring prefixes constrained.*/
            (((arg0.vtable || T.prototype.vtable)["asm1.x6000001"])())(CILJS.dereference_pointer_as_needed({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    }));
            /* IL_0D: ret  */
            return ;
        };
    };;
    /* static System.Void Program.Main()*/
    asm.x6000006_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
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
        t0 = asm1.A();
        t1 = asm1.B();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: call Void X[A](A) */
        (asm1.x6000005(asm1.A()))(CILJS.newobj(t0,asm1.x6000002,[null]));
        /* IL_0A: newobj Void .ctor() */
        /* IL_0F: call Void X[B](B) */
        (asm1.x6000005(asm1.B()))(CILJS.newobj(t1,asm1.x6000004,[null]));
        /* IL_14: newobj Void .ctor() */
        /* IL_19: call Void X[A](A) */
        (asm1.x6000005(asm1.A()))(CILJS.newobj(t1,asm1.x6000004,[null]));
        /* IL_1E: ret  */
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x6000001", "M"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000001");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return asm1.A();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm1, "x6000003", "M"]
                ],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000003");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000006;
})(asm1 || (asm1 = {}));
