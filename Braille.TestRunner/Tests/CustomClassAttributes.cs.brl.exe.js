var asm1; (function (asm)
{
    asm.FullName = "CustomClassAttributes.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* Void .ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* String get_P()*/
    asm.x600000e = function get_P(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld String <P>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A2<P>k__BackingField"];
    };;
    /* Void set_P(System.String)*/
    asm.x600000f = function set_P(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <P>k__BackingField*/
        (arg0)["A2<P>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Void .ctor(System.String)*/
    asm.x6000010 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: call Void set_P(System.String)*/
        (asm1.x600000f)(arg0,arg1);
        /* IL_0D: ret */
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
    /* Void .ctor()*/
    asm.x6000012 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main(System.String[])*/
    asm.x6000013_init = function ()
    {
        ((asm1.B)().init)();
        (((asm0)["System.Int32"])().init)();
        ((asm1.A)().init)();
        (((asm0)["System.Boolean"])().init)();
        ((asm1.C)().init)();
        ((asm1.A2)().init)();
        ((asm1.D)().init)();
        asm.x6000013 = asm.x6000013_;
    };;
    asm.x6000013 = function (arg0)
    {
        (asm.x6000013_init.apply)(this,arguments);
        return (asm.x6000013_.apply)(this,arguments);
    };;
    asm.x6000013_ = function Main(arg0)
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
        var loc1;
        var loc2;
        var loc3;
        t0 = (asm1.B)();
        t1 = ((asm0)["System.Int32"])();
        t2 = (asm1.A)();
        t3 = ((asm0)["System.Boolean"])();
        t4 = (asm1.C)();
        t5 = (asm1.A2)();
        t6 = (asm1.D)();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldtoken B*/
                /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_0A: ldc.i4.1 */
                /* IL_0B: callvirt Object[] GetCustomAttributes(System.Boolean)*/
                /* IL_10: stloc.0 */
                loc0 = ((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)).vtable)["asm0.x6000039"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)),(1|0));
                /* IL_11: ldloc.0 */
                /* IL_12: ldlen */
                /* IL_13: conv.i4 */
                /* IL_14: box System.Int32*/
                /* IL_19: call Void Log(System.Object)*/
                (asm1.x6000001)({
                    'boxed': loc0.jsarr.length | (0|0),
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                });
                /* IL_1E: ldc.i4.0 */
                /* IL_1F: stloc.1 */
                loc1 = (0|0);
                /* IL_20: br.s IL_59*/
                __pos_0__ = 0x59;
                continue;
                case 0x22:
                /* IL_22: ldtoken A*/
                /* IL_27: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_2C: ldloc.0 */
                /* IL_2D: ldloc.1 */
                /* IL_2E: ldelem.ref */
                /* IL_2F: callvirt Type GetType()*/
                /* IL_34: callvirt Boolean Equals(System.Object)*/
                /* IL_39: box System.Boolean*/
                /* IL_3E: call Void Log(System.Object)*/
                (asm1.x6000001)({
                    'boxed': ((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t2)).vtable)["asm0.x6000008"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t2)),(asm0.x600000a)((loc0.jsarr)[loc1])),
                    'type': t3,
                    'vtable': t3.prototype.vtable,
                    'ifacemap': t3.prototype.ifacemap
                });
                /* IL_43: ldloc.0 */
                /* IL_44: ldloc.1 */
                /* IL_45: ldelem.ref */
                /* IL_46: callvirt Type GetType()*/
                /* IL_4B: callvirt String get_FullName()*/
                /* IL_50: call Void Log(System.Object)*/
                (asm1.x6000001)(((((asm0.x600000a)((loc0.jsarr)[loc1]).vtable)["asm0.x60000ac"])())((asm0.x600000a)((loc0.jsarr)[loc1])));
                /* IL_55: ldloc.1 */
                /* IL_56: ldc.i4.1 */
                /* IL_57: add */
                /* IL_58: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x59:
                /* IL_59: ldloc.1 */
                /* IL_5A: ldloc.0 */
                /* IL_5B: ldlen */
                /* IL_5C: conv.i4 */
                /* IL_5D: blt.s IL_22*/
                
                if (loc1 < (loc0.jsarr.length | (0|0))){
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_5F: ldtoken C*/
                /* IL_64: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_69: ldc.i4.1 */
                /* IL_6A: callvirt Object[] GetCustomAttributes(System.Boolean)*/
                /* IL_6F: stloc.2 */
                loc2 = ((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t4)).vtable)["asm0.x6000039"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t4)),(1|0));
                /* IL_70: ldloc.2 */
                /* IL_71: ldc.i4.0 */
                /* IL_72: ldelem.ref */
                /* IL_73: castclass A2*/
                /* IL_78: callvirt String get_P()*/
                /* IL_7D: call Void Log(System.Object)*/
                (asm1.x6000001)((asm1.x600000e)(cast_class((loc2.jsarr)[(0|0)],t5)));
                /* IL_82: ldtoken D*/
                /* IL_87: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_8C: ldc.i4.1 */
                /* IL_8D: callvirt Object[] GetCustomAttributes(System.Boolean)*/
                /* IL_92: stloc.3 */
                loc3 = ((((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t6)).vtable)["asm0.x6000039"])())((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t6)),(1|0));
                /* IL_93: ldloc.3 */
                /* IL_94: ldlen */
                /* IL_95: conv.i4 */
                /* IL_96: box System.Int32*/
                /* IL_9B: call Void Log(System.Object)*/
                (asm1.x6000001)({
                    'boxed': loc3.jsarr.length | (0|0),
                    'type': t1,
                    'vtable': t1.prototype.vtable,
                    'ifacemap': t1.prototype.ifacemap
                });
                /* IL_A0: ret */
                return ;
            }
        }
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
                initType(A,"A",asm,false,false,false,false,false,[],[],((asm0)["System.Attribute"])(),is_inst_default(A),Array,"asm1.t2000007");
                A.Interfaces = [];
                declare_virtual(A,"asm0.x6000005","asm0.x6000005");
                declare_virtual(A,"asm0.x6000008","asm0.x6000008");
                declare_virtual(A,"asm0.x6000009","asm0.x6000009");
            };
            A.prototype = new (((asm0)["System.Attribute"])())();
            return c;
        };
    })();
    asm.B = (function ()
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
            function B()
            {
                (B.init)();
                this.constructor = B;
            };
            c = B;
            ct = c;
            B.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(B,"B",asm,false,false,false,false,false,[
                    [
                        (asm1.A)(),
                        asm1.x600000c
                    ]
                ],[],((asm0)["System.Object"])(),is_inst_default(B),Array,"asm1.t2000008");
                B.Interfaces = [];
                declare_virtual(B,"asm0.x6000005","asm0.x6000005");
                declare_virtual(B,"asm0.x6000008","asm0.x6000008");
                declare_virtual(B,"asm0.x6000009","asm0.x6000009");
            };
            B.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.A2 = (function ()
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
            function A2()
            {
                (A2.init)();
                this.constructor = A2;
            };
            c = A2;
            ct = c;
            A2.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(A2,"A2",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000e",
                        "get_P"
                    ],
                    [
                        asm1,
                        "x600000f",
                        "set_P"
                    ]
                ],((asm0)["System.Attribute"])(),is_inst_default(A2),Array,"asm1.t2000009");
                A2.Interfaces = [];
                declare_virtual(A2,"asm0.x6000005","asm0.x6000005");
                declare_virtual(A2,"asm0.x6000008","asm0.x6000008");
                declare_virtual(A2,"asm0.x6000009","asm0.x6000009");
                (A2.prototype)["A2<P>k__BackingField"] = null;
            };
            A2.prototype = new (((asm0)["System.Attribute"])())();
            return c;
        };
    })();
    asm.C = (function ()
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
            function C()
            {
                (C.init)();
                this.constructor = C;
            };
            c = C;
            ct = c;
            C.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(C,"C",asm,false,false,false,false,false,[
                    [
                        (asm1.A2)(),
                        asm1.x6000010,
                        [
                            new_string("xyz")
                        ]
                    ]
                ],[],((asm0)["System.Object"])(),is_inst_default(C),Array,"asm1.t200000a");
                C.Interfaces = [];
                declare_virtual(C,"asm0.x6000005","asm0.x6000005");
                declare_virtual(C,"asm0.x6000008","asm0.x6000008");
                declare_virtual(C,"asm0.x6000009","asm0.x6000009");
            };
            C.prototype = new (((asm0)["System.Object"])())();
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
                initType(D,"D",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(D),Array,"asm1.t200000b");
                D.Interfaces = [];
                declare_virtual(D,"asm0.x6000005","asm0.x6000005");
                declare_virtual(D,"asm0.x6000008","asm0.x6000008");
                declare_virtual(D,"asm0.x6000009","asm0.x6000009");
            };
            D.prototype = new (((asm0)["System.Object"])())();
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
                initType(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(Program),Array,"asm1.t200000c");
                Program.Interfaces = [];
                declare_virtual(Program,"asm0.x6000005","asm0.x6000005");
                declare_virtual(Program,"asm0.x6000008","asm0.x6000008");
                declare_virtual(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x6000013;
})(asm1 || (asm1 = {}));
