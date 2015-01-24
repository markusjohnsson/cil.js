var asm1; (function (asm)
{
    asm.FullName = "Delegate.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* String Invoke(System.Int32)*/
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
    /* static String X(System.Int32)*/
    asm.x600000e = function X(arg0)
    {
        /* IL_00: ldstr RESULT!*/
        /* IL_05: ret */
        return new_string("RESULT!");
    };;
    /* static String Y(System.Int32)*/
    asm.x600000f = function Y(arg0)
    {
        /* IL_00: ldstr FOO!*/
        /* IL_05: ret */
        return new_string("FOO!");
    };;
    /* static Void Main()*/
    asm.x6000010_init = function ()
    {
        ((asm1.Foo)().init)();
        asm.x6000010 = asm.x6000010_;
    };;
    asm.x6000010 = function ()
    {
        (asm.x6000010_init.apply)(this,arguments);
        return (asm.x6000010_.apply)(this,arguments);
    };;
    asm.x6000010_ = function Main()
    {
        var t0;
        var loc0;
        t0 = (asm1.Foo)();
        /* IL_00: ldnull */
        /* IL_02: ldftn String X(System.Int32)*/
        /* IL_07: newobj Void .ctor(System.Object, System.IntPtr)*/
        /* IL_0C: stloc.0 */
        loc0 = newobj(t0,asm1.x600000c,[
            null,
            null,
            asm1.x600000e
        ]);
        /* IL_0D: ldloc.0 */
        /* IL_0E: call Void CallDelegate(Foo)*/
        (asm1.x6000011)(loc0);
        /* IL_13: ldstr f, f*/
        /* IL_18: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("f, f"));
        /* IL_1D: ldloc.0 */
        /* IL_1E: ldloc.0 */
        /* IL_1F: call Void TestEquality(Foo, Foo)*/
        (asm1.x6000012)(loc0,loc0);
        /* IL_24: ldstr f, X*/
        /* IL_29: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("f, X"));
        /* IL_2E: ldloc.0 */
        /* IL_2F: ldnull */
        /* IL_31: ldftn String X(System.Int32)*/
        /* IL_36: newobj Void .ctor(System.Object, System.IntPtr)*/
        /* IL_3B: call Void TestEquality(Foo, Foo)*/
        (asm1.x6000012)(loc0,newobj(t0,asm1.x600000c,[
            null,
            null,
            asm1.x600000e
        ]));
        /* IL_40: ldstr f, Y*/
        /* IL_45: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("f, Y"));
        /* IL_4A: ldloc.0 */
        /* IL_4B: ldnull */
        /* IL_4D: ldftn String Y(System.Int32)*/
        /* IL_52: newobj Void .ctor(System.Object, System.IntPtr)*/
        /* IL_57: call Void TestEquality(Foo, Foo)*/
        (asm1.x6000012)(loc0,newobj(t0,asm1.x600000c,[
            null,
            null,
            asm1.x600000f
        ]));
        /* IL_5C: ldstr f, null*/
        /* IL_61: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("f, null"));
        /* IL_66: ldloc.0 */
        /* IL_67: ldnull */
        /* IL_68: call Void TestEquality(Foo, Foo)*/
        (asm1.x6000012)(loc0,null);
        /* IL_6D: ldstr null, null*/
        /* IL_72: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("null, null"));
        /* IL_77: ldnull */
        /* IL_78: ldnull */
        /* IL_79: call Void TestEquality(Foo, Foo)*/
        (asm1.x6000012)(null,null);
        /* IL_7E: ret */
        return ;
    };
    /* static Void CallDelegate(Foo)*/
    asm.x6000011 = function CallDelegate(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.s 123*/
        /* IL_03: callvirt String Invoke(System.Int32)*/
        /* IL_08: call Void Log(System.Object)*/
        (asm1.x6000001)((arg0._methodPtr.apply)(null,((arg0._target) ? ([
            arg0._target,
            (123|0)
        ]) : ([
            (123|0)
        ]))));
        /* IL_0D: ret */
        return ;
    };;
    /* static Void TestEquality(Foo, Foo)*/
    asm.x6000012_init = function ()
    {
        (((asm0)["System.Boolean"])().init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function (arg0,arg1)
    {
        (asm.x6000012_init.apply)(this,arguments);
        return (asm.x6000012_.apply)(this,arguments);
    };;
    asm.x6000012_ = function TestEquality(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.Boolean"])();
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Boolean op_Equality(System.Delegate, System.Delegate)*/
        /* IL_07: box System.Boolean*/
        /* IL_0C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000075)(arg0,arg1),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_11: ldarg.0 */
        /* IL_12: ldarg.1 */
        /* IL_13: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
        /* IL_18: box System.Boolean*/
        /* IL_1D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm0.x6000076)(arg0,arg1),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_22: ret */
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
    asm.Foo = (function ()
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
            function Foo()
            {
                (Foo.init)();
                this.constructor = Foo;
            };
            c = Foo;
            ct = c;
            Foo.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(Foo,"Foo",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000d",
                        "Invoke"
                    ]
                ],((asm0)["System.MulticastDelegate"])(),is_inst_default(Foo),Array,"asm1.t2000007");
                Foo.Interfaces = [];
                declare_virtual(Foo,"asm1.x600000d","asm1.x600000d");
                declare_virtual(Foo,"asm0.x6000073","asm0.x600007c");
                declare_virtual(Foo,"asm0.x6000072","asm0.x600007d");
                declare_virtual(Foo,"asm0.x6000008","asm0.x6000074");
                declare_virtual(Foo,"asm0.x6000009","asm0.x6000077");
                declare_virtual(Foo,"asm0.x6000005","asm0.x6000005");
                Foo.prototype._invocationList = null;
                Foo.prototype._methodPtr = null;
                Foo.prototype._target = null;
            };
            Foo.prototype = {};
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
                initType(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(Program),Array,"asm1.t2000008");
                Program.Interfaces = [];
                declare_virtual(Program,"asm0.x6000005","asm0.x6000005");
                declare_virtual(Program,"asm0.x6000008","asm0.x6000008");
                declare_virtual(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
