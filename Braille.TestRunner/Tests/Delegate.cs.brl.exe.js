var asm1; (function (asm)
{
    asm.FullName = "Delegate.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* String Invoke(System.Int32)*/
    asm.x600000d = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    /* Void .ctor(System.Object, System.IntPtr)*/
    asm.x600000c = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* static String X(System.Int32)*/
    asm.x600000e = function X(arg0)
    {
        /* IL_00: ldstr RESULT!*/
        /* IL_05: ret */
        return (BLR.new_string)("RESULT!");
    };;
    /* static String Y(System.Int32)*/
    asm.x600000f = function Y(arg0)
    {
        /* IL_00: ldstr FOO!*/
        /* IL_05: ret */
        return (BLR.new_string)("FOO!");
    };;
    /* static Void Main()*/
    asm.x6000010_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        ((asm1.Foo)().init)();
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
        var loc0;
        t0 = ((asm0)["System.ValueType"])();
        t1 = (asm1.Foo)();
        /* IL_00: ldnull */
        /* IL_02: ldftn String X(System.Int32)*/
        /* IL_07: newobj Void .ctor(System.Object, System.IntPtr)*/
        /* IL_0C: stloc.0 */
        loc0 = (BLR.newobj)(t1,asm1.x600000c,[
            null,
            null,
            asm1.x600000e
        ]);
        /* IL_0D: ldloc.0 */
        /* IL_0E: call Void CallDelegate(Foo)*/
        (asm1.x6000011)(loc0);
        /* IL_13: ldstr f, f*/
        /* IL_18: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("f, f"));
        /* IL_1D: ldloc.0 */
        /* IL_1E: ldloc.0 */
        /* IL_1F: call Void TestEquality(Foo, Foo)*/
        (asm1.x6000012)(loc0,loc0);
        /* IL_24: ldstr f, X*/
        /* IL_29: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("f, X"));
        /* IL_2E: ldloc.0 */
        /* IL_2F: ldnull */
        /* IL_31: ldftn String X(System.Int32)*/
        /* IL_36: newobj Void .ctor(System.Object, System.IntPtr)*/
        /* IL_3B: call Void TestEquality(Foo, Foo)*/
        (asm1.x6000012)(loc0,(BLR.newobj)(t1,asm1.x600000c,[
            null,
            null,
            asm1.x600000e
        ]));
        /* IL_40: ldstr f, Y*/
        /* IL_45: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("f, Y"));
        /* IL_4A: ldloc.0 */
        /* IL_4B: ldnull */
        /* IL_4D: ldftn String Y(System.Int32)*/
        /* IL_52: newobj Void .ctor(System.Object, System.IntPtr)*/
        /* IL_57: call Void TestEquality(Foo, Foo)*/
        (asm1.x6000012)(loc0,(BLR.newobj)(t1,asm1.x600000c,[
            null,
            null,
            asm1.x600000f
        ]));
        /* IL_5C: ldstr f, null*/
        /* IL_61: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("f, null"));
        /* IL_66: ldloc.0 */
        /* IL_67: ldnull */
        /* IL_68: call Void TestEquality(Foo, Foo)*/
        (asm1.x6000012)(loc0,null);
        /* IL_6D: ldstr null, null*/
        /* IL_72: call Void Log(System.Object)*/
        (asm1.x6000001)((BLR.new_string)("null, null"));
        /* IL_77: ldnull */
        /* IL_78: ldnull */
        /* IL_79: call Void TestEquality(Foo, Foo)*/
        (asm1.x6000012)(null,null);
        /* IL_7E: ret */
        return ;
    };
    /* static Void CallDelegate(Foo)*/
    asm.x6000011 = function CallDelegate(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.s 123*/
        /* IL_03: callvirt String Invoke(System.Int32)*/
        /* IL_08: call Void Log(System.Object)*/
        (asm1.x6000001)((arg0._methodPtr.apply)(null,((arg0._target) ? ([
            arg0._target,
            (123|0)
        ]) : ([
            (123|0)
        ]))));
        /* IL_0D: ret */
        return ;
    };;
    /* static Void TestEquality(Foo, Foo)*/
    asm.x6000012_init = function ()
    {
        (((asm0)["System.Boolean"])().init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function (arg0,arg1)
    {
        (asm.x6000012_init.apply)(this,arguments);
        return (asm.x6000012_.apply)(this,arguments);
    };;
    asm.x6000012_ = function TestEquality(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.Boolean"])();
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Boolean op_Equality(System.Delegate, System.Delegate)*/
        /* IL_07: box System.Boolean*/
        /* IL_0C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000075)(arg0,arg1),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_11: ldarg.0 */
        /* IL_12: ldarg.1 */
        /* IL_13: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
        /* IL_18: box System.Boolean*/
        /* IL_1D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000076)(arg0,arg1),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_22: ret */
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
    asm.TestLog = (BLR.declare_type)("TestLog",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"TestLog",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000002");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.TestHelper = (BLR.declare_type)("TestHelper",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"TestHelper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000006");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.Foo = (BLR.declare_type)("Foo",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Foo",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x600000d",
                "Invoke"
            ]
        ],((asm0)["System.MulticastDelegate"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000007");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm1.x600000d","asm1.x600000d");
        (BLR.declare_virtual)(this,"asm0.x6000073","asm0.x600007c");
        (BLR.declare_virtual)(this,"asm0.x6000072","asm0.x600007d");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000074");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000077");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        this.prototype._invocationList = null;
        this.prototype._methodPtr = null;
        this.prototype._target = null;
    },function ()
    {
        return {};
    },[]);
    asm.Program = (BLR.declare_type)("Program",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000008");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
