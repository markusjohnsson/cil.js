var asm1; (function (asm)
{
    asm.FullName = "Reflection.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000c)(arg0);
        /* IL_06: ret */
        return ;
    };;
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
        ((asm1.A)().init)();
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.String"])().init)();
        (((asm0)["System.Boolean"])().init)();
        (((asm1)["X`1"])((asm1.A)()).init)();
        (((asm0)["Braille.Runtime.UnboundGenericParameter"])().init)();
        (((asm1)["X`1"])(((asm0)["Braille.Runtime.UnboundGenericParameter"])()).init)();
        ((asm1.B)().init)();
        (((asm1)["X`1"])((asm1.B)()).init)();
        (((asm0)["System.Type"])().init)();
        (((asm0)["System.Object"])().init)();
        ((asm1.I2)().init)();
        ((asm1.I)().init)();
        (((asm1)["I3`1"])(((asm0)["System.Int32"])()).init)();
        (((asm1)["X`1"])(((asm0)["System.Int32"])()).init)();
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
        var t6;
        var t7;
        var t8;
        var t9;
        var t10;
        var t11;
        var t12;
        var t13;
        var t14;
        var t15;
        var st_6F;
        var st_70;
        var st_71;
        var st_72;
        var st_73;
        var st_74;
        var st_75;
        var st_76;
        var st_77;
        var st_78;
        var st_79;
        var loc0;
        t0 = (asm1.A)();
        t1 = ((asm0)["System.Int32"])();
        t2 = ((asm0)["System.String"])();
        t3 = ((asm0)["System.Boolean"])();
        t4 = ((asm1)["X`1"])((asm1.A)());
        t5 = ((asm0)["Braille.Runtime.UnboundGenericParameter"])();
        t6 = ((asm0)["Braille.Runtime.UnboundGenericParameter"])();
        t7 = ((asm1)["X`1"])(((asm0)["Braille.Runtime.UnboundGenericParameter"])());
        t8 = (asm1.B)();
        t9 = ((asm1)["X`1"])((asm1.B)());
        t10 = ((asm0)["System.Type"])();
        t11 = ((asm0)["System.Object"])();
        t12 = (asm1.I2)();
        t13 = (asm1.I)();
        t14 = ((asm1)["I3`1"])(((asm0)["System.Int32"])());
        t15 = ((asm1)["X`1"])(((asm0)["System.Int32"])());
        /* IL_00: ldtoken A*/
        /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_0A: callvirt String get_Name()*/
        /* IL_0F: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)).vtable)["asm0.x600003d"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))));
        /* IL_14: ldtoken System.Int32*/
        /* IL_19: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_1E: callvirt String get_Name()*/
        /* IL_23: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t1)).vtable)["asm0.x600003d"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t1))));
        /* IL_28: ldtoken System.String*/
        /* IL_2D: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_32: callvirt String get_Name()*/
        /* IL_37: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t2)).vtable)["asm0.x600003d"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t2))));
        /* IL_3C: ldtoken System.Boolean*/
        /* IL_41: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_46: callvirt String get_Name()*/
        /* IL_4B: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t3)).vtable)["asm0.x600003d"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t3))));
        /* IL_50: ldtoken A*/
        /* IL_55: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_5A: callvirt String get_FullName()*/
        /* IL_5F: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)).vtable)["asm0.x60000ac"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))));
        /* IL_64: ldtoken System.Int32*/
        /* IL_69: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_6E: callvirt String get_FullName()*/
        /* IL_73: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t1)).vtable)["asm0.x60000ac"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t1))));
        /* IL_78: ldtoken System.String*/
        /* IL_7D: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_82: callvirt String get_FullName()*/
        /* IL_87: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t2)).vtable)["asm0.x60000ac"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t2))));
        /* IL_8C: ldtoken System.Boolean*/
        /* IL_91: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_96: callvirt String get_FullName()*/
        /* IL_9B: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t3)).vtable)["asm0.x60000ac"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t3))));
        /* IL_A0: ldtoken A*/
        /* IL_A5: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_AA: callvirt String get_FullName()*/
        /* IL_AF: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)).vtable)["asm0.x60000ac"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))));
        /* IL_B4: newobj Void .ctor()*/
        /* IL_B9: call Type GetType()*/
        /* IL_BE: callvirt String get_FullName()*/
        /* IL_C3: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x600000a)(newobj(t0,asm1.x600000c,[
            null
        ])).vtable)["asm0.x60000ac"])())((asm0.x600000a)(newobj(t0,asm1.x600000c,[
            null
        ]))));
        /* IL_C8: newobj Void .ctor()*/
        /* IL_CD: call Type GetType()*/
        /* IL_D2: ldtoken A*/
        /* IL_D7: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_DC: callvirt Boolean Equals(System.Object)*/
        /* IL_E1: box System.Boolean*/
        /* IL_E6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(newobj(t0,asm1.x600000c,[
                null
            ])).vtable)["asm0.x6000008"])())((asm0.x600000a)(newobj(t0,asm1.x600000c,[
                null
            ])),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_EB: newobj Void .ctor()*/
        /* IL_F0: call Type GetType()*/
        /* IL_F5: ldtoken System.String*/
        /* IL_FA: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_FF: callvirt Boolean Equals(System.Object)*/
        /* IL_104: box System.Boolean*/
        /* IL_109: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(newobj(t0,asm1.x600000c,[
                null
            ])).vtable)["asm0.x6000008"])())((asm0.x600000a)(newobj(t0,asm1.x600000c,[
                null
            ])),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t2))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_10E: ldstr */
        /* IL_113: callvirt Type GetType()*/
        /* IL_118: ldtoken System.String*/
        /* IL_11D: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_122: callvirt Boolean Equals(System.Object)*/
        /* IL_127: box System.Boolean*/
        /* IL_12C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(new_string("")).vtable)["asm0.x6000008"])())((asm0.x600000a)(new_string("")),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t2))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_131: ldstr */
        /* IL_136: callvirt Type GetType()*/
        /* IL_13B: ldtoken A*/
        /* IL_140: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_145: callvirt Boolean Equals(System.Object)*/
        /* IL_14A: box System.Boolean*/
        /* IL_14F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(new_string("")).vtable)["asm0.x6000008"])())((asm0.x600000a)(new_string("")),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_154: ldc.i4.1 */
        /* IL_155: box System.Int32*/
        /* IL_15A: call Type GetType()*/
        /* IL_15F: ldtoken A*/
        /* IL_164: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_169: callvirt Boolean Equals(System.Object)*/
        /* IL_16E: box System.Boolean*/
        /* IL_173: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)({
                'boxed': (1|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            }).vtable)["asm0.x6000008"])())((asm0.x600000a)({
                'boxed': (1|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            }),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_178: ldc.i4.1 */
        /* IL_179: box System.Int32*/
        /* IL_17E: call Type GetType()*/
        /* IL_183: ldtoken System.Int32*/
        /* IL_188: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_18D: callvirt Boolean Equals(System.Object)*/
        /* IL_192: box System.Boolean*/
        /* IL_197: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)({
                'boxed': (1|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            }).vtable)["asm0.x6000008"])())((asm0.x600000a)({
                'boxed': (1|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            }),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t1))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_19C: ldc.i4.1 */
        /* IL_19D: box System.Int32*/
        /* IL_1A2: call Type GetType()*/
        /* IL_1A7: callvirt String get_FullName()*/
        /* IL_1AC: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x600000a)({
            'boxed': (1|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        }).vtable)["asm0.x60000ac"])())((asm0.x600000a)({
            'boxed': (1|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        })));
        /* IL_1B1: ldtoken A*/
        /* IL_1B6: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_1BB: callvirt String get_AssemblyQualifiedName()*/
        /* IL_1C0: ldstr .clr*/
        /* IL_1C5: ldstr .brl*/
        /* IL_1CA: callvirt String Replace(System.String, System.String)*/
        /* IL_1CF: call Void Log(System.Object)*/
        (asm1.x6000001)((asm0.x6000176)(((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)).vtable)["asm0.x60000b2"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))),new_string(".clr"),new_string(".brl")));
        /* IL_1D4: ldtoken X`1[A]*/
        /* IL_1D9: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_1DE: callvirt String get_FullName()*/
        /* IL_1E3: ldstr .clr*/
        /* IL_1E8: ldstr .brl*/
        /* IL_1ED: callvirt String Replace(System.String, System.String)*/
        /* IL_1F2: call Void Log(System.Object)*/
        (asm1.x6000001)((asm0.x6000176)(((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t4)).vtable)["asm0.x60000ac"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t4))),new_string(".clr"),new_string(".brl")));
        /* IL_1F7: newobj Void .ctor()*/
        /* IL_1FC: call Type GetType()*/
        /* IL_201: callvirt String get_FullName()*/
        /* IL_206: ldstr .clr*/
        /* IL_20B: ldstr .brl*/
        /* IL_210: callvirt String Replace(System.String, System.String)*/
        /* IL_215: call Void Log(System.Object)*/
        (asm1.x6000001)((asm0.x6000176)(((((asm0.x600000a)(newobj(t4,asm1.x600000e,[
            null
        ])).vtable)["asm0.x60000ac"])())((asm0.x600000a)(newobj(t4,asm1.x600000e,[
            null
        ]))),new_string(".clr"),new_string(".brl")));
        /* IL_21A: newobj Void .ctor()*/
        /* IL_21F: call Type GetType()*/
        /* IL_224: ldtoken X`1[T]*/
        /* IL_229: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_22E: callvirt Boolean Equals(System.Object)*/
        /* IL_233: box System.Boolean*/
        /* IL_238: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(newobj(t4,asm1.x600000e,[
                null
            ])).vtable)["asm0.x6000008"])())((asm0.x600000a)(newobj(t4,asm1.x600000e,[
                null
            ])),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t7))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_23D: newobj Void .ctor()*/
        /* IL_242: call Type GetType()*/
        /* IL_247: ldtoken X`1[B]*/
        /* IL_24C: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_251: callvirt Boolean Equals(System.Object)*/
        /* IL_256: box System.Boolean*/
        /* IL_25B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(newobj(t4,asm1.x600000e,[
                null
            ])).vtable)["asm0.x6000008"])())((asm0.x600000a)(newobj(t4,asm1.x600000e,[
                null
            ])),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t9))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_260: ldstr */
        /* IL_265: callvirt Type GetType()*/
        /* IL_26A: ldtoken X`1[T]*/
        /* IL_26F: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_274: callvirt Boolean Equals(System.Object)*/
        /* IL_279: box System.Boolean*/
        /* IL_27E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(new_string("")).vtable)["asm0.x6000008"])())((asm0.x600000a)(new_string("")),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t7))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_283: ldtoken X`1[T]*/
        /* IL_288: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        st_73 = (asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t7));
        /* IL_28D: ldc.i4.1 */
        /* IL_28E: newarr System.Type*/
        /* IL_293: stloc.0 */
        loc0 = new_array(t10,(1|0));
        /* IL_294: ldloc.0 */
        st_70 = loc0;
        /* IL_295: ldc.i4.0 */
        st_71 = (0|0);
        /* IL_296: ldtoken A*/
        st_6F = new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0);
        /* IL_29B: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        st_72 = (asm0.x60000ad)(st_6F);
        /* IL_2A0: stelem.ref */
        (st_70.jsarr)[st_71] = st_72;
        /* IL_2A1: ldloc.0 */
        st_74 = loc0;
        /* IL_2A2: callvirt Type MakeGenericType(System.Type[])*/
        st_76 = (((st_73.vtable)["asm0.x60000b8"])())(st_73,st_74);
        /* IL_2A7: ldtoken X`1[A]*/
        st_75 = new_handle(((asm0)["System.RuntimeTypeHandle"])(),t4);
        /* IL_2AC: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        st_77 = (asm0.x60000ad)(st_75);
        /* IL_2B1: callvirt Boolean Equals(System.Object)*/
        st_78 = (((st_76.vtable)["asm0.x6000008"])())(st_76,st_77);
        /* IL_2B6: box System.Boolean*/
        st_79 = {
            'boxed': st_78,
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        };
        /* IL_2BB: call Void Log(System.Object)*/
        (asm1.x6000001)(st_79);
        /* IL_2C0: ldtoken System.Object*/
        /* IL_2C5: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_2CA: callvirt Type get_BaseType()*/
        /* IL_2CF: ldnull */
        /* IL_2D1: ceq */
        /* IL_2D2: box System.Boolean*/
        /* IL_2D7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t11)).vtable)["asm0.x60000b1"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t11))) === null) ? (1) : (0)),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_2DC: ldtoken A*/
        /* IL_2E1: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_2E6: callvirt Type get_BaseType()*/
        /* IL_2EB: ldtoken System.Object*/
        /* IL_2F0: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_2F5: callvirt Boolean Equals(System.Object)*/
        /* IL_2FA: box System.Boolean*/
        /* IL_2FF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)).vtable)["asm0.x60000b1"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))).vtable)["asm0.x6000008"])())(((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)).vtable)["asm0.x60000b1"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t11))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_304: ldtoken A*/
        /* IL_309: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_30E: callvirt Type get_BaseType()*/
        /* IL_313: ldtoken B*/
        /* IL_318: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_31D: callvirt Boolean Equals(System.Object)*/
        /* IL_322: box System.Boolean*/
        /* IL_327: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)).vtable)["asm0.x60000b1"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))).vtable)["asm0.x6000008"])())(((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)).vtable)["asm0.x60000b1"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t8))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_32C: ldtoken B*/
        /* IL_331: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_336: callvirt Type get_BaseType()*/
        /* IL_33B: ldtoken A*/
        /* IL_340: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_345: callvirt Boolean Equals(System.Object)*/
        /* IL_34A: box System.Boolean*/
        /* IL_34F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t8)).vtable)["asm0.x60000b1"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t8))).vtable)["asm0.x6000008"])())(((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t8)).vtable)["asm0.x60000b1"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t8))),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_354: ldtoken B*/
        /* IL_359: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_35E: ldtoken A*/
        /* IL_363: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_368: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_36D: box System.Boolean*/
        /* IL_372: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t8)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_377: ldtoken B*/
        /* IL_37C: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_381: ldtoken B*/
        /* IL_386: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_38B: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_390: box System.Boolean*/
        /* IL_395: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t8)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t8))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_39A: ldtoken A*/
        /* IL_39F: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_3A4: ldtoken B*/
        /* IL_3A9: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_3AE: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_3B3: box System.Boolean*/
        /* IL_3B8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t8))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_3BD: ldtoken A*/
        /* IL_3C2: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_3C7: ldtoken A*/
        /* IL_3CC: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_3D1: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_3D6: box System.Boolean*/
        /* IL_3DB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_3E0: ldtoken A*/
        /* IL_3E5: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_3EA: ldtoken I2*/
        /* IL_3EF: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_3F4: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_3F9: box System.Boolean*/
        /* IL_3FE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t12))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_403: ldtoken B*/
        /* IL_408: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_40D: ldtoken I2*/
        /* IL_412: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_417: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_41C: box System.Boolean*/
        /* IL_421: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t8)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t12))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_426: ldtoken A*/
        /* IL_42B: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_430: ldtoken I*/
        /* IL_435: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_43A: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_43F: box System.Boolean*/
        /* IL_444: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t13))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_449: ldtoken B*/
        /* IL_44E: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_453: ldtoken I*/
        /* IL_458: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_45D: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_462: box System.Boolean*/
        /* IL_467: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t8)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t13))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_46C: ldtoken I2*/
        /* IL_471: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_476: ldtoken I2*/
        /* IL_47B: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_480: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_485: box System.Boolean*/
        /* IL_48A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t12)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t12))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_48F: ldtoken I*/
        /* IL_494: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_499: ldtoken I2*/
        /* IL_49E: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_4A3: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_4A8: box System.Boolean*/
        /* IL_4AD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t13)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t12))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_4B2: ldtoken I2*/
        /* IL_4B7: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_4BC: ldtoken B*/
        /* IL_4C1: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_4C6: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_4CB: box System.Boolean*/
        /* IL_4D0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t12)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t8))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_4D5: ldtoken I*/
        /* IL_4DA: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_4DF: ldtoken B*/
        /* IL_4E4: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_4E9: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_4EE: box System.Boolean*/
        /* IL_4F3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t13)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t8))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_4F8: ldtoken I3`1[System.Int32]*/
        /* IL_4FD: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_502: ldtoken X`1[System.Int32]*/
        /* IL_507: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_50C: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_511: box System.Boolean*/
        /* IL_516: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t14)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t15))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_51B: ldtoken I*/
        /* IL_520: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_525: ldtoken X`1[System.Int32]*/
        /* IL_52A: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_52F: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_534: box System.Boolean*/
        /* IL_539: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t13)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t15))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_53E: ldtoken I2*/
        /* IL_543: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_548: ldtoken X`1[System.Int32]*/
        /* IL_54D: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_552: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_557: box System.Boolean*/
        /* IL_55C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t12)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t15))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_561: ldtoken I*/
        /* IL_566: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_56B: ldtoken I3`1[System.Int32]*/
        /* IL_570: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_575: call Boolean IsAssignableFrom(System.Type, System.Type)*/
        /* IL_57A: box System.Boolean*/
        /* IL_57F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t13)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t14))),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_584: ret */
        return ;
    };
    /* static Boolean IsAssignableFrom(System.Type, System.Type)*/
    asm.x6000010 = function IsAssignableFrom(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: callvirt Boolean IsAssignableFrom(System.Type)*/
        /* IL_07: ret */
        return (((arg0.vtable)["asm0.x60000b9"])())(arg0,arg1);
    };;
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
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
    asm.I = (function ()
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
            function I()
            {
                (I.init)();
                this.constructor = I;
            };
            c = I;
            ct = c;
            I.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                I.CustomAttributes = [];
                I.Methods = [];
                I.BaseType = null;
                I.FullName = "I";
                I.Assembly = asm;
                I.Interfaces = [];
                I.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(I) != -1 ? t : null; } catch (e) { return false; } };
                I.IsValueType = false;
                I.IsPrimitive = false;
                I.IsInterface = true;
                I.IsGenericTypeDefinition = false;
                I.IsNullable = false;
                I.ArrayType = Array;
                I.MetadataName = "asm1.t2000008";
                I.GenericArguments = {};
                (I.GenericArguments)["asm1.t2000008"] = [];
                I.prototype.vtable = {};
                I.prototype.ifacemap = {};
            };
            I.prototype = {};
            return c;
        };
    })();
    asm.I2 = (function ()
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
            function I2()
            {
                (I2.init)();
                this.constructor = I2;
            };
            c = I2;
            ct = c;
            I2.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                I2.CustomAttributes = [];
                I2.Methods = [];
                I2.BaseType = null;
                I2.FullName = "I2";
                I2.Assembly = asm;
                I2.Interfaces = [
                    (asm1.I)()
                ];
                I2.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(I2) != -1 ? t : null; } catch (e) { return false; } };
                I2.IsValueType = false;
                I2.IsPrimitive = false;
                I2.IsInterface = true;
                I2.IsGenericTypeDefinition = false;
                I2.IsNullable = false;
                I2.ArrayType = Array;
                I2.MetadataName = "asm1.t2000009";
                I2.GenericArguments = {};
                (I2.GenericArguments)["asm1.t2000009"] = [];
                I2.prototype.vtable = {};
                I2.prototype.ifacemap = {};
            };
            I2.prototype = {};
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
                B.BaseType = (asm1.A)();
                B.FullName = "B";
                B.Assembly = asm;
                B.Interfaces = [
                    (asm1.I2)(),
                    (asm1.I)()
                ];
                B.IsInst = function (t) { return t instanceof B ? t : null; };
                B.IsValueType = false;
                B.IsPrimitive = false;
                B.IsInterface = false;
                B.IsGenericTypeDefinition = false;
                B.IsNullable = false;
                B.ArrayType = Array;
                B.MetadataName = "asm1.t200000a";
                B.GenericArguments = {};
                (B.GenericArguments)["asm1.t200000a"] = [];
                (B.GenericArguments)["asm1.t2000007"] = [];
                (B.GenericArguments)["asm0.t2000002"] = [];
                B.prototype.vtable = {
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
                B.prototype.ifacemap = {};
                tree_set([
                    (asm1.I2)()
                ],B.prototype.ifacemap,{});
                tree_set([
                    (asm1.I)()
                ],B.prototype.ifacemap,{});
            };
            B.prototype = new ((asm1.A)())();
            return c;
        };
    })();
    (asm)["I3`1"] = (function ()
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
            function I3_1()
            {
                (I3_1.init)();
                this.constructor = I3_1;
            };
            c = I3_1;
            tree_set([
                T
            ],ct,c);
            I3_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                I3_1.CustomAttributes = [];
                I3_1.Methods = [];
                I3_1.BaseType = null;
                I3_1.FullName = "I3`1";
                I3_1.Assembly = asm;
                I3_1.Interfaces = [
                    (asm1.I)()
                ];
                I3_1.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(I3_1) != -1 ? t : null; } catch (e) { return false; } };
                I3_1.IsValueType = false;
                I3_1.IsPrimitive = false;
                I3_1.IsInterface = true;
                I3_1.IsGenericTypeDefinition = true;
                I3_1.IsNullable = false;
                I3_1.ArrayType = Array;
                I3_1.MetadataName = "asm1.t200000b";
                I3_1.GenericArguments = {};
                (I3_1.GenericArguments)["asm1.t200000b"] = [
                    T
                ];
                I3_1.prototype.vtable = {};
                I3_1.prototype.ifacemap = {};
            };
            I3_1.prototype = {};
            return c;
        };
    })();
    (asm)["X`1"] = (function ()
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
            function X_1()
            {
                (X_1.init)();
                this.constructor = X_1;
            };
            c = X_1;
            tree_set([
                T
            ],ct,c);
            X_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                X_1.CustomAttributes = [];
                X_1.Methods = [];
                X_1.BaseType = ((asm0)["System.Object"])();
                X_1.FullName = "X`1";
                X_1.Assembly = asm;
                X_1.Interfaces = [
                    ((asm1)["I3`1"])(T),
                    (asm1.I)()
                ];
                X_1.IsInst = function (t) { return t instanceof X_1 ? t : null; };
                X_1.IsValueType = false;
                X_1.IsPrimitive = false;
                X_1.IsInterface = false;
                X_1.IsGenericTypeDefinition = true;
                X_1.IsNullable = false;
                X_1.ArrayType = Array;
                X_1.MetadataName = "asm1.t200000c";
                X_1.GenericArguments = {};
                (X_1.GenericArguments)["asm1.t200000c"] = [
                    T
                ];
                (X_1.GenericArguments)["asm0.t2000002"] = [];
                X_1.prototype.vtable = {
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
                X_1.prototype.ifacemap = {};
                tree_set([
                    ((asm1)["I3`1"])(T),
                    T
                ],X_1.prototype.ifacemap,{});
                tree_set([
                    (asm1.I)()
                ],X_1.prototype.ifacemap,{});
            };
            X_1.prototype = new (((asm0)["System.Object"])())();
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
                Program.MetadataName = "asm1.t200000d";
                Program.GenericArguments = {};
                (Program.GenericArguments)["asm1.t200000d"] = [];
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
