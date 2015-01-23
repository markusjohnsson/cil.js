var asm1; (function (asm)
{
    asm.FullName = "IsInstDelegate.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* TResult Invoke(T)*/
    asm.x600000d = function Invoke()
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
    asm.x600000c = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* T Invoke()*/
    asm.x600000f = function Invoke()
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
    asm.x600000e = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* static Void Main(System.String[])*/
    asm.x6000010_init = function ()
    {
        ((asm1.Program)().init)();
        (((asm0)["System.Object"])().init)();
        (((asm1)["FuncX`2"])(((asm0)["System.Object"])(),((asm0)["System.Object"])()).init)();
        (((asm0)["System.Int32"])().init)();
        (((asm1)["FuncX`2"])(((asm0)["System.Int32"])(),((asm0)["System.Object"])()).init)();
        (((asm0)["System.String"])().init)();
        (((asm1)["FuncX`2"])(((asm0)["System.String"])(),((asm0)["System.Object"])()).init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function (arg0)
    {
        (asm.x6000010_init.apply)(this,arguments);
        return (asm.x6000010_.apply)(this,arguments);
    };;
    asm.x6000010_ = function Main(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var __pos_0__;
        var loc0;
        t0 = (asm1.Program)();
        t1 = ((asm0)["System.Object"])();
        t2 = ((asm1)["FuncX`2"])(((asm0)["System.Object"])(),((asm0)["System.Object"])());
        t3 = ((asm0)["System.Int32"])();
        t4 = ((asm1)["FuncX`2"])(((asm0)["System.Int32"])(),((asm0)["System.Object"])());
        t5 = ((asm0)["System.String"])();
        t6 = ((asm1)["FuncX`2"])(((asm0)["System.String"])(),((asm0)["System.Object"])());
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1*/
                /* IL_05: brtrue.s IL_18*/
                
                if ((t0)["CS$<>9__CachedAnonymousMethodDelegate1"]){
                    __pos_0__ = 0x18;
                    continue;
                }
                /* IL_07: ldnull */
                /* IL_09: ldftn Object <Main>b__0(System.Object)*/
                /* IL_0E: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_13: stsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1*/
                (t0)["CS$<>9__CachedAnonymousMethodDelegate1"] = newobj(t2,asm1.x600000c,[
                    null,
                    null,
                    asm1.x6000015
                ]);
                case 0x18:
                /* IL_18: ldsfld FuncX`2 CS$<>9__CachedAnonymousMethodDelegate1*/
                /* IL_1D: stloc.0 */
                loc0 = (t0)["CS$<>9__CachedAnonymousMethodDelegate1"];
                /* IL_1E: ldstr Lambda:*/
                /* IL_23: call Void Log(System.Object)*/
                (asm1.x6000001)(new_string("Lambda:"));
                /* IL_28: ldloc.0 */
                /* IL_29: call Void WriteType(System.Delegate)*/
                (asm1.x6000014)(loc0);
                /* IL_2E: ldstr Method (object):*/
                /* IL_33: call Void Log(System.Object)*/
                (asm1.x6000001)(new_string("Method (object):"));
                /* IL_38: ldnull */
                /* IL_3A: ldftn Object MethodObj(System.Object)*/
                /* IL_3F: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_44: call Void WriteType(System.Delegate)*/
                (asm1.x6000014)(newobj(t2,asm1.x600000c,[
                    null,
                    null,
                    asm1.x6000011
                ]));
                /* IL_49: ldstr Method (object):*/
                /* IL_4E: call Void Log(System.Object)*/
                (asm1.x6000001)(new_string("Method (object):"));
                /* IL_53: ldnull */
                /* IL_55: ldftn Object MethodInt(System.Int32)*/
                /* IL_5A: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_5F: call Void WriteType(System.Delegate)*/
                (asm1.x6000014)(newobj(t4,asm1.x600000c,[
                    null,
                    null,
                    asm1.x6000012
                ]));
                /* IL_64: ldstr Method (object):*/
                /* IL_69: call Void Log(System.Object)*/
                (asm1.x6000001)(new_string("Method (object):"));
                /* IL_6E: ldnull */
                /* IL_70: ldftn Object MethodString(System.String)*/
                /* IL_75: newobj Void .ctor(System.Object, System.IntPtr)*/
                /* IL_7A: call Void WriteType(System.Delegate)*/
                (asm1.x6000014)(newobj(t6,asm1.x600000c,[
                    null,
                    null,
                    asm1.x6000013
                ]));
                /* IL_7F: ret */
                return ;
            }
        }
    };
    /* static Object MethodObj(System.Object)*/
    asm.x6000011 = function MethodObj(arg0)
    {
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* static Object MethodInt(System.Int32)*/
    asm.x6000012 = function MethodInt(arg0)
    {
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* static Object MethodString(System.String)*/
    asm.x6000013 = function MethodString(arg0)
    {
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
    };;
    /* static Void WriteType(System.Delegate)*/
    asm.x6000014_init = function ()
    {
        (((asm0)["System.Object"])().init)();
        (((asm1)["FuncX`1"])(((asm0)["System.Object"])()).init)();
        (((asm1)["FuncX`2"])(((asm0)["System.Object"])(),((asm0)["System.Object"])()).init)();
        (((asm0)["System.String"])().init)();
        (((asm1)["FuncX`2"])(((asm0)["System.String"])(),((asm0)["System.Object"])()).init)();
        (((asm0)["System.Int32"])().init)();
        (((asm1)["FuncX`2"])(((asm0)["System.Int32"])(),((asm0)["System.Object"])()).init)();
        asm.x6000014 = asm.x6000014_;
    };;
    asm.x6000014 = function (arg0)
    {
        (asm.x6000014_init.apply)(this,arguments);
        return (asm.x6000014_.apply)(this,arguments);
    };;
    asm.x6000014_ = function WriteType(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var t6;
        var __pos_0__;
        t0 = ((asm0)["System.Object"])();
        t1 = ((asm1)["FuncX`1"])(((asm0)["System.Object"])());
        t2 = ((asm1)["FuncX`2"])(((asm0)["System.Object"])(),((asm0)["System.Object"])());
        t3 = ((asm0)["System.String"])();
        t4 = ((asm1)["FuncX`2"])(((asm0)["System.String"])(),((asm0)["System.Object"])());
        t5 = ((asm0)["System.Int32"])();
        t6 = ((asm1)["FuncX`2"])(((asm0)["System.Int32"])(),((asm0)["System.Object"])());
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: isinst FuncX`1[System.Object]*/
                /* IL_06: brfalse.s IL_12*/
                
                if ((!((t1.IsInst)(arg0)))){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_08: ldstr FuncX<object>*/
                /* IL_0D: call Void Log(System.Object)*/
                (asm1.x6000001)(new_string("FuncX<object>"));
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: isinst FuncX`2[System.Object,System.Object]*/
                /* IL_18: brfalse.s IL_24*/
                
                if ((!((t2.IsInst)(arg0)))){
                    __pos_0__ = 0x24;
                    continue;
                }
                /* IL_1A: ldstr FuncX<object, object>*/
                /* IL_1F: call Void Log(System.Object)*/
                (asm1.x6000001)(new_string("FuncX<object, object>"));
                case 0x24:
                /* IL_24: ldarg.0 */
                /* IL_25: isinst FuncX`2[System.String,System.Object]*/
                /* IL_2A: brfalse.s IL_36*/
                
                if ((!((t4.IsInst)(arg0)))){
                    __pos_0__ = 0x36;
                    continue;
                }
                /* IL_2C: ldstr FuncX<string, object>*/
                /* IL_31: call Void Log(System.Object)*/
                (asm1.x6000001)(new_string("FuncX<string, object>"));
                case 0x36:
                /* IL_36: ldarg.0 */
                /* IL_37: isinst FuncX`2[System.Int32,System.Object]*/
                /* IL_3C: brfalse.s IL_48*/
                
                if ((!((t6.IsInst)(arg0)))){
                    __pos_0__ = 0x48;
                    continue;
                }
                /* IL_3E: ldstr FuncX<int, object>*/
                /* IL_43: call Void Log(System.Object)*/
                (asm1.x6000001)(new_string("FuncX<int, object>"));
                case 0x48:
                /* IL_48: ret */
                return ;
            }
        }
    };
    /* static Object <Main>b__0(System.Object)*/
    asm.x6000015 = function _Main_b__0(arg0)
    {
        /* IL_00: ldnull */
        /* IL_01: ret */
        return null;
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
    (asm)["FuncX`2"] = (function ()
    {
        var ct;
        ct = {};
        return function (T,TResult)
        {
            var c;
            var initialized;
            c = tree_get([
                T,
                TResult
            ],ct);
            
            if (c){
                return c;
            }
            initialized = false;;
            function FuncX_2()
            {
                (FuncX_2.init)();
                this.constructor = FuncX_2;
            };
            c = FuncX_2;
            tree_set([
                T,
                TResult
            ],ct,c);
            FuncX_2.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                FuncX_2.CustomAttributes = [];
                FuncX_2.Methods = [
                    [
                        asm1,
                        "x600000d",
                        "Invoke"
                    ]
                ];
                FuncX_2.BaseType = ((asm0)["System.MulticastDelegate"])();
                FuncX_2.FullName = "FuncX`2";
                FuncX_2.Assembly = asm;
                FuncX_2.Interfaces = [];
                FuncX_2.IsInst = function (t) { return t instanceof FuncX_2 ? t : null; };
                FuncX_2.IsValueType = false;
                FuncX_2.IsPrimitive = false;
                FuncX_2.IsInterface = false;
                FuncX_2.IsGenericTypeDefinition = true;
                FuncX_2.IsNullable = false;
                FuncX_2.ArrayType = Array;
                FuncX_2.MetadataName = "asm1.t2000007";
                FuncX_2.GenericArguments = {};
                (FuncX_2.GenericArguments)["asm1.t2000007"] = [
                    T,
                    TResult
                ];
                (FuncX_2.GenericArguments)["asm0.t2000028"] = [];
                (FuncX_2.GenericArguments)["asm0.t2000027"] = [];
                (FuncX_2.GenericArguments)["asm0.t2000002"] = [];
                FuncX_2.prototype._invocationList = null;
                FuncX_2.prototype._methodPtr = null;
                FuncX_2.prototype._target = null;
                FuncX_2.prototype.vtable = {
                    'asm1.x600000d': function ()
                    {
                        return asm1.x600000d;
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
                FuncX_2.prototype.ifacemap = {};
            };
            FuncX_2.prototype = {};
            return c;
        };
    })();
    (asm)["FuncX`1"] = (function ()
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
            function FuncX_1()
            {
                (FuncX_1.init)();
                this.constructor = FuncX_1;
            };
            c = FuncX_1;
            tree_set([
                T
            ],ct,c);
            FuncX_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                FuncX_1.CustomAttributes = [];
                FuncX_1.Methods = [
                    [
                        asm1,
                        "x600000f",
                        "Invoke"
                    ]
                ];
                FuncX_1.BaseType = ((asm0)["System.MulticastDelegate"])();
                FuncX_1.FullName = "FuncX`1";
                FuncX_1.Assembly = asm;
                FuncX_1.Interfaces = [];
                FuncX_1.IsInst = function (t) { return t instanceof FuncX_1 ? t : null; };
                FuncX_1.IsValueType = false;
                FuncX_1.IsPrimitive = false;
                FuncX_1.IsInterface = false;
                FuncX_1.IsGenericTypeDefinition = true;
                FuncX_1.IsNullable = false;
                FuncX_1.ArrayType = Array;
                FuncX_1.MetadataName = "asm1.t2000008";
                FuncX_1.GenericArguments = {};
                (FuncX_1.GenericArguments)["asm1.t2000008"] = [
                    T
                ];
                (FuncX_1.GenericArguments)["asm0.t2000028"] = [];
                (FuncX_1.GenericArguments)["asm0.t2000027"] = [];
                (FuncX_1.GenericArguments)["asm0.t2000002"] = [];
                FuncX_1.prototype._invocationList = null;
                FuncX_1.prototype._methodPtr = null;
                FuncX_1.prototype._target = null;
                FuncX_1.prototype.vtable = {
                    'asm1.x600000f': function ()
                    {
                        return asm1.x600000f;
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
                FuncX_1.prototype.ifacemap = {};
            };
            FuncX_1.prototype = {};
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
                (Program)["CS$<>9__CachedAnonymousMethodDelegate1"] = null;
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
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
