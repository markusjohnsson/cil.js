var asm1; (function (asm)
{
    asm.FullName = "iface7.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* Int32 TestMono.IBase.Do()*/
    asm.x600000d = function TestMono_IBase_Do(arg0)
    {
        /* IL_00: ldc.i4.1 */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt Int32 Do()*/
        /* IL_07: add */
        /* IL_08: ret */
        return ((1|0) + (((arg0.vtable)["asm1.x600000e"])())(arg0)) | (0|0);
    };;
    /* Int32 Do()*/
    asm.x600000e = function Do(arg0)
    {
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
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
        (asm1.x600000f)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static Int32 Main(System.String[])*/
    asm.x6000011_init = function ()
    {
        (((asm1)["TestMono.Derived"])().init)();
        (((asm1)["TestMono.IBase"])().init)();
        (((asm1)["TestMono.Base"])().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function (arg0)
    {
        (asm.x6000011_init.apply)(this,arguments);
        return (asm.x6000011_.apply)(this,arguments);
    };;
    asm.x6000011_ = function Main(arg0)
    {
        var t0;
        var t1;
        var t2;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        t0 = ((asm1)["TestMono.Derived"])();
        t1 = ((asm1)["TestMono.IBase"])();
        t2 = ((asm1)["TestMono.Base"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = newobj(t0,asm1.x6000010,[
                    null
                ]);
                /* IL_06: ldloc.0 */
                /* IL_07: callvirt Int32 Do()*/
                /* IL_0C: ldc.i4.2 */
                /* IL_0D: beq.s IL_11*/
                
                if ((((loc0.ifacemap)[t1].x600000c)())(convert_box_to_pointer_as_needed(loc0)) === (2|0)){
                    __pos_0__ = 0x11;
                    continue;
                }
                /* IL_0F: ldc.i4.1 */
                /* IL_10: ret */
                return (1|0);
                case 0x11:
                /* IL_11: ldloc.0 */
                /* IL_12: stloc.1 */
                loc1 = loc0;
                /* IL_13: ldloc.1 */
                /* IL_14: callvirt Int32 Do()*/
                /* IL_19: ldc.i4.2 */
                /* IL_1A: beq.s IL_1E*/
                
                if ((((loc1.ifacemap)[t1].x600000c)())(convert_box_to_pointer_as_needed(loc1)) === (2|0)){
                    __pos_0__ = 0x1E;
                    continue;
                }
                /* IL_1C: ldc.i4.2 */
                /* IL_1D: ret */
                return (2|0);
                case 0x1E:
                /* IL_1E: ldloc.0 */
                /* IL_1F: castclass TestMono.Derived*/
                /* IL_24: stloc.2 */
                loc2 = cast_class(loc0,t0);
                /* IL_25: ldloc.2 */
                /* IL_26: callvirt Int32 Do()*/
                /* IL_2B: ldc.i4.1 */
                /* IL_2C: beq.s IL_30*/
                
                if ((((loc2.vtable)["asm1.x600000e"])())(loc2) === (1|0)){
                    __pos_0__ = 0x30;
                    continue;
                }
                /* IL_2E: ldc.i4.3 */
                /* IL_2F: ret */
                return (3|0);
                case 0x30:
                /* IL_30: ldloc.0 */
                /* IL_31: castclass TestMono.Base*/
                /* IL_36: stloc.3 */
                loc3 = cast_class(loc0,t2);
                /* IL_37: ldloc.3 */
                /* IL_38: callvirt Int32 Do()*/
                /* IL_3D: ldc.i4.1 */
                /* IL_3E: beq.s IL_42*/
                
                if ((((loc3.vtable)["asm1.x600000e"])())(loc3) === (1|0)){
                    __pos_0__ = 0x42;
                    continue;
                }
                /* IL_40: ldc.i4.4 */
                /* IL_41: ret */
                return (4|0);
                case 0x42:
                /* IL_42: ldc.i4.0 */
                /* IL_43: ret */
                return (0|0);
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
    (asm)["TestMono.IBase"] = (function ()
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
            function IBase()
            {
                (IBase.init)();
                this.constructor = IBase;
            };
            c = IBase;
            ct = c;
            IBase.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(IBase,"TestMono.IBase",asm,false,false,true,false,false,[],[
                    [
                        asm1,
                        "x600000c",
                        "Do"
                    ]
                ],null,is_inst_interface(IBase),Array,"asm1.t2000007");
                IBase.Interfaces = [];
                declare_virtual(IBase,"asm1.x600000c","asm1.x600000c");
            };
            IBase.prototype = {};
            return c;
        };
    })();
    (asm)["TestMono.IDerived"] = (function ()
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
            function IDerived()
            {
                (IDerived.init)();
                this.constructor = IDerived;
            };
            c = IDerived;
            ct = c;
            IDerived.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(IDerived,"TestMono.IDerived",asm,false,false,true,false,false,[],[],null,is_inst_interface(IDerived),Array,"asm1.t2000008");
                IDerived.Interfaces = [
                    ((asm1)["TestMono.IBase"])()
                ];
            };
            IDerived.prototype = {};
            return c;
        };
    })();
    (asm)["TestMono.Base"] = (function ()
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
            function Base()
            {
                (Base.init)();
                this.constructor = Base;
            };
            c = Base;
            ct = c;
            Base.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(Base,"TestMono.Base",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000e",
                        "Do"
                    ]
                ],((asm0)["System.Object"])(),is_inst_default(Base),Array,"asm1.t2000009");
                Base.Interfaces = [
                    ((asm1)["TestMono.IBase"])()
                ];
                declare_virtual(Base,"asm1.x600000d","asm1.x600000d");
                declare_virtual(Base,"asm1.x600000e","asm1.x600000e");
                declare_virtual(Base,"asm0.x6000005","asm0.x6000005");
                declare_virtual(Base,"asm0.x6000008","asm0.x6000008");
                declare_virtual(Base,"asm0.x6000009","asm0.x6000009");
                tree_set([
                    ((asm1)["TestMono.IBase"])()
                ],Base.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x600000d;
                    }
                });
            };
            Base.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["TestMono.Derived"] = (function ()
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
            function Derived()
            {
                (Derived.init)();
                this.constructor = Derived;
            };
            c = Derived;
            ct = c;
            Derived.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(Derived,"TestMono.Derived",asm,false,false,false,false,false,[],[],((asm1)["TestMono.Base"])(),is_inst_default(Derived),Array,"asm1.t200000a");
                Derived.Interfaces = [
                    ((asm1)["TestMono.IDerived"])(),
                    ((asm1)["TestMono.IBase"])()
                ];
                declare_virtual(Derived,"asm1.x600000e","asm1.x600000e");
                declare_virtual(Derived,"asm0.x6000005","asm0.x6000005");
                declare_virtual(Derived,"asm0.x6000008","asm0.x6000008");
                declare_virtual(Derived,"asm0.x6000009","asm0.x6000009");
                tree_set([
                    ((asm1)["TestMono.IDerived"])()
                ],Derived.prototype.ifacemap,{});
                tree_set([
                    ((asm1)["TestMono.IBase"])()
                ],Derived.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x600000d;
                    }
                });
            };
            Derived.prototype = new (((asm1)["TestMono.Base"])())();
            return c;
        };
    })();
    (asm)["TestMono.Class1"] = (function ()
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
            function Class1()
            {
                (Class1.init)();
                this.constructor = Class1;
            };
            c = Class1;
            ct = c;
            Class1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(Class1,"TestMono.Class1",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(Class1),Array,"asm1.t200000b");
                Class1.Interfaces = [];
                declare_virtual(Class1,"asm0.x6000005","asm0.x6000005");
                declare_virtual(Class1,"asm0.x6000008","asm0.x6000008");
                declare_virtual(Class1,"asm0.x6000009","asm0.x6000009");
            };
            Class1.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
