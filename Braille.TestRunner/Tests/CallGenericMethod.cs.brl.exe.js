var asm1; (function (asm)
{
    asm.FullName = "CallGenericMethod.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* T get_Prop()*/
    asm.x600000e = function get_Prop(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld T <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A_1<Prop>k__BackingField"];
    };;
    /* Void set_Prop(T)*/
    asm.x600000f = function set_Prop(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld T <Prop>k__BackingField*/
        (arg0)["A_1<Prop>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000011_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        ((asm0)["System.Int32"]().init)();
        ((asm0)["System.String"]().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        t0 = (asm0)["System.ValueType"]();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.String"]();
        /* IL_00: ldc.i4.s 123*/
        /* IL_02: call Void Y[System.Int32](System.Int32)*/
        (asm1.x6000012((asm0)["System.Int32"]()))((123|0));
        /* IL_07: ldstr Hello*/
        /* IL_0C: call Void Y[System.String](System.String)*/
        (asm1.x6000012((asm0)["System.String"]()))(BLR.new_string("Hello"));
        /* IL_11: ret */
        return ;
    };
    /* static Void Y[T](T)*/
    asm.x6000012_init = function (T)
    {
        return function ()
        {
            ((asm1)["A`1"](T).init)();
        };
    };;
    asm.x6000012 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000012_init(T).apply)(this,arguments);
            return (asm.x6000012_(T).apply)(this,arguments);
        };
    };;
    asm.x6000012_ = function (T)
    {
        return function Y(arg0)
        {
            var t0;
            var t1;
            var loc0;
            t0 = T;
            t1 = (asm1)["A`1"](T);
            /* IL_00: newobj Void .ctor()*/
            /* IL_05: stloc.0 */
            loc0 = BLR.newobj(t1,asm1.x6000010,[null]);
            /* IL_06: ldloc.0 */
            /* IL_07: ldarg.0 */
            /* IL_08: callvirt Void set_Prop(T)*/
            ((loc0.vtable)["asm1.x600000f"]())(loc0,arg0);
            /* IL_0D: ldloc.0 */
            /* IL_0E: call Void X[T](I`1[T])*/
            (asm1.x6000013(T))(loc0);
            /* IL_13: ret */
            return ;
        };
    };
    /* static Void X[T](I`1[T])*/
    asm.x6000013_init = function (T)
    {
        return function ()
        {
            ((asm1)["I`1"](T).init)();
        };
    };;
    asm.x6000013 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000013_init(T).apply)(this,arguments);
            return (asm.x6000013_(T).apply)(this,arguments);
        };
    };;
    asm.x6000013_ = function (T)
    {
        return function X(arg0)
        {
            var t0;
            var t1;
            t0 = T;
            t1 = (asm1)["I`1"](T);
            /* IL_00: ldarg.0 */
            /* IL_01: callvirt T get_Prop()*/
            /* IL_06: box T*/
            /* IL_0B: call Void Log(System.Object)*/
            asm1.x6000001(BLR.box(((((arg0.ifacemap)[t1])[t0].x600000c)())(BLR.convert_box_to_pointer_as_needed(arg0)),t0));
            /* IL_10: ret */
            return ;
        };
    };
    /* Void .ctor()*/
    asm.x6000014 = function _ctor(arg0)
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
            this.Interfaces = [];
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
            this.Interfaces = [];
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
                    [asm1, "x600000c", "get_Prop"],
                    [asm1, "x600000d", "set_Prop"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000007");
            this.Interfaces = [];
            (this.GenericArguments)["asm1.t2000007"] = [T];
            BLR.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            BLR.declare_virtual(this,"asm1.x600000d","asm1.x600000d");
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
                    [asm1, "x600000e", "get_Prop"],
                    [asm1, "x600000f", "set_Prop"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.Interfaces = [
                (asm1)["I`1"](T)
            ];
            (this.GenericArguments)["asm1.t2000008"] = [T];
            BLR.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            BLR.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(this,[(asm1)["I`1"](T), T],{
                    'x600000c': function (){ return asm1.x600000e;},
                    'x600000d': function (){ return asm1.x600000f;}
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.Interfaces = [];
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
