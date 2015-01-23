var asm1; (function (asm)
{
    asm.FullName = "ReferenceEquals.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
    asm.next_hash = 1;

    function nop() {}

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
    /* Void .ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void CheckEquals(T)*/
    asm.x600000d_init = function (T)
    {
        return function ()
        {
            (((asm0)["Braille.Runtime.UnboundGenericParameter"])().init)();
            (((asm1)["C`1"])(T).init)();
            (((asm0)["System.Boolean"])().init)();
        };
    };;
    asm.x600000d = function (T)
    {
        return function (arg0)
        {
            ((asm.x600000d_init)(T).apply)(this,arguments);
            return ((asm.x600000d_)(T).apply)(this,arguments);
        };
    };;
    asm.x600000d_ = function (T)
    {
        return function CheckEquals(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            t0 = ((asm0)["Braille.Runtime.UnboundGenericParameter"])();
            t1 = T;
            t2 = ((asm1)["C`1"])(T);
            t3 = ((asm0)["System.Boolean"])();
            /* IL_00: ldsfld T t*/
            /* IL_05: box T*/
            /* IL_0A: ldarg.0 */
            /* IL_0B: box T*/
            /* IL_10: call Boolean ReferenceEquals(System.Object, System.Object)*/
            /* IL_15: box System.Boolean*/
            /* IL_1A: call Void Log(System.Object)*/
            (asm1.x6000001)({
                'boxed': (asm0.x6000007)(box(t2.t,t1),box(arg0,t1)),
                'type': t3,
                'vtable': t3.prototype.vtable,
                'ifacemap': t3.prototype.ifacemap
            });
            /* IL_1F: ret */
            return ;
        };
    };
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x600000f_init = function ()
    {
        ((asm1.Program)().init)();
        (((asm0)["System.Boolean"])().init)();
        ((asm1.B)().init)();
        ((asm1.A)().init)();
        (((asm1)["C`1"])((asm1.A)()).init)();
        (((asm1)["C`1"])((asm1.B)()).init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var loc1;
        var loc2;
        var loc4;
        var loc0;
        var loc3;
        t0 = (asm1.Program)();
        t1 = ((asm0)["System.Boolean"])();
        t2 = (asm1.B)();
        t3 = (asm1.A)();
        t4 = ((asm1)["C`1"])((asm1.A)());
        t5 = ((asm1)["C`1"])((asm1.B)());
        loc1 = new ((asm1.B)())();
        loc2 = new ((asm1.B)())();
        loc4 = new ((asm1.B)())();
        /* IL_00: ldsfld Object a*/
        /* IL_05: ldnull */
        /* IL_06: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_0B: box System.Boolean*/
        /* IL_10: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(t0.a,null),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_15: ldsfld B b*/
        /* IL_1A: box B*/
        /* IL_1F: ldnull */
        /* IL_20: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_25: box System.Boolean*/
        /* IL_2A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)({
                'boxed': clone_value(t0.b),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            },null),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_2F: ldsfld Object b4*/
        /* IL_34: ldnull */
        /* IL_35: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_3A: box System.Boolean*/
        /* IL_3F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(t0.b4,null),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_44: ldnull */
        /* IL_45: ldsfld Object a*/
        /* IL_4A: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_4F: box System.Boolean*/
        /* IL_54: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(null,t0.a),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_59: ldnull */
        /* IL_5A: ldsfld B b*/
        /* IL_5F: box B*/
        /* IL_64: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_69: box System.Boolean*/
        /* IL_6E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(null,{
                'boxed': clone_value(t0.b),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            }),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_73: ldnull */
        /* IL_74: ldsfld Object b4*/
        /* IL_79: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_7E: box System.Boolean*/
        /* IL_83: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(null,t0.b4),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_88: newobj Void .ctor()*/
        /* IL_8D: stloc.0 */
        loc0 = newobj(t3,asm1.x600000c,[
            null
        ]);
        /* IL_8E: ldloc.0 */
        /* IL_8F: stsfld Object a*/
        (t0)["a"] = loc0;
        /* IL_94: ldloc.0 */
        /* IL_95: call Void CheckEquals(A)*/
        (asm1.x6000010)(loc0);
        /* IL_9A: newobj Void .ctor()*/
        /* IL_9F: call Void CheckEquals(A)*/
        (asm1.x6000010)(newobj(t3,asm1.x600000c,[
            null
        ]));
        /* IL_A4: ldloca.s 1*/
        /* IL_A7: initobj B*/
        ({
            'w': function ()
            {
                loc1 = (arguments)[0];
            },
            'r': function ()
            {
                return loc1;
            }
        }.w)(((t2.IsValueType) ? (((t2.IsPrimitive) ? ((0|0)) : (new t2()))) : (null)));
        /* IL_AC: ldloc.1 */
        /* IL_AD: stsfld B b*/
        (t0)["b"] = loc1;
        /* IL_B2: ldloc.1 */
        /* IL_B3: box B*/
        /* IL_B8: stsfld Object b4*/
        (t0)["b4"] = {
            'boxed': clone_value(loc1),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        };
        /* IL_BD: ldloc.1 */
        /* IL_BE: ldloc.1 */
        /* IL_BF: box B*/
        /* IL_C4: call Void CheckEquals(B, System.Object)*/
        (asm1.x6000011)(clone_value(loc1),{
            'boxed': clone_value(loc1),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_C9: ldloca.s 2*/
        /* IL_CC: initobj B*/
        ({
            'w': function ()
            {
                loc2 = (arguments)[0];
            },
            'r': function ()
            {
                return loc2;
            }
        }.w)(((t2.IsValueType) ? (((t2.IsPrimitive) ? ((0|0)) : (new t2()))) : (null)));
        /* IL_D1: ldloc.2 */
        /* IL_D2: ldloc.2 */
        /* IL_D3: box B*/
        /* IL_D8: call Void CheckEquals(B, System.Object)*/
        (asm1.x6000011)(clone_value(loc2),{
            'boxed': clone_value(loc2),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_DD: ldsfld Object b4*/
        /* IL_E2: stloc.3 */
        loc3 = t0.b4;
        /* IL_E3: ldloc.3 */
        /* IL_E4: ldsfld Object b4*/
        /* IL_E9: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_EE: box System.Boolean*/
        /* IL_F3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(loc3,t0.b4),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_F8: ldloc.1 */
        /* IL_F9: box B*/
        /* IL_FE: ldloc.1 */
        /* IL_FF: box B*/
        /* IL_104: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_109: box System.Boolean*/
        /* IL_10E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)({
                'boxed': clone_value(loc1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            },{
                'boxed': clone_value(loc1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            }),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_113: ldloc.1 */
        /* IL_114: box B*/
        /* IL_119: ldnull */
        /* IL_11A: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_11F: box System.Boolean*/
        /* IL_124: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)({
                'boxed': clone_value(loc1),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            },null),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_129: ldloc.0 */
        /* IL_12A: stsfld IKVM.Reflection.GenericFieldInstance*/
        (t4)["t"] = loc0;
        /* IL_12F: ldloc.0 */
        /* IL_130: call Void CheckEquals(A)*/
        ((asm1.x600000d)((asm1.A)()))(loc0);
        /* IL_135: newobj Void .ctor()*/
        /* IL_13A: call Void CheckEquals(A)*/
        ((asm1.x600000d)((asm1.A)()))(newobj(t3,asm1.x600000c,[
            null
        ]));
        /* IL_13F: ldloc.1 */
        /* IL_140: stsfld IKVM.Reflection.GenericFieldInstance*/
        (t5)["t"] = loc1;
        /* IL_145: ldloc.1 */
        /* IL_146: call Void CheckEquals(B)*/
        ((asm1.x600000d)((asm1.B)()))(clone_value(loc1));
        /* IL_14B: ldloca.s 4*/
        /* IL_14E: initobj B*/
        ({
            'w': function ()
            {
                loc4 = (arguments)[0];
            },
            'r': function ()
            {
                return loc4;
            }
        }.w)(((t2.IsValueType) ? (((t2.IsPrimitive) ? ((0|0)) : (new t2()))) : (null)));
        /* IL_153: ldloc.s 4*/
        /* IL_155: call Void CheckEquals(B)*/
        ((asm1.x600000d)((asm1.B)()))(clone_value(loc4));
        /* IL_15A: ret */
        return ;
    };
    /* static Void CheckEquals(A)*/
    asm.x6000010_init = function ()
    {
        ((asm1.Program)().init)();
        (((asm0)["System.Boolean"])().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function (arg0)
    {
        (asm.x6000010_init.apply)(this,arguments);
        return (asm.x6000010_.apply)(this,arguments);
    };;
    asm.x6000010_ = function CheckEquals(arg0)
    {
        var t0;
        var t1;
        t0 = (asm1.Program)();
        t1 = ((asm0)["System.Boolean"])();
        /* IL_00: ldsfld Object a*/
        /* IL_05: ldarg.0 */
        /* IL_06: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_0B: box System.Boolean*/
        /* IL_10: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(t0.a,arg0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_15: ldarg.0 */
        /* IL_16: ldsfld Object a*/
        /* IL_1B: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_20: box System.Boolean*/
        /* IL_25: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(arg0,t0.a),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_2A: ldarg.0 */
        /* IL_2B: ldnull */
        /* IL_2C: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_31: box System.Boolean*/
        /* IL_36: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(arg0,null),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_3B: ldnull */
        /* IL_3C: ldarg.0 */
        /* IL_3D: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_42: box System.Boolean*/
        /* IL_47: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(null,arg0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_4C: ret */
        return ;
    };
    /* static Void CheckEquals(B, System.Object)*/
    asm.x6000011_init = function ()
    {
        ((asm1.Program)().init)();
        ((asm1.B)().init)();
        (((asm0)["System.Boolean"])().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function (arg0,arg1)
    {
        (asm.x6000011_init.apply)(this,arguments);
        return (asm.x6000011_.apply)(this,arguments);
    };;
    asm.x6000011_ = function CheckEquals(arg0,arg1)
    {
        var t0;
        var t1;
        var t2;
        t0 = (asm1.Program)();
        t1 = (asm1.B)();
        t2 = ((asm0)["System.Boolean"])();
        /* IL_00: ldsfld B b*/
        /* IL_05: box B*/
        /* IL_0A: ldarg.0 */
        /* IL_0B: box B*/
        /* IL_10: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_15: box System.Boolean*/
        /* IL_1A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)({
                'boxed': clone_value(t0.b),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            },{
                'boxed': clone_value(arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            }),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_1F: ldsfld B b*/
        /* IL_24: box B*/
        /* IL_29: ldarg.1 */
        /* IL_2A: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_2F: box System.Boolean*/
        /* IL_34: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)({
                'boxed': clone_value(t0.b),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            },arg1),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_39: ldsfld Object b4*/
        /* IL_3E: ldarg.0 */
        /* IL_3F: box B*/
        /* IL_44: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_49: box System.Boolean*/
        /* IL_4E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(t0.b4,{
                'boxed': clone_value(arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            }),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_53: ldsfld Object b4*/
        /* IL_58: ldarg.1 */
        /* IL_59: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_5E: box System.Boolean*/
        /* IL_63: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(t0.b4,arg1),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_68: ldnull */
        /* IL_69: ldarg.0 */
        /* IL_6A: box B*/
        /* IL_6F: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_74: box System.Boolean*/
        /* IL_79: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(null,{
                'boxed': clone_value(arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            }),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_7E: ldnull */
        /* IL_7F: ldarg.1 */
        /* IL_80: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_85: box System.Boolean*/
        /* IL_8A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(null,arg1),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_8F: ldarg.0 */
        /* IL_90: box B*/
        /* IL_95: ldnull */
        /* IL_96: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_9B: box System.Boolean*/
        /* IL_A0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)({
                'boxed': clone_value(arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            },null),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_A5: ldarg.1 */
        /* IL_A6: ldnull */
        /* IL_A7: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_AC: box System.Boolean*/
        /* IL_B1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(arg1,null),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_B6: ldsfld Object b4*/
        /* IL_BB: ldarg.0 */
        /* IL_BC: box B*/
        /* IL_C1: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_C6: box System.Boolean*/
        /* IL_CB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(t0.b4,{
                'boxed': clone_value(arg0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            }),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_D0: ldsfld Object b4*/
        /* IL_D5: ldarg.1 */
        /* IL_D6: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_DB: box System.Boolean*/
        /* IL_E0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000007)(t0.b4,arg1),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_E5: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
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
                TestLog.CustomAttributes = [];
                TestLog.Methods = [];
                TestLog.BaseType = ((asm0)["System.Object"])();
                TestLog.FullName = "TestLog";
                TestLog.Assembly = asm;
                TestLog.Interfaces = [];
                TestLog.IsInst = function (t) { return t instanceof TestLog ? t : null; };
                TestLog.IsValueType = false;
                TestLog.IsPrimitive = false;
                TestLog.IsInterface = false;
                TestLog.IsGenericTypeDefinition = false;
                TestLog.IsNullable = false;
                TestLog.ArrayType = Array;
                TestLog.MetadataName = "asm1.t2000002";
                TestLog.GenericArguments = {};
                (TestLog.GenericArguments)["asm1.t2000002"] = [];
                (TestLog.GenericArguments)["asm0.t2000002"] = [];
                TestLog.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000008;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                TestLog.prototype.ifacemap = {};
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
                TestHelper.CustomAttributes = [];
                TestHelper.Methods = [];
                TestHelper.BaseType = ((asm0)["System.Object"])();
                TestHelper.FullName = "TestHelper";
                TestHelper.Assembly = asm;
                TestHelper.Interfaces = [];
                TestHelper.IsInst = function (t) { return t instanceof TestHelper ? t : null; };
                TestHelper.IsValueType = false;
                TestHelper.IsPrimitive = false;
                TestHelper.IsInterface = false;
                TestHelper.IsGenericTypeDefinition = false;
                TestHelper.IsNullable = false;
                TestHelper.ArrayType = Array;
                TestHelper.MetadataName = "asm1.t2000006";
                TestHelper.GenericArguments = {};
                (TestHelper.GenericArguments)["asm1.t2000006"] = [];
                (TestHelper.GenericArguments)["asm0.t2000002"] = [];
                TestHelper.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000008;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                TestHelper.prototype.ifacemap = {};
            };
            TestHelper.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.A = (function ()
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
            function A()
            {
                (A.init)();
                this.constructor = A;
            };
            c = A;
            ct = c;
            A.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                A.CustomAttributes = [];
                A.Methods = [];
                A.BaseType = ((asm0)["System.Object"])();
                A.FullName = "A";
                A.Assembly = asm;
                A.Interfaces = [];
                A.IsInst = function (t) { return t instanceof A ? t : null; };
                A.IsValueType = false;
                A.IsPrimitive = false;
                A.IsInterface = false;
                A.IsGenericTypeDefinition = false;
                A.IsNullable = false;
                A.ArrayType = Array;
                A.MetadataName = "asm1.t2000007";
                A.GenericArguments = {};
                (A.GenericArguments)["asm1.t2000007"] = [];
                (A.GenericArguments)["asm0.t2000002"] = [];
                A.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000008;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                A.prototype.ifacemap = {};
            };
            A.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.B = (function ()
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
            function B()
            {
                (B.init)();
                this.constructor = B;
            };
            c = B;
            ct = c;
            B.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                B.CustomAttributes = [];
                B.Methods = [];
                B.BaseType = ((asm0)["System.ValueType"])();
                B.FullName = "B";
                B.Assembly = asm;
                B.Interfaces = [];
                B.IsInst = function (t) { return t instanceof B ? t : null; };
                B.IsValueType = true;
                B.IsPrimitive = false;
                B.IsInterface = false;
                B.IsGenericTypeDefinition = false;
                B.IsNullable = false;
                B.ArrayType = Array;
                B.MetadataName = "asm1.t2000008";
                B.GenericArguments = {};
                (B.GenericArguments)["asm1.t2000008"] = [];
                (B.GenericArguments)["asm0.t2000006"] = [];
                (B.GenericArguments)["asm0.t2000002"] = [];
                B.prototype.vtable = {
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000016;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                B.prototype.ifacemap = {};
            };
            B.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["C`1"] = (function ()
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
            function C_1()
            {
                (C_1.init)();
                this.constructor = C_1;
            };
            c = C_1;
            tree_set([
                T
            ],ct,c);
            C_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                C_1.t = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
                C_1.CustomAttributes = [];
                C_1.Methods = [];
                C_1.BaseType = ((asm0)["System.Object"])();
                C_1.FullName = "C`1";
                C_1.Assembly = asm;
                C_1.Interfaces = [];
                C_1.IsInst = function (t) { return t instanceof C_1 ? t : null; };
                C_1.IsValueType = false;
                C_1.IsPrimitive = false;
                C_1.IsInterface = false;
                C_1.IsGenericTypeDefinition = true;
                C_1.IsNullable = false;
                C_1.ArrayType = Array;
                C_1.MetadataName = "asm1.t2000009";
                C_1.GenericArguments = {};
                (C_1.GenericArguments)["asm1.t2000009"] = [
                    T
                ];
                (C_1.GenericArguments)["asm0.t2000002"] = [];
                C_1.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000008;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                C_1.prototype.ifacemap = {};
            };
            C_1.prototype = new (((asm0)["System.Object"])())();
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
                Program.a = null;
                Program.b = new ((asm1.B)())();
                Program.b4 = null;
                Program.CustomAttributes = [];
                Program.Methods = [];
                Program.BaseType = ((asm0)["System.Object"])();
                Program.FullName = "Program";
                Program.Assembly = asm;
                Program.Interfaces = [];
                Program.IsInst = function (t) { return t instanceof Program ? t : null; };
                Program.IsValueType = false;
                Program.IsPrimitive = false;
                Program.IsInterface = false;
                Program.IsGenericTypeDefinition = false;
                Program.IsNullable = false;
                Program.ArrayType = Array;
                Program.MetadataName = "asm1.t200000a";
                Program.GenericArguments = {};
                (Program.GenericArguments)["asm1.t200000a"] = [];
                (Program.GenericArguments)["asm0.t2000002"] = [];
                Program.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000008;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                Program.prototype.ifacemap = {};
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
