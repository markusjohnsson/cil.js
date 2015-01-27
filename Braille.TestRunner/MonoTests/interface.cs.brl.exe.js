var asm1; (function (asm)
{
    asm.FullName = "interface.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Double Area()*/
    asm.x600000d = function Area(arg0)
    {
        /* IL_00: ldc.r8 0*/
        /* IL_09: ret */
        return (+0);
    };;
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Double Area()*/
    asm.x6000010 = function Area(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 w*/
        /* IL_06: conv.r8 */
        /* IL_07: ldarg.0 */
        /* IL_08: ldfld Int32 h*/
        /* IL_0D: conv.r8 */
        /* IL_0E: mul */
        /* IL_0F: ret */
        return arg0.ObjRectw * arg0.ObjRecth;
    };;
    /* Void .ctor(System.Int32, System.Int32, System.Int32, System.Int32)*/
    asm.x600000f = function _ctor(arg0,arg1,arg2,arg3,arg4)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000e)(arg0);
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld Int32 x*/
        arg0.ObjRectx = arg1;
        /* IL_0D: ldarg.0 */
        /* IL_0E: ldarg.2 */
        /* IL_0F: stfld Int32 y*/
        arg0.ObjRecty = arg2;
        /* IL_14: ldarg.0 */
        /* IL_15: ldarg.3 */
        /* IL_16: stfld Int32 w*/
        arg0.ObjRectw = arg3;
        /* IL_1B: ldarg.0 */
        /* IL_1C: ldarg.s 4*/
        /* IL_1E: stfld Int32 h*/
        arg0.ObjRecth = arg4;
        /* IL_23: ret */
        return ;
    };;
    /* Double Area()*/
    asm.x6000012 = function Area(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 r*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldfld Int32 r*/
        /* IL_0C: mul */
        /* IL_0D: conv.r8 */
        /* IL_0E: ldc.r8 3,14159265359*/
        /* IL_17: mul */
        /* IL_18: ret */
        return (arg0.ObjCircler * arg0.ObjCircler) * (+3.14159265359);
    };;
    /* Void .ctor(System.Int32, System.Int32, System.Int32)*/
    asm.x6000011 = function _ctor(arg0,arg1,arg2,arg3)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000e)(arg0);
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld Int32 x*/
        arg0.ObjCirclex = arg1;
        /* IL_0D: ldarg.0 */
        /* IL_0E: ldarg.2 */
        /* IL_0F: stfld Int32 y*/
        arg0.ObjCircley = arg2;
        /* IL_14: ldarg.0 */
        /* IL_15: ldarg.3 */
        /* IL_16: stfld Int32 r*/
        arg0.ObjCircler = arg3;
        /* IL_1B: ret */
        return ;
    };;
    /* static Int32 Main()*/
    asm.x6000013_init = function ()
    {
        (((asm1)["Obj.Rect"])().init)();
        (((asm1)["Obj.Circle"])().init)();
        (((asm1)["Obj.Measurable"])().init)();
        asm.x6000013 = asm.x6000013_;
    };;
    asm.x6000013 = function ()
    {
        (asm.x6000013_init.apply)(this,arguments);
        return (asm.x6000013_.apply)(this,arguments);
    };;
    asm.x6000013_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        t0 = ((asm1)["Obj.Rect"])();
        t1 = ((asm1)["Obj.Circle"])();
        t2 = ((asm1)["Obj.Measurable"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldc.i4.0 */
                /* IL_01: ldc.i4.0 */
                /* IL_02: ldc.i4.s 10*/
                /* IL_04: ldc.i4.s 20*/
                /* IL_06: newobj Void .ctor(System.Int32, System.Int32, System.Int32, System.Int32)*/
                /* IL_0B: stloc.0 */
                loc0 = (BLR.newobj)(t0,asm1.x600000f,[
                    null,
                    (0|0),
                    (0|0),
                    (10|0),
                    (20|0)
                ]);
                /* IL_0C: ldc.i4.0 */
                /* IL_0D: ldc.i4.0 */
                /* IL_0E: ldc.i4.s 20*/
                /* IL_10: newobj Void .ctor(System.Int32, System.Int32, System.Int32)*/
                /* IL_15: stloc.1 */
                loc1 = (BLR.newobj)(t1,asm1.x6000011,[
                    null,
                    (0|0),
                    (0|0),
                    (20|0)
                ]);
                /* IL_16: ldloc.0 */
                /* IL_17: callvirt Double Area()*/
                /* IL_1C: ldloc.1 */
                /* IL_1D: callvirt Double Area()*/
                /* IL_22: add */
                /* IL_23: stloc.2 */
                loc2 = (((loc0.vtable)["asm1.x600000d"])())(loc0) + (((loc1.vtable)["asm1.x600000d"])())(loc1);
                /* IL_24: ldloc.2 */
                /* IL_25: ldc.r8 0*/
                /* IL_2E: beq.s IL_32*/
                
                if (loc2 === (+0)){
                    __pos_0__ = 0x32;
                    continue;
                }
                /* IL_30: ldc.i4.1 */
                /* IL_31: ret */
                return (1|0);
                case 0x32:
                /* IL_32: ldloc.0 */
                /* IL_33: castclass Obj.Rect*/
                /* IL_38: callvirt Double Area()*/
                /* IL_3D: ldloc.1 */
                /* IL_3E: castclass Obj.Circle*/
                /* IL_43: callvirt Double Area()*/
                /* IL_48: add */
                /* IL_49: stloc.2 */
                loc2 = (asm1.x6000010)((BLR.cast_class)(loc0,t0)) + (asm1.x6000012)((BLR.cast_class)(loc1,t1));
                /* IL_4A: ldloc.2 */
                /* IL_4B: ldc.r8 1456,637061436*/
                /* IL_54: sub */
                /* IL_55: ldc.r8 1E-06*/
                /* IL_5E: ble.un.s IL_62*/
                
                if ((BLR.unsigned_value)(loc2 - (+1456.637061436)) <= (BLR.unsigned_value)((+1E-06))){
                    __pos_0__ = 0x62;
                    continue;
                }
                /* IL_60: ldc.i4.2 */
                /* IL_61: ret */
                return (2|0);
                case 0x62:
                /* IL_62: ldloc.0 */
                /* IL_63: callvirt Double Area()*/
                /* IL_68: ldloc.1 */
                /* IL_69: callvirt Double Area()*/
                /* IL_6E: add */
                /* IL_6F: stloc.2 */
                loc2 = (((loc0.ifacemap)[t2].x600000c)())(loc0) + (((loc1.ifacemap)[t2].x600000c)())(loc1);
                /* IL_70: ldloc.2 */
                /* IL_71: ldc.r8 0*/
                /* IL_7A: beq.s IL_7E*/
                
                if (loc2 === (+0)){
                    __pos_0__ = 0x7E;
                    continue;
                }
                /* IL_7C: ldc.i4.3 */
                /* IL_7D: ret */
                return (3|0);
                case 0x7E:
                /* IL_7E: ldc.i4.0 */
                /* IL_7F: ret */
                return (0|0);
            }
        }
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
    (asm)["Obj.Measurable"] = (function ()
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
            function Measurable()
            {
                (Measurable.init)();
                this.constructor = Measurable;
            };
            c = Measurable;
            ct = c;
            Measurable.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(Measurable,"Obj.Measurable",asm,false,false,true,false,false,[],[
                    [
                        asm1,
                        "x600000c",
                        "Area"
                    ]
                ],null,(BLR.is_inst_interface)(Measurable),Array,"asm1.t2000007");
                Measurable.Interfaces = [];
                (BLR.declare_virtual)(Measurable,"asm1.x600000c","asm1.x600000c");
            };
            Measurable.prototype = {};
            return c;
        };
    })();
    (asm)["Obj.Obj"] = (function ()
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
            function Obj()
            {
                (Obj.init)();
                this.constructor = Obj;
            };
            c = Obj;
            ct = c;
            Obj.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(Obj,"Obj.Obj",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000d",
                        "Area"
                    ]
                ],((asm0)["System.Object"])(),(BLR.is_inst_default)(Obj),Array,"asm1.t2000008");
                Obj.Interfaces = [
                    ((asm1)["Obj.Measurable"])()
                ];
                (BLR.declare_virtual)(Obj,"asm1.x600000d","asm1.x600000d");
                (BLR.declare_virtual)(Obj,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Obj,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Obj,"asm0.x6000009","asm0.x6000009");
                (BLR.tree_set)([
                    ((asm1)["Obj.Measurable"])()
                ],Obj.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x600000d;
                    }
                });
            };
            Obj.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["Obj.Rect"] = (function ()
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
            function Rect()
            {
                (Rect.init)();
                this.constructor = Rect;
            };
            c = Rect;
            ct = c;
            Rect.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(Rect,"Obj.Rect",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x6000010",
                        "Area"
                    ]
                ],((asm1)["Obj.Obj"])(),(BLR.is_inst_default)(Rect),Array,"asm1.t2000009");
                Rect.Interfaces = [
                    ((asm1)["Obj.Measurable"])()
                ];
                (BLR.declare_virtual)(Rect,"asm1.x600000d","asm1.x600000d");
                (BLR.declare_virtual)(Rect,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Rect,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Rect,"asm0.x6000009","asm0.x6000009");
                Rect.prototype.ObjRectx = 0;
                Rect.prototype.ObjRecty = 0;
                Rect.prototype.ObjRectw = 0;
                Rect.prototype.ObjRecth = 0;
                (BLR.tree_set)([
                    ((asm1)["Obj.Measurable"])()
                ],Rect.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x600000d;
                    }
                });
            };
            Rect.prototype = new (((asm1)["Obj.Obj"])())();
            return c;
        };
    })();
    (asm)["Obj.Circle"] = (function ()
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
            function Circle()
            {
                (Circle.init)();
                this.constructor = Circle;
            };
            c = Circle;
            ct = c;
            Circle.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(Circle,"Obj.Circle",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x6000012",
                        "Area"
                    ]
                ],((asm1)["Obj.Obj"])(),(BLR.is_inst_default)(Circle),Array,"asm1.t200000a");
                Circle.Interfaces = [
                    ((asm1)["Obj.Measurable"])()
                ];
                (BLR.declare_virtual)(Circle,"asm1.x600000d","asm1.x600000d");
                (BLR.declare_virtual)(Circle,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Circle,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Circle,"asm0.x6000009","asm0.x6000009");
                Circle.prototype.ObjCirclex = 0;
                Circle.prototype.ObjCircley = 0;
                Circle.prototype.ObjCircler = 0;
                (BLR.tree_set)([
                    ((asm1)["Obj.Measurable"])()
                ],Circle.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x600000d;
                    }
                });
            };
            Circle.prototype = new (((asm1)["Obj.Obj"])())();
            return c;
        };
    })();
    (asm)["Obj.Test"] = (function ()
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
            function Test()
            {
                (Test.init)();
                this.constructor = Test;
            };
            c = Test;
            ct = c;
            Test.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (BLR.init_type)(Test,"Obj.Test",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(Test),Array,"asm1.t200000b");
                Test.Interfaces = [];
                (BLR.declare_virtual)(Test,"asm0.x6000005","asm0.x6000005");
                (BLR.declare_virtual)(Test,"asm0.x6000008","asm0.x6000008");
                (BLR.declare_virtual)(Test,"asm0.x6000009","asm0.x6000009");
            };
            Test.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x6000013;
})(asm1 || (asm1 = {}));
