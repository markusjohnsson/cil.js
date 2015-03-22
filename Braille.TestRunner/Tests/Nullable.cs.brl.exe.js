var asm1; (function (asm)
{
    asm.FullName = "Nullable.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000a_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.A().init)();
        ((asm0)["System.Nullable`1"](asm1.A()).init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
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
        var __pos__;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.A();
        t2 = (asm0)["System.Nullable`1"](t1);
        loc0 = new (asm1.A())();
        loc1 = new (asm1.A())();
        loc2 = new ((asm0)["System.Nullable`1"](asm1.A()))();
        loc3 = new ((asm0)["System.Nullable`1"](asm1.A()))();
        loc4 = new (asm1.A())();
        loc5 = new ((asm0)["System.Nullable`1"](asm1.A()))();
        loc6 = new (asm1.A())();
        __pos__ = 0x0;
        /* IL_00: ldloca.s 2*/
        /* IL_03: initobj System.Nullable`1[A]*/
        loc2 = new t2();
        /* IL_08: ldloc.2 */
        /* IL_09: call Void Print(System.Nullable`1[A])*/
        asm1.x600000c(BLR.clone_value(loc2));
        /* IL_0E: ldloca.s 3*/
        /* IL_11: initobj System.Nullable`1[A]*/
        loc3 = new t2();
        /* IL_16: ldloc.3 */
        /* IL_17: call Void Print(System.Nullable`1[A])*/
        asm1.x600000c(BLR.clone_value(loc3));
        /* IL_1C: ldloca.s 0*/
        /* IL_1F: initobj A*/
        loc0 = new t1();
        /* IL_24: ldloca.s 0*/
        /* IL_26: ldc.i4.s 33*/
        /* IL_28: stfld Int32 X*/
        loc0.X = (33|0);
        /* IL_2D: ldloc.0 */
        /* IL_2E: newobj Void .ctor(A)*/
        /* IL_33: call Void Print(System.Nullable`1[A])*/
        asm1.x600000c(BLR.clone_value(BLR.newobj(t2,asm0.x600016c,[null, BLR.clone_value(loc0)])));
        /* IL_38: ldloca.s 4*/
        /* IL_3B: initobj A*/
        loc4 = new t1();
        /* IL_40: ldloc.s 4*/
        /* IL_42: newobj Void .ctor(A)*/
        /* IL_47: call Void Print(System.Nullable`1[A])*/
        asm1.x600000c(BLR.clone_value(BLR.newobj(t2,asm0.x600016c,[null, BLR.clone_value(loc4)])));
        /* IL_4C: ldnull */
        /* IL_4D: call Void PrintObject(System.Object)*/
        asm1.x600000b(null);
        /* IL_52: ldloca.s 5*/
        /* IL_55: initobj System.Nullable`1[A]*/
        loc5 = new t2();
        /* IL_5A: ldloc.s 5*/
        /* IL_5C: box System.Nullable`1[A]*/
        /* IL_61: call Void PrintObject(System.Object)*/
        asm1.x600000b(((loc5.has_value) ? ({
                'boxed': BLR.clone_value(loc5.value),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            }) : (null)));
        /* IL_66: ldloca.s 1*/
        /* IL_69: initobj A*/
        loc1 = new t1();
        /* IL_6E: ldloca.s 1*/
        /* IL_70: ldc.i4.s 33*/
        /* IL_72: stfld Int32 X*/
        loc1.X = (33|0);
        /* IL_77: ldloc.1 */
        /* IL_78: box A*/
        /* IL_7D: call Void PrintObject(System.Object)*/
        asm1.x600000b({
                'boxed': BLR.clone_value(loc1),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_82: ldloca.s 6*/
        /* IL_85: initobj A*/
        loc6 = new t1();
        /* IL_8A: ldloc.s 6*/
        /* IL_8C: box A*/
        /* IL_91: call Void PrintObject(System.Object)*/
        asm1.x600000b({
                'boxed': BLR.clone_value(loc6),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_96: ret */
        return ;
    };
    /* static System.Void Program.PrintObject(Object)*/
    asm.x600000b = function PrintObject(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: unbox.any System.Nullable`1[A]*/
        /* IL_06: call Void Print(System.Nullable`1[A])*/
        asm1.x600000c(BLR.clone_value(BLR.unbox_any(arg0,(asm0)["System.Nullable`1"](asm1.A()))));
        /* IL_0B: ret */
        return ;
    };;
    /* static System.Void Program.Print(Nullable`1)*/
    asm.x600000c_init = function ()
    {
        ((asm0)["System.Int32"]().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function (arg0)
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Print(arg0)
    {
        var t0;
        var st_02;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        t0 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarga.s 0*/
                /* IL_02: call Boolean get_HasValue()*/
                /* IL_07: brtrue.s IL_10*/
                
                if (asm0.x600016d({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    })){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_09: ldstr false*/
                st_02 = BLR.new_string("false");
                /* IL_0E: br.s IL_15*/
                __pos__ = 0x15;
                continue;
                case 0x10:
                /* IL_10: ldstr true*/
                st_02 = BLR.new_string("true");
                case 0x15:
                /* IL_15: call Void Log(System.Object)*/
                asm1.x6000001(st_02);
                /* IL_1A: ldarga.s 0*/
                /* IL_1C: call Boolean get_HasValue()*/
                /* IL_21: brfalse.s IL_39*/
                
                if ((!(asm0.x600016d({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    })))){
                    __pos__ = 0x39;
                    continue;
                }
                /* IL_23: ldarga.s 0*/
                /* IL_25: call A get_Value()*/
                /* IL_2A: ldfld Int32 X*/
                /* IL_2F: box System.Int32*/
                /* IL_34: call Void Log(System.Object)*/
                asm1.x6000001({
                        'boxed': asm0.x600016e({
                                'w': function (v)
                                {
                                    arg0 = v;
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
    /*  Program..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = BLR.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.A = BLR.declare_type(
        "A",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"A",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.X = 0;
        });
    asm.Program = BLR.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
