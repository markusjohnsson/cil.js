var asm1;(function (asm)
{
    asm.FullName = "CallGenericMethod.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* T A`1.get_Prop()*/
    asm.x6000003 = function get_Prop(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld T <Prop>k__BackingField */
        /* IL_06: ret  */
        return (arg0)["A_1<Prop>k__BackingField"];
    };;
    /* System.Void A`1.set_Prop(T)*/
    asm.x6000004 = function set_Prop(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld T <Prop>k__BackingField */
        (arg0)["A_1<Prop>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  A`1..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
        /* IL_00: nop  */
        /* IL_01: ldc.i4.s 123 */
        /* IL_03: call Void Y[System.Int32](System.Int32) */
        (asm1.x6000007((asm0)["System.Int32"]()))((123|0));
        /* IL_08: nop  */
        /* IL_09: ldstr Hello */
        /* IL_0E: call Void Y[System.String](System.String) */
        (asm1.x6000007((asm0)["System.String"]()))(CILJS.new_string("Hello"));
        /* IL_13: nop  */
        /* IL_14: ret  */
        return ;
    };;
    /* static System.Void Program.Y<T>(T)*/
    asm.x6000007_init = function (T)
    {
        return function (arg0)
        {
            ((asm1)["A`1"](T).init)();
        };
    };;
    asm.x6000007 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000007_init(T))(arg0);
            return (asm.x6000007_(T))(arg0);
        };
    };;
    asm.x6000007_ = function (T)
    {
        return function Y(arg0)
        {
            var t0;
            var t1;
            var st_00;
            var st_01;
            var st_02;
            var st_03;
            t0 = T;
            t1 = (asm1)["A`1"](t0);
            /* IL_00: nop  */
            /* IL_01: newobj Void .ctor() */
            st_00 = CILJS.newobj(t1,asm1.x6000005,[null]);
            /* IL_06: dup  */
            st_03 = st_01 = st_00;
            /* IL_07: ldarg.0  */
            st_02 = arg0;
            /* IL_08: callvirt Void set_Prop(T) */
            (st_01.vtable)["asm1.x6000004"](st_01,st_02);
            /* IL_0D: nop  */
            /* IL_0E: call Void X[T](I`1[T]) */
            (asm1.x6000008(T))(st_03);
            /* IL_13: nop  */
            /* IL_14: ret  */
            return ;
        };
    };
    /* static System.Void Program.X<T>(I`1)*/
    asm.x6000008_init = function (T)
    {
        return function (arg0)
        {
            ((asm1)["I`1"](T).init)();
        };
    };;
    asm.x6000008 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000008_init(T))(arg0);
            return (asm.x6000008_(T))(arg0);
        };
    };;
    asm.x6000008_ = function (T)
    {
        return function X(arg0)
        {
            var t0;
            var t1;
            t0 = T;
            t1 = (asm1)["I`1"](t0);
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: callvirt T get_Prop() */
            /* IL_07: box T */
            /* IL_0C: call Void WriteLine(System.Object) */
            asm0.x60000a1(CILJS.box((((arg0.ifacemap)[t1])[t0].x6000001)(CILJS.convert_box_to_pointer_as_needed(arg0)),t0));
            /* IL_11: nop  */
            /* IL_12: ret  */
            return ;
        };
    };
    /*  Program..ctor()*/
    asm.x6000009 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
                    [asm1, "x6000001", "get_Prop"],
                    [asm1, "x6000002", "set_Prop"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002",null);
            (this.GenericArguments)["asm1.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x6000001","asm1.x6000001");
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
        },
        "function I_1() { c.init(); }");
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
                    [asm1, "x6000003", "get_Prop"],
                    [asm1, "x6000004", "set_Prop"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            (this.GenericArguments)["asm1.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x6000003","asm1.x6000003");
            CILJS.declare_virtual(this,"asm1.x6000004","asm1.x6000004");
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
            CILJS.implement_interface(
                this,
                [(asm1)["I`1"](T), T],
                [
                    ["x6000001", "asm1.x6000003"],
                    ["x6000002", "asm1.x6000004"]
                ]);
        },
        "function A_1() { c.init();(this)[\"A_1<Prop>k__BackingField\"] = T.Default }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000006;
})(asm1 || (asm1 = {}));
if (module){
    module.exports = asm1;
}
