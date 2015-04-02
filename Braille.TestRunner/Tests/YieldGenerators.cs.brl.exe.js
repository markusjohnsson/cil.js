var asm1;(function (asm)
{
    asm.FullName = "YieldGenerators.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static System.Collections.Generic.IEnumerable`1[TResult] E.Select<T,TResult>(IEnumerable`1,Func`2)*/
    asm.x600000a_init = function (T, TResult)
    {
        return function ()
        {
            ((asm1)["E+<Select>d__0`2"](T,TResult).init)();
        };
    };;
    asm.x600000a = function (T, TResult)
    {
        return function (arg0, arg1)
        {
            (asm.x600000a_init(T,TResult).apply)(this,arguments);
            return (asm.x600000a_(T,TResult).apply)(this,arguments);
        };
    };;
    asm.x600000a_ = function (T, TResult)
    {
        return function Select(arg0, arg1)
        {
            var t0;
            var t1;
            var t2;
            var __pos__;
            var loc0;
            var loc1;
            t0 = T;
            t1 = TResult;
            t2 = (asm1)["E+<Select>d__0`2"](t0,t1);
            __pos__ = 0x0;
            /* IL_00: ldc.i4.s 254 */
            /* IL_02: newobj Void .ctor(System.Int32) */
            /* IL_07: stloc.0  */
            loc0 = BLR.newobj(t2,asm1.x600001d,[null, (-2|0)]);
            /* IL_08: ldloc.0  */
            /* IL_09: ldarg.0  */
            /* IL_0A: stfld IKVM.Reflection.GenericFieldInstance */
            (loc0)["<>3__source"] = arg0;
            /* IL_0F: ldloc.0  */
            /* IL_10: ldarg.1  */
            /* IL_11: stfld IKVM.Reflection.GenericFieldInstance */
            (loc0)["<>3__selector"] = arg1;
            /* IL_16: ldloc.0  */
            /* IL_17: stloc.1  */
            loc1 = loc0;
            /* IL_1A: ldloc.1  */
            /* IL_1B: ret  */
            return loc1;
        };
    };
    /* static System.Collections.Generic.IEnumerable`1[T] E.Where<T>(IEnumerable`1,Func`2)*/
    asm.x600000b_init = function (T)
    {
        return function ()
        {
            ((asm1)["E+<Where>d__6`1"](T).init)();
        };
    };;
    asm.x600000b = function (T)
    {
        return function (arg0, arg1)
        {
            (asm.x600000b_init(T).apply)(this,arguments);
            return (asm.x600000b_(T).apply)(this,arguments);
        };
    };;
    asm.x600000b_ = function (T)
    {
        return function Where(arg0, arg1)
        {
            var t0;
            var t1;
            var __pos__;
            var loc0;
            var loc1;
            t0 = T;
            t1 = (asm1)["E+<Where>d__6`1"](t0);
            __pos__ = 0x0;
            /* IL_00: ldc.i4.s 254 */
            /* IL_02: newobj Void .ctor(System.Int32) */
            /* IL_07: stloc.0  */
            loc0 = BLR.newobj(t1,asm1.x6000026,[null, (-2|0)]);
            /* IL_08: ldloc.0  */
            /* IL_09: ldarg.0  */
            /* IL_0A: stfld IKVM.Reflection.GenericFieldInstance */
            (loc0)["<>3__source"] = arg0;
            /* IL_0F: ldloc.0  */
            /* IL_10: ldarg.1  */
            /* IL_11: stfld IKVM.Reflection.GenericFieldInstance */
            (loc0)["<>3__predicate"] = arg1;
            /* IL_16: ldloc.0  */
            /* IL_17: stloc.1  */
            loc1 = loc0;
            /* IL_1A: ldloc.1  */
            /* IL_1B: ret  */
            return loc1;
        };
    };
    /* static T E.FirstOrDefault<T>(IEnumerable`1)*/
    asm.x600000c_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Collections.Generic.IEnumerable`1"](T).init)();
            ((asm0)["System.Collections.Generic.IEnumerator`1"](T).init)();
            ((asm0)["System.Collections.IEnumerator"]().init)();
            ((asm0)["System.IDisposable"]().init)();
        };
    };;
    asm.x600000c = function (T)
    {
        return function (arg0)
        {
            (asm.x600000c_init(T).apply)(this,arguments);
            return (asm.x600000c_(T).apply)(this,arguments);
        };
    };;
    asm.x600000c_ = function (T)
    {
        return function FirstOrDefault(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            var loc4;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc2;
            var in_block_1;
            var __finally_continuation_1__;
            var loc0;
            var loc1;
            var loc3;
            t0 = T;
            t1 = (asm0)["System.Collections.Generic.IEnumerable`1"](t0);
            t2 = (asm0)["System.Collections.Generic.IEnumerator`1"](t0);
            t3 = (asm0)["System.Collections.IEnumerator"]();
            t4 = (asm0)["System.IDisposable"]();
            loc4 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  YieldGenerators.cs:21:5*/
                    
                    /* IL_01: nop  YieldGenerators.cs:22:9*/
                    
                    /* IL_02: ldarg.0  */
                    /* IL_03: callvirt IEnumerator`1 GetEnumerator() */
                    /* IL_08: stloc.2  */
                    loc2 = ((((arg0.ifacemap)[t1])[t0].x600000e)())(BLR.convert_box_to_pointer_as_needed(arg0));
                    
                    try {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        __pos__ = 9;
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x9:
                                /* IL_09: br.s IL_17 YieldGenerators.cs:16707566:0*/
                                __pos__ = 0x17;
                                continue;
                                case 0xB:
                                /* IL_0B: ldloc.2  */
                                /* IL_0C: callvirt T get_Current() */
                                /* IL_11: stloc.0  */
                                loc0 = ((((loc2.ifacemap)[t2])[t0].x6000122)())(BLR.convert_box_to_pointer_as_needed(loc2));
                                /* IL_12: nop  YieldGenerators.cs:23:9*/
                                
                                /* IL_13: ldloc.0  */
                                /* IL_14: stloc.1  */
                                loc1 = loc0;
                                /* IL_15: leave.s IL_41 */
                                in_block_1 = false;
                                __pos__ = 0x41;
                                break;
                                case 0x17:
                                /* IL_17: ldloc.2  */
                                /* IL_18: callvirt Boolean MoveNext() */
                                /* IL_1D: stloc.3  */
                                loc3 = (((loc2.ifacemap)[t3].x6000120)())(BLR.convert_box_to_pointer_as_needed(loc2));
                                /* IL_1E: ldloc.3  */
                                /* IL_1F: brtrue.s IL_0B */
                                
                                if (loc3){
                                    __pos__ = 0xB;
                                    continue;
                                }
                                /* IL_21: leave.s IL_33 */
                                in_block_1 = false;
                                __pos__ = 0x33;
                                break;
                            }
                        }
                    }
                    
                    finally {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        __pos__ = 35;
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x23:
                                /* IL_23: ldloc.2  */
                                /* IL_24: ldnull  */
                                /* IL_26: ceq  */
                                /* IL_27: stloc.3  */
                                loc3 = ((loc2 === null) ? (1) : (0));
                                /* IL_28: ldloc.3  */
                                /* IL_29: brtrue.s IL_32 */
                                
                                if (loc3){
                                    __pos__ = 0x32;
                                    continue;
                                }
                                /* IL_2B: ldloc.2  */
                                /* IL_2C: callvirt Void Dispose() */
                                (((loc2.ifacemap)[t4].x60000c7)())(BLR.convert_box_to_pointer_as_needed(loc2));
                                /* IL_31: nop  */
                                
                                case 0x32:
                                /* IL_32: endfinally  */
                                in_block_1 = false;
                                __pos__ = __finally_continuation_1__;
                                break;
                            }
                        }
                    }
                    break;
                    case 0x33:
                    /* IL_33: nop  YieldGenerators.cs:16707566:0*/
                    
                    /* IL_34: ldloca.s 4 */
                    /* IL_37: initobj T */
                    loc4 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
                    /* IL_3C: ldloc.s 4 */
                    /* IL_3E: stloc.1  */
                    loc1 = loc4;
                    case 0x41:
                    /* IL_41: nop  YieldGenerators.cs:16707566:0*/
                    
                    /* IL_42: ldloc.1  */
                    /* IL_43: ret  */
                    return loc1;
                }
            }
        };
    };
    /* static System.Boolean E.Any<T>(IEnumerable`1)*/
    asm.x600000d_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Collections.Generic.IEnumerable`1"](T).init)();
            ((asm0)["System.Collections.Generic.IEnumerator`1"](T).init)();
            ((asm0)["System.Collections.IEnumerator"]().init)();
            ((asm0)["System.IDisposable"]().init)();
        };
    };;
    asm.x600000d = function (T)
    {
        return function (arg0)
        {
            (asm.x600000d_init(T).apply)(this,arguments);
            return (asm.x600000d_(T).apply)(this,arguments);
        };
    };;
    asm.x600000d_ = function (T)
    {
        return function Any(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc2;
            var in_block_1;
            var __finally_continuation_1__;
            var loc0;
            var loc1;
            var loc3;
            t0 = T;
            t1 = (asm0)["System.Collections.Generic.IEnumerable`1"](t0);
            t2 = (asm0)["System.Collections.Generic.IEnumerator`1"](t0);
            t3 = (asm0)["System.Collections.IEnumerator"]();
            t4 = (asm0)["System.IDisposable"]();
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  YieldGenerators.cs:31:5*/
                    
                    /* IL_01: nop  YieldGenerators.cs:32:9*/
                    
                    /* IL_02: ldarg.0  */
                    /* IL_03: callvirt IEnumerator`1 GetEnumerator() */
                    /* IL_08: stloc.2  */
                    loc2 = ((((arg0.ifacemap)[t1])[t0].x600000e)())(BLR.convert_box_to_pointer_as_needed(arg0));
                    
                    try {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        __pos__ = 9;
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x9:
                                /* IL_09: br.s IL_17 YieldGenerators.cs:16707566:0*/
                                __pos__ = 0x17;
                                continue;
                                case 0xB:
                                /* IL_0B: ldloc.2  */
                                /* IL_0C: callvirt T get_Current() */
                                /* IL_11: stloc.0  */
                                loc0 = ((((loc2.ifacemap)[t2])[t0].x6000122)())(BLR.convert_box_to_pointer_as_needed(loc2));
                                /* IL_12: nop  YieldGenerators.cs:33:9*/
                                
                                /* IL_13: ldc.i4.1  */
                                /* IL_14: stloc.1  */
                                loc1 = (1|0);
                                /* IL_15: leave.s IL_38 */
                                in_block_1 = false;
                                __pos__ = 0x38;
                                break;
                                case 0x17:
                                /* IL_17: ldloc.2  */
                                /* IL_18: callvirt Boolean MoveNext() */
                                /* IL_1D: stloc.3  */
                                loc3 = (((loc2.ifacemap)[t3].x6000120)())(BLR.convert_box_to_pointer_as_needed(loc2));
                                /* IL_1E: ldloc.3  */
                                /* IL_1F: brtrue.s IL_0B */
                                
                                if (loc3){
                                    __pos__ = 0xB;
                                    continue;
                                }
                                /* IL_21: leave.s IL_33 */
                                in_block_1 = false;
                                __pos__ = 0x33;
                                break;
                            }
                        }
                    }
                    
                    finally {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        __pos__ = 35;
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x23:
                                /* IL_23: ldloc.2  */
                                /* IL_24: ldnull  */
                                /* IL_26: ceq  */
                                /* IL_27: stloc.3  */
                                loc3 = ((loc2 === null) ? (1) : (0));
                                /* IL_28: ldloc.3  */
                                /* IL_29: brtrue.s IL_32 */
                                
                                if (loc3){
                                    __pos__ = 0x32;
                                    continue;
                                }
                                /* IL_2B: ldloc.2  */
                                /* IL_2C: callvirt Void Dispose() */
                                (((loc2.ifacemap)[t4].x60000c7)())(BLR.convert_box_to_pointer_as_needed(loc2));
                                /* IL_31: nop  */
                                
                                case 0x32:
                                /* IL_32: endfinally  */
                                in_block_1 = false;
                                __pos__ = __finally_continuation_1__;
                                break;
                            }
                        }
                    }
                    break;
                    case 0x33:
                    /* IL_33: nop  YieldGenerators.cs:16707566:0*/
                    
                    /* IL_34: ldc.i4.0  */
                    /* IL_35: stloc.1  */
                    loc1 = (0|0);
                    case 0x38:
                    /* IL_38: nop  YieldGenerators.cs:16707566:0*/
                    
                    /* IL_39: ldloc.1  */
                    /* IL_3A: ret  */
                    return loc1;
                }
            }
        };
    };
    /* System.Int32 P.get_Prop()*/
    asm.x600000e = function get_Prop(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld Int32 <Prop>k__BackingField */
        /* IL_06: stloc.0  */
        loc0 = (arg0)["P<Prop>k__BackingField"];
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /* System.Void P.set_Prop(Int32)*/
    asm.x600000f = function set_Prop(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld Int32 <Prop>k__BackingField */
        (arg0)["P<Prop>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  P..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000011_init = function ()
    {
        (asm1.P().init)();
        (asm1.Program().init)();
        ((asm0)["System.Func`2"](asm1.P(),(asm0)["System.Int32"]()).init)();
        ((asm0)["System.Func`2"](asm1.P(),(asm0)["System.Boolean"]()).init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        BLR.init_base_types();
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_09;
        var st_0A;
        var st_0B;
        var st_0C;
        var st_0D;
        var st_0F;
        var st_10;
        var st_11;
        var st_12;
        var st_13;
        var st_15;
        var st_16;
        var st_17;
        var st_18;
        var st_19;
        var st_1B;
        var st_1C;
        var st_1D;
        var st_1E;
        var st_1F;
        var st_28;
        var st_29;
        var st_2A;
        var st_2B;
        var st_2C;
        var st_2D;
        var st_2E;
        var st_2F;
        var st_31;
        var st_32;
        var st_33;
        var st_34;
        var st_35;
        var st_36;
        var st_37;
        var st_38;
        var st_39;
        var st_3B;
        var st_3C;
        var st_3D;
        var st_3E;
        var st_3F;
        var st_40;
        var st_41;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        t0 = asm1.P();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.Boolean"]();
        t3 = asm1.Program();
        t4 = (asm0)["System.Func`2"](t0,t1);
        t5 = (asm0)["System.Func`2"](t0,t2);
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  YieldGenerators.cs:46:5*/
                
                /* IL_01: ldc.i4.5  */
                /* IL_02: newarr P */
                /* IL_07: stloc.0  */
                loc0 = BLR.new_array(t0,(5|0));
                /* IL_08: ldloc.0  YieldGenerators.cs:48:9*/
                st_05 = loc0;
                /* IL_09: ldc.i4.0  */
                st_06 = (0|0);
                /* IL_0A: newobj Void .ctor() */
                /* IL_0F: stloc.1  */
                loc1 = BLR.newobj(t0,asm1.x6000010,[null]);
                /* IL_10: ldloc.1  */
                st_03 = loc1;
                /* IL_11: ldc.i4.s 11 */
                st_04 = (11|0);
                /* IL_13: callvirt Void set_Prop(System.Int32) */
                asm1.x600000f(st_03,st_04);
                /* IL_18: nop  */
                
                /* IL_19: ldloc.1  */
                st_07 = loc1;
                /* IL_1A: stelem.ref  */
                BLR.stelem_ref(st_05,st_06,st_07);
                /* IL_1B: ldloc.0  YieldGenerators.cs:49:9*/
                st_0B = loc0;
                /* IL_1C: ldc.i4.1  */
                st_0C = (1|0);
                /* IL_1D: newobj Void .ctor() */
                /* IL_22: stloc.2  */
                loc2 = BLR.newobj(t0,asm1.x6000010,[null]);
                /* IL_23: ldloc.2  */
                st_09 = loc2;
                /* IL_24: ldc.i4.s 22 */
                st_0A = (22|0);
                /* IL_26: callvirt Void set_Prop(System.Int32) */
                asm1.x600000f(st_09,st_0A);
                /* IL_2B: nop  */
                
                /* IL_2C: ldloc.2  */
                st_0D = loc2;
                /* IL_2D: stelem.ref  */
                BLR.stelem_ref(st_0B,st_0C,st_0D);
                /* IL_2E: ldloc.0  YieldGenerators.cs:50:9*/
                st_11 = loc0;
                /* IL_2F: ldc.i4.2  */
                st_12 = (2|0);
                /* IL_30: newobj Void .ctor() */
                /* IL_35: stloc.3  */
                loc3 = BLR.newobj(t0,asm1.x6000010,[null]);
                /* IL_36: ldloc.3  */
                st_0F = loc3;
                /* IL_37: ldc.i4.s 33 */
                st_10 = (33|0);
                /* IL_39: callvirt Void set_Prop(System.Int32) */
                asm1.x600000f(st_0F,st_10);
                /* IL_3E: nop  */
                
                /* IL_3F: ldloc.3  */
                st_13 = loc3;
                /* IL_40: stelem.ref  */
                BLR.stelem_ref(st_11,st_12,st_13);
                /* IL_41: ldloc.0  YieldGenerators.cs:51:9*/
                st_17 = loc0;
                /* IL_42: ldc.i4.3  */
                st_18 = (3|0);
                /* IL_43: newobj Void .ctor() */
                /* IL_48: stloc.s 4 */
                loc4 = BLR.newobj(t0,asm1.x6000010,[null]);
                /* IL_4A: ldloc.s 4 */
                st_15 = loc4;
                /* IL_4C: ldc.i4.s 44 */
                st_16 = (44|0);
                /* IL_4E: callvirt Void set_Prop(System.Int32) */
                asm1.x600000f(st_15,st_16);
                /* IL_53: nop  */
                
                /* IL_54: ldloc.s 4 */
                st_19 = loc4;
                /* IL_56: stelem.ref  */
                BLR.stelem_ref(st_17,st_18,st_19);
                /* IL_57: ldloc.0  YieldGenerators.cs:52:9*/
                st_1D = loc0;
                /* IL_58: ldc.i4.4  */
                st_1E = (4|0);
                /* IL_59: newobj Void .ctor() */
                /* IL_5E: stloc.s 5 */
                loc5 = BLR.newobj(t0,asm1.x6000010,[null]);
                /* IL_60: ldloc.s 5 */
                st_1B = loc5;
                /* IL_62: ldc.i4.s 55 */
                st_1C = (55|0);
                /* IL_64: callvirt Void set_Prop(System.Int32) */
                asm1.x600000f(st_1B,st_1C);
                /* IL_69: nop  */
                
                /* IL_6A: ldloc.s 5 */
                st_1F = loc5;
                /* IL_6C: stelem.ref  */
                BLR.stelem_ref(st_1D,st_1E,st_1F);
                /* IL_6D: ldloc.0  */
                /* IL_6E: call P FirstOrDefault[P](System.Collections.Generic.IEnumerable`1[P]) */
                /* IL_73: callvirt Int32 get_Prop() */
                /* IL_78: box System.Int32 */
                /* IL_7D: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': asm1.x600000e((asm1.x600000c(asm1.P()))(loc0)),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    });
                /* IL_82: nop  */
                
                /* IL_83: ldloc.0  */
                /* IL_84: call Boolean Any[P](System.Collections.Generic.IEnumerable`1[P]) */
                /* IL_89: box System.Boolean */
                /* IL_8E: call Void Log(System.Object) */
                asm1.x6000001({
                        'boxed': (asm1.x600000d(asm1.P()))(loc0),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    });
                /* IL_93: nop  */
                
                /* IL_94: ldloc.0  YieldGenerators.cs:56:9*/
                st_2B = loc0;
                /* IL_95: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate8 */
                /* IL_9A: brtrue.s IL_AF */
                
                if ((t3)["CS$<>9__CachedAnonymousMethodDelegate8"]){
                    __pos__ = 0xAF;
                    continue;
                }
                /* IL_9C: ldnull  */
                st_28 = null;
                /* IL_9E: ldftn Int32 <Main>b__5(P) */
                st_29 = asm1.x6000013;
                /* IL_A3: newobj Void .ctor(System.Object, System.IntPtr) */
                st_2A = BLR.newobj(t4,asm0.x60000b6,[null, st_28, st_29]);
                /* IL_A8: stsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate8 */
                (t3)["CS$<>9__CachedAnonymousMethodDelegate8"] = st_2A;
                case 0xAF:
                /* IL_AF: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate8 */
                st_2C = (t3)["CS$<>9__CachedAnonymousMethodDelegate8"];
                /* IL_B4: call IEnumerable`1 Select[P, System.Int32](System.Collections.Generic.IEnumerable`1[P], System.Func`2[P,System.Int32]) */
                st_2D = (asm1.x600000a(asm1.P(),(asm0)["System.Int32"]()))(st_2B,st_2C);
                /* IL_B9: call Int32 FirstOrDefault[System.Int32](System.Collections.Generic.IEnumerable`1[System.Int32]) */
                st_2E = (asm1.x600000c((asm0)["System.Int32"]()))(st_2D);
                /* IL_BE: box System.Int32 */
                st_2F = {
                    'boxed': st_2E,
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                };
                /* IL_C3: call Void Log(System.Object) */
                asm1.x6000001(st_2F);
                /* IL_C8: nop  */
                
                /* IL_C9: ldloc.0  YieldGenerators.cs:57:9*/
                st_34 = loc0;
                /* IL_CA: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate9 */
                /* IL_CF: brtrue.s IL_E4 */
                
                if ((t3)["CS$<>9__CachedAnonymousMethodDelegate9"]){
                    __pos__ = 0xE4;
                    continue;
                }
                /* IL_D1: ldnull  */
                st_31 = null;
                /* IL_D3: ldftn Boolean <Main>b__6(P) */
                st_32 = asm1.x6000014;
                /* IL_D8: newobj Void .ctor(System.Object, System.IntPtr) */
                st_33 = BLR.newobj(t5,asm0.x60000b6,[null, st_31, st_32]);
                /* IL_DD: stsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate9 */
                (t3)["CS$<>9__CachedAnonymousMethodDelegate9"] = st_33;
                case 0xE4:
                /* IL_E4: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate9 */
                st_35 = (t3)["CS$<>9__CachedAnonymousMethodDelegate9"];
                /* IL_E9: call IEnumerable`1 Where[P](System.Collections.Generic.IEnumerable`1[P], System.Func`2[P,System.Boolean]) */
                st_36 = (asm1.x600000b(asm1.P()))(st_34,st_35);
                /* IL_EE: call P FirstOrDefault[P](System.Collections.Generic.IEnumerable`1[P]) */
                st_37 = (asm1.x600000c(asm1.P()))(st_36);
                /* IL_F3: callvirt Int32 get_Prop() */
                st_38 = asm1.x600000e(st_37);
                /* IL_F8: box System.Int32 */
                st_39 = {
                    'boxed': st_38,
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                };
                /* IL_FD: call Void Log(System.Object) */
                asm1.x6000001(st_39);
                /* IL_102: nop  */
                
                /* IL_103: ldloc.0  YieldGenerators.cs:58:9*/
                st_3E = loc0;
                /* IL_104: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegatea */
                /* IL_109: brtrue.s IL_11E */
                
                if ((t3)["CS$<>9__CachedAnonymousMethodDelegatea"]){
                    __pos__ = 0x11E;
                    continue;
                }
                /* IL_10B: ldnull  */
                st_3B = null;
                /* IL_10D: ldftn Boolean <Main>b__7(P) */
                st_3C = asm1.x6000015;
                /* IL_112: newobj Void .ctor(System.Object, System.IntPtr) */
                st_3D = BLR.newobj(t5,asm0.x60000b6,[null, st_3B, st_3C]);
                /* IL_117: stsfld Func`2 CS$<>9__CachedAnonymousMethodDelegatea */
                (t3)["CS$<>9__CachedAnonymousMethodDelegatea"] = st_3D;
                case 0x11E:
                /* IL_11E: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegatea */
                st_3F = (t3)["CS$<>9__CachedAnonymousMethodDelegatea"];
                /* IL_123: call IEnumerable`1 Where[P](System.Collections.Generic.IEnumerable`1[P], System.Func`2[P,System.Boolean]) */
                st_40 = (asm1.x600000b(asm1.P()))(st_3E,st_3F);
                /* IL_128: call P FirstOrDefault[P](System.Collections.Generic.IEnumerable`1[P]) */
                st_41 = (asm1.x600000c(asm1.P()))(st_40);
                /* IL_12D: call Void Log(System.Object) */
                asm1.x6000001(st_41);
                /* IL_132: nop  */
                
                /* IL_133: ret  YieldGenerators.cs:59:5*/
                return ;
            }
        }
    };
    /* static System.Int32 Program.<Main>b__5(P)*/
    asm.x6000013 = function _Main_b__5(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: callvirt Int32 get_Prop() */
        /* IL_06: stloc.0  */
        loc0 = asm1.x600000e(arg0);
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /* static System.Boolean Program.<Main>b__6(P)*/
    asm.x6000014 = function _Main_b__6(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: callvirt Int32 get_Prop() */
        /* IL_06: ldc.i4.s 22 */
        /* IL_09: ceq  */
        /* IL_0A: stloc.0  */
        loc0 = ((asm1.x600000e(arg0) === (22|0)) ? (1) : (0));
        /* IL_0D: ldloc.0  */
        /* IL_0E: ret  */
        return loc0;
    };;
    /* static System.Boolean Program.<Main>b__7(P)*/
    asm.x6000015 = function _Main_b__7(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: callvirt Int32 get_Prop() */
        /* IL_06: ldc.i4.s 99 */
        /* IL_09: ceq  */
        /* IL_0A: stloc.0  */
        loc0 = ((asm1.x600000e(arg0) === (99|0)) ? (1) : (0));
        /* IL_0D: ldloc.0  */
        /* IL_0E: ret  */
        return loc0;
    };;
    /*  Program..ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Collections.Generic.IEnumerator`1[TResult] <Select>d__0`2.System.Collections.Generic.IEnumerable<TResult>.GetEnumerator()*/
    asm.x6000016_init = function ()
    {
        ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
        ((asm1)["E+<Select>d__0`2"]((((arguments)[0].constructor.GenericArguments)["asm1.t2000009"])[0],(((arguments)[0].constructor.GenericArguments)["asm1.t2000009"])[1]).init)();
    };;
    asm.x6000016 = function (arg0)
    {
        asm.x6000016_init.apply(this,arguments);
        return asm.x6000016_.apply(this,arguments);
    };;
    asm.x6000016_ = function System_Collections_Generic_IEnumerable_TResult__GetEnumerator(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var st_08;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc2;
        var loc0;
        var loc1;
        t0 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
        t1 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000009"])[0];
        t2 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000009"])[1];
        t3 = (asm1)["E+<Select>d__0`2"](t1,t2);
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: call Int32 get_CurrentManagedThreadId() */
                /* IL_05: ldarg.0  */
                /* IL_06: ldfld Int32 <>l__initialThreadId */
                /* IL_0B: bne.un.s IL_1C */
                
                if (BLR.unsigned_value(asm0.x60000b3()) != BLR.unsigned_value((arg0)["_Select_d__0_2<>l__initialThreadId"])){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_0D: ldarg.0  */
                /* IL_0E: ldfld Int32 <>1__state */
                /* IL_13: ldc.i4.s 254 */
                /* IL_16: ceq  */
                /* IL_17: ldc.i4.0  */
                /* IL_19: ceq  */
                st_08 = (((((arg0)["_Select_d__0_2<>1__state"] === (-2|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1A: br.s IL_1D */
                __pos__ = 0x1D;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.1  */
                st_08 = (1|0);
                case 0x1D:
                /* IL_1D: nop  */
                
                /* IL_1E: stloc.2  */
                loc2 = st_08;
                /* IL_1F: ldloc.2  */
                /* IL_20: brtrue.s IL_2D */
                
                if (loc2){
                    __pos__ = 0x2D;
                    continue;
                }
                /* IL_22: ldarg.0  */
                /* IL_23: ldc.i4.0  */
                /* IL_24: stfld Int32 <>1__state */
                (arg0)["_Select_d__0_2<>1__state"] = (0|0);
                /* IL_29: ldarg.0  */
                /* IL_2A: stloc.0  */
                loc0 = arg0;
                /* IL_2B: br.s IL_34 */
                __pos__ = 0x34;
                continue;
                case 0x2D:
                /* IL_2D: ldc.i4.0  */
                /* IL_2E: newobj Void .ctor(System.Int32) */
                /* IL_33: stloc.0  */
                loc0 = BLR.newobj(t3,asm1.x600001d,[null, (0|0)]);
                case 0x34:
                /* IL_34: ldloc.0  */
                /* IL_35: ldarg.0  */
                /* IL_36: ldfld IEnumerable`1 <>3__source */
                /* IL_3B: stfld IEnumerable`1 source */
                loc0.source = (arg0)["<>3__source"];
                /* IL_40: ldloc.0  */
                /* IL_41: ldarg.0  */
                /* IL_42: ldfld Func`2 <>3__selector */
                /* IL_47: stfld Func`2 selector */
                loc0.selector = (arg0)["<>3__selector"];
                /* IL_4C: ldloc.0  */
                /* IL_4D: stloc.1  */
                loc1 = loc0;
                /* IL_50: ldloc.1  */
                /* IL_51: ret  */
                return loc1;
            }
        }
    };
    /* System.Collections.IEnumerator <Select>d__0`2.System.Collections.IEnumerable.GetEnumerator()*/
    asm.x6000017 = function System_Collections_IEnumerable_GetEnumerator(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call IEnumerator`1 System.Collections.Generic.IEnumerable<TResult>.GetEnumerator() */
        /* IL_06: stloc.0  */
        loc0 = asm1.x6000016(arg0);
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /* System.Boolean <Select>d__0`2.MoveNext()*/
    asm.x6000018_init = function ()
    {
        ((asm0)["System.Collections.Generic.IEnumerable`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t2000009"])[0]).init)();
        ((asm0)["System.Collections.Generic.IEnumerator`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t2000009"])[0]).init)();
        ((asm0)["System.Collections.IEnumerator"]().init)();
    };;
    asm.x6000018 = function (arg0)
    {
        asm.x6000018_init.apply(this,arguments);
        return asm.x6000018_.apply(this,arguments);
    };;
    asm.x6000018_ = function MoveNext(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var in_block_1;
        var __finally_continuation_1__;
        var loc1;
        var __switch_value__;
        var __jmp__;
        var loc0;
        var loc2;
        var __error_handled_1__;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000009"])[0];
        t1 = (asm0)["System.Collections.Generic.IEnumerable`1"](t0);
        t2 = (asm0)["System.Collections.Generic.IEnumerator`1"](t0);
        t3 = (asm0)["System.Collections.IEnumerator"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 0;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x0:
                            /* IL_00: ldarg.0  */
                            /* IL_01: ldfld Int32 <>1__state */
                            /* IL_06: stloc.1  */
                            loc1 = (arg0)["_Select_d__0_2<>1__state"];
                            /* IL_07: ldloc.1  */
                            /* IL_08: switch System.Int32[] */
                            __switch_value__ = BLR.unsigned_value(loc1);
                            
                            if (__switch_value__ >= 0x3){
                                __pos__ = 0x19;
                                continue;
                            }
                            __jmp__ = [
                                0x4,
                                0x6,
                                0x2
                            ];
                            __pos__ = (0x19 + (__jmp__)[__switch_value__]);
                            continue;
                            case 0x19:
                            /* IL_19: br.s IL_1F */
                            __pos__ = 0x1F;
                            continue;
                            case 0x1B:
                            /* IL_1B: br.s IL_77 */
                            __pos__ = 0x77;
                            continue;
                            case 0x1D:
                            /* IL_1D: br.s IL_21 */
                            __pos__ = 0x21;
                            continue;
                            case 0x1F:
                            /* IL_1F: br.s IL_95 */
                            __pos__ = 0x95;
                            continue;
                            case 0x21:
                            /* IL_21: ldarg.0  */
                            /* IL_22: ldc.i4.m1  */
                            /* IL_23: stfld Int32 <>1__state */
                            (arg0)["_Select_d__0_2<>1__state"] = (-1|0);
                            /* IL_28: nop  YieldGenerators.cs:8:5*/
                            
                            /* IL_29: nop  YieldGenerators.cs:9:9*/
                            
                            /* IL_2A: ldarg.0  */
                            /* IL_2B: ldarg.0  */
                            /* IL_2C: ldfld IEnumerable`1 source */
                            /* IL_31: callvirt IEnumerator`1 GetEnumerator() */
                            /* IL_36: stfld IEnumerator`1 <>7__wrap2 */
                            (arg0)["<>7__wrap2"] = ((((arg0.source.ifacemap)[t1])[t0].x600000e)())(BLR.convert_box_to_pointer_as_needed(arg0.source));
                            /* IL_3B: ldarg.0  */
                            /* IL_3C: ldc.i4.1  */
                            /* IL_3D: stfld Int32 <>1__state */
                            (arg0)["_Select_d__0_2<>1__state"] = (1|0);
                            /* IL_42: br.s IL_7E */
                            __pos__ = 0x7E;
                            continue;
                            case 0x44:
                            /* IL_44: ldarg.0  */
                            /* IL_45: ldarg.0  */
                            /* IL_46: ldfld IEnumerator`1 <>7__wrap2 */
                            /* IL_4B: callvirt T get_Current() */
                            /* IL_50: stfld T <s>5__1 */
                            (arg0)["<s>5__1"] = (((((arg0)["<>7__wrap2"].ifacemap)[t2])[t0].x6000122)())(BLR.convert_box_to_pointer_as_needed((arg0)["<>7__wrap2"]));
                            /* IL_55: ldarg.0  */
                            /* IL_56: ldarg.0  */
                            /* IL_57: ldfld Func`2 selector */
                            /* IL_5C: ldarg.0  */
                            /* IL_5D: ldfld T <s>5__1 */
                            /* IL_62: callvirt TResult Invoke(T) */
                            /* IL_67: stfld TResult <>2__current */
                            (arg0)["_Select_d__0_2<>2__current"] = arg0.selector._methodPtr.apply(null,((arg0.selector._target) ? ([
                                    arg0.selector._target,
                                    (arg0)["<s>5__1"]
                                ]) : ([
                                    (arg0)["<s>5__1"]
                                ])));
                            /* IL_6C: ldarg.0  */
                            /* IL_6D: ldc.i4.2  */
                            /* IL_6E: stfld Int32 <>1__state */
                            (arg0)["_Select_d__0_2<>1__state"] = (2|0);
                            /* IL_73: ldc.i4.1  */
                            /* IL_74: stloc.0  */
                            loc0 = (1|0);
                            /* IL_75: leave.s IL_A1 */
                            in_block_1 = false;
                            __pos__ = 0xA1;
                            break;
                            case 0x77:
                            /* IL_77: ldarg.0  */
                            /* IL_78: ldc.i4.1  */
                            /* IL_79: stfld Int32 <>1__state */
                            (arg0)["_Select_d__0_2<>1__state"] = (1|0);
                            case 0x7E:
                            /* IL_7E: ldarg.0  */
                            /* IL_7F: ldfld IEnumerator`1 <>7__wrap2 */
                            /* IL_84: callvirt Boolean MoveNext() */
                            /* IL_89: stloc.2  */
                            loc2 = ((((arg0)["<>7__wrap2"].ifacemap)[t3].x6000120)())(BLR.convert_box_to_pointer_as_needed((arg0)["<>7__wrap2"]));
                            /* IL_8A: ldloc.2  */
                            /* IL_8B: brtrue.s IL_44 */
                            
                            if (loc2){
                                __pos__ = 0x44;
                                continue;
                            }
                            /* IL_8D: ldarg.0  */
                            /* IL_8E: call Void <>m__Finally3() */
                            asm1.x600001e(arg0);
                            /* IL_93: nop  */
                            
                            /* IL_94: nop  YieldGenerators.cs:11:5*/
                            
                            case 0x95:
                            /* IL_95: ldc.i4.0  */
                            /* IL_96: stloc.0  */
                            loc0 = (0|0);
                            /* IL_97: leave.s IL_A1 */
                            in_block_1 = false;
                            __pos__ = 0xA1;
                            break;
                        }
                    }
                }
                
                catch (__error__) {
                    __error_handled_1__ = false;
                    
                    if ((!(__error_handled_1__))){
                        throw __error__;
                    }
                    
                    if (__error_handled_0__ === false){
                        /* IL_99: ldarg.0  */
                        /* IL_9A: call Void System.IDisposable.Dispose() */
                        asm1.x600001b(arg0);
                        /* IL_9F: nop  */
                        
                        /* IL_A0: endfinally  */
                        in_block_1 = false;
                        throw __error__;
                    }
                }
                break;
                case 0xA1:
                /* IL_A1: nop  YieldGenerators.cs:16707566:0*/
                
                /* IL_A2: ldloc.0  */
                /* IL_A3: ret  */
                return loc0;
            }
        }
    };
    /* TResult <Select>d__0`2.System.Collections.Generic.IEnumerator<TResult>.get_Current()*/
    asm.x6000019 = function System_Collections_Generic_IEnumerator_TResult__get_Current(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld TResult <>2__current */
        /* IL_06: stloc.0  */
        loc0 = (arg0)["_Select_d__0_2<>2__current"];
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /* System.Void <Select>d__0`2.System.Collections.IEnumerator.Reset()*/
    asm.x600001a_init = function ()
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x600001a = asm.x600001a_;
    };;
    asm.x600001a = function (arg0)
    {
        asm.x600001a_init.apply(this,arguments);
        return asm.x600001a_.apply(this,arguments);
    };;
    asm.x600001a_ = function System_Collections_IEnumerator_Reset(arg0)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.NotSupportedException"]();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor() */
        /* IL_05: throw  */
        throw BLR.newobj(t0,asm0.x6000126,[null]);
    };
    /* System.Void <Select>d__0`2.System.IDisposable.Dispose()*/
    asm.x600001b = function System_IDisposable_Dispose(arg0)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var __switch_value__;
        var __jmp__;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld Int32 <>1__state */
                /* IL_06: stloc.0  */
                loc0 = (arg0)["_Select_d__0_2<>1__state"];
                /* IL_07: ldloc.0  */
                /* IL_08: ldc.i4.1  */
                /* IL_09: sub  */
                /* IL_0A: switch System.Int32[] */
                __switch_value__ = BLR.unsigned_value((loc0 - (1|0)) | (0|0));
                
                if (__switch_value__ >= 0x2){
                    __pos__ = 0x17;
                    continue;
                }
                __jmp__ = [
                    0x4,
                    0x2
                ];
                __pos__ = (0x17 + (__jmp__)[__switch_value__]);
                continue;
                case 0x17:
                /* IL_17: br.s IL_1D */
                __pos__ = 0x1D;
                continue;
                case 0x19:
                /* IL_19: br.s IL_1F */
                __pos__ = 0x1F;
                continue;
                case 0x1B:
                /* IL_1B: br.s IL_1F */
                __pos__ = 0x1F;
                continue;
                case 0x1D:
                /* IL_1D: br.s IL_2A */
                __pos__ = 0x2A;
                continue;
                case 0x1F:
                
                try {
                    /* IL_1F: leave.s IL_29 */
                    in_block_1 = false;
                    __pos__ = 0x29;
                }
                
                finally {
                    /* IL_21: ldarg.0  */
                    /* IL_22: call Void <>m__Finally3() */
                    asm1.x600001e(arg0);
                    /* IL_27: nop  */
                    
                    /* IL_28: endfinally  */
                    in_block_1 = false;
                }
                break;
                case 0x29:
                /* IL_29: nop  YieldGenerators.cs:16707566:0*/
                
                case 0x2A:
                /* IL_2A: ret  YieldGenerators.cs:16707566:0*/
                return ;
            }
        }
    };;
    /* System.Object <Select>d__0`2.System.Collections.IEnumerator.get_Current()*/
    asm.x600001c = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000009"])[1];
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld TResult <>2__current */
        /* IL_06: box TResult */
        /* IL_0B: stloc.0  */
        loc0 = BLR.box((arg0)["_Select_d__0_2<>2__current"],t0);
        /* IL_0E: ldloc.0  */
        /* IL_0F: ret  */
        return loc0;
    };;
    /* System.Void <Select>d__0`2.<>m__Finally3()*/
    asm.x600001e_init = function ()
    {
        ((asm0)["System.IDisposable"]().init)();
        asm.x600001e = asm.x600001e_;
    };;
    asm.x600001e = function (arg0)
    {
        asm.x600001e_init.apply(this,arguments);
        return asm.x600001e_.apply(this,arguments);
    };;
    asm.x600001e_ = function __m__Finally3(arg0)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        t0 = (asm0)["System.IDisposable"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldc.i4.m1  */
                /* IL_02: stfld Int32 <>1__state */
                (arg0)["_Select_d__0_2<>1__state"] = (-1|0);
                /* IL_07: ldarg.0  */
                /* IL_08: ldfld IEnumerator`1 <>7__wrap2 */
                /* IL_0D: ldnull  */
                /* IL_0F: ceq  */
                /* IL_10: stloc.0  */
                loc0 = (((arg0)["<>7__wrap2"] === null) ? (1) : (0));
                /* IL_11: ldloc.0  */
                /* IL_12: brtrue.s IL_20 */
                
                if (loc0){
                    __pos__ = 0x20;
                    continue;
                }
                /* IL_14: ldarg.0  */
                /* IL_15: ldfld IEnumerator`1 <>7__wrap2 */
                /* IL_1A: callvirt Void Dispose() */
                ((((arg0)["<>7__wrap2"].ifacemap)[t0].x60000c7)())(BLR.convert_box_to_pointer_as_needed((arg0)["<>7__wrap2"]));
                /* IL_1F: nop  */
                
                case 0x20:
                /* IL_20: ret  */
                return ;
            }
        }
    };
    /*  <Select>d__0`2..ctor(Int32)*/
    asm.x600001d = function _ctor(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ldarg.0  */
        /* IL_07: ldarg.1  */
        /* IL_08: stfld Int32 <>1__state */
        (arg0)["_Select_d__0_2<>1__state"] = arg1;
        /* IL_0D: ldarg.0  */
        /* IL_0E: call Int32 get_CurrentManagedThreadId() */
        /* IL_13: stfld Int32 <>l__initialThreadId */
        (arg0)["_Select_d__0_2<>l__initialThreadId"] = asm0.x60000b3();
        /* IL_18: ret  */
        return ;
    };;
    /* System.Collections.Generic.IEnumerator`1[T] <Where>d__6`1.System.Collections.Generic.IEnumerable<T>.GetEnumerator()*/
    asm.x600001f_init = function ()
    {
        ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
        ((asm1)["E+<Where>d__6`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0]).init)();
    };;
    asm.x600001f = function (arg0)
    {
        asm.x600001f_init.apply(this,arguments);
        return asm.x600001f_.apply(this,arguments);
    };;
    asm.x600001f_ = function System_Collections_Generic_IEnumerable_T__GetEnumerator(arg0)
    {
        var t0;
        var t1;
        var t2;
        var st_08;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc2;
        var loc0;
        var loc1;
        t0 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
        t1 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0];
        t2 = (asm1)["E+<Where>d__6`1"](t1);
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: call Int32 get_CurrentManagedThreadId() */
                /* IL_05: ldarg.0  */
                /* IL_06: ldfld Int32 <>l__initialThreadId */
                /* IL_0B: bne.un.s IL_1C */
                
                if (BLR.unsigned_value(asm0.x60000b3()) != BLR.unsigned_value((arg0)["_Where_d__6_1<>l__initialThreadId"])){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_0D: ldarg.0  */
                /* IL_0E: ldfld Int32 <>1__state */
                /* IL_13: ldc.i4.s 254 */
                /* IL_16: ceq  */
                /* IL_17: ldc.i4.0  */
                /* IL_19: ceq  */
                st_08 = (((((arg0)["_Where_d__6_1<>1__state"] === (-2|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1A: br.s IL_1D */
                __pos__ = 0x1D;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.1  */
                st_08 = (1|0);
                case 0x1D:
                /* IL_1D: nop  */
                
                /* IL_1E: stloc.2  */
                loc2 = st_08;
                /* IL_1F: ldloc.2  */
                /* IL_20: brtrue.s IL_2D */
                
                if (loc2){
                    __pos__ = 0x2D;
                    continue;
                }
                /* IL_22: ldarg.0  */
                /* IL_23: ldc.i4.0  */
                /* IL_24: stfld Int32 <>1__state */
                (arg0)["_Where_d__6_1<>1__state"] = (0|0);
                /* IL_29: ldarg.0  */
                /* IL_2A: stloc.0  */
                loc0 = arg0;
                /* IL_2B: br.s IL_34 */
                __pos__ = 0x34;
                continue;
                case 0x2D:
                /* IL_2D: ldc.i4.0  */
                /* IL_2E: newobj Void .ctor(System.Int32) */
                /* IL_33: stloc.0  */
                loc0 = BLR.newobj(t2,asm1.x6000026,[null, (0|0)]);
                case 0x34:
                /* IL_34: ldloc.0  */
                /* IL_35: ldarg.0  */
                /* IL_36: ldfld IEnumerable`1 <>3__source */
                /* IL_3B: stfld IEnumerable`1 source */
                loc0.source = (arg0)["<>3__source"];
                /* IL_40: ldloc.0  */
                /* IL_41: ldarg.0  */
                /* IL_42: ldfld Func`2 <>3__predicate */
                /* IL_47: stfld Func`2 predicate */
                loc0.predicate = (arg0)["<>3__predicate"];
                /* IL_4C: ldloc.0  */
                /* IL_4D: stloc.1  */
                loc1 = loc0;
                /* IL_50: ldloc.1  */
                /* IL_51: ret  */
                return loc1;
            }
        }
    };
    /* System.Collections.IEnumerator <Where>d__6`1.System.Collections.IEnumerable.GetEnumerator()*/
    asm.x6000020 = function System_Collections_IEnumerable_GetEnumerator(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call IEnumerator`1 System.Collections.Generic.IEnumerable<T>.GetEnumerator() */
        /* IL_06: stloc.0  */
        loc0 = asm1.x600001f(arg0);
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /* System.Boolean <Where>d__6`1.MoveNext()*/
    asm.x6000021_init = function ()
    {
        ((asm0)["System.Collections.Generic.IEnumerable`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0]).init)();
        ((asm0)["System.Collections.Generic.IEnumerator`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0]).init)();
        ((asm0)["System.Collections.IEnumerator"]().init)();
    };;
    asm.x6000021 = function (arg0)
    {
        asm.x6000021_init.apply(this,arguments);
        return asm.x6000021_.apply(this,arguments);
    };;
    asm.x6000021_ = function MoveNext(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var in_block_1;
        var __finally_continuation_1__;
        var loc1;
        var __switch_value__;
        var __jmp__;
        var loc2;
        var loc0;
        var __error_handled_1__;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0];
        t1 = (asm0)["System.Collections.Generic.IEnumerable`1"](t0);
        t2 = (asm0)["System.Collections.Generic.IEnumerator`1"](t0);
        t3 = (asm0)["System.Collections.IEnumerator"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 0;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x0:
                            /* IL_00: ldarg.0  */
                            /* IL_01: ldfld Int32 <>1__state */
                            /* IL_06: stloc.1  */
                            loc1 = (arg0)["_Where_d__6_1<>1__state"];
                            /* IL_07: ldloc.1  */
                            /* IL_08: switch System.Int32[] */
                            __switch_value__ = BLR.unsigned_value(loc1);
                            
                            if (__switch_value__ >= 0x3){
                                __pos__ = 0x19;
                                continue;
                            }
                            __jmp__ = [
                                0x4,
                                0x6,
                                0x2
                            ];
                            __pos__ = (0x19 + (__jmp__)[__switch_value__]);
                            continue;
                            case 0x19:
                            /* IL_19: br.s IL_1F */
                            __pos__ = 0x1F;
                            continue;
                            case 0x1B:
                            /* IL_1B: br.s IL_87 */
                            __pos__ = 0x87;
                            continue;
                            case 0x1D:
                            /* IL_1D: br.s IL_24 */
                            __pos__ = 0x24;
                            continue;
                            case 0x1F:
                            /* IL_1F: br IL_A5 */
                            __pos__ = 0xA5;
                            continue;
                            case 0x24:
                            /* IL_24: ldarg.0  */
                            /* IL_25: ldc.i4.m1  */
                            /* IL_26: stfld Int32 <>1__state */
                            (arg0)["_Where_d__6_1<>1__state"] = (-1|0);
                            /* IL_2B: nop  YieldGenerators.cs:14:5*/
                            
                            /* IL_2C: nop  YieldGenerators.cs:15:9*/
                            
                            /* IL_2D: ldarg.0  */
                            /* IL_2E: ldarg.0  */
                            /* IL_2F: ldfld IEnumerable`1 source */
                            /* IL_34: callvirt IEnumerator`1 GetEnumerator() */
                            /* IL_39: stfld IEnumerator`1 <>7__wrap8 */
                            (arg0)["<>7__wrap8"] = ((((arg0.source.ifacemap)[t1])[t0].x600000e)())(BLR.convert_box_to_pointer_as_needed(arg0.source));
                            /* IL_3E: ldarg.0  */
                            /* IL_3F: ldc.i4.1  */
                            /* IL_40: stfld Int32 <>1__state */
                            (arg0)["_Where_d__6_1<>1__state"] = (1|0);
                            /* IL_45: br.s IL_8E */
                            __pos__ = 0x8E;
                            continue;
                            case 0x47:
                            /* IL_47: ldarg.0  */
                            /* IL_48: ldarg.0  */
                            /* IL_49: ldfld IEnumerator`1 <>7__wrap8 */
                            /* IL_4E: callvirt T get_Current() */
                            /* IL_53: stfld T <s>5__7 */
                            (arg0)["<s>5__7"] = (((((arg0)["<>7__wrap8"].ifacemap)[t2])[t0].x6000122)())(BLR.convert_box_to_pointer_as_needed((arg0)["<>7__wrap8"]));
                            /* IL_58: ldarg.0  */
                            /* IL_59: ldfld Func`2 predicate */
                            /* IL_5E: ldarg.0  */
                            /* IL_5F: ldfld T <s>5__7 */
                            /* IL_64: callvirt Boolean Invoke(T) */
                            /* IL_69: ldc.i4.0  */
                            /* IL_6B: ceq  */
                            /* IL_6C: stloc.2  */
                            loc2 = ((arg0.predicate._methodPtr.apply(null,((arg0.predicate._target) ? ([
                                    arg0.predicate._target,
                                    (arg0)["<s>5__7"]
                                ]) : ([
                                    (arg0)["<s>5__7"]
                                ]))) === (0|0)) ? (1) : (0));
                            /* IL_6D: ldloc.2  */
                            /* IL_6E: brtrue.s IL_8E */
                            
                            if (loc2){
                                __pos__ = 0x8E;
                                continue;
                            }
                            /* IL_70: ldarg.0  */
                            /* IL_71: ldarg.0  */
                            /* IL_72: ldfld T <s>5__7 */
                            /* IL_77: stfld T <>2__current */
                            (arg0)["_Where_d__6_1<>2__current"] = (arg0)["<s>5__7"];
                            /* IL_7C: ldarg.0  */
                            /* IL_7D: ldc.i4.2  */
                            /* IL_7E: stfld Int32 <>1__state */
                            (arg0)["_Where_d__6_1<>1__state"] = (2|0);
                            /* IL_83: ldc.i4.1  */
                            /* IL_84: stloc.0  */
                            loc0 = (1|0);
                            /* IL_85: leave.s IL_B1 */
                            in_block_1 = false;
                            __pos__ = 0xB1;
                            break;
                            case 0x87:
                            /* IL_87: ldarg.0  */
                            /* IL_88: ldc.i4.1  */
                            /* IL_89: stfld Int32 <>1__state */
                            (arg0)["_Where_d__6_1<>1__state"] = (1|0);
                            case 0x8E:
                            /* IL_8E: ldarg.0  */
                            /* IL_8F: ldfld IEnumerator`1 <>7__wrap8 */
                            /* IL_94: callvirt Boolean MoveNext() */
                            /* IL_99: stloc.2  */
                            loc2 = ((((arg0)["<>7__wrap8"].ifacemap)[t3].x6000120)())(BLR.convert_box_to_pointer_as_needed((arg0)["<>7__wrap8"]));
                            /* IL_9A: ldloc.2  */
                            /* IL_9B: brtrue.s IL_47 */
                            
                            if (loc2){
                                __pos__ = 0x47;
                                continue;
                            }
                            /* IL_9D: ldarg.0  */
                            /* IL_9E: call Void <>m__Finally9() */
                            asm1.x6000027(arg0);
                            /* IL_A3: nop  */
                            
                            /* IL_A4: nop  YieldGenerators.cs:18:5*/
                            
                            case 0xA5:
                            /* IL_A5: ldc.i4.0  */
                            /* IL_A6: stloc.0  */
                            loc0 = (0|0);
                            /* IL_A7: leave.s IL_B1 */
                            in_block_1 = false;
                            __pos__ = 0xB1;
                            break;
                        }
                    }
                }
                
                catch (__error__) {
                    __error_handled_1__ = false;
                    
                    if ((!(__error_handled_1__))){
                        throw __error__;
                    }
                    
                    if (__error_handled_0__ === false){
                        /* IL_A9: ldarg.0  */
                        /* IL_AA: call Void System.IDisposable.Dispose() */
                        asm1.x6000024(arg0);
                        /* IL_AF: nop  */
                        
                        /* IL_B0: endfinally  */
                        in_block_1 = false;
                        throw __error__;
                    }
                }
                break;
                case 0xB1:
                /* IL_B1: nop  YieldGenerators.cs:16707566:0*/
                
                /* IL_B2: ldloc.0  */
                /* IL_B3: ret  */
                return loc0;
            }
        }
    };
    /* T <Where>d__6`1.System.Collections.Generic.IEnumerator<T>.get_Current()*/
    asm.x6000022 = function System_Collections_Generic_IEnumerator_T__get_Current(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld T <>2__current */
        /* IL_06: stloc.0  */
        loc0 = (arg0)["_Where_d__6_1<>2__current"];
        /* IL_09: ldloc.0  */
        /* IL_0A: ret  */
        return loc0;
    };;
    /* System.Void <Where>d__6`1.System.Collections.IEnumerator.Reset()*/
    asm.x6000023_init = function ()
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x6000023 = asm.x6000023_;
    };;
    asm.x6000023 = function (arg0)
    {
        asm.x6000023_init.apply(this,arguments);
        return asm.x6000023_.apply(this,arguments);
    };;
    asm.x6000023_ = function System_Collections_IEnumerator_Reset(arg0)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.NotSupportedException"]();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor() */
        /* IL_05: throw  */
        throw BLR.newobj(t0,asm0.x6000126,[null]);
    };
    /* System.Void <Where>d__6`1.System.IDisposable.Dispose()*/
    asm.x6000024 = function System_IDisposable_Dispose(arg0)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var __switch_value__;
        var __jmp__;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld Int32 <>1__state */
                /* IL_06: stloc.0  */
                loc0 = (arg0)["_Where_d__6_1<>1__state"];
                /* IL_07: ldloc.0  */
                /* IL_08: ldc.i4.1  */
                /* IL_09: sub  */
                /* IL_0A: switch System.Int32[] */
                __switch_value__ = BLR.unsigned_value((loc0 - (1|0)) | (0|0));
                
                if (__switch_value__ >= 0x2){
                    __pos__ = 0x17;
                    continue;
                }
                __jmp__ = [
                    0x4,
                    0x2
                ];
                __pos__ = (0x17 + (__jmp__)[__switch_value__]);
                continue;
                case 0x17:
                /* IL_17: br.s IL_1D */
                __pos__ = 0x1D;
                continue;
                case 0x19:
                /* IL_19: br.s IL_1F */
                __pos__ = 0x1F;
                continue;
                case 0x1B:
                /* IL_1B: br.s IL_1F */
                __pos__ = 0x1F;
                continue;
                case 0x1D:
                /* IL_1D: br.s IL_2A */
                __pos__ = 0x2A;
                continue;
                case 0x1F:
                
                try {
                    /* IL_1F: leave.s IL_29 */
                    in_block_1 = false;
                    __pos__ = 0x29;
                }
                
                finally {
                    /* IL_21: ldarg.0  */
                    /* IL_22: call Void <>m__Finally9() */
                    asm1.x6000027(arg0);
                    /* IL_27: nop  */
                    
                    /* IL_28: endfinally  */
                    in_block_1 = false;
                }
                break;
                case 0x29:
                /* IL_29: nop  YieldGenerators.cs:16707566:0*/
                
                case 0x2A:
                /* IL_2A: ret  YieldGenerators.cs:16707566:0*/
                return ;
            }
        }
    };;
    /* System.Object <Where>d__6`1.System.Collections.IEnumerator.get_Current()*/
    asm.x6000025 = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0];
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld T <>2__current */
        /* IL_06: box T */
        /* IL_0B: stloc.0  */
        loc0 = BLR.box((arg0)["_Where_d__6_1<>2__current"],t0);
        /* IL_0E: ldloc.0  */
        /* IL_0F: ret  */
        return loc0;
    };;
    /* System.Void <Where>d__6`1.<>m__Finally9()*/
    asm.x6000027_init = function ()
    {
        ((asm0)["System.IDisposable"]().init)();
        asm.x6000027 = asm.x6000027_;
    };;
    asm.x6000027 = function (arg0)
    {
        asm.x6000027_init.apply(this,arguments);
        return asm.x6000027_.apply(this,arguments);
    };;
    asm.x6000027_ = function __m__Finally9(arg0)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        t0 = (asm0)["System.IDisposable"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldc.i4.m1  */
                /* IL_02: stfld Int32 <>1__state */
                (arg0)["_Where_d__6_1<>1__state"] = (-1|0);
                /* IL_07: ldarg.0  */
                /* IL_08: ldfld IEnumerator`1 <>7__wrap8 */
                /* IL_0D: ldnull  */
                /* IL_0F: ceq  */
                /* IL_10: stloc.0  */
                loc0 = (((arg0)["<>7__wrap8"] === null) ? (1) : (0));
                /* IL_11: ldloc.0  */
                /* IL_12: brtrue.s IL_20 */
                
                if (loc0){
                    __pos__ = 0x20;
                    continue;
                }
                /* IL_14: ldarg.0  */
                /* IL_15: ldfld IEnumerator`1 <>7__wrap8 */
                /* IL_1A: callvirt Void Dispose() */
                ((((arg0)["<>7__wrap8"].ifacemap)[t0].x60000c7)())(BLR.convert_box_to_pointer_as_needed((arg0)["<>7__wrap8"]));
                /* IL_1F: nop  */
                
                case 0x20:
                /* IL_20: ret  */
                return ;
            }
        }
    };
    /*  <Where>d__6`1..ctor(Int32)*/
    asm.x6000026 = function _ctor(arg0, arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ldarg.0  */
        /* IL_07: ldarg.1  */
        /* IL_08: stfld Int32 <>1__state */
        (arg0)["_Where_d__6_1<>1__state"] = arg1;
        /* IL_0D: ldarg.0  */
        /* IL_0E: call Int32 get_CurrentManagedThreadId() */
        /* IL_13: stfld Int32 <>l__initialThreadId */
        (arg0)["_Where_d__6_1<>l__initialThreadId"] = asm0.x60000b3();
        /* IL_18: ret  */
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
    asm.E = BLR.declare_type(
        "E",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"E",false,false,false,false,false,[
                    [
                        (asm0)["System.Runtime.CompilerServices.ExtensionAttribute"](),
                        asm0.x600015d
                    ]
                ],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.P = BLR.declare_type(
        "P",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"P",false,false,false,false,false,[],[
                    [asm1, "x600000e", "get_Prop"],
                    [asm1, "x600000f", "set_Prop"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            (this.prototype)["P<Prop>k__BackingField"] = 0;
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            (this)["CS$<>9__CachedAnonymousMethodDelegate8"] = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegate9"] = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegatea"] = null;
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["E+<Select>d__0`2"] = BLR.declare_type(
        "_Select_d__0_2",
        ["T", "TResult"],
        function (T, TResult)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T, TResult)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"E+<Select>d__0`2",false,false,false,true,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            (this.GenericArguments)["asm1.t2000009"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm1.t2000009<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
            BLR.declare_virtual(this,"asm1.x6000016","asm1.x6000016");
            BLR.declare_virtual(this,"asm1.x6000017","asm1.x6000017");
            BLR.declare_virtual(this,"asm1.x6000018","asm1.x6000018");
            BLR.declare_virtual(this,"asm1.x6000019","asm1.x6000019");
            BLR.declare_virtual(this,"asm1.x600001a","asm1.x600001a");
            BLR.declare_virtual(this,"asm1.x600001b","asm1.x600001b");
            BLR.declare_virtual(this,"asm1.x600001c","asm1.x600001c");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerable`1"](TResult), TResult],
                {
                    'x600000e': function (){ return asm1.x6000016;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                {
                    'x600000d': function (){ return asm1.x6000017;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerator`1"](TResult), TResult],
                {
                    'x6000122': function (){ return asm1.x6000019;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                {
                    'x600011f': function (){ return asm1.x600001c;},
                    'x6000120': function (){ return asm1.x6000018;},
                    'x6000121': function (){ return asm1.x600001a;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x60000c7': function (){ return asm1.x600001b;}
                });
            (this.prototype)["_Select_d__0_2<>2__current"] = ((TResult.IsValueType) ? (((TResult.IsPrimitive) ? (0) : (new TResult()))) : (null));
            (this.prototype)["_Select_d__0_2<>1__state"] = 0;
            (this.prototype)["_Select_d__0_2<>l__initialThreadId"] = 0;
            this.prototype.source = null;
            (this.prototype)["<>3__source"] = null;
            this.prototype.selector = null;
            (this.prototype)["<>3__selector"] = null;
            (this.prototype)["<s>5__1"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            (this.prototype)["<>7__wrap2"] = null;
        });
    (asm)["E+<Where>d__6`1"] = BLR.declare_type(
        "_Where_d__6_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"E+<Where>d__6`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            (this.GenericArguments)["asm1.t200000a"] = [T];
            this.GenericTypeMetadataName = ("asm1.t200000a<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm1.x600001f","asm1.x600001f");
            BLR.declare_virtual(this,"asm1.x6000020","asm1.x6000020");
            BLR.declare_virtual(this,"asm1.x6000021","asm1.x6000021");
            BLR.declare_virtual(this,"asm1.x6000022","asm1.x6000022");
            BLR.declare_virtual(this,"asm1.x6000023","asm1.x6000023");
            BLR.declare_virtual(this,"asm1.x6000024","asm1.x6000024");
            BLR.declare_virtual(this,"asm1.x6000025","asm1.x6000025");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerable`1"](T), T],
                {
                    'x600000e': function (){ return asm1.x600001f;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                {
                    'x600000d': function (){ return asm1.x6000020;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerator`1"](T), T],
                {
                    'x6000122': function (){ return asm1.x6000022;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                {
                    'x600011f': function (){ return asm1.x6000025;},
                    'x6000120': function (){ return asm1.x6000021;},
                    'x6000121': function (){ return asm1.x6000023;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x60000c7': function (){ return asm1.x6000024;}
                });
            (this.prototype)["_Where_d__6_1<>2__current"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            (this.prototype)["_Where_d__6_1<>1__state"] = 0;
            (this.prototype)["_Where_d__6_1<>l__initialThreadId"] = 0;
            this.prototype.source = null;
            (this.prototype)["<>3__source"] = null;
            this.prototype.predicate = null;
            (this.prototype)["<>3__predicate"] = null;
            (this.prototype)["<s>5__7"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            (this.prototype)["<>7__wrap8"] = null;
        });
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
