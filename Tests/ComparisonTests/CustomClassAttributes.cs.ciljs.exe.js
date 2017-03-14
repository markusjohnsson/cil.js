var asm1;(function (asm)
{
    asm.FullName = "CustomClassAttributes.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm0.x600003e(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.String A2.get_P()*/
    asm.x6000003 = function get_P(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld String <P>k__BackingField */
        /* IL_06: ret  */
        return (arg0)["A2<P>k__BackingField"];
    };;
    /* System.Void A2.set_P(String)*/
    asm.x6000004 = function set_P(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld String <P>k__BackingField */
        (arg0)["A2<P>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  A2..ctor(String)*/
    asm.x6000005 = function _ctor(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm0.x600003e(arg0);
        /* IL_06: nop  */
        /* IL_07: nop  */
        /* IL_08: ldarg.0  */
        /* IL_09: ldarg.1  */
        /* IL_0A: call Void set_P(System.String) */
        asm1.x6000004(arg0,arg1);
        /* IL_0F: nop  */
        /* IL_10: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Boolean MiniLinq.Any<T>(IEnumerable`1)*/
    asm.x6000008_init = function (T)
    {
        return function (arg0)
        {
            ((asm0)["System.Collections.Generic.IEnumerable`1"](T).init)();
            ((asm0)["System.Collections.Generic.IEnumerator`1"](T).init)();
            ((asm0)["System.Collections.IEnumerator"]().init)();
            ((asm0)["System.IDisposable"]().init)();
        };
    };;
    asm.x6000008 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000008_init(T))(arg0);
            return (asm.x6000008_(T))(arg0);
        };
    };;
    asm.x6000008_ = function (T)
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
                    loc0 = ((((arg0.ifacemap)[t1])[t0].x60001c6)())(CILJS.convert_box_to_pointer_as_needed(arg0));
                    
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
                                loc1 = ((((loc0.ifacemap)[t2])[t0].x60001c7)())(CILJS.convert_box_to_pointer_as_needed(loc0));
                                /* IL_12: nop  */
                                
                                /* IL_13: ldc.i4.1  */
                                /* IL_14: stloc.2  */
                                loc2 = (1|0);
                                /* IL_15: leave.s IL_30 */
                                in_block_1 = false;
                                __pos__ = 0x30;
                                continue;
                                case 0x17:
                                /* IL_17: ldloc.0  */
                                /* IL_18: callvirt Boolean MoveNext() */
                                /* IL_1D: brtrue.s IL_0B */
                                
                                if ((((loc0.ifacemap)[t3].x60001ba)())(CILJS.convert_box_to_pointer_as_needed(loc0))){
                                    __pos__ = 0xB;
                                    continue;
                                }
                                /* IL_1F: leave.s IL_2C */
                                in_block_1 = false;
                                __pos__ = 0x2C;
                                continue;
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
                                continue;
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
    /* static System.Int32 MiniLinq.Count<T>(IEnumerable`1)*/
    asm.x6000009_init = function (T)
    {
        return function (arg0)
        {
            ((asm0)["System.Collections.Generic.IEnumerable`1"](T).init)();
            ((asm0)["System.Collections.Generic.IEnumerator`1"](T).init)();
            ((asm0)["System.Collections.IEnumerator"]().init)();
            ((asm0)["System.IDisposable"]().init)();
        };
    };;
    asm.x6000009 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000009_init(T))(arg0);
            return (asm.x6000009_(T))(arg0);
        };
    };;
    asm.x6000009_ = function (T)
    {
        return function Count(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            var in_block_0;
            var __pos__;
            var loc0;
            var loc1;
            var in_block_1;
            var __finally_continuation_1__;
            var loc2;
            var loc3;
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
                    
                    /* IL_01: ldc.i4.0  */
                    /* IL_02: stloc.0  */
                    loc0 = (0|0);
                    /* IL_03: nop  */
                    
                    /* IL_04: ldarg.0  */
                    /* IL_05: callvirt IEnumerator`1 GetEnumerator() */
                    /* IL_0A: stloc.1  */
                    loc1 = ((((arg0.ifacemap)[t1])[t0].x60001c6)())(CILJS.convert_box_to_pointer_as_needed(arg0));
                    
                    try {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        
                        if (__pos__ < 0xB){
                            __pos__ = 0xB;
                        }
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0xB:
                                /* IL_0B: br.s IL_1A */
                                __pos__ = 0x1A;
                                continue;
                                case 0xD:
                                /* IL_0D: ldloc.1  */
                                /* IL_0E: callvirt T get_Current() */
                                /* IL_13: stloc.2  */
                                loc2 = ((((loc1.ifacemap)[t2])[t0].x60001c7)())(CILJS.convert_box_to_pointer_as_needed(loc1));
                                /* IL_14: nop  */
                                
                                /* IL_15: ldloc.0  */
                                /* IL_16: ldc.i4.1  */
                                /* IL_17: add  */
                                /* IL_18: stloc.0  */
                                loc0 = (loc0 + (1|0)) | (0|0);
                                /* IL_19: nop  */
                                
                                case 0x1A:
                                /* IL_1A: ldloc.1  */
                                /* IL_1B: callvirt Boolean MoveNext() */
                                /* IL_20: brtrue.s IL_0D */
                                
                                if ((((loc1.ifacemap)[t3].x60001ba)())(CILJS.convert_box_to_pointer_as_needed(loc1))){
                                    __pos__ = 0xD;
                                    continue;
                                }
                                /* IL_22: leave.s IL_2F */
                                in_block_1 = false;
                                __pos__ = 0x2F;
                                continue;
                            }
                        }
                    }
                    
                    finally {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        __pos__ = 0x24;
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x24:
                                /* IL_24: ldloc.1  */
                                /* IL_25: brfalse.s IL_2E */
                                
                                if ((!(loc1))){
                                    __pos__ = 0x2E;
                                    continue;
                                }
                                /* IL_27: ldloc.1  */
                                /* IL_28: callvirt Void Dispose() */
                                (((loc1.ifacemap)[t4].x6000095)())(CILJS.convert_box_to_pointer_as_needed(loc1));
                                /* IL_2D: nop  */
                                
                                case 0x2E:
                                /* IL_2E: endfinally  */
                                in_block_1 = false;
                                __pos__ = __finally_continuation_1__;
                                continue;
                            }
                            break;
                        }
                    }
                    continue;
                    case 0x2F:
                    /* IL_2F: ldloc.0  */
                    /* IL_30: stloc.3  */
                    loc3 = loc0;
                    /* IL_33: ldloc.3  */
                    /* IL_34: ret  */
                    return loc3;
                }
            }
        };
    };
    /* static System.Void Program.Main()*/
    asm.x600000a_init = function ()
    {
        (asm1.B().init)();
        ((asm0)["System.Reflection.CustomAttributeData"]().init)();
        ((asm0)["System.Collections.Generic.IEnumerable`1"]((asm0)["System.Reflection.CustomAttributeData"]()).init)();
        ((asm0)["System.Collections.Generic.IEnumerator`1"]((asm0)["System.Reflection.CustomAttributeData"]()).init)();
        (asm1.A().init)();
        ((asm0)["System.Collections.IEnumerator"]().init)();
        ((asm0)["System.IDisposable"]().init)();
        (asm1.C().init)();
        (asm1.D().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        asm.x600000a_init();
        return asm.x600000a_();
    };;
    asm.x600000a_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var t7;
        var t8;
        var t9;
        var t10;
        var t11;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc3;
        var in_block_1;
        var __finally_continuation_1__;
        var loc4;
        var loc1;
        var loc2;
        CILJS.init_base_types();
        t0 = asm1.B();
        t1 = (asm0)["System.Reflection.CustomAttributeData"]();
        t2 = (asm0)["System.Int32"]();
        t3 = (asm0)["System.Collections.Generic.IEnumerable`1"](t1);
        t4 = (asm0)["System.Collections.Generic.IEnumerator`1"](t1);
        t5 = asm1.A();
        t6 = (asm0)["System.Boolean"]();
        t7 = (asm0)["System.Object"]();
        t8 = (asm0)["System.Collections.IEnumerator"]();
        t9 = (asm0)["System.IDisposable"]();
        t10 = asm1.C();
        t11 = asm1.D();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldtoken B */
                /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_0B: call TypeInfo GetTypeInfo(System.Type) */
                /* IL_10: callvirt IEnumerable`1 get_CustomAttributes() */
                /* IL_15: stloc.0  */
                loc0 = (((asm0.x6000184(asm0.x6000129(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))).vtable)["asm0.x6000187"])())(asm0.x6000184(asm0.x6000129(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))));
                /* IL_16: ldloc.0  */
                /* IL_17: call Int32 Count[System.Reflection.CustomAttributeData](System.Collections.Generic.IEnumerable`1[System.Reflection.CustomAttributeData]) */
                /* IL_1C: box System.Int32 */
                /* IL_21: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box((asm1.x6000009((asm0)["System.Reflection.CustomAttributeData"]()))(loc0),t2));
                /* IL_26: nop  */
                
                /* IL_27: nop  */
                
                /* IL_28: ldloc.0  */
                /* IL_29: callvirt IEnumerator`1 GetEnumerator() */
                /* IL_2E: stloc.3  */
                loc3 = ((((loc0.ifacemap)[t3])[t1].x60001c6)())(CILJS.convert_box_to_pointer_as_needed(loc0));
                
                try {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    
                    if (__pos__ < 0x2F){
                        __pos__ = 0x2F;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x2F:
                            /* IL_2F: br.s IL_74 */
                            __pos__ = 0x74;
                            continue;
                            case 0x31:
                            /* IL_31: ldloc.3  */
                            /* IL_32: callvirt CustomAttributeData get_Current() */
                            /* IL_37: stloc.s 4 */
                            loc4 = ((((loc3.ifacemap)[t4])[t1].x60001c7)())(CILJS.convert_box_to_pointer_as_needed(loc3));
                            /* IL_39: nop  */
                            
                            /* IL_3A: ldtoken A */
                            /* IL_3F: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                            /* IL_44: ldloc.s 4 */
                            /* IL_46: callvirt Type get_AttributeType() */
                            /* IL_4B: callvirt Boolean Equals(System.Object) */
                            /* IL_50: box System.Boolean */
                            /* IL_55: call Void WriteLine(System.Object) */
                            asm0.x600005a(CILJS.make_box((((asm0.x6000129(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5)).vtable)["asm0.x60000f1"])())(asm0.x6000129(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t5)),asm0.x600017e(loc4)),t6));
                            /* IL_5A: nop  */
                            
                            /* IL_5B: ldloc.s 4 */
                            /* IL_5D: callvirt Type get_AttributeType() */
                            /* IL_62: callvirt String get_FullName() */
                            /* IL_67: ldc.i4.0  */
                            /* IL_68: newarr System.Object */
                            /* IL_6D: call Void WriteLine(System.String, System.Object[]) */
                            asm0.x600005b((((asm0.x600017e(loc4).vtable)["asm0.x6000128"])())(asm0.x600017e(loc4)),CILJS.new_array(t7,(0|0)));
                            /* IL_72: nop  */
                            
                            /* IL_73: nop  */
                            
                            case 0x74:
                            /* IL_74: ldloc.3  */
                            /* IL_75: callvirt Boolean MoveNext() */
                            /* IL_7A: brtrue.s IL_31 */
                            
                            if ((((loc3.ifacemap)[t8].x60001ba)())(CILJS.convert_box_to_pointer_as_needed(loc3))){
                                __pos__ = 0x31;
                                continue;
                            }
                            /* IL_7C: leave.s IL_89 */
                            in_block_1 = false;
                            __pos__ = 0x89;
                            continue;
                        }
                    }
                }
                
                finally {
                    in_block_1 = true;
                    __finally_continuation_1__ = __pos__;
                    __pos__ = 0x7E;
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x7E:
                            /* IL_7E: ldloc.3  */
                            /* IL_7F: brfalse.s IL_88 */
                            
                            if ((!(loc3))){
                                __pos__ = 0x88;
                                continue;
                            }
                            /* IL_81: ldloc.3  */
                            /* IL_82: callvirt Void Dispose() */
                            (((loc3.ifacemap)[t9].x6000095)())(CILJS.convert_box_to_pointer_as_needed(loc3));
                            /* IL_87: nop  */
                            
                            case 0x88:
                            /* IL_88: endfinally  */
                            in_block_1 = false;
                            __pos__ = __finally_continuation_1__;
                            continue;
                        }
                        break;
                    }
                }
                continue;
                case 0x89:
                /* IL_89: ldtoken C */
                /* IL_8E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_93: call TypeInfo GetTypeInfo(System.Type) */
                /* IL_98: callvirt IEnumerable`1 get_CustomAttributes() */
                /* IL_9D: stloc.1  */
                loc1 = (((asm0.x6000184(asm0.x6000129(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t10))).vtable)["asm0.x6000187"])())(asm0.x6000184(asm0.x6000129(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t10))));
                /* IL_9E: ldloc.1  */
                /* IL_9F: call Int32 Count[System.Reflection.CustomAttributeData](System.Collections.Generic.IEnumerable`1[System.Reflection.CustomAttributeData]) */
                /* IL_A4: box System.Int32 */
                /* IL_A9: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box((asm1.x6000009((asm0)["System.Reflection.CustomAttributeData"]()))(loc1),t2));
                /* IL_AE: nop  */
                
                /* IL_AF: ldtoken D */
                /* IL_B4: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_B9: call TypeInfo GetTypeInfo(System.Type) */
                /* IL_BE: callvirt IEnumerable`1 get_CustomAttributes() */
                /* IL_C3: stloc.2  */
                loc2 = (((asm0.x6000184(asm0.x6000129(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t11))).vtable)["asm0.x6000187"])())(asm0.x6000184(asm0.x6000129(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t11))));
                /* IL_C4: ldloc.2  */
                /* IL_C5: call Int32 Count[System.Reflection.CustomAttributeData](System.Collections.Generic.IEnumerable`1[System.Reflection.CustomAttributeData]) */
                /* IL_CA: box System.Int32 */
                /* IL_CF: call Void WriteLine(System.Object) */
                asm0.x600005a(CILJS.make_box((asm1.x6000009((asm0)["System.Reflection.CustomAttributeData"]()))(loc2),t2));
                /* IL_D4: nop  */
                
                /* IL_D5: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm1.t2000002",null);
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function A() { c.init(); }");
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[
                    [
                        asm1.A(),
                        asm1.x6000001
                    ]
                ],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function B() { c.init(); }");
    asm.A2 = CILJS.declare_type(
        "A2",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A2",false,false,false,false,false,[],[
                    [asm1, "x6000003", "get_P"],
                    [asm1, "x6000004", "set_P"]
                ],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function A2() { c.init();(this)[\"A2<P>k__BackingField\"] = null }");
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[
                    [
                        asm1.A2(),
                        asm1.x6000005,
                        [
                            CILJS.new_string("xyz")
                        ]
                    ]
                ],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function C() { c.init(); }");
    asm.D = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006",null);
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function D() { c.init(); }");
    asm.MiniLinq = CILJS.declare_type(
        "MiniLinq",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"MiniLinq",false,false,false,false,false,[
                    [
                        (asm0)["System.Runtime.CompilerServices.ExtensionAttribute"](),
                        asm0.x600016c
                    ]
                ],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007",null);
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function MiniLinq() { c.init(); }");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008",null);
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
if (module){
    module.exports = asm1;
}
