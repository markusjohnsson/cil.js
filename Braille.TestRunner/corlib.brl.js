
var BLR;

(function (blr) {
    blr.nop = function nop() { };

    blr.declare_type = function declare_type(name, genericArgs, baseType, init) {
        var isGeneric = genericArgs && genericArgs.length > 0;
        var ct = isGeneric ? {} : null;
        var gA = isGeneric ? genericArgs.join(",") : "";
        var gAmD = isGeneric ? genericArgs.map(function (a) { return a + ".GenericTypeMetadataName"; } ).join(",") : "";
        var s = "" +
            "function t(" + gA + ") {\n" +
            "    var c = " + (isGeneric ? "blr.tree_get([" + gAmD + "], ct)" : "ct") + ";\n" +
            "    if (c) return c;\n" +
            "    \n" +
            "    eval('function '+name+'() { c.init();this.constructor = c; }');\n" +
            "    c = eval(name);\n" +
            "    " + (isGeneric ? "blr.tree_set([" + gAmD + "], ct, c);" : "ct = c;") + "\n" +
            "    \n" +
            "    c.init = init.bind(c" + (isGeneric ? (", " + gA) : "") + ");\n" +
            "    if (baseType)\n" +
            "        c.prototype = baseType(" + gA + ");\n" +
            "    return c;\n" +
            "}";
        eval(s);
        return t;
    }

    blr.init_base_types = function init_base_types()
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

    blr.init_type = function init_type(type, assembly, fullname, isValueType, isPrimitive, isInterface, isGenericTypeDefinition, isNullable, customAttributes, methods, baseType, isInst, arrayType, metadataName) {
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
    }

    blr.implement_interface = function implement_interface(type, iface, implementation) {
        type.Interfaces.push(iface[0]);
        if (implementation !== null)
            blr.tree_set(iface, type.prototype.ifacemap, implementation);
    }

    blr.declare_virtual = function declare_virtual(type, slot, target) {
        type.prototype.vtable[slot] = new Function("return " + target + ";");
    }

    blr.is_inst_interface = function is_inst_interface(interfaceType) {
        return function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(interfaceType) !== -1 ? t : null; } catch (e) { return null; } };
    }

    blr.is_inst_primitive = function is_inst_primitive(primitiveType) {
        return function (t) { try { return t.type === primitiveType ? t : null; } catch (e) { return null; } }
    }

    blr.is_inst_array = function is_inst_array(T) {
        return function (t) { return t instanceof asm0['System.Array']() && (t.etype === T || T === asm0['System.Object']() || t.etype.prototype instanceof T) ? t : null; };
    }

    blr.is_inst_default = function is_inst_default(type) {
        return function (t) { return t instanceof type ? t : null; };
    }

    blr.is_inst_value_type = function is_inst_value_type(type) {
        return function (t) { return t.boxed instanceof type ? t : t instanceof type ? t : null; };
    }

    blr.is_inst_delegate = function is_inst_delegate(delegateType) {
        return function (t) { return (t && typeof t._methodPtr === 'function') ? t : null; };
    }

    blr.clone_value = function clone_value(v) {
        if (v === null) return v;
        if (typeof v === "number") return v;
        if (typeof v === "function") return v;
        if (!v.constructor.IsValueType) return v;
        var result = new v.constructor();
        for (var p in v) {
            if (v.hasOwnProperty(p))
                result[p] = blr.clone_value(v[p]);
        }
        return result;
    }

    blr.value_equals = function value_equals(a, b) {

        if (typeof a !== typeof b)
            return 0;

        if (a === null)
            return b === null ? 1 : 0;

        if (typeof a === "object" && typeof a.constructor !== "undefined" && a.constructor.IsValueType) {

            for (var p in a) {
                var av = a[p];
                var bv = b[p];

                if (!blr.value_equals(av, bv))
                    return 0;
            }

            return 1;
        }
        else {
            return a === b ? 1 : 0;
        }
    }

    blr.unsigned_value = function unsigned_value(a) {
        if (a < 0)
            return 0xffffffff + a + 1;
        else
            return a;
    }

    blr.box = function box(v, type) {
        if (v === null)
            return v;

        if (type.IsNullable) {
            if (v.has_value)
                return blr.box(v.value, type.GenericArguments[type.MetadataName][0]);
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

    blr.unbox = function unbox(o, type) {
        if (o === null) {
            var t = asm0['System.InvalidCastException']();
            var e = new t();
            e.stack = new Error().stack;
            throw e;
        }
        return blr.cast_class(o, type).boxed;
    }

    blr.unbox_any = function unbox_any(o, type) {
        if (type.IsNullable) {
            var result = new type();
            if (o !== null) {
                result.value = blr.cast_class(o.boxed, type.GenericArguments[type.MetadataName][0]);
                result.has_value = true;
            }
            return result;
        }

        if (type.IsValueType) {

            if (o === null) {
                var t = asm0['System.InvalidCastException']();
                throw new t();
            }

            return blr.cast_class(o, type).boxed;
        }
        else
            return blr.cast_class(o, type);
    }

    blr.stelem_ref = function stelem_ref(array, index, element) {
        var castedElement = blr.cast_class(element, array.etype);
        array.jsarr[index] = castedElement;
    }

    blr.ldelem_ref = function ldelem_ref(array, index) {
        return blr.box(array.jsarr[index], array.etype);
    }

    blr.convert_box_to_pointer_as_needed = function convert_box_to_pointer_as_needed(o) {
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

    blr.dereference_pointer_as_needed = function(p) {
        if (typeof p.r === "function" &&
            typeof p.w === "function") {
            var v = p.r();
            if (typeof v !== 'number' && !v.constructor.IsValueType) {
                return v;
            }
        }

        return p;
    }

    blr.tree_get = function tree_get(a, s) {
        var c = s;
        for (var i = 0; c && i < a.length; i++)
            c = c[a[i]];
        return c;
    }

    blr.tree_set = function tree_set(a, s, v) {
        if (a.length === 1) {
            s[a[0]] = v;
        }
        else {
            var c = s[a[0]];
            if (!c) s[a[0]] = c = {};
            blr.tree_set(a.slice(1), c, v);
        }
    }

    blr.new_string = function new_string(jsstr) {
        var r = new (asm0['System.String']())();
        r.jsstr = jsstr;
        return r;
    }

    blr.new_handle = function new_handle(type, value) {
        var r = new type();
        r.value = value;
        return r;
    }

    blr.new_array = function new_array(type, length) {
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

    blr.newobj = function newobj(type, ctor, args) {
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

    blr.cast_class = function cast_class(obj, type) {
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

        blr.throw_invalid_cast();
    }

    blr.throw_invalid_cast = function throw_invalid_cast() {
        var t = asm0['System.InvalidCastException']();
        var e = new t();
        e.stack = new Error().stack;
        throw e;
    }

    blr.conv_u8 = function conv_u8(n) {
        if (n < 0) {
            /* signed 32 bit int that need to be converted to 32 bit unsigned before 64 bit conversion */
            n = 0x100000000 + n;
        }

        return blr.make_uint64(n);
    }

    blr.conv_i8 = function conv_i8(n) {
        if (n < 0) {
            /* signed 32 bit int */
            n = 0x100000000 + n;

            /* here, n should be positive and less than 0xffffffff, otherwise, input would not have fit in 32 bit */
            return new Uint32Array([n | 0, 0xffffffff]);
        }

        return blr.make_uint64(n);
    }

    blr.make_uint64 = function make_uint64(n) {
        var bits32 = 0xffffffff;

        var floorN = Math.floor(n);
        var low = floorN | 0;
        var high = (floorN / 0x100000000) | 0;

        low = low & bits32;
        high = high & bits32;

        return new Uint32Array([low, high]);
    }

    blr.to_number_signed = function to_number_signed(n) {
        if (asm0.Int64_isNegative(n)) {
            n = asm0.Int64_UnaryNegation(n);
            return -blr.to_number_unsigned(n);
        }

        return blr.to_number_unsigned(n);
    }

    blr.to_number_unsigned = function to_number_unsigned(n) {
        return n[1] * 4294967296 + n[0];
    }

    blr.array_set_value = function array_set_value(dest, value, pos) {

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
            dest.jsarr[pos] = blr.cast_class(value, etype)
        }
        else {

            if (etype.IsInst(value)) {
                dest.jsarr[pos] = value.boxed;
            }
            else {
                if (!etype.IsPrimitive || !vtype.IsPrimitive) {
                    blr.throw_invalid_cast();
                }

                dest.jsarr[pos] = value;
            }
        }
    }

    blr.delegate_invoke = function (self) {
        var m = self._methodPtr;
        var t = self._target;
        if (t != null)
            arguments[0] = t;
        else
            arguments = Array.prototype.slice.call(arguments, 1);
        return m.apply(null, arguments);
    }

    blr.delegate_begin_invoke = function (self /* , [delegate arguments], callback, state */) {
        var asyncResult = asm0.CreateAsyncResult(self);

        asyncResult.result = blr.delegate_invoke.apply(null, arguments);
        asyncResult.asyncState = arguments[arguments.length - 1];

        var asyncCallback = arguments[arguments.length - 2];
        if (asyncCallback != null)
        {
            blr.delegate_invoke(asyncCallback, asyncResult);
        }
        
        return asyncResult;
    }

    blr.delegate_end_invoke = function (self, asyncResult) {
        return asyncResult.result;
    }

    blr.delegate_ctor = function (self, target, methodPtr) {
        self._methodPtr = methodPtr;
        self._target = target;
    }
})(BLR || (BLR = {}));var asm0; (function (asm)
{
    asm.FullName = "mscorlib, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Boolean Object.ReferenceEqualsImpl(Object,Object)*/
    asm.x6000001 = function (a, b) { return Number(a === b); };;
    /* static System.Int32 Object.GetHashCode(Object)*/
    asm.x6000002 = function (o) { return o.hash || (o.hash = asm0.next_hash++); };;
    /* System.Object Object.toString()*/
    asm.x6000004 = function () { return asm0.ToJavaScriptString(this); };;
    /* System.String Object.ToString()*/
    asm.x6000005 = function ToString(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldstr System.Object*/
        /* IL_06: stloc.0 */
        loc0 = BLR.new_string("System.Object");
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* static System.Object Object.ToJavaScriptString(Object)*/
    asm.x6000006 = function ToJavaScriptString(arg0)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc2;
        var loc1;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.2 */
                loc2 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.2 */
                /* IL_0A: brtrue.s IL_19*/
                
                if (loc2){
                    __pos__ = 0x19;
                    continue;
                }
                /* IL_0C: ldstr */
                /* IL_11: ldfld String jsstr*/
                /* IL_16: stloc.1 */
                loc1 = BLR.new_string("").jsstr;
                /* IL_17: br.s IL_39*/
                __pos__ = 0x39;
                continue;
                case 0x19:
                /* IL_19: nop */
                
                /* IL_1A: ldarg.0 */
                /* IL_1B: callvirt String ToString()*/
                /* IL_20: stloc.0 */
                loc0 = ((arg0.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(arg0));
                /* IL_21: ldloc.0 */
                /* IL_22: ldnull */
                /* IL_24: ceq */
                /* IL_25: ldc.i4.0 */
                /* IL_27: ceq */
                /* IL_28: stloc.2 */
                loc2 = ((((loc0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_29: ldloc.2 */
                /* IL_2A: brtrue.s IL_30*/
                
                if (loc2){
                    __pos__ = 0x30;
                    continue;
                }
                /* IL_2C: ldnull */
                /* IL_2D: stloc.1 */
                loc1 = null;
                /* IL_2E: br.s IL_39*/
                __pos__ = 0x39;
                continue;
                case 0x30:
                /* IL_30: ldloc.0 */
                /* IL_31: ldfld String jsstr*/
                /* IL_36: stloc.1 */
                loc1 = loc0.jsstr;
                case 0x39:
                /* IL_39: ldloc.1 */
                /* IL_3A: ret */
                return loc1;
            }
        }
    };;
    asm.ToJavaScriptString = asm.x6000006;
    /* static System.Boolean Object.ReferenceEquals(Object,Object)*/
    asm.x6000007 = function ReferenceEquals(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean ReferenceEqualsImpl(System.Object, System.Object)*/
        /* IL_08: stloc.0 */
        loc0 = asm0.x6000001(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* System.Boolean Object.Equals(Object)*/
    asm.x6000008 = function Equals(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_08: stloc.0 */
        loc0 = asm0.x6000007(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* System.Int32 Object.GetHashCode()*/
    asm.x6000009 = function GetHashCode(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetHashCode(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x6000002(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* System.Type Object.GetType()*/
    asm.x600000a = function GetType(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Type GetType(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x60000f8(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static System.Boolean Object.Equals(Object,Object)*/
    asm.x600000b = function Equals(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldarg.1 */
                /* IL_03: call Boolean ReferenceEquals(System.Object, System.Object)*/
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.1 */
                loc1 = ((asm0.x6000007(arg0,arg1) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.1 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc1){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.1 */
                /* IL_10: stloc.0 */
                loc0 = (1|0);
                /* IL_11: br.s IL_2F*/
                __pos__ = 0x2F;
                continue;
                case 0x13:
                /* IL_13: ldarg.0 */
                /* IL_14: ldnull */
                /* IL_15: call Boolean ReferenceEquals(System.Object, System.Object)*/
                /* IL_1A: ldc.i4.0 */
                /* IL_1C: ceq */
                /* IL_1D: stloc.1 */
                loc1 = ((asm0.x6000007(arg0,null) === (0|0)) ? (1) : (0));
                /* IL_1E: ldloc.1 */
                /* IL_1F: brtrue.s IL_25*/
                
                if (loc1){
                    __pos__ = 0x25;
                    continue;
                }
                /* IL_21: ldc.i4.0 */
                /* IL_22: stloc.0 */
                loc0 = (0|0);
                /* IL_23: br.s IL_2F*/
                __pos__ = 0x2F;
                continue;
                case 0x25:
                /* IL_25: ldarg.0 */
                /* IL_26: ldarg.1 */
                /* IL_27: callvirt Boolean Equals(System.Object)*/
                /* IL_2C: stloc.0 */
                loc0 = ((arg0.vtable)["asm0.x6000008"]())(BLR.convert_box_to_pointer_as_needed(arg0),arg1);
                case 0x2F:
                /* IL_2F: ldloc.0 */
                /* IL_30: ret */
                return loc0;
            }
        }
    };;
    /*  Object..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_02: ret */
        return ;
    };;
    /* System.Collections.Generic.IEnumerator`1[System.Object] Array.GetEnumerator()*/
    asm.x6000014_init = function ()
    {
        ((asm0)["Braille.JavaScript.Array+<GetEnumerator>d__0"]().init)();
        asm.x6000014 = asm.x6000014_;
    };;
    asm.x6000014 = function (arg0)
    {
        asm.x6000014_init.apply(this,arguments);
        return asm.x6000014_.apply(this,arguments);
    };;
    asm.x6000014_ = function GetEnumerator(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["Braille.JavaScript.Array+<GetEnumerator>d__0"]();
        __pos__ = 0x0;
        /* IL_00: ldc.i4.0 */
        /* IL_01: newobj Void .ctor(System.Int32)*/
        /* IL_06: stloc.0 */
        loc0 = BLR.newobj(t0,asm0.x60001fb,[null, (0|0)]);
        /* IL_07: ldloc.0 */
        /* IL_08: ldarg.0 */
        /* IL_09: stfld Array <>4__this*/
        (loc0)["<>4__this"] = arg0;
        /* IL_0E: ldloc.0 */
        /* IL_0F: stloc.1 */
        loc1 = loc0;
        /* IL_12: ldloc.1 */
        /* IL_13: ret */
        return loc1;
    };
    /* System.Collections.IEnumerator Array.System.Collections.IEnumerable.GetEnumerator()*/
    asm.x6000015 = function System_Collections_IEnumerable_GetEnumerator(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call IEnumerator`1 GetEnumerator()*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x6000014(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /*  Array..ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* System.Boolean ValueType.Equals(Object)*/
    asm.x6000016 = function Equals(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean ValueTypeEquals(System.Object, System.Object)*/
        /* IL_08: stloc.0 */
        loc0 = BLR.value_equals(arg0.r(), arg1.boxed);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /*  ValueType..ctor()*/
    asm.x6000018 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  String..ctor()*/
    asm.x600001a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* static  String..cctor()*/
    asm.x600001f_init = function ()
    {
        ((asm0)["Braille.JavaScript.String"]().init)();
        asm.x600001f = asm.x600001f_;
    };;
    asm.x600001f = function ()
    {
        asm.x600001f_init.apply(this,arguments);
        return asm.x600001f_.apply(this,arguments);
    };;
    asm.x600001f_ = function _cctor()
    {
        var t0;
        var __pos__;
        
        if ((asm0)["Braille.JavaScript.String"]().FieldsInitialized){
            return;
        }
        (asm0)["Braille.JavaScript.String"]().FieldsInitialized = true;
        t0 = (asm0)["Braille.JavaScript.String"]();
        __pos__ = 0x0;
        /* IL_00: call String GetEmpty()*/
        /* IL_05: stsfld String Emtpy*/
        (t0)["Emtpy"] = "";
        /* IL_0A: ret */
        return ;
    };
    /* static System.Object Marshal.get_Null()*/
    asm.x6000021 = function get_Null()
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: call Object null_impl()*/
        /* IL_06: stloc.0 */
        loc0 = null;
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* static System.String Locale.GetText(String)*/
    asm.x6000026 = function GetText(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: stloc.0 */
        loc0 = arg0;
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /*  UnboundGenericParameter..ctor()*/
    asm.x6000027 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Reflection.Assembly Assembly.GetInstance(jsAsm)*/
    asm.x6000034_init = function ()
    {
        ((asm0)["System.Reflection.Assembly"]().init)();
        asm.x6000034 = asm.x6000034_;
    };;
    asm.x6000034 = function (arg0)
    {
        asm.x6000034_init.apply(this,arguments);
        return asm.x6000034_.apply(this,arguments);
    };;
    asm.x6000034_ = function GetInstance(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Boolean"]();
        t1 = (asm0)["System.Reflection.Assembly"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Assembly ManagedInstance*/
                /* IL_07: call Boolean UnsafeCast[System.Boolean](System.Object)*/
                /* IL_0C: stloc.1 */
                loc1 = arg0.ManagedInstance;
                /* IL_0D: ldloc.1 */
                /* IL_0E: brtrue.s IL_1C*/
                
                if (loc1){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_10: ldarg.0 */
                /* IL_11: ldarg.0 */
                /* IL_12: newobj Void .ctor(System.Reflection.Assembly+jsAsm)*/
                /* IL_17: stfld Assembly ManagedInstance*/
                arg0.ManagedInstance = BLR.newobj(t1,asm0.x6000033,[null, arg0]);
                case 0x1C:
                /* IL_1C: ldarg.0 */
                /* IL_1D: ldfld Assembly ManagedInstance*/
                /* IL_22: stloc.0 */
                loc0 = arg0.ManagedInstance;
                /* IL_25: ldloc.0 */
                /* IL_26: ret */
                return loc0;
            }
        }
    };
    /* System.String Assembly.get_FullName()*/
    asm.x6000035 = function get_FullName(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld jsAsm rawAsm*/
        /* IL_07: ldfld Object FullName*/
        /* IL_0C: call String FromJsString(System.Object)*/
        /* IL_11: stloc.0 */
        loc0 = BLR.new_string(arg0.System_ReflectionAssemblyrawAsm.FullName);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /*  Assembly..ctor(jsAsm)*/
    asm.x6000033 = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld jsAsm rawAsm*/
        arg0.System_ReflectionAssemblyrawAsm = arg1;
        /* IL_0F: nop */
        /* IL_10: ret */
        return ;
    };;
    /*  jsAsm..ctor()*/
    asm.x6000036 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Object[] MemberInfo.GetCustomAttributesImpl(Object)*/
    asm.x600003d = 
            function (ca) {
                ca = ca || [];
                var r = BLR.new_array(asm0['System.Object'], ca.length);
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
    asm.x600003f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Reflection.MethodInfo MethodInfo.GetInstance(Array)*/
    asm.x6000041_init = function ()
    {
        ((asm0)["System.Reflection.MethodInfo"]().init)();
        asm.x6000041 = asm.x6000041_;
    };;
    asm.x6000041 = function (arg0)
    {
        asm.x6000041_init.apply(this,arguments);
        return asm.x6000041_.apply(this,arguments);
    };;
    asm.x6000041_ = function GetInstance(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Reflection.MethodInfo"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: stloc.0 */
        loc0 = BLR.newobj(t0,asm0.x6000040,[null]);
        /* IL_07: ldloc.0 */
        /* IL_08: ldarg.0 */
        /* IL_09: stfld Array mtd*/
        loc0.System_ReflectionMethodInfomtd = arg0;
        /* IL_0E: ldloc.0 */
        /* IL_0F: stloc.1 */
        loc1 = loc0;
        /* IL_12: ldloc.1 */
        /* IL_13: ret */
        return loc1;
    };
    /* System.Object[] MethodInfo.GetCustomAttributes(Boolean)*/
    asm.x6000042 = function GetCustomAttributes(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Array mtd*/
        /* IL_07: ldc.i4.3 */
        /* IL_08: callvirt Object get_Item(System.Int32)*/
        /* IL_0D: call Object[] GetCustomAttributesImpl(System.Object)*/
        /* IL_12: stloc.0 */
        loc0 = asm0.x600003d(arg0.System_ReflectionMethodInfomtd[(3|0)]);
        /* IL_15: ldloc.0 */
        /* IL_16: ret */
        return loc0;
    };;
    /* System.Object[] MethodInfo.GetCustomAttributes(Type,Boolean)*/
    asm.x6000043_init = function ()
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x6000043 = asm.x6000043_;
    };;
    asm.x6000043 = function (arg0,arg1,arg2)
    {
        asm.x6000043_init.apply(this,arguments);
        return asm.x6000043_.apply(this,arguments);
    };;
    asm.x6000043_ = function GetCustomAttributes(arg0,arg1,arg2)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.NotImplementedException"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x6000125,[null]);
    };
    /* System.Boolean MethodInfo.IsDefined(Type,Boolean)*/
    asm.x6000044_init = function ()
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x6000044 = asm.x6000044_;
    };;
    asm.x6000044 = function (arg0,arg1,arg2)
    {
        asm.x6000044_init.apply(this,arguments);
        return asm.x6000044_.apply(this,arguments);
    };;
    asm.x6000044_ = function IsDefined(arg0,arg1,arg2)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.NotImplementedException"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x6000125,[null]);
    };
    /* System.String MethodInfo.get_Name()*/
    asm.x6000045_init = function ()
    {
        ((asm0)["Braille.JavaScript.String"]().init)();
        asm.x6000045 = asm.x6000045_;
    };;
    asm.x6000045 = function (arg0)
    {
        asm.x6000045_init.apply(this,arguments);
        return asm.x6000045_.apply(this,arguments);
    };;
    asm.x6000045_ = function get_Name(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["Braille.JavaScript.String"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Array mtd*/
        /* IL_07: ldc.i4.2 */
        /* IL_08: callvirt Object get_Item(System.Int32)*/
        /* IL_0D: call String UnsafeCast[Braille.JavaScript.String](System.Object)*/
        /* IL_12: call String op_Explicit(Braille.JavaScript.String)*/
        /* IL_17: stloc.0 */
        loc0 = BLR.new_string(arg0.System_ReflectionMethodInfomtd[(2|0)]);
        /* IL_1A: ldloc.0 */
        /* IL_1B: ret */
        return loc0;
    };
    /* System.Object MethodInfo.Invoke(Object,Object[])*/
    asm.x6000046 = function Invoke(arg0,arg1,arg2)
    {
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Array mtd*/
        /* IL_07: ldc.i4.0 */
        /* IL_08: callvirt Object get_Item(System.Int32)*/
        /* IL_0D: stloc.0 */
        loc0 = arg0.System_ReflectionMethodInfomtd[(0|0)];
        /* IL_0E: ldarg.0 */
        /* IL_0F: ldfld Array mtd*/
        /* IL_14: ldc.i4.1 */
        /* IL_15: callvirt Object get_Item(System.Int32)*/
        /* IL_1A: stloc.1 */
        loc1 = arg0.System_ReflectionMethodInfomtd[(1|0)];
        /* IL_1B: ldloc.0 */
        /* IL_1C: ldloc.1 */
        /* IL_1D: ldarg.1 */
        /* IL_1E: ldarg.2 */
        /* IL_1F: call Object InvokeImpl(System.Object, System.Object, System.Object, System.Object[])*/
        /* IL_24: stloc.2 */
        loc2 = asm0.x6000047(loc0,loc1,arg1,arg2);
        /* IL_27: ldloc.2 */
        /* IL_28: ret */
        return loc2;
    };;
    /* static System.Object MethodInfo.InvokeImpl(Object,Object,Object,Object[])*/
    asm.x6000047 = 
            function InvokeImpl(assembly, method, obj, parameters) {
                var args = [obj].concat(parameters.jsarr);
                return assembly[method].apply(null, args);
            }
            ;;
    /*  MethodInfo..ctor()*/
    asm.x6000040 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x600003f(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /*  Attribute..ctor()*/
    asm.x6000048 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.String InternalsVisibleToAttribute.get_AssemblyName()*/
    asm.x600004a = function get_AssemblyName(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld String assemblyName*/
        /* IL_07: stloc.0 */
        loc0 = arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* System.Boolean InternalsVisibleToAttribute.get_AllInternalsVisible()*/
    asm.x600004b = function get_AllInternalsVisible(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Boolean allInternalsVisible*/
        /* IL_07: stloc.0 */
        loc0 = arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* System.Void InternalsVisibleToAttribute.set_AllInternalsVisible(Boolean)*/
    asm.x600004c = function set_AllInternalsVisible(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: stfld Boolean allInternalsVisible*/
        arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = arg1;
        /* IL_08: ret */
        return ;
    };;
    /*  InternalsVisibleToAttribute..ctor(String)*/
    asm.x6000049 = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.1 */
        /* IL_02: stfld Boolean allInternalsVisible*/
        arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = (1|0);
        /* IL_07: ldarg.0 */
        /* IL_08: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_0D: nop */
        /* IL_0E: nop */
        /* IL_0F: ldarg.0 */
        /* IL_10: ldarg.1 */
        /* IL_11: stfld String assemblyName*/
        arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName = arg1;
        /* IL_16: nop */
        /* IL_17: ret */
        return ;
    };;
    /* static System.Type Enum.GetUnderlyingType(Type)*/
    asm.x600004d_init = function ()
    {
        ((asm0)["System.InvalidOperationException"]().init)();
        asm.x600004d = asm.x600004d_;
    };;
    asm.x600004d = function (arg0)
    {
        asm.x600004d_init.apply(this,arguments);
        return asm.x600004d_.apply(this,arguments);
    };;
    asm.x600004d_ = function GetUnderlyingType(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.InvalidOperationException"]();
        t1 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: callvirt Boolean get_IsEnum()*/
                /* IL_07: stloc.1 */
                loc1 = asm0.x60000e3(arg0);
                /* IL_08: ldloc.1 */
                /* IL_09: brtrue.s IL_11*/
                
                if (loc1){
                    __pos__ = 0x11;
                    continue;
                }
                /* IL_0B: newobj Void .ctor()*/
                /* IL_10: throw */
                throw BLR.newobj(t0,asm0.x6000135,[null]);
                case 0x11:
                /* IL_11: ldtoken System.Int32*/
                /* IL_16: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_1B: stloc.0 */
                loc0 = asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1));
                /* IL_1E: ldloc.0 */
                /* IL_1F: ret */
                return loc0;
            }
        }
    };
    /*  Enum..ctor()*/
    asm.x600004e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000018(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* System.Runtime.CompilerServices.MethodImplOptions MethodImplAttribute.get_Value()*/
    asm.x6000052 = function get_Value(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld MethodImplOptions _val*/
        /* IL_07: stloc.0 */
        loc0 = arg0.System_Runtime_CompilerServicesMethodImplAttribute_val;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /*  MethodImplAttribute..ctor()*/
    asm.x600004f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /*  MethodImplAttribute..ctor(Int16)*/
    asm.x6000050 = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld MethodImplOptions _val*/
        arg0.System_Runtime_CompilerServicesMethodImplAttribute_val = arg1;
        /* IL_0F: nop */
        /* IL_10: ret */
        return ;
    };;
    /*  MethodImplAttribute..ctor(MethodImplOptions)*/
    asm.x6000051 = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld MethodImplOptions _val*/
        arg0.System_Runtime_CompilerServicesMethodImplAttribute_val = arg1;
        /* IL_0F: nop */
        /* IL_10: ret */
        return ;
    };;
    /* System.Void AutoResetEvent.Close()*/
    asm.x6000054 = function Close(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    /* System.Void AutoResetEvent.WaitOne()*/
    asm.x6000055 = function WaitOne(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    /* System.Void AutoResetEvent.Set()*/
    asm.x6000056 = function Set(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    /*  AutoResetEvent..ctor(Boolean)*/
    asm.x6000053 = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* static System.Void Monitor.Enter(Object)*/
    asm.x6000057 = function Enter(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    /* static System.Void Monitor.Exit(Object)*/
    asm.x6000058 = function Exit(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    /* static System.Threading.Thread Thread.get_CurrentThread()*/
    asm.x6000059_init = function ()
    {
        ((asm0)["System.Threading.Thread"]().init)();
        asm.x6000059 = asm.x6000059_;
    };;
    asm.x6000059 = function ()
    {
        asm.x6000059_init.apply(this,arguments);
        return asm.x6000059_.apply(this,arguments);
    };;
    asm.x6000059_ = function get_CurrentThread()
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Threading.Thread"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        asm0.x600005d();
        /* IL_01: ldsfld Thread currentThread*/
        /* IL_06: stloc.0 */
        loc0 = t0.currentThread;
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };
    /* System.Boolean Thread.get_IsThreadPoolThread()*/
    asm.x600005a = function get_IsThreadPoolThread(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.0 */
        /* IL_02: stloc.0 */
        loc0 = (0|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* static System.Void Thread.Sleep(Int64)*/
    asm.x600005b = function Sleep(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    /*  Thread..ctor()*/
    asm.x600005c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static  Thread..cctor()*/
    asm.x600005d_init = function ()
    {
        ((asm0)["System.Threading.Thread"]().init)();
        asm.x600005d = asm.x600005d_;
    };;
    asm.x600005d = function ()
    {
        asm.x600005d_init.apply(this,arguments);
        return asm.x600005d_.apply(this,arguments);
    };;
    asm.x600005d_ = function _cctor()
    {
        var t0;
        var __pos__;
        
        if ((asm0)["System.Threading.Thread"]().FieldsInitialized){
            return;
        }
        (asm0)["System.Threading.Thread"]().FieldsInitialized = true;
        t0 = (asm0)["System.Threading.Thread"]();
        __pos__ = 0x0;
        asm0.x600005d();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stsfld Thread currentThread*/
        (t0)["currentThread"] = BLR.newobj(t0,asm0.x600005c,[null]);
        /* IL_0A: ret */
        return ;
    };
    /* System.Boolean WaitHandle.WaitOne(Int32)*/
    asm.x600005e = function WaitOne(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.1 */
        /* IL_02: stloc.0 */
        loc0 = (1|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /*  WaitHandle..ctor()*/
    asm.x600005f = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Object Activator.CreateInstance(Type)*/
    asm.x6000060 = function CreateInstance(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Object CreateInstanceImpl(System.Type)*/
        /* IL_07: stloc.0 */
        loc0 = (new (arg0.ctor)());
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static T Activator.CreateInstance<T>()*/
    asm.x6000061 = function (T)
    {
        return function CreateInstance()
        {
            var t0;
            var __pos__;
            var loc0;
            t0 = T;
            __pos__ = 0x0;
            /* IL_00: nop */
            /* IL_01: ldtoken T*/
            /* IL_06: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
            /* IL_0B: call Object CreateInstance(System.Type)*/
            /* IL_10: unbox.any T*/
            /* IL_15: stloc.0 */
            loc0 = BLR.unbox_any(asm0.x6000060(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))),t0);
            /* IL_18: ldloc.0 */
            /* IL_19: ret */
            return loc0;
        };
    };;
    /* static System.Delegate Delegate.Combine(Delegate,Delegate)*/
    asm.x6000063 = function Combine(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Exception"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.1 */
                loc1 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.1 */
                /* IL_0A: brtrue.s IL_20*/
                
                if (loc1){
                    __pos__ = 0x20;
                    continue;
                }
                /* IL_0C: nop */
                
                /* IL_0D: ldarg.1 */
                /* IL_0E: ldnull */
                /* IL_10: ceq */
                /* IL_11: ldc.i4.0 */
                /* IL_13: ceq */
                /* IL_14: stloc.1 */
                loc1 = ((((arg1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_15: ldloc.1 */
                /* IL_16: brtrue.s IL_1C*/
                
                if (loc1){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldnull */
                /* IL_19: stloc.0 */
                loc0 = null;
                /* IL_1A: br.s IL_56*/
                __pos__ = 0x56;
                continue;
                case 0x1C:
                /* IL_1C: ldarg.1 */
                /* IL_1D: stloc.0 */
                loc0 = arg1;
                /* IL_1E: br.s IL_56*/
                __pos__ = 0x56;
                continue;
                case 0x20:
                /* IL_20: ldarg.1 */
                /* IL_21: ldnull */
                /* IL_23: ceq */
                /* IL_24: ldc.i4.0 */
                /* IL_26: ceq */
                /* IL_27: stloc.1 */
                loc1 = ((((arg1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_28: ldloc.1 */
                /* IL_29: brtrue.s IL_2F*/
                
                if (loc1){
                    __pos__ = 0x2F;
                    continue;
                }
                /* IL_2B: ldarg.0 */
                /* IL_2C: stloc.0 */
                loc0 = arg0;
                /* IL_2D: br.s IL_56*/
                __pos__ = 0x56;
                continue;
                case 0x2F:
                /* IL_2F: ldarg.0 */
                /* IL_30: callvirt Type GetType()*/
                /* IL_35: ldarg.1 */
                /* IL_36: callvirt Type GetType()*/
                /* IL_3C: ceq */
                /* IL_3D: stloc.1 */
                loc1 = ((asm0.x600000a(arg0) === asm0.x600000a(arg1)) ? (1) : (0));
                /* IL_3E: ldloc.1 */
                /* IL_3F: brtrue.s IL_4C*/
                
                if (loc1){
                    __pos__ = 0x4C;
                    continue;
                }
                /* IL_41: ldstr Incompatible delegate types*/
                /* IL_46: newobj Void .ctor(System.String)*/
                /* IL_4B: throw */
                throw BLR.newobj(t0,asm0.x60000a5,[null, BLR.new_string("Incompatible delegate types")]);
                case 0x4C:
                /* IL_4C: ldarg.0 */
                /* IL_4D: ldarg.1 */
                /* IL_4E: callvirt Delegate CombineImpl(System.Delegate)*/
                /* IL_53: stloc.0 */
                loc0 = ((arg0.vtable)["asm0.x6000066"]())(arg0,arg1);
                case 0x56:
                /* IL_56: ldloc.0 */
                /* IL_57: ret */
                return loc0;
            }
        }
    };;
    /* static System.Delegate Delegate.Remove(Delegate,Delegate)*/
    asm.x6000064 = function Remove(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Exception"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.1 */
                loc1 = ((((arg1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.1 */
                /* IL_0A: brtrue.s IL_10*/
                
                if (loc1){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0C: ldarg.0 */
                /* IL_0D: stloc.0 */
                loc0 = arg0;
                /* IL_0E: br.s IL_37*/
                __pos__ = 0x37;
                continue;
                case 0x10:
                /* IL_10: ldarg.0 */
                /* IL_11: callvirt Type GetType()*/
                /* IL_16: ldarg.1 */
                /* IL_17: callvirt Type GetType()*/
                /* IL_1D: ceq */
                /* IL_1E: stloc.1 */
                loc1 = ((asm0.x600000a(arg0) === asm0.x600000a(arg1)) ? (1) : (0));
                /* IL_1F: ldloc.1 */
                /* IL_20: brtrue.s IL_2D*/
                
                if (loc1){
                    __pos__ = 0x2D;
                    continue;
                }
                /* IL_22: ldstr Incompatible delegate types*/
                /* IL_27: newobj Void .ctor(System.String)*/
                /* IL_2C: throw */
                throw BLR.newobj(t0,asm0.x60000a5,[null, BLR.new_string("Incompatible delegate types")]);
                case 0x2D:
                /* IL_2D: ldarg.0 */
                /* IL_2E: ldarg.1 */
                /* IL_2F: callvirt Delegate RemoveImpl(System.Delegate)*/
                /* IL_34: stloc.0 */
                loc0 = ((arg0.vtable)["asm0.x6000065"]())(arg0,arg1);
                case 0x37:
                /* IL_37: ldloc.0 */
                /* IL_38: ret */
                return loc0;
            }
        }
    };;
    /* System.Delegate Delegate.RemoveImpl(Delegate)*/
    asm.x6000065_init = function ()
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x6000065 = asm.x6000065_;
    };;
    asm.x6000065 = function (arg0,arg1)
    {
        asm.x6000065_init.apply(this,arguments);
        return asm.x6000065_.apply(this,arguments);
    };;
    asm.x6000065_ = function RemoveImpl(arg0,arg1)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.NotImplementedException"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x6000125,[null]);
    };
    /* System.Delegate Delegate.CombineImpl(Delegate)*/
    asm.x6000066_init = function ()
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x6000066 = asm.x6000066_;
    };;
    asm.x6000066 = function (arg0,arg1)
    {
        asm.x6000066_init.apply(this,arguments);
        return asm.x6000066_.apply(this,arguments);
    };;
    asm.x6000066_ = function CombineImpl(arg0,arg1)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.NotImplementedException"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x6000125,[null]);
    };
    /* System.Boolean Delegate.Equals(Object)*/
    asm.x6000067 = function Equals(arg0,arg1)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Delegate"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: isinst System.Delegate*/
        /* IL_08: call Boolean op_Equality(System.Delegate, System.Delegate)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x6000068(arg0,t0.IsInst(arg1));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* static System.Boolean Delegate.op_Equality(Delegate,Delegate)*/
    asm.x6000068_init = function ()
    {
        ((asm0)["System.MulticastDelegate"]().init)();
        asm.x6000068 = asm.x6000068_;
    };;
    asm.x6000068 = function (arg0,arg1)
    {
        asm.x6000068_init.apply(this,arguments);
        return asm.x6000068_.apply(this,arguments);
    };;
    asm.x6000068_ = function op_Equality(arg0,arg1)
    {
        var t0;
        var st_27;
        var st_52;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc6;
        var loc5;
        var loc2;
        var loc3;
        var loc4;
        t0 = (asm0)["System.MulticastDelegate"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: castclass System.MulticastDelegate*/
                /* IL_07: stloc.0 */
                loc0 = arg0;
                /* IL_08: ldarg.1 */
                /* IL_09: castclass System.MulticastDelegate*/
                /* IL_0E: stloc.1 */
                loc1 = arg1;
                /* IL_0F: ldloc.0 */
                /* IL_10: ldnull */
                /* IL_12: ceq */
                /* IL_13: ldc.i4.0 */
                /* IL_15: ceq */
                /* IL_16: stloc.s 6*/
                loc6 = ((((loc0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_18: ldloc.s 6*/
                /* IL_1A: brtrue.s IL_27*/
                
                if (loc6){
                    __pos__ = 0x27;
                    continue;
                }
                /* IL_1C: ldloc.1 */
                /* IL_1D: ldnull */
                /* IL_1F: ceq */
                /* IL_20: stloc.s 5*/
                loc5 = ((loc1 === null) ? (1) : (0));
                /* IL_22: br IL_112*/
                __pos__ = 0x112;
                continue;
                case 0x27:
                /* IL_27: ldloc.1 */
                /* IL_28: ldnull */
                /* IL_2A: ceq */
                /* IL_2B: ldc.i4.0 */
                /* IL_2D: ceq */
                /* IL_2E: stloc.s 6*/
                loc6 = ((((loc1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_30: ldloc.s 6*/
                /* IL_32: brtrue.s IL_3C*/
                
                if (loc6){
                    __pos__ = 0x3C;
                    continue;
                }
                /* IL_34: ldc.i4.0 */
                /* IL_35: stloc.s 5*/
                loc5 = (0|0);
                /* IL_37: br IL_112*/
                __pos__ = 0x112;
                continue;
                case 0x3C:
                /* IL_3C: ldloc.0 */
                /* IL_3D: ldfld Object _methodPtr*/
                /* IL_42: ldloc.1 */
                /* IL_43: ldfld Object _methodPtr*/
                /* IL_48: call Boolean ReferenceEquals(System.Object, System.Object)*/
                /* IL_4D: stloc.s 6*/
                loc6 = asm0.x6000007(loc0._methodPtr,loc1._methodPtr);
                /* IL_4F: ldloc.s 6*/
                /* IL_51: brtrue.s IL_5B*/
                
                if (loc6){
                    __pos__ = 0x5B;
                    continue;
                }
                /* IL_53: ldc.i4.0 */
                /* IL_54: stloc.s 5*/
                loc5 = (0|0);
                /* IL_56: br IL_112*/
                __pos__ = 0x112;
                continue;
                case 0x5B:
                /* IL_5B: ldloc.0 */
                /* IL_5C: ldfld Object _target*/
                /* IL_61: ldloc.1 */
                /* IL_62: ldfld Object _target*/
                /* IL_67: call Boolean ReferenceEquals(System.Object, System.Object)*/
                /* IL_6C: stloc.s 6*/
                loc6 = asm0.x6000007(loc0._target,loc1._target);
                /* IL_6E: ldloc.s 6*/
                /* IL_70: brtrue.s IL_7A*/
                
                if (loc6){
                    __pos__ = 0x7A;
                    continue;
                }
                /* IL_72: ldc.i4.0 */
                /* IL_73: stloc.s 5*/
                loc5 = (0|0);
                /* IL_75: br IL_112*/
                __pos__ = 0x112;
                continue;
                case 0x7A:
                /* IL_7A: ldloc.0 */
                /* IL_7B: ldfld Delegate[] _invocationList*/
                /* IL_80: brfalse.s IL_8D*/
                
                if ((!(loc0._invocationList))){
                    __pos__ = 0x8D;
                    continue;
                }
                /* IL_82: ldloc.1 */
                /* IL_83: ldfld Delegate[] _invocationList*/
                /* IL_88: ldnull */
                /* IL_8A: ceq */
                st_27 = ((loc1._invocationList === null) ? (1) : (0));
                /* IL_8B: br.s IL_8E*/
                __pos__ = 0x8E;
                continue;
                case 0x8D:
                /* IL_8D: ldc.i4.1 */
                st_27 = (1|0);
                case 0x8E:
                /* IL_8E: nop */
                
                /* IL_8F: stloc.s 6*/
                loc6 = st_27;
                /* IL_91: ldloc.s 6*/
                /* IL_93: brtrue.s IL_F9*/
                
                if (loc6){
                    __pos__ = 0xF9;
                    continue;
                }
                /* IL_95: nop */
                
                /* IL_96: ldloc.0 */
                /* IL_97: ldfld Delegate[] _invocationList*/
                /* IL_9C: ldlen */
                /* IL_9D: conv.i4 */
                /* IL_9E: ldloc.1 */
                /* IL_9F: ldfld Delegate[] _invocationList*/
                /* IL_A4: ldlen */
                /* IL_A5: conv.i4 */
                /* IL_A7: ceq */
                /* IL_A8: stloc.s 6*/
                loc6 = (((loc0._invocationList.jsarr.length | (0|0)) === (loc1._invocationList.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_AA: ldloc.s 6*/
                /* IL_AC: brtrue.s IL_B3*/
                
                if (loc6){
                    __pos__ = 0xB3;
                    continue;
                }
                /* IL_AE: ldc.i4.0 */
                /* IL_AF: stloc.s 5*/
                loc5 = (0|0);
                /* IL_B1: br.s IL_112*/
                __pos__ = 0x112;
                continue;
                case 0xB3:
                /* IL_B3: ldc.i4.0 */
                /* IL_B4: stloc.2 */
                loc2 = (0|0);
                /* IL_B5: br.s IL_E3*/
                __pos__ = 0xE3;
                continue;
                case 0xB7:
                /* IL_B7: nop */
                
                /* IL_B8: ldloc.0 */
                /* IL_B9: ldfld Delegate[] _invocationList*/
                /* IL_BE: ldloc.2 */
                /* IL_BF: ldelem.ref */
                /* IL_C0: stloc.3 */
                loc3 = BLR.ldelem_ref(loc0._invocationList,loc2);
                /* IL_C1: ldloc.1 */
                /* IL_C2: ldfld Delegate[] _invocationList*/
                /* IL_C7: ldloc.2 */
                /* IL_C8: ldelem.ref */
                /* IL_C9: stloc.s 4*/
                loc4 = BLR.ldelem_ref(loc1._invocationList,loc2);
                /* IL_CB: ldloc.3 */
                /* IL_CC: ldloc.s 4*/
                /* IL_CE: call Boolean op_Equality(System.Delegate, System.Delegate)*/
                /* IL_D3: stloc.s 6*/
                loc6 = asm0.x6000068(loc3,loc4);
                /* IL_D5: ldloc.s 6*/
                /* IL_D7: brtrue.s IL_DE*/
                
                if (loc6){
                    __pos__ = 0xDE;
                    continue;
                }
                /* IL_D9: ldc.i4.0 */
                /* IL_DA: stloc.s 5*/
                loc5 = (0|0);
                /* IL_DC: br.s IL_112*/
                __pos__ = 0x112;
                continue;
                case 0xDE:
                /* IL_DE: nop */
                
                /* IL_DF: ldloc.2 */
                /* IL_E0: ldc.i4.1 */
                /* IL_E1: add */
                /* IL_E2: stloc.2 */
                loc2 = (loc2 + (1|0)) | (0|0);
                case 0xE3:
                /* IL_E3: ldloc.2 */
                /* IL_E4: ldloc.0 */
                /* IL_E5: ldfld Delegate[] _invocationList*/
                /* IL_EA: ldlen */
                /* IL_EB: conv.i4 */
                /* IL_ED: clt */
                /* IL_EE: stloc.s 6*/
                loc6 = ((loc2 < (loc0._invocationList.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_F0: ldloc.s 6*/
                /* IL_F2: brtrue.s IL_B7*/
                
                if (loc6){
                    __pos__ = 0xB7;
                    continue;
                }
                /* IL_F4: ldc.i4.1 */
                /* IL_F5: stloc.s 5*/
                loc5 = (1|0);
                /* IL_F7: br.s IL_112*/
                __pos__ = 0x112;
                continue;
                case 0xF9:
                /* IL_F9: ldloc.0 */
                /* IL_FA: ldfld Delegate[] _invocationList*/
                /* IL_FF: brtrue.s IL_10C*/
                
                if (loc0._invocationList){
                    __pos__ = 0x10C;
                    continue;
                }
                /* IL_101: ldloc.1 */
                /* IL_102: ldfld Delegate[] _invocationList*/
                /* IL_107: ldnull */
                /* IL_109: ceq */
                st_52 = ((loc1._invocationList === null) ? (1) : (0));
                /* IL_10A: br.s IL_10D*/
                __pos__ = 0x10D;
                continue;
                case 0x10C:
                /* IL_10C: ldc.i4.0 */
                st_52 = (0|0);
                case 0x10D:
                /* IL_10D: nop */
                
                /* IL_10E: stloc.s 5*/
                loc5 = st_52;
                case 0x112:
                /* IL_112: ldloc.s 5*/
                /* IL_114: ret */
                return loc5;
            }
        }
    };
    /* static System.Boolean Delegate.op_Inequality(Delegate,Delegate)*/
    asm.x6000069 = function op_Inequality(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean op_Equality(System.Delegate, System.Delegate)*/
        /* IL_08: ldc.i4.0 */
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = ((asm0.x6000068(arg0,arg1) === (0|0)) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    /* System.Int32 Delegate.GetHashCode()*/
    asm.x600006a = function GetHashCode(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetHashCode()*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x6000009(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static System.Object Delegate.GetJsFunction(Delegate)*/
    asm.x600006c = function GetJsFunction(arg0)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Object _target*/
                /* IL_07: ldnull */
                /* IL_09: ceq */
                /* IL_0A: stloc.1 */
                loc1 = ((arg0._target === null) ? (1) : (0));
                /* IL_0B: ldloc.1 */
                /* IL_0C: brtrue.s IL_22*/
                
                if (loc1){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_0E: ldarg.0 */
                /* IL_0F: ldfld Object _methodPtr*/
                /* IL_14: ldarg.0 */
                /* IL_15: ldfld Object _target*/
                /* IL_1A: call Object GetJsFunction(System.Object, System.Object)*/
                /* IL_1F: stloc.0 */
                loc0 = (
            function () { 
                var args = Array.prototype.slice.apply(arguments);
                args.unshift(arg0._target);
                return arg0._methodPtr.apply(null, args);
            });
                /* IL_20: br.s IL_2B*/
                __pos__ = 0x2B;
                continue;
                case 0x22:
                /* IL_22: ldarg.0 */
                /* IL_23: ldfld Object _methodPtr*/
                /* IL_28: stloc.0 */
                loc0 = arg0._methodPtr;
                case 0x2B:
                /* IL_2B: ldloc.0 */
                /* IL_2C: ret */
                return loc0;
            }
        }
    };;
    /*  Delegate..ctor()*/
    asm.x600006d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Delegate MulticastDelegate.CreateMulticast(Delegate[])*/
    asm.x600006e = 
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
    asm.x600006f = function CombineImpl(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc3;
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm0)["System.Delegate"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Delegate[] _invocationList*/
                /* IL_07: ldnull */
                /* IL_09: ceq */
                /* IL_0A: stloc.3 */
                loc3 = ((arg0._invocationList === null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_4C*/
                
                if (loc3){
                    __pos__ = 0x4C;
                    continue;
                }
                /* IL_0E: nop */
                
                /* IL_0F: ldarg.0 */
                /* IL_10: ldfld Delegate[] _invocationList*/
                /* IL_15: ldlen */
                /* IL_16: conv.i4 */
                /* IL_17: ldc.i4.1 */
                /* IL_18: add */
                /* IL_19: newarr System.Delegate*/
                /* IL_1E: stloc.0 */
                loc0 = BLR.new_array(t0,((arg0._invocationList.jsarr.length | (0|0)) + (1|0)) | (0|0));
                /* IL_1F: ldc.i4.0 */
                /* IL_20: stloc.1 */
                loc1 = (0|0);
                /* IL_21: br.s IL_32*/
                __pos__ = 0x32;
                continue;
                case 0x23:
                /* IL_23: ldloc.0 */
                /* IL_24: ldloc.1 */
                /* IL_25: ldarg.0 */
                /* IL_26: ldfld Delegate[] _invocationList*/
                /* IL_2B: ldloc.1 */
                /* IL_2C: ldelem.ref */
                /* IL_2D: stelem.ref */
                BLR.stelem_ref(loc0,loc1,BLR.ldelem_ref(arg0._invocationList,loc1));
                /* IL_2E: ldloc.1 */
                /* IL_2F: ldc.i4.1 */
                /* IL_30: add */
                /* IL_31: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x32:
                /* IL_32: ldloc.1 */
                /* IL_33: ldarg.0 */
                /* IL_34: ldfld Delegate[] _invocationList*/
                /* IL_39: ldlen */
                /* IL_3A: conv.i4 */
                /* IL_3C: clt */
                /* IL_3D: stloc.3 */
                loc3 = ((loc1 < (arg0._invocationList.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_3E: ldloc.3 */
                /* IL_3F: brtrue.s IL_23*/
                
                if (loc3){
                    __pos__ = 0x23;
                    continue;
                }
                /* IL_41: ldloc.0 */
                /* IL_42: ldloc.0 */
                /* IL_43: ldlen */
                /* IL_44: conv.i4 */
                /* IL_45: ldc.i4.1 */
                /* IL_46: sub */
                /* IL_47: ldarg.1 */
                /* IL_48: stelem.ref */
                BLR.stelem_ref(loc0,((loc0.jsarr.length | (0|0)) - (1|0)) | (0|0),arg1);
                /* IL_49: nop */
                
                /* IL_4A: br.s IL_5D*/
                __pos__ = 0x5D;
                continue;
                case 0x4C:
                /* IL_4C: nop */
                
                /* IL_4D: ldc.i4.2 */
                /* IL_4E: newarr System.Delegate*/
                /* IL_53: stloc.0 */
                loc0 = BLR.new_array(t0,(2|0));
                /* IL_54: ldloc.0 */
                /* IL_55: ldc.i4.0 */
                /* IL_56: ldarg.0 */
                /* IL_57: stelem.ref */
                BLR.stelem_ref(loc0,(0|0),arg0);
                /* IL_58: ldloc.0 */
                /* IL_59: ldc.i4.1 */
                /* IL_5A: ldarg.1 */
                /* IL_5B: stelem.ref */
                BLR.stelem_ref(loc0,(1|0),arg1);
                /* IL_5C: nop */
                
                case 0x5D:
                /* IL_5D: ldloc.0 */
                /* IL_5E: call Delegate CreateMulticast(System.Delegate[])*/
                /* IL_63: stloc.2 */
                loc2 = asm0.x600006e(loc0);
                /* IL_66: ldloc.2 */
                /* IL_67: ret */
                return loc2;
            }
        }
    };;
    /* System.Delegate MulticastDelegate.RemoveImpl(Delegate)*/
    asm.x6000070 = function RemoveImpl(arg0,arg1)
    {
        var t0;
        var st_59;
        var st_5A;
        var st_5B;
        var st_5C;
        var st_5D;
        var st_5E;
        var st_5F;
        var st_60;
        var st_61;
        var st_62;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc5;
        var loc4;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        t0 = (asm0)["System.Delegate"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Delegate[] _invocationList*/
                /* IL_07: ldnull */
                /* IL_09: ceq */
                /* IL_0A: ldc.i4.0 */
                /* IL_0C: ceq */
                /* IL_0D: stloc.s 5*/
                loc5 = ((((arg0._invocationList === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0F: ldloc.s 5*/
                /* IL_11: brtrue.s IL_34*/
                
                if (loc5){
                    __pos__ = 0x34;
                    continue;
                }
                /* IL_13: nop */
                
                /* IL_14: ldarg.1 */
                /* IL_15: ldarg.0 */
                /* IL_16: call Boolean op_Equality(System.Delegate, System.Delegate)*/
                /* IL_1B: ldc.i4.0 */
                /* IL_1D: ceq */
                /* IL_1E: stloc.s 5*/
                loc5 = ((asm0.x6000068(arg1,arg0) === (0|0)) ? (1) : (0));
                /* IL_20: ldloc.s 5*/
                /* IL_22: brtrue.s IL_2C*/
                
                if (loc5){
                    __pos__ = 0x2C;
                    continue;
                }
                /* IL_24: ldnull */
                /* IL_25: stloc.s 4*/
                loc4 = null;
                /* IL_27: br IL_11B*/
                __pos__ = 0x11B;
                continue;
                case 0x2C:
                /* IL_2C: ldarg.0 */
                /* IL_2D: stloc.s 4*/
                loc4 = arg0;
                /* IL_2F: br IL_11B*/
                __pos__ = 0x11B;
                continue;
                case 0x34:
                /* IL_34: nop */
                
                /* IL_35: ldc.i4.0 */
                /* IL_36: stloc.0 */
                loc0 = (0|0);
                /* IL_37: ldc.i4.0 */
                /* IL_38: stloc.1 */
                loc1 = (0|0);
                /* IL_39: br.s IL_5A*/
                __pos__ = 0x5A;
                continue;
                case 0x3B:
                /* IL_3B: ldarg.0 */
                /* IL_3C: ldfld Delegate[] _invocationList*/
                /* IL_41: ldloc.1 */
                /* IL_42: ldelem.ref */
                /* IL_43: ldarg.1 */
                /* IL_44: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
                /* IL_49: ldc.i4.0 */
                /* IL_4B: ceq */
                /* IL_4C: stloc.s 5*/
                loc5 = ((asm0.x6000069(BLR.ldelem_ref(arg0._invocationList,loc1),arg1) === (0|0)) ? (1) : (0));
                /* IL_4E: ldloc.s 5*/
                /* IL_50: brtrue.s IL_56*/
                
                if (loc5){
                    __pos__ = 0x56;
                    continue;
                }
                /* IL_52: ldloc.0 */
                /* IL_53: ldc.i4.1 */
                /* IL_54: add */
                /* IL_55: stloc.0 */
                loc0 = (loc0 + (1|0)) | (0|0);
                case 0x56:
                /* IL_56: ldloc.1 */
                /* IL_57: ldc.i4.1 */
                /* IL_58: add */
                /* IL_59: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x5A:
                /* IL_5A: ldloc.1 */
                /* IL_5B: ldarg.0 */
                /* IL_5C: ldfld Delegate[] _invocationList*/
                /* IL_61: ldlen */
                /* IL_62: conv.i4 */
                /* IL_64: clt */
                /* IL_65: stloc.s 5*/
                loc5 = ((loc1 < (arg0._invocationList.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_67: ldloc.s 5*/
                /* IL_69: brtrue.s IL_3B*/
                
                if (loc5){
                    __pos__ = 0x3B;
                    continue;
                }
                /* IL_6B: ldloc.0 */
                /* IL_6C: ldc.i4.0 */
                /* IL_6E: ceq */
                /* IL_6F: ldc.i4.0 */
                /* IL_71: ceq */
                /* IL_72: stloc.s 5*/
                loc5 = ((((loc0 === (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_74: ldloc.s 5*/
                /* IL_76: brtrue.s IL_80*/
                
                if (loc5){
                    __pos__ = 0x80;
                    continue;
                }
                /* IL_78: ldnull */
                /* IL_79: stloc.s 4*/
                loc4 = null;
                /* IL_7B: br IL_11B*/
                __pos__ = 0x11B;
                continue;
                case 0x80:
                /* IL_80: ldloc.0 */
                /* IL_81: ldc.i4.1 */
                /* IL_83: ceq */
                /* IL_84: ldc.i4.0 */
                /* IL_86: ceq */
                /* IL_87: stloc.s 5*/
                loc5 = ((((loc0 === (1|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_89: ldloc.s 5*/
                /* IL_8B: brtrue.s IL_C9*/
                
                if (loc5){
                    __pos__ = 0xC9;
                    continue;
                }
                /* IL_8D: ldc.i4.0 */
                /* IL_8E: stloc.1 */
                loc1 = (0|0);
                /* IL_8F: br.s IL_B8*/
                __pos__ = 0xB8;
                continue;
                case 0x91:
                /* IL_91: ldarg.0 */
                /* IL_92: ldfld Delegate[] _invocationList*/
                /* IL_97: ldloc.1 */
                /* IL_98: ldelem.ref */
                /* IL_99: ldarg.1 */
                /* IL_9A: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
                /* IL_9F: ldc.i4.0 */
                /* IL_A1: ceq */
                /* IL_A2: stloc.s 5*/
                loc5 = ((asm0.x6000069(BLR.ldelem_ref(arg0._invocationList,loc1),arg1) === (0|0)) ? (1) : (0));
                /* IL_A4: ldloc.s 5*/
                /* IL_A6: brtrue.s IL_B4*/
                
                if (loc5){
                    __pos__ = 0xB4;
                    continue;
                }
                /* IL_A8: ldarg.0 */
                /* IL_A9: ldfld Delegate[] _invocationList*/
                /* IL_AE: ldloc.1 */
                /* IL_AF: ldelem.ref */
                /* IL_B0: stloc.s 4*/
                loc4 = BLR.ldelem_ref(arg0._invocationList,loc1);
                /* IL_B2: br.s IL_11B*/
                __pos__ = 0x11B;
                continue;
                case 0xB4:
                /* IL_B4: ldloc.1 */
                /* IL_B5: ldc.i4.1 */
                /* IL_B6: add */
                /* IL_B7: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0xB8:
                /* IL_B8: ldloc.1 */
                /* IL_B9: ldarg.0 */
                /* IL_BA: ldfld Delegate[] _invocationList*/
                /* IL_BF: ldlen */
                /* IL_C0: conv.i4 */
                /* IL_C2: clt */
                /* IL_C3: stloc.s 5*/
                loc5 = ((loc1 < (arg0._invocationList.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_C5: ldloc.s 5*/
                /* IL_C7: brtrue.s IL_91*/
                
                if (loc5){
                    __pos__ = 0x91;
                    continue;
                }
                case 0xC9:
                /* IL_C9: ldloc.0 */
                /* IL_CA: newarr System.Delegate*/
                /* IL_CF: stloc.2 */
                loc2 = BLR.new_array(t0,loc0);
                /* IL_D0: ldc.i4.0 */
                /* IL_D1: stloc.1 */
                loc1 = (0|0);
                /* IL_D2: ldc.i4.0 */
                /* IL_D3: stloc.3 */
                loc3 = (0|0);
                /* IL_D4: br.s IL_100*/
                __pos__ = 0x100;
                continue;
                case 0xD6:
                /* IL_D6: ldarg.0 */
                /* IL_D7: ldfld Delegate[] _invocationList*/
                /* IL_DC: ldloc.1 */
                /* IL_DD: ldelem.ref */
                /* IL_DE: ldarg.1 */
                /* IL_DF: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
                /* IL_E4: ldc.i4.0 */
                /* IL_E6: ceq */
                /* IL_E7: stloc.s 5*/
                loc5 = ((asm0.x6000069(BLR.ldelem_ref(arg0._invocationList,loc1),arg1) === (0|0)) ? (1) : (0));
                /* IL_E9: ldloc.s 5*/
                /* IL_EB: brtrue.s IL_FC*/
                
                if (loc5){
                    __pos__ = 0xFC;
                    continue;
                }
                /* IL_ED: ldloc.2 */
                st_60 = loc2;
                /* IL_EE: ldloc.3 */
                st_59 = loc3;
                /* IL_EF: dup */
                st_61 = (st_5A = st_59);
                /* IL_F0: ldc.i4.1 */
                st_5B = (1|0);
                /* IL_F1: add */
                st_5C = ((st_5A + st_5B) | (0|0));
                /* IL_F2: stloc.3 */
                loc3 = st_5C;
                /* IL_F3: ldarg.0 */
                st_5D = arg0;
                /* IL_F4: ldfld Delegate[] _invocationList*/
                st_5E = st_5D._invocationList;
                /* IL_F9: ldloc.1 */
                st_5F = loc1;
                /* IL_FA: ldelem.ref */
                st_62 = BLR.ldelem_ref(st_5E,st_5F);
                /* IL_FB: stelem.ref */
                BLR.stelem_ref(st_60,st_61,st_62);
                case 0xFC:
                /* IL_FC: ldloc.1 */
                /* IL_FD: ldc.i4.1 */
                /* IL_FE: add */
                /* IL_FF: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x100:
                /* IL_100: ldloc.1 */
                /* IL_101: ldarg.0 */
                /* IL_102: ldfld Delegate[] _invocationList*/
                /* IL_107: ldlen */
                /* IL_108: conv.i4 */
                /* IL_10A: clt */
                /* IL_10B: stloc.s 5*/
                loc5 = ((loc1 < (arg0._invocationList.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_10D: ldloc.s 5*/
                /* IL_10F: brtrue.s IL_D6*/
                
                if (loc5){
                    __pos__ = 0xD6;
                    continue;
                }
                /* IL_111: ldloc.2 */
                /* IL_112: call Delegate CreateMulticast(System.Delegate[])*/
                /* IL_117: stloc.s 4*/
                loc4 = asm0.x600006e(loc2);
                case 0x11B:
                /* IL_11B: ldloc.s 4*/
                /* IL_11D: ret */
                return loc4;
            }
        }
    };;
    /*  MulticastDelegate..ctor()*/
    asm.x6000071 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x600006d(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* System.Void AsyncCallback.Invoke(IAsyncResult)*/
    asm.x6000073 = BLR.delegate_invoke;;
    /* System.IAsyncResult AsyncCallback.BeginInvoke(IAsyncResult,AsyncCallback,Object)*/
    asm.x6000074 = BLR.delegate_begin_invoke;;
    /* System.Void AsyncCallback.EndInvoke(IAsyncResult)*/
    asm.x6000075 = BLR.delegate_end_invoke;;
    /*  AsyncCallback..ctor(Object,IntPtr)*/
    asm.x6000072 = BLR.delegate_ctor;;
    /* System.AttributeTargets AttributeUsageAttribute.get_ValidOn()*/
    asm.x6000077 = function get_ValidOn(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld AttributeTargets <ValidOn>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* System.Void AttributeUsageAttribute.set_ValidOn(AttributeTargets)*/
    asm.x6000078 = function set_ValidOn(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld AttributeTargets <ValidOn>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* System.Boolean AttributeUsageAttribute.get_Inherited()*/
    asm.x6000079 = function get_Inherited(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Boolean <Inherited>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemAttributeUsageAttribute<Inherited>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* System.Void AttributeUsageAttribute.set_Inherited(Boolean)*/
    asm.x600007a = function set_Inherited(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Boolean <Inherited>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* System.Boolean AttributeUsageAttribute.get_AllowMultiple()*/
    asm.x600007b = function get_AllowMultiple(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Boolean <AllowMultiple>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* System.Void AttributeUsageAttribute.set_AllowMultiple(Boolean)*/
    asm.x600007c = function set_AllowMultiple(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Boolean <AllowMultiple>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  AttributeUsageAttribute..ctor(AttributeTargets)*/
    asm.x6000076 = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: call Void set_ValidOn(System.AttributeTargets)*/
        asm0.x6000078(arg0,BLR.clone_value(arg1));
        /* IL_0F: nop */
        /* IL_10: nop */
        /* IL_11: ret */
        return ;
    };;
    /* System.String Boolean.ToString()*/
    asm.x6000080 = function ToString(arg0)
    {
        var st_02;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i1 */
                /* IL_03: brtrue.s IL_0C*/
                
                if (arg0.r()){
                    __pos__ = 0xC;
                    continue;
                }
                /* IL_05: ldstr False*/
                st_02 = BLR.new_string("False");
                /* IL_0A: br.s IL_11*/
                __pos__ = 0x11;
                continue;
                case 0xC:
                /* IL_0C: ldstr True*/
                st_02 = BLR.new_string("True");
                case 0x11:
                /* IL_11: nop */
                
                /* IL_12: stloc.0 */
                loc0 = st_02;
                /* IL_15: ldloc.0 */
                /* IL_16: ret */
                return loc0;
            }
        }
    };;
    /* System.Int32 Boolean.GetHashCode()*/
    asm.x6000081 = function GetHashCode(arg0)
    {
        var st_02;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i1 */
                /* IL_03: brtrue.s IL_08*/
                
                if (arg0.r()){
                    __pos__ = 0x8;
                    continue;
                }
                /* IL_05: ldc.i4.0 */
                st_02 = (0|0);
                /* IL_06: br.s IL_09*/
                __pos__ = 0x9;
                continue;
                case 0x8:
                /* IL_08: ldc.i4.1 */
                st_02 = (1|0);
                case 0x9:
                /* IL_09: nop */
                
                /* IL_0A: stloc.0 */
                loc0 = st_02;
                /* IL_0D: ldloc.0 */
                /* IL_0E: ret */
                return loc0;
            }
        }
    };;
    /* System.Boolean Boolean.Equals(Boolean)*/
    asm.x6000082 = function Equals(arg0,arg1)
    {
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i1 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_04: ldarg.1 */
        /* IL_05: stloc.1 */
        loc1 = arg1;
        /* IL_06: ldloc.0 */
        /* IL_07: ldloc.1 */
        /* IL_09: ceq */
        /* IL_0A: stloc.2 */
        loc2 = ((loc0 === loc1) ? (1) : (0));
        /* IL_0D: ldloc.2 */
        /* IL_0E: ret */
        return loc2;
    };;
    /* System.Boolean Boolean.Equals(Object)*/
    asm.x6000083 = function Equals(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.Boolean*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.1 */
                loc1 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.1 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc1){
                    __pos__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.0 */
                loc0 = (0|0);
                /* IL_10: br.s IL_21*/
                __pos__ = 0x21;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldarg.1 */
                /* IL_14: unbox.any System.Boolean*/
                /* IL_19: call Boolean Equals(System.Boolean)*/
                /* IL_1E: stloc.0 */
                loc0 = asm0.x6000082(arg0,BLR.unbox_any(arg1,t0));
                case 0x21:
                /* IL_21: ldloc.0 */
                /* IL_22: ret */
                return loc0;
            }
        }
    };;
    /* System.Int32 Boolean.CompareTo(Object)*/
    asm.x6000084 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.Boolean*/
        /* IL_08: call Int32 CompareTo(System.Boolean)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x6000085(arg0,BLR.unbox_any(arg1,(asm0)["System.Boolean"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 Boolean.CompareTo(Boolean)*/
    asm.x6000085 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i1 */
                /* IL_03: stloc.0 */
                loc0 = arg0.r();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: ceq */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((((loc0 === arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.0 */
                /* IL_10: stloc.1 */
                loc1 = (0|0);
                /* IL_11: br.s IL_20*/
                __pos__ = 0x20;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: stloc.2 */
                loc2 = loc0;
                /* IL_15: ldloc.2 */
                /* IL_16: brtrue.s IL_1C*/
                
                if (loc2){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_18: ldc.i4.m1 */
                /* IL_19: stloc.1 */
                loc1 = (-1|0);
                /* IL_1A: br.s IL_20*/
                __pos__ = 0x20;
                continue;
                case 0x1C:
                /* IL_1C: ldc.i4.1 */
                /* IL_1D: stloc.1 */
                loc1 = (1|0);
                case 0x20:
                /* IL_20: ldloc.1 */
                /* IL_21: ret */
                return loc1;
            }
        }
    };;
    /* System.String Byte.ToString()*/
    asm.x6000093 = function ToString(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Byte"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u1 */
        /* IL_03: box System.Byte*/
        /* IL_08: ldc.i4.8 */
        /* IL_09: call String UnsignedPrimitiveToString(System.Object, System.Int32)*/
        /* IL_0E: stloc.0 */
        loc0 = asm0.x60000d8({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },(8|0));
        /* IL_11: ldloc.0 */
        /* IL_12: ret */
        return loc0;
    };;
    /* System.Int32 Byte.CompareTo(Object)*/
    asm.x6000094 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.Byte*/
        /* IL_08: call Int32 CompareTo(System.Byte)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x6000095(arg0,BLR.unbox_any(arg1,(asm0)["System.Byte"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 Byte.CompareTo(Byte)*/
    asm.x6000095 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.u1 */
                /* IL_03: stloc.0 */
                loc0 = arg0.r();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: clt */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((((loc0 < arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: ldarg.1 */
                /* IL_16: cgt */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.2 */
                loc2 = ((((loc0 > arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.2 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc2){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: stloc.1 */
                loc1 = (0|0);
                case 0x26:
                /* IL_26: ldloc.1 */
                /* IL_27: ret */
                return loc1;
            }
        }
    };;
    /* System.Boolean Byte.Equals(Byte)*/
    asm.x6000096 = function Equals(arg0,arg1)
    {
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u1 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_04: ldarg.1 */
        /* IL_05: stloc.1 */
        loc1 = arg1;
        /* IL_06: ldloc.0 */
        /* IL_07: ldloc.1 */
        /* IL_09: ceq */
        /* IL_0A: stloc.2 */
        loc2 = ((loc0 === loc1) ? (1) : (0));
        /* IL_0D: ldloc.2 */
        /* IL_0E: ret */
        return loc2;
    };;
    /* System.Boolean Byte.Equals(Object)*/
    asm.x6000097 = function Equals(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Byte"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.Byte*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.1 */
                loc1 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.1 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc1){
                    __pos__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.0 */
                loc0 = (0|0);
                /* IL_10: br.s IL_21*/
                __pos__ = 0x21;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldarg.1 */
                /* IL_14: unbox.any System.Byte*/
                /* IL_19: call Boolean Equals(System.Byte)*/
                /* IL_1E: stloc.0 */
                loc0 = asm0.x6000096(arg0,BLR.unbox_any(arg1,t0));
                case 0x21:
                /* IL_21: ldloc.0 */
                /* IL_22: ret */
                return loc0;
            }
        }
    };;
    /* System.Int32 Byte.GetHashCode()*/
    asm.x6000098 = function GetHashCode(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u1 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* System.String Char.ToString()*/
    asm.x6000099 = function ToString(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Char"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u2 */
        /* IL_03: box System.Char*/
        /* IL_08: call String ToStringImpl(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x600009a({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* static System.String Char.ToStringImpl(Object)*/
    asm.x600009a = function(o) { return BLR.new_string(String.fromCharCode(o.boxed)); };;
    /* static System.Boolean Char.IsDigit(Char)*/
    asm.x600009b = function(o) { return (48 <= o.boxed && o.boxed <= 57) ? 1 : 0; };;
    /* System.Int32 Comparison`1.Invoke(T,T)*/
    asm.x600009d = BLR.delegate_invoke;;
    /* System.IAsyncResult Comparison`1.BeginInvoke(T,T,AsyncCallback,Object)*/
    asm.x600009e = BLR.delegate_begin_invoke;;
    /* System.Int32 Comparison`1.EndInvoke(IAsyncResult)*/
    asm.x600009f = BLR.delegate_end_invoke;;
    /*  Comparison`1..ctor(Object,IntPtr)*/
    asm.x600009c = BLR.delegate_ctor;;
    /* static System.Void Console.WriteLineImpl(String)*/
    asm.x60000a0 = (function (o) { console.log(o.jsstr); });;
    /* static System.Void Console.WriteLine(Object)*/
    asm.x60000a1 = function WriteLine(arg0)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        t0 = (asm0)["System.String"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.0 */
                loc0 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.0 */
                /* IL_0A: brtrue.s IL_19*/
                
                if (loc0){
                    __pos__ = 0x19;
                    continue;
                }
                asm0.x60001d6();
                /* IL_0C: ldsfld String Empty*/
                /* IL_11: call Void WriteLineImpl(System.String)*/
                asm0.x60000a0(t0.Empty);
                /* IL_16: nop */
                
                /* IL_17: br.s IL_25*/
                __pos__ = 0x25;
                continue;
                case 0x19:
                /* IL_19: ldarg.0 */
                /* IL_1A: callvirt String ToString()*/
                /* IL_1F: call Void WriteLineImpl(System.String)*/
                asm0.x60000a0(((arg0.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(arg0)));
                /* IL_24: nop */
                
                case 0x25:
                /* IL_25: ret */
                return ;
            }
        }
    };;
    /* static System.Void Console.WriteLine(String,Object[])*/
    asm.x60000a2 = function WriteLine(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call String Format(System.String, System.Object[])*/
        /* IL_08: call Void WriteLineImpl(System.String)*/
        asm0.x60000a0(asm0.x60001cd(arg0,arg1));
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    /*  Console..ctor()*/
    asm.x60000a3 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Int32 Exception.get_HResult()*/
    asm.x60000a7 = function get_HResult(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 <HResult>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemException<HResult>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* System.Void Exception.set_HResult(Int32)*/
    asm.x60000a8 = function set_HResult(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Int32 <HResult>k__BackingField*/
        (arg0)["SystemException<HResult>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* System.String Exception.get_Message()*/
    asm.x60000a9 = function get_Message(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld String <Message>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemException<Message>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* System.Void Exception.set_Message(String)*/
    asm.x60000aa = function set_Message(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <Message>k__BackingField*/
        (arg0)["SystemException<Message>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* System.String Exception.ToString()*/
    asm.x60000ab = function ToString(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt String get_Message()*/
        /* IL_07: stloc.0 */
        loc0 = ((arg0.vtable)["asm0.x60000a9"]())(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* System.Exception Exception.get_InnerException()*/
    asm.x60000ac = function get_InnerException(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Exception <InnerException>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemException<InnerException>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* System.Void Exception.set_InnerException(Exception)*/
    asm.x60000ad = function set_InnerException(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Exception <InnerException>k__BackingField*/
        (arg0)["SystemException<InnerException>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  Exception..ctor()*/
    asm.x60000a4 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: call Void init(System.Exception)*/
        arg0.stack = new Error().stack;
        /* IL_0E: nop */
        /* IL_0F: nop */
        /* IL_10: ret */
        return ;
    };;
    /*  Exception..ctor(String)*/
    asm.x60000a5 = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x60000a4(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: callvirt Void set_Message(System.String)*/
        ((arg0.vtable)["asm0.x60000aa"]())(arg0,arg1);
        /* IL_0F: nop */
        /* IL_10: nop */
        /* IL_11: ret */
        return ;
    };;
    /*  Exception..ctor(String,Exception)*/
    asm.x60000a6 = function _ctor(arg0,arg1,arg2)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x60000a4(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: callvirt Void set_Message(System.String)*/
        ((arg0.vtable)["asm0.x60000aa"]())(arg0,arg1);
        /* IL_0F: nop */
        /* IL_10: ldarg.0 */
        /* IL_11: ldarg.2 */
        /* IL_12: call Void set_InnerException(System.Exception)*/
        asm0.x60000ad(arg0,arg2);
        /* IL_17: nop */
        /* IL_18: nop */
        /* IL_19: ret */
        return ;
    };;
    /*  DivideByZeroException..ctor()*/
    asm.x60000af = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x60000a4(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* System.String Double.ToString()*/
    asm.x60000b0 = function ToString(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Double"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.r8 */
        /* IL_03: box System.Double*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x60000d7({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 Double.CompareTo(Object)*/
    asm.x60000b1 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.Double*/
        /* IL_08: call Int32 CompareTo(System.Double)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x60000b2(arg0,BLR.unbox_any(arg1,(asm0)["System.Double"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 Double.CompareTo(Double)*/
    asm.x60000b2 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.r8 */
                /* IL_03: stloc.0 */
                loc0 = arg0.r();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: clt */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((((loc0 < arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: ldarg.1 */
                /* IL_16: cgt */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.2 */
                loc2 = ((((loc0 > arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.2 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc2){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: stloc.1 */
                loc1 = (0|0);
                case 0x26:
                /* IL_26: ldloc.1 */
                /* IL_27: ret */
                return loc1;
            }
        }
    };;
    /* static System.Int32 Environment.get_CurrentManagedThreadId()*/
    asm.x60000b3 = function get_CurrentManagedThreadId()
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.0 */
        /* IL_02: stloc.0 */
        loc0 = (0|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* static System.String Environment.get_NewLine()*/
    asm.x60000b4 = function get_NewLine()
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldstr */
        /* */
        /* IL_06: stloc.0 */
        loc0 = BLR.new_string("\\n");
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /*  FlagsAttribute..ctor()*/
    asm.x60000b5 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* TResult Func`2.Invoke(T)*/
    asm.x60000b7 = BLR.delegate_invoke;;
    /* System.IAsyncResult Func`2.BeginInvoke(T,AsyncCallback,Object)*/
    asm.x60000b8 = BLR.delegate_begin_invoke;;
    /* TResult Func`2.EndInvoke(IAsyncResult)*/
    asm.x60000b9 = BLR.delegate_end_invoke;;
    /*  Func`2..ctor(Object,IntPtr)*/
    asm.x60000b6 = BLR.delegate_ctor;;
    /* static System.Void GC.KeepAlive(Object)*/
    asm.x60000ba = function KeepAlive(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    /* static System.Void GC.SuppressFinalize(Object)*/
    asm.x60000bb = function SuppressFinalize(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    /* static System.IAsyncResult AsyncResult.CreateAsyncResult()*/
    asm.x60000c0_init = function ()
    {
        ((asm0)["System.AsyncResult"]().init)();
        asm.x60000c0 = asm.x60000c0_;
    };;
    asm.x60000c0 = function ()
    {
        asm.x60000c0_init.apply(this,arguments);
        return asm.x60000c0_.apply(this,arguments);
    };;
    asm.x60000c0_ = function CreateAsyncResult()
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.AsyncResult"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: stloc.0 */
        loc0 = BLR.newobj(t0,asm0.x60000c5,[null]);
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };
    asm.CreateAsyncResult = asm.x60000c0;
    /* System.Boolean AsyncResult.get_IsCompleted()*/
    asm.x60000c1 = function get_IsCompleted(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.1 */
        /* IL_02: stloc.0 */
        loc0 = (1|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* System.Threading.WaitHandle AsyncResult.get_AsyncWaitHandle()*/
    asm.x60000c2 = function get_AsyncWaitHandle(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldnull */
        /* IL_02: stloc.0 */
        loc0 = null;
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* System.Object AsyncResult.get_AsyncState()*/
    asm.x60000c3 = function get_AsyncState(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Object asyncState*/
        /* IL_07: stloc.0 */
        loc0 = arg0.asyncState;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* System.Boolean AsyncResult.get_CompletedSynchronously()*/
    asm.x60000c4 = function get_CompletedSynchronously(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.1 */
        /* IL_02: stloc.0 */
        loc0 = (1|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /*  AsyncResult..ctor()*/
    asm.x60000c5 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.String Int16.ToString()*/
    asm.x60000c8 = function ToString(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Int16"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i2 */
        /* IL_03: box System.Int16*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x60000d7({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 Int16.CompareTo(Object)*/
    asm.x60000c9 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.Int16*/
        /* IL_08: call Int32 CompareTo(System.Int16)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x60000ca(arg0,BLR.unbox_any(arg1,(asm0)["System.Int16"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 Int16.CompareTo(Int16)*/
    asm.x60000ca = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i2 */
                /* IL_03: stloc.0 */
                loc0 = arg0.r();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: clt */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((((loc0 < arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: ldarg.1 */
                /* IL_16: cgt */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.2 */
                loc2 = ((((loc0 > arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.2 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc2){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: stloc.1 */
                loc1 = (0|0);
                case 0x26:
                /* IL_26: ldloc.1 */
                /* IL_27: ret */
                return loc1;
            }
        }
    };;
    /* System.Boolean Int16.Equals(Int16)*/
    asm.x60000cb = function Equals(arg0,arg1)
    {
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i2 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_04: ldarg.1 */
        /* IL_05: stloc.1 */
        loc1 = arg1;
        /* IL_06: ldloc.0 */
        /* IL_07: ldloc.1 */
        /* IL_09: ceq */
        /* IL_0A: stloc.2 */
        loc2 = ((loc0 === loc1) ? (1) : (0));
        /* IL_0D: ldloc.2 */
        /* IL_0E: ret */
        return loc2;
    };;
    /* System.Boolean Int16.Equals(Object)*/
    asm.x60000cc = function Equals(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Int16"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.Int16*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.1 */
                loc1 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.1 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc1){
                    __pos__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.0 */
                loc0 = (0|0);
                /* IL_10: br.s IL_21*/
                __pos__ = 0x21;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldarg.1 */
                /* IL_14: unbox.any System.Int16*/
                /* IL_19: call Boolean Equals(System.Int16)*/
                /* IL_1E: stloc.0 */
                loc0 = asm0.x60000cb(arg0,BLR.unbox_any(arg1,t0));
                case 0x21:
                /* IL_21: ldloc.0 */
                /* IL_22: ret */
                return loc0;
            }
        }
    };;
    /* System.Int32 Int16.GetHashCode()*/
    asm.x60000cd = function GetHashCode(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i2 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* System.String Int32.ToString()*/
    asm.x60000ce = function ToString(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i4 */
        /* IL_03: box System.Int32*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x60000d7({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.String Int32.ToString(String)*/
    asm.x60000d0_init = function ()
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x60000d0 = asm.x60000d0_;
    };;
    asm.x60000d0 = function (arg0,arg1)
    {
        asm.x60000d0_init.apply(this,arguments);
        return asm.x60000d0_.apply(this,arguments);
    };;
    asm.x60000d0_ = function ToString(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        t0 = (asm0)["System.NotSupportedException"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i4 */
                /* IL_03: stloc.0 */
                loc0 = arg0.r();
                /* IL_04: ldarg.1 */
                /* IL_05: ldstr X*/
                /* IL_0A: call Boolean op_Equality(System.String, System.String)*/
                /* IL_0F: ldc.i4.0 */
                /* IL_11: ceq */
                /* IL_12: stloc.2 */
                loc2 = ((asm0.x60001c6(arg1,BLR.new_string("X")) === (0|0)) ? (1) : (0));
                /* IL_13: ldloc.2 */
                /* IL_14: brtrue.s IL_1F*/
                
                if (loc2){
                    __pos__ = 0x1F;
                    continue;
                }
                /* IL_16: ldloc.0 */
                /* IL_17: call String toHex(System.Int32)*/
                /* IL_1C: stloc.1 */
                loc1 = BLR.new_string(loc0.toString(16));
                /* IL_1D: br.s IL_25*/
                __pos__ = 0x25;
                continue;
                case 0x1F:
                /* IL_1F: newobj Void .ctor()*/
                /* IL_24: throw */
                throw BLR.newobj(t0,asm0.x6000126,[null]);
                case 0x25:
                /* IL_25: ldloc.1 */
                /* IL_26: ret */
                return loc1;
            }
        }
    };
    /* System.Int32 Int32.CompareTo(Object)*/
    asm.x60000d1 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.Int32*/
        /* IL_08: call Int32 CompareTo(System.Int32)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x60000d2(arg0,BLR.unbox_any(arg1,(asm0)["System.Int32"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 Int32.CompareTo(Int32)*/
    asm.x60000d2 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i4 */
                /* IL_03: stloc.0 */
                loc0 = arg0.r();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: clt */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((((loc0 < arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: ldarg.1 */
                /* IL_16: cgt */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.2 */
                loc2 = ((((loc0 > arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.2 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc2){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: stloc.1 */
                loc1 = (0|0);
                case 0x26:
                /* IL_26: ldloc.1 */
                /* IL_27: ret */
                return loc1;
            }
        }
    };;
    /* System.Boolean Int32.Equals(Object)*/
    asm.x60000d3 = function Equals(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.Int32*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.1 */
                loc1 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.1 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc1){
                    __pos__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.0 */
                loc0 = (0|0);
                /* IL_10: br.s IL_21*/
                __pos__ = 0x21;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldarg.1 */
                /* IL_14: unbox.any System.Int32*/
                /* IL_19: call Boolean Equals(System.Int32)*/
                /* IL_1E: stloc.0 */
                loc0 = asm0.x60000d4(arg0,BLR.unbox_any(arg1,t0));
                case 0x21:
                /* IL_21: ldloc.0 */
                /* IL_22: ret */
                return loc0;
            }
        }
    };;
    /* System.Boolean Int32.Equals(Int32)*/
    asm.x60000d4 = function Equals(arg0,arg1)
    {
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i4 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_04: ldarg.1 */
        /* IL_05: stloc.1 */
        loc1 = arg1;
        /* IL_06: ldloc.0 */
        /* IL_07: ldloc.1 */
        /* IL_09: ceq */
        /* IL_0A: stloc.2 */
        loc2 = ((loc0 === loc1) ? (1) : (0));
        /* IL_0D: ldloc.2 */
        /* IL_0E: ret */
        return loc2;
    };;
    /* System.Int32 Int32.GetHashCode()*/
    asm.x60000d5 = function GetHashCode(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i4 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* static System.String InternalFormatting.SignedPrimitiveToString(Object)*/
    asm.x60000d7 = function(o) { return BLR.new_string(o.boxed.toString()); };;
    /* static System.String InternalFormatting.UnsignedPrimitiveToString(Object,Int32)*/
    asm.x60000d8 = 
            function(o, size) {
                var b = o.boxed;
                if (b < 0) {
                    var max = 0xffffffff >>> (32 - size);
                    b = max + (b + 1);
                }
                return BLR.new_string(b.toString());
            };;
    /* System.String IntPtr.ToString()*/
    asm.x60000d9_init = function ()
    {
        ((asm0)["System.IntPtr"]().init)();
        asm.x60000d9 = asm.x60000d9_;
    };;
    asm.x60000d9 = function (arg0)
    {
        asm.x60000d9_init.apply(this,arguments);
        return asm.x60000d9_.apply(this,arguments);
    };;
    asm.x60000d9_ = function ToString(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.IntPtr"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldobj System.IntPtr*/
        /* IL_07: box System.IntPtr*/
        /* IL_0C: call String SignedPrimitiveToString(System.Object)*/
        /* IL_11: stloc.0 */
        loc0 = asm0.x60000d7({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };
    /*  SystemException..ctor()*/
    asm.x60000da = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr A system exception has occurred.*/
        /* IL_06: call String GetText(System.String)*/
        /* IL_0B: call Void .ctor(System.String)*/
        asm0.x60000a5(arg0,asm0.x6000026(BLR.new_string("A system exception has occurred.")));
        /* IL_10: nop */
        /* IL_11: nop */
        /* IL_12: ldarg.0 */
        /* IL_13: ldc.i4 -2146233087*/
        /* IL_18: call Void set_HResult(System.Int32)*/
        asm0.x60000a8(arg0,(-2146233087|0));
        /* IL_1D: nop */
        /* IL_1E: nop */
        /* IL_1F: ret */
        return ;
    };;
    /*  SystemException..ctor(String)*/
    asm.x60000db = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        asm0.x60000a5(arg0,arg1);
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ldarg.0 */
        /* IL_0A: ldc.i4 -2146233087*/
        /* IL_0F: call Void set_HResult(System.Int32)*/
        asm0.x60000a8(arg0,(-2146233087|0));
        /* IL_14: nop */
        /* IL_15: nop */
        /* IL_16: ret */
        return ;
    };;
    /*  SystemException..ctor(String,Exception)*/
    asm.x60000dc = function _ctor(arg0,arg1,arg2)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: ldarg.2 */
        /* IL_03: call Void .ctor(System.String, System.Exception)*/
        asm0.x60000a6(arg0,arg1,arg2);
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: ldarg.0 */
        /* IL_0B: ldc.i4 -2146233087*/
        /* IL_10: call Void set_HResult(System.Int32)*/
        asm0.x60000a8(arg0,(-2146233087|0));
        /* IL_15: nop */
        /* IL_16: nop */
        /* IL_17: ret */
        return ;
    };;
    /*  NullReferenceException..ctor()*/
    asm.x60000dd = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x60000da(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  ParamArrayAttribute..ctor()*/
    asm.x60000de = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* System.Object RuntimeFieldHandle.get_Value()*/
    asm.x60000df = function get_Value(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Object value*/
        /* IL_07: stloc.0 */
        loc0 = arg0.r().value;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static System.Type Type.GetTypeFromHandle(RuntimeTypeHandle)*/
    asm.x60000e1 = function GetTypeFromHandle(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Type GetRuntimeTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x60000f9(BLR.clone_value(arg0));
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* System.Boolean Type.IsSubclassOf(Type)*/
    asm.x60000e2 = function IsSubclassOf(arg0,arg1)
    {
        var st_05;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc2;
        var loc1;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: brfalse.s IL_0D*/
                
                if ((!(arg1))){
                    __pos__ = 0xD;
                    continue;
                }
                /* IL_04: ldarg.1 */
                /* IL_05: ldarg.0 */
                /* IL_07: ceq */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                st_05 = ((((arg1 === arg0) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0B: br.s IL_0E*/
                __pos__ = 0xE;
                continue;
                case 0xD:
                /* IL_0D: ldc.i4.0 */
                st_05 = (0|0);
                case 0xE:
                /* IL_0E: nop */
                
                /* IL_0F: stloc.2 */
                loc2 = st_05;
                /* IL_10: ldloc.2 */
                /* IL_11: brtrue.s IL_17*/
                
                if (loc2){
                    __pos__ = 0x17;
                    continue;
                }
                /* IL_13: ldc.i4.0 */
                /* IL_14: stloc.1 */
                loc1 = (0|0);
                /* IL_15: br.s IL_45*/
                __pos__ = 0x45;
                continue;
                case 0x17:
                /* IL_17: ldarg.0 */
                /* IL_18: callvirt Type get_BaseType()*/
                /* IL_1D: stloc.0 */
                loc0 = ((arg0.vtable)["asm0.x60000e5"]())(arg0);
                /* IL_1E: br.s IL_36*/
                __pos__ = 0x36;
                continue;
                case 0x20:
                /* IL_20: ldloc.0 */
                /* IL_21: ldarg.1 */
                /* IL_23: ceq */
                /* IL_24: ldc.i4.0 */
                /* IL_26: ceq */
                /* IL_27: stloc.2 */
                loc2 = ((((loc0 === arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_28: ldloc.2 */
                /* IL_29: brtrue.s IL_2F*/
                
                if (loc2){
                    __pos__ = 0x2F;
                    continue;
                }
                /* IL_2B: ldc.i4.1 */
                /* IL_2C: stloc.1 */
                loc1 = (1|0);
                /* IL_2D: br.s IL_45*/
                __pos__ = 0x45;
                continue;
                case 0x2F:
                /* IL_2F: ldloc.0 */
                /* IL_30: callvirt Type get_BaseType()*/
                /* IL_35: stloc.0 */
                loc0 = ((loc0.vtable)["asm0.x60000e5"]())(loc0);
                case 0x36:
                /* IL_36: ldloc.0 */
                /* IL_37: ldnull */
                /* IL_39: ceq */
                /* IL_3A: ldc.i4.0 */
                /* IL_3C: ceq */
                /* IL_3D: stloc.2 */
                loc2 = ((((loc0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_3E: ldloc.2 */
                /* IL_3F: brtrue.s IL_20*/
                
                if (loc2){
                    __pos__ = 0x20;
                    continue;
                }
                /* IL_41: ldc.i4.0 */
                /* IL_42: stloc.1 */
                loc1 = (0|0);
                case 0x45:
                /* IL_45: ldloc.1 */
                /* IL_46: ret */
                return loc1;
            }
        }
    };;
    /* System.Boolean Type.get_IsEnum()*/
    asm.x60000e3 = function get_IsEnum(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Enum"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldtoken System.Enum*/
        /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_0C: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_11: stloc.0 */
        loc0 = ((arg0.vtable)["asm0.x60000e2"]())(arg0,asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)));
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /*  Type..ctor()*/
    asm.x60000f3 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x600003f(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static System.RuntimeType+constructor RuntimeType.GetConstructor(Object)*/
    asm.x60000f4 = function (o) { return o.type || o.constructor; };;
    /* static System.Type RuntimeType.GetInstance(constructor)*/
    asm.x60000f7_init = function ()
    {
        ((asm0)["System.RuntimeType"]().init)();
        asm.x60000f7 = asm.x60000f7_;
    };;
    asm.x60000f7 = function (arg0)
    {
        asm.x60000f7_init.apply(this,arguments);
        return asm.x60000f7_.apply(this,arguments);
    };;
    asm.x60000f7_ = function GetInstance(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Boolean"]();
        t1 = (asm0)["System.RuntimeType"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Type TypeInstance*/
                /* IL_07: call Boolean UnsafeCast[System.Boolean](System.Object)*/
                /* IL_0C: stloc.1 */
                loc1 = arg0.TypeInstance;
                /* IL_0D: ldloc.1 */
                /* IL_0E: brtrue.s IL_1C*/
                
                if (loc1){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_10: ldarg.0 */
                /* IL_11: ldarg.0 */
                /* IL_12: newobj Void .ctor(System.RuntimeType+constructor)*/
                /* IL_17: stfld Type TypeInstance*/
                arg0.TypeInstance = BLR.newobj(t1,asm0.x60000f5,[null, arg0]);
                case 0x1C:
                /* IL_1C: ldarg.0 */
                /* IL_1D: ldfld Type TypeInstance*/
                /* IL_22: stloc.0 */
                loc0 = arg0.TypeInstance;
                /* IL_25: ldloc.0 */
                /* IL_26: ret */
                return loc0;
            }
        }
    };
    asm.GetReflectionType = asm.x60000f7;
    /* static System.Type RuntimeType.GetType(Object)*/
    asm.x60000f8 = function GetType(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call constructor GetConstructor(System.Object)*/
        /* IL_07: call Type GetInstance(System.RuntimeType+constructor)*/
        /* IL_0C: stloc.0 */
        loc0 = asm0.x60000f7(asm0.x60000f4(arg0));
        /* IL_0F: ldloc.0 */
        /* IL_10: ret */
        return loc0;
    };;
    /* static System.Type RuntimeType.GetRuntimeTypeFromHandle(RuntimeTypeHandle)*/
    asm.x60000f9_init = function ()
    {
        ((asm0)["System.RuntimeType+constructor"]().init)();
        asm.x60000f9 = asm.x60000f9_;
    };;
    asm.x60000f9 = function (arg0)
    {
        asm.x60000f9_init.apply(this,arguments);
        return asm.x60000f9_.apply(this,arguments);
    };;
    asm.x60000f9_ = function GetRuntimeTypeFromHandle(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.RuntimeType+constructor"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarga.s 0*/
        /* IL_03: ldfld Object value*/
        /* IL_08: call constructor UnsafeCast[System.RuntimeType+constructor](System.Object)*/
        /* IL_0D: call Type GetInstance(System.RuntimeType+constructor)*/
        /* IL_12: stloc.0 */
        loc0 = asm0.x60000f7(arg0.value);
        /* IL_15: ldloc.0 */
        /* IL_16: ret */
        return loc0;
    };
    /* System.Reflection.Assembly RuntimeType.get_Assembly()*/
    asm.x60000fa = function get_Assembly(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld jsAsm Assembly*/
        /* IL_0C: call Assembly GetInstance(System.Reflection.Assembly+jsAsm)*/
        /* IL_11: stloc.0 */
        loc0 = asm0.x6000034(arg0.ctor.Assembly);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* System.String RuntimeType.get_FullName()*/
    asm.x60000fb = function get_FullName(arg0)
    {
        var t0;
        var st_13;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc4;
        var loc3;
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm0)["System.Array"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldtoken System.Array*/
                /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_0C: callvirt Boolean IsSubclassOf(System.Type)*/
                /* IL_11: ldc.i4.0 */
                /* IL_13: ceq */
                /* IL_14: stloc.s 4*/
                loc4 = ((((arg0.vtable)["asm0.x60000e2"]())(arg0,asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))) === (0|0)) ? (1) : (0));
                /* IL_16: ldloc.s 4*/
                /* IL_18: brtrue.s IL_33*/
                
                if (loc4){
                    __pos__ = 0x33;
                    continue;
                }
                /* IL_1A: nop */
                
                /* IL_1B: ldarg.0 */
                /* IL_1C: callvirt Type GetElementType()*/
                /* IL_21: callvirt String get_FullName()*/
                /* IL_26: ldstr []*/
                /* IL_2B: call String Concat(System.String, System.String)*/
                /* IL_30: stloc.3 */
                loc3 = asm0.x60001bb((((((arg0.vtable)["asm0.x60000f0"]())(arg0).vtable)["asm0.x60000e0"])())(((arg0.vtable)["asm0.x60000f0"]())(arg0)),BLR.new_string("[]"));
                /* IL_31: br.s IL_AE*/
                __pos__ = 0xAE;
                continue;
                case 0x33:
                /* IL_33: ldarg.0 */
                /* IL_34: ldfld constructor ctor*/
                /* IL_39: ldfld Object FullName*/
                /* IL_3E: call String FromJsString(System.Object)*/
                /* IL_43: stloc.0 */
                loc0 = BLR.new_string(arg0.ctor.FullName);
                /* IL_44: ldarg.0 */
                /* IL_45: callvirt Boolean get_IsGenericType()*/
                /* IL_4A: brfalse.s IL_54*/
                
                if ((!(((arg0.vtable)["asm0.x60000e7"]())(arg0)))){
                    __pos__ = 0x54;
                    continue;
                }
                /* IL_4C: ldarg.0 */
                /* IL_4D: callvirt Boolean get_IsGenericTypeDefinition()*/
                st_13 = ((arg0.vtable)["asm0.x60000e9"]())(arg0);
                /* IL_52: br.s IL_55*/
                __pos__ = 0x55;
                continue;
                case 0x54:
                /* IL_54: ldc.i4.1 */
                st_13 = (1|0);
                case 0x55:
                /* IL_55: nop */
                
                /* IL_56: stloc.s 4*/
                loc4 = st_13;
                /* IL_58: ldloc.s 4*/
                /* IL_5A: brtrue.s IL_AA*/
                
                if (loc4){
                    __pos__ = 0xAA;
                    continue;
                }
                /* IL_5C: nop */
                
                /* IL_5D: ldloc.0 */
                /* IL_5E: ldstr [*/
                /* IL_63: call String Concat(System.String, System.String)*/
                /* IL_68: stloc.0 */
                loc0 = asm0.x60001bb(loc0,BLR.new_string("["));
                /* IL_69: ldarg.0 */
                /* IL_6A: callvirt Type[] GetGenericArguments()*/
                /* IL_6F: stloc.1 */
                loc1 = ((arg0.vtable)["asm0.x60000ea"]())(arg0);
                /* IL_70: ldc.i4.0 */
                /* IL_71: stloc.2 */
                loc2 = (0|0);
                /* IL_72: br.s IL_91*/
                __pos__ = 0x91;
                continue;
                case 0x74:
                /* IL_74: ldloc.0 */
                /* IL_75: ldstr [*/
                /* IL_7A: ldloc.1 */
                /* IL_7B: ldloc.2 */
                /* IL_7C: ldelem.ref */
                /* IL_7D: callvirt String get_AssemblyQualifiedName()*/
                /* IL_82: ldstr ]*/
                /* IL_87: call String Concat(System.String, System.String, System.String, System.String)*/
                /* IL_8C: stloc.0 */
                loc0 = asm0.x60001be(loc0,BLR.new_string("["),(((BLR.ldelem_ref(loc1,loc2).vtable)["asm0.x60000e6"])())(BLR.ldelem_ref(loc1,loc2)),BLR.new_string("]"));
                /* IL_8D: ldloc.2 */
                /* IL_8E: ldc.i4.1 */
                /* IL_8F: add */
                /* IL_90: stloc.2 */
                loc2 = (loc2 + (1|0)) | (0|0);
                case 0x91:
                /* IL_91: ldloc.2 */
                /* IL_92: ldloc.1 */
                /* IL_93: ldlen */
                /* IL_94: conv.i4 */
                /* IL_96: clt */
                /* IL_97: stloc.s 4*/
                loc4 = ((loc2 < (loc1.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_99: ldloc.s 4*/
                /* IL_9B: brtrue.s IL_74*/
                
                if (loc4){
                    __pos__ = 0x74;
                    continue;
                }
                /* IL_9D: ldloc.0 */
                /* IL_9E: ldstr ]*/
                /* IL_A3: call String Concat(System.String, System.String)*/
                /* IL_A8: stloc.0 */
                loc0 = asm0.x60001bb(loc0,BLR.new_string("]"));
                /* IL_A9: nop */
                
                case 0xAA:
                /* IL_AA: ldloc.0 */
                /* IL_AB: stloc.3 */
                loc3 = loc0;
                case 0xAE:
                /* IL_AE: ldloc.3 */
                /* IL_AF: ret */
                return loc3;
            }
        }
    };;
    /* System.String RuntimeType.get_AssemblyQualifiedName()*/
    asm.x60000fc = function get_AssemblyQualifiedName(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt String get_FullName()*/
        /* IL_07: ldstr , */
        /* IL_0C: ldarg.0 */
        /* IL_0D: callvirt Assembly get_Assembly()*/
        /* IL_12: callvirt String get_FullName()*/
        /* IL_17: call String Concat(System.String, System.String, System.String)*/
        /* IL_1C: stloc.0 */
        loc0 = asm0.x60001bd(((arg0.vtable)["asm0.x60000e0"]())(arg0),BLR.new_string(", "),asm0.x6000035(((arg0.vtable)["asm0.x60000e4"]())(arg0)));
        /* IL_1F: ldloc.0 */
        /* IL_20: ret */
        return loc0;
    };;
    /* System.Boolean RuntimeType.Equals(Object)*/
    asm.x60000fd_init = function ()
    {
        ((asm0)["System.RuntimeType"]().init)();
        asm.x60000fd = asm.x60000fd_;
    };;
    asm.x60000fd = function (arg0,arg1)
    {
        asm.x60000fd_init.apply(this,arguments);
        return asm.x60000fd_.apply(this,arguments);
    };;
    asm.x60000fd_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.RuntimeType"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.1 */
        /* IL_02: isinst System.RuntimeType*/
        /* IL_07: stloc.0 */
        loc0 = t0.IsInst(arg1);
        /* IL_08: ldarg.0 */
        /* IL_09: ldfld constructor ctor*/
        /* IL_0E: ldloc.0 */
        /* IL_0F: ldfld constructor ctor*/
        /* IL_15: ceq */
        /* IL_16: stloc.1 */
        loc1 = ((arg0.ctor === loc0.ctor) ? (1) : (0));
        /* IL_19: ldloc.1 */
        /* IL_1A: ret */
        return loc1;
    };
    /* System.Int32 RuntimeType.GetHashCode()*/
    asm.x60000fe = function GetHashCode(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld constructor ctor*/
                /* IL_07: ldfld Int32 Hash*/
                /* IL_0C: box System.Int32*/
                /* IL_11: call Boolean UnsafeCast[System.Boolean](System.Object)*/
                /* IL_16: stloc.1 */
                loc1 = {
                    'boxed': arg0.ctor.Hash,
                    'type': t0,
                    'vtable': t0.prototype.vtable,
                    'ifacemap': t0.prototype.ifacemap
                };
                /* IL_17: ldloc.1 */
                /* IL_18: brtrue.s IL_2B*/
                
                if (loc1){
                    __pos__ = 0x2B;
                    continue;
                }
                /* IL_1A: ldarg.0 */
                /* IL_1B: ldfld constructor ctor*/
                /* IL_20: ldarg.0 */
                /* IL_21: call Int32 GetHashCode()*/
                /* IL_26: stfld Int32 Hash*/
                arg0.ctor.Hash = asm0.x6000009(arg0);
                case 0x2B:
                /* IL_2B: ldarg.0 */
                /* IL_2C: ldfld constructor ctor*/
                /* IL_31: ldfld Int32 Hash*/
                /* IL_36: stloc.0 */
                loc0 = arg0.ctor.Hash;
                /* IL_39: ldloc.0 */
                /* IL_3A: ret */
                return loc0;
            }
        }
    };;
    /* System.Object[] RuntimeType.GetCustomAttributes(Boolean)*/
    asm.x60000ff = function GetCustomAttributes(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Array CustomAttributes*/
        /* IL_0C: call Object[] GetCustomAttributesImpl(System.Object)*/
        /* IL_11: stloc.0 */
        loc0 = asm0.x600003d(arg0.ctor.CustomAttributes);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* System.Object[] RuntimeType.GetCustomAttributes(Type,Boolean)*/
    asm.x6000100_init = function ()
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x6000100 = asm.x6000100_;
    };;
    asm.x6000100 = function (arg0,arg1,arg2)
    {
        asm.x6000100_init.apply(this,arguments);
        return asm.x6000100_.apply(this,arguments);
    };;
    asm.x6000100_ = function GetCustomAttributes(arg0,arg1,arg2)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.NotImplementedException"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x6000125,[null]);
    };
    /* System.Boolean RuntimeType.IsDefined(Type,Boolean)*/
    asm.x6000101_init = function ()
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x6000101 = asm.x6000101_;
    };;
    asm.x6000101 = function (arg0,arg1,arg2)
    {
        asm.x6000101_init.apply(this,arguments);
        return asm.x6000101_.apply(this,arguments);
    };;
    asm.x6000101_ = function IsDefined(arg0,arg1,arg2)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.NotImplementedException"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x6000125,[null]);
    };
    /* System.Boolean RuntimeType.get_IsInterface()*/
    asm.x6000102 = function get_IsInterface(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Boolean IsInterface*/
        /* IL_0C: call Boolean op_Explicit(Braille.JavaScript.Boolean)*/
        /* IL_11: stloc.0 */
        loc0 = (arg0.ctor.IsInterface ? 1 : 0);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* System.Boolean RuntimeType.get_IsGenericType()*/
    asm.x6000103 = function get_IsGenericType(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Boolean IsGenericTypeDefinition*/
        /* IL_0C: call Boolean op_Explicit(Braille.JavaScript.Boolean)*/
        /* IL_11: stloc.0 */
        loc0 = (arg0.ctor.IsGenericTypeDefinition ? 1 : 0);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* System.Boolean RuntimeType.get_IsGenericTypeDefinition()*/
    asm.x6000104_init = function ()
    {
        ((asm0)["System.RuntimeType+constructor"]().init)();
        asm.x6000104 = asm.x6000104_;
    };;
    asm.x6000104 = function (arg0)
    {
        asm.x6000104_init.apply(this,arguments);
        return asm.x6000104_.apply(this,arguments);
    };;
    asm.x6000104_ = function get_IsGenericTypeDefinition(arg0)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = (asm0)["System.RuntimeType+constructor"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld constructor ctor*/
                /* IL_07: ldfld Boolean IsGenericTypeDefinition*/
                /* IL_0C: call Boolean op_Explicit(Braille.JavaScript.Boolean)*/
                /* IL_11: stloc.3 */
                loc3 = (arg0.ctor.IsGenericTypeDefinition ? 1 : 0);
                /* IL_12: ldloc.3 */
                /* IL_13: brtrue.s IL_19*/
                
                if (loc3){
                    __pos__ = 0x19;
                    continue;
                }
                /* IL_15: ldc.i4.0 */
                /* IL_16: stloc.2 */
                loc2 = (0|0);
                /* IL_17: br.s IL_6B*/
                __pos__ = 0x6B;
                continue;
                case 0x19:
                /* IL_19: ldarg.0 */
                /* IL_1A: ldfld constructor ctor*/
                /* IL_1F: ldfld Object GenericArguments*/
                /* IL_24: ldarg.0 */
                /* IL_25: ldfld constructor ctor*/
                /* IL_2A: ldfld String MetadataName*/
                /* IL_2F: call String op_Explicit(Braille.JavaScript.String)*/
                /* IL_34: call Object ObjectLookup(System.Object, System.String)*/
                /* IL_39: ldc.i4.0 */
                /* IL_3A: call Object ArrayLookup(System.Object, System.Int32)*/
                /* IL_3F: stloc.0 */
                loc0 = ((arg0.ctor.GenericArguments[BLR.new_string(arg0.ctor.MetadataName).jsstr])[(0|0)]);
                /* IL_40: ldloc.0 */
                /* IL_41: call constructor UnsafeCast[System.RuntimeType+constructor](System.Object)*/
                /* IL_46: stloc.1 */
                loc1 = loc0;
                /* IL_47: ldloc.1 */
                /* IL_48: ldfld Object FullName*/
                /* IL_4D: call String FromJsString(System.Object)*/
                /* IL_52: ldstr Braille.Runtime.UnboundGenericParameter*/
                /* IL_57: call Boolean op_Equality(System.String, System.String)*/
                /* IL_5C: ldc.i4.0 */
                /* IL_5E: ceq */
                /* IL_5F: stloc.3 */
                loc3 = ((asm0.x60001c6(BLR.new_string(loc1.FullName),BLR.new_string("Braille.Runtime.UnboundGenericParameter")) === (0|0)) ? (1) : (0));
                /* IL_60: ldloc.3 */
                /* IL_61: brtrue.s IL_67*/
                
                if (loc3){
                    __pos__ = 0x67;
                    continue;
                }
                /* IL_63: ldc.i4.1 */
                /* IL_64: stloc.2 */
                loc2 = (1|0);
                /* IL_65: br.s IL_6B*/
                __pos__ = 0x6B;
                continue;
                case 0x67:
                /* IL_67: ldc.i4.0 */
                /* IL_68: stloc.2 */
                loc2 = (0|0);
                case 0x6B:
                /* IL_6B: ldloc.2 */
                /* IL_6C: ret */
                return loc2;
            }
        }
    };
    /* System.Type RuntimeType.MakeGenericType(Type[])*/
    asm.x6000105_init = function ()
    {
        ((asm0)["System.InvalidOperationException"]().init)();
        ((asm0)["System.RuntimeType"]().init)();
        ((asm0)["System.RuntimeType+constructor"]().init)();
        asm.x6000105 = asm.x6000105_;
    };;
    asm.x6000105 = function (arg0,arg1)
    {
        asm.x6000105_init.apply(this,arguments);
        return asm.x6000105_.apply(this,arguments);
    };;
    asm.x6000105_ = function MakeGenericType(arg0,arg1)
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc5;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        t0 = (asm0)["System.InvalidOperationException"]();
        t1 = (asm0)["System.RuntimeType"]();
        t2 = (asm0)["System.RuntimeType+constructor"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: callvirt Boolean get_IsGenericTypeDefinition()*/
                /* IL_07: stloc.s 5*/
                loc5 = ((arg0.vtable)["asm0.x60000e9"]())(arg0);
                /* IL_09: ldloc.s 5*/
                /* IL_0B: brtrue.s IL_13*/
                
                if (loc5){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0D: newobj Void .ctor()*/
                /* IL_12: throw */
                throw BLR.newobj(t0,asm0.x6000135,[null]);
                case 0x13:
                /* IL_13: call Array New()*/
                /* IL_18: stloc.0 */
                loc0 = [];
                /* IL_19: ldc.i4.0 */
                /* IL_1A: stloc.1 */
                loc1 = (0|0);
                /* IL_1B: br.s IL_36*/
                __pos__ = 0x36;
                continue;
                case 0x1D:
                /* IL_1D: ldloc.0 */
                /* IL_1E: ldloc.1 */
                /* IL_1F: ldarg.1 */
                /* IL_20: ldloc.1 */
                /* IL_21: ldelem.ref */
                /* IL_22: castclass System.RuntimeType*/
                /* IL_27: ldfld constructor ctor*/
                /* IL_2C: callvirt Void set_Item(System.Int32, System.Object)*/
                loc0[loc1] = BLR.cast_class(BLR.ldelem_ref(arg1,loc1),t1).ctor;
                /* IL_31: nop */
                
                /* IL_32: ldloc.1 */
                /* IL_33: ldc.i4.1 */
                /* IL_34: add */
                /* IL_35: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x36:
                /* IL_36: ldloc.1 */
                /* IL_37: ldarg.1 */
                /* IL_38: ldlen */
                /* IL_39: conv.i4 */
                /* IL_3B: clt */
                /* IL_3C: stloc.s 5*/
                loc5 = ((loc1 < (arg1.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_3E: ldloc.s 5*/
                /* IL_40: brtrue.s IL_1D*/
                
                if (loc5){
                    __pos__ = 0x1D;
                    continue;
                }
                /* IL_42: ldarg.0 */
                /* IL_43: ldfld constructor ctor*/
                /* IL_48: ldfld jsAsm Assembly*/
                /* IL_4D: ldarg.0 */
                /* IL_4E: callvirt String get_FullName()*/
                /* IL_53: call Object ObjectLookup(System.Object, System.String)*/
                /* IL_58: stloc.2 */
                loc2 = (arg0.ctor.Assembly[((arg0.vtable)["asm0.x60000e0"]())(arg0).jsstr]);
                /* IL_59: ldloc.2 */
                /* IL_5A: ldnull */
                /* IL_5B: ldloc.0 */
                /* IL_5C: call Object Apply(System.Object, System.Object, Braille.JavaScript.Array)*/
                /* IL_61: stloc.3 */
                loc3 = (loc2.apply(null, loc0));
                /* IL_62: ldloc.3 */
                /* IL_63: call constructor UnsafeCast[System.RuntimeType+constructor](System.Object)*/
                /* IL_68: call Type GetInstance(System.RuntimeType+constructor)*/
                /* IL_6D: stloc.s 4*/
                loc4 = asm0.x60000f7(loc3);
                /* IL_71: ldloc.s 4*/
                /* IL_73: ret */
                return loc4;
            }
        }
    };
    /* System.Type[] RuntimeType.GetGenericArguments()*/
    asm.x6000106_init = function ()
    {
        ((asm0)["System.RuntimeType+constructor"]().init)();
        asm.x6000106 = asm.x6000106_;
    };;
    asm.x6000106 = function (arg0)
    {
        asm.x6000106_init.apply(this,arguments);
        return asm.x6000106_.apply(this,arguments);
    };;
    asm.x6000106_ = function GetGenericArguments(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc4;
        var loc3;
        t0 = (asm0)["System.RuntimeType+constructor"]();
        t1 = (asm0)["System.Type"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld constructor ctor*/
                /* IL_07: ldfld Object GenericArguments*/
                /* IL_0C: ldarg.0 */
                /* IL_0D: ldfld constructor ctor*/
                /* IL_12: ldfld String MetadataName*/
                /* IL_17: call String op_Explicit(Braille.JavaScript.String)*/
                /* IL_1C: call Object ObjectLookup(System.Object, System.String)*/
                /* IL_21: call constructor[] FromJsArray[System.RuntimeType+constructor](System.Object)*/
                /* IL_26: stloc.0 */
                loc0 = (asm0.x6000171((asm0)["System.RuntimeType+constructor"]()))((arg0.ctor.GenericArguments[BLR.new_string(arg0.ctor.MetadataName).jsstr]));
                /* IL_27: ldloc.0 */
                /* IL_28: ldlen */
                /* IL_29: conv.i4 */
                /* IL_2A: newarr System.Type*/
                /* IL_2F: stloc.1 */
                loc1 = BLR.new_array(t1,loc0.jsarr.length | (0|0));
                /* IL_30: ldc.i4.0 */
                /* IL_31: stloc.2 */
                loc2 = (0|0);
                /* IL_32: br.s IL_43*/
                __pos__ = 0x43;
                continue;
                case 0x34:
                /* IL_34: ldloc.1 */
                /* IL_35: ldloc.2 */
                /* IL_36: ldloc.0 */
                /* IL_37: ldloc.2 */
                /* IL_38: ldelem.ref */
                /* IL_39: call Type GetInstance(System.RuntimeType+constructor)*/
                /* IL_3E: stelem.ref */
                BLR.stelem_ref(loc1,loc2,asm0.x60000f7(BLR.ldelem_ref(loc0,loc2)));
                /* IL_3F: ldloc.2 */
                /* IL_40: ldc.i4.1 */
                /* IL_41: add */
                /* IL_42: stloc.2 */
                loc2 = (loc2 + (1|0)) | (0|0);
                case 0x43:
                /* IL_43: ldloc.2 */
                /* IL_44: ldloc.0 */
                /* IL_45: ldlen */
                /* IL_46: conv.i4 */
                /* IL_48: clt */
                /* IL_49: stloc.s 4*/
                loc4 = ((loc2 < (loc0.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_4B: ldloc.s 4*/
                /* IL_4D: brtrue.s IL_34*/
                
                if (loc4){
                    __pos__ = 0x34;
                    continue;
                }
                /* IL_4F: ldloc.1 */
                /* IL_50: stloc.3 */
                loc3 = loc1;
                /* IL_53: ldloc.3 */
                /* IL_54: ret */
                return loc3;
            }
        }
    };
    /* System.Type RuntimeType.get_BaseType()*/
    asm.x6000107 = function get_BaseType(arg0)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Boolean"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld constructor ctor*/
                /* IL_07: ldfld constructor BaseType*/
                /* IL_0C: call Boolean UnsafeCast[System.Boolean](System.Object)*/
                /* IL_11: stloc.1 */
                loc1 = arg0.ctor.BaseType;
                /* IL_12: ldloc.1 */
                /* IL_13: brtrue.s IL_19*/
                
                if (loc1){
                    __pos__ = 0x19;
                    continue;
                }
                /* IL_15: ldnull */
                /* IL_16: stloc.0 */
                loc0 = null;
                /* IL_17: br.s IL_2C*/
                __pos__ = 0x2C;
                continue;
                case 0x19:
                /* IL_19: ldarg.0 */
                /* IL_1A: ldfld constructor ctor*/
                /* IL_1F: ldfld constructor BaseType*/
                /* IL_24: call Type GetInstance(System.RuntimeType+constructor)*/
                /* IL_29: stloc.0 */
                loc0 = asm0.x60000f7(arg0.ctor.BaseType);
                case 0x2C:
                /* IL_2C: ldloc.0 */
                /* IL_2D: ret */
                return loc0;
            }
        }
    };;
    /* System.Type[] RuntimeType.GetInterfaces()*/
    asm.x6000108_init = function ()
    {
        ((asm0)["System.RuntimeType+constructor"]().init)();
        asm.x6000108 = asm.x6000108_;
    };;
    asm.x6000108 = function (arg0)
    {
        asm.x6000108_init.apply(this,arguments);
        return asm.x6000108_.apply(this,arguments);
    };;
    asm.x6000108_ = function GetInterfaces(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc4;
        var loc3;
        t0 = (asm0)["System.RuntimeType+constructor"]();
        t1 = (asm0)["System.Type"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld constructor ctor*/
                /* IL_07: ldfld Object Interfaces*/
                /* IL_0C: call constructor[] FromJsArray[System.RuntimeType+constructor](System.Object)*/
                /* IL_11: stloc.0 */
                loc0 = (asm0.x6000171((asm0)["System.RuntimeType+constructor"]()))(arg0.ctor.Interfaces);
                /* IL_12: ldloc.0 */
                /* IL_13: ldlen */
                /* IL_14: conv.i4 */
                /* IL_15: newarr System.Type*/
                /* IL_1A: stloc.1 */
                loc1 = BLR.new_array(t1,loc0.jsarr.length | (0|0));
                /* IL_1B: ldc.i4.0 */
                /* IL_1C: stloc.2 */
                loc2 = (0|0);
                /* IL_1D: br.s IL_2E*/
                __pos__ = 0x2E;
                continue;
                case 0x1F:
                /* IL_1F: ldloc.1 */
                /* IL_20: ldloc.2 */
                /* IL_21: ldloc.0 */
                /* IL_22: ldloc.2 */
                /* IL_23: ldelem.ref */
                /* IL_24: call Type GetInstance(System.RuntimeType+constructor)*/
                /* IL_29: stelem.ref */
                BLR.stelem_ref(loc1,loc2,asm0.x60000f7(BLR.ldelem_ref(loc0,loc2)));
                /* IL_2A: ldloc.2 */
                /* IL_2B: ldc.i4.1 */
                /* IL_2C: add */
                /* IL_2D: stloc.2 */
                loc2 = (loc2 + (1|0)) | (0|0);
                case 0x2E:
                /* IL_2E: ldloc.2 */
                /* IL_2F: ldloc.0 */
                /* IL_30: ldlen */
                /* IL_31: conv.i4 */
                /* IL_33: clt */
                /* IL_34: stloc.s 4*/
                loc4 = ((loc2 < (loc0.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_36: ldloc.s 4*/
                /* IL_38: brtrue.s IL_1F*/
                
                if (loc4){
                    __pos__ = 0x1F;
                    continue;
                }
                /* IL_3A: ldloc.1 */
                /* IL_3B: stloc.3 */
                loc3 = loc1;
                /* IL_3E: ldloc.3 */
                /* IL_3F: ret */
                return loc3;
            }
        }
    };
    /* System.Boolean RuntimeType.IsAssignableFrom(Type)*/
    asm.x6000109 = function IsAssignableFrom(arg0,arg1)
    {
        var t0;
        var st_1C;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Object"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.3 */
                loc3 = ((((arg1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.3 */
                /* IL_0A: brtrue.s IL_13*/
                
                if (loc3){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0C: ldc.i4.0 */
                /* IL_0D: stloc.2 */
                loc2 = (0|0);
                /* IL_0E: br IL_9E*/
                __pos__ = 0x9E;
                continue;
                case 0x13:
                /* IL_13: ldarg.0 */
                /* IL_14: ldarg.1 */
                /* IL_15: callvirt Boolean Equals(System.Object)*/
                /* IL_1A: ldc.i4.0 */
                /* IL_1C: ceq */
                /* IL_1D: stloc.3 */
                loc3 = ((((arg0.vtable)["asm0.x6000008"]())(arg0,arg1) === (0|0)) ? (1) : (0));
                /* IL_1E: ldloc.3 */
                /* IL_1F: brtrue.s IL_25*/
                
                if (loc3){
                    __pos__ = 0x25;
                    continue;
                }
                /* IL_21: ldc.i4.1 */
                /* IL_22: stloc.2 */
                loc2 = (1|0);
                /* IL_23: br.s IL_9E*/
                __pos__ = 0x9E;
                continue;
                case 0x25:
                /* IL_25: ldarg.1 */
                /* IL_26: ldarg.0 */
                /* IL_27: callvirt Boolean IsSubclassOf(System.Type)*/
                /* IL_2C: ldc.i4.0 */
                /* IL_2E: ceq */
                /* IL_2F: stloc.3 */
                loc3 = ((((arg1.vtable)["asm0.x60000e2"]())(arg1,arg0) === (0|0)) ? (1) : (0));
                /* IL_30: ldloc.3 */
                /* IL_31: brtrue.s IL_37*/
                
                if (loc3){
                    __pos__ = 0x37;
                    continue;
                }
                /* IL_33: ldc.i4.1 */
                /* IL_34: stloc.2 */
                loc2 = (1|0);
                /* IL_35: br.s IL_9E*/
                __pos__ = 0x9E;
                continue;
                case 0x37:
                /* IL_37: ldarg.1 */
                /* IL_38: callvirt Boolean get_IsInterface()*/
                /* IL_3D: brfalse.s IL_54*/
                
                if ((!(((arg1.vtable)["asm0.x60000e8"]())(arg1)))){
                    __pos__ = 0x54;
                    continue;
                }
                /* IL_3F: ldarg.0 */
                /* IL_40: ldtoken System.Object*/
                /* IL_45: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_4A: callvirt Boolean Equals(System.Object)*/
                /* IL_4F: ldc.i4.0 */
                /* IL_51: ceq */
                st_1C = ((((arg0.vtable)["asm0.x6000008"]())(arg0,asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))) === (0|0)) ? (1) : (0));
                /* IL_52: br.s IL_55*/
                __pos__ = 0x55;
                continue;
                case 0x54:
                /* IL_54: ldc.i4.1 */
                st_1C = (1|0);
                case 0x55:
                /* IL_55: nop */
                
                /* IL_56: stloc.3 */
                loc3 = st_1C;
                /* IL_57: ldloc.3 */
                /* IL_58: brtrue.s IL_5E*/
                
                if (loc3){
                    __pos__ = 0x5E;
                    continue;
                }
                /* IL_5A: ldc.i4.1 */
                /* IL_5B: stloc.2 */
                loc2 = (1|0);
                /* IL_5C: br.s IL_9E*/
                __pos__ = 0x9E;
                continue;
                case 0x5E:
                /* IL_5E: ldarg.0 */
                /* IL_5F: callvirt Boolean get_IsInterface()*/
                /* IL_64: ldc.i4.0 */
                /* IL_66: ceq */
                /* IL_67: stloc.3 */
                loc3 = ((((arg0.vtable)["asm0.x60000e8"]())(arg0) === (0|0)) ? (1) : (0));
                /* IL_68: ldloc.3 */
                /* IL_69: brtrue.s IL_9A*/
                
                if (loc3){
                    __pos__ = 0x9A;
                    continue;
                }
                /* IL_6B: nop */
                
                /* IL_6C: ldarg.1 */
                /* IL_6D: callvirt Type[] GetInterfaces()*/
                /* IL_72: stloc.0 */
                loc0 = ((arg1.vtable)["asm0.x60000eb"]())(arg1);
                /* IL_73: ldc.i4.0 */
                /* IL_74: stloc.1 */
                loc1 = (0|0);
                /* IL_75: br.s IL_8F*/
                __pos__ = 0x8F;
                continue;
                case 0x77:
                /* IL_77: ldarg.0 */
                /* IL_78: ldloc.0 */
                /* IL_79: ldloc.1 */
                /* IL_7A: ldelem.ref */
                /* IL_7B: callvirt Boolean IsAssignableFrom(System.Type)*/
                /* IL_80: ldc.i4.0 */
                /* IL_82: ceq */
                /* IL_83: stloc.3 */
                loc3 = ((((arg0.vtable)["asm0.x60000ed"]())(arg0,BLR.ldelem_ref(loc0,loc1)) === (0|0)) ? (1) : (0));
                /* IL_84: ldloc.3 */
                /* IL_85: brtrue.s IL_8B*/
                
                if (loc3){
                    __pos__ = 0x8B;
                    continue;
                }
                /* IL_87: ldc.i4.1 */
                /* IL_88: stloc.2 */
                loc2 = (1|0);
                /* IL_89: br.s IL_9E*/
                __pos__ = 0x9E;
                continue;
                case 0x8B:
                /* IL_8B: ldloc.1 */
                /* IL_8C: ldc.i4.1 */
                /* IL_8D: add */
                /* IL_8E: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x8F:
                /* IL_8F: ldloc.1 */
                /* IL_90: ldloc.0 */
                /* IL_91: ldlen */
                /* IL_92: conv.i4 */
                /* IL_94: clt */
                /* IL_95: stloc.3 */
                loc3 = ((loc1 < (loc0.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_96: ldloc.3 */
                /* IL_97: brtrue.s IL_77*/
                
                if (loc3){
                    __pos__ = 0x77;
                    continue;
                }
                /* IL_99: nop */
                
                case 0x9A:
                /* IL_9A: ldc.i4.0 */
                /* IL_9B: stloc.2 */
                loc2 = (0|0);
                case 0x9E:
                /* IL_9E: ldloc.2 */
                /* IL_9F: ret */
                return loc2;
            }
        }
    };;
    /* static System.String RuntimeType.GetName(String)*/
    asm.x600010a = 
            function (s) {
                var idx = s.jsstr.lastIndexOf('.');
                return BLR.new_string(s.jsstr.substring(idx + 1));
            }
            ;;
    /* System.String RuntimeType.get_Name()*/
    asm.x600010b = function get_Name(arg0)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc2;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Array"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldtoken System.Array*/
                /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_0C: callvirt Boolean IsSubclassOf(System.Type)*/
                /* IL_11: ldc.i4.0 */
                /* IL_13: ceq */
                /* IL_14: stloc.2 */
                loc2 = ((((arg0.vtable)["asm0.x60000e2"]())(arg0,asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))) === (0|0)) ? (1) : (0));
                /* IL_15: ldloc.2 */
                /* IL_16: brtrue.s IL_31*/
                
                if (loc2){
                    __pos__ = 0x31;
                    continue;
                }
                /* IL_18: nop */
                
                /* IL_19: ldarg.0 */
                /* IL_1A: callvirt Type GetElementType()*/
                /* IL_1F: callvirt String get_Name()*/
                /* IL_24: ldstr []*/
                /* IL_29: call String Concat(System.String, System.String)*/
                /* IL_2E: stloc.1 */
                loc1 = asm0.x60001bb((((((arg0.vtable)["asm0.x60000f0"]())(arg0).vtable)["asm0.x600003e"])())(((arg0.vtable)["asm0.x60000f0"]())(arg0)),BLR.new_string("[]"));
                /* IL_2F: br.s IL_4B*/
                __pos__ = 0x4B;
                continue;
                case 0x31:
                /* IL_31: ldarg.0 */
                /* IL_32: ldfld constructor ctor*/
                /* IL_37: ldfld Object FullName*/
                /* IL_3C: call String FromJsString(System.Object)*/
                /* IL_41: stloc.0 */
                loc0 = BLR.new_string(arg0.ctor.FullName);
                /* IL_42: ldloc.0 */
                /* IL_43: call String GetName(System.String)*/
                /* IL_48: stloc.1 */
                loc1 = asm0.x600010a(loc0);
                case 0x4B:
                /* IL_4B: ldloc.1 */
                /* IL_4C: ret */
                return loc1;
            }
        }
    };;
    /* System.Boolean RuntimeType.get_IsValueType()*/
    asm.x600010c = function get_IsValueType(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Boolean IsValueType*/
        /* IL_0C: call Boolean op_Explicit(Braille.JavaScript.Boolean)*/
        /* IL_11: stloc.0 */
        loc0 = (arg0.ctor.IsValueType ? 1 : 0);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* System.Boolean RuntimeType.get_IsPrimitive()*/
    asm.x600010d = function get_IsPrimitive(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Boolean IsPrimitive*/
        /* IL_0C: call Boolean op_Explicit(Braille.JavaScript.Boolean)*/
        /* IL_11: stloc.0 */
        loc0 = (arg0.ctor.IsPrimitive ? 1 : 0);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* System.Type RuntimeType.GetElementType()*/
    asm.x600010e = function GetElementType(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Array"]();
        t1 = (asm0)["System.Exception"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldtoken System.Array*/
                /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_0C: callvirt Boolean IsSubclassOf(System.Type)*/
                /* IL_11: stloc.1 */
                loc1 = ((arg0.vtable)["asm0.x60000e2"]())(arg0,asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)));
                /* IL_12: ldloc.1 */
                /* IL_13: brtrue.s IL_20*/
                
                if (loc1){
                    __pos__ = 0x20;
                    continue;
                }
                /* IL_15: ldstr Invalid operation*/
                /* IL_1A: newobj Void .ctor(System.String)*/
                /* IL_1F: throw */
                throw BLR.newobj(t1,asm0.x60000a5,[null, BLR.new_string("Invalid operation")]);
                case 0x20:
                /* IL_20: ldarg.0 */
                /* IL_21: callvirt Type[] GetGenericArguments()*/
                /* IL_26: ldc.i4.0 */
                /* IL_27: ldelem.ref */
                /* IL_28: stloc.0 */
                loc0 = BLR.ldelem_ref(((arg0.vtable)["asm0.x60000ea"]())(arg0),(0|0));
                /* IL_2B: ldloc.0 */
                /* IL_2C: ret */
                return loc0;
            }
        }
    };;
    /* System.Reflection.MethodInfo[] RuntimeType.GetMethods()*/
    asm.x600010f_init = function ()
    {
        ((asm0)["System.Reflection.MethodInfo"]().init)();
        ((asm0)["Braille.JavaScript.Array"]().init)();
        asm.x600010f = asm.x600010f_;
    };;
    asm.x600010f = function (arg0)
    {
        asm.x600010f_init.apply(this,arguments);
        return asm.x600010f_.apply(this,arguments);
    };;
    asm.x600010f_ = function GetMethods(arg0)
    {
        var t0;
        var t1;
        var st_03;
        var st_04;
        var st_05;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        var loc7;
        var loc6;
        t0 = (asm0)["System.Reflection.MethodInfo"]();
        t1 = (asm0)["Braille.JavaScript.Array"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: callvirt Type get_BaseType()*/
                /* IL_07: brtrue.s IL_11*/
                
                if (((arg0.vtable)["asm0.x60000e5"]())(arg0)){
                    __pos__ = 0x11;
                    continue;
                }
                /* IL_09: ldc.i4.0 */
                /* IL_0A: newarr System.Reflection.MethodInfo*/
                st_05 = BLR.new_array(t0,(0|0));
                /* IL_0F: br.s IL_1C*/
                __pos__ = 0x1C;
                continue;
                case 0x11:
                /* IL_11: ldarg.0 */
                st_03 = arg0;
                /* IL_12: callvirt Type get_BaseType()*/
                st_04 = ((st_03.vtable)["asm0.x60000e5"]())(st_03);
                /* IL_17: callvirt MethodInfo[] GetMethods()*/
                st_05 = ((st_04.vtable)["asm0.x60000f1"]())(st_04);
                case 0x1C:
                /* IL_1C: nop */
                
                /* IL_1D: stloc.0 */
                loc0 = st_05;
                /* IL_1E: ldloc.0 */
                /* IL_1F: ldlen */
                /* IL_20: conv.i4 */
                /* IL_21: ldarg.0 */
                /* IL_22: ldfld constructor ctor*/
                /* IL_27: ldfld Array Methods*/
                /* IL_2C: callvirt Int32 get_Length()*/
                /* IL_31: add */
                /* IL_32: stloc.1 */
                loc1 = ((loc0.jsarr.length | (0|0)) + arg0.ctor.Methods.length) | (0|0);
                /* IL_33: ldarg.0 */
                /* IL_34: ldfld constructor ctor*/
                /* IL_39: ldfld Array Methods*/
                /* IL_3E: callvirt Int32 get_Length()*/
                /* IL_43: stloc.2 */
                loc2 = arg0.ctor.Methods.length;
                /* IL_44: ldloc.0 */
                /* IL_45: ldlen */
                /* IL_46: conv.i4 */
                /* IL_47: stloc.3 */
                loc3 = loc0.jsarr.length | (0|0);
                /* IL_48: ldloc.1 */
                /* IL_49: newarr System.Reflection.MethodInfo*/
                /* IL_4E: stloc.s 4*/
                loc4 = BLR.new_array(t0,loc1);
                /* IL_50: ldc.i4.0 */
                /* IL_51: stloc.s 5*/
                loc5 = (0|0);
                /* IL_53: br.s IL_7E*/
                __pos__ = 0x7E;
                continue;
                case 0x55:
                /* IL_55: nop */
                
                /* IL_56: ldloc.s 4*/
                /* IL_58: ldloc.s 5*/
                /* IL_5A: ldarg.0 */
                /* IL_5B: ldfld constructor ctor*/
                /* IL_60: ldfld Array Methods*/
                /* IL_65: ldloc.s 5*/
                /* IL_67: callvirt Object get_Item(System.Int32)*/
                /* IL_6C: call Array UnsafeCast[Braille.JavaScript.Array](System.Object)*/
                /* IL_71: call MethodInfo GetInstance(Braille.JavaScript.Array)*/
                /* IL_76: stelem.ref */
                BLR.stelem_ref(loc4,loc5,asm0.x6000041(arg0.ctor.Methods[loc5]));
                /* IL_77: nop */
                
                /* IL_78: ldloc.s 5*/
                /* IL_7A: ldc.i4.1 */
                /* IL_7B: add */
                /* IL_7C: stloc.s 5*/
                loc5 = (loc5 + (1|0)) | (0|0);
                case 0x7E:
                /* IL_7E: ldloc.s 5*/
                /* IL_80: ldloc.2 */
                /* IL_82: clt */
                /* IL_83: stloc.s 7*/
                loc7 = ((loc5 < loc2) ? (1) : (0));
                /* IL_85: ldloc.s 7*/
                /* IL_87: brtrue.s IL_55*/
                
                if (loc7){
                    __pos__ = 0x55;
                    continue;
                }
                /* IL_89: ldc.i4.0 */
                /* IL_8A: stloc.s 5*/
                loc5 = (0|0);
                /* IL_8C: br.s IL_A1*/
                __pos__ = 0xA1;
                continue;
                case 0x8E:
                /* IL_8E: nop */
                
                /* IL_8F: ldloc.s 4*/
                /* IL_91: ldloc.s 5*/
                /* IL_93: ldloc.2 */
                /* IL_94: add */
                /* IL_95: ldloc.0 */
                /* IL_96: ldloc.s 5*/
                /* IL_98: ldelem.ref */
                /* IL_99: stelem.ref */
                BLR.stelem_ref(loc4,(loc5 + loc2) | (0|0),BLR.ldelem_ref(loc0,loc5));
                /* IL_9A: nop */
                
                /* IL_9B: ldloc.s 5*/
                /* IL_9D: ldc.i4.1 */
                /* IL_9E: add */
                /* IL_9F: stloc.s 5*/
                loc5 = (loc5 + (1|0)) | (0|0);
                case 0xA1:
                /* IL_A1: ldloc.s 5*/
                /* IL_A3: ldloc.3 */
                /* IL_A5: clt */
                /* IL_A6: stloc.s 7*/
                loc7 = ((loc5 < loc3) ? (1) : (0));
                /* IL_A8: ldloc.s 7*/
                /* IL_AA: brtrue.s IL_8E*/
                
                if (loc7){
                    __pos__ = 0x8E;
                    continue;
                }
                /* IL_AC: ldloc.s 4*/
                /* IL_AE: stloc.s 6*/
                loc6 = loc4;
                /* IL_B2: ldloc.s 6*/
                /* IL_B4: ret */
                return loc6;
            }
        }
    };
    /* System.Boolean RuntimeType.IsInstanceOfType(Object)*/
    asm.x6000111 = function IsInstanceOfType(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.1 */
        /* IL_02: ldarg.0 */
        /* IL_03: ldfld constructor ctor*/
        /* IL_08: call Boolean IsInstanceOfTypeImpl(System.Object, System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (arg0.ctor.IsInst(arg1) ? 1: 0);
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /*  RuntimeType..ctor(constructor)*/
    asm.x60000f5 = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x60000f3(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld constructor ctor*/
        arg0.ctor = arg1;
        /* IL_0F: ldarg.1 */
        /* IL_10: call Void init(System.RuntimeType+constructor)*/
        arg1.init();
        /* IL_15: nop */
        /* IL_16: nop */
        /* IL_17: ret */
        return ;
    };;
    /*  constructor..ctor()*/
    asm.x6000112 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Object RuntimeTypeHandle.get_Value()*/
    asm.x6000113 = function get_Value(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Object value*/
        /* IL_07: stloc.0 */
        loc0 = arg0.r().value;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* System.String SByte.ToString()*/
    asm.x6000114 = function ToString(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.SByte"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i1 */
        /* IL_03: box System.SByte*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x60000d7({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 SByte.CompareTo(Object)*/
    asm.x6000115 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.SByte*/
        /* IL_08: call Int32 CompareTo(System.SByte)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x6000116(arg0,BLR.unbox_any(arg1,(asm0)["System.SByte"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 SByte.CompareTo(SByte)*/
    asm.x6000116 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i1 */
                /* IL_03: stloc.0 */
                loc0 = arg0.r();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: clt */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((((loc0 < arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: ldarg.1 */
                /* IL_16: cgt */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.2 */
                loc2 = ((((loc0 > arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.2 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc2){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: stloc.1 */
                loc1 = (0|0);
                case 0x26:
                /* IL_26: ldloc.1 */
                /* IL_27: ret */
                return loc1;
            }
        }
    };;
    /* System.Boolean SByte.Equals(SByte)*/
    asm.x6000117 = function Equals(arg0,arg1)
    {
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i1 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_04: ldarg.1 */
        /* IL_05: stloc.1 */
        loc1 = arg1;
        /* IL_06: ldloc.0 */
        /* IL_07: ldloc.1 */
        /* IL_09: ceq */
        /* IL_0A: stloc.2 */
        loc2 = ((loc0 === loc1) ? (1) : (0));
        /* IL_0D: ldloc.2 */
        /* IL_0E: ret */
        return loc2;
    };;
    /* System.Boolean SByte.Equals(Object)*/
    asm.x6000118 = function Equals(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.SByte"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.SByte*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.1 */
                loc1 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.1 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc1){
                    __pos__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.0 */
                loc0 = (0|0);
                /* IL_10: br.s IL_21*/
                __pos__ = 0x21;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldarg.1 */
                /* IL_14: unbox.any System.SByte*/
                /* IL_19: call Boolean Equals(System.SByte)*/
                /* IL_1E: stloc.0 */
                loc0 = asm0.x6000117(arg0,BLR.unbox_any(arg1,t0));
                case 0x21:
                /* IL_21: ldloc.0 */
                /* IL_22: ret */
                return loc0;
            }
        }
    };;
    /* System.Int32 SByte.GetHashCode()*/
    asm.x6000119 = function GetHashCode(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i1 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* System.String Single.ToString()*/
    asm.x600011a = function ToString(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.Single"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.r4 */
        /* IL_03: box System.Single*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x60000d7({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 Single.CompareTo(Object)*/
    asm.x600011b = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.Single*/
        /* IL_08: call Int32 CompareTo(System.Single)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x600011c(arg0,BLR.unbox_any(arg1,(asm0)["System.Single"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 Single.CompareTo(Single)*/
    asm.x600011c = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.r4 */
                /* IL_03: stloc.0 */
                loc0 = arg0.r();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: clt */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((((loc0 < arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: ldarg.1 */
                /* IL_16: cgt */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.2 */
                loc2 = ((((loc0 > arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.2 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc2){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: stloc.1 */
                loc1 = (0|0);
                case 0x26:
                /* IL_26: ldloc.1 */
                /* IL_27: ret */
                return loc1;
            }
        }
    };;
    /*  InAttribute..ctor()*/
    asm.x600011d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  OutAttribute..ctor()*/
    asm.x600011e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  Debugger..ctor()*/
    asm.x6000124 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  NotImplementedException..ctor()*/
    asm.x6000125 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x60000a4(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  NotSupportedException..ctor()*/
    asm.x6000126 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation not supported*/
        /* IL_06: call Void .ctor(System.String)*/
        asm0.x60000a5(arg0,BLR.new_string("Operation not supported"));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    /*  NotSupportedException..ctor(String)*/
    asm.x6000127 = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        asm0.x60000a5(arg0,arg1);
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: ret */
        return ;
    };;
    /* static System.Int64 Math.Max(Int64,Int64)*/
    asm.x600012c = function Max(arg0,arg1)
    {
        var st_02;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldarg.1 */
                /* IL_03: bgt.s IL_08*/
                
                if (asm0.Int64_GreaterThan(arg0,arg1)){
                    __pos__ = 0x8;
                    continue;
                }
                /* IL_05: ldarg.1 */
                st_02 = arg1;
                /* IL_06: br.s IL_09*/
                __pos__ = 0x9;
                continue;
                case 0x8:
                /* IL_08: ldarg.0 */
                st_02 = arg0;
                case 0x9:
                /* IL_09: nop */
                
                /* IL_0A: stloc.0 */
                loc0 = st_02;
                /* IL_0D: ldloc.0 */
                /* IL_0E: ret */
                return loc0;
            }
        }
    };;
    /* static System.Int64 Math.Min(Int64,Int64)*/
    asm.x6000130 = function Min(arg0,arg1)
    {
        var st_02;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldarg.1 */
                /* IL_03: blt.s IL_08*/
                
                if (asm0.Int64_LessThan(arg0,arg1)){
                    __pos__ = 0x8;
                    continue;
                }
                /* IL_05: ldarg.1 */
                st_02 = arg1;
                /* IL_06: br.s IL_09*/
                __pos__ = 0x9;
                continue;
                case 0x8:
                /* IL_08: ldarg.0 */
                st_02 = arg0;
                case 0x9:
                /* IL_09: nop */
                
                /* IL_0A: stloc.0 */
                loc0 = st_02;
                /* IL_0D: ldloc.0 */
                /* IL_0E: ret */
                return loc0;
            }
        }
    };;
    /*  Math..ctor()*/
    asm.x6000133 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  InvalidCastException..ctor()*/
    asm.x6000134 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Cannot cast from source type to destination type.*/
        /* IL_06: call Void .ctor(System.String)*/
        asm0.x60000a5(arg0,BLR.new_string("Cannot cast from source type to destination type."));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    /*  InvalidOperationException..ctor()*/
    asm.x6000135 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation is not valid due to the current state of the object*/
        /* IL_06: call Void .ctor(System.String)*/
        asm0.x60000a5(arg0,BLR.new_string("Operation is not valid due to the current state of the object"));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    /*  InvalidOperationException..ctor(Exception)*/
    asm.x6000136 = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation is not valid due to the current state of the object*/
        /* IL_06: ldarg.1 */
        /* IL_07: call Void .ctor(System.String, System.Exception)*/
        asm0.x60000a6(arg0,BLR.new_string("Operation is not valid due to the current state of the object"),arg1);
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: nop */
        /* IL_0F: ret */
        return ;
    };;
    /*  InvalidOperationException..ctor(String,Exception)*/
    asm.x6000137 = function _ctor(arg0,arg1,arg2)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: ldarg.2 */
        /* IL_03: call Void .ctor(System.String, System.Exception)*/
        asm0.x60000a6(arg0,arg1,arg2);
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: nop */
        /* IL_0B: ret */
        return ;
    };;
    /*  InvalidOperationException..ctor(String)*/
    asm.x6000138 = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        asm0.x60000a5(arg0,arg1);
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: ret */
        return ;
    };;
    /* System.String Int64.ToString()*/
    asm.x6000139_init = function ()
    {
        ((asm0)["Braille.JavaScript.String"]().init)();
        asm.x6000139 = asm.x6000139_;
    };;
    asm.x6000139 = function (arg0)
    {
        asm.x6000139_init.apply(this,arguments);
        return asm.x6000139_.apply(this,arguments);
    };;
    asm.x6000139_ = function ToString(arg0)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc6;
        var loc4;
        var loc5;
        t0 = (asm0)["Braille.JavaScript.String"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i8 */
                /* IL_03: stloc.0 */
                loc0 = arg0.r();
                /* IL_04: ldc.i4.s 10*/
                /* IL_06: conv.i8 */
                /* IL_07: stloc.1 */
                loc1 = BLR.conv_i8((10|0));
                asm0.x600001f();
                /* IL_08: ldsfld String Emtpy*/
                /* IL_0D: stloc.2 */
                loc2 = t0.Emtpy;
                asm0.x600001f();
                /* IL_0E: ldsfld String Emtpy*/
                /* IL_13: stloc.3 */
                loc3 = t0.Emtpy;
                /* IL_14: ldloc.0 */
                /* IL_15: ldc.i4.0 */
                /* IL_16: conv.i8 */
                /* IL_18: clt */
                /* IL_19: ldc.i4.0 */
                /* IL_1B: ceq */
                /* IL_1C: stloc.s 6*/
                loc6 = ((asm0.Int64_LessThan(loc0,BLR.conv_i8((0|0))) === (0|0)) ? (1) : (0));
                /* IL_1E: ldloc.s 6*/
                /* IL_20: brtrue.s IL_2C*/
                
                if (loc6){
                    __pos__ = 0x2C;
                    continue;
                }
                /* IL_22: nop */
                
                /* IL_23: ldc.i4.s 45*/
                /* IL_25: call String FromCharCode(System.Char)*/
                /* IL_2A: stloc.3 */
                loc3 = String.fromCharCode((45|0));
                /* IL_2B: nop */
                
                case 0x2C:
                /* IL_2C: nop */
                
                /* IL_2D: ldloc.0 */
                /* IL_2E: ldloc.1 */
                /* IL_2F: rem */
                /* IL_30: stloc.s 4*/
                loc4 = asm0.Int64_Modulus(loc0,loc1);
                /* IL_32: ldloc.s 4*/
                /* IL_34: ldc.i4.0 */
                /* IL_35: conv.i8 */
                /* IL_37: clt */
                /* IL_38: ldc.i4.0 */
                /* IL_3A: ceq */
                /* IL_3B: stloc.s 6*/
                loc6 = ((asm0.Int64_LessThan(loc4,BLR.conv_i8((0|0))) === (0|0)) ? (1) : (0));
                /* IL_3D: ldloc.s 6*/
                /* IL_3F: brtrue.s IL_46*/
                
                if (loc6){
                    __pos__ = 0x46;
                    continue;
                }
                /* IL_41: ldloc.s 4*/
                /* IL_43: neg */
                /* IL_44: stloc.s 4*/
                loc4 = asm0.Int64_UnaryNegation(loc4);
                case 0x46:
                /* IL_46: ldloc.s 4*/
                /* IL_48: call String GetLowString(System.Int64)*/
                /* IL_4D: ldloc.2 */
                /* IL_4E: call String op_Addition(Braille.JavaScript.String, Braille.JavaScript.String)*/
                /* IL_53: stloc.2 */
                loc2 = loc4[0].toString() + loc2;
                /* IL_54: ldloc.0 */
                /* IL_55: ldloc.1 */
                /* IL_56: div */
                /* IL_57: stloc.0 */
                loc0 = asm0.Int64_Division(loc0,loc1);
                /* IL_58: nop */
                
                /* IL_59: ldloc.0 */
                /* IL_5A: ldc.i4.0 */
                /* IL_5B: conv.i8 */
                /* IL_5D: ceq */
                /* IL_5E: ldc.i4.0 */
                /* IL_60: ceq */
                /* IL_61: stloc.s 6*/
                loc6 = ((asm0.XInt64_Equality(loc0,BLR.conv_i8((0|0))) === (0|0)) ? (1) : (0));
                /* IL_63: ldloc.s 6*/
                /* IL_65: brtrue.s IL_2C*/
                
                if (loc6){
                    __pos__ = 0x2C;
                    continue;
                }
                /* IL_67: ldloc.3 */
                /* IL_68: ldloc.2 */
                /* IL_69: call String op_Addition(Braille.JavaScript.String, Braille.JavaScript.String)*/
                /* IL_6E: call String op_Explicit(Braille.JavaScript.String)*/
                /* IL_73: stloc.s 5*/
                loc5 = BLR.new_string(loc3 + loc2);
                /* IL_77: ldloc.s 5*/
                /* IL_79: ret */
                return loc5;
            }
        }
    };
    /* System.Int32 Int64.GetHashCode()*/
    asm.x600013a = function GetHashCode(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i8 */
        /* IL_03: call Int32 GetLow(System.Int64)*/
        /* IL_08: stloc.0 */
        loc0 = arg0.r()[0];
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* static System.Int64 Int64.op_Addition(Int64,Int64)*/
    asm.x600013d = 
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
    asm.XInt64_Addition = asm.x600013d;
    /* static System.Int64 Int64.op_Subtraction(Int64,Int64)*/
    asm.x600013e = 
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
    asm.XInt64_Subtraction = asm.x600013e;
    /* static System.Int64 Int64.op_BitwiseOr(Int64,Int64)*/
    asm.x600013f = 
            function XInt64_BitwiseOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] | rhs[0], lhs[1] | rhs[1]]);
            }
            ;;
    asm.XInt64_BitwiseOr = asm.x600013f;
    /* static System.Int64 Int64.op_BitwiseAnd(Int64,Int64)*/
    asm.x6000140 = 
            function XInt64_BitwiseAnd(lhs, rhs) 
            {
                return new Uint32Array([lhs[0] & rhs[0], lhs[1] & rhs[1]]);
            }
            ;;
    asm.XInt64_BitwiseAnd = asm.x6000140;
    /* static System.Int64 Int64.op_ExclusiveOr(Int64,Int64)*/
    asm.x6000141 = 
            function XInt64_ExclusiveOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] ^ rhs[0], lhs[1] ^ rhs[1]]);
            }
            ;;
    asm.XInt64_ExclusiveOr = asm.x6000141;
    /* static System.Int64 Int64.op_OnesComplement(Int64)*/
    asm.x6000142 = 
            function XInt64_OnesComplement(a)
            {
                return new Uint32Array([~a[0], ~a[1]]);
            }
            ;;
    asm.XInt64_OnesComplement = asm.x6000142;
    /* static System.Int64 Int64.op_LeftShift(Int64,Int32)*/
    asm.x6000143 = 
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
    asm.XInt64_LeftShift = asm.x6000143;
    /* static System.Int64 Int64.op_Equality(Int64,Int64)*/
    asm.x6000144 = 
            function XInt64_Equality(lhs, rhs)
            {
                return (lhs[0] === rhs[0] && lhs[1] === rhs[1]) ? 1 : 0;
            }
            ;;
    asm.XInt64_Equality = asm.x6000144;
    /* static System.Int64 Int64.op_Inequality(Int64,Int64)*/
    asm.x6000145 = 
            function XInt64_Inequality(lhs, rhs)
            {
                return (lhs[0] !== rhs[0] && lhs[1] !== rhs[1]) ? 1 : 0;
            }
            ;;
    asm.XInt64_Inequality = asm.x6000145;
    /* static System.Int64 Int64.op_Decrement(Int64)*/
    asm.x6000146 = function op_Decrement(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldc.i4.1 */
        /* IL_03: conv.i8 */
        /* IL_04: sub */
        /* IL_05: stloc.0 */
        loc0 = asm0.XInt64_Subtraction(arg0,BLR.conv_i8((1|0)));
        /* IL_08: ldloc.0 */
        /* IL_09: ret */
        return loc0;
    };;
    asm.XInt64_Decrement = asm.x6000146;
    /* static System.Int64 Int64.op_Increment(Int64)*/
    asm.x6000147 = function op_Increment(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldc.i4.1 */
        /* IL_03: conv.i8 */
        /* IL_04: add */
        /* IL_05: stloc.0 */
        loc0 = asm0.XInt64_Addition(arg0,BLR.conv_i8((1|0)));
        /* IL_08: ldloc.0 */
        /* IL_09: ret */
        return loc0;
    };;
    asm.XInt64_Increment = asm.x6000147;
    /* static System.Int64 Int64.op_RightShift(Int64,Int32)*/
    asm.x6000148 = 
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
    asm.Int64_RightShift = asm.x6000148;
    /* static System.Int64 Int64.op_Division(Int64,Int32)*/
    asm.x6000149 = 
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
    asm.Int64_Division = asm.x6000149;
    /* static System.Int64 Int64.op_Modulus(Int64,Int32)*/
    asm.x600014a = 
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
    asm.Int64_Modulus = asm.x600014a;
    /* static System.Boolean Int64.op_GreaterThan(Int64,Int64)*/
    asm.x600014b = 
            function Int64_GreaterThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_GreaterThan(a, b);
                else
                    return bn ? 1 : 0;
            };;
    asm.Int64_GreaterThan = asm.x600014b;
    /* static System.Boolean Int64.op_LessThan(Int64,Int64)*/
    asm.x600014c = 
            function Int64_LessThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_LessThan(a, b);
                else
                    return an ? 1 : 0;
            };;
    asm.Int64_LessThan = asm.x600014c;
    /* static System.Int64 Int64.op_UnaryNegation(Int64)*/
    asm.x600014d = 
            function Int64_UnaryNegation (a) {
                var complement = asm0.XInt64_Subtraction(new Uint32Array([0xffffffff, 0xffffffff]), a);
                return asm0.XInt64_Addition(complement, new Uint32Array([1, 0]));
            };;
    asm.Int64_UnaryNegation = asm.x600014d;
    /* static System.Boolean Int64.isNegative(Int64)*/
    asm.x600014e = 
            function isNegative(n) {
                return asm0.UInt64_GreaterThan(n, [0xffffffff, 0x7fffffff]);
            };;
    asm.Int64_isNegative = asm.x600014e;
    /* System.Int32 Int64.CompareTo(Object)*/
    asm.x600014f = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.Int64*/
        /* IL_08: call Int32 CompareTo(System.Int64)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x6000150(arg0,BLR.unbox_any(arg1,(asm0)["System.Int64"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 Int64.CompareTo(Int64)*/
    asm.x6000150 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i8 */
                /* IL_03: stloc.0 */
                loc0 = arg0.r();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: clt */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((asm0.Int64_LessThan(loc0,arg1) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: ldarg.1 */
                /* IL_16: cgt */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.2 */
                loc2 = ((asm0.Int64_GreaterThan(loc0,arg1) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.2 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc2){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: stloc.1 */
                loc1 = (0|0);
                case 0x26:
                /* IL_26: ldloc.1 */
                /* IL_27: ret */
                return loc1;
            }
        }
    };;
    /* System.Boolean Int64.Equals(Object)*/
    asm.x6000151 = function Equals(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Int64"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.Int64*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.1 */
                loc1 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.1 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc1){
                    __pos__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.0 */
                loc0 = (0|0);
                /* IL_10: br.s IL_21*/
                __pos__ = 0x21;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldarg.1 */
                /* IL_14: unbox.any System.Int64*/
                /* IL_19: call Boolean Equals(System.Int64)*/
                /* IL_1E: stloc.0 */
                loc0 = asm0.x6000152(arg0,BLR.unbox_any(arg1,t0));
                case 0x21:
                /* IL_21: ldloc.0 */
                /* IL_22: ret */
                return loc0;
            }
        }
    };;
    /* System.Boolean Int64.Equals(Int64)*/
    asm.x6000152 = function Equals(arg0,arg1)
    {
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i8 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_04: ldarg.1 */
        /* IL_05: stloc.1 */
        loc1 = arg1;
        /* IL_06: ldloc.0 */
        /* IL_07: ldloc.1 */
        /* IL_09: ceq */
        /* IL_0A: stloc.2 */
        loc2 = asm0.XInt64_Equality(loc0,loc1);
        /* IL_0D: ldloc.2 */
        /* IL_0E: ret */
        return loc2;
    };;
    /*  ExtensionAttribute..ctor()*/
    asm.x600015d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: ret */
        return ;
    };;
    /*  IndexerNameAttribute..ctor(String)*/
    asm.x600015e = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* static System.Void RuntimeHelpers.InitializeArrayImpl(Array,RuntimeFieldHandle)*/
    asm.x600015f = 
            function (arr, handle) {
                handle.value.type();
                var data = new Int8Array(handle.value.type[handle.value.field]);
                arr.jsarr = new arr.etype.ArrayType(data.buffer);   
            }
            ;;
    /* static System.Void RuntimeHelpers.InitializeArray(Array,RuntimeFieldHandle)*/
    asm.x6000161_init = function ()
    {
        ((asm0)["System.Array`1"]((asm0)["System.Int64"]()).init)();
        ((asm0)["System.Array`1"]((asm0)["System.UInt64"]()).init)();
        asm.x6000161 = asm.x6000161_;
    };;
    asm.x6000161 = function (arg0,arg1)
    {
        asm.x6000161_init.apply(this,arguments);
        return asm.x6000161_.apply(this,arguments);
    };;
    asm.x6000161_ = function InitializeArray(arg0,arg1)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var st_07;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc4;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        t0 = (asm0)["System.Int64"]();
        t1 = (asm0)["System.Array`1"](t0);
        t2 = (asm0)["System.UInt64"]();
        t3 = (asm0)["System.Array`1"](t2);
        t4 = (asm0)["System.UInt32"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: isinst System.Int64[]*/
                /* IL_07: brtrue.s IL_17*/
                
                if (t1.IsInst(arg0)){
                    __pos__ = 0x17;
                    continue;
                }
                /* IL_09: ldarg.0 */
                /* IL_0A: isinst System.UInt64[]*/
                /* IL_0F: ldnull */
                /* IL_11: cgt.un */
                /* IL_12: ldc.i4.0 */
                /* IL_14: ceq */
                st_07 = ((((t3.IsInst(arg0) !== null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_15: br.s IL_18*/
                __pos__ = 0x18;
                continue;
                case 0x17:
                /* IL_17: ldc.i4.0 */
                st_07 = (0|0);
                case 0x18:
                /* IL_18: nop */
                
                /* IL_19: stloc.s 4*/
                loc4 = st_07;
                /* IL_1B: ldloc.s 4*/
                /* IL_1D: brtrue.s IL_66*/
                
                if (loc4){
                    __pos__ = 0x66;
                    continue;
                }
                /* IL_1F: nop */
                
                /* IL_20: ldarg.0 */
                /* IL_21: castclass System.Int64[]*/
                /* IL_26: stloc.0 */
                loc0 = BLR.cast_class(arg0,t1);
                /* IL_27: ldc.i4.0 */
                /* IL_28: newarr System.UInt32*/
                /* IL_2D: stloc.1 */
                loc1 = BLR.new_array(t4,(0|0));
                /* IL_2E: ldloc.1 */
                /* IL_2F: ldarg.1 */
                /* IL_30: call Void InitializeArrayImpl(System.Array, System.RuntimeFieldHandle)*/
                asm0.x600015f(loc1,BLR.clone_value(arg1));
                /* IL_35: nop */
                
                /* IL_36: ldc.i4.0 */
                /* IL_37: stloc.2 */
                loc2 = (0|0);
                /* IL_38: ldc.i4.0 */
                /* IL_39: stloc.3 */
                loc3 = (0|0);
                /* IL_3A: br.s IL_54*/
                __pos__ = 0x54;
                continue;
                case 0x3C:
                /* IL_3C: ldloc.0 */
                /* IL_3D: ldloc.2 */
                /* IL_3E: ldloc.1 */
                /* IL_3F: ldloc.3 */
                /* IL_40: ldelem.u4 */
                /* IL_41: ldloc.1 */
                /* IL_42: ldloc.3 */
                /* IL_43: ldc.i4.1 */
                /* IL_44: add */
                /* IL_45: ldelem.u4 */
                /* IL_46: call Int64 Make(System.UInt32, System.UInt32)*/
                /* IL_4B: stelem.i8 */
                (loc0.jsarr)[loc2] = new Uint32Array([(loc1.jsarr)[loc3],(loc1.jsarr)[(loc3 + (1|0)) | (0|0)]]);
                /* IL_4C: ldloc.2 */
                /* IL_4D: ldc.i4.1 */
                /* IL_4E: add */
                /* IL_4F: stloc.2 */
                loc2 = (loc2 + (1|0)) | (0|0);
                /* IL_50: ldloc.3 */
                /* IL_51: ldc.i4.2 */
                /* IL_52: add */
                /* IL_53: stloc.3 */
                loc3 = (loc3 + (2|0)) | (0|0);
                case 0x54:
                /* IL_54: ldloc.2 */
                /* IL_55: ldarg.0 */
                /* IL_56: callvirt Int32 get_Length()*/
                /* IL_5C: clt */
                /* IL_5D: stloc.s 4*/
                loc4 = ((loc2 < asm0.x600016d(arg0)) ? (1) : (0));
                /* IL_5F: ldloc.s 4*/
                /* IL_61: brtrue.s IL_3C*/
                
                if (loc4){
                    __pos__ = 0x3C;
                    continue;
                }
                /* IL_63: nop */
                
                /* IL_64: br.s IL_70*/
                __pos__ = 0x70;
                continue;
                case 0x66:
                /* IL_66: nop */
                
                /* IL_67: ldarg.0 */
                /* IL_68: ldarg.1 */
                /* IL_69: call Void InitializeArrayImpl(System.Array, System.RuntimeFieldHandle)*/
                asm0.x600015f(arg0,BLR.clone_value(arg1));
                /* IL_6E: nop */
                
                /* IL_6F: nop */
                
                case 0x70:
                /* IL_70: ret */
                return ;
            }
        }
    };
    /*  RuntimeHelpers..ctor()*/
    asm.x6000162 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  EventArgs..ctor()*/
    asm.x6000163 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* static  EventArgs..cctor()*/
    asm.x6000164_init = function ()
    {
        ((asm0)["System.EventArgs"]().init)();
        asm.x6000164 = asm.x6000164_;
    };;
    asm.x6000164 = function ()
    {
        asm.x6000164_init.apply(this,arguments);
        return asm.x6000164_.apply(this,arguments);
    };;
    asm.x6000164_ = function _cctor()
    {
        var t0;
        var __pos__;
        
        if ((asm0)["System.EventArgs"]().FieldsInitialized){
            return;
        }
        (asm0)["System.EventArgs"]().FieldsInitialized = true;
        t0 = (asm0)["System.EventArgs"]();
        __pos__ = 0x0;
        asm0.x6000164();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stsfld EventArgs Empty*/
        (t0)["Empty"] = BLR.newobj(t0,asm0.x6000163,[null]);
        /* IL_0A: ret */
        return ;
    };
    /* System.Void EventHandler.Invoke(Object,EventArgs)*/
    asm.x6000166 = BLR.delegate_invoke;;
    /* System.IAsyncResult EventHandler.BeginInvoke(Object,EventArgs,AsyncCallback,Object)*/
    asm.x6000167 = BLR.delegate_begin_invoke;;
    /* System.Void EventHandler.EndInvoke(IAsyncResult)*/
    asm.x6000168 = BLR.delegate_end_invoke;;
    /*  EventHandler..ctor(Object,IntPtr)*/
    asm.x6000165 = BLR.delegate_ctor;;
    /* System.Boolean Predicate`1.Invoke(T)*/
    asm.x600016a = BLR.delegate_invoke;;
    /* System.IAsyncResult Predicate`1.BeginInvoke(T,AsyncCallback,Object)*/
    asm.x600016b = BLR.delegate_begin_invoke;;
    /* System.Boolean Predicate`1.EndInvoke(IAsyncResult)*/
    asm.x600016c = BLR.delegate_end_invoke;;
    /*  Predicate`1..ctor(Object,IntPtr)*/
    asm.x6000169 = BLR.delegate_ctor;;
    /* System.Int32 Array.get_Length()*/
    asm.x600016d = function get_Length(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetLengthImpl(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x600016f(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* System.Int64 Array.get_LongLength()*/
    asm.x600016e = function get_LongLength(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 get_Length()*/
        /* IL_07: conv.i8 */
        /* IL_08: stloc.0 */
        loc0 = BLR.conv_i8(asm0.x600016d(arg0));
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* static System.Int32 Array.GetLengthImpl(Object)*/
    asm.x600016f = function(o) { return o.jsarr.length; };;
    /* static System.Object Array.GetValueImpl(Object,Int32)*/
    asm.x6000170 = function(o, i) { return BLR.box(o.jsarr[i], o.etype); };;
    /* static T[] Array.FromJsArray<T>(Object)*/
    asm.x6000171 = 
            function (T) {
                return function FromJsArray(arr) {
                    var r = new (asm0['System.Array`1'](T))();
                    r.etype = T;
                    r.jsarr = arr;
                    return r;
                };
            };;
    /* System.Object Array.GetValue(Int32)*/
    asm.x6000172 = function GetValue(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Object GetValueImpl(System.Object, System.Int32)*/
        /* IL_08: stloc.0 */
        loc0 = asm0.x6000170(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* System.Collections.IEnumerator Array.GetEnumerator()*/
    asm.x6000173 = function GetEnumerator(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt IEnumerator GetEnumeratorImpl()*/
        /* IL_07: stloc.0 */
        loc0 = ((arg0.vtable)["asm0.x6000174"]())(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static System.Void Array.Clear<T>(T[],Int32,Int32)*/
    asm.x6000175 = function (T)
    {
        return function Clear(arg0,arg1,arg2)
        {
            var t0;
            var loc0;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc1;
            var loc2;
            t0 = T;
            loc0 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldloca.s 0*/
                    /* IL_04: initobj T*/
                    loc0 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
                    /* IL_09: ldarg.1 */
                    /* IL_0A: stloc.1 */
                    loc1 = arg1;
                    /* IL_0B: br.s IL_19*/
                    __pos__ = 0x19;
                    continue;
                    case 0xD:
                    /* IL_0D: ldarg.0 */
                    /* IL_0E: ldloc.1 */
                    /* IL_0F: ldloc.0 */
                    /* IL_10: stelem T*/
                    (arg0.jsarr)[loc1] = loc0;
                    /* IL_15: ldloc.1 */
                    /* IL_16: ldc.i4.1 */
                    /* IL_17: add */
                    /* IL_18: stloc.1 */
                    loc1 = (loc1 + (1|0)) | (0|0);
                    case 0x19:
                    /* IL_19: ldloc.1 */
                    /* IL_1A: ldarg.0 */
                    /* IL_1B: ldlen */
                    /* IL_1C: conv.i4 */
                    /* IL_1E: clt */
                    /* IL_1F: stloc.2 */
                    loc2 = ((loc1 < (arg0.jsarr.length | (0|0))) ? (1) : (0));
                    /* IL_20: ldloc.2 */
                    /* IL_21: brtrue.s IL_0D*/
                    
                    if (loc2){
                        __pos__ = 0xD;
                        continue;
                    }
                    /* IL_23: ret */
                    return ;
                }
            }
        };
    };;
    /* static System.Int32 Array.IndexOf<T>(T[],T,Int32,Int32)*/
    asm.x6000176_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Collections.IEqualityComparer"]().init)();
            asm.x6000176 = asm.x6000176_;
        };
    };;
    asm.x6000176 = function (T)
    {
        return function (arg0,arg1,arg2,arg3)
        {
            (asm.x6000176_init(T).apply)(this,arguments);
            return (asm.x6000176_(T).apply)(this,arguments);
        };
    };;
    asm.x6000176_ = function (T)
    {
        return function IndexOf(arg0,arg1,arg2,arg3)
        {
            var t0;
            var t1;
            var t2;
            var st_18;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc4;
            var loc0;
            var loc1;
            var loc2;
            var loc3;
            t0 = (asm0)["System.Exception"]();
            t1 = T;
            t2 = (asm0)["System.Collections.IEqualityComparer"]();
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.0 */
                    /* IL_02: ldnull */
                    /* IL_04: ceq */
                    /* IL_05: ldc.i4.0 */
                    /* IL_07: ceq */
                    /* IL_08: stloc.s 4*/
                    loc4 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_0A: ldloc.s 4*/
                    /* IL_0C: brtrue.s IL_19*/
                    
                    if (loc4){
                        __pos__ = 0x19;
                        continue;
                    }
                    /* IL_0E: ldstr array*/
                    /* IL_13: newobj Void .ctor(System.String)*/
                    /* IL_18: throw */
                    throw BLR.newobj(t0,asm0.x60000a5,[null, BLR.new_string("array")]);
                    case 0x19:
                    /* IL_19: ldarg.3 */
                    /* IL_1A: ldc.i4.0 */
                    /* IL_1B: blt.s IL_32*/
                    
                    if (arg3 < (0|0)){
                        __pos__ = 0x32;
                        continue;
                    }
                    /* IL_1D: ldarg.2 */
                    /* IL_1E: ldc.i4.0 */
                    /* IL_1F: blt.s IL_32*/
                    
                    if (arg2 < (0|0)){
                        __pos__ = 0x32;
                        continue;
                    }
                    /* IL_21: ldarg.2 */
                    /* IL_22: ldc.i4.1 */
                    /* IL_23: sub */
                    /* IL_24: ldarg.0 */
                    /* IL_25: ldlen */
                    /* IL_26: conv.i4 */
                    /* IL_27: ldc.i4.1 */
                    /* IL_28: sub */
                    /* IL_29: ldarg.3 */
                    /* IL_2A: sub */
                    /* IL_2C: cgt */
                    /* IL_2D: ldc.i4.0 */
                    /* IL_2F: ceq */
                    st_18 = ((((((arg2 - (1|0)) | (0|0)) > (((((arg0.jsarr.length | (0|0)) - (1|0)) | (0|0)) - arg3) | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_30: br.s IL_33*/
                    __pos__ = 0x33;
                    continue;
                    case 0x32:
                    /* IL_32: ldc.i4.0 */
                    st_18 = (0|0);
                    case 0x33:
                    /* IL_33: nop */
                    
                    /* IL_34: stloc.s 4*/
                    loc4 = st_18;
                    /* IL_36: ldloc.s 4*/
                    /* IL_38: brtrue.s IL_40*/
                    
                    if (loc4){
                        __pos__ = 0x40;
                        continue;
                    }
                    /* IL_3A: newobj Void .ctor()*/
                    /* IL_3F: throw */
                    throw BLR.newobj(t0,asm0.x60000a4,[null]);
                    case 0x40:
                    /* IL_40: ldarg.2 */
                    /* IL_41: ldarg.3 */
                    /* IL_42: add */
                    /* IL_43: stloc.0 */
                    loc0 = (arg2 + arg3) | (0|0);
                    /* IL_44: ldtoken T*/
                    /* IL_49: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    /* IL_4E: call IEqualityComparer GetDefaultEqualityComparer(System.Type)*/
                    /* IL_53: stloc.1 */
                    loc1 = asm1.GetDefaultEqualityComparer(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).ctor)();
                    /* IL_54: ldarg.2 */
                    /* IL_55: stloc.2 */
                    loc2 = arg2;
                    /* IL_56: br.s IL_83*/
                    __pos__ = 0x83;
                    continue;
                    case 0x58:
                    /* IL_58: nop */
                    
                    /* IL_59: ldloc.1 */
                    /* IL_5A: ldarg.0 */
                    /* IL_5B: ldloc.2 */
                    /* IL_5C: call T UnsafeLoad[T](T[], System.Int32)*/
                    /* IL_61: box T*/
                    /* IL_66: ldarg.1 */
                    /* IL_67: box T*/
                    /* IL_6C: callvirt Boolean Equals(System.Object, System.Object)*/
                    /* IL_71: ldc.i4.0 */
                    /* IL_73: ceq */
                    /* IL_74: stloc.s 4*/
                    loc4 = (((((loc1.ifacemap)[t2].x6000031)())(BLR.convert_box_to_pointer_as_needed(loc1),BLR.box((arg0.jsarr[loc2]),t1),BLR.box(arg1,t1)) === (0|0)) ? (1) : (0));
                    /* IL_76: ldloc.s 4*/
                    /* IL_78: brtrue.s IL_7E*/
                    
                    if (loc4){
                        __pos__ = 0x7E;
                        continue;
                    }
                    /* IL_7A: ldloc.2 */
                    /* IL_7B: stloc.3 */
                    loc3 = loc2;
                    /* IL_7C: br.s IL_91*/
                    __pos__ = 0x91;
                    continue;
                    case 0x7E:
                    /* IL_7E: nop */
                    
                    /* IL_7F: ldloc.2 */
                    /* IL_80: ldc.i4.1 */
                    /* IL_81: add */
                    /* IL_82: stloc.2 */
                    loc2 = (loc2 + (1|0)) | (0|0);
                    case 0x83:
                    /* IL_83: ldloc.2 */
                    /* IL_84: ldloc.0 */
                    /* IL_86: clt */
                    /* IL_87: stloc.s 4*/
                    loc4 = ((loc2 < loc0) ? (1) : (0));
                    /* IL_89: ldloc.s 4*/
                    /* IL_8B: brtrue.s IL_58*/
                    
                    if (loc4){
                        __pos__ = 0x58;
                        continue;
                    }
                    /* IL_8D: ldc.i4.m1 */
                    /* IL_8E: stloc.3 */
                    loc3 = (-1|0);
                    case 0x91:
                    /* IL_91: ldloc.3 */
                    /* IL_92: ret */
                    return loc3;
                }
            }
        };
    };
    /* static System.Exception Array.GetException(String)*/
    asm.x6000177 = 
            function (classname) { 
                var t = asm1[classname]();
                return new t(); 
            };;
    /* static System.Void Array.Copy(Array,Int32,Array,Int32,Int32)*/
    asm.x6000178 = function Copy(arg0,arg1,arg2,arg3,arg4)
    {
        var st_3D;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.1 */
                loc1 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.1 */
                /* IL_0A: brtrue.s IL_17*/
                
                if (loc1){
                    __pos__ = 0x17;
                    continue;
                }
                /* IL_0C: ldstr System.ArgumentNullException*/
                /* IL_11: call Exception GetException(System.String)*/
                /* IL_16: throw */
                throw asm0.x6000177(BLR.new_string("System.ArgumentNullException"));
                case 0x17:
                /* IL_17: ldarg.2 */
                /* IL_18: ldnull */
                /* IL_1A: ceq */
                /* IL_1B: ldc.i4.0 */
                /* IL_1D: ceq */
                /* IL_1E: stloc.1 */
                loc1 = ((((arg2 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1F: ldloc.1 */
                /* IL_20: brtrue.s IL_2D*/
                
                if (loc1){
                    __pos__ = 0x2D;
                    continue;
                }
                /* IL_22: ldstr System.ArgumentNullException*/
                /* IL_27: call Exception GetException(System.String)*/
                /* IL_2C: throw */
                throw asm0.x6000177(BLR.new_string("System.ArgumentNullException"));
                case 0x2D:
                /* IL_2D: ldarg.1 */
                /* IL_2E: ldc.i4.0 */
                /* IL_30: clt */
                /* IL_31: ldc.i4.0 */
                /* IL_33: ceq */
                /* IL_34: stloc.1 */
                loc1 = ((((arg1 < (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_35: ldloc.1 */
                /* IL_36: brtrue.s IL_43*/
                
                if (loc1){
                    __pos__ = 0x43;
                    continue;
                }
                /* IL_38: ldstr System.ArgumentOutOfRangeException*/
                /* IL_3D: call Exception GetException(System.String)*/
                /* IL_42: throw */
                throw asm0.x6000177(BLR.new_string("System.ArgumentOutOfRangeException"));
                case 0x43:
                /* IL_43: ldarg.3 */
                /* IL_44: ldc.i4.0 */
                /* IL_46: clt */
                /* IL_47: ldc.i4.0 */
                /* IL_49: ceq */
                /* IL_4A: stloc.1 */
                loc1 = ((((arg3 < (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_4B: ldloc.1 */
                /* IL_4C: brtrue.s IL_59*/
                
                if (loc1){
                    __pos__ = 0x59;
                    continue;
                }
                /* IL_4E: ldstr System.ArgumentOutOfRangeException*/
                /* IL_53: call Exception GetException(System.String)*/
                /* IL_58: throw */
                throw asm0.x6000177(BLR.new_string("System.ArgumentOutOfRangeException"));
                case 0x59:
                /* IL_59: ldarg.1 */
                /* IL_5A: ldarg.0 */
                /* IL_5B: callvirt Int32 get_Length()*/
                /* IL_60: ldarg.s 4*/
                /* IL_62: sub */
                /* IL_64: cgt */
                /* IL_65: ldc.i4.0 */
                /* IL_67: ceq */
                /* IL_68: stloc.1 */
                loc1 = ((((arg1 > ((asm0.x600016d(arg0) - arg4) | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_69: ldloc.1 */
                /* IL_6A: brtrue.s IL_77*/
                
                if (loc1){
                    __pos__ = 0x77;
                    continue;
                }
                /* IL_6C: ldstr System.ArgumentException*/
                /* IL_71: call Exception GetException(System.String)*/
                /* IL_76: throw */
                throw asm0.x6000177(BLR.new_string("System.ArgumentException"));
                case 0x77:
                /* IL_77: ldarg.3 */
                /* IL_78: ldarg.2 */
                /* IL_79: callvirt Int32 get_Length()*/
                /* IL_7E: ldarg.s 4*/
                /* IL_80: sub */
                /* IL_82: cgt */
                /* IL_83: ldc.i4.0 */
                /* IL_85: ceq */
                /* IL_86: stloc.1 */
                loc1 = ((((arg3 > ((asm0.x600016d(arg2) - arg4) | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_87: ldloc.1 */
                /* IL_88: brtrue.s IL_96*/
                
                if (loc1){
                    __pos__ = 0x96;
                    continue;
                }
                /* IL_8A: nop */
                
                /* IL_8B: ldstr System.ArgumentException*/
                /* IL_90: call Exception GetException(System.String)*/
                /* IL_95: throw */
                throw asm0.x6000177(BLR.new_string("System.ArgumentException"));
                case 0x96:
                /* IL_96: ldarg.0 */
                /* IL_97: ldarg.2 */
                /* IL_98: call Boolean ReferenceEquals(System.Object, System.Object)*/
                /* IL_9D: brfalse.s IL_A8*/
                
                if ((!(asm0.x6000007(arg0,arg2)))){
                    __pos__ = 0xA8;
                    continue;
                }
                /* IL_9F: ldarg.1 */
                /* IL_A0: ldarg.3 */
                /* IL_A2: cgt */
                /* IL_A3: ldc.i4.0 */
                /* IL_A5: ceq */
                st_3D = ((((arg1 > arg3) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_A6: br.s IL_A9*/
                __pos__ = 0xA9;
                continue;
                case 0xA8:
                /* IL_A8: ldc.i4.0 */
                st_3D = (0|0);
                case 0xA9:
                /* IL_A9: nop */
                
                /* IL_AA: stloc.1 */
                loc1 = st_3D;
                /* IL_AB: ldloc.1 */
                /* IL_AC: brtrue.s IL_D8*/
                
                if (loc1){
                    __pos__ = 0xD8;
                    continue;
                }
                /* IL_AE: nop */
                
                /* IL_AF: ldc.i4.0 */
                /* IL_B0: stloc.0 */
                loc0 = (0|0);
                /* IL_B1: br.s IL_CC*/
                __pos__ = 0xCC;
                continue;
                case 0xB3:
                /* IL_B3: nop */
                
                /* IL_B4: ldarg.2 */
                /* IL_B5: ldarg.0 */
                /* IL_B6: ldarg.1 */
                /* IL_B7: ldloc.0 */
                /* IL_B8: add */
                /* IL_B9: callvirt Object GetValue(System.Int32)*/
                /* IL_BE: ldarg.3 */
                /* IL_BF: ldloc.0 */
                /* IL_C0: add */
                /* IL_C1: callvirt Void SetValue(System.Object, System.Int32)*/
                asm0.x6000191(arg2,asm0.x6000172(arg0,(arg1 + loc0) | (0|0)),(arg3 + loc0) | (0|0));
                /* IL_C6: nop */
                
                /* IL_C7: nop */
                
                /* IL_C8: ldloc.0 */
                /* IL_C9: ldc.i4.1 */
                /* IL_CA: add */
                /* IL_CB: stloc.0 */
                loc0 = (loc0 + (1|0)) | (0|0);
                case 0xCC:
                /* IL_CC: ldloc.0 */
                /* IL_CD: ldarg.s 4*/
                /* IL_D0: clt */
                /* IL_D1: stloc.1 */
                loc1 = ((loc0 < arg4) ? (1) : (0));
                /* IL_D2: ldloc.1 */
                /* IL_D3: brtrue.s IL_B3*/
                
                if (loc1){
                    __pos__ = 0xB3;
                    continue;
                }
                /* IL_D5: nop */
                
                /* IL_D6: br.s IL_105*/
                __pos__ = 0x105;
                continue;
                case 0xD8:
                /* IL_D8: nop */
                
                /* IL_D9: ldarg.s 4*/
                /* IL_DB: ldc.i4.1 */
                /* IL_DC: sub */
                /* IL_DD: stloc.0 */
                loc0 = (arg4 - (1|0)) | (0|0);
                /* IL_DE: br.s IL_F9*/
                __pos__ = 0xF9;
                continue;
                case 0xE0:
                /* IL_E0: nop */
                
                /* IL_E1: ldarg.2 */
                /* IL_E2: ldarg.0 */
                /* IL_E3: ldarg.1 */
                /* IL_E4: ldloc.0 */
                /* IL_E5: add */
                /* IL_E6: callvirt Object GetValue(System.Int32)*/
                /* IL_EB: ldarg.3 */
                /* IL_EC: ldloc.0 */
                /* IL_ED: add */
                /* IL_EE: callvirt Void SetValue(System.Object, System.Int32)*/
                asm0.x6000191(arg2,asm0.x6000172(arg0,(arg1 + loc0) | (0|0)),(arg3 + loc0) | (0|0));
                /* IL_F3: nop */
                
                /* IL_F4: nop */
                
                /* IL_F5: ldloc.0 */
                /* IL_F6: ldc.i4.1 */
                /* IL_F7: sub */
                /* IL_F8: stloc.0 */
                loc0 = (loc0 - (1|0)) | (0|0);
                case 0xF9:
                /* IL_F9: ldloc.0 */
                /* IL_FA: ldc.i4.0 */
                /* IL_FC: clt */
                /* IL_FD: ldc.i4.0 */
                /* IL_FF: ceq */
                /* IL_100: stloc.1 */
                loc1 = ((((loc0 < (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_101: ldloc.1 */
                /* IL_102: brtrue.s IL_E0*/
                
                if (loc1){
                    __pos__ = 0xE0;
                    continue;
                }
                /* IL_104: nop */
                
                case 0x105:
                /* IL_105: ret */
                return ;
            }
        }
    };;
    /* static System.Int32 Array.GetIndex<T>(T[],Int32,Int32,Predicate`1)*/
    asm.x6000179 = function (T)
    {
        return function GetIndex(arg0,arg1,arg2,arg3)
        {
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc0;
            var loc1;
            var loc3;
            var loc2;
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.1 */
                    /* IL_02: ldarg.2 */
                    /* IL_03: add */
                    /* IL_04: stloc.0 */
                    loc0 = (arg1 + arg2) | (0|0);
                    /* IL_05: ldarg.1 */
                    /* IL_06: stloc.1 */
                    loc1 = arg1;
                    /* IL_07: br.s IL_27*/
                    __pos__ = 0x27;
                    continue;
                    case 0x9:
                    /* IL_09: nop */
                    
                    /* IL_0A: ldarg.3 */
                    /* IL_0B: ldarg.0 */
                    /* IL_0C: ldloc.1 */
                    /* IL_0D: ldelem T*/
                    /* IL_12: callvirt Boolean Invoke(T)*/
                    /* IL_17: ldc.i4.0 */
                    /* IL_19: ceq */
                    /* IL_1A: stloc.3 */
                    loc3 = ((arg3._methodPtr.apply(null,((arg3._target) ? ([
                            arg3._target,
                            (arg0.jsarr)[loc1]
                        ]) : ([
                            (arg0.jsarr)[loc1]
                        ]))) === (0|0)) ? (1) : (0));
                    /* IL_1B: ldloc.3 */
                    /* IL_1C: brtrue.s IL_22*/
                    
                    if (loc3){
                        __pos__ = 0x22;
                        continue;
                    }
                    /* IL_1E: ldloc.1 */
                    /* IL_1F: stloc.2 */
                    loc2 = loc1;
                    /* IL_20: br.s IL_33*/
                    __pos__ = 0x33;
                    continue;
                    case 0x22:
                    /* IL_22: nop */
                    
                    /* IL_23: ldloc.1 */
                    /* IL_24: ldc.i4.1 */
                    /* IL_25: add */
                    /* IL_26: stloc.1 */
                    loc1 = (loc1 + (1|0)) | (0|0);
                    case 0x27:
                    /* IL_27: ldloc.1 */
                    /* IL_28: ldloc.0 */
                    /* IL_2A: clt */
                    /* IL_2B: stloc.3 */
                    loc3 = ((loc1 < loc0) ? (1) : (0));
                    /* IL_2C: ldloc.3 */
                    /* IL_2D: brtrue.s IL_09*/
                    
                    if (loc3){
                        __pos__ = 0x9;
                        continue;
                    }
                    /* IL_2F: ldc.i4.m1 */
                    /* IL_30: stloc.2 */
                    loc2 = (-1|0);
                    case 0x33:
                    /* IL_33: ldloc.2 */
                    /* IL_34: ret */
                    return loc2;
                }
            }
        };
    };;
    /* static System.Int32 Array.GetLastIndex<T>(T[],Int32,Int32,Predicate`1)*/
    asm.x600017a = function (T)
    {
        return function GetLastIndex(arg0,arg1,arg2,arg3)
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
            var st_0C;
            var st_0D;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc0;
            var loc2;
            var loc1;
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.1 */
                    /* IL_02: ldarg.2 */
                    /* IL_03: add */
                    /* IL_04: stloc.0 */
                    loc0 = (arg1 + arg2) | (0|0);
                    /* IL_05: br.s IL_25*/
                    __pos__ = 0x25;
                    continue;
                    case 0x7:
                    /* IL_07: nop */
                    
                    /* IL_08: ldarg.3 */
                    st_09 = arg3;
                    /* IL_09: ldarg.0 */
                    st_07 = arg0;
                    /* IL_0A: ldloc.0 */
                    st_03 = loc0;
                    /* IL_0B: ldc.i4.1 */
                    st_04 = (1|0);
                    /* IL_0C: sub */
                    st_05 = ((st_03 - st_04) | (0|0));
                    /* IL_0D: dup */
                    st_08 = (st_06 = st_05);
                    /* IL_0E: stloc.0 */
                    loc0 = st_06;
                    /* IL_0F: ldelem T*/
                    st_0A = (st_07.jsarr)[st_08];
                    /* IL_14: callvirt Boolean Invoke(T)*/
                    st_0B = st_09._methodPtr.apply(null,((st_09._target) ? ([
                            st_09._target,
                            st_0A
                        ]) : ([
                            st_0A
                        ])));
                    /* IL_19: ldc.i4.0 */
                    st_0C = (0|0);
                    /* IL_1B: ceq */
                    st_0D = ((st_0B === st_0C) ? (1) : (0));
                    /* IL_1C: stloc.2 */
                    loc2 = st_0D;
                    /* IL_1D: ldloc.2 */
                    /* IL_1E: brtrue.s IL_24*/
                    
                    if (loc2){
                        __pos__ = 0x24;
                        continue;
                    }
                    /* IL_20: ldloc.0 */
                    /* IL_21: stloc.1 */
                    loc1 = loc0;
                    /* IL_22: br.s IL_34*/
                    __pos__ = 0x34;
                    continue;
                    case 0x24:
                    /* IL_24: nop */
                    
                    case 0x25:
                    /* IL_25: ldloc.0 */
                    /* IL_26: ldarg.1 */
                    /* IL_28: ceq */
                    /* IL_29: ldc.i4.0 */
                    /* IL_2B: ceq */
                    /* IL_2C: stloc.2 */
                    loc2 = ((((loc0 === arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_2D: ldloc.2 */
                    /* IL_2E: brtrue.s IL_07*/
                    
                    if (loc2){
                        __pos__ = 0x7;
                        continue;
                    }
                    /* IL_30: ldc.i4.m1 */
                    /* IL_31: stloc.1 */
                    loc1 = (-1|0);
                    case 0x34:
                    /* IL_34: ldloc.1 */
                    /* IL_35: ret */
                    return loc1;
                }
            }
        };
    };;
    /* static System.Int32 Array.LastIndexOf<T>(T[],T,Int32,Int32)*/
    asm.x600017b_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Collections.IEqualityComparer"]().init)();
            asm.x600017b = asm.x600017b_;
        };
    };;
    asm.x600017b = function (T)
    {
        return function (arg0,arg1,arg2,arg3)
        {
            (asm.x600017b_init(T).apply)(this,arguments);
            return (asm.x600017b_(T).apply)(this,arguments);
        };
    };;
    asm.x600017b_ = function (T)
    {
        return function LastIndexOf(arg0,arg1,arg2,arg3)
        {
            var t0;
            var t1;
            var st_1E;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc3;
            var loc0;
            var loc1;
            var loc2;
            t0 = T;
            t1 = (asm0)["System.Collections.IEqualityComparer"]();
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.0 */
                    /* IL_02: ldnull */
                    /* IL_04: ceq */
                    /* IL_05: ldc.i4.0 */
                    /* IL_07: ceq */
                    /* IL_08: stloc.3 */
                    loc3 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_09: ldloc.3 */
                    /* IL_0A: brtrue.s IL_17*/
                    
                    if (loc3){
                        __pos__ = 0x17;
                        continue;
                    }
                    /* IL_0C: ldstr System.ArgumentNullException*/
                    /* IL_11: call Exception GetException(System.String)*/
                    /* IL_16: throw */
                    throw asm0.x6000177(BLR.new_string("System.ArgumentNullException"));
                    case 0x17:
                    /* IL_17: ldarg.3 */
                    /* IL_18: ldc.i4.0 */
                    /* IL_19: blt.s IL_40*/
                    
                    if (arg3 < (0|0)){
                        __pos__ = 0x40;
                        continue;
                    }
                    /* IL_1B: ldarg.2 */
                    /* IL_1C: ldarg.0 */
                    /* IL_1D: ldc.i4.0 */
                    /* IL_1E: callvirt Int32 GetLowerBound(System.Int32)*/
                    /* IL_23: blt.s IL_40*/
                    
                    if (arg2 < asm0.x6000189(arg0,(0|0))){
                        __pos__ = 0x40;
                        continue;
                    }
                    /* IL_25: ldarg.2 */
                    /* IL_26: ldarg.0 */
                    /* IL_27: ldlen */
                    /* IL_28: conv.i4 */
                    /* IL_29: ldc.i4.1 */
                    /* IL_2A: sub */
                    /* IL_2B: bgt.s IL_40*/
                    
                    if (arg2 > (((arg0.jsarr.length | (0|0)) - (1|0)) | (0|0))){
                        __pos__ = 0x40;
                        continue;
                    }
                    /* IL_2D: ldarg.2 */
                    /* IL_2E: ldarg.3 */
                    /* IL_2F: sub */
                    /* IL_30: ldc.i4.1 */
                    /* IL_31: add */
                    /* IL_32: ldarg.0 */
                    /* IL_33: ldc.i4.0 */
                    /* IL_34: callvirt Int32 GetLowerBound(System.Int32)*/
                    /* IL_3A: clt */
                    /* IL_3B: ldc.i4.0 */
                    /* IL_3D: ceq */
                    st_1E = ((((((((arg2 - arg3) | (0|0)) + (1|0)) | (0|0)) < asm0.x6000189(arg0,(0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_3E: br.s IL_41*/
                    __pos__ = 0x41;
                    continue;
                    case 0x40:
                    /* IL_40: ldc.i4.0 */
                    st_1E = (0|0);
                    case 0x41:
                    /* IL_41: nop */
                    
                    /* IL_42: stloc.3 */
                    loc3 = st_1E;
                    /* IL_43: ldloc.3 */
                    /* IL_44: brtrue.s IL_51*/
                    
                    if (loc3){
                        __pos__ = 0x51;
                        continue;
                    }
                    /* IL_46: ldstr System.ArgumentOutOfRangeException*/
                    /* IL_4B: call Exception GetException(System.String)*/
                    /* IL_50: throw */
                    throw asm0.x6000177(BLR.new_string("System.ArgumentOutOfRangeException"));
                    case 0x51:
                    /* IL_51: ldtoken T*/
                    /* IL_56: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    /* IL_5B: call IEqualityComparer GetDefaultEqualityComparer(System.Type)*/
                    /* IL_60: stloc.0 */
                    loc0 = asm1.GetDefaultEqualityComparer(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).ctor)();
                    /* IL_61: ldarg.2 */
                    /* IL_62: stloc.1 */
                    loc1 = arg2;
                    /* IL_63: br.s IL_8E*/
                    __pos__ = 0x8E;
                    continue;
                    case 0x65:
                    /* IL_65: nop */
                    
                    /* IL_66: ldloc.0 */
                    /* IL_67: ldarg.0 */
                    /* IL_68: ldloc.1 */
                    /* IL_69: ldelem T*/
                    /* IL_6E: box T*/
                    /* IL_73: ldarg.1 */
                    /* IL_74: box T*/
                    /* IL_79: callvirt Boolean Equals(System.Object, System.Object)*/
                    /* IL_7E: ldc.i4.0 */
                    /* IL_80: ceq */
                    /* IL_81: stloc.3 */
                    loc3 = (((((loc0.ifacemap)[t1].x6000031)())(BLR.convert_box_to_pointer_as_needed(loc0),BLR.box((arg0.jsarr)[loc1],t0),BLR.box(arg1,t0)) === (0|0)) ? (1) : (0));
                    /* IL_82: ldloc.3 */
                    /* IL_83: brtrue.s IL_89*/
                    
                    if (loc3){
                        __pos__ = 0x89;
                        continue;
                    }
                    /* IL_85: ldloc.1 */
                    /* IL_86: stloc.2 */
                    loc2 = loc1;
                    /* IL_87: br.s IL_A1*/
                    __pos__ = 0xA1;
                    continue;
                    case 0x89:
                    /* IL_89: nop */
                    
                    /* IL_8A: ldloc.1 */
                    /* IL_8B: ldc.i4.1 */
                    /* IL_8C: sub */
                    /* IL_8D: stloc.1 */
                    loc1 = (loc1 - (1|0)) | (0|0);
                    case 0x8E:
                    /* IL_8E: ldloc.1 */
                    /* IL_8F: ldarg.2 */
                    /* IL_90: ldarg.3 */
                    /* IL_91: sub */
                    /* IL_92: ldc.i4.1 */
                    /* IL_93: add */
                    /* IL_95: clt */
                    /* IL_96: ldc.i4.0 */
                    /* IL_98: ceq */
                    /* IL_99: stloc.3 */
                    loc3 = ((((loc1 < ((((arg2 - arg3) | (0|0)) + (1|0)) | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_9A: ldloc.3 */
                    /* IL_9B: brtrue.s IL_65*/
                    
                    if (loc3){
                        __pos__ = 0x65;
                        continue;
                    }
                    /* IL_9D: ldc.i4.m1 */
                    /* IL_9E: stloc.2 */
                    loc2 = (-1|0);
                    case 0xA1:
                    /* IL_A1: ldloc.2 */
                    /* IL_A2: ret */
                    return loc2;
                }
            }
        };
    };
    /* static System.Void Array.Sort<T>(T[],Object)*/
    asm.x600017c =  function (T) {
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
    asm.x600017d_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Collections.Generic.IComparer`1"](T).init)();
            ((asm0)["System.InvalidOperationException"]().init)();
        };
    };;
    asm.x600017d = function (T)
    {
        return function (arg0,arg1,arg2)
        {
            (asm.x600017d_init(T).apply)(this,arguments);
            return (asm.x600017d_(T).apply)(this,arguments);
        };
    };;
    asm.x600017d_ = function (T)
    {
        return function Sort(arg0,arg1,arg2)
        {
            var t0;
            var t1;
            var t2;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc0;
            var __error_handled_1__;
            var loc1;
            t0 = T;
            t1 = (asm0)["System.Collections.Generic.IComparer`1"](t0);
            t2 = (asm0)["System.InvalidOperationException"]();
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    
                    try {
                        /* IL_01: nop */
                        
                        /* IL_02: ldtoken T*/
                        /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                        /* IL_0C: call IComparer GetComparer(System.Type)*/
                        /* IL_11: call IComparer`1 UnsafeCast[System.Collections.Generic.IComparer`1[T]](System.Object)*/
                        /* IL_16: stloc.0 */
                        loc0 = asm1.GetDefaultComparer(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).ctor)();
                        /* IL_17: ldarg.0 */
                        /* IL_18: ldc.i4.0 */
                        /* IL_19: ldarg.2 */
                        /* IL_1A: ldloc.0 */
                        /* IL_1B: call Void Sort[T](T[], System.Int32, System.Int32, System.Collections.Generic.IComparer`1[T])*/
                        (asm0.x6000180(T))(arg0,(0|0),arg2,loc0);
                        /* IL_20: nop */
                        
                        /* IL_21: nop */
                        
                        /* IL_22: leave.s IL_32*/
                        in_block_1 = false;
                        __pos__ = 0x32;
                    }
                    
                    catch (__error__){
                        __error_handled_1__ = false;
                        
                        if ((!(__error_handled_1__)) && (__error__ instanceof (asm0)["System.Exception"]())){
                            st_08 = __error__;
                            __error_handled_1__ = true;
                            /* IL_24: stloc.1 */
                            loc1 = st_08;
                            /* IL_25: nop */
                            
                            /* IL_26: ldstr Failed to sort the array. */
                            /* IL_2B: ldloc.1 */
                            /* IL_2C: newobj Void .ctor(System.String, System.Exception)*/
                            /* IL_31: throw */
                            throw BLR.newobj(t2,asm0.x6000137,[null, BLR.new_string("Failed to sort the array. "), loc1]);
                        }
                        
                        if ((!(__error_handled_1__))){
                            throw __error__;
                        }
                    }
                    break;
                    case 0x32:
                    /* IL_32: nop */
                    
                    /* IL_33: ret */
                    return ;
                }
            }
        };
    };
    /* static System.Void Array.Sort<T>(T[],IComparer`1)*/
    asm.x600017e = function (T)
    {
        return function Sort(arg0,arg1)
        {
            var t0;
            var __pos__;
            t0 = T;
            __pos__ = 0x0;
            /* IL_00: nop */
            /* IL_01: ldarg.0 */
            /* IL_02: ldc.i4.0 */
            /* IL_03: ldarg.0 */
            /* IL_04: ldlen */
            /* IL_05: conv.i4 */
            /* IL_06: ldarg.1 */
            /* IL_07: call Void Sort[T](T[], System.Int32, System.Int32, System.Collections.Generic.IComparer`1[T])*/
            (asm0.x6000180(T))(arg0,(0|0),arg0.jsarr.length | (0|0),arg1);
            /* IL_0C: nop */
            /* IL_0D: ret */
            return ;
        };
    };;
    /* static System.Void Array.SortImpl<T>(T[],Int32,Comparison`1)*/
    asm.x600017f = function (T)
    {
        return function SortImpl(arg0,arg1,arg2)
        {
            var t0;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc0;
            var loc1;
            t0 = T;
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.0 */
                    /* IL_02: ldlen */
                    /* IL_03: conv.i4 */
                    /* IL_04: stloc.0 */
                    loc0 = arg0.jsarr.length | (0|0);
                    /* IL_05: ldarg.1 */
                    /* IL_06: ldloc.0 */
                    /* IL_08: clt */
                    /* IL_09: ldc.i4.0 */
                    /* IL_0B: ceq */
                    /* IL_0C: stloc.1 */
                    loc1 = ((((arg1 < loc0) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_0D: ldloc.1 */
                    /* IL_0E: brtrue.s IL_1F*/
                    
                    if (loc1){
                        __pos__ = 0x1F;
                        continue;
                    }
                    /* IL_10: nop */
                    
                    /* IL_11: ldarg.0 */
                    /* IL_12: ldarg.1 */
                    /* IL_13: ldarg.0 */
                    /* IL_14: ldlen */
                    /* IL_15: conv.i4 */
                    /* IL_16: ldarg.1 */
                    /* IL_17: sub */
                    /* IL_18: call Void Splice(System.Object, System.Int32, System.Int32)*/
                    asm0.x6000182(arg0,arg1,((arg0.jsarr.length | (0|0)) - arg1) | (0|0));
                    /* IL_1D: nop */
                    
                    /* IL_1E: nop */
                    
                    case 0x1F:
                    /* IL_1F: ldarg.0 */
                    /* IL_20: ldarg.2 */
                    /* IL_21: call Object GetJsFunction(System.Delegate)*/
                    /* IL_26: call Void Sort[T](T[], System.Object)*/
                    (asm0.x600017c(T))(arg0,asm0.x600006c(arg2));
                    /* IL_2B: nop */
                    
                    /* IL_2C: ret */
                    return ;
                }
            }
        };
    };;
    /* static System.Void Array.Sort<T>(T[],Int32,Int32,IComparer`1)*/
    asm.x6000180_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Array+<>c__DisplayClass1`1"](T).init)();
            ((asm0)["System.NotImplementedException"]().init)();
            ((asm0)["System.Comparison`1"](T).init)();
        };
    };;
    asm.x6000180 = function (T)
    {
        return function (arg0,arg1,arg2,arg3)
        {
            (asm.x6000180_init(T).apply)(this,arguments);
            return (asm.x6000180_(T).apply)(this,arguments);
        };
    };;
    asm.x6000180_ = function (T)
    {
        return function Sort(arg0,arg1,arg2,arg3)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc0;
            var loc1;
            t0 = T;
            t1 = (asm0)["System.Array+<>c__DisplayClass1`1"](t0);
            t2 = (asm0)["System.NotImplementedException"]();
            t3 = (asm0)["System.Comparison`1"](t0);
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: newobj Void .ctor()*/
                    /* IL_05: stloc.0 */
                    loc0 = BLR.newobj(t1,asm0.x60001fc,[null]);
                    /* IL_06: ldloc.0 */
                    /* IL_07: ldarg.3 */
                    /* IL_08: stfld IKVM.Reflection.GenericFieldInstance*/
                    loc0.comparer = arg3;
                    /* IL_0D: nop */
                    
                    /* IL_0E: ldarg.1 */
                    /* IL_0F: ldc.i4.0 */
                    /* IL_11: ceq */
                    /* IL_12: stloc.1 */
                    loc1 = ((arg1 === (0|0)) ? (1) : (0));
                    /* IL_13: ldloc.1 */
                    /* IL_14: brtrue.s IL_1C*/
                    
                    if (loc1){
                        __pos__ = 0x1C;
                        continue;
                    }
                    /* IL_16: newobj Void .ctor()*/
                    /* IL_1B: throw */
                    throw BLR.newobj(t2,asm0.x6000125,[null]);
                    case 0x1C:
                    /* IL_1C: ldarg.0 */
                    /* IL_1D: ldarg.2 */
                    /* IL_1E: ldloc.0 */
                    /* IL_20: ldftn Int32 <Sort>b__0(T, T)*/
                    /* IL_25: newobj Void .ctor(System.Object, System.IntPtr)*/
                    /* IL_2A: call Void SortImpl[T](T[], System.Int32, System.Comparison`1[T])*/
                    (asm0.x600017f(T))(arg0,arg2,BLR.newobj(t3,asm0.x600009c,[null, loc0, asm0.x60001fd]));
                    /* IL_2F: nop */
                    
                    /* IL_30: nop */
                    
                    /* IL_31: ret */
                    return ;
                }
            }
        };
    };
    /* static System.Void Array.Combine(Object,Object)*/
    asm.x6000181 = 
            function (a, b) {
                a.jsarr = a.jsarr.concat(b);
            }
            ;;
    /* static System.Void Array.Splice(Object,Int32,Int32)*/
    asm.x6000182 = 
            function (array, index, howMany) {
                    array.jsarr.splice(index, howMany);
            }
            ;;
    /* static System.Void Array.Reverse(Array,Int32,Int32)*/
    asm.x6000184 = function Reverse(arg0,arg1,arg2)
    {
        var st_06;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc4;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: brtrue.s IL_12*/
                
                if (arg1){
                    __pos__ = 0x12;
                    continue;
                }
                /* IL_04: ldarg.2 */
                /* IL_05: ldarg.0 */
                /* IL_06: callvirt Int32 get_Length()*/
                /* IL_0C: clt */
                /* IL_0D: ldc.i4.0 */
                /* IL_0F: ceq */
                st_06 = ((((arg2 < asm0.x600016d(arg0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_10: br.s IL_13*/
                __pos__ = 0x13;
                continue;
                case 0x12:
                /* IL_12: ldc.i4.0 */
                st_06 = (0|0);
                case 0x13:
                /* IL_13: nop */
                
                /* IL_14: stloc.s 4*/
                loc4 = st_06;
                /* IL_16: ldloc.s 4*/
                /* IL_18: brtrue.s IL_5E*/
                
                if (loc4){
                    __pos__ = 0x5E;
                    continue;
                }
                /* IL_1A: nop */
                
                /* IL_1B: ldarg.1 */
                /* IL_1C: stloc.0 */
                loc0 = arg1;
                /* IL_1D: ldarg.1 */
                /* IL_1E: ldarg.2 */
                /* IL_1F: add */
                /* IL_20: ldc.i4.1 */
                /* IL_21: sub */
                /* IL_22: stloc.1 */
                loc1 = (((arg1 + arg2) | (0|0)) - (1|0)) | (0|0);
                /* IL_23: br.s IL_51*/
                __pos__ = 0x51;
                continue;
                case 0x25:
                /* IL_25: nop */
                
                /* IL_26: ldarg.0 */
                /* IL_27: ldloc.0 */
                /* IL_28: callvirt Object GetValue(System.Int32)*/
                /* IL_2D: stloc.2 */
                loc2 = asm0.x6000172(arg0,loc0);
                /* IL_2E: ldarg.0 */
                /* IL_2F: ldloc.1 */
                /* IL_30: callvirt Object GetValue(System.Int32)*/
                /* IL_35: stloc.3 */
                loc3 = asm0.x6000172(arg0,loc1);
                /* IL_36: ldarg.0 */
                /* IL_37: ldloc.3 */
                /* IL_38: ldloc.0 */
                /* IL_39: callvirt Void SetValue(System.Object, System.Int32)*/
                asm0.x6000191(arg0,loc3,loc0);
                /* IL_3E: nop */
                
                /* IL_3F: ldarg.0 */
                /* IL_40: ldloc.2 */
                /* IL_41: ldloc.1 */
                /* IL_42: callvirt Void SetValue(System.Object, System.Int32)*/
                asm0.x6000191(arg0,loc2,loc1);
                /* IL_47: nop */
                
                /* IL_48: ldloc.0 */
                /* IL_49: ldc.i4.1 */
                /* IL_4A: add */
                /* IL_4B: stloc.0 */
                loc0 = (loc0 + (1|0)) | (0|0);
                /* IL_4C: ldloc.1 */
                /* IL_4D: ldc.i4.1 */
                /* IL_4E: sub */
                /* IL_4F: stloc.1 */
                loc1 = (loc1 - (1|0)) | (0|0);
                /* IL_50: nop */
                
                case 0x51:
                /* IL_51: ldloc.0 */
                /* IL_52: ldloc.1 */
                /* IL_54: clt */
                /* IL_55: stloc.s 4*/
                loc4 = ((loc0 < loc1) ? (1) : (0));
                /* IL_57: ldloc.s 4*/
                /* IL_59: brtrue.s IL_25*/
                
                if (loc4){
                    __pos__ = 0x25;
                    continue;
                }
                /* IL_5B: nop */
                
                /* IL_5C: br.s IL_67*/
                __pos__ = 0x67;
                continue;
                case 0x5E:
                /* IL_5E: nop */
                
                /* IL_5F: ldarg.0 */
                /* IL_60: call Void Reverse(System.Array)*/
                (Array.prototype.reverse.apply(arg0.jsarr));
                /* IL_65: nop */
                
                /* IL_66: nop */
                
                case 0x67:
                /* IL_67: ret */
                return ;
            }
        }
    };;
    /* static System.Void Array.Copy<T>(T[],T[],Int32)*/
    asm.x6000188 = function (T)
    {
        return function Copy(arg0,arg1,arg2)
        {
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc0;
            var loc1;
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldc.i4.0 */
                    /* IL_02: stloc.0 */
                    loc0 = (0|0);
                    /* IL_03: br.s IL_19*/
                    __pos__ = 0x19;
                    continue;
                    case 0x5:
                    /* IL_05: nop */
                    
                    /* IL_06: ldarg.1 */
                    /* IL_07: ldloc.0 */
                    /* IL_08: ldarg.0 */
                    /* IL_09: ldloc.0 */
                    /* IL_0A: ldelem T*/
                    /* IL_0F: stelem T*/
                    (arg1.jsarr)[loc0] = (arg0.jsarr)[loc0];
                    /* IL_14: nop */
                    
                    /* IL_15: ldloc.0 */
                    /* IL_16: ldc.i4.1 */
                    /* IL_17: add */
                    /* IL_18: stloc.0 */
                    loc0 = (loc0 + (1|0)) | (0|0);
                    case 0x19:
                    /* IL_19: ldloc.0 */
                    /* IL_1A: ldarg.2 */
                    /* IL_1C: clt */
                    /* IL_1D: stloc.1 */
                    loc1 = ((loc0 < arg2) ? (1) : (0));
                    /* IL_1E: ldloc.1 */
                    /* IL_1F: brtrue.s IL_05*/
                    
                    if (loc1){
                        __pos__ = 0x5;
                        continue;
                    }
                    /* IL_21: ret */
                    return ;
                }
            }
        };
    };;
    /* System.Int32 Array.GetLowerBound(Int32)*/
    asm.x6000189 = function GetLowerBound(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.0 */
        /* IL_02: stloc.0 */
        loc0 = (0|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* System.Int32 Array.get_Rank()*/
    asm.x600018a = function get_Rank(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.1 */
        /* IL_02: stloc.0 */
        loc0 = (1|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* static System.Void Array.Resize<T>(T[]&,Int32)*/
    asm.x600018b = function (T)
    {
        return function Resize(arg0,arg1)
        {
            var t0;
            var t1;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc5;
            var loc0;
            var loc1;
            var loc2;
            var loc3;
            var loc4;
            t0 = (asm0)["System.Exception"]();
            t1 = T;
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.1 */
                    /* IL_02: ldc.i4.0 */
                    /* IL_04: clt */
                    /* IL_05: ldc.i4.0 */
                    /* IL_07: ceq */
                    /* IL_08: stloc.s 5*/
                    loc5 = ((((arg1 < (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_0A: ldloc.s 5*/
                    /* IL_0C: brtrue.s IL_19*/
                    
                    if (loc5){
                        __pos__ = 0x19;
                        continue;
                    }
                    /* IL_0E: ldstr Argument out of range*/
                    /* IL_13: newobj Void .ctor(System.String)*/
                    /* IL_18: throw */
                    throw BLR.newobj(t0,asm0.x60000a5,[null, BLR.new_string("Argument out of range")]);
                    case 0x19:
                    /* IL_19: ldarg.0 */
                    /* IL_1A: ldind.ref */
                    /* IL_1B: ldnull */
                    /* IL_1D: ceq */
                    /* IL_1E: ldc.i4.0 */
                    /* IL_20: ceq */
                    /* IL_21: stloc.s 5*/
                    loc5 = ((((arg0.r() === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_23: ldloc.s 5*/
                    /* IL_25: brtrue.s IL_32*/
                    
                    if (loc5){
                        __pos__ = 0x32;
                        continue;
                    }
                    /* IL_27: nop */
                    
                    /* IL_28: ldarg.0 */
                    /* IL_29: ldarg.1 */
                    /* IL_2A: newarr T*/
                    /* IL_2F: stind.ref */
                    arg0.w(BLR.new_array(t1,arg1));
                    /* IL_30: br.s IL_81*/
                    __pos__ = 0x81;
                    continue;
                    case 0x32:
                    /* IL_32: ldarg.0 */
                    /* IL_33: ldind.ref */
                    /* IL_34: stloc.0 */
                    loc0 = arg0.r();
                    /* IL_35: ldloc.0 */
                    /* IL_36: ldlen */
                    /* IL_37: conv.i4 */
                    /* IL_38: stloc.1 */
                    loc1 = loc0.jsarr.length | (0|0);
                    /* IL_39: ldloc.1 */
                    /* IL_3A: ldarg.1 */
                    /* IL_3C: ceq */
                    /* IL_3D: ldc.i4.0 */
                    /* IL_3F: ceq */
                    /* IL_40: stloc.s 5*/
                    loc5 = ((((loc1 === arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_42: ldloc.s 5*/
                    /* IL_44: brtrue.s IL_48*/
                    
                    if (loc5){
                        __pos__ = 0x48;
                        continue;
                    }
                    /* IL_46: br.s IL_81*/
                    __pos__ = 0x81;
                    continue;
                    case 0x48:
                    /* IL_48: ldarg.1 */
                    /* IL_49: newarr T*/
                    /* IL_4E: stloc.2 */
                    loc2 = BLR.new_array(t1,arg1);
                    /* IL_4F: ldarg.1 */
                    /* IL_50: ldloc.1 */
                    /* IL_51: call Int32 Min(System.Int32, System.Int32)*/
                    /* IL_56: stloc.3 */
                    loc3 = Math.min(arg1, loc1);
                    /* IL_57: ldc.i4.0 */
                    /* IL_58: stloc.s 4*/
                    loc4 = (0|0);
                    /* IL_5A: br.s IL_73*/
                    __pos__ = 0x73;
                    continue;
                    case 0x5C:
                    /* IL_5C: ldloc.2 */
                    /* IL_5D: ldloc.s 4*/
                    /* IL_5F: ldloc.0 */
                    /* IL_60: ldloc.s 4*/
                    /* IL_62: call T UnsafeLoad[T](T[], System.Int32)*/
                    /* IL_67: call T UnsafeStore[T](T[], System.Int32, T)*/
                    /* IL_6C: pop */
                    (loc2.jsarr[loc4] = (loc0.jsarr[loc4]));
                    /* IL_6D: ldloc.s 4*/
                    /* IL_6F: ldc.i4.1 */
                    /* IL_70: add */
                    /* IL_71: stloc.s 4*/
                    loc4 = (loc4 + (1|0)) | (0|0);
                    case 0x73:
                    /* IL_73: ldloc.s 4*/
                    /* IL_75: ldloc.3 */
                    /* IL_77: clt */
                    /* IL_78: stloc.s 5*/
                    loc5 = ((loc4 < loc3) ? (1) : (0));
                    /* IL_7A: ldloc.s 5*/
                    /* IL_7C: brtrue.s IL_5C*/
                    
                    if (loc5){
                        __pos__ = 0x5C;
                        continue;
                    }
                    /* IL_7E: ldarg.0 */
                    /* IL_7F: ldloc.2 */
                    /* IL_80: stind.ref */
                    arg0.w(loc2);
                    case 0x81:
                    /* IL_81: ret */
                    return ;
                }
            }
        };
    };;
    /* static System.Int32 Array.BinarySearch<T>(T[],Int32,Int32,T)*/
    asm.x600018e = function (T)
    {
        return function BinarySearch(arg0,arg1,arg2,arg3)
        {
            var t0;
            var __pos__;
            var loc0;
            t0 = T;
            __pos__ = 0x0;
            /* IL_00: nop */
            /* IL_01: ldarg.0 */
            /* IL_02: ldarg.1 */
            /* IL_03: ldarg.2 */
            /* IL_04: ldarg.3 */
            /* IL_05: ldnull */
            /* IL_06: call Int32 BinarySearch[T](T[], System.Int32, System.Int32, T, System.Collections.Generic.IComparer`1[T])*/
            /* IL_0B: stloc.0 */
            loc0 = (asm0.x600018f(T))(arg0,arg1,arg2,arg3,null);
            /* IL_0E: ldloc.0 */
            /* IL_0F: ret */
            return loc0;
        };
    };;
    /* static System.Int32 Array.BinarySearch<T>(T[],Int32,Int32,T,IComparer`1)*/
    asm.x600018f_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Collections.Generic.IComparer`1"](T).init)();
        };
    };;
    asm.x600018f = function (T)
    {
        return function (arg0,arg1,arg2,arg3,arg4)
        {
            (asm.x600018f_init(T).apply)(this,arguments);
            return (asm.x600018f_(T).apply)(this,arguments);
        };
    };;
    asm.x600018f_ = function (T)
    {
        return function BinarySearch(arg0,arg1,arg2,arg3,arg4)
        {
            var t0;
            var t1;
            var t2;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc6;
            var loc0;
            var loc1;
            var loc2;
            var in_block_1;
            var __finally_continuation_1__;
            var loc3;
            var loc5;
            var __error_handled_1__;
            var loc4;
            t0 = (asm0)["System.Exception"]();
            t1 = T;
            t2 = (asm0)["System.Collections.Generic.IComparer`1"](t1);
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.0 */
                    /* IL_02: ldnull */
                    /* IL_04: ceq */
                    /* IL_05: ldc.i4.0 */
                    /* IL_07: ceq */
                    /* IL_08: stloc.s 6*/
                    loc6 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_0A: ldloc.s 6*/
                    /* IL_0C: brtrue.s IL_19*/
                    
                    if (loc6){
                        __pos__ = 0x19;
                        continue;
                    }
                    /* IL_0E: ldstr array*/
                    /* IL_13: newobj Void .ctor(System.String)*/
                    /* IL_18: throw */
                    throw BLR.newobj(t0,asm0.x60000a5,[null, BLR.new_string("array")]);
                    case 0x19:
                    /* IL_19: ldarg.1 */
                    /* IL_1A: ldc.i4.0 */
                    /* IL_1C: clt */
                    /* IL_1D: ldc.i4.0 */
                    /* IL_1F: ceq */
                    /* IL_20: stloc.s 6*/
                    loc6 = ((((arg1 < (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_22: ldloc.s 6*/
                    /* IL_24: brtrue.s IL_31*/
                    
                    if (loc6){
                        __pos__ = 0x31;
                        continue;
                    }
                    /* IL_26: ldstr index is less than the lower bound of array.*/
                    /* IL_2B: newobj Void .ctor(System.String)*/
                    /* IL_30: throw */
                    throw BLR.newobj(t0,asm0.x60000a5,[null, BLR.new_string("index is less than the lower bound of array.")]);
                    case 0x31:
                    /* IL_31: ldarg.2 */
                    /* IL_32: ldc.i4.0 */
                    /* IL_34: clt */
                    /* IL_35: ldc.i4.0 */
                    /* IL_37: ceq */
                    /* IL_38: stloc.s 6*/
                    loc6 = ((((arg2 < (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_3A: ldloc.s 6*/
                    /* IL_3C: brtrue.s IL_49*/
                    
                    if (loc6){
                        __pos__ = 0x49;
                        continue;
                    }
                    /* IL_3E: ldstr Value has to be >= 0.*/
                    /* IL_43: newobj Void .ctor(System.String)*/
                    /* IL_48: throw */
                    throw BLR.newobj(t0,asm0.x60000a5,[null, BLR.new_string("Value has to be >= 0.")]);
                    case 0x49:
                    /* IL_49: ldarg.1 */
                    /* IL_4A: ldarg.0 */
                    /* IL_4B: ldlen */
                    /* IL_4C: conv.i4 */
                    /* IL_4D: ldarg.2 */
                    /* IL_4E: sub */
                    /* IL_50: cgt */
                    /* IL_51: ldc.i4.0 */
                    /* IL_53: ceq */
                    /* IL_54: stloc.s 6*/
                    loc6 = ((((arg1 > (((arg0.jsarr.length | (0|0)) - arg2) | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_56: ldloc.s 6*/
                    /* IL_58: brtrue.s IL_65*/
                    
                    if (loc6){
                        __pos__ = 0x65;
                        continue;
                    }
                    /* IL_5A: ldstr index and length do not specify a valid range in array.*/
                    /* IL_5F: newobj Void .ctor(System.String)*/
                    /* IL_64: throw */
                    throw BLR.newobj(t0,asm0.x60000a5,[null, BLR.new_string("index and length do not specify a valid range in array.")]);
                    case 0x65:
                    /* IL_65: ldarg.s 4*/
                    /* IL_67: ldnull */
                    /* IL_69: ceq */
                    /* IL_6A: ldc.i4.0 */
                    /* IL_6C: ceq */
                    /* IL_6D: stloc.s 6*/
                    loc6 = ((((arg4 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_6F: ldloc.s 6*/
                    /* IL_71: brtrue.s IL_89*/
                    
                    if (loc6){
                        __pos__ = 0x89;
                        continue;
                    }
                    /* IL_73: ldtoken T*/
                    /* IL_78: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    /* IL_7D: call IComparer GetComparer(System.Type)*/
                    /* IL_82: call IComparer`1 UnsafeCast[System.Collections.Generic.IComparer`1[T]](System.Object)*/
                    /* IL_87: starg.s 4*/
                    arg4 = asm1.GetDefaultComparer(asm0.x60000e1(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).ctor)();
                    case 0x89:
                    /* IL_89: ldarg.1 */
                    /* IL_8A: stloc.0 */
                    loc0 = arg1;
                    /* IL_8B: ldarg.1 */
                    /* IL_8C: ldarg.2 */
                    /* IL_8D: add */
                    /* IL_8E: ldc.i4.1 */
                    /* IL_8F: sub */
                    /* IL_90: stloc.1 */
                    loc1 = (((arg1 + arg2) | (0|0)) - (1|0)) | (0|0);
                    /* IL_91: ldc.i4.0 */
                    /* IL_92: stloc.2 */
                    loc2 = (0|0);
                    
                    try {
                        in_block_1 = true;
                        __finally_continuation_1__ = __pos__;
                        __pos__ = 147;
                        
                        while (in_block_1){
                            
                            switch (__pos__){
                                case 0x93:
                                /* IL_93: nop */
                                
                                /* IL_94: br.s IL_D9*/
                                __pos__ = 0xD9;
                                continue;
                                case 0x96:
                                /* IL_96: nop */
                                
                                /* IL_97: ldloc.0 */
                                /* IL_98: ldloc.1 */
                                /* IL_99: ldloc.0 */
                                /* IL_9A: sub */
                                /* IL_9B: ldc.i4.2 */
                                /* IL_9C: div */
                                /* IL_9D: add */
                                /* IL_9E: stloc.3 */
                                loc3 = (loc0 + ((((loc1 - loc0) | (0|0)) / (2|0)) | (0|0))) | (0|0);
                                /* IL_9F: ldarg.s 4*/
                                /* IL_A1: ldarg.0 */
                                /* IL_A2: ldloc.3 */
                                /* IL_A3: ldelem T*/
                                /* IL_A8: ldarg.3 */
                                /* IL_A9: callvirt Int32 Compare(T, T)*/
                                /* IL_AE: stloc.2 */
                                loc2 = ((((arg4.ifacemap)[t2])[t1].x600002f)())(BLR.convert_box_to_pointer_as_needed(arg4),(arg0.jsarr)[loc3],arg3);
                                /* IL_AF: ldloc.2 */
                                /* IL_B0: ldc.i4.0 */
                                /* IL_B2: ceq */
                                /* IL_B3: ldc.i4.0 */
                                /* IL_B5: ceq */
                                /* IL_B6: stloc.s 6*/
                                loc6 = ((((loc2 === (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                                /* IL_B8: ldloc.s 6*/
                                /* IL_BA: brtrue.s IL_C1*/
                                
                                if (loc6){
                                    __pos__ = 0xC1;
                                    continue;
                                }
                                /* IL_BC: ldloc.3 */
                                /* IL_BD: stloc.s 5*/
                                loc5 = loc3;
                                /* IL_BF: leave.s IL_100*/
                                in_block_1 = false;
                                __pos__ = 0x100;
                                break;
                                case 0xC1:
                                /* IL_C1: ldloc.2 */
                                /* IL_C2: ldc.i4.0 */
                                /* IL_C4: cgt */
                                /* IL_C5: ldc.i4.0 */
                                /* IL_C7: ceq */
                                /* IL_C8: stloc.s 6*/
                                loc6 = ((((loc2 > (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                                /* IL_CA: ldloc.s 6*/
                                /* IL_CC: brtrue.s IL_D4*/
                                
                                if (loc6){
                                    __pos__ = 0xD4;
                                    continue;
                                }
                                /* IL_CE: ldloc.3 */
                                /* IL_CF: ldc.i4.1 */
                                /* IL_D0: sub */
                                /* IL_D1: stloc.1 */
                                loc1 = (loc3 - (1|0)) | (0|0);
                                /* IL_D2: br.s IL_D8*/
                                __pos__ = 0xD8;
                                continue;
                                case 0xD4:
                                /* IL_D4: ldloc.3 */
                                /* IL_D5: ldc.i4.1 */
                                /* IL_D6: add */
                                /* IL_D7: stloc.0 */
                                loc0 = (loc3 + (1|0)) | (0|0);
                                case 0xD8:
                                /* IL_D8: nop */
                                
                                case 0xD9:
                                /* IL_D9: ldloc.0 */
                                /* IL_DA: ldloc.1 */
                                /* IL_DC: cgt */
                                /* IL_DD: ldc.i4.0 */
                                /* IL_DF: ceq */
                                /* IL_E0: stloc.s 6*/
                                loc6 = ((((loc0 > loc1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                                /* IL_E2: ldloc.s 6*/
                                /* IL_E4: brtrue.s IL_96*/
                                
                                if (loc6){
                                    __pos__ = 0x96;
                                    continue;
                                }
                                /* IL_E6: nop */
                                
                                /* IL_E7: leave.s IL_F9*/
                                in_block_1 = false;
                                __pos__ = 0xF9;
                                break;
                            }
                        }
                    }
                    
                    catch (__error__){
                        __error_handled_1__ = false;
                        
                        if ((!(__error_handled_1__)) && (__error__ instanceof (asm0)["System.Exception"]())){
                            st_5B = __error__;
                            __error_handled_1__ = true;
                            /* IL_E9: stloc.s 4*/
                            loc4 = st_5B;
                            /* IL_EB: nop */
                            
                            /* IL_EC: ldstr Comparer threw an exception.*/
                            /* IL_F1: ldloc.s 4*/
                            /* IL_F3: newobj Void .ctor(System.String, System.Exception)*/
                            /* IL_F8: throw */
                            throw BLR.newobj(t0,asm0.x60000a6,[null, BLR.new_string("Comparer threw an exception."), loc4]);
                        }
                        
                        if ((!(__error_handled_1__))){
                            throw __error__;
                        }
                    }
                    break;
                    case 0xF9:
                    /* IL_F9: nop */
                    
                    /* IL_FA: ldloc.0 */
                    /* IL_FB: not */
                    /* IL_FC: stloc.s 5*/
                    loc5 = (~(loc0));
                    case 0x100:
                    /* IL_100: nop */
                    
                    /* IL_101: ldloc.s 5*/
                    /* IL_103: ret */
                    return loc5;
                }
            }
        };
    };
    /* static System.Array Array.CreateInstance(Type,Int32)*/
    asm.x6000190 = function (elementType, length) { return BLR.new_array(elementType.ctor, length); };;
    /* System.Void Array.SetValue(Object,Int32)*/
    asm.x6000191 = BLR.array_set_value;;
    /*  Array..ctor()*/
    asm.x6000192 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Collections.Generic.IEnumerator`1[T] Array`1.GetEnumerator()*/
    asm.x6000194_init = function ()
    {
        ((asm0)["System.Array`1+ArrayEnumerator"]((((arguments)[0].constructor.GenericArguments)["asm0.t200005f"])[0]).init)();
    };;
    asm.x6000194 = function (arg0)
    {
        asm.x6000194_init.apply(this,arguments);
        return asm.x6000194_.apply(this,arguments);
    };;
    asm.x6000194_ = function GetEnumerator(arg0)
    {
        var t0;
        var t1;
        var __pos__;
        var loc0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm0.t200005f"])[0];
        t1 = (asm0)["System.Array`1+ArrayEnumerator"](t0);
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: newobj Void .ctor(System.Array`1[T])*/
        /* IL_07: stloc.0 */
        loc0 = BLR.newobj(t1,asm0.x600019e,[null, arg0]);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };
    /* System.Collections.IEnumerator Array`1.GetEnumeratorImpl()*/
    asm.x6000195 = function GetEnumeratorImpl(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call IEnumerator`1 GetEnumerator()*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x6000194(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* System.Int32 Array`1.System.Collections.Generic.ICollection<T>.get_Count()*/
    asm.x6000196 = function System_Collections_Generic_ICollection_T__get_Count(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 get_Length()*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x600016d(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* System.Boolean Array`1.System.Collections.Generic.ICollection<T>.get_IsReadOnly()*/
    asm.x6000197 = function System_Collections_Generic_ICollection_T__get_IsReadOnly(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.1 */
        /* IL_02: stloc.0 */
        loc0 = (1|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* System.Void Array`1.System.Collections.Generic.ICollection<T>.Add(T)*/
    asm.x6000198_init = function ()
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x6000198 = asm.x6000198_;
    };;
    asm.x6000198 = function (arg0,arg1)
    {
        asm.x6000198_init.apply(this,arguments);
        return asm.x6000198_.apply(this,arguments);
    };;
    asm.x6000198_ = function System_Collections_Generic_ICollection_T__Add(arg0,arg1)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.NotSupportedException"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x6000126,[null]);
    };
    /* System.Void Array`1.System.Collections.Generic.ICollection<T>.Clear()*/
    asm.x6000199_init = function ()
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x6000199 = asm.x6000199_;
    };;
    asm.x6000199 = function (arg0)
    {
        asm.x6000199_init.apply(this,arguments);
        return asm.x6000199_.apply(this,arguments);
    };;
    asm.x6000199_ = function System_Collections_Generic_ICollection_T__Clear(arg0)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.NotSupportedException"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x6000126,[null]);
    };
    /* System.Boolean Array`1.System.Collections.Generic.ICollection<T>.Contains(T)*/
    asm.x600019a_init = function ()
    {
        ((asm0)["System.Array`1"]((((arguments)[0].constructor.GenericArguments)["asm0.t200005f"])[0]).init)();
    };;
    asm.x600019a = function (arg0,arg1)
    {
        asm.x600019a_init.apply(this,arguments);
        return asm.x600019a_.apply(this,arguments);
    };;
    asm.x600019a_ = function System_Collections_Generic_ICollection_T__Contains(arg0,arg1)
    {
        var t0;
        var t1;
        var __pos__;
        var loc0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm0.t200005f"])[0];
        t1 = (asm0)["System.Array`1"](t0);
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: castclass T[]*/
        /* IL_07: ldarg.1 */
        /* IL_08: ldc.i4.0 */
        /* IL_09: ldarg.0 */
        /* IL_0A: call Int32 get_Length()*/
        /* IL_0F: call Int32 IndexOf[T](T[], T, System.Int32, System.Int32)*/
        /* IL_14: ldc.i4.m1 */
        /* IL_16: ceq */
        /* IL_17: ldc.i4.0 */
        /* IL_19: ceq */
        /* IL_1A: stloc.0 */
        loc0 = (((((asm0.x6000176((((arguments)[0].constructor.GenericArguments)["asm0.t200005f"])[0]))(BLR.cast_class(arg0,t1),arg1,(0|0),asm0.x600016d(arg0)) === (-1|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
        /* IL_1D: ldloc.0 */
        /* IL_1E: ret */
        return loc0;
    };
    /* System.Void Array`1.System.Collections.Generic.ICollection<T>.CopyTo(T[],Int32)*/
    asm.x600019b_init = function ()
    {
        ((asm0)["System.Array`1"]((((arguments)[0].constructor.GenericArguments)["asm0.t200005f"])[0]).init)();
    };;
    asm.x600019b = function (arg0,arg1,arg2)
    {
        asm.x600019b_init.apply(this,arguments);
        return asm.x600019b_.apply(this,arguments);
    };;
    asm.x600019b_ = function System_Collections_Generic_ICollection_T__CopyTo(arg0,arg1,arg2)
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc4;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm0.t200005f"])[0];
        t1 = (asm0)["System.Array`1"](t0);
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.2 */
                /* IL_02: ldarg.0 */
                /* IL_03: call Int32 get_Length()*/
                /* IL_08: ldarg.1 */
                /* IL_09: ldlen */
                /* IL_0A: conv.i4 */
                /* IL_0B: sub */
                /* IL_0D: clt */
                /* IL_0E: ldc.i4.0 */
                /* IL_10: ceq */
                /* IL_11: stloc.s 4*/
                loc4 = ((((arg2 < ((asm0.x600016d(arg0) - (arg1.jsarr.length | (0|0))) | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_13: ldloc.s 4*/
                /* IL_15: brtrue.s IL_22*/
                
                if (loc4){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_17: ldstr System.ArgumentException*/
                /* IL_1C: call Exception GetException(System.String)*/
                /* IL_21: throw */
                throw asm0.x6000177(BLR.new_string("System.ArgumentException"));
                case 0x22:
                /* IL_22: ldarg.0 */
                /* IL_23: call Int32 get_Length()*/
                /* IL_28: stloc.0 */
                loc0 = asm0.x600016d(arg0);
                /* IL_29: ldarg.0 */
                /* IL_2A: castclass T[]*/
                /* IL_2F: stloc.1 */
                loc1 = BLR.cast_class(arg0,t1);
                /* IL_30: ldc.i4.0 */
                /* IL_31: stloc.2 */
                loc2 = (0|0);
                /* IL_32: ldarg.2 */
                /* IL_33: stloc.3 */
                loc3 = arg2;
                /* IL_34: br.s IL_4E*/
                __pos__ = 0x4E;
                continue;
                case 0x36:
                /* IL_36: nop */
                
                /* IL_37: ldarg.1 */
                /* IL_38: ldloc.3 */
                /* IL_39: ldloc.1 */
                /* IL_3A: ldloc.2 */
                /* IL_3B: ldelem T*/
                /* IL_40: stelem T*/
                (arg1.jsarr)[loc3] = (loc1.jsarr)[loc2];
                /* IL_45: nop */
                
                /* IL_46: ldloc.3 */
                /* IL_47: ldc.i4.1 */
                /* IL_48: add */
                /* IL_49: stloc.3 */
                loc3 = (loc3 + (1|0)) | (0|0);
                /* IL_4A: ldloc.2 */
                /* IL_4B: ldc.i4.1 */
                /* IL_4C: add */
                /* IL_4D: stloc.2 */
                loc2 = (loc2 + (1|0)) | (0|0);
                case 0x4E:
                /* IL_4E: ldloc.2 */
                /* IL_4F: ldloc.0 */
                /* IL_51: clt */
                /* IL_52: stloc.s 4*/
                loc4 = ((loc2 < loc0) ? (1) : (0));
                /* IL_54: ldloc.s 4*/
                /* IL_56: brtrue.s IL_36*/
                
                if (loc4){
                    __pos__ = 0x36;
                    continue;
                }
                /* IL_58: ret */
                return ;
            }
        }
    };
    /* System.Boolean Array`1.System.Collections.Generic.ICollection<T>.Remove(T)*/
    asm.x600019c_init = function ()
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x600019c = asm.x600019c_;
    };;
    asm.x600019c = function (arg0,arg1)
    {
        asm.x600019c_init.apply(this,arguments);
        return asm.x600019c_.apply(this,arguments);
    };;
    asm.x600019c_ = function System_Collections_Generic_ICollection_T__Remove(arg0,arg1)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.NotSupportedException"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x6000126,[null]);
    };
    /*  Array`1..ctor()*/
    asm.x600019d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000192(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* T ArrayEnumerator.get_Current()*/
    asm.x600019f = function get_Current(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Array`1 source*/
        /* IL_07: ldarg.0 */
        /* IL_08: ldfld Int32 index*/
        /* IL_0D: callvirt T GetTypedValue(System.Int32)*/
        /* IL_12: stloc.0 */
        loc0 = arg0.source.jsarr[arg0.index];
        /* IL_15: ldloc.0 */
        /* IL_16: ret */
        return loc0;
    };;
    /* System.Boolean ArrayEnumerator.MoveNext()*/
    asm.x60001a0 = function MoveNext(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: dup */
        st_04 = (st_01 = st_00);
        /* IL_03: ldfld Int32 index*/
        st_02 = st_01.index;
        /* IL_08: ldc.i4.1 */
        st_03 = (1|0);
        /* IL_09: add */
        st_05 = ((st_02 + st_03) | (0|0));
        /* IL_0A: stfld Int32 index*/
        st_04.index = st_05;
        /* IL_0F: ldarg.0 */
        /* IL_10: ldfld Int32 index*/
        /* IL_15: ldarg.0 */
        /* IL_16: ldfld Int32 length*/
        /* IL_1C: clt */
        /* IL_1D: stloc.0 */
        loc0 = ((arg0.index < arg0.length) ? (1) : (0));
        /* IL_20: ldloc.0 */
        /* IL_21: ret */
        return loc0;
    };;
    /* System.Object ArrayEnumerator.System.Collections.IEnumerator.get_Current()*/
    asm.x60001a1 = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm0.t2000060"])[0];
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call T get_Current()*/
        /* IL_07: box T*/
        /* IL_0C: stloc.0 */
        loc0 = BLR.box(asm0.x600019f(arg0),t0);
        /* IL_0F: ldloc.0 */
        /* IL_10: ret */
        return loc0;
    };;
    /* System.Void ArrayEnumerator.Reset()*/
    asm.x60001a2 = function Reset(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldc.i4.m1 */
        /* IL_03: stfld Int32 index*/
        arg0.index = (-1|0);
        /* IL_08: ret */
        return ;
    };;
    /* System.Void ArrayEnumerator.Dispose()*/
    asm.x60001a3 = function Dispose(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    /*  ArrayEnumerator..ctor(Array`1)*/
    asm.x600019e = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld Array`1 source*/
        arg0.source = arg1;
        /* IL_0F: ldarg.0 */
        /* IL_10: ldc.i4.m1 */
        /* IL_11: stfld Int32 index*/
        arg0.index = (-1|0);
        /* IL_16: ldarg.0 */
        /* IL_17: ldarg.1 */
        /* IL_18: callvirt Int32 get_Length()*/
        /* IL_1D: stfld Int32 length*/
        arg0.length = asm0.x600016d(arg1);
        /* IL_22: nop */
        /* IL_23: ret */
        return ;
    };;
    /*  DebuggerStepThroughAttribute..ctor()*/
    asm.x60001a4 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* System.Boolean Nullable`1.get_HasValue()*/
    asm.x60001a7 = function get_HasValue(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Boolean has_value*/
        /* IL_07: stloc.0 */
        loc0 = arg0.r().has_value;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* T Nullable`1.get_Value()*/
    asm.x60001a8_init = function ()
    {
        ((asm0)["System.InvalidOperationException"]().init)();
        asm.x60001a8 = asm.x60001a8_;
    };;
    asm.x60001a8 = function (arg0)
    {
        asm.x60001a8_init.apply(this,arguments);
        return asm.x60001a8_.apply(this,arguments);
    };;
    asm.x60001a8_ = function get_Value(arg0)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.InvalidOperationException"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Boolean has_value*/
                /* IL_07: stloc.1 */
                loc1 = arg0.r().has_value;
                /* IL_08: ldloc.1 */
                /* IL_09: brtrue.s IL_16*/
                
                if (loc1){
                    __pos__ = 0x16;
                    continue;
                }
                /* IL_0B: ldstr Nullable object must have a value.*/
                /* IL_10: newobj Void .ctor(System.String)*/
                /* IL_15: throw */
                throw BLR.newobj(t0,asm0.x6000138,[null, BLR.new_string("Nullable object must have a value.")]);
                case 0x16:
                /* IL_16: ldarg.0 */
                /* IL_17: ldfld T value*/
                /* IL_1C: stloc.0 */
                loc0 = arg0.r().value;
                /* IL_1F: ldloc.0 */
                /* IL_20: ret */
                return loc0;
            }
        }
    };
    /* System.Boolean Nullable`1.Equals(Object)*/
    asm.x60001a9_init = function ()
    {
        ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
        ((asm0)["System.Nullable`1"](((((arguments)[0].r)().constructor.GenericArguments)["asm0.t2000064"])[0]).init)();
    };;
    asm.x60001a9 = function (arg0,arg1)
    {
        asm.x60001a9_init.apply(this,arguments);
        return asm.x60001a9_.apply(this,arguments);
    };;
    asm.x60001a9_ = function Equals(arg0,arg1)
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
        t1 = ((((arguments)[0].r)().constructor.GenericArguments)["asm0.t2000064"])[0];
        t2 = (asm0)["System.Nullable`1"](t1);
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.1 */
                loc1 = ((((arg1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.1 */
                /* IL_0A: brtrue.s IL_18*/
                
                if (loc1){
                    __pos__ = 0x18;
                    continue;
                }
                /* IL_0C: ldarg.0 */
                /* IL_0D: ldfld Boolean has_value*/
                /* IL_12: ldc.i4.0 */
                /* IL_14: ceq */
                /* IL_15: stloc.0 */
                loc0 = ((arg0.r().has_value === (0|0)) ? (1) : (0));
                /* IL_16: br.s IL_38*/
                __pos__ = 0x38;
                continue;
                case 0x18:
                /* IL_18: ldarg.1 */
                /* IL_19: isinst System.Nullable`1[T]*/
                /* IL_1E: ldnull */
                /* IL_20: cgt.un */
                /* IL_21: stloc.1 */
                loc1 = ((t2.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_22: ldloc.1 */
                /* IL_23: brtrue.s IL_29*/
                
                if (loc1){
                    __pos__ = 0x29;
                    continue;
                }
                /* IL_25: ldc.i4.0 */
                /* IL_26: stloc.0 */
                loc0 = (0|0);
                /* IL_27: br.s IL_38*/
                __pos__ = 0x38;
                continue;
                case 0x29:
                /* IL_29: ldarg.0 */
                /* IL_2A: ldarg.1 */
                /* IL_2B: unbox.any System.Nullable`1[T]*/
                /* IL_30: call Boolean Equals(System.Nullable`1[T])*/
                /* IL_35: stloc.0 */
                loc0 = asm0.x60001aa(arg0,BLR.clone_value(BLR.unbox_any(arg1,t2)));
                case 0x38:
                /* IL_38: ldloc.0 */
                /* IL_39: ret */
                return loc0;
            }
        }
    };
    /* System.Boolean Nullable`1.Equals(Nullable`1)*/
    asm.x60001aa = function Equals(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = ((((arguments)[0].r)().constructor.GenericArguments)["asm0.t2000064"])[0];
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarga.s 1*/
                /* IL_03: ldfld Boolean has_value*/
                /* IL_08: ldarg.0 */
                /* IL_09: ldfld Boolean has_value*/
                /* IL_0F: ceq */
                /* IL_10: stloc.1 */
                loc1 = ((arg1.has_value === arg0.r().has_value) ? (1) : (0));
                /* IL_11: ldloc.1 */
                /* IL_12: brtrue.s IL_18*/
                
                if (loc1){
                    __pos__ = 0x18;
                    continue;
                }
                /* IL_14: ldc.i4.0 */
                /* IL_15: stloc.0 */
                loc0 = (0|0);
                /* IL_16: br.s IL_46*/
                __pos__ = 0x46;
                continue;
                case 0x18:
                /* IL_18: ldarg.0 */
                /* IL_19: ldfld Boolean has_value*/
                /* IL_1E: stloc.1 */
                loc1 = arg0.r().has_value;
                /* IL_1F: ldloc.1 */
                /* IL_20: brtrue.s IL_26*/
                
                if (loc1){
                    __pos__ = 0x26;
                    continue;
                }
                /* IL_22: ldc.i4.1 */
                /* IL_23: stloc.0 */
                loc0 = (1|0);
                /* IL_24: br.s IL_46*/
                __pos__ = 0x46;
                continue;
                case 0x26:
                /* IL_26: ldarga.s 1*/
                /* IL_28: ldflda T value*/
                /* IL_2D: ldarg.0 */
                /* IL_2E: ldfld T value*/
                /* IL_33: box T*/
                /* IL_3E: callvirt Boolean Equals(System.Object)*/
                /* IL_43: stloc.0 */
                loc0 = (((arg1.value.vtable || t0.prototype.vtable)["asm0.x6000008"])())(BLR.dereference_pointer_as_needed({
                            'w': function (v)
                            {
                                arg1.value = v;
                            },
                            'r': function ()
                            {
                                return arg1.value;
                            }
                        }),BLR.box(arg0.r().value,t0));
                case 0x46:
                /* IL_46: ldloc.0 */
                /* IL_47: ret */
                return loc0;
            }
        }
    };;
    /* System.Int32 Nullable`1.GetHashCode()*/
    asm.x60001ab = function GetHashCode(arg0)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Boolean has_value*/
                /* IL_07: stloc.1 */
                loc1 = arg0.r().has_value;
                /* IL_08: ldloc.1 */
                /* IL_09: brtrue.s IL_0F*/
                
                if (loc1){
                    __pos__ = 0xF;
                    continue;
                }
                /* IL_0B: ldc.i4.0 */
                /* IL_0C: stloc.0 */
                loc0 = (0|0);
                /* IL_0D: br.s IL_23*/
                __pos__ = 0x23;
                continue;
                case 0xF:
                /* IL_0F: ldarg.0 */
                /* IL_10: ldflda T value*/
                /* IL_1B: callvirt Int32 GetHashCode()*/
                /* IL_20: stloc.0 */
                loc0 = (((arg0.r().value.vtable || ((((arguments)[0].r)().constructor.GenericArguments)["asm0.t2000064"])[0].prototype.vtable)["asm0.x6000009"])())(BLR.dereference_pointer_as_needed({
                            'w': function (v)
                            {
                                arg0.r().value = v;
                            },
                            'r': function ()
                            {
                                return arg0.r().value;
                            }
                        }));
                case 0x23:
                /* IL_23: ldloc.0 */
                /* IL_24: ret */
                return loc0;
            }
        }
    };;
    /* T Nullable`1.GetValueOrDefault()*/
    asm.x60001ac = function GetValueOrDefault(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld T value*/
        /* IL_07: stloc.0 */
        loc0 = arg0.r().value;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* T Nullable`1.GetValueOrDefault(T)*/
    asm.x60001ad = function GetValueOrDefault(arg0,arg1)
    {
        var st_02;
        var st_03;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Boolean has_value*/
                /* IL_07: brtrue.s IL_0C*/
                
                if (arg0.r().has_value){
                    __pos__ = 0xC;
                    continue;
                }
                /* IL_09: ldarg.1 */
                st_03 = arg1;
                /* IL_0A: br.s IL_12*/
                __pos__ = 0x12;
                continue;
                case 0xC:
                /* IL_0C: ldarg.0 */
                st_02 = arg0;
                /* IL_0D: ldfld T value*/
                st_03 = st_02.r().value;
                case 0x12:
                /* IL_12: nop */
                
                /* IL_13: stloc.0 */
                loc0 = st_03;
                /* IL_16: ldloc.0 */
                /* IL_17: ret */
                return loc0;
            }
        }
    };;
    /* System.String Nullable`1.ToString()*/
    asm.x60001ae = function ToString(arg0)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.String"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Boolean has_value*/
                /* IL_07: ldc.i4.0 */
                /* IL_09: ceq */
                /* IL_0A: stloc.1 */
                loc1 = ((arg0.r().has_value === (0|0)) ? (1) : (0));
                /* IL_0B: ldloc.1 */
                /* IL_0C: brtrue.s IL_22*/
                
                if (loc1){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_0E: ldarg.0 */
                /* IL_0F: ldflda T value*/
                /* IL_1A: callvirt String ToString()*/
                /* IL_1F: stloc.0 */
                loc0 = (((arg0.r().value.vtable || ((((arguments)[0].r)().constructor.GenericArguments)["asm0.t2000064"])[0].prototype.vtable)["asm0.x6000005"])())(BLR.dereference_pointer_as_needed({
                            'w': function (v)
                            {
                                arg0.r().value = v;
                            },
                            'r': function ()
                            {
                                return arg0.r().value;
                            }
                        }));
                /* IL_20: br.s IL_2A*/
                __pos__ = 0x2A;
                continue;
                case 0x22:
                asm0.x60001d6();
                /* IL_22: ldsfld String Empty*/
                /* IL_27: stloc.0 */
                loc0 = t0.Empty;
                case 0x2A:
                /* IL_2A: ldloc.0 */
                /* IL_2B: ret */
                return loc0;
            }
        }
    };;
    /* static System.Nullable`1[T] Nullable`1.op_Implicit(T)*/
    asm.x60001af_init = function (T)
    {
        return function ()
        {
            ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
            ((asm0)["System.Nullable`1"](T).init)();
        };
    };;
    asm.x60001af = function (T)
    {
        return function (arg0)
        {
            (asm.x60001af_init(T).apply)(this,arguments);
            return (asm.x60001af_(T).apply)(this,arguments);
        };
    };;
    asm.x60001af_ = function (T)
    {
        return function op_Implicit(arg0)
        {
            var t0;
            var t1;
            var t2;
            var __pos__;
            var loc0;
            t0 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
            t1 = T;
            t2 = (asm0)["System.Nullable`1"](t1);
            __pos__ = 0x0;
            /* IL_00: nop */
            /* IL_01: ldarg.0 */
            /* IL_02: newobj Void .ctor(T)*/
            /* IL_07: stloc.0 */
            loc0 = BLR.newobj(t2,asm0.x60001a6,[null, BLR.clone_value(arg0)]);
            /* IL_0A: ldloc.0 */
            /* IL_0B: ret */
            return loc0;
        };
    };
    /* static T Nullable`1.op_Explicit(Nullable`1)*/
    asm.x60001b0 = function (T)
    {
        return function op_Explicit(arg0)
        {
            var __pos__;
            var loc0;
            __pos__ = 0x0;
            /* IL_00: nop */
            /* IL_01: ldarga.s 0*/
            /* IL_03: call T get_Value()*/
            /* IL_08: stloc.0 */
            loc0 = asm0.x60001a8({
                    'w': function (v)
                    {
                        arg0 = v;
                    },
                    'r': function ()
                    {
                        return arg0;
                    }
                });
            /* IL_0B: ldloc.0 */
            /* IL_0C: ret */
            return loc0;
        };
    };;
    /* static System.Object Nullable`1.Box(Nullable`1)*/
    asm.x60001b1 = function (T)
    {
        return function Box(arg0)
        {
            var t0;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc1;
            var loc0;
            t0 = T;
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarga.s 0*/
                    /* IL_03: ldfld Boolean has_value*/
                    /* IL_08: stloc.1 */
                    loc1 = arg0.has_value;
                    /* IL_09: ldloc.1 */
                    /* IL_0A: brtrue.s IL_10*/
                    
                    if (loc1){
                        __pos__ = 0x10;
                        continue;
                    }
                    /* IL_0C: ldnull */
                    /* IL_0D: stloc.0 */
                    loc0 = null;
                    /* IL_0E: br.s IL_1F*/
                    __pos__ = 0x1F;
                    continue;
                    case 0x10:
                    /* IL_10: ldarga.s 0*/
                    /* IL_12: ldfld T value*/
                    /* IL_17: box T*/
                    /* IL_1C: stloc.0 */
                    loc0 = BLR.box(arg0.value,t0);
                    case 0x1F:
                    /* IL_1F: ldloc.0 */
                    /* IL_20: ret */
                    return loc0;
                }
            }
        };
    };;
    /* static System.Nullable`1[T] Nullable`1.Unbox(Object)*/
    asm.x60001b2_init = function (T)
    {
        return function ()
        {
            ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
            ((asm0)["System.Nullable`1"](T).init)();
        };
    };;
    asm.x60001b2 = function (T)
    {
        return function (arg0)
        {
            (asm.x60001b2_init(T).apply)(this,arguments);
            return (asm.x60001b2_(T).apply)(this,arguments);
        };
    };;
    asm.x60001b2_ = function (T)
    {
        return function Unbox(arg0)
        {
            var t0;
            var t1;
            var t2;
            var loc2;
            var __pos__;
            var in_block_0;
            var __finally_continuation_0__;
            var loc1;
            var loc0;
            t0 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
            t1 = T;
            t2 = (asm0)["System.Nullable`1"](t1);
            loc2 = new ((asm0)["System.Nullable`1"](T))();
            __pos__ = 0x0;
            in_block_0 = true;
            __finally_continuation_0__ = __pos__;
            __pos__ = 0;
            
            while (in_block_0){
                
                switch (__pos__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.0 */
                    /* IL_02: ldnull */
                    /* IL_04: ceq */
                    /* IL_05: ldc.i4.0 */
                    /* IL_07: ceq */
                    /* IL_08: stloc.1 */
                    loc1 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_09: ldloc.1 */
                    /* IL_0A: brtrue.s IL_18*/
                    
                    if (loc1){
                        __pos__ = 0x18;
                        continue;
                    }
                    /* IL_0C: ldloca.s 2*/
                    /* IL_0F: initobj System.Nullable`1[T]*/
                    loc2 = new t2();
                    /* IL_14: ldloc.2 */
                    /* IL_15: stloc.0 */
                    loc0 = loc2;
                    /* IL_16: br.s IL_26*/
                    __pos__ = 0x26;
                    continue;
                    case 0x18:
                    /* IL_18: ldarg.0 */
                    /* IL_19: unbox.any T*/
                    /* IL_1E: newobj Void .ctor(T)*/
                    /* IL_23: stloc.0 */
                    loc0 = BLR.newobj(t2,asm0.x60001a6,[null, BLR.clone_value(BLR.unbox_any(arg0,t1))]);
                    case 0x26:
                    /* IL_26: ldloc.0 */
                    /* IL_27: ret */
                    return loc0;
                }
            }
        };
    };
    /*  Nullable`1..ctor(T)*/
    asm.x60001a6 = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldc.i4.1 */
        /* IL_03: stfld Boolean has_value*/
        arg0.r().has_value = (1|0);
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld T value*/
        arg0.r().value = arg1;
        /* IL_0F: ret */
        return ;
    };;
    /*  SerializableAttribute..ctor()*/
    asm.x60001b3 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static System.Int32 String.GetLengthImpl(Object)*/
    asm.x60001b4 = function(o) { return o.jsstr.length; };;
    /* static System.Boolean String.EqualsImpl(String,String)*/
    asm.x60001b5 = function(a, b) { return a.jsstr === b.jsstr ? 1 : 0; };;
    /* static System.String String.ConcatImpl(String[])*/
    asm.x60001b6 = function (args) { return BLR.new_string(String.prototype.concat.apply('', args.jsarr)); };;
    /* static System.Char String.GetChar(String,Int32)*/
    asm.x60001b7 = function (s, i) { return s.jsstr.charCodeAt(i); };;
    /* static System.String String.ReplaceImpl(String,String,String)*/
    asm.x60001b8 = function replaceAll(s, find, replace) {
                        function escapeRegExp(s2) {
                            return s2.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
                        }
                      return BLR.new_string(s.jsstr.replace(new RegExp(escapeRegExp(find.jsstr), 'g'), replace.jsstr));
                    };;
    /* System.Char String.get_Chars(Int32)*/
    asm.x60001b9 = function get_Chars(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Char GetChar(System.String, System.Int32)*/
        /* IL_08: stloc.0 */
        loc0 = asm0.x60001b7(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* static System.String String.Concat(String,String)*/
    asm.x60001bb = function Concat(arg0,arg1)
    {
        var t0;
        var __pos__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.String"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.2 */
        /* IL_02: newarr System.String*/
        /* IL_07: stloc.1 */
        loc1 = BLR.new_array(t0,(2|0));
        /* IL_08: ldloc.1 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: ldarg.0 */
        /* IL_0B: stelem.ref */
        BLR.stelem_ref(loc1,(0|0),arg0);
        /* IL_0C: ldloc.1 */
        /* IL_0D: ldc.i4.1 */
        /* IL_0E: ldarg.1 */
        /* IL_0F: stelem.ref */
        BLR.stelem_ref(loc1,(1|0),arg1);
        /* IL_10: ldloc.1 */
        /* IL_11: call String ConcatImpl(System.String[])*/
        /* IL_16: stloc.0 */
        loc0 = asm0.x60001b6(loc1);
        /* IL_19: ldloc.0 */
        /* IL_1A: ret */
        return loc0;
    };;
    /* static System.String String.Concat(Object,Object,Object)*/
    asm.x60001bc = function Concat(arg0,arg1,arg2)
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
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.String"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                st_00 = arg0;
                /* IL_02: dup */
                st_03 = (st_02 = (st_01 = st_00));
                /* IL_03: brtrue.s IL_0B*/
                
                if (st_01){
                    __pos__ = 0xB;
                    continue;
                }
                /* IL_05: pop */
                
                asm0.x60001d6();
                /* IL_06: ldsfld String Empty*/
                st_03 = t0.Empty;
                case 0xB:
                /* IL_0B: starg.s 0*/
                arg0 = st_03;
                /* IL_0D: ldarg.1 */
                st_04 = arg1;
                /* IL_0E: dup */
                st_07 = (st_06 = (st_05 = st_04));
                /* IL_0F: brtrue.s IL_17*/
                
                if (st_05){
                    __pos__ = 0x17;
                    continue;
                }
                /* IL_11: pop */
                
                asm0.x60001d6();
                /* IL_12: ldsfld String Empty*/
                st_07 = t0.Empty;
                case 0x17:
                /* IL_17: starg.s 1*/
                arg1 = st_07;
                /* IL_19: ldarg.2 */
                st_08 = arg2;
                /* IL_1A: dup */
                st_0B = (st_0A = (st_09 = st_08));
                /* IL_1B: brtrue.s IL_23*/
                
                if (st_09){
                    __pos__ = 0x23;
                    continue;
                }
                /* IL_1D: pop */
                
                asm0.x60001d6();
                /* IL_1E: ldsfld String Empty*/
                st_0B = t0.Empty;
                case 0x23:
                /* IL_23: starg.s 2*/
                arg2 = st_0B;
                /* IL_25: ldc.i4.3 */
                /* IL_26: newarr System.String*/
                /* IL_2B: stloc.1 */
                loc1 = BLR.new_array(t0,(3|0));
                /* IL_2C: ldloc.1 */
                /* IL_2D: ldc.i4.0 */
                /* IL_2E: ldarg.0 */
                /* IL_2F: callvirt String ToString()*/
                /* IL_34: stelem.ref */
                BLR.stelem_ref(loc1,(0|0),((arg0.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(arg0)));
                /* IL_35: ldloc.1 */
                /* IL_36: ldc.i4.1 */
                /* IL_37: ldarg.1 */
                /* IL_38: callvirt String ToString()*/
                /* IL_3D: stelem.ref */
                BLR.stelem_ref(loc1,(1|0),((arg1.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(arg1)));
                /* IL_3E: ldloc.1 */
                /* IL_3F: ldc.i4.2 */
                /* IL_40: ldarg.2 */
                /* IL_41: callvirt String ToString()*/
                /* IL_46: stelem.ref */
                BLR.stelem_ref(loc1,(2|0),((arg2.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(arg2)));
                /* IL_47: ldloc.1 */
                /* IL_48: call String ConcatImpl(System.String[])*/
                /* IL_4D: stloc.0 */
                loc0 = asm0.x60001b6(loc1);
                /* IL_50: ldloc.0 */
                /* IL_51: ret */
                return loc0;
            }
        }
    };;
    /* static System.String String.Concat(String,String,String)*/
    asm.x60001bd = function Concat(arg0,arg1,arg2)
    {
        var t0;
        var __pos__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.String"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.3 */
        /* IL_02: newarr System.String*/
        /* IL_07: stloc.1 */
        loc1 = BLR.new_array(t0,(3|0));
        /* IL_08: ldloc.1 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: ldarg.0 */
        /* IL_0B: stelem.ref */
        BLR.stelem_ref(loc1,(0|0),arg0);
        /* IL_0C: ldloc.1 */
        /* IL_0D: ldc.i4.1 */
        /* IL_0E: ldarg.1 */
        /* IL_0F: stelem.ref */
        BLR.stelem_ref(loc1,(1|0),arg1);
        /* IL_10: ldloc.1 */
        /* IL_11: ldc.i4.2 */
        /* IL_12: ldarg.2 */
        /* IL_13: stelem.ref */
        BLR.stelem_ref(loc1,(2|0),arg2);
        /* IL_14: ldloc.1 */
        /* IL_15: call String ConcatImpl(System.String[])*/
        /* IL_1A: stloc.0 */
        loc0 = asm0.x60001b6(loc1);
        /* IL_1D: ldloc.0 */
        /* IL_1E: ret */
        return loc0;
    };;
    /* static System.String String.Concat(String,String,String,String)*/
    asm.x60001be = function Concat(arg0,arg1,arg2,arg3)
    {
        var t0;
        var __pos__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.String"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.4 */
        /* IL_02: newarr System.String*/
        /* IL_07: stloc.1 */
        loc1 = BLR.new_array(t0,(4|0));
        /* IL_08: ldloc.1 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: ldarg.0 */
        /* IL_0B: stelem.ref */
        BLR.stelem_ref(loc1,(0|0),arg0);
        /* IL_0C: ldloc.1 */
        /* IL_0D: ldc.i4.1 */
        /* IL_0E: ldarg.1 */
        /* IL_0F: stelem.ref */
        BLR.stelem_ref(loc1,(1|0),arg1);
        /* IL_10: ldloc.1 */
        /* IL_11: ldc.i4.2 */
        /* IL_12: ldarg.2 */
        /* IL_13: stelem.ref */
        BLR.stelem_ref(loc1,(2|0),arg2);
        /* IL_14: ldloc.1 */
        /* IL_15: ldc.i4.3 */
        /* IL_16: ldarg.3 */
        /* IL_17: stelem.ref */
        BLR.stelem_ref(loc1,(3|0),arg3);
        /* IL_18: ldloc.1 */
        /* IL_19: call String ConcatImpl(System.String[])*/
        /* IL_1E: stloc.0 */
        loc0 = asm0.x60001b6(loc1);
        /* IL_21: ldloc.0 */
        /* IL_22: ret */
        return loc0;
    };;
    /* static System.String String.Concat(Object,Object)*/
    asm.x60001bf = function Concat(arg0,arg1)
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
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.String"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                st_00 = arg0;
                /* IL_02: dup */
                st_03 = (st_02 = (st_01 = st_00));
                /* IL_03: brtrue.s IL_0B*/
                
                if (st_01){
                    __pos__ = 0xB;
                    continue;
                }
                /* IL_05: pop */
                
                asm0.x60001d6();
                /* IL_06: ldsfld String Empty*/
                st_03 = t0.Empty;
                case 0xB:
                /* IL_0B: starg.s 0*/
                arg0 = st_03;
                /* IL_0D: ldarg.1 */
                st_04 = arg1;
                /* IL_0E: dup */
                st_07 = (st_06 = (st_05 = st_04));
                /* IL_0F: brtrue.s IL_17*/
                
                if (st_05){
                    __pos__ = 0x17;
                    continue;
                }
                /* IL_11: pop */
                
                asm0.x60001d6();
                /* IL_12: ldsfld String Empty*/
                st_07 = t0.Empty;
                case 0x17:
                /* IL_17: starg.s 1*/
                arg1 = st_07;
                /* IL_19: ldc.i4.2 */
                /* IL_1A: newarr System.String*/
                /* IL_1F: stloc.1 */
                loc1 = BLR.new_array(t0,(2|0));
                /* IL_20: ldloc.1 */
                /* IL_21: ldc.i4.0 */
                /* IL_22: ldarg.0 */
                /* IL_23: callvirt String ToString()*/
                /* IL_28: stelem.ref */
                BLR.stelem_ref(loc1,(0|0),((arg0.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(arg0)));
                /* IL_29: ldloc.1 */
                /* IL_2A: ldc.i4.1 */
                /* IL_2B: ldarg.1 */
                /* IL_2C: callvirt String ToString()*/
                /* IL_31: stelem.ref */
                BLR.stelem_ref(loc1,(1|0),((arg1.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(arg1)));
                /* IL_32: ldloc.1 */
                /* IL_33: call String ConcatImpl(System.String[])*/
                /* IL_38: stloc.0 */
                loc0 = asm0.x60001b6(loc1);
                /* IL_3B: ldloc.0 */
                /* IL_3C: ret */
                return loc0;
            }
        }
    };;
    /* static System.String String.Concat(String[])*/
    asm.x60001c0 = function Concat(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call String ConcatImpl(System.String[])*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x60001b6(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static System.String String.Concat(Object[])*/
    asm.x60001c1 = function Concat(arg0)
    {
        var t0;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
        var st_0A;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc4;
        var loc3;
        t0 = (asm0)["System.String"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldlen */
                /* IL_03: conv.i4 */
                /* IL_04: newarr System.String*/
                /* IL_09: stloc.0 */
                loc0 = BLR.new_array(t0,arg0.jsarr.length | (0|0));
                /* IL_0A: ldc.i4.0 */
                /* IL_0B: stloc.1 */
                loc1 = (0|0);
                /* IL_0C: br.s IL_2A*/
                __pos__ = 0x2A;
                continue;
                case 0xE:
                /* IL_0E: nop */
                
                /* IL_0F: ldarg.0 */
                st_05 = arg0;
                /* IL_10: ldloc.1 */
                st_06 = loc1;
                /* IL_11: ldelem.ref */
                st_07 = BLR.ldelem_ref(st_05,st_06);
                /* IL_12: dup */
                st_0A = (st_09 = (st_08 = st_07));
                /* IL_13: brtrue.s IL_1B*/
                
                if (st_08){
                    __pos__ = 0x1B;
                    continue;
                }
                /* IL_15: pop */
                
                asm0.x60001d6();
                /* IL_16: ldsfld String Empty*/
                st_0A = t0.Empty;
                case 0x1B:
                /* IL_1B: stloc.2 */
                loc2 = st_0A;
                /* IL_1C: ldloc.0 */
                /* IL_1D: ldloc.1 */
                /* IL_1E: ldloc.2 */
                /* IL_1F: callvirt String ToString()*/
                /* IL_24: stelem.ref */
                BLR.stelem_ref(loc0,loc1,((loc2.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(loc2)));
                /* IL_25: nop */
                
                /* IL_26: ldloc.1 */
                /* IL_27: ldc.i4.1 */
                /* IL_28: add */
                /* IL_29: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x2A:
                /* IL_2A: ldloc.1 */
                /* IL_2B: ldarg.0 */
                /* IL_2C: ldlen */
                /* IL_2D: conv.i4 */
                /* IL_2F: clt */
                /* IL_30: stloc.s 4*/
                loc4 = ((loc1 < (arg0.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_32: ldloc.s 4*/
                /* IL_34: brtrue.s IL_0E*/
                
                if (loc4){
                    __pos__ = 0xE;
                    continue;
                }
                /* IL_36: ldloc.0 */
                /* IL_37: call String Concat(System.String[])*/
                /* IL_3C: stloc.3 */
                loc3 = asm0.x60001c0(loc0);
                /* IL_3F: ldloc.3 */
                /* IL_40: ret */
                return loc3;
            }
        }
    };;
    /* System.String String.Replace(String,String)*/
    asm.x60001c2 = function Replace(arg0,arg1,arg2)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: ldarg.2 */
        /* IL_04: call String ReplaceImpl(System.String, System.String, System.String)*/
        /* IL_09: stloc.0 */
        loc0 = asm0.x60001b8(arg0,arg1,arg2);
        /* IL_0C: ldloc.0 */
        /* IL_0D: ret */
        return loc0;
    };;
    /* System.Int32 String.get_Length()*/
    asm.x60001c3 = function get_Length(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetLengthImpl(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x60001b4(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* System.String String.ToString()*/
    asm.x60001c4 = function ToString(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: stloc.0 */
        loc0 = arg0;
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* static System.Boolean String.op_Inequality(String,String)*/
    asm.x60001c5 = function op_Inequality(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean op_Equality(System.String, System.String)*/
        /* IL_08: ldc.i4.0 */
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = ((asm0.x60001c6(arg0,arg1) === (0|0)) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    /* static System.Boolean String.op_Equality(String,String)*/
    asm.x60001c6 = function op_Equality(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.1 */
                loc1 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.1 */
                /* IL_0A: brtrue.s IL_13*/
                
                if (loc1){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0C: ldarg.1 */
                /* IL_0D: ldnull */
                /* IL_0F: ceq */
                /* IL_10: stloc.0 */
                loc0 = ((arg1 === null) ? (1) : (0));
                /* IL_11: br.s IL_2C*/
                __pos__ = 0x2C;
                continue;
                case 0x13:
                /* IL_13: ldarg.1 */
                /* IL_14: ldnull */
                /* IL_16: ceq */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.1 */
                loc1 = ((((arg1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.1 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc1){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.0 */
                /* IL_1F: stloc.0 */
                loc0 = (0|0);
                /* IL_20: br.s IL_2C*/
                __pos__ = 0x2C;
                continue;
                case 0x22:
                /* IL_22: ldarg.0 */
                /* IL_23: ldarg.1 */
                /* IL_24: call Boolean EqualsImpl(System.String, System.String)*/
                /* IL_29: stloc.0 */
                loc0 = asm0.x60001b5(arg0,arg1);
                case 0x2C:
                /* IL_2C: ldloc.0 */
                /* IL_2D: ret */
                return loc0;
            }
        }
    };;
    /* System.Boolean String.Equals(String)*/
    asm.x60001c7 = function Equals(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.1 */
                loc1 = ((((arg1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.1 */
                /* IL_0A: brtrue.s IL_10*/
                
                if (loc1){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0C: ldc.i4.0 */
                /* IL_0D: stloc.0 */
                loc0 = (0|0);
                /* IL_0E: br.s IL_1A*/
                __pos__ = 0x1A;
                continue;
                case 0x10:
                /* IL_10: ldarg.0 */
                /* IL_11: ldarg.1 */
                /* IL_12: call Boolean EqualsImpl(System.String, System.String)*/
                /* IL_17: stloc.0 */
                loc0 = asm0.x60001b5(arg0,arg1);
                case 0x1A:
                /* IL_1A: ldloc.0 */
                /* IL_1B: ret */
                return loc0;
            }
        }
    };;
    /* System.Boolean String.Equals(Object)*/
    asm.x60001c8 = function Equals(arg0,arg1)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.String"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: isinst System.String*/
        /* IL_08: call Boolean Equals(System.String)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x60001c7(arg0,t0.IsInst(arg1));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* static System.Int32 String.GetHashCodeImpl(String)*/
    asm.x60001c9 = 
            function (o) {
                var str = o.jsstr;
                var length = str.length;
                var h = 0;
                for (var i = 0; i < length; i += 1)
                    h = (h << 5) - h + str.charCodeAt(i);
                return h;
            };;
    /* System.Int32 String.GetHashCode()*/
    asm.x60001ca = function GetHashCode(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetHashCodeImpl(System.String)*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x60001c9(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static System.Int32 String.CompareOrdinal(String,String)*/
    asm.x60001cb = 
            function (a, b) {
                if (a.jsstr < b.jsstr)
                    return -1;

                if (a.jsstr > b.jsstr)
                    return 1;

                return 0;
            }
            ;;
    /* static System.Int32 String.Compare(String,String)*/
    asm.x60001cc = function Compare(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Int32 CompareOrdinal(System.String, System.String)*/
        /* IL_08: stloc.0 */
        loc0 = asm0.x60001cb(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* static System.String String.Format(String,Object[])*/
    asm.x60001cd = function Format(arg0,arg1)
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc3;
        var loc2;
        t0 = (asm0)["System.String"]();
        t1 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldc.i4.0 */
                /* IL_02: stloc.0 */
                loc0 = (0|0);
                /* IL_03: br.s IL_43*/
                __pos__ = 0x43;
                continue;
                case 0x5:
                /* IL_05: nop */
                
                /* IL_06: ldarg.1 */
                /* IL_07: ldloc.0 */
                /* IL_08: ldelem.ref */
                /* IL_09: stloc.1 */
                loc1 = BLR.ldelem_ref(arg1,loc0);
                /* IL_0A: ldloc.1 */
                /* IL_0B: ldnull */
                /* IL_0D: ceq */
                /* IL_0E: ldc.i4.0 */
                /* IL_10: ceq */
                /* IL_11: stloc.3 */
                loc3 = ((((loc1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_12: ldloc.3 */
                /* IL_13: brtrue.s IL_1B*/
                
                if (loc3){
                    __pos__ = 0x1B;
                    continue;
                }
                asm0.x60001d6();
                /* IL_15: ldsfld String Empty*/
                /* IL_1A: stloc.1 */
                loc1 = t0.Empty;
                case 0x1B:
                /* IL_1B: ldarg.0 */
                /* IL_1C: ldstr {*/
                /* IL_21: ldloc.0 */
                /* IL_22: box System.Int32*/
                /* IL_27: ldstr }*/
                /* IL_2C: call String Concat(System.Object, System.Object, System.Object)*/
                /* IL_31: ldloc.1 */
                /* IL_32: callvirt String ToString()*/
                /* IL_37: callvirt String Replace(System.String, System.String)*/
                /* IL_3C: starg.s 0*/
                arg0 = asm0.x60001c2(arg0,asm0.x60001bc(BLR.new_string("{"),{
                            'boxed': loc0,
                            'type': t1,
                            'vtable': t1.prototype.vtable,
                            'ifacemap': t1.prototype.ifacemap
                        },BLR.new_string("}")),((loc1.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(loc1)));
                /* IL_3E: nop */
                
                /* IL_3F: ldloc.0 */
                /* IL_40: ldc.i4.1 */
                /* IL_41: add */
                /* IL_42: stloc.0 */
                loc0 = (loc0 + (1|0)) | (0|0);
                case 0x43:
                /* IL_43: ldloc.0 */
                /* IL_44: ldarg.1 */
                /* IL_45: ldlen */
                /* IL_46: conv.i4 */
                /* IL_48: clt */
                /* IL_49: stloc.3 */
                loc3 = ((loc0 < (arg1.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_4A: ldloc.3 */
                /* IL_4B: brtrue.s IL_05*/
                
                if (loc3){
                    __pos__ = 0x5;
                    continue;
                }
                /* IL_4D: ldarg.0 */
                /* IL_4E: stloc.2 */
                loc2 = arg0;
                /* IL_51: ldloc.2 */
                /* IL_52: ret */
                return loc2;
            }
        }
    };;
    /* static System.String String.ToLowerImpl(String)*/
    asm.x60001ce = function(v) { return BLR.new_string(v.jsstr.toLowerCase()); } ;;
    /* System.String String.ToLower()*/
    asm.x60001cf = function ToLower(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call String ToLowerImpl(System.String)*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x60001ce(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static System.String String.ToUpperImpl(String)*/
    asm.x60001d0 = function(v) { return BLR.new_string(v.jsstr.toUpperCase()); } ;;
    /* System.String String.ToUpper()*/
    asm.x60001d1 = function ToUpper(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call String ToUpperImpl(System.String)*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x60001d0(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* System.Int32 String.CompareTo(String)*/
    asm.x60001d3 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.1 */
                loc1 = ((((arg1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.1 */
                /* IL_0A: brtrue.s IL_10*/
                
                if (loc1){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_0C: ldc.i4.1 */
                /* IL_0D: stloc.0 */
                loc0 = (1|0);
                /* IL_0E: br.s IL_1A*/
                __pos__ = 0x1A;
                continue;
                case 0x10:
                /* IL_10: ldarg.0 */
                /* IL_11: ldarg.1 */
                /* IL_12: call Int32 CompareToImpl(System.String, System.String)*/
                /* IL_17: stloc.0 */
                loc0 = (arg0.jsstr.localeCompare(arg1.jsstr));
                case 0x1A:
                /* IL_1A: ldloc.0 */
                /* IL_1B: ret */
                return loc0;
            }
        }
    };;
    /* static System.Boolean String.IsNullOrEmpty(String)*/
    asm.x60001d4 = function IsNullOrEmpty(arg0)
    {
        var t0;
        var st_03;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        t0 = (asm0)["System.String"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: brfalse.s IL_11*/
                
                if ((!(arg0))){
                    __pos__ = 0x11;
                    continue;
                }
                asm0.x60001d6();
                /* IL_04: ldarg.0 */
                /* IL_05: ldsfld String Empty*/
                /* IL_0A: call Boolean op_Equality(System.String, System.String)*/
                st_03 = asm0.x60001c6(arg0,t0.Empty);
                /* IL_0F: br.s IL_12*/
                __pos__ = 0x12;
                continue;
                case 0x11:
                /* IL_11: ldc.i4.1 */
                st_03 = (1|0);
                case 0x12:
                /* IL_12: nop */
                
                /* IL_13: stloc.0 */
                loc0 = st_03;
                /* IL_16: ldloc.0 */
                /* IL_17: ret */
                return loc0;
            }
        }
    };;
    /*  String..ctor()*/
    asm.x60001d5 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static  String..cctor()*/
    asm.x60001d6 = function _cctor()
    {
        var t0;
        var __pos__;
        
        if ((asm0)["System.String"]().FieldsInitialized){
            return;
        }
        (asm0)["System.String"]().FieldsInitialized = true;
        t0 = (asm0)["System.String"]();
        __pos__ = 0x0;
        /* IL_00: ldstr */
        /* IL_05: stsfld String Empty*/
        (t0)["Empty"] = BLR.new_string("");
        /* IL_0A: ret */
        return ;
    };;
    /* System.String DefaultMemberAttribute.get_MemberName()*/
    asm.x60001d8 = function get_MemberName(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld String member_name*/
        /* IL_07: stloc.0 */
        loc0 = arg0.System_ReflectionDefaultMemberAttributemember_name;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /*  DefaultMemberAttribute..ctor(String)*/
    asm.x60001d7 = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld String member_name*/
        arg0.System_ReflectionDefaultMemberAttributemember_name = arg1;
        /* IL_0F: nop */
        /* IL_10: ret */
        return ;
    };;
    /* System.String UInt16.ToString()*/
    asm.x60001da = function ToString(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.UInt16"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u2 */
        /* IL_03: box System.UInt16*/
        /* IL_08: ldc.i4.s 16*/
        /* IL_0A: call String UnsignedPrimitiveToString(System.Object, System.Int32)*/
        /* IL_0F: stloc.0 */
        loc0 = asm0.x60000d8({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },(16|0));
        /* IL_12: ldloc.0 */
        /* IL_13: ret */
        return loc0;
    };;
    /* System.Int32 UInt16.CompareTo(Object)*/
    asm.x60001db = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.UInt16*/
        /* IL_08: call Int32 CompareTo(System.UInt16)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x60001dc(arg0,BLR.unbox_any(arg1,(asm0)["System.UInt16"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 UInt16.CompareTo(UInt16)*/
    asm.x60001dc = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.u2 */
                /* IL_03: stloc.0 */
                loc0 = arg0.r();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: clt */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((((loc0 < arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: ldarg.1 */
                /* IL_16: cgt */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.2 */
                loc2 = ((((loc0 > arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.2 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc2){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: stloc.1 */
                loc1 = (0|0);
                case 0x26:
                /* IL_26: ldloc.1 */
                /* IL_27: ret */
                return loc1;
            }
        }
    };;
    /* System.Boolean UInt16.Equals(UInt16)*/
    asm.x60001dd = function Equals(arg0,arg1)
    {
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u2 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_04: ldarg.1 */
        /* IL_05: stloc.1 */
        loc1 = arg1;
        /* IL_06: ldloc.0 */
        /* IL_07: ldloc.1 */
        /* IL_09: ceq */
        /* IL_0A: stloc.2 */
        loc2 = ((loc0 === loc1) ? (1) : (0));
        /* IL_0D: ldloc.2 */
        /* IL_0E: ret */
        return loc2;
    };;
    /* System.Boolean UInt16.Equals(Object)*/
    asm.x60001de = function Equals(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.UInt16"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.UInt16*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.1 */
                loc1 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.1 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc1){
                    __pos__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.0 */
                loc0 = (0|0);
                /* IL_10: br.s IL_1C*/
                __pos__ = 0x1C;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldarg.1 */
                /* IL_14: call Boolean Equals(System.Object)*/
                /* IL_19: stloc.0 */
                loc0 = asm0.x60001de(arg0,arg1);
                case 0x1C:
                /* IL_1C: ldloc.0 */
                /* IL_1D: ret */
                return loc0;
            }
        }
    };;
    /* System.Int32 UInt16.GetHashCode()*/
    asm.x60001df = function GetHashCode(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u2 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* System.String UInt32.ToString()*/
    asm.x60001e0 = function ToString(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.UInt32"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u4 */
        /* IL_03: box System.UInt32*/
        /* IL_08: ldc.i4.s 32*/
        /* IL_0A: call String UnsignedPrimitiveToString(System.Object, System.Int32)*/
        /* IL_0F: stloc.0 */
        loc0 = asm0.x60000d8({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },(32|0));
        /* IL_12: ldloc.0 */
        /* IL_13: ret */
        return loc0;
    };;
    /* System.Boolean UInt32.Equals(Object)*/
    asm.x60001e1 = function Equals(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = (asm0)["System.UInt32"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.UInt32*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.3 */
                loc3 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc3){
                    __pos__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos__ = 0x23;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldind.u4 */
                /* IL_14: stloc.0 */
                loc0 = arg0.r();
                /* IL_15: ldarg.1 */
                /* IL_16: unbox.any System.UInt32*/
                /* IL_1B: stloc.1 */
                loc1 = BLR.unbox_any(arg1,t0);
                /* IL_1C: ldloc.0 */
                /* IL_1D: ldloc.1 */
                /* IL_1F: ceq */
                /* IL_20: stloc.2 */
                loc2 = ((loc0 === loc1) ? (1) : (0));
                case 0x23:
                /* IL_23: ldloc.2 */
                /* IL_24: ret */
                return loc2;
            }
        }
    };;
    /* System.Int32 UInt32.GetHashCode()*/
    asm.x60001e2 = function GetHashCode(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u4 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* System.Int32 UInt32.CompareTo(Object)*/
    asm.x60001e3 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.UInt32*/
        /* IL_08: call Int32 CompareTo(System.UInt32)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x60001e4(arg0,BLR.unbox_any(arg1,(asm0)["System.UInt32"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 UInt32.CompareTo(UInt32)*/
    asm.x60001e4 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.u4 */
                /* IL_03: stloc.0 */
                loc0 = arg0.r();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: clt.un */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((((BLR.unsigned_value(loc0) < BLR.unsigned_value(arg1)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: ldarg.1 */
                /* IL_16: cgt.un */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.2 */
                loc2 = ((((BLR.unsigned_value(loc0) > BLR.unsigned_value(arg1)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.2 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc2){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: stloc.1 */
                loc1 = (0|0);
                case 0x26:
                /* IL_26: ldloc.1 */
                /* IL_27: ret */
                return loc1;
            }
        }
    };;
    /* System.String UInt64.ToString()*/
    asm.x60001e5 = function ToString(arg0)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc5;
        var loc4;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i8 */
                /* IL_03: stloc.0 */
                loc0 = arg0.r();
                /* IL_04: ldc.i4.s 10*/
                /* IL_06: conv.i8 */
                /* IL_07: stloc.1 */
                loc1 = BLR.conv_i8((10|0));
                /* IL_08: ldstr */
                /* IL_0D: stloc.2 */
                loc2 = BLR.new_string("");
                case 0xE:
                /* IL_0E: nop */
                
                /* IL_0F: ldloc.0 */
                /* IL_10: ldloc.1 */
                /* IL_11: rem.un */
                /* IL_12: stloc.3 */
                loc3 = asm0.UInt64_Modulus(loc0,loc1);
                /* IL_13: ldloc.3 */
                /* IL_14: call String GetLowString(System.UInt64)*/
                /* IL_19: ldloc.2 */
                /* IL_1A: call String Concat(System.String, System.String)*/
                /* IL_1F: stloc.2 */
                loc2 = asm0.x60001bb(BLR.new_string(loc3[0].toString()),loc2);
                /* IL_20: ldloc.0 */
                /* IL_21: ldloc.1 */
                /* IL_22: div.un */
                /* IL_23: stloc.0 */
                loc0 = asm0.UInt64_Division(loc0,loc1);
                /* IL_24: nop */
                
                /* IL_25: ldloc.0 */
                /* IL_26: ldc.i4.0 */
                /* IL_27: conv.i8 */
                /* IL_29: cgt.un */
                /* IL_2A: stloc.s 5*/
                loc5 = asm0.UInt64_GreaterThan(loc0,BLR.conv_i8((0|0)));
                /* IL_2C: ldloc.s 5*/
                /* IL_2E: brtrue.s IL_0E*/
                
                if (loc5){
                    __pos__ = 0xE;
                    continue;
                }
                /* IL_30: ldloc.2 */
                /* IL_31: stloc.s 4*/
                loc4 = loc2;
                /* IL_35: ldloc.s 4*/
                /* IL_37: ret */
                return loc4;
            }
        }
    };;
    /* static System.UInt64 UInt64.op_RightShift(UInt64,Int32)*/
    asm.x60001e7 = 
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
    asm.UInt64_RightShift = asm.x60001e7;
    /* static System.UInt64 UInt64.op_Division(UInt64,UInt64)*/
    asm.x60001e8 = 
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
    asm.UInt64_Division = asm.x60001e8;
    /* static System.UInt64 UInt64.op_Multiply(UInt64,UInt64)*/
    asm.x60001e9 = 
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
    asm.XInt64_Multiplication = asm.x60001e9;
    /* static System.Boolean UInt64.op_GreaterThanOrEqual(UInt64,UInt64)*/
    asm.x60001ea = 
            function UInt64_GreaterThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] >= b[0] ? 1: 0;
            };;
    asm.UInt64_GreaterThanOrEqual = asm.x60001ea;
    /* static System.Boolean UInt64.op_LessThanOrEqual(UInt64,UInt64)*/
    asm.x60001eb = 
            function UInt64_LessThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] <= b[0] ? 1: 0;
            };;
    asm.UInt64_LessThanOrEqual = asm.x60001eb;
    /* static System.Boolean UInt64.op_GreaterThan(UInt64,UInt64)*/
    asm.x60001ec = 
            function UInt64_GreaterThan (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] > b[0] ? 1: 0;
            };;
    asm.UInt64_GreaterThan = asm.x60001ec;
    /* static System.Boolean UInt64.op_LessThan(UInt64,UInt64)*/
    asm.x60001ed = 
            function UInt64_LessThan(a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] < b[0] ? 1: 0;
            };;
    asm.UInt64_LessThan = asm.x60001ed;
    /* static System.UInt64 UInt64.op_Modulus(UInt64,UInt64)*/
    asm.x60001ee = 
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
    asm.UInt64_Modulus = asm.x60001ee;
    /* System.Int32 UInt64.GetHashCode()*/
    asm.x60001ef = function GetHashCode(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i8 */
        /* IL_03: call Int32 GetLow(System.UInt64)*/
        /* IL_08: stloc.0 */
        loc0 = arg0.r()[0];
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* System.Int32 UInt64.CompareTo(Object)*/
    asm.x60001f1 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.UInt64*/
        /* IL_08: call Int32 CompareTo(System.UInt64)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x60001f2(arg0,BLR.unbox_any(arg1,(asm0)["System.UInt64"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* System.Int32 UInt64.CompareTo(UInt64)*/
    asm.x60001f2 = function CompareTo(arg0,arg1)
    {
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i8 */
                /* IL_03: stloc.0 */
                loc0 = arg0.r();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: clt.un */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((asm0.UInt64_LessThan(loc0,arg1) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: ldarg.1 */
                /* IL_16: cgt.un */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.2 */
                loc2 = ((asm0.UInt64_GreaterThan(loc0,arg1) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.2 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc2){
                    __pos__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos__ = 0x26;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: stloc.1 */
                loc1 = (0|0);
                case 0x26:
                /* IL_26: ldloc.1 */
                /* IL_27: ret */
                return loc1;
            }
        }
    };;
    /* System.Boolean UInt64.Equals(Object)*/
    asm.x60001f3 = function Equals(arg0,arg1)
    {
        var t0;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.UInt64"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.UInt64*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.1 */
                loc1 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.1 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc1){
                    __pos__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.0 */
                loc0 = (0|0);
                /* IL_10: br.s IL_21*/
                __pos__ = 0x21;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldarg.1 */
                /* IL_14: unbox.any System.UInt64*/
                /* IL_19: call Boolean Equals(System.UInt64)*/
                /* IL_1E: stloc.0 */
                loc0 = asm0.x60001f4(arg0,BLR.unbox_any(arg1,t0));
                case 0x21:
                /* IL_21: ldloc.0 */
                /* IL_22: ret */
                return loc0;
            }
        }
    };;
    /* System.Boolean UInt64.Equals(UInt64)*/
    asm.x60001f4 = function Equals(arg0,arg1)
    {
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i8 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_04: ldarg.1 */
        /* IL_05: stloc.1 */
        loc1 = arg1;
        /* IL_06: ldloc.0 */
        /* IL_07: ldloc.1 */
        /* IL_09: ceq */
        /* IL_0A: stloc.2 */
        loc2 = asm0.XInt64_Equality(loc0,loc1);
        /* IL_0D: ldloc.2 */
        /* IL_0E: ret */
        return loc2;
    };;
    /* System.String UIntPtr.ToString()*/
    asm.x60001f5_init = function ()
    {
        ((asm0)["System.UIntPtr"]().init)();
        asm.x60001f5 = asm.x60001f5_;
    };;
    asm.x60001f5 = function (arg0)
    {
        asm.x60001f5_init.apply(this,arguments);
        return asm.x60001f5_.apply(this,arguments);
    };;
    asm.x60001f5_ = function ToString(arg0)
    {
        var t0;
        var __pos__;
        var loc0;
        t0 = (asm0)["System.UIntPtr"]();
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldobj System.UIntPtr*/
        /* IL_07: box System.UIntPtr*/
        /* IL_0C: call String SignedPrimitiveToString(System.Object)*/
        /* IL_11: stloc.0 */
        loc0 = asm0.x60000d7({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };
    /* System.Boolean <GetEnumerator>d__0.MoveNext()*/
    asm.x60001f6 = function MoveNext(arg0)
    {
        var st_15;
        var st_16;
        var st_17;
        var st_18;
        var st_19;
        var st_1A;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc1;
        var __switch_value__;
        var __jmp__;
        var loc0;
        var loc2;
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldfld Int32 <>1__state*/
                /* IL_06: stloc.1 */
                loc1 = (arg0)["Braille_JavaScript_GetEnumerator_d__0<>1__state"];
                /* IL_07: ldloc.1 */
                /* IL_08: switch System.Int32[]*/
                __switch_value__ = BLR.unsigned_value(loc1);
                
                if (__switch_value__ >= 0x2){
                    __pos__ = 0x15;
                    continue;
                }
                __jmp__ = [
                    0x4,
                    0x2
                ];
                __pos__ = (0x15 + (__jmp__)[__switch_value__]);
                continue;
                case 0x15:
                /* IL_15: br.s IL_1B*/
                __pos__ = 0x1B;
                continue;
                case 0x17:
                /* IL_17: br.s IL_5D*/
                __pos__ = 0x5D;
                continue;
                case 0x19:
                /* IL_19: br.s IL_1D*/
                __pos__ = 0x1D;
                continue;
                case 0x1B:
                /* IL_1B: br.s IL_8B*/
                __pos__ = 0x8B;
                continue;
                case 0x1D:
                /* IL_1D: ldarg.0 */
                /* IL_1E: ldc.i4.m1 */
                /* IL_1F: stfld Int32 <>1__state*/
                (arg0)["Braille_JavaScript_GetEnumerator_d__0<>1__state"] = (-1|0);
                /* IL_24: nop */
                
                /* IL_25: ldarg.0 */
                /* IL_26: ldarg.0 */
                /* IL_27: ldfld Array <>4__this*/
                /* IL_2C: stfld Array <a>5__1*/
                (arg0)["<a>5__1"] = (arg0)["<>4__this"];
                /* IL_31: ldarg.0 */
                /* IL_32: ldc.i4.0 */
                /* IL_33: stfld Int32 <i>5__2*/
                (arg0)["<i>5__2"] = (0|0);
                /* IL_38: br.s IL_73*/
                __pos__ = 0x73;
                continue;
                case 0x3A:
                /* IL_3A: nop */
                
                /* IL_3B: ldarg.0 */
                /* IL_3C: ldarg.0 */
                /* IL_3D: ldfld Array <a>5__1*/
                /* IL_42: ldarg.0 */
                /* IL_43: ldfld Int32 <i>5__2*/
                /* IL_48: callvirt Object get_Item(System.Int32)*/
                /* IL_4D: stfld Object <>2__current*/
                (arg0)["Braille_JavaScript_GetEnumerator_d__0<>2__current"] = (arg0)["<a>5__1"][(arg0)["<i>5__2"]];
                /* IL_52: ldarg.0 */
                /* IL_53: ldc.i4.1 */
                /* IL_54: stfld Int32 <>1__state*/
                (arg0)["Braille_JavaScript_GetEnumerator_d__0<>1__state"] = (1|0);
                /* IL_59: ldc.i4.1 */
                /* IL_5A: stloc.0 */
                loc0 = (1|0);
                /* IL_5B: br.s IL_8F*/
                __pos__ = 0x8F;
                continue;
                case 0x5D:
                /* IL_5D: ldarg.0 */
                /* IL_5E: ldc.i4.m1 */
                /* IL_5F: stfld Int32 <>1__state*/
                (arg0)["Braille_JavaScript_GetEnumerator_d__0<>1__state"] = (-1|0);
                /* IL_64: nop */
                
                /* IL_65: ldarg.0 */
                st_15 = arg0;
                /* IL_66: dup */
                st_19 = (st_16 = st_15);
                /* IL_67: ldfld Int32 <i>5__2*/
                st_17 = (st_16)["<i>5__2"];
                /* IL_6C: ldc.i4.1 */
                st_18 = (1|0);
                /* IL_6D: add */
                st_1A = ((st_17 + st_18) | (0|0));
                /* IL_6E: stfld Int32 <i>5__2*/
                (st_19)["<i>5__2"] = st_1A;
                case 0x73:
                /* IL_73: ldarg.0 */
                /* IL_74: ldfld Int32 <i>5__2*/
                /* IL_79: ldarg.0 */
                /* IL_7A: ldfld Array <a>5__1*/
                /* IL_7F: callvirt Int32 get_Length()*/
                /* IL_85: clt */
                /* IL_86: stloc.2 */
                loc2 = (((arg0)["<i>5__2"] < (arg0)["<a>5__1"].length) ? (1) : (0));
                /* IL_87: ldloc.2 */
                /* IL_88: brtrue.s IL_3A*/
                
                if (loc2){
                    __pos__ = 0x3A;
                    continue;
                }
                /* IL_8A: nop */
                
                case 0x8B:
                /* IL_8B: ldc.i4.0 */
                /* IL_8C: stloc.0 */
                loc0 = (0|0);
                case 0x8F:
                /* IL_8F: ldloc.0 */
                /* IL_90: ret */
                return loc0;
            }
        }
    };;
    /* System.Object <GetEnumerator>d__0.System.Collections.Generic.IEnumerator<System.Object>.get_Current()*/
    asm.x60001f7 = function System_Collections_Generic_IEnumerator_System_Object__get_Current(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Object <>2__current*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["Braille_JavaScript_GetEnumerator_d__0<>2__current"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* System.Void <GetEnumerator>d__0.System.Collections.IEnumerator.Reset()*/
    asm.x60001f8_init = function ()
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x60001f8 = asm.x60001f8_;
    };;
    asm.x60001f8 = function (arg0)
    {
        asm.x60001f8_init.apply(this,arguments);
        return asm.x60001f8_.apply(this,arguments);
    };;
    asm.x60001f8_ = function System_Collections_IEnumerator_Reset(arg0)
    {
        var t0;
        var __pos__;
        t0 = (asm0)["System.NotSupportedException"]();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: throw */
        throw BLR.newobj(t0,asm0.x6000126,[null]);
    };
    /* System.Void <GetEnumerator>d__0.System.IDisposable.Dispose()*/
    asm.x60001f9 = function System_IDisposable_Dispose(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    /* System.Object <GetEnumerator>d__0.System.Collections.IEnumerator.get_Current()*/
    asm.x60001fa = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Object <>2__current*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["Braille_JavaScript_GetEnumerator_d__0<>2__current"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /*  <GetEnumerator>d__0..ctor(Int32)*/
    asm.x60001fb = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld Int32 <>1__state*/
        (arg0)["Braille_JavaScript_GetEnumerator_d__0<>1__state"] = arg1;
        /* IL_0D: ret */
        return ;
    };;
    /* System.Int32 <>c__DisplayClass1`1.<Sort>b__0(T,T)*/
    asm.x60001fd_init = function ()
    {
        ((asm0)["System.Collections.Generic.IComparer`1"]((((arguments)[0].constructor.GenericArguments)["asm0.t200006f"])[0]).init)();
    };;
    asm.x60001fd = function (arg0,arg1,arg2)
    {
        asm.x60001fd_init.apply(this,arguments);
        return asm.x60001fd_.apply(this,arguments);
    };;
    asm.x60001fd_ = function _Sort_b__0(arg0,arg1,arg2)
    {
        var t0;
        var t1;
        var __pos__;
        var loc0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm0.t200006f"])[0];
        t1 = (asm0)["System.Collections.Generic.IComparer`1"](t0);
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld IComparer`1 comparer*/
        /* IL_06: ldarg.1 */
        /* IL_07: ldarg.2 */
        /* IL_08: callvirt Int32 Compare(T, T)*/
        /* IL_0D: stloc.0 */
        loc0 = ((((arg0.comparer.ifacemap)[t1])[t0].x600002f)())(BLR.convert_box_to_pointer_as_needed(arg0.comparer),arg1,arg2);
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /*  <>c__DisplayClass1`1..ctor()*/
    asm.x60001fc = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    (asm)["System.Object"] = BLR.declare_type(
        "$$Object",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Object",false,false,false,false,false,[],[
                    [asm0, "x6000005", "ToString"],
                    [asm0, "x6000008", "Equals"],
                    [asm0, "x6000009", "GetHashCode"],
                    [asm0, "x600000a", "GetType"]
                ],null,BLR.is_inst_default(this),Array,"asm0.t2000002");
            this.GenericTypeMetadataName = "asm0.t2000002";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.toString = asm0.x6000004;
        });
    (asm)["System.Collections.IEnumerable"] = BLR.declare_type(
        "IEnumerable",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Collections.IEnumerable",false,false,true,false,false,[],[
                    [asm0, "x600000d", "GetEnumerator"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t2000003");
            this.GenericTypeMetadataName = "asm0.t2000003";
            BLR.declare_virtual(this,"asm0.x600000d","asm0.x600000d");
        });
    (asm)["System.Collections.Generic.IEnumerable`1"] = BLR.declare_type(
        "IEnumerable_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Collections.Generic.IEnumerable`1",false,false,true,true,false,[],[
                    [asm0, "x600000e", "GetEnumerator"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t2000004");
            (this.GenericArguments)["asm0.t2000004"] = [T];
            this.GenericTypeMetadataName = ("asm0.t2000004<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x600000e","asm0.x600000e");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                null);
        });
    (asm)["Braille.JavaScript.Array"] = BLR.declare_type(
        "Array",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Braille.JavaScript.Array",false,false,false,false,false,[
                    [
                        (asm0)["System.Reflection.DefaultMemberAttribute"](),
                        asm0.x60001d7,
                        [
                            BLR.new_string("Item")
                        ]
                    ]
                ],[
                    [asm0, "x6000011", "get_Length", []],
                    [asm0, "x6000012", "get_Item", []],
                    [asm0, "x6000013", "set_Item", []],
                    [asm0, "x6000014", "GetEnumerator"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000005");
            this.GenericTypeMetadataName = "asm0.t2000005";
            BLR.declare_virtual(this,"asm0.x6000014","asm0.x6000014");
            BLR.declare_virtual(this,"asm0.x6000015","asm0.x6000015");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerable`1"]((asm0)["System.Object"]()), (asm0)["System.Object"]()],
                {
                    'x600000e': function (){ return asm0.x6000014;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                {
                    'x600000d': function (){ return asm0.x6000015;}
                });
        });
    (asm)["System.ValueType"] = BLR.declare_type(
        "ValueType",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.ValueType",false,false,false,false,false,[],[
                    [asm0, "x6000016", "Equals"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000006");
            this.GenericTypeMetadataName = "asm0.t2000006";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Braille.JavaScript.Boolean"] = BLR.declare_type(
        "$$Boolean",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Braille.JavaScript.Boolean",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm0.t2000007");
            this.GenericTypeMetadataName = "asm0.t2000007";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Braille.JavaScript.String"] = BLR.declare_type(
        "$$String",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Braille.JavaScript.String",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000008");
            this.Emtpy = null;
            this.GenericTypeMetadataName = "asm0.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Braille.Runtime.InteropServices.Marshal"] = BLR.declare_type(
        "Marshal",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Braille.Runtime.InteropServices.Marshal",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000009");
            this.GenericTypeMetadataName = "asm0.t2000009";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Locale"] = BLR.declare_type(
        "Locale",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Locale",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200000a");
            this.GenericTypeMetadataName = "asm0.t200000a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Braille.Runtime.UnboundGenericParameter"] = BLR.declare_type(
        "UnboundGenericParameter",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Braille.Runtime.UnboundGenericParameter",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200000b");
            this.GenericTypeMetadataName = "asm0.t200000b";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Collections.Generic.ICollection`1"] = BLR.declare_type(
        "ICollection_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Collections.Generic.ICollection`1",false,false,true,true,false,[],[
                    [asm0, "x6000028", "get_Count"],
                    [asm0, "x6000029", "get_IsReadOnly"],
                    [asm0, "x600002a", "Add"],
                    [asm0, "x600002b", "Clear"],
                    [asm0, "x600002c", "Contains"],
                    [asm0, "x600002d", "CopyTo"],
                    [asm0, "x600002e", "Remove"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200000c");
            (this.GenericArguments)["asm0.t200000c"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200000c<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000028","asm0.x6000028");
            BLR.declare_virtual(this,"asm0.x6000029","asm0.x6000029");
            BLR.declare_virtual(this,"asm0.x600002a","asm0.x600002a");
            BLR.declare_virtual(this,"asm0.x600002b","asm0.x600002b");
            BLR.declare_virtual(this,"asm0.x600002c","asm0.x600002c");
            BLR.declare_virtual(this,"asm0.x600002d","asm0.x600002d");
            BLR.declare_virtual(this,"asm0.x600002e","asm0.x600002e");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerable`1"](T), T],
                null);
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                null);
        });
    (asm)["System.Collections.Generic.IComparer`1"] = BLR.declare_type(
        "IComparer_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Collections.Generic.IComparer`1",false,false,true,true,false,[],[
                    [asm0, "x600002f", "Compare"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200000d");
            (this.GenericArguments)["asm0.t200000d"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200000d<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x600002f","asm0.x600002f");
        });
    (asm)["System.Collections.IComparer"] = BLR.declare_type(
        "IComparer",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Collections.IComparer",false,false,true,false,false,[],[
                    [asm0, "x6000030", "Compare"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200000e");
            this.GenericTypeMetadataName = "asm0.t200000e";
            BLR.declare_virtual(this,"asm0.x6000030","asm0.x6000030");
        });
    (asm)["System.Collections.IEqualityComparer"] = BLR.declare_type(
        "IEqualityComparer",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Collections.IEqualityComparer",false,false,true,false,false,[],[
                    [asm0, "x6000031", "Equals"],
                    [asm0, "x6000032", "GetHashCode"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200000f");
            this.GenericTypeMetadataName = "asm0.t200000f";
            BLR.declare_virtual(this,"asm0.x6000031","asm0.x6000031");
            BLR.declare_virtual(this,"asm0.x6000032","asm0.x6000032");
        });
    (asm)["System.Reflection.Assembly"] = BLR.declare_type(
        "Assembly",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Reflection.Assembly",false,false,false,false,false,[],[
                    [asm0, "x6000035", "get_FullName"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000010");
            this.GenericTypeMetadataName = "asm0.t2000010";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.System_ReflectionAssemblyrawAsm = null;
        });
    (asm)["System.Reflection.Assembly+jsAsm"] = BLR.declare_type(
        "jsAsm",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Reflection.Assembly+jsAsm",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000011");
            this.GenericTypeMetadataName = "asm0.t2000011";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.FullName = null;
            this.prototype.ManagedInstance = null;
        });
    (asm)["System.Reflection.ICustomAttributeProvider"] = BLR.declare_type(
        "ICustomAttributeProvider",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Reflection.ICustomAttributeProvider",false,false,true,false,false,[],[
                    [asm0, "x6000037", "GetCustomAttributes"],
                    [asm0, "x6000038", "GetCustomAttributes"],
                    [asm0, "x6000039", "IsDefined"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t2000012");
            this.GenericTypeMetadataName = "asm0.t2000012";
            BLR.declare_virtual(this,"asm0.x6000037","asm0.x6000037");
            BLR.declare_virtual(this,"asm0.x6000038","asm0.x6000038");
            BLR.declare_virtual(this,"asm0.x6000039","asm0.x6000039");
        });
    (asm)["System.Reflection.MemberInfo"] = BLR.declare_type(
        "MemberInfo",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Reflection.MemberInfo",false,false,false,false,false,[],[
                    [asm0, "x600003a", "GetCustomAttributes"],
                    [asm0, "x600003b", "GetCustomAttributes"],
                    [asm0, "x600003c", "IsDefined"],
                    [asm0, "x600003e", "get_Name"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000013");
            this.GenericTypeMetadataName = "asm0.t2000013";
            BLR.declare_virtual(this,"asm0.x600003a","asm0.x600003a");
            BLR.declare_virtual(this,"asm0.x600003b","asm0.x600003b");
            BLR.declare_virtual(this,"asm0.x600003c","asm0.x600003c");
            BLR.declare_virtual(this,"asm0.x600003e","asm0.x600003e");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Reflection.ICustomAttributeProvider"]()],
                {
                    'x6000037': function (){ return asm0.x600003a;},
                    'x6000038': function (){ return asm0.x600003b;},
                    'x6000039': function (){ return asm0.x600003c;}
                });
        });
    (asm)["System.Reflection.MethodInfo"] = BLR.declare_type(
        "MethodInfo",
        [],
        function ()
        {
            return new ((asm0)["System.Reflection.MemberInfo"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Reflection.MethodInfo",false,false,false,false,false,[],[
                    [asm0, "x6000042", "GetCustomAttributes"],
                    [asm0, "x6000043", "GetCustomAttributes"],
                    [asm0, "x6000044", "IsDefined"],
                    [asm0, "x6000045", "get_Name"],
                    [asm0, "x6000046", "Invoke"]
                ],(asm0)["System.Reflection.MemberInfo"](),BLR.is_inst_default(this),Array,"asm0.t2000014");
            this.GenericTypeMetadataName = "asm0.t2000014";
            BLR.declare_virtual(this,"asm0.x600003a","asm0.x6000042");
            BLR.declare_virtual(this,"asm0.x600003b","asm0.x6000043");
            BLR.declare_virtual(this,"asm0.x600003c","asm0.x6000044");
            BLR.declare_virtual(this,"asm0.x600003e","asm0.x6000045");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Reflection.ICustomAttributeProvider"]()],
                {
                    'x6000037': function (){ return asm0.x6000042;},
                    'x6000038': function (){ return asm0.x6000043;},
                    'x6000039': function (){ return asm0.x6000044;}
                });
            this.prototype.System_ReflectionMethodInfomtd = null;
        });
    (asm)["System.Attribute"] = BLR.declare_type(
        "Attribute",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Attribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x6000076,
                        [
                            (32767|0)
                        ]
                    ]
                ],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000015");
            this.GenericTypeMetadataName = "asm0.t2000015";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Runtime.CompilerServices.InternalsVisibleToAttribute"] = BLR.declare_type(
        "InternalsVisibleToAttribute",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Runtime.CompilerServices.InternalsVisibleToAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x6000076,
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
                    [asm0, "x600004a", "get_AssemblyName"],
                    [asm0, "x600004b", "get_AllInternalsVisible"],
                    [asm0, "x600004c", "set_AllInternalsVisible"]
                ],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t2000016");
            this.GenericTypeMetadataName = "asm0.t2000016";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName = null;
            this.prototype.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = 0;
        });
    (asm)["System.Enum"] = BLR.declare_type(
        "Enum",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Enum",false,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_default(this),Array,"asm0.t2000017");
            this.GenericTypeMetadataName = "asm0.t2000017";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Runtime.CompilerServices.MethodCodeType"] = BLR.declare_type(
        "MethodCodeType",
        [],
        function ()
        {
            return new ((asm0)["System.Enum"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Runtime.CompilerServices.MethodCodeType",true,false,false,false,false,[],[],(asm0)["System.Enum"](),BLR.is_inst_value_type(this),Array,"asm0.t2000018");
            this.IL = new ((asm0)["System.Runtime.CompilerServices.MethodCodeType"]())();
            this.Native = new ((asm0)["System.Runtime.CompilerServices.MethodCodeType"]())();
            this.OPTIL = new ((asm0)["System.Runtime.CompilerServices.MethodCodeType"]())();
            this.Runtime = new ((asm0)["System.Runtime.CompilerServices.MethodCodeType"]())();
            this.GenericTypeMetadataName = "asm0.t2000018";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.value__ = 0;
        });
    (asm)["System.Runtime.CompilerServices.MethodImplAttribute"] = BLR.declare_type(
        "MethodImplAttribute",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Runtime.CompilerServices.MethodImplAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x6000076,
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
                    [asm0, "x6000052", "get_Value"]
                ],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t2000019");
            this.GenericTypeMetadataName = "asm0.t2000019";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.System_Runtime_CompilerServicesMethodImplAttribute_val = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.prototype.MethodCodeType = new ((asm0)["System.Runtime.CompilerServices.MethodCodeType"]())();
        });
    (asm)["System.Runtime.CompilerServices.MethodImplOptions"] = BLR.declare_type(
        "MethodImplOptions",
        [],
        function ()
        {
            return new ((asm0)["System.Enum"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Runtime.CompilerServices.MethodImplOptions",true,false,false,false,false,[
                    [
                        (asm0)["System.FlagsAttribute"](),
                        asm0.x60000b5
                    ]
                ],[],(asm0)["System.Enum"](),BLR.is_inst_value_type(this),Array,"asm0.t200001a");
            this.Unmanaged = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.ForwardRef = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.InternalCall = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.Synchronized = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.NoInlining = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.PreserveSig = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.NoOptimization = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.GenericTypeMetadataName = "asm0.t200001a";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.value__ = 0;
        });
    (asm)["System.Threading.AutoResetEvent"] = BLR.declare_type(
        "AutoResetEvent",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Threading.AutoResetEvent",false,false,false,false,false,[],[
                    [asm0, "x6000054", "Close"],
                    [asm0, "x6000055", "WaitOne"],
                    [asm0, "x6000056", "Set"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200001b");
            this.GenericTypeMetadataName = "asm0.t200001b";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Threading.Monitor"] = BLR.declare_type(
        "Monitor",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Threading.Monitor",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200001c");
            this.GenericTypeMetadataName = "asm0.t200001c";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Threading.Thread"] = BLR.declare_type(
        "Thread",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Threading.Thread",false,false,false,false,false,[],[
                    [asm0, "x600005a", "get_IsThreadPoolThread"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200001d");
            this.currentThread = null;
            this.GenericTypeMetadataName = "asm0.t200001d";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Threading.WaitHandle"] = BLR.declare_type(
        "WaitHandle",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Threading.WaitHandle",false,false,false,false,false,[],[
                    [asm0, "x600005e", "WaitOne"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200001e");
            this.GenericTypeMetadataName = "asm0.t200001e";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Activator"] = BLR.declare_type(
        "Activator",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Activator",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200001f");
            this.GenericTypeMetadataName = "asm0.t200001f";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Delegate"] = BLR.declare_type(
        "Delegate",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Delegate",false,false,false,false,false,[],[
                    [asm0, "x6000067", "Equals"],
                    [asm0, "x600006a", "GetHashCode"]
                ],(asm0)["System.Object"](),BLR.is_inst_delegate(this),Array,"asm0.t2000020");
            this.GenericTypeMetadataName = "asm0.t2000020";
            BLR.declare_virtual(this,"asm0.x6000065","asm0.x6000065");
            BLR.declare_virtual(this,"asm0.x6000066","asm0.x6000066");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    (asm)["System.MulticastDelegate"] = BLR.declare_type(
        "MulticastDelegate",
        [],
        function ()
        {
            return new ((asm0)["System.Delegate"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.MulticastDelegate",false,false,false,false,false,[],[],(asm0)["System.Delegate"](),BLR.is_inst_delegate(this),Array,"asm0.t2000021");
            this.GenericTypeMetadataName = "asm0.t2000021";
            BLR.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            BLR.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    (asm)["System.AsyncCallback"] = BLR.declare_type(
        "AsyncCallback",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.AsyncCallback",false,false,false,false,false,[],[
                    [asm0, "x6000073", "Invoke"],
                    [asm0, "x6000074", "BeginInvoke"],
                    [asm0, "x6000075", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm0.t2000022");
            this.GenericTypeMetadataName = "asm0.t2000022";
            BLR.declare_virtual(this,"asm0.x6000073","asm0.x6000073");
            BLR.declare_virtual(this,"asm0.x6000074","asm0.x6000074");
            BLR.declare_virtual(this,"asm0.x6000075","asm0.x6000075");
            BLR.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            BLR.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    (asm)["System.AttributeUsageAttribute"] = BLR.declare_type(
        "AttributeUsageAttribute",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.AttributeUsageAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x6000076,
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
                    [asm0, "x6000077", "get_ValidOn"],
                    [asm0, "x6000079", "get_Inherited"],
                    [asm0, "x600007a", "set_Inherited"],
                    [asm0, "x600007b", "get_AllowMultiple"],
                    [asm0, "x600007c", "set_AllowMultiple"]
                ],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t2000023");
            this.GenericTypeMetadataName = "asm0.t2000023";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            (this.prototype)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = new ((asm0)["System.AttributeTargets"]())();
            (this.prototype)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = 0;
            (this.prototype)["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"] = 0;
        });
    (asm)["System.IComparable`1"] = BLR.declare_type(
        "IComparable_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.IComparable`1",false,false,true,true,false,[],[
                    [asm0, "x600007d", "CompareTo"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t2000024");
            (this.GenericArguments)["asm0.t2000024"] = [T];
            this.GenericTypeMetadataName = ("asm0.t2000024<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x600007d","asm0.x600007d");
        });
    (asm)["System.IComparable"] = BLR.declare_type(
        "IComparable",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.IComparable",false,false,true,false,false,[],[
                    [asm0, "x600007e", "CompareTo"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t2000025");
            this.GenericTypeMetadataName = "asm0.t2000025";
            BLR.declare_virtual(this,"asm0.x600007e","asm0.x600007e");
        });
    (asm)["System.IEquatable`1"] = BLR.declare_type(
        "IEquatable_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.IEquatable`1",false,false,true,true,false,[],[
                    [asm0, "x600007f", "Equals"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t2000026");
            (this.GenericArguments)["asm0.t2000026"] = [T];
            this.GenericTypeMetadataName = ("asm0.t2000026<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x600007f","asm0.x600007f");
        });
    (asm)["System.Boolean"] = BLR.declare_type(
        "$$Boolean",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Boolean",true,true,false,false,false,[],[
                    [asm0, "x6000080", "ToString"],
                    [asm0, "x6000081", "GetHashCode"],
                    [asm0, "x6000082", "Equals"],
                    [asm0, "x6000083", "Equals"],
                    [asm0, "x6000084", "CompareTo"],
                    [asm0, "x6000085", "CompareTo"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Array,"asm0.t2000027");
            this.GenericTypeMetadataName = "asm0.t2000027";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000080");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000081");
            BLR.declare_virtual(this,"asm0.x6000082","asm0.x6000082");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000083");
            BLR.declare_virtual(this,"asm0.x6000084","asm0.x6000084");
            BLR.declare_virtual(this,"asm0.x6000085","asm0.x6000085");
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Boolean"]()), (asm0)["System.Boolean"]()],
                {
                    'x600007d': function (){ return asm0.x6000085;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x600007e': function (){ return asm0.x6000084;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.Boolean"]()), (asm0)["System.Boolean"]()],
                {
                    'x600007f': function (){ return asm0.x6000082;}
                });
        });
    (asm)["System.Byte"] = BLR.declare_type(
        "Byte",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Byte",true,true,false,false,false,[],[
                    [asm0, "x6000093", "ToString"],
                    [asm0, "x6000094", "CompareTo"],
                    [asm0, "x6000095", "CompareTo"],
                    [asm0, "x6000096", "Equals"],
                    [asm0, "x6000097", "Equals"],
                    [asm0, "x6000098", "GetHashCode"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Uint8Array,"asm0.t200002f");
            this.MinValue = 0;
            this.MaxValue = 0;
            this.GenericTypeMetadataName = "asm0.t200002f";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000093");
            BLR.declare_virtual(this,"asm0.x6000094","asm0.x6000094");
            BLR.declare_virtual(this,"asm0.x6000095","asm0.x6000095");
            BLR.declare_virtual(this,"asm0.x6000096","asm0.x6000096");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000097");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000098");
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Byte"]()), (asm0)["System.Byte"]()],
                {
                    'x600007d': function (){ return asm0.x6000095;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x600007e': function (){ return asm0.x6000094;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.Byte"]()), (asm0)["System.Byte"]()],
                {
                    'x600007f': function (){ return asm0.x6000096;}
                });
        });
    (asm)["System.Char"] = BLR.declare_type(
        "Char",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Char",true,true,false,false,false,[],[
                    [asm0, "x6000099", "ToString"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Uint16Array,"asm0.t2000030");
            this.MinValue = 0;
            this.MaxValue = 0;
            this.GenericTypeMetadataName = "asm0.t2000030";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000099");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Comparison`1"] = BLR.declare_type(
        "Comparison_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Comparison`1",false,false,false,true,false,[],[
                    [asm0, "x600009d", "Invoke"],
                    [asm0, "x600009e", "BeginInvoke"],
                    [asm0, "x600009f", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm0.t2000031");
            (this.GenericArguments)["asm0.t2000031"] = [T];
            this.GenericTypeMetadataName = ("asm0.t2000031<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x600009d","asm0.x600009d");
            BLR.declare_virtual(this,"asm0.x600009e","asm0.x600009e");
            BLR.declare_virtual(this,"asm0.x600009f","asm0.x600009f");
            BLR.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            BLR.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    (asm)["System.Console"] = BLR.declare_type(
        "Console",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Console",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000032");
            this.GenericTypeMetadataName = "asm0.t2000032";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Exception"] = BLR.declare_type(
        "Exception",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Exception",false,false,false,false,false,[],[
                    [asm0, "x60000a7", "get_HResult"],
                    [asm0, "x60000a9", "get_Message"],
                    [asm0, "x60000aa", "set_Message"],
                    [asm0, "x60000ab", "ToString"],
                    [asm0, "x60000ac", "get_InnerException"],
                    [asm0, "x60000ad", "set_InnerException"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000033");
            this.GenericTypeMetadataName = "asm0.t2000033";
            BLR.declare_virtual(this,"asm0.x60000a9","asm0.x60000a9");
            BLR.declare_virtual(this,"asm0.x60000aa","asm0.x60000aa");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000ab");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            (this.prototype)["SystemException<HResult>k__BackingField"] = 0;
            (this.prototype)["SystemException<Message>k__BackingField"] = null;
            (this.prototype)["SystemException<InnerException>k__BackingField"] = null;
        });
    (asm)["System.DivideByZeroException"] = BLR.declare_type(
        "DivideByZeroException",
        [],
        function ()
        {
            return new ((asm0)["System.Exception"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.DivideByZeroException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm0.t2000034");
            this.GenericTypeMetadataName = "asm0.t2000034";
            BLR.declare_virtual(this,"asm0.x60000a9","asm0.x60000a9");
            BLR.declare_virtual(this,"asm0.x60000aa","asm0.x60000aa");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000ab");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Double"] = BLR.declare_type(
        "Double",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Double",true,true,false,false,false,[],[
                    [asm0, "x60000b0", "ToString"],
                    [asm0, "x60000b1", "CompareTo"],
                    [asm0, "x60000b2", "CompareTo"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Float64Array,"asm0.t2000035");
            this.Epsilon = 0;
            this.MaxValue = 0;
            this.MinValue = 0;
            this.NaN = 0;
            this.NegativeInfinity = 0;
            this.PositiveInfinity = 0;
            this.GenericTypeMetadataName = "asm0.t2000035";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000b0");
            BLR.declare_virtual(this,"asm0.x60000b1","asm0.x60000b1");
            BLR.declare_virtual(this,"asm0.x60000b2","asm0.x60000b2");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Double"]()), (asm0)["System.Double"]()],
                {
                    'x600007d': function (){ return asm0.x60000b2;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x600007e': function (){ return asm0.x60000b1;}
                });
        });
    (asm)["System.Environment"] = BLR.declare_type(
        "Environment",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Environment",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000036");
            this.GenericTypeMetadataName = "asm0.t2000036";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.FlagsAttribute"] = BLR.declare_type(
        "FlagsAttribute",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.FlagsAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x6000076,
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
                ],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t2000037");
            this.GenericTypeMetadataName = "asm0.t2000037";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Func`2"] = BLR.declare_type(
        "Func_2",
        ["T", "TResult"],
        function (T,TResult)
        {
            return {};
        },
        function (T,TResult)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Func`2",false,false,false,true,false,[],[
                    [asm0, "x60000b7", "Invoke"],
                    [asm0, "x60000b8", "BeginInvoke"],
                    [asm0, "x60000b9", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm0.t2000038");
            (this.GenericArguments)["asm0.t2000038"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm0.t2000038<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
            BLR.declare_virtual(this,"asm0.x60000b7","asm0.x60000b7");
            BLR.declare_virtual(this,"asm0.x60000b8","asm0.x60000b8");
            BLR.declare_virtual(this,"asm0.x60000b9","asm0.x60000b9");
            BLR.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            BLR.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    (asm)["System.GC"] = BLR.declare_type(
        "GC",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.GC",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000039");
            this.GenericTypeMetadataName = "asm0.t2000039";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.IAsyncResult"] = BLR.declare_type(
        "IAsyncResult",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.IAsyncResult",false,false,true,false,false,[],[
                    [asm0, "x60000bc", "get_IsCompleted"],
                    [asm0, "x60000bd", "get_AsyncWaitHandle"],
                    [asm0, "x60000be", "get_AsyncState"],
                    [asm0, "x60000bf", "get_CompletedSynchronously"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200003a");
            this.GenericTypeMetadataName = "asm0.t200003a";
            BLR.declare_virtual(this,"asm0.x60000bc","asm0.x60000bc");
            BLR.declare_virtual(this,"asm0.x60000bd","asm0.x60000bd");
            BLR.declare_virtual(this,"asm0.x60000be","asm0.x60000be");
            BLR.declare_virtual(this,"asm0.x60000bf","asm0.x60000bf");
        });
    (asm)["System.AsyncResult"] = BLR.declare_type(
        "AsyncResult",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.AsyncResult",false,false,false,false,false,[],[
                    [asm0, "x60000c1", "get_IsCompleted"],
                    [asm0, "x60000c2", "get_AsyncWaitHandle"],
                    [asm0, "x60000c3", "get_AsyncState"],
                    [asm0, "x60000c4", "get_CompletedSynchronously"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200003b");
            this.GenericTypeMetadataName = "asm0.t200003b";
            BLR.declare_virtual(this,"asm0.x60000c1","asm0.x60000c1");
            BLR.declare_virtual(this,"asm0.x60000c2","asm0.x60000c2");
            BLR.declare_virtual(this,"asm0.x60000c3","asm0.x60000c3");
            BLR.declare_virtual(this,"asm0.x60000c4","asm0.x60000c4");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.IAsyncResult"]()],
                {
                    'x60000bc': function (){ return asm0.x60000c1;},
                    'x60000bd': function (){ return asm0.x60000c2;},
                    'x60000be': function (){ return asm0.x60000c3;},
                    'x60000bf': function (){ return asm0.x60000c4;}
                });
            this.prototype.asyncState = null;
            this.prototype.result = null;
        });
    (asm)["System.ICloneable"] = BLR.declare_type(
        "ICloneable",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.ICloneable",false,false,true,false,false,[],[
                    [asm0, "x60000c6", "Clone"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200003c");
            this.GenericTypeMetadataName = "asm0.t200003c";
            BLR.declare_virtual(this,"asm0.x60000c6","asm0.x60000c6");
        });
    (asm)["System.IDisposable"] = BLR.declare_type(
        "IDisposable",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.IDisposable",false,false,true,false,false,[],[
                    [asm0, "x60000c7", "Dispose"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200003d");
            this.GenericTypeMetadataName = "asm0.t200003d";
            BLR.declare_virtual(this,"asm0.x60000c7","asm0.x60000c7");
        });
    (asm)["System.Int16"] = BLR.declare_type(
        "Int16",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Int16",true,true,false,false,false,[],[
                    [asm0, "x60000c8", "ToString"],
                    [asm0, "x60000c9", "CompareTo"],
                    [asm0, "x60000ca", "CompareTo"],
                    [asm0, "x60000cb", "Equals"],
                    [asm0, "x60000cc", "Equals"],
                    [asm0, "x60000cd", "GetHashCode"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Int16Array,"asm0.t200003e");
            this.GenericTypeMetadataName = "asm0.t200003e";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000c8");
            BLR.declare_virtual(this,"asm0.x60000c9","asm0.x60000c9");
            BLR.declare_virtual(this,"asm0.x60000ca","asm0.x60000ca");
            BLR.declare_virtual(this,"asm0.x60000cb","asm0.x60000cb");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x60000cc");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x60000cd");
            BLR.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.Int16"]()), (asm0)["System.Int16"]()],
                {
                    'x600007f': function (){ return asm0.x60000cb;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x600007e': function (){ return asm0.x60000c9;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Int16"]()), (asm0)["System.Int16"]()],
                {
                    'x600007d': function (){ return asm0.x60000ca;}
                });
        });
    (asm)["System.Int32"] = BLR.declare_type(
        "Int32",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Int32",true,true,false,false,false,[],[
                    [asm0, "x60000ce", "ToString"],
                    [asm0, "x60000d0", "ToString"],
                    [asm0, "x60000d1", "CompareTo"],
                    [asm0, "x60000d2", "CompareTo"],
                    [asm0, "x60000d3", "Equals"],
                    [asm0, "x60000d4", "Equals"],
                    [asm0, "x60000d5", "GetHashCode"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Int32Array,"asm0.t200003f");
            this.MaxValue = 0;
            this.MinValue = 0;
            this.GenericTypeMetadataName = "asm0.t200003f";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000ce");
            BLR.declare_virtual(this,"asm0.x60000d1","asm0.x60000d1");
            BLR.declare_virtual(this,"asm0.x60000d2","asm0.x60000d2");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x60000d3");
            BLR.declare_virtual(this,"asm0.x60000d4","asm0.x60000d4");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x60000d5");
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Int32"]()), (asm0)["System.Int32"]()],
                {
                    'x600007d': function (){ return asm0.x60000d2;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x600007e': function (){ return asm0.x60000d1;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.Int32"]()), (asm0)["System.Int32"]()],
                {
                    'x600007f': function (){ return asm0.x60000d4;}
                });
        });
    (asm)["System.InternalFormatting"] = BLR.declare_type(
        "InternalFormatting",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.InternalFormatting",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000040");
            this.GenericTypeMetadataName = "asm0.t2000040";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.IntPtr"] = BLR.declare_type(
        "IntPtr",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.IntPtr",true,true,false,false,false,[],[
                    [asm0, "x60000d9", "ToString"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Array,"asm0.t2000041");
            this.GenericTypeMetadataName = "asm0.t2000041";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000d9");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.SystemException"] = BLR.declare_type(
        "SystemException",
        [],
        function ()
        {
            return new ((asm0)["System.Exception"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.SystemException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm0.t2000042");
            this.Result = 0;
            this.GenericTypeMetadataName = "asm0.t2000042";
            BLR.declare_virtual(this,"asm0.x60000a9","asm0.x60000a9");
            BLR.declare_virtual(this,"asm0.x60000aa","asm0.x60000aa");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000ab");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.NullReferenceException"] = BLR.declare_type(
        "NullReferenceException",
        [],
        function ()
        {
            return new ((asm0)["System.SystemException"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.NullReferenceException",false,false,false,false,false,[],[],(asm0)["System.SystemException"](),BLR.is_inst_default(this),Array,"asm0.t2000043");
            this.GenericTypeMetadataName = "asm0.t2000043";
            BLR.declare_virtual(this,"asm0.x60000a9","asm0.x60000a9");
            BLR.declare_virtual(this,"asm0.x60000aa","asm0.x60000aa");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000ab");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.ParamArrayAttribute"] = BLR.declare_type(
        "ParamArrayAttribute",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.ParamArrayAttribute",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t2000044");
            this.GenericTypeMetadataName = "asm0.t2000044";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.RuntimeFieldHandle"] = BLR.declare_type(
        "RuntimeFieldHandle",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.RuntimeFieldHandle",true,false,false,false,false,[],[
                    [asm0, "x60000df", "get_Value"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm0.t2000045");
            this.GenericTypeMetadataName = "asm0.t2000045";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.value = null;
        });
    (asm)["System.Type"] = BLR.declare_type(
        "Type",
        [],
        function ()
        {
            return new ((asm0)["System.Reflection.MemberInfo"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Type",false,false,false,false,false,[],[
                    [asm0, "x60000e0", "get_FullName"],
                    [asm0, "x60000e2", "IsSubclassOf"],
                    [asm0, "x60000e3", "get_IsEnum"],
                    [asm0, "x60000e4", "get_Assembly"],
                    [asm0, "x60000e5", "get_BaseType"],
                    [asm0, "x60000e6", "get_AssemblyQualifiedName"],
                    [asm0, "x60000e7", "get_IsGenericType"],
                    [asm0, "x60000e8", "get_IsInterface"],
                    [asm0, "x60000e9", "get_IsGenericTypeDefinition"],
                    [asm0, "x60000ea", "GetGenericArguments"],
                    [asm0, "x60000eb", "GetInterfaces"],
                    [asm0, "x60000ec", "MakeGenericType"],
                    [asm0, "x60000ed", "IsAssignableFrom"],
                    [asm0, "x60000ee", "get_IsValueType"],
                    [asm0, "x60000ef", "get_IsPrimitive"],
                    [asm0, "x60000f0", "GetElementType"],
                    [asm0, "x60000f1", "GetMethods"],
                    [asm0, "x60000f2", "IsInstanceOfType"]
                ],(asm0)["System.Reflection.MemberInfo"](),BLR.is_inst_default(this),Array,"asm0.t2000046");
            this.GenericTypeMetadataName = "asm0.t2000046";
            BLR.declare_virtual(this,"asm0.x60000e0","asm0.x60000e0");
            BLR.declare_virtual(this,"asm0.x60000e2","asm0.x60000e2");
            BLR.declare_virtual(this,"asm0.x60000e4","asm0.x60000e4");
            BLR.declare_virtual(this,"asm0.x60000e5","asm0.x60000e5");
            BLR.declare_virtual(this,"asm0.x60000e6","asm0.x60000e6");
            BLR.declare_virtual(this,"asm0.x60000e7","asm0.x60000e7");
            BLR.declare_virtual(this,"asm0.x60000e8","asm0.x60000e8");
            BLR.declare_virtual(this,"asm0.x60000e9","asm0.x60000e9");
            BLR.declare_virtual(this,"asm0.x60000ea","asm0.x60000ea");
            BLR.declare_virtual(this,"asm0.x60000eb","asm0.x60000eb");
            BLR.declare_virtual(this,"asm0.x60000ec","asm0.x60000ec");
            BLR.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            BLR.declare_virtual(this,"asm0.x60000ee","asm0.x60000ee");
            BLR.declare_virtual(this,"asm0.x60000ef","asm0.x60000ef");
            BLR.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            BLR.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            BLR.declare_virtual(this,"asm0.x60000f2","asm0.x60000f2");
            BLR.declare_virtual(this,"asm0.x600003a","asm0.x600003a");
            BLR.declare_virtual(this,"asm0.x600003b","asm0.x600003b");
            BLR.declare_virtual(this,"asm0.x600003c","asm0.x600003c");
            BLR.declare_virtual(this,"asm0.x600003e","asm0.x600003e");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Reflection.ICustomAttributeProvider"]()],
                {
                    'x6000037': function (){ return asm0.x600003a;},
                    'x6000038': function (){ return asm0.x600003b;},
                    'x6000039': function (){ return asm0.x600003c;}
                });
        });
    (asm)["System.RuntimeType"] = BLR.declare_type(
        "RuntimeType",
        [],
        function ()
        {
            return new ((asm0)["System.Type"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.RuntimeType",false,false,false,false,false,[],[
                    [asm0, "x60000fa", "get_Assembly"],
                    [asm0, "x60000fb", "get_FullName"],
                    [asm0, "x60000fc", "get_AssemblyQualifiedName"],
                    [asm0, "x60000fd", "Equals"],
                    [asm0, "x60000fe", "GetHashCode"],
                    [asm0, "x60000ff", "GetCustomAttributes"],
                    [asm0, "x6000100", "GetCustomAttributes"],
                    [asm0, "x6000101", "IsDefined"],
                    [asm0, "x6000102", "get_IsInterface"],
                    [asm0, "x6000103", "get_IsGenericType"],
                    [asm0, "x6000104", "get_IsGenericTypeDefinition"],
                    [asm0, "x6000105", "MakeGenericType"],
                    [asm0, "x6000106", "GetGenericArguments"],
                    [asm0, "x6000107", "get_BaseType"],
                    [asm0, "x6000108", "GetInterfaces"],
                    [asm0, "x6000109", "IsAssignableFrom"],
                    [asm0, "x600010b", "get_Name"],
                    [asm0, "x600010c", "get_IsValueType"],
                    [asm0, "x600010d", "get_IsPrimitive"],
                    [asm0, "x600010e", "GetElementType"],
                    [asm0, "x600010f", "GetMethods"],
                    [asm0, "x6000111", "IsInstanceOfType"]
                ],(asm0)["System.Type"](),BLR.is_inst_default(this),Array,"asm0.t2000047");
            this.GenericTypeMetadataName = "asm0.t2000047";
            BLR.declare_virtual(this,"asm0.x60000e4","asm0.x60000fa");
            BLR.declare_virtual(this,"asm0.x60000e0","asm0.x60000fb");
            BLR.declare_virtual(this,"asm0.x60000e6","asm0.x60000fc");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x60000fd");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x60000fe");
            BLR.declare_virtual(this,"asm0.x600003a","asm0.x60000ff");
            BLR.declare_virtual(this,"asm0.x600003b","asm0.x6000100");
            BLR.declare_virtual(this,"asm0.x600003c","asm0.x6000101");
            BLR.declare_virtual(this,"asm0.x60000e8","asm0.x6000102");
            BLR.declare_virtual(this,"asm0.x60000e7","asm0.x6000103");
            BLR.declare_virtual(this,"asm0.x60000e9","asm0.x6000104");
            BLR.declare_virtual(this,"asm0.x60000ec","asm0.x6000105");
            BLR.declare_virtual(this,"asm0.x60000ea","asm0.x6000106");
            BLR.declare_virtual(this,"asm0.x60000e5","asm0.x6000107");
            BLR.declare_virtual(this,"asm0.x60000eb","asm0.x6000108");
            BLR.declare_virtual(this,"asm0.x60000ed","asm0.x6000109");
            BLR.declare_virtual(this,"asm0.x600003e","asm0.x600010b");
            BLR.declare_virtual(this,"asm0.x60000ee","asm0.x600010c");
            BLR.declare_virtual(this,"asm0.x60000ef","asm0.x600010d");
            BLR.declare_virtual(this,"asm0.x60000f0","asm0.x600010e");
            BLR.declare_virtual(this,"asm0.x60000f1","asm0.x600010f");
            BLR.declare_virtual(this,"asm0.x60000f2","asm0.x6000111");
            BLR.declare_virtual(this,"asm0.x60000e2","asm0.x60000e2");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.implement_interface(
                this,
                [(asm0)["System.Reflection.ICustomAttributeProvider"]()],
                {
                    'x6000037': function (){ return asm0.x60000ff;},
                    'x6000038': function (){ return asm0.x6000100;},
                    'x6000039': function (){ return asm0.x6000101;}
                });
            this.prototype.ctor = null;
        });
    (asm)["System.RuntimeType+constructor"] = BLR.declare_type(
        "constructor",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.RuntimeType+constructor",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000048");
            this.GenericTypeMetadataName = "asm0.t2000048";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.FullName = null;
            this.prototype.BaseType = null;
            this.prototype.Assembly = null;
            this.prototype.CustomAttributes = null;
            this.prototype.Methods = null;
            this.prototype.TypeInstance = null;
            this.prototype.Hash = 0;
            this.prototype.IsGenericTypeDefinition = new ((asm0)["Braille.JavaScript.Boolean"]())();
            this.prototype.IsInterface = new ((asm0)["Braille.JavaScript.Boolean"]())();
            this.prototype.IsValueType = new ((asm0)["Braille.JavaScript.Boolean"]())();
            this.prototype.IsPrimitive = new ((asm0)["Braille.JavaScript.Boolean"]())();
            this.prototype.GenericArguments = null;
            this.prototype.Interfaces = null;
            this.prototype.MetadataName = null;
        });
    (asm)["System.RuntimeTypeHandle"] = BLR.declare_type(
        "RuntimeTypeHandle",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.RuntimeTypeHandle",true,false,false,false,false,[],[
                    [asm0, "x6000113", "get_Value"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm0.t2000049");
            this.GenericTypeMetadataName = "asm0.t2000049";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.value = null;
        });
    (asm)["System.SByte"] = BLR.declare_type(
        "SByte",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.SByte",true,true,false,false,false,[],[
                    [asm0, "x6000114", "ToString"],
                    [asm0, "x6000115", "CompareTo"],
                    [asm0, "x6000116", "CompareTo"],
                    [asm0, "x6000117", "Equals"],
                    [asm0, "x6000118", "Equals"],
                    [asm0, "x6000119", "GetHashCode"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Int8Array,"asm0.t200004a");
            this.MinValue = 0;
            this.MaxValue = 0;
            this.GenericTypeMetadataName = "asm0.t200004a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000114");
            BLR.declare_virtual(this,"asm0.x6000115","asm0.x6000115");
            BLR.declare_virtual(this,"asm0.x6000116","asm0.x6000116");
            BLR.declare_virtual(this,"asm0.x6000117","asm0.x6000117");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000118");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000119");
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.SByte"]()), (asm0)["System.SByte"]()],
                {
                    'x600007d': function (){ return asm0.x6000116;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x600007e': function (){ return asm0.x6000115;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.SByte"]()), (asm0)["System.SByte"]()],
                {
                    'x600007f': function (){ return asm0.x6000117;}
                });
        });
    (asm)["System.Single"] = BLR.declare_type(
        "Single",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Single",true,true,false,false,false,[],[
                    [asm0, "x600011a", "ToString"],
                    [asm0, "x600011b", "CompareTo"],
                    [asm0, "x600011c", "CompareTo"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Float32Array,"asm0.t200004b");
            this.MinValue = 0;
            this.Epsilon = 0;
            this.MaxValue = 0;
            this.PositiveInfinity = 0;
            this.NegativeInfinity = 0;
            this.NaN = 0;
            this.GenericTypeMetadataName = "asm0.t200004b";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x600011a");
            BLR.declare_virtual(this,"asm0.x600011b","asm0.x600011b");
            BLR.declare_virtual(this,"asm0.x600011c","asm0.x600011c");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Single"]()), (asm0)["System.Single"]()],
                {
                    'x600007d': function (){ return asm0.x600011c;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x600007e': function (){ return asm0.x600011b;}
                });
        });
    (asm)["System.Runtime.InteropServices.InAttribute"] = BLR.declare_type(
        "InAttribute",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Runtime.InteropServices.InAttribute",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t200004c");
            this.GenericTypeMetadataName = "asm0.t200004c";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Runtime.InteropServices.OutAttribute"] = BLR.declare_type(
        "OutAttribute",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Runtime.InteropServices.OutAttribute",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t200004d");
            this.GenericTypeMetadataName = "asm0.t200004d";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Collections.IEnumerator"] = BLR.declare_type(
        "IEnumerator",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Collections.IEnumerator",false,false,true,false,false,[],[
                    [asm0, "x600011f", "get_Current"],
                    [asm0, "x6000120", "MoveNext"],
                    [asm0, "x6000121", "Reset"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200004e");
            this.GenericTypeMetadataName = "asm0.t200004e";
            BLR.declare_virtual(this,"asm0.x600011f","asm0.x600011f");
            BLR.declare_virtual(this,"asm0.x6000120","asm0.x6000120");
            BLR.declare_virtual(this,"asm0.x6000121","asm0.x6000121");
        });
    (asm)["System.Collections.Generic.IEnumerator`1"] = BLR.declare_type(
        "IEnumerator_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Collections.Generic.IEnumerator`1",false,false,true,true,false,[],[
                    [asm0, "x6000122", "get_Current"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200004f");
            (this.GenericArguments)["asm0.t200004f"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200004f<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000122","asm0.x6000122");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                null);
            BLR.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                null);
        });
    (asm)["System.Diagnostics.Debugger"] = BLR.declare_type(
        "Debugger",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Diagnostics.Debugger",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000050");
            this.GenericTypeMetadataName = "asm0.t2000050";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.NotImplementedException"] = BLR.declare_type(
        "NotImplementedException",
        [],
        function ()
        {
            return new ((asm0)["System.Exception"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.NotImplementedException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm0.t2000051");
            this.GenericTypeMetadataName = "asm0.t2000051";
            BLR.declare_virtual(this,"asm0.x60000a9","asm0.x60000a9");
            BLR.declare_virtual(this,"asm0.x60000aa","asm0.x60000aa");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000ab");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.NotSupportedException"] = BLR.declare_type(
        "NotSupportedException",
        [],
        function ()
        {
            return new ((asm0)["System.Exception"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.NotSupportedException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm0.t2000052");
            this.GenericTypeMetadataName = "asm0.t2000052";
            BLR.declare_virtual(this,"asm0.x60000a9","asm0.x60000a9");
            BLR.declare_virtual(this,"asm0.x60000aa","asm0.x60000aa");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000ab");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Math"] = BLR.declare_type(
        "Math",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Math",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000053");
            this.E = 0;
            this.PI = 0;
            this.GenericTypeMetadataName = "asm0.t2000053";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.InvalidCastException"] = BLR.declare_type(
        "InvalidCastException",
        [],
        function ()
        {
            return new ((asm0)["System.Exception"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.InvalidCastException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm0.t2000054");
            this.GenericTypeMetadataName = "asm0.t2000054";
            BLR.declare_virtual(this,"asm0.x60000a9","asm0.x60000a9");
            BLR.declare_virtual(this,"asm0.x60000aa","asm0.x60000aa");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000ab");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.InvalidOperationException"] = BLR.declare_type(
        "InvalidOperationException",
        [],
        function ()
        {
            return new ((asm0)["System.Exception"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.InvalidOperationException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm0.t2000055");
            this.GenericTypeMetadataName = "asm0.t2000055";
            BLR.declare_virtual(this,"asm0.x60000a9","asm0.x60000a9");
            BLR.declare_virtual(this,"asm0.x60000aa","asm0.x60000aa");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000ab");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Int64"] = BLR.declare_type(
        "Int64",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Int64",true,true,false,false,false,[],[
                    [asm0, "x6000139", "ToString"],
                    [asm0, "x600013a", "GetHashCode"],
                    [asm0, "x600014f", "CompareTo"],
                    [asm0, "x6000150", "CompareTo"],
                    [asm0, "x6000151", "Equals"],
                    [asm0, "x6000152", "Equals"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Array,"asm0.t2000056");
            this.MaxValue = 0;
            this.MinValue = 0;
            this.GenericTypeMetadataName = "asm0.t2000056";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000139");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600013a");
            BLR.declare_virtual(this,"asm0.x600014f","asm0.x600014f");
            BLR.declare_virtual(this,"asm0.x6000150","asm0.x6000150");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000151");
            BLR.declare_virtual(this,"asm0.x6000152","asm0.x6000152");
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Int64"]()), (asm0)["System.Int64"]()],
                {
                    'x600007d': function (){ return asm0.x6000150;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x600007e': function (){ return asm0.x600014f;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.Int64"]()), (asm0)["System.Int64"]()],
                {
                    'x600007f': function (){ return asm0.x6000152;}
                });
        });
    (asm)["Braille.JavaScript.Number"] = BLR.declare_type(
        "$$Number",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Braille.JavaScript.Number",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm0.t2000057");
            this.GenericTypeMetadataName = "asm0.t2000057";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Runtime.CompilerServices.ExtensionAttribute"] = BLR.declare_type(
        "ExtensionAttribute",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Runtime.CompilerServices.ExtensionAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x6000076,
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
                ],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t2000058");
            this.GenericTypeMetadataName = "asm0.t2000058";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Runtime.CompilerServices.IndexerNameAttribute"] = BLR.declare_type(
        "IndexerNameAttribute",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Runtime.CompilerServices.IndexerNameAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x6000076,
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
                ],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t2000059");
            this.GenericTypeMetadataName = "asm0.t2000059";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Runtime.CompilerServices.RuntimeHelpers"] = BLR.declare_type(
        "RuntimeHelpers",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Runtime.CompilerServices.RuntimeHelpers",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200005a");
            this.GenericTypeMetadataName = "asm0.t200005a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.EventArgs"] = BLR.declare_type(
        "EventArgs",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.EventArgs",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200005b");
            this.Empty = null;
            this.GenericTypeMetadataName = "asm0.t200005b";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.EventHandler"] = BLR.declare_type(
        "EventHandler",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.EventHandler",false,false,false,false,false,[],[
                    [asm0, "x6000166", "Invoke"],
                    [asm0, "x6000167", "BeginInvoke"],
                    [asm0, "x6000168", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm0.t200005c");
            this.GenericTypeMetadataName = "asm0.t200005c";
            BLR.declare_virtual(this,"asm0.x6000166","asm0.x6000166");
            BLR.declare_virtual(this,"asm0.x6000167","asm0.x6000167");
            BLR.declare_virtual(this,"asm0.x6000168","asm0.x6000168");
            BLR.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            BLR.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    (asm)["System.Predicate`1"] = BLR.declare_type(
        "Predicate_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Predicate`1",false,false,false,true,false,[],[
                    [asm0, "x600016a", "Invoke"],
                    [asm0, "x600016b", "BeginInvoke"],
                    [asm0, "x600016c", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm0.t200005d");
            (this.GenericArguments)["asm0.t200005d"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200005d<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x600016a","asm0.x600016a");
            BLR.declare_virtual(this,"asm0.x600016b","asm0.x600016b");
            BLR.declare_virtual(this,"asm0.x600016c","asm0.x600016c");
            BLR.declare_virtual(this,"asm0.x6000066","asm0.x600006f");
            BLR.declare_virtual(this,"asm0.x6000065","asm0.x6000070");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000067");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600006a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    (asm)["System.Array"] = BLR.declare_type(
        "Array",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Array",false,false,false,false,false,[],[
                    [asm0, "x600016d", "get_Length"],
                    [asm0, "x600016e", "get_LongLength"],
                    [asm0, "x6000172", "GetValue"],
                    [asm0, "x6000173", "GetEnumerator"],
                    [asm0, "x6000191", "SetValue", []]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200005e");
            this.GenericTypeMetadataName = "asm0.t200005e";
            BLR.declare_virtual(this,"asm0.x6000173","asm0.x6000173");
            BLR.declare_virtual(this,"asm0.x6000174","asm0.x6000174");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                {
                    'x600000d': function (){ return asm0.x6000173;}
                });
            this.prototype.type = null;
            this.prototype.jsarr = null;
        });
    (asm)["System.Array`1"] = BLR.declare_type(
        "Array_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Array"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Array`1",false,false,false,true,false,[],[
                    [asm0, "x6000194", "GetEnumerator"]
                ],(asm0)["System.Array"](),BLR.is_inst_array(T),Array,"asm0.t200005f");
            (this.GenericArguments)["asm0.t200005f"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200005f<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000194","asm0.x6000194");
            BLR.declare_virtual(this,"asm0.x6000174","asm0.x6000195");
            BLR.declare_virtual(this,"asm0.x6000196","asm0.x6000196");
            BLR.declare_virtual(this,"asm0.x6000197","asm0.x6000197");
            BLR.declare_virtual(this,"asm0.x6000198","asm0.x6000198");
            BLR.declare_virtual(this,"asm0.x6000199","asm0.x6000199");
            BLR.declare_virtual(this,"asm0.x600019a","asm0.x600019a");
            BLR.declare_virtual(this,"asm0.x600019b","asm0.x600019b");
            BLR.declare_virtual(this,"asm0.x600019c","asm0.x600019c");
            BLR.declare_virtual(this,"asm0.x6000173","asm0.x6000173");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.ICollection`1"](T), T],
                {
                    'x6000028': function (){ return asm0.x6000196;},
                    'x6000029': function (){ return asm0.x6000197;},
                    'x600002a': function (){ return asm0.x6000198;},
                    'x600002b': function (){ return asm0.x6000199;},
                    'x600002c': function (){ return asm0.x600019a;},
                    'x600002d': function (){ return asm0.x600019b;},
                    'x600002e': function (){ return asm0.x600019c;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerable`1"](T), T],
                {
                    'x600000e': function (){ return asm0.x6000194;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                {
                    'x600000d': function (){ return asm0.x6000173;}
                });
            this.prototype.type = null;
            this.prototype.jsarr = null;
        });
    (asm)["System.Array`1+ArrayEnumerator"] = BLR.declare_type(
        "ArrayEnumerator",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Array`1+ArrayEnumerator",false,false,false,true,false,[],[
                    [asm0, "x600019f", "get_Current"],
                    [asm0, "x60001a0", "MoveNext"],
                    [asm0, "x60001a2", "Reset"],
                    [asm0, "x60001a3", "Dispose"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000060");
            (this.GenericArguments)["asm0.t2000060"] = [T];
            this.GenericTypeMetadataName = ("asm0.t2000060<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x600019f","asm0.x600019f");
            BLR.declare_virtual(this,"asm0.x60001a0","asm0.x60001a0");
            BLR.declare_virtual(this,"asm0.x60001a1","asm0.x60001a1");
            BLR.declare_virtual(this,"asm0.x60001a2","asm0.x60001a2");
            BLR.declare_virtual(this,"asm0.x60001a3","asm0.x60001a3");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerator`1"](T), T],
                {
                    'x6000122': function (){ return asm0.x600019f;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                {
                    'x600011f': function (){ return asm0.x60001a1;},
                    'x6000120': function (){ return asm0.x60001a0;},
                    'x6000121': function (){ return asm0.x60001a2;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x60000c7': function (){ return asm0.x60001a3;}
                });
            this.prototype.index = 0;
            this.prototype.length = 0;
            this.prototype.source = null;
        });
    (asm)["System.Diagnostics.DebuggerStepThroughAttribute"] = BLR.declare_type(
        "DebuggerStepThroughAttribute",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Diagnostics.DebuggerStepThroughAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x6000076,
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
                ],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t2000061");
            this.GenericTypeMetadataName = "asm0.t2000061";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.AttributeTargets"] = BLR.declare_type(
        "AttributeTargets",
        [],
        function ()
        {
            return new ((asm0)["System.Enum"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.AttributeTargets",true,false,false,false,false,[
                    [
                        (asm0)["System.FlagsAttribute"](),
                        asm0.x60000b5
                    ]
                ],[],(asm0)["System.Enum"](),BLR.is_inst_value_type(this),Array,"asm0.t2000062");
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
            this.GenericTypeMetadataName = "asm0.t2000062";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.value__ = 0;
        });
    (asm)["System.Nullable`1"] = BLR.declare_type(
        "Nullable_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Nullable`1",true,false,false,true,true,[
                    [
                        (asm0)["System.Diagnostics.DebuggerStepThroughAttribute"](),
                        asm0.x60001a4
                    ]
                ],[
                    [asm0, "x60001a7", "get_HasValue"],
                    [asm0, "x60001a8", "get_Value"],
                    [asm0, "x60001a9", "Equals"],
                    [asm0, "x60001ab", "GetHashCode"],
                    [asm0, "x60001ac", "GetValueOrDefault"],
                    [asm0, "x60001ad", "GetValueOrDefault"],
                    [asm0, "x60001ae", "ToString"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm0.t2000064");
            (this.GenericArguments)["asm0.t2000064"] = [T];
            this.GenericTypeMetadataName = ("asm0.t2000064<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x60001a9");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x60001ab");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60001ae");
            this.prototype.value = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            this.prototype.has_value = 0;
        });
    (asm)["System.SerializableAttribute"] = BLR.declare_type(
        "SerializableAttribute",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.SerializableAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x6000076,
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
                ],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t2000065");
            this.GenericTypeMetadataName = "asm0.t2000065";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.String"] = BLR.declare_type(
        "$$String",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.String",false,false,false,false,false,[
                    [
                        (asm0)["System.Reflection.DefaultMemberAttribute"](),
                        asm0.x60001d7,
                        [
                            BLR.new_string("Chars")
                        ]
                    ]
                ],[
                    [asm0, "x60001b9", "get_Chars"],
                    [asm0, "x60001c2", "Replace"],
                    [asm0, "x60001c3", "get_Length"],
                    [asm0, "x60001c4", "ToString"],
                    [asm0, "x60001c7", "Equals"],
                    [asm0, "x60001c8", "Equals"],
                    [asm0, "x60001ca", "GetHashCode"],
                    [asm0, "x60001cf", "ToLower"],
                    [asm0, "x60001d1", "ToUpper"],
                    [asm0, "x60001d3", "CompareTo"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000066");
            this.Empty = null;
            this.GenericTypeMetadataName = "asm0.t2000066";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60001c4");
            BLR.declare_virtual(this,"asm0.x60001c7","asm0.x60001c7");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x60001c8");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x60001ca");
            BLR.declare_virtual(this,"asm0.x60001d3","asm0.x60001d3");
            BLR.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.String"]()), (asm0)["System.String"]()],
                {
                    'x600007f': function (){ return asm0.x60001c7;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.String"]()), (asm0)["System.String"]()],
                {
                    'x600007d': function (){ return asm0.x60001d3;}
                });
            this.prototype.jsstr = null;
        });
    (asm)["System.Reflection.DefaultMemberAttribute"] = BLR.declare_type(
        "DefaultMemberAttribute",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Reflection.DefaultMemberAttribute",false,false,false,false,false,[
                    [
                        (asm0)["System.AttributeUsageAttribute"](),
                        asm0.x6000076,
                        [
                            (1036|0)
                        ]
                    ]
                ],[
                    [asm0, "x60001d8", "get_MemberName"]
                ],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t2000067");
            this.GenericTypeMetadataName = "asm0.t2000067";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.System_ReflectionDefaultMemberAttributemember_name = null;
        });
    (asm)["System.UInt16"] = BLR.declare_type(
        "UInt16",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.UInt16",true,true,false,false,false,[],[
                    [asm0, "x60001da", "ToString"],
                    [asm0, "x60001db", "CompareTo"],
                    [asm0, "x60001dc", "CompareTo"],
                    [asm0, "x60001dd", "Equals"],
                    [asm0, "x60001de", "Equals"],
                    [asm0, "x60001df", "GetHashCode"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Uint16Array,"asm0.t2000069");
            this.MaxValue = 0;
            this.MinValue = 0;
            this.GenericTypeMetadataName = "asm0.t2000069";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60001da");
            BLR.declare_virtual(this,"asm0.x60001db","asm0.x60001db");
            BLR.declare_virtual(this,"asm0.x60001dc","asm0.x60001dc");
            BLR.declare_virtual(this,"asm0.x60001dd","asm0.x60001dd");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x60001de");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x60001df");
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.UInt16"]()), (asm0)["System.UInt16"]()],
                {
                    'x600007d': function (){ return asm0.x60001dc;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x600007e': function (){ return asm0.x60001db;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.UInt16"]()), (asm0)["System.UInt16"]()],
                {
                    'x600007f': function (){ return asm0.x60001dd;}
                });
        });
    (asm)["System.UInt32"] = BLR.declare_type(
        "UInt32",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.UInt32",true,true,false,false,false,[],[
                    [asm0, "x60001e0", "ToString"],
                    [asm0, "x60001e1", "Equals"],
                    [asm0, "x60001e2", "GetHashCode"],
                    [asm0, "x60001e3", "CompareTo"],
                    [asm0, "x60001e4", "CompareTo"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Uint32Array,"asm0.t200006a");
            this.MaxValue = 0;
            this.MinValue = 0;
            this.GenericTypeMetadataName = "asm0.t200006a";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60001e0");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x60001e1");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x60001e2");
            BLR.declare_virtual(this,"asm0.x60001e3","asm0.x60001e3");
            BLR.declare_virtual(this,"asm0.x60001e4","asm0.x60001e4");
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.UInt32"]()), (asm0)["System.UInt32"]()],
                {
                    'x600007d': function (){ return asm0.x60001e4;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x600007e': function (){ return asm0.x60001e3;}
                });
        });
    (asm)["System.UInt64"] = BLR.declare_type(
        "UInt64",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.UInt64",true,true,false,false,false,[],[
                    [asm0, "x60001e5", "ToString"],
                    [asm0, "x60001ef", "GetHashCode"],
                    [asm0, "x60001f1", "CompareTo"],
                    [asm0, "x60001f2", "CompareTo"],
                    [asm0, "x60001f3", "Equals"],
                    [asm0, "x60001f4", "Equals"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Array,"asm0.t200006b");
            this.MinValue = 0;
            this.MaxValue = 0;
            this.GenericTypeMetadataName = "asm0.t200006b";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60001e5");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x60001ef");
            BLR.declare_virtual(this,"asm0.x60001f1","asm0.x60001f1");
            BLR.declare_virtual(this,"asm0.x60001f2","asm0.x60001f2");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x60001f3");
            BLR.declare_virtual(this,"asm0.x60001f4","asm0.x60001f4");
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.UInt64"]()), (asm0)["System.UInt64"]()],
                {
                    'x600007d': function (){ return asm0.x60001f2;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x600007e': function (){ return asm0.x60001f1;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.UInt64"]()), (asm0)["System.UInt64"]()],
                {
                    'x600007f': function (){ return asm0.x60001f4;}
                });
        });
    (asm)["System.UIntPtr"] = BLR.declare_type(
        "UIntPtr",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.UIntPtr",true,true,false,false,false,[],[
                    [asm0, "x60001f5", "ToString"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Array,"asm0.t200006c");
            this.GenericTypeMetadataName = "asm0.t200006c";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60001f5");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["System.Void"] = BLR.declare_type(
        "Void",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Void",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm0.t200006d");
            this.GenericTypeMetadataName = "asm0.t200006d";
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["Braille.JavaScript.Array+<GetEnumerator>d__0"] = BLR.declare_type(
        "_GetEnumerator_d__0",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"Braille.JavaScript.Array+<GetEnumerator>d__0",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200006e");
            this.GenericTypeMetadataName = "asm0.t200006e";
            BLR.declare_virtual(this,"asm0.x60001f6","asm0.x60001f6");
            BLR.declare_virtual(this,"asm0.x60001f7","asm0.x60001f7");
            BLR.declare_virtual(this,"asm0.x60001f8","asm0.x60001f8");
            BLR.declare_virtual(this,"asm0.x60001f9","asm0.x60001f9");
            BLR.declare_virtual(this,"asm0.x60001fa","asm0.x60001fa");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerator`1"]((asm0)["System.Object"]()), (asm0)["System.Object"]()],
                {
                    'x6000122': function (){ return asm0.x60001f7;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                {
                    'x600011f': function (){ return asm0.x60001fa;},
                    'x6000120': function (){ return asm0.x60001f6;},
                    'x6000121': function (){ return asm0.x60001f8;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x60000c7': function (){ return asm0.x60001f9;}
                });
            (this.prototype)["Braille_JavaScript_GetEnumerator_d__0<>2__current"] = null;
            (this.prototype)["Braille_JavaScript_GetEnumerator_d__0<>1__state"] = 0;
            (this.prototype)["<>4__this"] = null;
            (this.prototype)["<a>5__1"] = null;
            (this.prototype)["<i>5__2"] = 0;
        });
    (asm)["System.Array+<>c__DisplayClass1`1"] = BLR.declare_type(
        "__c__DisplayClass1_1",
        ["T"],
        function (T)
        {
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"System.Array+<>c__DisplayClass1`1",false,false,false,true,false,[],[
                    [asm0, "x60001fd", "<Sort>b__0"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200006f");
            (this.GenericArguments)["asm0.t200006f"] = [T];
            this.GenericTypeMetadataName = ("asm0.t200006f<" + (T.GenericTypeMetadataName + ">"));
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.comparer = null;
        });
})(asm0 || (asm0 = {}));
