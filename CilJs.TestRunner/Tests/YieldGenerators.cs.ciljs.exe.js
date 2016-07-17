var asm1;(function (asm)
{
    asm.FullName = "YieldGenerators.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Collections.Generic.IEnumerable`1[TResult] E.Select<T,TResult>(IEnumerable`1,Func`2)*/
    asm.x6000001_init = function (T, TResult)
    {
        return function (arg0, arg1)
        {
            ((asm1)["E+<Select>d__0`2"](T,TResult).init)();
        };
    };;
    asm.x6000001 = function (T, TResult)
    {
        return function (arg0, arg1)
        {
            (asm.x6000001_init(T,TResult))(arg0,arg1);
            return (asm.x6000001_(T,TResult))(arg0,arg1);
        };
    };;
    asm.x6000001_ = function (T, TResult)
    {
        return function Select(arg0, arg1)
        {
            var t0;
            var t1;
            var t2;
            var st_00;
            var st_01;
            var st_02;
            var st_03;
            var st_04;
            var st_05;
            var st_06;
            var st_07;
            var in_block_0;
            var __pos__;
            t0 = T;
            t1 = TResult;
            t2 = (asm1)["E+<Select>d__0`2"](t0,t1);
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: ldc.i4.s 254 */
                    st_00 = (-2|0);
                    /* IL_02: newobj Void .ctor(System.Int32) */
                    st_01 = CILJS.newobj(t2,asm1.x600000a,[null, st_00]);
                    /* IL_07: dup  */
                    st_04 = st_02 = st_01;
                    /* IL_08: ldarg.0  */
                    st_03 = arg0;
                    /* IL_09: stfld IKVM.Reflection.GenericFieldInstance */
                    (st_02)["<>3__source"] = st_03;
                    /* IL_0E: dup  */
                    st_07 = st_05 = st_04;
                    /* IL_0F: ldarg.1  */
                    st_06 = arg1;
                    /* IL_10: stfld IKVM.Reflection.GenericFieldInstance */
                    (st_05)["<>3__selector"] = st_06;
                    /* IL_15: ret  */
                    return st_07;
                }
            }
        };
    };
    /* static System.Collections.Generic.IEnumerable`1[T] E.Where<T>(IEnumerable`1,Func`2)*/
    asm.x6000002_init = function (T)
    {
        return function (arg0, arg1)
        {
            ((asm1)["E+<Where>d__1`1"](T).init)();
        };
    };;
    asm.x6000002 = function (T)
    {
        return function (arg0, arg1)
        {
            (asm.x6000002_init(T))(arg0,arg1);
            return (asm.x6000002_(T))(arg0,arg1);
        };
    };;
    asm.x6000002_ = function (T)
    {
        return function Where(arg0, arg1)
        {
            var t0;
            var t1;
            var st_00;
            var st_01;
            var st_02;
            var st_03;
            var st_04;
            var st_05;
            var st_06;
            var st_07;
            var in_block_0;
            var __pos__;
            t0 = T;
            t1 = (asm1)["E+<Where>d__1`1"](t0);
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: ldc.i4.s 254 */
                    st_00 = (-2|0);
                    /* IL_02: newobj Void .ctor(System.Int32) */
                    st_01 = CILJS.newobj(t1,asm1.x6000013,[null, st_00]);
                    /* IL_07: dup  */
                    st_04 = st_02 = st_01;
                    /* IL_08: ldarg.0  */
                    st_03 = arg0;
                    /* IL_09: stfld IKVM.Reflection.GenericFieldInstance */
                    (st_02)["<>3__source"] = st_03;
                    /* IL_0E: dup  */
                    st_07 = st_05 = st_04;
                    /* IL_0F: ldarg.1  */
                    st_06 = arg1;
                    /* IL_10: stfld IKVM.Reflection.GenericFieldInstance */
                    (st_05)["<>3__predicate"] = st_06;
                    /* IL_15: ret  */
                    return st_07;
                }
            }
        };
    };
    /* static T E.FirstOrDefault<T>(IEnumerable`1)*/
    asm.x6000003_init = function (T)
    {
        return function (arg0)
        {
            ((asm0)["System.Collections.Generic.IEnumerable`1"](T).init)();
            ((asm0)["System.Collections.Generic.IEnumerator`1"](T).init)();
            ((asm0)["System.Collections.IEnumerator"]().init)();
            ((asm0)["System.IDisposable"]().init)();
        };
    };;
    asm.x6000003 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000003_init(T))(arg0);
            return (asm.x6000003_(T))(arg0);
        };
    };;
    asm.x6000003_ = function (T)
    {
        return function FirstOrDefault(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            var loc3;
            var in_block_0;
            var __pos__;
            var loc0;
            var in_block_1;
            var __finally_continuation_1__;
            var loc1;
            var loc2;
            t0 = T;
            t1 = (asm0)["System.Collections.Generic.IEnumerable`1"](t0);
            t2 = (asm0)["System.Collections.Generic.IEnumerator`1"](t0);
            t3 = (asm0)["System.Collections.IEnumerator"]();
            t4 = (asm0)["System.IDisposable"]();
            loc3 = T.Default;
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: nop  */
                    
                    /* IL_02: ldarg.0  */
                    /* IL_03: callvirt IEnumerator`1 GetEnumerator() */
                    /* IL_08: stloc.0  */
                    loc0 = ((((arg0.ifacemap)[t1])[t0].x60001c0)())(CILJS.convert_box_to_pointer_as_needed(arg0));
                    
                    try {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        
                        if (__pos__ < 0x9){
                            __pos__ = 0x9;
                        }
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x9:
                                /* IL_09: br.s IL_17 */
                                __pos__ = 0x17;
                                continue;
                                case 0xB:
                                /* IL_0B: ldloc.0  */
                                /* IL_0C: callvirt T get_Current() */
                                /* IL_11: stloc.1  */
                                loc1 = ((((loc0.ifacemap)[t2])[t0].x60001c1)())(CILJS.convert_box_to_pointer_as_needed(loc0));
                                /* IL_12: nop  */
                                
                                /* IL_13: ldloc.1  */
                                /* IL_14: stloc.2  */
                                loc2 = loc1;
                                /* IL_15: leave.s IL_38 */
                                in_block_1 = false;
                                __pos__ = 0x38;
                                break;
                                case 0x17:
                                /* IL_17: ldloc.0  */
                                /* IL_18: callvirt Boolean MoveNext() */
                                /* IL_1D: brtrue.s IL_0B */
                                
                                if ((((loc0.ifacemap)[t3].x60001b4)())(CILJS.convert_box_to_pointer_as_needed(loc0))){
                                    __pos__ = 0xB;
                                    continue;
                                }
                                /* IL_1F: leave.s IL_2C */
                                in_block_1 = false;
                                __pos__ = 0x2C;
                                break;
                            }
                        }
                    }
                    
                    finally {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        __pos__ = 0x21;
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x21:
                                /* IL_21: ldloc.0  */
                                /* IL_22: brfalse.s IL_2B */
                                
                                if ((!(loc0))){
                                    __pos__ = 0x2B;
                                    continue;
                                }
                                /* IL_24: ldloc.0  */
                                /* IL_25: callvirt Void Dispose() */
                                (((loc0.ifacemap)[t4].x6000095)())(CILJS.convert_box_to_pointer_as_needed(loc0));
                                /* IL_2A: nop  */
                                
                                case 0x2B:
                                /* IL_2B: endfinally  */
                                in_block_1 = false;
                                __pos__ = __finally_continuation_1__;
                                break;
                            }
                            break;
                        }
                    }
                    continue;
                    case 0x2C:
                    /* IL_2C: ldloca.s 3 */
                    /* IL_2F: initobj T */
                    loc3 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? (0|0) : (new t0()))) : (null));
                    /* IL_34: ldloc.3  */
                    /* IL_35: stloc.2  */
                    loc2 = loc3;
                    case 0x38:
                    /* IL_38: ldloc.2  */
                    /* IL_39: ret  */
                    return loc2;
                }
            }
        };
    };
    /* static System.Boolean E.Any<T>(IEnumerable`1)*/
    asm.x6000004_init = function (T)
    {
        return function (arg0)
        {
            ((asm0)["System.Collections.Generic.IEnumerable`1"](T).init)();
            ((asm0)["System.Collections.Generic.IEnumerator`1"](T).init)();
            ((asm0)["System.Collections.IEnumerator"]().init)();
            ((asm0)["System.IDisposable"]().init)();
        };
    };;
    asm.x6000004 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000004_init(T))(arg0);
            return (asm.x6000004_(T))(arg0);
        };
    };;
    asm.x6000004_ = function (T)
    {
        return function Any(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            var in_block_0;
            var __pos__;
            var loc0;
            var in_block_1;
            var __finally_continuation_1__;
            var loc1;
            var loc2;
            t0 = T;
            t1 = (asm0)["System.Collections.Generic.IEnumerable`1"](t0);
            t2 = (asm0)["System.Collections.Generic.IEnumerator`1"](t0);
            t3 = (asm0)["System.Collections.IEnumerator"]();
            t4 = (asm0)["System.IDisposable"]();
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: nop  */
                    
                    /* IL_02: ldarg.0  */
                    /* IL_03: callvirt IEnumerator`1 GetEnumerator() */
                    /* IL_08: stloc.0  */
                    loc0 = ((((arg0.ifacemap)[t1])[t0].x60001c0)())(CILJS.convert_box_to_pointer_as_needed(arg0));
                    
                    try {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        
                        if (__pos__ < 0x9){
                            __pos__ = 0x9;
                        }
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x9:
                                /* IL_09: br.s IL_17 */
                                __pos__ = 0x17;
                                continue;
                                case 0xB:
                                /* IL_0B: ldloc.0  */
                                /* IL_0C: callvirt T get_Current() */
                                /* IL_11: stloc.1  */
                                loc1 = ((((loc0.ifacemap)[t2])[t0].x60001c1)())(CILJS.convert_box_to_pointer_as_needed(loc0));
                                /* IL_12: nop  */
                                
                                /* IL_13: ldc.i4.1  */
                                /* IL_14: stloc.2  */
                                loc2 = (1|0);
                                /* IL_15: leave.s IL_30 */
                                in_block_1 = false;
                                __pos__ = 0x30;
                                break;
                                case 0x17:
                                /* IL_17: ldloc.0  */
                                /* IL_18: callvirt Boolean MoveNext() */
                                /* IL_1D: brtrue.s IL_0B */
                                
                                if ((((loc0.ifacemap)[t3].x60001b4)())(CILJS.convert_box_to_pointer_as_needed(loc0))){
                                    __pos__ = 0xB;
                                    continue;
                                }
                                /* IL_1F: leave.s IL_2C */
                                in_block_1 = false;
                                __pos__ = 0x2C;
                                break;
                            }
                        }
                    }
                    
                    finally {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        __pos__ = 0x21;
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x21:
                                /* IL_21: ldloc.0  */
                                /* IL_22: brfalse.s IL_2B */
                                
                                if ((!(loc0))){
                                    __pos__ = 0x2B;
                                    continue;
                                }
                                /* IL_24: ldloc.0  */
                                /* IL_25: callvirt Void Dispose() */
                                (((loc0.ifacemap)[t4].x6000095)())(CILJS.convert_box_to_pointer_as_needed(loc0));
                                /* IL_2A: nop  */
                                
                                case 0x2B:
                                /* IL_2B: endfinally  */
                                in_block_1 = false;
                                __pos__ = __finally_continuation_1__;
                                break;
                            }
                            break;
                        }
                    }
                    continue;
                    case 0x2C:
                    /* IL_2C: ldc.i4.0  */
                    /* IL_2D: stloc.2  */
                    loc2 = (0|0);
                    case 0x30:
                    /* IL_30: ldloc.2  */
                    /* IL_31: ret  */
                    return loc2;
                }
            }
        };
    };
    /* System.Int32 P.get_Prop()*/
    asm.x6000005 = function get_Prop(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld Int32 <Prop>k__BackingField */
                /* IL_06: ret  */
                return (arg0)["P<Prop>k__BackingField"];
            }
        }
    };;
    /* System.Void P.set_Prop(Int32)*/
    asm.x6000006 = function set_Prop(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldarg.1  */
                /* IL_02: stfld Int32 <Prop>k__BackingField */
                (arg0)["P<Prop>k__BackingField"] = arg1;
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /*  P..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: call Void .ctor() */
                
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Program.Main()*/
    asm.x6000008_init = function ()
    {
        (asm1.P().init)();
        ((asm1)["Program+<>c"]().init)();
        ((asm0)["System.Func`2"](asm1.P(),(asm0)["System.Int32"]()).init)();
        ((asm0)["System.Func`2"](asm1.P(),(asm0)["System.Boolean"]()).init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function ()
    {
        asm.x6000008_init();
        return asm.x6000008_();
    };;
    asm.x6000008_ = function Main()
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
        var st_27;
        var st_28;
        var st_29;
        var st_2A;
        var st_2B;
        var st_2C;
        var st_2D;
        var st_2E;
        var st_2F;
        var st_30;
        var st_31;
        var st_32;
        var st_33;
        var st_34;
        var st_35;
        var st_36;
        var st_37;
        var st_38;
        var st_39;
        var st_3A;
        var st_3B;
        var st_3C;
        var st_3D;
        var st_3E;
        var st_3F;
        var st_40;
        var st_41;
        var st_42;
        var st_43;
        var st_44;
        var st_45;
        var st_46;
        var st_47;
        var st_48;
        var st_49;
        var st_4A;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        CILJS.init_base_types();
        t0 = asm1.P();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.Boolean"]();
        t3 = (asm1)["Program+<>c"]();
        t4 = (asm0)["System.Func`2"](t0,t1);
        t5 = (asm0)["System.Func`2"](t0,t2);
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.5  */
                /* IL_02: newarr P */
                /* IL_07: stloc.0  */
                loc0 = CILJS.new_array(t0,(5|0));
                /* IL_08: ldloc.0  */
                st_05 = loc0;
                /* IL_09: ldc.i4.0  */
                st_06 = (0|0);
                /* IL_0A: newobj Void .ctor() */
                /* IL_0F: stloc.1  */
                loc1 = CILJS.newobj(t0,asm1.x6000007,[null]);
                /* IL_10: ldloc.1  */
                st_03 = loc1;
                /* IL_11: ldc.i4.s 11 */
                st_04 = (11|0);
                /* IL_13: callvirt Void set_Prop(System.Int32) */
                asm1.x6000006(st_03,st_04);
                /* IL_18: nop  */
                
                /* IL_19: ldloc.1  */
                st_07 = loc1;
                /* IL_1A: stelem.ref  */
                CILJS.stelem_ref(st_05,st_06,st_07);
                /* IL_1B: ldloc.0  */
                st_0B = loc0;
                /* IL_1C: ldc.i4.1  */
                st_0C = (1|0);
                /* IL_1D: newobj Void .ctor() */
                /* IL_22: stloc.1  */
                loc1 = CILJS.newobj(t0,asm1.x6000007,[null]);
                /* IL_23: ldloc.1  */
                st_09 = loc1;
                /* IL_24: ldc.i4.s 22 */
                st_0A = (22|0);
                /* IL_26: callvirt Void set_Prop(System.Int32) */
                asm1.x6000006(st_09,st_0A);
                /* IL_2B: nop  */
                
                /* IL_2C: ldloc.1  */
                st_0D = loc1;
                /* IL_2D: stelem.ref  */
                CILJS.stelem_ref(st_0B,st_0C,st_0D);
                /* IL_2E: ldloc.0  */
                st_11 = loc0;
                /* IL_2F: ldc.i4.2  */
                st_12 = (2|0);
                /* IL_30: newobj Void .ctor() */
                /* IL_35: stloc.1  */
                loc1 = CILJS.newobj(t0,asm1.x6000007,[null]);
                /* IL_36: ldloc.1  */
                st_0F = loc1;
                /* IL_37: ldc.i4.s 33 */
                st_10 = (33|0);
                /* IL_39: callvirt Void set_Prop(System.Int32) */
                asm1.x6000006(st_0F,st_10);
                /* IL_3E: nop  */
                
                /* IL_3F: ldloc.1  */
                st_13 = loc1;
                /* IL_40: stelem.ref  */
                CILJS.stelem_ref(st_11,st_12,st_13);
                /* IL_41: ldloc.0  */
                st_17 = loc0;
                /* IL_42: ldc.i4.3  */
                st_18 = (3|0);
                /* IL_43: newobj Void .ctor() */
                /* IL_48: stloc.1  */
                loc1 = CILJS.newobj(t0,asm1.x6000007,[null]);
                /* IL_49: ldloc.1  */
                st_15 = loc1;
                /* IL_4A: ldc.i4.s 44 */
                st_16 = (44|0);
                /* IL_4C: callvirt Void set_Prop(System.Int32) */
                asm1.x6000006(st_15,st_16);
                /* IL_51: nop  */
                
                /* IL_52: ldloc.1  */
                st_19 = loc1;
                /* IL_53: stelem.ref  */
                CILJS.stelem_ref(st_17,st_18,st_19);
                /* IL_54: ldloc.0  */
                st_1D = loc0;
                /* IL_55: ldc.i4.4  */
                st_1E = (4|0);
                /* IL_56: newobj Void .ctor() */
                /* IL_5B: stloc.1  */
                loc1 = CILJS.newobj(t0,asm1.x6000007,[null]);
                /* IL_5C: ldloc.1  */
                st_1B = loc1;
                /* IL_5D: ldc.i4.s 55 */
                st_1C = (55|0);
                /* IL_5F: callvirt Void set_Prop(System.Int32) */
                asm1.x6000006(st_1B,st_1C);
                /* IL_64: nop  */
                
                /* IL_65: ldloc.1  */
                st_1F = loc1;
                /* IL_66: stelem.ref  */
                CILJS.stelem_ref(st_1D,st_1E,st_1F);
                /* IL_67: ldloc.0  */
                /* IL_68: call P FirstOrDefault[P](System.Collections.Generic.IEnumerable`1[P]) */
                /* IL_6D: callvirt Int32 get_Prop() */
                /* IL_72: box System.Int32 */
                /* IL_77: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box(((asm1.x6000003(asm1.P()))(loc0))["P<Prop>k__BackingField"],t1));
                /* IL_7C: nop  */
                
                /* IL_7D: ldloc.0  */
                /* IL_7E: call Boolean Any[P](System.Collections.Generic.IEnumerable`1[P]) */
                /* IL_83: box System.Boolean */
                /* IL_88: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box((asm1.x6000004(asm1.P()))(loc0),t2));
                /* IL_8D: nop  */
                
                /* IL_8E: ldloc.0  */
                st_2E = loc0;
                asm1.x600001c();
                /* IL_8F: ldsfld Func`2 <>9__0_0 */
                st_27 = (t3)["<>9__0_0"];
                /* IL_94: dup  */
                st_2F = st_29 = st_28 = st_27;
                /* IL_95: brtrue.s IL_AE */
                
                if (st_28){
                    __pos__ = 0xAE;
                    continue;
                }
                /* IL_97: pop  */
                
                asm1.x600001c();
                /* IL_98: ldsfld <>c <>9 */
                st_2A = (t3)["<>9"];
                /* IL_9E: ldftn Int32 <Main>b__0_0(P) */
                st_2B = asm1.x600001e;
                /* IL_A3: newobj Void .ctor(System.Object, System.IntPtr) */
                st_2C = CILJS.newobj(t4,asm0.x6000082,[null, st_2A, st_2B]);
                /* IL_A8: dup  */
                st_2F = st_2D = st_2C;
                asm1.x600001c();
                /* IL_A9: stsfld Func`2 <>9__0_0 */
                (t3)["<>9__0_0"] = st_2D;
                case 0xAE:
                /* IL_AE: call IEnumerable`1 Select[P, System.Int32](System.Collections.Generic.IEnumerable`1[P], System.Func`2[P,System.Int32]) */
                st_30 = (asm1.x6000001(asm1.P(),(asm0)["System.Int32"]()))(st_2E,st_2F);
                /* IL_B3: call Int32 FirstOrDefault[System.Int32](System.Collections.Generic.IEnumerable`1[System.Int32]) */
                st_31 = (asm1.x6000003((asm0)["System.Int32"]()))(st_30);
                /* IL_B8: box System.Int32 */
                st_32 = CILJS.make_box(st_31,t1);
                /* IL_BD: call Void WriteLine(System.Object) */
                asm0.x600005a(st_32);
                /* IL_C2: nop  */
                
                /* IL_C3: ldloc.0  */
                st_3A = loc0;
                asm1.x600001c();
                /* IL_C4: ldsfld Func`2 <>9__0_1 */
                st_33 = (t3)["<>9__0_1"];
                /* IL_C9: dup  */
                st_3B = st_35 = st_34 = st_33;
                /* IL_CA: brtrue.s IL_E3 */
                
                if (st_34){
                    __pos__ = 0xE3;
                    continue;
                }
                /* IL_CC: pop  */
                
                asm1.x600001c();
                /* IL_CD: ldsfld <>c <>9 */
                st_36 = (t3)["<>9"];
                /* IL_D3: ldftn Boolean <Main>b__0_1(P) */
                st_37 = asm1.x600001f;
                /* IL_D8: newobj Void .ctor(System.Object, System.IntPtr) */
                st_38 = CILJS.newobj(t5,asm0.x6000082,[null, st_36, st_37]);
                /* IL_DD: dup  */
                st_3B = st_39 = st_38;
                asm1.x600001c();
                /* IL_DE: stsfld Func`2 <>9__0_1 */
                (t3)["<>9__0_1"] = st_39;
                case 0xE3:
                /* IL_E3: call IEnumerable`1 Where[P](System.Collections.Generic.IEnumerable`1[P], System.Func`2[P,System.Boolean]) */
                st_3C = (asm1.x6000002(asm1.P()))(st_3A,st_3B);
                /* IL_E8: call P FirstOrDefault[P](System.Collections.Generic.IEnumerable`1[P]) */
                st_3D = (asm1.x6000003(asm1.P()))(st_3C);
                /* IL_ED: callvirt Int32 get_Prop() */
                st_3E = (st_3D)["P<Prop>k__BackingField"];
                /* IL_F2: box System.Int32 */
                st_3F = CILJS.make_box(st_3E,t1);
                /* IL_F7: call Void WriteLine(System.Object) */
                asm0.x600005a(st_3F);
                /* IL_FC: nop  */
                
                /* IL_FD: ldloc.0  */
                st_47 = loc0;
                asm1.x600001c();
                /* IL_FE: ldsfld Func`2 <>9__0_2 */
                st_40 = (t3)["<>9__0_2"];
                /* IL_103: dup  */
                st_48 = st_42 = st_41 = st_40;
                /* IL_104: brtrue.s IL_11D */
                
                if (st_41){
                    __pos__ = 0x11D;
                    continue;
                }
                /* IL_106: pop  */
                
                asm1.x600001c();
                /* IL_107: ldsfld <>c <>9 */
                st_43 = (t3)["<>9"];
                /* IL_10D: ldftn Boolean <Main>b__0_2(P) */
                st_44 = asm1.x6000020;
                /* IL_112: newobj Void .ctor(System.Object, System.IntPtr) */
                st_45 = CILJS.newobj(t5,asm0.x6000082,[null, st_43, st_44]);
                /* IL_117: dup  */
                st_48 = st_46 = st_45;
                asm1.x600001c();
                /* IL_118: stsfld Func`2 <>9__0_2 */
                (t3)["<>9__0_2"] = st_46;
                case 0x11D:
                /* IL_11D: call IEnumerable`1 Where[P](System.Collections.Generic.IEnumerable`1[P], System.Func`2[P,System.Boolean]) */
                st_49 = (asm1.x6000002(asm1.P()))(st_47,st_48);
                /* IL_122: call P FirstOrDefault[P](System.Collections.Generic.IEnumerable`1[P]) */
                st_4A = (asm1.x6000003(asm1.P()))(st_49);
                /* IL_127: call Void WriteLine(System.Object) */
                asm0.x600005a(st_4A);
                /* IL_12C: nop  */
                
                /* IL_12D: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000009 = function _ctor(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: call Void .ctor() */
                
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* System.Void <Select>d__0`2.System.IDisposable.Dispose()*/
    asm.x600000b = function System_IDisposable_Dispose(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var in_block_1;
        var __finally_continuation_1__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld Int32 <>1__state */
                /* IL_06: stloc.0  */
                loc0 = (arg0)["_Select_d__0_2<>1__state"];
                /* IL_07: ldloc.0  */
                /* IL_08: ldc.i4.s 253 */
                /* IL_0A: beq.s IL_20 */
                
                if (loc0 === (-3|0)){
                    __pos__ = 0x20;
                    continue;
                }
                /* IL_0E: ldloc.0  */
                /* IL_0F: ldc.i4.1  */
                /* IL_10: beq.s IL_20 */
                
                if (loc0 === (1|0)){
                    __pos__ = 0x20;
                    continue;
                }
                /* IL_12: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x14:
                /* IL_14: nop  */
                
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    
                    if (__pos__ < 0x15){
                        __pos__ = 0x15;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x15:
                            /* IL_15: leave.s IL_1E */
                            in_block_1 = false;
                            __pos__ = 0x1E;
                            break;
                        }
                    }
                }
                
                finally {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 0x17;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x17:
                            /* IL_17: ldarg.0  */
                            /* IL_18: call Void <>m__Finally1() */
                            asm1.x600000d(arg0);
                            /* IL_1D: endfinally  */
                            in_block_1 = false;
                            __pos__ = __finally_continuation_1__;
                            break;
                        }
                        break;
                    }
                }
                continue;
                case 0x1E:
                /* IL_1E: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x20:
                /* IL_20: ret  */
                return ;
            }
        }
    };;
    /* System.Boolean <Select>d__0`2.MoveNext()*/
    asm.x600000c_init = function (arg0)
    {
        ((asm0)["System.Collections.Generic.IEnumerable`1"](((arg0.constructor.GenericArguments)["asm1.t2000005"])[0]).init)();
        ((asm0)["System.Collections.Generic.IEnumerator`1"](((arg0.constructor.GenericArguments)["asm1.t2000005"])[0]).init)();
        ((asm0)["System.Collections.IEnumerator"]().init)();
    };;
    asm.x600000c = function (arg0)
    {
        asm.x600000c_init(arg0);
        return asm.x600000c_(arg0);
    };;
    asm.x600000c_ = function MoveNext(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var in_block_0;
        var __pos__;
        var in_block_1;
        var loc1;
        var loc0;
        var __error_handled_1__;
        t0 = ((arg0.constructor.GenericArguments)["asm1.t2000005"])[0];
        t1 = (asm0)["System.Collections.Generic.IEnumerable`1"](t0);
        t2 = (asm0)["System.Collections.Generic.IEnumerator`1"](t0);
        t3 = (asm0)["System.Collections.IEnumerator"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                try {
                    in_block_1 = true;
                    
                    if (__pos__ < 0x0){
                        __pos__ = 0x0;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x0:
                            /* IL_00: ldarg.0  */
                            /* IL_01: ldfld Int32 <>1__state */
                            /* IL_06: stloc.1  */
                            loc1 = (arg0)["_Select_d__0_2<>1__state"];
                            /* IL_07: ldloc.1  */
                            /* IL_08: brfalse.s IL_1D */
                            
                            if ((!(loc1))){
                                __pos__ = 0x1D;
                                continue;
                            }
                            /* IL_0C: ldloc.1  */
                            /* IL_0D: ldc.i4.1  */
                            /* IL_0E: beq.s IL_74 */
                            
                            if (loc1 === (1|0)){
                                __pos__ = 0x74;
                                continue;
                            }
                            /* IL_10: br.s IL_16 */
                            __pos__ = 0x16;
                            continue;
                            case 0x12:
                            /* IL_12: br.s IL_1D */
                            __pos__ = 0x1D;
                            continue;
                            case 0x14:
                            /* IL_14: br.s IL_74 */
                            __pos__ = 0x74;
                            continue;
                            case 0x16:
                            /* IL_16: ldc.i4.0  */
                            /* IL_17: stloc.0  */
                            loc0 = (0|0);
                            /* IL_18: leave IL_AF */
                            in_block_1 = false;
                            __pos__ = 0xAF;
                            break;
                            case 0x1D:
                            /* IL_1D: ldarg.0  */
                            /* IL_1E: ldc.i4.m1  */
                            /* IL_1F: stfld Int32 <>1__state */
                            (arg0)["_Select_d__0_2<>1__state"] = (-1|0);
                            /* IL_24: nop  */
                            
                            /* IL_25: nop  */
                            
                            /* IL_26: ldarg.0  */
                            /* IL_27: ldarg.0  */
                            /* IL_28: ldfld IEnumerable`1 source */
                            /* IL_2D: callvirt IEnumerator`1 GetEnumerator() */
                            /* IL_32: stfld IEnumerator`1 <>s__1 */
                            (arg0)["_Select_d__0_2<>s__1"] = ((((arg0._Select_d__0_2source.ifacemap)[t1])[t0].x60001c0)())(CILJS.convert_box_to_pointer_as_needed(arg0._Select_d__0_2source));
                            /* IL_37: ldarg.0  */
                            /* IL_38: ldc.i4.s 253 */
                            /* IL_3A: stfld Int32 <>1__state */
                            (arg0)["_Select_d__0_2<>1__state"] = (-3|0);
                            /* IL_3F: br.s IL_88 */
                            __pos__ = 0x88;
                            continue;
                            case 0x41:
                            /* IL_41: ldarg.0  */
                            /* IL_42: ldarg.0  */
                            /* IL_43: ldfld IEnumerator`1 <>s__1 */
                            /* IL_48: callvirt T get_Current() */
                            /* IL_4D: stfld T <s>5__2 */
                            (arg0)["_Select_d__0_2<s>5__2"] = (((((arg0)["_Select_d__0_2<>s__1"].ifacemap)[t2])[t0].x60001c1)())(CILJS.convert_box_to_pointer_as_needed((arg0)["_Select_d__0_2<>s__1"]));
                            /* IL_52: ldarg.0  */
                            /* IL_53: ldarg.0  */
                            /* IL_54: ldfld Func`2 selector */
                            /* IL_59: ldarg.0  */
                            /* IL_5A: ldfld T <s>5__2 */
                            /* IL_5F: callvirt TResult Invoke(T) */
                            /* IL_64: stfld TResult <>2__current */
                            (arg0)["_Select_d__0_2<>2__current"] = ((arg0._Select_d__0_2selector._target) ? (arg0._Select_d__0_2selector._methodPtr(arg0._Select_d__0_2selector._target,(arg0)["_Select_d__0_2<s>5__2"])) : (arg0._Select_d__0_2selector._methodPtr((arg0)["_Select_d__0_2<s>5__2"])));
                            /* IL_69: ldarg.0  */
                            /* IL_6A: ldc.i4.1  */
                            /* IL_6B: stfld Int32 <>1__state */
                            (arg0)["_Select_d__0_2<>1__state"] = (1|0);
                            /* IL_70: ldc.i4.1  */
                            /* IL_71: stloc.0  */
                            loc0 = (1|0);
                            /* IL_72: leave.s IL_AF */
                            in_block_1 = false;
                            __pos__ = 0xAF;
                            break;
                            case 0x74:
                            /* IL_74: ldarg.0  */
                            /* IL_75: ldc.i4.s 253 */
                            /* IL_77: stfld Int32 <>1__state */
                            (arg0)["_Select_d__0_2<>1__state"] = (-3|0);
                            /* IL_7C: ldarg.0  */
                            /* IL_7D: ldflda T <s>5__2 */
                            /* IL_83: initobj T */
                            (arg0)["_Select_d__0_2<s>5__2"] = ((t0.IsValueType) ? (((t0.IsPrimitive) ? (0|0) : (new t0()))) : (null));
                            case 0x88:
                            /* IL_88: ldarg.0  */
                            /* IL_89: ldfld IEnumerator`1 <>s__1 */
                            /* IL_8E: callvirt Boolean MoveNext() */
                            /* IL_93: brtrue.s IL_41 */
                            
                            if (((((arg0)["_Select_d__0_2<>s__1"].ifacemap)[t3].x60001b4)())(CILJS.convert_box_to_pointer_as_needed((arg0)["_Select_d__0_2<>s__1"]))){
                                __pos__ = 0x41;
                                continue;
                            }
                            /* IL_95: ldarg.0  */
                            /* IL_96: call Void <>m__Finally1() */
                            asm1.x600000d(arg0);
                            /* IL_9B: nop  */
                            
                            /* IL_9C: ldarg.0  */
                            /* IL_9D: ldnull  */
                            /* IL_9E: stfld IEnumerator`1 <>s__1 */
                            (arg0)["_Select_d__0_2<>s__1"] = null;
                            /* IL_A3: ldc.i4.0  */
                            /* IL_A4: stloc.0  */
                            loc0 = (0|0);
                            /* IL_A5: leave.s IL_AF */
                            in_block_1 = false;
                            __pos__ = 0xAF;
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
                        in_block_1 = true;
                        
                        if (__pos__ < 0xA7){
                            __pos__ = 0xA7;
                        }
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0xA7:
                                /* IL_A7: ldarg.0  */
                                /* IL_A8: call Void System.IDisposable.Dispose() */
                                asm1.x600000b(arg0);
                                /* IL_AD: nop  */
                                
                                /* IL_AE: endfinally  */
                                in_block_1 = false;
                                __pos__ = __finally_continuation_1__;
                                break;
                                throw __error__;
                            }
                        }
                    }
                }
                continue;
                case 0xAF:
                /* IL_AF: ldloc.0  */
                /* IL_B0: ret  */
                return loc0;
            }
        }
    };
    /* System.Void <Select>d__0`2.<>m__Finally1()*/
    asm.x600000d = function __m__Finally1(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.IDisposable"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldc.i4.m1  */
                /* IL_02: stfld Int32 <>1__state */
                (arg0)["_Select_d__0_2<>1__state"] = (-1|0);
                /* IL_07: ldarg.0  */
                /* IL_08: ldfld IEnumerator`1 <>s__1 */
                /* IL_0D: brfalse.s IL_1B */
                
                if ((!((arg0)["_Select_d__0_2<>s__1"]))){
                    __pos__ = 0x1B;
                    continue;
                }
                /* IL_0F: ldarg.0  */
                /* IL_10: ldfld IEnumerator`1 <>s__1 */
                /* IL_15: callvirt Void Dispose() */
                ((((arg0)["_Select_d__0_2<>s__1"].ifacemap)[t0].x6000095)())(CILJS.convert_box_to_pointer_as_needed((arg0)["_Select_d__0_2<>s__1"]));
                /* IL_1A: nop  */
                
                case 0x1B:
                /* IL_1B: ret  */
                return ;
            }
        }
    };;
    /* TResult <Select>d__0`2.System.Collections.Generic.IEnumerator<TResult>.get_Current()*/
    asm.x600000e = function System_Collections_Generic_IEnumerator_TResult__get_Current(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld TResult <>2__current */
                /* IL_06: ret  */
                return (arg0)["_Select_d__0_2<>2__current"];
            }
        }
    };;
    /* System.Void <Select>d__0`2.System.Collections.IEnumerator.Reset()*/
    asm.x600000f_init = function (arg0)
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0)
    {
        asm.x600000f_init(arg0);
        return asm.x600000f_(arg0);
    };;
    asm.x600000f_ = function System_Collections_IEnumerator_Reset(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.NotSupportedException"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor() */
                /* IL_05: throw  */
                throw CILJS.newobj(t0,asm0.x60000d9,[null]);
            }
        }
    };
    /* System.Object <Select>d__0`2.System.Collections.IEnumerator.get_Current()*/
    asm.x6000010 = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = ((arg0.constructor.GenericArguments)["asm1.t2000005"])[1];
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld TResult <>2__current */
                /* IL_06: box TResult */
                /* IL_0B: ret  */
                return CILJS.box((arg0)["_Select_d__0_2<>2__current"],t0);
            }
        }
    };;
    /* System.Collections.Generic.IEnumerator`1[TResult] <Select>d__0`2.System.Collections.Generic.IEnumerable<TResult>.GetEnumerator()*/
    asm.x6000011_init = function (arg0)
    {
        ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
        ((asm1)["E+<Select>d__0`2"](((arg0.constructor.GenericArguments)["asm1.t2000005"])[0],((arg0.constructor.GenericArguments)["asm1.t2000005"])[1]).init)();
    };;
    asm.x6000011 = function (arg0)
    {
        asm.x6000011_init(arg0);
        return asm.x6000011_(arg0);
    };;
    asm.x6000011_ = function System_Collections_Generic_IEnumerable_TResult__GetEnumerator(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
        t1 = ((arg0.constructor.GenericArguments)["asm1.t2000005"])[0];
        t2 = ((arg0.constructor.GenericArguments)["asm1.t2000005"])[1];
        t3 = (asm1)["E+<Select>d__0`2"](t1,t2);
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld Int32 <>1__state */
                /* IL_06: ldc.i4.s 254 */
                /* IL_08: bne.un.s IL_22 */
                
                if (CILJS.unsigned_value((arg0)["_Select_d__0_2<>1__state"]) != CILJS.unsigned_value((-2|0))){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_0A: ldarg.0  */
                /* IL_0B: ldfld Int32 <>l__initialThreadId */
                /* IL_10: call Int32 get_CurrentManagedThreadId() */
                /* IL_15: bne.un.s IL_22 */
                
                if (CILJS.unsigned_value((arg0)["_Select_d__0_2<>l__initialThreadId"]) != CILJS.unsigned_value(asm0.x600006e())){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_17: ldarg.0  */
                /* IL_18: ldc.i4.0  */
                /* IL_19: stfld Int32 <>1__state */
                (arg0)["_Select_d__0_2<>1__state"] = (0|0);
                /* IL_1E: ldarg.0  */
                /* IL_1F: stloc.0  */
                loc0 = arg0;
                /* IL_20: br.s IL_29 */
                __pos__ = 0x29;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0  */
                /* IL_23: newobj Void .ctor(System.Int32) */
                /* IL_28: stloc.0  */
                loc0 = CILJS.newobj(t3,asm1.x600000a,[null, (0|0)]);
                case 0x29:
                /* IL_29: ldloc.0  */
                /* IL_2A: ldarg.0  */
                /* IL_2B: ldfld IEnumerable`1 <>3__source */
                /* IL_30: stfld IEnumerable`1 source */
                loc0._Select_d__0_2source = (arg0)["<>3__source"];
                /* IL_35: ldloc.0  */
                /* IL_36: ldarg.0  */
                /* IL_37: ldfld Func`2 <>3__selector */
                /* IL_3C: stfld Func`2 selector */
                loc0._Select_d__0_2selector = (arg0)["<>3__selector"];
                /* IL_41: ldloc.0  */
                /* IL_42: ret  */
                return loc0;
            }
        }
    };
    /* System.Collections.IEnumerator <Select>d__0`2.System.Collections.IEnumerable.GetEnumerator()*/
    asm.x6000012 = function System_Collections_IEnumerable_GetEnumerator(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: call IEnumerator`1 System.Collections.Generic.IEnumerable<TResult>.GetEnumerator() */
                /* IL_06: ret  */
                return asm1.x6000011(arg0);
            }
        }
    };;
    /*  <Select>d__0`2..ctor(Int32)*/
    asm.x600000a = function _ctor(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: call Void .ctor() */
                
                /* IL_06: nop  */
                
                /* IL_07: ldarg.0  */
                /* IL_08: ldarg.1  */
                /* IL_09: stfld Int32 <>1__state */
                (arg0)["_Select_d__0_2<>1__state"] = arg1;
                /* IL_0E: ldarg.0  */
                /* IL_0F: call Int32 get_CurrentManagedThreadId() */
                /* IL_14: stfld Int32 <>l__initialThreadId */
                (arg0)["_Select_d__0_2<>l__initialThreadId"] = asm0.x600006e();
                /* IL_19: ret  */
                return ;
            }
        }
    };;
    /* System.Void <Where>d__1`1.System.IDisposable.Dispose()*/
    asm.x6000014 = function System_IDisposable_Dispose(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var in_block_1;
        var __finally_continuation_1__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld Int32 <>1__state */
                /* IL_06: stloc.0  */
                loc0 = (arg0)["_Where_d__1_1<>1__state"];
                /* IL_07: ldloc.0  */
                /* IL_08: ldc.i4.s 253 */
                /* IL_0A: beq.s IL_20 */
                
                if (loc0 === (-3|0)){
                    __pos__ = 0x20;
                    continue;
                }
                /* IL_0E: ldloc.0  */
                /* IL_0F: ldc.i4.1  */
                /* IL_10: beq.s IL_20 */
                
                if (loc0 === (1|0)){
                    __pos__ = 0x20;
                    continue;
                }
                /* IL_12: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x14:
                /* IL_14: nop  */
                
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    
                    if (__pos__ < 0x15){
                        __pos__ = 0x15;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x15:
                            /* IL_15: leave.s IL_1E */
                            in_block_1 = false;
                            __pos__ = 0x1E;
                            break;
                        }
                    }
                }
                
                finally {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 0x17;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x17:
                            /* IL_17: ldarg.0  */
                            /* IL_18: call Void <>m__Finally1() */
                            asm1.x6000016(arg0);
                            /* IL_1D: endfinally  */
                            in_block_1 = false;
                            __pos__ = __finally_continuation_1__;
                            break;
                        }
                        break;
                    }
                }
                continue;
                case 0x1E:
                /* IL_1E: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x20:
                /* IL_20: ret  */
                return ;
            }
        }
    };;
    /* System.Boolean <Where>d__1`1.MoveNext()*/
    asm.x6000015 = function MoveNext(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var in_block_0;
        var __pos__;
        var in_block_1;
        var loc1;
        var loc0;
        var loc2;
        var __error_handled_1__;
        t0 = ((arg0.constructor.GenericArguments)["asm1.t2000006"])[0];
        t1 = (asm0)["System.Collections.Generic.IEnumerable`1"](t0);
        t2 = (asm0)["System.Collections.Generic.IEnumerator`1"](t0);
        t3 = (asm0)["System.Collections.IEnumerator"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                
                try {
                    in_block_1 = true;
                    
                    if (__pos__ < 0x0){
                        __pos__ = 0x0;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x0:
                            /* IL_00: ldarg.0  */
                            /* IL_01: ldfld Int32 <>1__state */
                            /* IL_06: stloc.1  */
                            loc1 = (arg0)["_Where_d__1_1<>1__state"];
                            /* IL_07: ldloc.1  */
                            /* IL_08: brfalse.s IL_1D */
                            
                            if ((!(loc1))){
                                __pos__ = 0x1D;
                                continue;
                            }
                            /* IL_0C: ldloc.1  */
                            /* IL_0D: ldc.i4.1  */
                            /* IL_0E: beq.s IL_7E */
                            
                            if (loc1 === (1|0)){
                                __pos__ = 0x7E;
                                continue;
                            }
                            /* IL_10: br.s IL_16 */
                            __pos__ = 0x16;
                            continue;
                            case 0x12:
                            /* IL_12: br.s IL_1D */
                            __pos__ = 0x1D;
                            continue;
                            case 0x14:
                            /* IL_14: br.s IL_7E */
                            __pos__ = 0x7E;
                            continue;
                            case 0x16:
                            /* IL_16: ldc.i4.0  */
                            /* IL_17: stloc.0  */
                            loc0 = (0|0);
                            /* IL_18: leave IL_B9 */
                            in_block_1 = false;
                            __pos__ = 0xB9;
                            break;
                            case 0x1D:
                            /* IL_1D: ldarg.0  */
                            /* IL_1E: ldc.i4.m1  */
                            /* IL_1F: stfld Int32 <>1__state */
                            (arg0)["_Where_d__1_1<>1__state"] = (-1|0);
                            /* IL_24: nop  */
                            
                            /* IL_25: nop  */
                            
                            /* IL_26: ldarg.0  */
                            /* IL_27: ldarg.0  */
                            /* IL_28: ldfld IEnumerable`1 source */
                            /* IL_2D: callvirt IEnumerator`1 GetEnumerator() */
                            /* IL_32: stfld IEnumerator`1 <>s__1 */
                            (arg0)["_Where_d__1_1<>s__1"] = ((((arg0._Where_d__1_1source.ifacemap)[t1])[t0].x60001c0)())(CILJS.convert_box_to_pointer_as_needed(arg0._Where_d__1_1source));
                            /* IL_37: ldarg.0  */
                            /* IL_38: ldc.i4.s 253 */
                            /* IL_3A: stfld Int32 <>1__state */
                            (arg0)["_Where_d__1_1<>1__state"] = (-3|0);
                            /* IL_3F: br.s IL_92 */
                            __pos__ = 0x92;
                            continue;
                            case 0x41:
                            /* IL_41: ldarg.0  */
                            /* IL_42: ldarg.0  */
                            /* IL_43: ldfld IEnumerator`1 <>s__1 */
                            /* IL_48: callvirt T get_Current() */
                            /* IL_4D: stfld T <s>5__2 */
                            (arg0)["_Where_d__1_1<s>5__2"] = (((((arg0)["_Where_d__1_1<>s__1"].ifacemap)[t2])[t0].x60001c1)())(CILJS.convert_box_to_pointer_as_needed((arg0)["_Where_d__1_1<>s__1"]));
                            /* IL_52: ldarg.0  */
                            /* IL_53: ldfld Func`2 predicate */
                            /* IL_58: ldarg.0  */
                            /* IL_59: ldfld T <s>5__2 */
                            /* IL_5E: callvirt Boolean Invoke(T) */
                            /* IL_63: stloc.2  */
                            loc2 = ((arg0._Where_d__1_1predicate._target) ? (arg0._Where_d__1_1predicate._methodPtr(arg0._Where_d__1_1predicate._target,(arg0)["_Where_d__1_1<s>5__2"])) : (arg0._Where_d__1_1predicate._methodPtr((arg0)["_Where_d__1_1<s>5__2"])));
                            /* IL_64: ldloc.2  */
                            /* IL_65: brfalse.s IL_86 */
                            
                            if ((!(loc2))){
                                __pos__ = 0x86;
                                continue;
                            }
                            /* IL_67: ldarg.0  */
                            /* IL_68: ldarg.0  */
                            /* IL_69: ldfld T <s>5__2 */
                            /* IL_6E: stfld T <>2__current */
                            (arg0)["_Where_d__1_1<>2__current"] = (arg0)["_Where_d__1_1<s>5__2"];
                            /* IL_73: ldarg.0  */
                            /* IL_74: ldc.i4.1  */
                            /* IL_75: stfld Int32 <>1__state */
                            (arg0)["_Where_d__1_1<>1__state"] = (1|0);
                            /* IL_7A: ldc.i4.1  */
                            /* IL_7B: stloc.0  */
                            loc0 = (1|0);
                            /* IL_7C: leave.s IL_B9 */
                            in_block_1 = false;
                            __pos__ = 0xB9;
                            break;
                            case 0x7E:
                            /* IL_7E: ldarg.0  */
                            /* IL_7F: ldc.i4.s 253 */
                            /* IL_81: stfld Int32 <>1__state */
                            (arg0)["_Where_d__1_1<>1__state"] = (-3|0);
                            case 0x86:
                            /* IL_86: ldarg.0  */
                            /* IL_87: ldflda T <s>5__2 */
                            /* IL_8D: initobj T */
                            (arg0)["_Where_d__1_1<s>5__2"] = ((t0.IsValueType) ? (((t0.IsPrimitive) ? (0|0) : (new t0()))) : (null));
                            case 0x92:
                            /* IL_92: ldarg.0  */
                            /* IL_93: ldfld IEnumerator`1 <>s__1 */
                            /* IL_98: callvirt Boolean MoveNext() */
                            /* IL_9D: brtrue.s IL_41 */
                            
                            if (((((arg0)["_Where_d__1_1<>s__1"].ifacemap)[t3].x60001b4)())(CILJS.convert_box_to_pointer_as_needed((arg0)["_Where_d__1_1<>s__1"]))){
                                __pos__ = 0x41;
                                continue;
                            }
                            /* IL_9F: ldarg.0  */
                            /* IL_A0: call Void <>m__Finally1() */
                            asm1.x6000016(arg0);
                            /* IL_A5: nop  */
                            
                            /* IL_A6: ldarg.0  */
                            /* IL_A7: ldnull  */
                            /* IL_A8: stfld IEnumerator`1 <>s__1 */
                            (arg0)["_Where_d__1_1<>s__1"] = null;
                            /* IL_AD: ldc.i4.0  */
                            /* IL_AE: stloc.0  */
                            loc0 = (0|0);
                            /* IL_AF: leave.s IL_B9 */
                            in_block_1 = false;
                            __pos__ = 0xB9;
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
                        in_block_1 = true;
                        
                        if (__pos__ < 0xB1){
                            __pos__ = 0xB1;
                        }
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0xB1:
                                /* IL_B1: ldarg.0  */
                                /* IL_B2: call Void System.IDisposable.Dispose() */
                                asm1.x6000014(arg0);
                                /* IL_B7: nop  */
                                
                                /* IL_B8: endfinally  */
                                in_block_1 = false;
                                __pos__ = __finally_continuation_1__;
                                break;
                                throw __error__;
                            }
                        }
                    }
                }
                continue;
                case 0xB9:
                /* IL_B9: ldloc.0  */
                /* IL_BA: ret  */
                return loc0;
            }
        }
    };;
    /* System.Void <Where>d__1`1.<>m__Finally1()*/
    asm.x6000016 = function __m__Finally1(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.IDisposable"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldc.i4.m1  */
                /* IL_02: stfld Int32 <>1__state */
                (arg0)["_Where_d__1_1<>1__state"] = (-1|0);
                /* IL_07: ldarg.0  */
                /* IL_08: ldfld IEnumerator`1 <>s__1 */
                /* IL_0D: brfalse.s IL_1B */
                
                if ((!((arg0)["_Where_d__1_1<>s__1"]))){
                    __pos__ = 0x1B;
                    continue;
                }
                /* IL_0F: ldarg.0  */
                /* IL_10: ldfld IEnumerator`1 <>s__1 */
                /* IL_15: callvirt Void Dispose() */
                ((((arg0)["_Where_d__1_1<>s__1"].ifacemap)[t0].x6000095)())(CILJS.convert_box_to_pointer_as_needed((arg0)["_Where_d__1_1<>s__1"]));
                /* IL_1A: nop  */
                
                case 0x1B:
                /* IL_1B: ret  */
                return ;
            }
        }
    };;
    /* T <Where>d__1`1.System.Collections.Generic.IEnumerator<T>.get_Current()*/
    asm.x6000017 = function System_Collections_Generic_IEnumerator_T__get_Current(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld T <>2__current */
                /* IL_06: ret  */
                return (arg0)["_Where_d__1_1<>2__current"];
            }
        }
    };;
    /* System.Void <Where>d__1`1.System.Collections.IEnumerator.Reset()*/
    asm.x6000018_init = function (arg0)
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x6000018 = asm.x6000018_;
    };;
    asm.x6000018 = function (arg0)
    {
        asm.x6000018_init(arg0);
        return asm.x6000018_(arg0);
    };;
    asm.x6000018_ = function System_Collections_IEnumerator_Reset(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.NotSupportedException"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: newobj Void .ctor() */
                /* IL_05: throw  */
                throw CILJS.newobj(t0,asm0.x60000d9,[null]);
            }
        }
    };
    /* System.Object <Where>d__1`1.System.Collections.IEnumerator.get_Current()*/
    asm.x6000019 = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = ((arg0.constructor.GenericArguments)["asm1.t2000006"])[0];
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld T <>2__current */
                /* IL_06: box T */
                /* IL_0B: ret  */
                return CILJS.box((arg0)["_Where_d__1_1<>2__current"],t0);
            }
        }
    };;
    /* System.Collections.Generic.IEnumerator`1[T] <Where>d__1`1.System.Collections.Generic.IEnumerable<T>.GetEnumerator()*/
    asm.x600001a_init = function (arg0)
    {
        ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
        ((asm1)["E+<Where>d__1`1"](((arg0.constructor.GenericArguments)["asm1.t2000006"])[0]).init)();
    };;
    asm.x600001a = function (arg0)
    {
        asm.x600001a_init(arg0);
        return asm.x600001a_(arg0);
    };;
    asm.x600001a_ = function System_Collections_Generic_IEnumerable_T__GetEnumerator(arg0)
    {
        var t0;
        var t1;
        var t2;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
        t1 = ((arg0.constructor.GenericArguments)["asm1.t2000006"])[0];
        t2 = (asm1)["E+<Where>d__1`1"](t1);
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld Int32 <>1__state */
                /* IL_06: ldc.i4.s 254 */
                /* IL_08: bne.un.s IL_22 */
                
                if (CILJS.unsigned_value((arg0)["_Where_d__1_1<>1__state"]) != CILJS.unsigned_value((-2|0))){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_0A: ldarg.0  */
                /* IL_0B: ldfld Int32 <>l__initialThreadId */
                /* IL_10: call Int32 get_CurrentManagedThreadId() */
                /* IL_15: bne.un.s IL_22 */
                
                if (CILJS.unsigned_value((arg0)["_Where_d__1_1<>l__initialThreadId"]) != CILJS.unsigned_value(asm0.x600006e())){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_17: ldarg.0  */
                /* IL_18: ldc.i4.0  */
                /* IL_19: stfld Int32 <>1__state */
                (arg0)["_Where_d__1_1<>1__state"] = (0|0);
                /* IL_1E: ldarg.0  */
                /* IL_1F: stloc.0  */
                loc0 = arg0;
                /* IL_20: br.s IL_29 */
                __pos__ = 0x29;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0  */
                /* IL_23: newobj Void .ctor(System.Int32) */
                /* IL_28: stloc.0  */
                loc0 = CILJS.newobj(t2,asm1.x6000013,[null, (0|0)]);
                case 0x29:
                /* IL_29: ldloc.0  */
                /* IL_2A: ldarg.0  */
                /* IL_2B: ldfld IEnumerable`1 <>3__source */
                /* IL_30: stfld IEnumerable`1 source */
                loc0._Where_d__1_1source = (arg0)["<>3__source"];
                /* IL_35: ldloc.0  */
                /* IL_36: ldarg.0  */
                /* IL_37: ldfld Func`2 <>3__predicate */
                /* IL_3C: stfld Func`2 predicate */
                loc0._Where_d__1_1predicate = (arg0)["<>3__predicate"];
                /* IL_41: ldloc.0  */
                /* IL_42: ret  */
                return loc0;
            }
        }
    };
    /* System.Collections.IEnumerator <Where>d__1`1.System.Collections.IEnumerable.GetEnumerator()*/
    asm.x600001b = function System_Collections_IEnumerable_GetEnumerator(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: call IEnumerator`1 System.Collections.Generic.IEnumerable<T>.GetEnumerator() */
                /* IL_06: ret  */
                return asm1.x600001a(arg0);
            }
        }
    };;
    /*  <Where>d__1`1..ctor(Int32)*/
    asm.x6000013 = function _ctor(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: call Void .ctor() */
                
                /* IL_06: nop  */
                
                /* IL_07: ldarg.0  */
                /* IL_08: ldarg.1  */
                /* IL_09: stfld Int32 <>1__state */
                (arg0)["_Where_d__1_1<>1__state"] = arg1;
                /* IL_0E: ldarg.0  */
                /* IL_0F: call Int32 get_CurrentManagedThreadId() */
                /* IL_14: stfld Int32 <>l__initialThreadId */
                (arg0)["_Where_d__1_1<>l__initialThreadId"] = asm0.x600006e();
                /* IL_19: ret  */
                return ;
            }
        }
    };;
    /* System.Int32 <>c.<Main>b__0_0(P)*/
    asm.x600001e = function _Main_b__0_0(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.1  */
                /* IL_01: callvirt Int32 get_Prop() */
                /* IL_06: ret  */
                return (arg1)["P<Prop>k__BackingField"];
            }
        }
    };;
    /* System.Boolean <>c.<Main>b__0_1(P)*/
    asm.x600001f = function _Main_b__0_1(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.1  */
                /* IL_01: callvirt Int32 get_Prop() */
                /* IL_06: ldc.i4.s 22 */
                /* IL_09: ceq  */
                /* IL_0A: ret  */
                return (((arg1)["P<Prop>k__BackingField"] === (22|0)) ? 1 : 0);
            }
        }
    };;
    /* System.Boolean <>c.<Main>b__0_2(P)*/
    asm.x6000020 = function _Main_b__0_2(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.1  */
                /* IL_01: callvirt Int32 get_Prop() */
                /* IL_06: ldc.i4.s 99 */
                /* IL_09: ceq  */
                /* IL_0A: ret  */
                return (((arg1)["P<Prop>k__BackingField"] === (99|0)) ? 1 : 0);
            }
        }
    };;
    /* static  <>c..cctor()*/
    asm.x600001c_init = function ()
    {
        ((asm1)["Program+<>c"]().init)();
        asm.x600001c = asm.x600001c_;
    };;
    asm.x600001c = function ()
    {
        asm.x600001c_init();
        return asm.x600001c_();
    };;
    asm.x600001c_ = function _cctor()
    {
        var t0;
        var in_block_0;
        var __pos__;
        
        if ((asm1)["Program+<>c"]().FieldsInitialized){
            return;
        }
        (asm1)["Program+<>c"]().FieldsInitialized = true;
        t0 = (asm1)["Program+<>c"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                asm1.x600001c();
                /* IL_00: newobj Void .ctor() */
                /* IL_05: stsfld <>c <>9 */
                (t0)["<>9"] = CILJS.newobj(t0,asm1.x600001d,[null]);
                /* IL_0A: ret  */
                return ;
            }
        }
    };
    /*  <>c..ctor()*/
    asm.x600001d = function _ctor(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: call Void .ctor() */
                
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    asm.E = CILJS.declare_type(
        "E",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"E",false,false,false,false,false,[
                    [
                        (asm0)["System.Runtime.CompilerServices.ExtensionAttribute"](),
                        asm0.x600018a
                    ]
                ],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function E() { c.init(); }");
    asm.P = CILJS.declare_type(
        "P",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"P",false,false,false,false,false,[],[
                    [asm1, "x6000005", "get_Prop"],
                    [asm1, "x6000006", "set_Prop"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function P() { c.init();(this)[\"P<Prop>k__BackingField\"] = 0 }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Program() { c.init(); }");
    (asm)["E+<Select>d__0`2"] = CILJS.declare_type(
        "_Select_d__0_2",
        ["T", "TResult"],
        function (T, TResult)
        {
            return (asm0)["System.Object"]();
        },
        function (T, TResult)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"E+<Select>d__0`2",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            (this.GenericArguments)["asm1.t2000005"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm1.t2000005<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            CILJS.declare_virtual(this,"asm1.x600000c","asm1.x600000c");
            CILJS.declare_virtual(this,"asm1.x600000e","asm1.x600000e");
            CILJS.declare_virtual(this,"asm1.x600000f","asm1.x600000f");
            CILJS.declare_virtual(this,"asm1.x6000010","asm1.x6000010");
            CILJS.declare_virtual(this,"asm1.x6000011","asm1.x6000011");
            CILJS.declare_virtual(this,"asm1.x6000012","asm1.x6000012");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerable`1"](TResult), TResult],
                {
                    'x60001c0': function (){ return asm1.x6000011;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                {
                    'x60001b2': function (){ return asm1.x6000012;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerator`1"](TResult), TResult],
                {
                    'x60001c1': function (){ return asm1.x600000e;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                {
                    'x60001b3': function (){ return asm1.x6000010;},
                    'x60001b4': function (){ return asm1.x600000c;},
                    'x60001b5': function (){ return asm1.x600000f;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x6000095': function (){ return asm1.x600000b;}
                });
        },
        "function _Select_d__0_2() { c.init();(this)[\"_Select_d__0_2<>1__state\"] = 0;(this)[\"_Select_d__0_2<>2__current\"] = TResult.Default;(this)[\"_Select_d__0_2<>l__initialThreadId\"] = 0;this._Select_d__0_2source = null;(this)[\"<>3__source\"] = null;this._Select_d__0_2selector = null;(this)[\"<>3__selector\"] = null;(this)[\"_Select_d__0_2<>s__1\"] = null;(this)[\"_Select_d__0_2<s>5__2\"] = T.Default }");
    (asm)["E+<Where>d__1`1"] = CILJS.declare_type(
        "_Where_d__1_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"E+<Where>d__1`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006",null);
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm1.x6000014","asm1.x6000014");
            CILJS.declare_virtual(this,"asm1.x6000015","asm1.x6000015");
            CILJS.declare_virtual(this,"asm1.x6000017","asm1.x6000017");
            CILJS.declare_virtual(this,"asm1.x6000018","asm1.x6000018");
            CILJS.declare_virtual(this,"asm1.x6000019","asm1.x6000019");
            CILJS.declare_virtual(this,"asm1.x600001a","asm1.x600001a");
            CILJS.declare_virtual(this,"asm1.x600001b","asm1.x600001b");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerable`1"](T), T],
                {
                    'x60001c0': function (){ return asm1.x600001a;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                {
                    'x60001b2': function (){ return asm1.x600001b;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerator`1"](T), T],
                {
                    'x60001c1': function (){ return asm1.x6000017;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                {
                    'x60001b3': function (){ return asm1.x6000019;},
                    'x60001b4': function (){ return asm1.x6000015;},
                    'x60001b5': function (){ return asm1.x6000018;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x6000095': function (){ return asm1.x6000014;}
                });
        },
        "function _Where_d__1_1() { c.init();(this)[\"_Where_d__1_1<>1__state\"] = 0;(this)[\"_Where_d__1_1<>2__current\"] = T.Default;(this)[\"_Where_d__1_1<>l__initialThreadId\"] = 0;this._Where_d__1_1source = null;(this)[\"<>3__source\"] = null;this._Where_d__1_1predicate = null;(this)[\"<>3__predicate\"] = null;(this)[\"_Where_d__1_1<>s__1\"] = null;(this)[\"_Where_d__1_1<s>5__2\"] = T.Default }");
    (asm)["Program+<>c"] = CILJS.declare_type(
        "__c",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+<>c",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007",null);
            (this)["<>9"] = null;
            (this)["<>9__0_0"] = null;
            (this)["<>9__0_1"] = null;
            (this)["<>9__0_2"] = null;
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function __c() { c.init(); }");
    asm.entryPoint = asm.x6000008;
})(asm1 || (asm1 = {}));
