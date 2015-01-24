var asm1; (function (asm)
{
    asm.FullName = "iface2.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* Int32 IA.Add(System.Int32)*/
    asm.x6000010 = function IA_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.5 */
        /* IL_01: ret */
        return (5|0);
    };;
    /* Int32 IA.Add2(System.Int32)*/
    asm.x6000011 = function IA_Add2(arg0,arg1)
    {
        /* IL_00: ldc.i4.6 */
        /* IL_01: ret */
        return (6|0);
    };;
    /* Int32 IB.Add(System.Int32)*/
    asm.x6000012 = function IB_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.7 */
        /* IL_01: ret */
        return (7|0);
    };;
    /* Void .ctor()*/
    asm.x6000013 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Int32 IC.Add(System.Int32)*/
    asm.x6000014 = function IC_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.8 */
        /* IL_01: ret */
        return (8|0);
    };;
    /* Int32 IA.Add(System.Int32)*/
    asm.x6000015 = function IA_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.s 9*/
        /* IL_02: ret */
        return (9|0);
    };;
    /* Int32 IA.Add2(System.Int32)*/
    asm.x6000016 = function IA_Add2(arg0,arg1)
    {
        /* IL_00: ldc.i4.s 10*/
        /* IL_02: ret */
        return (10|0);
    };;
    /* Int32 IB.Add(System.Int32)*/
    asm.x6000017 = function IB_Add(arg0,arg1)
    {
        /* IL_00: ldc.i4.s 11*/
        /* IL_02: ret */
        return (11|0);
    };;
    /* Void .ctor()*/
    asm.x6000018 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Int32 Test(ID)*/
    asm.x6000019_init = function ()
    {
        ((asm1.IA)().init)();
        ((asm1.IB)().init)();
        asm.x6000019 = asm.x6000019_;
    };;
    asm.x6000019 = function (arg0)
    {
        (asm.x6000019_init.apply)(this,arguments);
        return (asm.x6000019_.apply)(this,arguments);
    };;
    asm.x6000019_ = function Test(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        t0 = (asm1.IA)();
        t1 = (asm1.IB)();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldc.i4.0 */
                /* IL_02: callvirt Int32 Add2(System.Int32)*/
                /* IL_07: ldc.i4.6 */
                /* IL_08: beq.s IL_0C*/
                
                if ((((arg0.ifacemap)[t0].x600000d)())(convert_box_to_pointer_as_needed(arg0),(0|0)) === (6|0)){
                    __pos_0__ = 0xC;
                    continue;
                }
                /* IL_0A: ldc.i4.1 */
                /* IL_0B: ret */
                return (1|0);
                case 0xC:
                /* IL_0C: ldarg.0 */
                /* IL_0D: ldc.i4.0 */
                /* IL_0E: callvirt Int32 Add(System.Int32)*/
                /* IL_13: ldc.i4.7 */
                /* IL_14: beq.s IL_18*/
                
                if ((((arg0.ifacemap)[t1].x600000e)())(convert_box_to_pointer_as_needed(arg0),(0|0)) === (7|0)){
                    __pos_0__ = 0x18;
                    continue;
                }
                /* IL_16: ldc.i4.1 */
                /* IL_17: ret */
                return (1|0);
                case 0x18:
                /* IL_18: ldc.i4.0 */
                /* IL_19: ret */
                return (0|0);
            }
        }
    };
    /* static Int32 Main()*/
    asm.x600001a_init = function ()
    {
        ((asm1.D)().init)();
        ((asm1.E)().init)();
        asm.x600001a = asm.x600001a_;
    };;
    asm.x600001a = function ()
    {
        (asm.x600001a_init.apply)(this,arguments);
        return (asm.x600001a_.apply)(this,arguments);
    };;
    asm.x600001a_ = function Main()
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc0;
        t0 = (asm1.D)();
        t1 = (asm1.E)();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = newobj(t0,asm1.x6000013,[
                    null
                ]);
                /* IL_06: newobj Void .ctor()*/
                /* IL_0B: pop */
                newobj(t1,asm1.x6000018,[
                    null
                ]);
                /* IL_0C: ldloc.0 */
                /* IL_0D: call Int32 Test(ID)*/
                /* IL_12: brfalse.s IL_16*/
                
                if ((!((asm1.x6000019)(loc0)))){
                    __pos_0__ = 0x16;
                    continue;
                }
                /* IL_14: ldc.i4.1 */
                /* IL_15: ret */
                return (1|0);
                case 0x16:
                /* IL_16: ldc.i4.0 */
                /* IL_17: ret */
                return (0|0);
            }
        }
    };
    /* Void .ctor()*/
    asm.x600001b = function _ctor(arg0)
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
    asm.IA = (function ()
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
            function IA()
            {
                (IA.init)();
                this.constructor = IA;
            };
            c = IA;
            ct = c;
            IA.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(IA,"IA",asm,false,false,true,false,false,[],[
                    [
                        asm1,
                        "x600000c",
                        "Add"
                    ],
                    [
                        asm1,
                        "x600000d",
                        "Add2"
                    ]
                ],null,is_inst_interface(IA),Array,"asm1.t2000007");
                IA.Interfaces = [];
                declare_virtual(IA,"asm1.x600000c","asm1.x600000c");
                declare_virtual(IA,"asm1.x600000d","asm1.x600000d");
            };
            IA.prototype = {};
            return c;
        };
    })();
    asm.IB = (function ()
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
            function IB()
            {
                (IB.init)();
                this.constructor = IB;
            };
            c = IB;
            ct = c;
            IB.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(IB,"IB",asm,false,false,true,false,false,[],[
                    [
                        asm1,
                        "x600000e",
                        "Add"
                    ]
                ],null,is_inst_interface(IB),Array,"asm1.t2000008");
                IB.Interfaces = [];
                declare_virtual(IB,"asm1.x600000e","asm1.x600000e");
            };
            IB.prototype = {};
            return c;
        };
    })();
    asm.IC = (function ()
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
            function IC()
            {
                (IC.init)();
                this.constructor = IC;
            };
            c = IC;
            ct = c;
            IC.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(IC,"IC",asm,false,false,true,false,false,[],[
                    [
                        asm1,
                        "x600000f",
                        "Add"
                    ]
                ],null,is_inst_interface(IC),Array,"asm1.t2000009");
                IC.Interfaces = [];
                declare_virtual(IC,"asm1.x600000f","asm1.x600000f");
            };
            IC.prototype = {};
            return c;
        };
    })();
    asm.ID = (function ()
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
            function ID()
            {
                (ID.init)();
                this.constructor = ID;
            };
            c = ID;
            ct = c;
            ID.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(ID,"ID",asm,false,false,true,false,false,[],[],null,is_inst_interface(ID),Array,"asm1.t200000a");
                ID.Interfaces = [
                    (asm1.IA)(),
                    (asm1.IB)()
                ];
            };
            ID.prototype = {};
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
                D.Interfaces = [
                    (asm1.ID)(),
                    (asm1.IA)(),
                    (asm1.IB)()
                ];
                declare_virtual(D,"asm1.x6000010","asm1.x6000010");
                declare_virtual(D,"asm1.x6000011","asm1.x6000011");
                declare_virtual(D,"asm1.x6000012","asm1.x6000012");
                declare_virtual(D,"asm0.x6000005","asm0.x6000005");
                declare_virtual(D,"asm0.x6000008","asm0.x6000008");
                declare_virtual(D,"asm0.x6000009","asm0.x6000009");
                tree_set([
                    (asm1.ID)()
                ],D.prototype.ifacemap,{});
                tree_set([
                    (asm1.IA)()
                ],D.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x6000010;
                    },
                    'x600000d': function ()
                    {
                        return asm1.x6000011;
                    }
                });
                tree_set([
                    (asm1.IB)()
                ],D.prototype.ifacemap,{
                    'x600000e': function ()
                    {
                        return asm1.x6000012;
                    }
                });
            };
            D.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.E = (function ()
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
            function E()
            {
                (E.init)();
                this.constructor = E;
            };
            c = E;
            ct = c;
            E.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                initType(E,"E",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(E),Array,"asm1.t200000c");
                E.Interfaces = [
                    (asm1.IC)(),
                    (asm1.ID)(),
                    (asm1.IA)(),
                    (asm1.IB)()
                ];
                declare_virtual(E,"asm1.x6000014","asm1.x6000014");
                declare_virtual(E,"asm1.x6000015","asm1.x6000015");
                declare_virtual(E,"asm1.x6000016","asm1.x6000016");
                declare_virtual(E,"asm1.x6000017","asm1.x6000017");
                declare_virtual(E,"asm0.x6000005","asm0.x6000005");
                declare_virtual(E,"asm0.x6000008","asm0.x6000008");
                declare_virtual(E,"asm0.x6000009","asm0.x6000009");
                tree_set([
                    (asm1.IC)()
                ],E.prototype.ifacemap,{
                    'x600000f': function ()
                    {
                        return asm1.x6000014;
                    }
                });
                tree_set([
                    (asm1.ID)()
                ],E.prototype.ifacemap,{});
                tree_set([
                    (asm1.IA)()
                ],E.prototype.ifacemap,{
                    'x600000c': function ()
                    {
                        return asm1.x6000015;
                    },
                    'x600000d': function ()
                    {
                        return asm1.x6000016;
                    }
                });
                tree_set([
                    (asm1.IB)()
                ],E.prototype.ifacemap,{
                    'x600000e': function ()
                    {
                        return asm1.x6000017;
                    }
                });
            };
            E.prototype = new (((asm0)["System.Object"])())();
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
                initType(C,"C",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),is_inst_default(C),Array,"asm1.t200000d");
                C.Interfaces = [];
                declare_virtual(C,"asm0.x6000005","asm0.x6000005");
                declare_virtual(C,"asm0.x6000008","asm0.x6000008");
                declare_virtual(C,"asm0.x6000009","asm0.x6000009");
            };
            C.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600001a;
})(asm1 || (asm1 = {}));
