var asm1; (function (asm)
{
    asm.FullName = "NewslotMethod.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* Void M()*/
    asm.x600000c = function M(arg0)
    {
        /* IL_00: ldstr a*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("a"));
        /* IL_0A: ret */
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
    /* Void M()*/
    asm.x600000e = function M(arg0)
    {
        /* IL_00: ldstr b*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("b"));
        /* IL_0A: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000d)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void M()*/
    asm.x6000010 = function M(arg0)
    {
        /* IL_00: ldstr c*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("c"));
        /* IL_0A: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x600000f)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x6000012_init = function ()
    {
        ((asm1.Z)().init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function ()
    {
        (asm.x6000012_init.apply)(this,arguments);
        return (asm.x6000012_.apply)(this,arguments);
    };;
    asm.x6000012_ = function Main()
    {
        var t0;
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm1.Z)();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = newobj(t0,asm1.x6000011,[
            null
        ]);
        /* IL_06: ldloc.0 */
        /* IL_07: callvirt Void M()*/
        (asm1.x6000010)(loc0);
        /* IL_0C: ldloc.0 */
        /* IL_0D: stloc.1 */
        loc1 = loc0;
        /* IL_0E: ldloc.1 */
        /* IL_0F: callvirt Void M()*/
        (((loc1.vtable)["asm1.x600000c"])())(loc1);
        /* IL_14: ldloc.0 */
        /* IL_15: stloc.2 */
        loc2 = loc0;
        /* IL_16: ldloc.2 */
        /* IL_17: callvirt Void M()*/
        (((loc2.vtable)["asm1.x600000c"])())(loc2);
        /* IL_1C: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000013 = function _ctor(arg0)
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
    asm.X = (function ()
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
            function X()
            {
                (X.init)();
                this.constructor = X;
            };
            c = X;
            ct = c;
            X.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(X,"X",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000c",
                        "M"
                    ]
                ],((asm0)["System.Object"])(),is_inst_default(X),Array,"asm1.t2000007");
                X.Interfaces = [];
                declare_virtual(X,"asm1.x600000c","asm1.x600000c");
                declare_virtual(X,"asm0.x6000005","asm0.x6000005");
                declare_virtual(X,"asm0.x6000008","asm0.x6000008");
                declare_virtual(X,"asm0.x6000009","asm0.x6000009");
            };
            X.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.Y = (function ()
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
            function Y()
            {
                (Y.init)();
                this.constructor = Y;
            };
            c = Y;
            ct = c;
            Y.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(Y,"Y",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000e",
                        "M"
                    ]
                ],(asm1.X)(),is_inst_default(Y),Array,"asm1.t2000008");
                Y.Interfaces = [];
                declare_virtual(Y,"asm1.x600000c","asm1.x600000e");
                declare_virtual(Y,"asm0.x6000005","asm0.x6000005");
                declare_virtual(Y,"asm0.x6000008","asm0.x6000008");
                declare_virtual(Y,"asm0.x6000009","asm0.x6000009");
            };
            Y.prototype = new ((asm1.X)())();
            return c;
        };
    })();
    asm.Z = (function ()
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
            function Z()
            {
                (Z.init)();
                this.constructor = Z;
            };
            c = Z;
            ct = c;
            Z.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(Z,"Z",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x6000010",
                        "M"
                    ]
                ],(asm1.Y)(),is_inst_default(Z),Array,"asm1.t2000009");
                Z.Interfaces = [];
                declare_virtual(Z,"asm1.x600000c","asm1.x600000e");
                declare_virtual(Z,"asm0.x6000005","asm0.x6000005");
                declare_virtual(Z,"asm0.x6000008","asm0.x6000008");
                declare_virtual(Z,"asm0.x6000009","asm0.x6000009");
            };
            Z.prototype = new ((asm1.Y)())();
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
                initType(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(Program),Array,"asm1.t200000a");
                Program.Interfaces = [];
                declare_virtual(Program,"asm0.x6000005","asm0.x6000005");
                declare_virtual(Program,"asm0.x6000008","asm0.x6000008");
                declare_virtual(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x6000012;
})(asm1 || (asm1 = {}));
