var asm1; (function (asm)
{
    asm.FullName = "GenericClassBasics.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    asm.x600000c = function get_Prop(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld T <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A_1<Prop>k__BackingField"];
    };;
    /* Void set_Prop(T)*/
    asm.x600000d = function set_Prop(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld T <Prop>k__BackingField*/
        (arg0)["A_1<Prop>k__BackingField"] = arg1;
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
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
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
        ((asm1.IntWrapper)().init)();
        (((asm1)["A`1"])((asm1.IntWrapper)()).init)();
        ((asm1.StringWrapper)().init)();
        (((asm1)["A`1"])((asm1.StringWrapper)()).init)();
        (((asm0)["System.Int32"])().init)();
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
        var t3;
        var t4;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var loc0;
        var loc2;
        var loc1;
        var loc3;
        t0 = (asm1.IntWrapper)();
        t1 = ((asm1)["A`1"])((asm1.IntWrapper)());
        t2 = (asm1.StringWrapper)();
        t3 = ((asm1)["A`1"])((asm1.StringWrapper)());
        t4 = ((asm0)["System.Int32"])();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = newobj(t1,asm1.x600000e,[
            null
        ]);
        /* IL_06: ldloc.0 */
        st_04 = loc0;
        /* IL_07: newobj Void .ctor()*/
        /* IL_0C: stloc.2 */
        loc2 = newobj(t0,asm1.x600000f,[
            null
        ]);
        /* IL_0D: ldloc.2 */
        st_02 = loc2;
        /* IL_0E: ldc.i4.s 123*/
        st_03 = (123|0);
        /* IL_10: stfld Int32 Value*/
        st_02.Value = st_03;
        /* IL_15: ldloc.2 */
        st_05 = loc2;
        /* IL_16: callvirt Void set_Prop(IntWrapper)*/
        (asm1.x600000d)(st_04,st_05);
        /* IL_1B: newobj Void .ctor()*/
        /* IL_20: stloc.1 */
        loc1 = newobj(t3,asm1.x600000e,[
            null
        ]);
        /* IL_21: ldloc.1 */
        st_0A = loc1;
        /* IL_22: newobj Void .ctor()*/
        /* IL_27: stloc.3 */
        loc3 = newobj(t2,asm1.x6000010,[
            null
        ]);
        /* IL_28: ldloc.3 */
        st_08 = loc3;
        /* IL_29: ldstr Hello*/
        st_09 = new_string("Hello");
        /* IL_2E: stfld String Value*/
        st_08.Value = st_09;
        /* IL_33: ldloc.3 */
        st_0B = loc3;
        /* IL_34: callvirt Void set_Prop(StringWrapper)*/
        (asm1.x600000d)(st_0A,st_0B);
        /* IL_39: ldloc.0 */
        /* IL_3A: callvirt IntWrapper get_Prop()*/
        /* IL_3F: ldfld Int32 Value*/
        /* IL_44: box System.Int32*/
        /* IL_49: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000c)(loc0).Value,
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        });
        /* IL_4E: ldloc.1 */
        /* IL_4F: callvirt StringWrapper get_Prop()*/
        /* IL_54: ldfld String Value*/
        /* IL_59: call Void Log(System.Object)*/
        (asm1.x6000001)((asm1.x600000c)(loc1).Value);
        /* IL_5E: ret */
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
                        "x600000c",
                        "get_Prop"
                    ],
                    [
                        asm1,
                        "x600000d",
                        "set_Prop"
                    ]
                ];
                A_1.BaseType = ((asm0)["System.Object"])();
                A_1.FullName = "A`1";
                A_1.Assembly = asm;
                A_1.Interfaces = [];
                A_1.IsInst = function (t) { return t instanceof A_1 ? t : null; };
                A_1.IsValueType = false;
                A_1.IsPrimitive = false;
                A_1.IsInterface = false;
                A_1.IsGenericTypeDefinition = true;
                A_1.IsNullable = false;
                A_1.ArrayType = Array;
                A_1.MetadataName = "asm1.t2000007";
                A_1.GenericArguments = {};
                (A_1.GenericArguments)["asm1.t2000007"] = [
                    T
                ];
                (A_1.GenericArguments)["asm0.t2000002"] = [];
                (A_1.prototype)["A_1<Prop>k__BackingField"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
                A_1.prototype.vtable = {
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
            };
            A_1.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.IntWrapper = (function ()
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
            function IntWrapper()
            {
                (IntWrapper.init)();
                this.constructor = IntWrapper;
            };
            c = IntWrapper;
            ct = c;
            IntWrapper.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IntWrapper.CustomAttributes = [];
                IntWrapper.Methods = [];
                IntWrapper.BaseType = ((asm0)["System.Object"])();
                IntWrapper.FullName = "IntWrapper";
                IntWrapper.Assembly = asm;
                IntWrapper.Interfaces = [];
                IntWrapper.IsInst = function (t) { return t instanceof IntWrapper ? t : null; };
                IntWrapper.IsValueType = false;
                IntWrapper.IsPrimitive = false;
                IntWrapper.IsInterface = false;
                IntWrapper.IsGenericTypeDefinition = false;
                IntWrapper.IsNullable = false;
                IntWrapper.ArrayType = Array;
                IntWrapper.MetadataName = "asm1.t2000008";
                IntWrapper.GenericArguments = {};
                (IntWrapper.GenericArguments)["asm1.t2000008"] = [];
                (IntWrapper.GenericArguments)["asm0.t2000002"] = [];
                IntWrapper.prototype.Value = 0;
                IntWrapper.prototype.vtable = {
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
                IntWrapper.prototype.ifacemap = {};
            };
            IntWrapper.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.StringWrapper = (function ()
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
            function StringWrapper()
            {
                (StringWrapper.init)();
                this.constructor = StringWrapper;
            };
            c = StringWrapper;
            ct = c;
            StringWrapper.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                StringWrapper.CustomAttributes = [];
                StringWrapper.Methods = [];
                StringWrapper.BaseType = ((asm0)["System.Object"])();
                StringWrapper.FullName = "StringWrapper";
                StringWrapper.Assembly = asm;
                StringWrapper.Interfaces = [];
                StringWrapper.IsInst = function (t) { return t instanceof StringWrapper ? t : null; };
                StringWrapper.IsValueType = false;
                StringWrapper.IsPrimitive = false;
                StringWrapper.IsInterface = false;
                StringWrapper.IsGenericTypeDefinition = false;
                StringWrapper.IsNullable = false;
                StringWrapper.ArrayType = Array;
                StringWrapper.MetadataName = "asm1.t2000009";
                StringWrapper.GenericArguments = {};
                (StringWrapper.GenericArguments)["asm1.t2000009"] = [];
                (StringWrapper.GenericArguments)["asm0.t2000002"] = [];
                StringWrapper.prototype.Value = null;
                StringWrapper.prototype.vtable = {
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
                StringWrapper.prototype.ifacemap = {};
            };
            StringWrapper.prototype = new (((asm0)["System.Object"])())();
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
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
