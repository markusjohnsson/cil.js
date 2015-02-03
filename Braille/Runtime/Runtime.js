
var BLR;

(function (blr) {
    blr.nop = function() {};

    blr.declare_type = function (name, init, baseType, genericArgs) {
        var isGeneric = genericArgs && genericArgs.length > 0;
        var ct = isGeneric ? {} : null;
        var gA = isGeneric ? genericArgs.join(",") : "";
        var s = "function t(" + gA + ") {\n" +
        "    var c = " + (isGeneric ? "blr.tree_get([" + gA + "], ct)" : "ct") + ";\n" +
        "    if (c) return c;\n" +
        "    \n" +
        "    eval('function '+name+'() {c.init();this.constructor = c;}');\n" +
        "    c = eval(name);\n" +
        "    " + (isGeneric ? "blr.tree_set([" + gA + "], ct, c);" : "ct = c;") + "\n" +
        "    \n" +
        "    c.init = init.bind(c" + (isGeneric ? (", " + gA) : "") + ");\n" +
        "    if (baseType)\n" +
        "        c.prototype = baseType(" + gA + ");\n" +
        "    return c;\n" +
        "}";
        eval(s);
        return t;
    }

    blr.init_type = function(type, fullname, assembly, isValueType, isPrimitive, isInterface, isGenericTypeDefinition, isNullable, customAttributes, methods, baseType, isInst, arrayType, metadataName) {
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

    blr.is_inst_interface = function(interfaceType) {
        return function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(interfaceType) != -1 ? t : null; } catch (e) { return false; } };
    }

    blr.is_inst_primitive = function(primitiveType) {
        return function (t) { try { return t.type == primitiveType ? t : null; } catch (e) { return false; } }
    }

    blr.is_inst_array = function(T) {
        return function (t) { return t instanceof asm0['System.Array']() && (t.etype == T || t.etype.prototype instanceof T) ? t : null; };
    }

    blr.is_inst_default = function(type) {
        return function (t) { return t instanceof type ? t : null; };
    }

    blr.declare_virtual = function(type, slot, target) {
        type.prototype.vtable[slot] = new Function("return " + target + ";");
    }

    blr.clone_value = function(v) {
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

    blr.value_equals = function(a, b) {

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

    blr.unsigned_value = function(a) {
        if (a < 0)
            return 0xffffffff + a + 1;
        else
            return a;
    }

    blr.box = function(v, type) {
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

    blr.unbox = function(o, type) {
        if (o === null) {
            var t = asm0['System.InvalidCastException']();
            var e = new t();
            e.stack = new Error().stack;
            throw e;
        }
        return blr.cast_class(o.boxed, type);
    }

    blr.unbox_any = function(o, type) {
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

            return blr.cast_class(o.boxed, type);
        }
        else
            return blr.cast_class(o, type);
    }

    blr.convert_box_to_pointer_as_needed = function(o) {
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

    blr.tree_get = function(a, s) {
        var c = s;
        for (var i = 0; c && i < a.length; i++)
            c = c[a[i]];
        return c;
    }

    blr.tree_set = function(a, s, v) {
        if (a.length === 1) {
            s[a[0]] = v;
        }
        else {
            var c = s[a[0]];
            if (!c) s[a[0]] = c = {};
            blr.tree_set(a.slice(1), c, v);
        }
    }

    blr.new_string = function(jsstr) {
        var r = new (asm0['System.String']())();
        r.jsstr = jsstr;
        return r;
    }

    blr.new_handle = function(type, value) {
        var r = new type();
        r.value = value;
        return r;
    }

    blr.new_array = function(type, length) {
        var ctor = type.ArrayType || Array;
        var r = new (asm0['System.Array`1'](type))();
        r.etype = type;
        r.jsarr = new ctor(length);
        return r;
    }

    blr.newobj = function(type, ctor, args) {
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

    blr.cast_class = function(obj, type) {
        if (type.IsInst(obj) || (!type.IsValueType && obj === null)) {
            return obj;
        }
        else if (type.IsPrimitive) {
            if (typeof obj === 'undefined' || obj === null) {
            }
            else if (typeof obj === 'number') {
                return obj;
            }
            else if (typeof obj.length == 'number' && obj.length == 2) {
                return obj; " /* this is for (u)int64 */ + @"
            }
        }

        var t = asm0['System.InvalidCastException']();
        var e = new t();
        e.stack = new Error().stack;
        throw e;
    }

    blr.conv_u8 = function(n) {
        if (n < 0) {
            /* signed 32 bit int that need to be converted to 32 bit unsigned before 64 bit conversion */
            n = 0x100000000 + n;
        }

        return blr.make_uint64(n);
    }

    blr.conv_i8 = function(n) {
        if (n < 0) {
            /* signed 32 bit int */
            n = 0x100000000 + n;

            /* here, n should be positive and less than 0xffffffff, otherwise, input would not have fit in 32 bit */
            return new Uint32Array([n | 0, 0xffffffff]);
        }

        return blr.make_uint64(n);
    }

    blr.make_uint64 = function(n) {
        var bits32 = 0xffffffff;

        var floorN = Math.floor(n);
        var low = floorN | 0;
        var high = (floorN / 0x100000000) | 0;

        var low = low & bits32;
        var high = high & bits32;

        return new Uint32Array([low, high]);
    }

    blr.to_number = function(n) {
        return n[1] * 4294967296 + n[0];
    }
})(BLR || (BLR = {}));