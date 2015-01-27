var asm1; (function (asm)
{
    asm.FullName = "GenericDelegate.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* TResult Invoke(T)*/
    asm.x600000d = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    /* Void .ctor(System.Object, System.IntPtr)*/
    asm.x600000c = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000010_init = function ()
    {
        ((asm1.Program)().init)();
        ((asm1.IntWrapper)().init)();
        ((asm1.StringWrapper)().init)();
        (((asm1)["MFunc`2"])((asm1.IntWrapper)(),(asm1.StringWrapper)()).init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        (asm.x6000010_init.apply)(this,arguments);
        return (asm.x6000010_.apply)(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos_0__;
        t0 = (asm1.Program)();
        t1 = (asm1.IntWrapper)();
        t2 = (asm1.StringWrapper)();
        t3 = ((asm1)["MFunc`2"])((asm1.IntWrapper)(),(asm1.StringWrapper)());
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldsfld MFunc`2 CS$<>9__CachedAnonymousMethodDelegate2*/
                /* IL_05: brtrue.s IL_18*/
                
                if ((t0)["CS$<>9__CachedAnonymousMethodDelegate2"]){
                    __pos_0__ = 0x18;
                    continue;
                }
                /* IL_07: ldnull */
                /* IL_09: ldftn StringWrapper <Main>b__1(IntWrapper)*/
                /* IL_0E: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_13: stsfld MFunc`2 CS$<>9__CachedAnonymousMethodDelegate2*/
                (t0)["CS$<>9__CachedAnonymousMethodDelegate2"] = (BLR.newobj)(t3,asm1.x600000c,[
                    null,
                    null,
                    (function ()
                    {
                        (asm1.x6000013_init)();
                        return asm1.x6000013;
                    })()
                ]);
                case 0x18:
                /* IL_18: ldsfld MFunc`2 CS$<>9__CachedAnonymousMethodDelegate2*/
                /* IL_1D: call Void CallDelegate(MFunc`2[IntWrapper,StringWrapper])*/
                (asm1.x6000011)((t0)["CS$<>9__CachedAnonymousMethodDelegate2"]);
                /* IL_22: ret */
                return ;
            }
        }
    };
    /* static Void CallDelegate(MFunc`2[IntWrapper,StringWrapper])*/
    asm.x6000011_init = function ()
    {
        ((asm1.IntWrapper)().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function (arg0)
    {
        (asm.x6000011_init.apply)(this,arguments);
        return (asm.x6000011_.apply)(this,arguments);
    };;
    asm.x6000011_ = function CallDelegate(arg0)
    {
        var t0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var loc0;
        t0 = (asm1.IntWrapper)();
        /* IL_00: ldarg.0 */
        st_03 = arg0;
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: stloc.0 */
        loc0 = (BLR.newobj)(t0,asm1.x600000e,[
            null
        ]);
        /* IL_07: ldloc.0 */
        st_01 = loc0;
        /* IL_08: ldc.i4.s 123*/
        st_02 = (123|0);
        /* IL_0A: stfld Int32 Value*/
        st_01.Value = st_02;
        /* IL_0F: ldloc.0 */
        st_04 = loc0;
        /* IL_10: callvirt StringWrapper Invoke(IntWrapper)*/
        st_05 = (st_03._methodPtr.apply)(null,((st_03._target) ? ([
            st_03._target,
            st_04
        ]) : ([
            st_04
        ])));
        /* IL_15: ldfld String Value*/
        st_06 = st_05.Value;
        /* IL_1A: call Void Log(System.Object)*/
        (asm1.x6000001)(st_06);
        /* IL_1F: ret */
        return ;
    };
    /* static StringWrapper <Main>b__1(IntWrapper)*/
    asm.x6000013_init = function ()
    {
        ((asm1.StringWrapper)().init)();
        asm.x6000013 = asm.x6000013_;
    };;
    asm.x6000013 = function (arg0)
    {
        (asm.x6000013_init.apply)(this,arguments);
        return (asm.x6000013_.apply)(this,arguments);
    };;
    asm.x6000013_ = function _Main_b__1(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm1.StringWrapper)();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = (BLR.newobj)(t0,asm1.x600000f,[
            null
        ]);
        /* IL_06: ldloc.0 */
        /* IL_07: ldstr Result*/
        /* IL_0C: stfld String Value*/
        loc0.Value = (BLR.new_string)("Result");
        /* IL_11: ldloc.0 */
        /* IL_12: ret */
        return loc0;
    };
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function TestLog()
            {
                (TestLog.init)();
                this.constructor = TestLog;
            };
            c = TestLog;
            ct = c;
            TestLog.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(TestLog,"TestLog",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(TestLog),Array,"asm1.t2000002");
                TestLog.Interfaces = [];
                (BLR.declare_virtual)(TestLog,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(TestLog,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(TestLog,"asm0.x6000009","asm0.x6000009");
            };
            TestLog.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.TestHelper = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function TestHelper()
            {
                (TestHelper.init)();
                this.constructor = TestHelper;
            };
            c = TestHelper;
            ct = c;
            TestHelper.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(TestHelper,"TestHelper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(TestHelper),Array,"asm1.t2000006");
                TestHelper.Interfaces = [];
                (BLR.declare_virtual)(TestHelper,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(TestHelper,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(TestHelper,"asm0.x6000009","asm0.x6000009");
            };
            TestHelper.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["MFunc`2"] = (function ()
    {
        var ct;
        ct = {};
        return function (T,TResult)
        {
            var c;
            var initialized;
            c = (BLR.tree_get)([
                T,
                TResult
            ],ct);
            
            if (c){
                return c;
            }
            initialized = false;;
            function MFunc_2()
            {
                (MFunc_2.init)();
                this.constructor = MFunc_2;
            };
            c = MFunc_2;
            BLR.tree_set([
                T,
                TResult
            ],ct,c);
            MFunc_2.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(MFunc_2,"MFunc`2",asm,false,false,false,true,false,[],[
                    [
                        asm1,
                        "x600000d",
                        "Invoke"
                    ]
                ],((asm0)["System.MulticastDelegate"])(),(BLR.is_inst_default)(MFunc_2),Array,"asm1.t2000007");
                MFunc_2.Interfaces = [];
                (MFunc_2.GenericArguments)["asm1.t2000007"] = [
                    T,
                    TResult
                ];
                (BLR.declare_virtual)(MFunc_2,"asm1.x600000d","asm1.x600000d");
                (BLR.declare_virtual)(MFunc_2,"asm0.x6000073","asm0.x600007c");
                (BLR.declare_virtual)(MFunc_2,"asm0.x6000072","asm0.x600007d");
                (BLR.declare_virtual)(MFunc_2,"asm0.x6000008","asm0.x6000074");
                (BLR.declare_virtual)(MFunc_2,"asm0.x6000009","asm0.x6000077");
                (BLR.declare_virtual)(MFunc_2,"asm0.x6000005","asm0.x6000005");
                MFunc_2.prototype._invocationList = null;
                MFunc_2.prototype._methodPtr = null;
                MFunc_2.prototype._target = null;
            };
            MFunc_2.prototype = {};
            return c;
        };
    })();
    asm.IntWrapper = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function IntWrapper()
            {
                (IntWrapper.init)();
                this.constructor = IntWrapper;
            };
            c = IntWrapper;
            ct = c;
            IntWrapper.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(IntWrapper,"IntWrapper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(IntWrapper),Array,"asm1.t2000008");
                IntWrapper.Interfaces = [];
                (BLR.declare_virtual)(IntWrapper,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(IntWrapper,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(IntWrapper,"asm0.x6000009","asm0.x6000009");
                IntWrapper.prototype.Value = 0;
            };
            IntWrapper.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.StringWrapper = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function StringWrapper()
            {
                (StringWrapper.init)();
                this.constructor = StringWrapper;
            };
            c = StringWrapper;
            ct = c;
            StringWrapper.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(StringWrapper,"StringWrapper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(StringWrapper),Array,"asm1.t2000009");
                StringWrapper.Interfaces = [];
                (BLR.declare_virtual)(StringWrapper,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(StringWrapper,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(StringWrapper,"asm0.x6000009","asm0.x6000009");
                StringWrapper.prototype.Value = null;
            };
            StringWrapper.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.Program = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function Program()
            {
                (Program.init)();
                this.constructor = Program;
            };
            c = Program;
            ct = c;
            Program.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(Program),Array,"asm1.t200000a");
                (Program)["CS$<>9__CachedAnonymousMethodDelegate2"] = null;
                Program.Interfaces = [];
                (BLR.declare_virtual)(Program,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Program,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
