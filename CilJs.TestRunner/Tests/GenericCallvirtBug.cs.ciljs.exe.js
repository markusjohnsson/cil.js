var asm1; (function (asm)
{
    asm.FullName = "GenericCallvirtBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.Void A`1.Y<TResult>()*/
    asm.x600000a = function (TResult)
    {
        return function Y(arg0)
        {
            var t0;
            var __pos__;
            t0 = TResult;
            __pos__ = 0x0;
            /* IL_00: ldtoken TResult*/
            /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
            /* IL_0A: callvirt String get_Name()*/
            /* IL_0F: call Void Log(System.Object)*/
            asm1.x6000001((((asm0.x60000e1(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600003e"])())(asm0.x60000e1(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))));
            /* IL_14: ret */
            return ;
        };
    };;
    /*  A`1..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void B.X()*/
    asm.x600000d = function X(arg0)
    {
        var t0;
        var __pos__;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0];
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld A`1 a*/
        /* IL_06: callvirt Void Y[T]()*/
        (asm1.x600000a((((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0]))(arg0.Ba);
        /* IL_0B: ret */
        return ;
    };;
    /*  B..ctor(A`1)*/
    asm.x600000c = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld A`1 a*/
        arg0.Ba = arg1;
        /* IL_0D: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000e_init = function ()
    {
        ((asm1)["A`1"]((asm0)["System.String"]()).init)();
        ((asm1)["A`1+B"]((asm0)["System.String"]()).init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        CILJS.init_base_types();
        asm.x600000e_init.apply(this,arguments);
        return asm.x600000e_.apply(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.String"]();
        t1 = (asm1)["A`1"](t0);
        t2 = (asm1)["A`1+B"](t0);
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: newobj Void .ctor(A`1[System.String])*/
        /* IL_0A: stloc.0 */
        loc0 = CILJS.newobj(t2,asm1.x600000c,[null, CILJS.newobj(t1,asm1.x600000b,[null])]);
        /* IL_0B: ldloc.0 */
        /* IL_0C: callvirt Void X()*/
        asm1.x600000d(loc0);
        /* IL_11: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000f = function _ctor(arg0)
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
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["A`1+B"] = CILJS.declare_type(
        "B",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1+B",false,false,false,true,false,[],[
                    [asm1, "x600000d", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Ba = null;
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
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
