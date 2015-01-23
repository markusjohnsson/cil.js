var asm1; (function (asm)
{
    asm.FullName = "PrimitiveToString.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* static Void Main()*/
    asm.x600000c_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.UInt32"])().init)();
        (((asm0)["System.Int64"])().init)();
        (((asm0)["System.UInt64"])().init)();
        (((asm0)["System.Single"])().init)();
        (((asm0)["System.Double"])().init)();
        (((asm0)["System.Byte"])().init)();
        (((asm0)["System.SByte"])().init)();
        (((asm0)["System.Boolean"])().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        (asm.x600000c_init.apply)(this,arguments);
        return (asm.x600000c_.apply)(this,arguments);
    };;
    asm.x600000c_ = function Main()
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
        t0 = ((asm0)["System.Int32"])();
        t1 = ((asm0)["System.UInt32"])();
        t2 = ((asm0)["System.Int64"])();
        t3 = ((asm0)["System.UInt64"])();
        t4 = ((asm0)["System.Single"])();
        t5 = ((asm0)["System.Double"])();
        t6 = ((asm0)["System.Byte"])();
        t7 = ((asm0)["System.SByte"])();
        t8 = ((asm0)["System.Boolean"])();
        /* IL_00: ldc.i4.0 */
        /* IL_01: box System.Int32*/
        /* IL_06: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_0B: ldc.i4.s 111*/
        /* IL_0D: box System.Int32*/
        /* IL_12: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (111|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_17: ldc.i4.s 145*/
        /* IL_19: box System.Int32*/
        /* IL_1E: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (-111|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_23: ldc.i4 -2147483648*/
        /* IL_28: box System.Int32*/
        /* IL_2D: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (-2147483648|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_32: ldc.i4 2147483647*/
        /* IL_37: box System.Int32*/
        /* IL_3C: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (2147483647|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_41: ldc.i4.0 */
        /* IL_42: box System.UInt32*/
        /* IL_47: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_4C: ldc.i4 145*/
        /* IL_51: box System.UInt32*/
        /* IL_56: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (145|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_5B: ldc.i4 222*/
        /* IL_60: box System.UInt32*/
        /* IL_65: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (222|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_6A: ldc.i4.0 */
        /* IL_6B: box System.UInt32*/
        /* IL_70: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_75: ldc.i4.m1 */
        /* IL_76: box System.UInt32*/
        /* IL_7B: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (-1|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_80: ldc.i4.0 */
        /* IL_81: conv.i8 */
        /* IL_82: box System.Int64*/
        /* IL_87: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': conv_i8((0|0)),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_8C: ldc.i4 333*/
        /* IL_91: conv.i8 */
        /* IL_92: box System.Int64*/
        /* IL_97: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': conv_i8((333|0)),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_9C: ldc.i4 -333*/
        /* IL_A1: conv.i8 */
        /* IL_A2: box System.Int64*/
        /* IL_A7: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': conv_i8((-333|0)),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_AC: ldc.i8 -9223372036854775808*/
        /* IL_B5: box System.Int64*/
        /* IL_BA: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': new Uint32Array([
                0x0,
                0x80000000
            ]),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_BF: ldc.i8 9223372036854775807*/
        /* IL_C8: box System.Int64*/
        /* IL_CD: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': new Uint32Array([
                0xFFFFFFFF,
                0x7FFFFFFF
            ]),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_D2: ldc.i4.0 */
        /* IL_D3: conv.i8 */
        /* IL_D4: box System.UInt64*/
        /* IL_D9: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': conv_i8((0|0)),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_DE: ldc.i4 444*/
        /* IL_E3: conv.i8 */
        /* IL_E4: box System.UInt64*/
        /* IL_E9: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': conv_i8((444|0)),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_EE: ldc.i4.0 */
        /* IL_EF: conv.i8 */
        /* IL_F0: box System.UInt64*/
        /* IL_F5: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': conv_i8((0|0)),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_FA: ldc.i4.m1 */
        /* IL_FB: conv.i8 */
        /* IL_FC: box System.UInt64*/
        /* IL_101: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': conv_i8((-1|0)),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_106: ldc.r4 555*/
        /* IL_10B: box System.Single*/
        /* IL_110: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (+555),
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        });
        /* IL_115: ldc.r4 0*/
        /* IL_11A: box System.Single*/
        /* IL_11F: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (+0),
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        });
        /* IL_124: ldc.r4 -555*/
        /* IL_129: box System.Single*/
        /* IL_12E: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (+-555),
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        });
        /* IL_133: ldc.r8 666*/
        /* IL_13C: box System.Double*/
        /* IL_141: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (+666),
            'type': t5,
            'vtable': t5.prototype.vtable,
            'ifacemap': t5.prototype.ifacemap
        });
        /* IL_146: ldc.r8 0*/
        /* IL_14F: box System.Double*/
        /* IL_154: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (+0),
            'type': t5,
            'vtable': t5.prototype.vtable,
            'ifacemap': t5.prototype.ifacemap
        });
        /* IL_159: ldc.r8 -666*/
        /* IL_162: box System.Double*/
        /* IL_167: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (+-666),
            'type': t5,
            'vtable': t5.prototype.vtable,
            'ifacemap': t5.prototype.ifacemap
        });
        /* IL_16C: ldc.i4.0 */
        /* IL_16D: box System.Byte*/
        /* IL_172: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t6,
            'vtable': t6.prototype.vtable,
            'ifacemap': t6.prototype.ifacemap
        });
        /* IL_177: ldc.i4.s 20*/
        /* IL_179: box System.Byte*/
        /* IL_17E: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (20|0),
            'type': t6,
            'vtable': t6.prototype.vtable,
            'ifacemap': t6.prototype.ifacemap
        });
        /* IL_183: ldc.i4.0 */
        /* IL_184: box System.Byte*/
        /* IL_189: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t6,
            'vtable': t6.prototype.vtable,
            'ifacemap': t6.prototype.ifacemap
        });
        /* IL_18E: ldc.i4 255*/
        /* IL_193: box System.Byte*/
        /* IL_198: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (255|0),
            'type': t6,
            'vtable': t6.prototype.vtable,
            'ifacemap': t6.prototype.ifacemap
        });
        /* IL_19D: ldc.i4.s 206*/
        /* IL_19F: box System.SByte*/
        /* IL_1A4: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (-50|0),
            'type': t7,
            'vtable': t7.prototype.vtable,
            'ifacemap': t7.prototype.ifacemap
        });
        /* IL_1A9: ldc.i4.0 */
        /* IL_1AA: box System.SByte*/
        /* IL_1AF: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t7,
            'vtable': t7.prototype.vtable,
            'ifacemap': t7.prototype.ifacemap
        });
        /* IL_1B4: ldc.i4.s 50*/
        /* IL_1B6: box System.SByte*/
        /* IL_1BB: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (50|0),
            'type': t7,
            'vtable': t7.prototype.vtable,
            'ifacemap': t7.prototype.ifacemap
        });
        /* IL_1C0: ldc.i4.s 128*/
        /* IL_1C2: box System.SByte*/
        /* IL_1C7: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (-128|0),
            'type': t7,
            'vtable': t7.prototype.vtable,
            'ifacemap': t7.prototype.ifacemap
        });
        /* IL_1CC: ldc.i4.s 127*/
        /* IL_1CE: box System.SByte*/
        /* IL_1D3: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (127|0),
            'type': t7,
            'vtable': t7.prototype.vtable,
            'ifacemap': t7.prototype.ifacemap
        });
        /* IL_1D8: ldc.i4.1 */
        /* IL_1D9: box System.Boolean*/
        /* IL_1DE: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (1|0),
            'type': t8,
            'vtable': t8.prototype.vtable,
            'ifacemap': t8.prototype.ifacemap
        });
        /* IL_1E3: ldc.i4.0 */
        /* IL_1E4: box System.Boolean*/
        /* IL_1E9: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t8,
            'vtable': t8.prototype.vtable,
            'ifacemap': t8.prototype.ifacemap
        });
        /* IL_1EE: ret */
        return ;
    };
    /* static Void PrintObject(System.Object)*/
    asm.x600000d_init = function ()
    {
        (((asm0)["System.Object"])().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0)
    {
        (asm.x600000d_init.apply)(this,arguments);
        return (asm.x600000d_.apply)(this,arguments);
    };;
    asm.x600000d_ = function PrintObject(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Object"])();
        /* IL_00: ldarg.0 */
        /* IL_01: call Void Log(System.Object)*/
        (asm1.x6000001)(arg0);
        /* IL_06: ldc.i4.1 */
        /* IL_07: newarr System.Object*/
        /* IL_0C: stloc.0 */
        loc0 = new_array(t0,(1|0));
        /* IL_0D: ldloc.0 */
        /* IL_0E: ldc.i4.0 */
        /* IL_0F: ldarg.0 */
        /* IL_10: stelem.ref */
        (loc0.jsarr)[(0|0)] = arg0;
        /* IL_11: ldloc.0 */
        /* IL_12: call Void PrintArray(System.Object[])*/
        (asm1.x600000e)(loc0);
        /* IL_17: ret */
        return ;
    };
    /* static Void PrintArray(System.Object[])*/
    asm.x600000e = function PrintArray(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.0 */
        /* IL_02: ldelem.ref */
        /* IL_03: callvirt String ToString()*/
        /* IL_08: call Void Log(System.Object)*/
        (asm1.x6000001)(((((arg0.jsarr)[(0|0)].vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed((arg0.jsarr)[(0|0)])));
        /* IL_0D: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
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
                Program.MetadataName = "asm1.t2000007";
                Program.GenericArguments = {};
                (Program.GenericArguments)["asm1.t2000007"] = [];
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
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
