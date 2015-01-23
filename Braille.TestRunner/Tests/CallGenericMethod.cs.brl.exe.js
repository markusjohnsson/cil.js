var asm1; (function (asm)
{
    asm.FullName = "CallGenericMethod.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* T get_Prop()*/
    asm.x600000e = function get_Prop(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld T <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A_1<Prop>k__BackingField"];
    };;
    /* Void set_Prop(T)*/
    asm.x600000f = function set_Prop(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld T <Prop>k__BackingField*/
        (arg0)["A_1<Prop>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000011_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.String"])().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        (asm.x6000011_init.apply)(this,arguments);
        return (asm.x6000011_.apply)(this,arguments);
    };;
    asm.x6000011_ = function Main()
    {
        var t0;
        var t1;
        t0 = ((asm0)["System.Int32"])();
        t1 = ((asm0)["System.String"])();
        /* IL_00: ldc.i4.s 123*/
        /* IL_02: call Void Y[System.Int32](System.Int32)*/
        ((asm1.x6000012)(((asm0)["System.Int32"])()))((123|0));
        /* IL_07: ldstr Hello*/
        /* IL_0C: call Void Y[System.String](System.String)*/
        ((asm1.x6000012)(((asm0)["System.String"])()))(new_string("Hello"));
        /* IL_11: ret */
        return ;
    };
    /* static Void Y[T](T)*/
    asm.x6000012_init = function (T)
    {
        return function ()
        {
            (((asm1)["A`1"])(T).init)();
        };
    };;
    asm.x6000012 = function (T)
    {
        return function (arg0)
        {
            ((asm.x6000012_init)(T).apply)(this,arguments);
            return ((asm.x6000012_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000012_ = function (T)
    {
        return function Y(arg0)
        {
            var t0;
            var t1;
            var loc0;
            t0 = T;
            t1 = ((asm1)["A`1"])(T);
            /* IL_00: newobj Void .ctor()*/
            /* IL_05: stloc.0 */
            loc0 = newobj(t1,asm1.x6000010,[
                null
            ]);
            /* IL_06: ldloc.0 */
            /* IL_07: ldarg.0 */
            /* IL_08: callvirt Void set_Prop(T)*/
            (((loc0.vtable)["asm1.x600000f"])())(loc0,arg0);
            /* IL_0D: ldloc.0 */
            /* IL_0E: call Void X[T](I`1[T])*/
            ((asm1.x6000013)(T))(loc0);
            /* IL_13: ret */
            return ;
        };
    };
    /* static Void X[T](I`1[T])*/
    asm.x6000013_init = function (T)
    {
        return function ()
        {
            (((asm1)["I`1"])(T).init)();
        };
    };;
    asm.x6000013 = function (T)
    {
        return function (arg0)
        {
            ((asm.x6000013_init)(T).apply)(this,arguments);
            return ((asm.x6000013_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000013_ = function (T)
    {
        return function X(arg0)
        {
            var t0;
            var t1;
            t0 = T;
            t1 = ((asm1)["I`1"])(T);
            /* IL_00: ldarg.0 */
            /* IL_01: callvirt T get_Prop()*/
            /* IL_06: box T*/
            /* IL_0B: call Void Log(System.Object)*/
            (asm1.x6000001)(box(((((arg0.ifacemap)[t1])[t0].x600000c)())(convert_box_to_pointer_as_needed(arg0)),t0));
            /* IL_10: ret */
            return ;
        };
    };
    /* Void .ctor()*/
    asm.x6000014 = function _ctor(arg0)
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
    (asm)["I`1"] = (function ()
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
            function I_1()
            {
                (I_1.init)();
                this.constructor = I_1;
            };
            c = I_1;
            tree_set([
                T
            ],ct,c);
            I_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                I_1.CustomAttributes = [];
                I_1.Methods = [
                    [
                        asm1,
                        "x600000c",
                        "get_Prop"
                    ],
                    [
                        asm1,
                        "x600000d",
                        "set_Prop"
                    ]
                ];
                I_1.BaseType = null;
                I_1.FullName = "I`1";
                I_1.Assembly = asm;
                I_1.Interfaces = [];
                I_1.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(I_1) != -1 ? t : null; } catch (e) { return false; } };
                I_1.IsValueType = false;
                I_1.IsPrimitive = false;
                I_1.IsInterface = true;
                I_1.IsGenericTypeDefinition = true;
                I_1.IsNullable = false;
                I_1.ArrayType = Array;
                I_1.MetadataName = "asm1.t2000007";
                I_1.GenericArguments = {};
                (I_1.GenericArguments)["asm1.t2000007"] = [
                    T
                ];
                I_1.prototype.vtable = {
                    'asm1.x600000c': function ()
                    {
                        return asm1.x600000c;
                    },
                    'asm1.x600000d': function ()
                    {
                        return asm1.x600000d;
                    }
                };
                I_1.prototype.ifacemap = {};
            };
            I_1.prototype = {};
            return c;
        };
    })();
    (asm)["A`1"] = (function ()
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
            function A_1()
            {
                (A_1.init)();
                this.constructor = A_1;
            };
            c = A_1;
            tree_set([
                T
            ],ct,c);
            A_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                A_1.CustomAttributes = [];
                A_1.Methods = [
                    [
                        asm1,
                        "x600000e",
                        "get_Prop"
                    ],
                    [
                        asm1,
                        "x600000f",
                        "set_Prop"
                    ]
                ];
                A_1.BaseType = ((asm0)["System.Object"])();
                A_1.FullName = "A`1";
                A_1.Assembly = asm;
                A_1.Interfaces = [
                    ((asm1)["I`1"])(T)
                ];
                A_1.IsInst = function (t) { return t instanceof A_1 ? t : null; };
                A_1.IsValueType = false;
                A_1.IsPrimitive = false;
                A_1.IsInterface = false;
                A_1.IsGenericTypeDefinition = true;
                A_1.IsNullable = false;
                A_1.ArrayType = Array;
                A_1.MetadataName = "asm1.t2000008";
                A_1.GenericArguments = {};
                (A_1.GenericArguments)["asm1.t2000008"] = [
                    T
                ];
                (A_1.GenericArguments)["asm0.t2000002"] = [];
                (A_1.prototype)["A_1<Prop>k__BackingField"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
                A_1.prototype.vtable = {
                    'asm1.x600000e': function ()
                    {
                        return asm1.x600000e;
                    },
                    'asm1.x600000f': function ()
                    {
                        return asm1.x600000f;
                    },
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
                A_1.prototype.ifacemap = {};
                tree_set([
                    ((asm1)["I`1"])(T),
                    T
                ],A_1.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x600000e;
                    },
                    'x600000d': function ()
                    {
                        return asm1.x600000f;
                    }
                });
            };
            A_1.prototype = new (((asm0)["System.Object"])())();
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
                Program.MetadataName = "asm1.t2000009";
                Program.GenericArguments = {};
                (Program.GenericArguments)["asm1.t2000009"] = [];
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
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
