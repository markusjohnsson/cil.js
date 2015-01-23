var asm1; (function (asm)
{
    asm.FullName = "Nullable.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
        ((asm1.A)().init)();
        (((asm0)["System.Nullable`1"])((asm1.A)()).init)();
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
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        var loc6;
        t0 = (asm1.A)();
        t1 = ((asm0)["System.Nullable`1"])((asm1.A)());
        loc0 = new ((asm1.A)())();
        loc1 = new ((asm1.A)())();
        loc2 = new (((asm0)["System.Nullable`1"])((asm1.A)()))();
        loc3 = new (((asm0)["System.Nullable`1"])((asm1.A)()))();
        loc4 = new ((asm1.A)())();
        loc5 = new (((asm0)["System.Nullable`1"])((asm1.A)()))();
        loc6 = new ((asm1.A)())();
        /* IL_00: ldloca.s 2*/
        /* IL_03: initobj System.Nullable`1[A]*/
        ({
            'w': function ()
            {
                loc2 = (arguments)[0];
            },
            'r': function ()
            {
                return loc2;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_08: ldloc.2 */
        /* IL_09: call Void Print(System.Nullable`1[A])*/
        (asm1.x600000e)(clone_value(loc2));
        /* IL_0E: ldloca.s 3*/
        /* IL_11: initobj System.Nullable`1[A]*/
        ({
            'w': function ()
            {
                loc3 = (arguments)[0];
            },
            'r': function ()
            {
                return loc3;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_16: ldloc.3 */
        /* IL_17: call Void Print(System.Nullable`1[A])*/
        (asm1.x600000e)(clone_value(loc3));
        /* IL_1C: ldloca.s 0*/
        /* IL_1F: initobj A*/
        ({
            'w': function ()
            {
                loc0 = (arguments)[0];
            },
            'r': function ()
            {
                return loc0;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_24: ldloca.s 0*/
        /* IL_26: ldc.i4.s 33*/
        /* IL_28: stfld Int32 X*/
        ({
            'w': function ()
            {
                loc0 = (arguments)[0];
            },
            'r': function ()
            {
                return loc0;
            }
        }.r)().X = (33|0);
        /* IL_2D: ldloc.0 */
        /* IL_2E: newobj Void .ctor(A)*/
        /* IL_33: call Void Print(System.Nullable`1[A])*/
        (asm1.x600000e)(clone_value(newobj(t1,asm0.x600015a,[
            null,
            clone_value(loc0)
        ])));
        /* IL_38: ldloca.s 4*/
        /* IL_3B: initobj A*/
        ({
            'w': function ()
            {
                loc4 = (arguments)[0];
            },
            'r': function ()
            {
                return loc4;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_40: ldloc.s 4*/
        /* IL_42: newobj Void .ctor(A)*/
        /* IL_47: call Void Print(System.Nullable`1[A])*/
        (asm1.x600000e)(clone_value(newobj(t1,asm0.x600015a,[
            null,
            clone_value(loc4)
        ])));
        /* IL_4C: ldnull */
        /* IL_4D: call Void PrintObject(System.Object)*/
        (asm1.x600000d)(null);
        /* IL_52: ldloca.s 5*/
        /* IL_55: initobj System.Nullable`1[A]*/
        ({
            'w': function ()
            {
                loc5 = (arguments)[0];
            },
            'r': function ()
            {
                return loc5;
            }
        }.w)(((t1.IsValueType) ? (((t1.IsPrimitive) ? ((0|0)) : (new t1()))) : (null)));
        /* IL_5A: ldloc.s 5*/
        /* IL_5C: box System.Nullable`1[A]*/
        /* IL_61: call Void PrintObject(System.Object)*/
        (asm1.x600000d)(((loc5.has_value) ? ({
            'boxed': clone_value(loc5.value),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        }) : (null)));
        /* IL_66: ldloca.s 1*/
        /* IL_69: initobj A*/
        ({
            'w': function ()
            {
                loc1 = (arguments)[0];
            },
            'r': function ()
            {
                return loc1;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_6E: ldloca.s 1*/
        /* IL_70: ldc.i4.s 33*/
        /* IL_72: stfld Int32 X*/
        ({
            'w': function ()
            {
                loc1 = (arguments)[0];
            },
            'r': function ()
            {
                return loc1;
            }
        }.r)().X = (33|0);
        /* IL_77: ldloc.1 */
        /* IL_78: box A*/
        /* IL_7D: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': clone_value(loc1),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_82: ldloca.s 6*/
        /* IL_85: initobj A*/
        ({
            'w': function ()
            {
                loc6 = (arguments)[0];
            },
            'r': function ()
            {
                return loc6;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_8A: ldloc.s 6*/
        /* IL_8C: box A*/
        /* IL_91: call Void PrintObject(System.Object)*/
        (asm1.x600000d)({
            'boxed': clone_value(loc6),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_96: ret */
        return ;
    };
    /* static Void PrintObject(System.Object)*/
    asm.x600000d = function PrintObject(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: unbox.any System.Nullable`1[A]*/
        /* IL_06: call Void Print(System.Nullable`1[A])*/
        (asm1.x600000e)(clone_value(unbox_any(arg0,((asm0)["System.Nullable`1"])((asm1.A)()))));
        /* IL_0B: ret */
        return ;
    };;
    /* static Void Print(System.Nullable`1[A])*/
    asm.x600000e_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0)
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e_.apply)(this,arguments);
    };;
    asm.x600000e_ = function Print(arg0)
    {
        var t0;
        var st_02;
        var __pos_0__;
        t0 = ((asm0)["System.Int32"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarga.s 0*/
                /* IL_02: call Boolean get_HasValue()*/
                /* IL_07: brtrue.s IL_10*/
                
                if ((asm0.x600015b)({
                    'w': function ()
                    {
                        arg0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg0;
                    }
                })){
                    __pos_0__ = 0x10;
                    continue;
                }
                /* IL_09: ldstr false*/
                st_02 = new_string("false");
                /* IL_0E: br.s IL_15*/
                __pos_0__ = 0x15;
                continue;
                case 0x10:
                /* IL_10: ldstr true*/
                st_02 = new_string("true");
                case 0x15:
                /* IL_15: call Void Log(System.Object)*/
                (asm1.x6000001)(st_02);
                /* IL_1A: ldarga.s 0*/
                /* IL_1C: call Boolean get_HasValue()*/
                /* IL_21: brfalse.s IL_39*/
                
                if ((!((asm0.x600015b)({
                    'w': function ()
                    {
                        arg0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg0;
                    }
                })))){
                    __pos_0__ = 0x39;
                    continue;
                }
                /* IL_23: ldarga.s 0*/
                /* IL_25: call A get_Value()*/
                /* IL_2A: ldfld Int32 X*/
                /* IL_2F: box System.Int32*/
                /* IL_34: call Void Log(System.Object)*/
                (asm1.x6000001)({
                    'boxed': (asm0.x600015c)({
                        'w': function ()
                        {
                            arg0 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    }).X,
                    'type': t0,
                    'vtable': t0.prototype.vtable,
                    'ifacemap': t0.prototype.ifacemap
                });
                case 0x39:
                /* IL_39: ret */
                return ;
            }
        }
    };
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
                A.BaseType = ((asm0)["System.ValueType"])();
                A.FullName = "A";
                A.Assembly = asm;
                A.Interfaces = [];
                A.IsInst = function (t) { return t instanceof A ? t : null; };
                A.IsValueType = true;
                A.IsPrimitive = false;
                A.IsInterface = false;
                A.IsGenericTypeDefinition = false;
                A.IsNullable = false;
                A.ArrayType = Array;
                A.MetadataName = "asm1.t2000007";
                A.GenericArguments = {};
                (A.GenericArguments)["asm1.t2000007"] = [];
                (A.GenericArguments)["asm0.t2000006"] = [];
                (A.GenericArguments)["asm0.t2000002"] = [];
                A.prototype.X = 0;
                A.prototype.vtable = {
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
                A.prototype.ifacemap = {};
            };
            A.prototype = {};
            (((asm0)["System.ValueType"])().init)();
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
                Program.MetadataName = "asm1.t2000008";
                Program.GenericArguments = {};
                (Program.GenericArguments)["asm1.t2000008"] = [];
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
