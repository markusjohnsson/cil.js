var asm1; (function (asm)
{
    asm.FullName = "CallGenericMethodOnGenericClass.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Void X[T2]()*/
    asm.x600000e = function (T2)
    {
        return function X(arg0)
        {
            var t0;
            var t1;
            t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000009"])[0];
            t1 = T2;
            /* IL_00: ldtoken T*/
            /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
            /* IL_0A: callvirt String get_Name()*/
            /* IL_0F: call Void Log(System.Object)*/
            (asm1.x6000001)(((((asm0.x60000ad)((BLR.new_handle)(((asm0)["System.RuntimeTypeHandle"])(),t0)).vtable)["asm0.x600003d"])())((asm0.x60000ad)((BLR.new_handle)(((asm0)["System.RuntimeTypeHandle"])(),t0))));
            /* IL_14: ldtoken T2*/
            /* IL_19: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
            /* IL_1E: callvirt String get_Name()*/
            /* IL_23: call Void Log(System.Object)*/
            (asm1.x6000001)(((((asm0.x60000ad)((BLR.new_handle)(((asm0)["System.RuntimeTypeHandle"])(),t1)).vtable)["asm0.x600003d"])())((asm0.x60000ad)((BLR.new_handle)(((asm0)["System.RuntimeTypeHandle"])(),t1))));
            /* IL_28: ret */
            return ;
        };
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
        ((asm1.A)().init)();
        (((asm1)["C`1"])((asm1.A)()).init)();
        ((asm1.B)().init)();
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
        var loc0;
        t0 = (asm1.A)();
        t1 = ((asm1)["C`1"])((asm1.A)());
        t2 = (asm1.B)();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = (BLR.newobj)(t1,asm1.x600000f,[
            null
        ]);
        /* IL_06: ldloc.0 */
        /* IL_07: callvirt Void X[B]()*/
        ((asm1.x600000e)((asm1.B)()))(loc0);
        /* IL_0C: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
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
                (BLR.init_type)(C_1,"C`1",asm,false,false,false,true,false,[],[
                    [
                        asm1,
                        "x600000e",
                        "X"
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(C_1),Array,"asm1.t2000009");
                C_1.Interfaces = [];
                (C_1.GenericArguments)["asm1.t2000009"] = [
                    T
                ];
                (BLR.declare_virtual)(C_1,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(C_1,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(C_1,"asm0.x6000009","asm0.x6000009");
            };
            C_1.prototype = new (((asm0)["System.Object"])())();
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
