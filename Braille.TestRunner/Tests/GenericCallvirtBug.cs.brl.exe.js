var asm1; (function (asm)
{
    asm.FullName = "GenericCallvirtBug.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Void Y[TResult]()*/
    asm.x600000c = function (TResult)
    {
        return function Y(arg0)
        {
            var t0;
            t0 = TResult;
            /* IL_00: ldtoken TResult*/
            /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
            /* IL_0A: callvirt String get_Name()*/
            /* IL_0F: call Void Log(System.Object)*/
            asm1.x6000001((((asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x600003e"])())(asm0.x60000af(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))));
            /* IL_14: ret */
            return ;
        };
    };;
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void X()*/
    asm.x600000f = function X(arg0)
    {
        var t0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000008"])[0];
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld A`1 a*/
        /* IL_06: callvirt Void Y[T]()*/
        (asm1.x600000c((((arguments)[0].constructor.GenericArguments)["asm1.t2000008"])[0]))(arg0.Ba);
        /* IL_0B: ret */
        return ;
    };;
    /* Void .ctor(A`1[T])*/
    asm.x600000e = function _ctor(arg0,arg1)
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
    /* static Void Main()*/
    asm.x6000010_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        ((asm0)["System.String"]().init)();
        ((asm1)["A`1"]((asm0)["System.String"]()).init)();
        ((asm1)["A`1+B"]((asm0)["System.String"]()).init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        asm.x6000010_init.apply(this,arguments);
        return asm.x6000010_.apply(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc0;
        t0 = (asm0)["System.ValueType"]();
        t1 = (asm0)["System.String"]();
        t2 = (asm1)["A`1"]((asm0)["System.String"]());
        t3 = (asm1)["A`1+B"]((asm0)["System.String"]());
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: newobj Void .ctor(A`1[System.String])*/
        /* IL_0A: stloc.0 */
        loc0 = BLR.newobj(t3,asm1.x600000e,[null, BLR.newobj(t2,asm1.x600000d,[null])]);
        /* IL_0B: ldloc.0 */
        /* IL_0C: callvirt Void X()*/
        asm1.x600000f(loc0);
        /* IL_11: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
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
            BLR.init_type(this,asm,"A`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["A`1+B"] = BLR.declare_type(
        "B",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A`1+B",false,false,false,true,false,[],[
                    [asm1, "x600000f", "X"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            (this.GenericArguments)["asm1.t2000008"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000008<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Ba = null;
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
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
