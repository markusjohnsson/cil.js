var asm1; (function (asm)
{
    asm.FullName = "YieldGenerators.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static IEnumerable`1 Select[T, TResult](System.Collections.Generic.IEnumerable`1[T], System.Func`2[T,TResult])*/
    asm.x600000c_init = function (T,TResult)
    {
        return function ()
        {
            ((asm1)["E+<Select>d__0`2"](T,TResult).init)();
        };
    };;
    asm.x600000c = function (T,TResult)
    {
        return function (arg0,arg1)
        {
            (asm.x600000c_init(T,TResult).apply)(this,arguments);
            return (asm.x600000c_(T,TResult).apply)(this,arguments);
        };
    };;
    asm.x600000c_ = function (T,TResult)
    {
        return function Select(arg0,arg1)
        {
            var t0;
            var t1;
            var t2;
            var loc0;
            t0 = T;
            t1 = TResult;
            t2 = (asm1)["E+<Select>d__0`2"](T,TResult);
            /* IL_00: ldc.i4.s 254*/
            /* IL_02: newobj Void .ctor(System.Int32)*/
            /* IL_07: stloc.0 */
            loc0 = BLR.newobj(t2,asm1.x600001d,[null, (-2|0)]);
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
    /* static IEnumerable`1 Where[T](System.Collections.Generic.IEnumerable`1[T], System.Func`2[T,System.Boolean])*/
    asm.x600000d_init = function (T)
    {
        return function ()
        {
            ((asm1)["E+<Where>d__6`1"](T).init)();
        };
    };;
    asm.x600000d = function (T)
    {
        return function (arg0,arg1)
        {
            (asm.x600000d_init(T).apply)(this,arguments);
            return (asm.x600000d_(T).apply)(this,arguments);
        };
    };;
    asm.x600000d_ = function (T)
    {
        return function Where(arg0,arg1)
        {
            var t0;
            var t1;
            var loc0;
            t0 = T;
            t1 = (asm1)["E+<Where>d__6`1"](T);
            /* IL_00: ldc.i4.s 254*/
            /* IL_02: newobj Void .ctor(System.Int32)*/
            /* IL_07: stloc.0 */
            loc0 = BLR.newobj(t1,asm1.x6000026,[null, (-2|0)]);
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
    /* static T FirstOrDefault[T](System.Collections.Generic.IEnumerable`1[T])*/
    asm.x600000e_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Collections.Generic.IEnumerable`1"](T).init)();
            ((asm0)["System.Collections.Generic.IEnumerator`1"](T).init)();
            ((asm0)["System.Collections.IEnumerator"]().init)();
            ((asm0)["System.IDisposable"]().init)();
        };
    };;
    asm.x600000e = function (T)
    {
        return function (arg0)
        {
            (asm.x600000e_init(T).apply)(this,arguments);
            return (asm.x600000e_(T).apply)(this,arguments);
        };
    };;
    asm.x600000e_ = function (T)
    {
        return function FirstOrDefault(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            var loc3;
            var __pos_0__;
            var loc2;
            var __pos_1__;
            var loc0;
            var loc1;
            t0 = T;
            t1 = (asm0)["System.Collections.Generic.IEnumerable`1"](T);
            t2 = (asm0)["System.Collections.Generic.IEnumerator`1"](T);
            t3 = (asm0)["System.Collections.IEnumerator"]();
            t4 = (asm0)["System.IDisposable"]();
            loc3 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: ldarg.0 */
                    /* IL_01: callvirt IEnumerator`1 GetEnumerator()*/
                    /* IL_06: stloc.2 */
                    loc2 = ((((arg0.ifacemap)[t1])[t0].x600000e)())(BLR.convert_box_to_pointer_as_needed(arg0));
                    
                    try {
                        __pos_1__ = 0x0;
                        
                        while (__pos_1__ >= 0){
                            
                            switch (__pos_1__){
                                case 0x0:
                                /* IL_07: br.s IL_14*/
                                __pos_1__ = 0x14;
                                continue;
                                case 0x9:
                                /* IL_09: ldloc.2 */
                                /* IL_0A: callvirt T get_Current()*/
                                /* IL_0F: stloc.0 */
                                loc0 = ((((loc2.ifacemap)[t2])[t0].x60000e8)())(BLR.convert_box_to_pointer_as_needed(loc2));
                                /* IL_10: ldloc.0 */
                                /* IL_11: stloc.1 */
                                loc1 = loc0;
                                /* IL_12: leave.s IL_32*/
                                __pos_1__ = -1;
                                __pos_0__ = 0x32;
                                break;
                                case 0x14:
                                /* IL_14: ldloc.2 */
                                /* IL_15: callvirt Boolean MoveNext()*/
                                /* IL_1A: brtrue.s IL_09*/
                                
                                if ((((loc2.ifacemap)[t3].x60000e6)())(BLR.convert_box_to_pointer_as_needed(loc2))){
                                    __pos_1__ = 0x9;
                                    continue;
                                }
                                /* IL_1C: leave.s IL_28*/
                                __pos_1__ = -1;
                                __pos_0__ = 0x28;
                                break;
                            }
                        }
                        break;
                    }
                    
                    finally {
                        __pos_1__ = 0x0;
                        
                        while (__pos_1__ >= 0){
                            
                            switch (__pos_1__){
                                case 0x0:
                                /* IL_1E: ldloc.2 */
                                /* IL_1F: brfalse.s IL_27*/
                                
                                if ((!(loc2))){
                                    __pos_1__ = 0x27;
                                    continue;
                                }
                                /* IL_21: ldloc.2 */
                                /* IL_22: callvirt Void Dispose()*/
                                (((loc2.ifacemap)[t4].x600008f)())(BLR.convert_box_to_pointer_as_needed(loc2));
                                case 0x27:
                                /* IL_27: endfinally */
                                __pos_1__ = -1;
                                break;
                            }
                        }
                        break;
                    }
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
    /* static Boolean Any[T](System.Collections.Generic.IEnumerable`1[T])*/
    asm.x600000f_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Collections.Generic.IEnumerable`1"](T).init)();
            ((asm0)["System.Collections.Generic.IEnumerator`1"](T).init)();
            ((asm0)["System.Collections.IEnumerator"]().init)();
            ((asm0)["System.IDisposable"]().init)();
        };
    };;
    asm.x600000f = function (T)
    {
        return function (arg0)
        {
            (asm.x600000f_init(T).apply)(this,arguments);
            return (asm.x600000f_(T).apply)(this,arguments);
        };
    };;
    asm.x600000f_ = function (T)
    {
        return function Any(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            var __pos_0__;
            var loc1;
            var __pos_1__;
            var loc0;
            t0 = T;
            t1 = (asm0)["System.Collections.Generic.IEnumerable`1"](T);
            t2 = (asm0)["System.Collections.Generic.IEnumerator`1"](T);
            t3 = (asm0)["System.Collections.IEnumerator"]();
            t4 = (asm0)["System.IDisposable"]();
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: ldarg.0 */
                    /* IL_01: callvirt IEnumerator`1 GetEnumerator()*/
                    /* IL_06: stloc.1 */
                    loc1 = ((((arg0.ifacemap)[t1])[t0].x600000e)())(BLR.convert_box_to_pointer_as_needed(arg0));
                    
                    try {
                        __pos_1__ = 0x0;
                        
                        while (__pos_1__ >= 0){
                            
                            switch (__pos_1__){
                                case 0x0:
                                /* IL_07: br.s IL_14*/
                                __pos_1__ = 0x14;
                                continue;
                                case 0x9:
                                /* IL_09: ldloc.1 */
                                /* IL_0A: callvirt T get_Current()*/
                                /* IL_0F: pop */
                                ((((loc1.ifacemap)[t2])[t0].x60000e8)())(BLR.convert_box_to_pointer_as_needed(loc1));
                                /* IL_10: ldc.i4.1 */
                                /* IL_11: stloc.0 */
                                loc0 = (1|0);
                                /* IL_12: leave.s IL_2A*/
                                __pos_1__ = -1;
                                __pos_0__ = 0x2A;
                                break;
                                case 0x14:
                                /* IL_14: ldloc.1 */
                                /* IL_15: callvirt Boolean MoveNext()*/
                                /* IL_1A: brtrue.s IL_09*/
                                
                                if ((((loc1.ifacemap)[t3].x60000e6)())(BLR.convert_box_to_pointer_as_needed(loc1))){
                                    __pos_1__ = 0x9;
                                    continue;
                                }
                                /* IL_1C: leave.s IL_28*/
                                __pos_1__ = -1;
                                __pos_0__ = 0x28;
                                break;
                            }
                        }
                        break;
                    }
                    
                    finally {
                        __pos_1__ = 0x0;
                        
                        while (__pos_1__ >= 0){
                            
                            switch (__pos_1__){
                                case 0x0:
                                /* IL_1E: ldloc.1 */
                                /* IL_1F: brfalse.s IL_27*/
                                
                                if ((!(loc1))){
                                    __pos_1__ = 0x27;
                                    continue;
                                }
                                /* IL_21: ldloc.1 */
                                /* IL_22: callvirt Void Dispose()*/
                                (((loc1.ifacemap)[t4].x600008f)())(BLR.convert_box_to_pointer_as_needed(loc1));
                                case 0x27:
                                /* IL_27: endfinally */
                                __pos_1__ = -1;
                                break;
                            }
                        }
                        break;
                    }
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
    /* Int32 get_Prop()*/
    asm.x6000010 = function get_Prop(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["P<Prop>k__BackingField"];
    };;
    /* Void set_Prop(System.Int32)*/
    asm.x6000011 = function set_Prop(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Int32 <Prop>k__BackingField*/
        (arg0)["P<Prop>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000013_init = function ()
    {
        ((asm0)["System.ValueType"]().init)();
        (asm1.P().init)();
        (asm1.Program().init)();
        ((asm0)["System.Int32"]().init)();
        ((asm0)["System.Func`2"](asm1.P(),(asm0)["System.Int32"]()).init)();
        asm.x6000013 = asm.x6000013_;
    };;
    asm.x6000013 = function ()
    {
        asm.x6000013_init.apply(this,arguments);
        return asm.x6000013_.apply(this,arguments);
    };;
    asm.x6000013_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
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
        var st_21;
        var st_22;
        var st_23;
        var st_24;
        var st_25;
        var st_26;
        var st_27;
        var st_28;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        t0 = (asm0)["System.ValueType"]();
        t1 = asm1.P();
        t2 = asm1.Program();
        t3 = (asm0)["System.Int32"]();
        t4 = (asm0)["System.Func`2"](asm1.P(),(asm0)["System.Int32"]());
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldc.i4.5 */
                /* IL_01: newarr P*/
                /* IL_06: stloc.0 */
                loc0 = BLR.new_array(t1,(5|0));
                /* IL_07: ldloc.0 */
                st_05 = loc0;
                /* IL_08: ldc.i4.0 */
                st_06 = (0|0);
                /* IL_09: newobj Void .ctor()*/
                /* IL_0E: stloc.1 */
                loc1 = BLR.newobj(t1,asm1.x6000012,[null]);
                /* IL_0F: ldloc.1 */
                st_03 = loc1;
                /* IL_10: ldc.i4.s 11*/
                st_04 = (11|0);
                /* IL_12: callvirt Void set_Prop(System.Int32)*/
                asm1.x6000011(st_03,st_04);
                /* IL_17: ldloc.1 */
                st_07 = loc1;
                /* IL_18: stelem.ref */
                (st_05.jsarr)[st_06] = st_07;
                /* IL_19: ldloc.0 */
                st_0B = loc0;
                /* IL_1A: ldc.i4.1 */
                st_0C = (1|0);
                /* IL_1B: newobj Void .ctor()*/
                /* IL_20: stloc.2 */
                loc2 = BLR.newobj(t1,asm1.x6000012,[null]);
                /* IL_21: ldloc.2 */
                st_09 = loc2;
                /* IL_22: ldc.i4.s 22*/
                st_0A = (22|0);
                /* IL_24: callvirt Void set_Prop(System.Int32)*/
                asm1.x6000011(st_09,st_0A);
                /* IL_29: ldloc.2 */
                st_0D = loc2;
                /* IL_2A: stelem.ref */
                (st_0B.jsarr)[st_0C] = st_0D;
                /* IL_2B: ldloc.0 */
                st_11 = loc0;
                /* IL_2C: ldc.i4.2 */
                st_12 = (2|0);
                /* IL_2D: newobj Void .ctor()*/
                /* IL_32: stloc.3 */
                loc3 = BLR.newobj(t1,asm1.x6000012,[null]);
                /* IL_33: ldloc.3 */
                st_0F = loc3;
                /* IL_34: ldc.i4.s 33*/
                st_10 = (33|0);
                /* IL_36: callvirt Void set_Prop(System.Int32)*/
                asm1.x6000011(st_0F,st_10);
                /* IL_3B: ldloc.3 */
                st_13 = loc3;
                /* IL_3C: stelem.ref */
                (st_11.jsarr)[st_12] = st_13;
                /* IL_3D: ldloc.0 */
                st_17 = loc0;
                /* IL_3E: ldc.i4.3 */
                st_18 = (3|0);
                /* IL_3F: newobj Void .ctor()*/
                /* IL_44: stloc.s 4*/
                loc4 = BLR.newobj(t1,asm1.x6000012,[null]);
                /* IL_46: ldloc.s 4*/
                st_15 = loc4;
                /* IL_48: ldc.i4.s 44*/
                st_16 = (44|0);
                /* IL_4A: callvirt Void set_Prop(System.Int32)*/
                asm1.x6000011(st_15,st_16);
                /* IL_4F: ldloc.s 4*/
                st_19 = loc4;
                /* IL_51: stelem.ref */
                (st_17.jsarr)[st_18] = st_19;
                /* IL_52: ldloc.0 */
                st_1D = loc0;
                /* IL_53: ldc.i4.4 */
                st_1E = (4|0);
                /* IL_54: newobj Void .ctor()*/
                /* IL_59: stloc.s 5*/
                loc5 = BLR.newobj(t1,asm1.x6000012,[null]);
                /* IL_5B: ldloc.s 5*/
                st_1B = loc5;
                /* IL_5D: ldc.i4.s 55*/
                st_1C = (55|0);
                /* IL_5F: callvirt Void set_Prop(System.Int32)*/
                asm1.x6000011(st_1B,st_1C);
                /* IL_64: ldloc.s 5*/
                st_1F = loc5;
                /* IL_66: stelem.ref */
                (st_1D.jsarr)[st_1E] = st_1F;
                /* IL_67: ldloc.0 */
                st_24 = loc0;
                /* IL_68: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate6*/
                /* IL_6D: brtrue.s IL_80*/
                
                if ((t2)["CS$<>9__CachedAnonymousMethodDelegate6"]){
                    __pos_0__ = 0x80;
                    continue;
                }
                /* IL_6F: ldnull */
                st_21 = null;
                /* IL_71: ldftn Int32 <Main>b__5(P)*/
                st_22 = asm1.x6000015;
                /* IL_76: newobj Void .ctor(System.Object, System.IntPtr)*/
                st_23 = BLR.newobj(t4,asm0.x600008c,[null, st_21, st_22]);
                /* IL_7B: stsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate6*/
                (t2)["CS$<>9__CachedAnonymousMethodDelegate6"] = st_23;
                case 0x80:
                /* IL_80: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate6*/
                st_25 = (t2)["CS$<>9__CachedAnonymousMethodDelegate6"];
                /* IL_85: call IEnumerable`1 Select[P, System.Int32](System.Collections.Generic.IEnumerable`1[P], System.Func`2[P,System.Int32])*/
                st_26 = (asm1.x600000c(asm1.P(),(asm0)["System.Int32"]()))(st_24,st_25);
                /* IL_8A: call Int32 FirstOrDefault[System.Int32](System.Collections.Generic.IEnumerable`1[System.Int32])*/
                st_27 = (asm1.x600000e((asm0)["System.Int32"]()))(st_26);
                /* IL_8F: box System.Int32*/
                st_28 = {
                    'boxed': st_27,
                    'type': t3,
                    'vtable': t3.prototype.vtable,
                    'ifacemap': t3.prototype.ifacemap
                };
                /* IL_94: call Void Log(System.Object)*/
                asm1.x6000001(st_28);
                /* IL_99: ret */
                return ;
            }
        }
    };
    /* static Int32 <Main>b__5(P)*/
    asm.x6000015 = function _Main_b__5(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt Int32 get_Prop()*/
        /* IL_06: ret */
        return asm1.x6000010(arg0);
    };;
    /* Void .ctor()*/
    asm.x6000014 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* IEnumerator`1 System.Collections.Generic.IEnumerable<TResult>.GetEnumerator()*/
    asm.x6000016_init = function ()
    {
        ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
        ((asm1)["E+<Select>d__0`2"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0],(((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[1]).init)();
        asm.x6000016 = asm.x6000016_;
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
        var __pos_0__;
        var loc0;
        t0 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
        t1 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0];
        t2 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[1];
        t3 = (asm1)["E+<Select>d__0`2"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0],(((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[1]);
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: call Int32 get_CurrentManagedThreadId()*/
                /* IL_05: ldarg.0 */
                /* IL_06: ldfld Int32 <>l__initialThreadId*/
                /* IL_0B: bne.un.s IL_22*/
                
                if (BLR.unsigned_value(asm0.x6000089()) != BLR.unsigned_value((arg0)["_Select_d__0_2<>l__initialThreadId"])){
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_0D: ldarg.0 */
                /* IL_0E: ldfld Int32 <>1__state*/
                /* IL_13: ldc.i4.s 254*/
                /* IL_15: bne.un.s IL_22*/
                
                if (BLR.unsigned_value((arg0)["_Select_d__0_2<>1__state"]) != BLR.unsigned_value((-2|0))){
                    __pos_0__ = 0x22;
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
                __pos_0__ = 0x29;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: newobj Void .ctor(System.Int32)*/
                /* IL_28: stloc.0 */
                loc0 = BLR.newobj(t3,asm1.x600001d,[null, (0|0)]);
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
    /* IEnumerator System.Collections.IEnumerable.GetEnumerator()*/
    asm.x6000017 = function System_Collections_IEnumerable_GetEnumerator(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call IEnumerator`1 System.Collections.Generic.IEnumerable<TResult>.GetEnumerator()*/
        /* IL_06: ret */
        return asm1.x6000016(arg0);
    };;
    /* Boolean MoveNext()*/
    asm.x6000018_init = function ()
    {
        ((asm0)["System.Collections.Generic.IEnumerable`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0]).init)();
        ((asm0)["System.Collections.Generic.IEnumerator`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0]).init)();
        ((asm0)["System.Collections.IEnumerator"]().init)();
        asm.x6000018 = asm.x6000018_;
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
        var __pos_0__;
        var __pos_1__;
        var loc1;
        var __switch_value__;
        var __jmp__;
        var loc0;
        var __error_handled_1__;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0];
        t1 = (asm0)["System.Collections.Generic.IEnumerable`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0]);
        t2 = (asm0)["System.Collections.Generic.IEnumerator`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0]);
        t3 = (asm0)["System.Collections.IEnumerator"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                
                try {
                    __pos_1__ = 0x0;
                    
                    while (__pos_1__ >= 0){
                        
                        switch (__pos_1__){
                            case 0x0:
                            /* IL_00: ldarg.0 */
                            /* IL_01: ldfld Int32 <>1__state*/
                            /* IL_06: stloc.1 */
                            loc1 = (arg0)["_Select_d__0_2<>1__state"];
                            /* IL_07: ldloc.1 */
                            /* IL_08: switch System.Int32[]*/
                            __switch_value__ = loc1;
                            
                            if (__switch_value__ >= 0x3){
                                __pos_1__ = 0x19;
                                continue;
                            }
                            __jmp__ = [
                                0x2,
                                0x70,
                                0x56
                            ];
                            __pos_1__ = (0x19 + (__jmp__)[__switch_value__]);
                            continue;
                            case 0x19:
                            /* IL_19: br.s IL_89*/
                            __pos_1__ = 0x89;
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
                            (arg0)["<>7__wrap2"] = ((((arg0.source.ifacemap)[t1])[t0].x600000e)())(BLR.convert_box_to_pointer_as_needed(arg0.source));
                            /* IL_33: ldarg.0 */
                            /* IL_34: ldc.i4.1 */
                            /* IL_35: stfld Int32 <>1__state*/
                            (arg0)["_Select_d__0_2<>1__state"] = (1|0);
                            /* IL_3A: br.s IL_76*/
                            __pos_1__ = 0x76;
                            continue;
                            case 0x3C:
                            /* IL_3C: ldarg.0 */
                            /* IL_3D: ldarg.0 */
                            /* IL_3E: ldfld IEnumerator`1 <>7__wrap2*/
                            /* IL_43: callvirt T get_Current()*/
                            /* IL_48: stfld T <s>5__1*/
                            (arg0)["<s>5__1"] = (((((arg0)["<>7__wrap2"].ifacemap)[t2])[t0].x60000e8)())(BLR.convert_box_to_pointer_as_needed((arg0)["<>7__wrap2"]));
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
                            __pos_1__ = -1;
                            __pos_0__ = 0x94;
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
                            
                            if (((((arg0)["<>7__wrap2"].ifacemap)[t3].x60000e6)())(BLR.convert_box_to_pointer_as_needed((arg0)["<>7__wrap2"]))){
                                __pos_1__ = 0x3C;
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
                            __pos_1__ = -1;
                            __pos_0__ = 0x94;
                            break;
                        }
                    }
                    break;
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
                        __pos_1__ = -1;
                        throw __error__;
                    }
                }
                case 0x94:
                /* IL_94: ldloc.0 */
                /* IL_95: ret */
                return loc0;
            }
        }
    };
    /* TResult System.Collections.Generic.IEnumerator<TResult>.get_Current()*/
    asm.x6000019 = function System_Collections_Generic_IEnumerator_TResult__get_Current(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld TResult <>2__current*/
        /* IL_06: ret */
        return (arg0)["_Select_d__0_2<>2__current"];
    };;
    /* Void System.Collections.IEnumerator.Reset()*/
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
        t0 = (asm0)["System.NotSupportedException"]();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: throw */
        throw BLR.newobj(t0,asm0.x60000ec,[null]);
    };
    /* Void System.IDisposable.Dispose()*/
    asm.x600001b = function System_IDisposable_Dispose(arg0)
    {
        var __pos_0__;
        var loc0;
        var __switch_value__;
        var __jmp__;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldfld Int32 <>1__state*/
                /* IL_06: stloc.0 */
                loc0 = (arg0)["_Select_d__0_2<>1__state"];
                /* IL_07: ldloc.0 */
                /* IL_08: ldc.i4.1 */
                /* IL_09: sub */
                /* IL_0A: switch System.Int32[]*/
                __switch_value__ = (loc0 - (1|0)) | (0|0);
                
                if (__switch_value__ >= 0x2){
                    __pos_0__ = 0x17;
                    continue;
                }
                __jmp__ = [
                    0x1,
                    0x1
                ];
                __pos_0__ = (0x17 + (__jmp__)[__switch_value__]);
                continue;
                case 0x17:
                /* IL_17: ret */
                return ;
                case 0x18:
                
                try {
                    /* IL_18: leave.s IL_21*/
                    __pos_1__ = -1;
                    __pos_0__ = 0x21;
                }
                
                finally {
                    /* IL_1A: ldarg.0 */
                    /* IL_1B: call Void <>m__Finally3()*/
                    asm1.x600001e(arg0);
                    /* IL_20: endfinally */
                    __pos_1__ = -1;
                }
                case 0x21:
                /* IL_21: ret */
                return ;
            }
        }
    };;
    /* Object System.Collections.IEnumerator.get_Current()*/
    asm.x600001c = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[1];
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld TResult <>2__current*/
        /* IL_06: box TResult*/
        /* IL_0B: ret */
        return BLR.box((arg0)["_Select_d__0_2<>2__current"],t0);
    };;
    /* Void <>m__Finally3()*/
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
        var __pos_0__;
        t0 = (asm0)["System.IDisposable"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldc.i4.m1 */
                /* IL_02: stfld Int32 <>1__state*/
                (arg0)["_Select_d__0_2<>1__state"] = (-1|0);
                /* IL_07: ldarg.0 */
                /* IL_08: ldfld IEnumerator`1 <>7__wrap2*/
                /* IL_0D: brfalse.s IL_1A*/
                
                if ((!((arg0)["<>7__wrap2"]))){
                    __pos_0__ = 0x1A;
                    continue;
                }
                /* IL_0F: ldarg.0 */
                /* IL_10: ldfld IEnumerator`1 <>7__wrap2*/
                /* IL_15: callvirt Void Dispose()*/
                ((((arg0)["<>7__wrap2"].ifacemap)[t0].x600008f)())(BLR.convert_box_to_pointer_as_needed((arg0)["<>7__wrap2"]));
                case 0x1A:
                /* IL_1A: ret */
                return ;
            }
        }
    };
    /* Void .ctor(System.Int32)*/
    asm.x600001d = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld Int32 <>1__state*/
        (arg0)["_Select_d__0_2<>1__state"] = arg1;
        /* IL_0D: ldarg.0 */
        /* IL_0E: call Int32 get_CurrentManagedThreadId()*/
        /* IL_13: stfld Int32 <>l__initialThreadId*/
        (arg0)["_Select_d__0_2<>l__initialThreadId"] = asm0.x6000089();
        /* IL_18: ret */
        return ;
    };;
    /* IEnumerator`1 System.Collections.Generic.IEnumerable<T>.GetEnumerator()*/
    asm.x600001f_init = function ()
    {
        ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
        ((asm1)["E+<Where>d__6`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0]).init)();
        asm.x600001f = asm.x600001f_;
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
        var __pos_0__;
        var loc0;
        t0 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
        t1 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0];
        t2 = (asm1)["E+<Where>d__6`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0]);
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: call Int32 get_CurrentManagedThreadId()*/
                /* IL_05: ldarg.0 */
                /* IL_06: ldfld Int32 <>l__initialThreadId*/
                /* IL_0B: bne.un.s IL_22*/
                
                if (BLR.unsigned_value(asm0.x6000089()) != BLR.unsigned_value((arg0)["_Where_d__6_1<>l__initialThreadId"])){
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_0D: ldarg.0 */
                /* IL_0E: ldfld Int32 <>1__state*/
                /* IL_13: ldc.i4.s 254*/
                /* IL_15: bne.un.s IL_22*/
                
                if (BLR.unsigned_value((arg0)["_Where_d__6_1<>1__state"]) != BLR.unsigned_value((-2|0))){
                    __pos_0__ = 0x22;
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
                __pos_0__ = 0x29;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: newobj Void .ctor(System.Int32)*/
                /* IL_28: stloc.0 */
                loc0 = BLR.newobj(t2,asm1.x6000026,[null, (0|0)]);
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
    /* IEnumerator System.Collections.IEnumerable.GetEnumerator()*/
    asm.x6000020 = function System_Collections_IEnumerable_GetEnumerator(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call IEnumerator`1 System.Collections.Generic.IEnumerable<T>.GetEnumerator()*/
        /* IL_06: ret */
        return asm1.x600001f(arg0);
    };;
    /* Boolean MoveNext()*/
    asm.x6000021_init = function ()
    {
        ((asm0)["System.Collections.Generic.IEnumerable`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0]).init)();
        ((asm0)["System.Collections.Generic.IEnumerator`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0]).init)();
        ((asm0)["System.Collections.IEnumerator"]().init)();
        asm.x6000021 = asm.x6000021_;
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
        var __pos_0__;
        var __pos_1__;
        var loc1;
        var __switch_value__;
        var __jmp__;
        var loc0;
        var __error_handled_1__;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0];
        t1 = (asm0)["System.Collections.Generic.IEnumerable`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0]);
        t2 = (asm0)["System.Collections.Generic.IEnumerator`1"]((((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0]);
        t3 = (asm0)["System.Collections.IEnumerator"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                
                try {
                    __pos_1__ = 0x0;
                    
                    while (__pos_1__ >= 0){
                        
                        switch (__pos_1__){
                            case 0x0:
                            /* IL_00: ldarg.0 */
                            /* IL_01: ldfld Int32 <>1__state*/
                            /* IL_06: stloc.1 */
                            loc1 = (arg0)["_Where_d__6_1<>1__state"];
                            /* IL_07: ldloc.1 */
                            /* IL_08: switch System.Int32[]*/
                            __switch_value__ = loc1;
                            
                            if (__switch_value__ >= 0x3){
                                __pos_1__ = 0x19;
                                continue;
                            }
                            __jmp__ = [
                                0x2,
                                0x78,
                                0x5E
                            ];
                            __pos_1__ = (0x19 + (__jmp__)[__switch_value__]);
                            continue;
                            case 0x19:
                            /* IL_19: br.s IL_91*/
                            __pos_1__ = 0x91;
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
                            (arg0)["<>7__wrap8"] = ((((arg0.source.ifacemap)[t1])[t0].x600000e)())(BLR.convert_box_to_pointer_as_needed(arg0.source));
                            /* IL_33: ldarg.0 */
                            /* IL_34: ldc.i4.1 */
                            /* IL_35: stfld Int32 <>1__state*/
                            (arg0)["_Where_d__6_1<>1__state"] = (1|0);
                            /* IL_3A: br.s IL_7E*/
                            __pos_1__ = 0x7E;
                            continue;
                            case 0x3C:
                            /* IL_3C: ldarg.0 */
                            /* IL_3D: ldarg.0 */
                            /* IL_3E: ldfld IEnumerator`1 <>7__wrap8*/
                            /* IL_43: callvirt T get_Current()*/
                            /* IL_48: stfld T <s>5__7*/
                            (arg0)["<s>5__7"] = (((((arg0)["<>7__wrap8"].ifacemap)[t2])[t0].x60000e8)())(BLR.convert_box_to_pointer_as_needed((arg0)["<>7__wrap8"]));
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
                                __pos_1__ = 0x7E;
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
                            __pos_1__ = -1;
                            __pos_0__ = 0x9C;
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
                            
                            if (((((arg0)["<>7__wrap8"].ifacemap)[t3].x60000e6)())(BLR.convert_box_to_pointer_as_needed((arg0)["<>7__wrap8"]))){
                                __pos_1__ = 0x3C;
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
                            __pos_1__ = -1;
                            __pos_0__ = 0x9C;
                            break;
                        }
                    }
                    break;
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
                        __pos_1__ = -1;
                        throw __error__;
                    }
                }
                case 0x9C:
                /* IL_9C: ldloc.0 */
                /* IL_9D: ret */
                return loc0;
            }
        }
    };
    /* T System.Collections.Generic.IEnumerator<T>.get_Current()*/
    asm.x6000022 = function System_Collections_Generic_IEnumerator_T__get_Current(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld T <>2__current*/
        /* IL_06: ret */
        return (arg0)["_Where_d__6_1<>2__current"];
    };;
    /* Void System.Collections.IEnumerator.Reset()*/
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
        t0 = (asm0)["System.NotSupportedException"]();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: throw */
        throw BLR.newobj(t0,asm0.x60000ec,[null]);
    };
    /* Void System.IDisposable.Dispose()*/
    asm.x6000024 = function System_IDisposable_Dispose(arg0)
    {
        var __pos_0__;
        var loc0;
        var __switch_value__;
        var __jmp__;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldfld Int32 <>1__state*/
                /* IL_06: stloc.0 */
                loc0 = (arg0)["_Where_d__6_1<>1__state"];
                /* IL_07: ldloc.0 */
                /* IL_08: ldc.i4.1 */
                /* IL_09: sub */
                /* IL_0A: switch System.Int32[]*/
                __switch_value__ = (loc0 - (1|0)) | (0|0);
                
                if (__switch_value__ >= 0x2){
                    __pos_0__ = 0x17;
                    continue;
                }
                __jmp__ = [
                    0x1,
                    0x1
                ];
                __pos_0__ = (0x17 + (__jmp__)[__switch_value__]);
                continue;
                case 0x17:
                /* IL_17: ret */
                return ;
                case 0x18:
                
                try {
                    /* IL_18: leave.s IL_21*/
                    __pos_1__ = -1;
                    __pos_0__ = 0x21;
                }
                
                finally {
                    /* IL_1A: ldarg.0 */
                    /* IL_1B: call Void <>m__Finally9()*/
                    asm1.x6000027(arg0);
                    /* IL_20: endfinally */
                    __pos_1__ = -1;
                }
                case 0x21:
                /* IL_21: ret */
                return ;
            }
        }
    };;
    /* Object System.Collections.IEnumerator.get_Current()*/
    asm.x6000025 = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0];
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld T <>2__current*/
        /* IL_06: box T*/
        /* IL_0B: ret */
        return BLR.box((arg0)["_Where_d__6_1<>2__current"],t0);
    };;
    /* Void <>m__Finally9()*/
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
        var __pos_0__;
        t0 = (asm0)["System.IDisposable"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldc.i4.m1 */
                /* IL_02: stfld Int32 <>1__state*/
                (arg0)["_Where_d__6_1<>1__state"] = (-1|0);
                /* IL_07: ldarg.0 */
                /* IL_08: ldfld IEnumerator`1 <>7__wrap8*/
                /* IL_0D: brfalse.s IL_1A*/
                
                if ((!((arg0)["<>7__wrap8"]))){
                    __pos_0__ = 0x1A;
                    continue;
                }
                /* IL_0F: ldarg.0 */
                /* IL_10: ldfld IEnumerator`1 <>7__wrap8*/
                /* IL_15: callvirt Void Dispose()*/
                ((((arg0)["<>7__wrap8"].ifacemap)[t0].x600008f)())(BLR.convert_box_to_pointer_as_needed((arg0)["<>7__wrap8"]));
                case 0x1A:
                /* IL_1A: ret */
                return ;
            }
        }
    };
    /* Void .ctor(System.Int32)*/
    asm.x6000026 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld Int32 <>1__state*/
        (arg0)["_Where_d__6_1<>1__state"] = arg1;
        /* IL_0D: ldarg.0 */
        /* IL_0E: call Int32 get_CurrentManagedThreadId()*/
        /* IL_13: stfld Int32 <>l__initialThreadId*/
        (arg0)["_Where_d__6_1<>l__initialThreadId"] = asm0.x6000089();
        /* IL_18: ret */
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
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.TestHelper = BLR.declare_type(
        "TestHelper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestHelper",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000006");
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
                        asm0.x600011c
                    ]
                ],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
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
                    [asm1, "x6000010", "get_Prop"],
                    [asm1, "x6000011", "set_Prop"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
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
            BLR.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000009");
            (this)["CS$<>9__CachedAnonymousMethodDelegate6"] = null;
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["E+<Select>d__0`2"] = BLR.declare_type(
        "_Select_d__0_2",
        ["T", "TResult"],
        function (T,TResult)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T,TResult)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"E+<Select>d__0`2",false,false,false,true,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000a");
            (this.GenericArguments)["asm1.t200000a"] = [T, TResult];
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
                    'x60000e8': function (){ return asm1.x6000019;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                {
                    'x60000e5': function (){ return asm1.x600001c;},
                    'x60000e6': function (){ return asm1.x6000018;},
                    'x60000e7': function (){ return asm1.x600001a;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x600008f': function (){ return asm1.x600001b;}
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
            BLR.init_type(this,asm,"E+<Where>d__6`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t200000b");
            (this.GenericArguments)["asm1.t200000b"] = [T];
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
                    'x60000e8': function (){ return asm1.x6000022;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                {
                    'x60000e5': function (){ return asm1.x6000025;},
                    'x60000e6': function (){ return asm1.x6000021;},
                    'x60000e7': function (){ return asm1.x6000023;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x600008f': function (){ return asm1.x6000024;}
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
    asm.entryPoint = asm.x6000013;
})(asm1 || (asm1 = {}));
