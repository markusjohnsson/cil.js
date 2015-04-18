var asm1; (function (asm)
{
    asm.FullName = "CallGenericMethodWithClassGenericArg.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  A..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  B..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void E.Any<T>(Object,T)*/
    asm.x600000c = function (T)
    {
        return function Any(arg0,arg1)
        {
            var t0;
            var __pos__;
            t0 = T;
            __pos__ = 0x0;
            /* IL_00: ldarg.0 */
            /* IL_01: call Void Log[T](System.Object)*/
            (asm1.x600000d(T))(arg0);
            /* IL_06: ldarg.1 */
            /* IL_07: box T*/
            /* IL_0C: call Void Log[T](System.Object)*/
            (asm1.x600000d(T))(CILJS.box(arg1,t0));
            /* IL_11: ret */
            return ;
        };
    };;
    /* static System.Void E.Log<T>(Object)*/
    asm.x600000d = function (T)
    {
        return function Log(arg0)
        {
            var t0;
            var t1;
            var __pos__;
            t0 = T;
            t1 = (asm0)["System.Boolean"]();
            __pos__ = 0x0;
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
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void A`1.M(Object,T)*/
    asm.x600000f = function M(arg0,arg1,arg2)
    {
        var t0;
        var __pos__;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000009"])[0];
        __pos__ = 0x0;
        /* IL_00: ldarg.1 */
        /* IL_01: ldarg.2 */
        /* IL_02: call Void Any[T](System.Object, T)*/
        (asm1.x600000c((((arguments)[0].constructor.GenericArguments)["asm1.t2000009"])[0]))(arg1,arg2);
        /* IL_07: ret */
        return ;
    };;
    /*  A`1..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000011_init = function ()
    {
        (asm1.B().init)();
        ((asm1)["A`1"](asm1.B()).init)();
        (asm1.A().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        CILJS.init_base_types();
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var loc0;
        t0 = asm1.B();
        t1 = (asm1)["A`1"](t0);
        t2 = asm1.A();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t1,asm1.x6000010,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: newobj Void .ctor()*/
        /* IL_0C: newobj Void .ctor()*/
        /* IL_11: callvirt Void M(System.Object, B)*/
        asm1.x600000f(loc0,CILJS.newobj(t2,asm1.x600000a,[null]),CILJS.newobj(t0,asm1.x600000b,[null]));
        /* IL_16: ldloc.0 */
        /* IL_17: newobj Void .ctor()*/
        /* IL_1C: newobj Void .ctor()*/
        /* IL_21: callvirt Void M(System.Object, B)*/
        asm1.x600000f(loc0,CILJS.newobj(t0,asm1.x600000b,[null]),CILJS.newobj(t0,asm1.x600000b,[null]));
        /* IL_26: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000012 = function _ctor(arg0)
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.E = CILJS.declare_type(
        "E",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"E",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["A`1"] = CILJS.declare_type(
        "A_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[
                    [asm1, "x600000f", "M"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            (this.GenericArguments)["asm1.t2000009"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000009<" + (T.GenericTypeMetadataName + ">"));
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
