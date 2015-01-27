var asm1; (function (asm)
{
    asm.FullName = "GenericInterface.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Void NonGeneric()*/
    asm.x600000f = function NonGeneric(arg0)
    {
        /* IL_00: ldstr A.NonGeneric*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("A.NonGeneric"));
        /* IL_0A: ret */
        return ;
    };;
    /* Void GenericArg(System.Int32)*/
    asm.x6000010 = function GenericArg(arg0,arg1)
    {
        /* IL_00: ldstr A.GenericArg*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("A.GenericArg"));
        /* IL_0A: ldarg.0 */
        /* IL_0B: ldarg.1 */
        /* IL_0C: stfld Int32 field*/
        arg0.Afield = arg1;
        /* IL_11: ret */
        return ;
    };;
    /* Int32 GenericReturn()*/
    asm.x6000011 = function GenericReturn(arg0)
    {
        /* IL_00: ldstr A.GenericReturn*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("A.GenericReturn"));
        /* IL_0A: ldarg.0 */
        /* IL_0B: ldfld Int32 field*/
        /* IL_10: ret */
        return arg0.Afield;
    };;
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void NonGeneric()*/
    asm.x6000013 = function NonGeneric(arg0)
    {
        /* IL_00: ldstr B.NonGeneric*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("B.NonGeneric"));
        /* IL_0A: ret */
        return ;
    };;
    /* Void GenericArg(T)*/
    asm.x6000014 = function GenericArg(arg0,arg1)
    {
        /* IL_00: ldstr B.NonGeneric*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("B.NonGeneric"));
        /* IL_0A: ldarg.0 */
        /* IL_0B: ldarg.1 */
        /* IL_0C: stfld T field*/
        arg0.B_1field = arg1;
        /* IL_11: ret */
        return ;
    };;
    /* T GenericReturn()*/
    asm.x6000015 = function GenericReturn(arg0)
    {
        /* IL_00: ldstr B.GenericReturn*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("B.GenericReturn"));
        /* IL_0A: ldarg.0 */
        /* IL_0B: ldfld T field*/
        /* IL_10: ret */
        return arg0.B_1field;
    };;
    /* Void .ctor()*/
    asm.x6000016 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000017_init = function ()
    {
        ((asm1.A)().init)();
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.String"])().init)();
        (((asm1)["B`1"])(((asm0)["System.String"])()).init)();
        asm.x6000017 = asm.x6000017_;
    };;
    asm.x6000017 = function ()
    {
        (asm.x6000017_init.apply)(this,arguments);
        return (asm.x6000017_.apply)(this,arguments);
    };;
    asm.x6000017_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        t0 = (asm1.A)();
        t1 = ((asm0)["System.Int32"])();
        t2 = ((asm0)["System.String"])();
        t3 = ((asm1)["B`1"])(((asm0)["System.String"])());
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: ldc.i4 12345*/
        /* IL_0A: call Void Run[System.Int32](I`1[System.Int32], System.Int32)*/
        ((asm1.x6000018)(((asm0)["System.Int32"])()))((BLR.newobj)(t0,asm1.x6000012,[
            null
        ]),(12345|0));
        /* IL_0F: newobj Void .ctor()*/
        /* IL_14: ldstr Hello*/
        /* IL_19: call Void Run[System.String](I`1[System.String], System.String)*/
        ((asm1.x6000018)(((asm0)["System.String"])()))((BLR.newobj)(t3,asm1.x6000016,[
            null
        ]),(BLR.new_string)("Hello"));
        /* IL_1E: ret */
        return ;
    };
    /* static Void Run[T](I`1[T], T)*/
    asm.x6000018_init = function (T)
    {
        return function ()
        {
            (((asm1)["I`1"])(T).init)();
        };
    };;
    asm.x6000018 = function (T)
    {
        return function (arg0,arg1)
        {
            ((asm.x6000018_init)(T).apply)(this,arguments);
            return ((asm.x6000018_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000018_ = function (T)
    {
        return function Run(arg0,arg1)
        {
            var t0;
            var t1;
            t0 = T;
            t1 = ((asm1)["I`1"])(T);
            /* IL_00: ldarg.0 */
            /* IL_01: callvirt Void NonGeneric()*/
            ((((arg0.ifacemap)[t1])[t0].x600000c)())((BLR.convert_box_to_pointer_as_needed)(arg0));
            /* IL_06: ldarg.0 */
            /* IL_07: ldarg.1 */
            /* IL_08: callvirt Void GenericArg(T)*/
            ((((arg0.ifacemap)[t1])[t0].x600000d)())((BLR.convert_box_to_pointer_as_needed)(arg0),arg1);
            /* IL_0D: ldarg.0 */
            /* IL_0E: callvirt T GenericReturn()*/
            /* IL_13: box T*/
            /* IL_18: call Void Log(System.Object)*/
            (asm1.x6000001)((BLR.box)(((((arg0.ifacemap)[t1])[t0].x600000e)())((BLR.convert_box_to_pointer_as_needed)(arg0)),t0));
            /* IL_1D: ret */
            return ;
        };
    };
    /* Void .ctor()*/
    asm.x6000019 = function _ctor(arg0)
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
                        "NonGeneric"
                    ],
                    [
                        asm1,
                        "x600000d",
                        "GenericArg"
                    ],
                    [
                        asm1,
                        "x600000e",
                        "GenericReturn"
                    ]
                ],null,(BLR.is_inst_interface)(I_1),Array,"asm1.t2000007");
                I_1.Interfaces = [];
                (I_1.GenericArguments)["asm1.t2000007"] = [
                    T
                ];
                (BLR.declare_virtual)(I_1,"asm1.x600000c","asm1.x600000c");
                (BLR.declare_virtual)(I_1,"asm1.x600000d","asm1.x600000d");
                (BLR.declare_virtual)(I_1,"asm1.x600000e","asm1.x600000e");
            };
            I_1.prototype = {};
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
                        "x600000f",
                        "NonGeneric"
                    ],
                    [
                        asm1,
                        "x6000010",
                        "GenericArg"
                    ],
                    [
                        asm1,
                        "x6000011",
                        "GenericReturn"
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(A),Array,"asm1.t2000008");
                A.Interfaces = [
                    ((asm1)["I`1"])(((asm0)["System.Int32"])())
                ];
                (BLR.declare_virtual)(A,"asm1.x600000f","asm1.x600000f");
                (BLR.declare_virtual)(A,"asm1.x6000010","asm1.x6000010");
                (BLR.declare_virtual)(A,"asm1.x6000011","asm1.x6000011");
                (BLR.declare_virtual)(A,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(A,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(A,"asm0.x6000009","asm0.x6000009");
                A.prototype.Afield = 0;
                (BLR.tree_set)([
                    ((asm1)["I`1"])(((asm0)["System.Int32"])()),
                    ((asm0)["System.Int32"])()
                ],A.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x600000f;
                    },
                    'x600000d': function ()
                    {
                        return asm1.x6000010;
                    },
                    'x600000e': function ()
                    {
                        return asm1.x6000011;
                    }
                });
            };
            A.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["B`1"] = (function ()
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
            function B_1()
            {
                (B_1.init)();
                this.constructor = B_1;
            };
            c = B_1;
            BLR.tree_set([
                T
            ],ct,c);
            B_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(B_1,"B`1",asm,false,false,false,true,false,[],[
                    [
                        asm1,
                        "x6000013",
                        "NonGeneric"
                    ],
                    [
                        asm1,
                        "x6000014",
                        "GenericArg"
                    ],
                    [
                        asm1,
                        "x6000015",
                        "GenericReturn"
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(B_1),Array,"asm1.t2000009");
                B_1.Interfaces = [
                    ((asm1)["I`1"])(T)
                ];
                (B_1.GenericArguments)["asm1.t2000009"] = [
                    T
                ];
                (BLR.declare_virtual)(B_1,"asm1.x6000013","asm1.x6000013");
                (BLR.declare_virtual)(B_1,"asm1.x6000014","asm1.x6000014");
                (BLR.declare_virtual)(B_1,"asm1.x6000015","asm1.x6000015");
                (BLR.declare_virtual)(B_1,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(B_1,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(B_1,"asm0.x6000009","asm0.x6000009");
                B_1.prototype.B_1field = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
                (BLR.tree_set)([
                    ((asm1)["I`1"])(T),
                    T
                ],B_1.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x6000013;
                    },
                    'x600000d': function ()
                    {
                        return asm1.x6000014;
                    },
                    'x600000e': function ()
                    {
                        return asm1.x6000015;
                    }
                });
            };
            B_1.prototype = new (((asm0)["System.Object"])())();
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
    asm.entryPoint = asm.x6000017;
})(asm1 || (asm1 = {}));
