var asm1; (function (asm)
{
    asm.FullName = "StructInterface.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Void Foo()*/
    asm.x600000d = function Foo(arg0)
    {
        /* IL_00: ldstr Foo*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("Foo"));
        /* IL_0A: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x600000e_init = function ()
    {
        ((asm1.S)().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e_.apply)(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var loc0;
        var loc1;
        t0 = (asm1.S)();
        loc0 = new ((asm1.S)())();
        /* IL_00: ldloca.s 0*/
        /* IL_03: initobj S*/
        ({
            'w': function ()
            {
                loc0 = (arguments)[0];
            },
            'r': function ()
            {
                return loc0;
            }
        }.w)(new t0());
        /* IL_08: ldloc.0 */
        /* IL_09: box S*/
        /* IL_0E: stloc.1 */
        loc1 = {
            'boxed': (BLR.clone_value)(loc0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        };
        /* IL_0F: ldloc.1 */
        /* IL_10: call Void Run(I)*/
        (asm1.x600000f)(loc1);
        /* IL_15: ret */
        return ;
    };
    /* static Void Run(I)*/
    asm.x600000f_init = function ()
    {
        ((asm1.I)().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0)
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function Run(arg0)
    {
        var t0;
        t0 = (asm1.I)();
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt Void Foo()*/
        (((arg0.ifacemap)[t0].x600000c)())((BLR.convert_box_to_pointer_as_needed)(arg0));
        /* IL_06: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
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
    asm.I = (function ()
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
            function I()
            {
                (I.init)();
                this.constructor = I;
            };
            c = I;
            ct = c;
            I.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(I,"I",asm,false,false,true,false,false,[],[
                    [
                        asm1,
                        "x600000c",
                        "Foo"
                    ]
                ],null,(BLR.is_inst_interface)(I),Array,"asm1.t2000007");
                I.Interfaces = [];
                (BLR.declare_virtual)(I,"asm1.x600000c","asm1.x600000c");
            };
            I.prototype = {};
            return c;
        };
    })();
    asm.S = (function ()
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
            function S()
            {
                (S.init)();
                this.constructor = S;
            };
            c = S;
            ct = c;
            S.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(S,"S",asm,true,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000d",
                        "Foo"
                    ]
                ],((asm0)["System.ValueType"])(),(BLR.is_inst_default)(S),Array,"asm1.t2000008");
                S.Interfaces = [
                    (asm1.I)()
                ];
                (BLR.declare_virtual)(S,"asm1.x600000d","asm1.x600000d");
                (BLR.declare_virtual)(S,"asm0.x6000008","asm0.x6000016");
                (BLR.declare_virtual)(S,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(S,"asm0.x6000009","asm0.x6000009");
                (BLR.tree_set)([
                    (asm1.I)()
                ],S.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x600000d;
                    }
                });
            };
            S.prototype = {};
            (((asm0)["System.ValueType"])().init)();
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
                (BLR.init_type)(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(Program),Array,"asm1.t2000009");
                Program.Interfaces = [];
                (BLR.declare_virtual)(Program,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Program,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
