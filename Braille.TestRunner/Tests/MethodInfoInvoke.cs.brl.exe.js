var asm1; (function (asm)
{
    asm.FullName = "MethodInfoInvoke.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* String X(System.String)*/
    asm.x600000d = function X(arg0,arg1)
    {
        /* IL_00: ldarg.1 */
        /* IL_01: call Void Log(System.Object)*/
        (asm1.x6000001)(arg1);
        /* IL_06: ldarg.0 */
        /* IL_07: ldfld String Y*/
        /* IL_0C: ldarg.1 */
        /* IL_0D: call String Concat(System.String, System.String)*/
        /* IL_12: ret */
        return (asm0.x600016f)(arg0.AY,arg1);
    };;
    /* Void .ctor(System.String)*/
    asm.x600000c = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld String Y*/
        arg0.AY = arg1;
        /* IL_0D: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x600000e_init = function ()
    {
        ((asm1.A)().init)();
        (((asm0)["System.Object"])().init)();
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
        var t1;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var st_0C;
        var st_0D;
        var st_0E;
        var loc0;
        var loc1;
        t0 = (asm1.A)();
        t1 = ((asm0)["System.Object"])();
        /* IL_00: ldtoken A*/
        /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_0A: callvirt MethodInfo[] GetMethods()*/
        /* IL_0F: ldc.i4.0 */
        /* IL_10: ldelem.ref */
        /* IL_11: stloc.0 */
        loc0 = (((((asm0.x60000ad)((BLR.new_handle)(((asm0)["System.RuntimeTypeHandle"])(),t0)).vtable)["asm0.x60000bd"])())((asm0.x60000ad)((BLR.new_handle)(((asm0)["System.RuntimeTypeHandle"])(),t0))).jsarr)[(0|0)];
        /* IL_12: ldloc.0 */
        st_0B = loc0;
        /* IL_13: ldstr Hello*/
        /* IL_18: newobj Void .ctor(System.String)*/
        st_0C = (BLR.newobj)(t0,asm1.x600000c,[
            null,
            (BLR.new_string)("Hello")
        ]);
        /* IL_1D: ldc.i4.1 */
        /* IL_1E: newarr System.Object*/
        /* IL_23: stloc.1 */
        loc1 = (BLR.new_array)(t1,(1|0));
        /* IL_24: ldloc.1 */
        st_08 = loc1;
        /* IL_25: ldc.i4.0 */
        st_09 = (0|0);
        /* IL_26: ldstr World*/
        st_0A = (BLR.new_string)("World");
        /* IL_2B: stelem.ref */
        (st_08.jsarr)[st_09] = st_0A;
        /* IL_2C: ldloc.1 */
        st_0D = loc1;
        /* IL_2D: callvirt Object Invoke(System.Object, System.Object[])*/
        st_0E = (asm0.x6000045)(st_0B,st_0C,st_0D);
        /* IL_32: call Void Log(System.Object)*/
        (asm1.x6000001)(st_0E);
        /* IL_37: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
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
                        "x600000d",
                        "X"
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(A),Array,"asm1.t2000007");
                A.Interfaces = [];
                (BLR.declare_virtual)(A,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(A,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(A,"asm0.x6000009","asm0.x6000009");
                A.prototype.AY = null;
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
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
