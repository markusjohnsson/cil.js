var asm1;(function (asm)
{
    asm.FullName = "GenericMethodOnInterfaceBug.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Void A`1.X<T2>(String)*/
    asm.x600000b = function (T2)
    {
        return function X(arg0, arg1)
        {
            var t0;
            var __pos__;
            t0 = T2;
            __pos__ = 0x0;
            /* IL_00: nop  GenericMethodOnInterfaceBug.cs:10:5*/
            /* IL_01: ldtoken T2 */
            /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
            /* IL_0B: callvirt String get_FullName() */
            /* IL_10: call Void Log(System.Object) */
            asm1.x6000001((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60000e0"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))));
            /* IL_15: nop  */
            /* IL_16: ldarg.1  */
            /* IL_17: call Void Log(System.Object) */
            asm1.x6000001(arg1);
            /* IL_1C: nop  */
            /* IL_1D: ret  GenericMethodOnInterfaceBug.cs:13:5*/
            return ;
        };
    };;
    /*  A`1..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  X..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  Y..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000f_init = function ()
    {
        (asm1.X().init)();
        ((asm1)["A`1"](asm1.X()).init)();
        (asm1.Y().init)();
        ((asm1)["I`1"](asm1.X()).init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        BLR.init_base_types();
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos__;
        var loc0;
        t0 = asm1.X();
        t1 = (asm1)["A`1"](t0);
        t2 = asm1.Y();
        t3 = (asm1)["I`1"](t0);
        __pos__ = 0x0;
        /* IL_00: nop  GenericMethodOnInterfaceBug.cs:22:5*/
        /* IL_01: newobj Void .ctor() */
        /* IL_06: stloc.0  */
        loc0 = BLR.newobj(t1,asm1.x600000c,[null]);
        /* IL_07: ldloc.0  */
        /* IL_08: ldstr test1 */
        /* IL_0D: callvirt Void X[Y](System.String) */
        (((loc0.vtable)["asm1.x600000b"]())(asm1.Y()))(loc0,BLR.new_string("test1"));
        /* IL_12: nop  */
        /* IL_13: ldloc.0  */
        /* IL_14: ldstr test2 */
        /* IL_19: callvirt Void X[Y](System.String) */
        (((((loc0.ifacemap)[t3])[t0].x600000a)())(asm1.Y()))(loc0,BLR.new_string("test2"));
        /* IL_1E: nop  */
        /* IL_1F: ret  GenericMethodOnInterfaceBug.cs:26:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
    (asm)["I`1"] = BLR.declare_type(
        "I_1",
        ["T1"],
        function (T1)
        {
            return {};
        },
        function (T1)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I`1",false,false,true,true,false,[],[
                    [asm1, "x600000a", "X"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T1];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T1.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
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
                    [asm1, "x600000b", "X"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm1)["I`1"](T), T],
                {
                    'x600000a': function (){ return asm1.x600000b;}
                });
        });
    asm.X = BLR.declare_type(
        "X",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"X",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Y = BLR.declare_type(
        "Y",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Y",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
