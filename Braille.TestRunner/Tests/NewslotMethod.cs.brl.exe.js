var asm1; (function (asm)
{
    asm.FullName = "NewslotMethod.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Void M()*/
    asm.x600000c = function M(arg0)
    {
        /* IL_00: ldstr a*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("a"));
        /* IL_0A: ret */
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
    /* Void M()*/
    asm.x600000e = function M(arg0)
    {
        /* IL_00: ldstr b*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("b"));
        /* IL_0A: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000d)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void M()*/
    asm.x6000010 = function M(arg0)
    {
        /* IL_00: ldstr c*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("c"));
        /* IL_0A: ret */
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
        ((asm1.Z)().init)();
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
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm1.Z)();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = (BLR.newobj)(t0,asm1.x6000011,[
            null
        ]);
        /* IL_06: ldloc.0 */
        /* IL_07: callvirt Void M()*/
        (asm1.x6000010)(loc0);
        /* IL_0C: ldloc.0 */
        /* IL_0D: stloc.1 */
        loc1 = loc0;
        /* IL_0E: ldloc.1 */
        /* IL_0F: callvirt Void M()*/
        (((loc1.vtable)["asm1.x600000c"])())(loc1);
        /* IL_14: ldloc.0 */
        /* IL_15: stloc.2 */
        loc2 = loc0;
        /* IL_16: ldloc.2 */
        /* IL_17: callvirt Void M()*/
        (((loc2.vtable)["asm1.x600000c"])())(loc2);
        /* IL_1C: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000013 = function _ctor(arg0)
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
                (BLR.init_type)(X,"X",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000c",
                        "M"
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(X),Array,"asm1.t2000007");
                X.Interfaces = [];
                (BLR.declare_virtual)(X,"asm1.x600000c","asm1.x600000c");
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
                (BLR.init_type)(Y,"Y",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000e",
                        "M"
                    ]
                ],(asm1.X)(),(BLR.is_inst_default)(Y),Array,"asm1.t2000008");
                Y.Interfaces = [];
                (BLR.declare_virtual)(Y,"asm1.x600000c","asm1.x600000e");
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
                (BLR.init_type)(Z,"Z",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x6000010",
                        "M"
                    ]
                ],(asm1.Y)(),(BLR.is_inst_default)(Z),Array,"asm1.t2000009");
                Z.Interfaces = [];
                (BLR.declare_virtual)(Z,"asm1.x600000c","asm1.x600000e");
                (BLR.declare_virtual)(Z,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Z,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Z,"asm0.x6000009","asm0.x6000009");
            };
            Z.prototype = new ((asm1.Y)())();
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
    asm.entryPoint = asm.x6000012;
})(asm1 || (asm1 = {}));
