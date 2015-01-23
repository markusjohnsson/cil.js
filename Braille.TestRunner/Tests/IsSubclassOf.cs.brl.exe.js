var asm1; (function (asm)
{
    asm.FullName = "IsSubclassOf.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000d)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000010_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        (asm.x6000010_init.apply)(this,arguments);
        return (asm.x6000010_.apply)(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        t0 = ((asm0)["System.Int32"])();
        /* IL_00: ldc.i4.0 */
        /* IL_01: newarr System.Int32*/
        /* IL_06: call Void Test(System.Object)*/
        (asm1.x6000011)(new_array(t0,(0|0)));
        /* IL_0B: ret */
        return ;
    };
    /* static Void Test(System.Object)*/
    asm.x6000011_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.Boolean"])().init)();
        (((asm0)["System.Object"])().init)();
        (((asm0)["System.ValueType"])().init)();
        ((asm1.A)().init)();
        ((asm1.B)().init)();
        ((asm1.C)().init)();
        ((asm1.D)().init)();
        ((asm1.I)().init)();
        (((asm0)["System.Array"])().init)();
        (((asm0)["System.Array`1"])(((asm0)["System.Int32"])()).init)();
        (((asm0)["System.Array`1"])(((asm0)["System.Object"])()).init)();
        (((asm0)["System.Array`1"])(((asm0)["System.ValueType"])()).init)();
        (((asm0)["System.Array`1"])((asm1.A)()).init)();
        (((asm0)["System.Array`1"])((asm1.B)()).init)();
        (((asm0)["System.Array`1"])((asm1.C)()).init)();
        (((asm0)["System.Array`1"])((asm1.D)()).init)();
        (((asm0)["System.Array`1"])((asm1.I)()).init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function (arg0)
    {
        (asm.x6000011_init.apply)(this,arguments);
        return (asm.x6000011_.apply)(this,arguments);
    };;
    asm.x6000011_ = function Test(arg0)
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
        var t16;
        var t17;
        t0 = ((asm0)["System.Int32"])();
        t1 = ((asm0)["System.Boolean"])();
        t2 = ((asm0)["System.Object"])();
        t3 = ((asm0)["System.ValueType"])();
        t4 = (asm1.A)();
        t5 = (asm1.B)();
        t6 = (asm1.C)();
        t7 = (asm1.D)();
        t8 = (asm1.I)();
        t9 = ((asm0)["System.Array"])();
        t10 = ((asm0)["System.Array`1"])(((asm0)["System.Int32"])());
        t11 = ((asm0)["System.Array`1"])(((asm0)["System.Object"])());
        t12 = ((asm0)["System.Array`1"])(((asm0)["System.ValueType"])());
        t13 = ((asm0)["System.Array`1"])((asm1.A)());
        t14 = ((asm0)["System.Array`1"])((asm1.B)());
        t15 = ((asm0)["System.Array`1"])((asm1.C)());
        t16 = ((asm0)["System.Array`1"])((asm1.D)());
        t17 = ((asm0)["System.Array`1"])((asm1.I)());
        /* IL_00: ldarg.0 */
        /* IL_01: callvirt Type GetType()*/
        /* IL_06: callvirt String get_Name()*/
        /* IL_0B: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x600000a)(arg0).vtable)["asm0.x600003d"])())((asm0.x600000a)(arg0)));
        /* IL_10: ldarg.0 */
        /* IL_11: callvirt Type GetType()*/
        /* IL_16: ldtoken System.Int32*/
        /* IL_1B: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_20: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_25: box System.Boolean*/
        /* IL_2A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_2F: ldarg.0 */
        /* IL_30: callvirt Type GetType()*/
        /* IL_35: ldtoken System.Object*/
        /* IL_3A: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_3F: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_44: box System.Boolean*/
        /* IL_49: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t2))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_4E: ldarg.0 */
        /* IL_4F: callvirt Type GetType()*/
        /* IL_54: ldtoken System.ValueType*/
        /* IL_59: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_5E: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_63: box System.Boolean*/
        /* IL_68: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t3))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_6D: ldarg.0 */
        /* IL_6E: callvirt Type GetType()*/
        /* IL_73: ldtoken A*/
        /* IL_78: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_7D: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_82: box System.Boolean*/
        /* IL_87: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t4))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_8C: ldarg.0 */
        /* IL_8D: callvirt Type GetType()*/
        /* IL_92: ldtoken B*/
        /* IL_97: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_9C: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_A1: box System.Boolean*/
        /* IL_A6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t5))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_AB: ldarg.0 */
        /* IL_AC: callvirt Type GetType()*/
        /* IL_B1: ldtoken C*/
        /* IL_B6: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_BB: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_C0: box System.Boolean*/
        /* IL_C5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t6))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_CA: ldarg.0 */
        /* IL_CB: callvirt Type GetType()*/
        /* IL_D0: ldtoken D*/
        /* IL_D5: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_DA: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_DF: box System.Boolean*/
        /* IL_E4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t7))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_E9: ldarg.0 */
        /* IL_EA: callvirt Type GetType()*/
        /* IL_EF: ldtoken I*/
        /* IL_F4: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_F9: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_FE: box System.Boolean*/
        /* IL_103: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t8))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_108: ldarg.0 */
        /* IL_109: callvirt Type GetType()*/
        /* IL_10E: ldtoken System.Array*/
        /* IL_113: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_118: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_11D: box System.Boolean*/
        /* IL_122: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t9))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_127: ldarg.0 */
        /* IL_128: callvirt Type GetType()*/
        /* IL_12D: ldtoken System.Int32[]*/
        /* IL_132: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_137: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_13C: box System.Boolean*/
        /* IL_141: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t10))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_146: ldarg.0 */
        /* IL_147: callvirt Type GetType()*/
        /* IL_14C: ldtoken System.Object[]*/
        /* IL_151: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_156: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_15B: box System.Boolean*/
        /* IL_160: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t11))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_165: ldarg.0 */
        /* IL_166: callvirt Type GetType()*/
        /* IL_16B: ldtoken System.ValueType[]*/
        /* IL_170: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_175: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_17A: box System.Boolean*/
        /* IL_17F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t12))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_184: ldarg.0 */
        /* IL_185: callvirt Type GetType()*/
        /* IL_18A: ldtoken A[]*/
        /* IL_18F: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_194: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_199: box System.Boolean*/
        /* IL_19E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t13))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_1A3: ldarg.0 */
        /* IL_1A4: callvirt Type GetType()*/
        /* IL_1A9: ldtoken B[]*/
        /* IL_1AE: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_1B3: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_1B8: box System.Boolean*/
        /* IL_1BD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t14))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_1C2: ldarg.0 */
        /* IL_1C3: callvirt Type GetType()*/
        /* IL_1C8: ldtoken C[]*/
        /* IL_1CD: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_1D2: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_1D7: box System.Boolean*/
        /* IL_1DC: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t15))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_1E1: ldarg.0 */
        /* IL_1E2: callvirt Type GetType()*/
        /* IL_1E7: ldtoken D[]*/
        /* IL_1EC: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_1F1: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_1F6: box System.Boolean*/
        /* IL_1FB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t16))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_200: ldarg.0 */
        /* IL_201: callvirt Type GetType()*/
        /* IL_206: ldtoken I[]*/
        /* IL_20B: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_210: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_215: box System.Boolean*/
        /* IL_21A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((asm0.x600000a)(arg0).vtable)["asm0.x60000ae"])())((asm0.x600000a)(arg0),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t17))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_21F: ret */
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
                    (asm1.I)()
                ];
                B.IsInst = function (t) { return t instanceof B ? t : null; };
                B.IsValueType = false;
                B.IsPrimitive = false;
                B.IsInterface = false;
                B.IsGenericTypeDefinition = false;
                B.IsNullable = false;
                B.ArrayType = Array;
                B.MetadataName = "asm1.t2000009";
                B.GenericArguments = {};
                (B.GenericArguments)["asm1.t2000009"] = [];
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
                    (asm1.I)()
                ],B.prototype.ifacemap,{});
            };
            B.prototype = new ((asm1.A)())();
            return c;
        };
    })();
    asm.C = (function ()
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
            function C()
            {
                (C.init)();
                this.constructor = C;
            };
            c = C;
            ct = c;
            C.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                C.CustomAttributes = [];
                C.Methods = [];
                C.BaseType = ((asm0)["System.Object"])();
                C.FullName = "C";
                C.Assembly = asm;
                C.Interfaces = [];
                C.IsInst = function (t) { return t instanceof C ? t : null; };
                C.IsValueType = false;
                C.IsPrimitive = false;
                C.IsInterface = false;
                C.IsGenericTypeDefinition = false;
                C.IsNullable = false;
                C.ArrayType = Array;
                C.MetadataName = "asm1.t200000a";
                C.GenericArguments = {};
                (C.GenericArguments)["asm1.t200000a"] = [];
                (C.GenericArguments)["asm0.t2000002"] = [];
                C.prototype.vtable = {
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
                C.prototype.ifacemap = {};
            };
            C.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.D = (function ()
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
            function D()
            {
                (D.init)();
                this.constructor = D;
            };
            c = D;
            ct = c;
            D.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                D.CustomAttributes = [];
                D.Methods = [];
                D.BaseType = (asm1.B)();
                D.FullName = "D";
                D.Assembly = asm;
                D.Interfaces = [
                    (asm1.I)()
                ];
                D.IsInst = function (t) { return t instanceof D ? t : null; };
                D.IsValueType = false;
                D.IsPrimitive = false;
                D.IsInterface = false;
                D.IsGenericTypeDefinition = false;
                D.IsNullable = false;
                D.ArrayType = Array;
                D.MetadataName = "asm1.t200000b";
                D.GenericArguments = {};
                (D.GenericArguments)["asm1.t200000b"] = [];
                (D.GenericArguments)["asm1.t2000009"] = [];
                (D.GenericArguments)["asm1.t2000007"] = [];
                (D.GenericArguments)["asm0.t2000002"] = [];
                D.prototype.vtable = {
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
                D.prototype.ifacemap = {};
                tree_set([
                    (asm1.I)()
                ],D.prototype.ifacemap,{});
            };
            D.prototype = new ((asm1.B)())();
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
                Program.MetadataName = "asm1.t200000c";
                Program.GenericArguments = {};
                (Program.GenericArguments)["asm1.t200000c"] = [];
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
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
