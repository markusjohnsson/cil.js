var asm1; (function (asm)
{
    asm.FullName = "InterfaceCallvirtFromGenericClass.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Int32 Get()*/
    asm.x600000d = function Get(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 x*/
        /* IL_06: ret */
        return arg0.x;
    };;
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void X(T)*/
    asm.x600000f_init = function ()
    {
        ((asm1.I2)().init)();
        (((asm0)["System.Int32"])().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0,arg1)
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function X(arg0,arg1)
    {
        var t0;
        var t1;
        t0 = (asm1.I2)();
        t1 = ((asm0)["System.Int32"])();
        /* IL_00: ldarga.s 1*/
        /* IL_08: callvirt Int32 Get()*/
        /* IL_0D: box System.Int32*/
        /* IL_12: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0].prototype.ifacemap)[t0].x600000c)())((BLR.dereference_pointer_as_needed)({
                'w': function ()
                {
                    arg1 = (arguments)[0];
                },
                'r': function ()
                {
                    return arg1;
                }
            })),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_17: ret */
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
    /* static Void Main()*/
    asm.x6000011_init = function ()
    {
        ((asm1.D)().init)();
        (((asm1)["C`1"])((asm1.D)()).init)();
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
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = (asm1.D)();
        t1 = ((asm1)["C`1"])((asm1.D)());
        /* IL_00: newobj Void .ctor()*/
        st_03 = (BLR.newobj)(t1,asm1.x6000010,[
            null
        ]);
        /* IL_05: newobj Void .ctor()*/
        /* IL_0A: stloc.0 */
        loc0 = (BLR.newobj)(t0,asm1.x600000e,[
            null
        ]);
        /* IL_0B: ldloc.0 */
        st_01 = loc0;
        /* IL_0C: ldc.i4.s 101*/
        st_02 = (101|0);
        /* IL_0E: stfld Int32 x*/
        st_01.x = st_02;
        /* IL_13: ldloc.0 */
        st_04 = loc0;
        /* IL_14: call Void X(D)*/
        (asm1.x600000f)(st_03,st_04);
        /* IL_19: ret */
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
                (BLR.init_type)(I,"I",asm,false,false,true,false,false,[],[],null,(BLR.is_inst_interface)(I),Array,"asm1.t2000007");
                I.Interfaces = [];
            };
            I.prototype = {};
            return c;
        };
    })();
    asm.I2 = (function ()
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
            function I2()
            {
                (I2.init)();
                this.constructor = I2;
            };
            c = I2;
            ct = c;
            I2.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(I2,"I2",asm,false,false,true,false,false,[],[
                    [
                        asm1,
                        "x600000c",
                        "Get"
                    ]
                ],null,(BLR.is_inst_interface)(I2),Array,"asm1.t2000008");
                I2.Interfaces = [];
                (BLR.declare_virtual)(I2,"asm1.x600000c","asm1.x600000c");
            };
            I2.prototype = {};
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
                (BLR.init_type)(D,"D",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000d",
                        "Get"
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(D),Array,"asm1.t2000009");
                D.Interfaces = [
                    (asm1.I2)()
                ];
                (BLR.declare_virtual)(D,"asm1.x600000d","asm1.x600000d");
                (BLR.declare_virtual)(D,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(D,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(D,"asm0.x6000009","asm0.x6000009");
                D.prototype.x = 0;
                (BLR.tree_set)([
                    (asm1.I2)()
                ],D.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x600000d;
                    }
                });
            };
            D.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["C`1"] = (function ()
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
            function C_1()
            {
                (C_1.init)();
                this.constructor = C_1;
            };
            c = C_1;
            BLR.tree_set([
                T
            ],ct,c);
            C_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(C_1,"C`1",asm,false,false,false,true,false,[],[
                    [
                        asm1,
                        "x600000f",
                        "X"
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(C_1),Array,"asm1.t200000a");
                C_1.Interfaces = [
                    (asm1.I)()
                ];
                (C_1.GenericArguments)["asm1.t200000a"] = [
                    T
                ];
                (BLR.declare_virtual)(C_1,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(C_1,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(C_1,"asm0.x6000009","asm0.x6000009");
                (BLR.tree_set)([
                    (asm1.I)()
                ],C_1.prototype.ifacemap,{});
            };
            C_1.prototype = new (((asm0)["System.Object"])())();
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
