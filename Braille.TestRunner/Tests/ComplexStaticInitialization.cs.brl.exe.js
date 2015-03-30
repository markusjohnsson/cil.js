var asm1; (function (asm)
{
    asm.FullName = "ComplexStaticInitialization.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  A`1..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static  A`1..cctor()*/
    asm.x600000b_init = function (T)
    {
        return function ()
        {
            ((asm1)["I`1"](T).init)();
            ((asm1)["B`1"](T).init)();
            ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
            ((asm1)["C`1"]((asm0)["Braille.Runtime.UnboundGenericParameter"]()).init)();
            ((asm1)["A`1"](T).init)();
        };
    };;
    asm.x600000b = function (T)
    {
        return function ()
        {
            (asm.x600000b_init(T).apply)(this,arguments);
            return (asm.x600000b_(T).apply)(this,arguments);
        };
    };;
    asm.x600000b_ = function (T)
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
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc0;
            
            if ((asm1)["A`1"](T).FieldsInitialized){
                return;
            }
            (asm1)["A`1"](T).FieldsInitialized = true;
            t0 = T;
            t1 = (asm1)["I`1"](t0);
            t2 = (asm1)["B`1"](t0);
            t3 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
            t4 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
            t5 = (asm1)["C`1"](t4);
            t6 = (asm0)["System.Type"]();
            t7 = (asm1)["A`1"](t0);
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: ldtoken I`1[T] */
                    /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                    /* IL_0A: ldtoken T */
                    /* IL_0F: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                    /* IL_14: callvirt Boolean IsAssignableFrom(System.Type) */
                    /* IL_19: brtrue.s IL_22 */
                    
                    if ((((asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).vtable)["asm0.x60000ed"])())(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)),asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)))){
                        __pos__ = 0x22;
                        continue;
                    }
                    (asm1.x600000b(T))();
                    /* IL_1B: newobj Void .ctor() */
                    st_10 = BLR.newobj(t2,asm1.x600000c,[null]);
                    /* IL_20: br.s IL_50 */
                    __pos__ = 0x50;
                    continue;
                    case 0x22:
                    /* IL_22: ldtoken C`1[T] */
                    /* IL_27: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                    st_0C = asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t5));
                    /* IL_2C: ldc.i4.1  */
                    /* IL_2D: newarr System.Type */
                    /* IL_32: stloc.0  */
                    loc0 = BLR.new_array(t6,(1|0));
                    /* IL_33: ldloc.0  */
                    st_09 = loc0;
                    /* IL_34: ldc.i4.0  */
                    st_0A = (0|0);
                    /* IL_35: ldtoken T */
                    st_08 = BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0);
                    /* IL_3A: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                    st_0B = asm0.x60000e1(st_08);
                    /* IL_3F: stelem.ref  */
                    BLR.stelem_ref(st_09,st_0A,st_0B);
                    /* IL_40: ldloc.0  */
                    st_0D = loc0;
                    /* IL_41: callvirt Type MakeGenericType(System.Type[]) */
                    st_0E = ((st_0C.vtable)["asm0.x60000ec"]())(st_0C,st_0D);
                    /* IL_46: call Object CreateInstance(System.Type) */
                    st_0F = asm0.x6000060(st_0E);
                    /* IL_4B: castclass A`1[T] */
                    st_10 = BLR.cast_class(st_0F,t7);
                    case 0x50:
                    /* IL_50: nop  */
                    
                    (asm1.x600000b(T))();
                    /* IL_51: stsfld A`1 Instance */
                    (t7)["Instance"] = st_10;
                    /* IL_56: ret  ComplexStaticInitialization.cs:16707566:0*/
                    return ;
                }
            }
        };
    };
    /*  B`1..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000a(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /*  C`1..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x600000a(arg0);
        /* IL_06: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  E..ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Boolean Program.IsA<T>(Object)*/
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
        return function IsA(arg0)
        {
            var t0;
            var t1;
            var __pos__;
            var loc0;
            t0 = T;
            t1 = (asm1)["A`1"](t0);
            __pos__ = 0x0;
            /* IL_00: nop  ComplexStaticInitialization.cs:22:5*/
            /* IL_01: ldarg.0  */
            /* IL_02: isinst A`1[T] */
            /* IL_07: ldnull  */
            /* IL_09: cgt.un  */
            /* IL_0A: stloc.0  */
            loc0 = ((t1.IsInst(arg0) !== null) ? (1) : (0));
            /* IL_0D: ldloc.0  */
            /* IL_0E: ret  */
            return loc0;
        };
    };
    /* static System.Void Program.Main()*/
    asm.x6000011_init = function ()
    {
        (asm1.D().init)();
        ((asm1)["A`1"](asm1.D()).init)();
        (asm1.E().init)();
        ((asm1)["A`1"](asm1.E()).init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        BLR.init_base_types();
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var __pos__;
        t0 = asm1.D();
        t1 = (asm1)["A`1"](t0);
        t2 = (asm0)["System.Boolean"]();
        t3 = asm1.E();
        t4 = (asm1)["A`1"](t3);
        __pos__ = 0x0;
        /* IL_00: nop  ComplexStaticInitialization.cs:27:5*/
        (asm1.x600000b(asm1.D()))();
        /* IL_01: ldsfld IKVM.Reflection.GenericFieldInstance */
        /* IL_06: call Boolean IsA[D](System.Object) */
        /* IL_0B: box System.Boolean */
        /* IL_10: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': (asm1.x6000010(asm1.D()))(t1.Instance),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
        /* IL_15: nop  */
        (asm1.x600000b(asm1.E()))();
        /* IL_16: ldsfld IKVM.Reflection.GenericFieldInstance */
        /* IL_1B: callvirt Type GetType() */
        /* IL_20: callvirt String get_Name() */
        /* IL_25: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x600000a(t4.Instance).vtable)["asm0.x600003e"])())(asm0.x600000a(t4.Instance)));
        /* IL_2A: nop  */
        (asm1.x600000b(asm1.D()))();
        /* IL_2B: ldsfld IKVM.Reflection.GenericFieldInstance */
        /* IL_30: callvirt Type GetType() */
        /* IL_35: callvirt String get_Name() */
        /* IL_3A: call Void Log(System.Object) */
        asm1.x6000001((((asm0.x600000a(t1.Instance).vtable)["asm0.x600003e"])())(asm0.x600000a(t1.Instance)));
        /* IL_3F: nop  */
        /* IL_40: ret  ComplexStaticInitialization.cs:34:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000012 = function _ctor(arg0)
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
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"I`1",false,false,true,true,false,[],[],null,BLR.is_inst_interface(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
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
            this.Instance = null;
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000007<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["B`1"] = BLR.declare_type(
        "B_1",
        ["T"],
        function (T)
        {
            return new ((asm1)["A`1"](T))();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B`1",false,false,false,true,false,[],[],(asm1)["A`1"](T),BLR.is_inst_default(this),Array,"asm1.t2000008");
            (this.GenericArguments)["asm1.t2000008"] = [T];
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000008<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["C`1"] = BLR.declare_type(
        "C_1",
        ["T"],
        function (T)
        {
            return new ((asm1)["A`1"](T))();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"C`1",false,false,false,true,false,[],[],(asm1)["A`1"](T),BLR.is_inst_default(this),Array,"asm1.t2000009");
            (this.GenericArguments)["asm1.t2000009"] = [T];
            (this.GenericArguments)["asm1.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000009<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.D = BLR.declare_type(
        "D",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm1)["I`1"](asm1.D()), asm1.D()],
                {});
        });
    asm.E = BLR.declare_type(
        "E",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"E",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000b");
            this.GenericTypeMetadataName = "asm1.t200000b";
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000c");
            this.GenericTypeMetadataName = "asm1.t200000c";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
