var asm1; (function (asm)
{
    asm.FullName = "CustomMethodAttributes.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        (asm0.x6000047)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Type get_T()*/
    asm.x600000d = function get_T(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Type <T>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["B<T>k__BackingField"];
    };;
    /* Void set_T(System.Type)*/
    asm.x600000e = function set_T(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Type <T>k__BackingField*/
        (arg0)["B<T>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Void .ctor(System.Type)*/
    asm.x600000f = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: call Void set_T(System.Type)*/
        (asm1.x600000e)(arg0,arg1);
        /* IL_0D: ret */
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
    /* Void M()*/
    asm.x6000011 = function M(arg0)
    {
        /* IL_00: ret */
        return ;
    };;
    /* Void N()*/
    asm.x6000012 = function N(arg0)
    {
        /* IL_00: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000013 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000014_init = function ()
    {
        ((asm1.C)().init)();
        (((asm0)["System.Int32"])().init)();
        ((asm1.B)().init)();
        asm.x6000014 = asm.x6000014_;
    };;
    asm.x6000014 = function ()
    {
        (asm.x6000014_init.apply)(this,arguments);
        return (asm.x6000014_.apply)(this,arguments);
    };;
    asm.x6000014_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm1.C)();
        t1 = ((asm0)["System.Int32"])();
        t2 = (asm1.B)();
        /* IL_00: ldtoken C*/
        /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_0A: callvirt MethodInfo[] GetMethods()*/
        /* IL_0F: stloc.0 */
        loc0 = ((((asm0.x60000ad)((BLR.new_handle)(((asm0)["System.RuntimeTypeHandle"])(),t0)).vtable)["asm0.x60000bd"])())((asm0.x60000ad)((BLR.new_handle)(((asm0)["System.RuntimeTypeHandle"])(),t0)));
        /* IL_10: ldloc.0 */
        /* IL_11: ldc.i4.0 */
        /* IL_12: ldelem.ref */
        /* IL_13: ldc.i4.1 */
        /* IL_14: callvirt Object[] GetCustomAttributes(System.Boolean)*/
        /* IL_19: stloc.1 */
        loc1 = ((((loc0.jsarr)[(0|0)].vtable)["asm0.x6000039"])())((loc0.jsarr)[(0|0)],(1|0));
        /* IL_1A: ldloc.0 */
        /* IL_1B: ldc.i4.1 */
        /* IL_1C: ldelem.ref */
        /* IL_1D: ldc.i4.1 */
        /* IL_1E: callvirt Object[] GetCustomAttributes(System.Boolean)*/
        /* IL_23: stloc.2 */
        loc2 = ((((loc0.jsarr)[(1|0)].vtable)["asm0.x6000039"])())((loc0.jsarr)[(1|0)],(1|0));
        /* IL_24: ldloc.1 */
        /* IL_25: ldlen */
        /* IL_26: conv.i4 */
        /* IL_27: box System.Int32*/
        /* IL_2C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': loc1.jsarr.length | (0|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_31: ldloc.1 */
        /* IL_32: ldc.i4.0 */
        /* IL_33: ldelem.ref */
        /* IL_34: callvirt Type GetType()*/
        /* IL_39: callvirt String get_Name()*/
        /* IL_3E: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x600000a)((loc1.jsarr)[(0|0)]).vtable)["asm0.x600003d"])())((asm0.x600000a)((loc1.jsarr)[(0|0)])));
        /* IL_43: ldloc.2 */
        /* IL_44: ldlen */
        /* IL_45: conv.i4 */
        /* IL_46: box System.Int32*/
        /* IL_4B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': loc2.jsarr.length | (0|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_50: ldloc.2 */
        /* IL_51: ldc.i4.0 */
        /* IL_52: ldelem.ref */
        /* IL_53: castclass B*/
        /* IL_58: callvirt Type get_T()*/
        /* IL_5D: callvirt String get_Name()*/
        /* IL_62: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm1.x600000d)((BLR.cast_class)((loc2.jsarr)[(0|0)],t2)).vtable)["asm0.x600003d"])())((asm1.x600000d)((BLR.cast_class)((loc2.jsarr)[(0|0)],t2))));
        /* IL_67: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000015 = function _ctor(arg0)
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
                (BLR.init_type)(A,"A",asm,false,false,false,false,false,[],[],((asm0)["System.Attribute"])(),(BLR.is_inst_default)(A),Array,"asm1.t2000007");
                A.Interfaces = [];
                (BLR.declare_virtual)(A,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(A,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(A,"asm0.x6000009","asm0.x6000009");
            };
            A.prototype = new (((asm0)["System.Attribute"])())();
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
                (BLR.init_type)(B,"B",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000d",
                        "get_T"
                    ],
                    [
                        asm1,
                        "x600000e",
                        "set_T"
                    ]
                ],((asm0)["System.Attribute"])(),(BLR.is_inst_default)(B),Array,"asm1.t2000008");
                B.Interfaces = [];
                (BLR.declare_virtual)(B,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(B,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(B,"asm0.x6000009","asm0.x6000009");
                (B.prototype)["B<T>k__BackingField"] = null;
            };
            B.prototype = new (((asm0)["System.Attribute"])())();
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
                (BLR.init_type)(D,"D",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(D),Array,"asm1.t2000009");
                D.Interfaces = [];
                (BLR.declare_virtual)(D,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(D,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(D,"asm0.x6000009","asm0.x6000009");
            };
            D.prototype = new (((asm0)["System.Object"])())();
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
                (BLR.init_type)(C,"C",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x6000011",
                        "M",
                        [
                            [
                                (asm1.A)(),
                                asm1.x600000c
                            ]
                        ]
                    ],
                    [
                        asm1,
                        "x6000012",
                        "N",
                        [
                            [
                                (asm1.B)(),
                                asm1.x600000f,
                                [
                                    (asm1.D)()
                                ]
                            ]
                        ]
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(C),Array,"asm1.t200000a");
                C.Interfaces = [];
                (BLR.declare_virtual)(C,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(C,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(C,"asm0.x6000009","asm0.x6000009");
            };
            C.prototype = new (((asm0)["System.Object"])())();
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
                (BLR.init_type)(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(Program),Array,"asm1.t200000b");
                Program.Interfaces = [];
                (BLR.declare_virtual)(Program,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Program,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x6000014;
})(asm1 || (asm1 = {}));
