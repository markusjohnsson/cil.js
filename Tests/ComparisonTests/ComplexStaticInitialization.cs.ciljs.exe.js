var asm1;(function (asm)
{
    asm.FullName = "ComplexStaticInitialization.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A`1..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static  A`1..cctor()*/
    asm.x6000002_init = function (T)
    {
        return function ()
        {
            ((asm1)["I`1"](T).init)();
            ((asm1)["B`1"](T).init)();
            ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
            ((asm1)["C`1"]((asm0)["CilJs.Runtime.UnboundGenericParameter"]()).init)();
            ((asm1)["A`1"](T).init)();
        };
    };;
    asm.x6000002 = function (T)
    {
        return function ()
        {
            (asm.x6000002_init(T))();
            return (asm.x6000002_(T))();
        };
    };;
    asm.x6000002_ = function (T)
    {
        return function _cctor()
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            var t5;
            var t6;
            var t7;
            var st_07;
            var st_08;
            var st_09;
            var st_0A;
            var st_0B;
            var st_0C;
            var st_0D;
            var st_0E;
            var st_0F;
            var st_10;
            var st_11;
            var st_12;
            var in_block_0;
            var __pos__;
            
            if ((asm1)["A`1"](T).FieldsInitialized){
                return;
            }
            (asm1)["A`1"](T).FieldsInitialized = true;
            t0 = T;
            t1 = (asm1)["I`1"](t0);
            t2 = (asm1)["B`1"](t0);
            t3 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
            t4 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
            t5 = (asm1)["C`1"](t4);
            t6 = (asm0)["System.Type"]();
            t7 = (asm1)["A`1"](t0);
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: ldtoken I`1[T] */
                    /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                    /* IL_0A: call TypeInfo GetTypeInfo(System.Type) */
                    /* IL_0F: ldtoken T */
                    /* IL_14: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                    /* IL_19: call TypeInfo GetTypeInfo(System.Type) */
                    /* IL_1E: callvirt Boolean IsAssignableFrom(System.Type) */
                    /* IL_23: brtrue.s IL_2C */
                    
                    if (((asm0.x60001bf(asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))).vtable)["asm0.x6000080"])(asm0.x60001bf(asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1))),asm0.x60001bf(asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))))){
                        __pos__ = 0x2C;
                        continue;
                    }
                    (asm1.x6000002(T))();
                    /* IL_25: newobj Void .ctor() */
                    st_12 = CILJS.newobj(t2,asm1.x6000003,[null]);
                    /* IL_2A: br.s IL_58 */
                    __pos__ = 0x58;
                    continue;
                    case 0x2C:
                    /* IL_2C: ldtoken C`1[T] */
                    st_07 = CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5);
                    /* IL_31: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                    st_0E = asm0.x6000074(st_07);
                    /* IL_36: ldc.i4.1  */
                    st_08 = (1|0);
                    /* IL_37: newarr System.Type */
                    st_09 = CILJS.new_array(t6,st_08);
                    /* IL_3C: dup  */
                    st_0F = st_0B = st_09;
                    /* IL_3D: ldc.i4.0  */
                    st_0C = (0|0);
                    /* IL_3E: ldtoken T */
                    st_0A = CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0);
                    /* IL_43: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                    st_0D = asm0.x6000074(st_0A);
                    /* IL_48: stelem.ref  */
                    CILJS.stelem_ref(st_0B,st_0C,st_0D);
                    /* IL_49: callvirt Type MakeGenericType(System.Type[]) */
                    st_10 = (st_0E.vtable)["asm0.x600007f"](st_0E,st_0F);
                    /* IL_4E: call Object CreateInstance(System.Type) */
                    st_11 = asm0.x600009c(st_10);
                    /* IL_53: castclass A`1[T] */
                    st_12 = CILJS.cast_class(st_11,t7);
                    case 0x58:
                    (asm1.x6000002(T))();
                    /* IL_58: stsfld A`1 Instance */
                    t7.Instance = st_12;
                    /* IL_5D: ret  */
                    return ;
                }
            }
        };
    };
    /*  B`1..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000001(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  C`1..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000001(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  E..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Boolean Program.IsA<T>(Object)*/
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
        return function IsA(arg0)
        {
            var t0;
            var t1;
            var loc0;
            t0 = T;
            t1 = (asm1)["A`1"](t0);
            /* IL_00: nop  */
            /* IL_01: ldarg.0  */
            /* IL_02: isinst A`1[T] */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: stloc.0  */
            loc0 = ((t1.IsInst(arg0) !== null) ? 1 : 0);
            /* IL_0D: ldloc.0  */
            /* IL_0E: ret  */
            return loc0;
        };
    };
    /* static System.Void Program.Main()*/
    asm.x6000008_init = function ()
    {
        (asm1.D().init)();
        ((asm1)["A`1"](asm1.D()).init)();
        (asm1.E().init)();
        ((asm1)["A`1"](asm1.E()).init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function ()
    {
        asm.x6000008_init();
        return asm.x6000008_();
    };;
    asm.x6000008_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        CILJS.init_base_types();
        t0 = asm1.D();
        t1 = (asm1)["A`1"](t0);
        t2 = (asm0)["System.Boolean"]();
        t3 = asm1.E();
        t4 = (asm1)["A`1"](t3);
        t5 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        (asm1.x6000002(asm1.D()))();
        /* IL_01: ldsfld Managed.Reflection.GenericFieldInstance */
        /* IL_06: call Boolean IsA[D](System.Object) */
        /* IL_0B: box System.Boolean */
        /* IL_10: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box((asm1.x6000007(asm1.D()))(t1.Instance),t2));
        /* IL_15: nop  */
        (asm1.x6000002(asm1.E()))();
        /* IL_16: ldsfld Managed.Reflection.GenericFieldInstance */
        /* IL_1B: callvirt Type GetType() */
        /* IL_20: callvirt String get_Name() */
        /* IL_25: ldc.i4.0  */
        /* IL_26: newarr System.Object */
        /* IL_2B: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(((asm0.x60000cf(t4.Instance).vtable)["asm0.x60001c5"])(asm0.x60000cf(t4.Instance)),CILJS.new_array(t5,(0|0)));
        /* IL_30: nop  */
        (asm1.x6000002(asm1.D()))();
        /* IL_31: ldsfld Managed.Reflection.GenericFieldInstance */
        /* IL_36: callvirt Type GetType() */
        /* IL_3B: callvirt String get_Name() */
        /* IL_40: ldc.i4.0  */
        /* IL_41: newarr System.Object */
        /* IL_46: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(((asm0.x60000cf(t1.Instance).vtable)["asm0.x60001c5"])(asm0.x60000cf(t1.Instance)),CILJS.new_array(t5,(0|0)));
        /* IL_4B: nop  */
        /* IL_4C: ret  */
        return ;
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
            CILJS.init_type(this,asm,"I`1",false,false,true,true,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002",null);
            (this.GenericArguments)["asm1.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + (T.GenericTypeMetadataName + ">"));
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
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.Instance = null;
            (this.GenericArguments)["asm1.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function A_1() { c.init(); }");
    (asm)["B`1"] = CILJS.declare_type(
        "B_1",
        ["T"],
        function (T)
        {
            return (asm1)["A`1"](T);
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B`1",false,false,false,true,false,[],[],(asm1)["A`1"](T),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            (this.GenericArguments)["asm1.t2000004"] = [T];
            (this.GenericArguments)["asm1.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000004<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function B_1() { c.init(); }");
    (asm)["C`1"] = CILJS.declare_type(
        "C_1",
        ["T"],
        function (T)
        {
            return (asm1)["A`1"](T);
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C`1",false,false,false,true,false,[],[],(asm1)["A`1"](T),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            (this.GenericArguments)["asm1.t2000005"] = [T];
            (this.GenericArguments)["asm1.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000005<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function C_1() { c.init(); }");
    asm.D = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006",null);
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
            CILJS.implement_interface(
                this,
                [(asm1)["I`1"](asm1.D()), asm1.D()],
                {});
        },
        "function D() { c.init(); }");
    asm.E = CILJS.declare_type(
        "E",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"E",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007",null);
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function E() { c.init(); }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008",null);
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x6000008;
})(asm1 || (asm1 = {}));
if (module){
    module.exports = asm1;
}
