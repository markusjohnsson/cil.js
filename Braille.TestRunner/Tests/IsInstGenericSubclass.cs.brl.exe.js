var asm1; (function (asm)
{
    asm.FullName = "IsInstGenericSubclass.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        (asm1.x600000e)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000f)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000f)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000012_init = function ()
    {
        ((asm1.A)().init)();
        ((asm1.D)().init)();
        ((asm1.E)().init)();
        ((asm1.B)().init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function ()
    {
        (asm.x6000012_init.apply)(this,arguments);
        return (asm.x6000012_.apply)(this,arguments);
    };;
    asm.x6000012_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        t0 = (asm1.A)();
        t1 = (asm1.D)();
        t2 = (asm1.E)();
        t3 = (asm1.B)();
        /* IL_00: call Void TestCreate[A]()*/
        ((asm1.x6000013)((asm1.A)()))();
        /* IL_05: newobj Void .ctor()*/
        /* IL_0A: call Void Test[A](C`1[A])*/
        ((asm1.x6000015)((asm1.A)()))((BLR.newobj)(t1,asm1.x6000010,[
            null
        ]));
        /* IL_0F: newobj Void .ctor()*/
        /* IL_14: call Void Test[B](C`1[B])*/
        ((asm1.x6000015)((asm1.B)()))((BLR.newobj)(t2,asm1.x6000011,[
            null
        ]));
        /* IL_19: newobj Void .ctor()*/
        /* IL_1E: call Void Test[A](C`1[A])*/
        ((asm1.x6000015)((asm1.A)()))((BLR.newobj)(t1,asm1.x6000010,[
            null
        ]));
        /* IL_23: newobj Void .ctor()*/
        /* IL_28: call Void Test[B](C`1[B])*/
        ((asm1.x6000015)((asm1.B)()))((BLR.newobj)(t2,asm1.x6000011,[
            null
        ]));
        /* IL_2D: ret */
        return ;
    };
    /* static Void TestCreate[T]()*/
    asm.x6000013_init = function (T)
    {
        return function ()
        {
            ((asm1.D)().init)();
            (((asm1)["C`1"])(T).init)();
        };
    };;
    asm.x6000013 = function (T)
    {
        return function ()
        {
            ((asm.x6000013_init)(T).apply)(this,arguments);
            return ((asm.x6000013_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000013_ = function (T)
    {
        return function TestCreate()
        {
            var t0;
            var t1;
            var t2;
            var loc0;
            t0 = (asm1.D)();
            t1 = T;
            t2 = ((asm1)["C`1"])(T);
            /* IL_00: newobj Void .ctor()*/
            /* IL_05: castclass C`1[T]*/
            /* IL_0A: stloc.0 */
            loc0 = (BLR.cast_class)((BLR.newobj)(t0,asm1.x6000010,[
                null
            ]),t2);
            /* IL_0B: ldloc.0 */
            /* IL_0C: call Void Test[T](C`1[T])*/
            ((asm1.x6000015)(T))(loc0);
            /* IL_11: ret */
            return ;
        };
    };
    /* static Void Test(C)*/
    asm.x6000014_init = function ()
    {
        ((asm1.A)().init)();
        (((asm1)["C`1"])((asm1.A)()).init)();
        (((asm0)["System.Boolean"])().init)();
        ((asm1.B)().init)();
        (((asm1)["C`1"])((asm1.B)()).init)();
        asm.x6000014 = asm.x6000014_;
    };;
    asm.x6000014 = function (arg0)
    {
        (asm.x6000014_init.apply)(this,arguments);
        return (asm.x6000014_.apply)(this,arguments);
    };;
    asm.x6000014_ = function Test(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        t0 = (asm1.A)();
        t1 = ((asm1)["C`1"])((asm1.A)());
        t2 = ((asm0)["System.Boolean"])();
        t3 = (asm1.B)();
        t4 = ((asm1)["C`1"])((asm1.B)());
        /* IL_00: ldarg.0 */
        /* IL_01: isinst C`1[A]*/
        /* IL_06: ldnull */
        /* IL_08: cgt.un */
        /* IL_09: box System.Boolean*/
        /* IL_0E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((t1.IsInst)(arg0) !== null) ? (1) : (0)),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_13: ldarg.0 */
        /* IL_14: isinst C`1[B]*/
        /* IL_19: ldnull */
        /* IL_1B: cgt.un */
        /* IL_1C: box System.Boolean*/
        /* IL_21: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((t4.IsInst)(arg0) !== null) ? (1) : (0)),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_26: ldarg.0 */
        /* IL_27: ldnull */
        /* IL_29: ceq */
        /* IL_2A: ldc.i4.0 */
        /* IL_2C: ceq */
        /* IL_2D: box System.Boolean*/
        /* IL_32: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0)),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_37: ret */
        return ;
    };
    /* static Void Test[T](C`1[T])*/
    asm.x6000015_init = function (T)
    {
        return function ()
        {
            ((asm1.A)().init)();
            (((asm1)["C`1"])((asm1.A)()).init)();
            (((asm0)["System.Boolean"])().init)();
            ((asm1.B)().init)();
            (((asm1)["C`1"])((asm1.B)()).init)();
            asm.x6000015 = asm.x6000015_;
        };
    };;
    asm.x6000015 = function (T)
    {
        return function (arg0)
        {
            ((asm.x6000015_init)(T).apply)(this,arguments);
            return ((asm.x6000015_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000015_ = function (T)
    {
        return function Test(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            t0 = (asm1.A)();
            t1 = ((asm1)["C`1"])((asm1.A)());
            t2 = ((asm0)["System.Boolean"])();
            t3 = (asm1.B)();
            t4 = ((asm1)["C`1"])((asm1.B)());
            /* IL_00: ldarg.0 */
            /* IL_01: isinst C`1[A]*/
            /* IL_06: ldnull */
            /* IL_08: cgt.un */
            /* IL_09: box System.Boolean*/
            /* IL_0E: call Void Log(System.Object)*/
            (asm1.x6000001)({
                'boxed': (((t1.IsInst)(arg0) !== null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
            /* IL_13: ldarg.0 */
            /* IL_14: isinst C`1[B]*/
            /* IL_19: ldnull */
            /* IL_1B: cgt.un */
            /* IL_1C: box System.Boolean*/
            /* IL_21: call Void Log(System.Object)*/
            (asm1.x6000001)({
                'boxed': (((t4.IsInst)(arg0) !== null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
            /* IL_26: ldarg.0 */
            /* IL_27: ldnull */
            /* IL_29: ceq */
            /* IL_2A: ldc.i4.0 */
            /* IL_2C: ceq */
            /* IL_2D: box System.Boolean*/
            /* IL_32: call Void Log(System.Object)*/
            (asm1.x6000001)({
                'boxed': ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
            /* IL_37: ldarg.0 */
            /* IL_38: ldnull */
            /* IL_3A: ceq */
            /* IL_3B: ldc.i4.0 */
            /* IL_3D: ceq */
            /* IL_3E: box System.Boolean*/
            /* IL_43: call Void Log(System.Object)*/
            (asm1.x6000001)({
                'boxed': ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
            /* IL_48: ret */
            return ;
        };
    };
    /* Void .ctor()*/
    asm.x6000016 = function _ctor(arg0)
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
    asm.C = (function ()
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
            function C()
            {
                (C.init)();
                this.constructor = C;
            };
            c = C;
            ct = c;
            C.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(C,"C",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(C),Array,"asm1.t2000009");
                C.Interfaces = [];
                (BLR.declare_virtual)(C,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(C,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(C,"asm0.x6000009","asm0.x6000009");
            };
            C.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["C`1"] = (function ()
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
            function C_1()
            {
                (C_1.init)();
                this.constructor = C_1;
            };
            c = C_1;
            BLR.tree_set([
                T
            ],ct,c);
            C_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(C_1,"C`1",asm,false,false,false,true,false,[],[],(asm1.C)(),(BLR.is_inst_default)(C_1),Array,"asm1.t200000a");
                C_1.Interfaces = [];
                (C_1.GenericArguments)["asm1.t200000a"] = [
                    T
                ];
                (BLR.declare_virtual)(C_1,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(C_1,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(C_1,"asm0.x6000009","asm0.x6000009");
            };
            C_1.prototype = new ((asm1.C)())();
            return c;
        };
    })();
    asm.D = (function ()
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
            function D()
            {
                (D.init)();
                this.constructor = D;
            };
            c = D;
            ct = c;
            D.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(D,"D",asm,false,false,false,false,false,[],[],((asm1)["C`1"])((asm1.A)()),(BLR.is_inst_default)(D),Array,"asm1.t200000b");
                D.Interfaces = [];
                (D.GenericArguments)["asm1.t200000a"] = [
                    (asm1.A)()
                ];
                (BLR.declare_virtual)(D,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(D,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(D,"asm0.x6000009","asm0.x6000009");
            };
            D.prototype = new (((asm1)["C`1"])((asm1.A)()))();
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
                (BLR.init_type)(E,"E",asm,false,false,false,false,false,[],[],((asm1)["C`1"])((asm1.B)()),(BLR.is_inst_default)(E),Array,"asm1.t200000c");
                E.Interfaces = [];
                (E.GenericArguments)["asm1.t200000a"] = [
                    (asm1.B)()
                ];
                (BLR.declare_virtual)(E,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(E,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(E,"asm0.x6000009","asm0.x6000009");
            };
            E.prototype = new (((asm1)["C`1"])((asm1.B)()))();
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
                (BLR.init_type)(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(Program),Array,"asm1.t200000d");
                Program.Interfaces = [];
                (BLR.declare_virtual)(Program,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Program,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x6000012;
})(asm1 || (asm1 = {}));
