var asm1; (function (asm)
{
    asm.FullName = "PrimitiveEquals.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
        (((asm0)["System.Byte"])().init)();
        (((asm0)["System.Int32"])().init)();
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
        t0 = ((asm0)["System.Byte"])();
        t1 = ((asm0)["System.Int32"])();
        t2 = ((asm0)["System.SByte"])();
        t3 = ((asm0)["System.Boolean"])();
        /* IL_00: ldc.i4.0 */
        /* IL_01: box System.Byte*/
        /* IL_06: ldc.i4.0 */
        /* IL_07: box System.Byte*/
        /* IL_0C: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        },{
            'boxed': (0|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_11: ldc.i4.0 */
        /* IL_12: box System.Byte*/
        /* IL_17: ldc.i4.1 */
        /* IL_18: box System.Byte*/
        /* IL_1D: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        },{
            'boxed': (1|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_22: ldc.i4.1 */
        /* IL_23: box System.Byte*/
        /* IL_28: ldc.i4.1 */
        /* IL_29: box System.Int32*/
        /* IL_2E: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (1|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        },{
            'boxed': (1|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_33: ldc.i4.0 */
        /* IL_34: box System.Byte*/
        /* IL_39: ldc.i4.0 */
        /* IL_3A: box System.SByte*/
        /* IL_3F: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        },{
            'boxed': (0|0),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_44: ldc.i4.0 */
        /* IL_45: box System.SByte*/
        /* IL_4A: ldc.i4.0 */
        /* IL_4B: box System.Byte*/
        /* IL_50: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        },{
            'boxed': (0|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_55: ldc.i4.0 */
        /* IL_56: box System.SByte*/
        /* IL_5B: ldc.i4.1 */
        /* IL_5C: box System.Byte*/
        /* IL_61: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        },{
            'boxed': (1|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_66: ldc.i4.1 */
        /* IL_67: box System.SByte*/
        /* IL_6C: ldc.i4 1000*/
        /* IL_71: box System.Int32*/
        /* IL_76: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (1|0),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        },{
            'boxed': (1000|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_7B: ldc.i4.0 */
        /* IL_7C: box System.SByte*/
        /* IL_81: ldc.i4.0 */
        /* IL_82: box System.SByte*/
        /* IL_87: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        },{
            'boxed': (0|0),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_8C: ldc.i4 255*/
        /* IL_91: box System.Byte*/
        /* IL_96: ldc.i4.m1 */
        /* IL_97: box System.SByte*/
        /* IL_9C: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (255|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        },{
            'boxed': (-1|0),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_A1: ldc.i4.0 */
        /* IL_A2: box System.SByte*/
        /* IL_A7: ldc.i4.1 */
        /* IL_A8: box System.Byte*/
        /* IL_AD: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        },{
            'boxed': (1|0),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_B2: ldc.i4.1 */
        /* IL_B3: box System.SByte*/
        /* IL_B8: ldc.i4 1000*/
        /* IL_BD: box System.Int32*/
        /* IL_C2: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (1|0),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        },{
            'boxed': (1000|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_C7: ldc.i4.0 */
        /* IL_C8: box System.SByte*/
        /* IL_CD: ldc.i4.0 */
        /* IL_CE: box System.SByte*/
        /* IL_D3: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        },{
            'boxed': (0|0),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_D8: ldc.i4.1 */
        /* IL_D9: box System.Boolean*/
        /* IL_DE: ldc.i4.1 */
        /* IL_DF: box System.Boolean*/
        /* IL_E4: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (1|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        },{
            'boxed': (1|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_E9: ldc.i4.1 */
        /* IL_EA: box System.Boolean*/
        /* IL_EF: ldc.i4.0 */
        /* IL_F0: box System.Boolean*/
        /* IL_F5: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (1|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        },{
            'boxed': (0|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_FA: ldc.i4.0 */
        /* IL_FB: box System.Boolean*/
        /* IL_100: ldc.i4.1 */
        /* IL_101: box System.Boolean*/
        /* IL_106: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        },{
            'boxed': (1|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_10B: ldc.i4.0 */
        /* IL_10C: box System.Boolean*/
        /* IL_111: ldc.i4.0 */
        /* IL_112: box System.Boolean*/
        /* IL_117: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        },{
            'boxed': (0|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_11C: ret */
        return ;
    };
    /* static Void Test(System.Object, System.Object)*/
    asm.x600000d_init = function ()
    {
        (((asm0)["System.Boolean"])().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0,arg1)
    {
        (asm.x600000d_init.apply)(this,arguments);
        return (asm.x600000d_.apply)(this,arguments);
    };;
    asm.x600000d_ = function Test(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.Boolean"])();
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: callvirt Boolean Equals(System.Object)*/
        /* IL_07: box System.Boolean*/
        /* IL_0C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((arg0.vtable)["asm0.x6000008"])())(convert_box_to_pointer_as_needed(arg0),arg1),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_11: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
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
