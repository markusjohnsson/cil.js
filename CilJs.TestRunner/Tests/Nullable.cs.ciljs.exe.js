var asm2;(function (asm)
{
    asm.FullName = "Nullable.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001_init = function ()
    {
        (asm2.A().init)();
        ((asm0)["System.Nullable`1"](asm2.A()).init)();
        asm.x6000001 = asm.x6000001_;
    };;
    asm.x6000001 = function ()
    {
        asm.x6000001_init.apply(this,arguments);
        return asm.x6000001_.apply(this,arguments);
    };;
    asm.x6000001_ = function Main()
    {
        var t0;
        var t1;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        CILJS.init_base_types();
        t0 = asm2.A();
        t1 = (asm0)["System.Nullable`1"](t0);
        loc0 = new (asm2.A())();
        loc1 = new (asm2.A())();
        loc2 = new ((asm0)["System.Nullable`1"](asm2.A()))();
        loc3 = new ((asm0)["System.Nullable`1"](asm2.A()))();
        loc4 = new (asm2.A())();
        loc5 = new ((asm0)["System.Nullable`1"](asm2.A()))();
        loc6 = new (asm2.A())();
        /* IL_00: ldloca.s 2 */
        /* IL_03: initobj System.Nullable`1[A] */
        loc2 = new t1();
        /* IL_08: ldloc.2  */
        /* IL_09: call Void Print(System.Nullable`1[A]) */
        asm2.x6000003(CILJS.clone_value(loc2));
        /* IL_0E: ldloca.s 3 */
        /* IL_11: initobj System.Nullable`1[A] */
        loc3 = new t1();
        /* IL_16: ldloc.3  */
        /* IL_17: call Void Print(System.Nullable`1[A]) */
        asm2.x6000003(CILJS.clone_value(loc3));
        /* IL_1C: ldloca.s 0 */
        /* IL_1F: initobj A */
        loc0 = new t0();
        /* IL_24: ldloca.s 0 */
        /* IL_26: ldc.i4.s 33 */
        /* IL_28: stfld Int32 X */
        loc0.X = (33|0);
        /* IL_2D: ldloc.0  */
        /* IL_2E: newobj Void .ctor(A) */
        /* IL_33: call Void Print(System.Nullable`1[A]) */
        asm2.x6000003(CILJS.clone_value(CILJS.newobj(t1,asm0.x60000db,[null, CILJS.clone_value(loc0)])));
        /* IL_38: ldloca.s 4 */
        /* IL_3B: initobj A */
        loc4 = new t0();
        /* IL_40: ldloc.s 4 */
        /* IL_42: newobj Void .ctor(A) */
        /* IL_47: call Void Print(System.Nullable`1[A]) */
        asm2.x6000003(CILJS.clone_value(CILJS.newobj(t1,asm0.x60000db,[null, CILJS.clone_value(loc4)])));
        /* IL_4C: ldnull  */
        /* IL_4D: call Void PrintObject(System.Object) */
        asm2.x6000002(null);
        /* IL_52: ldloca.s 5 */
        /* IL_55: initobj System.Nullable`1[A] */
        loc5 = new t1();
        /* IL_5A: ldloc.s 5 */
        /* IL_5C: box System.Nullable`1[A] */
        /* IL_61: call Void PrintObject(System.Object) */
        asm2.x6000002(((loc5.has_value) ? ({
                'boxed': CILJS.clone_value(loc5.value),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            }) : (null)));
        /* IL_66: ldloca.s 1 */
        /* IL_69: initobj A */
        loc1 = new t0();
        /* IL_6E: ldloca.s 1 */
        /* IL_70: ldc.i4.s 33 */
        /* IL_72: stfld Int32 X */
        loc1.X = (33|0);
        /* IL_77: ldloc.1  */
        /* IL_78: box A */
        /* IL_7D: call Void PrintObject(System.Object) */
        asm2.x6000002({
                'boxed': CILJS.clone_value(loc1),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_82: ldloca.s 6 */
        /* IL_85: initobj A */
        loc6 = new t0();
        /* IL_8A: ldloc.s 6 */
        /* IL_8C: box A */
        /* IL_91: call Void PrintObject(System.Object) */
        asm2.x6000002({
                'boxed': CILJS.clone_value(loc6),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_96: ret  */
        return ;
    };
    /* static System.Void Program.PrintObject(Object)*/
    asm.x6000002 = function PrintObject(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: unbox.any System.Nullable`1[A] */
        /* IL_06: call Void Print(System.Nullable`1[A]) */
        asm2.x6000003(CILJS.clone_value(CILJS.unbox_any(arg0,(asm0)["System.Nullable`1"](asm2.A()))));
        /* IL_0B: ret  */
        return ;
    };;
    /* static System.Void Program.Print(Nullable`1)*/
    asm.x6000003 = function Print(arg0)
    {
        var t0;
        var st_02;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.Int32"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarga.s 0 */
                /* IL_02: call Boolean get_HasValue() */
                /* IL_07: brtrue.s IL_10 */
                
                if (asm0.x60000dc({
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
                /* IL_09: ldstr false */
                st_02 = CILJS.new_string("false");
                /* IL_0E: br.s IL_15 */
                __pos__ = 0x15;
                continue;
                case 0x10:
                /* IL_10: ldstr true */
                st_02 = CILJS.new_string("true");
                case 0x15:
                /* IL_15: call Void Log(System.Object) */
                asm1.x6000001(st_02);
                /* IL_1A: ldarga.s 0 */
                /* IL_1C: call Boolean get_HasValue() */
                /* IL_21: brfalse.s IL_39 */
                
                if ((!(asm0.x60000dc({
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
                /* IL_23: ldarga.s 0 */
                /* IL_25: call A get_Value() */
                /* IL_2A: ldfld Int32 X */
                /* IL_2F: box System.Int32 */
                /* IL_34: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': asm0.x60000dd({
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
                /* IL_39: ret  */
                return ;
            }
        }
    };;
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.X = 0;
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm2 || (asm2 = {}));