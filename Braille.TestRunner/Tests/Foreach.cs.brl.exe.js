var asm1; (function (asm)
{
    asm.FullName = "Foreach.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
    asm.next_hash = 1;

    function nop() {}

    function initType(type, fullname, assembly, isValueType, isPrimitive, isInterface, isGenericTypeDefinition, isNullable, customAttributes, methods, baseType, isInst, arrayType, metadataName)
    {
        type.FullName = fullname;
        type.Assembly = assembly;
        type.IsValueType = isValueType;
        type.IsPrimitive = isPrimitive;
        type.IsInterface = isInterface;
        type.IsGenericTypeDefinition = isGenericTypeDefinition;
        type.IsNullable = isNullable;

        type.CustomAttributes = customAttributes;
        type.Methods = methods;
        type.BaseType = baseType;
        type.IsInst = isInst;
        type.ArrayType = arrayType;
        type.MetadataName = metadataName;

        type.GenericArguments = {};
        type.prototype.vtable = {};
        type.prototype.ifacemap = {};
    }

    function is_inst_interface(interfaceType){
        return function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(interfaceType) != -1 ? t : null; } catch (e) { return false; } };
    }

    function is_inst_primitive(primitiveType) {
        return function (t) { try { return t.type == primitiveType ? t : null; } catch (e) { return false; } }
    }

    function is_inst_array(T) {
        return function (t) { return t instanceof asm0['System.Array']() && (t.etype == T || t.etype.prototype instanceof T) ? t : null; };
    }

    function is_inst_default(type) {
        return function (t) { return t instanceof type ? t : null; };
    }

    function declare_virtual(type, slot, target) {
        type.prototype.vtable[slot] = new Function('return '+target+';');
    }

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
    /* Iter GetEnumerator()*/
    asm.x600000c_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        ((asm1.Iter)().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function (arg0)
    {
        (asm.x600000c_init.apply)(this,arguments);
        return (asm.x600000c_.apply)(this,arguments);
    };;
    asm.x600000c_ = function GetEnumerator(arg0)
    {
        var t0;
        var t1;
        var loc0;
        t0 = ((asm0)["System.Int32"])();
        t1 = (asm1.Iter)();
        /* IL_00: ldc.i4.5 */
        /* IL_01: newarr System.Int32*/
        /* IL_06: stloc.0 */
        loc0 = new_array(t0,(5|0));
        /* IL_07: ldloc.0 */
        /* IL_08: ldc.i4.0 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: stelem.i4 */
        (loc0.jsarr)[(0|0)] = (0|0);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ldc.i4.1 */
        /* IL_0D: ldc.i4.1 */
        /* IL_0E: stelem.i4 */
        (loc0.jsarr)[(1|0)] = (1|0);
        /* IL_0F: ldloc.0 */
        /* IL_10: ldc.i4.2 */
        /* IL_11: ldc.i4.2 */
        /* IL_12: stelem.i4 */
        (loc0.jsarr)[(2|0)] = (2|0);
        /* IL_13: ldloc.0 */
        /* IL_14: ldc.i4.3 */
        /* IL_15: ldc.i4.4 */
        /* IL_16: stelem.i4 */
        (loc0.jsarr)[(3|0)] = (4|0);
        /* IL_17: ldloc.0 */
        /* IL_18: ldc.i4.4 */
        /* IL_19: ldc.i4.8 */
        /* IL_1A: stelem.i4 */
        (loc0.jsarr)[(4|0)] = (8|0);
        /* IL_1B: ldloc.0 */
        /* IL_1C: newobj Void .ctor(System.Int32[])*/
        /* IL_21: ret */
        return newobj(t1,asm1.x600000e,[
            null,
            loc0
        ]);
    };
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Boolean MoveNext()*/
    asm.x600000f = function MoveNext(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var loc0;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: dup */
        st_06 = (st_01 = st_00);
        /* IL_02: ldfld Int32 i*/
        st_02 = st_01.Iteri;
        /* IL_07: ldc.i4.1 */
        st_03 = (1|0);
        /* IL_08: add */
        st_04 = ((st_02 + st_03) | (0|0));
        /* IL_09: dup */
        st_07 = (st_05 = st_04);
        /* IL_0A: stloc.0 */
        loc0 = st_05;
        /* IL_0B: stfld Int32 i*/
        st_06.Iteri = st_07;
        /* IL_10: ldloc.0 */
        /* IL_11: ldarg.0 */
        /* IL_12: ldfld Int32[] nums*/
        /* IL_17: ldlen */
        /* IL_18: conv.i4 */
        /* IL_1A: clt */
        /* IL_1B: ret */
        return ((loc0 < (arg0.Iternums.jsarr.length | (0|0))) ? (1) : (0));
    };;
    /* Int32 get_Current()*/
    asm.x6000010 = function get_Current(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32[] nums*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldfld Int32 i*/
        /* IL_0C: ldelem.i4 */
        /* IL_0D: ret */
        return (arg0.Iternums.jsarr)[arg0.Iteri];
    };;
    /* Void .ctor(System.Int32[])*/
    asm.x600000e = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.m1 */
        /* IL_02: stfld Int32 i*/
        arg0.Iteri = (-1|0);
        /* IL_07: ldarg.0 */
        /* IL_08: call Void .ctor()*/
        /* IL_0D: ldarg.0 */
        /* IL_0E: ldarg.1 */
        /* IL_0F: stfld Int32[] nums*/
        arg0.Iternums = arg1;
        /* IL_14: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000011_init = function ()
    {
        ((asm1.A)().init)();
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.IDisposable"])().init)();
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
        var __pos_0__;
        var loc0;
        var loc2;
        var __pos_1__;
        var loc1;
        var loc3;
        t0 = (asm1.A)();
        t1 = ((asm0)["System.Int32"])();
        t2 = ((asm0)["System.IDisposable"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = newobj(t0,asm1.x600000d,[
                    null
                ]);
                /* IL_06: ldloc.0 */
                /* IL_07: callvirt Iter GetEnumerator()*/
                /* IL_0C: stloc.2 */
                loc2 = (asm1.x600000c)(loc0);
                
                try {
                    __pos_1__ = 0x0;
                    
                    while (__pos_1__ >= 0){
                        
                        switch (__pos_1__){
                            case 0x0:
                            /* IL_0D: br.s IL_21*/
                            __pos_1__ = 0x21;
                            continue;
                            case 0xF:
                            /* IL_0F: ldloc.2 */
                            /* IL_10: callvirt Int32 get_Current()*/
                            /* IL_15: stloc.1 */
                            loc1 = (asm1.x6000010)(loc2);
                            /* IL_16: ldloc.1 */
                            /* IL_17: box System.Int32*/
                            /* IL_1C: call Void Log(System.Object)*/
                            (asm1.x6000001)({
                                'boxed': loc1,
                                'type': t1,
                                'vtable': t1.prototype.vtable,
                                'ifacemap': t1.prototype.ifacemap
                            });
                            case 0x21:
                            /* IL_21: ldloc.2 */
                            /* IL_22: callvirt Boolean MoveNext()*/
                            /* IL_27: brtrue.s IL_0F*/
                            
                            if ((asm1.x600000f)(loc2)){
                                __pos_1__ = 0xF;
                                continue;
                            }
                            /* IL_29: leave.s IL_3C*/
                            __pos_1__ = -1;
                            __pos_0__ = 0x3C;
                            break;
                        }
                    }
                    break;
                }
                
                finally {
                    __pos_1__ = 0x0;
                    
                    while (__pos_1__ >= 0){
                        
                        switch (__pos_1__){
                            case 0x0:
                            /* IL_2B: ldloc.2 */
                            /* IL_2C: isinst System.IDisposable*/
                            /* IL_31: stloc.3 */
                            loc3 = (t2.IsInst)(loc2);
                            /* IL_32: ldloc.3 */
                            /* IL_33: brfalse.s IL_3B*/
                            
                            if ((!(loc3))){
                                __pos_1__ = 0x3B;
                                continue;
                            }
                            /* IL_35: ldloc.3 */
                            /* IL_36: callvirt Void Dispose()*/
                            (((loc3.ifacemap)[t2].x600008f)())(convert_box_to_pointer_as_needed(loc3));
                            case 0x3B:
                            /* IL_3B: endfinally */
                            __pos_1__ = -1;
                            break;
                        }
                    }
                    break;
                }
                case 0x3C:
                /* IL_3C: ret */
                return ;
            }
        }
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
                initType(TestLog,"TestLog",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(TestLog),Array,"asm1.t2000002");
                TestLog.Interfaces = [];
                declare_virtual(TestLog,"asm0.x6000005","asm0.x6000005");
                declare_virtual(TestLog,"asm0.x6000008","asm0.x6000008");
                declare_virtual(TestLog,"asm0.x6000009","asm0.x6000009");
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
                initType(TestHelper,"TestHelper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(TestHelper),Array,"asm1.t2000006");
                TestHelper.Interfaces = [];
                declare_virtual(TestHelper,"asm0.x6000005","asm0.x6000005");
                declare_virtual(TestHelper,"asm0.x6000008","asm0.x6000008");
                declare_virtual(TestHelper,"asm0.x6000009","asm0.x6000009");
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
                initType(A,"A",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000c",
                        "GetEnumerator"
                    ]
                ],((asm0)["System.Object"])(),is_inst_default(A),Array,"asm1.t2000007");
                A.Interfaces = [];
                declare_virtual(A,"asm0.x6000005","asm0.x6000005");
                declare_virtual(A,"asm0.x6000008","asm0.x6000008");
                declare_virtual(A,"asm0.x6000009","asm0.x6000009");
            };
            A.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.Iter = (function ()
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
            function Iter()
            {
                (Iter.init)();
                this.constructor = Iter;
            };
            c = Iter;
            ct = c;
            Iter.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(Iter,"Iter",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000f",
                        "MoveNext"
                    ],
                    [
                        asm1,
                        "x6000010",
                        "get_Current"
                    ]
                ],((asm0)["System.Object"])(),is_inst_default(Iter),Array,"asm1.t2000008");
                Iter.Interfaces = [];
                declare_virtual(Iter,"asm0.x6000005","asm0.x6000005");
                declare_virtual(Iter,"asm0.x6000008","asm0.x6000008");
                declare_virtual(Iter,"asm0.x6000009","asm0.x6000009");
                Iter.prototype.Iteri = 0;
                Iter.prototype.Iternums = null;
            };
            Iter.prototype = new (((asm0)["System.Object"])())();
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
                initType(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(Program),Array,"asm1.t2000009");
                Program.Interfaces = [];
                declare_virtual(Program,"asm0.x6000005","asm0.x6000005");
                declare_virtual(Program,"asm0.x6000008","asm0.x6000008");
                declare_virtual(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
