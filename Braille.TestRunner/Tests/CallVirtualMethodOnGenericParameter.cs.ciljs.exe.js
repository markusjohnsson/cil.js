var asm1; (function (asm)
{
    asm.FullName = "CallVirtualMethodOnGenericParameter.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void A.M()*/
    asm.x600000a = function M(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr A*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("A"));
        /* IL_0A: ret */
        return ;
    };;
    /*  A..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void B.M()*/
    asm.x600000c = function M(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr B*/
        /* IL_05: call Void Log(System.Object)*/
        asm1.x6000001(CILJS.new_string("B"));
        /* IL_0A: ret */
        return ;
    };;
    /*  B..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x600000b(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.X<T>(T)*/
    asm.x600000e = function (T)
    {
        return function X(arg0)
        {
            var __pos__;
            __pos__ = 0x0;
            /* IL_00: ldarga.s 0*/
            /* IL_08: callvirt Void M()*/
            /* warning: ignoring prefixes constrained.*/
            (((arg0.vtable || T.prototype.vtable)["asm1.x600000a"])())(CILJS.dereference_pointer_as_needed({
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
    asm.x600000f_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        CILJS.init_base_types();
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var __pos__;
        t0 = asm1.A();
        t1 = asm1.B();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: call Void X[A](A)*/
        (asm1.x600000e(asm1.A()))(CILJS.newobj(t0,asm1.x600000b,[null]));
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: call Void X[B](B)*/
        (asm1.x600000e(asm1.B()))(CILJS.newobj(t1,asm1.x600000d,[null]));
        /* IL_14: newobj Void .ctor()*/
        /* IL_19: call Void X[A](A)*/
        (asm1.x600000e(asm1.A()))(CILJS.newobj(t1,asm1.x600000d,[null]));
        /* IL_1E: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = CILJS.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
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
                    [asm1, "x600000a", "M"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return new (asm1.A())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm1, "x600000c", "M"]
                ],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000c");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
