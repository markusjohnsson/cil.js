
var BLR;

(function (blr) {
    blr.nop = function() {};

    blr.declare_type = function (name, genericArgs, baseType, init) {
        var isGeneric = genericArgs && genericArgs.length > 0;
        var ct = isGeneric ? {} : null;
        var gA = isGeneric ? genericArgs.join(",") : "";
        var s = "" +
            "function t(" + gA + ") {\n" +
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

    blr.init_type = function (type, assembly, fullname, isValueType, isPrimitive, isInterface, isGenericTypeDefinition, isNullable, customAttributes, methods, baseType, isInst, arrayType, metadataName) {
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

    blr.implement_interface = function (type, iface, implementation) {
        type.Interfaces.push(iface[0]);
        if (implementation !== null)
            blr.tree_set(iface, type.prototype.ifacemap, implementation);
    }

    blr.declare_virtual = function (type, slot, target) {
        type.prototype.vtable[slot] = new Function("return " + target + ";");
    }

    blr.is_inst_interface = function(interfaceType) {
        return function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(interfaceType) !== -1 ? t : null; } catch (e) { return null; } };
    }

    blr.is_inst_primitive = function(primitiveType) {
        return function (t) { try { return t.type === primitiveType ? t : null; } catch (e) { return null; } }
    }

    blr.is_inst_array = function(T) {
        return function (t) { return t instanceof asm0['System.Array']() && (t.etype === T || t.etype.prototype instanceof T) ? t : null; };
    }

    blr.is_inst_default = function (type) {
        return function (t) { return t instanceof type ? t : null; };
    }

    blr.is_inst_value_type = function (type) {
        return function (t) { return t.boxed instanceof type ? t : t instanceof type ? t : null; };
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
            else if (typeof obj.length === 'number' && obj.length === 2) {
                return obj; /* this is for (u)int64 */
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

        low = low & bits32;
        high = high & bits32;

        return new Uint32Array([low, high]);
    }

    blr.to_number = function(n) {
        return n[1] * 4294967296 + n[0];
    }
})(BLR || (BLR = {}));var asm0; (function (asm)
{
    asm.FullName = "mscorlib, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Boolean ReferenceEqualsImpl(System.Object, System.Object)*/
    asm.x6000001 = function (a, b) { return Number(a === b); };;
    /* static Int32 GetHashCode(System.Object)*/
    asm.x6000002 = function (o) { return o.hash || (o.hash = asm0.next_hash++); };;
    /* Object toString()*/
    asm.x6000004 = function () { return asm0.ToJavaScriptString(this); };;
    /* String ToString()*/
    asm.x6000005 = function ToString(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldstr System.Object*/
        /* IL_06: stloc.0 */
        loc0 = BLR.new_string("System.Object");
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* static Object ToJavaScriptString(System.Object)*/
    asm.x6000006 = function ToJavaScriptString(arg0)
    {
        var __pos_0__;
        var loc2;
        var loc1;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x19;
                    continue;
                }
                /* IL_0C: ldstr */
                /* IL_11: ldfld Object jsstr*/
                /* IL_16: stloc.1 */
                loc1 = BLR.new_string("").jsstr;
                /* IL_17: br.s IL_39*/
                __pos_0__ = 0x39;
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
                    __pos_0__ = 0x30;
                    continue;
                }
                /* IL_2C: ldnull */
                /* IL_2D: stloc.1 */
                loc1 = null;
                /* IL_2E: br.s IL_39*/
                __pos_0__ = 0x39;
                continue;
                case 0x30:
                /* IL_30: ldloc.0 */
                /* IL_31: ldfld Object jsstr*/
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
    /* static Boolean ReferenceEquals(System.Object, System.Object)*/
    asm.x6000007 = function ReferenceEquals(arg0,arg1)
    {
        var loc0;
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
    /* Boolean Equals(System.Object)*/
    asm.x6000008 = function Equals(arg0,arg1)
    {
        var loc0;
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
    /* Int32 GetHashCode()*/
    asm.x6000009 = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetHashCode(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x6000002(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Type GetType()*/
    asm.x600000a = function GetType(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Type GetType(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x60000c4(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static Boolean Equals(System.Object, System.Object)*/
    asm.x600000b = function Equals(arg0,arg1)
    {
        var __pos_0__;
        var loc1;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.1 */
                /* IL_10: stloc.0 */
                loc0 = (1|0);
                /* IL_11: br.s IL_2F*/
                __pos_0__ = 0x2F;
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
                    __pos_0__ = 0x25;
                    continue;
                }
                /* IL_21: ldc.i4.0 */
                /* IL_22: stloc.0 */
                loc0 = (0|0);
                /* IL_23: br.s IL_2F*/
                __pos_0__ = 0x2F;
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
    /* Void .ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_02: ret */
        return ;
    };;
    /* IEnumerator`1 GetEnumerator()*/
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
        var loc0;
        var loc1;
        t0 = (asm0)["Braille.JavaScript.Array+<GetEnumerator>d__0"]();
        /* IL_00: ldc.i4.0 */
        /* IL_01: newobj Void .ctor(System.Int32)*/
        /* IL_06: stloc.0 */
        loc0 = BLR.newobj(t0,asm0.x60001a1,[null, (0|0)]);
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
    /* IEnumerator System.Collections.IEnumerable.GetEnumerator()*/
    asm.x6000015 = function System_Collections_IEnumerable_GetEnumerator(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call IEnumerator`1 GetEnumerator()*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x6000014(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* Boolean Equals(System.Object)*/
    asm.x6000016 = function Equals(arg0,arg1)
    {
        var loc0;
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
    /* Void .ctor()*/
    asm.x6000018 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600001a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* static Void .cctor()*/
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
        
        if ((asm0)["Braille.JavaScript.String"]().FieldHasBeenInitialized){
            return;
        }
        (asm0)["Braille.JavaScript.String"]().FieldHasBeenInitialized = true;
        t0 = (asm0)["Braille.JavaScript.String"]();
        /* IL_00: call String GetEmpty()*/
        /* IL_05: stsfld String Emtpy*/
        (t0)["Emtpy"] = "";
        /* IL_0A: ret */
        return ;
    };
    /* static Object get_Null()*/
    asm.x6000021 = function get_Null()
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: call Object null_impl()*/
        /* IL_06: stloc.0 */
        loc0 = null;
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* static String GetText(System.String)*/
    asm.x6000025 = function GetText(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: stloc.0 */
        loc0 = arg0;
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* Void .ctor()*/
    asm.x6000026 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Assembly GetInstance(System.Reflection.Assembly+jsAsm)*/
    asm.x6000033_init = function ()
    {
        ((asm0)["System.Boolean"]().init)();
        ((asm0)["System.Reflection.Assembly"]().init)();
        asm.x6000033 = asm.x6000033_;
    };;
    asm.x6000033 = function (arg0)
    {
        asm.x6000033_init.apply(this,arguments);
        return asm.x6000033_.apply(this,arguments);
    };;
    asm.x6000033_ = function GetInstance(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Boolean"]();
        t1 = (asm0)["System.Reflection.Assembly"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x1C;
                    continue;
                }
                /* IL_10: ldarg.0 */
                /* IL_11: ldarg.0 */
                /* IL_12: newobj Void .ctor(System.Reflection.Assembly+jsAsm)*/
                /* IL_17: stfld Assembly ManagedInstance*/
                arg0.ManagedInstance = BLR.newobj(t1,asm0.x6000032,[null, arg0]);
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
    /* String get_FullName()*/
    asm.x6000034 = function get_FullName(arg0)
    {
        var loc0;
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
    /* Void .ctor(System.Reflection.Assembly+jsAsm)*/
    asm.x6000032 = function _ctor(arg0,arg1)
    {
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
    /* Void .ctor()*/
    asm.x6000035 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Object[] GetCustomAttributesImpl(System.Object)*/
    asm.x600003c = 
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
    /* Void .ctor()*/
    asm.x600003e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static MethodInfo GetInstance(Braille.JavaScript.Array)*/
    asm.x6000040_init = function ()
    {
        ((asm0)["System.Reflection.MethodInfo"]().init)();
        asm.x6000040 = asm.x6000040_;
    };;
    asm.x6000040 = function (arg0)
    {
        asm.x6000040_init.apply(this,arguments);
        return asm.x6000040_.apply(this,arguments);
    };;
    asm.x6000040_ = function GetInstance(arg0)
    {
        var t0;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Reflection.MethodInfo"]();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: stloc.0 */
        loc0 = BLR.newobj(t0,asm0.x600003f,[null]);
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
    /* Object[] GetCustomAttributes(System.Boolean)*/
    asm.x6000041 = function GetCustomAttributes(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Array mtd*/
        /* IL_07: ldc.i4.3 */
        /* IL_08: callvirt Object get_Item(System.Int32)*/
        /* IL_0D: call Object[] GetCustomAttributesImpl(System.Object)*/
        /* IL_12: stloc.0 */
        loc0 = asm0.x600003c(arg0.System_ReflectionMethodInfomtd[(3|0)]);
        /* IL_15: ldloc.0 */
        /* IL_16: ret */
        return loc0;
    };;
    /* Object[] GetCustomAttributes(System.Type, System.Boolean)*/
    asm.x6000042_init = function ()
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x6000042 = asm.x6000042_;
    };;
    asm.x6000042 = function (arg0,arg1,arg2)
    {
        asm.x6000042_init.apply(this,arguments);
        return asm.x6000042_.apply(this,arguments);
    };;
    asm.x6000042_ = function GetCustomAttributes(arg0,arg1,arg2)
    {
        var t0;
        t0 = (asm0)["System.NotImplementedException"]();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x60000eb,[null]);
    };
    /* Boolean IsDefined(System.Type, System.Boolean)*/
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
    asm.x6000043_ = function IsDefined(arg0,arg1,arg2)
    {
        var t0;
        t0 = (asm0)["System.NotImplementedException"]();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x60000eb,[null]);
    };
    /* String get_Name()*/
    asm.x6000044_init = function ()
    {
        ((asm0)["Braille.JavaScript.String"]().init)();
        asm.x6000044 = asm.x6000044_;
    };;
    asm.x6000044 = function (arg0)
    {
        asm.x6000044_init.apply(this,arguments);
        return asm.x6000044_.apply(this,arguments);
    };;
    asm.x6000044_ = function get_Name(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["Braille.JavaScript.String"]();
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
    /* Object Invoke(System.Object, System.Object[])*/
    asm.x6000045 = function Invoke(arg0,arg1,arg2)
    {
        var loc0;
        var loc1;
        var loc2;
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
        loc2 = asm0.x6000046(loc0,loc1,arg1,arg2);
        /* IL_27: ldloc.2 */
        /* IL_28: ret */
        return loc2;
    };;
    /* static Object InvokeImpl(System.Object, System.Object, System.Object, System.Object[])*/
    asm.x6000046 = 
            function InvokeImpl(assembly, method, obj, parameters) {
                var args = [obj].concat(parameters.jsarr);
                return assembly[method].apply(null, args);
            }
            ;;
    /* Void .ctor()*/
    asm.x600003f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x600003e(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000047 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* String get_AssemblyName()*/
    asm.x6000049 = function get_AssemblyName(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld String assemblyName*/
        /* IL_07: stloc.0 */
        loc0 = arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Boolean get_AllInternalsVisible()*/
    asm.x600004a = function get_AllInternalsVisible(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Boolean allInternalsVisible*/
        /* IL_07: stloc.0 */
        loc0 = arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Void set_AllInternalsVisible(System.Boolean)*/
    asm.x600004b = function set_AllInternalsVisible(arg0,arg1)
    {
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: stfld Boolean allInternalsVisible*/
        arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = arg1;
        /* IL_08: ret */
        return ;
    };;
    /* Void .ctor(System.String)*/
    asm.x6000048 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.1 */
        /* IL_02: stfld Boolean allInternalsVisible*/
        arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = (1|0);
        /* IL_07: ldarg.0 */
        /* IL_08: call Void .ctor()*/
        asm0.x6000047(arg0);
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
    /* static Type GetUnderlyingType(System.Type)*/
    asm.x600004c_init = function ()
    {
        ((asm0)["System.InvalidOperationException"]().init)();
        ((asm0)["System.Int32"]().init)();
        asm.x600004c = asm.x600004c_;
    };;
    asm.x600004c = function (arg0)
    {
        asm.x600004c_init.apply(this,arguments);
        return asm.x600004c_.apply(this,arguments);
    };;
    asm.x600004c_ = function GetUnderlyingType(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.InvalidOperationException"]();
        t1 = (asm0)["System.Int32"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: callvirt Boolean get_IsEnum()*/
                /* IL_07: stloc.1 */
                loc1 = asm0.x60000b0(arg0);
                /* IL_08: ldloc.1 */
                /* IL_09: brtrue.s IL_11*/
                
                if (loc1){
                    __pos_0__ = 0x11;
                    continue;
                }
                /* IL_0B: newobj Void .ctor()*/
                /* IL_10: throw */
                throw BLR.newobj(t0,asm0.x60000f7,[null]);
                case 0x11:
                /* IL_11: ldtoken System.Int32*/
                /* IL_16: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_1B: stloc.0 */
                loc0 = asm0.x60000ae(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1));
                /* IL_1E: ldloc.0 */
                /* IL_1F: ret */
                return loc0;
            }
        }
    };
    /* Void .ctor()*/
    asm.x600004d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000018(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* MethodImplOptions get_Value()*/
    asm.x6000051 = function get_Value(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld MethodImplOptions _val*/
        /* IL_07: stloc.0 */
        loc0 = arg0.System_Runtime_CompilerServicesMethodImplAttribute_val;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Void .ctor()*/
    asm.x600004e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000047(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* Void .ctor(System.Int16)*/
    asm.x600004f = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000047(arg0);
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
    /* Void .ctor(System.Runtime.CompilerServices.MethodImplOptions)*/
    asm.x6000050 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000047(arg0);
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
    /* static Object CreateInstance(System.Type)*/
    asm.x6000052 = function CreateInstance(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Object CreateInstanceImpl(System.Type)*/
        /* IL_07: stloc.0 */
        loc0 = (new (arg0.ctor)());
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* AttributeTargets get_ValidOn()*/
    asm.x6000055 = function get_ValidOn(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld AttributeTargets <ValidOn>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void set_ValidOn(System.AttributeTargets)*/
    asm.x6000056 = function set_ValidOn(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld AttributeTargets <ValidOn>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Boolean get_Inherited()*/
    asm.x6000057 = function get_Inherited(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Boolean <Inherited>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemAttributeUsageAttribute<Inherited>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void set_Inherited(System.Boolean)*/
    asm.x6000058 = function set_Inherited(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Boolean <Inherited>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Boolean get_AllowMultiple()*/
    asm.x6000059 = function get_AllowMultiple(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Boolean <AllowMultiple>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void set_AllowMultiple(System.Boolean)*/
    asm.x600005a = function set_AllowMultiple(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Boolean <AllowMultiple>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Void .ctor(System.AttributeTargets)*/
    asm.x6000054 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000047(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: call Void set_ValidOn(System.AttributeTargets)*/
        asm0.x6000056(arg0,BLR.clone_value(arg1));
        /* IL_0F: nop */
        /* IL_10: nop */
        /* IL_11: ret */
        return ;
    };;
    /* String ToString()*/
    asm.x600005b = function ToString(arg0)
    {
        var st_02;
        var __pos_0__;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i1 */
                /* IL_03: brtrue.s IL_0C*/
                
                if (arg0.r()){
                    __pos_0__ = 0xC;
                    continue;
                }
                /* IL_05: ldstr False*/
                st_02 = BLR.new_string("False");
                /* IL_0A: br.s IL_11*/
                __pos_0__ = 0x11;
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
    /* Boolean Equals(System.Object)*/
    asm.x600005c_init = function ()
    {
        ((asm0)["System.Boolean"]().init)();
        asm.x600005c = asm.x600005c_;
    };;
    asm.x600005c = function (arg0,arg1)
    {
        asm.x600005c_init.apply(this,arguments);
        return asm.x600005c_.apply(this,arguments);
    };;
    asm.x600005c_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Boolean"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.Boolean*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.3 */
                loc3 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc3){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldind.i1 */
                /* IL_14: stloc.0 */
                loc0 = arg0.r();
                /* IL_15: ldarg.1 */
                /* IL_16: unbox.any System.Boolean*/
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
    };
    /* String ToString()*/
    asm.x600006a_init = function ()
    {
        ((asm0)["System.Byte"]().init)();
        asm.x600006a = asm.x600006a_;
    };;
    asm.x600006a = function (arg0)
    {
        asm.x600006a_init.apply(this,arguments);
        return asm.x600006a_.apply(this,arguments);
    };;
    asm.x600006a_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.Byte"]();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u1 */
        /* IL_03: box System.Byte*/
        /* IL_08: ldc.i4.8 */
        /* IL_09: call String UnsignedPrimitiveToString(System.Object, System.Int32)*/
        /* IL_0E: stloc.0 */
        loc0 = asm0.x600009c({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },(8|0));
        /* IL_11: ldloc.0 */
        /* IL_12: ret */
        return loc0;
    };
    /* Boolean Equals(System.Object)*/
    asm.x600006b_init = function ()
    {
        ((asm0)["System.Byte"]().init)();
        asm.x600006b = asm.x600006b_;
    };;
    asm.x600006b = function (arg0,arg1)
    {
        asm.x600006b_init.apply(this,arguments);
        return asm.x600006b_.apply(this,arguments);
    };;
    asm.x600006b_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Byte"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.Byte*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.3 */
                loc3 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc3){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldind.u1 */
                /* IL_14: stloc.0 */
                loc0 = arg0.r();
                /* IL_15: ldarg.1 */
                /* IL_16: unbox.any System.Byte*/
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
    };
    /* Int32 GetHashCode()*/
    asm.x600006c = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u1 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* String ToString()*/
    asm.x600006d_init = function ()
    {
        ((asm0)["System.Char"]().init)();
        asm.x600006d = asm.x600006d_;
    };;
    asm.x600006d = function (arg0)
    {
        asm.x600006d_init.apply(this,arguments);
        return asm.x600006d_.apply(this,arguments);
    };;
    asm.x600006d_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.Char"]();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u2 */
        /* IL_03: box System.Char*/
        /* IL_08: call String ToStringImpl(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x600006e({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* static String ToStringImpl(System.Object)*/
    asm.x600006e = function(o) { return BLR.new_string(String.fromCharCode(o.boxed)); };;
    /* static Boolean IsDigit(System.Char)*/
    asm.x600006f = function(o) { return (48 <= o.boxed && o.boxed <= 57) ? 1 : 0; };;
    /* static Delegate Combine(System.Delegate, System.Delegate)*/
    asm.x6000070_init = function ()
    {
        ((asm0)["System.Exception"]().init)();
        asm.x6000070 = asm.x6000070_;
    };;
    asm.x6000070 = function (arg0,arg1)
    {
        asm.x6000070_init.apply(this,arguments);
        return asm.x6000070_.apply(this,arguments);
    };;
    asm.x6000070_ = function Combine(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Exception"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x20;
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
                    __pos_0__ = 0x1C;
                    continue;
                }
                /* IL_18: ldnull */
                /* IL_19: stloc.0 */
                loc0 = null;
                /* IL_1A: br.s IL_56*/
                __pos_0__ = 0x56;
                continue;
                case 0x1C:
                /* IL_1C: ldarg.1 */
                /* IL_1D: stloc.0 */
                loc0 = arg1;
                /* IL_1E: br.s IL_56*/
                __pos_0__ = 0x56;
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
                    __pos_0__ = 0x2F;
                    continue;
                }
                /* IL_2B: ldarg.0 */
                /* IL_2C: stloc.0 */
                loc0 = arg0;
                /* IL_2D: br.s IL_56*/
                __pos_0__ = 0x56;
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
                    __pos_0__ = 0x4C;
                    continue;
                }
                /* IL_41: ldstr Incompatible delegate types*/
                /* IL_46: newobj Void .ctor(System.String)*/
                /* IL_4B: throw */
                throw BLR.newobj(t0,asm0.x600009f,[null, BLR.new_string("Incompatible delegate types")]);
                case 0x4C:
                /* IL_4C: ldarg.0 */
                /* IL_4D: ldarg.1 */
                /* IL_4E: callvirt Delegate CombineImpl(System.Delegate)*/
                /* IL_53: stloc.0 */
                loc0 = ((arg0.vtable)["asm0.x6000073"]())(arg0,arg1);
                case 0x56:
                /* IL_56: ldloc.0 */
                /* IL_57: ret */
                return loc0;
            }
        }
    };
    /* static Delegate Remove(System.Delegate, System.Delegate)*/
    asm.x6000071_init = function ()
    {
        ((asm0)["System.Exception"]().init)();
        asm.x6000071 = asm.x6000071_;
    };;
    asm.x6000071 = function (arg0,arg1)
    {
        asm.x6000071_init.apply(this,arguments);
        return asm.x6000071_.apply(this,arguments);
    };;
    asm.x6000071_ = function Remove(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Exception"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x10;
                    continue;
                }
                /* IL_0C: ldarg.0 */
                /* IL_0D: stloc.0 */
                loc0 = arg0;
                /* IL_0E: br.s IL_37*/
                __pos_0__ = 0x37;
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
                    __pos_0__ = 0x2D;
                    continue;
                }
                /* IL_22: ldstr Incompatible delegate types*/
                /* IL_27: newobj Void .ctor(System.String)*/
                /* IL_2C: throw */
                throw BLR.newobj(t0,asm0.x600009f,[null, BLR.new_string("Incompatible delegate types")]);
                case 0x2D:
                /* IL_2D: ldarg.0 */
                /* IL_2E: ldarg.1 */
                /* IL_2F: callvirt Delegate RemoveImpl(System.Delegate)*/
                /* IL_34: stloc.0 */
                loc0 = ((arg0.vtable)["asm0.x6000072"]())(arg0,arg1);
                case 0x37:
                /* IL_37: ldloc.0 */
                /* IL_38: ret */
                return loc0;
            }
        }
    };
    /* Delegate RemoveImpl(System.Delegate)*/
    asm.x6000072_init = function ()
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x6000072 = asm.x6000072_;
    };;
    asm.x6000072 = function (arg0,arg1)
    {
        asm.x6000072_init.apply(this,arguments);
        return asm.x6000072_.apply(this,arguments);
    };;
    asm.x6000072_ = function RemoveImpl(arg0,arg1)
    {
        var t0;
        t0 = (asm0)["System.NotImplementedException"]();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x60000eb,[null]);
    };
    /* Delegate CombineImpl(System.Delegate)*/
    asm.x6000073_init = function ()
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x6000073 = asm.x6000073_;
    };;
    asm.x6000073 = function (arg0,arg1)
    {
        asm.x6000073_init.apply(this,arguments);
        return asm.x6000073_.apply(this,arguments);
    };;
    asm.x6000073_ = function CombineImpl(arg0,arg1)
    {
        var t0;
        t0 = (asm0)["System.NotImplementedException"]();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x60000eb,[null]);
    };
    /* Boolean Equals(System.Object)*/
    asm.x6000074_init = function ()
    {
        ((asm0)["System.Delegate"]().init)();
        asm.x6000074 = asm.x6000074_;
    };;
    asm.x6000074 = function (arg0,arg1)
    {
        asm.x6000074_init.apply(this,arguments);
        return asm.x6000074_.apply(this,arguments);
    };;
    asm.x6000074_ = function Equals(arg0,arg1)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.Delegate"]();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: isinst System.Delegate*/
        /* IL_08: call Boolean op_Equality(System.Delegate, System.Delegate)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x6000075(arg0,t0.IsInst(arg1));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* static Boolean op_Equality(System.Delegate, System.Delegate)*/
    asm.x6000075_init = function ()
    {
        ((asm0)["System.MulticastDelegate"]().init)();
        asm.x6000075 = asm.x6000075_;
    };;
    asm.x6000075 = function (arg0,arg1)
    {
        asm.x6000075_init.apply(this,arguments);
        return asm.x6000075_.apply(this,arguments);
    };;
    asm.x6000075_ = function op_Equality(arg0,arg1)
    {
        var t0;
        var st_27;
        var st_52;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc6;
        var loc5;
        var loc2;
        var loc3;
        var loc4;
        t0 = (asm0)["System.MulticastDelegate"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x27;
                    continue;
                }
                /* IL_1C: ldloc.1 */
                /* IL_1D: ldnull */
                /* IL_1F: ceq */
                /* IL_20: stloc.s 5*/
                loc5 = ((loc1 === null) ? (1) : (0));
                /* IL_22: br IL_112*/
                __pos_0__ = 0x112;
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
                    __pos_0__ = 0x3C;
                    continue;
                }
                /* IL_34: ldc.i4.0 */
                /* IL_35: stloc.s 5*/
                loc5 = (0|0);
                /* IL_37: br IL_112*/
                __pos_0__ = 0x112;
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
                    __pos_0__ = 0x5B;
                    continue;
                }
                /* IL_53: ldc.i4.0 */
                /* IL_54: stloc.s 5*/
                loc5 = (0|0);
                /* IL_56: br IL_112*/
                __pos_0__ = 0x112;
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
                    __pos_0__ = 0x7A;
                    continue;
                }
                /* IL_72: ldc.i4.0 */
                /* IL_73: stloc.s 5*/
                loc5 = (0|0);
                /* IL_75: br IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0x7A:
                /* IL_7A: ldloc.0 */
                /* IL_7B: ldfld Delegate[] _invocationList*/
                /* IL_80: brfalse.s IL_8D*/
                
                if ((!(loc0._invocationList))){
                    __pos_0__ = 0x8D;
                    continue;
                }
                /* IL_82: ldloc.1 */
                /* IL_83: ldfld Delegate[] _invocationList*/
                /* IL_88: ldnull */
                /* IL_8A: ceq */
                st_27 = ((loc1._invocationList === null) ? (1) : (0));
                /* IL_8B: br.s IL_8E*/
                __pos_0__ = 0x8E;
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
                    __pos_0__ = 0xF9;
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
                    __pos_0__ = 0xB3;
                    continue;
                }
                /* IL_AE: ldc.i4.0 */
                /* IL_AF: stloc.s 5*/
                loc5 = (0|0);
                /* IL_B1: br.s IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0xB3:
                /* IL_B3: ldc.i4.0 */
                /* IL_B4: stloc.2 */
                loc2 = (0|0);
                /* IL_B5: br.s IL_E3*/
                __pos_0__ = 0xE3;
                continue;
                case 0xB7:
                /* IL_B7: nop */
                
                /* IL_B8: ldloc.0 */
                /* IL_B9: ldfld Delegate[] _invocationList*/
                /* IL_BE: ldloc.2 */
                /* IL_BF: ldelem.ref */
                /* IL_C0: stloc.3 */
                loc3 = (loc0._invocationList.jsarr)[loc2];
                /* IL_C1: ldloc.1 */
                /* IL_C2: ldfld Delegate[] _invocationList*/
                /* IL_C7: ldloc.2 */
                /* IL_C8: ldelem.ref */
                /* IL_C9: stloc.s 4*/
                loc4 = (loc1._invocationList.jsarr)[loc2];
                /* IL_CB: ldloc.3 */
                /* IL_CC: ldloc.s 4*/
                /* IL_CE: call Boolean op_Equality(System.Delegate, System.Delegate)*/
                /* IL_D3: stloc.s 6*/
                loc6 = asm0.x6000075(loc3,loc4);
                /* IL_D5: ldloc.s 6*/
                /* IL_D7: brtrue.s IL_DE*/
                
                if (loc6){
                    __pos_0__ = 0xDE;
                    continue;
                }
                /* IL_D9: ldc.i4.0 */
                /* IL_DA: stloc.s 5*/
                loc5 = (0|0);
                /* IL_DC: br.s IL_112*/
                __pos_0__ = 0x112;
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
                    __pos_0__ = 0xB7;
                    continue;
                }
                /* IL_F4: ldc.i4.1 */
                /* IL_F5: stloc.s 5*/
                loc5 = (1|0);
                /* IL_F7: br.s IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0xF9:
                /* IL_F9: ldloc.0 */
                /* IL_FA: ldfld Delegate[] _invocationList*/
                /* IL_FF: brtrue.s IL_10C*/
                
                if (loc0._invocationList){
                    __pos_0__ = 0x10C;
                    continue;
                }
                /* IL_101: ldloc.1 */
                /* IL_102: ldfld Delegate[] _invocationList*/
                /* IL_107: ldnull */
                /* IL_109: ceq */
                st_52 = ((loc1._invocationList === null) ? (1) : (0));
                /* IL_10A: br.s IL_10D*/
                __pos_0__ = 0x10D;
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
    /* static Boolean op_Inequality(System.Delegate, System.Delegate)*/
    asm.x6000076 = function op_Inequality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean op_Equality(System.Delegate, System.Delegate)*/
        /* IL_08: ldc.i4.0 */
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = ((asm0.x6000075(arg0,arg1) === (0|0)) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    /* Int32 GetHashCode()*/
    asm.x6000077 = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetHashCode()*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x6000009(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static Object GetJsFunction(System.Delegate)*/
    asm.x6000079 = function GetJsFunction(arg0)
    {
        var __pos_0__;
        var loc1;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x22;
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
                __pos_0__ = 0x2B;
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
    /* Void .ctor()*/
    asm.x600007a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Delegate CreateMulticast(System.Delegate[])*/
    asm.x600007b = 
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
    /* Delegate CombineImpl(System.Delegate)*/
    asm.x600007c_init = function ()
    {
        ((asm0)["System.Delegate"]().init)();
        asm.x600007c = asm.x600007c_;
    };;
    asm.x600007c = function (arg0,arg1)
    {
        asm.x600007c_init.apply(this,arguments);
        return asm.x600007c_.apply(this,arguments);
    };;
    asm.x600007c_ = function CombineImpl(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm0)["System.Delegate"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x4C;
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
                __pos_0__ = 0x32;
                continue;
                case 0x23:
                /* IL_23: ldloc.0 */
                /* IL_24: ldloc.1 */
                /* IL_25: ldarg.0 */
                /* IL_26: ldfld Delegate[] _invocationList*/
                /* IL_2B: ldloc.1 */
                /* IL_2C: ldelem.ref */
                /* IL_2D: stelem.ref */
                (loc0.jsarr)[loc1] = (arg0._invocationList.jsarr)[loc1];
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
                    __pos_0__ = 0x23;
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
                (loc0.jsarr)[((loc0.jsarr.length | (0|0)) - (1|0)) | (0|0)] = arg1;
                /* IL_49: nop */
                
                /* IL_4A: br.s IL_5D*/
                __pos_0__ = 0x5D;
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
                (loc0.jsarr)[(0|0)] = arg0;
                /* IL_58: ldloc.0 */
                /* IL_59: ldc.i4.1 */
                /* IL_5A: ldarg.1 */
                /* IL_5B: stelem.ref */
                (loc0.jsarr)[(1|0)] = arg1;
                /* IL_5C: nop */
                
                case 0x5D:
                /* IL_5D: ldloc.0 */
                /* IL_5E: call Delegate CreateMulticast(System.Delegate[])*/
                /* IL_63: stloc.2 */
                loc2 = asm0.x600007b(loc0);
                /* IL_66: ldloc.2 */
                /* IL_67: ret */
                return loc2;
            }
        }
    };
    /* Delegate RemoveImpl(System.Delegate)*/
    asm.x600007d_init = function ()
    {
        ((asm0)["System.Delegate"]().init)();
        asm.x600007d = asm.x600007d_;
    };;
    asm.x600007d = function (arg0,arg1)
    {
        asm.x600007d_init.apply(this,arguments);
        return asm.x600007d_.apply(this,arguments);
    };;
    asm.x600007d_ = function RemoveImpl(arg0,arg1)
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
        var __pos_0__;
        var loc5;
        var loc4;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        t0 = (asm0)["System.Delegate"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x34;
                    continue;
                }
                /* IL_13: nop */
                
                /* IL_14: ldarg.1 */
                /* IL_15: ldarg.0 */
                /* IL_16: call Boolean op_Equality(System.Delegate, System.Delegate)*/
                /* IL_1B: ldc.i4.0 */
                /* IL_1D: ceq */
                /* IL_1E: stloc.s 5*/
                loc5 = ((asm0.x6000075(arg1,arg0) === (0|0)) ? (1) : (0));
                /* IL_20: ldloc.s 5*/
                /* IL_22: brtrue.s IL_2C*/
                
                if (loc5){
                    __pos_0__ = 0x2C;
                    continue;
                }
                /* IL_24: ldnull */
                /* IL_25: stloc.s 4*/
                loc4 = null;
                /* IL_27: br IL_11B*/
                __pos_0__ = 0x11B;
                continue;
                case 0x2C:
                /* IL_2C: ldarg.0 */
                /* IL_2D: stloc.s 4*/
                loc4 = arg0;
                /* IL_2F: br IL_11B*/
                __pos_0__ = 0x11B;
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
                __pos_0__ = 0x5A;
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
                loc5 = ((asm0.x6000076((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
                /* IL_4E: ldloc.s 5*/
                /* IL_50: brtrue.s IL_56*/
                
                if (loc5){
                    __pos_0__ = 0x56;
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
                    __pos_0__ = 0x3B;
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
                    __pos_0__ = 0x80;
                    continue;
                }
                /* IL_78: ldnull */
                /* IL_79: stloc.s 4*/
                loc4 = null;
                /* IL_7B: br IL_11B*/
                __pos_0__ = 0x11B;
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
                    __pos_0__ = 0xC9;
                    continue;
                }
                /* IL_8D: ldc.i4.0 */
                /* IL_8E: stloc.1 */
                loc1 = (0|0);
                /* IL_8F: br.s IL_B8*/
                __pos_0__ = 0xB8;
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
                loc5 = ((asm0.x6000076((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
                /* IL_A4: ldloc.s 5*/
                /* IL_A6: brtrue.s IL_B4*/
                
                if (loc5){
                    __pos_0__ = 0xB4;
                    continue;
                }
                /* IL_A8: ldarg.0 */
                /* IL_A9: ldfld Delegate[] _invocationList*/
                /* IL_AE: ldloc.1 */
                /* IL_AF: ldelem.ref */
                /* IL_B0: stloc.s 4*/
                loc4 = (arg0._invocationList.jsarr)[loc1];
                /* IL_B2: br.s IL_11B*/
                __pos_0__ = 0x11B;
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
                    __pos_0__ = 0x91;
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
                __pos_0__ = 0x100;
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
                loc5 = ((asm0.x6000076((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
                /* IL_E9: ldloc.s 5*/
                /* IL_EB: brtrue.s IL_FC*/
                
                if (loc5){
                    __pos_0__ = 0xFC;
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
                st_62 = (st_5E.jsarr)[st_5F];
                /* IL_FB: stelem.ref */
                (st_60.jsarr)[st_61] = st_62;
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
                    __pos_0__ = 0xD6;
                    continue;
                }
                /* IL_111: ldloc.2 */
                /* IL_112: call Delegate CreateMulticast(System.Delegate[])*/
                /* IL_117: stloc.s 4*/
                loc4 = asm0.x600007b(loc2);
                case 0x11B:
                /* IL_11B: ldloc.s 4*/
                /* IL_11D: ret */
                return loc4;
            }
        }
    };
    /* Void .ctor()*/
    asm.x600007e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x600007a(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Int32 Invoke(T, T)*/
    asm.x6000080 = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    /* Void .ctor(System.Object, System.IntPtr)*/
    asm.x600007f = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* static Void WriteLineImpl(System.String)*/
    asm.x6000081 = (function (o) { console.log(o.jsstr); });;
    /* static Void WriteLine(System.Object)*/
    asm.x6000082_init = function ()
    {
        ((asm0)["System.String"]().init)();
        asm.x6000082 = asm.x6000082_;
    };;
    asm.x6000082 = function (arg0)
    {
        asm.x6000082_init.apply(this,arguments);
        return asm.x6000082_.apply(this,arguments);
    };;
    asm.x6000082_ = function WriteLine(arg0)
    {
        var t0;
        var __pos_0__;
        var loc0;
        t0 = (asm0)["System.String"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x19;
                    continue;
                }
                asm0.x6000182();
                /* IL_0C: ldsfld String Empty*/
                /* IL_11: call Void WriteLineImpl(System.String)*/
                asm0.x6000081(t0.Empty);
                /* IL_16: nop */
                
                /* IL_17: br.s IL_25*/
                __pos_0__ = 0x25;
                continue;
                case 0x19:
                /* IL_19: ldarg.0 */
                /* IL_1A: callvirt String ToString()*/
                /* IL_1F: call Void WriteLineImpl(System.String)*/
                asm0.x6000081(((arg0.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(arg0)));
                /* IL_24: nop */
                
                case 0x25:
                /* IL_25: ret */
                return ;
            }
        }
    };
    /* Void .ctor()*/
    asm.x6000083 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* String ToString()*/
    asm.x6000086_init = function ()
    {
        ((asm0)["System.Double"]().init)();
        asm.x6000086 = asm.x6000086_;
    };;
    asm.x6000086 = function (arg0)
    {
        asm.x6000086_init.apply(this,arguments);
        return asm.x6000086_.apply(this,arguments);
    };;
    asm.x6000086_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.Double"]();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.r8 */
        /* IL_03: box System.Double*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x600009b({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* Int32 CompareTo(System.Object)*/
    asm.x6000087 = function CompareTo(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.Double*/
        /* IL_08: call Int32 CompareTo(System.Double)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x6000088(arg0,BLR.unbox_any(arg1,(asm0)["System.Double"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* Int32 CompareTo(System.Double)*/
    asm.x6000088 = function CompareTo(arg0,arg1)
    {
        var __pos_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos_0__ = 0x26;
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
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos_0__ = 0x26;
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
    /* static Int32 get_CurrentManagedThreadId()*/
    asm.x6000089 = function get_CurrentManagedThreadId()
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.0 */
        /* IL_02: stloc.0 */
        loc0 = (0|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* static String get_NewLine()*/
    asm.x600008a = function get_NewLine()
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldstr */
        /* */
        /* IL_06: stloc.0 */
        loc0 = BLR.new_string("\\n");
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void .ctor()*/
    asm.x600008b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000047(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* TResult Invoke(T)*/
    asm.x600008d = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    /* Void .ctor(System.Object, System.IntPtr)*/
    asm.x600008c = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* String ToString()*/
    asm.x6000091_init = function ()
    {
        ((asm0)["System.Int16"]().init)();
        asm.x6000091 = asm.x6000091_;
    };;
    asm.x6000091 = function (arg0)
    {
        asm.x6000091_init.apply(this,arguments);
        return asm.x6000091_.apply(this,arguments);
    };;
    asm.x6000091_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.Int16"]();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i2 */
        /* IL_03: box System.Int16*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x600009b({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* Boolean Equals(System.Object)*/
    asm.x6000092_init = function ()
    {
        ((asm0)["System.Int16"]().init)();
        asm.x6000092 = asm.x6000092_;
    };;
    asm.x6000092 = function (arg0,arg1)
    {
        asm.x6000092_init.apply(this,arguments);
        return asm.x6000092_.apply(this,arguments);
    };;
    asm.x6000092_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Int16"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.Int16*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.3 */
                loc3 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc3){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldind.i2 */
                /* IL_14: stloc.0 */
                loc0 = arg0.r();
                /* IL_15: ldarg.1 */
                /* IL_16: unbox.any System.Int16*/
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
    };
    /* Int32 GetHashCode()*/
    asm.x6000093 = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i2 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* String ToString()*/
    asm.x6000094_init = function ()
    {
        ((asm0)["System.Int32"]().init)();
        asm.x6000094 = asm.x6000094_;
    };;
    asm.x6000094 = function (arg0)
    {
        asm.x6000094_init.apply(this,arguments);
        return asm.x6000094_.apply(this,arguments);
    };;
    asm.x6000094_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.Int32"]();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i4 */
        /* IL_03: box System.Int32*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x600009b({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* String ToString(System.String)*/
    asm.x6000096_init = function ()
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x6000096 = asm.x6000096_;
    };;
    asm.x6000096 = function (arg0,arg1)
    {
        asm.x6000096_init.apply(this,arguments);
        return asm.x6000096_.apply(this,arguments);
    };;
    asm.x6000096_ = function ToString(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc2;
        var loc1;
        t0 = (asm0)["System.NotSupportedException"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                loc2 = ((asm0.x600017b(arg1,BLR.new_string("X")) === (0|0)) ? (1) : (0));
                /* IL_13: ldloc.2 */
                /* IL_14: brtrue.s IL_1F*/
                
                if (loc2){
                    __pos_0__ = 0x1F;
                    continue;
                }
                /* IL_16: ldloc.0 */
                /* IL_17: call String toHex(System.Int32)*/
                /* IL_1C: stloc.1 */
                loc1 = BLR.new_string(loc0.toString(16));
                /* IL_1D: br.s IL_25*/
                __pos_0__ = 0x25;
                continue;
                case 0x1F:
                /* IL_1F: newobj Void .ctor()*/
                /* IL_24: throw */
                throw BLR.newobj(t0,asm0.x60000ec,[null]);
                case 0x25:
                /* IL_25: ldloc.1 */
                /* IL_26: ret */
                return loc1;
            }
        }
    };
    /* Int32 CompareTo(System.Object)*/
    asm.x6000097 = function CompareTo(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.Int32*/
        /* IL_08: call Int32 CompareTo(System.Int32)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x6000098(arg0,BLR.unbox_any(arg1,(asm0)["System.Int32"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* Int32 CompareTo(System.Int32)*/
    asm.x6000098 = function CompareTo(arg0,arg1)
    {
        var __pos_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos_0__ = 0x26;
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
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos_0__ = 0x26;
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
    /* Boolean Equals(System.Object)*/
    asm.x6000099_init = function ()
    {
        ((asm0)["System.Int32"]().init)();
        asm.x6000099 = asm.x6000099_;
    };;
    asm.x6000099 = function (arg0,arg1)
    {
        asm.x6000099_init.apply(this,arguments);
        return asm.x6000099_.apply(this,arguments);
    };;
    asm.x6000099_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Int32"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.Int32*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.3 */
                loc3 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc3){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldind.i4 */
                /* IL_14: stloc.0 */
                loc0 = arg0.r();
                /* IL_15: ldarg.1 */
                /* IL_16: unbox.any System.Int32*/
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
    };
    /* Int32 GetHashCode()*/
    asm.x600009a = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i4 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* static String SignedPrimitiveToString(System.Object)*/
    asm.x600009b = function(o) { return BLR.new_string(o.boxed.toString()); };;
    /* static String UnsignedPrimitiveToString(System.Object, System.Int32)*/
    asm.x600009c = 
            function(o, size) {
                var b = o.boxed;
                if (b < 0) {
                    var max = 0xffffffff >>> (32 - size);
                    b = max + (b + 1);
                }
                return BLR.new_string(b.toString());
            };;
    /* String ToString()*/
    asm.x600009d_init = function ()
    {
        ((asm0)["System.IntPtr"]().init)();
        asm.x600009d = asm.x600009d_;
    };;
    asm.x600009d = function (arg0)
    {
        asm.x600009d_init.apply(this,arguments);
        return asm.x600009d_.apply(this,arguments);
    };;
    asm.x600009d_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.IntPtr"]();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldobj System.IntPtr*/
        /* IL_07: box System.IntPtr*/
        /* IL_0C: call String SignedPrimitiveToString(System.Object)*/
        /* IL_11: stloc.0 */
        loc0 = asm0.x600009b({
                'boxed': arg0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };
    /* Int32 get_HResult()*/
    asm.x60000a1 = function get_HResult(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 <HResult>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemException<HResult>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void set_HResult(System.Int32)*/
    asm.x60000a2 = function set_HResult(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Int32 <HResult>k__BackingField*/
        (arg0)["SystemException<HResult>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* String get_Message()*/
    asm.x60000a3 = function get_Message(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld String <Message>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemException<Message>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void set_Message(System.String)*/
    asm.x60000a4 = function set_Message(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <Message>k__BackingField*/
        (arg0)["SystemException<Message>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* String ToString()*/
    asm.x60000a5 = function ToString(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt String get_Message()*/
        /* IL_07: stloc.0 */
        loc0 = ((arg0.vtable)["asm0.x60000a3"]())(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Exception get_InnerException()*/
    asm.x60000a6 = function get_InnerException(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Exception <InnerException>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemException<InnerException>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void set_InnerException(System.Exception)*/
    asm.x60000a7 = function set_InnerException(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Exception <InnerException>k__BackingField*/
        (arg0)["SystemException<InnerException>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600009e = function _ctor(arg0)
    {
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
    /* Void .ctor(System.String)*/
    asm.x600009f = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x600009e(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: callvirt Void set_Message(System.String)*/
        ((arg0.vtable)["asm0.x60000a4"]())(arg0,arg1);
        /* IL_0F: nop */
        /* IL_10: nop */
        /* IL_11: ret */
        return ;
    };;
    /* Void .ctor(System.String, System.Exception)*/
    asm.x60000a0 = function _ctor(arg0,arg1,arg2)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x600009e(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: callvirt Void set_Message(System.String)*/
        ((arg0.vtable)["asm0.x60000a4"]())(arg0,arg1);
        /* IL_0F: nop */
        /* IL_10: ldarg.0 */
        /* IL_11: ldarg.2 */
        /* IL_12: call Void set_InnerException(System.Exception)*/
        asm0.x60000a7(arg0,arg2);
        /* IL_17: nop */
        /* IL_18: nop */
        /* IL_19: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000a9 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x600009e(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000aa = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x60000a9(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000ab = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000047(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Object get_Value()*/
    asm.x60000ac = function get_Value(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Object value*/
        /* IL_07: stloc.0 */
        loc0 = arg0.r().value;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
    asm.x60000ae = function GetTypeFromHandle(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Type GetRuntimeTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x60000c5(BLR.clone_value(arg0));
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Boolean IsSubclassOf(System.Type)*/
    asm.x60000af = function IsSubclassOf(arg0,arg1)
    {
        var st_05;
        var __pos_0__;
        var loc2;
        var loc1;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: brfalse.s IL_0D*/
                
                if ((!(arg1))){
                    __pos_0__ = 0xD;
                    continue;
                }
                /* IL_04: ldarg.1 */
                /* IL_05: ldarg.0 */
                /* IL_07: ceq */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                st_05 = ((((arg1 === arg0) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0B: br.s IL_0E*/
                __pos_0__ = 0xE;
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
                    __pos_0__ = 0x17;
                    continue;
                }
                /* IL_13: ldc.i4.0 */
                /* IL_14: stloc.1 */
                loc1 = (0|0);
                /* IL_15: br.s IL_45*/
                __pos_0__ = 0x45;
                continue;
                case 0x17:
                /* IL_17: ldarg.0 */
                /* IL_18: callvirt Type get_BaseType()*/
                /* IL_1D: stloc.0 */
                loc0 = ((arg0.vtable)["asm0.x60000b2"]())(arg0);
                /* IL_1E: br.s IL_36*/
                __pos_0__ = 0x36;
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
                    __pos_0__ = 0x2F;
                    continue;
                }
                /* IL_2B: ldc.i4.1 */
                /* IL_2C: stloc.1 */
                loc1 = (1|0);
                /* IL_2D: br.s IL_45*/
                __pos_0__ = 0x45;
                continue;
                case 0x2F:
                /* IL_2F: ldloc.0 */
                /* IL_30: callvirt Type get_BaseType()*/
                /* IL_35: stloc.0 */
                loc0 = ((loc0.vtable)["asm0.x60000b2"]())(loc0);
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
                    __pos_0__ = 0x20;
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
    /* Boolean get_IsEnum()*/
    asm.x60000b0_init = function ()
    {
        ((asm0)["System.Enum"]().init)();
        asm.x60000b0 = asm.x60000b0_;
    };;
    asm.x60000b0 = function (arg0)
    {
        asm.x60000b0_init.apply(this,arguments);
        return asm.x60000b0_.apply(this,arguments);
    };;
    asm.x60000b0_ = function get_IsEnum(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.Enum"]();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldtoken System.Enum*/
        /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_0C: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_11: stloc.0 */
        loc0 = ((arg0.vtable)["asm0.x60000af"]())(arg0,asm0.x60000ae(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)));
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };
    /* Void .ctor()*/
    asm.x60000bf = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x600003e(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static constructor GetConstructor(System.Object)*/
    asm.x60000c0 = function (o) { return o.type || o.constructor; };;
    /* static Type GetInstance(System.RuntimeType+constructor)*/
    asm.x60000c3_init = function ()
    {
        ((asm0)["System.Boolean"]().init)();
        ((asm0)["System.RuntimeType"]().init)();
        asm.x60000c3 = asm.x60000c3_;
    };;
    asm.x60000c3 = function (arg0)
    {
        asm.x60000c3_init.apply(this,arguments);
        return asm.x60000c3_.apply(this,arguments);
    };;
    asm.x60000c3_ = function GetInstance(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Boolean"]();
        t1 = (asm0)["System.RuntimeType"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x1C;
                    continue;
                }
                /* IL_10: ldarg.0 */
                /* IL_11: ldarg.0 */
                /* IL_12: newobj Void .ctor(System.RuntimeType+constructor)*/
                /* IL_17: stfld Type TypeInstance*/
                arg0.TypeInstance = BLR.newobj(t1,asm0.x60000c1,[null, arg0]);
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
    asm.GetReflectionType = asm.x60000c3;
    /* static Type GetType(System.Object)*/
    asm.x60000c4 = function GetType(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call constructor GetConstructor(System.Object)*/
        /* IL_07: call Type GetInstance(System.RuntimeType+constructor)*/
        /* IL_0C: stloc.0 */
        loc0 = asm0.x60000c3(asm0.x60000c0(arg0));
        /* IL_0F: ldloc.0 */
        /* IL_10: ret */
        return loc0;
    };;
    /* static Type GetRuntimeTypeFromHandle(System.RuntimeTypeHandle)*/
    asm.x60000c5_init = function ()
    {
        ((asm0)["System.RuntimeType+constructor"]().init)();
        asm.x60000c5 = asm.x60000c5_;
    };;
    asm.x60000c5 = function (arg0)
    {
        asm.x60000c5_init.apply(this,arguments);
        return asm.x60000c5_.apply(this,arguments);
    };;
    asm.x60000c5_ = function GetRuntimeTypeFromHandle(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.RuntimeType+constructor"]();
        /* IL_00: nop */
        /* IL_01: ldarga.s 0*/
        /* IL_03: ldfld Object value*/
        /* IL_08: call constructor UnsafeCast[System.RuntimeType+constructor](System.Object)*/
        /* IL_0D: call Type GetInstance(System.RuntimeType+constructor)*/
        /* IL_12: stloc.0 */
        loc0 = asm0.x60000c3(arg0.value);
        /* IL_15: ldloc.0 */
        /* IL_16: ret */
        return loc0;
    };
    /* Assembly get_Assembly()*/
    asm.x60000c6 = function get_Assembly(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld jsAsm Assembly*/
        /* IL_0C: call Assembly GetInstance(System.Reflection.Assembly+jsAsm)*/
        /* IL_11: stloc.0 */
        loc0 = asm0.x6000033(arg0.ctor.Assembly);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* String get_FullName()*/
    asm.x60000c7_init = function ()
    {
        ((asm0)["System.Array"]().init)();
        asm.x60000c7 = asm.x60000c7_;
    };;
    asm.x60000c7 = function (arg0)
    {
        asm.x60000c7_init.apply(this,arguments);
        return asm.x60000c7_.apply(this,arguments);
    };;
    asm.x60000c7_ = function get_FullName(arg0)
    {
        var t0;
        var st_13;
        var __pos_0__;
        var loc4;
        var loc3;
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm0)["System.Array"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldtoken System.Array*/
                /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_0C: callvirt Boolean IsSubclassOf(System.Type)*/
                /* IL_11: ldc.i4.0 */
                /* IL_13: ceq */
                /* IL_14: stloc.s 4*/
                loc4 = ((((arg0.vtable)["asm0.x60000af"]())(arg0,asm0.x60000ae(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))) === (0|0)) ? (1) : (0));
                /* IL_16: ldloc.s 4*/
                /* IL_18: brtrue.s IL_33*/
                
                if (loc4){
                    __pos_0__ = 0x33;
                    continue;
                }
                /* IL_1A: nop */
                
                /* IL_1B: ldarg.0 */
                /* IL_1C: callvirt Type GetElementType()*/
                /* IL_21: callvirt String get_FullName()*/
                /* IL_26: ldstr []*/
                /* IL_2B: call String Concat(System.String, System.String)*/
                /* IL_30: stloc.3 */
                loc3 = asm0.x6000170((((((arg0.vtable)["asm0.x60000bd"]())(arg0).vtable)["asm0.x60000ad"])())(((arg0.vtable)["asm0.x60000bd"]())(arg0)),BLR.new_string("[]"));
                /* IL_31: br.s IL_AE*/
                __pos_0__ = 0xAE;
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
                
                if ((!(((arg0.vtable)["asm0.x60000b4"]())(arg0)))){
                    __pos_0__ = 0x54;
                    continue;
                }
                /* IL_4C: ldarg.0 */
                /* IL_4D: callvirt Boolean get_IsGenericTypeDefinition()*/
                st_13 = ((arg0.vtable)["asm0.x60000b6"]())(arg0);
                /* IL_52: br.s IL_55*/
                __pos_0__ = 0x55;
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
                    __pos_0__ = 0xAA;
                    continue;
                }
                /* IL_5C: nop */
                
                /* IL_5D: ldloc.0 */
                /* IL_5E: ldstr [*/
                /* IL_63: call String Concat(System.String, System.String)*/
                /* IL_68: stloc.0 */
                loc0 = asm0.x6000170(loc0,BLR.new_string("["));
                /* IL_69: ldarg.0 */
                /* IL_6A: callvirt Type[] GetGenericArguments()*/
                /* IL_6F: stloc.1 */
                loc1 = ((arg0.vtable)["asm0.x60000b7"]())(arg0);
                /* IL_70: ldc.i4.0 */
                /* IL_71: stloc.2 */
                loc2 = (0|0);
                /* IL_72: br.s IL_91*/
                __pos_0__ = 0x91;
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
                loc0 = asm0.x6000173(loc0,BLR.new_string("["),((((loc1.jsarr)[loc2].vtable)["asm0.x60000b3"])())((loc1.jsarr)[loc2]),BLR.new_string("]"));
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
                    __pos_0__ = 0x74;
                    continue;
                }
                /* IL_9D: ldloc.0 */
                /* IL_9E: ldstr ]*/
                /* IL_A3: call String Concat(System.String, System.String)*/
                /* IL_A8: stloc.0 */
                loc0 = asm0.x6000170(loc0,BLR.new_string("]"));
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
    };
    /* String get_AssemblyQualifiedName()*/
    asm.x60000c8 = function get_AssemblyQualifiedName(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt String get_FullName()*/
        /* IL_07: ldstr , */
        /* IL_0C: ldarg.0 */
        /* IL_0D: callvirt Assembly get_Assembly()*/
        /* IL_12: callvirt String get_FullName()*/
        /* IL_17: call String Concat(System.String, System.String, System.String)*/
        /* IL_1C: stloc.0 */
        loc0 = asm0.x6000172(((arg0.vtable)["asm0.x60000ad"]())(arg0),BLR.new_string(", "),asm0.x6000034(((arg0.vtable)["asm0.x60000b1"]())(arg0)));
        /* IL_1F: ldloc.0 */
        /* IL_20: ret */
        return loc0;
    };;
    /* Boolean Equals(System.Object)*/
    asm.x60000c9_init = function ()
    {
        ((asm0)["System.RuntimeType"]().init)();
        asm.x60000c9 = asm.x60000c9_;
    };;
    asm.x60000c9 = function (arg0,arg1)
    {
        asm.x60000c9_init.apply(this,arguments);
        return asm.x60000c9_.apply(this,arguments);
    };;
    asm.x60000c9_ = function Equals(arg0,arg1)
    {
        var t0;
        var loc0;
        var loc1;
        t0 = (asm0)["System.RuntimeType"]();
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
    /* Int32 GetHashCode()*/
    asm.x60000ca_init = function ()
    {
        ((asm0)["System.Int32"]().init)();
        ((asm0)["System.Boolean"]().init)();
        asm.x60000ca = asm.x60000ca_;
    };;
    asm.x60000ca = function (arg0)
    {
        asm.x60000ca_init.apply(this,arguments);
        return asm.x60000ca_.apply(this,arguments);
    };;
    asm.x60000ca_ = function GetHashCode(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.Boolean"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x2B;
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
    };
    /* Object[] GetCustomAttributes(System.Boolean)*/
    asm.x60000cb = function GetCustomAttributes(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Array CustomAttributes*/
        /* IL_0C: call Object[] GetCustomAttributesImpl(System.Object)*/
        /* IL_11: stloc.0 */
        loc0 = asm0.x600003c(arg0.ctor.CustomAttributes);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* Object[] GetCustomAttributes(System.Type, System.Boolean)*/
    asm.x60000cc_init = function ()
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x60000cc = asm.x60000cc_;
    };;
    asm.x60000cc = function (arg0,arg1,arg2)
    {
        asm.x60000cc_init.apply(this,arguments);
        return asm.x60000cc_.apply(this,arguments);
    };;
    asm.x60000cc_ = function GetCustomAttributes(arg0,arg1,arg2)
    {
        var t0;
        t0 = (asm0)["System.NotImplementedException"]();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x60000eb,[null]);
    };
    /* Boolean IsDefined(System.Type, System.Boolean)*/
    asm.x60000cd_init = function ()
    {
        ((asm0)["System.NotImplementedException"]().init)();
        asm.x60000cd = asm.x60000cd_;
    };;
    asm.x60000cd = function (arg0,arg1,arg2)
    {
        asm.x60000cd_init.apply(this,arguments);
        return asm.x60000cd_.apply(this,arguments);
    };;
    asm.x60000cd_ = function IsDefined(arg0,arg1,arg2)
    {
        var t0;
        t0 = (asm0)["System.NotImplementedException"]();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x60000eb,[null]);
    };
    /* Boolean get_IsInterface()*/
    asm.x60000ce = function get_IsInterface(arg0)
    {
        var loc0;
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
    /* Boolean get_IsGenericType()*/
    asm.x60000cf = function get_IsGenericType(arg0)
    {
        var loc0;
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
    /* Boolean get_IsGenericTypeDefinition()*/
    asm.x60000d0_init = function ()
    {
        ((asm0)["System.RuntimeType+constructor"]().init)();
        asm.x60000d0 = asm.x60000d0_;
    };;
    asm.x60000d0 = function (arg0)
    {
        asm.x60000d0_init.apply(this,arguments);
        return asm.x60000d0_.apply(this,arguments);
    };;
    asm.x60000d0_ = function get_IsGenericTypeDefinition(arg0)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = (asm0)["System.RuntimeType+constructor"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x19;
                    continue;
                }
                /* IL_15: ldc.i4.0 */
                /* IL_16: stloc.2 */
                loc2 = (0|0);
                /* IL_17: br.s IL_6B*/
                __pos_0__ = 0x6B;
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
                loc3 = ((asm0.x600017b(BLR.new_string(loc1.FullName),BLR.new_string("Braille.Runtime.UnboundGenericParameter")) === (0|0)) ? (1) : (0));
                /* IL_60: ldloc.3 */
                /* IL_61: brtrue.s IL_67*/
                
                if (loc3){
                    __pos_0__ = 0x67;
                    continue;
                }
                /* IL_63: ldc.i4.1 */
                /* IL_64: stloc.2 */
                loc2 = (1|0);
                /* IL_65: br.s IL_6B*/
                __pos_0__ = 0x6B;
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
    /* Type MakeGenericType(System.Type[])*/
    asm.x60000d1_init = function ()
    {
        ((asm0)["System.InvalidOperationException"]().init)();
        ((asm0)["System.RuntimeType+constructor"]().init)();
        ((asm0)["System.RuntimeType"]().init)();
        asm.x60000d1 = asm.x60000d1_;
    };;
    asm.x60000d1 = function (arg0,arg1)
    {
        asm.x60000d1_init.apply(this,arguments);
        return asm.x60000d1_.apply(this,arguments);
    };;
    asm.x60000d1_ = function MakeGenericType(arg0,arg1)
    {
        var t0;
        var t1;
        var t2;
        var __pos_0__;
        var loc5;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        t0 = (asm0)["System.InvalidOperationException"]();
        t1 = (asm0)["System.RuntimeType+constructor"]();
        t2 = (asm0)["System.RuntimeType"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: callvirt Boolean get_IsGenericTypeDefinition()*/
                /* IL_07: stloc.s 5*/
                loc5 = ((arg0.vtable)["asm0.x60000b6"]())(arg0);
                /* IL_09: ldloc.s 5*/
                /* IL_0B: brtrue.s IL_13*/
                
                if (loc5){
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0D: newobj Void .ctor()*/
                /* IL_12: throw */
                throw BLR.newobj(t0,asm0.x60000f7,[null]);
                case 0x13:
                /* IL_13: ldarg.1 */
                /* IL_14: ldlen */
                /* IL_15: conv.i4 */
                /* IL_16: newarr System.RuntimeType+constructor*/
                /* IL_1B: stloc.0 */
                loc0 = BLR.new_array(t1,arg1.jsarr.length | (0|0));
                /* IL_1C: ldc.i4.0 */
                /* IL_1D: stloc.1 */
                loc1 = (0|0);
                /* IL_1E: br.s IL_34*/
                __pos_0__ = 0x34;
                continue;
                case 0x20:
                /* IL_20: ldloc.0 */
                /* IL_21: ldloc.1 */
                /* IL_22: ldarg.1 */
                /* IL_23: ldloc.1 */
                /* IL_24: ldelem.ref */
                /* IL_25: castclass System.RuntimeType*/
                /* IL_2A: ldfld constructor ctor*/
                /* IL_2F: stelem.ref */
                (loc0.jsarr)[loc1] = BLR.cast_class((arg1.jsarr)[loc1],t2).ctor;
                /* IL_30: ldloc.1 */
                /* IL_31: ldc.i4.1 */
                /* IL_32: add */
                /* IL_33: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x34:
                /* IL_34: ldloc.1 */
                /* IL_35: ldarg.1 */
                /* IL_36: ldlen */
                /* IL_37: conv.i4 */
                /* IL_39: clt */
                /* IL_3A: stloc.s 5*/
                loc5 = ((loc1 < (arg1.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_3C: ldloc.s 5*/
                /* IL_3E: brtrue.s IL_20*/
                
                if (loc5){
                    __pos_0__ = 0x20;
                    continue;
                }
                /* IL_40: ldarg.0 */
                /* IL_41: ldfld constructor ctor*/
                /* IL_46: ldfld jsAsm Assembly*/
                /* IL_4B: ldarg.0 */
                /* IL_4C: callvirt String get_FullName()*/
                /* IL_51: call Object ObjectLookup(System.Object, System.String)*/
                /* IL_56: stloc.2 */
                loc2 = (arg0.ctor.Assembly[((arg0.vtable)["asm0.x60000ad"]())(arg0).jsstr]);
                /* IL_57: ldloc.2 */
                /* IL_58: ldnull */
                /* IL_59: ldloc.0 */
                /* IL_5A: call Object Apply(System.Object, System.Object, System.Object[])*/
                /* IL_5F: stloc.3 */
                loc3 = (loc2.apply(null, loc0.jsarr));
                /* IL_60: ldloc.3 */
                /* IL_61: call constructor UnsafeCast[System.RuntimeType+constructor](System.Object)*/
                /* IL_66: call Type GetInstance(System.RuntimeType+constructor)*/
                /* IL_6B: stloc.s 4*/
                loc4 = asm0.x60000c3(loc3);
                /* IL_6F: ldloc.s 4*/
                /* IL_71: ret */
                return loc4;
            }
        }
    };
    /* Type[] GetGenericArguments()*/
    asm.x60000d2_init = function ()
    {
        ((asm0)["System.RuntimeType+constructor"]().init)();
        ((asm0)["System.Type"]().init)();
        asm.x60000d2 = asm.x60000d2_;
    };;
    asm.x60000d2 = function (arg0)
    {
        asm.x60000d2_init.apply(this,arguments);
        return asm.x60000d2_.apply(this,arguments);
    };;
    asm.x60000d2_ = function GetGenericArguments(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc4;
        var loc3;
        t0 = (asm0)["System.RuntimeType+constructor"]();
        t1 = (asm0)["System.Type"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                loc0 = (asm0.x6000129((asm0)["System.RuntimeType+constructor"]()))((arg0.ctor.GenericArguments[BLR.new_string(arg0.ctor.MetadataName).jsstr]));
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
                __pos_0__ = 0x43;
                continue;
                case 0x34:
                /* IL_34: ldloc.1 */
                /* IL_35: ldloc.2 */
                /* IL_36: ldloc.0 */
                /* IL_37: ldloc.2 */
                /* IL_38: ldelem.ref */
                /* IL_39: call Type GetInstance(System.RuntimeType+constructor)*/
                /* IL_3E: stelem.ref */
                (loc1.jsarr)[loc2] = asm0.x60000c3((loc0.jsarr)[loc2]);
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
                    __pos_0__ = 0x34;
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
    /* Type get_BaseType()*/
    asm.x60000d3_init = function ()
    {
        ((asm0)["System.Boolean"]().init)();
        asm.x60000d3 = asm.x60000d3_;
    };;
    asm.x60000d3 = function (arg0)
    {
        asm.x60000d3_init.apply(this,arguments);
        return asm.x60000d3_.apply(this,arguments);
    };;
    asm.x60000d3_ = function get_BaseType(arg0)
    {
        var t0;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Boolean"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x19;
                    continue;
                }
                /* IL_15: ldnull */
                /* IL_16: stloc.0 */
                loc0 = null;
                /* IL_17: br.s IL_2C*/
                __pos_0__ = 0x2C;
                continue;
                case 0x19:
                /* IL_19: ldarg.0 */
                /* IL_1A: ldfld constructor ctor*/
                /* IL_1F: ldfld constructor BaseType*/
                /* IL_24: call Type GetInstance(System.RuntimeType+constructor)*/
                /* IL_29: stloc.0 */
                loc0 = asm0.x60000c3(arg0.ctor.BaseType);
                case 0x2C:
                /* IL_2C: ldloc.0 */
                /* IL_2D: ret */
                return loc0;
            }
        }
    };
    /* Type[] GetInterfaces()*/
    asm.x60000d4_init = function ()
    {
        ((asm0)["System.RuntimeType+constructor"]().init)();
        ((asm0)["System.Type"]().init)();
        asm.x60000d4 = asm.x60000d4_;
    };;
    asm.x60000d4 = function (arg0)
    {
        asm.x60000d4_init.apply(this,arguments);
        return asm.x60000d4_.apply(this,arguments);
    };;
    asm.x60000d4_ = function GetInterfaces(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc4;
        var loc3;
        t0 = (asm0)["System.RuntimeType+constructor"]();
        t1 = (asm0)["System.Type"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld constructor ctor*/
                /* IL_07: ldfld Object Interfaces*/
                /* IL_0C: call constructor[] FromJsArray[System.RuntimeType+constructor](System.Object)*/
                /* IL_11: stloc.0 */
                loc0 = (asm0.x6000129((asm0)["System.RuntimeType+constructor"]()))(arg0.ctor.Interfaces);
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
                __pos_0__ = 0x2E;
                continue;
                case 0x1F:
                /* IL_1F: ldloc.1 */
                /* IL_20: ldloc.2 */
                /* IL_21: ldloc.0 */
                /* IL_22: ldloc.2 */
                /* IL_23: ldelem.ref */
                /* IL_24: call Type GetInstance(System.RuntimeType+constructor)*/
                /* IL_29: stelem.ref */
                (loc1.jsarr)[loc2] = asm0.x60000c3((loc0.jsarr)[loc2]);
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
                    __pos_0__ = 0x1F;
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
    /* Boolean IsAssignableFrom(System.Type)*/
    asm.x60000d5_init = function ()
    {
        ((asm0)["System.Object"]().init)();
        asm.x60000d5 = asm.x60000d5_;
    };;
    asm.x60000d5 = function (arg0,arg1)
    {
        asm.x60000d5_init.apply(this,arguments);
        return asm.x60000d5_.apply(this,arguments);
    };;
    asm.x60000d5_ = function IsAssignableFrom(arg0,arg1)
    {
        var t0;
        var st_1C;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Object"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0C: ldc.i4.0 */
                /* IL_0D: stloc.2 */
                loc2 = (0|0);
                /* IL_0E: br IL_9E*/
                __pos_0__ = 0x9E;
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
                    __pos_0__ = 0x25;
                    continue;
                }
                /* IL_21: ldc.i4.1 */
                /* IL_22: stloc.2 */
                loc2 = (1|0);
                /* IL_23: br.s IL_9E*/
                __pos_0__ = 0x9E;
                continue;
                case 0x25:
                /* IL_25: ldarg.1 */
                /* IL_26: ldarg.0 */
                /* IL_27: callvirt Boolean IsSubclassOf(System.Type)*/
                /* IL_2C: ldc.i4.0 */
                /* IL_2E: ceq */
                /* IL_2F: stloc.3 */
                loc3 = ((((arg1.vtable)["asm0.x60000af"]())(arg1,arg0) === (0|0)) ? (1) : (0));
                /* IL_30: ldloc.3 */
                /* IL_31: brtrue.s IL_37*/
                
                if (loc3){
                    __pos_0__ = 0x37;
                    continue;
                }
                /* IL_33: ldc.i4.1 */
                /* IL_34: stloc.2 */
                loc2 = (1|0);
                /* IL_35: br.s IL_9E*/
                __pos_0__ = 0x9E;
                continue;
                case 0x37:
                /* IL_37: ldarg.1 */
                /* IL_38: callvirt Boolean get_IsInterface()*/
                /* IL_3D: brfalse.s IL_54*/
                
                if ((!(((arg1.vtable)["asm0.x60000b5"]())(arg1)))){
                    __pos_0__ = 0x54;
                    continue;
                }
                /* IL_3F: ldarg.0 */
                /* IL_40: ldtoken System.Object*/
                /* IL_45: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_4A: callvirt Boolean Equals(System.Object)*/
                /* IL_4F: ldc.i4.0 */
                /* IL_51: ceq */
                st_1C = ((((arg0.vtable)["asm0.x6000008"]())(arg0,asm0.x60000ae(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))) === (0|0)) ? (1) : (0));
                /* IL_52: br.s IL_55*/
                __pos_0__ = 0x55;
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
                    __pos_0__ = 0x5E;
                    continue;
                }
                /* IL_5A: ldc.i4.1 */
                /* IL_5B: stloc.2 */
                loc2 = (1|0);
                /* IL_5C: br.s IL_9E*/
                __pos_0__ = 0x9E;
                continue;
                case 0x5E:
                /* IL_5E: ldarg.0 */
                /* IL_5F: callvirt Boolean get_IsInterface()*/
                /* IL_64: ldc.i4.0 */
                /* IL_66: ceq */
                /* IL_67: stloc.3 */
                loc3 = ((((arg0.vtable)["asm0.x60000b5"]())(arg0) === (0|0)) ? (1) : (0));
                /* IL_68: ldloc.3 */
                /* IL_69: brtrue.s IL_9A*/
                
                if (loc3){
                    __pos_0__ = 0x9A;
                    continue;
                }
                /* IL_6B: nop */
                
                /* IL_6C: ldarg.1 */
                /* IL_6D: callvirt Type[] GetInterfaces()*/
                /* IL_72: stloc.0 */
                loc0 = ((arg1.vtable)["asm0.x60000b8"]())(arg1);
                /* IL_73: ldc.i4.0 */
                /* IL_74: stloc.1 */
                loc1 = (0|0);
                /* IL_75: br.s IL_8F*/
                __pos_0__ = 0x8F;
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
                loc3 = ((((arg0.vtable)["asm0.x60000ba"]())(arg0,(loc0.jsarr)[loc1]) === (0|0)) ? (1) : (0));
                /* IL_84: ldloc.3 */
                /* IL_85: brtrue.s IL_8B*/
                
                if (loc3){
                    __pos_0__ = 0x8B;
                    continue;
                }
                /* IL_87: ldc.i4.1 */
                /* IL_88: stloc.2 */
                loc2 = (1|0);
                /* IL_89: br.s IL_9E*/
                __pos_0__ = 0x9E;
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
                    __pos_0__ = 0x77;
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
    };
    /* static String GetName(System.String)*/
    asm.x60000d6 = 
            function (s) {
                var idx = s.jsstr.lastIndexOf('.');
                return BLR.new_string(s.jsstr.substring(idx + 1));
            }
            ;;
    /* String get_Name()*/
    asm.x60000d7_init = function ()
    {
        ((asm0)["System.Array"]().init)();
        asm.x60000d7 = asm.x60000d7_;
    };;
    asm.x60000d7 = function (arg0)
    {
        asm.x60000d7_init.apply(this,arguments);
        return asm.x60000d7_.apply(this,arguments);
    };;
    asm.x60000d7_ = function get_Name(arg0)
    {
        var t0;
        var __pos_0__;
        var loc2;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Array"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldtoken System.Array*/
                /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_0C: callvirt Boolean IsSubclassOf(System.Type)*/
                /* IL_11: ldc.i4.0 */
                /* IL_13: ceq */
                /* IL_14: stloc.2 */
                loc2 = ((((arg0.vtable)["asm0.x60000af"]())(arg0,asm0.x60000ae(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0))) === (0|0)) ? (1) : (0));
                /* IL_15: ldloc.2 */
                /* IL_16: brtrue.s IL_31*/
                
                if (loc2){
                    __pos_0__ = 0x31;
                    continue;
                }
                /* IL_18: nop */
                
                /* IL_19: ldarg.0 */
                /* IL_1A: callvirt Type GetElementType()*/
                /* IL_1F: callvirt String get_Name()*/
                /* IL_24: ldstr []*/
                /* IL_29: call String Concat(System.String, System.String)*/
                /* IL_2E: stloc.1 */
                loc1 = asm0.x6000170((((((arg0.vtable)["asm0.x60000bd"]())(arg0).vtable)["asm0.x600003d"])())(((arg0.vtable)["asm0.x60000bd"]())(arg0)),BLR.new_string("[]"));
                /* IL_2F: br.s IL_4B*/
                __pos_0__ = 0x4B;
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
                loc1 = asm0.x60000d6(loc0);
                case 0x4B:
                /* IL_4B: ldloc.1 */
                /* IL_4C: ret */
                return loc1;
            }
        }
    };
    /* Boolean get_IsValueType()*/
    asm.x60000d8 = function get_IsValueType(arg0)
    {
        var loc0;
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
    /* Boolean get_IsPrimitive()*/
    asm.x60000d9 = function get_IsPrimitive(arg0)
    {
        var loc0;
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
    /* Type GetElementType()*/
    asm.x60000da_init = function ()
    {
        ((asm0)["System.Array"]().init)();
        ((asm0)["System.Exception"]().init)();
        asm.x60000da = asm.x60000da_;
    };;
    asm.x60000da = function (arg0)
    {
        asm.x60000da_init.apply(this,arguments);
        return asm.x60000da_.apply(this,arguments);
    };;
    asm.x60000da_ = function GetElementType(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.Array"]();
        t1 = (asm0)["System.Exception"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldtoken System.Array*/
                /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_0C: callvirt Boolean IsSubclassOf(System.Type)*/
                /* IL_11: stloc.1 */
                loc1 = ((arg0.vtable)["asm0.x60000af"]())(arg0,asm0.x60000ae(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)));
                /* IL_12: ldloc.1 */
                /* IL_13: brtrue.s IL_20*/
                
                if (loc1){
                    __pos_0__ = 0x20;
                    continue;
                }
                /* IL_15: ldstr Invalid operation*/
                /* IL_1A: newobj Void .ctor(System.String)*/
                /* IL_1F: throw */
                throw BLR.newobj(t1,asm0.x600009f,[null, BLR.new_string("Invalid operation")]);
                case 0x20:
                /* IL_20: ldarg.0 */
                /* IL_21: callvirt Type[] GetGenericArguments()*/
                /* IL_26: ldc.i4.0 */
                /* IL_27: ldelem.ref */
                /* IL_28: stloc.0 */
                loc0 = (((arg0.vtable)["asm0.x60000b7"]())(arg0).jsarr)[(0|0)];
                /* IL_2B: ldloc.0 */
                /* IL_2C: ret */
                return loc0;
            }
        }
    };
    /* MethodInfo[] GetMethods()*/
    asm.x60000db_init = function ()
    {
        ((asm0)["System.Reflection.MethodInfo"]().init)();
        ((asm0)["Braille.JavaScript.Array"]().init)();
        asm.x60000db = asm.x60000db_;
    };;
    asm.x60000db = function (arg0)
    {
        asm.x60000db_init.apply(this,arguments);
        return asm.x60000db_.apply(this,arguments);
    };;
    asm.x60000db_ = function GetMethods(arg0)
    {
        var t0;
        var t1;
        var st_03;
        var st_04;
        var st_05;
        var __pos_0__;
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
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: callvirt Type get_BaseType()*/
                /* IL_07: brtrue.s IL_11*/
                
                if (((arg0.vtable)["asm0.x60000b2"]())(arg0)){
                    __pos_0__ = 0x11;
                    continue;
                }
                /* IL_09: ldc.i4.0 */
                /* IL_0A: newarr System.Reflection.MethodInfo*/
                st_05 = BLR.new_array(t0,(0|0));
                /* IL_0F: br.s IL_1C*/
                __pos_0__ = 0x1C;
                continue;
                case 0x11:
                /* IL_11: ldarg.0 */
                st_03 = arg0;
                /* IL_12: callvirt Type get_BaseType()*/
                st_04 = ((st_03.vtable)["asm0.x60000b2"]())(st_03);
                /* IL_17: callvirt MethodInfo[] GetMethods()*/
                st_05 = ((st_04.vtable)["asm0.x60000be"]())(st_04);
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
                __pos_0__ = 0x7E;
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
                (loc4.jsarr)[loc5] = asm0.x6000040(arg0.ctor.Methods[loc5]);
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
                    __pos_0__ = 0x55;
                    continue;
                }
                /* IL_89: ldc.i4.0 */
                /* IL_8A: stloc.s 5*/
                loc5 = (0|0);
                /* IL_8C: br.s IL_A1*/
                __pos_0__ = 0xA1;
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
                (loc4.jsarr)[(loc5 + loc2) | (0|0)] = (loc0.jsarr)[loc5];
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
                    __pos_0__ = 0x8E;
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
    /* Void .ctor(System.RuntimeType+constructor)*/
    asm.x60000c1 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x60000bf(arg0);
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
    /* Void .ctor()*/
    asm.x60000dc = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Object get_Value()*/
    asm.x60000dd = function get_Value(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Object value*/
        /* IL_07: stloc.0 */
        loc0 = arg0.r().value;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* String ToString()*/
    asm.x60000de_init = function ()
    {
        ((asm0)["System.SByte"]().init)();
        asm.x60000de = asm.x60000de_;
    };;
    asm.x60000de = function (arg0)
    {
        asm.x60000de_init.apply(this,arguments);
        return asm.x60000de_.apply(this,arguments);
    };;
    asm.x60000de_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.SByte"]();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i1 */
        /* IL_03: box System.SByte*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x600009b({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* Boolean Equals(System.Object)*/
    asm.x60000df_init = function ()
    {
        ((asm0)["System.SByte"]().init)();
        asm.x60000df = asm.x60000df_;
    };;
    asm.x60000df = function (arg0,arg1)
    {
        asm.x60000df_init.apply(this,arguments);
        return asm.x60000df_.apply(this,arguments);
    };;
    asm.x60000df_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = (asm0)["System.SByte"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.SByte*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.3 */
                loc3 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc3){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldind.i1 */
                /* IL_14: stloc.0 */
                loc0 = arg0.r();
                /* IL_15: ldarg.1 */
                /* IL_16: unbox.any System.SByte*/
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
    };
    /* Int32 GetHashCode()*/
    asm.x60000e0 = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i1 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* String ToString()*/
    asm.x60000e1_init = function ()
    {
        ((asm0)["System.Single"]().init)();
        asm.x60000e1 = asm.x60000e1_;
    };;
    asm.x60000e1 = function (arg0)
    {
        asm.x60000e1_init.apply(this,arguments);
        return asm.x60000e1_.apply(this,arguments);
    };;
    asm.x60000e1_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.Single"]();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.r4 */
        /* IL_03: box System.Single*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x600009b({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* Int32 CompareTo(System.Object)*/
    asm.x60000e2 = function CompareTo(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.Single*/
        /* IL_08: call Int32 CompareTo(System.Single)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x60000e3(arg0,BLR.unbox_any(arg1,(asm0)["System.Single"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* Int32 CompareTo(System.Single)*/
    asm.x60000e3 = function CompareTo(arg0,arg1)
    {
        var __pos_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos_0__ = 0x26;
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
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos_0__ = 0x26;
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
    /* Void .ctor()*/
    asm.x60000e4 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000047(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000ea = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000eb = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x600009e(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000ec = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation not supported*/
        /* IL_06: call Void .ctor(System.String)*/
        asm0.x600009f(arg0,BLR.new_string("Operation not supported"));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    /* Void .ctor(System.String)*/
    asm.x60000ed = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        asm0.x600009f(arg0,arg1);
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000f5 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000f6 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Cannot cast from source type to destination type.*/
        /* IL_06: call Void .ctor(System.String)*/
        asm0.x600009f(arg0,BLR.new_string("Cannot cast from source type to destination type."));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000f7 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation is not valid due to the current state of the object*/
        /* IL_06: call Void .ctor(System.String)*/
        asm0.x600009f(arg0,BLR.new_string("Operation is not valid due to the current state of the object"));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    /* Void .ctor(System.Exception)*/
    asm.x60000f8 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation is not valid due to the current state of the object*/
        /* IL_06: ldarg.1 */
        /* IL_07: call Void .ctor(System.String, System.Exception)*/
        asm0.x60000a0(arg0,BLR.new_string("Operation is not valid due to the current state of the object"),arg1);
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: nop */
        /* IL_0F: ret */
        return ;
    };;
    /* Void .ctor(System.String, System.Exception)*/
    asm.x60000f9 = function _ctor(arg0,arg1,arg2)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: ldarg.2 */
        /* IL_03: call Void .ctor(System.String, System.Exception)*/
        asm0.x60000a0(arg0,arg1,arg2);
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: nop */
        /* IL_0B: ret */
        return ;
    };;
    /* Void .ctor(System.String)*/
    asm.x60000fa = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        asm0.x600009f(arg0,arg1);
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: ret */
        return ;
    };;
    /* String ToString()*/
    asm.x60000fb_init = function ()
    {
        ((asm0)["Braille.JavaScript.String"]().init)();
        asm.x60000fb = asm.x60000fb_;
    };;
    asm.x60000fb = function (arg0)
    {
        asm.x60000fb_init.apply(this,arguments);
        return asm.x60000fb_.apply(this,arguments);
    };;
    asm.x60000fb_ = function ToString(arg0)
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc6;
        var loc4;
        var loc5;
        t0 = (asm0)["Braille.JavaScript.String"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x2C;
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
                    __pos_0__ = 0x46;
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
                    __pos_0__ = 0x2C;
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
    /* Boolean Equals(System.Object)*/
    asm.x60000fc = function Equals(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i8 */
        /* IL_03: ldarg.1 */
        /* IL_04: unbox.any System.Int64*/
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = ((arg0.r() === BLR.unbox_any(arg1,(asm0)["System.Int64"]())) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    /* Int32 GetHashCode()*/
    asm.x60000fd = function GetHashCode(arg0)
    {
        var loc0;
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
    /* static Int64 op_Addition(System.Int64, System.Int64)*/
    asm.x6000100 = 
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
    asm.XInt64_Addition = asm.x6000100;
    /* static Int64 op_Subtraction(System.Int64, System.Int64)*/
    asm.x6000101 = 
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
    asm.XInt64_Subtraction = asm.x6000101;
    /* static Int64 op_BitwiseOr(System.Int64, System.Int64)*/
    asm.x6000102 = 
            function XInt64_BitwiseOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] | rhs[0], lhs[1] | rhs[1]]);
            }
            ;;
    asm.XInt64_BitwiseOr = asm.x6000102;
    /* static Int64 op_BitwiseAnd(System.Int64, System.Int64)*/
    asm.x6000103 = 
            function XInt64_BitwiseAnd(lhs, rhs) 
            {
                return new Uint32Array([lhs[0] & rhs[0], lhs[1] & rhs[1]]);
            }
            ;;
    asm.XInt64_BitwiseAnd = asm.x6000103;
    /* static Int64 op_ExclusiveOr(System.Int64, System.Int64)*/
    asm.x6000104 = 
            function XInt64_ExclusiveOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] ^ rhs[0], lhs[1] ^ rhs[1]]);
            }
            ;;
    asm.XInt64_ExclusiveOr = asm.x6000104;
    /* static Int64 op_OnesComplement(System.Int64)*/
    asm.x6000105 = 
            function XInt64_OnesComplement(a)
            {
                return new Uint32Array([~a[0], ~a[1]]);
            }
            ;;
    asm.XInt64_OnesComplement = asm.x6000105;
    /* static Int64 op_LeftShift(System.Int64, System.Int32)*/
    asm.x6000106 = 
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
    asm.XInt64_LeftShift = asm.x6000106;
    /* static Int64 op_Equality(System.Int64, System.Int64)*/
    asm.x6000107 = 
            function XInt64_Equality(lhs, rhs)
            {
                return (lhs[0] === rhs[0] && lhs[1] === rhs[1]) ? 1 : 0;
            }
            ;;
    asm.XInt64_Equality = asm.x6000107;
    /* static Int64 op_Inequality(System.Int64, System.Int64)*/
    asm.x6000108 = 
            function XInt64_Inequality(lhs, rhs)
            {
                return (lhs[0] !== rhs[0] && lhs[1] !== rhs[1]) ? 1 : 0;
            }
            ;;
    asm.XInt64_Inequality = asm.x6000108;
    /* static Int64 op_Decrement(System.Int64)*/
    asm.x6000109 = function op_Decrement(arg0)
    {
        var loc0;
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
    asm.XInt64_Decrement = asm.x6000109;
    /* static Int64 op_Increment(System.Int64)*/
    asm.x600010a = function op_Increment(arg0)
    {
        var loc0;
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
    asm.XInt64_Increment = asm.x600010a;
    /* static Int64 op_RightShift(System.Int64, System.Int32)*/
    asm.x600010b = 
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
    asm.Int64_RightShift = asm.x600010b;
    /* static Int64 op_Division(System.Int64, System.Int32)*/
    asm.x600010c = 
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
    asm.Int64_Division = asm.x600010c;
    /* static Int64 op_Modulus(System.Int64, System.Int32)*/
    asm.x600010d = 
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
    asm.Int64_Modulus = asm.x600010d;
    /* static Boolean op_GreaterThan(System.Int64, System.Int64)*/
    asm.x600010e = 
            function Int64_GreaterThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_GreaterThan(a, b);
                else
                    return bn ? 1 : 0;
            };;
    asm.Int64_GreaterThan = asm.x600010e;
    /* static Boolean op_LessThan(System.Int64, System.Int64)*/
    asm.x600010f = 
            function Int64_LessThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_LessThan(a, b);
                else
                    return an ? 1 : 0;
            };;
    asm.Int64_LessThan = asm.x600010f;
    /* static Int64 op_UnaryNegation(System.Int64)*/
    asm.x6000110 = 
            function Int64_UnaryNegation (a) {
                var complement = asm0.XInt64_Subtraction(new Uint32Array([0xffffffff, 0xffffffff]), a);
                return asm0.XInt64_Addition(complement, new Uint32Array([1, 0]));
            };;
    asm.Int64_UnaryNegation = asm.x6000110;
    /* static Boolean isNegative(System.Int64)*/
    asm.x6000111 = 
            function isNegative(n) {
                return asm0.UInt64_GreaterThan(n, [0xffffffff, 0x7fffffff]);
            };;
    asm.Int64_isNegative = asm.x6000111;
    /* Void .ctor()*/
    asm.x600011c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000047(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor(System.String)*/
    asm.x600011d = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000047(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* static Void InitializeArray(System.Array, System.RuntimeFieldHandle)*/
    asm.x600011e = 
            function (arr, handle) {
                handle.value.type();
                var data = new Int8Array(handle.value.type[handle.value.field]);
                arr.jsarr = new arr.etype.ArrayType(data.buffer);   
            }
            ;;
    /* Void .ctor()*/
    asm.x600011f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000120 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* static Void .cctor()*/
    asm.x6000121_init = function ()
    {
        ((asm0)["System.EventArgs"]().init)();
        asm.x6000121 = asm.x6000121_;
    };;
    asm.x6000121 = function ()
    {
        asm.x6000121_init.apply(this,arguments);
        return asm.x6000121_.apply(this,arguments);
    };;
    asm.x6000121_ = function _cctor()
    {
        var t0;
        
        if ((asm0)["System.EventArgs"]().FieldHasBeenInitialized){
            return;
        }
        (asm0)["System.EventArgs"]().FieldHasBeenInitialized = true;
        t0 = (asm0)["System.EventArgs"]();
        asm0.x6000121();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stsfld EventArgs Empty*/
        (t0)["Empty"] = BLR.newobj(t0,asm0.x6000120,[null]);
        /* IL_0A: ret */
        return ;
    };
    /* Void Invoke(System.Object, System.EventArgs)*/
    asm.x6000123 = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    /* Void .ctor(System.Object, System.IntPtr)*/
    asm.x6000122 = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* Boolean Invoke(T)*/
    asm.x6000125 = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    /* Void .ctor(System.Object, System.IntPtr)*/
    asm.x6000124 = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* Int32 get_Length()*/
    asm.x6000126 = function get_Length(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetLengthImpl(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x6000127(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static Int32 GetLengthImpl(System.Object)*/
    asm.x6000127 = function(o) { return o.jsarr.length; };;
    /* static Object GetValueImpl(System.Object, System.Int32)*/
    asm.x6000128 = function(o, i) { return BLR.box(o.jsarr[i], o.etype); };;
    /* static T[] FromJsArray[T](System.Object)*/
    asm.x6000129 = 
            function (T) {
                return function FromJsArray(arr) {
                    var r = new (asm0['System.Array`1'](T))();
                    r.etype = T;
                    r.jsarr = arr;
                    return r;
                };
            };;
    /* Object GetValue(System.Int32)*/
    asm.x600012a = function GetValue(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Object GetValueImpl(System.Object, System.Int32)*/
        /* IL_08: stloc.0 */
        loc0 = asm0.x6000128(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* IEnumerator GetEnumerator()*/
    asm.x600012b = function GetEnumerator(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt IEnumerator GetEnumeratorImpl()*/
        /* IL_07: stloc.0 */
        loc0 = ((arg0.vtable)["asm0.x600012c"]())(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static Void Clear[T](T[], System.Int32, System.Int32)*/
    asm.x600012d = function (T)
    {
        return function Clear(arg0,arg1,arg2)
        {
            var t0;
            var loc0;
            var __pos_0__;
            var loc1;
            var loc2;
            t0 = T;
            loc0 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldloca.s 0*/
                    /* IL_04: initobj T*/
                    loc0 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
                    /* IL_09: ldarg.1 */
                    /* IL_0A: stloc.1 */
                    loc1 = arg1;
                    /* IL_0B: br.s IL_19*/
                    __pos_0__ = 0x19;
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
                        __pos_0__ = 0xD;
                        continue;
                    }
                    /* IL_23: ret */
                    return ;
                }
            }
        };
    };;
    /* static Int32 IndexOf[T](T[], T, System.Int32, System.Int32)*/
    asm.x600012e_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Exception"]().init)();
            ((asm0)["System.Collections.IEqualityComparer"]().init)();
            asm.x600012e = asm.x600012e_;
        };
    };;
    asm.x600012e = function (T)
    {
        return function (arg0,arg1,arg2,arg3)
        {
            (asm.x600012e_init(T).apply)(this,arguments);
            return (asm.x600012e_(T).apply)(this,arguments);
        };
    };;
    asm.x600012e_ = function (T)
    {
        return function IndexOf(arg0,arg1,arg2,arg3)
        {
            var t0;
            var t1;
            var t2;
            var st_18;
            var __pos_0__;
            var loc4;
            var loc0;
            var loc1;
            var loc2;
            var loc3;
            t0 = (asm0)["System.Exception"]();
            t1 = T;
            t2 = (asm0)["System.Collections.IEqualityComparer"]();
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
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
                        __pos_0__ = 0x19;
                        continue;
                    }
                    /* IL_0E: ldstr array*/
                    /* IL_13: newobj Void .ctor(System.String)*/
                    /* IL_18: throw */
                    throw BLR.newobj(t0,asm0.x600009f,[null, BLR.new_string("array")]);
                    case 0x19:
                    /* IL_19: ldarg.3 */
                    /* IL_1A: ldc.i4.0 */
                    /* IL_1B: blt.s IL_32*/
                    
                    if (arg3 < (0|0)){
                        __pos_0__ = 0x32;
                        continue;
                    }
                    /* IL_1D: ldarg.2 */
                    /* IL_1E: ldc.i4.0 */
                    /* IL_1F: blt.s IL_32*/
                    
                    if (arg2 < (0|0)){
                        __pos_0__ = 0x32;
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
                    __pos_0__ = 0x33;
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
                        __pos_0__ = 0x40;
                        continue;
                    }
                    /* IL_3A: newobj Void .ctor()*/
                    /* IL_3F: throw */
                    throw BLR.newobj(t0,asm0.x600009e,[null]);
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
                    loc1 = asm1.GetDefaultEqualityComparer(asm0.x60000ae(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).ctor)();
                    /* IL_54: ldarg.2 */
                    /* IL_55: stloc.2 */
                    loc2 = arg2;
                    /* IL_56: br.s IL_83*/
                    __pos_0__ = 0x83;
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
                    loc4 = (((((loc1.ifacemap)[t2].x6000030)())(BLR.convert_box_to_pointer_as_needed(loc1),BLR.box((arg0.jsarr[loc2]),t1),BLR.box(arg1,t1)) === (0|0)) ? (1) : (0));
                    /* IL_76: ldloc.s 4*/
                    /* IL_78: brtrue.s IL_7E*/
                    
                    if (loc4){
                        __pos_0__ = 0x7E;
                        continue;
                    }
                    /* IL_7A: ldloc.2 */
                    /* IL_7B: stloc.3 */
                    loc3 = loc2;
                    /* IL_7C: br.s IL_91*/
                    __pos_0__ = 0x91;
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
                        __pos_0__ = 0x58;
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
    /* static Exception GetException(System.String)*/
    asm.x600012f = 
            function (classname) { 
                var t = asm1[classname]();
                return new t(); 
            };;
    /* static Void Copy[T](T[], System.Int32, T[], System.Int32, System.Int32)*/
    asm.x6000130 = function (T)
    {
        return function Copy(arg0,arg1,arg2,arg3,arg4)
        {
            var st_4F;
            var __pos_0__;
            var loc3;
            var loc0;
            var loc1;
            var loc2;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
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
                        __pos_0__ = 0x17;
                        continue;
                    }
                    /* IL_0C: ldstr System.ArgumentNullException*/
                    /* IL_11: call Exception GetException(System.String)*/
                    /* IL_16: throw */
                    throw asm0.x600012f(BLR.new_string("System.ArgumentNullException"));
                    case 0x17:
                    /* IL_17: ldarg.2 */
                    /* IL_18: ldnull */
                    /* IL_1A: ceq */
                    /* IL_1B: ldc.i4.0 */
                    /* IL_1D: ceq */
                    /* IL_1E: stloc.3 */
                    loc3 = ((((arg2 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_1F: ldloc.3 */
                    /* IL_20: brtrue.s IL_2D*/
                    
                    if (loc3){
                        __pos_0__ = 0x2D;
                        continue;
                    }
                    /* IL_22: ldstr System.ArgumentNullException*/
                    /* IL_27: call Exception GetException(System.String)*/
                    /* IL_2C: throw */
                    throw asm0.x600012f(BLR.new_string("System.ArgumentNullException"));
                    case 0x2D:
                    /* IL_2D: ldarg.1 */
                    /* IL_2E: ldc.i4.0 */
                    /* IL_30: clt */
                    /* IL_31: ldc.i4.0 */
                    /* IL_33: ceq */
                    /* IL_34: stloc.3 */
                    loc3 = ((((arg1 < (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_35: ldloc.3 */
                    /* IL_36: brtrue.s IL_43*/
                    
                    if (loc3){
                        __pos_0__ = 0x43;
                        continue;
                    }
                    /* IL_38: ldstr System.ArgumentOutOfRangeException*/
                    /* IL_3D: call Exception GetException(System.String)*/
                    /* IL_42: throw */
                    throw asm0.x600012f(BLR.new_string("System.ArgumentOutOfRangeException"));
                    case 0x43:
                    /* IL_43: ldarg.3 */
                    /* IL_44: ldc.i4.0 */
                    /* IL_46: clt */
                    /* IL_47: ldc.i4.0 */
                    /* IL_49: ceq */
                    /* IL_4A: stloc.3 */
                    loc3 = ((((arg3 < (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_4B: ldloc.3 */
                    /* IL_4C: brtrue.s IL_59*/
                    
                    if (loc3){
                        __pos_0__ = 0x59;
                        continue;
                    }
                    /* IL_4E: ldstr System.ArgumentOutOfRangeException*/
                    /* IL_53: call Exception GetException(System.String)*/
                    /* IL_58: throw */
                    throw asm0.x600012f(BLR.new_string("System.ArgumentOutOfRangeException"));
                    case 0x59:
                    /* IL_59: ldarg.1 */
                    /* IL_5A: ldarg.0 */
                    /* IL_5B: ldlen */
                    /* IL_5C: conv.i4 */
                    /* IL_5D: ldarg.s 4*/
                    /* IL_5F: sub */
                    /* IL_61: cgt */
                    /* IL_62: ldc.i4.0 */
                    /* IL_64: ceq */
                    /* IL_65: stloc.3 */
                    loc3 = ((((arg1 > (((arg0.jsarr.length | (0|0)) - arg4) | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_66: ldloc.3 */
                    /* IL_67: brtrue.s IL_74*/
                    
                    if (loc3){
                        __pos_0__ = 0x74;
                        continue;
                    }
                    /* IL_69: ldstr System.ArgumentException*/
                    /* IL_6E: call Exception GetException(System.String)*/
                    /* IL_73: throw */
                    throw asm0.x600012f(BLR.new_string("System.ArgumentException"));
                    case 0x74:
                    /* IL_74: ldarg.3 */
                    /* IL_75: ldarg.2 */
                    /* IL_76: ldlen */
                    /* IL_77: conv.i4 */
                    /* IL_78: ldarg.s 4*/
                    /* IL_7A: sub */
                    /* IL_7C: cgt */
                    /* IL_7D: ldc.i4.0 */
                    /* IL_7F: ceq */
                    /* IL_80: stloc.3 */
                    loc3 = ((((arg3 > (((arg2.jsarr.length | (0|0)) - arg4) | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_81: ldloc.3 */
                    /* IL_82: brtrue.s IL_90*/
                    
                    if (loc3){
                        __pos_0__ = 0x90;
                        continue;
                    }
                    /* IL_84: nop */
                    
                    /* IL_85: ldstr System.ArgumentException*/
                    /* IL_8A: call Exception GetException(System.String)*/
                    /* IL_8F: throw */
                    throw asm0.x600012f(BLR.new_string("System.ArgumentException"));
                    case 0x90:
                    /* IL_90: ldarg.1 */
                    /* IL_91: stloc.0 */
                    loc0 = arg1;
                    /* IL_92: ldarg.3 */
                    /* IL_93: stloc.1 */
                    loc1 = arg3;
                    /* IL_94: ldc.i4.0 */
                    /* IL_95: stloc.2 */
                    loc2 = (0|0);
                    /* IL_96: br.s IL_B4*/
                    __pos_0__ = 0xB4;
                    continue;
                    case 0x98:
                    /* IL_98: nop */
                    
                    /* IL_99: ldarg.2 */
                    /* IL_9A: ldloc.1 */
                    /* IL_9B: ldarg.0 */
                    /* IL_9C: ldloc.0 */
                    /* IL_9D: ldelem T*/
                    /* IL_A2: stelem T*/
                    (arg2.jsarr)[loc1] = (arg0.jsarr)[loc0];
                    /* IL_A7: nop */
                    
                    /* IL_A8: ldloc.0 */
                    /* IL_A9: ldc.i4.1 */
                    /* IL_AA: add */
                    /* IL_AB: stloc.0 */
                    loc0 = (loc0 + (1|0)) | (0|0);
                    /* IL_AC: ldloc.1 */
                    /* IL_AD: ldc.i4.1 */
                    /* IL_AE: add */
                    /* IL_AF: stloc.1 */
                    loc1 = (loc1 + (1|0)) | (0|0);
                    /* IL_B0: ldloc.2 */
                    /* IL_B1: ldc.i4.1 */
                    /* IL_B2: add */
                    /* IL_B3: stloc.2 */
                    loc2 = (loc2 + (1|0)) | (0|0);
                    case 0xB4:
                    /* IL_B4: ldloc.2 */
                    /* IL_B5: ldarg.s 4*/
                    /* IL_B7: bge.s IL_C1*/
                    
                    if (loc2 >= arg4){
                        __pos_0__ = 0xC1;
                        continue;
                    }
                    /* IL_B9: ldloc.0 */
                    /* IL_BA: ldarg.0 */
                    /* IL_BB: ldlen */
                    /* IL_BC: conv.i4 */
                    /* IL_BE: clt */
                    st_4F = ((loc0 < (arg0.jsarr.length | (0|0))) ? (1) : (0));
                    /* IL_BF: br.s IL_C2*/
                    __pos_0__ = 0xC2;
                    continue;
                    case 0xC1:
                    /* IL_C1: ldc.i4.0 */
                    st_4F = (0|0);
                    case 0xC2:
                    /* IL_C2: nop */
                    
                    /* IL_C3: stloc.3 */
                    loc3 = st_4F;
                    /* IL_C4: ldloc.3 */
                    /* IL_C5: brtrue.s IL_98*/
                    
                    if (loc3){
                        __pos_0__ = 0x98;
                        continue;
                    }
                    /* IL_C7: ret */
                    return ;
                }
            }
        };
    };;
    /* static Int32 GetIndex[T](T[], System.Int32, System.Int32, System.Predicate`1[T])*/
    asm.x6000131 = function (T)
    {
        return function GetIndex(arg0,arg1,arg2,arg3)
        {
            var __pos_0__;
            var loc0;
            var loc1;
            var loc3;
            var loc2;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
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
                    __pos_0__ = 0x27;
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
                        __pos_0__ = 0x22;
                        continue;
                    }
                    /* IL_1E: ldloc.1 */
                    /* IL_1F: stloc.2 */
                    loc2 = loc1;
                    /* IL_20: br.s IL_33*/
                    __pos_0__ = 0x33;
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
                        __pos_0__ = 0x9;
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
    /* static Int32 GetLastIndex[T](T[], System.Int32, System.Int32, System.Predicate`1[T])*/
    asm.x6000132 = function (T)
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
            var __pos_0__;
            var loc0;
            var loc2;
            var loc1;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.1 */
                    /* IL_02: ldarg.2 */
                    /* IL_03: add */
                    /* IL_04: stloc.0 */
                    loc0 = (arg1 + arg2) | (0|0);
                    /* IL_05: br.s IL_25*/
                    __pos_0__ = 0x25;
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
                        __pos_0__ = 0x24;
                        continue;
                    }
                    /* IL_20: ldloc.0 */
                    /* IL_21: stloc.1 */
                    loc1 = loc0;
                    /* IL_22: br.s IL_34*/
                    __pos_0__ = 0x34;
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
                        __pos_0__ = 0x7;
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
    /* static Int32 LastIndexOf[T](T[], T, System.Int32, System.Int32)*/
    asm.x6000133_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Collections.IEqualityComparer"]().init)();
            asm.x6000133 = asm.x6000133_;
        };
    };;
    asm.x6000133 = function (T)
    {
        return function (arg0,arg1,arg2,arg3)
        {
            (asm.x6000133_init(T).apply)(this,arguments);
            return (asm.x6000133_(T).apply)(this,arguments);
        };
    };;
    asm.x6000133_ = function (T)
    {
        return function LastIndexOf(arg0,arg1,arg2,arg3)
        {
            var t0;
            var t1;
            var st_1E;
            var __pos_0__;
            var loc3;
            var loc0;
            var loc1;
            var loc2;
            t0 = T;
            t1 = (asm0)["System.Collections.IEqualityComparer"]();
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
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
                        __pos_0__ = 0x17;
                        continue;
                    }
                    /* IL_0C: ldstr System.ArgumentNullException*/
                    /* IL_11: call Exception GetException(System.String)*/
                    /* IL_16: throw */
                    throw asm0.x600012f(BLR.new_string("System.ArgumentNullException"));
                    case 0x17:
                    /* IL_17: ldarg.3 */
                    /* IL_18: ldc.i4.0 */
                    /* IL_19: blt.s IL_40*/
                    
                    if (arg3 < (0|0)){
                        __pos_0__ = 0x40;
                        continue;
                    }
                    /* IL_1B: ldarg.2 */
                    /* IL_1C: ldarg.0 */
                    /* IL_1D: ldc.i4.0 */
                    /* IL_1E: callvirt Int32 GetLowerBound(System.Int32)*/
                    /* IL_23: blt.s IL_40*/
                    
                    if (arg2 < asm0.x6000140(arg0,(0|0))){
                        __pos_0__ = 0x40;
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
                        __pos_0__ = 0x40;
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
                    st_1E = ((((((((arg2 - arg3) | (0|0)) + (1|0)) | (0|0)) < asm0.x6000140(arg0,(0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_3E: br.s IL_41*/
                    __pos_0__ = 0x41;
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
                        __pos_0__ = 0x51;
                        continue;
                    }
                    /* IL_46: ldstr System.ArgumentOutOfRangeException*/
                    /* IL_4B: call Exception GetException(System.String)*/
                    /* IL_50: throw */
                    throw asm0.x600012f(BLR.new_string("System.ArgumentOutOfRangeException"));
                    case 0x51:
                    /* IL_51: ldtoken T*/
                    /* IL_56: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    /* IL_5B: call IEqualityComparer GetDefaultEqualityComparer(System.Type)*/
                    /* IL_60: stloc.0 */
                    loc0 = asm1.GetDefaultEqualityComparer(asm0.x60000ae(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).ctor)();
                    /* IL_61: ldarg.2 */
                    /* IL_62: stloc.1 */
                    loc1 = arg2;
                    /* IL_63: br.s IL_8E*/
                    __pos_0__ = 0x8E;
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
                    loc3 = (((((loc0.ifacemap)[t1].x6000030)())(BLR.convert_box_to_pointer_as_needed(loc0),BLR.box((arg0.jsarr)[loc1],t0),BLR.box(arg1,t0)) === (0|0)) ? (1) : (0));
                    /* IL_82: ldloc.3 */
                    /* IL_83: brtrue.s IL_89*/
                    
                    if (loc3){
                        __pos_0__ = 0x89;
                        continue;
                    }
                    /* IL_85: ldloc.1 */
                    /* IL_86: stloc.2 */
                    loc2 = loc1;
                    /* IL_87: br.s IL_A1*/
                    __pos_0__ = 0xA1;
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
                        __pos_0__ = 0x65;
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
    /* static Void Sort[T](T[], System.Object)*/
    asm.x6000134 =  function (T) {
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
    /* static Void Sort[T](T[], System.Int32, System.Int32)*/
    asm.x6000135_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Collections.Generic.IComparer`1"](T).init)();
            ((asm0)["System.InvalidOperationException"]().init)();
        };
    };;
    asm.x6000135 = function (T)
    {
        return function (arg0,arg1,arg2)
        {
            (asm.x6000135_init(T).apply)(this,arguments);
            return (asm.x6000135_(T).apply)(this,arguments);
        };
    };;
    asm.x6000135_ = function (T)
    {
        return function Sort(arg0,arg1,arg2)
        {
            var t0;
            var t1;
            var t2;
            var __pos_0__;
            var loc0;
            var __error_handled_1__;
            var loc1;
            t0 = T;
            t1 = (asm0)["System.Collections.Generic.IComparer`1"](T);
            t2 = (asm0)["System.InvalidOperationException"]();
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    
                    try {
                        /* IL_01: nop */
                        
                        /* IL_02: ldtoken T*/
                        /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                        /* IL_0C: call IComparer GetComparer(System.Type)*/
                        /* IL_11: call IComparer`1 UnsafeCast[System.Collections.Generic.IComparer`1[T]](System.Object)*/
                        /* IL_16: stloc.0 */
                        loc0 = asm1.GetDefaultComparer(asm0.x60000ae(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).ctor)();
                        /* IL_17: ldarg.0 */
                        /* IL_18: ldc.i4.0 */
                        /* IL_19: ldarg.2 */
                        /* IL_1A: ldloc.0 */
                        /* IL_1B: call Void Sort[T](T[], System.Int32, System.Int32, System.Collections.Generic.IComparer`1[T])*/
                        (asm0.x6000137(T))(arg0,(0|0),arg2,loc0);
                        /* IL_20: nop */
                        
                        /* IL_21: nop */
                        
                        /* IL_22: leave.s IL_32*/
                        __pos_1__ = -1;
                        __pos_0__ = 0x32;
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
                            throw BLR.newobj(t2,asm0.x60000f9,[null, BLR.new_string("Failed to sort the array. "), loc1]);
                        }
                        
                        if ((!(__error_handled_1__))){
                            throw __error__;
                        }
                    }
                    case 0x32:
                    /* IL_32: nop */
                    
                    /* IL_33: ret */
                    return ;
                }
            }
        };
    };
    /* static Void SortImpl[T](T[], System.Int32, System.Comparison`1[T])*/
    asm.x6000136 = function (T)
    {
        return function SortImpl(arg0,arg1,arg2)
        {
            var t0;
            var __pos_0__;
            var loc0;
            var loc1;
            t0 = T;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
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
                        __pos_0__ = 0x1F;
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
                    asm0.x6000139(arg0,arg1,((arg0.jsarr.length | (0|0)) - arg1) | (0|0));
                    /* IL_1D: nop */
                    
                    /* IL_1E: nop */
                    
                    case 0x1F:
                    /* IL_1F: ldarg.0 */
                    /* IL_20: ldarg.2 */
                    /* IL_21: call Object GetJsFunction(System.Delegate)*/
                    /* IL_26: call Void Sort[T](T[], System.Object)*/
                    (asm0.x6000134(T))(arg0,asm0.x6000079(arg2));
                    /* IL_2B: nop */
                    
                    /* IL_2C: ret */
                    return ;
                }
            }
        };
    };;
    /* static Void Sort[T](T[], System.Int32, System.Int32, System.Collections.Generic.IComparer`1[T])*/
    asm.x6000137_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Array+<>c__DisplayClass1`1"](T).init)();
            ((asm0)["System.NotImplementedException"]().init)();
            ((asm0)["System.Comparison`1"](T).init)();
        };
    };;
    asm.x6000137 = function (T)
    {
        return function (arg0,arg1,arg2,arg3)
        {
            (asm.x6000137_init(T).apply)(this,arguments);
            return (asm.x6000137_(T).apply)(this,arguments);
        };
    };;
    asm.x6000137_ = function (T)
    {
        return function Sort(arg0,arg1,arg2,arg3)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var __pos_0__;
            var loc0;
            var loc1;
            t0 = T;
            t1 = (asm0)["System.Array+<>c__DisplayClass1`1"](T);
            t2 = (asm0)["System.NotImplementedException"]();
            t3 = (asm0)["System.Comparison`1"](T);
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: newobj Void .ctor()*/
                    /* IL_05: stloc.0 */
                    loc0 = BLR.newobj(t1,asm0.x60001a2,[null]);
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
                        __pos_0__ = 0x1C;
                        continue;
                    }
                    /* IL_16: newobj Void .ctor()*/
                    /* IL_1B: throw */
                    throw BLR.newobj(t2,asm0.x60000eb,[null]);
                    case 0x1C:
                    /* IL_1C: ldarg.0 */
                    /* IL_1D: ldarg.2 */
                    /* IL_1E: ldloc.0 */
                    /* IL_20: ldftn Int32 <Sort>b__0(T, T)*/
                    /* IL_25: newobj Void .ctor(System.Object, System.IntPtr)*/
                    /* IL_2A: call Void SortImpl[T](T[], System.Int32, System.Comparison`1[T])*/
                    (asm0.x6000136(T))(arg0,arg2,BLR.newobj(t3,asm0.x600007f,[null, loc0, asm0.x60001a3]));
                    /* IL_2F: nop */
                    
                    /* IL_30: nop */
                    
                    /* IL_31: ret */
                    return ;
                }
            }
        };
    };
    /* static Void Combine(System.Object, System.Object)*/
    asm.x6000138 = 
            function (a, b) {
                a.jsarr = a.jsarr.concat(b);
            }
            ;;
    /* static Void Splice(System.Object, System.Int32, System.Int32)*/
    asm.x6000139 = 
            function (array, index, howMany) {
                    array.jsarr.splice(index, howMany);
            }
            ;;
    /* static Void Reverse[T](T[], System.Int32, System.Int32)*/
    asm.x600013b = function (T)
    {
        return function Reverse(arg0,arg1,arg2)
        {
            var t0;
            var st_07;
            var __pos_0__;
            var loc4;
            var loc0;
            var loc1;
            var loc2;
            var loc3;
            t0 = T;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.1 */
                    /* IL_02: brtrue.s IL_0F*/
                    
                    if (arg1){
                        __pos_0__ = 0xF;
                        continue;
                    }
                    /* IL_04: ldarg.2 */
                    /* IL_05: ldarg.0 */
                    /* IL_06: ldlen */
                    /* IL_07: conv.i4 */
                    /* IL_09: clt */
                    /* IL_0A: ldc.i4.0 */
                    /* IL_0C: ceq */
                    st_07 = ((((arg2 < (arg0.jsarr.length | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_0D: br.s IL_10*/
                    __pos_0__ = 0x10;
                    continue;
                    case 0xF:
                    /* IL_0F: ldc.i4.0 */
                    st_07 = (0|0);
                    case 0x10:
                    /* IL_10: nop */
                    
                    /* IL_11: stloc.s 4*/
                    loc4 = st_07;
                    /* IL_13: ldloc.s 4*/
                    /* IL_15: brtrue.s IL_5B*/
                    
                    if (loc4){
                        __pos_0__ = 0x5B;
                        continue;
                    }
                    /* IL_17: nop */
                    
                    /* IL_18: ldarg.2 */
                    /* IL_19: ldc.i4.2 */
                    /* IL_1A: div */
                    /* IL_1B: stloc.0 */
                    loc0 = (arg2 / (2|0)) | (0|0);
                    /* IL_1C: ldarg.1 */
                    /* IL_1D: ldarg.2 */
                    /* IL_1E: add */
                    /* IL_1F: ldc.i4.1 */
                    /* IL_20: sub */
                    /* IL_21: stloc.1 */
                    loc1 = (((arg1 + arg2) | (0|0)) - (1|0)) | (0|0);
                    /* IL_22: ldc.i4.0 */
                    /* IL_23: stloc.2 */
                    loc2 = (0|0);
                    /* IL_24: br.s IL_4E*/
                    __pos_0__ = 0x4E;
                    continue;
                    case 0x26:
                    /* IL_26: nop */
                    
                    /* IL_27: ldarg.0 */
                    /* IL_28: ldloc.2 */
                    /* IL_29: ldelem T*/
                    /* IL_2E: stloc.3 */
                    loc3 = (arg0.jsarr)[loc2];
                    /* IL_2F: ldarg.0 */
                    /* IL_30: ldloc.2 */
                    /* IL_31: ldarg.0 */
                    /* IL_32: ldloc.1 */
                    /* IL_33: ldloc.2 */
                    /* IL_34: sub */
                    /* IL_35: ldelem T*/
                    /* IL_3A: stelem T*/
                    (arg0.jsarr)[loc2] = (arg0.jsarr)[(loc1 - loc2) | (0|0)];
                    /* IL_3F: ldarg.0 */
                    /* IL_40: ldloc.1 */
                    /* IL_41: ldloc.2 */
                    /* IL_42: sub */
                    /* IL_43: ldloc.3 */
                    /* IL_44: stelem T*/
                    (arg0.jsarr)[(loc1 - loc2) | (0|0)] = loc3;
                    /* IL_49: nop */
                    
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
                    /* IL_56: brtrue.s IL_26*/
                    
                    if (loc4){
                        __pos_0__ = 0x26;
                        continue;
                    }
                    /* IL_58: nop */
                    
                    /* IL_59: br.s IL_64*/
                    __pos_0__ = 0x64;
                    continue;
                    case 0x5B:
                    /* IL_5B: nop */
                    
                    /* IL_5C: ldarg.0 */
                    /* IL_5D: call Void Reverse[T](T[])*/
                    (Array.prototype.reverse.apply(arg0.jsarr));
                    /* IL_62: nop */
                    
                    /* IL_63: nop */
                    
                    case 0x64:
                    /* IL_64: ret */
                    return ;
                }
            }
        };
    };;
    /* static Void Copy[T](T[], T[], System.Int32)*/
    asm.x600013f = function (T)
    {
        return function Copy(arg0,arg1,arg2)
        {
            var __pos_0__;
            var loc0;
            var loc1;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldc.i4.0 */
                    /* IL_02: stloc.0 */
                    loc0 = (0|0);
                    /* IL_03: br.s IL_19*/
                    __pos_0__ = 0x19;
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
                        __pos_0__ = 0x5;
                        continue;
                    }
                    /* IL_21: ret */
                    return ;
                }
            }
        };
    };;
    /* Int32 GetLowerBound(System.Int32)*/
    asm.x6000140 = function GetLowerBound(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.0 */
        /* IL_02: stloc.0 */
        loc0 = (0|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* Int32 get_Rank()*/
    asm.x6000141 = function get_Rank(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.1 */
        /* IL_02: stloc.0 */
        loc0 = (1|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* static Void Resize[T](T[]&, System.Int32)*/
    asm.x6000142_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Exception"]().init)();
            asm.x6000142 = asm.x6000142_;
        };
    };;
    asm.x6000142 = function (T)
    {
        return function (arg0,arg1)
        {
            (asm.x6000142_init(T).apply)(this,arguments);
            return (asm.x6000142_(T).apply)(this,arguments);
        };
    };;
    asm.x6000142_ = function (T)
    {
        return function Resize(arg0,arg1)
        {
            var t0;
            var t1;
            var __pos_0__;
            var loc5;
            var loc0;
            var loc1;
            var loc2;
            var loc3;
            var loc4;
            t0 = (asm0)["System.Exception"]();
            t1 = T;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
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
                        __pos_0__ = 0x19;
                        continue;
                    }
                    /* IL_0E: ldstr Argument out of range*/
                    /* IL_13: newobj Void .ctor(System.String)*/
                    /* IL_18: throw */
                    throw BLR.newobj(t0,asm0.x600009f,[null, BLR.new_string("Argument out of range")]);
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
                        __pos_0__ = 0x32;
                        continue;
                    }
                    /* IL_27: nop */
                    
                    /* IL_28: ldarg.0 */
                    /* IL_29: ldarg.1 */
                    /* IL_2A: newarr T*/
                    /* IL_2F: stind.ref */
                    arg0.w(BLR.new_array(t1,arg1));
                    /* IL_30: br.s IL_81*/
                    __pos_0__ = 0x81;
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
                        __pos_0__ = 0x48;
                        continue;
                    }
                    /* IL_46: br.s IL_81*/
                    __pos_0__ = 0x81;
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
                    __pos_0__ = 0x73;
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
                        __pos_0__ = 0x5C;
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
    };
    /* static Int32 BinarySearch[T](T[], System.Int32, System.Int32, T)*/
    asm.x6000145 = function (T)
    {
        return function BinarySearch(arg0,arg1,arg2,arg3)
        {
            var t0;
            var loc0;
            t0 = T;
            /* IL_00: nop */
            /* IL_01: ldarg.0 */
            /* IL_02: ldarg.1 */
            /* IL_03: ldarg.2 */
            /* IL_04: ldarg.3 */
            /* IL_05: ldnull */
            /* IL_06: call Int32 BinarySearch[T](T[], System.Int32, System.Int32, T, System.Collections.Generic.IComparer`1[T])*/
            /* IL_0B: stloc.0 */
            loc0 = (asm0.x6000146(T))(arg0,arg1,arg2,arg3,null);
            /* IL_0E: ldloc.0 */
            /* IL_0F: ret */
            return loc0;
        };
    };;
    /* static Int32 BinarySearch[T](T[], System.Int32, System.Int32, T, System.Collections.Generic.IComparer`1[T])*/
    asm.x6000146_init = function (T)
    {
        return function ()
        {
            ((asm0)["System.Exception"]().init)();
            ((asm0)["System.Collections.Generic.IComparer`1"](T).init)();
        };
    };;
    asm.x6000146 = function (T)
    {
        return function (arg0,arg1,arg2,arg3,arg4)
        {
            (asm.x6000146_init(T).apply)(this,arguments);
            return (asm.x6000146_(T).apply)(this,arguments);
        };
    };;
    asm.x6000146_ = function (T)
    {
        return function BinarySearch(arg0,arg1,arg2,arg3,arg4)
        {
            var t0;
            var t1;
            var t2;
            var __pos_0__;
            var loc6;
            var loc0;
            var loc1;
            var loc2;
            var __pos_1__;
            var loc3;
            var loc5;
            var __error_handled_1__;
            var loc4;
            t0 = (asm0)["System.Exception"]();
            t1 = T;
            t2 = (asm0)["System.Collections.Generic.IComparer`1"](T);
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
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
                        __pos_0__ = 0x19;
                        continue;
                    }
                    /* IL_0E: ldstr array*/
                    /* IL_13: newobj Void .ctor(System.String)*/
                    /* IL_18: throw */
                    throw BLR.newobj(t0,asm0.x600009f,[null, BLR.new_string("array")]);
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
                        __pos_0__ = 0x31;
                        continue;
                    }
                    /* IL_26: ldstr index is less than the lower bound of array.*/
                    /* IL_2B: newobj Void .ctor(System.String)*/
                    /* IL_30: throw */
                    throw BLR.newobj(t0,asm0.x600009f,[null, BLR.new_string("index is less than the lower bound of array.")]);
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
                        __pos_0__ = 0x49;
                        continue;
                    }
                    /* IL_3E: ldstr Value has to be >= 0.*/
                    /* IL_43: newobj Void .ctor(System.String)*/
                    /* IL_48: throw */
                    throw BLR.newobj(t0,asm0.x600009f,[null, BLR.new_string("Value has to be >= 0.")]);
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
                        __pos_0__ = 0x65;
                        continue;
                    }
                    /* IL_5A: ldstr index and length do not specify a valid range in array.*/
                    /* IL_5F: newobj Void .ctor(System.String)*/
                    /* IL_64: throw */
                    throw BLR.newobj(t0,asm0.x600009f,[null, BLR.new_string("index and length do not specify a valid range in array.")]);
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
                        __pos_0__ = 0x89;
                        continue;
                    }
                    /* IL_73: ldtoken T*/
                    /* IL_78: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    /* IL_7D: call IComparer GetComparer(System.Type)*/
                    /* IL_82: call IComparer`1 UnsafeCast[System.Collections.Generic.IComparer`1[T]](System.Object)*/
                    /* IL_87: starg.s 4*/
                    arg4 = asm1.GetDefaultComparer(asm0.x60000ae(BLR.new_handle((asm0)["System.RuntimeTypeHandle"](),t1)).ctor)();
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
                        __pos_1__ = 0x0;
                        
                        while (__pos_1__ >= 0){
                            
                            switch (__pos_1__){
                                case 0x0:
                                /* IL_93: nop */
                                
                                /* IL_94: br.s IL_D9*/
                                __pos_1__ = 0xD9;
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
                                loc2 = ((((arg4.ifacemap)[t2])[t1].x600002e)())(BLR.convert_box_to_pointer_as_needed(arg4),(arg0.jsarr)[loc3],arg3);
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
                                    __pos_1__ = 0xC1;
                                    continue;
                                }
                                /* IL_BC: ldloc.3 */
                                /* IL_BD: stloc.s 5*/
                                loc5 = loc3;
                                /* IL_BF: leave.s IL_100*/
                                __pos_1__ = -1;
                                __pos_0__ = 0x100;
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
                                    __pos_1__ = 0xD4;
                                    continue;
                                }
                                /* IL_CE: ldloc.3 */
                                /* IL_CF: ldc.i4.1 */
                                /* IL_D0: sub */
                                /* IL_D1: stloc.1 */
                                loc1 = (loc3 - (1|0)) | (0|0);
                                /* IL_D2: br.s IL_D8*/
                                __pos_1__ = 0xD8;
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
                                    __pos_1__ = 0x96;
                                    continue;
                                }
                                /* IL_E6: nop */
                                
                                /* IL_E7: leave.s IL_F9*/
                                __pos_1__ = -1;
                                __pos_0__ = 0xF9;
                                break;
                            }
                        }
                        break;
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
                            throw BLR.newobj(t0,asm0.x60000a0,[null, BLR.new_string("Comparer threw an exception."), loc4]);
                        }
                        
                        if ((!(__error_handled_1__))){
                            throw __error__;
                        }
                    }
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
    /* Void .ctor()*/
    asm.x6000147 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* IEnumerator`1 GetEnumerator()*/
    asm.x6000149_init = function ()
    {
        ((asm0)["System.Array`1+ArrayEnumerator"]((((arguments)[0].constructor.GenericArguments)["asm0.t2000055"])[0]).init)();
        asm.x6000149 = asm.x6000149_;
    };;
    asm.x6000149 = function (arg0)
    {
        asm.x6000149_init.apply(this,arguments);
        return asm.x6000149_.apply(this,arguments);
    };;
    asm.x6000149_ = function GetEnumerator(arg0)
    {
        var t0;
        var t1;
        var loc0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm0.t2000055"])[0];
        t1 = (asm0)["System.Array`1+ArrayEnumerator"]((((arguments)[0].constructor.GenericArguments)["asm0.t2000055"])[0]);
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: newobj Void .ctor(System.Array`1[T])*/
        /* IL_07: stloc.0 */
        loc0 = BLR.newobj(t1,asm0.x6000153,[null, arg0]);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };
    /* IEnumerator GetEnumeratorImpl()*/
    asm.x600014a = function GetEnumeratorImpl(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call IEnumerator`1 GetEnumerator()*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x6000149(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Int32 System.Collections.Generic.ICollection<T>.get_Count()*/
    asm.x600014b = function System_Collections_Generic_ICollection_T__get_Count(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 get_Length()*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x6000126(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Boolean System.Collections.Generic.ICollection<T>.get_IsReadOnly()*/
    asm.x600014c = function System_Collections_Generic_ICollection_T__get_IsReadOnly(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.1 */
        /* IL_02: stloc.0 */
        loc0 = (1|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* Void System.Collections.Generic.ICollection<T>.Add(T)*/
    asm.x600014d_init = function ()
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x600014d = asm.x600014d_;
    };;
    asm.x600014d = function (arg0,arg1)
    {
        asm.x600014d_init.apply(this,arguments);
        return asm.x600014d_.apply(this,arguments);
    };;
    asm.x600014d_ = function System_Collections_Generic_ICollection_T__Add(arg0,arg1)
    {
        var t0;
        t0 = (asm0)["System.NotSupportedException"]();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x60000ec,[null]);
    };
    /* Void System.Collections.Generic.ICollection<T>.Clear()*/
    asm.x600014e_init = function ()
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x600014e = asm.x600014e_;
    };;
    asm.x600014e = function (arg0)
    {
        asm.x600014e_init.apply(this,arguments);
        return asm.x600014e_.apply(this,arguments);
    };;
    asm.x600014e_ = function System_Collections_Generic_ICollection_T__Clear(arg0)
    {
        var t0;
        t0 = (asm0)["System.NotSupportedException"]();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x60000ec,[null]);
    };
    /* Boolean System.Collections.Generic.ICollection<T>.Contains(T)*/
    asm.x600014f_init = function ()
    {
        ((asm0)["System.Array`1"]((((arguments)[0].constructor.GenericArguments)["asm0.t2000055"])[0]).init)();
        asm.x600014f = asm.x600014f_;
    };;
    asm.x600014f = function (arg0,arg1)
    {
        asm.x600014f_init.apply(this,arguments);
        return asm.x600014f_.apply(this,arguments);
    };;
    asm.x600014f_ = function System_Collections_Generic_ICollection_T__Contains(arg0,arg1)
    {
        var t0;
        var t1;
        var loc0;
        t0 = (asm0)["System.Array`1"]((((arguments)[0].constructor.GenericArguments)["asm0.t2000055"])[0]);
        t1 = (((arguments)[0].constructor.GenericArguments)["asm0.t2000055"])[0];
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
        loc0 = (((((asm0.x600012e((((arguments)[0].constructor.GenericArguments)["asm0.t2000055"])[0]))(BLR.cast_class(arg0,t0),arg1,(0|0),asm0.x6000126(arg0)) === (-1|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
        /* IL_1D: ldloc.0 */
        /* IL_1E: ret */
        return loc0;
    };
    /* Void System.Collections.Generic.ICollection<T>.CopyTo(T[], System.Int32)*/
    asm.x6000150_init = function ()
    {
        ((asm0)["System.Array`1"]((((arguments)[0].constructor.GenericArguments)["asm0.t2000055"])[0]).init)();
        asm.x6000150 = asm.x6000150_;
    };;
    asm.x6000150 = function (arg0,arg1,arg2)
    {
        asm.x6000150_init.apply(this,arguments);
        return asm.x6000150_.apply(this,arguments);
    };;
    asm.x6000150_ = function System_Collections_Generic_ICollection_T__CopyTo(arg0,arg1,arg2)
    {
        var t0;
        var t1;
        t0 = (asm0)["System.Array`1"]((((arguments)[0].constructor.GenericArguments)["asm0.t2000055"])[0]);
        t1 = (((arguments)[0].constructor.GenericArguments)["asm0.t2000055"])[0];
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: castclass T[]*/
        /* IL_07: ldarg.1 */
        /* IL_08: ldarg.2 */
        /* IL_09: call Void Copy[T](T[], T[], System.Int32)*/
        (asm0.x600013f((((arguments)[0].constructor.GenericArguments)["asm0.t2000055"])[0]))(BLR.cast_class(arg0,t0),arg1,arg2);
        /* IL_0E: nop */
        /* IL_0F: ret */
        return ;
    };
    /* Boolean System.Collections.Generic.ICollection<T>.Remove(T)*/
    asm.x6000151_init = function ()
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x6000151 = asm.x6000151_;
    };;
    asm.x6000151 = function (arg0,arg1)
    {
        asm.x6000151_init.apply(this,arguments);
        return asm.x6000151_.apply(this,arguments);
    };;
    asm.x6000151_ = function System_Collections_Generic_ICollection_T__Remove(arg0,arg1)
    {
        var t0;
        t0 = (asm0)["System.NotSupportedException"]();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw BLR.newobj(t0,asm0.x60000ec,[null]);
    };
    /* Void .ctor()*/
    asm.x6000152 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000147(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* T get_Current()*/
    asm.x6000154 = function get_Current(arg0)
    {
        var loc0;
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
    /* Boolean MoveNext()*/
    asm.x6000155 = function MoveNext(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var loc0;
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
    /* Object System.Collections.IEnumerator.get_Current()*/
    asm.x6000156 = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        var loc0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm0.t2000056"])[0];
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call T get_Current()*/
        /* IL_07: box T*/
        /* IL_0C: stloc.0 */
        loc0 = BLR.box(asm0.x6000154(arg0),t0);
        /* IL_0F: ldloc.0 */
        /* IL_10: ret */
        return loc0;
    };;
    /* Void Reset()*/
    asm.x6000157 = function Reset(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldc.i4.m1 */
        /* IL_03: stfld Int32 index*/
        arg0.index = (-1|0);
        /* IL_08: ret */
        return ;
    };;
    /* Void Dispose()*/
    asm.x6000158 = function Dispose(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    /* Void .ctor(System.Array`1[T])*/
    asm.x6000153 = function _ctor(arg0,arg1)
    {
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
        arg0.length = asm0.x6000126(arg1);
        /* IL_22: nop */
        /* IL_23: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000159 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000047(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Boolean get_HasValue()*/
    asm.x600015c = function get_HasValue(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Boolean has_value*/
        /* IL_07: stloc.0 */
        loc0 = arg0.r().has_value;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* T get_Value()*/
    asm.x600015d_init = function ()
    {
        ((asm0)["System.InvalidOperationException"]().init)();
        asm.x600015d = asm.x600015d_;
    };;
    asm.x600015d = function (arg0)
    {
        asm.x600015d_init.apply(this,arguments);
        return asm.x600015d_.apply(this,arguments);
    };;
    asm.x600015d_ = function get_Value(arg0)
    {
        var t0;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.InvalidOperationException"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Boolean has_value*/
                /* IL_07: stloc.1 */
                loc1 = arg0.r().has_value;
                /* IL_08: ldloc.1 */
                /* IL_09: brtrue.s IL_16*/
                
                if (loc1){
                    __pos_0__ = 0x16;
                    continue;
                }
                /* IL_0B: ldstr Nullable object must have a value.*/
                /* IL_10: newobj Void .ctor(System.String)*/
                /* IL_15: throw */
                throw BLR.newobj(t0,asm0.x60000fa,[null, BLR.new_string("Nullable object must have a value.")]);
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
    /* Boolean Equals(System.Object)*/
    asm.x600015e_init = function ()
    {
        ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
        ((asm0)["System.Nullable`1"](((((arguments)[0].r)().constructor.GenericArguments)["asm0.t200005a"])[0]).init)();
        asm.x600015e = asm.x600015e_;
    };;
    asm.x600015e = function (arg0,arg1)
    {
        asm.x600015e_init.apply(this,arguments);
        return asm.x600015e_.apply(this,arguments);
    };;
    asm.x600015e_ = function Equals(arg0,arg1)
    {
        var t0;
        var t1;
        var t2;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
        t1 = ((((arguments)[0].r)().constructor.GenericArguments)["asm0.t200005a"])[0];
        t2 = (asm0)["System.Nullable`1"](((((arguments)[0].r)().constructor.GenericArguments)["asm0.t200005a"])[0]);
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x18;
                    continue;
                }
                /* IL_0C: ldarg.0 */
                /* IL_0D: ldfld Boolean has_value*/
                /* IL_12: ldc.i4.0 */
                /* IL_14: ceq */
                /* IL_15: stloc.0 */
                loc0 = ((arg0.r().has_value === (0|0)) ? (1) : (0));
                /* IL_16: br.s IL_38*/
                __pos_0__ = 0x38;
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
                    __pos_0__ = 0x29;
                    continue;
                }
                /* IL_25: ldc.i4.0 */
                /* IL_26: stloc.0 */
                loc0 = (0|0);
                /* IL_27: br.s IL_38*/
                __pos_0__ = 0x38;
                continue;
                case 0x29:
                /* IL_29: ldarg.0 */
                /* IL_2A: ldarg.1 */
                /* IL_2B: unbox.any System.Nullable`1[T]*/
                /* IL_30: call Boolean Equals(System.Nullable`1[T])*/
                /* IL_35: stloc.0 */
                loc0 = asm0.x600015f(arg0,BLR.clone_value(BLR.unbox_any(arg1,t2)));
                case 0x38:
                /* IL_38: ldloc.0 */
                /* IL_39: ret */
                return loc0;
            }
        }
    };
    /* Boolean Equals(System.Nullable`1[T])*/
    asm.x600015f = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((((arguments)[0].r)().constructor.GenericArguments)["asm0.t200005a"])[0];
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x18;
                    continue;
                }
                /* IL_14: ldc.i4.0 */
                /* IL_15: stloc.0 */
                loc0 = (0|0);
                /* IL_16: br.s IL_46*/
                __pos_0__ = 0x46;
                continue;
                case 0x18:
                /* IL_18: ldarg.0 */
                /* IL_19: ldfld Boolean has_value*/
                /* IL_1E: stloc.1 */
                loc1 = arg0.r().has_value;
                /* IL_1F: ldloc.1 */
                /* IL_20: brtrue.s IL_26*/
                
                if (loc1){
                    __pos_0__ = 0x26;
                    continue;
                }
                /* IL_22: ldc.i4.1 */
                /* IL_23: stloc.0 */
                loc0 = (1|0);
                /* IL_24: br.s IL_46*/
                __pos_0__ = 0x46;
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
    /* Int32 GetHashCode()*/
    asm.x6000160 = function GetHashCode(arg0)
    {
        var __pos_0__;
        var loc1;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Boolean has_value*/
                /* IL_07: stloc.1 */
                loc1 = arg0.r().has_value;
                /* IL_08: ldloc.1 */
                /* IL_09: brtrue.s IL_0F*/
                
                if (loc1){
                    __pos_0__ = 0xF;
                    continue;
                }
                /* IL_0B: ldc.i4.0 */
                /* IL_0C: stloc.0 */
                loc0 = (0|0);
                /* IL_0D: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0xF:
                /* IL_0F: ldarg.0 */
                /* IL_10: ldflda T value*/
                /* IL_1B: callvirt Int32 GetHashCode()*/
                /* IL_20: stloc.0 */
                loc0 = (((arg0.r().value.vtable || ((((arguments)[0].r)().constructor.GenericArguments)["asm0.t200005a"])[0].prototype.vtable)["asm0.x6000009"])())(BLR.dereference_pointer_as_needed({
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
    /* T GetValueOrDefault()*/
    asm.x6000161 = function GetValueOrDefault(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld T value*/
        /* IL_07: stloc.0 */
        loc0 = arg0.r().value;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* T GetValueOrDefault(T)*/
    asm.x6000162 = function GetValueOrDefault(arg0,arg1)
    {
        var st_02;
        var st_03;
        var __pos_0__;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Boolean has_value*/
                /* IL_07: brtrue.s IL_0C*/
                
                if (arg0.r().has_value){
                    __pos_0__ = 0xC;
                    continue;
                }
                /* IL_09: ldarg.1 */
                st_03 = arg1;
                /* IL_0A: br.s IL_12*/
                __pos_0__ = 0x12;
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
    /* String ToString()*/
    asm.x6000163_init = function ()
    {
        ((asm0)["System.String"]().init)();
        asm.x6000163 = asm.x6000163_;
    };;
    asm.x6000163 = function (arg0)
    {
        asm.x6000163_init.apply(this,arguments);
        return asm.x6000163_.apply(this,arguments);
    };;
    asm.x6000163_ = function ToString(arg0)
    {
        var t0;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = (asm0)["System.String"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_0E: ldarg.0 */
                /* IL_0F: ldflda T value*/
                /* IL_1A: callvirt String ToString()*/
                /* IL_1F: stloc.0 */
                loc0 = (((arg0.r().value.vtable || ((((arguments)[0].r)().constructor.GenericArguments)["asm0.t200005a"])[0].prototype.vtable)["asm0.x6000005"])())(BLR.dereference_pointer_as_needed({
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
                __pos_0__ = 0x2A;
                continue;
                case 0x22:
                asm0.x6000182();
                /* IL_22: ldsfld String Empty*/
                /* IL_27: stloc.0 */
                loc0 = t0.Empty;
                case 0x2A:
                /* IL_2A: ldloc.0 */
                /* IL_2B: ret */
                return loc0;
            }
        }
    };
    /* static Nullable`1 op_Implicit(T)*/
    asm.x6000164_init = function (T)
    {
        return function ()
        {
            ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
            ((asm0)["System.Nullable`1"](T).init)();
        };
    };;
    asm.x6000164 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000164_init(T).apply)(this,arguments);
            return (asm.x6000164_(T).apply)(this,arguments);
        };
    };;
    asm.x6000164_ = function (T)
    {
        return function op_Implicit(arg0)
        {
            var t0;
            var t1;
            var t2;
            var loc0;
            t0 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
            t1 = T;
            t2 = (asm0)["System.Nullable`1"](T);
            /* IL_00: nop */
            /* IL_01: ldarg.0 */
            /* IL_02: newobj Void .ctor(T)*/
            /* IL_07: stloc.0 */
            loc0 = BLR.newobj(t2,asm0.x600015b,[null, BLR.clone_value(arg0)]);
            /* IL_0A: ldloc.0 */
            /* IL_0B: ret */
            return loc0;
        };
    };
    /* static T op_Explicit(System.Nullable`1[T])*/
    asm.x6000165 = function (T)
    {
        return function op_Explicit(arg0)
        {
            var loc0;
            /* IL_00: nop */
            /* IL_01: ldarga.s 0*/
            /* IL_03: call T get_Value()*/
            /* IL_08: stloc.0 */
            loc0 = asm0.x600015d({
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
    /* static Object Box(System.Nullable`1[T])*/
    asm.x6000166 = function (T)
    {
        return function Box(arg0)
        {
            var t0;
            var __pos_0__;
            var loc1;
            var loc0;
            t0 = T;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarga.s 0*/
                    /* IL_03: ldfld Boolean has_value*/
                    /* IL_08: stloc.1 */
                    loc1 = arg0.has_value;
                    /* IL_09: ldloc.1 */
                    /* IL_0A: brtrue.s IL_10*/
                    
                    if (loc1){
                        __pos_0__ = 0x10;
                        continue;
                    }
                    /* IL_0C: ldnull */
                    /* IL_0D: stloc.0 */
                    loc0 = null;
                    /* IL_0E: br.s IL_1F*/
                    __pos_0__ = 0x1F;
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
    /* static Nullable`1 Unbox(System.Object)*/
    asm.x6000167_init = function (T)
    {
        return function ()
        {
            ((asm0)["Braille.Runtime.UnboundGenericParameter"]().init)();
            ((asm0)["System.Nullable`1"](T).init)();
        };
    };;
    asm.x6000167 = function (T)
    {
        return function (arg0)
        {
            (asm.x6000167_init(T).apply)(this,arguments);
            return (asm.x6000167_(T).apply)(this,arguments);
        };
    };;
    asm.x6000167_ = function (T)
    {
        return function Unbox(arg0)
        {
            var t0;
            var t1;
            var t2;
            var loc2;
            var __pos_0__;
            var loc1;
            var loc0;
            t0 = (asm0)["Braille.Runtime.UnboundGenericParameter"]();
            t1 = T;
            t2 = (asm0)["System.Nullable`1"](T);
            loc2 = new ((asm0)["System.Nullable`1"](T))();
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
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
                        __pos_0__ = 0x18;
                        continue;
                    }
                    /* IL_0C: ldloca.s 2*/
                    /* IL_0F: initobj System.Nullable`1[T]*/
                    loc2 = new t2();
                    /* IL_14: ldloc.2 */
                    /* IL_15: stloc.0 */
                    loc0 = loc2;
                    /* IL_16: br.s IL_26*/
                    __pos_0__ = 0x26;
                    continue;
                    case 0x18:
                    /* IL_18: ldarg.0 */
                    /* IL_19: unbox.any T*/
                    /* IL_1E: newobj Void .ctor(T)*/
                    /* IL_23: stloc.0 */
                    loc0 = BLR.newobj(t2,asm0.x600015b,[null, BLR.clone_value(BLR.unbox_any(arg0,t1))]);
                    case 0x26:
                    /* IL_26: ldloc.0 */
                    /* IL_27: ret */
                    return loc0;
                }
            }
        };
    };
    /* Void .ctor(T)*/
    asm.x600015b = function _ctor(arg0,arg1)
    {
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
    /* Void .ctor()*/
    asm.x6000168 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000047(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static Int32 GetLengthImpl(System.Object)*/
    asm.x6000169 = function(o) { return o.jsstr.length; };;
    /* static Boolean EqualsImpl(System.String, System.String)*/
    asm.x600016a = function(a, b) { return a.jsstr === b.jsstr ? 1 : 0; };;
    /* static String ConcatImpl(System.String[])*/
    asm.x600016b = function (args) { return BLR.new_string(String.prototype.concat.apply('', args.jsarr)); };;
    /* static Char GetChar(System.String, System.Int32)*/
    asm.x600016c = function (s, i) { return s.jsstr.charCodeAt(i); };;
    /* static String ReplaceImpl(System.String, System.String, System.String)*/
    asm.x600016d = function replaceAll(s, find, replace) {
                        function escapeRegExp(s2) {
                            return s2.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
                        }
                      return BLR.new_string(s.jsstr.replace(new RegExp(escapeRegExp(find.jsstr), 'g'), replace.jsstr));
                    };;
    /* Char get_Chars(System.Int32)*/
    asm.x600016e = function get_Chars(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Char GetChar(System.String, System.Int32)*/
        /* IL_08: stloc.0 */
        loc0 = asm0.x600016c(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* static String Concat(System.String, System.String)*/
    asm.x6000170_init = function ()
    {
        ((asm0)["System.String"]().init)();
        asm.x6000170 = asm.x6000170_;
    };;
    asm.x6000170 = function (arg0,arg1)
    {
        asm.x6000170_init.apply(this,arguments);
        return asm.x6000170_.apply(this,arguments);
    };;
    asm.x6000170_ = function Concat(arg0,arg1)
    {
        var t0;
        var loc1;
        var loc0;
        t0 = (asm0)["System.String"]();
        /* IL_00: nop */
        /* IL_01: ldc.i4.2 */
        /* IL_02: newarr System.String*/
        /* IL_07: stloc.1 */
        loc1 = BLR.new_array(t0,(2|0));
        /* IL_08: ldloc.1 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: ldarg.0 */
        /* IL_0B: stelem.ref */
        (loc1.jsarr)[(0|0)] = arg0;
        /* IL_0C: ldloc.1 */
        /* IL_0D: ldc.i4.1 */
        /* IL_0E: ldarg.1 */
        /* IL_0F: stelem.ref */
        (loc1.jsarr)[(1|0)] = arg1;
        /* IL_10: ldloc.1 */
        /* IL_11: call String ConcatImpl(System.String[])*/
        /* IL_16: stloc.0 */
        loc0 = asm0.x600016b(loc1);
        /* IL_19: ldloc.0 */
        /* IL_1A: ret */
        return loc0;
    };
    /* static String Concat(System.Object, System.Object, System.Object)*/
    asm.x6000171_init = function ()
    {
        ((asm0)["System.String"]().init)();
        asm.x6000171 = asm.x6000171_;
    };;
    asm.x6000171 = function (arg0,arg1,arg2)
    {
        asm.x6000171_init.apply(this,arguments);
        return asm.x6000171_.apply(this,arguments);
    };;
    asm.x6000171_ = function Concat(arg0,arg1,arg2)
    {
        var t0;
        var loc1;
        var loc0;
        t0 = (asm0)["System.String"]();
        /* IL_00: nop */
        /* IL_01: ldc.i4.3 */
        /* IL_02: newarr System.String*/
        /* IL_07: stloc.1 */
        loc1 = BLR.new_array(t0,(3|0));
        /* IL_08: ldloc.1 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: ldarg.0 */
        /* IL_0B: callvirt String ToString()*/
        /* IL_10: stelem.ref */
        (loc1.jsarr)[(0|0)] = ((arg0.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(arg0));
        /* IL_11: ldloc.1 */
        /* IL_12: ldc.i4.1 */
        /* IL_13: ldarg.1 */
        /* IL_14: callvirt String ToString()*/
        /* IL_19: stelem.ref */
        (loc1.jsarr)[(1|0)] = ((arg1.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(arg1));
        /* IL_1A: ldloc.1 */
        /* IL_1B: ldc.i4.2 */
        /* IL_1C: ldarg.2 */
        /* IL_1D: callvirt String ToString()*/
        /* IL_22: stelem.ref */
        (loc1.jsarr)[(2|0)] = ((arg2.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(arg2));
        /* IL_23: ldloc.1 */
        /* IL_24: call String ConcatImpl(System.String[])*/
        /* IL_29: stloc.0 */
        loc0 = asm0.x600016b(loc1);
        /* IL_2C: ldloc.0 */
        /* IL_2D: ret */
        return loc0;
    };
    /* static String Concat(System.String, System.String, System.String)*/
    asm.x6000172_init = function ()
    {
        ((asm0)["System.String"]().init)();
        asm.x6000172 = asm.x6000172_;
    };;
    asm.x6000172 = function (arg0,arg1,arg2)
    {
        asm.x6000172_init.apply(this,arguments);
        return asm.x6000172_.apply(this,arguments);
    };;
    asm.x6000172_ = function Concat(arg0,arg1,arg2)
    {
        var t0;
        var loc1;
        var loc0;
        t0 = (asm0)["System.String"]();
        /* IL_00: nop */
        /* IL_01: ldc.i4.3 */
        /* IL_02: newarr System.String*/
        /* IL_07: stloc.1 */
        loc1 = BLR.new_array(t0,(3|0));
        /* IL_08: ldloc.1 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: ldarg.0 */
        /* IL_0B: stelem.ref */
        (loc1.jsarr)[(0|0)] = arg0;
        /* IL_0C: ldloc.1 */
        /* IL_0D: ldc.i4.1 */
        /* IL_0E: ldarg.1 */
        /* IL_0F: stelem.ref */
        (loc1.jsarr)[(1|0)] = arg1;
        /* IL_10: ldloc.1 */
        /* IL_11: ldc.i4.2 */
        /* IL_12: ldarg.2 */
        /* IL_13: stelem.ref */
        (loc1.jsarr)[(2|0)] = arg2;
        /* IL_14: ldloc.1 */
        /* IL_15: call String ConcatImpl(System.String[])*/
        /* IL_1A: stloc.0 */
        loc0 = asm0.x600016b(loc1);
        /* IL_1D: ldloc.0 */
        /* IL_1E: ret */
        return loc0;
    };
    /* static String Concat(System.String, System.String, System.String, System.String)*/
    asm.x6000173_init = function ()
    {
        ((asm0)["System.String"]().init)();
        asm.x6000173 = asm.x6000173_;
    };;
    asm.x6000173 = function (arg0,arg1,arg2,arg3)
    {
        asm.x6000173_init.apply(this,arguments);
        return asm.x6000173_.apply(this,arguments);
    };;
    asm.x6000173_ = function Concat(arg0,arg1,arg2,arg3)
    {
        var t0;
        var loc1;
        var loc0;
        t0 = (asm0)["System.String"]();
        /* IL_00: nop */
        /* IL_01: ldc.i4.4 */
        /* IL_02: newarr System.String*/
        /* IL_07: stloc.1 */
        loc1 = BLR.new_array(t0,(4|0));
        /* IL_08: ldloc.1 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: ldarg.0 */
        /* IL_0B: stelem.ref */
        (loc1.jsarr)[(0|0)] = arg0;
        /* IL_0C: ldloc.1 */
        /* IL_0D: ldc.i4.1 */
        /* IL_0E: ldarg.1 */
        /* IL_0F: stelem.ref */
        (loc1.jsarr)[(1|0)] = arg1;
        /* IL_10: ldloc.1 */
        /* IL_11: ldc.i4.2 */
        /* IL_12: ldarg.2 */
        /* IL_13: stelem.ref */
        (loc1.jsarr)[(2|0)] = arg2;
        /* IL_14: ldloc.1 */
        /* IL_15: ldc.i4.3 */
        /* IL_16: ldarg.3 */
        /* IL_17: stelem.ref */
        (loc1.jsarr)[(3|0)] = arg3;
        /* IL_18: ldloc.1 */
        /* IL_19: call String ConcatImpl(System.String[])*/
        /* IL_1E: stloc.0 */
        loc0 = asm0.x600016b(loc1);
        /* IL_21: ldloc.0 */
        /* IL_22: ret */
        return loc0;
    };
    /* static String Concat(System.Object, System.Object)*/
    asm.x6000174_init = function ()
    {
        ((asm0)["System.String"]().init)();
        asm.x6000174 = asm.x6000174_;
    };;
    asm.x6000174 = function (arg0,arg1)
    {
        asm.x6000174_init.apply(this,arguments);
        return asm.x6000174_.apply(this,arguments);
    };;
    asm.x6000174_ = function Concat(arg0,arg1)
    {
        var t0;
        var loc1;
        var loc0;
        t0 = (asm0)["System.String"]();
        /* IL_00: nop */
        /* IL_01: ldc.i4.2 */
        /* IL_02: newarr System.String*/
        /* IL_07: stloc.1 */
        loc1 = BLR.new_array(t0,(2|0));
        /* IL_08: ldloc.1 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: ldarg.0 */
        /* IL_0B: callvirt String ToString()*/
        /* IL_10: stelem.ref */
        (loc1.jsarr)[(0|0)] = ((arg0.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(arg0));
        /* IL_11: ldloc.1 */
        /* IL_12: ldc.i4.1 */
        /* IL_13: ldarg.1 */
        /* IL_14: callvirt String ToString()*/
        /* IL_19: stelem.ref */
        (loc1.jsarr)[(1|0)] = ((arg1.vtable)["asm0.x6000005"]())(BLR.convert_box_to_pointer_as_needed(arg1));
        /* IL_1A: ldloc.1 */
        /* IL_1B: call String ConcatImpl(System.String[])*/
        /* IL_20: stloc.0 */
        loc0 = asm0.x600016b(loc1);
        /* IL_23: ldloc.0 */
        /* IL_24: ret */
        return loc0;
    };
    /* static String Concat(System.String[])*/
    asm.x6000175 = function Concat(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call String ConcatImpl(System.String[])*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x600016b(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static String Concat(System.Object[])*/
    asm.x6000176_init = function ()
    {
        ((asm0)["System.String"]().init)();
        asm.x6000176 = asm.x6000176_;
    };;
    asm.x6000176 = function (arg0)
    {
        asm.x6000176_init.apply(this,arguments);
        return asm.x6000176_.apply(this,arguments);
    };;
    asm.x6000176_ = function Concat(arg0)
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc3;
        var loc2;
        t0 = (asm0)["System.String"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                /* IL_0C: br.s IL_1F*/
                __pos_0__ = 0x1F;
                continue;
                case 0xE:
                /* IL_0E: nop */
                
                /* IL_0F: ldloc.0 */
                /* IL_10: ldloc.1 */
                /* IL_11: ldarg.0 */
                /* IL_12: ldloc.1 */
                /* IL_13: ldelem.ref */
                /* IL_14: callvirt String ToString()*/
                /* IL_19: stelem.ref */
                (loc0.jsarr)[loc1] = ((((arg0.jsarr)[loc1].vtable)["asm0.x6000005"])())(BLR.convert_box_to_pointer_as_needed((arg0.jsarr)[loc1]));
                /* IL_1A: nop */
                
                /* IL_1B: ldloc.1 */
                /* IL_1C: ldc.i4.1 */
                /* IL_1D: add */
                /* IL_1E: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x1F:
                /* IL_1F: ldloc.1 */
                /* IL_20: ldarg.0 */
                /* IL_21: ldlen */
                /* IL_22: conv.i4 */
                /* IL_24: clt */
                /* IL_25: stloc.3 */
                loc3 = ((loc1 < (arg0.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_26: ldloc.3 */
                /* IL_27: brtrue.s IL_0E*/
                
                if (loc3){
                    __pos_0__ = 0xE;
                    continue;
                }
                /* IL_29: ldloc.0 */
                /* IL_2A: call String Concat(System.String[])*/
                /* IL_2F: stloc.2 */
                loc2 = asm0.x6000175(loc0);
                /* IL_32: ldloc.2 */
                /* IL_33: ret */
                return loc2;
            }
        }
    };
    /* String Replace(System.String, System.String)*/
    asm.x6000177 = function Replace(arg0,arg1,arg2)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: ldarg.2 */
        /* IL_04: call String ReplaceImpl(System.String, System.String, System.String)*/
        /* IL_09: stloc.0 */
        loc0 = asm0.x600016d(arg0,arg1,arg2);
        /* IL_0C: ldloc.0 */
        /* IL_0D: ret */
        return loc0;
    };;
    /* Int32 get_Length()*/
    asm.x6000178 = function get_Length(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetLengthImpl(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x6000169(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* String ToString()*/
    asm.x6000179 = function ToString(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: stloc.0 */
        loc0 = arg0;
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* static Boolean op_Inequality(System.String, System.String)*/
    asm.x600017a = function op_Inequality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: ldc.i4.0 */
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = ((asm0.x600016a(arg0,arg1) === (0|0)) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    /* static Boolean op_Equality(System.String, System.String)*/
    asm.x600017b = function op_Equality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: stloc.0 */
        loc0 = asm0.x600016a(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* Boolean Equals(System.String)*/
    asm.x600017c = function Equals(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: stloc.0 */
        loc0 = asm0.x600016a(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* Boolean Equals(System.Object)*/
    asm.x600017d_init = function ()
    {
        ((asm0)["System.String"]().init)();
        asm.x600017d = asm.x600017d_;
    };;
    asm.x600017d = function (arg0,arg1)
    {
        asm.x600017d_init.apply(this,arguments);
        return asm.x600017d_.apply(this,arguments);
    };;
    asm.x600017d_ = function Equals(arg0,arg1)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.String"]();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: castclass System.String*/
        /* IL_08: call Boolean Equals(System.String)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x600017c(arg0,BLR.cast_class(arg1,t0));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* static Int32 GetHashCodeImpl(System.String)*/
    asm.x600017e = 
            function (o) {
                var str = o.jsstr;
                var length = str.length;
                var h = 0;
                for (var i = 0; i < length; i += 1)
                    h = (h << 5) - h + str.charCodeAt(i);
                return h;
            };;
    /* Int32 GetHashCode()*/
    asm.x600017f = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetHashCodeImpl(System.String)*/
        /* IL_07: stloc.0 */
        loc0 = asm0.x600017e(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static Int32 Compare(System.String, System.String)*/
    asm.x6000180 = 
            function (a, b) {
                if (a.jsstr < b.jsstr)
                    return -1;

                if (a.jsstr > b.jsstr)
                    return 1;

                return 0;
            }
            ;;
    /* Void .ctor()*/
    asm.x6000181 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void .cctor()*/
    asm.x6000182_init = function ()
    {
        ((asm0)["System.String"]().init)();
        asm.x6000182 = asm.x6000182_;
    };;
    asm.x6000182 = function ()
    {
        asm.x6000182_init.apply(this,arguments);
        return asm.x6000182_.apply(this,arguments);
    };;
    asm.x6000182_ = function _cctor()
    {
        var t0;
        
        if ((asm0)["System.String"]().FieldHasBeenInitialized){
            return;
        }
        (asm0)["System.String"]().FieldHasBeenInitialized = true;
        t0 = (asm0)["System.String"]();
        /* IL_00: ldstr */
        /* IL_05: stsfld String Empty*/
        (t0)["Empty"] = BLR.new_string("");
        /* IL_0A: ret */
        return ;
    };
    /* String get_MemberName()*/
    asm.x6000184 = function get_MemberName(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld String member_name*/
        /* IL_07: stloc.0 */
        loc0 = arg0.System_ReflectionDefaultMemberAttributemember_name;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Void .ctor(System.String)*/
    asm.x6000183 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000047(arg0);
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
    /* String ToString()*/
    asm.x6000186_init = function ()
    {
        ((asm0)["System.UInt16"]().init)();
        asm.x6000186 = asm.x6000186_;
    };;
    asm.x6000186 = function (arg0)
    {
        asm.x6000186_init.apply(this,arguments);
        return asm.x6000186_.apply(this,arguments);
    };;
    asm.x6000186_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.UInt16"]();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u2 */
        /* IL_03: box System.UInt16*/
        /* IL_08: ldc.i4.s 16*/
        /* IL_0A: call String UnsignedPrimitiveToString(System.Object, System.Int32)*/
        /* IL_0F: stloc.0 */
        loc0 = asm0.x600009c({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },(16|0));
        /* IL_12: ldloc.0 */
        /* IL_13: ret */
        return loc0;
    };
    /* Boolean Equals(System.Object)*/
    asm.x6000187_init = function ()
    {
        ((asm0)["System.UInt16"]().init)();
        asm.x6000187 = asm.x6000187_;
    };;
    asm.x6000187 = function (arg0,arg1)
    {
        asm.x6000187_init.apply(this,arguments);
        return asm.x6000187_.apply(this,arguments);
    };;
    asm.x6000187_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = (asm0)["System.UInt16"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.UInt16*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.3 */
                loc3 = ((t0.IsInst(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc3){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldind.u2 */
                /* IL_14: stloc.0 */
                loc0 = arg0.r();
                /* IL_15: ldarg.1 */
                /* IL_16: unbox.any System.UInt16*/
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
    };
    /* Int32 GetHashCode()*/
    asm.x6000188 = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u2 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* String ToString()*/
    asm.x6000189_init = function ()
    {
        ((asm0)["System.UInt32"]().init)();
        asm.x6000189 = asm.x6000189_;
    };;
    asm.x6000189 = function (arg0)
    {
        asm.x6000189_init.apply(this,arguments);
        return asm.x6000189_.apply(this,arguments);
    };;
    asm.x6000189_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.UInt32"]();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u4 */
        /* IL_03: box System.UInt32*/
        /* IL_08: ldc.i4.s 32*/
        /* IL_0A: call String UnsignedPrimitiveToString(System.Object, System.Int32)*/
        /* IL_0F: stloc.0 */
        loc0 = asm0.x600009c({
                'boxed': arg0.r(),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            },(32|0));
        /* IL_12: ldloc.0 */
        /* IL_13: ret */
        return loc0;
    };
    /* Boolean Equals(System.Object)*/
    asm.x600018a_init = function ()
    {
        ((asm0)["System.UInt32"]().init)();
        asm.x600018a = asm.x600018a_;
    };;
    asm.x600018a = function (arg0,arg1)
    {
        asm.x600018a_init.apply(this,arguments);
        return asm.x600018a_.apply(this,arguments);
    };;
    asm.x600018a_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = (asm0)["System.UInt32"]();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos_0__ = 0x23;
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
    };
    /* Int32 GetHashCode()*/
    asm.x600018b = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u4 */
        /* IL_03: stloc.0 */
        loc0 = arg0.r();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* Int32 CompareTo(System.Object)*/
    asm.x600018c = function CompareTo(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.UInt32*/
        /* IL_08: call Int32 CompareTo(System.UInt32)*/
        /* IL_0D: stloc.0 */
        loc0 = asm0.x600018d(arg0,BLR.unbox_any(arg1,(asm0)["System.UInt32"]()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* Int32 CompareTo(System.UInt32)*/
    asm.x600018d = function CompareTo(arg0,arg1)
    {
        var __pos_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos_0__ = 0x26;
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
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos_0__ = 0x26;
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
    /* String ToString()*/
    asm.x600018e = function ToString(arg0)
    {
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc5;
        var loc4;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
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
                loc2 = asm0.x6000170(BLR.new_string(loc3[0].toString()),loc2);
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
                    __pos_0__ = 0xE;
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
    /* static UInt64 op_RightShift(System.UInt64, System.Int32)*/
    asm.x6000190 = 
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
    asm.UInt64_RightShift = asm.x6000190;
    /* static UInt64 op_Division(System.UInt64, System.UInt64)*/
    asm.x6000191 = 
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
    asm.UInt64_Division = asm.x6000191;
    /* static UInt64 op_Multiply(System.UInt64, System.UInt64)*/
    asm.x6000192 = 
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
    asm.XInt64_Multiplication = asm.x6000192;
    /* static Boolean op_GreaterThanOrEqual(System.UInt64, System.UInt64)*/
    asm.x6000193 = 
            function UInt64_GreaterThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] >= b[0] ? 1: 0;
            };;
    asm.UInt64_GreaterThanOrEqual = asm.x6000193;
    /* static Boolean op_LessThanOrEqual(System.UInt64, System.UInt64)*/
    asm.x6000194 = 
            function UInt64_LessThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] <= b[0] ? 1: 0;
            };;
    asm.UInt64_LessThanOrEqual = asm.x6000194;
    /* static Boolean op_GreaterThan(System.UInt64, System.UInt64)*/
    asm.x6000195 = 
            function UInt64_GreaterThan (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] > b[0] ? 1: 0;
            };;
    asm.UInt64_GreaterThan = asm.x6000195;
    /* static Boolean op_LessThan(System.UInt64, System.UInt64)*/
    asm.x6000196 = 
            function UInt64_LessThan(a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] < b[0] ? 1: 0;
            };;
    asm.UInt64_LessThan = asm.x6000196;
    /* static UInt64 op_Modulus(System.UInt64, System.UInt64)*/
    asm.x6000197 = 
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
    asm.UInt64_Modulus = asm.x6000197;
    /* Boolean Equals(System.Object)*/
    asm.x6000198 = function Equals(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i8 */
        /* IL_03: ldarg.1 */
        /* IL_04: unbox.any System.UInt64*/
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = ((arg0.r() === BLR.unbox_any(arg1,(asm0)["System.UInt64"]())) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    /* Int32 GetHashCode()*/
    asm.x6000199 = function GetHashCode(arg0)
    {
        var loc0;
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
    /* String ToString()*/
    asm.x600019b_init = function ()
    {
        ((asm0)["System.UIntPtr"]().init)();
        asm.x600019b = asm.x600019b_;
    };;
    asm.x600019b = function (arg0)
    {
        asm.x600019b_init.apply(this,arguments);
        return asm.x600019b_.apply(this,arguments);
    };;
    asm.x600019b_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = (asm0)["System.UIntPtr"]();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldobj System.UIntPtr*/
        /* IL_07: box System.UIntPtr*/
        /* IL_0C: call String SignedPrimitiveToString(System.Object)*/
        /* IL_11: stloc.0 */
        loc0 = asm0.x600009b({
                'boxed': arg0,
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };
    /* Boolean MoveNext()*/
    asm.x600019c = function MoveNext(arg0)
    {
        var st_15;
        var st_16;
        var st_17;
        var st_18;
        var st_19;
        var st_1A;
        var __pos_0__;
        var loc1;
        var __switch_value__;
        var __jmp__;
        var loc0;
        var loc2;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldfld Int32 <>1__state*/
                /* IL_06: stloc.1 */
                loc1 = (arg0)["Braille_JavaScript_GetEnumerator_d__0<>1__state"];
                /* IL_07: ldloc.1 */
                /* IL_08: switch System.Int32[]*/
                __switch_value__ = loc1;
                
                if (__switch_value__ >= 0x2){
                    __pos_0__ = 0x15;
                    continue;
                }
                __jmp__ = [
                    0x4,
                    0x2
                ];
                __pos_0__ = (0x15 + (__jmp__)[__switch_value__]);
                continue;
                case 0x15:
                /* IL_15: br.s IL_1B*/
                __pos_0__ = 0x1B;
                continue;
                case 0x17:
                /* IL_17: br.s IL_5D*/
                __pos_0__ = 0x5D;
                continue;
                case 0x19:
                /* IL_19: br.s IL_1D*/
                __pos_0__ = 0x1D;
                continue;
                case 0x1B:
                /* IL_1B: br.s IL_8B*/
                __pos_0__ = 0x8B;
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
                __pos_0__ = 0x73;
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
                __pos_0__ = 0x8F;
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
                    __pos_0__ = 0x3A;
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
    /* Object System.Collections.Generic.IEnumerator<System.Object>.get_Current()*/
    asm.x600019d = function System_Collections_Generic_IEnumerator_System_Object__get_Current(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Object <>2__current*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["Braille_JavaScript_GetEnumerator_d__0<>2__current"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void System.Collections.IEnumerator.Reset()*/
    asm.x600019e_init = function ()
    {
        ((asm0)["System.NotSupportedException"]().init)();
        asm.x600019e = asm.x600019e_;
    };;
    asm.x600019e = function (arg0)
    {
        asm.x600019e_init.apply(this,arguments);
        return asm.x600019e_.apply(this,arguments);
    };;
    asm.x600019e_ = function System_Collections_IEnumerator_Reset(arg0)
    {
        var t0;
        t0 = (asm0)["System.NotSupportedException"]();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: throw */
        throw BLR.newobj(t0,asm0.x60000ec,[null]);
    };
    /* Void System.IDisposable.Dispose()*/
    asm.x600019f = function System_IDisposable_Dispose(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    /* Object System.Collections.IEnumerator.get_Current()*/
    asm.x60001a0 = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Object <>2__current*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["Braille_JavaScript_GetEnumerator_d__0<>2__current"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void .ctor(System.Int32)*/
    asm.x60001a1 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld Int32 <>1__state*/
        (arg0)["Braille_JavaScript_GetEnumerator_d__0<>1__state"] = arg1;
        /* IL_0D: ret */
        return ;
    };;
    /* Int32 <Sort>b__0(T, T)*/
    asm.x60001a3_init = function ()
    {
        ((asm0)["System.Collections.Generic.IComparer`1"]((((arguments)[0].constructor.GenericArguments)["asm0.t2000065"])[0]).init)();
        asm.x60001a3 = asm.x60001a3_;
    };;
    asm.x60001a3 = function (arg0,arg1,arg2)
    {
        asm.x60001a3_init.apply(this,arguments);
        return asm.x60001a3_.apply(this,arguments);
    };;
    asm.x60001a3_ = function _Sort_b__0(arg0,arg1,arg2)
    {
        var t0;
        var t1;
        var loc0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm0.t2000065"])[0];
        t1 = (asm0)["System.Collections.Generic.IComparer`1"]((((arguments)[0].constructor.GenericArguments)["asm0.t2000065"])[0]);
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld IComparer`1 comparer*/
        /* IL_06: ldarg.1 */
        /* IL_07: ldarg.2 */
        /* IL_08: callvirt Int32 Compare(T, T)*/
        /* IL_0D: stloc.0 */
        loc0 = ((((arg0.comparer.ifacemap)[t1])[t0].x600002e)())(BLR.convert_box_to_pointer_as_needed(arg0.comparer),arg1,arg2);
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* Void .ctor()*/
    asm.x60001a2 = function _ctor(arg0)
    {
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
                        asm0.x6000183,
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
                    [asm0, "x6000027", "get_Count"],
                    [asm0, "x6000028", "get_IsReadOnly"],
                    [asm0, "x6000029", "Add"],
                    [asm0, "x600002a", "Clear"],
                    [asm0, "x600002b", "Contains"],
                    [asm0, "x600002c", "CopyTo"],
                    [asm0, "x600002d", "Remove"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200000c");
            (this.GenericArguments)["asm0.t200000c"] = [T];
            BLR.declare_virtual(this,"asm0.x6000027","asm0.x6000027");
            BLR.declare_virtual(this,"asm0.x6000028","asm0.x6000028");
            BLR.declare_virtual(this,"asm0.x6000029","asm0.x6000029");
            BLR.declare_virtual(this,"asm0.x600002a","asm0.x600002a");
            BLR.declare_virtual(this,"asm0.x600002b","asm0.x600002b");
            BLR.declare_virtual(this,"asm0.x600002c","asm0.x600002c");
            BLR.declare_virtual(this,"asm0.x600002d","asm0.x600002d");
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
                    [asm0, "x600002e", "Compare"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200000d");
            (this.GenericArguments)["asm0.t200000d"] = [T];
            BLR.declare_virtual(this,"asm0.x600002e","asm0.x600002e");
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
                    [asm0, "x600002f", "Compare"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200000e");
            BLR.declare_virtual(this,"asm0.x600002f","asm0.x600002f");
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
                    [asm0, "x6000030", "Equals"],
                    [asm0, "x6000031", "GetHashCode"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200000f");
            BLR.declare_virtual(this,"asm0.x6000030","asm0.x6000030");
            BLR.declare_virtual(this,"asm0.x6000031","asm0.x6000031");
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
                    [asm0, "x6000034", "get_FullName"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000010");
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
                    [asm0, "x6000036", "GetCustomAttributes"],
                    [asm0, "x6000037", "GetCustomAttributes"],
                    [asm0, "x6000038", "IsDefined"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t2000012");
            BLR.declare_virtual(this,"asm0.x6000036","asm0.x6000036");
            BLR.declare_virtual(this,"asm0.x6000037","asm0.x6000037");
            BLR.declare_virtual(this,"asm0.x6000038","asm0.x6000038");
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
                    [asm0, "x6000039", "GetCustomAttributes"],
                    [asm0, "x600003a", "GetCustomAttributes"],
                    [asm0, "x600003b", "IsDefined"],
                    [asm0, "x600003d", "get_Name"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000013");
            BLR.declare_virtual(this,"asm0.x6000039","asm0.x6000039");
            BLR.declare_virtual(this,"asm0.x600003a","asm0.x600003a");
            BLR.declare_virtual(this,"asm0.x600003b","asm0.x600003b");
            BLR.declare_virtual(this,"asm0.x600003d","asm0.x600003d");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Reflection.ICustomAttributeProvider"]()],
                {
                    'x6000036': function (){ return asm0.x6000039;},
                    'x6000037': function (){ return asm0.x600003a;},
                    'x6000038': function (){ return asm0.x600003b;}
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
                    [asm0, "x6000041", "GetCustomAttributes"],
                    [asm0, "x6000042", "GetCustomAttributes"],
                    [asm0, "x6000043", "IsDefined"],
                    [asm0, "x6000044", "get_Name"],
                    [asm0, "x6000045", "Invoke"]
                ],(asm0)["System.Reflection.MemberInfo"](),BLR.is_inst_default(this),Array,"asm0.t2000014");
            BLR.declare_virtual(this,"asm0.x6000039","asm0.x6000041");
            BLR.declare_virtual(this,"asm0.x600003a","asm0.x6000042");
            BLR.declare_virtual(this,"asm0.x600003b","asm0.x6000043");
            BLR.declare_virtual(this,"asm0.x600003d","asm0.x6000044");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Reflection.ICustomAttributeProvider"]()],
                {
                    'x6000036': function (){ return asm0.x6000041;},
                    'x6000037': function (){ return asm0.x6000042;},
                    'x6000038': function (){ return asm0.x6000043;}
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
                        asm0.x6000054,
                        [
                            (32767|0)
                        ]
                    ]
                ],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000015");
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
                        asm0.x6000054,
                        [
                            (1|0)
                        ],
                        {
                            'Inherited': [
                                (asm0)["System.Boolean"](),
                                false
                            ]
                        }
                    ]
                ],[
                    [asm0, "x6000049", "get_AssemblyName"],
                    [asm0, "x600004a", "get_AllInternalsVisible"],
                    [asm0, "x600004b", "set_AllInternalsVisible"]
                ],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t2000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName = null;
            this.prototype.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = false;
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
                        asm0.x6000054,
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
                    [asm0, "x6000051", "get_Value"]
                ],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t2000019");
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
                        asm0.x600008b
                    ]
                ],[],(asm0)["System.Enum"](),BLR.is_inst_value_type(this),Array,"asm0.t200001a");
            this.Unmanaged = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.ForwardRef = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.InternalCall = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.Synchronized = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.NoInlining = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.PreserveSig = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            this.NoOptimization = new ((asm0)["System.Runtime.CompilerServices.MethodImplOptions"]())();
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.value__ = 0;
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
            BLR.init_type(this,asm,"System.Activator",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200001b");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
                        asm0.x6000054,
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
                    [asm0, "x6000055", "get_ValidOn"],
                    [asm0, "x6000057", "get_Inherited"],
                    [asm0, "x6000058", "set_Inherited"],
                    [asm0, "x6000059", "get_AllowMultiple"],
                    [asm0, "x600005a", "set_AllowMultiple"]
                ],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t200001c");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            (this.prototype)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = new ((asm0)["System.AttributeTargets"]())();
            (this.prototype)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = false;
            (this.prototype)["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"] = false;
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
                    [asm0, "x600005b", "ToString"],
                    [asm0, "x600005c", "Equals"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Array,"asm0.t200001d");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x600005b");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x600005c");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
                    [asm0, "x600006a", "ToString"],
                    [asm0, "x600006b", "Equals"],
                    [asm0, "x600006c", "GetHashCode"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Uint8Array,"asm0.t2000025");
            this.MinValue = 0;
            this.MaxValue = 0;
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x600006a");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x600006b");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600006c");
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
                    [asm0, "x600006d", "ToString"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Uint16Array,"asm0.t2000026");
            this.MinValue = 0;
            this.MaxValue = 0;
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x600006d");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
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
                    [asm0, "x6000074", "Equals"],
                    [asm0, "x6000077", "GetHashCode"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000027");
            BLR.declare_virtual(this,"asm0.x6000072","asm0.x6000072");
            BLR.declare_virtual(this,"asm0.x6000073","asm0.x6000073");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000074");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000077");
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
            BLR.init_type(this,asm,"System.MulticastDelegate",false,false,false,false,false,[],[],(asm0)["System.Delegate"](),BLR.is_inst_default(this),Array,"asm0.t2000028");
            BLR.declare_virtual(this,"asm0.x6000073","asm0.x600007c");
            BLR.declare_virtual(this,"asm0.x6000072","asm0.x600007d");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000074");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000077");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
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
                    [asm0, "x6000080", "Invoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm0.t2000029");
            (this.GenericArguments)["asm0.t2000029"] = [T];
            BLR.declare_virtual(this,"asm0.x6000080","asm0.x6000080");
            BLR.declare_virtual(this,"asm0.x6000073","asm0.x600007c");
            BLR.declare_virtual(this,"asm0.x6000072","asm0.x600007d");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000074");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000077");
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
            BLR.init_type(this,asm,"System.Console",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200002a");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
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
                    [asm0, "x6000084", "CompareTo"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200002b");
            (this.GenericArguments)["asm0.t200002b"] = [T];
            BLR.declare_virtual(this,"asm0.x6000084","asm0.x6000084");
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
                    [asm0, "x6000085", "CompareTo"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t200002c");
            BLR.declare_virtual(this,"asm0.x6000085","asm0.x6000085");
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
                    [asm0, "x6000086", "ToString"],
                    [asm0, "x6000087", "CompareTo"],
                    [asm0, "x6000088", "CompareTo"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Float64Array,"asm0.t200002d");
            this.Epsilon = 0;
            this.MaxValue = 0;
            this.MinValue = 0;
            this.NaN = 0;
            this.NegativeInfinity = 0;
            this.PositiveInfinity = 0;
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000086");
            BLR.declare_virtual(this,"asm0.x6000087","asm0.x6000087");
            BLR.declare_virtual(this,"asm0.x6000088","asm0.x6000088");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Double"]()), (asm0)["System.Double"]()],
                {
                    'x6000084': function (){ return asm0.x6000088;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000085': function (){ return asm0.x6000087;}
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
            BLR.init_type(this,asm,"System.Environment",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200002e");
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
                        asm0.x6000054,
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
                ],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t200002f");
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
                    [asm0, "x600008d", "Invoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm0.t2000030");
            (this.GenericArguments)["asm0.t2000030"] = [T, TResult];
            BLR.declare_virtual(this,"asm0.x600008d","asm0.x600008d");
            BLR.declare_virtual(this,"asm0.x6000073","asm0.x600007c");
            BLR.declare_virtual(this,"asm0.x6000072","asm0.x600007d");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000074");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000077");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
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
                    [asm0, "x600008e", "Clone"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t2000031");
            BLR.declare_virtual(this,"asm0.x600008e","asm0.x600008e");
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
                    [asm0, "x600008f", "Dispose"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t2000032");
            BLR.declare_virtual(this,"asm0.x600008f","asm0.x600008f");
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
                    [asm0, "x6000090", "Equals"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t2000033");
            (this.GenericArguments)["asm0.t2000033"] = [T];
            BLR.declare_virtual(this,"asm0.x6000090","asm0.x6000090");
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
                    [asm0, "x6000091", "ToString"],
                    [asm0, "x6000092", "Equals"],
                    [asm0, "x6000093", "GetHashCode"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Int16Array,"asm0.t2000034");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000091");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000092");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000093");
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
                    [asm0, "x6000094", "ToString"],
                    [asm0, "x6000096", "ToString"],
                    [asm0, "x6000097", "CompareTo"],
                    [asm0, "x6000098", "CompareTo"],
                    [asm0, "x6000099", "Equals"],
                    [asm0, "x600009a", "GetHashCode"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Int32Array,"asm0.t2000035");
            this.MaxValue = 0;
            this.MinValue = 0;
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000094");
            BLR.declare_virtual(this,"asm0.x6000097","asm0.x6000097");
            BLR.declare_virtual(this,"asm0.x6000098","asm0.x6000098");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000099");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600009a");
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Int32"]()), (asm0)["System.Int32"]()],
                {
                    'x6000084': function (){ return asm0.x6000098;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000085': function (){ return asm0.x6000097;}
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
            BLR.init_type(this,asm,"System.InternalFormatting",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000036");
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
                    [asm0, "x600009d", "ToString"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Array,"asm0.t2000037");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x600009d");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
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
                    [asm0, "x60000a1", "get_HResult"],
                    [asm0, "x60000a3", "get_Message"],
                    [asm0, "x60000a4", "set_Message"],
                    [asm0, "x60000a5", "ToString"],
                    [asm0, "x60000a6", "get_InnerException"],
                    [asm0, "x60000a7", "set_InnerException"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000038");
            BLR.declare_virtual(this,"asm0.x60000a3","asm0.x60000a3");
            BLR.declare_virtual(this,"asm0.x60000a4","asm0.x60000a4");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000a5");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            (this.prototype)["SystemException<HResult>k__BackingField"] = 0;
            (this.prototype)["SystemException<Message>k__BackingField"] = null;
            (this.prototype)["SystemException<InnerException>k__BackingField"] = null;
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
            BLR.init_type(this,asm,"System.SystemException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm0.t2000039");
            BLR.declare_virtual(this,"asm0.x60000a3","asm0.x60000a3");
            BLR.declare_virtual(this,"asm0.x60000a4","asm0.x60000a4");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000a5");
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
            BLR.init_type(this,asm,"System.NullReferenceException",false,false,false,false,false,[],[],(asm0)["System.SystemException"](),BLR.is_inst_default(this),Array,"asm0.t200003a");
            BLR.declare_virtual(this,"asm0.x60000a3","asm0.x60000a3");
            BLR.declare_virtual(this,"asm0.x60000a4","asm0.x60000a4");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000a5");
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
            BLR.init_type(this,asm,"System.ParamArrayAttribute",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t200003b");
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
                    [asm0, "x60000ac", "get_Value"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm0.t200003c");
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
                    [asm0, "x60000ad", "get_FullName"],
                    [asm0, "x60000af", "IsSubclassOf"],
                    [asm0, "x60000b0", "get_IsEnum"],
                    [asm0, "x60000b1", "get_Assembly"],
                    [asm0, "x60000b2", "get_BaseType"],
                    [asm0, "x60000b3", "get_AssemblyQualifiedName"],
                    [asm0, "x60000b4", "get_IsGenericType"],
                    [asm0, "x60000b5", "get_IsInterface"],
                    [asm0, "x60000b6", "get_IsGenericTypeDefinition"],
                    [asm0, "x60000b7", "GetGenericArguments"],
                    [asm0, "x60000b8", "GetInterfaces"],
                    [asm0, "x60000b9", "MakeGenericType"],
                    [asm0, "x60000ba", "IsAssignableFrom"],
                    [asm0, "x60000bb", "get_IsValueType"],
                    [asm0, "x60000bc", "get_IsPrimitive"],
                    [asm0, "x60000bd", "GetElementType"],
                    [asm0, "x60000be", "GetMethods"]
                ],(asm0)["System.Reflection.MemberInfo"](),BLR.is_inst_default(this),Array,"asm0.t200003d");
            BLR.declare_virtual(this,"asm0.x60000ad","asm0.x60000ad");
            BLR.declare_virtual(this,"asm0.x60000af","asm0.x60000af");
            BLR.declare_virtual(this,"asm0.x60000b1","asm0.x60000b1");
            BLR.declare_virtual(this,"asm0.x60000b2","asm0.x60000b2");
            BLR.declare_virtual(this,"asm0.x60000b3","asm0.x60000b3");
            BLR.declare_virtual(this,"asm0.x60000b4","asm0.x60000b4");
            BLR.declare_virtual(this,"asm0.x60000b5","asm0.x60000b5");
            BLR.declare_virtual(this,"asm0.x60000b6","asm0.x60000b6");
            BLR.declare_virtual(this,"asm0.x60000b7","asm0.x60000b7");
            BLR.declare_virtual(this,"asm0.x60000b8","asm0.x60000b8");
            BLR.declare_virtual(this,"asm0.x60000b9","asm0.x60000b9");
            BLR.declare_virtual(this,"asm0.x60000ba","asm0.x60000ba");
            BLR.declare_virtual(this,"asm0.x60000bb","asm0.x60000bb");
            BLR.declare_virtual(this,"asm0.x60000bc","asm0.x60000bc");
            BLR.declare_virtual(this,"asm0.x60000bd","asm0.x60000bd");
            BLR.declare_virtual(this,"asm0.x60000be","asm0.x60000be");
            BLR.declare_virtual(this,"asm0.x6000039","asm0.x6000039");
            BLR.declare_virtual(this,"asm0.x600003a","asm0.x600003a");
            BLR.declare_virtual(this,"asm0.x600003b","asm0.x600003b");
            BLR.declare_virtual(this,"asm0.x600003d","asm0.x600003d");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Reflection.ICustomAttributeProvider"]()],
                {
                    'x6000036': function (){ return asm0.x6000039;},
                    'x6000037': function (){ return asm0.x600003a;},
                    'x6000038': function (){ return asm0.x600003b;}
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
                    [asm0, "x60000c6", "get_Assembly"],
                    [asm0, "x60000c7", "get_FullName"],
                    [asm0, "x60000c8", "get_AssemblyQualifiedName"],
                    [asm0, "x60000c9", "Equals"],
                    [asm0, "x60000ca", "GetHashCode"],
                    [asm0, "x60000cb", "GetCustomAttributes"],
                    [asm0, "x60000cc", "GetCustomAttributes"],
                    [asm0, "x60000cd", "IsDefined"],
                    [asm0, "x60000ce", "get_IsInterface"],
                    [asm0, "x60000cf", "get_IsGenericType"],
                    [asm0, "x60000d0", "get_IsGenericTypeDefinition"],
                    [asm0, "x60000d1", "MakeGenericType"],
                    [asm0, "x60000d2", "GetGenericArguments"],
                    [asm0, "x60000d3", "get_BaseType"],
                    [asm0, "x60000d4", "GetInterfaces"],
                    [asm0, "x60000d5", "IsAssignableFrom"],
                    [asm0, "x60000d7", "get_Name"],
                    [asm0, "x60000d8", "get_IsValueType"],
                    [asm0, "x60000d9", "get_IsPrimitive"],
                    [asm0, "x60000da", "GetElementType"],
                    [asm0, "x60000db", "GetMethods"]
                ],(asm0)["System.Type"](),BLR.is_inst_default(this),Array,"asm0.t200003e");
            BLR.declare_virtual(this,"asm0.x60000b1","asm0.x60000c6");
            BLR.declare_virtual(this,"asm0.x60000ad","asm0.x60000c7");
            BLR.declare_virtual(this,"asm0.x60000b3","asm0.x60000c8");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x60000c9");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x60000ca");
            BLR.declare_virtual(this,"asm0.x6000039","asm0.x60000cb");
            BLR.declare_virtual(this,"asm0.x600003a","asm0.x60000cc");
            BLR.declare_virtual(this,"asm0.x600003b","asm0.x60000cd");
            BLR.declare_virtual(this,"asm0.x60000b5","asm0.x60000ce");
            BLR.declare_virtual(this,"asm0.x60000b4","asm0.x60000cf");
            BLR.declare_virtual(this,"asm0.x60000b6","asm0.x60000d0");
            BLR.declare_virtual(this,"asm0.x60000b9","asm0.x60000d1");
            BLR.declare_virtual(this,"asm0.x60000b7","asm0.x60000d2");
            BLR.declare_virtual(this,"asm0.x60000b2","asm0.x60000d3");
            BLR.declare_virtual(this,"asm0.x60000b8","asm0.x60000d4");
            BLR.declare_virtual(this,"asm0.x60000ba","asm0.x60000d5");
            BLR.declare_virtual(this,"asm0.x600003d","asm0.x60000d7");
            BLR.declare_virtual(this,"asm0.x60000bb","asm0.x60000d8");
            BLR.declare_virtual(this,"asm0.x60000bc","asm0.x60000d9");
            BLR.declare_virtual(this,"asm0.x60000bd","asm0.x60000da");
            BLR.declare_virtual(this,"asm0.x60000be","asm0.x60000db");
            BLR.declare_virtual(this,"asm0.x60000af","asm0.x60000af");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.implement_interface(
                this,
                [(asm0)["System.Reflection.ICustomAttributeProvider"]()],
                {
                    'x6000036': function (){ return asm0.x60000cb;},
                    'x6000037': function (){ return asm0.x60000cc;},
                    'x6000038': function (){ return asm0.x60000cd;}
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
            BLR.init_type(this,asm,"System.RuntimeType+constructor",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200003f");
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
                    [asm0, "x60000dd", "get_Value"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm0.t2000040");
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
                    [asm0, "x60000de", "ToString"],
                    [asm0, "x60000df", "Equals"],
                    [asm0, "x60000e0", "GetHashCode"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Int8Array,"asm0.t2000041");
            this.MinValue = 0;
            this.MaxValue = 0;
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000de");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x60000df");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x60000e0");
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
                    [asm0, "x60000e1", "ToString"],
                    [asm0, "x60000e2", "CompareTo"],
                    [asm0, "x60000e3", "CompareTo"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Float32Array,"asm0.t2000042");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000e1");
            BLR.declare_virtual(this,"asm0.x60000e2","asm0.x60000e2");
            BLR.declare_virtual(this,"asm0.x60000e3","asm0.x60000e3");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.Single"]()), (asm0)["System.Single"]()],
                {
                    'x6000084': function (){ return asm0.x60000e3;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000085': function (){ return asm0.x60000e2;}
                });
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
            BLR.init_type(this,asm,"System.Runtime.InteropServices.OutAttribute",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t2000043");
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
                    [asm0, "x60000e5", "get_Current"],
                    [asm0, "x60000e6", "MoveNext"],
                    [asm0, "x60000e7", "Reset"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t2000044");
            BLR.declare_virtual(this,"asm0.x60000e5","asm0.x60000e5");
            BLR.declare_virtual(this,"asm0.x60000e6","asm0.x60000e6");
            BLR.declare_virtual(this,"asm0.x60000e7","asm0.x60000e7");
            BLR.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                null);
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
                    [asm0, "x60000e8", "get_Current"]
                ],null,BLR.is_inst_interface(this),Array,"asm0.t2000045");
            (this.GenericArguments)["asm0.t2000045"] = [T];
            BLR.declare_virtual(this,"asm0.x60000e8","asm0.x60000e8");
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
            BLR.init_type(this,asm,"System.Diagnostics.Debugger",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000046");
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
            BLR.init_type(this,asm,"System.NotImplementedException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm0.t2000047");
            BLR.declare_virtual(this,"asm0.x60000a3","asm0.x60000a3");
            BLR.declare_virtual(this,"asm0.x60000a4","asm0.x60000a4");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000a5");
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
            BLR.init_type(this,asm,"System.NotSupportedException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm0.t2000048");
            BLR.declare_virtual(this,"asm0.x60000a3","asm0.x60000a3");
            BLR.declare_virtual(this,"asm0.x60000a4","asm0.x60000a4");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000a5");
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
            BLR.init_type(this,asm,"System.Math",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000049");
            this.PI = 0;
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
            BLR.init_type(this,asm,"System.InvalidCastException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm0.t200004a");
            BLR.declare_virtual(this,"asm0.x60000a3","asm0.x60000a3");
            BLR.declare_virtual(this,"asm0.x60000a4","asm0.x60000a4");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000a5");
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
            BLR.init_type(this,asm,"System.InvalidOperationException",false,false,false,false,false,[],[],(asm0)["System.Exception"](),BLR.is_inst_default(this),Array,"asm0.t200004b");
            BLR.declare_virtual(this,"asm0.x60000a3","asm0.x60000a3");
            BLR.declare_virtual(this,"asm0.x60000a4","asm0.x60000a4");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000a5");
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
                    [asm0, "x60000fb", "ToString"],
                    [asm0, "x60000fc", "Equals"],
                    [asm0, "x60000fd", "GetHashCode"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Array,"asm0.t200004c");
            this.MaxValue = 0;
            this.MinValue = 0;
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x60000fb");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x60000fc");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x60000fd");
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
            BLR.init_type(this,asm,"Braille.JavaScript.Number",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm0.t200004d");
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
                        asm0.x6000054,
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
                ],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t200004e");
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
                        asm0.x6000054,
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
                ],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t200004f");
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
            BLR.init_type(this,asm,"System.Runtime.CompilerServices.RuntimeHelpers",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000050");
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
            BLR.init_type(this,asm,"System.EventArgs",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000051");
            this.Empty = null;
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
                    [asm0, "x6000123", "Invoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm0.t2000052");
            BLR.declare_virtual(this,"asm0.x6000123","asm0.x6000123");
            BLR.declare_virtual(this,"asm0.x6000073","asm0.x600007c");
            BLR.declare_virtual(this,"asm0.x6000072","asm0.x600007d");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000074");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000077");
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
                    [asm0, "x6000125", "Invoke"]
                ],(asm0)["System.MulticastDelegate"](),BLR.is_inst_default(this),Array,"asm0.t2000053");
            (this.GenericArguments)["asm0.t2000053"] = [T];
            BLR.declare_virtual(this,"asm0.x6000125","asm0.x6000125");
            BLR.declare_virtual(this,"asm0.x6000073","asm0.x600007c");
            BLR.declare_virtual(this,"asm0.x6000072","asm0.x600007d");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000074");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000077");
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
                    [asm0, "x6000126", "get_Length"],
                    [asm0, "x600012a", "GetValue"],
                    [asm0, "x600012b", "GetEnumerator"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000054");
            BLR.declare_virtual(this,"asm0.x600012b","asm0.x600012b");
            BLR.declare_virtual(this,"asm0.x600012c","asm0.x600012c");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                {
                    'x600000d': function (){ return asm0.x600012b;}
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
                    [asm0, "x6000149", "GetEnumerator"]
                ],(asm0)["System.Array"](),BLR.is_inst_array(T),Array,"asm0.t2000055");
            (this.GenericArguments)["asm0.t2000055"] = [T];
            BLR.declare_virtual(this,"asm0.x6000149","asm0.x6000149");
            BLR.declare_virtual(this,"asm0.x600012c","asm0.x600014a");
            BLR.declare_virtual(this,"asm0.x600014b","asm0.x600014b");
            BLR.declare_virtual(this,"asm0.x600014c","asm0.x600014c");
            BLR.declare_virtual(this,"asm0.x600014d","asm0.x600014d");
            BLR.declare_virtual(this,"asm0.x600014e","asm0.x600014e");
            BLR.declare_virtual(this,"asm0.x600014f","asm0.x600014f");
            BLR.declare_virtual(this,"asm0.x6000150","asm0.x6000150");
            BLR.declare_virtual(this,"asm0.x6000151","asm0.x6000151");
            BLR.declare_virtual(this,"asm0.x600012b","asm0.x600012b");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.ICollection`1"](T), T],
                {
                    'x6000027': function (){ return asm0.x600014b;},
                    'x6000028': function (){ return asm0.x600014c;},
                    'x6000029': function (){ return asm0.x600014d;},
                    'x600002a': function (){ return asm0.x600014e;},
                    'x600002b': function (){ return asm0.x600014f;},
                    'x600002c': function (){ return asm0.x6000150;},
                    'x600002d': function (){ return asm0.x6000151;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerable`1"](T), T],
                {
                    'x600000e': function (){ return asm0.x6000149;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerable"]()],
                {
                    'x600000d': function (){ return asm0.x600012b;}
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
                    [asm0, "x6000154", "get_Current"],
                    [asm0, "x6000155", "MoveNext"],
                    [asm0, "x6000157", "Reset"],
                    [asm0, "x6000158", "Dispose"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000056");
            (this.GenericArguments)["asm0.t2000056"] = [T];
            BLR.declare_virtual(this,"asm0.x6000154","asm0.x6000154");
            BLR.declare_virtual(this,"asm0.x6000155","asm0.x6000155");
            BLR.declare_virtual(this,"asm0.x6000156","asm0.x6000156");
            BLR.declare_virtual(this,"asm0.x6000157","asm0.x6000157");
            BLR.declare_virtual(this,"asm0.x6000158","asm0.x6000158");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerator`1"](T), T],
                {
                    'x60000e8': function (){ return asm0.x6000154;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                {
                    'x60000e5': function (){ return asm0.x6000156;},
                    'x60000e6': function (){ return asm0.x6000155;},
                    'x60000e7': function (){ return asm0.x6000157;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x600008f': function (){ return asm0.x6000158;}
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
                        asm0.x6000054,
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
                ],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t2000057");
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
                        asm0.x600008b
                    ]
                ],[],(asm0)["System.Enum"](),BLR.is_inst_value_type(this),Array,"asm0.t2000058");
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
                        asm0.x6000159
                    ]
                ],[
                    [asm0, "x600015c", "get_HasValue"],
                    [asm0, "x600015d", "get_Value"],
                    [asm0, "x600015e", "Equals"],
                    [asm0, "x6000160", "GetHashCode"],
                    [asm0, "x6000161", "GetValueOrDefault"],
                    [asm0, "x6000162", "GetValueOrDefault"],
                    [asm0, "x6000163", "ToString"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm0.t200005a");
            (this.GenericArguments)["asm0.t200005a"] = [T];
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x600015e");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000160");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000163");
            this.prototype.value = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            this.prototype.has_value = false;
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
                        asm0.x6000054,
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
                ],[],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t200005b");
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
                        asm0.x6000183,
                        [
                            BLR.new_string("Chars")
                        ]
                    ]
                ],[
                    [asm0, "x600016e", "get_Chars"],
                    [asm0, "x6000177", "Replace"],
                    [asm0, "x6000178", "get_Length"],
                    [asm0, "x6000179", "ToString"],
                    [asm0, "x600017c", "Equals"],
                    [asm0, "x600017d", "Equals"],
                    [asm0, "x600017f", "GetHashCode"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t200005c");
            this.Empty = null;
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000179");
            BLR.declare_virtual(this,"asm0.x600017c","asm0.x600017c");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x600017d");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600017f");
            BLR.implement_interface(
                this,
                [(asm0)["System.IEquatable`1"]((asm0)["System.String"]()), (asm0)["System.String"]()],
                {
                    'x6000090': function (){ return asm0.x600017c;}
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
                        asm0.x6000054,
                        [
                            (1036|0)
                        ]
                    ]
                ],[
                    [asm0, "x6000184", "get_MemberName"]
                ],(asm0)["System.Attribute"](),BLR.is_inst_default(this),Array,"asm0.t200005d");
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
                    [asm0, "x6000186", "ToString"],
                    [asm0, "x6000187", "Equals"],
                    [asm0, "x6000188", "GetHashCode"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Uint16Array,"asm0.t200005f");
            this.MaxValue = 0;
            this.MinValue = 0;
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000186");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000187");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000188");
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
                    [asm0, "x6000189", "ToString"],
                    [asm0, "x600018a", "Equals"],
                    [asm0, "x600018b", "GetHashCode"],
                    [asm0, "x600018c", "CompareTo"],
                    [asm0, "x600018d", "CompareTo"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Uint32Array,"asm0.t2000060");
            this.MaxValue = 0;
            this.MinValue = 0;
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000189");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x600018a");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x600018b");
            BLR.declare_virtual(this,"asm0.x600018c","asm0.x600018c");
            BLR.declare_virtual(this,"asm0.x600018d","asm0.x600018d");
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable`1"]((asm0)["System.UInt32"]()), (asm0)["System.UInt32"]()],
                {
                    'x6000084': function (){ return asm0.x600018d;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IComparable"]()],
                {
                    'x6000085': function (){ return asm0.x600018c;}
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
                    [asm0, "x600018e", "ToString"],
                    [asm0, "x6000198", "Equals"],
                    [asm0, "x6000199", "GetHashCode"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Array,"asm0.t2000061");
            this.MinValue = 0;
            this.MaxValue = 0;
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x600018e");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000198");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000199");
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
                    [asm0, "x600019b", "ToString"]
                ],(asm0)["System.ValueType"](),BLR.is_inst_primitive(this),Array,"asm0.t2000062");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x600019b");
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
            BLR.init_type(this,asm,"System.Void",true,false,false,false,false,[],[],(asm0)["System.ValueType"](),BLR.is_inst_value_type(this),Array,"asm0.t2000063");
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
            BLR.init_type(this,asm,"Braille.JavaScript.Array+<GetEnumerator>d__0",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000064");
            BLR.declare_virtual(this,"asm0.x600019c","asm0.x600019c");
            BLR.declare_virtual(this,"asm0.x600019d","asm0.x600019d");
            BLR.declare_virtual(this,"asm0.x600019e","asm0.x600019e");
            BLR.declare_virtual(this,"asm0.x600019f","asm0.x600019f");
            BLR.declare_virtual(this,"asm0.x60001a0","asm0.x60001a0");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IEnumerator`1"]((asm0)["System.Object"]()), (asm0)["System.Object"]()],
                {
                    'x60000e8': function (){ return asm0.x600019d;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.Collections.IEnumerator"]()],
                {
                    'x60000e5': function (){ return asm0.x60001a0;},
                    'x60000e6': function (){ return asm0.x600019c;},
                    'x60000e7': function (){ return asm0.x600019e;}
                });
            BLR.implement_interface(
                this,
                [(asm0)["System.IDisposable"]()],
                {
                    'x600008f': function (){ return asm0.x600019f;}
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
                    [asm0, "x60001a3", "<Sort>b__0"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm0.t2000065");
            (this.GenericArguments)["asm0.t2000065"] = [T];
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.comparer = null;
        });
})(asm0 || (asm0 = {}));
