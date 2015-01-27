var asm1; (function (asm)
{
    asm.FullName = "static-ctor.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static Void .cctor()*/
    asm.x600000c_init = function ()
    {
        ((asm1.test)().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        (asm.x600000c_init.apply)(this,arguments);
        return (asm.x600000c_.apply)(this,arguments);
    };;
    asm.x600000c_ = function _cctor()
    {
        var t0;
        
        if ((asm1.X)().FieldHasBeenInitialized){
            return;
        }
        (asm1.X)().FieldHasBeenInitialized = true;
        t0 = (asm1.test)();
        /* IL_00: ldc.i4.1 */
        /* IL_01: stsfld Int32 global*/
        (t0)["global"] = (1|0);
        /* IL_06: ret */
        return ;
    };
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
        (asm1.x600000d)(arg0);
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
    /* static Int32 Main()*/
    asm.x6000010_init = function ()
    {
        ((asm1.Z)().init)();
        ((asm1.test)().init)();
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
        var __pos_0__;
        t0 = (asm1.Z)();
        t1 = (asm1.test)();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                (asm1.x600000c)();
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: pop */
                (BLR.newobj)(t0,asm1.x600000f,[
                    null
                ]);
                /* IL_06: ldsfld Int32 global*/
                /* IL_0B: ldc.i4.1 */
                /* IL_0C: beq.s IL_1A*/
                
                if (t1.global === (1|0)){
                    __pos_0__ = 0x1A;
                    continue;
                }
                /* IL_0E: ldstr Error*/
                /* IL_13: call Void Log(System.Object)*/
                (asm1.x6000001)((BLR.new_string)("Error"));
                /* IL_18: ldc.i4.1 */
                /* IL_19: ret */
                return (1|0);
                case 0x1A:
                /* IL_1A: ldstr Ok*/
                /* IL_1F: call Void Log(System.Object)*/
                (asm1.x6000001)((BLR.new_string)("Ok"));
                /* IL_24: ldc.i4.0 */
                /* IL_25: ret */
                return (0|0);
            }
        }
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
    asm.X = (function ()
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
            function X()
            {
                (X.init)();
                this.constructor = X;
            };
            c = X;
            ct = c;
            X.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(X,"X",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(X),Array,"asm1.t2000007");
                X.Interfaces = [];
                (BLR.declare_virtual)(X,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(X,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(X,"asm0.x6000009","asm0.x6000009");
            };
            X.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.Y = (function ()
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
            function Y()
            {
                (Y.init)();
                this.constructor = Y;
            };
            c = Y;
            ct = c;
            Y.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(Y,"Y",asm,false,false,false,false,false,[],[],(asm1.X)(),(BLR.is_inst_default)(Y),Array,"asm1.t2000008");
                Y.Interfaces = [];
                (BLR.declare_virtual)(Y,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Y,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Y,"asm0.x6000009","asm0.x6000009");
            };
            Y.prototype = new ((asm1.X)())();
            return c;
        };
    })();
    asm.Z = (function ()
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
            function Z()
            {
                (Z.init)();
                this.constructor = Z;
            };
            c = Z;
            ct = c;
            Z.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(Z,"Z",asm,false,false,false,false,false,[],[],(asm1.Y)(),(BLR.is_inst_default)(Z),Array,"asm1.t2000009");
                Z.Interfaces = [];
                (BLR.declare_virtual)(Z,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Z,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Z,"asm0.x6000009","asm0.x6000009");
            };
            Z.prototype = new ((asm1.Y)())();
            return c;
        };
    })();
    asm.test = (function ()
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
            function test()
            {
                (test.init)();
                this.constructor = test;
            };
            c = test;
            ct = c;
            test.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(test,"test",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(test),Array,"asm1.t200000a");
                test.global = 0;
                test.Interfaces = [];
                (BLR.declare_virtual)(test,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(test,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(test,"asm0.x6000009","asm0.x6000009");
            };
            test.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
