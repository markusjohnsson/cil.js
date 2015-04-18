var asm1;(function (asm)
{
    asm.FullName = "StaticInitialization.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
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
    /* System.String A.ToString()*/
    asm.x600000a = function ToString(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  StaticInitialization.cs:4:39*/
        /* IL_01: ldstr A */
        /* IL_06: stloc.0  */
        loc0 = CILJS.new_string("A");
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /*  A..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.String B.ToString()*/
    asm.x600000c = function ToString(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  StaticInitialization.cs:8:39*/
        /* IL_01: ldstr B */
        /* IL_06: stloc.0  */
        loc0 = CILJS.new_string("B");
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /*  B..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /*  X..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static  X..cctor()*/
    asm.x600000f_init = function ()
    {
        (asm1.A().init)();
        (asm1.X().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function _cctor()
    {
        var t0;
        var t1;
        var __pos__;
        
        if (asm1.X().FieldsInitialized){
            return;
        }
        asm1.X().FieldsInitialized = true;
        t0 = asm1.A();
        t1 = asm1.X();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor() */
        /* IL_05: stsfld A Prop */
        (t1)["Prop"] = CILJS.newobj(t0,asm1.x600000b,[null]);
        /* IL_0A: ret  StaticInitialization.cs:16707566:0*/
        return ;
    };
    /*  Y`1..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static  Y`1..cctor()*/
    asm.x6000011_init = function (T)
    {
        return function ()
        {
            ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
            ((asm1)["Y`1"](T).init)();
        };
    };;
    asm.x6000011 = function (T)
    {
        return function ()
        {
            (asm.x6000011_init(T).apply)(this,arguments);
            return (asm.x6000011_(T).apply)(this,arguments);
        };
    };;
    asm.x6000011_ = function (T)
    {
        return function _cctor()
        {
            var t0;
            var t1;
            var t2;
            var loc0;
            var st_04;
            var st_05;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            
            if ((asm1)["Y`1"](T).FieldsInitialized){
                return;
            }
            (asm1)["Y`1"](T).FieldsInitialized = true;
            t0 = T;
            t1 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
            t2 = (asm1)["Y`1"](t0);
            loc0 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: ldloca.s 0 */
                    /* IL_03: initobj T */
                    loc0 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
                    /* IL_08: ldloc.0  */
                    /* IL_09: box T */
                    /* IL_0E: brfalse.s IL_1B */
                    
                    if ((!(CILJS.box(loc0,t0)))){
                        __pos__ = 0x1B;
                        continue;
                    }
                    /* IL_10: ldloca.s 0 */
                    /* IL_13: initobj T */
                    loc0 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
                    /* IL_18: ldloc.0  */
                    st_04 = loc0;
                    /* IL_19: br.s IL_20 */
                    __pos__ = 0x20;
                    continue;
                    case 0x1B:
                    /* IL_1B: call T CreateInstance[T]() */
                    st_04 = (asm0.x6000061(T))();
                    case 0x20:
                    /* IL_20: nop  */
                    
                    /* IL_21: box T */
                    st_05 = CILJS.box(st_04,t0);
                    (asm1.x6000011(T))();
                    /* IL_26: stsfld Object Prop */
                    (t2)["Prop"] = st_05;
                    /* IL_2B: ret  StaticInitialization.cs:16707566:0*/
                    return ;
                }
            }
        };
    };
    /* T2 Func`2.Invoke(T1)*/
    asm.x6000013 = CILJS.delegate_invoke;;
    /* System.IAsyncResult Func`2.BeginInvoke(T1,AsyncCallback,Object)*/
    asm.x6000014 = CILJS.delegate_begin_invoke;;
    /* T2 Func`2.EndInvoke(IAsyncResult)*/
    asm.x6000015 = CILJS.delegate_end_invoke;;
    /*  Func`2..ctor(Object,IntPtr)*/
    asm.x6000012 = CILJS.delegate_ctor;;
    /* static System.Boolean P`1.<.cctor>b__0(T)*/
    asm.x6000018 = function (T)
    {
        return function __cctor_b__0(arg0)
        {
            var __pos__;
            var loc0;
            __pos__ = 0x0;
            /* IL_00: ldc.i4.1  */
            /* IL_01: stloc.0  */
            loc0 = (1|0);
            /* IL_04: ldloc.0  */
            /* IL_05: ret  */
            return loc0;
        };
    };;
    /*  P`1..ctor()*/
    asm.x6000016 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static  P`1..cctor()*/
    asm.x6000017_init = function (T)
    {
        return function ()
        {
            ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
            ((asm1)["P`1"](T).init)();
            ((asm1)["Func`2"](T,(asm0)["System.Boolean"]()).init)();
        };
    };;
    asm.x6000017 = function (T)
    {
        return function ()
        {
            (asm.x6000017_init(T).apply)(this,arguments);
            return (asm.x6000017_(T).apply)(this,arguments);
        };
    };;
    asm.x6000017_ = function (T)
    {
        return function _cctor()
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            
            if ((asm1)["P`1"](T).FieldsInitialized){
                return;
            }
            (asm1)["P`1"](T).FieldsInitialized = true;
            t0 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
            t1 = T;
            t2 = (asm1)["P`1"](t1);
            t3 = (asm0)["System.Boolean"]();
            t4 = (asm1)["Func`2"](t1,t3);
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    (asm1.x6000017(T))();
                    /* IL_00: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate1 */
                    /* IL_05: brtrue.s IL_1A */
                    
                    if ((t2)["CS$<>9__CachedAnonymousMethodDelegate1"]){
                        __pos__ = 0x1A;
                        continue;
                    }
                    /* IL_07: ldnull  */
                    /* IL_09: ldftn Boolean <.cctor>b__0(T) */
                    /* IL_0E: newobj Void .ctor(System.Object, System.IntPtr) */
                    /* IL_13: stsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate1 */
                    (t2)["CS$<>9__CachedAnonymousMethodDelegate1"] = CILJS.newobj(t4,asm1.x6000012,[null, null, asm1.x6000018(T)]);
                    case 0x1A:
                    (asm1.x6000017(T))();
                    /* IL_1A: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate1 */
                    /* IL_1F: stsfld Func`2 Always */
                    (t2)["Always"] = (t2)["CS$<>9__CachedAnonymousMethodDelegate1"];
                    /* IL_24: ret  StaticInitialization.cs:16707566:0*/
                    return ;
                }
            }
        };
    };
    /* System.Boolean Func.Invoke(Object)*/
    asm.x600001a = CILJS.delegate_invoke;;
    /* System.IAsyncResult Func.BeginInvoke(Object,AsyncCallback,Object)*/
    asm.x600001b = CILJS.delegate_begin_invoke;;
    /* System.Boolean Func.EndInvoke(IAsyncResult)*/
    asm.x600001c = CILJS.delegate_end_invoke;;
    /*  Func..ctor(Object,IntPtr)*/
    asm.x6000019 = CILJS.delegate_ctor;;
    /* static System.Boolean Q.<.cctor>b__0(Object)*/
    asm.x600001f = function __cctor_b__0(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.1  */
        /* IL_01: stloc.0  */
        loc0 = (1|0);
        /* IL_04: ldloc.0  */
        /* IL_05: ret  */
        return loc0;
    };;
    /*  Q..ctor()*/
    asm.x600001d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static  Q..cctor()*/
    asm.x600001e_init = function ()
    {
        (asm1.Q().init)();
        (asm1.Func().init)();
        asm.x600001e = asm.x600001e_;
    };;
    asm.x600001e = function ()
    {
        asm.x600001e_init.apply(this,arguments);
        return asm.x600001e_.apply(this,arguments);
    };;
    asm.x600001e_ = function _cctor()
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        
        if (asm1.Q().FieldsInitialized){
            return;
        }
        asm1.Q().FieldsInitialized = true;
        t0 = asm1.Q();
        t1 = asm1.Func();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                asm1.x600001e();
                /* IL_00: ldsfld Func CS$<>9__CachedAnonymousMethodDelegate1 */
                /* IL_05: brtrue.s IL_1A */
                
                if ((t0)["CS$<>9__CachedAnonymousMethodDelegate1"]){
                    __pos__ = 0x1A;
                    continue;
                }
                /* IL_07: ldnull  */
                /* IL_09: ldftn Boolean <.cctor>b__0(System.Object) */
                /* IL_0E: newobj Void .ctor(System.Object, System.IntPtr) */
                /* IL_13: stsfld Func CS$<>9__CachedAnonymousMethodDelegate1 */
                (t0)["CS$<>9__CachedAnonymousMethodDelegate1"] = CILJS.newobj(t1,asm1.x6000019,[null, null, asm1.x600001f]);
                case 0x1A:
                asm1.x600001e();
                /* IL_1A: ldsfld Func CS$<>9__CachedAnonymousMethodDelegate1 */
                /* IL_1F: stsfld Func Always */
                (t0)["Always"] = (t0)["CS$<>9__CachedAnonymousMethodDelegate1"];
                /* IL_24: ret  StaticInitialization.cs:16707566:0*/
                return ;
            }
        }
    };
    /* static System.Void Program.Main()*/
    asm.x6000020_init = function ()
    {
        (asm1.X().init)();
        ((asm1)["Y`1"]((asm0)["System.Object"]()).init)();
        (asm1.A().init)();
        ((asm1)["Y`1"](asm1.A()).init)();
        (asm1.B().init)();
        ((asm1)["Y`1"](asm1.B()).init)();
        (asm1.Q().init)();
        asm.x6000020 = asm.x6000020_;
    };;
    asm.x6000020 = function ()
    {
        CILJS.init_base_types();
        asm.x6000020_init.apply(this,arguments);
        return asm.x6000020_.apply(this,arguments);
    };;
    asm.x6000020_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var t7;
        var t8;
        var __pos__;
        t0 = asm1.X();
        t1 = (asm0)["System.Object"]();
        t2 = (asm1)["Y`1"](t1);
        t3 = asm1.A();
        t4 = (asm1)["Y`1"](t3);
        t5 = asm1.B();
        t6 = (asm1)["Y`1"](t5);
        t7 = asm1.Q();
        t8 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        /* IL_00: nop  StaticInitialization.cs:36:5*/
        asm1.x600000f();
        /* IL_01: ldsfld A Prop */
        /* IL_06: call Void Is(System.Object) */
        asm1.x6000021(t0.Prop);
        /* IL_0B: nop  */
        (asm1.x6000011((asm0)["System.Object"]()))();
        /* IL_0C: ldsfld IKVM.Reflection.GenericFieldInstance */
        /* IL_11: call Void Is(System.Object) */
        asm1.x6000021(t2.Prop);
        /* IL_16: nop  */
        (asm1.x6000011(asm1.A()))();
        /* IL_17: ldsfld IKVM.Reflection.GenericFieldInstance */
        /* IL_1C: call Void Is(System.Object) */
        asm1.x6000021(t4.Prop);
        /* IL_21: nop  */
        (asm1.x6000011(asm1.B()))();
        /* IL_22: ldsfld IKVM.Reflection.GenericFieldInstance */
        /* IL_27: call Void Is(System.Object) */
        asm1.x6000021(t6.Prop);
        /* IL_2C: nop  */
        asm1.x600001e();
        /* IL_2D: ldsfld Func Always */
        /* IL_32: ldnull  */
        /* IL_33: callvirt Boolean Invoke(System.Object) */
        /* IL_38: box System.Boolean */
        /* IL_3D: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': t7.Always._methodPtr.apply(null,((t7.Always._target) ? ([
                        t7.Always._target,
                        null
                    ]) : ([
                        null
                    ]))),
                'type': t8,
                'vtable': t8.prototype.vtable,
                'ifacemap': t8.prototype.ifacemap
            });
        /* IL_42: nop  */
        asm1.x600001e();
        /* IL_43: ldsfld Func Always */
        /* IL_48: ldnull  */
        /* IL_49: callvirt Boolean Invoke(System.Object) */
        /* IL_4E: box System.Boolean */
        /* IL_53: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': t7.Always._methodPtr.apply(null,((t7.Always._target) ? ([
                        t7.Always._target,
                        null
                    ]) : ([
                        null
                    ]))),
                'type': t8,
                'vtable': t8.prototype.vtable,
                'ifacemap': t8.prototype.ifacemap
            });
        /* IL_58: nop  */
        /* IL_59: ret  StaticInitialization.cs:43:5*/
        return ;
    };
    /* static System.Void Program.Is(Object)*/
    asm.x6000021_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        asm.x6000021 = asm.x6000021_;
    };;
    asm.x6000021 = function (arg0)
    {
        asm.x6000021_init.apply(this,arguments);
        return asm.x6000021_.apply(this,arguments);
    };;
    asm.x6000021_ = function Is(arg0)
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        t0 = asm1.A();
        t1 = (asm0)["System.Boolean"]();
        t2 = asm1.B();
        __pos__ = 0x0;
        /* IL_00: nop  StaticInitialization.cs:46:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: callvirt String ToString() */
        /* IL_07: call Void Log(System.Object) */
        asm1.x6000001(((arg0.vtable)["asm0.x6000005"]())(CILJS.convert_box_to_pointer_as_needed(arg0)));
        /* IL_0C: nop  */
        /* IL_0D: ldarg.0  */
        /* IL_0E: isinst A */
        /* IL_13: ldnull  */
        /* IL_15: cgt.un  */
        /* IL_16: box System.Boolean */
        /* IL_1B: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((t0.IsInst(arg0) !== null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_20: nop  */
        /* IL_21: ldarg.0  */
        /* IL_22: isinst B */
        /* IL_27: ldnull  */
        /* IL_29: cgt.un  */
        /* IL_2A: box System.Boolean */
        /* IL_2F: call Void Log(System.Object) */
        asm1.x6000001({
                'boxed': ((t2.IsInst(arg0) !== null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_34: nop  */
        /* IL_35: ret  StaticInitialization.cs:50:5*/
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000022 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.TestLog = CILJS.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x600000a", "ToString"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000005","asm1.x600000a");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm1, "x600000c", "ToString"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm1.x600000c");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.X = CILJS.declare_type(
        "X",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.Prop = null;
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Y`1"] = CILJS.declare_type(
        "Y_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Y`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.Prop = null;
            (this.GenericArguments)["asm1.t2000009"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000009<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Func`2"] = CILJS.declare_type(
        "Func_2",
        ["T1", "T2"],
        function (T1, T2)
        {
            return {};
        },
        function (T1, T2)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Func`2",false,false,false,true,false,[],[
                    [asm1, "x6000013", "Invoke"],
                    [asm1, "x6000014", "BeginInvoke"],
                    [asm1, "x6000015", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t200000a");
            (this.GenericArguments)["asm1.t200000a"] = [T1, T2];
            this.GenericTypeMetadataName = ("asm1.t200000a<" + ((T1.GenericTypeMetadataName + T2.GenericTypeMetadataName) + ">"));
            CILJS.declare_virtual(this,"asm1.x6000013","asm1.x6000013");
            CILJS.declare_virtual(this,"asm1.x6000014","asm1.x6000014");
            CILJS.declare_virtual(this,"asm1.x6000015","asm1.x6000015");
            CILJS.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            CILJS.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    (asm)["P`1"] = CILJS.declare_type(
        "P_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"P`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000b");
            this.Always = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
            (this.GenericArguments)["asm1.t200000b"] = [T];
            this.GenericTypeMetadataName = ("asm1.t200000b<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Func = CILJS.declare_type(
        "Func",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Func",false,false,false,false,false,[],[
                    [asm1, "x600001a", "Invoke"],
                    [asm1, "x600001b", "BeginInvoke"],
                    [asm1, "x600001c", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t200000c");
            this.GenericTypeMetadataName = "asm1.t200000c";
            CILJS.declare_virtual(this,"asm1.x600001a","asm1.x600001a");
            CILJS.declare_virtual(this,"asm1.x600001b","asm1.x600001b");
            CILJS.declare_virtual(this,"asm1.x600001c","asm1.x600001c");
            CILJS.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            CILJS.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    asm.Q = CILJS.declare_type(
        "Q",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Q",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000d");
            this.Always = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
            this.GenericTypeMetadataName = "asm1.t200000d";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000e");
            this.GenericTypeMetadataName = "asm1.t200000e";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000020;
})(asm1 || (asm1 = {}));
