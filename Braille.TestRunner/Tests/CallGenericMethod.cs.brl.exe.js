var asm1; (function (asm)
{
    asm.FullName = "CallGenericMethod.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* T A`1.get_Prop()*/
    asm.x600000c = function get_Prop(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld T <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A_1<Prop>k__BackingField"];
    };;
    /* System.Void A`1.set_Prop(T)*/
    asm.x600000d = function set_Prop(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld T <Prop>k__BackingField*/
        (arg0)["A_1<Prop>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  A`1..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000f_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        ((asm0)["System.Int32"]().init)();
        ((asm0)["System.String"]().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        t0 = (asm0)["System.ValueType"]();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.String"]();
        __pos__ = 0x0;
        /* IL_00: ldc.i4.s 123*/
        /* IL_02: call Void Y[System.Int32](System.Int32)*/
        (asm1.x6000010((asm0)["System.Int32"]()))((123|0));
        /* IL_07: ldstr Hello*/
        /* IL_0C: call Void Y[System.String](System.String)*/
        (asm1.x6000010((asm0)["System.String"]()))(BLR.new_string("Hello"));
        /* IL_11: ret */
        return ;
    };
    /* static System.Void Program.Y<T>(T)*/
    asm.x6000010_init = function (T)
    {
        return function ()
        {
            ((asm1)["A`1"](T).init)();
        };
    };;
    asm.x6000010 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000010_init(T).apply)(this,arguments);
            return (asm.x6000010_(T).apply)(this,arguments);
        };
    };;
    asm.x6000010_ = function (T)
    {
        return function Y(arg0)
        {
            var t0;
            var t1;
            var __pos__;
            var loc0;
            t0 = T;
            t1 = (asm1)["A`1"](t0);
            __pos__ = 0x0;
            /* IL_00: newobj Void .ctor()*/
            /* IL_05: stloc.0 */
            loc0 = BLR.newobj(t1,asm1.x600000e,[null]);
            /* IL_06: ldloc.0 */
            /* IL_07: ldarg.0 */
            /* IL_08: callvirt Void set_Prop(T)*/
            ((loc0.vtable)["asm1.x600000d"]())(loc0,arg0);
            /* IL_0D: ldloc.0 */
            /* IL_0E: call Void X[T](I`1[T])*/
            (asm1.x6000011(T))(loc0);
            /* IL_13: ret */
            return ;
        };
    };
    /* static System.Void Program.X<T>(I`1)*/
    asm.x6000011_init = function (T)
    {
        return function ()
        {
            ((asm1)["I`1"](T).init)();
        };
    };;
    asm.x6000011 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000011_init(T).apply)(this,arguments);
            return (asm.x6000011_(T).apply)(this,arguments);
        };
    };;
    asm.x6000011_ = function (T)
    {
        return function X(arg0)
        {
            var t0;
            var t1;
            var __pos__;
            t0 = T;
            t1 = (asm1)["I`1"](t0);
            __pos__ = 0x0;
            /* IL_00: ldarg.0 */
            /* IL_01: callvirt T get_Prop()*/
            /* IL_06: box T*/
            /* IL_0B: call Void Log(System.Object)*/
            asm1.x6000001(BLR.box(((((arg0.ifacemap)[t1])[t0].x600000a)())(BLR.convert_box_to_pointer_as_needed(arg0)),t0));
            /* IL_10: ret */
            return ;
        };
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
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I`1",false,false,true,true,false,[],[
                    [asm1, "x600000a", "get_Prop"],
                    [asm1, "x600000b", "set_Prop"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
            BLR.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
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
                    [asm1, "x600000c", "get_Prop"],
                    [asm1, "x600000d", "set_Prop"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            BLR.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm1)["I`1"](T), T],
                {
                    'x600000a': function (){ return asm1.x600000c;},
                    'x600000b': function (){ return asm1.x600000d;}
                });
            (this.prototype)["A_1<Prop>k__BackingField"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
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
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
