var asm1; (function (asm)
{
    asm.FullName = "ArrayInitializer.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* static Int32[] GetIntArray()*/
    asm.x600000c_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        (asm.x600000c_init.apply)(this,arguments);
        return (asm.x600000c_.apply)(this,arguments);
    };;
    asm.x600000c_ = function GetIntArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = ((asm0)["System.Int32"])();
        /* IL_00: ldc.i4.s 9*/
        st_00 = (9|0);
        /* IL_02: newarr System.Int32*/
        st_01 = new_array(t0,st_00);
        /* IL_07: dup */
        st_04 = (st_02 = st_01);
        /* IL_08: ldtoken __StaticArrayInitTypeSize=36 $$method0x600000c-1*/
        st_03 = new_handle(((asm0)["System.RuntimeFieldHandle"])(),{
            'type': ((asm1)["<PrivateImplementationDetails>{715E3B18-18DF-4518-90D8-82FA7C8FDC41}"])(),
            'field': "$$method0x600000c-1"
        });
        /* IL_0D: call Void InitializeArray(System.Array, System.RuntimeFieldHandle)*/
        (asm0.x600011d)(st_02,st_03);
        /* IL_12: ret */
        return st_04;
    };
    /* static UInt32[] GetUIntArray()*/
    asm.x600000d_init = function ()
    {
        (((asm0)["System.UInt32"])().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        (asm.x600000d_init.apply)(this,arguments);
        return (asm.x600000d_.apply)(this,arguments);
    };;
    asm.x600000d_ = function GetUIntArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = ((asm0)["System.UInt32"])();
        /* IL_00: ldc.i4.s 9*/
        st_00 = (9|0);
        /* IL_02: newarr System.UInt32*/
        st_01 = new_array(t0,st_00);
        /* IL_07: dup */
        st_04 = (st_02 = st_01);
        /* IL_08: ldtoken __StaticArrayInitTypeSize=36 $$method0x600000d-1*/
        st_03 = new_handle(((asm0)["System.RuntimeFieldHandle"])(),{
            'type': ((asm1)["<PrivateImplementationDetails>{715E3B18-18DF-4518-90D8-82FA7C8FDC41}"])(),
            'field': "$$method0x600000d-1"
        });
        /* IL_0D: call Void InitializeArray(System.Array, System.RuntimeFieldHandle)*/
        (asm0.x600011d)(st_02,st_03);
        /* IL_12: ret */
        return st_04;
    };
    /* static Byte[] GetByteArray()*/
    asm.x600000e_init = function ()
    {
        (((asm0)["System.Byte"])().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e_.apply)(this,arguments);
    };;
    asm.x600000e_ = function GetByteArray()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = ((asm0)["System.Byte"])();
        /* IL_00: ldc.i4.7 */
        st_00 = (7|0);
        /* IL_01: newarr System.Byte*/
        st_01 = new_array(t0,st_00);
        /* IL_06: dup */
        st_04 = (st_02 = st_01);
        /* IL_07: ldtoken __StaticArrayInitTypeSize=7 $$method0x600000e-1*/
        st_03 = new_handle(((asm0)["System.RuntimeFieldHandle"])(),{
            'type': ((asm1)["<PrivateImplementationDetails>{715E3B18-18DF-4518-90D8-82FA7C8FDC41}"])(),
            'field': "$$method0x600000e-1"
        });
        /* IL_0C: call Void InitializeArray(System.Array, System.RuntimeFieldHandle)*/
        (asm0.x600011d)(st_02,st_03);
        /* IL_11: ret */
        return st_04;
    };
    /* static Void Main()*/
    asm.x600000f_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.UInt32"])().init)();
        (((asm0)["System.Byte"])().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        t0 = ((asm0)["System.Int32"])();
        t1 = ((asm0)["System.UInt32"])();
        t2 = ((asm0)["System.Byte"])();
        /* IL_00: call Int32[] GetIntArray()*/
        /* IL_05: call Void Print[System.Int32](System.Int32[])*/
        ((asm1.x6000010)(((asm0)["System.Int32"])()))((asm1.x600000c)());
        /* IL_0A: call UInt32[] GetUIntArray()*/
        /* IL_0F: call Void Print[System.UInt32](System.UInt32[])*/
        ((asm1.x6000010)(((asm0)["System.UInt32"])()))((asm1.x600000d)());
        /* IL_14: call Byte[] GetByteArray()*/
        /* IL_19: call Void Print[System.Byte](System.Byte[])*/
        ((asm1.x6000010)(((asm0)["System.Byte"])()))((asm1.x600000e)());
        /* IL_1E: ret */
        return ;
    };
    /* static Void Print[T](T[])*/
    asm.x6000010 = function (T)
    {
        return function Print(arg0)
        {
            var t0;
            var __pos_0__;
            var loc0;
            t0 = T;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: ldc.i4.0 */
                    /* IL_01: stloc.0 */
                    loc0 = (0|0);
                    /* IL_02: br.s IL_19*/
                    __pos_0__ = 0x19;
                    continue;
                    case 0x4:
                    /* IL_04: ldarg.0 */
                    /* IL_05: ldloc.0 */
                    /* IL_06: ldelem T*/
                    /* IL_0B: box T*/
                    /* IL_10: call Void Log(System.Object)*/
                    (asm1.x6000001)(box((arg0.jsarr)[loc0],t0));
                    /* IL_15: ldloc.0 */
                    /* IL_16: ldc.i4.1 */
                    /* IL_17: add */
                    /* IL_18: stloc.0 */
                    loc0 = (loc0 + (1|0)) | (0|0);
                    case 0x19:
                    /* IL_19: ldloc.0 */
                    /* IL_1A: ldarg.0 */
                    /* IL_1B: ldlen */
                    /* IL_1C: conv.i4 */
                    /* IL_1D: blt.s IL_04*/
                    
                    if (loc0 < (arg0.jsarr.length | (0|0))){
                        __pos_0__ = 0x4;
                        continue;
                    }
                    /* IL_1F: ret */
                    return ;
                }
            }
        };
    };;
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
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
    (asm)["<PrivateImplementationDetails>{715E3B18-18DF-4518-90D8-82FA7C8FDC41}"] = (function ()
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
            function _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_()
            {
                (_PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.init)();
                this.constructor = _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_;
            };
            c = _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_;
            ct = c;
            _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                (_PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_)["$$method0x600000c-1"] = [
                    0,
                    0,
                    0,
                    0,
                    8,
                    0,
                    0,
                    0,
                    252,
                    255,
                    255,
                    255,
                    5,
                    0,
                    0,
                    0,
                    255,
                    255,
                    255,
                    255,
                    6,
                    0,
                    0,
                    0,
                    244,
                    1,
                    0,
                    0,
                    255,
                    255,
                    255,
                    127,
                    0,
                    0,
                    0,
                    128
                ];
                (_PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_)["$$method0x600000d-1"] = [
                    0,
                    0,
                    0,
                    0,
                    8,
                    0,
                    0,
                    0,
                    4,
                    0,
                    0,
                    0,
                    5,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    6,
                    0,
                    0,
                    0,
                    244,
                    1,
                    0,
                    0,
                    255,
                    255,
                    255,
                    255,
                    0,
                    0,
                    0,
                    0
                ];
                (_PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_)["$$method0x600000e-1"] = [
                    0,
                    8,
                    4,
                    5,
                    1,
                    255,
                    0
                ];
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.CustomAttributes = [];
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.Methods = [];
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.BaseType = ((asm0)["System.Object"])();
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.FullName = "<PrivateImplementationDetails>{715E3B18-18DF-4518-90D8-82FA7C8FDC41}";
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.Assembly = asm;
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.Interfaces = [];
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.IsInst = function (t) { return t instanceof _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_ ? t : null; };
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.IsValueType = false;
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.IsPrimitive = false;
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.IsInterface = false;
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.IsGenericTypeDefinition = false;
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.IsNullable = false;
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.ArrayType = Array;
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.MetadataName = "asm1.t2000008";
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.GenericArguments = {};
                (_PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.GenericArguments)["asm1.t2000008"] = [];
                (_PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.GenericArguments)["asm0.t2000002"] = [];
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.prototype.vtable = {
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
                _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.prototype.ifacemap = {};
            };
            _PrivateImplementationDetails__715E3B18_18DF_4518_90D8_82FA7C8FDC41_.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["<PrivateImplementationDetails>{715E3B18-18DF-4518-90D8-82FA7C8FDC41}+__StaticArrayInitTypeSize=36"] = (function ()
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
            function __StaticArrayInitTypeSize_36()
            {
                (__StaticArrayInitTypeSize_36.init)();
                this.constructor = __StaticArrayInitTypeSize_36;
            };
            c = __StaticArrayInitTypeSize_36;
            ct = c;
            __StaticArrayInitTypeSize_36.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                __StaticArrayInitTypeSize_36.CustomAttributes = [];
                __StaticArrayInitTypeSize_36.Methods = [];
                __StaticArrayInitTypeSize_36.BaseType = ((asm0)["System.ValueType"])();
                __StaticArrayInitTypeSize_36.FullName = "<PrivateImplementationDetails>{715E3B18-18DF-4518-90D8-82FA7C8FDC41}+__StaticArrayInitTypeSize=36";
                __StaticArrayInitTypeSize_36.Assembly = asm;
                __StaticArrayInitTypeSize_36.Interfaces = [];
                __StaticArrayInitTypeSize_36.IsInst = function (t) { return t instanceof __StaticArrayInitTypeSize_36 ? t : null; };
                __StaticArrayInitTypeSize_36.IsValueType = true;
                __StaticArrayInitTypeSize_36.IsPrimitive = false;
                __StaticArrayInitTypeSize_36.IsInterface = false;
                __StaticArrayInitTypeSize_36.IsGenericTypeDefinition = false;
                __StaticArrayInitTypeSize_36.IsNullable = false;
                __StaticArrayInitTypeSize_36.ArrayType = Array;
                __StaticArrayInitTypeSize_36.MetadataName = "asm1.t2000009";
                __StaticArrayInitTypeSize_36.GenericArguments = {};
                (__StaticArrayInitTypeSize_36.GenericArguments)["asm1.t2000009"] = [];
                (__StaticArrayInitTypeSize_36.GenericArguments)["asm0.t2000006"] = [];
                (__StaticArrayInitTypeSize_36.GenericArguments)["asm0.t2000002"] = [];
                __StaticArrayInitTypeSize_36.prototype.vtable = {
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
                __StaticArrayInitTypeSize_36.prototype.ifacemap = {};
            };
            __StaticArrayInitTypeSize_36.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["<PrivateImplementationDetails>{715E3B18-18DF-4518-90D8-82FA7C8FDC41}+__StaticArrayInitTypeSize=7"] = (function ()
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
            function __StaticArrayInitTypeSize_7()
            {
                (__StaticArrayInitTypeSize_7.init)();
                this.constructor = __StaticArrayInitTypeSize_7;
            };
            c = __StaticArrayInitTypeSize_7;
            ct = c;
            __StaticArrayInitTypeSize_7.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                __StaticArrayInitTypeSize_7.CustomAttributes = [];
                __StaticArrayInitTypeSize_7.Methods = [];
                __StaticArrayInitTypeSize_7.BaseType = ((asm0)["System.ValueType"])();
                __StaticArrayInitTypeSize_7.FullName = "<PrivateImplementationDetails>{715E3B18-18DF-4518-90D8-82FA7C8FDC41}+__StaticArrayInitTypeSize=7";
                __StaticArrayInitTypeSize_7.Assembly = asm;
                __StaticArrayInitTypeSize_7.Interfaces = [];
                __StaticArrayInitTypeSize_7.IsInst = function (t) { return t instanceof __StaticArrayInitTypeSize_7 ? t : null; };
                __StaticArrayInitTypeSize_7.IsValueType = true;
                __StaticArrayInitTypeSize_7.IsPrimitive = false;
                __StaticArrayInitTypeSize_7.IsInterface = false;
                __StaticArrayInitTypeSize_7.IsGenericTypeDefinition = false;
                __StaticArrayInitTypeSize_7.IsNullable = false;
                __StaticArrayInitTypeSize_7.ArrayType = Array;
                __StaticArrayInitTypeSize_7.MetadataName = "asm1.t200000a";
                __StaticArrayInitTypeSize_7.GenericArguments = {};
                (__StaticArrayInitTypeSize_7.GenericArguments)["asm1.t200000a"] = [];
                (__StaticArrayInitTypeSize_7.GenericArguments)["asm0.t2000006"] = [];
                (__StaticArrayInitTypeSize_7.GenericArguments)["asm0.t2000002"] = [];
                __StaticArrayInitTypeSize_7.prototype.vtable = {
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
                __StaticArrayInitTypeSize_7.prototype.ifacemap = {};
            };
            __StaticArrayInitTypeSize_7.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
