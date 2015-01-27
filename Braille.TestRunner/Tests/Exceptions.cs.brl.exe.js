var asm1; (function (asm)
{
    asm.FullName = "Exceptions.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        /* IL_01: ldstr Exception A*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600009e)(arg0,(BLR.new_string)("Exception A"));
        /* IL_0B: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Exception B*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600009e)(arg0,(BLR.new_string)("Exception B"));
        /* IL_0B: ret */
        return ;
    };;
    /* Void .ctor(System.String)*/
    asm.x600000e = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        (asm0.x600009e)(arg0,arg1);
        /* IL_07: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Exception C*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm1.x600000e)(arg0,(BLR.new_string)("Exception C"));
        /* IL_0B: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000010_init = function ()
    {
        ((asm1.A)().init)();
        ((asm1.B)().init)();
        ((asm1.C)().init)();
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
        t0 = (asm1.A)();
        t1 = (asm1.B)();
        t2 = (asm1.C)();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: call Void TestTryCatch(System.Exception)*/
        (asm1.x6000011)((BLR.newobj)(t0,asm1.x600000c,[
            null
        ]));
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: call Void TestTryCatch(System.Exception)*/
        (asm1.x6000011)((BLR.newobj)(t1,asm1.x600000d,[
            null
        ]));
        /* IL_14: newobj Void .ctor()*/
        /* IL_19: call Void TestTryCatch(System.Exception)*/
        (asm1.x6000011)((BLR.newobj)(t2,asm1.x600000f,[
            null
        ]));
        /* IL_1E: ret */
        return ;
    };
    /* static Void TestTryCatch(System.Exception)*/
    asm.x6000011 = function TestTryCatch(arg0)
    {
        var __pos_0__;
        var __error_handled_1__;
        var loc0;
        var loc1;
        var loc2;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                
                try {
                    /* IL_00: ldarg.0 */
                    /* IL_01: throw */
                    throw arg0;
                }
                
                catch (__error__){
                    __error_handled_1__ = false;
                    
                    if ((!(__error_handled_1__)) && (__error__ instanceof (asm1.C)())){
                        st_01 = __error__;
                        __error_handled_1__ = true;
                        /* IL_02: stloc.0 */
                        loc0 = st_01;
                        /* IL_03: ldloc.0 */
                        /* IL_04: callvirt String get_Message()*/
                        /* IL_09: call Void Log(System.Object)*/
                        (asm1.x6000001)((((loc0.vtable)["asm0.x60000a2"])())(loc0));
                        /* IL_0E: leave.s IL_2C*/
                        __pos_1__ = -1;
                        __pos_0__ = 0x2C;
                    }
                    
                    if ((!(__error_handled_1__)) && (__error__ instanceof (asm1.B)())){
                        st_04 = __error__;
                        __error_handled_1__ = true;
                        /* IL_10: stloc.1 */
                        loc1 = st_04;
                        /* IL_11: ldloc.1 */
                        /* IL_12: callvirt String get_Message()*/
                        /* IL_17: call Void Log(System.Object)*/
                        (asm1.x6000001)((((loc1.vtable)["asm0.x60000a2"])())(loc1));
                        /* IL_1C: leave.s IL_2C*/
                        __pos_1__ = -1;
                        __pos_0__ = 0x2C;
                    }
                    
                    if ((!(__error_handled_1__)) && (__error__ instanceof (asm1.A)())){
                        st_07 = __error__;
                        __error_handled_1__ = true;
                        /* IL_1E: stloc.2 */
                        loc2 = st_07;
                        /* IL_1F: ldloc.2 */
                        /* IL_20: callvirt String get_Message()*/
                        /* IL_25: call Void Log(System.Object)*/
                        (asm1.x6000001)((((loc2.vtable)["asm0.x60000a2"])())(loc2));
                        /* IL_2A: leave.s IL_2C*/
                        __pos_1__ = -1;
                        __pos_0__ = 0x2C;
                    }
                    
                    if ((!(__error_handled_1__))){
                        throw __error__;
                    }
                }
                
                finally {
                    /* IL_2E: ldstr Finally*/
                    /* IL_33: call Void Log(System.Object)*/
                    (asm1.x6000001)((BLR.new_string)("Finally"));
                    /* IL_38: endfinally */
                    __pos_1__ = -1;
                }
                case 0x39:
                /* IL_39: ret */
                return ;
            }
        }
    };;
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
                (BLR.init_type)(A,"A",asm,false,false,false,false,false,[],[],((asm0)["System.Exception"])(),(BLR.is_inst_default)(A),Array,"asm1.t2000007");
                A.Interfaces = [];
                (BLR.declare_virtual)(A,"asm0.x60000a2","asm0.x60000a2");
                (BLR.declare_virtual)(A,"asm0.x60000a3","asm0.x60000a3");
                (BLR.declare_virtual)(A,"asm0.x6000005","asm0.x60000a4");
                (BLR.declare_virtual)(A,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(A,"asm0.x6000009","asm0.x6000009");
            };
            A.prototype = new (((asm0)["System.Exception"])())();
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
                (BLR.init_type)(B,"B",asm,false,false,false,false,false,[],[],((asm0)["System.Exception"])(),(BLR.is_inst_default)(B),Array,"asm1.t2000008");
                B.Interfaces = [];
                (BLR.declare_virtual)(B,"asm0.x60000a2","asm0.x60000a2");
                (BLR.declare_virtual)(B,"asm0.x60000a3","asm0.x60000a3");
                (BLR.declare_virtual)(B,"asm0.x6000005","asm0.x60000a4");
                (BLR.declare_virtual)(B,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(B,"asm0.x6000009","asm0.x6000009");
            };
            B.prototype = new (((asm0)["System.Exception"])())();
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
                (BLR.init_type)(C,"C",asm,false,false,false,false,false,[],[],(asm1.B)(),(BLR.is_inst_default)(C),Array,"asm1.t2000009");
                C.Interfaces = [];
                (BLR.declare_virtual)(C,"asm0.x60000a2","asm0.x60000a2");
                (BLR.declare_virtual)(C,"asm0.x60000a3","asm0.x60000a3");
                (BLR.declare_virtual)(C,"asm0.x6000005","asm0.x60000a4");
                (BLR.declare_virtual)(C,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(C,"asm0.x6000009","asm0.x6000009");
            };
            C.prototype = new ((asm1.B)())();
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
