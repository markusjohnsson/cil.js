var asm1; (function (asm)
{
    asm.FullName = "IsInstGenericSubclass.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
        (asm1.x600000e)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000f)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000f)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000012_init = function ()
    {
        ((asm1.A)().init)();
        ((asm1.D)().init)();
        ((asm1.E)().init)();
        ((asm1.B)().init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function ()
    {
        (asm.x6000012_init.apply)(this,arguments);
        return (asm.x6000012_.apply)(this,arguments);
    };;
    asm.x6000012_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        t0 = (asm1.A)();
        t1 = (asm1.D)();
        t2 = (asm1.E)();
        t3 = (asm1.B)();
        /* IL_00: call Void TestCreate[A]()*/
        ((asm1.x6000013)((asm1.A)()))();
        /* IL_05: newobj Void .ctor()*/
        /* IL_0A: call Void Test[A](C`1[A])*/
        ((asm1.x6000015)((asm1.A)()))(newobj(t1,asm1.x6000010,[
            null
        ]));
        /* IL_0F: newobj Void .ctor()*/
        /* IL_14: call Void Test[B](C`1[B])*/
        ((asm1.x6000015)((asm1.B)()))(newobj(t2,asm1.x6000011,[
            null
        ]));
        /* IL_19: newobj Void .ctor()*/
        /* IL_1E: call Void Test[A](C`1[A])*/
        ((asm1.x6000015)((asm1.A)()))(newobj(t1,asm1.x6000010,[
            null
        ]));
        /* IL_23: newobj Void .ctor()*/
        /* IL_28: call Void Test[B](C`1[B])*/
        ((asm1.x6000015)((asm1.B)()))(newobj(t2,asm1.x6000011,[
            null
        ]));
        /* IL_2D: ret */
        return ;
    };
    /* static Void TestCreate[T]()*/
    asm.x6000013_init = function (T)
    {
        return function ()
        {
            ((asm1.D)().init)();
            (((asm1)["C`1"])(T).init)();
        };
    };;
    asm.x6000013 = function (T)
    {
        return function ()
        {
            ((asm.x6000013_init)(T).apply)(this,arguments);
            return ((asm.x6000013_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000013_ = function (T)
    {
        return function TestCreate()
        {
            var t0;
            var t1;
            var t2;
            var loc0;
            t0 = (asm1.D)();
            t1 = T;
            t2 = ((asm1)["C`1"])(T);
            /* IL_00: newobj Void .ctor()*/
            /* IL_05: castclass C`1[T]*/
            /* IL_0A: stloc.0 */
            loc0 = cast_class(newobj(t0,asm1.x6000010,[
                null
            ]),t2);
            /* IL_0B: ldloc.0 */
            /* IL_0C: call Void Test[T](C`1[T])*/
            ((asm1.x6000015)(T))(loc0);
            /* IL_11: ret */
            return ;
        };
    };
    /* static Void Test(C)*/
    asm.x6000014_init = function ()
    {
        ((asm1.A)().init)();
        (((asm1)["C`1"])((asm1.A)()).init)();
        (((asm0)["System.Boolean"])().init)();
        ((asm1.B)().init)();
        (((asm1)["C`1"])((asm1.B)()).init)();
        asm.x6000014 = asm.x6000014_;
    };;
    asm.x6000014 = function (arg0)
    {
        (asm.x6000014_init.apply)(this,arguments);
        return (asm.x6000014_.apply)(this,arguments);
    };;
    asm.x6000014_ = function Test(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        t0 = (asm1.A)();
        t1 = ((asm1)["C`1"])((asm1.A)());
        t2 = ((asm0)["System.Boolean"])();
        t3 = (asm1.B)();
        t4 = ((asm1)["C`1"])((asm1.B)());
        /* IL_00: ldarg.0 */
        /* IL_01: isinst C`1[A]*/
        /* IL_06: ldnull */
        /* IL_08: cgt.un */
        /* IL_09: box System.Boolean*/
        /* IL_0E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((t1.IsInst)(arg0) !== null) ? (1) : (0)),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_13: ldarg.0 */
        /* IL_14: isinst C`1[B]*/
        /* IL_19: ldnull */
        /* IL_1B: cgt.un */
        /* IL_1C: box System.Boolean*/
        /* IL_21: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((t4.IsInst)(arg0) !== null) ? (1) : (0)),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_26: ldarg.0 */
        /* IL_27: ldnull */
        /* IL_29: ceq */
        /* IL_2A: ldc.i4.0 */
        /* IL_2C: ceq */
        /* IL_2D: box System.Boolean*/
        /* IL_32: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0)),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_37: ret */
        return ;
    };
    /* static Void Test[T](C`1[T])*/
    asm.x6000015_init = function (T)
    {
        return function ()
        {
            ((asm1.A)().init)();
            (((asm1)["C`1"])((asm1.A)()).init)();
            (((asm0)["System.Boolean"])().init)();
            ((asm1.B)().init)();
            (((asm1)["C`1"])((asm1.B)()).init)();
            asm.x6000015 = asm.x6000015_;
        };
    };;
    asm.x6000015 = function (T)
    {
        return function (arg0)
        {
            ((asm.x6000015_init)(T).apply)(this,arguments);
            return ((asm.x6000015_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000015_ = function (T)
    {
        return function Test(arg0)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            t0 = (asm1.A)();
            t1 = ((asm1)["C`1"])((asm1.A)());
            t2 = ((asm0)["System.Boolean"])();
            t3 = (asm1.B)();
            t4 = ((asm1)["C`1"])((asm1.B)());
            /* IL_00: ldarg.0 */
            /* IL_01: isinst C`1[A]*/
            /* IL_06: ldnull */
            /* IL_08: cgt.un */
            /* IL_09: box System.Boolean*/
            /* IL_0E: call Void Log(System.Object)*/
            (asm1.x6000001)({
                'boxed': (((t1.IsInst)(arg0) !== null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
            /* IL_13: ldarg.0 */
            /* IL_14: isinst C`1[B]*/
            /* IL_19: ldnull */
            /* IL_1B: cgt.un */
            /* IL_1C: box System.Boolean*/
            /* IL_21: call Void Log(System.Object)*/
            (asm1.x6000001)({
                'boxed': (((t4.IsInst)(arg0) !== null) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
            /* IL_26: ldarg.0 */
            /* IL_27: ldnull */
            /* IL_29: ceq */
            /* IL_2A: ldc.i4.0 */
            /* IL_2C: ceq */
            /* IL_2D: box System.Boolean*/
            /* IL_32: call Void Log(System.Object)*/
            (asm1.x6000001)({
                'boxed': ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
            /* IL_37: ldarg.0 */
            /* IL_38: ldnull */
            /* IL_3A: ceq */
            /* IL_3B: ldc.i4.0 */
            /* IL_3D: ceq */
            /* IL_3E: box System.Boolean*/
            /* IL_43: call Void Log(System.Object)*/
            (asm1.x6000001)({
                'boxed': ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0)),
                'type': t2,
                'vtable': t2.prototype.vtable,
                'ifacemap': t2.prototype.ifacemap
            });
            /* IL_48: ret */
            return ;
        };
    };
    /* Void .ctor()*/
    asm.x6000016 = function _ctor(arg0)
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
                B.BaseType = ((asm0)["System.Object"])();
                B.FullName = "B";
                B.Assembly = asm;
                B.Interfaces = [];
                B.IsInst = function (t) { return t instanceof B ? t : null; };
                B.IsValueType = false;
                B.IsPrimitive = false;
                B.IsInterface = false;
                B.IsGenericTypeDefinition = false;
                B.IsNullable = false;
                B.ArrayType = Array;
                B.MetadataName = "asm1.t2000008";
                B.GenericArguments = {};
                (B.GenericArguments)["asm1.t2000008"] = [];
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
            };
            B.prototype = new (((asm0)["System.Object"])())();
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
                C.MetadataName = "asm1.t2000009";
                C.GenericArguments = {};
                (C.GenericArguments)["asm1.t2000009"] = [];
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
                C_1.CustomAttributes = [];
                C_1.Methods = [];
                C_1.BaseType = (asm1.C)();
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
                C_1.MetadataName = "asm1.t200000a";
                C_1.GenericArguments = {};
                (C_1.GenericArguments)["asm1.t200000a"] = [
                    T
                ];
                (C_1.GenericArguments)["asm1.t2000009"] = [];
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
            C_1.prototype = new ((asm1.C)())();
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
                D.BaseType = ((asm1)["C`1"])((asm1.A)());
                D.FullName = "D";
                D.Assembly = asm;
                D.Interfaces = [];
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
                (D.GenericArguments)["asm1.t200000a"] = [
                    (asm1.A)()
                ];
                (D.GenericArguments)["asm1.t2000009"] = [];
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
            };
            D.prototype = new (((asm1)["C`1"])((asm1.A)()))();
            return c;
        };
    })();
    asm.E = (function ()
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
            function E()
            {
                (E.init)();
                this.constructor = E;
            };
            c = E;
            ct = c;
            E.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                E.CustomAttributes = [];
                E.Methods = [];
                E.BaseType = ((asm1)["C`1"])((asm1.B)());
                E.FullName = "E";
                E.Assembly = asm;
                E.Interfaces = [];
                E.IsInst = function (t) { return t instanceof E ? t : null; };
                E.IsValueType = false;
                E.IsPrimitive = false;
                E.IsInterface = false;
                E.IsGenericTypeDefinition = false;
                E.IsNullable = false;
                E.ArrayType = Array;
                E.MetadataName = "asm1.t200000c";
                E.GenericArguments = {};
                (E.GenericArguments)["asm1.t200000c"] = [];
                (E.GenericArguments)["asm1.t200000a"] = [
                    (asm1.B)()
                ];
                (E.GenericArguments)["asm1.t2000009"] = [];
                (E.GenericArguments)["asm0.t2000002"] = [];
                E.prototype.vtable = {
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
                E.prototype.ifacemap = {};
            };
            E.prototype = new (((asm1)["C`1"])((asm1.B)()))();
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
    asm.entryPoint = asm.x6000012;
})(asm1 || (asm1 = {}));
