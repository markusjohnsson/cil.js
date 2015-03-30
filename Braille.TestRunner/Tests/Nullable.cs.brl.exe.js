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
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000a_init = function ()
    {
        (asm1.A().init)();
        ((asm0)["System.Nullable`1"](asm1.A()).init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        BLR.init_base_types();
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
    {
        var t0;
        var t1;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var __pos__;
        t0 = asm1.A();
        t1 = (asm0)["System.Nullable`1"](t0);
        loc0 = new (asm1.A())();
        loc1 = new (asm1.A())();
        loc2 = new ((asm0)["System.Nullable`1"](asm1.A()))();
        loc3 = new (asm1.A())();
        __pos__ = 0x0;
        /* IL_00: nop  Nullable.cs:12:5*/
        /* IL_01: ldloca.s 2 */
        /* IL_04: initobj System.Nullable`1[A] */
        loc2 = new t1();
        /* IL_09: ldloc.2  */
        /* IL_0A: call Void Print(System.Nullable`1[A]) */
        asm1.x600000c(BLR.clone_value(loc2));
        /* IL_0F: nop  */
        /* IL_10: ldloca.s 2 */
        /* IL_13: initobj System.Nullable`1[A] */
        loc2 = new t1();
        /* IL_18: ldloc.2  */
        /* IL_19: call Void Print(System.Nullable`1[A]) */
        asm1.x600000c(BLR.clone_value(loc2));
        /* IL_1E: nop  */
        /* IL_1F: ldloca.s 0 */
        /* IL_22: initobj A */
        loc0 = new t0();
        /* IL_27: ldloca.s 0 */
        /* IL_29: ldc.i4.s 33 */
        /* IL_2B: stfld Int32 X */
        loc0.X = (33|0);
        /* IL_30: ldloc.0  */
        /* IL_31: newobj Void .ctor(A) */
        /* IL_36: call Void Print(System.Nullable`1[A]) */
        asm1.x600000c(BLR.clone_value(BLR.newobj(t1,asm0.x60001a6,[null, BLR.clone_value(loc0)])));
        /* IL_3B: nop  */
        /* IL_3C: ldloca.s 3 */
        /* IL_3F: initobj A */
        loc3 = new t0();
        /* IL_44: ldloc.3  */
        /* IL_45: newobj Void .ctor(A) */
        /* IL_4A: call Void Print(System.Nullable`1[A]) */
        asm1.x600000c(BLR.clone_value(BLR.newobj(t1,asm0.x60001a6,[null, BLR.clone_value(loc3)])));
        /* IL_4F: nop  */
        /* IL_50: ldnull  */
        /* IL_51: call Void PrintObject(System.Object) */
        asm1.x600000b(null);
        /* IL_56: nop  */
        /* IL_57: ldloca.s 2 */
        /* IL_5A: initobj System.Nullable`1[A] */
        loc2 = new t1();
        /* IL_5F: ldloc.2  */
        /* IL_60: box System.Nullable`1[A] */
        /* IL_65: call Void PrintObject(System.Object) */
        asm1.x600000b(((loc2.has_value) ? ({
                'boxed': BLR.clone_value(loc2.value),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            }) : (null)));
        /* IL_6A: nop  */
        /* IL_6B: ldloca.s 1 */
        /* IL_6E: initobj A */
        loc1 = new t0();
        /* IL_73: ldloca.s 1 */
        /* IL_75: ldc.i4.s 33 */
        /* IL_77: stfld Int32 X */
        loc1.X = (33|0);
        /* IL_7C: ldloc.1  */
        /* IL_7D: box A */
        /* IL_82: call Void PrintObject(System.Object) */
        asm1.x600000b({
                'boxed': BLR.clone_value(loc1),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_87: nop  */
        /* IL_88: ldloca.s 3 */
        /* IL_8B: initobj A */
        loc3 = new t0();
        /* IL_90: ldloc.3  */
        /* IL_91: box A */
        /* IL_96: call Void PrintObject(System.Object) */
        asm1.x600000b({
                'boxed': BLR.clone_value(loc3),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_9B: nop  */
        /* IL_9C: ret  Nullable.cs:21:5*/
        return ;
    };
    /* static System.Void Program.PrintObject(Object)*/
    asm.x600000b = function PrintObject(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop  Nullable.cs:24:5*/
        /* IL_01: ldarg.0  */
        /* IL_02: unbox.any System.Nullable`1[A] */
        /* IL_07: call Void Print(System.Nullable`1[A]) */
        asm1.x600000c(BLR.clone_value(BLR.unbox_any(arg0,(asm0)["System.Nullable`1"](asm1.A()))));
        /* IL_0C: nop  */
        /* IL_0D: ret  Nullable.cs:26:5*/
        return ;
    };;
    /* static System.Void Program.Print(Nullable`1)*/
    asm.x600000c = function Print(arg0)
    {
        var t0;
        var st_02;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        t0 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  Nullable.cs:29:5*/
                
                /* IL_01: ldarga.s 0 */
                /* IL_03: call Boolean get_HasValue() */
                /* IL_08: brtrue.s IL_11 */
                
                if (asm0.x60001a7({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    })){
                    __pos__ = 0x11;
                    continue;
                }
                /* IL_0A: ldstr false */
                st_02 = BLR.new_string("false");
                /* IL_0F: br.s IL_16 */
                __pos__ = 0x16;
                continue;
                case 0x11:
                /* IL_11: ldstr true */
                st_02 = BLR.new_string("true");
                case 0x16:
                /* IL_16: nop  */
                
                /* IL_17: call Void Log(System.Object) */
                asm1.x6000001(st_02);
                /* IL_1C: nop  */
                
                /* IL_1D: ldarga.s 0 */
                /* IL_1F: call Boolean get_HasValue() */
                /* IL_24: ldc.i4.0  */
                /* IL_26: ceq  */
                /* IL_27: stloc.0  */
                loc0 = ((asm0.x60001a7({
                        'w': function (v)
                        {
                            arg0 = v;
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    }) === (0|0)) ? (1) : (0));
                /* IL_28: ldloc.0  */
                /* IL_29: brtrue.s IL_42 */
                
                if (loc0){
                    __pos__ = 0x42;
                    continue;
                }
                /* IL_2B: ldarga.s 0 */
                /* IL_2D: call A get_Value() */
                /* IL_32: ldfld Int32 X */
                /* IL_37: box System.Int32 */
                /* IL_3C: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': asm0.x60001a8({
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
                /* IL_41: nop  */
                
                case 0x42:
                /* IL_42: ret  Nullable.cs:34:5*/
                return ;
            }
        }
    };;
    /*  Program..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
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
