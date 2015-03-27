var asm1; (function (asm)
{
    asm.FullName = "NestedGenericDelegate.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
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
    /* System.Void A`1.X()*/
    asm.x600000a_init = function ()
    {
        ((asm1)["A`1+D`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t2000006"])[0],(asm0)["System.Type"]()).init)();
    };;
    asm.x600000a = function (arg0)
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function X(arg0)
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000006"])[0];
        t1 = (asm0)["System.Type"]();
        t2 = (asm1)["A`1+D`1"](t0,t1);
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldnull */
        /* IL_03: ldftn Type Y(T)*/
        /* IL_08: newobj Void .ctor(System.Object, System.IntPtr)*/
        /* IL_0D: call Void Z(A`1+D`1[T,System.Type])*/
        asm1.x600000c(arg0,BLR.newobj(t2,asm1.x600000e,[null, null, asm1.x600000b((((arguments)[0].constructor.GenericArguments)["asm1.t2000006"])[0])]));
        /* IL_12: ret */
        return ;
    };
    /* static System.Type A`1.Y(T)*/
    asm.x600000b = function (T)
    {
        return function Y(arg0)
        {
            var t0;
            var __pos__;
            t0 = T;
            __pos__ = 0x0;
            /* IL_00: ldtoken T*/
            /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
            /* IL_0A: ret */
            return asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0));
        };
    };;
    /* System.Void A`1.Z(D`1)*/
    asm.x600000c = function Z(arg0,arg1)
    {
        var t0;
        var loc0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var __pos__;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000006"])[0];
        loc0 = (((((arguments)[0].constructor.GenericArguments)["asm1.t2000006"])[0].IsValueType) ? ((((((arguments)[0].constructor.GenericArguments)["asm1.t2000006"])[0].IsPrimitive) ? (0) : (new ((((arguments)[0].constructor.GenericArguments)["asm1.t2000006"])[0])()))) : (null));
        __pos__ = 0x0;
        /* IL_00: ldarg.1 */
        st_01 = arg1;
        /* IL_01: ldloca.s 0*/
        /* IL_04: initobj T*/
        loc0 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
        /* IL_09: ldloc.0 */
        st_02 = loc0;
        /* IL_0A: callvirt Type Invoke(T)*/
        st_03 = st_01._methodPtr.apply(null,((st_01._target) ? ([
                st_01._target,
                st_02
            ]) : ([
                st_02
            ])));
        /* IL_0F: callvirt String get_Name()*/
        st_04 = ((st_03.vtable)["asm0.x600003e"]())(st_03);
        /* IL_14: call Void Log(System.Object)*/
        asm1.x6000001(st_04);
        /* IL_19: ret */
        return ;
    };;
    /*  A`1..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* TResult D`1.Invoke(T)*/
    asm.x600000f = BLR.delegate_invoke;;
    /* System.IAsyncResult D`1.BeginInvoke(T,AsyncCallback,Object)*/
    asm.x6000010 = BLR.delegate_begin_invoke;;
    /* TResult D`1.EndInvoke(IAsyncResult)*/
    asm.x6000011 = BLR.delegate_end_invoke;;
    /*  D`1..ctor(Object,IntPtr)*/
    asm.x600000e = BLR.delegate_ctor;;
    /* static System.Void Program.Main()*/
    asm.x6000012_init = function ()
    {
        ((asm1)["A`1"]((asm0)["System.String"]()).init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function ()
    {
        BLR.init_base_types();
        asm.x6000012_init.apply(this,arguments);
        return asm.x6000012_.apply(this,arguments);
    };;
    asm.x6000012_ = function Main()
    {
        var t0;
        var t1;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.String"]();
        t1 = (asm1)["A`1"](t0);
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = BLR.newobj(t1,asm1.x600000d,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: callvirt Void X()*/
        asm1.x600000a(loc0);
        /* IL_0C: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000013 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = BLR.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["A`1"] = BLR.declare_type(
        "A_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A`1",false,false,false,true,false,[],[
                    [asm1, "x600000a", "X"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["A`1+D`1"] = BLR.declare_type(
        "D_1",
        ["T", "TResult"],
        function (T,TResult)
        {
            return {};
        },
        function (T,TResult)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A`1+D`1",false,false,false,true,false,[],[
                    [asm1, "x600000f", "Invoke"],
                    [asm1, "x6000010", "BeginInvoke"],
                    [asm1, "x6000011", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm1.x6000010","asm1.x6000010");
            BLR.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            BLR.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            BLR.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    asm.Program = BLR.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000012;
})(asm1 || (asm1 = {}));
