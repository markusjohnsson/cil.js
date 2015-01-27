var asm1; (function (asm)
{
    asm.FullName = "Strings.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* String get_X()*/
    asm.x600000c = function get_X(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld String <X>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A<X>k__BackingField"];
    };;
    /* Void set_X(System.String)*/
    asm.x600000d = function set_X(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <X>k__BackingField*/
        (arg0)["A<X>k__BackingField"] = arg1;
        /* IL_07: ret */
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
    /* static Void Main()*/
    asm.x600000f_init = function ()
    {
        ((asm1.A)().init)();
        (((asm0)["System.Int32"])().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var loc0;
        t0 = (asm1.A)();
        t1 = ((asm0)["System.Int32"])();
        /* IL_00: call String GetString()*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((asm1.x6000011)());
        /* IL_0A: newobj Void .ctor()*/
        /* IL_0F: stloc.0 */
        loc0 = (BLR.newobj)(t0,asm1.x600000e,[
            null
        ]);
        /* IL_10: ldloc.0 */
        /* IL_11: ldstr 300*/
        /* IL_16: callvirt Void set_X(System.String)*/
        (asm1.x600000d)(loc0,(BLR.new_string)("300"));
        /* IL_1B: ldloc.0 */
        /* IL_1C: callvirt String get_X()*/
        /* IL_21: call Void Log(System.Object)*/
        (asm1.x6000001)((asm1.x600000c)(loc0));
        /* IL_26: ldloc.0 */
        /* IL_27: callvirt String get_X()*/
        /* IL_2C: call String IsString(System.Object)*/
        /* IL_31: call Void Log(System.Object)*/
        (asm1.x6000001)((asm1.x6000010)((asm1.x600000c)(loc0)));
        /* IL_36: ldstr 123456789*/
        /* IL_3B: callvirt Int32 get_Length()*/
        /* IL_40: box System.Int32*/
        /* IL_45: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000177)((BLR.new_string)("123456789")),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_4A: ret */
        return ;
    };
    /* static String IsString(System.Object)*/
    asm.x6000010_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function (arg0)
    {
        (asm.x6000010_init.apply)(this,arguments);
        return (asm.x6000010_.apply)(this,arguments);
    };;
    asm.x6000010_ = function IsString(arg0)
    {
        var t0;
        var __pos_0__;
        t0 = ((asm0)["System.String"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: isinst System.String*/
                /* IL_06: brtrue.s IL_0E*/
                
                if ((t0.IsInst)(arg0)){
                    __pos_0__ = 0xE;
                    continue;
                }
                /* IL_08: ldstr false*/
                /* IL_0D: ret */
                return (BLR.new_string)("false");
                case 0xE:
                /* IL_0E: ldstr true*/
                /* IL_13: ret */
                return (BLR.new_string)("true");
            }
        }
    };
    /* static String GetString()*/
    asm.x6000011 = function GetString()
    {
        /* IL_00: ldstr Hello*/
        /* IL_05: ret */
        return (BLR.new_string)("Hello");
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
                (BLR.init_type)(A,"A",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000c",
                        "get_X"
                    ],
                    [
                        asm1,
                        "x600000d",
                        "set_X"
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(A),Array,"asm1.t2000007");
                A.Interfaces = [];
                (BLR.declare_virtual)(A,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(A,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(A,"asm0.x6000009","asm0.x6000009");
                (A.prototype)["A<X>k__BackingField"] = null;
            };
            A.prototype = new (((asm0)["System.Object"])())();
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
                (BLR.init_type)(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(Program),Array,"asm1.t2000008");
                Program.Interfaces = [];
                (BLR.declare_virtual)(Program,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Program,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
