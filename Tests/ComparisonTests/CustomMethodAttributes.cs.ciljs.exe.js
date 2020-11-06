var asm1;(function (asm)
{
    asm.FullName = "CustomMethodAttributes.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm0.x60000af(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Type B.get_T()*/
    asm.x6000002 = function get_T(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld Type <T>k__BackingField */
        /* IL_06: ret  */
        return (arg0)["B<T>k__BackingField"];
    };;
    /* System.Void B.set_T(Type)*/
    asm.x6000003 = function set_T(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld Type <T>k__BackingField */
        (arg0)["B<T>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  B..ctor(Type)*/
    asm.x6000004 = function _ctor(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm0.x60000af(arg0);
        /* IL_06: nop  */
        /* IL_07: nop  */
        /* IL_08: ldarg.0  */
        /* IL_09: ldarg.1  */
        /* IL_0A: call Void set_T(System.Type) */
        asm1.x6000003(arg0,arg1);
        /* IL_0F: nop  */
        /* IL_10: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Void C.M()*/
    asm.x6000006 = function M(arg0)
    {
        /* IL_00: nop  */
        /* IL_01: ret  */
        return ;
    };;
    /* System.Void C.N()*/
    asm.x6000007 = function N(arg0)
    {
        /* IL_00: nop  */
        /* IL_01: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000008 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static T MiniLinq.First<T>(IEnumerable`1)*/
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
        return function First(arg0)
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
                    loc0 = (((arg0.ifacemap)[t1])[t0].x60001d1)(CILJS.convert_box_to_pointer_as_needed(arg0));
                    
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
                                loc1 = (((loc0.ifacemap)[t2])[t0].x60001da)(CILJS.convert_box_to_pointer_as_needed(loc0));
                                /* IL_12: nop  */
                                /* IL_13: ldloc.1  */
                                /* IL_14: stloc.2  */
                                loc2 = loc1;
                                /* IL_15: leave.s IL_38 */
                                in_block_1 = false;
                                __pos__ = 0x38;
                                continue;
                                case 0x17:
                                /* IL_17: ldloc.0  */
                                /* IL_18: callvirt Boolean MoveNext() */
                                /* IL_1D: brtrue.s IL_0B */
                                
                                if (((loc0.ifacemap)[t3].x60001cf)(CILJS.convert_box_to_pointer_as_needed(loc0))){
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
                                ((loc0.ifacemap)[t4].x600010c)(CILJS.convert_box_to_pointer_as_needed(loc0));
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
    /* static System.Int32 MiniLinq.Count<T>(IEnumerable`1)*/
    asm.x600000a_init = function (T)
    {
        return function (arg0)
        {
            ((asm0)["System.Collections.Generic.IEnumerable`1"](T).init)();
            ((asm0)["System.Collections.Generic.IEnumerator`1"](T).init)();
            ((asm0)["System.Collections.IEnumerator"]().init)();
            ((asm0)["System.IDisposable"]().init)();
        };
    };;
    asm.x600000a = function (T)
    {
        return function (arg0)
        {
            (asm.x600000a_init(T))(arg0);
            return (asm.x600000a_(T))(arg0);
        };
    };;
    asm.x600000a_ = function (T)
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
                    loc1 = (((arg0.ifacemap)[t1])[t0].x60001d1)(CILJS.convert_box_to_pointer_as_needed(arg0));
                    
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
                                loc2 = (((loc1.ifacemap)[t2])[t0].x60001da)(CILJS.convert_box_to_pointer_as_needed(loc1));
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
                                
                                if (((loc1.ifacemap)[t3].x60001cf)(CILJS.convert_box_to_pointer_as_needed(loc1))){
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
                                ((loc1.ifacemap)[t4].x600010c)(CILJS.convert_box_to_pointer_as_needed(loc1));
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
    asm.x600000b_init = function ()
    {
        (asm1.C().init)();
        ((asm0)["System.Reflection.CustomAttributeData"]().init)();
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function ()
    {
        asm.x600000b_init();
        return asm.x600000b_();
    };;
    asm.x600000b_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc0;
        var loc1;
        var loc2;
        CILJS.init_base_types();
        t0 = asm1.C();
        t1 = (asm0)["System.Reflection.CustomAttributeData"]();
        t2 = (asm0)["System.Int32"]();
        t3 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldtoken C */
        /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
        /* IL_0B: call TypeInfo GetTypeInfo(System.Type) */
        /* IL_10: callvirt MethodInfo[] GetMethods() */
        /* IL_15: stloc.0  */
        loc0 = ((asm0.x60001bf(asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))).vtable)["asm0.x6000084"])(asm0.x60001bf(asm0.x6000074(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))));
        /* IL_16: ldloc.0  */
        /* IL_17: ldc.i4.0  */
        /* IL_18: ldelem.ref  */
        /* IL_19: callvirt IEnumerable`1 get_CustomAttributes() */
        /* IL_1E: stloc.1  */
        loc1 = ((CILJS.ldelem_ref(loc0,(0|0)).vtable)["asm0.x60001c2"])(CILJS.ldelem_ref(loc0,(0|0)));
        /* IL_1F: ldloc.0  */
        /* IL_20: ldc.i4.1  */
        /* IL_21: ldelem.ref  */
        /* IL_22: callvirt IEnumerable`1 get_CustomAttributes() */
        /* IL_27: stloc.2  */
        loc2 = ((CILJS.ldelem_ref(loc0,(1|0)).vtable)["asm0.x60001c2"])(CILJS.ldelem_ref(loc0,(1|0)));
        /* IL_28: ldloc.1  */
        /* IL_29: call Int32 Count[System.Reflection.CustomAttributeData](System.Collections.Generic.IEnumerable`1[System.Reflection.CustomAttributeData]) */
        /* IL_2E: box System.Int32 */
        /* IL_33: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box((asm1.x600000a((asm0)["System.Reflection.CustomAttributeData"]()))(loc1),t2));
        /* IL_38: nop  */
        /* IL_39: ldloc.1  */
        /* IL_3A: call CustomAttributeData First[System.Reflection.CustomAttributeData](System.Collections.Generic.IEnumerable`1[System.Reflection.CustomAttributeData]) */
        /* IL_3F: callvirt Type GetType() */
        /* IL_44: callvirt String get_Name() */
        /* IL_49: ldc.i4.0  */
        /* IL_4A: newarr System.Object */
        /* IL_4F: call Void WriteLine(System.String, System.Object[]) */
        asm0.x60000a2(((asm0.x60000cf((asm1.x6000009((asm0)["System.Reflection.CustomAttributeData"]()))(loc1)).vtable)["asm0.x60001c5"])(asm0.x60000cf((asm1.x6000009((asm0)["System.Reflection.CustomAttributeData"]()))(loc1))),CILJS.new_array(t3,(0|0)));
        /* IL_54: nop  */
        /* IL_55: ldloc.2  */
        /* IL_56: call Int32 Count[System.Reflection.CustomAttributeData](System.Collections.Generic.IEnumerable`1[System.Reflection.CustomAttributeData]) */
        /* IL_5B: box System.Int32 */
        /* IL_60: call Void WriteLine(System.Object) */
        asm0.x60000a1(CILJS.make_box((asm1.x600000a((asm0)["System.Reflection.CustomAttributeData"]()))(loc2),t2));
        /* IL_65: nop  */
        /* IL_66: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x600000c = function _ctor(arg0)
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
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function A() { c.init(); }");
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm1, "x6000002", "get_T"],
                    [asm1, "x6000003", "set_T"]
                ],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm1.t2000003",null);
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function B() { c.init();(this)[\"B<T>k__BackingField\"] = null }");
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
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004",null);
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function D() { c.init(); }");
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
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[
                    [asm1, "x6000006", "M", [
                            [
                                asm1.A(),
                                asm1.x6000001
                            ]
                        ]],
                    [asm1, "x6000007", "N", [
                            [
                                asm1.B(),
                                asm1.x6000004,
                                [
                                    asm1.D()
                                ]
                            ]
                        ]]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005",null);
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function C() { c.init(); }");
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
                        asm0.x60001ec
                    ]
                ],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006",null);
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007",null);
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            CILJS.declare_virtual(this,"asm0.x60000cd","asm0.x60000cd");
            CILJS.declare_virtual(this,"asm0.x60000ce","asm0.x60000ce");
        },
        "function Program() { c.init(); }");
    asm.entryPoint = asm.x600000b;
})(asm1 || (asm1 = {}));
if (typeof module != "undefined"){
    module.exports = asm1;
}
//# sourceMappingURL=CustomMethodAttributes.cs.ciljs.exe.js.map
