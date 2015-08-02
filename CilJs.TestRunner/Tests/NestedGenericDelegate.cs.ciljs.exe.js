var asm2;(function (asm)
{
    asm.FullName = "NestedGenericDelegate.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.Void A`1.X()*/
    asm.x6000001_init = function ()
    {
        ((asm2)["A`1+D`1"]((((arguments)[0].constructor.GenericArguments)["asm2.t2000002"])[0],(asm0)["System.Type"]()).init)();
    };;
    asm.x6000001 = function (arg0)
    {
        asm.x6000001_init.apply(this,arguments);
        return asm.x6000001_.apply(this,arguments);
    };;
    asm.x6000001_ = function X(arg0)
    {
        var t0;
        var t1;
        var t2;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm2.t2000002"])[0];
        t1 = (asm0)["System.Type"]();
        t2 = (asm2)["A`1+D`1"](t0,t1);
        /* IL_00: ldarg.0  */
        /* IL_01: ldnull  */
        /* IL_03: ldftn Type Y(T) */
        /* IL_08: newobj Void .ctor(System.Object, System.IntPtr) */
        /* IL_0D: call Void Z(A`1+D`1[T,System.Type]) */
        asm2.x6000003(arg0,CILJS.newobj(t2,asm2.x6000005,[null, null, asm2.x6000002((((arguments)[0].constructor.GenericArguments)["asm2.t2000002"])[0])]));
        /* IL_12: ret  */
        return ;
    };
    /* static System.Type A`1.Y(T)*/
    asm.x6000002 = function (T)
    {
        return function Y(arg0)
        {
            var t0;
            t0 = T;
            /* IL_00: ldtoken T */
            /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
            /* IL_0A: ret  */
            return asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0));
        };
    };;
    /* System.Void A`1.Z(D`1)*/
    asm.x6000003 = function Z(arg0, arg1)
    {
        var t0;
        var loc0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm2.t2000002"])[0];
        loc0 = (((((arguments)[0].constructor.GenericArguments)["asm2.t2000002"])[0].IsValueType) ? ((((((arguments)[0].constructor.GenericArguments)["asm2.t2000002"])[0].IsPrimitive) ? (0) : (new ((((arguments)[0].constructor.GenericArguments)["asm2.t2000002"])[0])()))) : (null));
        /* IL_00: ldarg.1  */
        st_01 = arg1;
        /* IL_01: ldloca.s 0 */
        /* IL_04: initobj T */
        loc0 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
        /* IL_09: ldloc.0  */
        st_02 = loc0;
        /* IL_0A: callvirt Type Invoke(T) */
        st_03 = st_01._methodPtr.apply(null,((st_01._target) ? ([
                st_01._target,
                st_02
            ]) : ([
                st_02
            ])));
        /* IL_0F: callvirt String get_Name() */
        st_04 = ((st_03.vtable)["asm0.x60001a4"]())(st_03);
        /* IL_14: call Void Log(System.Object) */
        asm1.x6000001(st_04);
        /* IL_19: ret  */
        return ;
    };;
    /*  A`1..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* TResult D`1.Invoke(T)*/
    asm.x6000006 = CILJS.delegate_invoke;;
    /* System.IAsyncResult D`1.BeginInvoke(T,AsyncCallback,Object)*/
    asm.x6000007 = CILJS.delegate_begin_invoke;;
    /* TResult D`1.EndInvoke(IAsyncResult)*/
    asm.x6000008 = CILJS.delegate_end_invoke;;
    /*  D`1..ctor(Object,IntPtr)*/
    asm.x6000005 = CILJS.delegate_ctor;;
    /* static System.Void Program.Main()*/
    asm.x6000009_init = function ()
    {
        ((asm2)["A`1"]((asm0)["System.String"]()).init)();
        asm.x6000009 = asm.x6000009_;
    };;
    asm.x6000009 = function ()
    {
        asm.x6000009_init.apply(this,arguments);
        return asm.x6000009_.apply(this,arguments);
    };;
    asm.x6000009_ = function Main()
    {
        var t0;
        var t1;
        var loc0;
        CILJS.init_base_types();
        t0 = (asm0)["System.String"]();
        t1 = (asm2)["A`1"](t0);
        /* IL_00: newobj Void .ctor() */
        /* IL_05: stloc.0  */
        loc0 = CILJS.newobj(t1,asm2.x6000004,[null]);
        /* IL_06: ldloc.0  */
        /* IL_07: callvirt Void X() */
        asm2.x6000001(loc0);
        /* IL_0C: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[
                    [asm2, "x6000001", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            (this.GenericArguments)["asm2.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["A`1+D`1"] = CILJS.declare_type(
        "D_1",
        ["T", "TResult"],
        function (T, TResult)
        {
            return {};
        },
        function (T, TResult)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1+D`1",false,false,false,true,false,[],[
                    [asm2, "x6000006", "Invoke"],
                    [asm2, "x6000007", "BeginInvoke"],
                    [asm2, "x6000008", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            (this.GenericArguments)["asm2.t2000003"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm2.t2000003<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
            CILJS.declare_virtual(this,"asm2.x6000006","asm2.x6000006");
            CILJS.declare_virtual(this,"asm2.x6000007","asm2.x6000007");
            CILJS.declare_virtual(this,"asm2.x6000008","asm2.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
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
    asm.entryPoint = asm.x6000009;
})(asm2 || (asm2 = {}));
