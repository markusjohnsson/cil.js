var asm2; (function (asm)
{
    asm.FullName = "StaticInitialization.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.String A.ToString()*/
    asm.x6000001 = function ToString(arg0)
    {
        /* IL_00: ldstr A*/
        /* IL_05: ret */
        return CILJS.new_string("A");
    };;
    /*  A..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.String B.ToString()*/
    asm.x6000003 = function ToString(arg0)
    {
        /* IL_00: ldstr B*/
        /* IL_05: ret */
        return CILJS.new_string("B");
    };;
    /*  B..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  X..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static  X..cctor()*/
    asm.x6000006_init = function ()
    {
        (asm2.A().init)();
        (asm2.X().init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function ()
    {
        asm.x6000006_init.apply(this,arguments);
        return asm.x6000006_.apply(this,arguments);
    };;
    asm.x6000006_ = function _cctor()
    {
        var t0;
        var t1;
        
        if (asm2.X().FieldsInitialized){
            return;
        }
        asm2.X().FieldsInitialized = true;
        t0 = asm2.A();
        t1 = asm2.X();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stsfld A Prop*/
        (t1)["Prop"] = CILJS.newobj(t0,asm2.x6000002,[null]);
        /* IL_0A: ret */
        return ;
    };
    /*  Y`1..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static  Y`1..cctor()*/
    asm.x6000008_init = function (T)
    {
        return function ()
        {
            ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
            ((asm2)["Y`1"](T).init)();
        };
    };;
    asm.x6000008 = function (T)
    {
        return function ()
        {
            (asm.x6000008_init(T).apply)(this,arguments);
            return (asm.x6000008_(T).apply)(this,arguments);
        };
    };;
    asm.x6000008_ = function (T)
    {
        return function _cctor()
        {
            var t0;
            var t1;
            var t2;
            var loc0;
            var loc1;
            var st_04;
            var st_05;
            var in_block_0;
            var __pos__;
            
            if ((asm2)["Y`1"](T).FieldsInitialized){
                return;
            }
            (asm2)["Y`1"](T).FieldsInitialized = true;
            t0 = T;
            t1 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
            t2 = (asm2)["Y`1"](t0);
            loc0 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            loc1 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            in_block_0 = true;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: ldloca.s 0*/
                    /* IL_03: initobj T*/
                    loc0 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
                    /* IL_08: ldloc.0 */
                    /* IL_09: box T*/
                    /* IL_0E: brfalse.s IL_1B*/
                    
                    if ((!(CILJS.box(loc0,t0)))){
                        __pos__ = 0x1B;
                        continue;
                    }
                    /* IL_10: ldloca.s 1*/
                    /* IL_13: initobj T*/
                    loc1 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
                    /* IL_18: ldloc.1 */
                    st_04 = loc1;
                    /* IL_19: br.s IL_20*/
                    __pos__ = 0x20;
                    continue;
                    case 0x1B:
                    /* IL_1B: call T CreateInstance[T]()*/
                    st_04 = (asm0.x6000003(T))();
                    case 0x20:
                    /* IL_20: box T*/
                    st_05 = CILJS.box(st_04,t0);
                    (asm2.x6000008(T))();
                    /* IL_25: stsfld Object Prop*/
                    (t2)["Prop"] = st_05;
                    /* IL_2A: ret */
                    return ;
                }
            }
        };
    };
    /* T2 Func`2.Invoke(T1)*/
    asm.x600000a = CILJS.delegate_invoke;;
    /* System.IAsyncResult Func`2.BeginInvoke(T1,AsyncCallback,Object)*/
    asm.x600000b = CILJS.delegate_begin_invoke;;
    /* T2 Func`2.EndInvoke(IAsyncResult)*/
    asm.x600000c = CILJS.delegate_end_invoke;;
    /*  Func`2..ctor(Object,IntPtr)*/
    asm.x6000009 = CILJS.delegate_ctor;;
    /* static System.Boolean P`1.<.cctor>b__0(T)*/
    asm.x600000f = function (T)
    {
        return function __cctor_b__0(arg0)
        {
            /* IL_00: ldc.i4.1 */
            /* IL_01: ret */
            return (1|0);
        };
    };;
    /*  P`1..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static  P`1..cctor()*/
    asm.x600000e_init = function (T)
    {
        return function ()
        {
            ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
            ((asm2)["P`1"](T).init)();
            ((asm2)["Func`2"](T,(asm0)["System.Boolean"]()).init)();
        };
    };;
    asm.x600000e = function (T)
    {
        return function ()
        {
            (asm.x600000e_init(T).apply)(this,arguments);
            return (asm.x600000e_(T).apply)(this,arguments);
        };
    };;
    asm.x600000e_ = function (T)
    {
        return function _cctor()
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            var in_block_0;
            var __pos__;
            
            if ((asm2)["P`1"](T).FieldsInitialized){
                return;
            }
            (asm2)["P`1"](T).FieldsInitialized = true;
            t0 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
            t1 = T;
            t2 = (asm2)["P`1"](t1);
            t3 = (asm0)["System.Boolean"]();
            t4 = (asm2)["Func`2"](t1,t3);
            in_block_0 = true;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    (asm2.x600000e(T))();
                    /* IL_00: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate1*/
                    /* IL_05: brtrue.s IL_18*/
                    
                    if ((t2)["CS$<>9__CachedAnonymousMethodDelegate1"]){
                        __pos__ = 0x18;
                        continue;
                    }
                    /* IL_07: ldnull */
                    /* IL_09: ldftn Boolean <.cctor>b__0(T)*/
                    /* IL_0E: newobj Void .ctor(System.Object, System.IntPtr)*/
                    /* IL_13: stsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate1*/
                    (t2)["CS$<>9__CachedAnonymousMethodDelegate1"] = CILJS.newobj(t4,asm2.x6000009,[null, null, asm2.x600000f(T)]);
                    case 0x18:
                    (asm2.x600000e(T))();
                    /* IL_18: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate1*/
                    /* IL_1D: stsfld Func`2 Always*/
                    (t2)["Always"] = (t2)["CS$<>9__CachedAnonymousMethodDelegate1"];
                    /* IL_22: ret */
                    return ;
                }
            }
        };
    };
    /* System.Boolean Func.Invoke(Object)*/
    asm.x6000011 = CILJS.delegate_invoke;;
    /* System.IAsyncResult Func.BeginInvoke(Object,AsyncCallback,Object)*/
    asm.x6000012 = CILJS.delegate_begin_invoke;;
    /* System.Boolean Func.EndInvoke(IAsyncResult)*/
    asm.x6000013 = CILJS.delegate_end_invoke;;
    /*  Func..ctor(Object,IntPtr)*/
    asm.x6000010 = CILJS.delegate_ctor;;
    /* static System.Boolean Q.<.cctor>b__0(Object)*/
    asm.x6000016 = function __cctor_b__0(arg0)
    {
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
    };;
    /*  Q..ctor()*/
    asm.x6000014 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static  Q..cctor()*/
    asm.x6000015_init = function ()
    {
        (asm2.Q().init)();
        (asm2.Func().init)();
        asm.x6000015 = asm.x6000015_;
    };;
    asm.x6000015 = function ()
    {
        asm.x6000015_init.apply(this,arguments);
        return asm.x6000015_.apply(this,arguments);
    };;
    asm.x6000015_ = function _cctor()
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        
        if (asm2.Q().FieldsInitialized){
            return;
        }
        asm2.Q().FieldsInitialized = true;
        t0 = asm2.Q();
        t1 = asm2.Func();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                asm2.x6000015();
                /* IL_00: ldsfld Func CS$<>9__CachedAnonymousMethodDelegate1*/
                /* IL_05: brtrue.s IL_18*/
                
                if ((t0)["CS$<>9__CachedAnonymousMethodDelegate1"]){
                    __pos__ = 0x18;
                    continue;
                }
                /* IL_07: ldnull */
                /* IL_09: ldftn Boolean <.cctor>b__0(System.Object)*/
                /* IL_0E: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_13: stsfld Func CS$<>9__CachedAnonymousMethodDelegate1*/
                (t0)["CS$<>9__CachedAnonymousMethodDelegate1"] = CILJS.newobj(t1,asm2.x6000010,[null, null, asm2.x6000016]);
                case 0x18:
                asm2.x6000015();
                /* IL_18: ldsfld Func CS$<>9__CachedAnonymousMethodDelegate1*/
                /* IL_1D: stsfld Func Always*/
                (t0)["Always"] = (t0)["CS$<>9__CachedAnonymousMethodDelegate1"];
                /* IL_22: ret */
                return ;
            }
        }
    };
    /* static System.Void Program.Main()*/
    asm.x6000017_init = function ()
    {
        (asm2.X().init)();
        ((asm2)["Y`1"]((asm0)["System.Object"]()).init)();
        (asm2.A().init)();
        ((asm2)["Y`1"](asm2.A()).init)();
        (asm2.B().init)();
        ((asm2)["Y`1"](asm2.B()).init)();
        (asm2.Q().init)();
        asm.x6000017 = asm.x6000017_;
    };;
    asm.x6000017 = function ()
    {
        asm.x6000017_init.apply(this,arguments);
        return asm.x6000017_.apply(this,arguments);
    };;
    asm.x6000017_ = function Main()
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
        CILJS.init_base_types();
        t0 = asm2.X();
        t1 = (asm0)["System.Object"]();
        t2 = (asm2)["Y`1"](t1);
        t3 = asm2.A();
        t4 = (asm2)["Y`1"](t3);
        t5 = asm2.B();
        t6 = (asm2)["Y`1"](t5);
        t7 = asm2.Q();
        t8 = (asm0)["System.Boolean"]();
        asm2.x6000006();
        /* IL_00: ldsfld A Prop*/
        /* IL_05: call Void Is(System.Object)*/
        asm2.x6000018(t0.Prop);
        (asm2.x6000008((asm0)["System.Object"]()))();
        /* IL_0A: ldsfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_0F: call Void Is(System.Object)*/
        asm2.x6000018(t2.Prop);
        (asm2.x6000008(asm2.A()))();
        /* IL_14: ldsfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_19: call Void Is(System.Object)*/
        asm2.x6000018(t4.Prop);
        (asm2.x6000008(asm2.B()))();
        /* IL_1E: ldsfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_23: call Void Is(System.Object)*/
        asm2.x6000018(t6.Prop);
        asm2.x6000015();
        /* IL_28: ldsfld Func Always*/
        /* IL_2D: ldnull */
        /* IL_2E: callvirt Boolean Invoke(System.Object)*/
        /* IL_33: box System.Boolean*/
        /* IL_38: call Void Log(System.Object)*/
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
        asm2.x6000015();
        /* IL_3D: ldsfld Func Always*/
        /* IL_42: ldnull */
        /* IL_43: callvirt Boolean Invoke(System.Object)*/
        /* IL_48: box System.Boolean*/
        /* IL_4D: call Void Log(System.Object)*/
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
        /* IL_52: ret */
        return ;
    };
    /* static System.Void Program.Is(Object)*/
    asm.x6000018_init = function ()
    {
        (asm2.A().init)();
        (asm2.B().init)();
        asm.x6000018 = asm.x6000018_;
    };;
    asm.x6000018 = function (arg0)
    {
        asm.x6000018_init.apply(this,arguments);
        return asm.x6000018_.apply(this,arguments);
    };;
    asm.x6000018_ = function Is(arg0)
    {
        var t0;
        var t1;
        var t2;
        t0 = asm2.A();
        t1 = (asm0)["System.Boolean"]();
        t2 = asm2.B();
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt String ToString()*/
        /* IL_06: call Void Log(System.Object)*/
        asm1.x6000001(((arg0.vtable)["asm0.x60000ed"]())(CILJS.convert_box_to_pointer_as_needed(arg0)));
        /* IL_0B: ldarg.0 */
        /* IL_0C: isinst A*/
        /* IL_11: ldnull */
        /* IL_13: cgt.un */
        /* IL_14: box System.Boolean*/
        /* IL_19: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((t0.IsInst(arg0) !== null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_1E: ldarg.0 */
        /* IL_1F: isinst B*/
        /* IL_24: ldnull */
        /* IL_26: cgt.un */
        /* IL_27: box System.Boolean*/
        /* IL_2C: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': ((t2.IsInst(arg0) !== null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_31: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000019 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm2, "x6000001", "ToString"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm2.x6000001");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm2, "x6000003", "ToString"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm2.x6000003");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.X = CILJS.declare_type(
        "X",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.Prop = null;
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["Y`1"] = CILJS.declare_type(
        "Y_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Y`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.Prop = null;
            (this.GenericArguments)["asm2.t2000005"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000005<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["Func`2"] = CILJS.declare_type(
        "Func_2",
        ["T1", "T2"],
        function (T1,T2)
        {
            return {};
        },
        function (T1,T2)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Func`2",false,false,false,true,false,[],[
                    [asm2, "x600000a", "Invoke"],
                    [asm2, "x600000b", "BeginInvoke"],
                    [asm2, "x600000c", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm2.t2000006");
            (this.GenericArguments)["asm2.t2000006"] = [T1, T2];
            this.GenericTypeMetadataName = ("asm2.t2000006<" + ((T1.GenericTypeMetadataName + T2.GenericTypeMetadataName) + ">"));
            CILJS.declare_virtual(this,"asm2.x600000a","asm2.x600000a");
            CILJS.declare_virtual(this,"asm2.x600000b","asm2.x600000b");
            CILJS.declare_virtual(this,"asm2.x600000c","asm2.x600000c");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    (asm)["P`1"] = CILJS.declare_type(
        "P_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"P`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000007");
            this.Always = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
            (this.GenericArguments)["asm2.t2000007"] = [T];
            this.GenericTypeMetadataName = ("asm2.t2000007<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
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
                    [asm2, "x6000011", "Invoke"],
                    [asm2, "x6000012", "BeginInvoke"],
                    [asm2, "x6000013", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm2.t2000008");
            this.GenericTypeMetadataName = "asm2.t2000008";
            CILJS.declare_virtual(this,"asm2.x6000011","asm2.x6000011");
            CILJS.declare_virtual(this,"asm2.x6000012","asm2.x6000012");
            CILJS.declare_virtual(this,"asm2.x6000013","asm2.x6000013");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    asm.Q = CILJS.declare_type(
        "Q",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Q",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000009");
            this.Always = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
            this.GenericTypeMetadataName = "asm2.t2000009";
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t200000a");
            this.GenericTypeMetadataName = "asm2.t200000a";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000017;
})(asm2 || (asm2 = {}));
