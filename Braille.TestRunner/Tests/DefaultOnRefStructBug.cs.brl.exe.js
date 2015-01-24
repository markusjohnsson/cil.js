var asm1; (function (asm)
{
    asm.FullName = "DefaultOnRefStructBug.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* Void Reset()*/
    asm.x600000c = function Reset(arg0)
    {
        var t0;
        t0 = ((((arguments)[0].r)().constructor.GenericArguments)["asm1.t2000007"])[0];
        /* IL_00: ldarg.0 */
        /* IL_01: ldflda T X*/
        /* IL_07: initobj T*/
        ({
            'w': function ()
            {
                (arg0.r)().X = (arguments)[0];
            },
            'r': function ()
            {
                return (arg0.r)().X;
            }
        }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
        /* IL_0C: ret */
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
    /* static Void Main()*/
    asm.x600000e_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        (((asm1)["A`1"])(((asm0)["System.Int32"])()).init)();
        ((asm1.B)().init)();
        (((asm1)["A`1"])((asm1.B)()).init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e_.apply)(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc0;
        var loc1;
        var st_0F;
        var st_13;
        var __pos_0__;
        t0 = ((asm0)["System.Int32"])();
        t1 = ((asm1)["A`1"])(((asm0)["System.Int32"])());
        t2 = (asm1.B)();
        t3 = ((asm1)["A`1"])((asm1.B)());
        loc0 = new (((asm1)["A`1"])(((asm0)["System.Int32"])()))();
        loc1 = new (((asm1)["A`1"])((asm1.B)()))();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldloca.s 0*/
                /* IL_03: initobj A`1[System.Int32]*/
                ({
                    'w': function ()
                    {
                        loc0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc0;
                    }
                }.w)(new t1());
                /* IL_08: ldloca.s 0*/
                /* IL_0A: ldc.i4.s 123*/
                /* IL_0C: stfld IKVM.Reflection.GenericFieldInstance*/
                ({
                    'w': function ()
                    {
                        loc0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc0;
                    }
                }.r)().X = (123|0);
                /* IL_11: ldloca.s 0*/
                /* IL_13: ldfld IKVM.Reflection.GenericFieldInstance*/
                /* IL_18: box System.Int32*/
                /* IL_1D: call Void Log(System.Object)*/
                (asm1.x6000001)({
                    'boxed': ({
                        'w': function ()
                        {
                            loc0 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return loc0;
                        }
                    }.r)().X,
                    'type': t0,
                    'vtable': t0.prototype.vtable,
                    'ifacemap': t0.prototype.ifacemap
                });
                /* IL_22: ldloca.s 0*/
                /* IL_24: call Void Reset()*/
                (asm1.x600000c)({
                    'w': function ()
                    {
                        loc0 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc0;
                    }
                });
                /* IL_29: ldloca.s 0*/
                /* IL_2B: ldfld IKVM.Reflection.GenericFieldInstance*/
                /* IL_30: box System.Int32*/
                /* IL_35: call Void Log(System.Object)*/
                (asm1.x6000001)({
                    'boxed': ({
                        'w': function ()
                        {
                            loc0 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return loc0;
                        }
                    }.r)().X,
                    'type': t0,
                    'vtable': t0.prototype.vtable,
                    'ifacemap': t0.prototype.ifacemap
                });
                /* IL_3A: ldloca.s 1*/
                /* IL_3D: initobj A`1[B]*/
                ({
                    'w': function ()
                    {
                        loc1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc1;
                    }
                }.w)(new t3());
                /* IL_42: ldloca.s 1*/
                /* IL_44: newobj Void .ctor()*/
                /* IL_49: stfld IKVM.Reflection.GenericFieldInstance*/
                ({
                    'w': function ()
                    {
                        loc1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc1;
                    }
                }.r)().X = newobj(t2,asm1.x600000d,[
                    null
                ]);
                /* IL_4E: ldloca.s 1*/
                /* IL_50: ldfld IKVM.Reflection.GenericFieldInstance*/
                /* IL_55: brfalse.s IL_5E*/
                
                if ((!(({
                    'w': function ()
                    {
                        loc1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc1;
                    }
                }.r)().X))){
                    __pos_0__ = 0x5E;
                    continue;
                }
                /* IL_57: ldstr false*/
                st_0F = new_string("false");
                /* IL_5C: br.s IL_63*/
                __pos_0__ = 0x63;
                continue;
                case 0x5E:
                /* IL_5E: ldstr true*/
                st_0F = new_string("true");
                case 0x63:
                /* IL_63: call Void Log(System.Object)*/
                (asm1.x6000001)(st_0F);
                /* IL_68: ldloca.s 1*/
                /* IL_6A: call Void Reset()*/
                (asm1.x600000c)({
                    'w': function ()
                    {
                        loc1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc1;
                    }
                });
                /* IL_6F: ldloca.s 1*/
                /* IL_71: ldfld IKVM.Reflection.GenericFieldInstance*/
                /* IL_76: brfalse.s IL_7F*/
                
                if ((!(({
                    'w': function ()
                    {
                        loc1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return loc1;
                    }
                }.r)().X))){
                    __pos_0__ = 0x7F;
                    continue;
                }
                /* IL_78: ldstr false*/
                st_13 = new_string("false");
                /* IL_7D: br.s IL_84*/
                __pos_0__ = 0x84;
                continue;
                case 0x7F:
                /* IL_7F: ldstr true*/
                st_13 = new_string("true");
                case 0x84:
                /* IL_84: call Void Log(System.Object)*/
                (asm1.x6000001)(st_13);
                /* IL_89: ret */
                return ;
            }
        }
    };
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
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
                initType(A_1,"A`1",asm,true,false,false,true,false,[],[
                    [
                        asm1,
                        "x600000c",
                        "Reset"
                    ]
                ],((asm0)["System.ValueType"])(),is_inst_default(A_1),Array,"asm1.t2000007");
                A_1.Interfaces = [];
                (A_1.GenericArguments)["asm1.t2000007"] = [
                    T
                ];
                declare_virtual(A_1,"asm0.x6000008","asm0.x6000016");
                declare_virtual(A_1,"asm0.x6000005","asm0.x6000005");
                declare_virtual(A_1,"asm0.x6000009","asm0.x6000009");
                A_1.prototype.X = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            };
            A_1.prototype = {};
            (((asm0)["System.ValueType"])().init)();
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
                initType(B,"B",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(B),Array,"asm1.t2000008");
                B.Interfaces = [];
                declare_virtual(B,"asm0.x6000005","asm0.x6000005");
                declare_virtual(B,"asm0.x6000008","asm0.x6000008");
                declare_virtual(B,"asm0.x6000009","asm0.x6000009");
            };
            B.prototype = new (((asm0)["System.Object"])())();
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
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
