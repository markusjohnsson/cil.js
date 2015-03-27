
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
})(BLR || (BLR = {}));