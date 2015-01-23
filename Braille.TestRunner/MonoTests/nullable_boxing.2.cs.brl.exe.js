var asm1; (function (asm)
{
    asm.FullName = "nullable_boxing.2.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* static Int32 Main()*/
    asm.x600000c_init = function ()
    {
        (((asm1)["Program+Button"])().init)();
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.Nullable`1"])(((asm0)["System.Int32"])()).init)();
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
        var loc2;
        var st_0B;
        var st_0C;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((asm1)["Program+Button"])();
        t1 = ((asm0)["System.Int32"])();
        t2 = ((asm0)["System.Nullable`1"])(((asm0)["System.Int32"])());
        loc2 = new (((asm0)["System.Nullable`1"])(((asm0)["System.Int32"])()))();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldsfld Button TheButton*/
                /* IL_05: ldc.i4.1 */
                /* IL_06: newobj Void .ctor(System.Int32)*/
                /* IL_0B: callvirt Int32 Counter(System.Nullable`1[System.Int32])*/
                /* IL_10: ldc.i4.2 */
                /* IL_11: beq.s IL_15*/
                
                if ((asm1.x600000e)(t0.TheButton,clone_value(newobj(t2,asm0.x600015a,[
                    null,
                    (1|0)
                ]))) === (2|0)){
                    __pos_0__ = 0x15;
                    continue;
                }
                /* IL_13: ldc.i4.1 */
                /* IL_14: ret */
                return (1|0);
                case 0x15:
                /* IL_15: ldc.i4.1 */
                /* IL_16: newarr System.Nullable`1[System.Int32]*/
                /* IL_1B: stloc.1 */
                loc1 = new_array(t2,(1|0));
                /* IL_1C: ldloc.1 */
                /* IL_1D: ldc.i4.0 */
                /* IL_1E: ldelema System.Nullable`1[System.Int32]*/
                st_0B = {
                    'w': function ()
                    {
                        (loc1.jsarr)[(0|0)] = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return (loc1.jsarr)[(0|0)];
                    }
                };
                /* IL_23: ldloca.s 2*/
                /* IL_26: initobj System.Nullable`1[System.Int32]*/
                ({
                    'w': function ()
                    {
                        loc2 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc2;
                    }
                }.w)(((t2.IsValueType) ? (((t2.IsPrimitive) ? ((0|0)) : (new t2()))) : (null)));
                /* IL_2B: ldloc.2 */
                st_0C = loc2;
                /* IL_2C: stobj System.Nullable`1[System.Int32]*/
                (st_0B.w)(st_0C);
                /* IL_31: ldloc.1 */
                /* IL_32: stloc.0 */
                loc0 = loc1;
                /* IL_33: ldloc.0 */
                /* IL_34: ldc.i4.0 */
                /* IL_35: callvirt Object GetValue(System.Int32)*/
                /* IL_3A: brfalse.s IL_3E*/
                
                if ((!((asm0.x6000129)(loc0,(0|0))))){
                    __pos_0__ = 0x3E;
                    continue;
                }
                /* IL_3C: ldc.i4.2 */
                /* IL_3D: ret */
                return (2|0);
                case 0x3E:
                /* IL_3E: ldc.i4.0 */
                /* IL_3F: ret */
                return (0|0);
            }
        }
    };
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Int32 Counter(System.Nullable`1[System.Int32])*/
    asm.x600000e = function Counter(arg0,arg1)
    {
        var __pos_0__;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarga.s 1*/
                /* IL_02: call Boolean get_HasValue()*/
                /* IL_07: brtrue.s IL_0B*/
                
                if ((asm0.x600015b)({
                    'w': function ()
                    {
                        arg1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg1;
                    }
                })){
                    __pos_0__ = 0xB;
                    continue;
                }
                /* IL_09: ldc.i4.0 */
                /* IL_0A: ret */
                return (0|0);
                case 0xB:
                /* IL_0B: ldarga.s 1*/
                /* IL_0D: call Int32 get_Value()*/
                /* IL_12: ldc.i4.1 */
                /* IL_13: add */
                /* IL_14: ret */
                return ((asm0.x600015c)({
                    'w': function ()
                    {
                        arg1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg1;
                    }
                }) + (1|0)) | (0|0);
            }
        }
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void .cctor()*/
    asm.x6000010_init = function ()
    {
        (((asm1)["Program+Button"])().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        (asm.x6000010_init.apply)(this,arguments);
        return (asm.x6000010_.apply)(this,arguments);
    };;
    asm.x6000010_ = function _cctor()
    {
        var t0;
        
        if (((asm1)["Program+Button"])().FieldHasBeenInitialized){
            return;
        }
        ((asm1)["Program+Button"])().FieldHasBeenInitialized = true;
        t0 = ((asm1)["Program+Button"])();
        (asm1.x6000010)();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stsfld Button TheButton*/
        (t0)["TheButton"] = newobj(t0,asm1.x600000f,[
            null
        ]);
        /* IL_0A: ret */
        return ;
    };
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
    (asm)["Program+Button"] = (function ()
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
            function Button()
            {
                (Button.init)();
                this.constructor = Button;
            };
            c = Button;
            ct = c;
            Button.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Button.TheButton = null;
                Button.CustomAttributes = [];
                Button.Methods = [
                    [
                        asm1,
                        "x600000e",
                        "Counter"
                    ]
                ];
                Button.BaseType = ((asm0)["System.Object"])();
                Button.FullName = "Program+Button";
                Button.Assembly = asm;
                Button.Interfaces = [];
                Button.IsInst = function (t) { return t instanceof Button ? t : null; };
                Button.IsValueType = false;
                Button.IsPrimitive = false;
                Button.IsInterface = false;
                Button.IsGenericTypeDefinition = false;
                Button.IsNullable = false;
                Button.ArrayType = Array;
                Button.MetadataName = "asm1.t2000008";
                Button.GenericArguments = {};
                (Button.GenericArguments)["asm1.t2000008"] = [];
                (Button.GenericArguments)["asm0.t2000002"] = [];
                Button.prototype.vtable = {
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
                Button.prototype.ifacemap = {};
            };
            Button.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
