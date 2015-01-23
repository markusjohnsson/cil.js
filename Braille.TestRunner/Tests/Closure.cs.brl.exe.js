var asm1; (function (asm)
{
    asm.FullName = "Closure.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* String get_Prop()*/
    asm.x600000c = function get_Prop(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld String <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A<Prop>k__BackingField"];
    };;
    /* Void set_Prop(System.String)*/
    asm.x600000d = function set_Prop(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <Prop>k__BackingField*/
        (arg0)["A<Prop>k__BackingField"] = arg1;
        /* IL_07: ret */
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
    /* Void Invoke()*/
    asm.x6000010 = function Invoke()
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
    asm.x600000f = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* static Void Main()*/
    asm.x6000011_init = function ()
    {
        (((asm1)["Program+<>c__DisplayClass2"])().init)();
        ((asm1.A)().init)();
        ((asm1.X)().init)();
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
        var t2;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var loc2;
        var loc1;
        var loc0;
        t0 = ((asm1)["Program+<>c__DisplayClass2"])();
        t1 = (asm1.A)();
        t2 = (asm1.X)();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.2 */
        loc2 = newobj(t0,asm1.x6000013,[
            null
        ]);
        /* IL_06: ldloc.2 */
        st_04 = loc2;
        /* IL_07: newobj Void .ctor()*/
        /* IL_0C: stloc.1 */
        loc1 = newobj(t1,asm1.x600000e,[
            null
        ]);
        /* IL_0D: ldloc.1 */
        st_02 = loc1;
        /* IL_0E: ldstr hello*/
        st_03 = new_string("hello");
        /* IL_13: callvirt Void set_Prop(System.String)*/
        (asm1.x600000d)(st_02,st_03);
        /* IL_18: ldloc.1 */
        st_05 = loc1;
        /* IL_19: stfld A a*/
        st_04.a = st_05;
        /* IL_1E: ldloc.2 */
        /* IL_1F: ldnull */
        /* IL_20: stfld A b*/
        loc2.b = null;
        /* IL_25: ldloc.2 */
        /* IL_27: ldftn Void <Main>b__1()*/
        /* IL_2C: newobj Void .ctor(System.Object, System.IntPtr)*/
        /* IL_31: stloc.0 */
        loc0 = newobj(t2,asm1.x600000f,[
            null,
            loc2,
            asm1.x6000014
        ]);
        /* IL_32: ldloc.0 */
        /* IL_33: callvirt Void Invoke()*/
        (loc0._methodPtr.apply)(null,((loc0._target) ? ([
            loc0._target
        ]) : ([])));
        /* IL_38: ldloc.2 */
        /* IL_39: ldfld A b*/
        /* IL_3E: callvirt String get_Prop()*/
        /* IL_43: call Void Log(System.Object)*/
        (asm1.x6000001)((asm1.x600000c)(loc2.b));
        /* IL_48: ret */
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
    /* Void <Main>b__1()*/
    asm.x6000014 = function _Main_b__1(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld A a*/
        /* IL_07: stfld A b*/
        arg0.b = arg0.a;
        /* IL_0C: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000013 = function _ctor(arg0)
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
                A.Methods = [
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
                (A.prototype)["A<Prop>k__BackingField"] = null;
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
    asm.X = (function ()
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
            function X()
            {
                (X.init)();
                this.constructor = X;
            };
            c = X;
            ct = c;
            X.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                X.CustomAttributes = [];
                X.Methods = [
                    [
                        asm1,
                        "x6000010",
                        "Invoke"
                    ]
                ];
                X.BaseType = ((asm0)["System.MulticastDelegate"])();
                X.FullName = "X";
                X.Assembly = asm;
                X.Interfaces = [];
                X.IsInst = function (t) { return t instanceof X ? t : null; };
                X.IsValueType = false;
                X.IsPrimitive = false;
                X.IsInterface = false;
                X.IsGenericTypeDefinition = false;
                X.IsNullable = false;
                X.ArrayType = Array;
                X.MetadataName = "asm1.t2000008";
                X.GenericArguments = {};
                (X.GenericArguments)["asm1.t2000008"] = [];
                (X.GenericArguments)["asm0.t2000028"] = [];
                (X.GenericArguments)["asm0.t2000027"] = [];
                (X.GenericArguments)["asm0.t2000002"] = [];
                X.prototype._invocationList = null;
                X.prototype._methodPtr = null;
                X.prototype._target = null;
                X.prototype.vtable = {
                    'asm1.x6000010': function ()
                    {
                        return asm1.x6000010;
                    },
                    'asm0.x6000073': function ()
                    {
                        return asm0.x600007c;
                    },
                    'asm0.x6000072': function ()
                    {
                        return asm0.x600007d;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000074;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000077;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
                X.prototype.ifacemap = {};
            };
            X.prototype = {};
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
    (asm)["Program+<>c__DisplayClass2"] = (function ()
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
            function __c__DisplayClass2()
            {
                (__c__DisplayClass2.init)();
                this.constructor = __c__DisplayClass2;
            };
            c = __c__DisplayClass2;
            ct = c;
            __c__DisplayClass2.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                __c__DisplayClass2.CustomAttributes = [];
                __c__DisplayClass2.Methods = [
                    [
                        asm1,
                        "x6000014",
                        "<Main>b__1"
                    ]
                ];
                __c__DisplayClass2.BaseType = ((asm0)["System.Object"])();
                __c__DisplayClass2.FullName = "Program+<>c__DisplayClass2";
                __c__DisplayClass2.Assembly = asm;
                __c__DisplayClass2.Interfaces = [];
                __c__DisplayClass2.IsInst = function (t) { return t instanceof __c__DisplayClass2 ? t : null; };
                __c__DisplayClass2.IsValueType = false;
                __c__DisplayClass2.IsPrimitive = false;
                __c__DisplayClass2.IsInterface = false;
                __c__DisplayClass2.IsGenericTypeDefinition = false;
                __c__DisplayClass2.IsNullable = false;
                __c__DisplayClass2.ArrayType = Array;
                __c__DisplayClass2.MetadataName = "asm1.t200000a";
                __c__DisplayClass2.GenericArguments = {};
                (__c__DisplayClass2.GenericArguments)["asm1.t200000a"] = [];
                (__c__DisplayClass2.GenericArguments)["asm0.t2000002"] = [];
                __c__DisplayClass2.prototype.a = null;
                __c__DisplayClass2.prototype.b = null;
                __c__DisplayClass2.prototype.vtable = {
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
                __c__DisplayClass2.prototype.ifacemap = {};
            };
            __c__DisplayClass2.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
