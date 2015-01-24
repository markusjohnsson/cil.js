var asm1; (function (asm)
{
    asm.FullName = "struct.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* static Point get_zerop()*/
    asm.x600000d = function get_zerop()
    {
        var loc0;
        loc0 = new ((asm1.Point)())();
        /* IL_00: ldloca.s 0*/
        /* IL_02: ldc.i4.0 */
        /* IL_03: ldc.i4.0 */
        /* IL_04: call Void .ctor(System.Int32, System.Int32)*/
        (asm1.x600000c)({
            'w': function ()
            {
                loc0 = (arguments)[0];
            },
            'r': function ()
            {
                return loc0;
            }
        },(0|0),(0|0));
        /* IL_09: ldloca.s 0*/
        /* IL_0B: ldc.i4.0 */
        /* IL_0C: stfld Int32 z*/
        ({
            'w': function ()
            {
                loc0 = (arguments)[0];
            },
            'r': function ()
            {
                return loc0;
            }
        }.r)().z = (0|0);
        /* IL_11: ldloc.0 */
        /* IL_12: ret */
        return loc0;
    };;
    /* static Int32 struct_param(Point)*/
    asm.x600000e = function struct_param(arg0)
    {
        var __pos_0__;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarga.s 0*/
                /* IL_02: ldfld Int32 x*/
                /* IL_07: ldarga.s 0*/
                /* IL_09: ldfld Int32 y*/
                /* IL_0E: bne.un.s IL_29*/
                
                if (unsigned_value(({
                    'w': function ()
                    {
                        arg0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg0;
                    }
                }.r)().x) != unsigned_value(({
                    'w': function ()
                    {
                        arg0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg0;
                    }
                }.r)().y)){
                    __pos_0__ = 0x29;
                    continue;
                }
                /* IL_10: ldarga.s 0*/
                /* IL_12: ldfld Int32 y*/
                /* IL_17: ldarga.s 0*/
                /* IL_19: ldfld Int32 z*/
                /* IL_1E: bne.un.s IL_29*/
                
                if (unsigned_value(({
                    'w': function ()
                    {
                        arg0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg0;
                    }
                }.r)().y) != unsigned_value(({
                    'w': function ()
                    {
                        arg0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg0;
                    }
                }.r)().z)){
                    __pos_0__ = 0x29;
                    continue;
                }
                /* IL_20: ldarga.s 0*/
                /* IL_22: ldfld Int32 z*/
                /* IL_27: brfalse.s IL_2B*/
                
                if ((!(({
                    'w': function ()
                    {
                        arg0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg0;
                    }
                }.r)().z))){
                    __pos_0__ = 0x2B;
                    continue;
                }
                case 0x29:
                /* IL_29: ldc.i4.1 */
                /* IL_2A: ret */
                return (1|0);
                case 0x2B:
                /* IL_2B: ldarga.s 0*/
                /* IL_2D: ldc.i4.1 */
                /* IL_2E: stfld Int32 x*/
                ({
                    'w': function ()
                    {
                        arg0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg0;
                    }
                }.r)().x = (1|0);
                /* IL_33: ldarga.s 0*/
                /* IL_35: ldc.i4.2 */
                /* IL_36: stfld Int32 y*/
                ({
                    'w': function ()
                    {
                        arg0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg0;
                    }
                }.r)().y = (2|0);
                /* IL_3B: ldarga.s 0*/
                /* IL_3D: ldc.i4.3 */
                /* IL_3E: stfld Int32 z*/
                ({
                    'w': function ()
                    {
                        arg0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg0;
                    }
                }.r)().z = (3|0);
                /* IL_43: ldc.i4.0 */
                /* IL_44: ret */
                return (0|0);
            }
        }
    };;
    /* Void .ctor(System.Int32, System.Int32)*/
    asm.x600000c = function _ctor(arg0,arg1,arg2)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Int32 x*/
        (arg0.r)().x = arg1;
        /* IL_07: ldarg.0 */
        /* IL_08: ldarg.2 */
        /* IL_09: stfld Int32 y*/
        (arg0.r)().y = arg2;
        /* IL_0E: ldarg.0 */
        /* IL_0F: ldc.i4.5 */
        /* IL_10: stfld Int32 z*/
        (arg0.r)().z = (5|0);
        /* IL_15: ret */
        return ;
    };;
    /* static Int32 Main()*/
    asm.x600000f = function Main()
    {
        var loc0;
        var __pos_0__;
        var loc1;
        var loc2;
        loc0 = new ((asm1.Point)())();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldloca.s 0*/
                /* IL_02: ldc.i4.s 10*/
                /* IL_04: ldc.i4.s 20*/
                /* IL_06: call Void .ctor(System.Int32, System.Int32)*/
                (asm1.x600000c)({
                    'w': function ()
                    {
                        loc0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc0;
                    }
                },(10|0),(20|0));
                /* IL_0B: ldloc.0 */
                /* IL_0C: stloc.1 */
                loc1 = loc0;
                /* IL_0D: ldloca.s 1*/
                /* IL_0F: ldfld Int32 x*/
                /* IL_14: ldc.i4.s 10*/
                /* IL_16: beq.s IL_1A*/
                
                if (({
                    'w': function ()
                    {
                        loc1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc1;
                    }
                }.r)().x === (10|0)){
                    __pos_0__ = 0x1A;
                    continue;
                }
                /* IL_18: ldc.i4.1 */
                /* IL_19: ret */
                return (1|0);
                case 0x1A:
                /* IL_1A: ldloca.s 1*/
                /* IL_1C: ldfld Int32 y*/
                /* IL_21: ldc.i4.s 20*/
                /* IL_23: beq.s IL_27*/
                
                if (({
                    'w': function ()
                    {
                        loc1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc1;
                    }
                }.r)().y === (20|0)){
                    __pos_0__ = 0x27;
                    continue;
                }
                /* IL_25: ldc.i4.2 */
                /* IL_26: ret */
                return (2|0);
                case 0x27:
                /* IL_27: ldloca.s 1*/
                /* IL_29: ldfld Int32 z*/
                /* IL_2E: ldc.i4.5 */
                /* IL_2F: beq.s IL_33*/
                
                if (({
                    'w': function ()
                    {
                        loc1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc1;
                    }
                }.r)().z === (5|0)){
                    __pos_0__ = 0x33;
                    continue;
                }
                /* IL_31: ldc.i4.3 */
                /* IL_32: ret */
                return (3|0);
                case 0x33:
                /* IL_33: ldloca.s 0*/
                /* IL_35: ldfld Int32 x*/
                /* IL_3A: ldc.i4.s 10*/
                /* IL_3C: beq.s IL_40*/
                
                if (({
                    'w': function ()
                    {
                        loc0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc0;
                    }
                }.r)().x === (10|0)){
                    __pos_0__ = 0x40;
                    continue;
                }
                /* IL_3E: ldc.i4.4 */
                /* IL_3F: ret */
                return (4|0);
                case 0x40:
                /* IL_40: ldloca.s 0*/
                /* IL_42: ldfld Int32 y*/
                /* IL_47: ldc.i4.s 20*/
                /* IL_49: beq.s IL_4D*/
                
                if (({
                    'w': function ()
                    {
                        loc0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc0;
                    }
                }.r)().y === (20|0)){
                    __pos_0__ = 0x4D;
                    continue;
                }
                /* IL_4B: ldc.i4.5 */
                /* IL_4C: ret */
                return (5|0);
                case 0x4D:
                /* IL_4D: ldloca.s 0*/
                /* IL_4F: ldfld Int32 z*/
                /* IL_54: ldc.i4.5 */
                /* IL_55: beq.s IL_59*/
                
                if (({
                    'w': function ()
                    {
                        loc0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc0;
                    }
                }.r)().z === (5|0)){
                    __pos_0__ = 0x59;
                    continue;
                }
                /* IL_57: ldc.i4.6 */
                /* IL_58: ret */
                return (6|0);
                case 0x59:
                /* IL_59: ldloca.s 0*/
                /* IL_5B: ldc.i4.7 */
                /* IL_5C: stfld Int32 z*/
                ({
                    'w': function ()
                    {
                        loc0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc0;
                    }
                }.r)().z = (7|0);
                /* IL_61: ldloca.s 0*/
                /* IL_63: ldfld Int32 z*/
                /* IL_68: ldc.i4.7 */
                /* IL_69: beq.s IL_6D*/
                
                if (({
                    'w': function ()
                    {
                        loc0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc0;
                    }
                }.r)().z === (7|0)){
                    __pos_0__ = 0x6D;
                    continue;
                }
                /* IL_6B: ldc.i4.7 */
                /* IL_6C: ret */
                return (7|0);
                case 0x6D:
                /* IL_6D: ldloca.s 1*/
                /* IL_6F: ldfld Int32 x*/
                /* IL_74: ldc.i4.s 10*/
                /* IL_76: beq.s IL_7A*/
                
                if (({
                    'w': function ()
                    {
                        loc1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc1;
                    }
                }.r)().x === (10|0)){
                    __pos_0__ = 0x7A;
                    continue;
                }
                /* IL_78: ldc.i4.8 */
                /* IL_79: ret */
                return (8|0);
                case 0x7A:
                /* IL_7A: call Point get_zerop()*/
                /* IL_7F: stloc.2 */
                loc2 = (asm1.x600000d)();
                /* IL_80: ldloca.s 2*/
                /* IL_82: ldfld Int32 x*/
                /* IL_87: ldloca.s 2*/
                /* IL_89: ldfld Int32 y*/
                /* IL_8E: bne.un.s IL_A9*/
                
                if (unsigned_value(({
                    'w': function ()
                    {
                        loc2 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc2;
                    }
                }.r)().x) != unsigned_value(({
                    'w': function ()
                    {
                        loc2 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc2;
                    }
                }.r)().y)){
                    __pos_0__ = 0xA9;
                    continue;
                }
                /* IL_90: ldloca.s 2*/
                /* IL_92: ldfld Int32 y*/
                /* IL_97: ldloca.s 2*/
                /* IL_99: ldfld Int32 z*/
                /* IL_9E: bne.un.s IL_A9*/
                
                if (unsigned_value(({
                    'w': function ()
                    {
                        loc2 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc2;
                    }
                }.r)().y) != unsigned_value(({
                    'w': function ()
                    {
                        loc2 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc2;
                    }
                }.r)().z)){
                    __pos_0__ = 0xA9;
                    continue;
                }
                /* IL_A0: ldloca.s 2*/
                /* IL_A2: ldfld Int32 z*/
                /* IL_A7: brfalse.s IL_AC*/
                
                if ((!(({
                    'w': function ()
                    {
                        loc2 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc2;
                    }
                }.r)().z))){
                    __pos_0__ = 0xAC;
                    continue;
                }
                case 0xA9:
                /* IL_A9: ldc.i4.s 9*/
                /* IL_AB: ret */
                return (9|0);
                case 0xAC:
                /* IL_AC: ldloc.2 */
                /* IL_AD: call Int32 struct_param(Point)*/
                /* IL_B2: brfalse.s IL_B7*/
                
                if ((!((asm1.x600000e)(clone_value(loc2))))){
                    __pos_0__ = 0xB7;
                    continue;
                }
                /* IL_B4: ldc.i4.s 10*/
                /* IL_B6: ret */
                return (10|0);
                case 0xB7:
                /* IL_B7: ldloca.s 2*/
                /* IL_B9: ldfld Int32 x*/
                /* IL_BE: ldloca.s 2*/
                /* IL_C0: ldfld Int32 y*/
                /* IL_C5: bne.un.s IL_E0*/
                
                if (unsigned_value(({
                    'w': function ()
                    {
                        loc2 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc2;
                    }
                }.r)().x) != unsigned_value(({
                    'w': function ()
                    {
                        loc2 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc2;
                    }
                }.r)().y)){
                    __pos_0__ = 0xE0;
                    continue;
                }
                /* IL_C7: ldloca.s 2*/
                /* IL_C9: ldfld Int32 y*/
                /* IL_CE: ldloca.s 2*/
                /* IL_D0: ldfld Int32 z*/
                /* IL_D5: bne.un.s IL_E0*/
                
                if (unsigned_value(({
                    'w': function ()
                    {
                        loc2 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc2;
                    }
                }.r)().y) != unsigned_value(({
                    'w': function ()
                    {
                        loc2 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc2;
                    }
                }.r)().z)){
                    __pos_0__ = 0xE0;
                    continue;
                }
                /* IL_D7: ldloca.s 2*/
                /* IL_D9: ldfld Int32 z*/
                /* IL_DE: brfalse.s IL_E3*/
                
                if ((!(({
                    'w': function ()
                    {
                        loc2 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc2;
                    }
                }.r)().z))){
                    __pos_0__ = 0xE3;
                    continue;
                }
                case 0xE0:
                /* IL_E0: ldc.i4.s 11*/
                /* IL_E2: ret */
                return (11|0);
                case 0xE3:
                /* IL_E3: ldc.i4.0 */
                /* IL_E4: ret */
                return (0|0);
            }
        }
    };;
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
    asm.Point = (function ()
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
            function Point()
            {
                (Point.init)();
                this.constructor = Point;
            };
            c = Point;
            ct = c;
            Point.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(Point,"Point",asm,true,false,false,false,false,[],[],((asm0)["System.ValueType"])(),is_inst_default(Point),Array,"asm1.t2000007");
                Point.Interfaces = [];
                declare_virtual(Point,"asm0.x6000008","asm0.x6000016");
                declare_virtual(Point,"asm0.x6000005","asm0.x6000005");
                declare_virtual(Point,"asm0.x6000009","asm0.x6000009");
                Point.prototype.x = 0;
                Point.prototype.y = 0;
                Point.prototype.z = 0;
            };
            Point.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    asm.test = (function ()
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
            function test()
            {
                (test.init)();
                this.constructor = test;
            };
            c = test;
            ct = c;
            test.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(test,"test",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(test),Array,"asm1.t2000008");
                test.Interfaces = [];
                declare_virtual(test,"asm0.x6000005","asm0.x6000005");
                declare_virtual(test,"asm0.x6000008","asm0.x6000008");
                declare_virtual(test,"asm0.x6000009","asm0.x6000009");
            };
            test.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
