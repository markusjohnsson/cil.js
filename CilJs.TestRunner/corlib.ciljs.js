
"use strict";

var CILJS;

(function (ciljs) {
    ciljs.nop = function nop() { };
    
    ciljs.next_hash = 1;

    ciljs.entry_point = function () {
        var a = 0;
        var result = null;
        while (window["asm" + a])
        {
            if (typeof window["asm" + a].entryPoint == 'function')
                result = window["asm" + a].entryPoint;

            a++;
        }
        if (result != null)
            result.apply(null, arguments);
    }

    ciljs.declare_type = function declare_type(name, genericArgs, baseType, init, ctortext) {
        var isGeneric = genericArgs && genericArgs.length > 0;

        var ctor = ctortext; //"function " + name + "() { c.init(); }";

        if (isGeneric) {
            var cacheTree = {};
            var gA = genericArgs.join(",");
            var gAmD = genericArgs.map(function (a) { return a + ".GenericTypeMetadataName"; }).join(",");
            var s = "" +
                "return function t(" + gA + ") {\n" +
                "    var cachedType = ciljs.tree_get([" + gAmD + "], cacheTree);\n" +
                "    if (cachedType) return cachedType;\n" +
                "    \n" +
                "    cachedType = new Function('" + genericArgs.join("','") + "', 'var c = " + ctor + "; return c;')(" + gA + ");\n" +
                "    ciljs.tree_set([" + gAmD + "], cacheTree, cachedType);\n" +
                "    \n" +
                "    cachedType.init = init.bind(cachedType, " + gA + ");\n" +
                "    var baseCtor = baseType(" + gA + ");\n" +
                "    cachedType.prototype = (typeof baseCtor === 'function') ? (new baseCtor()) : baseCtor;\n" +
                "    cachedType.prototype.constructor = cachedType;\n" + 
                "    return cachedType;\n" +
                "}";

            var t = new Function("ciljs", "cacheTree", "baseType", "init", s)(ciljs, cacheTree, baseType, init);

            return t;
        }
        else {

            var cacheTree = null;
            var s = "" +
                "return function t() {\n" +
                "    var cachedType = cacheTree;\n" +
                "    if (cachedType) return cachedType;\n" +
                "    \n" +
                "    cachedType = new Function('var c = "+ctor+"; return c;')();\n" +
                "    cacheTree = cachedType;\n" +
                "    \n" +
                "    cachedType.init = init.bind(cachedType);\n" +
                "    var baseCtor = baseType();\n" +
                "    cachedType.prototype = (typeof baseCtor === 'function') ? (new baseCtor()) : baseCtor;\n" +
                "    cachedType.prototype.constructor = cachedType;\n" +
                "    return cachedType;\n" +
                "}";

            var t = new Function("ciljs", "cacheTree", "baseType", "init", s)(ciljs, cacheTree, baseType, init);

            return t;
        }
    }

    ciljs.init_base_types = function init_base_types()
    {
        asm0['System.Object']().init();
        asm0['System.ValueType']().init();
        asm0['System.Array']().init();
        asm0['System.String']().init();
        asm0['System.Delegate']().init();
        asm0['System.Exception']().init();
        asm0['System.Enum']().init();
        asm0['System.Type']().init();
        asm0['System.Boolean']().init();
        asm0['System.Char']().init();
        asm0['System.Byte']().init();
        asm0['System.SByte']().init();
        asm0['System.Int16']().init();
        asm0['System.UInt16']().init();
        asm0['System.Int32']().init();
        asm0['System.UInt32']().init();
        asm0['System.Int64']().init();
        asm0['System.UInt64']().init();
        asm0['System.Single']().init();
        asm0['System.Double']().init();
    }

    ciljs.init_type = function init_type(type, assembly, fullname, isValueType, isPrimitive, isInterface, isGenericTypeDefinition, isNullable, customAttributes, methods, baseType, isInst, arrayType, metadataName, defaultValue) {
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

        type.Interfaces = [];
        type.GenericArguments = {};
        type.prototype.vtable = {};
        type.prototype.ifacemap = {};

        type.Default = defaultValue;
    }

    ciljs.implement_interface = function implement_interface(type, iface, implementation) {
        type.Interfaces.push(iface[0]);
        if (implementation !== null)
            ciljs.tree_set(iface, type.prototype.ifacemap, implementation);
    }

    ciljs.declare_virtual = function declare_virtual(type, slot, target) {
        type.prototype.vtable[slot] = new Function("return " + target + ";");
    }

    ciljs.is_inst_interface = function is_inst_interface(interfaceType) {
        return function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(interfaceType) !== -1 ? t : null; } catch (e) { return null; } };
    }

    ciljs.is_inst_primitive = function is_inst_primitive(primitiveType) {
        return function (t) { try { return t.type === primitiveType ? t : null; } catch (e) { return null; } }
    }

    ciljs.is_inst_array = function is_inst_array(T) {
        return function (t) { return t instanceof asm0['System.Array']() && (t.etype === T || T === asm0['System.Object']() || t.etype.prototype instanceof T) ? t : null; };
    }

    ciljs.is_inst_default = function is_inst_default(type) {
        return function (t) { return t instanceof type ? t : null; };
    }

    ciljs.is_inst_value_type = function is_inst_value_type(type) {
        return function (t) { return (t != null && t.boxed instanceof type) ? t : t instanceof type ? t : null; };
    }

    ciljs.is_inst_delegate = function is_inst_delegate(delegateType) {
        return function (t) { return (t && typeof t._methodPtr === 'function') ? t : null; };
    }

    ciljs.clone_value = function clone_value(v) {
        if (v === null) return v;
        if (typeof v === "number") return v;
        if (typeof v === "function") return v;
        if (!v.constructor.IsValueType) return v;
        var result = new v.constructor();
        for (var p in v) {
            if (v.hasOwnProperty(p))
                result[p] = ciljs.clone_value(v[p]);
        }
        return result;
    }

    ciljs.value_equals = function value_equals(a, b) {

        if (typeof a !== typeof b)
            return 0;

        if (a === null)
            return b === null ? 1 : 0;

        if (typeof a === "object" && typeof a.constructor !== "undefined" && a.constructor.IsValueType) {

            for (var p in a) {
                var av = a[p];
                var bv = b[p];

                if (!ciljs.value_equals(av, bv))
                    return 0;
            }

            return 1;
        }
        else {
            return a === b ? 1 : 0;
        }
    }

    ciljs.unsigned_value = function unsigned_value(a) {
        if (a < 0)
            return 0xffffffff + a + 1;
        else
            return a;
    }

    ciljs.box = function box(v, type) {
        if (v === null)
            return v;

        if (type.IsNullable) {
            if (v.has_value)
                return ciljs.box(v.value, type.GenericArguments[type.MetadataName][0]);
            else
                return null;
        }

        if (!type.IsValueType)
            return v;

        if (!type.IsPrimitive)
            v = ciljs.clone_value(v);

        return ciljs.make_box(v, type);
    }

    ciljs.make_box = function (v, type) {
        return {
            'boxed': v,
            'type': type,
            'vtable': type.prototype.vtable,
            'ifacemap': type.prototype.ifacemap
        };
    }

    ciljs.unbox = function unbox(o, type) {
        if (o === null) {
            var t = asm0['System.InvalidCastException']();
            var e = new t();
            e.stack = new Error().stack;
            throw e;
        }
        return ciljs.cast_class(o, type).boxed;
    }

    ciljs.unbox_any = function unbox_any(o, type) {
        if (type.IsNullable) {
            var result = new type();
            if (o !== null) {
                result.value = ciljs.cast_class(o.boxed, type.GenericArguments[type.MetadataName][0]);
                result.has_value = true;
            }
            return result;
        }

        if (type.IsValueType) {

            if (o === null) {
                var t = asm0['System.InvalidCastException']();
                throw new t();
            }

            return ciljs.cast_class(o, type).boxed;
        }
        else
            return ciljs.cast_class(o, type);
    }

    ciljs.stelem_ref = function stelem_ref(array, index, element) {
        var castedElement = ciljs.cast_class(element, array.etype);
        array.jsarr[index] = castedElement;
    }

    ciljs.ldelem_ref = function ldelem_ref(array, index) {
        return ciljs.box(array.jsarr[index], array.etype);
    }

    ciljs.convert_box_to_pointer_as_needed = function convert_box_to_pointer_as_needed(o) {
        if (typeof o.boxed !== "undefined" &&
            typeof o.type !== "undefined" &&
            o.type.IsValueType) {
            return {
                'r': function () { return o.boxed; },
                'w': function (v) { return o.boxed = v; }
            };
        }
        else {
            return o;
        }
    }

    ciljs.dereference_pointer_as_needed = function(p) {
        if (typeof p.r === "function" &&
            typeof p.w === "function") {
            var v = p.r();
            if (typeof v !== 'number' && !v.constructor.IsValueType) {
                return v;
            }
        }

        return p;
    }

    ciljs.tree_get = function tree_get(a, s) {
        var c = s;
        for (var i = 0; c && i < a.length; i++)
            c = c[a[i]];
        return c;
    }

    ciljs.tree_set = function tree_set(a, s, v) {
        if (a.length === 1) {
            s[a[0]] = v;
        }
        else {
            var c = s[a[0]];
            if (!c) s[a[0]] = c = {};
            ciljs.tree_set(a.slice(1), c, v);
        }
    }

    ciljs.new_string = function new_string(jsstr) {
        var r = new (asm0['System.String']())();
        r.jsstr = jsstr;
        return r;
    }

    ciljs.new_handle = function new_handle(type, value) {
        var r = new type();
        r.value = value;
        return r;
    }

    ciljs.new_array = function new_array(type, length) {
        var ctor = type.ArrayType || Array;
        var r = new (asm0['System.Array`1'](type))();
        r.etype = type;
        r.jsarr = new ctor(length);
        var i;
        if (type.IsValueType === false) {
            for (i = 0; i < length; i++)
                r.jsarr[i] = null;
        }
        else if (type.IsPrimitive === false) {
            for (i = 0; i < length; i++)
                r.jsarr[i] = new type();
        }
        else if (type.FullName === "System.Int64" || type.FullName === "System.UInt64") {
            for (i = 0; i < length; i++)
                r.jsarr[i] = [0, 0];
        }
        else {
            for (i = 0; i < length; i++)
                r.jsarr[i] = 0;
        }
        return r;
    }

    ciljs.newobj = function newobj(type, ctor, args) {
        var result = new type();

        if (type.IsValueType)
            args[0] = {
                w: function (a) { result = a; },
                r: function () { return result; }
            };
        else
            args[0] = result;

        ctor.apply(null, args);

        return result;
    }

    ciljs.cast_class = function cast_class(obj, type) {
        if (type.IsInst(obj) || (!type.IsValueType && obj === null)) {
            return obj;
        }
        else if (type.IsPrimitive) {
            if (typeof obj === 'undefined' || obj === null) {
            }
            else if (typeof obj === 'number') {
                return obj;
            }
            else if (typeof obj.length === 'number' && obj.length === 2) {
                return obj; /* this is for (u)int64 */
            }
        }
        else if (
            (type === asm0['System.Object']() || type === asm0['System.ValueType']()) &&
            (typeof obj.boxed !== 'undefined'))
        {
            return obj;
        }

        ciljs.throw_invalid_cast();
    }

    ciljs.throw_invalid_cast = function throw_invalid_cast() {
        var t = asm0['System.InvalidCastException']();
        var e = new t();
        e.stack = new Error().stack;
        throw e;
    }

    ciljs.conv_u8 = function conv_u8(n) {
        if (n < 0) {
            /* signed 32 bit int that need to be converted to 32 bit unsigned before 64 bit conversion */
            n = 0x100000000 + n;
        }

        return ciljs.make_uint64(n);
    }

    ciljs.conv_i8 = function conv_i8(n) {
        if (n < 0) {
            /* signed 32 bit int */
            n = 0x100000000 + n;

            /* here, n should be positive and less than 0xffffffff, otherwise, input would not have fit in 32 bit */
            return new Uint32Array([n | 0, 0xffffffff]);
        }

        return ciljs.make_uint64(n);
    }

    ciljs.make_uint64 = function make_uint64(n) {
        var bits32 = 0xffffffff;

        var floorN = Math.floor(n);
        var low = floorN | 0;
        var high = (floorN / 0x100000000) | 0;

        low = low & bits32;
        high = high & bits32;

        return new Uint32Array([low, high]);
    }

    ciljs.to_number_signed = function to_number_signed(n) {
        if (asm0.Int64_isNegative(n)) {
            n = asm0.Int64_UnaryNegation(n);
            return -ciljs.to_number_unsigned(n);
        }

        return ciljs.to_number_unsigned(n);
    }

    ciljs.to_number_unsigned = function to_number_unsigned(n) {
        return n[1] * 4294967296 + n[0];
    }

    ciljs.array_set_value = function array_set_value(dest, value, pos) {

        // value is either an object or a boxed value type.
        var etype = dest.etype;
        var vtype = value != null ? (value.constructor || value.type) : null;

        if (dest.etype.IsNullable) {
            throw "not implemented";

            return;
        }

        if (value == null) {

            // Null is the universal zero...

            if (!etype.IsValueType)
                dest.jsarr[pos] = null; // reference type
            else if (etype.Is64BitPrimitive)
                dest.jsarr[pos] = [0, 0];
            else if (etype.IsPrimitive)
                dest.jsarr[pos] = 0
            else // value type
                dest.jsarr[pos] = new etype();
        }
        else if (etype == asm0['System.Object']()) {

            // Everything is compatible with Object

            dest.jsarr[pos] = value;
        }
        else if (!etype.IsValueType) {
            dest.jsarr[pos] = ciljs.cast_class(value, etype)
        }
        else {

            if (etype.IsInst(value)) {
                dest.jsarr[pos] = value.boxed;
            }
            else {
                if (!etype.IsPrimitive || !vtype.IsPrimitive) {
                    ciljs.throw_invalid_cast();
                }

                dest.jsarr[pos] = value;
            }
        }
    }

    ciljs.delegate_invoke = function (self) {
        var m = self._methodPtr;
        var t = self._target;

        var args = new Array(arguments.length);

        for (var i = 0; i < arguments.length; i++)
            args[i] = arguments[i];

        if (t != null)
            args[0] = t;
        else
            args = Array.prototype.slice.call(args, 1);

        return m.apply(null, args);
    }

    ciljs.delegate_begin_invoke = function (self /* , [delegate arguments], callback, state */) {
        var asyncResult = asm0.CreateAsyncResult(self);

        asyncResult.result = ciljs.delegate_invoke.apply(null, arguments);
        asyncResult.asyncState = arguments[arguments.length - 1];

        var asyncCallback = arguments[arguments.length - 2];
        if (asyncCallback != null)
        {
            ciljs.delegate_invoke(asyncCallback, asyncResult);
        }
        
        return asyncResult;
    }

    ciljs.delegate_end_invoke = function (self, asyncResult) {
        return asyncResult.result;
    }

    ciljs.delegate_ctor = function (self, target, methodPtr) {
        self._methodPtr = methodPtr;
        self._target = target;
    }

    ciljs.console_write_line = function (managedStr) {
        console.log(managedStr.jsstr);
    }
})(CILJS || (CILJS = {}));var asm0;(function (asm)
{
    asm.FullName = "mscorlib, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.String Locale.GetText(String)*/
    asm.x6000001 = function GetText(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: stloc.0  */
                loc0 = arg0;
                /* IL_05: ldloc.0  */
                /* IL_06: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Object Activator.CreateInstance(Type)*/
    asm.x6000002 = function CreateInstance(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call Object CreateInstanceImpl(System.Type) */
                /* IL_07: stloc.0  */
                loc0 = (new (arg0.ctor)());
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* static T Activator.CreateInstance<T>()*/
    asm.x6000003 = function (T)
    {
        return function CreateInstance()
        {
            var t0;
            var in_block_0;
            var __pos__;
            var loc0;
            t0 = T;
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldtoken T */
                    /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                    /* IL_0B: call Object CreateInstance(System.Type) */
                    /* IL_10: unbox.any T */
                    /* IL_15: stloc.0  */
                    loc0 = CILJS.unbox_any(asm0.x6000002(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),t0);
                    /* IL_18: ldloc.0  */
                    /* IL_19: ret  */
                    return loc0;
                }
            }
        };
    };;
    /* System.Boolean Predicate`1.Invoke(T)*/
    asm.x6000006 = CILJS.delegate_invoke;;
    /* System.IAsyncResult Predicate`1.BeginInvoke(T,AsyncCallback,Object)*/
    asm.x6000007 = CILJS.delegate_begin_invoke;;
    /* System.Boolean Predicate`1.EndInvoke(IAsyncResult)*/
    asm.x6000008 = CILJS.delegate_end_invoke;;
    /*  Predicate`1..ctor(Object,IntPtr)*/
    asm.x6000005 = CILJS.delegate_ctor;;
    /* System.Int32 Array.get_Length()*/
    asm.x6000009 = function get_Length(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call Int32 GetLengthImpl(System.Object) */
                /* IL_07: stloc.0  */
                loc0 = asm0.x600000b(arg0);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int64 Array.get_LongLength()*/
    asm.x600000a = function get_LongLength(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call Int32 get_Length() */
                /* IL_07: conv.i8  */
                /* IL_08: stloc.0  */
                loc0 = CILJS.conv_i8(asm0.x6000009(arg0));
                /* IL_0B: ldloc.0  */
                /* IL_0C: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Int32 Array.GetLengthImpl(Object)*/
    asm.x600000b = function(o) { return o.jsarr.length; };;
    /* static System.Object Array.GetValueImpl(Object,Int32)*/
    asm.x600000c = function(o, i) { return CILJS.box(o.jsarr[i], o.etype); };;
    /* static T[] Array.FromJsArray<T>(Object)*/
    asm.x600000d = 
            function (T) {
                return function FromJsArray(arr) {
                    var r = new (asm0['System.Array`1'](T))();
                    r.etype = T;
                    r.jsarr = arr;
                    return r;
                };
            };;
    /* System.Object Array.GetValue(Int32)*/
    asm.x600000e = function GetValue(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: call Object GetValueImpl(System.Object, System.Int32) */
                /* IL_08: stloc.0  */
                loc0 = asm0.x600000c(arg0,arg1);
                /* IL_0B: ldloc.0  */
                /* IL_0C: ret  */
                return loc0;
            }
        }
    };;
    /* System.Collections.IEnumerator Array.GetEnumerator()*/
    asm.x600000f = function GetEnumerator(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: callvirt IEnumerator GetEnumeratorImpl() */
                /* IL_07: stloc.0  */
                loc0 = ((arg0.vtable)["asm0.x6000010"]())(arg0);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Void Array.Clear<T>(T[],Int32,Int32)*/
    asm.x6000011 = function (T)
    {
        return function Clear(arg0, arg1, arg2)
        {
            var t0;
            var loc0;
            var in_block_0;
            var __pos__;
            var loc1;
            var in_block_1;
            var loc2;
            t0 = T;
            loc0 = T.Default;
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldloca.s 0 */
                    /* IL_04: initobj T */
                    loc0 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? (0|0) : (new t0()))) : (null));
                    /* IL_09: ldarg.1  */
                    /* IL_0A: stloc.1  */
                    loc1 = arg1;
                    /* IL_0B: br.s IL_19 */
                    __pos__ = 0x19;
                    continue;
                    case 0xD:
                    case 0x19:
                    in_block_1 = true;
                    
                    if (__pos__ > 0x21){
                        in_block_1 = false;
                    }
                    
                    if (__pos__ < 0xD){
                        __pos__ = 0xD;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0xD:
                            /* IL_0D: ldarg.0  */
                            /* IL_0E: ldloc.1  */
                            /* IL_0F: ldloc.0  */
                            /* IL_10: stelem T */
                            (arg0.jsarr)[loc1] = loc0;
                            /* IL_15: ldloc.1  */
                            /* IL_16: ldc.i4.1  */
                            /* IL_17: add  */
                            /* IL_18: stloc.1  */
                            loc1 = (loc1 + (1|0)) | (0|0);
                            case 0x19:
                            /* IL_19: ldloc.1  */
                            /* IL_1A: ldarg.0  */
                            /* IL_1B: ldlen  */
                            /* IL_1C: conv.i4  */
                            /* IL_1E: clt  */
                            /* IL_1F: stloc.2  */
                            loc2 = ((loc1 < (arg0.jsarr.length | (0|0))) ? 1 : 0);
                            /* IL_20: ldloc.2  */
                            /* IL_21: brtrue.s IL_0D */
                            
                            if (loc2){
                                __pos__ = 0xD;
                                continue;
                            }
                        }
                        break;
                    }
                    /* IL_23: ret  */
                    return ;
                }
            }
        };
    };;
    /* static System.Int32 Array.IndexOf<T>(T[],T,Int32,Int32)*/
    asm.x6000012_init = function (T)
    {
        return function (arg0, arg1, arg2, arg3)
        {
            ((asm0)["System.Collections.IEqualityComparer"]().init)();
            asm.x6000012 = asm.x6000012_;
        };
    };;
    asm.x6000012 = function (T)
    {
        return function (arg0, arg1, arg2, arg3)
        {
            (asm.x6000012_init(T))(arg0,arg1,arg2,arg3);
            return (asm.x6000012_(T))(arg0,arg1,arg2,arg3);
        };
    };;
    asm.x6000012_ = function (T)
    {
        return function IndexOf(arg0, arg1, arg2, arg3)
        {
            var t0;
            var t1;
            var t2;
            var st_14;
            var in_block_0;
            var __pos__;
            var loc2;
            var loc3;
            var loc0;
            var loc1;
            var loc4;
            var in_block_1;
            var loc5;
            var loc6;
            var loc7;
            t0 = (asm0)["System.Exception"]();
            t1 = T;
            t2 = (asm0)["System.Collections.IEqualityComparer"]();
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.0  */
                    /* IL_02: ldnull  */
                    /* IL_04: ceq  */
                    /* IL_05: stloc.2  */
                    loc2 = ((arg0 === null) ? 1 : 0);
                    /* IL_06: ldloc.2  */
                    /* IL_07: brfalse.s IL_14 */
                    
                    if ((!(loc2))){
                        __pos__ = 0x14;
                        continue;
                    }
                    /* IL_09: ldstr array */
                    /* IL_0E: newobj Void .ctor(System.String) */
                    /* IL_13: throw  */
                    throw CILJS.newobj(t0,asm0.x6000077,[null, CILJS.new_string("array")]);
                    case 0x14:
                    /* IL_14: ldarg.3  */
                    /* IL_15: ldc.i4.0  */
                    /* IL_16: blt.s IL_2A */
                    
                    if (arg3 < (0|0)){
                        __pos__ = 0x2A;
                        continue;
                    }
                    /* IL_18: ldarg.2  */
                    /* IL_19: ldc.i4.0  */
                    /* IL_1A: blt.s IL_2A */
                    
                    if (arg2 < (0|0)){
                        __pos__ = 0x2A;
                        continue;
                    }
                    /* IL_1C: ldarg.2  */
                    /* IL_1D: ldc.i4.1  */
                    /* IL_1E: sub  */
                    /* IL_1F: ldarg.0  */
                    /* IL_20: ldlen  */
                    /* IL_21: conv.i4  */
                    /* IL_22: ldc.i4.1  */
                    /* IL_23: sub  */
                    /* IL_24: ldarg.3  */
                    /* IL_25: sub  */
                    /* IL_27: cgt  */
                    st_14 = ((((arg2 - (1|0)) | (0|0)) > (((((arg0.jsarr.length | (0|0)) - (1|0)) | (0|0)) - arg3) | (0|0))) ? 1 : 0);
                    /* IL_28: br.s IL_2B */
                    __pos__ = 0x2B;
                    continue;
                    case 0x2A:
                    /* IL_2A: ldc.i4.1  */
                    st_14 = (1|0);
                    case 0x2B:
                    /* IL_2B: stloc.3  */
                    loc3 = st_14;
                    /* IL_2C: ldloc.3  */
                    /* IL_2D: brfalse.s IL_35 */
                    
                    if ((!(loc3))){
                        __pos__ = 0x35;
                        continue;
                    }
                    /* IL_2F: newobj Void .ctor() */
                    /* IL_34: throw  */
                    throw CILJS.newobj(t0,asm0.x6000076,[null]);
                    case 0x35:
                    /* IL_35: ldarg.2  */
                    /* IL_36: ldarg.3  */
                    /* IL_37: add  */
                    /* IL_38: stloc.0  */
                    loc0 = (arg2 + arg3) | (0|0);
                    /* IL_39: ldtoken T */
                    /* IL_3E: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                    /* IL_43: call IEqualityComparer GetDefaultEqualityComparer(System.Type) */
                    /* IL_48: stloc.1  */
                    loc1 = asm1.GetDefaultEqualityComparer(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).ctor)();
                    /* IL_49: ldarg.2  */
                    /* IL_4A: stloc.s 4 */
                    loc4 = arg2;
                    /* IL_4C: br.s IL_7B */
                    __pos__ = 0x7B;
                    continue;
                    case 0x4E:
                    case 0x74:
                    case 0x7B:
                    in_block_1 = true;
                    
                    if (__pos__ > 0x84){
                        in_block_1 = false;
                    }
                    
                    if (__pos__ < 0x4E){
                        __pos__ = 0x4E;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x4E:
                            /* IL_4E: nop  */
                            
                            /* IL_4F: ldloc.1  */
                            /* IL_50: ldarg.0  */
                            /* IL_51: ldloc.s 4 */
                            /* IL_53: call T UnsafeLoad[T](T[], System.Int32) */
                            /* IL_58: box T */
                            /* IL_5D: ldarg.1  */
                            /* IL_5E: box T */
                            /* IL_63: callvirt Boolean Equals(System.Object, System.Object) */
                            /* IL_68: stloc.s 5 */
                            loc5 = (((loc1.ifacemap)[t2].x60001b6)())(CILJS.convert_box_to_pointer_as_needed(loc1),CILJS.box((arg0.jsarr[loc4]),t1),CILJS.box(arg1,t1));
                            /* IL_6A: ldloc.s 5 */
                            /* IL_6C: brfalse.s IL_74 */
                            
                            if ((!(loc5))){
                                __pos__ = 0x74;
                                continue;
                            }
                            /* IL_6E: ldloc.s 4 */
                            /* IL_70: stloc.s 6 */
                            loc6 = loc4;
                            /* IL_72: br.s IL_8B */
                            __pos__ = 0x8B;
                            continue;
                            case 0x74:
                            /* IL_74: nop  */
                            
                            /* IL_75: ldloc.s 4 */
                            /* IL_77: ldc.i4.1  */
                            /* IL_78: add  */
                            /* IL_79: stloc.s 4 */
                            loc4 = (loc4 + (1|0)) | (0|0);
                            case 0x7B:
                            /* IL_7B: ldloc.s 4 */
                            /* IL_7D: ldloc.0  */
                            /* IL_7F: clt  */
                            /* IL_80: stloc.s 7 */
                            loc7 = ((loc4 < loc0) ? 1 : 0);
                            /* IL_82: ldloc.s 7 */
                            /* IL_84: brtrue.s IL_4E */
                            
                            if (loc7){
                                __pos__ = 0x4E;
                                continue;
                            }
                        }
                        break;
                    }
                    /* IL_86: ldc.i4.m1  */
                    /* IL_87: stloc.s 6 */
                    loc6 = (-1|0);
                    case 0x8B:
                    /* IL_8B: ldloc.s 6 */
                    /* IL_8D: ret  */
                    return loc6;
                }
            }
        };
    };
    /* static System.Exception Array.GetException(String)*/
    asm.x6000013 = 
            function (classname) { 
                var t = asm1[classname]();
                return new t(); 
            };;
    /* static System.Void Array.Copy(Array,Int32,Array,Int32,Int32)*/
    asm.x6000014 = function Copy(arg0, arg1, arg2, arg3, arg4)
    {
        var st_2E;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        var loc7;
        var in_block_1;
        var loc8;
        var loc9;
        var loc10;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.0  */
                loc0 = ((arg0 === null) ? 1 : 0);
                /* IL_06: ldloc.0  */
                /* IL_07: brfalse.s IL_14 */
                
                if ((!(loc0))){
                    __pos__ = 0x14;
                    continue;
                }
                /* IL_09: ldstr System.ArgumentNullException */
                /* IL_0E: call Exception GetException(System.String) */
                /* IL_13: throw  */
                throw asm0.x6000013(CILJS.new_string("System.ArgumentNullException"));
                case 0x14:
                /* IL_14: ldarg.2  */
                /* IL_15: ldnull  */
                /* IL_17: ceq  */
                /* IL_18: stloc.1  */
                loc1 = ((arg2 === null) ? 1 : 0);
                /* IL_19: ldloc.1  */
                /* IL_1A: brfalse.s IL_27 */
                
                if ((!(loc1))){
                    __pos__ = 0x27;
                    continue;
                }
                /* IL_1C: ldstr System.ArgumentNullException */
                /* IL_21: call Exception GetException(System.String) */
                /* IL_26: throw  */
                throw asm0.x6000013(CILJS.new_string("System.ArgumentNullException"));
                case 0x27:
                /* IL_27: ldarg.1  */
                /* IL_28: ldc.i4.0  */
                /* IL_2A: clt  */
                /* IL_2B: stloc.2  */
                loc2 = ((arg1 < (0|0)) ? 1 : 0);
                /* IL_2C: ldloc.2  */
                /* IL_2D: brfalse.s IL_3A */
                
                if ((!(loc2))){
                    __pos__ = 0x3A;
                    continue;
                }
                /* IL_2F: ldstr System.ArgumentOutOfRangeException */
                /* IL_34: call Exception GetException(System.String) */
                /* IL_39: throw  */
                throw asm0.x6000013(CILJS.new_string("System.ArgumentOutOfRangeException"));
                case 0x3A:
                /* IL_3A: ldarg.3  */
                /* IL_3B: ldc.i4.0  */
                /* IL_3D: clt  */
                /* IL_3E: stloc.3  */
                loc3 = ((arg3 < (0|0)) ? 1 : 0);
                /* IL_3F: ldloc.3  */
                /* IL_40: brfalse.s IL_4D */
                
                if ((!(loc3))){
                    __pos__ = 0x4D;
                    continue;
                }
                /* IL_42: ldstr System.ArgumentOutOfRangeException */
                /* IL_47: call Exception GetException(System.String) */
                /* IL_4C: throw  */
                throw asm0.x6000013(CILJS.new_string("System.ArgumentOutOfRangeException"));
                case 0x4D:
                /* IL_4D: ldarg.1  */
                /* IL_4E: ldarg.0  */
                /* IL_4F: callvirt Int32 get_Length() */
                /* IL_54: ldarg.s 4 */
                /* IL_56: sub  */
                /* IL_58: cgt  */
                /* IL_59: stloc.s 4 */
                loc4 = ((arg1 > ((asm0.x6000009(arg0) - arg4) | (0|0))) ? 1 : 0);
                /* IL_5B: ldloc.s 4 */
                /* IL_5D: brfalse.s IL_6A */
                
                if ((!(loc4))){
                    __pos__ = 0x6A;
                    continue;
                }
                /* IL_5F: ldstr System.ArgumentException */
                /* IL_64: call Exception GetException(System.String) */
                /* IL_69: throw  */
                throw asm0.x6000013(CILJS.new_string("System.ArgumentException"));
                case 0x6A:
                /* IL_6A: ldarg.3  */
                /* IL_6B: ldarg.2  */
                /* IL_6C: callvirt Int32 get_Length() */
                /* IL_71: ldarg.s 4 */
                /* IL_73: sub  */
                /* IL_75: cgt  */
                /* IL_76: stloc.s 5 */
                loc5 = ((arg3 > ((asm0.x6000009(arg2) - arg4) | (0|0))) ? 1 : 0);
                /* IL_78: ldloc.s 5 */
                /* IL_7A: brfalse.s IL_88 */
                
                if ((!(loc5))){
                    __pos__ = 0x88;
                    continue;
                }
                /* IL_7C: nop  */
                
                /* IL_7D: ldstr System.ArgumentException */
                /* IL_82: call Exception GetException(System.String) */
                /* IL_87: throw  */
                throw asm0.x6000013(CILJS.new_string("System.ArgumentException"));
                case 0x88:
                /* IL_88: ldarg.0  */
                /* IL_89: ldarg.2  */
                /* IL_8A: bne.un.s IL_92 */
                
                if (CILJS.unsigned_value(arg0) != CILJS.unsigned_value(arg2)){
                    __pos__ = 0x92;
                    continue;
                }
                /* IL_8C: ldarg.1  */
                /* IL_8D: ldarg.3  */
                /* IL_8F: cgt  */
                st_2E = ((arg1 > arg3) ? 1 : 0);
                /* IL_90: br.s IL_93 */
                __pos__ = 0x93;
                continue;
                case 0x92:
                /* IL_92: ldc.i4.1  */
                st_2E = (1|0);
                case 0x93:
                /* IL_93: stloc.s 6 */
                loc6 = st_2E;
                /* IL_95: ldloc.s 6 */
                /* IL_97: brfalse.s IL_CB */
                
                if ((!(loc6))){
                    __pos__ = 0xCB;
                    continue;
                }
                /* IL_99: nop  */
                
                /* IL_9A: ldc.i4.0  */
                /* IL_9B: stloc.s 7 */
                loc7 = (0|0);
                /* IL_9D: br.s IL_BC */
                __pos__ = 0xBC;
                continue;
                case 0x9F:
                case 0xBC:
                in_block_1 = true;
                
                if (__pos__ > 0xC6){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x9F){
                    __pos__ = 0x9F;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x9F:
                        /* IL_9F: nop  */
                        
                        /* IL_A0: ldarg.2  */
                        /* IL_A1: ldarg.0  */
                        /* IL_A2: ldarg.1  */
                        /* IL_A3: ldloc.s 7 */
                        /* IL_A5: add  */
                        /* IL_A6: callvirt Object GetValue(System.Int32) */
                        /* IL_AB: ldarg.3  */
                        /* IL_AC: ldloc.s 7 */
                        /* IL_AE: add  */
                        /* IL_AF: callvirt Void SetValue(System.Object, System.Int32) */
                        asm0.x600002d(arg2,asm0.x600000e(arg0,(arg1 + loc7) | (0|0)),(arg3 + loc7) | (0|0));
                        /* IL_B4: nop  */
                        
                        /* IL_B5: nop  */
                        
                        /* IL_B6: ldloc.s 7 */
                        /* IL_B8: ldc.i4.1  */
                        /* IL_B9: add  */
                        /* IL_BA: stloc.s 7 */
                        loc7 = (loc7 + (1|0)) | (0|0);
                        case 0xBC:
                        /* IL_BC: ldloc.s 7 */
                        /* IL_BE: ldarg.s 4 */
                        /* IL_C1: clt  */
                        /* IL_C2: stloc.s 8 */
                        loc8 = ((loc7 < arg4) ? 1 : 0);
                        /* IL_C4: ldloc.s 8 */
                        /* IL_C6: brtrue.s IL_9F */
                        
                        if (loc8){
                            __pos__ = 0x9F;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_C8: nop  */
                
                /* IL_C9: br.s IL_100 */
                __pos__ = 0x100;
                continue;
                case 0xCB:
                /* IL_CB: nop  */
                
                /* IL_CC: ldarg.s 4 */
                /* IL_CE: ldc.i4.1  */
                /* IL_CF: sub  */
                /* IL_D0: stloc.s 9 */
                loc9 = (arg4 - (1|0)) | (0|0);
                /* IL_D2: br.s IL_F1 */
                __pos__ = 0xF1;
                continue;
                case 0xD4:
                case 0xF1:
                in_block_1 = true;
                
                if (__pos__ > 0xFD){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0xD4){
                    __pos__ = 0xD4;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0xD4:
                        /* IL_D4: nop  */
                        
                        /* IL_D5: ldarg.2  */
                        /* IL_D6: ldarg.0  */
                        /* IL_D7: ldarg.1  */
                        /* IL_D8: ldloc.s 9 */
                        /* IL_DA: add  */
                        /* IL_DB: callvirt Object GetValue(System.Int32) */
                        /* IL_E0: ldarg.3  */
                        /* IL_E1: ldloc.s 9 */
                        /* IL_E3: add  */
                        /* IL_E4: callvirt Void SetValue(System.Object, System.Int32) */
                        asm0.x600002d(arg2,asm0.x600000e(arg0,(arg1 + loc9) | (0|0)),(arg3 + loc9) | (0|0));
                        /* IL_E9: nop  */
                        
                        /* IL_EA: nop  */
                        
                        /* IL_EB: ldloc.s 9 */
                        /* IL_ED: ldc.i4.1  */
                        /* IL_EE: sub  */
                        /* IL_EF: stloc.s 9 */
                        loc9 = (loc9 - (1|0)) | (0|0);
                        case 0xF1:
                        /* IL_F1: ldloc.s 9 */
                        /* IL_F3: ldc.i4.0  */
                        /* IL_F5: clt  */
                        /* IL_F6: ldc.i4.0  */
                        /* IL_F8: ceq  */
                        /* IL_F9: stloc.s 10 */
                        loc10 = ((((loc9 < (0|0)) ? 1 : 0) === (0|0)) ? 1 : 0);
                        /* IL_FB: ldloc.s 10 */
                        /* IL_FD: brtrue.s IL_D4 */
                        
                        if (loc10){
                            __pos__ = 0xD4;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_FF: nop  */
                
                case 0x100:
                /* IL_100: ret  */
                return ;
            }
        }
    };;
    /* static System.Int32 Array.GetIndex<T>(T[],Int32,Int32,Predicate`1)*/
    asm.x6000015 = function (T)
    {
        return function GetIndex(arg0, arg1, arg2, arg3)
        {
            var in_block_0;
            var __pos__;
            var loc0;
            var loc1;
            var in_block_1;
            var loc2;
            var loc3;
            var loc4;
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.1  */
                    /* IL_02: ldarg.2  */
                    /* IL_03: add  */
                    /* IL_04: stloc.0  */
                    loc0 = (arg1 + arg2) | (0|0);
                    /* IL_05: ldarg.1  */
                    /* IL_06: stloc.1  */
                    loc1 = arg1;
                    /* IL_07: br.s IL_24 */
                    __pos__ = 0x24;
                    continue;
                    case 0x9:
                    case 0x1F:
                    case 0x24:
                    in_block_1 = true;
                    
                    if (__pos__ > 0x2C){
                        in_block_1 = false;
                    }
                    
                    if (__pos__ < 0x9){
                        __pos__ = 0x9;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x9:
                            /* IL_09: nop  */
                            
                            /* IL_0A: ldarg.3  */
                            /* IL_0B: ldarg.0  */
                            /* IL_0C: ldloc.1  */
                            /* IL_0D: ldelem T */
                            /* IL_12: callvirt Boolean Invoke(T) */
                            /* IL_17: stloc.2  */
                            loc2 = ((arg3._target) ? (arg3._methodPtr(arg3._target,(arg0.jsarr)[loc1])) : (arg3._methodPtr((arg0.jsarr)[loc1])));
                            /* IL_18: ldloc.2  */
                            /* IL_19: brfalse.s IL_1F */
                            
                            if ((!(loc2))){
                                __pos__ = 0x1F;
                                continue;
                            }
                            /* IL_1B: ldloc.1  */
                            /* IL_1C: stloc.3  */
                            loc3 = loc1;
                            /* IL_1D: br.s IL_32 */
                            __pos__ = 0x32;
                            continue;
                            case 0x1F:
                            /* IL_1F: nop  */
                            
                            /* IL_20: ldloc.1  */
                            /* IL_21: ldc.i4.1  */
                            /* IL_22: add  */
                            /* IL_23: stloc.1  */
                            loc1 = (loc1 + (1|0)) | (0|0);
                            case 0x24:
                            /* IL_24: ldloc.1  */
                            /* IL_25: ldloc.0  */
                            /* IL_27: clt  */
                            /* IL_28: stloc.s 4 */
                            loc4 = ((loc1 < loc0) ? 1 : 0);
                            /* IL_2A: ldloc.s 4 */
                            /* IL_2C: brtrue.s IL_09 */
                            
                            if (loc4){
                                __pos__ = 0x9;
                                continue;
                            }
                        }
                        break;
                    }
                    /* IL_2E: ldc.i4.m1  */
                    /* IL_2F: stloc.3  */
                    loc3 = (-1|0);
                    case 0x32:
                    /* IL_32: ldloc.3  */
                    /* IL_33: ret  */
                    return loc3;
                }
            }
        };
    };;
    /* static System.Int32 Array.GetLastIndex<T>(T[],Int32,Int32,Predicate`1)*/
    asm.x6000016 = function (T)
    {
        return function GetLastIndex(arg0, arg1, arg2, arg3)
        {
            var st_03;
            var st_04;
            var st_05;
            var st_06;
            var st_07;
            var st_08;
            var st_09;
            var st_0A;
            var st_0B;
            var in_block_0;
            var __pos__;
            var loc0;
            var in_block_1;
            var loc1;
            var loc2;
            var loc3;
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.1  */
                    /* IL_02: ldarg.2  */
                    /* IL_03: add  */
                    /* IL_04: stloc.0  */
                    loc0 = (arg1 + arg2) | (0|0);
                    /* IL_05: br.s IL_22 */
                    __pos__ = 0x22;
                    continue;
                    case 0x7:
                    case 0x21:
                    case 0x22:
                    in_block_1 = true;
                    
                    if (__pos__ > 0x2B){
                        in_block_1 = false;
                    }
                    
                    if (__pos__ < 0x7){
                        __pos__ = 0x7;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x7:
                            /* IL_07: nop  */
                            
                            /* IL_08: ldarg.3  */
                            st_09 = arg3;
                            /* IL_09: ldarg.0  */
                            st_07 = arg0;
                            /* IL_0A: ldloc.0  */
                            st_03 = loc0;
                            /* IL_0B: ldc.i4.1  */
                            st_04 = (1|0);
                            /* IL_0C: sub  */
                            st_05 = (st_03 - st_04) | (0|0);
                            /* IL_0D: dup  */
                            st_08 = st_06 = st_05;
                            /* IL_0E: stloc.0  */
                            loc0 = st_06;
                            /* IL_0F: ldelem T */
                            st_0A = (st_07.jsarr)[st_08];
                            /* IL_14: callvirt Boolean Invoke(T) */
                            st_0B = ((st_09._target) ? (st_09._methodPtr(st_09._target,st_0A)) : (st_09._methodPtr(st_0A)));
                            /* IL_19: stloc.1  */
                            loc1 = st_0B;
                            /* IL_1A: ldloc.1  */
                            /* IL_1B: brfalse.s IL_21 */
                            
                            if ((!(loc1))){
                                __pos__ = 0x21;
                                continue;
                            }
                            /* IL_1D: ldloc.0  */
                            /* IL_1E: stloc.2  */
                            loc2 = loc0;
                            /* IL_1F: br.s IL_31 */
                            __pos__ = 0x31;
                            continue;
                            case 0x21:
                            /* IL_21: nop  */
                            
                            case 0x22:
                            /* IL_22: ldloc.0  */
                            /* IL_23: ldarg.1  */
                            /* IL_25: ceq  */
                            /* IL_26: ldc.i4.0  */
                            /* IL_28: ceq  */
                            /* IL_29: stloc.3  */
                            loc3 = ((((loc0 === arg1) ? 1 : 0) === (0|0)) ? 1 : 0);
                            /* IL_2A: ldloc.3  */
                            /* IL_2B: brtrue.s IL_07 */
                            
                            if (loc3){
                                __pos__ = 0x7;
                                continue;
                            }
                        }
                        break;
                    }
                    /* IL_2D: ldc.i4.m1  */
                    /* IL_2E: stloc.2  */
                    loc2 = (-1|0);
                    case 0x31:
                    /* IL_31: ldloc.2  */
                    /* IL_32: ret  */
                    return loc2;
                }
            }
        };
    };;
    /* static System.Int32 Array.LastIndexOf<T>(T[],T,Int32,Int32)*/
    asm.x6000017_init = function (T)
    {
        return function (arg0, arg1, arg2, arg3)
        {
            ((asm0)["System.Collections.IEqualityComparer"]().init)();
            asm.x6000017 = asm.x6000017_;
        };
    };;
    asm.x6000017 = function (T)
    {
        return function (arg0, arg1, arg2, arg3)
        {
            (asm.x6000017_init(T))(arg0,arg1,arg2,arg3);
            return (asm.x6000017_(T))(arg0,arg1,arg2,arg3);
        };
    };;
    asm.x6000017_ = function (T)
    {
        return function LastIndexOf(arg0, arg1, arg2, arg3)
        {
            var t0;
            var t1;
            var st_1A;
            var in_block_0;
            var __pos__;
            var loc1;
            var loc2;
            var loc0;
            var loc3;
            var in_block_1;
            var loc4;
            var loc5;
            var loc6;
            t0 = T;
            t1 = (asm0)["System.Collections.IEqualityComparer"]();
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.0  */
                    /* IL_02: ldnull  */
                    /* IL_04: ceq  */
                    /* IL_05: stloc.1  */
                    loc1 = ((arg0 === null) ? 1 : 0);
                    /* IL_06: ldloc.1  */
                    /* IL_07: brfalse.s IL_14 */
                    
                    if ((!(loc1))){
                        __pos__ = 0x14;
                        continue;
                    }
                    /* IL_09: ldstr System.ArgumentNullException */
                    /* IL_0E: call Exception GetException(System.String) */
                    /* IL_13: throw  */
                    throw asm0.x6000013(CILJS.new_string("System.ArgumentNullException"));
                    case 0x14:
                    /* IL_14: ldarg.3  */
                    /* IL_15: ldc.i4.0  */
                    /* IL_16: blt.s IL_3A */
                    
                    if (arg3 < (0|0)){
                        __pos__ = 0x3A;
                        continue;
                    }
                    /* IL_18: ldarg.2  */
                    /* IL_19: ldarg.0  */
                    /* IL_1A: ldc.i4.0  */
                    /* IL_1B: callvirt Int32 GetLowerBound(System.Int32) */
                    /* IL_20: blt.s IL_3A */
                    
                    if (arg2 < asm0.x6000025(arg0,(0|0))){
                        __pos__ = 0x3A;
                        continue;
                    }
                    /* IL_22: ldarg.2  */
                    /* IL_23: ldarg.0  */
                    /* IL_24: ldlen  */
                    /* IL_25: conv.i4  */
                    /* IL_26: ldc.i4.1  */
                    /* IL_27: sub  */
                    /* IL_28: bgt.s IL_3A */
                    
                    if (arg2 > (((arg0.jsarr.length | (0|0)) - (1|0)) | (0|0))){
                        __pos__ = 0x3A;
                        continue;
                    }
                    /* IL_2A: ldarg.2  */
                    /* IL_2B: ldarg.3  */
                    /* IL_2C: sub  */
                    /* IL_2D: ldc.i4.1  */
                    /* IL_2E: add  */
                    /* IL_2F: ldarg.0  */
                    /* IL_30: ldc.i4.0  */
                    /* IL_31: callvirt Int32 GetLowerBound(System.Int32) */
                    /* IL_37: clt  */
                    st_1A = ((((((arg2 - arg3) | (0|0)) + (1|0)) | (0|0)) < asm0.x6000025(arg0,(0|0))) ? 1 : 0);
                    /* IL_38: br.s IL_3B */
                    __pos__ = 0x3B;
                    continue;
                    case 0x3A:
                    /* IL_3A: ldc.i4.1  */
                    st_1A = (1|0);
                    case 0x3B:
                    /* IL_3B: stloc.2  */
                    loc2 = st_1A;
                    /* IL_3C: ldloc.2  */
                    /* IL_3D: brfalse.s IL_4A */
                    
                    if ((!(loc2))){
                        __pos__ = 0x4A;
                        continue;
                    }
                    /* IL_3F: ldstr System.ArgumentOutOfRangeException */
                    /* IL_44: call Exception GetException(System.String) */
                    /* IL_49: throw  */
                    throw asm0.x6000013(CILJS.new_string("System.ArgumentOutOfRangeException"));
                    case 0x4A:
                    /* IL_4A: ldtoken T */
                    /* IL_4F: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                    /* IL_54: call IEqualityComparer GetDefaultEqualityComparer(System.Type) */
                    /* IL_59: stloc.0  */
                    loc0 = asm1.GetDefaultEqualityComparer(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).ctor)();
                    /* IL_5A: ldarg.2  */
                    /* IL_5B: stloc.3  */
                    loc3 = arg2;
                    /* IL_5C: br.s IL_87 */
                    __pos__ = 0x87;
                    continue;
                    case 0x5E:
                    case 0x82:
                    case 0x87:
                    in_block_1 = true;
                    
                    if (__pos__ > 0x96){
                        in_block_1 = false;
                    }
                    
                    if (__pos__ < 0x5E){
                        __pos__ = 0x5E;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x5E:
                            /* IL_5E: nop  */
                            
                            /* IL_5F: ldloc.0  */
                            /* IL_60: ldarg.0  */
                            /* IL_61: ldloc.3  */
                            /* IL_62: ldelem T */
                            /* IL_67: box T */
                            /* IL_6C: ldarg.1  */
                            /* IL_6D: box T */
                            /* IL_72: callvirt Boolean Equals(System.Object, System.Object) */
                            /* IL_77: stloc.s 4 */
                            loc4 = (((loc0.ifacemap)[t1].x60001b6)())(CILJS.convert_box_to_pointer_as_needed(loc0),CILJS.box((arg0.jsarr)[loc3],t0),CILJS.box(arg1,t0));
                            /* IL_79: ldloc.s 4 */
                            /* IL_7B: brfalse.s IL_82 */
                            
                            if ((!(loc4))){
                                __pos__ = 0x82;
                                continue;
                            }
                            /* IL_7D: ldloc.3  */
                            /* IL_7E: stloc.s 5 */
                            loc5 = loc3;
                            /* IL_80: br.s IL_9D */
                            __pos__ = 0x9D;
                            continue;
                            case 0x82:
                            /* IL_82: nop  */
                            
                            /* IL_83: ldloc.3  */
                            /* IL_84: ldc.i4.1  */
                            /* IL_85: sub  */
                            /* IL_86: stloc.3  */
                            loc3 = (loc3 - (1|0)) | (0|0);
                            case 0x87:
                            /* IL_87: ldloc.3  */
                            /* IL_88: ldarg.2  */
                            /* IL_89: ldarg.3  */
                            /* IL_8A: sub  */
                            /* IL_8B: ldc.i4.1  */
                            /* IL_8C: add  */
                            /* IL_8E: clt  */
                            /* IL_8F: ldc.i4.0  */
                            /* IL_91: ceq  */
                            /* IL_92: stloc.s 6 */
                            loc6 = ((((loc3 < ((((arg2 - arg3) | (0|0)) + (1|0)) | (0|0))) ? 1 : 0) === (0|0)) ? 1 : 0);
                            /* IL_94: ldloc.s 6 */
                            /* IL_96: brtrue.s IL_5E */
                            
                            if (loc6){
                                __pos__ = 0x5E;
                                continue;
                            }
                        }
                        break;
                    }
                    /* IL_98: ldc.i4.m1  */
                    /* IL_99: stloc.s 5 */
                    loc5 = (-1|0);
                    case 0x9D:
                    /* IL_9D: ldloc.s 5 */
                    /* IL_9F: ret  */
                    return loc5;
                }
            }
        };
    };
    /* static System.Void Array.Sort<T>(T[],Object)*/
    asm.x6000018 =  function (T) {
            return function Sort(array, comparison) {
                function swap(items, firstIndex, secondIndex){
                    var temp = items[firstIndex];
                    items[firstIndex] = items[secondIndex];
                    items[secondIndex] = temp;
                }

                function partition(items, left, right) {

                    var pivot   = items[Math.floor((right + left) / 2)],
                        i       = left,
                        j       = right;

                    while (i <= j) {
                        
                        while (comparison(items[i], pivot) < 0)
                            i++;
                        while (comparison(items[j], pivot) > 0)
                            j--;

                        if (i <= j) {
                            swap(items, i, j);
                            i++;
                            j--;
                        }
                    }

                    return i;
                }

                function quickSort(items, left, right) {
                    var index;

                    if (items.length > 1) {
                        index = partition(items, left, right);

                        if (left < index - 1)
                            quickSort(items, left, index - 1);

                        if (index < right)
                            quickSort(items, index, right);
                    }

                    return items;
                }

                quickSort(array.jsarr, 0, array.jsarr.length - 1);
            } }
            ;;
    /* static System.Void Array.Sort<T>(T[],Int32,Int32)*/
    asm.x6000019_init = function (T)
    {
        return function (arg0, arg1, arg2)
        {
            ((asm0)["System.Collections.Generic.IComparer`1"](T).init)();
            ((asm0)["System.InvalidOperationException"]().init)();
        };
    };;
    asm.x6000019 = function (T)
    {
        return function (arg0, arg1, arg2)
        {
            (asm.x6000019_init(T))(arg0,arg1,arg2);
            return (asm.x6000019_(T))(arg0,arg1,arg2);
        };
    };;
    asm.x6000019_ = function (T)
    {
        return function Sort(arg0, arg1, arg2)
        {
            var t0;
            var t1;
            var t2;
            var in_block_0;
            var __pos__;
            var in_block_1;
            var loc0;
            var __error_handled_1__;
            var loc1;
            t0 = T;
            t1 = (asm0)["System.Collections.Generic.IComparer`1"](t0);
            t2 = (asm0)["System.InvalidOperationException"]();
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    
                    try {
                        in_block_1 = true;
                        
                        if (__pos__ < 0x1){
                            __pos__ = 0x1;
                        }
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x1:
                                /* IL_01: nop  */
                                
                                /* IL_02: ldtoken T */
                                /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                                /* IL_0C: call IComparer GetComparer(System.Type) */
                                /* IL_11: call IComparer`1 UnsafeCast[System.Collections.Generic.IComparer`1[T]](System.Object) */
                                /* IL_16: stloc.0  */
                                loc0 = asm1.GetDefaultComparer(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).ctor)();
                                /* IL_17: ldarg.0  */
                                /* IL_18: ldc.i4.0  */
                                /* IL_19: ldarg.2  */
                                /* IL_1A: ldloc.0  */
                                /* IL_1B: call Void Sort[T](T[], System.Int32, System.Int32, System.Collections.Generic.IComparer`1[T]) */
                                (asm0.x600001c(T))(arg0,(0|0),arg2,loc0);
                                /* IL_20: nop  */
                                
                                /* IL_21: nop  */
                                
                                /* IL_22: leave.s IL_32 */
                                in_block_1 = false;
                                __pos__ = 0x32;
                                break;
                            }
                        }
                    }
                    
                    catch (__error__) {
                        __error_handled_1__ = false;
                        
                        if ((!(__error_handled_1__)) && (__error__ instanceof (asm0)["System.Exception"]())){
                            in_block_1 = true;
                            
                            if (__pos__ < 0x24){
                                __pos__ = 0x24;
                            }
                            
                            while (in_block_1){
                                
                                switch (__pos__){
                                    case 0x24:
                                    st_08 = __error__;
                                    __error_handled_1__ = true;
                                    /* IL_24: stloc.1  */
                                    loc1 = st_08;
                                    /* IL_25: nop  */
                                    
                                    /* IL_26: ldstr Failed to sort the array.  */
                                    /* IL_2B: ldloc.1  */
                                    /* IL_2C: newobj Void .ctor(System.String, System.Exception) */
                                    /* IL_31: throw  */
                                    throw CILJS.newobj(t2,asm0.x60000c6,[null, CILJS.new_string("Failed to sort the array. "), loc1]);
                                }
                            }
                        }
                        
                        if ((!(__error_handled_1__))){
                            throw __error__;
                        }
                    }
                    continue;
                    case 0x32:
                    /* IL_32: ret  */
                    return ;
                }
            }
        };
    };
    /* static System.Void Array.Sort<T>(T[],IComparer`1)*/
    asm.x600001a = function (T)
    {
        return function Sort(arg0, arg1)
        {
            var t0;
            var in_block_0;
            var __pos__;
            t0 = T;
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.0  */
                    /* IL_02: ldc.i4.0  */
                    /* IL_03: ldarg.0  */
                    /* IL_04: ldlen  */
                    /* IL_05: conv.i4  */
                    /* IL_06: ldarg.1  */
                    /* IL_07: call Void Sort[T](T[], System.Int32, System.Int32, System.Collections.Generic.IComparer`1[T]) */
                    (asm0.x600001c(T))(arg0,(0|0),arg0.jsarr.length | (0|0),arg1);
                    /* IL_0C: nop  */
                    
                    /* IL_0D: ret  */
                    return ;
                }
            }
        };
    };;
    /* static System.Void Array.SortImpl<T>(T[],Int32,Comparison`1)*/
    asm.x600001b = function (T)
    {
        return function SortImpl(arg0, arg1, arg2)
        {
            var t0;
            var in_block_0;
            var __pos__;
            var loc0;
            var loc1;
            t0 = T;
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.0  */
                    /* IL_02: ldlen  */
                    /* IL_03: conv.i4  */
                    /* IL_04: stloc.0  */
                    loc0 = arg0.jsarr.length | (0|0);
                    /* IL_05: ldarg.1  */
                    /* IL_06: ldloc.0  */
                    /* IL_08: clt  */
                    /* IL_09: stloc.1  */
                    loc1 = ((arg1 < loc0) ? 1 : 0);
                    /* IL_0A: ldloc.1  */
                    /* IL_0B: brfalse.s IL_1C */
                    
                    if ((!(loc1))){
                        __pos__ = 0x1C;
                        continue;
                    }
                    /* IL_0D: nop  */
                    
                    /* IL_0E: ldarg.0  */
                    /* IL_0F: ldarg.1  */
                    /* IL_10: ldarg.0  */
                    /* IL_11: ldlen  */
                    /* IL_12: conv.i4  */
                    /* IL_13: ldarg.1  */
                    /* IL_14: sub  */
                    /* IL_15: call Void Splice(System.Object, System.Int32, System.Int32) */
                    asm0.x600001e(arg0,arg1,((arg0.jsarr.length | (0|0)) - arg1) | (0|0));
                    /* IL_1A: nop  */
                    
                    /* IL_1B: nop  */
                    
                    case 0x1C:
                    /* IL_1C: ldarg.0  */
                    /* IL_1D: ldarg.2  */
                    /* IL_1E: call Object GetJsFunction(System.Delegate) */
                    /* IL_23: call Void Sort[T](T[], System.Object) */
                    (asm0.x6000018(T))(arg0,asm0.x6000066(arg2));
                    /* IL_28: nop  */
                    
                    /* IL_29: ret  */
                    return ;
                }
            }
        };
    };;
    /* static System.Void Array.Sort<T>(T[],Int32,Int32,IComparer`1)*/
    asm.x600001c_init = function (T)
    {
        return function (arg0, arg1, arg2, arg3)
        {
            ((asm0)["System.Array+<>c__DisplayClass23_0`1"](T).init)();
            ((asm0)["System.NotImplementedException"]().init)();
            ((asm0)["System.Comparison`1"](T).init)();
        };
    };;
    asm.x600001c = function (T)
    {
        return function (arg0, arg1, arg2, arg3)
        {
            (asm.x600001c_init(T))(arg0,arg1,arg2,arg3);
            return (asm.x600001c_(T))(arg0,arg1,arg2,arg3);
        };
    };;
    asm.x600001c_ = function (T)
    {
        return function Sort(arg0, arg1, arg2, arg3)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var in_block_0;
            var __pos__;
            var loc0;
            var loc1;
            t0 = T;
            t1 = (asm0)["System.Array+<>c__DisplayClass23_0`1"](t0);
            t2 = (asm0)["System.NotImplementedException"]();
            t3 = (asm0)["System.Comparison`1"](t0);
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: newobj Void .ctor() */
                    /* IL_05: stloc.0  */
                    loc0 = CILJS.newobj(t1,asm0.x60001f0,[null]);
                    /* IL_06: ldloc.0  */
                    /* IL_07: ldarg.3  */
                    /* IL_08: stfld IKVM.Reflection.GenericFieldInstance */
                    loc0.comparer = arg3;
                    /* IL_0D: nop  */
                    
                    /* IL_0E: ldarg.1  */
                    /* IL_0F: ldc.i4.0  */
                    /* IL_11: cgt.un  */
                    /* IL_12: stloc.1  */
                    loc1 = ((CILJS.unsigned_value(arg1) > CILJS.unsigned_value((0|0))) ? 1 : 0);
                    /* IL_13: ldloc.1  */
                    /* IL_14: brfalse.s IL_1C */
                    
                    if ((!(loc1))){
                        __pos__ = 0x1C;
                        continue;
                    }
                    /* IL_16: newobj Void .ctor() */
                    /* IL_1B: throw  */
                    throw CILJS.newobj(t2,asm0.x60000d8,[null]);
                    case 0x1C:
                    /* IL_1C: ldarg.0  */
                    /* IL_1D: ldarg.2  */
                    /* IL_1E: ldloc.0  */
                    /* IL_20: ldftn Int32 <Sort>b__0(T, T) */
                    /* IL_25: newobj Void .ctor(System.Object, System.IntPtr) */
                    /* IL_2A: call Void SortImpl[T](T[], System.Int32, System.Comparison`1[T]) */
                    (asm0.x600001b(T))(arg0,arg2,CILJS.newobj(t3,asm0.x6000055,[null, loc0, asm0.x60001f1]));
                    /* IL_2F: nop  */
                    
                    /* IL_30: ret  */
                    return ;
                }
            }
        };
    };
    /* static System.Void Array.Combine(Object,Object)*/
    asm.x600001d = 
            function (a, b) {
                a.jsarr = a.jsarr.concat(b);
            }
            ;;
    /* static System.Void Array.Splice(Object,Int32,Int32)*/
    asm.x600001e = 
            function (array, index, howMany) {
                    array.jsarr.splice(index, howMany);
            }
            ;;
    /* static System.Void Array.Reverse(Array,Int32,Int32)*/
    asm.x6000020 = function Reverse(arg0, arg1, arg2)
    {
        var st_04;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var in_block_1;
        var loc3;
        var loc4;
        var loc5;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: brtrue.s IL_0F */
                
                if (arg1){
                    __pos__ = 0xF;
                    continue;
                }
                /* IL_04: ldarg.2  */
                /* IL_05: ldarg.0  */
                /* IL_06: callvirt Int32 get_Length() */
                /* IL_0C: clt  */
                st_04 = ((arg2 < asm0.x6000009(arg0)) ? 1 : 0);
                /* IL_0D: br.s IL_10 */
                __pos__ = 0x10;
                continue;
                case 0xF:
                /* IL_0F: ldc.i4.1  */
                st_04 = (1|0);
                case 0x10:
                /* IL_10: stloc.0  */
                loc0 = st_04;
                /* IL_11: ldloc.0  */
                /* IL_12: brfalse.s IL_5A */
                
                if ((!(loc0))){
                    __pos__ = 0x5A;
                    continue;
                }
                /* IL_14: nop  */
                
                /* IL_15: ldarg.1  */
                /* IL_16: stloc.1  */
                loc1 = arg1;
                /* IL_17: ldarg.1  */
                /* IL_18: ldarg.2  */
                /* IL_19: add  */
                /* IL_1A: ldc.i4.1  */
                /* IL_1B: sub  */
                /* IL_1C: stloc.2  */
                loc2 = (((arg1 + arg2) | (0|0)) - (1|0)) | (0|0);
                /* IL_1D: br.s IL_4D */
                __pos__ = 0x4D;
                continue;
                case 0x1F:
                case 0x4D:
                in_block_1 = true;
                
                if (__pos__ > 0x55){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x1F){
                    __pos__ = 0x1F;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x1F:
                        /* IL_1F: nop  */
                        
                        /* IL_20: ldarg.0  */
                        /* IL_21: ldloc.1  */
                        /* IL_22: callvirt Object GetValue(System.Int32) */
                        /* IL_27: stloc.3  */
                        loc3 = asm0.x600000e(arg0,loc1);
                        /* IL_28: ldarg.0  */
                        /* IL_29: ldloc.2  */
                        /* IL_2A: callvirt Object GetValue(System.Int32) */
                        /* IL_2F: stloc.s 4 */
                        loc4 = asm0.x600000e(arg0,loc2);
                        /* IL_31: ldarg.0  */
                        /* IL_32: ldloc.s 4 */
                        /* IL_34: ldloc.1  */
                        /* IL_35: callvirt Void SetValue(System.Object, System.Int32) */
                        asm0.x600002d(arg0,loc4,loc1);
                        /* IL_3A: nop  */
                        
                        /* IL_3B: ldarg.0  */
                        /* IL_3C: ldloc.3  */
                        /* IL_3D: ldloc.2  */
                        /* IL_3E: callvirt Void SetValue(System.Object, System.Int32) */
                        asm0.x600002d(arg0,loc3,loc2);
                        /* IL_43: nop  */
                        
                        /* IL_44: ldloc.1  */
                        /* IL_45: ldc.i4.1  */
                        /* IL_46: add  */
                        /* IL_47: stloc.1  */
                        loc1 = (loc1 + (1|0)) | (0|0);
                        /* IL_48: ldloc.2  */
                        /* IL_49: ldc.i4.1  */
                        /* IL_4A: sub  */
                        /* IL_4B: stloc.2  */
                        loc2 = (loc2 - (1|0)) | (0|0);
                        /* IL_4C: nop  */
                        
                        case 0x4D:
                        /* IL_4D: ldloc.1  */
                        /* IL_4E: ldloc.2  */
                        /* IL_50: clt  */
                        /* IL_51: stloc.s 5 */
                        loc5 = ((loc1 < loc2) ? 1 : 0);
                        /* IL_53: ldloc.s 5 */
                        /* IL_55: brtrue.s IL_1F */
                        
                        if (loc5){
                            __pos__ = 0x1F;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_57: nop  */
                
                /* IL_58: br.s IL_63 */
                __pos__ = 0x63;
                continue;
                case 0x5A:
                /* IL_5A: nop  */
                
                /* IL_5B: ldarg.0  */
                /* IL_5C: call Void Reverse(System.Array) */
                (Array.prototype.reverse.apply(arg0.jsarr));
                /* IL_61: nop  */
                
                /* IL_62: nop  */
                
                case 0x63:
                /* IL_63: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Array.Copy<T>(T[],T[],Int32)*/
    asm.x6000024 = function (T)
    {
        return function Copy(arg0, arg1, arg2)
        {
            var in_block_0;
            var __pos__;
            var loc0;
            var in_block_1;
            var loc1;
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldc.i4.0  */
                    /* IL_02: stloc.0  */
                    loc0 = (0|0);
                    /* IL_03: br.s IL_19 */
                    __pos__ = 0x19;
                    continue;
                    case 0x5:
                    case 0x19:
                    in_block_1 = true;
                    
                    if (__pos__ > 0x1F){
                        in_block_1 = false;
                    }
                    
                    if (__pos__ < 0x5){
                        __pos__ = 0x5;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x5:
                            /* IL_05: nop  */
                            
                            /* IL_06: ldarg.1  */
                            /* IL_07: ldloc.0  */
                            /* IL_08: ldarg.0  */
                            /* IL_09: ldloc.0  */
                            /* IL_0A: ldelem T */
                            /* IL_0F: stelem T */
                            (arg1.jsarr)[loc0] = (arg0.jsarr)[loc0];
                            /* IL_14: nop  */
                            
                            /* IL_15: ldloc.0  */
                            /* IL_16: ldc.i4.1  */
                            /* IL_17: add  */
                            /* IL_18: stloc.0  */
                            loc0 = (loc0 + (1|0)) | (0|0);
                            case 0x19:
                            /* IL_19: ldloc.0  */
                            /* IL_1A: ldarg.2  */
                            /* IL_1C: clt  */
                            /* IL_1D: stloc.1  */
                            loc1 = ((loc0 < arg2) ? 1 : 0);
                            /* IL_1E: ldloc.1  */
                            /* IL_1F: brtrue.s IL_05 */
                            
                            if (loc1){
                                __pos__ = 0x5;
                                continue;
                            }
                        }
                        break;
                    }
                    /* IL_21: ret  */
                    return ;
                }
            }
        };
    };;
    /* System.Int32 Array.GetLowerBound(Int32)*/
    asm.x6000025 = function GetLowerBound(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.0  */
                /* IL_02: stloc.0  */
                loc0 = (0|0);
                /* IL_05: ldloc.0  */
                /* IL_06: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Array.get_Rank()*/
    asm.x6000026 = function get_Rank(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.1  */
                /* IL_02: stloc.0  */
                loc0 = (1|0);
                /* IL_05: ldloc.0  */
                /* IL_06: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Void Array.Resize<T>(T[]&,Int32)*/
    asm.x6000027 = function (T)
    {
        return function Resize(arg0, arg1)
        {
            var t0;
            var t1;
            var in_block_0;
            var __pos__;
            var loc4;
            var loc5;
            var loc0;
            var loc1;
            var loc6;
            var loc2;
            var loc3;
            var loc7;
            var in_block_1;
            var loc8;
            t0 = (asm0)["System.Exception"]();
            t1 = T;
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.1  */
                    /* IL_02: ldc.i4.0  */
                    /* IL_04: clt  */
                    /* IL_05: stloc.s 4 */
                    loc4 = ((arg1 < (0|0)) ? 1 : 0);
                    /* IL_07: ldloc.s 4 */
                    /* IL_09: brfalse.s IL_16 */
                    
                    if ((!(loc4))){
                        __pos__ = 0x16;
                        continue;
                    }
                    /* IL_0B: ldstr Argument out of range */
                    /* IL_10: newobj Void .ctor(System.String) */
                    /* IL_15: throw  */
                    throw CILJS.newobj(t0,asm0.x6000077,[null, CILJS.new_string("Argument out of range")]);
                    case 0x16:
                    /* IL_16: ldarg.0  */
                    /* IL_17: ldind.ref  */
                    /* IL_18: ldnull  */
                    /* IL_1A: ceq  */
                    /* IL_1B: stloc.s 5 */
                    loc5 = ((arg0.r() === null) ? 1 : 0);
                    /* IL_1D: ldloc.s 5 */
                    /* IL_1F: brfalse.s IL_2C */
                    
                    if ((!(loc5))){
                        __pos__ = 0x2C;
                        continue;
                    }
                    /* IL_21: nop  */
                    
                    /* IL_22: ldarg.0  */
                    /* IL_23: ldarg.1  */
                    /* IL_24: newarr T */
                    /* IL_29: stind.ref  */
                    arg0.w(CILJS.new_array(t1,arg1));
                    /* IL_2A: br.s IL_78 */
                    __pos__ = 0x78;
                    continue;
                    case 0x2C:
                    /* IL_2C: ldarg.0  */
                    /* IL_2D: ldind.ref  */
                    /* IL_2E: stloc.0  */
                    loc0 = arg0.r();
                    /* IL_2F: ldloc.0  */
                    /* IL_30: ldlen  */
                    /* IL_31: conv.i4  */
                    /* IL_32: stloc.1  */
                    loc1 = loc0.jsarr.length | (0|0);
                    /* IL_33: ldloc.1  */
                    /* IL_34: ldarg.1  */
                    /* IL_36: ceq  */
                    /* IL_37: stloc.s 6 */
                    loc6 = ((loc1 === arg1) ? 1 : 0);
                    /* IL_39: ldloc.s 6 */
                    /* IL_3B: brfalse.s IL_3F */
                    
                    if ((!(loc6))){
                        __pos__ = 0x3F;
                        continue;
                    }
                    /* IL_3D: br.s IL_78 */
                    __pos__ = 0x78;
                    continue;
                    case 0x3F:
                    /* IL_3F: ldarg.1  */
                    /* IL_40: newarr T */
                    /* IL_45: stloc.2  */
                    loc2 = CILJS.new_array(t1,arg1);
                    /* IL_46: ldarg.1  */
                    /* IL_47: ldloc.1  */
                    /* IL_48: call Int32 Min(System.Int32, System.Int32) */
                    /* IL_4D: stloc.3  */
                    loc3 = Math.min(arg1, loc1);
                    /* IL_4E: ldc.i4.0  */
                    /* IL_4F: stloc.s 7 */
                    loc7 = (0|0);
                    /* IL_51: br.s IL_6A */
                    __pos__ = 0x6A;
                    continue;
                    case 0x53:
                    case 0x6A:
                    in_block_1 = true;
                    
                    if (__pos__ > 0x73){
                        in_block_1 = false;
                    }
                    
                    if (__pos__ < 0x53){
                        __pos__ = 0x53;
                    }
                    
                    while (in_block_1){
                        
                        switch (__pos__){
                            case 0x53:
                            /* IL_53: ldloc.2  */
                            /* IL_54: ldloc.s 7 */
                            /* IL_56: ldloc.0  */
                            /* IL_57: ldloc.s 7 */
                            /* IL_59: call T UnsafeLoad[T](T[], System.Int32) */
                            /* IL_5E: call T UnsafeStore[T](T[], System.Int32, T) */
                            /* IL_63: pop  */
                            (loc2.jsarr[loc7] = (loc0.jsarr[loc7]));
                            /* IL_64: ldloc.s 7 */
                            /* IL_66: ldc.i4.1  */
                            /* IL_67: add  */
                            /* IL_68: stloc.s 7 */
                            loc7 = (loc7 + (1|0)) | (0|0);
                            case 0x6A:
                            /* IL_6A: ldloc.s 7 */
                            /* IL_6C: ldloc.3  */
                            /* IL_6E: clt  */
                            /* IL_6F: stloc.s 8 */
                            loc8 = ((loc7 < loc3) ? 1 : 0);
                            /* IL_71: ldloc.s 8 */
                            /* IL_73: brtrue.s IL_53 */
                            
                            if (loc8){
                                __pos__ = 0x53;
                                continue;
                            }
                        }
                        break;
                    }
                    /* IL_75: ldarg.0  */
                    /* IL_76: ldloc.2  */
                    /* IL_77: stind.ref  */
                    arg0.w(loc2);
                    case 0x78:
                    /* IL_78: ret  */
                    return ;
                }
            }
        };
    };;
    /* static System.Int32 Array.BinarySearch<T>(T[],Int32,Int32,T)*/
    asm.x600002a = function (T)
    {
        return function BinarySearch(arg0, arg1, arg2, arg3)
        {
            var t0;
            var in_block_0;
            var __pos__;
            var loc0;
            t0 = T;
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.0  */
                    /* IL_02: ldarg.1  */
                    /* IL_03: ldarg.2  */
                    /* IL_04: ldarg.3  */
                    /* IL_05: ldnull  */
                    /* IL_06: call Int32 BinarySearch[T](T[], System.Int32, System.Int32, T, System.Collections.Generic.IComparer`1[T]) */
                    /* IL_0B: stloc.0  */
                    loc0 = (asm0.x600002b(T))(arg0,arg1,arg2,arg3,null);
                    /* IL_0E: ldloc.0  */
                    /* IL_0F: ret  */
                    return loc0;
                }
            }
        };
    };;
    /* static System.Int32 Array.BinarySearch<T>(T[],Int32,Int32,T,IComparer`1)*/
    asm.x600002b_init = function (T)
    {
        return function (arg0, arg1, arg2, arg3, arg4)
        {
            ((asm0)["System.Collections.Generic.IComparer`1"](T).init)();
        };
    };;
    asm.x600002b = function (T)
    {
        return function (arg0, arg1, arg2, arg3, arg4)
        {
            (asm.x600002b_init(T))(arg0,arg1,arg2,arg3,arg4);
            return (asm.x600002b_(T))(arg0,arg1,arg2,arg3,arg4);
        };
    };;
    asm.x600002b_ = function (T)
    {
        return function BinarySearch(arg0, arg1, arg2, arg3, arg4)
        {
            var t0;
            var t1;
            var t2;
            var in_block_0;
            var __pos__;
            var loc3;
            var loc4;
            var loc5;
            var loc6;
            var loc7;
            var loc0;
            var loc1;
            var loc2;
            var in_block_1;
            var loc8;
            var loc9;
            var loc10;
            var loc11;
            var loc12;
            var __error_handled_1__;
            var loc13;
            t0 = (asm0)["System.Exception"]();
            t1 = T;
            t2 = (asm0)["System.Collections.Generic.IComparer`1"](t1);
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.0  */
                    /* IL_02: ldnull  */
                    /* IL_04: ceq  */
                    /* IL_05: stloc.3  */
                    loc3 = ((arg0 === null) ? 1 : 0);
                    /* IL_06: ldloc.3  */
                    /* IL_07: brfalse.s IL_14 */
                    
                    if ((!(loc3))){
                        __pos__ = 0x14;
                        continue;
                    }
                    /* IL_09: ldstr array */
                    /* IL_0E: newobj Void .ctor(System.String) */
                    /* IL_13: throw  */
                    throw CILJS.newobj(t0,asm0.x6000077,[null, CILJS.new_string("array")]);
                    case 0x14:
                    /* IL_14: ldarg.1  */
                    /* IL_15: ldc.i4.0  */
                    /* IL_17: clt  */
                    /* IL_18: stloc.s 4 */
                    loc4 = ((arg1 < (0|0)) ? 1 : 0);
                    /* IL_1A: ldloc.s 4 */
                    /* IL_1C: brfalse.s IL_29 */
                    
                    if ((!(loc4))){
                        __pos__ = 0x29;
                        continue;
                    }
                    /* IL_1E: ldstr index is less than the lower bound of array. */
                    /* IL_23: newobj Void .ctor(System.String) */
                    /* IL_28: throw  */
                    throw CILJS.newobj(t0,asm0.x6000077,[null, CILJS.new_string("index is less than the lower bound of array.")]);
                    case 0x29:
                    /* IL_29: ldarg.2  */
                    /* IL_2A: ldc.i4.0  */
                    /* IL_2C: clt  */
                    /* IL_2D: stloc.s 5 */
                    loc5 = ((arg2 < (0|0)) ? 1 : 0);
                    /* IL_2F: ldloc.s 5 */
                    /* IL_31: brfalse.s IL_3E */
                    
                    if ((!(loc5))){
                        __pos__ = 0x3E;
                        continue;
                    }
                    /* IL_33: ldstr Value has to be >= 0. */
                    /* IL_38: newobj Void .ctor(System.String) */
                    /* IL_3D: throw  */
                    throw CILJS.newobj(t0,asm0.x6000077,[null, CILJS.new_string("Value has to be >= 0.")]);
                    case 0x3E:
                    /* IL_3E: ldarg.1  */
                    /* IL_3F: ldarg.0  */
                    /* IL_40: ldlen  */
                    /* IL_41: conv.i4  */
                    /* IL_42: ldarg.2  */
                    /* IL_43: sub  */
                    /* IL_45: cgt  */
                    /* IL_46: stloc.s 6 */
                    loc6 = ((arg1 > (((arg0.jsarr.length | (0|0)) - arg2) | (0|0))) ? 1 : 0);
                    /* IL_48: ldloc.s 6 */
                    /* IL_4A: brfalse.s IL_57 */
                    
                    if ((!(loc6))){
                        __pos__ = 0x57;
                        continue;
                    }
                    /* IL_4C: ldstr index and length do not specify a valid range in array. */
                    /* IL_51: newobj Void .ctor(System.String) */
                    /* IL_56: throw  */
                    throw CILJS.newobj(t0,asm0.x6000077,[null, CILJS.new_string("index and length do not specify a valid range in array.")]);
                    case 0x57:
                    /* IL_57: ldarg.s 4 */
                    /* IL_59: ldnull  */
                    /* IL_5B: ceq  */
                    /* IL_5C: stloc.s 7 */
                    loc7 = ((arg4 === null) ? 1 : 0);
                    /* IL_5E: ldloc.s 7 */
                    /* IL_60: brfalse.s IL_78 */
                    
                    if ((!(loc7))){
                        __pos__ = 0x78;
                        continue;
                    }
                    /* IL_62: ldtoken T */
                    /* IL_67: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                    /* IL_6C: call IComparer GetComparer(System.Type) */
                    /* IL_71: call IComparer`1 UnsafeCast[System.Collections.Generic.IComparer`1[T]](System.Object) */
                    /* IL_76: starg.s 4 */
                    arg4 = asm1.GetDefaultComparer(asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).ctor)();
                    case 0x78:
                    /* IL_78: ldarg.1  */
                    /* IL_79: stloc.0  */
                    loc0 = arg1;
                    /* IL_7A: ldarg.1  */
                    /* IL_7B: ldarg.2  */
                    /* IL_7C: add  */
                    /* IL_7D: ldc.i4.1  */
                    /* IL_7E: sub  */
                    /* IL_7F: stloc.1  */
                    loc1 = (((arg1 + arg2) | (0|0)) - (1|0)) | (0|0);
                    /* IL_80: ldc.i4.0  */
                    /* IL_81: stloc.2  */
                    loc2 = (0|0);
                    
                    try {
                        in_block_1 = true;
                        
                        if (__pos__ < 0x82){
                            __pos__ = 0x82;
                        }
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x82:
                                /* IL_82: nop  */
                                
                                /* IL_83: br.s IL_C7 */
                                __pos__ = 0xC7;
                                continue;
                                case 0x85:
                                /* IL_85: nop  */
                                
                                /* IL_86: ldloc.0  */
                                /* IL_87: ldloc.1  */
                                /* IL_88: ldloc.0  */
                                /* IL_89: sub  */
                                /* IL_8A: ldc.i4.2  */
                                /* IL_8B: div  */
                                /* IL_8C: add  */
                                /* IL_8D: stloc.s 8 */
                                loc8 = (loc0 + ((((loc1 - loc0) | (0|0)) / (2|0)) | (0|0))) | (0|0);
                                /* IL_8F: ldarg.s 4 */
                                /* IL_91: ldarg.0  */
                                /* IL_92: ldloc.s 8 */
                                /* IL_94: ldelem T */
                                /* IL_99: ldarg.3  */
                                /* IL_9A: callvirt Int32 Compare(T, T) */
                                /* IL_9F: stloc.2  */
                                loc2 = ((((arg4.ifacemap)[t2])[t1].x60001bf)())(CILJS.convert_box_to_pointer_as_needed(arg4),(arg0.jsarr)[loc8],arg3);
                                /* IL_A0: ldloc.2  */
                                /* IL_A1: ldc.i4.0  */
                                /* IL_A3: ceq  */
                                /* IL_A4: stloc.s 9 */
                                loc9 = ((loc2 === (0|0)) ? 1 : 0);
                                /* IL_A6: ldloc.s 9 */
                                /* IL_A8: brfalse.s IL_B0 */
                                
                                if ((!(loc9))){
                                    __pos__ = 0xB0;
                                    continue;
                                }
                                /* IL_AA: ldloc.s 8 */
                                /* IL_AC: stloc.s 10 */
                                loc10 = loc8;
                                /* IL_AE: leave.s IL_ED */
                                in_block_1 = false;
                                __pos__ = 0xED;
                                break;
                                case 0xB0:
                                /* IL_B0: ldloc.2  */
                                /* IL_B1: ldc.i4.0  */
                                /* IL_B3: cgt  */
                                /* IL_B4: stloc.s 11 */
                                loc11 = ((loc2 > (0|0)) ? 1 : 0);
                                /* IL_B6: ldloc.s 11 */
                                /* IL_B8: brfalse.s IL_C1 */
                                
                                if ((!(loc11))){
                                    __pos__ = 0xC1;
                                    continue;
                                }
                                /* IL_BA: ldloc.s 8 */
                                /* IL_BC: ldc.i4.1  */
                                /* IL_BD: sub  */
                                /* IL_BE: stloc.1  */
                                loc1 = (loc8 - (1|0)) | (0|0);
                                /* IL_BF: br.s IL_C6 */
                                __pos__ = 0xC6;
                                continue;
                                case 0xC1:
                                /* IL_C1: ldloc.s 8 */
                                /* IL_C3: ldc.i4.1  */
                                /* IL_C4: add  */
                                /* IL_C5: stloc.0  */
                                loc0 = (loc8 + (1|0)) | (0|0);
                                case 0xC6:
                                /* IL_C6: nop  */
                                
                                case 0xC7:
                                /* IL_C7: ldloc.0  */
                                /* IL_C8: ldloc.1  */
                                /* IL_CA: cgt  */
                                /* IL_CB: ldc.i4.0  */
                                /* IL_CD: ceq  */
                                /* IL_CE: stloc.s 12 */
                                loc12 = ((((loc0 > loc1) ? 1 : 0) === (0|0)) ? 1 : 0);
                                /* IL_D0: ldloc.s 12 */
                                /* IL_D2: brtrue.s IL_85 */
                                
                                if (loc12){
                                    __pos__ = 0x85;
                                    continue;
                                }
                                /* IL_D4: nop  */
                                
                                /* IL_D5: leave.s IL_E7 */
                                in_block_1 = false;
                                __pos__ = 0xE7;
                                break;
                            }
                        }
                    }
                    
                    catch (__error__) {
                        __error_handled_1__ = false;
                        
                        if ((!(__error_handled_1__)) && (__error__ instanceof (asm0)["System.Exception"]())){
                            in_block_1 = true;
                            
                            if (__pos__ < 0xD7){
                                __pos__ = 0xD7;
                            }
                            
                            while (in_block_1){
                                
                                switch (__pos__){
                                    case 0xD7:
                                    st_4D = __error__;
                                    __error_handled_1__ = true;
                                    /* IL_D7: stloc.s 13 */
                                    loc13 = st_4D;
                                    /* IL_D9: nop  */
                                    
                                    /* IL_DA: ldstr Comparer threw an exception. */
                                    /* IL_DF: ldloc.s 13 */
                                    /* IL_E1: newobj Void .ctor(System.String, System.Exception) */
                                    /* IL_E6: throw  */
                                    throw CILJS.newobj(t0,asm0.x6000078,[null, CILJS.new_string("Comparer threw an exception."), loc13]);
                                }
                            }
                        }
                        
                        if ((!(__error_handled_1__))){
                            throw __error__;
                        }
                    }
                    continue;
                    case 0xE7:
                    /* IL_E7: ldloc.0  */
                    /* IL_E8: not  */
                    /* IL_E9: stloc.s 10 */
                    loc10 = (~(loc0));
                    case 0xED:
                    /* IL_ED: ldloc.s 10 */
                    /* IL_EF: ret  */
                    return loc10;
                }
            }
        };
    };
    /* static System.Array Array.CreateInstance(Type,Int32)*/
    asm.x600002c = function (elementType, length) { return CILJS.new_array(elementType.ctor, length); };;
    /* System.Void Array.SetValue(Object,Int32)*/
    asm.x600002d = CILJS.array_set_value;;
    /*  Array..ctor()*/
    asm.x600002e = function _ctor(arg0)
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
    /* System.Collections.Generic.IEnumerator`1[T] Array`1.GetEnumerator()*/
    asm.x6000030_init = function (arg0)
    {
        ((asm0)["System.Array`1+ArrayEnumerator"](((arg0.constructor.GenericArguments)["asm0.t2000006"])[0]).init)();
    };;
    asm.x6000030 = function (arg0)
    {
        asm.x6000030_init(arg0);
        return asm.x6000030_(arg0);
    };;
    asm.x6000030_ = function GetEnumerator(arg0)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = ((arg0.constructor.GenericArguments)["asm0.t2000006"])[0];
        t1 = (asm0)["System.Array`1+ArrayEnumerator"](t0);
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: newobj Void .ctor(System.Array`1[T]) */
                /* IL_07: stloc.0  */
                loc0 = CILJS.newobj(t1,asm0.x60001f2,[null, arg0]);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };
    /* System.Collections.IEnumerator Array`1.GetEnumeratorImpl()*/
    asm.x6000031 = function GetEnumeratorImpl(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call IEnumerator`1 GetEnumerator() */
                /* IL_07: stloc.0  */
                loc0 = asm0.x6000030(arg0);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Array`1.System.Collections.Generic.ICollection<T>.get_Count()*/
    asm.x6000032 = function System_Collections_Generic_ICollection_T__get_Count(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call Int32 get_Length() */
                /* IL_07: stloc.0  */
                loc0 = asm0.x6000009(arg0);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* System.Boolean Array`1.System.Collections.Generic.ICollection<T>.get_IsReadOnly()*/
    asm.x6000033 = function System_Collections_Generic_ICollection_T__get_IsReadOnly(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.1  */
                /* IL_02: stloc.0  */
                loc0 = (1|0);
                /* IL_05: ldloc.0  */
                /* IL_06: ret  */
                return loc0;
            }
        }
    };;
    /* System.Void Array`1.System.Collections.Generic.ICollection<T>.Add(T)*/
    asm.x6000034_init = function (arg0, arg1)
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x6000034 = asm.x6000034_;
    };;
    asm.x6000034 = function (arg0, arg1)
    {
        asm.x6000034_init(arg0,arg1);
        return asm.x6000034_(arg0,arg1);
    };;
    asm.x6000034_ = function System_Collections_Generic_ICollection_T__Add(arg0, arg1)
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
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: throw  */
                throw CILJS.newobj(t0,asm0.x60000d9,[null]);
            }
        }
    };
    /* System.Void Array`1.System.Collections.Generic.ICollection<T>.Clear()*/
    asm.x6000035_init = function (arg0)
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x6000035 = asm.x6000035_;
    };;
    asm.x6000035 = function (arg0)
    {
        asm.x6000035_init(arg0);
        return asm.x6000035_(arg0);
    };;
    asm.x6000035_ = function System_Collections_Generic_ICollection_T__Clear(arg0)
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
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: throw  */
                throw CILJS.newobj(t0,asm0.x60000d9,[null]);
            }
        }
    };
    /* System.Boolean Array`1.System.Collections.Generic.ICollection<T>.Contains(T)*/
    asm.x6000036_init = function (arg0, arg1)
    {
        ((asm0)["System.Array`1"](((arg0.constructor.GenericArguments)["asm0.t2000006"])[0]).init)();
    };;
    asm.x6000036 = function (arg0, arg1)
    {
        asm.x6000036_init(arg0,arg1);
        return asm.x6000036_(arg0,arg1);
    };;
    asm.x6000036_ = function System_Collections_Generic_ICollection_T__Contains(arg0, arg1)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = ((arg0.constructor.GenericArguments)["asm0.t2000006"])[0];
        t1 = (asm0)["System.Array`1"](t0);
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: castclass T[] */
                /* IL_07: ldarg.1  */
                /* IL_08: ldc.i4.0  */
                /* IL_09: ldarg.0  */
                /* IL_0A: call Int32 get_Length() */
                /* IL_0F: call Int32 IndexOf[T](T[], T, System.Int32, System.Int32) */
                /* IL_14: ldc.i4.m1  */
                /* IL_16: ceq  */
                /* IL_17: ldc.i4.0  */
                /* IL_19: ceq  */
                /* IL_1A: stloc.0  */
                loc0 = (((((asm0.x6000012(((arg0.constructor.GenericArguments)["asm0.t2000006"])[0]))(CILJS.cast_class(arg0,t1),arg1,(0|0),asm0.x6000009(arg0)) === (-1|0)) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_1D: ldloc.0  */
                /* IL_1E: ret  */
                return loc0;
            }
        }
    };
    /* System.Void Array`1.System.Collections.Generic.ICollection<T>.CopyTo(T[],Int32)*/
    asm.x6000037_init = function (arg0, arg1, arg2)
    {
        ((asm0)["System.Array`1"](((arg0.constructor.GenericArguments)["asm0.t2000006"])[0]).init)();
    };;
    asm.x6000037 = function (arg0, arg1, arg2)
    {
        asm.x6000037_init(arg0,arg1,arg2);
        return asm.x6000037_(arg0,arg1,arg2);
    };;
    asm.x6000037_ = function System_Collections_Generic_ICollection_T__CopyTo(arg0, arg1, arg2)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var loc2;
        var loc0;
        var loc1;
        var loc3;
        var loc4;
        var in_block_1;
        var loc5;
        t0 = ((arg0.constructor.GenericArguments)["asm0.t2000006"])[0];
        t1 = (asm0)["System.Array`1"](t0);
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.2  */
                /* IL_02: ldarg.0  */
                /* IL_03: call Int32 get_Length() */
                /* IL_08: ldarg.1  */
                /* IL_09: ldlen  */
                /* IL_0A: conv.i4  */
                /* IL_0B: sub  */
                /* IL_0D: clt  */
                /* IL_0E: stloc.2  */
                loc2 = ((arg2 < ((asm0.x6000009(arg0) - (arg1.jsarr.length | (0|0))) | (0|0))) ? 1 : 0);
                /* IL_0F: ldloc.2  */
                /* IL_10: brfalse.s IL_1D */
                
                if ((!(loc2))){
                    __pos__ = 0x1D;
                    continue;
                }
                /* IL_12: ldstr System.ArgumentException */
                /* IL_17: call Exception GetException(System.String) */
                /* IL_1C: throw  */
                throw asm0.x6000013(CILJS.new_string("System.ArgumentException"));
                case 0x1D:
                /* IL_1D: ldarg.0  */
                /* IL_1E: call Int32 get_Length() */
                /* IL_23: stloc.0  */
                loc0 = asm0.x6000009(arg0);
                /* IL_24: ldarg.0  */
                /* IL_25: castclass T[] */
                /* IL_2A: stloc.1  */
                loc1 = CILJS.cast_class(arg0,t1);
                /* IL_2B: ldc.i4.0  */
                /* IL_2C: stloc.3  */
                loc3 = (0|0);
                /* IL_2D: ldarg.2  */
                /* IL_2E: stloc.s 4 */
                loc4 = arg2;
                /* IL_30: br.s IL_4D */
                __pos__ = 0x4D;
                continue;
                case 0x32:
                case 0x4D:
                in_block_1 = true;
                
                if (__pos__ > 0x55){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x32){
                    __pos__ = 0x32;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x32:
                        /* IL_32: nop  */
                        
                        /* IL_33: ldarg.1  */
                        /* IL_34: ldloc.s 4 */
                        /* IL_36: ldloc.1  */
                        /* IL_37: ldloc.3  */
                        /* IL_38: ldelem T */
                        /* IL_3D: stelem T */
                        (arg1.jsarr)[loc4] = (loc1.jsarr)[loc3];
                        /* IL_42: nop  */
                        
                        /* IL_43: ldloc.s 4 */
                        /* IL_45: ldc.i4.1  */
                        /* IL_46: add  */
                        /* IL_47: stloc.s 4 */
                        loc4 = (loc4 + (1|0)) | (0|0);
                        /* IL_49: ldloc.3  */
                        /* IL_4A: ldc.i4.1  */
                        /* IL_4B: add  */
                        /* IL_4C: stloc.3  */
                        loc3 = (loc3 + (1|0)) | (0|0);
                        case 0x4D:
                        /* IL_4D: ldloc.3  */
                        /* IL_4E: ldloc.0  */
                        /* IL_50: clt  */
                        /* IL_51: stloc.s 5 */
                        loc5 = ((loc3 < loc0) ? 1 : 0);
                        /* IL_53: ldloc.s 5 */
                        /* IL_55: brtrue.s IL_32 */
                        
                        if (loc5){
                            __pos__ = 0x32;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_57: ret  */
                return ;
            }
        }
    };
    /* System.Boolean Array`1.System.Collections.Generic.ICollection<T>.Remove(T)*/
    asm.x6000038_init = function (arg0, arg1)
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x6000038 = asm.x6000038_;
    };;
    asm.x6000038 = function (arg0, arg1)
    {
        asm.x6000038_init(arg0,arg1);
        return asm.x6000038_(arg0,arg1);
    };;
    asm.x6000038_ = function System_Collections_Generic_ICollection_T__Remove(arg0, arg1)
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
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: throw  */
                throw CILJS.newobj(t0,asm0.x60000d9,[null]);
            }
        }
    };
    /*  Array`1..ctor()*/
    asm.x6000039 = function _ctor(arg0)
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
                asm0.x600002e(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* System.Void AsyncCallback.Invoke(IAsyncResult)*/
    asm.x600003b = CILJS.delegate_invoke;;
    /* System.IAsyncResult AsyncCallback.BeginInvoke(IAsyncResult,AsyncCallback,Object)*/
    asm.x600003c = CILJS.delegate_begin_invoke;;
    /* System.Void AsyncCallback.EndInvoke(IAsyncResult)*/
    asm.x600003d = CILJS.delegate_end_invoke;;
    /*  AsyncCallback..ctor(Object,IntPtr)*/
    asm.x600003a = CILJS.delegate_ctor;;
    /*  Attribute..ctor()*/
    asm.x600003e = function _ctor(arg0)
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
    /* System.AttributeTargets AttributeUsageAttribute.get_ValidOn()*/
    asm.x6000040 = function get_ValidOn(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld AttributeTargets <ValidOn>k__BackingField */
                /* IL_06: ret  */
                return (arg0)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"];
            }
        }
    };;
    /* System.Void AttributeUsageAttribute.set_ValidOn(AttributeTargets)*/
    asm.x6000041 = function set_ValidOn(arg0, arg1)
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
                /* IL_02: stfld AttributeTargets <ValidOn>k__BackingField */
                (arg0)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = arg1;
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* System.Boolean AttributeUsageAttribute.get_Inherited()*/
    asm.x6000042 = function get_Inherited(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld Boolean <Inherited>k__BackingField */
                /* IL_06: ret  */
                return (arg0)["SystemAttributeUsageAttribute<Inherited>k__BackingField"];
            }
        }
    };;
    /* System.Void AttributeUsageAttribute.set_Inherited(Boolean)*/
    asm.x6000043 = function set_Inherited(arg0, arg1)
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
                /* IL_02: stfld Boolean <Inherited>k__BackingField */
                (arg0)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = arg1;
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* System.Boolean AttributeUsageAttribute.get_AllowMultiple()*/
    asm.x6000044 = function get_AllowMultiple(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld Boolean <AllowMultiple>k__BackingField */
                /* IL_06: ret  */
                return (arg0)["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"];
            }
        }
    };;
    /* System.Void AttributeUsageAttribute.set_AllowMultiple(Boolean)*/
    asm.x6000045 = function set_AllowMultiple(arg0, arg1)
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
                /* IL_02: stfld Boolean <AllowMultiple>k__BackingField */
                (arg0)["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"] = arg1;
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /*  AttributeUsageAttribute..ctor(AttributeTargets)*/
    asm.x600003f = function _ctor(arg0, arg1)
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
                asm0.x600003e(arg0);
                /* IL_06: nop  */
                
                /* IL_07: nop  */
                
                /* IL_08: ldarg.0  */
                /* IL_09: ldarg.1  */
                /* IL_0A: call Void set_ValidOn(System.AttributeTargets) */
                asm0.x6000041(arg0,CILJS.clone_value(arg1));
                /* IL_0F: nop  */
                
                /* IL_10: ret  */
                return ;
            }
        }
    };;
    /* System.String Boolean.ToString()*/
    asm.x6000046 = function ToString(arg0)
    {
        var st_02;
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u1  */
                /* IL_03: brtrue.s IL_0C */
                
                if (arg0.r()){
                    __pos__ = 0xC;
                    continue;
                }
                /* IL_05: ldstr False */
                st_02 = CILJS.new_string("False");
                /* IL_0A: br.s IL_11 */
                __pos__ = 0x11;
                continue;
                case 0xC:
                /* IL_0C: ldstr True */
                st_02 = CILJS.new_string("True");
                case 0x11:
                /* IL_11: stloc.0  */
                loc0 = st_02;
                /* IL_14: ldloc.0  */
                /* IL_15: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Boolean.GetHashCode()*/
    asm.x6000047 = function GetHashCode(arg0)
    {
        var st_02;
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u1  */
                /* IL_03: brtrue.s IL_08 */
                
                if (arg0.r()){
                    __pos__ = 0x8;
                    continue;
                }
                /* IL_05: ldc.i4.0  */
                st_02 = (0|0);
                /* IL_06: br.s IL_09 */
                __pos__ = 0x9;
                continue;
                case 0x8:
                /* IL_08: ldc.i4.1  */
                st_02 = (1|0);
                case 0x9:
                /* IL_09: stloc.0  */
                loc0 = st_02;
                /* IL_0C: ldloc.0  */
                /* IL_0D: ret  */
                return loc0;
            }
        }
    };;
    /* System.Boolean Boolean.Equals(Boolean)*/
    asm.x6000048 = function Equals(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u1  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldarg.1  */
                /* IL_05: stloc.1  */
                loc1 = arg1;
                /* IL_06: ldloc.0  */
                /* IL_07: ldloc.1  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.2  */
                loc2 = ((loc0 === loc1) ? 1 : 0);
                /* IL_0D: ldloc.2  */
                /* IL_0E: ret  */
                return loc2;
            }
        }
    };;
    /* System.Boolean Boolean.Equals(Object)*/
    asm.x6000049 = function Equals(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Boolean"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: isinst System.Boolean */
                /* IL_07: ldnull  */
                /* IL_09: cgt.un  */
                /* IL_0A: ldc.i4.0  */
                /* IL_0C: ceq  */
                /* IL_0D: stloc.0  */
                loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_0E: ldloc.0  */
                /* IL_0F: brfalse.s IL_15 */
                
                if ((!(loc0))){
                    __pos__ = 0x15;
                    continue;
                }
                /* IL_11: ldc.i4.0  */
                /* IL_12: stloc.1  */
                loc1 = (0|0);
                /* IL_13: br.s IL_24 */
                __pos__ = 0x24;
                continue;
                case 0x15:
                /* IL_15: ldarg.0  */
                /* IL_16: ldarg.1  */
                /* IL_17: unbox.any System.Boolean */
                /* IL_1C: call Boolean Equals(System.Boolean) */
                /* IL_21: stloc.1  */
                loc1 = asm0.x6000048(arg0,CILJS.unbox_any(arg1,t0));
                case 0x24:
                /* IL_24: ldloc.1  */
                /* IL_25: ret  */
                return loc1;
            }
        }
    };;
    /* System.Int32 Boolean.CompareTo(Object)*/
    asm.x600004a = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: unbox.any System.Boolean */
                /* IL_08: call Int32 CompareTo(System.Boolean) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x600004b(arg0,CILJS.unbox_any(arg1,(asm0)["System.Boolean"]()));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Boolean.CompareTo(Boolean)*/
    asm.x600004b = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u1  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldloc.0  */
                /* IL_05: ldarg.1  */
                /* IL_07: ceq  */
                /* IL_08: stloc.1  */
                loc1 = ((loc0 === arg1) ? 1 : 0);
                /* IL_09: ldloc.1  */
                /* IL_0A: brfalse.s IL_10 */
                
                if ((!(loc1))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0C: ldc.i4.0  */
                /* IL_0D: stloc.2  */
                loc2 = (0|0);
                /* IL_0E: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x10:
                /* IL_10: ldloc.0  */
                /* IL_11: ldc.i4.0  */
                /* IL_13: ceq  */
                /* IL_14: stloc.3  */
                loc3 = ((loc0 === (0|0)) ? 1 : 0);
                /* IL_15: ldloc.3  */
                /* IL_16: brfalse.s IL_1C */
                
                if ((!(loc3))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.m1  */
                /* IL_19: stloc.2  */
                loc2 = (-1|0);
                /* IL_1A: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.1  */
                /* IL_1D: stloc.2  */
                loc2 = (1|0);
                case 0x20:
                /* IL_20: ldloc.2  */
                /* IL_21: ret  */
                return loc2;
            }
        }
    };;
    /* System.String Byte.ToString()*/
    asm.x600004c = function ToString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Byte"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u1  */
                /* IL_03: box System.Byte */
                /* IL_08: ldc.i4.8  */
                /* IL_09: call String UnsignedPrimitiveToString(System.Object, System.Int32) */
                /* IL_0E: stloc.0  */
                loc0 = asm0.x60000c1(CILJS.make_box(arg0.r(),t0),(8|0));
                /* IL_11: ldloc.0  */
                /* IL_12: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Byte.CompareTo(Object)*/
    asm.x600004d = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: unbox.any System.Byte */
                /* IL_08: call Int32 CompareTo(System.Byte) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x600004e(arg0,CILJS.unbox_any(arg1,(asm0)["System.Byte"]()));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Byte.CompareTo(Byte)*/
    asm.x600004e = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u1  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldloc.0  */
                /* IL_05: ldarg.1  */
                /* IL_07: clt  */
                /* IL_08: stloc.1  */
                loc1 = ((loc0 < arg1) ? 1 : 0);
                /* IL_09: ldloc.1  */
                /* IL_0A: brfalse.s IL_10 */
                
                if ((!(loc1))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0C: ldc.i4.m1  */
                /* IL_0D: stloc.2  */
                loc2 = (-1|0);
                /* IL_0E: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x10:
                /* IL_10: ldloc.0  */
                /* IL_11: ldarg.1  */
                /* IL_13: cgt  */
                /* IL_14: stloc.3  */
                loc3 = ((loc0 > arg1) ? 1 : 0);
                /* IL_15: ldloc.3  */
                /* IL_16: brfalse.s IL_1C */
                
                if ((!(loc3))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.1  */
                /* IL_19: stloc.2  */
                loc2 = (1|0);
                /* IL_1A: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.0  */
                /* IL_1D: stloc.2  */
                loc2 = (0|0);
                case 0x20:
                /* IL_20: ldloc.2  */
                /* IL_21: ret  */
                return loc2;
            }
        }
    };;
    /* System.Boolean Byte.Equals(Byte)*/
    asm.x600004f = function Equals(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u1  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldarg.1  */
                /* IL_05: stloc.1  */
                loc1 = arg1;
                /* IL_06: ldloc.0  */
                /* IL_07: ldloc.1  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.2  */
                loc2 = ((loc0 === loc1) ? 1 : 0);
                /* IL_0D: ldloc.2  */
                /* IL_0E: ret  */
                return loc2;
            }
        }
    };;
    /* System.Boolean Byte.Equals(Object)*/
    asm.x6000050 = function Equals(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Byte"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: isinst System.Byte */
                /* IL_07: ldnull  */
                /* IL_09: cgt.un  */
                /* IL_0A: ldc.i4.0  */
                /* IL_0C: ceq  */
                /* IL_0D: stloc.0  */
                loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_0E: ldloc.0  */
                /* IL_0F: brfalse.s IL_15 */
                
                if ((!(loc0))){
                    __pos__ = 0x15;
                    continue;
                }
                /* IL_11: ldc.i4.0  */
                /* IL_12: stloc.1  */
                loc1 = (0|0);
                /* IL_13: br.s IL_24 */
                __pos__ = 0x24;
                continue;
                case 0x15:
                /* IL_15: ldarg.0  */
                /* IL_16: ldarg.1  */
                /* IL_17: unbox.any System.Byte */
                /* IL_1C: call Boolean Equals(System.Byte) */
                /* IL_21: stloc.1  */
                loc1 = asm0.x600004f(arg0,CILJS.unbox_any(arg1,t0));
                case 0x24:
                /* IL_24: ldloc.1  */
                /* IL_25: ret  */
                return loc1;
            }
        }
    };;
    /* System.Int32 Byte.GetHashCode()*/
    asm.x6000051 = function GetHashCode(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u1  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_06: ldloc.0  */
                /* IL_07: ret  */
                return loc0;
            }
        }
    };;
    /* System.String Char.ToString()*/
    asm.x6000052 = function ToString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Char"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u2  */
                /* IL_03: box System.Char */
                /* IL_08: call String ToStringImpl(System.Object) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x6000053(CILJS.make_box(arg0.r(),t0));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* static System.String Char.ToStringImpl(Object)*/
    asm.x6000053 = function(o) { return CILJS.new_string(String.fromCharCode(o.boxed)); };;
    /* static System.Boolean Char.IsDigit(Char)*/
    asm.x6000054 = function(o) { return (48 <= o.boxed && o.boxed <= 57) ? 1 : 0; };;
    /* System.Int32 Comparison`1.Invoke(T,T)*/
    asm.x6000056 = CILJS.delegate_invoke;;
    /* System.IAsyncResult Comparison`1.BeginInvoke(T,T,AsyncCallback,Object)*/
    asm.x6000057 = CILJS.delegate_begin_invoke;;
    /* System.Int32 Comparison`1.EndInvoke(IAsyncResult)*/
    asm.x6000058 = CILJS.delegate_end_invoke;;
    /*  Comparison`1..ctor(Object,IntPtr)*/
    asm.x6000055 = CILJS.delegate_ctor;;
    /* static System.Void Console.WriteLine(Object)*/
    asm.x600005a = function WriteLine(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.0  */
                loc0 = ((arg0 === null) ? 1 : 0);
                /* IL_06: ldloc.0  */
                /* IL_07: brfalse.s IL_16 */
                
                if ((!(loc0))){
                    __pos__ = 0x16;
                    continue;
                }
                asm0.x6000142();
                /* IL_09: ldsfld String Empty */
                /* IL_0E: call Void WriteLineImpl(System.String) */
                CILJS.console_write_line(t0.Empty);
                /* IL_13: nop  */
                
                /* IL_14: br.s IL_22 */
                __pos__ = 0x22;
                continue;
                case 0x16:
                /* IL_16: ldarg.0  */
                /* IL_17: callvirt String ToString() */
                /* IL_1C: call Void WriteLineImpl(System.String) */
                CILJS.console_write_line(((arg0.vtable)["asm0.x60000ed"]())(CILJS.convert_box_to_pointer_as_needed(arg0)));
                /* IL_21: nop  */
                
                case 0x22:
                /* IL_22: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Console.WriteLine(String,Object[])*/
    asm.x600005b = function WriteLine(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.0  */
                loc0 = ((arg0 === null) ? 1 : 0);
                /* IL_06: ldloc.0  */
                /* IL_07: brfalse.s IL_16 */
                
                if ((!(loc0))){
                    __pos__ = 0x16;
                    continue;
                }
                asm0.x6000142();
                /* IL_09: ldsfld String Empty */
                /* IL_0E: call Void WriteLineImpl(System.String) */
                CILJS.console_write_line(t0.Empty);
                /* IL_13: nop  */
                
                /* IL_14: br.s IL_23 */
                __pos__ = 0x23;
                continue;
                case 0x16:
                /* IL_16: ldarg.0  */
                /* IL_17: ldarg.1  */
                /* IL_18: call String Format(System.String, System.Object[]) */
                /* IL_1D: call Void WriteLineImpl(System.String) */
                CILJS.console_write_line(asm0.x6000139(arg0,arg1));
                /* IL_22: nop  */
                
                case 0x23:
                /* IL_23: ret  */
                return ;
            }
        }
    };;
    /*  Console..ctor()*/
    asm.x600005c = function _ctor(arg0)
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
    /* static System.Delegate Delegate.Combine(Delegate,Delegate)*/
    asm.x600005d = function Combine(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        t0 = (asm0)["System.Exception"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.0  */
                loc0 = ((arg0 === null) ? 1 : 0);
                /* IL_06: ldloc.0  */
                /* IL_07: brfalse.s IL_1A */
                
                if ((!(loc0))){
                    __pos__ = 0x1A;
                    continue;
                }
                /* IL_09: nop  */
                
                /* IL_0A: ldarg.1  */
                /* IL_0B: ldnull  */
                /* IL_0D: ceq  */
                /* IL_0E: stloc.1  */
                loc1 = ((arg1 === null) ? 1 : 0);
                /* IL_0F: ldloc.1  */
                /* IL_10: brfalse.s IL_16 */
                
                if ((!(loc1))){
                    __pos__ = 0x16;
                    continue;
                }
                /* IL_12: ldnull  */
                /* IL_13: stloc.2  */
                loc2 = null;
                /* IL_14: br.s IL_52 */
                __pos__ = 0x52;
                continue;
                case 0x16:
                /* IL_16: ldarg.1  */
                /* IL_17: stloc.2  */
                loc2 = arg1;
                /* IL_18: br.s IL_52 */
                __pos__ = 0x52;
                continue;
                case 0x1A:
                /* IL_1A: ldarg.1  */
                /* IL_1B: ldnull  */
                /* IL_1D: ceq  */
                /* IL_1E: stloc.3  */
                loc3 = ((arg1 === null) ? 1 : 0);
                /* IL_1F: ldloc.3  */
                /* IL_20: brfalse.s IL_26 */
                
                if ((!(loc3))){
                    __pos__ = 0x26;
                    continue;
                }
                /* IL_22: ldarg.0  */
                /* IL_23: stloc.2  */
                loc2 = arg0;
                /* IL_24: br.s IL_52 */
                __pos__ = 0x52;
                continue;
                case 0x26:
                /* IL_26: ldarg.0  */
                /* IL_27: callvirt Type GetType() */
                /* IL_2C: ldarg.1  */
                /* IL_2D: callvirt Type GetType() */
                /* IL_33: ceq  */
                /* IL_34: ldc.i4.0  */
                /* IL_36: ceq  */
                /* IL_37: stloc.s 4 */
                loc4 = ((((asm0.x60000f2(arg0) === asm0.x60000f2(arg1)) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_39: ldloc.s 4 */
                /* IL_3B: brfalse.s IL_48 */
                
                if ((!(loc4))){
                    __pos__ = 0x48;
                    continue;
                }
                /* IL_3D: ldstr Incompatible delegate types */
                /* IL_42: newobj Void .ctor(System.String) */
                /* IL_47: throw  */
                throw CILJS.newobj(t0,asm0.x6000077,[null, CILJS.new_string("Incompatible delegate types")]);
                case 0x48:
                /* IL_48: ldarg.0  */
                /* IL_49: ldarg.1  */
                /* IL_4A: callvirt Delegate CombineImpl(System.Delegate) */
                /* IL_4F: stloc.2  */
                loc2 = ((arg0.vtable)["asm0.x6000060"]())(arg0,arg1);
                case 0x52:
                /* IL_52: ldloc.2  */
                /* IL_53: ret  */
                return loc2;
            }
        }
    };;
    /* static System.Delegate Delegate.Remove(Delegate,Delegate)*/
    asm.x600005e = function Remove(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm0)["System.Exception"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.0  */
                loc0 = ((arg1 === null) ? 1 : 0);
                /* IL_06: ldloc.0  */
                /* IL_07: brfalse.s IL_0D */
                
                if ((!(loc0))){
                    __pos__ = 0xD;
                    continue;
                }
                /* IL_09: ldarg.0  */
                /* IL_0A: stloc.1  */
                loc1 = arg0;
                /* IL_0B: br.s IL_37 */
                __pos__ = 0x37;
                continue;
                case 0xD:
                /* IL_0D: ldarg.0  */
                /* IL_0E: callvirt Type GetType() */
                /* IL_13: ldarg.1  */
                /* IL_14: callvirt Type GetType() */
                /* IL_1A: ceq  */
                /* IL_1B: ldc.i4.0  */
                /* IL_1D: ceq  */
                /* IL_1E: stloc.2  */
                loc2 = ((((asm0.x60000f2(arg0) === asm0.x60000f2(arg1)) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_1F: ldloc.2  */
                /* IL_20: brfalse.s IL_2D */
                
                if ((!(loc2))){
                    __pos__ = 0x2D;
                    continue;
                }
                /* IL_22: ldstr Incompatible delegate types */
                /* IL_27: newobj Void .ctor(System.String) */
                /* IL_2C: throw  */
                throw CILJS.newobj(t0,asm0.x6000077,[null, CILJS.new_string("Incompatible delegate types")]);
                case 0x2D:
                /* IL_2D: ldarg.0  */
                /* IL_2E: ldarg.1  */
                /* IL_2F: callvirt Delegate RemoveImpl(System.Delegate) */
                /* IL_34: stloc.1  */
                loc1 = ((arg0.vtable)["asm0.x600005f"]())(arg0,arg1);
                case 0x37:
                /* IL_37: ldloc.1  */
                /* IL_38: ret  */
                return loc1;
            }
        }
    };;
    /* System.Delegate Delegate.RemoveImpl(Delegate)*/
    asm.x600005f_init = function (arg0, arg1)
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x600005f = asm.x600005f_;
    };;
    asm.x600005f = function (arg0, arg1)
    {
        asm.x600005f_init(arg0,arg1);
        return asm.x600005f_(arg0,arg1);
    };;
    asm.x600005f_ = function RemoveImpl(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.NotImplementedException"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: throw  */
                throw CILJS.newobj(t0,asm0.x60000d8,[null]);
            }
        }
    };
    /* System.Delegate Delegate.CombineImpl(Delegate)*/
    asm.x6000060_init = function (arg0, arg1)
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x6000060 = asm.x6000060_;
    };;
    asm.x6000060 = function (arg0, arg1)
    {
        asm.x6000060_init(arg0,arg1);
        return asm.x6000060_(arg0,arg1);
    };;
    asm.x6000060_ = function CombineImpl(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.NotImplementedException"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: throw  */
                throw CILJS.newobj(t0,asm0.x60000d8,[null]);
            }
        }
    };
    /* System.Boolean Delegate.Equals(Object)*/
    asm.x6000061 = function Equals(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Delegate"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: isinst System.Delegate */
                /* IL_08: call Boolean op_Equality(System.Delegate, System.Delegate) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x6000062(arg0,t0.IsInst(arg1));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Boolean Delegate.op_Equality(Delegate,Delegate)*/
    asm.x6000062_init = function (arg0, arg1)
    {
        ((asm0)["System.MulticastDelegate"]().init)();
        asm.x6000062 = asm.x6000062_;
    };;
    asm.x6000062 = function (arg0, arg1)
    {
        asm.x6000062_init(arg0,arg1);
        return asm.x6000062_(arg0,arg1);
    };;
    asm.x6000062_ = function op_Equality(arg0, arg1)
    {
        var t0;
        var st_27;
        var st_56;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        var loc7;
        var loc8;
        var loc9;
        var in_block_1;
        var loc10;
        var loc11;
        var loc12;
        var loc13;
        t0 = (asm0)["System.MulticastDelegate"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: castclass System.MulticastDelegate */
                /* IL_07: stloc.0  */
                loc0 = arg0;
                /* IL_08: ldarg.1  */
                /* IL_09: castclass System.MulticastDelegate */
                /* IL_0E: stloc.1  */
                loc1 = arg1;
                /* IL_0F: ldloc.0  */
                /* IL_10: ldnull  */
                /* IL_12: ceq  */
                /* IL_13: stloc.2  */
                loc2 = ((loc0 === null) ? 1 : 0);
                /* IL_14: ldloc.2  */
                /* IL_15: brfalse.s IL_21 */
                
                if ((!(loc2))){
                    __pos__ = 0x21;
                    continue;
                }
                /* IL_17: ldloc.1  */
                /* IL_18: ldnull  */
                /* IL_1A: ceq  */
                /* IL_1B: stloc.3  */
                loc3 = ((loc1 === null) ? 1 : 0);
                /* IL_1C: br IL_10E */
                __pos__ = 0x10E;
                continue;
                case 0x21:
                /* IL_21: ldloc.1  */
                /* IL_22: ldnull  */
                /* IL_24: ceq  */
                /* IL_25: stloc.s 4 */
                loc4 = ((loc1 === null) ? 1 : 0);
                /* IL_27: ldloc.s 4 */
                /* IL_29: brfalse.s IL_32 */
                
                if ((!(loc4))){
                    __pos__ = 0x32;
                    continue;
                }
                /* IL_2B: ldc.i4.0  */
                /* IL_2C: stloc.3  */
                loc3 = (0|0);
                /* IL_2D: br IL_10E */
                __pos__ = 0x10E;
                continue;
                case 0x32:
                /* IL_32: ldloc.0  */
                /* IL_33: ldfld Object _methodPtr */
                /* IL_38: ldloc.1  */
                /* IL_39: ldfld Object _methodPtr */
                /* IL_3F: ceq  */
                /* IL_40: ldc.i4.0  */
                /* IL_42: ceq  */
                /* IL_43: stloc.s 5 */
                loc5 = ((((loc0._methodPtr === loc1._methodPtr) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_45: ldloc.s 5 */
                /* IL_47: brfalse.s IL_50 */
                
                if ((!(loc5))){
                    __pos__ = 0x50;
                    continue;
                }
                /* IL_49: ldc.i4.0  */
                /* IL_4A: stloc.3  */
                loc3 = (0|0);
                /* IL_4B: br IL_10E */
                __pos__ = 0x10E;
                continue;
                case 0x50:
                /* IL_50: ldloc.0  */
                /* IL_51: ldfld Object _target */
                /* IL_56: ldloc.1  */
                /* IL_57: ldfld Object _target */
                /* IL_5D: ceq  */
                /* IL_5E: ldc.i4.0  */
                /* IL_60: ceq  */
                /* IL_61: stloc.s 6 */
                loc6 = ((((loc0._target === loc1._target) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_63: ldloc.s 6 */
                /* IL_65: brfalse.s IL_6E */
                
                if ((!(loc6))){
                    __pos__ = 0x6E;
                    continue;
                }
                /* IL_67: ldc.i4.0  */
                /* IL_68: stloc.3  */
                loc3 = (0|0);
                /* IL_69: br IL_10E */
                __pos__ = 0x10E;
                continue;
                case 0x6E:
                /* IL_6E: ldloc.0  */
                /* IL_6F: ldfld Delegate[] _invocationList */
                /* IL_74: brfalse.s IL_81 */
                
                if ((!(loc0._invocationList))){
                    __pos__ = 0x81;
                    continue;
                }
                /* IL_76: ldloc.1  */
                /* IL_77: ldfld Delegate[] _invocationList */
                /* IL_7C: ldnull  */
                /* IL_7E: cgt.un  */
                st_27 = ((loc1._invocationList !== null) ? 1 : 0);
                /* IL_7F: br.s IL_82 */
                __pos__ = 0x82;
                continue;
                case 0x81:
                /* IL_81: ldc.i4.0  */
                st_27 = (0|0);
                case 0x82:
                /* IL_82: stloc.s 7 */
                loc7 = st_27;
                /* IL_84: ldloc.s 7 */
                /* IL_86: brfalse.s IL_F7 */
                
                if ((!(loc7))){
                    __pos__ = 0xF7;
                    continue;
                }
                /* IL_88: nop  */
                
                /* IL_89: ldloc.0  */
                /* IL_8A: ldfld Delegate[] _invocationList */
                /* IL_8F: ldlen  */
                /* IL_90: conv.i4  */
                /* IL_91: ldloc.1  */
                /* IL_92: ldfld Delegate[] _invocationList */
                /* IL_97: ldlen  */
                /* IL_98: conv.i4  */
                /* IL_9A: ceq  */
                /* IL_9B: ldc.i4.0  */
                /* IL_9D: ceq  */
                /* IL_9E: stloc.s 8 */
                loc8 = (((((loc0._invocationList.jsarr.length | (0|0)) === (loc1._invocationList.jsarr.length | (0|0))) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_A0: ldloc.s 8 */
                /* IL_A2: brfalse.s IL_A8 */
                
                if ((!(loc8))){
                    __pos__ = 0xA8;
                    continue;
                }
                /* IL_A4: ldc.i4.0  */
                /* IL_A5: stloc.3  */
                loc3 = (0|0);
                /* IL_A6: br.s IL_10E */
                __pos__ = 0x10E;
                continue;
                case 0xA8:
                /* IL_A8: ldc.i4.0  */
                /* IL_A9: stloc.s 9 */
                loc9 = (0|0);
                /* IL_AB: br.s IL_E1 */
                __pos__ = 0xE1;
                continue;
                case 0xAD:
                case 0xDA:
                case 0xE1:
                in_block_1 = true;
                
                if (__pos__ > 0xF1){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0xAD){
                    __pos__ = 0xAD;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0xAD:
                        /* IL_AD: nop  */
                        
                        /* IL_AE: ldloc.0  */
                        /* IL_AF: ldfld Delegate[] _invocationList */
                        /* IL_B4: ldloc.s 9 */
                        /* IL_B6: ldelem.ref  */
                        /* IL_B7: stloc.s 10 */
                        loc10 = CILJS.ldelem_ref(loc0._invocationList,loc9);
                        /* IL_B9: ldloc.1  */
                        /* IL_BA: ldfld Delegate[] _invocationList */
                        /* IL_BF: ldloc.s 9 */
                        /* IL_C1: ldelem.ref  */
                        /* IL_C2: stloc.s 11 */
                        loc11 = CILJS.ldelem_ref(loc1._invocationList,loc9);
                        /* IL_C4: ldloc.s 10 */
                        /* IL_C6: ldloc.s 11 */
                        /* IL_C8: call Boolean op_Equality(System.Delegate, System.Delegate) */
                        /* IL_CD: ldc.i4.0  */
                        /* IL_CF: ceq  */
                        /* IL_D0: stloc.s 12 */
                        loc12 = ((asm0.x6000062(loc10,loc11) === (0|0)) ? 1 : 0);
                        /* IL_D2: ldloc.s 12 */
                        /* IL_D4: brfalse.s IL_DA */
                        
                        if ((!(loc12))){
                            __pos__ = 0xDA;
                            continue;
                        }
                        /* IL_D6: ldc.i4.0  */
                        /* IL_D7: stloc.3  */
                        loc3 = (0|0);
                        /* IL_D8: br.s IL_10E */
                        __pos__ = 0x10E;
                        continue;
                        case 0xDA:
                        /* IL_DA: nop  */
                        
                        /* IL_DB: ldloc.s 9 */
                        /* IL_DD: ldc.i4.1  */
                        /* IL_DE: add  */
                        /* IL_DF: stloc.s 9 */
                        loc9 = (loc9 + (1|0)) | (0|0);
                        case 0xE1:
                        /* IL_E1: ldloc.s 9 */
                        /* IL_E3: ldloc.0  */
                        /* IL_E4: ldfld Delegate[] _invocationList */
                        /* IL_E9: ldlen  */
                        /* IL_EA: conv.i4  */
                        /* IL_EC: clt  */
                        /* IL_ED: stloc.s 13 */
                        loc13 = ((loc9 < (loc0._invocationList.jsarr.length | (0|0))) ? 1 : 0);
                        /* IL_EF: ldloc.s 13 */
                        /* IL_F1: brtrue.s IL_AD */
                        
                        if (loc13){
                            __pos__ = 0xAD;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_F3: ldc.i4.1  */
                /* IL_F4: stloc.3  */
                loc3 = (1|0);
                /* IL_F5: br.s IL_10E */
                __pos__ = 0x10E;
                continue;
                case 0xF7:
                /* IL_F7: ldloc.0  */
                /* IL_F8: ldfld Delegate[] _invocationList */
                /* IL_FD: brtrue.s IL_10A */
                
                if (loc0._invocationList){
                    __pos__ = 0x10A;
                    continue;
                }
                /* IL_FF: ldloc.1  */
                /* IL_100: ldfld Delegate[] _invocationList */
                /* IL_105: ldnull  */
                /* IL_107: ceq  */
                st_56 = ((loc1._invocationList === null) ? 1 : 0);
                /* IL_108: br.s IL_10B */
                __pos__ = 0x10B;
                continue;
                case 0x10A:
                /* IL_10A: ldc.i4.0  */
                st_56 = (0|0);
                case 0x10B:
                /* IL_10B: stloc.3  */
                loc3 = st_56;
                case 0x10E:
                /* IL_10E: ldloc.3  */
                /* IL_10F: ret  */
                return loc3;
            }
        }
    };
    /* static System.Boolean Delegate.op_Inequality(Delegate,Delegate)*/
    asm.x6000063 = function op_Inequality(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: call Boolean op_Equality(System.Delegate, System.Delegate) */
                /* IL_08: ldc.i4.0  */
                /* IL_0A: ceq  */
                /* IL_0B: stloc.0  */
                loc0 = ((asm0.x6000062(arg0,arg1) === (0|0)) ? 1 : 0);
                /* IL_0E: ldloc.0  */
                /* IL_0F: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Delegate.GetHashCode()*/
    asm.x6000064 = function GetHashCode(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call Int32 GetHashCode() */
                /* IL_07: stloc.0  */
                loc0 = asm0.x60000f1(arg0);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Object Delegate.GetJsFunction(Delegate)*/
    asm.x6000066 = function GetJsFunction(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Object _target */
                /* IL_07: ldnull  */
                /* IL_09: cgt.un  */
                /* IL_0A: stloc.0  */
                loc0 = ((arg0._target !== null) ? 1 : 0);
                /* IL_0B: ldloc.0  */
                /* IL_0C: brfalse.s IL_22 */
                
                if ((!(loc0))){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_0E: ldarg.0  */
                /* IL_0F: ldfld Object _methodPtr */
                /* IL_14: ldarg.0  */
                /* IL_15: ldfld Object _target */
                /* IL_1A: call Object GetJsFunction(System.Object, System.Object) */
                /* IL_1F: stloc.1  */
                loc1 = (
            function () {{ 
                var args = Array.prototype.slice.apply(arguments);
                args.unshift(arg0._target);
                return arg0._methodPtr.apply(null, args);
            }});
                /* IL_20: br.s IL_2B */
                __pos__ = 0x2B;
                continue;
                case 0x22:
                /* IL_22: ldarg.0  */
                /* IL_23: ldfld Object _methodPtr */
                /* IL_28: stloc.1  */
                loc1 = arg0._methodPtr;
                case 0x2B:
                /* IL_2B: ldloc.1  */
                /* IL_2C: ret  */
                return loc1;
            }
        }
    };;
    /*  Delegate..ctor()*/
    asm.x6000067 = function _ctor(arg0)
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
    /*  DivideByZeroException..ctor()*/
    asm.x6000068 = function _ctor(arg0)
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
                asm0.x6000076(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* System.String Double.ToString()*/
    asm.x6000069 = function ToString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Double"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.r8  */
                /* IL_03: box System.Double */
                /* IL_08: call String SignedPrimitiveToString(System.Object) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x60000c0(CILJS.make_box(arg0.r(),t0));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Double.CompareTo(Object)*/
    asm.x600006a = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: unbox.any System.Double */
                /* IL_08: call Int32 CompareTo(System.Double) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x600006b(arg0,CILJS.unbox_any(arg1,(asm0)["System.Double"]()));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Double.CompareTo(Double)*/
    asm.x600006b = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.r8  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldloc.0  */
                /* IL_05: ldarg.1  */
                /* IL_07: clt  */
                /* IL_08: stloc.1  */
                loc1 = ((loc0 < arg1) ? 1 : 0);
                /* IL_09: ldloc.1  */
                /* IL_0A: brfalse.s IL_10 */
                
                if ((!(loc1))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0C: ldc.i4.m1  */
                /* IL_0D: stloc.2  */
                loc2 = (-1|0);
                /* IL_0E: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x10:
                /* IL_10: ldloc.0  */
                /* IL_11: ldarg.1  */
                /* IL_13: cgt  */
                /* IL_14: stloc.3  */
                loc3 = ((loc0 > arg1) ? 1 : 0);
                /* IL_15: ldloc.3  */
                /* IL_16: brfalse.s IL_1C */
                
                if ((!(loc3))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.1  */
                /* IL_19: stloc.2  */
                loc2 = (1|0);
                /* IL_1A: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.0  */
                /* IL_1D: stloc.2  */
                loc2 = (0|0);
                case 0x20:
                /* IL_20: ldloc.2  */
                /* IL_21: ret  */
                return loc2;
            }
        }
    };;
    /* static System.Type Enum.GetUnderlyingType(Type)*/
    asm.x600006c_init = function (arg0)
    {
        ((asm0)["System.InvalidOperationException"]().init)();
        asm.x600006c = asm.x600006c_;
    };;
    asm.x600006c = function (arg0)
    {
        asm.x600006c_init(arg0);
        return asm.x600006c_(arg0);
    };;
    asm.x600006c_ = function GetUnderlyingType(arg0)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.InvalidOperationException"]();
        t1 = (asm0)["System.Int32"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: callvirt Boolean get_IsEnum() */
                /* IL_07: ldc.i4.0  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.0  */
                loc0 = ((asm0.x6000149(arg0) === (0|0)) ? 1 : 0);
                /* IL_0B: ldloc.0  */
                /* IL_0C: brfalse.s IL_14 */
                
                if ((!(loc0))){
                    __pos__ = 0x14;
                    continue;
                }
                /* IL_0E: newobj Void .ctor() */
                /* IL_13: throw  */
                throw CILJS.newobj(t0,asm0.x60000c4,[null]);
                case 0x14:
                /* IL_14: ldtoken System.Int32 */
                /* IL_19: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_1E: stloc.1  */
                loc1 = asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t1));
                /* IL_21: ldloc.1  */
                /* IL_22: ret  */
                return loc1;
            }
        }
    };
    /*  Enum..ctor()*/
    asm.x600006d = function _ctor(arg0)
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
                asm0.x6000178(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* static System.Int32 Environment.get_CurrentManagedThreadId()*/
    asm.x600006e = function get_CurrentManagedThreadId()
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.0  */
                /* IL_02: stloc.0  */
                loc0 = (0|0);
                /* IL_05: ldloc.0  */
                /* IL_06: ret  */
                return loc0;
            }
        }
    };;
    /* static System.String Environment.get_NewLine()*/
    asm.x600006f = function get_NewLine()
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldstr */
                /*  */
                /* IL_06: stloc.0  */
                loc0 = CILJS.new_string("\\n");
                /* IL_09: ldloc.0  */
                /* IL_0A: ret  */
                return loc0;
            }
        }
    };;
    /*  EventArgs..ctor()*/
    asm.x6000070 = function _ctor(arg0)
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
                
                /* IL_07: nop  */
                
                /* IL_08: ret  */
                return ;
            }
        }
    };;
    /* static  EventArgs..cctor()*/
    asm.x6000071_init = function ()
    {
        ((asm0)["System.EventArgs"]().init)();
        asm.x6000071 = asm.x6000071_;
    };;
    asm.x6000071 = function ()
    {
        asm.x6000071_init();
        return asm.x6000071_();
    };;
    asm.x6000071_ = function _cctor()
    {
        var t0;
        var in_block_0;
        var __pos__;
        
        if ((asm0)["System.EventArgs"]().FieldsInitialized){
            return;
        }
        (asm0)["System.EventArgs"]().FieldsInitialized = true;
        t0 = (asm0)["System.EventArgs"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                asm0.x6000071();
                /* IL_00: newobj Void .ctor() */
                /* IL_05: stsfld EventArgs Empty */
                t0.Empty = CILJS.newobj(t0,asm0.x6000070,[null]);
                /* IL_0A: ret  */
                return ;
            }
        }
    };
    /* System.Void EventHandler.Invoke(Object,EventArgs)*/
    asm.x6000073 = CILJS.delegate_invoke;;
    /* System.IAsyncResult EventHandler.BeginInvoke(Object,EventArgs,AsyncCallback,Object)*/
    asm.x6000074 = CILJS.delegate_begin_invoke;;
    /* System.Void EventHandler.EndInvoke(IAsyncResult)*/
    asm.x6000075 = CILJS.delegate_end_invoke;;
    /*  EventHandler..ctor(Object,IntPtr)*/
    asm.x6000072 = CILJS.delegate_ctor;;
    /* System.Int32 Exception.get_HResult()*/
    asm.x6000079 = function get_HResult(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld Int32 <HResult>k__BackingField */
                /* IL_06: ret  */
                return (arg0)["SystemException<HResult>k__BackingField"];
            }
        }
    };;
    /* System.Void Exception.set_HResult(Int32)*/
    asm.x600007a = function set_HResult(arg0, arg1)
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
                /* IL_02: stfld Int32 <HResult>k__BackingField */
                (arg0)["SystemException<HResult>k__BackingField"] = arg1;
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* System.String Exception.get_Message()*/
    asm.x600007b = function get_Message(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld String <Message>k__BackingField */
                /* IL_06: ret  */
                return (arg0)["SystemException<Message>k__BackingField"];
            }
        }
    };;
    /* System.Void Exception.set_Message(String)*/
    asm.x600007c = function set_Message(arg0, arg1)
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
                /* IL_02: stfld String <Message>k__BackingField */
                (arg0)["SystemException<Message>k__BackingField"] = arg1;
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* System.String Exception.ToString()*/
    asm.x600007d = function ToString(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: callvirt String get_Message() */
                /* IL_07: stloc.0  */
                loc0 = ((arg0.vtable)["asm0.x600007b"]())(arg0);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* System.Exception Exception.get_InnerException()*/
    asm.x600007e = function get_InnerException(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld Exception <InnerException>k__BackingField */
                /* IL_06: ret  */
                return (arg0)["SystemException<InnerException>k__BackingField"];
            }
        }
    };;
    /* System.Void Exception.set_InnerException(Exception)*/
    asm.x600007f = function set_InnerException(arg0, arg1)
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
                /* IL_02: stfld Exception <InnerException>k__BackingField */
                (arg0)["SystemException<InnerException>k__BackingField"] = arg1;
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /*  Exception..ctor()*/
    asm.x6000076 = function _ctor(arg0)
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
                
                /* IL_07: nop  */
                
                /* IL_08: ldarg.0  */
                /* IL_09: call Void init(System.Exception) */
                arg0.stack = new Error().stack;
                /* IL_0E: nop  */
                
                /* IL_0F: ret  */
                return ;
            }
        }
    };;
    /*  Exception..ctor(String)*/
    asm.x6000077 = function _ctor(arg0, arg1)
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
                asm0.x6000076(arg0);
                /* IL_06: nop  */
                
                /* IL_07: nop  */
                
                /* IL_08: ldarg.0  */
                /* IL_09: ldarg.1  */
                /* IL_0A: callvirt Void set_Message(System.String) */
                ((arg0.vtable)["asm0.x600007c"]())(arg0,arg1);
                /* IL_0F: nop  */
                
                /* IL_10: ret  */
                return ;
            }
        }
    };;
    /*  Exception..ctor(String,Exception)*/
    asm.x6000078 = function _ctor(arg0, arg1, arg2)
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
                asm0.x6000076(arg0);
                /* IL_06: nop  */
                
                /* IL_07: nop  */
                
                /* IL_08: ldarg.0  */
                /* IL_09: ldarg.1  */
                /* IL_0A: callvirt Void set_Message(System.String) */
                ((arg0.vtable)["asm0.x600007c"]())(arg0,arg1);
                /* IL_0F: nop  */
                
                /* IL_10: ldarg.0  */
                /* IL_11: ldarg.2  */
                /* IL_12: call Void set_InnerException(System.Exception) */
                asm0.x600007f(arg0,arg2);
                /* IL_17: nop  */
                
                /* IL_18: ret  */
                return ;
            }
        }
    };;
    /*  FlagsAttribute..ctor()*/
    asm.x6000081 = function _ctor(arg0)
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
                asm0.x600003e(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* TResult Func`2.Invoke(T)*/
    asm.x6000083 = CILJS.delegate_invoke;;
    /* System.IAsyncResult Func`2.BeginInvoke(T,AsyncCallback,Object)*/
    asm.x6000084 = CILJS.delegate_begin_invoke;;
    /* TResult Func`2.EndInvoke(IAsyncResult)*/
    asm.x6000085 = CILJS.delegate_end_invoke;;
    /*  Func`2..ctor(Object,IntPtr)*/
    asm.x6000082 = CILJS.delegate_ctor;;
    /* static System.Void GC.KeepAlive(Object)*/
    asm.x6000086 = function KeepAlive(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ret  */
                return ;
            }
        }
    };;
    /* static System.Void GC.SuppressFinalize(Object)*/
    asm.x6000087 = function SuppressFinalize(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ret  */
                return ;
            }
        }
    };;
    /* static System.IAsyncResult AsyncResult.CreateAsyncResult()*/
    asm.x600008c_init = function ()
    {
        ((asm0)["System.AsyncResult"]().init)();
        asm.x600008c = asm.x600008c_;
    };;
    asm.x600008c = function ()
    {
        asm.x600008c_init();
        return asm.x600008c_();
    };;
    asm.x600008c_ = function CreateAsyncResult()
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.AsyncResult"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: stloc.0  */
                loc0 = CILJS.newobj(t0,asm0.x6000091,[null]);
                /* IL_09: ldloc.0  */
                /* IL_0A: ret  */
                return loc0;
            }
        }
    };
    asm.CreateAsyncResult = asm.x600008c;
    /* System.Boolean AsyncResult.get_IsCompleted()*/
    asm.x600008d = function get_IsCompleted(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.1  */
                /* IL_02: stloc.0  */
                loc0 = (1|0);
                /* IL_05: ldloc.0  */
                /* IL_06: ret  */
                return loc0;
            }
        }
    };;
    /* System.Threading.WaitHandle AsyncResult.get_AsyncWaitHandle()*/
    asm.x600008e = function get_AsyncWaitHandle(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldnull  */
                /* IL_02: stloc.0  */
                loc0 = null;
                /* IL_05: ldloc.0  */
                /* IL_06: ret  */
                return loc0;
            }
        }
    };;
    /* System.Object AsyncResult.get_AsyncState()*/
    asm.x600008f = function get_AsyncState(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Object asyncState */
                /* IL_07: stloc.0  */
                loc0 = arg0.asyncState;
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* System.Boolean AsyncResult.get_CompletedSynchronously()*/
    asm.x6000090 = function get_CompletedSynchronously(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.1  */
                /* IL_02: stloc.0  */
                loc0 = (1|0);
                /* IL_05: ldloc.0  */
                /* IL_06: ret  */
                return loc0;
            }
        }
    };;
    /*  AsyncResult..ctor()*/
    asm.x6000091 = function _ctor(arg0)
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
    /* System.String Int16.ToString()*/
    asm.x6000097 = function ToString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Int16"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i2  */
                /* IL_03: box System.Int16 */
                /* IL_08: call String SignedPrimitiveToString(System.Object) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x60000c0(CILJS.make_box(arg0.r(),t0));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Int16.CompareTo(Object)*/
    asm.x6000098 = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: unbox.any System.Int16 */
                /* IL_08: call Int32 CompareTo(System.Int16) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x6000099(arg0,CILJS.unbox_any(arg1,(asm0)["System.Int16"]()));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Int16.CompareTo(Int16)*/
    asm.x6000099 = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i2  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldloc.0  */
                /* IL_05: ldarg.1  */
                /* IL_07: clt  */
                /* IL_08: stloc.1  */
                loc1 = ((loc0 < arg1) ? 1 : 0);
                /* IL_09: ldloc.1  */
                /* IL_0A: brfalse.s IL_10 */
                
                if ((!(loc1))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0C: ldc.i4.m1  */
                /* IL_0D: stloc.2  */
                loc2 = (-1|0);
                /* IL_0E: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x10:
                /* IL_10: ldloc.0  */
                /* IL_11: ldarg.1  */
                /* IL_13: cgt  */
                /* IL_14: stloc.3  */
                loc3 = ((loc0 > arg1) ? 1 : 0);
                /* IL_15: ldloc.3  */
                /* IL_16: brfalse.s IL_1C */
                
                if ((!(loc3))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.1  */
                /* IL_19: stloc.2  */
                loc2 = (1|0);
                /* IL_1A: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.0  */
                /* IL_1D: stloc.2  */
                loc2 = (0|0);
                case 0x20:
                /* IL_20: ldloc.2  */
                /* IL_21: ret  */
                return loc2;
            }
        }
    };;
    /* System.Boolean Int16.Equals(Int16)*/
    asm.x600009a = function Equals(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i2  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldarg.1  */
                /* IL_05: stloc.1  */
                loc1 = arg1;
                /* IL_06: ldloc.0  */
                /* IL_07: ldloc.1  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.2  */
                loc2 = ((loc0 === loc1) ? 1 : 0);
                /* IL_0D: ldloc.2  */
                /* IL_0E: ret  */
                return loc2;
            }
        }
    };;
    /* System.Boolean Int16.Equals(Object)*/
    asm.x600009b = function Equals(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Int16"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: isinst System.Int16 */
                /* IL_07: ldnull  */
                /* IL_09: cgt.un  */
                /* IL_0A: ldc.i4.0  */
                /* IL_0C: ceq  */
                /* IL_0D: stloc.0  */
                loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_0E: ldloc.0  */
                /* IL_0F: brfalse.s IL_15 */
                
                if ((!(loc0))){
                    __pos__ = 0x15;
                    continue;
                }
                /* IL_11: ldc.i4.0  */
                /* IL_12: stloc.1  */
                loc1 = (0|0);
                /* IL_13: br.s IL_24 */
                __pos__ = 0x24;
                continue;
                case 0x15:
                /* IL_15: ldarg.0  */
                /* IL_16: ldarg.1  */
                /* IL_17: unbox.any System.Int16 */
                /* IL_1C: call Boolean Equals(System.Int16) */
                /* IL_21: stloc.1  */
                loc1 = asm0.x600009a(arg0,CILJS.unbox_any(arg1,t0));
                case 0x24:
                /* IL_24: ldloc.1  */
                /* IL_25: ret  */
                return loc1;
            }
        }
    };;
    /* System.Int32 Int16.GetHashCode()*/
    asm.x600009c = function GetHashCode(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i2  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_06: ldloc.0  */
                /* IL_07: ret  */
                return loc0;
            }
        }
    };;
    /* System.String Int32.ToString()*/
    asm.x600009d = function ToString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Int32"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i4  */
                /* IL_03: box System.Int32 */
                /* IL_08: call String SignedPrimitiveToString(System.Object) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x60000c0(CILJS.make_box(arg0.r(),t0));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.String Int32.ToString(String)*/
    asm.x600009f_init = function (arg0, arg1)
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x600009f = asm.x600009f_;
    };;
    asm.x600009f = function (arg0, arg1)
    {
        asm.x600009f_init(arg0,arg1);
        return asm.x600009f_(arg0,arg1);
    };;
    asm.x600009f_ = function ToString(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm0)["System.NotSupportedException"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i4  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldarg.1  */
                /* IL_05: ldstr X */
                /* IL_0A: call Boolean op_Equality(System.String, System.String) */
                /* IL_0F: stloc.1  */
                loc1 = asm0.x6000132(arg1,CILJS.new_string("X"));
                /* IL_10: ldloc.1  */
                /* IL_11: brfalse.s IL_1C */
                
                if ((!(loc1))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_13: ldloc.0  */
                /* IL_14: call String toHex(System.Int32) */
                /* IL_19: stloc.2  */
                loc2 = CILJS.new_string(loc0.toString(16));
                /* IL_1A: br.s IL_22 */
                __pos__ = 0x22;
                continue;
                case 0x1C:
                /* IL_1C: newobj Void .ctor() */
                /* IL_21: throw  */
                throw CILJS.newobj(t0,asm0.x60000d9,[null]);
                case 0x22:
                /* IL_22: ldloc.2  */
                /* IL_23: ret  */
                return loc2;
            }
        }
    };
    /* System.Int32 Int32.CompareTo(Object)*/
    asm.x60000a0 = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: unbox.any System.Int32 */
                /* IL_08: call Int32 CompareTo(System.Int32) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x60000a1(arg0,CILJS.unbox_any(arg1,(asm0)["System.Int32"]()));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Int32.CompareTo(Int32)*/
    asm.x60000a1 = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i4  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldloc.0  */
                /* IL_05: ldarg.1  */
                /* IL_07: clt  */
                /* IL_08: stloc.1  */
                loc1 = ((loc0 < arg1) ? 1 : 0);
                /* IL_09: ldloc.1  */
                /* IL_0A: brfalse.s IL_10 */
                
                if ((!(loc1))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0C: ldc.i4.m1  */
                /* IL_0D: stloc.2  */
                loc2 = (-1|0);
                /* IL_0E: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x10:
                /* IL_10: ldloc.0  */
                /* IL_11: ldarg.1  */
                /* IL_13: cgt  */
                /* IL_14: stloc.3  */
                loc3 = ((loc0 > arg1) ? 1 : 0);
                /* IL_15: ldloc.3  */
                /* IL_16: brfalse.s IL_1C */
                
                if ((!(loc3))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.1  */
                /* IL_19: stloc.2  */
                loc2 = (1|0);
                /* IL_1A: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.0  */
                /* IL_1D: stloc.2  */
                loc2 = (0|0);
                case 0x20:
                /* IL_20: ldloc.2  */
                /* IL_21: ret  */
                return loc2;
            }
        }
    };;
    /* System.Boolean Int32.Equals(Object)*/
    asm.x60000a2 = function Equals(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Int32"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: isinst System.Int32 */
                /* IL_07: ldnull  */
                /* IL_09: cgt.un  */
                /* IL_0A: ldc.i4.0  */
                /* IL_0C: ceq  */
                /* IL_0D: stloc.0  */
                loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_0E: ldloc.0  */
                /* IL_0F: brfalse.s IL_15 */
                
                if ((!(loc0))){
                    __pos__ = 0x15;
                    continue;
                }
                /* IL_11: ldc.i4.0  */
                /* IL_12: stloc.1  */
                loc1 = (0|0);
                /* IL_13: br.s IL_24 */
                __pos__ = 0x24;
                continue;
                case 0x15:
                /* IL_15: ldarg.0  */
                /* IL_16: ldarg.1  */
                /* IL_17: unbox.any System.Int32 */
                /* IL_1C: call Boolean Equals(System.Int32) */
                /* IL_21: stloc.1  */
                loc1 = asm0.x60000a3(arg0,CILJS.unbox_any(arg1,t0));
                case 0x24:
                /* IL_24: ldloc.1  */
                /* IL_25: ret  */
                return loc1;
            }
        }
    };;
    /* System.Boolean Int32.Equals(Int32)*/
    asm.x60000a3 = function Equals(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i4  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldarg.1  */
                /* IL_05: stloc.1  */
                loc1 = arg1;
                /* IL_06: ldloc.0  */
                /* IL_07: ldloc.1  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.2  */
                loc2 = ((loc0 === loc1) ? 1 : 0);
                /* IL_0D: ldloc.2  */
                /* IL_0E: ret  */
                return loc2;
            }
        }
    };;
    /* System.Int32 Int32.GetHashCode()*/
    asm.x60000a4 = function GetHashCode(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i4  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_06: ldloc.0  */
                /* IL_07: ret  */
                return loc0;
            }
        }
    };;
    /* System.String Int64.ToString()*/
    asm.x60000a6_init = function (arg0)
    {
        ((asm0)["CilJs.JavaScript.String"]().init)();
        asm.x60000a6 = asm.x60000a6_;
    };;
    asm.x60000a6 = function (arg0)
    {
        asm.x60000a6_init(arg0);
        return asm.x60000a6_(arg0);
    };;
    asm.x60000a6_ = function ToString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var in_block_1;
        var loc5;
        var loc6;
        var loc7;
        var loc8;
        t0 = (asm0)["CilJs.JavaScript.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i8  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldc.i4.s 10 */
                /* IL_06: conv.i8  */
                /* IL_07: stloc.1  */
                loc1 = CILJS.conv_i8((10|0));
                asm0.x60001ef();
                /* IL_08: ldsfld String Emtpy */
                /* IL_0D: stloc.2  */
                loc2 = t0.Emtpy;
                asm0.x60001ef();
                /* IL_0E: ldsfld String Emtpy */
                /* IL_13: stloc.3  */
                loc3 = t0.Emtpy;
                /* IL_14: ldloc.0  */
                /* IL_15: ldc.i4.0  */
                /* IL_16: conv.i8  */
                /* IL_18: clt  */
                /* IL_19: stloc.s 4 */
                loc4 = asm0.Int64_LessThan(loc0,CILJS.conv_i8((0|0)));
                /* IL_1B: ldloc.s 4 */
                /* IL_1D: brfalse.s IL_29 */
                
                if ((!(loc4))){
                    __pos__ = 0x29;
                    continue;
                }
                /* IL_1F: nop  */
                
                /* IL_20: ldc.i4.s 45 */
                /* IL_22: call String FromCharCode(System.Char) */
                /* IL_27: stloc.3  */
                loc3 = String.fromCharCode((45|0));
                /* IL_28: nop  */
                
                case 0x29:
                case 0x40:
                in_block_1 = true;
                
                if (__pos__ > 0x5C){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x29){
                    __pos__ = 0x29;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x29:
                        /* IL_29: nop  */
                        
                        /* IL_2A: ldloc.0  */
                        /* IL_2B: ldloc.1  */
                        /* IL_2C: rem  */
                        /* IL_2D: stloc.s 5 */
                        loc5 = asm0.Int64_Modulus(loc0,loc1);
                        /* IL_2F: ldloc.s 5 */
                        /* IL_31: ldc.i4.0  */
                        /* IL_32: conv.i8  */
                        /* IL_34: clt  */
                        /* IL_35: stloc.s 6 */
                        loc6 = asm0.Int64_LessThan(loc5,CILJS.conv_i8((0|0)));
                        /* IL_37: ldloc.s 6 */
                        /* IL_39: brfalse.s IL_40 */
                        
                        if ((!(loc6))){
                            __pos__ = 0x40;
                            continue;
                        }
                        /* IL_3B: ldloc.s 5 */
                        /* IL_3D: neg  */
                        /* IL_3E: stloc.s 5 */
                        loc5 = asm0.Int64_UnaryNegation(loc5);
                        case 0x40:
                        /* IL_40: ldloc.s 5 */
                        /* IL_42: call String GetLowString(System.Int64) */
                        /* IL_47: ldloc.2  */
                        /* IL_48: call String op_Addition(CilJs.JavaScript.String, CilJs.JavaScript.String) */
                        /* IL_4D: stloc.2  */
                        loc2 = loc5[0].toString() + loc2;
                        /* IL_4E: ldloc.0  */
                        /* IL_4F: ldloc.1  */
                        /* IL_50: div  */
                        /* IL_51: stloc.0  */
                        loc0 = asm0.Int64_Division(loc0,loc1);
                        /* IL_52: nop  */
                        
                        /* IL_53: ldloc.0  */
                        /* IL_54: ldc.i4.0  */
                        /* IL_55: conv.i8  */
                        /* IL_57: cgt.un  */
                        /* IL_58: stloc.s 7 */
                        loc7 = asm0.UInt64_GreaterThan(loc0,CILJS.conv_i8((0|0)));
                        /* IL_5A: ldloc.s 7 */
                        /* IL_5C: brtrue.s IL_29 */
                        
                        if (loc7){
                            __pos__ = 0x29;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_5E: ldloc.3  */
                /* IL_5F: ldloc.2  */
                /* IL_60: call String op_Addition(CilJs.JavaScript.String, CilJs.JavaScript.String) */
                /* IL_65: call String op_Explicit(CilJs.JavaScript.String) */
                /* IL_6A: stloc.s 8 */
                loc8 = CILJS.new_string(loc3 + loc2);
                /* IL_6E: ldloc.s 8 */
                /* IL_70: ret  */
                return loc8;
            }
        }
    };
    /* System.Int32 Int64.GetHashCode()*/
    asm.x60000a7 = function GetHashCode(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i8  */
                /* IL_03: call Int32 GetLow(System.Int64) */
                /* IL_08: stloc.0  */
                loc0 = arg0.r()[0];
                /* IL_0B: ldloc.0  */
                /* IL_0C: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Int64 Int64.op_Addition(Int64,Int64)*/
    asm.x60000aa = 
            function XInt64_Addition(lhs, rhs) 
            {
                var x = new Uint16Array(lhs.buffer);
                var y = new Uint16Array(rhs.buffer);                

                var a = (x[0] + y[0]) | 0;
                var o1 = (a & 0xff0000) >> 16;
                var b = (o1 + x[1] + y[1]) | 0;
                var o2 = (b & 0xff0000) >> 16;
                var c = (o2 + x[2] + y[2]) | 0;
                var o3 = (c & 0xff0000) >> 16;
                var d = (o3 + x[3] + y[3]) | 0;

                return new Uint32Array(new Uint16Array([a & 0xffff, b & 0xffff, c & 0xffff, d & 0xffff]).buffer);
            };;
    asm.XInt64_Addition = asm.x60000aa;
    /* static System.Int64 Int64.op_Subtraction(Int64,Int64)*/
    asm.x60000ab = 
            function XInt64_Subtraction(lhs, rhs) 
            {
                if (lhs[0] >= rhs[0] && rhs[1] == 0)
                    return new Uint32Array([lhs[0]-rhs[0], lhs[1]]);

                var x = new Uint16Array(lhs.buffer);
                var y = new Uint16Array(rhs.buffer);

                var a = (x[0] - y[0]) | 0;
                var u = 0;
                if (a < 0) { a = 0x10000 + a; u = -1; }

                var b = (u + ((x[1] - y[1]) | 0)) | 0;
                u = 0;
                if (b < 0) { b = 0x10000 + b; u = -1; }

                var c = (u + ((x[2] - y[2]) | 0)) | 0;
                u = 0;
                if (c < 0) { c = 0x10000 + c; u = -1; }

                var d = (u + ((x[3] - y[3]) | 0)) | 0;
                if (d < 0) { d = 0x10000 + d; }
                
                return new Uint32Array(new Uint16Array([a & 0xffff, b & 0xffff, c & 0xffff, d & 0xffff]).buffer);
            };;
    asm.XInt64_Subtraction = asm.x60000ab;
    /* static System.Int64 Int64.op_BitwiseOr(Int64,Int64)*/
    asm.x60000ac = 
            function XInt64_BitwiseOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] | rhs[0], lhs[1] | rhs[1]]);
            }
            ;;
    asm.XInt64_BitwiseOr = asm.x60000ac;
    /* static System.Int64 Int64.op_BitwiseAnd(Int64,Int64)*/
    asm.x60000ad = 
            function XInt64_BitwiseAnd(lhs, rhs) 
            {
                return new Uint32Array([lhs[0] & rhs[0], lhs[1] & rhs[1]]);
            }
            ;;
    asm.XInt64_BitwiseAnd = asm.x60000ad;
    /* static System.Int64 Int64.op_ExclusiveOr(Int64,Int64)*/
    asm.x60000ae = 
            function XInt64_ExclusiveOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] ^ rhs[0], lhs[1] ^ rhs[1]]);
            }
            ;;
    asm.XInt64_ExclusiveOr = asm.x60000ae;
    /* static System.Int64 Int64.op_OnesComplement(Int64)*/
    asm.x60000af = 
            function XInt64_OnesComplement(a)
            {
                return new Uint32Array([~a[0], ~a[1]]);
            }
            ;;
    asm.XInt64_OnesComplement = asm.x60000af;
    /* static System.Int64 Int64.op_LeftShift(Int64,Int32)*/
    asm.x60000b0 = 
            function XInt64_LeftShift(lhs, n)
            {
                n = n & 0x3f;

                var maxShift = 8;
                if (n > maxShift) {
                    return asm0.XInt64_LeftShift(
                           asm0.XInt64_LeftShift(lhs, maxShift), n - maxShift);
                }
          
                var x = new Uint16Array(lhs.buffer);

                var a = (x[0] << n);
                var b = (x[1] << n) | ((a >>> 16) & 0xffff);
                var c = (x[2] << n) | ((b >>> 16) & 0xffff);
                var d = (x[3] << n) | ((c >>> 16) & 0xffff);

                return new Uint32Array(new Uint16Array([a & 0xffff, b & 0xffff, c & 0xffff, d & 0xffff]).buffer);
            }
            ;;
    asm.XInt64_LeftShift = asm.x60000b0;
    /* static System.Int64 Int64.op_Equality(Int64,Int64)*/
    asm.x60000b1 = 
            function XInt64_Equality(lhs, rhs)
            {
                return (lhs[0] === rhs[0] && lhs[1] === rhs[1]) ? 1 : 0;
            }
            ;;
    asm.XInt64_Equality = asm.x60000b1;
    /* static System.Int64 Int64.op_Inequality(Int64,Int64)*/
    asm.x60000b2 = 
            function XInt64_Inequality(lhs, rhs)
            {
                return (lhs[0] !== rhs[0] && lhs[1] !== rhs[1]) ? 1 : 0;
            }
            ;;
    asm.XInt64_Inequality = asm.x60000b2;
    /* static System.Int64 Int64.op_Decrement(Int64)*/
    asm.x60000b3 = function op_Decrement(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldc.i4.1  */
                /* IL_03: conv.i8  */
                /* IL_04: sub  */
                /* IL_05: stloc.0  */
                loc0 = asm0.XInt64_Subtraction(arg0,CILJS.conv_i8((1|0)));
                /* IL_08: ldloc.0  */
                /* IL_09: ret  */
                return loc0;
            }
        }
    };;
    asm.XInt64_Decrement = asm.x60000b3;
    /* static System.Int64 Int64.op_Increment(Int64)*/
    asm.x60000b4 = function op_Increment(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldc.i4.1  */
                /* IL_03: conv.i8  */
                /* IL_04: add  */
                /* IL_05: stloc.0  */
                loc0 = asm0.XInt64_Addition(arg0,CILJS.conv_i8((1|0)));
                /* IL_08: ldloc.0  */
                /* IL_09: ret  */
                return loc0;
            }
        }
    };;
    asm.XInt64_Increment = asm.x60000b4;
    /* static System.Int64 Int64.op_RightShift(Int64,Int32)*/
    asm.x60000b5 = 
            function Int64_RightShift(a, n) {
                // Int64 (signed) uses arithmetic shift, UIn64 (unsigned) uses logical shift

                if (n === 0) {
                    var result2 = a;
                } else if (n > 32) {
                    result2 = asm0.Int64_RightShift(asm0.Int64_RightShift(a, 32), n - 32);
                } else {
                    var unsignedShift = asm0.UInt64_RightShift(a, n);

                    if (asm0.Int64_isNegative(a)) {
                        var outshift = asm0.UInt64_RightShift(new Uint32Array([0xffffff, 0xffffff]), n);
                        var inshift = asm0.XInt64_LeftShift(outshift, 64 - n);
                        var uresult = asm0.UInt64_BitwiseOr(unsignedShift, inshift);
                    } else {
                        uresult = unsignedShift;
                    }
                    result2 = uresult;
                }
                return result2;
            };;
    asm.Int64_RightShift = asm.x60000b5;
    /* static System.Int64 Int64.op_Division(Int64,Int32)*/
    asm.x60000b6 = 
            function Int64_Division(n, d) {
                if (d[0] === 0 && d[1] === 0)
                    throw new Error("System.DivideByZeroException");

                if (asm0.Int64_isNegative(d))
                    return asm0.Int64_Division(
                      asm0.Int64_UnaryNegation(n), asm0.Int64_UnaryNegation(d));

                else if (asm0.Int64_isNegative(n)) {
                    if (asm0.XInt64_Equality(asm0.Int64_UnaryNegation(n), n)) { 
                        n = asm0.XInt64_Addition(n, d);
                        return asm0.XInt64_Subtraction(
                            asm0.Int64_UnaryNegation(asm0.Int64_Division(asm0.Int64_UnaryNegation(n), d)),
                            new Uint32Array([1, 0]));
                    }
                    else {
                        return asm0.Int64_UnaryNegation(asm0.Int64_Division(asm0.Int64_UnaryNegation(n), d));
                    }
                }
                else
                    return asm0.UInt64_Division(n, d);
            };;
    asm.Int64_Division = asm.x60000b6;
    /* static System.Int64 Int64.op_Modulus(Int64,Int32)*/
    asm.x60000b7 = 
            function Int64_Modulus(n, d) {
                if (d[0] === 0 && d[1] === 0)
                    throw new Error("System.DivideByZeroException");

                if (asm0.Int64_isNegative(d)) {
                    return asm0.Int64_Modulus(
                      n, asm0.Int64_UnaryNegation(d));
                }
                else if (asm0.Int64_isNegative(n)) {
                    if (asm0.XInt64_Equality(asm0.Int64_UnaryNegation(n), n)) { 
                        n = asm0.XInt64_Addition(n, d);
                    }
                    return asm0.Int64_UnaryNegation(asm0.Int64_Modulus(asm0.Int64_UnaryNegation(n), d));
                }
                else
                    return asm0.UInt64_Modulus(n, d);
            };;
    asm.Int64_Modulus = asm.x60000b7;
    /* static System.Boolean Int64.op_GreaterThan(Int64,Int64)*/
    asm.x60000b8 = 
            function Int64_GreaterThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_GreaterThan(a, b);
                else
                    return bn ? 1 : 0;
            };;
    asm.Int64_GreaterThan = asm.x60000b8;
    /* static System.Boolean Int64.op_LessThan(Int64,Int64)*/
    asm.x60000b9 = 
            function Int64_LessThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_LessThan(a, b);
                else
                    return an ? 1 : 0;
            };;
    asm.Int64_LessThan = asm.x60000b9;
    /* static System.Int64 Int64.op_UnaryNegation(Int64)*/
    asm.x60000ba = 
            function Int64_UnaryNegation (a) {
                var complement = asm0.XInt64_Subtraction(new Uint32Array([0xffffffff, 0xffffffff]), a);
                return asm0.XInt64_Addition(complement, new Uint32Array([1, 0]));
            };;
    asm.Int64_UnaryNegation = asm.x60000ba;
    /* static System.Boolean Int64.isNegative(Int64)*/
    asm.x60000bb = 
            function isNegative(n) {
                return asm0.UInt64_GreaterThan(n, [0xffffffff, 0x7fffffff]);
            };;
    asm.Int64_isNegative = asm.x60000bb;
    /* System.Int32 Int64.CompareTo(Object)*/
    asm.x60000bc = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: unbox.any System.Int64 */
                /* IL_08: call Int32 CompareTo(System.Int64) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x60000bd(arg0,CILJS.unbox_any(arg1,(asm0)["System.Int64"]()));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Int64.CompareTo(Int64)*/
    asm.x60000bd = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i8  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldloc.0  */
                /* IL_05: ldarg.1  */
                /* IL_07: clt  */
                /* IL_08: stloc.1  */
                loc1 = asm0.Int64_LessThan(loc0,arg1);
                /* IL_09: ldloc.1  */
                /* IL_0A: brfalse.s IL_10 */
                
                if ((!(loc1))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0C: ldc.i4.m1  */
                /* IL_0D: stloc.2  */
                loc2 = (-1|0);
                /* IL_0E: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x10:
                /* IL_10: ldloc.0  */
                /* IL_11: ldarg.1  */
                /* IL_13: cgt  */
                /* IL_14: stloc.3  */
                loc3 = asm0.Int64_GreaterThan(loc0,arg1);
                /* IL_15: ldloc.3  */
                /* IL_16: brfalse.s IL_1C */
                
                if ((!(loc3))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.1  */
                /* IL_19: stloc.2  */
                loc2 = (1|0);
                /* IL_1A: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.0  */
                /* IL_1D: stloc.2  */
                loc2 = (0|0);
                case 0x20:
                /* IL_20: ldloc.2  */
                /* IL_21: ret  */
                return loc2;
            }
        }
    };;
    /* System.Boolean Int64.Equals(Object)*/
    asm.x60000be = function Equals(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Int64"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: isinst System.Int64 */
                /* IL_07: ldnull  */
                /* IL_09: cgt.un  */
                /* IL_0A: ldc.i4.0  */
                /* IL_0C: ceq  */
                /* IL_0D: stloc.0  */
                loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_0E: ldloc.0  */
                /* IL_0F: brfalse.s IL_15 */
                
                if ((!(loc0))){
                    __pos__ = 0x15;
                    continue;
                }
                /* IL_11: ldc.i4.0  */
                /* IL_12: stloc.1  */
                loc1 = (0|0);
                /* IL_13: br.s IL_24 */
                __pos__ = 0x24;
                continue;
                case 0x15:
                /* IL_15: ldarg.0  */
                /* IL_16: ldarg.1  */
                /* IL_17: unbox.any System.Int64 */
                /* IL_1C: call Boolean Equals(System.Int64) */
                /* IL_21: stloc.1  */
                loc1 = asm0.x60000bf(arg0,CILJS.unbox_any(arg1,t0));
                case 0x24:
                /* IL_24: ldloc.1  */
                /* IL_25: ret  */
                return loc1;
            }
        }
    };;
    /* System.Boolean Int64.Equals(Int64)*/
    asm.x60000bf = function Equals(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i8  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldarg.1  */
                /* IL_05: stloc.1  */
                loc1 = arg1;
                /* IL_06: ldloc.0  */
                /* IL_07: ldloc.1  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.2  */
                loc2 = asm0.XInt64_Equality(loc0,loc1);
                /* IL_0D: ldloc.2  */
                /* IL_0E: ret  */
                return loc2;
            }
        }
    };;
    /* static System.String InternalFormatting.SignedPrimitiveToString(Object)*/
    asm.x60000c0 = function(o) { return CILJS.new_string(o.boxed.toString()); };;
    /* static System.String InternalFormatting.UnsignedPrimitiveToString(Object,Int32)*/
    asm.x60000c1 = 
            function(o, size) {
                var b = o.boxed;
                if (b < 0) {
                    var max = 0xffffffff >>> (32 - size);
                    b = max + (b + 1);
                }
                return CILJS.new_string(b.toString());
            };;
    /* System.String IntPtr.ToString()*/
    asm.x60000c2_init = function (arg0)
    {
        ((asm0)["System.IntPtr"]().init)();
        asm.x60000c2 = asm.x60000c2_;
    };;
    asm.x60000c2 = function (arg0)
    {
        asm.x60000c2_init(arg0);
        return asm.x60000c2_(arg0);
    };;
    asm.x60000c2_ = function ToString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.IntPtr"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i  */
                /* IL_03: box System.IntPtr */
                /* IL_08: call String SignedPrimitiveToString(System.Object) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x60000c0(CILJS.make_box(arg0.r(),t0));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };
    /*  InvalidCastException..ctor()*/
    asm.x60000c3 = function _ctor(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldstr Cannot cast from source type to destination type. */
                /* IL_06: call Void .ctor(System.String) */
                asm0.x6000077(arg0,CILJS.new_string("Cannot cast from source type to destination type."));
                /* IL_0B: nop  */
                
                /* IL_0C: nop  */
                
                /* IL_0D: ret  */
                return ;
            }
        }
    };;
    /*  InvalidOperationException..ctor()*/
    asm.x60000c4 = function _ctor(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldstr Operation is not valid due to the current state of the object */
                /* IL_06: call Void .ctor(System.String) */
                asm0.x6000077(arg0,CILJS.new_string("Operation is not valid due to the current state of the object"));
                /* IL_0B: nop  */
                
                /* IL_0C: nop  */
                
                /* IL_0D: ret  */
                return ;
            }
        }
    };;
    /*  InvalidOperationException..ctor(Exception)*/
    asm.x60000c5 = function _ctor(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldstr Operation is not valid due to the current state of the object */
                /* IL_06: ldarg.1  */
                /* IL_07: call Void .ctor(System.String, System.Exception) */
                asm0.x6000078(arg0,CILJS.new_string("Operation is not valid due to the current state of the object"),arg1);
                /* IL_0C: nop  */
                
                /* IL_0D: nop  */
                
                /* IL_0E: ret  */
                return ;
            }
        }
    };;
    /*  InvalidOperationException..ctor(String,Exception)*/
    asm.x60000c6 = function _ctor(arg0, arg1, arg2)
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
                /* IL_02: ldarg.2  */
                /* IL_03: call Void .ctor(System.String, System.Exception) */
                asm0.x6000078(arg0,arg1,arg2);
                /* IL_08: nop  */
                
                /* IL_09: nop  */
                
                /* IL_0A: ret  */
                return ;
            }
        }
    };;
    /*  InvalidOperationException..ctor(String)*/
    asm.x60000c7 = function _ctor(arg0, arg1)
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
                /* IL_02: call Void .ctor(System.String) */
                asm0.x6000077(arg0,arg1);
                /* IL_07: nop  */
                
                /* IL_08: nop  */
                
                /* IL_09: ret  */
                return ;
            }
        }
    };;
    /* static System.Int64 Math.Max(Int64,Int64)*/
    asm.x60000cc = function Max(arg0, arg1)
    {
        var st_02;
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: bgt.s IL_08 */
                
                if (asm0.Int64_GreaterThan(arg0,arg1)){
                    __pos__ = 0x8;
                    continue;
                }
                /* IL_05: ldarg.1  */
                st_02 = arg1;
                /* IL_06: br.s IL_09 */
                __pos__ = 0x9;
                continue;
                case 0x8:
                /* IL_08: ldarg.0  */
                st_02 = arg0;
                case 0x9:
                /* IL_09: stloc.0  */
                loc0 = st_02;
                /* IL_0C: ldloc.0  */
                /* IL_0D: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Int64 Math.Min(Int64,Int64)*/
    asm.x60000d0 = function Min(arg0, arg1)
    {
        var st_02;
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: blt.s IL_08 */
                
                if (asm0.Int64_LessThan(arg0,arg1)){
                    __pos__ = 0x8;
                    continue;
                }
                /* IL_05: ldarg.1  */
                st_02 = arg1;
                /* IL_06: br.s IL_09 */
                __pos__ = 0x9;
                continue;
                case 0x8:
                /* IL_08: ldarg.0  */
                st_02 = arg0;
                case 0x9:
                /* IL_09: stloc.0  */
                loc0 = st_02;
                /* IL_0C: ldloc.0  */
                /* IL_0D: ret  */
                return loc0;
            }
        }
    };;
    /*  Math..ctor()*/
    asm.x60000d3 = function _ctor(arg0)
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
    /* static System.Delegate MulticastDelegate.CreateMulticast(Delegate[])*/
    asm.x60000d4 = 
            function (list) { 

                var f = function () {
                    var result;
                    var arr = list.jsarr;
                    for (var i=0; i<arr.length; i++) {
                        var delegate = arr[i];
                        var m = delegate._methodPtr;
                        var t = delegate._target;
                        var args = [];
                        if (t != null)
                            args.push(t);
                        for (var j=1; j<arguments.length; j++)
                            args.push(arguments[j]);
                        result = m.apply(null, args)
                    }
                    return result;
                };
                
                var md = new list.jsarr[0].constructor();
                md._methodPtr = f;
                md._invocationList = list;
                return md;
            }
            ;;
    /* System.Delegate MulticastDelegate.CombineImpl(Delegate)*/
    asm.x60000d5 = function CombineImpl(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc1;
        var loc0;
        var loc2;
        var in_block_1;
        var loc3;
        var loc4;
        t0 = (asm0)["System.Delegate"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Delegate[] _invocationList */
                /* IL_07: ldnull  */
                /* IL_09: cgt.un  */
                /* IL_0A: stloc.1  */
                loc1 = ((arg0._invocationList !== null) ? 1 : 0);
                /* IL_0B: ldloc.1  */
                /* IL_0C: brfalse.s IL_4C */
                
                if ((!(loc1))){
                    __pos__ = 0x4C;
                    continue;
                }
                /* IL_0E: nop  */
                
                /* IL_0F: ldarg.0  */
                /* IL_10: ldfld Delegate[] _invocationList */
                /* IL_15: ldlen  */
                /* IL_16: conv.i4  */
                /* IL_17: ldc.i4.1  */
                /* IL_18: add  */
                /* IL_19: newarr System.Delegate */
                /* IL_1E: stloc.0  */
                loc0 = CILJS.new_array(t0,((arg0._invocationList.jsarr.length | (0|0)) + (1|0)) | (0|0));
                /* IL_1F: ldc.i4.0  */
                /* IL_20: stloc.2  */
                loc2 = (0|0);
                /* IL_21: br.s IL_32 */
                __pos__ = 0x32;
                continue;
                case 0x23:
                case 0x32:
                in_block_1 = true;
                
                if (__pos__ > 0x3F){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x23){
                    __pos__ = 0x23;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x23:
                        /* IL_23: ldloc.0  */
                        /* IL_24: ldloc.2  */
                        /* IL_25: ldarg.0  */
                        /* IL_26: ldfld Delegate[] _invocationList */
                        /* IL_2B: ldloc.2  */
                        /* IL_2C: ldelem.ref  */
                        /* IL_2D: stelem.ref  */
                        CILJS.stelem_ref(loc0,loc2,CILJS.ldelem_ref(arg0._invocationList,loc2));
                        /* IL_2E: ldloc.2  */
                        /* IL_2F: ldc.i4.1  */
                        /* IL_30: add  */
                        /* IL_31: stloc.2  */
                        loc2 = (loc2 + (1|0)) | (0|0);
                        case 0x32:
                        /* IL_32: ldloc.2  */
                        /* IL_33: ldarg.0  */
                        /* IL_34: ldfld Delegate[] _invocationList */
                        /* IL_39: ldlen  */
                        /* IL_3A: conv.i4  */
                        /* IL_3C: clt  */
                        /* IL_3D: stloc.3  */
                        loc3 = ((loc2 < (arg0._invocationList.jsarr.length | (0|0))) ? 1 : 0);
                        /* IL_3E: ldloc.3  */
                        /* IL_3F: brtrue.s IL_23 */
                        
                        if (loc3){
                            __pos__ = 0x23;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_41: ldloc.0  */
                /* IL_42: ldloc.0  */
                /* IL_43: ldlen  */
                /* IL_44: conv.i4  */
                /* IL_45: ldc.i4.1  */
                /* IL_46: sub  */
                /* IL_47: ldarg.1  */
                /* IL_48: stelem.ref  */
                CILJS.stelem_ref(loc0,((loc0.jsarr.length | (0|0)) - (1|0)) | (0|0),arg1);
                /* IL_49: nop  */
                
                /* IL_4A: br.s IL_5D */
                __pos__ = 0x5D;
                continue;
                case 0x4C:
                /* IL_4C: nop  */
                
                /* IL_4D: ldc.i4.2  */
                /* IL_4E: newarr System.Delegate */
                /* IL_53: stloc.0  */
                loc0 = CILJS.new_array(t0,(2|0));
                /* IL_54: ldloc.0  */
                /* IL_55: ldc.i4.0  */
                /* IL_56: ldarg.0  */
                /* IL_57: stelem.ref  */
                CILJS.stelem_ref(loc0,(0|0),arg0);
                /* IL_58: ldloc.0  */
                /* IL_59: ldc.i4.1  */
                /* IL_5A: ldarg.1  */
                /* IL_5B: stelem.ref  */
                CILJS.stelem_ref(loc0,(1|0),arg1);
                /* IL_5C: nop  */
                
                case 0x5D:
                /* IL_5D: ldloc.0  */
                /* IL_5E: call Delegate CreateMulticast(System.Delegate[]) */
                /* IL_63: stloc.s 4 */
                loc4 = asm0.x60000d4(loc0);
                /* IL_67: ldloc.s 4 */
                /* IL_69: ret  */
                return loc4;
            }
        }
    };;
    /* System.Delegate MulticastDelegate.RemoveImpl(Delegate)*/
    asm.x60000d6 = function RemoveImpl(arg0, arg1)
    {
        var t0;
        var st_4B;
        var st_4C;
        var st_4D;
        var st_4E;
        var st_4F;
        var st_50;
        var st_51;
        var st_52;
        var st_53;
        var st_54;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc5;
        var in_block_1;
        var loc6;
        var loc7;
        var loc8;
        var loc9;
        var loc10;
        var loc11;
        var loc12;
        var loc4;
        var loc13;
        var loc14;
        var loc15;
        var loc16;
        t0 = (asm0)["System.Delegate"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Delegate[] _invocationList */
                /* IL_07: ldnull  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.0  */
                loc0 = ((arg0._invocationList === null) ? 1 : 0);
                /* IL_0B: ldloc.0  */
                /* IL_0C: brfalse.s IL_28 */
                
                if ((!(loc0))){
                    __pos__ = 0x28;
                    continue;
                }
                /* IL_0E: nop  */
                
                /* IL_0F: ldarg.1  */
                /* IL_10: ldarg.0  */
                /* IL_11: call Boolean op_Equality(System.Delegate, System.Delegate) */
                /* IL_16: stloc.1  */
                loc1 = asm0.x6000062(arg1,arg0);
                /* IL_17: ldloc.1  */
                /* IL_18: brfalse.s IL_21 */
                
                if ((!(loc1))){
                    __pos__ = 0x21;
                    continue;
                }
                /* IL_1A: ldnull  */
                /* IL_1B: stloc.2  */
                loc2 = null;
                /* IL_1C: br IL_114 */
                __pos__ = 0x114;
                continue;
                case 0x21:
                /* IL_21: ldarg.0  */
                /* IL_22: stloc.2  */
                loc2 = arg0;
                /* IL_23: br IL_114 */
                __pos__ = 0x114;
                continue;
                case 0x28:
                /* IL_28: nop  */
                
                /* IL_29: ldc.i4.0  */
                /* IL_2A: stloc.3  */
                loc3 = (0|0);
                /* IL_2B: ldc.i4.0  */
                /* IL_2C: stloc.s 5 */
                loc5 = (0|0);
                /* IL_2E: br.s IL_4F */
                __pos__ = 0x4F;
                continue;
                case 0x30:
                case 0x49:
                case 0x4F:
                in_block_1 = true;
                
                if (__pos__ > 0x5F){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x30){
                    __pos__ = 0x30;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x30:
                        /* IL_30: ldarg.0  */
                        /* IL_31: ldfld Delegate[] _invocationList */
                        /* IL_36: ldloc.s 5 */
                        /* IL_38: ldelem.ref  */
                        /* IL_39: ldarg.1  */
                        /* IL_3A: call Boolean op_Inequality(System.Delegate, System.Delegate) */
                        /* IL_3F: stloc.s 6 */
                        loc6 = asm0.x6000063(CILJS.ldelem_ref(arg0._invocationList,loc5),arg1);
                        /* IL_41: ldloc.s 6 */
                        /* IL_43: brfalse.s IL_49 */
                        
                        if ((!(loc6))){
                            __pos__ = 0x49;
                            continue;
                        }
                        /* IL_45: ldloc.3  */
                        /* IL_46: ldc.i4.1  */
                        /* IL_47: add  */
                        /* IL_48: stloc.3  */
                        loc3 = (loc3 + (1|0)) | (0|0);
                        case 0x49:
                        /* IL_49: ldloc.s 5 */
                        /* IL_4B: ldc.i4.1  */
                        /* IL_4C: add  */
                        /* IL_4D: stloc.s 5 */
                        loc5 = (loc5 + (1|0)) | (0|0);
                        case 0x4F:
                        /* IL_4F: ldloc.s 5 */
                        /* IL_51: ldarg.0  */
                        /* IL_52: ldfld Delegate[] _invocationList */
                        /* IL_57: ldlen  */
                        /* IL_58: conv.i4  */
                        /* IL_5A: clt  */
                        /* IL_5B: stloc.s 7 */
                        loc7 = ((loc5 < (arg0._invocationList.jsarr.length | (0|0))) ? 1 : 0);
                        /* IL_5D: ldloc.s 7 */
                        /* IL_5F: brtrue.s IL_30 */
                        
                        if (loc7){
                            __pos__ = 0x30;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_61: ldloc.3  */
                /* IL_62: ldc.i4.0  */
                /* IL_64: ceq  */
                /* IL_65: stloc.s 8 */
                loc8 = ((loc3 === (0|0)) ? 1 : 0);
                /* IL_67: ldloc.s 8 */
                /* IL_69: brfalse.s IL_72 */
                
                if ((!(loc8))){
                    __pos__ = 0x72;
                    continue;
                }
                /* IL_6B: ldnull  */
                /* IL_6C: stloc.2  */
                loc2 = null;
                /* IL_6D: br IL_114 */
                __pos__ = 0x114;
                continue;
                case 0x72:
                /* IL_72: ldloc.3  */
                /* IL_73: ldc.i4.1  */
                /* IL_75: ceq  */
                /* IL_76: stloc.s 9 */
                loc9 = ((loc3 === (1|0)) ? 1 : 0);
                /* IL_78: ldloc.s 9 */
                /* IL_7A: brfalse.s IL_BA */
                
                if ((!(loc9))){
                    __pos__ = 0xBA;
                    continue;
                }
                /* IL_7C: ldc.i4.0  */
                /* IL_7D: stloc.s 10 */
                loc10 = (0|0);
                /* IL_7F: br.s IL_A8 */
                __pos__ = 0xA8;
                continue;
                case 0x81:
                case 0xA2:
                case 0xA8:
                in_block_1 = true;
                
                if (__pos__ > 0xB8){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x81){
                    __pos__ = 0x81;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x81:
                        /* IL_81: ldarg.0  */
                        /* IL_82: ldfld Delegate[] _invocationList */
                        /* IL_87: ldloc.s 10 */
                        /* IL_89: ldelem.ref  */
                        /* IL_8A: ldarg.1  */
                        /* IL_8B: call Boolean op_Inequality(System.Delegate, System.Delegate) */
                        /* IL_90: stloc.s 11 */
                        loc11 = asm0.x6000063(CILJS.ldelem_ref(arg0._invocationList,loc10),arg1);
                        /* IL_92: ldloc.s 11 */
                        /* IL_94: brfalse.s IL_A2 */
                        
                        if ((!(loc11))){
                            __pos__ = 0xA2;
                            continue;
                        }
                        /* IL_96: ldarg.0  */
                        /* IL_97: ldfld Delegate[] _invocationList */
                        /* IL_9C: ldloc.s 10 */
                        /* IL_9E: ldelem.ref  */
                        /* IL_9F: stloc.2  */
                        loc2 = CILJS.ldelem_ref(arg0._invocationList,loc10);
                        /* IL_A0: br.s IL_114 */
                        __pos__ = 0x114;
                        continue;
                        case 0xA2:
                        /* IL_A2: ldloc.s 10 */
                        /* IL_A4: ldc.i4.1  */
                        /* IL_A5: add  */
                        /* IL_A6: stloc.s 10 */
                        loc10 = (loc10 + (1|0)) | (0|0);
                        case 0xA8:
                        /* IL_A8: ldloc.s 10 */
                        /* IL_AA: ldarg.0  */
                        /* IL_AB: ldfld Delegate[] _invocationList */
                        /* IL_B0: ldlen  */
                        /* IL_B1: conv.i4  */
                        /* IL_B3: clt  */
                        /* IL_B4: stloc.s 12 */
                        loc12 = ((loc10 < (arg0._invocationList.jsarr.length | (0|0))) ? 1 : 0);
                        /* IL_B6: ldloc.s 12 */
                        /* IL_B8: brtrue.s IL_81 */
                        
                        if (loc12){
                            __pos__ = 0x81;
                            continue;
                        }
                    }
                    break;
                }
                case 0xBA:
                /* IL_BA: ldloc.3  */
                /* IL_BB: newarr System.Delegate */
                /* IL_C0: stloc.s 4 */
                loc4 = CILJS.new_array(t0,loc3);
                /* IL_C2: ldc.i4.0  */
                /* IL_C3: stloc.s 13 */
                loc13 = (0|0);
                /* IL_C5: ldc.i4.0  */
                /* IL_C6: stloc.s 14 */
                loc14 = (0|0);
                /* IL_C8: br.s IL_F8 */
                __pos__ = 0xF8;
                continue;
                case 0xCA:
                case 0xF2:
                case 0xF8:
                in_block_1 = true;
                
                if (__pos__ > 0x108){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0xCA){
                    __pos__ = 0xCA;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0xCA:
                        /* IL_CA: ldarg.0  */
                        /* IL_CB: ldfld Delegate[] _invocationList */
                        /* IL_D0: ldloc.s 13 */
                        /* IL_D2: ldelem.ref  */
                        /* IL_D3: ldarg.1  */
                        /* IL_D4: call Boolean op_Inequality(System.Delegate, System.Delegate) */
                        /* IL_D9: stloc.s 15 */
                        loc15 = asm0.x6000063(CILJS.ldelem_ref(arg0._invocationList,loc13),arg1);
                        /* IL_DB: ldloc.s 15 */
                        /* IL_DD: brfalse.s IL_F2 */
                        
                        if ((!(loc15))){
                            __pos__ = 0xF2;
                            continue;
                        }
                        /* IL_DF: ldloc.s 4 */
                        st_52 = loc4;
                        /* IL_E1: ldloc.s 14 */
                        st_4B = loc14;
                        /* IL_E3: dup  */
                        st_53 = st_4C = st_4B;
                        /* IL_E4: ldc.i4.1  */
                        st_4D = (1|0);
                        /* IL_E5: add  */
                        st_4E = (st_4C + st_4D) | (0|0);
                        /* IL_E6: stloc.s 14 */
                        loc14 = st_4E;
                        /* IL_E8: ldarg.0  */
                        st_4F = arg0;
                        /* IL_E9: ldfld Delegate[] _invocationList */
                        st_50 = st_4F._invocationList;
                        /* IL_EE: ldloc.s 13 */
                        st_51 = loc13;
                        /* IL_F0: ldelem.ref  */
                        st_54 = CILJS.ldelem_ref(st_50,st_51);
                        /* IL_F1: stelem.ref  */
                        CILJS.stelem_ref(st_52,st_53,st_54);
                        case 0xF2:
                        /* IL_F2: ldloc.s 13 */
                        /* IL_F4: ldc.i4.1  */
                        /* IL_F5: add  */
                        /* IL_F6: stloc.s 13 */
                        loc13 = (loc13 + (1|0)) | (0|0);
                        case 0xF8:
                        /* IL_F8: ldloc.s 13 */
                        /* IL_FA: ldarg.0  */
                        /* IL_FB: ldfld Delegate[] _invocationList */
                        /* IL_100: ldlen  */
                        /* IL_101: conv.i4  */
                        /* IL_103: clt  */
                        /* IL_104: stloc.s 16 */
                        loc16 = ((loc13 < (arg0._invocationList.jsarr.length | (0|0))) ? 1 : 0);
                        /* IL_106: ldloc.s 16 */
                        /* IL_108: brtrue.s IL_CA */
                        
                        if (loc16){
                            __pos__ = 0xCA;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_10A: ldloc.s 4 */
                /* IL_10C: call Delegate CreateMulticast(System.Delegate[]) */
                /* IL_111: stloc.2  */
                loc2 = asm0.x60000d4(loc4);
                case 0x114:
                /* IL_114: ldloc.2  */
                /* IL_115: ret  */
                return loc2;
            }
        }
    };;
    /*  MulticastDelegate..ctor()*/
    asm.x60000d7 = function _ctor(arg0)
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
                asm0.x6000067(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /*  NotImplementedException..ctor()*/
    asm.x60000d8 = function _ctor(arg0)
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
                asm0.x6000076(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /*  NotSupportedException..ctor()*/
    asm.x60000d9 = function _ctor(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldstr Operation not supported */
                /* IL_06: call Void .ctor(System.String) */
                asm0.x6000077(arg0,CILJS.new_string("Operation not supported"));
                /* IL_0B: nop  */
                
                /* IL_0C: nop  */
                
                /* IL_0D: ret  */
                return ;
            }
        }
    };;
    /*  NotSupportedException..ctor(String)*/
    asm.x60000da = function _ctor(arg0, arg1)
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
                /* IL_02: call Void .ctor(System.String) */
                asm0.x6000077(arg0,arg1);
                /* IL_07: nop  */
                
                /* IL_08: nop  */
                
                /* IL_09: ret  */
                return ;
            }
        }
    };;
    /* System.Boolean Nullable`1.get_HasValue()*/
    asm.x60000dc = function get_HasValue(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Boolean has_value */
                /* IL_07: stloc.0  */
                loc0 = arg0.r().has_value;
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* T Nullable`1.get_Value()*/
    asm.x60000dd_init = function (arg0)
    {
        ((asm0)["System.InvalidOperationException"]().init)();
        asm.x60000dd = asm.x60000dd_;
    };;
    asm.x60000dd = function (arg0)
    {
        asm.x60000dd_init(arg0);
        return asm.x60000dd_(arg0);
    };;
    asm.x60000dd_ = function get_Value(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.InvalidOperationException"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Boolean has_value */
                /* IL_07: ldc.i4.0  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.0  */
                loc0 = ((arg0.r().has_value === (0|0)) ? 1 : 0);
                /* IL_0B: ldloc.0  */
                /* IL_0C: brfalse.s IL_19 */
                
                if ((!(loc0))){
                    __pos__ = 0x19;
                    continue;
                }
                /* IL_0E: ldstr Nullable object must have a value. */
                /* IL_13: newobj Void .ctor(System.String) */
                /* IL_18: throw  */
                throw CILJS.newobj(t0,asm0.x60000c7,[null, CILJS.new_string("Nullable object must have a value.")]);
                case 0x19:
                /* IL_19: ldarg.0  */
                /* IL_1A: ldfld T value */
                /* IL_1F: stloc.1  */
                loc1 = CILJS.clone_value(arg0.r().value);
                /* IL_22: ldloc.1  */
                /* IL_23: ret  */
                return loc1;
            }
        }
    };
    /* System.Boolean Nullable`1.Equals(Object)*/
    asm.x60000de_init = function (arg0, arg1)
    {
        ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
        ((asm0)["System.Nullable`1"](((arg0.r().constructor.GenericArguments)["asm0.t200002d"])[0]).init)();
    };;
    asm.x60000de = function (arg0, arg1)
    {
        asm.x60000de_init(arg0,arg1);
        return asm.x60000de_(arg0,arg1);
    };;
    asm.x60000de_ = function Equals(arg0, arg1)
    {
        var t0;
        var t1;
        var t2;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
        t1 = ((arg0.r().constructor.GenericArguments)["asm0.t200002d"])[0];
        t2 = (asm0)["System.Nullable`1"](t1);
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.0  */
                loc0 = ((arg1 === null) ? 1 : 0);
                /* IL_06: ldloc.0  */
                /* IL_07: brfalse.s IL_15 */
                
                if ((!(loc0))){
                    __pos__ = 0x15;
                    continue;
                }
                /* IL_09: ldarg.0  */
                /* IL_0A: ldfld Boolean has_value */
                /* IL_0F: ldc.i4.0  */
                /* IL_11: ceq  */
                /* IL_12: stloc.1  */
                loc1 = ((arg0.r().has_value === (0|0)) ? 1 : 0);
                /* IL_13: br.s IL_38 */
                __pos__ = 0x38;
                continue;
                case 0x15:
                /* IL_15: ldarg.1  */
                /* IL_16: isinst System.Nullable`1[T] */
                /* IL_1B: ldnull  */
                /* IL_1D: cgt.un  */
                /* IL_1E: ldc.i4.0  */
                /* IL_20: ceq  */
                /* IL_21: stloc.2  */
                loc2 = ((((t2.IsInst(arg1) !== null) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_22: ldloc.2  */
                /* IL_23: brfalse.s IL_29 */
                
                if ((!(loc2))){
                    __pos__ = 0x29;
                    continue;
                }
                /* IL_25: ldc.i4.0  */
                /* IL_26: stloc.1  */
                loc1 = (0|0);
                /* IL_27: br.s IL_38 */
                __pos__ = 0x38;
                continue;
                case 0x29:
                /* IL_29: ldarg.0  */
                /* IL_2A: ldarg.1  */
                /* IL_2B: unbox.any System.Nullable`1[T] */
                /* IL_30: call Boolean Equals(System.Nullable`1[T]) */
                /* IL_35: stloc.1  */
                loc1 = asm0.x60000df(arg0,CILJS.clone_value(CILJS.unbox_any(arg1,t2)));
                case 0x38:
                /* IL_38: ldloc.1  */
                /* IL_39: ret  */
                return loc1;
            }
        }
    };
    /* System.Boolean Nullable`1.Equals(Nullable`1)*/
    asm.x60000df = function Equals(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        t0 = ((arg0.r().constructor.GenericArguments)["asm0.t200002d"])[0];
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: ldfld Boolean has_value */
                /* IL_07: ldarg.0  */
                /* IL_08: ldfld Boolean has_value */
                /* IL_0E: ceq  */
                /* IL_0F: ldc.i4.0  */
                /* IL_11: ceq  */
                /* IL_12: stloc.0  */
                loc0 = ((((arg1.has_value === arg0.r().has_value) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_13: ldloc.0  */
                /* IL_14: brfalse.s IL_1A */
                
                if ((!(loc0))){
                    __pos__ = 0x1A;
                    continue;
                }
                /* IL_16: ldc.i4.0  */
                /* IL_17: stloc.1  */
                loc1 = (0|0);
                /* IL_18: br.s IL_4B */
                __pos__ = 0x4B;
                continue;
                case 0x1A:
                /* IL_1A: ldarg.0  */
                /* IL_1B: ldfld Boolean has_value */
                /* IL_20: ldc.i4.0  */
                /* IL_22: ceq  */
                /* IL_23: stloc.2  */
                loc2 = ((arg0.r().has_value === (0|0)) ? 1 : 0);
                /* IL_24: ldloc.2  */
                /* IL_25: brfalse.s IL_2B */
                
                if ((!(loc2))){
                    __pos__ = 0x2B;
                    continue;
                }
                /* IL_27: ldc.i4.1  */
                /* IL_28: stloc.1  */
                loc1 = (1|0);
                /* IL_29: br.s IL_4B */
                __pos__ = 0x4B;
                continue;
                case 0x2B:
                /* IL_2B: ldarga.s 1 */
                /* IL_2D: ldflda T value */
                /* IL_32: ldarg.0  */
                /* IL_33: ldfld T value */
                /* IL_38: box T */
                /* IL_43: callvirt Boolean Equals(System.Object) */
                /* IL_48: stloc.1  */
                loc1 = (((arg1.value.vtable || t0.prototype.vtable)["asm0.x60000f0"])())(CILJS.dereference_pointer_as_needed({
                            'w': function (v)
                            {
                                arg1.value = v;
                            },
                            'r': function ()
                            {
                                return arg1.value;
                            }
                        }),CILJS.box(arg0.r().value,t0));
                case 0x4B:
                /* IL_4B: ldloc.1  */
                /* IL_4C: ret  */
                return loc1;
            }
        }
    };;
    /* System.Int32 Nullable`1.GetHashCode()*/
    asm.x60000e0 = function GetHashCode(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Boolean has_value */
                /* IL_07: ldc.i4.0  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.0  */
                loc0 = ((arg0.r().has_value === (0|0)) ? 1 : 0);
                /* IL_0B: ldloc.0  */
                /* IL_0C: brfalse.s IL_12 */
                
                if ((!(loc0))){
                    __pos__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0  */
                /* IL_0F: stloc.1  */
                loc1 = (0|0);
                /* IL_10: br.s IL_26 */
                __pos__ = 0x26;
                continue;
                case 0x12:
                /* IL_12: ldarg.0  */
                /* IL_13: ldflda T value */
                /* IL_1E: callvirt Int32 GetHashCode() */
                /* IL_23: stloc.1  */
                loc1 = (((arg0.r().value.vtable || ((arg0.r().constructor.GenericArguments)["asm0.t200002d"])[0].prototype.vtable)["asm0.x60000f1"])())(CILJS.dereference_pointer_as_needed({
                            'w': function (v)
                            {
                                arg0.r().value = v;
                            },
                            'r': function ()
                            {
                                return arg0.r().value;
                            }
                        }));
                case 0x26:
                /* IL_26: ldloc.1  */
                /* IL_27: ret  */
                return loc1;
            }
        }
    };;
    /* T Nullable`1.GetValueOrDefault()*/
    asm.x60000e1 = function GetValueOrDefault(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld T value */
                /* IL_07: stloc.0  */
                loc0 = CILJS.clone_value(arg0.r().value);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* T Nullable`1.GetValueOrDefault(T)*/
    asm.x60000e2 = function GetValueOrDefault(arg0, arg1)
    {
        var st_02;
        var st_03;
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Boolean has_value */
                /* IL_07: brtrue.s IL_0C */
                
                if (arg0.r().has_value){
                    __pos__ = 0xC;
                    continue;
                }
                /* IL_09: ldarg.1  */
                st_03 = arg1;
                /* IL_0A: br.s IL_12 */
                __pos__ = 0x12;
                continue;
                case 0xC:
                /* IL_0C: ldarg.0  */
                st_02 = arg0;
                /* IL_0D: ldfld T value */
                st_03 = st_02.r().value;
                case 0x12:
                /* IL_12: stloc.0  */
                loc0 = CILJS.clone_value(st_03);
                /* IL_15: ldloc.0  */
                /* IL_16: ret  */
                return loc0;
            }
        }
    };;
    /* System.String Nullable`1.ToString()*/
    asm.x60000e3 = function ToString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Boolean has_value */
                /* IL_07: stloc.0  */
                loc0 = arg0.r().has_value;
                /* IL_08: ldloc.0  */
                /* IL_09: brfalse.s IL_1F */
                
                if ((!(loc0))){
                    __pos__ = 0x1F;
                    continue;
                }
                /* IL_0B: ldarg.0  */
                /* IL_0C: ldflda T value */
                /* IL_17: callvirt String ToString() */
                /* IL_1C: stloc.1  */
                loc1 = (((arg0.r().value.vtable || ((arg0.r().constructor.GenericArguments)["asm0.t200002d"])[0].prototype.vtable)["asm0.x60000ed"])())(CILJS.dereference_pointer_as_needed({
                            'w': function (v)
                            {
                                arg0.r().value = v;
                            },
                            'r': function ()
                            {
                                return arg0.r().value;
                            }
                        }));
                /* IL_1D: br.s IL_27 */
                __pos__ = 0x27;
                continue;
                case 0x1F:
                asm0.x6000142();
                /* IL_1F: ldsfld String Empty */
                /* IL_24: stloc.1  */
                loc1 = t0.Empty;
                case 0x27:
                /* IL_27: ldloc.1  */
                /* IL_28: ret  */
                return loc1;
            }
        }
    };;
    /* static System.Nullable`1[T] Nullable`1.op_Implicit(T)*/
    asm.x60000e4_init = function (T)
    {
        return function (arg0)
        {
            ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
            ((asm0)["System.Nullable`1"](T).init)();
        };
    };;
    asm.x60000e4 = function (T)
    {
        return function (arg0)
        {
            (asm.x60000e4_init(T))(arg0);
            return (asm.x60000e4_(T))(arg0);
        };
    };;
    asm.x60000e4_ = function (T)
    {
        return function op_Implicit(arg0)
        {
            var t0;
            var t1;
            var t2;
            var in_block_0;
            var __pos__;
            var loc0;
            t0 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
            t1 = T;
            t2 = (asm0)["System.Nullable`1"](t1);
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.0  */
                    /* IL_02: newobj Void .ctor(T) */
                    /* IL_07: stloc.0  */
                    loc0 = CILJS.clone_value(CILJS.newobj(t2,asm0.x60000db,[null, CILJS.clone_value(arg0)]));
                    /* IL_0A: ldloc.0  */
                    /* IL_0B: ret  */
                    return loc0;
                }
            }
        };
    };
    /* static T Nullable`1.op_Explicit(Nullable`1)*/
    asm.x60000e5 = function (T)
    {
        return function op_Explicit(arg0)
        {
            var in_block_0;
            var __pos__;
            var loc0;
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarga.s 0 */
                    /* IL_03: call T get_Value() */
                    /* IL_08: stloc.0  */
                    loc0 = CILJS.clone_value(asm0.x60000dd({
                                'w': function (v)
                                {
                                    arg0 = v;
                                },
                                'r': function ()
                                {
                                    return arg0;
                                }
                            }));
                    /* IL_0B: ldloc.0  */
                    /* IL_0C: ret  */
                    return loc0;
                }
            }
        };
    };;
    /* static System.Object Nullable`1.Box(Nullable`1)*/
    asm.x60000e6 = function (T)
    {
        return function Box(arg0)
        {
            var t0;
            var in_block_0;
            var __pos__;
            var loc0;
            var loc1;
            t0 = T;
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.0  */
                    /* IL_02: ldfld Boolean has_value */
                    /* IL_07: ldc.i4.0  */
                    /* IL_09: ceq  */
                    /* IL_0A: stloc.0  */
                    loc0 = ((arg0.has_value === (0|0)) ? 1 : 0);
                    /* IL_0B: ldloc.0  */
                    /* IL_0C: brfalse.s IL_12 */
                    
                    if ((!(loc0))){
                        __pos__ = 0x12;
                        continue;
                    }
                    /* IL_0E: ldnull  */
                    /* IL_0F: stloc.1  */
                    loc1 = null;
                    /* IL_10: br.s IL_20 */
                    __pos__ = 0x20;
                    continue;
                    case 0x12:
                    /* IL_12: ldarg.0  */
                    /* IL_13: ldfld T value */
                    /* IL_18: box T */
                    /* IL_1D: stloc.1  */
                    loc1 = CILJS.box(arg0.value,t0);
                    case 0x20:
                    /* IL_20: ldloc.1  */
                    /* IL_21: ret  */
                    return loc1;
                }
            }
        };
    };;
    /* static System.Nullable`1[T] Nullable`1.Unbox(Object)*/
    asm.x60000e7_init = function (T)
    {
        return function (arg0)
        {
            ((asm0)["CilJs.Runtime.UnboundGenericParameter"]().init)();
            ((asm0)["System.Nullable`1"](T).init)();
        };
    };;
    asm.x60000e7 = function (T)
    {
        return function (arg0)
        {
            (asm.x60000e7_init(T))(arg0);
            return (asm.x60000e7_(T))(arg0);
        };
    };;
    asm.x60000e7_ = function (T)
    {
        return function Unbox(arg0)
        {
            var t0;
            var t1;
            var t2;
            var loc1;
            var in_block_0;
            var __pos__;
            var loc0;
            var loc2;
            t0 = (asm0)["CilJs.Runtime.UnboundGenericParameter"]();
            t1 = T;
            t2 = (asm0)["System.Nullable`1"](t1);
            loc1 = new ((asm0)["System.Nullable`1"](T))();
            in_block_0 = true;
            __pos__ = 0x0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop  */
                    
                    /* IL_01: ldarg.0  */
                    /* IL_02: ldnull  */
                    /* IL_04: ceq  */
                    /* IL_05: stloc.0  */
                    loc0 = ((arg0 === null) ? 1 : 0);
                    /* IL_06: ldloc.0  */
                    /* IL_07: brfalse.s IL_15 */
                    
                    if ((!(loc0))){
                        __pos__ = 0x15;
                        continue;
                    }
                    /* IL_09: ldloca.s 1 */
                    /* IL_0C: initobj System.Nullable`1[T] */
                    loc1 = new t2();
                    /* IL_11: ldloc.1  */
                    /* IL_12: stloc.2  */
                    loc2 = CILJS.clone_value(loc1);
                    /* IL_13: br.s IL_23 */
                    __pos__ = 0x23;
                    continue;
                    case 0x15:
                    /* IL_15: ldarg.0  */
                    /* IL_16: unbox.any T */
                    /* IL_1B: newobj Void .ctor(T) */
                    /* IL_20: stloc.2  */
                    loc2 = CILJS.clone_value(CILJS.newobj(t2,asm0.x60000db,[null, CILJS.clone_value(CILJS.unbox_any(arg0,t1))]));
                    case 0x23:
                    /* IL_23: ldloc.2  */
                    /* IL_24: ret  */
                    return loc2;
                }
            }
        };
    };
    /*  Nullable`1..ctor(T)*/
    asm.x60000db = function _ctor(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldc.i4.1  */
                /* IL_03: stfld Boolean has_value */
                arg0.r().has_value = (1|0);
                /* IL_08: ldarg.0  */
                /* IL_09: ldarg.1  */
                /* IL_0A: stfld T value */
                arg0.r().value = arg1;
                /* IL_0F: ret  */
                return ;
            }
        }
    };;
    /*  NullReferenceException..ctor()*/
    asm.x60000e8 = function _ctor(arg0)
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
                asm0.x6000143(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* static System.Boolean Object.ReferenceEqualsImpl(Object,Object)*/
    asm.x60000e9 = function (a, b) { return Number(a === b); };;
    /* static System.Int32 Object.GetHashCode(Object)*/
    asm.x60000ea = function (o) { return o.hash || (o.hash = CILJS.next_hash++); };;
    /* System.Object Object.toString()*/
    asm.x60000ec = function () { return asm0.ToJavaScriptString(this); };;
    /* System.String Object.ToString()*/
    asm.x60000ed = function ToString(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldstr System.Object */
                /* IL_06: stloc.0  */
                loc0 = CILJS.new_string("System.Object");
                /* IL_09: ldloc.0  */
                /* IL_0A: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Object Object.ToJavaScriptString(Object)*/
    asm.x60000ee = function ToJavaScriptString(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.0  */
                loc0 = ((arg0 === null) ? 1 : 0);
                /* IL_06: ldloc.0  */
                /* IL_07: brfalse.s IL_16 */
                
                if ((!(loc0))){
                    __pos__ = 0x16;
                    continue;
                }
                /* IL_09: ldstr  */
                /* IL_0E: ldfld String jsstr */
                /* IL_13: stloc.1  */
                loc1 = CILJS.new_string("").jsstr;
                /* IL_14: br.s IL_33 */
                __pos__ = 0x33;
                continue;
                case 0x16:
                /* IL_16: nop  */
                
                /* IL_17: ldarg.0  */
                /* IL_18: callvirt String ToString() */
                /* IL_1D: stloc.2  */
                loc2 = ((arg0.vtable)["asm0.x60000ed"]())(CILJS.convert_box_to_pointer_as_needed(arg0));
                /* IL_1E: ldloc.2  */
                /* IL_1F: ldnull  */
                /* IL_21: ceq  */
                /* IL_22: stloc.3  */
                loc3 = ((loc2 === null) ? 1 : 0);
                /* IL_23: ldloc.3  */
                /* IL_24: brfalse.s IL_2A */
                
                if ((!(loc3))){
                    __pos__ = 0x2A;
                    continue;
                }
                /* IL_26: ldnull  */
                /* IL_27: stloc.1  */
                loc1 = null;
                /* IL_28: br.s IL_33 */
                __pos__ = 0x33;
                continue;
                case 0x2A:
                /* IL_2A: ldloc.2  */
                /* IL_2B: ldfld String jsstr */
                /* IL_30: stloc.1  */
                loc1 = loc2.jsstr;
                case 0x33:
                /* IL_33: ldloc.1  */
                /* IL_34: ret  */
                return loc1;
            }
        }
    };;
    asm.ToJavaScriptString = asm.x60000ee;
    /* static System.Boolean Object.ReferenceEquals(Object,Object)*/
    asm.x60000ef = function ReferenceEquals(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: call Boolean ReferenceEqualsImpl(System.Object, System.Object) */
                /* IL_08: stloc.0  */
                loc0 = asm0.x60000e9(arg0,arg1);
                /* IL_0B: ldloc.0  */
                /* IL_0C: ret  */
                return loc0;
            }
        }
    };;
    /* System.Boolean Object.Equals(Object)*/
    asm.x60000f0 = function Equals(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_04: ceq  */
                /* IL_05: stloc.0  */
                loc0 = ((arg0 === arg1) ? 1 : 0);
                /* IL_08: ldloc.0  */
                /* IL_09: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Object.GetHashCode()*/
    asm.x60000f1 = function GetHashCode(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call Int32 GetHashCode(System.Object) */
                /* IL_07: stloc.0  */
                loc0 = asm0.x60000ea(arg0);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* System.Type Object.GetType()*/
    asm.x60000f2 = function GetType(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call Type GetType(System.Object) */
                /* IL_07: stloc.0  */
                loc0 = asm0.x60000fb(arg0);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Boolean Object.Equals(Object,Object)*/
    asm.x60000f3 = function Equals(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_04: ceq  */
                /* IL_05: stloc.0  */
                loc0 = ((arg0 === arg1) ? 1 : 0);
                /* IL_06: ldloc.0  */
                /* IL_07: brfalse.s IL_0D */
                
                if ((!(loc0))){
                    __pos__ = 0xD;
                    continue;
                }
                /* IL_09: ldc.i4.1  */
                /* IL_0A: stloc.1  */
                loc1 = (1|0);
                /* IL_0B: br.s IL_23 */
                __pos__ = 0x23;
                continue;
                case 0xD:
                /* IL_0D: ldarg.0  */
                /* IL_0E: ldnull  */
                /* IL_10: ceq  */
                /* IL_11: stloc.2  */
                loc2 = ((arg0 === null) ? 1 : 0);
                /* IL_12: ldloc.2  */
                /* IL_13: brfalse.s IL_19 */
                
                if ((!(loc2))){
                    __pos__ = 0x19;
                    continue;
                }
                /* IL_15: ldc.i4.0  */
                /* IL_16: stloc.1  */
                loc1 = (0|0);
                /* IL_17: br.s IL_23 */
                __pos__ = 0x23;
                continue;
                case 0x19:
                /* IL_19: ldarg.0  */
                /* IL_1A: ldarg.1  */
                /* IL_1B: callvirt Boolean Equals(System.Object) */
                /* IL_20: stloc.1  */
                loc1 = ((arg0.vtable)["asm0.x60000f0"]())(CILJS.convert_box_to_pointer_as_needed(arg0),arg1);
                case 0x23:
                /* IL_23: ldloc.1  */
                /* IL_24: ret  */
                return loc1;
            }
        }
    };;
    /*  Object..ctor()*/
    asm.x60000f4 = function _ctor(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ret  */
                return ;
            }
        }
    };;
    /*  ParamArrayAttribute..ctor()*/
    asm.x60000f5 = function _ctor(arg0)
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
                asm0.x600003e(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* System.Object RuntimeFieldHandle.get_Value()*/
    asm.x60000f6 = function get_Value(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Object value */
                /* IL_07: stloc.0  */
                loc0 = arg0.r().value;
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* static System.RuntimeType+constructor RuntimeType.GetConstructor(Object)*/
    asm.x60000f7 = function (o) { return o.type || o.constructor; };;
    /* static System.Type RuntimeType.GetInstance(constructor)*/
    asm.x60000fa_init = function (arg0)
    {
        ((asm0)["System.RuntimeType"]().init)();
        asm.x60000fa = asm.x60000fa_;
    };;
    asm.x60000fa = function (arg0)
    {
        asm.x60000fa_init(arg0);
        return asm.x60000fa_(arg0);
    };;
    asm.x60000fa_ = function GetInstance(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.RuntimeType"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Type TypeInstance */
                /* IL_07: call Boolean IsUndefined(System.Object) */
                /* IL_0C: stloc.0  */
                loc0 = asm0.x60001e8(arg0.TypeInstance);
                /* IL_0D: ldloc.0  */
                /* IL_0E: brfalse.s IL_1C */
                
                if ((!(loc0))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_10: ldarg.0  */
                /* IL_11: ldarg.0  */
                /* IL_12: newobj Void .ctor(System.RuntimeType+constructor) */
                /* IL_17: stfld Type TypeInstance */
                arg0.TypeInstance = CILJS.newobj(t0,asm0.x60000f8,[null, arg0]);
                case 0x1C:
                /* IL_1C: ldarg.0  */
                /* IL_1D: ldfld Type TypeInstance */
                /* IL_22: stloc.1  */
                loc1 = arg0.TypeInstance;
                /* IL_25: ldloc.1  */
                /* IL_26: ret  */
                return loc1;
            }
        }
    };
    asm.GetReflectionType = asm.x60000fa;
    /* static System.Type RuntimeType.GetType(Object)*/
    asm.x60000fb = function GetType(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call constructor GetConstructor(System.Object) */
                /* IL_07: call Type GetInstance(System.RuntimeType+constructor) */
                /* IL_0C: stloc.0  */
                loc0 = asm0.x60000fa(asm0.x60000f7(arg0));
                /* IL_0F: ldloc.0  */
                /* IL_10: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Type RuntimeType.GetRuntimeTypeFromHandle(RuntimeTypeHandle)*/
    asm.x60000fc_init = function (arg0)
    {
        ((asm0)["System.RuntimeType+constructor"]().init)();
        asm.x60000fc = asm.x60000fc_;
    };;
    asm.x60000fc = function (arg0)
    {
        asm.x60000fc_init(arg0);
        return asm.x60000fc_(arg0);
    };;
    asm.x60000fc_ = function GetRuntimeTypeFromHandle(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.RuntimeType+constructor"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarga.s 0 */
                /* IL_03: ldfld Object value */
                /* IL_08: call constructor UnsafeCast[System.RuntimeType+constructor](System.Object) */
                /* IL_0D: call Type GetInstance(System.RuntimeType+constructor) */
                /* IL_12: stloc.0  */
                loc0 = asm0.x60000fa(arg0.value);
                /* IL_15: ldloc.0  */
                /* IL_16: ret  */
                return loc0;
            }
        }
    };
    /* System.Reflection.Assembly RuntimeType.get_Assembly()*/
    asm.x60000fd = function get_Assembly(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld constructor ctor */
                /* IL_07: ldfld jsAsm Assembly */
                /* IL_0C: call Assembly GetInstance(System.Reflection.Assembly+jsAsm) */
                /* IL_11: stloc.0  */
                loc0 = asm0.x6000199(arg0.ctor.Assembly);
                /* IL_14: ldloc.0  */
                /* IL_15: ret  */
                return loc0;
            }
        }
    };;
    /* System.String RuntimeType.get_FullName()*/
    asm.x60000fe = function get_FullName(arg0)
    {
        var t0;
        var st_13;
        var in_block_0;
        var __pos__;
        var loc1;
        var loc2;
        var loc0;
        var loc3;
        var loc4;
        var loc5;
        var in_block_1;
        var loc6;
        t0 = (asm0)["System.Array"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldtoken System.Array */
                /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_0C: callvirt Boolean IsSubclassOf(System.Type) */
                /* IL_11: stloc.1  */
                loc1 = ((arg0.vtable)["asm0.x6000148"]())(arg0,asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)));
                /* IL_12: ldloc.1  */
                /* IL_13: brfalse.s IL_31 */
                
                if ((!(loc1))){
                    __pos__ = 0x31;
                    continue;
                }
                /* IL_15: nop  */
                
                /* IL_16: ldarg.0  */
                /* IL_17: callvirt Type GetElementType() */
                /* IL_1C: callvirt String get_FullName() */
                /* IL_21: ldstr [] */
                /* IL_26: call String Concat(System.String, System.String) */
                /* IL_2B: stloc.2  */
                loc2 = asm0.x6000127((((((arg0.vtable)["asm0.x6000156"]())(arg0).vtable)["asm0.x6000146"])())(((arg0.vtable)["asm0.x6000156"]())(arg0)),CILJS.new_string("[]"));
                /* IL_2C: br IL_B4 */
                __pos__ = 0xB4;
                continue;
                case 0x31:
                /* IL_31: ldarg.0  */
                /* IL_32: ldfld constructor ctor */
                /* IL_37: ldfld Object FullName */
                /* IL_3C: call String FromJsString(System.Object) */
                /* IL_41: stloc.0  */
                loc0 = CILJS.new_string(arg0.ctor.FullName);
                /* IL_42: ldarg.0  */
                /* IL_43: callvirt Boolean get_IsGenericType() */
                /* IL_48: brfalse.s IL_55 */
                
                if ((!(((arg0.vtable)["asm0.x600014d"]())(arg0)))){
                    __pos__ = 0x55;
                    continue;
                }
                /* IL_4A: ldarg.0  */
                /* IL_4B: callvirt Boolean get_IsGenericTypeDefinition() */
                /* IL_50: ldc.i4.0  */
                /* IL_52: ceq  */
                st_13 = ((((arg0.vtable)["asm0.x600014f"]())(arg0) === (0|0)) ? 1 : 0);
                /* IL_53: br.s IL_56 */
                __pos__ = 0x56;
                continue;
                case 0x55:
                /* IL_55: ldc.i4.0  */
                st_13 = (0|0);
                case 0x56:
                /* IL_56: stloc.3  */
                loc3 = st_13;
                /* IL_57: ldloc.3  */
                /* IL_58: brfalse.s IL_B0 */
                
                if ((!(loc3))){
                    __pos__ = 0xB0;
                    continue;
                }
                /* IL_5A: nop  */
                
                /* IL_5B: ldloc.0  */
                /* IL_5C: ldstr [ */
                /* IL_61: call String Concat(System.String, System.String) */
                /* IL_66: stloc.0  */
                loc0 = asm0.x6000127(loc0,CILJS.new_string("["));
                /* IL_67: ldarg.0  */
                /* IL_68: callvirt Type[] GetGenericArguments() */
                /* IL_6D: stloc.s 4 */
                loc4 = ((arg0.vtable)["asm0.x6000150"]())(arg0);
                /* IL_6F: ldc.i4.0  */
                /* IL_70: stloc.s 5 */
                loc5 = (0|0);
                /* IL_72: br.s IL_95 */
                __pos__ = 0x95;
                continue;
                case 0x74:
                case 0x95:
                in_block_1 = true;
                
                if (__pos__ > 0xA1){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x74){
                    __pos__ = 0x74;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x74:
                        /* IL_74: ldloc.0  */
                        /* IL_75: ldstr [ */
                        /* IL_7A: ldloc.s 4 */
                        /* IL_7C: ldloc.s 5 */
                        /* IL_7E: ldelem.ref  */
                        /* IL_7F: callvirt String get_AssemblyQualifiedName() */
                        /* IL_84: ldstr ] */
                        /* IL_89: call String Concat(System.String, System.String, System.String, System.String) */
                        /* IL_8E: stloc.0  */
                        loc0 = asm0.x600012a(loc0,CILJS.new_string("["),(((CILJS.ldelem_ref(loc4,loc5).vtable)["asm0.x600014c"])())(CILJS.ldelem_ref(loc4,loc5)),CILJS.new_string("]"));
                        /* IL_8F: ldloc.s 5 */
                        /* IL_91: ldc.i4.1  */
                        /* IL_92: add  */
                        /* IL_93: stloc.s 5 */
                        loc5 = (loc5 + (1|0)) | (0|0);
                        case 0x95:
                        /* IL_95: ldloc.s 5 */
                        /* IL_97: ldloc.s 4 */
                        /* IL_99: ldlen  */
                        /* IL_9A: conv.i4  */
                        /* IL_9C: clt  */
                        /* IL_9D: stloc.s 6 */
                        loc6 = ((loc5 < (loc4.jsarr.length | (0|0))) ? 1 : 0);
                        /* IL_9F: ldloc.s 6 */
                        /* IL_A1: brtrue.s IL_74 */
                        
                        if (loc6){
                            __pos__ = 0x74;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_A3: ldloc.0  */
                /* IL_A4: ldstr ] */
                /* IL_A9: call String Concat(System.String, System.String) */
                /* IL_AE: stloc.0  */
                loc0 = asm0.x6000127(loc0,CILJS.new_string("]"));
                /* IL_AF: nop  */
                
                case 0xB0:
                /* IL_B0: ldloc.0  */
                /* IL_B1: stloc.2  */
                loc2 = loc0;
                case 0xB4:
                /* IL_B4: ldloc.2  */
                /* IL_B5: ret  */
                return loc2;
            }
        }
    };;
    /* System.String RuntimeType.get_AssemblyQualifiedName()*/
    asm.x60000ff = function get_AssemblyQualifiedName(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: callvirt String get_FullName() */
                /* IL_07: ldstr ,  */
                /* IL_0C: ldarg.0  */
                /* IL_0D: callvirt Assembly get_Assembly() */
                /* IL_12: callvirt String get_FullName() */
                /* IL_17: call String Concat(System.String, System.String, System.String) */
                /* IL_1C: stloc.0  */
                loc0 = asm0.x6000129(((arg0.vtable)["asm0.x6000146"]())(arg0),CILJS.new_string(", "),asm0.x600019a(((arg0.vtable)["asm0.x600014a"]())(arg0)));
                /* IL_1F: ldloc.0  */
                /* IL_20: ret  */
                return loc0;
            }
        }
    };;
    /* System.Boolean RuntimeType.Equals(Object)*/
    asm.x6000100_init = function (arg0, arg1)
    {
        ((asm0)["System.RuntimeType"]().init)();
        asm.x6000100 = asm.x6000100_;
    };;
    asm.x6000100 = function (arg0, arg1)
    {
        asm.x6000100_init(arg0,arg1);
        return asm.x6000100_(arg0,arg1);
    };;
    asm.x6000100_ = function Equals(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.RuntimeType"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: isinst System.RuntimeType */
                /* IL_07: stloc.0  */
                loc0 = t0.IsInst(arg1);
                /* IL_08: ldarg.0  */
                /* IL_09: ldfld constructor ctor */
                /* IL_0E: ldloc.0  */
                /* IL_0F: ldfld constructor ctor */
                /* IL_15: ceq  */
                /* IL_16: stloc.1  */
                loc1 = ((arg0.ctor === loc0.ctor) ? 1 : 0);
                /* IL_19: ldloc.1  */
                /* IL_1A: ret  */
                return loc1;
            }
        }
    };
    /* System.Int32 RuntimeType.GetHashCode()*/
    asm.x6000101 = function GetHashCode(arg0)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.Boolean"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld constructor ctor */
                /* IL_07: ldfld Int32 Hash */
                /* IL_0C: box System.Int32 */
                /* IL_11: call Boolean UnsafeCast[System.Boolean](System.Object) */
                /* IL_16: ldc.i4.0  */
                /* IL_18: ceq  */
                /* IL_19: stloc.0  */
                loc0 = ((CILJS.make_box(arg0.ctor.Hash,t0) === (0|0)) ? 1 : 0);
                /* IL_1A: ldloc.0  */
                /* IL_1B: brfalse.s IL_2E */
                
                if ((!(loc0))){
                    __pos__ = 0x2E;
                    continue;
                }
                /* IL_1D: ldarg.0  */
                /* IL_1E: ldfld constructor ctor */
                /* IL_23: ldarg.0  */
                /* IL_24: call Int32 GetHashCode() */
                /* IL_29: stfld Int32 Hash */
                arg0.ctor.Hash = asm0.x60000f1(arg0);
                case 0x2E:
                /* IL_2E: ldarg.0  */
                /* IL_2F: ldfld constructor ctor */
                /* IL_34: ldfld Int32 Hash */
                /* IL_39: stloc.1  */
                loc1 = arg0.ctor.Hash;
                /* IL_3C: ldloc.1  */
                /* IL_3D: ret  */
                return loc1;
            }
        }
    };;
    /* System.Object[] RuntimeType.GetCustomAttributes(Boolean)*/
    asm.x6000102 = function GetCustomAttributes(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld constructor ctor */
                /* IL_07: ldfld Array CustomAttributes */
                /* IL_0C: call Object[] GetCustomAttributesImpl(System.Object) */
                /* IL_11: stloc.0  */
                loc0 = asm0.x60001a3(arg0.ctor.CustomAttributes);
                /* IL_14: ldloc.0  */
                /* IL_15: ret  */
                return loc0;
            }
        }
    };;
    /* System.Object[] RuntimeType.GetCustomAttributes(Type,Boolean)*/
    asm.x6000103_init = function (arg0, arg1, arg2)
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x6000103 = asm.x6000103_;
    };;
    asm.x6000103 = function (arg0, arg1, arg2)
    {
        asm.x6000103_init(arg0,arg1,arg2);
        return asm.x6000103_(arg0,arg1,arg2);
    };;
    asm.x6000103_ = function GetCustomAttributes(arg0, arg1, arg2)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.NotImplementedException"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: throw  */
                throw CILJS.newobj(t0,asm0.x60000d8,[null]);
            }
        }
    };
    /* System.Boolean RuntimeType.IsDefined(Type,Boolean)*/
    asm.x6000104_init = function (arg0, arg1, arg2)
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x6000104 = asm.x6000104_;
    };;
    asm.x6000104 = function (arg0, arg1, arg2)
    {
        asm.x6000104_init(arg0,arg1,arg2);
        return asm.x6000104_(arg0,arg1,arg2);
    };;
    asm.x6000104_ = function IsDefined(arg0, arg1, arg2)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.NotImplementedException"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: throw  */
                throw CILJS.newobj(t0,asm0.x60000d8,[null]);
            }
        }
    };
    /* System.Boolean RuntimeType.get_IsInterface()*/
    asm.x6000105 = function get_IsInterface(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld constructor ctor */
                /* IL_07: ldfld Boolean IsInterface */
                /* IL_0C: call Boolean op_Explicit(CilJs.JavaScript.Boolean) */
                /* IL_11: stloc.0  */
                loc0 = (arg0.ctor.IsInterface ? 1 : 0);
                /* IL_14: ldloc.0  */
                /* IL_15: ret  */
                return loc0;
            }
        }
    };;
    /* System.Boolean RuntimeType.get_IsGenericType()*/
    asm.x6000106 = function get_IsGenericType(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld constructor ctor */
                /* IL_07: ldfld Boolean IsGenericTypeDefinition */
                /* IL_0C: call Boolean op_Explicit(CilJs.JavaScript.Boolean) */
                /* IL_11: stloc.0  */
                loc0 = (arg0.ctor.IsGenericTypeDefinition ? 1 : 0);
                /* IL_14: ldloc.0  */
                /* IL_15: ret  */
                return loc0;
            }
        }
    };;
    /* System.Boolean RuntimeType.get_IsGenericTypeDefinition()*/
    asm.x6000107_init = function (arg0)
    {
        ((asm0)["System.RuntimeType+constructor"]().init)();
        asm.x6000107 = asm.x6000107_;
    };;
    asm.x6000107 = function (arg0)
    {
        asm.x6000107_init(arg0);
        return asm.x6000107_(arg0);
    };;
    asm.x6000107_ = function get_IsGenericTypeDefinition(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc2;
        var loc3;
        var loc0;
        var loc1;
        var loc4;
        t0 = (asm0)["System.RuntimeType+constructor"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld constructor ctor */
                /* IL_07: ldfld Boolean IsGenericTypeDefinition */
                /* IL_0C: call Boolean op_Explicit(CilJs.JavaScript.Boolean) */
                /* IL_11: ldc.i4.0  */
                /* IL_13: ceq  */
                /* IL_14: stloc.2  */
                loc2 = (((arg0.ctor.IsGenericTypeDefinition ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_15: ldloc.2  */
                /* IL_16: brfalse.s IL_1C */
                
                if ((!(loc2))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.0  */
                /* IL_19: stloc.3  */
                loc3 = (0|0);
                /* IL_1A: br.s IL_6D */
                __pos__ = 0x6D;
                continue;
                case 0x1C:
                /* IL_1C: ldarg.0  */
                /* IL_1D: ldfld constructor ctor */
                /* IL_22: ldfld Object GenericArguments */
                /* IL_27: ldarg.0  */
                /* IL_28: ldfld constructor ctor */
                /* IL_2D: ldfld String MetadataName */
                /* IL_32: call String op_Explicit(CilJs.JavaScript.String) */
                /* IL_37: call Object ObjectLookup(System.Object, System.String) */
                /* IL_3C: ldc.i4.0  */
                /* IL_3D: call Object ArrayLookup(System.Object, System.Int32) */
                /* IL_42: stloc.0  */
                loc0 = ((arg0.ctor.GenericArguments[CILJS.new_string(arg0.ctor.MetadataName).jsstr])[(0|0)]);
                /* IL_43: ldloc.0  */
                /* IL_44: call constructor UnsafeCast[System.RuntimeType+constructor](System.Object) */
                /* IL_49: stloc.1  */
                loc1 = loc0;
                /* IL_4A: ldloc.1  */
                /* IL_4B: ldfld Object FullName */
                /* IL_50: call String FromJsString(System.Object) */
                /* IL_55: ldstr CilJs.Runtime.UnboundGenericParameter */
                /* IL_5A: call Boolean op_Equality(System.String, System.String) */
                /* IL_5F: stloc.s 4 */
                loc4 = asm0.x6000132(CILJS.new_string(loc1.FullName),CILJS.new_string("CilJs.Runtime.UnboundGenericParameter"));
                /* IL_61: ldloc.s 4 */
                /* IL_63: brfalse.s IL_69 */
                
                if ((!(loc4))){
                    __pos__ = 0x69;
                    continue;
                }
                /* IL_65: ldc.i4.1  */
                /* IL_66: stloc.3  */
                loc3 = (1|0);
                /* IL_67: br.s IL_6D */
                __pos__ = 0x6D;
                continue;
                case 0x69:
                /* IL_69: ldc.i4.0  */
                /* IL_6A: stloc.3  */
                loc3 = (0|0);
                case 0x6D:
                /* IL_6D: ldloc.3  */
                /* IL_6E: ret  */
                return loc3;
            }
        }
    };
    /* System.Type RuntimeType.MakeGenericType(Type[])*/
    asm.x6000108_init = function (arg0, arg1)
    {
        ((asm0)["System.InvalidOperationException"]().init)();
        ((asm0)["System.RuntimeType"]().init)();
        ((asm0)["System.RuntimeType+constructor"]().init)();
        asm.x6000108 = asm.x6000108_;
    };;
    asm.x6000108 = function (arg0, arg1)
    {
        asm.x6000108_init(arg0,arg1);
        return asm.x6000108_(arg0,arg1);
    };;
    asm.x6000108_ = function MakeGenericType(arg0, arg1)
    {
        var t0;
        var t1;
        var t2;
        var in_block_0;
        var __pos__;
        var loc3;
        var loc0;
        var loc4;
        var in_block_1;
        var loc5;
        var loc1;
        var loc2;
        var loc6;
        t0 = (asm0)["System.InvalidOperationException"]();
        t1 = (asm0)["System.RuntimeType"]();
        t2 = (asm0)["System.RuntimeType+constructor"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: callvirt Boolean get_IsGenericTypeDefinition() */
                /* IL_07: ldc.i4.0  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.3  */
                loc3 = ((((arg0.vtable)["asm0.x600014f"]())(arg0) === (0|0)) ? 1 : 0);
                /* IL_0B: ldloc.3  */
                /* IL_0C: brfalse.s IL_14 */
                
                if ((!(loc3))){
                    __pos__ = 0x14;
                    continue;
                }
                /* IL_0E: newobj Void .ctor() */
                /* IL_13: throw  */
                throw CILJS.newobj(t0,asm0.x60000c4,[null]);
                case 0x14:
                /* IL_14: call Array New() */
                /* IL_19: stloc.0  */
                loc0 = [];
                /* IL_1A: ldc.i4.0  */
                /* IL_1B: stloc.s 4 */
                loc4 = (0|0);
                /* IL_1D: br.s IL_3C */
                __pos__ = 0x3C;
                continue;
                case 0x1F:
                case 0x3C:
                in_block_1 = true;
                
                if (__pos__ > 0x47){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x1F){
                    __pos__ = 0x1F;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x1F:
                        /* IL_1F: ldloc.0  */
                        /* IL_20: ldloc.s 4 */
                        /* IL_22: ldarg.1  */
                        /* IL_23: ldloc.s 4 */
                        /* IL_25: ldelem.ref  */
                        /* IL_26: castclass System.RuntimeType */
                        /* IL_2B: ldfld constructor ctor */
                        /* IL_30: callvirt Void set_Item(System.Int32, System.Object) */
                        loc0[loc4] = CILJS.cast_class(CILJS.ldelem_ref(arg1,loc4),t1).ctor;
                        /* IL_35: nop  */
                        
                        /* IL_36: ldloc.s 4 */
                        /* IL_38: ldc.i4.1  */
                        /* IL_39: add  */
                        /* IL_3A: stloc.s 4 */
                        loc4 = (loc4 + (1|0)) | (0|0);
                        case 0x3C:
                        /* IL_3C: ldloc.s 4 */
                        /* IL_3E: ldarg.1  */
                        /* IL_3F: ldlen  */
                        /* IL_40: conv.i4  */
                        /* IL_42: clt  */
                        /* IL_43: stloc.s 5 */
                        loc5 = ((loc4 < (arg1.jsarr.length | (0|0))) ? 1 : 0);
                        /* IL_45: ldloc.s 5 */
                        /* IL_47: brtrue.s IL_1F */
                        
                        if (loc5){
                            __pos__ = 0x1F;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_49: ldarg.0  */
                /* IL_4A: ldfld constructor ctor */
                /* IL_4F: ldfld jsAsm Assembly */
                /* IL_54: ldarg.0  */
                /* IL_55: callvirt String get_FullName() */
                /* IL_5A: call Object ObjectLookup(System.Object, System.String) */
                /* IL_5F: stloc.1  */
                loc1 = (arg0.ctor.Assembly[((arg0.vtable)["asm0.x6000146"]())(arg0).jsstr]);
                /* IL_60: ldloc.1  */
                /* IL_61: ldnull  */
                /* IL_62: ldloc.0  */
                /* IL_63: call Object Apply(System.Object, System.Object, CilJs.JavaScript.Array) */
                /* IL_68: stloc.2  */
                loc2 = (loc1.apply(null, loc0));
                /* IL_69: ldloc.2  */
                /* IL_6A: call constructor UnsafeCast[System.RuntimeType+constructor](System.Object) */
                /* IL_6F: call Type GetInstance(System.RuntimeType+constructor) */
                /* IL_74: stloc.s 6 */
                loc6 = asm0.x60000fa(loc2);
                /* IL_78: ldloc.s 6 */
                /* IL_7A: ret  */
                return loc6;
            }
        }
    };
    /* System.Type[] RuntimeType.GetGenericArguments()*/
    asm.x6000109_init = function (arg0)
    {
        ((asm0)["System.RuntimeType+constructor"]().init)();
        asm.x6000109 = asm.x6000109_;
    };;
    asm.x6000109 = function (arg0)
    {
        asm.x6000109_init(arg0);
        return asm.x6000109_(arg0);
    };;
    asm.x6000109_ = function GetGenericArguments(arg0)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var in_block_1;
        var loc3;
        var loc4;
        t0 = (asm0)["System.RuntimeType+constructor"]();
        t1 = (asm0)["System.Type"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld constructor ctor */
                /* IL_07: ldfld Object GenericArguments */
                /* IL_0C: ldarg.0  */
                /* IL_0D: ldfld constructor ctor */
                /* IL_12: ldfld String MetadataName */
                /* IL_17: call String op_Explicit(CilJs.JavaScript.String) */
                /* IL_1C: call Object ObjectLookup(System.Object, System.String) */
                /* IL_21: call constructor[] FromJsArray[System.RuntimeType+constructor](System.Object) */
                /* IL_26: stloc.0  */
                loc0 = (asm0.x600000d((asm0)["System.RuntimeType+constructor"]()))((arg0.ctor.GenericArguments[CILJS.new_string(arg0.ctor.MetadataName).jsstr]));
                /* IL_27: ldloc.0  */
                /* IL_28: ldlen  */
                /* IL_29: conv.i4  */
                /* IL_2A: newarr System.Type */
                /* IL_2F: stloc.1  */
                loc1 = CILJS.new_array(t1,loc0.jsarr.length | (0|0));
                /* IL_30: ldc.i4.0  */
                /* IL_31: stloc.2  */
                loc2 = (0|0);
                /* IL_32: br.s IL_43 */
                __pos__ = 0x43;
                continue;
                case 0x34:
                case 0x43:
                in_block_1 = true;
                
                if (__pos__ > 0x4B){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x34){
                    __pos__ = 0x34;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x34:
                        /* IL_34: ldloc.1  */
                        /* IL_35: ldloc.2  */
                        /* IL_36: ldloc.0  */
                        /* IL_37: ldloc.2  */
                        /* IL_38: ldelem.ref  */
                        /* IL_39: call Type GetInstance(System.RuntimeType+constructor) */
                        /* IL_3E: stelem.ref  */
                        CILJS.stelem_ref(loc1,loc2,asm0.x60000fa(CILJS.ldelem_ref(loc0,loc2)));
                        /* IL_3F: ldloc.2  */
                        /* IL_40: ldc.i4.1  */
                        /* IL_41: add  */
                        /* IL_42: stloc.2  */
                        loc2 = (loc2 + (1|0)) | (0|0);
                        case 0x43:
                        /* IL_43: ldloc.2  */
                        /* IL_44: ldloc.0  */
                        /* IL_45: ldlen  */
                        /* IL_46: conv.i4  */
                        /* IL_48: clt  */
                        /* IL_49: stloc.3  */
                        loc3 = ((loc2 < (loc0.jsarr.length | (0|0))) ? 1 : 0);
                        /* IL_4A: ldloc.3  */
                        /* IL_4B: brtrue.s IL_34 */
                        
                        if (loc3){
                            __pos__ = 0x34;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_4D: ldloc.1  */
                /* IL_4E: stloc.s 4 */
                loc4 = loc1;
                /* IL_52: ldloc.s 4 */
                /* IL_54: ret  */
                return loc4;
            }
        }
    };
    /* System.Type RuntimeType.get_BaseType()*/
    asm.x600010a = function get_BaseType(arg0)
    {
        var st_08;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld constructor ctor */
                /* IL_07: ldfld constructor BaseType */
                /* IL_0C: call Boolean IsUndefined(System.Object) */
                /* IL_11: brtrue.s IL_23 */
                
                if (asm0.x60001e8(arg0.ctor.BaseType)){
                    __pos__ = 0x23;
                    continue;
                }
                /* IL_13: ldarg.0  */
                /* IL_14: ldfld constructor ctor */
                /* IL_19: ldfld constructor BaseType */
                /* IL_1E: ldnull  */
                /* IL_20: ceq  */
                st_08 = ((arg0.ctor.BaseType === null) ? 1 : 0);
                /* IL_21: br.s IL_24 */
                __pos__ = 0x24;
                continue;
                case 0x23:
                /* IL_23: ldc.i4.1  */
                st_08 = (1|0);
                case 0x24:
                /* IL_24: stloc.0  */
                loc0 = st_08;
                /* IL_25: ldloc.0  */
                /* IL_26: brfalse.s IL_2C */
                
                if ((!(loc0))){
                    __pos__ = 0x2C;
                    continue;
                }
                /* IL_28: ldnull  */
                /* IL_29: stloc.1  */
                loc1 = null;
                /* IL_2A: br.s IL_3F */
                __pos__ = 0x3F;
                continue;
                case 0x2C:
                /* IL_2C: ldarg.0  */
                /* IL_2D: ldfld constructor ctor */
                /* IL_32: ldfld constructor BaseType */
                /* IL_37: call Type GetInstance(System.RuntimeType+constructor) */
                /* IL_3C: stloc.1  */
                loc1 = asm0.x60000fa(arg0.ctor.BaseType);
                case 0x3F:
                /* IL_3F: ldloc.1  */
                /* IL_40: ret  */
                return loc1;
            }
        }
    };;
    /* System.Type[] RuntimeType.GetInterfaces()*/
    asm.x600010b_init = function (arg0)
    {
        ((asm0)["System.RuntimeType+constructor"]().init)();
        asm.x600010b = asm.x600010b_;
    };;
    asm.x600010b = function (arg0)
    {
        asm.x600010b_init(arg0);
        return asm.x600010b_(arg0);
    };;
    asm.x600010b_ = function GetInterfaces(arg0)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var in_block_1;
        var loc3;
        var loc4;
        t0 = (asm0)["System.RuntimeType+constructor"]();
        t1 = (asm0)["System.Type"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld constructor ctor */
                /* IL_07: ldfld Object Interfaces */
                /* IL_0C: call constructor[] FromJsArray[System.RuntimeType+constructor](System.Object) */
                /* IL_11: stloc.0  */
                loc0 = (asm0.x600000d((asm0)["System.RuntimeType+constructor"]()))(arg0.ctor.Interfaces);
                /* IL_12: ldloc.0  */
                /* IL_13: ldlen  */
                /* IL_14: conv.i4  */
                /* IL_15: newarr System.Type */
                /* IL_1A: stloc.1  */
                loc1 = CILJS.new_array(t1,loc0.jsarr.length | (0|0));
                /* IL_1B: ldc.i4.0  */
                /* IL_1C: stloc.2  */
                loc2 = (0|0);
                /* IL_1D: br.s IL_2E */
                __pos__ = 0x2E;
                continue;
                case 0x1F:
                case 0x2E:
                in_block_1 = true;
                
                if (__pos__ > 0x36){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x1F){
                    __pos__ = 0x1F;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x1F:
                        /* IL_1F: ldloc.1  */
                        /* IL_20: ldloc.2  */
                        /* IL_21: ldloc.0  */
                        /* IL_22: ldloc.2  */
                        /* IL_23: ldelem.ref  */
                        /* IL_24: call Type GetInstance(System.RuntimeType+constructor) */
                        /* IL_29: stelem.ref  */
                        CILJS.stelem_ref(loc1,loc2,asm0.x60000fa(CILJS.ldelem_ref(loc0,loc2)));
                        /* IL_2A: ldloc.2  */
                        /* IL_2B: ldc.i4.1  */
                        /* IL_2C: add  */
                        /* IL_2D: stloc.2  */
                        loc2 = (loc2 + (1|0)) | (0|0);
                        case 0x2E:
                        /* IL_2E: ldloc.2  */
                        /* IL_2F: ldloc.0  */
                        /* IL_30: ldlen  */
                        /* IL_31: conv.i4  */
                        /* IL_33: clt  */
                        /* IL_34: stloc.3  */
                        loc3 = ((loc2 < (loc0.jsarr.length | (0|0))) ? 1 : 0);
                        /* IL_35: ldloc.3  */
                        /* IL_36: brtrue.s IL_1F */
                        
                        if (loc3){
                            __pos__ = 0x1F;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_38: ldloc.1  */
                /* IL_39: stloc.s 4 */
                loc4 = loc1;
                /* IL_3D: ldloc.s 4 */
                /* IL_3F: ret  */
                return loc4;
            }
        }
    };
    /* System.Boolean RuntimeType.IsAssignableFrom(Type)*/
    asm.x600010c = function IsAssignableFrom(arg0, arg1)
    {
        var t0;
        var st_14;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        var loc7;
        var in_block_1;
        var loc8;
        var loc9;
        t0 = (asm0)["System.Object"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.0  */
                loc0 = ((arg1 === null) ? 1 : 0);
                /* IL_06: ldloc.0  */
                /* IL_07: brfalse.s IL_10 */
                
                if ((!(loc0))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_09: ldc.i4.0  */
                /* IL_0A: stloc.1  */
                loc1 = (0|0);
                /* IL_0B: br IL_9B */
                __pos__ = 0x9B;
                continue;
                case 0x10:
                /* IL_10: ldarg.0  */
                /* IL_11: ldarg.1  */
                /* IL_12: callvirt Boolean Equals(System.Object) */
                /* IL_17: stloc.2  */
                loc2 = ((arg0.vtable)["asm0.x60000f0"]())(arg0,arg1);
                /* IL_18: ldloc.2  */
                /* IL_19: brfalse.s IL_1F */
                
                if ((!(loc2))){
                    __pos__ = 0x1F;
                    continue;
                }
                /* IL_1B: ldc.i4.1  */
                /* IL_1C: stloc.1  */
                loc1 = (1|0);
                /* IL_1D: br.s IL_9B */
                __pos__ = 0x9B;
                continue;
                case 0x1F:
                /* IL_1F: ldarg.1  */
                /* IL_20: ldarg.0  */
                /* IL_21: callvirt Boolean IsSubclassOf(System.Type) */
                /* IL_26: stloc.3  */
                loc3 = ((arg1.vtable)["asm0.x6000148"]())(arg1,arg0);
                /* IL_27: ldloc.3  */
                /* IL_28: brfalse.s IL_2E */
                
                if ((!(loc3))){
                    __pos__ = 0x2E;
                    continue;
                }
                /* IL_2A: ldc.i4.1  */
                /* IL_2B: stloc.1  */
                loc1 = (1|0);
                /* IL_2C: br.s IL_9B */
                __pos__ = 0x9B;
                continue;
                case 0x2E:
                /* IL_2E: ldarg.1  */
                /* IL_2F: callvirt Boolean get_IsInterface() */
                /* IL_34: brfalse.s IL_48 */
                
                if ((!(((arg1.vtable)["asm0.x600014e"]())(arg1)))){
                    __pos__ = 0x48;
                    continue;
                }
                /* IL_36: ldarg.0  */
                /* IL_37: ldtoken System.Object */
                /* IL_3C: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_41: callvirt Boolean Equals(System.Object) */
                st_14 = ((arg0.vtable)["asm0.x60000f0"]())(arg0,asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)));
                /* IL_46: br.s IL_49 */
                __pos__ = 0x49;
                continue;
                case 0x48:
                /* IL_48: ldc.i4.0  */
                st_14 = (0|0);
                case 0x49:
                /* IL_49: stloc.s 4 */
                loc4 = st_14;
                /* IL_4B: ldloc.s 4 */
                /* IL_4D: brfalse.s IL_53 */
                
                if ((!(loc4))){
                    __pos__ = 0x53;
                    continue;
                }
                /* IL_4F: ldc.i4.1  */
                /* IL_50: stloc.1  */
                loc1 = (1|0);
                /* IL_51: br.s IL_9B */
                __pos__ = 0x9B;
                continue;
                case 0x53:
                /* IL_53: ldarg.0  */
                /* IL_54: callvirt Boolean get_IsInterface() */
                /* IL_59: stloc.s 5 */
                loc5 = ((arg0.vtable)["asm0.x600014e"]())(arg0);
                /* IL_5B: ldloc.s 5 */
                /* IL_5D: brfalse.s IL_97 */
                
                if ((!(loc5))){
                    __pos__ = 0x97;
                    continue;
                }
                /* IL_5F: nop  */
                
                /* IL_60: ldarg.1  */
                /* IL_61: callvirt Type[] GetInterfaces() */
                /* IL_66: stloc.s 6 */
                loc6 = ((arg1.vtable)["asm0.x6000151"]())(arg1);
                /* IL_68: ldc.i4.0  */
                /* IL_69: stloc.s 7 */
                loc7 = (0|0);
                /* IL_6B: br.s IL_88 */
                __pos__ = 0x88;
                continue;
                case 0x6D:
                case 0x82:
                case 0x88:
                in_block_1 = true;
                
                if (__pos__ > 0x94){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x6D){
                    __pos__ = 0x6D;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x6D:
                        /* IL_6D: ldarg.0  */
                        /* IL_6E: ldloc.s 6 */
                        /* IL_70: ldloc.s 7 */
                        /* IL_72: ldelem.ref  */
                        /* IL_73: callvirt Boolean IsAssignableFrom(System.Type) */
                        /* IL_78: stloc.s 8 */
                        loc8 = ((arg0.vtable)["asm0.x6000153"]())(arg0,CILJS.ldelem_ref(loc6,loc7));
                        /* IL_7A: ldloc.s 8 */
                        /* IL_7C: brfalse.s IL_82 */
                        
                        if ((!(loc8))){
                            __pos__ = 0x82;
                            continue;
                        }
                        /* IL_7E: ldc.i4.1  */
                        /* IL_7F: stloc.1  */
                        loc1 = (1|0);
                        /* IL_80: br.s IL_9B */
                        __pos__ = 0x9B;
                        continue;
                        case 0x82:
                        /* IL_82: ldloc.s 7 */
                        /* IL_84: ldc.i4.1  */
                        /* IL_85: add  */
                        /* IL_86: stloc.s 7 */
                        loc7 = (loc7 + (1|0)) | (0|0);
                        case 0x88:
                        /* IL_88: ldloc.s 7 */
                        /* IL_8A: ldloc.s 6 */
                        /* IL_8C: ldlen  */
                        /* IL_8D: conv.i4  */
                        /* IL_8F: clt  */
                        /* IL_90: stloc.s 9 */
                        loc9 = ((loc7 < (loc6.jsarr.length | (0|0))) ? 1 : 0);
                        /* IL_92: ldloc.s 9 */
                        /* IL_94: brtrue.s IL_6D */
                        
                        if (loc9){
                            __pos__ = 0x6D;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_96: nop  */
                
                case 0x97:
                /* IL_97: ldc.i4.0  */
                /* IL_98: stloc.1  */
                loc1 = (0|0);
                case 0x9B:
                /* IL_9B: ldloc.1  */
                /* IL_9C: ret  */
                return loc1;
            }
        }
    };;
    /* static System.String RuntimeType.GetName(String)*/
    asm.x600010d = 
            function (s) {
                var idx = s.jsstr.lastIndexOf('.');
                return CILJS.new_string(s.jsstr.substring(idx + 1));
            }
            ;;
    /* System.String RuntimeType.get_Name()*/
    asm.x600010e = function get_Name(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc1;
        var loc2;
        var loc0;
        t0 = (asm0)["System.Array"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldtoken System.Array */
                /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_0C: callvirt Boolean IsSubclassOf(System.Type) */
                /* IL_11: stloc.1  */
                loc1 = ((arg0.vtable)["asm0.x6000148"]())(arg0,asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)));
                /* IL_12: ldloc.1  */
                /* IL_13: brfalse.s IL_2E */
                
                if ((!(loc1))){
                    __pos__ = 0x2E;
                    continue;
                }
                /* IL_15: nop  */
                
                /* IL_16: ldarg.0  */
                /* IL_17: callvirt Type GetElementType() */
                /* IL_1C: callvirt String get_Name() */
                /* IL_21: ldstr [] */
                /* IL_26: call String Concat(System.String, System.String) */
                /* IL_2B: stloc.2  */
                loc2 = asm0.x6000127((((((arg0.vtable)["asm0.x6000156"]())(arg0).vtable)["asm0.x60001a4"])())(((arg0.vtable)["asm0.x6000156"]())(arg0)),CILJS.new_string("[]"));
                /* IL_2C: br.s IL_48 */
                __pos__ = 0x48;
                continue;
                case 0x2E:
                /* IL_2E: ldarg.0  */
                /* IL_2F: ldfld constructor ctor */
                /* IL_34: ldfld Object FullName */
                /* IL_39: call String FromJsString(System.Object) */
                /* IL_3E: stloc.0  */
                loc0 = CILJS.new_string(arg0.ctor.FullName);
                /* IL_3F: ldloc.0  */
                /* IL_40: call String GetName(System.String) */
                /* IL_45: stloc.2  */
                loc2 = asm0.x600010d(loc0);
                case 0x48:
                /* IL_48: ldloc.2  */
                /* IL_49: ret  */
                return loc2;
            }
        }
    };;
    /* System.Boolean RuntimeType.get_IsValueType()*/
    asm.x600010f = function get_IsValueType(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld constructor ctor */
                /* IL_07: ldfld Boolean IsValueType */
                /* IL_0C: call Boolean op_Explicit(CilJs.JavaScript.Boolean) */
                /* IL_11: stloc.0  */
                loc0 = (arg0.ctor.IsValueType ? 1 : 0);
                /* IL_14: ldloc.0  */
                /* IL_15: ret  */
                return loc0;
            }
        }
    };;
    /* System.Boolean RuntimeType.get_IsPrimitive()*/
    asm.x6000110 = function get_IsPrimitive(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld constructor ctor */
                /* IL_07: ldfld Boolean IsPrimitive */
                /* IL_0C: call Boolean op_Explicit(CilJs.JavaScript.Boolean) */
                /* IL_11: stloc.0  */
                loc0 = (arg0.ctor.IsPrimitive ? 1 : 0);
                /* IL_14: ldloc.0  */
                /* IL_15: ret  */
                return loc0;
            }
        }
    };;
    /* System.Type RuntimeType.GetElementType()*/
    asm.x6000111 = function GetElementType(arg0)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Array"]();
        t1 = (asm0)["System.Exception"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldtoken System.Array */
                /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_0C: callvirt Boolean IsSubclassOf(System.Type) */
                /* IL_11: ldc.i4.0  */
                /* IL_13: ceq  */
                /* IL_14: stloc.0  */
                loc0 = ((((arg0.vtable)["asm0.x6000148"]())(arg0,asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))) === (0|0)) ? 1 : 0);
                /* IL_15: ldloc.0  */
                /* IL_16: brfalse.s IL_23 */
                
                if ((!(loc0))){
                    __pos__ = 0x23;
                    continue;
                }
                /* IL_18: ldstr Invalid operation */
                /* IL_1D: newobj Void .ctor(System.String) */
                /* IL_22: throw  */
                throw CILJS.newobj(t1,asm0.x6000077,[null, CILJS.new_string("Invalid operation")]);
                case 0x23:
                /* IL_23: ldarg.0  */
                /* IL_24: callvirt Type[] GetGenericArguments() */
                /* IL_29: ldc.i4.0  */
                /* IL_2A: ldelem.ref  */
                /* IL_2B: stloc.1  */
                loc1 = CILJS.ldelem_ref(((arg0.vtable)["asm0.x6000150"]())(arg0),(0|0));
                /* IL_2E: ldloc.1  */
                /* IL_2F: ret  */
                return loc1;
            }
        }
    };;
    /* System.Reflection.MethodInfo[] RuntimeType.GetMethods()*/
    asm.x6000112_init = function (arg0)
    {
        ((asm0)["System.Reflection.MethodInfo"]().init)();
        ((asm0)["CilJs.JavaScript.Array"]().init)();
        asm.x6000112 = asm.x6000112_;
    };;
    asm.x6000112 = function (arg0)
    {
        asm.x6000112_init(arg0);
        return asm.x6000112_(arg0);
    };;
    asm.x6000112_ = function GetMethods(arg0)
    {
        var t0;
        var t1;
        var st_03;
        var st_04;
        var st_05;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        var in_block_1;
        var loc6;
        var loc7;
        var loc8;
        var loc9;
        t0 = (asm0)["System.Reflection.MethodInfo"]();
        t1 = (asm0)["CilJs.JavaScript.Array"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: callvirt Type get_BaseType() */
                /* IL_07: brtrue.s IL_11 */
                
                if (((arg0.vtable)["asm0.x600014b"]())(arg0)){
                    __pos__ = 0x11;
                    continue;
                }
                /* IL_09: ldc.i4.0  */
                /* IL_0A: newarr System.Reflection.MethodInfo */
                st_05 = CILJS.new_array(t0,(0|0));
                /* IL_0F: br.s IL_1C */
                __pos__ = 0x1C;
                continue;
                case 0x11:
                /* IL_11: ldarg.0  */
                st_03 = arg0;
                /* IL_12: callvirt Type get_BaseType() */
                st_04 = ((st_03.vtable)["asm0.x600014b"]())(st_03);
                /* IL_17: callvirt MethodInfo[] GetMethods() */
                st_05 = ((st_04.vtable)["asm0.x6000157"]())(st_04);
                case 0x1C:
                /* IL_1C: stloc.0  */
                loc0 = st_05;
                /* IL_1D: ldloc.0  */
                /* IL_1E: ldlen  */
                /* IL_1F: conv.i4  */
                /* IL_20: ldarg.0  */
                /* IL_21: ldfld constructor ctor */
                /* IL_26: ldfld Array Methods */
                /* IL_2B: callvirt Int32 get_Length() */
                /* IL_30: add  */
                /* IL_31: stloc.1  */
                loc1 = ((loc0.jsarr.length | (0|0)) + arg0.ctor.Methods.length) | (0|0);
                /* IL_32: ldarg.0  */
                /* IL_33: ldfld constructor ctor */
                /* IL_38: ldfld Array Methods */
                /* IL_3D: callvirt Int32 get_Length() */
                /* IL_42: stloc.2  */
                loc2 = arg0.ctor.Methods.length;
                /* IL_43: ldloc.0  */
                /* IL_44: ldlen  */
                /* IL_45: conv.i4  */
                /* IL_46: stloc.3  */
                loc3 = loc0.jsarr.length | (0|0);
                /* IL_47: ldloc.1  */
                /* IL_48: newarr System.Reflection.MethodInfo */
                /* IL_4D: stloc.s 4 */
                loc4 = CILJS.new_array(t0,loc1);
                /* IL_4F: ldc.i4.0  */
                /* IL_50: stloc.s 5 */
                loc5 = (0|0);
                /* IL_52: br.s IL_7D */
                __pos__ = 0x7D;
                continue;
                case 0x54:
                case 0x7D:
                in_block_1 = true;
                
                if (__pos__ > 0x86){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x54){
                    __pos__ = 0x54;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x54:
                        /* IL_54: nop  */
                        
                        /* IL_55: ldloc.s 4 */
                        /* IL_57: ldloc.s 5 */
                        /* IL_59: ldarg.0  */
                        /* IL_5A: ldfld constructor ctor */
                        /* IL_5F: ldfld Array Methods */
                        /* IL_64: ldloc.s 5 */
                        /* IL_66: callvirt Object get_Item(System.Int32) */
                        /* IL_6B: call Array UnsafeCast[CilJs.JavaScript.Array](System.Object) */
                        /* IL_70: call MethodInfo GetInstance(CilJs.JavaScript.Array) */
                        /* IL_75: stelem.ref  */
                        CILJS.stelem_ref(loc4,loc5,asm0.x60001a7(arg0.ctor.Methods[loc5]));
                        /* IL_76: nop  */
                        
                        /* IL_77: ldloc.s 5 */
                        /* IL_79: ldc.i4.1  */
                        /* IL_7A: add  */
                        /* IL_7B: stloc.s 5 */
                        loc5 = (loc5 + (1|0)) | (0|0);
                        case 0x7D:
                        /* IL_7D: ldloc.s 5 */
                        /* IL_7F: ldloc.2  */
                        /* IL_81: clt  */
                        /* IL_82: stloc.s 6 */
                        loc6 = ((loc5 < loc2) ? 1 : 0);
                        /* IL_84: ldloc.s 6 */
                        /* IL_86: brtrue.s IL_54 */
                        
                        if (loc6){
                            __pos__ = 0x54;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_88: ldc.i4.0  */
                /* IL_89: stloc.s 7 */
                loc7 = (0|0);
                /* IL_8B: br.s IL_A0 */
                __pos__ = 0xA0;
                continue;
                case 0x8D:
                case 0xA0:
                in_block_1 = true;
                
                if (__pos__ > 0xA9){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x8D){
                    __pos__ = 0x8D;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x8D:
                        /* IL_8D: nop  */
                        
                        /* IL_8E: ldloc.s 4 */
                        /* IL_90: ldloc.s 7 */
                        /* IL_92: ldloc.2  */
                        /* IL_93: add  */
                        /* IL_94: ldloc.0  */
                        /* IL_95: ldloc.s 7 */
                        /* IL_97: ldelem.ref  */
                        /* IL_98: stelem.ref  */
                        CILJS.stelem_ref(loc4,(loc7 + loc2) | (0|0),CILJS.ldelem_ref(loc0,loc7));
                        /* IL_99: nop  */
                        
                        /* IL_9A: ldloc.s 7 */
                        /* IL_9C: ldc.i4.1  */
                        /* IL_9D: add  */
                        /* IL_9E: stloc.s 7 */
                        loc7 = (loc7 + (1|0)) | (0|0);
                        case 0xA0:
                        /* IL_A0: ldloc.s 7 */
                        /* IL_A2: ldloc.3  */
                        /* IL_A4: clt  */
                        /* IL_A5: stloc.s 8 */
                        loc8 = ((loc7 < loc3) ? 1 : 0);
                        /* IL_A7: ldloc.s 8 */
                        /* IL_A9: brtrue.s IL_8D */
                        
                        if (loc8){
                            __pos__ = 0x8D;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_AB: ldloc.s 4 */
                /* IL_AD: stloc.s 9 */
                loc9 = loc4;
                /* IL_B1: ldloc.s 9 */
                /* IL_B3: ret  */
                return loc9;
            }
        }
    };
    /* System.Boolean RuntimeType.IsInstanceOfType(Object)*/
    asm.x6000114 = function IsInstanceOfType(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: ldarg.0  */
                /* IL_03: ldfld constructor ctor */
                /* IL_08: call Boolean IsInstanceOfTypeImpl(System.Object, System.Object) */
                /* IL_0D: stloc.0  */
                loc0 = (arg0.ctor.IsInst(arg1) ? 1: 0);
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /*  RuntimeType..ctor(constructor)*/
    asm.x60000f8 = function _ctor(arg0, arg1)
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
                asm0.x6000159(arg0);
                /* IL_06: nop  */
                
                /* IL_07: nop  */
                
                /* IL_08: ldarg.0  */
                /* IL_09: ldarg.1  */
                /* IL_0A: stfld constructor ctor */
                arg0.ctor = arg1;
                /* IL_0F: ldarg.1  */
                /* IL_10: call Void init(System.RuntimeType+constructor) */
                arg1.init();
                /* IL_15: nop  */
                
                /* IL_16: ret  */
                return ;
            }
        }
    };;
    /* System.Object RuntimeTypeHandle.get_Value()*/
    asm.x6000115 = function get_Value(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Object value */
                /* IL_07: stloc.0  */
                loc0 = arg0.r().value;
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* System.String SByte.ToString()*/
    asm.x6000116 = function ToString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.SByte"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i1  */
                /* IL_03: box System.SByte */
                /* IL_08: call String SignedPrimitiveToString(System.Object) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x60000c0(CILJS.make_box(arg0.r(),t0));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 SByte.CompareTo(Object)*/
    asm.x6000117 = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: unbox.any System.SByte */
                /* IL_08: call Int32 CompareTo(System.SByte) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x6000118(arg0,CILJS.unbox_any(arg1,(asm0)["System.SByte"]()));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 SByte.CompareTo(SByte)*/
    asm.x6000118 = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i1  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldloc.0  */
                /* IL_05: ldarg.1  */
                /* IL_07: clt  */
                /* IL_08: stloc.1  */
                loc1 = ((loc0 < arg1) ? 1 : 0);
                /* IL_09: ldloc.1  */
                /* IL_0A: brfalse.s IL_10 */
                
                if ((!(loc1))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0C: ldc.i4.m1  */
                /* IL_0D: stloc.2  */
                loc2 = (-1|0);
                /* IL_0E: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x10:
                /* IL_10: ldloc.0  */
                /* IL_11: ldarg.1  */
                /* IL_13: cgt  */
                /* IL_14: stloc.3  */
                loc3 = ((loc0 > arg1) ? 1 : 0);
                /* IL_15: ldloc.3  */
                /* IL_16: brfalse.s IL_1C */
                
                if ((!(loc3))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.1  */
                /* IL_19: stloc.2  */
                loc2 = (1|0);
                /* IL_1A: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.0  */
                /* IL_1D: stloc.2  */
                loc2 = (0|0);
                case 0x20:
                /* IL_20: ldloc.2  */
                /* IL_21: ret  */
                return loc2;
            }
        }
    };;
    /* System.Boolean SByte.Equals(SByte)*/
    asm.x6000119 = function Equals(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i1  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldarg.1  */
                /* IL_05: stloc.1  */
                loc1 = arg1;
                /* IL_06: ldloc.0  */
                /* IL_07: ldloc.1  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.2  */
                loc2 = ((loc0 === loc1) ? 1 : 0);
                /* IL_0D: ldloc.2  */
                /* IL_0E: ret  */
                return loc2;
            }
        }
    };;
    /* System.Boolean SByte.Equals(Object)*/
    asm.x600011a = function Equals(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.SByte"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: isinst System.SByte */
                /* IL_07: ldnull  */
                /* IL_09: cgt.un  */
                /* IL_0A: ldc.i4.0  */
                /* IL_0C: ceq  */
                /* IL_0D: stloc.0  */
                loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_0E: ldloc.0  */
                /* IL_0F: brfalse.s IL_15 */
                
                if ((!(loc0))){
                    __pos__ = 0x15;
                    continue;
                }
                /* IL_11: ldc.i4.0  */
                /* IL_12: stloc.1  */
                loc1 = (0|0);
                /* IL_13: br.s IL_24 */
                __pos__ = 0x24;
                continue;
                case 0x15:
                /* IL_15: ldarg.0  */
                /* IL_16: ldarg.1  */
                /* IL_17: unbox.any System.SByte */
                /* IL_1C: call Boolean Equals(System.SByte) */
                /* IL_21: stloc.1  */
                loc1 = asm0.x6000119(arg0,CILJS.unbox_any(arg1,t0));
                case 0x24:
                /* IL_24: ldloc.1  */
                /* IL_25: ret  */
                return loc1;
            }
        }
    };;
    /* System.Int32 SByte.GetHashCode()*/
    asm.x600011b = function GetHashCode(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i1  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_06: ldloc.0  */
                /* IL_07: ret  */
                return loc0;
            }
        }
    };;
    /*  SerializableAttribute..ctor()*/
    asm.x600011c = function _ctor(arg0)
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
                asm0.x600003e(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* System.String Single.ToString()*/
    asm.x600011d = function ToString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Single"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.r4  */
                /* IL_03: box System.Single */
                /* IL_08: call String SignedPrimitiveToString(System.Object) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x60000c0(CILJS.make_box(arg0.r(),t0));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Single.CompareTo(Object)*/
    asm.x600011e = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: unbox.any System.Single */
                /* IL_08: call Int32 CompareTo(System.Single) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x600011f(arg0,CILJS.unbox_any(arg1,(asm0)["System.Single"]()));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 Single.CompareTo(Single)*/
    asm.x600011f = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.r4  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldloc.0  */
                /* IL_05: ldarg.1  */
                /* IL_07: clt  */
                /* IL_08: stloc.1  */
                loc1 = ((loc0 < arg1) ? 1 : 0);
                /* IL_09: ldloc.1  */
                /* IL_0A: brfalse.s IL_10 */
                
                if ((!(loc1))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0C: ldc.i4.m1  */
                /* IL_0D: stloc.2  */
                loc2 = (-1|0);
                /* IL_0E: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x10:
                /* IL_10: ldloc.0  */
                /* IL_11: ldarg.1  */
                /* IL_13: cgt  */
                /* IL_14: stloc.3  */
                loc3 = ((loc0 > arg1) ? 1 : 0);
                /* IL_15: ldloc.3  */
                /* IL_16: brfalse.s IL_1C */
                
                if ((!(loc3))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.1  */
                /* IL_19: stloc.2  */
                loc2 = (1|0);
                /* IL_1A: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.0  */
                /* IL_1D: stloc.2  */
                loc2 = (0|0);
                case 0x20:
                /* IL_20: ldloc.2  */
                /* IL_21: ret  */
                return loc2;
            }
        }
    };;
    /* static System.Int32 String.GetLengthImpl(Object)*/
    asm.x6000120 = function(o) { return o.jsstr.length; };;
    /* static System.Boolean String.EqualsImpl(String,String)*/
    asm.x6000121 = function(a, b) { return a.jsstr === b.jsstr ? 1 : 0; };;
    /* static System.String String.ConcatImpl(String[])*/
    asm.x6000122 = function (args) { return CILJS.new_string(String.prototype.concat.apply('', args.jsarr)); };;
    /* static System.Char String.GetChar(String,Int32)*/
    asm.x6000123 = function (s, i) { return s.jsstr.charCodeAt(i); };;
    /* static System.String String.ReplaceImpl(String,String,String)*/
    asm.x6000124 = function replaceAll(s, find, replace) {
                        function escapeRegExp(s2) {
                            return s2.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
                        }
                      return CILJS.new_string(s.jsstr.replace(new RegExp(escapeRegExp(find.jsstr), 'g'), replace.jsstr));
                    };;
    /* System.Char String.get_Chars(Int32)*/
    asm.x6000125 = function get_Chars(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: call Char GetChar(System.String, System.Int32) */
                /* IL_08: stloc.0  */
                loc0 = asm0.x6000123(arg0,arg1);
                /* IL_0B: ldloc.0  */
                /* IL_0C: ret  */
                return loc0;
            }
        }
    };;
    /* static System.String String.Concat(String,String)*/
    asm.x6000127 = function Concat(arg0, arg1)
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
        var st_0A;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.2  */
                st_00 = (2|0);
                /* IL_02: newarr System.String */
                st_01 = CILJS.new_array(t0,st_00);
                /* IL_07: dup  */
                st_05 = st_02 = st_01;
                /* IL_08: ldc.i4.0  */
                st_03 = (0|0);
                /* IL_09: ldarg.0  */
                st_04 = arg0;
                /* IL_0A: stelem.ref  */
                CILJS.stelem_ref(st_02,st_03,st_04);
                /* IL_0B: dup  */
                st_09 = st_06 = st_05;
                /* IL_0C: ldc.i4.1  */
                st_07 = (1|0);
                /* IL_0D: ldarg.1  */
                st_08 = arg1;
                /* IL_0E: stelem.ref  */
                CILJS.stelem_ref(st_06,st_07,st_08);
                /* IL_0F: call String ConcatImpl(System.String[]) */
                st_0A = asm0.x6000122(st_09);
                /* IL_14: stloc.0  */
                loc0 = st_0A;
                /* IL_17: ldloc.0  */
                /* IL_18: ret  */
                return loc0;
            }
        }
    };;
    /* static System.String String.Concat(Object,Object,Object)*/
    asm.x6000128 = function Concat(arg0, arg1, arg2)
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var st_0C;
        var st_0D;
        var st_0E;
        var st_0F;
        var st_10;
        var st_11;
        var st_12;
        var st_13;
        var st_14;
        var st_15;
        var st_16;
        var st_17;
        var st_18;
        var st_19;
        var st_1A;
        var st_1B;
        var st_1C;
        var st_1D;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                st_00 = arg0;
                /* IL_02: dup  */
                st_03 = st_02 = st_01 = st_00;
                /* IL_03: brtrue.s IL_0B */
                
                if (st_01){
                    __pos__ = 0xB;
                    continue;
                }
                /* IL_05: pop  */
                
                asm0.x6000142();
                /* IL_06: ldsfld String Empty */
                st_03 = t0.Empty;
                case 0xB:
                /* IL_0B: starg.s 0 */
                arg0 = st_03;
                /* IL_0D: ldarg.1  */
                st_04 = arg1;
                /* IL_0E: dup  */
                st_07 = st_06 = st_05 = st_04;
                /* IL_0F: brtrue.s IL_17 */
                
                if (st_05){
                    __pos__ = 0x17;
                    continue;
                }
                /* IL_11: pop  */
                
                asm0.x6000142();
                /* IL_12: ldsfld String Empty */
                st_07 = t0.Empty;
                case 0x17:
                /* IL_17: starg.s 1 */
                arg1 = st_07;
                /* IL_19: ldarg.2  */
                st_08 = arg2;
                /* IL_1A: dup  */
                st_0B = st_0A = st_09 = st_08;
                /* IL_1B: brtrue.s IL_23 */
                
                if (st_09){
                    __pos__ = 0x23;
                    continue;
                }
                /* IL_1D: pop  */
                
                asm0.x6000142();
                /* IL_1E: ldsfld String Empty */
                st_0B = t0.Empty;
                case 0x23:
                /* IL_23: starg.s 2 */
                arg2 = st_0B;
                /* IL_25: ldc.i4.3  */
                st_0C = (3|0);
                /* IL_26: newarr System.String */
                st_0D = CILJS.new_array(t0,st_0C);
                /* IL_2B: dup  */
                st_12 = st_0F = st_0D;
                /* IL_2C: ldc.i4.0  */
                st_10 = (0|0);
                /* IL_2D: ldarg.0  */
                st_0E = arg0;
                /* IL_2E: callvirt String ToString() */
                st_11 = ((st_0E.vtable)["asm0.x60000ed"]())(CILJS.convert_box_to_pointer_as_needed(st_0E));
                /* IL_33: stelem.ref  */
                CILJS.stelem_ref(st_0F,st_10,st_11);
                /* IL_34: dup  */
                st_17 = st_14 = st_12;
                /* IL_35: ldc.i4.1  */
                st_15 = (1|0);
                /* IL_36: ldarg.1  */
                st_13 = arg1;
                /* IL_37: callvirt String ToString() */
                st_16 = ((st_13.vtable)["asm0.x60000ed"]())(CILJS.convert_box_to_pointer_as_needed(st_13));
                /* IL_3C: stelem.ref  */
                CILJS.stelem_ref(st_14,st_15,st_16);
                /* IL_3D: dup  */
                st_1C = st_19 = st_17;
                /* IL_3E: ldc.i4.2  */
                st_1A = (2|0);
                /* IL_3F: ldarg.2  */
                st_18 = arg2;
                /* IL_40: callvirt String ToString() */
                st_1B = ((st_18.vtable)["asm0.x60000ed"]())(CILJS.convert_box_to_pointer_as_needed(st_18));
                /* IL_45: stelem.ref  */
                CILJS.stelem_ref(st_19,st_1A,st_1B);
                /* IL_46: call String ConcatImpl(System.String[]) */
                st_1D = asm0.x6000122(st_1C);
                /* IL_4B: stloc.0  */
                loc0 = st_1D;
                /* IL_4E: ldloc.0  */
                /* IL_4F: ret  */
                return loc0;
            }
        }
    };;
    /* static System.String String.Concat(String,String,String)*/
    asm.x6000129 = function Concat(arg0, arg1, arg2)
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var st_0C;
        var st_0D;
        var st_0E;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.3  */
                st_00 = (3|0);
                /* IL_02: newarr System.String */
                st_01 = CILJS.new_array(t0,st_00);
                /* IL_07: dup  */
                st_05 = st_02 = st_01;
                /* IL_08: ldc.i4.0  */
                st_03 = (0|0);
                /* IL_09: ldarg.0  */
                st_04 = arg0;
                /* IL_0A: stelem.ref  */
                CILJS.stelem_ref(st_02,st_03,st_04);
                /* IL_0B: dup  */
                st_09 = st_06 = st_05;
                /* IL_0C: ldc.i4.1  */
                st_07 = (1|0);
                /* IL_0D: ldarg.1  */
                st_08 = arg1;
                /* IL_0E: stelem.ref  */
                CILJS.stelem_ref(st_06,st_07,st_08);
                /* IL_0F: dup  */
                st_0D = st_0A = st_09;
                /* IL_10: ldc.i4.2  */
                st_0B = (2|0);
                /* IL_11: ldarg.2  */
                st_0C = arg2;
                /* IL_12: stelem.ref  */
                CILJS.stelem_ref(st_0A,st_0B,st_0C);
                /* IL_13: call String ConcatImpl(System.String[]) */
                st_0E = asm0.x6000122(st_0D);
                /* IL_18: stloc.0  */
                loc0 = st_0E;
                /* IL_1B: ldloc.0  */
                /* IL_1C: ret  */
                return loc0;
            }
        }
    };;
    /* static System.String String.Concat(String,String,String,String)*/
    asm.x600012a = function Concat(arg0, arg1, arg2, arg3)
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var st_0C;
        var st_0D;
        var st_0E;
        var st_0F;
        var st_10;
        var st_11;
        var st_12;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.4  */
                st_00 = (4|0);
                /* IL_02: newarr System.String */
                st_01 = CILJS.new_array(t0,st_00);
                /* IL_07: dup  */
                st_05 = st_02 = st_01;
                /* IL_08: ldc.i4.0  */
                st_03 = (0|0);
                /* IL_09: ldarg.0  */
                st_04 = arg0;
                /* IL_0A: stelem.ref  */
                CILJS.stelem_ref(st_02,st_03,st_04);
                /* IL_0B: dup  */
                st_09 = st_06 = st_05;
                /* IL_0C: ldc.i4.1  */
                st_07 = (1|0);
                /* IL_0D: ldarg.1  */
                st_08 = arg1;
                /* IL_0E: stelem.ref  */
                CILJS.stelem_ref(st_06,st_07,st_08);
                /* IL_0F: dup  */
                st_0D = st_0A = st_09;
                /* IL_10: ldc.i4.2  */
                st_0B = (2|0);
                /* IL_11: ldarg.2  */
                st_0C = arg2;
                /* IL_12: stelem.ref  */
                CILJS.stelem_ref(st_0A,st_0B,st_0C);
                /* IL_13: dup  */
                st_11 = st_0E = st_0D;
                /* IL_14: ldc.i4.3  */
                st_0F = (3|0);
                /* IL_15: ldarg.3  */
                st_10 = arg3;
                /* IL_16: stelem.ref  */
                CILJS.stelem_ref(st_0E,st_0F,st_10);
                /* IL_17: call String ConcatImpl(System.String[]) */
                st_12 = asm0.x6000122(st_11);
                /* IL_1C: stloc.0  */
                loc0 = st_12;
                /* IL_1F: ldloc.0  */
                /* IL_20: ret  */
                return loc0;
            }
        }
    };;
    /* static System.String String.Concat(Object,Object)*/
    asm.x600012b = function Concat(arg0, arg1)
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var st_0C;
        var st_0D;
        var st_0E;
        var st_0F;
        var st_10;
        var st_11;
        var st_12;
        var st_13;
        var st_14;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                st_00 = arg0;
                /* IL_02: dup  */
                st_03 = st_02 = st_01 = st_00;
                /* IL_03: brtrue.s IL_0B */
                
                if (st_01){
                    __pos__ = 0xB;
                    continue;
                }
                /* IL_05: pop  */
                
                asm0.x6000142();
                /* IL_06: ldsfld String Empty */
                st_03 = t0.Empty;
                case 0xB:
                /* IL_0B: starg.s 0 */
                arg0 = st_03;
                /* IL_0D: ldarg.1  */
                st_04 = arg1;
                /* IL_0E: dup  */
                st_07 = st_06 = st_05 = st_04;
                /* IL_0F: brtrue.s IL_17 */
                
                if (st_05){
                    __pos__ = 0x17;
                    continue;
                }
                /* IL_11: pop  */
                
                asm0.x6000142();
                /* IL_12: ldsfld String Empty */
                st_07 = t0.Empty;
                case 0x17:
                /* IL_17: starg.s 1 */
                arg1 = st_07;
                /* IL_19: ldc.i4.2  */
                st_08 = (2|0);
                /* IL_1A: newarr System.String */
                st_09 = CILJS.new_array(t0,st_08);
                /* IL_1F: dup  */
                st_0E = st_0B = st_09;
                /* IL_20: ldc.i4.0  */
                st_0C = (0|0);
                /* IL_21: ldarg.0  */
                st_0A = arg0;
                /* IL_22: callvirt String ToString() */
                st_0D = ((st_0A.vtable)["asm0.x60000ed"]())(CILJS.convert_box_to_pointer_as_needed(st_0A));
                /* IL_27: stelem.ref  */
                CILJS.stelem_ref(st_0B,st_0C,st_0D);
                /* IL_28: dup  */
                st_13 = st_10 = st_0E;
                /* IL_29: ldc.i4.1  */
                st_11 = (1|0);
                /* IL_2A: ldarg.1  */
                st_0F = arg1;
                /* IL_2B: callvirt String ToString() */
                st_12 = ((st_0F.vtable)["asm0.x60000ed"]())(CILJS.convert_box_to_pointer_as_needed(st_0F));
                /* IL_30: stelem.ref  */
                CILJS.stelem_ref(st_10,st_11,st_12);
                /* IL_31: call String ConcatImpl(System.String[]) */
                st_14 = asm0.x6000122(st_13);
                /* IL_36: stloc.0  */
                loc0 = st_14;
                /* IL_39: ldloc.0  */
                /* IL_3A: ret  */
                return loc0;
            }
        }
    };;
    /* static System.String String.Concat(String[])*/
    asm.x600012c = function Concat(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call String ConcatImpl(System.String[]) */
                /* IL_07: stloc.0  */
                loc0 = asm0.x6000122(arg0);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* static System.String String.Concat(Object[])*/
    asm.x600012d = function Concat(arg0)
    {
        var t0;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
        var st_0A;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var in_block_1;
        var loc2;
        var loc3;
        var loc4;
        t0 = (asm0)["System.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldlen  */
                /* IL_03: conv.i4  */
                /* IL_04: newarr System.String */
                /* IL_09: stloc.0  */
                loc0 = CILJS.new_array(t0,arg0.jsarr.length | (0|0));
                /* IL_0A: ldc.i4.0  */
                /* IL_0B: stloc.1  */
                loc1 = (0|0);
                /* IL_0C: br.s IL_2A */
                __pos__ = 0x2A;
                continue;
                case 0xE:
                case 0x1B:
                case 0x2A:
                in_block_1 = true;
                
                if (__pos__ > 0x32){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0xE){
                    __pos__ = 0xE;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0xE:
                        /* IL_0E: nop  */
                        
                        /* IL_0F: ldarg.0  */
                        st_05 = arg0;
                        /* IL_10: ldloc.1  */
                        st_06 = loc1;
                        /* IL_11: ldelem.ref  */
                        st_07 = CILJS.ldelem_ref(st_05,st_06);
                        /* IL_12: dup  */
                        st_0A = st_09 = st_08 = st_07;
                        /* IL_13: brtrue.s IL_1B */
                        
                        if (st_08){
                            __pos__ = 0x1B;
                            continue;
                        }
                        /* IL_15: pop  */
                        
                        asm0.x6000142();
                        /* IL_16: ldsfld String Empty */
                        st_0A = t0.Empty;
                        case 0x1B:
                        /* IL_1B: stloc.2  */
                        loc2 = st_0A;
                        /* IL_1C: ldloc.0  */
                        /* IL_1D: ldloc.1  */
                        /* IL_1E: ldloc.2  */
                        /* IL_1F: callvirt String ToString() */
                        /* IL_24: stelem.ref  */
                        CILJS.stelem_ref(loc0,loc1,((loc2.vtable)["asm0.x60000ed"]())(CILJS.convert_box_to_pointer_as_needed(loc2)));
                        /* IL_25: nop  */
                        
                        /* IL_26: ldloc.1  */
                        /* IL_27: ldc.i4.1  */
                        /* IL_28: add  */
                        /* IL_29: stloc.1  */
                        loc1 = (loc1 + (1|0)) | (0|0);
                        case 0x2A:
                        /* IL_2A: ldloc.1  */
                        /* IL_2B: ldarg.0  */
                        /* IL_2C: ldlen  */
                        /* IL_2D: conv.i4  */
                        /* IL_2F: clt  */
                        /* IL_30: stloc.3  */
                        loc3 = ((loc1 < (arg0.jsarr.length | (0|0))) ? 1 : 0);
                        /* IL_31: ldloc.3  */
                        /* IL_32: brtrue.s IL_0E */
                        
                        if (loc3){
                            __pos__ = 0xE;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_34: ldloc.0  */
                /* IL_35: call String Concat(System.String[]) */
                /* IL_3A: stloc.s 4 */
                loc4 = asm0.x600012c(loc0);
                /* IL_3E: ldloc.s 4 */
                /* IL_40: ret  */
                return loc4;
            }
        }
    };;
    /* System.String String.Replace(String,String)*/
    asm.x600012e = function Replace(arg0, arg1, arg2)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: ldarg.2  */
                /* IL_04: call String ReplaceImpl(System.String, System.String, System.String) */
                /* IL_09: stloc.0  */
                loc0 = asm0.x6000124(arg0,arg1,arg2);
                /* IL_0C: ldloc.0  */
                /* IL_0D: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 String.get_Length()*/
    asm.x600012f = function get_Length(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call Int32 GetLengthImpl(System.Object) */
                /* IL_07: stloc.0  */
                loc0 = asm0.x6000120(arg0);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* System.String String.ToString()*/
    asm.x6000130 = function ToString(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: stloc.0  */
                loc0 = arg0;
                /* IL_05: ldloc.0  */
                /* IL_06: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Boolean String.op_Inequality(String,String)*/
    asm.x6000131 = function op_Inequality(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: call Boolean op_Equality(System.String, System.String) */
                /* IL_08: ldc.i4.0  */
                /* IL_0A: ceq  */
                /* IL_0B: stloc.0  */
                loc0 = ((asm0.x6000132(arg0,arg1) === (0|0)) ? 1 : 0);
                /* IL_0E: ldloc.0  */
                /* IL_0F: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Boolean String.op_Equality(String,String)*/
    asm.x6000132 = function op_Equality(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.0  */
                loc0 = ((arg0 === null) ? 1 : 0);
                /* IL_06: ldloc.0  */
                /* IL_07: brfalse.s IL_10 */
                
                if ((!(loc0))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_09: ldarg.1  */
                /* IL_0A: ldnull  */
                /* IL_0C: ceq  */
                /* IL_0D: stloc.1  */
                loc1 = ((arg1 === null) ? 1 : 0);
                /* IL_0E: br.s IL_26 */
                __pos__ = 0x26;
                continue;
                case 0x10:
                /* IL_10: ldarg.1  */
                /* IL_11: ldnull  */
                /* IL_13: ceq  */
                /* IL_14: stloc.2  */
                loc2 = ((arg1 === null) ? 1 : 0);
                /* IL_15: ldloc.2  */
                /* IL_16: brfalse.s IL_1C */
                
                if ((!(loc2))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.0  */
                /* IL_19: stloc.1  */
                loc1 = (0|0);
                /* IL_1A: br.s IL_26 */
                __pos__ = 0x26;
                continue;
                case 0x1C:
                /* IL_1C: ldarg.0  */
                /* IL_1D: ldarg.1  */
                /* IL_1E: call Boolean EqualsImpl(System.String, System.String) */
                /* IL_23: stloc.1  */
                loc1 = asm0.x6000121(arg0,arg1);
                case 0x26:
                /* IL_26: ldloc.1  */
                /* IL_27: ret  */
                return loc1;
            }
        }
    };;
    /* System.Boolean String.Equals(String)*/
    asm.x6000133 = function Equals(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.0  */
                loc0 = ((arg1 === null) ? 1 : 0);
                /* IL_06: ldloc.0  */
                /* IL_07: brfalse.s IL_0D */
                
                if ((!(loc0))){
                    __pos__ = 0xD;
                    continue;
                }
                /* IL_09: ldc.i4.0  */
                /* IL_0A: stloc.1  */
                loc1 = (0|0);
                /* IL_0B: br.s IL_17 */
                __pos__ = 0x17;
                continue;
                case 0xD:
                /* IL_0D: ldarg.0  */
                /* IL_0E: ldarg.1  */
                /* IL_0F: call Boolean EqualsImpl(System.String, System.String) */
                /* IL_14: stloc.1  */
                loc1 = asm0.x6000121(arg0,arg1);
                case 0x17:
                /* IL_17: ldloc.1  */
                /* IL_18: ret  */
                return loc1;
            }
        }
    };;
    /* System.Boolean String.Equals(Object)*/
    asm.x6000134 = function Equals(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: isinst System.String */
                /* IL_08: call Boolean Equals(System.String) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x6000133(arg0,t0.IsInst(arg1));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Int32 String.GetHashCodeImpl(String)*/
    asm.x6000135 = 
            function (o) {
                var str = o.jsstr;
                var length = str.length;
                var h = 0;
                for (var i = 0; i < length; i += 1)
                    h = (h << 5) - h + str.charCodeAt(i);
                return h;
            };;
    /* System.Int32 String.GetHashCode()*/
    asm.x6000136 = function GetHashCode(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call Int32 GetHashCodeImpl(System.String) */
                /* IL_07: stloc.0  */
                loc0 = asm0.x6000135(arg0);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Int32 String.CompareOrdinal(String,String)*/
    asm.x6000137 = 
            function (a, b) {
                if (a.jsstr < b.jsstr)
                    return -1;

                if (a.jsstr > b.jsstr)
                    return 1;

                return 0;
            }
            ;;
    /* static System.Int32 String.Compare(String,String)*/
    asm.x6000138 = function Compare(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: call Int32 CompareOrdinal(System.String, System.String) */
                /* IL_08: stloc.0  */
                loc0 = asm0.x6000137(arg0,arg1);
                /* IL_0B: ldloc.0  */
                /* IL_0C: ret  */
                return loc0;
            }
        }
    };;
    /* static System.String String.Format(String,Object[])*/
    asm.x6000139 = function Format(arg0, arg1)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var loc0;
        var in_block_1;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        t0 = (asm0)["System.String"]();
        t1 = (asm0)["System.Int32"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.0  */
                /* IL_02: stloc.0  */
                loc0 = (0|0);
                /* IL_03: br.s IL_40 */
                __pos__ = 0x40;
                continue;
                case 0x5:
                case 0x18:
                case 0x40:
                in_block_1 = true;
                
                if (__pos__ > 0x48){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x5){
                    __pos__ = 0x5;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x5:
                        /* IL_05: nop  */
                        
                        /* IL_06: ldarg.1  */
                        /* IL_07: ldloc.0  */
                        /* IL_08: ldelem.ref  */
                        /* IL_09: stloc.1  */
                        loc1 = CILJS.ldelem_ref(arg1,loc0);
                        /* IL_0A: ldloc.1  */
                        /* IL_0B: ldnull  */
                        /* IL_0D: ceq  */
                        /* IL_0E: stloc.2  */
                        loc2 = ((loc1 === null) ? 1 : 0);
                        /* IL_0F: ldloc.2  */
                        /* IL_10: brfalse.s IL_18 */
                        
                        if ((!(loc2))){
                            __pos__ = 0x18;
                            continue;
                        }
                        asm0.x6000142();
                        /* IL_12: ldsfld String Empty */
                        /* IL_17: stloc.1  */
                        loc1 = t0.Empty;
                        case 0x18:
                        /* IL_18: ldarg.0  */
                        /* IL_19: ldstr { */
                        /* IL_1E: ldloc.0  */
                        /* IL_1F: box System.Int32 */
                        /* IL_24: ldstr } */
                        /* IL_29: call String Concat(System.Object, System.Object, System.Object) */
                        /* IL_2E: ldloc.1  */
                        /* IL_2F: callvirt String ToString() */
                        /* IL_34: callvirt String Replace(System.String, System.String) */
                        /* IL_39: starg.s 0 */
                        arg0 = asm0.x600012e(arg0,asm0.x6000128(CILJS.new_string("{"),CILJS.make_box(loc0,t1),CILJS.new_string("}")),((loc1.vtable)["asm0.x60000ed"]())(CILJS.convert_box_to_pointer_as_needed(loc1)));
                        /* IL_3B: nop  */
                        
                        /* IL_3C: ldloc.0  */
                        /* IL_3D: ldc.i4.1  */
                        /* IL_3E: add  */
                        /* IL_3F: stloc.0  */
                        loc0 = (loc0 + (1|0)) | (0|0);
                        case 0x40:
                        /* IL_40: ldloc.0  */
                        /* IL_41: ldarg.1  */
                        /* IL_42: ldlen  */
                        /* IL_43: conv.i4  */
                        /* IL_45: clt  */
                        /* IL_46: stloc.3  */
                        loc3 = ((loc0 < (arg1.jsarr.length | (0|0))) ? 1 : 0);
                        /* IL_47: ldloc.3  */
                        /* IL_48: brtrue.s IL_05 */
                        
                        if (loc3){
                            __pos__ = 0x5;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_4A: ldarg.0  */
                /* IL_4B: stloc.s 4 */
                loc4 = arg0;
                /* IL_4F: ldloc.s 4 */
                /* IL_51: ret  */
                return loc4;
            }
        }
    };;
    /* static System.String String.ToLowerImpl(String)*/
    asm.x600013a = function(v) { return CILJS.new_string(v.jsstr.toLowerCase()); } ;;
    /* System.String String.ToLower()*/
    asm.x600013b = function ToLower(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call String ToLowerImpl(System.String) */
                /* IL_07: stloc.0  */
                loc0 = asm0.x600013a(arg0);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* static System.String String.ToUpperImpl(String)*/
    asm.x600013c = function(v) { return CILJS.new_string(v.jsstr.toUpperCase()); } ;;
    /* System.String String.ToUpper()*/
    asm.x600013d = function ToUpper(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call String ToUpperImpl(System.String) */
                /* IL_07: stloc.0  */
                loc0 = asm0.x600013c(arg0);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 String.CompareTo(String)*/
    asm.x600013f = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: ldnull  */
                /* IL_04: ceq  */
                /* IL_05: stloc.0  */
                loc0 = ((arg1 === null) ? 1 : 0);
                /* IL_06: ldloc.0  */
                /* IL_07: brfalse.s IL_0D */
                
                if ((!(loc0))){
                    __pos__ = 0xD;
                    continue;
                }
                /* IL_09: ldc.i4.1  */
                /* IL_0A: stloc.1  */
                loc1 = (1|0);
                /* IL_0B: br.s IL_17 */
                __pos__ = 0x17;
                continue;
                case 0xD:
                /* IL_0D: ldarg.0  */
                /* IL_0E: ldarg.1  */
                /* IL_0F: call Int32 CompareToImpl(System.String, System.String) */
                /* IL_14: stloc.1  */
                loc1 = (arg0.jsstr.localeCompare(arg1.jsstr));
                case 0x17:
                /* IL_17: ldloc.1  */
                /* IL_18: ret  */
                return loc1;
            }
        }
    };;
    /* static System.Boolean String.IsNullOrEmpty(String)*/
    asm.x6000140 = function IsNullOrEmpty(arg0)
    {
        var t0;
        var st_03;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: brfalse.s IL_11 */
                
                if ((!(arg0))){
                    __pos__ = 0x11;
                    continue;
                }
                asm0.x6000142();
                /* IL_04: ldarg.0  */
                /* IL_05: ldsfld String Empty */
                /* IL_0A: call Boolean op_Equality(System.String, System.String) */
                st_03 = asm0.x6000132(arg0,t0.Empty);
                /* IL_0F: br.s IL_12 */
                __pos__ = 0x12;
                continue;
                case 0x11:
                /* IL_11: ldc.i4.1  */
                st_03 = (1|0);
                case 0x12:
                /* IL_12: stloc.0  */
                loc0 = st_03;
                /* IL_15: ldloc.0  */
                /* IL_16: ret  */
                return loc0;
            }
        }
    };;
    /*  String..ctor()*/
    asm.x6000141 = function _ctor(arg0)
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
    /* static  String..cctor()*/
    asm.x6000142 = function _cctor()
    {
        var t0;
        var in_block_0;
        var __pos__;
        
        if ((asm0)["System.String"]().FieldsInitialized){
            return;
        }
        (asm0)["System.String"]().FieldsInitialized = true;
        t0 = (asm0)["System.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldstr  */
                /* IL_05: stsfld String Empty */
                t0.Empty = CILJS.new_string("");
                /* IL_0A: ret  */
                return ;
            }
        }
    };;
    /*  SystemException..ctor()*/
    asm.x6000143 = function _ctor(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldstr A system exception has occurred. */
                /* IL_06: call String GetText(System.String) */
                /* IL_0B: call Void .ctor(System.String) */
                asm0.x6000077(arg0,asm0.x6000001(CILJS.new_string("A system exception has occurred.")));
                /* IL_10: nop  */
                
                /* IL_11: nop  */
                
                /* IL_12: ldarg.0  */
                /* IL_13: ldc.i4 -2146233087 */
                /* IL_18: call Void set_HResult(System.Int32) */
                asm0.x600007a(arg0,(-2146233087|0));
                /* IL_1D: nop  */
                
                /* IL_1E: ret  */
                return ;
            }
        }
    };;
    /*  SystemException..ctor(String)*/
    asm.x6000144 = function _ctor(arg0, arg1)
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
                /* IL_02: call Void .ctor(System.String) */
                asm0.x6000077(arg0,arg1);
                /* IL_07: nop  */
                
                /* IL_08: nop  */
                
                /* IL_09: ldarg.0  */
                /* IL_0A: ldc.i4 -2146233087 */
                /* IL_0F: call Void set_HResult(System.Int32) */
                asm0.x600007a(arg0,(-2146233087|0));
                /* IL_14: nop  */
                
                /* IL_15: ret  */
                return ;
            }
        }
    };;
    /*  SystemException..ctor(String,Exception)*/
    asm.x6000145 = function _ctor(arg0, arg1, arg2)
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
                /* IL_02: ldarg.2  */
                /* IL_03: call Void .ctor(System.String, System.Exception) */
                asm0.x6000078(arg0,arg1,arg2);
                /* IL_08: nop  */
                
                /* IL_09: nop  */
                
                /* IL_0A: ldarg.0  */
                /* IL_0B: ldc.i4 -2146233087 */
                /* IL_10: call Void set_HResult(System.Int32) */
                asm0.x600007a(arg0,(-2146233087|0));
                /* IL_15: nop  */
                
                /* IL_16: ret  */
                return ;
            }
        }
    };;
    /* static System.Type Type.GetTypeFromHandle(RuntimeTypeHandle)*/
    asm.x6000147 = function GetTypeFromHandle(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call Type GetRuntimeTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_07: stloc.0  */
                loc0 = asm0.x60000fc(CILJS.clone_value(arg0));
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* System.Boolean Type.IsSubclassOf(Type)*/
    asm.x6000148 = function IsSubclassOf(arg0, arg1)
    {
        var st_03;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var in_block_1;
        var loc3;
        var loc4;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: brfalse.s IL_0A */
                
                if ((!(arg1))){
                    __pos__ = 0xA;
                    continue;
                }
                /* IL_04: ldarg.1  */
                /* IL_05: ldarg.0  */
                /* IL_07: ceq  */
                st_03 = ((arg1 === arg0) ? 1 : 0);
                /* IL_08: br.s IL_0B */
                __pos__ = 0xB;
                continue;
                case 0xA:
                /* IL_0A: ldc.i4.1  */
                st_03 = (1|0);
                case 0xB:
                /* IL_0B: stloc.0  */
                loc0 = st_03;
                /* IL_0C: ldloc.0  */
                /* IL_0D: brfalse.s IL_13 */
                
                if ((!(loc0))){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.0  */
                /* IL_10: stloc.1  */
                loc1 = (0|0);
                /* IL_11: br.s IL_3D */
                __pos__ = 0x3D;
                continue;
                case 0x13:
                /* IL_13: ldarg.0  */
                /* IL_14: callvirt Type get_BaseType() */
                /* IL_19: stloc.2  */
                loc2 = ((arg0.vtable)["asm0.x600014b"]())(arg0);
                /* IL_1A: br.s IL_2F */
                __pos__ = 0x2F;
                continue;
                case 0x1C:
                case 0x28:
                case 0x2F:
                in_block_1 = true;
                
                if (__pos__ > 0x37){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x1C){
                    __pos__ = 0x1C;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x1C:
                        /* IL_1C: ldloc.2  */
                        /* IL_1D: ldarg.1  */
                        /* IL_1F: ceq  */
                        /* IL_20: stloc.3  */
                        loc3 = ((loc2 === arg1) ? 1 : 0);
                        /* IL_21: ldloc.3  */
                        /* IL_22: brfalse.s IL_28 */
                        
                        if ((!(loc3))){
                            __pos__ = 0x28;
                            continue;
                        }
                        /* IL_24: ldc.i4.1  */
                        /* IL_25: stloc.1  */
                        loc1 = (1|0);
                        /* IL_26: br.s IL_3D */
                        __pos__ = 0x3D;
                        continue;
                        case 0x28:
                        /* IL_28: ldloc.2  */
                        /* IL_29: callvirt Type get_BaseType() */
                        /* IL_2E: stloc.2  */
                        loc2 = ((loc2.vtable)["asm0.x600014b"]())(loc2);
                        case 0x2F:
                        /* IL_2F: ldloc.2  */
                        /* IL_30: ldnull  */
                        /* IL_32: cgt.un  */
                        /* IL_33: stloc.s 4 */
                        loc4 = ((loc2 !== null) ? 1 : 0);
                        /* IL_35: ldloc.s 4 */
                        /* IL_37: brtrue.s IL_1C */
                        
                        if (loc4){
                            __pos__ = 0x1C;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_39: ldc.i4.0  */
                /* IL_3A: stloc.1  */
                loc1 = (0|0);
                case 0x3D:
                /* IL_3D: ldloc.1  */
                /* IL_3E: ret  */
                return loc1;
            }
        }
    };;
    /* System.Boolean Type.get_IsEnum()*/
    asm.x6000149 = function get_IsEnum(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Enum"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldtoken System.Enum */
                /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle) */
                /* IL_0C: callvirt Boolean IsSubclassOf(System.Type) */
                /* IL_11: stloc.0  */
                loc0 = ((arg0.vtable)["asm0.x6000148"]())(arg0,asm0.x6000147(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)));
                /* IL_14: ldloc.0  */
                /* IL_15: ret  */
                return loc0;
            }
        }
    };;
    /*  Type..ctor()*/
    asm.x6000159 = function _ctor(arg0)
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
                asm0.x60001a5(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /* System.String UInt16.ToString()*/
    asm.x600015a = function ToString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.UInt16"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u2  */
                /* IL_03: box System.UInt16 */
                /* IL_08: ldc.i4.s 16 */
                /* IL_0A: call String UnsignedPrimitiveToString(System.Object, System.Int32) */
                /* IL_0F: stloc.0  */
                loc0 = asm0.x60000c1(CILJS.make_box(arg0.r(),t0),(16|0));
                /* IL_12: ldloc.0  */
                /* IL_13: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 UInt16.CompareTo(Object)*/
    asm.x600015b = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: unbox.any System.UInt16 */
                /* IL_08: call Int32 CompareTo(System.UInt16) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x600015c(arg0,CILJS.unbox_any(arg1,(asm0)["System.UInt16"]()));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 UInt16.CompareTo(UInt16)*/
    asm.x600015c = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u2  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldloc.0  */
                /* IL_05: ldarg.1  */
                /* IL_07: clt  */
                /* IL_08: stloc.1  */
                loc1 = ((loc0 < arg1) ? 1 : 0);
                /* IL_09: ldloc.1  */
                /* IL_0A: brfalse.s IL_10 */
                
                if ((!(loc1))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0C: ldc.i4.m1  */
                /* IL_0D: stloc.2  */
                loc2 = (-1|0);
                /* IL_0E: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x10:
                /* IL_10: ldloc.0  */
                /* IL_11: ldarg.1  */
                /* IL_13: cgt  */
                /* IL_14: stloc.3  */
                loc3 = ((loc0 > arg1) ? 1 : 0);
                /* IL_15: ldloc.3  */
                /* IL_16: brfalse.s IL_1C */
                
                if ((!(loc3))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.1  */
                /* IL_19: stloc.2  */
                loc2 = (1|0);
                /* IL_1A: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.0  */
                /* IL_1D: stloc.2  */
                loc2 = (0|0);
                case 0x20:
                /* IL_20: ldloc.2  */
                /* IL_21: ret  */
                return loc2;
            }
        }
    };;
    /* System.Boolean UInt16.Equals(UInt16)*/
    asm.x600015d = function Equals(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u2  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldarg.1  */
                /* IL_05: stloc.1  */
                loc1 = arg1;
                /* IL_06: ldloc.0  */
                /* IL_07: ldloc.1  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.2  */
                loc2 = ((loc0 === loc1) ? 1 : 0);
                /* IL_0D: ldloc.2  */
                /* IL_0E: ret  */
                return loc2;
            }
        }
    };;
    /* System.Boolean UInt16.Equals(Object)*/
    asm.x600015e = function Equals(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.UInt16"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: isinst System.UInt16 */
                /* IL_07: ldnull  */
                /* IL_09: cgt.un  */
                /* IL_0A: ldc.i4.0  */
                /* IL_0C: ceq  */
                /* IL_0D: stloc.0  */
                loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_0E: ldloc.0  */
                /* IL_0F: brfalse.s IL_15 */
                
                if ((!(loc0))){
                    __pos__ = 0x15;
                    continue;
                }
                /* IL_11: ldc.i4.0  */
                /* IL_12: stloc.1  */
                loc1 = (0|0);
                /* IL_13: br.s IL_1F */
                __pos__ = 0x1F;
                continue;
                case 0x15:
                /* IL_15: ldarg.0  */
                /* IL_16: ldarg.1  */
                /* IL_17: call Boolean Equals(System.Object) */
                /* IL_1C: stloc.1  */
                loc1 = asm0.x600015e(arg0,arg1);
                case 0x1F:
                /* IL_1F: ldloc.1  */
                /* IL_20: ret  */
                return loc1;
            }
        }
    };;
    /* System.Int32 UInt16.GetHashCode()*/
    asm.x600015f = function GetHashCode(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u2  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_06: ldloc.0  */
                /* IL_07: ret  */
                return loc0;
            }
        }
    };;
    /* System.String UInt32.ToString()*/
    asm.x6000160 = function ToString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.UInt32"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u4  */
                /* IL_03: box System.UInt32 */
                /* IL_08: ldc.i4.s 32 */
                /* IL_0A: call String UnsignedPrimitiveToString(System.Object, System.Int32) */
                /* IL_0F: stloc.0  */
                loc0 = asm0.x60000c1(CILJS.make_box(arg0.r(),t0),(32|0));
                /* IL_12: ldloc.0  */
                /* IL_13: ret  */
                return loc0;
            }
        }
    };;
    /* System.Boolean UInt32.Equals(Object)*/
    asm.x6000161 = function Equals(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc2;
        var loc3;
        var loc0;
        var loc1;
        t0 = (asm0)["System.UInt32"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: isinst System.UInt32 */
                /* IL_07: ldnull  */
                /* IL_09: cgt.un  */
                /* IL_0A: ldc.i4.0  */
                /* IL_0C: ceq  */
                /* IL_0D: stloc.2  */
                loc2 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_0E: ldloc.2  */
                /* IL_0F: brfalse.s IL_15 */
                
                if ((!(loc2))){
                    __pos__ = 0x15;
                    continue;
                }
                /* IL_11: ldc.i4.0  */
                /* IL_12: stloc.3  */
                loc3 = (0|0);
                /* IL_13: br.s IL_26 */
                __pos__ = 0x26;
                continue;
                case 0x15:
                /* IL_15: ldarg.0  */
                /* IL_16: ldind.u4  */
                /* IL_17: stloc.0  */
                loc0 = arg0.r();
                /* IL_18: ldarg.1  */
                /* IL_19: unbox.any System.UInt32 */
                /* IL_1E: stloc.1  */
                loc1 = CILJS.unbox_any(arg1,t0);
                /* IL_1F: ldloc.0  */
                /* IL_20: ldloc.1  */
                /* IL_22: ceq  */
                /* IL_23: stloc.3  */
                loc3 = ((loc0 === loc1) ? 1 : 0);
                case 0x26:
                /* IL_26: ldloc.3  */
                /* IL_27: ret  */
                return loc3;
            }
        }
    };;
    /* System.Int32 UInt32.GetHashCode()*/
    asm.x6000162 = function GetHashCode(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u4  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_06: ldloc.0  */
                /* IL_07: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 UInt32.CompareTo(Object)*/
    asm.x6000163 = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: unbox.any System.UInt32 */
                /* IL_08: call Int32 CompareTo(System.UInt32) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x6000164(arg0,CILJS.unbox_any(arg1,(asm0)["System.UInt32"]()));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 UInt32.CompareTo(UInt32)*/
    asm.x6000164 = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.u4  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldloc.0  */
                /* IL_05: ldarg.1  */
                /* IL_07: clt.un  */
                /* IL_08: stloc.1  */
                loc1 = ((CILJS.unsigned_value(loc0) < CILJS.unsigned_value(arg1)) ? 1 : 0);
                /* IL_09: ldloc.1  */
                /* IL_0A: brfalse.s IL_10 */
                
                if ((!(loc1))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0C: ldc.i4.m1  */
                /* IL_0D: stloc.2  */
                loc2 = (-1|0);
                /* IL_0E: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x10:
                /* IL_10: ldloc.0  */
                /* IL_11: ldarg.1  */
                /* IL_13: cgt.un  */
                /* IL_14: stloc.3  */
                loc3 = ((CILJS.unsigned_value(loc0) > CILJS.unsigned_value(arg1)) ? 1 : 0);
                /* IL_15: ldloc.3  */
                /* IL_16: brfalse.s IL_1C */
                
                if ((!(loc3))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.1  */
                /* IL_19: stloc.2  */
                loc2 = (1|0);
                /* IL_1A: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.0  */
                /* IL_1D: stloc.2  */
                loc2 = (0|0);
                case 0x20:
                /* IL_20: ldloc.2  */
                /* IL_21: ret  */
                return loc2;
            }
        }
    };;
    /* System.String UInt64.ToString()*/
    asm.x6000165 = function ToString(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var in_block_1;
        var loc3;
        var loc4;
        var loc5;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i8  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldc.i4.s 10 */
                /* IL_06: conv.i8  */
                /* IL_07: stloc.1  */
                loc1 = CILJS.conv_i8((10|0));
                /* IL_08: ldstr  */
                /* IL_0D: stloc.2  */
                loc2 = CILJS.new_string("");
                case 0xE:
                in_block_1 = true;
                
                if (__pos__ > 0x2E){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0xE){
                    __pos__ = 0xE;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0xE:
                        /* IL_0E: nop  */
                        
                        /* IL_0F: ldloc.0  */
                        /* IL_10: ldloc.1  */
                        /* IL_11: rem.un  */
                        /* IL_12: stloc.3  */
                        loc3 = asm0.UInt64_Modulus(loc0,loc1);
                        /* IL_13: ldloc.3  */
                        /* IL_14: call String GetLowString(System.UInt64) */
                        /* IL_19: ldloc.2  */
                        /* IL_1A: call String Concat(System.String, System.String) */
                        /* IL_1F: stloc.2  */
                        loc2 = asm0.x6000127(CILJS.new_string(loc3[0].toString()),loc2);
                        /* IL_20: ldloc.0  */
                        /* IL_21: ldloc.1  */
                        /* IL_22: div.un  */
                        /* IL_23: stloc.0  */
                        loc0 = asm0.UInt64_Division(loc0,loc1);
                        /* IL_24: nop  */
                        
                        /* IL_25: ldloc.0  */
                        /* IL_26: ldc.i4.0  */
                        /* IL_27: conv.i8  */
                        /* IL_29: cgt.un  */
                        /* IL_2A: stloc.s 4 */
                        loc4 = asm0.UInt64_GreaterThan(loc0,CILJS.conv_i8((0|0)));
                        /* IL_2C: ldloc.s 4 */
                        /* IL_2E: brtrue.s IL_0E */
                        
                        if (loc4){
                            __pos__ = 0xE;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_30: ldloc.2  */
                /* IL_31: stloc.s 5 */
                loc5 = loc2;
                /* IL_35: ldloc.s 5 */
                /* IL_37: ret  */
                return loc5;
            }
        }
    };;
    /* static System.UInt64 UInt64.op_RightShift(UInt64,Int32)*/
    asm.x6000167 = 
            function UInt64_RightShift(a, n) {
                n = n & 0x3f;

                var maxShift = 8;
                if (n > maxShift) {
                    return asm0.UInt64_RightShift(
                        asm0.UInt64_RightShift(a, maxShift), n - maxShift);
                }

                var m = (1 << n) - 1;

                var br = (a[1] & m) << (32 - n);
                var bt = a[1] >>> n;
                var at = a[0] >>> n;

                return new Uint32Array([ at | br, bt ]);
            };;
    asm.UInt64_RightShift = asm.x6000167;
    /* static System.UInt64 UInt64.op_Division(UInt64,UInt64)*/
    asm.x6000168 = 
            function UInt64_Division(n, d) {

                if (d[0] == 0 && d[1] == 0)
                    throw new Error('System.DivideByZeroException');
      
                var q = new Uint32Array([0, 0]);
                var r = new Uint32Array([0, 0]);

                for (var i = 63; i >= 0; i--) {
                    r = asm0.XInt64_LeftShift(r, 1);

                    var li = i < 32 ? 0 : 1;
                    var s = (i - 32 * li);

                    r[0] |= (n[li] & (1 << s)) >>> s;

                    if (asm0.UInt64_GreaterThanOrEqual(r, d)) {
                        r = asm0.XInt64_Subtraction(r, d);
                        q[li] |= 1 << s;
                    }
                }

                return q;    
            };;
    asm.UInt64_Division = asm.x6000168;
    /* static System.UInt64 UInt64.op_Multiply(UInt64,UInt64)*/
    asm.x6000169 = 
            function XInt64_Multiplication(a, b) {
                if (a[0] == 0 && a[1] == 0)
                    return a;

                if (b[0] == 0 && b[1] == 0)
                    return b;

                if (asm0.UInt64_GreaterThan(a, b))
                    return asm0.XInt64_Multiplication(b, a);

                var s = new Uint32Array([0, 0]);

                if (a[0] & 1 == 1) {
                    s[0] = b[0];
                    s[1] = b[1];
                }

                var l = new Uint32Array([1, 0]);

                while (!asm0.XInt64_Equality(a, l)) {
                    a = asm0.UInt64_RightShift(a, 1);
                    b = asm0.XInt64_LeftShift(b, 1);

                    if (a[0] & 1 == 1)
                        s = asm0.XInt64_Addition(b, s);
                }

                return s;
            };;
    asm.XInt64_Multiplication = asm.x6000169;
    /* static System.Boolean UInt64.op_GreaterThanOrEqual(UInt64,UInt64)*/
    asm.x600016a = 
            function UInt64_GreaterThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] >= b[0] ? 1: 0;
            };;
    asm.UInt64_GreaterThanOrEqual = asm.x600016a;
    /* static System.Boolean UInt64.op_LessThanOrEqual(UInt64,UInt64)*/
    asm.x600016b = 
            function UInt64_LessThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] <= b[0] ? 1: 0;
            };;
    asm.UInt64_LessThanOrEqual = asm.x600016b;
    /* static System.Boolean UInt64.op_GreaterThan(UInt64,UInt64)*/
    asm.x600016c = 
            function UInt64_GreaterThan (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] > b[0] ? 1: 0;
            };;
    asm.UInt64_GreaterThan = asm.x600016c;
    /* static System.Boolean UInt64.op_LessThan(UInt64,UInt64)*/
    asm.x600016d = 
            function UInt64_LessThan(a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] < b[0] ? 1: 0;
            };;
    asm.UInt64_LessThan = asm.x600016d;
    /* static System.UInt64 UInt64.op_Modulus(UInt64,UInt64)*/
    asm.x600016e = 
            function UInt64_Modulus (n, d) {
                var greaterThanOrEqual = asm0.UInt64_GreaterThanOrEqual,
                    subtraction = asm0.XInt64_Subtraction,
                    leftShift = asm0.XInt64_LeftShift;

                if (d[0] == 0 && d[1] == 0)
                    throw new Error("System.DivideByZeroException");

                var r = new Uint32Array([0, 0]);

                for (var i = 63; i >= 0; i--) {
                    r = leftShift(r, 1);

                    var li = i < 32 ? 0 : 1;
                    var s = (i - 32 * li);

                    r[0] |= (n[li] & (1 << s)) >>> s;

                    if (greaterThanOrEqual(r, d)) {
                        r = subtraction(r, d);
                    }
                }

                return r;
            };;
    asm.UInt64_Modulus = asm.x600016e;
    /* System.Int32 UInt64.GetHashCode()*/
    asm.x600016f = function GetHashCode(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i8  */
                /* IL_03: call Int32 GetLow(System.UInt64) */
                /* IL_08: stloc.0  */
                loc0 = arg0.r()[0];
                /* IL_0B: ldloc.0  */
                /* IL_0C: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 UInt64.CompareTo(Object)*/
    asm.x6000171 = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: unbox.any System.UInt64 */
                /* IL_08: call Int32 CompareTo(System.UInt64) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x6000172(arg0,CILJS.unbox_any(arg1,(asm0)["System.UInt64"]()));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };;
    /* System.Int32 UInt64.CompareTo(UInt64)*/
    asm.x6000172 = function CompareTo(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i8  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldloc.0  */
                /* IL_05: ldarg.1  */
                /* IL_07: clt.un  */
                /* IL_08: stloc.1  */
                loc1 = asm0.UInt64_LessThan(loc0,arg1);
                /* IL_09: ldloc.1  */
                /* IL_0A: brfalse.s IL_10 */
                
                if ((!(loc1))){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0C: ldc.i4.m1  */
                /* IL_0D: stloc.2  */
                loc2 = (-1|0);
                /* IL_0E: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x10:
                /* IL_10: ldloc.0  */
                /* IL_11: ldarg.1  */
                /* IL_13: cgt.un  */
                /* IL_14: stloc.3  */
                loc3 = asm0.UInt64_GreaterThan(loc0,arg1);
                /* IL_15: ldloc.3  */
                /* IL_16: brfalse.s IL_1C */
                
                if ((!(loc3))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.1  */
                /* IL_19: stloc.2  */
                loc2 = (1|0);
                /* IL_1A: br.s IL_20 */
                __pos__ = 0x20;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.0  */
                /* IL_1D: stloc.2  */
                loc2 = (0|0);
                case 0x20:
                /* IL_20: ldloc.2  */
                /* IL_21: ret  */
                return loc2;
            }
        }
    };;
    /* System.Boolean UInt64.Equals(Object)*/
    asm.x6000173 = function Equals(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.UInt64"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.1  */
                /* IL_02: isinst System.UInt64 */
                /* IL_07: ldnull  */
                /* IL_09: cgt.un  */
                /* IL_0A: ldc.i4.0  */
                /* IL_0C: ceq  */
                /* IL_0D: stloc.0  */
                loc0 = ((((t0.IsInst(arg1) !== null) ? 1 : 0) === (0|0)) ? 1 : 0);
                /* IL_0E: ldloc.0  */
                /* IL_0F: brfalse.s IL_15 */
                
                if ((!(loc0))){
                    __pos__ = 0x15;
                    continue;
                }
                /* IL_11: ldc.i4.0  */
                /* IL_12: stloc.1  */
                loc1 = (0|0);
                /* IL_13: br.s IL_24 */
                __pos__ = 0x24;
                continue;
                case 0x15:
                /* IL_15: ldarg.0  */
                /* IL_16: ldarg.1  */
                /* IL_17: unbox.any System.UInt64 */
                /* IL_1C: call Boolean Equals(System.UInt64) */
                /* IL_21: stloc.1  */
                loc1 = asm0.x6000174(arg0,CILJS.unbox_any(arg1,t0));
                case 0x24:
                /* IL_24: ldloc.1  */
                /* IL_25: ret  */
                return loc1;
            }
        }
    };;
    /* System.Boolean UInt64.Equals(UInt64)*/
    asm.x6000174 = function Equals(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i8  */
                /* IL_03: stloc.0  */
                loc0 = arg0.r();
                /* IL_04: ldarg.1  */
                /* IL_05: stloc.1  */
                loc1 = arg1;
                /* IL_06: ldloc.0  */
                /* IL_07: ldloc.1  */
                /* IL_09: ceq  */
                /* IL_0A: stloc.2  */
                loc2 = asm0.XInt64_Equality(loc0,loc1);
                /* IL_0D: ldloc.2  */
                /* IL_0E: ret  */
                return loc2;
            }
        }
    };;
    /* System.String UIntPtr.ToString()*/
    asm.x6000175_init = function (arg0)
    {
        ((asm0)["System.UIntPtr"]().init)();
        asm.x6000175 = asm.x6000175_;
    };;
    asm.x6000175 = function (arg0)
    {
        asm.x6000175_init(arg0);
        return asm.x6000175_(arg0);
    };;
    asm.x6000175_ = function ToString(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.UIntPtr"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldind.i  */
                /* IL_03: box System.UIntPtr */
                /* IL_08: call String SignedPrimitiveToString(System.Object) */
                /* IL_0D: stloc.0  */
                loc0 = asm0.x60000c0(CILJS.make_box(arg0.r(),t0));
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };
    /* System.Boolean ValueType.Equals(Object)*/
    asm.x6000176 = function Equals(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: call Boolean ValueTypeEquals(System.Object, System.Object) */
                /* IL_08: stloc.0  */
                loc0 = CILJS.value_equals(arg0.r(), arg1.boxed);
                /* IL_0B: ldloc.0  */
                /* IL_0C: ret  */
                return loc0;
            }
        }
    };;
    /*  ValueType..ctor()*/
    asm.x6000178 = function _ctor(arg0)
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
    /* System.Void AutoResetEvent.Close()*/
    asm.x600017a = function Close(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ret  */
                return ;
            }
        }
    };;
    /* System.Void AutoResetEvent.WaitOne()*/
    asm.x600017b = function WaitOne(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ret  */
                return ;
            }
        }
    };;
    /* System.Void AutoResetEvent.Set()*/
    asm.x600017c = function Set(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ret  */
                return ;
            }
        }
    };;
    /*  AutoResetEvent..ctor(Boolean)*/
    asm.x6000179 = function _ctor(arg0, arg1)
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
                
                /* IL_07: nop  */
                
                /* IL_08: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Monitor.Enter(Object)*/
    asm.x600017d = function Enter(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ret  */
                return ;
            }
        }
    };;
    /* static System.Void Monitor.Exit(Object)*/
    asm.x600017e = function Exit(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ret  */
                return ;
            }
        }
    };;
    /* static System.Threading.Thread Thread.get_CurrentThread()*/
    asm.x600017f_init = function ()
    {
        ((asm0)["System.Threading.Thread"]().init)();
        asm.x600017f = asm.x600017f_;
    };;
    asm.x600017f = function ()
    {
        asm.x600017f_init();
        return asm.x600017f_();
    };;
    asm.x600017f_ = function get_CurrentThread()
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Threading.Thread"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                asm0.x6000183();
                /* IL_01: ldsfld Thread currentThread */
                /* IL_06: stloc.0  */
                loc0 = t0.currentThread;
                /* IL_09: ldloc.0  */
                /* IL_0A: ret  */
                return loc0;
            }
        }
    };
    /* System.Boolean Thread.get_IsThreadPoolThread()*/
    asm.x6000180 = function get_IsThreadPoolThread(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.0  */
                /* IL_02: stloc.0  */
                loc0 = (0|0);
                /* IL_05: ldloc.0  */
                /* IL_06: ret  */
                return loc0;
            }
        }
    };;
    /* static System.Void Thread.Sleep(Int64)*/
    asm.x6000181 = function Sleep(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ret  */
                return ;
            }
        }
    };;
    /*  Thread..ctor()*/
    asm.x6000182 = function _ctor(arg0)
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
    /* static  Thread..cctor()*/
    asm.x6000183_init = function ()
    {
        ((asm0)["System.Threading.Thread"]().init)();
        asm.x6000183 = asm.x6000183_;
    };;
    asm.x6000183 = function ()
    {
        asm.x6000183_init();
        return asm.x6000183_();
    };;
    asm.x6000183_ = function _cctor()
    {
        var t0;
        var in_block_0;
        var __pos__;
        
        if ((asm0)["System.Threading.Thread"]().FieldsInitialized){
            return;
        }
        (asm0)["System.Threading.Thread"]().FieldsInitialized = true;
        t0 = (asm0)["System.Threading.Thread"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                asm0.x6000183();
                /* IL_00: newobj Void .ctor() */
                /* IL_05: stsfld Thread currentThread */
                t0.currentThread = CILJS.newobj(t0,asm0.x6000182,[null]);
                /* IL_0A: ret  */
                return ;
            }
        }
    };
    /* System.Boolean WaitHandle.WaitOne(Int32)*/
    asm.x6000184 = function WaitOne(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldc.i4.1  */
                /* IL_02: stloc.0  */
                loc0 = (1|0);
                /* IL_05: ldloc.0  */
                /* IL_06: ret  */
                return loc0;
            }
        }
    };;
    /*  WaitHandle..ctor()*/
    asm.x6000185 = function _ctor(arg0)
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
    /*  InAttribute..ctor()*/
    asm.x6000188 = function _ctor(arg0)
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
                asm0.x600003e(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /*  OutAttribute..ctor()*/
    asm.x6000189 = function _ctor(arg0)
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
                asm0.x600003e(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /*  ExtensionAttribute..ctor()*/
    asm.x600018a = function _ctor(arg0)
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
                asm0.x600003e(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /*  IndexerNameAttribute..ctor(String)*/
    asm.x600018b = function _ctor(arg0, arg1)
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
                asm0.x600003e(arg0);
                /* IL_06: nop  */
                
                /* IL_07: nop  */
                
                /* IL_08: ret  */
                return ;
            }
        }
    };;
    /* System.String InternalsVisibleToAttribute.get_AssemblyName()*/
    asm.x600018d = function get_AssemblyName(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld String assemblyName */
                /* IL_07: stloc.0  */
                loc0 = arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName;
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* System.Boolean InternalsVisibleToAttribute.get_AllInternalsVisible()*/
    asm.x600018e = function get_AllInternalsVisible(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Boolean allInternalsVisible */
                /* IL_07: stloc.0  */
                loc0 = arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible;
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /* System.Void InternalsVisibleToAttribute.set_AllInternalsVisible(Boolean)*/
    asm.x600018f = function set_AllInternalsVisible(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.1  */
                /* IL_03: stfld Boolean allInternalsVisible */
                arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = arg1;
                /* IL_08: ret  */
                return ;
            }
        }
    };;
    /*  InternalsVisibleToAttribute..ctor(String)*/
    asm.x600018c = function _ctor(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldc.i4.1  */
                /* IL_02: stfld Boolean allInternalsVisible */
                arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = (1|0);
                /* IL_07: ldarg.0  */
                /* IL_08: call Void .ctor() */
                asm0.x600003e(arg0);
                /* IL_0D: nop  */
                
                /* IL_0E: nop  */
                
                /* IL_0F: ldarg.0  */
                /* IL_10: ldarg.1  */
                /* IL_11: stfld String assemblyName */
                arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName = arg1;
                /* IL_16: ret  */
                return ;
            }
        }
    };;
    /* System.Runtime.CompilerServices.MethodImplOptions MethodImplAttribute.get_Value()*/
    asm.x6000193 = function get_Value(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld MethodImplOptions _val */
                /* IL_07: stloc.0  */
                loc0 = CILJS.clone_value(arg0.System_Runtime_CompilerServicesMethodImplAttribute_val);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /*  MethodImplAttribute..ctor()*/
    asm.x6000190 = function _ctor(arg0)
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
                asm0.x600003e(arg0);
                /* IL_06: nop  */
                
                /* IL_07: nop  */
                
                /* IL_08: ret  */
                return ;
            }
        }
    };;
    /*  MethodImplAttribute..ctor(Int16)*/
    asm.x6000191 = function _ctor(arg0, arg1)
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
                asm0.x600003e(arg0);
                /* IL_06: nop  */
                
                /* IL_07: nop  */
                
                /* IL_08: ldarg.0  */
                /* IL_09: ldarg.1  */
                /* IL_0A: stfld MethodImplOptions _val */
                arg0.System_Runtime_CompilerServicesMethodImplAttribute_val = arg1;
                /* IL_0F: ret  */
                return ;
            }
        }
    };;
    /*  MethodImplAttribute..ctor(MethodImplOptions)*/
    asm.x6000192 = function _ctor(arg0, arg1)
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
                asm0.x600003e(arg0);
                /* IL_06: nop  */
                
                /* IL_07: nop  */
                
                /* IL_08: ldarg.0  */
                /* IL_09: ldarg.1  */
                /* IL_0A: stfld MethodImplOptions _val */
                arg0.System_Runtime_CompilerServicesMethodImplAttribute_val = arg1;
                /* IL_0F: ret  */
                return ;
            }
        }
    };;
    /* static System.Void RuntimeHelpers.InitializeArrayImpl(Array,RuntimeFieldHandle)*/
    asm.x6000194 = 
            function (arr, handle) {
                handle.value.type();
                var data = new Int8Array(handle.value.type[handle.value.field]);
                arr.jsarr = new arr.etype.ArrayType(data.buffer);   
            }
            ;;
    /* static System.Void RuntimeHelpers.InitializeArray(Array,RuntimeFieldHandle)*/
    asm.x6000196_init = function (arg0, arg1)
    {
        ((asm0)["System.Array`1"]((asm0)["System.Int64"]()).init)();
        ((asm0)["System.Array`1"]((asm0)["System.UInt64"]()).init)();
        asm.x6000196 = asm.x6000196_;
    };;
    asm.x6000196 = function (arg0, arg1)
    {
        asm.x6000196_init(arg0,arg1);
        return asm.x6000196_(arg0,arg1);
    };;
    asm.x6000196_ = function InitializeArray(arg0, arg1)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var st_05;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var in_block_1;
        var loc5;
        t0 = (asm0)["System.Int64"]();
        t1 = (asm0)["System.Array`1"](t0);
        t2 = (asm0)["System.UInt64"]();
        t3 = (asm0)["System.Array`1"](t2);
        t4 = (asm0)["System.UInt32"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: isinst System.Int64[] */
                /* IL_07: brtrue.s IL_14 */
                
                if (t1.IsInst(arg0)){
                    __pos__ = 0x14;
                    continue;
                }
                /* IL_09: ldarg.0  */
                /* IL_0A: isinst System.UInt64[] */
                /* IL_0F: ldnull  */
                /* IL_11: cgt.un  */
                st_05 = ((t3.IsInst(arg0) !== null) ? 1 : 0);
                /* IL_12: br.s IL_15 */
                __pos__ = 0x15;
                continue;
                case 0x14:
                /* IL_14: ldc.i4.1  */
                st_05 = (1|0);
                case 0x15:
                /* IL_15: stloc.0  */
                loc0 = st_05;
                /* IL_16: ldloc.0  */
                /* IL_17: brfalse.s IL_65 */
                
                if ((!(loc0))){
                    __pos__ = 0x65;
                    continue;
                }
                /* IL_19: nop  */
                
                /* IL_1A: ldarg.0  */
                /* IL_1B: castclass System.Int64[] */
                /* IL_20: stloc.1  */
                loc1 = CILJS.cast_class(arg0,t1);
                /* IL_21: ldc.i4.0  */
                /* IL_22: newarr System.UInt32 */
                /* IL_27: stloc.2  */
                loc2 = CILJS.new_array(t4,(0|0));
                /* IL_28: ldloc.2  */
                /* IL_29: ldarg.1  */
                /* IL_2A: call Void InitializeArrayImpl(System.Array, System.RuntimeFieldHandle) */
                asm0.x6000194(loc2,CILJS.clone_value(arg1));
                /* IL_2F: nop  */
                
                /* IL_30: ldc.i4.0  */
                /* IL_31: stloc.3  */
                loc3 = (0|0);
                /* IL_32: ldc.i4.0  */
                /* IL_33: stloc.s 4 */
                loc4 = (0|0);
                /* IL_35: br.s IL_53 */
                __pos__ = 0x53;
                continue;
                case 0x37:
                case 0x53:
                in_block_1 = true;
                
                if (__pos__ > 0x60){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x37){
                    __pos__ = 0x37;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x37:
                        /* IL_37: ldloc.1  */
                        /* IL_38: ldloc.3  */
                        /* IL_39: ldloc.2  */
                        /* IL_3A: ldloc.s 4 */
                        /* IL_3C: ldelem.u4  */
                        /* IL_3D: ldloc.2  */
                        /* IL_3E: ldloc.s 4 */
                        /* IL_40: ldc.i4.1  */
                        /* IL_41: add  */
                        /* IL_42: ldelem.u4  */
                        /* IL_43: call Int64 Make(System.UInt32, System.UInt32) */
                        /* IL_48: stelem.i8  */
                        (loc1.jsarr)[loc3] = new Uint32Array([(loc2.jsarr)[loc4],(loc2.jsarr)[(loc4 + (1|0)) | (0|0)]]);
                        /* IL_49: ldloc.3  */
                        /* IL_4A: ldc.i4.1  */
                        /* IL_4B: add  */
                        /* IL_4C: stloc.3  */
                        loc3 = (loc3 + (1|0)) | (0|0);
                        /* IL_4D: ldloc.s 4 */
                        /* IL_4F: ldc.i4.2  */
                        /* IL_50: add  */
                        /* IL_51: stloc.s 4 */
                        loc4 = (loc4 + (2|0)) | (0|0);
                        case 0x53:
                        /* IL_53: ldloc.3  */
                        /* IL_54: ldarg.0  */
                        /* IL_55: callvirt Int32 get_Length() */
                        /* IL_5B: clt  */
                        /* IL_5C: stloc.s 5 */
                        loc5 = ((loc3 < asm0.x6000009(arg0)) ? 1 : 0);
                        /* IL_5E: ldloc.s 5 */
                        /* IL_60: brtrue.s IL_37 */
                        
                        if (loc5){
                            __pos__ = 0x37;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_62: nop  */
                
                /* IL_63: br.s IL_6F */
                __pos__ = 0x6F;
                continue;
                case 0x65:
                /* IL_65: nop  */
                
                /* IL_66: ldarg.0  */
                /* IL_67: ldarg.1  */
                /* IL_68: call Void InitializeArrayImpl(System.Array, System.RuntimeFieldHandle) */
                asm0.x6000194(arg0,CILJS.clone_value(arg1));
                /* IL_6D: nop  */
                
                /* IL_6E: nop  */
                
                case 0x6F:
                /* IL_6F: ret  */
                return ;
            }
        }
    };
    /*  RuntimeHelpers..ctor()*/
    asm.x6000197 = function _ctor(arg0)
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
    /* static System.Reflection.Assembly Assembly.GetInstance(jsAsm)*/
    asm.x6000199_init = function (arg0)
    {
        ((asm0)["System.Reflection.Assembly"]().init)();
        asm.x6000199 = asm.x6000199_;
    };;
    asm.x6000199 = function (arg0)
    {
        asm.x6000199_init(arg0);
        return asm.x6000199_(arg0);
    };;
    asm.x6000199_ = function GetInstance(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Reflection.Assembly"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Assembly ManagedInstance */
                /* IL_07: call Boolean IsUndefined(System.Object) */
                /* IL_0C: stloc.0  */
                loc0 = asm0.x60001e8(arg0.ManagedInstance);
                /* IL_0D: ldloc.0  */
                /* IL_0E: brfalse.s IL_1C */
                
                if ((!(loc0))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_10: ldarg.0  */
                /* IL_11: ldarg.0  */
                /* IL_12: newobj Void .ctor(System.Reflection.Assembly+jsAsm) */
                /* IL_17: stfld Assembly ManagedInstance */
                arg0.ManagedInstance = CILJS.newobj(t0,asm0.x6000198,[null, arg0]);
                case 0x1C:
                /* IL_1C: ldarg.0  */
                /* IL_1D: ldfld Assembly ManagedInstance */
                /* IL_22: stloc.1  */
                loc1 = arg0.ManagedInstance;
                /* IL_25: ldloc.1  */
                /* IL_26: ret  */
                return loc1;
            }
        }
    };
    /* System.String Assembly.get_FullName()*/
    asm.x600019a = function get_FullName(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld jsAsm rawAsm */
                /* IL_07: ldfld Object FullName */
                /* IL_0C: call String FromJsString(System.Object) */
                /* IL_11: stloc.0  */
                loc0 = CILJS.new_string(arg0.System_ReflectionAssemblyrawAsm.FullName);
                /* IL_14: ldloc.0  */
                /* IL_15: ret  */
                return loc0;
            }
        }
    };;
    /*  Assembly..ctor(jsAsm)*/
    asm.x6000198 = function _ctor(arg0, arg1)
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
                
                /* IL_07: nop  */
                
                /* IL_08: ldarg.0  */
                /* IL_09: ldarg.1  */
                /* IL_0A: stfld jsAsm rawAsm */
                arg0.System_ReflectionAssemblyrawAsm = arg1;
                /* IL_0F: ret  */
                return ;
            }
        }
    };;
    /* System.String DefaultMemberAttribute.get_MemberName()*/
    asm.x600019c = function get_MemberName(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld String member_name */
                /* IL_07: stloc.0  */
                loc0 = arg0.System_ReflectionDefaultMemberAttributemember_name;
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /*  DefaultMemberAttribute..ctor(String)*/
    asm.x600019b = function _ctor(arg0, arg1)
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
                asm0.x600003e(arg0);
                /* IL_06: nop  */
                
                /* IL_07: nop  */
                
                /* IL_08: ldarg.0  */
                /* IL_09: ldarg.1  */
                /* IL_0A: stfld String member_name */
                arg0.System_ReflectionDefaultMemberAttributemember_name = arg1;
                /* IL_0F: ret  */
                return ;
            }
        }
    };;
    /* static System.Object[] MemberInfo.GetCustomAttributesImpl(Object)*/
    asm.x60001a3 = 
            function (ca) {
                ca = ca || [];
                var r = CILJS.new_array(asm0['System.Object'], ca.length);
                for (var i=0; i<ca.length; i++) {
                    var attr_type = ca[i][0];
                    var attr_ctor = ca[i][1];
                    var attr_ctor_args_data = ca[i][2];
                    var attr = new attr_type();
                    var attr_ctor_args = [attr];
                    if (attr_ctor_args_data) {
                        for (var j=0; j<attr_ctor_args_data.length; j++) {
                            var d = attr_ctor_args_data[j];
                            if (typeof d === 'function') {
                                d(); // init type
                                d = asm0.GetReflectionType(d);
                            }
                            attr_ctor_args.push(d);
                        }
                    }
                    attr_ctor.apply(null, attr_ctor_args);
                    r.jsarr[i] = attr;
                }
                return r;
            }
            ;;
    /*  MemberInfo..ctor()*/
    asm.x60001a5 = function _ctor(arg0)
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
    /* static System.Reflection.MethodInfo MethodInfo.GetInstance(Array)*/
    asm.x60001a7_init = function (arg0)
    {
        ((asm0)["System.Reflection.MethodInfo"]().init)();
        asm.x60001a7 = asm.x60001a7_;
    };;
    asm.x60001a7 = function (arg0)
    {
        asm.x60001a7_init(arg0);
        return asm.x60001a7_(arg0);
    };;
    asm.x60001a7_ = function GetInstance(arg0)
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Reflection.MethodInfo"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                st_00 = CILJS.newobj(t0,asm0.x60001a6,[null]);
                /* IL_06: dup  */
                st_03 = st_01 = st_00;
                /* IL_07: ldarg.0  */
                st_02 = arg0;
                /* IL_08: stfld Array mtd */
                st_01.System_ReflectionMethodInfomtd = st_02;
                /* IL_0D: stloc.0  */
                loc0 = st_03;
                /* IL_10: ldloc.0  */
                /* IL_11: ret  */
                return loc0;
            }
        }
    };
    /* System.Object[] MethodInfo.GetCustomAttributes(Boolean)*/
    asm.x60001a8 = function GetCustomAttributes(arg0, arg1)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Array mtd */
                /* IL_07: ldc.i4.3  */
                /* IL_08: callvirt Object get_Item(System.Int32) */
                /* IL_0D: call Object[] GetCustomAttributesImpl(System.Object) */
                /* IL_12: stloc.0  */
                loc0 = asm0.x60001a3(arg0.System_ReflectionMethodInfomtd[(3|0)]);
                /* IL_15: ldloc.0  */
                /* IL_16: ret  */
                return loc0;
            }
        }
    };;
    /* System.Object[] MethodInfo.GetCustomAttributes(Type,Boolean)*/
    asm.x60001a9_init = function (arg0, arg1, arg2)
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x60001a9 = asm.x60001a9_;
    };;
    asm.x60001a9 = function (arg0, arg1, arg2)
    {
        asm.x60001a9_init(arg0,arg1,arg2);
        return asm.x60001a9_(arg0,arg1,arg2);
    };;
    asm.x60001a9_ = function GetCustomAttributes(arg0, arg1, arg2)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.NotImplementedException"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: throw  */
                throw CILJS.newobj(t0,asm0.x60000d8,[null]);
            }
        }
    };
    /* System.Boolean MethodInfo.IsDefined(Type,Boolean)*/
    asm.x60001aa_init = function (arg0, arg1, arg2)
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x60001aa = asm.x60001aa_;
    };;
    asm.x60001aa = function (arg0, arg1, arg2)
    {
        asm.x60001aa_init(arg0,arg1,arg2);
        return asm.x60001aa_(arg0,arg1,arg2);
    };;
    asm.x60001aa_ = function IsDefined(arg0, arg1, arg2)
    {
        var t0;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["System.NotImplementedException"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: throw  */
                throw CILJS.newobj(t0,asm0.x60000d8,[null]);
            }
        }
    };
    /* System.String MethodInfo.get_Name()*/
    asm.x60001ab_init = function (arg0)
    {
        ((asm0)["CilJs.JavaScript.String"]().init)();
        asm.x60001ab = asm.x60001ab_;
    };;
    asm.x60001ab = function (arg0)
    {
        asm.x60001ab_init(arg0);
        return asm.x60001ab_(arg0);
    };;
    asm.x60001ab_ = function get_Name(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = (asm0)["CilJs.JavaScript.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Array mtd */
                /* IL_07: ldc.i4.2  */
                /* IL_08: callvirt Object get_Item(System.Int32) */
                /* IL_0D: call String UnsafeCast[CilJs.JavaScript.String](System.Object) */
                /* IL_12: call String op_Explicit(CilJs.JavaScript.String) */
                /* IL_17: stloc.0  */
                loc0 = CILJS.new_string(arg0.System_ReflectionMethodInfomtd[(2|0)]);
                /* IL_1A: ldloc.0  */
                /* IL_1B: ret  */
                return loc0;
            }
        }
    };
    /* System.Object MethodInfo.Invoke(Object,Object[])*/
    asm.x60001ac = function Invoke(arg0, arg1, arg2)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Array mtd */
                /* IL_07: ldc.i4.0  */
                /* IL_08: callvirt Object get_Item(System.Int32) */
                /* IL_0D: stloc.0  */
                loc0 = arg0.System_ReflectionMethodInfomtd[(0|0)];
                /* IL_0E: ldarg.0  */
                /* IL_0F: ldfld Array mtd */
                /* IL_14: ldc.i4.1  */
                /* IL_15: callvirt Object get_Item(System.Int32) */
                /* IL_1A: stloc.1  */
                loc1 = arg0.System_ReflectionMethodInfomtd[(1|0)];
                /* IL_1B: ldloc.0  */
                /* IL_1C: ldloc.1  */
                /* IL_1D: ldarg.1  */
                /* IL_1E: ldarg.2  */
                /* IL_1F: call Object InvokeImpl(System.Object, System.Object, System.Object, System.Object[]) */
                /* IL_24: stloc.2  */
                loc2 = asm0.x60001ad(loc0,loc1,arg1,arg2);
                /* IL_27: ldloc.2  */
                /* IL_28: ret  */
                return loc2;
            }
        }
    };;
    /* static System.Object MethodInfo.InvokeImpl(Object,Object,Object,Object[])*/
    asm.x60001ad = 
            function InvokeImpl(assembly, method, obj, parameters) {
                var args = [obj].concat(parameters.jsarr);
                return assembly[method].apply(null, args);
            }
            ;;
    /*  MethodInfo..ctor()*/
    asm.x60001a6 = function _ctor(arg0)
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
                asm0.x60001a5(arg0);
                /* IL_06: nop  */
                
                /* IL_07: nop  */
                
                /* IL_08: ret  */
                return ;
            }
        }
    };;
    /*  Debugger..ctor()*/
    asm.x60001af = function _ctor(arg0)
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
    /*  DebuggerStepThroughAttribute..ctor()*/
    asm.x60001b0 = function _ctor(arg0)
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
                asm0.x600003e(arg0);
                /* IL_06: nop  */
                
                /* IL_07: ret  */
                return ;
            }
        }
    };;
    /*  UnboundGenericParameter..ctor()*/
    asm.x60001c3 = function _ctor(arg0)
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
    /* static System.Object Marshal.get_Null()*/
    asm.x60001d1 = function get_Null()
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: call Object null_impl() */
                /* IL_06: stloc.0  */
                loc0 = null;
                /* IL_09: ldloc.0  */
                /* IL_0A: ret  */
                return loc0;
            }
        }
    };;
    /* System.Collections.Generic.IEnumerator`1[System.Object] Array.GetEnumerator()*/
    asm.x60001db_init = function (arg0)
    {
        ((asm0)["CilJs.JavaScript.Array+<GetEnumerator>d__7"]().init)();
        asm.x60001db = asm.x60001db_;
    };;
    asm.x60001db = function (arg0)
    {
        asm.x60001db_init(arg0);
        return asm.x60001db_(arg0);
    };;
    asm.x60001db_ = function GetEnumerator(arg0)
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var in_block_0;
        var __pos__;
        t0 = (asm0)["CilJs.JavaScript.Array+<GetEnumerator>d__7"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldc.i4.0  */
                st_00 = (0|0);
                /* IL_01: newobj Void .ctor(System.Int32) */
                st_01 = CILJS.newobj(t0,asm0.x60001fa,[null, st_00]);
                /* IL_06: dup  */
                st_04 = st_02 = st_01;
                /* IL_07: ldarg.0  */
                st_03 = arg0;
                /* IL_08: stfld Array <>4__this */
                (st_02)["<>4__this"] = st_03;
                /* IL_0D: ret  */
                return st_04;
            }
        }
    };
    /* System.Collections.IEnumerator Array.System.Collections.IEnumerable.GetEnumerator()*/
    asm.x60001dc = function System_Collections_IEnumerable_GetEnumerator(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call IEnumerator`1 GetEnumerator() */
                /* IL_07: stloc.0  */
                loc0 = asm0.x60001db(arg0);
                /* IL_0A: ldloc.0  */
                /* IL_0B: ret  */
                return loc0;
            }
        }
    };;
    /*  Array..ctor()*/
    asm.x60001d6 = function _ctor(arg0)
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
                
                /* IL_07: nop  */
                
                /* IL_08: ret  */
                return ;
            }
        }
    };;
    /* static System.Boolean Object.IsUndefined(Object)*/
    asm.x60001e8 = function (o) { return o === void 0; };;
    /*  Object..ctor()*/
    asm.x60001e9 = function _ctor(arg0)
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
    /*  String..ctor()*/
    asm.x60001ea = function _ctor(arg0)
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
                
                /* IL_07: nop  */
                
                /* IL_08: ret  */
                return ;
            }
        }
    };;
    /* static  String..cctor()*/
    asm.x60001ef_init = function ()
    {
        ((asm0)["CilJs.JavaScript.String"]().init)();
        asm.x60001ef = asm.x60001ef_;
    };;
    asm.x60001ef = function ()
    {
        asm.x60001ef_init();
        return asm.x60001ef_();
    };;
    asm.x60001ef_ = function _cctor()
    {
        var t0;
        var in_block_0;
        var __pos__;
        
        if ((asm0)["CilJs.JavaScript.String"]().FieldsInitialized){
            return;
        }
        (asm0)["CilJs.JavaScript.String"]().FieldsInitialized = true;
        t0 = (asm0)["CilJs.JavaScript.String"]();
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: call String GetEmpty() */
                /* IL_05: stsfld String Emtpy */
                t0.Emtpy = "";
                /* IL_0A: ret  */
                return ;
            }
        }
    };
    /* System.Int32 <>c__DisplayClass23_0`1.<Sort>b__0(T,T)*/
    asm.x60001f1_init = function (arg0, arg1, arg2)
    {
        ((asm0)["System.Collections.Generic.IComparer`1"](((arg0.constructor.GenericArguments)["asm0.t200006c"])[0]).init)();
    };;
    asm.x60001f1 = function (arg0, arg1, arg2)
    {
        asm.x60001f1_init(arg0,arg1,arg2);
        return asm.x60001f1_(arg0,arg1,arg2);
    };;
    asm.x60001f1_ = function _Sort_b__0(arg0, arg1, arg2)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        t0 = ((arg0.constructor.GenericArguments)["asm0.t200006c"])[0];
        t1 = (asm0)["System.Collections.Generic.IComparer`1"](t0);
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld IComparer`1 comparer */
                /* IL_06: ldarg.1  */
                /* IL_07: ldarg.2  */
                /* IL_08: callvirt Int32 Compare(T, T) */
                /* IL_0D: ret  */
                return ((((arg0.comparer.ifacemap)[t1])[t0].x60001bf)())(CILJS.convert_box_to_pointer_as_needed(arg0.comparer),arg1,arg2);
            }
        }
    };
    /*  <>c__DisplayClass23_0`1..ctor()*/
    asm.x60001f0 = function _ctor(arg0)
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
    /* T ArrayEnumerator.get_Current()*/
    asm.x60001f3 = function get_Current(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldfld Array`1 source */
                /* IL_07: ldarg.0  */
                /* IL_08: ldfld Int32 index */
                /* IL_0D: callvirt T GetTypedValue(System.Int32) */
                /* IL_12: stloc.0  */
                loc0 = arg0.source.jsarr[arg0.index];
                /* IL_15: ldloc.0  */
                /* IL_16: ret  */
                return loc0;
            }
        }
    };;
    /* System.Boolean ArrayEnumerator.MoveNext()*/
    asm.x60001f4 = function MoveNext(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldarg.0  */
                /* IL_03: ldfld Int32 index */
                /* IL_08: ldc.i4.1  */
                /* IL_09: add  */
                /* IL_0A: stfld Int32 index */
                arg0.index = ((arg0.index + (1|0)) | (0|0));
                /* IL_0F: ldarg.0  */
                /* IL_10: ldfld Int32 index */
                /* IL_15: ldarg.0  */
                /* IL_16: ldfld Int32 length */
                /* IL_1C: clt  */
                /* IL_1D: stloc.0  */
                loc0 = ((arg0.index < arg0.length) ? 1 : 0);
                /* IL_20: ldloc.0  */
                /* IL_21: ret  */
                return loc0;
            }
        }
    };;
    /* System.Object ArrayEnumerator.System.Collections.IEnumerator.get_Current()*/
    asm.x60001f5 = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = ((arg0.constructor.GenericArguments)["asm0.t200006d"])[0];
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: call T get_Current() */
                /* IL_07: box T */
                /* IL_0C: stloc.0  */
                loc0 = CILJS.box(asm0.x60001f3(arg0),t0);
                /* IL_0F: ldloc.0  */
                /* IL_10: ret  */
                return loc0;
            }
        }
    };;
    /* System.Void ArrayEnumerator.Reset()*/
    asm.x60001f6 = function Reset(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: ldc.i4.m1  */
                /* IL_03: stfld Int32 index */
                arg0.index = (-1|0);
                /* IL_08: ret  */
                return ;
            }
        }
    };;
    /* System.Void ArrayEnumerator.Dispose()*/
    asm.x60001f7 = function Dispose(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ret  */
                return ;
            }
        }
    };;
    /*  ArrayEnumerator..ctor(Array`1)*/
    asm.x60001f2 = function _ctor(arg0, arg1)
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
                
                /* IL_07: nop  */
                
                /* IL_08: ldarg.0  */
                /* IL_09: ldarg.1  */
                /* IL_0A: stfld Array`1 source */
                arg0.source = arg1;
                /* IL_0F: ldarg.0  */
                /* IL_10: ldc.i4.m1  */
                /* IL_11: stfld Int32 index */
                arg0.index = (-1|0);
                /* IL_16: ldarg.0  */
                /* IL_17: ldarg.1  */
                /* IL_18: callvirt Int32 get_Length() */
                /* IL_1D: stfld Int32 length */
                arg0.length = asm0.x6000009(arg1);
                /* IL_22: ret  */
                return ;
            }
        }
    };;
    /*  constructor..ctor()*/
    asm.x60001f8 = function _ctor(arg0)
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
    /*  jsAsm..ctor()*/
    asm.x60001f9 = function _ctor(arg0)
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
    /* System.Void <GetEnumerator>d__7.System.IDisposable.Dispose()*/
    asm.x60001fb = function System_IDisposable_Dispose(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ret  */
                return ;
            }
        }
    };;
    /* System.Boolean <GetEnumerator>d__7.MoveNext()*/
    asm.x60001fc = function MoveNext(arg0)
    {
        var in_block_0;
        var __pos__;
        var loc0;
        var in_block_1;
        var loc1;
        var loc2;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld Int32 <>1__state */
                /* IL_06: stloc.0  */
                loc0 = (arg0)["CilJs_JavaScript_GetEnumerator_d__7<>1__state"];
                /* IL_07: ldloc.0  */
                /* IL_08: brfalse.s IL_18 */
                
                if ((!(loc0))){
                    __pos__ = 0x18;
                    continue;
                }
                /* IL_0C: ldloc.0  */
                /* IL_0D: ldc.i4.1  */
                /* IL_0E: beq.s IL_56 */
                
                if (loc0 === (1|0)){
                    __pos__ = 0x56;
                    continue;
                }
                /* IL_10: br.s IL_16 */
                __pos__ = 0x16;
                continue;
                case 0x12:
                /* IL_12: br.s IL_18 */
                __pos__ = 0x18;
                continue;
                case 0x14:
                /* IL_14: br.s IL_56 */
                __pos__ = 0x56;
                continue;
                case 0x16:
                /* IL_16: ldc.i4.0  */
                /* IL_17: ret  */
                return (0|0);
                case 0x18:
                /* IL_18: ldarg.0  */
                /* IL_19: ldc.i4.m1  */
                /* IL_1A: stfld Int32 <>1__state */
                (arg0)["CilJs_JavaScript_GetEnumerator_d__7<>1__state"] = (-1|0);
                /* IL_1F: nop  */
                
                /* IL_20: ldarg.0  */
                /* IL_21: ldarg.0  */
                /* IL_22: ldfld Array <>4__this */
                /* IL_27: stfld Array <a>5__1 */
                (arg0)["CilJs_JavaScript_GetEnumerator_d__7<a>5__1"] = (arg0)["<>4__this"];
                /* IL_2C: ldarg.0  */
                /* IL_2D: ldc.i4.0  */
                /* IL_2E: stfld Int32 <i>5__2 */
                (arg0)["CilJs_JavaScript_GetEnumerator_d__7<i>5__2"] = (0|0);
                /* IL_33: br.s IL_6E */
                __pos__ = 0x6E;
                continue;
                case 0x35:
                case 0x56:
                case 0x6E:
                in_block_1 = true;
                
                if (__pos__ > 0x83){
                    in_block_1 = false;
                }
                
                if (__pos__ < 0x35){
                    __pos__ = 0x35;
                }
                
                while (in_block_1){
                    
                    switch (__pos__){
                        case 0x35:
                        /* IL_35: nop  */
                        
                        /* IL_36: ldarg.0  */
                        /* IL_37: ldarg.0  */
                        /* IL_38: ldfld Array <a>5__1 */
                        /* IL_3D: ldarg.0  */
                        /* IL_3E: ldfld Int32 <i>5__2 */
                        /* IL_43: callvirt Object get_Item(System.Int32) */
                        /* IL_48: stfld Object <>2__current */
                        (arg0)["CilJs_JavaScript_GetEnumerator_d__7<>2__current"] = (arg0)["CilJs_JavaScript_GetEnumerator_d__7<a>5__1"][(arg0)["CilJs_JavaScript_GetEnumerator_d__7<i>5__2"]];
                        /* IL_4D: ldarg.0  */
                        /* IL_4E: ldc.i4.1  */
                        /* IL_4F: stfld Int32 <>1__state */
                        (arg0)["CilJs_JavaScript_GetEnumerator_d__7<>1__state"] = (1|0);
                        /* IL_54: ldc.i4.1  */
                        /* IL_55: ret  */
                        return (1|0);
                        case 0x56:
                        /* IL_56: ldarg.0  */
                        /* IL_57: ldc.i4.m1  */
                        /* IL_58: stfld Int32 <>1__state */
                        (arg0)["CilJs_JavaScript_GetEnumerator_d__7<>1__state"] = (-1|0);
                        /* IL_5D: nop  */
                        
                        /* IL_5E: ldarg.0  */
                        /* IL_5F: ldfld Int32 <i>5__2 */
                        /* IL_64: stloc.1  */
                        loc1 = (arg0)["CilJs_JavaScript_GetEnumerator_d__7<i>5__2"];
                        /* IL_65: ldarg.0  */
                        /* IL_66: ldloc.1  */
                        /* IL_67: ldc.i4.1  */
                        /* IL_68: add  */
                        /* IL_69: stfld Int32 <i>5__2 */
                        (arg0)["CilJs_JavaScript_GetEnumerator_d__7<i>5__2"] = ((loc1 + (1|0)) | (0|0));
                        case 0x6E:
                        /* IL_6E: ldarg.0  */
                        /* IL_6F: ldfld Int32 <i>5__2 */
                        /* IL_74: ldarg.0  */
                        /* IL_75: ldfld Array <a>5__1 */
                        /* IL_7A: callvirt Int32 get_Length() */
                        /* IL_80: clt  */
                        /* IL_81: stloc.2  */
                        loc2 = (((arg0)["CilJs_JavaScript_GetEnumerator_d__7<i>5__2"] < (arg0)["CilJs_JavaScript_GetEnumerator_d__7<a>5__1"].length) ? 1 : 0);
                        /* IL_82: ldloc.2  */
                        /* IL_83: brtrue.s IL_35 */
                        
                        if (loc2){
                            __pos__ = 0x35;
                            continue;
                        }
                    }
                    break;
                }
                /* IL_85: ldc.i4.0  */
                /* IL_86: ret  */
                return (0|0);
            }
        }
    };;
    /* System.Object <GetEnumerator>d__7.System.Collections.Generic.IEnumerator<System.Object>.get_Current()*/
    asm.x60001fd = function System_Collections_Generic_IEnumerator_System_Object__get_Current(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld Object <>2__current */
                /* IL_06: ret  */
                return (arg0)["CilJs_JavaScript_GetEnumerator_d__7<>2__current"];
            }
        }
    };;
    /* System.Void <GetEnumerator>d__7.System.Collections.IEnumerator.Reset()*/
    asm.x60001fe_init = function (arg0)
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x60001fe = asm.x60001fe_;
    };;
    asm.x60001fe = function (arg0)
    {
        asm.x60001fe_init(arg0);
        return asm.x60001fe_(arg0);
    };;
    asm.x60001fe_ = function System_Collections_IEnumerator_Reset(arg0)
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
    /* System.Object <GetEnumerator>d__7.System.Collections.IEnumerator.get_Current()*/
    asm.x60001ff = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var in_block_0;
        var __pos__;
        in_block_0 = true;
        __pos__ = 0x0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld Object <>2__current */
                /* IL_06: ret  */
                return (arg0)["CilJs_JavaScript_GetEnumerator_d__7<>2__current"];
            }
        }
    };;
    /*  <GetEnumerator>d__7..ctor(Int32)*/
    asm.x60001fa = function _ctor(arg0, arg1)
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
                (arg0)["CilJs_JavaScript_GetEnumerator_d__7<>1__state"] = arg1;
                /* IL_0E: ret  */
                return ;
            }
        }
    };;
    (asm)["System.Locale"] = CILJS.declare_type(
        "Locale",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Locale",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000002",null);
            this.GenericTypeMetadataName = "asm0.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Locale() { c.init(); }");
    (asm)["System.Activator"] = CILJS.declare_type(
        "Activator",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Activator",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000003",null);
            this.GenericTypeMetadataName = "asm0.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Activator() { c.init(); }");
    (asm)["System.Predicate`1"] = CILJS.declare_type(
        "Predicate_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Predicate`1",false,false,false,true,false,[],[
                    [asm0, "x6000006", "Invoke"],
                    [asm0, "x6000007", "BeginInvoke"],
                    [asm0, "x6000008", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm0.t2000004",null);
            (this.GenericArguments)["asm0.t2000004"] = [T];
            this.GenericTypeMetadataName = ("asm0.t2000004<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000006","asm0.x6000006");
            CILJS.declare_virtual(this,"asm0.x6000007","asm0.x6000007");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
        },
        "function Predicate_1() { c.init();this._invocationList = null;this._methodPtr = null;this._target = null }");
    (asm)["System.Array"] = CILJS.declare_type(
        "Array",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Array",false,false,false,false,false,[],[
                    [asm0, "x6000009", "get_Length"],
                    [asm0, "x600000a", "get_LongLength"],
                    [asm0, "x600000e", "GetValue"],
                    [asm0, "x600000f", "GetEnumerator"],
                    [asm0, "x600002d", "SetValue", []]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000005",null);
            this.GenericTypeMetadataName = "asm0.t2000005";
            CILJS.declare_virtual(this,"asm0.x600000f","asm0.x600000f");
            CILJS.declare_virtual(this,"asm0.x6000010","asm0.x6000010");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                {
                    'x60001b2': function (){ return asm0.x600000f;}
                });
        },
        "function Array() { c.init();this.etype = null;this.jsarr = null }");
    (asm)["System.Array`1"] = CILJS.declare_type(
        "Array_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Array"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Array`1",false,false,false,true,false,[],[
                    [asm0, "x6000030", "GetEnumerator"]
                ],(asm0)["System.Array"](),CILJS.is_inst_array(T),Array,"asm0.t2000006",null);
            (this.GenericArguments)["asm0.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm0.t2000006<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000030","asm0.x6000030");
            CILJS.declare_virtual(this,"asm0.x6000010","asm0.x6000031");
            CILJS.declare_virtual(this,"asm0.x6000032","asm0.x6000032");
            CILJS.declare_virtual(this,"asm0.x6000033","asm0.x6000033");
            CILJS.declare_virtual(this,"asm0.x6000034","asm0.x6000034");
            CILJS.declare_virtual(this,"asm0.x6000035","asm0.x6000035");
            CILJS.declare_virtual(this,"asm0.x6000036","asm0.x6000036");
            CILJS.declare_virtual(this,"asm0.x6000037","asm0.x6000037");
            CILJS.declare_virtual(this,"asm0.x6000038","asm0.x6000038");
            CILJS.declare_virtual(this,"asm0.x600000f","asm0.x600000f");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerable`1"](T), T],
                {
                    'x60001c0': function (){ return asm0.x6000030;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                {
                    'x60001b2': function (){ return asm0.x600000f;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.ICollection`1"](T), T],
                {
                    'x60001b8': function (){ return asm0.x6000032;},
                    'x60001b9': function (){ return asm0.x6000033;},
                    'x60001ba': function (){ return asm0.x6000034;},
                    'x60001bb': function (){ return asm0.x6000035;},
                    'x60001bc': function (){ return asm0.x6000036;},
                    'x60001bd': function (){ return asm0.x6000037;},
                    'x60001be': function (){ return asm0.x6000038;}
                });
        },
        "function Array_1() { c.init();this.etype = null;this.jsarr = null }");
    (asm)["System.AsyncCallback"] = CILJS.declare_type(
        "AsyncCallback",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.AsyncCallback",false,false,false,false,false,[],[
                    [asm0, "x600003b", "Invoke"],
                    [asm0, "x600003c", "BeginInvoke"],
                    [asm0, "x600003d", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm0.t2000007",null);
            this.GenericTypeMetadataName = "asm0.t2000007";
            CILJS.declare_virtual(this,"asm0.x600003b","asm0.x600003b");
            CILJS.declare_virtual(this,"asm0.x600003c","asm0.x600003c");
            CILJS.declare_virtual(this,"asm0.x600003d","asm0.x600003d");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
        },
        "function AsyncCallback() { c.init();this._invocationList = null;this._methodPtr = null;this._target = null }");
    (asm)["System.Attribute"] = CILJS.declare_type(
        "Attribute",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Attribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x600003f,
                        [
                            (32767|0)
                        ]
                    ]
                ],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000008",null);
            this.GenericTypeMetadataName = "asm0.t2000008";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Attribute() { c.init(); }");
    (asm)["System.AttributeTargets"] = CILJS.declare_type(
        "AttributeTargets",
        [],
        function ()
        {
            return (asm0)["System.Enum"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.AttributeTargets",true,false,false,false,false,[
                    [
                        (asm0)["System.FlagsAttribute"](),
                        asm0.x6000081
                    ]
                ],[],(asm0)["System.Enum"](),CILJS.is_inst_value_type(this),Array,"asm0.t2000009",new ((asm0)["System.AttributeTargets"]())());
            this.Assembly = new ((asm0)["System.AttributeTargets"]())();
            this.Module = new ((asm0)["System.AttributeTargets"]())();
            this.Class = new ((asm0)["System.AttributeTargets"]())();
            this.Struct = new ((asm0)["System.AttributeTargets"]())();
            this.Enum = new ((asm0)["System.AttributeTargets"]())();
            this.Constructor = new ((asm0)["System.AttributeTargets"]())();
            this.Method = new ((asm0)["System.AttributeTargets"]())();
            this.Property = new ((asm0)["System.AttributeTargets"]())();
            this.Field = new ((asm0)["System.AttributeTargets"]())();
            this.Event = new ((asm0)["System.AttributeTargets"]())();
            this.Interface = new ((asm0)["System.AttributeTargets"]())();
            this.Parameter = new ((asm0)["System.AttributeTargets"]())();
            this.Delegate = new ((asm0)["System.AttributeTargets"]())();
            this.ReturnValue = new ((asm0)["System.AttributeTargets"]())();
            this.GenericParameter = new ((asm0)["System.AttributeTargets"]())();
            this.All = new ((asm0)["System.AttributeTargets"]())();
            this.GenericTypeMetadataName = "asm0.t2000009";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function AttributeTargets() { c.init();this.value__ = 0 }");
    (asm)["System.AttributeUsageAttribute"] = CILJS.declare_type(
        "AttributeUsageAttribute",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.AttributeUsageAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x600003f,
                        [
                            (4|0)
                        ],
                        {
                            'Inherited': [
                                (asm0)["System.Boolean"](),
                                true
                            ]
                        }
                    ]
                ],[
                    [asm0, "x6000040", "get_ValidOn"],
                    [asm0, "x6000042", "get_Inherited"],
                    [asm0, "x6000043", "set_Inherited"],
                    [asm0, "x6000044", "get_AllowMultiple"],
                    [asm0, "x6000045", "set_AllowMultiple"]
                ],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm0.t200000a",null);
            this.GenericTypeMetadataName = "asm0.t200000a";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function AttributeUsageAttribute() { c.init();(this)[\"SystemAttributeUsageAttribute<ValidOn>k__BackingField\"] = new ((asm0)[\"System.AttributeTargets\"]())();(this)[\"SystemAttributeUsageAttribute<Inherited>k__BackingField\"] = 0;(this)[\"SystemAttributeUsageAttribute<AllowMultiple>k__BackingField\"] = 0 }");
    (asm)["System.Boolean"] = CILJS.declare_type(
        "$$Boolean",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Boolean",true,true,false,false,false,[],[
                    [asm0, "x6000046", "ToString"],
                    [asm0, "x6000047", "GetHashCode"],
                    [asm0, "x6000048", "Equals"],
                    [asm0, "x6000049", "Equals"],
                    [asm0, "x600004a", "CompareTo"],
                    [asm0, "x600004b", "CompareTo"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_primitive(this),Array,"asm0.t200000b",0);
            this.GenericTypeMetadataName = "asm0.t200000b";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x6000046");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000047");
            CILJS.declare_virtual(this,"asm0.x6000048","asm0.x6000048");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000049");
            CILJS.declare_virtual(this,"asm0.x600004a","asm0.x600004a");
            CILJS.declare_virtual(this,"asm0.x600004b","asm0.x600004b");
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Boolean"]()), (asm0)["System.Boolean"]()],
                {
                    'x6000094': function (){ return asm0.x600004b;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000093': function (){ return asm0.x600004a;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.Boolean"]()), (asm0)["System.Boolean"]()],
                {
                    'x6000096': function (){ return asm0.x6000048;}
                });
        },
        "function $$Boolean() { c.init(); }");
    (asm)["System.Byte"] = CILJS.declare_type(
        "Byte",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Byte",true,true,false,false,false,[],[
                    [asm0, "x600004c", "ToString"],
                    [asm0, "x600004d", "CompareTo"],
                    [asm0, "x600004e", "CompareTo"],
                    [asm0, "x600004f", "Equals"],
                    [asm0, "x6000050", "Equals"],
                    [asm0, "x6000051", "GetHashCode"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_primitive(this),Uint8Array,"asm0.t200000c",0);
            this.MinValue = 0;
            this.MaxValue = 0;
            this.GenericTypeMetadataName = "asm0.t200000c";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600004c");
            CILJS.declare_virtual(this,"asm0.x600004d","asm0.x600004d");
            CILJS.declare_virtual(this,"asm0.x600004e","asm0.x600004e");
            CILJS.declare_virtual(this,"asm0.x600004f","asm0.x600004f");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000050");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000051");
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Byte"]()), (asm0)["System.Byte"]()],
                {
                    'x6000094': function (){ return asm0.x600004e;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000093': function (){ return asm0.x600004d;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.Byte"]()), (asm0)["System.Byte"]()],
                {
                    'x6000096': function (){ return asm0.x600004f;}
                });
        },
        "function Byte() { c.init(); }");
    (asm)["System.Char"] = CILJS.declare_type(
        "Char",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Char",true,true,false,false,false,[],[
                    [asm0, "x6000052", "ToString"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_primitive(this),Uint16Array,"asm0.t200000d",0);
            this.MinValue = 0;
            this.MaxValue = 0;
            this.GenericTypeMetadataName = "asm0.t200000d";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x6000052");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Char() { c.init(); }");
    (asm)["System.Comparison`1"] = CILJS.declare_type(
        "Comparison_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Comparison`1",false,false,false,true,false,[],[
                    [asm0, "x6000056", "Invoke"],
                    [asm0, "x6000057", "BeginInvoke"],
                    [asm0, "x6000058", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm0.t200000e",null);
            (this.GenericArguments)["asm0.t200000e"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200000e<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000056","asm0.x6000056");
            CILJS.declare_virtual(this,"asm0.x6000057","asm0.x6000057");
            CILJS.declare_virtual(this,"asm0.x6000058","asm0.x6000058");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
        },
        "function Comparison_1() { c.init();this._invocationList = null;this._methodPtr = null;this._target = null }");
    (asm)["System.Console"] = CILJS.declare_type(
        "Console",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Console",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t200000f",null);
            this.GenericTypeMetadataName = "asm0.t200000f";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Console() { c.init(); }");
    (asm)["System.Delegate"] = CILJS.declare_type(
        "Delegate",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Delegate",false,false,false,false,false,[],[
                    [asm0, "x6000061", "Equals"],
                    [asm0, "x6000064", "GetHashCode"]
                ],(asm0)["System.Object"](),CILJS.is_inst_delegate(this),Array,"asm0.t2000010",null);
            this.GenericTypeMetadataName = "asm0.t2000010";
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x600005f");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x6000060");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
        },
        "function Delegate() { c.init();this._methodPtr = null;this._target = null }");
    (asm)["System.DivideByZeroException"] = CILJS.declare_type(
        "DivideByZeroException",
        [],
        function ()
        {
            return (asm0)["System.Exception"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.DivideByZeroException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),CILJS.is_inst_default(this),Array,"asm0.t2000011",null);
            this.GenericTypeMetadataName = "asm0.t2000011";
            CILJS.declare_virtual(this,"asm0.x600007b","asm0.x600007b");
            CILJS.declare_virtual(this,"asm0.x600007c","asm0.x600007c");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600007d");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function DivideByZeroException() { c.init(); }");
    (asm)["System.Double"] = CILJS.declare_type(
        "Double",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Double",true,true,false,false,false,[],[
                    [asm0, "x6000069", "ToString"],
                    [asm0, "x600006a", "CompareTo"],
                    [asm0, "x600006b", "CompareTo"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_primitive(this),Float64Array,"asm0.t2000012",0);
            this.Epsilon = 0;
            this.MaxValue = 0;
            this.MinValue = 0;
            this.NaN = 0;
            this.NegativeInfinity = 0;
            this.PositiveInfinity = 0;
            this.GenericTypeMetadataName = "asm0.t2000012";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x6000069");
            CILJS.declare_virtual(this,"asm0.x600006a","asm0.x600006a");
            CILJS.declare_virtual(this,"asm0.x600006b","asm0.x600006b");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Double"]()), (asm0)["System.Double"]()],
                {
                    'x6000094': function (){ return asm0.x600006b;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000093': function (){ return asm0.x600006a;}
                });
        },
        "function Double() { c.init(); }");
    (asm)["System.Enum"] = CILJS.declare_type(
        "Enum",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Enum",false,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_default(this),Array,"asm0.t2000013",null);
            this.GenericTypeMetadataName = "asm0.t2000013";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Enum() { c.init(); }");
    (asm)["System.Environment"] = CILJS.declare_type(
        "Environment",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Environment",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000014",null);
            this.GenericTypeMetadataName = "asm0.t2000014";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Environment() { c.init(); }");
    (asm)["System.EventArgs"] = CILJS.declare_type(
        "EventArgs",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.EventArgs",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000015",null);
            this.Empty = null;
            this.GenericTypeMetadataName = "asm0.t2000015";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function EventArgs() { c.init(); }");
    (asm)["System.EventHandler"] = CILJS.declare_type(
        "EventHandler",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.EventHandler",false,false,false,false,false,[],[
                    [asm0, "x6000073", "Invoke"],
                    [asm0, "x6000074", "BeginInvoke"],
                    [asm0, "x6000075", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm0.t2000016",null);
            this.GenericTypeMetadataName = "asm0.t2000016";
            CILJS.declare_virtual(this,"asm0.x6000073","asm0.x6000073");
            CILJS.declare_virtual(this,"asm0.x6000074","asm0.x6000074");
            CILJS.declare_virtual(this,"asm0.x6000075","asm0.x6000075");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
        },
        "function EventHandler() { c.init();this._invocationList = null;this._methodPtr = null;this._target = null }");
    (asm)["System.Exception"] = CILJS.declare_type(
        "Exception",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Exception",false,false,false,false,false,[],[
                    [asm0, "x6000079", "get_HResult"],
                    [asm0, "x600007b", "get_Message"],
                    [asm0, "x600007c", "set_Message"],
                    [asm0, "x600007d", "ToString"],
                    [asm0, "x600007e", "get_InnerException"],
                    [asm0, "x600007f", "set_InnerException"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000017",null);
            this.GenericTypeMetadataName = "asm0.t2000017";
            CILJS.declare_virtual(this,"asm0.x600007b","asm0.x600007b");
            CILJS.declare_virtual(this,"asm0.x600007c","asm0.x600007c");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600007d");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Exception() { c.init();(this)[\"SystemException<HResult>k__BackingField\"] = 0;(this)[\"SystemException<Message>k__BackingField\"] = null;(this)[\"SystemException<InnerException>k__BackingField\"] = null }");
    (asm)["System.FlagsAttribute"] = CILJS.declare_type(
        "FlagsAttribute",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.FlagsAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x600003f,
                        [
                            (16|0)
                        ],
                        {
                            'Inherited': [
                                (asm0)["System.Boolean"](),
                                false
                            ]
                        }
                    ]
                ],[],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm0.t2000018",null);
            this.GenericTypeMetadataName = "asm0.t2000018";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function FlagsAttribute() { c.init(); }");
    (asm)["System.Func`2"] = CILJS.declare_type(
        "Func_2",
        ["T", "TResult"],
        function (T, TResult)
        {
            return {};
        },
        function (T, TResult)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Func`2",false,false,false,true,false,[],[
                    [asm0, "x6000083", "Invoke"],
                    [asm0, "x6000084", "BeginInvoke"],
                    [asm0, "x6000085", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm0.t2000019",null);
            (this.GenericArguments)["asm0.t2000019"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm0.t2000019<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
            CILJS.declare_virtual(this,"asm0.x6000083","asm0.x6000083");
            CILJS.declare_virtual(this,"asm0.x6000084","asm0.x6000084");
            CILJS.declare_virtual(this,"asm0.x6000085","asm0.x6000085");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
        },
        "function Func_2() { c.init();this._invocationList = null;this._methodPtr = null;this._target = null }");
    (asm)["System.GC"] = CILJS.declare_type(
        "GC",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.GC",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t200001a",null);
            this.GenericTypeMetadataName = "asm0.t200001a";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function GC() { c.init(); }");
    (asm)["System.IAsyncResult"] = CILJS.declare_type(
        "IAsyncResult",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.IAsyncResult",false,false,true,false,false,[],[
                    [asm0, "x6000088", "get_IsCompleted"],
                    [asm0, "x6000089", "get_AsyncWaitHandle"],
                    [asm0, "x600008a", "get_AsyncState"],
                    [asm0, "x600008b", "get_CompletedSynchronously"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t200001b",null);
            this.GenericTypeMetadataName = "asm0.t200001b";
            CILJS.declare_virtual(this,"asm0.x6000088","asm0.x6000088");
            CILJS.declare_virtual(this,"asm0.x6000089","asm0.x6000089");
            CILJS.declare_virtual(this,"asm0.x600008a","asm0.x600008a");
            CILJS.declare_virtual(this,"asm0.x600008b","asm0.x600008b");
        },
        "function IAsyncResult() { c.init(); }");
    (asm)["System.AsyncResult"] = CILJS.declare_type(
        "AsyncResult",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.AsyncResult",false,false,false,false,false,[],[
                    [asm0, "x600008d", "get_IsCompleted"],
                    [asm0, "x600008e", "get_AsyncWaitHandle"],
                    [asm0, "x600008f", "get_AsyncState"],
                    [asm0, "x6000090", "get_CompletedSynchronously"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t200001c",null);
            this.GenericTypeMetadataName = "asm0.t200001c";
            CILJS.declare_virtual(this,"asm0.x600008d","asm0.x600008d");
            CILJS.declare_virtual(this,"asm0.x600008e","asm0.x600008e");
            CILJS.declare_virtual(this,"asm0.x600008f","asm0.x600008f");
            CILJS.declare_virtual(this,"asm0.x6000090","asm0.x6000090");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.IAsyncResult"]()],
                {
                    'x6000088': function (){ return asm0.x600008d;},
                    'x6000089': function (){ return asm0.x600008e;},
                    'x600008a': function (){ return asm0.x600008f;},
                    'x600008b': function (){ return asm0.x6000090;}
                });
        },
        "function AsyncResult() { c.init();this.asyncState = null;this.result = null }");
    (asm)["System.ICloneable"] = CILJS.declare_type(
        "ICloneable",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.ICloneable",false,false,true,false,false,[],[
                    [asm0, "x6000092", "Clone"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t200001d",null);
            this.GenericTypeMetadataName = "asm0.t200001d";
            CILJS.declare_virtual(this,"asm0.x6000092","asm0.x6000092");
        },
        "function ICloneable() { c.init(); }");
    (asm)["System.IComparable"] = CILJS.declare_type(
        "IComparable",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.IComparable",false,false,true,false,false,[],[
                    [asm0, "x6000093", "CompareTo"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t200001e",null);
            this.GenericTypeMetadataName = "asm0.t200001e";
            CILJS.declare_virtual(this,"asm0.x6000093","asm0.x6000093");
        },
        "function IComparable() { c.init(); }");
    (asm)["System.IComparable`1"] = CILJS.declare_type(
        "IComparable_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.IComparable`1",false,false,true,true,false,[],[
                    [asm0, "x6000094", "CompareTo"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t200001f",null);
            (this.GenericArguments)["asm0.t200001f"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200001f<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000094","asm0.x6000094");
        },
        "function IComparable_1() { c.init(); }");
    (asm)["System.IDisposable"] = CILJS.declare_type(
        "IDisposable",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.IDisposable",false,false,true,false,false,[],[
                    [asm0, "x6000095", "Dispose"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t2000020",null);
            this.GenericTypeMetadataName = "asm0.t2000020";
            CILJS.declare_virtual(this,"asm0.x6000095","asm0.x6000095");
        },
        "function IDisposable() { c.init(); }");
    (asm)["System.IEquatable`1"] = CILJS.declare_type(
        "IEquatable_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.IEquatable`1",false,false,true,true,false,[],[
                    [asm0, "x6000096", "Equals"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t2000021",null);
            (this.GenericArguments)["asm0.t2000021"] = [T];
            this.GenericTypeMetadataName = ("asm0.t2000021<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000096","asm0.x6000096");
        },
        "function IEquatable_1() { c.init(); }");
    (asm)["System.Int16"] = CILJS.declare_type(
        "Int16",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Int16",true,true,false,false,false,[],[
                    [asm0, "x6000097", "ToString"],
                    [asm0, "x6000098", "CompareTo"],
                    [asm0, "x6000099", "CompareTo"],
                    [asm0, "x600009a", "Equals"],
                    [asm0, "x600009b", "Equals"],
                    [asm0, "x600009c", "GetHashCode"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_primitive(this),Int16Array,"asm0.t2000022",0);
            this.GenericTypeMetadataName = "asm0.t2000022";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x6000097");
            CILJS.declare_virtual(this,"asm0.x6000098","asm0.x6000098");
            CILJS.declare_virtual(this,"asm0.x6000099","asm0.x6000099");
            CILJS.declare_virtual(this,"asm0.x600009a","asm0.x600009a");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x600009b");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x600009c");
            CILJS.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.Int16"]()), (asm0)["System.Int16"]()],
                {
                    'x6000096': function (){ return asm0.x600009a;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000093': function (){ return asm0.x6000098;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Int16"]()), (asm0)["System.Int16"]()],
                {
                    'x6000094': function (){ return asm0.x6000099;}
                });
        },
        "function Int16() { c.init(); }");
    (asm)["System.Int32"] = CILJS.declare_type(
        "Int32",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Int32",true,true,false,false,false,[],[
                    [asm0, "x600009d", "ToString"],
                    [asm0, "x600009f", "ToString"],
                    [asm0, "x60000a0", "CompareTo"],
                    [asm0, "x60000a1", "CompareTo"],
                    [asm0, "x60000a2", "Equals"],
                    [asm0, "x60000a3", "Equals"],
                    [asm0, "x60000a4", "GetHashCode"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_primitive(this),Int32Array,"asm0.t2000023",0);
            this.MaxValue = 0;
            this.MinValue = 0;
            this.GenericTypeMetadataName = "asm0.t2000023";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600009d");
            CILJS.declare_virtual(this,"asm0.x60000a0","asm0.x60000a0");
            CILJS.declare_virtual(this,"asm0.x60000a1","asm0.x60000a1");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000a2");
            CILJS.declare_virtual(this,"asm0.x60000a3","asm0.x60000a3");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000a4");
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Int32"]()), (asm0)["System.Int32"]()],
                {
                    'x6000094': function (){ return asm0.x60000a1;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000093': function (){ return asm0.x60000a0;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.Int32"]()), (asm0)["System.Int32"]()],
                {
                    'x6000096': function (){ return asm0.x60000a3;}
                });
        },
        "function Int32() { c.init(); }");
    (asm)["System.Int64"] = CILJS.declare_type(
        "Int64",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Int64",true,true,false,false,false,[],[
                    [asm0, "x60000a6", "ToString"],
                    [asm0, "x60000a7", "GetHashCode"],
                    [asm0, "x60000bc", "CompareTo"],
                    [asm0, "x60000bd", "CompareTo"],
                    [asm0, "x60000be", "Equals"],
                    [asm0, "x60000bf", "Equals"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_primitive(this),Array,"asm0.t2000024",0);
            this.MaxValue = 0;
            this.MinValue = 0;
            this.GenericTypeMetadataName = "asm0.t2000024";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000a6");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000a7");
            CILJS.declare_virtual(this,"asm0.x60000bc","asm0.x60000bc");
            CILJS.declare_virtual(this,"asm0.x60000bd","asm0.x60000bd");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000be");
            CILJS.declare_virtual(this,"asm0.x60000bf","asm0.x60000bf");
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Int64"]()), (asm0)["System.Int64"]()],
                {
                    'x6000094': function (){ return asm0.x60000bd;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000093': function (){ return asm0.x60000bc;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.Int64"]()), (asm0)["System.Int64"]()],
                {
                    'x6000096': function (){ return asm0.x60000bf;}
                });
        },
        "function Int64() { c.init(); }");
    (asm)["System.InternalFormatting"] = CILJS.declare_type(
        "InternalFormatting",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.InternalFormatting",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000025",null);
            this.GenericTypeMetadataName = "asm0.t2000025";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function InternalFormatting() { c.init(); }");
    (asm)["System.IntPtr"] = CILJS.declare_type(
        "IntPtr",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.IntPtr",true,true,false,false,false,[],[
                    [asm0, "x60000c2", "ToString"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_primitive(this),Array,"asm0.t2000026",0);
            this.GenericTypeMetadataName = "asm0.t2000026";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000c2");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function IntPtr() { c.init(); }");
    (asm)["System.InvalidCastException"] = CILJS.declare_type(
        "InvalidCastException",
        [],
        function ()
        {
            return (asm0)["System.Exception"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.InvalidCastException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),CILJS.is_inst_default(this),Array,"asm0.t2000027",null);
            this.GenericTypeMetadataName = "asm0.t2000027";
            CILJS.declare_virtual(this,"asm0.x600007b","asm0.x600007b");
            CILJS.declare_virtual(this,"asm0.x600007c","asm0.x600007c");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600007d");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function InvalidCastException() { c.init(); }");
    (asm)["System.InvalidOperationException"] = CILJS.declare_type(
        "InvalidOperationException",
        [],
        function ()
        {
            return (asm0)["System.Exception"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.InvalidOperationException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),CILJS.is_inst_default(this),Array,"asm0.t2000028",null);
            this.GenericTypeMetadataName = "asm0.t2000028";
            CILJS.declare_virtual(this,"asm0.x600007b","asm0.x600007b");
            CILJS.declare_virtual(this,"asm0.x600007c","asm0.x600007c");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600007d");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function InvalidOperationException() { c.init(); }");
    (asm)["System.Math"] = CILJS.declare_type(
        "Math",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Math",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000029",null);
            this.E = 0;
            this.PI = 0;
            this.GenericTypeMetadataName = "asm0.t2000029";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Math() { c.init(); }");
    (asm)["System.MulticastDelegate"] = CILJS.declare_type(
        "MulticastDelegate",
        [],
        function ()
        {
            return (asm0)["System.Delegate"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.MulticastDelegate",false,false,false,false,false,[],[],(asm0)["System.Delegate"](),CILJS.is_inst_delegate(this),Array,"asm0.t200002a",null);
            this.GenericTypeMetadataName = "asm0.t200002a";
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
        },
        "function MulticastDelegate() { c.init();this._invocationList = null;this._methodPtr = null;this._target = null }");
    (asm)["System.NotImplementedException"] = CILJS.declare_type(
        "NotImplementedException",
        [],
        function ()
        {
            return (asm0)["System.Exception"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.NotImplementedException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),CILJS.is_inst_default(this),Array,"asm0.t200002b",null);
            this.GenericTypeMetadataName = "asm0.t200002b";
            CILJS.declare_virtual(this,"asm0.x600007b","asm0.x600007b");
            CILJS.declare_virtual(this,"asm0.x600007c","asm0.x600007c");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600007d");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function NotImplementedException() { c.init(); }");
    (asm)["System.NotSupportedException"] = CILJS.declare_type(
        "NotSupportedException",
        [],
        function ()
        {
            return (asm0)["System.Exception"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.NotSupportedException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),CILJS.is_inst_default(this),Array,"asm0.t200002c",null);
            this.GenericTypeMetadataName = "asm0.t200002c";
            CILJS.declare_virtual(this,"asm0.x600007b","asm0.x600007b");
            CILJS.declare_virtual(this,"asm0.x600007c","asm0.x600007c");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600007d");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function NotSupportedException() { c.init(); }");
    (asm)["System.Nullable`1"] = CILJS.declare_type(
        "Nullable_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Nullable`1",true,false,false,true,true,[
                    [
                        (asm0)["System.Diagnostics.DebuggerStepThroughAttribute"](),
                        asm0.x60001b0
                    ]
                ],[
                    [asm0, "x60000dc", "get_HasValue"],
                    [asm0, "x60000dd", "get_Value"],
                    [asm0, "x60000de", "Equals"],
                    [asm0, "x60000e0", "GetHashCode"],
                    [asm0, "x60000e1", "GetValueOrDefault"],
                    [asm0, "x60000e2", "GetValueOrDefault"],
                    [asm0, "x60000e3", "ToString"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm0.t200002d",new ((asm0)["System.Nullable`1"]((asm0)["CilJs.Runtime.UnboundGenericParameter"]()))());
            (this.GenericArguments)["asm0.t200002d"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200002d<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000de");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000e0");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000e3");
        },
        "function Nullable_1() { c.init();this.value = T.Default;this.has_value = 0 }");
    (asm)["System.NullReferenceException"] = CILJS.declare_type(
        "NullReferenceException",
        [],
        function ()
        {
            return (asm0)["System.SystemException"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.NullReferenceException",false,false,false,false,false,[],[],(asm0)["System.SystemException"](),CILJS.is_inst_default(this),Array,"asm0.t200002e",null);
            this.GenericTypeMetadataName = "asm0.t200002e";
            CILJS.declare_virtual(this,"asm0.x600007b","asm0.x600007b");
            CILJS.declare_virtual(this,"asm0.x600007c","asm0.x600007c");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600007d");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function NullReferenceException() { c.init(); }");
    (asm)["System.Object"] = CILJS.declare_type(
        "$$Object",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Object",false,false,false,false,false,[],[
                    [asm0, "x60000ed", "ToString"],
                    [asm0, "x60000f0", "Equals"],
                    [asm0, "x60000f1", "GetHashCode"],
                    [asm0, "x60000f2", "GetType"]
                ],null,CILJS.is_inst_default(this),Array,"asm0.t200002f",null);
            this.GenericTypeMetadataName = "asm0.t200002f";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.toString = asm0.x60000ec;
        },
        "function $$Object() { c.init(); }");
    (asm)["System.ParamArrayAttribute"] = CILJS.declare_type(
        "ParamArrayAttribute",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.ParamArrayAttribute",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm0.t2000030",null);
            this.GenericTypeMetadataName = "asm0.t2000030";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function ParamArrayAttribute() { c.init(); }");
    (asm)["System.RuntimeFieldHandle"] = CILJS.declare_type(
        "RuntimeFieldHandle",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.RuntimeFieldHandle",true,false,false,false,false,[],[
                    [asm0, "x60000f6", "get_Value"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm0.t2000031",new ((asm0)["System.RuntimeFieldHandle"]())());
            this.GenericTypeMetadataName = "asm0.t2000031";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function RuntimeFieldHandle() { c.init();this.value = null }");
    (asm)["System.RuntimeType"] = CILJS.declare_type(
        "RuntimeType",
        [],
        function ()
        {
            return (asm0)["System.Type"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.RuntimeType",false,false,false,false,false,[],[
                    [asm0, "x60000fd", "get_Assembly"],
                    [asm0, "x60000fe", "get_FullName"],
                    [asm0, "x60000ff", "get_AssemblyQualifiedName"],
                    [asm0, "x6000100", "Equals"],
                    [asm0, "x6000101", "GetHashCode"],
                    [asm0, "x6000102", "GetCustomAttributes"],
                    [asm0, "x6000103", "GetCustomAttributes"],
                    [asm0, "x6000104", "IsDefined"],
                    [asm0, "x6000105", "get_IsInterface"],
                    [asm0, "x6000106", "get_IsGenericType"],
                    [asm0, "x6000107", "get_IsGenericTypeDefinition"],
                    [asm0, "x6000108", "MakeGenericType"],
                    [asm0, "x6000109", "GetGenericArguments"],
                    [asm0, "x600010a", "get_BaseType"],
                    [asm0, "x600010b", "GetInterfaces"],
                    [asm0, "x600010c", "IsAssignableFrom"],
                    [asm0, "x600010e", "get_Name"],
                    [asm0, "x600010f", "get_IsValueType"],
                    [asm0, "x6000110", "get_IsPrimitive"],
                    [asm0, "x6000111", "GetElementType"],
                    [asm0, "x6000112", "GetMethods"],
                    [asm0, "x6000114", "IsInstanceOfType"]
                ],(asm0)["System.Type"](),CILJS.is_inst_default(this),Array,"asm0.t2000032",null);
            this.GenericTypeMetadataName = "asm0.t2000032";
            CILJS.declare_virtual(this,"asm0.x600014a","asm0.x60000fd");
            CILJS.declare_virtual(this,"asm0.x6000146","asm0.x60000fe");
            CILJS.declare_virtual(this,"asm0.x600014c","asm0.x60000ff");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000100");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000101");
            CILJS.declare_virtual(this,"asm0.x60001a0","asm0.x6000102");
            CILJS.declare_virtual(this,"asm0.x60001a1","asm0.x6000103");
            CILJS.declare_virtual(this,"asm0.x60001a2","asm0.x6000104");
            CILJS.declare_virtual(this,"asm0.x600014e","asm0.x6000105");
            CILJS.declare_virtual(this,"asm0.x600014d","asm0.x6000106");
            CILJS.declare_virtual(this,"asm0.x600014f","asm0.x6000107");
            CILJS.declare_virtual(this,"asm0.x6000152","asm0.x6000108");
            CILJS.declare_virtual(this,"asm0.x6000150","asm0.x6000109");
            CILJS.declare_virtual(this,"asm0.x600014b","asm0.x600010a");
            CILJS.declare_virtual(this,"asm0.x6000151","asm0.x600010b");
            CILJS.declare_virtual(this,"asm0.x6000153","asm0.x600010c");
            CILJS.declare_virtual(this,"asm0.x60001a4","asm0.x600010e");
            CILJS.declare_virtual(this,"asm0.x6000154","asm0.x600010f");
            CILJS.declare_virtual(this,"asm0.x6000155","asm0.x6000110");
            CILJS.declare_virtual(this,"asm0.x6000156","asm0.x6000111");
            CILJS.declare_virtual(this,"asm0.x6000157","asm0.x6000112");
            CILJS.declare_virtual(this,"asm0.x6000158","asm0.x6000114");
            CILJS.declare_virtual(this,"asm0.x6000148","asm0.x6000148");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Reflection.ICustomAttributeProvider"]()],
                {
                    'x600019d': function (){ return asm0.x6000102;},
                    'x600019e': function (){ return asm0.x6000103;},
                    'x600019f': function (){ return asm0.x6000104;}
                });
        },
        "function RuntimeType() { c.init();this.ctor = null }");
    (asm)["System.RuntimeTypeHandle"] = CILJS.declare_type(
        "RuntimeTypeHandle",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.RuntimeTypeHandle",true,false,false,false,false,[],[
                    [asm0, "x6000115", "get_Value"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm0.t2000033",new ((asm0)["System.RuntimeTypeHandle"]())());
            this.GenericTypeMetadataName = "asm0.t2000033";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function RuntimeTypeHandle() { c.init();this.value = null }");
    (asm)["System.SByte"] = CILJS.declare_type(
        "SByte",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.SByte",true,true,false,false,false,[],[
                    [asm0, "x6000116", "ToString"],
                    [asm0, "x6000117", "CompareTo"],
                    [asm0, "x6000118", "CompareTo"],
                    [asm0, "x6000119", "Equals"],
                    [asm0, "x600011a", "Equals"],
                    [asm0, "x600011b", "GetHashCode"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_primitive(this),Int8Array,"asm0.t2000034",0);
            this.MinValue = 0;
            this.MaxValue = 0;
            this.GenericTypeMetadataName = "asm0.t2000034";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x6000116");
            CILJS.declare_virtual(this,"asm0.x6000117","asm0.x6000117");
            CILJS.declare_virtual(this,"asm0.x6000118","asm0.x6000118");
            CILJS.declare_virtual(this,"asm0.x6000119","asm0.x6000119");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x600011a");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x600011b");
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.SByte"]()), (asm0)["System.SByte"]()],
                {
                    'x6000094': function (){ return asm0.x6000118;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000093': function (){ return asm0.x6000117;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.SByte"]()), (asm0)["System.SByte"]()],
                {
                    'x6000096': function (){ return asm0.x6000119;}
                });
        },
        "function SByte() { c.init(); }");
    (asm)["System.SerializableAttribute"] = CILJS.declare_type(
        "SerializableAttribute",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.SerializableAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x600003f,
                        [
                            (4124|0)
                        ],
                        {
                            'Inherited': [
                                (asm0)["System.Boolean"](),
                                false
                            ]
                        }
                    ]
                ],[],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm0.t2000035",null);
            this.GenericTypeMetadataName = "asm0.t2000035";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function SerializableAttribute() { c.init(); }");
    (asm)["System.Single"] = CILJS.declare_type(
        "Single",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Single",true,true,false,false,false,[],[
                    [asm0, "x600011d", "ToString"],
                    [asm0, "x600011e", "CompareTo"],
                    [asm0, "x600011f", "CompareTo"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_primitive(this),Float32Array,"asm0.t2000036",0);
            this.MinValue = 0;
            this.Epsilon = 0;
            this.MaxValue = 0;
            this.PositiveInfinity = 0;
            this.NegativeInfinity = 0;
            this.NaN = 0;
            this.GenericTypeMetadataName = "asm0.t2000036";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600011d");
            CILJS.declare_virtual(this,"asm0.x600011e","asm0.x600011e");
            CILJS.declare_virtual(this,"asm0.x600011f","asm0.x600011f");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Single"]()), (asm0)["System.Single"]()],
                {
                    'x6000094': function (){ return asm0.x600011f;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000093': function (){ return asm0.x600011e;}
                });
        },
        "function Single() { c.init(); }");
    (asm)["System.String"] = CILJS.declare_type(
        "$$String",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.String",false,false,false,false,false,[
                    [
                        (asm0)["System.Reflection.DefaultMemberAttribute"](),
                        asm0.x600019b,
                        [
                            CILJS.new_string("Chars")
                        ]
                    ]
                ],[
                    [asm0, "x6000125", "get_Chars"],
                    [asm0, "x600012e", "Replace"],
                    [asm0, "x600012f", "get_Length"],
                    [asm0, "x6000130", "ToString"],
                    [asm0, "x6000133", "Equals"],
                    [asm0, "x6000134", "Equals"],
                    [asm0, "x6000136", "GetHashCode"],
                    [asm0, "x600013b", "ToLower"],
                    [asm0, "x600013d", "ToUpper"],
                    [asm0, "x600013f", "CompareTo"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000037",null);
            this.Empty = null;
            this.GenericTypeMetadataName = "asm0.t2000037";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x6000130");
            CILJS.declare_virtual(this,"asm0.x6000133","asm0.x6000133");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000134");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000136");
            CILJS.declare_virtual(this,"asm0.x600013f","asm0.x600013f");
            CILJS.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.String"]()), (asm0)["System.String"]()],
                {
                    'x6000096': function (){ return asm0.x6000133;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.String"]()), (asm0)["System.String"]()],
                {
                    'x6000094': function (){ return asm0.x600013f;}
                });
        },
        "function $$String() { c.init();this.jsstr = null }");
    (asm)["System.SystemException"] = CILJS.declare_type(
        "SystemException",
        [],
        function ()
        {
            return (asm0)["System.Exception"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.SystemException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),CILJS.is_inst_default(this),Array,"asm0.t2000038",null);
            this.Result = 0;
            this.GenericTypeMetadataName = "asm0.t2000038";
            CILJS.declare_virtual(this,"asm0.x600007b","asm0.x600007b");
            CILJS.declare_virtual(this,"asm0.x600007c","asm0.x600007c");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600007d");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function SystemException() { c.init(); }");
    (asm)["System.Type"] = CILJS.declare_type(
        "Type",
        [],
        function ()
        {
            return (asm0)["System.Reflection.MemberInfo"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Type",false,false,false,false,false,[],[
                    [asm0, "x6000146", "get_FullName"],
                    [asm0, "x6000148", "IsSubclassOf"],
                    [asm0, "x6000149", "get_IsEnum"],
                    [asm0, "x600014a", "get_Assembly"],
                    [asm0, "x600014b", "get_BaseType"],
                    [asm0, "x600014c", "get_AssemblyQualifiedName"],
                    [asm0, "x600014d", "get_IsGenericType"],
                    [asm0, "x600014e", "get_IsInterface"],
                    [asm0, "x600014f", "get_IsGenericTypeDefinition"],
                    [asm0, "x6000150", "GetGenericArguments"],
                    [asm0, "x6000151", "GetInterfaces"],
                    [asm0, "x6000152", "MakeGenericType"],
                    [asm0, "x6000153", "IsAssignableFrom"],
                    [asm0, "x6000154", "get_IsValueType"],
                    [asm0, "x6000155", "get_IsPrimitive"],
                    [asm0, "x6000156", "GetElementType"],
                    [asm0, "x6000157", "GetMethods"],
                    [asm0, "x6000158", "IsInstanceOfType"]
                ],(asm0)["System.Reflection.MemberInfo"](),CILJS.is_inst_default(this),Array,"asm0.t2000039",null);
            this.GenericTypeMetadataName = "asm0.t2000039";
            CILJS.declare_virtual(this,"asm0.x6000146","asm0.x6000146");
            CILJS.declare_virtual(this,"asm0.x6000148","asm0.x6000148");
            CILJS.declare_virtual(this,"asm0.x600014a","asm0.x600014a");
            CILJS.declare_virtual(this,"asm0.x600014b","asm0.x600014b");
            CILJS.declare_virtual(this,"asm0.x600014c","asm0.x600014c");
            CILJS.declare_virtual(this,"asm0.x600014d","asm0.x600014d");
            CILJS.declare_virtual(this,"asm0.x600014e","asm0.x600014e");
            CILJS.declare_virtual(this,"asm0.x600014f","asm0.x600014f");
            CILJS.declare_virtual(this,"asm0.x6000150","asm0.x6000150");
            CILJS.declare_virtual(this,"asm0.x6000151","asm0.x6000151");
            CILJS.declare_virtual(this,"asm0.x6000152","asm0.x6000152");
            CILJS.declare_virtual(this,"asm0.x6000153","asm0.x6000153");
            CILJS.declare_virtual(this,"asm0.x6000154","asm0.x6000154");
            CILJS.declare_virtual(this,"asm0.x6000155","asm0.x6000155");
            CILJS.declare_virtual(this,"asm0.x6000156","asm0.x6000156");
            CILJS.declare_virtual(this,"asm0.x6000157","asm0.x6000157");
            CILJS.declare_virtual(this,"asm0.x6000158","asm0.x6000158");
            CILJS.declare_virtual(this,"asm0.x60001a0","asm0.x60001a0");
            CILJS.declare_virtual(this,"asm0.x60001a1","asm0.x60001a1");
            CILJS.declare_virtual(this,"asm0.x60001a2","asm0.x60001a2");
            CILJS.declare_virtual(this,"asm0.x60001a4","asm0.x60001a4");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Reflection.ICustomAttributeProvider"]()],
                {
                    'x600019d': function (){ return asm0.x60001a0;},
                    'x600019e': function (){ return asm0.x60001a1;},
                    'x600019f': function (){ return asm0.x60001a2;}
                });
        },
        "function Type() { c.init(); }");
    (asm)["System.UInt16"] = CILJS.declare_type(
        "UInt16",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.UInt16",true,true,false,false,false,[],[
                    [asm0, "x600015a", "ToString"],
                    [asm0, "x600015b", "CompareTo"],
                    [asm0, "x600015c", "CompareTo"],
                    [asm0, "x600015d", "Equals"],
                    [asm0, "x600015e", "Equals"],
                    [asm0, "x600015f", "GetHashCode"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_primitive(this),Uint16Array,"asm0.t200003a",0);
            this.MaxValue = 0;
            this.MinValue = 0;
            this.GenericTypeMetadataName = "asm0.t200003a";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x600015a");
            CILJS.declare_virtual(this,"asm0.x600015b","asm0.x600015b");
            CILJS.declare_virtual(this,"asm0.x600015c","asm0.x600015c");
            CILJS.declare_virtual(this,"asm0.x600015d","asm0.x600015d");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x600015e");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x600015f");
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.UInt16"]()), (asm0)["System.UInt16"]()],
                {
                    'x6000094': function (){ return asm0.x600015c;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000093': function (){ return asm0.x600015b;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.UInt16"]()), (asm0)["System.UInt16"]()],
                {
                    'x6000096': function (){ return asm0.x600015d;}
                });
        },
        "function UInt16() { c.init(); }");
    (asm)["System.UInt32"] = CILJS.declare_type(
        "UInt32",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.UInt32",true,true,false,false,false,[],[
                    [asm0, "x6000160", "ToString"],
                    [asm0, "x6000161", "Equals"],
                    [asm0, "x6000162", "GetHashCode"],
                    [asm0, "x6000163", "CompareTo"],
                    [asm0, "x6000164", "CompareTo"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_primitive(this),Uint32Array,"asm0.t200003b",0);
            this.MaxValue = 0;
            this.MinValue = 0;
            this.GenericTypeMetadataName = "asm0.t200003b";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x6000160");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000161");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000162");
            CILJS.declare_virtual(this,"asm0.x6000163","asm0.x6000163");
            CILJS.declare_virtual(this,"asm0.x6000164","asm0.x6000164");
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.UInt32"]()), (asm0)["System.UInt32"]()],
                {
                    'x6000094': function (){ return asm0.x6000164;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000093': function (){ return asm0.x6000163;}
                });
        },
        "function UInt32() { c.init(); }");
    (asm)["System.UInt64"] = CILJS.declare_type(
        "UInt64",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.UInt64",true,true,false,false,false,[],[
                    [asm0, "x6000165", "ToString"],
                    [asm0, "x600016f", "GetHashCode"],
                    [asm0, "x6000171", "CompareTo"],
                    [asm0, "x6000172", "CompareTo"],
                    [asm0, "x6000173", "Equals"],
                    [asm0, "x6000174", "Equals"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_primitive(this),Array,"asm0.t200003c",0);
            this.MinValue = 0;
            this.MaxValue = 0;
            this.GenericTypeMetadataName = "asm0.t200003c";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x6000165");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x600016f");
            CILJS.declare_virtual(this,"asm0.x6000171","asm0.x6000171");
            CILJS.declare_virtual(this,"asm0.x6000172","asm0.x6000172");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000173");
            CILJS.declare_virtual(this,"asm0.x6000174","asm0.x6000174");
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.UInt64"]()), (asm0)["System.UInt64"]()],
                {
                    'x6000094': function (){ return asm0.x6000172;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000093': function (){ return asm0.x6000171;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.UInt64"]()), (asm0)["System.UInt64"]()],
                {
                    'x6000096': function (){ return asm0.x6000174;}
                });
        },
        "function UInt64() { c.init(); }");
    (asm)["System.UIntPtr"] = CILJS.declare_type(
        "UIntPtr",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.UIntPtr",true,true,false,false,false,[],[
                    [asm0, "x6000175", "ToString"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_primitive(this),Array,"asm0.t200003d",0);
            this.GenericTypeMetadataName = "asm0.t200003d";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x6000175");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function UIntPtr() { c.init(); }");
    (asm)["System.ValueType"] = CILJS.declare_type(
        "ValueType",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.ValueType",false,false,false,false,false,[],[
                    [asm0, "x6000176", "Equals"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t200003e",null);
            this.GenericTypeMetadataName = "asm0.t200003e";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function ValueType() { c.init(); }");
    (asm)["System.Void"] = CILJS.declare_type(
        "Void",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Void",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm0.t200003f",new ((asm0)["System.Void"]())());
            this.GenericTypeMetadataName = "asm0.t200003f";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Void() { c.init(); }");
    (asm)["System.Threading.AutoResetEvent"] = CILJS.declare_type(
        "AutoResetEvent",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Threading.AutoResetEvent",false,false,false,false,false,[],[
                    [asm0, "x600017a", "Close"],
                    [asm0, "x600017b", "WaitOne"],
                    [asm0, "x600017c", "Set"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000040",null);
            this.GenericTypeMetadataName = "asm0.t2000040";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function AutoResetEvent() { c.init(); }");
    (asm)["System.Threading.Monitor"] = CILJS.declare_type(
        "Monitor",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Threading.Monitor",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000041",null);
            this.GenericTypeMetadataName = "asm0.t2000041";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Monitor() { c.init(); }");
    (asm)["System.Threading.Thread"] = CILJS.declare_type(
        "Thread",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Threading.Thread",false,false,false,false,false,[],[
                    [asm0, "x6000180", "get_IsThreadPoolThread"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000042",null);
            this.currentThread = null;
            this.GenericTypeMetadataName = "asm0.t2000042";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Thread() { c.init(); }");
    (asm)["System.Threading.WaitHandle"] = CILJS.declare_type(
        "WaitHandle",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Threading.WaitHandle",false,false,false,false,false,[],[
                    [asm0, "x6000184", "WaitOne"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000043",null);
            this.GenericTypeMetadataName = "asm0.t2000043";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function WaitHandle() { c.init(); }");
    (asm)["System.Runtime.InteropServices.InAttribute"] = CILJS.declare_type(
        "InAttribute",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Runtime.InteropServices.InAttribute",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm0.t2000046",null);
            this.GenericTypeMetadataName = "asm0.t2000046";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function InAttribute() { c.init(); }");
    (asm)["System.Runtime.InteropServices.OutAttribute"] = CILJS.declare_type(
        "OutAttribute",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Runtime.InteropServices.OutAttribute",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm0.t2000047",null);
            this.GenericTypeMetadataName = "asm0.t2000047";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function OutAttribute() { c.init(); }");
    (asm)["System.Runtime.CompilerServices.ExtensionAttribute"] = CILJS.declare_type(
        "ExtensionAttribute",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Runtime.CompilerServices.ExtensionAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x600003f,
                        [
                            (64|0)
                        ],
                        {
                            'Inherited': [
                                (asm0)["System.Boolean"](),
                                true
                            ]
                        }
                    ]
                ],[],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm0.t2000048",null);
            this.GenericTypeMetadataName = "asm0.t2000048";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function ExtensionAttribute() { c.init(); }");
    (asm)["System.Runtime.CompilerServices.IndexerNameAttribute"] = CILJS.declare_type(
        "IndexerNameAttribute",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Runtime.CompilerServices.IndexerNameAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x600003f,
                        [
                            (128|0)
                        ],
                        {
                            'Inherited': [
                                (asm0)["System.Boolean"](),
                                true
                            ]
                        }
                    ]
                ],[],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm0.t2000049",null);
            this.GenericTypeMetadataName = "asm0.t2000049";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function IndexerNameAttribute() { c.init(); }");
    (asm)["System.Runtime.CompilerServices.InternalsVisibleToAttribute"] = CILJS.declare_type(
        "InternalsVisibleToAttribute",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Runtime.CompilerServices.InternalsVisibleToAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x600003f,
                        [
                            (1|0)
                        ],
                        {
                            'Inherited': [
                                (asm0)["System.Boolean"](),
                                false
                            ],
                            'AllowMultiple': [
                                (asm0)["System.Boolean"](),
                                true
                            ]
                        }
                    ]
                ],[
                    [asm0, "x600018d", "get_AssemblyName"],
                    [asm0, "x600018e", "get_AllInternalsVisible"],
                    [asm0, "x600018f", "set_AllInternalsVisible"]
                ],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm0.t200004a",null);
            this.GenericTypeMetadataName = "asm0.t200004a";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function InternalsVisibleToAttribute() { c.init();this.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName = null;this.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = 0 }");
    (asm)["System.Runtime.CompilerServices.MethodCodeType"] = CILJS.declare_type(
        "MethodCodeType",
        [],
        function ()
        {
            return (asm0)["System.Enum"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Runtime.CompilerServices.MethodCodeType",true,false,false,false,false,[],[],(asm0)["System.Enum"](),CILJS.is_inst_value_type(this),Array,"asm0.t200004b",new ((asm0)["System.Runtime.CompilerServices.MethodCodeType"]())());
            this.IL = new ((asm0)["System.Runtime.CompilerServices.MethodCodeType"]())();
            this.Native = new ((asm0)["System.Runtime.CompilerServices.MethodCodeType"]())();
            this.OPTIL = new ((asm0)["System.Runtime.CompilerServices.MethodCodeType"]())();
            this.Runtime = new ((asm0)["System.Runtime.CompilerServices.MethodCodeType"]())();
            this.GenericTypeMetadataName = "asm0.t200004b";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function MethodCodeType() { c.init();this.value__ = 0 }");
    (asm)["System.Runtime.CompilerServices.MethodImplAttribute"] = CILJS.declare_type(
        "MethodImplAttribute",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Runtime.CompilerServices.MethodImplAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x600003f,
                        [
                            (96|0)
                        ],
                        {
                            'Inherited': [
                                (asm0)["System.Boolean"](),
                                false
                            ]
                        }
                    ]
                ],[
                    [asm0, "x6000193", "get_Value"]
                ],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm0.t200004c",null);
            this.GenericTypeMetadataName = "asm0.t200004c";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function MethodImplAttribute() { c.init();this.System_Runtime_CompilerServicesMethodImplAttribute_val = new ((asm0)[\"System.Runtime.CompilerServices.MethodImplOptions\"]())();this.MethodCodeType = new ((asm0)[\"System.Runtime.CompilerServices.MethodCodeType\"]())() }");
    (asm)["System.Runtime.CompilerServices.MethodImplOptions"] = CILJS.declare_type(
        "MethodImplOptions",
        [],
        function ()
        {
            return (asm0)["System.Enum"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Runtime.CompilerServices.MethodImplOptions",true,false,false,false,false,[
                    [
                        (asm0)["System.FlagsAttribute"](),
                        asm0.x6000081
                    ]
                ],[],(asm0)["System.Enum"](),CILJS.is_inst_value_type(this),Array,"asm0.t200004d",new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())());
            this.Unmanaged = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.ForwardRef = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.InternalCall = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.Synchronized = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.NoInlining = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.PreserveSig = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.NoOptimization = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.GenericTypeMetadataName = "asm0.t200004d";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function MethodImplOptions() { c.init();this.value__ = 0 }");
    (asm)["System.Runtime.CompilerServices.RuntimeHelpers"] = CILJS.declare_type(
        "RuntimeHelpers",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Runtime.CompilerServices.RuntimeHelpers",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t200004e",null);
            this.GenericTypeMetadataName = "asm0.t200004e";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function RuntimeHelpers() { c.init(); }");
    (asm)["System.Reflection.Assembly"] = CILJS.declare_type(
        "Assembly",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Reflection.Assembly",false,false,false,false,false,[],[
                    [asm0, "x600019a", "get_FullName"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t200004f",null);
            this.GenericTypeMetadataName = "asm0.t200004f";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Assembly() { c.init();this.System_ReflectionAssemblyrawAsm = null }");
    (asm)["System.Reflection.DefaultMemberAttribute"] = CILJS.declare_type(
        "DefaultMemberAttribute",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Reflection.DefaultMemberAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x600003f,
                        [
                            (1036|0)
                        ]
                    ]
                ],[
                    [asm0, "x600019c", "get_MemberName"]
                ],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm0.t2000050",null);
            this.GenericTypeMetadataName = "asm0.t2000050";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function DefaultMemberAttribute() { c.init();this.System_ReflectionDefaultMemberAttributemember_name = null }");
    (asm)["System.Reflection.ICustomAttributeProvider"] = CILJS.declare_type(
        "ICustomAttributeProvider",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Reflection.ICustomAttributeProvider",false,false,true,false,false,[],[
                    [asm0, "x600019d", "GetCustomAttributes"],
                    [asm0, "x600019e", "GetCustomAttributes"],
                    [asm0, "x600019f", "IsDefined"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t2000051",null);
            this.GenericTypeMetadataName = "asm0.t2000051";
            CILJS.declare_virtual(this,"asm0.x600019d","asm0.x600019d");
            CILJS.declare_virtual(this,"asm0.x600019e","asm0.x600019e");
            CILJS.declare_virtual(this,"asm0.x600019f","asm0.x600019f");
        },
        "function ICustomAttributeProvider() { c.init(); }");
    (asm)["System.Reflection.MemberInfo"] = CILJS.declare_type(
        "MemberInfo",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Reflection.MemberInfo",false,false,false,false,false,[],[
                    [asm0, "x60001a0", "GetCustomAttributes"],
                    [asm0, "x60001a1", "GetCustomAttributes"],
                    [asm0, "x60001a2", "IsDefined"],
                    [asm0, "x60001a4", "get_Name"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000052",null);
            this.GenericTypeMetadataName = "asm0.t2000052";
            CILJS.declare_virtual(this,"asm0.x60001a0","asm0.x60001a0");
            CILJS.declare_virtual(this,"asm0.x60001a1","asm0.x60001a1");
            CILJS.declare_virtual(this,"asm0.x60001a2","asm0.x60001a2");
            CILJS.declare_virtual(this,"asm0.x60001a4","asm0.x60001a4");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Reflection.ICustomAttributeProvider"]()],
                {
                    'x600019d': function (){ return asm0.x60001a0;},
                    'x600019e': function (){ return asm0.x60001a1;},
                    'x600019f': function (){ return asm0.x60001a2;}
                });
        },
        "function MemberInfo() { c.init(); }");
    (asm)["System.Reflection.MethodInfo"] = CILJS.declare_type(
        "MethodInfo",
        [],
        function ()
        {
            return (asm0)["System.Reflection.MemberInfo"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Reflection.MethodInfo",false,false,false,false,false,[],[
                    [asm0, "x60001a8", "GetCustomAttributes"],
                    [asm0, "x60001a9", "GetCustomAttributes"],
                    [asm0, "x60001aa", "IsDefined"],
                    [asm0, "x60001ab", "get_Name"],
                    [asm0, "x60001ac", "Invoke"]
                ],(asm0)["System.Reflection.MemberInfo"](),CILJS.is_inst_default(this),Array,"asm0.t2000053",null);
            this.GenericTypeMetadataName = "asm0.t2000053";
            CILJS.declare_virtual(this,"asm0.x60001a0","asm0.x60001a8");
            CILJS.declare_virtual(this,"asm0.x60001a1","asm0.x60001a9");
            CILJS.declare_virtual(this,"asm0.x60001a2","asm0.x60001aa");
            CILJS.declare_virtual(this,"asm0.x60001a4","asm0.x60001ab");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Reflection.ICustomAttributeProvider"]()],
                {
                    'x600019d': function (){ return asm0.x60001a8;},
                    'x600019e': function (){ return asm0.x60001a9;},
                    'x600019f': function (){ return asm0.x60001aa;}
                });
        },
        "function MethodInfo() { c.init();this.System_ReflectionMethodInfomtd = null }");
    (asm)["System.Diagnostics.Debugger"] = CILJS.declare_type(
        "Debugger",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Diagnostics.Debugger",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000054",null);
            this.GenericTypeMetadataName = "asm0.t2000054";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Debugger() { c.init(); }");
    (asm)["System.Diagnostics.DebuggerStepThroughAttribute"] = CILJS.declare_type(
        "DebuggerStepThroughAttribute",
        [],
        function ()
        {
            return (asm0)["System.Attribute"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Diagnostics.DebuggerStepThroughAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x600003f,
                        [
                            (108|0)
                        ],
                        {
                            'Inherited': [
                                (asm0)["System.Boolean"](),
                                false
                            ]
                        }
                    ]
                ],[],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm0.t2000055",null);
            this.GenericTypeMetadataName = "asm0.t2000055";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function DebuggerStepThroughAttribute() { c.init(); }");
    (asm)["System.Collections.IComparer"] = CILJS.declare_type(
        "IComparer",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Collections.IComparer",false,false,true,false,false,[],[
                    [asm0, "x60001b1", "Compare"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t2000056",null);
            this.GenericTypeMetadataName = "asm0.t2000056";
            CILJS.declare_virtual(this,"asm0.x60001b1","asm0.x60001b1");
        },
        "function IComparer() { c.init(); }");
    (asm)["System.Collections.IEnumerable"] = CILJS.declare_type(
        "IEnumerable",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Collections.IEnumerable",false,false,true,false,false,[],[
                    [asm0, "x60001b2", "GetEnumerator"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t2000057",null);
            this.GenericTypeMetadataName = "asm0.t2000057";
            CILJS.declare_virtual(this,"asm0.x60001b2","asm0.x60001b2");
        },
        "function IEnumerable() { c.init(); }");
    (asm)["System.Collections.IEnumerator"] = CILJS.declare_type(
        "IEnumerator",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Collections.IEnumerator",false,false,true,false,false,[],[
                    [asm0, "x60001b3", "get_Current"],
                    [asm0, "x60001b4", "MoveNext"],
                    [asm0, "x60001b5", "Reset"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t2000058",null);
            this.GenericTypeMetadataName = "asm0.t2000058";
            CILJS.declare_virtual(this,"asm0.x60001b3","asm0.x60001b3");
            CILJS.declare_virtual(this,"asm0.x60001b4","asm0.x60001b4");
            CILJS.declare_virtual(this,"asm0.x60001b5","asm0.x60001b5");
        },
        "function IEnumerator() { c.init(); }");
    (asm)["System.Collections.IEqualityComparer"] = CILJS.declare_type(
        "IEqualityComparer",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Collections.IEqualityComparer",false,false,true,false,false,[],[
                    [asm0, "x60001b6", "Equals"],
                    [asm0, "x60001b7", "GetHashCode"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t2000059",null);
            this.GenericTypeMetadataName = "asm0.t2000059";
            CILJS.declare_virtual(this,"asm0.x60001b6","asm0.x60001b6");
            CILJS.declare_virtual(this,"asm0.x60001b7","asm0.x60001b7");
        },
        "function IEqualityComparer() { c.init(); }");
    (asm)["System.Collections.Generic.ICollection`1"] = CILJS.declare_type(
        "ICollection_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Collections.Generic.ICollection`1",false,false,true,true,false,[],[
                    [asm0, "x60001b8", "get_Count"],
                    [asm0, "x60001b9", "get_IsReadOnly"],
                    [asm0, "x60001ba", "Add"],
                    [asm0, "x60001bb", "Clear"],
                    [asm0, "x60001bc", "Contains"],
                    [asm0, "x60001bd", "CopyTo"],
                    [asm0, "x60001be", "Remove"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t200005a",null);
            (this.GenericArguments)["asm0.t200005a"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200005a<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60001b8","asm0.x60001b8");
            CILJS.declare_virtual(this,"asm0.x60001b9","asm0.x60001b9");
            CILJS.declare_virtual(this,"asm0.x60001ba","asm0.x60001ba");
            CILJS.declare_virtual(this,"asm0.x60001bb","asm0.x60001bb");
            CILJS.declare_virtual(this,"asm0.x60001bc","asm0.x60001bc");
            CILJS.declare_virtual(this,"asm0.x60001bd","asm0.x60001bd");
            CILJS.declare_virtual(this,"asm0.x60001be","asm0.x60001be");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerable`1"](T), T],
                null);
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                null);
        },
        "function ICollection_1() { c.init(); }");
    (asm)["System.Collections.Generic.IComparer`1"] = CILJS.declare_type(
        "IComparer_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Collections.Generic.IComparer`1",false,false,true,true,false,[],[
                    [asm0, "x60001bf", "Compare"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t200005b",null);
            (this.GenericArguments)["asm0.t200005b"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200005b<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60001bf","asm0.x60001bf");
        },
        "function IComparer_1() { c.init(); }");
    (asm)["System.Collections.Generic.IEnumerable`1"] = CILJS.declare_type(
        "IEnumerable_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Collections.Generic.IEnumerable`1",false,false,true,true,false,[],[
                    [asm0, "x60001c0", "GetEnumerator"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t200005c",null);
            (this.GenericArguments)["asm0.t200005c"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200005c<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60001c0","asm0.x60001c0");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                null);
        },
        "function IEnumerable_1() { c.init(); }");
    (asm)["System.Collections.Generic.IEnumerator`1"] = CILJS.declare_type(
        "IEnumerator_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Collections.Generic.IEnumerator`1",false,false,true,true,false,[],[
                    [asm0, "x60001c1", "get_Current"]
                ],null,CILJS.is_inst_interface(this),Array,"asm0.t200005d",null);
            (this.GenericArguments)["asm0.t200005d"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200005d<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60001c1","asm0.x60001c1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                null);
            CILJS.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                null);
        },
        "function IEnumerator_1() { c.init(); }");
    (asm)["CilJs.Runtime.UnboundGenericParameter"] = CILJS.declare_type(
        "UnboundGenericParameter",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"CilJs.Runtime.UnboundGenericParameter",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t200005f",null);
            this.GenericTypeMetadataName = "asm0.t200005f";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function UnboundGenericParameter() { c.init(); }");
    (asm)["CilJs.Runtime.InteropServices.Marshal"] = CILJS.declare_type(
        "Marshal",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"CilJs.Runtime.InteropServices.Marshal",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000066",null);
            this.GenericTypeMetadataName = "asm0.t2000066";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function Marshal() { c.init(); }");
    (asm)["CilJs.JavaScript.Array"] = CILJS.declare_type(
        "Array",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"CilJs.JavaScript.Array",false,false,false,false,false,[
                    [
                        (asm0)["System.Reflection.DefaultMemberAttribute"](),
                        asm0.x600019b,
                        [
                            CILJS.new_string("Item")
                        ]
                    ]
                ],[
                    [asm0, "x60001d8", "get_Length", []],
                    [asm0, "x60001d9", "get_Item", []],
                    [asm0, "x60001da", "set_Item", []],
                    [asm0, "x60001db", "GetEnumerator"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000067",null);
            this.GenericTypeMetadataName = "asm0.t2000067";
            CILJS.declare_virtual(this,"asm0.x60001db","asm0.x60001db");
            CILJS.declare_virtual(this,"asm0.x60001dc","asm0.x60001dc");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerable`1"]((asm0)["System.Object"]()), (asm0)["System.Object"]()],
                {
                    'x60001c0': function (){ return asm0.x60001db;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                {
                    'x60001b2': function (){ return asm0.x60001dc;}
                });
        },
        "function Array() { c.init(); }");
    (asm)["CilJs.JavaScript.Boolean"] = CILJS.declare_type(
        "$$Boolean",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"CilJs.JavaScript.Boolean",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm0.t2000068",new ((asm0)["CilJs.JavaScript.Boolean"]())());
            this.GenericTypeMetadataName = "asm0.t2000068";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function $$Boolean() { c.init(); }");
    (asm)["CilJs.JavaScript.Number"] = CILJS.declare_type(
        "$$Number",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"CilJs.JavaScript.Number",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm0.t2000069",new ((asm0)["CilJs.JavaScript.Number"]())());
            this.GenericTypeMetadataName = "asm0.t2000069";
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000176");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function $$Number() { c.init(); }");
    (asm)["CilJs.JavaScript.Object"] = CILJS.declare_type(
        "$$Object",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"CilJs.JavaScript.Object",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t200006a",null);
            this.GenericTypeMetadataName = "asm0.t200006a";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function $$Object() { c.init(); }");
    (asm)["CilJs.JavaScript.String"] = CILJS.declare_type(
        "$$String",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"CilJs.JavaScript.String",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t200006b",null);
            this.Emtpy = null;
            this.GenericTypeMetadataName = "asm0.t200006b";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function $$String() { c.init(); }");
    (asm)["System.Array+<>c__DisplayClass23_0`1"] = CILJS.declare_type(
        "__c__DisplayClass23_0_1",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Array+<>c__DisplayClass23_0`1",false,false,false,true,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t200006c",null);
            (this.GenericArguments)["asm0.t200006c"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200006c<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function __c__DisplayClass23_0_1() { c.init();this.comparer = null }");
    (asm)["System.Array`1+ArrayEnumerator"] = CILJS.declare_type(
        "ArrayEnumerator",
        ["T"],
        function (T)
        {
            return (asm0)["System.Object"]();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Array`1+ArrayEnumerator",false,false,false,true,false,[],[
                    [asm0, "x60001f3", "get_Current"],
                    [asm0, "x60001f4", "MoveNext"],
                    [asm0, "x60001f6", "Reset"],
                    [asm0, "x60001f7", "Dispose"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t200006d",null);
            (this.GenericArguments)["asm0.t200006d"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200006d<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x60001f3","asm0.x60001f3");
            CILJS.declare_virtual(this,"asm0.x60001f4","asm0.x60001f4");
            CILJS.declare_virtual(this,"asm0.x60001f5","asm0.x60001f5");
            CILJS.declare_virtual(this,"asm0.x60001f6","asm0.x60001f6");
            CILJS.declare_virtual(this,"asm0.x60001f7","asm0.x60001f7");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerator`1"](T), T],
                {
                    'x60001c1': function (){ return asm0.x60001f3;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                {
                    'x60001b3': function (){ return asm0.x60001f5;},
                    'x60001b4': function (){ return asm0.x60001f4;},
                    'x60001b5': function (){ return asm0.x60001f6;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x6000095': function (){ return asm0.x60001f7;}
                });
        },
        "function ArrayEnumerator() { c.init();this.index = 0;this.length = 0;this.source = null }");
    (asm)["System.RuntimeType+constructor"] = CILJS.declare_type(
        "constructor",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.RuntimeType+constructor",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t200006e",null);
            this.GenericTypeMetadataName = "asm0.t200006e";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function constructor() { c.init();this.FullName = null;this.BaseType = null;this.Assembly = null;this.CustomAttributes = null;this.Methods = null;this.TypeInstance = null;this.Hash = 0;this.IsGenericTypeDefinition = new ((asm0)[\"CilJs.JavaScript.Boolean\"]())();this.IsInterface = new ((asm0)[\"CilJs.JavaScript.Boolean\"]())();this.IsValueType = new ((asm0)[\"CilJs.JavaScript.Boolean\"]())();this.IsPrimitive = new ((asm0)[\"CilJs.JavaScript.Boolean\"]())();this.GenericArguments = null;this.Interfaces = null;this.MetadataName = null }");
    (asm)["System.Reflection.Assembly+jsAsm"] = CILJS.declare_type(
        "jsAsm",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"System.Reflection.Assembly+jsAsm",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t200006f",null);
            this.GenericTypeMetadataName = "asm0.t200006f";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        },
        "function jsAsm() { c.init();this.FullName = null;this.ManagedInstance = null }");
    (asm)["CilJs.JavaScript.Array+<GetEnumerator>d__7"] = CILJS.declare_type(
        "_GetEnumerator_d__7",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"CilJs.JavaScript.Array+<GetEnumerator>d__7",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm0.t2000070",null);
            this.GenericTypeMetadataName = "asm0.t2000070";
            CILJS.declare_virtual(this,"asm0.x60001fb","asm0.x60001fb");
            CILJS.declare_virtual(this,"asm0.x60001fc","asm0.x60001fc");
            CILJS.declare_virtual(this,"asm0.x60001fd","asm0.x60001fd");
            CILJS.declare_virtual(this,"asm0.x60001fe","asm0.x60001fe");
            CILJS.declare_virtual(this,"asm0.x60001ff","asm0.x60001ff");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerator`1"]((asm0)["System.Object"]()), (asm0)["System.Object"]()],
                {
                    'x60001c1': function (){ return asm0.x60001fd;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                {
                    'x60001b3': function (){ return asm0.x60001ff;},
                    'x60001b4': function (){ return asm0.x60001fc;},
                    'x60001b5': function (){ return asm0.x60001fe;}
                });
            CILJS.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x6000095': function (){ return asm0.x60001fb;}
                });
        },
        "function _GetEnumerator_d__7() { c.init();(this)[\"CilJs_JavaScript_GetEnumerator_d__7<>1__state\"] = 0;(this)[\"CilJs_JavaScript_GetEnumerator_d__7<>2__current\"] = null;(this)[\"<>4__this\"] = null;(this)[\"CilJs_JavaScript_GetEnumerator_d__7<a>5__1\"] = null;(this)[\"CilJs_JavaScript_GetEnumerator_d__7<i>5__2\"] = 0 }");
})(asm0 || (asm0 = {}));
