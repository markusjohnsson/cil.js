var asm2; (function (asm)
{
    asm.FullName = "GenericCallvirtBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A`1.Y<TResult>()*/
    asm.x6000001 = function (TResult)
    {
        return function Y(arg0)
        {
            var t0;
            t0 = TResult;
            /* IL_00: ldtoken TResult*/
            /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
            /* IL_0A: callvirt String get_Name()*/
            /* IL_0F: call Void Log(System.Object)*/
            asm1.x6000001((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60001a4"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))));
            /* IL_14: ret */
            return ;
        };
    };;
    /*  A`1..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void B.X()*/
    asm.x6000004 = function X(arg0)
    {
        var t0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm2.t2000003"])[0];
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld A`1 a*/
        /* IL_06: callvirt Void Y[T]()*/
        (asm2.x6000001((((arguments)[0].constructor.GenericArguments)["asm2.t2000003"])[0]))(arg0.Ba);
        /* IL_0B: ret */
        return ;
    };;
    /*  B..ctor(A`1)*/
    asm.x6000003 = function _ctor(arg0,arg1)
    {
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
    asm.x6000005_init = function ()
    {
        ((asm2)["A`1"]((asm0)["System.String"]()).init)();
        ((asm2)["A`1+B"]((asm0)["System.String"]()).init)();
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
        t0 = (asm0)["System.String"]();
        t1 = (asm2)["A`1"](t0);
        t2 = (asm2)["A`1+B"](t0);
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: newobj Void .ctor(A`1[System.String])*/
        /* IL_0A: stloc.0 */
        loc0 = CILJS.newobj(t2,asm2.x6000003,[null, CILJS.newobj(t1,asm2.x6000002,[null])]);
        /* IL_0B: ldloc.0 */
        /* IL_0C: callvirt Void X()*/
        asm2.x6000004(loc0);
        /* IL_11: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000006 = function _ctor(arg0)
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
            CILJS.init_type(this,asm,"A`1+B",false,false,false,true,false,[],[
                    [asm2, "x6000004", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            (this.GenericArguments)["asm2.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.Ba = null;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000005;
})(asm2 || (asm2 = {}));
