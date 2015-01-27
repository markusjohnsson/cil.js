var asm1; (function (asm)
{
    asm.FullName = "MethodInitializerBug.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
        /* IL_06: ret */
        return ;
    };;
    /* static Void .cctor()*/
    asm.x600000d_init = function (T)
    {
        return function ()
        {
            (((asm0)["Braille.Runtime.UnboundGenericParameter"])().init)();
            (((asm1)["A`1"])(T).init)();
        };
    };;
    asm.x600000d = function (T)
    {
        return function ()
        {
            ((asm.x600000d_init)(T).apply)(this,arguments);
            return ((asm.x600000d_)(T).apply)(this,arguments);
        };
    };;
    asm.x600000d_ = function (T)
    {
        return function _cctor()
        {
            var t0;
            var t1;
            var t2;
            
            if (((asm1)["A`1"])(T).FieldHasBeenInitialized){
                return;
            }
            ((asm1)["A`1"])(T).FieldHasBeenInitialized = true;
            t0 = T;
            t1 = ((asm0)["Braille.Runtime.UnboundGenericParameter"])();
            t2 = ((asm1)["A`1"])(T);
            /* IL_00: ldc.i4.0 */
            /* IL_01: newarr T*/
            /* IL_06: stsfld T[] Value*/
            (t2)["Value"] = (BLR.new_array)(t0,(0|0));
            /* IL_0B: ret */
            return ;
        };
    };
    /* Void .ctor()*/
    asm.x600000e_init = function ()
    {
        (((asm1)["A`1"])((((arguments)[0].constructor.GenericArguments)["asm1.t2000008"])[0]).init)();
    };;
    asm.x600000e = function (arg0)
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e_.apply)(this,arguments);
    };;
    asm.x600000e_ = function _ctor(arg0)
    {
        var t0;
        var t1;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000008"])[0];
        t1 = ((asm1)["A`1"])((((arguments)[0].constructor.GenericArguments)["asm1.t2000008"])[0]);
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        ((asm1.x600000d)((((arguments)[0].constructor.GenericArguments)["asm1.t2000008"])[0]))();
        /* IL_06: ldarg.0 */
        /* IL_07: ldsfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_0C: stfld T[] Value*/
        arg0.Value = t1.Value;
        /* IL_11: ret */
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
        ((asm1.C)().init)();
        (((asm1)["B`1"])((asm1.C)()).init)();
        ((asm1.D)().init)();
        (((asm1)["B`1"])((asm1.D)()).init)();
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
        t0 = (asm1.C)();
        t1 = ((asm1)["B`1"])((asm1.C)());
        t2 = (asm1.D)();
        t3 = ((asm1)["B`1"])((asm1.D)());
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: ldfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_0A: callvirt Type GetType()*/
        /* IL_0F: callvirt String get_FullName()*/
        /* IL_14: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x600000a)((BLR.newobj)(t1,asm1.x600000e,[
            null
        ]).Value).vtable)["asm0.x60000ac"])())((asm0.x600000a)((BLR.newobj)(t1,asm1.x600000e,[
            null
        ]).Value)));
        /* IL_19: newobj Void .ctor()*/
        /* IL_1E: ldfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_23: callvirt Type GetType()*/
        /* IL_28: callvirt String get_FullName()*/
        /* IL_2D: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x600000a)((BLR.newobj)(t3,asm1.x600000e,[
            null
        ]).Value).vtable)["asm0.x60000ac"])())((asm0.x600000a)((BLR.newobj)(t3,asm1.x600000e,[
            null
        ]).Value)));
        /* IL_32: ret */
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
                (BLR.init_type)(A_1,"A`1",asm,false,false,false,true,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(A_1),Array,"asm1.t2000007");
                A_1.Value = null;
                A_1.Interfaces = [];
                (A_1.GenericArguments)["asm1.t2000007"] = [
                    T
                ];
                (BLR.declare_virtual)(A_1,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(A_1,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(A_1,"asm0.x6000009","asm0.x6000009");
            };
            A_1.prototype = new (((asm0)["System.Object"])())();
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
                (BLR.init_type)(B_1,"B`1",asm,false,false,false,true,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(B_1),Array,"asm1.t2000008");
                B_1.Interfaces = [];
                (B_1.GenericArguments)["asm1.t2000008"] = [
                    T
                ];
                (BLR.declare_virtual)(B_1,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(B_1,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(B_1,"asm0.x6000009","asm0.x6000009");
                B_1.prototype.Value = null;
            };
            B_1.prototype = new (((asm0)["System.Object"])())();
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
                (BLR.init_type)(C,"C",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(C),Array,"asm1.t2000009");
                C.Interfaces = [];
                (BLR.declare_virtual)(C,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(C,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(C,"asm0.x6000009","asm0.x6000009");
            };
            C.prototype = new (((asm0)["System.Object"])())();
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
                (BLR.init_type)(D,"D",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(D),Array,"asm1.t200000a");
                D.Interfaces = [];
                (BLR.declare_virtual)(D,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(D,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(D,"asm0.x6000009","asm0.x6000009");
            };
            D.prototype = new (((asm0)["System.Object"])())();
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
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
