var asm1; (function (asm)
{
    asm.FullName = "InterfaceCallvirtFromGenericClass.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* Int32 Get()*/
    asm.x600000d = function Get(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 x*/
        /* IL_06: ret */
        return arg0.x;
    };;
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void X(T)*/
    asm.x600000f_init = function ()
    {
        ((asm1.I2)().init)();
        (((asm0)["System.Int32"])().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0,arg1)
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function X(arg0,arg1)
    {
        var t0;
        var t1;
        t0 = (asm1.I2)();
        t1 = ((asm0)["System.Int32"])();
        /* IL_00: ldarga.s 1*/
        /* IL_08: callvirt Int32 Get()*/
        /* IL_0D: box System.Int32*/
        /* IL_12: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((((arguments)[0].constructor.GenericArguments)["asm1.t200000a"])[0].prototype.ifacemap)[t0].x600000c)())(dereference_pointer_as_needed({
                'w': function ()
                {
                    arg1 = (arguments)[0];
                },
                'r': function ()
                {
                    return arg1;
                }
            })),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_17: ret */
        return ;
    };
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
        ((asm1.D)().init)();
        (((asm1)["C`1"])((asm1.D)()).init)();
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
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = (asm1.D)();
        t1 = ((asm1)["C`1"])((asm1.D)());
        /* IL_00: newobj Void .ctor()*/
        st_03 = newobj(t1,asm1.x6000010,[
            null
        ]);
        /* IL_05: newobj Void .ctor()*/
        /* IL_0A: stloc.0 */
        loc0 = newobj(t0,asm1.x600000e,[
            null
        ]);
        /* IL_0B: ldloc.0 */
        st_01 = loc0;
        /* IL_0C: ldc.i4.s 101*/
        st_02 = (101|0);
        /* IL_0E: stfld Int32 x*/
        st_01.x = st_02;
        /* IL_13: ldloc.0 */
        st_04 = loc0;
        /* IL_14: call Void X(D)*/
        (asm1.x600000f)(st_03,st_04);
        /* IL_19: ret */
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
                I.MetadataName = "asm1.t2000007";
                I.GenericArguments = {};
                (I.GenericArguments)["asm1.t2000007"] = [];
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
                I2.Methods = [
                    [
                        asm1,
                        "x600000c",
                        "Get"
                    ]
                ];
                I2.BaseType = null;
                I2.FullName = "I2";
                I2.Assembly = asm;
                I2.Interfaces = [];
                I2.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(I2) != -1 ? t : null; } catch (e) { return false; } };
                I2.IsValueType = false;
                I2.IsPrimitive = false;
                I2.IsInterface = true;
                I2.IsGenericTypeDefinition = false;
                I2.IsNullable = false;
                I2.ArrayType = Array;
                I2.MetadataName = "asm1.t2000008";
                I2.GenericArguments = {};
                (I2.GenericArguments)["asm1.t2000008"] = [];
                I2.prototype.vtable = {
                    'asm1.x600000c': function ()
                    {
                        return asm1.x600000c;
                    }
                };
                I2.prototype.ifacemap = {};
            };
            I2.prototype = {};
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
                D.Methods = [
                    [
                        asm1,
                        "x600000d",
                        "Get"
                    ]
                ];
                D.BaseType = ((asm0)["System.Object"])();
                D.FullName = "D";
                D.Assembly = asm;
                D.Interfaces = [
                    (asm1.I2)()
                ];
                D.IsInst = function (t) { return t instanceof D ? t : null; };
                D.IsValueType = false;
                D.IsPrimitive = false;
                D.IsInterface = false;
                D.IsGenericTypeDefinition = false;
                D.IsNullable = false;
                D.ArrayType = Array;
                D.MetadataName = "asm1.t2000009";
                D.GenericArguments = {};
                (D.GenericArguments)["asm1.t2000009"] = [];
                (D.GenericArguments)["asm0.t2000002"] = [];
                D.prototype.x = 0;
                D.prototype.vtable = {
                    'asm1.x600000d': function ()
                    {
                        return asm1.x600000d;
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
                D.prototype.ifacemap = {};
                tree_set([
                    (asm1.I2)()
                ],D.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x600000d;
                    }
                });
            };
            D.prototype = new (((asm0)["System.Object"])())();
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
                C_1.Methods = [
                    [
                        asm1,
                        "x600000f",
                        "X"
                    ]
                ];
                C_1.BaseType = ((asm0)["System.Object"])();
                C_1.FullName = "C`1";
                C_1.Assembly = asm;
                C_1.Interfaces = [
                    (asm1.I)()
                ];
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
                tree_set([
                    (asm1.I)()
                ],C_1.prototype.ifacemap,{});
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
                Program.MetadataName = "asm1.t200000b";
                Program.GenericArguments = {};
                (Program.GenericArguments)["asm1.t200000b"] = [];
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
