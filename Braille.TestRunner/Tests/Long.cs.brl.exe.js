var asm0; (function (asm)
{
    
    asm.next_hash = 1;

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

    function box(v, type) {
        if (v === null)
            return v;
    
        if (type.IsNullable) {
            if (v.has_value)
                return box(v.value, type.GenericArguments[0]);
            else
                return null;
        }

        if (!type.IsValueType)
            return v;
    
        return {
            'boxed': v,
            'type': type,
            'vtable': type.prototype.vtable
        };
    }

    function unbox(o, type) {
        return cast_class(o.boxed, type);
    }

    function unbox_any(o, type) {
        if (type.IsNullable) {
            var result = new type();
            if (o !== null) {
                result.value = cast_class(o.boxed, type.GenericArguments[0]);
                result.has_value = true;
            }
            return result;
        }
    
        if (type.IsValueType)
            return cast_class(o.boxed, type);
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

    function new_string(str) {
        var r = new (asm0['System.String']())();
        r.jsstr = str;
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
        r.type = type;
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
        if (type.IsInst(obj) || (!type.IsValueType && obj === null))
            return obj;
        else {
            var t = asm0['System.InvalidCastException']();
            throw new t();
        }
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
    asm.x6000001 = function (a, b) { return Number(a === b); };;
    asm.x6000002 = function (o) { return o.hash || (o.hash = asm0.next_hash++); };;
    asm.x6000004 = function () { return asm0.ToJavaScriptString(this); };;
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
    asm.x6000006 = function GetHashCode(arg0)
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
    asm.x6000007 = function ToJavaScriptString(arg0)
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
    asm.ToJavaScriptString = asm.x6000007;
    asm.x6000008 = function ReferenceEquals(arg0,arg1)
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
    asm.x6000009 = function Equals(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean ReferenceEquals(System.Object, System.Object)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x6000008)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    asm.x600000a = function GetType(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Type GetType(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x600005e)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_02: ret */
        return ;
    };;
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000013 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000014 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000015 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000014)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000016 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x600001a = function get_Value(arg0)
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
    asm.x6000017 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000016)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x6000018 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000016)(arg0);
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
    asm.x6000019 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000016)(arg0);
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
    asm.x600001d = function get_Message(arg0)
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
    asm.x600001e = function set_Message(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <Message>k__BackingField*/
        (arg0)["SystemException<Message>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    asm.x600001f = function ToString(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call String get_Message()*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x600001d)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x600001b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x600001c = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: call Void set_Message(System.String)*/
        (asm0.x600001e)(arg0,arg1);
        /* IL_0F: nop */
        /* IL_10: nop */
        /* IL_11: ret */
        return ;
    };;
    asm.x6000020 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600001b)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000021 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000020)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000023 = function get_ValidOn(arg0)
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
    asm.x6000024 = function set_ValidOn(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld AttributeTargets <ValidOn>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    asm.x6000025 = function get_Inherited(arg0)
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
    asm.x6000026 = function set_Inherited(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Boolean <Inherited>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    asm.x6000022 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000016)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: call Void set_ValidOn(System.AttributeTargets)*/
        (asm0.x6000024)(arg0,clone_value(arg1));
        /* IL_0F: nop */
        /* IL_10: nop */
        /* IL_11: ret */
        return ;
    };;
    asm.x6000027 = function ToString(arg0)
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
    asm.x6000035_init = function ()
    {
        (((asm0)["System.Byte"])().init)();
        asm.x6000035 = asm.x6000035_;
    };;
    asm.x6000035 = function (arg0)
    {
        (asm.x6000035_init.apply)(this,arguments);
        return (asm.x6000035.apply)(this,arguments);
    };;
    asm.x6000035_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Byte"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u1 */
        /* IL_03: box System.Byte*/
        /* IL_08: call String NumberStructToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x6000053)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000036_init = function ()
    {
        (((asm0)["System.Char"])().init)();
        asm.x6000036 = asm.x6000036_;
    };;
    asm.x6000036 = function (arg0)
    {
        (asm.x6000036_init.apply)(this,arguments);
        return (asm.x6000036.apply)(this,arguments);
    };;
    asm.x6000036_ = function ToString(arg0)
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
        loc0 = (asm0.x6000037)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000037 = function(o) { return new_string(String.fromCharCode(o.boxed)); };;
    asm.x6000038 = (function (o) { console.log(o.jsstr); });;
    asm.x6000039 = function WriteLine(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt String ToString()*/
        /* IL_07: call Void WriteLineImpl(System.String)*/
        (asm0.x6000038)((((arg0.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(arg0)));
        /* IL_0C: nop */
        /* IL_0D: ret */
        return ;
    };;
    asm.x600003a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x600003b_init = function ()
    {
        (((asm0)["System.Double"])().init)();
        asm.x600003b = asm.x600003b_;
    };;
    asm.x600003b = function (arg0)
    {
        (asm.x600003b_init.apply)(this,arguments);
        return (asm.x600003b.apply)(this,arguments);
    };;
    asm.x600003b_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Double"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.r8 */
        /* IL_03: box System.Double*/
        /* IL_08: call String NumberStructToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x6000053)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x600003c = function get_CurrentManagedThreadId()
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
    asm.x600003d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000016)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x600003e_init = function ()
    {
        (((asm0)["System.Exception"])().init)();
        asm.x600003e = asm.x600003e_;
    };;
    asm.x600003e = function (arg0,arg1)
    {
        (asm.x600003e_init.apply)(this,arguments);
        return (asm.x600003e.apply)(this,arguments);
    };;
    asm.x600003e_ = function Combine(arg0,arg1)
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
                throw newobj(t0,asm0.x600001c,[ null,new_string("Incompatible delegate types") ]);
                case 0x4C:
                /* IL_4C: ldarg.0 */
                /* IL_4D: ldarg.1 */
                /* IL_4E: callvirt Delegate CombineImpl(System.Delegate)*/
                /* IL_53: stloc.0 */
                loc0 = (((arg0.vtable)["asm0.x6000041"])())(arg0,arg1);
                case 0x56:
                /* IL_56: ldloc.0 */
                /* IL_57: ret */
                return loc0;
            }
        }
    };
    asm.x600003f_init = function ()
    {
        (((asm0)["System.Exception"])().init)();
        asm.x600003f = asm.x600003f_;
    };;
    asm.x600003f = function (arg0,arg1)
    {
        (asm.x600003f_init.apply)(this,arguments);
        return (asm.x600003f.apply)(this,arguments);
    };;
    asm.x600003f_ = function Remove(arg0,arg1)
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
                throw newobj(t0,asm0.x600001c,[ null,new_string("Incompatible delegate types") ]);
                case 0x2D:
                /* IL_2D: ldarg.0 */
                /* IL_2E: ldarg.1 */
                /* IL_2F: callvirt Delegate RemoveImpl(System.Delegate)*/
                /* IL_34: stloc.0 */
                loc0 = (((arg0.vtable)["asm0.x6000040"])())(arg0,arg1);
                case 0x37:
                /* IL_37: ldloc.0 */
                /* IL_38: ret */
                return loc0;
            }
        }
    };
    asm.x6000040_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x6000040 = asm.x6000040_;
    };;
    asm.x6000040 = function (arg0,arg1)
    {
        (asm.x6000040_init.apply)(this,arguments);
        return (asm.x6000040.apply)(this,arguments);
    };;
    asm.x6000040_ = function RemoveImpl(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x6000075,[ null ]);
    };
    asm.x6000041_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x6000041 = asm.x6000041_;
    };;
    asm.x6000041 = function (arg0,arg1)
    {
        (asm.x6000041_init.apply)(this,arguments);
        return (asm.x6000041.apply)(this,arguments);
    };;
    asm.x6000041_ = function CombineImpl(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x6000075,[ null ]);
    };
    asm.x6000042_init = function ()
    {
        (((asm0)["System.Delegate"])().init)();
        asm.x6000042 = asm.x6000042_;
    };;
    asm.x6000042 = function (arg0,arg1)
    {
        (asm.x6000042_init.apply)(this,arguments);
        return (asm.x6000042.apply)(this,arguments);
    };;
    asm.x6000042_ = function Equals(arg0,arg1)
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
        loc0 = (asm0.x6000043)(arg0,(t0.IsInst)(arg1));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000043_init = function ()
    {
        (((asm0)["System.MulticastDelegate"])().init)();
        asm.x6000043 = asm.x6000043_;
    };;
    asm.x6000043 = function (arg0,arg1)
    {
        (asm.x6000043_init.apply)(this,arguments);
        return (asm.x6000043.apply)(this,arguments);
    };;
    asm.x6000043_ = function op_Equality(arg0,arg1)
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
                loc6 = (asm0.x6000008)(loc0._methodPtr,loc1._methodPtr);
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
                loc6 = (asm0.x6000008)(loc0._target,loc1._target);
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
                loc6 = (asm0.x6000043)(loc3,loc4);
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
    asm.x6000044 = function op_Inequality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean op_Equality(System.Delegate, System.Delegate)*/
        /* IL_08: ldc.i4.0 */
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = (((asm0.x6000043)(arg0,arg1) === (0|0)) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    asm.x6000045 = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetHashCode()*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000006)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x6000046 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000047 = 
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
    asm.x6000048_init = function ()
    {
        (((asm0)["System.Delegate"])().init)();
        asm.x6000048 = asm.x6000048_;
    };;
    asm.x6000048 = function (arg0,arg1)
    {
        (asm.x6000048_init.apply)(this,arguments);
        return (asm.x6000048.apply)(this,arguments);
    };;
    asm.x6000048_ = function CombineImpl(arg0,arg1)
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
                loc2 = (asm0.x6000047)(loc0);
                /* IL_66: ldloc.2 */
                /* IL_67: ret */
                return loc2;
            }
        }
    };
    asm.x6000049_init = function ()
    {
        (((asm0)["System.Delegate"])().init)();
        asm.x6000049 = asm.x6000049_;
    };;
    asm.x6000049 = function (arg0,arg1)
    {
        (asm.x6000049_init.apply)(this,arguments);
        return (asm.x6000049.apply)(this,arguments);
    };;
    asm.x6000049_ = function RemoveImpl(arg0,arg1)
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
                loc5 = (((asm0.x6000043)(arg1,arg0) === (0|0)) ? (1) : (0));
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
                loc5 = (((asm0.x6000044)((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
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
                loc5 = (((asm0.x6000044)((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
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
                loc5 = (((asm0.x6000044)((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
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
                loc4 = (asm0.x6000047)(loc2);
                case 0x11B:
                /* IL_11B: ldloc.s 4*/
                /* IL_11D: ret */
                return loc4;
            }
        }
    };
    asm.x600004a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000046)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x600004c = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    asm.x600004b = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    asm.x600004f_init = function ()
    {
        (((asm0)["System.Int16"])().init)();
        asm.x600004f = asm.x600004f_;
    };;
    asm.x600004f = function (arg0)
    {
        (asm.x600004f_init.apply)(this,arguments);
        return (asm.x600004f.apply)(this,arguments);
    };;
    asm.x600004f_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Int16"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i2 */
        /* IL_03: box System.Int16*/
        /* IL_08: call String NumberStructToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x6000053)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000050_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x6000050 = asm.x6000050_;
    };;
    asm.x6000050 = function (arg0)
    {
        (asm.x6000050_init.apply)(this,arguments);
        return (asm.x6000050.apply)(this,arguments);
    };;
    asm.x6000050_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Int32"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i4 */
        /* IL_03: box System.Int32*/
        /* IL_08: call String NumberStructToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x6000053)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000052_init = function ()
    {
        (((asm0)["System.NotSupportedException"])().init)();
        asm.x6000052 = asm.x6000052_;
    };;
    asm.x6000052 = function (arg0,arg1)
    {
        (asm.x6000052_init.apply)(this,arguments);
        return (asm.x6000052.apply)(this,arguments);
    };;
    asm.x6000052_ = function ToString(arg0,arg1)
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
                loc2 = (((asm0.x60000d6)(arg1,new_string("X")) === (0|0)) ? (1) : (0));
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
                throw newobj(t0,asm0.x6000076,[ null ]);
                case 0x25:
                /* IL_25: ldloc.1 */
                /* IL_26: ret */
                return loc1;
            }
        }
    };
    asm.x6000053 = function(o) { return new_string(o.boxed.toString()); };;
    asm.x6000054_init = function ()
    {
        (((asm0)["System.IntPtr"])().init)();
        asm.x6000054 = asm.x6000054_;
    };;
    asm.x6000054 = function (arg0)
    {
        (asm.x6000054_init.apply)(this,arguments);
        return (asm.x6000054.apply)(this,arguments);
    };;
    asm.x6000054_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.IntPtr"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldobj System.IntPtr*/
        /* IL_07: box System.IntPtr*/
        /* IL_0C: call String NumberStructToString(System.Object)*/
        /* IL_11: stloc.0 */
        loc0 = (asm0.x6000053)({
            'boxed': arg0,
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };
    asm.x6000055 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000016)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000056 = function get_Value(arg0)
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
    asm.x6000058 = function GetTypeFromHandle(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Type GetRuntimeTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x600005f)(clone_value(arg0));
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x600005a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000013)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x600005b = function (o) { return o.type || o.constructor; };;
    asm.x600005d_init = function ()
    {
        (((asm0)["System.Boolean"])().init)();
        (((asm0)["System.RuntimeType"])().init)();
        asm.x600005d = asm.x600005d_;
    };;
    asm.x600005d = function (arg0)
    {
        (asm.x600005d_init.apply)(this,arguments);
        return (asm.x600005d.apply)(this,arguments);
    };;
    asm.x600005d_ = function GetInstance(arg0)
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
                arg0.TypeInstance = newobj(t1,asm0.x600005c,[ null,arg0 ]);
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
    asm.x600005e = function GetType(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call constructor GetConstructor(System.Object)*/
        /* IL_07: call Type GetInstance(System.RuntimeType+constructor)*/
        /* IL_0C: stloc.0 */
        loc0 = (asm0.x600005d)((asm0.x600005b)(arg0));
        /* IL_0F: ldloc.0 */
        /* IL_10: ret */
        return loc0;
    };;
    asm.x600005f_init = function ()
    {
        (((asm0)["System.RuntimeType+constructor"])().init)();
        asm.x600005f = asm.x600005f_;
    };;
    asm.x600005f = function (arg0)
    {
        (asm.x600005f_init.apply)(this,arguments);
        return (asm.x600005f.apply)(this,arguments);
    };;
    asm.x600005f_ = function GetRuntimeTypeFromHandle(arg0)
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
        loc0 = (asm0.x600005d)(({
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
    asm.x6000060 = function get_FullName(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Object FullName*/
        /* IL_0C: call String FromJsString(System.Object)*/
        /* IL_11: stloc.0 */
        loc0 = new_string(arg0.SystemRuntimeTypector.FullName);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    asm.x6000061_init = function ()
    {
        (((asm0)["System.RuntimeType"])().init)();
        asm.x6000061 = asm.x6000061_;
    };;
    asm.x6000061 = function (arg0,arg1)
    {
        (asm.x6000061_init.apply)(this,arguments);
        return (asm.x6000061.apply)(this,arguments);
    };;
    asm.x6000061_ = function Equals(arg0,arg1)
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
        loc1 = ((arg0.SystemRuntimeTypector === loc0.SystemRuntimeTypector) ? (1) : (0));
        /* IL_19: ldloc.1 */
        /* IL_1A: ret */
        return loc1;
    };
    asm.x6000062_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.Boolean"])().init)();
        asm.x6000062 = asm.x6000062_;
    };;
    asm.x6000062 = function (arg0)
    {
        (asm.x6000062_init.apply)(this,arguments);
        return (asm.x6000062.apply)(this,arguments);
    };;
    asm.x6000062_ = function GetHashCode(arg0)
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
                    'boxed': arg0.SystemRuntimeTypector.Hash,
                    'type': t0,
                    'vtable': t0.prototype.vtable
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
                arg0.SystemRuntimeTypector.Hash = (asm0.x6000006)(arg0);
                case 0x2B:
                /* IL_2B: ldarg.0 */
                /* IL_2C: ldfld constructor ctor*/
                /* IL_31: ldfld Int32 Hash*/
                /* IL_36: stloc.0 */
                loc0 = arg0.SystemRuntimeTypector.Hash;
                /* IL_39: ldloc.0 */
                /* IL_3A: ret */
                return loc0;
            }
        }
    };
    asm.x6000063 = 
            function (type, inherit) {
                var ca = type.CustomAttributes;
                var r = new_array(asm0['System.Object'], ca.length);
                for (var i=0; i<ca.length; i++) {
                    var attr_type = ca[i][0];
                    var attr_ctor = ca[i][1];
                    var attr_ctor_args_data = ca[i][2];
                    var attr = new attr_type();
                    var attr_ctor_args = [attr];
                    for (var j=0; j<attr_ctor_args_data.length; j++) {
                        attr_ctor_args.push(attr_ctor_args_data[j]);
                    }
                    attr_ctor.apply(null, attr_ctor_args);
                    r.jsarr[i] = attr;
                }
                return r;
            }
            ;;
    asm.x6000064 = function GetCustomAttributes(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldarg.1 */
        /* IL_08: call Object[] GetCustomAttributesImpl(System.Object, System.Boolean)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x6000063)(arg0.SystemRuntimeTypector,arg1);
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    asm.x6000065_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x6000065 = asm.x6000065_;
    };;
    asm.x6000065 = function (arg0,arg1,arg2)
    {
        (asm.x6000065_init.apply)(this,arguments);
        return (asm.x6000065.apply)(this,arguments);
    };;
    asm.x6000065_ = function GetCustomAttributes(arg0,arg1,arg2)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x6000075,[ null ]);
    };
    asm.x6000066_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x6000066 = asm.x6000066_;
    };;
    asm.x6000066 = function (arg0)
    {
        (asm.x6000066_init.apply)(this,arguments);
        return (asm.x6000066.apply)(this,arguments);
    };;
    asm.x6000066_ = function get_Assembly(arg0)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x6000075,[ null ]);
    };
    asm.x6000067_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x6000067 = asm.x6000067_;
    };;
    asm.x6000067 = function (arg0,arg1,arg2)
    {
        (asm.x6000067_init.apply)(this,arguments);
        return (asm.x6000067.apply)(this,arguments);
    };;
    asm.x6000067_ = function IsDefined(arg0,arg1,arg2)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x6000075,[ null ]);
    };
    asm.x600005c = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600005a)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld constructor ctor*/
        arg0.SystemRuntimeTypector = arg1;
        /* IL_0F: nop */
        /* IL_10: ret */
        return ;
    };;
    asm.x6000068 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000069 = function get_Value(arg0)
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
    asm.x600006a_init = function ()
    {
        (((asm0)["System.SByte"])().init)();
        asm.x600006a = asm.x600006a_;
    };;
    asm.x600006a = function (arg0)
    {
        (asm.x600006a_init.apply)(this,arguments);
        return (asm.x600006a.apply)(this,arguments);
    };;
    asm.x600006a_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.SByte"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.i1 */
        /* IL_03: box System.SByte*/
        /* IL_08: call String NumberStructToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x6000053)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x600006b_init = function ()
    {
        (((asm0)["System.Single"])().init)();
        asm.x600006b = asm.x600006b_;
    };;
    asm.x600006b = function (arg0)
    {
        (asm.x600006b_init.apply)(this,arguments);
        return (asm.x600006b.apply)(this,arguments);
    };;
    asm.x600006b_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.Single"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.r4 */
        /* IL_03: box System.Single*/
        /* IL_08: call String NumberStructToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x6000053)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x600006c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000016)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000074 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000075 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600001b)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000076 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation not supported*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600001c)(arg0,new_string("Operation not supported"));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    asm.x6000077 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        (asm0.x600001c)(arg0,arg1);
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: ret */
        return ;
    };;
    asm.x600007b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x600007c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Cannot cast from source type to destination type.*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600001c)(arg0,new_string("Cannot cast from source type to destination type."));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    asm.x600007d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation is not valid due to the current state of the object*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600001c)(arg0,new_string("Operation is not valid due to the current state of the object"));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    asm.x600007e = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        (asm0.x600001c)(arg0,arg1);
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: ret */
        return ;
    };;
    asm.x600007f_init = function ()
    {
        (((asm0)["System.Int64"])().init)();
        asm.x600007f = asm.x600007f_;
    };;
    asm.x600007f = function (arg0)
    {
        (asm.x600007f_init.apply)(this,arguments);
        return (asm.x600007f.apply)(this,arguments);
    };;
    asm.x600007f_ = function ToString(arg0)
    {
        var t0;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc5;
        var loc4;
        var loc3;
        t0 = ((asm0)["System.Int64"])();
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
                /* IL_0E: ldloc.0 */
                /* IL_0F: ldc.i4.0 */
                /* IL_10: conv.i8 */
                /* IL_12: clt */
                /* IL_13: ldc.i4.0 */
                /* IL_15: ceq */
                /* IL_16: stloc.s 5*/
                loc5 = (((asm0.Int64_LessThan)(loc0,conv_i8((0|0))) === (0|0)) ? (1) : (0));
                /* IL_18: ldloc.s 5*/
                /* IL_1A: brtrue.s IL_37*/
                
                if (loc5){
                    __pos_0__ = 0x37;
                    continue;
                }
                /* IL_1C: nop */
                
                /* IL_1D: ldstr -*/
                /* IL_22: ldloc.0 */
                /* IL_23: neg */
                /* IL_24: box System.Int64*/
                /* IL_29: callvirt String ToString()*/
                /* IL_2E: call String Concat(System.String, System.String)*/
                /* IL_33: stloc.s 4*/
                loc4 = (asm0.x60000cf)(new_string("-"),((({
                    'boxed': (asm0.Int64_UnaryNegation)(loc0),
                    'type': t0,
                    'vtable': t0.prototype.vtable
                }.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed({
                    'boxed': (asm0.Int64_UnaryNegation)(loc0),
                    'type': t0,
                    'vtable': t0.prototype.vtable
                })));
                /* IL_35: br.s IL_5E*/
                __pos_0__ = 0x5E;
                continue;
                case 0x37:
                /* IL_37: nop */
                
                /* IL_38: ldloc.0 */
                /* IL_39: ldloc.1 */
                /* IL_3A: rem */
                /* IL_3B: stloc.3 */
                loc3 = (asm0.Int64_Modulus)(loc0,loc1);
                /* IL_3C: ldloc.3 */
                /* IL_3D: call String GetLowString(System.Int64)*/
                /* IL_42: ldloc.2 */
                /* IL_43: call String Concat(System.String, System.String)*/
                /* IL_48: stloc.2 */
                loc2 = (asm0.x60000cf)(new_string(loc3[0].toString()),loc2);
                /* IL_49: ldloc.0 */
                /* IL_4A: ldloc.1 */
                /* IL_4B: div */
                /* IL_4C: stloc.0 */
                loc0 = (asm0.Int64_Division)(loc0,loc1);
                /* IL_4D: nop */
                
                /* IL_4E: ldloc.0 */
                /* IL_4F: ldc.i4.0 */
                /* IL_50: conv.i8 */
                /* IL_52: cgt */
                /* IL_53: stloc.s 5*/
                loc5 = (asm0.Int64_GreaterThan)(loc0,conv_i8((0|0)));
                /* IL_55: ldloc.s 5*/
                /* IL_57: brtrue.s IL_37*/
                
                if (loc5){
                    __pos_0__ = 0x37;
                    continue;
                }
                /* IL_59: ldloc.2 */
                /* IL_5A: stloc.s 4*/
                loc4 = loc2;
                case 0x5E:
                /* IL_5E: ldloc.s 4*/
                /* IL_60: ret */
                return loc4;
            }
        }
    };
    asm.x6000080 = function Equals(arg0,arg1)
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
    asm.x6000081 = function GetHashCode(arg0)
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
    asm.x6000084 = 
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
    asm.XInt64_Addition = asm.x6000084;
    asm.x6000085 = 
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
    asm.XInt64_Subtraction = asm.x6000085;
    asm.x6000086 = 
            function XInt64_BitwiseOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] | rhs[0], lhs[1] | rhs[1]]);
            }
            ;;
    asm.XInt64_BitwiseOr = asm.x6000086;
    asm.x6000087 = 
            function XInt64_BitwiseAnd(lhs, rhs) 
            {
                return new Uint32Array([lhs[0] & rhs[0], lhs[1] & rhs[1]]);
            }
            ;;
    asm.XInt64_BitwiseAnd = asm.x6000087;
    asm.x6000088 = 
            function XInt64_ExclusiveOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] ^ rhs[0], lhs[1] ^ rhs[1]]);
            }
            ;;
    asm.XInt64_ExclusiveOr = asm.x6000088;
    asm.x6000089 = 
            function XInt64_OnesComplement(a)
            {
                return new Uint32Array([~a[0], ~a[1]]);
            }
            ;;
    asm.XInt64_OnesComplement = asm.x6000089;
    asm.x600008a = 
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
    asm.XInt64_LeftShift = asm.x600008a;
    asm.x600008b = 
            function XInt64_Equality(lhs, rhs)
            {
                return lhs[0] === rhs[0] && lhs[1] === rhs[1];
            }
            ;;
    asm.XInt64_Equality = asm.x600008b;
    asm.x600008c = 
            function XInt64_Inequality(lhs, rhs)
            {
                return lhs[0] !== rhs[0] && lhs[1] !== rhs[1];
            }
            ;;
    asm.XInt64_Inequality = asm.x600008c;
    asm.x600008d = function op_Decrement(arg0)
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
    asm.XInt64_Decrement = asm.x600008d;
    asm.x600008e = function op_Increment(arg0)
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
    asm.XInt64_Increment = asm.x600008e;
    asm.x600008f = 
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
    asm.Int64_RightShift = asm.x600008f;
    asm.x6000090 = 
            function Int64_Division(n, d) {
                if (d[0] === 0 && d[1] === 0)
                    throw new Error("System.DivideByZeroException");

                if (asm0.Int64_isNegative(d))
                    return asm0.Int64_Division(
                      asm0.Int64_UnaryNegation(n), asm0.Int64_UnaryNegation(d));

                else if (asm0.Int64_isNegative(n))
                    return asm0.Int64_UnaryNegation(asm0.Int64_Division(asm0.Int64_UnaryNegation(n), d));
                else
                    return asm0.UInt64_Division(n, d);
            };;
    asm.Int64_Division = asm.x6000090;
    asm.x6000091 = 
            function Int64_Modulus(n, d) {
                if (d[0] === 0 && d[1] === 0)
                    throw new Error("System.DivideByZeroException");

                if (asm0.Int64_isNegative(d)) {
                    return asm0.Int64_Modulus(
                      n, asm0.Int64_UnaryNegation(d));
                }
                else if (asm0.Int64_isNegative(n))
                    return asm0.Int64_UnaryNegation(asm0.Int64_Modulus(asm0.Int64_UnaryNegation(n), d));
                else
                    return asm0.UInt64_Modulus(n, d);
            };;
    asm.Int64_Modulus = asm.x6000091;
    asm.x6000092 = 
            function Int64_GreaterThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_GreaterThan(a, b);
                else
                    return bn ? 1 : 0;
            };;
    asm.Int64_GreaterThan = asm.x6000092;
    asm.x6000093 = 
            function Int64_LessThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_LessThan(a, b);
                else
                    return an ? 1 : 0;
            };;
    asm.Int64_LessThan = asm.x6000093;
    asm.x6000094 = 
            function Int64_UnaryNegation (a) {
                var complement = asm0.XInt64_Subtraction(new Uint32Array([0xffffffff, 0xffffffff]), a);
                return asm0.XInt64_Addition(complement, conv_u8(1));
            };;
    asm.Int64_UnaryNegation = asm.x6000094;
    asm.x6000095 = 
            function isNegative(n) {
                return asm0.UInt64_GreaterThan(n, [0xffffffff, 0x7fffffff]);
            };;
    asm.Int64_isNegative = asm.x6000095;
    asm.x60000a0 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000016)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x60000a1 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000016)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x60000a2 = function InitializeArray(arg0,arg1)
    {
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    asm.x60000a3 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x60000a4 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x60000a5_init = function ()
    {
        (((asm0)["System.EventArgs"])().init)();
        asm.x60000a5 = asm.x60000a5_;
    };;
    asm.x60000a5 = function ()
    {
        (asm.x60000a5_init.apply)(this,arguments);
        return (asm.x60000a5.apply)(this,arguments);
    };;
    asm.x60000a5_ = function _cctor()
    {
        var t0;
        t0 = ((asm0)["System.EventArgs"])();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stsfld EventArgs Empty*/
        (t0)["Empty"] = newobj(t0,asm0.x60000a4,[ null ]);
        /* IL_0A: ret */
        return ;
    };
    asm.x60000a7 = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    asm.x60000a6 = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    asm.x60000a8 = function get_Length(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetLengthImpl(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x60000a9)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x60000a9 = function(o) { return o.jsarr.length; };;
    asm.x60000aa = function(o, i) { return box(o.jsarr[i], o.type); };;
    asm.x60000ab = function GetValue(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Object GetValueImpl(System.Object, System.Int32)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x60000aa)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    asm.x60000ac = function GetEnumerator(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt IEnumerator GetEnumeratorImpl()*/
        /* IL_07: stloc.0 */
        loc0 = (((arg0.vtable)["asm0.x60000ad"])())(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x60000ae = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x60000b0_init = function ()
    {
        (((asm0)["System.Array`1+ArrayEnumerator"])(((arguments)[0].constructor.GenericArguments)[0]).init)();
        asm.x60000b0 = asm.x60000b0_;
    };;
    asm.x60000b0 = function (arg0)
    {
        (asm.x60000b0_init.apply)(this,arguments);
        return (asm.x60000b0.apply)(this,arguments);
    };;
    asm.x60000b0_ = function GetEnumerator(arg0)
    {
        var t0;
        var t1;
        var loc0;
        t0 = ((arguments)[0].constructor.GenericArguments)[0];
        t1 = ((asm0)["System.Array`1+ArrayEnumerator"])(((arguments)[0].constructor.GenericArguments)[0]);
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: newobj Void .ctor(System.Array`1[T])*/
        /* IL_07: stloc.0 */
        loc0 = newobj(t1,asm0.x60000b3,[ null,arg0 ]);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };
    asm.x60000b1 = function GetEnumeratorImpl(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call IEnumerator`1 GetEnumerator()*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x60000b0)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x60000b2 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x60000ae)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x60000b4 = function get_Current(arg0)
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
    asm.x60000b5 = function MoveNext(arg0)
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
    asm.x60000b6 = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        var loc0;
        t0 = ((arguments)[0].constructor.GenericArguments)[0];
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call T get_Current()*/
        /* IL_07: box T*/
        /* IL_0C: stloc.0 */
        loc0 = box((asm0.x60000b4)(arg0),t0);
        /* IL_0F: ldloc.0 */
        /* IL_10: ret */
        return loc0;
    };;
    asm.x60000b7 = function Reset(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldc.i4.m1 */
        /* IL_03: stfld Int32 index*/
        arg0.index = (-1|0);
        /* IL_08: ret */
        return ;
    };;
    asm.x60000b8 = function Dispose(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    asm.x60000b3 = function _ctor(arg0,arg1)
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
        arg0.length = (asm0.x60000a8)(arg1);
        /* IL_22: nop */
        /* IL_23: ret */
        return ;
    };;
    asm.x60000b9 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000016)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x60000ba = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000016)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x60000bc = function get_HasValue(arg0)
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
    asm.x60000bd_init = function ()
    {
        (((asm0)["System.InvalidOperationException"])().init)();
        asm.x60000bd = asm.x60000bd_;
    };;
    asm.x60000bd = function (arg0)
    {
        (asm.x60000bd_init.apply)(this,arguments);
        return (asm.x60000bd.apply)(this,arguments);
    };;
    asm.x60000bd_ = function get_Value(arg0)
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
                throw newobj(t0,asm0.x600007e,[ null,new_string("Nullable object must have a value.") ]);
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
    asm.x60000be_init = function ()
    {
        (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]).init)();
        asm.x60000be = asm.x60000be_;
    };;
    asm.x60000be = function (arg0,arg1)
    {
        (asm.x60000be_init.apply)(this,arguments);
        return (asm.x60000be.apply)(this,arguments);
    };;
    asm.x60000be_ = function Equals(arg0,arg1)
    {
        var t0;
        var t1;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = (((arguments)[0].r)().constructor.GenericArguments)[0];
        t1 = ((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]);
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
                loc1 = (((t1.IsInst)(arg1) > null) ? (1) : (0));
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
                loc0 = (asm0.x60000bf)(arg0,clone_value(unbox_any(arg1,t1)));
                case 0x38:
                /* IL_38: ldloc.0 */
                /* IL_39: ret */
                return loc0;
            }
        }
    };
    asm.x60000bf = function Equals(arg0,arg1)
    {
        var t0;
        var __pos_0__;
        var loc1;
        var loc0;
        t0 = (((arguments)[0].r)().constructor.GenericArguments)[0];
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
                loc0 = ((({
                    'w': function ()
                    {
                        (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"];
                    }
                }.vtable)["asm0.x6000009"])())({
                    'w': function ()
                    {
                        (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"];
                    }
                },box((arg0.r)().value,t0));
                case 0x46:
                /* IL_46: ldloc.0 */
                /* IL_47: ret */
                return loc0;
            }
        }
    };;
    asm.x60000c0 = function GetHashCode(arg0)
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
                loc0 = ((({
                    'w': function ()
                    {
                        (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"];
                    }
                }.vtable)["asm0.x6000006"])())({
                    'w': function ()
                    {
                        (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"];
                    }
                });
                case 0x23:
                /* IL_23: ldloc.0 */
                /* IL_24: ret */
                return loc0;
            }
        }
    };;
    asm.x60000c1 = function GetValueOrDefault(arg0)
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
    asm.x60000c2 = function GetValueOrDefault(arg0,arg1)
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
    asm.x60000c3_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x60000c3 = asm.x60000c3_;
    };;
    asm.x60000c3 = function (arg0)
    {
        (asm.x60000c3_init.apply)(this,arguments);
        return (asm.x60000c3.apply)(this,arguments);
    };;
    asm.x60000c3_ = function ToString(arg0)
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
                loc0 = ((({
                    'w': function ()
                    {
                        (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"];
                    }
                }.vtable)["asm0.x6000005"])())({
                    'w': function ()
                    {
                        (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"];
                    }
                });
                /* IL_20: br.s IL_2A*/
                __pos_0__ = 0x2A;
                continue;
                case 0x22:
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
    asm.x60000c4_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Nullable`1"])(T).init)();
            asm.x60000c4 = asm.x60000c4_;
        };
    };;
    asm.x60000c4 = function (T)
    {
        return function (arg0)
        {
            ((asm.x60000c4_init)(T).apply)(this,arguments);
            return ((asm.x60000c4)(T).apply)(this,arguments);
        };
    };;
    asm.x60000c4_ = function (T)
    {
        return function op_Implicit(arg0)
        {
            var t0;
            var t1;
            var loc0;
            t0 = T;
            t1 = ((asm0)["System.Nullable`1"])(T);
            /* IL_00: nop */
            /* IL_01: ldarg.0 */
            /* IL_02: newobj Void .ctor(T)*/
            /* IL_07: stloc.0 */
            loc0 = newobj(t1,asm0.x60000bb,[ null,clone_value(arg0) ]);
            /* IL_0A: ldloc.0 */
            /* IL_0B: ret */
            return loc0;
        };
    };
    asm.x60000c5 = function (T)
    {
        return function op_Explicit(arg0)
        {
            var loc0;
            /* IL_00: nop */
            /* IL_01: ldarga.s 0*/
            /* IL_03: call T get_Value()*/
            /* IL_08: stloc.0 */
            loc0 = (asm0.x60000bd)({
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
    asm.x60000c6 = function (T)
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
    asm.x60000c7_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Nullable`1"])(T).init)();
            asm.x60000c7 = asm.x60000c7_;
        };
    };;
    asm.x60000c7 = function (T)
    {
        return function (arg0)
        {
            ((asm.x60000c7_init)(T).apply)(this,arguments);
            return ((asm.x60000c7)(T).apply)(this,arguments);
        };
    };;
    asm.x60000c7_ = function (T)
    {
        return function Unbox(arg0)
        {
            var t0;
            var t1;
            var loc2;
            var __pos_0__;
            var loc1;
            var loc0;
            t0 = T;
            t1 = ((asm0)["System.Nullable`1"])(T);
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
                    ((t1.IsValueType) ? (({
                        'w': function ()
                        {
                            loc2 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return loc2;
                        }
                    }.w)(new t1())) : (null));
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
                    loc0 = newobj(t1,asm0.x60000bb,[ null,clone_value(unbox_any(arg0,t0)) ]);
                    case 0x26:
                    /* IL_26: ldloc.0 */
                    /* IL_27: ret */
                    return loc0;
                }
            }
        };
    };
    asm.x60000bb = function _ctor(arg0,arg1)
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
    asm.x60000c8 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000016)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x60000c9 = function(o) { return o.jsstr.length; };;
    asm.x60000ca = function(a, b) { return a.jsstr === b.jsstr; };;
    asm.x60000cb = function (args) { return new_string(String.prototype.concat.apply('', args.jsarr)); };;
    asm.x60000cc = function (s, i) { return s.jsstr.charCodeAt(i); };;
    asm.x60000cd = function get_Chars(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Char GetChar(System.String, System.Int32)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x60000cc)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    asm.x60000cf_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x60000cf = asm.x60000cf_;
    };;
    asm.x60000cf = function (arg0,arg1)
    {
        (asm.x60000cf_init.apply)(this,arguments);
        return (asm.x60000cf.apply)(this,arguments);
    };;
    asm.x60000cf_ = function Concat(arg0,arg1)
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
        loc0 = (asm0.x60000cb)(loc1);
        /* IL_19: ldloc.0 */
        /* IL_1A: ret */
        return loc0;
    };
    asm.x60000d0_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x60000d0 = asm.x60000d0_;
    };;
    asm.x60000d0 = function (arg0,arg1)
    {
        (asm.x60000d0_init.apply)(this,arguments);
        return (asm.x60000d0.apply)(this,arguments);
    };;
    asm.x60000d0_ = function Concat(arg0,arg1)
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
        loc0 = (asm0.x60000cb)(loc1);
        /* IL_23: ldloc.0 */
        /* IL_24: ret */
        return loc0;
    };
    asm.x60000d1 = function Concat(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call String ConcatImpl(System.String[])*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x60000cb)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x60000d2_init = function ()
    {
        (((asm0)["System.Exception"])().init)();
        asm.x60000d2 = asm.x60000d2_;
    };;
    asm.x60000d2 = function (arg0)
    {
        (asm.x60000d2_init.apply)(this,arguments);
        return (asm.x60000d2.apply)(this,arguments);
    };;
    asm.x60000d2_ = function Concat(arg0)
    {
        var t0;
        t0 = ((asm0)["System.Exception"])();
        /* IL_00: nop */
        /* IL_01: ldstr Not implemented*/
        /* IL_06: newobj Void .ctor(System.String)*/
        /* IL_0B: throw */
        throw newobj(t0,asm0.x600001c,[ null,new_string("Not implemented") ]);
    };
    asm.x60000d3 = function get_Length(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetLengthImpl(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x60000c9)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x60000d4 = function ToString(arg0)
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
    asm.x60000d5 = function op_Inequality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: ldc.i4.0 */
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = (((asm0.x60000ca)(arg0,arg1) === (0|0)) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    asm.x60000d6 = function op_Equality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x60000ca)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    asm.x60000d7 = function Equals(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x60000ca)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    asm.x60000d8_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x60000d8 = asm.x60000d8_;
    };;
    asm.x60000d8 = function (arg0,arg1)
    {
        (asm.x60000d8_init.apply)(this,arguments);
        return (asm.x60000d8.apply)(this,arguments);
    };;
    asm.x60000d8_ = function Equals(arg0,arg1)
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
        loc0 = (asm0.x60000d7)(arg0,cast_class(arg1,t0));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x60000d9 = 
            function (o) {
                var str = o.jsstr;
                var length = str.length;
                var h = 0;
                for (var i = 0; i < length; i += 1)
                    h = (h << 5) - h + str.charCodeAt(i);
                return h;
            };;
    asm.x60000da = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetHashCodeImpl(System.String)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x60000d9)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x60000db = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x60000dc_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x60000dc = asm.x60000dc_;
    };;
    asm.x60000dc = function ()
    {
        (asm.x60000dc_init.apply)(this,arguments);
        return (asm.x60000dc.apply)(this,arguments);
    };;
    asm.x60000dc_ = function _cctor()
    {
        var t0;
        t0 = ((asm0)["System.String"])();
        /* IL_00: ldstr */
        /* IL_05: stsfld String Empty*/
        (t0)["Empty"] = new_string("");
        /* IL_0A: ret */
        return ;
    };
    asm.x60000de = function get_MemberName(arg0)
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
    asm.x60000dd = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000016)(arg0);
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
    asm.x60000e0_init = function ()
    {
        (((asm0)["System.UInt16"])().init)();
        asm.x60000e0 = asm.x60000e0_;
    };;
    asm.x60000e0 = function (arg0)
    {
        (asm.x60000e0_init.apply)(this,arguments);
        return (asm.x60000e0.apply)(this,arguments);
    };;
    asm.x60000e0_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.UInt16"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u2 */
        /* IL_03: box System.UInt16*/
        /* IL_08: call String NumberStructToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x6000053)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x60000e1_init = function ()
    {
        (((asm0)["System.UInt32"])().init)();
        asm.x60000e1 = asm.x60000e1_;
    };;
    asm.x60000e1 = function (arg0)
    {
        (asm.x60000e1_init.apply)(this,arguments);
        return (asm.x60000e1.apply)(this,arguments);
    };;
    asm.x60000e1_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.UInt32"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u4 */
        /* IL_03: box System.UInt32*/
        /* IL_08: call String NumberStructToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x6000053)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x60000e2 = function ToString(arg0)
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
                loc2 = (asm0.x60000cf)(new_string(loc3[0].toString()),loc2);
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
    asm.x60000e4 = 
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
    asm.UInt64_RightShift = asm.x60000e4;
    asm.x60000e5 = 
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
    asm.UInt64_Division = asm.x60000e5;
    asm.x60000e6 = 
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
    asm.XInt64_Multiplication = asm.x60000e6;
    asm.x60000e7 = 
            function UInt64_GreaterThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] >= b[0] ? 1: 0;
            };;
    asm.UInt64_GreaterThanOrEqual = asm.x60000e7;
    asm.x60000e8 = 
            function UInt64_LessThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] <= b[0] ? 1: 0;
            };;
    asm.UInt64_LessThanOrEqual = asm.x60000e8;
    asm.x60000e9 = 
            function UInt64_GreaterThan (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] > b[0] ? 1: 0;
            };;
    asm.UInt64_GreaterThan = asm.x60000e9;
    asm.x60000ea = 
            function UInt64_LessThan(a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] < b[0] ? 1: 0;
            };;
    asm.UInt64_LessThan = asm.x60000ea;
    asm.x60000eb = 
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
    asm.UInt64_Modulus = asm.x60000eb;
    asm.x60000ec = function Equals(arg0,arg1)
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
    asm.x60000ed = function GetHashCode(arg0)
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
    asm.x60000ef_init = function ()
    {
        (((asm0)["System.UIntPtr"])().init)();
        asm.x60000ef = asm.x60000ef_;
    };;
    asm.x60000ef = function (arg0)
    {
        (asm.x60000ef_init.apply)(this,arguments);
        return (asm.x60000ef.apply)(this,arguments);
    };;
    asm.x60000ef_ = function ToString(arg0)
    {
        var t0;
        var loc0;
        t0 = ((asm0)["System.UIntPtr"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldobj System.UIntPtr*/
        /* IL_07: box System.UIntPtr*/
        /* IL_0C: call String NumberStructToString(System.Object)*/
        /* IL_11: stloc.0 */
        loc0 = (asm0.x6000053)({
            'boxed': arg0,
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };
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
                $$Object.CustomAttributes = [  ];
                $$Object.FullName = "System.Object";
                $$Object.Interfaces = [  ];
                $$Object.IsInst = function (t) { return t instanceof $$Object ? t : null; };
                $$Object.IsValueType = false;
                $$Object.IsPrimitive = false;
                $$Object.IsNullable = false;
                $$Object.ArrayType = Array;
                $$Object.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                $$Object.prototype.toString = asm0.x6000004;
            };
            $$Object.prototype = {
                
            };
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
                Assembly.CustomAttributes = [  ];
                Assembly.FullName = "System.Reflection.Assembly";
                Assembly.Interfaces = [  ];
                Assembly.IsInst = function (t) { return t instanceof Assembly ? t : null; };
                Assembly.IsValueType = false;
                Assembly.IsPrimitive = false;
                Assembly.IsNullable = false;
                Assembly.ArrayType = Array;
                Assembly.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            Assembly.prototype = new (((asm0)["System.Object"])())();
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
                ICustomAttributeProvider.CustomAttributes = [ [ ((asm0)["System.ComVisibleAttribute"])(),asm0.x60000ba,[ true ],{
                    
                } ] ];
                ICustomAttributeProvider.FullName = "System.Reflection.ICustomAttributeProvider";
                ICustomAttributeProvider.Interfaces = [  ];
                ICustomAttributeProvider.IsInst = function (t) { return t.constructor.Interfaces.indexOf(ICustomAttributeProvider) != -1 ? t : null; };
                ICustomAttributeProvider.IsValueType = false;
                ICustomAttributeProvider.IsPrimitive = false;
                ICustomAttributeProvider.IsNullable = false;
                ICustomAttributeProvider.ArrayType = Array;
                ICustomAttributeProvider.prototype.vtable = {
                    'asm0.x600000d': function ()
                    {
                        return asm0.x600000d;
                    },
                    'asm0.x600000e': function ()
                    {
                        return asm0.x600000e;
                    },
                    'asm0.x600000f': function ()
                    {
                        return asm0.x600000f;
                    }
                };
            };
            ICustomAttributeProvider.prototype = {
                
            };
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
                MemberInfo.CustomAttributes = [  ];
                MemberInfo.FullName = "System.Reflection.MemberInfo";
                MemberInfo.Interfaces = [ ((asm0)["System.Reflection.ICustomAttributeProvider"])() ];
                MemberInfo.IsInst = function (t) { return t instanceof MemberInfo ? t : null; };
                MemberInfo.IsValueType = false;
                MemberInfo.IsPrimitive = false;
                MemberInfo.IsNullable = false;
                MemberInfo.ArrayType = Array;
                MemberInfo.prototype.vtable = {
                    'asm0.x6000010': function ()
                    {
                        return asm0.x6000010;
                    },
                    'asm0.x6000011': function ()
                    {
                        return asm0.x6000011;
                    },
                    'asm0.x6000012': function ()
                    {
                        return asm0.x6000012;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                (MemberInfo.prototype)[((asm0)["System.Reflection.ICustomAttributeProvider"])()] = {
                    'x600000d': function ()
                    {
                        return asm0.x6000010;
                    },
                    'x600000e': function ()
                    {
                        return asm0.x6000011;
                    },
                    'x600000f': function ()
                    {
                        return asm0.x6000012;
                    }
                };
            };
            MemberInfo.prototype = new (((asm0)["System.Object"])())();
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
                ValueType.CustomAttributes = [  ];
                ValueType.FullName = "System.ValueType";
                ValueType.Interfaces = [  ];
                ValueType.IsInst = function (t) { return t instanceof ValueType ? t : null; };
                ValueType.IsValueType = false;
                ValueType.IsPrimitive = false;
                ValueType.IsNullable = false;
                ValueType.ArrayType = Array;
                ValueType.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            ValueType.prototype = new (((asm0)["System.Object"])())();
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
                Enum.CustomAttributes = [  ];
                Enum.FullName = "System.Enum";
                Enum.Interfaces = [  ];
                Enum.IsInst = function (t) { return t instanceof Enum ? t : null; };
                Enum.IsValueType = false;
                Enum.IsPrimitive = false;
                Enum.IsNullable = false;
                Enum.ArrayType = Array;
                Enum.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            Enum.prototype = {
                
            };
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
                MethodCodeType.CustomAttributes = [ [ ((asm0)["System.ComVisibleAttribute"])(),asm0.x60000ba,[ true ],{
                    
                } ] ];
                MethodCodeType.FullName = "System.Runtime.CompilerServices.MethodCodeType";
                MethodCodeType.Interfaces = [  ];
                MethodCodeType.IsInst = function (t) { return t instanceof MethodCodeType ? t : null; };
                MethodCodeType.IsValueType = true;
                MethodCodeType.IsPrimitive = false;
                MethodCodeType.IsNullable = false;
                MethodCodeType.ArrayType = Array;
                MethodCodeType.prototype.value__ = 0;
                MethodCodeType.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            MethodCodeType.prototype = new (((asm0)["System.Enum"])())();
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
                Attribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x6000022,[ (32767|0) ],{
                    
                } ] ];
                Attribute.FullName = "System.Attribute";
                Attribute.Interfaces = [  ];
                Attribute.IsInst = function (t) { return t instanceof Attribute ? t : null; };
                Attribute.IsValueType = false;
                Attribute.IsPrimitive = false;
                Attribute.IsNullable = false;
                Attribute.ArrayType = Array;
                Attribute.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            Attribute.prototype = new (((asm0)["System.Object"])())();
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
                MethodImplAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x6000022,[ (96|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),false ]
                } ],[ ((asm0)["System.ComVisibleAttribute"])(),asm0.x60000ba,[ true ],{
                    
                } ] ];
                MethodImplAttribute.FullName = "System.Runtime.CompilerServices.MethodImplAttribute";
                MethodImplAttribute.Interfaces = [  ];
                MethodImplAttribute.IsInst = function (t) { return t instanceof MethodImplAttribute ? t : null; };
                MethodImplAttribute.IsValueType = false;
                MethodImplAttribute.IsPrimitive = false;
                MethodImplAttribute.IsNullable = false;
                MethodImplAttribute.ArrayType = Array;
                MethodImplAttribute.prototype.System_Runtime_CompilerServicesMethodImplAttribute_val = new (((asm0)["System.Runtime.CompilerServices.MethodImplOptions"])())();
                MethodImplAttribute.prototype.MethodCodeType = new (((asm0)["System.Runtime.CompilerServices.MethodCodeType"])())();
                MethodImplAttribute.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                MethodImplOptions.CustomAttributes = [ [ ((asm0)["System.FlagsAttribute"])(),asm0.x600003d,[  ],{
                    
                } ],[ ((asm0)["System.ComVisibleAttribute"])(),asm0.x60000ba,[ true ],{
                    
                } ] ];
                MethodImplOptions.FullName = "System.Runtime.CompilerServices.MethodImplOptions";
                MethodImplOptions.Interfaces = [  ];
                MethodImplOptions.IsInst = function (t) { return t instanceof MethodImplOptions ? t : null; };
                MethodImplOptions.IsValueType = true;
                MethodImplOptions.IsPrimitive = false;
                MethodImplOptions.IsNullable = false;
                MethodImplOptions.ArrayType = Array;
                MethodImplOptions.prototype.value__ = 0;
                MethodImplOptions.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            MethodImplOptions.prototype = new (((asm0)["System.Enum"])())();
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
                Exception.CustomAttributes = [  ];
                Exception.FullName = "System.Exception";
                Exception.Interfaces = [  ];
                Exception.IsInst = function (t) { return t instanceof Exception ? t : null; };
                Exception.IsValueType = false;
                Exception.IsPrimitive = false;
                Exception.IsNullable = false;
                Exception.ArrayType = Array;
                (Exception.prototype)["SystemException<Message>k__BackingField"] = null;
                Exception.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600001f;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            Exception.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.ArgumentException"] = (function ()
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
            function ArgumentException()
            {
                (ArgumentException.init)();
                this.constructor = ArgumentException;
            };
            c = ArgumentException;
            ct = c;
            ArgumentException.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                ArgumentException.CustomAttributes = [  ];
                ArgumentException.FullName = "System.ArgumentException";
                ArgumentException.Interfaces = [  ];
                ArgumentException.IsInst = function (t) { return t instanceof ArgumentException ? t : null; };
                ArgumentException.IsValueType = false;
                ArgumentException.IsPrimitive = false;
                ArgumentException.IsNullable = false;
                ArgumentException.ArrayType = Array;
                ArgumentException.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600001f;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            ArgumentException.prototype = new (((asm0)["System.Exception"])())();
            return c;
        };
    })();
    (asm)["System.ArgumentNullException"] = (function ()
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
            function ArgumentNullException()
            {
                (ArgumentNullException.init)();
                this.constructor = ArgumentNullException;
            };
            c = ArgumentNullException;
            ct = c;
            ArgumentNullException.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                ArgumentNullException.CustomAttributes = [  ];
                ArgumentNullException.FullName = "System.ArgumentNullException";
                ArgumentNullException.Interfaces = [  ];
                ArgumentNullException.IsInst = function (t) { return t instanceof ArgumentNullException ? t : null; };
                ArgumentNullException.IsValueType = false;
                ArgumentNullException.IsPrimitive = false;
                ArgumentNullException.IsNullable = false;
                ArgumentNullException.ArrayType = Array;
                ArgumentNullException.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600001f;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            ArgumentNullException.prototype = new (((asm0)["System.ArgumentException"])())();
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
                AttributeUsageAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x6000022,[ (4|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),true ]
                } ] ];
                AttributeUsageAttribute.FullName = "System.AttributeUsageAttribute";
                AttributeUsageAttribute.Interfaces = [  ];
                AttributeUsageAttribute.IsInst = function (t) { return t instanceof AttributeUsageAttribute ? t : null; };
                AttributeUsageAttribute.IsValueType = false;
                AttributeUsageAttribute.IsPrimitive = false;
                AttributeUsageAttribute.IsNullable = false;
                AttributeUsageAttribute.ArrayType = Array;
                (AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = new (((asm0)["System.AttributeTargets"])())();
                (AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = false;
                AttributeUsageAttribute.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                $$Boolean.CustomAttributes = [  ];
                $$Boolean.FullName = "System.Boolean";
                $$Boolean.Interfaces = [  ];
                $$Boolean.IsInst = function (t) { return typeof t == 'number'; };
                $$Boolean.IsValueType = true;
                $$Boolean.IsPrimitive = true;
                $$Boolean.IsNullable = false;
                $$Boolean.ArrayType = Array;
                $$Boolean.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000027;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            $$Boolean.prototype = {
                
            };
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
                Byte.CustomAttributes = [  ];
                Byte.FullName = "System.Byte";
                Byte.Interfaces = [  ];
                Byte.IsInst = function (t) { return typeof t == 'number'; };
                Byte.IsValueType = true;
                Byte.IsPrimitive = true;
                Byte.IsNullable = false;
                Byte.ArrayType = Uint8Array;
                Byte.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000035;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            Byte.prototype = {
                
            };
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
                Char.CustomAttributes = [  ];
                Char.FullName = "System.Char";
                Char.Interfaces = [  ];
                Char.IsInst = function (t) { return typeof t == 'number'; };
                Char.IsValueType = true;
                Char.IsPrimitive = true;
                Char.IsNullable = false;
                Char.ArrayType = Uint16Array;
                Char.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000036;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            Char.prototype = {
                
            };
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
                Console.CustomAttributes = [  ];
                Console.FullName = "System.Console";
                Console.Interfaces = [  ];
                Console.IsInst = function (t) { return t instanceof Console ? t : null; };
                Console.IsValueType = false;
                Console.IsPrimitive = false;
                Console.IsNullable = false;
                Console.ArrayType = Array;
                Console.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            Console.prototype = new (((asm0)["System.Object"])())();
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
                Double.CustomAttributes = [  ];
                Double.FullName = "System.Double";
                Double.Interfaces = [  ];
                Double.IsInst = function (t) { return typeof t == 'number'; };
                Double.IsValueType = true;
                Double.IsPrimitive = true;
                Double.IsNullable = false;
                Double.ArrayType = Float64Array;
                Double.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600003b;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            Double.prototype = {
                
            };
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
                Environment.CustomAttributes = [  ];
                Environment.FullName = "System.Environment";
                Environment.Interfaces = [  ];
                Environment.IsInst = function (t) { return t instanceof Environment ? t : null; };
                Environment.IsValueType = false;
                Environment.IsPrimitive = false;
                Environment.IsNullable = false;
                Environment.ArrayType = Array;
                Environment.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                FlagsAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x6000022,[ (16|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),false ]
                } ] ];
                FlagsAttribute.FullName = "System.FlagsAttribute";
                FlagsAttribute.Interfaces = [  ];
                FlagsAttribute.IsInst = function (t) { return t instanceof FlagsAttribute ? t : null; };
                FlagsAttribute.IsValueType = false;
                FlagsAttribute.IsPrimitive = false;
                FlagsAttribute.IsNullable = false;
                FlagsAttribute.ArrayType = Array;
                FlagsAttribute.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            FlagsAttribute.prototype = new (((asm0)["System.Attribute"])())();
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
                Delegate.CustomAttributes = [  ];
                Delegate.FullName = "System.Delegate";
                Delegate.Interfaces = [  ];
                Delegate.IsInst = function (t) { return t instanceof Delegate ? t : null; };
                Delegate.IsValueType = false;
                Delegate.IsPrimitive = false;
                Delegate.IsNullable = false;
                Delegate.ArrayType = Array;
                Delegate.prototype._methodPtr = null;
                Delegate.prototype._target = null;
                Delegate.prototype.vtable = {
                    'asm0.x6000040': function ()
                    {
                        return asm0.x6000040;
                    },
                    'asm0.x6000041': function ()
                    {
                        return asm0.x6000041;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000042;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000045;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
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
                MulticastDelegate.CustomAttributes = [  ];
                MulticastDelegate.FullName = "System.MulticastDelegate";
                MulticastDelegate.Interfaces = [  ];
                MulticastDelegate.IsInst = function (t) { return t instanceof MulticastDelegate ? t : null; };
                MulticastDelegate.IsValueType = false;
                MulticastDelegate.IsPrimitive = false;
                MulticastDelegate.IsNullable = false;
                MulticastDelegate.ArrayType = Array;
                MulticastDelegate.prototype._invocationList = null;
                MulticastDelegate.prototype._methodPtr = null;
                MulticastDelegate.prototype._target = null;
                MulticastDelegate.prototype.vtable = {
                    'asm0.x6000041': function ()
                    {
                        return asm0.x6000048;
                    },
                    'asm0.x6000040': function ()
                    {
                        return asm0.x6000049;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000042;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000045;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
            };
            MulticastDelegate.prototype = new (((asm0)["System.Delegate"])())();
            return c;
        };
    })();
    (asm)["System.Func`2"] = (function ()
    {
        var ct;
        ct = {
            
        };
        return function (T,TResult)
        {
            var c;
            var initialized;
            c = tree_get([ T,TResult ],ct);
            
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
            tree_set([ T,TResult ],ct,c);
            Func_2.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Func_2.CustomAttributes = [  ];
                Func_2.FullName = "System.Func`2";
                Func_2.Interfaces = [  ];
                Func_2.IsInst = function (t) { return t instanceof Func_2 ? t : null; };
                Func_2.IsValueType = false;
                Func_2.IsPrimitive = false;
                Func_2.IsNullable = false;
                Func_2.ArrayType = Array;
                Func_2.GenericArguments = [ T,TResult ];
                Func_2.prototype._invocationList = null;
                Func_2.prototype._methodPtr = null;
                Func_2.prototype._target = null;
                Func_2.prototype.vtable = {
                    'asm0.x600004c': function ()
                    {
                        return asm0.x600004c;
                    },
                    'asm0.x6000041': function ()
                    {
                        return asm0.x6000048;
                    },
                    'asm0.x6000040': function ()
                    {
                        return asm0.x6000049;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000042;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000045;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
            };
            Func_2.prototype = {
                
            };
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
                ICloneable.CustomAttributes = [  ];
                ICloneable.FullName = "System.ICloneable";
                ICloneable.Interfaces = [  ];
                ICloneable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(ICloneable) != -1 ? t : null; };
                ICloneable.IsValueType = false;
                ICloneable.IsPrimitive = false;
                ICloneable.IsNullable = false;
                ICloneable.ArrayType = Array;
                ICloneable.prototype.vtable = {
                    'asm0.x600004d': function ()
                    {
                        return asm0.x600004d;
                    }
                };
            };
            ICloneable.prototype = {
                
            };
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
                IDisposable.CustomAttributes = [  ];
                IDisposable.FullName = "System.IDisposable";
                IDisposable.Interfaces = [  ];
                IDisposable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IDisposable) != -1 ? t : null; };
                IDisposable.IsValueType = false;
                IDisposable.IsPrimitive = false;
                IDisposable.IsNullable = false;
                IDisposable.ArrayType = Array;
                IDisposable.prototype.vtable = {
                    'asm0.x600004e': function ()
                    {
                        return asm0.x600004e;
                    }
                };
            };
            IDisposable.prototype = {
                
            };
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
                Int16.CustomAttributes = [  ];
                Int16.FullName = "System.Int16";
                Int16.Interfaces = [  ];
                Int16.IsInst = function (t) { return typeof t == 'number'; };
                Int16.IsValueType = true;
                Int16.IsPrimitive = true;
                Int16.IsNullable = false;
                Int16.ArrayType = Int16Array;
                Int16.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600004f;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            Int16.prototype = {
                
            };
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
                Int32.CustomAttributes = [  ];
                Int32.FullName = "System.Int32";
                Int32.Interfaces = [  ];
                Int32.IsInst = function (t) { return typeof t == 'number'; };
                Int32.IsValueType = true;
                Int32.IsPrimitive = true;
                Int32.IsNullable = false;
                Int32.ArrayType = Int32Array;
                Int32.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000050;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            Int32.prototype = {
                
            };
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
                InternalFormatting.CustomAttributes = [  ];
                InternalFormatting.FullName = "System.InternalFormatting";
                InternalFormatting.Interfaces = [  ];
                InternalFormatting.IsInst = function (t) { return t instanceof InternalFormatting ? t : null; };
                InternalFormatting.IsValueType = false;
                InternalFormatting.IsPrimitive = false;
                InternalFormatting.IsNullable = false;
                InternalFormatting.ArrayType = Array;
                InternalFormatting.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                IntPtr.CustomAttributes = [  ];
                IntPtr.FullName = "System.IntPtr";
                IntPtr.Interfaces = [  ];
                IntPtr.IsInst = function (t) { return typeof t == 'number'; };
                IntPtr.IsValueType = true;
                IntPtr.IsPrimitive = true;
                IntPtr.IsNullable = false;
                IntPtr.ArrayType = Array;
                IntPtr.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000054;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            IntPtr.prototype = {
                
            };
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
                ParamArrayAttribute.CustomAttributes = [  ];
                ParamArrayAttribute.FullName = "System.ParamArrayAttribute";
                ParamArrayAttribute.Interfaces = [  ];
                ParamArrayAttribute.IsInst = function (t) { return t instanceof ParamArrayAttribute ? t : null; };
                ParamArrayAttribute.IsValueType = false;
                ParamArrayAttribute.IsPrimitive = false;
                ParamArrayAttribute.IsNullable = false;
                ParamArrayAttribute.ArrayType = Array;
                ParamArrayAttribute.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                RuntimeFieldHandle.CustomAttributes = [  ];
                RuntimeFieldHandle.FullName = "System.RuntimeFieldHandle";
                RuntimeFieldHandle.Interfaces = [  ];
                RuntimeFieldHandle.IsInst = function (t) { return t instanceof RuntimeFieldHandle ? t : null; };
                RuntimeFieldHandle.IsValueType = true;
                RuntimeFieldHandle.IsPrimitive = false;
                RuntimeFieldHandle.IsNullable = false;
                RuntimeFieldHandle.ArrayType = Array;
                RuntimeFieldHandle.prototype.value = null;
                RuntimeFieldHandle.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            RuntimeFieldHandle.prototype = {
                
            };
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
                Type.CustomAttributes = [  ];
                Type.FullName = "System.Type";
                Type.Interfaces = [ ((asm0)["System.Reflection.ICustomAttributeProvider"])() ];
                Type.IsInst = function (t) { return t instanceof Type ? t : null; };
                Type.IsValueType = false;
                Type.IsPrimitive = false;
                Type.IsNullable = false;
                Type.ArrayType = Array;
                Type.prototype.vtable = {
                    'asm0.x6000057': function ()
                    {
                        return asm0.x6000057;
                    },
                    'asm0.x6000059': function ()
                    {
                        return asm0.x6000059;
                    },
                    'asm0.x6000010': function ()
                    {
                        return asm0.x6000010;
                    },
                    'asm0.x6000011': function ()
                    {
                        return asm0.x6000011;
                    },
                    'asm0.x6000012': function ()
                    {
                        return asm0.x6000012;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                (Type.prototype)[((asm0)["System.Reflection.ICustomAttributeProvider"])()] = {
                    'x600000d': function ()
                    {
                        return asm0.x6000010;
                    },
                    'x600000e': function ()
                    {
                        return asm0.x6000011;
                    },
                    'x600000f': function ()
                    {
                        return asm0.x6000012;
                    }
                };
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
                RuntimeType.CustomAttributes = [  ];
                RuntimeType.FullName = "System.RuntimeType";
                RuntimeType.Interfaces = [ ((asm0)["System.Reflection.ICustomAttributeProvider"])() ];
                RuntimeType.IsInst = function (t) { return t instanceof RuntimeType ? t : null; };
                RuntimeType.IsValueType = false;
                RuntimeType.IsPrimitive = false;
                RuntimeType.IsNullable = false;
                RuntimeType.ArrayType = Array;
                RuntimeType.prototype.SystemRuntimeTypector = null;
                RuntimeType.prototype.vtable = {
                    'asm0.x6000057': function ()
                    {
                        return asm0.x6000060;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000061;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000062;
                    },
                    'asm0.x6000010': function ()
                    {
                        return asm0.x6000064;
                    },
                    'asm0.x6000011': function ()
                    {
                        return asm0.x6000065;
                    },
                    'asm0.x6000059': function ()
                    {
                        return asm0.x6000066;
                    },
                    'asm0.x6000012': function ()
                    {
                        return asm0.x6000067;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
                (RuntimeType.prototype)[((asm0)["System.Reflection.ICustomAttributeProvider"])()] = {
                    'x600000d': function ()
                    {
                        return asm0.x6000064;
                    },
                    'x600000e': function ()
                    {
                        return asm0.x6000065;
                    },
                    'x600000f': function ()
                    {
                        return asm0.x6000067;
                    }
                };
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
                constructor.CustomAttributes = [  ];
                constructor.FullName = "System.RuntimeType+constructor";
                constructor.Interfaces = [  ];
                constructor.IsInst = function (t) { return t instanceof constructor ? t : null; };
                constructor.IsValueType = false;
                constructor.IsPrimitive = false;
                constructor.IsNullable = false;
                constructor.ArrayType = Array;
                constructor.prototype.FullName = null;
                constructor.prototype.CustomAttributes = null;
                constructor.prototype.TypeInstance = null;
                constructor.prototype.Hash = 0;
                constructor.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                RuntimeTypeHandle.CustomAttributes = [  ];
                RuntimeTypeHandle.FullName = "System.RuntimeTypeHandle";
                RuntimeTypeHandle.Interfaces = [  ];
                RuntimeTypeHandle.IsInst = function (t) { return t instanceof RuntimeTypeHandle ? t : null; };
                RuntimeTypeHandle.IsValueType = true;
                RuntimeTypeHandle.IsPrimitive = false;
                RuntimeTypeHandle.IsNullable = false;
                RuntimeTypeHandle.ArrayType = Array;
                RuntimeTypeHandle.prototype.value = null;
                RuntimeTypeHandle.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            RuntimeTypeHandle.prototype = {
                
            };
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
                SByte.CustomAttributes = [  ];
                SByte.FullName = "System.SByte";
                SByte.Interfaces = [  ];
                SByte.IsInst = function (t) { return typeof t == 'number'; };
                SByte.IsValueType = true;
                SByte.IsPrimitive = true;
                SByte.IsNullable = false;
                SByte.ArrayType = Int8Array;
                SByte.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600006a;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            SByte.prototype = {
                
            };
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
                Single.CustomAttributes = [  ];
                Single.FullName = "System.Single";
                Single.Interfaces = [  ];
                Single.IsInst = function (t) { return typeof t == 'number'; };
                Single.IsValueType = true;
                Single.IsPrimitive = true;
                Single.IsNullable = false;
                Single.ArrayType = Float32Array;
                Single.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600006b;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            Single.prototype = {
                
            };
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
                OutAttribute.CustomAttributes = [  ];
                OutAttribute.FullName = "System.Runtime.InteropServices.OutAttribute";
                OutAttribute.Interfaces = [  ];
                OutAttribute.IsInst = function (t) { return t instanceof OutAttribute ? t : null; };
                OutAttribute.IsValueType = false;
                OutAttribute.IsPrimitive = false;
                OutAttribute.IsNullable = false;
                OutAttribute.ArrayType = Array;
                OutAttribute.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                IEnumerator.CustomAttributes = [  ];
                IEnumerator.FullName = "System.Collections.IEnumerator";
                IEnumerator.Interfaces = [ ((asm0)["System.IDisposable"])() ];
                IEnumerator.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerator) != -1 ? t : null; };
                IEnumerator.IsValueType = false;
                IEnumerator.IsPrimitive = false;
                IEnumerator.IsNullable = false;
                IEnumerator.ArrayType = Array;
                IEnumerator.prototype.vtable = {
                    'asm0.x600006d': function ()
                    {
                        return asm0.x600006d;
                    },
                    'asm0.x600006e': function ()
                    {
                        return asm0.x600006e;
                    },
                    'asm0.x600006f': function ()
                    {
                        return asm0.x600006f;
                    }
                };
            };
            IEnumerator.prototype = {
                
            };
            return c;
        };
    })();
    (asm)["System.Collections.Generic.IEnumerator`1"] = (function ()
    {
        var ct;
        ct = {
            
        };
        return function (T)
        {
            var c;
            var initialized;
            c = tree_get([ T ],ct);
            
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
            tree_set([ T ],ct,c);
            IEnumerator_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IEnumerator_1.CustomAttributes = [  ];
                IEnumerator_1.FullName = "System.Collections.Generic.IEnumerator`1";
                IEnumerator_1.Interfaces = [ ((asm0)["System.Collections.IEnumerator"])(),((asm0)["System.IDisposable"])() ];
                IEnumerator_1.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerator_1) != -1 ? t : null; };
                IEnumerator_1.IsValueType = false;
                IEnumerator_1.IsPrimitive = false;
                IEnumerator_1.IsNullable = false;
                IEnumerator_1.ArrayType = Array;
                IEnumerator_1.GenericArguments = [ T ];
                IEnumerator_1.prototype.vtable = {
                    'asm0.x6000070': function ()
                    {
                        return asm0.x6000070;
                    }
                };
            };
            IEnumerator_1.prototype = {
                
            };
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
                IEnumerable.CustomAttributes = [  ];
                IEnumerable.FullName = "System.Collections.IEnumerable";
                IEnumerable.Interfaces = [  ];
                IEnumerable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerable) != -1 ? t : null; };
                IEnumerable.IsValueType = false;
                IEnumerable.IsPrimitive = false;
                IEnumerable.IsNullable = false;
                IEnumerable.ArrayType = Array;
                IEnumerable.prototype.vtable = {
                    'asm0.x6000071': function ()
                    {
                        return asm0.x6000071;
                    }
                };
            };
            IEnumerable.prototype = {
                
            };
            return c;
        };
    })();
    (asm)["System.Collections.Generic.IEnumerable`1"] = (function ()
    {
        var ct;
        ct = {
            
        };
        return function (T)
        {
            var c;
            var initialized;
            c = tree_get([ T ],ct);
            
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
            tree_set([ T ],ct,c);
            IEnumerable_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IEnumerable_1.CustomAttributes = [  ];
                IEnumerable_1.FullName = "System.Collections.Generic.IEnumerable`1";
                IEnumerable_1.Interfaces = [ ((asm0)["System.Collections.IEnumerable"])() ];
                IEnumerable_1.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerable_1) != -1 ? t : null; };
                IEnumerable_1.IsValueType = false;
                IEnumerable_1.IsPrimitive = false;
                IEnumerable_1.IsNullable = false;
                IEnumerable_1.ArrayType = Array;
                IEnumerable_1.GenericArguments = [ T ];
                IEnumerable_1.prototype.vtable = {
                    'asm0.x6000072': function ()
                    {
                        return asm0.x6000072;
                    }
                };
            };
            IEnumerable_1.prototype = {
                
            };
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
                Debugger.CustomAttributes = [  ];
                Debugger.FullName = "System.Diagnostics.Debugger";
                Debugger.Interfaces = [  ];
                Debugger.IsInst = function (t) { return t instanceof Debugger ? t : null; };
                Debugger.IsValueType = false;
                Debugger.IsPrimitive = false;
                Debugger.IsNullable = false;
                Debugger.ArrayType = Array;
                Debugger.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                NotImplementedException.CustomAttributes = [  ];
                NotImplementedException.FullName = "System.NotImplementedException";
                NotImplementedException.Interfaces = [  ];
                NotImplementedException.IsInst = function (t) { return t instanceof NotImplementedException ? t : null; };
                NotImplementedException.IsValueType = false;
                NotImplementedException.IsPrimitive = false;
                NotImplementedException.IsNullable = false;
                NotImplementedException.ArrayType = Array;
                NotImplementedException.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600001f;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                NotSupportedException.CustomAttributes = [  ];
                NotSupportedException.FullName = "System.NotSupportedException";
                NotSupportedException.Interfaces = [  ];
                NotSupportedException.IsInst = function (t) { return t instanceof NotSupportedException ? t : null; };
                NotSupportedException.IsValueType = false;
                NotSupportedException.IsPrimitive = false;
                NotSupportedException.IsNullable = false;
                NotSupportedException.ArrayType = Array;
                NotSupportedException.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600001f;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                Math.CustomAttributes = [  ];
                Math.FullName = "System.Math";
                Math.Interfaces = [  ];
                Math.IsInst = function (t) { return t instanceof Math ? t : null; };
                Math.IsValueType = false;
                Math.IsPrimitive = false;
                Math.IsNullable = false;
                Math.ArrayType = Array;
                Math.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                InvalidCastException.CustomAttributes = [  ];
                InvalidCastException.FullName = "System.InvalidCastException";
                InvalidCastException.Interfaces = [  ];
                InvalidCastException.IsInst = function (t) { return t instanceof InvalidCastException ? t : null; };
                InvalidCastException.IsValueType = false;
                InvalidCastException.IsPrimitive = false;
                InvalidCastException.IsNullable = false;
                InvalidCastException.ArrayType = Array;
                InvalidCastException.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600001f;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                InvalidOperationException.CustomAttributes = [  ];
                InvalidOperationException.FullName = "System.InvalidOperationException";
                InvalidOperationException.Interfaces = [  ];
                InvalidOperationException.IsInst = function (t) { return t instanceof InvalidOperationException ? t : null; };
                InvalidOperationException.IsValueType = false;
                InvalidOperationException.IsPrimitive = false;
                InvalidOperationException.IsNullable = false;
                InvalidOperationException.ArrayType = Array;
                InvalidOperationException.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600001f;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                Int64.CustomAttributes = [  ];
                Int64.FullName = "System.Int64";
                Int64.Interfaces = [  ];
                Int64.IsInst = function (t) { return typeof t == 'number'; };
                Int64.IsValueType = true;
                Int64.IsPrimitive = true;
                Int64.IsNullable = false;
                Int64.ArrayType = Array;
                Int64.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600007f;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000080;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000081;
                    }
                };
            };
            Int64.prototype = {
                
            };
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
                $$Number.CustomAttributes = [ [ ((asm0)["Braille.Runtime.TranslatorServices.JsNoCopyAttribute"])(),asm0.x6000034,[  ],{
                    
                } ] ];
                $$Number.FullName = "Braille.JavaScript.Number";
                $$Number.Interfaces = [  ];
                $$Number.IsInst = function (t) { return t instanceof $$Number ? t : null; };
                $$Number.IsValueType = true;
                $$Number.IsPrimitive = false;
                $$Number.IsNullable = false;
                $$Number.ArrayType = Array;
                $$Number.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            $$Number.prototype = {
                
            };
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
                ExtensionAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x6000022,[ (64|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),true ]
                } ] ];
                ExtensionAttribute.FullName = "System.Runtime.CompilerServices.ExtensionAttribute";
                ExtensionAttribute.Interfaces = [  ];
                ExtensionAttribute.IsInst = function (t) { return t instanceof ExtensionAttribute ? t : null; };
                ExtensionAttribute.IsValueType = false;
                ExtensionAttribute.IsPrimitive = false;
                ExtensionAttribute.IsNullable = false;
                ExtensionAttribute.ArrayType = Array;
                ExtensionAttribute.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                IndexerNameAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x6000022,[ (128|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),true ]
                } ] ];
                IndexerNameAttribute.FullName = "System.Runtime.CompilerServices.IndexerNameAttribute";
                IndexerNameAttribute.Interfaces = [  ];
                IndexerNameAttribute.IsInst = function (t) { return t instanceof IndexerNameAttribute ? t : null; };
                IndexerNameAttribute.IsValueType = false;
                IndexerNameAttribute.IsPrimitive = false;
                IndexerNameAttribute.IsNullable = false;
                IndexerNameAttribute.ArrayType = Array;
                IndexerNameAttribute.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                RuntimeHelpers.CustomAttributes = [  ];
                RuntimeHelpers.FullName = "System.Runtime.CompilerServices.RuntimeHelpers";
                RuntimeHelpers.Interfaces = [  ];
                RuntimeHelpers.IsInst = function (t) { return t instanceof RuntimeHelpers ? t : null; };
                RuntimeHelpers.IsValueType = false;
                RuntimeHelpers.IsPrimitive = false;
                RuntimeHelpers.IsNullable = false;
                RuntimeHelpers.ArrayType = Array;
                RuntimeHelpers.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                EventArgs.CustomAttributes = [  ];
                EventArgs.FullName = "System.EventArgs";
                EventArgs.Interfaces = [  ];
                EventArgs.IsInst = function (t) { return t instanceof EventArgs ? t : null; };
                EventArgs.IsValueType = false;
                EventArgs.IsPrimitive = false;
                EventArgs.IsNullable = false;
                EventArgs.ArrayType = Array;
                (asm0.x60000a5)();
                EventArgs.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                EventHandler.CustomAttributes = [  ];
                EventHandler.FullName = "System.EventHandler";
                EventHandler.Interfaces = [  ];
                EventHandler.IsInst = function (t) { return t instanceof EventHandler ? t : null; };
                EventHandler.IsValueType = false;
                EventHandler.IsPrimitive = false;
                EventHandler.IsNullable = false;
                EventHandler.ArrayType = Array;
                EventHandler.prototype._invocationList = null;
                EventHandler.prototype._methodPtr = null;
                EventHandler.prototype._target = null;
                EventHandler.prototype.vtable = {
                    'asm0.x60000a7': function ()
                    {
                        return asm0.x60000a7;
                    },
                    'asm0.x6000041': function ()
                    {
                        return asm0.x6000048;
                    },
                    'asm0.x6000040': function ()
                    {
                        return asm0.x6000049;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000042;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000045;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
            };
            EventHandler.prototype = {
                
            };
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
                Array.CustomAttributes = [  ];
                Array.FullName = "System.Array";
                Array.Interfaces = [ ((asm0)["System.Collections.IEnumerable"])() ];
                Array.IsInst = function (t) { return t instanceof Array ? t : null; };
                Array.IsValueType = false;
                Array.IsPrimitive = false;
                Array.IsNullable = false;
                Array.ArrayType = Array;
                Array.prototype.type = null;
                Array.prototype.jsarr = null;
                Array.prototype.vtable = {
                    'asm0.x60000ac': function ()
                    {
                        return asm0.x60000ac;
                    },
                    'asm0.x60000ad': function ()
                    {
                        return asm0.x60000ad;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                (Array.prototype)[((asm0)["System.Collections.IEnumerable"])()] = {
                    'x6000071': function ()
                    {
                        return asm0.x60000ac;
                    }
                };
            };
            Array.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.Array`1"] = (function ()
    {
        var ct;
        ct = {
            
        };
        return function (T)
        {
            var c;
            var initialized;
            c = tree_get([ T ],ct);
            
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
            tree_set([ T ],ct,c);
            Array_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Array_1.CustomAttributes = [  ];
                Array_1.FullName = "System.Array`1";
                Array_1.Interfaces = [ ((asm0)["System.Collections.Generic.IEnumerable`1"])(T),((asm0)["System.Collections.IEnumerable"])() ];
                Array_1.IsInst = function (t) { return t instanceof asm0['System.Array']() && t.type.prototype instanceof T ? t : null; };
                Array_1.IsValueType = false;
                Array_1.IsPrimitive = false;
                Array_1.IsNullable = false;
                Array_1.ArrayType = Array;
                Array_1.GenericArguments = [ T ];
                Array_1.prototype.type = null;
                Array_1.prototype.jsarr = null;
                Array_1.prototype.vtable = {
                    'asm0.x60000b0': function ()
                    {
                        return asm0.x60000b0;
                    },
                    'asm0.x60000ad': function ()
                    {
                        return asm0.x60000b1;
                    },
                    'asm0.x60000ac': function ()
                    {
                        return asm0.x60000ac;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                (Array_1.prototype)[((asm0)["System.Collections.Generic.IEnumerable`1"])(T)] = {
                    'x6000072': function ()
                    {
                        return asm0.x60000b0;
                    }
                };
                (Array_1.prototype)[((asm0)["System.Collections.IEnumerable"])()] = {
                    'x6000071': function ()
                    {
                        return asm0.x60000ac;
                    }
                };
            };
            Array_1.prototype = new (((asm0)["System.Array"])())();
            return c;
        };
    })();
    (asm)["System.Array`1+ArrayEnumerator"] = (function ()
    {
        var ct;
        ct = {
            
        };
        return function (T)
        {
            var c;
            var initialized;
            c = tree_get([ T ],ct);
            
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
            tree_set([ T ],ct,c);
            ArrayEnumerator.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                ArrayEnumerator.CustomAttributes = [  ];
                ArrayEnumerator.FullName = "System.Array`1+ArrayEnumerator";
                ArrayEnumerator.Interfaces = [ ((asm0)["System.Collections.Generic.IEnumerator`1"])(T),((asm0)["System.Collections.IEnumerator"])(),((asm0)["System.IDisposable"])() ];
                ArrayEnumerator.IsInst = function (t) { return t instanceof ArrayEnumerator ? t : null; };
                ArrayEnumerator.IsValueType = false;
                ArrayEnumerator.IsPrimitive = false;
                ArrayEnumerator.IsNullable = false;
                ArrayEnumerator.ArrayType = Array;
                ArrayEnumerator.GenericArguments = [ T ];
                ArrayEnumerator.prototype.index = 0;
                ArrayEnumerator.prototype.length = 0;
                ArrayEnumerator.prototype.source = null;
                ArrayEnumerator.prototype.vtable = {
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
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
                (ArrayEnumerator.prototype)[((asm0)["System.Collections.Generic.IEnumerator`1"])(T)] = {
                    'x6000070': function ()
                    {
                        return asm0.x60000b4;
                    }
                };
                (ArrayEnumerator.prototype)[((asm0)["System.Collections.IEnumerator"])()] = {
                    'x600006d': function ()
                    {
                        return asm0.x60000b6;
                    },
                    'x600006e': function ()
                    {
                        return asm0.x60000b5;
                    },
                    'x600006f': function ()
                    {
                        return asm0.x60000b7;
                    }
                };
                (ArrayEnumerator.prototype)[((asm0)["System.IDisposable"])()] = {
                    'x600004e': function ()
                    {
                        return asm0.x60000b8;
                    }
                };
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
                DebuggerStepThroughAttribute.CustomAttributes = [ [ ((asm0)["System.ComVisibleAttribute"])(),asm0.x60000ba,[ true ],{
                    
                } ],[ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x6000022,[ (108|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),false ]
                } ] ];
                DebuggerStepThroughAttribute.FullName = "System.Diagnostics.DebuggerStepThroughAttribute";
                DebuggerStepThroughAttribute.Interfaces = [  ];
                DebuggerStepThroughAttribute.IsInst = function (t) { return t instanceof DebuggerStepThroughAttribute ? t : null; };
                DebuggerStepThroughAttribute.IsValueType = false;
                DebuggerStepThroughAttribute.IsPrimitive = false;
                DebuggerStepThroughAttribute.IsNullable = false;
                DebuggerStepThroughAttribute.ArrayType = Array;
                DebuggerStepThroughAttribute.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                AttributeTargets.CustomAttributes = [ [ ((asm0)["System.FlagsAttribute"])(),asm0.x600003d,[  ],{
                    
                } ] ];
                AttributeTargets.FullName = "System.AttributeTargets";
                AttributeTargets.Interfaces = [  ];
                AttributeTargets.IsInst = function (t) { return t instanceof AttributeTargets ? t : null; };
                AttributeTargets.IsValueType = true;
                AttributeTargets.IsPrimitive = false;
                AttributeTargets.IsNullable = false;
                AttributeTargets.ArrayType = Array;
                AttributeTargets.prototype.value__ = 0;
                AttributeTargets.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            AttributeTargets.prototype = new (((asm0)["System.Enum"])())();
            return c;
        };
    })();
    (asm)["System.ComVisibleAttribute"] = (function ()
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
            function ComVisibleAttribute()
            {
                (ComVisibleAttribute.init)();
                this.constructor = ComVisibleAttribute;
            };
            c = ComVisibleAttribute;
            ct = c;
            ComVisibleAttribute.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                ComVisibleAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x6000022,[ (1044|0) ],{
                    
                } ] ];
                ComVisibleAttribute.FullName = "System.ComVisibleAttribute";
                ComVisibleAttribute.Interfaces = [  ];
                ComVisibleAttribute.IsInst = function (t) { return t instanceof ComVisibleAttribute ? t : null; };
                ComVisibleAttribute.IsValueType = false;
                ComVisibleAttribute.IsPrimitive = false;
                ComVisibleAttribute.IsNullable = false;
                ComVisibleAttribute.ArrayType = Array;
                ComVisibleAttribute.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            ComVisibleAttribute.prototype = new (((asm0)["System.Attribute"])())();
            return c;
        };
    })();
    (asm)["System.Nullable`1"] = (function ()
    {
        var ct;
        ct = {
            
        };
        return function (T)
        {
            var c;
            var initialized;
            c = tree_get([ T ],ct);
            
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
            tree_set([ T ],ct,c);
            Nullable_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Nullable_1.CustomAttributes = [ [ ((asm0)["System.Diagnostics.DebuggerStepThroughAttribute"])(),asm0.x60000b9,[  ],{
                    
                } ] ];
                Nullable_1.FullName = "System.Nullable`1";
                Nullable_1.Interfaces = [  ];
                Nullable_1.IsInst = function (t) { return t instanceof Nullable_1 ? t : null; };
                Nullable_1.IsValueType = true;
                Nullable_1.IsPrimitive = false;
                Nullable_1.IsNullable = true;
                Nullable_1.ArrayType = Array;
                Nullable_1.GenericArguments = [ T ];
                Nullable_1.prototype.value = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
                Nullable_1.prototype.has_value = false;
                Nullable_1.prototype.vtable = {
                    'asm0.x6000009': function ()
                    {
                        return asm0.x60000be;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x60000c0;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000c3;
                    }
                };
            };
            Nullable_1.prototype = {
                
            };
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
                SerializableAttribute.CustomAttributes = [ [ ((asm0)["System.ComVisibleAttribute"])(),asm0.x60000ba,[ true ],{
                    
                } ],[ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x6000022,[ (4124|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),false ]
                } ] ];
                SerializableAttribute.FullName = "System.SerializableAttribute";
                SerializableAttribute.Interfaces = [  ];
                SerializableAttribute.IsInst = function (t) { return t instanceof SerializableAttribute ? t : null; };
                SerializableAttribute.IsValueType = false;
                SerializableAttribute.IsPrimitive = false;
                SerializableAttribute.IsNullable = false;
                SerializableAttribute.ArrayType = Array;
                SerializableAttribute.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                $$String.CustomAttributes = [ [ ((asm0)["System.Reflection.DefaultMemberAttribute"])(),asm0.x60000dd,[ new_string("Chars") ],{
                    
                } ] ];
                $$String.FullName = "System.String";
                $$String.Interfaces = [  ];
                $$String.IsInst = function (t) { return t instanceof $$String ? t : null; };
                $$String.IsValueType = false;
                $$String.IsPrimitive = false;
                $$String.IsNullable = false;
                $$String.ArrayType = Array;
                (asm0.x60000dc)();
                $$String.prototype.jsstr = null;
                $$String.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000d4;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x60000d8;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x60000da;
                    }
                };
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
                DefaultMemberAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x6000022,[ (1036|0) ],{
                    
                } ] ];
                DefaultMemberAttribute.FullName = "System.Reflection.DefaultMemberAttribute";
                DefaultMemberAttribute.Interfaces = [  ];
                DefaultMemberAttribute.IsInst = function (t) { return t instanceof DefaultMemberAttribute ? t : null; };
                DefaultMemberAttribute.IsValueType = false;
                DefaultMemberAttribute.IsPrimitive = false;
                DefaultMemberAttribute.IsNullable = false;
                DefaultMemberAttribute.ArrayType = Array;
                DefaultMemberAttribute.prototype.System_ReflectionDefaultMemberAttributemember_name = null;
                DefaultMemberAttribute.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                UInt16.CustomAttributes = [  ];
                UInt16.FullName = "System.UInt16";
                UInt16.Interfaces = [  ];
                UInt16.IsInst = function (t) { return typeof t == 'number'; };
                UInt16.IsValueType = true;
                UInt16.IsPrimitive = true;
                UInt16.IsNullable = false;
                UInt16.ArrayType = Uint16Array;
                UInt16.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000e0;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            UInt16.prototype = {
                
            };
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
                UInt32.CustomAttributes = [  ];
                UInt32.FullName = "System.UInt32";
                UInt32.Interfaces = [  ];
                UInt32.IsInst = function (t) { return typeof t == 'number'; };
                UInt32.IsValueType = true;
                UInt32.IsPrimitive = true;
                UInt32.IsNullable = false;
                UInt32.ArrayType = Uint32Array;
                UInt32.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000e1;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            UInt32.prototype = {
                
            };
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
                UInt64.MaxValue = 0;
                UInt64.CustomAttributes = [  ];
                UInt64.FullName = "System.UInt64";
                UInt64.Interfaces = [  ];
                UInt64.IsInst = function (t) { return typeof t == 'number'; };
                UInt64.IsValueType = true;
                UInt64.IsPrimitive = true;
                UInt64.IsNullable = false;
                UInt64.ArrayType = Array;
                UInt64.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000e2;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x60000ec;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x60000ed;
                    }
                };
            };
            UInt64.prototype = {
                
            };
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
                UIntPtr.CustomAttributes = [  ];
                UIntPtr.FullName = "System.UIntPtr";
                UIntPtr.Interfaces = [  ];
                UIntPtr.IsInst = function (t) { return typeof t == 'number'; };
                UIntPtr.IsValueType = true;
                UIntPtr.IsPrimitive = true;
                UIntPtr.IsNullable = false;
                UIntPtr.ArrayType = Array;
                UIntPtr.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000ef;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            UIntPtr.prototype = {
                
            };
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
                Void.CustomAttributes = [  ];
                Void.FullName = "System.Void";
                Void.Interfaces = [  ];
                Void.IsInst = function (t) { return t instanceof Void ? t : null; };
                Void.IsValueType = true;
                Void.IsPrimitive = false;
                Void.IsNullable = false;
                Void.ArrayType = Array;
                Void.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            Void.prototype = {
                
            };
            return c;
        };
    })();
})(asm0 || (asm0 = {}));
var asm1; (function (asm)
{
    
    asm.next_hash = 1;

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

    function box(v, type) {
        if (v === null)
            return v;
    
        if (type.IsNullable) {
            if (v.has_value)
                return box(v.value, type.GenericArguments[0]);
            else
                return null;
        }

        if (!type.IsValueType)
            return v;
    
        return {
            'boxed': v,
            'type': type,
            'vtable': type.prototype.vtable
        };
    }

    function unbox(o, type) {
        return cast_class(o.boxed, type);
    }

    function unbox_any(o, type) {
        if (type.IsNullable) {
            var result = new type();
            if (o !== null) {
                result.value = cast_class(o.boxed, type.GenericArguments[0]);
                result.has_value = true;
            }
            return result;
        }
    
        if (type.IsValueType)
            return cast_class(o.boxed, type);
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

    function new_string(str) {
        var r = new (asm0['System.String']())();
        r.jsstr = str;
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
        r.type = type;
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
        if (type.IsInst(obj) || (!type.IsValueType && obj === null))
            return obj;
        else {
            var t = asm0['System.InvalidCastException']();
            throw new t();
        }
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
    asm.x6000001 = braille_test_log;;
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x600000c_init = function ()
    {
        (((asm0)["System.Int64"])().init)();
        (((asm0)["System.Double"])().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        (asm.x600000c_init.apply)(this,arguments);
        return (asm.x600000c.apply)(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var t1;
        t0 = ((asm0)["System.Int64"])();
        t1 = ((asm0)["System.Double"])();
        /* IL_00: ldstr 1 - 21 ToString*/
        /* IL_05: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("1 - 21 ToString"));
        /* IL_0A: ldc.i4.1 */
        /* IL_0B: conv.i8 */
        /* IL_0C: box System.Int64*/
        /* IL_11: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_16: ldc.i4.2 */
        /* IL_17: conv.i8 */
        /* IL_18: box System.Int64*/
        /* IL_1D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((2|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_22: ldc.i4.3 */
        /* IL_23: conv.i8 */
        /* IL_24: box System.Int64*/
        /* IL_29: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((3|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2E: ldc.i4.4 */
        /* IL_2F: conv.i8 */
        /* IL_30: box System.Int64*/
        /* IL_35: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((4|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_3A: ldc.i4.5 */
        /* IL_3B: conv.i8 */
        /* IL_3C: box System.Int64*/
        /* IL_41: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((5|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_46: ldc.i4.6 */
        /* IL_47: conv.i8 */
        /* IL_48: box System.Int64*/
        /* IL_4D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((6|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_52: ldc.i4.7 */
        /* IL_53: conv.i8 */
        /* IL_54: box System.Int64*/
        /* IL_59: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((7|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_5E: ldc.i4.8 */
        /* IL_5F: conv.i8 */
        /* IL_60: box System.Int64*/
        /* IL_65: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((8|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_6A: ldc.i4.s 9*/
        /* IL_6C: conv.i8 */
        /* IL_6D: box System.Int64*/
        /* IL_72: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((9|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_77: ldc.i4.s 10*/
        /* IL_79: conv.i8 */
        /* IL_7A: box System.Int64*/
        /* IL_7F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((10|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_84: ldc.i4.s 11*/
        /* IL_86: conv.i8 */
        /* IL_87: box System.Int64*/
        /* IL_8C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((11|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_91: ldc.i4.s 12*/
        /* IL_93: conv.i8 */
        /* IL_94: box System.Int64*/
        /* IL_99: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((12|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_9E: ldc.i4.s 13*/
        /* IL_A0: conv.i8 */
        /* IL_A1: box System.Int64*/
        /* IL_A6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((13|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_AB: ldc.i4.s 14*/
        /* IL_AD: conv.i8 */
        /* IL_AE: box System.Int64*/
        /* IL_B3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((14|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_B8: ldc.i4.s 15*/
        /* IL_BA: conv.i8 */
        /* IL_BB: box System.Int64*/
        /* IL_C0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((15|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C5: ldc.i4.s 16*/
        /* IL_C7: conv.i8 */
        /* IL_C8: box System.Int64*/
        /* IL_CD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((16|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D2: ldc.i4.s 17*/
        /* IL_D4: conv.i8 */
        /* IL_D5: box System.Int64*/
        /* IL_DA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((17|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_DF: ldc.i4.s 18*/
        /* IL_E1: conv.i8 */
        /* IL_E2: box System.Int64*/
        /* IL_E7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((18|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_EC: ldc.i4.s 19*/
        /* IL_EE: conv.i8 */
        /* IL_EF: box System.Int64*/
        /* IL_F4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((19|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_F9: ldc.i4.s 20*/
        /* IL_FB: conv.i8 */
        /* IL_FC: box System.Int64*/
        /* IL_101: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((20|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_106: ldc.i4.s 21*/
        /* IL_108: conv.i8 */
        /* IL_109: box System.Int64*/
        /* IL_10E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((21|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_113: ldstr (long)0xf, (long)0xff ... (long)0xffffffffff*/
        /* IL_118: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("(long)0xf, (long)0xff ... (long)0xffffffffff"));
        /* IL_11D: ldc.i4.s 15*/
        /* IL_11F: conv.i8 */
        /* IL_120: box System.Int64*/
        /* IL_125: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((15|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_12A: ldc.i4 255*/
        /* IL_12F: conv.i8 */
        /* IL_130: box System.Int64*/
        /* IL_135: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((255|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_13A: ldc.i4 4095*/
        /* IL_13F: conv.i8 */
        /* IL_140: box System.Int64*/
        /* IL_145: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((4095|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_14A: ldc.i4 65535*/
        /* IL_14F: conv.i8 */
        /* IL_150: box System.Int64*/
        /* IL_155: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((65535|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_15A: ldc.i4 1048575*/
        /* IL_15F: conv.i8 */
        /* IL_160: box System.Int64*/
        /* IL_165: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((1048575|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_16A: ldc.i4 16777215*/
        /* IL_16F: conv.i8 */
        /* IL_170: box System.Int64*/
        /* IL_175: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((16777215|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_17A: ldc.i4 268435455*/
        /* IL_17F: conv.i8 */
        /* IL_180: box System.Int64*/
        /* IL_185: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((268435455|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_18A: ldc.i4.m1 */
        /* IL_18B: conv.u8 */
        /* IL_18C: box System.Int64*/
        /* IL_191: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_u8((-1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_196: ldc.i8 68719476735*/
        /* IL_19F: box System.Int64*/
        /* IL_1A4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0xFFFFFFFF,0xF ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1A9: ldc.i8 1099511627775*/
        /* IL_1B2: box System.Int64*/
        /* IL_1B7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0xFFFFFFFF,0xFF ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1BC: ldc.i8 17592186044415*/
        /* IL_1C5: box System.Int64*/
        /* IL_1CA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0xFFFFFFFF,0xFFF ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1CF: ldc.i8 281474976710655*/
        /* IL_1D8: box System.Int64*/
        /* IL_1DD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1E2: ldc.i8 4503599627370495*/
        /* IL_1EB: box System.Int64*/
        /* IL_1F0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1F5: ldc.i8 72057594037927935*/
        /* IL_1FE: box System.Int64*/
        /* IL_203: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_208: ldstr (long)0x01, (long)0x0101 ... (long)0x01010101010101*/
        /* IL_20D: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("(long)0x01, (long)0x0101 ... (long)0x01010101010101"));
        /* IL_212: ldc.i4.0 */
        /* IL_213: conv.i8 */
        /* IL_214: box System.Int64*/
        /* IL_219: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((0|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_21E: ldc.i4.1 */
        /* IL_21F: conv.i8 */
        /* IL_220: box System.Int64*/
        /* IL_225: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_22A: ldc.i4.s 16*/
        /* IL_22C: conv.i8 */
        /* IL_22D: box System.Int64*/
        /* IL_232: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((16|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_237: ldc.i4 257*/
        /* IL_23C: conv.i8 */
        /* IL_23D: box System.Int64*/
        /* IL_242: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((257|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_247: ldc.i4 4112*/
        /* IL_24C: conv.i8 */
        /* IL_24D: box System.Int64*/
        /* IL_252: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((4112|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_257: ldc.i4 65793*/
        /* IL_25C: conv.i8 */
        /* IL_25D: box System.Int64*/
        /* IL_262: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((65793|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_267: ldc.i4 1052688*/
        /* IL_26C: conv.i8 */
        /* IL_26D: box System.Int64*/
        /* IL_272: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((1052688|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_277: ldc.i4 16843009*/
        /* IL_27C: conv.i8 */
        /* IL_27D: box System.Int64*/
        /* IL_282: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((16843009|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_287: ldc.i4 269488144*/
        /* IL_28C: conv.i8 */
        /* IL_28D: box System.Int64*/
        /* IL_292: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((269488144|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_297: ldc.i8 4311810305*/
        /* IL_2A0: box System.Int64*/
        /* IL_2A5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0x1010101,0x1 ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2AA: ldc.i8 68988964880*/
        /* IL_2B3: box System.Int64*/
        /* IL_2B8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0x10101010,0x10 ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2BD: ldc.i8 1103823438081*/
        /* IL_2C6: box System.Int64*/
        /* IL_2CB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0x1010101,0x101 ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2D0: ldc.i8 17661175009296*/
        /* IL_2D9: box System.Int64*/
        /* IL_2DE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0x10101010,0x1010 ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2E3: ldc.i8 282578800148737*/
        /* IL_2EC: box System.Int64*/
        /* IL_2F1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0x1010101,0x10101 ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2F6: ldstr Add 1*/
        /* IL_2FB: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Add 1"));
        /* IL_300: ldc.i4.s 15*/
        /* IL_302: conv.i8 */
        /* IL_303: ldc.i4.1 */
        /* IL_304: conv.i8 */
        /* IL_305: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_30A: box System.Int64*/
        /* IL_30F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((15|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_314: ldc.i4 255*/
        /* IL_319: conv.i8 */
        /* IL_31A: ldc.i4.1 */
        /* IL_31B: conv.i8 */
        /* IL_31C: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_321: box System.Int64*/
        /* IL_326: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_32B: ldc.i4 4095*/
        /* IL_330: conv.i8 */
        /* IL_331: ldc.i4.1 */
        /* IL_332: conv.i8 */
        /* IL_333: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_338: box System.Int64*/
        /* IL_33D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((4095|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_342: ldc.i4 65535*/
        /* IL_347: conv.i8 */
        /* IL_348: ldc.i4.1 */
        /* IL_349: conv.i8 */
        /* IL_34A: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_34F: box System.Int64*/
        /* IL_354: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((65535|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_359: ldc.i4 1048575*/
        /* IL_35E: conv.i8 */
        /* IL_35F: ldc.i4.1 */
        /* IL_360: conv.i8 */
        /* IL_361: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_366: box System.Int64*/
        /* IL_36B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((1048575|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_370: ldc.i4 16777215*/
        /* IL_375: conv.i8 */
        /* IL_376: ldc.i4.1 */
        /* IL_377: conv.i8 */
        /* IL_378: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_37D: box System.Int64*/
        /* IL_382: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((16777215|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_387: ldc.i4 268435455*/
        /* IL_38C: conv.i8 */
        /* IL_38D: ldc.i4.1 */
        /* IL_38E: conv.i8 */
        /* IL_38F: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_394: box System.Int64*/
        /* IL_399: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((268435455|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_39E: ldc.i4.m1 */
        /* IL_39F: conv.u8 */
        /* IL_3A0: ldc.i4.1 */
        /* IL_3A1: conv.i8 */
        /* IL_3A2: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_3A7: box System.Int64*/
        /* IL_3AC: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_u8((-1|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_3B1: ldc.i8 68719476735*/
        /* IL_3BA: ldc.i4.1 */
        /* IL_3BB: conv.i8 */
        /* IL_3BC: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_3C1: box System.Int64*/
        /* IL_3C6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_3CB: ldc.i8 1099511627775*/
        /* IL_3D4: ldc.i4.1 */
        /* IL_3D5: conv.i8 */
        /* IL_3D6: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_3DB: box System.Int64*/
        /* IL_3E0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_3E5: ldc.i8 17592186044415*/
        /* IL_3EE: ldc.i4.1 */
        /* IL_3EF: conv.i8 */
        /* IL_3F0: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_3F5: box System.Int64*/
        /* IL_3FA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_3FF: ldc.i8 281474976710655*/
        /* IL_408: ldc.i4.1 */
        /* IL_409: conv.i8 */
        /* IL_40A: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_40F: box System.Int64*/
        /* IL_414: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_419: ldc.i8 4503599627370495*/
        /* IL_422: ldc.i4.1 */
        /* IL_423: conv.i8 */
        /* IL_424: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_429: box System.Int64*/
        /* IL_42E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_433: ldc.i8 72057594037927935*/
        /* IL_43C: ldc.i4.1 */
        /* IL_43D: conv.i8 */
        /* IL_43E: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_443: box System.Int64*/
        /* IL_448: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_44D: ldstr Add 2*/
        /* IL_452: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Add 2"));
        /* IL_457: ldc.i4.s 15*/
        /* IL_459: conv.i8 */
        /* IL_45A: ldc.i4.2 */
        /* IL_45B: conv.i8 */
        /* IL_45C: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_461: box System.Int64*/
        /* IL_466: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((15|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_46B: ldc.i4 255*/
        /* IL_470: conv.i8 */
        /* IL_471: ldc.i4.2 */
        /* IL_472: conv.i8 */
        /* IL_473: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_478: box System.Int64*/
        /* IL_47D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((255|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_482: ldc.i4 4095*/
        /* IL_487: conv.i8 */
        /* IL_488: ldc.i4.2 */
        /* IL_489: conv.i8 */
        /* IL_48A: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_48F: box System.Int64*/
        /* IL_494: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((4095|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_499: ldc.i4 65535*/
        /* IL_49E: conv.i8 */
        /* IL_49F: ldc.i4.2 */
        /* IL_4A0: conv.i8 */
        /* IL_4A1: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_4A6: box System.Int64*/
        /* IL_4AB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((65535|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_4B0: ldc.i4 1048575*/
        /* IL_4B5: conv.i8 */
        /* IL_4B6: ldc.i4.2 */
        /* IL_4B7: conv.i8 */
        /* IL_4B8: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_4BD: box System.Int64*/
        /* IL_4C2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((1048575|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_4C7: ldc.i4 16777215*/
        /* IL_4CC: conv.i8 */
        /* IL_4CD: ldc.i4.2 */
        /* IL_4CE: conv.i8 */
        /* IL_4CF: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_4D4: box System.Int64*/
        /* IL_4D9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((16777215|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_4DE: ldc.i4 268435455*/
        /* IL_4E3: conv.i8 */
        /* IL_4E4: ldc.i4.2 */
        /* IL_4E5: conv.i8 */
        /* IL_4E6: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_4EB: box System.Int64*/
        /* IL_4F0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((268435455|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_4F5: ldc.i4.m1 */
        /* IL_4F6: conv.u8 */
        /* IL_4F7: ldc.i4.2 */
        /* IL_4F8: conv.i8 */
        /* IL_4F9: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_4FE: box System.Int64*/
        /* IL_503: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_u8((-1|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_508: ldc.i8 68719476735*/
        /* IL_511: ldc.i4.2 */
        /* IL_512: conv.i8 */
        /* IL_513: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_518: box System.Int64*/
        /* IL_51D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_522: ldc.i8 1099511627775*/
        /* IL_52B: ldc.i4.2 */
        /* IL_52C: conv.i8 */
        /* IL_52D: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_532: box System.Int64*/
        /* IL_537: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_53C: ldc.i8 17592186044415*/
        /* IL_545: ldc.i4.2 */
        /* IL_546: conv.i8 */
        /* IL_547: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_54C: box System.Int64*/
        /* IL_551: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_556: ldc.i8 281474976710655*/
        /* IL_55F: ldc.i4.2 */
        /* IL_560: conv.i8 */
        /* IL_561: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_566: box System.Int64*/
        /* IL_56B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_570: ldc.i8 4503599627370495*/
        /* IL_579: ldc.i4.2 */
        /* IL_57A: conv.i8 */
        /* IL_57B: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_580: box System.Int64*/
        /* IL_585: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_58A: ldc.i8 72057594037927935*/
        /* IL_593: ldc.i4.2 */
        /* IL_594: conv.i8 */
        /* IL_595: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_59A: box System.Int64*/
        /* IL_59F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_5A4: ldstr Add 0x1, 0x010, 0x0101 etc*/
        /* IL_5A9: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Add 0x1, 0x010, 0x0101 etc"));
        /* IL_5AE: ldc.i4.s 15*/
        /* IL_5B0: conv.i8 */
        /* IL_5B1: ldc.i4.0 */
        /* IL_5B2: conv.i8 */
        /* IL_5B3: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_5B8: box System.Int64*/
        /* IL_5BD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((15|0)),conv_i8((0|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_5C2: ldc.i4 255*/
        /* IL_5C7: conv.i8 */
        /* IL_5C8: ldc.i4.1 */
        /* IL_5C9: conv.i8 */
        /* IL_5CA: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_5CF: box System.Int64*/
        /* IL_5D4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_5D9: ldc.i4 4095*/
        /* IL_5DE: conv.i8 */
        /* IL_5DF: ldc.i4.s 16*/
        /* IL_5E1: conv.i8 */
        /* IL_5E2: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_5E7: box System.Int64*/
        /* IL_5EC: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((4095|0)),conv_i8((16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_5F1: ldc.i4 65535*/
        /* IL_5F6: conv.i8 */
        /* IL_5F7: ldc.i4 257*/
        /* IL_5FC: conv.i8 */
        /* IL_5FD: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_602: box System.Int64*/
        /* IL_607: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((65535|0)),conv_i8((257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_60C: ldc.i4 1048575*/
        /* IL_611: conv.i8 */
        /* IL_612: ldc.i4 4112*/
        /* IL_617: conv.i8 */
        /* IL_618: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_61D: box System.Int64*/
        /* IL_622: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((1048575|0)),conv_i8((4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_627: ldc.i4 16777215*/
        /* IL_62C: conv.i8 */
        /* IL_62D: ldc.i4 65793*/
        /* IL_632: conv.i8 */
        /* IL_633: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_638: box System.Int64*/
        /* IL_63D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((16777215|0)),conv_i8((65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_642: ldc.i4 268435455*/
        /* IL_647: conv.i8 */
        /* IL_648: ldc.i4 1052688*/
        /* IL_64D: conv.i8 */
        /* IL_64E: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_653: box System.Int64*/
        /* IL_658: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((268435455|0)),conv_i8((1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_65D: ldc.i4.m1 */
        /* IL_65E: conv.u8 */
        /* IL_65F: ldc.i4 16843009*/
        /* IL_664: conv.i8 */
        /* IL_665: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_66A: box System.Int64*/
        /* IL_66F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_u8((-1|0)),conv_i8((16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_674: ldc.i8 68719476735*/
        /* IL_67D: ldc.i4 269488144*/
        /* IL_682: conv.i8 */
        /* IL_683: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_688: box System.Int64*/
        /* IL_68D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_692: ldc.i8 1099511627775*/
        /* IL_69B: ldc.i8 4311810305*/
        /* IL_6A4: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_6A9: box System.Int64*/
        /* IL_6AE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0x1010101,0x1 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_6B3: ldc.i8 17592186044415*/
        /* IL_6BC: ldc.i8 68988964880*/
        /* IL_6C5: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_6CA: box System.Int64*/
        /* IL_6CF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0x10101010,0x10 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_6D4: ldc.i8 281474976710655*/
        /* IL_6DD: ldc.i8 1103823438081*/
        /* IL_6E6: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_6EB: box System.Int64*/
        /* IL_6F0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0x1010101,0x101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_6F5: ldc.i8 4503599627370495*/
        /* IL_6FE: ldc.i8 17661175009296*/
        /* IL_707: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_70C: box System.Int64*/
        /* IL_711: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0x10101010,0x1010 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_716: ldc.i8 72057594037927935*/
        /* IL_71F: ldc.i8 282578800148737*/
        /* IL_728: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_72D: box System.Int64*/
        /* IL_732: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0x1010101,0x10101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_737: ldstr Add -0x1, -0x010, -0x0101 etc*/
        /* IL_73C: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Add -0x1, -0x010, -0x0101 etc"));
        /* IL_741: ldc.i4.s 15*/
        /* IL_743: conv.i8 */
        /* IL_744: ldc.i4.0 */
        /* IL_745: conv.i8 */
        /* IL_746: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_74B: box System.Int64*/
        /* IL_750: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((15|0)),conv_i8((0|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_755: ldc.i4 255*/
        /* IL_75A: conv.i8 */
        /* IL_75B: ldc.i4.m1 */
        /* IL_75C: conv.i8 */
        /* IL_75D: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_762: box System.Int64*/
        /* IL_767: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((255|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_76C: ldc.i4 4095*/
        /* IL_771: conv.i8 */
        /* IL_772: ldc.i4.s 240*/
        /* IL_774: conv.i8 */
        /* IL_775: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_77A: box System.Int64*/
        /* IL_77F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((4095|0)),conv_i8((-16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_784: ldc.i4 65535*/
        /* IL_789: conv.i8 */
        /* IL_78A: ldc.i4 -257*/
        /* IL_78F: conv.i8 */
        /* IL_790: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_795: box System.Int64*/
        /* IL_79A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((65535|0)),conv_i8((-257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_79F: ldc.i4 1048575*/
        /* IL_7A4: conv.i8 */
        /* IL_7A5: ldc.i4 -4112*/
        /* IL_7AA: conv.i8 */
        /* IL_7AB: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_7B0: box System.Int64*/
        /* IL_7B5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((1048575|0)),conv_i8((-4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_7BA: ldc.i4 16777215*/
        /* IL_7BF: conv.i8 */
        /* IL_7C0: ldc.i4 -65793*/
        /* IL_7C5: conv.i8 */
        /* IL_7C6: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_7CB: box System.Int64*/
        /* IL_7D0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((16777215|0)),conv_i8((-65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_7D5: ldc.i4 268435455*/
        /* IL_7DA: conv.i8 */
        /* IL_7DB: ldc.i4 -1052688*/
        /* IL_7E0: conv.i8 */
        /* IL_7E1: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_7E6: box System.Int64*/
        /* IL_7EB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_i8((268435455|0)),conv_i8((-1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_7F0: ldc.i4.m1 */
        /* IL_7F1: conv.u8 */
        /* IL_7F2: ldc.i4 -16843009*/
        /* IL_7F7: conv.i8 */
        /* IL_7F8: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_7FD: box System.Int64*/
        /* IL_802: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(conv_u8((-1|0)),conv_i8((-16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_807: ldc.i8 68719476735*/
        /* IL_810: ldc.i4 -269488144*/
        /* IL_815: conv.i8 */
        /* IL_816: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_81B: box System.Int64*/
        /* IL_820: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((-269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_825: ldc.i8 1099511627775*/
        /* IL_82E: ldc.i8 -4311810305*/
        /* IL_837: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_83C: box System.Int64*/
        /* IL_841: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFFFFFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_846: ldc.i8 17592186044415*/
        /* IL_84F: ldc.i8 -68988964880*/
        /* IL_858: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_85D: box System.Int64*/
        /* IL_862: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0xEFEFEFF0,0xFFFFFFEF ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_867: ldc.i8 281474976710655*/
        /* IL_870: ldc.i8 -1103823438081*/
        /* IL_879: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_87E: box System.Int64*/
        /* IL_883: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFFFEFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_888: ldc.i8 4503599627370495*/
        /* IL_891: ldc.i8 -17661175009296*/
        /* IL_89A: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_89F: box System.Int64*/
        /* IL_8A4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0xEFEFEFF0,0xFFFFEFEF ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_8A9: ldc.i8 72057594037927935*/
        /* IL_8B2: ldc.i8 -282578800148737*/
        /* IL_8BB: call Int64 Add(System.Int64, System.Int64)*/
        /* IL_8C0: box System.Int64*/
        /* IL_8C5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFEFEFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_8CA: ldstr Sub 1*/
        /* IL_8CF: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Sub 1"));
        /* IL_8D4: ldc.i4.s 15*/
        /* IL_8D6: conv.i8 */
        /* IL_8D7: ldc.i4.1 */
        /* IL_8D8: conv.i8 */
        /* IL_8D9: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_8DE: box System.Int64*/
        /* IL_8E3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((15|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_8E8: ldc.i4 255*/
        /* IL_8ED: conv.i8 */
        /* IL_8EE: ldc.i4.1 */
        /* IL_8EF: conv.i8 */
        /* IL_8F0: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_8F5: box System.Int64*/
        /* IL_8FA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_8FF: ldc.i4 4095*/
        /* IL_904: conv.i8 */
        /* IL_905: ldc.i4.1 */
        /* IL_906: conv.i8 */
        /* IL_907: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_90C: box System.Int64*/
        /* IL_911: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((4095|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_916: ldc.i4 65535*/
        /* IL_91B: conv.i8 */
        /* IL_91C: ldc.i4.1 */
        /* IL_91D: conv.i8 */
        /* IL_91E: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_923: box System.Int64*/
        /* IL_928: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((65535|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_92D: ldc.i4 1048575*/
        /* IL_932: conv.i8 */
        /* IL_933: ldc.i4.1 */
        /* IL_934: conv.i8 */
        /* IL_935: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_93A: box System.Int64*/
        /* IL_93F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((1048575|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_944: ldc.i4 16777215*/
        /* IL_949: conv.i8 */
        /* IL_94A: ldc.i4.1 */
        /* IL_94B: conv.i8 */
        /* IL_94C: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_951: box System.Int64*/
        /* IL_956: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((16777215|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_95B: ldc.i4 268435455*/
        /* IL_960: conv.i8 */
        /* IL_961: ldc.i4.1 */
        /* IL_962: conv.i8 */
        /* IL_963: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_968: box System.Int64*/
        /* IL_96D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((268435455|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_972: ldc.i4.m1 */
        /* IL_973: conv.u8 */
        /* IL_974: ldc.i4.1 */
        /* IL_975: conv.i8 */
        /* IL_976: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_97B: box System.Int64*/
        /* IL_980: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_u8((-1|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_985: ldc.i8 68719476735*/
        /* IL_98E: ldc.i4.1 */
        /* IL_98F: conv.i8 */
        /* IL_990: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_995: box System.Int64*/
        /* IL_99A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_99F: ldc.i8 1099511627775*/
        /* IL_9A8: ldc.i4.1 */
        /* IL_9A9: conv.i8 */
        /* IL_9AA: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_9AF: box System.Int64*/
        /* IL_9B4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_9B9: ldc.i8 17592186044415*/
        /* IL_9C2: ldc.i4.1 */
        /* IL_9C3: conv.i8 */
        /* IL_9C4: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_9C9: box System.Int64*/
        /* IL_9CE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_9D3: ldc.i8 281474976710655*/
        /* IL_9DC: ldc.i4.1 */
        /* IL_9DD: conv.i8 */
        /* IL_9DE: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_9E3: box System.Int64*/
        /* IL_9E8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_9ED: ldc.i8 4503599627370495*/
        /* IL_9F6: ldc.i4.1 */
        /* IL_9F7: conv.i8 */
        /* IL_9F8: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_9FD: box System.Int64*/
        /* IL_A02: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_A07: ldc.i8 72057594037927935*/
        /* IL_A10: ldc.i4.1 */
        /* IL_A11: conv.i8 */
        /* IL_A12: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_A17: box System.Int64*/
        /* IL_A1C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_A21: ldstr Sub -1*/
        /* IL_A26: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Sub -1"));
        /* IL_A2B: ldc.i4.s 15*/
        /* IL_A2D: conv.i8 */
        /* IL_A2E: ldc.i4.m1 */
        /* IL_A2F: conv.i8 */
        /* IL_A30: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_A35: box System.Int64*/
        /* IL_A3A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((15|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_A3F: ldc.i4 255*/
        /* IL_A44: conv.i8 */
        /* IL_A45: ldc.i4.m1 */
        /* IL_A46: conv.i8 */
        /* IL_A47: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_A4C: box System.Int64*/
        /* IL_A51: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((255|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_A56: ldc.i4 4095*/
        /* IL_A5B: conv.i8 */
        /* IL_A5C: ldc.i4.m1 */
        /* IL_A5D: conv.i8 */
        /* IL_A5E: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_A63: box System.Int64*/
        /* IL_A68: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((4095|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_A6D: ldc.i4 65535*/
        /* IL_A72: conv.i8 */
        /* IL_A73: ldc.i4.m1 */
        /* IL_A74: conv.i8 */
        /* IL_A75: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_A7A: box System.Int64*/
        /* IL_A7F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((65535|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_A84: ldc.i4 1048575*/
        /* IL_A89: conv.i8 */
        /* IL_A8A: ldc.i4.m1 */
        /* IL_A8B: conv.i8 */
        /* IL_A8C: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_A91: box System.Int64*/
        /* IL_A96: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((1048575|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_A9B: ldc.i4 16777215*/
        /* IL_AA0: conv.i8 */
        /* IL_AA1: ldc.i4.m1 */
        /* IL_AA2: conv.i8 */
        /* IL_AA3: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_AA8: box System.Int64*/
        /* IL_AAD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((16777215|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_AB2: ldc.i4 268435455*/
        /* IL_AB7: conv.i8 */
        /* IL_AB8: ldc.i4.m1 */
        /* IL_AB9: conv.i8 */
        /* IL_ABA: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_ABF: box System.Int64*/
        /* IL_AC4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((268435455|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_AC9: ldc.i4.m1 */
        /* IL_ACA: conv.u8 */
        /* IL_ACB: ldc.i4.m1 */
        /* IL_ACC: conv.i8 */
        /* IL_ACD: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_AD2: box System.Int64*/
        /* IL_AD7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_u8((-1|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_ADC: ldc.i8 68719476735*/
        /* IL_AE5: ldc.i4.m1 */
        /* IL_AE6: conv.i8 */
        /* IL_AE7: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_AEC: box System.Int64*/
        /* IL_AF1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_AF6: ldc.i8 1099511627775*/
        /* IL_AFF: ldc.i4.m1 */
        /* IL_B00: conv.i8 */
        /* IL_B01: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_B06: box System.Int64*/
        /* IL_B0B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_B10: ldc.i8 17592186044415*/
        /* IL_B19: ldc.i4.m1 */
        /* IL_B1A: conv.i8 */
        /* IL_B1B: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_B20: box System.Int64*/
        /* IL_B25: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_B2A: ldc.i8 281474976710655*/
        /* IL_B33: ldc.i4.m1 */
        /* IL_B34: conv.i8 */
        /* IL_B35: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_B3A: box System.Int64*/
        /* IL_B3F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_B44: ldc.i8 4503599627370495*/
        /* IL_B4D: ldc.i4.m1 */
        /* IL_B4E: conv.i8 */
        /* IL_B4F: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_B54: box System.Int64*/
        /* IL_B59: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_B5E: ldc.i8 72057594037927935*/
        /* IL_B67: ldc.i4.m1 */
        /* IL_B68: conv.i8 */
        /* IL_B69: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_B6E: box System.Int64*/
        /* IL_B73: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_B78: ldstr Sub 2*/
        /* IL_B7D: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Sub 2"));
        /* IL_B82: ldc.i4.s 15*/
        /* IL_B84: conv.i8 */
        /* IL_B85: ldc.i4.2 */
        /* IL_B86: conv.i8 */
        /* IL_B87: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_B8C: box System.Int64*/
        /* IL_B91: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((15|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_B96: ldc.i4 255*/
        /* IL_B9B: conv.i8 */
        /* IL_B9C: ldc.i4.2 */
        /* IL_B9D: conv.i8 */
        /* IL_B9E: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_BA3: box System.Int64*/
        /* IL_BA8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((255|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_BAD: ldc.i4 4095*/
        /* IL_BB2: conv.i8 */
        /* IL_BB3: ldc.i4.2 */
        /* IL_BB4: conv.i8 */
        /* IL_BB5: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_BBA: box System.Int64*/
        /* IL_BBF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((4095|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_BC4: ldc.i4 65535*/
        /* IL_BC9: conv.i8 */
        /* IL_BCA: ldc.i4.2 */
        /* IL_BCB: conv.i8 */
        /* IL_BCC: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_BD1: box System.Int64*/
        /* IL_BD6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((65535|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_BDB: ldc.i4 1048575*/
        /* IL_BE0: conv.i8 */
        /* IL_BE1: ldc.i4.2 */
        /* IL_BE2: conv.i8 */
        /* IL_BE3: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_BE8: box System.Int64*/
        /* IL_BED: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((1048575|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_BF2: ldc.i4 16777215*/
        /* IL_BF7: conv.i8 */
        /* IL_BF8: ldc.i4.2 */
        /* IL_BF9: conv.i8 */
        /* IL_BFA: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_BFF: box System.Int64*/
        /* IL_C04: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((16777215|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C09: ldc.i4 268435455*/
        /* IL_C0E: conv.i8 */
        /* IL_C0F: ldc.i4.2 */
        /* IL_C10: conv.i8 */
        /* IL_C11: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_C16: box System.Int64*/
        /* IL_C1B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((268435455|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C20: ldc.i4.m1 */
        /* IL_C21: conv.u8 */
        /* IL_C22: ldc.i4.2 */
        /* IL_C23: conv.i8 */
        /* IL_C24: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_C29: box System.Int64*/
        /* IL_C2E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_u8((-1|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C33: ldc.i8 68719476735*/
        /* IL_C3C: ldc.i4.2 */
        /* IL_C3D: conv.i8 */
        /* IL_C3E: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_C43: box System.Int64*/
        /* IL_C48: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C4D: ldc.i8 1099511627775*/
        /* IL_C56: ldc.i4.2 */
        /* IL_C57: conv.i8 */
        /* IL_C58: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_C5D: box System.Int64*/
        /* IL_C62: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C67: ldc.i8 17592186044415*/
        /* IL_C70: ldc.i4.2 */
        /* IL_C71: conv.i8 */
        /* IL_C72: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_C77: box System.Int64*/
        /* IL_C7C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C81: ldc.i8 281474976710655*/
        /* IL_C8A: ldc.i4.2 */
        /* IL_C8B: conv.i8 */
        /* IL_C8C: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_C91: box System.Int64*/
        /* IL_C96: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C9B: ldc.i8 4503599627370495*/
        /* IL_CA4: ldc.i4.2 */
        /* IL_CA5: conv.i8 */
        /* IL_CA6: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_CAB: box System.Int64*/
        /* IL_CB0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_CB5: ldc.i8 72057594037927935*/
        /* IL_CBE: ldc.i4.2 */
        /* IL_CBF: conv.i8 */
        /* IL_CC0: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_CC5: box System.Int64*/
        /* IL_CCA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_CCF: ldstr Sub -2*/
        /* IL_CD4: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Sub -2"));
        /* IL_CD9: ldc.i4.s 15*/
        /* IL_CDB: conv.i8 */
        /* IL_CDC: ldc.i4.s 254*/
        /* IL_CDE: conv.i8 */
        /* IL_CDF: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_CE4: box System.Int64*/
        /* IL_CE9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((15|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_CEE: ldc.i4 255*/
        /* IL_CF3: conv.i8 */
        /* IL_CF4: ldc.i4.s 254*/
        /* IL_CF6: conv.i8 */
        /* IL_CF7: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_CFC: box System.Int64*/
        /* IL_D01: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((255|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D06: ldc.i4 4095*/
        /* IL_D0B: conv.i8 */
        /* IL_D0C: ldc.i4.s 254*/
        /* IL_D0E: conv.i8 */
        /* IL_D0F: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_D14: box System.Int64*/
        /* IL_D19: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((4095|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D1E: ldc.i4 65535*/
        /* IL_D23: conv.i8 */
        /* IL_D24: ldc.i4.s 254*/
        /* IL_D26: conv.i8 */
        /* IL_D27: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_D2C: box System.Int64*/
        /* IL_D31: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((65535|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D36: ldc.i4 1048575*/
        /* IL_D3B: conv.i8 */
        /* IL_D3C: ldc.i4.s 254*/
        /* IL_D3E: conv.i8 */
        /* IL_D3F: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_D44: box System.Int64*/
        /* IL_D49: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((1048575|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D4E: ldc.i4 16777215*/
        /* IL_D53: conv.i8 */
        /* IL_D54: ldc.i4.s 254*/
        /* IL_D56: conv.i8 */
        /* IL_D57: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_D5C: box System.Int64*/
        /* IL_D61: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((16777215|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D66: ldc.i4 268435455*/
        /* IL_D6B: conv.i8 */
        /* IL_D6C: ldc.i4.s 254*/
        /* IL_D6E: conv.i8 */
        /* IL_D6F: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_D74: box System.Int64*/
        /* IL_D79: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((268435455|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D7E: ldc.i4.m1 */
        /* IL_D7F: conv.u8 */
        /* IL_D80: ldc.i4.s 254*/
        /* IL_D82: conv.i8 */
        /* IL_D83: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_D88: box System.Int64*/
        /* IL_D8D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_u8((-1|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D92: ldc.i8 68719476735*/
        /* IL_D9B: ldc.i4.s 254*/
        /* IL_D9D: conv.i8 */
        /* IL_D9E: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_DA3: box System.Int64*/
        /* IL_DA8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_DAD: ldc.i8 1099511627775*/
        /* IL_DB6: ldc.i4.s 254*/
        /* IL_DB8: conv.i8 */
        /* IL_DB9: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_DBE: box System.Int64*/
        /* IL_DC3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_DC8: ldc.i8 17592186044415*/
        /* IL_DD1: ldc.i4.s 254*/
        /* IL_DD3: conv.i8 */
        /* IL_DD4: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_DD9: box System.Int64*/
        /* IL_DDE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_DE3: ldc.i8 281474976710655*/
        /* IL_DEC: ldc.i4.s 254*/
        /* IL_DEE: conv.i8 */
        /* IL_DEF: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_DF4: box System.Int64*/
        /* IL_DF9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_DFE: ldc.i8 4503599627370495*/
        /* IL_E07: ldc.i4.s 254*/
        /* IL_E09: conv.i8 */
        /* IL_E0A: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_E0F: box System.Int64*/
        /* IL_E14: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_E19: ldc.i8 72057594037927935*/
        /* IL_E22: ldc.i4.s 254*/
        /* IL_E24: conv.i8 */
        /* IL_E25: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_E2A: box System.Int64*/
        /* IL_E2F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_E34: ldstr Sub 0x1, 0x010, 0x0101 etc*/
        /* IL_E39: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Sub 0x1, 0x010, 0x0101 etc"));
        /* IL_E3E: ldc.i4.s 15*/
        /* IL_E40: conv.i8 */
        /* IL_E41: ldc.i4.0 */
        /* IL_E42: conv.i8 */
        /* IL_E43: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_E48: box System.Int64*/
        /* IL_E4D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((15|0)),conv_i8((0|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_E52: ldc.i4 255*/
        /* IL_E57: conv.i8 */
        /* IL_E58: ldc.i4.1 */
        /* IL_E59: conv.i8 */
        /* IL_E5A: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_E5F: box System.Int64*/
        /* IL_E64: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_E69: ldc.i4 4095*/
        /* IL_E6E: conv.i8 */
        /* IL_E6F: ldc.i4.s 16*/
        /* IL_E71: conv.i8 */
        /* IL_E72: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_E77: box System.Int64*/
        /* IL_E7C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((4095|0)),conv_i8((16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_E81: ldc.i4 65535*/
        /* IL_E86: conv.i8 */
        /* IL_E87: ldc.i4 257*/
        /* IL_E8C: conv.i8 */
        /* IL_E8D: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_E92: box System.Int64*/
        /* IL_E97: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((65535|0)),conv_i8((257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_E9C: ldc.i4 1048575*/
        /* IL_EA1: conv.i8 */
        /* IL_EA2: ldc.i4 4112*/
        /* IL_EA7: conv.i8 */
        /* IL_EA8: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_EAD: box System.Int64*/
        /* IL_EB2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((1048575|0)),conv_i8((4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_EB7: ldc.i4 16777215*/
        /* IL_EBC: conv.i8 */
        /* IL_EBD: ldc.i4 65793*/
        /* IL_EC2: conv.i8 */
        /* IL_EC3: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_EC8: box System.Int64*/
        /* IL_ECD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((16777215|0)),conv_i8((65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_ED2: ldc.i4 268435455*/
        /* IL_ED7: conv.i8 */
        /* IL_ED8: ldc.i4 1052688*/
        /* IL_EDD: conv.i8 */
        /* IL_EDE: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_EE3: box System.Int64*/
        /* IL_EE8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((268435455|0)),conv_i8((1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_EED: ldc.i4.m1 */
        /* IL_EEE: conv.u8 */
        /* IL_EEF: ldc.i4 16843009*/
        /* IL_EF4: conv.i8 */
        /* IL_EF5: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_EFA: box System.Int64*/
        /* IL_EFF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_u8((-1|0)),conv_i8((16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_F04: ldc.i8 68719476735*/
        /* IL_F0D: ldc.i4 269488144*/
        /* IL_F12: conv.i8 */
        /* IL_F13: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_F18: box System.Int64*/
        /* IL_F1D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_F22: ldc.i8 1099511627775*/
        /* IL_F2B: ldc.i8 4311810305*/
        /* IL_F34: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_F39: box System.Int64*/
        /* IL_F3E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0x1010101,0x1 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_F43: ldc.i8 17592186044415*/
        /* IL_F4C: ldc.i8 68988964880*/
        /* IL_F55: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_F5A: box System.Int64*/
        /* IL_F5F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0x10101010,0x10 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_F64: ldc.i8 281474976710655*/
        /* IL_F6D: ldc.i8 1103823438081*/
        /* IL_F76: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_F7B: box System.Int64*/
        /* IL_F80: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0x1010101,0x101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_F85: ldc.i8 4503599627370495*/
        /* IL_F8E: ldc.i8 17661175009296*/
        /* IL_F97: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_F9C: box System.Int64*/
        /* IL_FA1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0x10101010,0x1010 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_FA6: ldc.i8 72057594037927935*/
        /* IL_FAF: ldc.i8 282578800148737*/
        /* IL_FB8: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_FBD: box System.Int64*/
        /* IL_FC2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0x1010101,0x10101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_FC7: ldstr Sub -0x1, -0x010, -0x0101 etc*/
        /* IL_FCC: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Sub -0x1, -0x010, -0x0101 etc"));
        /* IL_FD1: ldc.i4.s 15*/
        /* IL_FD3: conv.i8 */
        /* IL_FD4: ldc.i4.0 */
        /* IL_FD5: conv.i8 */
        /* IL_FD6: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_FDB: box System.Int64*/
        /* IL_FE0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((15|0)),conv_i8((0|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_FE5: ldc.i4 255*/
        /* IL_FEA: conv.i8 */
        /* IL_FEB: ldc.i4.m1 */
        /* IL_FEC: conv.i8 */
        /* IL_FED: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_FF2: box System.Int64*/
        /* IL_FF7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((255|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_FFC: ldc.i4 4095*/
        /* IL_1001: conv.i8 */
        /* IL_1002: ldc.i4.s 240*/
        /* IL_1004: conv.i8 */
        /* IL_1005: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_100A: box System.Int64*/
        /* IL_100F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((4095|0)),conv_i8((-16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1014: ldc.i4 65535*/
        /* IL_1019: conv.i8 */
        /* IL_101A: ldc.i4 -257*/
        /* IL_101F: conv.i8 */
        /* IL_1020: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_1025: box System.Int64*/
        /* IL_102A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((65535|0)),conv_i8((-257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_102F: ldc.i4 1048575*/
        /* IL_1034: conv.i8 */
        /* IL_1035: ldc.i4 -4112*/
        /* IL_103A: conv.i8 */
        /* IL_103B: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_1040: box System.Int64*/
        /* IL_1045: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((1048575|0)),conv_i8((-4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_104A: ldc.i4 16777215*/
        /* IL_104F: conv.i8 */
        /* IL_1050: ldc.i4 -65793*/
        /* IL_1055: conv.i8 */
        /* IL_1056: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_105B: box System.Int64*/
        /* IL_1060: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((16777215|0)),conv_i8((-65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1065: ldc.i4 268435455*/
        /* IL_106A: conv.i8 */
        /* IL_106B: ldc.i4 -1052688*/
        /* IL_1070: conv.i8 */
        /* IL_1071: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_1076: box System.Int64*/
        /* IL_107B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_i8((268435455|0)),conv_i8((-1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1080: ldc.i4.m1 */
        /* IL_1081: conv.u8 */
        /* IL_1082: ldc.i4 -16843009*/
        /* IL_1087: conv.i8 */
        /* IL_1088: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_108D: box System.Int64*/
        /* IL_1092: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(conv_u8((-1|0)),conv_i8((-16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1097: ldc.i8 68719476735*/
        /* IL_10A0: ldc.i4 -269488144*/
        /* IL_10A5: conv.i8 */
        /* IL_10A6: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_10AB: box System.Int64*/
        /* IL_10B0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((-269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10B5: ldc.i8 1099511627775*/
        /* IL_10BE: ldc.i8 -4311810305*/
        /* IL_10C7: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_10CC: box System.Int64*/
        /* IL_10D1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFFFFFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10D6: ldc.i8 17592186044415*/
        /* IL_10DF: ldc.i8 -68988964880*/
        /* IL_10E8: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_10ED: box System.Int64*/
        /* IL_10F2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0xEFEFEFF0,0xFFFFFFEF ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10F7: ldc.i8 281474976710655*/
        /* IL_1100: ldc.i8 -1103823438081*/
        /* IL_1109: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_110E: box System.Int64*/
        /* IL_1113: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFFFEFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1118: ldc.i8 4503599627370495*/
        /* IL_1121: ldc.i8 -17661175009296*/
        /* IL_112A: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_112F: box System.Int64*/
        /* IL_1134: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0xEFEFEFF0,0xFFFFEFEF ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1139: ldc.i8 72057594037927935*/
        /* IL_1142: ldc.i8 -282578800148737*/
        /* IL_114B: call Int64 Sub(System.Int64, System.Int64)*/
        /* IL_1150: box System.Int64*/
        /* IL_1155: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFEFEFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_115A: ldstr Mul 1*/
        /* IL_115F: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mul 1"));
        /* IL_1164: ldc.i4.s 15*/
        /* IL_1166: conv.i8 */
        /* IL_1167: ldc.i4.1 */
        /* IL_1168: conv.i8 */
        /* IL_1169: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_116E: box System.Int64*/
        /* IL_1173: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((15|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1178: ldc.i4 255*/
        /* IL_117D: conv.i8 */
        /* IL_117E: ldc.i4.1 */
        /* IL_117F: conv.i8 */
        /* IL_1180: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1185: box System.Int64*/
        /* IL_118A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_118F: ldc.i4 4095*/
        /* IL_1194: conv.i8 */
        /* IL_1195: ldc.i4.1 */
        /* IL_1196: conv.i8 */
        /* IL_1197: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_119C: box System.Int64*/
        /* IL_11A1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((4095|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_11A6: ldc.i4 65535*/
        /* IL_11AB: conv.i8 */
        /* IL_11AC: ldc.i4.1 */
        /* IL_11AD: conv.i8 */
        /* IL_11AE: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_11B3: box System.Int64*/
        /* IL_11B8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((65535|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_11BD: ldc.i4 1048575*/
        /* IL_11C2: conv.i8 */
        /* IL_11C3: ldc.i4.1 */
        /* IL_11C4: conv.i8 */
        /* IL_11C5: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_11CA: box System.Int64*/
        /* IL_11CF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((1048575|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_11D4: ldc.i4 16777215*/
        /* IL_11D9: conv.i8 */
        /* IL_11DA: ldc.i4.1 */
        /* IL_11DB: conv.i8 */
        /* IL_11DC: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_11E1: box System.Int64*/
        /* IL_11E6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((16777215|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_11EB: ldc.i4 268435455*/
        /* IL_11F0: conv.i8 */
        /* IL_11F1: ldc.i4.1 */
        /* IL_11F2: conv.i8 */
        /* IL_11F3: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_11F8: box System.Int64*/
        /* IL_11FD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((268435455|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1202: ldc.i4.m1 */
        /* IL_1203: conv.u8 */
        /* IL_1204: ldc.i4.1 */
        /* IL_1205: conv.i8 */
        /* IL_1206: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_120B: box System.Int64*/
        /* IL_1210: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_u8((-1|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1215: ldc.i8 68719476735*/
        /* IL_121E: ldc.i4.1 */
        /* IL_121F: conv.i8 */
        /* IL_1220: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1225: box System.Int64*/
        /* IL_122A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_122F: ldc.i8 1099511627775*/
        /* IL_1238: ldc.i4.1 */
        /* IL_1239: conv.i8 */
        /* IL_123A: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_123F: box System.Int64*/
        /* IL_1244: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1249: ldc.i8 17592186044415*/
        /* IL_1252: ldc.i4.1 */
        /* IL_1253: conv.i8 */
        /* IL_1254: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1259: box System.Int64*/
        /* IL_125E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1263: ldc.i8 281474976710655*/
        /* IL_126C: ldc.i4.1 */
        /* IL_126D: conv.i8 */
        /* IL_126E: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1273: box System.Int64*/
        /* IL_1278: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_127D: ldc.i8 4503599627370495*/
        /* IL_1286: ldc.i4.1 */
        /* IL_1287: conv.i8 */
        /* IL_1288: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_128D: box System.Int64*/
        /* IL_1292: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1297: ldc.i8 72057594037927935*/
        /* IL_12A0: ldc.i4.1 */
        /* IL_12A1: conv.i8 */
        /* IL_12A2: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_12A7: box System.Int64*/
        /* IL_12AC: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_12B1: ldstr Mul -1*/
        /* IL_12B6: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mul -1"));
        /* IL_12BB: ldc.i4.s 15*/
        /* IL_12BD: conv.i8 */
        /* IL_12BE: ldc.i4.m1 */
        /* IL_12BF: conv.i8 */
        /* IL_12C0: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_12C5: box System.Int64*/
        /* IL_12CA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((15|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_12CF: ldc.i4 255*/
        /* IL_12D4: conv.i8 */
        /* IL_12D5: ldc.i4.m1 */
        /* IL_12D6: conv.i8 */
        /* IL_12D7: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_12DC: box System.Int64*/
        /* IL_12E1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((255|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_12E6: ldc.i4 4095*/
        /* IL_12EB: conv.i8 */
        /* IL_12EC: ldc.i4.m1 */
        /* IL_12ED: conv.i8 */
        /* IL_12EE: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_12F3: box System.Int64*/
        /* IL_12F8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((4095|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_12FD: ldc.i4 65535*/
        /* IL_1302: conv.i8 */
        /* IL_1303: ldc.i4.m1 */
        /* IL_1304: conv.i8 */
        /* IL_1305: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_130A: box System.Int64*/
        /* IL_130F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((65535|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1314: ldc.i4 1048575*/
        /* IL_1319: conv.i8 */
        /* IL_131A: ldc.i4.m1 */
        /* IL_131B: conv.i8 */
        /* IL_131C: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1321: box System.Int64*/
        /* IL_1326: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((1048575|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_132B: ldc.i4 16777215*/
        /* IL_1330: conv.i8 */
        /* IL_1331: ldc.i4.m1 */
        /* IL_1332: conv.i8 */
        /* IL_1333: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1338: box System.Int64*/
        /* IL_133D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((16777215|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1342: ldc.i4 268435455*/
        /* IL_1347: conv.i8 */
        /* IL_1348: ldc.i4.m1 */
        /* IL_1349: conv.i8 */
        /* IL_134A: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_134F: box System.Int64*/
        /* IL_1354: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((268435455|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1359: ldc.i4.m1 */
        /* IL_135A: conv.u8 */
        /* IL_135B: ldc.i4.m1 */
        /* IL_135C: conv.i8 */
        /* IL_135D: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1362: box System.Int64*/
        /* IL_1367: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_u8((-1|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_136C: ldc.i8 68719476735*/
        /* IL_1375: ldc.i4.m1 */
        /* IL_1376: conv.i8 */
        /* IL_1377: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_137C: box System.Int64*/
        /* IL_1381: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1386: ldc.i8 1099511627775*/
        /* IL_138F: ldc.i4.m1 */
        /* IL_1390: conv.i8 */
        /* IL_1391: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1396: box System.Int64*/
        /* IL_139B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_13A0: ldc.i8 17592186044415*/
        /* IL_13A9: ldc.i4.m1 */
        /* IL_13AA: conv.i8 */
        /* IL_13AB: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_13B0: box System.Int64*/
        /* IL_13B5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_13BA: ldc.i8 281474976710655*/
        /* IL_13C3: ldc.i4.m1 */
        /* IL_13C4: conv.i8 */
        /* IL_13C5: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_13CA: box System.Int64*/
        /* IL_13CF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_13D4: ldc.i8 4503599627370495*/
        /* IL_13DD: ldc.i4.m1 */
        /* IL_13DE: conv.i8 */
        /* IL_13DF: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_13E4: box System.Int64*/
        /* IL_13E9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_13EE: ldc.i8 72057594037927935*/
        /* IL_13F7: ldc.i4.m1 */
        /* IL_13F8: conv.i8 */
        /* IL_13F9: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_13FE: box System.Int64*/
        /* IL_1403: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1408: ldstr Mul 2*/
        /* IL_140D: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mul 2"));
        /* IL_1412: ldc.i4.s 15*/
        /* IL_1414: conv.i8 */
        /* IL_1415: ldc.i4.2 */
        /* IL_1416: conv.i8 */
        /* IL_1417: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_141C: box System.Int64*/
        /* IL_1421: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((15|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1426: ldc.i4 255*/
        /* IL_142B: conv.i8 */
        /* IL_142C: ldc.i4.2 */
        /* IL_142D: conv.i8 */
        /* IL_142E: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1433: box System.Int64*/
        /* IL_1438: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((255|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_143D: ldc.i4 4095*/
        /* IL_1442: conv.i8 */
        /* IL_1443: ldc.i4.2 */
        /* IL_1444: conv.i8 */
        /* IL_1445: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_144A: box System.Int64*/
        /* IL_144F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((4095|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1454: ldc.i4 65535*/
        /* IL_1459: conv.i8 */
        /* IL_145A: ldc.i4.2 */
        /* IL_145B: conv.i8 */
        /* IL_145C: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1461: box System.Int64*/
        /* IL_1466: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((65535|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_146B: ldc.i4 1048575*/
        /* IL_1470: conv.i8 */
        /* IL_1471: ldc.i4.2 */
        /* IL_1472: conv.i8 */
        /* IL_1473: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1478: box System.Int64*/
        /* IL_147D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((1048575|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1482: ldc.i4 16777215*/
        /* IL_1487: conv.i8 */
        /* IL_1488: ldc.i4.2 */
        /* IL_1489: conv.i8 */
        /* IL_148A: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_148F: box System.Int64*/
        /* IL_1494: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((16777215|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1499: ldc.i4 268435455*/
        /* IL_149E: conv.i8 */
        /* IL_149F: ldc.i4.2 */
        /* IL_14A0: conv.i8 */
        /* IL_14A1: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_14A6: box System.Int64*/
        /* IL_14AB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((268435455|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_14B0: ldc.i4.m1 */
        /* IL_14B1: conv.u8 */
        /* IL_14B2: ldc.i4.2 */
        /* IL_14B3: conv.i8 */
        /* IL_14B4: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_14B9: box System.Int64*/
        /* IL_14BE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_u8((-1|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_14C3: ldc.i8 68719476735*/
        /* IL_14CC: ldc.i4.2 */
        /* IL_14CD: conv.i8 */
        /* IL_14CE: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_14D3: box System.Int64*/
        /* IL_14D8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_14DD: ldc.i8 1099511627775*/
        /* IL_14E6: ldc.i4.2 */
        /* IL_14E7: conv.i8 */
        /* IL_14E8: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_14ED: box System.Int64*/
        /* IL_14F2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_14F7: ldc.i8 17592186044415*/
        /* IL_1500: ldc.i4.2 */
        /* IL_1501: conv.i8 */
        /* IL_1502: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1507: box System.Int64*/
        /* IL_150C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1511: ldc.i8 281474976710655*/
        /* IL_151A: ldc.i4.2 */
        /* IL_151B: conv.i8 */
        /* IL_151C: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1521: box System.Int64*/
        /* IL_1526: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_152B: ldc.i8 4503599627370495*/
        /* IL_1534: ldc.i4.2 */
        /* IL_1535: conv.i8 */
        /* IL_1536: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_153B: box System.Int64*/
        /* IL_1540: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1545: ldc.i8 72057594037927935*/
        /* IL_154E: ldc.i4.2 */
        /* IL_154F: conv.i8 */
        /* IL_1550: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1555: box System.Int64*/
        /* IL_155A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_155F: ldstr Mul -2*/
        /* IL_1564: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mul -2"));
        /* IL_1569: ldc.i4.s 15*/
        /* IL_156B: conv.i8 */
        /* IL_156C: ldc.i4.s 254*/
        /* IL_156E: conv.i8 */
        /* IL_156F: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1574: box System.Int64*/
        /* IL_1579: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((15|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_157E: ldc.i4 255*/
        /* IL_1583: conv.i8 */
        /* IL_1584: ldc.i4.s 254*/
        /* IL_1586: conv.i8 */
        /* IL_1587: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_158C: box System.Int64*/
        /* IL_1591: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((255|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1596: ldc.i4 4095*/
        /* IL_159B: conv.i8 */
        /* IL_159C: ldc.i4.s 254*/
        /* IL_159E: conv.i8 */
        /* IL_159F: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_15A4: box System.Int64*/
        /* IL_15A9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((4095|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_15AE: ldc.i4 65535*/
        /* IL_15B3: conv.i8 */
        /* IL_15B4: ldc.i4.s 254*/
        /* IL_15B6: conv.i8 */
        /* IL_15B7: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_15BC: box System.Int64*/
        /* IL_15C1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((65535|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_15C6: ldc.i4 1048575*/
        /* IL_15CB: conv.i8 */
        /* IL_15CC: ldc.i4.s 254*/
        /* IL_15CE: conv.i8 */
        /* IL_15CF: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_15D4: box System.Int64*/
        /* IL_15D9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((1048575|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_15DE: ldc.i4 16777215*/
        /* IL_15E3: conv.i8 */
        /* IL_15E4: ldc.i4.s 254*/
        /* IL_15E6: conv.i8 */
        /* IL_15E7: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_15EC: box System.Int64*/
        /* IL_15F1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((16777215|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_15F6: ldc.i4 268435455*/
        /* IL_15FB: conv.i8 */
        /* IL_15FC: ldc.i4.s 254*/
        /* IL_15FE: conv.i8 */
        /* IL_15FF: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1604: box System.Int64*/
        /* IL_1609: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((268435455|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_160E: ldc.i4.m1 */
        /* IL_160F: conv.u8 */
        /* IL_1610: ldc.i4.s 254*/
        /* IL_1612: conv.i8 */
        /* IL_1613: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1618: box System.Int64*/
        /* IL_161D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_u8((-1|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1622: ldc.i8 68719476735*/
        /* IL_162B: ldc.i4.s 254*/
        /* IL_162D: conv.i8 */
        /* IL_162E: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1633: box System.Int64*/
        /* IL_1638: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_163D: ldc.i8 1099511627775*/
        /* IL_1646: ldc.i4.s 254*/
        /* IL_1648: conv.i8 */
        /* IL_1649: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_164E: box System.Int64*/
        /* IL_1653: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1658: ldc.i8 17592186044415*/
        /* IL_1661: ldc.i4.s 254*/
        /* IL_1663: conv.i8 */
        /* IL_1664: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1669: box System.Int64*/
        /* IL_166E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1673: ldc.i8 281474976710655*/
        /* IL_167C: ldc.i4.s 254*/
        /* IL_167E: conv.i8 */
        /* IL_167F: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1684: box System.Int64*/
        /* IL_1689: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_168E: ldc.i8 4503599627370495*/
        /* IL_1697: ldc.i4.s 254*/
        /* IL_1699: conv.i8 */
        /* IL_169A: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_169F: box System.Int64*/
        /* IL_16A4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_16A9: ldc.i8 72057594037927935*/
        /* IL_16B2: ldc.i4.s 254*/
        /* IL_16B4: conv.i8 */
        /* IL_16B5: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_16BA: box System.Int64*/
        /* IL_16BF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_16C4: ldstr Mul 0x1, 0x010, 0x0101 etc*/
        /* IL_16C9: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mul 0x1, 0x010, 0x0101 etc"));
        /* IL_16CE: ldc.i4.s 15*/
        /* IL_16D0: conv.i8 */
        /* IL_16D1: ldc.i4.0 */
        /* IL_16D2: conv.i8 */
        /* IL_16D3: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_16D8: box System.Int64*/
        /* IL_16DD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((15|0)),conv_i8((0|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_16E2: ldc.i4 255*/
        /* IL_16E7: conv.i8 */
        /* IL_16E8: ldc.i4.1 */
        /* IL_16E9: conv.i8 */
        /* IL_16EA: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_16EF: box System.Int64*/
        /* IL_16F4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_16F9: ldc.i4 4095*/
        /* IL_16FE: conv.i8 */
        /* IL_16FF: ldc.i4.s 16*/
        /* IL_1701: conv.i8 */
        /* IL_1702: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1707: box System.Int64*/
        /* IL_170C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((4095|0)),conv_i8((16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1711: ldc.i4 65535*/
        /* IL_1716: conv.i8 */
        /* IL_1717: ldc.i4 257*/
        /* IL_171C: conv.i8 */
        /* IL_171D: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1722: box System.Int64*/
        /* IL_1727: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((65535|0)),conv_i8((257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_172C: ldc.i4 1048575*/
        /* IL_1731: conv.i8 */
        /* IL_1732: ldc.i4 4112*/
        /* IL_1737: conv.i8 */
        /* IL_1738: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_173D: box System.Int64*/
        /* IL_1742: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((1048575|0)),conv_i8((4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1747: ldc.i4 16777215*/
        /* IL_174C: conv.i8 */
        /* IL_174D: ldc.i4 65793*/
        /* IL_1752: conv.i8 */
        /* IL_1753: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1758: box System.Int64*/
        /* IL_175D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((16777215|0)),conv_i8((65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1762: ldc.i4 268435455*/
        /* IL_1767: conv.i8 */
        /* IL_1768: ldc.i4 1052688*/
        /* IL_176D: conv.i8 */
        /* IL_176E: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1773: box System.Int64*/
        /* IL_1778: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((268435455|0)),conv_i8((1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_177D: ldc.i4.m1 */
        /* IL_177E: conv.u8 */
        /* IL_177F: ldc.i4 16843009*/
        /* IL_1784: conv.i8 */
        /* IL_1785: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_178A: box System.Int64*/
        /* IL_178F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_u8((-1|0)),conv_i8((16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1794: ldc.i8 68719476735*/
        /* IL_179D: ldc.i4 269488144*/
        /* IL_17A2: conv.i8 */
        /* IL_17A3: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_17A8: box System.Int64*/
        /* IL_17AD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_17B2: ldc.i8 1099511627775*/
        /* IL_17BB: ldc.i8 4311810305*/
        /* IL_17C4: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_17C9: box System.Int64*/
        /* IL_17CE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0x1010101,0x1 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_17D3: ldc.i8 17592186044415*/
        /* IL_17DC: ldc.i8 68988964880*/
        /* IL_17E5: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_17EA: box System.Int64*/
        /* IL_17EF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0x10101010,0x10 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_17F4: ldc.i8 281474976710655*/
        /* IL_17FD: ldc.i8 1103823438081*/
        /* IL_1806: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_180B: box System.Int64*/
        /* IL_1810: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0x1010101,0x101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1815: ldc.i8 4503599627370495*/
        /* IL_181E: ldc.i8 17661175009296*/
        /* IL_1827: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_182C: box System.Int64*/
        /* IL_1831: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0x10101010,0x1010 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1836: ldc.i8 72057594037927935*/
        /* IL_183F: ldc.i8 282578800148737*/
        /* IL_1848: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_184D: box System.Int64*/
        /* IL_1852: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0x1010101,0x10101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1857: ldstr Mul -0x1, -0x010, -0x0101 etc*/
        /* IL_185C: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mul -0x1, -0x010, -0x0101 etc"));
        /* IL_1861: ldc.i4.s 15*/
        /* IL_1863: conv.i8 */
        /* IL_1864: ldc.i4.0 */
        /* IL_1865: conv.i8 */
        /* IL_1866: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_186B: box System.Int64*/
        /* IL_1870: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((15|0)),conv_i8((0|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1875: ldc.i4 255*/
        /* IL_187A: conv.i8 */
        /* IL_187B: ldc.i4.m1 */
        /* IL_187C: conv.i8 */
        /* IL_187D: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1882: box System.Int64*/
        /* IL_1887: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((255|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_188C: ldc.i4 4095*/
        /* IL_1891: conv.i8 */
        /* IL_1892: ldc.i4.s 240*/
        /* IL_1894: conv.i8 */
        /* IL_1895: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_189A: box System.Int64*/
        /* IL_189F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((4095|0)),conv_i8((-16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_18A4: ldc.i4 65535*/
        /* IL_18A9: conv.i8 */
        /* IL_18AA: ldc.i4 -257*/
        /* IL_18AF: conv.i8 */
        /* IL_18B0: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_18B5: box System.Int64*/
        /* IL_18BA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((65535|0)),conv_i8((-257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_18BF: ldc.i4 1048575*/
        /* IL_18C4: conv.i8 */
        /* IL_18C5: ldc.i4 -4112*/
        /* IL_18CA: conv.i8 */
        /* IL_18CB: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_18D0: box System.Int64*/
        /* IL_18D5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((1048575|0)),conv_i8((-4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_18DA: ldc.i4 16777215*/
        /* IL_18DF: conv.i8 */
        /* IL_18E0: ldc.i4 -65793*/
        /* IL_18E5: conv.i8 */
        /* IL_18E6: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_18EB: box System.Int64*/
        /* IL_18F0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((16777215|0)),conv_i8((-65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_18F5: ldc.i4 268435455*/
        /* IL_18FA: conv.i8 */
        /* IL_18FB: ldc.i4 -1052688*/
        /* IL_1900: conv.i8 */
        /* IL_1901: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_1906: box System.Int64*/
        /* IL_190B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_i8((268435455|0)),conv_i8((-1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1910: ldc.i4.m1 */
        /* IL_1911: conv.u8 */
        /* IL_1912: ldc.i4 -16843009*/
        /* IL_1917: conv.i8 */
        /* IL_1918: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_191D: box System.Int64*/
        /* IL_1922: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(conv_u8((-1|0)),conv_i8((-16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1927: ldc.i8 68719476735*/
        /* IL_1930: ldc.i4 -269488144*/
        /* IL_1935: conv.i8 */
        /* IL_1936: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_193B: box System.Int64*/
        /* IL_1940: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((-269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1945: ldc.i8 1099511627775*/
        /* IL_194E: ldc.i8 -4311810305*/
        /* IL_1957: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_195C: box System.Int64*/
        /* IL_1961: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFFFFFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1966: ldc.i8 17592186044415*/
        /* IL_196F: ldc.i8 -68988964880*/
        /* IL_1978: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_197D: box System.Int64*/
        /* IL_1982: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0xEFEFEFF0,0xFFFFFFEF ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1987: ldc.i8 281474976710655*/
        /* IL_1990: ldc.i8 -1103823438081*/
        /* IL_1999: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_199E: box System.Int64*/
        /* IL_19A3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFFFEFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_19A8: ldc.i8 4503599627370495*/
        /* IL_19B1: ldc.i8 -17661175009296*/
        /* IL_19BA: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_19BF: box System.Int64*/
        /* IL_19C4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0xEFEFEFF0,0xFFFFEFEF ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_19C9: ldc.i8 72057594037927935*/
        /* IL_19D2: ldc.i8 -282578800148737*/
        /* IL_19DB: call Int64 Mul(System.Int64, System.Int64)*/
        /* IL_19E0: box System.Int64*/
        /* IL_19E5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFEFEFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_19EA: ldstr Div 1*/
        /* IL_19EF: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Div 1"));
        /* IL_19F4: ldc.i4.s 15*/
        /* IL_19F6: conv.i8 */
        /* IL_19F7: ldc.i4.1 */
        /* IL_19F8: conv.i8 */
        /* IL_19F9: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_19FE: box System.Int64*/
        /* IL_1A03: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((15|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1A08: ldc.i4 255*/
        /* IL_1A0D: conv.i8 */
        /* IL_1A0E: ldc.i4.1 */
        /* IL_1A0F: conv.i8 */
        /* IL_1A10: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1A15: box System.Int64*/
        /* IL_1A1A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1A1F: ldc.i4 4095*/
        /* IL_1A24: conv.i8 */
        /* IL_1A25: ldc.i4.1 */
        /* IL_1A26: conv.i8 */
        /* IL_1A27: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1A2C: box System.Int64*/
        /* IL_1A31: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((4095|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1A36: ldc.i4 65535*/
        /* IL_1A3B: conv.i8 */
        /* IL_1A3C: ldc.i4.1 */
        /* IL_1A3D: conv.i8 */
        /* IL_1A3E: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1A43: box System.Int64*/
        /* IL_1A48: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((65535|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1A4D: ldc.i4 1048575*/
        /* IL_1A52: conv.i8 */
        /* IL_1A53: ldc.i4.1 */
        /* IL_1A54: conv.i8 */
        /* IL_1A55: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1A5A: box System.Int64*/
        /* IL_1A5F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((1048575|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1A64: ldc.i4 16777215*/
        /* IL_1A69: conv.i8 */
        /* IL_1A6A: ldc.i4.1 */
        /* IL_1A6B: conv.i8 */
        /* IL_1A6C: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1A71: box System.Int64*/
        /* IL_1A76: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((16777215|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1A7B: ldc.i4 268435455*/
        /* IL_1A80: conv.i8 */
        /* IL_1A81: ldc.i4.1 */
        /* IL_1A82: conv.i8 */
        /* IL_1A83: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1A88: box System.Int64*/
        /* IL_1A8D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((268435455|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1A92: ldc.i4.m1 */
        /* IL_1A93: conv.u8 */
        /* IL_1A94: ldc.i4.1 */
        /* IL_1A95: conv.i8 */
        /* IL_1A96: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1A9B: box System.Int64*/
        /* IL_1AA0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_u8((-1|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1AA5: ldc.i8 68719476735*/
        /* IL_1AAE: ldc.i4.1 */
        /* IL_1AAF: conv.i8 */
        /* IL_1AB0: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1AB5: box System.Int64*/
        /* IL_1ABA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1ABF: ldc.i8 1099511627775*/
        /* IL_1AC8: ldc.i4.1 */
        /* IL_1AC9: conv.i8 */
        /* IL_1ACA: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1ACF: box System.Int64*/
        /* IL_1AD4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1AD9: ldc.i8 17592186044415*/
        /* IL_1AE2: ldc.i4.1 */
        /* IL_1AE3: conv.i8 */
        /* IL_1AE4: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1AE9: box System.Int64*/
        /* IL_1AEE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1AF3: ldc.i8 281474976710655*/
        /* IL_1AFC: ldc.i4.1 */
        /* IL_1AFD: conv.i8 */
        /* IL_1AFE: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1B03: box System.Int64*/
        /* IL_1B08: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1B0D: ldc.i8 4503599627370495*/
        /* IL_1B16: ldc.i4.1 */
        /* IL_1B17: conv.i8 */
        /* IL_1B18: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1B1D: box System.Int64*/
        /* IL_1B22: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1B27: ldc.i8 72057594037927935*/
        /* IL_1B30: ldc.i4.1 */
        /* IL_1B31: conv.i8 */
        /* IL_1B32: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1B37: box System.Int64*/
        /* IL_1B3C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1B41: ldstr Div -1*/
        /* IL_1B46: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Div -1"));
        /* IL_1B4B: ldc.i4.s 15*/
        /* IL_1B4D: conv.i8 */
        /* IL_1B4E: ldc.i4.m1 */
        /* IL_1B4F: conv.i8 */
        /* IL_1B50: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1B55: box System.Int64*/
        /* IL_1B5A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((15|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1B5F: ldc.i4 255*/
        /* IL_1B64: conv.i8 */
        /* IL_1B65: ldc.i4.m1 */
        /* IL_1B66: conv.i8 */
        /* IL_1B67: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1B6C: box System.Int64*/
        /* IL_1B71: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((255|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1B76: ldc.i4 4095*/
        /* IL_1B7B: conv.i8 */
        /* IL_1B7C: ldc.i4.m1 */
        /* IL_1B7D: conv.i8 */
        /* IL_1B7E: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1B83: box System.Int64*/
        /* IL_1B88: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((4095|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1B8D: ldc.i4 65535*/
        /* IL_1B92: conv.i8 */
        /* IL_1B93: ldc.i4.m1 */
        /* IL_1B94: conv.i8 */
        /* IL_1B95: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1B9A: box System.Int64*/
        /* IL_1B9F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((65535|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1BA4: ldc.i4 1048575*/
        /* IL_1BA9: conv.i8 */
        /* IL_1BAA: ldc.i4.m1 */
        /* IL_1BAB: conv.i8 */
        /* IL_1BAC: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1BB1: box System.Int64*/
        /* IL_1BB6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((1048575|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1BBB: ldc.i4 16777215*/
        /* IL_1BC0: conv.i8 */
        /* IL_1BC1: ldc.i4.m1 */
        /* IL_1BC2: conv.i8 */
        /* IL_1BC3: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1BC8: box System.Int64*/
        /* IL_1BCD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((16777215|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1BD2: ldc.i4 268435455*/
        /* IL_1BD7: conv.i8 */
        /* IL_1BD8: ldc.i4.m1 */
        /* IL_1BD9: conv.i8 */
        /* IL_1BDA: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1BDF: box System.Int64*/
        /* IL_1BE4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((268435455|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1BE9: ldc.i4.m1 */
        /* IL_1BEA: conv.u8 */
        /* IL_1BEB: ldc.i4.m1 */
        /* IL_1BEC: conv.i8 */
        /* IL_1BED: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1BF2: box System.Int64*/
        /* IL_1BF7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_u8((-1|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1BFC: ldc.i8 68719476735*/
        /* IL_1C05: ldc.i4.m1 */
        /* IL_1C06: conv.i8 */
        /* IL_1C07: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1C0C: box System.Int64*/
        /* IL_1C11: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1C16: ldc.i8 1099511627775*/
        /* IL_1C1F: ldc.i4.m1 */
        /* IL_1C20: conv.i8 */
        /* IL_1C21: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1C26: box System.Int64*/
        /* IL_1C2B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1C30: ldc.i8 17592186044415*/
        /* IL_1C39: ldc.i4.m1 */
        /* IL_1C3A: conv.i8 */
        /* IL_1C3B: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1C40: box System.Int64*/
        /* IL_1C45: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1C4A: ldc.i8 281474976710655*/
        /* IL_1C53: ldc.i4.m1 */
        /* IL_1C54: conv.i8 */
        /* IL_1C55: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1C5A: box System.Int64*/
        /* IL_1C5F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1C64: ldc.i8 4503599627370495*/
        /* IL_1C6D: ldc.i4.m1 */
        /* IL_1C6E: conv.i8 */
        /* IL_1C6F: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1C74: box System.Int64*/
        /* IL_1C79: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1C7E: ldc.i8 72057594037927935*/
        /* IL_1C87: ldc.i4.m1 */
        /* IL_1C88: conv.i8 */
        /* IL_1C89: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1C8E: box System.Int64*/
        /* IL_1C93: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1C98: ldstr Div 2*/
        /* IL_1C9D: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Div 2"));
        /* IL_1CA2: ldc.i4.s 15*/
        /* IL_1CA4: conv.i8 */
        /* IL_1CA5: ldc.i4.2 */
        /* IL_1CA6: conv.i8 */
        /* IL_1CA7: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1CAC: box System.Int64*/
        /* IL_1CB1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((15|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1CB6: ldc.i4 255*/
        /* IL_1CBB: conv.i8 */
        /* IL_1CBC: ldc.i4.2 */
        /* IL_1CBD: conv.i8 */
        /* IL_1CBE: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1CC3: box System.Int64*/
        /* IL_1CC8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((255|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1CCD: ldc.i4 4095*/
        /* IL_1CD2: conv.i8 */
        /* IL_1CD3: ldc.i4.2 */
        /* IL_1CD4: conv.i8 */
        /* IL_1CD5: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1CDA: box System.Int64*/
        /* IL_1CDF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((4095|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1CE4: ldc.i4 65535*/
        /* IL_1CE9: conv.i8 */
        /* IL_1CEA: ldc.i4.2 */
        /* IL_1CEB: conv.i8 */
        /* IL_1CEC: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1CF1: box System.Int64*/
        /* IL_1CF6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((65535|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1CFB: ldc.i4 1048575*/
        /* IL_1D00: conv.i8 */
        /* IL_1D01: ldc.i4.2 */
        /* IL_1D02: conv.i8 */
        /* IL_1D03: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1D08: box System.Int64*/
        /* IL_1D0D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((1048575|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1D12: ldc.i4 16777215*/
        /* IL_1D17: conv.i8 */
        /* IL_1D18: ldc.i4.2 */
        /* IL_1D19: conv.i8 */
        /* IL_1D1A: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1D1F: box System.Int64*/
        /* IL_1D24: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((16777215|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1D29: ldc.i4 268435455*/
        /* IL_1D2E: conv.i8 */
        /* IL_1D2F: ldc.i4.2 */
        /* IL_1D30: conv.i8 */
        /* IL_1D31: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1D36: box System.Int64*/
        /* IL_1D3B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((268435455|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1D40: ldc.i4.m1 */
        /* IL_1D41: conv.u8 */
        /* IL_1D42: ldc.i4.2 */
        /* IL_1D43: conv.i8 */
        /* IL_1D44: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1D49: box System.Int64*/
        /* IL_1D4E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_u8((-1|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1D53: ldc.i8 68719476735*/
        /* IL_1D5C: ldc.i4.2 */
        /* IL_1D5D: conv.i8 */
        /* IL_1D5E: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1D63: box System.Int64*/
        /* IL_1D68: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1D6D: ldc.i8 1099511627775*/
        /* IL_1D76: ldc.i4.2 */
        /* IL_1D77: conv.i8 */
        /* IL_1D78: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1D7D: box System.Int64*/
        /* IL_1D82: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1D87: ldc.i8 17592186044415*/
        /* IL_1D90: ldc.i4.2 */
        /* IL_1D91: conv.i8 */
        /* IL_1D92: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1D97: box System.Int64*/
        /* IL_1D9C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1DA1: ldc.i8 281474976710655*/
        /* IL_1DAA: ldc.i4.2 */
        /* IL_1DAB: conv.i8 */
        /* IL_1DAC: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1DB1: box System.Int64*/
        /* IL_1DB6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1DBB: ldc.i8 4503599627370495*/
        /* IL_1DC4: ldc.i4.2 */
        /* IL_1DC5: conv.i8 */
        /* IL_1DC6: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1DCB: box System.Int64*/
        /* IL_1DD0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1DD5: ldc.i8 72057594037927935*/
        /* IL_1DDE: ldc.i4.2 */
        /* IL_1DDF: conv.i8 */
        /* IL_1DE0: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1DE5: box System.Int64*/
        /* IL_1DEA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1DEF: ldstr Div -2*/
        /* IL_1DF4: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Div -2"));
        /* IL_1DF9: ldc.i4.s 15*/
        /* IL_1DFB: conv.i8 */
        /* IL_1DFC: ldc.i4.s 254*/
        /* IL_1DFE: conv.i8 */
        /* IL_1DFF: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1E04: box System.Int64*/
        /* IL_1E09: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((15|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1E0E: ldc.i4 255*/
        /* IL_1E13: conv.i8 */
        /* IL_1E14: ldc.i4.s 254*/
        /* IL_1E16: conv.i8 */
        /* IL_1E17: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1E1C: box System.Int64*/
        /* IL_1E21: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((255|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1E26: ldc.i4 4095*/
        /* IL_1E2B: conv.i8 */
        /* IL_1E2C: ldc.i4.s 254*/
        /* IL_1E2E: conv.i8 */
        /* IL_1E2F: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1E34: box System.Int64*/
        /* IL_1E39: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((4095|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1E3E: ldc.i4 65535*/
        /* IL_1E43: conv.i8 */
        /* IL_1E44: ldc.i4.s 254*/
        /* IL_1E46: conv.i8 */
        /* IL_1E47: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1E4C: box System.Int64*/
        /* IL_1E51: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((65535|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1E56: ldc.i4 1048575*/
        /* IL_1E5B: conv.i8 */
        /* IL_1E5C: ldc.i4.s 254*/
        /* IL_1E5E: conv.i8 */
        /* IL_1E5F: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1E64: box System.Int64*/
        /* IL_1E69: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((1048575|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1E6E: ldc.i4 16777215*/
        /* IL_1E73: conv.i8 */
        /* IL_1E74: ldc.i4.s 254*/
        /* IL_1E76: conv.i8 */
        /* IL_1E77: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1E7C: box System.Int64*/
        /* IL_1E81: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((16777215|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1E86: ldc.i4 268435455*/
        /* IL_1E8B: conv.i8 */
        /* IL_1E8C: ldc.i4.s 254*/
        /* IL_1E8E: conv.i8 */
        /* IL_1E8F: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1E94: box System.Int64*/
        /* IL_1E99: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((268435455|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1E9E: ldc.i4.m1 */
        /* IL_1E9F: conv.u8 */
        /* IL_1EA0: ldc.i4.s 254*/
        /* IL_1EA2: conv.i8 */
        /* IL_1EA3: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1EA8: box System.Int64*/
        /* IL_1EAD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_u8((-1|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1EB2: ldc.i8 68719476735*/
        /* IL_1EBB: ldc.i4.s 254*/
        /* IL_1EBD: conv.i8 */
        /* IL_1EBE: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1EC3: box System.Int64*/
        /* IL_1EC8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1ECD: ldc.i8 1099511627775*/
        /* IL_1ED6: ldc.i4.s 254*/
        /* IL_1ED8: conv.i8 */
        /* IL_1ED9: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1EDE: box System.Int64*/
        /* IL_1EE3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1EE8: ldc.i8 17592186044415*/
        /* IL_1EF1: ldc.i4.s 254*/
        /* IL_1EF3: conv.i8 */
        /* IL_1EF4: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1EF9: box System.Int64*/
        /* IL_1EFE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1F03: ldc.i8 281474976710655*/
        /* IL_1F0C: ldc.i4.s 254*/
        /* IL_1F0E: conv.i8 */
        /* IL_1F0F: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1F14: box System.Int64*/
        /* IL_1F19: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1F1E: ldc.i8 4503599627370495*/
        /* IL_1F27: ldc.i4.s 254*/
        /* IL_1F29: conv.i8 */
        /* IL_1F2A: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1F2F: box System.Int64*/
        /* IL_1F34: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1F39: ldc.i8 72057594037927935*/
        /* IL_1F42: ldc.i4.s 254*/
        /* IL_1F44: conv.i8 */
        /* IL_1F45: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1F4A: box System.Int64*/
        /* IL_1F4F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1F54: ldstr Div 0x1, 0x010, 0x0101 etc*/
        /* IL_1F59: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Div 0x1, 0x010, 0x0101 etc"));
        /* IL_1F5E: ldc.i4 255*/
        /* IL_1F63: conv.i8 */
        /* IL_1F64: ldc.i4.1 */
        /* IL_1F65: conv.i8 */
        /* IL_1F66: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1F6B: box System.Int64*/
        /* IL_1F70: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1F75: ldc.i4 4095*/
        /* IL_1F7A: conv.i8 */
        /* IL_1F7B: ldc.i4.s 16*/
        /* IL_1F7D: conv.i8 */
        /* IL_1F7E: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1F83: box System.Int64*/
        /* IL_1F88: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((4095|0)),conv_i8((16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1F8D: ldc.i4 65535*/
        /* IL_1F92: conv.i8 */
        /* IL_1F93: ldc.i4 257*/
        /* IL_1F98: conv.i8 */
        /* IL_1F99: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1F9E: box System.Int64*/
        /* IL_1FA3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((65535|0)),conv_i8((257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1FA8: ldc.i4 1048575*/
        /* IL_1FAD: conv.i8 */
        /* IL_1FAE: ldc.i4 4112*/
        /* IL_1FB3: conv.i8 */
        /* IL_1FB4: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1FB9: box System.Int64*/
        /* IL_1FBE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((1048575|0)),conv_i8((4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1FC3: ldc.i4 16777215*/
        /* IL_1FC8: conv.i8 */
        /* IL_1FC9: ldc.i4 65793*/
        /* IL_1FCE: conv.i8 */
        /* IL_1FCF: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1FD4: box System.Int64*/
        /* IL_1FD9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((16777215|0)),conv_i8((65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1FDE: ldc.i4 268435455*/
        /* IL_1FE3: conv.i8 */
        /* IL_1FE4: ldc.i4 1052688*/
        /* IL_1FE9: conv.i8 */
        /* IL_1FEA: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_1FEF: box System.Int64*/
        /* IL_1FF4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((268435455|0)),conv_i8((1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1FF9: ldc.i4.m1 */
        /* IL_1FFA: conv.u8 */
        /* IL_1FFB: ldc.i4 16843009*/
        /* IL_2000: conv.i8 */
        /* IL_2001: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_2006: box System.Int64*/
        /* IL_200B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_u8((-1|0)),conv_i8((16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2010: ldc.i8 68719476735*/
        /* IL_2019: ldc.i4 269488144*/
        /* IL_201E: conv.i8 */
        /* IL_201F: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_2024: box System.Int64*/
        /* IL_2029: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_202E: ldc.i8 1099511627775*/
        /* IL_2037: ldc.i8 4311810305*/
        /* IL_2040: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_2045: box System.Int64*/
        /* IL_204A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0x1010101,0x1 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_204F: ldc.i8 17592186044415*/
        /* IL_2058: ldc.i8 68988964880*/
        /* IL_2061: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_2066: box System.Int64*/
        /* IL_206B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0x10101010,0x10 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2070: ldc.i8 281474976710655*/
        /* IL_2079: ldc.i8 1103823438081*/
        /* IL_2082: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_2087: box System.Int64*/
        /* IL_208C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0x1010101,0x101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2091: ldc.i8 4503599627370495*/
        /* IL_209A: ldc.i8 17661175009296*/
        /* IL_20A3: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_20A8: box System.Int64*/
        /* IL_20AD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0x10101010,0x1010 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_20B2: ldc.i8 72057594037927935*/
        /* IL_20BB: ldc.i8 282578800148737*/
        /* IL_20C4: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_20C9: box System.Int64*/
        /* IL_20CE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0x1010101,0x10101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_20D3: ldstr Div -0x1, -0x010, -0x0101 etc*/
        /* IL_20D8: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Div -0x1, -0x010, -0x0101 etc"));
        /* IL_20DD: ldc.i4 255*/
        /* IL_20E2: conv.i8 */
        /* IL_20E3: ldc.i4.m1 */
        /* IL_20E4: conv.i8 */
        /* IL_20E5: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_20EA: box System.Int64*/
        /* IL_20EF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((255|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_20F4: ldc.i4 4095*/
        /* IL_20F9: conv.i8 */
        /* IL_20FA: ldc.i4.s 240*/
        /* IL_20FC: conv.i8 */
        /* IL_20FD: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_2102: box System.Int64*/
        /* IL_2107: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((4095|0)),conv_i8((-16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_210C: ldc.i4 65535*/
        /* IL_2111: conv.i8 */
        /* IL_2112: ldc.i4 -257*/
        /* IL_2117: conv.i8 */
        /* IL_2118: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_211D: box System.Int64*/
        /* IL_2122: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((65535|0)),conv_i8((-257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2127: ldc.i4 1048575*/
        /* IL_212C: conv.i8 */
        /* IL_212D: ldc.i4 -4112*/
        /* IL_2132: conv.i8 */
        /* IL_2133: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_2138: box System.Int64*/
        /* IL_213D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((1048575|0)),conv_i8((-4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2142: ldc.i4 16777215*/
        /* IL_2147: conv.i8 */
        /* IL_2148: ldc.i4 -65793*/
        /* IL_214D: conv.i8 */
        /* IL_214E: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_2153: box System.Int64*/
        /* IL_2158: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((16777215|0)),conv_i8((-65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_215D: ldc.i4 268435455*/
        /* IL_2162: conv.i8 */
        /* IL_2163: ldc.i4 -1052688*/
        /* IL_2168: conv.i8 */
        /* IL_2169: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_216E: box System.Int64*/
        /* IL_2173: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_i8((268435455|0)),conv_i8((-1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2178: ldc.i4.m1 */
        /* IL_2179: conv.u8 */
        /* IL_217A: ldc.i4 -16843009*/
        /* IL_217F: conv.i8 */
        /* IL_2180: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_2185: box System.Int64*/
        /* IL_218A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(conv_u8((-1|0)),conv_i8((-16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_218F: ldc.i8 68719476735*/
        /* IL_2198: ldc.i4 -269488144*/
        /* IL_219D: conv.i8 */
        /* IL_219E: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_21A3: box System.Int64*/
        /* IL_21A8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((-269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_21AD: ldc.i8 1099511627775*/
        /* IL_21B6: ldc.i8 -4311810305*/
        /* IL_21BF: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_21C4: box System.Int64*/
        /* IL_21C9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFFFFFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_21CE: ldc.i8 17592186044415*/
        /* IL_21D7: ldc.i8 -68988964880*/
        /* IL_21E0: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_21E5: box System.Int64*/
        /* IL_21EA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0xEFEFEFF0,0xFFFFFFEF ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_21EF: ldc.i8 281474976710655*/
        /* IL_21F8: ldc.i8 -1103823438081*/
        /* IL_2201: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_2206: box System.Int64*/
        /* IL_220B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFFFEFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2210: ldc.i8 4503599627370495*/
        /* IL_2219: ldc.i8 -17661175009296*/
        /* IL_2222: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_2227: box System.Int64*/
        /* IL_222C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0xEFEFEFF0,0xFFFFEFEF ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2231: ldc.i8 72057594037927935*/
        /* IL_223A: ldc.i8 -282578800148737*/
        /* IL_2243: call Int64 Div(System.Int64, System.Int64)*/
        /* IL_2248: box System.Int64*/
        /* IL_224D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFEFEFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2252: ldstr Mod 1*/
        /* IL_2257: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mod 1"));
        /* IL_225C: ldc.i4.s 15*/
        /* IL_225E: conv.i8 */
        /* IL_225F: ldc.i4.1 */
        /* IL_2260: conv.i8 */
        /* IL_2261: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2266: box System.Int64*/
        /* IL_226B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((15|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2270: ldc.i4 255*/
        /* IL_2275: conv.i8 */
        /* IL_2276: ldc.i4.1 */
        /* IL_2277: conv.i8 */
        /* IL_2278: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_227D: box System.Int64*/
        /* IL_2282: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2287: ldc.i4 4095*/
        /* IL_228C: conv.i8 */
        /* IL_228D: ldc.i4.1 */
        /* IL_228E: conv.i8 */
        /* IL_228F: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2294: box System.Int64*/
        /* IL_2299: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((4095|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_229E: ldc.i4 65535*/
        /* IL_22A3: conv.i8 */
        /* IL_22A4: ldc.i4.1 */
        /* IL_22A5: conv.i8 */
        /* IL_22A6: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_22AB: box System.Int64*/
        /* IL_22B0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((65535|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_22B5: ldc.i4 1048575*/
        /* IL_22BA: conv.i8 */
        /* IL_22BB: ldc.i4.1 */
        /* IL_22BC: conv.i8 */
        /* IL_22BD: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_22C2: box System.Int64*/
        /* IL_22C7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((1048575|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_22CC: ldc.i4 16777215*/
        /* IL_22D1: conv.i8 */
        /* IL_22D2: ldc.i4.1 */
        /* IL_22D3: conv.i8 */
        /* IL_22D4: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_22D9: box System.Int64*/
        /* IL_22DE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((16777215|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_22E3: ldc.i4 268435455*/
        /* IL_22E8: conv.i8 */
        /* IL_22E9: ldc.i4.1 */
        /* IL_22EA: conv.i8 */
        /* IL_22EB: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_22F0: box System.Int64*/
        /* IL_22F5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((268435455|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_22FA: ldc.i4.m1 */
        /* IL_22FB: conv.u8 */
        /* IL_22FC: ldc.i4.1 */
        /* IL_22FD: conv.i8 */
        /* IL_22FE: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2303: box System.Int64*/
        /* IL_2308: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_u8((-1|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_230D: ldc.i8 68719476735*/
        /* IL_2316: ldc.i4.1 */
        /* IL_2317: conv.i8 */
        /* IL_2318: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_231D: box System.Int64*/
        /* IL_2322: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2327: ldc.i8 1099511627775*/
        /* IL_2330: ldc.i4.1 */
        /* IL_2331: conv.i8 */
        /* IL_2332: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2337: box System.Int64*/
        /* IL_233C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2341: ldc.i8 17592186044415*/
        /* IL_234A: ldc.i4.1 */
        /* IL_234B: conv.i8 */
        /* IL_234C: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2351: box System.Int64*/
        /* IL_2356: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_235B: ldc.i8 281474976710655*/
        /* IL_2364: ldc.i4.1 */
        /* IL_2365: conv.i8 */
        /* IL_2366: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_236B: box System.Int64*/
        /* IL_2370: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2375: ldc.i8 4503599627370495*/
        /* IL_237E: ldc.i4.1 */
        /* IL_237F: conv.i8 */
        /* IL_2380: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2385: box System.Int64*/
        /* IL_238A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_238F: ldc.i8 72057594037927935*/
        /* IL_2398: ldc.i4.1 */
        /* IL_2399: conv.i8 */
        /* IL_239A: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_239F: box System.Int64*/
        /* IL_23A4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_23A9: ldstr Mod -1*/
        /* IL_23AE: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mod -1"));
        /* IL_23B3: ldc.i4.s 15*/
        /* IL_23B5: conv.i8 */
        /* IL_23B6: ldc.i4.m1 */
        /* IL_23B7: conv.i8 */
        /* IL_23B8: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_23BD: box System.Int64*/
        /* IL_23C2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((15|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_23C7: ldc.i4 255*/
        /* IL_23CC: conv.i8 */
        /* IL_23CD: ldc.i4.m1 */
        /* IL_23CE: conv.i8 */
        /* IL_23CF: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_23D4: box System.Int64*/
        /* IL_23D9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((255|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_23DE: ldc.i4 4095*/
        /* IL_23E3: conv.i8 */
        /* IL_23E4: ldc.i4.m1 */
        /* IL_23E5: conv.i8 */
        /* IL_23E6: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_23EB: box System.Int64*/
        /* IL_23F0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((4095|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_23F5: ldc.i4 65535*/
        /* IL_23FA: conv.i8 */
        /* IL_23FB: ldc.i4.m1 */
        /* IL_23FC: conv.i8 */
        /* IL_23FD: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2402: box System.Int64*/
        /* IL_2407: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((65535|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_240C: ldc.i4 1048575*/
        /* IL_2411: conv.i8 */
        /* IL_2412: ldc.i4.m1 */
        /* IL_2413: conv.i8 */
        /* IL_2414: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2419: box System.Int64*/
        /* IL_241E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((1048575|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2423: ldc.i4 16777215*/
        /* IL_2428: conv.i8 */
        /* IL_2429: ldc.i4.m1 */
        /* IL_242A: conv.i8 */
        /* IL_242B: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2430: box System.Int64*/
        /* IL_2435: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((16777215|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_243A: ldc.i4 268435455*/
        /* IL_243F: conv.i8 */
        /* IL_2440: ldc.i4.m1 */
        /* IL_2441: conv.i8 */
        /* IL_2442: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2447: box System.Int64*/
        /* IL_244C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((268435455|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2451: ldc.i4.m1 */
        /* IL_2452: conv.u8 */
        /* IL_2453: ldc.i4.m1 */
        /* IL_2454: conv.i8 */
        /* IL_2455: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_245A: box System.Int64*/
        /* IL_245F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_u8((-1|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2464: ldc.i8 68719476735*/
        /* IL_246D: ldc.i4.m1 */
        /* IL_246E: conv.i8 */
        /* IL_246F: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2474: box System.Int64*/
        /* IL_2479: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_247E: ldc.i8 1099511627775*/
        /* IL_2487: ldc.i4.m1 */
        /* IL_2488: conv.i8 */
        /* IL_2489: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_248E: box System.Int64*/
        /* IL_2493: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2498: ldc.i8 17592186044415*/
        /* IL_24A1: ldc.i4.m1 */
        /* IL_24A2: conv.i8 */
        /* IL_24A3: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_24A8: box System.Int64*/
        /* IL_24AD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_24B2: ldc.i8 281474976710655*/
        /* IL_24BB: ldc.i4.m1 */
        /* IL_24BC: conv.i8 */
        /* IL_24BD: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_24C2: box System.Int64*/
        /* IL_24C7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_24CC: ldc.i8 4503599627370495*/
        /* IL_24D5: ldc.i4.m1 */
        /* IL_24D6: conv.i8 */
        /* IL_24D7: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_24DC: box System.Int64*/
        /* IL_24E1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_24E6: ldc.i8 72057594037927935*/
        /* IL_24EF: ldc.i4.m1 */
        /* IL_24F0: conv.i8 */
        /* IL_24F1: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_24F6: box System.Int64*/
        /* IL_24FB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2500: ldstr Mod 2*/
        /* IL_2505: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mod 2"));
        /* IL_250A: ldc.i4.s 15*/
        /* IL_250C: conv.i8 */
        /* IL_250D: ldc.i4.2 */
        /* IL_250E: conv.i8 */
        /* IL_250F: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2514: box System.Int64*/
        /* IL_2519: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((15|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_251E: ldc.i4 255*/
        /* IL_2523: conv.i8 */
        /* IL_2524: ldc.i4.2 */
        /* IL_2525: conv.i8 */
        /* IL_2526: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_252B: box System.Int64*/
        /* IL_2530: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((255|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2535: ldc.i4 4095*/
        /* IL_253A: conv.i8 */
        /* IL_253B: ldc.i4.2 */
        /* IL_253C: conv.i8 */
        /* IL_253D: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2542: box System.Int64*/
        /* IL_2547: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((4095|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_254C: ldc.i4 65535*/
        /* IL_2551: conv.i8 */
        /* IL_2552: ldc.i4.2 */
        /* IL_2553: conv.i8 */
        /* IL_2554: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2559: box System.Int64*/
        /* IL_255E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((65535|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2563: ldc.i4 1048575*/
        /* IL_2568: conv.i8 */
        /* IL_2569: ldc.i4.2 */
        /* IL_256A: conv.i8 */
        /* IL_256B: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2570: box System.Int64*/
        /* IL_2575: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((1048575|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_257A: ldc.i4 16777215*/
        /* IL_257F: conv.i8 */
        /* IL_2580: ldc.i4.2 */
        /* IL_2581: conv.i8 */
        /* IL_2582: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2587: box System.Int64*/
        /* IL_258C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((16777215|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2591: ldc.i4 268435455*/
        /* IL_2596: conv.i8 */
        /* IL_2597: ldc.i4.2 */
        /* IL_2598: conv.i8 */
        /* IL_2599: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_259E: box System.Int64*/
        /* IL_25A3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((268435455|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_25A8: ldc.i4.m1 */
        /* IL_25A9: conv.u8 */
        /* IL_25AA: ldc.i4.2 */
        /* IL_25AB: conv.i8 */
        /* IL_25AC: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_25B1: box System.Int64*/
        /* IL_25B6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_u8((-1|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_25BB: ldc.i8 68719476735*/
        /* IL_25C4: ldc.i4.2 */
        /* IL_25C5: conv.i8 */
        /* IL_25C6: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_25CB: box System.Int64*/
        /* IL_25D0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_25D5: ldc.i8 1099511627775*/
        /* IL_25DE: ldc.i4.2 */
        /* IL_25DF: conv.i8 */
        /* IL_25E0: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_25E5: box System.Int64*/
        /* IL_25EA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_25EF: ldc.i8 17592186044415*/
        /* IL_25F8: ldc.i4.2 */
        /* IL_25F9: conv.i8 */
        /* IL_25FA: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_25FF: box System.Int64*/
        /* IL_2604: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2609: ldc.i8 281474976710655*/
        /* IL_2612: ldc.i4.2 */
        /* IL_2613: conv.i8 */
        /* IL_2614: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2619: box System.Int64*/
        /* IL_261E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2623: ldc.i8 4503599627370495*/
        /* IL_262C: ldc.i4.2 */
        /* IL_262D: conv.i8 */
        /* IL_262E: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2633: box System.Int64*/
        /* IL_2638: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_263D: ldc.i8 72057594037927935*/
        /* IL_2646: ldc.i4.2 */
        /* IL_2647: conv.i8 */
        /* IL_2648: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_264D: box System.Int64*/
        /* IL_2652: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2657: ldstr Mod -2*/
        /* IL_265C: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mod -2"));
        /* IL_2661: ldc.i4.s 15*/
        /* IL_2663: conv.i8 */
        /* IL_2664: ldc.i4.s 254*/
        /* IL_2666: conv.i8 */
        /* IL_2667: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_266C: box System.Int64*/
        /* IL_2671: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((15|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2676: ldc.i4 255*/
        /* IL_267B: conv.i8 */
        /* IL_267C: ldc.i4.s 254*/
        /* IL_267E: conv.i8 */
        /* IL_267F: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2684: box System.Int64*/
        /* IL_2689: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((255|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_268E: ldc.i4 4095*/
        /* IL_2693: conv.i8 */
        /* IL_2694: ldc.i4.s 254*/
        /* IL_2696: conv.i8 */
        /* IL_2697: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_269C: box System.Int64*/
        /* IL_26A1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((4095|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_26A6: ldc.i4 65535*/
        /* IL_26AB: conv.i8 */
        /* IL_26AC: ldc.i4.s 254*/
        /* IL_26AE: conv.i8 */
        /* IL_26AF: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_26B4: box System.Int64*/
        /* IL_26B9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((65535|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_26BE: ldc.i4 1048575*/
        /* IL_26C3: conv.i8 */
        /* IL_26C4: ldc.i4.s 254*/
        /* IL_26C6: conv.i8 */
        /* IL_26C7: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_26CC: box System.Int64*/
        /* IL_26D1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((1048575|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_26D6: ldc.i4 16777215*/
        /* IL_26DB: conv.i8 */
        /* IL_26DC: ldc.i4.s 254*/
        /* IL_26DE: conv.i8 */
        /* IL_26DF: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_26E4: box System.Int64*/
        /* IL_26E9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((16777215|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_26EE: ldc.i4 268435455*/
        /* IL_26F3: conv.i8 */
        /* IL_26F4: ldc.i4.s 254*/
        /* IL_26F6: conv.i8 */
        /* IL_26F7: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_26FC: box System.Int64*/
        /* IL_2701: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((268435455|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2706: ldc.i4.m1 */
        /* IL_2707: conv.u8 */
        /* IL_2708: ldc.i4.s 254*/
        /* IL_270A: conv.i8 */
        /* IL_270B: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2710: box System.Int64*/
        /* IL_2715: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_u8((-1|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_271A: ldc.i8 68719476735*/
        /* IL_2723: ldc.i4.s 254*/
        /* IL_2725: conv.i8 */
        /* IL_2726: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_272B: box System.Int64*/
        /* IL_2730: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2735: ldc.i8 1099511627775*/
        /* IL_273E: ldc.i4.s 254*/
        /* IL_2740: conv.i8 */
        /* IL_2741: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2746: box System.Int64*/
        /* IL_274B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2750: ldc.i8 17592186044415*/
        /* IL_2759: ldc.i4.s 254*/
        /* IL_275B: conv.i8 */
        /* IL_275C: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2761: box System.Int64*/
        /* IL_2766: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_276B: ldc.i8 281474976710655*/
        /* IL_2774: ldc.i4.s 254*/
        /* IL_2776: conv.i8 */
        /* IL_2777: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_277C: box System.Int64*/
        /* IL_2781: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2786: ldc.i8 4503599627370495*/
        /* IL_278F: ldc.i4.s 254*/
        /* IL_2791: conv.i8 */
        /* IL_2792: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2797: box System.Int64*/
        /* IL_279C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_27A1: ldc.i8 72057594037927935*/
        /* IL_27AA: ldc.i4.s 254*/
        /* IL_27AC: conv.i8 */
        /* IL_27AD: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_27B2: box System.Int64*/
        /* IL_27B7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_27BC: ldstr Mod 0x1, 0x010, 0x0101 etc*/
        /* IL_27C1: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mod 0x1, 0x010, 0x0101 etc"));
        /* IL_27C6: ldc.i4 255*/
        /* IL_27CB: conv.i8 */
        /* IL_27CC: ldc.i4.1 */
        /* IL_27CD: conv.i8 */
        /* IL_27CE: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_27D3: box System.Int64*/
        /* IL_27D8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((255|0)),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_27DD: ldc.i4 4095*/
        /* IL_27E2: conv.i8 */
        /* IL_27E3: ldc.i4.s 16*/
        /* IL_27E5: conv.i8 */
        /* IL_27E6: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_27EB: box System.Int64*/
        /* IL_27F0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((4095|0)),conv_i8((16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_27F5: ldc.i4 65535*/
        /* IL_27FA: conv.i8 */
        /* IL_27FB: ldc.i4 257*/
        /* IL_2800: conv.i8 */
        /* IL_2801: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2806: box System.Int64*/
        /* IL_280B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((65535|0)),conv_i8((257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2810: ldc.i4 1048575*/
        /* IL_2815: conv.i8 */
        /* IL_2816: ldc.i4 4112*/
        /* IL_281B: conv.i8 */
        /* IL_281C: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2821: box System.Int64*/
        /* IL_2826: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((1048575|0)),conv_i8((4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_282B: ldc.i4 16777215*/
        /* IL_2830: conv.i8 */
        /* IL_2831: ldc.i4 65793*/
        /* IL_2836: conv.i8 */
        /* IL_2837: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_283C: box System.Int64*/
        /* IL_2841: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((16777215|0)),conv_i8((65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2846: ldc.i4 268435455*/
        /* IL_284B: conv.i8 */
        /* IL_284C: ldc.i4 1052688*/
        /* IL_2851: conv.i8 */
        /* IL_2852: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2857: box System.Int64*/
        /* IL_285C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((268435455|0)),conv_i8((1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2861: ldc.i4.m1 */
        /* IL_2862: conv.u8 */
        /* IL_2863: ldc.i4 16843009*/
        /* IL_2868: conv.i8 */
        /* IL_2869: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_286E: box System.Int64*/
        /* IL_2873: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_u8((-1|0)),conv_i8((16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2878: ldc.i8 68719476735*/
        /* IL_2881: ldc.i4 269488144*/
        /* IL_2886: conv.i8 */
        /* IL_2887: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_288C: box System.Int64*/
        /* IL_2891: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2896: ldc.i8 1099511627775*/
        /* IL_289F: ldc.i8 4311810305*/
        /* IL_28A8: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_28AD: box System.Int64*/
        /* IL_28B2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0x1010101,0x1 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_28B7: ldc.i8 17592186044415*/
        /* IL_28C0: ldc.i8 68988964880*/
        /* IL_28C9: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_28CE: box System.Int64*/
        /* IL_28D3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0x10101010,0x10 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_28D8: ldc.i8 281474976710655*/
        /* IL_28E1: ldc.i8 1103823438081*/
        /* IL_28EA: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_28EF: box System.Int64*/
        /* IL_28F4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0x1010101,0x101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_28F9: ldc.i8 4503599627370495*/
        /* IL_2902: ldc.i8 17661175009296*/
        /* IL_290B: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2910: box System.Int64*/
        /* IL_2915: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0x10101010,0x1010 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_291A: ldc.i8 72057594037927935*/
        /* IL_2923: ldc.i8 282578800148737*/
        /* IL_292C: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2931: box System.Int64*/
        /* IL_2936: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0x1010101,0x10101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_293B: ldstr Mod -0x1, -0x010, -0x0101 etc*/
        /* IL_2940: call Void Log(System.Object)*/
        (asm1.x6000001)(new_string("Mod -0x1, -0x010, -0x0101 etc"));
        /* IL_2945: ldc.i4 255*/
        /* IL_294A: conv.i8 */
        /* IL_294B: ldc.i4.m1 */
        /* IL_294C: conv.i8 */
        /* IL_294D: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2952: box System.Int64*/
        /* IL_2957: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((255|0)),conv_i8((-1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_295C: ldc.i4 4095*/
        /* IL_2961: conv.i8 */
        /* IL_2962: ldc.i4.s 240*/
        /* IL_2964: conv.i8 */
        /* IL_2965: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_296A: box System.Int64*/
        /* IL_296F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((4095|0)),conv_i8((-16|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2974: ldc.i4 65535*/
        /* IL_2979: conv.i8 */
        /* IL_297A: ldc.i4 -257*/
        /* IL_297F: conv.i8 */
        /* IL_2980: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2985: box System.Int64*/
        /* IL_298A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((65535|0)),conv_i8((-257|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_298F: ldc.i4 1048575*/
        /* IL_2994: conv.i8 */
        /* IL_2995: ldc.i4 -4112*/
        /* IL_299A: conv.i8 */
        /* IL_299B: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_29A0: box System.Int64*/
        /* IL_29A5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((1048575|0)),conv_i8((-4112|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_29AA: ldc.i4 16777215*/
        /* IL_29AF: conv.i8 */
        /* IL_29B0: ldc.i4 -65793*/
        /* IL_29B5: conv.i8 */
        /* IL_29B6: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_29BB: box System.Int64*/
        /* IL_29C0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((16777215|0)),conv_i8((-65793|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_29C5: ldc.i4 268435455*/
        /* IL_29CA: conv.i8 */
        /* IL_29CB: ldc.i4 -1052688*/
        /* IL_29D0: conv.i8 */
        /* IL_29D1: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_29D6: box System.Int64*/
        /* IL_29DB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((268435455|0)),conv_i8((-1052688|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_29E0: ldc.i4.m1 */
        /* IL_29E1: conv.u8 */
        /* IL_29E2: ldc.i4 -16843009*/
        /* IL_29E7: conv.i8 */
        /* IL_29E8: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_29ED: box System.Int64*/
        /* IL_29F2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_u8((-1|0)),conv_i8((-16843009|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_29F7: ldc.i8 68719476735*/
        /* IL_2A00: ldc.i4 -269488144*/
        /* IL_2A05: conv.i8 */
        /* IL_2A06: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2A0B: box System.Int64*/
        /* IL_2A10: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((-269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2A15: ldc.i8 1099511627775*/
        /* IL_2A1E: ldc.i8 -4311810305*/
        /* IL_2A27: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2A2C: box System.Int64*/
        /* IL_2A31: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFFFFFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2A36: ldc.i8 17592186044415*/
        /* IL_2A3F: ldc.i8 -68988964880*/
        /* IL_2A48: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2A4D: box System.Int64*/
        /* IL_2A52: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0xEFEFEFF0,0xFFFFFFEF ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2A57: ldc.i8 281474976710655*/
        /* IL_2A60: ldc.i8 -1103823438081*/
        /* IL_2A69: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2A6E: box System.Int64*/
        /* IL_2A73: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFFFEFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2A78: ldc.i8 4503599627370495*/
        /* IL_2A81: ldc.i8 -17661175009296*/
        /* IL_2A8A: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2A8F: box System.Int64*/
        /* IL_2A94: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0xEFEFEFF0,0xFFFFEFEF ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2A99: ldc.i8 72057594037927935*/
        /* IL_2AA2: ldc.i8 -282578800148737*/
        /* IL_2AAB: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2AB0: box System.Int64*/
        /* IL_2AB5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0xFEFEFEFF,0xFFFEFEFE ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2ABA: ldc.i4.s 15*/
        /* IL_2ABC: conv.i8 */
        /* IL_2ABD: ldc.i4.2 */
        /* IL_2ABE: conv.i8 */
        /* IL_2ABF: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2AC4: box System.Int64*/
        /* IL_2AC9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((15|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2ACE: ldc.i4.s 15*/
        /* IL_2AD0: conv.i8 */
        /* IL_2AD1: ldc.i4.s 254*/
        /* IL_2AD3: conv.i8 */
        /* IL_2AD4: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2AD9: box System.Int64*/
        /* IL_2ADE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((15|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2AE3: ldc.i4.s 241*/
        /* IL_2AE5: conv.i8 */
        /* IL_2AE6: ldc.i4.s 254*/
        /* IL_2AE8: conv.i8 */
        /* IL_2AE9: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2AEE: box System.Int64*/
        /* IL_2AF3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((-15|0)),conv_i8((-2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2AF8: ldc.i4.s 241*/
        /* IL_2AFA: conv.i8 */
        /* IL_2AFB: ldc.i4.2 */
        /* IL_2AFC: conv.i8 */
        /* IL_2AFD: call Int64 Mod(System.Int64, System.Int64)*/
        /* IL_2B02: box System.Int64*/
        /* IL_2B07: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(conv_i8((-15|0)),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2B0C: ldc.i4.0 */
        /* IL_2B0D: conv.i8 */
        /* IL_2B0E: call Void TestRightShift(System.Int64)*/
        (asm1.x6000013)(conv_i8((0|0)));
        /* IL_2B13: ldc.i4.1 */
        /* IL_2B14: conv.i8 */
        /* IL_2B15: call Void TestRightShift(System.Int64)*/
        (asm1.x6000013)(conv_i8((1|0)));
        /* IL_2B1A: ldc.i4 255*/
        /* IL_2B1F: conv.i8 */
        /* IL_2B20: call Void TestRightShift(System.Int64)*/
        (asm1.x6000013)(conv_i8((255|0)));
        /* IL_2B25: ldc.i8 282578800148737*/
        /* IL_2B2E: call Void TestRightShift(System.Int64)*/
        (asm1.x6000013)(new Uint32Array([ 0x1010101,0x10101 ]));
        /* IL_2B33: ldc.i8 4503599627370496*/
        /* IL_2B3C: call Void TestRightShift(System.Int64)*/
        (asm1.x6000013)(new Uint32Array([ 0x0,0x100000 ]));
        /* IL_2B41: ldc.i8 72057594037927935*/
        /* IL_2B4A: call Void TestRightShift(System.Int64)*/
        (asm1.x6000013)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]));
        /* IL_2B4F: ldc.i4.0 */
        /* IL_2B50: conv.i8 */
        /* IL_2B51: call Void TestLeftShift(System.Int64)*/
        (asm1.x6000014)(conv_i8((0|0)));
        /* IL_2B56: ldc.i4.1 */
        /* IL_2B57: conv.i8 */
        /* IL_2B58: call Void TestLeftShift(System.Int64)*/
        (asm1.x6000014)(conv_i8((1|0)));
        /* IL_2B5D: ldc.i4 255*/
        /* IL_2B62: conv.i8 */
        /* IL_2B63: call Void TestLeftShift(System.Int64)*/
        (asm1.x6000014)(conv_i8((255|0)));
        /* IL_2B68: ldc.i8 282578800148737*/
        /* IL_2B71: call Void TestLeftShift(System.Int64)*/
        (asm1.x6000014)(new Uint32Array([ 0x1010101,0x10101 ]));
        /* IL_2B76: ldc.i8 4503599627370496*/
        /* IL_2B7F: call Void TestLeftShift(System.Int64)*/
        (asm1.x6000014)(new Uint32Array([ 0x0,0x100000 ]));
        /* IL_2B84: ldc.i8 72057594037927935*/
        /* IL_2B8D: call Void TestLeftShift(System.Int64)*/
        (asm1.x6000014)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]));
        /* IL_2B92: ldc.i4 255*/
        /* IL_2B97: conv.i8 */
        /* IL_2B98: call Double Double(System.Int64)*/
        /* IL_2B9D: box System.Double*/
        /* IL_2BA2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000d)(conv_i8((255|0))),
            'type': t1,
            'vtable': t1.prototype.vtable
        });
        /* IL_2BA7: ldc.i8 17592186044415*/
        /* IL_2BB0: call Double Double(System.Int64)*/
        /* IL_2BB5: box System.Double*/
        /* IL_2BBA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000d)(new Uint32Array([ 0xFFFFFFFF,0xFFF ])),
            'type': t1,
            'vtable': t1.prototype.vtable
        });
        /* IL_2BBF: ret */
        return ;
    };
    asm.x600000d = function Double(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: conv.r8 */
        /* IL_02: ret */
        return to_number(arg0);
    };;
    asm.x600000e = function Add(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: add */
        /* IL_03: ret */
        return (asm0.XInt64_Addition)(arg0,arg1);
    };;
    asm.x600000f = function Sub(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: sub */
        /* IL_03: ret */
        return (asm0.XInt64_Subtraction)(arg0,arg1);
    };;
    asm.x6000010 = function Mul(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: mul */
        /* IL_03: ret */
        return (asm0.XInt64_Multiplication)(arg0,arg1);
    };;
    asm.x6000011 = function Div(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: div */
        /* IL_03: ret */
        return (asm0.Int64_Division)(arg0,arg1);
    };;
    asm.x6000012 = function Mod(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: rem */
        /* IL_03: ret */
        return (asm0.Int64_Modulus)(arg0,arg1);
    };;
    asm.x6000013_init = function ()
    {
        (((asm0)["System.Int64"])().init)();
        asm.x6000013 = asm.x6000013_;
    };;
    asm.x6000013 = function (arg0)
    {
        (asm.x6000013_init.apply)(this,arguments);
        return (asm.x6000013.apply)(this,arguments);
    };;
    asm.x6000013_ = function TestRightShift(arg0)
    {
        var t0;
        t0 = ((asm0)["System.Int64"])();
        /* IL_00: ldstr RightShift */
        /* IL_05: ldarg.0 */
        /* IL_06: box System.Int64*/
        /* IL_0B: call String Concat(System.Object, System.Object)*/
        /* IL_10: call Void Log(System.Object)*/
        (asm1.x6000001)((asm0.x60000d0)(new_string("RightShift "),{
            'boxed': arg0,
            'type': t0,
            'vtable': t0.prototype.vtable
        }));
        /* IL_15: ldarg.0 */
        /* IL_16: ldc.i4.0 */
        /* IL_17: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_1C: box System.Int64*/
        /* IL_21: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(0|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_26: ldarg.0 */
        /* IL_27: ldc.i4.1 */
        /* IL_28: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_2D: box System.Int64*/
        /* IL_32: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_37: ldarg.0 */
        /* IL_38: ldc.i4.2 */
        /* IL_39: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_3E: box System.Int64*/
        /* IL_43: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(2|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_48: ldarg.0 */
        /* IL_49: ldc.i4.7 */
        /* IL_4A: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_4F: box System.Int64*/
        /* IL_54: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(7|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_59: ldarg.0 */
        /* IL_5A: ldc.i4.8 */
        /* IL_5B: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_60: box System.Int64*/
        /* IL_65: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(8|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_6A: ldarg.0 */
        /* IL_6B: ldc.i4.s 9*/
        /* IL_6D: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_72: box System.Int64*/
        /* IL_77: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(9|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_7C: ldarg.0 */
        /* IL_7D: ldc.i4.s 15*/
        /* IL_7F: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_84: box System.Int64*/
        /* IL_89: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(15|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_8E: ldarg.0 */
        /* IL_8F: ldc.i4.s 16*/
        /* IL_91: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_96: box System.Int64*/
        /* IL_9B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(16|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_A0: ldarg.0 */
        /* IL_A1: ldc.i4.s 17*/
        /* IL_A3: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_A8: box System.Int64*/
        /* IL_AD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(17|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_B2: ldarg.0 */
        /* IL_B3: ldc.i4.s 23*/
        /* IL_B5: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_BA: box System.Int64*/
        /* IL_BF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(23|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C4: ldarg.0 */
        /* IL_C5: ldc.i4.s 24*/
        /* IL_C7: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_CC: box System.Int64*/
        /* IL_D1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(24|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D6: ldarg.0 */
        /* IL_D7: ldc.i4.s 25*/
        /* IL_D9: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_DE: box System.Int64*/
        /* IL_E3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(25|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_E8: ldarg.0 */
        /* IL_E9: ldc.i4.s 31*/
        /* IL_EB: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_F0: box System.Int64*/
        /* IL_F5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(31|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_FA: ldarg.0 */
        /* IL_FB: ldc.i4.s 32*/
        /* IL_FD: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_102: box System.Int64*/
        /* IL_107: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(32|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10C: ldarg.0 */
        /* IL_10D: ldc.i4.s 33*/
        /* IL_10F: call Int64 RightShift(System.Int64, System.Int32)*/
        /* IL_114: box System.Int64*/
        /* IL_119: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(33|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_11E: ret */
        return ;
    };
    asm.x6000014_init = function ()
    {
        (((asm0)["System.Int64"])().init)();
        asm.x6000014 = asm.x6000014_;
    };;
    asm.x6000014 = function (arg0)
    {
        (asm.x6000014_init.apply)(this,arguments);
        return (asm.x6000014.apply)(this,arguments);
    };;
    asm.x6000014_ = function TestLeftShift(arg0)
    {
        var t0;
        t0 = ((asm0)["System.Int64"])();
        /* IL_00: ldstr LeftShift */
        /* IL_05: ldarg.0 */
        /* IL_06: box System.Int64*/
        /* IL_0B: call String Concat(System.Object, System.Object)*/
        /* IL_10: call Void Log(System.Object)*/
        (asm1.x6000001)((asm0.x60000d0)(new_string("LeftShift "),{
            'boxed': arg0,
            'type': t0,
            'vtable': t0.prototype.vtable
        }));
        /* IL_15: ldarg.0 */
        /* IL_16: ldc.i4.0 */
        /* IL_17: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_1C: box System.Int64*/
        /* IL_21: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(0|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_26: ldarg.0 */
        /* IL_27: ldc.i4.1 */
        /* IL_28: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_2D: box System.Int64*/
        /* IL_32: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_37: ldarg.0 */
        /* IL_38: ldc.i4.2 */
        /* IL_39: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_3E: box System.Int64*/
        /* IL_43: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(2|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_48: ldarg.0 */
        /* IL_49: ldc.i4.7 */
        /* IL_4A: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_4F: box System.Int64*/
        /* IL_54: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(7|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_59: ldarg.0 */
        /* IL_5A: ldc.i4.8 */
        /* IL_5B: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_60: box System.Int64*/
        /* IL_65: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(8|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_6A: ldarg.0 */
        /* IL_6B: ldc.i4.s 9*/
        /* IL_6D: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_72: box System.Int64*/
        /* IL_77: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(9|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_7C: ldarg.0 */
        /* IL_7D: ldc.i4.s 15*/
        /* IL_7F: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_84: box System.Int64*/
        /* IL_89: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(15|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_8E: ldarg.0 */
        /* IL_8F: ldc.i4.s 16*/
        /* IL_91: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_96: box System.Int64*/
        /* IL_9B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(16|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_A0: ldarg.0 */
        /* IL_A1: ldc.i4.s 17*/
        /* IL_A3: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_A8: box System.Int64*/
        /* IL_AD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(17|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_B2: ldarg.0 */
        /* IL_B3: ldc.i4.s 23*/
        /* IL_B5: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_BA: box System.Int64*/
        /* IL_BF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(23|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C4: ldarg.0 */
        /* IL_C5: ldc.i4.s 24*/
        /* IL_C7: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_CC: box System.Int64*/
        /* IL_D1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(24|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D6: ldarg.0 */
        /* IL_D7: ldc.i4.s 25*/
        /* IL_D9: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_DE: box System.Int64*/
        /* IL_E3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(25|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_E8: ldarg.0 */
        /* IL_E9: ldc.i4.s 31*/
        /* IL_EB: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_F0: box System.Int64*/
        /* IL_F5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(31|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_FA: ldarg.0 */
        /* IL_FB: ldc.i4.s 32*/
        /* IL_FD: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_102: box System.Int64*/
        /* IL_107: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(32|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10C: ldarg.0 */
        /* IL_10D: ldc.i4.s 33*/
        /* IL_10F: call Int64 LeftShift(System.Int64, System.Int32)*/
        /* IL_114: box System.Int64*/
        /* IL_119: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(33|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_11E: ret */
        return ;
    };
    asm.x6000015 = function RightShift(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: ldc.i4.s 63*/
        /* IL_04: and */
        /* IL_05: shr */
        /* IL_06: ret */
        return (asm0.Int64_RightShift)(arg0,arg1 & (63|0));
    };;
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
                TestLog.CustomAttributes = [  ];
                TestLog.FullName = "TestLog";
                TestLog.Interfaces = [  ];
                TestLog.IsInst = function (t) { return t instanceof TestLog ? t : null; };
                TestLog.IsValueType = false;
                TestLog.IsPrimitive = false;
                TestLog.IsNullable = false;
                TestLog.ArrayType = Array;
                TestLog.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                TestHelper.CustomAttributes = [  ];
                TestHelper.FullName = "TestHelper";
                TestHelper.Interfaces = [  ];
                TestHelper.IsInst = function (t) { return t instanceof TestHelper ? t : null; };
                TestHelper.IsValueType = false;
                TestHelper.IsPrimitive = false;
                TestHelper.IsNullable = false;
                TestHelper.ArrayType = Array;
                TestHelper.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
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
                Program.CustomAttributes = [  ];
                Program.FullName = "Program";
                Program.Interfaces = [  ];
                Program.IsInst = function (t) { return t instanceof Program ? t : null; };
                Program.IsValueType = false;
                Program.IsPrimitive = false;
                Program.IsNullable = false;
                Program.ArrayType = Array;
                Program.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000006;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000009;
                    }
                };
            };
            Program.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
