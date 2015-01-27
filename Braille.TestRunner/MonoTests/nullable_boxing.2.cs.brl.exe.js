var asm1; (function (asm)
{
    asm.FullName = "nullable_boxing.2.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static Int32 Main()*/
    asm.x600000c_init = function ()
    {
        (((asm1)["Program+Button"])().init)();
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.Nullable`1"])(((asm0)["System.Int32"])()).init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        (asm.x600000c_init.apply)(this,arguments);
        return (asm.x600000c_.apply)(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc2;
        var st_0B;
        var st_0C;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((asm1)["Program+Button"])();
        t1 = ((asm0)["System.Int32"])();
        t2 = ((asm0)["System.Nullable`1"])(((asm0)["System.Int32"])());
        loc2 = new (((asm0)["System.Nullable`1"])(((asm0)["System.Int32"])()))();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldsfld Button TheButton*/
                /* IL_05: ldc.i4.1 */
                /* IL_06: newobj Void .ctor(System.Int32)*/
                /* IL_0B: callvirt Int32 Counter(System.Nullable`1[System.Int32])*/
                /* IL_10: ldc.i4.2 */
                /* IL_11: beq.s IL_15*/
                
                if ((asm1.x600000e)(t0.TheButton,(BLR.clone_value)((BLR.newobj)(t2,asm0.x600015a,[
                    null,
                    (1|0)
                ]))) === (2|0)){
                    __pos_0__ = 0x15;
                    continue;
                }
                /* IL_13: ldc.i4.1 */
                /* IL_14: ret */
                return (1|0);
                case 0x15:
                /* IL_15: ldc.i4.1 */
                /* IL_16: newarr System.Nullable`1[System.Int32]*/
                /* IL_1B: stloc.1 */
                loc1 = (BLR.new_array)(t2,(1|0));
                /* IL_1C: ldloc.1 */
                /* IL_1D: ldc.i4.0 */
                /* IL_1E: ldelema System.Nullable`1[System.Int32]*/
                st_0B = {
                    'w': function ()
                    {
                        (loc1.jsarr)[(0|0)] = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return (loc1.jsarr)[(0|0)];
                    }
                };
                /* IL_23: ldloca.s 2*/
                /* IL_26: initobj System.Nullable`1[System.Int32]*/
                ({
                    'w': function ()
                    {
                        loc2 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc2;
                    }
                }.w)(new t2());
                /* IL_2B: ldloc.2 */
                st_0C = loc2;
                /* IL_2C: stobj System.Nullable`1[System.Int32]*/
                (st_0B.w)(st_0C);
                /* IL_31: ldloc.1 */
                /* IL_32: stloc.0 */
                loc0 = loc1;
                /* IL_33: ldloc.0 */
                /* IL_34: ldc.i4.0 */
                /* IL_35: callvirt Object GetValue(System.Int32)*/
                /* IL_3A: brfalse.s IL_3E*/
                
                if ((!((asm0.x6000129)(loc0,(0|0))))){
                    __pos_0__ = 0x3E;
                    continue;
                }
                /* IL_3C: ldc.i4.2 */
                /* IL_3D: ret */
                return (2|0);
                case 0x3E:
                /* IL_3E: ldc.i4.0 */
                /* IL_3F: ret */
                return (0|0);
            }
        }
    };
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Int32 Counter(System.Nullable`1[System.Int32])*/
    asm.x600000e = function Counter(arg0,arg1)
    {
        var __pos_0__;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarga.s 1*/
                /* IL_02: call Boolean get_HasValue()*/
                /* IL_07: brtrue.s IL_0B*/
                
                if ((asm0.x600015b)({
                    'w': function ()
                    {
                        arg1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg1;
                    }
                })){
                    __pos_0__ = 0xB;
                    continue;
                }
                /* IL_09: ldc.i4.0 */
                /* IL_0A: ret */
                return (0|0);
                case 0xB:
                /* IL_0B: ldarga.s 1*/
                /* IL_0D: call Int32 get_Value()*/
                /* IL_12: ldc.i4.1 */
                /* IL_13: add */
                /* IL_14: ret */
                return ((asm0.x600015c)({
                    'w': function ()
                    {
                        arg1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg1;
                    }
                }) + (1|0)) | (0|0);
            }
        }
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void .cctor()*/
    asm.x6000010_init = function ()
    {
        (((asm1)["Program+Button"])().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        (asm.x6000010_init.apply)(this,arguments);
        return (asm.x6000010_.apply)(this,arguments);
    };;
    asm.x6000010_ = function _cctor()
    {
        var t0;
        
        if (((asm1)["Program+Button"])().FieldHasBeenInitialized){
            return;
        }
        ((asm1)["Program+Button"])().FieldHasBeenInitialized = true;
        t0 = ((asm1)["Program+Button"])();
        (asm1.x6000010)();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stsfld Button TheButton*/
        (t0)["TheButton"] = (BLR.newobj)(t0,asm1.x600000f,[
            null
        ]);
        /* IL_0A: ret */
        return ;
    };
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
                (BLR.init_type)(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(Program),Array,"asm1.t2000007");
                Program.Interfaces = [];
                (BLR.declare_virtual)(Program,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Program,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["Program+Button"] = (function ()
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
            function Button()
            {
                (Button.init)();
                this.constructor = Button;
            };
            c = Button;
            ct = c;
            Button.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(Button,"Program+Button",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000e",
                        "Counter"
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(Button),Array,"asm1.t2000008");
                Button.TheButton = null;
                Button.Interfaces = [];
                (BLR.declare_virtual)(Button,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Button,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Button,"asm0.x6000009","asm0.x6000009");
            };
            Button.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
