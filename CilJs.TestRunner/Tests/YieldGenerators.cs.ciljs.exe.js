var asm1; (function (asm)
{
    asm.FullName = "YieldGenerators.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
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
    /* static System.Collections.Generic.IEnumerable`1[TResult] E.Select<T,TResult>(IEnumerable`1,Func`2)*/
    asm.x600000a_init = function (T,TResult)
    {
        return function ()
        {
            ((asm1)["E+<Select>d__0`2"](T,TResult).init)();
        };
    };;
    asm.x600000a = function (T,TResult)
    {
        return function (arg0,arg1)
        {
            (asm.x600000a_init(T,TResult).apply)(this,arguments);
            return (asm.x600000a_(T,TResult).apply)(this,arguments);
        };
    };;
    asm.x600000a_ = function (T,TResult)
    {
        return function Select(arg0,arg1)
        {
            var t0;
            var t1;
            var t2;
            var __pos__;
            var loc0;
            t0 = T;
            t1 = TResult;
            t2 = (asm1)["E+<Select>d__0`2"](t0,t1);
            __pos__ = 0x0;
            /* IL_00: ldc.i4.s 254*/
            /* IL_02: newobj Void .ctor(System.Int32)*/
            /* IL_07: stloc.0 */
            loc0 = CILJS.newobj(t2,asm1.x600001d,[null, (-2|0)]);
            /* IL_08: ldloc.0 */
            /* IL_09: ldarg.0 */
            /* IL_0A: stfld IKVM.Reflection.GenericFieldInstance*/
            (loc0)["<>3__source"] = arg0;
            /* IL_0F: ldloc.0 */
            /* IL_10: ldarg.1 */
            /* IL_11: stfld IKVM.Reflection.GenericFieldInstance*/
            (loc0)["<>3__selector"] = arg1;
            /* IL_16: ldloc.0 */
            /* IL_17: ret */
            return loc0;
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
        return function (arg0,arg1)
        {
            (asm.x600000b_init(T).apply)(this,arguments);
            return (asm.x600000b_(T).apply)(this,arguments);
        };
    };;
    asm.x600000b_ = function (T)
    {
        return function Where(arg0,arg1)
        {
            var t0;
            var t1;
            var __pos__;
            var loc0;
            t0 = T;
            t1 = (asm1)["E+<Where>d__6`1"](t0);
            __pos__ = 0x0;
            /* IL_00: ldc.i4.s 254*/
            /* IL_02: newobj Void .ctor(System.Int32)*/
            /* IL_07: stloc.0 */
            loc0 = CILJS.newobj(t1,asm1.x6000026,[null, (-2|0)]);
            /* IL_08: ldloc.0 */
            /* IL_09: ldarg.0 */
            /* IL_0A: stfld IKVM.Reflection.GenericFieldInstance*/
            (loc0)["<>3__source"] = arg0;
            /* IL_0F: ldloc.0 */
            /* IL_10: ldarg.1 */
            /* IL_11: stfld IKVM.Reflection.GenericFieldInstance*/
            (loc0)["<>3__predicate"] = arg1;
            /* IL_16: ldloc.0 */
            /* IL_17: ret */
            return loc0;
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
            var loc3;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc2;
            var in_block_1;
            var __finally_continuation_1__;
            var loc0;
            var loc1;
            t0 = T;
            t1 = (asm0)["System.Collections.Generic.IEnumerable`1"](t0);
            t2 = (asm0)["System.Collections.Generic.IEnumerator`1"](t0);
            t3 = (asm0)["System.Collections.IEnumerator"]();
            t4 = (asm0)["System.IDisposable"]();
            loc3 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: ldarg.0 */
                    /* IL_01: callvirt IEnumerator`1 GetEnumerator()*/
                    /* IL_06: stloc.2 */
                    loc2 = ((((arg0.ifacemap)[t1])[t0].x600000e)())(CILJS.convert_box_to_pointer_as_needed(arg0));
                    
                    try {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        __pos__ = 7;
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x7:
                                /* IL_07: br.s IL_14*/
                                __pos__ = 0x14;
                                continue;
                                case 0x9:
                                /* IL_09: ldloc.2 */
                                /* IL_0A: callvirt T get_Current()*/
                                /* IL_0F: stloc.0 */
                                loc0 = ((((loc2.ifacemap)[t2])[t0].x6000122)())(CILJS.convert_box_to_pointer_as_needed(loc2));
                                /* IL_10: ldloc.0 */
                                /* IL_11: stloc.1 */
                                loc1 = loc0;
                                /* IL_12: leave.s IL_32*/
                                in_block_1 = false;
                                __pos__ = 0x32;
                                break;
                                case 0x14:
                                /* IL_14: ldloc.2 */
                                /* IL_15: callvirt Boolean MoveNext()*/
                                /* IL_1A: brtrue.s IL_09*/
                                
                                if ((((loc2.ifacemap)[t3].x6000120)())(CILJS.convert_box_to_pointer_as_needed(loc2))){
                                    __pos__ = 0x9;
                                    continue;
                                }
                                /* IL_1C: leave.s IL_28*/
                                in_block_1 = false;
                                __pos__ = 0x28;
                                break;
                            }
                        }
                    }
                    
                    finally {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        __pos__ = 30;
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x1E:
                                /* IL_1E: ldloc.2 */
                                /* IL_1F: brfalse.s IL_27*/
                                
                                if ((!(loc2))){
                                    __pos__ = 0x27;
                                    continue;
                                }
                                /* IL_21: ldloc.2 */
                                /* IL_22: callvirt Void Dispose()*/
                                (((loc2.ifacemap)[t4].x60000c7)())(CILJS.convert_box_to_pointer_as_needed(loc2));
                                case 0x27:
                                /* IL_27: endfinally */
                                in_block_1 = false;
                                __pos__ = __finally_continuation_1__;
                                break;
                            }
                        }
                    }
                    break;
                    case 0x28:
                    /* IL_28: ldloca.s 3*/
                    /* IL_2B: initobj T*/
                    loc3 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
                    /* IL_30: ldloc.3 */
                    /* IL_31: ret */
                    return loc3;
                    case 0x32:
                    /* IL_32: ldloc.1 */
                    /* IL_33: ret */
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
            var loc1;
            var in_block_1;
            var __finally_continuation_1__;
            var loc0;
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
                    /* IL_00: ldarg.0 */
                    /* IL_01: callvirt IEnumerator`1 GetEnumerator()*/
                    /* IL_06: stloc.1 */
                    loc1 = ((((arg0.ifacemap)[t1])[t0].x600000e)())(CILJS.convert_box_to_pointer_as_needed(arg0));
                    
                    try {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        __pos__ = 7;
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x7:
                                /* IL_07: br.s IL_14*/
                                __pos__ = 0x14;
                                continue;
                                case 0x9:
                                /* IL_09: ldloc.1 */
                                /* IL_0A: callvirt T get_Current()*/
                                /* IL_0F: pop */
                                ((((loc1.ifacemap)[t2])[t0].x6000122)())(CILJS.convert_box_to_pointer_as_needed(loc1));
                                /* IL_10: ldc.i4.1 */
                                /* IL_11: stloc.0 */
                                loc0 = (1|0);
                                /* IL_12: leave.s IL_2A*/
                                in_block_1 = false;
                                __pos__ = 0x2A;
                                break;
                                case 0x14:
                                /* IL_14: ldloc.1 */
                                /* IL_15: callvirt Boolean MoveNext()*/
                                /* IL_1A: brtrue.s IL_09*/
                                
                                if ((((loc1.ifacemap)[t3].x6000120)())(CILJS.convert_box_to_pointer_as_needed(loc1))){
                                    __pos__ = 0x9;
                                    continue;
                                }
                                /* IL_1C: leave.s IL_28*/
                                in_block_1 = false;
                                __pos__ = 0x28;
                                break;
                            }
                        }
                    }
                    
                    finally {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        __pos__ = 30;
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x1E:
                                /* IL_1E: ldloc.1 */
                                /* IL_1F: brfalse.s IL_27*/
                                
                                if ((!(loc1))){
                                    __pos__ = 0x27;
                                    continue;
                                }
                                /* IL_21: ldloc.1 */
                                /* IL_22: callvirt Void Dispose()*/
                                (((loc1.ifacemap)[t4].x60000c7)())(CILJS.convert_box_to_pointer_as_needed(loc1));
                                case 0x27:
                                /* IL_27: endfinally */
                                in_block_1 = false;
                                __pos__ = __finally_continuation_1__;
                                break;
                            }
                        }
                    }
                    break;
                    case 0x28:
                    /* IL_28: ldc.i4.0 */
                    /* IL_29: ret */
                    return (0|0);
                    case 0x2A:
                    /* IL_2A: ldloc.0 */
                    /* IL_2B: ret */
                    return loc0;
                }
            }
        };
    };
    /* System.Int32 P.get_Prop()*/
    asm.x600000e = function get_Prop(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["P<Prop>k__BackingField"];
    };;
    /* System.Void P.set_Prop(Int32)*/
    asm.x600000f = function set_Prop(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Int32 <Prop>k__BackingField*/
        (arg0)["P<Prop>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  P..ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
        CILJS.init_base_types();
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
                /* IL_00: ldc.i4.5 */
                /* IL_01: newarr P*/
                /* IL_06: stloc.0 */
                loc0 = CILJS.new_array(t0,(5|0));
                /* IL_07: ldloc.0 */
                st_05 = loc0;
                /* IL_08: ldc.i4.0 */
                st_06 = (0|0);
                /* IL_09: newobj Void .ctor()*/
                /* IL_0E: stloc.1 */
                loc1 = CILJS.newobj(t0,asm1.x6000010,[null]);
                /* IL_0F: ldloc.1 */
                st_03 = loc1;
                /* IL_10: ldc.i4.s 11*/
                st_04 = (11|0);
                /* IL_12: callvirt Void set_Prop(System.Int32)*/
                asm1.x600000f(st_03,st_04);
                /* IL_17: ldloc.1 */
                st_07 = loc1;
                /* IL_18: stelem.ref */
                CILJS.stelem_ref(st_05,st_06,st_07);
                /* IL_19: ldloc.0 */
                st_0B = loc0;
                /* IL_1A: ldc.i4.1 */
                st_0C = (1|0);
                /* IL_1B: newobj Void .ctor()*/
                /* IL_20: stloc.2 */
                loc2 = CILJS.newobj(t0,asm1.x6000010,[null]);
                /* IL_21: ldloc.2 */
                st_09 = loc2;
                /* IL_22: ldc.i4.s 22*/
                st_0A = (22|0);
                /* IL_24: callvirt Void set_Prop(System.Int32)*/
                asm1.x600000f(st_09,st_0A);
                /* IL_29: ldloc.2 */
                st_0D = loc2;
                /* IL_2A: stelem.ref */
                CILJS.stelem_ref(st_0B,st_0C,st_0D);
                /* IL_2B: ldloc.0 */
                st_11 = loc0;
                /* IL_2C: ldc.i4.2 */
                st_12 = (2|0);
                /* IL_2D: newobj Void .ctor()*/
                /* IL_32: stloc.3 */
                loc3 = CILJS.newobj(t0,asm1.x6000010,[null]);
                /* IL_33: ldloc.3 */
                st_0F = loc3;
                /* IL_34: ldc.i4.s 33*/
                st_10 = (33|0);
                /* IL_36: callvirt Void set_Prop(System.Int32)*/
                asm1.x600000f(st_0F,st_10);
                /* IL_3B: ldloc.3 */
                st_13 = loc3;
                /* IL_3C: stelem.ref */
                CILJS.stelem_ref(st_11,st_12,st_13);
                /* IL_3D: ldloc.0 */
                st_17 = loc0;
                /* IL_3E: ldc.i4.3 */
                st_18 = (3|0);
                /* IL_3F: newobj Void .ctor()*/
                /* IL_44: stloc.s 4*/
                loc4 = CILJS.newobj(t0,asm1.x6000010,[null]);
                /* IL_46: ldloc.s 4*/
                st_15 = loc4;
                /* IL_48: ldc.i4.s 44*/
                st_16 = (44|0);
                /* IL_4A: callvirt Void set_Prop(System.Int32)*/
                asm1.x600000f(st_15,st_16);
                /* IL_4F: ldloc.s 4*/
                st_19 = loc4;
                /* IL_51: stelem.ref */
                CILJS.stelem_ref(st_17,st_18,st_19);
                /* IL_52: ldloc.0 */
                st_1D = loc0;
                /* IL_53: ldc.i4.4 */
                st_1E = (4|0);
                /* IL_54: newobj Void .ctor()*/
                /* IL_59: stloc.s 5*/
                loc5 = CILJS.newobj(t0,asm1.x6000010,[null]);
                /* IL_5B: ldloc.s 5*/
                st_1B = loc5;
                /* IL_5D: ldc.i4.s 55*/
                st_1C = (55|0);
                /* IL_5F: callvirt Void set_Prop(System.Int32)*/
                asm1.x600000f(st_1B,st_1C);
                /* IL_64: ldloc.s 5*/
                st_1F = loc5;
                /* IL_66: stelem.ref */
                CILJS.stelem_ref(st_1D,st_1E,st_1F);
                /* IL_67: ldloc.0 */
                /* IL_68: call P FirstOrDefault[P](System.Collections.Generic.IEnumerable`1[P])*/
                /* IL_6D: callvirt Int32 get_Prop()*/
                /* IL_72: box System.Int32*/
                /* IL_77: call Void Log(System.Object)*/
                asm1.x6000001({
                        'boxed': asm1.x600000e((asm1.x600000c(asm1.P()))(loc0)),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    });
                /* IL_7C: ldloc.0 */
                /* IL_7D: call Boolean Any[P](System.Collections.Generic.IEnumerable`1[P])*/
                /* IL_82: box System.Boolean*/
                /* IL_87: call Void Log(System.Object)*/
                asm1.x6000001({
                        'boxed': (asm1.x600000d(asm1.P()))(loc0),
                        'type': t2,
                        'vtable': t2.prototype.vtable,
                        'ifacemap': t2.prototype.ifacemap
                    });
                /* IL_8C: ldloc.0 */
                st_2B = loc0;
                /* IL_8D: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate8*/
                /* IL_92: brtrue.s IL_A5*/
                
                if ((t3)["CS$<>9__CachedAnonymousMethodDelegate8"]){
                    __pos__ = 0xA5;
                    continue;
                }
                /* IL_94: ldnull */
                st_28 = null;
                /* IL_96: ldftn Int32 <Main>b__5(P)*/
                st_29 = asm1.x6000013;
                /* IL_9B: newobj Void .ctor(System.Object, System.IntPtr)*/
                st_2A = CILJS.newobj(t4,asm0.x60000b6,[null, st_28, st_29]);
                /* IL_A0: stsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate8*/
                (t3)["CS$<>9__CachedAnonymousMethodDelegate8"] = st_2A;
                case 0xA5:
                /* IL_A5: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate8*/
                st_2C = (t3)["CS$<>9__CachedAnonymousMethodDelegate8"];
                /* IL_AA: call IEnumerable`1 Select[P, System.Int32](System.Collections.Generic.IEnumerable`1[P], System.Func`2[P,System.Int32])*/
                st_2D = (asm1.x600000a(asm1.P(),(asm0)["System.Int32"]()))(st_2B,st_2C);
                /* IL_AF: call Int32 FirstOrDefault[System.Int32](System.Collections.Generic.IEnumerable`1[System.Int32])*/
                st_2E = (asm1.x600000c((asm0)["System.Int32"]()))(st_2D);
                /* IL_B4: box System.Int32*/
                st_2F = {
                    'boxed': st_2E,
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                };
                /* IL_B9: call Void Log(System.Object)*/
                asm1.x6000001(st_2F);
                /* IL_BE: ldloc.0 */
                st_34 = loc0;
                /* IL_BF: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate9*/
                /* IL_C4: brtrue.s IL_D7*/
                
                if ((t3)["CS$<>9__CachedAnonymousMethodDelegate9"]){
                    __pos__ = 0xD7;
                    continue;
                }
                /* IL_C6: ldnull */
                st_31 = null;
                /* IL_C8: ldftn Boolean <Main>b__6(P)*/
                st_32 = asm1.x6000014;
                /* IL_CD: newobj Void .ctor(System.Object, System.IntPtr)*/
                st_33 = CILJS.newobj(t5,asm0.x60000b6,[null, st_31, st_32]);
                /* IL_D2: stsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate9*/
                (t3)["CS$<>9__CachedAnonymousMethodDelegate9"] = st_33;
                case 0xD7:
                /* IL_D7: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate9*/
                st_35 = (t3)["CS$<>9__CachedAnonymousMethodDelegate9"];
                /* IL_DC: call IEnumerable`1 Where[P](System.Collections.Generic.IEnumerable`1[P], System.Func`2[P,System.Boolean])*/
                st_36 = (asm1.x600000b(asm1.P()))(st_34,st_35);
                /* IL_E1: call P FirstOrDefault[P](System.Collections.Generic.IEnumerable`1[P])*/
                st_37 = (asm1.x600000c(asm1.P()))(st_36);
                /* IL_E6: callvirt Int32 get_Prop()*/
                st_38 = asm1.x600000e(st_37);
                /* IL_EB: box System.Int32*/
                st_39 = {
                    'boxed': st_38,
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                };
                /* IL_F0: call Void Log(System.Object)*/
                asm1.x6000001(st_39);
                /* IL_F5: ldloc.0 */
                st_3E = loc0;
                /* IL_F6: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegatea*/
                /* IL_FB: brtrue.s IL_10E*/
                
                if ((t3)["CS$<>9__CachedAnonymousMethodDelegatea"]){
                    __pos__ = 0x10E;
                    continue;
                }
                /* IL_FD: ldnull */
                st_3B = null;
                /* IL_FF: ldftn Boolean <Main>b__7(P)*/
                st_3C = asm1.x6000015;
                /* IL_104: newobj Void .ctor(System.Object, System.IntPtr)*/
                st_3D = CILJS.newobj(t5,asm0.x60000b6,[null, st_3B, st_3C]);
                /* IL_109: stsfld Func`2 CS$<>9__CachedAnonymousMethodDelegatea*/
                (t3)["CS$<>9__CachedAnonymousMethodDelegatea"] = st_3D;
                case 0x10E:
                /* IL_10E: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegatea*/
                st_3F = (t3)["CS$<>9__CachedAnonymousMethodDelegatea"];
                /* IL_113: call IEnumerable`1 Where[P](System.Collections.Generic.IEnumerable`1[P], System.Func`2[P,System.Boolean])*/
                st_40 = (asm1.x600000b(asm1.P()))(st_3E,st_3F);
                /* IL_118: call P FirstOrDefault[P](System.Collections.Generic.IEnumerable`1[P])*/
                st_41 = (asm1.x600000c(asm1.P()))(st_40);
                /* IL_11D: call Void Log(System.Object)*/
                asm1.x6000001(st_41);
                /* IL_122: ret */
                return ;
            }
        }
    };
    /* static System.Int32 Program.<Main>b__5(P)*/
    asm.x6000013 = function _Main_b__5(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt Int32 get_Prop()*/
        /* IL_06: ret */
        return asm1.x600000e(arg0);
    };;
    /* static System.Boolean Program.<Main>b__6(P)*/
    asm.x6000014 = function _Main_b__6(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt Int32 get_Prop()*/
        /* IL_06: ldc.i4.s 22*/
        /* IL_09: ceq */
        /* IL_0A: ret */
        return ((asm1.x600000e(arg0) === (22|0)) ? (1) : (0));
    };;
    /* static System.Boolean Program.<Main>b__7(P)*/
    asm.x6000015 = function _Main_b__7(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt Int32 get_Prop()*/
        /* IL_06: ldc.i4.s 99*/
        /* IL_09: ceq */
        /* IL_0A: ret */
        return ((asm1.x600000e(arg0) === (99|0)) ? (1) : (0));
    };;
    /*  Program..ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Collections.Generic.IEnumerator`1[TResult] <Select>d__0`2.System.Collections.Generic.IEnumerable<TResult>.GetEnumerator()*/
    asm.x6000016_init = function ()
    {
        ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
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
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        t0 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
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
                /* IL_00: call Int32 get_CurrentManagedThreadId()*/
                /* IL_05: ldarg.0 */
                /* IL_06: ldfld Int32 <>l__initialThreadId*/
                /* IL_0B: bne.un.s IL_22*/
                
                if (CILJS.unsigned_value(asm0.x60000b3()) != CILJS.unsigned_value((arg0)["_Select_d__0_2<>l__initialThreadId"])){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_0D: ldarg.0 */
                /* IL_0E: ldfld Int32 <>1__state*/
                /* IL_13: ldc.i4.s 254*/
                /* IL_15: bne.un.s IL_22*/
                
                if (CILJS.unsigned_value((arg0)["_Select_d__0_2<>1__state"]) != CILJS.unsigned_value((-2|0))){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_17: ldarg.0 */
                /* IL_18: ldc.i4.0 */
                /* IL_19: stfld Int32 <>1__state*/
                (arg0)["_Select_d__0_2<>1__state"] = (0|0);
                /* IL_1E: ldarg.0 */
                /* IL_1F: stloc.0 */
                loc0 = arg0;
                /* IL_20: br.s IL_29*/
                __pos__ = 0x29;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: newobj Void .ctor(System.Int32)*/
                /* IL_28: stloc.0 */
                loc0 = CILJS.newobj(t3,asm1.x600001d,[null, (0|0)]);
                case 0x29:
                /* IL_29: ldloc.0 */
                /* IL_2A: ldarg.0 */
                /* IL_2B: ldfld IEnumerable`1 <>3__source*/
                /* IL_30: stfld IEnumerable`1 source*/
                loc0.source = (arg0)["<>3__source"];
                /* IL_35: ldloc.0 */
                /* IL_36: ldarg.0 */
                /* IL_37: ldfld Func`2 <>3__selector*/
                /* IL_3C: stfld Func`2 selector*/
                loc0.selector = (arg0)["<>3__selector"];
                /* IL_41: ldloc.0 */
                /* IL_42: ret */
                return loc0;
            }
        }
    };
    /* System.Collections.IEnumerator <Select>d__0`2.System.Collections.IEnumerable.GetEnumerator()*/
    asm.x6000017 = function System_Collections_IEnumerable_GetEnumerator(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call IEnumerator`1 System.Collections.Generic.IEnumerable<TResult>.GetEnumerator()*/
        /* IL_06: ret */
        return asm1.x6000016(arg0);
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
                            /* IL_00: ldarg.0 */
                            /* IL_01: ldfld Int32 <>1__state*/
                            /* IL_06: stloc.1 */
                            loc1 = (arg0)["_Select_d__0_2<>1__state"];
                            /* IL_07: ldloc.1 */
                            /* IL_08: switch System.Int32[]*/
                            __switch_value__ = CILJS.unsigned_value(loc1);
                            
                            if (__switch_value__ >= 0x3){
                                __pos__ = 0x19;
                                continue;
                            }
                            __jmp__ = [
                                0x2,
                                0x70,
                                0x56
                            ];
                            __pos__ = (0x19 + (__jmp__)[__switch_value__]);
                            continue;
                            case 0x19:
                            /* IL_19: br.s IL_89*/
                            __pos__ = 0x89;
                            continue;
                            case 0x1B:
                            /* IL_1B: ldarg.0 */
                            /* IL_1C: ldc.i4.m1 */
                            /* IL_1D: stfld Int32 <>1__state*/
                            (arg0)["_Select_d__0_2<>1__state"] = (-1|0);
                            /* IL_22: ldarg.0 */
                            /* IL_23: ldarg.0 */
                            /* IL_24: ldfld IEnumerable`1 source*/
                            /* IL_29: callvirt IEnumerator`1 GetEnumerator()*/
                            /* IL_2E: stfld IEnumerator`1 <>7__wrap2*/
                            (arg0)["<>7__wrap2"] = ((((arg0.source.ifacemap)[t1])[t0].x600000e)())(CILJS.convert_box_to_pointer_as_needed(arg0.source));
                            /* IL_33: ldarg.0 */
                            /* IL_34: ldc.i4.1 */
                            /* IL_35: stfld Int32 <>1__state*/
                            (arg0)["_Select_d__0_2<>1__state"] = (1|0);
                            /* IL_3A: br.s IL_76*/
                            __pos__ = 0x76;
                            continue;
                            case 0x3C:
                            /* IL_3C: ldarg.0 */
                            /* IL_3D: ldarg.0 */
                            /* IL_3E: ldfld IEnumerator`1 <>7__wrap2*/
                            /* IL_43: callvirt T get_Current()*/
                            /* IL_48: stfld T <s>5__1*/
                            (arg0)["<s>5__1"] = (((((arg0)["<>7__wrap2"].ifacemap)[t2])[t0].x6000122)())(CILJS.convert_box_to_pointer_as_needed((arg0)["<>7__wrap2"]));
                            /* IL_4D: ldarg.0 */
                            /* IL_4E: ldarg.0 */
                            /* IL_4F: ldfld Func`2 selector*/
                            /* IL_54: ldarg.0 */
                            /* IL_55: ldfld T <s>5__1*/
                            /* IL_5A: callvirt TResult Invoke(T)*/
                            /* IL_5F: stfld TResult <>2__current*/
                            (arg0)["_Select_d__0_2<>2__current"] = arg0.selector._methodPtr.apply(null,((arg0.selector._target) ? ([
                                    arg0.selector._target,
                                    (arg0)["<s>5__1"]
                                ]) : ([
                                    (arg0)["<s>5__1"]
                                ])));
                            /* IL_64: ldarg.0 */
                            /* IL_65: ldc.i4.2 */
                            /* IL_66: stfld Int32 <>1__state*/
                            (arg0)["_Select_d__0_2<>1__state"] = (2|0);
                            /* IL_6B: ldc.i4.1 */
                            /* IL_6C: stloc.0 */
                            loc0 = (1|0);
                            /* IL_6D: leave.s IL_94*/
                            in_block_1 = false;
                            __pos__ = 0x94;
                            break;
                            case 0x6F:
                            /* IL_6F: ldarg.0 */
                            /* IL_70: ldc.i4.1 */
                            /* IL_71: stfld Int32 <>1__state*/
                            (arg0)["_Select_d__0_2<>1__state"] = (1|0);
                            case 0x76:
                            /* IL_76: ldarg.0 */
                            /* IL_77: ldfld IEnumerator`1 <>7__wrap2*/
                            /* IL_7C: callvirt Boolean MoveNext()*/
                            /* IL_81: brtrue.s IL_3C*/
                            
                            if (((((arg0)["<>7__wrap2"].ifacemap)[t3].x6000120)())(CILJS.convert_box_to_pointer_as_needed((arg0)["<>7__wrap2"]))){
                                __pos__ = 0x3C;
                                continue;
                            }
                            /* IL_83: ldarg.0 */
                            /* IL_84: call Void <>m__Finally3()*/
                            asm1.x600001e(arg0);
                            case 0x89:
                            /* IL_89: ldc.i4.0 */
                            /* IL_8A: stloc.0 */
                            loc0 = (0|0);
                            /* IL_8B: leave.s IL_94*/
                            in_block_1 = false;
                            __pos__ = 0x94;
                            break;
                        }
                    }
                }
                
                catch (__error__){
                    __error_handled_1__ = false;
                    
                    if ((!(__error_handled_1__))){
                        throw __error__;
                    }
                    
                    if (__error_handled_0__ === false){
                        /* IL_8D: ldarg.0 */
                        /* IL_8E: call Void System.IDisposable.Dispose()*/
                        asm1.x600001b(arg0);
                        /* IL_93: endfinally */
                        in_block_1 = false;
                        throw __error__;
                    }
                }
                break;
                case 0x94:
                /* IL_94: ldloc.0 */
                /* IL_95: ret */
                return loc0;
            }
        }
    };
    /* TResult <Select>d__0`2.System.Collections.Generic.IEnumerator<TResult>.get_Current()*/
    asm.x6000019 = function System_Collections_Generic_IEnumerator_TResult__get_Current(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld TResult <>2__current*/
        /* IL_06: ret */
        return (arg0)["_Select_d__0_2<>2__current"];
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
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: throw */
        throw CILJS.newobj(t0,asm0.x6000126,[null]);
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
                /* IL_00: ldarg.0 */
                /* IL_01: ldfld Int32 <>1__state*/
                /* IL_06: stloc.0 */
                loc0 = (arg0)["_Select_d__0_2<>1__state"];
                /* IL_07: ldloc.0 */
                /* IL_08: ldc.i4.1 */
                /* IL_09: sub */
                /* IL_0A: switch System.Int32[]*/
                __switch_value__ = CILJS.unsigned_value((loc0 - (1|0)) | (0|0));
                
                if (__switch_value__ >= 0x2){
                    __pos__ = 0x17;
                    continue;
                }
                __jmp__ = [
                    0x1,
                    0x1
                ];
                __pos__ = (0x17 + (__jmp__)[__switch_value__]);
                continue;
                case 0x17:
                /* IL_17: ret */
                return ;
                case 0x18:
                
                try {
                    /* IL_18: leave.s IL_21*/
                    in_block_1 = false;
                    __pos__ = 0x21;
                }
                
                finally {
                    /* IL_1A: ldarg.0 */
                    /* IL_1B: call Void <>m__Finally3()*/
                    asm1.x600001e(arg0);
                    /* IL_20: endfinally */
                    in_block_1 = false;
                }
                break;
                case 0x21:
                /* IL_21: ret */
                return ;
            }
        }
    };;
    /* System.Object <Select>d__0`2.System.Collections.IEnumerator.get_Current()*/
    asm.x600001c = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        var __pos__;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t2000009"])[1];
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld TResult <>2__current*/
        /* IL_06: box TResult*/
        /* IL_0B: ret */
        return CILJS.box((arg0)["_Select_d__0_2<>2__current"],t0);
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
        t0 = (asm0)["System.IDisposable"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldc.i4.m1 */
                /* IL_02: stfld Int32 <>1__state*/
                (arg0)["_Select_d__0_2<>1__state"] = (-1|0);
                /* IL_07: ldarg.0 */
                /* IL_08: ldfld IEnumerator`1 <>7__wrap2*/
                /* IL_0D: brfalse.s IL_1A*/
                
                if ((!((arg0)["<>7__wrap2"]))){
                    __pos__ = 0x1A;
                    continue;
                }
                /* IL_0F: ldarg.0 */
                /* IL_10: ldfld IEnumerator`1 <>7__wrap2*/
                /* IL_15: callvirt Void Dispose()*/
                ((((arg0)["<>7__wrap2"].ifacemap)[t0].x60000c7)())(CILJS.convert_box_to_pointer_as_needed((arg0)["<>7__wrap2"]));
                case 0x1A:
                /* IL_1A: ret */
                return ;
            }
        }
    };
    /*  <Select>d__0`2..ctor(Int32)*/
    asm.x600001d = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld Int32 <>1__state*/
        (arg0)["_Select_d__0_2<>1__state"] = arg1;
        /* IL_0D: ldarg.0 */
        /* IL_0E: call Int32 get_CurrentManagedThreadId()*/
        /* IL_13: stfld Int32 <>l__initialThreadId*/
        (arg0)["_Select_d__0_2<>l__initialThreadId"] = asm0.x60000b3();
        /* IL_18: ret */
        return ;
    };;
    /* System.Collections.Generic.IEnumerator`1[T] <Where>d__6`1.System.Collections.Generic.IEnumerable<T>.GetEnumerator()*/
    asm.x600001f_init = function ()
    {
        ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
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
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        t0 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
        t1 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0];
        t2 = (asm1)["E+<Where>d__6`1"](t1);
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: call Int32 get_CurrentManagedThreadId()*/
                /* IL_05: ldarg.0 */
                /* IL_06: ldfld Int32 <>l__initialThreadId*/
                /* IL_0B: bne.un.s IL_22*/
                
                if (CILJS.unsigned_value(asm0.x60000b3()) != CILJS.unsigned_value((arg0)["_Where_d__6_1<>l__initialThreadId"])){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_0D: ldarg.0 */
                /* IL_0E: ldfld Int32 <>1__state*/
                /* IL_13: ldc.i4.s 254*/
                /* IL_15: bne.un.s IL_22*/
                
                if (CILJS.unsigned_value((arg0)["_Where_d__6_1<>1__state"]) != CILJS.unsigned_value((-2|0))){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_17: ldarg.0 */
                /* IL_18: ldc.i4.0 */
                /* IL_19: stfld Int32 <>1__state*/
                (arg0)["_Where_d__6_1<>1__state"] = (0|0);
                /* IL_1E: ldarg.0 */
                /* IL_1F: stloc.0 */
                loc0 = arg0;
                /* IL_20: br.s IL_29*/
                __pos__ = 0x29;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: newobj Void .ctor(System.Int32)*/
                /* IL_28: stloc.0 */
                loc0 = CILJS.newobj(t2,asm1.x6000026,[null, (0|0)]);
                case 0x29:
                /* IL_29: ldloc.0 */
                /* IL_2A: ldarg.0 */
                /* IL_2B: ldfld IEnumerable`1 <>3__source*/
                /* IL_30: stfld IEnumerable`1 source*/
                loc0.source = (arg0)["<>3__source"];
                /* IL_35: ldloc.0 */
                /* IL_36: ldarg.0 */
                /* IL_37: ldfld Func`2 <>3__predicate*/
                /* IL_3C: stfld Func`2 predicate*/
                loc0.predicate = (arg0)["<>3__predicate"];
                /* IL_41: ldloc.0 */
                /* IL_42: ret */
                return loc0;
            }
        }
    };
    /* System.Collections.IEnumerator <Where>d__6`1.System.Collections.IEnumerable.GetEnumerator()*/
    asm.x6000020 = function System_Collections_IEnumerable_GetEnumerator(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call IEnumerator`1 System.Collections.Generic.IEnumerable<T>.GetEnumerator()*/
        /* IL_06: ret */
        return asm1.x600001f(arg0);
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
                            /* IL_00: ldarg.0 */
                            /* IL_01: ldfld Int32 <>1__state*/
                            /* IL_06: stloc.1 */
                            loc1 = (arg0)["_Where_d__6_1<>1__state"];
                            /* IL_07: ldloc.1 */
                            /* IL_08: switch System.Int32[]*/
                            __switch_value__ = CILJS.unsigned_value(loc1);
                            
                            if (__switch_value__ >= 0x3){
                                __pos__ = 0x19;
                                continue;
                            }
                            __jmp__ = [
                                0x2,
                                0x78,
                                0x5E
                            ];
                            __pos__ = (0x19 + (__jmp__)[__switch_value__]);
                            continue;
                            case 0x19:
                            /* IL_19: br.s IL_91*/
                            __pos__ = 0x91;
                            continue;
                            case 0x1B:
                            /* IL_1B: ldarg.0 */
                            /* IL_1C: ldc.i4.m1 */
                            /* IL_1D: stfld Int32 <>1__state*/
                            (arg0)["_Where_d__6_1<>1__state"] = (-1|0);
                            /* IL_22: ldarg.0 */
                            /* IL_23: ldarg.0 */
                            /* IL_24: ldfld IEnumerable`1 source*/
                            /* IL_29: callvirt IEnumerator`1 GetEnumerator()*/
                            /* IL_2E: stfld IEnumerator`1 <>7__wrap8*/
                            (arg0)["<>7__wrap8"] = ((((arg0.source.ifacemap)[t1])[t0].x600000e)())(CILJS.convert_box_to_pointer_as_needed(arg0.source));
                            /* IL_33: ldarg.0 */
                            /* IL_34: ldc.i4.1 */
                            /* IL_35: stfld Int32 <>1__state*/
                            (arg0)["_Where_d__6_1<>1__state"] = (1|0);
                            /* IL_3A: br.s IL_7E*/
                            __pos__ = 0x7E;
                            continue;
                            case 0x3C:
                            /* IL_3C: ldarg.0 */
                            /* IL_3D: ldarg.0 */
                            /* IL_3E: ldfld IEnumerator`1 <>7__wrap8*/
                            /* IL_43: callvirt T get_Current()*/
                            /* IL_48: stfld T <s>5__7*/
                            (arg0)["<s>5__7"] = (((((arg0)["<>7__wrap8"].ifacemap)[t2])[t0].x6000122)())(CILJS.convert_box_to_pointer_as_needed((arg0)["<>7__wrap8"]));
                            /* IL_4D: ldarg.0 */
                            /* IL_4E: ldfld Func`2 predicate*/
                            /* IL_53: ldarg.0 */
                            /* IL_54: ldfld T <s>5__7*/
                            /* IL_59: callvirt Boolean Invoke(T)*/
                            /* IL_5E: brfalse.s IL_7E*/
                            
                            if ((!(arg0.predicate._methodPtr.apply(null,((arg0.predicate._target) ? ([
                                    arg0.predicate._target,
                                    (arg0)["<s>5__7"]
                                ]) : ([
                                    (arg0)["<s>5__7"]
                                ])))))){
                                __pos__ = 0x7E;
                                continue;
                            }
                            /* IL_60: ldarg.0 */
                            /* IL_61: ldarg.0 */
                            /* IL_62: ldfld T <s>5__7*/
                            /* IL_67: stfld T <>2__current*/
                            (arg0)["_Where_d__6_1<>2__current"] = (arg0)["<s>5__7"];
                            /* IL_6C: ldarg.0 */
                            /* IL_6D: ldc.i4.2 */
                            /* IL_6E: stfld Int32 <>1__state*/
                            (arg0)["_Where_d__6_1<>1__state"] = (2|0);
                            /* IL_73: ldc.i4.1 */
                            /* IL_74: stloc.0 */
                            loc0 = (1|0);
                            /* IL_75: leave.s IL_9C*/
                            in_block_1 = false;
                            __pos__ = 0x9C;
                            break;
                            case 0x77:
                            /* IL_77: ldarg.0 */
                            /* IL_78: ldc.i4.1 */
                            /* IL_79: stfld Int32 <>1__state*/
                            (arg0)["_Where_d__6_1<>1__state"] = (1|0);
                            case 0x7E:
                            /* IL_7E: ldarg.0 */
                            /* IL_7F: ldfld IEnumerator`1 <>7__wrap8*/
                            /* IL_84: callvirt Boolean MoveNext()*/
                            /* IL_89: brtrue.s IL_3C*/
                            
                            if (((((arg0)["<>7__wrap8"].ifacemap)[t3].x6000120)())(CILJS.convert_box_to_pointer_as_needed((arg0)["<>7__wrap8"]))){
                                __pos__ = 0x3C;
                                continue;
                            }
                            /* IL_8B: ldarg.0 */
                            /* IL_8C: call Void <>m__Finally9()*/
                            asm1.x6000027(arg0);
                            case 0x91:
                            /* IL_91: ldc.i4.0 */
                            /* IL_92: stloc.0 */
                            loc0 = (0|0);
                            /* IL_93: leave.s IL_9C*/
                            in_block_1 = false;
                            __pos__ = 0x9C;
                            break;
                        }
                    }
                }
                
                catch (__error__){
                    __error_handled_1__ = false;
                    
                    if ((!(__error_handled_1__))){
                        throw __error__;
                    }
                    
                    if (__error_handled_0__ === false){
                        /* IL_95: ldarg.0 */
                        /* IL_96: call Void System.IDisposable.Dispose()*/
                        asm1.x6000024(arg0);
                        /* IL_9B: endfinally */
                        in_block_1 = false;
                        throw __error__;
                    }
                }
                break;
                case 0x9C:
                /* IL_9C: ldloc.0 */
                /* IL_9D: ret */
                return loc0;
            }
        }
    };
    /* T <Where>d__6`1.System.Collections.Generic.IEnumerator<T>.get_Current()*/
    asm.x6000022 = function System_Collections_Generic_IEnumerator_T__get_Current(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld T <>2__current*/
        /* IL_06: ret */
        return (arg0)["_Where_d__6_1<>2__current"];
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
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: throw */
        throw CILJS.newobj(t0,asm0.x6000126,[null]);
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
                /* IL_00: ldarg.0 */
                /* IL_01: ldfld Int32 <>1__state*/
                /* IL_06: stloc.0 */
                loc0 = (arg0)["_Where_d__6_1<>1__state"];
                /* IL_07: ldloc.0 */
                /* IL_08: ldc.i4.1 */
                /* IL_09: sub */
                /* IL_0A: switch System.Int32[]*/
                __switch_value__ = CILJS.unsigned_value((loc0 - (1|0)) | (0|0));
                
                if (__switch_value__ >= 0x2){
                    __pos__ = 0x17;
                    continue;
                }
                __jmp__ = [
                    0x1,
                    0x1
                ];
                __pos__ = (0x17 + (__jmp__)[__switch_value__]);
                continue;
                case 0x17:
                /* IL_17: ret */
                return ;
                case 0x18:
                
                try {
                    /* IL_18: leave.s IL_21*/
                    in_block_1 = false;
                    __pos__ = 0x21;
                }
                
                finally {
                    /* IL_1A: ldarg.0 */
                    /* IL_1B: call Void <>m__Finally9()*/
                    asm1.x6000027(arg0);
                    /* IL_20: endfinally */
                    in_block_1 = false;
                }
                break;
                case 0x21:
                /* IL_21: ret */
                return ;
            }
        }
    };;
    /* System.Object <Where>d__6`1.System.Collections.IEnumerator.get_Current()*/
    asm.x6000025 = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        var __pos__;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0];
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld T <>2__current*/
        /* IL_06: box T*/
        /* IL_0B: ret */
        return CILJS.box((arg0)["_Where_d__6_1<>2__current"],t0);
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
        t0 = (asm0)["System.IDisposable"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldc.i4.m1 */
                /* IL_02: stfld Int32 <>1__state*/
                (arg0)["_Where_d__6_1<>1__state"] = (-1|0);
                /* IL_07: ldarg.0 */
                /* IL_08: ldfld IEnumerator`1 <>7__wrap8*/
                /* IL_0D: brfalse.s IL_1A*/
                
                if ((!((arg0)["<>7__wrap8"]))){
                    __pos__ = 0x1A;
                    continue;
                }
                /* IL_0F: ldarg.0 */
                /* IL_10: ldfld IEnumerator`1 <>7__wrap8*/
                /* IL_15: callvirt Void Dispose()*/
                ((((arg0)["<>7__wrap8"].ifacemap)[t0].x60000c7)())(CILJS.convert_box_to_pointer_as_needed((arg0)["<>7__wrap8"]));
                case 0x1A:
                /* IL_1A: ret */
                return ;
            }
        }
    };
    /*  <Where>d__6`1..ctor(Int32)*/
    asm.x6000026 = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld Int32 <>1__state*/
        (arg0)["_Where_d__6_1<>1__state"] = arg1;
        /* IL_0D: ldarg.0 */
        /* IL_0E: call Int32 get_CurrentManagedThreadId()*/
        /* IL_13: stfld Int32 <>l__initialThreadId*/
        (arg0)["_Where_d__6_1<>l__initialThreadId"] = asm0.x60000b3();
        /* IL_18: ret */
        return ;
    };;
    asm.TestLog = CILJS.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.E = CILJS.declare_type(
        "E",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"E",false,false,false,false,false,[
                    [
                        (asm0)["System.Runtime.CompilerServices.ExtensionAttribute"](),
                        asm0.x600015d
                    ]
                ],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.P = CILJS.declare_type(
        "P",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"P",false,false,false,false,false,[],[
                    [asm1, "x600000e", "get_Prop"],
                    [asm1, "x600000f", "set_Prop"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            (this.prototype)["P<Prop>k__BackingField"] = 0;
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            (this)["CS$<>9__CachedAnonymousMethodDelegate8"] = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegate9"] = null;
            (this)["CS$<>9__CachedAnonymousMethodDelegatea"] = null;
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["E+<Select>d__0`2"] = CILJS.declare_type(
        "_Select_d__0_2",
        ["T", "TResult"],
        function (T,TResult)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T,TResult)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"E+<Select>d__0`2",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            (this.GenericArguments)["asm1.t2000009"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm1.t2000009<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
            CILJS.declare_virtual(this,"asm1.x6000016","asm1.x6000016");
            CILJS.declare_virtual(this,"asm1.x6000017","asm1.x6000017");
            CILJS.declare_virtual(this,"asm1.x6000018","asm1.x6000018");
            CILJS.declare_virtual(this,"asm1.x6000019","asm1.x6000019");
            CILJS.declare_virtual(this,"asm1.x600001a","asm1.x600001a");
            CILJS.declare_virtual(this,"asm1.x600001b","asm1.x600001b");
            CILJS.declare_virtual(this,"asm1.x600001c","asm1.x600001c");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerable`1"](TResult), TResult],
                {
                    'x600000e': function (){ return asm1.x6000016;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                {
                    'x600000d': function (){ return asm1.x6000017;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerator`1"](TResult), TResult],
                {
                    'x6000122': function (){ return asm1.x6000019;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                {
                    'x600011f': function (){ return asm1.x600001c;},
                    'x6000120': function (){ return asm1.x6000018;},
                    'x6000121': function (){ return asm1.x600001a;}
                });
            CILJS.implement_interface(
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
    (asm)["E+<Where>d__6`1"] = CILJS.declare_type(
        "_Where_d__6_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"E+<Where>d__6`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000a");
            (this.GenericArguments)["asm1.t200000a"] = [T];
            this.GenericTypeMetadataName = ("asm1.t200000a<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x600001f","asm1.x600001f");
            CILJS.declare_virtual(this,"asm1.x6000020","asm1.x6000020");
            CILJS.declare_virtual(this,"asm1.x6000021","asm1.x6000021");
            CILJS.declare_virtual(this,"asm1.x6000022","asm1.x6000022");
            CILJS.declare_virtual(this,"asm1.x6000023","asm1.x6000023");
            CILJS.declare_virtual(this,"asm1.x6000024","asm1.x6000024");
            CILJS.declare_virtual(this,"asm1.x6000025","asm1.x6000025");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerable`1"](T), T],
                {
                    'x600000e': function (){ return asm1.x600001f;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                {
                    'x600000d': function (){ return asm1.x6000020;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerator`1"](T), T],
                {
                    'x6000122': function (){ return asm1.x6000022;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                {
                    'x600011f': function (){ return asm1.x6000025;},
                    'x6000120': function (){ return asm1.x6000021;},
                    'x6000121': function (){ return asm1.x6000023;}
                });
            CILJS.implement_interface(
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
