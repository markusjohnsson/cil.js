var asm1; (function (asm)
{
    asm.FullName = "GenericClassBasics.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    asm.x600000c = function get_Prop(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld T <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A_1<Prop>k__BackingField"];
    };;
    /* Void set_Prop(T)*/
    asm.x600000d = function set_Prop(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld T <Prop>k__BackingField*/
        (arg0)["A_1<Prop>k__BackingField"] = arg1;
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
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
        ((asm1.IntWrapper)().init)();
        (((asm1)["A`1"])((asm1.IntWrapper)()).init)();
        ((asm1.StringWrapper)().init)();
        (((asm1)["A`1"])((asm1.StringWrapper)()).init)();
        (((asm0)["System.Int32"])().init)();
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
        var t2;
        var t3;
        var t4;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var loc0;
        var loc2;
        var loc1;
        var loc3;
        t0 = (asm1.IntWrapper)();
        t1 = ((asm1)["A`1"])((asm1.IntWrapper)());
        t2 = (asm1.StringWrapper)();
        t3 = ((asm1)["A`1"])((asm1.StringWrapper)());
        t4 = ((asm0)["System.Int32"])();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = (BLR.newobj)(t1,asm1.x600000e,[
            null
        ]);
        /* IL_06: ldloc.0 */
        st_04 = loc0;
        /* IL_07: newobj Void .ctor()*/
        /* IL_0C: stloc.2 */
        loc2 = (BLR.newobj)(t0,asm1.x600000f,[
            null
        ]);
        /* IL_0D: ldloc.2 */
        st_02 = loc2;
        /* IL_0E: ldc.i4.s 123*/
        st_03 = (123|0);
        /* IL_10: stfld Int32 Value*/
        st_02.Value = st_03;
        /* IL_15: ldloc.2 */
        st_05 = loc2;
        /* IL_16: callvirt Void set_Prop(IntWrapper)*/
        (asm1.x600000d)(st_04,st_05);
        /* IL_1B: newobj Void .ctor()*/
        /* IL_20: stloc.1 */
        loc1 = (BLR.newobj)(t3,asm1.x600000e,[
            null
        ]);
        /* IL_21: ldloc.1 */
        st_0A = loc1;
        /* IL_22: newobj Void .ctor()*/
        /* IL_27: stloc.3 */
        loc3 = (BLR.newobj)(t2,asm1.x6000010,[
            null
        ]);
        /* IL_28: ldloc.3 */
        st_08 = loc3;
        /* IL_29: ldstr Hello*/
        st_09 = (BLR.new_string)("Hello");
        /* IL_2E: stfld String Value*/
        st_08.Value = st_09;
        /* IL_33: ldloc.3 */
        st_0B = loc3;
        /* IL_34: callvirt Void set_Prop(StringWrapper)*/
        (asm1.x600000d)(st_0A,st_0B);
        /* IL_39: ldloc.0 */
        /* IL_3A: callvirt IntWrapper get_Prop()*/
        /* IL_3F: ldfld Int32 Value*/
        /* IL_44: box System.Int32*/
        /* IL_49: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000c)(loc0).Value,
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        });
        /* IL_4E: ldloc.1 */
        /* IL_4F: callvirt StringWrapper get_Prop()*/
        /* IL_54: ldfld String Value*/
        /* IL_59: call Void Log(System.Object)*/
        (asm1.x6000001)((asm1.x600000c)(loc1).Value);
        /* IL_5E: ret */
        return ;
    };
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
                        "x600000c",
                        "get_Prop"
                    ],
                    [
                        asm1,
                        "x600000d",
                        "set_Prop"
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(A_1),Array,"asm1.t2000007");
                A_1.Interfaces = [];
                (A_1.GenericArguments)["asm1.t2000007"] = [
                    T
                ];
                (BLR.declare_virtual)(A_1,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(A_1,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(A_1,"asm0.x6000009","asm0.x6000009");
                (A_1.prototype)["A_1<Prop>k__BackingField"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            };
            A_1.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.IntWrapper = (function ()
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
            function IntWrapper()
            {
                (IntWrapper.init)();
                this.constructor = IntWrapper;
            };
            c = IntWrapper;
            ct = c;
            IntWrapper.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(IntWrapper,"IntWrapper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(IntWrapper),Array,"asm1.t2000008");
                IntWrapper.Interfaces = [];
                (BLR.declare_virtual)(IntWrapper,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(IntWrapper,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(IntWrapper,"asm0.x6000009","asm0.x6000009");
                IntWrapper.prototype.Value = 0;
            };
            IntWrapper.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.StringWrapper = (function ()
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
            function StringWrapper()
            {
                (StringWrapper.init)();
                this.constructor = StringWrapper;
            };
            c = StringWrapper;
            ct = c;
            StringWrapper.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(StringWrapper,"StringWrapper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(StringWrapper),Array,"asm1.t2000009");
                StringWrapper.Interfaces = [];
                (BLR.declare_virtual)(StringWrapper,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(StringWrapper,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(StringWrapper,"asm0.x6000009","asm0.x6000009");
                StringWrapper.prototype.Value = null;
            };
            StringWrapper.prototype = new (((asm0)["System.Object"])())();
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
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
