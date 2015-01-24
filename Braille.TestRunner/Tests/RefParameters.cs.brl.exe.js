var asm1; (function (asm)
{
    asm.FullName = "RefParameters.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
        /* IL_06: ret */
        return ;
    };;
    /* static Void X(System.Int32&)*/
    asm.x600000d = function X(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.2 */
        /* IL_02: stind.i4 */
        (arg0.w)((2|0));
        /* IL_03: ret */
        return ;
    };;
    /* static Void Y(A&)*/
    asm.x600000e_init = function ()
    {
        ((asm1.A)().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0)
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e_.apply)(this,arguments);
    };;
    asm.x600000e_ = function Y(arg0)
    {
        var t0;
        var loc0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        t0 = (asm1.A)();
        loc0 = new ((asm1.A)())();
        /* IL_00: ldarg.0 */
        st_03 = arg0;
        /* IL_01: ldloca.s 0*/
        /* IL_04: initobj A*/
        ({
            'w': function ()
            {
                loc0 = (arguments)[0];
            },
            'r': function ()
            {
                return loc0;
            }
        }.w)(new t0());
        /* IL_09: ldloca.s 0*/
        st_01 = {
            'w': function ()
            {
                loc0 = (arguments)[0];
            },
            'r': function ()
            {
                return loc0;
            }
        };
        /* IL_0B: ldc.i4.3 */
        st_02 = (3|0);
        /* IL_0C: stfld Int32 U*/
        (st_01.r)().U = st_02;
        /* IL_11: ldloc.0 */
        st_04 = loc0;
        /* IL_12: stobj A*/
        (st_03.w)(st_04);
        /* IL_17: ret */
        return ;
    };
    /* static Void Z(C&)*/
    asm.x600000f_init = function ()
    {
        ((asm1.C)().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0)
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function Z(arg0)
    {
        var t0;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = (asm1.C)();
        /* IL_00: ldarg.0 */
        st_03 = arg0;
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: stloc.0 */
        loc0 = newobj(t0,asm1.x600000c,[
            null
        ]);
        /* IL_07: ldloc.0 */
        st_01 = loc0;
        /* IL_08: ldc.i4.4 */
        st_02 = (4|0);
        /* IL_09: stfld Int32 V*/
        st_01.V = st_02;
        /* IL_0E: ldloc.0 */
        st_04 = loc0;
        /* IL_0F: stind.ref */
        (st_03.w)(st_04);
        /* IL_10: ret */
        return ;
    };
    /* static Void Main()*/
    asm.x6000010_init = function ()
    {
        ((asm1.A)().init)();
        ((asm1.C)().init)();
        (((asm0)["System.Int32"])().init)();
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
        var t1;
        var t2;
        var loc3;
        var loc0;
        var loc1;
        var loc4;
        var loc2;
        t0 = (asm1.A)();
        t1 = (asm1.C)();
        t2 = ((asm0)["System.Int32"])();
        loc3 = new ((asm1.A)())();
        /* IL_00: ldc.i4.1 */
        /* IL_01: stloc.0 */
        loc0 = (1|0);
        /* IL_02: ldloca.s 3*/
        /* IL_05: initobj A*/
        ({
            'w': function ()
            {
                loc3 = (arguments)[0];
            },
            'r': function ()
            {
                return loc3;
            }
        }.w)(new t0());
        /* IL_0A: ldloca.s 3*/
        /* IL_0C: ldc.i4.1 */
        /* IL_0D: stfld Int32 U*/
        ({
            'w': function ()
            {
                loc3 = (arguments)[0];
            },
            'r': function ()
            {
                return loc3;
            }
        }.r)().U = (1|0);
        /* IL_12: ldloc.3 */
        /* IL_13: stloc.1 */
        loc1 = loc3;
        /* IL_14: newobj Void .ctor()*/
        /* IL_19: stloc.s 4*/
        loc4 = newobj(t1,asm1.x600000c,[
            null
        ]);
        /* IL_1B: ldloc.s 4*/
        /* IL_1D: ldc.i4.1 */
        /* IL_1E: stfld Int32 V*/
        loc4.V = (1|0);
        /* IL_23: ldloc.s 4*/
        /* IL_25: stloc.2 */
        loc2 = loc4;
        /* IL_26: ldloca.s 0*/
        /* IL_28: call Void X(System.Int32&)*/
        (asm1.x600000d)({
            'w': function ()
            {
                loc0 = (arguments)[0];
            },
            'r': function ()
            {
                return loc0;
            }
        });
        /* IL_2D: ldloca.s 1*/
        /* IL_2F: call Void Y(A&)*/
        (asm1.x600000e)({
            'w': function ()
            {
                loc1 = (arguments)[0];
            },
            'r': function ()
            {
                return loc1;
            }
        });
        /* IL_34: ldloca.s 2*/
        /* IL_36: call Void Z(C&)*/
        (asm1.x600000f)({
            'w': function ()
            {
                loc2 = (arguments)[0];
            },
            'r': function ()
            {
                return loc2;
            }
        });
        /* IL_3B: ldloc.0 */
        /* IL_3C: box System.Int32*/
        /* IL_41: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': loc0,
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_46: ldloca.s 1*/
        /* IL_48: ldfld Int32 U*/
        /* IL_4D: box System.Int32*/
        /* IL_52: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ({
                'w': function ()
                {
                    loc1 = (arguments)[0];
                },
                'r': function ()
                {
                    return loc1;
                }
            }.r)().U,
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_57: ldloc.2 */
        /* IL_58: ldfld Int32 V*/
        /* IL_5D: box System.Int32*/
        /* IL_62: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': loc2.V,
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_67: ret */
        return ;
    };
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
                initType(A,"A",asm,true,false,false,false,false,[],[],((asm0)["System.ValueType"])(),is_inst_default(A),Array,"asm1.t2000007");
                A.Interfaces = [];
                declare_virtual(A,"asm0.x6000008","asm0.x6000016");
                declare_virtual(A,"asm0.x6000005","asm0.x6000005");
                declare_virtual(A,"asm0.x6000009","asm0.x6000009");
                A.prototype.U = 0;
            };
            A.prototype = {};
            (((asm0)["System.ValueType"])().init)();
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
                initType(C,"C",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(C),Array,"asm1.t2000008");
                C.Interfaces = [];
                declare_virtual(C,"asm0.x6000005","asm0.x6000005");
                declare_virtual(C,"asm0.x6000008","asm0.x6000008");
                declare_virtual(C,"asm0.x6000009","asm0.x6000009");
                C.prototype.V = 0;
            };
            C.prototype = new (((asm0)["System.Object"])())();
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
    asm.entryPoint = asm.x6000010;
})(asm1 || (asm1 = {}));
