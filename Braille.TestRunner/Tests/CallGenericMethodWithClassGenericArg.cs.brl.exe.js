var asm1; (function (asm)
{
    asm.FullName = "CallGenericMethodWithClassGenericArg.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Void .ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Any[T](System.Object, T)*/
    asm.x600000e = function (T)
    {
        return function Any(arg0,arg1)
        {
            var t0;
            t0 = T;
            /* IL_00: ldarg.0 */
            /* IL_01: call Void Log[T](System.Object)*/
            ((asm1.x600000f)(T))(arg0);
            /* IL_06: ldarg.1 */
            /* IL_07: box T*/
            /* IL_0C: call Void Log[T](System.Object)*/
            ((asm1.x600000f)(T))((BLR.box)(arg1,t0));
            /* IL_11: ret */
            return ;
        };
    };;
    /* static Void Log[T](System.Object)*/
    asm.x600000f_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Boolean"])().init)();
            asm.x600000f = asm.x600000f_;
        };
    };;
    asm.x600000f = function (T)
    {
        return function (arg0)
        {
            ((asm.x600000f_init)(T).apply)(this,arguments);
            return ((asm.x600000f_)(T).apply)(this,arguments);
        };
    };;
    asm.x600000f_ = function (T)
    {
        return function Log(arg0)
        {
            var t0;
            var t1;
            t0 = T;
            t1 = ((asm0)["System.Boolean"])();
            /* IL_00: ldarg.0 */
            /* IL_01: isinst T*/
            /* IL_06: ldnull */
            /* IL_08: cgt.un */
            /* IL_09: box System.Boolean*/
            /* IL_0E: call Void Log(System.Object)*/
            (asm1.x6000001)({
                'boxed': (((t0.IsInst)(arg0) !== null) ? (1) : (0)),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
            /* IL_13: ret */
            return ;
        };
    };
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void M(System.Object, T)*/
    asm.x6000011 = function M(arg0,arg1,arg2)
    {
        var t0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0];
        /* IL_00: ldarg.1 */
        /* IL_01: ldarg.2 */
        /* IL_02: call Void Any[T](System.Object, T)*/
        ((asm1.x600000e)((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0]))(arg1,arg2);
        /* IL_07: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000013_init = function ()
    {
        ((asm1.B)().init)();
        (((asm1)["A`1"])((asm1.B)()).init)();
        ((asm1.A)().init)();
        asm.x6000013 = asm.x6000013_;
    };;
    asm.x6000013 = function ()
    {
        (asm.x6000013_init.apply)(this,arguments);
        return (asm.x6000013_.apply)(this,arguments);
    };;
    asm.x6000013_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc0;
        t0 = (asm1.B)();
        t1 = ((asm1)["A`1"])((asm1.B)());
        t2 = (asm1.A)();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = (BLR.newobj)(t1,asm1.x6000012,[
            null
        ]);
        /* IL_06: ldloc.0 */
        /* IL_07: newobj Void .ctor()*/
        /* IL_0C: newobj Void .ctor()*/
        /* IL_11: callvirt Void M(System.Object, B)*/
        (asm1.x6000011)(loc0,(BLR.newobj)(t2,asm1.x600000c,[
            null
        ]),(BLR.newobj)(t0,asm1.x600000d,[
            null
        ]));
        /* IL_16: ldloc.0 */
        /* IL_17: newobj Void .ctor()*/
        /* IL_1C: newobj Void .ctor()*/
        /* IL_21: callvirt Void M(System.Object, B)*/
        (asm1.x6000011)(loc0,(BLR.newobj)(t0,asm1.x600000d,[
            null
        ]),(BLR.newobj)(t0,asm1.x600000d,[
            null
        ]));
        /* IL_26: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000014 = function _ctor(arg0)
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
    asm.A = (function ()
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
            function A()
            {
                (A.init)();
                this.constructor = A;
            };
            c = A;
            ct = c;
            A.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(A,"A",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(A),Array,"asm1.t2000007");
                A.Interfaces = [];
                (BLR.declare_virtual)(A,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(A,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(A,"asm0.x6000009","asm0.x6000009");
            };
            A.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.B = (function ()
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
            function B()
            {
                (B.init)();
                this.constructor = B;
            };
            c = B;
            ct = c;
            B.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(B,"B",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(B),Array,"asm1.t2000008");
                B.Interfaces = [];
                (BLR.declare_virtual)(B,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(B,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(B,"asm0.x6000009","asm0.x6000009");
            };
            B.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.E = (function ()
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
            function E()
            {
                (E.init)();
                this.constructor = E;
            };
            c = E;
            ct = c;
            E.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(E,"E",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(E),Array,"asm1.t2000009");
                E.Interfaces = [];
                (BLR.declare_virtual)(E,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(E,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(E,"asm0.x6000009","asm0.x6000009");
            };
            E.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["A`1"] = (function ()
    {
        var ct;
        ct = {};
        return function (T)
        {
            var c;
            var initialized;
            c = (BLR.tree_get)([
                T
            ],ct);
            
            if (c){
                return c;
            }
            initialized = false;;
            function A_1()
            {
                (A_1.init)();
                this.constructor = A_1;
            };
            c = A_1;
            BLR.tree_set([
                T
            ],ct,c);
            A_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(A_1,"A`1",asm,false,false,false,true,false,[],[
                    [
                        asm1,
                        "x6000011",
                        "M"
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(A_1),Array,"asm1.t200000a");
                A_1.Interfaces = [];
                (A_1.GenericArguments)["asm1.t200000a"] = [
                    T
                ];
                (BLR.declare_virtual)(A_1,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(A_1,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(A_1,"asm0.x6000009","asm0.x6000009");
            };
            A_1.prototype = new (((asm0)["System.Object"])())();
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
                (BLR.init_type)(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(Program),Array,"asm1.t200000b");
                Program.Interfaces = [];
                (BLR.declare_virtual)(Program,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Program,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x6000013;
})(asm1 || (asm1 = {}));
