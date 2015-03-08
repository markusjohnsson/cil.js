var asm1; (function (asm)
{
    asm.FullName = "NestedGenericDelegate.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Void Log(System.Object)*/
    asm.x6000001 = braille_test_log;;
    /* Void .ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void X()*/
    asm.x600000c_init = function ()
    {
        ((asm0)["System.Type"]().init)();
        ((asm1)["A`1+D`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0],(asm0)["System.Type"]()).init)();
    };;
    asm.x600000c = function (arg0)
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function X(arg0)
    {
        var t0;
        var t1;
        var t2;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0];
        t1 = (asm0)["System.Type"]();
        t2 = (asm1)["A`1+D`1"](t0,t1);
        /* IL_00: ldarg.0 */
        /* IL_01: ldnull */
        /* IL_03: ldftn Type Y(T)*/
        /* IL_08: newobj Void .ctor(System.Object, System.IntPtr)*/
        /* IL_0D: call Void Z(A`1+D`1[T,System.Type])*/
        asm1.x600000e(arg0,BLR.newobj(t2,asm1.x6000010,[null, null, asm1.x600000d((((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0])]));
        /* IL_12: ret */
        return ;
    };
    /* static Type Y(T)*/
    asm.x600000d = function (T)
    {
        return function Y(arg0)
        {
            var t0;
            t0 = T;
            /* IL_00: ldtoken T*/
            /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
            /* IL_0A: ret */
            return asm0.x60000b5(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0));
        };
    };;
    /* Void Z(A`1+D`1[T,System.Type])*/
    asm.x600000e = function Z(arg0,arg1)
    {
        var t0;
        var loc0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0];
        loc0 = (((((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0].IsValueType) ? ((((((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0].IsPrimitive) ? (0) : (new ((((arguments)[0].constructor.GenericArguments)["asm1.t2000007"])[0])()))) : (null));
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
        st_04 = ((st_03.vtable)["asm0.x6000040"]())(st_03);
        /* IL_14: call Void Log(System.Object)*/
        asm1.x6000001(st_04);
        /* IL_19: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* TResult Invoke(T)*/
    asm.x6000011 = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    /* Void .ctor(System.Object, System.IntPtr)*/
    asm.x6000010 = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* static Void Main()*/
    asm.x6000012_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        ((asm0)["System.String"]().init)();
        ((asm1)["A`1"]((asm0)["System.String"]()).init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function ()
    {
        asm.x6000012_init.apply(this,arguments);
        return asm.x6000012_.apply(this,arguments);
    };;
    asm.x6000012_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc0;
        t0 = (asm0)["System.ValueType"]();
        t1 = (asm0)["System.String"]();
        t2 = (asm1)["A`1"](t1);
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = BLR.newobj(t2,asm1.x600000f,[null]);
        /* IL_06: ldloc.0 */
        /* IL_07: callvirt Void X()*/
        asm1.x600000c(loc0);
        /* IL_0C: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000013 = function _ctor(arg0)
    {
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
    asm.TestHelper = BLR.declare_type(
        "TestHelper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestHelper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
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
                    [asm1, "x600000c", "X"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
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
                    [asm1, "x6000011", "Invoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            (this.GenericArguments)["asm1.t2000008"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm1.t2000008<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
            BLR.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            BLR.declare_virtual(this,"asm0.x6000076","asm0.x600007f");
            BLR.declare_virtual(this,"asm0.x6000075","asm0.x6000080");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000077");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600007a");
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000012;
})(asm1 || (asm1 = {}));
