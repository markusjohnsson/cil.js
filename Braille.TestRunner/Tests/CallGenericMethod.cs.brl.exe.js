var asm1; (function (asm)
{
    asm.FullName = "CallGenericMethod.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* T get_Prop()*/
    asm.x600000e = function get_Prop(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld T <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A_1<Prop>k__BackingField"];
    };;
    /* Void set_Prop(T)*/
    asm.x600000f = function set_Prop(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld T <Prop>k__BackingField*/
        (arg0)["A_1<Prop>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000011_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.String"])().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        (asm.x6000011_init.apply)(this,arguments);
        return (asm.x6000011_.apply)(this,arguments);
    };;
    asm.x6000011_ = function Main()
    {
        var t0;
        var t1;
        t0 = ((asm0)["System.Int32"])();
        t1 = ((asm0)["System.String"])();
        /* IL_00: ldc.i4.s 123*/
        /* IL_02: call Void Y[System.Int32](System.Int32)*/
        ((asm1.x6000012)(((asm0)["System.Int32"])()))((123|0));
        /* IL_07: ldstr Hello*/
        /* IL_0C: call Void Y[System.String](System.String)*/
        ((asm1.x6000012)(((asm0)["System.String"])()))((BLR.new_string)("Hello"));
        /* IL_11: ret */
        return ;
    };
    /* static Void Y[T](T)*/
    asm.x6000012_init = function (T)
    {
        return function ()
        {
            (((asm1)["A`1"])(T).init)();
        };
    };;
    asm.x6000012 = function (T)
    {
        return function (arg0)
        {
            ((asm.x6000012_init)(T).apply)(this,arguments);
            return ((asm.x6000012_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000012_ = function (T)
    {
        return function Y(arg0)
        {
            var t0;
            var t1;
            var loc0;
            t0 = T;
            t1 = ((asm1)["A`1"])(T);
            /* IL_00: newobj Void .ctor()*/
            /* IL_05: stloc.0 */
            loc0 = (BLR.newobj)(t1,asm1.x6000010,[
                null
            ]);
            /* IL_06: ldloc.0 */
            /* IL_07: ldarg.0 */
            /* IL_08: callvirt Void set_Prop(T)*/
            (((loc0.vtable)["asm1.x600000f"])())(loc0,arg0);
            /* IL_0D: ldloc.0 */
            /* IL_0E: call Void X[T](I`1[T])*/
            ((asm1.x6000013)(T))(loc0);
            /* IL_13: ret */
            return ;
        };
    };
    /* static Void X[T](I`1[T])*/
    asm.x6000013_init = function (T)
    {
        return function ()
        {
            (((asm1)["I`1"])(T).init)();
        };
    };;
    asm.x6000013 = function (T)
    {
        return function (arg0)
        {
            ((asm.x6000013_init)(T).apply)(this,arguments);
            return ((asm.x6000013_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000013_ = function (T)
    {
        return function X(arg0)
        {
            var t0;
            var t1;
            t0 = T;
            t1 = ((asm1)["I`1"])(T);
            /* IL_00: ldarg.0 */
            /* IL_01: callvirt T get_Prop()*/
            /* IL_06: box T*/
            /* IL_0B: call Void Log(System.Object)*/
            (asm1.x6000001)((BLR.box)(((((arg0.ifacemap)[t1])[t0].x600000c)())((BLR.convert_box_to_pointer_as_needed)(arg0)),t0));
            /* IL_10: ret */
            return ;
        };
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
    (asm)["I`1"] = (function ()
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
            function I_1()
            {
                (I_1.init)();
                this.constructor = I_1;
            };
            c = I_1;
            BLR.tree_set([
                T
            ],ct,c);
            I_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(I_1,"I`1",asm,false,false,true,true,false,[],[
                    [
                        asm1,
                        "x600000c",
                        "get_Prop"
                    ],
                    [
                        asm1,
                        "x600000d",
                        "set_Prop"
                    ]
                ],null,(BLR.is_inst_interface)(I_1),Array,"asm1.t2000007");
                I_1.Interfaces = [];
                (I_1.GenericArguments)["asm1.t2000007"] = [
                    T
                ];
                (BLR.declare_virtual)(I_1,"asm1.x600000c","asm1.x600000c");
                (BLR.declare_virtual)(I_1,"asm1.x600000d","asm1.x600000d");
            };
            I_1.prototype = {};
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
                        "x600000e",
                        "get_Prop"
                    ],
                    [
                        asm1,
                        "x600000f",
                        "set_Prop"
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(A_1),Array,"asm1.t2000008");
                A_1.Interfaces = [
                    ((asm1)["I`1"])(T)
                ];
                (A_1.GenericArguments)["asm1.t2000008"] = [
                    T
                ];
                (BLR.declare_virtual)(A_1,"asm1.x600000e","asm1.x600000e");
                (BLR.declare_virtual)(A_1,"asm1.x600000f","asm1.x600000f");
                (BLR.declare_virtual)(A_1,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(A_1,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(A_1,"asm0.x6000009","asm0.x6000009");
                (A_1.prototype)["A_1<Prop>k__BackingField"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
                (BLR.tree_set)([
                    ((asm1)["I`1"])(T),
                    T
                ],A_1.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x600000e;
                    },
                    'x600000d': function ()
                    {
                        return asm1.x600000f;
                    }
                });
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
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
