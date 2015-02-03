var asm1; (function (asm)
{
    asm.FullName = "Nullable.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static Void Main()*/
    asm.x600000c_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        ((asm1.A)().init)();
        (((asm0)["System.Nullable`1"])((asm1.A)()).init)();
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
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        t0 = ((asm0)["System.ValueType"])();
        t1 = (asm1.A)();
        t2 = ((asm0)["System.Nullable`1"])((asm1.A)());
        loc0 = new ((asm1.A)())();
        loc1 = new ((asm1.A)())();
        loc2 = new (((asm0)["System.Nullable`1"])((asm1.A)()))();
        loc3 = new (((asm0)["System.Nullable`1"])((asm1.A)()))();
        loc4 = new ((asm1.A)())();
        loc5 = new (((asm0)["System.Nullable`1"])((asm1.A)()))();
        loc6 = new ((asm1.A)())();
        /* IL_00: ldloca.s 2*/
        /* IL_03: initobj System.Nullable`1[A]*/
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
        /* IL_08: ldloc.2 */
        /* IL_09: call Void Print(System.Nullable`1[A])*/
        (asm1.x600000e)((BLR.clone_value)(loc2));
        /* IL_0E: ldloca.s 3*/
        /* IL_11: initobj System.Nullable`1[A]*/
        ({
            'w': function ()
            {
                loc3 = (arguments)[0];
            },
            'r': function ()
            {
                return loc3;
            }
        }.w)(new t2());
        /* IL_16: ldloc.3 */
        /* IL_17: call Void Print(System.Nullable`1[A])*/
        (asm1.x600000e)((BLR.clone_value)(loc3));
        /* IL_1C: ldloca.s 0*/
        /* IL_1F: initobj A*/
        ({
            'w': function ()
            {
                loc0 = (arguments)[0];
            },
            'r': function ()
            {
                return loc0;
            }
        }.w)(new t1());
        /* IL_24: ldloca.s 0*/
        /* IL_26: ldc.i4.s 33*/
        /* IL_28: stfld Int32 X*/
        ({
            'w': function ()
            {
                loc0 = (arguments)[0];
            },
            'r': function ()
            {
                return loc0;
            }
        }.r)().X = (33|0);
        /* IL_2D: ldloc.0 */
        /* IL_2E: newobj Void .ctor(A)*/
        /* IL_33: call Void Print(System.Nullable`1[A])*/
        (asm1.x600000e)((BLR.clone_value)((BLR.newobj)(t2,asm0.x600015a,[
            null,
            (BLR.clone_value)(loc0)
        ])));
        /* IL_38: ldloca.s 4*/
        /* IL_3B: initobj A*/
        ({
            'w': function ()
            {
                loc4 = (arguments)[0];
            },
            'r': function ()
            {
                return loc4;
            }
        }.w)(new t1());
        /* IL_40: ldloc.s 4*/
        /* IL_42: newobj Void .ctor(A)*/
        /* IL_47: call Void Print(System.Nullable`1[A])*/
        (asm1.x600000e)((BLR.clone_value)((BLR.newobj)(t2,asm0.x600015a,[
            null,
            (BLR.clone_value)(loc4)
        ])));
        /* IL_4C: ldnull */
        /* IL_4D: call Void PrintObject(System.Object)*/
        (asm1.x600000d)(null);
        /* IL_52: ldloca.s 5*/
        /* IL_55: initobj System.Nullable`1[A]*/
        ({
            'w': function ()
            {
                loc5 = (arguments)[0];
            },
            'r': function ()
            {
                return loc5;
            }
        }.w)(new t2());
        /* IL_5A: ldloc.s 5*/
        /* IL_5C: box System.Nullable`1[A]*/
        /* IL_61: call Void PrintObject(System.Object)*/
        (asm1.x600000d)(((loc5.has_value) ? ({
            'boxed': (BLR.clone_value)(loc5.value),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        }) : (null)));
        /* IL_66: ldloca.s 1*/
        /* IL_69: initobj A*/
        ({
            'w': function ()
            {
                loc1 = (arguments)[0];
            },
            'r': function ()
            {
                return loc1;
            }
        }.w)(new t1());
        /* IL_6E: ldloca.s 1*/
        /* IL_70: ldc.i4.s 33*/
        /* IL_72: stfld Int32 X*/
        ({
            'w': function ()
            {
                loc1 = (arguments)[0];
            },
            'r': function ()
            {
                return loc1;
            }
        }.r)().X = (33|0);
        /* IL_77: ldloc.1 */
        /* IL_78: box A*/
        /* IL_7D: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (BLR.clone_value)(loc1),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_82: ldloca.s 6*/
        /* IL_85: initobj A*/
        ({
            'w': function ()
            {
                loc6 = (arguments)[0];
            },
            'r': function ()
            {
                return loc6;
            }
        }.w)(new t1());
        /* IL_8A: ldloc.s 6*/
        /* IL_8C: box A*/
        /* IL_91: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (BLR.clone_value)(loc6),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_96: ret */
        return ;
    };
    /* static Void PrintObject(System.Object)*/
    asm.x600000d = function PrintObject(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: unbox.any System.Nullable`1[A]*/
        /* IL_06: call Void Print(System.Nullable`1[A])*/
        (asm1.x600000e)((BLR.clone_value)((BLR.unbox_any)(arg0,((asm0)["System.Nullable`1"])((asm1.A)()))));
        /* IL_0B: ret */
        return ;
    };;
    /* static Void Print(System.Nullable`1[A])*/
    asm.x600000e_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0)
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e_.apply)(this,arguments);
    };;
    asm.x600000e_ = function Print(arg0)
    {
        var t0;
        var st_02;
        var __pos_0__;
        t0 = ((asm0)["System.Int32"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarga.s 0*/
                /* IL_02: call Boolean get_HasValue()*/
                /* IL_07: brtrue.s IL_10*/
                
                if ((asm0.x600015b)({
                    'w': function ()
                    {
                        arg0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg0;
                    }
                })){
                    __pos_0__ = 0x10;
                    continue;
                }
                /* IL_09: ldstr false*/
                st_02 = (BLR.new_string)("false");
                /* IL_0E: br.s IL_15*/
                __pos_0__ = 0x15;
                continue;
                case 0x10:
                /* IL_10: ldstr true*/
                st_02 = (BLR.new_string)("true");
                case 0x15:
                /* IL_15: call Void Log(System.Object)*/
                (asm1.x6000001)(st_02);
                /* IL_1A: ldarga.s 0*/
                /* IL_1C: call Boolean get_HasValue()*/
                /* IL_21: brfalse.s IL_39*/
                
                if ((!((asm0.x600015b)({
                    'w': function ()
                    {
                        arg0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg0;
                    }
                })))){
                    __pos_0__ = 0x39;
                    continue;
                }
                /* IL_23: ldarga.s 0*/
                /* IL_25: call A get_Value()*/
                /* IL_2A: ldfld Int32 X*/
                /* IL_2F: box System.Int32*/
                /* IL_34: call Void Log(System.Object)*/
                (asm1.x6000001)({
                    'boxed': (asm0.x600015c)({
                        'w': function ()
                        {
                            arg0 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    }).X,
                    'type': t0,
                    'vtable': t0.prototype.vtable,
                    'ifacemap': t0.prototype.ifacemap
                });
                case 0x39:
                /* IL_39: ret */
                return ;
            }
        }
    };
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
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
    asm.A = (BLR.declare_type)("A",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"A",asm,true,false,false,false,false,[],[],((asm0)["System.ValueType"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000007");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000016");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        this.prototype.X = 0;
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
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
