var asm2; (function (asm)
{
    asm.FullName = "CallGenericMethod.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* T A`1.get_Prop()*/
    asm.x6000003 = function get_Prop(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld T <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A_1<Prop>k__BackingField"];
    };;
    /* System.Void A`1.set_Prop(T)*/
    asm.x6000004 = function set_Prop(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld T <Prop>k__BackingField*/
        (arg0)["A_1<Prop>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  A`1..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000006 = function Main()
    {
        var t0;
        var t1;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.String"]();
        /* IL_00: ldc.i4.s 123*/
        /* IL_02: call Void Y[System.Int32](System.Int32)*/
        (asm2.x6000007((asm0)["System.Int32"]()))((123|0));
        /* IL_07: ldstr Hello*/
        /* IL_0C: call Void Y[System.String](System.String)*/
        (asm2.x6000007((asm0)["System.String"]()))(CILJS.new_string("Hello"));
        /* IL_11: ret */
        return ;
    };;
    /* static System.Void Program.Y<T>(T)*/
    asm.x6000007_init = function (T)
    {
        return function ()
        {
            ((asm2)["A`1"](T).init)();
        };
    };;
    asm.x6000007 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000007_init(T).apply)(this,arguments);
            return (asm.x6000007_(T).apply)(this,arguments);
        };
    };;
    asm.x6000007_ = function (T)
    {
        return function Y(arg0)
        {
            var t0;
            var t1;
            var loc0;
            t0 = T;
            t1 = (asm2)["A`1"](t0);
            /* IL_00: newobj Void .ctor()*/
            /* IL_05: stloc.0 */
            loc0 = CILJS.newobj(t1,asm2.x6000005,[null]);
            /* IL_06: ldloc.0 */
            /* IL_07: ldarg.0 */
            /* IL_08: callvirt Void set_Prop(T)*/
            ((loc0.vtable)["asm2.x6000004"]())(loc0,arg0);
            /* IL_0D: ldloc.0 */
            /* IL_0E: call Void X[T](I`1[T])*/
            (asm2.x6000008(T))(loc0);
            /* IL_13: ret */
            return ;
        };
    };
    /* static System.Void Program.X<T>(I`1)*/
    asm.x6000008_init = function (T)
    {
        return function ()
        {
            ((asm2)["I`1"](T).init)();
        };
    };;
    asm.x6000008 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000008_init(T).apply)(this,arguments);
            return (asm.x6000008_(T).apply)(this,arguments);
        };
    };;
    asm.x6000008_ = function (T)
    {
        return function X(arg0)
        {
            var t0;
            var t1;
            t0 = T;
            t1 = (asm2)["I`1"](t0);
            /* IL_00: ldarg.0 */
            /* IL_01: callvirt T get_Prop()*/
            /* IL_06: box T*/
            /* IL_0B: call Void Log(System.Object)*/
            asm1.x6000001(CILJS.box(((((arg0.ifacemap)[t1])[t0].x6000001)())(CILJS.convert_box_to_pointer_as_needed(arg0)),t0));
            /* IL_10: ret */
            return ;
        };
    };
    /*  Program..ctor()*/
    asm.x6000009 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    (asm)["I`1"] = CILJS.declare_type(
        "I_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I`1",false,false,true,true,false,[],[
                    [asm2, "x6000001", "get_Prop"],
                    [asm2, "x6000002", "set_Prop"]
                ],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            (this.GenericArguments)["asm2.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm2.x6000001","asm2.x6000001");
            CILJS.declare_virtual(this,"asm2.x6000002","asm2.x6000002");
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
                    [asm2, "x6000003", "get_Prop"],
                    [asm2, "x6000004", "set_Prop"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            (this.GenericArguments)["asm2.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm2.x6000003","asm2.x6000003");
            CILJS.declare_virtual(this,"asm2.x6000004","asm2.x6000004");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm2)["I`1"](T), T],
                {
                    'x6000001': function (){ return asm2.x6000003;},
                    'x6000002': function (){ return asm2.x6000004;}
                });
            (this.prototype)["A_1<Prop>k__BackingField"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000006;
})(asm2 || (asm2 = {}));
