var asm1; (function (asm)
{
    asm.FullName = "ComplexStaticInitialization.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* static Void .cctor()*/
    asm.x600000d_init = function (T)
    {
        return function ()
        {
            (((asm1)["I`1"])(T).init)();
            (((asm1)["B`1"])(T).init)();
            (((asm0)["Braille.Runtime.UnboundGenericParameter"])().init)();
            (((asm1)["C`1"])(((asm0)["Braille.Runtime.UnboundGenericParameter"])()).init)();
            (((asm0)["System.Type"])().init)();
            (((asm1)["A`1"])(T).init)();
        };
    };;
    asm.x600000d = function (T)
    {
        return function ()
        {
            ((asm.x600000d_init)(T).apply)(this,arguments);
            return ((asm.x600000d_)(T).apply)(this,arguments);
        };
    };;
    asm.x600000d_ = function (T)
    {
        return function _cctor()
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var t4;
            var t5;
            var t6;
            var t7;
            var st_08;
            var st_09;
            var st_0A;
            var st_0B;
            var st_0C;
            var st_0D;
            var st_0E;
            var st_0F;
            var st_10;
            var __pos_0__;
            var loc0;
            
            if (((asm1)["A`1"])(T).FieldHasBeenInitialized){
                return;
            }
            ((asm1)["A`1"])(T).FieldHasBeenInitialized = true;
            t0 = T;
            t1 = ((asm1)["I`1"])(T);
            t2 = ((asm1)["B`1"])(T);
            t3 = ((asm0)["Braille.Runtime.UnboundGenericParameter"])();
            t4 = ((asm0)["Braille.Runtime.UnboundGenericParameter"])();
            t5 = ((asm1)["C`1"])(((asm0)["Braille.Runtime.UnboundGenericParameter"])());
            t6 = ((asm0)["System.Type"])();
            t7 = ((asm1)["A`1"])(T);
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: ldtoken I`1[T]*/
                    /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    /* IL_0A: ldtoken T*/
                    /* IL_0F: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    /* IL_14: callvirt Boolean IsAssignableFrom(System.Type)*/
                    /* IL_19: brtrue.s IL_22*/
                    
                    if (((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t1)).vtable)["asm0.x60000b9"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t1)),(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)))){
                        __pos_0__ = 0x22;
                        continue;
                    }
                    ((asm1.x600000d)(T))();
                    /* IL_1B: newobj Void .ctor()*/
                    st_10 = newobj(t2,asm1.x600000e,[
                        null
                    ]);
                    /* IL_20: br.s IL_50*/
                    __pos_0__ = 0x50;
                    continue;
                    case 0x22:
                    /* IL_22: ldtoken C`1[T]*/
                    /* IL_27: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    st_0C = (asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t5));
                    /* IL_2C: ldc.i4.1 */
                    /* IL_2D: newarr System.Type*/
                    /* IL_32: stloc.0 */
                    loc0 = new_array(t6,(1|0));
                    /* IL_33: ldloc.0 */
                    st_09 = loc0;
                    /* IL_34: ldc.i4.0 */
                    st_0A = (0|0);
                    /* IL_35: ldtoken T*/
                    st_08 = new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0);
                    /* IL_3A: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    st_0B = (asm0.x60000ad)(st_08);
                    /* IL_3F: stelem.ref */
                    (st_09.jsarr)[st_0A] = st_0B;
                    /* IL_40: ldloc.0 */
                    st_0D = loc0;
                    /* IL_41: callvirt Type MakeGenericType(System.Type[])*/
                    st_0E = (((st_0C.vtable)["asm0.x60000b8"])())(st_0C,st_0D);
                    /* IL_46: call Object CreateInstance(System.Type)*/
                    st_0F = (asm0.x6000052)(st_0E);
                    /* IL_4B: castclass A`1[T]*/
                    st_10 = cast_class(st_0F,t7);
                    case 0x50:
                    ((asm1.x600000d)(T))();
                    /* IL_50: stsfld A`1 Instance*/
                    (t7)["Instance"] = st_10;
                    /* IL_55: ret */
                    return ;
                }
            }
        };
    };
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000c)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000c)(arg0);
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
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Boolean IsA[T](System.Object)*/
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
        return function IsA(arg0)
        {
            var t0;
            var t1;
            t0 = T;
            t1 = ((asm1)["A`1"])(T);
            /* IL_00: ldarg.0 */
            /* IL_01: isinst A`1[T]*/
            /* IL_06: ldnull */
            /* IL_08: cgt.un */
            /* IL_09: ret */
            return (((t1.IsInst)(arg0) !== null) ? (1) : (0));
        };
    };
    /* static Void Main()*/
    asm.x6000013_init = function ()
    {
        ((asm1.D)().init)();
        (((asm1)["A`1"])((asm1.D)()).init)();
        (((asm0)["System.Boolean"])().init)();
        ((asm1.E)().init)();
        (((asm1)["A`1"])((asm1.E)()).init)();
        asm.x6000013 = asm.x6000013_;
    };;
    asm.x6000013 = function ()
    {
        (asm.x6000013_init.apply)(this,arguments);
        return (asm.x6000013_.apply)(this,arguments);
    };;
    asm.x6000013_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        t0 = (asm1.D)();
        t1 = ((asm1)["A`1"])((asm1.D)());
        t2 = ((asm0)["System.Boolean"])();
        t3 = (asm1.E)();
        t4 = ((asm1)["A`1"])((asm1.E)());
        ((asm1.x600000d)((asm1.D)()))();
        /* IL_00: ldsfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_05: call Boolean IsA[D](System.Object)*/
        /* IL_0A: box System.Boolean*/
        /* IL_0F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((asm1.x6000012)((asm1.D)()))(t1.Instance),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        ((asm1.x600000d)((asm1.E)()))();
        /* IL_14: ldsfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_19: callvirt Type GetType()*/
        /* IL_1E: callvirt String get_Name()*/
        /* IL_23: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x600000a)(t4.Instance).vtable)["asm0.x600003d"])())((asm0.x600000a)(t4.Instance)));
        ((asm1.x600000d)((asm1.D)()))();
        /* IL_28: ldsfld IKVM.Reflection.GenericFieldInstance*/
        /* IL_2D: callvirt Type GetType()*/
        /* IL_32: callvirt String get_Name()*/
        /* IL_37: call Void Log(System.Object)*/
        (asm1.x6000001)(((((asm0.x600000a)(t1.Instance).vtable)["asm0.x600003d"])())((asm0.x600000a)(t1.Instance)));
        /* IL_3C: ret */
        return ;
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
                I_1.Methods = [];
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
                I_1.prototype.vtable = {};
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
                A_1.Instance = null;
                A_1.CustomAttributes = [];
                A_1.Methods = [];
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
                A_1.MetadataName = "asm1.t2000008";
                A_1.GenericArguments = {};
                (A_1.GenericArguments)["asm1.t2000008"] = [
                    T
                ];
                (A_1.GenericArguments)["asm0.t2000002"] = [];
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
    (asm)["B`1"] = (function ()
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
            function B_1()
            {
                (B_1.init)();
                this.constructor = B_1;
            };
            c = B_1;
            tree_set([
                T
            ],ct,c);
            B_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                B_1.CustomAttributes = [];
                B_1.Methods = [];
                B_1.BaseType = ((asm1)["A`1"])(T);
                B_1.FullName = "B`1";
                B_1.Assembly = asm;
                B_1.Interfaces = [];
                B_1.IsInst = function (t) { return t instanceof B_1 ? t : null; };
                B_1.IsValueType = false;
                B_1.IsPrimitive = false;
                B_1.IsInterface = false;
                B_1.IsGenericTypeDefinition = true;
                B_1.IsNullable = false;
                B_1.ArrayType = Array;
                B_1.MetadataName = "asm1.t2000009";
                B_1.GenericArguments = {};
                (B_1.GenericArguments)["asm1.t2000009"] = [
                    T
                ];
                (B_1.GenericArguments)["asm1.t2000008"] = [
                    T
                ];
                (B_1.GenericArguments)["asm0.t2000002"] = [];
                B_1.prototype.vtable = {
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
                B_1.prototype.ifacemap = {};
            };
            B_1.prototype = new (((asm1)["A`1"])(T))();
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
                C_1.BaseType = ((asm1)["A`1"])(T);
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
                (C_1.GenericArguments)["asm1.t2000008"] = [
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
            };
            C_1.prototype = new (((asm1)["A`1"])(T))();
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
                D.BaseType = ((asm0)["System.Object"])();
                D.FullName = "D";
                D.Assembly = asm;
                D.Interfaces = [
                    ((asm1)["I`1"])((asm1.D)())
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
                    ((asm1)["I`1"])((asm1.D)()),
                    (asm1.D)()
                ],D.prototype.ifacemap,{});
            };
            D.prototype = new (((asm0)["System.Object"])())();
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
                E.BaseType = ((asm0)["System.Object"])();
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
            E.prototype = new (((asm0)["System.Object"])())();
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
    asm.entryPoint = asm.x6000013;
})(asm1 || (asm1 = {}));
