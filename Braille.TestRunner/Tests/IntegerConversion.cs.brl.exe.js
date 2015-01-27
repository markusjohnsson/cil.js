var asm1; (function (asm)
{
    asm.FullName = "IntegerConversion.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static Void Main()*/
    asm.x600000c = function Main()
    {
        /* IL_00: ldc.r8 2*/
        /* IL_09: call Void Test(System.Double)*/
        (asm1.x600000d)((+2));
        /* IL_0E: ldc.r8 3*/
        /* IL_17: call Void Test(System.Double)*/
        (asm1.x600000d)((+3));
        /* IL_1C: ldc.r8 4*/
        /* IL_25: call Void Test(System.Double)*/
        (asm1.x600000d)((+4));
        /* IL_2A: ldc.r8 8*/
        /* IL_33: call Void Test(System.Double)*/
        (asm1.x600000d)((+8));
        /* IL_38: ret */
        return ;
    };;
    /* static Void Test(System.Double)*/
    asm.x600000d_init = function ()
    {
        (((asm0)["System.Boolean"])().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0)
    {
        (asm.x600000d_init.apply)(this,arguments);
        return (asm.x600000d_.apply)(this,arguments);
    };;
    asm.x600000d_ = function Test(arg0)
    {
        var t0;
        t0 = ((asm0)["System.Boolean"])();
        /* IL_00: ldarg.0 */
        /* IL_01: call Double Sqrt(System.Double)*/
        /* IL_06: conv.i4 */
        /* IL_07: ldc.i4.1 */
        /* IL_09: ceq */
        /* IL_0A: box System.Boolean*/
        /* IL_0F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((Math.sqrt(arg0) | (0|0)) === (1|0)) ? (1) : (0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_14: ldarg.0 */
        /* IL_15: call Double Sqrt(System.Double)*/
        /* IL_1A: conv.i4 */
        /* IL_1B: ldc.i4.2 */
        /* IL_1D: ceq */
        /* IL_1E: box System.Boolean*/
        /* IL_23: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((Math.sqrt(arg0) | (0|0)) === (2|0)) ? (1) : (0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_28: ldarg.0 */
        /* IL_29: call Double Sqrt(System.Double)*/
        /* IL_2E: conv.i4 */
        /* IL_2F: ldc.i4.3 */
        /* IL_31: ceq */
        /* IL_32: box System.Boolean*/
        /* IL_37: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((Math.sqrt(arg0) | (0|0)) === (3|0)) ? (1) : (0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_3C: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
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
                (BLR.init_type)(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(Program),Array,"asm1.t2000007");
                Program.Interfaces = [];
                (BLR.declare_virtual)(Program,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Program,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
