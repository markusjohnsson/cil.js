var asm1; (function (asm)
{
    asm.FullName = "StaticInitialization.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.String A.ToString()*/
    asm.x600000a = function ToString(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr A*/
        /* IL_05: ret */
        return BLR.new_string("A");
    };;
    /*  A..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.String B.ToString()*/
    asm.x600000c = function ToString(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldstr B*/
        /* IL_05: ret */
        return BLR.new_string("B");
    };;
    /*  B..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  X..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stsfld A Prop*/
        (t1)["Prop"] = BLR.newobj(t0,asm1.x600000b,[null]);
        /* IL_0A: ret */
        return ;
    };
    /*  Y`1..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static  Y`1..cctor()*/
    asm.x6000011_init = function (T)
    {
        return function ()
        {
            ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
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
            var loc1;
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
            t1 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
            t2 = (asm1)["Y`1"](t0);
            loc0 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            loc1 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
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
                    
                    if ((!(BLR.box(loc0,t0)))){
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
                    st_04 = (asm0.x6000054(T))();
                    case 0x20:
                    /* IL_20: box T*/
                    st_05 = BLR.box(st_04,t0);
                    (asm1.x6000011(T))();
                    /* IL_25: stsfld Object Prop*/
                    (t2)["Prop"] = st_05;
                    /* IL_2A: ret */
                    return ;
                }
            }
        };
    };
    /* T2 Func`2.Invoke(T1)*/
    asm.x6000013 = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    /*  Func`2..ctor(Object,IntPtr)*/
    asm.x6000012 = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* static System.Boolean P`1.<.cctor>b__0(T)*/
    asm.x6000016 = function (T)
    {
        return function __cctor_b__0(arg0)
        {
            var __pos__;
            __pos__ = 0x0;
            /* IL_00: ldc.i4.1 */
            /* IL_01: ret */
            return (1|0);
        };
    };;
    /*  P`1..ctor()*/
    asm.x6000014 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static  P`1..cctor()*/
    asm.x6000015_init = function (T)
    {
        return function ()
        {
            ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
            ((asm1)["P`1"](T).init)();
            ((asm0)["System.Boolean"]().init)();
            ((asm1)["Func`2"](T,(asm0)["System.Boolean"]()).init)();
        };
    };;
    asm.x6000015 = function (T)
    {
        return function ()
        {
            (asm.x6000015_init(T).apply)(this,arguments);
            return (asm.x6000015_(T).apply)(this,arguments);
        };
    };;
    asm.x6000015_ = function (T)
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
            t0 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
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
                    (asm1.x6000015(T))();
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
                    (t2)["CS$<>9__CachedAnonymousMethodDelegate1"] = BLR.newobj(t4,asm1.x6000012,[null, null, asm1.x6000016(T)]);
                    case 0x18:
                    (asm1.x6000015(T))();
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
    asm.x6000018 = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    /*  Func..ctor(Object,IntPtr)*/
    asm.x6000017 = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* static System.Boolean Q.<.cctor>b__0(Object)*/
    asm.x600001b = function __cctor_b__0(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
    };;
    /*  Q..ctor()*/
    asm.x6000019 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static  Q..cctor()*/
    asm.x600001a_init = function ()
    {
        (asm1.Q().init)();
        (asm1.Func().init)();
        asm.x600001a = asm.x600001a_;
    };;
    asm.x600001a = function ()
    {
        asm.x600001a_init.apply(this,arguments);
        return asm.x600001a_.apply(this,arguments);
    };;
    asm.x600001a_ = function _cctor()
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
                asm1.x600001a();
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
                (t0)["CS$<>9__CachedAnonymousMethodDelegate1"] = BLR.newobj(t1,asm1.x6000017,[null, null, asm1.x600001b]);
                case 0x18:
                asm1.x600001a();
                /* IL_18: ldsfld Func CS$<>9__CachedAnonymousMethodDelegate1*/
                /* IL_1D: stsfld Func Always*/
                (t0)["Always"] = (t0)["CS$<>9__CachedAnonymousMethodDelegate1"];
                /* IL_22: ret */
                return ;
            }
        }
    };
    /* static System.Void Program.Main()*/
    asm.x600001c_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.X().init)();
        ((asm0)["System.Object"]().init)();
        ((asm1)["Y`1"]((asm0)["System.Object"]()).init)();
        (asm1.A().init)();
        ((asm1)["Y`1"](asm1.A()).init)();
        (asm1.B().init)();
        ((asm1)["Y`1"](asm1.B()).init)();
        (asm1.Q().init)();
        ((asm0)["System.Boolean"]().init)();
        asm.x600001c = asm.x600001c_;
    };;
    asm.x600001c = function ()
    {
        asm.x600001c_init.apply(this,arguments);
        return asm.x600001c_.apply(this,arguments);
    };;
    asm.x600001c_ = function Main()
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
        var t9;
        var __pos__;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.X();
        t2 = (asm0)["System.Object"]();
        t3 = (asm1)["Y`1"](t2);
        t4 = asm1.A();
        t5 = (asm1)["Y`1"](t4);
        t6 = asm1.B();
        t7 = (asm1)["Y`1"](t6);
        t8 = asm1.Q();
        t9 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        asm1.x600000f();
        /* IL_00: ldsfld A Prop*/
        /* IL_05: call Void Is(System.Object)*/
        asm1.x600001d(t1.Prop);
        (asm1.x6000011((asm0)["System.Object"]()))();
        /* IL_0A: ldsfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_0F: call Void Is(System.Object)*/
        asm1.x600001d(t3.Prop);
        (asm1.x6000011(asm1.A()))();
        /* IL_14: ldsfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_19: call Void Is(System.Object)*/
        asm1.x600001d(t5.Prop);
        (asm1.x6000011(asm1.B()))();
        /* IL_1E: ldsfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_23: call Void Is(System.Object)*/
        asm1.x600001d(t7.Prop);
        asm1.x600001a();
        /* IL_28: ldsfld Func Always*/
        /* IL_2D: ldnull */
        /* IL_2E: callvirt Boolean Invoke(System.Object)*/
        /* IL_33: box System.Boolean*/
        /* IL_38: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': t8.Always._methodPtr.apply(null,((t8.Always._target) ? ([
                        t8.Always._target,
                        null
                    ]) : ([
                        null
                    ]))),
                'type': t9,
                'vtable': t9.prototype.vtable,
                'ifacemap': t9.prototype.ifacemap
            });
        asm1.x600001a();
        /* IL_3D: ldsfld Func Always*/
        /* IL_42: ldnull */
        /* IL_43: callvirt Boolean Invoke(System.Object)*/
        /* IL_48: box System.Boolean*/
        /* IL_4D: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': t8.Always._methodPtr.apply(null,((t8.Always._target) ? ([
                        t8.Always._target,
                        null
                    ]) : ([
                        null
                    ]))),
                'type': t9,
                'vtable': t9.prototype.vtable,
                'ifacemap': t9.prototype.ifacemap
            });
        /* IL_52: ret */
        return ;
    };
    /* static System.Void Program.Is(Object)*/
    asm.x600001d_init = function ()
    {
        (asm1.A().init)();
        ((asm0)["System.Boolean"]().init)();
        (asm1.B().init)();
        asm.x600001d = asm.x600001d_;
    };;
    asm.x600001d = function (arg0)
    {
        asm.x600001d_init.apply(this,arguments);
        return asm.x600001d_.apply(this,arguments);
    };;
    asm.x600001d_ = function Is(arg0)
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        t0 = asm1.A();
        t1 = (asm0)["System.Boolean"]();
        t2 = asm1.B();
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt String ToString()*/
        /* IL_06: call Void Log(System.Object)*/
        asm1.x6000001(((arg0.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(arg0)));
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
    asm.x600001e = function _ctor(arg0)
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
    asm.A = BLR.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x600000a", "ToString"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm1.x600000a");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.B = BLR.declare_type(
        "B",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm1, "x600000c", "ToString"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm1.x600000c");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
            this.Prop = null;
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Y`1"] = BLR.declare_type(
        "Y_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Y`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            this.Prop = null;
            (this.GenericArguments)["asm1.t2000009"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000009<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Func`2"] = BLR.declare_type(
        "Func_2",
        ["T1", "T2"],
        function (T1,T2)
        {
            return {};
        },
        function (T1,T2)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Func`2",false,false,false,true,false,[],[
                    [asm1, "x6000013", "Invoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            (this.GenericArguments)["asm1.t200000a"] = [T1, T2];
            this.GenericTypeMetadataName = ("asm1.t200000a<" + ((T1.GenericTypeMetadataName + T2.GenericTypeMetadataName) + ">"));
            BLR.declare_virtual(this,"asm1.x6000013","asm1.x6000013");
            BLR.declare_virtual(this,"asm0.x6000075","asm0.x600007e");
            BLR.declare_virtual(this,"asm0.x6000074","asm0.x600007f");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000076");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000079");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    (asm)["P`1"] = BLR.declare_type(
        "P_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"P`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000b");
            this.Always = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
            (this.GenericArguments)["asm1.t200000b"] = [T];
            this.GenericTypeMetadataName = ("asm1.t200000b<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Func = BLR.declare_type(
        "Func",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Func",false,false,false,false,false,[],[
                    [asm1, "x6000018", "Invoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm1.t200000c");
            this.GenericTypeMetadataName = "asm1.t200000c";
            BLR.declare_virtual(this,"asm1.x6000018","asm1.x6000018");
            BLR.declare_virtual(this,"asm0.x6000075","asm0.x600007e");
            BLR.declare_virtual(this,"asm0.x6000074","asm0.x600007f");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000076");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000079");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    asm.Q = BLR.declare_type(
        "Q",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Q",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000d");
            this.Always = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
            this.GenericTypeMetadataName = "asm1.t200000d";
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000e");
            this.GenericTypeMetadataName = "asm1.t200000e";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600001c;
})(asm1 || (asm1 = {}));
