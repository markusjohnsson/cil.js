var asm2; (function (asm)
{
    asm.FullName = "ComplexStaticInitialization.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A`1..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static  A`1..cctor()*/
    asm.x6000002_init = function (T)
    {
        return function ()
        {
            ((asm2)["I`1"](T).init)();
            ((asm2)["B`1"](T).init)();
            ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
            ((asm2)["C`1"]((asm0)["CilJs.Runtime.UnboundGenericParameter"]()).init)();
            ((asm2)["A`1"](T).init)();
        };
    };;
    asm.x6000002 = function (T)
    {
        return function ()
        {
            (asm.x6000002_init(T).apply)(this,arguments);
            return (asm.x6000002_(T).apply)(this,arguments);
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
            var st_08;
            var st_09;
            var st_0A;
            var st_0B;
            var st_0C;
            var st_0D;
            var st_0E;
            var st_0F;
            var st_10;
            var in_block_0;
            var __pos__;
            var loc0;
            
            if ((asm2)["A`1"](T).FieldsInitialized){
                return;
            }
            (asm2)["A`1"](T).FieldsInitialized = true;
            t0 = T;
            t1 = (asm2)["I`1"](t0);
            t2 = (asm2)["B`1"](t0);
            t3 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
            t4 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
            t5 = (asm2)["C`1"](t4);
            t6 = (asm0)["System.Type"]();
            t7 = (asm2)["A`1"](t0);
            in_block_0 = true;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: ldtoken I`1[T]*/
                    /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    /* IL_0A: ldtoken T*/
                    /* IL_0F: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    /* IL_14: callvirt Boolean IsAssignableFrom(System.Type)*/
                    /* IL_19: brtrue.s IL_22*/
                    
                    if ((((asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x6000153"])())(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)),asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)))){
                        __pos__ = 0x22;
                        continue;
                    }
                    (asm2.x6000002(T))();
                    /* IL_1B: newobj Void .ctor()*/
                    st_10 = CILJS.newobj(t2,asm2.x6000003,[null]);
                    /* IL_20: br.s IL_50*/
                    __pos__ = 0x50;
                    continue;
                    case 0x22:
                    /* IL_22: ldtoken C`1[T]*/
                    /* IL_27: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    st_0C = asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5));
                    /* IL_2C: ldc.i4.1 */
                    /* IL_2D: newarr System.Type*/
                    /* IL_32: stloc.0 */
                    loc0 = CILJS.new_array(t6,(1|0));
                    /* IL_33: ldloc.0 */
                    st_09 = loc0;
                    /* IL_34: ldc.i4.0 */
                    st_0A = (0|0);
                    /* IL_35: ldtoken T*/
                    st_08 = CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0);
                    /* IL_3A: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    st_0B = asm0.x6000147(st_08);
                    /* IL_3F: stelem.ref */
                    CILJS.stelem_ref(st_09,st_0A,st_0B);
                    /* IL_40: ldloc.0 */
                    st_0D = loc0;
                    /* IL_41: callvirt Type MakeGenericType(System.Type[])*/
                    st_0E = ((st_0C.vtable)["asm0.x6000152"]())(st_0C,st_0D);
                    /* IL_46: call Object CreateInstance(System.Type)*/
                    st_0F = asm0.x6000002(st_0E);
                    /* IL_4B: castclass A`1[T]*/
                    st_10 = CILJS.cast_class(st_0F,t7);
                    case 0x50:
                    (asm2.x6000002(T))();
                    /* IL_50: stsfld A`1 Instance*/
                    (t7)["Instance"] = st_10;
                    /* IL_55: ret */
                    return ;
                }
            }
        };
    };
    /*  B`1..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000001(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  C`1..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm2.x6000001(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  E..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Boolean Program.IsA<T>(Object)*/
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
        return function IsA(arg0)
        {
            var t0;
            var t1;
            t0 = T;
            t1 = (asm2)["A`1"](t0);
            /* IL_00: ldarg.0 */
            /* IL_01: isinst A`1[T]*/
            /* IL_06: ldnull */
            /* IL_08: cgt.un */
            /* IL_09: ret */
            return ((t1.IsInst(arg0) !== null) ? (1) : (0));
        };
    };
    /* static System.Void Program.Main()*/
    asm.x6000008_init = function ()
    {
        (asm2.D().init)();
        ((asm2)["A`1"](asm2.D()).init)();
        (asm2.E().init)();
        ((asm2)["A`1"](asm2.E()).init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function ()
    {
        asm.x6000008_init.apply(this,arguments);
        return asm.x6000008_.apply(this,arguments);
    };;
    asm.x6000008_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        CILJS.init_base_types();
        t0 = asm2.D();
        t1 = (asm2)["A`1"](t0);
        t2 = (asm0)["System.Boolean"]();
        t3 = asm2.E();
        t4 = (asm2)["A`1"](t3);
        (asm2.x6000002(asm2.D()))();
        /* IL_00: ldsfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_05: call Boolean IsA[D](System.Object)*/
        /* IL_0A: box System.Boolean*/
        /* IL_0F: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': (asm2.x6000007(asm2.D()))(t1.Instance),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        (asm2.x6000002(asm2.E()))();
        /* IL_14: ldsfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_19: callvirt Type GetType()*/
        /* IL_1E: callvirt String get_Name()*/
        /* IL_23: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x60000f2(t4.Instance).vtable)["asm0.x60001a4"])())(asm0.x60000f2(t4.Instance)));
        (asm2.x6000002(asm2.D()))();
        /* IL_28: ldsfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_2D: callvirt Type GetType()*/
        /* IL_32: callvirt String get_Name()*/
        /* IL_37: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x60000f2(t1.Instance).vtable)["asm0.x60001a4"])())(asm0.x60000f2(t1.Instance)));
        /* IL_3C: ret */
        return ;
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
            CILJS.init_type(this,asm,"I`1",false,false,true,true,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm2.t2000002");
            (this.GenericArguments)["asm2.t2000002"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000002<" + (T.GenericTypeMetadataName + ">"));
        });
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
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.Instance = null;
            (this.GenericArguments)["asm2.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000003<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["B`1"] = CILJS.declare_type(
        "B_1",
        ["T"],
        function (T)
        {
            return (asm2)["A`1"](T);
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B`1",false,false,false,true,false,[],[],(asm2)["A`1"](T),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            (this.GenericArguments)["asm2.t2000004"] = [T];
            (this.GenericArguments)["asm2.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000004<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["C`1"] = CILJS.declare_type(
        "C_1",
        ["T"],
        function (T)
        {
            return (asm2)["A`1"](T);
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C`1",false,false,false,true,false,[],[],(asm2)["A`1"](T),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            (this.GenericArguments)["asm2.t2000005"] = [T];
            (this.GenericArguments)["asm2.t2000003"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000005<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
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
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            this.GenericTypeMetadataName = "asm2.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm2)["I`1"](asm2.D()), asm2.D()],
                {});
        });
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
            CILJS.init_type(this,asm,"E",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000007");
            this.GenericTypeMetadataName = "asm2.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000008");
            this.GenericTypeMetadataName = "asm2.t2000008";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000008;
})(asm2 || (asm2 = {}));
