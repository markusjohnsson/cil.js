var asm1; (function (asm)
{
    asm.FullName = "YieldGenerators.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
    asm.next_hash = 1;

    function nop() {}

    function initType(type, fullname, assembly, isValueType, isPrimitive, isInterface, isGenericTypeDefinition, isNullable, customAttributes, methods, baseType, isInst, arrayType, metadataName)
    {
        type.FullName = fullname;
        type.Assembly = assembly;
        type.IsValueType = isValueType;
        type.IsPrimitive = isPrimitive;
        type.IsInterface = isInterface;
        type.IsGenericTypeDefinition = isGenericTypeDefinition;
        type.IsNullable = isNullable;

        type.CustomAttributes = customAttributes;
        type.Methods = methods;
        type.BaseType = baseType;
        type.IsInst = isInst;
        type.ArrayType = arrayType;
        type.MetadataName = metadataName;

        type.GenericArguments = {};
        type.prototype.vtable = {};
        type.prototype.ifacemap = {};
    }

    function is_inst_interface(interfaceType){
        return function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(interfaceType) != -1 ? t : null; } catch (e) { return false; } };
    }

    function is_inst_primitive(primitiveType) {
        return function (t) { try { return t.type == primitiveType ? t : null; } catch (e) { return false; } }
    }

    function is_inst_array(T) {
        return function (t) { return t instanceof asm0['System.Array']() && (t.etype == T || t.etype.prototype instanceof T) ? t : null; };
    }

    function is_inst_default(type) {
        return function (t) { return t instanceof type ? t : null; };
    }

    function declare_virtual(type, slot, target) {
        type.prototype.vtable[slot] = new Function('return '+target+';');
    }

    function clone_value(v) {
        if (v == null) return v;
        if (typeof v === 'number') return v;
        if (typeof v === 'function') return v;
        if (!v.constructor.IsValueType) return v;
        var result = new v.constructor();
        for (var p in v) {
            if (v.hasOwnProperty(p))
                result[p] = clone_value(v[p]);
        }
        return result;
    }

    function value_equals(a, b) {

        if (typeof a !== typeof b)
            return 0;

        if (a === null)
            return b === null ? 1 : 0;

        if (typeof a === 'object' && typeof a.constructor !== 'undefined' && a.constructor.IsValueType) {
            
            for (var p in a) {
                var av = a[p];
                var bv = b[p];
                    
                if (! value_equals(av, bv))
                    return 0;
            }
            
            return 1;
        }
        else 
        {
            return a === b ? 1 : 0;
        }
    }

    function unsigned_value(a) {
        if (a < 0)
            return 0xffffffff + a + 1;
        else
            return a;
    }

    function box(v, type) {
        if (v === null)
            return v;
    
        if (type.IsNullable) {
            if (v.has_value)
                return box(v.value, type.GenericArguments[type.MetadataName][0]);
            else
                return null;
        }

        if (!type.IsValueType)
            return v;
    
        return {
            'boxed': v,
            'type': type,
            'vtable': type.prototype.vtable,
            'ifacemap': type.prototype.ifacemap
        };
    }

    function unbox(o, type) {
        if (o == null) {
            var t = asm0['System.InvalidCastException']();
            var e = new t();
            e.stack = new Error().stack;
            throw e;
        }
        return cast_class(o.boxed, type);
    }

    function unbox_any(o, type) {
        if (type.IsNullable) {
            var result = new type();
            if (o !== null) {
                result.value = cast_class(o.boxed, type.GenericArguments[type.MetadataName][0]);
                result.has_value = true;
            }
            return result;
        }

        if (type.IsValueType) {

            if (o == null) {
                var t = asm0['System.InvalidCastException']();
                throw new t();
            }

            return cast_class(o.boxed, type);
        }
        else
            return cast_class(o, type);
    }

    function convert_box_to_pointer_as_needed(o) {
        if (typeof o.boxed !== "undefined" &&
            typeof o.type !== "undefined" &&
            typeof o.type.IsValueType) 
        {
            return { 'r': function () { return o.boxed; },
                     'w': function (v) { return o.boxed = v; } };
        }
        else {
            return o;
        }
    }

    function dereference_pointer_as_needed(p) {
        if (typeof p.r === "function" &&
            typeof p.w === "function") 
        {
            var v = p.r();
            if (typeof v !== 'number' && ! v.constructor.IsValueType)
            {
                return v;
            }
        }

        return p;
    }

    function tree_get(a, s) {
        var c = s;
        for (var i = 0; c && i < a.length; i++)
            c = c[a[i]];
        return c;
    }

    function tree_set(a, s, v) {
        if (a.length == 1) {
            s[a[0]] = v;
        }
        else {
            var c = s[a[0]];
            if (!c) s[a[0]] = c = {};
            tree_set(a.slice(1), c, v);
        }
    }

    function new_string(jsstr) {
        var r = new (asm0['System.String']())();
        r.jsstr = jsstr;
        return r;
    }

    function new_handle(type, value) {
        var r = new type();
        r.value = value;
        return r;
    }

    function new_array(type, length) {
        var ctor = type.ArrayType || Array;
        var r = new (asm0['System.Array`1'](type))();
        r.etype = type;
        r.jsarr = new ctor(length);
        return r;
    }

    function newobj(type, ctor, args) {
        var result = new type();
        
        if (type.IsValueType)
            args[0] = { 
                w: function(a) { result = a; }, 
                r: function() { return result; } 
            };
        else
            args[0] = result;
        
        ctor.apply(null, args);
        
        return result;
    }

    function cast_class(obj, type) {
        if (type.IsInst(obj) || (!type.IsValueType && obj === null)) {
            return obj;
        }
        else if (type.IsPrimitive) {
            if (typeof obj === 'undefined' || obj === null) {
            }
            else if (typeof obj == 'number') {
                return obj;
            }
            else if (typeof obj.length == 'number' && obj.length == 2) {
                return obj; 
            }
        }
        
        var t = asm0['System.InvalidCastException']();
        var e = new t();
        e.stack = new Error().stack;
        throw e;
    }

    function conv_u8(n) {
        if (n < 0) {
            n = 0x100000000 + n;
        }

        return make_uint64(n);
    }

    function conv_i8(n) {
        if (n < 0) {
            n = 0x100000000 + n;
            return new Uint32Array([ n | 0, 0xffffffff ]);
        }

        return make_uint64(n);
    }

    function make_uint64(n) {
        var bits32 = 0xffffffff;

        var floorN = Math.floor(n);
        var low = floorN | 0;
        var high = (floorN / 0x100000000) | 0;

        var low = low & bits32;
        var high = high & bits32;

        return new Uint32Array([low, high]);
    }

    function to_number(n) {
        return n[1] * 4294967296 + n[0];
    }
;
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
            (((asm1)["E+<Select>d__0`2"])(T,TResult).init)();
        };
    };;
    asm.x600000c = function (T,TResult)
    {
        return function (arg0,arg1)
        {
            ((asm.x600000c_init)(T,TResult).apply)(this,arguments);
            return ((asm.x600000c_)(T,TResult).apply)(this,arguments);
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
            t2 = ((asm1)["E+<Select>d__0`2"])(T,TResult);
            /* IL_00: ldc.i4.s 254*/
            /* IL_02: newobj Void .ctor(System.Int32)*/
            /* IL_07: stloc.0 */
            loc0 = newobj(t2,asm1.x600001d,[
                null,
                (-2|0)
            ]);
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
            (((asm1)["E+<Where>d__6`1"])(T).init)();
        };
    };;
    asm.x600000d = function (T)
    {
        return function (arg0,arg1)
        {
            ((asm.x600000d_init)(T).apply)(this,arguments);
            return ((asm.x600000d_)(T).apply)(this,arguments);
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
            t1 = ((asm1)["E+<Where>d__6`1"])(T);
            /* IL_00: ldc.i4.s 254*/
            /* IL_02: newobj Void .ctor(System.Int32)*/
            /* IL_07: stloc.0 */
            loc0 = newobj(t1,asm1.x6000026,[
                null,
                (-2|0)
            ]);
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
            (((asm0)["System.Collections.Generic.IEnumerable`1"])(T).init)();
            (((asm0)["System.Collections.Generic.IEnumerator`1"])(T).init)();
            (((asm0)["System.Collections.IEnumerator"])().init)();
            (((asm0)["System.IDisposable"])().init)();
        };
    };;
    asm.x600000e = function (T)
    {
        return function (arg0)
        {
            ((asm.x600000e_init)(T).apply)(this,arguments);
            return ((asm.x600000e_)(T).apply)(this,arguments);
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
            t1 = ((asm0)["System.Collections.Generic.IEnumerable`1"])(T);
            t2 = ((asm0)["System.Collections.Generic.IEnumerator`1"])(T);
            t3 = ((asm0)["System.Collections.IEnumerator"])();
            t4 = ((asm0)["System.IDisposable"])();
            loc3 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: ldarg.0 */
                    /* IL_01: callvirt IEnumerator`1 GetEnumerator()*/
                    /* IL_06: stloc.2 */
                    loc2 = ((((arg0.ifacemap)[t1])[t0].x600000e)())(convert_box_to_pointer_as_needed(arg0));
                    
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
                                loc0 = ((((loc2.ifacemap)[t2])[t0].x60000e7)())(convert_box_to_pointer_as_needed(loc2));
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
                                
                                if ((((loc2.ifacemap)[t3].x60000e5)())(convert_box_to_pointer_as_needed(loc2))){
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
                                (((loc2.ifacemap)[t4].x600008f)())(convert_box_to_pointer_as_needed(loc2));
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
                    ({
                        'w': function ()
                        {
                            loc3 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return loc3;
                        }
                    }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
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
            (((asm0)["System.Collections.Generic.IEnumerable`1"])(T).init)();
            (((asm0)["System.Collections.Generic.IEnumerator`1"])(T).init)();
            (((asm0)["System.Collections.IEnumerator"])().init)();
            (((asm0)["System.IDisposable"])().init)();
        };
    };;
    asm.x600000f = function (T)
    {
        return function (arg0)
        {
            ((asm.x600000f_init)(T).apply)(this,arguments);
            return ((asm.x600000f_)(T).apply)(this,arguments);
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
            t1 = ((asm0)["System.Collections.Generic.IEnumerable`1"])(T);
            t2 = ((asm0)["System.Collections.Generic.IEnumerator`1"])(T);
            t3 = ((asm0)["System.Collections.IEnumerator"])();
            t4 = ((asm0)["System.IDisposable"])();
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: ldarg.0 */
                    /* IL_01: callvirt IEnumerator`1 GetEnumerator()*/
                    /* IL_06: stloc.1 */
                    loc1 = ((((arg0.ifacemap)[t1])[t0].x600000e)())(convert_box_to_pointer_as_needed(arg0));
                    
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
                                ((((loc1.ifacemap)[t2])[t0].x60000e7)())(convert_box_to_pointer_as_needed(loc1));
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
                                
                                if ((((loc1.ifacemap)[t3].x60000e5)())(convert_box_to_pointer_as_needed(loc1))){
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
                                (((loc1.ifacemap)[t4].x600008f)())(convert_box_to_pointer_as_needed(loc1));
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
        ((asm1.P)().init)();
        ((asm1.Program)().init)();
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.Func`2"])((asm1.P)(),((asm0)["System.Int32"])()).init)();
        asm.x6000013 = asm.x6000013_;
    };;
    asm.x6000013 = function ()
    {
        (asm.x6000013_init.apply)(this,arguments);
        return (asm.x6000013_.apply)(this,arguments);
    };;
    asm.x6000013_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
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
        t0 = (asm1.P)();
        t1 = (asm1.Program)();
        t2 = ((asm0)["System.Int32"])();
        t3 = ((asm0)["System.Func`2"])((asm1.P)(),((asm0)["System.Int32"])());
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldc.i4.5 */
                /* IL_01: newarr P*/
                /* IL_06: stloc.0 */
                loc0 = new_array(t0,(5|0));
                /* IL_07: ldloc.0 */
                st_05 = loc0;
                /* IL_08: ldc.i4.0 */
                st_06 = (0|0);
                /* IL_09: newobj Void .ctor()*/
                /* IL_0E: stloc.1 */
                loc1 = newobj(t0,asm1.x6000012,[
                    null
                ]);
                /* IL_0F: ldloc.1 */
                st_03 = loc1;
                /* IL_10: ldc.i4.s 11*/
                st_04 = (11|0);
                /* IL_12: callvirt Void set_Prop(System.Int32)*/
                (asm1.x6000011)(st_03,st_04);
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
                loc2 = newobj(t0,asm1.x6000012,[
                    null
                ]);
                /* IL_21: ldloc.2 */
                st_09 = loc2;
                /* IL_22: ldc.i4.s 22*/
                st_0A = (22|0);
                /* IL_24: callvirt Void set_Prop(System.Int32)*/
                (asm1.x6000011)(st_09,st_0A);
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
                loc3 = newobj(t0,asm1.x6000012,[
                    null
                ]);
                /* IL_33: ldloc.3 */
                st_0F = loc3;
                /* IL_34: ldc.i4.s 33*/
                st_10 = (33|0);
                /* IL_36: callvirt Void set_Prop(System.Int32)*/
                (asm1.x6000011)(st_0F,st_10);
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
                loc4 = newobj(t0,asm1.x6000012,[
                    null
                ]);
                /* IL_46: ldloc.s 4*/
                st_15 = loc4;
                /* IL_48: ldc.i4.s 44*/
                st_16 = (44|0);
                /* IL_4A: callvirt Void set_Prop(System.Int32)*/
                (asm1.x6000011)(st_15,st_16);
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
                loc5 = newobj(t0,asm1.x6000012,[
                    null
                ]);
                /* IL_5B: ldloc.s 5*/
                st_1B = loc5;
                /* IL_5D: ldc.i4.s 55*/
                st_1C = (55|0);
                /* IL_5F: callvirt Void set_Prop(System.Int32)*/
                (asm1.x6000011)(st_1B,st_1C);
                /* IL_64: ldloc.s 5*/
                st_1F = loc5;
                /* IL_66: stelem.ref */
                (st_1D.jsarr)[st_1E] = st_1F;
                /* IL_67: ldloc.0 */
                st_24 = loc0;
                /* IL_68: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate6*/
                /* IL_6D: brtrue.s IL_80*/
                
                if ((t1)["CS$<>9__CachedAnonymousMethodDelegate6"]){
                    __pos_0__ = 0x80;
                    continue;
                }
                /* IL_6F: ldnull */
                st_21 = null;
                /* IL_71: ldftn Int32 <Main>b__5(P)*/
                st_22 = asm1.x6000015;
                /* IL_76: newobj Void .ctor(System.Object, System.IntPtr)*/
                st_23 = newobj(t3,asm0.x600008c,[
                    null,
                    st_21,
                    st_22
                ]);
                /* IL_7B: stsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate6*/
                (t1)["CS$<>9__CachedAnonymousMethodDelegate6"] = st_23;
                case 0x80:
                /* IL_80: ldsfld Func`2 CS$<>9__CachedAnonymousMethodDelegate6*/
                st_25 = (t1)["CS$<>9__CachedAnonymousMethodDelegate6"];
                /* IL_85: call IEnumerable`1 Select[P, System.Int32](System.Collections.Generic.IEnumerable`1[P], System.Func`2[P,System.Int32])*/
                st_26 = ((asm1.x600000c)((asm1.P)(),((asm0)["System.Int32"])()))(st_24,st_25);
                /* IL_8A: call Int32 FirstOrDefault[System.Int32](System.Collections.Generic.IEnumerable`1[System.Int32])*/
                st_27 = ((asm1.x600000e)(((asm0)["System.Int32"])()))(st_26);
                /* IL_8F: box System.Int32*/
                st_28 = {
                    'boxed': st_27,
                    'type': t2,
                    'vtable': t2.prototype.vtable,
                    'ifacemap': t2.prototype.ifacemap
                };
                /* IL_94: call Void Log(System.Object)*/
                (asm1.x6000001)(st_28);
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
        return (asm1.x6000010)(arg0);
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
        (((asm0)["Braille.Runtime.UnboundGenericParameter"])().init)();
        (((asm1)["E+<Select>d__0`2"])((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0],(((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[1]).init)();
        asm.x6000016 = asm.x6000016_;
    };;
    asm.x6000016 = function (arg0)
    {
        (asm.x6000016_init.apply)(this,arguments);
        return (asm.x6000016_.apply)(this,arguments);
    };;
    asm.x6000016_ = function System_Collections_Generic_IEnumerable_TResult__GetEnumerator(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var __pos_0__;
        var loc0;
        t0 = ((asm0)["Braille.Runtime.UnboundGenericParameter"])();
        t1 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0];
        t2 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[1];
        t3 = ((asm1)["E+<Select>d__0`2"])((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0],(((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[1]);
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: call Int32 get_CurrentManagedThreadId()*/
                /* IL_05: ldarg.0 */
                /* IL_06: ldfld Int32 <>l__initialThreadId*/
                /* IL_0B: bne.un.s IL_22*/
                
                if (unsigned_value((asm0.x6000089)()) != unsigned_value((arg0)["_Select_d__0_2<>l__initialThreadId"])){
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_0D: ldarg.0 */
                /* IL_0E: ldfld Int32 <>1__state*/
                /* IL_13: ldc.i4.s 254*/
                /* IL_15: bne.un.s IL_22*/
                
                if (unsigned_value((arg0)["_Select_d__0_2<>1__state"]) != unsigned_value((-2|0))){
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
                loc0 = newobj(t3,asm1.x600001d,[
                    null,
                    (0|0)
                ]);
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
        return (asm1.x6000016)(arg0);
    };;
    /* Boolean MoveNext()*/
    asm.x6000018_init = function ()
    {
        (((asm0)["System.Collections.Generic.IEnumerable`1"])((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0]).init)();
        (((asm0)["System.Collections.Generic.IEnumerator`1"])((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0]).init)();
        (((asm0)["System.Collections.IEnumerator"])().init)();
        asm.x6000018 = asm.x6000018_;
    };;
    asm.x6000018 = function (arg0)
    {
        (asm.x6000018_init.apply)(this,arguments);
        return (asm.x6000018_.apply)(this,arguments);
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
        t1 = ((asm0)["System.Collections.Generic.IEnumerable`1"])((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0]);
        t2 = ((asm0)["System.Collections.Generic.IEnumerator`1"])((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0]);
        t3 = ((asm0)["System.Collections.IEnumerator"])();
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
                            (arg0)["<>7__wrap2"] = ((((arg0.source.ifacemap)[t1])[t0].x600000e)())(convert_box_to_pointer_as_needed(arg0.source));
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
                            (arg0)["<s>5__1"] = (((((arg0)["<>7__wrap2"].ifacemap)[t2])[t0].x60000e7)())(convert_box_to_pointer_as_needed((arg0)["<>7__wrap2"]));
                            /* IL_4D: ldarg.0 */
                            /* IL_4E: ldarg.0 */
                            /* IL_4F: ldfld Func`2 selector*/
                            /* IL_54: ldarg.0 */
                            /* IL_55: ldfld T <s>5__1*/
                            /* IL_5A: callvirt TResult Invoke(T)*/
                            /* IL_5F: stfld TResult <>2__current*/
                            (arg0)["_Select_d__0_2<>2__current"] = (arg0.selector._methodPtr.apply)(null,((arg0.selector._target) ? ([
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
                            
                            if (((((arg0)["<>7__wrap2"].ifacemap)[t3].x60000e5)())(convert_box_to_pointer_as_needed((arg0)["<>7__wrap2"]))){
                                __pos_1__ = 0x3C;
                                continue;
                            }
                            /* IL_83: ldarg.0 */
                            /* IL_84: call Void <>m__Finally3()*/
                            (asm1.x600001e)(arg0);
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
                        (asm1.x600001b)(arg0);
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
        (((asm0)["System.NotSupportedException"])().init)();
        asm.x600001a = asm.x600001a_;
    };;
    asm.x600001a = function (arg0)
    {
        (asm.x600001a_init.apply)(this,arguments);
        return (asm.x600001a_.apply)(this,arguments);
    };;
    asm.x600001a_ = function System_Collections_IEnumerator_Reset(arg0)
    {
        var t0;
        t0 = ((asm0)["System.NotSupportedException"])();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: throw */
        throw newobj(t0,asm0.x60000eb,[
            null
        ]);
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
                    (asm1.x600001e)(arg0);
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
        return box((arg0)["_Select_d__0_2<>2__current"],t0);
    };;
    /* Void <>m__Finally3()*/
    asm.x600001e_init = function ()
    {
        (((asm0)["System.IDisposable"])().init)();
        asm.x600001e = asm.x600001e_;
    };;
    asm.x600001e = function (arg0)
    {
        (asm.x600001e_init.apply)(this,arguments);
        return (asm.x600001e_.apply)(this,arguments);
    };;
    asm.x600001e_ = function __m__Finally3(arg0)
    {
        var t0;
        var __pos_0__;
        t0 = ((asm0)["System.IDisposable"])();
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
                ((((arg0)["<>7__wrap2"].ifacemap)[t0].x600008f)())(convert_box_to_pointer_as_needed((arg0)["<>7__wrap2"]));
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
        (arg0)["_Select_d__0_2<>l__initialThreadId"] = (asm0.x6000089)();
        /* IL_18: ret */
        return ;
    };;
    /* IEnumerator`1 System.Collections.Generic.IEnumerable<T>.GetEnumerator()*/
    asm.x600001f_init = function ()
    {
        (((asm0)["Braille.Runtime.UnboundGenericParameter"])().init)();
        (((asm1)["E+<Where>d__6`1"])((((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0]).init)();
        asm.x600001f = asm.x600001f_;
    };;
    asm.x600001f = function (arg0)
    {
        (asm.x600001f_init.apply)(this,arguments);
        return (asm.x600001f_.apply)(this,arguments);
    };;
    asm.x600001f_ = function System_Collections_Generic_IEnumerable_T__GetEnumerator(arg0)
    {
        var t0;
        var t1;
        var t2;
        var __pos_0__;
        var loc0;
        t0 = ((asm0)["Braille.Runtime.UnboundGenericParameter"])();
        t1 = (((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0];
        t2 = ((asm1)["E+<Where>d__6`1"])((((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0]);
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: call Int32 get_CurrentManagedThreadId()*/
                /* IL_05: ldarg.0 */
                /* IL_06: ldfld Int32 <>l__initialThreadId*/
                /* IL_0B: bne.un.s IL_22*/
                
                if (unsigned_value((asm0.x6000089)()) != unsigned_value((arg0)["_Where_d__6_1<>l__initialThreadId"])){
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_0D: ldarg.0 */
                /* IL_0E: ldfld Int32 <>1__state*/
                /* IL_13: ldc.i4.s 254*/
                /* IL_15: bne.un.s IL_22*/
                
                if (unsigned_value((arg0)["_Where_d__6_1<>1__state"]) != unsigned_value((-2|0))){
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
                loc0 = newobj(t2,asm1.x6000026,[
                    null,
                    (0|0)
                ]);
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
        return (asm1.x600001f)(arg0);
    };;
    /* Boolean MoveNext()*/
    asm.x6000021_init = function ()
    {
        (((asm0)["System.Collections.Generic.IEnumerable`1"])((((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0]).init)();
        (((asm0)["System.Collections.Generic.IEnumerator`1"])((((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0]).init)();
        (((asm0)["System.Collections.IEnumerator"])().init)();
        asm.x6000021 = asm.x6000021_;
    };;
    asm.x6000021 = function (arg0)
    {
        (asm.x6000021_init.apply)(this,arguments);
        return (asm.x6000021_.apply)(this,arguments);
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
        t1 = ((asm0)["System.Collections.Generic.IEnumerable`1"])((((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0]);
        t2 = ((asm0)["System.Collections.Generic.IEnumerator`1"])((((arguments)[0].constructor.GenericArguments)["asm1.t200000b"])[0]);
        t3 = ((asm0)["System.Collections.IEnumerator"])();
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
                            (arg0)["<>7__wrap8"] = ((((arg0.source.ifacemap)[t1])[t0].x600000e)())(convert_box_to_pointer_as_needed(arg0.source));
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
                            (arg0)["<s>5__7"] = (((((arg0)["<>7__wrap8"].ifacemap)[t2])[t0].x60000e7)())(convert_box_to_pointer_as_needed((arg0)["<>7__wrap8"]));
                            /* IL_4D: ldarg.0 */
                            /* IL_4E: ldfld Func`2 predicate*/
                            /* IL_53: ldarg.0 */
                            /* IL_54: ldfld T <s>5__7*/
                            /* IL_59: callvirt Boolean Invoke(T)*/
                            /* IL_5E: brfalse.s IL_7E*/
                            
                            if ((!((arg0.predicate._methodPtr.apply)(null,((arg0.predicate._target) ? ([
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
                            
                            if (((((arg0)["<>7__wrap8"].ifacemap)[t3].x60000e5)())(convert_box_to_pointer_as_needed((arg0)["<>7__wrap8"]))){
                                __pos_1__ = 0x3C;
                                continue;
                            }
                            /* IL_8B: ldarg.0 */
                            /* IL_8C: call Void <>m__Finally9()*/
                            (asm1.x6000027)(arg0);
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
                        (asm1.x6000024)(arg0);
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
        (((asm0)["System.NotSupportedException"])().init)();
        asm.x6000023 = asm.x6000023_;
    };;
    asm.x6000023 = function (arg0)
    {
        (asm.x6000023_init.apply)(this,arguments);
        return (asm.x6000023_.apply)(this,arguments);
    };;
    asm.x6000023_ = function System_Collections_IEnumerator_Reset(arg0)
    {
        var t0;
        t0 = ((asm0)["System.NotSupportedException"])();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: throw */
        throw newobj(t0,asm0.x60000eb,[
            null
        ]);
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
                    (asm1.x6000027)(arg0);
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
        return box((arg0)["_Where_d__6_1<>2__current"],t0);
    };;
    /* Void <>m__Finally9()*/
    asm.x6000027_init = function ()
    {
        (((asm0)["System.IDisposable"])().init)();
        asm.x6000027 = asm.x6000027_;
    };;
    asm.x6000027 = function (arg0)
    {
        (asm.x6000027_init.apply)(this,arguments);
        return (asm.x6000027_.apply)(this,arguments);
    };;
    asm.x6000027_ = function __m__Finally9(arg0)
    {
        var t0;
        var __pos_0__;
        t0 = ((asm0)["System.IDisposable"])();
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
                ((((arg0)["<>7__wrap8"].ifacemap)[t0].x600008f)())(convert_box_to_pointer_as_needed((arg0)["<>7__wrap8"]));
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
        (arg0)["_Where_d__6_1<>l__initialThreadId"] = (asm0.x6000089)();
        /* IL_18: ret */
        return ;
    };;
    asm.TestLog = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function TestLog()
            {
                (TestLog.init)();
                this.constructor = TestLog;
            };
            c = TestLog;
            ct = c;
            TestLog.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(TestLog,"TestLog",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(TestLog),Array,"asm1.t2000002");
                TestLog.Interfaces = [];
                declare_virtual(TestLog,"asm0.x6000005","asm0.x6000005");
                declare_virtual(TestLog,"asm0.x6000008","asm0.x6000008");
                declare_virtual(TestLog,"asm0.x6000009","asm0.x6000009");
            };
            TestLog.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.TestHelper = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function TestHelper()
            {
                (TestHelper.init)();
                this.constructor = TestHelper;
            };
            c = TestHelper;
            ct = c;
            TestHelper.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(TestHelper,"TestHelper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(TestHelper),Array,"asm1.t2000006");
                TestHelper.Interfaces = [];
                declare_virtual(TestHelper,"asm0.x6000005","asm0.x6000005");
                declare_virtual(TestHelper,"asm0.x6000008","asm0.x6000008");
                declare_virtual(TestHelper,"asm0.x6000009","asm0.x6000009");
            };
            TestHelper.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.E = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function E()
            {
                (E.init)();
                this.constructor = E;
            };
            c = E;
            ct = c;
            E.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(E,"E",asm,false,false,false,false,false,[
                    [
                        ((asm0)["System.Runtime.CompilerServices.ExtensionAttribute"])(),
                        asm0.x600011b
                    ]
                ],[],((asm0)["System.Object"])(),is_inst_default(E),Array,"asm1.t2000007");
                E.Interfaces = [];
                declare_virtual(E,"asm0.x6000005","asm0.x6000005");
                declare_virtual(E,"asm0.x6000008","asm0.x6000008");
                declare_virtual(E,"asm0.x6000009","asm0.x6000009");
            };
            E.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.P = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function P()
            {
                (P.init)();
                this.constructor = P;
            };
            c = P;
            ct = c;
            P.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(P,"P",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x6000010",
                        "get_Prop"
                    ],
                    [
                        asm1,
                        "x6000011",
                        "set_Prop"
                    ]
                ],((asm0)["System.Object"])(),is_inst_default(P),Array,"asm1.t2000008");
                P.Interfaces = [];
                declare_virtual(P,"asm0.x6000005","asm0.x6000005");
                declare_virtual(P,"asm0.x6000008","asm0.x6000008");
                declare_virtual(P,"asm0.x6000009","asm0.x6000009");
                (P.prototype)["P<Prop>k__BackingField"] = 0;
            };
            P.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.Program = (function ()
    {
        var ct;
        ct = null;
        return function ()
        {
            var c;
            var initialized;
            c = ct;
            
            if (c){
                return c;
            }
            initialized = false;;
            function Program()
            {
                (Program.init)();
                this.constructor = Program;
            };
            c = Program;
            ct = c;
            Program.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(Program),Array,"asm1.t2000009");
                (Program)["CS$<>9__CachedAnonymousMethodDelegate6"] = null;
                Program.Interfaces = [];
                declare_virtual(Program,"asm0.x6000005","asm0.x6000005");
                declare_virtual(Program,"asm0.x6000008","asm0.x6000008");
                declare_virtual(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["E+<Select>d__0`2"] = (function ()
    {
        var ct;
        ct = {};
        return function (T,TResult)
        {
            var c;
            var initialized;
            c = tree_get([
                T,
                TResult
            ],ct);
            
            if (c){
                return c;
            }
            initialized = false;;
            function _Select_d__0_2()
            {
                (_Select_d__0_2.init)();
                this.constructor = _Select_d__0_2;
            };
            c = _Select_d__0_2;
            tree_set([
                T,
                TResult
            ],ct,c);
            _Select_d__0_2.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(_Select_d__0_2,"E+<Select>d__0`2",asm,false,false,false,true,false,[],[],((asm0)["System.Object"])(),is_inst_default(_Select_d__0_2),Array,"asm1.t200000a");
                _Select_d__0_2.Interfaces = [
                    ((asm0)["System.Collections.Generic.IEnumerable`1"])(TResult),
                    ((asm0)["System.Collections.IEnumerable"])(),
                    ((asm0)["System.Collections.Generic.IEnumerator`1"])(TResult),
                    ((asm0)["System.Collections.IEnumerator"])(),
                    ((asm0)["System.IDisposable"])()
                ];
                (_Select_d__0_2.GenericArguments)["asm1.t200000a"] = [
                    T,
                    TResult
                ];
                declare_virtual(_Select_d__0_2,"asm1.x6000016","asm1.x6000016");
                declare_virtual(_Select_d__0_2,"asm1.x6000017","asm1.x6000017");
                declare_virtual(_Select_d__0_2,"asm1.x6000018","asm1.x6000018");
                declare_virtual(_Select_d__0_2,"asm1.x6000019","asm1.x6000019");
                declare_virtual(_Select_d__0_2,"asm1.x600001a","asm1.x600001a");
                declare_virtual(_Select_d__0_2,"asm1.x600001b","asm1.x600001b");
                declare_virtual(_Select_d__0_2,"asm1.x600001c","asm1.x600001c");
                declare_virtual(_Select_d__0_2,"asm0.x6000005","asm0.x6000005");
                declare_virtual(_Select_d__0_2,"asm0.x6000008","asm0.x6000008");
                declare_virtual(_Select_d__0_2,"asm0.x6000009","asm0.x6000009");
                (_Select_d__0_2.prototype)["_Select_d__0_2<>2__current"] = ((TResult.IsValueType) ? (((TResult.IsPrimitive) ? (0) : (new TResult()))) : (null));
                (_Select_d__0_2.prototype)["_Select_d__0_2<>1__state"] = 0;
                (_Select_d__0_2.prototype)["_Select_d__0_2<>l__initialThreadId"] = 0;
                _Select_d__0_2.prototype.source = null;
                (_Select_d__0_2.prototype)["<>3__source"] = null;
                _Select_d__0_2.prototype.selector = null;
                (_Select_d__0_2.prototype)["<>3__selector"] = null;
                (_Select_d__0_2.prototype)["<s>5__1"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
                (_Select_d__0_2.prototype)["<>7__wrap2"] = null;
                tree_set([
                    ((asm0)["System.Collections.Generic.IEnumerable`1"])(TResult),
                    TResult
                ],_Select_d__0_2.prototype.ifacemap,{
                    'x600000e': function ()
                    {
                        return asm1.x6000016;
                    }
                });
                tree_set([
                    ((asm0)["System.Collections.IEnumerable"])()
                ],_Select_d__0_2.prototype.ifacemap,{
                    'x600000d': function ()
                    {
                        return asm1.x6000017;
                    }
                });
                tree_set([
                    ((asm0)["System.Collections.Generic.IEnumerator`1"])(TResult),
                    TResult
                ],_Select_d__0_2.prototype.ifacemap,{
                    'x60000e7': function ()
                    {
                        return asm1.x6000019;
                    }
                });
                tree_set([
                    ((asm0)["System.Collections.IEnumerator"])()
                ],_Select_d__0_2.prototype.ifacemap,{
                    'x60000e4': function ()
                    {
                        return asm1.x600001c;
                    },
                    'x60000e5': function ()
                    {
                        return asm1.x6000018;
                    },
                    'x60000e6': function ()
                    {
                        return asm1.x600001a;
                    }
                });
                tree_set([
                    ((asm0)["System.IDisposable"])()
                ],_Select_d__0_2.prototype.ifacemap,{
                    'x600008f': function ()
                    {
                        return asm1.x600001b;
                    }
                });
            };
            _Select_d__0_2.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["E+<Where>d__6`1"] = (function ()
    {
        var ct;
        ct = {};
        return function (T)
        {
            var c;
            var initialized;
            c = tree_get([
                T
            ],ct);
            
            if (c){
                return c;
            }
            initialized = false;;
            function _Where_d__6_1()
            {
                (_Where_d__6_1.init)();
                this.constructor = _Where_d__6_1;
            };
            c = _Where_d__6_1;
            tree_set([
                T
            ],ct,c);
            _Where_d__6_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(_Where_d__6_1,"E+<Where>d__6`1",asm,false,false,false,true,false,[],[],((asm0)["System.Object"])(),is_inst_default(_Where_d__6_1),Array,"asm1.t200000b");
                _Where_d__6_1.Interfaces = [
                    ((asm0)["System.Collections.Generic.IEnumerable`1"])(T),
                    ((asm0)["System.Collections.IEnumerable"])(),
                    ((asm0)["System.Collections.Generic.IEnumerator`1"])(T),
                    ((asm0)["System.Collections.IEnumerator"])(),
                    ((asm0)["System.IDisposable"])()
                ];
                (_Where_d__6_1.GenericArguments)["asm1.t200000b"] = [
                    T
                ];
                declare_virtual(_Where_d__6_1,"asm1.x600001f","asm1.x600001f");
                declare_virtual(_Where_d__6_1,"asm1.x6000020","asm1.x6000020");
                declare_virtual(_Where_d__6_1,"asm1.x6000021","asm1.x6000021");
                declare_virtual(_Where_d__6_1,"asm1.x6000022","asm1.x6000022");
                declare_virtual(_Where_d__6_1,"asm1.x6000023","asm1.x6000023");
                declare_virtual(_Where_d__6_1,"asm1.x6000024","asm1.x6000024");
                declare_virtual(_Where_d__6_1,"asm1.x6000025","asm1.x6000025");
                declare_virtual(_Where_d__6_1,"asm0.x6000005","asm0.x6000005");
                declare_virtual(_Where_d__6_1,"asm0.x6000008","asm0.x6000008");
                declare_virtual(_Where_d__6_1,"asm0.x6000009","asm0.x6000009");
                (_Where_d__6_1.prototype)["_Where_d__6_1<>2__current"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
                (_Where_d__6_1.prototype)["_Where_d__6_1<>1__state"] = 0;
                (_Where_d__6_1.prototype)["_Where_d__6_1<>l__initialThreadId"] = 0;
                _Where_d__6_1.prototype.source = null;
                (_Where_d__6_1.prototype)["<>3__source"] = null;
                _Where_d__6_1.prototype.predicate = null;
                (_Where_d__6_1.prototype)["<>3__predicate"] = null;
                (_Where_d__6_1.prototype)["<s>5__7"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
                (_Where_d__6_1.prototype)["<>7__wrap8"] = null;
                tree_set([
                    ((asm0)["System.Collections.Generic.IEnumerable`1"])(T),
                    T
                ],_Where_d__6_1.prototype.ifacemap,{
                    'x600000e': function ()
                    {
                        return asm1.x600001f;
                    }
                });
                tree_set([
                    ((asm0)["System.Collections.IEnumerable"])()
                ],_Where_d__6_1.prototype.ifacemap,{
                    'x600000d': function ()
                    {
                        return asm1.x6000020;
                    }
                });
                tree_set([
                    ((asm0)["System.Collections.Generic.IEnumerator`1"])(T),
                    T
                ],_Where_d__6_1.prototype.ifacemap,{
                    'x60000e7': function ()
                    {
                        return asm1.x6000022;
                    }
                });
                tree_set([
                    ((asm0)["System.Collections.IEnumerator"])()
                ],_Where_d__6_1.prototype.ifacemap,{
                    'x60000e4': function ()
                    {
                        return asm1.x6000025;
                    },
                    'x60000e5': function ()
                    {
                        return asm1.x6000021;
                    },
                    'x60000e6': function ()
                    {
                        return asm1.x6000023;
                    }
                });
                tree_set([
                    ((asm0)["System.IDisposable"])()
                ],_Where_d__6_1.prototype.ifacemap,{
                    'x600008f': function ()
                    {
                        return asm1.x6000024;
                    }
                });
            };
            _Where_d__6_1.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x6000013;
})(asm1 || (asm1 = {}));
