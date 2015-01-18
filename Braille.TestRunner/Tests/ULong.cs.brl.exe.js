var asm0; (function (asm)
{
    asm.FullName = "mscorlib, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* static Boolean ReferenceEqualsImpl(System.Object, System.Object)*/
    asm.x6000001 = function (a, b) { return Number(a === b); };;
    /* static Int32 GetHashCode(System.Object)*/
    asm.x6000002 = function (o) { return o.hash || (o.hash = asm0.next_hash++); };;
    /* Object toString()*/
    asm.x6000004 = function () { return asm0.ToJavaScriptString(this); };;
    /* String ToString()*/
    asm.x6000005 = function ToString(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldstr System.Object*/
        /* IL_06: stloc.0 */
        loc0 = new_string("System.Object");
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* static Object ToJavaScriptString(System.Object)*/
    asm.x6000006 = function ToJavaScriptString(arg0)
    {
        var __pos_0__;
        var loc2;
        var loc1;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.2 */
                loc2 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.2 */
                /* IL_0A: brtrue.s IL_19*/
                
                if (loc2){
                    __pos_0__ = 0x19;
                    continue;
                }
                /* IL_0C: ldstr */
                /* IL_11: ldfld Object jsstr*/
                /* IL_16: stloc.1 */
                loc1 = new_string("").jsstr;
                /* IL_17: br.s IL_39*/
                __pos_0__ = 0x39;
                continue;
                case 0x19:
                /* IL_19: nop */
                
                /* IL_1A: ldarg.0 */
                /* IL_1B: callvirt String ToString()*/
                /* IL_20: stloc.0 */
                loc0 = (((arg0.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(arg0));
                /* IL_21: ldloc.0 */
                /* IL_22: ldnull */
                /* IL_24: ceq */
                /* IL_25: ldc.i4.0 */
                /* IL_27: ceq */
                /* IL_28: stloc.2 */
                loc2 = ((((loc0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_29: ldloc.2 */
                /* IL_2A: brtrue.s IL_30*/
                
                if (loc2){
                    __pos_0__ = 0x30;
                    continue;
                }
                /* IL_2C: ldnull */
                /* IL_2D: stloc.1 */
                loc1 = null;
                /* IL_2E: br.s IL_39*/
                __pos_0__ = 0x39;
                continue;
                case 0x30:
                /* IL_30: ldloc.0 */
                /* IL_31: ldfld Object jsstr*/
                /* IL_36: stloc.1 */
                loc1 = loc0.jsstr;
                case 0x39:
                /* IL_39: ldloc.1 */
                /* IL_3A: ret */
                return loc1;
            }
        }
    };;
    asm.ToJavaScriptString = asm.x6000006;
    /* static Boolean ReferenceEquals(System.Object, System.Object)*/
    asm.x6000007 = function ReferenceEquals(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean ReferenceEqualsImpl(System.Object, System.Object)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x6000001)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* Boolean Equals(System.Object)*/
    asm.x6000008 = function Equals(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x6000007)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* Int32 GetHashCode()*/
    asm.x6000009 = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetHashCode(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000002)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Type GetType()*/
    asm.x600000a = function GetType(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Type GetType(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x60000c3)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static Boolean Equals(System.Object, System.Object)*/
    asm.x600000b = function Equals(arg0,arg1)
    {
        var __pos_0__;
        var loc1;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldarg.1 */
                /* IL_03: call Boolean ReferenceEquals(System.Object, System.Object)*/
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.1 */
                loc1 = (((asm0.x6000007)(arg0,arg1) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.1 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc1){
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.1 */
                /* IL_10: stloc.0 */
                loc0 = (1|0);
                /* IL_11: br.s IL_2F*/
                __pos_0__ = 0x2F;
                continue;
                case 0x13:
                /* IL_13: ldarg.0 */
                /* IL_14: ldnull */
                /* IL_15: call Boolean ReferenceEquals(System.Object, System.Object)*/
                /* IL_1A: ldc.i4.0 */
                /* IL_1C: ceq */
                /* IL_1D: stloc.1 */
                loc1 = (((asm0.x6000007)(arg0,null) === (0|0)) ? (1) : (0));
                /* IL_1E: ldloc.1 */
                /* IL_1F: brtrue.s IL_25*/
                
                if (loc1){
                    __pos_0__ = 0x25;
                    continue;
                }
                /* IL_21: ldc.i4.0 */
                /* IL_22: stloc.0 */
                loc0 = (0|0);
                /* IL_23: br.s IL_2F*/
                __pos_0__ = 0x2F;
                continue;
                case 0x25:
                /* IL_25: ldarg.0 */
                /* IL_26: ldarg.1 */
                /* IL_27: callvirt Boolean Equals(System.Object)*/
                /* IL_2C: stloc.0 */
                loc0 = (((arg0.vtable)["asm0.x6000008"])())(convert_box_to_pointer_as_needed(arg0),arg1);
                case 0x2F:
                /* IL_2F: ldloc.0 */
                /* IL_30: ret */
                return loc0;
            }
        }
    };;
    /* Void .ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_02: ret */
        return ;
    };;
    /* IEnumerator`1 GetEnumerator()*/
    asm.x6000014_init = function ()
    {
        (((asm0)["Braille.JavaScript.Array+<GetEnumerator>d__0"])().init)();
        asm.x6000014 = asm.x6000014_;
    };;
    asm.x6000014 = function (arg0)
    {
        (asm.x6000014_init.apply)(this,arguments);
        return (asm.x6000014_.apply)(this,arguments);
    };;
    asm.x6000014_ = function GetEnumerator(arg0)
    {
        var t0;
        var loc0;
        var loc1;
        t0 = ((asm0)["Braille.JavaScript.Array+<GetEnumerator>d__0"])();
        /* IL_00: ldc.i4.0 */
        /* IL_01: newobj Void .ctor(System.Int32)*/
        /* IL_06: stloc.0 */
        loc0 = newobj(t0,asm0.x60001a0,[
            null,
            (0|0)
        ]);
        /* IL_07: ldloc.0 */
        /* IL_08: ldarg.0 */
        /* IL_09: stfld Array <>4__this*/
        (loc0)["<>4__this"] = arg0;
        /* IL_0E: ldloc.0 */
        /* IL_0F: stloc.1 */
        loc1 = loc0;
        /* IL_12: ldloc.1 */
        /* IL_13: ret */
        return loc1;
    };
    /* IEnumerator System.Collections.IEnumerable.GetEnumerator()*/
    asm.x6000015 = function System_Collections_IEnumerable_GetEnumerator(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call IEnumerator`1 GetEnumerator()*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000014)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* Boolean Equals(System.Object)*/
    asm.x6000016 = function Equals(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean ValueTypeEquals(System.Object, System.Object)*/
        /* IL_08: stloc.0 */
        loc0 = value_equals(arg0.r(), arg1.boxed);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* Void .ctor()*/
    asm.x6000018 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600001a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* static Void .cctor()*/
    asm.x600001f_init = function ()
    {
        (((asm0)["Braille.JavaScript.String"])().init)();
        asm.x600001f = asm.x600001f_;
    };;
    asm.x600001f = function ()
    {
        (asm.x600001f_init.apply)(this,arguments);
        return (asm.x600001f_.apply)(this,arguments);
    };;
    asm.x600001f_ = function _cctor()
    {
        var t0;
        
        if (((asm0)["Braille.JavaScript.String"])().FieldHasBeenInitialized){
            return;
        }
        ((asm0)["Braille.JavaScript.String"])().FieldHasBeenInitialized = true;
        t0 = ((asm0)["Braille.JavaScript.String"])();
        /* IL_00: call String GetEmpty()*/
        /* IL_05: stsfld String Emtpy*/
        (t0)["Emtpy"] = "";
        /* IL_0A: ret */
        return ;
    };
    /* static Object get_Null()*/
    asm.x6000021 = function get_Null()
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: call Object null_impl()*/
        /* IL_06: stloc.0 */
        loc0 = null;
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* static String GetText(System.String)*/
    asm.x6000025 = function GetText(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: stloc.0 */
        loc0 = arg0;
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* Void .ctor()*/
    asm.x6000026 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Assembly GetInstance(System.Reflection.Assembly+jsAsm)*/
    asm.x6000033_init = function ()
    {
        (((asm0)["System.Boolean"])().init)();
        (((asm0)["System.Reflection.Assembly"])().init)();
        asm.x6000033 = asm.x6000033_;
    };;
    asm.x6000033 = function (arg0)
    {
        (asm.x6000033_init.apply)(this,arguments);
        return (asm.x6000033_.apply)(this,arguments);
    };;
    asm.x6000033_ = function GetInstance(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.Boolean"])();
        t1 = ((asm0)["System.Reflection.Assembly"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Assembly ManagedInstance*/
                /* IL_07: call Boolean UnsafeCast[System.Boolean](System.Object)*/
                /* IL_0C: stloc.1 */
                loc1 = arg0.ManagedInstance;
                /* IL_0D: ldloc.1 */
                /* IL_0E: brtrue.s IL_1C*/
                
                if (loc1){
                    __pos_0__ = 0x1C;
                    continue;
                }
                /* IL_10: ldarg.0 */
                /* IL_11: ldarg.0 */
                /* IL_12: newobj Void .ctor(System.Reflection.Assembly+jsAsm)*/
                /* IL_17: stfld Assembly ManagedInstance*/
                arg0.ManagedInstance = newobj(t1,asm0.x6000032,[
                    null,
                    arg0
                ]);
                case 0x1C:
                /* IL_1C: ldarg.0 */
                /* IL_1D: ldfld Assembly ManagedInstance*/
                /* IL_22: stloc.0 */
                loc0 = arg0.ManagedInstance;
                /* IL_25: ldloc.0 */
                /* IL_26: ret */
                return loc0;
            }
        }
    };
    /* String get_FullName()*/
    asm.x6000034 = function get_FullName(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld jsAsm rawAsm*/
        /* IL_07: ldfld Object FullName*/
        /* IL_0C: call String FromJsString(System.Object)*/
        /* IL_11: stloc.0 */
        loc0 = new_string(arg0.System_ReflectionAssemblyrawAsm.FullName);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* Void .ctor(System.Reflection.Assembly+jsAsm)*/
    asm.x6000032 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld jsAsm rawAsm*/
        arg0.System_ReflectionAssemblyrawAsm = arg1;
        /* IL_0F: nop */
        /* IL_10: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000035 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Object[] GetCustomAttributesImpl(System.Object)*/
    asm.x600003c = 
            function (ca) {
                ca = ca || [];
                var r = new_array(asm0['System.Object'], ca.length);
                for (var i=0; i<ca.length; i++) {
                    var attr_type = ca[i][0];
                    var attr_ctor = ca[i][1];
                    var attr_ctor_args_data = ca[i][2];
                    var attr = new attr_type();
                    var attr_ctor_args = [attr];
                    if (attr_ctor_args_data) {
                        for (var j=0; j<attr_ctor_args_data.length; j++) {
                            var d = attr_ctor_args_data[j];
                            if (typeof d === 'function') {
                                d(); // init type
                                d = asm0.GetReflectionType(d);
                            }
                            attr_ctor_args.push(d);
                        }
                    }
                    attr_ctor.apply(null, attr_ctor_args);
                    r.jsarr[i] = attr;
                }
                return r;
            }
            ;;
    /* Void .ctor()*/
    asm.x600003e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static MethodInfo GetInstance(Braille.JavaScript.Array)*/
    asm.x6000040_init = function ()
    {
        (((asm0)["System.Reflection.MethodInfo"])().init)();
        asm.x6000040 = asm.x6000040_;
    };;
    asm.x6000040 = function (arg0)
    {
        (asm.x6000040_init.apply)(this,arguments);
        return (asm.x6000040_.apply)(this,arguments);
    };;
    asm.x6000040_ = function GetInstance(arg0)
    {
        var t0;
        var loc0;
        var loc1;
        t0 = ((asm0)["System.Reflection.MethodInfo"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: stloc.0 */
        loc0 = newobj(t0,asm0.x600003f,[
            null
        ]);
        /* IL_07: ldloc.0 */
        /* IL_08: ldarg.0 */
        /* IL_09: stfld Array mtd*/
        loc0.System_ReflectionMethodInfomtd = arg0;
        /* IL_0E: ldloc.0 */
        /* IL_0F: stloc.1 */
        loc1 = loc0;
        /* IL_12: ldloc.1 */
        /* IL_13: ret */
        return loc1;
    };
    /* Object[] GetCustomAttributes(System.Boolean)*/
    asm.x6000041 = function GetCustomAttributes(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Array mtd*/
        /* IL_07: ldc.i4.3 */
        /* IL_08: callvirt Object get_Item(System.Int32)*/
        /* IL_0D: call Object[] GetCustomAttributesImpl(System.Object)*/
        /* IL_12: stloc.0 */
        loc0 = (asm0.x600003c)(arg0.System_ReflectionMethodInfomtd[(3|0)]);
        /* IL_15: ldloc.0 */
        /* IL_16: ret */
        return loc0;
    };;
    /* Object[] GetCustomAttributes(System.Type, System.Boolean)*/
    asm.x6000042_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x6000042 = asm.x6000042_;
    };;
    asm.x6000042 = function (arg0,arg1,arg2)
    {
        (asm.x6000042_init.apply)(this,arguments);
        return (asm.x6000042_.apply)(this,arguments);
    };;
    asm.x6000042_ = function GetCustomAttributes(arg0,arg1,arg2)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x60000ea,[
            null
        ]);
    };
    /* Boolean IsDefined(System.Type, System.Boolean)*/
    asm.x6000043_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x6000043 = asm.x6000043_;
    };;
    asm.x6000043 = function (arg0,arg1,arg2)
    {
        (asm.x6000043_init.apply)(this,arguments);
        return (asm.x6000043_.apply)(this,arguments);
    };;
    asm.x6000043_ = function IsDefined(arg0,arg1,arg2)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x60000ea,[
            null
        ]);
    };
    /* String get_Name()*/
    asm.x6000044_init = function ()
    {
        (((asm0)["Braille.JavaScript.String"])().init)();
        asm.x6000044 = asm.x6000044_;
    };;
    asm.x6000044 = function (arg0)
    {
        (asm.x6000044_init.apply)(this,arguments);
        return (asm.x6000044_.apply)(this,arguments);
    };;
    asm.x6000044_ = function get_Name(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["Braille.JavaScript.String"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Array mtd*/
        /* IL_07: ldc.i4.2 */
        /* IL_08: callvirt Object get_Item(System.Int32)*/
        /* IL_0D: call String UnsafeCast[Braille.JavaScript.String](System.Object)*/
        /* IL_12: call String op_Explicit(Braille.JavaScript.String)*/
        /* IL_17: stloc.0 */
        loc0 = new_string(arg0.System_ReflectionMethodInfomtd[(2|0)]);
        /* IL_1A: ldloc.0 */
        /* IL_1B: ret */
        return loc0;
    };
    /* Object Invoke(System.Object, System.Object[])*/
    asm.x6000045 = function Invoke(arg0,arg1,arg2)
    {
        var loc0;
        var loc1;
        var loc2;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Array mtd*/
        /* IL_07: ldc.i4.0 */
        /* IL_08: callvirt Object get_Item(System.Int32)*/
        /* IL_0D: stloc.0 */
        loc0 = arg0.System_ReflectionMethodInfomtd[(0|0)];
        /* IL_0E: ldarg.0 */
        /* IL_0F: ldfld Array mtd*/
        /* IL_14: ldc.i4.1 */
        /* IL_15: callvirt Object get_Item(System.Int32)*/
        /* IL_1A: stloc.1 */
        loc1 = arg0.System_ReflectionMethodInfomtd[(1|0)];
        /* IL_1B: ldloc.0 */
        /* IL_1C: ldloc.1 */
        /* IL_1D: ldarg.1 */
        /* IL_1E: ldarg.2 */
        /* IL_1F: call Object InvokeImpl(System.Object, System.Object, System.Object, System.Object[])*/
        /* IL_24: stloc.2 */
        loc2 = (asm0.x6000046)(loc0,loc1,arg1,arg2);
        /* IL_27: ldloc.2 */
        /* IL_28: ret */
        return loc2;
    };;
    /* static Object InvokeImpl(System.Object, System.Object, System.Object, System.Object[])*/
    asm.x6000046 = 
            function InvokeImpl(assembly, method, obj, parameters) {
                var args = [obj].concat(parameters.jsarr);
                return assembly[method].apply(null, args);
            }
            ;;
    /* Void .ctor()*/
    asm.x600003f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600003e)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000047 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* String get_AssemblyName()*/
    asm.x6000049 = function get_AssemblyName(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld String assemblyName*/
        /* IL_07: stloc.0 */
        loc0 = arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Boolean get_AllInternalsVisible()*/
    asm.x600004a = function get_AllInternalsVisible(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Boolean allInternalsVisible*/
        /* IL_07: stloc.0 */
        loc0 = arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Void set_AllInternalsVisible(System.Boolean)*/
    asm.x600004b = function set_AllInternalsVisible(arg0,arg1)
    {
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: stfld Boolean allInternalsVisible*/
        arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = arg1;
        /* IL_08: ret */
        return ;
    };;
    /* Void .ctor(System.String)*/
    asm.x6000048 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.1 */
        /* IL_02: stfld Boolean allInternalsVisible*/
        arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = (1|0);
        /* IL_07: ldarg.0 */
        /* IL_08: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_0D: nop */
        /* IL_0E: nop */
        /* IL_0F: ldarg.0 */
        /* IL_10: ldarg.1 */
        /* IL_11: stfld String assemblyName*/
        arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName = arg1;
        /* IL_16: nop */
        /* IL_17: ret */
        return ;
    };;
    /* static Type GetUnderlyingType(System.Type)*/
    asm.x600004c_init = function ()
    {
        (((asm0)["System.InvalidOperationException"])().init)();
        (((asm0)["System.Int32"])().init)();
        asm.x600004c = asm.x600004c_;
    };;
    asm.x600004c = function (arg0)
    {
        (asm.x600004c_init.apply)(this,arguments);
        return (asm.x600004c_.apply)(this,arguments);
    };;
    asm.x600004c_ = function GetUnderlyingType(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.InvalidOperationException"])();
        t1 = ((asm0)["System.Int32"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: callvirt Boolean get_IsEnum()*/
                /* IL_07: stloc.1 */
                loc1 = (asm0.x60000af)(arg0);
                /* IL_08: ldloc.1 */
                /* IL_09: brtrue.s IL_11*/
                
                if (loc1){
                    __pos_0__ = 0x11;
                    continue;
                }
                /* IL_0B: newobj Void .ctor()*/
                /* IL_10: throw */
                throw newobj(t0,asm0.x60000f6,[
                    null
                ]);
                case 0x11:
                /* IL_11: ldtoken System.Int32*/
                /* IL_16: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_1B: stloc.0 */
                loc0 = (asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t1));
                /* IL_1E: ldloc.0 */
                /* IL_1F: ret */
                return loc0;
            }
        }
    };
    /* Void .ctor()*/
    asm.x600004d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000018)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* MethodImplOptions get_Value()*/
    asm.x6000051 = function get_Value(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld MethodImplOptions _val*/
        /* IL_07: stloc.0 */
        loc0 = arg0.System_Runtime_CompilerServicesMethodImplAttribute_val;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Void .ctor()*/
    asm.x600004e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* Void .ctor(System.Int16)*/
    asm.x600004f = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld MethodImplOptions _val*/
        arg0.System_Runtime_CompilerServicesMethodImplAttribute_val = arg1;
        /* IL_0F: nop */
        /* IL_10: ret */
        return ;
    };;
    /* Void .ctor(System.Runtime.CompilerServices.MethodImplOptions)*/
    asm.x6000050 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld MethodImplOptions _val*/
        arg0.System_Runtime_CompilerServicesMethodImplAttribute_val = arg1;
        /* IL_0F: nop */
        /* IL_10: ret */
        return ;
    };;
    /* static Object CreateInstance(System.Type)*/
    asm.x6000052 = function CreateInstance(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Object CreateInstanceImpl(System.Type)*/
        /* IL_07: stloc.0 */
        loc0 = (new (arg0.ctor)());
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* AttributeTargets get_ValidOn()*/
    asm.x6000055 = function get_ValidOn(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld AttributeTargets <ValidOn>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void set_ValidOn(System.AttributeTargets)*/
    asm.x6000056 = function set_ValidOn(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld AttributeTargets <ValidOn>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Boolean get_Inherited()*/
    asm.x6000057 = function get_Inherited(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Boolean <Inherited>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemAttributeUsageAttribute<Inherited>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void set_Inherited(System.Boolean)*/
    asm.x6000058 = function set_Inherited(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Boolean <Inherited>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Boolean get_AllowMultiple()*/
    asm.x6000059 = function get_AllowMultiple(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Boolean <AllowMultiple>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void set_AllowMultiple(System.Boolean)*/
    asm.x600005a = function set_AllowMultiple(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Boolean <AllowMultiple>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Void .ctor(System.AttributeTargets)*/
    asm.x6000054 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: call Void set_ValidOn(System.AttributeTargets)*/
        (asm0.x6000056)(arg0,clone_value(arg1));
        /* IL_0F: nop */
        /* IL_10: nop */
        /* IL_11: ret */
        return ;
    };;
    /* String ToString()*/
    asm.x600005b = function ToString(arg0)
    {
        var st_02;
        var __pos_0__;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i1 */
                /* IL_03: brtrue.s IL_0C*/
                
                if ((arg0.r)()){
                    __pos_0__ = 0xC;
                    continue;
                }
                /* IL_05: ldstr False*/
                st_02 = new_string("False");
                /* IL_0A: br.s IL_11*/
                __pos_0__ = 0x11;
                continue;
                case 0xC:
                /* IL_0C: ldstr True*/
                st_02 = new_string("True");
                case 0x11:
                /* IL_11: nop */
                
                /* IL_12: stloc.0 */
                loc0 = st_02;
                /* IL_15: ldloc.0 */
                /* IL_16: ret */
                return loc0;
            }
        }
    };;
    /* Boolean Equals(System.Object)*/
    asm.x600005c_init = function ()
    {
        (((asm0)["System.Boolean"])().init)();
        asm.x600005c = asm.x600005c_;
    };;
    asm.x600005c = function (arg0,arg1)
    {
        (asm.x600005c_init.apply)(this,arguments);
        return (asm.x600005c_.apply)(this,arguments);
    };;
    asm.x600005c_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = ((asm0)["System.Boolean"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.Boolean*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.3 */
                loc3 = (((t0.IsInst)(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc3){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldind.i1 */
                /* IL_14: stloc.0 */
                loc0 = (arg0.r)();
                /* IL_15: ldarg.1 */
                /* IL_16: unbox.any System.Boolean*/
                /* IL_1B: stloc.1 */
                loc1 = unbox_any(arg1,t0);
                /* IL_1C: ldloc.0 */
                /* IL_1D: ldloc.1 */
                /* IL_1F: ceq */
                /* IL_20: stloc.2 */
                loc2 = ((loc0 === loc1) ? (1) : (0));
                case 0x23:
                /* IL_23: ldloc.2 */
                /* IL_24: ret */
                return loc2;
            }
        }
    };
    /* String ToString()*/
    asm.x600006a_init = function ()
    {
        (((asm0)["System.Byte"])().init)();
        asm.x600006a = asm.x600006a_;
    };;
    asm.x600006a = function (arg0)
    {
        (asm.x600006a_init.apply)(this,arguments);
        return (asm.x600006a_.apply)(this,arguments);
    };;
    asm.x600006a_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Byte"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u1 */
        /* IL_03: box System.Byte*/
        /* IL_08: ldc.i4.8 */
        /* IL_09: call String UnsignedPrimitiveToString(System.Object, System.Int32)*/
        /* IL_0E: stloc.0 */
        loc0 = (asm0.x600009b)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        },(8|0));
        /* IL_11: ldloc.0 */
        /* IL_12: ret */
        return loc0;
    };
    /* Boolean Equals(System.Object)*/
    asm.x600006b_init = function ()
    {
        (((asm0)["System.Byte"])().init)();
        asm.x600006b = asm.x600006b_;
    };;
    asm.x600006b = function (arg0,arg1)
    {
        (asm.x600006b_init.apply)(this,arguments);
        return (asm.x600006b_.apply)(this,arguments);
    };;
    asm.x600006b_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = ((asm0)["System.Byte"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.Byte*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.3 */
                loc3 = (((t0.IsInst)(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc3){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldind.u1 */
                /* IL_14: stloc.0 */
                loc0 = (arg0.r)();
                /* IL_15: ldarg.1 */
                /* IL_16: unbox.any System.Byte*/
                /* IL_1B: stloc.1 */
                loc1 = unbox_any(arg1,t0);
                /* IL_1C: ldloc.0 */
                /* IL_1D: ldloc.1 */
                /* IL_1F: ceq */
                /* IL_20: stloc.2 */
                loc2 = ((loc0 === loc1) ? (1) : (0));
                case 0x23:
                /* IL_23: ldloc.2 */
                /* IL_24: ret */
                return loc2;
            }
        }
    };
    /* Int32 GetHashCode()*/
    asm.x600006c = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u1 */
        /* IL_03: stloc.0 */
        loc0 = (arg0.r)();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* String ToString()*/
    asm.x600006d_init = function ()
    {
        (((asm0)["System.Char"])().init)();
        asm.x600006d = asm.x600006d_;
    };;
    asm.x600006d = function (arg0)
    {
        (asm.x600006d_init.apply)(this,arguments);
        return (asm.x600006d_.apply)(this,arguments);
    };;
    asm.x600006d_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Char"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u2 */
        /* IL_03: box System.Char*/
        /* IL_08: call String ToStringImpl(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x600006e)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* static String ToStringImpl(System.Object)*/
    asm.x600006e = function(o) { return new_string(String.fromCharCode(o.boxed)); };;
    /* static Boolean IsDigit(System.Char)*/
    asm.x600006f = function(o) { return (48 <= o.boxed && o.boxed <= 57) ? 1 : 0; };;
    /* static Delegate Combine(System.Delegate, System.Delegate)*/
    asm.x6000070_init = function ()
    {
        (((asm0)["System.Exception"])().init)();
        asm.x6000070 = asm.x6000070_;
    };;
    asm.x6000070 = function (arg0,arg1)
    {
        (asm.x6000070_init.apply)(this,arguments);
        return (asm.x6000070_.apply)(this,arguments);
    };;
    asm.x6000070_ = function Combine(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.Exception"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.1 */
                loc1 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.1 */
                /* IL_0A: brtrue.s IL_20*/
                
                if (loc1){
                    __pos_0__ = 0x20;
                    continue;
                }
                /* IL_0C: nop */
                
                /* IL_0D: ldarg.1 */
                /* IL_0E: ldnull */
                /* IL_10: ceq */
                /* IL_11: ldc.i4.0 */
                /* IL_13: ceq */
                /* IL_14: stloc.1 */
                loc1 = ((((arg1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_15: ldloc.1 */
                /* IL_16: brtrue.s IL_1C*/
                
                if (loc1){
                    __pos_0__ = 0x1C;
                    continue;
                }
                /* IL_18: ldnull */
                /* IL_19: stloc.0 */
                loc0 = null;
                /* IL_1A: br.s IL_56*/
                __pos_0__ = 0x56;
                continue;
                case 0x1C:
                /* IL_1C: ldarg.1 */
                /* IL_1D: stloc.0 */
                loc0 = arg1;
                /* IL_1E: br.s IL_56*/
                __pos_0__ = 0x56;
                continue;
                case 0x20:
                /* IL_20: ldarg.1 */
                /* IL_21: ldnull */
                /* IL_23: ceq */
                /* IL_24: ldc.i4.0 */
                /* IL_26: ceq */
                /* IL_27: stloc.1 */
                loc1 = ((((arg1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_28: ldloc.1 */
                /* IL_29: brtrue.s IL_2F*/
                
                if (loc1){
                    __pos_0__ = 0x2F;
                    continue;
                }
                /* IL_2B: ldarg.0 */
                /* IL_2C: stloc.0 */
                loc0 = arg0;
                /* IL_2D: br.s IL_56*/
                __pos_0__ = 0x56;
                continue;
                case 0x2F:
                /* IL_2F: ldarg.0 */
                /* IL_30: callvirt Type GetType()*/
                /* IL_35: ldarg.1 */
                /* IL_36: callvirt Type GetType()*/
                /* IL_3C: ceq */
                /* IL_3D: stloc.1 */
                loc1 = (((asm0.x600000a)(arg0) === (asm0.x600000a)(arg1)) ? (1) : (0));
                /* IL_3E: ldloc.1 */
                /* IL_3F: brtrue.s IL_4C*/
                
                if (loc1){
                    __pos_0__ = 0x4C;
                    continue;
                }
                /* IL_41: ldstr Incompatible delegate types*/
                /* IL_46: newobj Void .ctor(System.String)*/
                /* IL_4B: throw */
                throw newobj(t0,asm0.x600009e,[
                    null,
                    new_string("Incompatible delegate types")
                ]);
                case 0x4C:
                /* IL_4C: ldarg.0 */
                /* IL_4D: ldarg.1 */
                /* IL_4E: callvirt Delegate CombineImpl(System.Delegate)*/
                /* IL_53: stloc.0 */
                loc0 = (((arg0.vtable)["asm0.x6000073"])())(arg0,arg1);
                case 0x56:
                /* IL_56: ldloc.0 */
                /* IL_57: ret */
                return loc0;
            }
        }
    };
    /* static Delegate Remove(System.Delegate, System.Delegate)*/
    asm.x6000071_init = function ()
    {
        (((asm0)["System.Exception"])().init)();
        asm.x6000071 = asm.x6000071_;
    };;
    asm.x6000071 = function (arg0,arg1)
    {
        (asm.x6000071_init.apply)(this,arguments);
        return (asm.x6000071_.apply)(this,arguments);
    };;
    asm.x6000071_ = function Remove(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.Exception"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.1 */
                loc1 = ((((arg1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.1 */
                /* IL_0A: brtrue.s IL_10*/
                
                if (loc1){
                    __pos_0__ = 0x10;
                    continue;
                }
                /* IL_0C: ldarg.0 */
                /* IL_0D: stloc.0 */
                loc0 = arg0;
                /* IL_0E: br.s IL_37*/
                __pos_0__ = 0x37;
                continue;
                case 0x10:
                /* IL_10: ldarg.0 */
                /* IL_11: callvirt Type GetType()*/
                /* IL_16: ldarg.1 */
                /* IL_17: callvirt Type GetType()*/
                /* IL_1D: ceq */
                /* IL_1E: stloc.1 */
                loc1 = (((asm0.x600000a)(arg0) === (asm0.x600000a)(arg1)) ? (1) : (0));
                /* IL_1F: ldloc.1 */
                /* IL_20: brtrue.s IL_2D*/
                
                if (loc1){
                    __pos_0__ = 0x2D;
                    continue;
                }
                /* IL_22: ldstr Incompatible delegate types*/
                /* IL_27: newobj Void .ctor(System.String)*/
                /* IL_2C: throw */
                throw newobj(t0,asm0.x600009e,[
                    null,
                    new_string("Incompatible delegate types")
                ]);
                case 0x2D:
                /* IL_2D: ldarg.0 */
                /* IL_2E: ldarg.1 */
                /* IL_2F: callvirt Delegate RemoveImpl(System.Delegate)*/
                /* IL_34: stloc.0 */
                loc0 = (((arg0.vtable)["asm0.x6000072"])())(arg0,arg1);
                case 0x37:
                /* IL_37: ldloc.0 */
                /* IL_38: ret */
                return loc0;
            }
        }
    };
    /* Delegate RemoveImpl(System.Delegate)*/
    asm.x6000072_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x6000072 = asm.x6000072_;
    };;
    asm.x6000072 = function (arg0,arg1)
    {
        (asm.x6000072_init.apply)(this,arguments);
        return (asm.x6000072_.apply)(this,arguments);
    };;
    asm.x6000072_ = function RemoveImpl(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x60000ea,[
            null
        ]);
    };
    /* Delegate CombineImpl(System.Delegate)*/
    asm.x6000073_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x6000073 = asm.x6000073_;
    };;
    asm.x6000073 = function (arg0,arg1)
    {
        (asm.x6000073_init.apply)(this,arguments);
        return (asm.x6000073_.apply)(this,arguments);
    };;
    asm.x6000073_ = function CombineImpl(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x60000ea,[
            null
        ]);
    };
    /* Boolean Equals(System.Object)*/
    asm.x6000074_init = function ()
    {
        (((asm0)["System.Delegate"])().init)();
        asm.x6000074 = asm.x6000074_;
    };;
    asm.x6000074 = function (arg0,arg1)
    {
        (asm.x6000074_init.apply)(this,arguments);
        return (asm.x6000074_.apply)(this,arguments);
    };;
    asm.x6000074_ = function Equals(arg0,arg1)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Delegate"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: isinst System.Delegate*/
        /* IL_08: call Boolean op_Equality(System.Delegate, System.Delegate)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x6000075)(arg0,(t0.IsInst)(arg1));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* static Boolean op_Equality(System.Delegate, System.Delegate)*/
    asm.x6000075_init = function ()
    {
        (((asm0)["System.MulticastDelegate"])().init)();
        asm.x6000075 = asm.x6000075_;
    };;
    asm.x6000075 = function (arg0,arg1)
    {
        (asm.x6000075_init.apply)(this,arguments);
        return (asm.x6000075_.apply)(this,arguments);
    };;
    asm.x6000075_ = function op_Equality(arg0,arg1)
    {
        var t0;
        var st_27;
        var st_52;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc6;
        var loc5;
        var loc2;
        var loc3;
        var loc4;
        t0 = ((asm0)["System.MulticastDelegate"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: castclass System.MulticastDelegate*/
                /* IL_07: stloc.0 */
                loc0 = arg0;
                /* IL_08: ldarg.1 */
                /* IL_09: castclass System.MulticastDelegate*/
                /* IL_0E: stloc.1 */
                loc1 = arg1;
                /* IL_0F: ldloc.0 */
                /* IL_10: ldnull */
                /* IL_12: ceq */
                /* IL_13: ldc.i4.0 */
                /* IL_15: ceq */
                /* IL_16: stloc.s 6*/
                loc6 = ((((loc0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_18: ldloc.s 6*/
                /* IL_1A: brtrue.s IL_27*/
                
                if (loc6){
                    __pos_0__ = 0x27;
                    continue;
                }
                /* IL_1C: ldloc.1 */
                /* IL_1D: ldnull */
                /* IL_1F: ceq */
                /* IL_20: stloc.s 5*/
                loc5 = ((loc1 === null) ? (1) : (0));
                /* IL_22: br IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0x27:
                /* IL_27: ldloc.1 */
                /* IL_28: ldnull */
                /* IL_2A: ceq */
                /* IL_2B: ldc.i4.0 */
                /* IL_2D: ceq */
                /* IL_2E: stloc.s 6*/
                loc6 = ((((loc1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_30: ldloc.s 6*/
                /* IL_32: brtrue.s IL_3C*/
                
                if (loc6){
                    __pos_0__ = 0x3C;
                    continue;
                }
                /* IL_34: ldc.i4.0 */
                /* IL_35: stloc.s 5*/
                loc5 = (0|0);
                /* IL_37: br IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0x3C:
                /* IL_3C: ldloc.0 */
                /* IL_3D: ldfld Object _methodPtr*/
                /* IL_42: ldloc.1 */
                /* IL_43: ldfld Object _methodPtr*/
                /* IL_48: call Boolean ReferenceEquals(System.Object, System.Object)*/
                /* IL_4D: stloc.s 6*/
                loc6 = (asm0.x6000007)(loc0._methodPtr,loc1._methodPtr);
                /* IL_4F: ldloc.s 6*/
                /* IL_51: brtrue.s IL_5B*/
                
                if (loc6){
                    __pos_0__ = 0x5B;
                    continue;
                }
                /* IL_53: ldc.i4.0 */
                /* IL_54: stloc.s 5*/
                loc5 = (0|0);
                /* IL_56: br IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0x5B:
                /* IL_5B: ldloc.0 */
                /* IL_5C: ldfld Object _target*/
                /* IL_61: ldloc.1 */
                /* IL_62: ldfld Object _target*/
                /* IL_67: call Boolean ReferenceEquals(System.Object, System.Object)*/
                /* IL_6C: stloc.s 6*/
                loc6 = (asm0.x6000007)(loc0._target,loc1._target);
                /* IL_6E: ldloc.s 6*/
                /* IL_70: brtrue.s IL_7A*/
                
                if (loc6){
                    __pos_0__ = 0x7A;
                    continue;
                }
                /* IL_72: ldc.i4.0 */
                /* IL_73: stloc.s 5*/
                loc5 = (0|0);
                /* IL_75: br IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0x7A:
                /* IL_7A: ldloc.0 */
                /* IL_7B: ldfld Delegate[] _invocationList*/
                /* IL_80: brfalse.s IL_8D*/
                
                if ((!(loc0._invocationList))){
                    __pos_0__ = 0x8D;
                    continue;
                }
                /* IL_82: ldloc.1 */
                /* IL_83: ldfld Delegate[] _invocationList*/
                /* IL_88: ldnull */
                /* IL_8A: ceq */
                st_27 = ((loc1._invocationList === null) ? (1) : (0));
                /* IL_8B: br.s IL_8E*/
                __pos_0__ = 0x8E;
                continue;
                case 0x8D:
                /* IL_8D: ldc.i4.1 */
                st_27 = (1|0);
                case 0x8E:
                /* IL_8E: nop */
                
                /* IL_8F: stloc.s 6*/
                loc6 = st_27;
                /* IL_91: ldloc.s 6*/
                /* IL_93: brtrue.s IL_F9*/
                
                if (loc6){
                    __pos_0__ = 0xF9;
                    continue;
                }
                /* IL_95: nop */
                
                /* IL_96: ldloc.0 */
                /* IL_97: ldfld Delegate[] _invocationList*/
                /* IL_9C: ldlen */
                /* IL_9D: conv.i4 */
                /* IL_9E: ldloc.1 */
                /* IL_9F: ldfld Delegate[] _invocationList*/
                /* IL_A4: ldlen */
                /* IL_A5: conv.i4 */
                /* IL_A7: ceq */
                /* IL_A8: stloc.s 6*/
                loc6 = (((loc0._invocationList.jsarr.length | (0|0)) === (loc1._invocationList.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_AA: ldloc.s 6*/
                /* IL_AC: brtrue.s IL_B3*/
                
                if (loc6){
                    __pos_0__ = 0xB3;
                    continue;
                }
                /* IL_AE: ldc.i4.0 */
                /* IL_AF: stloc.s 5*/
                loc5 = (0|0);
                /* IL_B1: br.s IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0xB3:
                /* IL_B3: ldc.i4.0 */
                /* IL_B4: stloc.2 */
                loc2 = (0|0);
                /* IL_B5: br.s IL_E3*/
                __pos_0__ = 0xE3;
                continue;
                case 0xB7:
                /* IL_B7: nop */
                
                /* IL_B8: ldloc.0 */
                /* IL_B9: ldfld Delegate[] _invocationList*/
                /* IL_BE: ldloc.2 */
                /* IL_BF: ldelem.ref */
                /* IL_C0: stloc.3 */
                loc3 = (loc0._invocationList.jsarr)[loc2];
                /* IL_C1: ldloc.1 */
                /* IL_C2: ldfld Delegate[] _invocationList*/
                /* IL_C7: ldloc.2 */
                /* IL_C8: ldelem.ref */
                /* IL_C9: stloc.s 4*/
                loc4 = (loc1._invocationList.jsarr)[loc2];
                /* IL_CB: ldloc.3 */
                /* IL_CC: ldloc.s 4*/
                /* IL_CE: call Boolean op_Equality(System.Delegate, System.Delegate)*/
                /* IL_D3: stloc.s 6*/
                loc6 = (asm0.x6000075)(loc3,loc4);
                /* IL_D5: ldloc.s 6*/
                /* IL_D7: brtrue.s IL_DE*/
                
                if (loc6){
                    __pos_0__ = 0xDE;
                    continue;
                }
                /* IL_D9: ldc.i4.0 */
                /* IL_DA: stloc.s 5*/
                loc5 = (0|0);
                /* IL_DC: br.s IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0xDE:
                /* IL_DE: nop */
                
                /* IL_DF: ldloc.2 */
                /* IL_E0: ldc.i4.1 */
                /* IL_E1: add */
                /* IL_E2: stloc.2 */
                loc2 = (loc2 + (1|0)) | (0|0);
                case 0xE3:
                /* IL_E3: ldloc.2 */
                /* IL_E4: ldloc.0 */
                /* IL_E5: ldfld Delegate[] _invocationList*/
                /* IL_EA: ldlen */
                /* IL_EB: conv.i4 */
                /* IL_ED: clt */
                /* IL_EE: stloc.s 6*/
                loc6 = ((loc2 < (loc0._invocationList.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_F0: ldloc.s 6*/
                /* IL_F2: brtrue.s IL_B7*/
                
                if (loc6){
                    __pos_0__ = 0xB7;
                    continue;
                }
                /* IL_F4: ldc.i4.1 */
                /* IL_F5: stloc.s 5*/
                loc5 = (1|0);
                /* IL_F7: br.s IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0xF9:
                /* IL_F9: ldloc.0 */
                /* IL_FA: ldfld Delegate[] _invocationList*/
                /* IL_FF: brtrue.s IL_10C*/
                
                if (loc0._invocationList){
                    __pos_0__ = 0x10C;
                    continue;
                }
                /* IL_101: ldloc.1 */
                /* IL_102: ldfld Delegate[] _invocationList*/
                /* IL_107: ldnull */
                /* IL_109: ceq */
                st_52 = ((loc1._invocationList === null) ? (1) : (0));
                /* IL_10A: br.s IL_10D*/
                __pos_0__ = 0x10D;
                continue;
                case 0x10C:
                /* IL_10C: ldc.i4.0 */
                st_52 = (0|0);
                case 0x10D:
                /* IL_10D: nop */
                
                /* IL_10E: stloc.s 5*/
                loc5 = st_52;
                case 0x112:
                /* IL_112: ldloc.s 5*/
                /* IL_114: ret */
                return loc5;
            }
        }
    };
    /* static Boolean op_Inequality(System.Delegate, System.Delegate)*/
    asm.x6000076 = function op_Inequality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean op_Equality(System.Delegate, System.Delegate)*/
        /* IL_08: ldc.i4.0 */
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = (((asm0.x6000075)(arg0,arg1) === (0|0)) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    /* Int32 GetHashCode()*/
    asm.x6000077 = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetHashCode()*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000009)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static Object GetJsFunction(System.Delegate)*/
    asm.x6000079 = function GetJsFunction(arg0)
    {
        var __pos_0__;
        var loc1;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Object _target*/
                /* IL_07: ldnull */
                /* IL_09: ceq */
                /* IL_0A: stloc.1 */
                loc1 = ((arg0._target === null) ? (1) : (0));
                /* IL_0B: ldloc.1 */
                /* IL_0C: brtrue.s IL_22*/
                
                if (loc1){
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_0E: ldarg.0 */
                /* IL_0F: ldfld Object _methodPtr*/
                /* IL_14: ldarg.0 */
                /* IL_15: ldfld Object _target*/
                /* IL_1A: call Object GetJsFunction(System.Object, System.Object)*/
                /* IL_1F: stloc.0 */
                loc0 = (
            function () { 
                var args = Array.prototype.slice.apply(arguments);
                args.unshift(arg0._target);
                return arg0._methodPtr.apply(null, args);
            });
                /* IL_20: br.s IL_2B*/
                __pos_0__ = 0x2B;
                continue;
                case 0x22:
                /* IL_22: ldarg.0 */
                /* IL_23: ldfld Object _methodPtr*/
                /* IL_28: stloc.0 */
                loc0 = arg0._methodPtr;
                case 0x2B:
                /* IL_2B: ldloc.0 */
                /* IL_2C: ret */
                return loc0;
            }
        }
    };;
    /* Void .ctor()*/
    asm.x600007a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Delegate CreateMulticast(System.Delegate[])*/
    asm.x600007b = 
            function (list) { 

                var f = function () {
                    var result;
                    var arr = list.jsarr;
                    for (var i=0; i<arr.length; i++) {
                        var delegate = arr[i];
                        var m = delegate._methodPtr;
                        var t = delegate._target;
                        var args = [];
                        if (t != null)
                            args.push(t);
                        for (var j=1; j<arguments.length; j++)
                            args.push(arguments[j]);
                        result = m.apply(null, args)
                    }
                    return result;
                };
                
                var md = new list.jsarr[0].constructor();
                md._methodPtr = f;
                md._invocationList = list;
                return md;
            }
            ;;
    /* Delegate CombineImpl(System.Delegate)*/
    asm.x600007c_init = function ()
    {
        (((asm0)["System.Delegate"])().init)();
        asm.x600007c = asm.x600007c_;
    };;
    asm.x600007c = function (arg0,arg1)
    {
        (asm.x600007c_init.apply)(this,arguments);
        return (asm.x600007c_.apply)(this,arguments);
    };;
    asm.x600007c_ = function CombineImpl(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc0;
        var loc1;
        var loc2;
        t0 = ((asm0)["System.Delegate"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Delegate[] _invocationList*/
                /* IL_07: ldnull */
                /* IL_09: ceq */
                /* IL_0A: stloc.3 */
                loc3 = ((arg0._invocationList === null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_4C*/
                
                if (loc3){
                    __pos_0__ = 0x4C;
                    continue;
                }
                /* IL_0E: nop */
                
                /* IL_0F: ldarg.0 */
                /* IL_10: ldfld Delegate[] _invocationList*/
                /* IL_15: ldlen */
                /* IL_16: conv.i4 */
                /* IL_17: ldc.i4.1 */
                /* IL_18: add */
                /* IL_19: newarr System.Delegate*/
                /* IL_1E: stloc.0 */
                loc0 = new_array(t0,((arg0._invocationList.jsarr.length | (0|0)) + (1|0)) | (0|0));
                /* IL_1F: ldc.i4.0 */
                /* IL_20: stloc.1 */
                loc1 = (0|0);
                /* IL_21: br.s IL_32*/
                __pos_0__ = 0x32;
                continue;
                case 0x23:
                /* IL_23: ldloc.0 */
                /* IL_24: ldloc.1 */
                /* IL_25: ldarg.0 */
                /* IL_26: ldfld Delegate[] _invocationList*/
                /* IL_2B: ldloc.1 */
                /* IL_2C: ldelem.ref */
                /* IL_2D: stelem.ref */
                (loc0.jsarr)[loc1] = (arg0._invocationList.jsarr)[loc1];
                /* IL_2E: ldloc.1 */
                /* IL_2F: ldc.i4.1 */
                /* IL_30: add */
                /* IL_31: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x32:
                /* IL_32: ldloc.1 */
                /* IL_33: ldarg.0 */
                /* IL_34: ldfld Delegate[] _invocationList*/
                /* IL_39: ldlen */
                /* IL_3A: conv.i4 */
                /* IL_3C: clt */
                /* IL_3D: stloc.3 */
                loc3 = ((loc1 < (arg0._invocationList.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_3E: ldloc.3 */
                /* IL_3F: brtrue.s IL_23*/
                
                if (loc3){
                    __pos_0__ = 0x23;
                    continue;
                }
                /* IL_41: ldloc.0 */
                /* IL_42: ldloc.0 */
                /* IL_43: ldlen */
                /* IL_44: conv.i4 */
                /* IL_45: ldc.i4.1 */
                /* IL_46: sub */
                /* IL_47: ldarg.1 */
                /* IL_48: stelem.ref */
                (loc0.jsarr)[((loc0.jsarr.length | (0|0)) - (1|0)) | (0|0)] = arg1;
                /* IL_49: nop */
                
                /* IL_4A: br.s IL_5D*/
                __pos_0__ = 0x5D;
                continue;
                case 0x4C:
                /* IL_4C: nop */
                
                /* IL_4D: ldc.i4.2 */
                /* IL_4E: newarr System.Delegate*/
                /* IL_53: stloc.0 */
                loc0 = new_array(t0,(2|0));
                /* IL_54: ldloc.0 */
                /* IL_55: ldc.i4.0 */
                /* IL_56: ldarg.0 */
                /* IL_57: stelem.ref */
                (loc0.jsarr)[(0|0)] = arg0;
                /* IL_58: ldloc.0 */
                /* IL_59: ldc.i4.1 */
                /* IL_5A: ldarg.1 */
                /* IL_5B: stelem.ref */
                (loc0.jsarr)[(1|0)] = arg1;
                /* IL_5C: nop */
                
                case 0x5D:
                /* IL_5D: ldloc.0 */
                /* IL_5E: call Delegate CreateMulticast(System.Delegate[])*/
                /* IL_63: stloc.2 */
                loc2 = (asm0.x600007b)(loc0);
                /* IL_66: ldloc.2 */
                /* IL_67: ret */
                return loc2;
            }
        }
    };
    /* Delegate RemoveImpl(System.Delegate)*/
    asm.x600007d_init = function ()
    {
        (((asm0)["System.Delegate"])().init)();
        asm.x600007d = asm.x600007d_;
    };;
    asm.x600007d = function (arg0,arg1)
    {
        (asm.x600007d_init.apply)(this,arguments);
        return (asm.x600007d_.apply)(this,arguments);
    };;
    asm.x600007d_ = function RemoveImpl(arg0,arg1)
    {
        var t0;
        var st_59;
        var st_5A;
        var st_5B;
        var st_5C;
        var st_5D;
        var st_5E;
        var st_5F;
        var st_60;
        var st_61;
        var st_62;
        var __pos_0__;
        var loc5;
        var loc4;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        t0 = ((asm0)["System.Delegate"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Delegate[] _invocationList*/
                /* IL_07: ldnull */
                /* IL_09: ceq */
                /* IL_0A: ldc.i4.0 */
                /* IL_0C: ceq */
                /* IL_0D: stloc.s 5*/
                loc5 = ((((arg0._invocationList === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0F: ldloc.s 5*/
                /* IL_11: brtrue.s IL_34*/
                
                if (loc5){
                    __pos_0__ = 0x34;
                    continue;
                }
                /* IL_13: nop */
                
                /* IL_14: ldarg.1 */
                /* IL_15: ldarg.0 */
                /* IL_16: call Boolean op_Equality(System.Delegate, System.Delegate)*/
                /* IL_1B: ldc.i4.0 */
                /* IL_1D: ceq */
                /* IL_1E: stloc.s 5*/
                loc5 = (((asm0.x6000075)(arg1,arg0) === (0|0)) ? (1) : (0));
                /* IL_20: ldloc.s 5*/
                /* IL_22: brtrue.s IL_2C*/
                
                if (loc5){
                    __pos_0__ = 0x2C;
                    continue;
                }
                /* IL_24: ldnull */
                /* IL_25: stloc.s 4*/
                loc4 = null;
                /* IL_27: br IL_11B*/
                __pos_0__ = 0x11B;
                continue;
                case 0x2C:
                /* IL_2C: ldarg.0 */
                /* IL_2D: stloc.s 4*/
                loc4 = arg0;
                /* IL_2F: br IL_11B*/
                __pos_0__ = 0x11B;
                continue;
                case 0x34:
                /* IL_34: nop */
                
                /* IL_35: ldc.i4.0 */
                /* IL_36: stloc.0 */
                loc0 = (0|0);
                /* IL_37: ldc.i4.0 */
                /* IL_38: stloc.1 */
                loc1 = (0|0);
                /* IL_39: br.s IL_5A*/
                __pos_0__ = 0x5A;
                continue;
                case 0x3B:
                /* IL_3B: ldarg.0 */
                /* IL_3C: ldfld Delegate[] _invocationList*/
                /* IL_41: ldloc.1 */
                /* IL_42: ldelem.ref */
                /* IL_43: ldarg.1 */
                /* IL_44: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
                /* IL_49: ldc.i4.0 */
                /* IL_4B: ceq */
                /* IL_4C: stloc.s 5*/
                loc5 = (((asm0.x6000076)((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
                /* IL_4E: ldloc.s 5*/
                /* IL_50: brtrue.s IL_56*/
                
                if (loc5){
                    __pos_0__ = 0x56;
                    continue;
                }
                /* IL_52: ldloc.0 */
                /* IL_53: ldc.i4.1 */
                /* IL_54: add */
                /* IL_55: stloc.0 */
                loc0 = (loc0 + (1|0)) | (0|0);
                case 0x56:
                /* IL_56: ldloc.1 */
                /* IL_57: ldc.i4.1 */
                /* IL_58: add */
                /* IL_59: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x5A:
                /* IL_5A: ldloc.1 */
                /* IL_5B: ldarg.0 */
                /* IL_5C: ldfld Delegate[] _invocationList*/
                /* IL_61: ldlen */
                /* IL_62: conv.i4 */
                /* IL_64: clt */
                /* IL_65: stloc.s 5*/
                loc5 = ((loc1 < (arg0._invocationList.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_67: ldloc.s 5*/
                /* IL_69: brtrue.s IL_3B*/
                
                if (loc5){
                    __pos_0__ = 0x3B;
                    continue;
                }
                /* IL_6B: ldloc.0 */
                /* IL_6C: ldc.i4.0 */
                /* IL_6E: ceq */
                /* IL_6F: ldc.i4.0 */
                /* IL_71: ceq */
                /* IL_72: stloc.s 5*/
                loc5 = ((((loc0 === (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_74: ldloc.s 5*/
                /* IL_76: brtrue.s IL_80*/
                
                if (loc5){
                    __pos_0__ = 0x80;
                    continue;
                }
                /* IL_78: ldnull */
                /* IL_79: stloc.s 4*/
                loc4 = null;
                /* IL_7B: br IL_11B*/
                __pos_0__ = 0x11B;
                continue;
                case 0x80:
                /* IL_80: ldloc.0 */
                /* IL_81: ldc.i4.1 */
                /* IL_83: ceq */
                /* IL_84: ldc.i4.0 */
                /* IL_86: ceq */
                /* IL_87: stloc.s 5*/
                loc5 = ((((loc0 === (1|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_89: ldloc.s 5*/
                /* IL_8B: brtrue.s IL_C9*/
                
                if (loc5){
                    __pos_0__ = 0xC9;
                    continue;
                }
                /* IL_8D: ldc.i4.0 */
                /* IL_8E: stloc.1 */
                loc1 = (0|0);
                /* IL_8F: br.s IL_B8*/
                __pos_0__ = 0xB8;
                continue;
                case 0x91:
                /* IL_91: ldarg.0 */
                /* IL_92: ldfld Delegate[] _invocationList*/
                /* IL_97: ldloc.1 */
                /* IL_98: ldelem.ref */
                /* IL_99: ldarg.1 */
                /* IL_9A: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
                /* IL_9F: ldc.i4.0 */
                /* IL_A1: ceq */
                /* IL_A2: stloc.s 5*/
                loc5 = (((asm0.x6000076)((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
                /* IL_A4: ldloc.s 5*/
                /* IL_A6: brtrue.s IL_B4*/
                
                if (loc5){
                    __pos_0__ = 0xB4;
                    continue;
                }
                /* IL_A8: ldarg.0 */
                /* IL_A9: ldfld Delegate[] _invocationList*/
                /* IL_AE: ldloc.1 */
                /* IL_AF: ldelem.ref */
                /* IL_B0: stloc.s 4*/
                loc4 = (arg0._invocationList.jsarr)[loc1];
                /* IL_B2: br.s IL_11B*/
                __pos_0__ = 0x11B;
                continue;
                case 0xB4:
                /* IL_B4: ldloc.1 */
                /* IL_B5: ldc.i4.1 */
                /* IL_B6: add */
                /* IL_B7: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0xB8:
                /* IL_B8: ldloc.1 */
                /* IL_B9: ldarg.0 */
                /* IL_BA: ldfld Delegate[] _invocationList*/
                /* IL_BF: ldlen */
                /* IL_C0: conv.i4 */
                /* IL_C2: clt */
                /* IL_C3: stloc.s 5*/
                loc5 = ((loc1 < (arg0._invocationList.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_C5: ldloc.s 5*/
                /* IL_C7: brtrue.s IL_91*/
                
                if (loc5){
                    __pos_0__ = 0x91;
                    continue;
                }
                case 0xC9:
                /* IL_C9: ldloc.0 */
                /* IL_CA: newarr System.Delegate*/
                /* IL_CF: stloc.2 */
                loc2 = new_array(t0,loc0);
                /* IL_D0: ldc.i4.0 */
                /* IL_D1: stloc.1 */
                loc1 = (0|0);
                /* IL_D2: ldc.i4.0 */
                /* IL_D3: stloc.3 */
                loc3 = (0|0);
                /* IL_D4: br.s IL_100*/
                __pos_0__ = 0x100;
                continue;
                case 0xD6:
                /* IL_D6: ldarg.0 */
                /* IL_D7: ldfld Delegate[] _invocationList*/
                /* IL_DC: ldloc.1 */
                /* IL_DD: ldelem.ref */
                /* IL_DE: ldarg.1 */
                /* IL_DF: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
                /* IL_E4: ldc.i4.0 */
                /* IL_E6: ceq */
                /* IL_E7: stloc.s 5*/
                loc5 = (((asm0.x6000076)((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
                /* IL_E9: ldloc.s 5*/
                /* IL_EB: brtrue.s IL_FC*/
                
                if (loc5){
                    __pos_0__ = 0xFC;
                    continue;
                }
                /* IL_ED: ldloc.2 */
                st_60 = loc2;
                /* IL_EE: ldloc.3 */
                st_59 = loc3;
                /* IL_EF: dup */
                st_61 = (st_5A = st_59);
                /* IL_F0: ldc.i4.1 */
                st_5B = (1|0);
                /* IL_F1: add */
                st_5C = ((st_5A + st_5B) | (0|0));
                /* IL_F2: stloc.3 */
                loc3 = st_5C;
                /* IL_F3: ldarg.0 */
                st_5D = arg0;
                /* IL_F4: ldfld Delegate[] _invocationList*/
                st_5E = st_5D._invocationList;
                /* IL_F9: ldloc.1 */
                st_5F = loc1;
                /* IL_FA: ldelem.ref */
                st_62 = (st_5E.jsarr)[st_5F];
                /* IL_FB: stelem.ref */
                (st_60.jsarr)[st_61] = st_62;
                case 0xFC:
                /* IL_FC: ldloc.1 */
                /* IL_FD: ldc.i4.1 */
                /* IL_FE: add */
                /* IL_FF: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x100:
                /* IL_100: ldloc.1 */
                /* IL_101: ldarg.0 */
                /* IL_102: ldfld Delegate[] _invocationList*/
                /* IL_107: ldlen */
                /* IL_108: conv.i4 */
                /* IL_10A: clt */
                /* IL_10B: stloc.s 5*/
                loc5 = ((loc1 < (arg0._invocationList.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_10D: ldloc.s 5*/
                /* IL_10F: brtrue.s IL_D6*/
                
                if (loc5){
                    __pos_0__ = 0xD6;
                    continue;
                }
                /* IL_111: ldloc.2 */
                /* IL_112: call Delegate CreateMulticast(System.Delegate[])*/
                /* IL_117: stloc.s 4*/
                loc4 = (asm0.x600007b)(loc2);
                case 0x11B:
                /* IL_11B: ldloc.s 4*/
                /* IL_11D: ret */
                return loc4;
            }
        }
    };
    /* Void .ctor()*/
    asm.x600007e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600007a)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Int32 Invoke(T, T)*/
    asm.x6000080 = function Invoke()
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
    asm.x600007f = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* static Void WriteLineImpl(System.String)*/
    asm.x6000081 = (function (o) { console.log(o.jsstr); });;
    /* static Void WriteLine(System.Object)*/
    asm.x6000082_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x6000082 = asm.x6000082_;
    };;
    asm.x6000082 = function (arg0)
    {
        (asm.x6000082_init.apply)(this,arguments);
        return (asm.x6000082_.apply)(this,arguments);
    };;
    asm.x6000082_ = function WriteLine(arg0)
    {
        var t0;
        var __pos_0__;
        var loc0;
        t0 = ((asm0)["System.String"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.0 */
                loc0 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.0 */
                /* IL_0A: brtrue.s IL_19*/
                
                if (loc0){
                    __pos_0__ = 0x19;
                    continue;
                }
                (asm0.x6000181)();
                /* IL_0C: ldsfld String Empty*/
                /* IL_11: call Void WriteLineImpl(System.String)*/
                (asm0.x6000081)(t0.Empty);
                /* IL_16: nop */
                
                /* IL_17: br.s IL_25*/
                __pos_0__ = 0x25;
                continue;
                case 0x19:
                /* IL_19: ldarg.0 */
                /* IL_1A: callvirt String ToString()*/
                /* IL_1F: call Void WriteLineImpl(System.String)*/
                (asm0.x6000081)((((arg0.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(arg0)));
                /* IL_24: nop */
                
                case 0x25:
                /* IL_25: ret */
                return ;
            }
        }
    };
    /* Void .ctor()*/
    asm.x6000083 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* String ToString()*/
    asm.x6000086_init = function ()
    {
        (((asm0)["System.Double"])().init)();
        asm.x6000086 = asm.x6000086_;
    };;
    asm.x6000086 = function (arg0)
    {
        (asm.x6000086_init.apply)(this,arguments);
        return (asm.x6000086_.apply)(this,arguments);
    };;
    asm.x6000086_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Double"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.r8 */
        /* IL_03: box System.Double*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x600009a)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* Int32 CompareTo(System.Object)*/
    asm.x6000087 = function CompareTo(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.Double*/
        /* IL_08: call Int32 CompareTo(System.Double)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x6000088)(arg0,unbox_any(arg1,((asm0)["System.Double"])()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* Int32 CompareTo(System.Double)*/
    asm.x6000088 = function CompareTo(arg0,arg1)
    {
        var __pos_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.r8 */
                /* IL_03: stloc.0 */
                loc0 = (arg0.r)();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: clt */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((((loc0 < arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos_0__ = 0x26;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: ldarg.1 */
                /* IL_16: cgt */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.2 */
                loc2 = ((((loc0 > arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.2 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc2){
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos_0__ = 0x26;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: stloc.1 */
                loc1 = (0|0);
                case 0x26:
                /* IL_26: ldloc.1 */
                /* IL_27: ret */
                return loc1;
            }
        }
    };;
    /* static Int32 get_CurrentManagedThreadId()*/
    asm.x6000089 = function get_CurrentManagedThreadId()
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.0 */
        /* IL_02: stloc.0 */
        loc0 = (0|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* static String get_NewLine()*/
    asm.x600008a = function get_NewLine()
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldstr */
        /* */
        /* IL_06: stloc.0 */
        loc0 = new_string("\\n");
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void .ctor()*/
    asm.x600008b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* TResult Invoke(T)*/
    asm.x600008d = function Invoke()
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
    asm.x600008c = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* String ToString()*/
    asm.x6000090_init = function ()
    {
        (((asm0)["System.Int16"])().init)();
        asm.x6000090 = asm.x6000090_;
    };;
    asm.x6000090 = function (arg0)
    {
        (asm.x6000090_init.apply)(this,arguments);
        return (asm.x6000090_.apply)(this,arguments);
    };;
    asm.x6000090_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Int16"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i2 */
        /* IL_03: box System.Int16*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x600009a)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* Boolean Equals(System.Object)*/
    asm.x6000091_init = function ()
    {
        (((asm0)["System.Int16"])().init)();
        asm.x6000091 = asm.x6000091_;
    };;
    asm.x6000091 = function (arg0,arg1)
    {
        (asm.x6000091_init.apply)(this,arguments);
        return (asm.x6000091_.apply)(this,arguments);
    };;
    asm.x6000091_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = ((asm0)["System.Int16"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.Int16*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.3 */
                loc3 = (((t0.IsInst)(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc3){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldind.i2 */
                /* IL_14: stloc.0 */
                loc0 = (arg0.r)();
                /* IL_15: ldarg.1 */
                /* IL_16: unbox.any System.Int16*/
                /* IL_1B: stloc.1 */
                loc1 = unbox_any(arg1,t0);
                /* IL_1C: ldloc.0 */
                /* IL_1D: ldloc.1 */
                /* IL_1F: ceq */
                /* IL_20: stloc.2 */
                loc2 = ((loc0 === loc1) ? (1) : (0));
                case 0x23:
                /* IL_23: ldloc.2 */
                /* IL_24: ret */
                return loc2;
            }
        }
    };
    /* Int32 GetHashCode()*/
    asm.x6000092 = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i2 */
        /* IL_03: stloc.0 */
        loc0 = (arg0.r)();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* String ToString()*/
    asm.x6000093_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x6000093 = asm.x6000093_;
    };;
    asm.x6000093 = function (arg0)
    {
        (asm.x6000093_init.apply)(this,arguments);
        return (asm.x6000093_.apply)(this,arguments);
    };;
    asm.x6000093_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Int32"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i4 */
        /* IL_03: box System.Int32*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x600009a)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* String ToString(System.String)*/
    asm.x6000095_init = function ()
    {
        (((asm0)["System.NotSupportedException"])().init)();
        asm.x6000095 = asm.x6000095_;
    };;
    asm.x6000095 = function (arg0,arg1)
    {
        (asm.x6000095_init.apply)(this,arguments);
        return (asm.x6000095_.apply)(this,arguments);
    };;
    asm.x6000095_ = function ToString(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc2;
        var loc1;
        t0 = ((asm0)["System.NotSupportedException"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i4 */
                /* IL_03: stloc.0 */
                loc0 = (arg0.r)();
                /* IL_04: ldarg.1 */
                /* IL_05: ldstr X*/
                /* IL_0A: call Boolean op_Equality(System.String, System.String)*/
                /* IL_0F: ldc.i4.0 */
                /* IL_11: ceq */
                /* IL_12: stloc.2 */
                loc2 = (((asm0.x600017a)(arg1,new_string("X")) === (0|0)) ? (1) : (0));
                /* IL_13: ldloc.2 */
                /* IL_14: brtrue.s IL_1F*/
                
                if (loc2){
                    __pos_0__ = 0x1F;
                    continue;
                }
                /* IL_16: ldloc.0 */
                /* IL_17: call String toHex(System.Int32)*/
                /* IL_1C: stloc.1 */
                loc1 = new_string(loc0.toString(16));
                /* IL_1D: br.s IL_25*/
                __pos_0__ = 0x25;
                continue;
                case 0x1F:
                /* IL_1F: newobj Void .ctor()*/
                /* IL_24: throw */
                throw newobj(t0,asm0.x60000eb,[
                    null
                ]);
                case 0x25:
                /* IL_25: ldloc.1 */
                /* IL_26: ret */
                return loc1;
            }
        }
    };
    /* Int32 CompareTo(System.Object)*/
    asm.x6000096 = function CompareTo(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.Int32*/
        /* IL_08: call Int32 CompareTo(System.Int32)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x6000097)(arg0,unbox_any(arg1,((asm0)["System.Int32"])()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* Int32 CompareTo(System.Int32)*/
    asm.x6000097 = function CompareTo(arg0,arg1)
    {
        var __pos_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i4 */
                /* IL_03: stloc.0 */
                loc0 = (arg0.r)();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: clt */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((((loc0 < arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos_0__ = 0x26;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: ldarg.1 */
                /* IL_16: cgt */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.2 */
                loc2 = ((((loc0 > arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.2 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc2){
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos_0__ = 0x26;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: stloc.1 */
                loc1 = (0|0);
                case 0x26:
                /* IL_26: ldloc.1 */
                /* IL_27: ret */
                return loc1;
            }
        }
    };;
    /* Boolean Equals(System.Object)*/
    asm.x6000098_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x6000098 = asm.x6000098_;
    };;
    asm.x6000098 = function (arg0,arg1)
    {
        (asm.x6000098_init.apply)(this,arguments);
        return (asm.x6000098_.apply)(this,arguments);
    };;
    asm.x6000098_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = ((asm0)["System.Int32"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.Int32*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.3 */
                loc3 = (((t0.IsInst)(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc3){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldind.i4 */
                /* IL_14: stloc.0 */
                loc0 = (arg0.r)();
                /* IL_15: ldarg.1 */
                /* IL_16: unbox.any System.Int32*/
                /* IL_1B: stloc.1 */
                loc1 = unbox_any(arg1,t0);
                /* IL_1C: ldloc.0 */
                /* IL_1D: ldloc.1 */
                /* IL_1F: ceq */
                /* IL_20: stloc.2 */
                loc2 = ((loc0 === loc1) ? (1) : (0));
                case 0x23:
                /* IL_23: ldloc.2 */
                /* IL_24: ret */
                return loc2;
            }
        }
    };
    /* Int32 GetHashCode()*/
    asm.x6000099 = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i4 */
        /* IL_03: stloc.0 */
        loc0 = (arg0.r)();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* static String SignedPrimitiveToString(System.Object)*/
    asm.x600009a = function(o) { return new_string(o.boxed.toString()); };;
    /* static String UnsignedPrimitiveToString(System.Object, System.Int32)*/
    asm.x600009b = 
            function(o, size) {
                var b = o.boxed;
                if (b < 0) {
                    var max = 0xffffffff >>> (32 - size);
                    b = max + (b + 1);
                }
                return new_string(b.toString());
            };;
    /* String ToString()*/
    asm.x600009c_init = function ()
    {
        (((asm0)["System.IntPtr"])().init)();
        asm.x600009c = asm.x600009c_;
    };;
    asm.x600009c = function (arg0)
    {
        (asm.x600009c_init.apply)(this,arguments);
        return (asm.x600009c_.apply)(this,arguments);
    };;
    asm.x600009c_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.IntPtr"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldobj System.IntPtr*/
        /* IL_07: box System.IntPtr*/
        /* IL_0C: call String SignedPrimitiveToString(System.Object)*/
        /* IL_11: stloc.0 */
        loc0 = (asm0.x600009a)({
            'boxed': arg0,
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };
    /* Int32 get_HResult()*/
    asm.x60000a0 = function get_HResult(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 <HResult>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemException<HResult>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void set_HResult(System.Int32)*/
    asm.x60000a1 = function set_HResult(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Int32 <HResult>k__BackingField*/
        (arg0)["SystemException<HResult>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* String get_Message()*/
    asm.x60000a2 = function get_Message(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld String <Message>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemException<Message>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void set_Message(System.String)*/
    asm.x60000a3 = function set_Message(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <Message>k__BackingField*/
        (arg0)["SystemException<Message>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* String ToString()*/
    asm.x60000a4 = function ToString(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt String get_Message()*/
        /* IL_07: stloc.0 */
        loc0 = (((arg0.vtable)["asm0.x60000a2"])())(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Exception get_InnerException()*/
    asm.x60000a5 = function get_InnerException(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Exception <InnerException>k__BackingField*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["SystemException<InnerException>k__BackingField"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void set_InnerException(System.Exception)*/
    asm.x60000a6 = function set_InnerException(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Exception <InnerException>k__BackingField*/
        (arg0)["SystemException<InnerException>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600009d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: call Void init(System.Exception)*/
        arg0.stack = new Error().stack;
        /* IL_0E: nop */
        /* IL_0F: nop */
        /* IL_10: ret */
        return ;
    };;
    /* Void .ctor(System.String)*/
    asm.x600009e = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600009d)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: callvirt Void set_Message(System.String)*/
        (((arg0.vtable)["asm0.x60000a3"])())(arg0,arg1);
        /* IL_0F: nop */
        /* IL_10: nop */
        /* IL_11: ret */
        return ;
    };;
    /* Void .ctor(System.String, System.Exception)*/
    asm.x600009f = function _ctor(arg0,arg1,arg2)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600009d)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: callvirt Void set_Message(System.String)*/
        (((arg0.vtable)["asm0.x60000a3"])())(arg0,arg1);
        /* IL_0F: nop */
        /* IL_10: ldarg.0 */
        /* IL_11: ldarg.2 */
        /* IL_12: call Void set_InnerException(System.Exception)*/
        (asm0.x60000a6)(arg0,arg2);
        /* IL_17: nop */
        /* IL_18: nop */
        /* IL_19: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000a8 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600009d)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000a9 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x60000a8)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000aa = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Object get_Value()*/
    asm.x60000ab = function get_Value(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Object value*/
        /* IL_07: stloc.0 */
        loc0 = (arg0.r)().value;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
    asm.x60000ad = function GetTypeFromHandle(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Type GetRuntimeTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x60000c4)(clone_value(arg0));
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Boolean IsSubclassOf(System.Type)*/
    asm.x60000ae = function IsSubclassOf(arg0,arg1)
    {
        var st_05;
        var __pos_0__;
        var loc2;
        var loc1;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: brfalse.s IL_0D*/
                
                if ((!(arg1))){
                    __pos_0__ = 0xD;
                    continue;
                }
                /* IL_04: ldarg.1 */
                /* IL_05: ldarg.0 */
                /* IL_07: ceq */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                st_05 = ((((arg1 === arg0) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0B: br.s IL_0E*/
                __pos_0__ = 0xE;
                continue;
                case 0xD:
                /* IL_0D: ldc.i4.0 */
                st_05 = (0|0);
                case 0xE:
                /* IL_0E: nop */
                
                /* IL_0F: stloc.2 */
                loc2 = st_05;
                /* IL_10: ldloc.2 */
                /* IL_11: brtrue.s IL_17*/
                
                if (loc2){
                    __pos_0__ = 0x17;
                    continue;
                }
                /* IL_13: ldc.i4.0 */
                /* IL_14: stloc.1 */
                loc1 = (0|0);
                /* IL_15: br.s IL_45*/
                __pos_0__ = 0x45;
                continue;
                case 0x17:
                /* IL_17: ldarg.0 */
                /* IL_18: callvirt Type get_BaseType()*/
                /* IL_1D: stloc.0 */
                loc0 = (((arg0.vtable)["asm0.x60000b1"])())(arg0);
                /* IL_1E: br.s IL_36*/
                __pos_0__ = 0x36;
                continue;
                case 0x20:
                /* IL_20: ldloc.0 */
                /* IL_21: ldarg.1 */
                /* IL_23: ceq */
                /* IL_24: ldc.i4.0 */
                /* IL_26: ceq */
                /* IL_27: stloc.2 */
                loc2 = ((((loc0 === arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_28: ldloc.2 */
                /* IL_29: brtrue.s IL_2F*/
                
                if (loc2){
                    __pos_0__ = 0x2F;
                    continue;
                }
                /* IL_2B: ldc.i4.1 */
                /* IL_2C: stloc.1 */
                loc1 = (1|0);
                /* IL_2D: br.s IL_45*/
                __pos_0__ = 0x45;
                continue;
                case 0x2F:
                /* IL_2F: ldloc.0 */
                /* IL_30: callvirt Type get_BaseType()*/
                /* IL_35: stloc.0 */
                loc0 = (((loc0.vtable)["asm0.x60000b1"])())(loc0);
                case 0x36:
                /* IL_36: ldloc.0 */
                /* IL_37: ldnull */
                /* IL_39: ceq */
                /* IL_3A: ldc.i4.0 */
                /* IL_3C: ceq */
                /* IL_3D: stloc.2 */
                loc2 = ((((loc0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_3E: ldloc.2 */
                /* IL_3F: brtrue.s IL_20*/
                
                if (loc2){
                    __pos_0__ = 0x20;
                    continue;
                }
                /* IL_41: ldc.i4.0 */
                /* IL_42: stloc.1 */
                loc1 = (0|0);
                case 0x45:
                /* IL_45: ldloc.1 */
                /* IL_46: ret */
                return loc1;
            }
        }
    };;
    /* Boolean get_IsEnum()*/
    asm.x60000af_init = function ()
    {
        (((asm0)["System.Enum"])().init)();
        asm.x60000af = asm.x60000af_;
    };;
    asm.x60000af = function (arg0)
    {
        (asm.x60000af_init.apply)(this,arguments);
        return (asm.x60000af_.apply)(this,arguments);
    };;
    asm.x60000af_ = function get_IsEnum(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Enum"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldtoken System.Enum*/
        /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_0C: callvirt Boolean IsSubclassOf(System.Type)*/
        /* IL_11: stloc.0 */
        loc0 = (((arg0.vtable)["asm0.x60000ae"])())(arg0,(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)));
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };
    /* Void .ctor()*/
    asm.x60000be = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600003e)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static constructor GetConstructor(System.Object)*/
    asm.x60000bf = function (o) { return o.type || o.constructor; };;
    /* static Type GetInstance(System.RuntimeType+constructor)*/
    asm.x60000c2_init = function ()
    {
        (((asm0)["System.Boolean"])().init)();
        (((asm0)["System.RuntimeType"])().init)();
        asm.x60000c2 = asm.x60000c2_;
    };;
    asm.x60000c2 = function (arg0)
    {
        (asm.x60000c2_init.apply)(this,arguments);
        return (asm.x60000c2_.apply)(this,arguments);
    };;
    asm.x60000c2_ = function GetInstance(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.Boolean"])();
        t1 = ((asm0)["System.RuntimeType"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Type TypeInstance*/
                /* IL_07: call Boolean UnsafeCast[System.Boolean](System.Object)*/
                /* IL_0C: stloc.1 */
                loc1 = arg0.TypeInstance;
                /* IL_0D: ldloc.1 */
                /* IL_0E: brtrue.s IL_1C*/
                
                if (loc1){
                    __pos_0__ = 0x1C;
                    continue;
                }
                /* IL_10: ldarg.0 */
                /* IL_11: ldarg.0 */
                /* IL_12: newobj Void .ctor(System.RuntimeType+constructor)*/
                /* IL_17: stfld Type TypeInstance*/
                arg0.TypeInstance = newobj(t1,asm0.x60000c0,[
                    null,
                    arg0
                ]);
                case 0x1C:
                /* IL_1C: ldarg.0 */
                /* IL_1D: ldfld Type TypeInstance*/
                /* IL_22: stloc.0 */
                loc0 = arg0.TypeInstance;
                /* IL_25: ldloc.0 */
                /* IL_26: ret */
                return loc0;
            }
        }
    };
    asm.GetReflectionType = asm.x60000c2;
    /* static Type GetType(System.Object)*/
    asm.x60000c3 = function GetType(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call constructor GetConstructor(System.Object)*/
        /* IL_07: call Type GetInstance(System.RuntimeType+constructor)*/
        /* IL_0C: stloc.0 */
        loc0 = (asm0.x60000c2)((asm0.x60000bf)(arg0));
        /* IL_0F: ldloc.0 */
        /* IL_10: ret */
        return loc0;
    };;
    /* static Type GetRuntimeTypeFromHandle(System.RuntimeTypeHandle)*/
    asm.x60000c4_init = function ()
    {
        (((asm0)["System.RuntimeType+constructor"])().init)();
        asm.x60000c4 = asm.x60000c4_;
    };;
    asm.x60000c4 = function (arg0)
    {
        (asm.x60000c4_init.apply)(this,arguments);
        return (asm.x60000c4_.apply)(this,arguments);
    };;
    asm.x60000c4_ = function GetRuntimeTypeFromHandle(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.RuntimeType+constructor"])();
        /* IL_00: nop */
        /* IL_01: ldarga.s 0*/
        /* IL_03: ldfld Object value*/
        /* IL_08: call constructor UnsafeCast[System.RuntimeType+constructor](System.Object)*/
        /* IL_0D: call Type GetInstance(System.RuntimeType+constructor)*/
        /* IL_12: stloc.0 */
        loc0 = (asm0.x60000c2)(({
            'w': function ()
            {
                arg0 = (arguments)[0];
            },
            'r': function ()
            {
                return arg0;
            }
        }.r)().value);
        /* IL_15: ldloc.0 */
        /* IL_16: ret */
        return loc0;
    };
    /* Assembly get_Assembly()*/
    asm.x60000c5 = function get_Assembly(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld jsAsm Assembly*/
        /* IL_0C: call Assembly GetInstance(System.Reflection.Assembly+jsAsm)*/
        /* IL_11: stloc.0 */
        loc0 = (asm0.x6000033)(arg0.ctor.Assembly);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* String get_FullName()*/
    asm.x60000c6_init = function ()
    {
        (((asm0)["System.Array"])().init)();
        asm.x60000c6 = asm.x60000c6_;
    };;
    asm.x60000c6 = function (arg0)
    {
        (asm.x60000c6_init.apply)(this,arguments);
        return (asm.x60000c6_.apply)(this,arguments);
    };;
    asm.x60000c6_ = function get_FullName(arg0)
    {
        var t0;
        var st_13;
        var __pos_0__;
        var loc4;
        var loc3;
        var loc0;
        var loc1;
        var loc2;
        t0 = ((asm0)["System.Array"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldtoken System.Array*/
                /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_0C: callvirt Boolean IsSubclassOf(System.Type)*/
                /* IL_11: ldc.i4.0 */
                /* IL_13: ceq */
                /* IL_14: stloc.s 4*/
                loc4 = (((((arg0.vtable)["asm0.x60000ae"])())(arg0,(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))) === (0|0)) ? (1) : (0));
                /* IL_16: ldloc.s 4*/
                /* IL_18: brtrue.s IL_33*/
                
                if (loc4){
                    __pos_0__ = 0x33;
                    continue;
                }
                /* IL_1A: nop */
                
                /* IL_1B: ldarg.0 */
                /* IL_1C: callvirt Type GetElementType()*/
                /* IL_21: callvirt String get_FullName()*/
                /* IL_26: ldstr []*/
                /* IL_2B: call String Concat(System.String, System.String)*/
                /* IL_30: stloc.3 */
                loc3 = (asm0.x600016f)(((((((arg0.vtable)["asm0.x60000bc"])())(arg0).vtable)["asm0.x60000ac"])())((((arg0.vtable)["asm0.x60000bc"])())(arg0)),new_string("[]"));
                /* IL_31: br.s IL_AE*/
                __pos_0__ = 0xAE;
                continue;
                case 0x33:
                /* IL_33: ldarg.0 */
                /* IL_34: ldfld constructor ctor*/
                /* IL_39: ldfld Object FullName*/
                /* IL_3E: call String FromJsString(System.Object)*/
                /* IL_43: stloc.0 */
                loc0 = new_string(arg0.ctor.FullName);
                /* IL_44: ldarg.0 */
                /* IL_45: callvirt Boolean get_IsGenericType()*/
                /* IL_4A: brfalse.s IL_54*/
                
                if ((!((((arg0.vtable)["asm0.x60000b3"])())(arg0)))){
                    __pos_0__ = 0x54;
                    continue;
                }
                /* IL_4C: ldarg.0 */
                /* IL_4D: callvirt Boolean get_IsGenericTypeDefinition()*/
                st_13 = (((arg0.vtable)["asm0.x60000b5"])())(arg0);
                /* IL_52: br.s IL_55*/
                __pos_0__ = 0x55;
                continue;
                case 0x54:
                /* IL_54: ldc.i4.1 */
                st_13 = (1|0);
                case 0x55:
                /* IL_55: nop */
                
                /* IL_56: stloc.s 4*/
                loc4 = st_13;
                /* IL_58: ldloc.s 4*/
                /* IL_5A: brtrue.s IL_AA*/
                
                if (loc4){
                    __pos_0__ = 0xAA;
                    continue;
                }
                /* IL_5C: nop */
                
                /* IL_5D: ldloc.0 */
                /* IL_5E: ldstr [*/
                /* IL_63: call String Concat(System.String, System.String)*/
                /* IL_68: stloc.0 */
                loc0 = (asm0.x600016f)(loc0,new_string("["));
                /* IL_69: ldarg.0 */
                /* IL_6A: callvirt Type[] GetGenericArguments()*/
                /* IL_6F: stloc.1 */
                loc1 = (((arg0.vtable)["asm0.x60000b6"])())(arg0);
                /* IL_70: ldc.i4.0 */
                /* IL_71: stloc.2 */
                loc2 = (0|0);
                /* IL_72: br.s IL_91*/
                __pos_0__ = 0x91;
                continue;
                case 0x74:
                /* IL_74: ldloc.0 */
                /* IL_75: ldstr [*/
                /* IL_7A: ldloc.1 */
                /* IL_7B: ldloc.2 */
                /* IL_7C: ldelem.ref */
                /* IL_7D: callvirt String get_AssemblyQualifiedName()*/
                /* IL_82: ldstr ]*/
                /* IL_87: call String Concat(System.String, System.String, System.String, System.String)*/
                /* IL_8C: stloc.0 */
                loc0 = (asm0.x6000172)(loc0,new_string("["),((((loc1.jsarr)[loc2].vtable)["asm0.x60000b2"])())((loc1.jsarr)[loc2]),new_string("]"));
                /* IL_8D: ldloc.2 */
                /* IL_8E: ldc.i4.1 */
                /* IL_8F: add */
                /* IL_90: stloc.2 */
                loc2 = (loc2 + (1|0)) | (0|0);
                case 0x91:
                /* IL_91: ldloc.2 */
                /* IL_92: ldloc.1 */
                /* IL_93: ldlen */
                /* IL_94: conv.i4 */
                /* IL_96: clt */
                /* IL_97: stloc.s 4*/
                loc4 = ((loc2 < (loc1.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_99: ldloc.s 4*/
                /* IL_9B: brtrue.s IL_74*/
                
                if (loc4){
                    __pos_0__ = 0x74;
                    continue;
                }
                /* IL_9D: ldloc.0 */
                /* IL_9E: ldstr ]*/
                /* IL_A3: call String Concat(System.String, System.String)*/
                /* IL_A8: stloc.0 */
                loc0 = (asm0.x600016f)(loc0,new_string("]"));
                /* IL_A9: nop */
                
                case 0xAA:
                /* IL_AA: ldloc.0 */
                /* IL_AB: stloc.3 */
                loc3 = loc0;
                case 0xAE:
                /* IL_AE: ldloc.3 */
                /* IL_AF: ret */
                return loc3;
            }
        }
    };
    /* String get_AssemblyQualifiedName()*/
    asm.x60000c7 = function get_AssemblyQualifiedName(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt String get_FullName()*/
        /* IL_07: ldstr , */
        /* IL_0C: ldarg.0 */
        /* IL_0D: callvirt Assembly get_Assembly()*/
        /* IL_12: callvirt String get_FullName()*/
        /* IL_17: call String Concat(System.String, System.String, System.String)*/
        /* IL_1C: stloc.0 */
        loc0 = (asm0.x6000171)((((arg0.vtable)["asm0.x60000ac"])())(arg0),new_string(", "),(asm0.x6000034)((((arg0.vtable)["asm0.x60000b0"])())(arg0)));
        /* IL_1F: ldloc.0 */
        /* IL_20: ret */
        return loc0;
    };;
    /* Boolean Equals(System.Object)*/
    asm.x60000c8_init = function ()
    {
        (((asm0)["System.RuntimeType"])().init)();
        asm.x60000c8 = asm.x60000c8_;
    };;
    asm.x60000c8 = function (arg0,arg1)
    {
        (asm.x60000c8_init.apply)(this,arguments);
        return (asm.x60000c8_.apply)(this,arguments);
    };;
    asm.x60000c8_ = function Equals(arg0,arg1)
    {
        var t0;
        var loc0;
        var loc1;
        t0 = ((asm0)["System.RuntimeType"])();
        /* IL_00: nop */
        /* IL_01: ldarg.1 */
        /* IL_02: isinst System.RuntimeType*/
        /* IL_07: stloc.0 */
        loc0 = (t0.IsInst)(arg1);
        /* IL_08: ldarg.0 */
        /* IL_09: ldfld constructor ctor*/
        /* IL_0E: ldloc.0 */
        /* IL_0F: ldfld constructor ctor*/
        /* IL_15: ceq */
        /* IL_16: stloc.1 */
        loc1 = ((arg0.ctor === loc0.ctor) ? (1) : (0));
        /* IL_19: ldloc.1 */
        /* IL_1A: ret */
        return loc1;
    };
    /* Int32 GetHashCode()*/
    asm.x60000c9_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.Boolean"])().init)();
        asm.x60000c9 = asm.x60000c9_;
    };;
    asm.x60000c9 = function (arg0)
    {
        (asm.x60000c9_init.apply)(this,arguments);
        return (asm.x60000c9_.apply)(this,arguments);
    };;
    asm.x60000c9_ = function GetHashCode(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.Int32"])();
        t1 = ((asm0)["System.Boolean"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld constructor ctor*/
                /* IL_07: ldfld Int32 Hash*/
                /* IL_0C: box System.Int32*/
                /* IL_11: call Boolean UnsafeCast[System.Boolean](System.Object)*/
                /* IL_16: stloc.1 */
                loc1 = {
                    'boxed': arg0.ctor.Hash,
                    'type': t0,
                    'vtable': t0.prototype.vtable,
                    'ifacemap': t0.prototype.ifacemap
                };
                /* IL_17: ldloc.1 */
                /* IL_18: brtrue.s IL_2B*/
                
                if (loc1){
                    __pos_0__ = 0x2B;
                    continue;
                }
                /* IL_1A: ldarg.0 */
                /* IL_1B: ldfld constructor ctor*/
                /* IL_20: ldarg.0 */
                /* IL_21: call Int32 GetHashCode()*/
                /* IL_26: stfld Int32 Hash*/
                arg0.ctor.Hash = (asm0.x6000009)(arg0);
                case 0x2B:
                /* IL_2B: ldarg.0 */
                /* IL_2C: ldfld constructor ctor*/
                /* IL_31: ldfld Int32 Hash*/
                /* IL_36: stloc.0 */
                loc0 = arg0.ctor.Hash;
                /* IL_39: ldloc.0 */
                /* IL_3A: ret */
                return loc0;
            }
        }
    };
    /* Object[] GetCustomAttributes(System.Boolean)*/
    asm.x60000ca = function GetCustomAttributes(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Array CustomAttributes*/
        /* IL_0C: call Object[] GetCustomAttributesImpl(System.Object)*/
        /* IL_11: stloc.0 */
        loc0 = (asm0.x600003c)(arg0.ctor.CustomAttributes);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* Object[] GetCustomAttributes(System.Type, System.Boolean)*/
    asm.x60000cb_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x60000cb = asm.x60000cb_;
    };;
    asm.x60000cb = function (arg0,arg1,arg2)
    {
        (asm.x60000cb_init.apply)(this,arguments);
        return (asm.x60000cb_.apply)(this,arguments);
    };;
    asm.x60000cb_ = function GetCustomAttributes(arg0,arg1,arg2)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x60000ea,[
            null
        ]);
    };
    /* Boolean IsDefined(System.Type, System.Boolean)*/
    asm.x60000cc_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x60000cc = asm.x60000cc_;
    };;
    asm.x60000cc = function (arg0,arg1,arg2)
    {
        (asm.x60000cc_init.apply)(this,arguments);
        return (asm.x60000cc_.apply)(this,arguments);
    };;
    asm.x60000cc_ = function IsDefined(arg0,arg1,arg2)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x60000ea,[
            null
        ]);
    };
    /* Boolean get_IsInterface()*/
    asm.x60000cd = function get_IsInterface(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Boolean IsInterface*/
        /* IL_0C: call Boolean op_Explicit(Braille.JavaScript.Boolean)*/
        /* IL_11: stloc.0 */
        loc0 = (arg0.ctor.IsInterface ? 1 : 0);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* Boolean get_IsGenericType()*/
    asm.x60000ce = function get_IsGenericType(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Boolean IsGenericTypeDefinition*/
        /* IL_0C: call Boolean op_Explicit(Braille.JavaScript.Boolean)*/
        /* IL_11: stloc.0 */
        loc0 = (arg0.ctor.IsGenericTypeDefinition ? 1 : 0);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* Boolean get_IsGenericTypeDefinition()*/
    asm.x60000cf_init = function ()
    {
        (((asm0)["System.RuntimeType+constructor"])().init)();
        asm.x60000cf = asm.x60000cf_;
    };;
    asm.x60000cf = function (arg0)
    {
        (asm.x60000cf_init.apply)(this,arguments);
        return (asm.x60000cf_.apply)(this,arguments);
    };;
    asm.x60000cf_ = function get_IsGenericTypeDefinition(arg0)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = ((asm0)["System.RuntimeType+constructor"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld constructor ctor*/
                /* IL_07: ldfld Boolean IsGenericTypeDefinition*/
                /* IL_0C: call Boolean op_Explicit(Braille.JavaScript.Boolean)*/
                /* IL_11: stloc.3 */
                loc3 = (arg0.ctor.IsGenericTypeDefinition ? 1 : 0);
                /* IL_12: ldloc.3 */
                /* IL_13: brtrue.s IL_19*/
                
                if (loc3){
                    __pos_0__ = 0x19;
                    continue;
                }
                /* IL_15: ldc.i4.0 */
                /* IL_16: stloc.2 */
                loc2 = (0|0);
                /* IL_17: br.s IL_6B*/
                __pos_0__ = 0x6B;
                continue;
                case 0x19:
                /* IL_19: ldarg.0 */
                /* IL_1A: ldfld constructor ctor*/
                /* IL_1F: ldfld Object GenericArguments*/
                /* IL_24: ldarg.0 */
                /* IL_25: ldfld constructor ctor*/
                /* IL_2A: ldfld String MetadataName*/
                /* IL_2F: call String op_Explicit(Braille.JavaScript.String)*/
                /* IL_34: call Object ObjectLookup(System.Object, System.String)*/
                /* IL_39: ldc.i4.0 */
                /* IL_3A: call Object ArrayLookup(System.Object, System.Int32)*/
                /* IL_3F: stloc.0 */
                loc0 = ((arg0.ctor.GenericArguments[new_string(arg0.ctor.MetadataName).jsstr])[(0|0)]);
                /* IL_40: ldloc.0 */
                /* IL_41: call constructor UnsafeCast[System.RuntimeType+constructor](System.Object)*/
                /* IL_46: stloc.1 */
                loc1 = loc0;
                /* IL_47: ldloc.1 */
                /* IL_48: ldfld Object FullName*/
                /* IL_4D: call String FromJsString(System.Object)*/
                /* IL_52: ldstr Braille.Runtime.UnboundGenericParameter*/
                /* IL_57: call Boolean op_Equality(System.String, System.String)*/
                /* IL_5C: ldc.i4.0 */
                /* IL_5E: ceq */
                /* IL_5F: stloc.3 */
                loc3 = (((asm0.x600017a)(new_string(loc1.FullName),new_string("Braille.Runtime.UnboundGenericParameter")) === (0|0)) ? (1) : (0));
                /* IL_60: ldloc.3 */
                /* IL_61: brtrue.s IL_67*/
                
                if (loc3){
                    __pos_0__ = 0x67;
                    continue;
                }
                /* IL_63: ldc.i4.1 */
                /* IL_64: stloc.2 */
                loc2 = (1|0);
                /* IL_65: br.s IL_6B*/
                __pos_0__ = 0x6B;
                continue;
                case 0x67:
                /* IL_67: ldc.i4.0 */
                /* IL_68: stloc.2 */
                loc2 = (0|0);
                case 0x6B:
                /* IL_6B: ldloc.2 */
                /* IL_6C: ret */
                return loc2;
            }
        }
    };
    /* Type MakeGenericType(System.Type[])*/
    asm.x60000d0_init = function ()
    {
        (((asm0)["System.InvalidOperationException"])().init)();
        (((asm0)["System.RuntimeType+constructor"])().init)();
        (((asm0)["System.RuntimeType"])().init)();
        asm.x60000d0 = asm.x60000d0_;
    };;
    asm.x60000d0 = function (arg0,arg1)
    {
        (asm.x60000d0_init.apply)(this,arguments);
        return (asm.x60000d0_.apply)(this,arguments);
    };;
    asm.x60000d0_ = function MakeGenericType(arg0,arg1)
    {
        var t0;
        var t1;
        var t2;
        var __pos_0__;
        var loc5;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        t0 = ((asm0)["System.InvalidOperationException"])();
        t1 = ((asm0)["System.RuntimeType+constructor"])();
        t2 = ((asm0)["System.RuntimeType"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: callvirt Boolean get_IsGenericTypeDefinition()*/
                /* IL_07: stloc.s 5*/
                loc5 = (((arg0.vtable)["asm0.x60000b5"])())(arg0);
                /* IL_09: ldloc.s 5*/
                /* IL_0B: brtrue.s IL_13*/
                
                if (loc5){
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0D: newobj Void .ctor()*/
                /* IL_12: throw */
                throw newobj(t0,asm0.x60000f6,[
                    null
                ]);
                case 0x13:
                /* IL_13: ldarg.1 */
                /* IL_14: ldlen */
                /* IL_15: conv.i4 */
                /* IL_16: newarr System.RuntimeType+constructor*/
                /* IL_1B: stloc.0 */
                loc0 = new_array(t1,arg1.jsarr.length | (0|0));
                /* IL_1C: ldc.i4.0 */
                /* IL_1D: stloc.1 */
                loc1 = (0|0);
                /* IL_1E: br.s IL_34*/
                __pos_0__ = 0x34;
                continue;
                case 0x20:
                /* IL_20: ldloc.0 */
                /* IL_21: ldloc.1 */
                /* IL_22: ldarg.1 */
                /* IL_23: ldloc.1 */
                /* IL_24: ldelem.ref */
                /* IL_25: castclass System.RuntimeType*/
                /* IL_2A: ldfld constructor ctor*/
                /* IL_2F: stelem.ref */
                (loc0.jsarr)[loc1] = cast_class((arg1.jsarr)[loc1],t2).ctor;
                /* IL_30: ldloc.1 */
                /* IL_31: ldc.i4.1 */
                /* IL_32: add */
                /* IL_33: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x34:
                /* IL_34: ldloc.1 */
                /* IL_35: ldarg.1 */
                /* IL_36: ldlen */
                /* IL_37: conv.i4 */
                /* IL_39: clt */
                /* IL_3A: stloc.s 5*/
                loc5 = ((loc1 < (arg1.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_3C: ldloc.s 5*/
                /* IL_3E: brtrue.s IL_20*/
                
                if (loc5){
                    __pos_0__ = 0x20;
                    continue;
                }
                /* IL_40: ldarg.0 */
                /* IL_41: ldfld constructor ctor*/
                /* IL_46: ldfld jsAsm Assembly*/
                /* IL_4B: ldarg.0 */
                /* IL_4C: callvirt String get_FullName()*/
                /* IL_51: call Object ObjectLookup(System.Object, System.String)*/
                /* IL_56: stloc.2 */
                loc2 = (arg0.ctor.Assembly[(((arg0.vtable)["asm0.x60000ac"])())(arg0).jsstr]);
                /* IL_57: ldloc.2 */
                /* IL_58: ldnull */
                /* IL_59: ldloc.0 */
                /* IL_5A: call Object Apply(System.Object, System.Object, System.Object[])*/
                /* IL_5F: stloc.3 */
                loc3 = (loc2.apply(null, loc0.jsarr));
                /* IL_60: ldloc.3 */
                /* IL_61: call constructor UnsafeCast[System.RuntimeType+constructor](System.Object)*/
                /* IL_66: call Type GetInstance(System.RuntimeType+constructor)*/
                /* IL_6B: stloc.s 4*/
                loc4 = (asm0.x60000c2)(loc3);
                /* IL_6F: ldloc.s 4*/
                /* IL_71: ret */
                return loc4;
            }
        }
    };
    /* Type[] GetGenericArguments()*/
    asm.x60000d1_init = function ()
    {
        (((asm0)["System.RuntimeType+constructor"])().init)();
        (((asm0)["System.Type"])().init)();
        asm.x60000d1 = asm.x60000d1_;
    };;
    asm.x60000d1 = function (arg0)
    {
        (asm.x60000d1_init.apply)(this,arguments);
        return (asm.x60000d1_.apply)(this,arguments);
    };;
    asm.x60000d1_ = function GetGenericArguments(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc4;
        var loc3;
        t0 = ((asm0)["System.RuntimeType+constructor"])();
        t1 = ((asm0)["System.Type"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld constructor ctor*/
                /* IL_07: ldfld Object GenericArguments*/
                /* IL_0C: ldarg.0 */
                /* IL_0D: ldfld constructor ctor*/
                /* IL_12: ldfld String MetadataName*/
                /* IL_17: call String op_Explicit(Braille.JavaScript.String)*/
                /* IL_1C: call Object ObjectLookup(System.Object, System.String)*/
                /* IL_21: call constructor[] FromJsArray[System.RuntimeType+constructor](System.Object)*/
                /* IL_26: stloc.0 */
                loc0 = ((asm0.x6000128)(((asm0)["System.RuntimeType+constructor"])()))((arg0.ctor.GenericArguments[new_string(arg0.ctor.MetadataName).jsstr]));
                /* IL_27: ldloc.0 */
                /* IL_28: ldlen */
                /* IL_29: conv.i4 */
                /* IL_2A: newarr System.Type*/
                /* IL_2F: stloc.1 */
                loc1 = new_array(t1,loc0.jsarr.length | (0|0));
                /* IL_30: ldc.i4.0 */
                /* IL_31: stloc.2 */
                loc2 = (0|0);
                /* IL_32: br.s IL_43*/
                __pos_0__ = 0x43;
                continue;
                case 0x34:
                /* IL_34: ldloc.1 */
                /* IL_35: ldloc.2 */
                /* IL_36: ldloc.0 */
                /* IL_37: ldloc.2 */
                /* IL_38: ldelem.ref */
                /* IL_39: call Type GetInstance(System.RuntimeType+constructor)*/
                /* IL_3E: stelem.ref */
                (loc1.jsarr)[loc2] = (asm0.x60000c2)((loc0.jsarr)[loc2]);
                /* IL_3F: ldloc.2 */
                /* IL_40: ldc.i4.1 */
                /* IL_41: add */
                /* IL_42: stloc.2 */
                loc2 = (loc2 + (1|0)) | (0|0);
                case 0x43:
                /* IL_43: ldloc.2 */
                /* IL_44: ldloc.0 */
                /* IL_45: ldlen */
                /* IL_46: conv.i4 */
                /* IL_48: clt */
                /* IL_49: stloc.s 4*/
                loc4 = ((loc2 < (loc0.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_4B: ldloc.s 4*/
                /* IL_4D: brtrue.s IL_34*/
                
                if (loc4){
                    __pos_0__ = 0x34;
                    continue;
                }
                /* IL_4F: ldloc.1 */
                /* IL_50: stloc.3 */
                loc3 = loc1;
                /* IL_53: ldloc.3 */
                /* IL_54: ret */
                return loc3;
            }
        }
    };
    /* Type get_BaseType()*/
    asm.x60000d2_init = function ()
    {
        (((asm0)["System.Boolean"])().init)();
        asm.x60000d2 = asm.x60000d2_;
    };;
    asm.x60000d2 = function (arg0)
    {
        (asm.x60000d2_init.apply)(this,arguments);
        return (asm.x60000d2_.apply)(this,arguments);
    };;
    asm.x60000d2_ = function get_BaseType(arg0)
    {
        var t0;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.Boolean"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld constructor ctor*/
                /* IL_07: ldfld constructor BaseType*/
                /* IL_0C: call Boolean UnsafeCast[System.Boolean](System.Object)*/
                /* IL_11: stloc.1 */
                loc1 = arg0.ctor.BaseType;
                /* IL_12: ldloc.1 */
                /* IL_13: brtrue.s IL_19*/
                
                if (loc1){
                    __pos_0__ = 0x19;
                    continue;
                }
                /* IL_15: ldnull */
                /* IL_16: stloc.0 */
                loc0 = null;
                /* IL_17: br.s IL_2C*/
                __pos_0__ = 0x2C;
                continue;
                case 0x19:
                /* IL_19: ldarg.0 */
                /* IL_1A: ldfld constructor ctor*/
                /* IL_1F: ldfld constructor BaseType*/
                /* IL_24: call Type GetInstance(System.RuntimeType+constructor)*/
                /* IL_29: stloc.0 */
                loc0 = (asm0.x60000c2)(arg0.ctor.BaseType);
                case 0x2C:
                /* IL_2C: ldloc.0 */
                /* IL_2D: ret */
                return loc0;
            }
        }
    };
    /* Type[] GetInterfaces()*/
    asm.x60000d3_init = function ()
    {
        (((asm0)["System.RuntimeType+constructor"])().init)();
        (((asm0)["System.Type"])().init)();
        asm.x60000d3 = asm.x60000d3_;
    };;
    asm.x60000d3 = function (arg0)
    {
        (asm.x60000d3_init.apply)(this,arguments);
        return (asm.x60000d3_.apply)(this,arguments);
    };;
    asm.x60000d3_ = function GetInterfaces(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc4;
        var loc3;
        t0 = ((asm0)["System.RuntimeType+constructor"])();
        t1 = ((asm0)["System.Type"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld constructor ctor*/
                /* IL_07: ldfld Object Interfaces*/
                /* IL_0C: call constructor[] FromJsArray[System.RuntimeType+constructor](System.Object)*/
                /* IL_11: stloc.0 */
                loc0 = ((asm0.x6000128)(((asm0)["System.RuntimeType+constructor"])()))(arg0.ctor.Interfaces);
                /* IL_12: ldloc.0 */
                /* IL_13: ldlen */
                /* IL_14: conv.i4 */
                /* IL_15: newarr System.Type*/
                /* IL_1A: stloc.1 */
                loc1 = new_array(t1,loc0.jsarr.length | (0|0));
                /* IL_1B: ldc.i4.0 */
                /* IL_1C: stloc.2 */
                loc2 = (0|0);
                /* IL_1D: br.s IL_2E*/
                __pos_0__ = 0x2E;
                continue;
                case 0x1F:
                /* IL_1F: ldloc.1 */
                /* IL_20: ldloc.2 */
                /* IL_21: ldloc.0 */
                /* IL_22: ldloc.2 */
                /* IL_23: ldelem.ref */
                /* IL_24: call Type GetInstance(System.RuntimeType+constructor)*/
                /* IL_29: stelem.ref */
                (loc1.jsarr)[loc2] = (asm0.x60000c2)((loc0.jsarr)[loc2]);
                /* IL_2A: ldloc.2 */
                /* IL_2B: ldc.i4.1 */
                /* IL_2C: add */
                /* IL_2D: stloc.2 */
                loc2 = (loc2 + (1|0)) | (0|0);
                case 0x2E:
                /* IL_2E: ldloc.2 */
                /* IL_2F: ldloc.0 */
                /* IL_30: ldlen */
                /* IL_31: conv.i4 */
                /* IL_33: clt */
                /* IL_34: stloc.s 4*/
                loc4 = ((loc2 < (loc0.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_36: ldloc.s 4*/
                /* IL_38: brtrue.s IL_1F*/
                
                if (loc4){
                    __pos_0__ = 0x1F;
                    continue;
                }
                /* IL_3A: ldloc.1 */
                /* IL_3B: stloc.3 */
                loc3 = loc1;
                /* IL_3E: ldloc.3 */
                /* IL_3F: ret */
                return loc3;
            }
        }
    };
    /* Boolean IsAssignableFrom(System.Type)*/
    asm.x60000d4_init = function ()
    {
        (((asm0)["System.Object"])().init)();
        asm.x60000d4 = asm.x60000d4_;
    };;
    asm.x60000d4 = function (arg0,arg1)
    {
        (asm.x60000d4_init.apply)(this,arguments);
        return (asm.x60000d4_.apply)(this,arguments);
    };;
    asm.x60000d4_ = function IsAssignableFrom(arg0,arg1)
    {
        var t0;
        var st_1C;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = ((asm0)["System.Object"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.3 */
                loc3 = ((((arg1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.3 */
                /* IL_0A: brtrue.s IL_13*/
                
                if (loc3){
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0C: ldc.i4.0 */
                /* IL_0D: stloc.2 */
                loc2 = (0|0);
                /* IL_0E: br IL_9E*/
                __pos_0__ = 0x9E;
                continue;
                case 0x13:
                /* IL_13: ldarg.0 */
                /* IL_14: ldarg.1 */
                /* IL_15: callvirt Boolean Equals(System.Object)*/
                /* IL_1A: ldc.i4.0 */
                /* IL_1C: ceq */
                /* IL_1D: stloc.3 */
                loc3 = (((((arg0.vtable)["asm0.x6000008"])())(arg0,arg1) === (0|0)) ? (1) : (0));
                /* IL_1E: ldloc.3 */
                /* IL_1F: brtrue.s IL_25*/
                
                if (loc3){
                    __pos_0__ = 0x25;
                    continue;
                }
                /* IL_21: ldc.i4.1 */
                /* IL_22: stloc.2 */
                loc2 = (1|0);
                /* IL_23: br.s IL_9E*/
                __pos_0__ = 0x9E;
                continue;
                case 0x25:
                /* IL_25: ldarg.1 */
                /* IL_26: ldarg.0 */
                /* IL_27: callvirt Boolean IsSubclassOf(System.Type)*/
                /* IL_2C: ldc.i4.0 */
                /* IL_2E: ceq */
                /* IL_2F: stloc.3 */
                loc3 = (((((arg1.vtable)["asm0.x60000ae"])())(arg1,arg0) === (0|0)) ? (1) : (0));
                /* IL_30: ldloc.3 */
                /* IL_31: brtrue.s IL_37*/
                
                if (loc3){
                    __pos_0__ = 0x37;
                    continue;
                }
                /* IL_33: ldc.i4.1 */
                /* IL_34: stloc.2 */
                loc2 = (1|0);
                /* IL_35: br.s IL_9E*/
                __pos_0__ = 0x9E;
                continue;
                case 0x37:
                /* IL_37: ldarg.1 */
                /* IL_38: callvirt Boolean get_IsInterface()*/
                /* IL_3D: brfalse.s IL_54*/
                
                if ((!((((arg1.vtable)["asm0.x60000b4"])())(arg1)))){
                    __pos_0__ = 0x54;
                    continue;
                }
                /* IL_3F: ldarg.0 */
                /* IL_40: ldtoken System.Object*/
                /* IL_45: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_4A: callvirt Boolean Equals(System.Object)*/
                /* IL_4F: ldc.i4.0 */
                /* IL_51: ceq */
                st_1C = (((((arg0.vtable)["asm0.x6000008"])())(arg0,(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))) === (0|0)) ? (1) : (0));
                /* IL_52: br.s IL_55*/
                __pos_0__ = 0x55;
                continue;
                case 0x54:
                /* IL_54: ldc.i4.1 */
                st_1C = (1|0);
                case 0x55:
                /* IL_55: nop */
                
                /* IL_56: stloc.3 */
                loc3 = st_1C;
                /* IL_57: ldloc.3 */
                /* IL_58: brtrue.s IL_5E*/
                
                if (loc3){
                    __pos_0__ = 0x5E;
                    continue;
                }
                /* IL_5A: ldc.i4.1 */
                /* IL_5B: stloc.2 */
                loc2 = (1|0);
                /* IL_5C: br.s IL_9E*/
                __pos_0__ = 0x9E;
                continue;
                case 0x5E:
                /* IL_5E: ldarg.0 */
                /* IL_5F: callvirt Boolean get_IsInterface()*/
                /* IL_64: ldc.i4.0 */
                /* IL_66: ceq */
                /* IL_67: stloc.3 */
                loc3 = (((((arg0.vtable)["asm0.x60000b4"])())(arg0) === (0|0)) ? (1) : (0));
                /* IL_68: ldloc.3 */
                /* IL_69: brtrue.s IL_9A*/
                
                if (loc3){
                    __pos_0__ = 0x9A;
                    continue;
                }
                /* IL_6B: nop */
                
                /* IL_6C: ldarg.1 */
                /* IL_6D: callvirt Type[] GetInterfaces()*/
                /* IL_72: stloc.0 */
                loc0 = (((arg1.vtable)["asm0.x60000b7"])())(arg1);
                /* IL_73: ldc.i4.0 */
                /* IL_74: stloc.1 */
                loc1 = (0|0);
                /* IL_75: br.s IL_8F*/
                __pos_0__ = 0x8F;
                continue;
                case 0x77:
                /* IL_77: ldarg.0 */
                /* IL_78: ldloc.0 */
                /* IL_79: ldloc.1 */
                /* IL_7A: ldelem.ref */
                /* IL_7B: callvirt Boolean IsAssignableFrom(System.Type)*/
                /* IL_80: ldc.i4.0 */
                /* IL_82: ceq */
                /* IL_83: stloc.3 */
                loc3 = (((((arg0.vtable)["asm0.x60000b9"])())(arg0,(loc0.jsarr)[loc1]) === (0|0)) ? (1) : (0));
                /* IL_84: ldloc.3 */
                /* IL_85: brtrue.s IL_8B*/
                
                if (loc3){
                    __pos_0__ = 0x8B;
                    continue;
                }
                /* IL_87: ldc.i4.1 */
                /* IL_88: stloc.2 */
                loc2 = (1|0);
                /* IL_89: br.s IL_9E*/
                __pos_0__ = 0x9E;
                continue;
                case 0x8B:
                /* IL_8B: ldloc.1 */
                /* IL_8C: ldc.i4.1 */
                /* IL_8D: add */
                /* IL_8E: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x8F:
                /* IL_8F: ldloc.1 */
                /* IL_90: ldloc.0 */
                /* IL_91: ldlen */
                /* IL_92: conv.i4 */
                /* IL_94: clt */
                /* IL_95: stloc.3 */
                loc3 = ((loc1 < (loc0.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_96: ldloc.3 */
                /* IL_97: brtrue.s IL_77*/
                
                if (loc3){
                    __pos_0__ = 0x77;
                    continue;
                }
                /* IL_99: nop */
                
                case 0x9A:
                /* IL_9A: ldc.i4.0 */
                /* IL_9B: stloc.2 */
                loc2 = (0|0);
                case 0x9E:
                /* IL_9E: ldloc.2 */
                /* IL_9F: ret */
                return loc2;
            }
        }
    };
    /* static String GetName(System.String)*/
    asm.x60000d5 = 
            function (s) {
                var idx = s.jsstr.lastIndexOf('.');
                return new_string(s.jsstr.substring(idx + 1));
            }
            ;;
    /* String get_Name()*/
    asm.x60000d6_init = function ()
    {
        (((asm0)["System.Array"])().init)();
        asm.x60000d6 = asm.x60000d6_;
    };;
    asm.x60000d6 = function (arg0)
    {
        (asm.x60000d6_init.apply)(this,arguments);
        return (asm.x60000d6_.apply)(this,arguments);
    };;
    asm.x60000d6_ = function get_Name(arg0)
    {
        var t0;
        var __pos_0__;
        var loc2;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.Array"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldtoken System.Array*/
                /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_0C: callvirt Boolean IsSubclassOf(System.Type)*/
                /* IL_11: ldc.i4.0 */
                /* IL_13: ceq */
                /* IL_14: stloc.2 */
                loc2 = (((((arg0.vtable)["asm0.x60000ae"])())(arg0,(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))) === (0|0)) ? (1) : (0));
                /* IL_15: ldloc.2 */
                /* IL_16: brtrue.s IL_31*/
                
                if (loc2){
                    __pos_0__ = 0x31;
                    continue;
                }
                /* IL_18: nop */
                
                /* IL_19: ldarg.0 */
                /* IL_1A: callvirt Type GetElementType()*/
                /* IL_1F: callvirt String get_Name()*/
                /* IL_24: ldstr []*/
                /* IL_29: call String Concat(System.String, System.String)*/
                /* IL_2E: stloc.1 */
                loc1 = (asm0.x600016f)(((((((arg0.vtable)["asm0.x60000bc"])())(arg0).vtable)["asm0.x600003d"])())((((arg0.vtable)["asm0.x60000bc"])())(arg0)),new_string("[]"));
                /* IL_2F: br.s IL_4B*/
                __pos_0__ = 0x4B;
                continue;
                case 0x31:
                /* IL_31: ldarg.0 */
                /* IL_32: ldfld constructor ctor*/
                /* IL_37: ldfld Object FullName*/
                /* IL_3C: call String FromJsString(System.Object)*/
                /* IL_41: stloc.0 */
                loc0 = new_string(arg0.ctor.FullName);
                /* IL_42: ldloc.0 */
                /* IL_43: call String GetName(System.String)*/
                /* IL_48: stloc.1 */
                loc1 = (asm0.x60000d5)(loc0);
                case 0x4B:
                /* IL_4B: ldloc.1 */
                /* IL_4C: ret */
                return loc1;
            }
        }
    };
    /* Boolean get_IsValueType()*/
    asm.x60000d7 = function get_IsValueType(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Boolean IsValueType*/
        /* IL_0C: call Boolean op_Explicit(Braille.JavaScript.Boolean)*/
        /* IL_11: stloc.0 */
        loc0 = (arg0.ctor.IsValueType ? 1 : 0);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* Boolean get_IsPrimitive()*/
    asm.x60000d8 = function get_IsPrimitive(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Boolean IsPrimitive*/
        /* IL_0C: call Boolean op_Explicit(Braille.JavaScript.Boolean)*/
        /* IL_11: stloc.0 */
        loc0 = (arg0.ctor.IsPrimitive ? 1 : 0);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    /* Type GetElementType()*/
    asm.x60000d9_init = function ()
    {
        (((asm0)["System.Array"])().init)();
        (((asm0)["System.Exception"])().init)();
        asm.x60000d9 = asm.x60000d9_;
    };;
    asm.x60000d9 = function (arg0)
    {
        (asm.x60000d9_init.apply)(this,arguments);
        return (asm.x60000d9_.apply)(this,arguments);
    };;
    asm.x60000d9_ = function GetElementType(arg0)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.Array"])();
        t1 = ((asm0)["System.Exception"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldtoken System.Array*/
                /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_0C: callvirt Boolean IsSubclassOf(System.Type)*/
                /* IL_11: stloc.1 */
                loc1 = (((arg0.vtable)["asm0.x60000ae"])())(arg0,(asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)));
                /* IL_12: ldloc.1 */
                /* IL_13: brtrue.s IL_20*/
                
                if (loc1){
                    __pos_0__ = 0x20;
                    continue;
                }
                /* IL_15: ldstr Invalid operation*/
                /* IL_1A: newobj Void .ctor(System.String)*/
                /* IL_1F: throw */
                throw newobj(t1,asm0.x600009e,[
                    null,
                    new_string("Invalid operation")
                ]);
                case 0x20:
                /* IL_20: ldarg.0 */
                /* IL_21: callvirt Type[] GetGenericArguments()*/
                /* IL_26: ldc.i4.0 */
                /* IL_27: ldelem.ref */
                /* IL_28: stloc.0 */
                loc0 = ((((arg0.vtable)["asm0.x60000b6"])())(arg0).jsarr)[(0|0)];
                /* IL_2B: ldloc.0 */
                /* IL_2C: ret */
                return loc0;
            }
        }
    };
    /* MethodInfo[] GetMethods()*/
    asm.x60000da_init = function ()
    {
        (((asm0)["System.Reflection.MethodInfo"])().init)();
        (((asm0)["Braille.JavaScript.Array"])().init)();
        asm.x60000da = asm.x60000da_;
    };;
    asm.x60000da = function (arg0)
    {
        (asm.x60000da_init.apply)(this,arguments);
        return (asm.x60000da_.apply)(this,arguments);
    };;
    asm.x60000da_ = function GetMethods(arg0)
    {
        var t0;
        var t1;
        var st_03;
        var st_04;
        var st_05;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        var loc5;
        var loc7;
        var loc6;
        t0 = ((asm0)["System.Reflection.MethodInfo"])();
        t1 = ((asm0)["Braille.JavaScript.Array"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: callvirt Type get_BaseType()*/
                /* IL_07: brtrue.s IL_11*/
                
                if ((((arg0.vtable)["asm0.x60000b1"])())(arg0)){
                    __pos_0__ = 0x11;
                    continue;
                }
                /* IL_09: ldc.i4.0 */
                /* IL_0A: newarr System.Reflection.MethodInfo*/
                st_05 = new_array(t0,(0|0));
                /* IL_0F: br.s IL_1C*/
                __pos_0__ = 0x1C;
                continue;
                case 0x11:
                /* IL_11: ldarg.0 */
                st_03 = arg0;
                /* IL_12: callvirt Type get_BaseType()*/
                st_04 = (((st_03.vtable)["asm0.x60000b1"])())(st_03);
                /* IL_17: callvirt MethodInfo[] GetMethods()*/
                st_05 = (((st_04.vtable)["asm0.x60000bd"])())(st_04);
                case 0x1C:
                /* IL_1C: nop */
                
                /* IL_1D: stloc.0 */
                loc0 = st_05;
                /* IL_1E: ldloc.0 */
                /* IL_1F: ldlen */
                /* IL_20: conv.i4 */
                /* IL_21: ldarg.0 */
                /* IL_22: ldfld constructor ctor*/
                /* IL_27: ldfld Array Methods*/
                /* IL_2C: callvirt Int32 get_Length()*/
                /* IL_31: add */
                /* IL_32: stloc.1 */
                loc1 = ((loc0.jsarr.length | (0|0)) + arg0.ctor.Methods.length) | (0|0);
                /* IL_33: ldarg.0 */
                /* IL_34: ldfld constructor ctor*/
                /* IL_39: ldfld Array Methods*/
                /* IL_3E: callvirt Int32 get_Length()*/
                /* IL_43: stloc.2 */
                loc2 = arg0.ctor.Methods.length;
                /* IL_44: ldloc.0 */
                /* IL_45: ldlen */
                /* IL_46: conv.i4 */
                /* IL_47: stloc.3 */
                loc3 = loc0.jsarr.length | (0|0);
                /* IL_48: ldloc.1 */
                /* IL_49: newarr System.Reflection.MethodInfo*/
                /* IL_4E: stloc.s 4*/
                loc4 = new_array(t0,loc1);
                /* IL_50: ldc.i4.0 */
                /* IL_51: stloc.s 5*/
                loc5 = (0|0);
                /* IL_53: br.s IL_7E*/
                __pos_0__ = 0x7E;
                continue;
                case 0x55:
                /* IL_55: nop */
                
                /* IL_56: ldloc.s 4*/
                /* IL_58: ldloc.s 5*/
                /* IL_5A: ldarg.0 */
                /* IL_5B: ldfld constructor ctor*/
                /* IL_60: ldfld Array Methods*/
                /* IL_65: ldloc.s 5*/
                /* IL_67: callvirt Object get_Item(System.Int32)*/
                /* IL_6C: call Array UnsafeCast[Braille.JavaScript.Array](System.Object)*/
                /* IL_71: call MethodInfo GetInstance(Braille.JavaScript.Array)*/
                /* IL_76: stelem.ref */
                (loc4.jsarr)[loc5] = (asm0.x6000040)(arg0.ctor.Methods[loc5]);
                /* IL_77: nop */
                
                /* IL_78: ldloc.s 5*/
                /* IL_7A: ldc.i4.1 */
                /* IL_7B: add */
                /* IL_7C: stloc.s 5*/
                loc5 = (loc5 + (1|0)) | (0|0);
                case 0x7E:
                /* IL_7E: ldloc.s 5*/
                /* IL_80: ldloc.2 */
                /* IL_82: clt */
                /* IL_83: stloc.s 7*/
                loc7 = ((loc5 < loc2) ? (1) : (0));
                /* IL_85: ldloc.s 7*/
                /* IL_87: brtrue.s IL_55*/
                
                if (loc7){
                    __pos_0__ = 0x55;
                    continue;
                }
                /* IL_89: ldc.i4.0 */
                /* IL_8A: stloc.s 5*/
                loc5 = (0|0);
                /* IL_8C: br.s IL_A1*/
                __pos_0__ = 0xA1;
                continue;
                case 0x8E:
                /* IL_8E: nop */
                
                /* IL_8F: ldloc.s 4*/
                /* IL_91: ldloc.s 5*/
                /* IL_93: ldloc.2 */
                /* IL_94: add */
                /* IL_95: ldloc.0 */
                /* IL_96: ldloc.s 5*/
                /* IL_98: ldelem.ref */
                /* IL_99: stelem.ref */
                (loc4.jsarr)[(loc5 + loc2) | (0|0)] = (loc0.jsarr)[loc5];
                /* IL_9A: nop */
                
                /* IL_9B: ldloc.s 5*/
                /* IL_9D: ldc.i4.1 */
                /* IL_9E: add */
                /* IL_9F: stloc.s 5*/
                loc5 = (loc5 + (1|0)) | (0|0);
                case 0xA1:
                /* IL_A1: ldloc.s 5*/
                /* IL_A3: ldloc.3 */
                /* IL_A5: clt */
                /* IL_A6: stloc.s 7*/
                loc7 = ((loc5 < loc3) ? (1) : (0));
                /* IL_A8: ldloc.s 7*/
                /* IL_AA: brtrue.s IL_8E*/
                
                if (loc7){
                    __pos_0__ = 0x8E;
                    continue;
                }
                /* IL_AC: ldloc.s 4*/
                /* IL_AE: stloc.s 6*/
                loc6 = loc4;
                /* IL_B2: ldloc.s 6*/
                /* IL_B4: ret */
                return loc6;
            }
        }
    };
    /* Void .ctor(System.RuntimeType+constructor)*/
    asm.x60000c0 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x60000be)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld constructor ctor*/
        arg0.ctor = arg1;
        /* IL_0F: ldarg.1 */
        /* IL_10: call Void init(System.RuntimeType+constructor)*/
        arg1.init();
        /* IL_15: nop */
        /* IL_16: nop */
        /* IL_17: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000db = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Object get_Value()*/
    asm.x60000dc = function get_Value(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Object value*/
        /* IL_07: stloc.0 */
        loc0 = (arg0.r)().value;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* String ToString()*/
    asm.x60000dd_init = function ()
    {
        (((asm0)["System.SByte"])().init)();
        asm.x60000dd = asm.x60000dd_;
    };;
    asm.x60000dd = function (arg0)
    {
        (asm.x60000dd_init.apply)(this,arguments);
        return (asm.x60000dd_.apply)(this,arguments);
    };;
    asm.x60000dd_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.SByte"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i1 */
        /* IL_03: box System.SByte*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x600009a)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* Boolean Equals(System.Object)*/
    asm.x60000de_init = function ()
    {
        (((asm0)["System.SByte"])().init)();
        asm.x60000de = asm.x60000de_;
    };;
    asm.x60000de = function (arg0,arg1)
    {
        (asm.x60000de_init.apply)(this,arguments);
        return (asm.x60000de_.apply)(this,arguments);
    };;
    asm.x60000de_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = ((asm0)["System.SByte"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.SByte*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.3 */
                loc3 = (((t0.IsInst)(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc3){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldind.i1 */
                /* IL_14: stloc.0 */
                loc0 = (arg0.r)();
                /* IL_15: ldarg.1 */
                /* IL_16: unbox.any System.SByte*/
                /* IL_1B: stloc.1 */
                loc1 = unbox_any(arg1,t0);
                /* IL_1C: ldloc.0 */
                /* IL_1D: ldloc.1 */
                /* IL_1F: ceq */
                /* IL_20: stloc.2 */
                loc2 = ((loc0 === loc1) ? (1) : (0));
                case 0x23:
                /* IL_23: ldloc.2 */
                /* IL_24: ret */
                return loc2;
            }
        }
    };
    /* Int32 GetHashCode()*/
    asm.x60000df = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i1 */
        /* IL_03: stloc.0 */
        loc0 = (arg0.r)();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* String ToString()*/
    asm.x60000e0_init = function ()
    {
        (((asm0)["System.Single"])().init)();
        asm.x60000e0 = asm.x60000e0_;
    };;
    asm.x60000e0 = function (arg0)
    {
        (asm.x60000e0_init.apply)(this,arguments);
        return (asm.x60000e0_.apply)(this,arguments);
    };;
    asm.x60000e0_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Single"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.r4 */
        /* IL_03: box System.Single*/
        /* IL_08: call String SignedPrimitiveToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x600009a)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* Int32 CompareTo(System.Object)*/
    asm.x60000e1 = function CompareTo(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.Single*/
        /* IL_08: call Int32 CompareTo(System.Single)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x60000e2)(arg0,unbox_any(arg1,((asm0)["System.Single"])()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* Int32 CompareTo(System.Single)*/
    asm.x60000e2 = function CompareTo(arg0,arg1)
    {
        var __pos_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.r4 */
                /* IL_03: stloc.0 */
                loc0 = (arg0.r)();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: clt */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((((loc0 < arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos_0__ = 0x26;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: ldarg.1 */
                /* IL_16: cgt */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.2 */
                loc2 = ((((loc0 > arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.2 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc2){
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos_0__ = 0x26;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: stloc.1 */
                loc1 = (0|0);
                case 0x26:
                /* IL_26: ldloc.1 */
                /* IL_27: ret */
                return loc1;
            }
        }
    };;
    /* Void .ctor()*/
    asm.x60000e3 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000e9 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000ea = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600009d)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000eb = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation not supported*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600009e)(arg0,new_string("Operation not supported"));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    /* Void .ctor(System.String)*/
    asm.x60000ec = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        (asm0.x600009e)(arg0,arg1);
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000f4 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000f5 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Cannot cast from source type to destination type.*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600009e)(arg0,new_string("Cannot cast from source type to destination type."));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x60000f6 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation is not valid due to the current state of the object*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600009e)(arg0,new_string("Operation is not valid due to the current state of the object"));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    /* Void .ctor(System.Exception)*/
    asm.x60000f7 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation is not valid due to the current state of the object*/
        /* IL_06: ldarg.1 */
        /* IL_07: call Void .ctor(System.String, System.Exception)*/
        (asm0.x600009f)(arg0,new_string("Operation is not valid due to the current state of the object"),arg1);
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: nop */
        /* IL_0F: ret */
        return ;
    };;
    /* Void .ctor(System.String, System.Exception)*/
    asm.x60000f8 = function _ctor(arg0,arg1,arg2)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: ldarg.2 */
        /* IL_03: call Void .ctor(System.String, System.Exception)*/
        (asm0.x600009f)(arg0,arg1,arg2);
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: nop */
        /* IL_0B: ret */
        return ;
    };;
    /* Void .ctor(System.String)*/
    asm.x60000f9 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        (asm0.x600009e)(arg0,arg1);
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: ret */
        return ;
    };;
    /* String ToString()*/
    asm.x60000fa_init = function ()
    {
        (((asm0)["Braille.JavaScript.String"])().init)();
        asm.x60000fa = asm.x60000fa_;
    };;
    asm.x60000fa = function (arg0)
    {
        (asm.x60000fa_init.apply)(this,arguments);
        return (asm.x60000fa_.apply)(this,arguments);
    };;
    asm.x60000fa_ = function ToString(arg0)
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc6;
        var loc4;
        var loc5;
        t0 = ((asm0)["Braille.JavaScript.String"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i8 */
                /* IL_03: stloc.0 */
                loc0 = (arg0.r)();
                /* IL_04: ldc.i4.s 10*/
                /* IL_06: conv.i8 */
                /* IL_07: stloc.1 */
                loc1 = conv_i8((10|0));
                (asm0.x600001f)();
                /* IL_08: ldsfld String Emtpy*/
                /* IL_0D: stloc.2 */
                loc2 = t0.Emtpy;
                (asm0.x600001f)();
                /* IL_0E: ldsfld String Emtpy*/
                /* IL_13: stloc.3 */
                loc3 = t0.Emtpy;
                /* IL_14: ldloc.0 */
                /* IL_15: ldc.i4.0 */
                /* IL_16: conv.i8 */
                /* IL_18: clt */
                /* IL_19: ldc.i4.0 */
                /* IL_1B: ceq */
                /* IL_1C: stloc.s 6*/
                loc6 = (((asm0.Int64_LessThan)(loc0,conv_i8((0|0))) === (0|0)) ? (1) : (0));
                /* IL_1E: ldloc.s 6*/
                /* IL_20: brtrue.s IL_2C*/
                
                if (loc6){
                    __pos_0__ = 0x2C;
                    continue;
                }
                /* IL_22: nop */
                
                /* IL_23: ldc.i4.s 45*/
                /* IL_25: call String FromCharCode(System.Char)*/
                /* IL_2A: stloc.3 */
                loc3 = String.fromCharCode((45|0));
                /* IL_2B: nop */
                
                case 0x2C:
                /* IL_2C: nop */
                
                /* IL_2D: ldloc.0 */
                /* IL_2E: ldloc.1 */
                /* IL_2F: rem */
                /* IL_30: stloc.s 4*/
                loc4 = (asm0.Int64_Modulus)(loc0,loc1);
                /* IL_32: ldloc.s 4*/
                /* IL_34: ldc.i4.0 */
                /* IL_35: conv.i8 */
                /* IL_37: clt */
                /* IL_38: ldc.i4.0 */
                /* IL_3A: ceq */
                /* IL_3B: stloc.s 6*/
                loc6 = (((asm0.Int64_LessThan)(loc4,conv_i8((0|0))) === (0|0)) ? (1) : (0));
                /* IL_3D: ldloc.s 6*/
                /* IL_3F: brtrue.s IL_46*/
                
                if (loc6){
                    __pos_0__ = 0x46;
                    continue;
                }
                /* IL_41: ldloc.s 4*/
                /* IL_43: neg */
                /* IL_44: stloc.s 4*/
                loc4 = (asm0.Int64_UnaryNegation)(loc4);
                case 0x46:
                /* IL_46: ldloc.s 4*/
                /* IL_48: call String GetLowString(System.Int64)*/
                /* IL_4D: ldloc.2 */
                /* IL_4E: call String op_Addition(Braille.JavaScript.String, Braille.JavaScript.String)*/
                /* IL_53: stloc.2 */
                loc2 = loc4[0].toString() + loc2;
                /* IL_54: ldloc.0 */
                /* IL_55: ldloc.1 */
                /* IL_56: div */
                /* IL_57: stloc.0 */
                loc0 = (asm0.Int64_Division)(loc0,loc1);
                /* IL_58: nop */
                
                /* IL_59: ldloc.0 */
                /* IL_5A: ldc.i4.0 */
                /* IL_5B: conv.i8 */
                /* IL_5D: ceq */
                /* IL_5E: ldc.i4.0 */
                /* IL_60: ceq */
                /* IL_61: stloc.s 6*/
                loc6 = (((asm0.XInt64_Equality)(loc0,conv_i8((0|0))) === (0|0)) ? (1) : (0));
                /* IL_63: ldloc.s 6*/
                /* IL_65: brtrue.s IL_2C*/
                
                if (loc6){
                    __pos_0__ = 0x2C;
                    continue;
                }
                /* IL_67: ldloc.3 */
                /* IL_68: ldloc.2 */
                /* IL_69: call String op_Addition(Braille.JavaScript.String, Braille.JavaScript.String)*/
                /* IL_6E: call String op_Explicit(Braille.JavaScript.String)*/
                /* IL_73: stloc.s 5*/
                loc5 = new_string(loc3 + loc2);
                /* IL_77: ldloc.s 5*/
                /* IL_79: ret */
                return loc5;
            }
        }
    };
    /* Boolean Equals(System.Object)*/
    asm.x60000fb = function Equals(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i8 */
        /* IL_03: ldarg.1 */
        /* IL_04: unbox.any System.Int64*/
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = (((arg0.r)() === unbox_any(arg1,((asm0)["System.Int64"])())) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    /* Int32 GetHashCode()*/
    asm.x60000fc = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i8 */
        /* IL_03: call Int32 GetLow(System.Int64)*/
        /* IL_08: stloc.0 */
        loc0 = (arg0.r)()[0];
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* static Int64 op_Addition(System.Int64, System.Int64)*/
    asm.x60000ff = 
            function XInt64_Addition(lhs, rhs) 
            {
                var x = new Uint16Array(lhs.buffer);
                var y = new Uint16Array(rhs.buffer);                

                var a = (x[0] + y[0]) | 0;
                var o1 = (a & 0xff0000) >> 16;
                var b = (o1 + x[1] + y[1]) | 0;
                var o2 = (b & 0xff0000) >> 16;
                var c = (o2 + x[2] + y[2]) | 0;
                var o3 = (c & 0xff0000) >> 16;
                var d = (o3 + x[3] + y[3]) | 0;

                return new Uint32Array(new Uint16Array([a & 0xffff, b & 0xffff, c & 0xffff, d & 0xffff]).buffer);
            };;
    asm.XInt64_Addition = asm.x60000ff;
    /* static Int64 op_Subtraction(System.Int64, System.Int64)*/
    asm.x6000100 = 
            function XInt64_Subtraction(lhs, rhs) 
            {
                if (lhs[0] >= rhs[0] && rhs[1] == 0)
                    return new Uint32Array([lhs[0]-rhs[0], lhs[1]]);

                var x = new Uint16Array(lhs.buffer);
                var y = new Uint16Array(rhs.buffer);

                var a = (x[0] - y[0]) | 0;
                var u = 0;
                if (a < 0) { a = 0x10000 + a; u = -1; }

                var b = (u + ((x[1] - y[1]) | 0)) | 0;
                u = 0;
                if (b < 0) { b = 0x10000 + b; u = -1; }

                var c = (u + ((x[2] - y[2]) | 0)) | 0;
                u = 0;
                if (c < 0) { c = 0x10000 + c; u = -1; }

                var d = (u + ((x[3] - y[3]) | 0)) | 0;
                if (d < 0) { d = 0x10000 + d; }
                
                return new Uint32Array(new Uint16Array([a & 0xffff, b & 0xffff, c & 0xffff, d & 0xffff]).buffer);
            };;
    asm.XInt64_Subtraction = asm.x6000100;
    /* static Int64 op_BitwiseOr(System.Int64, System.Int64)*/
    asm.x6000101 = 
            function XInt64_BitwiseOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] | rhs[0], lhs[1] | rhs[1]]);
            }
            ;;
    asm.XInt64_BitwiseOr = asm.x6000101;
    /* static Int64 op_BitwiseAnd(System.Int64, System.Int64)*/
    asm.x6000102 = 
            function XInt64_BitwiseAnd(lhs, rhs) 
            {
                return new Uint32Array([lhs[0] & rhs[0], lhs[1] & rhs[1]]);
            }
            ;;
    asm.XInt64_BitwiseAnd = asm.x6000102;
    /* static Int64 op_ExclusiveOr(System.Int64, System.Int64)*/
    asm.x6000103 = 
            function XInt64_ExclusiveOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] ^ rhs[0], lhs[1] ^ rhs[1]]);
            }
            ;;
    asm.XInt64_ExclusiveOr = asm.x6000103;
    /* static Int64 op_OnesComplement(System.Int64)*/
    asm.x6000104 = 
            function XInt64_OnesComplement(a)
            {
                return new Uint32Array([~a[0], ~a[1]]);
            }
            ;;
    asm.XInt64_OnesComplement = asm.x6000104;
    /* static Int64 op_LeftShift(System.Int64, System.Int32)*/
    asm.x6000105 = 
            function XInt64_LeftShift(lhs, n)
            {
                n = n & 0x3f;

                var maxShift = 8;
                if (n > maxShift) {
                    return asm0.XInt64_LeftShift(
                           asm0.XInt64_LeftShift(lhs, maxShift), n - maxShift);
                }
          
                var x = new Uint16Array(lhs.buffer);

                var a = (x[0] << n);
                var b = (x[1] << n) | ((a >>> 16) & 0xffff);
                var c = (x[2] << n) | ((b >>> 16) & 0xffff);
                var d = (x[3] << n) | ((c >>> 16) & 0xffff);

                return new Uint32Array(new Uint16Array([a & 0xffff, b & 0xffff, c & 0xffff, d & 0xffff]).buffer);
            }
            ;;
    asm.XInt64_LeftShift = asm.x6000105;
    /* static Int64 op_Equality(System.Int64, System.Int64)*/
    asm.x6000106 = 
            function XInt64_Equality(lhs, rhs)
            {
                return (lhs[0] === rhs[0] && lhs[1] === rhs[1]) ? 1 : 0;
            }
            ;;
    asm.XInt64_Equality = asm.x6000106;
    /* static Int64 op_Inequality(System.Int64, System.Int64)*/
    asm.x6000107 = 
            function XInt64_Inequality(lhs, rhs)
            {
                return (lhs[0] !== rhs[0] && lhs[1] !== rhs[1]) ? 1 : 0;
            }
            ;;
    asm.XInt64_Inequality = asm.x6000107;
    /* static Int64 op_Decrement(System.Int64)*/
    asm.x6000108 = function op_Decrement(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldc.i4.1 */
        /* IL_03: conv.i8 */
        /* IL_04: sub */
        /* IL_05: stloc.0 */
        loc0 = (asm0.XInt64_Subtraction)(arg0,conv_i8((1|0)));
        /* IL_08: ldloc.0 */
        /* IL_09: ret */
        return loc0;
    };;
    asm.XInt64_Decrement = asm.x6000108;
    /* static Int64 op_Increment(System.Int64)*/
    asm.x6000109 = function op_Increment(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldc.i4.1 */
        /* IL_03: conv.i8 */
        /* IL_04: add */
        /* IL_05: stloc.0 */
        loc0 = (asm0.XInt64_Addition)(arg0,conv_i8((1|0)));
        /* IL_08: ldloc.0 */
        /* IL_09: ret */
        return loc0;
    };;
    asm.XInt64_Increment = asm.x6000109;
    /* static Int64 op_RightShift(System.Int64, System.Int32)*/
    asm.x600010a = 
            function Int64_RightShift(a, n) {
                // Int64 (signed) uses arithmetic shift, UIn64 (unsigned) uses logical shift

                if (n === 0) {
                    var result2 = a;
                } else if (n > 32) {
                    result2 = asm0.Int64_RightShift(asm0.Int64_RightShift(a, 32), n - 32);
                } else {
                    var unsignedShift = asm0.UInt64_RightShift(a, n);

                    if (asm0.Int64_isNegative(a)) {
                        var outshift = asm0.UInt64_RightShift(new Uint32Array([0xffffff, 0xffffff]), n);
                        var inshift = asm0.XInt64_LeftShift(outshift, 64 - n);
                        var uresult = asm0.UInt64_BitwiseOr(unsignedShift, inshift);
                    } else {
                        uresult = unsignedShift;
                    }
                    result2 = uresult;
                }
                return result2;
            };;
    asm.Int64_RightShift = asm.x600010a;
    /* static Int64 op_Division(System.Int64, System.Int32)*/
    asm.x600010b = 
            function Int64_Division(n, d) {
                if (d[0] === 0 && d[1] === 0)
                    throw new Error("System.DivideByZeroException");

                if (asm0.Int64_isNegative(d))
                    return asm0.Int64_Division(
                      asm0.Int64_UnaryNegation(n), asm0.Int64_UnaryNegation(d));

                else if (asm0.Int64_isNegative(n)) {
                    if (asm0.XInt64_Equality(asm0.Int64_UnaryNegation(n), n)) { 
                        n = asm0.XInt64_Addition(n, d);
                        return asm0.XInt64_Subtraction(
                            asm0.Int64_UnaryNegation(asm0.Int64_Division(asm0.Int64_UnaryNegation(n), d)),
                            new Uint32Array([1, 0]));
                    }
                    else {
                        return asm0.Int64_UnaryNegation(asm0.Int64_Division(asm0.Int64_UnaryNegation(n), d));
                    }
                }
                else
                    return asm0.UInt64_Division(n, d);
            };;
    asm.Int64_Division = asm.x600010b;
    /* static Int64 op_Modulus(System.Int64, System.Int32)*/
    asm.x600010c = 
            function Int64_Modulus(n, d) {
                if (d[0] === 0 && d[1] === 0)
                    throw new Error("System.DivideByZeroException");

                if (asm0.Int64_isNegative(d)) {
                    return asm0.Int64_Modulus(
                      n, asm0.Int64_UnaryNegation(d));
                }
                else if (asm0.Int64_isNegative(n)) {
                    if (asm0.XInt64_Equality(asm0.Int64_UnaryNegation(n), n)) { 
                        n = asm0.XInt64_Addition(n, d);
                    }
                    return asm0.Int64_UnaryNegation(asm0.Int64_Modulus(asm0.Int64_UnaryNegation(n), d));
                }
                else
                    return asm0.UInt64_Modulus(n, d);
            };;
    asm.Int64_Modulus = asm.x600010c;
    /* static Boolean op_GreaterThan(System.Int64, System.Int64)*/
    asm.x600010d = 
            function Int64_GreaterThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_GreaterThan(a, b);
                else
                    return bn ? 1 : 0;
            };;
    asm.Int64_GreaterThan = asm.x600010d;
    /* static Boolean op_LessThan(System.Int64, System.Int64)*/
    asm.x600010e = 
            function Int64_LessThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_LessThan(a, b);
                else
                    return an ? 1 : 0;
            };;
    asm.Int64_LessThan = asm.x600010e;
    /* static Int64 op_UnaryNegation(System.Int64)*/
    asm.x600010f = 
            function Int64_UnaryNegation (a) {
                var complement = asm0.XInt64_Subtraction(new Uint32Array([0xffffffff, 0xffffffff]), a);
                return asm0.XInt64_Addition(complement, new Uint32Array([1, 0]));
            };;
    asm.Int64_UnaryNegation = asm.x600010f;
    /* static Boolean isNegative(System.Int64)*/
    asm.x6000110 = 
            function isNegative(n) {
                return asm0.UInt64_GreaterThan(n, [0xffffffff, 0x7fffffff]);
            };;
    asm.Int64_isNegative = asm.x6000110;
    /* Void .ctor()*/
    asm.x600011b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor(System.String)*/
    asm.x600011c = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* static Void InitializeArray(System.Array, System.RuntimeFieldHandle)*/
    asm.x600011d = 
            function (arr, handle) {
                handle.value.type();
                var data = new Int8Array(handle.value.type[handle.value.field]);
                arr.jsarr = new arr.etype.ArrayType(data.buffer);   
            }
            ;;
    /* Void .ctor()*/
    asm.x600011e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600011f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    /* static Void .cctor()*/
    asm.x6000120_init = function ()
    {
        (((asm0)["System.EventArgs"])().init)();
        asm.x6000120 = asm.x6000120_;
    };;
    asm.x6000120 = function ()
    {
        (asm.x6000120_init.apply)(this,arguments);
        return (asm.x6000120_.apply)(this,arguments);
    };;
    asm.x6000120_ = function _cctor()
    {
        var t0;
        
        if (((asm0)["System.EventArgs"])().FieldHasBeenInitialized){
            return;
        }
        ((asm0)["System.EventArgs"])().FieldHasBeenInitialized = true;
        t0 = ((asm0)["System.EventArgs"])();
        (asm0.x6000120)();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stsfld EventArgs Empty*/
        (t0)["Empty"] = newobj(t0,asm0.x600011f,[
            null
        ]);
        /* IL_0A: ret */
        return ;
    };
    /* Void Invoke(System.Object, System.EventArgs)*/
    asm.x6000122 = function Invoke()
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
    asm.x6000121 = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* Boolean Invoke(T)*/
    asm.x6000124 = function Invoke()
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
    asm.x6000123 = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    /* Int32 get_Length()*/
    asm.x6000125 = function get_Length(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetLengthImpl(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000126)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static Int32 GetLengthImpl(System.Object)*/
    asm.x6000126 = function(o) { return o.jsarr.length; };;
    /* static Object GetValueImpl(System.Object, System.Int32)*/
    asm.x6000127 = function(o, i) { return box(o.jsarr[i], o.etype); };;
    /* static T[] FromJsArray[T](System.Object)*/
    asm.x6000128 = 
            function (T) {
                return function FromJsArray(arr) {
                    var r = new (asm0['System.Array`1'](T))();
                    r.etype = T;
                    r.jsarr = arr;
                    return r;
                };
            };;
    /* Object GetValue(System.Int32)*/
    asm.x6000129 = function GetValue(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Object GetValueImpl(System.Object, System.Int32)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x6000127)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* IEnumerator GetEnumerator()*/
    asm.x600012a = function GetEnumerator(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt IEnumerator GetEnumeratorImpl()*/
        /* IL_07: stloc.0 */
        loc0 = (((arg0.vtable)["asm0.x600012b"])())(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static Void Clear[T](T[], System.Int32, System.Int32)*/
    asm.x600012c = function (T)
    {
        return function Clear(arg0,arg1,arg2)
        {
            var t0;
            var loc0;
            var __pos_0__;
            var loc1;
            var loc2;
            t0 = T;
            loc0 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldloca.s 0*/
                    /* IL_04: initobj T*/
                    ({
                        'w': function ()
                        {
                            loc0 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return loc0;
                        }
                    }.w)(((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null)));
                    /* IL_09: ldarg.1 */
                    /* IL_0A: stloc.1 */
                    loc1 = arg1;
                    /* IL_0B: br.s IL_19*/
                    __pos_0__ = 0x19;
                    continue;
                    case 0xD:
                    /* IL_0D: ldarg.0 */
                    /* IL_0E: ldloc.1 */
                    /* IL_0F: ldloc.0 */
                    /* IL_10: stelem T*/
                    (arg0.jsarr)[loc1] = loc0;
                    /* IL_15: ldloc.1 */
                    /* IL_16: ldc.i4.1 */
                    /* IL_17: add */
                    /* IL_18: stloc.1 */
                    loc1 = (loc1 + (1|0)) | (0|0);
                    case 0x19:
                    /* IL_19: ldloc.1 */
                    /* IL_1A: ldarg.0 */
                    /* IL_1B: ldlen */
                    /* IL_1C: conv.i4 */
                    /* IL_1E: clt */
                    /* IL_1F: stloc.2 */
                    loc2 = ((loc1 < (arg0.jsarr.length | (0|0))) ? (1) : (0));
                    /* IL_20: ldloc.2 */
                    /* IL_21: brtrue.s IL_0D*/
                    
                    if (loc2){
                        __pos_0__ = 0xD;
                        continue;
                    }
                    /* IL_23: ret */
                    return ;
                }
            }
        };
    };;
    /* static Int32 IndexOf[T](T[], T, System.Int32, System.Int32)*/
    asm.x600012d_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Exception"])().init)();
            (((asm0)["System.Collections.IEqualityComparer"])().init)();
            asm.x600012d = asm.x600012d_;
        };
    };;
    asm.x600012d = function (T)
    {
        return function (arg0,arg1,arg2,arg3)
        {
            ((asm.x600012d_init)(T).apply)(this,arguments);
            return ((asm.x600012d_)(T).apply)(this,arguments);
        };
    };;
    asm.x600012d_ = function (T)
    {
        return function IndexOf(arg0,arg1,arg2,arg3)
        {
            var t0;
            var t1;
            var t2;
            var st_18;
            var __pos_0__;
            var loc4;
            var loc0;
            var loc1;
            var loc2;
            var loc3;
            t0 = ((asm0)["System.Exception"])();
            t1 = T;
            t2 = ((asm0)["System.Collections.IEqualityComparer"])();
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.0 */
                    /* IL_02: ldnull */
                    /* IL_04: ceq */
                    /* IL_05: ldc.i4.0 */
                    /* IL_07: ceq */
                    /* IL_08: stloc.s 4*/
                    loc4 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_0A: ldloc.s 4*/
                    /* IL_0C: brtrue.s IL_19*/
                    
                    if (loc4){
                        __pos_0__ = 0x19;
                        continue;
                    }
                    /* IL_0E: ldstr array*/
                    /* IL_13: newobj Void .ctor(System.String)*/
                    /* IL_18: throw */
                    throw newobj(t0,asm0.x600009e,[
                        null,
                        new_string("array")
                    ]);
                    case 0x19:
                    /* IL_19: ldarg.3 */
                    /* IL_1A: ldc.i4.0 */
                    /* IL_1B: blt.s IL_32*/
                    
                    if (arg3 < (0|0)){
                        __pos_0__ = 0x32;
                        continue;
                    }
                    /* IL_1D: ldarg.2 */
                    /* IL_1E: ldc.i4.0 */
                    /* IL_1F: blt.s IL_32*/
                    
                    if (arg2 < (0|0)){
                        __pos_0__ = 0x32;
                        continue;
                    }
                    /* IL_21: ldarg.2 */
                    /* IL_22: ldc.i4.1 */
                    /* IL_23: sub */
                    /* IL_24: ldarg.0 */
                    /* IL_25: ldlen */
                    /* IL_26: conv.i4 */
                    /* IL_27: ldc.i4.1 */
                    /* IL_28: sub */
                    /* IL_29: ldarg.3 */
                    /* IL_2A: sub */
                    /* IL_2C: cgt */
                    /* IL_2D: ldc.i4.0 */
                    /* IL_2F: ceq */
                    st_18 = ((((((arg2 - (1|0)) | (0|0)) > (((((arg0.jsarr.length | (0|0)) - (1|0)) | (0|0)) - arg3) | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_30: br.s IL_33*/
                    __pos_0__ = 0x33;
                    continue;
                    case 0x32:
                    /* IL_32: ldc.i4.0 */
                    st_18 = (0|0);
                    case 0x33:
                    /* IL_33: nop */
                    
                    /* IL_34: stloc.s 4*/
                    loc4 = st_18;
                    /* IL_36: ldloc.s 4*/
                    /* IL_38: brtrue.s IL_40*/
                    
                    if (loc4){
                        __pos_0__ = 0x40;
                        continue;
                    }
                    /* IL_3A: newobj Void .ctor()*/
                    /* IL_3F: throw */
                    throw newobj(t0,asm0.x600009d,[
                        null
                    ]);
                    case 0x40:
                    /* IL_40: ldarg.2 */
                    /* IL_41: ldarg.3 */
                    /* IL_42: add */
                    /* IL_43: stloc.0 */
                    loc0 = (arg2 + arg3) | (0|0);
                    /* IL_44: ldtoken T*/
                    /* IL_49: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    /* IL_4E: call IEqualityComparer GetDefaultEqualityComparer(System.Type)*/
                    /* IL_53: stloc.1 */
                    loc1 = asm1.GetDefaultEqualityComparer((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t1)).ctor)();
                    /* IL_54: ldarg.2 */
                    /* IL_55: stloc.2 */
                    loc2 = arg2;
                    /* IL_56: br.s IL_83*/
                    __pos_0__ = 0x83;
                    continue;
                    case 0x58:
                    /* IL_58: nop */
                    
                    /* IL_59: ldloc.1 */
                    /* IL_5A: ldarg.0 */
                    /* IL_5B: ldloc.2 */
                    /* IL_5C: call T UnsafeLoad[T](T[], System.Int32)*/
                    /* IL_61: box T*/
                    /* IL_66: ldarg.1 */
                    /* IL_67: box T*/
                    /* IL_6C: callvirt Boolean Equals(System.Object, System.Object)*/
                    /* IL_71: ldc.i4.0 */
                    /* IL_73: ceq */
                    /* IL_74: stloc.s 4*/
                    loc4 = (((((loc1.ifacemap)[t2].x6000030)())(convert_box_to_pointer_as_needed(loc1),box((arg0.jsarr[loc2]),t1),box(arg1,t1)) === (0|0)) ? (1) : (0));
                    /* IL_76: ldloc.s 4*/
                    /* IL_78: brtrue.s IL_7E*/
                    
                    if (loc4){
                        __pos_0__ = 0x7E;
                        continue;
                    }
                    /* IL_7A: ldloc.2 */
                    /* IL_7B: stloc.3 */
                    loc3 = loc2;
                    /* IL_7C: br.s IL_91*/
                    __pos_0__ = 0x91;
                    continue;
                    case 0x7E:
                    /* IL_7E: nop */
                    
                    /* IL_7F: ldloc.2 */
                    /* IL_80: ldc.i4.1 */
                    /* IL_81: add */
                    /* IL_82: stloc.2 */
                    loc2 = (loc2 + (1|0)) | (0|0);
                    case 0x83:
                    /* IL_83: ldloc.2 */
                    /* IL_84: ldloc.0 */
                    /* IL_86: clt */
                    /* IL_87: stloc.s 4*/
                    loc4 = ((loc2 < loc0) ? (1) : (0));
                    /* IL_89: ldloc.s 4*/
                    /* IL_8B: brtrue.s IL_58*/
                    
                    if (loc4){
                        __pos_0__ = 0x58;
                        continue;
                    }
                    /* IL_8D: ldc.i4.m1 */
                    /* IL_8E: stloc.3 */
                    loc3 = (-1|0);
                    case 0x91:
                    /* IL_91: ldloc.3 */
                    /* IL_92: ret */
                    return loc3;
                }
            }
        };
    };
    /* static Exception GetException(System.String)*/
    asm.x600012e = 
            function (classname) { 
                var t = asm1[classname]();
                return new t(); 
            };;
    /* static Void Copy[T](T[], System.Int32, T[], System.Int32, System.Int32)*/
    asm.x600012f = function (T)
    {
        return function Copy(arg0,arg1,arg2,arg3,arg4)
        {
            var st_4F;
            var __pos_0__;
            var loc3;
            var loc0;
            var loc1;
            var loc2;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.0 */
                    /* IL_02: ldnull */
                    /* IL_04: ceq */
                    /* IL_05: ldc.i4.0 */
                    /* IL_07: ceq */
                    /* IL_08: stloc.3 */
                    loc3 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_09: ldloc.3 */
                    /* IL_0A: brtrue.s IL_17*/
                    
                    if (loc3){
                        __pos_0__ = 0x17;
                        continue;
                    }
                    /* IL_0C: ldstr System.ArgumentNullException*/
                    /* IL_11: call Exception GetException(System.String)*/
                    /* IL_16: throw */
                    throw (asm0.x600012e)(new_string("System.ArgumentNullException"));
                    case 0x17:
                    /* IL_17: ldarg.2 */
                    /* IL_18: ldnull */
                    /* IL_1A: ceq */
                    /* IL_1B: ldc.i4.0 */
                    /* IL_1D: ceq */
                    /* IL_1E: stloc.3 */
                    loc3 = ((((arg2 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_1F: ldloc.3 */
                    /* IL_20: brtrue.s IL_2D*/
                    
                    if (loc3){
                        __pos_0__ = 0x2D;
                        continue;
                    }
                    /* IL_22: ldstr System.ArgumentNullException*/
                    /* IL_27: call Exception GetException(System.String)*/
                    /* IL_2C: throw */
                    throw (asm0.x600012e)(new_string("System.ArgumentNullException"));
                    case 0x2D:
                    /* IL_2D: ldarg.1 */
                    /* IL_2E: ldc.i4.0 */
                    /* IL_30: clt */
                    /* IL_31: ldc.i4.0 */
                    /* IL_33: ceq */
                    /* IL_34: stloc.3 */
                    loc3 = ((((arg1 < (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_35: ldloc.3 */
                    /* IL_36: brtrue.s IL_43*/
                    
                    if (loc3){
                        __pos_0__ = 0x43;
                        continue;
                    }
                    /* IL_38: ldstr System.ArgumentOutOfRangeException*/
                    /* IL_3D: call Exception GetException(System.String)*/
                    /* IL_42: throw */
                    throw (asm0.x600012e)(new_string("System.ArgumentOutOfRangeException"));
                    case 0x43:
                    /* IL_43: ldarg.3 */
                    /* IL_44: ldc.i4.0 */
                    /* IL_46: clt */
                    /* IL_47: ldc.i4.0 */
                    /* IL_49: ceq */
                    /* IL_4A: stloc.3 */
                    loc3 = ((((arg3 < (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_4B: ldloc.3 */
                    /* IL_4C: brtrue.s IL_59*/
                    
                    if (loc3){
                        __pos_0__ = 0x59;
                        continue;
                    }
                    /* IL_4E: ldstr System.ArgumentOutOfRangeException*/
                    /* IL_53: call Exception GetException(System.String)*/
                    /* IL_58: throw */
                    throw (asm0.x600012e)(new_string("System.ArgumentOutOfRangeException"));
                    case 0x59:
                    /* IL_59: ldarg.1 */
                    /* IL_5A: ldarg.0 */
                    /* IL_5B: ldlen */
                    /* IL_5C: conv.i4 */
                    /* IL_5D: ldarg.s 4*/
                    /* IL_5F: sub */
                    /* IL_61: cgt */
                    /* IL_62: ldc.i4.0 */
                    /* IL_64: ceq */
                    /* IL_65: stloc.3 */
                    loc3 = ((((arg1 > (((arg0.jsarr.length | (0|0)) - arg4) | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_66: ldloc.3 */
                    /* IL_67: brtrue.s IL_74*/
                    
                    if (loc3){
                        __pos_0__ = 0x74;
                        continue;
                    }
                    /* IL_69: ldstr System.ArgumentException*/
                    /* IL_6E: call Exception GetException(System.String)*/
                    /* IL_73: throw */
                    throw (asm0.x600012e)(new_string("System.ArgumentException"));
                    case 0x74:
                    /* IL_74: ldarg.3 */
                    /* IL_75: ldarg.2 */
                    /* IL_76: ldlen */
                    /* IL_77: conv.i4 */
                    /* IL_78: ldarg.s 4*/
                    /* IL_7A: sub */
                    /* IL_7C: cgt */
                    /* IL_7D: ldc.i4.0 */
                    /* IL_7F: ceq */
                    /* IL_80: stloc.3 */
                    loc3 = ((((arg3 > (((arg2.jsarr.length | (0|0)) - arg4) | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_81: ldloc.3 */
                    /* IL_82: brtrue.s IL_90*/
                    
                    if (loc3){
                        __pos_0__ = 0x90;
                        continue;
                    }
                    /* IL_84: nop */
                    
                    /* IL_85: ldstr System.ArgumentException*/
                    /* IL_8A: call Exception GetException(System.String)*/
                    /* IL_8F: throw */
                    throw (asm0.x600012e)(new_string("System.ArgumentException"));
                    case 0x90:
                    /* IL_90: ldarg.1 */
                    /* IL_91: stloc.0 */
                    loc0 = arg1;
                    /* IL_92: ldarg.3 */
                    /* IL_93: stloc.1 */
                    loc1 = arg3;
                    /* IL_94: ldc.i4.0 */
                    /* IL_95: stloc.2 */
                    loc2 = (0|0);
                    /* IL_96: br.s IL_B4*/
                    __pos_0__ = 0xB4;
                    continue;
                    case 0x98:
                    /* IL_98: nop */
                    
                    /* IL_99: ldarg.2 */
                    /* IL_9A: ldloc.1 */
                    /* IL_9B: ldarg.0 */
                    /* IL_9C: ldloc.0 */
                    /* IL_9D: ldelem T*/
                    /* IL_A2: stelem T*/
                    (arg2.jsarr)[loc1] = (arg0.jsarr)[loc0];
                    /* IL_A7: nop */
                    
                    /* IL_A8: ldloc.0 */
                    /* IL_A9: ldc.i4.1 */
                    /* IL_AA: add */
                    /* IL_AB: stloc.0 */
                    loc0 = (loc0 + (1|0)) | (0|0);
                    /* IL_AC: ldloc.1 */
                    /* IL_AD: ldc.i4.1 */
                    /* IL_AE: add */
                    /* IL_AF: stloc.1 */
                    loc1 = (loc1 + (1|0)) | (0|0);
                    /* IL_B0: ldloc.2 */
                    /* IL_B1: ldc.i4.1 */
                    /* IL_B2: add */
                    /* IL_B3: stloc.2 */
                    loc2 = (loc2 + (1|0)) | (0|0);
                    case 0xB4:
                    /* IL_B4: ldloc.2 */
                    /* IL_B5: ldarg.s 4*/
                    /* IL_B7: bge.s IL_C1*/
                    
                    if (loc2 >= arg4){
                        __pos_0__ = 0xC1;
                        continue;
                    }
                    /* IL_B9: ldloc.0 */
                    /* IL_BA: ldarg.0 */
                    /* IL_BB: ldlen */
                    /* IL_BC: conv.i4 */
                    /* IL_BE: clt */
                    st_4F = ((loc0 < (arg0.jsarr.length | (0|0))) ? (1) : (0));
                    /* IL_BF: br.s IL_C2*/
                    __pos_0__ = 0xC2;
                    continue;
                    case 0xC1:
                    /* IL_C1: ldc.i4.0 */
                    st_4F = (0|0);
                    case 0xC2:
                    /* IL_C2: nop */
                    
                    /* IL_C3: stloc.3 */
                    loc3 = st_4F;
                    /* IL_C4: ldloc.3 */
                    /* IL_C5: brtrue.s IL_98*/
                    
                    if (loc3){
                        __pos_0__ = 0x98;
                        continue;
                    }
                    /* IL_C7: ret */
                    return ;
                }
            }
        };
    };;
    /* static Int32 GetIndex[T](T[], System.Int32, System.Int32, System.Predicate`1[T])*/
    asm.x6000130 = function (T)
    {
        return function GetIndex(arg0,arg1,arg2,arg3)
        {
            var __pos_0__;
            var loc0;
            var loc1;
            var loc3;
            var loc2;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.1 */
                    /* IL_02: ldarg.2 */
                    /* IL_03: add */
                    /* IL_04: stloc.0 */
                    loc0 = (arg1 + arg2) | (0|0);
                    /* IL_05: ldarg.1 */
                    /* IL_06: stloc.1 */
                    loc1 = arg1;
                    /* IL_07: br.s IL_27*/
                    __pos_0__ = 0x27;
                    continue;
                    case 0x9:
                    /* IL_09: nop */
                    
                    /* IL_0A: ldarg.3 */
                    /* IL_0B: ldarg.0 */
                    /* IL_0C: ldloc.1 */
                    /* IL_0D: ldelem T*/
                    /* IL_12: callvirt Boolean Invoke(T)*/
                    /* IL_17: ldc.i4.0 */
                    /* IL_19: ceq */
                    /* IL_1A: stloc.3 */
                    loc3 = (((arg3._methodPtr.apply)(null,((arg3._target) ? ([
                        arg3._target,
                        (arg0.jsarr)[loc1]
                    ]) : ([
                        (arg0.jsarr)[loc1]
                    ]))) === (0|0)) ? (1) : (0));
                    /* IL_1B: ldloc.3 */
                    /* IL_1C: brtrue.s IL_22*/
                    
                    if (loc3){
                        __pos_0__ = 0x22;
                        continue;
                    }
                    /* IL_1E: ldloc.1 */
                    /* IL_1F: stloc.2 */
                    loc2 = loc1;
                    /* IL_20: br.s IL_33*/
                    __pos_0__ = 0x33;
                    continue;
                    case 0x22:
                    /* IL_22: nop */
                    
                    /* IL_23: ldloc.1 */
                    /* IL_24: ldc.i4.1 */
                    /* IL_25: add */
                    /* IL_26: stloc.1 */
                    loc1 = (loc1 + (1|0)) | (0|0);
                    case 0x27:
                    /* IL_27: ldloc.1 */
                    /* IL_28: ldloc.0 */
                    /* IL_2A: clt */
                    /* IL_2B: stloc.3 */
                    loc3 = ((loc1 < loc0) ? (1) : (0));
                    /* IL_2C: ldloc.3 */
                    /* IL_2D: brtrue.s IL_09*/
                    
                    if (loc3){
                        __pos_0__ = 0x9;
                        continue;
                    }
                    /* IL_2F: ldc.i4.m1 */
                    /* IL_30: stloc.2 */
                    loc2 = (-1|0);
                    case 0x33:
                    /* IL_33: ldloc.2 */
                    /* IL_34: ret */
                    return loc2;
                }
            }
        };
    };;
    /* static Int32 GetLastIndex[T](T[], System.Int32, System.Int32, System.Predicate`1[T])*/
    asm.x6000131 = function (T)
    {
        return function GetLastIndex(arg0,arg1,arg2,arg3)
        {
            var st_03;
            var st_04;
            var st_05;
            var st_06;
            var st_07;
            var st_08;
            var st_09;
            var st_0A;
            var st_0B;
            var st_0C;
            var st_0D;
            var __pos_0__;
            var loc0;
            var loc2;
            var loc1;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.1 */
                    /* IL_02: ldarg.2 */
                    /* IL_03: add */
                    /* IL_04: stloc.0 */
                    loc0 = (arg1 + arg2) | (0|0);
                    /* IL_05: br.s IL_25*/
                    __pos_0__ = 0x25;
                    continue;
                    case 0x7:
                    /* IL_07: nop */
                    
                    /* IL_08: ldarg.3 */
                    st_09 = arg3;
                    /* IL_09: ldarg.0 */
                    st_07 = arg0;
                    /* IL_0A: ldloc.0 */
                    st_03 = loc0;
                    /* IL_0B: ldc.i4.1 */
                    st_04 = (1|0);
                    /* IL_0C: sub */
                    st_05 = ((st_03 - st_04) | (0|0));
                    /* IL_0D: dup */
                    st_08 = (st_06 = st_05);
                    /* IL_0E: stloc.0 */
                    loc0 = st_06;
                    /* IL_0F: ldelem T*/
                    st_0A = (st_07.jsarr)[st_08];
                    /* IL_14: callvirt Boolean Invoke(T)*/
                    st_0B = (st_09._methodPtr.apply)(null,((st_09._target) ? ([
                        st_09._target,
                        st_0A
                    ]) : ([
                        st_0A
                    ])));
                    /* IL_19: ldc.i4.0 */
                    st_0C = (0|0);
                    /* IL_1B: ceq */
                    st_0D = ((st_0B === st_0C) ? (1) : (0));
                    /* IL_1C: stloc.2 */
                    loc2 = st_0D;
                    /* IL_1D: ldloc.2 */
                    /* IL_1E: brtrue.s IL_24*/
                    
                    if (loc2){
                        __pos_0__ = 0x24;
                        continue;
                    }
                    /* IL_20: ldloc.0 */
                    /* IL_21: stloc.1 */
                    loc1 = loc0;
                    /* IL_22: br.s IL_34*/
                    __pos_0__ = 0x34;
                    continue;
                    case 0x24:
                    /* IL_24: nop */
                    
                    case 0x25:
                    /* IL_25: ldloc.0 */
                    /* IL_26: ldarg.1 */
                    /* IL_28: ceq */
                    /* IL_29: ldc.i4.0 */
                    /* IL_2B: ceq */
                    /* IL_2C: stloc.2 */
                    loc2 = ((((loc0 === arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_2D: ldloc.2 */
                    /* IL_2E: brtrue.s IL_07*/
                    
                    if (loc2){
                        __pos_0__ = 0x7;
                        continue;
                    }
                    /* IL_30: ldc.i4.m1 */
                    /* IL_31: stloc.1 */
                    loc1 = (-1|0);
                    case 0x34:
                    /* IL_34: ldloc.1 */
                    /* IL_35: ret */
                    return loc1;
                }
            }
        };
    };;
    /* static Int32 LastIndexOf[T](T[], T, System.Int32, System.Int32)*/
    asm.x6000132_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Collections.IEqualityComparer"])().init)();
            asm.x6000132 = asm.x6000132_;
        };
    };;
    asm.x6000132 = function (T)
    {
        return function (arg0,arg1,arg2,arg3)
        {
            ((asm.x6000132_init)(T).apply)(this,arguments);
            return ((asm.x6000132_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000132_ = function (T)
    {
        return function LastIndexOf(arg0,arg1,arg2,arg3)
        {
            var t0;
            var t1;
            var st_1E;
            var __pos_0__;
            var loc3;
            var loc0;
            var loc1;
            var loc2;
            t0 = T;
            t1 = ((asm0)["System.Collections.IEqualityComparer"])();
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.0 */
                    /* IL_02: ldnull */
                    /* IL_04: ceq */
                    /* IL_05: ldc.i4.0 */
                    /* IL_07: ceq */
                    /* IL_08: stloc.3 */
                    loc3 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_09: ldloc.3 */
                    /* IL_0A: brtrue.s IL_17*/
                    
                    if (loc3){
                        __pos_0__ = 0x17;
                        continue;
                    }
                    /* IL_0C: ldstr System.ArgumentNullException*/
                    /* IL_11: call Exception GetException(System.String)*/
                    /* IL_16: throw */
                    throw (asm0.x600012e)(new_string("System.ArgumentNullException"));
                    case 0x17:
                    /* IL_17: ldarg.3 */
                    /* IL_18: ldc.i4.0 */
                    /* IL_19: blt.s IL_40*/
                    
                    if (arg3 < (0|0)){
                        __pos_0__ = 0x40;
                        continue;
                    }
                    /* IL_1B: ldarg.2 */
                    /* IL_1C: ldarg.0 */
                    /* IL_1D: ldc.i4.0 */
                    /* IL_1E: callvirt Int32 GetLowerBound(System.Int32)*/
                    /* IL_23: blt.s IL_40*/
                    
                    if (arg2 < (asm0.x600013f)(arg0,(0|0))){
                        __pos_0__ = 0x40;
                        continue;
                    }
                    /* IL_25: ldarg.2 */
                    /* IL_26: ldarg.0 */
                    /* IL_27: ldlen */
                    /* IL_28: conv.i4 */
                    /* IL_29: ldc.i4.1 */
                    /* IL_2A: sub */
                    /* IL_2B: bgt.s IL_40*/
                    
                    if (arg2 > (((arg0.jsarr.length | (0|0)) - (1|0)) | (0|0))){
                        __pos_0__ = 0x40;
                        continue;
                    }
                    /* IL_2D: ldarg.2 */
                    /* IL_2E: ldarg.3 */
                    /* IL_2F: sub */
                    /* IL_30: ldc.i4.1 */
                    /* IL_31: add */
                    /* IL_32: ldarg.0 */
                    /* IL_33: ldc.i4.0 */
                    /* IL_34: callvirt Int32 GetLowerBound(System.Int32)*/
                    /* IL_3A: clt */
                    /* IL_3B: ldc.i4.0 */
                    /* IL_3D: ceq */
                    st_1E = ((((((((arg2 - arg3) | (0|0)) + (1|0)) | (0|0)) < (asm0.x600013f)(arg0,(0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_3E: br.s IL_41*/
                    __pos_0__ = 0x41;
                    continue;
                    case 0x40:
                    /* IL_40: ldc.i4.0 */
                    st_1E = (0|0);
                    case 0x41:
                    /* IL_41: nop */
                    
                    /* IL_42: stloc.3 */
                    loc3 = st_1E;
                    /* IL_43: ldloc.3 */
                    /* IL_44: brtrue.s IL_51*/
                    
                    if (loc3){
                        __pos_0__ = 0x51;
                        continue;
                    }
                    /* IL_46: ldstr System.ArgumentOutOfRangeException*/
                    /* IL_4B: call Exception GetException(System.String)*/
                    /* IL_50: throw */
                    throw (asm0.x600012e)(new_string("System.ArgumentOutOfRangeException"));
                    case 0x51:
                    /* IL_51: ldtoken T*/
                    /* IL_56: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    /* IL_5B: call IEqualityComparer GetDefaultEqualityComparer(System.Type)*/
                    /* IL_60: stloc.0 */
                    loc0 = asm1.GetDefaultEqualityComparer((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)).ctor)();
                    /* IL_61: ldarg.2 */
                    /* IL_62: stloc.1 */
                    loc1 = arg2;
                    /* IL_63: br.s IL_8E*/
                    __pos_0__ = 0x8E;
                    continue;
                    case 0x65:
                    /* IL_65: nop */
                    
                    /* IL_66: ldloc.0 */
                    /* IL_67: ldarg.0 */
                    /* IL_68: ldloc.1 */
                    /* IL_69: ldelem T*/
                    /* IL_6E: box T*/
                    /* IL_73: ldarg.1 */
                    /* IL_74: box T*/
                    /* IL_79: callvirt Boolean Equals(System.Object, System.Object)*/
                    /* IL_7E: ldc.i4.0 */
                    /* IL_80: ceq */
                    /* IL_81: stloc.3 */
                    loc3 = (((((loc0.ifacemap)[t1].x6000030)())(convert_box_to_pointer_as_needed(loc0),box((arg0.jsarr)[loc1],t0),box(arg1,t0)) === (0|0)) ? (1) : (0));
                    /* IL_82: ldloc.3 */
                    /* IL_83: brtrue.s IL_89*/
                    
                    if (loc3){
                        __pos_0__ = 0x89;
                        continue;
                    }
                    /* IL_85: ldloc.1 */
                    /* IL_86: stloc.2 */
                    loc2 = loc1;
                    /* IL_87: br.s IL_A1*/
                    __pos_0__ = 0xA1;
                    continue;
                    case 0x89:
                    /* IL_89: nop */
                    
                    /* IL_8A: ldloc.1 */
                    /* IL_8B: ldc.i4.1 */
                    /* IL_8C: sub */
                    /* IL_8D: stloc.1 */
                    loc1 = (loc1 - (1|0)) | (0|0);
                    case 0x8E:
                    /* IL_8E: ldloc.1 */
                    /* IL_8F: ldarg.2 */
                    /* IL_90: ldarg.3 */
                    /* IL_91: sub */
                    /* IL_92: ldc.i4.1 */
                    /* IL_93: add */
                    /* IL_95: clt */
                    /* IL_96: ldc.i4.0 */
                    /* IL_98: ceq */
                    /* IL_99: stloc.3 */
                    loc3 = ((((loc1 < ((((arg2 - arg3) | (0|0)) + (1|0)) | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_9A: ldloc.3 */
                    /* IL_9B: brtrue.s IL_65*/
                    
                    if (loc3){
                        __pos_0__ = 0x65;
                        continue;
                    }
                    /* IL_9D: ldc.i4.m1 */
                    /* IL_9E: stloc.2 */
                    loc2 = (-1|0);
                    case 0xA1:
                    /* IL_A1: ldloc.2 */
                    /* IL_A2: ret */
                    return loc2;
                }
            }
        };
    };
    /* static Void Sort[T](T[], System.Object)*/
    asm.x6000133 =  function (T) {
            return function Sort(array, comparison) {
                function swap(items, firstIndex, secondIndex){
                    var temp = items[firstIndex];
                    items[firstIndex] = items[secondIndex];
                    items[secondIndex] = temp;
                }

                function partition(items, left, right) {

                    var pivot   = items[Math.floor((right + left) / 2)],
                        i       = left,
                        j       = right;

                    while (i <= j) {
                        
                        while (comparison(items[i], pivot) < 0)
                            i++;
                        while (comparison(items[j], pivot) > 0)
                            j--;

                        if (i <= j) {
                            swap(items, i, j);
                            i++;
                            j--;
                        }
                    }

                    return i;
                }

                function quickSort(items, left, right) {
                    var index;

                    if (items.length > 1) {
                        index = partition(items, left, right);

                        if (left < index - 1)
                            quickSort(items, left, index - 1);

                        if (index < right)
                            quickSort(items, index, right);
                    }

                    return items;
                }

                quickSort(array.jsarr, 0, array.jsarr.length - 1);
            } }
            ;;
    /* static Void Sort[T](T[], System.Int32, System.Int32)*/
    asm.x6000134_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Collections.Generic.IComparer`1"])(T).init)();
            (((asm0)["System.InvalidOperationException"])().init)();
        };
    };;
    asm.x6000134 = function (T)
    {
        return function (arg0,arg1,arg2)
        {
            ((asm.x6000134_init)(T).apply)(this,arguments);
            return ((asm.x6000134_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000134_ = function (T)
    {
        return function Sort(arg0,arg1,arg2)
        {
            var t0;
            var t1;
            var t2;
            var __pos_0__;
            var loc0;
            var __error_handled_1__;
            var loc1;
            t0 = T;
            t1 = ((asm0)["System.Collections.Generic.IComparer`1"])(T);
            t2 = ((asm0)["System.InvalidOperationException"])();
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    
                    try {
                        /* IL_01: nop */
                        
                        /* IL_02: ldtoken T*/
                        /* IL_07: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                        /* IL_0C: call IComparer GetComparer(System.Type)*/
                        /* IL_11: call IComparer`1 UnsafeCast[System.Collections.Generic.IComparer`1[T]](System.Object)*/
                        /* IL_16: stloc.0 */
                        loc0 = asm1.GetDefaultComparer((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)).ctor)();
                        /* IL_17: ldarg.0 */
                        /* IL_18: ldc.i4.0 */
                        /* IL_19: ldarg.2 */
                        /* IL_1A: ldloc.0 */
                        /* IL_1B: call Void Sort[T](T[], System.Int32, System.Int32, System.Collections.Generic.IComparer`1[T])*/
                        ((asm0.x6000136)(T))(arg0,(0|0),arg2,loc0);
                        /* IL_20: nop */
                        
                        /* IL_21: nop */
                        
                        /* IL_22: leave.s IL_32*/
                        __pos_1__ = -1;
                        __pos_0__ = 0x32;
                    }
                    
                    catch (__error__){
                        __error_handled_1__ = false;
                        
                        if ((!(__error_handled_1__)) && (__error__ instanceof ((asm0)["System.Exception"])())){
                            st_08 = __error__;
                            __error_handled_1__ = true;
                            /* IL_24: stloc.1 */
                            loc1 = st_08;
                            /* IL_25: nop */
                            
                            /* IL_26: ldstr Failed to sort the array. */
                            /* IL_2B: ldloc.1 */
                            /* IL_2C: newobj Void .ctor(System.String, System.Exception)*/
                            /* IL_31: throw */
                            throw newobj(t2,asm0.x60000f8,[
                                null,
                                new_string("Failed to sort the array. "),
                                loc1
                            ]);
                        }
                        
                        if ((!(__error_handled_1__))){
                            throw __error__;
                        }
                    }
                    case 0x32:
                    /* IL_32: nop */
                    
                    /* IL_33: ret */
                    return ;
                }
            }
        };
    };
    /* static Void SortImpl[T](T[], System.Int32, System.Comparison`1[T])*/
    asm.x6000135 = function (T)
    {
        return function SortImpl(arg0,arg1,arg2)
        {
            var t0;
            var __pos_0__;
            var loc0;
            var loc1;
            t0 = T;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.0 */
                    /* IL_02: ldlen */
                    /* IL_03: conv.i4 */
                    /* IL_04: stloc.0 */
                    loc0 = arg0.jsarr.length | (0|0);
                    /* IL_05: ldarg.1 */
                    /* IL_06: ldloc.0 */
                    /* IL_08: clt */
                    /* IL_09: ldc.i4.0 */
                    /* IL_0B: ceq */
                    /* IL_0C: stloc.1 */
                    loc1 = ((((arg1 < loc0) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_0D: ldloc.1 */
                    /* IL_0E: brtrue.s IL_1F*/
                    
                    if (loc1){
                        __pos_0__ = 0x1F;
                        continue;
                    }
                    /* IL_10: nop */
                    
                    /* IL_11: ldarg.0 */
                    /* IL_12: ldarg.1 */
                    /* IL_13: ldarg.0 */
                    /* IL_14: ldlen */
                    /* IL_15: conv.i4 */
                    /* IL_16: ldarg.1 */
                    /* IL_17: sub */
                    /* IL_18: call Void Splice(System.Object, System.Int32, System.Int32)*/
                    (asm0.x6000138)(arg0,arg1,((arg0.jsarr.length | (0|0)) - arg1) | (0|0));
                    /* IL_1D: nop */
                    
                    /* IL_1E: nop */
                    
                    case 0x1F:
                    /* IL_1F: ldarg.0 */
                    /* IL_20: ldarg.2 */
                    /* IL_21: call Object GetJsFunction(System.Delegate)*/
                    /* IL_26: call Void Sort[T](T[], System.Object)*/
                    ((asm0.x6000133)(T))(arg0,(asm0.x6000079)(arg2));
                    /* IL_2B: nop */
                    
                    /* IL_2C: ret */
                    return ;
                }
            }
        };
    };;
    /* static Void Sort[T](T[], System.Int32, System.Int32, System.Collections.Generic.IComparer`1[T])*/
    asm.x6000136_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Array+<>c__DisplayClass1`1"])(T).init)();
            (((asm0)["System.NotImplementedException"])().init)();
            (((asm0)["System.Comparison`1"])(T).init)();
        };
    };;
    asm.x6000136 = function (T)
    {
        return function (arg0,arg1,arg2,arg3)
        {
            ((asm.x6000136_init)(T).apply)(this,arguments);
            return ((asm.x6000136_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000136_ = function (T)
    {
        return function Sort(arg0,arg1,arg2,arg3)
        {
            var t0;
            var t1;
            var t2;
            var t3;
            var __pos_0__;
            var loc0;
            var loc1;
            t0 = T;
            t1 = ((asm0)["System.Array+<>c__DisplayClass1`1"])(T);
            t2 = ((asm0)["System.NotImplementedException"])();
            t3 = ((asm0)["System.Comparison`1"])(T);
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: newobj Void .ctor()*/
                    /* IL_05: stloc.0 */
                    loc0 = newobj(t1,asm0.x60001a1,[
                        null
                    ]);
                    /* IL_06: ldloc.0 */
                    /* IL_07: ldarg.3 */
                    /* IL_08: stfld IKVM.Reflection.GenericFieldInstance*/
                    loc0.comparer = arg3;
                    /* IL_0D: nop */
                    
                    /* IL_0E: ldarg.1 */
                    /* IL_0F: ldc.i4.0 */
                    /* IL_11: ceq */
                    /* IL_12: stloc.1 */
                    loc1 = ((arg1 === (0|0)) ? (1) : (0));
                    /* IL_13: ldloc.1 */
                    /* IL_14: brtrue.s IL_1C*/
                    
                    if (loc1){
                        __pos_0__ = 0x1C;
                        continue;
                    }
                    /* IL_16: newobj Void .ctor()*/
                    /* IL_1B: throw */
                    throw newobj(t2,asm0.x60000ea,[
                        null
                    ]);
                    case 0x1C:
                    /* IL_1C: ldarg.0 */
                    /* IL_1D: ldarg.2 */
                    /* IL_1E: ldloc.0 */
                    /* IL_20: ldftn Int32 <Sort>b__0(T, T)*/
                    /* IL_25: newobj Void .ctor(System.Object, System.IntPtr)*/
                    /* IL_2A: call Void SortImpl[T](T[], System.Int32, System.Comparison`1[T])*/
                    ((asm0.x6000135)(T))(arg0,arg2,newobj(t3,asm0.x600007f,[
                        null,
                        loc0,
                        asm0.x60001a2
                    ]));
                    /* IL_2F: nop */
                    
                    /* IL_30: nop */
                    
                    /* IL_31: ret */
                    return ;
                }
            }
        };
    };
    /* static Void Combine(System.Object, System.Object)*/
    asm.x6000137 = 
            function (a, b) {
                a.jsarr = a.jsarr.concat(b);
            }
            ;;
    /* static Void Splice(System.Object, System.Int32, System.Int32)*/
    asm.x6000138 = 
            function (array, index, howMany) {
                    array.jsarr.splice(index, howMany);
            }
            ;;
    /* static Void Reverse[T](T[], System.Int32, System.Int32)*/
    asm.x600013a = function (T)
    {
        return function Reverse(arg0,arg1,arg2)
        {
            var t0;
            var st_07;
            var __pos_0__;
            var loc4;
            var loc0;
            var loc1;
            var loc2;
            var loc3;
            t0 = T;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.1 */
                    /* IL_02: brtrue.s IL_0F*/
                    
                    if (arg1){
                        __pos_0__ = 0xF;
                        continue;
                    }
                    /* IL_04: ldarg.2 */
                    /* IL_05: ldarg.0 */
                    /* IL_06: ldlen */
                    /* IL_07: conv.i4 */
                    /* IL_09: clt */
                    /* IL_0A: ldc.i4.0 */
                    /* IL_0C: ceq */
                    st_07 = ((((arg2 < (arg0.jsarr.length | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_0D: br.s IL_10*/
                    __pos_0__ = 0x10;
                    continue;
                    case 0xF:
                    /* IL_0F: ldc.i4.0 */
                    st_07 = (0|0);
                    case 0x10:
                    /* IL_10: nop */
                    
                    /* IL_11: stloc.s 4*/
                    loc4 = st_07;
                    /* IL_13: ldloc.s 4*/
                    /* IL_15: brtrue.s IL_5B*/
                    
                    if (loc4){
                        __pos_0__ = 0x5B;
                        continue;
                    }
                    /* IL_17: nop */
                    
                    /* IL_18: ldarg.2 */
                    /* IL_19: ldc.i4.2 */
                    /* IL_1A: div */
                    /* IL_1B: stloc.0 */
                    loc0 = (arg2 / (2|0)) | (0|0);
                    /* IL_1C: ldarg.1 */
                    /* IL_1D: ldarg.2 */
                    /* IL_1E: add */
                    /* IL_1F: ldc.i4.1 */
                    /* IL_20: sub */
                    /* IL_21: stloc.1 */
                    loc1 = (((arg1 + arg2) | (0|0)) - (1|0)) | (0|0);
                    /* IL_22: ldc.i4.0 */
                    /* IL_23: stloc.2 */
                    loc2 = (0|0);
                    /* IL_24: br.s IL_4E*/
                    __pos_0__ = 0x4E;
                    continue;
                    case 0x26:
                    /* IL_26: nop */
                    
                    /* IL_27: ldarg.0 */
                    /* IL_28: ldloc.2 */
                    /* IL_29: ldelem T*/
                    /* IL_2E: stloc.3 */
                    loc3 = (arg0.jsarr)[loc2];
                    /* IL_2F: ldarg.0 */
                    /* IL_30: ldloc.2 */
                    /* IL_31: ldarg.0 */
                    /* IL_32: ldloc.1 */
                    /* IL_33: ldloc.2 */
                    /* IL_34: sub */
                    /* IL_35: ldelem T*/
                    /* IL_3A: stelem T*/
                    (arg0.jsarr)[loc2] = (arg0.jsarr)[(loc1 - loc2) | (0|0)];
                    /* IL_3F: ldarg.0 */
                    /* IL_40: ldloc.1 */
                    /* IL_41: ldloc.2 */
                    /* IL_42: sub */
                    /* IL_43: ldloc.3 */
                    /* IL_44: stelem T*/
                    (arg0.jsarr)[(loc1 - loc2) | (0|0)] = loc3;
                    /* IL_49: nop */
                    
                    /* IL_4A: ldloc.2 */
                    /* IL_4B: ldc.i4.1 */
                    /* IL_4C: add */
                    /* IL_4D: stloc.2 */
                    loc2 = (loc2 + (1|0)) | (0|0);
                    case 0x4E:
                    /* IL_4E: ldloc.2 */
                    /* IL_4F: ldloc.0 */
                    /* IL_51: clt */
                    /* IL_52: stloc.s 4*/
                    loc4 = ((loc2 < loc0) ? (1) : (0));
                    /* IL_54: ldloc.s 4*/
                    /* IL_56: brtrue.s IL_26*/
                    
                    if (loc4){
                        __pos_0__ = 0x26;
                        continue;
                    }
                    /* IL_58: nop */
                    
                    /* IL_59: br.s IL_64*/
                    __pos_0__ = 0x64;
                    continue;
                    case 0x5B:
                    /* IL_5B: nop */
                    
                    /* IL_5C: ldarg.0 */
                    /* IL_5D: call Void Reverse[T](T[])*/
                    (Array.prototype.reverse.apply(arg0.jsarr));
                    /* IL_62: nop */
                    
                    /* IL_63: nop */
                    
                    case 0x64:
                    /* IL_64: ret */
                    return ;
                }
            }
        };
    };;
    /* static Void Copy[T](T[], T[], System.Int32)*/
    asm.x600013e = function (T)
    {
        return function Copy(arg0,arg1,arg2)
        {
            var __pos_0__;
            var loc0;
            var loc1;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldc.i4.0 */
                    /* IL_02: stloc.0 */
                    loc0 = (0|0);
                    /* IL_03: br.s IL_19*/
                    __pos_0__ = 0x19;
                    continue;
                    case 0x5:
                    /* IL_05: nop */
                    
                    /* IL_06: ldarg.1 */
                    /* IL_07: ldloc.0 */
                    /* IL_08: ldarg.0 */
                    /* IL_09: ldloc.0 */
                    /* IL_0A: ldelem T*/
                    /* IL_0F: stelem T*/
                    (arg1.jsarr)[loc0] = (arg0.jsarr)[loc0];
                    /* IL_14: nop */
                    
                    /* IL_15: ldloc.0 */
                    /* IL_16: ldc.i4.1 */
                    /* IL_17: add */
                    /* IL_18: stloc.0 */
                    loc0 = (loc0 + (1|0)) | (0|0);
                    case 0x19:
                    /* IL_19: ldloc.0 */
                    /* IL_1A: ldarg.2 */
                    /* IL_1C: clt */
                    /* IL_1D: stloc.1 */
                    loc1 = ((loc0 < arg2) ? (1) : (0));
                    /* IL_1E: ldloc.1 */
                    /* IL_1F: brtrue.s IL_05*/
                    
                    if (loc1){
                        __pos_0__ = 0x5;
                        continue;
                    }
                    /* IL_21: ret */
                    return ;
                }
            }
        };
    };;
    /* Int32 GetLowerBound(System.Int32)*/
    asm.x600013f = function GetLowerBound(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.0 */
        /* IL_02: stloc.0 */
        loc0 = (0|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* Int32 get_Rank()*/
    asm.x6000140 = function get_Rank(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.1 */
        /* IL_02: stloc.0 */
        loc0 = (1|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* static Void Resize[T](T[]&, System.Int32)*/
    asm.x6000141_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Exception"])().init)();
            asm.x6000141 = asm.x6000141_;
        };
    };;
    asm.x6000141 = function (T)
    {
        return function (arg0,arg1)
        {
            ((asm.x6000141_init)(T).apply)(this,arguments);
            return ((asm.x6000141_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000141_ = function (T)
    {
        return function Resize(arg0,arg1)
        {
            var t0;
            var t1;
            var __pos_0__;
            var loc5;
            var loc0;
            var loc1;
            var loc2;
            var loc3;
            var loc4;
            t0 = ((asm0)["System.Exception"])();
            t1 = T;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.1 */
                    /* IL_02: ldc.i4.0 */
                    /* IL_04: clt */
                    /* IL_05: ldc.i4.0 */
                    /* IL_07: ceq */
                    /* IL_08: stloc.s 5*/
                    loc5 = ((((arg1 < (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_0A: ldloc.s 5*/
                    /* IL_0C: brtrue.s IL_19*/
                    
                    if (loc5){
                        __pos_0__ = 0x19;
                        continue;
                    }
                    /* IL_0E: ldstr Argument out of range*/
                    /* IL_13: newobj Void .ctor(System.String)*/
                    /* IL_18: throw */
                    throw newobj(t0,asm0.x600009e,[
                        null,
                        new_string("Argument out of range")
                    ]);
                    case 0x19:
                    /* IL_19: ldarg.0 */
                    /* IL_1A: ldind.ref */
                    /* IL_1B: ldnull */
                    /* IL_1D: ceq */
                    /* IL_1E: ldc.i4.0 */
                    /* IL_20: ceq */
                    /* IL_21: stloc.s 5*/
                    loc5 = (((((arg0.r)() === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_23: ldloc.s 5*/
                    /* IL_25: brtrue.s IL_32*/
                    
                    if (loc5){
                        __pos_0__ = 0x32;
                        continue;
                    }
                    /* IL_27: nop */
                    
                    /* IL_28: ldarg.0 */
                    /* IL_29: ldarg.1 */
                    /* IL_2A: newarr T*/
                    /* IL_2F: stind.ref */
                    (arg0.w)(new_array(t1,arg1));
                    /* IL_30: br.s IL_81*/
                    __pos_0__ = 0x81;
                    continue;
                    case 0x32:
                    /* IL_32: ldarg.0 */
                    /* IL_33: ldind.ref */
                    /* IL_34: stloc.0 */
                    loc0 = (arg0.r)();
                    /* IL_35: ldloc.0 */
                    /* IL_36: ldlen */
                    /* IL_37: conv.i4 */
                    /* IL_38: stloc.1 */
                    loc1 = loc0.jsarr.length | (0|0);
                    /* IL_39: ldloc.1 */
                    /* IL_3A: ldarg.1 */
                    /* IL_3C: ceq */
                    /* IL_3D: ldc.i4.0 */
                    /* IL_3F: ceq */
                    /* IL_40: stloc.s 5*/
                    loc5 = ((((loc1 === arg1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_42: ldloc.s 5*/
                    /* IL_44: brtrue.s IL_48*/
                    
                    if (loc5){
                        __pos_0__ = 0x48;
                        continue;
                    }
                    /* IL_46: br.s IL_81*/
                    __pos_0__ = 0x81;
                    continue;
                    case 0x48:
                    /* IL_48: ldarg.1 */
                    /* IL_49: newarr T*/
                    /* IL_4E: stloc.2 */
                    loc2 = new_array(t1,arg1);
                    /* IL_4F: ldarg.1 */
                    /* IL_50: ldloc.1 */
                    /* IL_51: call Int32 Min(System.Int32, System.Int32)*/
                    /* IL_56: stloc.3 */
                    loc3 = Math.min(arg1, loc1);
                    /* IL_57: ldc.i4.0 */
                    /* IL_58: stloc.s 4*/
                    loc4 = (0|0);
                    /* IL_5A: br.s IL_73*/
                    __pos_0__ = 0x73;
                    continue;
                    case 0x5C:
                    /* IL_5C: ldloc.2 */
                    /* IL_5D: ldloc.s 4*/
                    /* IL_5F: ldloc.0 */
                    /* IL_60: ldloc.s 4*/
                    /* IL_62: call T UnsafeLoad[T](T[], System.Int32)*/
                    /* IL_67: call T UnsafeStore[T](T[], System.Int32, T)*/
                    /* IL_6C: pop */
                    (loc2.jsarr[loc4] = (loc0.jsarr[loc4]));
                    /* IL_6D: ldloc.s 4*/
                    /* IL_6F: ldc.i4.1 */
                    /* IL_70: add */
                    /* IL_71: stloc.s 4*/
                    loc4 = (loc4 + (1|0)) | (0|0);
                    case 0x73:
                    /* IL_73: ldloc.s 4*/
                    /* IL_75: ldloc.3 */
                    /* IL_77: clt */
                    /* IL_78: stloc.s 5*/
                    loc5 = ((loc4 < loc3) ? (1) : (0));
                    /* IL_7A: ldloc.s 5*/
                    /* IL_7C: brtrue.s IL_5C*/
                    
                    if (loc5){
                        __pos_0__ = 0x5C;
                        continue;
                    }
                    /* IL_7E: ldarg.0 */
                    /* IL_7F: ldloc.2 */
                    /* IL_80: stind.ref */
                    (arg0.w)(loc2);
                    case 0x81:
                    /* IL_81: ret */
                    return ;
                }
            }
        };
    };
    /* static Int32 BinarySearch[T](T[], System.Int32, System.Int32, T)*/
    asm.x6000144 = function (T)
    {
        return function BinarySearch(arg0,arg1,arg2,arg3)
        {
            var t0;
            var loc0;
            t0 = T;
            /* IL_00: nop */
            /* IL_01: ldarg.0 */
            /* IL_02: ldarg.1 */
            /* IL_03: ldarg.2 */
            /* IL_04: ldarg.3 */
            /* IL_05: ldnull */
            /* IL_06: call Int32 BinarySearch[T](T[], System.Int32, System.Int32, T, System.Collections.Generic.IComparer`1[T])*/
            /* IL_0B: stloc.0 */
            loc0 = ((asm0.x6000145)(T))(arg0,arg1,arg2,arg3,null);
            /* IL_0E: ldloc.0 */
            /* IL_0F: ret */
            return loc0;
        };
    };;
    /* static Int32 BinarySearch[T](T[], System.Int32, System.Int32, T, System.Collections.Generic.IComparer`1[T])*/
    asm.x6000145_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Exception"])().init)();
            (((asm0)["System.Collections.Generic.IComparer`1"])(T).init)();
        };
    };;
    asm.x6000145 = function (T)
    {
        return function (arg0,arg1,arg2,arg3,arg4)
        {
            ((asm.x6000145_init)(T).apply)(this,arguments);
            return ((asm.x6000145_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000145_ = function (T)
    {
        return function BinarySearch(arg0,arg1,arg2,arg3,arg4)
        {
            var t0;
            var t1;
            var t2;
            var __pos_0__;
            var loc6;
            var loc0;
            var loc1;
            var loc2;
            var __pos_1__;
            var loc3;
            var loc5;
            var __error_handled_1__;
            var loc4;
            t0 = ((asm0)["System.Exception"])();
            t1 = T;
            t2 = ((asm0)["System.Collections.Generic.IComparer`1"])(T);
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.0 */
                    /* IL_02: ldnull */
                    /* IL_04: ceq */
                    /* IL_05: ldc.i4.0 */
                    /* IL_07: ceq */
                    /* IL_08: stloc.s 6*/
                    loc6 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_0A: ldloc.s 6*/
                    /* IL_0C: brtrue.s IL_19*/
                    
                    if (loc6){
                        __pos_0__ = 0x19;
                        continue;
                    }
                    /* IL_0E: ldstr array*/
                    /* IL_13: newobj Void .ctor(System.String)*/
                    /* IL_18: throw */
                    throw newobj(t0,asm0.x600009e,[
                        null,
                        new_string("array")
                    ]);
                    case 0x19:
                    /* IL_19: ldarg.1 */
                    /* IL_1A: ldc.i4.0 */
                    /* IL_1C: clt */
                    /* IL_1D: ldc.i4.0 */
                    /* IL_1F: ceq */
                    /* IL_20: stloc.s 6*/
                    loc6 = ((((arg1 < (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_22: ldloc.s 6*/
                    /* IL_24: brtrue.s IL_31*/
                    
                    if (loc6){
                        __pos_0__ = 0x31;
                        continue;
                    }
                    /* IL_26: ldstr index is less than the lower bound of array.*/
                    /* IL_2B: newobj Void .ctor(System.String)*/
                    /* IL_30: throw */
                    throw newobj(t0,asm0.x600009e,[
                        null,
                        new_string("index is less than the lower bound of array.")
                    ]);
                    case 0x31:
                    /* IL_31: ldarg.2 */
                    /* IL_32: ldc.i4.0 */
                    /* IL_34: clt */
                    /* IL_35: ldc.i4.0 */
                    /* IL_37: ceq */
                    /* IL_38: stloc.s 6*/
                    loc6 = ((((arg2 < (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_3A: ldloc.s 6*/
                    /* IL_3C: brtrue.s IL_49*/
                    
                    if (loc6){
                        __pos_0__ = 0x49;
                        continue;
                    }
                    /* IL_3E: ldstr Value has to be >= 0.*/
                    /* IL_43: newobj Void .ctor(System.String)*/
                    /* IL_48: throw */
                    throw newobj(t0,asm0.x600009e,[
                        null,
                        new_string("Value has to be >= 0.")
                    ]);
                    case 0x49:
                    /* IL_49: ldarg.1 */
                    /* IL_4A: ldarg.0 */
                    /* IL_4B: ldlen */
                    /* IL_4C: conv.i4 */
                    /* IL_4D: ldarg.2 */
                    /* IL_4E: sub */
                    /* IL_50: cgt */
                    /* IL_51: ldc.i4.0 */
                    /* IL_53: ceq */
                    /* IL_54: stloc.s 6*/
                    loc6 = ((((arg1 > (((arg0.jsarr.length | (0|0)) - arg2) | (0|0))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_56: ldloc.s 6*/
                    /* IL_58: brtrue.s IL_65*/
                    
                    if (loc6){
                        __pos_0__ = 0x65;
                        continue;
                    }
                    /* IL_5A: ldstr index and length do not specify a valid range in array.*/
                    /* IL_5F: newobj Void .ctor(System.String)*/
                    /* IL_64: throw */
                    throw newobj(t0,asm0.x600009e,[
                        null,
                        new_string("index and length do not specify a valid range in array.")
                    ]);
                    case 0x65:
                    /* IL_65: ldarg.s 4*/
                    /* IL_67: ldnull */
                    /* IL_69: ceq */
                    /* IL_6A: ldc.i4.0 */
                    /* IL_6C: ceq */
                    /* IL_6D: stloc.s 6*/
                    loc6 = ((((arg4 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_6F: ldloc.s 6*/
                    /* IL_71: brtrue.s IL_89*/
                    
                    if (loc6){
                        __pos_0__ = 0x89;
                        continue;
                    }
                    /* IL_73: ldtoken T*/
                    /* IL_78: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                    /* IL_7D: call IComparer GetComparer(System.Type)*/
                    /* IL_82: call IComparer`1 UnsafeCast[System.Collections.Generic.IComparer`1[T]](System.Object)*/
                    /* IL_87: starg.s 4*/
                    arg4 = asm1.GetDefaultComparer((asm0.x60000ad)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t1)).ctor)();
                    case 0x89:
                    /* IL_89: ldarg.1 */
                    /* IL_8A: stloc.0 */
                    loc0 = arg1;
                    /* IL_8B: ldarg.1 */
                    /* IL_8C: ldarg.2 */
                    /* IL_8D: add */
                    /* IL_8E: ldc.i4.1 */
                    /* IL_8F: sub */
                    /* IL_90: stloc.1 */
                    loc1 = (((arg1 + arg2) | (0|0)) - (1|0)) | (0|0);
                    /* IL_91: ldc.i4.0 */
                    /* IL_92: stloc.2 */
                    loc2 = (0|0);
                    
                    try {
                        __pos_1__ = 0x0;
                        
                        while (__pos_1__ >= 0){
                            
                            switch (__pos_1__){
                                case 0x0:
                                /* IL_93: nop */
                                
                                /* IL_94: br.s IL_D9*/
                                __pos_1__ = 0xD9;
                                continue;
                                case 0x96:
                                /* IL_96: nop */
                                
                                /* IL_97: ldloc.0 */
                                /* IL_98: ldloc.1 */
                                /* IL_99: ldloc.0 */
                                /* IL_9A: sub */
                                /* IL_9B: ldc.i4.2 */
                                /* IL_9C: div */
                                /* IL_9D: add */
                                /* IL_9E: stloc.3 */
                                loc3 = (loc0 + ((((loc1 - loc0) | (0|0)) / (2|0)) | (0|0))) | (0|0);
                                /* IL_9F: ldarg.s 4*/
                                /* IL_A1: ldarg.0 */
                                /* IL_A2: ldloc.3 */
                                /* IL_A3: ldelem T*/
                                /* IL_A8: ldarg.3 */
                                /* IL_A9: callvirt Int32 Compare(T, T)*/
                                /* IL_AE: stloc.2 */
                                loc2 = ((((arg4.ifacemap)[t2])[t1].x600002e)())(convert_box_to_pointer_as_needed(arg4),(arg0.jsarr)[loc3],arg3);
                                /* IL_AF: ldloc.2 */
                                /* IL_B0: ldc.i4.0 */
                                /* IL_B2: ceq */
                                /* IL_B3: ldc.i4.0 */
                                /* IL_B5: ceq */
                                /* IL_B6: stloc.s 6*/
                                loc6 = ((((loc2 === (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                                /* IL_B8: ldloc.s 6*/
                                /* IL_BA: brtrue.s IL_C1*/
                                
                                if (loc6){
                                    __pos_1__ = 0xC1;
                                    continue;
                                }
                                /* IL_BC: ldloc.3 */
                                /* IL_BD: stloc.s 5*/
                                loc5 = loc3;
                                /* IL_BF: leave.s IL_100*/
                                __pos_1__ = -1;
                                __pos_0__ = 0x100;
                                break;
                                case 0xC1:
                                /* IL_C1: ldloc.2 */
                                /* IL_C2: ldc.i4.0 */
                                /* IL_C4: cgt */
                                /* IL_C5: ldc.i4.0 */
                                /* IL_C7: ceq */
                                /* IL_C8: stloc.s 6*/
                                loc6 = ((((loc2 > (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                                /* IL_CA: ldloc.s 6*/
                                /* IL_CC: brtrue.s IL_D4*/
                                
                                if (loc6){
                                    __pos_1__ = 0xD4;
                                    continue;
                                }
                                /* IL_CE: ldloc.3 */
                                /* IL_CF: ldc.i4.1 */
                                /* IL_D0: sub */
                                /* IL_D1: stloc.1 */
                                loc1 = (loc3 - (1|0)) | (0|0);
                                /* IL_D2: br.s IL_D8*/
                                __pos_1__ = 0xD8;
                                continue;
                                case 0xD4:
                                /* IL_D4: ldloc.3 */
                                /* IL_D5: ldc.i4.1 */
                                /* IL_D6: add */
                                /* IL_D7: stloc.0 */
                                loc0 = (loc3 + (1|0)) | (0|0);
                                case 0xD8:
                                /* IL_D8: nop */
                                
                                case 0xD9:
                                /* IL_D9: ldloc.0 */
                                /* IL_DA: ldloc.1 */
                                /* IL_DC: cgt */
                                /* IL_DD: ldc.i4.0 */
                                /* IL_DF: ceq */
                                /* IL_E0: stloc.s 6*/
                                loc6 = ((((loc0 > loc1) ? (1) : (0)) === (0|0)) ? (1) : (0));
                                /* IL_E2: ldloc.s 6*/
                                /* IL_E4: brtrue.s IL_96*/
                                
                                if (loc6){
                                    __pos_1__ = 0x96;
                                    continue;
                                }
                                /* IL_E6: nop */
                                
                                /* IL_E7: leave.s IL_F9*/
                                __pos_1__ = -1;
                                __pos_0__ = 0xF9;
                                break;
                            }
                        }
                        break;
                    }
                    
                    catch (__error__){
                        __error_handled_1__ = false;
                        
                        if ((!(__error_handled_1__)) && (__error__ instanceof ((asm0)["System.Exception"])())){
                            st_5B = __error__;
                            __error_handled_1__ = true;
                            /* IL_E9: stloc.s 4*/
                            loc4 = st_5B;
                            /* IL_EB: nop */
                            
                            /* IL_EC: ldstr Comparer threw an exception.*/
                            /* IL_F1: ldloc.s 4*/
                            /* IL_F3: newobj Void .ctor(System.String, System.Exception)*/
                            /* IL_F8: throw */
                            throw newobj(t0,asm0.x600009f,[
                                null,
                                new_string("Comparer threw an exception."),
                                loc4
                            ]);
                        }
                        
                        if ((!(__error_handled_1__))){
                            throw __error__;
                        }
                    }
                    case 0xF9:
                    /* IL_F9: nop */
                    
                    /* IL_FA: ldloc.0 */
                    /* IL_FB: not */
                    /* IL_FC: stloc.s 5*/
                    loc5 = (~(loc0));
                    case 0x100:
                    /* IL_100: nop */
                    
                    /* IL_101: ldloc.s 5*/
                    /* IL_103: ret */
                    return loc5;
                }
            }
        };
    };
    /* Void .ctor()*/
    asm.x6000146 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* IEnumerator`1 GetEnumerator()*/
    asm.x6000148_init = function ()
    {
        (((asm0)["System.Array`1+ArrayEnumerator"])((((arguments)[0].constructor.GenericArguments)["asm0.t2000054"])[0]).init)();
        asm.x6000148 = asm.x6000148_;
    };;
    asm.x6000148 = function (arg0)
    {
        (asm.x6000148_init.apply)(this,arguments);
        return (asm.x6000148_.apply)(this,arguments);
    };;
    asm.x6000148_ = function GetEnumerator(arg0)
    {
        var t0;
        var t1;
        var loc0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm0.t2000054"])[0];
        t1 = ((asm0)["System.Array`1+ArrayEnumerator"])((((arguments)[0].constructor.GenericArguments)["asm0.t2000054"])[0]);
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: newobj Void .ctor(System.Array`1[T])*/
        /* IL_07: stloc.0 */
        loc0 = newobj(t1,asm0.x6000152,[
            null,
            arg0
        ]);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };
    /* IEnumerator GetEnumeratorImpl()*/
    asm.x6000149 = function GetEnumeratorImpl(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call IEnumerator`1 GetEnumerator()*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000148)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Int32 System.Collections.Generic.ICollection<T>.get_Count()*/
    asm.x600014a = function System_Collections_Generic_ICollection_T__get_Count(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 get_Length()*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000125)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Boolean System.Collections.Generic.ICollection<T>.get_IsReadOnly()*/
    asm.x600014b = function System_Collections_Generic_ICollection_T__get_IsReadOnly(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.1 */
        /* IL_02: stloc.0 */
        loc0 = (1|0);
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* Void System.Collections.Generic.ICollection<T>.Add(T)*/
    asm.x600014c_init = function ()
    {
        (((asm0)["System.NotSupportedException"])().init)();
        asm.x600014c = asm.x600014c_;
    };;
    asm.x600014c = function (arg0,arg1)
    {
        (asm.x600014c_init.apply)(this,arguments);
        return (asm.x600014c_.apply)(this,arguments);
    };;
    asm.x600014c_ = function System_Collections_Generic_ICollection_T__Add(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.NotSupportedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x60000eb,[
            null
        ]);
    };
    /* Void System.Collections.Generic.ICollection<T>.Clear()*/
    asm.x600014d_init = function ()
    {
        (((asm0)["System.NotSupportedException"])().init)();
        asm.x600014d = asm.x600014d_;
    };;
    asm.x600014d = function (arg0)
    {
        (asm.x600014d_init.apply)(this,arguments);
        return (asm.x600014d_.apply)(this,arguments);
    };;
    asm.x600014d_ = function System_Collections_Generic_ICollection_T__Clear(arg0)
    {
        var t0;
        t0 = ((asm0)["System.NotSupportedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x60000eb,[
            null
        ]);
    };
    /* Boolean System.Collections.Generic.ICollection<T>.Contains(T)*/
    asm.x600014e_init = function ()
    {
        (((asm0)["System.Array`1"])((((arguments)[0].constructor.GenericArguments)["asm0.t2000054"])[0]).init)();
        asm.x600014e = asm.x600014e_;
    };;
    asm.x600014e = function (arg0,arg1)
    {
        (asm.x600014e_init.apply)(this,arguments);
        return (asm.x600014e_.apply)(this,arguments);
    };;
    asm.x600014e_ = function System_Collections_Generic_ICollection_T__Contains(arg0,arg1)
    {
        var t0;
        var t1;
        var loc0;
        t0 = ((asm0)["System.Array`1"])((((arguments)[0].constructor.GenericArguments)["asm0.t2000054"])[0]);
        t1 = (((arguments)[0].constructor.GenericArguments)["asm0.t2000054"])[0];
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: castclass T[]*/
        /* IL_07: ldarg.1 */
        /* IL_08: ldc.i4.0 */
        /* IL_09: ldarg.0 */
        /* IL_0A: call Int32 get_Length()*/
        /* IL_0F: call Int32 IndexOf[T](T[], T, System.Int32, System.Int32)*/
        /* IL_14: ldc.i4.m1 */
        /* IL_16: ceq */
        /* IL_17: ldc.i4.0 */
        /* IL_19: ceq */
        /* IL_1A: stloc.0 */
        loc0 = ((((((asm0.x600012d)((((arguments)[0].constructor.GenericArguments)["asm0.t2000054"])[0]))(cast_class(arg0,t0),arg1,(0|0),(asm0.x6000125)(arg0)) === (-1|0)) ? (1) : (0)) === (0|0)) ? (1) : (0));
        /* IL_1D: ldloc.0 */
        /* IL_1E: ret */
        return loc0;
    };
    /* Void System.Collections.Generic.ICollection<T>.CopyTo(T[], System.Int32)*/
    asm.x600014f_init = function ()
    {
        (((asm0)["System.Array`1"])((((arguments)[0].constructor.GenericArguments)["asm0.t2000054"])[0]).init)();
        asm.x600014f = asm.x600014f_;
    };;
    asm.x600014f = function (arg0,arg1,arg2)
    {
        (asm.x600014f_init.apply)(this,arguments);
        return (asm.x600014f_.apply)(this,arguments);
    };;
    asm.x600014f_ = function System_Collections_Generic_ICollection_T__CopyTo(arg0,arg1,arg2)
    {
        var t0;
        var t1;
        t0 = ((asm0)["System.Array`1"])((((arguments)[0].constructor.GenericArguments)["asm0.t2000054"])[0]);
        t1 = (((arguments)[0].constructor.GenericArguments)["asm0.t2000054"])[0];
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: castclass T[]*/
        /* IL_07: ldarg.1 */
        /* IL_08: ldarg.2 */
        /* IL_09: call Void Copy[T](T[], T[], System.Int32)*/
        ((asm0.x600013e)((((arguments)[0].constructor.GenericArguments)["asm0.t2000054"])[0]))(cast_class(arg0,t0),arg1,arg2);
        /* IL_0E: nop */
        /* IL_0F: ret */
        return ;
    };
    /* Boolean System.Collections.Generic.ICollection<T>.Remove(T)*/
    asm.x6000150_init = function ()
    {
        (((asm0)["System.NotSupportedException"])().init)();
        asm.x6000150 = asm.x6000150_;
    };;
    asm.x6000150 = function (arg0,arg1)
    {
        (asm.x6000150_init.apply)(this,arguments);
        return (asm.x6000150_.apply)(this,arguments);
    };;
    asm.x6000150_ = function System_Collections_Generic_ICollection_T__Remove(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.NotSupportedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x60000eb,[
            null
        ]);
    };
    /* Void .ctor()*/
    asm.x6000151 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000146)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* T get_Current()*/
    asm.x6000153 = function get_Current(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Array`1 source*/
        /* IL_07: ldarg.0 */
        /* IL_08: ldfld Int32 index*/
        /* IL_0D: callvirt T GetTypedValue(System.Int32)*/
        /* IL_12: stloc.0 */
        loc0 = arg0.source.jsarr[arg0.index];
        /* IL_15: ldloc.0 */
        /* IL_16: ret */
        return loc0;
    };;
    /* Boolean MoveNext()*/
    asm.x6000154 = function MoveNext(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: dup */
        st_04 = (st_01 = st_00);
        /* IL_03: ldfld Int32 index*/
        st_02 = st_01.index;
        /* IL_08: ldc.i4.1 */
        st_03 = (1|0);
        /* IL_09: add */
        st_05 = ((st_02 + st_03) | (0|0));
        /* IL_0A: stfld Int32 index*/
        st_04.index = st_05;
        /* IL_0F: ldarg.0 */
        /* IL_10: ldfld Int32 index*/
        /* IL_15: ldarg.0 */
        /* IL_16: ldfld Int32 length*/
        /* IL_1C: clt */
        /* IL_1D: stloc.0 */
        loc0 = ((arg0.index < arg0.length) ? (1) : (0));
        /* IL_20: ldloc.0 */
        /* IL_21: ret */
        return loc0;
    };;
    /* Object System.Collections.IEnumerator.get_Current()*/
    asm.x6000155 = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        var loc0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm0.t2000055"])[0];
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call T get_Current()*/
        /* IL_07: box T*/
        /* IL_0C: stloc.0 */
        loc0 = box((asm0.x6000153)(arg0),t0);
        /* IL_0F: ldloc.0 */
        /* IL_10: ret */
        return loc0;
    };;
    /* Void Reset()*/
    asm.x6000156 = function Reset(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldc.i4.m1 */
        /* IL_03: stfld Int32 index*/
        arg0.index = (-1|0);
        /* IL_08: ret */
        return ;
    };;
    /* Void Dispose()*/
    asm.x6000157 = function Dispose(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    /* Void .ctor(System.Array`1[T])*/
    asm.x6000152 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld Array`1 source*/
        arg0.source = arg1;
        /* IL_0F: ldarg.0 */
        /* IL_10: ldc.i4.m1 */
        /* IL_11: stfld Int32 index*/
        arg0.index = (-1|0);
        /* IL_16: ldarg.0 */
        /* IL_17: ldarg.1 */
        /* IL_18: callvirt Int32 get_Length()*/
        /* IL_1D: stfld Int32 length*/
        arg0.length = (asm0.x6000125)(arg1);
        /* IL_22: nop */
        /* IL_23: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000158 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Boolean get_HasValue()*/
    asm.x600015b = function get_HasValue(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Boolean has_value*/
        /* IL_07: stloc.0 */
        loc0 = (arg0.r)().has_value;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* T get_Value()*/
    asm.x600015c_init = function ()
    {
        (((asm0)["System.InvalidOperationException"])().init)();
        asm.x600015c = asm.x600015c_;
    };;
    asm.x600015c = function (arg0)
    {
        (asm.x600015c_init.apply)(this,arguments);
        return (asm.x600015c_.apply)(this,arguments);
    };;
    asm.x600015c_ = function get_Value(arg0)
    {
        var t0;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.InvalidOperationException"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Boolean has_value*/
                /* IL_07: stloc.1 */
                loc1 = (arg0.r)().has_value;
                /* IL_08: ldloc.1 */
                /* IL_09: brtrue.s IL_16*/
                
                if (loc1){
                    __pos_0__ = 0x16;
                    continue;
                }
                /* IL_0B: ldstr Nullable object must have a value.*/
                /* IL_10: newobj Void .ctor(System.String)*/
                /* IL_15: throw */
                throw newobj(t0,asm0.x60000f9,[
                    null,
                    new_string("Nullable object must have a value.")
                ]);
                case 0x16:
                /* IL_16: ldarg.0 */
                /* IL_17: ldfld T value*/
                /* IL_1C: stloc.0 */
                loc0 = (arg0.r)().value;
                /* IL_1F: ldloc.0 */
                /* IL_20: ret */
                return loc0;
            }
        }
    };
    /* Boolean Equals(System.Object)*/
    asm.x600015d_init = function ()
    {
        (((asm0)["Braille.Runtime.UnboundGenericParameter"])().init)();
        (((asm0)["System.Nullable`1"])(((((arguments)[0].r)().constructor.GenericArguments)["asm0.t2000059"])[0]).init)();
        asm.x600015d = asm.x600015d_;
    };;
    asm.x600015d = function (arg0,arg1)
    {
        (asm.x600015d_init.apply)(this,arguments);
        return (asm.x600015d_.apply)(this,arguments);
    };;
    asm.x600015d_ = function Equals(arg0,arg1)
    {
        var t0;
        var t1;
        var t2;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((asm0)["Braille.Runtime.UnboundGenericParameter"])();
        t1 = ((((arguments)[0].r)().constructor.GenericArguments)["asm0.t2000059"])[0];
        t2 = ((asm0)["System.Nullable`1"])(((((arguments)[0].r)().constructor.GenericArguments)["asm0.t2000059"])[0]);
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.1 */
                loc1 = ((((arg1 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.1 */
                /* IL_0A: brtrue.s IL_18*/
                
                if (loc1){
                    __pos_0__ = 0x18;
                    continue;
                }
                /* IL_0C: ldarg.0 */
                /* IL_0D: ldfld Boolean has_value*/
                /* IL_12: ldc.i4.0 */
                /* IL_14: ceq */
                /* IL_15: stloc.0 */
                loc0 = (((arg0.r)().has_value === (0|0)) ? (1) : (0));
                /* IL_16: br.s IL_38*/
                __pos_0__ = 0x38;
                continue;
                case 0x18:
                /* IL_18: ldarg.1 */
                /* IL_19: isinst System.Nullable`1[T]*/
                /* IL_1E: ldnull */
                /* IL_20: cgt.un */
                /* IL_21: stloc.1 */
                loc1 = (((t2.IsInst)(arg1) !== null) ? (1) : (0));
                /* IL_22: ldloc.1 */
                /* IL_23: brtrue.s IL_29*/
                
                if (loc1){
                    __pos_0__ = 0x29;
                    continue;
                }
                /* IL_25: ldc.i4.0 */
                /* IL_26: stloc.0 */
                loc0 = (0|0);
                /* IL_27: br.s IL_38*/
                __pos_0__ = 0x38;
                continue;
                case 0x29:
                /* IL_29: ldarg.0 */
                /* IL_2A: ldarg.1 */
                /* IL_2B: unbox.any System.Nullable`1[T]*/
                /* IL_30: call Boolean Equals(System.Nullable`1[T])*/
                /* IL_35: stloc.0 */
                loc0 = (asm0.x600015e)(arg0,clone_value(unbox_any(arg1,t2)));
                case 0x38:
                /* IL_38: ldloc.0 */
                /* IL_39: ret */
                return loc0;
            }
        }
    };
    /* Boolean Equals(System.Nullable`1[T])*/
    asm.x600015e = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((((arguments)[0].r)().constructor.GenericArguments)["asm0.t2000059"])[0];
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarga.s 1*/
                /* IL_03: ldfld Boolean has_value*/
                /* IL_08: ldarg.0 */
                /* IL_09: ldfld Boolean has_value*/
                /* IL_0F: ceq */
                /* IL_10: stloc.1 */
                loc1 = ((({
                    'w': function ()
                    {
                        arg1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg1;
                    }
                }.r)().has_value === (arg0.r)().has_value) ? (1) : (0));
                /* IL_11: ldloc.1 */
                /* IL_12: brtrue.s IL_18*/
                
                if (loc1){
                    __pos_0__ = 0x18;
                    continue;
                }
                /* IL_14: ldc.i4.0 */
                /* IL_15: stloc.0 */
                loc0 = (0|0);
                /* IL_16: br.s IL_46*/
                __pos_0__ = 0x46;
                continue;
                case 0x18:
                /* IL_18: ldarg.0 */
                /* IL_19: ldfld Boolean has_value*/
                /* IL_1E: stloc.1 */
                loc1 = (arg0.r)().has_value;
                /* IL_1F: ldloc.1 */
                /* IL_20: brtrue.s IL_26*/
                
                if (loc1){
                    __pos_0__ = 0x26;
                    continue;
                }
                /* IL_22: ldc.i4.1 */
                /* IL_23: stloc.0 */
                loc0 = (1|0);
                /* IL_24: br.s IL_46*/
                __pos_0__ = 0x46;
                continue;
                case 0x26:
                /* IL_26: ldarga.s 1*/
                /* IL_28: ldflda T value*/
                /* IL_2D: ldarg.0 */
                /* IL_2E: ldfld T value*/
                /* IL_33: box T*/
                /* IL_3E: callvirt Boolean Equals(System.Object)*/
                /* IL_43: stloc.0 */
                loc0 = (((t0.prototype.vtable)["asm0.x6000008"])())(dereference_pointer_as_needed({
                    'w': function ()
                    {
                        ({
                            'w': function ()
                            {
                                arg1 = (arguments)[0];
                            },
                            'r': function ()
                            {
                                return arg1;
                            }
                        }.r)().value = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return ({
                            'w': function ()
                            {
                                arg1 = (arguments)[0];
                            },
                            'r': function ()
                            {
                                return arg1;
                            }
                        }.r)().value;
                    }
                }),box((arg0.r)().value,t0));
                case 0x46:
                /* IL_46: ldloc.0 */
                /* IL_47: ret */
                return loc0;
            }
        }
    };;
    /* Int32 GetHashCode()*/
    asm.x600015f = function GetHashCode(arg0)
    {
        var __pos_0__;
        var loc1;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Boolean has_value*/
                /* IL_07: stloc.1 */
                loc1 = (arg0.r)().has_value;
                /* IL_08: ldloc.1 */
                /* IL_09: brtrue.s IL_0F*/
                
                if (loc1){
                    __pos_0__ = 0xF;
                    continue;
                }
                /* IL_0B: ldc.i4.0 */
                /* IL_0C: stloc.0 */
                loc0 = (0|0);
                /* IL_0D: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0xF:
                /* IL_0F: ldarg.0 */
                /* IL_10: ldflda T value*/
                /* IL_1B: callvirt Int32 GetHashCode()*/
                /* IL_20: stloc.0 */
                loc0 = (((((((arguments)[0].r)().constructor.GenericArguments)["asm0.t2000059"])[0].prototype.vtable)["asm0.x6000009"])())(dereference_pointer_as_needed({
                    'w': function ()
                    {
                        (arg0.r)().value = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return (arg0.r)().value;
                    }
                }));
                case 0x23:
                /* IL_23: ldloc.0 */
                /* IL_24: ret */
                return loc0;
            }
        }
    };;
    /* T GetValueOrDefault()*/
    asm.x6000160 = function GetValueOrDefault(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld T value*/
        /* IL_07: stloc.0 */
        loc0 = (arg0.r)().value;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* T GetValueOrDefault(T)*/
    asm.x6000161 = function GetValueOrDefault(arg0,arg1)
    {
        var st_02;
        var st_03;
        var __pos_0__;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Boolean has_value*/
                /* IL_07: brtrue.s IL_0C*/
                
                if ((arg0.r)().has_value){
                    __pos_0__ = 0xC;
                    continue;
                }
                /* IL_09: ldarg.1 */
                st_03 = arg1;
                /* IL_0A: br.s IL_12*/
                __pos_0__ = 0x12;
                continue;
                case 0xC:
                /* IL_0C: ldarg.0 */
                st_02 = arg0;
                /* IL_0D: ldfld T value*/
                st_03 = (st_02.r)().value;
                case 0x12:
                /* IL_12: nop */
                
                /* IL_13: stloc.0 */
                loc0 = st_03;
                /* IL_16: ldloc.0 */
                /* IL_17: ret */
                return loc0;
            }
        }
    };;
    /* String ToString()*/
    asm.x6000162_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x6000162 = asm.x6000162_;
    };;
    asm.x6000162 = function (arg0)
    {
        (asm.x6000162_init.apply)(this,arguments);
        return (asm.x6000162_.apply)(this,arguments);
    };;
    asm.x6000162_ = function ToString(arg0)
    {
        var t0;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.String"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld Boolean has_value*/
                /* IL_07: ldc.i4.0 */
                /* IL_09: ceq */
                /* IL_0A: stloc.1 */
                loc1 = (((arg0.r)().has_value === (0|0)) ? (1) : (0));
                /* IL_0B: ldloc.1 */
                /* IL_0C: brtrue.s IL_22*/
                
                if (loc1){
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_0E: ldarg.0 */
                /* IL_0F: ldflda T value*/
                /* IL_1A: callvirt String ToString()*/
                /* IL_1F: stloc.0 */
                loc0 = (((((((arguments)[0].r)().constructor.GenericArguments)["asm0.t2000059"])[0].prototype.vtable)["asm0.x6000005"])())(dereference_pointer_as_needed({
                    'w': function ()
                    {
                        (arg0.r)().value = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return (arg0.r)().value;
                    }
                }));
                /* IL_20: br.s IL_2A*/
                __pos_0__ = 0x2A;
                continue;
                case 0x22:
                (asm0.x6000181)();
                /* IL_22: ldsfld String Empty*/
                /* IL_27: stloc.0 */
                loc0 = t0.Empty;
                case 0x2A:
                /* IL_2A: ldloc.0 */
                /* IL_2B: ret */
                return loc0;
            }
        }
    };
    /* static Nullable`1 op_Implicit(T)*/
    asm.x6000163_init = function (T)
    {
        return function ()
        {
            (((asm0)["Braille.Runtime.UnboundGenericParameter"])().init)();
            (((asm0)["System.Nullable`1"])(T).init)();
        };
    };;
    asm.x6000163 = function (T)
    {
        return function (arg0)
        {
            ((asm.x6000163_init)(T).apply)(this,arguments);
            return ((asm.x6000163_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000163_ = function (T)
    {
        return function op_Implicit(arg0)
        {
            var t0;
            var t1;
            var t2;
            var loc0;
            t0 = ((asm0)["Braille.Runtime.UnboundGenericParameter"])();
            t1 = T;
            t2 = ((asm0)["System.Nullable`1"])(T);
            /* IL_00: nop */
            /* IL_01: ldarg.0 */
            /* IL_02: newobj Void .ctor(T)*/
            /* IL_07: stloc.0 */
            loc0 = newobj(t2,asm0.x600015a,[
                null,
                clone_value(arg0)
            ]);
            /* IL_0A: ldloc.0 */
            /* IL_0B: ret */
            return loc0;
        };
    };
    /* static T op_Explicit(System.Nullable`1[T])*/
    asm.x6000164 = function (T)
    {
        return function op_Explicit(arg0)
        {
            var loc0;
            /* IL_00: nop */
            /* IL_01: ldarga.s 0*/
            /* IL_03: call T get_Value()*/
            /* IL_08: stloc.0 */
            loc0 = (asm0.x600015c)({
                'w': function ()
                {
                    arg0 = (arguments)[0];
                },
                'r': function ()
                {
                    return arg0;
                }
            });
            /* IL_0B: ldloc.0 */
            /* IL_0C: ret */
            return loc0;
        };
    };;
    /* static Object Box(System.Nullable`1[T])*/
    asm.x6000165 = function (T)
    {
        return function Box(arg0)
        {
            var t0;
            var __pos_0__;
            var loc1;
            var loc0;
            t0 = T;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarga.s 0*/
                    /* IL_03: ldfld Boolean has_value*/
                    /* IL_08: stloc.1 */
                    loc1 = ({
                        'w': function ()
                        {
                            arg0 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    }.r)().has_value;
                    /* IL_09: ldloc.1 */
                    /* IL_0A: brtrue.s IL_10*/
                    
                    if (loc1){
                        __pos_0__ = 0x10;
                        continue;
                    }
                    /* IL_0C: ldnull */
                    /* IL_0D: stloc.0 */
                    loc0 = null;
                    /* IL_0E: br.s IL_1F*/
                    __pos_0__ = 0x1F;
                    continue;
                    case 0x10:
                    /* IL_10: ldarga.s 0*/
                    /* IL_12: ldfld T value*/
                    /* IL_17: box T*/
                    /* IL_1C: stloc.0 */
                    loc0 = box(({
                        'w': function ()
                        {
                            arg0 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    }.r)().value,t0);
                    case 0x1F:
                    /* IL_1F: ldloc.0 */
                    /* IL_20: ret */
                    return loc0;
                }
            }
        };
    };;
    /* static Nullable`1 Unbox(System.Object)*/
    asm.x6000166_init = function (T)
    {
        return function ()
        {
            (((asm0)["Braille.Runtime.UnboundGenericParameter"])().init)();
            (((asm0)["System.Nullable`1"])(T).init)();
        };
    };;
    asm.x6000166 = function (T)
    {
        return function (arg0)
        {
            ((asm.x6000166_init)(T).apply)(this,arguments);
            return ((asm.x6000166_)(T).apply)(this,arguments);
        };
    };;
    asm.x6000166_ = function (T)
    {
        return function Unbox(arg0)
        {
            var t0;
            var t1;
            var t2;
            var loc2;
            var __pos_0__;
            var loc1;
            var loc0;
            t0 = ((asm0)["Braille.Runtime.UnboundGenericParameter"])();
            t1 = T;
            t2 = ((asm0)["System.Nullable`1"])(T);
            loc2 = new (((asm0)["System.Nullable`1"])(T))();
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.0 */
                    /* IL_02: ldnull */
                    /* IL_04: ceq */
                    /* IL_05: ldc.i4.0 */
                    /* IL_07: ceq */
                    /* IL_08: stloc.1 */
                    loc1 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_09: ldloc.1 */
                    /* IL_0A: brtrue.s IL_18*/
                    
                    if (loc1){
                        __pos_0__ = 0x18;
                        continue;
                    }
                    /* IL_0C: ldloca.s 2*/
                    /* IL_0F: initobj System.Nullable`1[T]*/
                    ({
                        'w': function ()
                        {
                            loc2 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return loc2;
                        }
                    }.w)(((t2.IsValueType) ? (((t2.IsPrimitive) ? ((0|0)) : (new t2()))) : (null)));
                    /* IL_14: ldloc.2 */
                    /* IL_15: stloc.0 */
                    loc0 = loc2;
                    /* IL_16: br.s IL_26*/
                    __pos_0__ = 0x26;
                    continue;
                    case 0x18:
                    /* IL_18: ldarg.0 */
                    /* IL_19: unbox.any T*/
                    /* IL_1E: newobj Void .ctor(T)*/
                    /* IL_23: stloc.0 */
                    loc0 = newobj(t2,asm0.x600015a,[
                        null,
                        clone_value(unbox_any(arg0,t1))
                    ]);
                    case 0x26:
                    /* IL_26: ldloc.0 */
                    /* IL_27: ret */
                    return loc0;
                }
            }
        };
    };
    /* Void .ctor(T)*/
    asm.x600015a = function _ctor(arg0,arg1)
    {
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldc.i4.1 */
        /* IL_03: stfld Boolean has_value*/
        (arg0.r)().has_value = (1|0);
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld T value*/
        (arg0.r)().value = arg1;
        /* IL_0F: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x6000167 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static Int32 GetLengthImpl(System.Object)*/
    asm.x6000168 = function(o) { return o.jsstr.length; };;
    /* static Boolean EqualsImpl(System.String, System.String)*/
    asm.x6000169 = function(a, b) { return a.jsstr === b.jsstr ? 1 : 0; };;
    /* static String ConcatImpl(System.String[])*/
    asm.x600016a = function (args) { return new_string(String.prototype.concat.apply('', args.jsarr)); };;
    /* static Char GetChar(System.String, System.Int32)*/
    asm.x600016b = function (s, i) { return s.jsstr.charCodeAt(i); };;
    /* static String ReplaceImpl(System.String, System.String, System.String)*/
    asm.x600016c = function replaceAll(s, find, replace) {
                        function escapeRegExp(s2) {
                            return s2.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
                        }
                      return new_string(s.jsstr.replace(new RegExp(escapeRegExp(find.jsstr), 'g'), replace.jsstr));
                    };;
    /* Char get_Chars(System.Int32)*/
    asm.x600016d = function get_Chars(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Char GetChar(System.String, System.Int32)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x600016b)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* static String Concat(System.String, System.String)*/
    asm.x600016f_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x600016f = asm.x600016f_;
    };;
    asm.x600016f = function (arg0,arg1)
    {
        (asm.x600016f_init.apply)(this,arguments);
        return (asm.x600016f_.apply)(this,arguments);
    };;
    asm.x600016f_ = function Concat(arg0,arg1)
    {
        var t0;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.String"])();
        /* IL_00: nop */
        /* IL_01: ldc.i4.2 */
        /* IL_02: newarr System.String*/
        /* IL_07: stloc.1 */
        loc1 = new_array(t0,(2|0));
        /* IL_08: ldloc.1 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: ldarg.0 */
        /* IL_0B: stelem.ref */
        (loc1.jsarr)[(0|0)] = arg0;
        /* IL_0C: ldloc.1 */
        /* IL_0D: ldc.i4.1 */
        /* IL_0E: ldarg.1 */
        /* IL_0F: stelem.ref */
        (loc1.jsarr)[(1|0)] = arg1;
        /* IL_10: ldloc.1 */
        /* IL_11: call String ConcatImpl(System.String[])*/
        /* IL_16: stloc.0 */
        loc0 = (asm0.x600016a)(loc1);
        /* IL_19: ldloc.0 */
        /* IL_1A: ret */
        return loc0;
    };
    /* static String Concat(System.Object, System.Object, System.Object)*/
    asm.x6000170_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x6000170 = asm.x6000170_;
    };;
    asm.x6000170 = function (arg0,arg1,arg2)
    {
        (asm.x6000170_init.apply)(this,arguments);
        return (asm.x6000170_.apply)(this,arguments);
    };;
    asm.x6000170_ = function Concat(arg0,arg1,arg2)
    {
        var t0;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.String"])();
        /* IL_00: nop */
        /* IL_01: ldc.i4.3 */
        /* IL_02: newarr System.String*/
        /* IL_07: stloc.1 */
        loc1 = new_array(t0,(3|0));
        /* IL_08: ldloc.1 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: ldarg.0 */
        /* IL_0B: callvirt String ToString()*/
        /* IL_10: stelem.ref */
        (loc1.jsarr)[(0|0)] = (((arg0.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(arg0));
        /* IL_11: ldloc.1 */
        /* IL_12: ldc.i4.1 */
        /* IL_13: ldarg.1 */
        /* IL_14: callvirt String ToString()*/
        /* IL_19: stelem.ref */
        (loc1.jsarr)[(1|0)] = (((arg1.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(arg1));
        /* IL_1A: ldloc.1 */
        /* IL_1B: ldc.i4.2 */
        /* IL_1C: ldarg.2 */
        /* IL_1D: callvirt String ToString()*/
        /* IL_22: stelem.ref */
        (loc1.jsarr)[(2|0)] = (((arg2.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(arg2));
        /* IL_23: ldloc.1 */
        /* IL_24: call String ConcatImpl(System.String[])*/
        /* IL_29: stloc.0 */
        loc0 = (asm0.x600016a)(loc1);
        /* IL_2C: ldloc.0 */
        /* IL_2D: ret */
        return loc0;
    };
    /* static String Concat(System.String, System.String, System.String)*/
    asm.x6000171_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x6000171 = asm.x6000171_;
    };;
    asm.x6000171 = function (arg0,arg1,arg2)
    {
        (asm.x6000171_init.apply)(this,arguments);
        return (asm.x6000171_.apply)(this,arguments);
    };;
    asm.x6000171_ = function Concat(arg0,arg1,arg2)
    {
        var t0;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.String"])();
        /* IL_00: nop */
        /* IL_01: ldc.i4.3 */
        /* IL_02: newarr System.String*/
        /* IL_07: stloc.1 */
        loc1 = new_array(t0,(3|0));
        /* IL_08: ldloc.1 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: ldarg.0 */
        /* IL_0B: stelem.ref */
        (loc1.jsarr)[(0|0)] = arg0;
        /* IL_0C: ldloc.1 */
        /* IL_0D: ldc.i4.1 */
        /* IL_0E: ldarg.1 */
        /* IL_0F: stelem.ref */
        (loc1.jsarr)[(1|0)] = arg1;
        /* IL_10: ldloc.1 */
        /* IL_11: ldc.i4.2 */
        /* IL_12: ldarg.2 */
        /* IL_13: stelem.ref */
        (loc1.jsarr)[(2|0)] = arg2;
        /* IL_14: ldloc.1 */
        /* IL_15: call String ConcatImpl(System.String[])*/
        /* IL_1A: stloc.0 */
        loc0 = (asm0.x600016a)(loc1);
        /* IL_1D: ldloc.0 */
        /* IL_1E: ret */
        return loc0;
    };
    /* static String Concat(System.String, System.String, System.String, System.String)*/
    asm.x6000172_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x6000172 = asm.x6000172_;
    };;
    asm.x6000172 = function (arg0,arg1,arg2,arg3)
    {
        (asm.x6000172_init.apply)(this,arguments);
        return (asm.x6000172_.apply)(this,arguments);
    };;
    asm.x6000172_ = function Concat(arg0,arg1,arg2,arg3)
    {
        var t0;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.String"])();
        /* IL_00: nop */
        /* IL_01: ldc.i4.4 */
        /* IL_02: newarr System.String*/
        /* IL_07: stloc.1 */
        loc1 = new_array(t0,(4|0));
        /* IL_08: ldloc.1 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: ldarg.0 */
        /* IL_0B: stelem.ref */
        (loc1.jsarr)[(0|0)] = arg0;
        /* IL_0C: ldloc.1 */
        /* IL_0D: ldc.i4.1 */
        /* IL_0E: ldarg.1 */
        /* IL_0F: stelem.ref */
        (loc1.jsarr)[(1|0)] = arg1;
        /* IL_10: ldloc.1 */
        /* IL_11: ldc.i4.2 */
        /* IL_12: ldarg.2 */
        /* IL_13: stelem.ref */
        (loc1.jsarr)[(2|0)] = arg2;
        /* IL_14: ldloc.1 */
        /* IL_15: ldc.i4.3 */
        /* IL_16: ldarg.3 */
        /* IL_17: stelem.ref */
        (loc1.jsarr)[(3|0)] = arg3;
        /* IL_18: ldloc.1 */
        /* IL_19: call String ConcatImpl(System.String[])*/
        /* IL_1E: stloc.0 */
        loc0 = (asm0.x600016a)(loc1);
        /* IL_21: ldloc.0 */
        /* IL_22: ret */
        return loc0;
    };
    /* static String Concat(System.Object, System.Object)*/
    asm.x6000173_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x6000173 = asm.x6000173_;
    };;
    asm.x6000173 = function (arg0,arg1)
    {
        (asm.x6000173_init.apply)(this,arguments);
        return (asm.x6000173_.apply)(this,arguments);
    };;
    asm.x6000173_ = function Concat(arg0,arg1)
    {
        var t0;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.String"])();
        /* IL_00: nop */
        /* IL_01: ldc.i4.2 */
        /* IL_02: newarr System.String*/
        /* IL_07: stloc.1 */
        loc1 = new_array(t0,(2|0));
        /* IL_08: ldloc.1 */
        /* IL_09: ldc.i4.0 */
        /* IL_0A: ldarg.0 */
        /* IL_0B: callvirt String ToString()*/
        /* IL_10: stelem.ref */
        (loc1.jsarr)[(0|0)] = (((arg0.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(arg0));
        /* IL_11: ldloc.1 */
        /* IL_12: ldc.i4.1 */
        /* IL_13: ldarg.1 */
        /* IL_14: callvirt String ToString()*/
        /* IL_19: stelem.ref */
        (loc1.jsarr)[(1|0)] = (((arg1.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(arg1));
        /* IL_1A: ldloc.1 */
        /* IL_1B: call String ConcatImpl(System.String[])*/
        /* IL_20: stloc.0 */
        loc0 = (asm0.x600016a)(loc1);
        /* IL_23: ldloc.0 */
        /* IL_24: ret */
        return loc0;
    };
    /* static String Concat(System.String[])*/
    asm.x6000174 = function Concat(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call String ConcatImpl(System.String[])*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x600016a)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static String Concat(System.Object[])*/
    asm.x6000175_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x6000175 = asm.x6000175_;
    };;
    asm.x6000175 = function (arg0)
    {
        (asm.x6000175_init.apply)(this,arguments);
        return (asm.x6000175_.apply)(this,arguments);
    };;
    asm.x6000175_ = function Concat(arg0)
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc3;
        var loc2;
        t0 = ((asm0)["System.String"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldlen */
                /* IL_03: conv.i4 */
                /* IL_04: newarr System.String*/
                /* IL_09: stloc.0 */
                loc0 = new_array(t0,arg0.jsarr.length | (0|0));
                /* IL_0A: ldc.i4.0 */
                /* IL_0B: stloc.1 */
                loc1 = (0|0);
                /* IL_0C: br.s IL_1F*/
                __pos_0__ = 0x1F;
                continue;
                case 0xE:
                /* IL_0E: nop */
                
                /* IL_0F: ldloc.0 */
                /* IL_10: ldloc.1 */
                /* IL_11: ldarg.0 */
                /* IL_12: ldloc.1 */
                /* IL_13: ldelem.ref */
                /* IL_14: callvirt String ToString()*/
                /* IL_19: stelem.ref */
                (loc0.jsarr)[loc1] = ((((arg0.jsarr)[loc1].vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed((arg0.jsarr)[loc1]));
                /* IL_1A: nop */
                
                /* IL_1B: ldloc.1 */
                /* IL_1C: ldc.i4.1 */
                /* IL_1D: add */
                /* IL_1E: stloc.1 */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x1F:
                /* IL_1F: ldloc.1 */
                /* IL_20: ldarg.0 */
                /* IL_21: ldlen */
                /* IL_22: conv.i4 */
                /* IL_24: clt */
                /* IL_25: stloc.3 */
                loc3 = ((loc1 < (arg0.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_26: ldloc.3 */
                /* IL_27: brtrue.s IL_0E*/
                
                if (loc3){
                    __pos_0__ = 0xE;
                    continue;
                }
                /* IL_29: ldloc.0 */
                /* IL_2A: call String Concat(System.String[])*/
                /* IL_2F: stloc.2 */
                loc2 = (asm0.x6000174)(loc0);
                /* IL_32: ldloc.2 */
                /* IL_33: ret */
                return loc2;
            }
        }
    };
    /* String Replace(System.String, System.String)*/
    asm.x6000176 = function Replace(arg0,arg1,arg2)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: ldarg.2 */
        /* IL_04: call String ReplaceImpl(System.String, System.String, System.String)*/
        /* IL_09: stloc.0 */
        loc0 = (asm0.x600016c)(arg0,arg1,arg2);
        /* IL_0C: ldloc.0 */
        /* IL_0D: ret */
        return loc0;
    };;
    /* Int32 get_Length()*/
    asm.x6000177 = function get_Length(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetLengthImpl(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000168)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* String ToString()*/
    asm.x6000178 = function ToString(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: stloc.0 */
        loc0 = arg0;
        /* IL_05: ldloc.0 */
        /* IL_06: ret */
        return loc0;
    };;
    /* static Boolean op_Inequality(System.String, System.String)*/
    asm.x6000179 = function op_Inequality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: ldc.i4.0 */
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = (((asm0.x6000169)(arg0,arg1) === (0|0)) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    /* static Boolean op_Equality(System.String, System.String)*/
    asm.x600017a = function op_Equality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x6000169)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* Boolean Equals(System.String)*/
    asm.x600017b = function Equals(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x6000169)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* Boolean Equals(System.Object)*/
    asm.x600017c_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x600017c = asm.x600017c_;
    };;
    asm.x600017c = function (arg0,arg1)
    {
        (asm.x600017c_init.apply)(this,arguments);
        return (asm.x600017c_.apply)(this,arguments);
    };;
    asm.x600017c_ = function Equals(arg0,arg1)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.String"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: castclass System.String*/
        /* IL_08: call Boolean Equals(System.String)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x600017b)(arg0,cast_class(arg1,t0));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* static Int32 GetHashCodeImpl(System.String)*/
    asm.x600017d = 
            function (o) {
                var str = o.jsstr;
                var length = str.length;
                var h = 0;
                for (var i = 0; i < length; i += 1)
                    h = (h << 5) - h + str.charCodeAt(i);
                return h;
            };;
    /* Int32 GetHashCode()*/
    asm.x600017e = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetHashCodeImpl(System.String)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x600017d)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* static Int32 Compare(System.String, System.String)*/
    asm.x600017f = 
            function (a, b) {
                if (a.jsstr < b.jsstr)
                    return -1;

                if (a.jsstr > b.jsstr)
                    return 1;

                return 0;
            }
            ;;
    /* Void .ctor()*/
    asm.x6000180 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void .cctor()*/
    asm.x6000181_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x6000181 = asm.x6000181_;
    };;
    asm.x6000181 = function ()
    {
        (asm.x6000181_init.apply)(this,arguments);
        return (asm.x6000181_.apply)(this,arguments);
    };;
    asm.x6000181_ = function _cctor()
    {
        var t0;
        
        if (((asm0)["System.String"])().FieldHasBeenInitialized){
            return;
        }
        ((asm0)["System.String"])().FieldHasBeenInitialized = true;
        t0 = ((asm0)["System.String"])();
        /* IL_00: ldstr */
        /* IL_05: stsfld String Empty*/
        (t0)["Empty"] = new_string("");
        /* IL_0A: ret */
        return ;
    };
    /* String get_MemberName()*/
    asm.x6000183 = function get_MemberName(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld String member_name*/
        /* IL_07: stloc.0 */
        loc0 = arg0.System_ReflectionDefaultMemberAttributemember_name;
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    /* Void .ctor(System.String)*/
    asm.x6000182 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000047)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld String member_name*/
        arg0.System_ReflectionDefaultMemberAttributemember_name = arg1;
        /* IL_0F: nop */
        /* IL_10: ret */
        return ;
    };;
    /* String ToString()*/
    asm.x6000185_init = function ()
    {
        (((asm0)["System.UInt16"])().init)();
        asm.x6000185 = asm.x6000185_;
    };;
    asm.x6000185 = function (arg0)
    {
        (asm.x6000185_init.apply)(this,arguments);
        return (asm.x6000185_.apply)(this,arguments);
    };;
    asm.x6000185_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.UInt16"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u2 */
        /* IL_03: box System.UInt16*/
        /* IL_08: ldc.i4.s 16*/
        /* IL_0A: call String UnsignedPrimitiveToString(System.Object, System.Int32)*/
        /* IL_0F: stloc.0 */
        loc0 = (asm0.x600009b)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        },(16|0));
        /* IL_12: ldloc.0 */
        /* IL_13: ret */
        return loc0;
    };
    /* Boolean Equals(System.Object)*/
    asm.x6000186_init = function ()
    {
        (((asm0)["System.UInt16"])().init)();
        asm.x6000186 = asm.x6000186_;
    };;
    asm.x6000186 = function (arg0,arg1)
    {
        (asm.x6000186_init.apply)(this,arguments);
        return (asm.x6000186_.apply)(this,arguments);
    };;
    asm.x6000186_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = ((asm0)["System.UInt16"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.UInt16*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.3 */
                loc3 = (((t0.IsInst)(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc3){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldind.u2 */
                /* IL_14: stloc.0 */
                loc0 = (arg0.r)();
                /* IL_15: ldarg.1 */
                /* IL_16: unbox.any System.UInt16*/
                /* IL_1B: stloc.1 */
                loc1 = unbox_any(arg1,t0);
                /* IL_1C: ldloc.0 */
                /* IL_1D: ldloc.1 */
                /* IL_1F: ceq */
                /* IL_20: stloc.2 */
                loc2 = ((loc0 === loc1) ? (1) : (0));
                case 0x23:
                /* IL_23: ldloc.2 */
                /* IL_24: ret */
                return loc2;
            }
        }
    };
    /* Int32 GetHashCode()*/
    asm.x6000187 = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u2 */
        /* IL_03: stloc.0 */
        loc0 = (arg0.r)();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* String ToString()*/
    asm.x6000188_init = function ()
    {
        (((asm0)["System.UInt32"])().init)();
        asm.x6000188 = asm.x6000188_;
    };;
    asm.x6000188 = function (arg0)
    {
        (asm.x6000188_init.apply)(this,arguments);
        return (asm.x6000188_.apply)(this,arguments);
    };;
    asm.x6000188_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.UInt32"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u4 */
        /* IL_03: box System.UInt32*/
        /* IL_08: ldc.i4.s 32*/
        /* IL_0A: call String UnsignedPrimitiveToString(System.Object, System.Int32)*/
        /* IL_0F: stloc.0 */
        loc0 = (asm0.x600009b)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        },(32|0));
        /* IL_12: ldloc.0 */
        /* IL_13: ret */
        return loc0;
    };
    /* Boolean Equals(System.Object)*/
    asm.x6000189_init = function ()
    {
        (((asm0)["System.UInt32"])().init)();
        asm.x6000189 = asm.x6000189_;
    };;
    asm.x6000189 = function (arg0,arg1)
    {
        (asm.x6000189_init.apply)(this,arguments);
        return (asm.x6000189_.apply)(this,arguments);
    };;
    asm.x6000189_ = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc3;
        var loc2;
        var loc0;
        var loc1;
        t0 = ((asm0)["System.UInt32"])();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.1 */
                /* IL_02: isinst System.UInt32*/
                /* IL_07: ldnull */
                /* IL_09: cgt.un */
                /* IL_0A: stloc.3 */
                loc3 = (((t0.IsInst)(arg1) !== null) ? (1) : (0));
                /* IL_0B: ldloc.3 */
                /* IL_0C: brtrue.s IL_12*/
                
                if (loc3){
                    __pos_0__ = 0x12;
                    continue;
                }
                /* IL_0E: ldc.i4.0 */
                /* IL_0F: stloc.2 */
                loc2 = (0|0);
                /* IL_10: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0x12:
                /* IL_12: ldarg.0 */
                /* IL_13: ldind.u4 */
                /* IL_14: stloc.0 */
                loc0 = (arg0.r)();
                /* IL_15: ldarg.1 */
                /* IL_16: unbox.any System.UInt32*/
                /* IL_1B: stloc.1 */
                loc1 = unbox_any(arg1,t0);
                /* IL_1C: ldloc.0 */
                /* IL_1D: ldloc.1 */
                /* IL_1F: ceq */
                /* IL_20: stloc.2 */
                loc2 = ((loc0 === loc1) ? (1) : (0));
                case 0x23:
                /* IL_23: ldloc.2 */
                /* IL_24: ret */
                return loc2;
            }
        }
    };
    /* Int32 GetHashCode()*/
    asm.x600018a = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u4 */
        /* IL_03: stloc.0 */
        loc0 = (arg0.r)();
        /* IL_06: ldloc.0 */
        /* IL_07: ret */
        return loc0;
    };;
    /* Int32 CompareTo(System.Object)*/
    asm.x600018b = function CompareTo(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: unbox.any System.UInt32*/
        /* IL_08: call Int32 CompareTo(System.UInt32)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x600018c)(arg0,unbox_any(arg1,((asm0)["System.UInt32"])()));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    /* Int32 CompareTo(System.UInt32)*/
    asm.x600018c = function CompareTo(arg0,arg1)
    {
        var __pos_0__;
        var loc0;
        var loc2;
        var loc1;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.u4 */
                /* IL_03: stloc.0 */
                loc0 = (arg0.r)();
                /* IL_04: ldloc.0 */
                /* IL_05: ldarg.1 */
                /* IL_07: clt.un */
                /* IL_08: ldc.i4.0 */
                /* IL_0A: ceq */
                /* IL_0B: stloc.2 */
                loc2 = ((((unsigned_value(loc0) < unsigned_value(arg1)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_0C: ldloc.2 */
                /* IL_0D: brtrue.s IL_13*/
                
                if (loc2){
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0F: ldc.i4.m1 */
                /* IL_10: stloc.1 */
                loc1 = (-1|0);
                /* IL_11: br.s IL_26*/
                __pos_0__ = 0x26;
                continue;
                case 0x13:
                /* IL_13: ldloc.0 */
                /* IL_14: ldarg.1 */
                /* IL_16: cgt.un */
                /* IL_17: ldc.i4.0 */
                /* IL_19: ceq */
                /* IL_1A: stloc.2 */
                loc2 = ((((unsigned_value(loc0) > unsigned_value(arg1)) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_1B: ldloc.2 */
                /* IL_1C: brtrue.s IL_22*/
                
                if (loc2){
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_1E: ldc.i4.1 */
                /* IL_1F: stloc.1 */
                loc1 = (1|0);
                /* IL_20: br.s IL_26*/
                __pos_0__ = 0x26;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.0 */
                /* IL_23: stloc.1 */
                loc1 = (0|0);
                case 0x26:
                /* IL_26: ldloc.1 */
                /* IL_27: ret */
                return loc1;
            }
        }
    };;
    /* String ToString()*/
    asm.x600018d = function ToString(arg0)
    {
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc5;
        var loc4;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldind.i8 */
                /* IL_03: stloc.0 */
                loc0 = (arg0.r)();
                /* IL_04: ldc.i4.s 10*/
                /* IL_06: conv.i8 */
                /* IL_07: stloc.1 */
                loc1 = conv_i8((10|0));
                /* IL_08: ldstr */
                /* IL_0D: stloc.2 */
                loc2 = new_string("");
                case 0xE:
                /* IL_0E: nop */
                
                /* IL_0F: ldloc.0 */
                /* IL_10: ldloc.1 */
                /* IL_11: rem.un */
                /* IL_12: stloc.3 */
                loc3 = (asm0.UInt64_Modulus)(loc0,loc1);
                /* IL_13: ldloc.3 */
                /* IL_14: call String GetLowString(System.UInt64)*/
                /* IL_19: ldloc.2 */
                /* IL_1A: call String Concat(System.String, System.String)*/
                /* IL_1F: stloc.2 */
                loc2 = (asm0.x600016f)(new_string(loc3[0].toString()),loc2);
                /* IL_20: ldloc.0 */
                /* IL_21: ldloc.1 */
                /* IL_22: div.un */
                /* IL_23: stloc.0 */
                loc0 = (asm0.UInt64_Division)(loc0,loc1);
                /* IL_24: nop */
                
                /* IL_25: ldloc.0 */
                /* IL_26: ldc.i4.0 */
                /* IL_27: conv.i8 */
                /* IL_29: cgt.un */
                /* IL_2A: stloc.s 5*/
                loc5 = (asm0.UInt64_GreaterThan)(loc0,conv_i8((0|0)));
                /* IL_2C: ldloc.s 5*/
                /* IL_2E: brtrue.s IL_0E*/
                
                if (loc5){
                    __pos_0__ = 0xE;
                    continue;
                }
                /* IL_30: ldloc.2 */
                /* IL_31: stloc.s 4*/
                loc4 = loc2;
                /* IL_35: ldloc.s 4*/
                /* IL_37: ret */
                return loc4;
            }
        }
    };;
    /* static UInt64 op_RightShift(System.UInt64, System.Int32)*/
    asm.x600018f = 
            function UInt64_RightShift(a, n) {
                n = n & 0x3f;

                var maxShift = 8;
                if (n > maxShift) {
                    return asm0.UInt64_RightShift(
                        asm0.UInt64_RightShift(a, maxShift), n - maxShift);
                }

                var m = (1 << n) - 1;

                var br = (a[1] & m) << (32 - n);
                var bt = a[1] >>> n;
                var at = a[0] >>> n;

                return new Uint32Array([ at | br, bt ]);
            };;
    asm.UInt64_RightShift = asm.x600018f;
    /* static UInt64 op_Division(System.UInt64, System.UInt64)*/
    asm.x6000190 = 
            function UInt64_Division(n, d) {

                if (d[0] == 0 && d[1] == 0)
                    throw new Error('System.DivideByZeroException');
      
                var q = new Uint32Array([0, 0]);
                var r = new Uint32Array([0, 0]);

                for (var i = 63; i >= 0; i--) {
                    r = asm0.XInt64_LeftShift(r, 1);

                    var li = i < 32 ? 0 : 1;
                    var s = (i - 32 * li);

                    r[0] |= (n[li] & (1 << s)) >>> s;

                    if (asm0.UInt64_GreaterThanOrEqual(r, d)) {
                        r = asm0.XInt64_Subtraction(r, d);
                        q[li] |= 1 << s;
                    }
                }

                return q;    
            };;
    asm.UInt64_Division = asm.x6000190;
    /* static UInt64 op_Multiply(System.UInt64, System.UInt64)*/
    asm.x6000191 = 
            function XInt64_Multiplication(a, b) {
                if (a[0] == 0 && a[1] == 0)
                    return a;

                if (b[0] == 0 && b[1] == 0)
                    return b;

                if (asm0.UInt64_GreaterThan(a, b))
                    return asm0.XInt64_Multiplication(b, a);

                var s = new Uint32Array([0, 0]);

                if (a[0] & 1 == 1) {
                    s[0] = b[0];
                    s[1] = b[1];
                }

                var l = new Uint32Array([1, 0]);

                while (!asm0.XInt64_Equality(a, l)) {
                    a = asm0.UInt64_RightShift(a, 1);
                    b = asm0.XInt64_LeftShift(b, 1);

                    if (a[0] & 1 == 1)
                        s = asm0.XInt64_Addition(b, s);
                }

                return s;
            };;
    asm.XInt64_Multiplication = asm.x6000191;
    /* static Boolean op_GreaterThanOrEqual(System.UInt64, System.UInt64)*/
    asm.x6000192 = 
            function UInt64_GreaterThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] >= b[0] ? 1: 0;
            };;
    asm.UInt64_GreaterThanOrEqual = asm.x6000192;
    /* static Boolean op_LessThanOrEqual(System.UInt64, System.UInt64)*/
    asm.x6000193 = 
            function UInt64_LessThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] <= b[0] ? 1: 0;
            };;
    asm.UInt64_LessThanOrEqual = asm.x6000193;
    /* static Boolean op_GreaterThan(System.UInt64, System.UInt64)*/
    asm.x6000194 = 
            function UInt64_GreaterThan (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] > b[0] ? 1: 0;
            };;
    asm.UInt64_GreaterThan = asm.x6000194;
    /* static Boolean op_LessThan(System.UInt64, System.UInt64)*/
    asm.x6000195 = 
            function UInt64_LessThan(a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] < b[0] ? 1: 0;
            };;
    asm.UInt64_LessThan = asm.x6000195;
    /* static UInt64 op_Modulus(System.UInt64, System.UInt64)*/
    asm.x6000196 = 
            function UInt64_Modulus (n, d) {
                var greaterThanOrEqual = asm0.UInt64_GreaterThanOrEqual,
                    subtraction = asm0.XInt64_Subtraction,
                    leftShift = asm0.XInt64_LeftShift;

                if (d[0] == 0 && d[1] == 0)
                    throw new Error("System.DivideByZeroException");

                var r = new Uint32Array([0, 0]);

                for (var i = 63; i >= 0; i--) {
                    r = leftShift(r, 1);

                    var li = i < 32 ? 0 : 1;
                    var s = (i - 32 * li);

                    r[0] |= (n[li] & (1 << s)) >>> s;

                    if (greaterThanOrEqual(r, d)) {
                        r = subtraction(r, d);
                    }
                }

                return r;
            };;
    asm.UInt64_Modulus = asm.x6000196;
    /* Boolean Equals(System.Object)*/
    asm.x6000197 = function Equals(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i8 */
        /* IL_03: ldarg.1 */
        /* IL_04: unbox.any System.UInt64*/
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = (((arg0.r)() === unbox_any(arg1,((asm0)["System.UInt64"])())) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    /* Int32 GetHashCode()*/
    asm.x6000198 = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i8 */
        /* IL_03: call Int32 GetLow(System.UInt64)*/
        /* IL_08: stloc.0 */
        loc0 = (arg0.r)()[0];
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    /* String ToString()*/
    asm.x600019a_init = function ()
    {
        (((asm0)["System.UIntPtr"])().init)();
        asm.x600019a = asm.x600019a_;
    };;
    asm.x600019a = function (arg0)
    {
        (asm.x600019a_init.apply)(this,arguments);
        return (asm.x600019a_.apply)(this,arguments);
    };;
    asm.x600019a_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.UIntPtr"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldobj System.UIntPtr*/
        /* IL_07: box System.UIntPtr*/
        /* IL_0C: call String SignedPrimitiveToString(System.Object)*/
        /* IL_11: stloc.0 */
        loc0 = (asm0.x600009a)({
            'boxed': arg0,
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };
    /* Boolean MoveNext()*/
    asm.x600019b = function MoveNext(arg0)
    {
        var st_15;
        var st_16;
        var st_17;
        var st_18;
        var st_19;
        var st_1A;
        var __pos_0__;
        var loc1;
        var __switch_value__;
        var __jmp__;
        var loc0;
        var loc2;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: ldarg.0 */
                /* IL_01: ldfld Int32 <>1__state*/
                /* IL_06: stloc.1 */
                loc1 = (arg0)["Braille_JavaScript_GetEnumerator_d__0<>1__state"];
                /* IL_07: ldloc.1 */
                /* IL_08: switch System.Int32[]*/
                __switch_value__ = loc1;
                
                if (__switch_value__ >= 0x2){
                    __pos_0__ = 0x15;
                    continue;
                }
                __jmp__ = [
                    0x4,
                    0x2
                ];
                __pos_0__ = (0x15 + (__jmp__)[__switch_value__]);
                continue;
                case 0x15:
                /* IL_15: br.s IL_1B*/
                __pos_0__ = 0x1B;
                continue;
                case 0x17:
                /* IL_17: br.s IL_5D*/
                __pos_0__ = 0x5D;
                continue;
                case 0x19:
                /* IL_19: br.s IL_1D*/
                __pos_0__ = 0x1D;
                continue;
                case 0x1B:
                /* IL_1B: br.s IL_8B*/
                __pos_0__ = 0x8B;
                continue;
                case 0x1D:
                /* IL_1D: ldarg.0 */
                /* IL_1E: ldc.i4.m1 */
                /* IL_1F: stfld Int32 <>1__state*/
                (arg0)["Braille_JavaScript_GetEnumerator_d__0<>1__state"] = (-1|0);
                /* IL_24: nop */
                
                /* IL_25: ldarg.0 */
                /* IL_26: ldarg.0 */
                /* IL_27: ldfld Array <>4__this*/
                /* IL_2C: stfld Array <a>5__1*/
                (arg0)["<a>5__1"] = (arg0)["<>4__this"];
                /* IL_31: ldarg.0 */
                /* IL_32: ldc.i4.0 */
                /* IL_33: stfld Int32 <i>5__2*/
                (arg0)["<i>5__2"] = (0|0);
                /* IL_38: br.s IL_73*/
                __pos_0__ = 0x73;
                continue;
                case 0x3A:
                /* IL_3A: nop */
                
                /* IL_3B: ldarg.0 */
                /* IL_3C: ldarg.0 */
                /* IL_3D: ldfld Array <a>5__1*/
                /* IL_42: ldarg.0 */
                /* IL_43: ldfld Int32 <i>5__2*/
                /* IL_48: callvirt Object get_Item(System.Int32)*/
                /* IL_4D: stfld Object <>2__current*/
                (arg0)["Braille_JavaScript_GetEnumerator_d__0<>2__current"] = (arg0)["<a>5__1"][(arg0)["<i>5__2"]];
                /* IL_52: ldarg.0 */
                /* IL_53: ldc.i4.1 */
                /* IL_54: stfld Int32 <>1__state*/
                (arg0)["Braille_JavaScript_GetEnumerator_d__0<>1__state"] = (1|0);
                /* IL_59: ldc.i4.1 */
                /* IL_5A: stloc.0 */
                loc0 = (1|0);
                /* IL_5B: br.s IL_8F*/
                __pos_0__ = 0x8F;
                continue;
                case 0x5D:
                /* IL_5D: ldarg.0 */
                /* IL_5E: ldc.i4.m1 */
                /* IL_5F: stfld Int32 <>1__state*/
                (arg0)["Braille_JavaScript_GetEnumerator_d__0<>1__state"] = (-1|0);
                /* IL_64: nop */
                
                /* IL_65: ldarg.0 */
                st_15 = arg0;
                /* IL_66: dup */
                st_19 = (st_16 = st_15);
                /* IL_67: ldfld Int32 <i>5__2*/
                st_17 = (st_16)["<i>5__2"];
                /* IL_6C: ldc.i4.1 */
                st_18 = (1|0);
                /* IL_6D: add */
                st_1A = ((st_17 + st_18) | (0|0));
                /* IL_6E: stfld Int32 <i>5__2*/
                (st_19)["<i>5__2"] = st_1A;
                case 0x73:
                /* IL_73: ldarg.0 */
                /* IL_74: ldfld Int32 <i>5__2*/
                /* IL_79: ldarg.0 */
                /* IL_7A: ldfld Array <a>5__1*/
                /* IL_7F: callvirt Int32 get_Length()*/
                /* IL_85: clt */
                /* IL_86: stloc.2 */
                loc2 = (((arg0)["<i>5__2"] < (arg0)["<a>5__1"].length) ? (1) : (0));
                /* IL_87: ldloc.2 */
                /* IL_88: brtrue.s IL_3A*/
                
                if (loc2){
                    __pos_0__ = 0x3A;
                    continue;
                }
                /* IL_8A: nop */
                
                case 0x8B:
                /* IL_8B: ldc.i4.0 */
                /* IL_8C: stloc.0 */
                loc0 = (0|0);
                case 0x8F:
                /* IL_8F: ldloc.0 */
                /* IL_90: ret */
                return loc0;
            }
        }
    };;
    /* Object System.Collections.Generic.IEnumerator<System.Object>.get_Current()*/
    asm.x600019c = function System_Collections_Generic_IEnumerator_System_Object__get_Current(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Object <>2__current*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["Braille_JavaScript_GetEnumerator_d__0<>2__current"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void System.Collections.IEnumerator.Reset()*/
    asm.x600019d_init = function ()
    {
        (((asm0)["System.NotSupportedException"])().init)();
        asm.x600019d = asm.x600019d_;
    };;
    asm.x600019d = function (arg0)
    {
        (asm.x600019d_init.apply)(this,arguments);
        return (asm.x600019d_.apply)(this,arguments);
    };;
    asm.x600019d_ = function System_Collections_IEnumerator_Reset(arg0)
    {
        var t0;
        t0 = ((asm0)["System.NotSupportedException"])();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: throw */
        throw newobj(t0,asm0.x60000eb,[
            null
        ]);
    };
    /* Void System.IDisposable.Dispose()*/
    asm.x600019e = function System_IDisposable_Dispose(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    /* Object System.Collections.IEnumerator.get_Current()*/
    asm.x600019f = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var loc0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Object <>2__current*/
        /* IL_06: stloc.0 */
        loc0 = (arg0)["Braille_JavaScript_GetEnumerator_d__0<>2__current"];
        /* IL_09: ldloc.0 */
        /* IL_0A: ret */
        return loc0;
    };;
    /* Void .ctor(System.Int32)*/
    asm.x60001a0 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld Int32 <>1__state*/
        (arg0)["Braille_JavaScript_GetEnumerator_d__0<>1__state"] = arg1;
        /* IL_0D: ret */
        return ;
    };;
    /* Int32 <Sort>b__0(T, T)*/
    asm.x60001a2_init = function ()
    {
        (((asm0)["System.Collections.Generic.IComparer`1"])((((arguments)[0].constructor.GenericArguments)["asm0.t2000064"])[0]).init)();
        asm.x60001a2 = asm.x60001a2_;
    };;
    asm.x60001a2 = function (arg0,arg1,arg2)
    {
        (asm.x60001a2_init.apply)(this,arguments);
        return (asm.x60001a2_.apply)(this,arguments);
    };;
    asm.x60001a2_ = function _Sort_b__0(arg0,arg1,arg2)
    {
        var t0;
        var t1;
        var loc0;
        t0 = (((arguments)[0].constructor.GenericArguments)["asm0.t2000064"])[0];
        t1 = ((asm0)["System.Collections.Generic.IComparer`1"])((((arguments)[0].constructor.GenericArguments)["asm0.t2000064"])[0]);
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld IComparer`1 comparer*/
        /* IL_06: ldarg.1 */
        /* IL_07: ldarg.2 */
        /* IL_08: callvirt Int32 Compare(T, T)*/
        /* IL_0D: stloc.0 */
        loc0 = ((((arg0.comparer.ifacemap)[t1])[t0].x600002e)())(convert_box_to_pointer_as_needed(arg0.comparer),arg1,arg2);
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    /* Void .ctor()*/
    asm.x60001a1 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    (asm)["System.Object"] = (function ()
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
            function $$Object()
            {
                ($$Object.init)();
                this.constructor = $$Object;
            };
            c = $$Object;
            ct = c;
            $$Object.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                $$Object.CustomAttributes = [];
                $$Object.Methods = [
                    [
                        asm0,
                        "x6000005",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x6000008",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x6000009",
                        "GetHashCode"
                    ],
                    [
                        asm0,
                        "x600000a",
                        "GetType"
                    ]
                ];
                $$Object.BaseType = null;
                $$Object.FullName = "System.Object";
                $$Object.Assembly = asm;
                $$Object.Interfaces = [];
                $$Object.IsInst = function (t) { return t instanceof $$Object ? t : null; };
                $$Object.IsValueType = false;
                $$Object.IsPrimitive = false;
                $$Object.IsInterface = false;
                $$Object.IsGenericTypeDefinition = false;
                $$Object.IsNullable = false;
                $$Object.ArrayType = Array;
                $$Object.MetadataName = "asm0.t2000002";
                $$Object.GenericArguments = {};
                ($$Object.GenericArguments)["asm0.t2000002"] = [];
                $$Object.prototype.vtable = {
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
                $$Object.prototype.ifacemap = {};
                $$Object.prototype.toString = asm0.x6000004;
            };
            $$Object.prototype = {};
            return c;
        };
    })();
    (asm)["System.Collections.IEnumerable"] = (function ()
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
            function IEnumerable()
            {
                (IEnumerable.init)();
                this.constructor = IEnumerable;
            };
            c = IEnumerable;
            ct = c;
            IEnumerable.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IEnumerable.CustomAttributes = [];
                IEnumerable.Methods = [
                    [
                        asm0,
                        "x600000d",
                        "GetEnumerator"
                    ]
                ];
                IEnumerable.BaseType = null;
                IEnumerable.FullName = "System.Collections.IEnumerable";
                IEnumerable.Assembly = asm;
                IEnumerable.Interfaces = [];
                IEnumerable.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(IEnumerable) != -1 ? t : null; } catch (e) { return false; } };
                IEnumerable.IsValueType = false;
                IEnumerable.IsPrimitive = false;
                IEnumerable.IsInterface = true;
                IEnumerable.IsGenericTypeDefinition = false;
                IEnumerable.IsNullable = false;
                IEnumerable.ArrayType = Array;
                IEnumerable.MetadataName = "asm0.t2000003";
                IEnumerable.GenericArguments = {};
                (IEnumerable.GenericArguments)["asm0.t2000003"] = [];
                IEnumerable.prototype.vtable = {
                    'asm0.x600000d': function ()
                    {
                        return asm0.x600000d;
                    }
                };
                IEnumerable.prototype.ifacemap = {};
            };
            IEnumerable.prototype = {};
            return c;
        };
    })();
    (asm)["System.Collections.Generic.IEnumerable`1"] = (function ()
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
            function IEnumerable_1()
            {
                (IEnumerable_1.init)();
                this.constructor = IEnumerable_1;
            };
            c = IEnumerable_1;
            tree_set([
                T
            ],ct,c);
            IEnumerable_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IEnumerable_1.CustomAttributes = [];
                IEnumerable_1.Methods = [
                    [
                        asm0,
                        "x600000e",
                        "GetEnumerator"
                    ]
                ];
                IEnumerable_1.BaseType = null;
                IEnumerable_1.FullName = "System.Collections.Generic.IEnumerable`1";
                IEnumerable_1.Assembly = asm;
                IEnumerable_1.Interfaces = [
                    ((asm0)["System.Collections.IEnumerable"])()
                ];
                IEnumerable_1.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(IEnumerable_1) != -1 ? t : null; } catch (e) { return false; } };
                IEnumerable_1.IsValueType = false;
                IEnumerable_1.IsPrimitive = false;
                IEnumerable_1.IsInterface = true;
                IEnumerable_1.IsGenericTypeDefinition = true;
                IEnumerable_1.IsNullable = false;
                IEnumerable_1.ArrayType = Array;
                IEnumerable_1.MetadataName = "asm0.t2000004";
                IEnumerable_1.GenericArguments = {};
                (IEnumerable_1.GenericArguments)["asm0.t2000004"] = [
                    T
                ];
                IEnumerable_1.prototype.vtable = {
                    'asm0.x600000e': function ()
                    {
                        return asm0.x600000e;
                    }
                };
                IEnumerable_1.prototype.ifacemap = {};
            };
            IEnumerable_1.prototype = {};
            return c;
        };
    })();
    (asm)["Braille.JavaScript.Array"] = (function ()
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
            function Array()
            {
                (Array.init)();
                this.constructor = Array;
            };
            c = Array;
            ct = c;
            Array.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Array.CustomAttributes = [
                    [
                        ((asm0)["System.Reflection.DefaultMemberAttribute"])(),
                        asm0.x6000182,
                        [
                            new_string("Item")
                        ]
                    ]
                ];
                Array.Methods = [
                    [
                        asm0,
                        "x6000011",
                        "get_Length",
                        []
                    ],
                    [
                        asm0,
                        "x6000012",
                        "get_Item",
                        []
                    ],
                    [
                        asm0,
                        "x6000013",
                        "set_Item",
                        []
                    ],
                    [
                        asm0,
                        "x6000014",
                        "GetEnumerator"
                    ]
                ];
                Array.BaseType = ((asm0)["System.Object"])();
                Array.FullName = "Braille.JavaScript.Array";
                Array.Assembly = asm;
                Array.Interfaces = [
                    ((asm0)["System.Collections.Generic.IEnumerable`1"])(((asm0)["System.Object"])()),
                    ((asm0)["System.Collections.IEnumerable"])()
                ];
                Array.IsInst = function (t) { return t instanceof Array ? t : null; };
                Array.IsValueType = false;
                Array.IsPrimitive = false;
                Array.IsInterface = false;
                Array.IsGenericTypeDefinition = false;
                Array.IsNullable = false;
                Array.ArrayType = Array;
                Array.MetadataName = "asm0.t2000005";
                Array.GenericArguments = {};
                (Array.GenericArguments)["asm0.t2000005"] = [];
                (Array.GenericArguments)["asm0.t2000002"] = [];
                Array.prototype.vtable = {
                    'asm0.x6000014': function ()
                    {
                        return asm0.x6000014;
                    },
                    'asm0.x6000015': function ()
                    {
                        return asm0.x6000015;
                    },
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
                Array.prototype.ifacemap = {};
                tree_set([
                    ((asm0)["System.Collections.Generic.IEnumerable`1"])(((asm0)["System.Object"])()),
                    ((asm0)["System.Object"])()
                ],Array.prototype.ifacemap,{
                    'x600000e': function ()
                    {
                        return asm0.x6000014;
                    }
                });
                tree_set([
                    ((asm0)["System.Collections.IEnumerable"])()
                ],Array.prototype.ifacemap,{
                    'x600000d': function ()
                    {
                        return asm0.x6000015;
                    }
                });
            };
            Array.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.ValueType"] = (function ()
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
            function ValueType()
            {
                (ValueType.init)();
                this.constructor = ValueType;
            };
            c = ValueType;
            ct = c;
            ValueType.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                ValueType.CustomAttributes = [];
                ValueType.Methods = [
                    [
                        asm0,
                        "x6000016",
                        "Equals"
                    ]
                ];
                ValueType.BaseType = ((asm0)["System.Object"])();
                ValueType.FullName = "System.ValueType";
                ValueType.Assembly = asm;
                ValueType.Interfaces = [];
                ValueType.IsInst = function (t) { return t instanceof ValueType ? t : null; };
                ValueType.IsValueType = false;
                ValueType.IsPrimitive = false;
                ValueType.IsInterface = false;
                ValueType.IsGenericTypeDefinition = false;
                ValueType.IsNullable = false;
                ValueType.ArrayType = Array;
                ValueType.MetadataName = "asm0.t2000006";
                ValueType.GenericArguments = {};
                (ValueType.GenericArguments)["asm0.t2000006"] = [];
                (ValueType.GenericArguments)["asm0.t2000002"] = [];
                ValueType.prototype.vtable = {
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
                ValueType.prototype.ifacemap = {};
            };
            ValueType.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["Braille.JavaScript.Boolean"] = (function ()
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
            function $$Boolean()
            {
                ($$Boolean.init)();
                this.constructor = $$Boolean;
            };
            c = $$Boolean;
            ct = c;
            $$Boolean.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                $$Boolean.CustomAttributes = [];
                $$Boolean.Methods = [];
                $$Boolean.BaseType = ((asm0)["System.ValueType"])();
                $$Boolean.FullName = "Braille.JavaScript.Boolean";
                $$Boolean.Assembly = asm;
                $$Boolean.Interfaces = [];
                $$Boolean.IsInst = function (t) { return t instanceof $$Boolean ? t : null; };
                $$Boolean.IsValueType = true;
                $$Boolean.IsPrimitive = false;
                $$Boolean.IsInterface = false;
                $$Boolean.IsGenericTypeDefinition = false;
                $$Boolean.IsNullable = false;
                $$Boolean.ArrayType = Array;
                $$Boolean.MetadataName = "asm0.t2000007";
                $$Boolean.GenericArguments = {};
                ($$Boolean.GenericArguments)["asm0.t2000007"] = [];
                ($$Boolean.GenericArguments)["asm0.t2000006"] = [];
                ($$Boolean.GenericArguments)["asm0.t2000002"] = [];
                $$Boolean.prototype.vtable = {
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
                $$Boolean.prototype.ifacemap = {};
            };
            $$Boolean.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["Braille.JavaScript.String"] = (function ()
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
            function $$String()
            {
                ($$String.init)();
                this.constructor = $$String;
            };
            c = $$String;
            ct = c;
            $$String.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                $$String.Emtpy = null;
                $$String.CustomAttributes = [];
                $$String.Methods = [];
                $$String.BaseType = ((asm0)["System.Object"])();
                $$String.FullName = "Braille.JavaScript.String";
                $$String.Assembly = asm;
                $$String.Interfaces = [];
                $$String.IsInst = function (t) { return t instanceof $$String ? t : null; };
                $$String.IsValueType = false;
                $$String.IsPrimitive = false;
                $$String.IsInterface = false;
                $$String.IsGenericTypeDefinition = false;
                $$String.IsNullable = false;
                $$String.ArrayType = Array;
                $$String.MetadataName = "asm0.t2000008";
                $$String.GenericArguments = {};
                ($$String.GenericArguments)["asm0.t2000008"] = [];
                ($$String.GenericArguments)["asm0.t2000002"] = [];
                $$String.prototype.vtable = {
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
                $$String.prototype.ifacemap = {};
            };
            $$String.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["Braille.Runtime.InteropServices.Marshal"] = (function ()
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
            function Marshal()
            {
                (Marshal.init)();
                this.constructor = Marshal;
            };
            c = Marshal;
            ct = c;
            Marshal.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Marshal.CustomAttributes = [];
                Marshal.Methods = [];
                Marshal.BaseType = ((asm0)["System.Object"])();
                Marshal.FullName = "Braille.Runtime.InteropServices.Marshal";
                Marshal.Assembly = asm;
                Marshal.Interfaces = [];
                Marshal.IsInst = function (t) { return t instanceof Marshal ? t : null; };
                Marshal.IsValueType = false;
                Marshal.IsPrimitive = false;
                Marshal.IsInterface = false;
                Marshal.IsGenericTypeDefinition = false;
                Marshal.IsNullable = false;
                Marshal.ArrayType = Array;
                Marshal.MetadataName = "asm0.t2000009";
                Marshal.GenericArguments = {};
                (Marshal.GenericArguments)["asm0.t2000009"] = [];
                (Marshal.GenericArguments)["asm0.t2000002"] = [];
                Marshal.prototype.vtable = {
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
                Marshal.prototype.ifacemap = {};
            };
            Marshal.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.Locale"] = (function ()
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
            function Locale()
            {
                (Locale.init)();
                this.constructor = Locale;
            };
            c = Locale;
            ct = c;
            Locale.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Locale.CustomAttributes = [];
                Locale.Methods = [];
                Locale.BaseType = ((asm0)["System.Object"])();
                Locale.FullName = "System.Locale";
                Locale.Assembly = asm;
                Locale.Interfaces = [];
                Locale.IsInst = function (t) { return t instanceof Locale ? t : null; };
                Locale.IsValueType = false;
                Locale.IsPrimitive = false;
                Locale.IsInterface = false;
                Locale.IsGenericTypeDefinition = false;
                Locale.IsNullable = false;
                Locale.ArrayType = Array;
                Locale.MetadataName = "asm0.t200000a";
                Locale.GenericArguments = {};
                (Locale.GenericArguments)["asm0.t200000a"] = [];
                (Locale.GenericArguments)["asm0.t2000002"] = [];
                Locale.prototype.vtable = {
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
                Locale.prototype.ifacemap = {};
            };
            Locale.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["Braille.Runtime.UnboundGenericParameter"] = (function ()
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
            function UnboundGenericParameter()
            {
                (UnboundGenericParameter.init)();
                this.constructor = UnboundGenericParameter;
            };
            c = UnboundGenericParameter;
            ct = c;
            UnboundGenericParameter.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                UnboundGenericParameter.CustomAttributes = [];
                UnboundGenericParameter.Methods = [];
                UnboundGenericParameter.BaseType = ((asm0)["System.Object"])();
                UnboundGenericParameter.FullName = "Braille.Runtime.UnboundGenericParameter";
                UnboundGenericParameter.Assembly = asm;
                UnboundGenericParameter.Interfaces = [];
                UnboundGenericParameter.IsInst = function (t) { return t instanceof UnboundGenericParameter ? t : null; };
                UnboundGenericParameter.IsValueType = false;
                UnboundGenericParameter.IsPrimitive = false;
                UnboundGenericParameter.IsInterface = false;
                UnboundGenericParameter.IsGenericTypeDefinition = false;
                UnboundGenericParameter.IsNullable = false;
                UnboundGenericParameter.ArrayType = Array;
                UnboundGenericParameter.MetadataName = "asm0.t200000b";
                UnboundGenericParameter.GenericArguments = {};
                (UnboundGenericParameter.GenericArguments)["asm0.t200000b"] = [];
                (UnboundGenericParameter.GenericArguments)["asm0.t2000002"] = [];
                UnboundGenericParameter.prototype.vtable = {
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
                UnboundGenericParameter.prototype.ifacemap = {};
            };
            UnboundGenericParameter.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.Collections.Generic.ICollection`1"] = (function ()
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
            function ICollection_1()
            {
                (ICollection_1.init)();
                this.constructor = ICollection_1;
            };
            c = ICollection_1;
            tree_set([
                T
            ],ct,c);
            ICollection_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                ICollection_1.CustomAttributes = [];
                ICollection_1.Methods = [
                    [
                        asm0,
                        "x6000027",
                        "get_Count"
                    ],
                    [
                        asm0,
                        "x6000028",
                        "get_IsReadOnly"
                    ],
                    [
                        asm0,
                        "x6000029",
                        "Add"
                    ],
                    [
                        asm0,
                        "x600002a",
                        "Clear"
                    ],
                    [
                        asm0,
                        "x600002b",
                        "Contains"
                    ],
                    [
                        asm0,
                        "x600002c",
                        "CopyTo"
                    ],
                    [
                        asm0,
                        "x600002d",
                        "Remove"
                    ]
                ];
                ICollection_1.BaseType = null;
                ICollection_1.FullName = "System.Collections.Generic.ICollection`1";
                ICollection_1.Assembly = asm;
                ICollection_1.Interfaces = [
                    ((asm0)["System.Collections.Generic.IEnumerable`1"])(T),
                    ((asm0)["System.Collections.IEnumerable"])()
                ];
                ICollection_1.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(ICollection_1) != -1 ? t : null; } catch (e) { return false; } };
                ICollection_1.IsValueType = false;
                ICollection_1.IsPrimitive = false;
                ICollection_1.IsInterface = true;
                ICollection_1.IsGenericTypeDefinition = true;
                ICollection_1.IsNullable = false;
                ICollection_1.ArrayType = Array;
                ICollection_1.MetadataName = "asm0.t200000c";
                ICollection_1.GenericArguments = {};
                (ICollection_1.GenericArguments)["asm0.t200000c"] = [
                    T
                ];
                ICollection_1.prototype.vtable = {
                    'asm0.x6000027': function ()
                    {
                        return asm0.x6000027;
                    },
                    'asm0.x6000028': function ()
                    {
                        return asm0.x6000028;
                    },
                    'asm0.x6000029': function ()
                    {
                        return asm0.x6000029;
                    },
                    'asm0.x600002a': function ()
                    {
                        return asm0.x600002a;
                    },
                    'asm0.x600002b': function ()
                    {
                        return asm0.x600002b;
                    },
                    'asm0.x600002c': function ()
                    {
                        return asm0.x600002c;
                    },
                    'asm0.x600002d': function ()
                    {
                        return asm0.x600002d;
                    }
                };
                ICollection_1.prototype.ifacemap = {};
            };
            ICollection_1.prototype = {};
            return c;
        };
    })();
    (asm)["System.Collections.Generic.IComparer`1"] = (function ()
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
            function IComparer_1()
            {
                (IComparer_1.init)();
                this.constructor = IComparer_1;
            };
            c = IComparer_1;
            tree_set([
                T
            ],ct,c);
            IComparer_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IComparer_1.CustomAttributes = [];
                IComparer_1.Methods = [
                    [
                        asm0,
                        "x600002e",
                        "Compare"
                    ]
                ];
                IComparer_1.BaseType = null;
                IComparer_1.FullName = "System.Collections.Generic.IComparer`1";
                IComparer_1.Assembly = asm;
                IComparer_1.Interfaces = [];
                IComparer_1.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(IComparer_1) != -1 ? t : null; } catch (e) { return false; } };
                IComparer_1.IsValueType = false;
                IComparer_1.IsPrimitive = false;
                IComparer_1.IsInterface = true;
                IComparer_1.IsGenericTypeDefinition = true;
                IComparer_1.IsNullable = false;
                IComparer_1.ArrayType = Array;
                IComparer_1.MetadataName = "asm0.t200000d";
                IComparer_1.GenericArguments = {};
                (IComparer_1.GenericArguments)["asm0.t200000d"] = [
                    T
                ];
                IComparer_1.prototype.vtable = {
                    'asm0.x600002e': function ()
                    {
                        return asm0.x600002e;
                    }
                };
                IComparer_1.prototype.ifacemap = {};
            };
            IComparer_1.prototype = {};
            return c;
        };
    })();
    (asm)["System.Collections.IComparer"] = (function ()
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
            function IComparer()
            {
                (IComparer.init)();
                this.constructor = IComparer;
            };
            c = IComparer;
            ct = c;
            IComparer.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IComparer.CustomAttributes = [];
                IComparer.Methods = [
                    [
                        asm0,
                        "x600002f",
                        "Compare"
                    ]
                ];
                IComparer.BaseType = null;
                IComparer.FullName = "System.Collections.IComparer";
                IComparer.Assembly = asm;
                IComparer.Interfaces = [];
                IComparer.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(IComparer) != -1 ? t : null; } catch (e) { return false; } };
                IComparer.IsValueType = false;
                IComparer.IsPrimitive = false;
                IComparer.IsInterface = true;
                IComparer.IsGenericTypeDefinition = false;
                IComparer.IsNullable = false;
                IComparer.ArrayType = Array;
                IComparer.MetadataName = "asm0.t200000e";
                IComparer.GenericArguments = {};
                (IComparer.GenericArguments)["asm0.t200000e"] = [];
                IComparer.prototype.vtable = {
                    'asm0.x600002f': function ()
                    {
                        return asm0.x600002f;
                    }
                };
                IComparer.prototype.ifacemap = {};
            };
            IComparer.prototype = {};
            return c;
        };
    })();
    (asm)["System.Collections.IEqualityComparer"] = (function ()
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
            function IEqualityComparer()
            {
                (IEqualityComparer.init)();
                this.constructor = IEqualityComparer;
            };
            c = IEqualityComparer;
            ct = c;
            IEqualityComparer.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IEqualityComparer.CustomAttributes = [];
                IEqualityComparer.Methods = [
                    [
                        asm0,
                        "x6000030",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x6000031",
                        "GetHashCode"
                    ]
                ];
                IEqualityComparer.BaseType = null;
                IEqualityComparer.FullName = "System.Collections.IEqualityComparer";
                IEqualityComparer.Assembly = asm;
                IEqualityComparer.Interfaces = [];
                IEqualityComparer.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(IEqualityComparer) != -1 ? t : null; } catch (e) { return false; } };
                IEqualityComparer.IsValueType = false;
                IEqualityComparer.IsPrimitive = false;
                IEqualityComparer.IsInterface = true;
                IEqualityComparer.IsGenericTypeDefinition = false;
                IEqualityComparer.IsNullable = false;
                IEqualityComparer.ArrayType = Array;
                IEqualityComparer.MetadataName = "asm0.t200000f";
                IEqualityComparer.GenericArguments = {};
                (IEqualityComparer.GenericArguments)["asm0.t200000f"] = [];
                IEqualityComparer.prototype.vtable = {
                    'asm0.x6000030': function ()
                    {
                        return asm0.x6000030;
                    },
                    'asm0.x6000031': function ()
                    {
                        return asm0.x6000031;
                    }
                };
                IEqualityComparer.prototype.ifacemap = {};
            };
            IEqualityComparer.prototype = {};
            return c;
        };
    })();
    (asm)["System.Reflection.Assembly"] = (function ()
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
            function Assembly()
            {
                (Assembly.init)();
                this.constructor = Assembly;
            };
            c = Assembly;
            ct = c;
            Assembly.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Assembly.CustomAttributes = [];
                Assembly.Methods = [
                    [
                        asm0,
                        "x6000034",
                        "get_FullName"
                    ]
                ];
                Assembly.BaseType = ((asm0)["System.Object"])();
                Assembly.FullName = "System.Reflection.Assembly";
                Assembly.Assembly = asm;
                Assembly.Interfaces = [];
                Assembly.IsInst = function (t) { return t instanceof Assembly ? t : null; };
                Assembly.IsValueType = false;
                Assembly.IsPrimitive = false;
                Assembly.IsInterface = false;
                Assembly.IsGenericTypeDefinition = false;
                Assembly.IsNullable = false;
                Assembly.ArrayType = Array;
                Assembly.MetadataName = "asm0.t2000010";
                Assembly.GenericArguments = {};
                (Assembly.GenericArguments)["asm0.t2000010"] = [];
                (Assembly.GenericArguments)["asm0.t2000002"] = [];
                Assembly.prototype.System_ReflectionAssemblyrawAsm = null;
                Assembly.prototype.vtable = {
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
                Assembly.prototype.ifacemap = {};
            };
            Assembly.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.Reflection.Assembly+jsAsm"] = (function ()
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
            function jsAsm()
            {
                (jsAsm.init)();
                this.constructor = jsAsm;
            };
            c = jsAsm;
            ct = c;
            jsAsm.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                jsAsm.CustomAttributes = [];
                jsAsm.Methods = [];
                jsAsm.BaseType = ((asm0)["System.Object"])();
                jsAsm.FullName = "System.Reflection.Assembly+jsAsm";
                jsAsm.Assembly = asm;
                jsAsm.Interfaces = [];
                jsAsm.IsInst = function (t) { return t instanceof jsAsm ? t : null; };
                jsAsm.IsValueType = false;
                jsAsm.IsPrimitive = false;
                jsAsm.IsInterface = false;
                jsAsm.IsGenericTypeDefinition = false;
                jsAsm.IsNullable = false;
                jsAsm.ArrayType = Array;
                jsAsm.MetadataName = "asm0.t2000011";
                jsAsm.GenericArguments = {};
                (jsAsm.GenericArguments)["asm0.t2000011"] = [];
                (jsAsm.GenericArguments)["asm0.t2000002"] = [];
                jsAsm.prototype.FullName = null;
                jsAsm.prototype.ManagedInstance = null;
                jsAsm.prototype.vtable = {
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
                jsAsm.prototype.ifacemap = {};
            };
            jsAsm.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.Reflection.ICustomAttributeProvider"] = (function ()
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
            function ICustomAttributeProvider()
            {
                (ICustomAttributeProvider.init)();
                this.constructor = ICustomAttributeProvider;
            };
            c = ICustomAttributeProvider;
            ct = c;
            ICustomAttributeProvider.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                ICustomAttributeProvider.CustomAttributes = [];
                ICustomAttributeProvider.Methods = [
                    [
                        asm0,
                        "x6000036",
                        "GetCustomAttributes"
                    ],
                    [
                        asm0,
                        "x6000037",
                        "GetCustomAttributes"
                    ],
                    [
                        asm0,
                        "x6000038",
                        "IsDefined"
                    ]
                ];
                ICustomAttributeProvider.BaseType = null;
                ICustomAttributeProvider.FullName = "System.Reflection.ICustomAttributeProvider";
                ICustomAttributeProvider.Assembly = asm;
                ICustomAttributeProvider.Interfaces = [];
                ICustomAttributeProvider.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(ICustomAttributeProvider) != -1 ? t : null; } catch (e) { return false; } };
                ICustomAttributeProvider.IsValueType = false;
                ICustomAttributeProvider.IsPrimitive = false;
                ICustomAttributeProvider.IsInterface = true;
                ICustomAttributeProvider.IsGenericTypeDefinition = false;
                ICustomAttributeProvider.IsNullable = false;
                ICustomAttributeProvider.ArrayType = Array;
                ICustomAttributeProvider.MetadataName = "asm0.t2000012";
                ICustomAttributeProvider.GenericArguments = {};
                (ICustomAttributeProvider.GenericArguments)["asm0.t2000012"] = [];
                ICustomAttributeProvider.prototype.vtable = {
                    'asm0.x6000036': function ()
                    {
                        return asm0.x6000036;
                    },
                    'asm0.x6000037': function ()
                    {
                        return asm0.x6000037;
                    },
                    'asm0.x6000038': function ()
                    {
                        return asm0.x6000038;
                    }
                };
                ICustomAttributeProvider.prototype.ifacemap = {};
            };
            ICustomAttributeProvider.prototype = {};
            return c;
        };
    })();
    (asm)["System.Reflection.MemberInfo"] = (function ()
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
            function MemberInfo()
            {
                (MemberInfo.init)();
                this.constructor = MemberInfo;
            };
            c = MemberInfo;
            ct = c;
            MemberInfo.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                MemberInfo.CustomAttributes = [];
                MemberInfo.Methods = [
                    [
                        asm0,
                        "x6000039",
                        "GetCustomAttributes"
                    ],
                    [
                        asm0,
                        "x600003a",
                        "GetCustomAttributes"
                    ],
                    [
                        asm0,
                        "x600003b",
                        "IsDefined"
                    ],
                    [
                        asm0,
                        "x600003d",
                        "get_Name"
                    ]
                ];
                MemberInfo.BaseType = ((asm0)["System.Object"])();
                MemberInfo.FullName = "System.Reflection.MemberInfo";
                MemberInfo.Assembly = asm;
                MemberInfo.Interfaces = [
                    ((asm0)["System.Reflection.ICustomAttributeProvider"])()
                ];
                MemberInfo.IsInst = function (t) { return t instanceof MemberInfo ? t : null; };
                MemberInfo.IsValueType = false;
                MemberInfo.IsPrimitive = false;
                MemberInfo.IsInterface = false;
                MemberInfo.IsGenericTypeDefinition = false;
                MemberInfo.IsNullable = false;
                MemberInfo.ArrayType = Array;
                MemberInfo.MetadataName = "asm0.t2000013";
                MemberInfo.GenericArguments = {};
                (MemberInfo.GenericArguments)["asm0.t2000013"] = [];
                (MemberInfo.GenericArguments)["asm0.t2000002"] = [];
                MemberInfo.prototype.vtable = {
                    'asm0.x6000039': function ()
                    {
                        return asm0.x6000039;
                    },
                    'asm0.x600003a': function ()
                    {
                        return asm0.x600003a;
                    },
                    'asm0.x600003b': function ()
                    {
                        return asm0.x600003b;
                    },
                    'asm0.x600003d': function ()
                    {
                        return asm0.x600003d;
                    },
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
                MemberInfo.prototype.ifacemap = {};
                tree_set([
                    ((asm0)["System.Reflection.ICustomAttributeProvider"])()
                ],MemberInfo.prototype.ifacemap,{
                    'x6000036': function ()
                    {
                        return asm0.x6000039;
                    },
                    'x6000037': function ()
                    {
                        return asm0.x600003a;
                    },
                    'x6000038': function ()
                    {
                        return asm0.x600003b;
                    }
                });
            };
            MemberInfo.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.Reflection.MethodInfo"] = (function ()
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
            function MethodInfo()
            {
                (MethodInfo.init)();
                this.constructor = MethodInfo;
            };
            c = MethodInfo;
            ct = c;
            MethodInfo.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                MethodInfo.CustomAttributes = [];
                MethodInfo.Methods = [
                    [
                        asm0,
                        "x6000041",
                        "GetCustomAttributes"
                    ],
                    [
                        asm0,
                        "x6000042",
                        "GetCustomAttributes"
                    ],
                    [
                        asm0,
                        "x6000043",
                        "IsDefined"
                    ],
                    [
                        asm0,
                        "x6000044",
                        "get_Name"
                    ],
                    [
                        asm0,
                        "x6000045",
                        "Invoke"
                    ]
                ];
                MethodInfo.BaseType = ((asm0)["System.Reflection.MemberInfo"])();
                MethodInfo.FullName = "System.Reflection.MethodInfo";
                MethodInfo.Assembly = asm;
                MethodInfo.Interfaces = [
                    ((asm0)["System.Reflection.ICustomAttributeProvider"])()
                ];
                MethodInfo.IsInst = function (t) { return t instanceof MethodInfo ? t : null; };
                MethodInfo.IsValueType = false;
                MethodInfo.IsPrimitive = false;
                MethodInfo.IsInterface = false;
                MethodInfo.IsGenericTypeDefinition = false;
                MethodInfo.IsNullable = false;
                MethodInfo.ArrayType = Array;
                MethodInfo.MetadataName = "asm0.t2000014";
                MethodInfo.GenericArguments = {};
                (MethodInfo.GenericArguments)["asm0.t2000014"] = [];
                (MethodInfo.GenericArguments)["asm0.t2000013"] = [];
                (MethodInfo.GenericArguments)["asm0.t2000002"] = [];
                MethodInfo.prototype.System_ReflectionMethodInfomtd = null;
                MethodInfo.prototype.vtable = {
                    'asm0.x6000039': function ()
                    {
                        return asm0.x6000041;
                    },
                    'asm0.x600003a': function ()
                    {
                        return asm0.x6000042;
                    },
                    'asm0.x600003b': function ()
                    {
                        return asm0.x6000043;
                    },
                    'asm0.x600003d': function ()
                    {
                        return asm0.x6000044;
                    },
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
                MethodInfo.prototype.ifacemap = {};
                tree_set([
                    ((asm0)["System.Reflection.ICustomAttributeProvider"])()
                ],MethodInfo.prototype.ifacemap,{
                    'x6000036': function ()
                    {
                        return asm0.x6000041;
                    },
                    'x6000037': function ()
                    {
                        return asm0.x6000042;
                    },
                    'x6000038': function ()
                    {
                        return asm0.x6000043;
                    }
                });
            };
            MethodInfo.prototype = new (((asm0)["System.Reflection.MemberInfo"])())();
            return c;
        };
    })();
    (asm)["System.Attribute"] = (function ()
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
            function Attribute()
            {
                (Attribute.init)();
                this.constructor = Attribute;
            };
            c = Attribute;
            ct = c;
            Attribute.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Attribute.CustomAttributes = [
                    [
                        ((asm0)["System.AttributeUsageAttribute"])(),
                        asm0.x6000054,
                        [
                            (32767|0)
                        ]
                    ]
                ];
                Attribute.Methods = [];
                Attribute.BaseType = ((asm0)["System.Object"])();
                Attribute.FullName = "System.Attribute";
                Attribute.Assembly = asm;
                Attribute.Interfaces = [];
                Attribute.IsInst = function (t) { return t instanceof Attribute ? t : null; };
                Attribute.IsValueType = false;
                Attribute.IsPrimitive = false;
                Attribute.IsInterface = false;
                Attribute.IsGenericTypeDefinition = false;
                Attribute.IsNullable = false;
                Attribute.ArrayType = Array;
                Attribute.MetadataName = "asm0.t2000015";
                Attribute.GenericArguments = {};
                (Attribute.GenericArguments)["asm0.t2000015"] = [];
                (Attribute.GenericArguments)["asm0.t2000002"] = [];
                Attribute.prototype.vtable = {
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
                Attribute.prototype.ifacemap = {};
            };
            Attribute.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.Runtime.CompilerServices.InternalsVisibleToAttribute"] = (function ()
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
            function InternalsVisibleToAttribute()
            {
                (InternalsVisibleToAttribute.init)();
                this.constructor = InternalsVisibleToAttribute;
            };
            c = InternalsVisibleToAttribute;
            ct = c;
            InternalsVisibleToAttribute.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                InternalsVisibleToAttribute.CustomAttributes = [
                    [
                        ((asm0)["System.AttributeUsageAttribute"])(),
                        asm0.x6000054,
                        [
                            (1|0)
                        ],
                        {
                            'Inherited': [
                                ((asm0)["System.Boolean"])(),
                                false
                            ]
                        }
                    ]
                ];
                InternalsVisibleToAttribute.Methods = [
                    [
                        asm0,
                        "x6000049",
                        "get_AssemblyName"
                    ],
                    [
                        asm0,
                        "x600004a",
                        "get_AllInternalsVisible"
                    ],
                    [
                        asm0,
                        "x600004b",
                        "set_AllInternalsVisible"
                    ]
                ];
                InternalsVisibleToAttribute.BaseType = ((asm0)["System.Attribute"])();
                InternalsVisibleToAttribute.FullName = "System.Runtime.CompilerServices.InternalsVisibleToAttribute";
                InternalsVisibleToAttribute.Assembly = asm;
                InternalsVisibleToAttribute.Interfaces = [];
                InternalsVisibleToAttribute.IsInst = function (t) { return t instanceof InternalsVisibleToAttribute ? t : null; };
                InternalsVisibleToAttribute.IsValueType = false;
                InternalsVisibleToAttribute.IsPrimitive = false;
                InternalsVisibleToAttribute.IsInterface = false;
                InternalsVisibleToAttribute.IsGenericTypeDefinition = false;
                InternalsVisibleToAttribute.IsNullable = false;
                InternalsVisibleToAttribute.ArrayType = Array;
                InternalsVisibleToAttribute.MetadataName = "asm0.t2000016";
                InternalsVisibleToAttribute.GenericArguments = {};
                (InternalsVisibleToAttribute.GenericArguments)["asm0.t2000016"] = [];
                (InternalsVisibleToAttribute.GenericArguments)["asm0.t2000015"] = [];
                (InternalsVisibleToAttribute.GenericArguments)["asm0.t2000002"] = [];
                InternalsVisibleToAttribute.prototype.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName = null;
                InternalsVisibleToAttribute.prototype.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = false;
                InternalsVisibleToAttribute.prototype.vtable = {
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
                InternalsVisibleToAttribute.prototype.ifacemap = {};
            };
            InternalsVisibleToAttribute.prototype = new (((asm0)["System.Attribute"])())();
            return c;
        };
    })();
    (asm)["System.Enum"] = (function ()
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
            function Enum()
            {
                (Enum.init)();
                this.constructor = Enum;
            };
            c = Enum;
            ct = c;
            Enum.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Enum.CustomAttributes = [];
                Enum.Methods = [];
                Enum.BaseType = ((asm0)["System.ValueType"])();
                Enum.FullName = "System.Enum";
                Enum.Assembly = asm;
                Enum.Interfaces = [];
                Enum.IsInst = function (t) { return t instanceof Enum ? t : null; };
                Enum.IsValueType = false;
                Enum.IsPrimitive = false;
                Enum.IsInterface = false;
                Enum.IsGenericTypeDefinition = false;
                Enum.IsNullable = false;
                Enum.ArrayType = Array;
                Enum.MetadataName = "asm0.t2000017";
                Enum.GenericArguments = {};
                (Enum.GenericArguments)["asm0.t2000017"] = [];
                (Enum.GenericArguments)["asm0.t2000006"] = [];
                (Enum.GenericArguments)["asm0.t2000002"] = [];
                Enum.prototype.vtable = {
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
                Enum.prototype.ifacemap = {};
            };
            Enum.prototype = {};
            return c;
        };
    })();
    (asm)["System.Runtime.CompilerServices.MethodCodeType"] = (function ()
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
            function MethodCodeType()
            {
                (MethodCodeType.init)();
                this.constructor = MethodCodeType;
            };
            c = MethodCodeType;
            ct = c;
            MethodCodeType.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                MethodCodeType.IL = new (((asm0)["System.Runtime.CompilerServices.MethodCodeType"])())();
                MethodCodeType.Native = new (((asm0)["System.Runtime.CompilerServices.MethodCodeType"])())();
                MethodCodeType.OPTIL = new (((asm0)["System.Runtime.CompilerServices.MethodCodeType"])())();
                MethodCodeType.Runtime = new (((asm0)["System.Runtime.CompilerServices.MethodCodeType"])())();
                MethodCodeType.CustomAttributes = [];
                MethodCodeType.Methods = [];
                MethodCodeType.BaseType = ((asm0)["System.Enum"])();
                MethodCodeType.FullName = "System.Runtime.CompilerServices.MethodCodeType";
                MethodCodeType.Assembly = asm;
                MethodCodeType.Interfaces = [];
                MethodCodeType.IsInst = function (t) { return t instanceof MethodCodeType ? t : null; };
                MethodCodeType.IsValueType = true;
                MethodCodeType.IsPrimitive = false;
                MethodCodeType.IsInterface = false;
                MethodCodeType.IsGenericTypeDefinition = false;
                MethodCodeType.IsNullable = false;
                MethodCodeType.ArrayType = Array;
                MethodCodeType.MetadataName = "asm0.t2000018";
                MethodCodeType.GenericArguments = {};
                (MethodCodeType.GenericArguments)["asm0.t2000018"] = [];
                (MethodCodeType.GenericArguments)["asm0.t2000017"] = [];
                (MethodCodeType.GenericArguments)["asm0.t2000006"] = [];
                (MethodCodeType.GenericArguments)["asm0.t2000002"] = [];
                MethodCodeType.prototype.value__ = 0;
                MethodCodeType.prototype.vtable = {
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
                MethodCodeType.prototype.ifacemap = {};
            };
            MethodCodeType.prototype = new (((asm0)["System.Enum"])())();
            (((asm0)["System.Enum"])().init)();
            return c;
        };
    })();
    (asm)["System.Runtime.CompilerServices.MethodImplAttribute"] = (function ()
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
            function MethodImplAttribute()
            {
                (MethodImplAttribute.init)();
                this.constructor = MethodImplAttribute;
            };
            c = MethodImplAttribute;
            ct = c;
            MethodImplAttribute.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                MethodImplAttribute.CustomAttributes = [
                    [
                        ((asm0)["System.AttributeUsageAttribute"])(),
                        asm0.x6000054,
                        [
                            (96|0)
                        ],
                        {
                            'Inherited': [
                                ((asm0)["System.Boolean"])(),
                                false
                            ]
                        }
                    ]
                ];
                MethodImplAttribute.Methods = [
                    [
                        asm0,
                        "x6000051",
                        "get_Value"
                    ]
                ];
                MethodImplAttribute.BaseType = ((asm0)["System.Attribute"])();
                MethodImplAttribute.FullName = "System.Runtime.CompilerServices.MethodImplAttribute";
                MethodImplAttribute.Assembly = asm;
                MethodImplAttribute.Interfaces = [];
                MethodImplAttribute.IsInst = function (t) { return t instanceof MethodImplAttribute ? t : null; };
                MethodImplAttribute.IsValueType = false;
                MethodImplAttribute.IsPrimitive = false;
                MethodImplAttribute.IsInterface = false;
                MethodImplAttribute.IsGenericTypeDefinition = false;
                MethodImplAttribute.IsNullable = false;
                MethodImplAttribute.ArrayType = Array;
                MethodImplAttribute.MetadataName = "asm0.t2000019";
                MethodImplAttribute.GenericArguments = {};
                (MethodImplAttribute.GenericArguments)["asm0.t2000019"] = [];
                (MethodImplAttribute.GenericArguments)["asm0.t2000015"] = [];
                (MethodImplAttribute.GenericArguments)["asm0.t2000002"] = [];
                MethodImplAttribute.prototype.System_Runtime_CompilerServicesMethodImplAttribute_val = new (((asm0)["System.Runtime.CompilerServices.MethodImplOptions"])())();
                MethodImplAttribute.prototype.MethodCodeType = new (((asm0)["System.Runtime.CompilerServices.MethodCodeType"])())();
                MethodImplAttribute.prototype.vtable = {
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
                MethodImplAttribute.prototype.ifacemap = {};
            };
            MethodImplAttribute.prototype = new (((asm0)["System.Attribute"])())();
            return c;
        };
    })();
    (asm)["System.Runtime.CompilerServices.MethodImplOptions"] = (function ()
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
            function MethodImplOptions()
            {
                (MethodImplOptions.init)();
                this.constructor = MethodImplOptions;
            };
            c = MethodImplOptions;
            ct = c;
            MethodImplOptions.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                MethodImplOptions.Unmanaged = new (((asm0)["System.Runtime.CompilerServices.MethodImplOptions"])())();
                MethodImplOptions.ForwardRef = new (((asm0)["System.Runtime.CompilerServices.MethodImplOptions"])())();
                MethodImplOptions.InternalCall = new (((asm0)["System.Runtime.CompilerServices.MethodImplOptions"])())();
                MethodImplOptions.Synchronized = new (((asm0)["System.Runtime.CompilerServices.MethodImplOptions"])())();
                MethodImplOptions.NoInlining = new (((asm0)["System.Runtime.CompilerServices.MethodImplOptions"])())();
                MethodImplOptions.PreserveSig = new (((asm0)["System.Runtime.CompilerServices.MethodImplOptions"])())();
                MethodImplOptions.NoOptimization = new (((asm0)["System.Runtime.CompilerServices.MethodImplOptions"])())();
                MethodImplOptions.CustomAttributes = [
                    [
                        ((asm0)["System.FlagsAttribute"])(),
                        asm0.x600008b
                    ]
                ];
                MethodImplOptions.Methods = [];
                MethodImplOptions.BaseType = ((asm0)["System.Enum"])();
                MethodImplOptions.FullName = "System.Runtime.CompilerServices.MethodImplOptions";
                MethodImplOptions.Assembly = asm;
                MethodImplOptions.Interfaces = [];
                MethodImplOptions.IsInst = function (t) { return t instanceof MethodImplOptions ? t : null; };
                MethodImplOptions.IsValueType = true;
                MethodImplOptions.IsPrimitive = false;
                MethodImplOptions.IsInterface = false;
                MethodImplOptions.IsGenericTypeDefinition = false;
                MethodImplOptions.IsNullable = false;
                MethodImplOptions.ArrayType = Array;
                MethodImplOptions.MetadataName = "asm0.t200001a";
                MethodImplOptions.GenericArguments = {};
                (MethodImplOptions.GenericArguments)["asm0.t200001a"] = [];
                (MethodImplOptions.GenericArguments)["asm0.t2000017"] = [];
                (MethodImplOptions.GenericArguments)["asm0.t2000006"] = [];
                (MethodImplOptions.GenericArguments)["asm0.t2000002"] = [];
                MethodImplOptions.prototype.value__ = 0;
                MethodImplOptions.prototype.vtable = {
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
                MethodImplOptions.prototype.ifacemap = {};
            };
            MethodImplOptions.prototype = new (((asm0)["System.Enum"])())();
            (((asm0)["System.Enum"])().init)();
            return c;
        };
    })();
    (asm)["System.Activator"] = (function ()
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
            function Activator()
            {
                (Activator.init)();
                this.constructor = Activator;
            };
            c = Activator;
            ct = c;
            Activator.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Activator.CustomAttributes = [];
                Activator.Methods = [];
                Activator.BaseType = ((asm0)["System.Object"])();
                Activator.FullName = "System.Activator";
                Activator.Assembly = asm;
                Activator.Interfaces = [];
                Activator.IsInst = function (t) { return t instanceof Activator ? t : null; };
                Activator.IsValueType = false;
                Activator.IsPrimitive = false;
                Activator.IsInterface = false;
                Activator.IsGenericTypeDefinition = false;
                Activator.IsNullable = false;
                Activator.ArrayType = Array;
                Activator.MetadataName = "asm0.t200001b";
                Activator.GenericArguments = {};
                (Activator.GenericArguments)["asm0.t200001b"] = [];
                (Activator.GenericArguments)["asm0.t2000002"] = [];
                Activator.prototype.vtable = {
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
                Activator.prototype.ifacemap = {};
            };
            Activator.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.AttributeUsageAttribute"] = (function ()
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
            function AttributeUsageAttribute()
            {
                (AttributeUsageAttribute.init)();
                this.constructor = AttributeUsageAttribute;
            };
            c = AttributeUsageAttribute;
            ct = c;
            AttributeUsageAttribute.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                AttributeUsageAttribute.CustomAttributes = [
                    [
                        ((asm0)["System.AttributeUsageAttribute"])(),
                        asm0.x6000054,
                        [
                            (4|0)
                        ],
                        {
                            'Inherited': [
                                ((asm0)["System.Boolean"])(),
                                true
                            ]
                        }
                    ]
                ];
                AttributeUsageAttribute.Methods = [
                    [
                        asm0,
                        "x6000055",
                        "get_ValidOn"
                    ],
                    [
                        asm0,
                        "x6000057",
                        "get_Inherited"
                    ],
                    [
                        asm0,
                        "x6000058",
                        "set_Inherited"
                    ],
                    [
                        asm0,
                        "x6000059",
                        "get_AllowMultiple"
                    ],
                    [
                        asm0,
                        "x600005a",
                        "set_AllowMultiple"
                    ]
                ];
                AttributeUsageAttribute.BaseType = ((asm0)["System.Attribute"])();
                AttributeUsageAttribute.FullName = "System.AttributeUsageAttribute";
                AttributeUsageAttribute.Assembly = asm;
                AttributeUsageAttribute.Interfaces = [];
                AttributeUsageAttribute.IsInst = function (t) { return t instanceof AttributeUsageAttribute ? t : null; };
                AttributeUsageAttribute.IsValueType = false;
                AttributeUsageAttribute.IsPrimitive = false;
                AttributeUsageAttribute.IsInterface = false;
                AttributeUsageAttribute.IsGenericTypeDefinition = false;
                AttributeUsageAttribute.IsNullable = false;
                AttributeUsageAttribute.ArrayType = Array;
                AttributeUsageAttribute.MetadataName = "asm0.t200001c";
                AttributeUsageAttribute.GenericArguments = {};
                (AttributeUsageAttribute.GenericArguments)["asm0.t200001c"] = [];
                (AttributeUsageAttribute.GenericArguments)["asm0.t2000015"] = [];
                (AttributeUsageAttribute.GenericArguments)["asm0.t2000002"] = [];
                (AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = new (((asm0)["System.AttributeTargets"])())();
                (AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = false;
                (AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"] = false;
                AttributeUsageAttribute.prototype.vtable = {
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
                AttributeUsageAttribute.prototype.ifacemap = {};
            };
            AttributeUsageAttribute.prototype = new (((asm0)["System.Attribute"])())();
            return c;
        };
    })();
    (asm)["System.Boolean"] = (function ()
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
            function $$Boolean()
            {
                ($$Boolean.init)();
                this.constructor = $$Boolean;
            };
            c = $$Boolean;
            ct = c;
            $$Boolean.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                $$Boolean.CustomAttributes = [];
                $$Boolean.Methods = [
                    [
                        asm0,
                        "x600005b",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x600005c",
                        "Equals"
                    ]
                ];
                $$Boolean.BaseType = ((asm0)["System.ValueType"])();
                $$Boolean.FullName = "System.Boolean";
                $$Boolean.Assembly = asm;
                $$Boolean.Interfaces = [];
                $$Boolean.IsInst = function (t) { try { return t.type == $$Boolean ? t : null; } catch (e) { return false; } };
                $$Boolean.IsValueType = true;
                $$Boolean.IsPrimitive = true;
                $$Boolean.IsInterface = false;
                $$Boolean.IsGenericTypeDefinition = false;
                $$Boolean.IsNullable = false;
                $$Boolean.ArrayType = Array;
                $$Boolean.MetadataName = "asm0.t200001d";
                $$Boolean.GenericArguments = {};
                ($$Boolean.GenericArguments)["asm0.t200001d"] = [];
                ($$Boolean.GenericArguments)["asm0.t2000006"] = [];
                ($$Boolean.GenericArguments)["asm0.t2000002"] = [];
                $$Boolean.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600005b;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x600005c;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                $$Boolean.prototype.ifacemap = {};
            };
            $$Boolean.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.Byte"] = (function ()
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
            function Byte()
            {
                (Byte.init)();
                this.constructor = Byte;
            };
            c = Byte;
            ct = c;
            Byte.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Byte.MinValue = 0;
                Byte.MaxValue = 0;
                Byte.CustomAttributes = [];
                Byte.Methods = [
                    [
                        asm0,
                        "x600006a",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x600006b",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x600006c",
                        "GetHashCode"
                    ]
                ];
                Byte.BaseType = ((asm0)["System.ValueType"])();
                Byte.FullName = "System.Byte";
                Byte.Assembly = asm;
                Byte.Interfaces = [];
                Byte.IsInst = function (t) { try { return t.type == Byte ? t : null; } catch (e) { return false; } };
                Byte.IsValueType = true;
                Byte.IsPrimitive = true;
                Byte.IsInterface = false;
                Byte.IsGenericTypeDefinition = false;
                Byte.IsNullable = false;
                Byte.ArrayType = Uint8Array;
                Byte.MetadataName = "asm0.t2000025";
                Byte.GenericArguments = {};
                (Byte.GenericArguments)["asm0.t2000025"] = [];
                (Byte.GenericArguments)["asm0.t2000006"] = [];
                (Byte.GenericArguments)["asm0.t2000002"] = [];
                Byte.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600006a;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x600006b;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600006c;
                    }
                };
                Byte.prototype.ifacemap = {};
            };
            Byte.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.Char"] = (function ()
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
            function Char()
            {
                (Char.init)();
                this.constructor = Char;
            };
            c = Char;
            ct = c;
            Char.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Char.MinValue = 0;
                Char.MaxValue = 0;
                Char.CustomAttributes = [];
                Char.Methods = [
                    [
                        asm0,
                        "x600006d",
                        "ToString"
                    ]
                ];
                Char.BaseType = ((asm0)["System.ValueType"])();
                Char.FullName = "System.Char";
                Char.Assembly = asm;
                Char.Interfaces = [];
                Char.IsInst = function (t) { try { return t.type == Char ? t : null; } catch (e) { return false; } };
                Char.IsValueType = true;
                Char.IsPrimitive = true;
                Char.IsInterface = false;
                Char.IsGenericTypeDefinition = false;
                Char.IsNullable = false;
                Char.ArrayType = Uint16Array;
                Char.MetadataName = "asm0.t2000026";
                Char.GenericArguments = {};
                (Char.GenericArguments)["asm0.t2000026"] = [];
                (Char.GenericArguments)["asm0.t2000006"] = [];
                (Char.GenericArguments)["asm0.t2000002"] = [];
                Char.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600006d;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000016;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                Char.prototype.ifacemap = {};
            };
            Char.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.Delegate"] = (function ()
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
            function Delegate()
            {
                (Delegate.init)();
                this.constructor = Delegate;
            };
            c = Delegate;
            ct = c;
            Delegate.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Delegate.CustomAttributes = [];
                Delegate.Methods = [
                    [
                        asm0,
                        "x6000074",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x6000077",
                        "GetHashCode"
                    ]
                ];
                Delegate.BaseType = ((asm0)["System.Object"])();
                Delegate.FullName = "System.Delegate";
                Delegate.Assembly = asm;
                Delegate.Interfaces = [];
                Delegate.IsInst = function (t) { return t instanceof Delegate ? t : null; };
                Delegate.IsValueType = false;
                Delegate.IsPrimitive = false;
                Delegate.IsInterface = false;
                Delegate.IsGenericTypeDefinition = false;
                Delegate.IsNullable = false;
                Delegate.ArrayType = Array;
                Delegate.MetadataName = "asm0.t2000027";
                Delegate.GenericArguments = {};
                (Delegate.GenericArguments)["asm0.t2000027"] = [];
                (Delegate.GenericArguments)["asm0.t2000002"] = [];
                Delegate.prototype._methodPtr = null;
                Delegate.prototype._target = null;
                Delegate.prototype.vtable = {
                    'asm0.x6000072': function ()
                    {
                        return asm0.x6000072;
                    },
                    'asm0.x6000073': function ()
                    {
                        return asm0.x6000073;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000074;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000077;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
                Delegate.prototype.ifacemap = {};
            };
            Delegate.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.MulticastDelegate"] = (function ()
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
            function MulticastDelegate()
            {
                (MulticastDelegate.init)();
                this.constructor = MulticastDelegate;
            };
            c = MulticastDelegate;
            ct = c;
            MulticastDelegate.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                MulticastDelegate.CustomAttributes = [];
                MulticastDelegate.Methods = [];
                MulticastDelegate.BaseType = ((asm0)["System.Delegate"])();
                MulticastDelegate.FullName = "System.MulticastDelegate";
                MulticastDelegate.Assembly = asm;
                MulticastDelegate.Interfaces = [];
                MulticastDelegate.IsInst = function (t) { return t instanceof MulticastDelegate ? t : null; };
                MulticastDelegate.IsValueType = false;
                MulticastDelegate.IsPrimitive = false;
                MulticastDelegate.IsInterface = false;
                MulticastDelegate.IsGenericTypeDefinition = false;
                MulticastDelegate.IsNullable = false;
                MulticastDelegate.ArrayType = Array;
                MulticastDelegate.MetadataName = "asm0.t2000028";
                MulticastDelegate.GenericArguments = {};
                (MulticastDelegate.GenericArguments)["asm0.t2000028"] = [];
                (MulticastDelegate.GenericArguments)["asm0.t2000027"] = [];
                (MulticastDelegate.GenericArguments)["asm0.t2000002"] = [];
                MulticastDelegate.prototype._invocationList = null;
                MulticastDelegate.prototype._methodPtr = null;
                MulticastDelegate.prototype._target = null;
                MulticastDelegate.prototype.vtable = {
                    'asm0.x6000073': function ()
                    {
                        return asm0.x600007c;
                    },
                    'asm0.x6000072': function ()
                    {
                        return asm0.x600007d;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000074;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000077;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
                MulticastDelegate.prototype.ifacemap = {};
            };
            MulticastDelegate.prototype = new (((asm0)["System.Delegate"])())();
            return c;
        };
    })();
    (asm)["System.Comparison`1"] = (function ()
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
            function Comparison_1()
            {
                (Comparison_1.init)();
                this.constructor = Comparison_1;
            };
            c = Comparison_1;
            tree_set([
                T
            ],ct,c);
            Comparison_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Comparison_1.CustomAttributes = [];
                Comparison_1.Methods = [
                    [
                        asm0,
                        "x6000080",
                        "Invoke"
                    ]
                ];
                Comparison_1.BaseType = ((asm0)["System.MulticastDelegate"])();
                Comparison_1.FullName = "System.Comparison`1";
                Comparison_1.Assembly = asm;
                Comparison_1.Interfaces = [];
                Comparison_1.IsInst = function (t) { return t instanceof Comparison_1 ? t : null; };
                Comparison_1.IsValueType = false;
                Comparison_1.IsPrimitive = false;
                Comparison_1.IsInterface = false;
                Comparison_1.IsGenericTypeDefinition = true;
                Comparison_1.IsNullable = false;
                Comparison_1.ArrayType = Array;
                Comparison_1.MetadataName = "asm0.t2000029";
                Comparison_1.GenericArguments = {};
                (Comparison_1.GenericArguments)["asm0.t2000029"] = [
                    T
                ];
                (Comparison_1.GenericArguments)["asm0.t2000028"] = [];
                (Comparison_1.GenericArguments)["asm0.t2000027"] = [];
                (Comparison_1.GenericArguments)["asm0.t2000002"] = [];
                Comparison_1.prototype._invocationList = null;
                Comparison_1.prototype._methodPtr = null;
                Comparison_1.prototype._target = null;
                Comparison_1.prototype.vtable = {
                    'asm0.x6000080': function ()
                    {
                        return asm0.x6000080;
                    },
                    'asm0.x6000073': function ()
                    {
                        return asm0.x600007c;
                    },
                    'asm0.x6000072': function ()
                    {
                        return asm0.x600007d;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000074;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000077;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
                Comparison_1.prototype.ifacemap = {};
            };
            Comparison_1.prototype = {};
            return c;
        };
    })();
    (asm)["System.Console"] = (function ()
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
            function Console()
            {
                (Console.init)();
                this.constructor = Console;
            };
            c = Console;
            ct = c;
            Console.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Console.CustomAttributes = [];
                Console.Methods = [];
                Console.BaseType = ((asm0)["System.Object"])();
                Console.FullName = "System.Console";
                Console.Assembly = asm;
                Console.Interfaces = [];
                Console.IsInst = function (t) { return t instanceof Console ? t : null; };
                Console.IsValueType = false;
                Console.IsPrimitive = false;
                Console.IsInterface = false;
                Console.IsGenericTypeDefinition = false;
                Console.IsNullable = false;
                Console.ArrayType = Array;
                Console.MetadataName = "asm0.t200002a";
                Console.GenericArguments = {};
                (Console.GenericArguments)["asm0.t200002a"] = [];
                (Console.GenericArguments)["asm0.t2000002"] = [];
                Console.prototype.vtable = {
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
                Console.prototype.ifacemap = {};
            };
            Console.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.IComparable`1"] = (function ()
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
            function IComparable_1()
            {
                (IComparable_1.init)();
                this.constructor = IComparable_1;
            };
            c = IComparable_1;
            tree_set([
                T
            ],ct,c);
            IComparable_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IComparable_1.CustomAttributes = [];
                IComparable_1.Methods = [
                    [
                        asm0,
                        "x6000084",
                        "CompareTo"
                    ]
                ];
                IComparable_1.BaseType = null;
                IComparable_1.FullName = "System.IComparable`1";
                IComparable_1.Assembly = asm;
                IComparable_1.Interfaces = [];
                IComparable_1.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(IComparable_1) != -1 ? t : null; } catch (e) { return false; } };
                IComparable_1.IsValueType = false;
                IComparable_1.IsPrimitive = false;
                IComparable_1.IsInterface = true;
                IComparable_1.IsGenericTypeDefinition = true;
                IComparable_1.IsNullable = false;
                IComparable_1.ArrayType = Array;
                IComparable_1.MetadataName = "asm0.t200002b";
                IComparable_1.GenericArguments = {};
                (IComparable_1.GenericArguments)["asm0.t200002b"] = [
                    T
                ];
                IComparable_1.prototype.vtable = {
                    'asm0.x6000084': function ()
                    {
                        return asm0.x6000084;
                    }
                };
                IComparable_1.prototype.ifacemap = {};
            };
            IComparable_1.prototype = {};
            return c;
        };
    })();
    (asm)["System.IComparable"] = (function ()
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
            function IComparable()
            {
                (IComparable.init)();
                this.constructor = IComparable;
            };
            c = IComparable;
            ct = c;
            IComparable.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IComparable.CustomAttributes = [];
                IComparable.Methods = [
                    [
                        asm0,
                        "x6000085",
                        "CompareTo"
                    ]
                ];
                IComparable.BaseType = null;
                IComparable.FullName = "System.IComparable";
                IComparable.Assembly = asm;
                IComparable.Interfaces = [];
                IComparable.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(IComparable) != -1 ? t : null; } catch (e) { return false; } };
                IComparable.IsValueType = false;
                IComparable.IsPrimitive = false;
                IComparable.IsInterface = true;
                IComparable.IsGenericTypeDefinition = false;
                IComparable.IsNullable = false;
                IComparable.ArrayType = Array;
                IComparable.MetadataName = "asm0.t200002c";
                IComparable.GenericArguments = {};
                (IComparable.GenericArguments)["asm0.t200002c"] = [];
                IComparable.prototype.vtable = {
                    'asm0.x6000085': function ()
                    {
                        return asm0.x6000085;
                    }
                };
                IComparable.prototype.ifacemap = {};
            };
            IComparable.prototype = {};
            return c;
        };
    })();
    (asm)["System.Double"] = (function ()
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
            function Double()
            {
                (Double.init)();
                this.constructor = Double;
            };
            c = Double;
            ct = c;
            Double.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Double.Epsilon = 0;
                Double.MaxValue = 0;
                Double.MinValue = 0;
                Double.NaN = 0;
                Double.NegativeInfinity = 0;
                Double.PositiveInfinity = 0;
                Double.CustomAttributes = [];
                Double.Methods = [
                    [
                        asm0,
                        "x6000086",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x6000087",
                        "CompareTo"
                    ],
                    [
                        asm0,
                        "x6000088",
                        "CompareTo"
                    ]
                ];
                Double.BaseType = ((asm0)["System.ValueType"])();
                Double.FullName = "System.Double";
                Double.Assembly = asm;
                Double.Interfaces = [
                    ((asm0)["System.IComparable`1"])(((asm0)["System.Double"])()),
                    ((asm0)["System.IComparable"])()
                ];
                Double.IsInst = function (t) { try { return t.type == Double ? t : null; } catch (e) { return false; } };
                Double.IsValueType = true;
                Double.IsPrimitive = true;
                Double.IsInterface = false;
                Double.IsGenericTypeDefinition = false;
                Double.IsNullable = false;
                Double.ArrayType = Float64Array;
                Double.MetadataName = "asm0.t200002d";
                Double.GenericArguments = {};
                (Double.GenericArguments)["asm0.t200002d"] = [];
                (Double.GenericArguments)["asm0.t2000006"] = [];
                (Double.GenericArguments)["asm0.t2000002"] = [];
                Double.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000086;
                    },
                    'asm0.x6000087': function ()
                    {
                        return asm0.x6000087;
                    },
                    'asm0.x6000088': function ()
                    {
                        return asm0.x6000088;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000016;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                Double.prototype.ifacemap = {};
                tree_set([
                    ((asm0)["System.IComparable`1"])(((asm0)["System.Double"])()),
                    ((asm0)["System.Double"])()
                ],Double.prototype.ifacemap,{
                    'x6000084': function ()
                    {
                        return asm0.x6000088;
                    }
                });
                tree_set([
                    ((asm0)["System.IComparable"])()
                ],Double.prototype.ifacemap,{
                    'x6000085': function ()
                    {
                        return asm0.x6000087;
                    }
                });
            };
            Double.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.Environment"] = (function ()
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
            function Environment()
            {
                (Environment.init)();
                this.constructor = Environment;
            };
            c = Environment;
            ct = c;
            Environment.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Environment.CustomAttributes = [];
                Environment.Methods = [];
                Environment.BaseType = ((asm0)["System.Object"])();
                Environment.FullName = "System.Environment";
                Environment.Assembly = asm;
                Environment.Interfaces = [];
                Environment.IsInst = function (t) { return t instanceof Environment ? t : null; };
                Environment.IsValueType = false;
                Environment.IsPrimitive = false;
                Environment.IsInterface = false;
                Environment.IsGenericTypeDefinition = false;
                Environment.IsNullable = false;
                Environment.ArrayType = Array;
                Environment.MetadataName = "asm0.t200002e";
                Environment.GenericArguments = {};
                (Environment.GenericArguments)["asm0.t200002e"] = [];
                (Environment.GenericArguments)["asm0.t2000002"] = [];
                Environment.prototype.vtable = {
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
                Environment.prototype.ifacemap = {};
            };
            Environment.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.FlagsAttribute"] = (function ()
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
            function FlagsAttribute()
            {
                (FlagsAttribute.init)();
                this.constructor = FlagsAttribute;
            };
            c = FlagsAttribute;
            ct = c;
            FlagsAttribute.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                FlagsAttribute.CustomAttributes = [
                    [
                        ((asm0)["System.AttributeUsageAttribute"])(),
                        asm0.x6000054,
                        [
                            (16|0)
                        ],
                        {
                            'Inherited': [
                                ((asm0)["System.Boolean"])(),
                                false
                            ]
                        }
                    ]
                ];
                FlagsAttribute.Methods = [];
                FlagsAttribute.BaseType = ((asm0)["System.Attribute"])();
                FlagsAttribute.FullName = "System.FlagsAttribute";
                FlagsAttribute.Assembly = asm;
                FlagsAttribute.Interfaces = [];
                FlagsAttribute.IsInst = function (t) { return t instanceof FlagsAttribute ? t : null; };
                FlagsAttribute.IsValueType = false;
                FlagsAttribute.IsPrimitive = false;
                FlagsAttribute.IsInterface = false;
                FlagsAttribute.IsGenericTypeDefinition = false;
                FlagsAttribute.IsNullable = false;
                FlagsAttribute.ArrayType = Array;
                FlagsAttribute.MetadataName = "asm0.t200002f";
                FlagsAttribute.GenericArguments = {};
                (FlagsAttribute.GenericArguments)["asm0.t200002f"] = [];
                (FlagsAttribute.GenericArguments)["asm0.t2000015"] = [];
                (FlagsAttribute.GenericArguments)["asm0.t2000002"] = [];
                FlagsAttribute.prototype.vtable = {
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
                FlagsAttribute.prototype.ifacemap = {};
            };
            FlagsAttribute.prototype = new (((asm0)["System.Attribute"])())();
            return c;
        };
    })();
    (asm)["System.Func`2"] = (function ()
    {
        var ct;
        ct = {};
        return function (T,TResult)
        {
            var c;
            var initialized;
            c = tree_get([
                T,
                TResult
            ],ct);
            
            if (c){
                return c;
            }
            initialized = false;;
            function Func_2()
            {
                (Func_2.init)();
                this.constructor = Func_2;
            };
            c = Func_2;
            tree_set([
                T,
                TResult
            ],ct,c);
            Func_2.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Func_2.CustomAttributes = [];
                Func_2.Methods = [
                    [
                        asm0,
                        "x600008d",
                        "Invoke"
                    ]
                ];
                Func_2.BaseType = ((asm0)["System.MulticastDelegate"])();
                Func_2.FullName = "System.Func`2";
                Func_2.Assembly = asm;
                Func_2.Interfaces = [];
                Func_2.IsInst = function (t) { return t instanceof Func_2 ? t : null; };
                Func_2.IsValueType = false;
                Func_2.IsPrimitive = false;
                Func_2.IsInterface = false;
                Func_2.IsGenericTypeDefinition = true;
                Func_2.IsNullable = false;
                Func_2.ArrayType = Array;
                Func_2.MetadataName = "asm0.t2000030";
                Func_2.GenericArguments = {};
                (Func_2.GenericArguments)["asm0.t2000030"] = [
                    T,
                    TResult
                ];
                (Func_2.GenericArguments)["asm0.t2000028"] = [];
                (Func_2.GenericArguments)["asm0.t2000027"] = [];
                (Func_2.GenericArguments)["asm0.t2000002"] = [];
                Func_2.prototype._invocationList = null;
                Func_2.prototype._methodPtr = null;
                Func_2.prototype._target = null;
                Func_2.prototype.vtable = {
                    'asm0.x600008d': function ()
                    {
                        return asm0.x600008d;
                    },
                    'asm0.x6000073': function ()
                    {
                        return asm0.x600007c;
                    },
                    'asm0.x6000072': function ()
                    {
                        return asm0.x600007d;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000074;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000077;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
                Func_2.prototype.ifacemap = {};
            };
            Func_2.prototype = {};
            return c;
        };
    })();
    (asm)["System.ICloneable"] = (function ()
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
            function ICloneable()
            {
                (ICloneable.init)();
                this.constructor = ICloneable;
            };
            c = ICloneable;
            ct = c;
            ICloneable.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                ICloneable.CustomAttributes = [];
                ICloneable.Methods = [
                    [
                        asm0,
                        "x600008e",
                        "Clone"
                    ]
                ];
                ICloneable.BaseType = null;
                ICloneable.FullName = "System.ICloneable";
                ICloneable.Assembly = asm;
                ICloneable.Interfaces = [];
                ICloneable.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(ICloneable) != -1 ? t : null; } catch (e) { return false; } };
                ICloneable.IsValueType = false;
                ICloneable.IsPrimitive = false;
                ICloneable.IsInterface = true;
                ICloneable.IsGenericTypeDefinition = false;
                ICloneable.IsNullable = false;
                ICloneable.ArrayType = Array;
                ICloneable.MetadataName = "asm0.t2000031";
                ICloneable.GenericArguments = {};
                (ICloneable.GenericArguments)["asm0.t2000031"] = [];
                ICloneable.prototype.vtable = {
                    'asm0.x600008e': function ()
                    {
                        return asm0.x600008e;
                    }
                };
                ICloneable.prototype.ifacemap = {};
            };
            ICloneable.prototype = {};
            return c;
        };
    })();
    (asm)["System.IDisposable"] = (function ()
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
            function IDisposable()
            {
                (IDisposable.init)();
                this.constructor = IDisposable;
            };
            c = IDisposable;
            ct = c;
            IDisposable.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IDisposable.CustomAttributes = [];
                IDisposable.Methods = [
                    [
                        asm0,
                        "x600008f",
                        "Dispose"
                    ]
                ];
                IDisposable.BaseType = null;
                IDisposable.FullName = "System.IDisposable";
                IDisposable.Assembly = asm;
                IDisposable.Interfaces = [];
                IDisposable.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(IDisposable) != -1 ? t : null; } catch (e) { return false; } };
                IDisposable.IsValueType = false;
                IDisposable.IsPrimitive = false;
                IDisposable.IsInterface = true;
                IDisposable.IsGenericTypeDefinition = false;
                IDisposable.IsNullable = false;
                IDisposable.ArrayType = Array;
                IDisposable.MetadataName = "asm0.t2000032";
                IDisposable.GenericArguments = {};
                (IDisposable.GenericArguments)["asm0.t2000032"] = [];
                IDisposable.prototype.vtable = {
                    'asm0.x600008f': function ()
                    {
                        return asm0.x600008f;
                    }
                };
                IDisposable.prototype.ifacemap = {};
            };
            IDisposable.prototype = {};
            return c;
        };
    })();
    (asm)["System.Int16"] = (function ()
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
            function Int16()
            {
                (Int16.init)();
                this.constructor = Int16;
            };
            c = Int16;
            ct = c;
            Int16.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Int16.CustomAttributes = [];
                Int16.Methods = [
                    [
                        asm0,
                        "x6000090",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x6000091",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x6000092",
                        "GetHashCode"
                    ]
                ];
                Int16.BaseType = ((asm0)["System.ValueType"])();
                Int16.FullName = "System.Int16";
                Int16.Assembly = asm;
                Int16.Interfaces = [];
                Int16.IsInst = function (t) { try { return t.type == Int16 ? t : null; } catch (e) { return false; } };
                Int16.IsValueType = true;
                Int16.IsPrimitive = true;
                Int16.IsInterface = false;
                Int16.IsGenericTypeDefinition = false;
                Int16.IsNullable = false;
                Int16.ArrayType = Int16Array;
                Int16.MetadataName = "asm0.t2000033";
                Int16.GenericArguments = {};
                (Int16.GenericArguments)["asm0.t2000033"] = [];
                (Int16.GenericArguments)["asm0.t2000006"] = [];
                (Int16.GenericArguments)["asm0.t2000002"] = [];
                Int16.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000090;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000091;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000092;
                    }
                };
                Int16.prototype.ifacemap = {};
            };
            Int16.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.Int32"] = (function ()
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
            function Int32()
            {
                (Int32.init)();
                this.constructor = Int32;
            };
            c = Int32;
            ct = c;
            Int32.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Int32.MaxValue = 0;
                Int32.MinValue = 0;
                Int32.CustomAttributes = [];
                Int32.Methods = [
                    [
                        asm0,
                        "x6000093",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x6000095",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x6000096",
                        "CompareTo"
                    ],
                    [
                        asm0,
                        "x6000097",
                        "CompareTo"
                    ],
                    [
                        asm0,
                        "x6000098",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x6000099",
                        "GetHashCode"
                    ]
                ];
                Int32.BaseType = ((asm0)["System.ValueType"])();
                Int32.FullName = "System.Int32";
                Int32.Assembly = asm;
                Int32.Interfaces = [
                    ((asm0)["System.IComparable`1"])(((asm0)["System.Int32"])()),
                    ((asm0)["System.IComparable"])()
                ];
                Int32.IsInst = function (t) { try { return t.type == Int32 ? t : null; } catch (e) { return false; } };
                Int32.IsValueType = true;
                Int32.IsPrimitive = true;
                Int32.IsInterface = false;
                Int32.IsGenericTypeDefinition = false;
                Int32.IsNullable = false;
                Int32.ArrayType = Int32Array;
                Int32.MetadataName = "asm0.t2000034";
                Int32.GenericArguments = {};
                (Int32.GenericArguments)["asm0.t2000034"] = [];
                (Int32.GenericArguments)["asm0.t2000006"] = [];
                (Int32.GenericArguments)["asm0.t2000002"] = [];
                Int32.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000093;
                    },
                    'asm0.x6000096': function ()
                    {
                        return asm0.x6000096;
                    },
                    'asm0.x6000097': function ()
                    {
                        return asm0.x6000097;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000098;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000099;
                    }
                };
                Int32.prototype.ifacemap = {};
                tree_set([
                    ((asm0)["System.IComparable`1"])(((asm0)["System.Int32"])()),
                    ((asm0)["System.Int32"])()
                ],Int32.prototype.ifacemap,{
                    'x6000084': function ()
                    {
                        return asm0.x6000097;
                    }
                });
                tree_set([
                    ((asm0)["System.IComparable"])()
                ],Int32.prototype.ifacemap,{
                    'x6000085': function ()
                    {
                        return asm0.x6000096;
                    }
                });
            };
            Int32.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.InternalFormatting"] = (function ()
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
            function InternalFormatting()
            {
                (InternalFormatting.init)();
                this.constructor = InternalFormatting;
            };
            c = InternalFormatting;
            ct = c;
            InternalFormatting.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                InternalFormatting.CustomAttributes = [];
                InternalFormatting.Methods = [];
                InternalFormatting.BaseType = ((asm0)["System.Object"])();
                InternalFormatting.FullName = "System.InternalFormatting";
                InternalFormatting.Assembly = asm;
                InternalFormatting.Interfaces = [];
                InternalFormatting.IsInst = function (t) { return t instanceof InternalFormatting ? t : null; };
                InternalFormatting.IsValueType = false;
                InternalFormatting.IsPrimitive = false;
                InternalFormatting.IsInterface = false;
                InternalFormatting.IsGenericTypeDefinition = false;
                InternalFormatting.IsNullable = false;
                InternalFormatting.ArrayType = Array;
                InternalFormatting.MetadataName = "asm0.t2000035";
                InternalFormatting.GenericArguments = {};
                (InternalFormatting.GenericArguments)["asm0.t2000035"] = [];
                (InternalFormatting.GenericArguments)["asm0.t2000002"] = [];
                InternalFormatting.prototype.vtable = {
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
                InternalFormatting.prototype.ifacemap = {};
            };
            InternalFormatting.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.IntPtr"] = (function ()
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
            function IntPtr()
            {
                (IntPtr.init)();
                this.constructor = IntPtr;
            };
            c = IntPtr;
            ct = c;
            IntPtr.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IntPtr.CustomAttributes = [];
                IntPtr.Methods = [
                    [
                        asm0,
                        "x600009c",
                        "ToString"
                    ]
                ];
                IntPtr.BaseType = ((asm0)["System.ValueType"])();
                IntPtr.FullName = "System.IntPtr";
                IntPtr.Assembly = asm;
                IntPtr.Interfaces = [];
                IntPtr.IsInst = function (t) { try { return t.type == IntPtr ? t : null; } catch (e) { return false; } };
                IntPtr.IsValueType = true;
                IntPtr.IsPrimitive = true;
                IntPtr.IsInterface = false;
                IntPtr.IsGenericTypeDefinition = false;
                IntPtr.IsNullable = false;
                IntPtr.ArrayType = Array;
                IntPtr.MetadataName = "asm0.t2000036";
                IntPtr.GenericArguments = {};
                (IntPtr.GenericArguments)["asm0.t2000036"] = [];
                (IntPtr.GenericArguments)["asm0.t2000006"] = [];
                (IntPtr.GenericArguments)["asm0.t2000002"] = [];
                IntPtr.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600009c;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000016;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                IntPtr.prototype.ifacemap = {};
            };
            IntPtr.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.Exception"] = (function ()
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
            function Exception()
            {
                (Exception.init)();
                this.constructor = Exception;
            };
            c = Exception;
            ct = c;
            Exception.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Exception.CustomAttributes = [];
                Exception.Methods = [
                    [
                        asm0,
                        "x60000a0",
                        "get_HResult"
                    ],
                    [
                        asm0,
                        "x60000a2",
                        "get_Message"
                    ],
                    [
                        asm0,
                        "x60000a3",
                        "set_Message"
                    ],
                    [
                        asm0,
                        "x60000a4",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x60000a5",
                        "get_InnerException"
                    ],
                    [
                        asm0,
                        "x60000a6",
                        "set_InnerException"
                    ]
                ];
                Exception.BaseType = ((asm0)["System.Object"])();
                Exception.FullName = "System.Exception";
                Exception.Assembly = asm;
                Exception.Interfaces = [];
                Exception.IsInst = function (t) { return t instanceof Exception ? t : null; };
                Exception.IsValueType = false;
                Exception.IsPrimitive = false;
                Exception.IsInterface = false;
                Exception.IsGenericTypeDefinition = false;
                Exception.IsNullable = false;
                Exception.ArrayType = Array;
                Exception.MetadataName = "asm0.t2000037";
                Exception.GenericArguments = {};
                (Exception.GenericArguments)["asm0.t2000037"] = [];
                (Exception.GenericArguments)["asm0.t2000002"] = [];
                (Exception.prototype)["SystemException<HResult>k__BackingField"] = 0;
                (Exception.prototype)["SystemException<Message>k__BackingField"] = null;
                (Exception.prototype)["SystemException<InnerException>k__BackingField"] = null;
                Exception.prototype.vtable = {
                    'asm0.x60000a2': function ()
                    {
                        return asm0.x60000a2;
                    },
                    'asm0.x60000a3': function ()
                    {
                        return asm0.x60000a3;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000a4;
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
                Exception.prototype.ifacemap = {};
            };
            Exception.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.SystemException"] = (function ()
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
            function SystemException()
            {
                (SystemException.init)();
                this.constructor = SystemException;
            };
            c = SystemException;
            ct = c;
            SystemException.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                SystemException.CustomAttributes = [];
                SystemException.Methods = [];
                SystemException.BaseType = ((asm0)["System.Exception"])();
                SystemException.FullName = "System.SystemException";
                SystemException.Assembly = asm;
                SystemException.Interfaces = [];
                SystemException.IsInst = function (t) { return t instanceof SystemException ? t : null; };
                SystemException.IsValueType = false;
                SystemException.IsPrimitive = false;
                SystemException.IsInterface = false;
                SystemException.IsGenericTypeDefinition = false;
                SystemException.IsNullable = false;
                SystemException.ArrayType = Array;
                SystemException.MetadataName = "asm0.t2000038";
                SystemException.GenericArguments = {};
                (SystemException.GenericArguments)["asm0.t2000038"] = [];
                (SystemException.GenericArguments)["asm0.t2000037"] = [];
                (SystemException.GenericArguments)["asm0.t2000002"] = [];
                SystemException.prototype.vtable = {
                    'asm0.x60000a2': function ()
                    {
                        return asm0.x60000a2;
                    },
                    'asm0.x60000a3': function ()
                    {
                        return asm0.x60000a3;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000a4;
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
                SystemException.prototype.ifacemap = {};
            };
            SystemException.prototype = new (((asm0)["System.Exception"])())();
            return c;
        };
    })();
    (asm)["System.NullReferenceException"] = (function ()
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
            function NullReferenceException()
            {
                (NullReferenceException.init)();
                this.constructor = NullReferenceException;
            };
            c = NullReferenceException;
            ct = c;
            NullReferenceException.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                NullReferenceException.CustomAttributes = [];
                NullReferenceException.Methods = [];
                NullReferenceException.BaseType = ((asm0)["System.SystemException"])();
                NullReferenceException.FullName = "System.NullReferenceException";
                NullReferenceException.Assembly = asm;
                NullReferenceException.Interfaces = [];
                NullReferenceException.IsInst = function (t) { return t instanceof NullReferenceException ? t : null; };
                NullReferenceException.IsValueType = false;
                NullReferenceException.IsPrimitive = false;
                NullReferenceException.IsInterface = false;
                NullReferenceException.IsGenericTypeDefinition = false;
                NullReferenceException.IsNullable = false;
                NullReferenceException.ArrayType = Array;
                NullReferenceException.MetadataName = "asm0.t2000039";
                NullReferenceException.GenericArguments = {};
                (NullReferenceException.GenericArguments)["asm0.t2000039"] = [];
                (NullReferenceException.GenericArguments)["asm0.t2000038"] = [];
                (NullReferenceException.GenericArguments)["asm0.t2000037"] = [];
                (NullReferenceException.GenericArguments)["asm0.t2000002"] = [];
                NullReferenceException.prototype.vtable = {
                    'asm0.x60000a2': function ()
                    {
                        return asm0.x60000a2;
                    },
                    'asm0.x60000a3': function ()
                    {
                        return asm0.x60000a3;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000a4;
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
                NullReferenceException.prototype.ifacemap = {};
            };
            NullReferenceException.prototype = new (((asm0)["System.SystemException"])())();
            return c;
        };
    })();
    (asm)["System.ParamArrayAttribute"] = (function ()
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
            function ParamArrayAttribute()
            {
                (ParamArrayAttribute.init)();
                this.constructor = ParamArrayAttribute;
            };
            c = ParamArrayAttribute;
            ct = c;
            ParamArrayAttribute.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                ParamArrayAttribute.CustomAttributes = [];
                ParamArrayAttribute.Methods = [];
                ParamArrayAttribute.BaseType = ((asm0)["System.Attribute"])();
                ParamArrayAttribute.FullName = "System.ParamArrayAttribute";
                ParamArrayAttribute.Assembly = asm;
                ParamArrayAttribute.Interfaces = [];
                ParamArrayAttribute.IsInst = function (t) { return t instanceof ParamArrayAttribute ? t : null; };
                ParamArrayAttribute.IsValueType = false;
                ParamArrayAttribute.IsPrimitive = false;
                ParamArrayAttribute.IsInterface = false;
                ParamArrayAttribute.IsGenericTypeDefinition = false;
                ParamArrayAttribute.IsNullable = false;
                ParamArrayAttribute.ArrayType = Array;
                ParamArrayAttribute.MetadataName = "asm0.t200003a";
                ParamArrayAttribute.GenericArguments = {};
                (ParamArrayAttribute.GenericArguments)["asm0.t200003a"] = [];
                (ParamArrayAttribute.GenericArguments)["asm0.t2000015"] = [];
                (ParamArrayAttribute.GenericArguments)["asm0.t2000002"] = [];
                ParamArrayAttribute.prototype.vtable = {
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
                ParamArrayAttribute.prototype.ifacemap = {};
            };
            ParamArrayAttribute.prototype = new (((asm0)["System.Attribute"])())();
            return c;
        };
    })();
    (asm)["System.RuntimeFieldHandle"] = (function ()
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
            function RuntimeFieldHandle()
            {
                (RuntimeFieldHandle.init)();
                this.constructor = RuntimeFieldHandle;
            };
            c = RuntimeFieldHandle;
            ct = c;
            RuntimeFieldHandle.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                RuntimeFieldHandle.CustomAttributes = [];
                RuntimeFieldHandle.Methods = [
                    [
                        asm0,
                        "x60000ab",
                        "get_Value"
                    ]
                ];
                RuntimeFieldHandle.BaseType = ((asm0)["System.ValueType"])();
                RuntimeFieldHandle.FullName = "System.RuntimeFieldHandle";
                RuntimeFieldHandle.Assembly = asm;
                RuntimeFieldHandle.Interfaces = [];
                RuntimeFieldHandle.IsInst = function (t) { return t instanceof RuntimeFieldHandle ? t : null; };
                RuntimeFieldHandle.IsValueType = true;
                RuntimeFieldHandle.IsPrimitive = false;
                RuntimeFieldHandle.IsInterface = false;
                RuntimeFieldHandle.IsGenericTypeDefinition = false;
                RuntimeFieldHandle.IsNullable = false;
                RuntimeFieldHandle.ArrayType = Array;
                RuntimeFieldHandle.MetadataName = "asm0.t200003b";
                RuntimeFieldHandle.GenericArguments = {};
                (RuntimeFieldHandle.GenericArguments)["asm0.t200003b"] = [];
                (RuntimeFieldHandle.GenericArguments)["asm0.t2000006"] = [];
                (RuntimeFieldHandle.GenericArguments)["asm0.t2000002"] = [];
                RuntimeFieldHandle.prototype.value = null;
                RuntimeFieldHandle.prototype.vtable = {
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
                RuntimeFieldHandle.prototype.ifacemap = {};
            };
            RuntimeFieldHandle.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.Type"] = (function ()
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
            function Type()
            {
                (Type.init)();
                this.constructor = Type;
            };
            c = Type;
            ct = c;
            Type.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Type.CustomAttributes = [];
                Type.Methods = [
                    [
                        asm0,
                        "x60000ac",
                        "get_FullName"
                    ],
                    [
                        asm0,
                        "x60000ae",
                        "IsSubclassOf"
                    ],
                    [
                        asm0,
                        "x60000af",
                        "get_IsEnum"
                    ],
                    [
                        asm0,
                        "x60000b0",
                        "get_Assembly"
                    ],
                    [
                        asm0,
                        "x60000b1",
                        "get_BaseType"
                    ],
                    [
                        asm0,
                        "x60000b2",
                        "get_AssemblyQualifiedName"
                    ],
                    [
                        asm0,
                        "x60000b3",
                        "get_IsGenericType"
                    ],
                    [
                        asm0,
                        "x60000b4",
                        "get_IsInterface"
                    ],
                    [
                        asm0,
                        "x60000b5",
                        "get_IsGenericTypeDefinition"
                    ],
                    [
                        asm0,
                        "x60000b6",
                        "GetGenericArguments"
                    ],
                    [
                        asm0,
                        "x60000b7",
                        "GetInterfaces"
                    ],
                    [
                        asm0,
                        "x60000b8",
                        "MakeGenericType"
                    ],
                    [
                        asm0,
                        "x60000b9",
                        "IsAssignableFrom"
                    ],
                    [
                        asm0,
                        "x60000ba",
                        "get_IsValueType"
                    ],
                    [
                        asm0,
                        "x60000bb",
                        "get_IsPrimitive"
                    ],
                    [
                        asm0,
                        "x60000bc",
                        "GetElementType"
                    ],
                    [
                        asm0,
                        "x60000bd",
                        "GetMethods"
                    ]
                ];
                Type.BaseType = ((asm0)["System.Reflection.MemberInfo"])();
                Type.FullName = "System.Type";
                Type.Assembly = asm;
                Type.Interfaces = [
                    ((asm0)["System.Reflection.ICustomAttributeProvider"])()
                ];
                Type.IsInst = function (t) { return t instanceof Type ? t : null; };
                Type.IsValueType = false;
                Type.IsPrimitive = false;
                Type.IsInterface = false;
                Type.IsGenericTypeDefinition = false;
                Type.IsNullable = false;
                Type.ArrayType = Array;
                Type.MetadataName = "asm0.t200003c";
                Type.GenericArguments = {};
                (Type.GenericArguments)["asm0.t200003c"] = [];
                (Type.GenericArguments)["asm0.t2000013"] = [];
                (Type.GenericArguments)["asm0.t2000002"] = [];
                Type.prototype.vtable = {
                    'asm0.x60000ac': function ()
                    {
                        return asm0.x60000ac;
                    },
                    'asm0.x60000ae': function ()
                    {
                        return asm0.x60000ae;
                    },
                    'asm0.x60000b0': function ()
                    {
                        return asm0.x60000b0;
                    },
                    'asm0.x60000b1': function ()
                    {
                        return asm0.x60000b1;
                    },
                    'asm0.x60000b2': function ()
                    {
                        return asm0.x60000b2;
                    },
                    'asm0.x60000b3': function ()
                    {
                        return asm0.x60000b3;
                    },
                    'asm0.x60000b4': function ()
                    {
                        return asm0.x60000b4;
                    },
                    'asm0.x60000b5': function ()
                    {
                        return asm0.x60000b5;
                    },
                    'asm0.x60000b6': function ()
                    {
                        return asm0.x60000b6;
                    },
                    'asm0.x60000b7': function ()
                    {
                        return asm0.x60000b7;
                    },
                    'asm0.x60000b8': function ()
                    {
                        return asm0.x60000b8;
                    },
                    'asm0.x60000b9': function ()
                    {
                        return asm0.x60000b9;
                    },
                    'asm0.x60000ba': function ()
                    {
                        return asm0.x60000ba;
                    },
                    'asm0.x60000bb': function ()
                    {
                        return asm0.x60000bb;
                    },
                    'asm0.x60000bc': function ()
                    {
                        return asm0.x60000bc;
                    },
                    'asm0.x60000bd': function ()
                    {
                        return asm0.x60000bd;
                    },
                    'asm0.x6000039': function ()
                    {
                        return asm0.x6000039;
                    },
                    'asm0.x600003a': function ()
                    {
                        return asm0.x600003a;
                    },
                    'asm0.x600003b': function ()
                    {
                        return asm0.x600003b;
                    },
                    'asm0.x600003d': function ()
                    {
                        return asm0.x600003d;
                    },
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
                Type.prototype.ifacemap = {};
                tree_set([
                    ((asm0)["System.Reflection.ICustomAttributeProvider"])()
                ],Type.prototype.ifacemap,{
                    'x6000036': function ()
                    {
                        return asm0.x6000039;
                    },
                    'x6000037': function ()
                    {
                        return asm0.x600003a;
                    },
                    'x6000038': function ()
                    {
                        return asm0.x600003b;
                    }
                });
            };
            Type.prototype = new (((asm0)["System.Reflection.MemberInfo"])())();
            return c;
        };
    })();
    (asm)["System.RuntimeType"] = (function ()
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
            function RuntimeType()
            {
                (RuntimeType.init)();
                this.constructor = RuntimeType;
            };
            c = RuntimeType;
            ct = c;
            RuntimeType.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                RuntimeType.CustomAttributes = [];
                RuntimeType.Methods = [
                    [
                        asm0,
                        "x60000c5",
                        "get_Assembly"
                    ],
                    [
                        asm0,
                        "x60000c6",
                        "get_FullName"
                    ],
                    [
                        asm0,
                        "x60000c7",
                        "get_AssemblyQualifiedName"
                    ],
                    [
                        asm0,
                        "x60000c8",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x60000c9",
                        "GetHashCode"
                    ],
                    [
                        asm0,
                        "x60000ca",
                        "GetCustomAttributes"
                    ],
                    [
                        asm0,
                        "x60000cb",
                        "GetCustomAttributes"
                    ],
                    [
                        asm0,
                        "x60000cc",
                        "IsDefined"
                    ],
                    [
                        asm0,
                        "x60000cd",
                        "get_IsInterface"
                    ],
                    [
                        asm0,
                        "x60000ce",
                        "get_IsGenericType"
                    ],
                    [
                        asm0,
                        "x60000cf",
                        "get_IsGenericTypeDefinition"
                    ],
                    [
                        asm0,
                        "x60000d0",
                        "MakeGenericType"
                    ],
                    [
                        asm0,
                        "x60000d1",
                        "GetGenericArguments"
                    ],
                    [
                        asm0,
                        "x60000d2",
                        "get_BaseType"
                    ],
                    [
                        asm0,
                        "x60000d3",
                        "GetInterfaces"
                    ],
                    [
                        asm0,
                        "x60000d4",
                        "IsAssignableFrom"
                    ],
                    [
                        asm0,
                        "x60000d6",
                        "get_Name"
                    ],
                    [
                        asm0,
                        "x60000d7",
                        "get_IsValueType"
                    ],
                    [
                        asm0,
                        "x60000d8",
                        "get_IsPrimitive"
                    ],
                    [
                        asm0,
                        "x60000d9",
                        "GetElementType"
                    ],
                    [
                        asm0,
                        "x60000da",
                        "GetMethods"
                    ]
                ];
                RuntimeType.BaseType = ((asm0)["System.Type"])();
                RuntimeType.FullName = "System.RuntimeType";
                RuntimeType.Assembly = asm;
                RuntimeType.Interfaces = [
                    ((asm0)["System.Reflection.ICustomAttributeProvider"])()
                ];
                RuntimeType.IsInst = function (t) { return t instanceof RuntimeType ? t : null; };
                RuntimeType.IsValueType = false;
                RuntimeType.IsPrimitive = false;
                RuntimeType.IsInterface = false;
                RuntimeType.IsGenericTypeDefinition = false;
                RuntimeType.IsNullable = false;
                RuntimeType.ArrayType = Array;
                RuntimeType.MetadataName = "asm0.t200003d";
                RuntimeType.GenericArguments = {};
                (RuntimeType.GenericArguments)["asm0.t200003d"] = [];
                (RuntimeType.GenericArguments)["asm0.t200003c"] = [];
                (RuntimeType.GenericArguments)["asm0.t2000013"] = [];
                (RuntimeType.GenericArguments)["asm0.t2000002"] = [];
                RuntimeType.prototype.ctor = null;
                RuntimeType.prototype.vtable = {
                    'asm0.x60000b0': function ()
                    {
                        return asm0.x60000c5;
                    },
                    'asm0.x60000ac': function ()
                    {
                        return asm0.x60000c6;
                    },
                    'asm0.x60000b2': function ()
                    {
                        return asm0.x60000c7;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x60000c8;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x60000c9;
                    },
                    'asm0.x6000039': function ()
                    {
                        return asm0.x60000ca;
                    },
                    'asm0.x600003a': function ()
                    {
                        return asm0.x60000cb;
                    },
                    'asm0.x600003b': function ()
                    {
                        return asm0.x60000cc;
                    },
                    'asm0.x60000b4': function ()
                    {
                        return asm0.x60000cd;
                    },
                    'asm0.x60000b3': function ()
                    {
                        return asm0.x60000ce;
                    },
                    'asm0.x60000b5': function ()
                    {
                        return asm0.x60000cf;
                    },
                    'asm0.x60000b8': function ()
                    {
                        return asm0.x60000d0;
                    },
                    'asm0.x60000b6': function ()
                    {
                        return asm0.x60000d1;
                    },
                    'asm0.x60000b1': function ()
                    {
                        return asm0.x60000d2;
                    },
                    'asm0.x60000b7': function ()
                    {
                        return asm0.x60000d3;
                    },
                    'asm0.x60000b9': function ()
                    {
                        return asm0.x60000d4;
                    },
                    'asm0.x600003d': function ()
                    {
                        return asm0.x60000d6;
                    },
                    'asm0.x60000ba': function ()
                    {
                        return asm0.x60000d7;
                    },
                    'asm0.x60000bb': function ()
                    {
                        return asm0.x60000d8;
                    },
                    'asm0.x60000bc': function ()
                    {
                        return asm0.x60000d9;
                    },
                    'asm0.x60000bd': function ()
                    {
                        return asm0.x60000da;
                    },
                    'asm0.x60000ae': function ()
                    {
                        return asm0.x60000ae;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
                RuntimeType.prototype.ifacemap = {};
                tree_set([
                    ((asm0)["System.Reflection.ICustomAttributeProvider"])()
                ],RuntimeType.prototype.ifacemap,{
                    'x6000036': function ()
                    {
                        return asm0.x60000ca;
                    },
                    'x6000037': function ()
                    {
                        return asm0.x60000cb;
                    },
                    'x6000038': function ()
                    {
                        return asm0.x60000cc;
                    }
                });
            };
            RuntimeType.prototype = new (((asm0)["System.Type"])())();
            return c;
        };
    })();
    (asm)["System.RuntimeType+constructor"] = (function ()
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
            function constructor()
            {
                (constructor.init)();
                this.constructor = constructor;
            };
            c = constructor;
            ct = c;
            constructor.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                constructor.CustomAttributes = [];
                constructor.Methods = [];
                constructor.BaseType = ((asm0)["System.Object"])();
                constructor.FullName = "System.RuntimeType+constructor";
                constructor.Assembly = asm;
                constructor.Interfaces = [];
                constructor.IsInst = function (t) { return t instanceof constructor ? t : null; };
                constructor.IsValueType = false;
                constructor.IsPrimitive = false;
                constructor.IsInterface = false;
                constructor.IsGenericTypeDefinition = false;
                constructor.IsNullable = false;
                constructor.ArrayType = Array;
                constructor.MetadataName = "asm0.t200003e";
                constructor.GenericArguments = {};
                (constructor.GenericArguments)["asm0.t200003e"] = [];
                (constructor.GenericArguments)["asm0.t2000002"] = [];
                constructor.prototype.FullName = null;
                constructor.prototype.BaseType = null;
                constructor.prototype.Assembly = null;
                constructor.prototype.CustomAttributes = null;
                constructor.prototype.Methods = null;
                constructor.prototype.TypeInstance = null;
                constructor.prototype.Hash = 0;
                constructor.prototype.IsGenericTypeDefinition = new (((asm0)["Braille.JavaScript.Boolean"])())();
                constructor.prototype.IsInterface = new (((asm0)["Braille.JavaScript.Boolean"])())();
                constructor.prototype.IsValueType = new (((asm0)["Braille.JavaScript.Boolean"])())();
                constructor.prototype.IsPrimitive = new (((asm0)["Braille.JavaScript.Boolean"])())();
                constructor.prototype.GenericArguments = null;
                constructor.prototype.Interfaces = null;
                constructor.prototype.MetadataName = null;
                constructor.prototype.vtable = {
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
                constructor.prototype.ifacemap = {};
            };
            constructor.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.RuntimeTypeHandle"] = (function ()
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
            function RuntimeTypeHandle()
            {
                (RuntimeTypeHandle.init)();
                this.constructor = RuntimeTypeHandle;
            };
            c = RuntimeTypeHandle;
            ct = c;
            RuntimeTypeHandle.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                RuntimeTypeHandle.CustomAttributes = [];
                RuntimeTypeHandle.Methods = [
                    [
                        asm0,
                        "x60000dc",
                        "get_Value"
                    ]
                ];
                RuntimeTypeHandle.BaseType = ((asm0)["System.ValueType"])();
                RuntimeTypeHandle.FullName = "System.RuntimeTypeHandle";
                RuntimeTypeHandle.Assembly = asm;
                RuntimeTypeHandle.Interfaces = [];
                RuntimeTypeHandle.IsInst = function (t) { return t instanceof RuntimeTypeHandle ? t : null; };
                RuntimeTypeHandle.IsValueType = true;
                RuntimeTypeHandle.IsPrimitive = false;
                RuntimeTypeHandle.IsInterface = false;
                RuntimeTypeHandle.IsGenericTypeDefinition = false;
                RuntimeTypeHandle.IsNullable = false;
                RuntimeTypeHandle.ArrayType = Array;
                RuntimeTypeHandle.MetadataName = "asm0.t200003f";
                RuntimeTypeHandle.GenericArguments = {};
                (RuntimeTypeHandle.GenericArguments)["asm0.t200003f"] = [];
                (RuntimeTypeHandle.GenericArguments)["asm0.t2000006"] = [];
                (RuntimeTypeHandle.GenericArguments)["asm0.t2000002"] = [];
                RuntimeTypeHandle.prototype.value = null;
                RuntimeTypeHandle.prototype.vtable = {
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
                RuntimeTypeHandle.prototype.ifacemap = {};
            };
            RuntimeTypeHandle.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.SByte"] = (function ()
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
            function SByte()
            {
                (SByte.init)();
                this.constructor = SByte;
            };
            c = SByte;
            ct = c;
            SByte.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                SByte.MinValue = 0;
                SByte.MaxValue = 0;
                SByte.CustomAttributes = [];
                SByte.Methods = [
                    [
                        asm0,
                        "x60000dd",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x60000de",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x60000df",
                        "GetHashCode"
                    ]
                ];
                SByte.BaseType = ((asm0)["System.ValueType"])();
                SByte.FullName = "System.SByte";
                SByte.Assembly = asm;
                SByte.Interfaces = [];
                SByte.IsInst = function (t) { try { return t.type == SByte ? t : null; } catch (e) { return false; } };
                SByte.IsValueType = true;
                SByte.IsPrimitive = true;
                SByte.IsInterface = false;
                SByte.IsGenericTypeDefinition = false;
                SByte.IsNullable = false;
                SByte.ArrayType = Int8Array;
                SByte.MetadataName = "asm0.t2000040";
                SByte.GenericArguments = {};
                (SByte.GenericArguments)["asm0.t2000040"] = [];
                (SByte.GenericArguments)["asm0.t2000006"] = [];
                (SByte.GenericArguments)["asm0.t2000002"] = [];
                SByte.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000dd;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x60000de;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x60000df;
                    }
                };
                SByte.prototype.ifacemap = {};
            };
            SByte.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.Single"] = (function ()
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
            function Single()
            {
                (Single.init)();
                this.constructor = Single;
            };
            c = Single;
            ct = c;
            Single.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Single.CustomAttributes = [];
                Single.Methods = [
                    [
                        asm0,
                        "x60000e0",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x60000e1",
                        "CompareTo"
                    ],
                    [
                        asm0,
                        "x60000e2",
                        "CompareTo"
                    ]
                ];
                Single.BaseType = ((asm0)["System.ValueType"])();
                Single.FullName = "System.Single";
                Single.Assembly = asm;
                Single.Interfaces = [
                    ((asm0)["System.IComparable`1"])(((asm0)["System.Single"])()),
                    ((asm0)["System.IComparable"])()
                ];
                Single.IsInst = function (t) { try { return t.type == Single ? t : null; } catch (e) { return false; } };
                Single.IsValueType = true;
                Single.IsPrimitive = true;
                Single.IsInterface = false;
                Single.IsGenericTypeDefinition = false;
                Single.IsNullable = false;
                Single.ArrayType = Float32Array;
                Single.MetadataName = "asm0.t2000041";
                Single.GenericArguments = {};
                (Single.GenericArguments)["asm0.t2000041"] = [];
                (Single.GenericArguments)["asm0.t2000006"] = [];
                (Single.GenericArguments)["asm0.t2000002"] = [];
                Single.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000e0;
                    },
                    'asm0.x60000e1': function ()
                    {
                        return asm0.x60000e1;
                    },
                    'asm0.x60000e2': function ()
                    {
                        return asm0.x60000e2;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000016;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                Single.prototype.ifacemap = {};
                tree_set([
                    ((asm0)["System.IComparable`1"])(((asm0)["System.Single"])()),
                    ((asm0)["System.Single"])()
                ],Single.prototype.ifacemap,{
                    'x6000084': function ()
                    {
                        return asm0.x60000e2;
                    }
                });
                tree_set([
                    ((asm0)["System.IComparable"])()
                ],Single.prototype.ifacemap,{
                    'x6000085': function ()
                    {
                        return asm0.x60000e1;
                    }
                });
            };
            Single.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.Runtime.InteropServices.OutAttribute"] = (function ()
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
            function OutAttribute()
            {
                (OutAttribute.init)();
                this.constructor = OutAttribute;
            };
            c = OutAttribute;
            ct = c;
            OutAttribute.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                OutAttribute.CustomAttributes = [];
                OutAttribute.Methods = [];
                OutAttribute.BaseType = ((asm0)["System.Attribute"])();
                OutAttribute.FullName = "System.Runtime.InteropServices.OutAttribute";
                OutAttribute.Assembly = asm;
                OutAttribute.Interfaces = [];
                OutAttribute.IsInst = function (t) { return t instanceof OutAttribute ? t : null; };
                OutAttribute.IsValueType = false;
                OutAttribute.IsPrimitive = false;
                OutAttribute.IsInterface = false;
                OutAttribute.IsGenericTypeDefinition = false;
                OutAttribute.IsNullable = false;
                OutAttribute.ArrayType = Array;
                OutAttribute.MetadataName = "asm0.t2000042";
                OutAttribute.GenericArguments = {};
                (OutAttribute.GenericArguments)["asm0.t2000042"] = [];
                (OutAttribute.GenericArguments)["asm0.t2000015"] = [];
                (OutAttribute.GenericArguments)["asm0.t2000002"] = [];
                OutAttribute.prototype.vtable = {
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
                OutAttribute.prototype.ifacemap = {};
            };
            OutAttribute.prototype = new (((asm0)["System.Attribute"])())();
            return c;
        };
    })();
    (asm)["System.Collections.IEnumerator"] = (function ()
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
            function IEnumerator()
            {
                (IEnumerator.init)();
                this.constructor = IEnumerator;
            };
            c = IEnumerator;
            ct = c;
            IEnumerator.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IEnumerator.CustomAttributes = [];
                IEnumerator.Methods = [
                    [
                        asm0,
                        "x60000e4",
                        "get_Current"
                    ],
                    [
                        asm0,
                        "x60000e5",
                        "MoveNext"
                    ],
                    [
                        asm0,
                        "x60000e6",
                        "Reset"
                    ]
                ];
                IEnumerator.BaseType = null;
                IEnumerator.FullName = "System.Collections.IEnumerator";
                IEnumerator.Assembly = asm;
                IEnumerator.Interfaces = [
                    ((asm0)["System.IDisposable"])()
                ];
                IEnumerator.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(IEnumerator) != -1 ? t : null; } catch (e) { return false; } };
                IEnumerator.IsValueType = false;
                IEnumerator.IsPrimitive = false;
                IEnumerator.IsInterface = true;
                IEnumerator.IsGenericTypeDefinition = false;
                IEnumerator.IsNullable = false;
                IEnumerator.ArrayType = Array;
                IEnumerator.MetadataName = "asm0.t2000043";
                IEnumerator.GenericArguments = {};
                (IEnumerator.GenericArguments)["asm0.t2000043"] = [];
                IEnumerator.prototype.vtable = {
                    'asm0.x60000e4': function ()
                    {
                        return asm0.x60000e4;
                    },
                    'asm0.x60000e5': function ()
                    {
                        return asm0.x60000e5;
                    },
                    'asm0.x60000e6': function ()
                    {
                        return asm0.x60000e6;
                    }
                };
                IEnumerator.prototype.ifacemap = {};
            };
            IEnumerator.prototype = {};
            return c;
        };
    })();
    (asm)["System.Collections.Generic.IEnumerator`1"] = (function ()
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
            function IEnumerator_1()
            {
                (IEnumerator_1.init)();
                this.constructor = IEnumerator_1;
            };
            c = IEnumerator_1;
            tree_set([
                T
            ],ct,c);
            IEnumerator_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IEnumerator_1.CustomAttributes = [];
                IEnumerator_1.Methods = [
                    [
                        asm0,
                        "x60000e7",
                        "get_Current"
                    ]
                ];
                IEnumerator_1.BaseType = null;
                IEnumerator_1.FullName = "System.Collections.Generic.IEnumerator`1";
                IEnumerator_1.Assembly = asm;
                IEnumerator_1.Interfaces = [
                    ((asm0)["System.Collections.IEnumerator"])(),
                    ((asm0)["System.IDisposable"])()
                ];
                IEnumerator_1.IsInst = function (t) { try { return (t.type || t.constructor).Interfaces.indexOf(IEnumerator_1) != -1 ? t : null; } catch (e) { return false; } };
                IEnumerator_1.IsValueType = false;
                IEnumerator_1.IsPrimitive = false;
                IEnumerator_1.IsInterface = true;
                IEnumerator_1.IsGenericTypeDefinition = true;
                IEnumerator_1.IsNullable = false;
                IEnumerator_1.ArrayType = Array;
                IEnumerator_1.MetadataName = "asm0.t2000044";
                IEnumerator_1.GenericArguments = {};
                (IEnumerator_1.GenericArguments)["asm0.t2000044"] = [
                    T
                ];
                IEnumerator_1.prototype.vtable = {
                    'asm0.x60000e7': function ()
                    {
                        return asm0.x60000e7;
                    }
                };
                IEnumerator_1.prototype.ifacemap = {};
            };
            IEnumerator_1.prototype = {};
            return c;
        };
    })();
    (asm)["System.Diagnostics.Debugger"] = (function ()
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
            function Debugger()
            {
                (Debugger.init)();
                this.constructor = Debugger;
            };
            c = Debugger;
            ct = c;
            Debugger.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Debugger.CustomAttributes = [];
                Debugger.Methods = [];
                Debugger.BaseType = ((asm0)["System.Object"])();
                Debugger.FullName = "System.Diagnostics.Debugger";
                Debugger.Assembly = asm;
                Debugger.Interfaces = [];
                Debugger.IsInst = function (t) { return t instanceof Debugger ? t : null; };
                Debugger.IsValueType = false;
                Debugger.IsPrimitive = false;
                Debugger.IsInterface = false;
                Debugger.IsGenericTypeDefinition = false;
                Debugger.IsNullable = false;
                Debugger.ArrayType = Array;
                Debugger.MetadataName = "asm0.t2000045";
                Debugger.GenericArguments = {};
                (Debugger.GenericArguments)["asm0.t2000045"] = [];
                (Debugger.GenericArguments)["asm0.t2000002"] = [];
                Debugger.prototype.vtable = {
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
                Debugger.prototype.ifacemap = {};
            };
            Debugger.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.NotImplementedException"] = (function ()
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
            function NotImplementedException()
            {
                (NotImplementedException.init)();
                this.constructor = NotImplementedException;
            };
            c = NotImplementedException;
            ct = c;
            NotImplementedException.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                NotImplementedException.CustomAttributes = [];
                NotImplementedException.Methods = [];
                NotImplementedException.BaseType = ((asm0)["System.Exception"])();
                NotImplementedException.FullName = "System.NotImplementedException";
                NotImplementedException.Assembly = asm;
                NotImplementedException.Interfaces = [];
                NotImplementedException.IsInst = function (t) { return t instanceof NotImplementedException ? t : null; };
                NotImplementedException.IsValueType = false;
                NotImplementedException.IsPrimitive = false;
                NotImplementedException.IsInterface = false;
                NotImplementedException.IsGenericTypeDefinition = false;
                NotImplementedException.IsNullable = false;
                NotImplementedException.ArrayType = Array;
                NotImplementedException.MetadataName = "asm0.t2000046";
                NotImplementedException.GenericArguments = {};
                (NotImplementedException.GenericArguments)["asm0.t2000046"] = [];
                (NotImplementedException.GenericArguments)["asm0.t2000037"] = [];
                (NotImplementedException.GenericArguments)["asm0.t2000002"] = [];
                NotImplementedException.prototype.vtable = {
                    'asm0.x60000a2': function ()
                    {
                        return asm0.x60000a2;
                    },
                    'asm0.x60000a3': function ()
                    {
                        return asm0.x60000a3;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000a4;
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
                NotImplementedException.prototype.ifacemap = {};
            };
            NotImplementedException.prototype = new (((asm0)["System.Exception"])())();
            return c;
        };
    })();
    (asm)["System.NotSupportedException"] = (function ()
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
            function NotSupportedException()
            {
                (NotSupportedException.init)();
                this.constructor = NotSupportedException;
            };
            c = NotSupportedException;
            ct = c;
            NotSupportedException.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                NotSupportedException.CustomAttributes = [];
                NotSupportedException.Methods = [];
                NotSupportedException.BaseType = ((asm0)["System.Exception"])();
                NotSupportedException.FullName = "System.NotSupportedException";
                NotSupportedException.Assembly = asm;
                NotSupportedException.Interfaces = [];
                NotSupportedException.IsInst = function (t) { return t instanceof NotSupportedException ? t : null; };
                NotSupportedException.IsValueType = false;
                NotSupportedException.IsPrimitive = false;
                NotSupportedException.IsInterface = false;
                NotSupportedException.IsGenericTypeDefinition = false;
                NotSupportedException.IsNullable = false;
                NotSupportedException.ArrayType = Array;
                NotSupportedException.MetadataName = "asm0.t2000047";
                NotSupportedException.GenericArguments = {};
                (NotSupportedException.GenericArguments)["asm0.t2000047"] = [];
                (NotSupportedException.GenericArguments)["asm0.t2000037"] = [];
                (NotSupportedException.GenericArguments)["asm0.t2000002"] = [];
                NotSupportedException.prototype.vtable = {
                    'asm0.x60000a2': function ()
                    {
                        return asm0.x60000a2;
                    },
                    'asm0.x60000a3': function ()
                    {
                        return asm0.x60000a3;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000a4;
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
                NotSupportedException.prototype.ifacemap = {};
            };
            NotSupportedException.prototype = new (((asm0)["System.Exception"])())();
            return c;
        };
    })();
    (asm)["System.Math"] = (function ()
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
            function Math()
            {
                (Math.init)();
                this.constructor = Math;
            };
            c = Math;
            ct = c;
            Math.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Math.PI = 0;
                Math.CustomAttributes = [];
                Math.Methods = [];
                Math.BaseType = ((asm0)["System.Object"])();
                Math.FullName = "System.Math";
                Math.Assembly = asm;
                Math.Interfaces = [];
                Math.IsInst = function (t) { return t instanceof Math ? t : null; };
                Math.IsValueType = false;
                Math.IsPrimitive = false;
                Math.IsInterface = false;
                Math.IsGenericTypeDefinition = false;
                Math.IsNullable = false;
                Math.ArrayType = Array;
                Math.MetadataName = "asm0.t2000048";
                Math.GenericArguments = {};
                (Math.GenericArguments)["asm0.t2000048"] = [];
                (Math.GenericArguments)["asm0.t2000002"] = [];
                Math.prototype.vtable = {
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
                Math.prototype.ifacemap = {};
            };
            Math.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.InvalidCastException"] = (function ()
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
            function InvalidCastException()
            {
                (InvalidCastException.init)();
                this.constructor = InvalidCastException;
            };
            c = InvalidCastException;
            ct = c;
            InvalidCastException.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                InvalidCastException.CustomAttributes = [];
                InvalidCastException.Methods = [];
                InvalidCastException.BaseType = ((asm0)["System.Exception"])();
                InvalidCastException.FullName = "System.InvalidCastException";
                InvalidCastException.Assembly = asm;
                InvalidCastException.Interfaces = [];
                InvalidCastException.IsInst = function (t) { return t instanceof InvalidCastException ? t : null; };
                InvalidCastException.IsValueType = false;
                InvalidCastException.IsPrimitive = false;
                InvalidCastException.IsInterface = false;
                InvalidCastException.IsGenericTypeDefinition = false;
                InvalidCastException.IsNullable = false;
                InvalidCastException.ArrayType = Array;
                InvalidCastException.MetadataName = "asm0.t2000049";
                InvalidCastException.GenericArguments = {};
                (InvalidCastException.GenericArguments)["asm0.t2000049"] = [];
                (InvalidCastException.GenericArguments)["asm0.t2000037"] = [];
                (InvalidCastException.GenericArguments)["asm0.t2000002"] = [];
                InvalidCastException.prototype.vtable = {
                    'asm0.x60000a2': function ()
                    {
                        return asm0.x60000a2;
                    },
                    'asm0.x60000a3': function ()
                    {
                        return asm0.x60000a3;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000a4;
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
                InvalidCastException.prototype.ifacemap = {};
            };
            InvalidCastException.prototype = new (((asm0)["System.Exception"])())();
            return c;
        };
    })();
    (asm)["System.InvalidOperationException"] = (function ()
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
            function InvalidOperationException()
            {
                (InvalidOperationException.init)();
                this.constructor = InvalidOperationException;
            };
            c = InvalidOperationException;
            ct = c;
            InvalidOperationException.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                InvalidOperationException.CustomAttributes = [];
                InvalidOperationException.Methods = [];
                InvalidOperationException.BaseType = ((asm0)["System.Exception"])();
                InvalidOperationException.FullName = "System.InvalidOperationException";
                InvalidOperationException.Assembly = asm;
                InvalidOperationException.Interfaces = [];
                InvalidOperationException.IsInst = function (t) { return t instanceof InvalidOperationException ? t : null; };
                InvalidOperationException.IsValueType = false;
                InvalidOperationException.IsPrimitive = false;
                InvalidOperationException.IsInterface = false;
                InvalidOperationException.IsGenericTypeDefinition = false;
                InvalidOperationException.IsNullable = false;
                InvalidOperationException.ArrayType = Array;
                InvalidOperationException.MetadataName = "asm0.t200004a";
                InvalidOperationException.GenericArguments = {};
                (InvalidOperationException.GenericArguments)["asm0.t200004a"] = [];
                (InvalidOperationException.GenericArguments)["asm0.t2000037"] = [];
                (InvalidOperationException.GenericArguments)["asm0.t2000002"] = [];
                InvalidOperationException.prototype.vtable = {
                    'asm0.x60000a2': function ()
                    {
                        return asm0.x60000a2;
                    },
                    'asm0.x60000a3': function ()
                    {
                        return asm0.x60000a3;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000a4;
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
                InvalidOperationException.prototype.ifacemap = {};
            };
            InvalidOperationException.prototype = new (((asm0)["System.Exception"])())();
            return c;
        };
    })();
    (asm)["System.Int64"] = (function ()
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
            function Int64()
            {
                (Int64.init)();
                this.constructor = Int64;
            };
            c = Int64;
            ct = c;
            Int64.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Int64.MaxValue = 0;
                Int64.MinValue = 0;
                Int64.CustomAttributes = [];
                Int64.Methods = [
                    [
                        asm0,
                        "x60000fa",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x60000fb",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x60000fc",
                        "GetHashCode"
                    ]
                ];
                Int64.BaseType = ((asm0)["System.ValueType"])();
                Int64.FullName = "System.Int64";
                Int64.Assembly = asm;
                Int64.Interfaces = [];
                Int64.IsInst = function (t) { try { return t.type == Int64 ? t : null; } catch (e) { return false; } };
                Int64.IsValueType = true;
                Int64.IsPrimitive = true;
                Int64.IsInterface = false;
                Int64.IsGenericTypeDefinition = false;
                Int64.IsNullable = false;
                Int64.ArrayType = Array;
                Int64.MetadataName = "asm0.t200004b";
                Int64.GenericArguments = {};
                (Int64.GenericArguments)["asm0.t200004b"] = [];
                (Int64.GenericArguments)["asm0.t2000006"] = [];
                (Int64.GenericArguments)["asm0.t2000002"] = [];
                Int64.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000fa;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x60000fb;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x60000fc;
                    }
                };
                Int64.prototype.ifacemap = {};
            };
            Int64.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["Braille.JavaScript.Number"] = (function ()
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
            function $$Number()
            {
                ($$Number.init)();
                this.constructor = $$Number;
            };
            c = $$Number;
            ct = c;
            $$Number.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                $$Number.CustomAttributes = [];
                $$Number.Methods = [];
                $$Number.BaseType = ((asm0)["System.ValueType"])();
                $$Number.FullName = "Braille.JavaScript.Number";
                $$Number.Assembly = asm;
                $$Number.Interfaces = [];
                $$Number.IsInst = function (t) { return t instanceof $$Number ? t : null; };
                $$Number.IsValueType = true;
                $$Number.IsPrimitive = false;
                $$Number.IsInterface = false;
                $$Number.IsGenericTypeDefinition = false;
                $$Number.IsNullable = false;
                $$Number.ArrayType = Array;
                $$Number.MetadataName = "asm0.t200004c";
                $$Number.GenericArguments = {};
                ($$Number.GenericArguments)["asm0.t200004c"] = [];
                ($$Number.GenericArguments)["asm0.t2000006"] = [];
                ($$Number.GenericArguments)["asm0.t2000002"] = [];
                $$Number.prototype.vtable = {
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
                $$Number.prototype.ifacemap = {};
            };
            $$Number.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.Runtime.CompilerServices.ExtensionAttribute"] = (function ()
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
            function ExtensionAttribute()
            {
                (ExtensionAttribute.init)();
                this.constructor = ExtensionAttribute;
            };
            c = ExtensionAttribute;
            ct = c;
            ExtensionAttribute.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                ExtensionAttribute.CustomAttributes = [
                    [
                        ((asm0)["System.AttributeUsageAttribute"])(),
                        asm0.x6000054,
                        [
                            (64|0)
                        ],
                        {
                            'Inherited': [
                                ((asm0)["System.Boolean"])(),
                                true
                            ]
                        }
                    ]
                ];
                ExtensionAttribute.Methods = [];
                ExtensionAttribute.BaseType = ((asm0)["System.Attribute"])();
                ExtensionAttribute.FullName = "System.Runtime.CompilerServices.ExtensionAttribute";
                ExtensionAttribute.Assembly = asm;
                ExtensionAttribute.Interfaces = [];
                ExtensionAttribute.IsInst = function (t) { return t instanceof ExtensionAttribute ? t : null; };
                ExtensionAttribute.IsValueType = false;
                ExtensionAttribute.IsPrimitive = false;
                ExtensionAttribute.IsInterface = false;
                ExtensionAttribute.IsGenericTypeDefinition = false;
                ExtensionAttribute.IsNullable = false;
                ExtensionAttribute.ArrayType = Array;
                ExtensionAttribute.MetadataName = "asm0.t200004d";
                ExtensionAttribute.GenericArguments = {};
                (ExtensionAttribute.GenericArguments)["asm0.t200004d"] = [];
                (ExtensionAttribute.GenericArguments)["asm0.t2000015"] = [];
                (ExtensionAttribute.GenericArguments)["asm0.t2000002"] = [];
                ExtensionAttribute.prototype.vtable = {
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
                ExtensionAttribute.prototype.ifacemap = {};
            };
            ExtensionAttribute.prototype = new (((asm0)["System.Attribute"])())();
            return c;
        };
    })();
    (asm)["System.Runtime.CompilerServices.IndexerNameAttribute"] = (function ()
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
            function IndexerNameAttribute()
            {
                (IndexerNameAttribute.init)();
                this.constructor = IndexerNameAttribute;
            };
            c = IndexerNameAttribute;
            ct = c;
            IndexerNameAttribute.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IndexerNameAttribute.CustomAttributes = [
                    [
                        ((asm0)["System.AttributeUsageAttribute"])(),
                        asm0.x6000054,
                        [
                            (128|0)
                        ],
                        {
                            'Inherited': [
                                ((asm0)["System.Boolean"])(),
                                true
                            ]
                        }
                    ]
                ];
                IndexerNameAttribute.Methods = [];
                IndexerNameAttribute.BaseType = ((asm0)["System.Attribute"])();
                IndexerNameAttribute.FullName = "System.Runtime.CompilerServices.IndexerNameAttribute";
                IndexerNameAttribute.Assembly = asm;
                IndexerNameAttribute.Interfaces = [];
                IndexerNameAttribute.IsInst = function (t) { return t instanceof IndexerNameAttribute ? t : null; };
                IndexerNameAttribute.IsValueType = false;
                IndexerNameAttribute.IsPrimitive = false;
                IndexerNameAttribute.IsInterface = false;
                IndexerNameAttribute.IsGenericTypeDefinition = false;
                IndexerNameAttribute.IsNullable = false;
                IndexerNameAttribute.ArrayType = Array;
                IndexerNameAttribute.MetadataName = "asm0.t200004e";
                IndexerNameAttribute.GenericArguments = {};
                (IndexerNameAttribute.GenericArguments)["asm0.t200004e"] = [];
                (IndexerNameAttribute.GenericArguments)["asm0.t2000015"] = [];
                (IndexerNameAttribute.GenericArguments)["asm0.t2000002"] = [];
                IndexerNameAttribute.prototype.vtable = {
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
                IndexerNameAttribute.prototype.ifacemap = {};
            };
            IndexerNameAttribute.prototype = new (((asm0)["System.Attribute"])())();
            return c;
        };
    })();
    (asm)["System.Runtime.CompilerServices.RuntimeHelpers"] = (function ()
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
            function RuntimeHelpers()
            {
                (RuntimeHelpers.init)();
                this.constructor = RuntimeHelpers;
            };
            c = RuntimeHelpers;
            ct = c;
            RuntimeHelpers.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                RuntimeHelpers.CustomAttributes = [];
                RuntimeHelpers.Methods = [];
                RuntimeHelpers.BaseType = ((asm0)["System.Object"])();
                RuntimeHelpers.FullName = "System.Runtime.CompilerServices.RuntimeHelpers";
                RuntimeHelpers.Assembly = asm;
                RuntimeHelpers.Interfaces = [];
                RuntimeHelpers.IsInst = function (t) { return t instanceof RuntimeHelpers ? t : null; };
                RuntimeHelpers.IsValueType = false;
                RuntimeHelpers.IsPrimitive = false;
                RuntimeHelpers.IsInterface = false;
                RuntimeHelpers.IsGenericTypeDefinition = false;
                RuntimeHelpers.IsNullable = false;
                RuntimeHelpers.ArrayType = Array;
                RuntimeHelpers.MetadataName = "asm0.t200004f";
                RuntimeHelpers.GenericArguments = {};
                (RuntimeHelpers.GenericArguments)["asm0.t200004f"] = [];
                (RuntimeHelpers.GenericArguments)["asm0.t2000002"] = [];
                RuntimeHelpers.prototype.vtable = {
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
                RuntimeHelpers.prototype.ifacemap = {};
            };
            RuntimeHelpers.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.EventArgs"] = (function ()
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
            function EventArgs()
            {
                (EventArgs.init)();
                this.constructor = EventArgs;
            };
            c = EventArgs;
            ct = c;
            EventArgs.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                EventArgs.Empty = null;
                EventArgs.CustomAttributes = [];
                EventArgs.Methods = [];
                EventArgs.BaseType = ((asm0)["System.Object"])();
                EventArgs.FullName = "System.EventArgs";
                EventArgs.Assembly = asm;
                EventArgs.Interfaces = [];
                EventArgs.IsInst = function (t) { return t instanceof EventArgs ? t : null; };
                EventArgs.IsValueType = false;
                EventArgs.IsPrimitive = false;
                EventArgs.IsInterface = false;
                EventArgs.IsGenericTypeDefinition = false;
                EventArgs.IsNullable = false;
                EventArgs.ArrayType = Array;
                EventArgs.MetadataName = "asm0.t2000050";
                EventArgs.GenericArguments = {};
                (EventArgs.GenericArguments)["asm0.t2000050"] = [];
                (EventArgs.GenericArguments)["asm0.t2000002"] = [];
                EventArgs.prototype.vtable = {
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
                EventArgs.prototype.ifacemap = {};
            };
            EventArgs.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.EventHandler"] = (function ()
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
            function EventHandler()
            {
                (EventHandler.init)();
                this.constructor = EventHandler;
            };
            c = EventHandler;
            ct = c;
            EventHandler.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                EventHandler.CustomAttributes = [];
                EventHandler.Methods = [
                    [
                        asm0,
                        "x6000122",
                        "Invoke"
                    ]
                ];
                EventHandler.BaseType = ((asm0)["System.MulticastDelegate"])();
                EventHandler.FullName = "System.EventHandler";
                EventHandler.Assembly = asm;
                EventHandler.Interfaces = [];
                EventHandler.IsInst = function (t) { return t instanceof EventHandler ? t : null; };
                EventHandler.IsValueType = false;
                EventHandler.IsPrimitive = false;
                EventHandler.IsInterface = false;
                EventHandler.IsGenericTypeDefinition = false;
                EventHandler.IsNullable = false;
                EventHandler.ArrayType = Array;
                EventHandler.MetadataName = "asm0.t2000051";
                EventHandler.GenericArguments = {};
                (EventHandler.GenericArguments)["asm0.t2000051"] = [];
                (EventHandler.GenericArguments)["asm0.t2000028"] = [];
                (EventHandler.GenericArguments)["asm0.t2000027"] = [];
                (EventHandler.GenericArguments)["asm0.t2000002"] = [];
                EventHandler.prototype._invocationList = null;
                EventHandler.prototype._methodPtr = null;
                EventHandler.prototype._target = null;
                EventHandler.prototype.vtable = {
                    'asm0.x6000122': function ()
                    {
                        return asm0.x6000122;
                    },
                    'asm0.x6000073': function ()
                    {
                        return asm0.x600007c;
                    },
                    'asm0.x6000072': function ()
                    {
                        return asm0.x600007d;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000074;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000077;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
                EventHandler.prototype.ifacemap = {};
            };
            EventHandler.prototype = {};
            return c;
        };
    })();
    (asm)["System.Predicate`1"] = (function ()
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
            function Predicate_1()
            {
                (Predicate_1.init)();
                this.constructor = Predicate_1;
            };
            c = Predicate_1;
            tree_set([
                T
            ],ct,c);
            Predicate_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Predicate_1.CustomAttributes = [];
                Predicate_1.Methods = [
                    [
                        asm0,
                        "x6000124",
                        "Invoke"
                    ]
                ];
                Predicate_1.BaseType = ((asm0)["System.MulticastDelegate"])();
                Predicate_1.FullName = "System.Predicate`1";
                Predicate_1.Assembly = asm;
                Predicate_1.Interfaces = [];
                Predicate_1.IsInst = function (t) { return t instanceof Predicate_1 ? t : null; };
                Predicate_1.IsValueType = false;
                Predicate_1.IsPrimitive = false;
                Predicate_1.IsInterface = false;
                Predicate_1.IsGenericTypeDefinition = true;
                Predicate_1.IsNullable = false;
                Predicate_1.ArrayType = Array;
                Predicate_1.MetadataName = "asm0.t2000052";
                Predicate_1.GenericArguments = {};
                (Predicate_1.GenericArguments)["asm0.t2000052"] = [
                    T
                ];
                (Predicate_1.GenericArguments)["asm0.t2000028"] = [];
                (Predicate_1.GenericArguments)["asm0.t2000027"] = [];
                (Predicate_1.GenericArguments)["asm0.t2000002"] = [];
                Predicate_1.prototype._invocationList = null;
                Predicate_1.prototype._methodPtr = null;
                Predicate_1.prototype._target = null;
                Predicate_1.prototype.vtable = {
                    'asm0.x6000124': function ()
                    {
                        return asm0.x6000124;
                    },
                    'asm0.x6000073': function ()
                    {
                        return asm0.x600007c;
                    },
                    'asm0.x6000072': function ()
                    {
                        return asm0.x600007d;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000074;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000077;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
                Predicate_1.prototype.ifacemap = {};
            };
            Predicate_1.prototype = {};
            return c;
        };
    })();
    (asm)["System.Array"] = (function ()
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
            function Array()
            {
                (Array.init)();
                this.constructor = Array;
            };
            c = Array;
            ct = c;
            Array.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Array.CustomAttributes = [];
                Array.Methods = [
                    [
                        asm0,
                        "x6000125",
                        "get_Length"
                    ],
                    [
                        asm0,
                        "x6000129",
                        "GetValue"
                    ],
                    [
                        asm0,
                        "x600012a",
                        "GetEnumerator"
                    ]
                ];
                Array.BaseType = ((asm0)["System.Object"])();
                Array.FullName = "System.Array";
                Array.Assembly = asm;
                Array.Interfaces = [
                    ((asm0)["System.Collections.IEnumerable"])()
                ];
                Array.IsInst = function (t) { return t instanceof Array ? t : null; };
                Array.IsValueType = false;
                Array.IsPrimitive = false;
                Array.IsInterface = false;
                Array.IsGenericTypeDefinition = false;
                Array.IsNullable = false;
                Array.ArrayType = Array;
                Array.MetadataName = "asm0.t2000053";
                Array.GenericArguments = {};
                (Array.GenericArguments)["asm0.t2000053"] = [];
                (Array.GenericArguments)["asm0.t2000002"] = [];
                Array.prototype.type = null;
                Array.prototype.jsarr = null;
                Array.prototype.vtable = {
                    'asm0.x600012a': function ()
                    {
                        return asm0.x600012a;
                    },
                    'asm0.x600012b': function ()
                    {
                        return asm0.x600012b;
                    },
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
                Array.prototype.ifacemap = {};
                tree_set([
                    ((asm0)["System.Collections.IEnumerable"])()
                ],Array.prototype.ifacemap,{
                    'x600000d': function ()
                    {
                        return asm0.x600012a;
                    }
                });
            };
            Array.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.Array`1"] = (function ()
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
            function Array_1()
            {
                (Array_1.init)();
                this.constructor = Array_1;
            };
            c = Array_1;
            tree_set([
                T
            ],ct,c);
            Array_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Array_1.CustomAttributes = [];
                Array_1.Methods = [
                    [
                        asm0,
                        "x6000148",
                        "GetEnumerator"
                    ]
                ];
                Array_1.BaseType = ((asm0)["System.Array"])();
                Array_1.FullName = "System.Array`1";
                Array_1.Assembly = asm;
                Array_1.Interfaces = [
                    ((asm0)["System.Collections.Generic.ICollection`1"])(T),
                    ((asm0)["System.Collections.Generic.IEnumerable`1"])(T),
                    ((asm0)["System.Collections.IEnumerable"])()
                ];
                Array_1.IsInst = function (t) { return t instanceof asm0['System.Array']() && (t.etype == T || t.etype.prototype instanceof T) ? t : null; };
                Array_1.IsValueType = false;
                Array_1.IsPrimitive = false;
                Array_1.IsInterface = false;
                Array_1.IsGenericTypeDefinition = true;
                Array_1.IsNullable = false;
                Array_1.ArrayType = Array;
                Array_1.MetadataName = "asm0.t2000054";
                Array_1.GenericArguments = {};
                (Array_1.GenericArguments)["asm0.t2000054"] = [
                    T
                ];
                (Array_1.GenericArguments)["asm0.t2000053"] = [];
                (Array_1.GenericArguments)["asm0.t2000002"] = [];
                Array_1.prototype.type = null;
                Array_1.prototype.jsarr = null;
                Array_1.prototype.vtable = {
                    'asm0.x6000148': function ()
                    {
                        return asm0.x6000148;
                    },
                    'asm0.x600012b': function ()
                    {
                        return asm0.x6000149;
                    },
                    'asm0.x600014a': function ()
                    {
                        return asm0.x600014a;
                    },
                    'asm0.x600014b': function ()
                    {
                        return asm0.x600014b;
                    },
                    'asm0.x600014c': function ()
                    {
                        return asm0.x600014c;
                    },
                    'asm0.x600014d': function ()
                    {
                        return asm0.x600014d;
                    },
                    'asm0.x600014e': function ()
                    {
                        return asm0.x600014e;
                    },
                    'asm0.x600014f': function ()
                    {
                        return asm0.x600014f;
                    },
                    'asm0.x6000150': function ()
                    {
                        return asm0.x6000150;
                    },
                    'asm0.x600012a': function ()
                    {
                        return asm0.x600012a;
                    },
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
                Array_1.prototype.ifacemap = {};
                tree_set([
                    ((asm0)["System.Collections.Generic.ICollection`1"])(T),
                    T
                ],Array_1.prototype.ifacemap,{
                    'x6000027': function ()
                    {
                        return asm0.x600014a;
                    },
                    'x6000028': function ()
                    {
                        return asm0.x600014b;
                    },
                    'x6000029': function ()
                    {
                        return asm0.x600014c;
                    },
                    'x600002a': function ()
                    {
                        return asm0.x600014d;
                    },
                    'x600002b': function ()
                    {
                        return asm0.x600014e;
                    },
                    'x600002c': function ()
                    {
                        return asm0.x600014f;
                    },
                    'x600002d': function ()
                    {
                        return asm0.x6000150;
                    }
                });
                tree_set([
                    ((asm0)["System.Collections.Generic.IEnumerable`1"])(T),
                    T
                ],Array_1.prototype.ifacemap,{
                    'x600000e': function ()
                    {
                        return asm0.x6000148;
                    }
                });
                tree_set([
                    ((asm0)["System.Collections.IEnumerable"])()
                ],Array_1.prototype.ifacemap,{
                    'x600000d': function ()
                    {
                        return asm0.x600012a;
                    }
                });
            };
            Array_1.prototype = new (((asm0)["System.Array"])())();
            return c;
        };
    })();
    (asm)["System.Array`1+ArrayEnumerator"] = (function ()
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
            function ArrayEnumerator()
            {
                (ArrayEnumerator.init)();
                this.constructor = ArrayEnumerator;
            };
            c = ArrayEnumerator;
            tree_set([
                T
            ],ct,c);
            ArrayEnumerator.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                ArrayEnumerator.CustomAttributes = [];
                ArrayEnumerator.Methods = [
                    [
                        asm0,
                        "x6000153",
                        "get_Current"
                    ],
                    [
                        asm0,
                        "x6000154",
                        "MoveNext"
                    ],
                    [
                        asm0,
                        "x6000156",
                        "Reset"
                    ],
                    [
                        asm0,
                        "x6000157",
                        "Dispose"
                    ]
                ];
                ArrayEnumerator.BaseType = ((asm0)["System.Object"])();
                ArrayEnumerator.FullName = "System.Array`1+ArrayEnumerator";
                ArrayEnumerator.Assembly = asm;
                ArrayEnumerator.Interfaces = [
                    ((asm0)["System.Collections.Generic.IEnumerator`1"])(T),
                    ((asm0)["System.Collections.IEnumerator"])(),
                    ((asm0)["System.IDisposable"])()
                ];
                ArrayEnumerator.IsInst = function (t) { return t instanceof ArrayEnumerator ? t : null; };
                ArrayEnumerator.IsValueType = false;
                ArrayEnumerator.IsPrimitive = false;
                ArrayEnumerator.IsInterface = false;
                ArrayEnumerator.IsGenericTypeDefinition = true;
                ArrayEnumerator.IsNullable = false;
                ArrayEnumerator.ArrayType = Array;
                ArrayEnumerator.MetadataName = "asm0.t2000055";
                ArrayEnumerator.GenericArguments = {};
                (ArrayEnumerator.GenericArguments)["asm0.t2000055"] = [
                    T
                ];
                (ArrayEnumerator.GenericArguments)["asm0.t2000002"] = [];
                ArrayEnumerator.prototype.index = 0;
                ArrayEnumerator.prototype.length = 0;
                ArrayEnumerator.prototype.source = null;
                ArrayEnumerator.prototype.vtable = {
                    'asm0.x6000153': function ()
                    {
                        return asm0.x6000153;
                    },
                    'asm0.x6000154': function ()
                    {
                        return asm0.x6000154;
                    },
                    'asm0.x6000155': function ()
                    {
                        return asm0.x6000155;
                    },
                    'asm0.x6000156': function ()
                    {
                        return asm0.x6000156;
                    },
                    'asm0.x6000157': function ()
                    {
                        return asm0.x6000157;
                    },
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
                ArrayEnumerator.prototype.ifacemap = {};
                tree_set([
                    ((asm0)["System.Collections.Generic.IEnumerator`1"])(T),
                    T
                ],ArrayEnumerator.prototype.ifacemap,{
                    'x60000e7': function ()
                    {
                        return asm0.x6000153;
                    }
                });
                tree_set([
                    ((asm0)["System.Collections.IEnumerator"])()
                ],ArrayEnumerator.prototype.ifacemap,{
                    'x60000e4': function ()
                    {
                        return asm0.x6000155;
                    },
                    'x60000e5': function ()
                    {
                        return asm0.x6000154;
                    },
                    'x60000e6': function ()
                    {
                        return asm0.x6000156;
                    }
                });
                tree_set([
                    ((asm0)["System.IDisposable"])()
                ],ArrayEnumerator.prototype.ifacemap,{
                    'x600008f': function ()
                    {
                        return asm0.x6000157;
                    }
                });
            };
            ArrayEnumerator.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.Diagnostics.DebuggerStepThroughAttribute"] = (function ()
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
            function DebuggerStepThroughAttribute()
            {
                (DebuggerStepThroughAttribute.init)();
                this.constructor = DebuggerStepThroughAttribute;
            };
            c = DebuggerStepThroughAttribute;
            ct = c;
            DebuggerStepThroughAttribute.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                DebuggerStepThroughAttribute.CustomAttributes = [
                    [
                        ((asm0)["System.AttributeUsageAttribute"])(),
                        asm0.x6000054,
                        [
                            (108|0)
                        ],
                        {
                            'Inherited': [
                                ((asm0)["System.Boolean"])(),
                                false
                            ]
                        }
                    ]
                ];
                DebuggerStepThroughAttribute.Methods = [];
                DebuggerStepThroughAttribute.BaseType = ((asm0)["System.Attribute"])();
                DebuggerStepThroughAttribute.FullName = "System.Diagnostics.DebuggerStepThroughAttribute";
                DebuggerStepThroughAttribute.Assembly = asm;
                DebuggerStepThroughAttribute.Interfaces = [];
                DebuggerStepThroughAttribute.IsInst = function (t) { return t instanceof DebuggerStepThroughAttribute ? t : null; };
                DebuggerStepThroughAttribute.IsValueType = false;
                DebuggerStepThroughAttribute.IsPrimitive = false;
                DebuggerStepThroughAttribute.IsInterface = false;
                DebuggerStepThroughAttribute.IsGenericTypeDefinition = false;
                DebuggerStepThroughAttribute.IsNullable = false;
                DebuggerStepThroughAttribute.ArrayType = Array;
                DebuggerStepThroughAttribute.MetadataName = "asm0.t2000056";
                DebuggerStepThroughAttribute.GenericArguments = {};
                (DebuggerStepThroughAttribute.GenericArguments)["asm0.t2000056"] = [];
                (DebuggerStepThroughAttribute.GenericArguments)["asm0.t2000015"] = [];
                (DebuggerStepThroughAttribute.GenericArguments)["asm0.t2000002"] = [];
                DebuggerStepThroughAttribute.prototype.vtable = {
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
                DebuggerStepThroughAttribute.prototype.ifacemap = {};
            };
            DebuggerStepThroughAttribute.prototype = new (((asm0)["System.Attribute"])())();
            return c;
        };
    })();
    (asm)["System.AttributeTargets"] = (function ()
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
            function AttributeTargets()
            {
                (AttributeTargets.init)();
                this.constructor = AttributeTargets;
            };
            c = AttributeTargets;
            ct = c;
            AttributeTargets.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                AttributeTargets.Assembly = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.Module = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.Class = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.Struct = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.Enum = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.Constructor = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.Method = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.Property = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.Field = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.Event = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.Interface = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.Parameter = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.Delegate = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.ReturnValue = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.GenericParameter = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.All = new (((asm0)["System.AttributeTargets"])())();
                AttributeTargets.CustomAttributes = [
                    [
                        ((asm0)["System.FlagsAttribute"])(),
                        asm0.x600008b
                    ]
                ];
                AttributeTargets.Methods = [];
                AttributeTargets.BaseType = ((asm0)["System.Enum"])();
                AttributeTargets.FullName = "System.AttributeTargets";
                AttributeTargets.Assembly = asm;
                AttributeTargets.Interfaces = [];
                AttributeTargets.IsInst = function (t) { return t instanceof AttributeTargets ? t : null; };
                AttributeTargets.IsValueType = true;
                AttributeTargets.IsPrimitive = false;
                AttributeTargets.IsInterface = false;
                AttributeTargets.IsGenericTypeDefinition = false;
                AttributeTargets.IsNullable = false;
                AttributeTargets.ArrayType = Array;
                AttributeTargets.MetadataName = "asm0.t2000057";
                AttributeTargets.GenericArguments = {};
                (AttributeTargets.GenericArguments)["asm0.t2000057"] = [];
                (AttributeTargets.GenericArguments)["asm0.t2000017"] = [];
                (AttributeTargets.GenericArguments)["asm0.t2000006"] = [];
                (AttributeTargets.GenericArguments)["asm0.t2000002"] = [];
                AttributeTargets.prototype.value__ = 0;
                AttributeTargets.prototype.vtable = {
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
                AttributeTargets.prototype.ifacemap = {};
            };
            AttributeTargets.prototype = new (((asm0)["System.Enum"])())();
            (((asm0)["System.Enum"])().init)();
            return c;
        };
    })();
    (asm)["System.Nullable`1"] = (function ()
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
            function Nullable_1()
            {
                (Nullable_1.init)();
                this.constructor = Nullable_1;
            };
            c = Nullable_1;
            tree_set([
                T
            ],ct,c);
            Nullable_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Nullable_1.CustomAttributes = [
                    [
                        ((asm0)["System.Diagnostics.DebuggerStepThroughAttribute"])(),
                        asm0.x6000158
                    ]
                ];
                Nullable_1.Methods = [
                    [
                        asm0,
                        "x600015b",
                        "get_HasValue"
                    ],
                    [
                        asm0,
                        "x600015c",
                        "get_Value"
                    ],
                    [
                        asm0,
                        "x600015d",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x600015f",
                        "GetHashCode"
                    ],
                    [
                        asm0,
                        "x6000160",
                        "GetValueOrDefault"
                    ],
                    [
                        asm0,
                        "x6000161",
                        "GetValueOrDefault"
                    ],
                    [
                        asm0,
                        "x6000162",
                        "ToString"
                    ]
                ];
                Nullable_1.BaseType = ((asm0)["System.ValueType"])();
                Nullable_1.FullName = "System.Nullable`1";
                Nullable_1.Assembly = asm;
                Nullable_1.Interfaces = [];
                Nullable_1.IsInst = function (t) { return t instanceof Nullable_1 ? t : null; };
                Nullable_1.IsValueType = true;
                Nullable_1.IsPrimitive = false;
                Nullable_1.IsInterface = false;
                Nullable_1.IsGenericTypeDefinition = true;
                Nullable_1.IsNullable = true;
                Nullable_1.ArrayType = Array;
                Nullable_1.MetadataName = "asm0.t2000059";
                Nullable_1.GenericArguments = {};
                (Nullable_1.GenericArguments)["asm0.t2000059"] = [
                    T
                ];
                (Nullable_1.GenericArguments)["asm0.t2000006"] = [];
                (Nullable_1.GenericArguments)["asm0.t2000002"] = [];
                Nullable_1.prototype.value = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
                Nullable_1.prototype.has_value = false;
                Nullable_1.prototype.vtable = {
                    'asm0.x6000008': function ()
                    {
                        return asm0.x600015d;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600015f;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000162;
                    }
                };
                Nullable_1.prototype.ifacemap = {};
            };
            Nullable_1.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.SerializableAttribute"] = (function ()
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
            function SerializableAttribute()
            {
                (SerializableAttribute.init)();
                this.constructor = SerializableAttribute;
            };
            c = SerializableAttribute;
            ct = c;
            SerializableAttribute.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                SerializableAttribute.CustomAttributes = [
                    [
                        ((asm0)["System.AttributeUsageAttribute"])(),
                        asm0.x6000054,
                        [
                            (4124|0)
                        ],
                        {
                            'Inherited': [
                                ((asm0)["System.Boolean"])(),
                                false
                            ]
                        }
                    ]
                ];
                SerializableAttribute.Methods = [];
                SerializableAttribute.BaseType = ((asm0)["System.Attribute"])();
                SerializableAttribute.FullName = "System.SerializableAttribute";
                SerializableAttribute.Assembly = asm;
                SerializableAttribute.Interfaces = [];
                SerializableAttribute.IsInst = function (t) { return t instanceof SerializableAttribute ? t : null; };
                SerializableAttribute.IsValueType = false;
                SerializableAttribute.IsPrimitive = false;
                SerializableAttribute.IsInterface = false;
                SerializableAttribute.IsGenericTypeDefinition = false;
                SerializableAttribute.IsNullable = false;
                SerializableAttribute.ArrayType = Array;
                SerializableAttribute.MetadataName = "asm0.t200005a";
                SerializableAttribute.GenericArguments = {};
                (SerializableAttribute.GenericArguments)["asm0.t200005a"] = [];
                (SerializableAttribute.GenericArguments)["asm0.t2000015"] = [];
                (SerializableAttribute.GenericArguments)["asm0.t2000002"] = [];
                SerializableAttribute.prototype.vtable = {
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
                SerializableAttribute.prototype.ifacemap = {};
            };
            SerializableAttribute.prototype = new (((asm0)["System.Attribute"])())();
            return c;
        };
    })();
    (asm)["System.String"] = (function ()
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
            function $$String()
            {
                ($$String.init)();
                this.constructor = $$String;
            };
            c = $$String;
            ct = c;
            $$String.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                $$String.Empty = null;
                $$String.CustomAttributes = [
                    [
                        ((asm0)["System.Reflection.DefaultMemberAttribute"])(),
                        asm0.x6000182,
                        [
                            new_string("Chars")
                        ]
                    ]
                ];
                $$String.Methods = [
                    [
                        asm0,
                        "x600016d",
                        "get_Chars"
                    ],
                    [
                        asm0,
                        "x6000176",
                        "Replace"
                    ],
                    [
                        asm0,
                        "x6000177",
                        "get_Length"
                    ],
                    [
                        asm0,
                        "x6000178",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x600017b",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x600017c",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x600017e",
                        "GetHashCode"
                    ]
                ];
                $$String.BaseType = ((asm0)["System.Object"])();
                $$String.FullName = "System.String";
                $$String.Assembly = asm;
                $$String.Interfaces = [];
                $$String.IsInst = function (t) { return t instanceof $$String ? t : null; };
                $$String.IsValueType = false;
                $$String.IsPrimitive = false;
                $$String.IsInterface = false;
                $$String.IsGenericTypeDefinition = false;
                $$String.IsNullable = false;
                $$String.ArrayType = Array;
                $$String.MetadataName = "asm0.t200005b";
                $$String.GenericArguments = {};
                ($$String.GenericArguments)["asm0.t200005b"] = [];
                ($$String.GenericArguments)["asm0.t2000002"] = [];
                $$String.prototype.jsstr = null;
                $$String.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000178;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x600017c;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600017e;
                    }
                };
                $$String.prototype.ifacemap = {};
            };
            $$String.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.Reflection.DefaultMemberAttribute"] = (function ()
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
            function DefaultMemberAttribute()
            {
                (DefaultMemberAttribute.init)();
                this.constructor = DefaultMemberAttribute;
            };
            c = DefaultMemberAttribute;
            ct = c;
            DefaultMemberAttribute.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                DefaultMemberAttribute.CustomAttributes = [
                    [
                        ((asm0)["System.AttributeUsageAttribute"])(),
                        asm0.x6000054,
                        [
                            (1036|0)
                        ]
                    ]
                ];
                DefaultMemberAttribute.Methods = [
                    [
                        asm0,
                        "x6000183",
                        "get_MemberName"
                    ]
                ];
                DefaultMemberAttribute.BaseType = ((asm0)["System.Attribute"])();
                DefaultMemberAttribute.FullName = "System.Reflection.DefaultMemberAttribute";
                DefaultMemberAttribute.Assembly = asm;
                DefaultMemberAttribute.Interfaces = [];
                DefaultMemberAttribute.IsInst = function (t) { return t instanceof DefaultMemberAttribute ? t : null; };
                DefaultMemberAttribute.IsValueType = false;
                DefaultMemberAttribute.IsPrimitive = false;
                DefaultMemberAttribute.IsInterface = false;
                DefaultMemberAttribute.IsGenericTypeDefinition = false;
                DefaultMemberAttribute.IsNullable = false;
                DefaultMemberAttribute.ArrayType = Array;
                DefaultMemberAttribute.MetadataName = "asm0.t200005c";
                DefaultMemberAttribute.GenericArguments = {};
                (DefaultMemberAttribute.GenericArguments)["asm0.t200005c"] = [];
                (DefaultMemberAttribute.GenericArguments)["asm0.t2000015"] = [];
                (DefaultMemberAttribute.GenericArguments)["asm0.t2000002"] = [];
                DefaultMemberAttribute.prototype.System_ReflectionDefaultMemberAttributemember_name = null;
                DefaultMemberAttribute.prototype.vtable = {
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
                DefaultMemberAttribute.prototype.ifacemap = {};
            };
            DefaultMemberAttribute.prototype = new (((asm0)["System.Attribute"])())();
            return c;
        };
    })();
    (asm)["System.UInt16"] = (function ()
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
            function UInt16()
            {
                (UInt16.init)();
                this.constructor = UInt16;
            };
            c = UInt16;
            ct = c;
            UInt16.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                UInt16.MaxValue = 0;
                UInt16.MinValue = 0;
                UInt16.CustomAttributes = [];
                UInt16.Methods = [
                    [
                        asm0,
                        "x6000185",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x6000186",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x6000187",
                        "GetHashCode"
                    ]
                ];
                UInt16.BaseType = ((asm0)["System.ValueType"])();
                UInt16.FullName = "System.UInt16";
                UInt16.Assembly = asm;
                UInt16.Interfaces = [];
                UInt16.IsInst = function (t) { try { return t.type == UInt16 ? t : null; } catch (e) { return false; } };
                UInt16.IsValueType = true;
                UInt16.IsPrimitive = true;
                UInt16.IsInterface = false;
                UInt16.IsGenericTypeDefinition = false;
                UInt16.IsNullable = false;
                UInt16.ArrayType = Uint16Array;
                UInt16.MetadataName = "asm0.t200005e";
                UInt16.GenericArguments = {};
                (UInt16.GenericArguments)["asm0.t200005e"] = [];
                (UInt16.GenericArguments)["asm0.t2000006"] = [];
                (UInt16.GenericArguments)["asm0.t2000002"] = [];
                UInt16.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000185;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000186;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000187;
                    }
                };
                UInt16.prototype.ifacemap = {};
            };
            UInt16.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.UInt32"] = (function ()
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
            function UInt32()
            {
                (UInt32.init)();
                this.constructor = UInt32;
            };
            c = UInt32;
            ct = c;
            UInt32.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                UInt32.MaxValue = 0;
                UInt32.MinValue = 0;
                UInt32.CustomAttributes = [];
                UInt32.Methods = [
                    [
                        asm0,
                        "x6000188",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x6000189",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x600018a",
                        "GetHashCode"
                    ],
                    [
                        asm0,
                        "x600018b",
                        "CompareTo"
                    ],
                    [
                        asm0,
                        "x600018c",
                        "CompareTo"
                    ]
                ];
                UInt32.BaseType = ((asm0)["System.ValueType"])();
                UInt32.FullName = "System.UInt32";
                UInt32.Assembly = asm;
                UInt32.Interfaces = [
                    ((asm0)["System.IComparable`1"])(((asm0)["System.UInt32"])()),
                    ((asm0)["System.IComparable"])()
                ];
                UInt32.IsInst = function (t) { try { return t.type == UInt32 ? t : null; } catch (e) { return false; } };
                UInt32.IsValueType = true;
                UInt32.IsPrimitive = true;
                UInt32.IsInterface = false;
                UInt32.IsGenericTypeDefinition = false;
                UInt32.IsNullable = false;
                UInt32.ArrayType = Uint32Array;
                UInt32.MetadataName = "asm0.t200005f";
                UInt32.GenericArguments = {};
                (UInt32.GenericArguments)["asm0.t200005f"] = [];
                (UInt32.GenericArguments)["asm0.t2000006"] = [];
                (UInt32.GenericArguments)["asm0.t2000002"] = [];
                UInt32.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000188;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000189;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600018a;
                    },
                    'asm0.x600018b': function ()
                    {
                        return asm0.x600018b;
                    },
                    'asm0.x600018c': function ()
                    {
                        return asm0.x600018c;
                    }
                };
                UInt32.prototype.ifacemap = {};
                tree_set([
                    ((asm0)["System.IComparable`1"])(((asm0)["System.UInt32"])()),
                    ((asm0)["System.UInt32"])()
                ],UInt32.prototype.ifacemap,{
                    'x6000084': function ()
                    {
                        return asm0.x600018c;
                    }
                });
                tree_set([
                    ((asm0)["System.IComparable"])()
                ],UInt32.prototype.ifacemap,{
                    'x6000085': function ()
                    {
                        return asm0.x600018b;
                    }
                });
            };
            UInt32.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.UInt64"] = (function ()
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
            function UInt64()
            {
                (UInt64.init)();
                this.constructor = UInt64;
            };
            c = UInt64;
            ct = c;
            UInt64.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                UInt64.MinValue = 0;
                UInt64.MaxValue = 0;
                UInt64.CustomAttributes = [];
                UInt64.Methods = [
                    [
                        asm0,
                        "x600018d",
                        "ToString"
                    ],
                    [
                        asm0,
                        "x6000197",
                        "Equals"
                    ],
                    [
                        asm0,
                        "x6000198",
                        "GetHashCode"
                    ]
                ];
                UInt64.BaseType = ((asm0)["System.ValueType"])();
                UInt64.FullName = "System.UInt64";
                UInt64.Assembly = asm;
                UInt64.Interfaces = [];
                UInt64.IsInst = function (t) { try { return t.type == UInt64 ? t : null; } catch (e) { return false; } };
                UInt64.IsValueType = true;
                UInt64.IsPrimitive = true;
                UInt64.IsInterface = false;
                UInt64.IsGenericTypeDefinition = false;
                UInt64.IsNullable = false;
                UInt64.ArrayType = Array;
                UInt64.MetadataName = "asm0.t2000060";
                UInt64.GenericArguments = {};
                (UInt64.GenericArguments)["asm0.t2000060"] = [];
                (UInt64.GenericArguments)["asm0.t2000006"] = [];
                (UInt64.GenericArguments)["asm0.t2000002"] = [];
                UInt64.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600018d;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000197;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000198;
                    }
                };
                UInt64.prototype.ifacemap = {};
            };
            UInt64.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.UIntPtr"] = (function ()
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
            function UIntPtr()
            {
                (UIntPtr.init)();
                this.constructor = UIntPtr;
            };
            c = UIntPtr;
            ct = c;
            UIntPtr.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                UIntPtr.CustomAttributes = [];
                UIntPtr.Methods = [
                    [
                        asm0,
                        "x600019a",
                        "ToString"
                    ]
                ];
                UIntPtr.BaseType = ((asm0)["System.ValueType"])();
                UIntPtr.FullName = "System.UIntPtr";
                UIntPtr.Assembly = asm;
                UIntPtr.Interfaces = [];
                UIntPtr.IsInst = function (t) { try { return t.type == UIntPtr ? t : null; } catch (e) { return false; } };
                UIntPtr.IsValueType = true;
                UIntPtr.IsPrimitive = true;
                UIntPtr.IsInterface = false;
                UIntPtr.IsGenericTypeDefinition = false;
                UIntPtr.IsNullable = false;
                UIntPtr.ArrayType = Array;
                UIntPtr.MetadataName = "asm0.t2000061";
                UIntPtr.GenericArguments = {};
                (UIntPtr.GenericArguments)["asm0.t2000061"] = [];
                (UIntPtr.GenericArguments)["asm0.t2000006"] = [];
                (UIntPtr.GenericArguments)["asm0.t2000002"] = [];
                UIntPtr.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600019a;
                    },
                    'asm0.x6000008': function ()
                    {
                        return asm0.x6000016;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                UIntPtr.prototype.ifacemap = {};
            };
            UIntPtr.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["System.Void"] = (function ()
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
            function Void()
            {
                (Void.init)();
                this.constructor = Void;
            };
            c = Void;
            ct = c;
            Void.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Void.CustomAttributes = [];
                Void.Methods = [];
                Void.BaseType = ((asm0)["System.ValueType"])();
                Void.FullName = "System.Void";
                Void.Assembly = asm;
                Void.Interfaces = [];
                Void.IsInst = function (t) { return t instanceof Void ? t : null; };
                Void.IsValueType = true;
                Void.IsPrimitive = false;
                Void.IsInterface = false;
                Void.IsGenericTypeDefinition = false;
                Void.IsNullable = false;
                Void.ArrayType = Array;
                Void.MetadataName = "asm0.t2000062";
                Void.GenericArguments = {};
                (Void.GenericArguments)["asm0.t2000062"] = [];
                (Void.GenericArguments)["asm0.t2000006"] = [];
                (Void.GenericArguments)["asm0.t2000002"] = [];
                Void.prototype.vtable = {
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
                Void.prototype.ifacemap = {};
            };
            Void.prototype = {};
            (((asm0)["System.ValueType"])().init)();
            return c;
        };
    })();
    (asm)["Braille.JavaScript.Array+<GetEnumerator>d__0"] = (function ()
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
            function _GetEnumerator_d__0()
            {
                (_GetEnumerator_d__0.init)();
                this.constructor = _GetEnumerator_d__0;
            };
            c = _GetEnumerator_d__0;
            ct = c;
            _GetEnumerator_d__0.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                _GetEnumerator_d__0.CustomAttributes = [];
                _GetEnumerator_d__0.Methods = [];
                _GetEnumerator_d__0.BaseType = ((asm0)["System.Object"])();
                _GetEnumerator_d__0.FullName = "Braille.JavaScript.Array+<GetEnumerator>d__0";
                _GetEnumerator_d__0.Assembly = asm;
                _GetEnumerator_d__0.Interfaces = [
                    ((asm0)["System.Collections.Generic.IEnumerator`1"])(((asm0)["System.Object"])()),
                    ((asm0)["System.Collections.IEnumerator"])(),
                    ((asm0)["System.IDisposable"])()
                ];
                _GetEnumerator_d__0.IsInst = function (t) { return t instanceof _GetEnumerator_d__0 ? t : null; };
                _GetEnumerator_d__0.IsValueType = false;
                _GetEnumerator_d__0.IsPrimitive = false;
                _GetEnumerator_d__0.IsInterface = false;
                _GetEnumerator_d__0.IsGenericTypeDefinition = false;
                _GetEnumerator_d__0.IsNullable = false;
                _GetEnumerator_d__0.ArrayType = Array;
                _GetEnumerator_d__0.MetadataName = "asm0.t2000063";
                _GetEnumerator_d__0.GenericArguments = {};
                (_GetEnumerator_d__0.GenericArguments)["asm0.t2000063"] = [];
                (_GetEnumerator_d__0.GenericArguments)["asm0.t2000002"] = [];
                (_GetEnumerator_d__0.prototype)["Braille_JavaScript_GetEnumerator_d__0<>2__current"] = null;
                (_GetEnumerator_d__0.prototype)["Braille_JavaScript_GetEnumerator_d__0<>1__state"] = 0;
                (_GetEnumerator_d__0.prototype)["<>4__this"] = null;
                (_GetEnumerator_d__0.prototype)["<a>5__1"] = null;
                (_GetEnumerator_d__0.prototype)["<i>5__2"] = 0;
                _GetEnumerator_d__0.prototype.vtable = {
                    'asm0.x600019b': function ()
                    {
                        return asm0.x600019b;
                    },
                    'asm0.x600019c': function ()
                    {
                        return asm0.x600019c;
                    },
                    'asm0.x600019d': function ()
                    {
                        return asm0.x600019d;
                    },
                    'asm0.x600019e': function ()
                    {
                        return asm0.x600019e;
                    },
                    'asm0.x600019f': function ()
                    {
                        return asm0.x600019f;
                    },
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
                _GetEnumerator_d__0.prototype.ifacemap = {};
                tree_set([
                    ((asm0)["System.Collections.Generic.IEnumerator`1"])(((asm0)["System.Object"])()),
                    ((asm0)["System.Object"])()
                ],_GetEnumerator_d__0.prototype.ifacemap,{
                    'x60000e7': function ()
                    {
                        return asm0.x600019c;
                    }
                });
                tree_set([
                    ((asm0)["System.Collections.IEnumerator"])()
                ],_GetEnumerator_d__0.prototype.ifacemap,{
                    'x60000e4': function ()
                    {
                        return asm0.x600019f;
                    },
                    'x60000e5': function ()
                    {
                        return asm0.x600019b;
                    },
                    'x60000e6': function ()
                    {
                        return asm0.x600019d;
                    }
                });
                tree_set([
                    ((asm0)["System.IDisposable"])()
                ],_GetEnumerator_d__0.prototype.ifacemap,{
                    'x600008f': function ()
                    {
                        return asm0.x600019e;
                    }
                });
            };
            _GetEnumerator_d__0.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.Array+<>c__DisplayClass1`1"] = (function ()
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
            function __c__DisplayClass1_1()
            {
                (__c__DisplayClass1_1.init)();
                this.constructor = __c__DisplayClass1_1;
            };
            c = __c__DisplayClass1_1;
            tree_set([
                T
            ],ct,c);
            __c__DisplayClass1_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                __c__DisplayClass1_1.CustomAttributes = [];
                __c__DisplayClass1_1.Methods = [
                    [
                        asm0,
                        "x60001a2",
                        "<Sort>b__0"
                    ]
                ];
                __c__DisplayClass1_1.BaseType = ((asm0)["System.Object"])();
                __c__DisplayClass1_1.FullName = "System.Array+<>c__DisplayClass1`1";
                __c__DisplayClass1_1.Assembly = asm;
                __c__DisplayClass1_1.Interfaces = [];
                __c__DisplayClass1_1.IsInst = function (t) { return t instanceof __c__DisplayClass1_1 ? t : null; };
                __c__DisplayClass1_1.IsValueType = false;
                __c__DisplayClass1_1.IsPrimitive = false;
                __c__DisplayClass1_1.IsInterface = false;
                __c__DisplayClass1_1.IsGenericTypeDefinition = true;
                __c__DisplayClass1_1.IsNullable = false;
                __c__DisplayClass1_1.ArrayType = Array;
                __c__DisplayClass1_1.MetadataName = "asm0.t2000064";
                __c__DisplayClass1_1.GenericArguments = {};
                (__c__DisplayClass1_1.GenericArguments)["asm0.t2000064"] = [
                    T
                ];
                (__c__DisplayClass1_1.GenericArguments)["asm0.t2000002"] = [];
                __c__DisplayClass1_1.prototype.comparer = null;
                __c__DisplayClass1_1.prototype.vtable = {
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
                __c__DisplayClass1_1.prototype.ifacemap = {};
            };
            __c__DisplayClass1_1.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
})(asm0 || (asm0 = {}));
var asm1; (function (asm)
{
    asm.FullName = "ULong.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    /* static Void Main()*/
    asm.x600000c_init = function ()
    {
        (((asm0)["System.UInt64"])().init)();
        (((asm0)["System.Double"])().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        (asm.x600000c_init.apply)(this,arguments);
        return (asm.x600000c_.apply)(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var t1;
        t0 = ((asm0)["System.UInt64"])();
        t1 = ((asm0)["System.Double"])();
        /* IL_00: ldc.i4.1 */
        /* IL_01: conv.i8 */
        /* IL_02: box System.UInt64*/
        /* IL_07: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_0C: ldc.i4.2 */
        /* IL_0D: conv.i8 */
        /* IL_0E: box System.UInt64*/
        /* IL_13: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((2|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_18: ldc.i4.3 */
        /* IL_19: conv.i8 */
        /* IL_1A: box System.UInt64*/
        /* IL_1F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((3|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_24: ldc.i4.4 */
        /* IL_25: conv.i8 */
        /* IL_26: box System.UInt64*/
        /* IL_2B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((4|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_30: ldc.i4.5 */
        /* IL_31: conv.i8 */
        /* IL_32: box System.UInt64*/
        /* IL_37: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((5|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_3C: ldc.i4.6 */
        /* IL_3D: conv.i8 */
        /* IL_3E: box System.UInt64*/
        /* IL_43: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((6|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_48: ldc.i4.7 */
        /* IL_49: conv.i8 */
        /* IL_4A: box System.UInt64*/
        /* IL_4F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((7|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_54: ldc.i4.8 */
        /* IL_55: conv.i8 */
        /* IL_56: box System.UInt64*/
        /* IL_5B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((8|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_60: ldc.i4.s 9*/
        /* IL_62: conv.i8 */
        /* IL_63: box System.UInt64*/
        /* IL_68: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((9|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_6D: ldc.i4.s 10*/
        /* IL_6F: conv.i8 */
        /* IL_70: box System.UInt64*/
        /* IL_75: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((10|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_7A: ldc.i4.s 11*/
        /* IL_7C: conv.i8 */
        /* IL_7D: box System.UInt64*/
        /* IL_82: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((11|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_87: ldc.i4.s 12*/
        /* IL_89: conv.i8 */
        /* IL_8A: box System.UInt64*/
        /* IL_8F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((12|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_94: ldc.i4.s 13*/
        /* IL_96: conv.i8 */
        /* IL_97: box System.UInt64*/
        /* IL_9C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((13|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_A1: ldc.i4.s 14*/
        /* IL_A3: conv.i8 */
        /* IL_A4: box System.UInt64*/
        /* IL_A9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((14|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_AE: ldc.i4.s 15*/
        /* IL_B0: conv.i8 */
        /* IL_B1: box System.UInt64*/
        /* IL_B6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((15|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_BB: ldc.i4.s 16*/
        /* IL_BD: conv.i8 */
        /* IL_BE: box System.UInt64*/
        /* IL_C3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((16|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_C8: ldc.i4.s 17*/
        /* IL_CA: conv.i8 */
        /* IL_CB: box System.UInt64*/
        /* IL_D0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((17|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_D5: ldc.i4.s 18*/
        /* IL_D7: conv.i8 */
        /* IL_D8: box System.UInt64*/
        /* IL_DD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((18|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_E2: ldc.i4.s 19*/
        /* IL_E4: conv.i8 */
        /* IL_E5: box System.UInt64*/
        /* IL_EA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((19|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_EF: ldc.i4.s 20*/
        /* IL_F1: conv.i8 */
        /* IL_F2: box System.UInt64*/
        /* IL_F7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((20|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_FC: ldc.i4.s 21*/
        /* IL_FE: conv.i8 */
        /* IL_FF: box System.UInt64*/
        /* IL_104: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((21|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_109: ldc.i4.s 15*/
        /* IL_10B: conv.i8 */
        /* IL_10C: box System.UInt64*/
        /* IL_111: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((15|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_116: ldc.i4 255*/
        /* IL_11B: conv.i8 */
        /* IL_11C: box System.UInt64*/
        /* IL_121: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((255|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_126: ldc.i4 4095*/
        /* IL_12B: conv.i8 */
        /* IL_12C: box System.UInt64*/
        /* IL_131: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((4095|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_136: ldc.i4 65535*/
        /* IL_13B: conv.i8 */
        /* IL_13C: box System.UInt64*/
        /* IL_141: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((65535|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_146: ldc.i4 1048575*/
        /* IL_14B: conv.i8 */
        /* IL_14C: box System.UInt64*/
        /* IL_151: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((1048575|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_156: ldc.i4 16777215*/
        /* IL_15B: conv.i8 */
        /* IL_15C: box System.UInt64*/
        /* IL_161: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((16777215|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_166: ldc.i4 268435455*/
        /* IL_16B: conv.i8 */
        /* IL_16C: box System.UInt64*/
        /* IL_171: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((268435455|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_176: ldc.i4.m1 */
        /* IL_177: conv.u8 */
        /* IL_178: box System.UInt64*/
        /* IL_17D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_u8((-1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_182: ldc.i8 68719476735*/
        /* IL_18B: box System.UInt64*/
        /* IL_190: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_195: ldc.i8 1099511627775*/
        /* IL_19E: box System.UInt64*/
        /* IL_1A3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1A8: ldc.i8 17592186044415*/
        /* IL_1B1: box System.UInt64*/
        /* IL_1B6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1BB: ldc.i8 281474976710655*/
        /* IL_1C4: box System.UInt64*/
        /* IL_1C9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1CE: ldc.i8 4503599627370495*/
        /* IL_1D7: box System.UInt64*/
        /* IL_1DC: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1E1: ldc.i8 72057594037927935*/
        /* IL_1EA: box System.UInt64*/
        /* IL_1EF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1F4: ldc.i4.0 */
        /* IL_1F5: conv.i8 */
        /* IL_1F6: box System.UInt64*/
        /* IL_1FB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((0|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_200: ldc.i4.1 */
        /* IL_201: conv.i8 */
        /* IL_202: box System.UInt64*/
        /* IL_207: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_20C: ldc.i4.s 16*/
        /* IL_20E: conv.i8 */
        /* IL_20F: box System.UInt64*/
        /* IL_214: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((16|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_219: ldc.i4 257*/
        /* IL_21E: conv.i8 */
        /* IL_21F: box System.UInt64*/
        /* IL_224: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((257|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_229: ldc.i4 4112*/
        /* IL_22E: conv.i8 */
        /* IL_22F: box System.UInt64*/
        /* IL_234: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((4112|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_239: ldc.i4 65793*/
        /* IL_23E: conv.i8 */
        /* IL_23F: box System.UInt64*/
        /* IL_244: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((65793|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_249: ldc.i4 1052688*/
        /* IL_24E: conv.i8 */
        /* IL_24F: box System.UInt64*/
        /* IL_254: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((1052688|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_259: ldc.i4 16843009*/
        /* IL_25E: conv.i8 */
        /* IL_25F: box System.UInt64*/
        /* IL_264: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((16843009|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_269: ldc.i4 269488144*/
        /* IL_26E: conv.i8 */
        /* IL_26F: box System.UInt64*/
        /* IL_274: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((269488144|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_279: ldc.i8 4311810305*/
        /* IL_282: box System.UInt64*/
        /* IL_287: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([
                0x1010101,
                0x1
            ]),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_28C: ldc.i8 68988964880*/
        /* IL_295: box System.UInt64*/
        /* IL_29A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([
                0x10101010,
                0x10
            ]),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_29F: ldc.i8 1103823438081*/
        /* IL_2A8: box System.UInt64*/
        /* IL_2AD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([
                0x1010101,
                0x101
            ]),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_2B2: ldc.i8 17661175009296*/
        /* IL_2BB: box System.UInt64*/
        /* IL_2C0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([
                0x10101010,
                0x1010
            ]),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_2C5: ldc.i8 282578800148737*/
        /* IL_2CE: box System.UInt64*/
        /* IL_2D3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([
                0x1010101,
                0x10101
            ]),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_2D8: ldc.i4.s 15*/
        /* IL_2DA: conv.i8 */
        /* IL_2DB: ldc.i4.1 */
        /* IL_2DC: conv.i8 */
        /* IL_2DD: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_2E2: box System.UInt64*/
        /* IL_2E7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((15|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_2EC: ldc.i4 255*/
        /* IL_2F1: conv.i8 */
        /* IL_2F2: ldc.i4.1 */
        /* IL_2F3: conv.i8 */
        /* IL_2F4: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_2F9: box System.UInt64*/
        /* IL_2FE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_303: ldc.i4 4095*/
        /* IL_308: conv.i8 */
        /* IL_309: ldc.i4.1 */
        /* IL_30A: conv.i8 */
        /* IL_30B: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_310: box System.UInt64*/
        /* IL_315: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((4095|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_31A: ldc.i4 65535*/
        /* IL_31F: conv.i8 */
        /* IL_320: ldc.i4.1 */
        /* IL_321: conv.i8 */
        /* IL_322: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_327: box System.UInt64*/
        /* IL_32C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((65535|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_331: ldc.i4 1048575*/
        /* IL_336: conv.i8 */
        /* IL_337: ldc.i4.1 */
        /* IL_338: conv.i8 */
        /* IL_339: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_33E: box System.UInt64*/
        /* IL_343: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((1048575|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_348: ldc.i4 16777215*/
        /* IL_34D: conv.i8 */
        /* IL_34E: ldc.i4.1 */
        /* IL_34F: conv.i8 */
        /* IL_350: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_355: box System.UInt64*/
        /* IL_35A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((16777215|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_35F: ldc.i4 268435455*/
        /* IL_364: conv.i8 */
        /* IL_365: ldc.i4.1 */
        /* IL_366: conv.i8 */
        /* IL_367: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_36C: box System.UInt64*/
        /* IL_371: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((268435455|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_376: ldc.i4.m1 */
        /* IL_377: conv.u8 */
        /* IL_378: ldc.i4.1 */
        /* IL_379: conv.i8 */
        /* IL_37A: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_37F: box System.UInt64*/
        /* IL_384: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_u8((-1|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_389: ldc.i8 68719476735*/
        /* IL_392: ldc.i4.1 */
        /* IL_393: conv.i8 */
        /* IL_394: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_399: box System.UInt64*/
        /* IL_39E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_3A3: ldc.i8 1099511627775*/
        /* IL_3AC: ldc.i4.1 */
        /* IL_3AD: conv.i8 */
        /* IL_3AE: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_3B3: box System.UInt64*/
        /* IL_3B8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_3BD: ldc.i8 17592186044415*/
        /* IL_3C6: ldc.i4.1 */
        /* IL_3C7: conv.i8 */
        /* IL_3C8: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_3CD: box System.UInt64*/
        /* IL_3D2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_3D7: ldc.i8 281474976710655*/
        /* IL_3E0: ldc.i4.1 */
        /* IL_3E1: conv.i8 */
        /* IL_3E2: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_3E7: box System.UInt64*/
        /* IL_3EC: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_3F1: ldc.i8 4503599627370495*/
        /* IL_3FA: ldc.i4.1 */
        /* IL_3FB: conv.i8 */
        /* IL_3FC: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_401: box System.UInt64*/
        /* IL_406: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_40B: ldc.i8 72057594037927935*/
        /* IL_414: ldc.i4.1 */
        /* IL_415: conv.i8 */
        /* IL_416: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_41B: box System.UInt64*/
        /* IL_420: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_425: ldc.i4.s 15*/
        /* IL_427: conv.i8 */
        /* IL_428: ldc.i4.2 */
        /* IL_429: conv.i8 */
        /* IL_42A: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_42F: box System.UInt64*/
        /* IL_434: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((15|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_439: ldc.i4 255*/
        /* IL_43E: conv.i8 */
        /* IL_43F: ldc.i4.2 */
        /* IL_440: conv.i8 */
        /* IL_441: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_446: box System.UInt64*/
        /* IL_44B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((255|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_450: ldc.i4 4095*/
        /* IL_455: conv.i8 */
        /* IL_456: ldc.i4.2 */
        /* IL_457: conv.i8 */
        /* IL_458: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_45D: box System.UInt64*/
        /* IL_462: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((4095|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_467: ldc.i4 65535*/
        /* IL_46C: conv.i8 */
        /* IL_46D: ldc.i4.2 */
        /* IL_46E: conv.i8 */
        /* IL_46F: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_474: box System.UInt64*/
        /* IL_479: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((65535|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_47E: ldc.i4 1048575*/
        /* IL_483: conv.i8 */
        /* IL_484: ldc.i4.2 */
        /* IL_485: conv.i8 */
        /* IL_486: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_48B: box System.UInt64*/
        /* IL_490: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((1048575|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_495: ldc.i4 16777215*/
        /* IL_49A: conv.i8 */
        /* IL_49B: ldc.i4.2 */
        /* IL_49C: conv.i8 */
        /* IL_49D: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_4A2: box System.UInt64*/
        /* IL_4A7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((16777215|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_4AC: ldc.i4 268435455*/
        /* IL_4B1: conv.i8 */
        /* IL_4B2: ldc.i4.2 */
        /* IL_4B3: conv.i8 */
        /* IL_4B4: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_4B9: box System.UInt64*/
        /* IL_4BE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((268435455|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_4C3: ldc.i4.m1 */
        /* IL_4C4: conv.u8 */
        /* IL_4C5: ldc.i4.2 */
        /* IL_4C6: conv.i8 */
        /* IL_4C7: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_4CC: box System.UInt64*/
        /* IL_4D1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_u8((-1|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_4D6: ldc.i8 68719476735*/
        /* IL_4DF: ldc.i4.2 */
        /* IL_4E0: conv.i8 */
        /* IL_4E1: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_4E6: box System.UInt64*/
        /* IL_4EB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_4F0: ldc.i8 1099511627775*/
        /* IL_4F9: ldc.i4.2 */
        /* IL_4FA: conv.i8 */
        /* IL_4FB: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_500: box System.UInt64*/
        /* IL_505: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_50A: ldc.i8 17592186044415*/
        /* IL_513: ldc.i4.2 */
        /* IL_514: conv.i8 */
        /* IL_515: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_51A: box System.UInt64*/
        /* IL_51F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_524: ldc.i8 281474976710655*/
        /* IL_52D: ldc.i4.2 */
        /* IL_52E: conv.i8 */
        /* IL_52F: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_534: box System.UInt64*/
        /* IL_539: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_53E: ldc.i8 4503599627370495*/
        /* IL_547: ldc.i4.2 */
        /* IL_548: conv.i8 */
        /* IL_549: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_54E: box System.UInt64*/
        /* IL_553: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_558: ldc.i8 72057594037927935*/
        /* IL_561: ldc.i4.2 */
        /* IL_562: conv.i8 */
        /* IL_563: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_568: box System.UInt64*/
        /* IL_56D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_572: ldc.i4.s 15*/
        /* IL_574: conv.i8 */
        /* IL_575: ldc.i4.0 */
        /* IL_576: conv.i8 */
        /* IL_577: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_57C: box System.UInt64*/
        /* IL_581: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((15|0)),conv_i8((0|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_586: ldc.i4 255*/
        /* IL_58B: conv.i8 */
        /* IL_58C: ldc.i4.1 */
        /* IL_58D: conv.i8 */
        /* IL_58E: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_593: box System.UInt64*/
        /* IL_598: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_59D: ldc.i4 4095*/
        /* IL_5A2: conv.i8 */
        /* IL_5A3: ldc.i4.s 16*/
        /* IL_5A5: conv.i8 */
        /* IL_5A6: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_5AB: box System.UInt64*/
        /* IL_5B0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((4095|0)),conv_i8((16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_5B5: ldc.i4 65535*/
        /* IL_5BA: conv.i8 */
        /* IL_5BB: ldc.i4 257*/
        /* IL_5C0: conv.i8 */
        /* IL_5C1: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_5C6: box System.UInt64*/
        /* IL_5CB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((65535|0)),conv_i8((257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_5D0: ldc.i4 1048575*/
        /* IL_5D5: conv.i8 */
        /* IL_5D6: ldc.i4 4112*/
        /* IL_5DB: conv.i8 */
        /* IL_5DC: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_5E1: box System.UInt64*/
        /* IL_5E6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((1048575|0)),conv_i8((4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_5EB: ldc.i4 16777215*/
        /* IL_5F0: conv.i8 */
        /* IL_5F1: ldc.i4 65793*/
        /* IL_5F6: conv.i8 */
        /* IL_5F7: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_5FC: box System.UInt64*/
        /* IL_601: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((16777215|0)),conv_i8((65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_606: ldc.i4 268435455*/
        /* IL_60B: conv.i8 */
        /* IL_60C: ldc.i4 1052688*/
        /* IL_611: conv.i8 */
        /* IL_612: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_617: box System.UInt64*/
        /* IL_61C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((268435455|0)),conv_i8((1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_621: ldc.i4.m1 */
        /* IL_622: conv.u8 */
        /* IL_623: ldc.i4 16843009*/
        /* IL_628: conv.i8 */
        /* IL_629: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_62E: box System.UInt64*/
        /* IL_633: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_u8((-1|0)),conv_i8((16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_638: ldc.i8 68719476735*/
        /* IL_641: ldc.i4 269488144*/
        /* IL_646: conv.i8 */
        /* IL_647: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_64C: box System.UInt64*/
        /* IL_651: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_656: ldc.i8 1099511627775*/
        /* IL_65F: ldc.i8 4311810305*/
        /* IL_668: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_66D: box System.UInt64*/
        /* IL_672: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),new Uint32Array([
                0x1010101,
                0x1
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_677: ldc.i8 17592186044415*/
        /* IL_680: ldc.i8 68988964880*/
        /* IL_689: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_68E: box System.UInt64*/
        /* IL_693: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),new Uint32Array([
                0x10101010,
                0x10
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_698: ldc.i8 281474976710655*/
        /* IL_6A1: ldc.i8 1103823438081*/
        /* IL_6AA: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_6AF: box System.UInt64*/
        /* IL_6B4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),new Uint32Array([
                0x1010101,
                0x101
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_6B9: ldc.i8 4503599627370495*/
        /* IL_6C2: ldc.i8 17661175009296*/
        /* IL_6CB: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_6D0: box System.UInt64*/
        /* IL_6D5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),new Uint32Array([
                0x10101010,
                0x1010
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_6DA: ldc.i8 72057594037927935*/
        /* IL_6E3: ldc.i8 282578800148737*/
        /* IL_6EC: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_6F1: box System.UInt64*/
        /* IL_6F6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),new Uint32Array([
                0x1010101,
                0x10101
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_6FB: ldc.i4.s 15*/
        /* IL_6FD: conv.i8 */
        /* IL_6FE: ldc.i4.1 */
        /* IL_6FF: conv.i8 */
        /* IL_700: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_705: box System.UInt64*/
        /* IL_70A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((15|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_70F: ldc.i4 255*/
        /* IL_714: conv.i8 */
        /* IL_715: ldc.i4.1 */
        /* IL_716: conv.i8 */
        /* IL_717: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_71C: box System.UInt64*/
        /* IL_721: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_726: ldc.i4 4095*/
        /* IL_72B: conv.i8 */
        /* IL_72C: ldc.i4.1 */
        /* IL_72D: conv.i8 */
        /* IL_72E: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_733: box System.UInt64*/
        /* IL_738: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((4095|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_73D: ldc.i4 65535*/
        /* IL_742: conv.i8 */
        /* IL_743: ldc.i4.1 */
        /* IL_744: conv.i8 */
        /* IL_745: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_74A: box System.UInt64*/
        /* IL_74F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((65535|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_754: ldc.i4 1048575*/
        /* IL_759: conv.i8 */
        /* IL_75A: ldc.i4.1 */
        /* IL_75B: conv.i8 */
        /* IL_75C: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_761: box System.UInt64*/
        /* IL_766: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((1048575|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_76B: ldc.i4 16777215*/
        /* IL_770: conv.i8 */
        /* IL_771: ldc.i4.1 */
        /* IL_772: conv.i8 */
        /* IL_773: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_778: box System.UInt64*/
        /* IL_77D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((16777215|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_782: ldc.i4 268435455*/
        /* IL_787: conv.i8 */
        /* IL_788: ldc.i4.1 */
        /* IL_789: conv.i8 */
        /* IL_78A: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_78F: box System.UInt64*/
        /* IL_794: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((268435455|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_799: ldc.i4.m1 */
        /* IL_79A: conv.u8 */
        /* IL_79B: ldc.i4.1 */
        /* IL_79C: conv.i8 */
        /* IL_79D: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_7A2: box System.UInt64*/
        /* IL_7A7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_u8((-1|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_7AC: ldc.i8 68719476735*/
        /* IL_7B5: ldc.i4.1 */
        /* IL_7B6: conv.i8 */
        /* IL_7B7: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_7BC: box System.UInt64*/
        /* IL_7C1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_7C6: ldc.i8 1099511627775*/
        /* IL_7CF: ldc.i4.1 */
        /* IL_7D0: conv.i8 */
        /* IL_7D1: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_7D6: box System.UInt64*/
        /* IL_7DB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_7E0: ldc.i8 17592186044415*/
        /* IL_7E9: ldc.i4.1 */
        /* IL_7EA: conv.i8 */
        /* IL_7EB: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_7F0: box System.UInt64*/
        /* IL_7F5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_7FA: ldc.i8 281474976710655*/
        /* IL_803: ldc.i4.1 */
        /* IL_804: conv.i8 */
        /* IL_805: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_80A: box System.UInt64*/
        /* IL_80F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_814: ldc.i8 4503599627370495*/
        /* IL_81D: ldc.i4.1 */
        /* IL_81E: conv.i8 */
        /* IL_81F: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_824: box System.UInt64*/
        /* IL_829: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_82E: ldc.i8 72057594037927935*/
        /* IL_837: ldc.i4.1 */
        /* IL_838: conv.i8 */
        /* IL_839: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_83E: box System.UInt64*/
        /* IL_843: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_848: ldc.i4.s 15*/
        /* IL_84A: conv.i8 */
        /* IL_84B: ldc.i4.2 */
        /* IL_84C: conv.i8 */
        /* IL_84D: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_852: box System.UInt64*/
        /* IL_857: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((15|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_85C: ldc.i4 255*/
        /* IL_861: conv.i8 */
        /* IL_862: ldc.i4.2 */
        /* IL_863: conv.i8 */
        /* IL_864: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_869: box System.UInt64*/
        /* IL_86E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((255|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_873: ldc.i4 4095*/
        /* IL_878: conv.i8 */
        /* IL_879: ldc.i4.2 */
        /* IL_87A: conv.i8 */
        /* IL_87B: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_880: box System.UInt64*/
        /* IL_885: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((4095|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_88A: ldc.i4 65535*/
        /* IL_88F: conv.i8 */
        /* IL_890: ldc.i4.2 */
        /* IL_891: conv.i8 */
        /* IL_892: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_897: box System.UInt64*/
        /* IL_89C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((65535|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_8A1: ldc.i4 1048575*/
        /* IL_8A6: conv.i8 */
        /* IL_8A7: ldc.i4.2 */
        /* IL_8A8: conv.i8 */
        /* IL_8A9: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_8AE: box System.UInt64*/
        /* IL_8B3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((1048575|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_8B8: ldc.i4 16777215*/
        /* IL_8BD: conv.i8 */
        /* IL_8BE: ldc.i4.2 */
        /* IL_8BF: conv.i8 */
        /* IL_8C0: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_8C5: box System.UInt64*/
        /* IL_8CA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((16777215|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_8CF: ldc.i4 268435455*/
        /* IL_8D4: conv.i8 */
        /* IL_8D5: ldc.i4.2 */
        /* IL_8D6: conv.i8 */
        /* IL_8D7: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_8DC: box System.UInt64*/
        /* IL_8E1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((268435455|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_8E6: ldc.i4.m1 */
        /* IL_8E7: conv.u8 */
        /* IL_8E8: ldc.i4.2 */
        /* IL_8E9: conv.i8 */
        /* IL_8EA: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_8EF: box System.UInt64*/
        /* IL_8F4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_u8((-1|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_8F9: ldc.i8 68719476735*/
        /* IL_902: ldc.i4.2 */
        /* IL_903: conv.i8 */
        /* IL_904: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_909: box System.UInt64*/
        /* IL_90E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_913: ldc.i8 1099511627775*/
        /* IL_91C: ldc.i4.2 */
        /* IL_91D: conv.i8 */
        /* IL_91E: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_923: box System.UInt64*/
        /* IL_928: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_92D: ldc.i8 17592186044415*/
        /* IL_936: ldc.i4.2 */
        /* IL_937: conv.i8 */
        /* IL_938: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_93D: box System.UInt64*/
        /* IL_942: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_947: ldc.i8 281474976710655*/
        /* IL_950: ldc.i4.2 */
        /* IL_951: conv.i8 */
        /* IL_952: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_957: box System.UInt64*/
        /* IL_95C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_961: ldc.i8 4503599627370495*/
        /* IL_96A: ldc.i4.2 */
        /* IL_96B: conv.i8 */
        /* IL_96C: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_971: box System.UInt64*/
        /* IL_976: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_97B: ldc.i8 72057594037927935*/
        /* IL_984: ldc.i4.2 */
        /* IL_985: conv.i8 */
        /* IL_986: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_98B: box System.UInt64*/
        /* IL_990: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_995: ldc.i4.s 15*/
        /* IL_997: conv.i8 */
        /* IL_998: ldc.i4.0 */
        /* IL_999: conv.i8 */
        /* IL_99A: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_99F: box System.UInt64*/
        /* IL_9A4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((15|0)),conv_i8((0|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_9A9: ldc.i4 255*/
        /* IL_9AE: conv.i8 */
        /* IL_9AF: ldc.i4.1 */
        /* IL_9B0: conv.i8 */
        /* IL_9B1: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_9B6: box System.UInt64*/
        /* IL_9BB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_9C0: ldc.i4 4095*/
        /* IL_9C5: conv.i8 */
        /* IL_9C6: ldc.i4.s 16*/
        /* IL_9C8: conv.i8 */
        /* IL_9C9: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_9CE: box System.UInt64*/
        /* IL_9D3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((4095|0)),conv_i8((16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_9D8: ldc.i4 65535*/
        /* IL_9DD: conv.i8 */
        /* IL_9DE: ldc.i4 257*/
        /* IL_9E3: conv.i8 */
        /* IL_9E4: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_9E9: box System.UInt64*/
        /* IL_9EE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((65535|0)),conv_i8((257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_9F3: ldc.i4 1048575*/
        /* IL_9F8: conv.i8 */
        /* IL_9F9: ldc.i4 4112*/
        /* IL_9FE: conv.i8 */
        /* IL_9FF: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_A04: box System.UInt64*/
        /* IL_A09: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((1048575|0)),conv_i8((4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_A0E: ldc.i4 16777215*/
        /* IL_A13: conv.i8 */
        /* IL_A14: ldc.i4 65793*/
        /* IL_A19: conv.i8 */
        /* IL_A1A: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_A1F: box System.UInt64*/
        /* IL_A24: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((16777215|0)),conv_i8((65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_A29: ldc.i4 268435455*/
        /* IL_A2E: conv.i8 */
        /* IL_A2F: ldc.i4 1052688*/
        /* IL_A34: conv.i8 */
        /* IL_A35: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_A3A: box System.UInt64*/
        /* IL_A3F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((268435455|0)),conv_i8((1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_A44: ldc.i4.m1 */
        /* IL_A45: conv.u8 */
        /* IL_A46: ldc.i4 16843009*/
        /* IL_A4B: conv.i8 */
        /* IL_A4C: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_A51: box System.UInt64*/
        /* IL_A56: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_u8((-1|0)),conv_i8((16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_A5B: ldc.i8 68719476735*/
        /* IL_A64: ldc.i4 269488144*/
        /* IL_A69: conv.i8 */
        /* IL_A6A: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_A6F: box System.UInt64*/
        /* IL_A74: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_A79: ldc.i8 1099511627775*/
        /* IL_A82: ldc.i8 4311810305*/
        /* IL_A8B: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_A90: box System.UInt64*/
        /* IL_A95: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),new Uint32Array([
                0x1010101,
                0x1
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_A9A: ldc.i8 17592186044415*/
        /* IL_AA3: ldc.i8 68988964880*/
        /* IL_AAC: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_AB1: box System.UInt64*/
        /* IL_AB6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),new Uint32Array([
                0x10101010,
                0x10
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_ABB: ldc.i8 281474976710655*/
        /* IL_AC4: ldc.i8 1103823438081*/
        /* IL_ACD: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_AD2: box System.UInt64*/
        /* IL_AD7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),new Uint32Array([
                0x1010101,
                0x101
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_ADC: ldc.i8 4503599627370495*/
        /* IL_AE5: ldc.i8 17661175009296*/
        /* IL_AEE: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_AF3: box System.UInt64*/
        /* IL_AF8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),new Uint32Array([
                0x10101010,
                0x1010
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_AFD: ldc.i8 72057594037927935*/
        /* IL_B06: ldc.i8 282578800148737*/
        /* IL_B0F: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_B14: box System.UInt64*/
        /* IL_B19: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),new Uint32Array([
                0x1010101,
                0x10101
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_B1E: ldc.i4.s 15*/
        /* IL_B20: conv.i8 */
        /* IL_B21: ldc.i4.1 */
        /* IL_B22: conv.i8 */
        /* IL_B23: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_B28: box System.UInt64*/
        /* IL_B2D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((15|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_B32: ldc.i4 255*/
        /* IL_B37: conv.i8 */
        /* IL_B38: ldc.i4.1 */
        /* IL_B39: conv.i8 */
        /* IL_B3A: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_B3F: box System.UInt64*/
        /* IL_B44: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_B49: ldc.i4 4095*/
        /* IL_B4E: conv.i8 */
        /* IL_B4F: ldc.i4.1 */
        /* IL_B50: conv.i8 */
        /* IL_B51: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_B56: box System.UInt64*/
        /* IL_B5B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((4095|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_B60: ldc.i4 65535*/
        /* IL_B65: conv.i8 */
        /* IL_B66: ldc.i4.1 */
        /* IL_B67: conv.i8 */
        /* IL_B68: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_B6D: box System.UInt64*/
        /* IL_B72: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((65535|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_B77: ldc.i4 1048575*/
        /* IL_B7C: conv.i8 */
        /* IL_B7D: ldc.i4.1 */
        /* IL_B7E: conv.i8 */
        /* IL_B7F: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_B84: box System.UInt64*/
        /* IL_B89: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((1048575|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_B8E: ldc.i4 16777215*/
        /* IL_B93: conv.i8 */
        /* IL_B94: ldc.i4.1 */
        /* IL_B95: conv.i8 */
        /* IL_B96: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_B9B: box System.UInt64*/
        /* IL_BA0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((16777215|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_BA5: ldc.i4 268435455*/
        /* IL_BAA: conv.i8 */
        /* IL_BAB: ldc.i4.1 */
        /* IL_BAC: conv.i8 */
        /* IL_BAD: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_BB2: box System.UInt64*/
        /* IL_BB7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((268435455|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_BBC: ldc.i4.m1 */
        /* IL_BBD: conv.u8 */
        /* IL_BBE: ldc.i4.1 */
        /* IL_BBF: conv.i8 */
        /* IL_BC0: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_BC5: box System.UInt64*/
        /* IL_BCA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_u8((-1|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_BCF: ldc.i8 68719476735*/
        /* IL_BD8: ldc.i4.1 */
        /* IL_BD9: conv.i8 */
        /* IL_BDA: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_BDF: box System.UInt64*/
        /* IL_BE4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_BE9: ldc.i8 1099511627775*/
        /* IL_BF2: ldc.i4.1 */
        /* IL_BF3: conv.i8 */
        /* IL_BF4: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_BF9: box System.UInt64*/
        /* IL_BFE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_C03: ldc.i8 17592186044415*/
        /* IL_C0C: ldc.i4.1 */
        /* IL_C0D: conv.i8 */
        /* IL_C0E: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_C13: box System.UInt64*/
        /* IL_C18: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_C1D: ldc.i8 281474976710655*/
        /* IL_C26: ldc.i4.1 */
        /* IL_C27: conv.i8 */
        /* IL_C28: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_C2D: box System.UInt64*/
        /* IL_C32: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_C37: ldc.i8 4503599627370495*/
        /* IL_C40: ldc.i4.1 */
        /* IL_C41: conv.i8 */
        /* IL_C42: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_C47: box System.UInt64*/
        /* IL_C4C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_C51: ldc.i8 72057594037927935*/
        /* IL_C5A: ldc.i4.1 */
        /* IL_C5B: conv.i8 */
        /* IL_C5C: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_C61: box System.UInt64*/
        /* IL_C66: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_C6B: ldc.i4.s 15*/
        /* IL_C6D: conv.i8 */
        /* IL_C6E: ldc.i4.2 */
        /* IL_C6F: conv.i8 */
        /* IL_C70: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_C75: box System.UInt64*/
        /* IL_C7A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((15|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_C7F: ldc.i4 255*/
        /* IL_C84: conv.i8 */
        /* IL_C85: ldc.i4.2 */
        /* IL_C86: conv.i8 */
        /* IL_C87: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_C8C: box System.UInt64*/
        /* IL_C91: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((255|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_C96: ldc.i4 4095*/
        /* IL_C9B: conv.i8 */
        /* IL_C9C: ldc.i4.2 */
        /* IL_C9D: conv.i8 */
        /* IL_C9E: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_CA3: box System.UInt64*/
        /* IL_CA8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((4095|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_CAD: ldc.i4 65535*/
        /* IL_CB2: conv.i8 */
        /* IL_CB3: ldc.i4.2 */
        /* IL_CB4: conv.i8 */
        /* IL_CB5: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_CBA: box System.UInt64*/
        /* IL_CBF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((65535|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_CC4: ldc.i4 1048575*/
        /* IL_CC9: conv.i8 */
        /* IL_CCA: ldc.i4.2 */
        /* IL_CCB: conv.i8 */
        /* IL_CCC: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_CD1: box System.UInt64*/
        /* IL_CD6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((1048575|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_CDB: ldc.i4 16777215*/
        /* IL_CE0: conv.i8 */
        /* IL_CE1: ldc.i4.2 */
        /* IL_CE2: conv.i8 */
        /* IL_CE3: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_CE8: box System.UInt64*/
        /* IL_CED: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((16777215|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_CF2: ldc.i4 268435455*/
        /* IL_CF7: conv.i8 */
        /* IL_CF8: ldc.i4.2 */
        /* IL_CF9: conv.i8 */
        /* IL_CFA: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_CFF: box System.UInt64*/
        /* IL_D04: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((268435455|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_D09: ldc.i4.m1 */
        /* IL_D0A: conv.u8 */
        /* IL_D0B: ldc.i4.2 */
        /* IL_D0C: conv.i8 */
        /* IL_D0D: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_D12: box System.UInt64*/
        /* IL_D17: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_u8((-1|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_D1C: ldc.i8 68719476735*/
        /* IL_D25: ldc.i4.2 */
        /* IL_D26: conv.i8 */
        /* IL_D27: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_D2C: box System.UInt64*/
        /* IL_D31: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_D36: ldc.i8 1099511627775*/
        /* IL_D3F: ldc.i4.2 */
        /* IL_D40: conv.i8 */
        /* IL_D41: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_D46: box System.UInt64*/
        /* IL_D4B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_D50: ldc.i8 17592186044415*/
        /* IL_D59: ldc.i4.2 */
        /* IL_D5A: conv.i8 */
        /* IL_D5B: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_D60: box System.UInt64*/
        /* IL_D65: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_D6A: ldc.i8 281474976710655*/
        /* IL_D73: ldc.i4.2 */
        /* IL_D74: conv.i8 */
        /* IL_D75: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_D7A: box System.UInt64*/
        /* IL_D7F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_D84: ldc.i8 4503599627370495*/
        /* IL_D8D: ldc.i4.2 */
        /* IL_D8E: conv.i8 */
        /* IL_D8F: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_D94: box System.UInt64*/
        /* IL_D99: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_D9E: ldc.i8 72057594037927935*/
        /* IL_DA7: ldc.i4.2 */
        /* IL_DA8: conv.i8 */
        /* IL_DA9: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_DAE: box System.UInt64*/
        /* IL_DB3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_DB8: ldc.i4.s 15*/
        /* IL_DBA: conv.i8 */
        /* IL_DBB: ldc.i4.0 */
        /* IL_DBC: conv.i8 */
        /* IL_DBD: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_DC2: box System.UInt64*/
        /* IL_DC7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((15|0)),conv_i8((0|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_DCC: ldc.i4 255*/
        /* IL_DD1: conv.i8 */
        /* IL_DD2: ldc.i4.1 */
        /* IL_DD3: conv.i8 */
        /* IL_DD4: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_DD9: box System.UInt64*/
        /* IL_DDE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_DE3: ldc.i4 4095*/
        /* IL_DE8: conv.i8 */
        /* IL_DE9: ldc.i4.s 16*/
        /* IL_DEB: conv.i8 */
        /* IL_DEC: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_DF1: box System.UInt64*/
        /* IL_DF6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((4095|0)),conv_i8((16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_DFB: ldc.i4 65535*/
        /* IL_E00: conv.i8 */
        /* IL_E01: ldc.i4 257*/
        /* IL_E06: conv.i8 */
        /* IL_E07: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_E0C: box System.UInt64*/
        /* IL_E11: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((65535|0)),conv_i8((257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_E16: ldc.i4 1048575*/
        /* IL_E1B: conv.i8 */
        /* IL_E1C: ldc.i4 4112*/
        /* IL_E21: conv.i8 */
        /* IL_E22: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_E27: box System.UInt64*/
        /* IL_E2C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((1048575|0)),conv_i8((4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_E31: ldc.i4 16777215*/
        /* IL_E36: conv.i8 */
        /* IL_E37: ldc.i4 65793*/
        /* IL_E3C: conv.i8 */
        /* IL_E3D: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_E42: box System.UInt64*/
        /* IL_E47: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((16777215|0)),conv_i8((65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_E4C: ldc.i4 268435455*/
        /* IL_E51: conv.i8 */
        /* IL_E52: ldc.i4 1052688*/
        /* IL_E57: conv.i8 */
        /* IL_E58: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_E5D: box System.UInt64*/
        /* IL_E62: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((268435455|0)),conv_i8((1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_E67: ldc.i4.m1 */
        /* IL_E68: conv.u8 */
        /* IL_E69: ldc.i4 16843009*/
        /* IL_E6E: conv.i8 */
        /* IL_E6F: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_E74: box System.UInt64*/
        /* IL_E79: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_u8((-1|0)),conv_i8((16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_E7E: ldc.i8 68719476735*/
        /* IL_E87: ldc.i4 269488144*/
        /* IL_E8C: conv.i8 */
        /* IL_E8D: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_E92: box System.UInt64*/
        /* IL_E97: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_E9C: ldc.i8 1099511627775*/
        /* IL_EA5: ldc.i8 4311810305*/
        /* IL_EAE: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_EB3: box System.UInt64*/
        /* IL_EB8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),new Uint32Array([
                0x1010101,
                0x1
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_EBD: ldc.i8 17592186044415*/
        /* IL_EC6: ldc.i8 68988964880*/
        /* IL_ECF: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_ED4: box System.UInt64*/
        /* IL_ED9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),new Uint32Array([
                0x10101010,
                0x10
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_EDE: ldc.i8 281474976710655*/
        /* IL_EE7: ldc.i8 1103823438081*/
        /* IL_EF0: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_EF5: box System.UInt64*/
        /* IL_EFA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),new Uint32Array([
                0x1010101,
                0x101
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_EFF: ldc.i8 4503599627370495*/
        /* IL_F08: ldc.i8 17661175009296*/
        /* IL_F11: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_F16: box System.UInt64*/
        /* IL_F1B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),new Uint32Array([
                0x10101010,
                0x1010
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_F20: ldc.i8 72057594037927935*/
        /* IL_F29: ldc.i8 282578800148737*/
        /* IL_F32: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_F37: box System.UInt64*/
        /* IL_F3C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),new Uint32Array([
                0x1010101,
                0x10101
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_F41: ldstr Div 1*/
        /* IL_F46: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Div 1"));
        /* IL_F4B: ldc.i4.s 15*/
        /* IL_F4D: conv.i8 */
        /* IL_F4E: ldc.i4.1 */
        /* IL_F4F: conv.i8 */
        /* IL_F50: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_F55: box System.UInt64*/
        /* IL_F5A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((15|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_F5F: ldc.i4 255*/
        /* IL_F64: conv.i8 */
        /* IL_F65: ldc.i4.1 */
        /* IL_F66: conv.i8 */
        /* IL_F67: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_F6C: box System.UInt64*/
        /* IL_F71: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_F76: ldc.i4 4095*/
        /* IL_F7B: conv.i8 */
        /* IL_F7C: ldc.i4.1 */
        /* IL_F7D: conv.i8 */
        /* IL_F7E: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_F83: box System.UInt64*/
        /* IL_F88: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((4095|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_F8D: ldc.i4 65535*/
        /* IL_F92: conv.i8 */
        /* IL_F93: ldc.i4.1 */
        /* IL_F94: conv.i8 */
        /* IL_F95: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_F9A: box System.UInt64*/
        /* IL_F9F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((65535|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_FA4: ldc.i4 1048575*/
        /* IL_FA9: conv.i8 */
        /* IL_FAA: ldc.i4.1 */
        /* IL_FAB: conv.i8 */
        /* IL_FAC: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_FB1: box System.UInt64*/
        /* IL_FB6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((1048575|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_FBB: ldc.i4 16777215*/
        /* IL_FC0: conv.i8 */
        /* IL_FC1: ldc.i4.1 */
        /* IL_FC2: conv.i8 */
        /* IL_FC3: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_FC8: box System.UInt64*/
        /* IL_FCD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((16777215|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_FD2: ldc.i4 268435455*/
        /* IL_FD7: conv.i8 */
        /* IL_FD8: ldc.i4.1 */
        /* IL_FD9: conv.i8 */
        /* IL_FDA: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_FDF: box System.UInt64*/
        /* IL_FE4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((268435455|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_FE9: ldc.i4.m1 */
        /* IL_FEA: conv.u8 */
        /* IL_FEB: ldc.i4.1 */
        /* IL_FEC: conv.i8 */
        /* IL_FED: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_FF2: box System.UInt64*/
        /* IL_FF7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_u8((-1|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_FFC: ldc.i8 68719476735*/
        /* IL_1005: ldc.i4.1 */
        /* IL_1006: conv.i8 */
        /* IL_1007: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_100C: box System.UInt64*/
        /* IL_1011: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1016: ldc.i8 1099511627775*/
        /* IL_101F: ldc.i4.1 */
        /* IL_1020: conv.i8 */
        /* IL_1021: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1026: box System.UInt64*/
        /* IL_102B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1030: ldc.i8 17592186044415*/
        /* IL_1039: ldc.i4.1 */
        /* IL_103A: conv.i8 */
        /* IL_103B: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1040: box System.UInt64*/
        /* IL_1045: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_104A: ldc.i8 281474976710655*/
        /* IL_1053: ldc.i4.1 */
        /* IL_1054: conv.i8 */
        /* IL_1055: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_105A: box System.UInt64*/
        /* IL_105F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1064: ldc.i8 4503599627370495*/
        /* IL_106D: ldc.i4.1 */
        /* IL_106E: conv.i8 */
        /* IL_106F: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1074: box System.UInt64*/
        /* IL_1079: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_107E: ldc.i8 72057594037927935*/
        /* IL_1087: ldc.i4.1 */
        /* IL_1088: conv.i8 */
        /* IL_1089: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_108E: box System.UInt64*/
        /* IL_1093: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1098: ldstr Div 2*/
        /* IL_109D: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Div 2"));
        /* IL_10A2: ldc.i4.s 15*/
        /* IL_10A4: conv.i8 */
        /* IL_10A5: ldc.i4.2 */
        /* IL_10A6: conv.i8 */
        /* IL_10A7: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_10AC: box System.UInt64*/
        /* IL_10B1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((15|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_10B6: ldc.i4 255*/
        /* IL_10BB: conv.i8 */
        /* IL_10BC: ldc.i4.2 */
        /* IL_10BD: conv.i8 */
        /* IL_10BE: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_10C3: box System.UInt64*/
        /* IL_10C8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((255|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_10CD: ldc.i4 4095*/
        /* IL_10D2: conv.i8 */
        /* IL_10D3: ldc.i4.2 */
        /* IL_10D4: conv.i8 */
        /* IL_10D5: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_10DA: box System.UInt64*/
        /* IL_10DF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((4095|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_10E4: ldc.i4 65535*/
        /* IL_10E9: conv.i8 */
        /* IL_10EA: ldc.i4.2 */
        /* IL_10EB: conv.i8 */
        /* IL_10EC: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_10F1: box System.UInt64*/
        /* IL_10F6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((65535|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_10FB: ldc.i4 1048575*/
        /* IL_1100: conv.i8 */
        /* IL_1101: ldc.i4.2 */
        /* IL_1102: conv.i8 */
        /* IL_1103: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1108: box System.UInt64*/
        /* IL_110D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((1048575|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1112: ldc.i4 16777215*/
        /* IL_1117: conv.i8 */
        /* IL_1118: ldc.i4.2 */
        /* IL_1119: conv.i8 */
        /* IL_111A: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_111F: box System.UInt64*/
        /* IL_1124: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((16777215|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1129: ldc.i4 268435455*/
        /* IL_112E: conv.i8 */
        /* IL_112F: ldc.i4.2 */
        /* IL_1130: conv.i8 */
        /* IL_1131: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1136: box System.UInt64*/
        /* IL_113B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((268435455|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1140: ldc.i4.m1 */
        /* IL_1141: conv.u8 */
        /* IL_1142: ldc.i4.2 */
        /* IL_1143: conv.i8 */
        /* IL_1144: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1149: box System.UInt64*/
        /* IL_114E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_u8((-1|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1153: ldc.i8 68719476735*/
        /* IL_115C: ldc.i4.2 */
        /* IL_115D: conv.i8 */
        /* IL_115E: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1163: box System.UInt64*/
        /* IL_1168: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_116D: ldc.i8 1099511627775*/
        /* IL_1176: ldc.i4.2 */
        /* IL_1177: conv.i8 */
        /* IL_1178: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_117D: box System.UInt64*/
        /* IL_1182: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1187: ldc.i8 17592186044415*/
        /* IL_1190: ldc.i4.2 */
        /* IL_1191: conv.i8 */
        /* IL_1192: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1197: box System.UInt64*/
        /* IL_119C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_11A1: ldc.i8 281474976710655*/
        /* IL_11AA: ldc.i4.2 */
        /* IL_11AB: conv.i8 */
        /* IL_11AC: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_11B1: box System.UInt64*/
        /* IL_11B6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_11BB: ldc.i8 4503599627370495*/
        /* IL_11C4: ldc.i4.2 */
        /* IL_11C5: conv.i8 */
        /* IL_11C6: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_11CB: box System.UInt64*/
        /* IL_11D0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_11D5: ldc.i8 72057594037927935*/
        /* IL_11DE: ldc.i4.2 */
        /* IL_11DF: conv.i8 */
        /* IL_11E0: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_11E5: box System.UInt64*/
        /* IL_11EA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_11EF: ldstr Div 0x1, 0x010, 0x0101 etc*/
        /* IL_11F4: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Div 0x1, 0x010, 0x0101 etc"));
        /* IL_11F9: ldc.i4 255*/
        /* IL_11FE: conv.i8 */
        /* IL_11FF: ldc.i4.1 */
        /* IL_1200: conv.i8 */
        /* IL_1201: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1206: box System.UInt64*/
        /* IL_120B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1210: ldc.i4 4095*/
        /* IL_1215: conv.i8 */
        /* IL_1216: ldc.i4.s 16*/
        /* IL_1218: conv.i8 */
        /* IL_1219: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_121E: box System.UInt64*/
        /* IL_1223: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((4095|0)),conv_i8((16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1228: ldc.i4 65535*/
        /* IL_122D: conv.i8 */
        /* IL_122E: ldc.i4 257*/
        /* IL_1233: conv.i8 */
        /* IL_1234: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1239: box System.UInt64*/
        /* IL_123E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((65535|0)),conv_i8((257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1243: ldc.i4 1048575*/
        /* IL_1248: conv.i8 */
        /* IL_1249: ldc.i4 4112*/
        /* IL_124E: conv.i8 */
        /* IL_124F: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1254: box System.UInt64*/
        /* IL_1259: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((1048575|0)),conv_i8((4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_125E: ldc.i4 16777215*/
        /* IL_1263: conv.i8 */
        /* IL_1264: ldc.i4 65793*/
        /* IL_1269: conv.i8 */
        /* IL_126A: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_126F: box System.UInt64*/
        /* IL_1274: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((16777215|0)),conv_i8((65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1279: ldc.i4 268435455*/
        /* IL_127E: conv.i8 */
        /* IL_127F: ldc.i4 1052688*/
        /* IL_1284: conv.i8 */
        /* IL_1285: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_128A: box System.UInt64*/
        /* IL_128F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((268435455|0)),conv_i8((1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1294: ldc.i4.m1 */
        /* IL_1295: conv.u8 */
        /* IL_1296: ldc.i4 16843009*/
        /* IL_129B: conv.i8 */
        /* IL_129C: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_12A1: box System.UInt64*/
        /* IL_12A6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_u8((-1|0)),conv_i8((16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_12AB: ldc.i8 68719476735*/
        /* IL_12B4: ldc.i4 269488144*/
        /* IL_12B9: conv.i8 */
        /* IL_12BA: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_12BF: box System.UInt64*/
        /* IL_12C4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_12C9: ldc.i8 1099511627775*/
        /* IL_12D2: ldc.i8 4311810305*/
        /* IL_12DB: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_12E0: box System.UInt64*/
        /* IL_12E5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),new Uint32Array([
                0x1010101,
                0x1
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_12EA: ldc.i8 17592186044415*/
        /* IL_12F3: ldc.i8 68988964880*/
        /* IL_12FC: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1301: box System.UInt64*/
        /* IL_1306: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),new Uint32Array([
                0x10101010,
                0x10
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_130B: ldc.i8 281474976710655*/
        /* IL_1314: ldc.i8 1103823438081*/
        /* IL_131D: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1322: box System.UInt64*/
        /* IL_1327: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),new Uint32Array([
                0x1010101,
                0x101
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_132C: ldc.i8 4503599627370495*/
        /* IL_1335: ldc.i8 17661175009296*/
        /* IL_133E: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1343: box System.UInt64*/
        /* IL_1348: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),new Uint32Array([
                0x10101010,
                0x1010
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_134D: ldc.i8 72057594037927935*/
        /* IL_1356: ldc.i8 282578800148737*/
        /* IL_135F: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1364: box System.UInt64*/
        /* IL_1369: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),new Uint32Array([
                0x1010101,
                0x10101
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_136E: ldstr Mod 1*/
        /* IL_1373: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mod 1"));
        /* IL_1378: ldc.i4.s 15*/
        /* IL_137A: conv.i8 */
        /* IL_137B: ldc.i4.1 */
        /* IL_137C: conv.i8 */
        /* IL_137D: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1382: box System.UInt64*/
        /* IL_1387: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((15|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_138C: ldc.i4 255*/
        /* IL_1391: conv.i8 */
        /* IL_1392: ldc.i4.1 */
        /* IL_1393: conv.i8 */
        /* IL_1394: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1399: box System.UInt64*/
        /* IL_139E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_13A3: ldc.i4 4095*/
        /* IL_13A8: conv.i8 */
        /* IL_13A9: ldc.i4.1 */
        /* IL_13AA: conv.i8 */
        /* IL_13AB: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_13B0: box System.UInt64*/
        /* IL_13B5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((4095|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_13BA: ldc.i4 65535*/
        /* IL_13BF: conv.i8 */
        /* IL_13C0: ldc.i4.1 */
        /* IL_13C1: conv.i8 */
        /* IL_13C2: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_13C7: box System.UInt64*/
        /* IL_13CC: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((65535|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_13D1: ldc.i4 1048575*/
        /* IL_13D6: conv.i8 */
        /* IL_13D7: ldc.i4.1 */
        /* IL_13D8: conv.i8 */
        /* IL_13D9: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_13DE: box System.UInt64*/
        /* IL_13E3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((1048575|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_13E8: ldc.i4 16777215*/
        /* IL_13ED: conv.i8 */
        /* IL_13EE: ldc.i4.1 */
        /* IL_13EF: conv.i8 */
        /* IL_13F0: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_13F5: box System.UInt64*/
        /* IL_13FA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((16777215|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_13FF: ldc.i4 268435455*/
        /* IL_1404: conv.i8 */
        /* IL_1405: ldc.i4.1 */
        /* IL_1406: conv.i8 */
        /* IL_1407: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_140C: box System.UInt64*/
        /* IL_1411: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((268435455|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1416: ldc.i4.m1 */
        /* IL_1417: conv.u8 */
        /* IL_1418: ldc.i4.1 */
        /* IL_1419: conv.i8 */
        /* IL_141A: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_141F: box System.UInt64*/
        /* IL_1424: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_u8((-1|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1429: ldc.i8 68719476735*/
        /* IL_1432: ldc.i4.1 */
        /* IL_1433: conv.i8 */
        /* IL_1434: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1439: box System.UInt64*/
        /* IL_143E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1443: ldc.i8 1099511627775*/
        /* IL_144C: ldc.i4.1 */
        /* IL_144D: conv.i8 */
        /* IL_144E: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1453: box System.UInt64*/
        /* IL_1458: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_145D: ldc.i8 17592186044415*/
        /* IL_1466: ldc.i4.1 */
        /* IL_1467: conv.i8 */
        /* IL_1468: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_146D: box System.UInt64*/
        /* IL_1472: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1477: ldc.i8 281474976710655*/
        /* IL_1480: ldc.i4.1 */
        /* IL_1481: conv.i8 */
        /* IL_1482: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1487: box System.UInt64*/
        /* IL_148C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1491: ldc.i8 4503599627370495*/
        /* IL_149A: ldc.i4.1 */
        /* IL_149B: conv.i8 */
        /* IL_149C: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_14A1: box System.UInt64*/
        /* IL_14A6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_14AB: ldc.i8 72057594037927935*/
        /* IL_14B4: ldc.i4.1 */
        /* IL_14B5: conv.i8 */
        /* IL_14B6: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_14BB: box System.UInt64*/
        /* IL_14C0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_14C5: ldstr Mod 2*/
        /* IL_14CA: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mod 2"));
        /* IL_14CF: ldc.i4.s 15*/
        /* IL_14D1: conv.i8 */
        /* IL_14D2: ldc.i4.2 */
        /* IL_14D3: conv.i8 */
        /* IL_14D4: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_14D9: box System.UInt64*/
        /* IL_14DE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((15|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_14E3: ldc.i4 255*/
        /* IL_14E8: conv.i8 */
        /* IL_14E9: ldc.i4.2 */
        /* IL_14EA: conv.i8 */
        /* IL_14EB: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_14F0: box System.UInt64*/
        /* IL_14F5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((255|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_14FA: ldc.i4 4095*/
        /* IL_14FF: conv.i8 */
        /* IL_1500: ldc.i4.2 */
        /* IL_1501: conv.i8 */
        /* IL_1502: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1507: box System.UInt64*/
        /* IL_150C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((4095|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1511: ldc.i4 65535*/
        /* IL_1516: conv.i8 */
        /* IL_1517: ldc.i4.2 */
        /* IL_1518: conv.i8 */
        /* IL_1519: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_151E: box System.UInt64*/
        /* IL_1523: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((65535|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1528: ldc.i4 1048575*/
        /* IL_152D: conv.i8 */
        /* IL_152E: ldc.i4.2 */
        /* IL_152F: conv.i8 */
        /* IL_1530: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1535: box System.UInt64*/
        /* IL_153A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((1048575|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_153F: ldc.i4 16777215*/
        /* IL_1544: conv.i8 */
        /* IL_1545: ldc.i4.2 */
        /* IL_1546: conv.i8 */
        /* IL_1547: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_154C: box System.UInt64*/
        /* IL_1551: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((16777215|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1556: ldc.i4 268435455*/
        /* IL_155B: conv.i8 */
        /* IL_155C: ldc.i4.2 */
        /* IL_155D: conv.i8 */
        /* IL_155E: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1563: box System.UInt64*/
        /* IL_1568: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((268435455|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_156D: ldc.i4.m1 */
        /* IL_156E: conv.u8 */
        /* IL_156F: ldc.i4.2 */
        /* IL_1570: conv.i8 */
        /* IL_1571: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1576: box System.UInt64*/
        /* IL_157B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_u8((-1|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1580: ldc.i8 68719476735*/
        /* IL_1589: ldc.i4.2 */
        /* IL_158A: conv.i8 */
        /* IL_158B: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1590: box System.UInt64*/
        /* IL_1595: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_159A: ldc.i8 1099511627775*/
        /* IL_15A3: ldc.i4.2 */
        /* IL_15A4: conv.i8 */
        /* IL_15A5: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_15AA: box System.UInt64*/
        /* IL_15AF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_15B4: ldc.i8 17592186044415*/
        /* IL_15BD: ldc.i4.2 */
        /* IL_15BE: conv.i8 */
        /* IL_15BF: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_15C4: box System.UInt64*/
        /* IL_15C9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_15CE: ldc.i8 281474976710655*/
        /* IL_15D7: ldc.i4.2 */
        /* IL_15D8: conv.i8 */
        /* IL_15D9: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_15DE: box System.UInt64*/
        /* IL_15E3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_15E8: ldc.i8 4503599627370495*/
        /* IL_15F1: ldc.i4.2 */
        /* IL_15F2: conv.i8 */
        /* IL_15F3: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_15F8: box System.UInt64*/
        /* IL_15FD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1602: ldc.i8 72057594037927935*/
        /* IL_160B: ldc.i4.2 */
        /* IL_160C: conv.i8 */
        /* IL_160D: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1612: box System.UInt64*/
        /* IL_1617: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_161C: ldstr Mod 0x1, 0x010, 0x0101 etc*/
        /* IL_1621: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mod 0x1, 0x010, 0x0101 etc"));
        /* IL_1626: ldc.i4 255*/
        /* IL_162B: conv.i8 */
        /* IL_162C: ldc.i4.1 */
        /* IL_162D: conv.i8 */
        /* IL_162E: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1633: box System.UInt64*/
        /* IL_1638: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_163D: ldc.i4 4095*/
        /* IL_1642: conv.i8 */
        /* IL_1643: ldc.i4.s 16*/
        /* IL_1645: conv.i8 */
        /* IL_1646: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_164B: box System.UInt64*/
        /* IL_1650: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((4095|0)),conv_i8((16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1655: ldc.i4 65535*/
        /* IL_165A: conv.i8 */
        /* IL_165B: ldc.i4 257*/
        /* IL_1660: conv.i8 */
        /* IL_1661: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1666: box System.UInt64*/
        /* IL_166B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((65535|0)),conv_i8((257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1670: ldc.i4 1048575*/
        /* IL_1675: conv.i8 */
        /* IL_1676: ldc.i4 4112*/
        /* IL_167B: conv.i8 */
        /* IL_167C: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1681: box System.UInt64*/
        /* IL_1686: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((1048575|0)),conv_i8((4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_168B: ldc.i4 16777215*/
        /* IL_1690: conv.i8 */
        /* IL_1691: ldc.i4 65793*/
        /* IL_1696: conv.i8 */
        /* IL_1697: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_169C: box System.UInt64*/
        /* IL_16A1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((16777215|0)),conv_i8((65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_16A6: ldc.i4 268435455*/
        /* IL_16AB: conv.i8 */
        /* IL_16AC: ldc.i4 1052688*/
        /* IL_16B1: conv.i8 */
        /* IL_16B2: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_16B7: box System.UInt64*/
        /* IL_16BC: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((268435455|0)),conv_i8((1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_16C1: ldc.i4.m1 */
        /* IL_16C2: conv.u8 */
        /* IL_16C3: ldc.i4 16843009*/
        /* IL_16C8: conv.i8 */
        /* IL_16C9: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_16CE: box System.UInt64*/
        /* IL_16D3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_u8((-1|0)),conv_i8((16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_16D8: ldc.i8 68719476735*/
        /* IL_16E1: ldc.i4 269488144*/
        /* IL_16E6: conv.i8 */
        /* IL_16E7: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_16EC: box System.UInt64*/
        /* IL_16F1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xF
            ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_16F6: ldc.i8 1099511627775*/
        /* IL_16FF: ldc.i8 4311810305*/
        /* IL_1708: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_170D: box System.UInt64*/
        /* IL_1712: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFF
            ]),new Uint32Array([
                0x1010101,
                0x1
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1717: ldc.i8 17592186044415*/
        /* IL_1720: ldc.i8 68988964880*/
        /* IL_1729: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_172E: box System.UInt64*/
        /* IL_1733: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ]),new Uint32Array([
                0x10101010,
                0x10
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1738: ldc.i8 281474976710655*/
        /* IL_1741: ldc.i8 1103823438081*/
        /* IL_174A: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_174F: box System.UInt64*/
        /* IL_1754: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFF
            ]),new Uint32Array([
                0x1010101,
                0x101
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_1759: ldc.i8 4503599627370495*/
        /* IL_1762: ldc.i8 17661175009296*/
        /* IL_176B: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1770: box System.UInt64*/
        /* IL_1775: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFF
            ]),new Uint32Array([
                0x10101010,
                0x1010
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_177A: ldc.i8 72057594037927935*/
        /* IL_1783: ldc.i8 282578800148737*/
        /* IL_178C: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1791: box System.UInt64*/
        /* IL_1796: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([
                0xFFFFFFFF,
                0xFFFFFF
            ]),new Uint32Array([
                0x1010101,
                0x10101
            ])),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_179B: ldc.i4.0 */
        /* IL_179C: conv.i8 */
        /* IL_179D: call Void TestRightShift(System.UInt64)*/
        (asm1.x6000013)(conv_i8((0|0)));
        /* IL_17A2: ldc.i4.1 */
        /* IL_17A3: conv.i8 */
        /* IL_17A4: call Void TestRightShift(System.UInt64)*/
        (asm1.x6000013)(conv_i8((1|0)));
        /* IL_17A9: ldc.i4 255*/
        /* IL_17AE: conv.i8 */
        /* IL_17AF: call Void TestRightShift(System.UInt64)*/
        (asm1.x6000013)(conv_i8((255|0)));
        /* IL_17B4: ldc.i8 282578800148737*/
        /* IL_17BD: call Void TestRightShift(System.UInt64)*/
        (asm1.x6000013)(new Uint32Array([
            0x1010101,
            0x10101
        ]));
        /* IL_17C2: ldc.i8 4503599627370496*/
        /* IL_17CB: call Void TestRightShift(System.UInt64)*/
        (asm1.x6000013)(new Uint32Array([
            0x0,
            0x100000
        ]));
        /* IL_17D0: ldc.i8 72057594037927935*/
        /* IL_17D9: call Void TestRightShift(System.UInt64)*/
        (asm1.x6000013)(new Uint32Array([
            0xFFFFFFFF,
            0xFFFFFF
        ]));
        /* IL_17DE: ldc.i4.0 */
        /* IL_17DF: conv.i8 */
        /* IL_17E0: call Void TestLeftShift(System.UInt64)*/
        (asm1.x6000014)(conv_i8((0|0)));
        /* IL_17E5: ldc.i4.1 */
        /* IL_17E6: conv.i8 */
        /* IL_17E7: call Void TestLeftShift(System.UInt64)*/
        (asm1.x6000014)(conv_i8((1|0)));
        /* IL_17EC: ldc.i4 255*/
        /* IL_17F1: conv.i8 */
        /* IL_17F2: call Void TestLeftShift(System.UInt64)*/
        (asm1.x6000014)(conv_i8((255|0)));
        /* IL_17F7: ldc.i8 282578800148737*/
        /* IL_1800: call Void TestLeftShift(System.UInt64)*/
        (asm1.x6000014)(new Uint32Array([
            0x1010101,
            0x10101
        ]));
        /* IL_1805: ldc.i8 4503599627370496*/
        /* IL_180E: call Void TestLeftShift(System.UInt64)*/
        (asm1.x6000014)(new Uint32Array([
            0x0,
            0x100000
        ]));
        /* IL_1813: ldc.i8 72057594037927935*/
        /* IL_181C: call Void TestLeftShift(System.UInt64)*/
        (asm1.x6000014)(new Uint32Array([
            0xFFFFFFFF,
            0xFFFFFF
        ]));
        /* IL_1821: ldc.i4 255*/
        /* IL_1826: conv.i8 */
        /* IL_1827: call Double Double(System.UInt64)*/
        /* IL_182C: box System.Double*/
        /* IL_1831: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000d)(conv_i8((255|0))),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_1836: ldc.i8 17592186044415*/
        /* IL_183F: call Double Double(System.UInt64)*/
        /* IL_1844: box System.Double*/
        /* IL_1849: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000d)(new Uint32Array([
                0xFFFFFFFF,
                0xFFF
            ])),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_184E: ret */
        return ;
    };
    /* static Double Double(System.UInt64)*/
    asm.x600000d = function Double(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: conv.r.un */
        /* IL_02: conv.r8 */
        /* IL_03: ret */
        return to_number(arg0);
    };;
    /* static UInt64 Add(System.UInt64, System.UInt64)*/
    asm.x600000e = function Add(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: add */
        /* IL_03: ret */
        return (asm0.XInt64_Addition)(arg0,arg1);
    };;
    /* static UInt64 Sub(System.UInt64, System.UInt64)*/
    asm.x600000f = function Sub(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: sub */
        /* IL_03: ret */
        return (asm0.XInt64_Subtraction)(arg0,arg1);
    };;
    /* static UInt64 Mul(System.UInt64, System.UInt64)*/
    asm.x6000010 = function Mul(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: mul */
        /* IL_03: ret */
        return (asm0.XInt64_Multiplication)(arg0,arg1);
    };;
    /* static UInt64 Div(System.UInt64, System.UInt64)*/
    asm.x6000011 = function Div(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: div.un */
        /* IL_03: ret */
        return (asm0.UInt64_Division)(arg0,arg1);
    };;
    /* static UInt64 Mod(System.UInt64, System.UInt64)*/
    asm.x6000012 = function Mod(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: rem.un */
        /* IL_03: ret */
        return (asm0.UInt64_Modulus)(arg0,arg1);
    };;
    /* static Void TestRightShift(System.UInt64)*/
    asm.x6000013_init = function ()
    {
        (((asm0)["System.UInt64"])().init)();
        asm.x6000013 = asm.x6000013_;
    };;
    asm.x6000013 = function (arg0)
    {
        (asm.x6000013_init.apply)(this,arguments);
        return (asm.x6000013_.apply)(this,arguments);
    };;
    asm.x6000013_ = function TestRightShift(arg0)
    {
        var t0;
        t0 = ((asm0)["System.UInt64"])();
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.0 */
        /* IL_02: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_07: box System.UInt64*/
        /* IL_0C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(0|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_11: ldarg.0 */
        /* IL_12: ldc.i4.1 */
        /* IL_13: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_18: box System.UInt64*/
        /* IL_1D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_22: ldarg.0 */
        /* IL_23: ldc.i4.2 */
        /* IL_24: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_29: box System.UInt64*/
        /* IL_2E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(2|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_33: ldarg.0 */
        /* IL_34: ldc.i4.7 */
        /* IL_35: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_3A: box System.UInt64*/
        /* IL_3F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(7|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_44: ldarg.0 */
        /* IL_45: ldc.i4.8 */
        /* IL_46: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_4B: box System.UInt64*/
        /* IL_50: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(8|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_55: ldarg.0 */
        /* IL_56: ldc.i4.s 9*/
        /* IL_58: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_5D: box System.UInt64*/
        /* IL_62: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(9|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_67: ldarg.0 */
        /* IL_68: ldc.i4.s 15*/
        /* IL_6A: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_6F: box System.UInt64*/
        /* IL_74: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(15|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_79: ldarg.0 */
        /* IL_7A: ldc.i4.s 16*/
        /* IL_7C: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_81: box System.UInt64*/
        /* IL_86: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(16|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_8B: ldarg.0 */
        /* IL_8C: ldc.i4.s 17*/
        /* IL_8E: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_93: box System.UInt64*/
        /* IL_98: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(17|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_9D: ldarg.0 */
        /* IL_9E: ldc.i4.s 23*/
        /* IL_A0: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_A5: box System.UInt64*/
        /* IL_AA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(23|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_AF: ldarg.0 */
        /* IL_B0: ldc.i4.s 24*/
        /* IL_B2: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_B7: box System.UInt64*/
        /* IL_BC: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(24|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_C1: ldarg.0 */
        /* IL_C2: ldc.i4.s 25*/
        /* IL_C4: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_C9: box System.UInt64*/
        /* IL_CE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(25|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_D3: ldarg.0 */
        /* IL_D4: ldc.i4.s 31*/
        /* IL_D6: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_DB: box System.UInt64*/
        /* IL_E0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(31|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_E5: ldarg.0 */
        /* IL_E6: ldc.i4.s 32*/
        /* IL_E8: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_ED: box System.UInt64*/
        /* IL_F2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(32|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_F7: ldarg.0 */
        /* IL_F8: ldc.i4.s 33*/
        /* IL_FA: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_FF: box System.UInt64*/
        /* IL_104: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(33|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_109: ret */
        return ;
    };
    /* static Void TestLeftShift(System.UInt64)*/
    asm.x6000014_init = function ()
    {
        (((asm0)["System.UInt64"])().init)();
        asm.x6000014 = asm.x6000014_;
    };;
    asm.x6000014 = function (arg0)
    {
        (asm.x6000014_init.apply)(this,arguments);
        return (asm.x6000014_.apply)(this,arguments);
    };;
    asm.x6000014_ = function TestLeftShift(arg0)
    {
        var t0;
        t0 = ((asm0)["System.UInt64"])();
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.0 */
        /* IL_02: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_07: box System.UInt64*/
        /* IL_0C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(0|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_11: ldarg.0 */
        /* IL_12: ldc.i4.1 */
        /* IL_13: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_18: box System.UInt64*/
        /* IL_1D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_22: ldarg.0 */
        /* IL_23: ldc.i4.2 */
        /* IL_24: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_29: box System.UInt64*/
        /* IL_2E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(2|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_33: ldarg.0 */
        /* IL_34: ldc.i4.7 */
        /* IL_35: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_3A: box System.UInt64*/
        /* IL_3F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(7|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_44: ldarg.0 */
        /* IL_45: ldc.i4.8 */
        /* IL_46: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_4B: box System.UInt64*/
        /* IL_50: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(8|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_55: ldarg.0 */
        /* IL_56: ldc.i4.s 9*/
        /* IL_58: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_5D: box System.UInt64*/
        /* IL_62: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(9|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_67: ldarg.0 */
        /* IL_68: ldc.i4.s 15*/
        /* IL_6A: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_6F: box System.UInt64*/
        /* IL_74: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(15|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_79: ldarg.0 */
        /* IL_7A: ldc.i4.s 16*/
        /* IL_7C: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_81: box System.UInt64*/
        /* IL_86: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(16|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_8B: ldarg.0 */
        /* IL_8C: ldc.i4.s 17*/
        /* IL_8E: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_93: box System.UInt64*/
        /* IL_98: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(17|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_9D: ldarg.0 */
        /* IL_9E: ldc.i4.s 23*/
        /* IL_A0: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_A5: box System.UInt64*/
        /* IL_AA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(23|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_AF: ldarg.0 */
        /* IL_B0: ldc.i4.s 24*/
        /* IL_B2: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_B7: box System.UInt64*/
        /* IL_BC: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(24|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_C1: ldarg.0 */
        /* IL_C2: ldc.i4.s 25*/
        /* IL_C4: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_C9: box System.UInt64*/
        /* IL_CE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(25|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_D3: ldarg.0 */
        /* IL_D4: ldc.i4.s 31*/
        /* IL_D6: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_DB: box System.UInt64*/
        /* IL_E0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(31|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_E5: ldarg.0 */
        /* IL_E6: ldc.i4.s 32*/
        /* IL_E8: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_ED: box System.UInt64*/
        /* IL_F2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(32|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_F7: ldarg.0 */
        /* IL_F8: ldc.i4.s 33*/
        /* IL_FA: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_FF: box System.UInt64*/
        /* IL_104: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(33|0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_109: ret */
        return ;
    };
    /* static UInt64 RightShift(System.UInt64, System.Int32)*/
    asm.x6000015 = function RightShift(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: ldc.i4.s 63*/
        /* IL_04: and */
        /* IL_05: shr.un */
        /* IL_06: ret */
        return (asm0.UInt64_RightShift)(arg0,arg1 & (63|0));
    };;
    /* static UInt64 LeftShift(System.UInt64, System.Int32)*/
    asm.x6000016 = function LeftShift(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: ldc.i4.s 63*/
        /* IL_04: and */
        /* IL_05: shl */
        /* IL_06: ret */
        return (asm0.XInt64_LeftShift)(arg0,arg1 & (63|0));
    };;
    /* Void .ctor()*/
    asm.x6000017 = function _ctor(arg0)
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
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
