var asm1; (function (asm)
{
    asm.FullName = "CSStringConverter.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* static Void Main()*/
    asm.x600000c = function Main()
    {
        /* IL_00: ret */
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
    /* Void Append(System.String)*/
    asm.x600000e = function Append(arg0,arg1)
    {
        /* IL_00: ldarg.1 */
        /* IL_01: call Void Log(System.Object)*/
        (asm1.x6000001)(arg1);
        /* IL_06: ret */
        return ;
    };;
    /* Void Append(System.Char)*/
    asm.x600000f_init = function ()
    {
        (((asm0)["System.Char"])().init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function (arg0,arg1)
    {
        (asm.x600000f_init.apply)(this,arguments);
        return (asm.x600000f_.apply)(this,arguments);
    };;
    asm.x600000f_ = function Append(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.Char"])();
        /* IL_00: ldarg.1 */
        /* IL_01: box System.Char*/
        /* IL_06: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': arg1,
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_0B: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x6000010 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static String Convert(System.String)*/
    asm.x6000011_init = function ()
    {
        ((asm1.S)().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function (arg0)
    {
        (asm.x6000011_init.apply)(this,arguments);
        return (asm.x6000011_.apply)(this,arguments);
    };;
    asm.x6000011_ = function Convert(arg0)
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var __switch_value__;
        var __jmp__;
        t0 = (asm1.S)();
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
                /* IL_07: ldc.i4.s 34*/
                /* IL_09: callvirt Void Append(System.Char)*/
                (asm1.x600000f)(loc0,(34|0));
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.1 */
                loc1 = (0|0);
                /* IL_10: br IL_DB*/
                __pos_0__ = 0xDB;
                continue;
                case 0x15:
                /* IL_15: ldarg.0 */
                /* IL_16: ldloc.1 */
                /* IL_17: callvirt Char get_Chars(System.Int32)*/
                /* IL_1C: stloc.2 */
                loc2 = (asm0.x600016d)(arg0,loc1);
                /* IL_1D: ldloc.2 */
                /* IL_1E: ldc.i4.s 13*/
                /* IL_20: bgt.s IL_48*/
                
                if (loc2 > (13|0)){
                    __pos_0__ = 0x48;
                    continue;
                }
                /* IL_22: ldloc.2 */
                /* IL_23: ldc.i4.0 */
                /* IL_24: beq.s IL_89*/
                
                if (loc2 === (0|0)){
                    __pos_0__ = 0x89;
                    continue;
                }
                /* IL_26: ldloc.2 */
                /* IL_27: ldc.i4.s 9*/
                /* IL_29: sub */
                /* IL_2A: switch System.Int32[]*/
                __switch_value__ = (loc2 - (9|0)) | (0|0);
                
                if (__switch_value__ >= 0x5){
                    __pos_0__ = 0x43;
                    continue;
                }
                __jmp__ = [
                    0x53,
                    0x60,
                    0x87,
                    0x87,
                    0x6D
                ];
                __pos_0__ = (0x43 + (__jmp__)[__switch_value__]);
                continue;
                case 0x43:
                /* IL_43: br IL_CA*/
                __pos_0__ = 0xCA;
                continue;
                case 0x48:
                /* IL_48: ldloc.2 */
                /* IL_49: ldc.i4.s 34*/
                /* IL_4B: beq.s IL_BD*/
                
                if (loc2 === (34|0)){
                    __pos_0__ = 0xBD;
                    continue;
                }
                /* IL_4D: ldloc.2 */
                /* IL_4E: ldc.i4.s 92*/
                /* IL_50: beq.s IL_68*/
                
                if (loc2 === (92|0)){
                    __pos_0__ = 0x68;
                    continue;
                }
                /* IL_52: ldloc.2 */
                /* IL_53: ldc.i4 8232*/
                /* IL_58: sub */
                /* IL_59: switch System.Int32[]*/
                __switch_value__ = (loc2 - (8232|0)) | (0|0);
                
                if (__switch_value__ >= 0x2){
                    __pos_0__ = 0x66;
                    continue;
                }
                __jmp__ = [
                    0xF,
                    0xF
                ];
                __pos_0__ = (0x66 + (__jmp__)[__switch_value__]);
                continue;
                case 0x66:
                /* IL_66: br.s IL_CA*/
                __pos_0__ = 0xCA;
                continue;
                case 0x68:
                /* IL_68: ldloc.0 */
                /* IL_69: ldstr \\*/
                /* IL_6E: callvirt Void Append(System.String)*/
                (asm1.x600000e)(loc0,new_string("\\\\"));
                /* IL_73: br.s IL_D7*/
                __pos_0__ = 0xD7;
                continue;
                case 0x75:
                /* IL_75: ldloc.0 */
                /* IL_76: ldarg.0 */
                /* IL_77: ldloc.1 */
                /* IL_78: callvirt Char get_Chars(System.Int32)*/
                /* IL_7D: call String EscapeChar(System.Char)*/
                /* IL_82: callvirt Void Append(System.String)*/
                (asm1.x600000e)(loc0,(asm1.x6000012)((asm0.x600016d)(arg0,loc1)));
                /* IL_87: br.s IL_D7*/
                __pos_0__ = 0xD7;
                continue;
                case 0x89:
                /* IL_89: ldloc.0 */
                /* IL_8A: ldstr \0*/
                /* IL_8F: callvirt Void Append(System.String)*/
                (asm1.x600000e)(loc0,new_string("\\0"));
                /* IL_94: br.s IL_D7*/
                __pos_0__ = 0xD7;
                continue;
                case 0x96:
                /* IL_96: ldloc.0 */
                /* IL_97: ldstr \t*/
                /* IL_9C: callvirt Void Append(System.String)*/
                (asm1.x600000e)(loc0,new_string("\\t"));
                /* IL_A1: br.s IL_D7*/
                __pos_0__ = 0xD7;
                continue;
                case 0xA3:
                /* IL_A3: ldloc.0 */
                /* IL_A4: ldstr \n*/
                /* IL_A9: callvirt Void Append(System.String)*/
                (asm1.x600000e)(loc0,new_string("\\n"));
                /* IL_AE: br.s IL_D7*/
                __pos_0__ = 0xD7;
                continue;
                case 0xB0:
                /* IL_B0: ldloc.0 */
                /* IL_B1: ldstr \r*/
                /* IL_B6: callvirt Void Append(System.String)*/
                (asm1.x600000e)(loc0,new_string("\\r"));
                /* IL_BB: br.s IL_D7*/
                __pos_0__ = 0xD7;
                continue;
                case 0xBD:
                /* IL_BD: ldloc.0 */
                /* IL_BE: ldstr \"*/
                /* IL_C3: callvirt Void Append(System.String)*/
                (asm1.x600000e)(loc0,new_string("\\\""));
                /* IL_C8: br.s IL_D7*/
                __pos_0__ = 0xD7;
                continue;
                case 0xCA:
                /* IL_CA: ldloc.0 */
                /* IL_CB: ldarg.0 */
                /* IL_CC: ldloc.1 */
                /* IL_CD: callvirt Char get_Chars(System.Int32)*/
                /* IL_D2: callvirt Void Append(System.Char)*/
                (asm1.x600000f)(loc0,(asm0.x600016d)(arg0,loc1));
                case 0xD7:
                /* IL_D7: ldloc.1 */
                /* IL_D8: ldc.i4.1 */
                /* IL_D9: add */
                /* IL_DA: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0xDB:
                /* IL_DB: ldloc.1 */
                /* IL_DC: ldarg.0 */
                /* IL_DD: callvirt Int32 get_Length()*/
                /* IL_E2: blt IL_15*/
                
                if (loc1 < (asm0.x6000177)(arg0)){
                    __pos_0__ = 0x15;
                    continue;
                }
                /* IL_E7: ldloc.0 */
                /* IL_E8: ldc.i4.s 34*/
                /* IL_EA: callvirt Void Append(System.Char)*/
                (asm1.x600000f)(loc0,(34|0));
                /* IL_EF: ldloc.0 */
                /* IL_F0: callvirt String ToString()*/
                /* IL_F5: ret */
                return (((loc0.vtable)["asm0.x6000005"])())(loc0);
            }
        }
    };
    /* static String EscapeChar(System.Char)*/
    asm.x6000012_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function (arg0)
    {
        (asm.x6000012_init.apply)(this,arguments);
        return (asm.x6000012_.apply)(this,arguments);
    };;
    asm.x6000012_ = function EscapeChar(arg0)
    {
        var t0;
        t0 = ((asm0)["System.Int32"])();
        /* IL_00: ldstr \u*/
        /* IL_05: ldarg.0 */
        /* IL_06: box System.Int32*/
        /* IL_0B: call String Concat(System.Object, System.Object)*/
        /* IL_10: ret */
        return (asm0.x6000173)(new_string("\\u"),{
            'boxed': arg0,
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
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
                initType(Program,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(Program),Array,"asm1.t2000007");
                Program.Interfaces = [];
                declare_virtual(Program,"asm0.x6000005","asm0.x6000005");
                declare_virtual(Program,"asm0.x6000008","asm0.x6000008");
                declare_virtual(Program,"asm0.x6000009","asm0.x6000009");
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.S = (function ()
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
            function S()
            {
                (S.init)();
                this.constructor = S;
            };
            c = S;
            ct = c;
            S.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(S,"S",asm,false,false,false,false,false,[],[
                    [
                        asm1,
                        "x600000e",
                        "Append"
                    ],
                    [
                        asm1,
                        "x600000f",
                        "Append"
                    ]
                ],((asm0)["System.Object"])(),is_inst_default(S),Array,"asm1.t2000008");
                S.Interfaces = [];
                declare_virtual(S,"asm0.x6000005","asm0.x6000005");
                declare_virtual(S,"asm0.x6000008","asm0.x6000008");
                declare_virtual(S,"asm0.x6000009","asm0.x6000009");
            };
            S.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.CSStringConverter = (function ()
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
            function CSStringConverter()
            {
                (CSStringConverter.init)();
                this.constructor = CSStringConverter;
            };
            c = CSStringConverter;
            ct = c;
            CSStringConverter.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(CSStringConverter,"CSStringConverter",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(CSStringConverter),Array,"asm1.t2000009");
                CSStringConverter.Interfaces = [];
                declare_virtual(CSStringConverter,"asm0.x6000005","asm0.x6000005");
                declare_virtual(CSStringConverter,"asm0.x6000008","asm0.x6000008");
                declare_virtual(CSStringConverter,"asm0.x6000009","asm0.x6000009");
            };
            CSStringConverter.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
